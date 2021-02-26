const nameMap = {
  "Test": "Instruction",
  "Test - CNAF - Instruction": "Instruction",
  "Test - CNAF - Bénéficiaire": "Bénéficiaire",
  "Test - Pole Emploi": "Pôle Emploi",
}

const MATOMO_URL = process.env.NEXT_PUBLIC_MATOMO_URL
const MATOMO_SITE_ID = process.env.NEXT_PUBLIC_MATOMO_SITE_ID

async function fetchLog(token, name) {
  const url = `${MATOMO_URL}/index.php?date=today&expanded=1&filter_limit=25&format=JSON&idSite=${MATOMO_SITE_ID}&method=Events.getCategory&module=API&period=month&segment=&token_auth=${token}`
  const response = await fetch(url)
  const json = await response.json()
  const events = [].concat(...json.filter(i => nameMap[i.label] == name).map(category => category.subtable))
  const data = events.map(e => JSON.parse(e.label)).map(item => {

    // Legacy typo management
    const timestamp = item.timestamp || item.timetamp
    return {
      seed: Math.random(),
      timestamp,
      email: {
        total: item.withEmail,
        withAutorisation: item.withAutorisation,
        withExplicitRefusal: item.withExplicitRefusal,
        withoutAutorisationDetails: item.withoutAutorisationDetails,
      },
      cDate : new Date(timestamp),
      phone: {},
      ...item
    }
  })

  data.sort((a,b) => a.cDate - b.cDate)
  return data
}

exports.fetchLog = fetchLog
