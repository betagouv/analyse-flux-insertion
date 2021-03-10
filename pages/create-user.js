// Ajouter une page qui prend 2 champs et un bouton.
// Quand tu cliques sur le bouton, les 2 champs sont enregistrés dans une boite, et display ailleurs sur la page.
import { useState } from 'react'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

export default function CreateUser() {
  const [userFirstName, setUserFirstName] = useState('');
  const [userLastName, setUserLastName] = useState('');
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = { first_name: userFirstName, last_name: userLastName };
    setIsPending(true);

    fetch('https://www.rdv-solidarites.fr/api/v1/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    })

      .then(() => {
      setUserFirstName('');
      setUserLastName('');
      setIsPending(false);
      alert(`Fiche utilisateur créée sur RDV Solidarités avec succès pour ${userFirstName} ${userLastName}`);
    })
  }

  return(
    <Layout className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Créer une fiche bénéficiaire sur RDV Solidarités
        </h1>
        <div className={styles.create}>
          <form
            onSubmit={handleSubmit}
          >
            <label>Prénom</label>
            <input
              type="text"
              value={userFirstName}
              onChange={(e) => setUserFirstName(e.target.value)}
              required
            />
            <label>Nom</label>
            <input
              type="text"
              value={userLastName}
              onChange={(e) => setUserLastName(e.target.value)}
              required
            />
            {!isPending && <button>Créer fiche utilisateur</button>}
            {isPending && <button>Fiche utilisateur en cours de création</button>}
          </form>
        </div>

      </main>
    </Layout>
  )
}
