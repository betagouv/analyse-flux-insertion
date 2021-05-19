import Layout from "../../../components/layout";
import FileHandler from "../../../components/fileHandler";
import NewApplicantsRules from "../../../components/NewApplicantsRules";

import styles from "../../../styles/Home.module.css";
import { FLUX_ORIGINS, APPLICATION_ROLES } from "../../../lib/cnafGlossary";
import { useState, useReducer } from "react";
import { initReducer, reducerFactory } from "../../../lib/reducerFactory";
import FluxBeneficiaire from "../../../models/FluxBeneficiaire";
import FluxInstruction from "../../../models/FluxInstruction";
import { csvExport } from "../../../lib/csvExport";
import { getDateTimeString, yesterdayApplicationDate } from "../../../lib/dates";

const reducer = reducerFactory("Test - CNAF - Identification nouveaux demandeurs");
export default function identificationBeneficiaire() {
  const [fileSize, setFileSize] = useState(0);
  const [isPending, setIsPending] = useState(false);
  const [runs, dispatchRuns] = useReducer(reducer, [], initReducer);
  const [fluxToProcess, setFluxToProcess] = useState("bénéficiaires");
  const [showRules, setShowRules] = useState(false);
  let itemsToDispatch = [];

  const handleFileUpload = async file => {
    if (fluxToProcess == "bénéficiaires") {
      await processFluxBeneficiaire(file);
    } else {
      await processFluxInstruction(file);
    }
  };

  const handleReset = () => {
    dispatchRuns({ type: "reset" });
    setFluxToProcess("bénéficiaires");
  };

  const processFluxBeneficiaire = async file => {
    setFileSize(file.size);

    await new Promise(resolve => {
      var reader = new FileReader();
      reader.onload = function (event) {
        const fluxBeneficaire = new FluxBeneficiaire(event.target.result);
        const applicantsEligibleAsNew = fluxBeneficaire.applicantsEligibleAsNew;
        const applicantsObject = fluxBeneficaire.applicantsObject;
        let newApplicantsData = fluxBeneficaire.topEntrants.reduce((applicantsData, applicant) => {
          applicantsData[applicant.id] = {
            ...applicant.personalData(),
            isTopEntrant: true,
          };
          return applicantsData;
        }, {});
        const creationDate = fluxBeneficaire.creationDate;

        if (FLUX_ORIGINS[fluxBeneficaire.origin] !== "Bénéficiaires") {
          alert(`Vous n'avez pas uploadé un flux ${fluxToProcess} 🛑!`);
          resolve();
          return;
        }

        if (runs.map(run => run.fileName).includes(file.name)) {
          alert(`le fichier ${file.name} a déjà été uploadé 🛑!`);
          resolve();
          return;
        }

        // We check if there is a flux from the day before to check if there are new applicants
        // fitting the J-1 -> J condition.
        // We do these checks on the `runs` for the previous uploads and on the `itemsToDispatch` for the current uploads
        // in cases where we upload several files at the same time
        [runs, itemsToDispatch].forEach(resources => {
          let applicantsFromDayBefore = resources.find(
            item => item.creationDate === yesterdayApplicationDate(creationDate)
          )?.applicants;

          if (applicantsFromDayBefore) {
            applicantsEligibleAsNew.forEach(applicant => {
              const yesterdayApplicant = applicantsFromDayBefore[applicant.id];

              if (!yesterdayApplicant) {
                return;
              }

              if (applicant.withDroitsEtDevoirs() && !yesterdayApplicant.withDroitsEtDevoirs()) {
                newApplicantsData[applicant.id] = {
                  ...newApplicantsData[applicant.id],
                  ...applicant.personalData(),
                  category: "1-2-3",
                };
              }
              if (
                applicant.eligibleAsNewInFoyer() &&
                !yesterdayApplicant.inFoyerWithDroitsEtDevoirs()
              ) {
                newApplicantsData[applicant.id] = {
                  ...newApplicantsData[applicant.id],
                  ...applicant.personalData(),
                  category: "4",
                };
              }
            });
          }
        });

        const itemToDispatch = {
          seed: Math.random(),
          newApplicantsData: newApplicantsData,
          applicants: applicantsObject,
          applicantsEligibleAsNew: applicantsEligibleAsNew,
          fileName: file.name,
          creationDate: creationDate,
        };

        itemsToDispatch.push(itemToDispatch);

        dispatchRuns({
          type: "append",
          item: itemToDispatch,
        });
        resolve();
        return;
      };
      reader.readAsText(file);
    });
  };

  const processFluxInstruction = async file => {
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
    Object.entries(newApplicantsData).forEach(([applicantId, applicant]) => {
      const instructionApplicant = instructionApplicants.find(instructionApplicant => {
        return instructionApplicant.rsaApplicationNumber === applicant.rsaApplicationNumber;
      });
      if (instructionApplicant) {
        newApplicantsData[applicantId] = {
          instructionFileName,
          ...applicant,
          ...instructionApplicant.contactInfos(),
        };
      }
    });
    return newApplicantsData;
  };

  const handleCsvExport = () => {
    const dataToExport = [];
    runs.forEach(run => {
      Object.values(run.newApplicantsData).forEach(applicant => {
        // We want to export the applicants data along with the file name
        dataToExport.push([
          applicant.rsaApplicationNumber || "",
          applicant.socialSecurityNumber || "",
          applicant.lastName || "",
          applicant.firstName || "",
          APPLICATION_ROLES[applicant.role] || "",
          applicant.emailAddress || "",
          applicant.phoneNumber || "",
          applicant.isTopEntrant ? "OUI" : "NON",
          applicant.category === undefined ? "NON" : `OUI - Catégorie ${applicant.category}`,
          run.fileName,
          applicant.instructionFileName || "",
        ]);
      });
    });

    const csvHeader = [
      "NUMERO DEMANDE RSA",
      "NIR",
      "NOM",
      "PRENOM",
      "ROLE",
      "EMAIL",
      "TELEPHONE",
      "ENTRANT SELON TOPPERSENTDRODEVORSA",
      "ENTRANT SELON AUTRES CRITERES",
      "FICHIER SOURCE",
      "FICHIER D'INSTRUCTION",
    ];

    const csvName = "nouveaux_demandeurs_rsa_" + getDateTimeString() + ".csv";
    csvExport(csvName, dataToExport, csvHeader);
  };

  const someWithEmail = runs.some(run => {
    return Object.values(run.newApplicantsData).some(personalData => personalData.emailAddress);
  });

  const someWithPhone = runs.some(run => {
    return Object.values(run.newApplicantsData).some(personalData => personalData.phoneNumber);
  });

  const someWithContactInfos = someWithEmail || someWithPhone;

  return (
    <Layout className={styles.container} handleFile={handleFileUpload}>
      <main className={styles.main}>
        <h1>Identifiez les nouveaux demandeurs à l'aide des flux CNAF</h1>

        <ol>
          <li style={fluxToProcess === "bénéficiaires" ? { fontWeight: "bold" } : {}}>
            Uploadez le ou les fichiers "bénéficiaires" pour identifier les nouveaux demandeurs{" "}
            {"(< 100 Mo) "}
          </li>
          <br />
          <li>
            {" "}
            Une fois les flux bénéficiaires uploadés, cliquez sur "Passer aux flux d'instructions"
          </li>
          <br />
          <li style={fluxToProcess === "instructions" ? { fontWeight: "bold" } : {}}>
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
          sortFilesByFluxDate={true}
          uploadMessage={[
            "Glissez et déposez les flux ",
            <strong>{fluxToProcess}</strong>,
            " à analyser ou sélectionnez-les.",
          ]}
          pendingMessage={[
            "Traitement en cours, merci de patienter.",
            <br />,
            "L'identification peut prendre du temps (> 1 minute) lorsque plusieurs fichiers sont uploadés",
          ]}
        />

        {runs && runs.length > 0 && (
          <>
            {fluxToProcess === "bénéficiaires" && (
              <button className={styles.button} onClick={() => setFluxToProcess("instructions")}>
                Passer aux flux instructions
              </button>
            )}
            {fluxToProcess === "instructions" && (
              <button className={styles.button} onClick={() => setFluxToProcess("bénéficiaires")}>
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
                    <th>Entrant selon d'autres critères</th>
                    <th>Ficher source </th>
                    {someWithContactInfos && <th>Fichier d'instruction</th>}
                  </tr>
                </thead>
                <tbody>
                  {runs.map(({ newApplicantsData, fileName, ...run }) => {
                    // { newApplicantsData: { id: applicantData }, fileName: ... } => [{ id, applicantData, fileName }, ...]
                    return Object.entries(newApplicantsData).map(([applicantId, applicantData]) => {
                      const keyId = [applicantId, fileName].join("-");

                      return (
                        <tr key={keyId}>
                          <td>{applicantData.rsaApplicationNumber}</td>
                          <td>{applicantData.socialSecurityNumber}</td>
                          <td>{applicantData.lastName}</td>
                          <td>{applicantData.firstName}</td>
                          <td>{APPLICATION_ROLES[applicantData.role]}</td>
                          {someWithEmail && (
                            <>
                              <td>{applicantData.emailAddress || ""}</td>
                            </>
                          )}
                          {someWithPhone && (
                            <>
                              <td>{applicantData.phoneNumber || ""}</td>
                            </>
                          )}
                          <td className={styles.center}>
                            {applicantData.isTopEntrant ? "OUI" : "NON"}
                          </td>
                          <td className={styles.center}>
                            {applicantData.category === undefined
                              ? "NON"
                              : `OUI - Catégorie ${applicantData.category}`}
                          </td>
                          <td>{fileName}</td>
                          {someWithContactInfos && (
                            <>
                              <td>{applicantData.instructionFileName || ""}</td>
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
