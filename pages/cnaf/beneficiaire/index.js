import {useCallback, useEffect, useState, useReducer} from 'react'
import Head from 'next/head'
import Layout from '../../../components/layout'
import Mailer from '../../../components/mailer'
import styles from '../../../styles/Home.module.css'

import { frequencyNames, typeNames } from '../../../lib/cnaf'
import { initReducer, reducerFactory } from '../../../lib/historique'

const reducer = reducerFactory('Test - CNAF - Bénéficiaire')
const devMode = process.env.NODE_ENV == 'development'

export default function Beneficiaire() {
  const [devFile, setDevFile] = useState(null)
  const [runs, dispatchRuns] = useReducer(reducer, [], initReducer)

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
          timetamp: (new Date()).toISOString().slice(0,19),
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

      <main className={styles.main}>
        <h1 className={styles.title}>
          Lecteur de fichier « Bénéficiaire » de la CNAF
        </h1>

        <p className={styles.description}>
          Glissez et déposez le fichier CNAF à analyser ou sélectionnez le.<br/>
          <input type="file" onChange={selectHandler} multiple/>
        </p>

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
                <th rowSpan="2">Date du fichier</th>
                <th rowSpan="2">Fréquence</th>
                <th rowSpan="2">Nature</th>
                <th rowSpan="2">Dossiers</th>
                <th rowSpan="2">Erreur</th>
              </tr>
              <tr>
              </tr>
            </thead>
            <tbody>
              {runs.map(r => (<tr key={`${r.timetamp}-${r.filename}-${r.seed}` }>
                <td>{r.timetamp}</td>
                <td>{r.filename}</td>
                { devMode && <td>{r.fileSize}</td>}
                <td>{r.fileDatetime}</td>
                <td>{`${r.frequency} (${frequencyNames[r.frequency] || '?'})`}</td>
                <td>{`${r.type} (${typeNames[r.type] || '?'})`}</td>
                <td className={styles.numeric}>{r.total}</td>
                <td>{r.error ? 'Oui' : 'Non'}</td>
              </tr>
            ))}
            </tbody>
          </table>

          <button onClick={() => dispatchRuns({type: 'reset'})}>Vider l'historique</button>
        </>)}

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
