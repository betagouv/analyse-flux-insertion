import { appFetch } from "../lib/appFetch"
import { stringToDate } from "../lib/dates"
import { generateInvitation } from '../lib/generateInvitation'
import { checkUserInvitationStatus } from '../lib/checkUserInvitationStatus'

export default function CreateUserButton({
    token,
  updateUsersData,
  usersData,
  user,
  index
}) {
  const RDV_SOLIDARITES_URL = process.env.NEXT_PUBLIC_RDV_SOLIDARITES_DEMO_URL;
  const userUrl = RDV_SOLIDARITES_URL + "api/v1/users";

  const createUser = async function(userData, userIndex) {

    const address = userData["ADRESSE"] + " - " + userData["CODE\r\nPOSTAL"] + " " + userData["VILLE"]
    const user = {
      first_name: userData["PRENOM"],
      last_name: userData["NOM"],
      email: userData["MAIL"],
      phone_number: userData["TELEPHONE"].replace(/\s+/g, ""),
      birth_date: stringToDate(userData["DATE DE\r\nNAISSANCE"]),
      address: address,
      caisse_affiliation: "caf",
      affiliation_number: userData["N°CAF"],
      organisation_ids: [process.env.NEXT_PUBLIC_ORGANISATION_ID_DEMO],
    };

    const result = await appFetch(userUrl, token, "POST", JSON.stringify(user));

    let newUsersData = [...usersData];
    if (result.user) {
      newUsersData[userIndex]["ID RDV"] = result.user.id;
      updateUsersData(newUsersData);
      generateInvitation(newUsersData[userIndex], userIndex, token, usersData, updateUsersData);
    } else if (result.errors && result.errors.email && result.errors.email[0].error === "taken") {
      newUsersData[userIndex]["ID RDV"] = result.errors.email[0].id;
      updateUsersData(newUsersData);
      checkUserInvitationStatus(newUsersData[userIndex], userIndex, token, usersData, updateUsersData);
      alert("Un compte associé à cet email existe déjà");
    } else if (result.errors && result.errors.first_name && result.errors.first_name[0].error === "déjà utilisé") {
      alert("La création de ce compte a échoué. L'utilisateur semble déjà exister mais n'a pas pu être récupéré.");
    } else if (result.errors.email && result.errors.email[0].error === "invalid") {
      alert("L'adresse mail n'est pas valide");
    } else if (result.errors && result.errors[0]) {
      alert(result.errors[0]);
    }
  };

  return (
    <button onClick={() => createUser(user, index)}>
      Créer un compte
    </button>
  );
}
