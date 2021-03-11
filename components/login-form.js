import { useState } from 'react'

export default function LoginForm({
  onLogin
}) {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = { email: login, password: password };
    const url = 'https://demo/rdv-solidarites.fr/api/v1/auth/sign_in';
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
        onLogin(response.headers.access-token, response.headers.uid, response.headers.client);
      } else {
        alert(`Aucun compte n'est rattaché à ce couple email/mot de passe. Merci de vérifier vos identifiants.`);
      }
    })
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
