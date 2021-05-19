import Layout from "../../../components/layout";
import FileHandler from "../../../components/fileHandler";
import styles from "../../../styles/Home.module.css";

import { useState, useReducer } from "react";
import { initReducer, reducerFactory } from "../../../lib/reducerFactory";
import FluxBeneficiaire from "../../../models/FluxBeneficiaire";
import FluxInstruction from "../../../models/FluxInstruction";

export default function identificationBeneficiaire() {
  const [fileSize, setFileSize] = useState(0);
  const [step, setStep] = useState("previousMonth");
  const [runs, dispatchRuns] = useReducer(reducer, [], initReducer);
  const CHUNK_SIZE = 512 * 1024;

  const handleFileUpload = file => {
    switch (step) {
      case "previousMonth":
        handlePreviousMonth(file);
      case "currentMonth":
        handleCurrentMonth(file);
      case "instruction":
        handleInstruction(file);
    }
  };

  const handlePreviousMonth = async file => {
    setFileSize(file.size);
    let offset = 0;

    while (offset < file.size) {
      await new Promise(resolve => {
        const reader = new FileReader();
        reader.onload = function (event) {};
      });
    }
  };

  const handleCurrentMonth = file => {
    console.log("ok");
  };

  const handleInstruction = file => {
    console.log("ok");
  };

  return (
    <Layout className={styles.container} handleFile={handleFileUpload}>
      <main className={styles.main}>
        <h1>Identifiez les nouveaux demandeurs à l'aide des flux CNAF</h1>
        <ol>
          <li style={step === "previousMonth" ? { fontWeight: "bold" } : {}}>
            Uploadez le flux mensuel du mois précédent le fichier que vous voulez analyser (
            <strong>M - 1</strong>)
          </li>
          <br />
          <li style={step === "currentMonth" ? { fontWeight: "bold" } : {}}>
            Uploadez le flux mensuel que vous voulez analyser(<strong>M</strong>)
          </li>
          <br />
          <li style={step === "instruction" ? { fontWeight: "bold" } : {}}>
            Uploadez le ou les fichiers "instructions" associés pour récupérer les données de
            contact des demandeurs.
          </li>
        </ol>

        <FileHandler
          handleFile={handleFileUpload}
          fileSize={fileSize}
          sortFilesByFluxDate={true}
          uploadMessage={"Glissez et déposez le flux à analyser ou sélectionnez-le."}
          pendingMessage={[
            "Traitement en cours, merci de patienter.",
            <br />,
            "L'identification devrait prendre du temps (> 1 minute) pour ce type de fichiers",
          ]}
        />
      </main>
    </Layout>
  );
}
