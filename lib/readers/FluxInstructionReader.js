import BaseFluxReader from "./BaseFluxReader";
import { APPLICATION_ROLES } from "../cnafGlossary";

export default class FluxInstructionReader extends BaseFluxReader {
  get applications() {
    return new Array(...this.dom.getElementsByTagName("InfoDemandeRSA"));
  }

  get applicationsCount() {
    return this.dom.getElementsByTagName("InfoDemandeRSA").length;
  }

  get withEmail() {
    return this.applications.filter(
      application => application.getElementsByTagName("ADRELEC").length
    );
  }

  filterApplicationsByEmailAuthorizationLevel(authorizationLevel) {
    return this.applications.filter(application => {
      const authorization = application.getElementsByTagName("AUTORUTIADRELEC")[0];
      const withEmail = application.getElementsByTagName("ADRELEC").length;
      return withEmail && authorization && authorization.innerHTML == authorizationLevel;
    });
  }

  get withUsableEmail() {
    return this.filterApplicationsByEmailAuthorizationLevel("A");
  }

  get withForbiddenEmailUsage() {
    return this.filterApplicationsByEmailAuthorizationLevel("R");
  }

  get withoutEmailUsage() {
    return this.filterApplicationsByEmailAuthorizationLevel("I");
  }

  get withPhone() {
    return this.applications.filter(
      application => application.getElementsByTagName("NUMTEL").length
    );
  }

  filterApplicationsByPhoneAuthorizationLevel(authorizationLevel) {
    return this.applications.filter(application => {
      const authorization = application.getElementsByTagName("AUTORUTITEL")[0];
      const withPhone = application.getElementsByTagName("NUMTEL").length;
      return withPhone && authorization && authorization.innerHTML == authorizationLevel;
    });
  }

  get withUsablePhone() {
    return this.filterApplicationsByPhoneAuthorizationLevel("A");
  }

  get withForbiddenPhoneUsage() {
    return this.filterApplicationsByPhoneAuthorizationLevel("R");
  }

  get withoutPhoneUsage() {
    return this.filterApplicationsByPhoneAuthorizationLevel("I");
  }

  get withDSP() {
    return this.applications.filter(
      application => application.getElementsByTagName("DonneesSocioProfessionnelles").length
    );
  }

  get applicantsPersonalData() {
    return this.applicants.map(applicant => {
      // <Personne> level
      const lastName = applicant.getElementsByTagName("NOM")[0]?.innerHTML;
      const firstName = applicant.getElementsByTagName("PRENOM")[0]?.innerHTML;
      const role = APPLICATION_ROLES[applicant.getElementsByTagName("ROLEPERS")[0]?.innerHTML];

      // <InfoDemandeRSA> level
      const rsaApplicationNumber = applicant.parentNode.getElementsByTagName("NUMDEMRSA")[0]
        ?.innerHTML;

      const mailAddress = applicant.parentNode.getElementsByTagName("ADRELEC")[0]?.innerHTML;
      const phoneNumber = applicant.parentNode.getElementsByTagName("NUMTEL")[0]?.innerHTML;
      const socialSecurityNumber = applicant.parentNode.getElementsByTagName("NIR")[0]?.innerHTML;

      return {
        rsaApplicationNumber,
        socialSecurityNumber,
        lastName,
        firstName,
        role,
        mailAddress,
        phoneNumber,
      };
    });
  }
}
