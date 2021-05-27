webpackHotUpdate_N_E("pages/experimentations/ardennes-demo",{

/***/ "./components/fileHandler.js":
/*!***********************************!*\
  !*** ./components/fileHandler.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FileHandler; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _models_BaseFlux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/BaseFlux */ "./models/BaseFlux.js");
/* harmony import */ var _lib_dates__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/dates */ "./lib/dates.js");
/* harmony import */ var _pending__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pending */ "./components/pending.js");






var _jsxFileName = "/home/q/code/qblanc/beta.gouv/analyse-flux-insertion/components/fileHandler.js",
    _s = $RefreshSig$();






var DEFAULT_UPLOAD_MESSAGE = "Glissez et déposez le fichier à analyser ou sélectionnez le.";
var DEFAULT_PENDING_MESSAGE = "Calcul des statistiques en cours, merci de patienter";
function FileHandler(_ref) {
  _s();

  var handleFile = _ref.handleFile,
      fileSize = _ref.fileSize,
      _ref$multiple = _ref.multiple,
      multiple = _ref$multiple === void 0 ? true : _ref$multiple,
      _ref$sortFilesByFluxD = _ref.sortFilesByFluxDate,
      sortFilesByFluxDate = _ref$sortFilesByFluxD === void 0 ? false : _ref$sortFilesByFluxD,
      _ref$pendingMessage = _ref.pendingMessage,
      pendingMessage = _ref$pendingMessage === void 0 ? DEFAULT_PENDING_MESSAGE : _ref$pendingMessage,
      _ref$uploadMessage = _ref.uploadMessage,
      uploadMessage = _ref$uploadMessage === void 0 ? DEFAULT_UPLOAD_MESSAGE : _ref$uploadMessage;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      isPending = _useState[0],
      setIsPending = _useState[1];

  var handleUploads = function handleUploads(event) {
    var filesToHandle = event.target.files;
    setIsPending(true);
    sortFilesByFluxDate ? handleSortedFiles(filesToHandle) : handleFiles(filesToHandle);
    event.target.value = "";
  };

  var handleFiles = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(filesToHandle) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return Promise.all(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(filesToHandle).map( /*#__PURE__*/function () {
                var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(file) {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return handleFile(file);

                        case 2:
                          return _context.abrupt("return", _context.sent);

                        case 3:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));

                return function (_x2) {
                  return _ref3.apply(this, arguments);
                };
              }()));

            case 2:
              setIsPending(false);

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleFiles(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleSortedFiles = /*#__PURE__*/function () {
    var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4(filesToHandle) {
      var fluxDates, filesToProcess, sortedFilesToProcess;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              fluxDates = {};
              filesToProcess = [];
              _context4.next = 4;
              return Promise.all(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(filesToHandle).map( /*#__PURE__*/function () {
                var _ref5 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(file) {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          filesToProcess.push(file);
                          _context3.next = 3;
                          return retrieveFluxDate(file);

                        case 3:
                          fluxDates[file.name] = _context3.sent;

                        case 4:
                        case "end":
                          return _context3.stop();
                      }
                    }
                  }, _callee3);
                }));

                return function (_x4) {
                  return _ref5.apply(this, arguments);
                };
              }()));

            case 4:
              sortedFilesToProcess = filesToProcess.sort(function (firstFile, secondFile) {
                return Object(_lib_dates__WEBPACK_IMPORTED_MODULE_7__["applicationStringToDate"])(fluxDates[firstFile.name]) - Object(_lib_dates__WEBPACK_IMPORTED_MODULE_7__["applicationStringToDate"])(fluxDates[secondFile.name]);
              });
              handleFiles(sortedFilesToProcess);

            case 6:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function handleSortedFiles(_x3) {
      return _ref4.apply(this, arguments);
    };
  }();

  var retrieveFluxDate = /*#__PURE__*/function () {
    var _ref6 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5(file) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              return _context5.abrupt("return", new Promise(function (resolve) {
                var reader = new FileReader();

                reader.onload = function (event) {
                  var flux = new _models_BaseFlux__WEBPACK_IMPORTED_MODULE_6__["default"](event.target.result);
                  resolve(flux.creationDate);
                };

                reader.readAsText(file);
              }));

            case 1:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function retrieveFluxDate(_x5) {
      return _ref6.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.description,
      children: [uploadMessage, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "file",
        onChange: handleUploads,
        multiple: multiple
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, this), isPending && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pending__WEBPACK_IMPORTED_MODULE_8__["default"], {
      message: pendingMessage,
      fileSize: fileSize
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 21
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.description,
      children: ["Les op\xE9rations sont toutes r\xE9alis\xE9es sur votre ordinateur.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, this), "Aucune donn\xE9e personnelle n'est transf\xE9r\xE9e."]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(FileHandler, "BV735XcKKwNWV9P4vvxe7KSLYJU=");

_c = FileHandler;

var _c;

$RefreshReg$(_c, "FileHandler");

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







var _jsxFileName = "/home/q/code/qblanc/beta.gouv/analyse-flux-insertion/pages/experimentations/ardennes/index.js",
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
              _context5.next = 4;
              return Object(_lib_appFetch__WEBPACK_IMPORTED_MODULE_13__["appFetch"])(userUrl, token, "POST", JSON.stringify(user));

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
                  var xls = xlsx__WEBPACK_IMPORTED_MODULE_7__["read"](fileData, {
                    type: "array",
                    cellDates: true,
                    dateNF: "dd/mm/yyyy"
                  });
                  var worksheet = xls.Sheets[xls.SheetNames[0]]; // Limiter la capture aux colonnes A-V

                  var range = xlsx__WEBPACK_IMPORTED_MODULE_7__["utils"].decode_range(worksheet["!ref"]);
                  range.s.c = 0; // 0 == XLSX.utils.decode_col("A")

                  range.e.c = 24; // 24 == XLSX.utils.decode_col("Y")

                  var new_range = xlsx__WEBPACK_IMPORTED_MODULE_7__["utils"].encode_range(range);
                  var jsonData = xlsx__WEBPACK_IMPORTED_MODULE_7__["utils"].sheet_to_json(worksheet, {
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
        lineNumber: 211,
        columnNumber: 9
      }, this), !isLogged && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.create,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_loginForm__WEBPACK_IMPORTED_MODULE_11__["default"], {
          handleLogin: handleLogin,
          rdvUrl: RDV_SOLIDARITES_URL
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 11
      }, this), isLogged && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_fileHandler__WEBPACK_IMPORTED_MODULE_9__["default"], {
          handleFile: handleFile,
          fileSize: fileSize,
          pendingMessage: "Récupération des informations, merci de patienter"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 221,
          columnNumber: 13
        }, this), usersData && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.subtitle,
            children: "B\xE9n\xE9ficiaires RSA"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 229,
            columnNumber: 17
          }, this), usersData.length == 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.description,
            children: "Aucun b\xE9n\xE9ficiaire dans le fichier"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 232,
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
                    lineNumber: 240,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    rowSpan: "2",
                    children: "Nom"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 241,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    rowSpan: "2",
                    children: "Pr\xE9nom"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 242,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    rowSpan: "2",
                    children: "Mail"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 243,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    rowSpan: "2",
                    children: "T\xE9l\xE9phone"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 244,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    rowSpan: "2",
                    children: "ID RDV-Solidarit\xE9s"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 245,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    colSpan: "3",
                    children: "Invitation"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 246,
                    columnNumber: 27
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 239,
                  columnNumber: 25
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    colSpan: "1",
                    children: "Dernier envoi le"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 249,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    colSpan: "1",
                    children: "Date d'inscription"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 250,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    colSpan: "1",
                    children: "Action"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 251,
                    columnNumber: 27
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 248,
                  columnNumber: 25
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 238,
                columnNumber: 23
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
                children: Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(usersData).reverse().map(function (user, index) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
                    children: user["DATE"] !== "" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center,
                        children: user["DATE"]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 260,
                        columnNumber: 33
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center,
                        children: user["NOM"]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 261,
                        columnNumber: 33
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center,
                        children: user["PRENOM"]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 262,
                        columnNumber: 33
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center,
                        children: user["MAIL"]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 263,
                        columnNumber: 33
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center,
                        children: user["TELEPHONE"]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 264,
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
                          lineNumber: 268,
                          columnNumber: 37
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 267,
                        columnNumber: 35
                      }, _this), user["ID RDV"] !== "" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center,
                        children: user["ID RDV"]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 276,
                        columnNumber: 35
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center,
                        children: user["Date d'invitation"]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 278,
                        columnNumber: 33
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center,
                        children: user["Date d'inscription"]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 279,
                        columnNumber: 33
                      }, _this), user["ID RDV"] !== "" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center,
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                          onClick: function onClick() {
                            return generateInvitationUrl(user["ID RDV"], index);
                          },
                          children: [user["Date d'invitation"] !== "" && "Regénérer invitation", user["Date d'invitation"] === "" && "Générer invitation"]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 282,
                          columnNumber: 37
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 281,
                        columnNumber: 35
                      }, _this), user["ID RDV"] === "" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 290,
                        columnNumber: 59
                      }, _this)]
                    }, index, true, {
                      fileName: _jsxFileName,
                      lineNumber: 259,
                      columnNumber: 31
                    }, _this)
                  }, void 0, false);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 254,
                columnNumber: 23
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 237,
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
      lineNumber: 210,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 209,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9maWxlSGFuZGxlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbW9kZWxzL0FwcGxpY2FudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbW9kZWxzL0FwcGxpY2F0aW9uLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9leHBlcmltZW50YXRpb25zL2FyZGVubmVzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkRFRkFVTFRfVVBMT0FEX01FU1NBR0UiLCJERUZBVUxUX1BFTkRJTkdfTUVTU0FHRSIsIkZpbGVIYW5kbGVyIiwiaGFuZGxlRmlsZSIsImZpbGVTaXplIiwibXVsdGlwbGUiLCJzb3J0RmlsZXNCeUZsdXhEYXRlIiwicGVuZGluZ01lc3NhZ2UiLCJ1cGxvYWRNZXNzYWdlIiwidXNlU3RhdGUiLCJpc1BlbmRpbmciLCJzZXRJc1BlbmRpbmciLCJoYW5kbGVVcGxvYWRzIiwiZXZlbnQiLCJmaWxlc1RvSGFuZGxlIiwidGFyZ2V0IiwiZmlsZXMiLCJoYW5kbGVTb3J0ZWRGaWxlcyIsImhhbmRsZUZpbGVzIiwidmFsdWUiLCJQcm9taXNlIiwiYWxsIiwibWFwIiwiZmlsZSIsImZsdXhEYXRlcyIsImZpbGVzVG9Qcm9jZXNzIiwicHVzaCIsInJldHJpZXZlRmx1eERhdGUiLCJuYW1lIiwic29ydGVkRmlsZXNUb1Byb2Nlc3MiLCJzb3J0IiwiZmlyc3RGaWxlIiwic2Vjb25kRmlsZSIsImFwcGxpY2F0aW9uU3RyaW5nVG9EYXRlIiwicmVzb2x2ZSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJmbHV4IiwiQmFzZUZsdXgiLCJyZXN1bHQiLCJjcmVhdGlvbkRhdGUiLCJyZWFkQXNUZXh0Iiwic3R5bGVzIiwiZGVzY3JpcHRpb24iLCJBcHBsaWNhbnQiLCJkb20iLCJyc2FBcHBsaWNhdGlvbk51bWJlciIsInNvY2lhbFNlY3VyaXR5TnVtYmVyIiwibGFzdE5hbWUiLCJmaXJzdE5hbWUiLCJyb2xlIiwiY29udGFjdEluZm9zIiwicGhvbmVOdW1iZXIiLCJlbWFpbEFkZHJlc3MiLCJ0b3BFbnRyYW50IiwiYXBwbGljYXRpb24iLCJlbGlnaWJsZUFzTmV3Iiwid2l0aERyb2l0c0V0RGV2b2lycyIsImVsaWdpYmxlQXNOZXdJbkZveWVyIiwiaW5Gb3llcldpdGhEcm9pdHNFdERldm9pcnMiLCJpbmNsdWRlcyIsInRvcEZveWVyRHJvaXRzRXREZXZvaXJzIiwidG9wRHJvaXRzRXREZXZvaXJzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJpbm5lckhUTUwiLCJBcHBsaWNhdGlvbiIsInBhcmVudE5vZGUiLCJzdGF0dXNDb2RlIiwic3VzcGVuc2lvbk1vdGl2ZSIsInNwbGl0Iiwiam9pbiIsIkVMSUdJQkxFX1NVU1BFTlNJT05fTU9USVZFUyIsIndpdGhEcm9pdHNPdXZlcnRzRXRWZXJzYWJsZXMiLCJ3aXRoRHJvaXRzT3V2ZXJ0c1N1c3BlbmR1IiwiZW1haWxBdXRob3JpemF0aW9uIiwicGhvbmVBdXRob3JpemF0aW9uIiwiYXBwbGljYW50cyIsInNvbWUiLCJhcHBsaWNhbnQiLCJzb2Npb1Byb2Zlc3Npb25hbERhdGEiLCJhcHBsaWNhbnREb20iLCJyZWR1Y2VyIiwicmVkdWNlckZhY3RvcnkiLCJBcmRlbm5lcyIsInJvdXRlciIsInVzZVJvdXRlciIsImlzRGVtbyIsInBhdGhuYW1lIiwiZGV2TW9kZSIsIm9yZ2FJRCIsInByb2Nlc3MiLCJSRFZfU09MSURBUklURVNfVVJMIiwidXNlclVybCIsImRldkZpbGUiLCJzZXREZXZGaWxlIiwidXNlUmVkdWNlciIsImluaXRSZWR1Y2VyIiwicnVucyIsImRpc3BhdGNoUnVucyIsInVzZXJzRGF0YSIsInNldFVzZXJzRGF0YSIsInVzZXJTdGF0dXNDaGVja2VkIiwic2V0VXNlclN0YXR1c0NoZWNrZWQiLCJzZXRGaWxlU2l6ZSIsImlzTG9nZ2VkIiwic2V0SXNMb2dnZWQiLCJ0b2tlbklkIiwidWlkIiwiY2xpZW50IiwidG9rZW4iLCJzZXRUb2tlbiIsInVzZUVmZmVjdCIsImZvckVhY2giLCJ1c2VyIiwidXNlckluZGV4IiwiY2hlY2tVc2VySW52aXRhdGlvblN0YXR1cyIsIndyaXRlRmlsZSIsIm91dFdvcmtib29rIiwiWExTWCIsImJvb2tfbmV3Iiwib3V0V29ya3NoZWV0IiwianNvbl90b19zaGVldCIsImJvb2tfYXBwZW5kX3NoZWV0IiwiZ2V0RGF0ZVRpbWVTdHJpbmciLCJEYXRlIiwiZ2VuZXJhdGVJbnZpdGF0aW9uVXJsIiwidXNlcklkIiwiaW52aXRhdGlvblVybCIsImFwcEZldGNoIiwibmV3VXNlcnNEYXRhIiwiaW52aXRhdGlvbl91cmwiLCJpbnZpdGF0aW9uX3Rva2VuIiwiZ2V0RnJlbmNoRm9ybWF0RGF0ZVN0cmluZyIsImdldFVzZXIiLCJnZXRVc2VyVXJsIiwiaW52aXRhdGlvbl9jcmVhdGVkX2F0IiwiaW52aXRhdGlvbl9kYXRlIiwic3Vic3RyaW5nIiwiaW52aXRhdGlvbl9hY2NlcHRlZF9hdCIsImluc2NyaXB0aW9uX2RhdGUiLCJjcmVhdGVVc2VyIiwidXNlckRhdGEiLCJhZGRyZXNzIiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsImVtYWlsIiwicGhvbmVfbnVtYmVyIiwicmVwbGFjZSIsImJpcnRoX2RhdGUiLCJzdHJpbmdUb0RhdGUiLCJjYWlzc2VfYWZmaWxpYXRpb24iLCJhZmZpbGlhdGlvbl9udW1iZXIiLCJvcmdhbmlzYXRpb25faWRzIiwiSlNPTiIsInN0cmluZ2lmeSIsImlkIiwiZXJyb3JzIiwiZXJyb3IiLCJhbGVydCIsImJhc2UiLCJoYW5kbGVMb2dpbiIsInNpemUiLCJzdGFydF90aW1lIiwiZmlsZURhdGEiLCJVaW50OEFycmF5IiwieGxzIiwidHlwZSIsImNlbGxEYXRlcyIsImRhdGVORiIsIndvcmtzaGVldCIsIlNoZWV0cyIsIlNoZWV0TmFtZXMiLCJyYW5nZSIsImRlY29kZV9yYW5nZSIsInMiLCJjIiwiZSIsIm5ld19yYW5nZSIsImVuY29kZV9yYW5nZSIsImpzb25EYXRhIiwic2hlZXRfdG9fanNvbiIsImJsYW5rcm93cyIsInJhdyIsImRlZnZhbCIsIk9iamVjdCIsImtleXMiLCJyZWR1Y2UiLCJyZXMiLCJrZXkiLCJpdGVtIiwidGltZXN0YW1wIiwidG9JU09TdHJpbmciLCJzbGljZSIsImR1cmF0aW9uIiwiZmlsZW5hbWUiLCJmaWxlTGluZXMiLCJsZW5ndGgiLCJyZWFkQXNBcnJheUJ1ZmZlciIsImNvbnRhaW5lciIsIm1haW4iLCJ0aXRsZSIsImNyZWF0ZSIsInN1YnRpdGxlIiwicmV2ZXJzZSIsImluZGV4IiwiY2VudGVyIiwiYnV0dG9uIiwidGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxzQkFBc0IsR0FBRyw4REFBL0I7QUFDQSxJQUFNQyx1QkFBdUIsR0FBRyxzREFBaEM7QUFFZSxTQUFTQyxXQUFULE9BT1o7QUFBQTs7QUFBQSxNQU5EQyxVQU1DLFFBTkRBLFVBTUM7QUFBQSxNQUxEQyxRQUtDLFFBTERBLFFBS0M7QUFBQSwyQkFKREMsUUFJQztBQUFBLE1BSkRBLFFBSUMsOEJBSlUsSUFJVjtBQUFBLG1DQUhEQyxtQkFHQztBQUFBLE1BSERBLG1CQUdDLHNDQUhxQixLQUdyQjtBQUFBLGlDQUZEQyxjQUVDO0FBQUEsTUFGREEsY0FFQyxvQ0FGZ0JOLHVCQUVoQjtBQUFBLGdDQURETyxhQUNDO0FBQUEsTUFEREEsYUFDQyxtQ0FEZVIsc0JBQ2Y7O0FBQUEsa0JBQ2lDUyxzREFBUSxDQUFDLEtBQUQsQ0FEekM7QUFBQSxNQUNNQyxTQUROO0FBQUEsTUFDaUJDLFlBRGpCOztBQUdELE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQUMsS0FBSyxFQUFJO0FBQzdCLFFBQUlDLGFBQWEsR0FBR0QsS0FBSyxDQUFDRSxNQUFOLENBQWFDLEtBQWpDO0FBQ0FMLGdCQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0FMLHVCQUFtQixHQUFHVyxpQkFBaUIsQ0FBQ0gsYUFBRCxDQUFwQixHQUFzQ0ks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RkosbUNBRDRCO0FBQUEsaUJBQTdCO0FBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBOERFO0FBQVEsdUJBQVMsRUFBRWxLLCtEQUFNLENBQUNvSyxNQUExQjtBQUFrQyxxQkFBTyxFQUFFMUYsU0FBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBOURGO0FBQUEsMEJBUko7QUFBQSx3QkFSSjtBQUFBLHNCQVZKLGVBa0dFLHFFQUFDLDJEQUFEO0FBQ0UsZUFBTyxFQUFDLDZCQURWO0FBRUUsZ0JBQVEsRUFBQyxzREFGWDtBQUdFLFlBQUksZUFDRjtBQUFBLGlDQUNFO0FBQUcscUJBQVMsRUFBRTFFLCtEQUFNLENBQUNxSyxJQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWxHRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFvSEQ7O0dBblR1QjVILFE7VUFDUEUscUQ7OztLQURPRixRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2V4cGVyaW1lbnRhdGlvbnMvYXJkZW5uZXMtZGVtby5lM2M3YWNkYzg2OTI2YzY4NGZjOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuaW1wb3J0IEJhc2VGbHV4IGZyb20gXCIuLi9tb2RlbHMvQmFzZUZsdXhcIjtcbmltcG9ydCB7IGFwcGxpY2F0aW9uU3RyaW5nVG9EYXRlIH0gZnJvbSBcIi4uL2xpYi9kYXRlc1wiO1xuaW1wb3J0IFBlbmRpbmdNZXNzYWdlIGZyb20gXCIuL3BlbmRpbmdcIjtcblxuY29uc3QgREVGQVVMVF9VUExPQURfTUVTU0FHRSA9IFwiR2xpc3NleiBldCBkw6lwb3NleiBsZSBmaWNoaWVyIMOgIGFuYWx5c2VyIG91IHPDqWxlY3Rpb25uZXogbGUuXCI7XG5jb25zdCBERUZBVUxUX1BFTkRJTkdfTUVTU0FHRSA9IFwiQ2FsY3VsIGRlcyBzdGF0aXN0aXF1ZXMgZW4gY291cnMsIG1lcmNpIGRlIHBhdGllbnRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGaWxlSGFuZGxlcih7XG4gIGhhbmRsZUZpbGUsXG4gIGZpbGVTaXplLFxuICBtdWx0aXBsZSA9IHRydWUsXG4gIHNvcnRGaWxlc0J5Rmx1eERhdGUgPSBmYWxzZSxcbiAgcGVuZGluZ01lc3NhZ2UgPSBERUZBVUxUX1BFTkRJTkdfTUVTU0FHRSxcbiAgdXBsb2FkTWVzc2FnZSA9IERFRkFVTFRfVVBMT0FEX01FU1NBR0UsXG59KSB7XG4gIGNvbnN0IFtpc1BlbmRpbmcsIHNldElzUGVuZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlVXBsb2FkcyA9IGV2ZW50ID0+IHtcbiAgICBsZXQgZmlsZXNUb0hhbmRsZSA9IGV2ZW50LnRhcmdldC5maWxlcztcbiAgICBzZXRJc1BlbmRpbmcodHJ1ZSk7XG4gICAgc29ydEZpbGVzQnlGbHV4RGF0ZSA/IGhhbmRsZVNvcnRlZEZpbGVzKGZpbGVzVG9IYW5kbGUpIDogaGFuZGxlRmlsZXMoZmlsZXNUb0hhbmRsZSk7XG5cbiAgICBldmVudC50YXJnZXQudmFsdWUgPSBcIlwiO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUZpbGVzID0gYXN5bmMgZmlsZXNUb0hhbmRsZSA9PiB7XG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoWy4uLmZpbGVzVG9IYW5kbGVdLm1hcChhc3luYyBmaWxlID0+IGF3YWl0IGhhbmRsZUZpbGUoZmlsZSkpKTtcbiAgICBzZXRJc1BlbmRpbmcoZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVNvcnRlZEZpbGVzID0gYXN5bmMgZmlsZXNUb0hhbmRsZSA9PiB7XG4gICAgbGV0IGZsdXhEYXRlcyA9IHt9O1xuICAgIGNvbnN0IGZpbGVzVG9Qcm9jZXNzID0gW107XG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICBbLi4uZmlsZXNUb0hhbmRsZV0ubWFwKGFzeW5jIGZpbGUgPT4ge1xuICAgICAgICBmaWxlc1RvUHJvY2Vzcy5wdXNoKGZpbGUpO1xuICAgICAgICBmbHV4RGF0ZXNbZmlsZS5uYW1lXSA9IGF3YWl0IHJldHJpZXZlRmx1eERhdGUoZmlsZSk7XG4gICAgICB9KVxuICAgICk7XG4gICAgY29uc3Qgc29ydGVkRmlsZXNUb1Byb2Nlc3MgPSBmaWxlc1RvUHJvY2Vzcy5zb3J0KGZ1bmN0aW9uIChmaXJzdEZpbGUsIHNlY29uZEZpbGUpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIGFwcGxpY2F0aW9uU3RyaW5nVG9EYXRlKGZsdXhEYXRlc1tmaXJzdEZpbGUubmFtZV0pIC1cbiAgICAgICAgYXBwbGljYXRpb25TdHJpbmdUb0RhdGUoZmx1eERhdGVzW3NlY29uZEZpbGUubmFtZV0pXG4gICAgICApO1xuICAgIH0pO1xuICAgIGhhbmRsZUZpbGVzKHNvcnRlZEZpbGVzVG9Qcm9jZXNzKTtcbiAgfTtcblxuICBjb25zdCByZXRyaWV2ZUZsdXhEYXRlID0gYXN5bmMgZmlsZSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgZmx1eCA9IG5ldyBCYXNlRmx1eChldmVudC50YXJnZXQucmVzdWx0KTtcbiAgICAgICAgcmVzb2x2ZShmbHV4LmNyZWF0aW9uRGF0ZSk7XG4gICAgICB9O1xuICAgICAgcmVhZGVyLnJlYWRBc1RleHQoZmlsZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxuICAgICAgICB7dXBsb2FkTWVzc2FnZX1cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG9uQ2hhbmdlPXtoYW5kbGVVcGxvYWRzfSBtdWx0aXBsZT17bXVsdGlwbGV9IC8+XG4gICAgICA8L3A+XG5cbiAgICAgIHtpc1BlbmRpbmcgJiYgPFBlbmRpbmdNZXNzYWdlIG1lc3NhZ2U9e3BlbmRpbmdNZXNzYWdlfSBmaWxlU2l6ZT17ZmlsZVNpemV9IC8+fVxuXG4gICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgIExlcyBvcMOpcmF0aW9ucyBzb250IHRvdXRlcyByw6lhbGlzw6llcyBzdXIgdm90cmUgb3JkaW5hdGV1ci5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIEF1Y3VuZSBkb25uw6llIHBlcnNvbm5lbGxlIG4nZXN0IHRyYW5zZsOpcsOpZS5cbiAgICAgIDwvcD5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsImltcG9ydCBBcHBsaWNhdGlvbiBmcm9tIFwiLi9BcHBsaWNhdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHBsaWNhbnQge1xuICBjb25zdHJ1Y3Rvcihkb20pIHtcbiAgICB0aGlzLmRvbSA9IGRvbTtcbiAgfVxuXG4gIGdldCBsYXN0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kb20uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJOT01cIilbMF0/LmlubmVySFRNTDtcbiAgfVxuXG4gIGdldCBmaXJzdE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiUFJFTk9NXCIpWzBdPy5pbm5lckhUTUw7XG4gIH1cblxuICBnZXQgcm9sZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kb20uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJST0xFUEVSU1wiKVswXT8uaW5uZXJIVE1MO1xuICB9XG5cbiAgZ2V0IHRvcEVudHJhbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiVE9QUEVSU0VOVERST0RFVk9SU0FcIilbMF0/LmlubmVySFRNTDtcbiAgfVxuXG4gIGdldCB0b3BEcm9pdHNFdERldm9pcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiVE9QUEVSU0RST0RFVk9SU0FcIilbMF0/LmlubmVySFRNTDtcbiAgfVxuXG4gIGdldCBzb2Npb1Byb2Zlc3Npb25hbERhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiRG9ubmVlc1NvY2lvUHJvZmVzc2lvbm5lbGxlc1wiKVswXT8uaW5uZXJIVE1MO1xuICB9XG5cbiAgZ2V0IG5hdGlvbmFsaXR5KCkge1xuICAgIHJldHVybiB0aGlzLmRvbS5nZXRFbGVtZW50c0J5VGFnTmFtZShcIk5BVElcIilbMF0/LmlubmVySFRNTDtcbiAgfVxuXG4gIGdldCBhY3Rpdml0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5kb20uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJBQ1RcIilbMF0/LmlubmVySFRNTDtcbiAgfVxuXG4gIGdldCBzb2NpYWxTZWN1cml0eU51bWJlcigpIHtcbiAgICByZXR1cm4gdGhpcy5kb20uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJOSVJcIilbMF0/LmlubmVySFRNTDtcbiAgfVxuXG4gIGdldCBhcHBsaWNhdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IEFwcGxpY2F0aW9uKHRoaXMuZG9tLnBhcmVudE5vZGUpO1xuICB9XG5cbiAgZ2V0IHJzYUFwcGxpY2F0aW9uTnVtYmVyKCkge1xuICAgIHJldHVybiB0aGlzLmFwcGxpY2F0aW9uLnJzYUFwcGxpY2F0aW9uTnVtYmVyO1xuICB9XG5cbiAgZ2V0IGVtYWlsQWRkcmVzcygpIHtcbiAgICByZXR1cm4gdGhpcy5hcHBsaWNhdGlvbi5lbWFpbEFkZHJlc3M7XG4gIH1cblxuICBnZXQgYXBwbGljYXRpb25TdGF0dXNDb2RlKCkge1xuICAgIHJldHVybiB0aGlzLmFwcGxpY2F0aW9uLnN0YXR1c0NvZGU7XG4gIH1cblxuICBnZXQgYXBwbGljYXRpb25TdXNwZW5zaW9uTW90aXZlKCkge1xuICAgIHJldHVybiB0aGlzLmFwcGxpY2F0aW9uLnN1c3BlbnNpb25Nb3RpdmU7XG4gIH1cblxuICBnZXQgcGhvbmVOdW1iZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXBwbGljYXRpb24ucGhvbmVOdW1iZXI7XG4gIH1cblxuICBnZXQgdG9wRm95ZXJEcm9pdHNFdERldm9pcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXBwbGljYXRpb24udG9wRm95ZXJEcm9pdHNFdERldm9pcnM7XG4gIH1cblxuICAvLyBzdHJpbmcgdXNlZCB0byBpZGVudGlmeSBhcHBsaWNhbnRzXG4gIGdldCBpZCgpIHtcbiAgICByZXR1cm4gW1xuICAgICAgdGhpcy5yc2FBcHBsaWNhdGlvbk51bWJlcixcbiAgICAgIHRoaXMubGFzdE5hbWUuc3BsaXQoXCIgXCIpLmpvaW4oXCItXCIpLFxuICAgICAgdGhpcy5maXJzdE5hbWUuc3BsaXQoXCIgXCIpLmpvaW4oXCItXCIpLFxuICAgICAgdGhpcy5yb2xlLFxuICAgIF0uam9pbihcIi1cIik7XG4gIH1cblxuICBwZXJzb25hbERhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJzYUFwcGxpY2F0aW9uTnVtYmVyOiB0aGlzLnJzYUFwcGxpY2F0aW9uTnVtYmVyLFxuICAgICAgc29jaWFsU2VjdXJpdHlOdW1iZXI6IHRoaXMuc29jaWFsU2VjdXJpdHlOdW1iZXIsXG4gICAgICBsYXN0TmFtZTogdGhpcy5sYXN0TmFtZSxcbiAgICAgIGZpcnN0TmFtZTogdGhpcy5maXJzdE5hbWUsXG4gICAgICByb2xlOiB0aGlzLnJvbGUsXG4gICAgICAuLi50aGlzLmNvbnRhY3RJbmZvcygpLFxuICAgIH07XG4gIH1cblxuICBjb250YWN0SW5mb3MoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLih0aGlzLnBob25lTnVtYmVyICYmIHsgcGhvbmVOdW1iZXI6IHRoaXMucGhvbmVOdW1iZXIgfSksXG4gICAgICAuLi4odGhpcy5lbWFpbEFkZHJlc3MgJiYgeyBlbWFpbEFkZHJlc3M6IHRoaXMuZW1haWxBZGRyZXNzIH0pLFxuICAgIH07XG4gIH1cblxuICBpc1RvcEVudHJhbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9wRW50cmFudCA9PT0gXCIxXCI7XG4gIH1cblxuICBlbGlnaWJsZUFzTmV3KCkge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmFwcGxpY2F0aW9uLmVsaWdpYmxlQXNOZXcoKSAmJlxuICAgICAgKHRoaXMud2l0aERyb2l0c0V0RGV2b2lycygpIHx8IHRoaXMuZWxpZ2libGVBc05ld0luRm95ZXIoKSlcbiAgICApO1xuICB9XG5cbiAgZWxpZ2libGVBc05ld0luRm95ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5Gb3llcldpdGhEcm9pdHNFdERldm9pcnMoKSAmJiBbXCJFTkZcIiwgXCJBVVRcIl0uaW5jbHVkZXModGhpcy5yb2xlKTtcbiAgfVxuXG4gIGluRm95ZXJXaXRoRHJvaXRzRXREZXZvaXJzKCkge1xuICAgIHJldHVybiB0aGlzLnRvcEZveWVyRHJvaXRzRXREZXZvaXJzID09PSBcIjFcIjtcbiAgfVxuXG4gIHdpdGhEcm9pdHNFdERldm9pcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9wRHJvaXRzRXREZXZvaXJzID09PSBcIjFcIjtcbiAgfVxufVxuIiwiaW1wb3J0IEFwcGxpY2FudCBmcm9tIFwiLi9BcHBsaWNhbnRcIjtcblxuY29uc3QgRUxJR0lCTEVfU1VTUEVOU0lPTl9NT1RJVkVTID0gW1wiMDFcIiwgXCIwNVwiLCBcIjA2XCIsIFwiMzVcIiwgXCIzNlwiXTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwbGljYXRpb24ge1xuICBjb25zdHJ1Y3Rvcihkb20pIHtcbiAgICB0aGlzLmRvbSA9IGRvbTtcbiAgfVxuXG4gIGdldCBlbWFpbEFkZHJlc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiQURSRUxFQ1wiKVswXT8uaW5uZXJIVE1MO1xuICB9XG5cbiAgZ2V0IHBob25lTnVtYmVyKCkge1xuICAgIHJldHVybiB0aGlzLmRvbS5nZXRFbGVtZW50c0J5VGFnTmFtZShcIk5VTVRFTFwiKVswXT8uaW5uZXJIVE1MO1xuICB9XG5cbiAgZ2V0IHJzYUFwcGxpY2F0aW9uTnVtYmVyKCkge1xuICAgIHJldHVybiB0aGlzLmRvbS5nZXRFbGVtZW50c0J5VGFnTmFtZShcIk5VTURFTVJTQVwiKVswXT8uaW5uZXJIVE1MO1xuICB9XG5cbiAgZ2V0IHBob25lQXV0aG9yaXphdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5kb20uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJBVVRPUlVUSVRFTFwiKVswXT8uaW5uZXJIVE1MO1xuICB9XG5cbiAgZ2V0IGVtYWlsQXV0aG9yaXphdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5kb20uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJBVVRPUlVUSUFEUkVMRUNcIilbMF0/LmlubmVySFRNTDtcbiAgfVxuXG4gIGdldCBkYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmRvbS5nZXRFbGVtZW50c0J5VGFnTmFtZShcIkRUREVNUlNBXCIpWzBdPy5pbm5lckhUTUw7XG4gIH1cblxuICBnZXQgc3RhdHVzQ29kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kb20uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJFVEFURE9TUlNBXCIpWzBdPy5pbm5lckhUTUw7XG4gIH1cblxuICBnZXQgc3VzcGVuc2lvbk1vdGl2ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kb20uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJNT1RJU1VTVkVSU1JTQVwiKVswXT8uaW5uZXJIVE1MO1xuICB9XG5cbiAgZ2V0IGFwcGxpY2FudHMoKSB7XG4gICAgcmV0dXJuIFsuLi50aGlzLmRvbS5nZXRFbGVtZW50c0J5VGFnTmFtZShcIlBlcnNvbm5lXCIpXS5tYXAoYXBwbGljYW50RG9tID0+IHtcbiAgICAgIHJldHVybiBuZXcgQXBwbGljYW50KGFwcGxpY2FudERvbSk7XG4gICAgfSk7XG4gIH1cblxuICBnZXQgdG9wRm95ZXJEcm9pdHNFdERldm9pcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiVE9QRk9ZRFJPREVWT1JTQVwiKVswXT8uaW5uZXJIVE1MO1xuICB9XG5cbiAgZWxpZ2libGVBc05ldygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy53aXRoRHJvaXRzT3V2ZXJ0c0V0VmVyc2FibGVzKCkgfHxcbiAgICAgICh0aGlzLndpdGhEcm9pdHNPdXZlcnRzU3VzcGVuZHUoKSAmJlxuICAgICAgICBFTElHSUJMRV9TVVNQRU5TSU9OX01PVElWRVMuaW5jbHVkZXModGhpcy5zdXNwZW5zaW9uTW90aXZlKSlcbiAgICApO1xuICB9XG5cbiAgd2l0aFVzYWJsZUVtYWlsKCkge1xuICAgIHJldHVybiB0aGlzLmVtYWlsQWRkcmVzcyAmJiB0aGlzLmVtYWlsQXV0aG9yaXphdGlvbiA9PT0gXCJBXCI7XG4gIH1cblxuICB3aXRoRm9yYmlkZGVuRW1haWxVc2FnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5lbWFpbEFkZHJlc3MgJiYgdGhpcy5lbWFpbEF1dGhvcml6YXRpb24gPT09IFwiUlwiO1xuICB9XG5cbiAgd2l0aG91dEVtYWlsVXNhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZW1haWxBZGRyZXNzICYmIHRoaXMuZW1haWxBdXRob3JpemF0aW9uID09PSBcIklcIjtcbiAgfVxuXG4gIHdpdGhVc2FibGVQaG9uZSgpIHtcbiAgICByZXR1cm4gdGhpcy5waG9uZU51bWJlciAmJiB0aGlzLnBob25lQXV0aG9yaXphdGlvbiA9PT0gXCJBXCI7XG4gIH1cblxuICB3aXRoRm9yYmlkZGVuUGhvbmVVc2FnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5waG9uZU51bWJlciAmJiB0aGlzLnBob25lQXV0aG9yaXphdGlvbiA9PT0gXCJSXCI7XG4gIH1cblxuICB3aXRob3V0UGhvbmVVc2FnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5waG9uZU51bWJlciAmJiB0aGlzLnBob25lQXV0aG9yaXphdGlvbiA9PT0gXCJJXCI7XG4gIH1cblxuICB3aXRoRHJvaXRzT3V2ZXJ0c0V0VmVyc2FibGVzKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXR1c0NvZGUgPT09IFwiMlwiO1xuICB9XG5cbiAgd2l0aERyb2l0c091dmVydHNTdXNwZW5kdSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0dXNDb2RlID09PSBcIjRcIjtcbiAgfVxuXG4gIHdpdGhEU1AoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXBwbGljYW50cy5zb21lKGFwcGxpY2FudCA9PiBhcHBsaWNhbnQuc29jaW9Qcm9mZXNzaW9uYWxEYXRhKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVkdWNlciB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgKiBhcyBYTFNYIGZyb20gXCJ4bHN4XCI7XG5cbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0XCI7XG5pbXBvcnQgRmlsZUhhbmRsZXIgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvZmlsZUhhbmRsZXJcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvZm9vdGVyXCI7XG5pbXBvcnQgTG9naW5Gb3JtIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2xvZ2luRm9ybVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuXG5pbXBvcnQgeyBhcHBGZXRjaCB9IGZyb20gXCIuLi8uLi8uLi9saWIvYXBwRmV0Y2hcIjtcbmltcG9ydCB7IGluaXRSZWR1Y2VyLCByZWR1Y2VyRmFjdG9yeSB9IGZyb20gXCIuLi8uLi8uLi9saWIvcmVkdWNlckZhY3RvcnlcIjtcbmltcG9ydCB7IGdldERhdGVUaW1lU3RyaW5nLCBnZXRGcmVuY2hGb3JtYXREYXRlU3RyaW5nLCBzdHJpbmdUb0RhdGUgfSBmcm9tIFwiLi4vLi4vLi4vbGliL2RhdGVzXCI7XG5cbmNvbnN0IHJlZHVjZXIgPSByZWR1Y2VyRmFjdG9yeShcIkV4cMOpcmltZW50YXRpb24gQXJkZW5uZXMgLSBDTkFGIC0gQsOpbsOpZmljaWFpcmVcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFyZGVubmVzKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgaXNEZW1vID0gcm91dGVyLnBhdGhuYW1lLmluY2x1ZGVzKFwiZGVtb1wiKTtcbiAgY29uc3QgZGV2TW9kZSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09IFwiZGV2ZWxvcG1lbnRcIjtcbiAgY29uc3Qgb3JnYUlEID0gaXNEZW1vXG4gICAgPyBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19PUkdBTklTQVRJT05fSURfREVNT1xuICAgIDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfT1JHQU5JU0FUSU9OX0lEX1BST0Q7XG5cbiAgY29uc3QgUkRWX1NPTElEQVJJVEVTX1VSTCA9IGlzRGVtb1xuICAgID8gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUkRWX1NPTElEQVJJVEVTX0RFTU9fVVJMXG4gICAgOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19SRFZfU09MSURBUklURVNfUFJPRF9VUkw7XG4gIGNvbnN0IHVzZXJVcmwgPSBSRFZfU09MSURBUklURVNfVVJMICsgXCIvYXBpL3YxL3VzZXJzXCI7XG5cbiAgY29uc3QgW2RldkZpbGUsIHNldERldkZpbGVdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtydW5zLCBkaXNwYXRjaFJ1bnNdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBbXSwgaW5pdFJlZHVjZXIpO1xuICBjb25zdCBbdXNlcnNEYXRhLCBzZXRVc2Vyc0RhdGFdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFt1c2VyU3RhdHVzQ2hlY2tlZCwgc2V0VXNlclN0YXR1c0NoZWNrZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZmlsZVNpemUsIHNldEZpbGVTaXplXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbaXNMb2dnZWQsIHNldElzTG9nZ2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Rva2VuLCBzZXRUb2tlbl0gPSB1c2VTdGF0ZSh7XG4gICAgdG9rZW5JZDogXCJcIixcbiAgICB1aWQ6IFwiXCIsXG4gICAgY2xpZW50OiBcIlwiLFxuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkZXZGaWxlKSB7XG4gICAgICBoYW5kbGVGaWxlKGRldkZpbGUpO1xuICAgIH1cbiAgfSwgW2RldkZpbGVdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh1c2Vyc0RhdGEgJiYgdXNlclN0YXR1c0NoZWNrZWQgPT09IGZhbHNlKSB7XG4gICAgICB1c2Vyc0RhdGEuZm9yRWFjaCgodXNlciwgdXNlckluZGV4KSA9PiB7XG4gICAgICAgIGlmICh1c2VyW1wiSUQgUkRWXCJdICE9IFwiXCIpIHtcbiAgICAgICAgICBjaGVja1VzZXJJbnZpdGF0aW9uU3RhdHVzKHVzZXJbXCJJRCBSRFZcIl0sIHVzZXJJbmRleCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgc2V0VXNlclN0YXR1c0NoZWNrZWQodHJ1ZSk7XG4gICAgfVxuICB9LCBbdXNlcnNEYXRhXSk7XG5cbiAgY29uc3Qgd3JpdGVGaWxlID0gKCkgPT4ge1xuICAgIGNvbnN0IG91dFdvcmtib29rID0gWExTWC51dGlscy5ib29rX25ldygpO1xuICAgIGNvbnN0IG91dFdvcmtzaGVldCA9IFhMU1gudXRpbHMuanNvbl90b19zaGVldCh1c2Vyc0RhdGEpO1xuICAgIFhMU1gudXRpbHMuYm9va19hcHBlbmRfc2hlZXQob3V0V29ya2Jvb2ssIG91dFdvcmtzaGVldCwgXCJESVZFUkdFTkNFU1wiKTtcbiAgICAvLyBYTFNYLnV0aWxzLmJvb2tfYXBwZW5kX3NoZWV0KG91dFdvcmtib29rLCB4bHMuU2hlZXRzW3hscy5TaGVldE5hbWVzWzFdXSwgXCJHUkFQSElRVUVcIik7XG4gICAgLy8gWExTWC51dGlscy5ib29rX2FwcGVuZF9zaGVldChvdXRXb3JrYm9vaywgeGxzLlNoZWV0c1t4bHMuU2hlZXROYW1lc1syXV0sIFwiU2VsZWN0aW9uIENPQVwiKTtcbiAgICBYTFNYLndyaXRlRmlsZShvdXRXb3JrYm9vaywgYGFyZGVubmVzX3JzYV8ke2dldERhdGVUaW1lU3RyaW5nKG5ldyBEYXRlKCkpfS54bHN4YCk7XG4gIH07XG5cbiAgYXN5bmMgZnVuY3Rpb24gZ2VuZXJhdGVJbnZpdGF0aW9uVXJsKHVzZXJJZCwgdXNlckluZGV4KSB7XG4gICAgY29uc3QgaW52aXRhdGlvblVybCA9IHVzZXJVcmwgKyBgLyR7dXNlcklkfS9pbnZpdGVgO1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGFwcEZldGNoKGludml0YXRpb25VcmwsIHRva2VuKTtcblxuICAgIGxldCBuZXdVc2Vyc0RhdGEgPSBbLi4udXNlcnNEYXRhXTtcbiAgICBpZiAocmVzdWx0Lmludml0YXRpb25fdXJsKSB7XG4gICAgICBuZXdVc2Vyc0RhdGFbdXNlckluZGV4XVtcIkxpZW4gZCdpbnZpdGF0aW9uXCJdID0gcmVzdWx0Lmludml0YXRpb25fdXJsO1xuICAgIH0gZWxzZSBpZiAocmVzdWx0Lmludml0YXRpb25fdG9rZW4pIHtcbiAgICAgIG5ld1VzZXJzRGF0YVt1c2VySW5kZXhdW1wiQ29kZSBkJ2ludml0YXRpb25cIl0gPSByZXN1bHQuaW52aXRhdGlvbl90b2tlbjtcbiAgICB9XG4gICAgbmV3VXNlcnNEYXRhW3VzZXJJbmRleF1bXCJEYXRlIGQnaW52aXRhdGlvblwiXSA9IGdldEZyZW5jaEZvcm1hdERhdGVTdHJpbmcobmV3IERhdGUoKSk7XG4gICAgc2V0VXNlcnNEYXRhKG5ld1VzZXJzRGF0YSk7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBnZXRVc2VyKHVzZXJJZCwgdG9rZW4pIHtcbiAgICBjb25zdCBnZXRVc2VyVXJsID0gdXNlclVybCArIGAvJHt1c2VySWR9YDtcbiAgICByZXR1cm4gYXdhaXQgYXBwRmV0Y2goZ2V0VXNlclVybCwgdG9rZW4pO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gY2hlY2tVc2VySW52aXRhdGlvblN0YXR1cyh1c2VySWQsIHVzZXJJbmRleCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFVzZXIodXNlcklkLCB0b2tlbik7XG5cbiAgICBsZXQgbmV3VXNlcnNEYXRhID0gWy4uLnVzZXJzRGF0YV07XG4gICAgaWYgKHJlc3VsdC51c2VyLmludml0YXRpb25fY3JlYXRlZF9hdCkge1xuICAgICAgbGV0IGludml0YXRpb25fZGF0ZSA9IHJlc3VsdC51c2VyLmludml0YXRpb25fY3JlYXRlZF9hdCAvLyBEYXRlIGF1IGZvcm1hdCA6IDIwMjEtMDQtMTUgMTQ6NTM6NTYgKzAyMDBcbiAgICAgICAgLnN1YnN0cmluZygwLCAxMCk7IC8vIFLDqWN1cMOpcmVyIGxlcyAxMCBwcmVtaWVycyBjaGlmZnJlcyAobGEgZGF0ZSlcbiAgICAgIGludml0YXRpb25fZGF0ZSA9IG5ldyBEYXRlKGludml0YXRpb25fZGF0ZSk7IC8vIENyw6llciB1bmUgZGF0ZSBKU1xuICAgICAgbmV3VXNlcnNEYXRhW3VzZXJJbmRleF1bXCJEYXRlIGQnaW52aXRhdGlvblwiXSA9IGdldEZyZW5jaEZvcm1hdERhdGVTdHJpbmcoaW52aXRhdGlvbl9kYXRlKTtcbiAgICB9XG4gICAgaWYgKHJlc3VsdC51c2VyLmludml0YXRpb25fYWNjZXB0ZWRfYXQpIHtcbiAgICAgIGxldCBpbnNjcmlwdGlvbl9kYXRlID0gcmVzdWx0LnVzZXIuaW52aXRhdGlvbl9hY2NlcHRlZF9hdCAvLyBEYXRlIGF1IGZvcm1hdCA6IDIwMjEtMDQtMTUgMTQ6NTM6NTYgKzAyMDBcbiAgICAgICAgLnN1YnN0cmluZygwLCAxMCk7IC8vIFLDqWN1cMOpcmVyIGxlcyAxMCBwcmVtaWVycyBjaGlmZnJlcyAobGEgZGF0ZSlcbiAgICAgIGluc2NyaXB0aW9uX2RhdGUgPSBuZXcgRGF0ZShpbnNjcmlwdGlvbl9kYXRlKTsgLy8gQ3LDqWVyIHVuZSBkYXRlIEpTXG4gICAgICBuZXdVc2Vyc0RhdGFbdXNlckluZGV4XVtcIkRhdGUgZCdpbnNjcmlwdGlvblwiXSA9IGdldEZyZW5jaEZvcm1hdERhdGVTdHJpbmcoaW5zY3JpcHRpb25fZGF0ZSk7XG4gICAgfVxuICAgIHNldFVzZXJzRGF0YShuZXdVc2Vyc0RhdGEpO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVXNlcih1c2VyRGF0YSwgdXNlckluZGV4KSB7XG4gICAgY29uc3QgYWRkcmVzcyA9IHVzZXJEYXRhW1wiQURSRVNTRVwiXSArIFwiIC0gXCIgKyB1c2VyRGF0YVtcIkNPREUgUE9TVEFMXCJdICsgXCIgXCIgKyB1c2VyRGF0YVtcIlZJTExFXCJdO1xuXG4gICAgbGV0IHVzZXIgPSB7XG4gICAgICBmaXJzdF9uYW1lOiB1c2VyRGF0YVtcIlBSRU5PTVwiXSxcbiAgICAgIGxhc3RfbmFtZTogdXNlckRhdGFbXCJOT01cIl0sXG4gICAgICBlbWFpbDogdXNlckRhdGFbXCJNQUlMXCJdLFxuICAgICAgcGhvbmVfbnVtYmVyOiB1c2VyRGF0YVtcIlRFTEVQSE9ORVwiXS5yZXBsYWNlKC9cXHMrL2csIFwiXCIpLFxuICAgICAgYmlydGhfZGF0ZTogc3RyaW5nVG9EYXRlKHVzZXJEYXRhW1wiREFURSBERSBOQUlTU0FOQ0VcIl0pLFxuICAgICAgYWRkcmVzczogYWRkcmVzcyxcbiAgICAgIGNhaXNzZV9hZmZpbGlhdGlvbjogXCJjYWZcIixcbiAgICAgIGFmZmlsaWF0aW9uX251bWJlcjogdXNlckRhdGFbXCJOwrBDQUZcIl0sXG4gICAgICBvcmdhbmlzYXRpb25faWRzOiBbb3JnYUlEXSxcbiAgICB9O1xuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXBwRmV0Y2godXNlclVybCwgdG9rZW4sIFwiUE9TVFwiLCBKU09OLnN0cmluZ2lmeSh1c2VyKSk7XG5cbiAgICBsZXQgbmV3VXNlcnNEYXRhID0gWy4uLnVzZXJzRGF0YV07XG4gICAgaWYgKHJlc3VsdC51c2VyKSB7XG4gICAgICBuZXdVc2Vyc0RhdGFbdXNlckluZGV4XVtcIklEIFJEVlwiXSA9IHJlc3VsdC51c2VyLmlkO1xuICAgICAgc2V0VXNlcnNEYXRhKG5ld1VzZXJzRGF0YSk7XG4gICAgICBnZW5lcmF0ZUludml0YXRpb25VcmwocmVzdWx0LnVzZXIuaWQsIHVzZXJJbmRleCk7XG4gICAgfSBlbHNlIGlmIChyZXN1bHQuZXJyb3JzICYmIHJlc3VsdC5lcnJvcnMuZW1haWwgJiYgcmVzdWx0LmVycm9ycy5lbWFpbFswXS5lcnJvciA9PT0gXCJ0YWtlblwiKSB7XG4gICAgICBuZXdVc2Vyc0RhdGFbdXNlckluZGV4XVtcIklEIFJEVlwiXSA9IHJlc3VsdC5lcnJvcnMuZW1haWxbMF0uaWQ7XG4gICAgICBzZXRVc2Vyc0RhdGEobmV3VXNlcnNEYXRhKTtcbiAgICAgIGNoZWNrVXNlckludml0YXRpb25TdGF0dXMocmVzdWx0LmVycm9ycy5lbWFpbFswXS5pZCwgdXNlckluZGV4KTtcbiAgICAgIGFsZXJ0KFwiVW4gY29tcHRlIGFzc29jacOpIMOgIGNldCBlbWFpbCBleGlzdGUgZMOpasOgXCIpO1xuICAgIH0gZWxzZSBpZiAocmVzdWx0LmVycm9ycyAmJiByZXN1bHQuZXJyb3JzLmVtYWlsICYmIHJlc3VsdC5lcnJvcnMuZW1haWxbMF0uZXJyb3IgPT09IFwiaW52YWxpZFwiKSB7XG4gICAgICBhbGVydChcIkwnYWRyZXNzZSBtYWlsIG4nZXN0IHBhcyB2YWxpZGVcIik7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIHJlc3VsdC5lcnJvcnMgJiZcbiAgICAgIHJlc3VsdC5lcnJvcnMuZmlyc3RfbmFtZSAmJlxuICAgICAgcmVzdWx0LmVycm9ycy5maXJzdF9uYW1lWzBdLmVycm9yID09PSBcImTDqWrDoCB1dGlsaXPDqVwiXG4gICAgKSB7XG4gICAgICBhbGVydChcbiAgICAgICAgXCJMYSBjcsOpYXRpb24gZHUgY29tcHRlIGEgw6ljaG91w6kuIEwndXRpbGlzYXRldXIgc2VtYmxlIGV4aXN0ZXIgbWFpcyBuJ2EgcHUgw6p0cmUgcsOpY3Vww6lyw6kuXCJcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmIChyZXN1bHQuZXJyb3JzICYmIHJlc3VsdC5lcnJvcnNbMF0gJiYgcmVzdWx0LmVycm9yc1swXS5iYXNlID09PSBcImZvcmJpZGRlblwiKSB7XG4gICAgICBhbGVydChcIlZvdHJlIGNvbXB0ZSBhZ2VudCBSRFYtU29saWRhcml0w6lzIG5lIHZvdXMgcGVybWV0IHBhcyBkJ2VmZmVjdHVlciBjZXR0ZSBhY3Rpb24uXCIpO1xuICAgIH0gZWxzZSBpZiAocmVzdWx0LmVycm9ycyAmJiByZXN1bHQuZXJyb3JzWzBdKSB7XG4gICAgICBhbGVydChyZXN1bHQuZXJyb3JzWzBdKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBoYW5kbGVMb2dpbiA9ICh0b2tlbklkLCB1aWQsIGNsaWVudCkgPT4ge1xuICAgIHNldFRva2VuKHsgLi4udG9rZW4sIHRva2VuSWQ6IHRva2VuSWQsIHVpZDogdWlkLCBjbGllbnQ6IGNsaWVudCB9KTtcbiAgICBzZXRJc0xvZ2dlZCh0cnVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVGaWxlID0gYXN5bmMgZmlsZSA9PiB7XG4gICAgaWYgKGRldk1vZGUgJiYgZmlsZSAhPSBkZXZGaWxlKSB7XG4gICAgICBzZXREZXZGaWxlKGZpbGUpO1xuICAgIH1cbiAgICBzZXRGaWxlU2l6ZShmaWxlLnNpemUpO1xuICAgIGNvbnN0IHN0YXJ0X3RpbWUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgZmlsZURhdGEgPSBuZXcgVWludDhBcnJheShldmVudC50YXJnZXQucmVzdWx0KTtcbiAgICAgICAgY29uc3QgeGxzID0gWExTWC5yZWFkKGZpbGVEYXRhLCB7IHR5cGU6IFwiYXJyYXlcIiwgY2VsbERhdGVzOiB0cnVlLCBkYXRlTkY6IFwiZGQvbW0veXl5eVwiIH0pO1xuICAgICAgICBjb25zdCB3b3Jrc2hlZXQgPSB4bHMuU2hlZXRzW3hscy5TaGVldE5hbWVzWzBdXTtcbiAgICAgICAgLy8gTGltaXRlciBsYSBjYXB0dXJlIGF1eCBjb2xvbm5lcyBBLVZcbiAgICAgICAgY29uc3QgcmFuZ2UgPSBYTFNYLnV0aWxzLmRlY29kZV9yYW5nZSh3b3Jrc2hlZXRbXCIhcmVmXCJdKTtcbiAgICAgICAgcmFuZ2Uucy5jID0gMDsgLy8gMCA9PSBYTFNYLnV0aWxzLmRlY29kZV9jb2woXCJBXCIpXG4gICAgICAgIHJhbmdlLmUuYyA9IDI0OyAvLyAyNCA9PSBYTFNYLnV0aWxzLmRlY29kZV9jb2woXCJZXCIpXG4gICAgICAgIGNvbnN0IG5ld19yYW5nZSA9IFhMU1gudXRpbHMuZW5jb2RlX3JhbmdlKHJhbmdlKTtcblxuICAgICAgICBsZXQganNvbkRhdGEgPSBYTFNYLnV0aWxzLnNoZWV0X3RvX2pzb24od29ya3NoZWV0LCB7XG4gICAgICAgICAgYmxhbmtyb3dzOiBmYWxzZSxcbiAgICAgICAgICByYXc6IGZhbHNlLFxuICAgICAgICAgIGRlZnZhbDogXCJcIixcbiAgICAgICAgICByYW5nZTogbmV3X3JhbmdlLFxuICAgICAgICB9KTtcblxuICAgICAgICAvLyB3ZSByZW1vdmUgbGluZSBicmVha3MgZnJvbSBhbGwga2V5c1xuICAgICAgICBqc29uRGF0YSA9IGpzb25EYXRhLm1hcCh1c2VyRGF0YSA9PiB7XG4gICAgICAgICAgcmV0dXJuIFsuLi5PYmplY3Qua2V5cyh1c2VyRGF0YSldLnJlZHVjZSgocmVzLCBrZXkpID0+IHtcbiAgICAgICAgICAgIHJlc1trZXkucmVwbGFjZSgvW1xcblxccl0rL2csIFwiIFwiKV0gPSB1c2VyRGF0YVtrZXldO1xuICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgICB9LCB7fSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGpzb25EYXRhID09IG51bGwgJiYgc2V0SXNQZW5kaW5nKGZhbHNlKTtcbiAgICAgICAgc2V0VXNlclN0YXR1c0NoZWNrZWQoZmFsc2UpO1xuICAgICAgICBzZXRVc2Vyc0RhdGEoanNvbkRhdGEpO1xuICAgICAgICBkaXNwYXRjaFJ1bnMoe1xuICAgICAgICAgIHR5cGU6IFwiYXBwZW5kXCIsXG4gICAgICAgICAgaXRlbToge1xuICAgICAgICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTkpLFxuICAgICAgICAgICAgZHVyYXRpb246IG5ldyBEYXRlKCkgLSBzdGFydF90aW1lLFxuICAgICAgICAgICAgZmlsZW5hbWU6IGZpbGUubmFtZSxcbiAgICAgICAgICAgIGZpbGVTaXplOiBmaWxlLnNpemUsXG4gICAgICAgICAgICBmaWxlTGluZXM6IGpzb25EYXRhLmxlbmd0aCxcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfTtcbiAgICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihmaWxlKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfSBoYW5kbGVGaWxlPXtoYW5kbGVGaWxlfT5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PkV4cMOpcmltZW50YXRpb24gQXJkZW5uZXM8L2gxPlxuXG4gICAgICAgIHshaXNMb2dnZWQgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY3JlYXRlfT5cbiAgICAgICAgICAgIDxMb2dpbkZvcm0gaGFuZGxlTG9naW49e2hhbmRsZUxvZ2lufSByZHZVcmw9e1JEVl9TT0xJREFSSVRFU19VUkx9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG5cbiAgICAgICAge2lzTG9nZ2VkICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPEZpbGVIYW5kbGVyXG4gICAgICAgICAgICAgIGhhbmRsZUZpbGU9e2hhbmRsZUZpbGV9XG4gICAgICAgICAgICAgIGZpbGVTaXplPXtmaWxlU2l6ZX1cbiAgICAgICAgICAgICAgcGVuZGluZ01lc3NhZ2U9e1wiUsOpY3Vww6lyYXRpb24gZGVzIGluZm9ybWF0aW9ucywgbWVyY2kgZGUgcGF0aWVudGVyXCJ9XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICB7dXNlcnNEYXRhICYmIChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuc3VidGl0bGV9PkLDqW7DqWZpY2lhaXJlcyBSU0E8L2gyPlxuXG4gICAgICAgICAgICAgICAge3VzZXJzRGF0YS5sZW5ndGggPT0gMCAmJiAoXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+QXVjdW4gYsOpbsOpZmljaWFpcmUgZGFucyBsZSBmaWNoaWVyPC9wPlxuICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICB7dXNlcnNEYXRhLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlPlxuICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+RGF0ZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPk5vbTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPlByw6lub208L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5NYWlsPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+VMOpbMOpcGhvbmU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5JRCBSRFYtU29saWRhcml0w6lzPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNvbFNwYW49XCIzXCI+SW52aXRhdGlvbjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj1cIjFcIj5EZXJuaWVyIGVudm9pIGxlPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNvbFNwYW49XCIxXCI+RGF0ZSBkJ2luc2NyaXB0aW9uPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNvbFNwYW49XCIxXCI+QWN0aW9uPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogcmV2ZXJzZSBlc3QgdXRpbGlzw6kgcG91ciBxdWUgbGVzIHV0aWxpc2F0ZXVycyBsZXMgcGx1cyByw6ljZW50cyBhcHBhcmFpc3NlbnQgZW4gaGF1dCAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIHtbLi4udXNlcnNEYXRhXS5yZXZlcnNlKCkubWFwKCh1c2VyLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyW1wiREFURVwiXSAhPT0gXCJcIiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9Pnt1c2VyW1wiREFURVwiXX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT57dXNlcltcIk5PTVwiXX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT57dXNlcltcIlBSRU5PTVwiXX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT57dXNlcltcIk1BSUxcIl19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+e3VzZXJbXCJURUxFUEhPTkVcIl19PC90ZD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXNlcltcIklEIFJEVlwiXSA9PT0gXCJcIiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNyZWF0ZVVzZXIodXNlciwgdXNlcnNEYXRhLmxlbmd0aCAtIGluZGV4IC0gMSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENyw6llciB1biBjb21wdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyW1wiSUQgUkRWXCJdICE9PSBcIlwiICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT57dXNlcltcIklEIFJEVlwiXX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT57dXNlcltcIkRhdGUgZCdpbnZpdGF0aW9uXCJdfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9Pnt1c2VyW1wiRGF0ZSBkJ2luc2NyaXB0aW9uXCJdfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyW1wiSUQgUkRWXCJdICE9PSBcIlwiICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZ2VuZXJhdGVJbnZpdGF0aW9uVXJsKHVzZXJbXCJJRCBSRFZcIl0sIGluZGV4KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3VzZXJbXCJEYXRlIGQnaW52aXRhdGlvblwiXSAhPT0gXCJcIiAmJiBcIlJlZ8OpbsOpcmVyIGludml0YXRpb25cIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3VzZXJbXCJEYXRlIGQnaW52aXRhdGlvblwiXSA9PT0gXCJcIiAmJiBcIkfDqW7DqXJlciBpbnZpdGF0aW9uXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXNlcltcIklEIFJEVlwiXSA9PT0gXCJcIiAmJiA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT48L3RkPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufSBvbkNsaWNrPXt3cml0ZUZpbGV9PlxuICAgICAgICAgICAgICAgICAgICAgIFJlZ8OpbsOpcmVyIGZpY2hpZXJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG5cbiAgICAgICAgPEZvb3RlclxuICAgICAgICAgIHN1YmplY3Q9XCJFeHDDqXJpbWVudGF0aW9uIEFyZGVubmVzXCJcbiAgICAgICAgICBwb3VycXVvaT1cIlF1ZWwgZXN0IGwnb2JqZWN0aWYgZGUgY2V0dGUgZXhww6lyaW1lbnRhdGlvbiZuYnNwOz9cIlxuICAgICAgICAgIHRleHQ9e1xuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+XG4gICAgICAgICAgICAgICAgRmFjaWxpdGVyIGxlIHRyYXZhaWwgZGVzIGFnZW50cyBkdSBkw6lwYXJ0ZW1lbnQgZXQgdGVzdGVyIGwndXRpbGlzYXRpb24gZGVcbiAgICAgICAgICAgICAgICBsJ2FwcGxpY2F0aW9uIFJEVi1Tb2xpZGFyaXTDqXMgcG91ciBhY2PDqWzDqXJlciBsYSBwcmlzZSBkdSBwcmVtaWVyIHJlbmRlei12b3VzXG4gICAgICAgICAgICAgICAgZCdvcmllbnRhdGlvbi5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgPC9tYWluPlxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==