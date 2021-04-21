import { useCallback } from "react";

import styles from "../styles/Home.module.css";
import PendingMessage from "./pending";

const DEFAULT_UPLOAD_MESSAGE = "Glissez et déposez le fichier à analyser ou sélectionnez le.";
const DEFAULT_PENDING_MESSAGE = "Calcul des statistiques en cours, merci de patienter";

export default function FileHandler({
  handleFile,
  isPending,
  fileSize,
  pendingMessage = DEFAULT_PENDING_MESSAGE,
  uploadMessage = DEFAULT_UPLOAD_MESSAGE,
}) {
  const handleSelect = useCallback(event => {
    for (var i = 0; i < event.target.files.length; i++) {
      handleFile(event.target.files[i]);
    }
    event.target.value = "";
  });

  return (
    <>
      <p className={styles.description}>
        {uploadMessage}
        <br />
        <input type="file" onChange={handleSelect} multiple />
      </p>

      {isPending && <PendingMessage message={pendingMessage} fileSize={fileSize} />}

      <p className={styles.description}>
        Les opérations sont toutes réalisées sur votre ordinateur.
        <br />
        Aucune donnée personnelle n'est transférée.
      </p>
    </>
  );
}
