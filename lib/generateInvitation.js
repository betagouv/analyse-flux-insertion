import { getFrenchFormatDateString } from "./dates"
import { appFetch } from "../lib/appFetch"


export async function generateInvitation(userId, userIndex, token, usersData, updateUsersData) {
  const RDV_SOLIDARITES_URL = process.env.NEXT_PUBLIC_RDV_SOLIDARITES_DEMO_URL;
  const userUrl = RDV_SOLIDARITES_URL + "api/v1/users";
  const invitationUrl = userUrl + `/${userId}/invite`;

  const result = await appFetch(invitationUrl, token);

  if (result.invitation_url) {
    let newUsersData = [...usersData];
    newUsersData[userIndex]["Invitation"] = result.invitation_url;
    newUsersData[userIndex]["Date d'invitation"] = getFrenchFormatDateString(new Date());
    updateUsersData(newUsersData);
  }
}


