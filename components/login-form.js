import { useState } from 'react'

export default function LoginForm() {
  const [userFirstName, setUserFirstName] = useState('');
  const [userLastName, setUserLastName] = useState('');
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = { first_name: userFirstName, last_name: userLastName, organisation_ids: 164 };
    const url = 'https://demo.rdv-solidarites.fr/api/v1/users';
    // ^******************* À enlever avant mise en prod ****************
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    setIsPending(true);

    fetch(proxyUrl + url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    })

    .then((response) => {
      setIsPending(false);
      if (response.status === 200) {

      } else {
        alert(`Un problème est survenu, et la fiche utilisateur de ${userFirstName} ${userLastName} n'a pas été créée sur RDV Solidarités. Merci de réessayer.`);
      }
    })
  }

  return (
    <form
      onSubmit={handleSubmit}
    >
      <label htmlFor="prenom">Prénom</label>
      <input
        id="prenom"
        type="text"
        value={userFirstName}
        onChange={(e) => setUserFirstName(e.target.value)}
        required
      />
      <label htmlFor="nom">Nom</label>
      <input
        id="nom"
        type="text"
        value={userLastName}
        onChange={(e) => setUserLastName(e.target.value)}
        required
      />
      {!isPending && <button>Créer fiche utilisateur</button>}
      {isPending && <button>Fiche utilisateur en cours de création</button>}
    </form>
  )
}
