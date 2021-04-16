import { getFrenchFromatDateString } from "./dates"
import { fetchUrl } from "../lib/fetchUrl"

const RDV_SOLIDARITES_URL = process.env.NEXT_PUBLIC_RDV_SOLIDARITES_DEMO_URL;
const userUrl = RDV_SOLIDARITES_URL + process.env.NEXT_PUBLIC_RDV_SOLIDARITES_USER_PATH;

export async function checkUserInvitationStatus(user, userIndex, token, usersData, updateUsersData) {

  const getUserUrl = userUrl + `/${user["ID RDV"]}`;
  const result = await fetchUrl(getUserUrl, token);

  let newUsersData = [...usersData];

  if (result.user.invitation_created_at) {
    let invitation_date = result.user.invitation_created_at // Date au format : 2021-04-15 14:53:56 +0200
      .substring(0, 10); // Récupérer les 10 premiers chiffres (la date)
    invitation_date = new Date(invitation_date) // Créer une date JS
    newUsersData[userIndex]["Date d'invitation"] = getFrenchFromatDateString(invitation_date);
  }
  if (result.user.invitation_accepted_at) {
    let inscription_date = result.user.invitation_accepted_at // Date au format : 2021-04-15 14:53:56 +0200
      .substring(0, 10); // Récupérer les 10 premiers chiffres (la date)
    inscription_date = new Date(inscription_date) // Créer une date JS
    newUsersData[userIndex]["Date d'inscription"] = getFrenchFromatDateString(inscription_date);
  }

  updateUsersData(newUsersData);
}
