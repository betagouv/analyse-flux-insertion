import { useCallback } from "react";

import styles from "../styles/Home.module.css";
import PendingMessage from "./pending";

export default function FileHandler({ handleFile, isPending, fileSize, fileType, message }) {
  const handleSelect = useCallback(event => {
    for (var i = 0; i < event.target.files.length; i++) {
      handleFile(event.target.files[i]);
    }
    event.target.value = "";
  });

  return (
    <>
      <p className={styles.description}>
        Glissez et déposez les fichiers {fileType && `"${fileType}"`} à analyser ou
        sélectionnez-les.
        <br />
        <input type="file" onChange={handleSelect} multiple />
      </p>

      {isPending && <PendingMessage message={message} fileSize={fileSize} />}

      <p className={styles.description}>
        Les opérations sont toutes réalisées sur votre ordinateur.
        <br />
        Aucune donnée personnelle n'est transférée.
      </p>
    </>
  );
}
