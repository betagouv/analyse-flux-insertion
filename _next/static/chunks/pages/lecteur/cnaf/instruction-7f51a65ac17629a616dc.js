_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[20],{"17LQ":function(t,e,n){var i=n("o0o1"),a=n("lSNA"),r=n("RIqP"),c=n("yXPU");function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var l={Test:"Instruction","Test - CNAF - Instruction":"Instruction","Test - CNAF - B\xe9n\xe9ficiaire":"B\xe9n\xe9ficiaire","Test - Pole Emploi":"P\xf4le Emploi"},u="https://stats.data.gouv.fr";function p(){return(p=c(i.mark((function t(e,n){var a,c,o,p,h,d;return i.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c="".concat(u,"/index.php?date=today&expanded=1&filter_limit=25&format=JSON&idSite=").concat("158","&method=Events.getCategory&module=API&period=month&segment=&token_auth=").concat(e),t.next=3,fetch(c);case 3:return o=t.sent,t.next=6,o.json();case 6:return p=t.sent,h=(a=[]).concat.apply(a,r(p.filter((function(t){return l[t.label]==n})).map((function(t){return t.subtable})))),(d=h.map((function(t){return JSON.parse(t.label)})).map((function(t){var e=t.timestamp||t.timetamp;return s({seed:Math.random(),timestamp:e,duration:t.duration,email:{total:t.withEmail,withAutorisation:t.withAutorisation,withExplicitRefusal:t.withExplicitRefusal,withoutAutorisationDetails:t.withoutAutorisationDetails},cDate:new Date(e),phone:{}},t)}))).sort((function(t,e){return t.cDate-e.cDate})),t.abrupt("return",d);case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}e.fetchLog=function(t,e){return p.apply(this,arguments)}},"2zrp":function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var i=n("nKUr"),a=n("q1tI"),r=n("17LQ");function c(t){t.children;var e=t.onRunRefresh,n=t.category,c=Object(a.useState)(!1),o=c[0],s=c[1],l=Object(a.useState)(window.localStorage.getItem("token")||""),u=l[0],p=l[1];Object(a.useEffect)((function(){o&&u&&n&&e&&r.fetchLog&&Object(r.fetchLog)(u,n).then((function(t){e(t)}))}),[o,u]);var h=Object(a.useCallback)((function(t){s(t.target.checked),t.target.checked||e([])})),d=Object(a.useCallback)((function(t){p(t.target.value),window.localStorage.setItem("token",t.target.value)})),j=Object(a.useCallback)((function(t){p(""),s(!1),window.localStorage.removeItem("token"),e&&e([])}));return Object(i.jsxs)("div",{style:{display:"flex",flexDirection:"row-reverse"},children:[Object(i.jsxs)("label",{children:[Object(i.jsx)("input",{onChange:h,type:"checkbox",checked:o}),"Admin"]}),o&&Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("a",{target:"_blank",rel:"noopener",href:"https://stats.data.gouv.fr/index.php?module=UsersManager&action=userSettings",children:"R\xe9cup\xe9rer mon API Authentication Token"}),Object(i.jsx)("input",{onChange:d,type:"password",value:u}),Object(i.jsx)("button",{onClick:j,children:"Supprimer le token"})]})]})}},"3Ztg":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/lecteur/cnaf/instruction",function(){return n("VtO9")}])},CwUp:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return c}));var i=n("KQm4"),a=function(t,e){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return t.reduce((function(t,i){return void 0!==i[e]&&(t[i[e]]=(t[i[e]]||0)+1,n&&(t.Total=(t.Total||0)+1)),t}),{})},r=function(t,e){return t.reduce((function(t,e){return t=t.concat(Object.keys(e)),Array.from(new Set(t))}),[])},c=function(t,e){return Object(i.a)(new Set([].concat(Object(i.a)(Object.keys(t)),Object(i.a)(Object.keys(e))))).reduce((function(n,i){return n[i]=(t[i]||0)+(e[i]||0),n}),{})}},GYdj:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return r}));var i={M:"Mensuel",I:"Quotidien",R:"Reprise"},a={D:"B\xe9n\xe9ficiaires",I:"Instructions",R:"Nouveau recueil"},r={DEM:"Demandeur",CJT:"Conjoint",ENF:"Enfant",AUT:"Autre"}},Ji7U:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n("s4An");function a(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Object(i.a)(t,e)}},Svyj:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var i=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],i="data:text/csv;charset=utf-8,"+n.join(";")+"\n"+e.map((function(t){return t.join(";")})).join("\n"),a=encodeURI(i),r=document.createElement("a");r.setAttribute("href",a),r.setAttribute("download",t),document.body.appendChild(r),r.click()}},VtO9:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return v}));var i=n("nKUr"),a=n("o0o1"),r=n.n(a),c=n("HaE+"),o=n("q1tI"),s=(n("g4pe"),n("2zrp")),l=n("CafY"),u=n("RPyZ"),p=n("aIN1"),h=n("vRNQ"),d=n.n(h),j=n("GYdj"),b=n("PQ1l"),f=n("CwUp"),m=n("e6fs"),O=n("Svyj"),x=n("jwbB"),g=Object(b.b)("Test - CNAF - Instruction"),w=!1;function v(){var t=Object(o.useReducer)(g,[],b.a),e=t[0],n=t[1],a=Object(o.useState)(0),h=a[0],v=a[1],y=Object(o.useCallback)((function(t){n({type:"reset",items:t})})),P=function(){var t=Object(c.a)(r.a.mark((function t(e){var i;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return v(e.size),i=new Date,t.next=4,new Promise((function(t){var a=new FileReader;a.onload=function(a){var r=new m.a(a.target.result);n({type:"append",item:{seed:Math.random(),timestamp:(new Date).toISOString().slice(0,19),duration:new Date-i,filename:e.name,fileSize:e.size,fileDatetime:r.fileDatetime,frequency:r.frequency,origin:r.origin,parseError:r.parseError,applicationsCount:r.applicationsCount,applicantsCount:r.applicantsCount,email:{total:r.applicationsWithEmail.length,withAutorisation:r.applicationsWithUsableEmail.length,withExplicitRefusal:r.applicationsWithForbiddenEmailUsage.length,withoutAutorisationDetails:r.applicationsWithoutEmailUsage.length},phone:{total:r.applicatonsWithPhone.length,withAutorisation:r.applicationsWithUsablePhone.length,withExplicitRefusal:r.applicationsWithForbiddenPhoneUsage.length,withoutAutorisationDetails:r.applicationsWithoutPhoneUsage.length},applicationsWithDSP:r.applicationsWithDSP.length,applicantsPersonalData:r.applicantsPersonalData,nationalitiesPartition:r.nationalitiesPartition,activitiesPartition:r.activitiesPartition,dspRolesPartition:r.dspRolesPartition}}),t()},a.readAsText(e)}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),S=function(t){return Math.round(t)},N=Object(f.b)(e.map((function(t){return t.nationalitiesPartition}))),E=Object(f.b)(e.map((function(t){return t.activitiesPartition})));return Object(i.jsxs)(l.a,{className:d.a.container,handleFile:P,children:[Object(i.jsx)(s.a,{category:"Instruction",onRunRefresh:y}),Object(i.jsxs)("main",{className:d.a.main,children:[Object(i.jsxs)("h1",{className:d.a.title,children:["Lecteur de fichier",Object(i.jsx)("br",{}),"\xab Instruction \xbb de la CNAF"]}),Object(i.jsx)(u.a,{handleFile:P,fileSize:h}),e&&e.length>0&&Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:d.a.table_container,children:[Object(i.jsx)("p",{className:d.a.subtitle,children:"Statistiques instructions"}),Object(i.jsxs)("table",{children:[Object(i.jsxs)("thead",{children:[Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{rowSpan:"2",children:"#"}),Object(i.jsx)("th",{rowSpan:"2",children:"Dossiers"}),Object(i.jsx)("th",{colSpan:"8",children:"avec email"}),Object(i.jsx)("th",{colSpan:"8",children:"avec t\xe9l\xe9phone"}),Object(i.jsx)("th",{colSpan:"2",rowSpan:"2",children:"avec DSP"})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{colSpan:"2",children:"Total"}),Object(i.jsx)("th",{colSpan:"2",children:"et autorisation "}),Object(i.jsx)("th",{colSpan:"2",children:"refus explicit"}),Object(i.jsx)("th",{colSpan:"2",children:Object(i.jsx)("abbr",{title:"Balise AUTORUTIADRELEC pr\xe9sente et \xe9gale \xe0 'I'",children:"inconnu explicit (I)"})}),Object(i.jsx)("th",{colSpan:"2",children:"Total"}),Object(i.jsx)("th",{colSpan:"2",children:"et autorisation"}),Object(i.jsx)("th",{colSpan:"2",children:"refus explicit"}),Object(i.jsx)("th",{colSpan:"2",children:Object(i.jsx)("abbr",{title:"Balise AUTORUTITEL pr\xe9sente et \xe9gale \xe0 'I'",children:"inconnu explicit (I)"})})]})]}),Object(i.jsx)("tbody",{children:e.map((function(t,e){return Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:e+1}),Object(i.jsx)("td",{children:t.applicationsCount}),Object(i.jsx)("td",{children:t.email.total}),Object(i.jsxs)("td",{children:[S(t.email.total/t.applicationsCount*100),"%"]}),Object(i.jsx)("td",{children:t.email.withAutorisation}),Object(i.jsxs)("td",{children:[S(t.email.withAutorisation/t.applicationsCount*100),"%"]}),Object(i.jsx)("td",{children:t.email.withExplicitRefusal}),Object(i.jsxs)("td",{children:[S(t.email.withExplicitRefusal/t.applicationsCount*100),"%"]}),Object(i.jsx)("td",{children:t.email.withoutAutorisationDetails}),Object(i.jsxs)("td",{children:[S(t.email.withoutAutorisationDetails/t.applicationsCount*100),"%"]}),Object(i.jsx)("td",{children:t.phone.total}),Object(i.jsxs)("td",{children:[S(t.phone.total/t.applicationsCount*100),"%"]}),Object(i.jsx)("td",{children:t.phone.withAutorisation}),Object(i.jsxs)("td",{children:[S(t.phone.withAutorisation/t.applicationsCount*100),"%"]}),Object(i.jsx)("td",{children:t.phone.withExplicitRefusal}),Object(i.jsxs)("td",{children:[S(t.phone.withExplicitRefusal/t.applicationsCount*100),"%"]}),Object(i.jsx)("td",{children:t.phone.withoutAutorisationDetails}),Object(i.jsxs)("td",{children:[S(t.phone.withoutAutorisationDetails/t.applicationsCount*100),"%"]}),Object(i.jsx)("td",{children:t.applicationsWithDSP}),Object(i.jsxs)("td",{children:[S(t.applicationsWithDSP/t.applicationsCount*100),"%"]})]},"".concat(t.timestamp,"-").concat(t.filename,"-").concat(t.seed))}))})]}),Object(i.jsxs)("table",{children:[Object(i.jsxs)("thead",{children:[Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{rowSpan:"2",children:"#"}),Object(i.jsx)("th",{rowSpan:"2",children:"Personnes"}),Object(i.jsx)("th",{colSpan:"3",children:"DSP"}),Object(i.jsx)("th",{colSpan:N.length,children:"Nationalit\xe9s"}),Object(i.jsx)("th",{colSpan:E.length,children:"Activit\xe9s"})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"DEM"}),Object(i.jsx)("th",{children:"CJT"}),Object(i.jsx)("th",{children:"Total"}),N.map((function(t){return Object(i.jsx)("th",{colSpan:"1",children:t},t)})),E.map((function(t){return Object(i.jsx)("th",{colSpan:"1",children:t},t)}))]})]}),Object(i.jsx)("tbody",{children:e.map((function(t,e){return Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:e+1}),Object(i.jsx)("td",{children:t.applicantsCount}),Object(i.jsx)("td",{children:t.dspRolesPartition.DEM||0}),Object(i.jsx)("td",{children:t.dspRolesPartition.CJT||0}),Object(i.jsx)("td",{children:t.dspRolesPartition.Total||0}),N.map((function(e){return Object(i.jsx)("td",{className:d.a.center,children:t.nationalitiesPartition[e]||0},e)})),E.map((function(e){return Object(i.jsx)("td",{className:d.a.center,children:t.activitiesPartition[e]||0},e)}))]},"".concat(t.timestamp,"-").concat(t.filename,"-").concat(t.seed))}))})]}),Object(i.jsx)("div",{style:{paddingRight:"30%",paddingLeft:"30%"},children:Object(i.jsxs)("div",{className:d.a.button_group,children:[Object(i.jsx)("button",{className:d.a.button,onClick:function(){var t=[];e.forEach((function(e){e.applicantsPersonalData.forEach((function(n){t.push([n.rsaApplicationNumber||"",n.socialSecurityNumber||"",n.lastName||"",n.firstName||"",j.a[n.role]||"",n.emailAddress||"",n.phoneNumber||"",e.filename])}))}));var n="flux_insertion_donnees_personnelles_"+Object(x.b)()+".csv";Object(O.a)(n,t,["NUMERO DEMANDE RSA","NIR","NOM","PRENOM","ROLE","EMAIL","TELEPHONE","FICHIER SOURCE"])},children:"Exporter les donn\xe9es de contacts"}),Object(i.jsx)("button",{className:d.a.button,onClick:function(){var t=e.map((function(t){return[t.filename,t.applicationsCount||0,t.email.total||0,S(t.email.total/t.applicationsCount*100)||0,t.email.withAutorisation||0,S(t.email.withAutorisation/t.applicationsCount*100)||0,t.email.withExplicitRefusal||0,S(t.email.withExplicitRefusal/t.applicationsCount*100)||0,t.email.withoutAutorisationDetails||0,S(t.email.withoutAutorisationDetails/t.applicationsCount*100)||0,t.phone.total||0,S(t.phone.total/t.applicationsCount*100)||0,t.phone.withAutorisation||0,S(t.phone.withAutorisation/t.applicationsCount*100)||0,t.phone.withExplicitRefusal||0,S(t.phone.withExplicitRefusal/t.applicationsCount*100)||0,t.phone.withoutAutorisationDetails||0,S(t.phone.withoutAutorisationDetails/t.applicationsCount*100)||0,t.applicationsWithDSP||0,S(t.applicationsWithDSP/t.applicationsCount*100)||0,t.applicantsCount||0,t.dspRolesPartition.DEM||0,t.dspRolesPartition.CJT||0,t.dspRolesPartition.Total||0].concat(N.map((function(e){return t.nationalitiesPartition[e]||0}))).concat(E.map((function(e){return t.activitiesPartition[e]||0})))})),n=["Fichier source","Nombre total de dossiers","Nombre total de dossiers avec email","Pourcentage de dossiers avec email","Nombre de dossiers avec autorisation explicite pour l'email","Pourcentage de dossiers avec autorisation explicite pour l'email","Nombre de dossiers avec refus explicite pour l'email","Pourcentage de dossiers avec refus explicite pour l'email","Nombre de dossiers avec autorisation inconnue explicite pour l'email","Pourcentage de dossiers avec autorisation inconnue explicite pour l'email","Nombre total de dossiers avec t\xe9l\xe9phone","Pourcentage de dossiers avec t\xe9l\xe9phone","Nombre de dossiers avec autorisation explicite pour le t\xe9l\xe9phone","Pourcentage de dossiers avec autorisation explicite pour le t\xe9l\xe9phone","Nombre de dossiers avec refus explicite pour le t\xe9l\xe9phone","Pourcentage de dossiers avec refus explicite pour le t\xe9l\xe9phone","Nombre de dossiers avec autorisation inconnue explicite pour le t\xe9l\xe9phone","Pourcentage de dossiers avec autorisation inconnue explicite pour le t\xe9l\xe9phone","Nombre de dossiers avec DSP","Pourcentage de dossiers avec DSP","Nombre total de personnes","Nombre de demandeurs (DEM) avec DSP","Nombre de Conjoints (CJT) avec DSP","Nombre total de personnes avec DSP"].concat(N.map((function(t){return"Nombre de personnes de nationalit\xe9 ".concat(t)}))).concat(E.map((function(t){return"Nombre de personne avec Activit\xe9 ".concat(t)}))),i="flux_insertion_statistiques_"+Object(x.b)()+".csv";Object(O.a)(i,t,n)},children:"Exporter les statistiques"})]})})]}),Object(i.jsxs)("div",{className:d.a.table_container,children:[Object(i.jsx)("p",{className:d.a.subtitle,children:"Historique"}),Object(i.jsxs)("table",{className:d.a.margin_side,children:[Object(i.jsxs)("thead",{children:[Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{rowSpan:"2",children:"#"}),Object(i.jsx)("th",{rowSpan:"2",children:"Date"}),Object(i.jsx)("th",{rowSpan:"2",children:"Fichier"}),w,w,Object(i.jsx)("th",{rowSpan:"2",children:"Date du fichier"}),Object(i.jsx)("th",{rowSpan:"2",children:"Fr\xe9quence"}),Object(i.jsx)("th",{rowSpan:"2",children:"Nature"}),Object(i.jsx)("th",{rowSpan:"2",children:"Erreur"})]}),Object(i.jsx)("tr",{})]}),Object(i.jsx)("tbody",{children:e.map((function(t,e){return Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:e+1}),Object(i.jsx)("td",{children:t.timestamp}),Object(i.jsx)("td",{children:t.filename}),w,w,Object(i.jsx)("td",{children:t.fileDatetime}),Object(i.jsx)("td",{children:"".concat(t.frequency," (").concat(j.b[t.frequency]||"?",")")}),Object(i.jsx)("td",{children:"".concat(t.origin," (").concat(j.c[t.origin]||"?",")")}),Object(i.jsx)("td",{children:t.parseError?"Oui":"Non"})]},"".concat(t.timestamp,"-").concat(t.filename,"-").concat(t.seed))}))})]}),Object(i.jsx)("button",{className:d.a.button,onClick:function(){return n({type:"reset"})},children:"Vider l'historique"})]})]}),Object(i.jsx)(p.a,{subject:"Flux instruction CNAF",pourquoi:"Pourquoi un lecteur de fichier CNAF\xa0?",text:Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("p",{className:d.a.text,children:"Tous les d\xe9partements n'ont pas les outils pour analyser les fichiers envoy\xe9s par la CNAF. Cela peut ralentir et compliquer nos \xe9changes."}),Object(i.jsx)("p",{className:d.a.text,children:"Avec cet outil, nous souhaitons permettre aux personnes qui ont acc\xe8s \xe0 ces fichiers d'en extraire des statistiques g\xe9n\xe9rales sans avoir \xe0 mettre les mains dans le camboui elles-m\xeame."}),Object(i.jsx)("p",{className:d.a.text,children:"Aujourd'hui, nous cherchons \xe0 comprendre pourquoi pour la CNAF 90% des dossiers pr\xe9sents dans les fichiers quotidiens d'instructions contiennent des emails alors que ce taux est de 30% \xe0 50% pour certains d\xe9partements."})]})})]})]})}},aIN1:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n("nKUr"),a=n("oRLf"),r=n("vRNQ"),c=n.n(r);function o(t){var e=t.pourquoi,n=t.text,r=t.subject;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h2",{id:"pourquoi",className:c.a.subtitle,children:e}),n,Object(i.jsxs)("p",{className:c.a.description,children:["Un probl\xe8me, une question ? Contactez-nous \xe0"," ",Object(i.jsx)(a.a,{subject:r,children:"data.insertion@beta.gouv.fr"})]})]})}},e6fs:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var i=n("KQm4"),a=n("1OyB"),r=n("vuIU"),c=n("Ji7U"),o=n("md7G"),s=n("foSv"),l=n("DCjv"),u=n("oIwm"),p=(n("z4L3"),n("CwUp"));function h(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=Object(s.a)(t);if(e){var a=Object(s.a)(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return Object(o.a)(this,n)}}var d=function(t){Object(c.a)(n,t);var e=h(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"applications",get:function(){return Object(i.a)(this.dom.getElementsByTagName("InfoDemandeRSA")).map((function(t){return new u.a(t)}))}},{key:"applicationsWithEmail",get:function(){return this.applications.filter((function(t){return t.emailAddress}))}},{key:"applicationsWithUsableEmail",get:function(){return this.applications.filter((function(t){return t.withUsableEmail()}))}},{key:"applicationsWithForbiddenEmailUsage",get:function(){return this.applications.filter((function(t){return t.withForbiddenEmailUsage()}))}},{key:"applicationsWithoutEmailUsage",get:function(){return this.applications.filter((function(t){return t.withoutEmailUsage()}))}},{key:"applicatonsWithPhone",get:function(){return this.applications.filter((function(t){return t.phoneNumber}))}},{key:"applicationsWithUsablePhone",get:function(){return this.applications.filter((function(t){return t.withUsablePhone()}))}},{key:"applicationsWithForbiddenPhoneUsage",get:function(){return this.applications.filter((function(t){return t.withForbiddenPhoneUsage()}))}},{key:"applicationsWithoutPhoneUsage",get:function(){return this.applications.filter((function(t){return t.withoutPhoneUsage()}))}},{key:"applicationsWithDSP",get:function(){return this.applications.filter((function(t){return t.withDSP()}))}},{key:"applicantsWithDSP",get:function(){return this.applicants.filter((function(t){return t.socioProfessionalData}))}},{key:"applicantsPersonalData",get:function(){return this.applicants.map((function(t){return t.personalData()}))}},{key:"nationalitiesPartition",get:function(){return Object(p.a)(this.applicants,"nationality",!1)}},{key:"dspRolesPartition",get:function(){return Object(p.a)(this.applicantsWithDSP,"role")}},{key:"activitiesPartition",get:function(){return Object(p.a)(this.applicants,"activity",!1)}}]),n}(l.a)},foSv:function(t,e,n){"use strict";function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return i}))},md7G:function(t,e,n){"use strict";function i(t){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){return!e||"object"!==i(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}n.d(e,"a",(function(){return a}))},s4An:function(t,e,n){"use strict";function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}n.d(e,"a",(function(){return i}))}},[["3Ztg",0,2,1,3,4]]]);