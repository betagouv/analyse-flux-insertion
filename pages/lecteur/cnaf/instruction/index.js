import { useCallback, useEffect, useState, useReducer } from "react";
import Head from "next/head";

import Admin from "../../../../components/admin";
import Layout from "../../../../components/layout";
import FileHandler from "../../../../components/fileHandler";
import Footer from "../../../../components/footer";
import styles from "../../../../styles/Home.module.css";

import { FLUX_FREQUENCIES, FLUX_ORIGINS } from "../../../../lib/cnafGlossary";
import { initReducer, reducerFactory } from "../../../../lib/historique";
import FluxInstructionReader from "../../../../lib/readers/FluxInstructionReader";
import { csvExport } from "../../../../lib/csvExport";
import { getDateTimeString } from "../../../../lib/dates";

const reducer = reducerFactory("Test - CNAF - Instruction");
const devMode = process.env.NODE_ENV == "development";

export default function Instruction() {
  const [runs, dispatchRuns] = useReducer(reducer, [], initReducer);
  const [isPending, setIsPending] = useState(false);
  const [fileSize, setFileSize] = useState(0);

  const handleNewRuns = useCallback(data => {
    dispatchRuns({
      type: "reset",
      items: data,
    });
  });

  const handleFile = file => {
    setFileSize(file.size);
    setIsPending(true);
    const start_time = new Date();

    var reader = new FileReader();
    reader.onload = function (event) {
      const fluxInstruction = new FluxInstructionReader(event.target.result);

      setIsPending(false);

      dispatchRuns({
        type: "append",
        item: {
          seed: Math.random(),
          timestamp: new Date().toISOString().slice(0, 19),
          duration: new Date() - start_time,
          filename: file.name,
          fileSize: file.size,
          fileDatetime: fluxInstruction.fileDatetime,
          frequency: fluxInstruction.frequency,
          origin: fluxInstruction.origin,
          // WIP: OK sur Firefox KO sur Chrome
          parseError: fluxInstruction.parseError,
          total: fluxInstruction.applicationsCount,
          email: {
            total: fluxInstruction.withEmail.length,
            withAutorisation: fluxInstruction.withUsableEmail.length,
            withExplicitRefusal: fluxInstruction.withForbiddenEmailUsage.length,
            withoutAutorisationDetails: fluxInstruction.withoutEmailUsage.length,
          },
          phone: {
            total: fluxInstruction.withPhone.length,
            withAutorisation: fluxInstruction.withUsableEmail.length,
            withExplicitRefusal: fluxInstruction.withForbiddenEmailUsage.length,
            withoutAutorisationDetails: fluxInstruction.withoutEmailUsage.length,
          },
          withDSP: fluxInstruction.withDSP.length,
          applicantsPersonalData: fluxInstruction.applicantsPersonalData,
        },
      });
    };
    reader.readAsText(file);
  };

  const handleCsvExport = () => {
    const dataToExport = [];
    runs.forEach(run => {
      run.applicantsPersonalData.forEach(applicantPersonalData => {
        // We want to export the applicants data along with the file name
        dataToExport.push([...Object.values(applicantPersonalData), run.filename]);
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
      "FICHIER SOURCE",
    ];

    const csvName = "flux_insertion_donnees_personnelles_" + getDateTimeString() + ".csv";
    csvExport(csvName, dataToExport, csvHeader);
  };

  const round = value => Math.round(value);

  return (
    <Layout className={styles.container} handleFile={handleFile}>
      <Admin category="Instruction" onRunRefresh={handleNewRuns} />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Lecteur de fichier
          <br />« Instruction » de la CNAF
        </h1>

        <FileHandler
          handleFile={handleFile}
          isPending={isPending}
          fileSize={fileSize}
          message={"Calcul des statistiques en cours, merci de patienter"}
        />

        {runs && runs.length > 0 && (
          <>
            <h2 className={styles.subtitle}>Historique</h2>

            <table>
              <thead>
                <tr>
                  <th rowSpan="2">Date</th>
                  <th rowSpan="2">Fichier</th>
                  {devMode && <th rowSpan="2">Taille</th>}
                  {devMode && (
                    <th rowSpan="2">
                      Durée
                      <br />
                      (en s)
                    </th>
                  )}
                  <th rowSpan="2">Date du fichier</th>
                  <th rowSpan="2">Fréquence</th>
                  <th rowSpan="2">Nature</th>
                  <th rowSpan="2">Dossiers</th>
                  <th colSpan="8">avec email</th>
                  <th colSpan="8">avec téléphone</th>
                  <th colSpan="2" rowSpan="2">
                    DSP (%)
                  </th>
                  <th rowSpan="2">Erreur</th>
                </tr>
                <tr>
                  <th colSpan="2"># (%)</th>
                  <th colSpan="2">et autorisation (%)</th>
                  <th colSpan="2">refus explicit (%)</th>
                  <th colSpan="2">
                    <abbr title="Balise AUTORUTIADRELEC présente et égale à 'I'">
                      inconnu explicit (I) (%)
                    </abbr>
                  </th>

                  <th colSpan="2"># (%)</th>
                  <th colSpan="2">et autorisation (%)</th>
                  <th colSpan="2">refus explicit (%)</th>
                  <th colSpan="2">
                    <abbr title="Balise AUTORUTITEL présente et égale à 'I'">
                      inconnu explicit (I) (%)
                    </abbr>
                  </th>
                </tr>
              </thead>
              <tbody>
                {runs.map(r => (
                  <tr key={`${r.timestamp}-${r.filename}-${r.seed}`}>
                    <td>{r.timestamp}</td>
                    <td>{r.filename}</td>
                    {devMode && <td>{r.fileSize}</td>}
                    {devMode && <td>{!isNaN(r.duration) ? r.duration / 1000 : "#N/A"}</td>}
                    <td>{r.fileDatetime}</td>
                    <td>{`${r.frequency} (${FLUX_FREQUENCIES[r.frequency] || "?"})`}</td>
                    <td>{`${r.origin} (${FLUX_ORIGINS[r.origin] || "?"})`}</td>
                    <td className={styles.numeric}>{r.total}</td>

                    <td className={styles.numeric}>{r.email.total}</td>
                    <td className="shrink">{round((r.email.total / r.total) * 100)}</td>

                    <td className={styles.numeric}>{r.email.withAutorisation}</td>
                    <td className="shrink">{round((r.email.withAutorisation / r.total) * 100)}</td>

                    <td className={styles.numeric}>{r.email.withExplicitRefusal}</td>
                    <td className="shrink">
                      {round((r.email.withExplicitRefusal / r.total) * 100)}
                    </td>

                    <td className={styles.numeric}>{r.email.withoutAutorisationDetails}</td>
                    <td className="shrink">
                      {round((r.email.withoutAutorisationDetails / r.total) * 100)}
                    </td>

                    <td className={styles.numeric}>{r.phone.total}</td>
                    <td className="shrink">{round((r.phone.total / r.total) * 100)}</td>

                    <td className={styles.numeric}>{r.phone.withAutorisation}</td>
                    <td className="shrink">{round((r.phone.withAutorisation / r.total) * 100)}</td>

                    <td className={styles.numeric}>{r.phone.withExplicitRefusal}</td>
                    <td className="shrink">
                      {round((r.phone.withExplicitRefusal / r.total) * 100)}
                    </td>

                    <td className={styles.numeric}>{r.phone.withoutAutorisationDetails}</td>
                    <td className="shrink">
                      {round((r.phone.withoutAutorisationDetails / r.total) * 100)}
                    </td>

                    <td className={styles.numeric}>{r.withDSP}</td>
                    <td className="shrink">{round((r.withDSP / r.total) * 100)}</td>
                    <td>{r.parseError ? "Oui" : "Non"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button className={styles.button} onClick={() => dispatchRuns({ type: "reset" })}>
              Vider l'historique
            </button>
            <button className={styles.button} onClick={handleCsvExport}>
              Exporter les données de contacts
            </button>
          </>
        )}

        <Footer
          subject="Flux instruction CNAF"
          pourquoi="Pourquoi un lecteur de fichier CNAF&nbsp;?"
          text={
            <>
              <p className={styles.text}>
                Tous les départements n'ont pas les outils pour analyser les fichiers envoyés par la
                CNAF. Cela peut ralentir et compliquer nos échanges.
              </p>
              <p className={styles.text}>
                Avec cet outil, nous souhaitons permettre aux personnes qui ont accès à ces fichiers
                d'en extraire des statistiques générales sans avoir à mettre les mains dans le
                camboui elles-même.
              </p>
              <p className={styles.text}>
                Aujourd'hui, nous cherchons à comprendre pourquoi pour la CNAF 90% des dossiers
                présents dans les fichiers quotidiens d'instructions contiennent des emails alors
                que ce taux est de 30% à 50% pour certains départements.
              </p>
            </>
          }
        />
      </main>
    </Layout>
  );
}
