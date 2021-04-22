import BaseFluxReader from "./BaseFluxReader";
import { APPLICATION_ROLES } from "../cnafGlossary";

export default class FluxBeneficiaireReader extends BaseFluxReader {
  get applicationsCount() {
    return this.dom.getElementsByTagName("InfosFoyerRSA").length;
  }

  retrieveApplicant(index) {
    return this.dom.getElementsByTagName("Personne")[index];
  }

  retrieveApplication(index) {
    return this.dom.getElementsByTagName("InfosFoyerRSA")[index];
  }

  get newApplicantsPersonalData() {
    const newApplicantsPersonalData = [];

    for (let i = 0; i < this.applicantsCount; i++) {
      const applicant = this.retrieveApplicant(i);

      // TOPPERSDRODEVORSA == "1" <=> New applicant
      if (applicant.getElementsByTagName("TOPPERSDRODEVORSA")[0]?.innerHTML == "1") {
        const lastName = applicant.getElementsByTagName("NOM")[0]?.innerHTML;
        const firstName = applicant.getElementsByTagName("PRENOM")[0]?.innerHTML;
        const role = APPLICATION_ROLES[applicant.getElementsByTagName("ROLEPERS")[0]?.innerHTML];
        const rsaApplicationNumber = applicant.parentNode.getElementsByTagName("NUMDEMRSA")[0]
          ?.innerHTML;
        const socialSecurityNumber = applicant.parentNode.getElementsByTagName("NIR")[0]?.innerHTML;

        newApplicantsPersonalData.push({
          rsaApplicationNumber,
          socialSecurityNumber,
          lastName,
          firstName,
          role,
        });
      }
    }

    return newApplicantsPersonalData;
  }

  retrievePartitions() {
    const [
      applicationDatesPartition,
      droitsPartition,
      devoirsPartition,
      droitsEtDevoirsPartition,
    ] = [{}, {}, {}, {}];

    for (let i = 0; i < this.applicationsCount; i++) {
      const application = this.retrieveApplication(i);
      const applicationDate = application.getElementsByTagName("DTDEMRSA")[0].innerHTML;
      applicationDatesPartition[applicationDate] =
        (applicationDatesPartition[applicationDate] || 0) + 1;
      this.updatePartition(droitsPartition, application.getElementsByTagName("ETATDOSRSA"));
      this.updatePartition(devoirsPartition, application.getElementsByTagName("TOPPERSDRODEVORSA"));

      const applicants = application.getElementsByTagName("Personne");
      [...applicants].forEach(applicant => {
        if (applicant.getElementsByTagName("ETATDOSRSA")[0]?.innerHTML == "2") {
          this.updatePartition(
            droitsEtDevoirsPartition,
            applicant.getElementsByTagName("TOPPERSDRODEVORSA")[0].innerHTML
          );
        }
      });
    }

    return {
      applicationDatesPartition,
      droitsPartition,
      devoirsPartition,
      droitsEtDevoirsPartition,
    };
  }

  updatePartition(accum, value) {
    if (value[0]) {
      accum[value[0].innerHTML] = (accum[value[0].innerHTML] || 0) + 1;

      accum["Total"] = (accum["Total"] || 0) + 1;
    }
    return accum;
  }
}
