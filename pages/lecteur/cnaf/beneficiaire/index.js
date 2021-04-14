import { useCallback, useEffect, useReducer, useState } from "react";
import Admin from "../../../../components/admin";
import ResponsiveCalendar from "../../../../components/chart";
import FileHandler from "../../../../components/file";
import Footer from "../../../../components/footer";
import Layout from "../../../../components/layout";
import { frequencyNames, typeNames } from "../../../../lib/cnaf";
import { initReducer, reducerFactory } from "../../../../lib/historique";
import styles from "../../../../styles/Home.module.css";

const reducer = reducerFactory("Test - CNAF - Bénéficiaire");
const devMode = process.env.NODE_ENV == "development";

export default function Beneficiaire() {
  const [devFile, setDevFile] = useState(null);
  const [runs, dispatchRuns] = useReducer(reducer, [], initReducer);
  const [isPending, setIsPending] = useState(false);
  const [fileSize, setFileSize] = useState(0);
  const [keysDroits, setKeysDroits] = useState([]);
  const [keysDevoirs, setKeysDevoirs] = useState([]);
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

    const dates = Object.keys(source.dates);
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
        value: source.dates[d],
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

  const handleFile = file => {
    if (devMode && file != devFile) {
      setDevFile(file);
    }
    setFileSize(file.size);
    setIsPending(true);
    const start_time = new Date();

    var reader = new FileReader();
    reader.onload = function (event) {
      const parser = new DOMParser();
      const dom = parser.parseFromString(
        event.target.result,
        "application/xml"
      );

      const desc = dom.getElementsByTagName("IdentificationFlux")[0];
      const frequency = desc.getElementsByTagName("TYPEFLUX")[0].innerHTML;
      const type = desc.getElementsByTagName("NATFLUX")[0].innerHTML;
      const dt = desc.getElementsByTagName("DTCREAFLUX")[0].innerHTML;
      const time = desc.getElementsByTagName("HEUCREAFLUX")[0].innerHTML;

      const processField = (accum, value) => {
        if (value[0]) {
          accum[value[0].innerHTML] = (accum[value[0].innerHTML] || 0) + 1;
          accum["Total"] = (accum["Total"] || 0) + 1;
        }
        return accum;
      };

      const folders = new Array(...dom.getElementsByTagName("InfosFoyerRSA"));
      const people = new Array(...dom.getElementsByTagName("Personne"));

      const dates = folders
        .map(i => i.getElementsByTagName("DTDEMRSA")[0].innerHTML)
        .reduce((accum, value) => {
          accum[value] = (accum[value] || 0) + 1;
          return accum;
        }, {});

      const droits = folders
        .map(i => i.getElementsByTagName("ETATDOSRSA"))
        .reduce(processField, {});
      const newKeysDroits = keysDroits.concat(Object.keys(droits));
      setKeysDroits(Array.from(new Set(newKeysDroits)).sort());

      const devoirs = people
        .map(i => i.getElementsByTagName("TOPPERSDRODEVORSA"))
        .reduce(processField, {});
      const newKeysDevoirs = keysDevoirs.concat(Object.keys(devoirs));
      setKeysDevoirs(Array.from(new Set(newKeysDevoirs)).sort());

      const foldersDroitsOuverts = folders
        .filter(i => i.getElementsByTagName("ETATDOSRSA")[0].innerHTML == "2")
        .map(i => {
          let items = i.getElementsByTagName("Personne");
          return [...items];
        })
        .flat();

      const droitsEtDevoirs = foldersDroitsOuverts
        .map(i => i.getElementsByTagName("TOPPERSDRODEVORSA"))
        .reduce(processField, {});

      setIsPending(false);

      dispatchRuns({
        type: "append",
        item: {
          seed: Math.random(),
          timestamp: new Date().toISOString().slice(0, 19),
          duration: new Date() - start_time,
          filename: file.name,
          fileDatetime: `${dt}-${time}`,
          frequency,
          type,
          // WIP: OK sur Firefox KO sur Chrome
          error:
            dom.activeElement && dom.activeElement.nodeName == "parsererror",
          total: folders.length,
          fileSize: file.size,
          people: people.length,
          dates,
          devoirs,
          droits,
          droitsEtDevoirs,
        },
      });
    };
    reader.readAsText(file);
  };

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
        />

        {runs && runs.length > 0 && (
          <>
            <h2 className={styles.subtitle}>Statistiques droits & devoirs</h2>

            <table className={styles.margin_side}>
              <thead>
                <tr>
                  <th rowSpan="2"></th>
                  <th rowSpan="2">Dossiers (Foyers)</th>
                  <th rowSpan="2">Personnes</th>
                  <th colSpan={keysDroits.length}>
                    Valeurs balises ETATDOSRSA
                  </th>
                  <th colSpan={keysDevoirs.length}>
                    Valeurs balises TOPPERSDRODEVORSA
                  </th>
                  <th rowSpan="2">
                    Personnes soumises droits et devoirs dans foyer droit ouvert
                    et versable
                  </th>
                </tr>
                <tr>
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
                </tr>
              </thead>
              <tbody>
                {runs.map((r, i) => (
                  <tr
                    key={`${r.timestamp}-${r.filename}-${r.seed}-0`}
                    style={
                      i == dateData.index
                        ? { backgroundColor: "lightgrey" }
                        : {}
                    }
                  >
                    <td>{runs.length - i}</td>
                    <td className={styles.center}>{r.total}</td>
                    <td className={styles.center}>{r.people}</td>
                    {keysDroits.map(k => (
                      <td key={k} className={styles.center}>
                        {r.droits[k] || 0}
                      </td>
                    ))}
                    {keysDevoirs.map(k => (
                      <td key={k} className={styles.center}>
                        {r.devoirs[k] || 0}
                      </td>
                    ))}
                    <td className={styles.center}>
                      {r.droitsEtDevoirs[1] || 0}
                    </td>
                  </tr>
                ))}

                <tr></tr>
              </tbody>
            </table>

            <div className={styles.legende}>
              <div className={styles.legende_box}>
                <p className={styles.legende_title}>Légende&nbsp;:</p>
                <p className={styles.bold}>Valeur balise ETATDOSRSA</p>
                <p>
                  0=Nouvelle demande en attente de décision CG pour ouverture du
                  droit
                  <br />
                  1=Droit refusé
                  <br />
                  2=Droit ouvert et versable
                  <br />
                  3=Droit ouvert et suspendu (le montant du droit est
                  calculable, mais l'existence du droit est remis en cause)
                  <br />
                  4=Droit ouvert mais versement suspendu (le montant du droit
                  n'est pas calculable)
                  <br />
                  5=Droit clos
                  <br />
                  6=Droit clos sur mois antérieur ayant eu un contrôle dans le
                  mois de référence pour une période antérieure.
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
                <p className={styles.bold}>
                  Personnes soumises droits et devoirs dans foyer droit ouvert
                  et versable
                </p>
                <p>
                  Nombre de personnes dont la balise TOPPERSDRODEVORSA=1
                  présents dans des foyers dont la balise ETATDOSRSA=2
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
                {runs.map((r, i) => (
                  <tr
                    key={`${r.timestamp}-${r.filename}-${r.seed}`}
                    style={
                      i == dateData.index
                        ? { backgroundColor: "lightgrey" }
                        : {}
                    }
                  >
                    <td>{runs.length - i}</td>
                    <td>{r.filename}</td>
                    <td>{r.timestamp}</td>
                    {devMode && <td>{r.fileSize}</td>}
                    {devMode && (
                      <td>{!isNaN(r.duration) ? r.duration / 1000 : "#N/A"}</td>
                    )}
                    <td>{r.fileDatetime}</td>
                    <td>{`${r.frequency} (${
                      frequencyNames[r.frequency] || "?"
                    })`}</td>
                    <td>{`${r.type} (${typeNames[r.type] || "?"})`}</td>
                    <td className={styles.numeric}>{r.total}</td>
                    <td className="shrink">
                      <button onClick={handleDateHistogram} data-index={i}>
                        Afficher par date
                      </button>
                    </td>
                    <td>{r.error ? "Oui" : "Non"}</td>
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
            Vous pouvez accéder à une représentation graphique de la répartition
            dans les temps des demandes connues dans les fichiers analysés. Pour
            cela il faut cliquer sur le bouton « Afficher par date ».
          </p>
        )}

        {dateData.index != undefined && (
          <>
            <h2 className={styles.subtitle}>
              Nombre de dossiers associés à des demandes réalisés à chaque date
            </h2>
            <div
              style={{ height: 250 * dateData.yearCount + "px", width: "100%" }}
            >
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
                Tous les départements n'ont pas les outils pour analyser les
                fichiers envoyés par la CNAF. Cela peut ralentir et compliquer
                nos échanges.
              </p>
              <p className={styles.text}>
                Avec cet outil, nous souhaitons permettre aux personnes qui ont
                accès à ces fichiers d'en extraire des statistiques générales
                sans avoir à mettre les mains dans le camboui elles-même.
              </p>
            </>
          }
        />
      </main>
    </Layout>
  );
}
