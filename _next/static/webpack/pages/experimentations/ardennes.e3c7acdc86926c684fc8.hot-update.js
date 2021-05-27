webpackHotUpdate_N_E("pages/experimentations/ardennes",{

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9maWxlSGFuZGxlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbW9kZWxzL0FwcGxpY2FudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbW9kZWxzL0FwcGxpY2F0aW9uLmpzIl0sIm5hbWVzIjpbIkRFRkFVTFRfVVBMT0FEX01FU1NBR0UiLCJERUZBVUxUX1BFTkRJTkdfTUVTU0FHRSIsIkZpbGVIYW5kbGVyIiwiaGFuZGxlRmlsZSIsImZpbGVTaXplIiwibXVsdGlwbGUiLCJzb3J0RmlsZXNCeUZsdXhEYXRlIiwicGVuZGluZ01lc3NhZ2UiLCJ1cGxvYWRNZXNzYWdlIiwidXNlU3RhdGUiLCJpc1BlbmRpbmciLCJzZXRJc1BlbmRpbmciLCJoYW5kbGVVcGxvYWRzIiwiZXZlbnQiLCJmaWxlc1RvSGFuZGxlIiwidGFyZ2V0IiwiZmlsZXMiLCJoYW5kbGVTb3J0ZWRGaWxlcyIsImhhbmRsZUZpbGVzIiwidmFsdWUiLCJQcm9taXNlIiwiYWxsIiwibWFwIiwiZmlsZSIsImZsdXhEYXRlcyIsImZpbGVzVG9Qcm9jZXNzIiwicHVzaCIsInJldHJpZXZlRmx1eERhdGUiLCJuYW1lIiwic29ydGVkRmlsZXNUb1Byb2Nlc3MiLCJzb3J0IiwiZmlyc3RGaWxlIiwic2Vjb25kRmlsZSIsImFwcGxpY2F0aW9uU3RyaW5nVG9EYXRlIiwicmVzb2x2ZSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJmbHV4IiwiQmFzZUZsdXgiLCJyZXN1bHQiLCJjcmVhdGlvbkRhdGUiLCJyZWFkQXNUZXh0Iiwic3R5bGVzIiwiZGVzY3JpcHRpb24iLCJBcHBsaWNhbnQiLCJkb20iLCJyc2FBcHBsaWNhdGlvbk51bWJlciIsInNvY2lhbFNlY3VyaXR5TnVtYmVyIiwibGFzdE5hbWUiLCJmaXJzdE5hbWUiLCJyb2xlIiwiY29udGFjdEluZm9zIiwicGhvbmVOdW1iZXIiLCJlbWFpbEFkZHJlc3MiLCJ0b3BFbnRyYW50IiwiYXBwbGljYXRpb24iLCJlbGlnaWJsZUFzTmV3Iiwid2l0aERyb2l0c0V0RGV2b2lycyIsImVsaWdpYmxlQXNOZXdJbkZveWVyIiwiaW5Gb3llcldpdGhEcm9pdHNFdERldm9pcnMiLCJpbmNsdWRlcyIsInRvcEZveWVyRHJvaXRzRXREZXZvaXJzIiwidG9wRHJvaXRzRXREZXZvaXJzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJpbm5lckhUTUwiLCJBcHBsaWNhdGlvbiIsInBhcmVudE5vZGUiLCJzdGF0dXNDb2RlIiwic3VzcGVuc2lvbk1vdGl2ZSIsInNwbGl0Iiwiam9pbiIsIkVMSUdJQkxFX1NVU1BFTlNJT05fTU9USVZFUyIsIndpdGhEcm9pdHNPdXZlcnRzRXRWZXJzYWJsZXMiLCJ3aXRoRHJvaXRzT3V2ZXJ0c1N1c3BlbmR1IiwiZW1haWxBdXRob3JpemF0aW9uIiwicGhvbmVBdXRob3JpemF0aW9uIiwiYXBwbGljYW50cyIsInNvbWUiLCJhcHBsaWNhbnQiLCJzb2Npb1Byb2Zlc3Npb25hbERhdGEiLCJhcHBsaWNhbnREb20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsc0JBQXNCLEdBQUcsOERBQS9CO0FBQ0EsSUFBTUMsdUJBQXVCLEdBQUcsc0RBQWhDO0FBRWUsU0FBU0MsV0FBVCxPQU9aO0FBQUE7O0FBQUEsTUFOREMsVUFNQyxRQU5EQSxVQU1DO0FBQUEsTUFMREMsUUFLQyxRQUxEQSxRQUtDO0FBQUEsMkJBSkRDLFFBSUM7QUFBQSxNQUpEQSxRQUlDLDhCQUpVLElBSVY7QUFBQSxtQ0FIREMsbUJBR0M7QUFBQSxNQUhEQSxtQkFHQyxzQ0FIcUIsS0FHckI7QUFBQSxpQ0FGREMsY0FFQztBQUFBLE1BRkRBLGNBRUMsb0NBRmdCTix1QkFFaEI7QUFBQSxnQ0FERE8sYUFDQztBQUFBLE1BRERBLGFBQ0MsbUNBRGVSLHNCQUNmOztBQUFBLGtCQUNpQ1Msc0RBQVEsQ0FBQyxLQUFELENBRHpD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b0JBQVQsQ0FBOEIsVUFBOUIsRUFBMEMsQ0FBMUMsQ0FBUCwyREFBTyx1QkFBOENDLFNBQXJEO0FBQ0Q7Ozt3QkFFZ0I7QUFBQTs7QUFDZix1Q0FBTyxLQUFLbkIsR0FBTCxDQUFTa0Isb0JBQVQsQ0FBOEIsWUFBOUIsRUFBNEMsQ0FBNUMsQ0FBUCwyREFBTyx1QkFBZ0RDLFNBQXZEO0FBQ0Q7Ozt3QkFFc0I7QUFBQTs7QUFDckIsdUNBQU8sS0FBS25CLEdBQUwsQ0FBU2tCLG9CQUFULENBQThCLGdCQUE5QixFQUFnRCxDQUFoRCxDQUFQLDJEQUFPLHVCQUFvREMsU0FBM0Q7QUFDRDs7O3dCQUVnQjtBQUNmLGFBQU8sNkZBQUksS0FBS25CLEdBQUwsQ0FBU2tCLG9CQUFULENBQThCLFVBQTlCLENBQUosRUFBK0MxQyxHQUEvQyxDQUFtRCxVQUFBMkQsWUFBWSxFQUFJO0FBQ3hFLGVBQU8sSUFBSXBDLGtEQUFKLENBQWNvQyxZQUFkLENBQVA7QUFDRCxPQUZNLENBQVA7QUFHRDs7O3dCQUU2QjtBQUFBOztBQUM1Qix1Q0FBTyxLQUFLbkMsR0FBTCxDQUFTa0Isb0JBQVQsQ0FBOEIsa0JBQTlCLEVBQWtELENBQWxELENBQVAsMkRBQU8sdUJBQXNEQyxTQUE3RDtBQUNEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2V4cGVyaW1lbnRhdGlvbnMvYXJkZW5uZXMuZTNjN2FjZGM4NjkyNmM2ODRmYzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBCYXNlRmx1eCBmcm9tIFwiLi4vbW9kZWxzL0Jhc2VGbHV4XCI7XG5pbXBvcnQgeyBhcHBsaWNhdGlvblN0cmluZ1RvRGF0ZSB9IGZyb20gXCIuLi9saWIvZGF0ZXNcIjtcbmltcG9ydCBQZW5kaW5nTWVzc2FnZSBmcm9tIFwiLi9wZW5kaW5nXCI7XG5cbmNvbnN0IERFRkFVTFRfVVBMT0FEX01FU1NBR0UgPSBcIkdsaXNzZXogZXQgZMOpcG9zZXogbGUgZmljaGllciDDoCBhbmFseXNlciBvdSBzw6lsZWN0aW9ubmV6IGxlLlwiO1xuY29uc3QgREVGQVVMVF9QRU5ESU5HX01FU1NBR0UgPSBcIkNhbGN1bCBkZXMgc3RhdGlzdGlxdWVzIGVuIGNvdXJzLCBtZXJjaSBkZSBwYXRpZW50ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmlsZUhhbmRsZXIoe1xuICBoYW5kbGVGaWxlLFxuICBmaWxlU2l6ZSxcbiAgbXVsdGlwbGUgPSB0cnVlLFxuICBzb3J0RmlsZXNCeUZsdXhEYXRlID0gZmFsc2UsXG4gIHBlbmRpbmdNZXNzYWdlID0gREVGQVVMVF9QRU5ESU5HX01FU1NBR0UsXG4gIHVwbG9hZE1lc3NhZ2UgPSBERUZBVUxUX1VQTE9BRF9NRVNTQUdFLFxufSkge1xuICBjb25zdCBbaXNQZW5kaW5nLCBzZXRJc1BlbmRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGhhbmRsZVVwbG9hZHMgPSBldmVudCA9PiB7XG4gICAgbGV0IGZpbGVzVG9IYW5kbGUgPSBldmVudC50YXJnZXQuZmlsZXM7XG4gICAgc2V0SXNQZW5kaW5nKHRydWUpO1xuICAgIHNvcnRGaWxlc0J5Rmx1eERhdGUgPyBoYW5kbGVTb3J0ZWRGaWxlcyhmaWxlc1RvSGFuZGxlKSA6IGhhbmRsZUZpbGVzKGZpbGVzVG9IYW5kbGUpO1xuXG4gICAgZXZlbnQudGFyZ2V0LnZhbHVlID0gXCJcIjtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVGaWxlcyA9IGFzeW5jIGZpbGVzVG9IYW5kbGUgPT4ge1xuICAgIGF3YWl0IFByb21pc2UuYWxsKFsuLi5maWxlc1RvSGFuZGxlXS5tYXAoYXN5bmMgZmlsZSA9PiBhd2FpdCBoYW5kbGVGaWxlKGZpbGUpKSk7XG4gICAgc2V0SXNQZW5kaW5nKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTb3J0ZWRGaWxlcyA9IGFzeW5jIGZpbGVzVG9IYW5kbGUgPT4ge1xuICAgIGxldCBmbHV4RGF0ZXMgPSB7fTtcbiAgICBjb25zdCBmaWxlc1RvUHJvY2VzcyA9IFtdO1xuICAgIGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgWy4uLmZpbGVzVG9IYW5kbGVdLm1hcChhc3luYyBmaWxlID0+IHtcbiAgICAgICAgZmlsZXNUb1Byb2Nlc3MucHVzaChmaWxlKTtcbiAgICAgICAgZmx1eERhdGVzW2ZpbGUubmFtZV0gPSBhd2FpdCByZXRyaWV2ZUZsdXhEYXRlKGZpbGUpO1xuICAgICAgfSlcbiAgICApO1xuICAgIGNvbnN0IHNvcnRlZEZpbGVzVG9Qcm9jZXNzID0gZmlsZXNUb1Byb2Nlc3Muc29ydChmdW5jdGlvbiAoZmlyc3RGaWxlLCBzZWNvbmRGaWxlKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBhcHBsaWNhdGlvblN0cmluZ1RvRGF0ZShmbHV4RGF0ZXNbZmlyc3RGaWxlLm5hbWVdKSAtXG4gICAgICAgIGFwcGxpY2F0aW9uU3RyaW5nVG9EYXRlKGZsdXhEYXRlc1tzZWNvbmRGaWxlLm5hbWVdKVxuICAgICAgKTtcbiAgICB9KTtcbiAgICBoYW5kbGVGaWxlcyhzb3J0ZWRGaWxlc1RvUHJvY2Vzcyk7XG4gIH07XG5cbiAgY29uc3QgcmV0cmlldmVGbHV4RGF0ZSA9IGFzeW5jIGZpbGUgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGZsdXggPSBuZXcgQmFzZUZsdXgoZXZlbnQudGFyZ2V0LnJlc3VsdCk7XG4gICAgICAgIHJlc29sdmUoZmx1eC5jcmVhdGlvbkRhdGUpO1xuICAgICAgfTtcbiAgICAgIHJlYWRlci5yZWFkQXNUZXh0KGZpbGUpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAge3VwbG9hZE1lc3NhZ2V9XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBvbkNoYW5nZT17aGFuZGxlVXBsb2Fkc30gbXVsdGlwbGU9e211bHRpcGxlfSAvPlxuICAgICAgPC9wPlxuXG4gICAgICB7aXNQZW5kaW5nICYmIDxQZW5kaW5nTWVzc2FnZSBtZXNzYWdlPXtwZW5kaW5nTWVzc2FnZX0gZmlsZVNpemU9e2ZpbGVTaXplfSAvPn1cblxuICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxuICAgICAgICBMZXMgb3DDqXJhdGlvbnMgc29udCB0b3V0ZXMgcsOpYWxpc8OpZXMgc3VyIHZvdHJlIG9yZGluYXRldXIuXG4gICAgICAgIDxiciAvPlxuICAgICAgICBBdWN1bmUgZG9ubsOpZSBwZXJzb25uZWxsZSBuJ2VzdCB0cmFuc2bDqXLDqWUuXG4gICAgICA8L3A+XG4gICAgPC8+XG4gICk7XG59XG4iLCJpbXBvcnQgQXBwbGljYXRpb24gZnJvbSBcIi4vQXBwbGljYXRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwbGljYW50IHtcbiAgY29uc3RydWN0b3IoZG9tKSB7XG4gICAgdGhpcy5kb20gPSBkb207XG4gIH1cblxuICBnZXQgbGFzdE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiTk9NXCIpWzBdPy5pbm5lckhUTUw7XG4gIH1cblxuICBnZXQgZmlyc3ROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmRvbS5nZXRFbGVtZW50c0J5VGFnTmFtZShcIlBSRU5PTVwiKVswXT8uaW5uZXJIVE1MO1xuICB9XG5cbiAgZ2V0IHJvbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiUk9MRVBFUlNcIilbMF0/LmlubmVySFRNTDtcbiAgfVxuXG4gIGdldCB0b3BFbnRyYW50KCkge1xuICAgIHJldHVybiB0aGlzLmRvbS5nZXRFbGVtZW50c0J5VGFnTmFtZShcIlRPUFBFUlNFTlREUk9ERVZPUlNBXCIpWzBdPy5pbm5lckhUTUw7XG4gIH1cblxuICBnZXQgdG9wRHJvaXRzRXREZXZvaXJzKCkge1xuICAgIHJldHVybiB0aGlzLmRvbS5nZXRFbGVtZW50c0J5VGFnTmFtZShcIlRPUFBFUlNEUk9ERVZPUlNBXCIpWzBdPy5pbm5lckhUTUw7XG4gIH1cblxuICBnZXQgc29jaW9Qcm9mZXNzaW9uYWxEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLmRvbS5nZXRFbGVtZW50c0J5VGFnTmFtZShcIkRvbm5lZXNTb2Npb1Byb2Zlc3Npb25uZWxsZXNcIilbMF0/LmlubmVySFRNTDtcbiAgfVxuXG4gIGdldCBuYXRpb25hbGl0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5kb20uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJOQVRJXCIpWzBdPy5pbm5lckhUTUw7XG4gIH1cblxuICBnZXQgYWN0aXZpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiQUNUXCIpWzBdPy5pbm5lckhUTUw7XG4gIH1cblxuICBnZXQgc29jaWFsU2VjdXJpdHlOdW1iZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiTklSXCIpWzBdPy5pbm5lckhUTUw7XG4gIH1cblxuICBnZXQgYXBwbGljYXRpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBBcHBsaWNhdGlvbih0aGlzLmRvbS5wYXJlbnROb2RlKTtcbiAgfVxuXG4gIGdldCByc2FBcHBsaWNhdGlvbk51bWJlcigpIHtcbiAgICByZXR1cm4gdGhpcy5hcHBsaWNhdGlvbi5yc2FBcHBsaWNhdGlvbk51bWJlcjtcbiAgfVxuXG4gIGdldCBlbWFpbEFkZHJlc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXBwbGljYXRpb24uZW1haWxBZGRyZXNzO1xuICB9XG5cbiAgZ2V0IGFwcGxpY2F0aW9uU3RhdHVzQ29kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5hcHBsaWNhdGlvbi5zdGF0dXNDb2RlO1xuICB9XG5cbiAgZ2V0IGFwcGxpY2F0aW9uU3VzcGVuc2lvbk1vdGl2ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5hcHBsaWNhdGlvbi5zdXNwZW5zaW9uTW90aXZlO1xuICB9XG5cbiAgZ2V0IHBob25lTnVtYmVyKCkge1xuICAgIHJldHVybiB0aGlzLmFwcGxpY2F0aW9uLnBob25lTnVtYmVyO1xuICB9XG5cbiAgZ2V0IHRvcEZveWVyRHJvaXRzRXREZXZvaXJzKCkge1xuICAgIHJldHVybiB0aGlzLmFwcGxpY2F0aW9uLnRvcEZveWVyRHJvaXRzRXREZXZvaXJzO1xuICB9XG5cbiAgLy8gc3RyaW5nIHVzZWQgdG8gaWRlbnRpZnkgYXBwbGljYW50c1xuICBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIHRoaXMucnNhQXBwbGljYXRpb25OdW1iZXIsXG4gICAgICB0aGlzLmxhc3ROYW1lLnNwbGl0KFwiIFwiKS5qb2luKFwiLVwiKSxcbiAgICAgIHRoaXMuZmlyc3ROYW1lLnNwbGl0KFwiIFwiKS5qb2luKFwiLVwiKSxcbiAgICAgIHRoaXMucm9sZSxcbiAgICBdLmpvaW4oXCItXCIpO1xuICB9XG5cbiAgcGVyc29uYWxEYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICByc2FBcHBsaWNhdGlvbk51bWJlcjogdGhpcy5yc2FBcHBsaWNhdGlvbk51bWJlcixcbiAgICAgIHNvY2lhbFNlY3VyaXR5TnVtYmVyOiB0aGlzLnNvY2lhbFNlY3VyaXR5TnVtYmVyLFxuICAgICAgbGFzdE5hbWU6IHRoaXMubGFzdE5hbWUsXG4gICAgICBmaXJzdE5hbWU6IHRoaXMuZmlyc3ROYW1lLFxuICAgICAgcm9sZTogdGhpcy5yb2xlLFxuICAgICAgLi4udGhpcy5jb250YWN0SW5mb3MoKSxcbiAgICB9O1xuICB9XG5cbiAgY29udGFjdEluZm9zKCkge1xuICAgIHJldHVybiB7XG4gICAgICAuLi4odGhpcy5waG9uZU51bWJlciAmJiB7IHBob25lTnVtYmVyOiB0aGlzLnBob25lTnVtYmVyIH0pLFxuICAgICAgLi4uKHRoaXMuZW1haWxBZGRyZXNzICYmIHsgZW1haWxBZGRyZXNzOiB0aGlzLmVtYWlsQWRkcmVzcyB9KSxcbiAgICB9O1xuICB9XG5cbiAgaXNUb3BFbnRyYW50KCkge1xuICAgIHJldHVybiB0aGlzLnRvcEVudHJhbnQgPT09IFwiMVwiO1xuICB9XG5cbiAgZWxpZ2libGVBc05ldygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5hcHBsaWNhdGlvbi5lbGlnaWJsZUFzTmV3KCkgJiZcbiAgICAgICh0aGlzLndpdGhEcm9pdHNFdERldm9pcnMoKSB8fCB0aGlzLmVsaWdpYmxlQXNOZXdJbkZveWVyKCkpXG4gICAgKTtcbiAgfVxuXG4gIGVsaWdpYmxlQXNOZXdJbkZveWVyKCkge1xuICAgIHJldHVybiB0aGlzLmluRm95ZXJXaXRoRHJvaXRzRXREZXZvaXJzKCkgJiYgW1wiRU5GXCIsIFwiQVVUXCJdLmluY2x1ZGVzKHRoaXMucm9sZSk7XG4gIH1cblxuICBpbkZveWVyV2l0aERyb2l0c0V0RGV2b2lycygpIHtcbiAgICByZXR1cm4gdGhpcy50b3BGb3llckRyb2l0c0V0RGV2b2lycyA9PT0gXCIxXCI7XG4gIH1cblxuICB3aXRoRHJvaXRzRXREZXZvaXJzKCkge1xuICAgIHJldHVybiB0aGlzLnRvcERyb2l0c0V0RGV2b2lycyA9PT0gXCIxXCI7XG4gIH1cbn1cbiIsImltcG9ydCBBcHBsaWNhbnQgZnJvbSBcIi4vQXBwbGljYW50XCI7XG5cbmNvbnN0IEVMSUdJQkxFX1NVU1BFTlNJT05fTU9USVZFUyA9IFtcIjAxXCIsIFwiMDVcIiwgXCIwNlwiLCBcIjM1XCIsIFwiMzZcIl07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcGxpY2F0aW9uIHtcbiAgY29uc3RydWN0b3IoZG9tKSB7XG4gICAgdGhpcy5kb20gPSBkb207XG4gIH1cblxuICBnZXQgZW1haWxBZGRyZXNzKCkge1xuICAgIHJldHVybiB0aGlzLmRvbS5nZXRFbGVtZW50c0J5VGFnTmFtZShcIkFEUkVMRUNcIilbMF0/LmlubmVySFRNTDtcbiAgfVxuXG4gIGdldCBwaG9uZU51bWJlcigpIHtcbiAgICByZXR1cm4gdGhpcy5kb20uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJOVU1URUxcIilbMF0/LmlubmVySFRNTDtcbiAgfVxuXG4gIGdldCByc2FBcHBsaWNhdGlvbk51bWJlcigpIHtcbiAgICByZXR1cm4gdGhpcy5kb20uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJOVU1ERU1SU0FcIilbMF0/LmlubmVySFRNTDtcbiAgfVxuXG4gIGdldCBwaG9uZUF1dGhvcml6YXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiQVVUT1JVVElURUxcIilbMF0/LmlubmVySFRNTDtcbiAgfVxuXG4gIGdldCBlbWFpbEF1dGhvcml6YXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiQVVUT1JVVElBRFJFTEVDXCIpWzBdPy5pbm5lckhUTUw7XG4gIH1cblxuICBnZXQgZGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kb20uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJEVERFTVJTQVwiKVswXT8uaW5uZXJIVE1MO1xuICB9XG5cbiAgZ2V0IHN0YXR1c0NvZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiRVRBVERPU1JTQVwiKVswXT8uaW5uZXJIVE1MO1xuICB9XG5cbiAgZ2V0IHN1c3BlbnNpb25Nb3RpdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiTU9USVNVU1ZFUlNSU0FcIilbMF0/LmlubmVySFRNTDtcbiAgfVxuXG4gIGdldCBhcHBsaWNhbnRzKCkge1xuICAgIHJldHVybiBbLi4udGhpcy5kb20uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJQZXJzb25uZVwiKV0ubWFwKGFwcGxpY2FudERvbSA9PiB7XG4gICAgICByZXR1cm4gbmV3IEFwcGxpY2FudChhcHBsaWNhbnREb20pO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0IHRvcEZveWVyRHJvaXRzRXREZXZvaXJzKCkge1xuICAgIHJldHVybiB0aGlzLmRvbS5nZXRFbGVtZW50c0J5VGFnTmFtZShcIlRPUEZPWURST0RFVk9SU0FcIilbMF0/LmlubmVySFRNTDtcbiAgfVxuXG4gIGVsaWdpYmxlQXNOZXcoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMud2l0aERyb2l0c091dmVydHNFdFZlcnNhYmxlcygpIHx8XG4gICAgICAodGhpcy53aXRoRHJvaXRzT3V2ZXJ0c1N1c3BlbmR1KCkgJiZcbiAgICAgICAgRUxJR0lCTEVfU1VTUEVOU0lPTl9NT1RJVkVTLmluY2x1ZGVzKHRoaXMuc3VzcGVuc2lvbk1vdGl2ZSkpXG4gICAgKTtcbiAgfVxuXG4gIHdpdGhVc2FibGVFbWFpbCgpIHtcbiAgICByZXR1cm4gdGhpcy5lbWFpbEFkZHJlc3MgJiYgdGhpcy5lbWFpbEF1dGhvcml6YXRpb24gPT09IFwiQVwiO1xuICB9XG5cbiAgd2l0aEZvcmJpZGRlbkVtYWlsVXNhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZW1haWxBZGRyZXNzICYmIHRoaXMuZW1haWxBdXRob3JpemF0aW9uID09PSBcIlJcIjtcbiAgfVxuXG4gIHdpdGhvdXRFbWFpbFVzYWdlKCkge1xuICAgIHJldHVybiB0aGlzLmVtYWlsQWRkcmVzcyAmJiB0aGlzLmVtYWlsQXV0aG9yaXphdGlvbiA9PT0gXCJJXCI7XG4gIH1cblxuICB3aXRoVXNhYmxlUGhvbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMucGhvbmVOdW1iZXIgJiYgdGhpcy5waG9uZUF1dGhvcml6YXRpb24gPT09IFwiQVwiO1xuICB9XG5cbiAgd2l0aEZvcmJpZGRlblBob25lVXNhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucGhvbmVOdW1iZXIgJiYgdGhpcy5waG9uZUF1dGhvcml6YXRpb24gPT09IFwiUlwiO1xuICB9XG5cbiAgd2l0aG91dFBob25lVXNhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucGhvbmVOdW1iZXIgJiYgdGhpcy5waG9uZUF1dGhvcml6YXRpb24gPT09IFwiSVwiO1xuICB9XG5cbiAgd2l0aERyb2l0c091dmVydHNFdFZlcnNhYmxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0dXNDb2RlID09PSBcIjJcIjtcbiAgfVxuXG4gIHdpdGhEcm9pdHNPdXZlcnRzU3VzcGVuZHUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzQ29kZSA9PT0gXCI0XCI7XG4gIH1cblxuICB3aXRoRFNQKCkge1xuICAgIHJldHVybiB0aGlzLmFwcGxpY2FudHMuc29tZShhcHBsaWNhbnQgPT4gYXBwbGljYW50LnNvY2lvUHJvZmVzc2lvbmFsRGF0YSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=