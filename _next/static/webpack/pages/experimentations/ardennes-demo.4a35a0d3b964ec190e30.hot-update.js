webpackHotUpdate_N_E("pages/experimentations/ardennes-demo",{

/***/ "./lib/dates.js":
/*!**********************!*\
  !*** ./lib/dates.js ***!
  \**********************/
/*! exports provided: getFrenchFormatDateString, stringToDate, getDateTimeString, yesterdayApplicationDate, applicationStringToDate, applicationDateToString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFrenchFormatDateString", function() { return getFrenchFormatDateString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringToDate", function() { return stringToDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDateTimeString", function() { return getDateTimeString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yesterdayApplicationDate", function() { return yesterdayApplicationDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applicationStringToDate", function() { return applicationStringToDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applicationDateToString", function() { return applicationDateToString; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");


var stringToDate = function stringToDate(dateStr) {
  var _dateStr$split = dateStr.split("/"),
      _dateStr$split2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_dateStr$split, 3),
      day = _dateStr$split2[0],
      month = _dateStr$split2[1],
      year = _dateStr$split2[2];

  return new Date(year, month - 1, day);
};

var applicationStringToDate = function applicationStringToDate(dateStr) {
  var _dateStr$split3 = dateStr.split("-"),
      _dateStr$split4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_dateStr$split3, 3),
      year = _dateStr$split4[0],
      month = _dateStr$split4[1],
      day = _dateStr$split4[2];

  return new Date(year, month - 1, day);
};

var applicationDateToString = function applicationDateToString(date) {
  var y = date.getFullYear();
  var m = date.getMonth() + 1;
  var d = date.getDate();
  return y + "-" + (m < 10 ? "0".concat(m) : m) + "-" + (d < 10 ? "0".concat(d) : d);
};

var dateYesterday = function dateYesterday(date) {
  date.setDate(date.getDate() - 1);
  return date;
};

var yesterdayApplicationDate = function yesterdayApplicationDate(dateStr) {
  return applicationDateToString(dateYesterday(applicationStringToDate(dateStr)));
};

function getDateTimeString() {
  var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
  var y = date.getFullYear(); // JavaScript months are 0-based.

  var m = date.getMonth() + 1;
  var d = date.getDate();
  var h = date.getHours();
  var mi = date.getMinutes();
  var s = date.getSeconds();
  return y + "_" + (m < 10 ? "0".concat(m) : m) + "_" + (d < 10 ? "0".concat(d) : d) + "_" + (h < 10 ? "0".concat(h) : h) + "_" + (mi < 10 ? "0".concat(mi) : mi) + "_" + (s < 10 ? "0".concat(s) : s);
}

function getFrenchFormatDateString(date) {
  var y = date.getFullYear(); // JavaScript months are 0-based.

  var m = date.getMonth() + 1;
  var d = date.getDate();
  return d + "/" + m + "/" + y;
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
    key: "eligibleAsNew",
    value: function eligibleAsNew() {
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
    } // { 123123-Dupont-Jean-DEM: { firstName: ... }, ... }

  }, {
    key: "applicantsObject",
    get: function get() {
      return this.applicants.reduce(function (applicantsObject, applicant) {
        applicantsObject[applicant.id] = applicant;
        return applicantsObject;
      }, {});
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

  function getUser(_x3) {
    return _getUser.apply(this, arguments);
  }

  function _getUser() {
    _getUser = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(userId) {
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

  function checkUserInvitationStatus(_x4, _x5) {
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
              return getUser(userId);

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

  function invalidOrTakenMail(_x6, _x7) {
    return _invalidOrTakenMail.apply(this, arguments);
  }

  function _invalidOrTakenMail() {
    _invalidOrTakenMail = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5(userData, userIndex) {
      var userId,
          result,
          newUsersData,
          _args5 = arguments;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              userId = _args5.length > 2 && _args5[2] !== undefined ? _args5[2] : null;

              if (!(userId != null)) {
                _context5.next = 8;
                break;
              }

              _context5.next = 4;
              return getUser(userId);

            case 4:
              result = _context5.sent;

              // Vérifie d'abord si l'utilisateur avec le même email est un doublon
              if (result && result.user.first_name.toUpperCase() === userData["PRENOM"].toUpperCase() && result.user.last_name.toUpperCase() === userData["NOM"].toUpperCase() && result.user.birth_date === Object(_lib_dates__WEBPACK_IMPORTED_MODULE_15__["applicationDateToString"])(Object(_lib_dates__WEBPACK_IMPORTED_MODULE_15__["stringToDate"])(userData["DATE DE NAISSANCE"])) && result.user.address.toUpperCase() === userData["ADRESSE"].toUpperCase() + " - " + userData["CODE POSTAL"].toUpperCase() + " " + userData["VILLE"].toUpperCase()) {
                newUsersData = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(usersData);
                newUsersData[userIndex]["ID RDV"] = userId;
                setUsersData(newUsersData);
                checkUserInvitationStatus(userId, userIndex);
                alert("Un compte associé à cet email existe déjà");
              } else {
                createUser(userData, userIndex, false, userId); // Si ce n'est pas un doublon, crée un utilisateur en tant que "proche" de l'utilisateur existant
              }

              _context5.next = 9;
              break;

            case 8:
              createUser(userData, userIndex, false); // crée un utilisateur sans email

            case 9:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));
    return _invalidOrTakenMail.apply(this, arguments);
  }

  function createUser(_x8, _x9) {
    return _createUser.apply(this, arguments);
  }

  function _createUser() {
    _createUser = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee6(userData, userIndex) {
      var withEmail,
          responsible_id,
          address,
          user,
          result,
          newUsersData,
          _args6 = arguments;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              withEmail = _args6.length > 2 && _args6[2] !== undefined ? _args6[2] : true;
              responsible_id = _args6.length > 3 && _args6[3] !== undefined ? _args6[3] : null;
              address = userData["ADRESSE"] + " - " + userData["CODE POSTAL"] + " " + userData["VILLE"];
              user = {
                first_name: userData["PRENOM"],
                last_name: userData["NOM"],
                phone_number: userData["TELEPHONE"].replace(/\s+/g, ""),
                birth_date: Object(_lib_dates__WEBPACK_IMPORTED_MODULE_15__["stringToDate"])(userData["DATE DE NAISSANCE"]),
                address: address,
                caisse_affiliation: "caf",
                affiliation_number: userData["N°CAF"],
                organisation_ids: [orgaID],
                responsible_id: responsible_id
              };
              if (withEmail === true) user.email = userData["MAIL"];
              _context6.next = 7;
              return Object(_lib_appFetch__WEBPACK_IMPORTED_MODULE_13__["appFetch"])(userUrl, token, "POST", JSON.stringify(user));

            case 7:
              result = _context6.sent;
              newUsersData = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(usersData);

              if (result.user) {
                newUsersData[userIndex]["ID RDV"] = result.user.id;
                setUsersData(newUsersData);
                generateInvitationUrl(result.user.id, userIndex);
              } else if (result.errors && result.errors.email && result.errors.email[0].error === "taken") {
                invalidOrTakenMail(userData, userIndex, result.errors.email[0].id);
              } else if (result.errors && result.errors.email && result.errors.email[0].error === "invalid") {
                invalidOrTakenMail(userData, userIndex);
              } else if (result.errors && result.errors.first_name && result.errors.first_name[0].error === "déjà utilisé") {
                alert("La création du compte a échoué. L'utilisateur semble exister mais n'a pu être récupéré.");
              } else if (result.errors && result.errors[0] && result.errors[0].base === "forbidden") {
                alert("Votre compte agent RDV-Solidarités ne vous permet pas d'effectuer cette action.");
              } else if (result.errors && result.errors[0]) {
                alert(result.errors[0]);
              }

            case 10:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
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

    return function handleFile(_x10) {
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
        lineNumber: 226,
        columnNumber: 9
      }, this), !isLogged && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.create,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_loginForm__WEBPACK_IMPORTED_MODULE_11__["default"], {
          handleLogin: handleLogin,
          rdvUrl: RDV_SOLIDARITES_URL
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 230,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 229,
        columnNumber: 11
      }, this), isLogged && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_fileHandler__WEBPACK_IMPORTED_MODULE_9__["default"], {
          handleFile: handleFile,
          fileSize: fileSize,
          pendingMessage: "Récupération des informations, merci de patienter"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 236,
          columnNumber: 13
        }, this), usersData && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.subtitle,
            children: "B\xE9n\xE9ficiaires RSA"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 244,
            columnNumber: 17
          }, this), usersData.length == 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.description,
            children: "Aucun b\xE9n\xE9ficiaire dans le fichier"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 247,
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
                    lineNumber: 255,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    rowSpan: "2",
                    children: "Nom"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 256,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    rowSpan: "2",
                    children: "Pr\xE9nom"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 257,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    rowSpan: "2",
                    children: "Mail"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 258,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    rowSpan: "2",
                    children: "T\xE9l\xE9phone"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 259,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    rowSpan: "2",
                    children: "ID RDV-Solidarit\xE9s"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 260,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    colSpan: "3",
                    children: "Invitation"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 261,
                    columnNumber: 27
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 254,
                  columnNumber: 25
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    colSpan: "1",
                    children: "Dernier envoi le"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 264,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    colSpan: "1",
                    children: "Date d'inscription"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 265,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    colSpan: "1",
                    children: "Action"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 266,
                    columnNumber: 27
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 263,
                  columnNumber: 25
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 253,
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
                        lineNumber: 275,
                        columnNumber: 33
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center,
                        children: user["NOM"]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 276,
                        columnNumber: 33
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center,
                        children: user["PRENOM"]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 277,
                        columnNumber: 33
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center,
                        children: user["MAIL"]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 278,
                        columnNumber: 33
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center,
                        children: user["TELEPHONE"]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 279,
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
                          lineNumber: 283,
                          columnNumber: 37
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 282,
                        columnNumber: 35
                      }, _this), user["ID RDV"] !== "" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center,
                        children: user["ID RDV"]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 291,
                        columnNumber: 35
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center,
                        children: user["Date d'invitation"]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 293,
                        columnNumber: 33
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center,
                        children: user["Date d'inscription"]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 294,
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
                          lineNumber: 297,
                          columnNumber: 37
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 296,
                        columnNumber: 35
                      }, _this), user["ID RDV"] === "" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 310,
                        columnNumber: 59
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 274,
                      columnNumber: 31
                    }, _this)
                  }, index, false, {
                    fileName: _jsxFileName,
                    lineNumber: 272,
                    columnNumber: 27
                  }, _this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 269,
                columnNumber: 23
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 252,
              columnNumber: 21
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.button,
              onClick: writeFile,
              children: "Reg\xE9n\xE9rer fichier"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 318,
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
            lineNumber: 333,
            columnNumber: 15
          }, this)
        }, void 0, false)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 328,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 224,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2RhdGVzLmpzIiwid2VicGFjazovL19OX0UvLi9tb2RlbHMvQXBwbGljYW50LmpzIiwid2VicGFjazovL19OX0UvLi9tb2RlbHMvQXBwbGljYXRpb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL21vZGVscy9CYXNlRmx1eC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXhwZXJpbWVudGF0aW9ucy9hcmRlbm5lcy1kZW1vL2luZGV4LmpzIl0sIm5hbWVzIjpbInN0cmluZ1RvRGF0ZSIsImRhdGVTdHIiLCJzcGxpdCIsImRheSIsIm1vbnRoIiwieWVhciIsIkRhdGUiLCJhcHBsaWNhdGlvblN0cmluZ1RvRGF0ZSIsImFwcGxpY2F0aW9uRGF0ZVRvU3RyaW5nIiwiZGF0ZSIsInkiLCJnZXRGdWxsWWVhciIsIm0iLCJnZXRNb250aCIsImQiLCJnZXREYXRlIiwiZGF0ZVllc3RlcmRheSIsInNldERhdGUiLCJ5ZXN0ZXJkYXlBcHBsaWNhdGlvbkRhdGUiLCJnZXREYXRlVGltZVN0cmluZyIsImgiLCJnZXRIb3VycyIsIm1pIiwiZ2V0TWludXRlcyIsInMiLCJnZXRTZWNvbmRzIiwiZ2V0RnJlbmNoRm9ybWF0RGF0ZVN0cmluZyIsIkFwcGxpY2FudCIsImRvbSIsInJzYUFwcGxpY2F0aW9uTnVtYmVyIiwic29jaWFsU2VjdXJpdHlOdW1iZXIiLCJsYXN0TmFtZSIsImZpcnN0TmFtZSIsInJvbGUiLCJjb250YWN0SW5mb3MiLCJwaG9uZU51bWJlciIsImVtYWlsQWRkcmVzcyIsInRvcEVudHJhbnQiLCJhcHBsaWNhdGlvbiIsImVsaWdpYmxlQXNOZXciLCJ3aXRoRHJvaXRzRXREZXZvaXJzIiwiZWxpZ2libGVBc05ld0luRm95ZXIiLCJpbkZveWVyV2l0aERyb2l0c0V0RGV2b2lycyIsImluY2x1ZGVzIiwidG9wRm95ZXJEcm9pdHNFdERldm9pcnMiLCJ0b3BEcm9pdHNFdERldm9pcnMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImlubmVySFRNTCIsIkFwcGxpY2F0aW9uIiwicGFyZW50Tm9kZSIsInN0YXR1c0NvZGUiLCJzdXNwZW5zaW9uTW90aXZlIiwiam9pbiIsIkVMSUdJQkxFX1NVU1BFTlNJT05fTU9USVZFUyIsIndpdGhEcm9pdHNPdXZlcnRzRXRWZXJzYWJsZXMiLCJ3aXRoRHJvaXRzT3V2ZXJ0c1N1c3BlbmR1IiwiZW1haWxBdXRob3JpemF0aW9uIiwicGhvbmVBdXRob3JpemF0aW9uIiwiYXBwbGljYW50cyIsInNvbWUiLCJhcHBsaWNhbnQiLCJzb2Npb1Byb2Zlc3Npb25hbERhdGEiLCJtYXAiLCJhcHBsaWNhbnREb20iLCJCYXNlRmx1eCIsImZpbGVDb250ZW50IiwicGFyc2VyIiwiRE9NUGFyc2VyIiwicGFyc2VGcm9tU3RyaW5nIiwicmVkdWNlIiwiYXBwbGljYW50c09iamVjdCIsImlkIiwibGVuZ3RoIiwiYXBwbGljYXRpb25zIiwiZGVzYyIsImNyZWF0aW9uRGF0ZSIsImNyZWF0aW9uVGltZSIsImFjdGl2ZUVsZW1lbnQiLCJub2RlTmFtZSIsInJlZHVjZXIiLCJyZWR1Y2VyRmFjdG9yeSIsIkFyZGVubmVzIiwicm91dGVyIiwidXNlUm91dGVyIiwiaXNEZW1vIiwicGF0aG5hbWUiLCJkZXZNb2RlIiwib3JnYUlEIiwicHJvY2VzcyIsIlJEVl9TT0xJREFSSVRFU19VUkwiLCJ1c2VyVXJsIiwidXNlU3RhdGUiLCJkZXZGaWxlIiwic2V0RGV2RmlsZSIsInVzZVJlZHVjZXIiLCJpbml0UmVkdWNlciIsInJ1bnMiLCJkaXNwYXRjaFJ1bnMiLCJ1c2Vyc0RhdGEiLCJzZXRVc2Vyc0RhdGEiLCJ1c2VyU3RhdHVzQ2hlY2tlZCIsInNldFVzZXJTdGF0dXNDaGVja2VkIiwiZmlsZVNpemUiLCJzZXRGaWxlU2l6ZSIsImlzTG9nZ2VkIiwic2V0SXNMb2dnZWQiLCJ0b2tlbklkIiwidWlkIiwiY2xpZW50IiwidG9rZW4iLCJzZXRUb2tlbiIsInVzZUVmZmVjdCIsImhhbmRsZUZpbGUiLCJmb3JFYWNoIiwidXNlciIsInVzZXJJbmRleCIsImNoZWNrVXNlckludml0YXRpb25TdGF0dXMiLCJ3cml0ZUZpbGUiLCJvdXRXb3JrYm9vayIsIlhMU1giLCJib29rX25ldyIsIm91dFdvcmtzaGVldCIsImpzb25fdG9fc2hlZXQiLCJib29rX2FwcGVuZF9zaGVldCIsImdlbmVyYXRlSW52aXRhdGlvblVybCIsInVzZXJJZCIsImludml0YXRpb25VcmwiLCJhcHBGZXRjaCIsInJlc3VsdCIsIm5ld1VzZXJzRGF0YSIsImludml0YXRpb25fdXJsIiwiaW52aXRhdGlvbl90b2tlbiIsImdldFVzZXIiLCJnZXRVc2VyVXJsIiwiaW52aXRhdGlvbl9jcmVhdGVkX2F0IiwiaW52aXRhdGlvbl9kYXRlIiwic3Vic3RyaW5nIiwiaW52aXRhdGlvbl9hY2NlcHRlZF9hdCIsImluc2NyaXB0aW9uX2RhdGUiLCJpbnZhbGlkT3JUYWtlbk1haWwiLCJ1c2VyRGF0YSIsImZpcnN0X25hbWUiLCJ0b1VwcGVyQ2FzZSIsImxhc3RfbmFtZSIsImJpcnRoX2RhdGUiLCJhZGRyZXNzIiwiYWxlcnQiLCJjcmVhdGVVc2VyIiwid2l0aEVtYWlsIiwicmVzcG9uc2libGVfaWQiLCJwaG9uZV9udW1iZXIiLCJyZXBsYWNlIiwiY2Fpc3NlX2FmZmlsaWF0aW9uIiwiYWZmaWxpYXRpb25fbnVtYmVyIiwib3JnYW5pc2F0aW9uX2lkcyIsImVtYWlsIiwiSlNPTiIsInN0cmluZ2lmeSIsImVycm9ycyIsImVycm9yIiwiYmFzZSIsImhhbmRsZUxvZ2luIiwiZmlsZSIsInNpemUiLCJzdGFydF90aW1lIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwiZXZlbnQiLCJmaWxlRGF0YSIsIlVpbnQ4QXJyYXkiLCJ0YXJnZXQiLCJ4bHMiLCJ0eXBlIiwiY2VsbERhdGVzIiwiZGF0ZU5GIiwid29ya3NoZWV0IiwiU2hlZXRzIiwiU2hlZXROYW1lcyIsImpzb25EYXRhIiwic2hlZXRfdG9fanNvbiIsImJsYW5rcm93cyIsInJhdyIsImRlZnZhbCIsIk9iamVjdCIsImtleXMiLCJyZXMiLCJrZXkiLCJpdGVtIiwidGltZXN0YW1wIiwidG9JU09TdHJpbmciLCJzbGljZSIsImR1cmF0aW9uIiwiZmlsZW5hbWUiLCJuYW1lIiwiZmlsZUxpbmVzIiwicmVhZEFzQXJyYXlCdWZmZXIiLCJzdHlsZXMiLCJjb250YWluZXIiLCJtYWluIiwidGl0bGUiLCJjcmVhdGUiLCJzdWJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicmV2ZXJzZSIsImluZGV4IiwiY2VudGVyIiwiYnV0dG9uIiwidGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFBQyxPQUFPLEVBQUk7QUFBQSx1QkFDSEEsT0FBTyxDQUFDQyxLQUFSLENBQWMsR0FBZCxDQURHO0FBQUE7QUFBQSxNQUN2QkMsR0FEdUI7QUFBQSxNQUNsQkMsS0FEa0I7QUFBQSxNQUNYQyxJQURXOztBQUU5QixTQUFPLElBQUlDLElBQUosQ0FBU0QsSUFBVCxFQUFlRCxLQUFLLEdBQUcsQ0FBdkIsRUFBMEJELEdBQTFCLENBQVA7QUFDRCxDQUhEOztBQUtBLElBQU1JLHVCQUF1QixHQUFHLFNBQTFCQSx1QkFBMEIsQ0FBQU4sT0FBTyxFQUFJO0FBQUEsd0JBQ2RBLE9BQU8sQ0FBQ0MsS0FBUixDQUFjLEdBQWQsQ0FEYztBQUFBO0FBQUEsTUFDbENHLElBRGtDO0FBQUEsTUFDNUJELEtBRDRCO0FBQUEsTUFDckJELEdBRHFCOztBQUV6QyxTQUFPLElBQUlHLElBQUosQ0FBU0QsSUFBVCxFQUFlRCxLQUFLLEdBQUcsQ0FBdkIsRUFBMEJELEdBQTFCLENBQVA7QUFDRCxDQUhEOztBQUtBLElBQU1LLHVCQUF1QixHQUFHLFNBQTFCQSx1QkFBMEIsQ0FBQUMsSUFBSSxFQUFJO0FBQ3RDLE1BQUlDLENBQUMsR0FBR0QsSUFBSSxDQUFDRSxXQUFMLEVBQVI7QUFDQSxNQUFJQyxDQUFDLEdBQUdILElBQUksQ0FBQ0ksUUFBTCxL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VXVCakksUTtVQUNQRSxxRDs7O0tBRE9GLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZXhwZXJpbWVudGF0aW9ucy9hcmRlbm5lcy1kZW1vLjRhMzVhMGQzYjk2NGVjMTkwZTMwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzdHJpbmdUb0RhdGUgPSBkYXRlU3RyID0+IHtcbiAgY29uc3QgW2RheSwgbW9udGgsIHllYXJdID0gZGF0ZVN0ci5zcGxpdChcIi9cIik7XG4gIHJldHVybiBuZXcgRGF0ZSh5ZWFyLCBtb250aCAtIDEsIGRheSk7XG59O1xuXG5jb25zdCBhcHBsaWNhdGlvblN0cmluZ1RvRGF0ZSA9IGRhdGVTdHIgPT4ge1xuICBjb25zdCBbeWVhciwgbW9udGgsIGRheV0gPSBkYXRlU3RyLnNwbGl0KFwiLVwiKTtcbiAgcmV0dXJuIG5ldyBEYXRlKHllYXIsIG1vbnRoIC0gMSwgZGF5KTtcbn07XG5cbmNvbnN0IGFwcGxpY2F0aW9uRGF0ZVRvU3RyaW5nID0gZGF0ZSA9PiB7XG4gIGxldCB5ID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICBsZXQgbSA9IGRhdGUuZ2V0TW9udGgoKSArIDE7XG4gIGxldCBkID0gZGF0ZS5nZXREYXRlKCk7XG4gIHJldHVybiB5ICsgXCItXCIgKyAobSA8IDEwID8gYDAke219YCA6IG0pICsgXCItXCIgKyAoZCA8IDEwID8gYDAke2R9YCA6IGQpO1xufTtcblxuY29uc3QgZGF0ZVllc3RlcmRheSA9IGRhdGUgPT4ge1xuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgLSAxKTtcbiAgcmV0dXJuIGRhdGU7XG59O1xuXG5jb25zdCB5ZXN0ZXJkYXlBcHBsaWNhdGlvbkRhdGUgPSBkYXRlU3RyID0+IHtcbiAgcmV0dXJuIGFwcGxpY2F0aW9uRGF0ZVRvU3RyaW5nKGRhdGVZZXN0ZXJkYXkoYXBwbGljYXRpb25TdHJpbmdUb0RhdGUoZGF0ZVN0cikpKTtcbn07XG5cbmZ1bmN0aW9uIGdldERhdGVUaW1lU3RyaW5nKGRhdGUgPSBuZXcgRGF0ZSgpKSB7XG4gIGxldCB5ID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAvLyBKYXZhU2NyaXB0IG1vbnRocyBhcmUgMC1iYXNlZC5cbiAgbGV0IG0gPSBkYXRlLmdldE1vbnRoKCkgKyAxO1xuICBsZXQgZCA9IGRhdGUuZ2V0RGF0ZSgpO1xuICBsZXQgaCA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgbGV0IG1pID0gZGF0ZS5nZXRNaW51dGVzKCk7XG4gIGxldCBzID0gZGF0ZS5nZXRTZWNvbmRzKCk7XG4gIHJldHVybiAoXG4gICAgeSArXG4gICAgXCJfXCIgK1xuICAgIChtIDwgMTAgPyBgMCR7bX1gIDogbSkgK1xuICAgIFwiX1wiICtcbiAgICAoZCA8IDEwID8gYDAke2R9YCA6IGQpICtcbiAgICBcIl9cIiArXG4gICAgKGggPCAxMCA/IGAwJHtofWAgOiBoKSArXG4gICAgXCJfXCIgK1xuICAgIChtaSA8IDEwID8gYDAke21pfWAgOiBtaSkgK1xuICAgIFwiX1wiICtcbiAgICAocyA8IDEwID8gYDAke3N9YCA6IHMpXG4gICk7XG59XG5cbmZ1bmN0aW9uIGdldEZyZW5jaEZvcm1hdERhdGVTdHJpbmcoZGF0ZSkge1xuICBsZXQgeSA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgLy8gSmF2YVNjcmlwdCBtb250aHMgYXJlIDAtYmFzZWQuXG4gIGxldCBtID0gZGF0ZS5nZXRNb250aCgpICsgMTtcbiAgbGV0IGQgPSBkYXRlLmdldERhdGUoKTtcbiAgcmV0dXJuIGQgKyBcIi9cIiArIG0gKyBcIi9cIiArIHk7XG59XG5cbmV4cG9ydCB7XG4gIGdldEZyZW5jaEZvcm1hdERhdGVTdHJpbmcsXG4gIHN0cmluZ1RvRGF0ZSxcbiAgZ2V0RGF0ZVRpbWVTdHJpbmcsXG4gIHllc3RlcmRheUFwcGxpY2F0aW9uRGF0ZSxcbiAgYXBwbGljYXRpb25TdHJpbmdUb0RhdGUsXG4gIGFwcGxpY2F0aW9uRGF0ZVRvU3RyaW5nLFxufTtcbiIsImltcG9ydCBBcHBsaWNhdGlvbiBmcm9tIFwiLi9BcHBsaWNhdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHBsaWNhbnQge1xuICBjb25zdHJ1Y3Rvcihkb20pIHtcbiAgICB0aGlzLmRvbSA9IGRvbTtcbiAgfVxuXG4gIGdldCBsYXN0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kb20uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJOT01cIilbMF0/LmlubmVySFRNTDtcbiAgfVxuXG4gIGdldCBmaXJzdE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiUFJFTk9NXCIpWzBdPy5pbm5lckhUTUw7XG4gIH1cblxuICBnZXQgcm9sZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kb20uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJST0xFUEVSU1wiKVswXT8uaW5uZXJIVE1MO1xuICB9XG5cbiAgZ2V0IHRvcEVudHJhbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiVE9QUEVSU0VOVERST0RFVk9SU0FcIilbMF0/LmlubmVySFRNTDtcbiAgfVxuXG4gIGdldCB0b3BEcm9pdHNFdERldm9pcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiVE9QUEVSU0RST0RFVk9SU0FcIilbMF0/LmlubmVySFRNTDtcbiAgfVxuXG4gIGdldCBzb2Npb1Byb2Zlc3Npb25hbERhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiRG9ubmVlc1NvY2lvUHJvZmVzc2lvbm5lbGxlc1wiKVswXT8uaW5uZXJIVE1MO1xuICB9XG5cbiAgZ2V0IG5hdGlvbmFsaXR5KCkge1xuICAgIHJldHVybiB0aGlzLmRvbS5nZXRFbGVtZW50c0J5VGFnTmFtZShcIk5BVElcIilbMF0/LmlubmVySFRNTDtcbiAgfVxuXG4gIGdldCBhY3Rpdml0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5kb20uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJBQ1RcIilbMF0/LmlubmVySFRNTDtcbiAgfVxuXG4gIGdldCBzb2NpYWxTZWN1cml0eU51bWJlcigpIHtcbiAgICByZXR1cm4gdGhpcy5kb20uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJOSVJcIilbMF0/LmlubmVySFRNTDtcbiAgfVxuXG4gIGdldCBhcHBsaWNhdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IEFwcGxpY2F0aW9uKHRoaXMuZG9tLnBhcmVudE5vZGUpO1xuICB9XG5cbiAgZ2V0IHJzYUFwcGxpY2F0aW9uTnVtYmVyKCkge1xuICAgIHJldHVybiB0aGlzLmFwcGxpY2F0aW9uLnJzYUFwcGxpY2F0aW9uTnVtYmVyO1xuICB9XG5cbiAgZ2V0IGVtYWlsQWRkcmVzcygpIHtcbiAgICByZXR1cm4gdGhpcy5hcHBsaWNhdGlvbi5lbWFpbEFkZHJlc3M7XG4gIH1cblxuICBnZXQgYXBwbGljYXRpb25TdGF0dXNDb2RlKCkge1xuICAgIHJldHVybiB0aGlzLmFwcGxpY2F0aW9uLnN0YXR1c0NvZGU7XG4gIH1cblxuICBnZXQgYXBwbGljYXRpb25TdXNwZW5zaW9uTW90aXZlKCkge1xuICAgIHJldHVybiB0aGlzLmFwcGxpY2F0aW9uLnN1c3BlbnNpb25Nb3RpdmU7XG4gIH1cblxuICBnZXQgcGhvbmVOdW1iZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXBwbGljYXRpb24ucGhvbmVOdW1iZXI7XG4gIH1cblxuICBnZXQgdG9wRm95ZXJEcm9pdHNFdERldm9pcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXBwbGljYXRpb24udG9wRm95ZXJEcm9pdHNFdERldm9pcnM7XG4gIH1cblxuICAvLyBzdHJpbmcgdXNlZCB0byBpZGVudGlmeSBhcHBsaWNhbnRzXG4gIGdldCBpZCgpIHtcbiAgICByZXR1cm4gW1xuICAgICAgdGhpcy5yc2FBcHBsaWNhdGlvbk51bWJlcixcbiAgICAgIHRoaXMubGFzdE5hbWUuc3BsaXQoXCIgXCIpLmpvaW4oXCItXCIpLFxuICAgICAgdGhpcy5maXJzdE5hbWUuc3BsaXQoXCIgXCIpLmpvaW4oXCItXCIpLFxuICAgICAgdGhpcy5yb2xlLFxuICAgIF0uam9pbihcIi1cIik7XG4gIH1cblxuICBwZXJzb25hbERhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJzYUFwcGxpY2F0aW9uTnVtYmVyOiB0aGlzLnJzYUFwcGxpY2F0aW9uTnVtYmVyLFxuICAgICAgc29jaWFsU2VjdXJpdHlOdW1iZXI6IHRoaXMuc29jaWFsU2VjdXJpdHlOdW1iZXIsXG4gICAgICBsYXN0TmFtZTogdGhpcy5sYXN0TmFtZSxcbiAgICAgIGZpcnN0TmFtZTogdGhpcy5maXJzdE5hbWUsXG4gICAgICByb2xlOiB0aGlzLnJvbGUsXG4gICAgICAuLi50aGlzLmNvbnRhY3RJbmZvcygpLFxuICAgIH07XG4gIH1cblxuICBjb250YWN0SW5mb3MoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLih0aGlzLnBob25lTnVtYmVyICYmIHsgcGhvbmVOdW1iZXI6IHRoaXMucGhvbmVOdW1iZXIgfSksXG4gICAgICAuLi4odGhpcy5lbWFpbEFkZHJlc3MgJiYgeyBlbWFpbEFkZHJlc3M6IHRoaXMuZW1haWxBZGRyZXNzIH0pLFxuICAgIH07XG4gIH1cblxuICBpc1RvcEVudHJhbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9wRW50cmFudCA9PT0gXCIxXCI7XG4gIH1cblxuICBlbGlnaWJsZUFzTmV3KCkge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmFwcGxpY2F0aW9uLmVsaWdpYmxlQXNOZXcoKSAmJlxuICAgICAgKHRoaXMud2l0aERyb2l0c0V0RGV2b2lycygpIHx8IHRoaXMuZWxpZ2libGVBc05ld0luRm95ZXIoKSlcbiAgICApO1xuICB9XG5cbiAgZWxpZ2libGVBc05ld0luRm95ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5Gb3llcldpdGhEcm9pdHNFdERldm9pcnMoKSAmJiBbXCJFTkZcIiwgXCJBVVRcIl0uaW5jbHVkZXModGhpcy5yb2xlKTtcbiAgfVxuXG4gIGluRm95ZXJXaXRoRHJvaXRzRXREZXZvaXJzKCkge1xuICAgIHJldHVybiB0aGlzLnRvcEZveWVyRHJvaXRzRXREZXZvaXJzID09PSBcIjFcIjtcbiAgfVxuXG4gIHdpdGhEcm9pdHNFdERldm9pcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9wRHJvaXRzRXREZXZvaXJzID09PSBcIjFcIjtcbiAgfVxufVxuIiwiaW1wb3J0IEFwcGxpY2FudCBmcm9tIFwiLi9BcHBsaWNhbnRcIjtcblxuY29uc3QgRUxJR0lCTEVfU1VTUEVOU0lPTl9NT1RJVkVTID0gW1wiMDFcIiwgXCIwNVwiLCBcIjA2XCIsIFwiMzVcIiwgXCIzNlwiXTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwbGljYXRpb24ge1xuICBjb25zdHJ1Y3Rvcihkb20pIHtcbiAgICB0aGlzLmRvbSA9IGRvbTtcbiAgfVxuXG4gIGdldCBlbWFpbEFkZHJlc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiQURSRUxFQ1wiKVswXT8uaW5uZXJIVE1MO1xuICB9XG5cbiAgZ2V0IHBob25lTnVtYmVyKCkge1xuICAgIHJldHVybiB0aGlzLmRvbS5nZXRFbGVtZW50c0J5VGFnTmFtZShcIk5VTVRFTFwiKVswXT8uaW5uZXJIVE1MO1xuICB9XG5cbiAgZ2V0IHJzYUFwcGxpY2F0aW9uTnVtYmVyKCkge1xuICAgIHJldHVybiB0aGlzLmRvbS5nZXRFbGVtZW50c0J5VGFnTmFtZShcIk5VTURFTVJTQVwiKVswXT8uaW5uZXJIVE1MO1xuICB9XG5cbiAgZ2V0IHBob25lQXV0aG9yaXphdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5kb20uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJBVVRPUlVUSVRFTFwiKVswXT8uaW5uZXJIVE1MO1xuICB9XG5cbiAgZ2V0IGVtYWlsQXV0aG9yaXphdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5kb20uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJBVVRPUlVUSUFEUkVMRUNcIilbMF0/LmlubmVySFRNTDtcbiAgfVxuXG4gIGdldCBkYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmRvbS5nZXRFbGVtZW50c0J5VGFnTmFtZShcIkRUREVNUlNBXCIpWzBdPy5pbm5lckhUTUw7XG4gIH1cblxuICBnZXQgc3RhdHVzQ29kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kb20uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJFVEFURE9TUlNBXCIpWzBdPy5pbm5lckhUTUw7XG4gIH1cblxuICBnZXQgc3VzcGVuc2lvbk1vdGl2ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kb20uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJNT1RJU1VTVkVSU1JTQVwiKVswXT8uaW5uZXJIVE1MO1xuICB9XG5cbiAgZ2V0IGFwcGxpY2FudHMoKSB7XG4gICAgcmV0dXJuIFsuLi50aGlzLmRvbS5nZXRFbGVtZW50c0J5VGFnTmFtZShcIlBlcnNvbm5lXCIpXS5tYXAoYXBwbGljYW50RG9tID0+IHtcbiAgICAgIHJldHVybiBuZXcgQXBwbGljYW50KGFwcGxpY2FudERvbSk7XG4gICAgfSk7XG4gIH1cblxuICBnZXQgdG9wRm95ZXJEcm9pdHNFdERldm9pcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiVE9QRk9ZRFJPREVWT1JTQVwiKVswXT8uaW5uZXJIVE1MO1xuICB9XG5cbiAgZWxpZ2libGVBc05ldygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy53aXRoRHJvaXRzT3V2ZXJ0c0V0VmVyc2FibGVzKCkgfHxcbiAgICAgICh0aGlzLndpdGhEcm9pdHNPdXZlcnRzU3VzcGVuZHUoKSAmJlxuICAgICAgICBFTElHSUJMRV9TVVNQRU5TSU9OX01PVElWRVMuaW5jbHVkZXModGhpcy5zdXNwZW5zaW9uTW90aXZlKSlcbiAgICApO1xuICB9XG5cbiAgd2l0aFVzYWJsZUVtYWlsKCkge1xuICAgIHJldHVybiB0aGlzLmVtYWlsQWRkcmVzcyAmJiB0aGlzLmVtYWlsQXV0aG9yaXphdGlvbiA9PT0gXCJBXCI7XG4gIH1cblxuICB3aXRoRm9yYmlkZGVuRW1haWxVc2FnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5lbWFpbEFkZHJlc3MgJiYgdGhpcy5lbWFpbEF1dGhvcml6YXRpb24gPT09IFwiUlwiO1xuICB9XG5cbiAgd2l0aG91dEVtYWlsVXNhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZW1haWxBZGRyZXNzICYmIHRoaXMuZW1haWxBdXRob3JpemF0aW9uID09PSBcIklcIjtcbiAgfVxuXG4gIHdpdGhVc2FibGVQaG9uZSgpIHtcbiAgICByZXR1cm4gdGhpcy5waG9uZU51bWJlciAmJiB0aGlzLnBob25lQXV0aG9yaXphdGlvbiA9PT0gXCJBXCI7XG4gIH1cblxuICB3aXRoRm9yYmlkZGVuUGhvbmVVc2FnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5waG9uZU51bWJlciAmJiB0aGlzLnBob25lQXV0aG9yaXphdGlvbiA9PT0gXCJSXCI7XG4gIH1cblxuICB3aXRob3V0UGhvbmVVc2FnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5waG9uZU51bWJlciAmJiB0aGlzLnBob25lQXV0aG9yaXphdGlvbiA9PT0gXCJJXCI7XG4gIH1cblxuICB3aXRoRHJvaXRzT3V2ZXJ0c0V0VmVyc2FibGVzKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXR1c0NvZGUgPT09IFwiMlwiO1xuICB9XG5cbiAgd2l0aERyb2l0c091dmVydHNTdXNwZW5kdSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0dXNDb2RlID09PSBcIjRcIjtcbiAgfVxuXG4gIHdpdGhEU1AoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXBwbGljYW50cy5zb21lKGFwcGxpY2FudCA9PiBhcHBsaWNhbnQuc29jaW9Qcm9mZXNzaW9uYWxEYXRhKTtcbiAgfVxufVxuIiwiaW1wb3J0IEFwcGxpY2FudCBmcm9tIFwiLi9BcHBsaWNhbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZUZsdXgge1xuICBjb25zdHJ1Y3RvcihmaWxlQ29udGVudCkge1xuICAgIGNvbnN0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcbiAgICB0aGlzLmRvbSA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoZmlsZUNvbnRlbnQsIFwiYXBwbGljYXRpb24veG1sXCIpO1xuICB9XG5cbiAgZ2V0IGRlc2MoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiSWRlbnRpZmljYXRpb25GbHV4XCIpWzBdO1xuICB9XG5cbiAgZ2V0IGFwcGxpY2FudHMoKSB7XG4gICAgcmV0dXJuIFsuLi50aGlzLmRvbS5nZXRFbGVtZW50c0J5VGFnTmFtZShcIlBlcnNvbm5lXCIpXS5tYXAoYXBwbGljYW50RG9tID0+IHtcbiAgICAgIHJldHVybiBuZXcgQXBwbGljYW50KGFwcGxpY2FudERvbSk7XG4gICAgfSk7XG4gIH1cblxuICAvLyB7IDEyMzEyMy1EdXBvbnQtSmVhbi1ERU06IHsgZmlyc3ROYW1lOiAuLi4gfSwgLi4uIH1cbiAgZ2V0IGFwcGxpY2FudHNPYmplY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXBwbGljYW50cy5yZWR1Y2UoKGFwcGxpY2FudHNPYmplY3QsIGFwcGxpY2FudCkgPT4ge1xuICAgICAgYXBwbGljYW50c09iamVjdFthcHBsaWNhbnQuaWRdID0gYXBwbGljYW50O1xuICAgICAgcmV0dXJuIGFwcGxpY2FudHNPYmplY3Q7XG4gICAgfSwge30pO1xuICB9XG4gIGdldCBhcHBsaWNhbnRzQ291bnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXBwbGljYW50cy5sZW5ndGg7XG4gIH1cblxuICBnZXQgYXBwbGljYXRpb25zQ291bnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXBwbGljYXRpb25zLmxlbmd0aDtcbiAgfVxuXG4gIGdldCBmcmVxdWVuY3koKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVzYy5nZXRFbGVtZW50c0J5VGFnTmFtZShcIlRZUEVGTFVYXCIpWzBdLmlubmVySFRNTDtcbiAgfVxuXG4gIGdldCBvcmlnaW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVzYy5nZXRFbGVtZW50c0J5VGFnTmFtZShcIk5BVEZMVVhcIilbMF0uaW5uZXJIVE1MO1xuICB9XG5cbiAgZ2V0IGZpbGVEYXRldGltZSgpIHtcbiAgICByZXR1cm4gYCR7dGhpcy5jcmVhdGlvbkRhdGV9LSR7dGhpcy5jcmVhdGlvblRpbWV9YDtcbiAgfVxuXG4gIGdldCBjcmVhdGlvbkRhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVzYy5nZXRFbGVtZW50c0J5VGFnTmFtZShcIkRUQ1JFQUZMVVhcIilbMF0uaW5uZXJIVE1MO1xuICB9XG5cbiAgZ2V0IGNyZWF0aW9uVGltZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kZXNjLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiSEVVQ1JFQUZMVVhcIilbMF0uaW5uZXJIVE1MO1xuICB9XG5cbiAgZ2V0IHBhcnNlRXJyb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tLmFjdGl2ZUVsZW1lbnQgJiYgdGhpcy5kb20uYWN0aXZlRWxlbWVudC5ub2RlTmFtZSA9PSBcInBhcnNlcmVycm9yXCI7XG4gIH1cbn1cbiIsImltcG9ydCB7IEZyYWdtZW50LCB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWR1Y2VyIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCAqIGFzIFhMU1ggZnJvbSBcInhsc3hcIjtcblxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9sYXlvdXRcIjtcbmltcG9ydCBGaWxlSGFuZGxlciBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9maWxlSGFuZGxlclwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9mb290ZXJcIjtcbmltcG9ydCBMb2dpbkZvcm0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvbG9naW5Gb3JtXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi8uLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5cbmltcG9ydCB7IGFwcEZldGNoIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9hcHBGZXRjaFwiO1xuaW1wb3J0IHsgaW5pdFJlZHVjZXIsIHJlZHVjZXJGYWN0b3J5IH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9yZWR1Y2VyRmFjdG9yeVwiO1xuaW1wb3J0IHsgYXBwbGljYXRpb25EYXRlVG9TdHJpbmcsIGdldERhdGVUaW1lU3RyaW5nLCBnZXRGcmVuY2hGb3JtYXREYXRlU3RyaW5nLCBzdHJpbmdUb0RhdGUgfSBmcm9tIFwiLi4vLi4vLi4vbGliL2RhdGVzXCI7XG5cbmNvbnN0IHJlZHVjZXIgPSByZWR1Y2VyRmFjdG9yeShcIkV4cMOpcmltZW50YXRpb24gQXJkZW5uZXMgLSBDTkFGIC0gQsOpbsOpZmljaWFpcmVcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFyZGVubmVzKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgaXNEZW1vID0gcm91dGVyLnBhdGhuYW1lLmluY2x1ZGVzKFwiZGVtb1wiKTtcbiAgY29uc3QgZGV2TW9kZSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09IFwiZGV2ZWxvcG1lbnRcIjtcbiAgY29uc3Qgb3JnYUlEID0gaXNEZW1vXG4gICAgPyBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19PUkdBTklTQVRJT05fSURfREVNT1xuICAgIDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfT1JHQU5JU0FUSU9OX0lEX1BST0Q7XG5cbiAgY29uc3QgUkRWX1NPTElEQVJJVEVTX1VSTCA9IGlzRGVtb1xuICAgID8gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUkRWX1NPTElEQVJJVEVTX0RFTU9fVVJMXG4gICAgOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19SRFZfU09MSURBUklURVNfUFJPRF9VUkw7XG4gIGNvbnN0IHVzZXJVcmwgPSBSRFZfU09MSURBUklURVNfVVJMICsgXCIvYXBpL3YxL3VzZXJzXCI7XG5cbiAgY29uc3QgW2RldkZpbGUsIHNldERldkZpbGVdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtydW5zLCBkaXNwYXRjaFJ1bnNdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBbXSwgaW5pdFJlZHVjZXIpO1xuICBjb25zdCBbdXNlcnNEYXRhLCBzZXRVc2Vyc0RhdGFdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFt1c2VyU3RhdHVzQ2hlY2tlZCwgc2V0VXNlclN0YXR1c0NoZWNrZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZmlsZVNpemUsIHNldEZpbGVTaXplXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbaXNMb2dnZWQsIHNldElzTG9nZ2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Rva2VuLCBzZXRUb2tlbl0gPSB1c2VTdGF0ZSh7XG4gICAgdG9rZW5JZDogXCJcIixcbiAgICB1aWQ6IFwiXCIsXG4gICAgY2xpZW50OiBcIlwiLFxuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkZXZGaWxlKSB7XG4gICAgICBoYW5kbGVGaWxlKGRldkZpbGUpO1xuICAgIH1cbiAgfSwgW2RldkZpbGVdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh1c2Vyc0RhdGEgJiYgdXNlclN0YXR1c0NoZWNrZWQgPT09IGZhbHNlKSB7XG4gICAgICB1c2Vyc0RhdGEuZm9yRWFjaCgodXNlciwgdXNlckluZGV4KSA9PiB7XG4gICAgICAgIGlmICh1c2VyW1wiSUQgUkRWXCJdICE9IFwiXCIpIHtcbiAgICAgICAgICBjaGVja1VzZXJJbnZpdGF0aW9uU3RhdHVzKHVzZXJbXCJJRCBSRFZcIl0sIHVzZXJJbmRleCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgc2V0VXNlclN0YXR1c0NoZWNrZWQodHJ1ZSk7XG4gICAgfVxuICB9LCBbdXNlcnNEYXRhXSk7XG5cbiAgY29uc3Qgd3JpdGVGaWxlID0gKCkgPT4ge1xuICAgIGNvbnN0IG91dFdvcmtib29rID0gWExTWC51dGlscy5ib29rX25ldygpO1xuICAgIGNvbnN0IG91dFdvcmtzaGVldCA9IFhMU1gudXRpbHMuanNvbl90b19zaGVldCh1c2Vyc0RhdGEpO1xuICAgIFhMU1gudXRpbHMuYm9va19hcHBlbmRfc2hlZXQob3V0V29ya2Jvb2ssIG91dFdvcmtzaGVldCwgXCJESVZFUkdFTkNFU1wiKTtcbiAgICAvLyBYTFNYLnV0aWxzLmJvb2tfYXBwZW5kX3NoZWV0KG91dFdvcmtib29rLCB4bHMuU2hlZXRzW3hscy5TaGVldE5hbWVzWzFdXSwgXCJHUkFQSElRVUVcIik7XG4gICAgLy8gWExTWC51dGlscy5ib29rX2FwcGVuZF9zaGVldChvdXRXb3JrYm9vaywgeGxzLlNoZWV0c1t4bHMuU2hlZXROYW1lc1syXV0sIFwiU2VsZWN0aW9uIENPQVwiKTtcbiAgICBYTFNYLndyaXRlRmlsZShvdXRXb3JrYm9vaywgYGFyZGVubmVzX3JzYV8ke2dldERhdGVUaW1lU3RyaW5nKG5ldyBEYXRlKCkpfS54bHN4YCk7XG4gIH07XG5cbiAgYXN5bmMgZnVuY3Rpb24gZ2VuZXJhdGVJbnZpdGF0aW9uVXJsKHVzZXJJZCwgdXNlckluZGV4KSB7XG4gICAgY29uc3QgaW52aXRhdGlvblVybCA9IHVzZXJVcmwgKyBgLyR7dXNlcklkfS9pbnZpdGVgO1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGFwcEZldGNoKGludml0YXRpb25VcmwsIHRva2VuKTtcblxuICAgIGxldCBuZXdVc2Vyc0RhdGEgPSBbLi4udXNlcnNEYXRhXTtcbiAgICBpZiAocmVzdWx0Lmludml0YXRpb25fdXJsKSB7XG4gICAgICBuZXdVc2Vyc0RhdGFbdXNlckluZGV4XVtcIkxpZW4gZCdpbnZpdGF0aW9uXCJdID0gcmVzdWx0Lmludml0YXRpb25fdXJsO1xuICAgIH0gZWxzZSBpZiAocmVzdWx0Lmludml0YXRpb25fdG9rZW4pIHtcbiAgICAgIG5ld1VzZXJzRGF0YVt1c2VySW5kZXhdW1wiQ29kZSBkJ2ludml0YXRpb25cIl0gPSByZXN1bHQuaW52aXRhdGlvbl90b2tlbjtcbiAgICB9XG4gICAgbmV3VXNlcnNEYXRhW3VzZXJJbmRleF1bXCJEYXRlIGQnaW52aXRhdGlvblwiXSA9IGdldEZyZW5jaEZvcm1hdERhdGVTdHJpbmcobmV3IERhdGUoKSk7XG4gICAgc2V0VXNlcnNEYXRhKG5ld1VzZXJzRGF0YSk7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBnZXRVc2VyKHVzZXJJZCkge1xuICAgIGNvbnN0IGdldFVzZXJVcmwgPSB1c2VyVXJsICsgYC8ke3VzZXJJZH1gO1xuICAgIHJldHVybiBhd2FpdCBhcHBGZXRjaChnZXRVc2VyVXJsLCB0b2tlbik7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBjaGVja1VzZXJJbnZpdGF0aW9uU3RhdHVzKHVzZXJJZCwgdXNlckluZGV4KSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0VXNlcih1c2VySWQpO1xuXG4gICAgbGV0IG5ld1VzZXJzRGF0YSA9IFsuLi51c2Vyc0RhdGFdO1xuICAgIGlmIChyZXN1bHQudXNlci5pbnZpdGF0aW9uX2NyZWF0ZWRfYXQpIHtcbiAgICAgIGxldCBpbnZpdGF0aW9uX2RhdGUgPSByZXN1bHQudXNlci5pbnZpdGF0aW9uX2NyZWF0ZWRfYXQgLy8gRGF0ZSBhdSBmb3JtYXQgOiAyMDIxLTA0LTE1IDE0OjUzOjU2ICswMjAwXG4gICAgICAgIC5zdWJzdHJpbmcoMCwgMTApOyAvLyBSw6ljdXDDqXJlciBsZXMgMTAgcHJlbWllcnMgY2hpZmZyZXMgKGxhIGRhdGUpXG4gICAgICBpbnZpdGF0aW9uX2RhdGUgPSBuZXcgRGF0ZShpbnZpdGF0aW9uX2RhdGUpOyAvLyBDcsOpZXIgdW5lIGRhdGUgSlNcbiAgICAgIG5ld1VzZXJzRGF0YVt1c2VySW5kZXhdW1wiRGF0ZSBkJ2ludml0YXRpb25cIl0gPSBnZXRGcmVuY2hGb3JtYXREYXRlU3RyaW5nKGludml0YXRpb25fZGF0ZSk7XG4gICAgfVxuICAgIGlmIChyZXN1bHQudXNlci5pbnZpdGF0aW9uX2FjY2VwdGVkX2F0KSB7XG4gICAgICBsZXQgaW5zY3JpcHRpb25fZGF0ZSA9IHJlc3VsdC51c2VyLmludml0YXRpb25fYWNjZXB0ZWRfYXQgLy8gRGF0ZSBhdSBmb3JtYXQgOiAyMDIxLTA0LTE1IDE0OjUzOjU2ICswMjAwXG4gICAgICAgIC5zdWJzdHJpbmcoMCwgMTApOyAvLyBSw6ljdXDDqXJlciBsZXMgMTAgcHJlbWllcnMgY2hpZmZyZXMgKGxhIGRhdGUpXG4gICAgICBpbnNjcmlwdGlvbl9kYXRlID0gbmV3IERhdGUoaW5zY3JpcHRpb25fZGF0ZSk7IC8vIENyw6llciB1bmUgZGF0ZSBKU1xuICAgICAgbmV3VXNlcnNEYXRhW3VzZXJJbmRleF1bXCJEYXRlIGQnaW5zY3JpcHRpb25cIl0gPSBnZXRGcmVuY2hGb3JtYXREYXRlU3RyaW5nKGluc2NyaXB0aW9uX2RhdGUpO1xuICAgIH1cbiAgICBzZXRVc2Vyc0RhdGEobmV3VXNlcnNEYXRhKTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGludmFsaWRPclRha2VuTWFpbCh1c2VyRGF0YSwgdXNlckluZGV4LCB1c2VySWQgPSBudWxsKSB7XG4gICAgaWYgKHVzZXJJZCAhPSBudWxsKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRVc2VyKHVzZXJJZCk7XG5cbiAgICAgIC8vIFbDqXJpZmllIGQnYWJvcmQgc2kgbCd1dGlsaXNhdGV1ciBhdmVjIGxlIG3Dqm1lIGVtYWlsIGVzdCB1biBkb3VibG9uXG4gICAgICBpZiAoXG4gICAgICAgIHJlc3VsdCAmJlxuICAgICAgICByZXN1bHQudXNlci5maXJzdF9uYW1lLnRvVXBwZXJDYXNlKCkgPT09IHVzZXJEYXRhW1wiUFJFTk9NXCJdLnRvVXBwZXJDYXNlKCkgJiZcbiAgICAgICAgcmVzdWx0LnVzZXIubGFzdF9uYW1lLnRvVXBwZXJDYXNlKCkgPT09IHVzZXJEYXRhW1wiTk9NXCJdLnRvVXBwZXJDYXNlKCkgJiZcbiAgICAgICAgcmVzdWx0LnVzZXIuYmlydGhfZGF0ZSA9PT0gYXBwbGljYXRpb25EYXRlVG9TdHJpbmcoc3RyaW5nVG9EYXRlKHVzZXJEYXRhW1wiREFURSBERSBOQUlTU0FOQ0VcIl0pKSAmJlxuICAgICAgICByZXN1bHQudXNlci5hZGRyZXNzLnRvVXBwZXJDYXNlKCkgPT09XG4gICAgICAgICAgdXNlckRhdGFbXCJBRFJFU1NFXCJdLnRvVXBwZXJDYXNlKCkgK1xuICAgICAgICAgICAgXCIgLSBcIiArXG4gICAgICAgICAgICB1c2VyRGF0YVtcIkNPREUgUE9TVEFMXCJdLnRvVXBwZXJDYXNlKCkgK1xuICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgdXNlckRhdGFbXCJWSUxMRVwiXS50b1VwcGVyQ2FzZSgpXG4gICAgICApIHtcbiAgICAgICAgbGV0IG5ld1VzZXJzRGF0YSA9IFsuLi51c2Vyc0RhdGFdO1xuICAgICAgICBuZXdVc2Vyc0RhdGFbdXNlckluZGV4XVtcIklEIFJEVlwiXSA9IHVzZXJJZDtcbiAgICAgICAgc2V0VXNlcnNEYXRhKG5ld1VzZXJzRGF0YSk7XG4gICAgICAgIGNoZWNrVXNlckludml0YXRpb25TdGF0dXModXNlcklkLCB1c2VySW5kZXgpO1xuICAgICAgICBhbGVydChcIlVuIGNvbXB0ZSBhc3NvY2nDqSDDoCBjZXQgZW1haWwgZXhpc3RlIGTDqWrDoFwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNyZWF0ZVVzZXIodXNlckRhdGEsIHVzZXJJbmRleCwgZmFsc2UsIHVzZXJJZCk7IC8vIFNpIGNlIG4nZXN0IHBhcyB1biBkb3VibG9uLCBjcsOpZSB1biB1dGlsaXNhdGV1ciBlbiB0YW50IHF1ZSBcInByb2NoZVwiIGRlIGwndXRpbGlzYXRldXIgZXhpc3RhbnRcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY3JlYXRlVXNlcih1c2VyRGF0YSwgdXNlckluZGV4LCBmYWxzZSk7IC8vIGNyw6llIHVuIHV0aWxpc2F0ZXVyIHNhbnMgZW1haWxcbiAgICB9XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBjcmVhdGVVc2VyKHVzZXJEYXRhLCB1c2VySW5kZXgsIHdpdGhFbWFpbCA9IHRydWUsIHJlc3BvbnNpYmxlX2lkID0gbnVsbCkge1xuICAgIGNvbnN0IGFkZHJlc3MgPSB1c2VyRGF0YVtcIkFEUkVTU0VcIl0gKyBcIiAtIFwiICsgdXNlckRhdGFbXCJDT0RFIFBPU1RBTFwiXSArIFwiIFwiICsgdXNlckRhdGFbXCJWSUxMRVwiXTtcblxuICAgIGxldCB1c2VyID0ge1xuICAgICAgZmlyc3RfbmFtZTogdXNlckRhdGFbXCJQUkVOT01cIl0sXG4gICAgICBsYXN0X25hbWU6IHVzZXJEYXRhW1wiTk9NXCJdLFxuICAgICAgcGhvbmVfbnVtYmVyOiB1c2VyRGF0YVtcIlRFTEVQSE9ORVwiXS5yZXBsYWNlKC9cXHMrL2csIFwiXCIpLFxuICAgICAgYmlydGhfZGF0ZTogc3RyaW5nVG9EYXRlKHVzZXJEYXRhW1wiREFURSBERSBOQUlTU0FOQ0VcIl0pLFxuICAgICAgYWRkcmVzczogYWRkcmVzcyxcbiAgICAgIGNhaXNzZV9hZmZpbGlhdGlvbjogXCJjYWZcIixcbiAgICAgIGFmZmlsaWF0aW9uX251bWJlcjogdXNlckRhdGFbXCJOwrBDQUZcIl0sXG4gICAgICBvcmdhbmlzYXRpb25faWRzOiBbb3JnYUlEXSxcbiAgICAgIHJlc3BvbnNpYmxlX2lkOiByZXNwb25zaWJsZV9pZFxuICAgIH07XG4gICAgaWYgKHdpdGhFbWFpbCA9PT0gdHJ1ZSkgdXNlci5lbWFpbCA9IHVzZXJEYXRhW1wiTUFJTFwiXTtcblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGFwcEZldGNoKHVzZXJVcmwsIHRva2VuLCBcIlBPU1RcIiwgSlNPTi5zdHJpbmdpZnkodXNlcikpO1xuXG4gICAgbGV0IG5ld1VzZXJzRGF0YSA9IFsuLi51c2Vyc0RhdGFdO1xuICAgIGlmIChyZXN1bHQudXNlcikge1xuICAgICAgbmV3VXNlcnNEYXRhW3VzZXJJbmRleF1bXCJJRCBSRFZcIl0gPSByZXN1bHQudXNlci5pZDtcbiAgICAgIHNldFVzZXJzRGF0YShuZXdVc2Vyc0RhdGEpO1xuICAgICAgZ2VuZXJhdGVJbnZpdGF0aW9uVXJsKHJlc3VsdC51c2VyLmlkLCB1c2VySW5kZXgpO1xuICAgIH0gZWxzZSBpZiAocmVzdWx0LmVycm9ycyAmJiByZXN1bHQuZXJyb3JzLmVtYWlsICYmIHJlc3VsdC5lcnJvcnMuZW1haWxbMF0uZXJyb3IgPT09IFwidGFrZW5cIikge1xuICAgICAgaW52YWxpZE9yVGFrZW5NYWlsKHVzZXJEYXRhLCB1c2VySW5kZXgsIHJlc3VsdC5lcnJvcnMuZW1haWxbMF0uaWQpO1xuICAgIH0gZWxzZSBpZiAocmVzdWx0LmVycm9ycyAmJiByZXN1bHQuZXJyb3JzLmVtYWlsICYmIHJlc3VsdC5lcnJvcnMuZW1haWxbMF0uZXJyb3IgPT09IFwiaW52YWxpZFwiKSB7XG4gICAgICBpbnZhbGlkT3JUYWtlbk1haWwodXNlckRhdGEsIHVzZXJJbmRleClcbiAgICB9IGVsc2UgaWYgKHJlc3VsdC5lcnJvcnMgJiYgcmVzdWx0LmVycm9ycy5maXJzdF9uYW1lICYmIHJlc3VsdC5lcnJvcnMuZmlyc3RfbmFtZVswXS5lcnJvciA9PT0gXCJkw6lqw6AgdXRpbGlzw6lcIikge1xuICAgICAgYWxlcnQoXCJMYSBjcsOpYXRpb24gZHUgY29tcHRlIGEgw6ljaG91w6kuIEwndXRpbGlzYXRldXIgc2VtYmxlIGV4aXN0ZXIgbWFpcyBuJ2EgcHUgw6p0cmUgcsOpY3Vww6lyw6kuXCIpO1xuICAgIH0gZWxzZSBpZiAocmVzdWx0LmVycm9ycyAmJiByZXN1bHQuZXJyb3JzWzBdICYmIHJlc3VsdC5lcnJvcnNbMF0uYmFzZSA9PT0gXCJmb3JiaWRkZW5cIikge1xuICAgICAgYWxlcnQoXCJWb3RyZSBjb21wdGUgYWdlbnQgUkRWLVNvbGlkYXJpdMOpcyBuZSB2b3VzIHBlcm1ldCBwYXMgZCdlZmZlY3R1ZXIgY2V0dGUgYWN0aW9uLlwiKTtcbiAgICB9IGVsc2UgaWYgKHJlc3VsdC5lcnJvcnMgJiYgcmVzdWx0LmVycm9yc1swXSkge1xuICAgICAgYWxlcnQocmVzdWx0LmVycm9yc1swXSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgaGFuZGxlTG9naW4gPSAodG9rZW5JZCwgdWlkLCBjbGllbnQpID0+IHtcbiAgICBzZXRUb2tlbih7IC4uLnRva2VuLCB0b2tlbklkOiB0b2tlbklkLCB1aWQ6IHVpZCwgY2xpZW50OiBjbGllbnQgfSk7XG4gICAgc2V0SXNMb2dnZWQodHJ1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRmlsZSA9IGFzeW5jIGZpbGUgPT4ge1xuICAgIGlmIChkZXZNb2RlICYmIGZpbGUgIT0gZGV2RmlsZSkge1xuICAgICAgc2V0RGV2RmlsZShmaWxlKTtcbiAgICB9XG4gICAgc2V0RmlsZVNpemUoZmlsZS5zaXplKTtcbiAgICBjb25zdCBzdGFydF90aW1lID0gbmV3IERhdGUoKTtcblxuICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGZpbGVEYXRhID0gbmV3IFVpbnQ4QXJyYXkoZXZlbnQudGFyZ2V0LnJlc3VsdCk7XG4gICAgICAgIGNvbnN0IHhscyA9IFhMU1gucmVhZChmaWxlRGF0YSwgeyB0eXBlOiBcImFycmF5XCIsIGNlbGxEYXRlczogdHJ1ZSwgZGF0ZU5GOiBcImRkL21tL3l5eXlcIiB9KTtcbiAgICAgICAgY29uc3Qgd29ya3NoZWV0ID0geGxzLlNoZWV0c1t4bHMuU2hlZXROYW1lc1swXV07XG5cbiAgICAgICAgbGV0IGpzb25EYXRhID0gWExTWC51dGlscy5zaGVldF90b19qc29uKHdvcmtzaGVldCwge1xuICAgICAgICAgIGJsYW5rcm93czogZmFsc2UsXG4gICAgICAgICAgcmF3OiBmYWxzZSxcbiAgICAgICAgICBkZWZ2YWw6IFwiXCIsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHdlIHJlbW92ZSBsaW5lIGJyZWFrcyBmcm9tIGFsbCBrZXlzXG4gICAgICAgIGpzb25EYXRhID0ganNvbkRhdGEubWFwKHVzZXJEYXRhID0+IHtcbiAgICAgICAgICByZXR1cm4gWy4uLk9iamVjdC5rZXlzKHVzZXJEYXRhKV0ucmVkdWNlKChyZXMsIGtleSkgPT4ge1xuICAgICAgICAgICAgcmVzW2tleS5yZXBsYWNlKC9bXFxuXFxyXSsvZywgXCIgXCIpXSA9IHVzZXJEYXRhW2tleV07XG4gICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICAgIH0sIHt9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2V0VXNlclN0YXR1c0NoZWNrZWQoZmFsc2UpO1xuICAgICAgICBzZXRVc2Vyc0RhdGEoanNvbkRhdGEpO1xuICAgICAgICBkaXNwYXRjaFJ1bnMoe1xuICAgICAgICAgIHR5cGU6IFwiYXBwZW5kXCIsXG4gICAgICAgICAgaXRlbToge1xuICAgICAgICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTkpLFxuICAgICAgICAgICAgZHVyYXRpb246IG5ldyBEYXRlKCkgLSBzdGFydF90aW1lLFxuICAgICAgICAgICAgZmlsZW5hbWU6IGZpbGUubmFtZSxcbiAgICAgICAgICAgIGZpbGVTaXplOiBmaWxlLnNpemUsXG4gICAgICAgICAgICBmaWxlTGluZXM6IGpzb25EYXRhLmxlbmd0aCxcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfTtcbiAgICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihmaWxlKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfSBoYW5kbGVGaWxlPXtoYW5kbGVGaWxlfT5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PkV4cMOpcmltZW50YXRpb24gQXJkZW5uZXM8L2gxPlxuXG4gICAgICAgIHshaXNMb2dnZWQgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY3JlYXRlfT5cbiAgICAgICAgICAgIDxMb2dpbkZvcm0gaGFuZGxlTG9naW49e2hhbmRsZUxvZ2lufSByZHZVcmw9e1JEVl9TT0xJREFSSVRFU19VUkx9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG5cbiAgICAgICAge2lzTG9nZ2VkICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPEZpbGVIYW5kbGVyXG4gICAgICAgICAgICAgIGhhbmRsZUZpbGU9e2hhbmRsZUZpbGV9XG4gICAgICAgICAgICAgIGZpbGVTaXplPXtmaWxlU2l6ZX1cbiAgICAgICAgICAgICAgcGVuZGluZ01lc3NhZ2U9e1wiUsOpY3Vww6lyYXRpb24gZGVzIGluZm9ybWF0aW9ucywgbWVyY2kgZGUgcGF0aWVudGVyXCJ9XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICB7dXNlcnNEYXRhICYmIChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuc3VidGl0bGV9PkLDqW7DqWZpY2lhaXJlcyBSU0E8L2gyPlxuXG4gICAgICAgICAgICAgICAge3VzZXJzRGF0YS5sZW5ndGggPT0gMCAmJiAoXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+QXVjdW4gYsOpbsOpZmljaWFpcmUgZGFucyBsZSBmaWNoaWVyPC9wPlxuICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICB7dXNlcnNEYXRhLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlPlxuICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+RGF0ZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPk5vbTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPlByw6lub208L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5NYWlsPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+VMOpbMOpcGhvbmU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5JRCBSRFYtU29saWRhcml0w6lzPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNvbFNwYW49XCIzXCI+SW52aXRhdGlvbjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj1cIjFcIj5EZXJuaWVyIGVudm9pIGxlPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNvbFNwYW49XCIxXCI+RGF0ZSBkJ2luc2NyaXB0aW9uPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNvbFNwYW49XCIxXCI+QWN0aW9uPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogcmV2ZXJzZSBlc3QgdXRpbGlzw6kgcG91ciBxdWUgbGVzIHV0aWxpc2F0ZXVycyBsZXMgcGx1cyByw6ljZW50cyBhcHBhcmFpc3NlbnQgZW4gaGF1dCAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIHtbLi4udXNlcnNEYXRhXS5yZXZlcnNlKCkubWFwKCh1c2VyLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RnJhZ21lbnQga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3VzZXJbXCJEQVRFXCJdICE9PSBcIlwiICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+e3VzZXJbXCJEQVRFXCJdfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9Pnt1c2VyW1wiTk9NXCJdfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9Pnt1c2VyW1wiUFJFTk9NXCJdfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9Pnt1c2VyW1wiTUFJTFwiXX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT57dXNlcltcIlRFTEVQSE9ORVwiXX08L3RkPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyW1wiSUQgUkRWXCJdID09PSBcIlwiICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY3JlYXRlVXNlcih1c2VyLCB1c2Vyc0RhdGEubGVuZ3RoIC0gaW5kZXggLSAxKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3LDqWVyIHVuIGNvbXB0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3VzZXJbXCJJRCBSRFZcIl0gIT09IFwiXCIgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9Pnt1c2VyW1wiSUQgUkRWXCJdfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9Pnt1c2VyW1wiRGF0ZSBkJ2ludml0YXRpb25cIl19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+e3VzZXJbXCJEYXRlIGQnaW5zY3JpcHRpb25cIl19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3VzZXJbXCJJRCBSRFZcIl0gIT09IFwiXCIgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlSW52aXRhdGlvblVybChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJbXCJJRCBSRFZcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2Vyc0RhdGEubGVuZ3RoIC0gaW5kZXggLSAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyW1wiRGF0ZSBkJ2ludml0YXRpb25cIl0gIT09IFwiXCIgJiYgXCJSZWfDqW7DqXJlciBpbnZpdGF0aW9uXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyW1wiRGF0ZSBkJ2ludml0YXRpb25cIl0gPT09IFwiXCIgJiYgXCJHw6luw6lyZXIgaW52aXRhdGlvblwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3VzZXJbXCJJRCBSRFZcIl0gPT09IFwiXCIgJiYgPHRkIGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+PC90ZD59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufSBvbkNsaWNrPXt3cml0ZUZpbGV9PlxuICAgICAgICAgICAgICAgICAgICAgIFJlZ8OpbsOpcmVyIGZpY2hpZXJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG5cbiAgICAgICAgPEZvb3RlclxuICAgICAgICAgIHN1YmplY3Q9XCJFeHDDqXJpbWVudGF0aW9uIEFyZGVubmVzXCJcbiAgICAgICAgICBwb3VycXVvaT1cIlF1ZWwgZXN0IGwnb2JqZWN0aWYgZGUgY2V0dGUgZXhww6lyaW1lbnRhdGlvbiZuYnNwOz9cIlxuICAgICAgICAgIHRleHQ9e1xuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+XG4gICAgICAgICAgICAgICAgRmFjaWxpdGVyIGxlIHRyYXZhaWwgZGVzIGFnZW50cyBkdSBkw6lwYXJ0ZW1lbnQgZXQgdGVzdGVyIGwndXRpbGlzYXRpb24gZGVcbiAgICAgICAgICAgICAgICBsJ2FwcGxpY2F0aW9uIFJEVi1Tb2xpZGFyaXTDqXMgcG91ciBhY2PDqWzDqXJlciBsYSBwcmlzZSBkdSBwcmVtaWVyIHJlbmRlei12b3VzXG4gICAgICAgICAgICAgICAgZCdvcmllbnRhdGlvbi5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgPC9tYWluPlxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==