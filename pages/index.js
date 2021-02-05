import {useCallback, useEffect, useState} from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  const defaultColor = 'white'
  const [color, setColor] = useState(defaultColor)
  const [file, setFile] = useState(null)
  const [total, setTotal] = useState('?')
  const [countWithEmail, setCountWithEmail] = useState('?')
  const [countWithUsableEmail, setCountWithUsableEmail] = useState('?')
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    if (!file) {
      return
    }
    const items = new Array(...file.getElementsByTagName('InfoDemandeRSA'))
    setTotal(items.length)

    const withEmail = items.filter(i => i.getElementsByTagName('ADRELEC').length)
    setCountWithEmail(withEmail.length)

    const withUsableEmail = items.filter(i => {
      const ok = i.getElementsByTagName('AUTORUTIADRELEC')[0]
      return i.getElementsByTagName('ADRELEC').length && ok && ok.innerHTML == "A"
    })
    setCountWithUsableEmail(withUsableEmail.length)
  }, [file])


  // useEffect(() => {
  //   fetch('/test.xml').then(response => {
  //     const parser = new DOMParser();
  //     response.text().then(text => {
  //       const dom = parser.parseFromString(text, "application/xml");
  //       setFile(dom)
  //     })
  //   })
  // }, [])

  const dragHandler = color => useCallback((event) => {
    setColor(color)
    event.preventDefault(); // Prevent file from being open on drop
  })

  const dropHandler = useCallback((event) => {
    event.preventDefault();

    setColor(defaultColor)
    var reader = new FileReader()
    reader.onload = function(event) {
      const parser = new DOMParser();
      const dom = parser.parseFromString(event.target.result, "application/xml");
      setFile(dom)
      setHasError(dom.activeElement.nodeName == "parsererror")
    }
    reader.readAsText(event.dataTransfer.files[0])
  })

  const selectHandler = useCallback((event) => {
    var reader = new FileReader()
    reader.onload = function(event) {
      const parser = new DOMParser();
      const dom = parser.parseFromString(event.target.result, "application/xml");
      setFile(dom)
      setHasError(dom.activeElement.nodeName == "parsererror")
    }
    reader.readAsText(event.target.files[0])
  })
  return (
    <div className={styles.container} style={{backgroundColor:color}}>
      <Head>
        <title>Testeur de fichier CNAF</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main} onDragOver={dragHandler('#0070f3')} onDragLeave={dragHandler(defaultColor)} onDrop={dropHandler}>
        <h1 className={styles.title}>
          Testeur de fichier CNAF
        </h1>

        <p className={styles.description}>
          Glissez et déposez le fichier CNAF à analyser ou sélectionnez le.<br/>
          <input type="file" onChange={selectHandler}/>
        </p>

        <p className={styles.description}>
          Les opérations sont toutes réalisées sur votre ordinateur.<br/>Aucune donnée n'est transférée.
        </p>

        <p className={styles.description}>
          <a href="#pourquoi">Pourquoi un tel testeur&nbsp;?</a>
        </p>

        {hasError && <div className={styles.grid}>
          <a href="mailto:data.insertion@beta.gouv.fr?subject=[Flux CNAF]" className={styles.card} style={{borderColor: 'red'}}>
            <h3>Oups... Une erreur s'est produite.</h3>
            <p>Essayez-vous d'ouvrir un fichier XML ?</p>
            <p>Contactez-nous à data.insertion@beta.gouv.fr</p>
          </a>
        </div>}

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>{total}</h3>
            <p>dossiers</p>
          </div>

          <div className={styles.card}>
            <h3>{countWithEmail}</h3>
            <p>dossiers avec email</p>
          </div>

          <div className={styles.card}>
            <h3>{countWithUsableEmail}</h3>
            <p>dossiers avec email et autorisation de l'utiliser</p>
          </div>

          <a href="mailto:data.insertion@beta.gouv.fr?subject=[Flux CNAF]" className={styles.card}>
            <h3></h3>
            <p>Et si ces personnes pouvaient prendre leur 1er RDV dès aujourd'hui&nbsp;?</p>
          </a>
        </div>

        <p className={styles.description}>
          Un problème, une question ? Contactez-nous à <a href="mailto:data.insertion@beta.gouv.fr?subject=[Flux CNAF]">data.insertion@beta.gouv.fr</a>
        </p>

        <h2 id="pourquoi" className={styles.subtitle}>
          Pourquoir un testeur de fichier CNAF&nbsp;?
        </h2>

        <p className={styles.text}>
          Tous les départements n'ont pas les outils pour analyser les fichiers envoyés par la CNAF. Cela peut ralentier et compliquer nos échanges.
        </p>
        <p className={styles.text}>
          Avec cet outil, nous souhaitons permettre aux personnes qui ont accès à ces fichiers d'en extraire des statistiques générales sans avoir mettre les mains dans le camboui elles-même.
        </p>
        <p className={styles.text}>
          Aujourd'hui, nous cherchons à comprendre pourquoi pour la CNAF les fichiers quotidiens d'instructions contiennent des dossiers avec des email à 90% alors que pour certains départements c'est plutôt 50% voire 30% des dossiers qui ont un email associé.
        </p>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Propulsé par data.insertion
        </a>
      </footer>
    </div>
  )
}
