import Layout from '../components/layout'
import styles from '../styles/Home.module.css'
import CreateForm from '../components/create-form'

export default function CreateUser() {

  return(
    <Layout className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Créer une fiche bénéficiaire sur RDV Solidarités
        </h1>
        <div className={styles.create}>
          <CreateForm></CreateForm>
        </div>

      </main>
    </Layout>
  )
}
