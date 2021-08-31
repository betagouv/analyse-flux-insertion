import Applicant from "./Applicant";

/*
Valeurs :
"01" : Ressources trop élévées
"02" : Moins 25 ans sans enft/autre person. à charge
"03" : Activité non conforme
"04" : Titre de séjour non valide
"05" : RSA inférieur au seuil
"06" : Déclaration Trimestrielle Ressources non fournie
"09" : Résidence non conforme
"19" : Pas d'isolement
"31" : Prestation exclue affil partielle
"34" : Régime non conforme
"35" : Demande avantage vielliesse absent ou tardif
"36" : Titre de séjour absent
"44" : Hospitalisation
"70" : Action non engagée
"78" : Surface pondérée > plafond ou inconnue
"84" : Droit éteint
"85" : Pas d'allocataire
"97" : Bénéficiaire AAH réduite
"AB" : Allocataire absent du foyer
"CV"  : Attente décision PCG (le droit reste théorique jusqu'au retour)
"CG" : Application Sanction -> integré dans les ETATDOSRSA=2
"CZ" : Activité antérieure insuffisante
"DA" : Activité antérieure absente
"DB" : Etudiant rémunération insuff.
"DC" : Activité antérieure non conforme
*/
const REAL_ELIGIBLE_SUSPENSION_MOTIVES = ["05", "44", "70"]
const THEORICAL_ELIGIBLE_SUSPENSION_MOTIVES = ["01", "06", "35", "36"]
const ELIGIBLE_SUSPENSION_MOTIVES = REAL_ELIGIBLE_SUSPENSION_MOTIVES.concat(THEORICAL_ELIGIBLE_SUSPENSION_MOTIVES)

export default class Application {
  constructor(dom) {
    this.dom = dom;
  }

  get emailAddress() {
    return this.dom.getElementsByTagName("ADRELEC")[0]?.innerHTML;
  }

  get phoneNumber() {
    return this.dom.getElementsByTagName("NUMTEL")[0]?.innerHTML;
  }

  get rsaApplicationNumber() {
    return this.dom.getElementsByTagName("NUMDEMRSA")[0]?.innerHTML;
  }

  get phoneAuthorization() {
    return this.dom.getElementsByTagName("AUTORUTITEL")[0]?.innerHTML;
  }

  get emailAuthorization() {
    return this.dom.getElementsByTagName("AUTORUTIADRELEC")[0]?.innerHTML;
  }

  get date() {
    return this.dom.getElementsByTagName("DTDEMRSA")[0]?.innerHTML;
  }

  get statusCode() {
    return this.dom.getElementsByTagName("ETATDOSRSA")[0]?.innerHTML;
  }

  get suspensionMotive() {
    return this.dom.getElementsByTagName("MOTISUSVERSRSA")[0]?.innerHTML;
  }

  get applicants() {
    return [...this.dom.getElementsByTagName("Personne")].map(applicantDom => {
      return new Applicant(applicantDom);
    });
  }

  get topFoyerDroitsEtDevoirs() {
    return this.dom.getElementsByTagName("TOPFOYDRODEVORSA")[0]?.innerHTML;
  }

  withRights() {
    return (
      this.withDroitsOuvertsEtVersables() ||
      this.statusCode === "3" || // Droit ouvert mais suspendu
      (this.statusCode === "4" && // Droit ouvert mais suspendu (réel ou théorique)
        ELIGIBLE_SUSPENSION_MOTIVES.includes(this.suspensionMotive))
    );
  }

  withUsableEmail() {
    return this.emailAddress && this.emailAuthorization === "A";
  }

  withForbiddenEmailUsage() {
    return this.emailAddress && this.emailAuthorization === "R";
  }

  withoutEmailUsage() {
    return this.emailAddress && this.emailAuthorization === "I";
  }

  withUsablePhone() {
    return this.phoneNumber && this.phoneAuthorization === "A";
  }

  withForbiddenPhoneUsage() {
    return this.phoneNumber && this.phoneAuthorization === "R";
  }

  withoutPhoneUsage() {
    return this.phoneNumber && this.phoneAuthorization === "I";
  }

  withDroitsOuvertsEtVersables() {
    return this.statusCode === "2";
  }

  withDSP() {
    return this.applicants.some(applicant => applicant.socioProfessionalData);
  }
}
