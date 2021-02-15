import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Mailer from './mailer'


export default function Layout({
  children,
  title = 'Analyser les flux de données dans l\'insertion',
}) {
  return (
    <div>
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
          <Link href="/a-propos">
            <a>À propos</a>
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
