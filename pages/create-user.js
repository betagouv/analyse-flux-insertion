// Ajouter une page qui prend 2 champs et un bouton.
// Quand tu cliques sur le bouton, les 2 champs sont enregistrés dans une boite, et display ailleurs sur la page.
import React from 'react'
import Link from 'next/link'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

export default function CreateUser() {

  return(
    <Layout className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Créer une fiche bénéficiaire sur RDV Solidarités
        </h1>

      </main>
    </Layout>

  )
}
