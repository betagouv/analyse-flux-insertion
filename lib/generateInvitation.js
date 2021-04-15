import { getFrenchFromatDateString } from "./dates"
import { fetchUrl } from "../lib/fetchUrl"


export async function generateInvitation(user, userIndex, token, usersData, updateUsersData) {
const RDV_SOLIDARITES_URL = process.env.NEXT_PUBLIC_RDV_SOLIDARITES_DEMO_URL;
const userUrl = RDV_SOLIDARITES_URL + process.env.NEXT_PUBLIC_RDV_SOLIDARITES_USER_PATH;
  const invitationUrl = userUrl + `/${user["ID RDV"]}/invite`;

  const result = await fetchUrl(invitationUrl, token);

  if (result.invitation_url) {
    let newUsersData = [...usersData];
    newUsersData[userIndex]["Invitation"] = result.invitation_url;
    newUsersData[userIndex]["Date d'invitation"] = getFrenchFromatDateString(new Date());
    updateUsersData(newUsersData);
  }
}


