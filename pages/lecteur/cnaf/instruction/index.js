import {useCallback, useEffect, useState, useReducer} from 'react'
import Head from 'next/head'

import Admin from '../../../../components/admin'
import Layout from '../../../../components/layout'
import FileHandler from '../../../../components/file'
import Footer from '../../../../components/footer'
import styles from '../../../../styles/Home.module.css'

import { frequencyNames, typeNames } from '../../../../lib/cnaf'
import { initReducer, reducerFactory } from '../../../../lib/historique'

const reducer = reducerFactory('Test - CNAF - Instruction')
const devMode = process.env.NODE_ENV == 'development'

export default function Instruction() {
  const [devFile, setDevFile] = useState(null)
  const [runs, dispatchRuns] = useReducer(reducer, [], initReducer)
  const [isPending, setIsPending] = useState(false);
  const [fileSize, setFileSize] = useState(0);

  useEffect(() => {
    if(devFile) {
      handleFile(devFile)
    }
  }, [devFile])

  const handleNewRuns = useCallback(data => {
    dispatchRuns({
      type: 'reset',
      items: data
    })
  })

  const handleFile = (file) => {
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

      setIsPending(false);

      dispatchRuns({
        type: 'append',
        item: {
          seed: Math.random(),
          timestamp: (new Date()).toISOString().slice(0,19),
          duration: (new Date()) - start_time,
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
    <Layout className={styles.container} handleFile={handleFile}>
      <Admin category="Instruction" onRunRefresh={handleNewRuns}/>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Lecteur de fichier<br/>« Instruction » de la CNAF
        </h1>

        <FileHandler handleFile={handleFile} isPending={isPending} fileSize={fileSize} />

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
                <th colSpan="8">avec email</th>
                <th colSpan="8">avec téléphone</th>
                <th colSpan="2" rowSpan="2">DSP (%)</th>
                <th rowSpan="2">Erreur</th>
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
              {runs.map(r => (<tr key={`${r.timestamp}-${r.filename}-${r.seed}` }>
                <td>{r.timestamp}</td>
                <td>{r.filename}</td>
                { devMode && <td>{r.fileSize}</td>}
                { devMode && <td>{!isNaN(r.duration) ? r.duration/1000 : "#N/A"}</td>}
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

        <Footer
          subject="Flux instruction CNAF"
          pourquoi="Pourquoi un lecteur de fichier CNAF&nbsp;?"
          text={<>
            <p className={styles.text}>Tous les départements n'ont pas les outils pour analyser les fichiers envoyés par la CNAF. Cela peut ralentir et compliquer nos échanges.</p>
            <p className={styles.text}>Avec cet outil, nous souhaitons permettre aux personnes qui ont accès à ces fichiers d'en extraire des statistiques générales sans avoir à mettre les mains dans le camboui elles-même.</p>
            <p className={styles.text}>Aujourd'hui, nous cherchons à comprendre pourquoi pour la CNAF 90% des dossiers présents dans les fichiers quotidiens d'instructions contiennent des emails alors que ce taux est de 30% à 50% pour certains départements.</p>
          </>}
        />
      </main>
    </Layout>
  )
}
