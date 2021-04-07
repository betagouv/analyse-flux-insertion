// Penser à vérifier l'ID de l'organisation
// Récupérer le token d'invitation
// Proposer d'envoyer le mail ?
// Envoyer le mail à la place d'Isabelle ?
// Mettre un cookie de session pour le login ?

import { useEffect, useState, useReducer } from 'react'
import * as XLSX from 'xlsx';

import Layout from '../../../components/layout'
import FileHandler from '../../../components/file'
import Footer from '../../../components/footer'
import LoginForm from '../../../components/login-form'
import styles from '../../../styles/Home.module.css'

import { getFormattedTime, toDate } from '../../../lib/dates'
import { initReducer, reducerFactory } from '../../../lib/historique'

const reducer = reducerFactory('Expérimentation Ardennes - CNAF - Bénéficiaire')
const devMode = process.env.NODE_ENV == 'development'

export default function Ardennes() {
  const [devFile, setDevFile] = useState(null)
  const [runs, dispatchRuns] = useReducer(reducer, [], initReducer)
  const [usersData, setUsersData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [fileSize, setFileSize] = useState(0);
  const [isLogged, setIsLogged] = useState(false);
  const [token, setToken] = useState({
          "tokenId": '',
          uid: '',
          client: ''
  });
  const RDV_URL = process.env.NEXT_PUBLIC_RDV_DEMO_URL;
  const path = '/users';
  const url = `${RDV_URL}/api/v1${path}`;

  useEffect(() => {
    if(devFile) {
      fileHandler(devFile)
    }
  }, [devFile])

  const fileWriter = () => {
    const outWorkbook = XLSX.utils.book_new();
    const outWorksheet = XLSX.utils.json_to_sheet(usersData);
    XLSX.utils.book_append_sheet(outWorkbook, outWorksheet, "DIVERGENCES");
    // XLSX.utils.book_append_sheet(outWorkbook, xls.Sheets[xls.SheetNames[1]], "GRAPHIQUE");
    // XLSX.utils.book_append_sheet(outWorkbook, xls.Sheets[xls.SheetNames[2]], "Selection COA");
    XLSX.writeFile(outWorkbook, `ardennes_rsa_${getFormattedTime()}.xlsx`)
  }

  const createUser = (userData, i) => {
    const address = userData["ADRESSE"] + " - " + userData["CODE\r\nPOSTAL"] + " " + userData["VILLE"]

    const user = { first_name: userData["PRENOM"], last_name: userData["NOM"], email: userData["MAIL"], phone_number: userData["TELEPHONE"].replace(/\s+/g, ''), birth_date: toDate(userData["DATE DE\r\nNAISSANCE"]), address: address, caisse_affiliation: "caf", affiliation_number: userData["N°CAF"], organisation_ids: [1] };
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "access-token": token.tokenId,
        uid: token.uid,
        client: token.client
      },
      body: JSON.stringify(user)
    })

    .then(response => response.json())
    .then(result => {
      let newUsersData = [...usersData];
      if (result.user) {
        newUsersData[i]["ID RDV"] = result.user.id
        setUsersData(newUsersData);
      } else if (result.errors.email && result.errors.email[0].error === "taken") {
        newUsersData[i]["ID RDV"] = result.errors.email[0].id
        setUsersData(newUsersData);
        alert("Un compte associé à cet email existe déjà")
      } else if (result.errors.email && result.errors.email[0].error === "invalid") {
        alert("L'adresse mail n'est pas valide")
      } else if (result.errors && result.errors[0]) {
        alert(result.errors[0])
      }
    })
    .catch(error => alert(error))
  }

  const onLogin = (tokenId, uid, client) => {
    setToken({ ...token, tokenId: tokenId, uid: uid, client: client });
    setIsLogged(true);
  };

  const fileHandler = (file) => {
    if (devMode && file != devFile) {
      setDevFile(file)
    }
    setFileSize(file.size);
    setIsPending(true);
    const start_time = new Date();

    var reader = new FileReader()
    reader.onload = function (event) {
      const fileData = new Uint8Array(event.target.result);
      const xls = XLSX.read(fileData, {type:'array', cellDates: true, dateNF:'dd/mm/yyyy'})
      /* Get first worksheet */
      const worksheet = xls.Sheets[xls.SheetNames[0]];
      // Limiter la capture aux colonnes A-T
      const range = XLSX.utils.decode_range(worksheet['!ref']);
      range.s.c = 0; // 0 == XLSX.utils.decode_col("A")
      range.e.c = 19; // 19 == XLSX.utils.decode_col("T")
      const new_range = XLSX.utils.encode_range(range);
      /* Convert array to json*/
      const jsonData = XLSX.utils.sheet_to_json(worksheet, {blankrows: false, raw: false, defval: "", range: new_range });
      setUsersData(jsonData);
      setIsPending(false);

      dispatchRuns({
        type: 'append',
        item: {
          timestamp: (new Date()).toISOString().slice(0, 19),
          duration: (new Date()) - start_time,
          filename: file.name,
          fileSize: file.size,
          fileLines: jsonData.length
        }
      })
    }
    reader.readAsArrayBuffer(file);
  }

  return (
    <Layout className={styles.container} fileHandler={fileHandler}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Expérimentation Ardennes
        </h1>

        {!isLogged &&
          <div id="create-forms" className={styles.create}>
            <LoginForm onLogin={onLogin} />
          </div>
        }

        {isLogged && <>
          <FileHandler fileHandler={fileHandler} isPending={isPending} fileSize={fileSize} />


          { usersData && <>
            <h2 className={styles.subtitle}>
              Bénéficiaires RSA
            </h2>

            { usersData.length == 0 &&
              <p className={styles.description}>Aucun bénéficiaire dans le fichier</p>
            }
            { usersData.length > 0 && <>
              <table>
                <thead>
                  <tr>
                    <th rowSpan="2">Nom</th>
                    <th rowSpan="2">Prénom</th>
                    <th rowSpan="2">Mail</th>
                    <th rowSpan="2">Téléphone</th>
                    <th rowSpan="2">ID RDV-Solidarités</th>
                  </tr>
                  <tr></tr>
                </thead>
                <tbody>
                  {usersData.map((user, index) => (<tr key={index}>
                    <td className={styles.center}>{user["NOM"]}</td>
                    <td className={styles.center}>{user["PRENOM"]}</td>
                    <td className={styles.center}>{user["MAIL"]}</td>
                    <td className={styles.center}>{user["TELEPHONE"]}</td>
                    {user["ID RDV"] != "" &&
                      <td className={styles.center}>{user["ID RDV"]}</td>
                    }
                    {user["ID RDV"] == "" &&
                      <td className={styles.center}><button onClick={() => createUser(user, index)} >Créer un compte</button></td>
                    }
                  </tr>
                ))}
                </tbody>
              </table>

              <button className={styles.button} onClick={fileWriter}>Regénérer fichier</button>
            </>}
          </>}
        </>}

        <Footer
          subject="Expérimentation Ardennes"
          pourquoi="Quel est l'objectif de cette expérimentation&nbsp;?"
          text={<>
            <p className={styles.text}>Faciliter le travail des agents du département et tester l'utilisation de l'application RDV-Solidarités pour accélérer la prise du premier rendez-vous d'orientation.</p>
          </>}
        />
      </main>
    </Layout>
  )
}
