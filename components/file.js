import {useCallback} from 'react'

import styles from '../styles/Home.module.css'
import PendingMessage from './pending'

export default function FileHandler({
  fileHandler,
  isPending,
  fileSize
}) {
  const selectHandler = useCallback((event) => {
    for (var i = 0; i < event.target.files.length; i++) {
      fileHandler(event.target.files[i])
    }
    event.target.value = ''
  })

  return (<>
    <p className={styles.description}>
      Glissez et déposez le fichier CNAF à analyser ou sélectionnez le.<br/>
      <input type="file" onChange={selectHandler} multiple/>
    </p>

    {isPending && <PendingMessage fileSize={fileSize}/>}

    <p className={styles.description}>
      Les opérations sont toutes réalisées sur votre ordinateur.<br/>
      Aucune donnée personnelle n'est transférée.
    </p>
  </>)
}
