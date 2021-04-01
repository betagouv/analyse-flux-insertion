webpackHotUpdate_N_E("pages/experimentations/ardennes",{

/***/ "./components/login-form.js":
/*!**********************************!*\
  !*** ./components/login-form.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoginForm; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "/home/q/code/qblanc/beta.gouv/analyse-flux-insertion/components/login-form.js",
    _s = $RefreshSig$();


function LoginForm(_ref) {
  _s();

  var onLogin = _ref.onLogin;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      login = _useState[0],
      setLogin = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      password = _useState2[0],
      setPassword = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isPending = _useState3[0],
      setIsPending = _useState3[1];

  var RDV_URL = "http://localhost:5000";
  var path = '/auth/sign_in';
  var url = "".concat(RDV_URL, "/api/v1").concat(path);

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    var user = {
      email: login,
      password: password
    };
    setIsPending(true);
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }).then(function (response) {
      setIsPending(false);

      if (response.ok) {
        onLogin(response.headers.get("access-token"), response.headers.get("uid"), response.headers.get("client"));
        return response.json();
      } else {
        alert("Aucun compte n'est rattach\xE9 \xE0 ce couple email/mot de passe. Merci de v\xE9rifier vos identifiants.");
      }
    }); // .then(result => {
    //   console.log('Success:');
    // })
    // .catch(error => {
    //   alert(`Une erreur s'est produite, merci de réessayer.`);
    //   console.error('Error:', error);
    // });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
    onSubmit: handleSubmit,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
      htmlFor: "agent_email",
      children: "Email"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      id: "agent_email",
      type: "email",
      value: login,
      onChange: function onChange(e) {
        return setLogin(e.target.value);
      },
      required: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
      htmlFor: "agent_password",
      children: "Mot de passe"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      id: "agent_password",
      type: "password",
      value: password,
      onChange: function onChange(e) {
        return setPassword(e.target.value);
      },
      required: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, this), !isPending && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      children: "Se connecter"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 22
    }, this), isPending && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      children: "Connexion en cours"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 21
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 5
  }, this);
}

_s(LoginForm, "dcx0SC2NNPP16vuxxYIUWcUla4M=");

_c = LoginForm;

var _c;

$RefreshReg$(_c, "LoginForm");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./lib/cnaf.js":
/*!*********************!*\
  !*** ./lib/cnaf.js ***!
  \*********************/
/*! exports provided: frequencyNames, typeNames, getFormattedTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frequencyNames", function() { return frequencyNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeNames", function() { return typeNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFormattedTime", function() { return getFormattedTime; });
// TYPEFLUX
var frequencyNames = {
  M: 'Mensuel',
  I: 'Quotidien',
  R: 'Reprise'
}; // NATFLUX

var typeNames = {
  D: 'Bénéficiaires',
  I: 'Instructions',
  R: 'Nouveau recueil'
};

function getFormattedTime() {
  var today = new Date();
  var y = today.getFullYear(); // JavaScript months are 0-based.

  var m = today.getMonth() + 1;
  var d = today.getDate();
  var h = today.getHours();
  var mi = today.getMinutes();
  var s = today.getSeconds();
  return y + "_" + m + "_" + d + "_" + h + "_" + mi + "_" + s;
}



;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/Home.module.css":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./styles/Home.module.css ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".Home_container__1EcsU {\n  min-height: 100vh;\n  padding: 0 0.5rem;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: flex;\n  -webkit-flex-direction: column;\n     -moz-box-orient: vertical;\n     -moz-box-direction: normal;\n          flex-direction: column;\n  -webkit-justify-content: center;\n     -moz-box-pack: center;\n          justify-content: center;\n  -webkit-align-items: center;\n     -moz-box-align: center;\n          align-items: center;\n}\n\n.Home_content__2fqOz {\n  max-width: 800px;\n}\n\n.Home_main__1x8gC {\n  padding: 5rem 0;\n  -webkit-flex: 1 1;\n     -moz-box-flex: 1;\n          flex: 1 1;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: flex;\n  -webkit-flex-direction: column;\n     -moz-box-orient: vertical;\n     -moz-box-direction: normal;\n          flex-direction: column;\n  -webkit-justify-content: center;\n     -moz-box-pack: center;\n          justify-content: center;\n  -webkit-align-items: center;\n     -moz-box-align: center;\n          align-items: center;\n}\n\n.Home_footer__1WdhD {\n  width: 100%;\n  height: 100px;\n  border-top: 1px solid #eaeaea;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: flex;\n  -webkit-justify-content: center;\n     -moz-box-pack: center;\n          justify-content: center;\n  -webkit-align-items: center;\n     -moz-box-align: center;\n          align-items: center;\n}\n\n.Home_footer__1WdhD img {\n  margin-left: 0.5rem;\n}\n\n.Home_footer__1WdhD a {\n  display: -webkit-flex;\n  display: -moz-box;\n  display: flex;\n  -webkit-justify-content: center;\n     -moz-box-pack: center;\n          justify-content: center;\n  -webkit-align-items: center;\n     -moz-box-align: center;\n          align-items: center;\n}\n\n.Home_title__3DjR7 a {\n  color: #0070f3;\n  text-decoration: none;\n}\n\n.Home_title__3DjR7 a:hover,\n.Home_title__3DjR7 a:focus,\n.Home_title__3DjR7 a:active {\n  text-decoration: underline;\n}\n\n.Home_title__3DjR7 {\n  margin: 0;\n  line-height: 1.15;\n  font-size: 4rem;\n}\n\n.Home_subtitle__3I2yI {\n  margin: 0;\n  line-height: 1.15;\n  font-size: 3rem;\n}\n\n.Home_title__3DjR7,\n.Home_subtitle__3I2yI,\n.Home_description__17Z4F,\n.Home_pending_warning__2L76r {\n  text-align: center;\n}\n\n.Home_description__17Z4F,\n.Home_text__1sCQa,\n.Home_pending_warning__2L76r {\n  line-height: 1.5;\n  font-size: 1.5rem;\n}\n\n@-webkit-keyframes Home_grow__3iiF- {\n    0% {\n        -webkit-transform: scale(1.04);\n                transform: scale(1.04);\n      }\n    50% {\n        -webkit-transform: scale(1);\n                transform: scale(1);\n      }\n      100% {\n        -webkit-transform: scale(1.04);\n                transform: scale(1.04);\n    }\n}\n\n@-moz-keyframes Home_grow__3iiF- {\n    0% {\n        -moz-transform: scale(1.04);\n             transform: scale(1.04);\n      }\n    50% {\n        -moz-transform: scale(1);\n             transform: scale(1);\n      }\n      100% {\n        -moz-transform: scale(1.04);\n             transform: scale(1.04);\n    }\n}\n\n@keyframes Home_grow__3iiF- {\n    0% {\n        -webkit-transform: scale(1.04);\n           -moz-transform: scale(1.04);\n                transform: scale(1.04);\n      }\n    50% {\n        -webkit-transform: scale(1);\n           -moz-transform: scale(1);\n                transform: scale(1);\n      }\n      100% {\n        -webkit-transform: scale(1.04);\n           -moz-transform: scale(1.04);\n                transform: scale(1.04);\n    }\n}\n\n.Home_pending_warning__2L76r {\n  color: rgb(199, 55, 55);\n  font-weight: 600;\n  -webkit-animation-duration: 5s;\n     -moz-animation-duration: 5s;\n          animation-duration: 5s; /* the duration of the animation */\n  -webkit-animation-timing-function: ease-in-out;\n     -moz-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; /* how the animation will behave */\n  -webkit-animation-delay: 0s;\n     -moz-animation-delay: 0s;\n          animation-delay: 0s; /* how long to delay the animation from starting */\n  -webkit-animation-iteration-count: infinite;\n     -moz-animation-iteration-count: infinite;\n          animation-iteration-count: infinite; /* how many times the animation will play */\n  -webkit-animation-name: Home_grow__3iiF-;\n     -moz-animation-name: Home_grow__3iiF-;\n          animation-name: Home_grow__3iiF-; /* the name of the animation we defined above */\n}\n\n.Home_code__axx2Y {\n  background: #fafafa;\n  border-radius: 5px;\n  padding: 0.75rem;\n  font-size: 1.1rem;\n  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,\n    Bitstream Vera Sans Mono, Courier New, monospace;\n}\n\n.Home_grid__2Ei2F {\n  display: -webkit-flex;\n  display: -moz-box;\n  display: flex;\n  -webkit-align-items: stretch;\n     -moz-box-align: stretch;\n          align-items: stretch;\n  -webkit-flex-wrap: wrap;\n          flex-wrap: wrap;\n  margin-top: 3rem;\n}\n\n.Home_grid__2Ei2F,\n.Home_text__1sCQa {\n  max-width: 800px;\n}\n\n.Home_card__2SdtB {\n  margin: 1rem;\n  -webkit-flex-basis: 45%;\n          flex-basis: 45%;\n  padding: 1.5rem;\n  text-align: left;\n  color: inherit;\n  text-decoration: none;\n  border: 1px solid #eaeaea;\n  border-radius: 10px;\n  -moz-transition: color 0.15s ease, border-color 0.15s ease;\n  transition: color 0.15s ease, border-color 0.15s ease;\n}\n\n.Home_card__2SdtB:hover,\n.Home_card__2SdtB:focus,\n.Home_card__2SdtB:active {\n  color: #0070f3;\n  border-color: #0070f3;\n}\n\n.Home_card__2SdtB h3 {\n  margin: 0 0 1rem 0;\n  font-size: 1.5rem;\n}\n\n.Home_card__2SdtB p {\n  margin: 0;\n  font-size: 1.25rem;\n  line-height: 1.5;\n}\n\n.Home_logo__1YbrH {\n  height: 1em;\n}\n\n.Home_create__SOEZL {\n  max-width: 800px;\n  margin: 50px auto;\n  text-align: center;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: flex;\n  -webkit-justify-content: space-between;\n     -moz-box-pack: justify;\n          justify-content: space-between;\n}\n.Home_create__SOEZL label {\n  text-align: left;\n  display: block;\n}\n.Home_create__SOEZL input {\n  width: 100%;\n  padding: 6px 10px;\n  margin: 10px 0;\n  border: 1px solid #ddd;\n  -moz-box-sizing: border-box;\n       box-sizing: border-box;\n  display: block;\n}\n.Home_create__SOEZL button {\n  margin: 20px auto 0 auto;\n  background: #3571f1;\n  color: #fff;\n  border: 0;\n  padding: 12px;\n  border-radius: 3px;\n  cursor: pointer;\n}\n\n@media (max-width: 600px) {\n  .Home_grid__2Ei2F {\n    -webkit-flex-direction: column;\n       -moz-box-orient: vertical;\n       -moz-box-direction: normal;\n            flex-direction: column;\n  }\n  .Home_grid__2Ei2F,\n  .Home_text__1sCQa {\n    width: 100%;\n  }\n}\n\n.Home_numeric__1Wnqa {\n  text-align: right;\n}\n", "",{"version":3,"sources":["webpack://styles/Home.module.css"],"names":[],"mappings":"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","sourcesContent":[".container {\n  min-height: 100vh;\n  padding: 0 0.5rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.content {\n  max-width: 800px;\n}\n\n.main {\n  padding: 5rem 0;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.footer {\n  width: 100%;\n  height: 100px;\n  border-top: 1px solid #eaeaea;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.footer img {\n  margin-left: 0.5rem;\n}\n\n.footer a {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.title a {\n  color: #0070f3;\n  text-decoration: none;\n}\n\n.title a:hover,\n.title a:focus,\n.title a:active {\n  text-decoration: underline;\n}\n\n.title {\n  margin: 0;\n  line-height: 1.15;\n  font-size: 4rem;\n}\n\n.subtitle {\n  margin: 0;\n  line-height: 1.15;\n  font-size: 3rem;\n}\n\n.title,\n.subtitle,\n.description,\n.pending_warning {\n  text-align: center;\n}\n\n.description,\n.text,\n.pending_warning {\n  line-height: 1.5;\n  font-size: 1.5rem;\n}\n\n@keyframes grow {\n    0% {\n        transform: scale(1.04);\n      }\n    50% {\n        transform: scale(1);\n      }\n      100% {\n        transform: scale(1.04);\n    }\n}\n\n.pending_warning {\n  color: rgb(199, 55, 55);\n  font-weight: 600;\n  animation-duration: 5s; /* the duration of the animation */\n  animation-timing-function: ease-in-out; /* how the animation will behave */\n  animation-delay: 0s; /* how long to delay the animation from starting */\n  animation-iteration-count: infinite; /* how many times the animation will play */\n  animation-name: grow; /* the name of the animation we defined above */\n}\n\n.code {\n  background: #fafafa;\n  border-radius: 5px;\n  padding: 0.75rem;\n  font-size: 1.1rem;\n  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,\n    Bitstream Vera Sans Mono, Courier New, monospace;\n}\n\n.grid {\n  display: flex;\n  align-items: stretch;\n  flex-wrap: wrap;\n  margin-top: 3rem;\n}\n\n.grid,\n.text {\n  max-width: 800px;\n}\n\n.card {\n  margin: 1rem;\n  flex-basis: 45%;\n  padding: 1.5rem;\n  text-align: left;\n  color: inherit;\n  text-decoration: none;\n  border: 1px solid #eaeaea;\n  border-radius: 10px;\n  transition: color 0.15s ease, border-color 0.15s ease;\n}\n\n.card:hover,\n.card:focus,\n.card:active {\n  color: #0070f3;\n  border-color: #0070f3;\n}\n\n.card h3 {\n  margin: 0 0 1rem 0;\n  font-size: 1.5rem;\n}\n\n.card p {\n  margin: 0;\n  font-size: 1.25rem;\n  line-height: 1.5;\n}\n\n.logo {\n  height: 1em;\n}\n\n.create {\n  max-width: 800px;\n  margin: 50px auto;\n  text-align: center;\n  display: flex;\n  justify-content: space-between;\n}\n.create label {\n  text-align: left;\n  display: block;\n}\n.create input {\n  width: 100%;\n  padding: 6px 10px;\n  margin: 10px 0;\n  border: 1px solid #ddd;\n  box-sizing: border-box;\n  display: block;\n}\n.create button {\n  margin: 20px auto 0 auto;\n  background: #3571f1;\n  color: #fff;\n  border: 0;\n  padding: 12px;\n  border-radius: 3px;\n  cursor: pointer;\n}\n\n@media (max-width: 600px) {\n  .grid {\n    flex-direction: column;\n  }\n  .grid,\n  .text {\n    width: 100%;\n  }\n}\n\n.numeric {\n  text-align: right;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": "Home_container__1EcsU",
	"content": "Home_content__2fqOz",
	"main": "Home_main__1x8gC",
	"footer": "Home_footer__1WdhD",
	"title": "Home_title__3DjR7",
	"subtitle": "Home_subtitle__3I2yI",
	"description": "Home_description__17Z4F",
	"pending_warning": "Home_pending_warning__2L76r",
	"text": "Home_text__1sCQa",
	"grow": "Home_grow__3iiF-",
	"code": "Home_code__axx2Y",
	"grid": "Home_grid__2Ei2F",
	"card": "Home_card__2SdtB",
	"logo": "Home_logo__1YbrH",
	"create": "Home_create__SOEZL",
	"numeric": "Home_numeric__1Wnqa"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./pages/experimentations/ardennes/index.js":
/*!**************************************************!*\
  !*** ./pages/experimentations/ardennes/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Ardennes; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/layout */ "./components/layout.js");
/* harmony import */ var _components_file__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/file */ "./components/file.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/footer */ "./components/footer.js");
/* harmony import */ var _components_login_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/login-form */ "./components/login-form.js");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _lib_cnaf__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../lib/cnaf */ "./lib/cnaf.js");
/* harmony import */ var _lib_historique__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../lib/historique */ "./lib/historique.js");





var _jsxFileName = "/home/q/code/qblanc/beta.gouv/analyse-flux-insertion/pages/experimentations/ardennes/index.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// Code avec orga fixe (Ardennes)









var reducer = Object(_lib_historique__WEBPACK_IMPORTED_MODULE_11__["reducerFactory"])('Expérimentation Ardennes - CNAF - Bénéficiaire');
var devMode = true;
function Ardennes() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      devFile = _useState[0],
      setDevFile = _useState[1];

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_3__["useReducer"])(reducer, [], _lib_historique__WEBPACK_IMPORTED_MODULE_11__["initReducer"]),
      runs = _useReducer[0],
      dispatchRuns = _useReducer[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      usersData = _useState2[0],
      setUsersData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      processedData = _useState3[0],
      setProcessedData = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isPending = _useState4[0],
      setIsPending = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      fileSize = _useState5[0],
      setFileSize = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isLogged = _useState6[0],
      setIsLogged = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    "tokenId": '',
    uid: '',
    client: ''
  }),
      token = _useState7[0],
      setToken = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    count: 0,
    size: 0
  }),
      promises = _useState8[0],
      setPromises = _useState8[1];

  var RDV_URL = "http://localhost:5000";
  var path = '/users';
  var url = "".concat(RDV_URL, "/api/v1").concat(path);

  var onLogin = function onLogin(tokenId, uid, client) {
    setToken(_objectSpread(_objectSpread({}, token), {}, {
      tokenId: tokenId,
      uid: uid,
      client: client
    }));
    setIsLogged(true);
  }; // useEffect(() => {
  //   if(devFile) {
  //     fileHandler(devFile)
  //   }
  // }, [devFile])


  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (promises.size > 0 && promises.count == promises.size) {
      setUsersData(processedData);
      var outWorkbook = xlsx__WEBPACK_IMPORTED_MODULE_4__["utils"].book_new();
      var outWorksheet = xlsx__WEBPACK_IMPORTED_MODULE_4__["utils"].json_to_sheet(processedData);
      xlsx__WEBPACK_IMPORTED_MODULE_4__["utils"].book_append_sheet(outWorkbook, outWorksheet, "DIVERGENCES"); // XLSX.utils.book_append_sheet(outWorkbook, xls.Sheets[xls.SheetNames[1]], "GRAPHIQUE");
      // XLSX.utils.book_append_sheet(outWorkbook, xls.Sheets[xls.SheetNames[2]], "Selection COA");

      xlsx__WEBPACK_IMPORTED_MODULE_4__["writeFile"](outWorkbook, "ardennes_rsa_".concat(Object(_lib_cnaf__WEBPACK_IMPORTED_MODULE_10__["getFormattedTime"])(), ".xlsx"));
    }
  }, [promises]);

  var fileHandler = function fileHandler(file) {
    if (devMode && file != devFile) {
      setDevFile(file);
    }

    setFileSize(file.size);
    setIsPending(true);
    var start_time = new Date();
    var reader = new FileReader();

    reader.onload = function (event) {
      var fileData = new Uint8Array(event.target.result);
      var xls = xlsx__WEBPACK_IMPORTED_MODULE_4__["read"](fileData, {
        type: 'array'
      });
      /* Get first worksheet */

      var worksheet = xls.Sheets[xls.SheetNames[0]]; // Limiter la capture aux colonnes A-T

      var range = xlsx__WEBPACK_IMPORTED_MODULE_4__["utils"].decode_range(worksheet['!ref']);
      range.s.c = 0; // 0 == XLSX.utils.decode_col("A")

      range.e.c = 19; // 19 == XLSX.utils.decode_col("T")

      var new_range = xlsx__WEBPACK_IMPORTED_MODULE_4__["utils"].encode_range(range);
      /* Convert array to json*/

      var jsonData = xlsx__WEBPACK_IMPORTED_MODULE_4__["utils"].sheet_to_json(worksheet, {
        blankrows: false,
        raw: false,
        defval: null,
        range: new_range
      });
      var test = jsonData.map(function (userData) {
        if (userData["Compte rdv"] != "O") {
          var user = {
            first_name: userData["PRENOM"].charAt(0).toUpperCase() + userData["PRENOM"].slice(1).toLowerCase(),
            last_name: userData["NOM"].charAt(0).toUpperCase() + userData["NOM"].slice(1).toLowerCase(),
            email: userData["MAIL"],
            phone_number: userData["TELEPHONE"].replace(/\s+/g, ''),
            organisation_ids: [1]
          };
          fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              "access-token": token.tokenId,
              uid: token.uid,
              client: token.client
            },
            body: JSON.stringify(user)
          }) // Compter le nombre de comptes créés et le nombre de fail ? Et logger pour les fails pour indiquer qui a fail ?
          .then(function (response) {
            if (response.status === 200) {
              userData["Compte rdv"] = "O";
              userData["RDV pris"] = "N";
            } else {
              userData["Compte rdv"] = "N";
              userData["RDV pris"] = "N";
            }

            setProcessedData([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(processedData), [userData]));
            setPromises({
              count: promises.count + 1,
              size: jsonData.length
            });
            return userData;
          }); // Récupérer le token d'invitation
          // Envoyer le mail à la place d'Isabelle
        } else {
          if (userData["RDV pris"] != "O") {// Vérifier si l'utilisateur a pris un rdv
            // si oui => userData["RDV pris"] = "O";
            // si non => userData["RDV pris"] = "N";
          }

          userData["RDV pris"] = "N";
          setProcessedData([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(processedData), [userData]));
          setPromises({
            count: promises.count + 1,
            size: jsonData.length
          });
          return userData;
        }
      });
      setIsPending(false);
      dispatchRuns({
        type: 'append',
        item: {
          timestamp: new Date().toISOString().slice(0, 19),
          duration: new Date() - start_time,
          filename: file.name,
          fileSize: file.size
        }
      });
    };

    reader.readAsArrayBuffer(file);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.container,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.main,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.title,
        children: "Exp\xE9rimentation Ardennes"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 9
      }, this), !isLogged && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: "create-forms",
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.create,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_login_form__WEBPACK_IMPORTED_MODULE_8__["default"], {
          onLogin: onLogin
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 11
      }, this), isLogged && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_file__WEBPACK_IMPORTED_MODULE_6__["default"], {
          fileHandler: fileHandler,
          isPending: isPending,
          fileSize: fileSize
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 11
        }, this), usersData && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.subtitle,
            children: "B\xE9n\xE9ficiaires RSA"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 13
          }, this), usersData.length == 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.description,
            children: "Aucun b\xE9n\xE9ficiaire dans le fichier"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 15
          }, this), usersData.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                  rowSpan: "2",
                  children: "Nom"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 167,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                  rowSpan: "2",
                  children: "Pr\xE9nom"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 168,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                  rowSpan: "2",
                  children: "Mail"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 169,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                  rowSpan: "2",
                  children: "T\xE9l\xE9phone"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 170,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 166,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 172,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 165,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
              children: usersData.map(function (user, index) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                    children: user["NOM"]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 176,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                    children: user["PRENOM"]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 177,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                    children: user["MAIL"]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 178,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                    children: user["TELEPHONE"]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 179,
                    columnNumber: 21
                  }, _this)]
                }, index, true, {
                  fileName: _jsxFileName,
                  lineNumber: 175,
                  columnNumber: 52
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 174,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 15
          }, this)]
        }, void 0, true), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
          subject: "Exp\xE9rimentation Ardennes",
          pourquoi: "Quel est l'objectif de cette exp\xE9rimentation\xA0?",
          text: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.text,
              children: "Faciliter le travail des agents du d\xE9partement et tester l'utilisation de l'application RDV-Solidarit\xE9s pour acc\xE9l\xE9rer la prise du premier rendez-vous d'orientation."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 191,
              columnNumber: 15
            }, this)
          }, void 0, false)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 11
        }, this)]
      }, void 0, true)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 140,
    columnNumber: 5
  }, this);
}

_s(Ardennes, "XHT4rh68IcBUXCLqV6mbbkeuzKk=");

_c = Ardennes;

var _c;

$RefreshReg$(_c, "Ardennes");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sb2dpbi1mb3JtLmpzIiwid2VicGFjazovL19OX0UvLi9saWIvY25hZi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXhwZXJpbWVudGF0aW9ucy9hcmRlbm5lcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJMb2dpbkZvcm0iLCJvbkxvZ2luIiwidXNlU3RhdGUiLCJsb2dpbiIsInNldExvZ2luIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImlzUGVuZGluZyIsInNldElzUGVuZGluZyIsIlJEVl9VUkwiLCJwcm9jZXNzIiwicGF0aCIsInVybCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInVzZXIiLCJlbWFpbCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJnZXQiLCJqc29uIiwiYWxlcnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImZyZXF1ZW5jeU5hbWVzIiwiTSIsIkkiLCJSIiwidHlwZU5hbWVzIiwiRCIsImdldEZvcm1hdHRlZFRpbWUiLCJ0b2RheSIsIkRhdGUiLCJ5IiwiZ2V0RnVsbFllYXIiLCJtIiwiZ2V0TW9udGgiLCJkIiwiZ2V0RGF0ZSIsImgiLCJnZXRIb3VycyIsIm1pIiwiZ2V0TWludXRlcyIsInMiLCJnZXRTZWNvbmRzIiwicmVkdWNlciIsInJlZHVjZXJGYWN0b3J5IiwiZGV2TW9kZSIsIkFyZGVubmVzIiwiZGV2RmlsZSIsInNldERldkZpbGUiLCJ1c2VSZWR1Y2VyIiwiaW5pdFJlZHVjZXIiLCJydW5zIiwiZGlzcGF0Y2hSdW5zIiwidXNlcnNEYXRhIiwic2V0VXNlcnNEYXRhIiwicHJvY2Vzc2VkRGF0YSIsInNldFByb2Nlc3NlZERhdGEiLCJmaWxlU2l6ZSIsInNldEZpbGVTaXplIiwiaXNMb2dnZWQiLCJzZXRJc0xvZ2dlZCIsInVpZCIsImNsaWVudCIsInRva2VuIiwic2V0VG9rZW4iLCJjb3VudCIsInNpemUiLCJwcm9taXNlcyIsInNldFByb21pc2VzIiwidG9rZW5JZCIsInVzZUVmZmVjdCIsIm91dFdvcmtib29rIiwiWExTWCIsImJvb2tfbmV3Iiwib3V0V29ya3NoZWV0IiwianNvbl90b19zaGVldCIsImJvb2tfYXBwZW5kX3NoZWV0IiwiZmlsZUhhbmRsZXIiLCJmaWxlIiwic3RhcnRfdGltZSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJldmVudCIsImZpbGVEYXRhIiwiVWludDhBcnJheSIsInJlc3VsdCIsInhscyIsInR5cGUiLCJ3b3Jrc2hlZXQiLCJTaGVldHMiLCJTaGVldE5hbWVzIiwicmFuZ2UiLCJkZWNvZGVfcmFuZ2UiLCJjIiwibmV3X3JhbmdlIiwiZW5jb2RlX3JhbmdlIiwianNvbkRhdGEiLCJzaGVldF90b19qc29uIiwiYmxhbmtyb3dzIiwicmF3IiwiZGVmdmFsIiwidGVzdCIsIm1hcCIsInVzZXJEYXRhIiwiZmlyc3RfbmFtZSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJ0b0xvd2VyQ2FzZSIsImxhc3RfbmFtZSIsInBob25lX251bWJlciIsInJlcGxhY2UiLCJvcmdhbmlzYXRpb25faWRzIiwic3RhdHVzIiwibGVuZ3RoIiwiaXRlbSIsInRpbWVzdGFtcCIsInRvSVNPU3RyaW5nIiwiZHVyYXRpb24iLCJmaWxlbmFtZSIsIm5hbWUiLCJyZWFkQXNBcnJheUJ1ZmZlciIsInN0eWxlcyIsImNvbnRhaW5lciIsIm1haW4iLCJ0aXRsZSIsImNyZWF0ZSIsInN1YnRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbmRleCIsInRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRWUsU0FBU0EsU0FBVCxPQUVaO0FBQUE7O0FBQUEsTUFEREMsT0FDQyxRQUREQSxPQUNDOztBQUFBLGtCQUN5QkMsc0RBQVEsQ0FB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YSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxXQUFXLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sT0FBTyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxRQUFRLFlBQVksT0FBTyxPQUFPLFlBQVksYUFBYSxPQUFPLEtBQUssS0FBSyxZQUFZLGNBQWMsTUFBTSxLQUFLLFlBQVksY0FBYyxNQUFNLEtBQUssWUFBWSxjQUFjLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxjQUFjLE1BQU0sS0FBSyxZQUFZLGFBQWEsY0FBYyxNQUFNLEtBQUssWUFBWSxhQUFhLGNBQWMsTUFBTSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSx5QkFBeUIsYUFBYSxhQUFhLHlCQUF5QixhQUFhLGFBQWEseUJBQXlCLGFBQWEsYUFBYSx5QkFBeUIsYUFBYSxhQUFhLHlCQUF5QixPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLE9BQU8sT0FBTyxLQUFLLFdBQVcsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFlBQVksVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxPQUFPLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsWUFBWSxXQUFXLFVBQVUsWUFB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UyxDQUFDa0QsR0FBVixDQUFjLFVBQUNqRyxJQUFELEVBQU80SCxLQUFQO0FBQUEsb0NBQWtCO0FBQUEsMENBQy9CO0FBQUEsOEJBQUs1SCxJQUFJLENBQUMsS0FBRDtBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRCtCLGVBRS9CO0FBQUEsOEJBQUtBLElBQUksQ0FBQyxRQUFEO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFGK0IsZUFHL0I7QUFBQSw4QkFBS0EsSUFBSSxDQUFDLE1BQUQ7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUgrQixlQUkvQjtBQUFBLDhCQUFLQSxJQUFJLENBQUMsV0FBRDtBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBSitCO0FBQUEsbUJBQVM0SCxLQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBQWxCO0FBQUEsZUFBZDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVRXO0FBQUEsd0JBSEgsZUFtQ1oscUVBQUMsMERBQUQ7QUFDRSxpQkFBTyxFQUFDLDZCQURWO0FBRUUsa0JBQVEsRUFBQyxzREFGWDtBQUdFLGNBQUksZUFBRTtBQUFBLG1DQUNKO0FBQUcsdUJBQVMsRUFBRVAsOERBQU0sQ0FBQ1EsSUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESTtBQUhSO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBbkNZO0FBQUEsc0JBWGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTJERDs7R0FyTHVCckYsUTs7S0FBQUEsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9leHBlcmltZW50YXRpb25zL2FyZGVubmVzLmIzZGM4M2QwOGRjYTAwZWQ1MTczLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbkZvcm0oe1xuICBvbkxvZ2luXG59KSB7XG4gIGNvbnN0IFtsb2dpbiwgc2V0TG9naW5dID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2lzUGVuZGluZywgc2V0SXNQZW5kaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgUkRWX1VSTCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1JEVl9ERU1PX1VSTDtcbiAgY29uc3QgcGF0aCA9ICcvYXV0aC9zaWduX2luJztcbiAgY29uc3QgdXJsID0gYCR7UkRWX1VSTH0vYXBpL3YxJHtwYXRofWA7XG5cblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IHVzZXIgPSB7IGVtYWlsOiBsb2dpbiwgcGFzc3dvcmQ6IHBhc3N3b3JkIH07XG4gICAgc2V0SXNQZW5kaW5nKHRydWUpO1xuXG4gICAgZmV0Y2godXJsLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodXNlcilcbiAgICB9KVxuXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBzZXRJc1BlbmRpbmcoZmFsc2UpO1xuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgIG9uTG9naW4ocmVzcG9uc2UuaGVhZGVycy5nZXQoXCJhY2Nlc3MtdG9rZW5cIiksIHJlc3BvbnNlLmhlYWRlcnMuZ2V0KFwidWlkXCIpLCByZXNwb25zZS5oZWFkZXJzLmdldChcImNsaWVudFwiKSk7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbGVydChgQXVjdW4gY29tcHRlIG4nZXN0IHJhdHRhY2jDqSDDoCBjZSBjb3VwbGUgZW1haWwvbW90IGRlIHBhc3NlLiBNZXJjaSBkZSB2w6lyaWZpZXIgdm9zIGlkZW50aWZpYW50cy5gKTtcbiAgICAgIH1cbiAgICB9KVxuICAgIC8vIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgLy8gICBjb25zb2xlLmxvZygnU3VjY2VzczonKTtcbiAgICAvLyB9KVxuICAgIC8vIC5jYXRjaChlcnJvciA9PiB7XG4gICAgLy8gICBhbGVydChgVW5lIGVycmV1ciBzJ2VzdCBwcm9kdWl0ZSwgbWVyY2kgZGUgcsOpZXNzYXllci5gKTtcbiAgICAvLyAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKTtcbiAgICAvLyB9KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGZvcm1cbiAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XG4gICAgPlxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJhZ2VudF9lbWFpbFwiPkVtYWlsPC9sYWJlbD5cbiAgICAgIDxpbnB1dFxuICAgICAgICBpZD1cImFnZW50X2VtYWlsXCJcbiAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgdmFsdWU9e2xvZ2lufVxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldExvZ2luKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgcmVxdWlyZWRcbiAgICAgIC8+XG4gICAgICA8bGFiZWwgaHRtbEZvcj1cImFnZW50X3Bhc3N3b3JkXCI+TW90IGRlIHBhc3NlPC9sYWJlbD5cbiAgICAgIDxpbnB1dFxuICAgICAgICBpZD1cImFnZW50X3Bhc3N3b3JkXCJcbiAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgcmVxdWlyZWRcbiAgICAgIC8+XG4gICAgICB7IWlzUGVuZGluZyAmJiA8YnV0dG9uPlNlIGNvbm5lY3RlcjwvYnV0dG9uPn1cbiAgICAgIHtpc1BlbmRpbmcgJiYgPGJ1dHRvbj5Db25uZXhpb24gZW4gY291cnM8L2J1dHRvbj59XG4gICAgPC9mb3JtPlxuICApXG59XG4iLCIvLyBUWVBFRkxVWFxuY29uc3QgZnJlcXVlbmN5TmFtZXMgPSB7XG4gIE06ICdNZW5zdWVsJyxcbiAgSTogJ1F1b3RpZGllbicsXG4gIFI6ICdSZXByaXNlJ1xufVxuXG4vLyBOQVRGTFVYXG5jb25zdCB0eXBlTmFtZXMgPSB7XG4gIEQ6ICdCw6luw6lmaWNpYWlyZXMnLFxuICBJOiAnSW5zdHJ1Y3Rpb25zJyxcbiAgUjogJ05vdXZlYXUgcmVjdWVpbCdcbn1cblxuZnVuY3Rpb24gZ2V0Rm9ybWF0dGVkVGltZSgpIHtcbiAgICB2YXIgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgIHZhciB5ID0gdG9kYXkuZ2V0RnVsbFllYXIoKTtcbiAgICAvLyBKYXZhU2NyaXB0IG1vbnRocyBhcmUgMC1iYXNlZC5cbiAgICB2YXIgbSA9IHRvZGF5LmdldE1vbnRoKCkgKyAxO1xuICAgIHZhciBkID0gdG9kYXkuZ2V0RGF0ZSgpO1xuICAgIHZhciBoID0gdG9kYXkuZ2V0SG91cnMoKTtcbiAgICB2YXIgbWkgPSB0b2RheS5nZXRNaW51dGVzKCk7XG4gICAgdmFyIHMgPSB0b2RheS5nZXRTZWNvbmRzKCk7XG4gICAgcmV0dXJuIHkgKyBcIl9cIiArIG0gKyBcIl9cIiArIGQgKyBcIl9cIiArIGggKyBcIl9cIiArIG1pICsgXCJfXCIgKyBzO1xufVxuXG5leHBvcnQgeyBmcmVxdWVuY3lOYW1lcywgdHlwZU5hbWVzLCBnZXRGb3JtYXR0ZWRUaW1lIH1cbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5Ib21lX2NvbnRhaW5lcl9fMUVjc1Uge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBwYWRkaW5nOiAwIDAuNXJlbTtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tb3otYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgIC1tb3otYm94LW9yaWVudDogdmVydGljYWw7XFxuICAgICAtbW96LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAtbW96LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgLW1vei1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLkhvbWVfY29udGVudF9fMmZxT3oge1xcbiAgbWF4LXdpZHRoOiA4MDBweDtcXG59XFxuXFxuLkhvbWVfbWFpbl9fMXg4Z0Mge1xcbiAgcGFkZGluZzogNXJlbSAwO1xcbiAgLXdlYmtpdC1mbGV4OiAxIDE7XFxuICAgICAtbW96LWJveC1mbGV4OiAxO1xcbiAgICAgICAgICBmbGV4OiAxIDE7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbW96LWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAtbW96LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgICAgLW1vei1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgLW1vei1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgIC1tb3otYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5Ib21lX2Zvb3Rlcl9fMVdkaEQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlYWVhZWE7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbW96LWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgLW1vei1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgIC1tb3otYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5Ib21lX2Zvb3Rlcl9fMVdkaEQgaW1nIHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxufVxcblxcbi5Ib21lX2Zvb3Rlcl9fMVdkaEQgYSB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbW96LWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgLW1vei1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgIC1tb3otYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5Ib21lX3RpdGxlX18zRGpSNyBhIHtcXG4gIGNvbG9yOiAjMDA3MGYzO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uSG9tZV90aXRsZV9fM0RqUjcgYTpob3ZlcixcXG4uSG9tZV90aXRsZV9fM0RqUjcgYTpmb2N1cyxcXG4uSG9tZV90aXRsZV9fM0RqUjcgYTphY3RpdmUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi5Ib21lX3RpdGxlX18zRGpSNyB7XFxuICBtYXJnaW46IDA7XFxuICBsaW5lLWhlaWdodDogMS4xNTtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG59XFxuXFxuLkhvbWVfc3VidGl0bGVfXzNJMnlJIHtcXG4gIG1hcmdpbjogMDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjE1O1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4uSG9tZV90aXRsZV9fM0RqUjcsXFxuLkhvbWVfc3VidGl0bGVfXzNJMnlJLFxcbi5Ib21lX2Rlc2NyaXB0aW9uX18xN1o0RixcXG4uSG9tZV9wZW5kaW5nX3dhcm5pbmdfXzJMNzZyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLkhvbWVfZGVzY3JpcHRpb25fXzE3WjRGLFxcbi5Ib21lX3RleHRfXzFzQ1FhLFxcbi5Ib21lX3BlbmRpbmdfd2FybmluZ19fMkw3NnIge1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgSG9tZV9ncm93X18zaWlGLSB7XFxuICAgIDAlIHtcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjA0KTtcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA0KTtcXG4gICAgICB9XFxuICAgIDUwJSB7XFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgICAgfVxcbiAgICAgIDEwMCUge1xcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDQpO1xcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDQpO1xcbiAgICB9XFxufVxcblxcbkAtbW96LWtleWZyYW1lcyBIb21lX2dyb3dfXzNpaUYtIHtcXG4gICAgMCUge1xcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMDQpO1xcbiAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDQpO1xcbiAgICAgIH1cXG4gICAgNTAlIHtcXG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgICB9XFxuICAgICAgMTAwJSB7XFxuICAgICAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4wNCk7XFxuICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNCk7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyBIb21lX2dyb3dfXzNpaUYtIHtcXG4gICAgMCUge1xcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDQpO1xcbiAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMDQpO1xcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDQpO1xcbiAgICAgIH1cXG4gICAgNTAlIHtcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgICB9XFxuICAgICAgMTAwJSB7XFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wNCk7XFxuICAgICAgICAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4wNCk7XFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNCk7XFxuICAgIH1cXG59XFxuXFxuLkhvbWVfcGVuZGluZ193YXJuaW5nX18yTDc2ciB7XFxuICBjb2xvcjogcmdiKDE5OSwgNTUsIDU1KTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogNXM7XFxuICAgICAtbW96LWFuaW1hdGlvbi1kdXJhdGlvbjogNXM7XFxuICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNXM7IC8qIHRoZSBkdXJhdGlvbiBvZiB0aGUgYW5pbWF0aW9uICovXFxuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbiAgICAgLW1vei1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXG4gICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7IC8qIGhvdyB0aGUgYW5pbWF0aW9uIHdpbGwgYmVoYXZlICovXFxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMHM7XFxuICAgICAtbW96LWFuaW1hdGlvbi1kZWxheTogMHM7XFxuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMHM7IC8qIGhvdyBsb25nIHRvIGRlbGF5IHRoZSBhbmltYXRpb24gZnJvbSBzdGFydGluZyAqL1xcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXG4gICAgIC1tb3otYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxuICAgICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlOyAvKiBob3cgbWFueSB0aW1lcyB0aGUgYW5pbWF0aW9uIHdpbGwgcGxheSAqL1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogSG9tZV9ncm93X18zaWlGLTtcXG4gICAgIC1tb3otYW5pbWF0aW9uLW5hbWU6IEhvbWVfZ3Jvd19fM2lpRi07XFxuICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBIb21lX2dyb3dfXzNpaUYtOyAvKiB0aGUgbmFtZSBvZiB0aGUgYW5pbWF0aW9uIHdlIGRlZmluZWQgYWJvdmUgKi9cXG59XFxuXFxuLkhvbWVfY29kZV9fYXh4Mlkge1xcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDAuNzVyZW07XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIGZvbnQtZmFtaWx5OiBNZW5sbywgTW9uYWNvLCBMdWNpZGEgQ29uc29sZSwgTGliZXJhdGlvbiBNb25vLCBEZWphVnUgU2FucyBNb25vLFxcbiAgICBCaXRzdHJlYW0gVmVyYSBTYW5zIE1vbm8sIENvdXJpZXIgTmV3LCBtb25vc3BhY2U7XFxufVxcblxcbi5Ib21lX2dyaWRfXzJFaTJGIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tb3otYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICAgICAtbW96LWJveC1hbGlnbjogc3RyZXRjaDtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICAtd2Via2l0LWZsZXgtd3JhcDogd3JhcDtcXG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcbiAgbWFyZ2luLXRvcDogM3JlbTtcXG59XFxuXFxuLkhvbWVfZ3JpZF9fMkVpMkYsXFxuLkhvbWVfdGV4dF9fMXNDUWEge1xcbiAgbWF4LXdpZHRoOiA4MDBweDtcXG59XFxuXFxuLkhvbWVfY2FyZF9fMlNkdEIge1xcbiAgbWFyZ2luOiAxcmVtO1xcbiAgLXdlYmtpdC1mbGV4LWJhc2lzOiA0NSU7XFxuICAgICAgICAgIGZsZXgtYmFzaXM6IDQ1JTtcXG4gIHBhZGRpbmc6IDEuNXJlbTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlYWVhZWE7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgLW1vei10cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLCBib3JkZXItY29sb3IgMC4xNXMgZWFzZTtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlO1xcbn1cXG5cXG4uSG9tZV9jYXJkX18yU2R0Qjpob3ZlcixcXG4uSG9tZV9jYXJkX18yU2R0Qjpmb2N1cyxcXG4uSG9tZV9jYXJkX18yU2R0QjphY3RpdmUge1xcbiAgY29sb3I6ICMwMDcwZjM7XFxuICBib3JkZXItY29sb3I6ICMwMDcwZjM7XFxufVxcblxcbi5Ib21lX2NhcmRfXzJTZHRCIGgzIHtcXG4gIG1hcmdpbjogMCAwIDFyZW0gMDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uSG9tZV9jYXJkX18yU2R0QiBwIHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxufVxcblxcbi5Ib21lX2xvZ29fXzFZYnJIIHtcXG4gIGhlaWdodDogMWVtO1xcbn1cXG5cXG4uSG9tZV9jcmVhdGVfX1NPRVpMIHtcXG4gIG1heC13aWR0aDogODAwcHg7XFxuICBtYXJnaW46IDUwcHggYXV0bztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tb3otYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgLW1vei1ib3gtcGFjazoganVzdGlmeTtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4uSG9tZV9jcmVhdGVfX1NPRVpMIGxhYmVsIHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLkhvbWVfY3JlYXRlX19TT0VaTCBpbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDZweCAxMHB4O1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5Ib21lX2NyZWF0ZV9fU09FWkwgYnV0dG9uIHtcXG4gIG1hcmdpbjogMjBweCBhdXRvIDAgYXV0bztcXG4gIGJhY2tncm91bmQ6ICMzNTcxZjE7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogMDtcXG4gIHBhZGRpbmc6IDEycHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLkhvbWVfZ3JpZF9fMkVpMkYge1xcbiAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgIC1tb3otYm94LW9yaWVudDogdmVydGljYWw7XFxuICAgICAgIC1tb3otYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuICAuSG9tZV9ncmlkX18yRWkyRixcXG4gIC5Ib21lX3RleHRfXzFzQ1FhIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxufVxcblxcbi5Ib21lX251bWVyaWNfXzFXbnFhIHtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNF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O1VBQWYsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osdUJBQWU7VUFBZixlQUFlO0VBQ2YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsMERBQXFEO0VBQXJELHFEQUFxRDtBQUN2RDs7QUFFQTs7O0VBR0UsY0FBYztFQUNkLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHFCQUFhO0VBQWIsaUJBQWE7RUFBYixhQUFhO0VBQ2Isc0NBQThCO0tBQTlCLHNCQUE4QjtVQUE5Qiw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsMkJBQXNCO09BQXRCLHNCQUFzQjtFQUN0QixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSx3QkFBd0I7RUFDeEIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxTQUFTO0VBQ1QsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0U7SUFDRSw4QkFBc0I7T0FBdEIseUJBQXNCO09BQXRCLDBCQUFzQjtZQUF0QixzQkFBc0I7RUFDeEI7RUFDQTs7SUFFRSxXQUFXO0VBQ2I7QUFDRjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY29udGFpbmVyIHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgcGFkZGluZzogMCAwLjVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgbWF4LXdpZHRoOiA4MDBweDtcXG59XFxuXFxuLm1haW4ge1xcbiAgcGFkZGluZzogNXJlbSAwO1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWFlYWVhO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZvb3RlciBpbWcge1xcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXG59XFxuXFxuLmZvb3RlciBhIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50aXRsZSBhIHtcXG4gIGNvbG9yOiAjMDA3MGYzO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4udGl0bGUgYTpob3ZlcixcXG4udGl0bGUgYTpmb2N1cyxcXG4udGl0bGUgYTphY3RpdmUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi50aXRsZSB7XFxuICBtYXJnaW46IDA7XFxuICBsaW5lLWhlaWdodDogMS4xNTtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG59XFxuXFxuLnN1YnRpdGxlIHtcXG4gIG1hcmdpbjogMDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjE1O1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4udGl0bGUsXFxuLnN1YnRpdGxlLFxcbi5kZXNjcmlwdGlvbixcXG4ucGVuZGluZ193YXJuaW5nIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmRlc2NyaXB0aW9uLFxcbi50ZXh0LFxcbi5wZW5kaW5nX3dhcm5pbmcge1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGdyb3cge1xcbiAgICAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDQpO1xcbiAgICAgIH1cXG4gICAgNTAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgICAgfVxcbiAgICAgIDEwMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA0KTtcXG4gICAgfVxcbn1cXG5cXG4ucGVuZGluZ193YXJuaW5nIHtcXG4gIGNvbG9yOiByZ2IoMTk5LCA1NSwgNTUpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNXM7IC8qIHRoZSBkdXJhdGlvbiBvZiB0aGUgYW5pbWF0aW9uICovXFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDsgLyogaG93IHRoZSBhbmltYXRpb24gd2lsbCBiZWhhdmUgKi9cXG4gIGFuaW1hdGlvbi1kZWxheTogMHM7IC8qIGhvdyBsb25nIHRvIGRlbGF5IHRoZSBhbmltYXRpb24gZnJvbSBzdGFydGluZyAqL1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7IC8qIGhvdyBtYW55IHRpbWVzIHRoZSBhbmltYXRpb24gd2lsbCBwbGF5ICovXFxuICBhbmltYXRpb24tbmFtZTogZ3JvdzsgLyogdGhlIG5hbWUgb2YgdGhlIGFuaW1hdGlvbiB3ZSBkZWZpbmVkIGFib3ZlICovXFxufVxcblxcbi5jb2RlIHtcXG4gIGJhY2tncm91bmQ6ICNmYWZhZmE7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiAwLjc1cmVtO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBmb250LWZhbWlseTogTWVubG8sIE1vbmFjbywgTHVjaWRhIENvbnNvbGUsIExpYmVyYXRpb24gTW9ubywgRGVqYVZ1IFNhbnMgTW9ubyxcXG4gICAgQml0c3RyZWFtIFZlcmEgU2FucyBNb25vLCBDb3VyaWVyIE5ldywgbW9ub3NwYWNlO1xcbn1cXG5cXG4uZ3JpZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBtYXJnaW4tdG9wOiAzcmVtO1xcbn1cXG5cXG4uZ3JpZCxcXG4udGV4dCB7XFxuICBtYXgtd2lkdGg6IDgwMHB4O1xcbn1cXG5cXG4uY2FyZCB7XFxuICBtYXJnaW46IDFyZW07XFxuICBmbGV4LWJhc2lzOiA0NSU7XFxuICBwYWRkaW5nOiAxLjVyZW07XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZWFlYWVhO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlO1xcbn1cXG5cXG4uY2FyZDpob3ZlcixcXG4uY2FyZDpmb2N1cyxcXG4uY2FyZDphY3RpdmUge1xcbiAgY29sb3I6ICMwMDcwZjM7XFxuICBib3JkZXItY29sb3I6ICMwMDcwZjM7XFxufVxcblxcbi5jYXJkIGgzIHtcXG4gIG1hcmdpbjogMCAwIDFyZW0gMDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uY2FyZCBwIHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxufVxcblxcbi5sb2dvIHtcXG4gIGhlaWdodDogMWVtO1xcbn1cXG5cXG4uY3JlYXRlIHtcXG4gIG1heC13aWR0aDogODAwcHg7XFxuICBtYXJnaW46IDUwcHggYXV0bztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5jcmVhdGUgbGFiZWwge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4uY3JlYXRlIGlucHV0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogNnB4IDEwcHg7XFxuICBtYXJnaW46IDEwcHggMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5jcmVhdGUgYnV0dG9uIHtcXG4gIG1hcmdpbjogMjBweCBhdXRvIDAgYXV0bztcXG4gIGJhY2tncm91bmQ6ICMzNTcxZjE7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogMDtcXG4gIHBhZGRpbmc6IDEycHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLmdyaWQge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbiAgLmdyaWQsXFxuICAudGV4dCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG5cXG4ubnVtZXJpYyB7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiSG9tZV9jb250YWluZXJfXzFFY3NVXCIsXG5cdFwiY29udGVudFwiOiBcIkhvbWVfY29udGVudF9fMmZxT3pcIixcblx0XCJtYWluXCI6IFwiSG9tZV9tYWluX18xeDhnQ1wiLFxuXHRcImZvb3RlclwiOiBcIkhvbWVfZm9vdGVyX18xV2RoRFwiLFxuXHRcInRpdGxlXCI6IFwiSG9tZV90aXRsZV9fM0RqUjdcIixcblx0XCJzdWJ0aXRsZVwiOiBcIkhvbWVfc3VidGl0bGVfXzNJMnlJXCIsXG5cdFwiZGVzY3JpcHRpb25cIjogXCJIb21lX2Rlc2NyaXB0aW9uX18xN1o0RlwiLFxuXHRcInBlbmRpbmdfd2FybmluZ1wiOiBcIkhvbWVfcGVuZGluZ193YXJuaW5nX18yTDc2clwiLFxuXHRcInRleHRcIjogXCJIb21lX3RleHRfXzFzQ1FhXCIsXG5cdFwiZ3Jvd1wiOiBcIkhvbWVfZ3Jvd19fM2lpRi1cIixcblx0XCJjb2RlXCI6IFwiSG9tZV9jb2RlX19heHgyWVwiLFxuXHRcImdyaWRcIjogXCJIb21lX2dyaWRfXzJFaTJGXCIsXG5cdFwiY2FyZFwiOiBcIkhvbWVfY2FyZF9fMlNkdEJcIixcblx0XCJsb2dvXCI6IFwiSG9tZV9sb2dvX18xWWJySFwiLFxuXHRcImNyZWF0ZVwiOiBcIkhvbWVfY3JlYXRlX19TT0VaTFwiLFxuXHRcIm51bWVyaWNcIjogXCJIb21lX251bWVyaWNfXzFXbnFhXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gQ29kZSBhdmVjIG9yZ2EgZml4ZSAoQXJkZW5uZXMpXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgKiBhcyBYTFNYIGZyb20gJ3hsc3gnO1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0J1xuaW1wb3J0IEZpbGVIYW5kbGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvZmlsZSdcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9mb290ZXInXG5pbXBvcnQgTG9naW5Gb3JtIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvbG9naW4tZm9ybSdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcblxuaW1wb3J0IHsgZ2V0Rm9ybWF0dGVkVGltZSB9IGZyb20gJy4uLy4uLy4uL2xpYi9jbmFmJ1xuaW1wb3J0IHsgaW5pdFJlZHVjZXIsIHJlZHVjZXJGYWN0b3J5IH0gZnJvbSAnLi4vLi4vLi4vbGliL2hpc3RvcmlxdWUnXG5cbmNvbnN0IHJlZHVjZXIgPSByZWR1Y2VyRmFjdG9yeSgnRXhww6lyaW1lbnRhdGlvbiBBcmRlbm5lcyAtIENOQUYgLSBCw6luw6lmaWNpYWlyZScpXG5jb25zdCBkZXZNb2RlID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT0gJ2RldmVsb3BtZW50J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcmRlbm5lcygpIHtcbiAgY29uc3QgW2RldkZpbGUsIHNldERldkZpbGVdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW3J1bnMsIGRpc3BhdGNoUnVuc10gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIFtdLCBpbml0UmVkdWNlcilcbiAgY29uc3QgW3VzZXJzRGF0YSwgc2V0VXNlcnNEYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbcHJvY2Vzc2VkRGF0YSwgc2V0UHJvY2Vzc2VkRGF0YV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtpc1BlbmRpbmcsIHNldElzUGVuZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtmaWxlU2l6ZSwgc2V0RmlsZVNpemVdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtpc0xvZ2dlZCwgc2V0SXNMb2dnZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbdG9rZW4sIHNldFRva2VuXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgICBcInRva2VuSWRcIjogJycsXG4gICAgICAgICAgdWlkOiAnJyxcbiAgICAgICAgICBjbGllbnQ6ICcnXG4gIH0pO1xuICBjb25zdCBbcHJvbWlzZXMsIHNldFByb21pc2VzXSA9IHVzZVN0YXRlKHtcbiAgICBjb3VudDogMCxcbiAgICBzaXplOiAwXG4gIH0pO1xuICBjb25zdCBSRFZfVVJMID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUkRWX0RFTU9fVVJMO1xuICBjb25zdCBwYXRoID0gJy91c2Vycyc7XG4gIGNvbnN0IHVybCA9IGAke1JEVl9VUkx9L2FwaS92MSR7cGF0aH1gO1xuXG5cbiAgY29uc3Qgb25Mb2dpbiA9ICh0b2tlbklkLCB1aWQsIGNsaWVudCkgPT4ge1xuICAgIHNldFRva2VuKHsgLi4udG9rZW4sIHRva2VuSWQ6IHRva2VuSWQsIHVpZDogdWlkLCBjbGllbnQ6IGNsaWVudCB9KTtcbiAgICBzZXRJc0xvZ2dlZCh0cnVlKTtcbiAgfTtcblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGlmKGRldkZpbGUpIHtcbiAgLy8gICAgIGZpbGVIYW5kbGVyKGRldkZpbGUpXG4gIC8vICAgfVxuICAvLyB9LCBbZGV2RmlsZV0pXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHByb21pc2VzLnNpemUgPiAwICYmIHByb21pc2VzLmNvdW50ID09IHByb21pc2VzLnNpemUpIHtcbiAgICAgIHNldFVzZXJzRGF0YShwcm9jZXNzZWREYXRhKTtcbiAgICAgIGNvbnN0IG91dFdvcmtib29rID0gWExTWC51dGlscy5ib29rX25ldygpO1xuICAgICAgY29uc3Qgb3V0V29ya3NoZWV0ID0gWExTWC51dGlscy5qc29uX3RvX3NoZWV0KHByb2Nlc3NlZERhdGEpO1xuICAgICAgWExTWC51dGlscy5ib29rX2FwcGVuZF9zaGVldChvdXRXb3JrYm9vaywgb3V0V29ya3NoZWV0LCBcIkRJVkVSR0VOQ0VTXCIpO1xuICAgICAgLy8gWExTWC51dGlscy5ib29rX2FwcGVuZF9zaGVldChvdXRXb3JrYm9vaywgeGxzLlNoZWV0c1t4bHMuU2hlZXROYW1lc1sxXV0sIFwiR1JBUEhJUVVFXCIpO1xuICAgICAgLy8gWExTWC51dGlscy5ib29rX2FwcGVuZF9zaGVldChvdXRXb3JrYm9vaywgeGxzLlNoZWV0c1t4bHMuU2hlZXROYW1lc1syXV0sIFwiU2VsZWN0aW9uIENPQVwiKTtcbiAgICAgIFhMU1gud3JpdGVGaWxlKG91dFdvcmtib29rLCBgYXJkZW5uZXNfcnNhXyR7Z2V0Rm9ybWF0dGVkVGltZSgpfS54bHN4YClcbiAgICB9XG4gIH0sIFtwcm9taXNlc10pXG5cbiAgY29uc3QgZmlsZUhhbmRsZXIgPSAoZmlsZSkgPT4ge1xuICAgIGlmIChkZXZNb2RlICYmIGZpbGUgIT0gZGV2RmlsZSkge1xuICAgICAgc2V0RGV2RmlsZShmaWxlKVxuICAgIH1cbiAgICBzZXRGaWxlU2l6ZShmaWxlLnNpemUpO1xuICAgIHNldElzUGVuZGluZyh0cnVlKTtcbiAgICBjb25zdCBzdGFydF90aW1lID0gbmV3IERhdGUoKTtcblxuICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXG4gICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgY29uc3QgZmlsZURhdGEgPSBuZXcgVWludDhBcnJheShldmVudC50YXJnZXQucmVzdWx0KTtcbiAgICAgIGNvbnN0IHhscyA9IFhMU1gucmVhZChmaWxlRGF0YSwge3R5cGU6J2FycmF5J30pXG4gICAgICAvKiBHZXQgZmlyc3Qgd29ya3NoZWV0ICovXG4gICAgICBjb25zdCB3b3Jrc2hlZXQgPSB4bHMuU2hlZXRzW3hscy5TaGVldE5hbWVzWzBdXTtcbiAgICAgIC8vIExpbWl0ZXIgbGEgY2FwdHVyZSBhdXggY29sb25uZXMgQS1UXG4gICAgICBjb25zdCByYW5nZSA9IFhMU1gudXRpbHMuZGVjb2RlX3JhbmdlKHdvcmtzaGVldFsnIXJlZiddKTtcbiAgICAgIHJhbmdlLnMuYyA9IDA7IC8vIDAgPT0gWExTWC51dGlscy5kZWNvZGVfY29sKFwiQVwiKVxuICAgICAgcmFuZ2UuZS5jID0gMTk7IC8vIDE5ID09IFhMU1gudXRpbHMuZGVjb2RlX2NvbChcIlRcIilcbiAgICAgIGNvbnN0IG5ld19yYW5nZSA9IFhMU1gudXRpbHMuZW5jb2RlX3JhbmdlKHJhbmdlKTtcbiAgICAgIC8qIENvbnZlcnQgYXJyYXkgdG8ganNvbiovXG4gICAgICBjb25zdCBqc29uRGF0YSA9IFhMU1gudXRpbHMuc2hlZXRfdG9fanNvbih3b3Jrc2hlZXQsIHsgYmxhbmtyb3dzOiBmYWxzZSwgcmF3OiBmYWxzZSwgZGVmdmFsOiBudWxsLCByYW5nZTogbmV3X3JhbmdlIH0pO1xuICAgICAgY29uc3QgdGVzdCA9IGpzb25EYXRhLm1hcCh1c2VyRGF0YSA9PiB7XG4gICAgICAgIGlmICh1c2VyRGF0YVtcIkNvbXB0ZSByZHZcIl0gIT0gXCJPXCIpIHtcbiAgICAgICAgICBjb25zdCB1c2VyID0geyBmaXJzdF9uYW1lOiB1c2VyRGF0YVtcIlBSRU5PTVwiXS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHVzZXJEYXRhW1wiUFJFTk9NXCJdLnNsaWNlKDEpLnRvTG93ZXJDYXNlKCksIGxhc3RfbmFtZTogdXNlckRhdGFbXCJOT01cIl0uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB1c2VyRGF0YVtcIk5PTVwiXS5zbGljZSgxKS50b0xvd2VyQ2FzZSgpLCBlbWFpbDogdXNlckRhdGFbXCJNQUlMXCJdLCBwaG9uZV9udW1iZXI6IHVzZXJEYXRhW1wiVEVMRVBIT05FXCJdLnJlcGxhY2UoL1xccysvZywgJycpLCBvcmdhbmlzYXRpb25faWRzOiBbMV0gfTtcbiAgICAgICAgICBmZXRjaCh1cmwsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICBcImFjY2Vzcy10b2tlblwiOiB0b2tlbi50b2tlbklkLFxuICAgICAgICAgICAgICB1aWQ6IHRva2VuLnVpZCxcbiAgICAgICAgICAgICAgY2xpZW50OiB0b2tlbi5jbGllbnRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh1c2VyKVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLy8gQ29tcHRlciBsZSBub21icmUgZGUgY29tcHRlcyBjcsOpw6lzIGV0IGxlIG5vbWJyZSBkZSBmYWlsID8gRXQgbG9nZ2VyIHBvdXIgbGVzIGZhaWxzIHBvdXIgaW5kaXF1ZXIgcXVpIGEgZmFpbCA/XG5cbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICB1c2VyRGF0YVtcIkNvbXB0ZSByZHZcIl0gPSBcIk9cIjtcbiAgICAgICAgICAgICAgdXNlckRhdGFbXCJSRFYgcHJpc1wiXSA9IFwiTlwiO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdXNlckRhdGFbXCJDb21wdGUgcmR2XCJdID0gXCJOXCI7XG4gICAgICAgICAgICAgIHVzZXJEYXRhW1wiUkRWIHByaXNcIl0gPSBcIk5cIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldFByb2Nlc3NlZERhdGEoWy4uLnByb2Nlc3NlZERhdGEsIHVzZXJEYXRhXSk7XG4gICAgICAgICAgICBzZXRQcm9taXNlcyh7IGNvdW50OiBwcm9taXNlcy5jb3VudCArIDEsIHNpemU6IGpzb25EYXRhLmxlbmd0aH0pXG4gICAgICAgICAgICByZXR1cm4gdXNlckRhdGE7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAvLyBSw6ljdXDDqXJlciBsZSB0b2tlbiBkJ2ludml0YXRpb25cbiAgICAgICAgICAvLyBFbnZveWVyIGxlIG1haWwgw6AgbGEgcGxhY2UgZCdJc2FiZWxsZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh1c2VyRGF0YVtcIlJEViBwcmlzXCJdICE9IFwiT1wiKSB7XG4gICAgICAgICAgICAvLyBWw6lyaWZpZXIgc2kgbCd1dGlsaXNhdGV1ciBhIHByaXMgdW4gcmR2XG4gICAgICAgICAgICAvLyBzaSBvdWkgPT4gdXNlckRhdGFbXCJSRFYgcHJpc1wiXSA9IFwiT1wiO1xuICAgICAgICAgICAgLy8gc2kgbm9uID0+IHVzZXJEYXRhW1wiUkRWIHByaXNcIl0gPSBcIk5cIjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdXNlckRhdGFbXCJSRFYgcHJpc1wiXSA9IFwiTlwiO1xuICAgICAgICAgIHNldFByb2Nlc3NlZERhdGEoWy4uLnByb2Nlc3NlZERhdGEsIHVzZXJEYXRhXSk7XG4gICAgICAgICAgc2V0UHJvbWlzZXMoeyBjb3VudDogcHJvbWlzZXMuY291bnQgKyAxLCBzaXplOiBqc29uRGF0YS5sZW5ndGh9KVxuICAgICAgICAgIHJldHVybiB1c2VyRGF0YTtcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgc2V0SXNQZW5kaW5nKGZhbHNlKTtcblxuICAgICAgZGlzcGF0Y2hSdW5zKHtcbiAgICAgICAgdHlwZTogJ2FwcGVuZCcsXG4gICAgICAgIGl0ZW06IHtcbiAgICAgICAgICB0aW1lc3RhbXA6IChuZXcgRGF0ZSgpKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDE5KSxcbiAgICAgICAgICBkdXJhdGlvbjogKG5ldyBEYXRlKCkpIC0gc3RhcnRfdGltZSxcbiAgICAgICAgICBmaWxlbmFtZTogZmlsZS5uYW1lLFxuICAgICAgICAgIGZpbGVTaXplOiBmaWxlLnNpemUsXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihmaWxlKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPExheW91dCBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XG4gICAgICAgICAgRXhww6lyaW1lbnRhdGlvbiBBcmRlbm5lc1xuICAgICAgICA8L2gxPlxuXG4gICAgICAgIHshaXNMb2dnZWQgJiZcbiAgICAgICAgICA8ZGl2IGlkPVwiY3JlYXRlLWZvcm1zXCIgY2xhc3NOYW1lPXtzdHlsZXMuY3JlYXRlfT5cbiAgICAgICAgICAgIDxMb2dpbkZvcm0gb25Mb2dpbj17b25Mb2dpbn0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuXG4gICAgICAgIHsgaXNMb2dnZWQgJiYgPD5cbiAgICAgICAgICA8RmlsZUhhbmRsZXIgZmlsZUhhbmRsZXI9e2ZpbGVIYW5kbGVyfSBpc1BlbmRpbmc9e2lzUGVuZGluZ30gZmlsZVNpemU9e2ZpbGVTaXplfSAvPlxuXG4gICAgICAgICAgeyB1c2Vyc0RhdGEgJiYgPD5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5zdWJ0aXRsZX0+XG4gICAgICAgICAgICAgIELDqW7DqWZpY2lhaXJlcyBSU0FcbiAgICAgICAgICAgIDwvaDI+XG5cbiAgICAgICAgICAgIHsgdXNlcnNEYXRhLmxlbmd0aCA9PSAwICYmXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5BdWN1biBiw6luw6lmaWNpYWlyZSBkYW5zIGxlIGZpY2hpZXI8L3A+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB7IHVzZXJzRGF0YS5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICAgIDx0YWJsZT5cbiAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPk5vbTwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPlByw6lub208L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5NYWlsPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+VMOpbMOpcGhvbmU8L3RoPlxuICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgIDx0cj48L3RyPlxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAge3VzZXJzRGF0YS5tYXAoKHVzZXIsIGluZGV4KSA9PiAoPHRyIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3VzZXJbXCJOT01cIl19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPnt1c2VyW1wiUFJFTk9NXCJdfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57dXNlcltcIk1BSUxcIl19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPnt1c2VyW1wiVEVMRVBIT05FXCJdfTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC8+fVxuXG4gICAgICAgICAgPEZvb3RlclxuICAgICAgICAgICAgc3ViamVjdD1cIkV4cMOpcmltZW50YXRpb24gQXJkZW5uZXNcIlxuICAgICAgICAgICAgcG91cnF1b2k9XCJRdWVsIGVzdCBsJ29iamVjdGlmIGRlIGNldHRlIGV4cMOpcmltZW50YXRpb24mbmJzcDs/XCJcbiAgICAgICAgICAgIHRleHQ9ezw+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRleHR9PkZhY2lsaXRlciBsZSB0cmF2YWlsIGRlcyBhZ2VudHMgZHUgZMOpcGFydGVtZW50IGV0IHRlc3RlciBsJ3V0aWxpc2F0aW9uIGRlIGwnYXBwbGljYXRpb24gUkRWLVNvbGlkYXJpdMOpcyBwb3VyIGFjY8OpbMOpcmVyIGxhIHByaXNlIGR1IHByZW1pZXIgcmVuZGV6LXZvdXMgZCdvcmllbnRhdGlvbi48L3A+XG4gICAgICAgICAgICA8Lz59XG4gICAgICAgICAgLz5cbiAgICAgICAgPC8+fVxuICAgICAgPC9tYWluPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9