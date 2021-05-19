import BaseFlux from "./BaseFlux";
import Application from "./Application";
import { retrieveAttributePartitionFrom } from "../lib/partitionsHelper";

export default class FluxBeneficiaire extends BaseFlux {
  get applications() {
    return [...this.dom.getElementsByTagName("InfosFoyerRSA")].map(applicationDom => {
      return new Application(applicationDom);
    });
  }

  get topEntrants() {
    return this.applicants.filter(applicant => {
      return applicant.isTopEntrant();
    });
  }

  get applicantsEligibleAsNew() {
    return this.applicants.filter(applicant => {
      return applicant.eligibleAsNew();
    });
  }

  get applicantsWithDroitsOuvertsEtVersables() {
    return this.applicants.filter(applicant => {
      return applicant.application.withDroitsOuvertsEtVersables();
    });
  }

  get partitions() {
    return {
      applicationsDatesPartition: this.applicationsDatesPartition,
      applicationsStatusCodesPartition: this.applicationsStatusCodesPartition,
      applicantsTopDroitsEtDevoirsPartition: this.applicantsTopDroitsEtDevoirsPartition,
      applicantsRolesPartition: this.applicantsRolesPartition,
      applicantsWithDroitsOuvertsEtVersablesTopDroitsEtDevoirsPartition: this
        .applicantsWithDroitsOuvertsEtVersablesTopDroitsEtDevoirsPartition,
    };
  }

  get applicationsDatesPartition() {
    return retrieveAttributePartitionFrom(this.applications, "date", false);
  }

  get applicationsStatusCodesPartition() {
    return retrieveAttributePartitionFrom(this.applications, "statusCode");
  }

  get applicantsTopDroitsEtDevoirsPartition() {
    return retrieveAttributePartitionFrom(this.applicants, "topDroitsEtDevoirs");
  }

  get applicantsRolesPartition() {
    return retrieveAttributePartitionFrom(this.applicants, "role");
  }

  get applicantsWithDroitsOuvertsEtVersablesTopDroitsEtDevoirsPartition() {
    return retrieveAttributePartitionFrom(
      this.applicantsWithDroitsOuvertsEtVersables,
      "topDroitsEtDevoirs"
    );
  }
}
