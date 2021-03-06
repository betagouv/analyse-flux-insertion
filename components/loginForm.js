import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function LoginForm({ handleLogin, rdvUrl }) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isPending, setIsPending] = useState(false);
  const url = `${rdvUrl}/api/v1/auth/sign_in`;

  const handleSubmit = e => {
    e.preventDefault();

    const user = { email: login, password: password };
    setIsPending(true);

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then(response => {
      setIsPending(false);
      if (response.ok) {
        handleLogin(
          response.headers.get("access-token"),
          response.headers.get("uid"),
          response.headers.get("client")
        );
        return response.json();
      } else {
        alert(
          `Aucun compte n'est rattaché à ce couple email/mot de passe. Merci de vérifier vos identifiants.`
        );
      }
    });
    // .then(result => {
    //   console.log('Success:');
    // })
    // .catch(error => {
    //   alert(`Une erreur s'est produite, merci de réessayer.`);
    //   console.error('Error:', error);
    // });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="agent_email">Email</label>
      <input
        id="agent_email"
        type="email"
        value={login}
        onChange={e => setLogin(e.target.value)}
        required
      />
      <label htmlFor="agent_password">Mot de passe</label>
      <input
        id="agent_password"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
        className={styles.margin_bottom}
      />
      {!isPending && <button className={styles.button}>Se connecter</button>}
      {isPending && (
        <button className={styles.button}>Connexion en cours</button>
      )}
    </form>
  );
}
