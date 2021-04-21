import Layout from "../../components/layout";
import FileHandler from "../../components/fileHandler";

import styles from "../../styles/Home.module.css";
import { useCallback, useEffect, useState, useReducer } from "react";
import { initReducer, reducerFactory } from "../../lib/historique";
import FluxBeneficiaireReader from "../../lib/readers/FluxBeneficiaireReader";

const reducer = reducerFactory("Test - CNAF - Identification nouveaux demandeurs");

export default function identificationBeneficiaire() {
  const [fileSize, setFileSize] = useState(0);
  const [isPending, setIsPending] = useState(false);
  const [runs, dispatchRuns] = useReducer(reducer, [], initReducer);

  const handleFile = file => {
    setIsPending(true);
    setFileSize(file.size);

    var reader = new FileReader();
    reader.onload = function (event) {
      const fluxBeneficaire = new FluxBeneficiaireReader(event.target.result);

      setIsPending(false);

      dispatchRuns({
        type: "append",
        item: {
          newApplicantsPersonalData: fluxBeneficaire.newApplicantsPersonalData,
        },
      });
    };
    reader.readAsText(file);
  };

  return (
    <Layout className={styles.container}>
      <main className={styles.main}>
        <h1>Identifiez les nouveaux demandeurs à l'aide des flux CNAF</h1>
        <ol>
          <li>
            Uploadez le ou les fichiers "bénéficiaires" pour identifier les nouveaux demandeurs.
          </li>
          <br />
          <li>
            Uploadez le ou les fichiers "instructions" associés pour récupérer les données de
            contact des demandeurs.
          </li>
        </ol>

        <FileHandler
          handleFile={handleFile}
          isPending={isPending}
          fileSize={fileSize}
          fileType={"bénéficiaires"}
          message={"Analyse en cours, merci de patienter"}
        />

        {runs && runs.length > 0 && (
          <>
            <h2 className={styles.subtitle}>Nouveaux demandeurs RSA</h2>

            <table className={styles.margin_side}>
              <thead>
                <tr>
                  <th>Numéro de demande RSA</th>
                  <th>NIR</th>
                  <th>Nom</th>
                  <th>Prénom</th>
                  <th>Rôle</th>
                </tr>
              </thead>
              <tbody>
                {runs
                  .flatMap(({ newApplicantsPersonalData }) => newApplicantsPersonalData)
                  .map(applicantPersonalData => {
                    return (
                      <tr key={applicantPersonalData.socialSecurityNumber}>
                        <td>{applicantPersonalData.rsaApplicationNumber}</td>
                        <td>{applicantPersonalData.socialSecurityNumber}</td>
                        <td>{applicantPersonalData.lastName}</td>
                        <td>{applicantPersonalData.firstName}</td>
                        <td>{applicantPersonalData.role}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
            <button className={styles.button} onClick={() => dispatchRuns({ type: "reset" })}>
              Vider l'historique
            </button>
          </>
        )}
      </main>
    </Layout>
  );
}
