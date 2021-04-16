import { useEffect, useState, useReducer } from "react";
import * as XLSX from "xlsx";

import Layout from "../../../components/layout";
import FileHandler from "../../../components/fileHandler";
import Footer from "../../../components/footer";
import LoginForm from "../../../components/loginForm";
import CreateUserButton from "../../../components/createUserButton"
import styles from "../../../styles/Home.module.css";

import { initReducer, reducerFactory } from '../../../lib/historique'
import { getDateTimeString } from '../../../lib/dates'
import { checkUserInvitationStatus } from '../../../lib/checkUserInvitationStatus'
import { generateInvitation } from '../../../lib/generateInvitation'

const reducer = reducerFactory("Expérimentation Ardennes - CNAF - Bénéficiaire");
const devMode = process.env.NODE_ENV == "development";

export default function Ardennes() {
  const [devFile, setDevFile] = useState(null);
  const [runs, dispatchRuns] = useReducer(reducer, [], initReducer);
  const [usersData, setUsersData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [userStatusChecked, setUserStatusChecked] = useState(false);
  const [fileSize, setFileSize] = useState(0);
  const [isLogged, setIsLogged] = useState(false);
  const [token, setToken] = useState({
    tokenId: "",
    uid: "",
    client: "",
  });

  useEffect(() => {
    if (devFile) {
      handleFile(devFile);
    }
  }, [devFile]);

  useEffect(() => {
    if(usersData && userStatusChecked === false) {
      usersData.forEach((user, userIndex) => {
        if (user["ID RDV"] != "") {
          checkUserInvitationStatus(user, userIndex, token, usersData, updateUsersData);
        }
      });
      setUserStatusChecked(true);
      setIsPending(false);
    }
  }, [usersData])

  const writeFile = () => {
    const outWorkbook = XLSX.utils.book_new();
    const outWorksheet = XLSX.utils.json_to_sheet(usersData);
    XLSX.utils.book_append_sheet(outWorkbook, outWorksheet, "DIVERGENCES");
    // XLSX.utils.book_append_sheet(outWorkbook, xls.Sheets[xls.SheetNames[1]], "GRAPHIQUE");
    // XLSX.utils.book_append_sheet(outWorkbook, xls.Sheets[xls.SheetNames[2]], "Selection COA");
    XLSX.writeFile(outWorkbook, `ardennes_rsa_${getDateTimeString(new Date())}.xlsx`)
  }

  const updateUsersData = (data) => {
    setUsersData(data);
  };

  const handleLogin = (tokenId, uid, client) => {
    setToken({ ...token, tokenId: tokenId, uid: uid, client: client });
    setIsLogged(true);
  };

  const handleFile = file => {
    if (devMode && file != devFile) {
      setDevFile(file);
    }
    setFileSize(file.size);
    setIsPending(true);
    const start_time = new Date();

    var reader = new FileReader();
    reader.onload = function (event) {
      const fileData = new Uint8Array(event.target.result);
      const xls = XLSX.read(fileData, {type:'array', cellDates: true, dateNF:'dd/mm/yyyy'})
      const worksheet = xls.Sheets[xls.SheetNames[0]];
      // Limiter la capture aux colonnes A-V
      const range = XLSX.utils.decode_range(worksheet['!ref']);
      range.s.c = 0; // 0 == XLSX.utils.decode_col("A")
      range.e.c = 21; // 19 == XLSX.utils.decode_col("V")
      const new_range = XLSX.utils.encode_range(range);

      const jsonData = XLSX.utils.sheet_to_json(worksheet, { blankrows: false, raw: false, defval: "", range: new_range });
      jsonData == null && setIsPending(false);
      setUserStatusChecked(false);
      setUsersData(jsonData);
      dispatchRuns({
        type: "append",
        item: {
          timestamp: new Date().toISOString().slice(0, 19),
          duration: new Date() - start_time,
          filename: file.name,
          fileSize: file.size,
          fileLines: jsonData.length,
        },
      });
    };
    reader.readAsArrayBuffer(file);
  };

  return (
    <Layout className={styles.container} handleFile={handleFile}>
      <main className={styles.main}>
        <h1 className={styles.title}>Expérimentation Ardennes</h1>

        {!isLogged && (
          <div className={styles.create}>
            <LoginForm handleLogin={handleLogin} />
          </div>
        )}

        {isLogged && (
          <>
            <FileHandler
              handleFile={handleFile}
              isPending={isPending}
              fileSize={fileSize}
              message={"Récupération des informations, merci de patienter"}
            />

            {usersData && (
              <>
                <h2 className={styles.subtitle}>Bénéficiaires RSA</h2>

                {usersData.length == 0 && (
                  <p className={styles.description}>
                    Aucun bénéficiaire dans le fichier
                  </p>
                )}

                {usersData.length > 0 && (
                  <>
                    <table>
                      <thead>
                        <tr>
                          <th rowSpan="2">Nom</th>
                          <th rowSpan="2">Prénom</th>
                          <th rowSpan="2">Mail</th>
                          <th rowSpan="2">Téléphone</th>
                          <th rowSpan="2">ID RDV-Solidarités</th>
                          <th colSpan="3">Invitation</th>
                        </tr>
                        <tr>
                          <th colSpan="1">Dernier envoi le</th>
                          <th colSpan="1">Date d'inscription</th>
                          <th colSpan="1"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {usersData.map((user, index) => (
                          <tr key={index}>
                            <td className={styles.center}>{user["NOM"]}</td>
                            <td className={styles.center}>{user["PRENOM"]}</td>
                            <td className={styles.center}>{user["MAIL"]}</td>
                            <td className={styles.center}>
                              {user["TELEPHONE"]}
                            </td>

                            {user["ID RDV"] == "" && (
                              <td className={styles.center}>
                                <CreateUserButton
                                  user={user}
                                  index={index}
                                  token={token}
                                  usersData={usersData}
                                  updateUsersData={updateUsersData}
                                />
                              </td>
                            )}
                            {user["ID RDV"] != "" && (
                              <td className={styles.center}>
                                {user["ID RDV"]}
                              </td>
                            )}
                            <td className={styles.center}>{user["Date d'invitation"]}</td>
                            <td className={styles.center}>{user["Date d'inscription"]}</td>
                            {user["ID RDV"] != "" && (
                              <td className={styles.center}>
                                <button onClick={() => generateInvitation(user["ID RDV"], index, token, usersData, updateUsersData)}>
                                  {user["Date d'invitation"] != "" &&
                                  "Regénérer invitation"
                                  }
                                  {user["Date d'invitation"] == "" &&
                                  "Générer invitation"
                                  }
                                </button>
                              </td>
                            )}
                          </tr>
                        ))}
                      </tbody>
                    </table>

                    <button className={styles.button} onClick={writeFile}>
                      Regénérer fichier
                    </button>
                  </>
                )}
              </>
            )}
          </>
        )}

        <Footer
          subject="Expérimentation Ardennes"
          pourquoi="Quel est l'objectif de cette expérimentation&nbsp;?"
          text={
            <>
              <p className={styles.text}>
                Faciliter le travail des agents du département et tester
                l'utilisation de l'application RDV-Solidarités pour accélérer la
                prise du premier rendez-vous d'orientation.
              </p>
            </>
          }
        />
      </main>
    </Layout>
  );
}
