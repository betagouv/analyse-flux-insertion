import { useCallback, useEffect, useState, useReducer } from "react";
import Head from "next/head";

import Admin from "../../../../components/admin";
import Layout from "../../../../components/layout";
import FileHandler from "../../../../components/fileHandler";
import Footer from "../../../../components/footer";
import styles from "../../../../styles/Home.module.css";

import { FLUX_FREQUENCIES, FLUX_ORIGINS, APPLICATION_ROLES } from "../../../../lib/cnafGlossary";
import { initReducer, reducerFactory } from "../../../../lib/reducerFactory";
import { retrieveSortedKeysFromPartitions } from "../../../../lib/partitionsHelper";
import FluxInstruction from "../../../../models/FluxInstruction";
import { csvExport } from "../../../../lib/csvExport";
import { getDateTimeString } from "../../../../lib/dates";

const reducer = reducerFactory("Test - CNAF - Instruction");
const devMode = process.env.NODE_ENV == "development";

export default function Instruction() {
  const [runs, dispatchRuns] = useReducer(reducer, [], initReducer);
  const [fileSize, setFileSize] = useState(0);

  const handleNewRuns = useCallback(data => {
    dispatchRuns({
      type: "reset",
      items: data,
    });
  });

  const handleFile = async file => {
    setFileSize(file.size);
    const start_time = new Date();

    await new Promise(resolve => {
      var reader = new FileReader();
      reader.onload = function (event) {
        const fluxInstruction = new FluxInstruction(event.target.result);
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
            applicationsCount: fluxInstruction.applicationsCount,
            applicantsCount: fluxInstruction.applicantsCount,
            email: {
              total: fluxInstruction.applicationsWithEmail.length,
              withAutorisation: fluxInstruction.applicationsWithUsableEmail.length,
              withExplicitRefusal: fluxInstruction.applicationsWithForbiddenEmailUsage.length,
              withoutAutorisationDetails: fluxInstruction.applicationsWithoutEmailUsage.length,
            },
            phone: {
              total: fluxInstruction.applicatonsWithPhone.length,
              withAutorisation: fluxInstruction.applicationsWithUsablePhone.length,
              withExplicitRefusal: fluxInstruction.applicationsWithForbiddenPhoneUsage.length,
              withoutAutorisationDetails: fluxInstruction.applicationsWithoutPhoneUsage.length,
            },
            withDSP: fluxInstruction.applicationsWithDSP.length,
            applicantsPersonalData: fluxInstruction.applicantsPersonalData,
            nationalitiesPartition: fluxInstruction.nationalitiesPartition,
            activitiesPartition: fluxInstruction.activitiesPartition,
          },
        });
        resolve();
      };
      reader.readAsText(file);
    });
  };

  const handlePersonalDataCsvExport = () => {
    const dataToExport = [];
    runs.forEach(run => {
      run.applicantsPersonalData.forEach(applicant => {
        // We want to export the applicants data along with the file name
        dataToExport.push([
          applicant.rsaApplicationNumber || "",
          applicant.socialSecurityNumber || "",
          applicant.lastName || "",
          applicant.firstName || "",
          APPLICATION_ROLES[applicant.role] || "",
          applicant.emailAddress || "",
          applicant.phoneNumber || "",
          run.filename,
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
      "FICHIER SOURCE",
    ];

    const csvName = "flux_insertion_donnees_personnelles_" + getDateTimeString() + ".csv";
    csvExport(csvName, dataToExport, csvHeader);
  };

  const handleStatsCsvExport = () => {
    // const dataToExport = [];
    const dataToExport = runs.map(r => {
      return [
        r.applicationsCount,
        r.email.total,
        round((r.email.total / r.applicationsCount) * 100),
        r.email.withAutorisation,
        round((r.email.withAutorisation / r.applicationsCount) * 100),
        r.email.withExplicitRefusal,
        round((r.email.withExplicitRefusal / r.applicationsCount) * 100),
        r.email.withoutAutorisationDetails,
        round((r.email.withoutAutorisationDetails / r.applicationsCount) * 100),
        r.phone.total,
        round((r.phone.total / r.applicationsCount) * 100),
        r.phone.withAutorisation,
        round((r.phone.withAutorisation / r.applicationsCount) * 100),
        r.phone.withExplicitRefusal,
        round((r.phone.withExplicitRefusal / r.applicationsCount) * 100),
        r.phone.withoutAutorisationDetails,
        round((r.phone.withoutAutorisationDetails / r.applicationsCount) * 100),
        r.withDSP,
        round((r.withDSP / r.applicationsCount) * 100),
        r.applicantsCount,
      ]
        .concat(nationalities.map(n => r.nationalitiesPartition[n] || 0))
        .concat(activities.map(a => r.activitiesPartition[a] || 0));
    });

    const csvHeader = [
      "Dossiers",
      "Nb total de dossiers avec email",
      "Pourcentage de dossiers avec email",
      "Nb de dossiers avec autorisation explicite pour l'email",
      "Pourcentage de dossiers avec autorisation explicite pour l'email",
      "Nb de dossiers avec refus explicite pour l'email",
      "Pourcentage de dossiers avec refus explicite pour l'email",
      "Nb de dossiers avec autorisation inconnue explicite pour l'email",
      "Pourcentage de dossiers avec autorisation inconnue explicite pour l'email",
      "Nb total de dossiers avec téléphone",
      "Pourcentage de dossiers avec téléphone",
      "Nb de dossiers avec autorisation explicite pour le téléphone",
      "Pourcentage de dossiers avec autorisation explicite pour le téléphone",
      "Nb de dossiers avec refus explicite pour le téléphone",
      "Pourcentage de dossiers avec refus explicite pour le téléphone",
      "Nb de dossiers avec autorisation inconnue explicite pour le téléphone",
      "Pourcentage de dossiers avec autorisation inconnue explicite pour le téléphone",
      "Nb de dossiers avec DSP",
      "Pourcentage de dossiers avec DSP",
      "Nombre total de personnes",
    ]
      .concat(nationalities.map(n => `Nb de personnes de nationalité ${n}`))
      .concat(activities.map(a => `Nb de personne avec Activité ${a}`));

    const csvName = "flux_insertion_statistiques_" + getDateTimeString() + ".csv";
    csvExport(csvName, dataToExport, csvHeader);
  };

  const round = value => Math.round(value);

  const nationalities = retrieveSortedKeysFromPartitions(
    runs.map(run => run.nationalitiesPartition)
  );
  const activities = retrieveSortedKeysFromPartitions(runs.map(run => run.activitiesPartition));

  return (
    <Layout className={styles.container} handleFile={handleFile}>
      <Admin category="Instruction" onRunRefresh={handleNewRuns} />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Lecteur de fichier
          <br />« Instruction » de la CNAF
        </h1>

        <FileHandler handleFile={handleFile} fileSize={fileSize} />

        {runs && runs.length > 0 && (
          <>
            <div className={styles.table_container}>
              <p className={styles.subtitle}>Statistiques instructions</p>
              <table>
                <thead>
                  <tr>
                    <th rowSpan="2"></th>
                    <th rowSpan="2">Dossiers</th>
                    <th colSpan="8">avec email</th>
                    <th colSpan="8">avec téléphone</th>

                    <th colSpan="2" rowSpan="2">
                      avec DSP
                    </th>
                    <th rowSpan="2">Personnes</th>

                    <th colSpan={nationalities.length}>Nationalités</th>
                    <th colSpan={activities.length}>Activités</th>
                  </tr>
                  <tr>
                    <th colSpan="2">Total</th>
                    <th colSpan="2">et autorisation </th>
                    <th colSpan="2">refus explicit</th>
                    <th colSpan="2">
                      <abbr title="Balise AUTORUTIADRELEC présente et égale à 'I'">
                        inconnu explicit (I)
                      </abbr>
                    </th>

                    <th colSpan="2">Total</th>
                    <th colSpan="2">et autorisation</th>
                    <th colSpan="2">refus explicit</th>
                    <th colSpan="2">
                      <abbr title="Balise AUTORUTITEL présente et égale à 'I'">
                        inconnu explicit (I)
                      </abbr>
                    </th>
                    {nationalities.map(nationality => (
                      <th key={nationality} colSpan="1">
                        {nationality}
                      </th>
                    ))}
                    {activities.map(activity => (
                      <th key={activity} colSpan="1">
                        {activity}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {runs.map((r, i) => (
                    <tr key={`${r.timestamp}-${r.filename}-${r.seed}`}>
                      <td>{i + 1}</td>
                      <td>{r.applicationsCount}</td>

                      <td>{r.email.total}</td>
                      <td>{round((r.email.total / r.applicationsCount) * 100)}%</td>

                      <td>{r.email.withAutorisation}</td>
                      <td>{round((r.email.withAutorisation / r.applicationsCount) * 100)}%</td>

                      <td>{r.email.withExplicitRefusal}</td>
                      <td>{round((r.email.withExplicitRefusal / r.applicationsCount) * 100)}%</td>

                      <td>{r.email.withoutAutorisationDetails}</td>
                      <td>
                        {round((r.email.withoutAutorisationDetails / r.applicationsCount) * 100)}%
                      </td>

                      <td>{r.phone.total}</td>
                      <td>{round((r.phone.total / r.applicationsCount) * 100)}%</td>

                      <td>{r.phone.withAutorisation}</td>
                      <td>{round((r.phone.withAutorisation / r.applicationsCount) * 100)}%</td>

                      <td>{r.phone.withExplicitRefusal}</td>
                      <td>{round((r.phone.withExplicitRefusal / r.applicationsCount) * 100)}%</td>

                      <td>{r.phone.withoutAutorisationDetails}</td>
                      <td>
                        {round((r.phone.withoutAutorisationDetails / r.applicationsCount) * 100)}%
                      </td>

                      <td>{r.withDSP}</td>
                      <td>{round((r.withDSP / r.applicationsCount) * 100)}%</td>
                      <td>{r.applicantsCount}</td>
                      {nationalities.map(n => (
                        <td key={n} className={styles.center}>
                          {r.nationalitiesPartition[n] || 0}
                        </td>
                      ))}
                      {activities.map(a => (
                        <td key={a} className={styles.center}>
                          {r.activitiesPartition[a] || 0}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className={styles.button_group}>
                <button className={styles.button} onClick={handlePersonalDataCsvExport}>
                  Exporter les données de contacts
                </button>
                <button className={styles.button} onClick={handleStatsCsvExport}>
                  Exporter les statistiques
                </button>
              </div>
            </div>

            <div className={styles.table_container}>
              <p className={styles.subtitle}>Historique</p>

              <table className={styles.margin_side}>
                <thead>
                  <tr>
                    <th rowSpan="2"></th>
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
                    <th rowSpan="2">Erreur</th>
                  </tr>
                  <tr></tr>
                </thead>
                <tbody>
                  {runs.map((r, i) => (
                    <tr key={`${r.timestamp}-${r.filename}-${r.seed}`}>
                      <td>{i + 1}</td>

                      <td>{r.timestamp}</td>
                      <td>{r.filename}</td>
                      {devMode && <td>{r.fileSize}</td>}
                      {devMode && <td>{!isNaN(r.duration) ? r.duration / 1000 : "#N/A"}</td>}
                      <td>{r.fileDatetime}</td>
                      <td>{`${r.frequency} (${FLUX_FREQUENCIES[r.frequency] || "?"})`}</td>
                      <td>{`${r.origin} (${FLUX_ORIGINS[r.origin] || "?"})`}</td>
                      <td>{r.parseError ? "Oui" : "Non"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <button className={styles.button} onClick={() => dispatchRuns({ type: "reset" })}>
                Vider l'historique
              </button>
            </div>
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
