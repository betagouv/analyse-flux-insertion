import { useEffect, useState, useReducer } from "react";
import * as XLSX from "xlsx";

import Layout from "../../../components/layout";
import FileHandler from "../../../components/file";
import Footer from "../../../components/footer";
import LoginForm from "../../../components/login-form";
import styles from "../../../styles/Home.module.css";

import { getFrenchDateString, getDateTimeString, stringToDate } from '../../../lib/dates'
import { initReducer, reducerFactory } from '../../../lib/historique'

const reducer = reducerFactory(
  "Expérimentation Ardennes - CNAF - Bénéficiaire"
);
const devMode = process.env.NODE_ENV == "development";

export default function Ardennes() {
  const [devFile, setDevFile] = useState(null);
  const [runs, dispatchRuns] = useReducer(reducer, [], initReducer);
  const [usersData, setUsersData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [firstCheck, setFirstCheck] = useState(false);
  const [fileSize, setFileSize] = useState(0);
  const [isLogged, setIsLogged] = useState(false);
  const [token, setToken] = useState({
    tokenId: "",
    uid: "",
    client: "",
  });
  const RDV_SOLIDARITES_URL = process.env.NEXT_PUBLIC_RDV_SOLIDARITES_DEMO_URL;
  const usersUrl = `${RDV_SOLIDARITES_URL}/api/v1/users`;

  useEffect(() => {
    if (devFile) {
      handleFile(devFile);
    }
  }, [devFile]);

  useEffect(() => {
    if(usersData && firstCheck === false) {
      usersData.forEach((user, userIndex) => {
        if (user["ID RDV"] != "") {
          checkUser(user["ID RDV"], userIndex);
        }
      });
      setFirstCheck(true);
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

  const checkUser = (userId, userIndex) => {
    const getUserUrl = usersUrl + `/${userId}`;
    fetch(getUserUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "access-token": token.tokenId,
        uid: token.uid,
        client: token.client,
      }
    })
      .then((response) => response.json())
      .then((result) => {
        let updatedUsersData = [...usersData];
        if (result.user.invitation_created_at) {
          let invitation_date = result.user.invitation_created_at
            .substring(0, 10)
            .split("-");
          updatedUsersData[userIndex]["Date d'invitation"] = getFrenchDateString(new Date(invitation_date));
        }
        if (result.user.invitation_accepted_at) {
          let inscription_date = result.user.invitation_accepted_at
            .substring(0, 10)
            .split("-");
          updatedUsersData[userIndex]["Date d'inscription"] = getFrenchDateString(new Date(inscription_date));
        }
        setUsersData(updatedUsersData)
      })
  };

  const generateInvitation = (userId, userIndex) => {
    const invitationUrl = usersUrl + `/${userId}/invite`;
    let invitationData = [...usersData];
    fetch(invitationUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "access-token": token.tokenId,
        uid: token.uid,
        client: token.client,
      },
    })
      .then(response => response.json())
      .then(result => {
        if (result.invitation_url) {
          invitationData[userIndex]["Invitation"] = result.invitation_url;
          invitationData[userIndex]["Date d'invitation"] = getFrenchDateString(new Date());
          setUsersData(invitationData);
        }
      })
      .catch(error => alert(error))

  }

  const createUser = (userData, userIndex) => {
    const address = userData["ADRESSE"] + " - " + userData["CODE\r\nPOSTAL"] + " " + userData["VILLE"]

    const user = {
      first_name: userData["PRENOM"],
      last_name: userData["NOM"],
      email: userData["MAIL"],
      phone_number: userData["TELEPHONE"].replace(/\s+/g, ""),
      birth_date: stringToDate(userData["DATE DE\r\nNAISSANCE"]),
      address: address,
      caisse_affiliation: "caf",
      affiliation_number: userData["N°CAF"],
      organisation_ids: [process.env.NEXT_PUBLIC_ORGANISATION_ID_DEMO],
    };
    fetch(usersUrl, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "access-token": token.tokenId,
        uid: token.uid,
        client: token.client,
      },
      body: JSON.stringify(user),
    })
      .then(response => response.json())
      .then(result => {
        let newUsersData = [...usersData];
        if (result.user) {
          newUsersData[userIndex]["ID RDV"] = result.user.id;
          setUsersData(newUsersData);
          generateInvitation(result.user.id, userIndex);
        } else if (result.errors && result.errors.email && result.errors.email[0].error === "taken") {
          newUsersData[userIndex]["ID RDV"] = result.errors.email[0].id;
          setUsersData(newUsersData);
          checkUser(result.errors.email[0].id, userIndex);
          alert("Un compte associé à cet email existe déjà");
        } else if (result.errors && result.errors.first_name && result.errors.first_name[0].error === "déjà utilisé") {
          alert("La création de ce compte a échoué. L'utilisateur semble déjà exister mais n'a pas pu être récupéré.");
        } else if (result.errors.email && result.errors.email[0].error === "invalid") {
          alert("L'adresse mail n'est pas valide");
        } else if (result.errors && result.errors[0]) {
          alert(result.errors[0]);
        }
      })
      .catch(error => alert(error));
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
      setUsersData(jsonData);
      setIsPending(false);
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
                                <button onClick={() => createUser(user, index)}>
                                  Créer un compte
                                </button>
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
                                <button onClick={() => generateInvitation(user["ID RDV"], index)}>
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
