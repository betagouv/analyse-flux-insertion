_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[24],{"4pqH":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/lecteur/pole-emploi",function(){return n("o5HA")}])},aIN1:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("nKUr"),a=n("oRLf"),c=n("vRNQ"),i=n.n(c);function s(e){var t=e.pourquoi,n=e.text,c=e.subject;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h2",{id:"pourquoi",className:i.a.subtitle,children:t}),n,Object(r.jsxs)("p",{className:i.a.description,children:["Un probl\xe8me, une question ? Contactez-nous \xe0"," ",Object(r.jsx)(a.a,{subject:c,children:"data.insertion@beta.gouv.fr"})]})]})}},o5HA:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return x}));var r=n("nKUr"),a=n("s4An");function c(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function i(e,t,n){return(i=c()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var c=new(Function.bind.apply(e,r));return n&&Object(a.a)(c,n.prototype),c}).apply(null,arguments)}var s=n("KQm4"),l=n("q1tI"),o=n("CafY"),d=n("RPyZ"),u=n("aIN1"),j=n("vRNQ"),h=n.n(j),b=n("PQ1l"),p=Object(b.b)("Test - Pole Emploi"),m=!1,f={M:"Mensuel"},O={PECG:"PE vers CD"};function x(){var e=Object(l.useState)(null),t=e[0],n=(e[1],Object(l.useReducer)(p,[],b.a)),a=n[0],c=n[1],j=Object(l.useState)(!1),x=j[0],g=j[1],w=Object(l.useState)(0),y=w[0],N=w[1];Object(l.useEffect)((function(){t&&E(t)}),[t]);var E=function(e){N(e.size),g(!0);var t=new Date,n=new FileReader;n.onload=function(n){var r=(new DOMParser).parseFromString(n.target.result,"application/xml"),a=r.getElementsByTagName("entete")[0],l=a.getElementsByTagName("periodicite")[0].innerHTML,o=a.getElementsByTagName("fichier")[0].innerHTML,d=a.getElementsByTagName("departement")[0].innerHTML,u=a.getElementsByTagName("date-reference")[0].innerHTML,j=a.getElementsByTagName("date-fabrication")[0].innerHTML,h=i(Array,Object(s.a)(r.getElementsByTagName("dossier"))),b=h.filter((function(e){return e.getElementsByTagName("date-dernier-ent").length})),p=h.filter((function(e){var t=e.getElementsByTagName("date-dernier-ent");return t.length&&t[0].innerHTML.match(/\d{4}-\d{2}-\d{2}/)}));g(!1),c({type:"append",item:{seed:Math.random(),timestamp:(new Date).toISOString().slice(0,19),duration:new Date-t,filename:e.name,frequency:l,referenceDate:u,generationDate:j,departement:d,type:o,error:r.activeElement&&"parsererror"==r.activeElement.nodeName,total:h.length,withLastMeetingDate:b.length,withUsableLastMeetingDate:p.length,fileSize:e.size}})},n.readAsText(e)},v=function(e){return Math.round(e)};return Object(r.jsx)(o.a,{className:h.a.container,handleFile:E,children:Object(r.jsxs)("main",{className:h.a.main,children:[Object(r.jsx)("h1",{className:h.a.title,children:"Analyser les fichiers P\xf4le Emploi"}),Object(r.jsx)(d.a,{handleFile:E,isPending:x,fileSize:y}),a&&a.length>0&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h2",{className:h.a.subtitle,children:"Historique"}),Object(r.jsxs)("table",{children:[Object(r.jsxs)("thead",{children:[Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{rowSpan:"2",children:"Date"}),Object(r.jsx)("th",{rowSpan:"2",children:"Fichier"}),m,m,Object(r.jsx)("th",{rowSpan:"2",children:"Date de r\xe9f\xe9rence"}),Object(r.jsx)("th",{rowSpan:"2",children:"Date de fabrication"}),Object(r.jsx)("th",{rowSpan:"2",children:"Fr\xe9quence"}),Object(r.jsx)("th",{rowSpan:"2",children:"Nature"}),Object(r.jsx)("th",{rowSpan:"2",children:"CD"}),Object(r.jsx)("th",{rowSpan:"2",children:"Dossiers"}),Object(r.jsx)("th",{colSpan:"2",rowSpan:"2",children:"avec date de dernier entretien PPAE (%)"}),Object(r.jsx)("th",{colSpan:"2",rowSpan:"2",children:Object(r.jsxs)("abbr",{title:"Par valide, on veut dire contient une date au format AAA-MM-JJ",children:["avec date de dernier entretien PPAE ",Object(r.jsx)("i",{children:"valide"})," (%)"]})}),Object(r.jsx)("th",{rowSpan:"2",children:"Erreur"})]}),Object(r.jsx)("tr",{})]}),Object(r.jsx)("tbody",{children:a.map((function(e,t){return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:e.timestamp}),Object(r.jsx)("td",{children:e.filename}),m,m,Object(r.jsx)("td",{children:e.referenceDate}),Object(r.jsx)("td",{children:e.generationDate}),Object(r.jsx)("td",{children:"".concat(e.frequency," (").concat(f[e.frequency]||"?",")")}),Object(r.jsx)("td",{children:"".concat(e.type," (").concat(O[e.type]||"?",")")}),Object(r.jsx)("td",{className:"shrink",children:e.departement}),Object(r.jsx)("td",{className:h.a.numeric,children:e.total}),Object(r.jsx)("td",{children:e.withLastMeetingDate}),Object(r.jsx)("td",{className:"shrink",children:v(e.withLastMeetingDate/e.total*100)}),Object(r.jsx)("td",{children:e.withUsableLastMeetingDate}),Object(r.jsx)("td",{className:"shrink",children:v(e.withUsableLastMeetingDate/e.total*100)}),Object(r.jsx)("td",{children:e.error?"Oui":"Non"})]},"".concat(e.timestamp,"-").concat(e.filename,"-").concat(e.seed))}))})]}),Object(r.jsx)("button",{onClick:function(){return c({type:"reset"})},children:"Vider l'historique"})]}),Object(r.jsx)(u.a,{subject:"Flux Pole Emploi",pourquoi:"Pourquoi un lecteur de fichier P\xf4le Emploi\xa0?",text:Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("p",{className:h.a.text,children:"Tous les d\xe9partements n'ont pas les outils pour analyser les fichiers envoy\xe9s par P\xf4le Emploi. Cela peut ralentir et compliquer nos \xe9changes."}),Object(r.jsx)("p",{className:h.a.text,children:"Avec cet outil, nous souhaitons permettre aux personnes qui ont acc\xe8s \xe0 ces fichiers d'en extraire des statistiques g\xe9n\xe9rales sans avoir \xe0 mettre les mains dans le camboui elles-m\xeame."})]})})]})})}},s4An:function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"a",(function(){return r}))}},[["4pqH",0,2,1,3,4]]]);