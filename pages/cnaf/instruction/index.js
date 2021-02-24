import {useCallback, useEffect, useState, useReducer} from 'react'
import Head from 'next/head'
import Layout from '../../../components/layout'
import Mailer from '../../../components/mailer'
import styles from '../../../styles/Home.module.css'

import { frequencyNames, typeNames } from '../../../lib/cnaf'
import { initReducer, reducerFactory } from '../../../lib/historique'

const reducer = reducerFactory('Test - CNAF - Instruction')
const devMode = process.env.NODE_ENV == 'development'

export default function Instruction() {
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

      const items = new Array(...dom.getElementsByTagName('InfoDemandeRSA'))
      const withEmail = items.filter(i => i.getElementsByTagName('ADRELEC').length)
      const withUsableEmail = items.filter(i => {
        const ok = i.getElementsByTagName('AUTORUTIADRELEC')[0]
        return i.getElementsByTagName('ADRELEC').length && ok && ok.innerHTML == "A"
      })
      const withForbiddenEmailUsage = items.filter(i => {
        const ok = i.getElementsByTagName('AUTORUTIADRELEC')[0]
        return i.getElementsByTagName('ADRELEC').length && ok && ok.innerHTML == "R"
      })
      const withoutEmailUsage = items.filter(i => {
        const ok = i.getElementsByTagName('AUTORUTIADRELEC')[0]
        return i.getElementsByTagName('ADRELEC').length && ok && ok.innerHTML == "I"
      })

      const withPhone = items.filter(i => i.getElementsByTagName('NUMTEL').length)
      const withUsablePhone = items.filter(i => {
        const ok = i.getElementsByTagName('AUTORUTITEL')[0]
        return i.getElementsByTagName('NUMTEL').length && ok && ok.innerHTML == "A"
      })
      const withForbiddenPhoneUsage = items.filter(i => {
        const ok = i.getElementsByTagName('AUTORUTITEL')[0]
        return i.getElementsByTagName('NUMTEL').length && ok && ok.innerHTML == "R"
      })
      const withoutPhoneUsage = items.filter(i => {
        const ok = i.getElementsByTagName('AUTORUTITEL')[0]
        return i.getElementsByTagName('NUMTEL').length && ok && ok.innerHTML == "I"
      })

      const withDSP = items.filter(i => i.getElementsByTagName('DonneesSocioProfessionnelles').length)
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
          email: {
            total: withEmail.length,
            withAutorisation: withUsableEmail.length,
            withExplicitRefusal: withForbiddenEmailUsage.length,
            withoutAutorisationDetails: withoutEmailUsage.length,
          },
          phone: {
            total: withPhone.length,
            withAutorisation: withUsableEmail.length,
            withExplicitRefusal: withForbiddenEmailUsage.length,
            withoutAutorisationDetails: withoutEmailUsage.length,
          },
          withDSP: withDSP.length,
          fileSize: file.size,
        }
      })
    }
    reader.readAsText(file)
  }

  const round = (value) => Math.round(value)
  return (
    <Layout className={styles.container}
      fileHandler={fileHandler}>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Lecteur de fichier « Instruction » de la CNAF
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
                <th rowspan="2">Date</th>
                <th rowspan="2">Fichier</th>
                { devMode && <th rowspan="2">Taille</th>}
                <th rowspan="2">Date du fichier</th>
                <th rowspan="2">Fréquence</th>
                <th rowspan="2">Nature</th>
                <th rowspan="2">Dossiers</th>
                <th colSpan="8">avec email</th>
                <th colSpan="8">avec téléphone</th>
                <th colSpan="2" rowspan="2">DSP (%)</th>
                <th rowspan="2">Erreur</th>
              </tr>
              <tr>
                <th colSpan="2"># (%)</th>
                <th colSpan="2">et autorisation (%)</th>
                <th colSpan="2">refus explicit (%)</th>
                <th colSpan="2"><abbr title="Balise AUTORUTIADRELEC présente et égale à 'I'">inconnu explicit (I) (%)</abbr></th>

                <th colSpan="2"># (%)</th>
                <th colSpan="2">et autorisation (%)</th>
                <th colSpan="2">refus explicit (%)</th>
                <th colSpan="2"><abbr title="Balise AUTORUTITEL présente et égale à 'I'">inconnu explicit (I) (%)</abbr></th>
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

                <td className={styles.numeric}>{r.email.total}</td>
                <td className="shrink">{round(r.email.total/r.total*100)}</td>

                <td className={styles.numeric}>{r.email.withAutorisation}</td>
                <td className="shrink">{round(r.email.withAutorisation/r.total*100)}</td>

                <td className={styles.numeric}>{r.email.withExplicitRefusal}</td>
                <td className="shrink">{round(r.email.withExplicitRefusal/r.total*100)}</td>

                <td className={styles.numeric}>{r.email.withoutAutorisationDetails}</td>
                <td className="shrink">{round(r.email.withoutAutorisationDetails/r.total*100)}</td>

                <td className={styles.numeric}>{r.phone.total}</td>
                <td className="shrink">{round(r.phone.total/r.total*100)}</td>

                <td className={styles.numeric}>{r.phone.withAutorisation}</td>
                <td className="shrink">{round(r.phone.withAutorisation/r.total*100)}</td>

                <td className={styles.numeric}>{r.phone.withExplicitRefusal}</td>
                <td className="shrink">{round(r.phone.withExplicitRefusal/r.total*100)}</td>

                <td className={styles.numeric}>{r.phone.withoutAutorisationDetails}</td>
                <td className="shrink">{round(r.phone.withoutAutorisationDetails/r.total*100)}</td>


                <td className={styles.numeric}>{r.withDSP}</td>
                <td className="shrink">{round(r.withDSP/r.total*100)}</td>
                <td>{r.error ? 'Oui' : 'Non'}</td>
              </tr>
            ))}
            </tbody>
          </table>

          <button onClick={() => dispatchRuns({type: 'reset'})}>Vider l'historique</button>
        </>)}

        <p className={styles.description}>
          Un problème, une question ? Contactez-nous à <Mailer subject="Flux instruction CNAF">data.insertion@beta.gouv.fr</Mailer>
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
        <p className={styles.text}>
          Aujourd'hui, nous cherchons à comprendre pourquoi pour la CNAF 90% des dossiers présents dans les fichiers quotidiens d'instructions contiennent des emails alors que ce taux est de 30% à 50% pour certains départements.
        </p>

      </main>
    </Layout>
  )
}
