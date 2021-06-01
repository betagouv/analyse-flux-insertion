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

/***/ "./lib/reducerFactory.js":
/*!*******************************!*\
  !*** ./lib/reducerFactory.js ***!
  \*******************************/
/*! exports provided: initReducer, reducerFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initReducer", function() { return initReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducerFactory", function() { return reducerFactory; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _socialgouv_matomo_next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @socialgouv/matomo-next */ "./node_modules/@socialgouv/matomo-next/lib/index.js");
/* harmony import */ var _socialgouv_matomo_next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_socialgouv_matomo_next__WEBPACK_IMPORTED_MODULE_3__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var devMode = true;

function initReducer(items) {
  return items || [];
}

function reducerFactory(logName) {
  return function reducer(state, action) {
    switch (action.type) {
      case "append":
        // we don't want to send the applicants personal data
        var _action$item = action.item,
            applicantsPersonalData = _action$item.applicantsPersonalData,
            applicants = _action$item.applicants,
            applicantsEligibleAsNew = _action$item.applicantsEligibleAsNew,
            newApplicantsData = _action$item.newApplicantsData,
            logData = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_action$item, ["applicantsPersonalData", "applicants", "applicantsEligibleAsNew", "newApplicantsData"]);

        if (devMode) {
          console.log(logData);
        }

        Object(_socialgouv_matomo_next__WEBPACK_IMPORTED_MODULE_3__["push"])(["trackEvent", logName, JSON.stringify(_objectSpread(_objectSpread({}, logData), {}, {
          seed: undefined
        }))]);
        return [action.item].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state));

      case "update":
        var elIndex = state.findIndex(function (el) {
          return el.seed === action.item.seed;
        });
        state[elIndex] = _objectSpread(_objectSpread({}, state[elIndex]), action.item);
        return state;

      case "replace":
        return action.items;

      case "reset":
        return initReducer(action.items);

      default:
        throw new Error();
    }
  };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2RhdGVzLmpzIiwid2VicGFjazovL19OX0UvLi9saWIvcmVkdWNlckZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2V4cGVyaW1lbnRhdGlvbnMvYXJkZW5uZXMtZGVtby9pbmRleC5qcyJdLCJuYW1lcyI6WyJzdHJpbmdUb0RhdGUiLCJkYXRlU3RyIiwic3BsaXQiLCJkYXkiLCJtb250aCIsInllYXIiLCJEYXRlIiwiYXBwbGljYXRpb25TdHJpbmdUb0RhdGUiLCJhcHBsaWNhdGlvbkRhdGVUb1N0cmluZyIsImRhdGUiLCJ5IiwiZ2V0RnVsbFllYXIiLCJtIiwiZ2V0TW9udGgiLCJkIiwiZ2V0RGF0ZSIsImRhdGVZZXN0ZXJkYXkiLCJzZXREYXRlIiwieWVzdGVyZGF5QXBwbGljYXRpb25EYXRlIiwiZ2V0RGF0ZVRpbWVTdHJpbmciLCJoIiwiZ2V0SG91cnMiLCJtaSIsImdldE1pbnV0ZXMiLCJzIiwiZ2V0U2Vjb25kcyIsImdldEZyZW5jaEZvcm1hdERhdGVTdHJpbmciLCJkZXZNb2RlIiwiaW5pdFJlZHVjZXIiLCJpdGVtcyIsInJlZHVjZXJGYWN0b3J5IiwibG9nTmFtZSIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJpdGVtIiwiYXBwbGljYW50c1BlcnNvbmFsRGF0YSIsImFwcGxpY2FudHMiLCJhcHBsaWNhbnRzRWxpZ2libGVBc05ldyIsIm5ld0FwcGxpY2FudHNEYXRhIiwibG9nRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIiwiSlNPTiIsInN0cmluZ2lmeSIsInNlZWQiLCJ1bmRlZmluZWQiLCJlbEluZGV4IiwiZmluZEluZGV4IiwiZWwiLCJFcnJvciIsIkFyZGVubmVzIiwicm91dGVyIiwidXNlUm91dGVyIiwiaXNEZW1vIiwicGF0aG5hbWUiLCJpbmNsdWRlcyIsIm9yZ2FJRCIsInByb2Nlc3MiLCJSRFZfU09MSURBUklURVNfVVJMIiwidXNlclVybCIsInVzZVN0YXRlIiwiZGV2RmlsZSIsInNldERldkZpbGUiLCJ1c2VSZWR1Y2VyIiwicnVucyIsImRpc3BhdGNoUnVucyIsInVzZXJzRGF0YSIsInNldFVzZXJzRGF0YSIsInVzZXJTdGF0dXNDaGVja2VkIiwic2V0VXNlclN0YXR1c0NoZWNrZWQiLCJmaWxlU2l6ZSIsInNldEZpbGVTaXplIiwiaXNMb2dnZWQiLCJzZXRJc0xvZ2dlZCIsInRva2VuSWQiLCJ1aWQiLCJjbGllbnQiLCJ0b2tlbiIsInNldFRva2VuIiwidXNlRWZmZWN0IiwiaGFuZGxlRmlsZSIsImZvckVhY2giLCJ1c2VyIiwidXNlckluZGV4IiwiY2hlY2tVc2VySW52aXRhdGlvblN0YXR1cyIsIndyaXRlRmlsZSIsIm91dFdvcmtib29rIiwiWExTWCIsImJvb2tfbmV3Iiwib3V0V29ya3NoZWV0IiwianNvbl90b19zaGVldCIsImJvb2tfYXBwZW5kX3NoZWV0IiwiZ2VuZXJhdGVJbnZpdGF0aW9uVXJsIiwidXNlcklkIiwiaW52aXRhdGlvblVybCIsImFwcEZldGNoIiwicmVzdWx0IiwibmV3VXNlcnNEYXRhIiwiaW52aXRhdGlvbl91cmwiLCJpbnZpdGF0aW9uX3Rva2VuIiwiZ2V0VXNlciIsImdldFVzZXJVcmwiLCJpbnZpdGF0aW9uX2NyZWF0ZWRfYXQiLCJpbnZpdGF0aW9uX2RhdGUiLCJzdWJzdHJpbmciLCJpbnZpdGF0aW9uX2FjY2VwdGVkX2F0IiwiaW5zY3JpcHRpb25fZGF0ZSIsImludmFsaWRPclRha2VuTWFpbCIsInVzZXJEYXRhIiwiZmlyc3RfbmFtZSIsInRvVXBwZXJDYXNlIiwibGFzdF9uYW1lIiwiYmlydGhfZGF0ZSIsImFkZHJlc3MiLCJhbGVydCIsImNyZWF0ZVVzZXIiLCJ3aXRoRW1haWwiLCJyZXNwb25zaWJsZV9pZCIsInBob25lX251bWJlciIsInJlcGxhY2UiLCJjYWlzc2VfYWZmaWxpYXRpb24iLCJhZmZpbGlhdGlvbl9udW1iZXIiLCJvcmdhbmlzYXRpb25faWRzIiwiZW1haWwiLCJpZCIsImVycm9ycyIsImVycm9yIiwiYmFzZSIsImhhbmRsZUxvZ2luIiwiZmlsZSIsInNpemUiLCJzdGFydF90aW1lIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwiZXZlbnQiLCJmaWxlRGF0YSIsIlVpbnQ4QXJyYXkiLCJ0YXJnZXQiLCJ4bHMiLCJjZWxsRGF0ZXMiLCJkYXRlTkYiLCJ3b3Jrc2hlZXQiLCJTaGVldHMiLCJTaGVldE5hbWVzIiwianNvbkRhdGEiLCJzaGVldF90b19qc29uIiwiYmxhbmtyb3dzIiwicmF3IiwiZGVmdmFsIiwibWFwIiwiT2JqZWN0Iiwia2V5cyIsInJlZHVjZSIsInJlcyIsImtleSIsInRpbWVzdGFtcCIsInRvSVNPU3RyaW5nIiwic2xpY2UiLCJkdXJhdGlvbiIsImZpbGVuYW1lIiwibmFtZSIsImZpbGVMaW5lcyIsImxlbmd0aCIsInJlYWRBc0FycmF5QnVmZmVyIiwic3R5bGVzIiwiY29udGFpbmVyIiwibWFpbiIsInRpdGxlIiwiY3JlYXRlIiwic3VidGl0bGUiLCJkZXNjcmlwdGlvbiIsInJldmVyc2UiLCJpbmRleCIsImNlbnRlciIsImJ1dHRvbiIsInRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQUMsT0FBTyxFQUFJO0FBQUEsdUJBQ0hBLE9BQU8sQ0FBQ0MsS0FBUixDQUFjLEdBQWQsQ0FERztBQUFBO0FBQUEsTUFDdkJDLEdBRHVCO0FBQUEsTUFDbEJDLEtBRGtCO0FBQUEsTUFDWEMsSUFEVzs7QUFFOUIsU0FBTyxJQUFJQyxJQUFKLENBQVNELElBQVQsRUFBZUQsS0FBSyxHQUFHLENBQXZCLEVBQTBCRCxHQUExQixDQUFQO0FBQ0QsQ0FIRDs7QUFLQSxJQUFNSSx1QkFBdUIsR0FBRyxTQUExQkEsdUJBQTBCLENBQUFOLE9BQU8sRUFBSTtBQUFBLHdCQUNkQSxPQUFPLENBQUNDLEtBQVIsQ0FBYyxHQUFkLENBRGM7QUFBQTtBQUFBLE1BQ2xDRyxJ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REFBTSxDQUFDVyxJQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXZHRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF5SEQ7O0dBdlV1QmhJLFE7VUFDUEUscUQ7OztLQURPRixRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2V4cGVyaW1lbnRhdGlvbnMvYXJkZW5uZXMtZGVtby4zMDE4YTc3MGM3YTNjOTNjZDQ2OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc3RyaW5nVG9EYXRlID0gZGF0ZVN0ciA9PiB7XG4gIGNvbnN0IFtkYXksIG1vbnRoLCB5ZWFyXSA9IGRhdGVTdHIuc3BsaXQoXCIvXCIpO1xuICByZXR1cm4gbmV3IERhdGUoeWVhciwgbW9udGggLSAxLCBkYXkpO1xufTtcblxuY29uc3QgYXBwbGljYXRpb25TdHJpbmdUb0RhdGUgPSBkYXRlU3RyID0+IHtcbiAgY29uc3QgW3llYXIsIG1vbnRoLCBkYXldID0gZGF0ZVN0ci5zcGxpdChcIi1cIik7XG4gIHJldHVybiBuZXcgRGF0ZSh5ZWFyLCBtb250aCAtIDEsIGRheSk7XG59O1xuXG5jb25zdCBhcHBsaWNhdGlvbkRhdGVUb1N0cmluZyA9IGRhdGUgPT4ge1xuICBsZXQgeSA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgbGV0IG0gPSBkYXRlLmdldE1vbnRoKCkgKyAxO1xuICBsZXQgZCA9IGRhdGUuZ2V0RGF0ZSgpO1xuICByZXR1cm4geSArIFwiLVwiICsgKG0gPCAxMCA/IGAwJHttfWAgOiBtKSArIFwiLVwiICsgKGQgPCAxMCA/IGAwJHtkfWAgOiBkKTtcbn07XG5cbmNvbnN0IGRhdGVZZXN0ZXJkYXkgPSBkYXRlID0+IHtcbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpIC0gMSk7XG4gIHJldHVybiBkYXRlO1xufTtcblxuY29uc3QgeWVzdGVyZGF5QXBwbGljYXRpb25EYXRlID0gZGF0ZVN0ciA9PiB7XG4gIHJldHVybiBhcHBsaWNhdGlvbkRhdGVUb1N0cmluZyhkYXRlWWVzdGVyZGF5KGFwcGxpY2F0aW9uU3RyaW5nVG9EYXRlKGRhdGVTdHIpKSk7XG59O1xuXG5mdW5jdGlvbiBnZXREYXRlVGltZVN0cmluZyhkYXRlID0gbmV3IERhdGUoKSkge1xuICBsZXQgeSA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgLy8gSmF2YVNjcmlwdCBtb250aHMgYXJlIDAtYmFzZWQuXG4gIGxldCBtID0gZGF0ZS5nZXRNb250aCgpICsgMTtcbiAgbGV0IGQgPSBkYXRlLmdldERhdGUoKTtcbiAgbGV0IGggPSBkYXRlLmdldEhvdXJzKCk7XG4gIGxldCBtaSA9IGRhdGUuZ2V0TWludXRlcygpO1xuICBsZXQgcyA9IGRhdGUuZ2V0U2Vjb25kcygpO1xuICByZXR1cm4gKFxuICAgIHkgK1xuICAgIFwiX1wiICtcbiAgICAobSA8IDEwID8gYDAke219YCA6IG0pICtcbiAgICBcIl9cIiArXG4gICAgKGQgPCAxMCA/IGAwJHtkfWAgOiBkKSArXG4gICAgXCJfXCIgK1xuICAgIChoIDwgMTAgPyBgMCR7aH1gIDogaCkgK1xuICAgIFwiX1wiICtcbiAgICAobWkgPCAxMCA/IGAwJHttaX1gIDogbWkpICtcbiAgICBcIl9cIiArXG4gICAgKHMgPCAxMCA/IGAwJHtzfWAgOiBzKVxuICApO1xufVxuXG5mdW5jdGlvbiBnZXRGcmVuY2hGb3JtYXREYXRlU3RyaW5nKGRhdGUpIHtcbiAgbGV0IHkgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gIC8vIEphdmFTY3JpcHQgbW9udGhzIGFyZSAwLWJhc2VkLlxuICBsZXQgbSA9IGRhdGUuZ2V0TW9udGgoKSArIDE7XG4gIGxldCBkID0gZGF0ZS5nZXREYXRlKCk7XG4gIHJldHVybiBkICsgXCIvXCIgKyBtICsgXCIvXCIgKyB5O1xufVxuXG5leHBvcnQge1xuICBnZXRGcmVuY2hGb3JtYXREYXRlU3RyaW5nLFxuICBzdHJpbmdUb0RhdGUsXG4gIGdldERhdGVUaW1lU3RyaW5nLFxuICB5ZXN0ZXJkYXlBcHBsaWNhdGlvbkRhdGUsXG4gIGFwcGxpY2F0aW9uU3RyaW5nVG9EYXRlLFxuICBhcHBsaWNhdGlvbkRhdGVUb1N0cmluZyxcbn07XG4iLCJpbXBvcnQgeyBwdXNoIH0gZnJvbSBcIkBzb2NpYWxnb3V2L21hdG9tby1uZXh0XCI7XG5cbmNvbnN0IGRldk1vZGUgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PSBcImRldmVsb3BtZW50XCI7XG5cbmZ1bmN0aW9uIGluaXRSZWR1Y2VyKGl0ZW1zKSB7XG4gIHJldHVybiBpdGVtcyB8fCBbXTtcbn1cblxuZnVuY3Rpb24gcmVkdWNlckZhY3RvcnkobG9nTmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKSB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgY2FzZSBcImFwcGVuZFwiOlxuICAgICAgICAvLyB3ZSBkb24ndCB3YW50IHRvIHNlbmQgdGhlIGFwcGxpY2FudHMgcGVyc29uYWwgZGF0YVxuICAgICAgICBsZXQge1xuICAgICAgICAgIGFwcGxpY2FudHNQZXJzb25hbERhdGEsXG4gICAgICAgICAgYXBwbGljYW50cyxcbiAgICAgICAgICBhcHBsaWNhbnRzRWxpZ2libGVBc05ldyxcbiAgICAgICAgICBuZXdBcHBsaWNhbnRzRGF0YSxcbiAgICAgICAgICAuLi5sb2dEYXRhXG4gICAgICAgIH0gPSBhY3Rpb24uaXRlbTtcbiAgICAgICAgaWYgKGRldk1vZGUpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhsb2dEYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBwdXNoKFtcInRyYWNrRXZlbnRcIiwgbG9nTmFtZSwgSlNPTi5zdHJpbmdpZnkoeyAuLi5sb2dEYXRhLCBzZWVkOiB1bmRlZmluZWQgfSldKTtcbiAgICAgICAgcmV0dXJuIFthY3Rpb24uaXRlbSwgLi4uc3RhdGVdO1xuICAgICAgY2FzZSBcInVwZGF0ZVwiOlxuICAgICAgICBjb25zdCBlbEluZGV4ID0gc3RhdGUuZmluZEluZGV4KGVsID0+IGVsLnNlZWQgPT09IGFjdGlvbi5pdGVtLnNlZWQpO1xuICAgICAgICBzdGF0ZVtlbEluZGV4XSA9IHsgLi4uc3RhdGVbZWxJbmRleF0sIC4uLmFjdGlvbi5pdGVtIH07XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIGNhc2UgXCJyZXBsYWNlXCI6XG4gICAgICAgIHJldHVybiBhY3Rpb24uaXRlbXM7XG4gICAgICBjYXNlIFwicmVzZXRcIjpcbiAgICAgICAgcmV0dXJuIGluaXRSZWR1Y2VyKGFjdGlvbi5pdGVtcyk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCB7IGluaXRSZWR1Y2VyLCByZWR1Y2VyRmFjdG9yeSB9O1xuIiwiaW1wb3J0IHsgRnJhZ21lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZHVjZXIgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0ICogYXMgWExTWCBmcm9tIFwieGxzeFwiO1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2xheW91dFwiO1xuaW1wb3J0IEZpbGVIYW5kbGVyIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2ZpbGVIYW5kbGVyXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2Zvb3RlclwiO1xuaW1wb3J0IExvZ2luRm9ybSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9sb2dpbkZvcm1cIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uLy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcblxuaW1wb3J0IHsgYXBwRmV0Y2ggfSBmcm9tIFwiLi4vLi4vLi4vbGliL2FwcEZldGNoXCI7XG5pbXBvcnQgeyBpbml0UmVkdWNlciwgcmVkdWNlckZhY3RvcnkgfSBmcm9tIFwiLi4vLi4vLi4vbGliL3JlZHVjZXJGYWN0b3J5XCI7XG5pbXBvcnQgeyBhcHBsaWNhdGlvbkRhdGVUb1N0cmluZywgZ2V0RGF0ZVRpbWVTdHJpbmcsIGdldEZyZW5jaEZvcm1hdERhdGVTdHJpbmcsIHN0cmluZ1RvRGF0ZSB9IGZyb20gXCIuLi8uLi8uLi9saWIvZGF0ZXNcIjtcblxuY29uc3QgcmVkdWNlciA9IHJlZHVjZXJGYWN0b3J5KFwiRXhww6lyaW1lbnRhdGlvbiBBcmRlbm5lcyAtIENOQUYgLSBCw6luw6lmaWNpYWlyZVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXJkZW5uZXMoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBpc0RlbW8gPSByb3V0ZXIucGF0aG5hbWUuaW5jbHVkZXMoXCJkZW1vXCIpO1xuICBjb25zdCBkZXZNb2RlID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT0gXCJkZXZlbG9wbWVudFwiO1xuICBjb25zdCBvcmdhSUQgPSBpc0RlbW9cbiAgICA/IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX09SR0FOSVNBVElPTl9JRF9ERU1PXG4gICAgOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19PUkdBTklTQVRJT05fSURfUFJPRDtcblxuICBjb25zdCBSRFZfU09MSURBUklURVNfVVJMID0gaXNEZW1vXG4gICAgPyBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19SRFZfU09MSURBUklURVNfREVNT19VUkxcbiAgICA6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1JEVl9TT0xJREFSSVRFU19QUk9EX1VSTDtcbiAgY29uc3QgdXNlclVybCA9IFJEVl9TT0xJREFSSVRFU19VUkwgKyBcIi9hcGkvdjEvdXNlcnNcIjtcblxuICBjb25zdCBbZGV2RmlsZSwgc2V0RGV2RmlsZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3J1bnMsIGRpc3BhdGNoUnVuc10gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIFtdLCBpbml0UmVkdWNlcik7XG4gIGNvbnN0IFt1c2Vyc0RhdGEsIHNldFVzZXJzRGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3VzZXJTdGF0dXNDaGVja2VkLCBzZXRVc2VyU3RhdHVzQ2hlY2tlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtmaWxlU2l6ZSwgc2V0RmlsZVNpemVdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtpc0xvZ2dlZCwgc2V0SXNMb2dnZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbdG9rZW4sIHNldFRva2VuXSA9IHVzZVN0YXRlKHtcbiAgICB0b2tlbklkOiBcIlwiLFxuICAgIHVpZDogXCJcIixcbiAgICBjbGllbnQ6IFwiXCIsXG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRldkZpbGUpIHtcbiAgICAgIGhhbmRsZUZpbGUoZGV2RmlsZSk7XG4gICAgfVxuICB9LCBbZGV2RmlsZV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHVzZXJzRGF0YSAmJiB1c2VyU3RhdHVzQ2hlY2tlZCA9PT0gZmFsc2UpIHtcbiAgICAgIHVzZXJzRGF0YS5mb3JFYWNoKCh1c2VyLCB1c2VySW5kZXgpID0+IHtcbiAgICAgICAgaWYgKHVzZXJbXCJJRCBSRFZcIl0gIT0gXCJcIikge1xuICAgICAgICAgIGNoZWNrVXNlckludml0YXRpb25TdGF0dXModXNlcltcIklEIFJEVlwiXSwgdXNlckluZGV4KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBzZXRVc2VyU3RhdHVzQ2hlY2tlZCh0cnVlKTtcbiAgICB9XG4gIH0sIFt1c2Vyc0RhdGFdKTtcblxuICBjb25zdCB3cml0ZUZpbGUgPSAoKSA9PiB7XG4gICAgY29uc3Qgb3V0V29ya2Jvb2sgPSBYTFNYLnV0aWxzLmJvb2tfbmV3KCk7XG4gICAgY29uc3Qgb3V0V29ya3NoZWV0ID0gWExTWC51dGlscy5qc29uX3RvX3NoZWV0KHVzZXJzRGF0YSk7XG4gICAgWExTWC51dGlscy5ib29rX2FwcGVuZF9zaGVldChvdXRXb3JrYm9vaywgb3V0V29ya3NoZWV0LCBcIkRJVkVSR0VOQ0VTXCIpO1xuICAgIC8vIFhMU1gudXRpbHMuYm9va19hcHBlbmRfc2hlZXQob3V0V29ya2Jvb2ssIHhscy5TaGVldHNbeGxzLlNoZWV0TmFtZXNbMV1dLCBcIkdSQVBISVFVRVwiKTtcbiAgICAvLyBYTFNYLnV0aWxzLmJvb2tfYXBwZW5kX3NoZWV0KG91dFdvcmtib29rLCB4bHMuU2hlZXRzW3hscy5TaGVldE5hbWVzWzJdXSwgXCJTZWxlY3Rpb24gQ09BXCIpO1xuICAgIFhMU1gud3JpdGVGaWxlKG91dFdvcmtib29rLCBgYXJkZW5uZXNfcnNhXyR7Z2V0RGF0ZVRpbWVTdHJpbmcobmV3IERhdGUoKSl9Lnhsc3hgKTtcbiAgfTtcblxuICBhc3luYyBmdW5jdGlvbiBnZW5lcmF0ZUludml0YXRpb25VcmwodXNlcklkLCB1c2VySW5kZXgpIHtcbiAgICBjb25zdCBpbnZpdGF0aW9uVXJsID0gdXNlclVybCArIGAvJHt1c2VySWR9L2ludml0ZWA7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXBwRmV0Y2goaW52aXRhdGlvblVybCwgdG9rZW4pO1xuXG4gICAgbGV0IG5ld1VzZXJzRGF0YSA9IFsuLi51c2Vyc0RhdGFdO1xuICAgIGlmIChyZXN1bHQuaW52aXRhdGlvbl91cmwpIHtcbiAgICAgIG5ld1VzZXJzRGF0YVt1c2VySW5kZXhdW1wiTGllbiBkJ2ludml0YXRpb25cIl0gPSByZXN1bHQuaW52aXRhdGlvbl91cmw7XG4gICAgfSBlbHNlIGlmIChyZXN1bHQuaW52aXRhdGlvbl90b2tlbikge1xuICAgICAgbmV3VXNlcnNEYXRhW3VzZXJJbmRleF1bXCJDb2RlIGQnaW52aXRhdGlvblwiXSA9IHJlc3VsdC5pbnZpdGF0aW9uX3Rva2VuO1xuICAgIH1cbiAgICBuZXdVc2Vyc0RhdGFbdXNlckluZGV4XVtcIkRhdGUgZCdpbnZpdGF0aW9uXCJdID0gZ2V0RnJlbmNoRm9ybWF0RGF0ZVN0cmluZyhuZXcgRGF0ZSgpKTtcbiAgICBzZXRVc2Vyc0RhdGEobmV3VXNlcnNEYXRhKTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGdldFVzZXIodXNlcklkKSB7XG4gICAgY29uc3QgZ2V0VXNlclVybCA9IHVzZXJVcmwgKyBgLyR7dXNlcklkfWA7XG4gICAgcmV0dXJuIGF3YWl0IGFwcEZldGNoKGdldFVzZXJVcmwsIHRva2VuKTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGNoZWNrVXNlckludml0YXRpb25TdGF0dXModXNlcklkLCB1c2VySW5kZXgpIHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRVc2VyKHVzZXJJZCk7XG5cbiAgICBsZXQgbmV3VXNlcnNEYXRhID0gWy4uLnVzZXJzRGF0YV07XG4gICAgaWYgKHJlc3VsdC51c2VyLmludml0YXRpb25fY3JlYXRlZF9hdCkge1xuICAgICAgbGV0IGludml0YXRpb25fZGF0ZSA9IHJlc3VsdC51c2VyLmludml0YXRpb25fY3JlYXRlZF9hdCAvLyBEYXRlIGF1IGZvcm1hdCA6IDIwMjEtMDQtMTUgMTQ6NTM6NTYgKzAyMDBcbiAgICAgICAgLnN1YnN0cmluZygwLCAxMCk7IC8vIFLDqWN1cMOpcmVyIGxlcyAxMCBwcmVtaWVycyBjaGlmZnJlcyAobGEgZGF0ZSlcbiAgICAgIGludml0YXRpb25fZGF0ZSA9IG5ldyBEYXRlKGludml0YXRpb25fZGF0ZSk7IC8vIENyw6llciB1bmUgZGF0ZSBKU1xuICAgICAgbmV3VXNlcnNEYXRhW3VzZXJJbmRleF1bXCJEYXRlIGQnaW52aXRhdGlvblwiXSA9IGdldEZyZW5jaEZvcm1hdERhdGVTdHJpbmcoaW52aXRhdGlvbl9kYXRlKTtcbiAgICB9XG4gICAgaWYgKHJlc3VsdC51c2VyLmludml0YXRpb25fYWNjZXB0ZWRfYXQpIHtcbiAgICAgIGxldCBpbnNjcmlwdGlvbl9kYXRlID0gcmVzdWx0LnVzZXIuaW52aXRhdGlvbl9hY2NlcHRlZF9hdCAvLyBEYXRlIGF1IGZvcm1hdCA6IDIwMjEtMDQtMTUgMTQ6NTM6NTYgKzAyMDBcbiAgICAgICAgLnN1YnN0cmluZygwLCAxMCk7IC8vIFLDqWN1cMOpcmVyIGxlcyAxMCBwcmVtaWVycyBjaGlmZnJlcyAobGEgZGF0ZSlcbiAgICAgIGluc2NyaXB0aW9uX2RhdGUgPSBuZXcgRGF0ZShpbnNjcmlwdGlvbl9kYXRlKTsgLy8gQ3LDqWVyIHVuZSBkYXRlIEpTXG4gICAgICBuZXdVc2Vyc0RhdGFbdXNlckluZGV4XVtcIkRhdGUgZCdpbnNjcmlwdGlvblwiXSA9IGdldEZyZW5jaEZvcm1hdERhdGVTdHJpbmcoaW5zY3JpcHRpb25fZGF0ZSk7XG4gICAgfVxuICAgIHNldFVzZXJzRGF0YShuZXdVc2Vyc0RhdGEpO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gaW52YWxpZE9yVGFrZW5NYWlsKHVzZXJEYXRhLCB1c2VySW5kZXgsIHVzZXJJZCA9IG51bGwpIHtcbiAgICBpZiAodXNlcklkICE9IG51bGwpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFVzZXIodXNlcklkKTtcblxuICAgICAgLy8gVsOpcmlmaWUgZCdhYm9yZCBzaSBsJ3V0aWxpc2F0ZXVyIGF2ZWMgbGUgbcOqbWUgZW1haWwgZXN0IHVuIGRvdWJsb25cbiAgICAgIGlmIChcbiAgICAgICAgcmVzdWx0ICYmXG4gICAgICAgIHJlc3VsdC51c2VyLmZpcnN0X25hbWUudG9VcHBlckNhc2UoKSA9PT0gdXNlckRhdGFbXCJQUkVOT01cIl0udG9VcHBlckNhc2UoKSAmJlxuICAgICAgICByZXN1bHQudXNlci5sYXN0X25hbWUudG9VcHBlckNhc2UoKSA9PT0gdXNlckRhdGFbXCJOT01cIl0udG9VcHBlckNhc2UoKSAmJlxuICAgICAgICByZXN1bHQudXNlci5iaXJ0aF9kYXRlID09PSBhcHBsaWNhdGlvbkRhdGVUb1N0cmluZyhzdHJpbmdUb0RhdGUodXNlckRhdGFbXCJEQVRFIERFIE5BSVNTQU5DRVwiXSkpICYmXG4gICAgICAgIHJlc3VsdC51c2VyLmFkZHJlc3MudG9VcHBlckNhc2UoKSA9PT1cbiAgICAgICAgICB1c2VyRGF0YVtcIkFEUkVTU0VcIl0udG9VcHBlckNhc2UoKSArXG4gICAgICAgICAgICBcIiAtIFwiICtcbiAgICAgICAgICAgIHVzZXJEYXRhW1wiQ09ERSBQT1NUQUxcIl0udG9VcHBlckNhc2UoKSArXG4gICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICB1c2VyRGF0YVtcIlZJTExFXCJdLnRvVXBwZXJDYXNlKClcbiAgICAgICkge1xuICAgICAgICBsZXQgbmV3VXNlcnNEYXRhID0gWy4uLnVzZXJzRGF0YV07XG4gICAgICAgIG5ld1VzZXJzRGF0YVt1c2VySW5kZXhdW1wiSUQgUkRWXCJdID0gdXNlcklkO1xuICAgICAgICBzZXRVc2Vyc0RhdGEobmV3VXNlcnNEYXRhKTtcbiAgICAgICAgY2hlY2tVc2VySW52aXRhdGlvblN0YXR1cyh1c2VySWQsIHVzZXJJbmRleCk7XG4gICAgICAgIGFsZXJ0KFwiVW4gY29tcHRlIGFzc29jacOpIMOgIGNldCBlbWFpbCBleGlzdGUgZMOpasOgXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3JlYXRlVXNlcih1c2VyRGF0YSwgdXNlckluZGV4LCBmYWxzZSwgdXNlcklkKTsgLy8gU2kgY2Ugbidlc3QgcGFzIHVuIGRvdWJsb24sIGNyw6llIHVuIHV0aWxpc2F0ZXVyIGVuIHRhbnQgcXVlIFwicHJvY2hlXCIgZGUgbCd1dGlsaXNhdGV1ciBleGlzdGFudFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjcmVhdGVVc2VyKHVzZXJEYXRhLCB1c2VySW5kZXgsIGZhbHNlKTsgLy8gY3LDqWUgdW4gdXRpbGlzYXRldXIgc2FucyBlbWFpbFxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVVzZXIodXNlckRhdGEsIHVzZXJJbmRleCwgd2l0aEVtYWlsID0gdHJ1ZSwgcmVzcG9uc2libGVfaWQgPSBudWxsKSB7XG4gICAgY29uc3QgYWRkcmVzcyA9IHVzZXJEYXRhW1wiQURSRVNTRVwiXSArIFwiIC0gXCIgKyB1c2VyRGF0YVtcIkNPREUgUE9TVEFMXCJdICsgXCIgXCIgKyB1c2VyRGF0YVtcIlZJTExFXCJdO1xuXG4gICAgbGV0IHVzZXIgPSB7XG4gICAgICBmaXJzdF9uYW1lOiB1c2VyRGF0YVtcIlBSRU5PTVwiXSxcbiAgICAgIGxhc3RfbmFtZTogdXNlckRhdGFbXCJOT01cIl0sXG4gICAgICBwaG9uZV9udW1iZXI6IHVzZXJEYXRhW1wiVEVMRVBIT05FXCJdLnJlcGxhY2UoL1xccysvZywgXCJcIiksXG4gICAgICBiaXJ0aF9kYXRlOiBzdHJpbmdUb0RhdGUodXNlckRhdGFbXCJEQVRFIERFIE5BSVNTQU5DRVwiXSksXG4gICAgICBhZGRyZXNzOiBhZGRyZXNzLFxuICAgICAgY2Fpc3NlX2FmZmlsaWF0aW9uOiBcImNhZlwiLFxuICAgICAgYWZmaWxpYXRpb25fbnVtYmVyOiB1c2VyRGF0YVtcIk7CsENBRlwiXSxcbiAgICAgIG9yZ2FuaXNhdGlvbl9pZHM6IFtvcmdhSURdLFxuICAgICAgcmVzcG9uc2libGVfaWQ6IHJlc3BvbnNpYmxlX2lkXG4gICAgfTtcbiAgICBpZiAod2l0aEVtYWlsID09PSB0cnVlKSB1c2VyLmVtYWlsID0gdXNlckRhdGFbXCJNQUlMXCJdO1xuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXBwRmV0Y2godXNlclVybCwgdG9rZW4sIFwiUE9TVFwiLCBKU09OLnN0cmluZ2lmeSh1c2VyKSk7XG5cbiAgICBsZXQgbmV3VXNlcnNEYXRhID0gWy4uLnVzZXJzRGF0YV07XG4gICAgaWYgKHJlc3VsdC51c2VyKSB7XG4gICAgICBuZXdVc2Vyc0RhdGFbdXNlckluZGV4XVtcIklEIFJEVlwiXSA9IHJlc3VsdC51c2VyLmlkO1xuICAgICAgc2V0VXNlcnNEYXRhKG5ld1VzZXJzRGF0YSk7XG4gICAgICBnZW5lcmF0ZUludml0YXRpb25VcmwocmVzdWx0LnVzZXIuaWQsIHVzZXJJbmRleCk7XG4gICAgfSBlbHNlIGlmIChyZXN1bHQuZXJyb3JzICYmIHJlc3VsdC5lcnJvcnMuZW1haWwgJiYgcmVzdWx0LmVycm9ycy5lbWFpbFswXS5lcnJvciA9PT0gXCJ0YWtlblwiKSB7XG4gICAgICBpbnZhbGlkT3JUYWtlbk1haWwodXNlckRhdGEsIHVzZXJJbmRleCwgcmVzdWx0LmVycm9ycy5lbWFpbFswXS5pZCk7XG4gICAgfSBlbHNlIGlmIChyZXN1bHQuZXJyb3JzICYmIHJlc3VsdC5lcnJvcnMuZW1haWwgJiYgcmVzdWx0LmVycm9ycy5lbWFpbFswXS5lcnJvciA9PT0gXCJpbnZhbGlkXCIpIHtcbiAgICAgIGludmFsaWRPclRha2VuTWFpbCh1c2VyRGF0YSwgdXNlckluZGV4KVxuICAgIH0gZWxzZSBpZiAocmVzdWx0LmVycm9ycyAmJiByZXN1bHQuZXJyb3JzLmZpcnN0X25hbWUgJiYgcmVzdWx0LmVycm9ycy5maXJzdF9uYW1lWzBdLmVycm9yID09PSBcImTDqWrDoCB1dGlsaXPDqVwiKSB7XG4gICAgICBhbGVydChcIkxhIGNyw6lhdGlvbiBkdSBjb21wdGUgYSDDqWNob3XDqS4gTCd1dGlsaXNhdGV1ciBzZW1ibGUgZXhpc3RlciBtYWlzIG4nYSBwdSDDqnRyZSByw6ljdXDDqXLDqS5cIik7XG4gICAgfSBlbHNlIGlmIChyZXN1bHQuZXJyb3JzICYmIHJlc3VsdC5lcnJvcnNbMF0gJiYgcmVzdWx0LmVycm9yc1swXS5iYXNlID09PSBcImZvcmJpZGRlblwiKSB7XG4gICAgICBhbGVydChcIlZvdHJlIGNvbXB0ZSBhZ2VudCBSRFYtU29saWRhcml0w6lzIG5lIHZvdXMgcGVybWV0IHBhcyBkJ2VmZmVjdHVlciBjZXR0ZSBhY3Rpb24uXCIpO1xuICAgIH0gZWxzZSBpZiAocmVzdWx0LmVycm9ycyAmJiByZXN1bHQuZXJyb3JzWzBdKSB7XG4gICAgICBhbGVydChyZXN1bHQuZXJyb3JzWzBdKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBoYW5kbGVMb2dpbiA9ICh0b2tlbklkLCB1aWQsIGNsaWVudCkgPT4ge1xuICAgIHNldFRva2VuKHsgLi4udG9rZW4sIHRva2VuSWQ6IHRva2VuSWQsIHVpZDogdWlkLCBjbGllbnQ6IGNsaWVudCB9KTtcbiAgICBzZXRJc0xvZ2dlZCh0cnVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVGaWxlID0gYXN5bmMgZmlsZSA9PiB7XG4gICAgaWYgKGRldk1vZGUgJiYgZmlsZSAhPSBkZXZGaWxlKSB7XG4gICAgICBzZXREZXZGaWxlKGZpbGUpO1xuICAgIH1cbiAgICBzZXRGaWxlU2l6ZShmaWxlLnNpemUpO1xuICAgIGNvbnN0IHN0YXJ0X3RpbWUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgZmlsZURhdGEgPSBuZXcgVWludDhBcnJheShldmVudC50YXJnZXQucmVzdWx0KTtcbiAgICAgICAgY29uc3QgeGxzID0gWExTWC5yZWFkKGZpbGVEYXRhLCB7IHR5cGU6IFwiYXJyYXlcIiwgY2VsbERhdGVzOiB0cnVlLCBkYXRlTkY6IFwiZGQvbW0veXl5eVwiIH0pO1xuICAgICAgICBjb25zdCB3b3Jrc2hlZXQgPSB4bHMuU2hlZXRzW3hscy5TaGVldE5hbWVzWzBdXTtcblxuICAgICAgICBsZXQganNvbkRhdGEgPSBYTFNYLnV0aWxzLnNoZWV0X3RvX2pzb24od29ya3NoZWV0LCB7XG4gICAgICAgICAgYmxhbmtyb3dzOiBmYWxzZSxcbiAgICAgICAgICByYXc6IGZhbHNlLFxuICAgICAgICAgIGRlZnZhbDogXCJcIixcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gd2UgcmVtb3ZlIGxpbmUgYnJlYWtzIGZyb20gYWxsIGtleXNcbiAgICAgICAganNvbkRhdGEgPSBqc29uRGF0YS5tYXAodXNlckRhdGEgPT4ge1xuICAgICAgICAgIHJldHVybiBbLi4uT2JqZWN0LmtleXModXNlckRhdGEpXS5yZWR1Y2UoKHJlcywga2V5KSA9PiB7XG4gICAgICAgICAgICByZXNba2V5LnJlcGxhY2UoL1tcXG5cXHJdKy9nLCBcIiBcIildID0gdXNlckRhdGFba2V5XTtcbiAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgICAgfSwge30pO1xuICAgICAgICB9KTtcblxuICAgICAgICBzZXRVc2VyU3RhdHVzQ2hlY2tlZChmYWxzZSk7XG4gICAgICAgIHNldFVzZXJzRGF0YShqc29uRGF0YSk7XG4gICAgICAgIGRpc3BhdGNoUnVucyh7XG4gICAgICAgICAgdHlwZTogXCJhcHBlbmRcIixcbiAgICAgICAgICBpdGVtOiB7XG4gICAgICAgICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxOSksXG4gICAgICAgICAgICBkdXJhdGlvbjogbmV3IERhdGUoKSAtIHN0YXJ0X3RpbWUsXG4gICAgICAgICAgICBmaWxlbmFtZTogZmlsZS5uYW1lLFxuICAgICAgICAgICAgZmlsZVNpemU6IGZpbGUuc2l6ZSxcbiAgICAgICAgICAgIGZpbGVMaW5lczoganNvbkRhdGEubGVuZ3RoLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9O1xuICAgICAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGZpbGUpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dCBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9IGhhbmRsZUZpbGU9e2hhbmRsZUZpbGV9PlxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+RXhww6lyaW1lbnRhdGlvbiBBcmRlbm5lczwvaDE+XG5cbiAgICAgICAgeyFpc0xvZ2dlZCAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jcmVhdGV9PlxuICAgICAgICAgICAgPExvZ2luRm9ybSBoYW5kbGVMb2dpbj17aGFuZGxlTG9naW59IHJkdlVybD17UkRWX1NPTElEQVJJVEVTX1VSTH0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cblxuICAgICAgICB7aXNMb2dnZWQgJiYgKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8RmlsZUhhbmRsZXJcbiAgICAgICAgICAgICAgaGFuZGxlRmlsZT17aGFuZGxlRmlsZX1cbiAgICAgICAgICAgICAgZmlsZVNpemU9e2ZpbGVTaXplfVxuICAgICAgICAgICAgICBwZW5kaW5nTWVzc2FnZT17XCJSw6ljdXDDqXJhdGlvbiBkZXMgaW5mb3JtYXRpb25zLCBtZXJjaSBkZSBwYXRpZW50ZXJcIn1cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIHt1c2Vyc0RhdGEgJiYgKFxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5zdWJ0aXRsZX0+QsOpbsOpZmljaWFpcmVzIFJTQTwvaDI+XG5cbiAgICAgICAgICAgICAgICB7dXNlcnNEYXRhLmxlbmd0aCA9PSAwICYmIChcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5BdWN1biBiw6luw6lmaWNpYWlyZSBkYW5zIGxlIGZpY2hpZXI8L3A+XG4gICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgIHt1c2Vyc0RhdGEubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5EYXRlPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+Tm9tPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+UHLDqW5vbTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPk1haWw8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5Uw6lsw6lwaG9uZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPklEIFJEVi1Tb2xpZGFyaXTDqXM8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj1cIjNcIj5JbnZpdGF0aW9uPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjb2xTcGFuPVwiMVwiPkRlcm5pZXIgZW52b2kgbGU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj1cIjFcIj5EYXRlIGQnaW5zY3JpcHRpb248L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj1cIjFcIj5BY3Rpb248L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiByZXZlcnNlIGVzdCB1dGlsaXPDqSBwb3VyIHF1ZSBsZXMgdXRpbGlzYXRldXJzIGxlcyBwbHVzIHLDqWNlbnRzIGFwcGFyYWlzc2VudCBlbiBoYXV0ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAge1suLi51c2Vyc0RhdGFdLnJldmVyc2UoKS5tYXAoKHVzZXIsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGcmFnbWVudCBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXNlcltcIkRBVEVcIl0gIT09IFwiXCIgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT57dXNlcltcIkRBVEVcIl19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+e3VzZXJbXCJOT01cIl19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+e3VzZXJbXCJQUkVOT01cIl19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+e3VzZXJbXCJNQUlMXCJdfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9Pnt1c2VyW1wiVEVMRVBIT05FXCJdfTwvdGQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3VzZXJbXCJJRCBSRFZcIl0gPT09IFwiXCIgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjcmVhdGVVc2VyKHVzZXIsIHVzZXJzRGF0YS5sZW5ndGggLSBpbmRleCAtIDEpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDcsOpZXIgdW4gY29tcHRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXNlcltcIklEIFJEVlwiXSAhPT0gXCJcIiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+e3VzZXJbXCJJRCBSRFZcIl19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+e3VzZXJbXCJEYXRlIGQnaW52aXRhdGlvblwiXX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT57dXNlcltcIkRhdGUgZCdpbnNjcmlwdGlvblwiXX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXNlcltcIklEIFJEVlwiXSAhPT0gXCJcIiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVJbnZpdGF0aW9uVXJsKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcltcIklEIFJEVlwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJzRGF0YS5sZW5ndGggLSBpbmRleCAtIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3VzZXJbXCJEYXRlIGQnaW52aXRhdGlvblwiXSAhPT0gXCJcIiAmJiBcIlJlZ8OpbsOpcmVyIGludml0YXRpb25cIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3VzZXJbXCJEYXRlIGQnaW52aXRhdGlvblwiXSA9PT0gXCJcIiAmJiBcIkfDqW7DqXJlciBpbnZpdGF0aW9uXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXNlcltcIklEIFJEVlwiXSA9PT0gXCJcIiAmJiA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT48L3RkPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259IG9uQ2xpY2s9e3dyaXRlRmlsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgUmVnw6luw6lyZXIgZmljaGllclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cblxuICAgICAgICA8Rm9vdGVyXG4gICAgICAgICAgc3ViamVjdD1cIkV4cMOpcmltZW50YXRpb24gQXJkZW5uZXNcIlxuICAgICAgICAgIHBvdXJxdW9pPVwiUXVlbCBlc3QgbCdvYmplY3RpZiBkZSBjZXR0ZSBleHDDqXJpbWVudGF0aW9uJm5ic3A7P1wiXG4gICAgICAgICAgdGV4dD17XG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5cbiAgICAgICAgICAgICAgICBGYWNpbGl0ZXIgbGUgdHJhdmFpbCBkZXMgYWdlbnRzIGR1IGTDqXBhcnRlbWVudCBldCB0ZXN0ZXIgbCd1dGlsaXNhdGlvbiBkZVxuICAgICAgICAgICAgICAgIGwnYXBwbGljYXRpb24gUkRWLVNvbGlkYXJpdMOpcyBwb3VyIGFjY8OpbMOpcmVyIGxhIHByaXNlIGR1IHByZW1pZXIgcmVuZGV6LXZvdXNcbiAgICAgICAgICAgICAgICBkJ29yaWVudGF0aW9uLlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICB9XG4gICAgICAgIC8+XG4gICAgICA8L21haW4+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9