// Ca affiche la liste des personnes (avec des informations) et notamment "personne dans rdv-S ou pas", "est-ce qu’il y a rdv sur rdv-S"
// Simplifier le travail d'Isabelle. More details to come...

import {useCallback, useEffect, useState, useReducer} from 'react'
import Head from 'next/head'
import * as XLSX from 'xlsx';

// import Admin from '../../../components/admin'
// import ResponsiveCalendar from '../../../components/chart'
import Layout from '../../../components/layout'
import Mailer from '../../../components/mailer'
import PendingMessage from '../../../components/pending'
import styles from '../../../styles/Home.module.css'

import { initReducer, reducerFactory } from '../../../lib/historique'

const reducer = reducerFactory('Expérimentation Ardennes - CNAF - Bénéficiaire')
const devMode = process.env.NODE_ENV == 'development'

export default function Ardennes() {
  const [devFile, setDevFile] = useState(null)
  const [runs, dispatchRuns] = useReducer(reducer, [], initReducer)
  const [isPending, setIsPending] = useState(false);
  const [fileSize, setFileSize] = useState(0);

  const handleNewRuns = useCallback(data => {
    dispatchRuns({
      type: 'reset',
      items: data
    })
  })

  useEffect(() => {
    if(devFile) {
      fileHandler(devFile)
    }
  }, [devFile])

  const selectHandler = useCallback((event) => {
    for (var i = 0; i<event.target.files.length; i++) {
      fileHandler(event.target.files[i])
    }
    event.target.value = ''
  })

  const fileHandler = (file) => {
    if (devMode && file != devFile) {
      setDevFile(file)
    }
    setFileSize(file.size);
    setIsPending(true);
    const start_time = new Date();

    var reader = new FileReader()
    reader.onload = function(event) {
      const xls = XLSX.read(event.target.result, {type:'binary'})

      /* Get first worksheet */
      const ws = xls.Sheets[xls.SheetNames[0]];

      // /* THEN = > Convert array of arrays to csv */
      const data = XLSX.utils.sheet_to_csv(ws, {header:1});
      // /* Update state */
      console.log("Data>>>" + data);

      /* ALTERNATIVE => Convert array to json*/
      const dataParse = XLSX.utils.sheet_to_json(ws, {header:1});
      console.log(dataParse);

      // const desc = dom.getElementsByTagName('IdentificationFlux')[0]
      // const frequency = desc.getElementsByTagName('TYPEFLUX')[0].innerHTML
      // const type = desc.getElementsByTagName('NATFLUX')[0].innerHTML
      // const dt = desc.getElementsByTagName('DTCREAFLUX')[0].innerHTML
      // const time = desc.getElementsByTagName('HEUCREAFLUX')[0].innerHTML

      // const items = new Array(...dom.getElementsByTagName('InfosFoyerRSA'))

      setIsPending(false);

      // const dates = items
      //   .map(i => i.getElementsByTagName('DTDEMRSA')[0].innerHTML)
      //   .reduce((accum, value) => {
      //     accum[value] = (accum[value] || 0 ) + 1
      //     return accum
      //   }, {})

      // dispatchRuns({
      //   type: 'append',
      //   item: {
      //     seed: Math.random(),
      //     timestamp: (new Date()).toISOString().slice(0, 19),
      //     duration: (new Date()) - start_time,
      //     filename: file.name,
      //     fileDatetime: `${dt}-${time}`,
      //     frequency,
      //     type,
      //     // WIP: OK sur Firefox KO sur Chrome
      //     error: dom.activeElement && dom.activeElement.nodeName == "parsererror",
      //     total: items.length,
      //     fileSize: file.size,
      //     dates,
      //   }
      // })
    }
    reader.readAsBinaryString(file);
  }

  const round = (value) => Math.round(value)
  return (
    <Layout className={styles.container}>
      {/* <Admin category="Bénéficiaire" onRunRefresh={handleNewRuns}/> */}
      <main className={styles.main}>
        <h1 className={styles.title}>
          Expérimentation Ardennes
        </h1>

        <p className={styles.description}>
          Glissez et déposez le fichier à analyser ou sélectionnez le.<br/>
          <input type="file" onChange={selectHandler} multiple/>
        </p>

        {isPending && <PendingMessage fileSize={fileSize}/>}

        <p className={styles.description}>
          Les opérations sont toutes réalisées sur votre ordinateur.<br/>
          Aucune donnée personnelle n'est transférée.
        </p>

        <p className={styles.description}>
          <a href="#pourquoi">Pourquoi un tel lecteur&nbsp;?</a>
        </p>

{/* Tableau de résultat */}
        {/* { runs && runs.length > 0 && (<>
          <h2 className={styles.subtitle}>
            Historique
          </h2>

          <table>
            <thead>
              <tr>
                <th rowSpan="2">Date</th>
                <th rowSpan="2">Fichier</th>
                { devMode && <th rowSpan="2">Taille</th>}
                { devMode && <th rowSpan="2">Durée<br/>(en s)</th>}
                <th rowSpan="2">Date du fichier</th>
                <th rowSpan="2">Fréquence</th>
                <th rowSpan="2">Nature</th>
                <th rowSpan="2">Dossiers</th>
                <th rowSpan="2">Détails</th>
                <th rowSpan="2">Erreur</th>
              </tr>
              <tr>
              </tr>
            </thead>
            <tbody>
              {runs.map((r, i) => (<tr key={`${r.timestamp}-${r.filename}-${r.seed}` } style={ i == dateData.index ? {backgroundColor: 'lightgrey'}: {} }>
                <td>{r.timestamp}</td>
                <td>{r.filename}</td>
                { devMode && <td>{r.fileSize}</td>}
                { devMode && <td>{!isNaN(r.duration) ? r.duration/1000 : "#N/A"}</td>}
                <td>{r.fileDatetime}</td>
                <td>{`${r.frequency} (${frequencyNames[r.frequency] || '?'})`}</td>
                <td>{`${r.type} (${typeNames[r.type] || '?'})`}</td>
                <td className={styles.numeric}>{r.total}</td>
                <td className="shrink"><button onClick={handleDateHistogram} data-index={i}>Afficher par date</button></td>
                <td>{r.error ? 'Oui' : 'Non'}</td>
              </tr>
            ))}
            </tbody>
          </table>

          <button onClick={() => dispatchRuns({type: 'reset'})}>Vider l'historique</button>
        </>)} */}

{/* Calendrier */}
        {/* {runs.length != 0 && (<p className={styles.text}>
        Vous pouvez accéder à une représentation graphique de la répartition dans les temps des demandes connues dans les fichiers analysés. Pour cela il faut cliquer sur le bouton « Afficher par date ».
          </p>)}

        {dateData.index != undefined && (
          <>
            <h2 className={styles.subtitle}>
              Nombre de dossiers associés à des demandes réalisés à chaque date
            </h2>
            <div style={{height: (250*dateData.yearCount) + "px", width: "100%"}}>
              {ResponsiveCalendar(dateData)}
            </div>
          </>
        )} */}

        <p className={styles.description}>
          Un problème, une question ? Contactez-nous à <Mailer subject="Flux bénéficiaire CNAF">data.insertion@beta.gouv.fr</Mailer>
        </p>

        <h2 id="pourquoi" className={styles.subtitle}>
          Quel est l'objectif de cette expérimentation&nbsp;?
        </h2>

        <p className={styles.text}>
          Faciliter le travail des agents du département et tester l'utilisation de l'application RDV-Solidarités pour accélérer la prise du premier rendez-vous d'orientation.
        </p>

      </main>
    </Layout>
  )
}
