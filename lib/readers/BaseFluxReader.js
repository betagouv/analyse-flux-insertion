export default class BaseFluxReader {
  constructor(fileContent) {
    const parser = new DOMParser();
    this.dom = parser.parseFromString(fileContent, "application/xml");
    this.desc = this.dom.getElementsByTagName("IdentificationFlux")[0];
  }

  get applicants() {
    return new Array(...this.dom.getElementsByTagName("Personne"));
  }

  get applicantsCount() {
    return this.dom.getElementsByTagName("Personne").length;
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
