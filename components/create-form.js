import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function CreateForm(
  token
) {
  const [userFirstName, setUserFirstName] = useState('');
  const [userLastName, setUserLastName] = useState('');
  const [orga, setOrga] = useState('');
  const [mail, setMail] = useState('');
  const [phone, setPhone] = useState('');
  const [isPending, setIsPending] = useState(false);
  const RDV_URL = process.env.NEXT_PUBLIC_RDV_DEMO_URL;
  const path = '/users';
  const url = `${RDV_URL}/api/v1${path}`;

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = { first_name: userFirstName, last_name: userLastName, organisation_ids: [1] };
    setIsPending(true);

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "access-token": token.token.tokenId,
        uid: token.token.uid,
        client: token.token.client
      },
      body: JSON.stringify(user)
    })

    .then((response) => {
      setIsPending(false);
      if (response.status === 200) {
        setUserFirstName('');
        setUserLastName('');
        alert(`Fiche utilisateur créée sur RDV Solidarités avec succès pour ${userFirstName} ${userLastName}`);
      } else {
        alert(`Un problème est survenu, et la fiche utilisateur de ${userFirstName} ${userLastName} n'a pas été créée sur RDV Solidarités. Merci de réessayer.`);
      }
    })
  }

  return (
    <form className={styles.formGrid} onSubmit={handleSubmit}>
      <div className={styles.formCard}>
        <label htmlFor="prenom">Prénom</label>
        <input
          id="prenom"
          type="text"
          value={userFirstName}
          onChange={(e) => setUserFirstName(e.target.value)}
          required
        />
      </div>
      <div className={styles.formCard}>
        <label htmlFor="nom">Nom</label>
        <input
          id="nom"
          type="text"
          value={userLastName}
          onChange={(e) => setUserLastName(e.target.value)}
          required
        />
      </div>
      <div className={styles.formCard}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        />
      </div>
      <div className={styles.formCard}>
        <label htmlFor="telephone">Téléphone</label>
        <input
          id="telephone"
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className={styles.formCard}>
        <label htmlFor="organisation">ID de l'organisation</label>
        <input
          id="organisation"
          type="text"
          value={orga}
          onChange={(e) => setOrga(e.target.value)}
          required
        />
      </div>
      <div className={styles.formCard}></div>
      {!isPending && <button>Créer fiche utilisateur</button>}
      {isPending && <button>Fiche utilisateur en cours de création</button>}
    </form>
  )
}
