import styles from "../styles/Home.module.css";

export default function PendingMessage({ message, fileSize }) {
  return (
    <p className={styles.pending_warning}>
      {message}
      {fileSize > 100000000 && (
        <>
          <br />
          Pour les fichiers supérieurs à 100 Mo, le temps de traitement peut
          dépasser 1 minute.
        </>
      )}
    </p>
  );
}
