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

  const handleFileUpload = file => {
    fluxToProcess == "bénéficiaires" ? processFluxBeneficiaire(file) : processFluxInstruction(file);
  };

  const handleReset = () => {
    dispatchRuns({ type: "reset" });
    setFluxToProcess("bénéficiaires");
  };

  const showAlert = () => {
    setIsPending(false);

    alert(`Vous n'avez pas uploadé un flux ${fluxToProcess} !`);
  };

  const retrieveApplicantsFromDayBefore = date => {
    return runs.find(run => run.creationDate === yesterdayApplicationDate(date))?.applicants;
  };

  const processFluxBeneficiaire = file => {
    setIsPending(true);
    setFileSize(file.size);

    var reader = new FileReader();
    reader.onload = function (event) {
      const fluxBeneficaire = new FluxBeneficiaire(event.target.result);
      const applicantsEligibleAsNew = fluxBeneficaire.applicantsEligibleAsNew;
      const newApplicantsData = fluxBeneficaire.topEntrants.map(applicant => {
        return { ...applicant.personalData, isTopEntrant: true };
      });

      if (FLUX_ORIGINS[fluxBeneficaire.origin] !== "Bénéficiaires") {
        return showAlert();
      }

      const applicantsFromDayBefore = retrieveApplicantsFromDayBefore(fluxBeneficaire.creationDate);

      if (applicantsFromDayBefore) {
        fluxBeneficaire.applicantsEligibleAsNew.forEach(applicant => {
          const yesterdayApplicant = applicantsFromDayBefore.find(yesterdayApplicant => {
            return (
              yesterdayApplicant.lastName === applicant.lastName &&
              yesterdayApplicant.firstName === applicant.firstName &&
              yesterdayApplicant.rsaApplicationNumber === applicant.rsaApplicationNumber
            );
          });

          if (yesterdayApplicant && yesterdayApplicant.topDroitsEtDevoirs === "0") {
            newApplicantsData.push({ ...yesterdayApplicant.personalData, isTopEntrant: false });
          }
        });
      }
      setIsPending(false);

      dispatchRuns({
        type: "append",
        item: {
          seed: Math.random(),
          newApplicantsData: newApplicantsData,
          applicants: fluxBeneficaire.applicants,
          fileName: file.name,
          creationDate: fluxBeneficaire.creationDate,
        },
      });
    };
    reader.readAsText(file);
  };

  const processFluxInstruction = file => {
    setIsPending(true);
    setFileSize(file.size);

    var reader = new FileReader();
    reader.onload = function (event) {
      const fluxInstruction = new FluxInstruction(event.target.result);

      if (FLUX_ORIGINS[fluxInstruction.origin] !== "Instructions") {
        return showAlert();
      }

      setIsPending(false);

      dispatchRuns({
        type: "replace",
        items: augmentItems(fluxInstruction.applicantsPersonalData),
      });
    };
    reader.readAsText(file);
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
          uploadMessage={[
            "Glissez et déposez les flux ",
            <strong>{fluxToProcess}</strong>,
            " à analyser ou sélectionnez-les.",
          ]}
          pendingMessage={"Traitement en cours, merci de patienter."}
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
