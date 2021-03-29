// Ca affiche la liste des personnes (avec des informations) et notamment "personne dans rdv-S ou pas", "est-ce qu’il y a rdv sur rdv-S"
// Simplifier le travail d'Isabelle. More details to come...

import {useCallback, useEffect, useState, useReducer} from 'react'
import * as XLSX from 'xlsx';

// import Admin from '../../../components/admin'
// import ResponsiveCalendar from '../../../components/chart'
import Layout from '../../../components/layout'
import Mailer from '../../../components/mailer'
import PendingMessage from '../../../components/pending'
import styles from '../../../styles/Home.module.css'

import { getFormattedTime } from '../../../lib/cnaf'
import { initReducer, reducerFactory } from '../../../lib/historique'

const reducer = reducerFactory('Expérimentation Ardennes - CNAF - Bénéficiaire')
const devMode = process.env.NODE_ENV == 'development'

export default function Ardennes() {
  const [devFile, setDevFile] = useState(null)
  const [parsedData, setParsedData] = useState([]);
  const [runs, dispatchRuns] = useReducer(reducer, [], initReducer)
  const [isPending, setIsPending] = useState(false);
  const [fileSize, setFileSize] = useState(0);

  useEffect(() => {
    if(devFile) {
      fileHandler(devFile)
    }
  }, [devFile])

  const selectHandler = useCallback((event) => {
    for (var i = 0; i<event.target.files.length; i++) {
      fileHandler(event.target.files[i])
    }
    event.target.value = ''
  })

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
      const dataParse = XLSX.utils.sheet_to_json(worksheet, { blankrows: false, raw: false, defval: null, range: new_range });

      setParsedData(
        dataParse.map((user, index) => {
          if (user["Compte rdv"] != "O") {
            // (pour plus tard) Appeller l'API pour vérifier la présence de l'utilisateur
            // Créer l'utilisateur dans RDV Solidarités
            // Vérifier succès, then
            user["Compte rdv"] = "O";
            user["RDV pris"] = "N";
            return user;
            // Récupérer le token d'invitation
            // Envoyer le mail à la place d'Isabelle
          } else if (user["RDV pris"] == "O") {
            // Vérifier si l'utilisateur a pris un rdv
            // si oui => user["RDV pris"] = "O";
            // si non => user["RDV pris"] = "N";
            return user;
          }
        })
      );

      const outWorkbook = XLSX.utils.book_new();
      const outWorksheet = XLSX.utils.json_to_sheet(parsedData);
      XLSX.utils.book_append_sheet(outWorkbook, outWorksheet, "DIVERGENCES");
      XLSX.utils.book_append_sheet(outWorkbook, xls.Sheets[xls.SheetNames[1]], "GRAPHIQUE");
      XLSX.utils.book_append_sheet(outWorkbook, xls.Sheets[xls.SheetNames[2]], "Selection COA");
      XLSX.writeFile(outWorkbook, `ardennes_rsa_${getFormattedTime()}.xlsx`)

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

        <p className={styles.description}>
          Glissez et déposez le fichier à analyser ou sélectionnez le.<br/>
          <input type="file" onChange={selectHandler} multiple/>
        </p>

        {isPending && <PendingMessage fileSize={fileSize}/>}

        <p className={styles.description}>
          Les opérations sont toutes réalisées sur votre ordinateur.<br/>
          Aucune donnée personnelle n'est transférée.
        </p>

        <p className={styles.description}>
          <a href="#pourquoi">Pourquoi un tel lecteur&nbsp;?</a>
        </p>

        { parsedData && (<>
          <h2 className={styles.subtitle}>
            Bénéficiaires RSA
          </h2>

          {parsedData.length == 0 &&
            <p className={styles.description}>Aucun bénéficiaire dans le fichier</p>
          }
          { parsedData.length > 0 &&
            <table>
              <thead>
                <tr>
                  <th rowSpan="2">Nom</th>
                  <th rowSpan="2">Prénom</th>
                  <th rowSpan="2">Mail</th>
                  <th rowSpan="2">Téléphone</th>
                </tr>
                <tr>
                </tr>
              </thead>
              <tbody>
                {parsedData.map((user, index) => (<tr key={index}>
                  <td>{user["NOM"]}</td>
                  <td>{user["PRENOM"]}</td>
                  <td>{user["MAIL"]}</td>
                  <td>{user["TELEPHONE"]}</td>
                </tr>
              ))}
              </tbody>
            </table>
          }
        </>)}

        <p className={styles.description}>
          Un problème, une question ? Contactez-nous à <Mailer subject="Expérimentation Ardennes">data.insertion@beta.gouv.fr</Mailer>
        </p>

        <h2 id="pourquoi" className={styles.subtitle}>
          Quel est l'objectif de cette expérimentation&nbsp;?
        </h2>

        <p className={styles.text}>
          Faciliter le travail des agents du département et tester l'utilisation de l'application RDV-Solidarités pour accélérer la prise du premier rendez-vous d'orientation.
        </p>

      </main>
    </Layout>
  )
}
