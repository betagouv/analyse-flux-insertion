import BaseFlux from "./BaseFlux";
import Application from "./Application";
import Applicant from "./Applicant";
import { retrieveAttributePartitionFrom } from "../lib/partitionsHelper";

export default class FluxInstruction extends BaseFlux {
  get applications() {
    return [...this.dom.getElementsByTagName("InfoDemandeRSA")].map(applicationDom => {
      return new Application(applicationDom);
    });
  }

  get applicationsWithEmail() {
    return this.applications.filter(application => application.emailAddress);
  }

  get applicationsWithUsableEmail() {
    return this.applications.filter(application => application.withUsableEmail());
  }

  get applicationsWithForbiddenEmailUsage() {
    return this.applications.filter(application => application.withForbiddenEmailUsage());
  }

  get applicationsWithoutEmailUsage() {
    return this.applications.filter(application => application.withoutEmailUsage());
  }

  get applicatonsWithPhone() {
    return this.applications.filter(application => application.phoneNumber);
  }

  get applicationsWithUsablePhone() {
    return this.applications.filter(application => application.withUsablePhone());
  }

  get applicationsWithForbiddenPhoneUsage() {
    return this.applications.filter(application => application.withForbiddenPhoneUsage());
  }

  get applicationsWithoutPhoneUsage() {
    return this.applications.filter(application => application.withoutPhoneUsage());
  }

  get applicationsWithDSP() {
    return this.applications.filter(application => application.withDSP());
  }

  get applicantsWithDSP() {
    return this.applicants.filter(applicant => applicant.socioProfessionalData);
  }

  get applicantsPersonalData() {
    return this.applicants.map(applicant => applicant.personalData());
  }

  get nationalitiesPartition() {
    return retrieveAttributePartitionFrom(this.applicants, "nationality", false);
  }

  get dspRolesPartition() {
    return retrieveAttributePartitionFrom(this.applicantsWithDSP, "role");
  }

  get activitiesPartition() {
    return retrieveAttributePartitionFrom(this.applicants, "activity", false);
  }
}
