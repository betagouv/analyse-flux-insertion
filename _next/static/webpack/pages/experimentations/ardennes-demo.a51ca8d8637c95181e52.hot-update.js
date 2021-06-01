webpackHotUpdate_N_E("pages/experimentations/ardennes-demo",{

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
    key: "withRights",
    value: function withRights() {
      return this.application.withRights() && this.withDroitsEtDevoirs();
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
    key: "socialSecurityNumber",
    get: function get() {
      var _this$dom$getElements9;

      return (_this$dom$getElements9 = this.dom.getElementsByTagName("NIR")[0]) === null || _this$dom$getElements9 === void 0 ? void 0 : _this$dom$getElements9.innerHTML;
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
    key: "topFoyerDroitsEtDevoirs",
    get: function get() {
      return this.application.topFoyerDroitsEtDevoirs;
    } // string used to identify applicants

  }, {
    key: "id",
    get: function get() {
      return [this.rsaApplicationNumber, this.role].join("-");
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

/***/ "./models/Application.js":
/*!*******************************!*\
  !*** ./models/Application.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Application; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Applicant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Applicant */ "./models/Applicant.js");




var ELIGIBLE_SUSPENSION_MOTIVES = ["01", "05", "06", "35", "36"];

var Application = /*#__PURE__*/function () {
  function Application(dom) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Application);

    this.dom = dom;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Application, [{
    key: "withRights",
    value: function withRights() {
      return this.withDroitsOuvertsEtVersables() || this.withDroitsOuvertsSuspendu() && ELIGIBLE_SUSPENSION_MOTIVES.includes(this.suspensionMotive);
    }
  }, {
    key: "withUsableEmail",
    value: function withUsableEmail() {
      return this.emailAddress && this.emailAuthorization === "A";
    }
  }, {
    key: "withForbiddenEmailUsage",
    value: function withForbiddenEmailUsage() {
      return this.emailAddress && this.emailAuthorization === "R";
    }
  }, {
    key: "withoutEmailUsage",
    value: function withoutEmailUsage() {
      return this.emailAddress && this.emailAuthorization === "I";
    }
  }, {
    key: "withUsablePhone",
    value: function withUsablePhone() {
      return this.phoneNumber && this.phoneAuthorization === "A";
    }
  }, {
    key: "withForbiddenPhoneUsage",
    value: function withForbiddenPhoneUsage() {
      return this.phoneNumber && this.phoneAuthorization === "R";
    }
  }, {
    key: "withoutPhoneUsage",
    value: function withoutPhoneUsage() {
      return this.phoneNumber && this.phoneAuthorization === "I";
    }
  }, {
    key: "withDroitsOuvertsEtVersables",
    value: function withDroitsOuvertsEtVersables() {
      return this.statusCode === "2";
    }
  }, {
    key: "withDroitsOuvertsSuspendu",
    value: function withDroitsOuvertsSuspendu() {
      return this.statusCode === "4";
    }
  }, {
    key: "withDSP",
    value: function withDSP() {
      return this.applicants.some(function (applicant) {
        return applicant.socioProfessionalData;
      });
    }
  }, {
    key: "emailAddress",
    get: function get() {
      var _this$dom$getElements;

      return (_this$dom$getElements = this.dom.getElementsByTagName("ADRELEC")[0]) === null || _this$dom$getElements === void 0 ? void 0 : _this$dom$getElements.innerHTML;
    }
  }, {
    key: "phoneNumber",
    get: function get() {
      var _this$dom$getElements2;

      return (_this$dom$getElements2 = this.dom.getElementsByTagName("NUMTEL")[0]) === null || _this$dom$getElements2 === void 0 ? void 0 : _this$dom$getElements2.innerHTML;
    }
  }, {
    key: "rsaApplicationNumber",
    get: function get() {
      var _this$dom$getElements3;

      return (_this$dom$getElements3 = this.dom.getElementsByTagName("NUMDEMRSA")[0]) === null || _this$dom$getElements3 === void 0 ? void 0 : _this$dom$getElements3.innerHTML;
    }
  }, {
    key: "phoneAuthorization",
    get: function get() {
      var _this$dom$getElements4;

      return (_this$dom$getElements4 = this.dom.getElementsByTagName("AUTORUTITEL")[0]) === null || _this$dom$getElements4 === void 0 ? void 0 : _this$dom$getElements4.innerHTML;
    }
  }, {
    key: "emailAuthorization",
    get: function get() {
      var _this$dom$getElements5;

      return (_this$dom$getElements5 = this.dom.getElementsByTagName("AUTORUTIADRELEC")[0]) === null || _this$dom$getElements5 === void 0 ? void 0 : _this$dom$getElements5.innerHTML;
    }
  }, {
    key: "date",
    get: function get() {
      var _this$dom$getElements6;

      return (_this$dom$getElements6 = this.dom.getElementsByTagName("DTDEMRSA")[0]) === null || _this$dom$getElements6 === void 0 ? void 0 : _this$dom$getElements6.innerHTML;
    }
  }, {
    key: "statusCode",
    get: function get() {
      var _this$dom$getElements7;

      return (_this$dom$getElements7 = this.dom.getElementsByTagName("ETATDOSRSA")[0]) === null || _this$dom$getElements7 === void 0 ? void 0 : _this$dom$getElements7.innerHTML;
    }
  }, {
    key: "suspensionMotive",
    get: function get() {
      var _this$dom$getElements8;

      return (_this$dom$getElements8 = this.dom.getElementsByTagName("MOTISUSVERSRSA")[0]) === null || _this$dom$getElements8 === void 0 ? void 0 : _this$dom$getElements8.innerHTML;
    }
  }, {
    key: "applicants",
    get: function get() {
      return Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.dom.getElementsByTagName("Personne")).map(function (applicantDom) {
        return new _Applicant__WEBPACK_IMPORTED_MODULE_3__["default"](applicantDom);
      });
    }
  }, {
    key: "topFoyerDroitsEtDevoirs",
    get: function get() {
      var _this$dom$getElements9;

      return (_this$dom$getElements9 = this.dom.getElementsByTagName("TOPFOYDRODEVORSA")[0]) === null || _this$dom$getElements9 === void 0 ? void 0 : _this$dom$getElements9.innerHTML;
    }
  }]);

  return Application;
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

/***/ "./models/BaseFlux.js":
/*!****************************!*\
  !*** ./models/BaseFlux.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BaseFlux; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Applicant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Applicant */ "./models/Applicant.js");





var BaseFlux = /*#__PURE__*/function () {
  function BaseFlux(fileContent) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, BaseFlux);

    var parser = new DOMParser();
    this.dom = parser.parseFromString(fileContent, "application/xml");
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(BaseFlux, [{
    key: "desc",
    get: function get() {
      return this.dom.getElementsByTagName("IdentificationFlux")[0];
    }
  }, {
    key: "applicants",
    get: function get() {
      return Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.dom.getElementsByTagName("Personne")).map(function (applicantDom) {
        return new _Applicant__WEBPACK_IMPORTED_MODULE_3__["default"](applicantDom);
      });
    }
  }, {
    key: "applicantsCount",
    get: function get() {
      return this.applicants.length;
    }
  }, {
    key: "applicationsCount",
    get: function get() {
      return this.applications.length;
    }
  }, {
    key: "frequency",
    get: function get() {
      return this.desc.getElementsByTagName("TYPEFLUX")[0].innerHTML;
    }
  }, {
    key: "origin",
    get: function get() {
      return this.desc.getElementsByTagName("NATFLUX")[0].innerHTML;
    }
  }, {
    key: "fileDatetime",
    get: function get() {
      return "".concat(this.creationDate, "-").concat(this.creationTime);
    }
  }, {
    key: "creationDate",
    get: function get() {
      return this.desc.getElementsByTagName("DTCREAFLUX")[0].innerHTML;
    }
  }, {
    key: "creationTime",
    get: function get() {
      return this.desc.getElementsByTagName("HEUCREAFLUX")[0].innerHTML;
    }
  }, {
    key: "parseError",
    get: function get() {
      return this.dom.activeElement && this.dom.activeElement.nodeName == "parsererror";
    }
  }]);

  return BaseFlux;
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

/***/ "./pages/experimentations/ardennes-demo/index.js":
/*!*******************************************************!*\
  !*** ./pages/experimentations/ardennes-demo/index.js ***!
  \*******************************************************/
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/layout */ "./components/layout.js");
/* harmony import */ var _components_fileHandler__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/fileHandler */ "./components/fileHandler.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/footer */ "./components/footer.js");
/* harmony import */ var _components_loginForm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/loginForm */ "./components/loginForm.js");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _lib_appFetch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../lib/appFetch */ "./lib/appFetch.js");
/* harmony import */ var _lib_reducerFactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../lib/reducerFactory */ "./lib/reducerFactory.js");
/* harmony import */ var _lib_dates__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../lib/dates */ "./lib/dates.js");







var _jsxFileName = "/home/q/code/qblanc/beta.gouv/analyse-flux-insertion/pages/experimentations/ardennes-demo/index.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }












var reducer = Object(_lib_reducerFactory__WEBPACK_IMPORTED_MODULE_14__["reducerFactory"])("Expérimentation Ardennes - CNAF - Bénéficiaire");
function Ardennes() {
  _s();

  var _this = this;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  var isDemo = router.pathname.includes("demo");
  var devMode = true;
  var orgaID = isDemo ? "1" : "1";
  var RDV_SOLIDARITES_URL = isDemo ? "http://localhost:5000" : "http://localhost:5000";
  var userUrl = RDV_SOLIDARITES_URL + "/api/v1/users";

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(null),
      devFile = _useState[0],
      setDevFile = _useState[1];

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_5__["useReducer"])(reducer, [], _lib_reducerFactory__WEBPACK_IMPORTED_MODULE_14__["initReducer"]),
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
    var outWorkbook = xlsx__WEBPACK_IMPORTED_MODULE_7__["utils"].book_new();
    var outWorksheet = xlsx__WEBPACK_IMPORTED_MODULE_7__["utils"].json_to_sheet(usersData);
    xlsx__WEBPACK_IMPORTED_MODULE_7__["utils"].book_append_sheet(outWorkbook, outWorksheet, "DIVERGENCES"); // XLSX.utils.book_append_sheet(outWorkbook, xls.Sheets[xls.SheetNames[1]], "GRAPHIQUE");
    // XLSX.utils.book_append_sheet(outWorkbook, xls.Sheets[xls.SheetNames[2]], "Selection COA");

    xlsx__WEBPACK_IMPORTED_MODULE_7__["writeFile"](outWorkbook, "ardennes_rsa_".concat(Object(_lib_dates__WEBPACK_IMPORTED_MODULE_15__["getDateTimeString"])(new Date()), ".xlsx"));
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
              return Object(_lib_appFetch__WEBPACK_IMPORTED_MODULE_13__["appFetch"])(invitationUrl, token);

            case 3:
              result = _context2.sent;
              newUsersData = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(usersData);

              if (result.invitation_url) {
                newUsersData[userIndex]["Lien d'invitation"] = result.invitation_url;
              } else if (result.invitation_token) {
                newUsersData[userIndex]["Code d'invitation"] = result.invitation_token;
              }

              newUsersData[userIndex]["Date d'invitation"] = Object(_lib_dates__WEBPACK_IMPORTED_MODULE_15__["getFrenchFormatDateString"])(new Date());
              setUsersData(newUsersData);

            case 8:
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
              return Object(_lib_appFetch__WEBPACK_IMPORTED_MODULE_13__["appFetch"])(getUserUrl, token);

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

                newUsersData[userIndex]["Date d'invitation"] = Object(_lib_dates__WEBPACK_IMPORTED_MODULE_15__["getFrenchFormatDateString"])(invitation_date);
              }

              if (result.user.invitation_accepted_at) {
                inscription_date = result.user.invitation_accepted_at // Date au format : 2021-04-15 14:53:56 +0200
                .substring(0, 10); // Récupérer les 10 premiers chiffres (la date)

                inscription_date = new Date(inscription_date); // Créer une date JS

                newUsersData[userIndex]["Date d'inscription"] = Object(_lib_dates__WEBPACK_IMPORTED_MODULE_15__["getFrenchFormatDateString"])(inscription_date);
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
              if ([13, 15].includes(userData["N°CAF"].trim().length)) userData["N°CAF"] = "";
              user = {
                first_name: userData["PRENOM"],
                last_name: userData["NOM"],
                email: userData["MAIL"],
                phone_number: userData["TELEPHONE"].replace(/\s+/g, ""),
                birth_date: Object(_lib_dates__WEBPACK_IMPORTED_MODULE_15__["stringToDate"])(userData["DATE DE NAISSANCE"]),
                address: address,
                caisse_affiliation: "caf",
                affiliation_number: userData["N°CAF"],
                organisation_ids: [orgaID]
              };
              _context5.next = 5;
              return Object(_lib_appFetch__WEBPACK_IMPORTED_MODULE_13__["appFetch"])(userUrl, token, "POST", JSON.stringify(user));

            case 5:
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

            case 8:
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
                  var xls = xlsx__WEBPACK_IMPORTED_MODULE_7__["read"](fileData, {
                    type: "array",
                    cellDates: true,
                    dateNF: "dd/mm/yyyy"
                  });
                  var worksheet = xls.Sheets[xls.SheetNames[0]];
                  var jsonData = xlsx__WEBPACK_IMPORTED_MODULE_7__["utils"].sheet_to_json(worksheet, {
                    blankrows: false,
                    raw: false,
                    defval: ""
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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.container,
    handleFile: handleFile,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.main,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.title,
        children: "Exp\xE9rimentation Ardennes"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 9
      }, this), !isLogged && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.create,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_loginForm__WEBPACK_IMPORTED_MODULE_11__["default"], {
          handleLogin: handleLogin,
          rdvUrl: RDV_SOLIDARITES_URL
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 11
      }, this), isLogged && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_fileHandler__WEBPACK_IMPORTED_MODULE_9__["default"], {
          handleFile: handleFile,
          fileSize: fileSize,
          pendingMessage: "Récupération des informations, merci de patienter"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 216,
          columnNumber: 13
        }, this), usersData && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.subtitle,
            children: "B\xE9n\xE9ficiaires RSA"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 224,
            columnNumber: 17
          }, this), usersData.length == 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.description,
            children: "Aucun b\xE9n\xE9ficiaire dans le fichier"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 227,
            columnNumber: 19
          }, this), usersData.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    rowSpan: "2",
                    children: "Date"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 235,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    rowSpan: "2",
                    children: "Nom"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 236,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    rowSpan: "2",
                    children: "Pr\xE9nom"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 237,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    rowSpan: "2",
                    children: "Mail"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 238,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    rowSpan: "2",
                    children: "T\xE9l\xE9phone"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 239,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    rowSpan: "2",
                    children: "ID RDV-Solidarit\xE9s"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 240,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    colSpan: "3",
                    children: "Invitation"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 241,
                    columnNumber: 27
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 234,
                  columnNumber: 25
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    colSpan: "1",
                    children: "Dernier envoi le"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 244,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    colSpan: "1",
                    children: "Date d'inscription"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 245,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    colSpan: "1",
                    children: "Action"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 246,
                    columnNumber: 27
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 243,
                  columnNumber: 25
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 233,
                columnNumber: 23
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
                children: Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(usersData).reverse().map(function (user, index) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_5__["Fragment"], {
                    children: user["DATE"] !== "" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center,
                        children: user["DATE"]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 255,
                        columnNumber: 33
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center,
                        children: user["NOM"]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 256,
                        columnNumber: 33
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center,
                        children: user["PRENOM"]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 257,
                        columnNumber: 33
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center,
                        children: user["MAIL"]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 258,
                        columnNumber: 33
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center,
                        children: user["TELEPHONE"]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 259,
                        columnNumber: 33
                      }, _this), user["ID RDV"] === "" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center,
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                          onClick: function onClick() {
                            return createUser(user, usersData.length - index - 1);
                          },
                          children: "Cr\xE9er un compte"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 263,
                          columnNumber: 37
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 262,
                        columnNumber: 35
                      }, _this), user["ID RDV"] !== "" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center,
                        children: user["ID RDV"]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 271,
                        columnNumber: 35
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center,
                        children: user["Date d'invitation"]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 273,
                        columnNumber: 33
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center,
                        children: user["Date d'inscription"]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 274,
                        columnNumber: 33
                      }, _this), user["ID RDV"] !== "" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center,
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                          onClick: function onClick() {
                            return generateInvitationUrl(user["ID RDV"], usersData.length - index - 1);
                          },
                          children: [user["Date d'invitation"] !== "" && "Regénérer invitation", user["Date d'invitation"] === "" && "Générer invitation"]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 277,
                          columnNumber: 37
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 276,
                        columnNumber: 35
                      }, _this), user["ID RDV"] === "" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 290,
                        columnNumber: 59
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 254,
                      columnNumber: 31
                    }, _this)
                  }, index, false, {
                    fileName: _jsxFileName,
                    lineNumber: 252,
                    columnNumber: 27
                  }, _this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 249,
                columnNumber: 23
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 232,
              columnNumber: 21
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.button,
              onClick: writeFile,
              children: "Reg\xE9n\xE9rer fichier"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 298,
              columnNumber: 21
            }, this)]
          }, void 0, true)]
        }, void 0, true)]
      }, void 0, true), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_footer__WEBPACK_IMPORTED_MODULE_10__["default"], {
        subject: "Exp\xE9rimentation Ardennes",
        pourquoi: "Quel est l'objectif de cette exp\xE9rimentation\xA0?",
        text: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.text,
            children: "Faciliter le travail des agents du d\xE9partement et tester l'utilisation de l'application RDV-Solidarit\xE9s pour acc\xE9l\xE9rer la prise du premier rendez-vous d'orientation."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 313,
            columnNumber: 15
          }, this)
        }, void 0, false)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 308,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 204,
    columnNumber: 5
  }, this);
}

_s(Ardennes, "elV9zkVqYzt2Pxn5gny0qSEwi+k=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"]];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kZWxzL0FwcGxpY2FudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbW9kZWxzL0FwcGxpY2F0aW9uLmpzIiwid2VicGFjazovL19OX0UvLi9tb2RlbHMvQmFzZUZsdXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2V4cGVyaW1lbnRhdGlvbnMvYXJkZW5uZXMtZGVtby9pbmRleC5qcyJdLCJuYW1lcyI6WyJBcHBsaWNhbnQiLCJkb20iLCJyc2FBcHBsaWNhdGlvbk51bWJlciIsInNvY2lhbFNlY3VyaXR5TnVtYmVyIiwibGFzdE5hbWUiLCJmaXJzdE5hbWUiLCJyb2xlIiwiY29udGFjdEluZm9zIiwicGhvbmVOdW1iZXIiLCJlbWFpbEFkZHJlc3MiLCJ0b3BFbnRyYW50IiwiYXBwbGljYXRpb24iLCJ3aXRoUmlnaHRzIiwid2l0aERyb2l0c0V0RGV2b2lycyIsInRvcEZveWVyRHJvaXRzRXREZXZvaXJzIiwidG9wRHJvaXRzRXREZXZvaXJzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJpbm5lckhUTUwiLCJBcHBsaWNhdGlvbiIsInBhcmVudE5vZGUiLCJzdGF0dXNDb2RlIiwic3VzcGVuc2lvbk1vdGl2ZSIsImpvaW4iLCJFTElHSUJMRV9TVVNQRU5TSU9OX01PVElWRVMiLCJ3aXRoRHJvaXRzT3V2ZXJ0c0V0VmVyc2FibGVzIiwid2l0aERyb2l0c091dmVydHNTdXNwZW5kdSIsImluY2x1ZGVzIiwiZW1haWxBdXRob3JpemF0aW9uIiwicGhvbmVBdXRob3JpemF0aW9uIiwiYXBwbGljYW50cyIsInNvbWUiLCJhcHBsaWNhbnQiLCJzb2Npb1Byb2Zlc3Npb25hbERhdGEiLCJtYXAiLCJhcHBsaWNhbnREb20iLCJCYXNlRmx1eCIsImZpbGVDb250ZW50IiwicGFyc2VyIiwiRE9NUGFyc2VyIiwicGFyc2VGcm9tU3RyaW5nIiwibGVuZ3RoIiwiYXBwbGljYXRpb25zIiwiZGVzYyIsImNyZWF0aW9uRGF0ZSIsImNyZWF0aW9uVGltZSIsImFjdGl2ZUVsZW1lbnQiLCJub2RlTmFtZSIsInJlZHVjZXIiLCJyZWR1Y2VyRmFjdG9yeSIsIkFyZGVubmVzIiwicm91dGVyIiwidXNlUm91dGVyIiwiaXNEZW1vIiwicGF0aG5hbWUiLCJkZXZNb2RlIiwib3JnYUlEIiwicHJvY2VzcyIsIlJEVl9TT0xJREFSSVRFU19VUkwiLCJ1c2VyVXJsIiwidXNlU3RhdGUiLCJkZXZGaWxlIiwic2V0RGV2RmlsZSIsInVzZVJlZHVjZXIiLCJpbml0UmVkdWNlciIsInJ1bnMiLCJkaXNwYXRjaFJ1bnMiLCJ1c2Vyc0RhdGEiLCJzZXRVc2Vyc0RhdGEiLCJ1c2VyU3RhdHVzQ2hlY2tlZCIsInNldFVzZXJTdGF0dXNDaGVja2VkIiwiZmlsZVNpemUiLCJzZXRGaWxlU2l6ZSIsImlzTG9nZ2VkIiwic2V0SXNMb2dnZWQiLCJ0b2tlbklkIiwidWlkIiwiY2xpZW50IiwidG9rZW4iLCJzZXRUb2tlbiIsInVzZUVmZmVjdCIsImhhbmRsZUZpbGUiLCJmb3JFYWNoIiwidXNlciIsInVzZXJJbmRleCIsImNoZWNrVXNlckludml0YXRpb25TdGF0dXMiLCJ3cml0ZUZpbGUiLCJvdXRXb3JrYm9vayIsIlhMU1giLCJib29rX25ldyIsIm91dFdvcmtzaGVldCIsImpzb25fdG9fc2hlZXQiLCJib29rX2FwcGVuZF9zaGVldCIsImdldERhdGVUaW1lU3RyaW5nIiwiRGF0ZSIsImdlbmVyYXRlSW52aXRhdGlvblVybCIsInVzZXJJZCIsImludml0YXRpb25VcmwiLCJhcHBGZXRjaCIsInJlc3VsdCIsIm5ld1VzZXJzRGF0YSIsImludml0YXRpb25fdXJsIiwiaW52aXRhdGlvbl90b2tlbiIsImdldEZyZW5jaEZvcm1hdERhdGVTdHJpbmciLCJnZXRVc2VyIiwiZ2V0VXNlclVybCIsImludml0YXRpb25fY3JlYXRlZF9hdCIsImludml0YXRpb25fZGF0ZSIsInN1YnN0cmluZyIsImludml0YXRpb25fYWNjZXB0ZWRfYXQiLCJpbnNjcmlwdGlvbl9kYXRlIiwiY3JlYXRlVXNlciIsInVzZXJEYXRhIiwiYWRkcmVzcyIsInRyaW0iLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwiZW1haWwiLCJwaG9uZV9udW1iZXIiLCJyZXBsYWNlIiwiYmlydGhfZGF0ZSIsInN0cmluZ1RvRGF0ZSIsImNhaXNzZV9hZmZpbGlhdGlvbiIsImFmZmlsaWF0aW9uX251bWJlciIsIm9yZ2FuaXNhdGlvbl9pZHMiLCJKU09OIiwic3RyaW5naWZ5IiwiaWQiLCJlcnJvcnMiLCJlcnJvciIsImFsZXJ0IiwiYmFzZSIsImhhbmRsZUxvZ2luIiwiZmlsZSIsInNpemUiLCJzdGFydF90aW1lIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwiZXZlbnQiLCJmaWxlRGF0YSIsIlVpbnQ4QXJyYXkiLCJ0YXJnZXQiLCJ4bHMiLCJ0eXBlIiwiY2VsbERhdGVzIiwiZGF0ZU5GIiwid29ya3NoZWV0IiwiU2hlZXRzIiwiU2hlZXROYW1lcyIsImpzb25EYXRhIiwic2hlZXRfdG9fanNvbiIsImJsYW5rcm93cyIsInJhdyIsImRlZnZhbCIsIk9iamVjdCIsImtleXMiLCJyZWR1Y2UiLCJyZXMiLCJrZXkiLCJzZXRJc1BlbmRpbmciLCJpdGVtIiwidGltZXN0YW1wIiwidG9JU09TdHJpbmciLCJzbGljZSIsImR1cmF0aW9uIiwiZmlsZW5hbWUiLCJuYW1lIiwiZmlsZUxpbmVzIiwicmVhZEFzQXJyYXlCdWZmZXIiLCJzdHlsZXMiLCJjb250YWluZXIiLCJtYWluIiwidGl0bGUiLCJjcmVhdGUiLCJzdWJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicmV2ZXJzZSIsImluZGV4IiwiY2VudGVyIiwiYnV0dG9uIiwidGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0lBRXFCQSxTO0FBQ25CLHFCQUFZQyxHQUFaLEVBQWlCO0FBQUE7O0FBQ2YsU0FBS0EsR0FBTCxHQUFXQSxHQUFYO0FBQ0Q7Ozs7bUNBdUVjO0FBQ2I7QUFDRUMsNEJB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QUFBSSxpQ0FBUyxFQUFFeUYsK0RBQU0sQ0FBQ1M7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFwQzVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKLHFCQUFlRCxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRDRCO0FBQUEsaUJBQTdCO0FBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBbUVFO0FBQVEsdUJBQVMsRUFBRVIsK0RBQU0sQ0FBQ1UsTUFBMUI7QUFBa0MscUJBQU8sRUFBRWhHLFNBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQW5FRjtBQUFBLDBCQVJKO0FBQUEsd0JBUko7QUFBQSxzQkFWSixlQXVHRSxxRUFBQywyREFBRDtBQUNFLGVBQU8sRUFBQyw2QkFEVjtBQUVFLGdCQUFRLEVBQUMsc0RBRlg7QUFHRSxZQUFJLGVBQ0Y7QUFBQSxpQ0FDRTtBQUFHLHFCQUFTLEVBQUVzRiwrREFBTSxDQUFDVyxJQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXZHRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF5SEQ7O0dBblR1QnJJLFE7VUFDUEUscUQ7OztLQURPRixRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2V4cGVyaW1lbnRhdGlvbnMvYXJkZW5uZXMtZGVtby5hNTFjYThkODYzN2M5NTE4MWU1Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcGxpY2F0aW9uIGZyb20gXCIuL0FwcGxpY2F0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcGxpY2FudCB7XG4gIGNvbnN0cnVjdG9yKGRvbSkge1xuICAgIHRoaXMuZG9tID0gZG9tO1xuICB9XG5cbiAgZ2V0IGxhc3ROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmRvbS5nZXRFbGVtZW50c0J5VGFnTmFtZShcIk5PTVwiKVswXT8uaW5uZXJIVE1MO1xuICB9XG5cbiAgZ2V0IGZpcnN0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kb20uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJQUkVOT01cIilbMF0/LmlubmVySFRNTDtcbiAgfVxuXG4gIGdldCByb2xlKCkge1xuICAgIHJldHVybiB0aGlzLmRvbS5nZXRFbGVtZW50c0J5VGFnTmFtZShcIlJPTEVQRVJTXCIpWzBdPy5pbm5lckhUTUw7XG4gIH1cblxuICBnZXQgdG9wRW50cmFudCgpIHtcbiAgICByZXR1cm4gdGhpcy5kb20uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJUT1BQRVJTRU5URFJPREVWT1JTQVwiKVswXT8uaW5uZXJIVE1MO1xuICB9XG5cbiAgZ2V0IHRvcERyb2l0c0V0RGV2b2lycygpIHtcbiAgICByZXR1cm4gdGhpcy5kb20uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJUT1BQRVJTRFJPREVWT1JTQVwiKVswXT8uaW5uZXJIVE1MO1xuICB9XG5cbiAgZ2V0IHNvY2lvUHJvZmVzc2lvbmFsRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5kb20uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJEb25uZWVzU29jaW9Qcm9mZXNzaW9ubmVsbGVzXCIpWzBdPy5pbm5lckhUTUw7XG4gIH1cblxuICBnZXQgbmF0aW9uYWxpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiTkFUSVwiKVswXT8uaW5uZXJIVE1MO1xuICB9XG5cbiAgZ2V0IGFjdGl2aXR5KCkge1xuICAgIHJldHVybiB0aGlzLmRvbS5nZXRFbGVtZW50c0J5VGFnTmFtZShcIkFDVFwiKVswXT8uaW5uZXJIVE1MO1xuICB9XG5cbiAgZ2V0IHNvY2lhbFNlY3VyaXR5TnVtYmVyKCkge1xuICAgIHJldHVybiB0aGlzLmRvbS5nZXRFbGVtZW50c0J5VGFnTmFtZShcIk5JUlwiKVswXT8uaW5uZXJIVE1MO1xuICB9XG5cbiAgZ2V0IGFwcGxpY2F0aW9uKCkge1xuICAgIHJldHVybiBuZXcgQXBwbGljYXRpb24odGhpcy5kb20ucGFyZW50Tm9kZSk7XG4gIH1cblxuICBnZXQgcnNhQXBwbGljYXRpb25OdW1iZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXBwbGljYXRpb24ucnNhQXBwbGljYXRpb25OdW1iZXI7XG4gIH1cblxuICBnZXQgZW1haWxBZGRyZXNzKCkge1xuICAgIHJldHVybiB0aGlzLmFwcGxpY2F0aW9uLmVtYWlsQWRkcmVzcztcbiAgfVxuXG4gIGdldCBhcHBsaWNhdGlvblN0YXR1c0NvZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXBwbGljYXRpb24uc3RhdHVzQ29kZTtcbiAgfVxuXG4gIGdldCBhcHBsaWNhdGlvblN1c3BlbnNpb25Nb3RpdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXBwbGljYXRpb24uc3VzcGVuc2lvbk1vdGl2ZTtcbiAgfVxuXG4gIGdldCBwaG9uZU51bWJlcigpIHtcbiAgICByZXR1cm4gdGhpcy5hcHBsaWNhdGlvbi5waG9uZU51bWJlcjtcbiAgfVxuXG4gIGdldCB0b3BGb3llckRyb2l0c0V0RGV2b2lycygpIHtcbiAgICByZXR1cm4gdGhpcy5hcHBsaWNhdGlvbi50b3BGb3llckRyb2l0c0V0RGV2b2lycztcbiAgfVxuXG4gIC8vIHN0cmluZyB1c2VkIHRvIGlkZW50aWZ5IGFwcGxpY2FudHNcbiAgZ2V0IGlkKCkge1xuICAgIHJldHVybiBbdGhpcy5yc2FBcHBsaWNhdGlvbk51bWJlciwgdGhpcy5yb2xlXS5qb2luKFwiLVwiKTtcbiAgfVxuXG4gIHBlcnNvbmFsRGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcnNhQXBwbGljYXRpb25OdW1iZXI6IHRoaXMucnNhQXBwbGljYXRpb25OdW1iZXIsXG4gICAgICBzb2NpYWxTZWN1cml0eU51bWJlcjogdGhpcy5zb2NpYWxTZWN1cml0eU51bWJlcixcbiAgICAgIGxhc3ROYW1lOiB0aGlzLmxhc3ROYW1lLFxuICAgICAgZmlyc3ROYW1lOiB0aGlzLmZpcnN0TmFtZSxcbiAgICAgIHJvbGU6IHRoaXMucm9sZSxcbiAgICAgIC4uLnRoaXMuY29udGFjdEluZm9zKCksXG4gICAgfTtcbiAgfVxuXG4gIGNvbnRhY3RJbmZvcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uKHRoaXMucGhvbmVOdW1iZXIgJiYgeyBwaG9uZU51bWJlcjogdGhpcy5waG9uZU51bWJlciB9KSxcbiAgICAgIC4uLih0aGlzLmVtYWlsQWRkcmVzcyAmJiB7IGVtYWlsQWRkcmVzczogdGhpcy5lbWFpbEFkZHJlc3MgfSksXG4gICAgfTtcbiAgfVxuXG4gIGlzVG9wRW50cmFudCgpIHtcbiAgICByZXR1cm4gdGhpcy50b3BFbnRyYW50ID09PSBcIjFcIjtcbiAgfVxuXG4gIHdpdGhSaWdodHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXBwbGljYXRpb24ud2l0aFJpZ2h0cygpICYmIHRoaXMud2l0aERyb2l0c0V0RGV2b2lycygpO1xuICB9XG5cbiAgaW5Gb3llcldpdGhEcm9pdHNFdERldm9pcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9wRm95ZXJEcm9pdHNFdERldm9pcnMgPT09IFwiMVwiO1xuICB9XG5cbiAgd2l0aERyb2l0c0V0RGV2b2lycygpIHtcbiAgICByZXR1cm4gdGhpcy50b3BEcm9pdHNFdERldm9pcnMgPT09IFwiMVwiO1xuICB9XG59XG4iLCJpbXBvcnQgQXBwbGljYW50IGZyb20gXCIuL0FwcGxpY2FudFwiO1xuXG5jb25zdCBFTElHSUJMRV9TVVNQRU5TSU9OX01PVElWRVMgPSBbXCIwMVwiLCBcIjA1XCIsIFwiMDZcIiwgXCIzNVwiLCBcIjM2XCJdO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHBsaWNhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGRvbSkge1xuICAgIHRoaXMuZG9tID0gZG9tO1xuICB9XG5cbiAgZ2V0IGVtYWlsQWRkcmVzcygpIHtcbiAgICByZXR1cm4gdGhpcy5kb20uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJBRFJFTEVDXCIpWzBdPy5pbm5lckhUTUw7XG4gIH1cblxuICBnZXQgcGhvbmVOdW1iZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiTlVNVEVMXCIpWzBdPy5pbm5lckhUTUw7XG4gIH1cblxuICBnZXQgcnNhQXBwbGljYXRpb25OdW1iZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiTlVNREVNUlNBXCIpWzBdPy5pbm5lckhUTUw7XG4gIH1cblxuICBnZXQgcGhvbmVBdXRob3JpemF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmRvbS5nZXRFbGVtZW50c0J5VGFnTmFtZShcIkFVVE9SVVRJVEVMXCIpWzBdPy5pbm5lckhUTUw7XG4gIH1cblxuICBnZXQgZW1haWxBdXRob3JpemF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmRvbS5nZXRFbGVtZW50c0J5VGFnTmFtZShcIkFVVE9SVVRJQURSRUxFQ1wiKVswXT8uaW5uZXJIVE1MO1xuICB9XG5cbiAgZ2V0IGRhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiRFRERU1SU0FcIilbMF0/LmlubmVySFRNTDtcbiAgfVxuXG4gIGdldCBzdGF0dXNDb2RlKCkge1xuICAgIHJldHVybiB0aGlzLmRvbS5nZXRFbGVtZW50c0J5VGFnTmFtZShcIkVUQVRET1NSU0FcIilbMF0/LmlubmVySFRNTDtcbiAgfVxuXG4gIGdldCBzdXNwZW5zaW9uTW90aXZlKCkge1xuICAgIHJldHVybiB0aGlzLmRvbS5nZXRFbGVtZW50c0J5VGFnTmFtZShcIk1PVElTVVNWRVJTUlNBXCIpWzBdPy5pbm5lckhUTUw7XG4gIH1cblxuICBnZXQgYXBwbGljYW50cygpIHtcbiAgICByZXR1cm4gWy4uLnRoaXMuZG9tLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiUGVyc29ubmVcIildLm1hcChhcHBsaWNhbnREb20gPT4ge1xuICAgICAgcmV0dXJuIG5ldyBBcHBsaWNhbnQoYXBwbGljYW50RG9tKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldCB0b3BGb3llckRyb2l0c0V0RGV2b2lycygpIHtcbiAgICByZXR1cm4gdGhpcy5kb20uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJUT1BGT1lEUk9ERVZPUlNBXCIpWzBdPy5pbm5lckhUTUw7XG4gIH1cblxuICB3aXRoUmlnaHRzKCkge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLndpdGhEcm9pdHNPdXZlcnRzRXRWZXJzYWJsZXMoKSB8fFxuICAgICAgKHRoaXMud2l0aERyb2l0c091dmVydHNTdXNwZW5kdSgpICYmXG4gICAgICAgIEVMSUdJQkxFX1NVU1BFTlNJT05fTU9USVZFUy5pbmNsdWRlcyh0aGlzLnN1c3BlbnNpb25Nb3RpdmUpKVxuICAgICk7XG4gIH1cblxuICB3aXRoVXNhYmxlRW1haWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZW1haWxBZGRyZXNzICYmIHRoaXMuZW1haWxBdXRob3JpemF0aW9uID09PSBcIkFcIjtcbiAgfVxuXG4gIHdpdGhGb3JiaWRkZW5FbWFpbFVzYWdlKCkge1xuICAgIHJldHVybiB0aGlzLmVtYWlsQWRkcmVzcyAmJiB0aGlzLmVtYWlsQXV0aG9yaXphdGlvbiA9PT0gXCJSXCI7XG4gIH1cblxuICB3aXRob3V0RW1haWxVc2FnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5lbWFpbEFkZHJlc3MgJiYgdGhpcy5lbWFpbEF1dGhvcml6YXRpb24gPT09IFwiSVwiO1xuICB9XG5cbiAgd2l0aFVzYWJsZVBob25lKCkge1xuICAgIHJldHVybiB0aGlzLnBob25lTnVtYmVyICYmIHRoaXMucGhvbmVBdXRob3JpemF0aW9uID09PSBcIkFcIjtcbiAgfVxuXG4gIHdpdGhGb3JiaWRkZW5QaG9uZVVzYWdlKCkge1xuICAgIHJldHVybiB0aGlzLnBob25lTnVtYmVyICYmIHRoaXMucGhvbmVBdXRob3JpemF0aW9uID09PSBcIlJcIjtcbiAgfVxuXG4gIHdpdGhvdXRQaG9uZVVzYWdlKCkge1xuICAgIHJldHVybiB0aGlzLnBob25lTnVtYmVyICYmIHRoaXMucGhvbmVBdXRob3JpemF0aW9uID09PSBcIklcIjtcbiAgfVxuXG4gIHdpdGhEcm9pdHNPdXZlcnRzRXRWZXJzYWJsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzQ29kZSA9PT0gXCIyXCI7XG4gIH1cblxuICB3aXRoRHJvaXRzT3V2ZXJ0c1N1c3BlbmR1KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXR1c0NvZGUgPT09IFwiNFwiO1xuICB9XG5cbiAgd2l0aERTUCgpIHtcbiAgICByZXR1cm4gdGhpcy5hcHBsaWNhbnRzLnNvbWUoYXBwbGljYW50ID0+IGFwcGxpY2FudC5zb2Npb1Byb2Zlc3Npb25hbERhdGEpO1xuICB9XG59XG4iLCJpbXBvcnQgQXBwbGljYW50IGZyb20gXCIuL0FwcGxpY2FudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlRmx1eCB7XG4gIGNvbnN0cnVjdG9yKGZpbGVDb250ZW50KSB7XG4gICAgY29uc3QgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuICAgIHRoaXMuZG9tID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhmaWxlQ29udGVudCwgXCJhcHBsaWNhdGlvbi94bWxcIik7XG4gIH1cblxuICBnZXQgZGVzYygpIHtcbiAgICByZXR1cm4gdGhpcy5kb20uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJJZGVudGlmaWNhdGlvbkZsdXhcIilbMF07XG4gIH1cblxuICBnZXQgYXBwbGljYW50cygpIHtcbiAgICByZXR1cm4gWy4uLnRoaXMuZG9tLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiUGVyc29ubmVcIildLm1hcChhcHBsaWNhbnREb20gPT4ge1xuICAgICAgcmV0dXJuIG5ldyBBcHBsaWNhbnQoYXBwbGljYW50RG9tKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldCBhcHBsaWNhbnRzQ291bnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXBwbGljYW50cy5sZW5ndGg7XG4gIH1cblxuICBnZXQgYXBwbGljYXRpb25zQ291bnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXBwbGljYXRpb25zLmxlbmd0aDtcbiAgfVxuXG4gIGdldCBmcmVxdWVuY3koKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVzYy5nZXRFbGVtZW50c0J5VGFnTmFtZShcIlRZUEVGTFVYXCIpWzBdLmlubmVySFRNTDtcbiAgfVxuXG4gIGdldCBvcmlnaW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVzYy5nZXRFbGVtZW50c0J5VGFnTmFtZShcIk5BVEZMVVhcIilbMF0uaW5uZXJIVE1MO1xuICB9XG5cbiAgZ2V0IGZpbGVEYXRldGltZSgpIHtcbiAgICByZXR1cm4gYCR7dGhpcy5jcmVhdGlvbkRhdGV9LSR7dGhpcy5jcmVhdGlvblRpbWV9YDtcbiAgfVxuXG4gIGdldCBjcmVhdGlvbkRhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVzYy5nZXRFbGVtZW50c0J5VGFnTmFtZShcIkRUQ1JFQUZMVVhcIilbMF0uaW5uZXJIVE1MO1xuICB9XG5cbiAgZ2V0IGNyZWF0aW9uVGltZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kZXNjLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiSEVVQ1JFQUZMVVhcIilbMF0uaW5uZXJIVE1MO1xuICB9XG5cbiAgZ2V0IHBhcnNlRXJyb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tLmFjdGl2ZUVsZW1lbnQgJiYgdGhpcy5kb20uYWN0aXZlRWxlbWVudC5ub2RlTmFtZSA9PSBcInBhcnNlcmVycm9yXCI7XG4gIH1cbn1cbiIsImltcG9ydCB7IEZyYWdtZW50LCB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWR1Y2VyIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCAqIGFzIFhMU1ggZnJvbSBcInhsc3hcIjtcblxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9sYXlvdXRcIjtcbmltcG9ydCBGaWxlSGFuZGxlciBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9maWxlSGFuZGxlclwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9mb290ZXJcIjtcbmltcG9ydCBMb2dpbkZvcm0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvbG9naW5Gb3JtXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi8uLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5cbmltcG9ydCB7IGFwcEZldGNoIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9hcHBGZXRjaFwiO1xuaW1wb3J0IHsgaW5pdFJlZHVjZXIsIHJlZHVjZXJGYWN0b3J5IH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9yZWR1Y2VyRmFjdG9yeVwiO1xuaW1wb3J0IHsgZ2V0RGF0ZVRpbWVTdHJpbmcsIGdldEZyZW5jaEZvcm1hdERhdGVTdHJpbmcsIHN0cmluZ1RvRGF0ZSB9IGZyb20gXCIuLi8uLi8uLi9saWIvZGF0ZXNcIjtcblxuY29uc3QgcmVkdWNlciA9IHJlZHVjZXJGYWN0b3J5KFwiRXhww6lyaW1lbnRhdGlvbiBBcmRlbm5lcyAtIENOQUYgLSBCw6luw6lmaWNpYWlyZVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXJkZW5uZXMoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBpc0RlbW8gPSByb3V0ZXIucGF0aG5hbWUuaW5jbHVkZXMoXCJkZW1vXCIpO1xuICBjb25zdCBkZXZNb2RlID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT0gXCJkZXZlbG9wbWVudFwiO1xuICBjb25zdCBvcmdhSUQgPSBpc0RlbW9cbiAgICA/IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX09SR0FOSVNBVElPTl9JRF9ERU1PXG4gICAgOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19PUkdBTklTQVRJT05fSURfUFJPRDtcblxuICBjb25zdCBSRFZfU09MSURBUklURVNfVVJMID0gaXNEZW1vXG4gICAgPyBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19SRFZfU09MSURBUklURVNfREVNT19VUkxcbiAgICA6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1JEVl9TT0xJREFSSVRFU19QUk9EX1VSTDtcbiAgY29uc3QgdXNlclVybCA9IFJEVl9TT0xJREFSSVRFU19VUkwgKyBcIi9hcGkvdjEvdXNlcnNcIjtcblxuICBjb25zdCBbZGV2RmlsZSwgc2V0RGV2RmlsZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3J1bnMsIGRpc3BhdGNoUnVuc10gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIFtdLCBpbml0UmVkdWNlcik7XG4gIGNvbnN0IFt1c2Vyc0RhdGEsIHNldFVzZXJzRGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3VzZXJTdGF0dXNDaGVja2VkLCBzZXRVc2VyU3RhdHVzQ2hlY2tlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtmaWxlU2l6ZSwgc2V0RmlsZVNpemVdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtpc0xvZ2dlZCwgc2V0SXNMb2dnZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbdG9rZW4sIHNldFRva2VuXSA9IHVzZVN0YXRlKHtcbiAgICB0b2tlbklkOiBcIlwiLFxuICAgIHVpZDogXCJcIixcbiAgICBjbGllbnQ6IFwiXCIsXG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRldkZpbGUpIHtcbiAgICAgIGhhbmRsZUZpbGUoZGV2RmlsZSk7XG4gICAgfVxuICB9LCBbZGV2RmlsZV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHVzZXJzRGF0YSAmJiB1c2VyU3RhdHVzQ2hlY2tlZCA9PT0gZmFsc2UpIHtcbiAgICAgIHVzZXJzRGF0YS5mb3JFYWNoKCh1c2VyLCB1c2VySW5kZXgpID0+IHtcbiAgICAgICAgaWYgKHVzZXJbXCJJRCBSRFZcIl0gIT0gXCJcIikge1xuICAgICAgICAgIGNoZWNrVXNlckludml0YXRpb25TdGF0dXModXNlcltcIklEIFJEVlwiXSwgdXNlckluZGV4KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBzZXRVc2VyU3RhdHVzQ2hlY2tlZCh0cnVlKTtcbiAgICB9XG4gIH0sIFt1c2Vyc0RhdGFdKTtcblxuICBjb25zdCB3cml0ZUZpbGUgPSAoKSA9PiB7XG4gICAgY29uc3Qgb3V0V29ya2Jvb2sgPSBYTFNYLnV0aWxzLmJvb2tfbmV3KCk7XG4gICAgY29uc3Qgb3V0V29ya3NoZWV0ID0gWExTWC51dGlscy5qc29uX3RvX3NoZWV0KHVzZXJzRGF0YSk7XG4gICAgWExTWC51dGlscy5ib29rX2FwcGVuZF9zaGVldChvdXRXb3JrYm9vaywgb3V0V29ya3NoZWV0LCBcIkRJVkVSR0VOQ0VTXCIpO1xuICAgIC8vIFhMU1gudXRpbHMuYm9va19hcHBlbmRfc2hlZXQob3V0V29ya2Jvb2ssIHhscy5TaGVldHNbeGxzLlNoZWV0TmFtZXNbMV1dLCBcIkdSQVBISVFVRVwiKTtcbiAgICAvLyBYTFNYLnV0aWxzLmJvb2tfYXBwZW5kX3NoZWV0KG91dFdvcmtib29rLCB4bHMuU2hlZXRzW3hscy5TaGVldE5hbWVzWzJdXSwgXCJTZWxlY3Rpb24gQ09BXCIpO1xuICAgIFhMU1gud3JpdGVGaWxlKG91dFdvcmtib29rLCBgYXJkZW5uZXNfcnNhXyR7Z2V0RGF0ZVRpbWVTdHJpbmcobmV3IERhdGUoKSl9Lnhsc3hgKTtcbiAgfTtcblxuICBhc3luYyBmdW5jdGlvbiBnZW5lcmF0ZUludml0YXRpb25VcmwodXNlcklkLCB1c2VySW5kZXgpIHtcbiAgICBjb25zdCBpbnZpdGF0aW9uVXJsID0gdXNlclVybCArIGAvJHt1c2VySWR9L2ludml0ZWA7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXBwRmV0Y2goaW52aXRhdGlvblVybCwgdG9rZW4pO1xuXG4gICAgbGV0IG5ld1VzZXJzRGF0YSA9IFsuLi51c2Vyc0RhdGFdO1xuICAgIGlmIChyZXN1bHQuaW52aXRhdGlvbl91cmwpIHtcbiAgICAgIG5ld1VzZXJzRGF0YVt1c2VySW5kZXhdW1wiTGllbiBkJ2ludml0YXRpb25cIl0gPSByZXN1bHQuaW52aXRhdGlvbl91cmw7XG4gICAgfSBlbHNlIGlmIChyZXN1bHQuaW52aXRhdGlvbl90b2tlbikge1xuICAgICAgbmV3VXNlcnNEYXRhW3VzZXJJbmRleF1bXCJDb2RlIGQnaW52aXRhdGlvblwiXSA9IHJlc3VsdC5pbnZpdGF0aW9uX3Rva2VuO1xuICAgIH1cbiAgICBuZXdVc2Vyc0RhdGFbdXNlckluZGV4XVtcIkRhdGUgZCdpbnZpdGF0aW9uXCJdID0gZ2V0RnJlbmNoRm9ybWF0RGF0ZVN0cmluZyhuZXcgRGF0ZSgpKTtcbiAgICBzZXRVc2Vyc0RhdGEobmV3VXNlcnNEYXRhKTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGdldFVzZXIodXNlcklkLCB0b2tlbikge1xuICAgIGNvbnN0IGdldFVzZXJVcmwgPSB1c2VyVXJsICsgYC8ke3VzZXJJZH1gO1xuICAgIHJldHVybiBhd2FpdCBhcHBGZXRjaChnZXRVc2VyVXJsLCB0b2tlbik7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBjaGVja1VzZXJJbnZpdGF0aW9uU3RhdHVzKHVzZXJJZCwgdXNlckluZGV4KSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0VXNlcih1c2VySWQsIHRva2VuKTtcblxuICAgIGxldCBuZXdVc2Vyc0RhdGEgPSBbLi4udXNlcnNEYXRhXTtcbiAgICBpZiAocmVzdWx0LnVzZXIuaW52aXRhdGlvbl9jcmVhdGVkX2F0KSB7XG4gICAgICBsZXQgaW52aXRhdGlvbl9kYXRlID0gcmVzdWx0LnVzZXIuaW52aXRhdGlvbl9jcmVhdGVkX2F0IC8vIERhdGUgYXUgZm9ybWF0IDogMjAyMS0wNC0xNSAxNDo1Mzo1NiArMDIwMFxuICAgICAgICAuc3Vic3RyaW5nKDAsIDEwKTsgLy8gUsOpY3Vww6lyZXIgbGVzIDEwIHByZW1pZXJzIGNoaWZmcmVzIChsYSBkYXRlKVxuICAgICAgaW52aXRhdGlvbl9kYXRlID0gbmV3IERhdGUoaW52aXRhdGlvbl9kYXRlKTsgLy8gQ3LDqWVyIHVuZSBkYXRlIEpTXG4gICAgICBuZXdVc2Vyc0RhdGFbdXNlckluZGV4XVtcIkRhdGUgZCdpbnZpdGF0aW9uXCJdID0gZ2V0RnJlbmNoRm9ybWF0RGF0ZVN0cmluZyhpbnZpdGF0aW9uX2RhdGUpO1xuICAgIH1cbiAgICBpZiAocmVzdWx0LnVzZXIuaW52aXRhdGlvbl9hY2NlcHRlZF9hdCkge1xuICAgICAgbGV0IGluc2NyaXB0aW9uX2RhdGUgPSByZXN1bHQudXNlci5pbnZpdGF0aW9uX2FjY2VwdGVkX2F0IC8vIERhdGUgYXUgZm9ybWF0IDogMjAyMS0wNC0xNSAxNDo1Mzo1NiArMDIwMFxuICAgICAgICAuc3Vic3RyaW5nKDAsIDEwKTsgLy8gUsOpY3Vww6lyZXIgbGVzIDEwIHByZW1pZXJzIGNoaWZmcmVzIChsYSBkYXRlKVxuICAgICAgaW5zY3JpcHRpb25fZGF0ZSA9IG5ldyBEYXRlKGluc2NyaXB0aW9uX2RhdGUpOyAvLyBDcsOpZXIgdW5lIGRhdGUgSlNcbiAgICAgIG5ld1VzZXJzRGF0YVt1c2VySW5kZXhdW1wiRGF0ZSBkJ2luc2NyaXB0aW9uXCJdID0gZ2V0RnJlbmNoRm9ybWF0RGF0ZVN0cmluZyhpbnNjcmlwdGlvbl9kYXRlKTtcbiAgICB9XG4gICAgc2V0VXNlcnNEYXRhKG5ld1VzZXJzRGF0YSk7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBjcmVhdGVVc2VyKHVzZXJEYXRhLCB1c2VySW5kZXgpIHtcbiAgICBjb25zdCBhZGRyZXNzID0gdXNlckRhdGFbXCJBRFJFU1NFXCJdICsgXCIgLSBcIiArIHVzZXJEYXRhW1wiQ09ERSBQT1NUQUxcIl0gKyBcIiBcIiArIHVzZXJEYXRhW1wiVklMTEVcIl07XG4gICAgaWYgKFsxMywgMTVdLmluY2x1ZGVzKHVzZXJEYXRhW1wiTsKwQ0FGXCJdLnRyaW0oKS5sZW5ndGgpKSB1c2VyRGF0YVtcIk7CsENBRlwiXSA9IFwiXCJcblxuICAgIGxldCB1c2VyID0ge1xuICAgICAgZmlyc3RfbmFtZTogdXNlckRhdGFbXCJQUkVOT01cIl0sXG4gICAgICBsYXN0X25hbWU6IHVzZXJEYXRhW1wiTk9NXCJdLFxuICAgICAgZW1haWw6IHVzZXJEYXRhW1wiTUFJTFwiXSxcbiAgICAgIHBob25lX251bWJlcjogdXNlckRhdGFbXCJURUxFUEhPTkVcIl0ucmVwbGFjZSgvXFxzKy9nLCBcIlwiKSxcbiAgICAgIGJpcnRoX2RhdGU6IHN0cmluZ1RvRGF0ZSh1c2VyRGF0YVtcIkRBVEUgREUgTkFJU1NBTkNFXCJdKSxcbiAgICAgIGFkZHJlc3M6IGFkZHJlc3MsXG4gICAgICBjYWlzc2VfYWZmaWxpYXRpb246IFwiY2FmXCIsXG4gICAgICBhZmZpbGlhdGlvbl9udW1iZXI6IHVzZXJEYXRhW1wiTsKwQ0FGXCJdLFxuICAgICAgb3JnYW5pc2F0aW9uX2lkczogW29yZ2FJRF0sXG4gICAgfTtcblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGFwcEZldGNoKHVzZXJVcmwsIHRva2VuLCBcIlBPU1RcIiwgSlNPTi5zdHJpbmdpZnkodXNlcikpO1xuXG4gICAgbGV0IG5ld1VzZXJzRGF0YSA9IFsuLi51c2Vyc0RhdGFdO1xuICAgIGlmIChyZXN1bHQudXNlcikge1xuICAgICAgbmV3VXNlcnNEYXRhW3VzZXJJbmRleF1bXCJJRCBSRFZcIl0gPSByZXN1bHQudXNlci5pZDtcbiAgICAgIHNldFVzZXJzRGF0YShuZXdVc2Vyc0RhdGEpO1xuICAgICAgZ2VuZXJhdGVJbnZpdGF0aW9uVXJsKHJlc3VsdC51c2VyLmlkLCB1c2VySW5kZXgpO1xuICAgIH0gZWxzZSBpZiAocmVzdWx0LmVycm9ycyAmJiByZXN1bHQuZXJyb3JzLmVtYWlsICYmIHJlc3VsdC5lcnJvcnMuZW1haWxbMF0uZXJyb3IgPT09IFwidGFrZW5cIikge1xuICAgICAgbmV3VXNlcnNEYXRhW3VzZXJJbmRleF1bXCJJRCBSRFZcIl0gPSByZXN1bHQuZXJyb3JzLmVtYWlsWzBdLmlkO1xuICAgICAgc2V0VXNlcnNEYXRhKG5ld1VzZXJzRGF0YSk7XG4gICAgICBjaGVja1VzZXJJbnZpdGF0aW9uU3RhdHVzKHJlc3VsdC5lcnJvcnMuZW1haWxbMF0uaWQsIHVzZXJJbmRleCk7XG4gICAgICBhbGVydChcIlVuIGNvbXB0ZSBhc3NvY2nDqSDDoCBjZXQgZW1haWwgZXhpc3RlIGTDqWrDoFwiKTtcbiAgICB9IGVsc2UgaWYgKHJlc3VsdC5lcnJvcnMgJiYgcmVzdWx0LmVycm9ycy5lbWFpbCAmJiByZXN1bHQuZXJyb3JzLmVtYWlsWzBdLmVycm9yID09PSBcImludmFsaWRcIikge1xuICAgICAgYWxlcnQoXCJMJ2FkcmVzc2UgbWFpbCBuJ2VzdCBwYXMgdmFsaWRlXCIpO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICByZXN1bHQuZXJyb3JzICYmXG4gICAgICByZXN1bHQuZXJyb3JzLmZpcnN0X25hbWUgJiZcbiAgICAgIHJlc3VsdC5lcnJvcnMuZmlyc3RfbmFtZVswXS5lcnJvciA9PT0gXCJkw6lqw6AgdXRpbGlzw6lcIlxuICAgICkge1xuICAgICAgYWxlcnQoXG4gICAgICAgIFwiTGEgY3LDqWF0aW9uIGR1IGNvbXB0ZSBhIMOpY2hvdcOpLiBMJ3V0aWxpc2F0ZXVyIHNlbWJsZSBleGlzdGVyIG1haXMgbidhIHB1IMOqdHJlIHLDqWN1cMOpcsOpLlwiXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAocmVzdWx0LmVycm9ycyAmJiByZXN1bHQuZXJyb3JzWzBdICYmIHJlc3VsdC5lcnJvcnNbMF0uYmFzZSA9PT0gXCJmb3JiaWRkZW5cIikge1xuICAgICAgYWxlcnQoXCJWb3RyZSBjb21wdGUgYWdlbnQgUkRWLVNvbGlkYXJpdMOpcyBuZSB2b3VzIHBlcm1ldCBwYXMgZCdlZmZlY3R1ZXIgY2V0dGUgYWN0aW9uLlwiKTtcbiAgICB9IGVsc2UgaWYgKHJlc3VsdC5lcnJvcnMgJiYgcmVzdWx0LmVycm9yc1swXSkge1xuICAgICAgYWxlcnQocmVzdWx0LmVycm9yc1swXSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgaGFuZGxlTG9naW4gPSAodG9rZW5JZCwgdWlkLCBjbGllbnQpID0+IHtcbiAgICBzZXRUb2tlbih7IC4uLnRva2VuLCB0b2tlbklkOiB0b2tlbklkLCB1aWQ6IHVpZCwgY2xpZW50OiBjbGllbnQgfSk7XG4gICAgc2V0SXNMb2dnZWQodHJ1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRmlsZSA9IGFzeW5jIGZpbGUgPT4ge1xuICAgIGlmIChkZXZNb2RlICYmIGZpbGUgIT0gZGV2RmlsZSkge1xuICAgICAgc2V0RGV2RmlsZShmaWxlKTtcbiAgICB9XG4gICAgc2V0RmlsZVNpemUoZmlsZS5zaXplKTtcbiAgICBjb25zdCBzdGFydF90aW1lID0gbmV3IERhdGUoKTtcblxuICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGZpbGVEYXRhID0gbmV3IFVpbnQ4QXJyYXkoZXZlbnQudGFyZ2V0LnJlc3VsdCk7XG4gICAgICAgIGNvbnN0IHhscyA9IFhMU1gucmVhZChmaWxlRGF0YSwgeyB0eXBlOiBcImFycmF5XCIsIGNlbGxEYXRlczogdHJ1ZSwgZGF0ZU5GOiBcImRkL21tL3l5eXlcIiB9KTtcbiAgICAgICAgY29uc3Qgd29ya3NoZWV0ID0geGxzLlNoZWV0c1t4bHMuU2hlZXROYW1lc1swXV07XG5cbiAgICAgICAgbGV0IGpzb25EYXRhID0gWExTWC51dGlscy5zaGVldF90b19qc29uKHdvcmtzaGVldCwge1xuICAgICAgICAgIGJsYW5rcm93czogZmFsc2UsXG4gICAgICAgICAgcmF3OiBmYWxzZSxcbiAgICAgICAgICBkZWZ2YWw6IFwiXCIsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHdlIHJlbW92ZSBsaW5lIGJyZWFrcyBmcm9tIGFsbCBrZXlzXG4gICAgICAgIGpzb25EYXRhID0ganNvbkRhdGEubWFwKHVzZXJEYXRhID0+IHtcbiAgICAgICAgICByZXR1cm4gWy4uLk9iamVjdC5rZXlzKHVzZXJEYXRhKV0ucmVkdWNlKChyZXMsIGtleSkgPT4ge1xuICAgICAgICAgICAgcmVzW2tleS5yZXBsYWNlKC9bXFxuXFxyXSsvZywgXCIgXCIpXSA9IHVzZXJEYXRhW2tleV07XG4gICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICAgIH0sIHt9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAganNvbkRhdGEgPT0gbnVsbCAmJiBzZXRJc1BlbmRpbmcoZmFsc2UpO1xuICAgICAgICBzZXRVc2VyU3RhdHVzQ2hlY2tlZChmYWxzZSk7XG4gICAgICAgIHNldFVzZXJzRGF0YShqc29uRGF0YSk7XG4gICAgICAgIGRpc3BhdGNoUnVucyh7XG4gICAgICAgICAgdHlwZTogXCJhcHBlbmRcIixcbiAgICAgICAgICBpdGVtOiB7XG4gICAgICAgICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxOSksXG4gICAgICAgICAgICBkdXJhdGlvbjogbmV3IERhdGUoKSAtIHN0YXJ0X3RpbWUsXG4gICAgICAgICAgICBmaWxlbmFtZTogZmlsZS5uYW1lLFxuICAgICAgICAgICAgZmlsZVNpemU6IGZpbGUuc2l6ZSxcbiAgICAgICAgICAgIGZpbGVMaW5lczoganNvbkRhdGEubGVuZ3RoLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9O1xuICAgICAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGZpbGUpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dCBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9IGhhbmRsZUZpbGU9e2hhbmRsZUZpbGV9PlxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+RXhww6lyaW1lbnRhdGlvbiBBcmRlbm5lczwvaDE+XG5cbiAgICAgICAgeyFpc0xvZ2dlZCAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jcmVhdGV9PlxuICAgICAgICAgICAgPExvZ2luRm9ybSBoYW5kbGVMb2dpbj17aGFuZGxlTG9naW59IHJkdlVybD17UkRWX1NPTElEQVJJVEVTX1VSTH0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cblxuICAgICAgICB7aXNMb2dnZWQgJiYgKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8RmlsZUhhbmRsZXJcbiAgICAgICAgICAgICAgaGFuZGxlRmlsZT17aGFuZGxlRmlsZX1cbiAgICAgICAgICAgICAgZmlsZVNpemU9e2ZpbGVTaXplfVxuICAgICAgICAgICAgICBwZW5kaW5nTWVzc2FnZT17XCJSw6ljdXDDqXJhdGlvbiBkZXMgaW5mb3JtYXRpb25zLCBtZXJjaSBkZSBwYXRpZW50ZXJcIn1cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIHt1c2Vyc0RhdGEgJiYgKFxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5zdWJ0aXRsZX0+QsOpbsOpZmljaWFpcmVzIFJTQTwvaDI+XG5cbiAgICAgICAgICAgICAgICB7dXNlcnNEYXRhLmxlbmd0aCA9PSAwICYmIChcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5BdWN1biBiw6luw6lmaWNpYWlyZSBkYW5zIGxlIGZpY2hpZXI8L3A+XG4gICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgIHt1c2Vyc0RhdGEubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5EYXRlPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+Tm9tPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+UHLDqW5vbTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPk1haWw8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5Uw6lsw6lwaG9uZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPklEIFJEVi1Tb2xpZGFyaXTDqXM8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj1cIjNcIj5JbnZpdGF0aW9uPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjb2xTcGFuPVwiMVwiPkRlcm5pZXIgZW52b2kgbGU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj1cIjFcIj5EYXRlIGQnaW5zY3JpcHRpb248L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj1cIjFcIj5BY3Rpb248L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiByZXZlcnNlIGVzdCB1dGlsaXPDqSBwb3VyIHF1ZSBsZXMgdXRpbGlzYXRldXJzIGxlcyBwbHVzIHLDqWNlbnRzIGFwcGFyYWlzc2VudCBlbiBoYXV0ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAge1suLi51c2Vyc0RhdGFdLnJldmVyc2UoKS5tYXAoKHVzZXIsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGcmFnbWVudCBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXNlcltcIkRBVEVcIl0gIT09IFwiXCIgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT57dXNlcltcIkRBVEVcIl19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+e3VzZXJbXCJOT01cIl19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+e3VzZXJbXCJQUkVOT01cIl19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+e3VzZXJbXCJNQUlMXCJdfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9Pnt1c2VyW1wiVEVMRVBIT05FXCJdfTwvdGQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3VzZXJbXCJJRCBSRFZcIl0gPT09IFwiXCIgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjcmVhdGVVc2VyKHVzZXIsIHVzZXJzRGF0YS5sZW5ndGggLSBpbmRleCAtIDEpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDcsOpZXIgdW4gY29tcHRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXNlcltcIklEIFJEVlwiXSAhPT0gXCJcIiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+e3VzZXJbXCJJRCBSRFZcIl19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+e3VzZXJbXCJEYXRlIGQnaW52aXRhdGlvblwiXX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT57dXNlcltcIkRhdGUgZCdpbnNjcmlwdGlvblwiXX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXNlcltcIklEIFJEVlwiXSAhPT0gXCJcIiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVJbnZpdGF0aW9uVXJsKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcltcIklEIFJEVlwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJzRGF0YS5sZW5ndGggLSBpbmRleCAtIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3VzZXJbXCJEYXRlIGQnaW52aXRhdGlvblwiXSAhPT0gXCJcIiAmJiBcIlJlZ8OpbsOpcmVyIGludml0YXRpb25cIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3VzZXJbXCJEYXRlIGQnaW52aXRhdGlvblwiXSA9PT0gXCJcIiAmJiBcIkfDqW7DqXJlciBpbnZpdGF0aW9uXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXNlcltcIklEIFJEVlwiXSA9PT0gXCJcIiAmJiA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT48L3RkPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259IG9uQ2xpY2s9e3dyaXRlRmlsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgUmVnw6luw6lyZXIgZmljaGllclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cblxuICAgICAgICA8Rm9vdGVyXG4gICAgICAgICAgc3ViamVjdD1cIkV4cMOpcmltZW50YXRpb24gQXJkZW5uZXNcIlxuICAgICAgICAgIHBvdXJxdW9pPVwiUXVlbCBlc3QgbCdvYmplY3RpZiBkZSBjZXR0ZSBleHDDqXJpbWVudGF0aW9uJm5ic3A7P1wiXG4gICAgICAgICAgdGV4dD17XG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5cbiAgICAgICAgICAgICAgICBGYWNpbGl0ZXIgbGUgdHJhdmFpbCBkZXMgYWdlbnRzIGR1IGTDqXBhcnRlbWVudCBldCB0ZXN0ZXIgbCd1dGlsaXNhdGlvbiBkZVxuICAgICAgICAgICAgICAgIGwnYXBwbGljYXRpb24gUkRWLVNvbGlkYXJpdMOpcyBwb3VyIGFjY8OpbMOpcmVyIGxhIHByaXNlIGR1IHByZW1pZXIgcmVuZGV6LXZvdXNcbiAgICAgICAgICAgICAgICBkJ29yaWVudGF0aW9uLlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICB9XG4gICAgICAgIC8+XG4gICAgICA8L21haW4+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9