import Application from "./Application";

export default class Applicant {
  constructor(dom) {
    this.dom = dom;
  }

  get lastName() {
    return this.dom.getElementsByTagName("NOM")[0]?.innerHTML;
  }

  get firstName() {
    return this.dom.getElementsByTagName("PRENOM")[0]?.innerHTML;
  }

  get role() {
    return this.dom.getElementsByTagName("ROLEPERS")[0]?.innerHTML;
  }

  get topEntrant() {
    return this.dom.getElementsByTagName("TOPPERSENTDRODEVORSA")[0]?.innerHTML;
  }

  get topDroitsEtDevoirs() {
    return this.dom.getElementsByTagName("TOPPERSDRODEVORSA")[0]?.innerHTML;
  }

  get topFoyerDroitsEtDevoirs() {
    return this.dom.getElementsByTagName("TOPFOYDRODEVORSA")[0]?.innerHTML;
  }

  get socioProfessionalData() {
    return this.dom.getElementsByTagName("DonneesSocioProfessionnelles")[0]?.innerHTML;
  }

  get application() {
    return new Application(this.dom.parentNode);
  }

  get rsaApplicationNumber() {
    return this.application.rsaApplicationNumber;
  }

  get emailAddress() {
    return this.application.emailAddress;
  }

  get applicationStatusCode() {
    return this.application.statusCode;
  }

  get applicationSuspensionMotive() {
    return this.application.suspensionMotive;
  }

  get phoneNumber() {
    return this.application.phoneNumber;
  }

  get socialSecurityNumber() {
    return this.application.socialSecurityNumber;
  }

  get personalData() {
    return {
      rsaApplicationNumber: this.rsaApplicationNumber,
      socialSecurityNumber: this.socialSecurityNumber,
      lastName: this.lastName,
      firstName: this.firstName,
      role: this.role,
      ...(this.phoneNumber && { phoneNumber: this.phoneNumber }),
      ...(this.emailAddress && { emailAddress: this.emailAddress }),
    };
  }

  isTopEntrant() {
    return this.topEntrant === "1";
  }

  eligibleAsNew() {
    return (
      this.application.eligibleAsNew() &&
      (this.topDroitsEtDevoirs === "1" || this.topFoyerDroitsEtDevoirs === "1")
    );
  }
}
