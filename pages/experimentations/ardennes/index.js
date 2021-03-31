import { useEffect, useState, useReducer } from 'react'
import * as XLSX from 'xlsx';

import Layout from '../../../components/layout'
import FileHandler from '../../../components/file'
import Footer from '../../../components/footer'
import styles from '../../../styles/Home.module.css'

import { initReducer, reducerFactory } from '../../../lib/historique'

const reducer = reducerFactory('Expérimentation Ardennes - CNAF - Bénéficiaire')
const devMode = process.env.NODE_ENV == 'development'

export default function Ardennes() {
  const [devFile, setDevFile] = useState(null)
  const [runs, dispatchRuns] = useReducer(reducer, [], initReducer)
  const [usersData, setUsersData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [fileSize, setFileSize] = useState(0);

  // useEffect(() => {
  //   if(devFile) {
  //     fileHandler(devFile)
  //   }
  // }, [devFile])

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
      const fileLength = jsonData.length;

      const processedData = jsonData.map(userData => { return userData })
      setUsersData(processedData);
      setIsPending(false);

      dispatchRuns({
        type: 'append',
        item: {
          timestamp: (new Date()).toISOString().slice(0, 19),
          duration: (new Date()) - start_time,
          filename: file.name,
          fileSize: file.size,
          fileLines: fileLength
        }
      })
    }
    reader.readAsArrayBuffer(file);
  }

  return (
    <Layout className={styles.container} fileHandler={FileHandler}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Expérimentation Ardennes
        </h1>

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
                  <th rowSpan="2">RDV-Solidarités</th>
                </tr>
                <tr></tr>
              </thead>
              <tbody>
                {usersData.map((user, index) => (<tr key={index}>
                  <td>{user["NOM"]}</td>
                  <td>{user["PRENOM"]}</td>
                  <td>{user["MAIL"]}</td>
                  <td>{user["TELEPHONE"]}</td>
                  <td className={styles.center}><button onClick={() => {alert("Fonctionnalité à venir !")}} >Créer un compte</button></td>
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
      </main>
    </Layout>
  )
}
