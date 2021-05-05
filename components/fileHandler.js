import { useState } from "react";

import styles from "../styles/Home.module.css";
import BaseFlux from "../models/BaseFlux";
import { applicationStringToDate } from "../lib/dates";
import PendingMessage from "./pending";

const DEFAULT_UPLOAD_MESSAGE = "Glissez et déposez le fichier à analyser ou sélectionnez le.";
const DEFAULT_PENDING_MESSAGE = "Calcul des statistiques en cours, merci de patienter";

export default function FileHandler({
  handleFile,
  fileSize,
  sortFilesByFluxDate = false,
  pendingMessage = DEFAULT_PENDING_MESSAGE,
  uploadMessage = DEFAULT_UPLOAD_MESSAGE,
}) {
  const [isPending, setIsPending] = useState(false);

  const handleUploads = event => {
    let filesToHandle = event.target.files;
    setIsPending(true);
    sortFilesByFluxDate ? handleSortedFiles(filesToHandle) : handleFiles(filesToHandle);

    event.target.value = "";
  };

  const handleFiles = async filesToHandle => {
    await Promise.all([...filesToHandle].map(async file => await handleFile(file)));
    setIsPending(false);
  };

  const handleSortedFiles = async filesToHandle => {
    let fluxDates = {};
    const filesToProcess = [];
    await Promise.all(
      [...filesToHandle].map(async file => {
        filesToProcess.push(file);
        fluxDates[file.name] = await retrieveFluxDate(file);
      })
    );
    const sortedFilesToProcess = filesToProcess.sort(function (firstFile, secondFile) {
      return (
        applicationStringToDate(fluxDates[firstFile.name]) -
        applicationStringToDate(fluxDates[secondFile.name])
      );
    });
    // handleFiles(sortedFilesToProcess);
    await Promise.all(sortedFilesToProcess.map(async file => await handleFile(file)));
    setIsPending(false);
  };

  const retrieveFluxDate = async file => {
    return new Promise(resolve => {
      const reader = new FileReader();
      reader.onload = function (event) {
        const flux = new BaseFlux(event.target.result);
        resolve(flux.creationDate);
      };
      reader.readAsText(file);
    });
  };

  return (
    <>
      <p className={styles.description}>
        {uploadMessage}
        <br />
        <input type="file" onChange={handleUploads} multiple />
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
