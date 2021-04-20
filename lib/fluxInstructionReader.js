const APPLICATION_ROLES = {
  DEM: "Demandeur",
  CJT: "Conjoint",
  ENF: "Enfant",
  AUT: "Autre",
};

export const retrieveDataFromFluxInstruction = fileContent => {
  const parser = new DOMParser();
  const dom = parser.parseFromString(fileContent, "application/xml");

  const desc = dom.getElementsByTagName("IdentificationFlux")[0];
  const frequency = desc.getElementsByTagName("TYPEFLUX")[0].innerHTML;
  const type = desc.getElementsByTagName("NATFLUX")[0].innerHTML;
  const dt = desc.getElementsByTagName("DTCREAFLUX")[0].innerHTML;
  const time = desc.getElementsByTagName("HEUCREAFLUX")[0].innerHTML;

  const infosRSA = new Array(...dom.getElementsByTagName("InfoDemandeRSA"));
  const withEmail = infosRSA.filter(i => i.getElementsByTagName("ADRELEC").length);
  const withUsableEmail = infosRSA.filter(i => {
    const ok = i.getElementsByTagName("AUTORUTIADRELEC")[0];
    return i.getElementsByTagName("ADRELEC").length && ok && ok.innerHTML == "A";
  });
  const withForbiddenEmailUsage = infosRSA.filter(i => {
    const ok = i.getElementsByTagName("AUTORUTIADRELEC")[0];
    return i.getElementsByTagName("ADRELEC").length && ok && ok.innerHTML == "R";
  });
  const withoutEmailUsage = infosRSA.filter(i => {
    const ok = i.getElementsByTagName("AUTORUTIADRELEC")[0];
    return i.getElementsByTagName("ADRELEC").length && ok && ok.innerHTML == "I";
  });

  const withPhone = infosRSA.filter(i => i.getElementsByTagName("NUMTEL").length);
  const withUsablePhone = infosRSA.filter(i => {
    const ok = i.getElementsByTagName("AUTORUTITEL")[0];
    return i.getElementsByTagName("NUMTEL").length && ok && ok.innerHTML == "A";
  });
  const withForbiddenPhoneUsage = infosRSA.filter(i => {
    const ok = i.getElementsByTagName("AUTORUTITEL")[0];
    return i.getElementsByTagName("NUMTEL").length && ok && ok.innerHTML == "R";
  });
  const withoutPhoneUsage = infosRSA.filter(i => {
    const ok = i.getElementsByTagName("AUTORUTITEL")[0];
    return i.getElementsByTagName("NUMTEL").length && ok && ok.innerHTML == "I";
  });

  const withDSP = infosRSA.filter(
    i => i.getElementsByTagName("DonneesSocioProfessionnelles").length
  );

  return {
    fileDatetime: `${dt}-${time}`,
    frequency,
    type,
    // WIP: OK sur Firefox KO sur Chrome
    error: dom.activeElement && dom.activeElement.nodeName == "parsererror",
    total: infosRSA.length,
    email: {
      total: withEmail.length,
      withAutorisation: withUsableEmail.length,
      withExplicitRefusal: withForbiddenEmailUsage.length,
      withoutAutorisationDetails: withoutEmailUsage.length,
    },
    phone: {
      total: withPhone.length,
      withAutorisation: withUsableEmail.length,
      withExplicitRefusal: withForbiddenEmailUsage.length,
      withoutAutorisationDetails: withoutEmailUsage.length,
    },
    withDSP: withDSP.length,
    applicantsPersonalData: retrieveApplicantsPersonalData(infosRSA),
  };
};

const retrieveApplicantsPersonalData = infosRSA => {
  const applicantsPersonalData = [];

  infosRSA.forEach(info => {
    // <InfoDemandeRSA> level
    const rsaApplicationNumber = info.getElementsByTagName("NUMDEMRSA")[0]?.innerHTML;

    const mailAddress = info.getElementsByTagName("ADRELEC")[0]?.innerHTML;
    const phoneNumber = info.getElementsByTagName("NUMTEL")[0]?.innerHTML;
    const socialSecurityNumber = info.getElementsByTagName("NIR")[0]?.innerHTML;

    // There might be several applicants in one application
    const applicants = new Array(...info.getElementsByTagName("Personne"));

    applicants.forEach(applicant => {
      // <InfoDemandeRSA><Personne> level
      const lastName = applicant.getElementsByTagName("NOM")[0]?.innerHTML;
      const firstName = applicant.getElementsByTagName("PRENOM")[0]?.innerHTML;
      const role = APPLICATION_ROLES[applicant.getElementsByTagName("ROLEPERS")[0]?.innerHTML];

      applicantsPersonalData.push({
        rsaApplicationNumber,
        socialSecurityNumber,
        lastName,
        firstName,
        role,
        mailAddress,
        phoneNumber,
      });
    });
  });

  return applicantsPersonalData;
};
