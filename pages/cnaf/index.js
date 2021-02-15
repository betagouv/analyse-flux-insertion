import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import Mailer from '../../components/mailer'
import styles from '../../styles/Home.module.css'

export default function Home() {
  return (
    <Layout className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Analyser les flux CNAF
        </h1>

        <p className={styles.description}>
          Quel flux souhaitez-vous analyser ?
        </p>

        <div className={styles.grid}>
          <Link href="/cnaf/instruction">
            <a className={styles.card}>
              <h3>Instruction &rarr;</h3>
              <p>Envoyé quotidiennement</p>
            </a>
          </Link>

          <Mailer subject="Autre flux CNAF" className={styles.card}>
            <h3>Autre chose &rarr;</h3>
            <p>Envoyez-nous un email.</p>
          </Mailer>

        </div>
      </main>
    </Layout>
  )
}
