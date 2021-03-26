import {useCallback, useEffect, useState, useReducer} from 'react'
import Head from 'next/head'

import Admin from '../../../components/admin'
import ResponsiveCalendar from '../../../components/chart'
import Layout from '../../../components/layout'
import Mailer from '../../../components/mailer'
import PendingMessage from '../../../components/pending'
import styles from '../../../styles/Home.module.css'

import { frequencyNames, typeNames } from '../../../lib/cnaf'
import { initReducer, reducerFactory } from '../../../lib/historique'

const reducer = reducerFactory('Test - CNAF - Bénéficiaire')
const devMode = process.env.NODE_ENV == 'development'

export default function Beneficiaire() {
  const [devFile, setDevFile] = useState(null)
  const [runs, dispatchRuns] = useReducer(reducer, [], initReducer)
  const [isPending, setIsPending] = useState(false);
  const [fileSize, setFileSize] = useState(0);
  const [dateData, setDateData] = useState({
    index: undefined,
    data: [],
    from: "2016-03-01",
    to: "2021-03-01",
  })

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

  const handleDateHistogram = useCallback(event => showDateHistogram(parseInt(event.target.dataset.index)))
  const showDateHistogram = useCallback(index => {
    const source = runs[index]

    const dates = Object.keys(source.dates)
    let minDate = null
    let maxDate = null

    const data = dates.map(d => {
      let date = new Date(d)
      if (!minDate) {
        minDate = date
        maxDate = date
      } else if (date < minDate) {
        minDate = date
      } else if (maxDate < date) {
        maxDate = date
      }
      return {
        day: date.toISOString().slice(0, 10),
        value: source.dates[d]
      }
    })

    const yearCount = maxDate.getYear() - minDate.getYear() + 1
    setDateData({
      index,
      data,
      from: minDate.toISOString().slice(0, 10),
      to: maxDate.toISOString().slice(0, 10),
      yearCount,
    })
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
      const parser = new DOMParser()
      const dom = parser.parseFromString(event.target.result, "application/xml")

      const desc = dom.getElementsByTagName('IdentificationFlux')[0]
      const frequency = desc.getElementsByTagName('TYPEFLUX')[0].innerHTML
      const type = desc.getElementsByTagName('NATFLUX')[0].innerHTML
      const dt = desc.getElementsByTagName('DTCREAFLUX')[0].innerHTML
      const time = desc.getElementsByTagName('HEUCREAFLUX')[0].innerHTML

      const items = new Array(...dom.getElementsByTagName('InfosFoyerRSA'))

      setIsPending(false);

      const dates = items
        .map(i => i.getElementsByTagName('DTDEMRSA')[0].innerHTML)
        .reduce((accum, value) => {
          accum[value] = (accum[value] || 0 ) + 1
          return accum
        }, {})

      dispatchRuns({
        type: 'append',
        item: {
          seed: Math.random(),
          timestamp: (new Date()).toISOString().slice(0, 19),
          duration: (new Date()) - start_time,
          filename: file.name,
          fileDatetime: `${dt}-${time}`,
          frequency,
          type,
          // WIP: OK sur Firefox KO sur Chrome
          error: dom.activeElement && dom.activeElement.nodeName == "parsererror",
          total: items.length,
          fileSize: file.size,
          dates,
        }
      })
    }
    reader.readAsText(file)
  }

  const round = (value) => Math.round(value)
  return (
    <Layout className={styles.container}>
      <Admin category="Bénéficiaire" onRunRefresh={handleNewRuns}/>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Lecteur de fichier « Bénéficiaire » de la CNAF
        </h1>

        <p className={styles.description}>
          Glissez et déposez le fichier CNAF à analyser ou sélectionnez le.<br/>
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

        { runs && runs.length > 0 && (<>
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
        </>)}

        {runs.length != 0 && (<p className={styles.text}>
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
        )}

        <p className={styles.description}>
          Un problème, une question ? Contactez-nous à <Mailer subject="Flux bénéficiaire CNAF">data.insertion@beta.gouv.fr</Mailer>
        </p>

        <h2 id="pourquoi" className={styles.subtitle}>
          Pourquoi un lecteur de fichier CNAF&nbsp;?
        </h2>

        <p className={styles.text}>
          Tous les départements n'ont pas les outils pour analyser les fichiers envoyés par la CNAF. Cela peut ralentir et compliquer nos échanges.
        </p>
        <p className={styles.text}>
          Avec cet outil, nous souhaitons permettre aux personnes qui ont accès à ces fichiers d'en extraire des statistiques générales sans avoir à mettre les mains dans le camboui elles-même.
        </p>

      </main>
    </Layout>
  )
}
