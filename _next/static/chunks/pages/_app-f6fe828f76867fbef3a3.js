_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[5],{0:function(t,e,r){r("GcxT"),t.exports=r("nOHt")},"1TCz":function(t,e,r){"use strict";r.r(e);var n=r("rePB"),o=r("nKUr");function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var i=r("s4An");function a(t){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t,e){return!e||"object"!==a(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var l=r("8Bbg"),p=r.n(l),y=(r("zPlV"),r("3bsq"));function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function b(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=s(t);if(e){var o=s(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return f(this,r)}}var h=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Object(i.a)(t,e)}(s,t);var e,r,a,f=b(s);function s(){return c(this,s),f.apply(this,arguments)}return e=s,(r=[{key:"componentDidMount",value:function(){Object(y.init)({url:"https://stats.data.gouv.fr",siteId:"158"})}},{key:"render",value:function(){var t=this.props,e=t.Component,r=t.pageProps;return Object(o.jsx)(e,function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},r))}}])&&u(e.prototype,r),a&&u(e,a),s}(p.a);e.default=h},"20a2":function(t,e,r){t.exports=r("nOHt")},"3bsq":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.init=a,e.push=f,e.default=void 0;var n,o=(n=r("20a2"))&&n.__esModule?n:{default:n};function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(t)))return;var r=[],n=!0,o=!1,c=void 0;try{for(var u,i=t[Symbol.iterator]();!(n=(u=i.next()).done)&&(r.push(u.value),!e||r.length!==e);n=!0);}catch(a){o=!0,c=a}finally{try{n||null==i.return||i.return()}finally{if(o)throw c}}return r}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return u(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var i=function(t,e){var r=!1;return e.forEach((function(e){t.match(e)&&(r=!0)})),r};function a(t){var e=t.url,r=t.siteId,n=t.jsTrackerFile,u=void 0===n?"matomo.js":n,a=t.phpTrackerFile,s=void 0===a?"matomo.php":a,l=t.excludeUrlsPatterns,p=void 0===l?[]:l;if(window._paq=window._paq||[],e){var y="";"undefined"!==typeof window&&i(window.location.pathname,p)?"undefined"!==typeof window&&console.log("matomo: exclude track ".concat(window.location.pathname)):f(["trackPageView"]),f(["enableLinkTracking"]),f(["setTrackerUrl","".concat(e,"/").concat(s)]),f(["setSiteId",r]);var d=document.createElement("script"),b=document.getElementsByTagName("script")[0];d.type="text/javascript",d.async=!0,d.defer=!0,d.src="".concat(e,"/").concat(u),b.parentNode.insertBefore(d,b),y=location.pathname,o.default.events.on("routeChangeComplete",(function(t){if(i(t,p))console.log("matomo: exclude track ".concat(t));else{var e=c(t.split("?"),1)[0];setTimeout((function(){var t=o.default.query.q;y&&f(["setReferrerUrl","".concat(y)]),f(["setCustomUrl",e]),f(["setDocumentTitle",document.title]),f(["deleteCustomVariables","page"]),f(["setGenerationTimeMs",0]),/^\/recherche/.test(e)||/^\/search/.test(e)?f(["trackSiteSearch",t]):f(["trackPageView"]),y=e}),0)}}))}else console.warn("Matomo disabled, please provide matomo url")}function f(t){window._paq.push(t)}var s=a;e.default=s},"8Bbg":function(t,e,r){t.exports=r("B5Ud")},B5Ud:function(t,e,r){"use strict";var n=r("o0o1"),o=r("lwsE"),c=r("W8MJ"),u=r("7W2i"),i=r("a1gu"),a=r("Nsbk"),f=r("yXPU");function s(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=a(t);if(e){var o=a(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return i(this,r)}}var l=r("TqRt");e.__esModule=!0,e.Container=function(t){0;return t.children},e.createUrl=m,e.default=void 0;var p=l(r("q1tI")),y=r("g/15");function d(t){return b.apply(this,arguments)}function b(){return(b=f(n.mark((function t(e){var r,o,c;return n.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.Component,o=e.ctx,t.next=3,(0,y.loadGetInitialProps)(r,o);case 3:return c=t.sent,t.abrupt("return",{pageProps:c});case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}e.AppInitialProps=y.AppInitialProps,e.NextWebVitalsMetric=y.NextWebVitalsMetric;var h=function(t){u(r,t);var e=s(r);function r(){return o(this,r),e.apply(this,arguments)}return c(r,[{key:"componentDidCatch",value:function(t,e){throw t}},{key:"render",value:function(){var t=this.props,e=t.router,r=t.Component,n=t.pageProps,o=t.__N_SSG,c=t.__N_SSP;return p.default.createElement(r,Object.assign({},n,o||c?{}:{url:m(e)}))}}]),r}(p.default.Component);function m(t){var e=t.pathname,r=t.asPath,n=t.query;return{get query(){return n},get pathname(){return e},get asPath(){return r},back:function(){t.back()},push:function(e,r){return t.push(e,r)},pushTo:function(e,r){var n=r?e:"",o=r||e;return t.push(n,o)},replace:function(e,r){return t.replace(e,r)},replaceTo:function(e,r){var n=r?e:"",o=r||e;return t.replace(n,o)}}}e.default=h,h.origGetInitialProps=d,h.getInitialProps=d},GcxT:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r("1TCz")}])},rePB:function(t,e,r){"use strict";function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,"a",(function(){return n}))},s4An:function(t,e,r){"use strict";function n(t,e){return(n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}r.d(e,"a",(function(){return n}))},zPlV:function(t,e,r){}},[[0,0,2,1]]]);