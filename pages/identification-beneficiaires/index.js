import Layout from "../../components/layout";
import FileHandler from "../../components/fileHandler";
import NewApplicantsRules from "../../components/newApplicantsRules";
import Image from "next/image";

import styles from "../../styles/Home.module.css";
import { FLUX_ORIGINS, APPLICATION_ROLES } from "../../lib/cnafGlossary";
import { useState, useReducer } from "react";
import { initReducer, reducerFactory } from "../../lib/reducerFactory";
import FluxBeneficiaire from "../../models/FluxBeneficiaire";
import FluxInstruction from "../../models/FluxInstruction";
import { csvExport } from "../../lib/csvExport";
import { getDateTimeString, yesterdayApplicationDate } from "../../lib/dates";

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
        const applicants = fluxBeneficaire.applicants;
        const newApplicantsData = fluxBeneficaire.topEntrants.map(applicant => {
          return { ...applicant.personalData, isTopEntrant: true };
        });
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
        // in cases where we upload several files in the same time
        [runs, itemsToDispatch].forEach(resources => {
          let applicantsFromDayBefore = resources.find(
            item => item.creationDate === yesterdayApplicationDate(creationDate)
          )?.applicants;

          if (applicantsFromDayBefore) {
            applicantsEligibleAsNew.forEach(applicant => {
              const yesterdayApplicant = applicantsFromDayBefore.find(yesterdayApplicant => {
                return (
                  yesterdayApplicant.lastName === applicant.lastName &&
                  yesterdayApplicant.firstName === applicant.firstName &&
                  yesterdayApplicant.rsaApplicationNumber === applicant.rsaApplicationNumber
                );
              });

              if (!yesterdayApplicant) {
                return;
              }

              if (
                (applicant.withDroitsEtDevoirs() && !yesterdayApplicant.withDroitsEtDevoirs()) ||
                (applicant.eligibleAsNewInFoyer() &&
                  !yesterdayApplicant.inFoyerWithDroitsEtDevoirs())
              ) {
                newApplicantsData.push({
                  ...applicant.personalData,
                  isTopEntrant: false,
                });
              }
            });
          }
        });

        const itemToDispatch = {
          seed: Math.random(),
          newApplicantsData: newApplicantsData,
          applicants: applicants,
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
          return showAlert();
        }

        dispatchRuns({
          type: "replace",
          items: augmentItems(fluxInstruction.applicantsPersonalData),
        });
        resolve();
      };
      reader.readAsText(file);
    });
  };

  const augmentItems = instuctionsPersonalData => {
    return runs.map(run => {
      return {
        ...run,
        newApplicantsData: augmentPersonalData(instuctionsPersonalData, run.newApplicantsData),
      };
    });
  };

  const augmentPersonalData = (instuctionsPersonalData, beneficiairesPersonalData) => {
    return beneficiairesPersonalData.map(applicantBeneficiaireData => {
      const applicantInstructionData = instuctionsPersonalData.find(instructionData => {
        return (
          instructionData.rsaApplicationNumber === applicantBeneficiaireData.rsaApplicationNumber
        );
      });
      return { ...applicantInstructionData, ...applicantBeneficiaireData };
    });
  };

  const handleCsvExport = () => {
    const dataToExport = [];
    runs.forEach(run => {
      run.newApplicantsData.forEach(applicant => {
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
          applicant.isTopEntrant ? "NON" : "OUI",
          run.fileName,
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
    ];

    const csvName = "nouveaux_demandeurs_rsa_" + getDateTimeString() + ".csv";
    csvExport(csvName, dataToExport, csvHeader);
  };

  const someWithEmail = runs.some(run => {
    return run.newApplicantsData.some(personalData => personalData.emailAddress);
  });

  const someWithPhone = runs.some(run => {
    return run.newApplicantsData.some(personalData => personalData.phoneNumber);
  });

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
            "L'identification peut prendre du temps (> 1 minute) lorsque plusieurs fichier sont uploadés",
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
            <table className={styles.margin_side}>
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
                </tr>
              </thead>
              <tbody>
                {runs
                  .flatMap(({ newApplicantsData, ...run }) => {
                    // { applicantsPersonalData: [...], fileName: ... } => [{ applicantData, fileName }, ...]
                    return newApplicantsData.map(applicant => {
                      return { ...applicant, ...run };
                    });
                  })
                  .map(({ fileName, ...applicant }) => {
                    const keyId = [
                      applicant.rsaApplicationNumber,
                      applicant.lastName,
                      applicant.firstName,
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
                        <td className={styles.center}>{applicant.isTopEntrant ? "OUI" : "NON"}</td>
                        <td className={styles.center}>{applicant.isTopEntrant ? "NON" : "OUI"}</td>
                        <td>{fileName}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </>
        )}
      </main>
    </Layout>
  );
}
