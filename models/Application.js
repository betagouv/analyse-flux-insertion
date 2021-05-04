import Applicant from "./Applicant";

const ELIGIBLE_SUSPENSION_MOTIVES = ["01", "05", "06", "35", "36"];

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

  get socialSecurityNumber() {
    return this.dom.getElementsByTagName("NIR")[0]?.innerHTML;
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

  eligibleAsNew() {
    return (
      this.withDroitsOuvertsEtVersables() ||
      (this.withDroitsOuvertsSuspendu() &&
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

  withDroitsOuvertsSuspendu() {
    return this.statusCode === "4";
  }

  withDSP() {
    return this.applicants.some(applicant => applicant.socioProfessionalData);
  }
}
