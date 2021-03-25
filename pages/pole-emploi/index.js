import {useCallback, useEffect, useState, useReducer} from 'react'
import Head from 'next/head'

import Layout from '../../components/layout'
import Mailer from '../../components/mailer'
import PendingMessage from '../../../components/pending'
import styles from '../../styles/Home.module.css'

import { initReducer, reducerFactory } from '../../lib/historique'

const reducer = reducerFactory('Test - Pole Emploi')
const devMode = process.env.NODE_ENV == 'development'


// periodicite
const frequencyNames = {
  M: 'Mensuel',
}

// fichier
const typeNames = {
  PECG: 'PE vers CD',
}

export default function Beneficiaire() {
  const [devFile, setDevFile] = useState(null)
  const [runs, dispatchRuns] = useReducer(reducer, [], initReducer)
  const [isPending, setIsPending] = useState(false);
  const [fileSize, setFileSize] = useState(0);

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
    var reader = new FileReader()
    reader.onload = function(event) {
      const parser = new DOMParser()
      const dom = parser.parseFromString(event.target.result, "application/xml")

      const desc = dom.getElementsByTagName('entete')[0]
      const frequency = desc.getElementsByTagName('periodicite')[0].innerHTML
      const type = desc.getElementsByTagName('fichier')[0].innerHTML
      const departement = desc.getElementsByTagName('departement')[0].innerHTML
      const referenceDate = desc.getElementsByTagName('date-reference')[0].innerHTML
      const generationDate = desc.getElementsByTagName('date-fabrication')[0].innerHTML
      const items = new Array(...dom.getElementsByTagName('dossier'))

      const withLastMeetingDate = items.filter(i => i.getElementsByTagName('date-dernier-ent').length)
      const withUsableLastMeetingDate = items.filter(i => {
        const nodes = i.getElementsByTagName('date-dernier-ent')
        return nodes.length && nodes[0].innerHTML.match(/\d{4}-\d{2}-\d{2}/)
      })

      setIsPending(false);
      dispatchRuns({
        type: 'append',
        item: {
          seed: Math.random(),
          timestamp: (new Date()).toISOString().slice(0,19),
          filename: file.name,
          frequency,
          referenceDate,
          generationDate,
          departement,
          type,
          // WIP: OK sur Firefox KO sur Chrome
          error: dom.activeElement && dom.activeElement.nodeName == "parsererror",
          total: items.length,
          withLastMeetingDate: withLastMeetingDate.length,
          withUsableLastMeetingDate: withUsableLastMeetingDate.length,
          fileSize: file.size,
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
          Lecteur de fichier de Pôle Emploi
        </h1>

        <p className={styles.description}>
          Glissez et déposez le fichier PE à analyser ou sélectionnez le.<br/>
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
                <th rowSpan="2">Date de référence</th>
                <th rowSpan="2">Date de fabrication</th>
                <th rowSpan="2">Fréquence</th>
                <th rowSpan="2">Nature</th>
                <th rowSpan="2">CD</th>
                <th rowSpan="2">Dossiers</th>
                <th colSpan="2" rowSpan="2">avec date de dernier entretien PPAE (%)</th>
                <th colSpan="2" rowSpan="2"><abbr title="Par valide, on veut dire contient une date au format AAA-MM-JJ">avec date de dernier entretien PPAE <i>valide</i> (%)</abbr></th>
                <th rowSpan="2">Erreur</th>
              </tr>
              <tr>
              </tr>
            </thead>
            <tbody>
              {runs.map((r, i) => (<tr key={`${r.timestamp}-${r.filename}-${r.seed}` } >
                <td>{r.timestamp}</td>
                <td>{r.filename}</td>
                { devMode && <td>{r.fileSize}</td>}
                <td>{r.referenceDate}</td>
                <td>{r.generationDate}</td>
                <td>{`${r.frequency} (${frequencyNames[r.frequency] || '?'})`}</td>
                <td>{`${r.type} (${typeNames[r.type] || '?'})`}</td>
                <td className="shrink">{r.departement}</td>
                <td className={styles.numeric}>{r.total}</td>
                <td>{r.withLastMeetingDate}</td>
                <td className="shrink">{round(r.withLastMeetingDate/r.total*100)}</td>
                <td>{r.withUsableLastMeetingDate}</td>
                <td className="shrink">{round(r.withUsableLastMeetingDate/r.total*100)}</td>

                <td>{r.error ? 'Oui' : 'Non'}</td>
              </tr>
            ))}
            </tbody>
          </table>

          <button onClick={() => dispatchRuns({type: 'reset'})}>Vider l'historique</button>
        </>)}


        <p className={styles.description}>
          Un problème, une question ? Contactez-nous à <Mailer subject="Flux Pole Emploi">data.insertion@beta.gouv.fr</Mailer>
        </p>

        <h2 id="pourquoi" className={styles.subtitle}>
          Pourquoi un lecteur de fichier Pôle Emploi&nbsp;?
        </h2>

        <p className={styles.text}>
          Tous les départements n'ont pas les outils pour analyser les fichiers envoyés par Pôle Emploi. Cela peut ralentir et compliquer nos échanges.
        </p>
        <p className={styles.text}>
          Avec cet outil, nous souhaitons permettre aux personnes qui ont accès à ces fichiers d'en extraire des statistiques générales sans avoir à mettre les mains dans le camboui elles-même.
        </p>

      </main>
    </Layout>
  )
}
