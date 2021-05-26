import Layout from "../../../components/layout";
import FileHandler from "../../../components/fileHandler";
import NewApplicantsRules from "../../../components/NewApplicantsRules/Mensuel";

import styles from "../../../styles/Home.module.css";

import { useState, useReducer } from "react";
import { initReducer, reducerFactory } from "../../../lib/reducerFactory";
import FluxBeneficiaire from "../../../models/FluxBeneficiaire";
import FluxInstruction from "../../../models/FluxInstruction";
import { FLUX_ORIGINS, APPLICATION_ROLES, FLUX_FREQUENCIES } from "../../../lib/cnafGlossary";
import { getDateTimeString, applicationStringToDate } from "../../../lib/dates";
import { csvExport } from "../../../lib/csvExport";

const reducer = reducerFactory("Identification nouveaux demandeurs quotidiens");

export default function identificationBeneficiaire() {
  const [fileSize, setFileSize] = useState(0);
  const [showRules, setShowRules] = useState(false);
  const [step, setStep] = useState("previousMonth");
  const [processedApplicationsCount, setProcessedApplicationsCount] = useState(0);
  const [newApplicantsCount, setNewApplicantsCount] = useState(0);
  const [fileDate, setFileDate] = useState(null);
  const [enrichedApplicantsCount, setEnrichedApplicantsCount] = useState(0);
  const [runs, dispatchRuns] = useReducer(reducer, [], initReducer);
  const CHUNK_SIZE = 512 * 1024;

  const handleFileUpload = async file => {
    switch (step) {
      case "previousMonth":
        return await handlePreviousMonth(file);
      case "currentMonth":
        return await handleCurrentMonth(file);
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
            let matchedText = textChunk.match(
              new RegExp(/<IdentificationFlux>[\s\S]*?<\/IdentificationFlux>/)
            );
            let textToProcess = matchedText && matchedText[0];
            const fluxBeneficiaire = new FluxBeneficiaire(textToProcess);
            const fluxOrigin = FLUX_ORIGINS[fluxBeneficiaire.origin];
            const fluxFrequency = FLUX_FREQUENCIES[fluxBeneficiaire.frequency];

            if (fluxOrigin !== "Bénéficiaires" && fluxFrequency !== "Mensuel") {
              alert(`Vous n'avez pas uploadé un flux bénéficiaires mensuel 🛑!`);
              return;
            }

            if (
              step === "currentMonth" &&
              applicationStringToDate(fluxBeneficiaire.creationDate) <=
                applicationStringToDate(fileDate)
            ) {
              alert(
                `Vous n'avez pas uploadé un flux bénéficiaires postérieur au premier flux uploadé 🛑!`
              );
              return;
            }

            setFileDate(fluxBeneficiaire.creationDate);

            offset += textToProcess.length + matchedText.index;

            dispatchRuns({
              type: "append",
              item: {
                fileName: file.name,
                seed: seed,
                fileSize: file.size,
                fileDatetime: fluxBeneficiaire.fileDatetime,
                fileDate: fileDate,
                frequency: fluxFrequency,
                origin: fluxOrigin,
              },
            });
            resolve();
            return;
          }

          // we take all the applications in the chunk
          let allMatches = [
            ...textChunk.matchAll(new RegExp(/<InfosFoyerRSA>[\s\S]*?<\/InfosFoyerRSA>/g)),
          ];

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
    dispatchRuns({
      type: "update",
      item: {
        seed: seed,
        applicantsWithRightsIds: applicantsWithRightsIds,
      },
    });
    setProcessedApplicationsCount(0);
    setStep("currentMonth");
    alert(
      "Les demandeurs du mois précédent ont été identifiés ✅.\n" +
        "Veuillez maintenant uploader le flux du mois à traiter."
    );
  };

  const handleCurrentMonth = async file => {
    setFileSize(file.size);
    let offset = 0;
    const seed = "currentMonth";
    const startTime = new Date();
    const existingApplicantsWithRightsIds = runs.find(run => run.seed === "previousMonth")
      .applicantsWithRightsIds;
    let applicantsWithRights = await retrieveDataFromMonthlyFlux(
      file,
      seed,
      function (fluxChunk, applicantsWithRights, existingApplicantsWithRightsIds) {
        fluxChunk.applicantsWithRights.forEach(applicant => {
          if (!existingApplicantsWithRightsIds.includes(applicant.id)) {
            applicantsWithRights.push({
              ...applicant.personalData(),
              applicationStatusCode: applicant.applicationStatusCode,
            });
          }
        });

        return applicantsWithRights;
      },
      [],
      existingApplicantsWithRightsIds
    );

    dispatchRuns({
      type: "update",
      item: {
        seed: seed,
        applicantsWithRights: applicantsWithRights,
      },
    });

    setProcessedApplicationsCount(0);
    setNewApplicantsCount(applicantsWithRights.length);
    setStep("instruction");

    alert(
      `${applicantsWithRights.length} nouveaux demandeurs ont étés identifiés  ✅!\n` +
        "Ajouter des flux instructions pour retrouver des données de contacts et exporter le tout."
    );
  };

  const handleInstruction = async file => {
    setFileSize(file.size);
    await new Promise(resolve => {
      var reader = new FileReader();
      reader.onload = function (event) {
        const fluxInstruction = new FluxInstruction(event.target.result);
        if (FLUX_ORIGINS[fluxInstruction.origin] !== "Instructions") {
          alert(`Vous n'avez pas uploadé un flux ${fluxToProcess} 🛑!`);
          resolve();
          return;
        }

        const applicantsWithRights = runs.find(run => run.seed === "currentMonth")
          .applicantsWithRights;

        dispatchRuns({
          type: "update",
          item: {
            seed: "currentMonth",
            applicantsWithRights: augmentApplicantsWithInstruction(
              fluxInstruction.applicants,
              file.name,
              applicantsWithRights
            ),
          },
        });
        resolve();
      };
      reader.readAsText(file);
    });
  };

  const augmentApplicantsWithInstruction = (
    instructionApplicants,
    instructionFileName,
    applicantsWithRights
  ) => {
    return applicantsWithRights.map(applicant => {
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
    const currentFlux = runs.find(run => run.seed === "currentMonth");
    const dataToExport = currentFlux.applicantsWithRights.map(applicant => {
      return [
        applicant.rsaApplicationNumber || "",
        applicant.applicationStatusCode || "",
        applicant.socialSecurityNumber || "",
        applicant.lastName || "",
        applicant.firstName || "",
        APPLICATION_ROLES[applicant.role] || "",
        applicant.emailAddress || "",
        applicant.phoneNumber || "",
        currentFlux.fileName,
        applicant.instructionFileName || "",
      ];
    });

    const csvHeader = [
      "NUMERO DEMANDE RSA",
      "ETATDOSRSA",
      "NIR",
      "NOM",
      "PRENOM",
      "ROLE",
      "EMAIL",
      "TELEPHONE",
      "FICHIER SOURCE",
      "FICHIER D'INSTRUCTION",
    ];

    const csvName = "nouveaux_demandeurs_rsa_mensuels_" + getDateTimeString() + ".csv";
    csvExport(csvName, dataToExport, csvHeader);
  };

  return (
    <Layout className={styles.container} handleFile={handleFileUpload}>
      <main className={styles.main}>
        <h1>Identifiez les nouveaux demandeurs à l'aide des flux CNAF</h1>
        <ol>
          <li style={step === "previousMonth" ? { fontWeight: "bold" } : {}}>
            Uploadez le flux mensuel du mois précédent le fichier que vous voulez analyser (
            <strong>M - 1</strong>)
          </li>
          <br />
          <li style={step === "currentMonth" ? { fontWeight: "bold" } : {}}>
            Uploadez le flux mensuel que vous voulez analyser (<strong>M</strong>)
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
          fileSize={fileSize}
          multiple={step === "instruction"}
          uploadMessage={"Glissez et déposez le flux à analyser ou sélectionnez-le."}
          pendingMessage={
            step === "instruction"
              ? "Matching en cours..."
              : `${processedApplicationsCount} demandes traitées`
          }
        />
        {step === "instruction" && (
          <div className={styles.button_group}>
            <div style={{ marginRight: "20px" }}>
              <button className={styles.button} onClick={handleCsvExport}>
                {" "}
                Exporter les {newApplicantsCount} nouveaux demandeurs au format CSV{" "}
              </button>
            </div>
            <div>
              <button className={styles.button} onClick={handleReset}>
                Vider l'historique
              </button>
            </div>
          </div>
        )}
        {step === "instruction" && enrichedApplicantsCount > 0 && (
          <h3>{enrichedApplicantsCount} demandeurs retrouvés dans les flux instructions</h3>
        )}
      </main>
    </Layout>
  );
}
