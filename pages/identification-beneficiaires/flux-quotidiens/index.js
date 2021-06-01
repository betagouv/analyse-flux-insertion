import Layout from "../../../components/layout";
import FileHandler from "../../../components/fileHandler";
import NewApplicantsRules from "../../../components/NewApplicantsRules/Quotidien";

import styles from "../../../styles/Home.module.css";
import {
  FLUX_ORIGINS,
  APPLICATION_ROLES,
  FLUX_FREQUENCIES,
  APPLICATION_STATUS,
} from "../../../lib/cnafGlossary";
import { useState, useReducer } from "react";
import { initReducer, reducerFactory } from "../../../lib/reducerFactory";
import FluxBeneficiaire from "../../../models/FluxBeneficiaire";
import FluxInstruction from "../../../models/FluxInstruction";
import { csvExport } from "../../../lib/csvExport";
import { getDateTimeString, applicationStringToDate } from "../../../lib/dates";

const reducer = reducerFactory("Identification nouveaux demandeurs quotidiens");
export default function identificationBeneficiaire() {
  const [fileSize, setFileSize] = useState(0);
  const [isPending, setIsPending] = useState(false);
  const [processedApplicationsCount, setProcessedApplicationsCount] = useState(0);
  const [runs, dispatchRuns] = useReducer(reducer, [], initReducer);
  const [previousMonth, dispatchPreviousMonth] = useReducer(reducer, [], initReducer);
  const [previousMonthDate, setPreviousMonthDate] = useState(null);
  const [step, setStep] = useState("previousMonth");
  const [showRules, setShowRules] = useState(false);
  const [enrichedApplicantsCount, setEnrichedApplicantsCount] = useState(0);

  const CHUNK_SIZE = 512 * 1024;
  let dispatchedApplicantsIds = [];

  const handleFileUpload = async file => {
    switch (step) {
      case "previousMonth":
        return await handlePreviousMonth(file);
      case "daily":
        return await handleDailyFlux(file);
      case "instruction":
        return await handleInstruction(file);
    }
  };

  const handleReset = () => {
    dispatchRuns({ type: "reset" });
    setStep("previousMonth");
  };

  // takes a file, a function and initial data, and process every chunk with that function to retrieve data
  const retrieveDataFromMonthlyFlux = async (
    file,
    seed,
    processChunk,
    initialData,
    additonnalArgs = []
  ) => {
    let offset = 0;
    let dataToRetrieve = initialData;

    while (offset < file.size) {
      await new Promise(resolve => {
        const reader = new FileReader();
        reader.onload = function (event) {
          let buffer = new Uint8Array(event.target.result);

          if (offset > file.size) {
            resolve();
            return;
          }

          const textChunk = new TextDecoder().decode(buffer);

          // if it is the first chunk we retrieve the infos from <IdentificationFlux> only
          if (offset === 0) {
            let matchedText = textChunk.match(/<IdentificationFlux>[\s\S]*?<\/IdentificationFlux>/);
            let textToProcess = matchedText && matchedText[0];
            const fluxBeneficiaire = new FluxBeneficiaire(textToProcess);
            const creationDate = fluxBeneficiaire.creationDate;
            const fluxOrigin = FLUX_ORIGINS[fluxBeneficiaire.origin];
            const fluxFrequency = FLUX_FREQUENCIES[fluxBeneficiaire.frequency];

            if (fluxOrigin !== "Bénéficiaires" || fluxFrequency !== "Mensuel") {
              alert(`Vous n'avez pas uploadé un flux bénéficiaires mensuel 🛑!`);
              window.location.reload(true);
              return;
            }

            setPreviousMonthDate(creationDate);

            offset += textToProcess.length + matchedText.index;

            dispatchPreviousMonth({
              type: "append",
              item: {
                fileName: file.name,
                seed: seed,
                fileSize: file.size,
                fileDatetime: fluxBeneficiaire.fileDatetime,
                fileDate: fluxBeneficiaire.creationDate,
                frequency: fluxFrequency,
                origin: fluxOrigin,
              },
            });
            resolve();
            return;
          }

          // we take all the applications in the chunk
          let allMatches = [...textChunk.matchAll(/<InfosFoyerRSA>[\s\S]*?<\/InfosFoyerRSA>/g)];

          let textToProcess = allMatches.map(match => match[0]).join("");

          if (textToProcess.length === 0) {
            offset += CHUNK_SIZE;
            resolve();
            return;
          }

          const lastMatch = allMatches[allMatches.length - 1];

          // we update the offset so that next chunk begins when the last match ends
          offset += lastMatch.index + lastMatch[0].length;

          // we have to put the entire xml content between tags for it to be correctly parsed
          const fluxChunk = new FluxBeneficiaire("<Racine>" + textToProcess + "</Racine>");

          dataToRetrieve = processChunk(fluxChunk, dataToRetrieve, additonnalArgs);

          setProcessedApplicationsCount(
            prevApplicationsCount => prevApplicationsCount + fluxChunk.applicationsCount
          );
          resolve();
        };
        let slice = file.slice(offset, offset + CHUNK_SIZE);
        reader.readAsArrayBuffer(slice);
      });
    }
    return dataToRetrieve;
  };

  const handlePreviousMonth = async file => {
    setFileSize(file.size);
    let offset = 0;
    const seed = "previousMonth";
    const startTime = new Date();

    let applicantsWithRightsIds = await retrieveDataFromMonthlyFlux(
      file,
      seed,
      function (fluxChunk, applicantsWithRightsIds, _additonnalArgs) {
        return applicantsWithRightsIds.concat(
          fluxChunk.applicantsWithRights.map(applicant => applicant.id)
        );
      },
      []
    );
    dispatchPreviousMonth({
      type: "update",
      item: {
        seed: seed,
        applicantsWithRightsIds: applicantsWithRightsIds,
      },
    });
    setProcessedApplicationsCount(0);
    setStep("daily");
    alert(
      "Les demandeurs du mois précédent ont été identifiés ✅.\n" +
        "Veuillez maintenant uploader les flux quotidiens à traiter."
    );
  };

  const handleDailyFlux = async file => {
    setFileSize(file.size);
    let newApplicantsData = [];

    await new Promise(resolve => {
      var reader = new FileReader();
      reader.onload = function (event) {
        const fluxBeneficiaire = new FluxBeneficiaire(event.target.result);

        const creationDate = fluxBeneficiaire.creationDate;
        const fluxOrigin = FLUX_ORIGINS[fluxBeneficiaire.origin];
        const fluxFrequency = FLUX_FREQUENCIES[fluxBeneficiaire.frequency];

        if (fluxOrigin !== "Bénéficiaires" || fluxFrequency !== "Quotidien") {
          alert(`Vous n'avez pas uploadé un flux bénéficiaire quotidien 🛑!`);
          resolve();
          return;
        }

        if (applicationStringToDate(creationDate) < applicationStringToDate(previousMonthDate)) {
          alert(`Attention ❗\nLe flux ${file.name} est antérieur au flux du mois précédent ⚠ !`);
        }

        if (runs.map(run => run.fileName).includes(file.name)) {
          alert(`le fichier ${file.name} a déjà été uploadé 🛑!`);
          resolve();
          return;
        }

        // existing applicant ids are ids of applicants from previous month and ids
        // of new applicants detected in the batch
        const existingApplicantsWithRightsIds = previousMonth[0].applicantsWithRightsIds.concat(
          dispatchedApplicantsIds
        );

        fluxBeneficiaire.applicantsWithRights.forEach(applicant => {
          if (!existingApplicantsWithRightsIds.includes(applicant.id)) {
            newApplicantsData.push({
              ...applicant.personalData(),
              applicationStatusCode: applicant.applicationStatusCode,
              isTopEntrant: applicant.isTopEntrant(),
            });
            dispatchedApplicantsIds.push(applicant.id);
          }
        });

        resolve();
        return;
      };
      reader.readAsText(file);
    });
    dispatchRuns({
      type: "append",
      item: {
        seed: Math.random(),
        newApplicantsData: newApplicantsData,
        fileName: file.name,
      },
    });
  };

  const handleInstruction = async file => {
    setFileSize(file.size);
    await new Promise(resolve => {
      var reader = new FileReader();
      reader.onload = function (event) {
        const fluxInstruction = new FluxInstruction(event.target.result);
        if (FLUX_ORIGINS[fluxInstruction.origin] !== "Instructions") {
          alert(`Vous n'avez pas uploadé un flux instruction 🛑!`);
          resolve();
          return;
        }
        dispatchRuns({
          type: "replace",
          items: augmentItemsWithInstruction(fluxInstruction, file.name),
        });
        resolve();
      };
      reader.readAsText(file);
    });
  };

  const augmentItemsWithInstruction = (fluxInstruction, fileName) => {
    return runs.map(run => {
      return {
        ...run,
        newApplicantsData: augmentApplicantsDataWithInstruction(
          fluxInstruction.applicants,
          fileName,
          run.newApplicantsData
        ),
      };
    });
  };

  const augmentApplicantsDataWithInstruction = (
    instructionApplicants,
    instructionFileName,
    newApplicantsData
  ) => {
    return newApplicantsData.map(applicant => {
      const instructionApplicant = instructionApplicants.find(instructionApplicant => {
        return instructionApplicant.rsaApplicationNumber === applicant.rsaApplicationNumber;
      });
      if (instructionApplicant) {
        setEnrichedApplicantsCount(prevCount => prevCount + 1);
        return {
          instructionFileName,
          ...applicant,
          ...instructionApplicant.contactInfos(),
        };
      }
      return applicant;
    });
  };

  const handleCsvExport = () => {
    const dataToExport = [];
    runs.forEach(run => {
      run.newApplicantsData.forEach(applicant => {
        // We want to export the applicants data along with the file name
        dataToExport.push([
          applicant.rsaApplicationNumber || "",
          APPLICATION_STATUS[applicant.applicationStatusCode] || "",
          applicant.socialSecurityNumber || "",
          applicant.lastName || "",
          applicant.firstName || "",
          APPLICATION_ROLES[applicant.role] || "",
          applicant.emailAddress || "",
          applicant.phoneNumber || "",
          applicant.isTopEntrant ? "OUI" : "NON",
          run.fileName,
          applicant.instructionFileName || "",
        ]);
      });
    });

    const csvHeader = [
      "NUMERO DEMANDE RSA",
      "STATUT DE LA DEMANDE",
      "NIR",
      "NOM",
      "PRENOM",
      "ROLE",
      "EMAIL",
      "TELEPHONE",
      "ENTRANT SELON TOPPERSENTDRODEVORSA",
      "FICHIER SOURCE",
      "FICHIER D'INSTRUCTION",
    ];

    const csvName = "nouveaux_demandeurs_rsa_quotidiens_" + getDateTimeString() + ".csv";
    csvExport(csvName, dataToExport, csvHeader);
  };

  const someWithEmail = runs.some(run => {
    return run.newApplicantsData.some(personalData => personalData.emailAddress);
  });

  const someWithPhone = runs.some(run => {
    return run.newApplicantsData.some(personalData => personalData.phoneNumber);
  });

  const someWithContactInfos = someWithEmail || someWithPhone;

  return (
    <Layout className={styles.container} handleFile={handleFileUpload}>
      <main className={styles.main}>
        <h1>Identifiez les nouveaux demandeurs à l'aide des flux CNAF</h1>

        <ol>
          <li style={step === "previousMonth" ? { fontWeight: "bold" } : {}}>
            Uploadez le flux mensuel du mois précédant le fichier que vous voulez analyser (
            <strong>M - 1</strong>)
          </li>
          <br />
          <li style={step === "daily" ? { fontWeight: "bold" } : {}}>
            Uploadez les flux bénéficiaires quotidiens que vous voulez analyser
          </li>
          <br />
          <li style={step === "instruction" ? { fontWeight: "bold" } : {}}>
            Uploadez le ou les fichiers "instructions" associés pour récupérer les données de
            contact des demandeurs.
          </li>
        </ol>

        {!showRules && (
          <button className={styles.button} onClick={() => setShowRules(true)}>
            Voir les règles d'identifications
          </button>
        )}
        {showRules && (
          <button className={styles.button} onClick={() => setShowRules(false)}>
            Cacher les règles d'identifications
          </button>
        )}
        {showRules && <NewApplicantsRules />}

        <FileHandler
          handleFile={handleFileUpload}
          isPending={isPending}
          fileSize={fileSize}
          uploadMessage={"Glissez et déposez les flux à analyser ou sélectionnez-les."}
          pendingMessage={
            step === "previousMonth"
              ? `${processedApplicationsCount} demandes traitées`
              : step === "instruction"
              ? "Matching en cours..."
              : "Traitement en cours..."
          }
          multiple={step !== "previousMonth"}
        />

        {step === "instruction" && enrichedApplicantsCount > 0 && (
          <h3>{enrichedApplicantsCount} demandeurs retrouvés dans les flux instructions</h3>
        )}

        {runs && runs.length > 0 && (
          <>
            {step === "daily" && (
              <button className={styles.button} onClick={() => setStep("instruction")}>
                Passer aux flux instructions
              </button>
            )}
            {step === "instruction" && (
              <button className={styles.button} onClick={() => setStep("daily")}>
                Revenir aux flux bénéficiaires
              </button>
            )}
            <div className={styles.button_group}>
              <div style={{ marginRight: "20px" }}>
                <button className={styles.button} onClick={handleCsvExport}>
                  {" "}
                  Exporter au format CSV{" "}
                </button>
              </div>
              <div>
                <button className={styles.button} onClick={handleReset}>
                  Vider l'historique
                </button>
              </div>
            </div>
            <div>
              <table className={styles.applicants_table}>
                <thead>
                  <tr>
                    <th>Numéro de demande RSA</th>
                    <th>NIR</th>
                    <th>Nom</th>
                    <th>Prénom</th>
                    <th>Rôle</th>
                    {someWithEmail && <th>Email</th>}
                    {someWithPhone && <th>Téléphone</th>}
                    <th>Entrant selon TOPPERSENTDRODEVORSA</th>
                    <th>Ficher source </th>
                    {someWithContactInfos && <th>Fichier d'instruction</th>}
                  </tr>
                </thead>
                <tbody>
                  {runs.map(({ newApplicantsData, fileName, ...run }) => {
                    return newApplicantsData.map(applicant => {
                      const keyId = [
                        applicant.rsaApplicationNumber,
                        applicant.lastName.split(" ").join("-"),
                        applicant.firstName.split(" ").join("-"),
                        applicant.role,
                        fileName,
                      ].join("-");

                      return (
                        <tr key={keyId}>
                          <td>{applicant.rsaApplicationNumber}</td>
                          <td>{applicant.socialSecurityNumber}</td>
                          <td>{applicant.lastName}</td>
                          <td>{applicant.firstName}</td>
                          <td>{APPLICATION_ROLES[applicant.role]}</td>
                          {someWithEmail && (
                            <>
                              <td>{applicant.emailAddress || ""}</td>
                            </>
                          )}
                          {someWithPhone && (
                            <>
                              <td>{applicant.phoneNumber || ""}</td>
                            </>
                          )}
                          <td className={styles.center}>
                            {applicant.isTopEntrant ? "OUI" : "NON"}
                          </td>
                          <td>{fileName}</td>
                          {someWithContactInfos && (
                            <>
                              <td>{applicant.instructionFileName || ""}</td>
                            </>
                          )}
                        </tr>
                      );
                    });
                  })}
                </tbody>
              </table>
            </div>
          </>
        )}
      </main>
    </Layout>
  );
}
