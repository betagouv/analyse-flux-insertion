import Mailer from './mailer'
import styles from '../styles/Home.module.css'


export default function Footer({
  pourquoi,
  text,
  subject
}) {
  return (<>
    <h2 id="pourquoi" className={styles.subtitle}>
      {pourquoi}
    </h2>

    {text}

    <p className={styles.description}>
      Un problème, une question ? Contactez-nous à <Mailer subject={subject}>data.insertion@beta.gouv.fr</Mailer>
    </p>
  </>)
}

