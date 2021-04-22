import Layout from "../../components/layout";
import FileHandler from "../../components/fileHandler";

import styles from "../../styles/Home.module.css";
import { FLUX_ORIGINS } from "../../lib/cnafGlossary";
import { useState, useReducer } from "react";
import { initReducer, reducerFactory } from "../../lib/reducerFactory";
import FluxBeneficiaireReader from "../../lib/readers/FluxBeneficiaireReader";
import FluxInstructionReader from "../../lib/readers/FluxInstructionReader";

const reducer = reducerFactory("Test - CNAF - Identification nouveaux demandeurs");

export default function identificationBeneficiaire() {
  const [fileSize, setFileSize] = useState(0);
  const [isPending, setIsPending] = useState(false);
  const [runs, dispatchRuns] = useReducer(reducer, [], initReducer);
  const [fluxToProcess, setFluxToProcess] = useState("bénéficiaires");

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

  const processFluxBeneficiaire = file => {
    setIsPending(true);
    setFileSize(file.size);

    var reader = new FileReader();
    reader.onload = function (event) {
      const fluxBeneficaire = new FluxBeneficiaireReader(event.target.result);

      if (FLUX_ORIGINS[fluxBeneficaire.origin] !== "Bénéficiaires") {
        return showAlert();
      }

      setIsPending(false);
      setFluxToProcess("instructions");

      dispatchRuns({
        type: "append",
        item: {
          applicantsPersonalData: fluxBeneficaire.newApplicantsPersonalData,
          fileName: file.name,
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
      const fluxInstruction = new FluxInstructionReader(event.target.result);

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
        applicantsPersonalData: augmentPersonalData(
          instuctionsPersonalData,
          run.applicantsPersonalData
        ),
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

  const someWithEmail = runs.some(run => {
    return run.applicantsPersonalData.some(personalData => personalData.mailAddress);
  });

  const someWithPhone = runs.some(run => {
    return run.applicantsPersonalData.some(personalData => personalData.phoneNumber);
  });

  return (
    <Layout className={styles.container} handleFile={handleFileUpload}>
      <main className={styles.main}>
        <h1>Identifiez les nouveaux demandeurs à l'aide des flux CNAF</h1>
        <ol>
          <li style={fluxToProcess === "bénéficiaires" ? { fontWeight: "bold" } : {}}>
            Uploadez le ou les fichiers "bénéficiaires" pour identifier les nouveaux demandeurs.
          </li>
          <br />
          <li style={fluxToProcess === "instructions" ? { fontWeight: "bold" } : {}}>
            Uploadez le ou les fichiers "instructions" associés pour récupérer les données de
            contact des demandeurs.
          </li>
        </ol>

        <FileHandler
          handleFile={handleFileUpload}
          isPending={isPending}
          fileSize={fileSize}
          uploadMessage={`Glissez et déposez les flux ${fluxToProcess} à analyser ou sélectionnez-les.`}
          pendingMessage={"Traitement en cours, merci de patienter."}
        />

        {runs && runs.length > 0 && (
          <>
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
                  <th>Ficher source </th>
                </tr>
              </thead>
              <tbody>
                {runs
                  .flatMap(({ applicantsPersonalData, ...run }) => {
                    // { applicantsPersonalData: [...], fileName: ... } => [{ applicantData, fileName }, ...]
                    return applicantsPersonalData.map(applicantPersonalData => {
                      return { ...applicantPersonalData, ...run };
                    });
                  })
                  .map(({ fileName, ...applicantPersonalData }) => {
                    const keyId = [
                      applicantPersonalData.rsaApplicationNumber,
                      applicantPersonalData.lastName,
                      applicantPersonalData.firstName,
                      applicantPersonalData.role,
                      fileName,
                    ].join("-");

                    return (
                      <tr key={keyId}>
                        <td>{applicantPersonalData.rsaApplicationNumber}</td>
                        <td>{applicantPersonalData.socialSecurityNumber}</td>
                        <td>{applicantPersonalData.lastName}</td>
                        <td>{applicantPersonalData.firstName}</td>
                        <td>{applicantPersonalData.role}</td>
                        {someWithEmail && (
                          <>
                            <td>{applicantPersonalData.mailAddress || ""}</td>
                          </>
                        )}
                        {someWithPhone && (
                          <>
                            <td>{applicantPersonalData.phoneNumber || ""}</td>
                          </>
                        )}
                        <td>{fileName}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
            <button className={styles.button} onClick={handleReset}>
              Vider l'historique
            </button>
          </>
        )}
      </main>
    </Layout>
  );
}
