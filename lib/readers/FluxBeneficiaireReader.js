import BaseFluxReader from "./BaseFluxReader";
import { APPLICATION_ROLES } from "../cnafGlossary";

export default class FluxBeneficiaireReader extends BaseFluxReader {
  get applicationsCount() {
    return this.dom.getElementsByTagName("InfosFoyerRSA").length;
  }

  get applications() {
    return new Array(...this.dom.getElementsByTagName("InfosFoyerRSA"));
  }

  get newApplicants() {
    return this.applicants.filter(applicant => {
      return applicant.getElementsByTagName("TOPPERSENTDRODEVORSA")[0]?.innerHTML == "1";
    });
  }

  get newApplicantsPersonalData() {
    return this.newApplicants.map(applicant => {
      const lastName = applicant.getElementsByTagName("NOM")[0]?.innerHTML;
      const firstName = applicant.getElementsByTagName("PRENOM")[0]?.innerHTML;
      const role = APPLICATION_ROLES[applicant.getElementsByTagName("ROLEPERS")[0]?.innerHTML];
      const rsaApplicationNumber = applicant.parentNode.getElementsByTagName("NUMDEMRSA")[0]
        ?.innerHTML;
      const socialSecurityNumber = applicant.parentNode.getElementsByTagName("NIR")[0]?.innerHTML;

      return {
        rsaApplicationNumber,
        socialSecurityNumber,
        lastName,
        firstName,
        role,
      };
    });
  }

  static get initialPartitions() {
    return {
      applicationDatesPartition: {},
      droitsPartition: {},
      devoirsPartition: {},
      droitsEtDevoirsPartition: {},
      applicantsRolesPartition: {},
      applicantsCount: 0,
      applicationsCount: 0,
    };
  }

  retrievePartitions() {
    return this.updatePartitions(FluxBeneficiaireReader.initialPartitions);
  }

  updatePartitions(partitionsToUpdate) {
    return this.applications.reduce((partitions, application) => {
      partitions.applicationsCount += 1;
      this.updatePartition(
        partitions.applicationDatesPartition,
        application.getElementsByTagName("DTDEMRSA"),
        false
      );
      this.updatePartition(
        partitions.droitsPartition,
        application.getElementsByTagName("ETATDOSRSA")
      );
      this.updatePartition(
        partitions.devoirsPartition,
        application.getElementsByTagName("TOPPERSDRODEVORSA")
      );

      const applicants = new Array(...application.getElementsByTagName("Personne"));

      partitions.applicantsCount += applicants.length;

      applicants.forEach(applicant => {
        this.updatePartition(
          partitions.applicantsRolesPartition,
          applicant.getElementsByTagName("ROLEPERS")
        );
        if (application.getElementsByTagName("ETATDOSRSA")[0]?.innerHTML == "2") {
          this.updatePartition(
            partitions.droitsEtDevoirsPartition,
            applicant.getElementsByTagName("TOPPERSDRODEVORSA")
          );
        }
      });
      return partitions;
    }, partitionsToUpdate);
  }

  updatePartition(partition, value, withTotal = true) {
    if (!value[0]) {
      return;
    }

    partition[value[0].innerHTML] = (partition[value[0].innerHTML] || 0) + 1;

    if (withTotal) {
      partition["Total"] = (partition["Total"] || 0) + 1;
    }
    return partition;
  }
}
