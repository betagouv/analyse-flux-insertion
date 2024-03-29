import { Fragment, useEffect, useState, useReducer } from "react";
import { useRouter } from "next/router";
import * as XLSX from "xlsx";

import Layout from "../../../components/layout";
import FileHandler from "../../../components/fileHandler";
import Footer from "../../../components/footer";
import LoginForm from "../../../components/loginForm";
import styles from "../../../styles/Home.module.css";

import { appFetch } from "../../../lib/appFetch";
import { initReducer, reducerFactory } from "../../../lib/reducerFactory";
import {
  applicationDateToString,
  getDateTimeString,
  getFrenchFormatDateString,
  stringToDate,
} from "../../../lib/dates";

const reducer = reducerFactory("Expérimentation Ardennes - CNAF - Bénéficiaire");

export default function Ardennes() {
  const router = useRouter();
  const isDemo = router.pathname.includes("demo");
  const devMode = process.env.NODE_ENV == "development";
  const orgaID = isDemo
    ? process.env.NEXT_PUBLIC_ORGANISATION_ID_DEMO
    : process.env.NEXT_PUBLIC_ORGANISATION_ID_PROD;

  const RDV_SOLIDARITES_URL = isDemo
    ? process.env.NEXT_PUBLIC_RDV_SOLIDARITES_DEMO_URL
    : process.env.NEXT_PUBLIC_RDV_SOLIDARITES_PROD_URL;
  const usersUrl = RDV_SOLIDARITES_URL + "/api/v1/users";

  const [devFile, setDevFile] = useState(null);
  const [runs, dispatchRuns] = useReducer(reducer, [], initReducer);
  const [usersData, setUsersData] = useState(null);
  const [existingUsers, setExistingUsers] = useState([]);
  const [usersRetrieved, setUsersRetrieved] = useState(false);
  const [usersStatusChecked, setUserStatusChecked] = useState(false);
  const [fileSize, setFileSize] = useState(0);
  const [isLogged, setIsLogged] = useState(false);
  const [token, setToken] = useState({
    tokenId: "",
    uid: "",
    client: "",
  });

  useEffect(() => {
    if (usersData && !usersRetrieved) {
      retrieveExistingUsers();
    }
  }, [usersData]);

  useEffect(() => {
    if (usersRetrieved && !usersStatusChecked) {
      usersData.forEach((user, userIndex) => {
        if (user["ID RDV"] && user["ID RDV"].length > 0 && !user["Date d'inscription"]) {
          checkUserInvitationStatus(user["ID RDV"], userIndex);
        }
      });
      setUserStatusChecked(true);
    }
  }, [usersRetrieved]);

  async function retrieveExistingUsers() {
    let next_page = 1;
    while (next_page) {
      let retrieveUsersUrl = usersUrl + `?page=${next_page}`
      const result = await appFetch(retrieveUsersUrl, token);
      setExistingUsers(existingUsers => [...existingUsers, ...result.users]);
      next_page = result.meta.next_page
      if (!result.meta.next_page) {
        setUsersRetrieved(true);
      }
    };
  }

  const writeFile = () => {
    const outWorkbook = XLSX.utils.book_new();
    const outWorksheet = XLSX.utils.json_to_sheet(usersData);
    XLSX.utils.book_append_sheet(outWorkbook, outWorksheet, "DIVERGENCES");
    // XLSX.utils.book_append_sheet(outWorkbook, xls.Sheets[xls.SheetNames[1]], "GRAPHIQUE");
    // XLSX.utils.book_append_sheet(outWorkbook, xls.Sheets[xls.SheetNames[2]], "Selection COA");
    XLSX.writeFile(outWorkbook, `ardennes_rsa_${getDateTimeString(new Date())}.xlsx`);
  };

  async function generateInvitationUrl(userId, userIndex) {
    const invitationUrl = usersUrl + `/${userId}/invite`;
    const result = await appFetch(invitationUrl, token);

    let newUsersData = [...usersData];
    let userEmail = newUsersData[userIndex]["MAIL"]
    if (userEmail && userEmail.length > 0) {
      newUsersData[userIndex]["Lien d'invitation"] = result.invitation_url;
    } else {
      newUsersData[userIndex]["Code d'invitation"] = result.invitation_token;
    }
    newUsersData[userIndex]["Date d'invitation"] = getFrenchFormatDateString(new Date());
    setUsersData(newUsersData);
  }

  async function getUser(userId) {
    const getUserUrl = usersUrl + `/${userId}`;
    return await appFetch(getUserUrl, token);
  }

  async function checkUserInvitationStatus(userId, userIndex) {
    const user = existingUsers.find(user => user.id == userId)

    let newUsersData = [...usersData];
    if (user.invitation_created_at) {
      let invitation_date = user.invitation_created_at // Date au format : 2021-04-15 14:53:56 +0200
        .substring(0, 10); // Récupérer les 10 premiers chiffres (la date)
      invitation_date = new Date(invitation_date); // Créer une date JS
      newUsersData[userIndex]["Date d'invitation"] = getFrenchFormatDateString(invitation_date);
    }
    if (user.invitation_accepted_at) {
      let inscription_date = user.invitation_accepted_at // Date au format : 2021-04-15 14:53:56 +0200
        .substring(0, 10); // Récupérer les 10 premiers chiffres (la date)
      inscription_date = new Date(inscription_date); // Créer une date JS
      newUsersData[userIndex]["Date d'inscription"] = getFrenchFormatDateString(inscription_date);
    }
    setUsersData(newUsersData);
  }

  const displayAddress = userData => {
    return userData["ADRESSE"] + " - " + userData["CODE POSTAL"] + " " + userData["VILLE"];
  }

  async function handleUserWithTakenEmail(userData, userIndex, userId) {
    const result = await getUser(userId);

    // Vérifie d'abord si l'utilisateur avec le même email est un doublon
    if (
      result &&
      result.user &&
      result.user.first_name.toUpperCase() === userData["PRENOM"].toUpperCase() &&
      result.user.last_name.toUpperCase() === userData["NOM"].toUpperCase() &&
      result.user.birth_date ===
        applicationDateToString(stringToDate(userData["DATE DE NAISSANCE"])) &&
      result.user.address.toUpperCase() === displayAddress(userData).toUpperCase()
    ) {
      let newUsersData = [...usersData];
      newUsersData[userIndex]["ID RDV"] = userId;
      setUsersData(newUsersData);
      checkUserInvitationStatus(userId, userIndex);
      alert("Un compte associé à cet email existe déjà");
    } else {
      createUser(userData, userIndex, false, userId); // Si ce n'est pas un doublon, crée un utilisateur en tant que "proche" de l'utilisateur existant
    }
  }

  async function createUser(userData, userIndex, withEmail = true, responsible_id = null) {
    const address = displayAddress(userData);
    if ([13, 15].includes(userData["N°CAF"].trim().length)) userData["N°CAF"] = ""

    let user = {
      first_name: userData["PRENOM"],
      last_name: userData["NOM"],
      phone_number: userData["TELEPHONE"].replace(/\s+/g, ""),
      birth_date: applicationDateToString(stringToDate(userData["DATE DE NAISSANCE"])),
      address: address,
      caisse_affiliation: "caf",
      affiliation_number: userData["N°CAF"],
      organisation_ids: [orgaID],
      responsible_id: responsible_id
    };
    if (withEmail === true) user.email = userData["MAIL"];

    const result = await appFetch(usersUrl, token, "POST", JSON.stringify(user));

    let newUsersData = [...usersData];
    if (result.user) {
      newUsersData[userIndex]["ID RDV"] = result.user.id;
      setUsersData(newUsersData);
      generateInvitationUrl(result.user.id, userIndex);
    } else if (result.errors && result.errors.email && result.errors.email[0].error === "taken") {
      handleUserWithTakenEmail(userData, userIndex, result.errors.email[0].id);
    } else if (result.errors && result.errors.email && result.errors.email[0].error === "invalid") {
      createUser(userData, userIndex, false);
    } else if (
      result.errors &&
      result.errors.first_name &&
      result.errors.first_name[0].error === "déjà utilisé"
    ) {
      alert(
        "La création du compte a échoué. L'utilisateur semble exister mais n'a pu être récupéré."
      );
    } else if (result.errors && result.errors[0] && result.errors[0].base === "forbidden") {
      alert("Votre compte agent RDV-Solidarités ne vous permet pas d'effectuer cette action.");
    } else if (result.errors && result.errors[0]) {
      alert(result.errors[0]);
    }
  }

  const handleLogin = (tokenId, uid, client) => {
    setToken({ ...token, tokenId: tokenId, uid: uid, client: client });
    setIsLogged(true);
  };

  const handleFile = async file => {
    if (devMode && file != devFile) {
      setDevFile(file);
    }
    setFileSize(file.size);
    const start_time = new Date();

    await new Promise(resolve => {
      var reader = new FileReader();
      reader.onload = function (event) {
        const fileData = new Uint8Array(event.target.result);
        const xls = XLSX.read(fileData, { type: "array", cellDates: true, dateNF: "dd/mm/yyyy" });
        const worksheet = xls.Sheets[xls.SheetNames[0]];

        let jsonData = XLSX.utils.sheet_to_json(worksheet, {
          blankrows: false,
          raw: false,
          defval: "",
        });

        // we remove line breaks from all keys
        jsonData = jsonData.map(userData => {
          return [...Object.keys(userData)].reduce((res, key) => {
            res[key.replace(/[\n\r]+/g, " ")] = userData[key];
            return res;
          }, {});
        });

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
        resolve();
      };
      reader.readAsArrayBuffer(file);
    });
  };

  return (
    <Layout className={styles.container} handleFile={handleFile}>
      <main className={styles.main}>
        <h1 className={styles.title}>Expérimentation Ardennes</h1>

        {!isLogged && (
          <div className={styles.create}>
            <LoginForm handleLogin={handleLogin} rdvUrl={RDV_SOLIDARITES_URL} />
          </div>
        )}

        {isLogged && (
          <>
            <FileHandler
              handleFile={handleFile}
              fileSize={fileSize}
              pendingMessage={"Récupération des informations, merci de patienter"}
            />

            {usersData && (
              <>
                <h2 className={styles.subtitle}>Bénéficiaires RSA</h2>

                {usersData.length == 0 && (
                  <p className={styles.description}>Aucun bénéficiaire dans le fichier</p>
                )}

                {usersData.length > 0 && (
                  <>
                    <table>
                      <thead>
                        <tr>
                          <th rowSpan="2">Date</th>
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
                          <th colSpan="1">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* reverse est utilisé pour que les utilisateurs les plus récents apparaissent en haut */}
                        {[...usersData].reverse().map((user, index) => (
                          <Fragment key={index}>
                            {user["DATE"] !== "" && (
                              <tr>
                                <td className={styles.center}>{user["DATE"]}</td>
                                <td className={styles.center}>{user["NOM"]}</td>
                                <td className={styles.center}>{user["PRENOM"]}</td>
                                <td className={styles.center}>{user["MAIL"]}</td>
                                <td className={styles.center}>{user["TELEPHONE"]}</td>

                                {user["ID RDV"] === "" && (
                                  <td className={styles.center}>
                                    <button
                                      onClick={() => createUser(user, usersData.length - index - 1)}
                                    >
                                      Créer un compte
                                    </button>
                                  </td>
                                )}
                                {user["ID RDV"] !== "" && (
                                  <td className={styles.center}>{user["ID RDV"]}</td>
                                )}
                                <td className={styles.center}>{user["Date d'invitation"]}</td>
                                <td className={styles.center}>{user["Date d'inscription"]}</td>
                                {user["ID RDV"] !== "" && (
                                  <td className={styles.center}>
                                    <button
                                      onClick={() =>
                                        generateInvitationUrl(
                                          user["ID RDV"],
                                          usersData.length - index - 1
                                        )
                                      }
                                    >
                                      {user["Date d'invitation"] !== "" && "Regénérer invitation"}
                                      {user["Date d'invitation"] === "" && "Générer invitation"}
                                    </button>
                                  </td>
                                )}
                                {user["ID RDV"] === "" && <td className={styles.center}></td>}
                              </tr>
                            )}
                          </Fragment>
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
                Faciliter le travail des agents du département et tester l'utilisation de
                l'application RDV-Solidarités pour accélérer la prise du premier rendez-vous
                d'orientation.
              </p>
            </>
          }
        />
      </main>
    </Layout>
  );
}
