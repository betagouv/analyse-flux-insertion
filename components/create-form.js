import { useState } from 'react'

export default function CreateForm(
  token
) {
  const [userFirstName, setUserFirstName] = useState('');
  const [userLastName, setUserLastName] = useState('');
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
