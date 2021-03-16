import { useState } from 'react';
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'
import LoginForm from '../components/login-form'
import CreateForm from '../components/create-form'

export default function CreateUser() {
  const [isLogged, setIsLogged] = useState(false);
  const [token, setToken] = useState({
          "tokenId": '',
          uid: '',
          client: ''
        });

  const onLogin = (tokenId, uid, client) => {
    setToken({ ...token, tokenId: tokenId, uid: uid, client: client });
    setIsLogged(true);
  };

  return(
    <Layout className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Créer une fiche bénéficiaire sur RDV Solidarités
        </h1>
        <div id="create-forms" className={styles.create}>
          {!isLogged && <LoginForm onLogin={onLogin} />}
          {isLogged && <CreateForm token={token} />}
        </div>

      </main>
    </Layout>
  )
}
