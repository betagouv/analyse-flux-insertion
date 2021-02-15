import Layout from '../components/layout'
import Mailer from '../components/mailer'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          À propos
        </h1>

        <p className={styles.description}>
          On vous en dit plus sur nous.
        </p>

        <p className={styles.text}>
          TODO
        </p>

        <h2>Mentions légales</h2>

        <p className={styles.text}>
          On prépare ça. Si c'est bloquant pour vous, <Mailer subject="Mentions légales manquantes">signalez-le nous par email</Mailer>, on accélèrera.
        </p>

      </main>

    </Layout>
  )
}
