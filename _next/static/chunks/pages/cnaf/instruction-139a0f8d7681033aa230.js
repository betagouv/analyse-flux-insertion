_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"20a2":function(e,t,n){e.exports=n("nOHt")},"3bsq":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.init=o,t.push=l,t.default=void 0;var r,a=(r=n("20a2"))&&r.__esModule?r:{default:r};function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,i=void 0;try{for(var c,s=e[Symbol.iterator]();!(r=(c=s.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(o){a=!0,i=o}finally{try{r||null==s.return||s.return()}finally{if(a)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var s=function(e,t){var n=!1;return t.forEach((function(t){e.match(t)&&(n=!0)})),n};function o(e){var t=e.url,n=e.siteId,r=e.jsTrackerFile,c=void 0===r?"matomo.js":r,o=e.phpTrackerFile,u=void 0===o?"matomo.php":o,h=e.excludeUrlsPatterns,d=void 0===h?[]:h;if(window._paq=window._paq||[],t){var m="";"undefined"!==typeof window&&s(window.location.pathname,d)?"undefined"!==typeof window&&console.log("matomo: exclude track ".concat(window.location.pathname)):l(["trackPageView"]),l(["enableLinkTracking"]),l(["setTrackerUrl","".concat(t,"/").concat(u)]),l(["setSiteId",n]);var f=document.createElement("script"),j=document.getElementsByTagName("script")[0];f.type="text/javascript",f.async=!0,f.defer=!0,f.src="".concat(t,"/").concat(c),j.parentNode.insertBefore(f,j),m=location.pathname,a.default.events.on("routeChangeComplete",(function(e){if(s(e,d))console.log("matomo: exclude track ".concat(e));else{var t=i(e.split("?"),1)[0];setTimeout((function(){var e=a.default.query.q;m&&l(["setReferrerUrl","".concat(m)]),l(["setCustomUrl",t]),l(["setDocumentTitle",document.title]),l(["deleteCustomVariables","page"]),l(["setGenerationTimeMs",0]),/^\/recherche/.test(t)||/^\/search/.test(t)?l(["trackSiteSearch",e]):l(["trackPageView"]),m=t}),0)}}))}else console.warn("Matomo disabled, please provide matomo url")}function l(e){window._paq.push(e)}var u=o;t.default=u},K8xu:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cnaf/instruction",function(){return n("PUrC")}])},PUrC:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return w}));var r=n("nKUr"),a=n("s4An");function i(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function c(e,t,n){return(c=i()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var i=new(Function.bind.apply(e,r));return n&&Object(a.a)(i,n.prototype),i}).apply(null,arguments)}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var l=n("rePB"),u=n("q1tI"),h=(n("g4pe"),n("3bsq")),d=n("CafY"),m=n("oRLf"),f=n("vRNQ"),j=n.n(f);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function O(){return[]}function g(e,t){switch(t.type){case"append":var n=b(b({},t.item),{},{seed:void 0});return Object(h.push)(["trackEvent","Test - CNAF - Instruction",JSON.stringify(n)]),[t.item].concat(o(e));case"reset":return[];default:throw new Error}}var x={M:"Mensuel",I:"Quotidien",R:"Reprise"},y={D:"B\xe9n\xe9ficiaires",I:"Instructions"};function w(){var e="white",t=Object(u.useState)(e),n=t[0],a=t[1],i=Object(u.useState)(null),s=i[0],l=(i[1],Object(u.useState)("?")),h=(l[0],l[1],Object(u.useState)("?")),f=(h[0],h[1],Object(u.useState)("?")),p=(f[0],f[1],Object(u.useReducer)(g,[],O)),b=p[0],w=p[1],N=function(e){return Object(u.useCallback)((function(t){a(e),t.preventDefault()}))};Object(u.useEffect)((function(){s&&T(s)}),[s]);var T=function(e){var t=new FileReader;t.onload=function(t){var n=(new DOMParser).parseFromString(t.target.result,"application/xml"),r=n.getElementsByTagName("IdentificationFlux")[0],a=r.getElementsByTagName("TYPEFLUX")[0].innerHTML,i=r.getElementsByTagName("NATFLUX")[0].innerHTML,s=r.getElementsByTagName("DTCREAFLUX")[0].innerHTML,l=r.getElementsByTagName("HEUCREAFLUX")[0].innerHTML,u=c(Array,o(n.getElementsByTagName("InfoDemandeRSA"))),h=u.filter((function(e){return e.getElementsByTagName("ADRELEC").length})),d=u.filter((function(e){var t=e.getElementsByTagName("AUTORUTIADRELEC")[0];return e.getElementsByTagName("ADRELEC").length&&t&&"A"==t.innerHTML})),m=u.filter((function(e){var t=e.getElementsByTagName("AUTORUTIADRELEC")[0];return e.getElementsByTagName("ADRELEC").length&&t&&"R"==t.innerHTML})),f=u.filter((function(e){var t=e.getElementsByTagName("AUTORUTIADRELEC")[0];return e.getElementsByTagName("ADRELEC").length&&t&&"I"==t.innerHTML})),j=u.filter((function(e){return e.getElementsByTagName("NUMTEL").length})),p=(u.filter((function(e){var t=e.getElementsByTagName("AUTORUTITEL")[0];return e.getElementsByTagName("NUMTEL").length&&t&&"A"==t.innerHTML})),u.filter((function(e){var t=e.getElementsByTagName("AUTORUTITEL")[0];return e.getElementsByTagName("NUMTEL").length&&t&&"R"==t.innerHTML})),u.filter((function(e){var t=e.getElementsByTagName("AUTORUTITEL")[0];return e.getElementsByTagName("NUMTEL").length&&t&&"I"==t.innerHTML})),u.filter((function(e){return e.getElementsByTagName("DonneesSocioProfessionnelles").length})));w({type:"append",item:{seed:Math.random(),timetamp:(new Date).toISOString().slice(0,19),filename:e.name,fileDatetime:"".concat(s,"-").concat(l),frequency:a,type:i,error:n.activeElement&&"parsererror"==n.activeElement.nodeName,total:u.length,email:{total:h.length,withAutorisation:d.length,withExplicitRefusal:m.length,withoutAutorisationDetails:f.length},phone:{total:j.length,withAutorisation:d.length,withExplicitRefusal:m.length,withoutAutorisationDetails:f.length},withDSP:p.length}})},t.readAsText(e)},E=Object(u.useCallback)((function(t){t.preventDefault(),a(e);for(var n=0;n<t.dataTransfer.files.length;n++)T(t.dataTransfer.files[n])})),v=Object(u.useCallback)((function(e){for(var t=0;t<e.target.files.length;t++)T(e.target.files[t]);e.target.value=""})),A=function(e){return Math.round(e)};return Object(r.jsx)(d.a,{className:j.a.container,style:{backgroundColor:n},onDragOver:N("#0070f3"),onDragLeave:N(e),onDrop:E,children:Object(r.jsxs)("main",{className:j.a.main,children:[Object(r.jsx)("h1",{className:j.a.title,children:"Lecteur de fichier CNAF"}),Object(r.jsxs)("p",{className:j.a.description,children:["Glissez et d\xe9posez le fichier CNAF \xe0 analyser ou s\xe9lectionnez le.",Object(r.jsx)("br",{}),Object(r.jsx)("input",{type:"file",onChange:v,multiple:!0})]}),Object(r.jsxs)("p",{className:j.a.description,children:["Les op\xe9rations sont toutes r\xe9alis\xe9es sur votre ordinateur.",Object(r.jsx)("br",{}),"Aucune donn\xe9e personnelle n'est transf\xe9r\xe9e."]}),Object(r.jsx)("p",{className:j.a.description,children:Object(r.jsx)("a",{href:"#pourquoi",children:"Pourquoi un tel lecteur\xa0?"})}),b&&b.length>0&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h2",{className:j.a.subtitle,children:"Historique"}),Object(r.jsxs)("table",{children:[Object(r.jsxs)("thead",{children:[Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{rowspan:"2",children:"Date"}),Object(r.jsx)("th",{rowspan:"2",children:"Fichier"}),Object(r.jsx)("th",{rowspan:"2",children:"Date du fichier"}),Object(r.jsx)("th",{rowspan:"2",children:"Fr\xe9quence"}),Object(r.jsx)("th",{rowspan:"2",children:"Nature"}),Object(r.jsx)("th",{rowspan:"2",children:"Dossiers"}),Object(r.jsx)("th",{colSpan:"8",children:"avec email"}),Object(r.jsx)("th",{colSpan:"8",children:"avec t\xe9l\xe9phone"}),Object(r.jsx)("th",{colSpan:"2",rowspan:"2",children:"DSP (%)"}),Object(r.jsx)("th",{rowspan:"2",children:"Erreur"})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{colSpan:"2",children:"# (%)"}),Object(r.jsx)("th",{colSpan:"2",children:"et autorisation (%)"}),Object(r.jsx)("th",{colSpan:"2",children:"refus explicit (%)"}),Object(r.jsx)("th",{colSpan:"2",children:Object(r.jsx)("abbr",{title:"Balise AUTORUTIADRELEC pr\xe9sente et \xe9gale \xe0 'I'",children:"inconnu explicit (I) (%)"})}),Object(r.jsx)("th",{colSpan:"2",children:"# (%)"}),Object(r.jsx)("th",{colSpan:"2",children:"et autorisation (%)"}),Object(r.jsx)("th",{colSpan:"2",children:"refus explicit (%)"}),Object(r.jsx)("th",{colSpan:"2",children:Object(r.jsx)("abbr",{title:"Balise AUTORUTITEL pr\xe9sente et \xe9gale \xe0 'I'",children:"inconnu explicit (I) (%)"})})]})]}),Object(r.jsx)("tbody",{children:b.map((function(e){return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:e.timetamp}),Object(r.jsx)("td",{children:e.fileDatetime}),Object(r.jsx)("td",{children:e.filename}),Object(r.jsx)("td",{children:"".concat(e.frequency," (").concat(x[e.frequency]||"?",")")}),Object(r.jsx)("td",{children:"".concat(e.type," (").concat(y[e.type]||"?",")")}),Object(r.jsx)("td",{className:j.a.numeric,children:e.total}),Object(r.jsx)("td",{className:j.a.numeric,children:e.email.total}),Object(r.jsx)("td",{className:"shrink",children:A(e.email.total/e.total*100)}),Object(r.jsx)("td",{className:j.a.numeric,children:e.email.withAutorisation}),Object(r.jsx)("td",{className:"shrink",children:A(e.email.withAutorisation/e.total*100)}),Object(r.jsx)("td",{className:j.a.numeric,children:e.email.withExplicitRefusal}),Object(r.jsx)("td",{className:"shrink",children:A(e.email.withExplicitRefusal/e.total*100)}),Object(r.jsx)("td",{className:j.a.numeric,children:e.email.withoutAutorisationDetails}),Object(r.jsx)("td",{className:"shrink",children:A(e.email.withoutAutorisationDetails/e.total*100)}),Object(r.jsx)("td",{className:j.a.numeric,children:e.phone.total}),Object(r.jsx)("td",{className:"shrink",children:A(e.phone.total/e.total*100)}),Object(r.jsx)("td",{className:j.a.numeric,children:e.phone.withAutorisation}),Object(r.jsx)("td",{className:"shrink",children:A(e.phone.withAutorisation/e.total*100)}),Object(r.jsx)("td",{className:j.a.numeric,children:e.phone.withExplicitRefusal}),Object(r.jsx)("td",{className:"shrink",children:A(e.phone.withExplicitRefusal/e.total*100)}),Object(r.jsx)("td",{className:j.a.numeric,children:e.phone.withoutAutorisationDetails}),Object(r.jsx)("td",{className:"shrink",children:A(e.phone.withoutAutorisationDetails/e.total*100)}),Object(r.jsx)("td",{className:j.a.numeric,children:e.withDSP}),Object(r.jsx)("td",{className:"shrink",children:A(e.withDSP/e.total*100)}),Object(r.jsx)("td",{children:e.error?"Oui":"Non"})]},"".concat(e.timetamp,"-").concat(e.filename,"-").concat(e.seed))}))})]}),Object(r.jsx)("button",{onClick:function(){return w({type:"reset"})},children:"Vider l'historique"})]}),Object(r.jsxs)("p",{className:j.a.description,children:["Un probl\xe8me, une question ? Contactez-nous \xe0 ",Object(r.jsx)(m.a,{subject:"Flux instruction CNAF",children:"data.insertion@beta.gouv.fr"})]}),Object(r.jsx)("h2",{id:"pourquoi",className:j.a.subtitle,children:"Pourquoi un lecteur de fichier CNAF\xa0?"}),Object(r.jsx)("p",{className:j.a.text,children:"Tous les d\xe9partements n'ont pas les outils pour analyser les fichiers envoy\xe9s par la CNAF. Cela peut ralentir et compliquer nos \xe9changes."}),Object(r.jsx)("p",{className:j.a.text,children:"Avec cet outil, nous souhaitons permettre aux personnes qui ont acc\xe8s \xe0 ces fichiers d'en extraire des statistiques g\xe9n\xe9rales sans avoir \xe0 mettre les mains dans le camboui elles-m\xeame."}),Object(r.jsx)("p",{className:j.a.text,children:"Aujourd'hui, nous cherchons \xe0 comprendre pourquoi pour la CNAF 90% des dossiers pr\xe9sents dans les fichiers quotidiens d'instructions contiennent des emails alors que ce taux est de 30% \xe0 50% pour certains d\xe9partements."})]})})}},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},s4An:function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"a",(function(){return r}))}},[["K8xu",0,2,1,3]]]);