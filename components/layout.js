import {useCallback, useState} from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Mailer from './mailer'


export default function Layout({
  children,
  title = 'Analyser les flux de données dans l\'insertion',
  fileHandler,
}) {
  const defaultColor = 'white'
  const [color, setColor] = useState(defaultColor)

  const dragHandler = color => useCallback((event) => {
    setColor(color)
    event.preventDefault() // Prevent file from being open on drop
  })

  const dropHandler = useCallback((event) => {
    event.preventDefault()
    setColor(defaultColor)
    for (var i = 0; i<event.dataTransfer.files.length; i++) {
      fileHandler(event.dataTransfer.files[i])
    }
  })

  return (
    <div style={{backgroundColor:color}}
      onDragOver={dragHandler('#0070f3')}
      onDragLeave={dragHandler(defaultColor)}
      onDrop={dropHandler}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <nav>
          <Link href="/">
            <a>Accueil</a>
          </Link>{' '}|{' '}
          <Link href="/mentions-legales">
            <a>Mentions légales</a>
          </Link>{' '}|{' '}
          <Mailer>
            Contact
          </Mailer>
        </nav>
      </header>

      {children}

      <footer className={styles.footer}>
        <Mailer>Propulsé par data.insertion</Mailer>
      </footer>
    </div>
  )
}
