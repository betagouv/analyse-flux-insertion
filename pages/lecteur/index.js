import Layout from "../../components/layout";
import Mailer from "../../components/mailer";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

export default function Home() {
  return (
    <Layout className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Lecteur de flux insertion</h1>

        <p className={styles.description}>
          Analyser les fichers échangés dans le secteur de l'insertion
          <br />
          D'où proviennent les données&nbsp;?
        </p>

        <div className={styles.grid}>
          <Link href="/cnaf">
            <a className={styles.card}>
              <h3>CNAF &rarr;</h3>
              <p>
                Flux instruction, bénéficiaire, données socio-professionnelles…
              </p>
            </a>
          </Link>

          <Link href="/pole-emploi">
            <a className={styles.card}>
              <h3>Pole Emploi &rarr;</h3>
              <p>Flux mensuel</p>
            </a>
          </Link>

          <Mailer subject="Autre source de données" className={styles.card}>
            <h3>Ailleurs &rarr;</h3>
            <p>Envoyez-nous un email.</p>
          </Mailer>
        </div>
      </main>
    </Layout>
  );
}
