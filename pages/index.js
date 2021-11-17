import Layout from "../components/layout";
import Mailer from "../components/mailer";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Bienvenue chez data.insertion</h1>

        <p className={styles.description}>Comment pouvons-nous vous aider&nbsp;?</p>

        <div className={styles.grid}>
          <Link href="/lecteur">
            <a className={styles.card}>
              <h3>Lecteur de flux &rarr;</h3>
              <p>Analyse de flux CNAF ou Pole Emploi</p>
            </a>
          </Link>

          <Link href="/experimentations">
            <a className={styles.card}>
              <h3>Expérimentations &rarr;</h3>
              <p>Ardennes, RDV-Solidarités</p>
            </a>
          </Link>
        </div>
      </main>
    </Layout>
  );
}
