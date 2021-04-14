import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
import Mailer from "../../components/mailer";
import styles from "../../styles/Home.module.css";

export default function Home() {
  return (
    <Layout className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Expérimentations insertion</h1>

        <p className={styles.description}>Choisissez un projet</p>

        <div className={styles.grid}>
          <Link href="/experimentations/ardennes">
            <a className={styles.card}>
              <h3>Ardennes &rarr;</h3>
              <p>Good morning Charleville-Mézières&nbsp;!</p>
            </a>
          </Link>
          {/*
          <Link href="/experimentations/rdv-solidarites">
            <a className={styles.card}>
              <h3>RDV-Solidarites &rarr;</h3>
              <p>Créez des utilisateurs dans RDV-Solidarités.</p>
            </a>
          </Link> */}

          <Mailer subject="Je veux participer" className={styles.card}>
            <h3>Je veux participer &rarr;</h3>
            <p>Proposez-nous votre projet&nbsp;.</p>
          </Mailer>
        </div>
      </main>
    </Layout>
  );
}
