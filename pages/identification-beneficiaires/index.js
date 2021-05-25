import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
import styles from "../../styles/Home.module.css";

export default function Home() {
  return (
    <Layout className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Identification nouveaux demandeurs</h1>

        <p className={styles.description}>Choisissez le type de flux bénéficiaire à analyser</p>

        <div className={styles.grid}>
          <Link href="/identification-beneficiaires/flux-quotidiens">
            <a className={styles.card}>
              <h3>Flux quotidiens &rarr;</h3>
              <p>
                Uploadez plusieurs flux quotidiens pour en extraire la liste des nouveaux
                demandeurs&nbsp;
              </p>
            </a>
          </Link>
          <Link href="/identification-beneficiaires/flux-mensuels">
            <a className={styles.card}>
              <h3>Flux mensuels &rarr;</h3>
              <p>
                Uploadez deux flux mensuels à un mois d'intervalle pour en extraire la liste des
                nouveaux demandeurs&nbsp;
              </p>
            </a>
          </Link>
        </div>
      </main>
    </Layout>
  );
}
