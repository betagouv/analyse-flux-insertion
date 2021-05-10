import Applicant from "./Applicant";

export default class BaseFlux {
  constructor(fileContent) {
    const parser = new DOMParser();
    this.dom = parser.parseFromString(fileContent, "application/xml");
  }

  get desc() {
    return this.dom.getElementsByTagName("IdentificationFlux")[0];
  }

  get applicants() {
    return [...this.dom.getElementsByTagName("Personne")].map(applicantDom => {
      return new Applicant(applicantDom);
    });
  }

  // { 123123-Dupont-Jean-DEM: { firstName: ... }, ... }
  get applicantsObject() {
    return this.applicants.reduce((applicantsObject, applicant) => {
      applicantsObject[applicant.id] = applicant;
      return applicantsObject;
    }, {});
  }
  get applicantsCount() {
    return this.applicants.length;
  }

  get applicationsCount() {
    return this.applications.length;
  }

  get frequency() {
    return this.desc.getElementsByTagName("TYPEFLUX")[0].innerHTML;
  }

  get origin() {
    return this.desc.getElementsByTagName("NATFLUX")[0].innerHTML;
  }

  get fileDatetime() {
    return `${this.creationDate}-${this.creationTime}`;
  }

  get creationDate() {
    return this.desc.getElementsByTagName("DTCREAFLUX")[0].innerHTML;
  }

  get creationTime() {
    return this.desc.getElementsByTagName("HEUCREAFLUX")[0].innerHTML;
  }

  get parseError() {
    return this.dom.activeElement && this.dom.activeElement.nodeName == "parsererror";
  }
}
