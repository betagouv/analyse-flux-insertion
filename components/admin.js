import {useCallback, useEffect, useState} from 'react'
import { fetchLog } from '../lib/admin'

export default function Admin({
  children,
  onRunRefresh,
  category
}) {
  const [admin, setAdmin] = useState(false)
  const [token, setToken] = useState(typeof(window) !== "undefined" && window.localStorage.getItem('token') || '')

  useEffect(() => {
    if (admin && token && category && onRunRefresh && fetchLog) {
      fetchLog(token, category)
      .then(data => {
        onRunRefresh(data)
      })
    }
  }, [admin, token])

  const handleAdminChange = useCallback(event => {
    setAdmin(event.target.checked)
    if (!event.target.checked) {
      onRunRefresh([])
    }
  })

  const handleTokenChange = useCallback(event => {
    setToken(event.target.value)
    window.localStorage.setItem('token', event.target.value)
  })

  const handleRemoveTokenClick = useCallback(event => {
    setToken("")
    setAdmin(false)
    window.localStorage.removeItem('token')
    if (onRunRefresh) {
      onRunRefresh([])
    }
  })
  return (
    <div style={{display: "flex", flexDirection: "row-reverse"}}>
      <label>
        <input onChange={handleAdminChange} type="checkbox" checked={admin}/>
        Admin <a target="_blank" rel="noopener" href="https://stats.data.gouv.fr/index.php?module=UsersManager&action=userSettings"><abbr title="Cliquez ici pour accéder à API Authentication Token sur Matomo">?</abbr></a>&nbsp;
      </label>
      { admin && (<>
        <input onChange={handleTokenChange} type="password" value={token}/>
        <button onClick={handleRemoveTokenClick}>Supprimer le token</button>
        </>
        )
      }
    </div>
  )
}
