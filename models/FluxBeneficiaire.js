import BaseFlux from "./BaseFlux";
import Application from "./Application";

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

  // can be new but not top entrant
  get applicantsEligibleAsNew() {
    return this.applicants.filter(applicant => {
      return applicant.eligibleAsNew() && !applicant.isTopEntrant();
    });
  }

  get newApplicantsData() {
    return this.topEntrants.map(applicant => {
      return { ...applicant.personalData, isTopEntrant: applicant.isTopEntrant() };
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
    return this.retrieveAttributePartitionFrom(this.applications, "date", false);
  }

  get applicationsStatusCodesPartition() {
    return this.retrieveAttributePartitionFrom(this.applications, "statusCode");
  }

  get applicantsTopDroitsEtDevoirsPartition() {
    return this.retrieveAttributePartitionFrom(this.applicants, "topDroitsEtDevoirs");
  }

  get applicantsRolesPartition() {
    return this.retrieveAttributePartitionFrom(this.applicants, "role");
  }

  get applicantsWithDroitsOuvertsEtVersablesTopDroitsEtDevoirsPartition() {
    return this.retrieveAttributePartitionFrom(
      this.applicantsWithDroitsOuvertsEtVersables,
      "topDroitsEtDevoirs"
    );
  }

  retrieveAttributePartitionFrom(resources, attribute, withTotal = true) {
    return resources.reduce((partition, resource) => {
      if (resource[attribute] !== undefined) {
        partition[resource[attribute]] = (partition[resource[attribute]] || 0) + 1;
        if (withTotal) {
          partition["Total"] = (partition["Total"] || 0) + 1;
        }
      }
      return partition;
    }, {});
  }
}
