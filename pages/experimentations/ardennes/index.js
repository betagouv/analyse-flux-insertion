// Code avec orga fixe (Ardennes)
import { useEffect, useState, useReducer } from 'react'
import * as XLSX from 'xlsx';

import Layout from '../../../components/layout'
import FileHandler from '../../../components/file'
import Footer from '../../../components/footer'
import LoginForm from '../../../components/login-form'
import styles from '../../../styles/Home.module.css'

import { getFormattedTime } from '../../../lib/cnaf'
import { initReducer, reducerFactory } from '../../../lib/historique'

const reducer = reducerFactory('Expérimentation Ardennes - CNAF - Bénéficiaire')
const devMode = process.env.NODE_ENV == 'development'

export default function Ardennes() {
  const [devFile, setDevFile] = useState(null)
  const [runs, dispatchRuns] = useReducer(reducer, [], initReducer)
  const [usersData, setUsersData] = useState(null);
  const [processedData, setProcessedData] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [fileSize, setFileSize] = useState(0);
  const [isLogged, setIsLogged] = useState(false);
  const [token, setToken] = useState({
          "tokenId": '',
          uid: '',
          client: ''
  });
  const [promises, setPromises] = useState({
    count: 0,
    size: 0
  });
  const RDV_URL = process.env.NEXT_PUBLIC_RDV_DEMO_URL;
  const path = '/users';
  const url = `${RDV_URL}/api/v1${path}`;


  const onLogin = (tokenId, uid, client) => {
    setToken({ ...token, tokenId: tokenId, uid: uid, client: client });
    setIsLogged(true);
  };

  // useEffect(() => {
  //   if(devFile) {
  //     fileHandler(devFile)
  //   }
  // }, [devFile])
  useEffect(() => {
    if (promises.size > 0 && promises.count == promises.size) {
      setUsersData(processedData);
      const outWorkbook = XLSX.utils.book_new();
      const outWorksheet = XLSX.utils.json_to_sheet(processedData);
      XLSX.utils.book_append_sheet(outWorkbook, outWorksheet, "DIVERGENCES");
      // XLSX.utils.book_append_sheet(outWorkbook, xls.Sheets[xls.SheetNames[1]], "GRAPHIQUE");
      // XLSX.utils.book_append_sheet(outWorkbook, xls.Sheets[xls.SheetNames[2]], "Selection COA");
      XLSX.writeFile(outWorkbook, `ardennes_rsa_${getFormattedTime()}.xlsx`)
    }
  }, [promises])

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
      const xls = XLSX.read(fileData, {type:'array'})
      /* Get first worksheet */
      const worksheet = xls.Sheets[xls.SheetNames[0]];
      // Limiter la capture aux colonnes A-T
      const range = XLSX.utils.decode_range(worksheet['!ref']);
      range.s.c = 0; // 0 == XLSX.utils.decode_col("A")
      range.e.c = 19; // 19 == XLSX.utils.decode_col("T")
      const new_range = XLSX.utils.encode_range(range);
      /* Convert array to json*/
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { blankrows: false, raw: false, defval: null, range: new_range });
      const test = jsonData.map(userData => {
        if (userData["Compte rdv"] != "O") {
          const user = { first_name: userData["PRENOM"].charAt(0).toUpperCase() + userData["PRENOM"].slice(1).toLowerCase(), last_name: userData["NOM"].charAt(0).toUpperCase() + userData["NOM"].slice(1).toLowerCase(), email: userData["MAIL"], phone_number: userData["TELEPHONE"].replace(/\s+/g, ''), organisation_ids: [1] };
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
          // Compter le nombre de comptes créés et le nombre de fail ? Et logger pour les fails pour indiquer qui a fail ?

          .then((response) => {
            if (response.status === 200) {
              userData["Compte rdv"] = "O";
              userData["RDV pris"] = "N";
            } else {
              userData["Compte rdv"] = "N";
              userData["RDV pris"] = "N";
            }
            setProcessedData([...processedData, userData]);
            setPromises({ count: promises.count + 1, size: jsonData.length})
            return userData;
          })
          // Récupérer le token d'invitation
          // Envoyer le mail à la place d'Isabelle
        } else {
          if (userData["RDV pris"] != "O") {
            // Vérifier si l'utilisateur a pris un rdv
            // si oui => userData["RDV pris"] = "O";
            // si non => userData["RDV pris"] = "N";
          }
          userData["RDV pris"] = "N";
          setProcessedData([...processedData, userData]);
          setPromises({ count: promises.count + 1, size: jsonData.length})
          return userData;
        }
      })

      setIsPending(false);

      dispatchRuns({
        type: 'append',
        item: {
          timestamp: (new Date()).toISOString().slice(0, 19),
          duration: (new Date()) - start_time,
          filename: file.name,
          fileSize: file.size,
        }
      })
    }
    reader.readAsArrayBuffer(file);
  }

  return (
    <Layout className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Expérimentation Ardennes
        </h1>

        {!isLogged &&
          <div id="create-forms" className={styles.create}>
            <LoginForm onLogin={onLogin} />
          </div>
        }

        { isLogged && <>
          <FileHandler fileHandler={fileHandler} isPending={isPending} fileSize={fileSize} />

          { usersData && <>
            <h2 className={styles.subtitle}>
              Bénéficiaires RSA
            </h2>

            { usersData.length == 0 &&
              <p className={styles.description}>Aucun bénéficiaire dans le fichier</p>
            }
            { usersData.length > 0 &&
              <table>
                <thead>
                  <tr>
                    <th rowSpan="2">Nom</th>
                    <th rowSpan="2">Prénom</th>
                    <th rowSpan="2">Mail</th>
                    <th rowSpan="2">Téléphone</th>
                  </tr>
                  <tr></tr>
                </thead>
                <tbody>
                  {usersData.map((user, index) => (<tr key={index}>
                    <td>{user["NOM"]}</td>
                    <td>{user["PRENOM"]}</td>
                    <td>{user["MAIL"]}</td>
                    <td>{user["TELEPHONE"]}</td>
                  </tr>
                ))}
                </tbody>
              </table>
            }
          </>}

          <Footer
            subject="Expérimentation Ardennes"
            pourquoi="Quel est l'objectif de cette expérimentation&nbsp;?"
            text={<>
              <p className={styles.text}>Faciliter le travail des agents du département et tester l'utilisation de l'application RDV-Solidarités pour accélérer la prise du premier rendez-vous d'orientation.</p>
            </>}
          />
        </>}
      </main>
    </Layout>
  )
}
