import { useState } from 'react'

export default function LoginForm({
  onLogin
}) {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [isPending, setIsPending] = useState(false);
  const RDV_URL = process.env.NEXT_PUBLIC_RDV_DEMO_URL;
  const path = '/auth/sign_in';
  const url = `${RDV_URL}/api/v1${path}`;


  const handleSubmit = (e) => {
    e.preventDefault();

    const user = { email: login, password: password };
    setIsPending(true);

    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    })

    .then((response) => {
      setIsPending(false);
      if (response.ok) {
        onLogin(response.headers.get("access-token"), response.headers.get("uid"), response.headers.get("client"));
        return response.json();
      } else {
        alert(`Aucun compte n'est rattaché à ce couple email/mot de passe. Merci de vérifier vos identifiants.`);
      }
    })
    // .then(result => {
    //   console.log('Success:');
    // })
    // .catch(error => {
    //   alert(`Une erreur s'est produite, merci de réessayer.`);
    //   console.error('Error:', error);
    // });
  }

  return (
    <form
      onSubmit={handleSubmit}
    >
      <label htmlFor="agent_email">Email</label>
      <input
        id="agent_email"
        type="email"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
        required
      />
      <label htmlFor="agent_password">Mot de passe</label>
      <input
        id="agent_password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      {!isPending && <button>Se connecter</button>}
      {isPending && <button>Connexion en cours</button>}
    </form>
  )
}
