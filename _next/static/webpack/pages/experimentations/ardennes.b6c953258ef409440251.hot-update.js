webpackHotUpdate_N_E("pages/experimentations/ardennes",{

/***/ "./components/loginForm.js":
/*!*********************************!*\
  !*** ./components/loginForm.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoginForm; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "/home/q/code/qblanc/beta.gouv/analyse-flux-insertion/components/loginForm.js",
    _s = $RefreshSig$();



function LoginForm(_ref) {
  _s();

  var handleLogin = _ref.handleLogin,
      rdvUrl = _ref.rdvUrl;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      login = _useState[0],
      setLogin = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      password = _useState2[0],
      setPassword = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isPending = _useState3[0],
      setIsPending = _useState3[1];

  var url = "".concat(rdvUrl, "/api/v1/auth/sign_in");

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    var user = {
      email: login,
      password: password
    };
    setIsPending(true);
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    }).then(function (response) {
      setIsPending(false);

      if (response.ok) {
        handleLogin(response.headers.get("access-token"), response.headers.get("uid"), response.headers.get("client"));
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
      lineNumber: 46,
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
      lineNumber: 47,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
      htmlFor: "agent_password",
      children: "Mot de passe"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      id: "agent_password",
      type: "password",
      value: password,
      onChange: function onChange(e) {
        return setPassword(e.target.value);
      },
      required: true,
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.margin_bottom
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, this), !isPending && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.button,
      children: "Se connecter"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 22
    }, this), isPending && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.button,
      children: "Connexion en cours"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 5
  }, this);
}

_s(LoginForm, "QqqA1PbH0RiAgevNAVPaPiVr2tQ=");

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

/***/ "./models/Applicant.js":
/*!*****************************!*\
  !*** ./models/Applicant.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Applicant; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Application__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Application */ "./models/Application.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var Applicant = /*#__PURE__*/function () {
  function Applicant(dom) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Applicant);

    this.dom = dom;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Applicant, [{
    key: "personalData",
    value: function personalData() {
      return _objectSpread({
        rsaApplicationNumber: this.rsaApplicationNumber,
        socialSecurityNumber: this.socialSecurityNumber,
        lastName: this.lastName,
        firstName: this.firstName,
        role: this.role
      }, this.contactInfos());
    }
  }, {
    key: "contactInfos",
    value: function contactInfos() {
      return _objectSpread(_objectSpread({}, this.phoneNumber && {
        phoneNumber: this.phoneNumber
      }), this.emailAddress && {
        emailAddress: this.emailAddress
      });
    }
  }, {
    key: "isTopEntrant",
    value: function isTopEntrant() {
      return this.topEntrant === "1";
    }
  }, {
    key: "eligibleAsNew",
    value: function eligibleAsNew() {
      return this.application.eligibleAsNew() && (this.withDroitsEtDevoirs() || this.eligibleAsNewInFoyer());
    }
  }, {
    key: "eligibleAsNewInFoyer",
    value: function eligibleAsNewInFoyer() {
      return this.inFoyerWithDroitsEtDevoirs() && ["ENF", "AUT"].includes(this.role);
    }
  }, {
    key: "inFoyerWithDroitsEtDevoirs",
    value: function inFoyerWithDroitsEtDevoirs() {
      return this.topFoyerDroitsEtDevoirs === "1";
    }
  }, {
    key: "withDroitsEtDevoirs",
    value: function withDroitsEtDevoirs() {
      return this.topDroitsEtDevoirs === "1";
    }
  }, {
    key: "lastName",
    get: function get() {
      var _this$dom$getElements;

      return (_this$dom$getElements = this.dom.getElementsByTagName("NOM")[0]) === null || _this$dom$getElements === void 0 ? void 0 : _this$dom$getElements.innerHTML;
    }
  }, {
    key: "firstName",
    get: function get() {
      var _this$dom$getElements2;

      return (_this$dom$getElements2 = this.dom.getElementsByTagName("PRENOM")[0]) === null || _this$dom$getElements2 === void 0 ? void 0 : _this$dom$getElements2.innerHTML;
    }
  }, {
    key: "role",
    get: function get() {
      var _this$dom$getElements3;

      return (_this$dom$getElements3 = this.dom.getElementsByTagName("ROLEPERS")[0]) === null || _this$dom$getElements3 === void 0 ? void 0 : _this$dom$getElements3.innerHTML;
    }
  }, {
    key: "topEntrant",
    get: function get() {
      var _this$dom$getElements4;

      return (_this$dom$getElements4 = this.dom.getElementsByTagName("TOPPERSENTDRODEVORSA")[0]) === null || _this$dom$getElements4 === void 0 ? void 0 : _this$dom$getElements4.innerHTML;
    }
  }, {
    key: "topDroitsEtDevoirs",
    get: function get() {
      var _this$dom$getElements5;

      return (_this$dom$getElements5 = this.dom.getElementsByTagName("TOPPERSDRODEVORSA")[0]) === null || _this$dom$getElements5 === void 0 ? void 0 : _this$dom$getElements5.innerHTML;
    }
  }, {
    key: "socioProfessionalData",
    get: function get() {
      var _this$dom$getElements6;

      return (_this$dom$getElements6 = this.dom.getElementsByTagName("DonneesSocioProfessionnelles")[0]) === null || _this$dom$getElements6 === void 0 ? void 0 : _this$dom$getElements6.innerHTML;
    }
  }, {
    key: "nationality",
    get: function get() {
      var _this$dom$getElements7;

      return (_this$dom$getElements7 = this.dom.getElementsByTagName("NATI")[0]) === null || _this$dom$getElements7 === void 0 ? void 0 : _this$dom$getElements7.innerHTML;
    }
  }, {
    key: "activity",
    get: function get() {
      var _this$dom$getElements8;

      return (_this$dom$getElements8 = this.dom.getElementsByTagName("ACT")[0]) === null || _this$dom$getElements8 === void 0 ? void 0 : _this$dom$getElements8.innerHTML;
    }
  }, {
    key: "application",
    get: function get() {
      return new _Application__WEBPACK_IMPORTED_MODULE_3__["default"](this.dom.parentNode);
    }
  }, {
    key: "rsaApplicationNumber",
    get: function get() {
      return this.application.rsaApplicationNumber;
    }
  }, {
    key: "emailAddress",
    get: function get() {
      return this.application.emailAddress;
    }
  }, {
    key: "applicationStatusCode",
    get: function get() {
      return this.application.statusCode;
    }
  }, {
    key: "applicationSuspensionMotive",
    get: function get() {
      return this.application.suspensionMotive;
    }
  }, {
    key: "phoneNumber",
    get: function get() {
      return this.application.phoneNumber;
    }
  }, {
    key: "socialSecurityNumber",
    get: function get() {
      return this.application.socialSecurityNumber;
    }
  }, {
    key: "topFoyerDroitsEtDevoirs",
    get: function get() {
      return this.application.topFoyerDroitsEtDevoirs;
    } // string used to identify applicants

  }, {
    key: "id",
    get: function get() {
      return [this.rsaApplicationNumber, this.lastName.split(" ").join("-"), this.firstName.split(" ").join("-"), this.role].join("-");
    }
  }]);

  return Applicant;
}();



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
___CSS_LOADER_EXPORT___.push([module.i, ".Home_container__1EcsU {\n  min-height: 100vh;\n  padding: 0 0.5rem;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: flex;\n  -webkit-flex-direction: column;\n     -moz-box-orient: vertical;\n     -moz-box-direction: normal;\n          flex-direction: column;\n  -webkit-justify-content: center;\n     -moz-box-pack: center;\n          justify-content: center;\n  -webkit-align-items: center;\n     -moz-box-align: center;\n          align-items: center;\n}\n\n.Home_content__2fqOz {\n  max-width: 800px;\n}\n\n.Home_main__1x8gC {\n  padding: 5rem 0;\n  -webkit-flex: 1 1;\n     -moz-box-flex: 1;\n          flex: 1 1;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: flex;\n  -webkit-flex-direction: column;\n     -moz-box-orient: vertical;\n     -moz-box-direction: normal;\n          flex-direction: column;\n  -webkit-justify-content: center;\n     -moz-box-pack: center;\n          justify-content: center;\n  -webkit-align-items: center;\n     -moz-box-align: center;\n          align-items: center;\n}\n\n.Home_footer__1WdhD {\n  width: 100%;\n  height: 100px;\n  border-top: 1px solid #eaeaea;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: flex;\n  -webkit-justify-content: center;\n     -moz-box-pack: center;\n          justify-content: center;\n  -webkit-align-items: center;\n     -moz-box-align: center;\n          align-items: center;\n}\n\n.Home_footer__1WdhD img {\n  margin-left: 0.5rem;\n}\n\n.Home_footer__1WdhD a {\n  display: -webkit-flex;\n  display: -moz-box;\n  display: flex;\n  -webkit-justify-content: center;\n     -moz-box-pack: center;\n          justify-content: center;\n  -webkit-align-items: center;\n     -moz-box-align: center;\n          align-items: center;\n}\n\n.Home_title__3DjR7 a {\n  color: #0070f3;\n  text-decoration: none;\n}\n\n.Home_title__3DjR7 a:hover,\n.Home_title__3DjR7 a:focus,\n.Home_title__3DjR7 a:active {\n  text-decoration: underline;\n}\n\n.Home_title__3DjR7 {\n  margin: 0;\n  line-height: 1.15;\n  font-size: 4rem;\n}\n\n.Home_applicants_table__J2B93 {\n  table-layout: fixed;\n}\n\n.Home_applicants_table__J2B93 td {\n  overflow-wrap: break-word;\n}\n.Home_applicants_table__J2B93 th {\n  overflow-wrap: break-word;\n}\n\n.Home_subtitle__3I2yI {\n  margin: 0;\n  line-height: 1.15;\n  font-size: 3rem;\n  font-weight: bold;\n}\n\n.Home_margin_bottom__3OZW9 {\n  margin-bottom: 20px !important;\n}\n\n.Home_title__3DjR7,\n.Home_subtitle__3I2yI,\n.Home_description__17Z4F,\n.Home_pending_warning__2L76r,\n.Home_center__2Zxdr {\n  text-align: center;\n}\n\n.Home_description__17Z4F,\n.Home_text__1sCQa,\n.Home_pending_warning__2L76r {\n  line-height: 1.5;\n  font-size: 1.5rem;\n}\n\n@-webkit-keyframes Home_grow__3iiF- {\n    0% {\n        -webkit-transform: scale(1.04);\n                transform: scale(1.04);\n      }\n    50% {\n        -webkit-transform: scale(1);\n                transform: scale(1);\n      }\n      100% {\n        -webkit-transform: scale(1.04);\n                transform: scale(1.04);\n    }\n}\n\n@-moz-keyframes Home_grow__3iiF- {\n    0% {\n        -moz-transform: scale(1.04);\n             transform: scale(1.04);\n      }\n    50% {\n        -moz-transform: scale(1);\n             transform: scale(1);\n      }\n      100% {\n        -moz-transform: scale(1.04);\n             transform: scale(1.04);\n    }\n}\n\n@keyframes Home_grow__3iiF- {\n    0% {\n        -webkit-transform: scale(1.04);\n           -moz-transform: scale(1.04);\n                transform: scale(1.04);\n      }\n    50% {\n        -webkit-transform: scale(1);\n           -moz-transform: scale(1);\n                transform: scale(1);\n      }\n      100% {\n        -webkit-transform: scale(1.04);\n           -moz-transform: scale(1.04);\n                transform: scale(1.04);\n    }\n}\n\n.Home_table_container__wvkX7 {\n  margin-top: 40px;\n  margin-bottom: 40px;\n  text-align: center;\n}\n\n.Home_pending_warning__2L76r {\n  color: rgb(199, 55, 55);\n  font-weight: 600;\n  -webkit-animation-duration: 5s;\n     -moz-animation-duration: 5s;\n          animation-duration: 5s; /* the duration of the animation */\n  -webkit-animation-timing-function: ease-in-out;\n     -moz-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; /* how the animation will behave */\n  -webkit-animation-delay: 0s;\n     -moz-animation-delay: 0s;\n          animation-delay: 0s; /* how long to delay the animation from starting */\n  -webkit-animation-iteration-count: infinite;\n     -moz-animation-iteration-count: infinite;\n          animation-iteration-count: infinite; /* how many times the animation will play */\n  -webkit-animation-name: Home_grow__3iiF-;\n     -moz-animation-name: Home_grow__3iiF-;\n          animation-name: Home_grow__3iiF-; /* the name of the animation we defined above */\n}\n\n.Home_code__axx2Y {\n  background: #fafafa;\n  border-radius: 5px;\n  padding: 0.75rem;\n  font-size: 1.1rem;\n  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,\n    Bitstream Vera Sans Mono, Courier New, monospace;\n}\n\n.Home_bold__2tKez {\n  font-weight: bold;\n}\n\n.Home_legende__3f4un {\n  display: -webkit-flex !important;\n  display: -moz-box !important;\n  display: flex !important;\n  -webkit-justify-content: space-around;\n          justify-content: space-around;\n  margin: 0 3rem;\n}\n\n.Home_legende_title__2Brj_ {\n  font-weight: bold;\n  text-decoration: underline;\n}\n\n.Home_legende_box__32b1I {\n  width: 40%;\n  /* margin: 0 1rem; */\n}\n\n.Home_grid__2Ei2F {\n  display: -webkit-flex;\n  display: -moz-box;\n  display: flex;\n  -webkit-align-items: stretch;\n     -moz-box-align: stretch;\n          align-items: stretch;\n  -webkit-flex-wrap: wrap;\n          flex-wrap: wrap;\n  margin-top: 3rem;\n}\n\n.Home_grid__2Ei2F,\n.Home_text__1sCQa {\n  max-width: 800px;\n}\n\n.Home_card__2SdtB {\n  margin: 1rem;\n  -webkit-flex-basis: 45%;\n          flex-basis: 45%;\n  padding: 1.5rem;\n  text-align: left;\n  color: inherit;\n  text-decoration: none;\n  border: 1px solid #eaeaea;\n  border-radius: 10px;\n  -moz-transition: color 0.15s ease, border-color 0.15s ease;\n  transition: color 0.15s ease, border-color 0.15s ease;\n}\n\n.Home_card__2SdtB:hover,\n.Home_card__2SdtB:focus,\n.Home_card__2SdtB:active {\n  color: #0070f3;\n  border-color: #0070f3;\n}\n\n.Home_card__2SdtB h3 {\n  margin: 0 0 1rem 0;\n  font-size: 1.5rem;\n}\n\n.Home_card__2SdtB p {\n  margin: 0;\n  font-size: 1.25rem;\n  line-height: 1.5;\n}\n\n.Home_logo__1YbrH {\n  height: 1em;\n}\n\n.Home_create__SOEZL {\n  max-width: 800px;\n  margin: 50px auto 20px auto;\n  text-align: center;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: flex;\n  -webkit-justify-content: space-between;\n     -moz-box-pack: justify;\n          justify-content: space-between;\n}\n.Home_create__SOEZL label {\n  text-align: left;\n  display: block;\n}\n.Home_create__SOEZL input {\n  width: 100%;\n  padding: 6px 10px;\n  margin: 10px 0;\n  border: 1px solid #ddd;\n  -moz-box-sizing: border-box;\n       box-sizing: border-box;\n  display: block;\n}\n.Home_button__Xc9mA {\n  margin: 20px auto 20px auto;\n  background: white;\n  color: black;\n  font-weight: bold;\n  border: 2px solid black;\n  padding: 12px;\n  border-radius: 0px;\n  cursor: pointer;\n}\n\n.Home_button_group__2mPgc {\n  display: -webkit-flex;\n  display: -moz-box;\n  display: flex;\n  -webkit-justify-content: space-between;\n     -moz-box-pack: justify;\n          justify-content: space-between;\n}\n\n.Home_button__Xc9mA:hover {\n  background: black;\n  color: white;\n}\n\n@media (max-width: 600px) {\n  .Home_grid__2Ei2F {\n    -webkit-flex-direction: column;\n       -moz-box-orient: vertical;\n       -moz-box-direction: normal;\n            flex-direction: column;\n  }\n  .Home_grid__2Ei2F,\n  .Home_text__1sCQa {\n    width: 100%;\n  }\n}\n\n.Home_numeric__1Wnqa {\n  text-align: right;\n}\n", "",{"version":3,"sources":["webpack://styles/Home.module.css"],"names":[],"mappings":"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","sourcesContent":[".container {\n  min-height: 100vh;\n  padding: 0 0.5rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.content {\n  max-width: 800px;\n}\n\n.main {\n  padding: 5rem 0;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.footer {\n  width: 100%;\n  height: 100px;\n  border-top: 1px solid #eaeaea;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.footer img {\n  margin-left: 0.5rem;\n}\n\n.footer a {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.title a {\n  color: #0070f3;\n  text-decoration: none;\n}\n\n.title a:hover,\n.title a:focus,\n.title a:active {\n  text-decoration: underline;\n}\n\n.title {\n  margin: 0;\n  line-height: 1.15;\n  font-size: 4rem;\n}\n\n.applicants_table {\n  table-layout: fixed;\n}\n\n.applicants_table td {\n  overflow-wrap: break-word;\n}\n.applicants_table th {\n  overflow-wrap: break-word;\n}\n\n.subtitle {\n  margin: 0;\n  line-height: 1.15;\n  font-size: 3rem;\n  font-weight: bold;\n}\n\n.margin_bottom {\n  margin-bottom: 20px !important;\n}\n\n.title,\n.subtitle,\n.description,\n.pending_warning,\n.center {\n  text-align: center;\n}\n\n.description,\n.text,\n.pending_warning {\n  line-height: 1.5;\n  font-size: 1.5rem;\n}\n\n@keyframes grow {\n    0% {\n        transform: scale(1.04);\n      }\n    50% {\n        transform: scale(1);\n      }\n      100% {\n        transform: scale(1.04);\n    }\n}\n\n.table_container {\n  margin-top: 40px;\n  margin-bottom: 40px;\n  text-align: center;\n}\n\n.pending_warning {\n  color: rgb(199, 55, 55);\n  font-weight: 600;\n  animation-duration: 5s; /* the duration of the animation */\n  animation-timing-function: ease-in-out; /* how the animation will behave */\n  animation-delay: 0s; /* how long to delay the animation from starting */\n  animation-iteration-count: infinite; /* how many times the animation will play */\n  animation-name: grow; /* the name of the animation we defined above */\n}\n\n.code {\n  background: #fafafa;\n  border-radius: 5px;\n  padding: 0.75rem;\n  font-size: 1.1rem;\n  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,\n    Bitstream Vera Sans Mono, Courier New, monospace;\n}\n\n.bold {\n  font-weight: bold;\n}\n\n.legende {\n  display: flex !important;\n  justify-content: space-around;\n  margin: 0 3rem;\n}\n\n.legende_title {\n  font-weight: bold;\n  text-decoration: underline;\n}\n\n.legende_box {\n  width: 40%;\n  /* margin: 0 1rem; */\n}\n\n.grid {\n  display: flex;\n  align-items: stretch;\n  flex-wrap: wrap;\n  margin-top: 3rem;\n}\n\n.grid,\n.text {\n  max-width: 800px;\n}\n\n.card {\n  margin: 1rem;\n  flex-basis: 45%;\n  padding: 1.5rem;\n  text-align: left;\n  color: inherit;\n  text-decoration: none;\n  border: 1px solid #eaeaea;\n  border-radius: 10px;\n  transition: color 0.15s ease, border-color 0.15s ease;\n}\n\n.card:hover,\n.card:focus,\n.card:active {\n  color: #0070f3;\n  border-color: #0070f3;\n}\n\n.card h3 {\n  margin: 0 0 1rem 0;\n  font-size: 1.5rem;\n}\n\n.card p {\n  margin: 0;\n  font-size: 1.25rem;\n  line-height: 1.5;\n}\n\n.logo {\n  height: 1em;\n}\n\n.create {\n  max-width: 800px;\n  margin: 50px auto 20px auto;\n  text-align: center;\n  display: flex;\n  justify-content: space-between;\n}\n.create label {\n  text-align: left;\n  display: block;\n}\n.create input {\n  width: 100%;\n  padding: 6px 10px;\n  margin: 10px 0;\n  border: 1px solid #ddd;\n  box-sizing: border-box;\n  display: block;\n}\n.button {\n  margin: 20px auto 20px auto;\n  background: white;\n  color: black;\n  font-weight: bold;\n  border: 2px solid black;\n  padding: 12px;\n  border-radius: 0px;\n  cursor: pointer;\n}\n\n.button_group {\n  display: flex;\n  justify-content: space-between;\n}\n\n.button:hover {\n  background: black;\n  color: white;\n}\n\n@media (max-width: 600px) {\n  .grid {\n    flex-direction: column;\n  }\n  .grid,\n  .text {\n    width: 100%;\n  }\n}\n\n.numeric {\n  text-align: right;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": "Home_container__1EcsU",
	"content": "Home_content__2fqOz",
	"main": "Home_main__1x8gC",
	"footer": "Home_footer__1WdhD",
	"title": "Home_title__3DjR7",
	"applicants_table": "Home_applicants_table__J2B93",
	"subtitle": "Home_subtitle__3I2yI",
	"margin_bottom": "Home_margin_bottom__3OZW9",
	"description": "Home_description__17Z4F",
	"pending_warning": "Home_pending_warning__2L76r",
	"center": "Home_center__2Zxdr",
	"text": "Home_text__1sCQa",
	"table_container": "Home_table_container__wvkX7",
	"grow": "Home_grow__3iiF-",
	"code": "Home_code__axx2Y",
	"bold": "Home_bold__2tKez",
	"legende": "Home_legende__3f4un",
	"legende_title": "Home_legende_title__2Brj_",
	"legende_box": "Home_legende_box__32b1I",
	"grid": "Home_grid__2Ei2F",
	"card": "Home_card__2SdtB",
	"logo": "Home_logo__1YbrH",
	"create": "Home_create__SOEZL",
	"button": "Home_button__Xc9mA",
	"button_group": "Home_button_group__2mPgc",
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
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/layout */ "./components/layout.js");
/* harmony import */ var _components_fileHandler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/fileHandler */ "./components/fileHandler.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/footer */ "./components/footer.js");
/* harmony import */ var _components_loginForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/loginForm */ "./components/loginForm.js");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _lib_appFetch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../lib/appFetch */ "./lib/appFetch.js");
/* harmony import */ var _lib_reducerFactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../lib/reducerFactory */ "./lib/reducerFactory.js");
/* harmony import */ var _lib_dates__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../lib/dates */ "./lib/dates.js");







var _jsxFileName = "/home/q/code/qblanc/beta.gouv/analyse-flux-insertion/pages/experimentations/ardennes/index.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











var reducer = Object(_lib_reducerFactory__WEBPACK_IMPORTED_MODULE_13__["reducerFactory"])("Expérimentation Ardennes - CNAF - Bénéficiaire");
var devMode = true;
var RDV_SOLIDARITES_URL = "http://localhost:5000";
var userUrl = RDV_SOLIDARITES_URL + "/api/v1/users";
function Ardennes() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(null),
      devFile = _useState[0],
      setDevFile = _useState[1];

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_5__["useReducer"])(reducer, [], _lib_reducerFactory__WEBPACK_IMPORTED_MODULE_13__["initReducer"]),
      runs = _useReducer[0],
      dispatchRuns = _useReducer[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(null),
      usersData = _useState2[0],
      setUsersData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      userStatusChecked = _useState3[0],
      setUserStatusChecked = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(0),
      fileSize = _useState4[0],
      setFileSize = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      isLogged = _useState5[0],
      setIsLogged = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({
    tokenId: "",
    uid: "",
    client: ""
  }),
      token = _useState6[0],
      setToken = _useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    if (devFile) {
      handleFile(devFile);
    }
  }, [devFile]);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    if (usersData && userStatusChecked === false) {
      usersData.forEach(function (user, userIndex) {
        if (user["ID RDV"] != "") {
          checkUserInvitationStatus(user["ID RDV"], userIndex);
        }
      });
      setUserStatusChecked(true);
    }
  }, [usersData]);

  var writeFile = function writeFile() {
    var outWorkbook = xlsx__WEBPACK_IMPORTED_MODULE_6__["utils"].book_new();
    var outWorksheet = xlsx__WEBPACK_IMPORTED_MODULE_6__["utils"].json_to_sheet(usersData);
    xlsx__WEBPACK_IMPORTED_MODULE_6__["utils"].book_append_sheet(outWorkbook, outWorksheet, "DIVERGENCES"); // XLSX.utils.book_append_sheet(outWorkbook, xls.Sheets[xls.SheetNames[1]], "GRAPHIQUE");
    // XLSX.utils.book_append_sheet(outWorkbook, xls.Sheets[xls.SheetNames[2]], "Selection COA");

    xlsx__WEBPACK_IMPORTED_MODULE_6__["writeFile"](outWorkbook, "ardennes_rsa_".concat(Object(_lib_dates__WEBPACK_IMPORTED_MODULE_14__["getDateTimeString"])(new Date()), ".xlsx"));
  };

  function generateInvitationUrl(_x, _x2) {
    return _generateInvitationUrl.apply(this, arguments);
  }

  function _generateInvitationUrl() {
    _generateInvitationUrl = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(userId, userIndex) {
      var invitationUrl, result, newUsersData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              invitationUrl = userUrl + "/".concat(userId, "/invite");
              _context2.next = 3;
              return Object(_lib_appFetch__WEBPACK_IMPORTED_MODULE_12__["appFetch"])(invitationUrl, token);

            case 3:
              result = _context2.sent;

              if (result.invitation_url) {
                newUsersData = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(usersData);
                newUsersData[userIndex]["Invitation"] = result.invitation_url;
                newUsersData[userIndex]["Date d'invitation"] = Object(_lib_dates__WEBPACK_IMPORTED_MODULE_14__["getFrenchFormatDateString"])(new Date());
                setUsersData(newUsersData);
              }

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _generateInvitationUrl.apply(this, arguments);
  }

  function getUser(_x3, _x4) {
    return _getUser.apply(this, arguments);
  }

  function _getUser() {
    _getUser = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(userId, token) {
      var getUserUrl;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              getUserUrl = userUrl + "/".concat(userId);
              _context3.next = 3;
              return Object(_lib_appFetch__WEBPACK_IMPORTED_MODULE_12__["appFetch"])(getUserUrl, token);

            case 3:
              return _context3.abrupt("return", _context3.sent);

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _getUser.apply(this, arguments);
  }

  function checkUserInvitationStatus(_x5, _x6) {
    return _checkUserInvitationStatus.apply(this, arguments);
  }

  function _checkUserInvitationStatus() {
    _checkUserInvitationStatus = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4(userId, userIndex) {
      var result, newUsersData, invitation_date, inscription_date;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return getUser(userId, token);

            case 2:
              result = _context4.sent;
              newUsersData = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(usersData);

              if (result.user.invitation_created_at) {
                invitation_date = result.user.invitation_created_at // Date au format : 2021-04-15 14:53:56 +0200
                .substring(0, 10); // Récupérer les 10 premiers chiffres (la date)

                invitation_date = new Date(invitation_date); // Créer une date JS

                newUsersData[userIndex]["Date d'invitation"] = Object(_lib_dates__WEBPACK_IMPORTED_MODULE_14__["getFrenchFormatDateString"])(invitation_date);
              }

              if (result.user.invitation_accepted_at) {
                inscription_date = result.user.invitation_accepted_at // Date au format : 2021-04-15 14:53:56 +0200
                .substring(0, 10); // Récupérer les 10 premiers chiffres (la date)

                inscription_date = new Date(inscription_date); // Créer une date JS

                newUsersData[userIndex]["Date d'inscription"] = Object(_lib_dates__WEBPACK_IMPORTED_MODULE_14__["getFrenchFormatDateString"])(inscription_date);
              }

              setUsersData(newUsersData);

            case 7:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));
    return _checkUserInvitationStatus.apply(this, arguments);
  }

  function createUser(_x7, _x8) {
    return _createUser.apply(this, arguments);
  }

  function _createUser() {
    _createUser = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5(userData, userIndex) {
      var address, user, result, newUsersData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              address = userData["ADRESSE"] + " - " + userData["CODE POSTAL"] + " " + userData["VILLE"];
              user = {
                first_name: userData["PRENOM"],
                last_name: userData["NOM"],
                email: userData["MAIL"],
                phone_number: userData["TELEPHONE"].replace(/\s+/g, ""),
                birth_date: Object(_lib_dates__WEBPACK_IMPORTED_MODULE_14__["stringToDate"])(userData["DATE DE NAISSANCE"]),
                address: address,
                caisse_affiliation: "caf",
                affiliation_number: userData["N°CAF"],
                organisation_ids: ["1"]
              };
              _context5.next = 4;
              return Object(_lib_appFetch__WEBPACK_IMPORTED_MODULE_12__["appFetch"])(userUrl, token, "POST", JSON.stringify(user));

            case 4:
              result = _context5.sent;
              newUsersData = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(usersData);

              if (result.user) {
                newUsersData[userIndex]["ID RDV"] = result.user.id;
                setUsersData(newUsersData);
                generateInvitationUrl(result.user.id, userIndex);
              } else if (result.errors && result.errors.email && result.errors.email[0].error === "taken") {
                newUsersData[userIndex]["ID RDV"] = result.errors.email[0].id;
                setUsersData(newUsersData);
                checkUserInvitationStatus(result.errors.email[0].id, userIndex);
                alert("Un compte associé à cet email existe déjà");
              } else if (result.errors && result.errors.email && result.errors.email[0].error === "invalid") {
                alert("L'adresse mail n'est pas valide");
              } else if (result.errors && result.errors.first_name && result.errors.first_name[0].error === "déjà utilisé") {
                alert("La création du compte a échoué. L'utilisateur semble exister mais n'a pu être récupéré.");
              } else if (result.errors && result.errors[0] && result.errors[0].base === "forbidden") {
                alert("Votre compte agent RDV-Solidarités ne vous permet pas d'effectuer cette action.");
              } else if (result.errors && result.errors[0]) {
                alert(result.errors[0]);
              }

            case 7:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));
    return _createUser.apply(this, arguments);
  }

  var handleLogin = function handleLogin(tokenId, uid, client) {
    setToken(_objectSpread(_objectSpread({}, token), {}, {
      tokenId: tokenId,
      uid: uid,
      client: client
    }));
    setIsLogged(true);
  };

  var handleFile = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(file) {
      var start_time;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (devMode && file != devFile) {
                setDevFile(file);
              }

              setFileSize(file.size);
              start_time = new Date();
              _context.next = 5;
              return new Promise(function (resolve) {
                var reader = new FileReader();

                reader.onload = function (event) {
                  var fileData = new Uint8Array(event.target.result);
                  var xls = xlsx__WEBPACK_IMPORTED_MODULE_6__["read"](fileData, {
                    type: "array",
                    cellDates: true,
                    dateNF: "dd/mm/yyyy"
                  });
                  var worksheet = xls.Sheets[xls.SheetNames[0]]; // Limiter la capture aux colonnes A-V

                  var range = xlsx__WEBPACK_IMPORTED_MODULE_6__["utils"].decode_range(worksheet["!ref"]);
                  range.s.c = 0; // 0 == XLSX.utils.decode_col("A")

                  range.e.c = 21; // 19 == XLSX.utils.decode_col("V")

                  var new_range = xlsx__WEBPACK_IMPORTED_MODULE_6__["utils"].encode_range(range);
                  var jsonData = xlsx__WEBPACK_IMPORTED_MODULE_6__["utils"].sheet_to_json(worksheet, {
                    blankrows: false,
                    raw: false,
                    defval: "",
                    range: new_range
                  }); // we remove line breaks from all keys

                  jsonData = jsonData.map(function (userData) {
                    return Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(Object.keys(userData)).reduce(function (res, key) {
                      res[key.replace(/[\n\r]+/g, " ")] = userData[key];
                      return res;
                    }, {});
                  });
                  jsonData == null && setIsPending(false);
                  setUserStatusChecked(false);
                  setUsersData(jsonData);
                  dispatchRuns({
                    type: "append",
                    item: {
                      timestamp: new Date().toISOString().slice(0, 19),
                      duration: new Date() - start_time,
                      filename: file.name,
                      fileSize: file.size,
                      fileLines: jsonData.length
                    }
                  });
                  resolve();
                };

                reader.readAsArrayBuffer(file);
              });

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleFile(_x9) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.container,
    handleFile: handleFile,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.main,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.title,
        children: "Exp\xE9rimentation Ardennes"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 9
      }, this), !isLogged && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.create,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_loginForm__WEBPACK_IMPORTED_MODULE_10__["default"], {
          handleLogin: handleLogin,
          rdvUrl: RDV_SOLIDARITES_URL
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 11
      }, this), isLogged && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_fileHandler__WEBPACK_IMPORTED_MODULE_8__["default"], {
          handleFile: handleFile,
          fileSize: fileSize,
          pendingMessage: "Récupération des informations, merci de patienter"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 13
        }, this), usersData && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.subtitle,
            children: "B\xE9n\xE9ficiaires RSA"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 217,
            columnNumber: 17
          }, this), usersData.length == 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.description,
            children: "Aucun b\xE9n\xE9ficiaire dans le fichier"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 220,
            columnNumber: 19
          }, this), usersData.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    rowSpan: "2",
                    children: "Nom"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 228,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    rowSpan: "2",
                    children: "Pr\xE9nom"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 229,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    rowSpan: "2",
                    children: "Mail"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 230,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    rowSpan: "2",
                    children: "T\xE9l\xE9phone"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 231,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    rowSpan: "2",
                    children: "ID RDV-Solidarit\xE9s"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 232,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    colSpan: "3",
                    children: "Invitation"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 233,
                    columnNumber: 27
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 227,
                  columnNumber: 25
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    colSpan: "1",
                    children: "Dernier envoi le"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 236,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    colSpan: "1",
                    children: "Date d'inscription"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 237,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    colSpan: "1",
                    children: "Action"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 238,
                    columnNumber: 27
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 235,
                  columnNumber: 25
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 226,
                columnNumber: 23
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
                children: usersData.map(function (user, index) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.center,
                      children: user["NOM"]
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 244,
                      columnNumber: 29
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.center,
                      children: user["PRENOM"]
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 245,
                      columnNumber: 29
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.center,
                      children: user["MAIL"]
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 246,
                      columnNumber: 29
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.center,
                      children: user["TELEPHONE"]
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 247,
                      columnNumber: 29
                    }, _this), user["ID RDV"] === "" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.center,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                        onClick: function onClick() {
                          return createUser(user, index);
                        },
                        children: "Cr\xE9er un compte"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 251,
                        columnNumber: 33
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 250,
                      columnNumber: 31
                    }, _this), user["ID RDV"] !== "" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.center,
                      children: user["ID RDV"]
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 257,
                      columnNumber: 31
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.center,
                      children: user["Date d'invitation"]
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 259,
                      columnNumber: 29
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.center,
                      children: user["Date d'inscription"]
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 260,
                      columnNumber: 29
                    }, _this), user["ID RDV"] !== "" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.center,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                        onClick: function onClick() {
                          return generateInvitationUrl(user["ID RDV"], index);
                        },
                        children: [user["Date d'invitation"] !== "" && "Regénérer invitation", user["Date d'invitation"] === "" && "Générer invitation"]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 263,
                        columnNumber: 33
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 262,
                      columnNumber: 31
                    }, _this), user["ID RDV"] === "" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.center
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 271,
                      columnNumber: 55
                    }, _this)]
                  }, index, true, {
                    fileName: _jsxFileName,
                    lineNumber: 243,
                    columnNumber: 27
                  }, _this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 241,
                columnNumber: 23
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 225,
              columnNumber: 21
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.button,
              onClick: writeFile,
              children: "Reg\xE9n\xE9rer fichier"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 277,
              columnNumber: 21
            }, this)]
          }, void 0, true)]
        }, void 0, true)]
      }, void 0, true), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_footer__WEBPACK_IMPORTED_MODULE_9__["default"], {
        subject: "Exp\xE9rimentation Ardennes",
        pourquoi: "Quel est l'objectif de cette exp\xE9rimentation\xA0?",
        text: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.text,
            children: "Faciliter le travail des agents du d\xE9partement et tester l'utilisation de l'application RDV-Solidarit\xE9s pour acc\xE9l\xE9rer la prise du premier rendez-vous d'orientation."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 292,
            columnNumber: 15
          }, this)
        }, void 0, false)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 287,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 197,
    columnNumber: 5
  }, this);
}

_s(Ardennes, "l5Rg3y2ZxcSGwZhX0xFprTuZX1M=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sb2dpbkZvcm0uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL21vZGVscy9BcHBsaWNhbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2V4cGVyaW1lbnRhdGlvbnMvYXJkZW5uZXMvaW5kZXguanMiXSwibmFtZXMiOlsiTG9naW5Gb3JtIiwiaGFuZGxlTG9naW4iLCJyZHZVcmwiLCJ1c2VTdGF0ZSIsImxvZ2luIiwic2V0TG9naW4iLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiaXNQZW5kaW5nIiwic2V0SXNQZW5kaW5nIiwidXJsIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwidXNlciIsImVtYWlsIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzcG9uc2UiLCJvayIsImdldCIsImpzb24iLCJhbGVydCIsInRhcmdldCIsInZhbHVlIiwic3R5bGVzIiwibWFyZ2luX2JvdHRvbSIsImJ1dHRvbiIsIkFwcGxpY2FudCIsImRvbSIsInJzYUFwcGxpY2F0aW9uTnVtYmVyIiwic29jaWFsU2VjdXJpdHlOdW1iZXIiLCJsYXN0TmFtZSIsImZpcnN0TmFtZSIsInJvbGUiLCJjb250YWN0SW5mb3MiLCJwaG9uZU51bWJlciIsImVtYWlsQWRkcmVzcyIsInRvcEVudHJhbnQiLCJhcHBsaWNhdGlvbiIsImVsaWdpYmxlQXNOZXciLCJ3aXRoRHJvaXRzRXREZXZvaXJzIiwiZWxpZ2libGVBc05ld0luRm95ZXIiLCJpbkZveWVyV2l0aERyb2l0c0V0RGV2b2lycyIsImluY2x1ZGVzIiwidG9wRm95ZXJEcm9pdHNFdERldm9pcnMiLCJ0b3BEcm9pdHNFdERldm9pcnMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImlubmVySFRNTCIsIkFwcGxpY2F0aW9uIiwicGFyZW50Tm9kZSIsInN0YXR1c0NvZGUiLCJzdXNwZW5zaW9uTW90aXZlIiwic3BsaXQiLCJqb2luIiwicmVkdWNlciIsInJlZHVjZXJGYWN0b3J5IiwiZGV2TW9kZSIsIlJEVl9TT0xJREFSSVRFU19VUkwiLCJwcm9jZXNzIiwidXNlclVybCIsIkFyZGVubmVzIiwiZGV2RmlsZSIsInNldERldkZpbGUiLCJ1c2VSZWR1Y2VyIiwiaW5pdFJlZHVjZXIiLCJydW5zIiwiZGlzcGF0Y2hSdW5zIiwidXNlcnNEYXRhIiwic2V0VXNlcnNEYXRhIiwidXNlclN0YXR1c0NoZWNrZWQiLCJzZXRVc2VyU3RhdHVzQ2hlY2tlZCIsImZpbGVTaXplIiwic2V0RmlsZVNpemUiLCJpc0xvZ2dlZCIsInNldElzTG9nZ2VkIiwidG9rZW5JZCIsInVpZCIsImNsaWVudCIsInRva2VuIiwic2V0VG9rZW4iLCJ1c2VFZmZlY3QiLCJoYW5kbGVGaWxlIiwiZm9yRWFjaCIsInVzZXJJbmRleCIsImNoZWNrVXNlckludml0YXRpb25TdGF0dXMiLCJ3cml0ZUZpbGUiLCJvdXRXb3JrYm9vayIsIlhMU1giLCJib29rX25ldyIsIm91dFdvcmtzaGVldCIsImpzb25fdG9fc2hlZXQiLCJib29rX2FwcGVuZF9zaGVldCIsImdldERhdGVUaW1lU3RyaW5nIiwiRGF0ZSIsImdlbmVyYXRlSW52aXRhdGlvblVybCIsInVzZXJJZCIsImludml0YXRpb25VcmwiLCJhcHBGZXRjaCIsInJlc3VsdCIsImludml0YXRpb25fdXJsIiwibmV3VXNlcnNEYXRhIiwiZ2V0RnJlbmNoRm9ybWF0RGF0ZVN0cmluZyIsImdldFVzZXIiLCJnZXRVc2VyVXJsIiwiaW52aXRhdGlvbl9jcmVhdGVkX2F0IiwiaW52aXRhdGlvbl9kYXRlIiwic3Vic3RyaW5nIiwiaW52aXRhdGlvbl9hY2NlcHRlZF9hdCIsImluc2NyaXB0aW9uX2RhdGUiLCJjcmVhdGVVc2VyIiwidXNlckRhdGEiLCJhZGRyZXNzIiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsInBob25lX251bWJlciIsInJlcGxhY2UiLCJiaXJ0aF9kYXRlIiwic3RyaW5nVG9EYXRlIiwiY2Fpc3NlX2FmZmlsaWF0aW9uIiwiYWZmaWxpYXRpb25fbnVtYmVyIiwib3JnYW5pc2F0aW9uX2lkcyIsImlkIiwiZXJyb3JzIiwiZXJyb3IiLCJiYXNlIiwiZmlsZSIsInNpemUiLCJzdGFydF90aW1lIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwiZXZlbnQiLCJmaWxlRGF0YSIsIlVpbnQ4QXJyYXkiLCJ4bHMiLCJ0eXBlIiwiY2VsbERhdGVzIiwiZGF0ZU5GIiwid29ya3NoZWV0IiwiU2hlZXRzIiwiU2hlZXROYW1lcyIsInJhbmdlIiwiZGVjb2RlX3JhbmdlIiwicyIsImMiLCJuZXdfcmFuZ2UiLCJlbmNvZGVfcmFuZ2UiLCJqc29uRGF0YSIsInNoZWV0X3RvX2pzb24iLCJibGFua3Jvd3MiLCJyYXciLCJkZWZ2YWwiLCJtYXAiLCJPYmplY3QiLCJrZXlzIiwicmVkdWNlIiwicmVzIiwia2V5IiwiaXRlbSIsInRpbWVzdGFtcCIsInRvSVNPU3RyaW5nIiwic2xpY2UiLCJkdXJhdGlvbiIsImZpbGVuYW1lIiwibmFtZSIsImZpbGVMaW5lcyIsImxlbmd0aCIsInJlYWRBc0FycmF5QnVmZmVyIiwiY29udGFpbmVyIiwibWFpbiIsInRpdGxlIiwiY3JlYXRlIiwic3VidGl0bGUiLCJkZXNjcmlwdGlvbiIsImluZGV4IiwiY2VudGVyIiwidGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsU0FBVCxPQUE0QztBQUFBOztBQUFBLE1BQXZCQyxXQUF1QixRQUF2QkEsV0FBdUI7QUFBQSxNQUFWQyxNQUFVLFFBQVZBLE1BQVU7O0FBQUEsa0JBQy9CQyxzREFBUSxDQUFDLEVBQUQsQ0FEdUI7QUFBQSxNQUNsREMsS0FEa0Q7QUFBQSxNQUMzQ0MsUUFEMkM7O0FBQUEsbUJBRXpCRixzREFBUSxDQUFDLEVBQUQs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QWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssV0FBVyxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLE9BQU8sWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxTQUFTLFlBQVksT0FBTyxPQUFPLFlBQVksYUFBYSxPQUFPLEtBQUssS0FBSyxZQUFZLGNBQWMsTUFBTSxLQUFLLFlBQVksY0FBYyxNQUFNLEtBQUssWUFBWSxjQUFjLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxjQUFjLE1BQU0sS0FBSyxZQUFZLGFBQWEsY0FBYyxNQUFNLEtBQUssWUFBWSxhQUFhLGNBQWMsTUFBTSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEseUJBQXlCLGFBQWEsYUFBYSx5QkFBeUIsYUFBYSxhQUFhLHlCQUF5QixhQUFhLGFBQWEseUJBQXlCLGFBQWEsYUFBYSx5QkFBeUIsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxPQUFPLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFdBQVcsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFlBQVksVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxPQUFPLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxXQUFXLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLFVBQVUsS0FBSyxNQUFNLEtBQUssWUFBWSxzQ0FBc0Msc0JBQXNCLHNCQUFzQixrQkFBa0IsMkJBQTJCLDRCQUE0Qix3QkFBd0IsR0FBRyxjQUFjLHFCQUFxQixHQUFHLFdBQVcsb0JBQW9CLFlBQVksa0JBQWtCLDJCQUEyQiw0QkFBNEIsd0JBQXdCLEdBQUcsYUFBYSxnQkFBZ0Isa0JBQWtCLGtDQUFrQyxrQkFBa0IsNEJBQTRCLHdCQUF3QixHQUFHLGlCQUFpQix3QkFBd0IsR0FBRyxlQUFlLGtCQUFrQiw0QkFBNEIsd0JBQXdCLEdBQUcsY0FBYyxtQkFBbUIsMEJBQTBCLEdBQUcsdURBQXVELCtCQUErQixHQUFHLFlBQVksY0FBYyxzQkFBc0Isb0JBQW9CLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLDBCQUEwQiw4QkFBOEIsR0FBRyx3QkFBd0IsOEJBQThCLEdBQUcsZUFBZSxjQUFjLHNCQUFzQixvQkFBb0Isc0JBQXNCLEdBQUcsb0JBQW9CLG1DQUFtQyxHQUFHLG9FQUFvRSx1QkFBdUIsR0FBRyw2Q0FBNkMscUJBQXFCLHNCQUFzQixHQUFHLHFCQUFxQixVQUFVLGlDQUFpQyxTQUFTLFdBQVcsOEJBQThCLFNBQVMsY0FBYyxpQ0FBaUMsT0FBTyxHQUFHLHNCQUFzQixxQkFBcUIsd0JBQXdCLHVCQUF1QixHQUFHLHNCQUFzQiw0QkFBNEIscUJBQXFCLDJCQUEyQiwrRUFBK0UsNERBQTRELDRGQUE0RixzRUFBc0Usb0RBQW9ELFdBQVcsd0JBQXdCLHVCQUF1QixxQkFBcUIsc0JBQXNCLHlJQUF5SSxHQUFHLFdBQVcsc0JBQXNCLEdBQUcsY0FBYyw2QkFBNkIsa0NBQWtDLG1CQUFtQixHQUFHLG9CQUFvQixzQkFBc0IsK0JBQStCLEdBQUcsa0JBQWtCLGVBQWUsc0JBQXNCLE1BQU0sV0FBVyxrQkFBa0IseUJBQXlCLG9CQUFvQixxQkFBcUIsR0FBRyxtQkFBbUIscUJBQXFCLEdBQUcsV0FBVyxpQkFBaUIsb0JBQW9CLG9CQUFvQixxQkFBcUIsbUJBQW1CLDBCQUEwQiw4QkFBOEIsd0JBQXdCLDBEQUEwRCxHQUFHLDhDQUE4QyxtQkFBbUIsMEJBQTBCLEdBQUcsY0FBYyx1QkFBdUIsc0JBQXNCLEdBQUcsYUFBYSxjQUFjLHVCQUF1QixxQkFBcUIsR0FBRyxXQUFXLGdCQUFnQixHQUFHLGFBQWEscUJBQXFCLGdDQUFnQyx1QkFBdUIsa0JBQWtCLG1DQUFtQyxHQUFHLGlCQUFpQixxQkFBcUIsbUJBQW1CLEdBQUcsaUJBQWlCLGdCQUFnQixzQkFBc0IsbUJBQW1CLDJCQUEyQiwyQkFBMkIsbUJBQW1CLEdBQUcsV0FBVyxnQ0FBZ0Msc0JBQXNCLGlCQUFpQixzQkFBc0IsNEJBQTRCLGtCQUFrQix1QkFBdUIsb0JBQW9CLEdBQUcsbUJBQW1CLGtCQUFrQixtQ0FBbUMsR0FBRyxtQkFBbUIsc0JBQXNCLGlCQUFpQixHQUFHLCtCQUErQixXQUFXLDZCQUE2QixLQUFLLHFCQUFxQixrQkFBa0IsS0FBSyxHQUFHLGNBQWMsc0JBQXNCLEdBQUcscUJBQXFCO0FBQ3o2ZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQyxPQUFPLEdBQUdDLDJFQUFjLENBQUMsZ0RBQUQsQ0FBOUI7QUFDQSxJQUFNQyxPQUFPLE9BQWI7QUFDQSxJQUFNQyxtQkFBbUIsR0FBR0MsdUJBQTVCO0FBQ0EsSUFBTUMsT0FBTyxHQUFHRixtQkFBbUIsR0FBRyxlQUF0QztBQUVlLFNBQVNHLFFBQVQsR0FBb0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFDSC9ELHNEQUFRLENBQUMsSUFBRCxDQURMO0FBQUEsTUFDMUJnRSxPQUQwQjtBQUFBLE1BQ2pCQyxVQURpQjs7QUFBQSxvQkFFSkMsd0RBQVUsQ0FBQ1QsT0FBRCxFQUFVLEVBQVYsRUFBY1UsZ0VBQWQsQ0FGTjtBQUFBLE1BRTFCQyxJQUYwQjtBQUFBLE1BRXBCQyxZQUZvQjs7QUFBQSxtQkFHQ3JFLHNEQUFRLENBQUMsSUFBRCxDQUhUO0FBQUEsTUFHMUJzRSxTQUgwQjtBQUFBLE1BR2ZDLFlBSGU7O0FBQUEsbUJBSWlCdkUsc0RBQVEsQ0FBQyxLQUFELENBSnpCO0FBQUEsTUFJMUJ3RSxpQkFKMEI7QUFBQSxNQUlQQyxvQkFKTzs7QUFBQSxtQkFLRHpFLHNEQUFRLENBQUMsQ0FBRCxDQUxQO0FBQUEsTUFLMUIwRSxRQUwwQjtBQUFBLE1BS2hCQyxXQUxnQjs7QUFBQSxtQkFNRDNFLHNEQUFRLENBQUMsS0FBRCxDQU5QO0FBQUEsTUFNMUI0RSxRQU4wQjtBQUFBLE1BTWhCQyxXQU5nQjs7QUFBQSxtQkFPUDdFLHNEQUFRLENBQUM7QUFDakM4RSxXQUFPLEVBQUUsRUFEd0I7QUFFakNDLE9BQUcsRUFBRSxFQUY0QjtBQUdqQ0MsVUFBTSxFQUFFO0FBSHlCLEdBQUQsQ0FQRDtBQUFBLE1BTzFCQyxLQVAwQjtBQUFBLE1BT25CQyxRQVBtQjs7QUFhakNDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUluQixPQUFKLEVBQWE7QUFDWG9CLGdCQUFVLENBQUNwQixPQUFELENBQVY7QUFDRDtBQUNGLEdBSlEsRUFJTixDQUFDQSxPQUFELENBSk0sQ0FBVDtBQU1BbUIseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSWIsU0FBUyxJQUFJRSxpQkFBaUIsS0FBSyxLQUF2QyxFQUE4QztBQUM1Q0YsZUFBUyxDQUFDZSxPQUFWLENBQWtCLFVBQUMxRSxJQUFELEVBQU8yRSxTQUFQLEVBQXFCO0FBQ3JDLFlBQUkzRSxJQUFJLENBQUMsUUFBRCxDQUFKLElBQWtCLEVBQXRCLEVBQTBCO0FBQ3hCNEUsbUNBQXlCLENBQUM1RSxJQUFJLENBQUMsUUFBRCxDQUFMLEVBQWlCMkUsU0FBakIsQ0FBekI7QUFDRDtBQUNGLE9BSkQ7QUFLQWIsMEJBQW9CLENBQUMsSUFBRCxDQUFwQjtBQUNEO0FBQ0YsR0FUUSxFQVNOLENBQUNILFNBQUQsQ0FUTSxDQUFUOztBQVdBLE1BQU1rQixTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3RCLFFBQU1DLFdBQVcsR0FBR0MsMENBQUEsQ0FBV0MsUUFBWCxFQUFwQjtBQUNBLFFBQU1DLFlBQVksR0FBR0YsMENBQUEsQ0FBV0csYUFBWCxDQUF5QnZCLFNBQXpCLENBQXJCO0FBQ0FvQiw4Q0FBQSxDQUFXSSxpQkFBWCxDQUE2QkwsV0FBN0IsRUFBMENHLFlBQTFDLEVBQXdELGFBQXhELEVBSHNCLENBSXRCO0FBQ0E7O0FBQ0FGLGtEQUFBLENBQWVELFdBQWYseUJBQTRDTSxxRUFBaUIsQ0FBQyxJQUFJQyxJQUFKLEVBQUQsQ0FBN0Q7QUFDRCxHQVBEOztBQTlCaUMsV0F1Q2xCQyxxQkF2Q2tCO0FBQUE7QUFBQTs7QUFBQTtBQUFBLDhNQXVDakMsa0JBQXFDQyxNQUFyQyxFQUE2Q1osU0FBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1FhLDJCQURSLEdBQ3dCckMsT0FBTyxjQUFPb0MsTUFBUCxZQUQvQjtBQUFBO0FBQUEscUJBRXVCRSwrREFBUSxDQUFDRCxhQUFELEVBQWdCbEIsS0FBaEIsQ0FGL0I7O0FBQUE7QUFFUW9CLG9CQUZSOztBQUlFLGtCQUFJQSxNQUFNLENBQUNDLGNBQVgsRUFBMkI7QUFDckJDLDRCQURxQixnR0FDRmpDLFNBREU7QUFFekJpQyw0QkFBWSxDQUFDakIsU0FBRCxDQUFaLENBQXdCLFlBQXhCLElBQXdDZSxNQUFNLENBQUNDLGNBQS9DO0FBQ0FDLDRCQUFZLENBQUNqQixTQUFELENBQVosQ0FBd0IsbUJBQXhCLElBQStDa0IsNkVBQXlCLENBQUMsSUFBSVIsSUFBSixFQUFELENBQXhFO0FBQ0F6Qiw0QkFBWSxDQUFDZ0MsWUFBRCxDQUFaO0FBQ0Q7O0FBVEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0F2Q2lDO0FBQUE7QUFBQTs7QUFBQSxXQW1EbEJFLE9BbkRrQjtBQUFBO0FBQUE7O0FBQUE7QUFBQSxnTUFtRGpDLGtCQUF1QlAsTUFBdkIsRUFBK0JqQixLQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDUXlCLHdCQURSLEdBQ3FCNUMsT0FBTyxjQUFPb0MsTUFBUCxDQUQ1QjtBQUFBO0FBQUEscUJBRWVFLCtEQUFRLENBQUNNLFVBQUQsRUFBYXpCLEtBQWIsQ0FGdkI7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQW5EaUM7QUFBQTtBQUFBOztBQUFBLFdBd0RsQk0seUJBeERrQjtBQUFBO0FBQUE7O0FBQUE7QUFBQSxrTkF3RGpDLGtCQUF5Q1csTUFBekMsRUFBaURaLFNBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ3VCbUIsT0FBTyxDQUFDUCxNQUFELEVBQVNqQixLQUFULENBRDlCOztBQUFBO0FBQ1FvQixvQkFEUjtBQUdNRSwwQkFITixnR0FHeUJqQyxTQUh6Qjs7QUFJRSxrQkFBSStCLE1BQU0sQ0FBQzFGLElBQVAsQ0FBWWdHLHFCQUFoQixFQUF1QztBQUNqQ0MsK0JBRGlDLEdBQ2ZQLE1BQU0sQ0FBQzFGLElBQVAsQ0FBWWdHLHFCQUFaLENBQWtDO0FBQWxDLGlCQUNuQkUsU0FEbUIsQ0FDVCxDQURTLEVBQ04sRUFETSxDQURlLEVBRWhCOztBQUNyQkQsK0JBQWUsR0FBRyxJQUFJWixJQUFKLENBQVNZLGVBQVQsQ0FBbEIsQ0FIcUMsQ0FHUTs7QUFDN0NMLDRCQUFZLENBQUNqQixTQUFELENBQVosQ0FBd0IsbUJBQXhCLElBQStDa0IsNkVBQXlCLENBQUNJLGVBQUQsQ0FBeEU7QUFDRDs7QUFDRCxrQkFBSVAsTUFBTSxDQUFDMUYsSUFBUCxDQUFZbUcsc0JBQWhCLEVBQXdDO0FBQ2xDQyxnQ0FEa0MsR0FDZlYsTUFBTSxDQUFDMUYsSUFBUCxDQUFZbUcsc0JBQVosQ0FBbUM7QUFBbkMsaUJBQ3BCRCxTQURvQixDQUNWLENBRFUsRUFDUCxFQURPLENBRGUsRUFFakI7O0FBQ3JCRSxnQ0FBZ0IsR0FBRyxJQUFJZixJQUFKLENBQVNlLGdCQUFULENBQW5CLENBSHNDLENBR1M7O0FBQy9DUiw0QkFBWSxDQUFDakIsU0FBRCxDQUFaLENBQXdCLG9CQUF4QixJQUFnRGtCLDZFQUF5QixDQUFDTyxnQkFBRCxDQUF6RTtBQUNEOztBQUNEeEMsMEJBQVksQ0FBQ2dDLFlBQUQsQ0FBWjs7QUFoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0F4RGlDO0FBQUE7QUFBQTs7QUFBQSxXQTJFbEJTLFVBM0VrQjtBQUFBO0FBQUE7O0FBQUE7QUFBQSxtTUEyRWpDLGtCQUEwQkMsUUFBMUIsRUFBb0MzQixTQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDUTRCLHFCQURSLEdBQ2tCRCxRQUFRLENBQUMsU0FBRCxDQUFSLEdBQXNCLEtBQXRCLEdBQThCQSxRQUFRLENBQUMsYUFBRCxDQUF0QyxHQUF3RCxHQUF4RCxHQUE4REEsUUFBUSxDQUFDLE9BQUQsQ0FEeEY7QUFHUXRHLGtCQUhSLEdBR2U7QUFDWHdHLDBCQUFVLEVBQUVGLFFBQVEsQ0FBQyxRQUFELENBRFQ7QUFFWEcseUJBQVMsRUFBRUgsUUFBUSxDQUFDLEtBQUQsQ0FGUjtBQUdYckcscUJBQUssRUFBRXFHLFFBQVEsQ0FBQyxNQUFELENBSEo7QUFJWEksNEJBQVksRUFBRUosUUFBUSxDQUFDLFdBQUQsQ0FBUixDQUFzQkssT0FBdEIsQ0FBOEIsTUFBOUIsRUFBc0MsRUFBdEMsQ0FKSDtBQUtYQywwQkFBVSxFQUFFQyxnRUFBWSxDQUFDUCxRQUFRLENBQUMsbUJBQUQsQ0FBVCxDQUxiO0FBTVhDLHVCQUFPLEVBQUVBLE9BTkU7QUFPWE8sa0NBQWtCLEVBQUUsS0FQVDtBQVFYQyxrQ0FBa0IsRUFBRVQsUUFBUSxDQUFDLE9BQUQsQ0FSakI7QUFTWFUsZ0NBQWdCLEVBQUUsQ0FBQzlELEdBQUQ7QUFUUCxlQUhmO0FBQUE7QUFBQSxxQkFldUJ1QywrREFBUSxDQUFDdEMsT0FBRCxFQUFVbUIsS0FBVixFQUFpQixNQUFqQixFQUF5QmhFLElBQUksQ0FBQ0MsU0FBTCxDQUFlUCxJQUFmLENBQXpCLENBZi9COztBQUFBO0FBZVEwRixvQkFmUjtBQWlCTUUsMEJBakJOLGdHQWlCeUJqQyxTQWpCekI7O0FBa0JFLGtCQUFJK0IsTUFBTSxDQUFDMUYsSUFBWCxFQUFpQjtBQUNmNEYsNEJBQVksQ0FBQ2pCLFNBQUQsQ0FBWixDQUF3QixRQUF4QixJQUFvQ2UsTUFBTSxDQUFDMUYsSUFBUCxDQUFZaUgsRUFBaEQ7QUFDQXJELDRCQUFZLENBQUNnQyxZQUFELENBQVo7QUFDQU4scUNBQXFCLENBQUNJLE1BQU0sQ0FBQzFGLElBQVAsQ0FBWWlILEVBQWIsRUFBaUJ0QyxTQUFqQixDQUFyQjtBQUNELGVBSkQsTUFJTyxJQUFJZSxNQUFNLENBQUN3QixNQUFQLElBQWlCeEIsTUFBTSxDQUFDd0IsTUFBUCxDQUFjakgsS0FBL0IsSUFBd0N5RixNQUFNLENBQUN3QixNQUFQLENBQWNqSCxLQUFkLENBQW9CLENBQXBCLEVBQXVCa0gsS0FBdkIsS0FBaUMsT0FBN0UsRUFBc0Y7QUFDM0Z2Qiw0QkFBWSxDQUFDakIsU0FBRCxDQUFaLENBQXdCLFFBQXhCLElBQW9DZSxNQUFNLENBQUN3QixNQUFQLENBQWNqSCxLQUFkLENBQW9CLENBQXBCLEVBQXVCZ0gsRUFBM0Q7QUFDQXJELDRCQUFZLENBQUNnQyxZQUFELENBQVo7QUFDQWhCLHlDQUF5QixDQUFDYyxNQUFNLENBQUN3QixNQUFQLENBQWNqSCxLQUFkLENBQW9CLENBQXBCLEVBQXVCZ0gsRUFBeEIsRUFBNEJ0QyxTQUE1QixDQUF6QjtBQUNBOUQscUJBQUssQ0FBQywyQ0FBRCxDQUFMO0FBQ0QsZUFMTSxNQUtBLElBQUk2RSxNQUFNLENBQUN3QixNQUFQLElBQWlCeEIsTUFBTSxDQUFDd0IsTUFBUCxDQUFjakgsS0FBL0IsSUFBd0N5RixNQUFNLENBQUN3QixNQUFQLENBQWNqSCxLQUFkLENBQW9CLENBQXBCLEVBQXVCa0gsS0FBdkIsS0FBaUMsU0FBN0UsRUFBd0Y7QUFDN0Z0RyxxQkFBSyxDQUFDLGlDQUFELENBQUw7QUFDRCxlQUZNLE1BRUEsSUFDTDZFLE1BQU0sQ0FBQ3dCLE1BQVAsSUFDQXhCLE1BQU0sQ0FBQ3dCLE1BQVAsQ0FBY1YsVUFEZCxJQUVBZCxNQUFNLENBQUN3QixNQUFQLENBQWNWLFVBQWQsQ0FBeUIsQ0FBekIsRUFBNEJXLEtBQTVCLEtBQXNDLGNBSGpDLEVBSUw7QUFDQXRHLHFCQUFLLENBQ0gseUZBREcsQ0FBTDtBQUdELGVBUk0sTUFRQSxJQUFJNkUsTUFBTSxDQUFDd0IsTUFBUCxJQUFpQnhCLE1BQU0sQ0FBQ3dCLE1BQVAsQ0FBYyxDQUFkLENBQWpCLElBQXFDeEIsTUFBTSxDQUFDd0IsTUFBUCxDQUFjLENBQWQsRUFBaUJFLElBQWpCLEtBQTBCLFdBQW5FLEVBQWdGO0FBQ3JGdkcscUJBQUssQ0FBQyxpRkFBRCxDQUFMO0FBQ0QsZUFGTSxNQUVBLElBQUk2RSxNQUFNLENBQUN3QixNQUFQLElBQWlCeEIsTUFBTSxDQUFDd0IsTUFBUCxDQUFjLENBQWQsQ0FBckIsRUFBdUM7QUFDNUNyRyxxQkFBSyxDQUFDNkUsTUFBTSxDQUFDd0IsTUFBUCxDQUFjLENBQWQsQ0FBRCxDQUFMO0FBQ0Q7O0FBekNIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBM0VpQztBQUFBO0FBQUE7O0FBdUhqQyxNQUFNL0gsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ2dGLE9BQUQsRUFBVUMsR0FBVixFQUFlQyxNQUFmLEVBQTBCO0FBQzVDRSxZQUFRLGlDQUFNRCxLQUFOO0FBQWFILGFBQU8sRUFBRUEsT0FBdEI7QUFBK0JDLFNBQUcsRUFBRUEsR0FBcEM7QUFBeUNDLFlBQU0sRUFBRUE7QUFBakQsT0FBUjtBQUNBSCxlQUFXLENBQUMsSUFBRCxDQUFYO0FBQ0QsR0FIRDs7QUFLQSxNQUFNTyxVQUFVO0FBQUEsZ01BQUcsaUJBQU00QyxJQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNqQixrQkFBSXJFLE9BQU8sSUFBSXFFLElBQUksSUFBSWhFLE9BQXZCLEVBQWdDO0FBQzlCQywwQkFBVSxDQUFDK0QsSUFBRCxDQUFWO0FBQ0Q7O0FBQ0RyRCx5QkFBVyxDQUFDcUQsSUFBSSxDQUFDQyxJQUFOLENBQVg7QUFDTUMsd0JBTFcsR0FLRSxJQUFJbEMsSUFBSixFQUxGO0FBQUE7QUFBQSxxQkFPWCxJQUFJbUMsT0FBSixDQUFZLFVBQUFDLE9BQU8sRUFBSTtBQUMzQixvQkFBSUMsTUFBTSxHQUFHLElBQUlDLFVBQUosRUFBYjs7QUFDQUQsc0JBQU0sQ0FBQ0UsTUFBUCxHQUFnQixVQUFVQyxLQUFWLEVBQWlCO0FBQy9CLHNCQUFNQyxRQUFRLEdBQUcsSUFBSUMsVUFBSixDQUFlRixLQUFLLENBQUMvRyxNQUFOLENBQWE0RSxNQUE1QixDQUFqQjtBQUNBLHNCQUFNc0MsR0FBRyxHQUFHakQseUNBQUEsQ0FBVStDLFFBQVYsRUFBb0I7QUFBRUcsd0JBQUksRUFBRSxPQUFSO0FBQWlCQyw2QkFBUyxFQUFFLElBQTVCO0FBQWtDQywwQkFBTSxFQUFFO0FBQTFDLG1CQUFwQixDQUFaO0FBQ0Esc0JBQU1DLFNBQVMsR0FBR0osR0FBRyxDQUFDSyxNQUFKLENBQVdMLEdBQUcsQ0FBQ00sVUFBSixDQUFlLENBQWYsQ0FBWCxDQUFsQixDQUgrQixDQUkvQjs7QUFDQSxzQkFBTUMsS0FBSyxHQUFHeEQsMENBQUEsQ0FBV3lELFlBQVgsQ0FBd0JKLFNBQVMsQ0FBQyxNQUFELENBQWpDLENBQWQ7QUFDQUcsdUJBQUssQ0FBQ0UsQ0FBTixDQUFRQyxDQUFSLEdBQVksQ0FBWixDQU4rQixDQU1oQjs7QUFDZkgsdUJBQUssQ0FBQ3pJLENBQU4sQ0FBUTRJLENBQVIsR0FBWSxFQUFaLENBUCtCLENBT2Y7O0FBQ2hCLHNCQUFNQyxTQUFTLEdBQUc1RCwwQ0FBQSxDQUFXNkQsWUFBWCxDQUF3QkwsS0FBeEIsQ0FBbEI7QUFFQSxzQkFBSU0sUUFBUSxHQUFHOUQsMENBQUEsQ0FBVytELGFBQVgsQ0FBeUJWLFNBQXpCLEVBQW9DO0FBQ2pEVyw2QkFBUyxFQUFFLEtBRHNDO0FBRWpEQyx1QkFBRyxFQUFFLEtBRjRDO0FBR2pEQywwQkFBTSxFQUFFLEVBSHlDO0FBSWpEVix5QkFBSyxFQUFFSTtBQUowQyxtQkFBcEMsQ0FBZixDQVYrQixDQWlCL0I7O0FBQ0FFLDBCQUFRLEdBQUdBLFFBQVEsQ0FBQ0ssR0FBVCxDQUFhLFVBQUE1QyxRQUFRLEVBQUk7QUFDbEMsMkJBQU8sNkZBQUk2QyxNQUFNLENBQUNDLElBQVAsQ0FBWTlDLFFBQVosQ0FBSixFQUEyQitDLE1BQTNCLENBQWtDLFVBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFjO0FBQ3JERCx5QkFBRyxDQUFDQyxHQUFHLENBQUM1QyxPQUFKLENBQVksVUFBWixFQUF3QixHQUF4QixDQUFELENBQUgsR0FBb0NMLFFBQVEsQ0FBQ2lELEdBQUQsQ0FBNUM7QUFDQSw2QkFBT0QsR0FBUDtBQUNELHFCQUhNLEVBR0osRUFISSxDQUFQO0FBSUQsbUJBTFUsQ0FBWDtBQU9BVCwwQkFBUSxJQUFJLElBQVosSUFBb0JsSixZQUFZLENBQUMsS0FBRCxDQUFoQztBQUNBbUUsc0NBQW9CLENBQUMsS0FBRCxDQUFwQjtBQUNBRiw4QkFBWSxDQUFDaUYsUUFBRCxDQUFaO0FBQ0FuRiw4QkFBWSxDQUFDO0FBQ1h1RSx3QkFBSSxFQUFFLFFBREs7QUFFWHVCLHdCQUFJLEVBQUU7QUFDSkMsK0JBQVMsRUFBRSxJQUFJcEUsSUFBSixHQUFXcUUsV0FBWCxHQUF5QkMsS0FBekIsQ0FBK0IsQ0FBL0IsRUFBa0MsRUFBbEMsQ0FEUDtBQUVKQyw4QkFBUSxFQUFFLElBQUl2RSxJQUFKLEtBQWFrQyxVQUZuQjtBQUdKc0MsOEJBQVEsRUFBRXhDLElBQUksQ0FBQ3lDLElBSFg7QUFJSi9GLDhCQUFRLEVBQUVzRCxJQUFJLENBQUNDLElBSlg7QUFLSnlDLCtCQUFTLEVBQUVsQixRQUFRLENBQUNtQjtBQUxoQjtBQUZLLG1CQUFELENBQVo7QUFVQXZDLHlCQUFPO0FBQ1IsaUJBdkNEOztBQXdDQUMsc0JBQU0sQ0FBQ3VDLGlCQUFQLENBQXlCNUMsSUFBekI7QUFDRCxlQTNDSyxDQVBXOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVY1QyxVQUFVO0FBQUE7QUFBQTtBQUFBLEtBQWhCOztBQXFEQSxzQkFDRSxxRUFBQywwREFBRDtBQUFRLGFBQVMsRUFBRXpELCtEQUFNLENBQUNrSixTQUExQjtBQUFxQyxjQUFVLEVBQUV6RixVQUFqRDtBQUFBLDJCQUNFO0FBQU0sZUFBUyxFQUFFekQsK0RBQU0sQ0FBQ21KLElBQXhCO0FBQUEsOEJBQ0U7QUFBSSxpQkFBUyxFQUFFbkosK0RBQU0sQ0FBQ29KLEtBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsRUFHRyxDQUFDbkcsUUFBRCxpQkFDQztBQUFLLGlCQUFTLEVBQUVqRCwrREFBTSxDQUFDcUosTUFBdkI7QUFBQSwrQkFDRSxxRUFBQyw4REFBRDtBQUFXLHFCQUFXLEVBQUVsTCxXQUF4QjtBQUFxQyxnQkFBTSxFQUFFOEQ7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKSixFQVNHZ0IsUUFBUSxpQkFDUDtBQUFBLGdDQUNFLHFFQUFDLCtEQUFEO0FBQ0Usb0JBQVUsRUFBRVEsVUFEZDtBQUVFLGtCQUFRLEVBQUVWLFFBRlo7QUFHRSx3QkFBYyxFQUFFO0FBSGxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsRUFPR0osU0FBUyxpQkFDUjtBQUFBLGtDQUNFO0FBQUkscUJBQVMsRUFBRTNDLCtEQUFNLENBQUNzSixRQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixFQUdHM0csU0FBUyxDQUFDcUcsTUFBVixJQUFvQixDQUFwQixpQkFDQztBQUFHLHFCQUFTLEVBQUVoSiwrREFBTSxDQUFDdUosV0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkosRUFPRzVHLFNBQVMsQ0FBQ3FHLE1BQVYsR0FBbUIsQ0FBbkIsaUJBQ0M7QUFBQSxvQ0FDRTtBQUFBLHNDQUNFO0FBQUEsd0NBQ0U7QUFBQSwwQ0FDRTtBQUFJLDJCQUFPLEVBQUMsR0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFERixlQUVFO0FBQUksMkJBQU8sRUFBQyxHQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUZGLGVBR0U7QUFBSSwyQkFBTyxFQUFDLEdBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBSEYsZUFJRTtBQUFJLDJCQUFPLEVBQUMsR0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFKRixlQUtFO0FBQUksMkJBQU8sRUFBQyxHQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUxGLGVBTUU7QUFBSSwyQkFBTyxFQUFDLEdBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURGLGVBU0U7QUFBQSwwQ0FDRTtBQUFJLDJCQUFPLEVBQUMsR0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFERixlQUVFO0FBQUksMkJBQU8sRUFBQyxHQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUZGLGVBR0U7QUFBSSwyQkFBTyxFQUFDLEdBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixlQWdCRTtBQUFBLDBCQUNHckcsU0FBUyxDQUFDdUYsR0FBVixDQUFjLFVBQUNsSixJQUFELEVBQU93SyxLQUFQO0FBQUEsc0NBQ2I7QUFBQSw0Q0FDRTtBQUFJLCtCQUFTLEVBQUV4SiwrREFBTSxDQUFDeUosTUFBdEI7QUFBQSxnQ0FBK0J6SyxJQUFJLENBQUMsS0FBRDtBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURGLGVBRUU7QUFBSSwrQkFBUyxFQUFFZ0IsK0RBQU0sQ0FBQ3lKLE1BQXRCO0FBQUEsZ0NBQStCekssSUFBSSxDQUFDLFFBQUQ7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFGRixlQUdFO0FBQUksK0JBQVMsRUFBRWdCLCtEQUFNLENBQUN5SixNQUF0QjtBQUFBLGdDQUErQnpLLElBQUksQ0FBQyxNQUFEO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBSEYsZUFJRTtBQUFJLCtCQUFTLEVBQUVnQiwrREFBTSxDQUFDeUosTUFBdEI7QUFBQSxnQ0FBK0J6SyxJQUFJLENBQUMsV0FBRDtBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUpGLEVBTUdBLElBQUksQ0FBQyxRQUFELENBQUosS0FBbUIsRUFBbkIsaUJBQ0M7QUFBSSwrQkFBUyxFQUFFZ0IsK0RBQU0sQ0FBQ3lKLE1BQXRCO0FBQUEsNkNBQ0U7QUFBUSwrQkFBTyxFQUFFO0FBQUEsaUNBQU1wRSxVQUFVLENBQUNyRyxJQUFELEVBQU93SyxLQUFQLENBQWhCO0FBQUEseUJBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFQSixFQWFHeEssSUFBSSxDQUFDLFFBQUQsQ0FBSixLQUFtQixFQUFuQixpQkFDQztBQUFJLCtCQUFTLEVBQUVnQiwrREFBTSxDQUFDeUosTUFBdEI7QUFBQSxnQ0FBK0J6SyxJQUFJLENBQUMsUUFBRDtBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQWRKLGVBZ0JFO0FBQUksK0JBQVMsRUFBRWdCLCtEQUFNLENBQUN5SixNQUF0QjtBQUFBLGdDQUErQnpLLElBQUksQ0FBQyxtQkFBRDtBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQWhCRixlQWlCRTtBQUFJLCtCQUFTLEVBQUVnQiwrREFBTSxDQUFDeUosTUFBdEI7QUFBQSxnQ0FBK0J6SyxJQUFJLENBQUMsb0JBQUQ7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFqQkYsRUFrQkdBLElBQUksQ0FBQyxRQUFELENBQUosS0FBbUIsRUFBbkIsaUJBQ0M7QUFBSSwrQkFBUyxFQUFFZ0IsK0RBQU0sQ0FBQ3lKLE1BQXRCO0FBQUEsNkNBQ0U7QUFDRSwrQkFBTyxFQUFFO0FBQUEsaUNBQU1uRixxQkFBcUIsQ0FBQ3RGLElBQUksQ0FBQyxRQUFELENBQUwsRUFBaUJ3SyxLQUFqQixDQUEzQjtBQUFBLHlCQURYO0FBQUEsbUNBR0d4SyxJQUFJLENBQUMsbUJBQUQsQ0FBSixLQUE4QixFQUE5QixJQUFvQyxzQkFIdkMsRUFJR0EsSUFBSSxDQUFDLG1CQUFELENBQUosS0FBOEIsRUFBOUIsSUFBb0Msb0JBSnZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBbkJKLEVBNEJHQSxJQUFJLENBQUMsUUFBRCxDQUFKLEtBQW1CLEVBQW5CLGlCQUF5QjtBQUFJLCtCQUFTLEVBQUVnQiwrREFBTSxDQUFDeUo7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkE1QjVCO0FBQUEscUJBQVNELEtBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFEYTtBQUFBLGlCQUFkO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBcURFO0FBQVEsdUJBQVMsRUFBRXhKLCtEQUFNLENBQUNFLE1BQTFCO0FBQWtDLHFCQUFPLEVBQUUyRCxTQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFyREY7QUFBQSwwQkFSSjtBQUFBLHdCQVJKO0FBQUEsc0JBVkosZUF5RkUscUVBQUMsMERBQUQ7QUFDRSxlQUFPLEVBQUMsNkJBRFY7QUFFRSxnQkFBUSxFQUFDLHNEQUZYO0FBR0UsWUFBSSxlQUNGO0FBQUEsaUNBQ0U7QUFBRyxxQkFBUyxFQUFFN0QsK0RBQU0sQ0FBQzBKLElBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBekZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTJHRDs7R0E1UnVCdEgsUTs7S0FBQUEsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9leHBlcmltZW50YXRpb25zL2FyZGVubmVzLmI2Yzk1MzI1OGVmNDA5NDQwMjUxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbkZvcm0oeyBoYW5kbGVMb2dpbiwgcmR2VXJsIH0pIHtcbiAgY29uc3QgW2xvZ2luLCBzZXRMb2dpbl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2lzUGVuZGluZywgc2V0SXNQZW5kaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgdXJsID0gYCR7cmR2VXJsfS9hcGkvdjEvYXV0aC9zaWduX2luYDtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCB1c2VyID0geyBlbWFpbDogbG9naW4sIHBhc3N3b3JkOiBwYXNzd29yZCB9O1xuICAgIHNldElzUGVuZGluZyh0cnVlKTtcblxuICAgIGZldGNoKHVybCwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHVzZXIpLFxuICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgc2V0SXNQZW5kaW5nKGZhbHNlKTtcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICBoYW5kbGVMb2dpbihcbiAgICAgICAgICByZXNwb25zZS5oZWFkZXJzLmdldChcImFjY2Vzcy10b2tlblwiKSxcbiAgICAgICAgICByZXNwb25zZS5oZWFkZXJzLmdldChcInVpZFwiKSxcbiAgICAgICAgICByZXNwb25zZS5oZWFkZXJzLmdldChcImNsaWVudFwiKVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWxlcnQoXG4gICAgICAgICAgYEF1Y3VuIGNvbXB0ZSBuJ2VzdCByYXR0YWNow6kgw6AgY2UgY291cGxlIGVtYWlsL21vdCBkZSBwYXNzZS4gTWVyY2kgZGUgdsOpcmlmaWVyIHZvcyBpZGVudGlmaWFudHMuYFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuICAgIC8vIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgLy8gICBjb25zb2xlLmxvZygnU3VjY2VzczonKTtcbiAgICAvLyB9KVxuICAgIC8vIC5jYXRjaChlcnJvciA9PiB7XG4gICAgLy8gICBhbGVydChgVW5lIGVycmV1ciBzJ2VzdCBwcm9kdWl0ZSwgbWVyY2kgZGUgcsOpZXNzYXllci5gKTtcbiAgICAvLyAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKTtcbiAgICAvLyB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJhZ2VudF9lbWFpbFwiPkVtYWlsPC9sYWJlbD5cbiAgICAgIDxpbnB1dFxuICAgICAgICBpZD1cImFnZW50X2VtYWlsXCJcbiAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgdmFsdWU9e2xvZ2lufVxuICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRMb2dpbihlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIHJlcXVpcmVkXG4gICAgICAvPlxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJhZ2VudF9wYXNzd29yZFwiPk1vdCBkZSBwYXNzZTwvbGFiZWw+XG4gICAgICA8aW5wdXRcbiAgICAgICAgaWQ9XCJhZ2VudF9wYXNzd29yZFwiXG4gICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICByZXF1aXJlZFxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5tYXJnaW5fYm90dG9tfVxuICAgICAgLz5cbiAgICAgIHshaXNQZW5kaW5nICYmIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufT5TZSBjb25uZWN0ZXI8L2J1dHRvbj59XG4gICAgICB7aXNQZW5kaW5nICYmIChcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259PkNvbm5leGlvbiBlbiBjb3VyczwvYnV0dG9uPlxuICAgICAgKX1cbiAgICA8L2Zvcm0+XG4gICk7XG59XG4iLCJpbXBvcnQgQXBwbGljYXRpb24gZnJvbSBcIi4vQXBwbGljYXRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwbGljYW50IHtcbiAgY29uc3RydWN0b3IoZG9tKSB7XG4gICAgdGhpcy5kb20gPSBkb207XG4gIH1cblxuICBnZXQgbGFzdE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiTk9NXCIpWzBdPy5pbm5lckhUTUw7XG4gIH1cblxuICBnZXQgZmlyc3ROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmRvbS5nZXRFbGVtZW50c0J5VGFnTmFtZShcIlBSRU5PTVwiKVswXT8uaW5uZXJIVE1MO1xuICB9XG5cbiAgZ2V0IHJvbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiUk9MRVBFUlNcIilbMF0/LmlubmVySFRNTDtcbiAgfVxuXG4gIGdldCB0b3BFbnRyYW50KCkge1xuICAgIHJldHVybiB0aGlzLmRvbS5nZXRFbGVtZW50c0J5VGFnTmFtZShcIlRPUFBFUlNFTlREUk9ERVZPUlNBXCIpWzBdPy5pbm5lckhUTUw7XG4gIH1cblxuICBnZXQgdG9wRHJvaXRzRXREZXZvaXJzKCkge1xuICAgIHJldHVybiB0aGlzLmRvbS5nZXRFbGVtZW50c0J5VGFnTmFtZShcIlRPUFBFUlNEUk9ERVZPUlNBXCIpWzBdPy5pbm5lckhUTUw7XG4gIH1cblxuICBnZXQgc29jaW9Qcm9mZXNzaW9uYWxEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLmRvbS5nZXRFbGVtZW50c0J5VGFnTmFtZShcIkRvbm5lZXNTb2Npb1Byb2Zlc3Npb25uZWxsZXNcIilbMF0/LmlubmVySFRNTDtcbiAgfVxuXG4gIGdldCBuYXRpb25hbGl0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5kb20uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJOQVRJXCIpWzBdPy5pbm5lckhUTUw7XG4gIH1cblxuICBnZXQgYWN0aXZpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiQUNUXCIpWzBdPy5pbm5lckhUTUw7XG4gIH1cblxuICBnZXQgYXBwbGljYXRpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBBcHBsaWNhdGlvbih0aGlzLmRvbS5wYXJlbnROb2RlKTtcbiAgfVxuXG4gIGdldCByc2FBcHBsaWNhdGlvbk51bWJlcigpIHtcbiAgICByZXR1cm4gdGhpcy5hcHBsaWNhdGlvbi5yc2FBcHBsaWNhdGlvbk51bWJlcjtcbiAgfVxuXG4gIGdldCBlbWFpbEFkZHJlc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXBwbGljYXRpb24uZW1haWxBZGRyZXNzO1xuICB9XG5cbiAgZ2V0IGFwcGxpY2F0aW9uU3RhdHVzQ29kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5hcHBsaWNhdGlvbi5zdGF0dXNDb2RlO1xuICB9XG5cbiAgZ2V0IGFwcGxpY2F0aW9uU3VzcGVuc2lvbk1vdGl2ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5hcHBsaWNhdGlvbi5zdXNwZW5zaW9uTW90aXZlO1xuICB9XG5cbiAgZ2V0IHBob25lTnVtYmVyKCkge1xuICAgIHJldHVybiB0aGlzLmFwcGxpY2F0aW9uLnBob25lTnVtYmVyO1xuICB9XG5cbiAgZ2V0IHNvY2lhbFNlY3VyaXR5TnVtYmVyKCkge1xuICAgIHJldHVybiB0aGlzLmFwcGxpY2F0aW9uLnNvY2lhbFNlY3VyaXR5TnVtYmVyO1xuICB9XG5cbiAgZ2V0IHRvcEZveWVyRHJvaXRzRXREZXZvaXJzKCkge1xuICAgIHJldHVybiB0aGlzLmFwcGxpY2F0aW9uLnRvcEZveWVyRHJvaXRzRXREZXZvaXJzO1xuICB9XG5cbiAgLy8gc3RyaW5nIHVzZWQgdG8gaWRlbnRpZnkgYXBwbGljYW50c1xuICBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIHRoaXMucnNhQXBwbGljYXRpb25OdW1iZXIsXG4gICAgICB0aGlzLmxhc3ROYW1lLnNwbGl0KFwiIFwiKS5qb2luKFwiLVwiKSxcbiAgICAgIHRoaXMuZmlyc3ROYW1lLnNwbGl0KFwiIFwiKS5qb2luKFwiLVwiKSxcbiAgICAgIHRoaXMucm9sZSxcbiAgICBdLmpvaW4oXCItXCIpO1xuICB9XG5cbiAgcGVyc29uYWxEYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICByc2FBcHBsaWNhdGlvbk51bWJlcjogdGhpcy5yc2FBcHBsaWNhdGlvbk51bWJlcixcbiAgICAgIHNvY2lhbFNlY3VyaXR5TnVtYmVyOiB0aGlzLnNvY2lhbFNlY3VyaXR5TnVtYmVyLFxuICAgICAgbGFzdE5hbWU6IHRoaXMubGFzdE5hbWUsXG4gICAgICBmaXJzdE5hbWU6IHRoaXMuZmlyc3ROYW1lLFxuICAgICAgcm9sZTogdGhpcy5yb2xlLFxuICAgICAgLi4udGhpcy5jb250YWN0SW5mb3MoKSxcbiAgICB9O1xuICB9XG5cbiAgY29udGFjdEluZm9zKCkge1xuICAgIHJldHVybiB7XG4gICAgICAuLi4odGhpcy5waG9uZU51bWJlciAmJiB7IHBob25lTnVtYmVyOiB0aGlzLnBob25lTnVtYmVyIH0pLFxuICAgICAgLi4uKHRoaXMuZW1haWxBZGRyZXNzICYmIHsgZW1haWxBZGRyZXNzOiB0aGlzLmVtYWlsQWRkcmVzcyB9KSxcbiAgICB9O1xuICB9XG5cbiAgaXNUb3BFbnRyYW50KCkge1xuICAgIHJldHVybiB0aGlzLnRvcEVudHJhbnQgPT09IFwiMVwiO1xuICB9XG5cbiAgZWxpZ2libGVBc05ldygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5hcHBsaWNhdGlvbi5lbGlnaWJsZUFzTmV3KCkgJiZcbiAgICAgICh0aGlzLndpdGhEcm9pdHNFdERldm9pcnMoKSB8fCB0aGlzLmVsaWdpYmxlQXNOZXdJbkZveWVyKCkpXG4gICAgKTtcbiAgfVxuXG4gIGVsaWdpYmxlQXNOZXdJbkZveWVyKCkge1xuICAgIHJldHVybiB0aGlzLmluRm95ZXJXaXRoRHJvaXRzRXREZXZvaXJzKCkgJiYgW1wiRU5GXCIsIFwiQVVUXCJdLmluY2x1ZGVzKHRoaXMucm9sZSk7XG4gIH1cblxuICBpbkZveWVyV2l0aERyb2l0c0V0RGV2b2lycygpIHtcbiAgICByZXR1cm4gdGhpcy50b3BGb3llckRyb2l0c0V0RGV2b2lycyA9PT0gXCIxXCI7XG4gIH1cblxuICB3aXRoRHJvaXRzRXREZXZvaXJzKCkge1xuICAgIHJldHVybiB0aGlzLnRvcERyb2l0c0V0RGV2b2lycyA9PT0gXCIxXCI7XG4gIH1cbn1cbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5Ib21lX2NvbnRhaW5lcl9fMUVjc1Uge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBwYWRkaW5nOiAwIDAuNXJlbTtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tb3otYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgIC1tb3otYm94LW9yaWVudDogdmVydGljYWw7XFxuICAgICAtbW96LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAtbW96LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgLW1vei1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLkhvbWVfY29udGVudF9fMmZxT3oge1xcbiAgbWF4LXdpZHRoOiA4MDBweDtcXG59XFxuXFxuLkhvbWVfbWFpbl9fMXg4Z0Mge1xcbiAgcGFkZGluZzogNXJlbSAwO1xcbiAgLXdlYmtpdC1mbGV4OiAxIDE7XFxuICAgICAtbW96LWJveC1mbGV4OiAxO1xcbiAgICAgICAgICBmbGV4OiAxIDE7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbW96LWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAtbW96LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgICAgLW1vei1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgLW1vei1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgIC1tb3otYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5Ib21lX2Zvb3Rlcl9fMVdkaEQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlYWVhZWE7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbW96LWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgLW1vei1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgIC1tb3otYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5Ib21lX2Zvb3Rlcl9fMVdkaEQgaW1nIHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxufVxcblxcbi5Ib21lX2Zvb3Rlcl9fMVdkaEQgYSB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbW96LWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgLW1vei1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgIC1tb3otYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5Ib21lX3RpdGxlX18zRGpSNyBhIHtcXG4gIGNvbG9yOiAjMDA3MGYzO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uSG9tZV90aXRsZV9fM0RqUjcgYTpob3ZlcixcXG4uSG9tZV90aXRsZV9fM0RqUjcgYTpmb2N1cyxcXG4uSG9tZV90aXRsZV9fM0RqUjcgYTphY3RpdmUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi5Ib21lX3RpdGxlX18zRGpSNyB7XFxuICBtYXJnaW46IDA7XFxuICBsaW5lLWhlaWdodDogMS4xNTtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG59XFxuXFxuLkhvbWVfYXBwbGljYW50c190YWJsZV9fSjJCOTMge1xcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcXG59XFxuXFxuLkhvbWVfYXBwbGljYW50c190YWJsZV9fSjJCOTMgdGQge1xcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG59XFxuLkhvbWVfYXBwbGljYW50c190YWJsZV9fSjJCOTMgdGgge1xcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG59XFxuXFxuLkhvbWVfc3VidGl0bGVfXzNJMnlJIHtcXG4gIG1hcmdpbjogMDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjE1O1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5Ib21lX21hcmdpbl9ib3R0b21fXzNPWlc5IHtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHggIWltcG9ydGFudDtcXG59XFxuXFxuLkhvbWVfdGl0bGVfXzNEalI3LFxcbi5Ib21lX3N1YnRpdGxlX18zSTJ5SSxcXG4uSG9tZV9kZXNjcmlwdGlvbl9fMTdaNEYsXFxuLkhvbWVfcGVuZGluZ193YXJuaW5nX18yTDc2cixcXG4uSG9tZV9jZW50ZXJfXzJaeGRyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLkhvbWVfZGVzY3JpcHRpb25fXzE3WjRGLFxcbi5Ib21lX3RleHRfXzFzQ1FhLFxcbi5Ib21lX3BlbmRpbmdfd2FybmluZ19fMkw3NnIge1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgSG9tZV9ncm93X18zaWlGLSB7XFxuICAgIDAlIHtcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjA0KTtcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA0KTtcXG4gICAgICB9XFxuICAgIDUwJSB7XFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgICAgfVxcbiAgICAgIDEwMCUge1xcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDQpO1xcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDQpO1xcbiAgICB9XFxufVxcblxcbkAtbW96LWtleWZyYW1lcyBIb21lX2dyb3dfXzNpaUYtIHtcXG4gICAgMCUge1xcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMDQpO1xcbiAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDQpO1xcbiAgICAgIH1cXG4gICAgNTAlIHtcXG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgICB9XFxuICAgICAgMTAwJSB7XFxuICAgICAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4wNCk7XFxuICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNCk7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyBIb21lX2dyb3dfXzNpaUYtIHtcXG4gICAgMCUge1xcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDQpO1xcbiAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMDQpO1xcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDQpO1xcbiAgICAgIH1cXG4gICAgNTAlIHtcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgICB9XFxuICAgICAgMTAwJSB7XFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wNCk7XFxuICAgICAgICAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4wNCk7XFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNCk7XFxuICAgIH1cXG59XFxuXFxuLkhvbWVfdGFibGVfY29udGFpbmVyX193dmtYNyB7XFxuICBtYXJnaW4tdG9wOiA0MHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLkhvbWVfcGVuZGluZ193YXJuaW5nX18yTDc2ciB7XFxuICBjb2xvcjogcmdiKDE5OSwgNTUsIDU1KTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogNXM7XFxuICAgICAtbW96LWFuaW1hdGlvbi1kdXJhdGlvbjogNXM7XFxuICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNXM7IC8qIHRoZSBkdXJhdGlvbiBvZiB0aGUgYW5pbWF0aW9uICovXFxuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbiAgICAgLW1vei1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXG4gICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7IC8qIGhvdyB0aGUgYW5pbWF0aW9uIHdpbGwgYmVoYXZlICovXFxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMHM7XFxuICAgICAtbW96LWFuaW1hdGlvbi1kZWxheTogMHM7XFxuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMHM7IC8qIGhvdyBsb25nIHRvIGRlbGF5IHRoZSBhbmltYXRpb24gZnJvbSBzdGFydGluZyAqL1xcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXG4gICAgIC1tb3otYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxuICAgICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlOyAvKiBob3cgbWFueSB0aW1lcyB0aGUgYW5pbWF0aW9uIHdpbGwgcGxheSAqL1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogSG9tZV9ncm93X18zaWlGLTtcXG4gICAgIC1tb3otYW5pbWF0aW9uLW5hbWU6IEhvbWVfZ3Jvd19fM2lpRi07XFxuICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBIb21lX2dyb3dfXzNpaUYtOyAvKiB0aGUgbmFtZSBvZiB0aGUgYW5pbWF0aW9uIHdlIGRlZmluZWQgYWJvdmUgKi9cXG59XFxuXFxuLkhvbWVfY29kZV9fYXh4Mlkge1xcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDAuNzVyZW07XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIGZvbnQtZmFtaWx5OiBNZW5sbywgTW9uYWNvLCBMdWNpZGEgQ29uc29sZSwgTGliZXJhdGlvbiBNb25vLCBEZWphVnUgU2FucyBNb25vLFxcbiAgICBCaXRzdHJlYW0gVmVyYSBTYW5zIE1vbm8sIENvdXJpZXIgTmV3LCBtb25vc3BhY2U7XFxufVxcblxcbi5Ib21lX2JvbGRfXzJ0S2V6IHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uSG9tZV9sZWdlbmRlX18zZjR1biB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXggIWltcG9ydGFudDtcXG4gIGRpc3BsYXk6IC1tb3otYm94ICFpbXBvcnRhbnQ7XFxuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XFxuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIG1hcmdpbjogMCAzcmVtO1xcbn1cXG5cXG4uSG9tZV9sZWdlbmRlX3RpdGxlX18yQnJqXyB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4uSG9tZV9sZWdlbmRlX2JveF9fMzJiMUkge1xcbiAgd2lkdGg6IDQwJTtcXG4gIC8qIG1hcmdpbjogMCAxcmVtOyAqL1xcbn1cXG5cXG4uSG9tZV9ncmlkX18yRWkyRiB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbW96LWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgICAgLW1vei1ib3gtYWxpZ246IHN0cmV0Y2g7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgLXdlYmtpdC1mbGV4LXdyYXA6IHdyYXA7XFxuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gIG1hcmdpbi10b3A6IDNyZW07XFxufVxcblxcbi5Ib21lX2dyaWRfXzJFaTJGLFxcbi5Ib21lX3RleHRfXzFzQ1FhIHtcXG4gIG1heC13aWR0aDogODAwcHg7XFxufVxcblxcbi5Ib21lX2NhcmRfXzJTZHRCIHtcXG4gIG1hcmdpbjogMXJlbTtcXG4gIC13ZWJraXQtZmxleC1iYXNpczogNDUlO1xcbiAgICAgICAgICBmbGV4LWJhc2lzOiA0NSU7XFxuICBwYWRkaW5nOiAxLjVyZW07XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZWFlYWVhO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIC1tb3otdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZSwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2U7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLCBib3JkZXItY29sb3IgMC4xNXMgZWFzZTtcXG59XFxuXFxuLkhvbWVfY2FyZF9fMlNkdEI6aG92ZXIsXFxuLkhvbWVfY2FyZF9fMlNkdEI6Zm9jdXMsXFxuLkhvbWVfY2FyZF9fMlNkdEI6YWN0aXZlIHtcXG4gIGNvbG9yOiAjMDA3MGYzO1xcbiAgYm9yZGVyLWNvbG9yOiAjMDA3MGYzO1xcbn1cXG5cXG4uSG9tZV9jYXJkX18yU2R0QiBoMyB7XFxuICBtYXJnaW46IDAgMCAxcmVtIDA7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLkhvbWVfY2FyZF9fMlNkdEIgcCB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBsaW5lLWhlaWdodDogMS41O1xcbn1cXG5cXG4uSG9tZV9sb2dvX18xWWJySCB7XFxuICBoZWlnaHQ6IDFlbTtcXG59XFxuXFxuLkhvbWVfY3JlYXRlX19TT0VaTCB7XFxuICBtYXgtd2lkdGg6IDgwMHB4O1xcbiAgbWFyZ2luOiA1MHB4IGF1dG8gMjBweCBhdXRvO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogLW1vei1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAtbW96LWJveC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5Ib21lX2NyZWF0ZV9fU09FWkwgbGFiZWwge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4uSG9tZV9jcmVhdGVfX1NPRVpMIGlucHV0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogNnB4IDEwcHg7XFxuICBtYXJnaW46IDEwcHggMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLkhvbWVfYnV0dG9uX19YYzltQSB7XFxuICBtYXJnaW46IDIwcHggYXV0byAyMHB4IGF1dG87XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBwYWRkaW5nOiAxMnB4O1xcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uSG9tZV9idXR0b25fZ3JvdXBfXzJtUGdjIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tb3otYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgLW1vei1ib3gtcGFjazoganVzdGlmeTtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uSG9tZV9idXR0b25fX1hjOW1BOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5Ib21lX2dyaWRfXzJFaTJGIHtcXG4gICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAtbW96LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgICAgICAtbW96LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbiAgLkhvbWVfZ3JpZF9fMkVpMkYsXFxuICAuSG9tZV90ZXh0X18xc0NRYSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG5cXG4uSG9tZV9udW1lcmljX18xV25xYSB7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLHFCQUFhO0VBQWIsaUJBQWE7RUFBYixhQUFhO0VBQ2IsOEJBQXNCO0tBQXRCLHlCQUFzQjtLQUF0QiwwQkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLCtCQUF1QjtLQUF2QixxQkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLDJCQUFtQjtLQUFuQixzQkFBbUI7VUFBbkIsbUJBQW1C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OUIsc0JBQThCO1VBQTlCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRTtJQUNFLDhCQUFzQjtPQUF0Qix5QkFBc0I7T0FBdEIsMEJBQXNCO1lBQXRCLHNCQUFzQjtFQUN4QjtFQUNBOztJQUVFLFdBQVc7RUFDYjtBQUNGOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jb250YWluZXIge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBwYWRkaW5nOiAwIDAuNXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBtYXgtd2lkdGg6IDgwMHB4O1xcbn1cXG5cXG4ubWFpbiB7XFxuICBwYWRkaW5nOiA1cmVtIDA7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mb290ZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlYWVhZWE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZm9vdGVyIGltZyB7XFxuICBtYXJnaW4tbGVmdDogMC41cmVtO1xcbn1cXG5cXG4uZm9vdGVyIGEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRpdGxlIGEge1xcbiAgY29sb3I6ICMwMDcwZjM7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi50aXRsZSBhOmhvdmVyLFxcbi50aXRsZSBhOmZvY3VzLFxcbi50aXRsZSBhOmFjdGl2ZSB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIG1hcmdpbjogMDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjE1O1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbn1cXG5cXG4uYXBwbGljYW50c190YWJsZSB7XFxuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xcbn1cXG5cXG4uYXBwbGljYW50c190YWJsZSB0ZCB7XFxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbn1cXG4uYXBwbGljYW50c190YWJsZSB0aCB7XFxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbn1cXG5cXG4uc3VidGl0bGUge1xcbiAgbWFyZ2luOiAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLm1hcmdpbl9ib3R0b20ge1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweCAhaW1wb3J0YW50O1xcbn1cXG5cXG4udGl0bGUsXFxuLnN1YnRpdGxlLFxcbi5kZXNjcmlwdGlvbixcXG4ucGVuZGluZ193YXJuaW5nLFxcbi5jZW50ZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24sXFxuLnRleHQsXFxuLnBlbmRpbmdfd2FybmluZyB7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbkBrZXlmcmFtZXMgZ3JvdyB7XFxuICAgIDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNCk7XFxuICAgICAgfVxcbiAgICA1MCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgICB9XFxuICAgICAgMTAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDQpO1xcbiAgICB9XFxufVxcblxcbi50YWJsZV9jb250YWluZXIge1xcbiAgbWFyZ2luLXRvcDogNDBweDtcXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5wZW5kaW5nX3dhcm5pbmcge1xcbiAgY29sb3I6IHJnYigxOTksIDU1LCA1NSk7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1czsgLyogdGhlIGR1cmF0aW9uIG9mIHRoZSBhbmltYXRpb24gKi9cXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0OyAvKiBob3cgdGhlIGFuaW1hdGlvbiB3aWxsIGJlaGF2ZSAqL1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAwczsgLyogaG93IGxvbmcgdG8gZGVsYXkgdGhlIGFuaW1hdGlvbiBmcm9tIHN0YXJ0aW5nICovXFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTsgLyogaG93IG1hbnkgdGltZXMgdGhlIGFuaW1hdGlvbiB3aWxsIHBsYXkgKi9cXG4gIGFuaW1hdGlvbi1uYW1lOiBncm93OyAvKiB0aGUgbmFtZSBvZiB0aGUgYW5pbWF0aW9uIHdlIGRlZmluZWQgYWJvdmUgKi9cXG59XFxuXFxuLmNvZGUge1xcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDAuNzVyZW07XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIGZvbnQtZmFtaWx5OiBNZW5sbywgTW9uYWNvLCBMdWNpZGEgQ29uc29sZSwgTGliZXJhdGlvbiBNb25vLCBEZWphVnUgU2FucyBNb25vLFxcbiAgICBCaXRzdHJlYW0gVmVyYSBTYW5zIE1vbm8sIENvdXJpZXIgTmV3LCBtb25vc3BhY2U7XFxufVxcblxcbi5ib2xkIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ubGVnZW5kZSB7XFxuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIG1hcmdpbjogMCAzcmVtO1xcbn1cXG5cXG4ubGVnZW5kZV90aXRsZSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4ubGVnZW5kZV9ib3gge1xcbiAgd2lkdGg6IDQwJTtcXG4gIC8qIG1hcmdpbjogMCAxcmVtOyAqL1xcbn1cXG5cXG4uZ3JpZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBtYXJnaW4tdG9wOiAzcmVtO1xcbn1cXG5cXG4uZ3JpZCxcXG4udGV4dCB7XFxuICBtYXgtd2lkdGg6IDgwMHB4O1xcbn1cXG5cXG4uY2FyZCB7XFxuICBtYXJnaW46IDFyZW07XFxuICBmbGV4LWJhc2lzOiA0NSU7XFxuICBwYWRkaW5nOiAxLjVyZW07XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZWFlYWVhO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlO1xcbn1cXG5cXG4uY2FyZDpob3ZlcixcXG4uY2FyZDpmb2N1cyxcXG4uY2FyZDphY3RpdmUge1xcbiAgY29sb3I6ICMwMDcwZjM7XFxuICBib3JkZXItY29sb3I6ICMwMDcwZjM7XFxufVxcblxcbi5jYXJkIGgzIHtcXG4gIG1hcmdpbjogMCAwIDFyZW0gMDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uY2FyZCBwIHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxufVxcblxcbi5sb2dvIHtcXG4gIGhlaWdodDogMWVtO1xcbn1cXG5cXG4uY3JlYXRlIHtcXG4gIG1heC13aWR0aDogODAwcHg7XFxuICBtYXJnaW46IDUwcHggYXV0byAyMHB4IGF1dG87XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4uY3JlYXRlIGxhYmVsIHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLmNyZWF0ZSBpbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDZweCAxMHB4O1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4uYnV0dG9uIHtcXG4gIG1hcmdpbjogMjBweCBhdXRvIDIwcHggYXV0bztcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIHBhZGRpbmc6IDEycHg7XFxuICBib3JkZXItcmFkaXVzOiAwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5idXR0b25fZ3JvdXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAuZ3JpZCB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuICAuZ3JpZCxcXG4gIC50ZXh0IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxufVxcblxcbi5udW1lcmljIHtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJjb250YWluZXJcIjogXCJIb21lX2NvbnRhaW5lcl9fMUVjc1VcIixcblx0XCJjb250ZW50XCI6IFwiSG9tZV9jb250ZW50X18yZnFPelwiLFxuXHRcIm1haW5cIjogXCJIb21lX21haW5fXzF4OGdDXCIsXG5cdFwiZm9vdGVyXCI6IFwiSG9tZV9mb290ZXJfXzFXZGhEXCIsXG5cdFwidGl0bGVcIjogXCJIb21lX3RpdGxlX18zRGpSN1wiLFxuXHRcImFwcGxpY2FudHNfdGFibGVcIjogXCJIb21lX2FwcGxpY2FudHNfdGFibGVfX0oyQjkzXCIsXG5cdFwic3VidGl0bGVcIjogXCJIb21lX3N1YnRpdGxlX18zSTJ5SVwiLFxuXHRcIm1hcmdpbl9ib3R0b21cIjogXCJIb21lX21hcmdpbl9ib3R0b21fXzNPWlc5XCIsXG5cdFwiZGVzY3JpcHRpb25cIjogXCJIb21lX2Rlc2NyaXB0aW9uX18xN1o0RlwiLFxuXHRcInBlbmRpbmdfd2FybmluZ1wiOiBcIkhvbWVfcGVuZGluZ193YXJuaW5nX18yTDc2clwiLFxuXHRcImNlbnRlclwiOiBcIkhvbWVfY2VudGVyX18yWnhkclwiLFxuXHRcInRleHRcIjogXCJIb21lX3RleHRfXzFzQ1FhXCIsXG5cdFwidGFibGVfY29udGFpbmVyXCI6IFwiSG9tZV90YWJsZV9jb250YWluZXJfX3d2a1g3XCIsXG5cdFwiZ3Jvd1wiOiBcIkhvbWVfZ3Jvd19fM2lpRi1cIixcblx0XCJjb2RlXCI6IFwiSG9tZV9jb2RlX19heHgyWVwiLFxuXHRcImJvbGRcIjogXCJIb21lX2JvbGRfXzJ0S2V6XCIsXG5cdFwibGVnZW5kZVwiOiBcIkhvbWVfbGVnZW5kZV9fM2Y0dW5cIixcblx0XCJsZWdlbmRlX3RpdGxlXCI6IFwiSG9tZV9sZWdlbmRlX3RpdGxlX18yQnJqX1wiLFxuXHRcImxlZ2VuZGVfYm94XCI6IFwiSG9tZV9sZWdlbmRlX2JveF9fMzJiMUlcIixcblx0XCJncmlkXCI6IFwiSG9tZV9ncmlkX18yRWkyRlwiLFxuXHRcImNhcmRcIjogXCJIb21lX2NhcmRfXzJTZHRCXCIsXG5cdFwibG9nb1wiOiBcIkhvbWVfbG9nb19fMVlickhcIixcblx0XCJjcmVhdGVcIjogXCJIb21lX2NyZWF0ZV9fU09FWkxcIixcblx0XCJidXR0b25cIjogXCJIb21lX2J1dHRvbl9fWGM5bUFcIixcblx0XCJidXR0b25fZ3JvdXBcIjogXCJIb21lX2J1dHRvbl9ncm91cF9fMm1QZ2NcIixcblx0XCJudW1lcmljXCI6IFwiSG9tZV9udW1lcmljX18xV25xYVwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZHVjZXIgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIFhMU1ggZnJvbSBcInhsc3hcIjtcblxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9sYXlvdXRcIjtcbmltcG9ydCBGaWxlSGFuZGxlciBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9maWxlSGFuZGxlclwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9mb290ZXJcIjtcbmltcG9ydCBMb2dpbkZvcm0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvbG9naW5Gb3JtXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi8uLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5cbmltcG9ydCB7IGFwcEZldGNoIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9hcHBGZXRjaFwiO1xuaW1wb3J0IHsgaW5pdFJlZHVjZXIsIHJlZHVjZXJGYWN0b3J5IH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9yZWR1Y2VyRmFjdG9yeVwiO1xuaW1wb3J0IHsgZ2V0RGF0ZVRpbWVTdHJpbmcsIGdldEZyZW5jaEZvcm1hdERhdGVTdHJpbmcsIHN0cmluZ1RvRGF0ZSB9IGZyb20gXCIuLi8uLi8uLi9saWIvZGF0ZXNcIjtcblxuY29uc3QgcmVkdWNlciA9IHJlZHVjZXJGYWN0b3J5KFwiRXhww6lyaW1lbnRhdGlvbiBBcmRlbm5lcyAtIENOQUYgLSBCw6luw6lmaWNpYWlyZVwiKTtcbmNvbnN0IGRldk1vZGUgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PSBcImRldmVsb3BtZW50XCI7XG5jb25zdCBSRFZfU09MSURBUklURVNfVVJMID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUkRWX1NPTElEQVJJVEVTX1BST0RfVVJMO1xuY29uc3QgdXNlclVybCA9IFJEVl9TT0xJREFSSVRFU19VUkwgKyBcIi9hcGkvdjEvdXNlcnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXJkZW5uZXMoKSB7XG4gIGNvbnN0IFtkZXZGaWxlLCBzZXREZXZGaWxlXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbcnVucywgZGlzcGF0Y2hSdW5zXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgW10sIGluaXRSZWR1Y2VyKTtcbiAgY29uc3QgW3VzZXJzRGF0YSwgc2V0VXNlcnNEYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbdXNlclN0YXR1c0NoZWNrZWQsIHNldFVzZXJTdGF0dXNDaGVja2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2ZpbGVTaXplLCBzZXRGaWxlU2l6ZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2lzTG9nZ2VkLCBzZXRJc0xvZ2dlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt0b2tlbiwgc2V0VG9rZW5dID0gdXNlU3RhdGUoe1xuICAgIHRva2VuSWQ6IFwiXCIsXG4gICAgdWlkOiBcIlwiLFxuICAgIGNsaWVudDogXCJcIixcbiAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZGV2RmlsZSkge1xuICAgICAgaGFuZGxlRmlsZShkZXZGaWxlKTtcbiAgICB9XG4gIH0sIFtkZXZGaWxlXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodXNlcnNEYXRhICYmIHVzZXJTdGF0dXNDaGVja2VkID09PSBmYWxzZSkge1xuICAgICAgdXNlcnNEYXRhLmZvckVhY2goKHVzZXIsIHVzZXJJbmRleCkgPT4ge1xuICAgICAgICBpZiAodXNlcltcIklEIFJEVlwiXSAhPSBcIlwiKSB7XG4gICAgICAgICAgY2hlY2tVc2VySW52aXRhdGlvblN0YXR1cyh1c2VyW1wiSUQgUkRWXCJdLCB1c2VySW5kZXgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHNldFVzZXJTdGF0dXNDaGVja2VkKHRydWUpO1xuICAgIH1cbiAgfSwgW3VzZXJzRGF0YV0pO1xuXG4gIGNvbnN0IHdyaXRlRmlsZSA9ICgpID0+IHtcbiAgICBjb25zdCBvdXRXb3JrYm9vayA9IFhMU1gudXRpbHMuYm9va19uZXcoKTtcbiAgICBjb25zdCBvdXRXb3Jrc2hlZXQgPSBYTFNYLnV0aWxzLmpzb25fdG9fc2hlZXQodXNlcnNEYXRhKTtcbiAgICBYTFNYLnV0aWxzLmJvb2tfYXBwZW5kX3NoZWV0KG91dFdvcmtib29rLCBvdXRXb3Jrc2hlZXQsIFwiRElWRVJHRU5DRVNcIik7XG4gICAgLy8gWExTWC51dGlscy5ib29rX2FwcGVuZF9zaGVldChvdXRXb3JrYm9vaywgeGxzLlNoZWV0c1t4bHMuU2hlZXROYW1lc1sxXV0sIFwiR1JBUEhJUVVFXCIpO1xuICAgIC8vIFhMU1gudXRpbHMuYm9va19hcHBlbmRfc2hlZXQob3V0V29ya2Jvb2ssIHhscy5TaGVldHNbeGxzLlNoZWV0TmFtZXNbMl1dLCBcIlNlbGVjdGlvbiBDT0FcIik7XG4gICAgWExTWC53cml0ZUZpbGUob3V0V29ya2Jvb2ssIGBhcmRlbm5lc19yc2FfJHtnZXREYXRlVGltZVN0cmluZyhuZXcgRGF0ZSgpKX0ueGxzeGApO1xuICB9O1xuXG4gIGFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlSW52aXRhdGlvblVybCh1c2VySWQsIHVzZXJJbmRleCkge1xuICAgIGNvbnN0IGludml0YXRpb25VcmwgPSB1c2VyVXJsICsgYC8ke3VzZXJJZH0vaW52aXRlYDtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBhcHBGZXRjaChpbnZpdGF0aW9uVXJsLCB0b2tlbik7XG5cbiAgICBpZiAocmVzdWx0Lmludml0YXRpb25fdXJsKSB7XG4gICAgICBsZXQgbmV3VXNlcnNEYXRhID0gWy4uLnVzZXJzRGF0YV07XG4gICAgICBuZXdVc2Vyc0RhdGFbdXNlckluZGV4XVtcIkludml0YXRpb25cIl0gPSByZXN1bHQuaW52aXRhdGlvbl91cmw7XG4gICAgICBuZXdVc2Vyc0RhdGFbdXNlckluZGV4XVtcIkRhdGUgZCdpbnZpdGF0aW9uXCJdID0gZ2V0RnJlbmNoRm9ybWF0RGF0ZVN0cmluZyhuZXcgRGF0ZSgpKTtcbiAgICAgIHNldFVzZXJzRGF0YShuZXdVc2Vyc0RhdGEpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGdldFVzZXIodXNlcklkLCB0b2tlbikge1xuICAgIGNvbnN0IGdldFVzZXJVcmwgPSB1c2VyVXJsICsgYC8ke3VzZXJJZH1gO1xuICAgIHJldHVybiBhd2FpdCBhcHBGZXRjaChnZXRVc2VyVXJsLCB0b2tlbik7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBjaGVja1VzZXJJbnZpdGF0aW9uU3RhdHVzKHVzZXJJZCwgdXNlckluZGV4KSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0VXNlcih1c2VySWQsIHRva2VuKTtcblxuICAgIGxldCBuZXdVc2Vyc0RhdGEgPSBbLi4udXNlcnNEYXRhXTtcbiAgICBpZiAocmVzdWx0LnVzZXIuaW52aXRhdGlvbl9jcmVhdGVkX2F0KSB7XG4gICAgICBsZXQgaW52aXRhdGlvbl9kYXRlID0gcmVzdWx0LnVzZXIuaW52aXRhdGlvbl9jcmVhdGVkX2F0IC8vIERhdGUgYXUgZm9ybWF0IDogMjAyMS0wNC0xNSAxNDo1Mzo1NiArMDIwMFxuICAgICAgICAuc3Vic3RyaW5nKDAsIDEwKTsgLy8gUsOpY3Vww6lyZXIgbGVzIDEwIHByZW1pZXJzIGNoaWZmcmVzIChsYSBkYXRlKVxuICAgICAgaW52aXRhdGlvbl9kYXRlID0gbmV3IERhdGUoaW52aXRhdGlvbl9kYXRlKTsgLy8gQ3LDqWVyIHVuZSBkYXRlIEpTXG4gICAgICBuZXdVc2Vyc0RhdGFbdXNlckluZGV4XVtcIkRhdGUgZCdpbnZpdGF0aW9uXCJdID0gZ2V0RnJlbmNoRm9ybWF0RGF0ZVN0cmluZyhpbnZpdGF0aW9uX2RhdGUpO1xuICAgIH1cbiAgICBpZiAocmVzdWx0LnVzZXIuaW52aXRhdGlvbl9hY2NlcHRlZF9hdCkge1xuICAgICAgbGV0IGluc2NyaXB0aW9uX2RhdGUgPSByZXN1bHQudXNlci5pbnZpdGF0aW9uX2FjY2VwdGVkX2F0IC8vIERhdGUgYXUgZm9ybWF0IDogMjAyMS0wNC0xNSAxNDo1Mzo1NiArMDIwMFxuICAgICAgICAuc3Vic3RyaW5nKDAsIDEwKTsgLy8gUsOpY3Vww6lyZXIgbGVzIDEwIHByZW1pZXJzIGNoaWZmcmVzIChsYSBkYXRlKVxuICAgICAgaW5zY3JpcHRpb25fZGF0ZSA9IG5ldyBEYXRlKGluc2NyaXB0aW9uX2RhdGUpOyAvLyBDcsOpZXIgdW5lIGRhdGUgSlNcbiAgICAgIG5ld1VzZXJzRGF0YVt1c2VySW5kZXhdW1wiRGF0ZSBkJ2luc2NyaXB0aW9uXCJdID0gZ2V0RnJlbmNoRm9ybWF0RGF0ZVN0cmluZyhpbnNjcmlwdGlvbl9kYXRlKTtcbiAgICB9XG4gICAgc2V0VXNlcnNEYXRhKG5ld1VzZXJzRGF0YSk7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBjcmVhdGVVc2VyKHVzZXJEYXRhLCB1c2VySW5kZXgpIHtcbiAgICBjb25zdCBhZGRyZXNzID0gdXNlckRhdGFbXCJBRFJFU1NFXCJdICsgXCIgLSBcIiArIHVzZXJEYXRhW1wiQ09ERSBQT1NUQUxcIl0gKyBcIiBcIiArIHVzZXJEYXRhW1wiVklMTEVcIl07XG5cbiAgICBjb25zdCB1c2VyID0ge1xuICAgICAgZmlyc3RfbmFtZTogdXNlckRhdGFbXCJQUkVOT01cIl0sXG4gICAgICBsYXN0X25hbWU6IHVzZXJEYXRhW1wiTk9NXCJdLFxuICAgICAgZW1haWw6IHVzZXJEYXRhW1wiTUFJTFwiXSxcbiAgICAgIHBob25lX251bWJlcjogdXNlckRhdGFbXCJURUxFUEhPTkVcIl0ucmVwbGFjZSgvXFxzKy9nLCBcIlwiKSxcbiAgICAgIGJpcnRoX2RhdGU6IHN0cmluZ1RvRGF0ZSh1c2VyRGF0YVtcIkRBVEUgREUgTkFJU1NBTkNFXCJdKSxcbiAgICAgIGFkZHJlc3M6IGFkZHJlc3MsXG4gICAgICBjYWlzc2VfYWZmaWxpYXRpb246IFwiY2FmXCIsXG4gICAgICBhZmZpbGlhdGlvbl9udW1iZXI6IHVzZXJEYXRhW1wiTsKwQ0FGXCJdLFxuICAgICAgb3JnYW5pc2F0aW9uX2lkczogW3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX09SR0FOSVNBVElPTl9JRF9QUk9EXSxcbiAgICB9O1xuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXBwRmV0Y2godXNlclVybCwgdG9rZW4sIFwiUE9TVFwiLCBKU09OLnN0cmluZ2lmeSh1c2VyKSk7XG5cbiAgICBsZXQgbmV3VXNlcnNEYXRhID0gWy4uLnVzZXJzRGF0YV07XG4gICAgaWYgKHJlc3VsdC51c2VyKSB7XG4gICAgICBuZXdVc2Vyc0RhdGFbdXNlckluZGV4XVtcIklEIFJEVlwiXSA9IHJlc3VsdC51c2VyLmlkO1xuICAgICAgc2V0VXNlcnNEYXRhKG5ld1VzZXJzRGF0YSk7XG4gICAgICBnZW5lcmF0ZUludml0YXRpb25VcmwocmVzdWx0LnVzZXIuaWQsIHVzZXJJbmRleCk7XG4gICAgfSBlbHNlIGlmIChyZXN1bHQuZXJyb3JzICYmIHJlc3VsdC5lcnJvcnMuZW1haWwgJiYgcmVzdWx0LmVycm9ycy5lbWFpbFswXS5lcnJvciA9PT0gXCJ0YWtlblwiKSB7XG4gICAgICBuZXdVc2Vyc0RhdGFbdXNlckluZGV4XVtcIklEIFJEVlwiXSA9IHJlc3VsdC5lcnJvcnMuZW1haWxbMF0uaWQ7XG4gICAgICBzZXRVc2Vyc0RhdGEobmV3VXNlcnNEYXRhKTtcbiAgICAgIGNoZWNrVXNlckludml0YXRpb25TdGF0dXMocmVzdWx0LmVycm9ycy5lbWFpbFswXS5pZCwgdXNlckluZGV4KTtcbiAgICAgIGFsZXJ0KFwiVW4gY29tcHRlIGFzc29jacOpIMOgIGNldCBlbWFpbCBleGlzdGUgZMOpasOgXCIpO1xuICAgIH0gZWxzZSBpZiAocmVzdWx0LmVycm9ycyAmJiByZXN1bHQuZXJyb3JzLmVtYWlsICYmIHJlc3VsdC5lcnJvcnMuZW1haWxbMF0uZXJyb3IgPT09IFwiaW52YWxpZFwiKSB7XG4gICAgICBhbGVydChcIkwnYWRyZXNzZSBtYWlsIG4nZXN0IHBhcyB2YWxpZGVcIik7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIHJlc3VsdC5lcnJvcnMgJiZcbiAgICAgIHJlc3VsdC5lcnJvcnMuZmlyc3RfbmFtZSAmJlxuICAgICAgcmVzdWx0LmVycm9ycy5maXJzdF9uYW1lWzBdLmVycm9yID09PSBcImTDqWrDoCB1dGlsaXPDqVwiXG4gICAgKSB7XG4gICAgICBhbGVydChcbiAgICAgICAgXCJMYSBjcsOpYXRpb24gZHUgY29tcHRlIGEgw6ljaG91w6kuIEwndXRpbGlzYXRldXIgc2VtYmxlIGV4aXN0ZXIgbWFpcyBuJ2EgcHUgw6p0cmUgcsOpY3Vww6lyw6kuXCJcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmIChyZXN1bHQuZXJyb3JzICYmIHJlc3VsdC5lcnJvcnNbMF0gJiYgcmVzdWx0LmVycm9yc1swXS5iYXNlID09PSBcImZvcmJpZGRlblwiKSB7XG4gICAgICBhbGVydChcIlZvdHJlIGNvbXB0ZSBhZ2VudCBSRFYtU29saWRhcml0w6lzIG5lIHZvdXMgcGVybWV0IHBhcyBkJ2VmZmVjdHVlciBjZXR0ZSBhY3Rpb24uXCIpO1xuICAgIH0gZWxzZSBpZiAocmVzdWx0LmVycm9ycyAmJiByZXN1bHQuZXJyb3JzWzBdKSB7XG4gICAgICBhbGVydChyZXN1bHQuZXJyb3JzWzBdKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBoYW5kbGVMb2dpbiA9ICh0b2tlbklkLCB1aWQsIGNsaWVudCkgPT4ge1xuICAgIHNldFRva2VuKHsgLi4udG9rZW4sIHRva2VuSWQ6IHRva2VuSWQsIHVpZDogdWlkLCBjbGllbnQ6IGNsaWVudCB9KTtcbiAgICBzZXRJc0xvZ2dlZCh0cnVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVGaWxlID0gYXN5bmMgZmlsZSA9PiB7XG4gICAgaWYgKGRldk1vZGUgJiYgZmlsZSAhPSBkZXZGaWxlKSB7XG4gICAgICBzZXREZXZGaWxlKGZpbGUpO1xuICAgIH1cbiAgICBzZXRGaWxlU2l6ZShmaWxlLnNpemUpO1xuICAgIGNvbnN0IHN0YXJ0X3RpbWUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgZmlsZURhdGEgPSBuZXcgVWludDhBcnJheShldmVudC50YXJnZXQucmVzdWx0KTtcbiAgICAgICAgY29uc3QgeGxzID0gWExTWC5yZWFkKGZpbGVEYXRhLCB7IHR5cGU6IFwiYXJyYXlcIiwgY2VsbERhdGVzOiB0cnVlLCBkYXRlTkY6IFwiZGQvbW0veXl5eVwiIH0pO1xuICAgICAgICBjb25zdCB3b3Jrc2hlZXQgPSB4bHMuU2hlZXRzW3hscy5TaGVldE5hbWVzWzBdXTtcbiAgICAgICAgLy8gTGltaXRlciBsYSBjYXB0dXJlIGF1eCBjb2xvbm5lcyBBLVZcbiAgICAgICAgY29uc3QgcmFuZ2UgPSBYTFNYLnV0aWxzLmRlY29kZV9yYW5nZSh3b3Jrc2hlZXRbXCIhcmVmXCJdKTtcbiAgICAgICAgcmFuZ2Uucy5jID0gMDsgLy8gMCA9PSBYTFNYLnV0aWxzLmRlY29kZV9jb2woXCJBXCIpXG4gICAgICAgIHJhbmdlLmUuYyA9IDIxOyAvLyAxOSA9PSBYTFNYLnV0aWxzLmRlY29kZV9jb2woXCJWXCIpXG4gICAgICAgIGNvbnN0IG5ld19yYW5nZSA9IFhMU1gudXRpbHMuZW5jb2RlX3JhbmdlKHJhbmdlKTtcblxuICAgICAgICBsZXQganNvbkRhdGEgPSBYTFNYLnV0aWxzLnNoZWV0X3RvX2pzb24od29ya3NoZWV0LCB7XG4gICAgICAgICAgYmxhbmtyb3dzOiBmYWxzZSxcbiAgICAgICAgICByYXc6IGZhbHNlLFxuICAgICAgICAgIGRlZnZhbDogXCJcIixcbiAgICAgICAgICByYW5nZTogbmV3X3JhbmdlLFxuICAgICAgICB9KTtcblxuICAgICAgICAvLyB3ZSByZW1vdmUgbGluZSBicmVha3MgZnJvbSBhbGwga2V5c1xuICAgICAgICBqc29uRGF0YSA9IGpzb25EYXRhLm1hcCh1c2VyRGF0YSA9PiB7XG4gICAgICAgICAgcmV0dXJuIFsuLi5PYmplY3Qua2V5cyh1c2VyRGF0YSldLnJlZHVjZSgocmVzLCBrZXkpID0+IHtcbiAgICAgICAgICAgIHJlc1trZXkucmVwbGFjZSgvW1xcblxccl0rL2csIFwiIFwiKV0gPSB1c2VyRGF0YVtrZXldO1xuICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgICB9LCB7fSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGpzb25EYXRhID09IG51bGwgJiYgc2V0SXNQZW5kaW5nKGZhbHNlKTtcbiAgICAgICAgc2V0VXNlclN0YXR1c0NoZWNrZWQoZmFsc2UpO1xuICAgICAgICBzZXRVc2Vyc0RhdGEoanNvbkRhdGEpO1xuICAgICAgICBkaXNwYXRjaFJ1bnMoe1xuICAgICAgICAgIHR5cGU6IFwiYXBwZW5kXCIsXG4gICAgICAgICAgaXRlbToge1xuICAgICAgICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTkpLFxuICAgICAgICAgICAgZHVyYXRpb246IG5ldyBEYXRlKCkgLSBzdGFydF90aW1lLFxuICAgICAgICAgICAgZmlsZW5hbWU6IGZpbGUubmFtZSxcbiAgICAgICAgICAgIGZpbGVTaXplOiBmaWxlLnNpemUsXG4gICAgICAgICAgICBmaWxlTGluZXM6IGpzb25EYXRhLmxlbmd0aCxcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfTtcbiAgICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihmaWxlKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfSBoYW5kbGVGaWxlPXtoYW5kbGVGaWxlfT5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PkV4cMOpcmltZW50YXRpb24gQXJkZW5uZXM8L2gxPlxuXG4gICAgICAgIHshaXNMb2dnZWQgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY3JlYXRlfT5cbiAgICAgICAgICAgIDxMb2dpbkZvcm0gaGFuZGxlTG9naW49e2hhbmRsZUxvZ2lufSByZHZVcmw9e1JEVl9TT0xJREFSSVRFU19VUkx9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG5cbiAgICAgICAge2lzTG9nZ2VkICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPEZpbGVIYW5kbGVyXG4gICAgICAgICAgICAgIGhhbmRsZUZpbGU9e2hhbmRsZUZpbGV9XG4gICAgICAgICAgICAgIGZpbGVTaXplPXtmaWxlU2l6ZX1cbiAgICAgICAgICAgICAgcGVuZGluZ01lc3NhZ2U9e1wiUsOpY3Vww6lyYXRpb24gZGVzIGluZm9ybWF0aW9ucywgbWVyY2kgZGUgcGF0aWVudGVyXCJ9XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICB7dXNlcnNEYXRhICYmIChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuc3VidGl0bGV9PkLDqW7DqWZpY2lhaXJlcyBSU0E8L2gyPlxuXG4gICAgICAgICAgICAgICAge3VzZXJzRGF0YS5sZW5ndGggPT0gMCAmJiAoXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+QXVjdW4gYsOpbsOpZmljaWFpcmUgZGFucyBsZSBmaWNoaWVyPC9wPlxuICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICB7dXNlcnNEYXRhLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlPlxuICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+Tm9tPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+UHLDqW5vbTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPk1haWw8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5Uw6lsw6lwaG9uZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPklEIFJEVi1Tb2xpZGFyaXTDqXM8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj1cIjNcIj5JbnZpdGF0aW9uPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjb2xTcGFuPVwiMVwiPkRlcm5pZXIgZW52b2kgbGU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj1cIjFcIj5EYXRlIGQnaW5zY3JpcHRpb248L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj1cIjFcIj5BY3Rpb248L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt1c2Vyc0RhdGEubWFwKCh1c2VyLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+e3VzZXJbXCJOT01cIl19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT57dXNlcltcIlBSRU5PTVwiXX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9Pnt1c2VyW1wiTUFJTFwiXX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9Pnt1c2VyW1wiVEVMRVBIT05FXCJdfTwvdGQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXNlcltcIklEIFJEVlwiXSA9PT0gXCJcIiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBjcmVhdGVVc2VyKHVzZXIsIGluZGV4KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3LDqWVyIHVuIGNvbXB0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXNlcltcIklEIFJEVlwiXSAhPT0gXCJcIiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT57dXNlcltcIklEIFJEVlwiXX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+e3VzZXJbXCJEYXRlIGQnaW52aXRhdGlvblwiXX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9Pnt1c2VyW1wiRGF0ZSBkJ2luc2NyaXB0aW9uXCJdfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3VzZXJbXCJJRCBSRFZcIl0gIT09IFwiXCIgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBnZW5lcmF0ZUludml0YXRpb25VcmwodXNlcltcIklEIFJEVlwiXSwgaW5kZXgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3VzZXJbXCJEYXRlIGQnaW52aXRhdGlvblwiXSAhPT0gXCJcIiAmJiBcIlJlZ8OpbsOpcmVyIGludml0YXRpb25cIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXNlcltcIkRhdGUgZCdpbnZpdGF0aW9uXCJdID09PSBcIlwiICYmIFwiR8OpbsOpcmVyIGludml0YXRpb25cIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3VzZXJbXCJJRCBSRFZcIl0gPT09IFwiXCIgJiYgPHRkIGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+PC90ZD59XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufSBvbkNsaWNrPXt3cml0ZUZpbGV9PlxuICAgICAgICAgICAgICAgICAgICAgIFJlZ8OpbsOpcmVyIGZpY2hpZXJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG5cbiAgICAgICAgPEZvb3RlclxuICAgICAgICAgIHN1YmplY3Q9XCJFeHDDqXJpbWVudGF0aW9uIEFyZGVubmVzXCJcbiAgICAgICAgICBwb3VycXVvaT1cIlF1ZWwgZXN0IGwnb2JqZWN0aWYgZGUgY2V0dGUgZXhww6lyaW1lbnRhdGlvbiZuYnNwOz9cIlxuICAgICAgICAgIHRleHQ9e1xuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+XG4gICAgICAgICAgICAgICAgRmFjaWxpdGVyIGxlIHRyYXZhaWwgZGVzIGFnZW50cyBkdSBkw6lwYXJ0ZW1lbnQgZXQgdGVzdGVyIGwndXRpbGlzYXRpb24gZGVcbiAgICAgICAgICAgICAgICBsJ2FwcGxpY2F0aW9uIFJEVi1Tb2xpZGFyaXTDqXMgcG91ciBhY2PDqWzDqXJlciBsYSBwcmlzZSBkdSBwcmVtaWVyIHJlbmRlei12b3VzXG4gICAgICAgICAgICAgICAgZCdvcmllbnRhdGlvbi5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgPC9tYWluPlxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==