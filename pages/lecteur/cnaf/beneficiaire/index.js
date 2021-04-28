import { useCallback, useEffect, useReducer, useState } from "react";

import Admin from "../../../../components/admin";
import ResponsiveCalendar from "../../../../components/chart";
import FileHandler from "../../../../components/fileHandler";
import Footer from "../../../../components/footer";
import Layout from "../../../../components/layout";
import { FLUX_FREQUENCIES, FLUX_ORIGINS } from "../../../../lib/cnafGlossary";
import { initReducer, reducerFactory } from "../../../../lib/reducerFactory";
import styles from "../../../../styles/Home.module.css";

import FluxBeneficiaireReader from "../../../../lib/readers/FluxBeneficiaireReader";

const reducer = reducerFactory("Test - CNAF - Bénéficiaire");
const devMode = process.env.NODE_ENV == "development";

export default function Beneficiaire() {
  const [devFile, setDevFile] = useState(null);
  const [runs, dispatchRuns] = useReducer(reducer, [], initReducer);
  const [isPending, setIsPending] = useState(false);
  const [fileSize, setFileSize] = useState(0);
  const [processedApplicationsCount, setProcessedApplicationsCount] = useState(0);
  const [fluxPartitions, setFluxPartitions] = useState(FluxBeneficiaireReader.initialPartitions);
  const [dateData, setDateData] = useState({
    index: undefined,
    data: [],
    from: "2016-03-01",
    to: "2021-03-01",
  });

  const handleNewRuns = useCallback(data => {
    dispatchRuns({
      type: "reset",
      folders: data,
    });
  });

  useEffect(() => {
    if (devFile) {
      handleFile(devFile);
    }
  }, [devFile]);

  const handleDateHistogram = useCallback(event =>
    showDateHistogram(parseInt(event.target.dataset.index))
  );
  const showDateHistogram = useCallback(index => {
    const source = runs[index];

    const dates = Object.keys(source.applicationDatesPartition);
    let minDate = null;
    let maxDate = null;

    const data = dates.map(d => {
      let date = new Date(d);
      if (!minDate) {
        minDate = date;
        maxDate = date;
      } else if (date < minDate) {
        minDate = date;
      } else if (maxDate < date) {
        maxDate = date;
      }
      return {
        day: date.toISOString().slice(0, 10),
        value: source.applicationDatesPartition[d],
      };
    });

    const yearCount = maxDate.getYear() - minDate.getYear() + 1;
    setDateData({
      index,
      data,
      from: minDate.toISOString().slice(0, 10),
      to: maxDate.toISOString().slice(0, 10),
      yearCount,
    });
  });

  const calculateTotal = (category, key = null) => {
    return runs.reduce((accum, run) => {
      const toAdd = key === null ? run[category] : run[category][key];
      return accum + (toAdd || 0);
    }, 0);
  };

  const handleFile = file => {
    setFileSize(file.size);
    file.size > 100_000_000 ? processFileByChunks(file) : processEntireFile(file);
  };

  const processFileByChunks = async file => {
    setIsPending(true);

    const startTime = new Date();

    let offset = 0;
    const CHUNK_SIZE = 512 * 1024;
    const seed = Math.random();
    const timestamp = new Date().toISOString().slice(0, 19);

    while (offset < file.size) {
      // we read the file inside a Promise because we want the chunks to be read synchronously
      // one after the other
      await new Promise(resolve => {
        var reader = new FileReader();
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
            const fluxBeneficiaire = new FluxBeneficiaireReader(textToProcess);
            offset += textToProcess.length;
            dispatchRuns({
              type: "append",
              item: {
                filename: file.name,
                seed: seed,
                timestamp: timestamp,
                fileSize: file.size,
                fileDatetime: fluxBeneficiaire.fileDatetime,
                frequency: fluxBeneficiaire.frequency,
                origin: fluxBeneficiaire.origin,
                ...fluxPartitions, // => FluxBeneficiaireReader.initialPartitions
              },
            });
            resolve();
            return;
          }

          // we take one application in a chunk
          let matchedText = textChunk.match(new RegExp(/<InfosFoyerRSA>[\s\S]*?<\/InfosFoyerRSA>/));
          let textToProcess = matchedText && matchedText[0];

          if (!textToProcess) {
            offset += CHUNK_SIZE;
            resolve();
            return;
          }

          // we update the offset so that next chunk begins when this one ends
          offset += textToProcess.length;

          const fluxChunk = new FluxBeneficiaireReader(textToProcess);

          // fluxPartitions has the partition from the stage before
          const updatedPartitions = fluxChunk.updatePartitions(fluxPartitions);

          dispatchRuns({
            type: "update",
            item: {
              seed: seed,
              ...updatedPartitions,
            },
          });
          setFluxPartitions(updatedPartitions);
          setProcessedApplicationsCount(updatedPartitions.applicationsCount);
          resolve();
        };

        let slice = file.slice(offset, offset + CHUNK_SIZE);
        reader.readAsArrayBuffer(slice);
      });
    }

    // after all the file has been processed we set the duration and we reinitialize the
    // fluxPartitions state in case we process another file by chunks
    dispatchRuns({
      type: "update",
      item: {
        seed: seed,
        duration: new Date() - startTime,
      },
    });
    setFluxPartitions(FluxBeneficiaireReader.initialPartitions);

    setIsPending(false);
    alert("Toutes les demandes ont été traitées ✅");
  };

  const processEntireFile = file => {
    setIsPending(true);

    const startTime = new Date();

    var reader = new FileReader();
    reader.onload = function (event) {
      const fluxBeneficiaire = new FluxBeneficiaireReader(event.target.result);

      // => { applicationDatesPartition, droitsPartition, devoirsPartition, droitsEtDevoirsPartition, applicantsRolesPartition, applicationsCount, applicantsCount }
      const partitions = fluxBeneficiaire.retrievePartitions();

      setIsPending(false);

      dispatchRuns({
        type: "append",
        item: {
          seed: Math.random(),
          duration: new Date() - startTime,
          timestamp: new Date().toISOString().slice(0, 19),
          filename: file.name,
          fileSize: file.size,
          fileDatetime: fluxBeneficiaire.fileDatetime,
          frequency: fluxBeneficiaire.frequency,
          origin: fluxBeneficiaire.origin,
          parseError: fluxBeneficiaire.parseError,
          ...partitions,
        },
      });
    };
    reader.readAsText(file);
  };

  const keysDroits = runs.reduce((keysDroits, run) => {
    keysDroits = keysDroits.concat(Object.keys(run.droitsPartition));
    return Array.from(new Set(keysDroits)).sort();
  }, []);

  const keysDevoirs = runs.reduce((keysDevoirs, run) => {
    keysDevoirs = keysDevoirs.concat(Object.keys(run.devoirsPartition));
    return Array.from(new Set(keysDevoirs)).sort();
  }, []);

  return (
    <Layout className={styles.container} handleFile={handleFile}>
      <Admin category="Bénéficiaire" onRunRefresh={handleNewRuns} />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Lecteur de fichier
          <br />« Bénéficiaire » de la CNAF
        </h1>

        <FileHandler
          handleFile={handleFile}
          isPending={isPending}
          fileSize={fileSize}
          pendingMessage={
            processedApplicationsCount > 0
              ? `${processedApplicationsCount} demandes traitées`
              : undefined
          }
        />

        {runs && runs.length > 0 && (
          <>
            <h2 className={styles.subtitle}>Statistiques droits & devoirs</h2>

            <table className={styles.margin_side}>
              <thead>
                <tr>
                  <th rowSpan="2"></th>
                  <th rowSpan="2">Dossiers (Foyers)</th>
                  <th colSpan="5">Personnes</th>
                  <th colSpan={keysDroits.length}>Valeurs balises ETATDOSRSA</th>
                  <th colSpan={keysDevoirs.length}>Valeurs balises TOPPERSDRODEVORSA</th>
                  <th colSpan="3">Nombre de personnes dans foyer droit ouvert et versable</th>
                </tr>
                <tr>
                  <th colSpan="1">DEM</th>
                  <th colSpan="1">CJT</th>
                  <th colSpan="1">ENF</th>
                  <th colSpan="1">AUT</th>
                  <th colSpan="1">Total</th>
                  {keysDroits.map(k => (
                    <th key={k} colSpan="1">
                      {k}
                    </th>
                  ))}
                  {keysDevoirs.map(k => (
                    <th key={k} colSpan="1">
                      {k}
                    </th>
                  ))}
                  <th colSpan="1">Soumises droits & devoirs</th>
                  <th colSpan="1">Non soumises droits & devoirs</th>
                  <th colSpan="1">Total</th>
                </tr>
              </thead>
              <tbody>
                {/* reverse est utilisé pour que les fichiers apparaissent dans leur ordre d'upload */}
                {runs.reverse().map((r, i) => (
                  <tr
                    key={`${r.timestamp}-${r.filename}-${r.seed}-0`}
                    style={i == dateData.index ? { backgroundColor: "lightgrey" } : {}}
                  >
                    <td className={styles.center}>{i + 1}</td>
                    <td className={styles.center}>{r.applicationsCount}</td>
                    <td className={styles.center}>{r.applicantsRolesPartition["DEM"] || "0"}</td>
                    <td className={styles.center}>{r.applicantsRolesPartition["CJT"] || "0"}</td>
                    <td className={styles.center}>{r.applicantsRolesPartition["ENF"] || "0"}</td>
                    <td className={styles.center}>{r.applicantsRolesPartition["AUT"] || "0"}</td>
                    <td className={styles.center}>{r.applicantsCount}</td>
                    {keysDroits.map(k => (
                      <td key={k} className={styles.center}>
                        {r.droitsPartition[k] || 0}
                      </td>
                    ))}
                    {keysDevoirs.map(k => (
                      <td key={k} className={styles.center}>
                        {r.devoirsPartition[k] || 0}
                      </td>
                    ))}
                    <td className={styles.center}>{r.droitsEtDevoirsPartition[1] || 0}</td>
                    <td className={styles.center}>{r.droitsEtDevoirsPartition[0] || 0}</td>
                    <td className={styles.center}>{r.droitsEtDevoirsPartition["Total"] || 0}</td>
                  </tr>
                ))}
                <tr>
                  <td>Total</td>
                  <td className={styles.center}>{calculateTotal("applicationsCount")}</td>
                  <td className={styles.center}>
                    {calculateTotal("applicantsRolesPartition", "DEM") || 0}
                  </td>
                  <td className={styles.center}>
                    {calculateTotal("applicantsRolesPartition", "CJT") || 0}
                  </td>
                  <td className={styles.center}>
                    {calculateTotal("applicantsRolesPartition", "ENF") || 0}
                  </td>
                  <td className={styles.center}>
                    {calculateTotal("applicantsRolesPartition", "AUT") || 0}
                  </td>
                  <td className={styles.center}>{calculateTotal("applicantsCount")}</td>
                  {keysDroits.map(k => (
                    <td key={k} className={styles.center}>
                      {calculateTotal("droitsPartition", k) || 0}
                    </td>
                  ))}
                  {keysDevoirs.map(k => (
                    <td key={k} className={styles.center}>
                      {calculateTotal("devoirsPartition", k) || 0}
                    </td>
                  ))}
                  <td className={styles.center}>
                    {calculateTotal("droitsEtDevoirsPartition", 1) || 0}
                  </td>
                  <td className={styles.center}>
                    {calculateTotal("droitsEtDevoirsPartition", 0) || 0}
                  </td>
                  <td className={styles.center}>
                    {calculateTotal("droitsEtDevoirsPartition", "Total") || 0}
                  </td>
                </tr>

                <tr></tr>
              </tbody>
            </table>

            <div className={styles.legende}>
              <div className={styles.legende_box}>
                <p className={styles.legende_title}>Légende&nbsp;:</p>
                <p className={styles.bold}>Valeur balise ETATDOSRSA</p>
                <p>
                  0=Nouvelle demande en attente de décision CG pour ouverture du droit
                  <br />
                  1=Droit refusé
                  <br />
                  2=Droit ouvert et versable
                  <br />
                  3=Droit ouvert et suspendu (le montant du droit est calculable, mais l'existence
                  du droit est remis en cause)
                  <br />
                  4=Droit ouvert mais versement suspendu (le montant du droit n'est pas calculable)
                  <br />
                  5=Droit clos
                  <br />
                  6=Droit clos sur mois antérieur ayant eu un contrôle dans le mois de référence
                  pour une période antérieure.
                </p>
              </div>
              <div className={styles.legende_box}>
                <p className={styles.bold}>Valeur balise TOPPERSDRODEVORSA</p>
                <p>
                  0=Personne pas soumise à droits et devoirs
                  <br />
                  1=Personne soumise à droits et devoirs
                </p>
                <p>&nbsp;</p>
                <p className={styles.bold}>Personnes dans foyer droit ouvert et versable</p>
                <p>
                  Soumises droits & devoirs : Nombre de personnes dont la balise TOPPERSDRODEVORSA=1
                  présents dans des foyers dont la balise ETATDOSRSA=2
                </p>
                <p>
                  Non soumises droits & devoirs : Nombre de personnes dont la balise
                  TOPPERSDRODEVORSA=0 présents dans des foyers dont la balise ETATDOSRSA=2
                </p>
              </div>
            </div>

            <h2 className={styles.subtitle}>Historique</h2>

            <table className={styles.margin_side}>
              <thead>
                <tr>
                  <th rowSpan="2"></th>
                  <th rowSpan="2">Fichier</th>
                  <th rowSpan="2">Date</th>
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
                  <th rowSpan="2">Détails</th>
                  <th rowSpan="2">Erreur</th>
                </tr>
                <tr></tr>
              </thead>
              <tbody>
                {/* reverse est utilisé pour que les fichiers apparaissent dans leur ordre d'upload */}
                {runs.reverse().map((r, i) => (
                  <tr
                    key={`${r.timestamp}-${r.filename}-${r.seed}`}
                    style={i == dateData.index ? { backgroundColor: "lightgrey" } : {}}
                  >
                    <td className={styles.center}>{i + 1}</td>
                    <td className={styles.center}>{r.filename}</td>
                    <td className={styles.center}>{r.timestamp}</td>
                    {devMode && <td className={styles.center}>{r.fileSize}</td>}
                    {devMode && (
                      <td className={styles.center}>
                        {!isNaN(r.duration) ? r.duration / 1000 : "#N/A"}
                      </td>
                    )}
                    <td className={styles.center}>{r.fileDatetime}</td>
                    <td className={styles.center}>{`${r.frequency} (${
                      FLUX_FREQUENCIES[r.frequency] || "?"
                    })`}</td>
                    <td className={styles.center}>{`${r.origin} (${
                      FLUX_ORIGINS[r.origin] || "?"
                    })`}</td>
                    <td className={styles.center}>{r.applicationsCount}</td>
                    <td className="shrink">
                      <button onClick={handleDateHistogram} data-index={i}>
                        Afficher par date
                      </button>
                    </td>
                    <td className={styles.center}>{r.parseError ? "Oui" : "Non"}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <button
              onClick={() => dispatchRuns({ type: "reset" })}
              className={styles.margin_bottom}
            >
              Vider l'historique
            </button>
          </>
        )}

        {runs.length != 0 && (
          <p className={styles.text}>
            Vous pouvez accéder à une représentation graphique de la répartition dans les temps des
            demandes connues dans les fichiers analysés. Pour cela il faut cliquer sur le bouton «
            Afficher par date ».
          </p>
        )}

        {dateData.index != undefined && (
          <>
            <h2 className={styles.subtitle}>
              Nombre de dossiers associés à des demandes réalisés à chaque date
            </h2>
            <div style={{ height: 250 * dateData.yearCount + "px", width: "100%" }}>
              {ResponsiveCalendar(dateData)}
            </div>
          </>
        )}

        <Footer
          subject="Flux bénéficiaire CNAF"
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
            </>
          }
        />
      </main>
    </Layout>
  );
}
