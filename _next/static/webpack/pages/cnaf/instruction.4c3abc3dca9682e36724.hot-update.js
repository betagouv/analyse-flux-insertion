webpackHotUpdate_N_E("pages/cnaf/instruction",{

/***/ "./lib/admin.js":
/*!**********************!*\
  !*** ./lib/admin.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

var _defineProperty = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

var _toConsumableArray = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");

var _asyncToGenerator = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var nameMap = {
  "Test": "Instruction",
  "Test - CNAF - Instruction": "Instruction",
  "Test - CNAF - Bénéficiaire": "Bénéficiaire",
  "Test - Pole Emploi": "Pôle Emploi"
};
var MATOMO_URL = "https://stats.data.gouv.fr";
var MATOMO_SITE_ID = "159";

function fetchLog(_x, _x2) {
  return _fetchLog.apply(this, arguments);
}

function _fetchLog() {
  _fetchLog = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(token, name) {
    var _ref;

    var url, response, json, events, data;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = "".concat(MATOMO_URL, "/index.php?date=today&expanded=1&filter_limit=25&format=JSON&idSite=").concat(MATOMO_SITE_ID, "&method=Events.getCategory&module=API&period=month&segment=&token_auth=").concat(token);
            _context.next = 3;
            return fetch(url);

          case 3:
            response = _context.sent;
            _context.next = 6;
            return response.json();

          case 6:
            json = _context.sent;
            events = (_ref = []).concat.apply(_ref, _toConsumableArray(json.filter(function (i) {
              return nameMap[i.label] == name;
            }).map(function (category) {
              return category.subtable;
            })));
            data = events.map(function (e) {
              return JSON.parse(e.label);
            }).map(function (item) {
              // Legacy typo management
              var timestamp = item.timestamp || item.timetamp;
              return _objectSpread({
                seed: Math.random(),
                timestamp: timestamp,
                duration: item.duration,
                email: {
                  total: item.withEmail,
                  withAutorisation: item.withAutorisation,
                  withExplicitRefusal: item.withExplicitRefusal,
                  withoutAutorisationDetails: item.withoutAutorisationDetails
                },
                cDate: new Date(timestamp),
                phone: {}
              }, item);
            });
            data.sort(function (a, b) {
              return a.cDate - b.cDate;
            });
            return _context.abrupt("return", data);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _fetchLog.apply(this, arguments);
}

exports.fetchLog = fetchLog;

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./pages/cnaf/instruction/index.js":
/*!*****************************************!*\
  !*** ./pages/cnaf/instruction/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Instruction; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_construct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/construct */ "./node_modules/@babel/runtime/helpers/esm/construct.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_admin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/admin */ "./components/admin.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/layout */ "./components/layout.js");
/* harmony import */ var _components_mailer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/mailer */ "./components/mailer.js");
/* harmony import */ var _components_pending__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/pending */ "./components/pending.js");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _lib_cnaf__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../lib/cnaf */ "./lib/cnaf.js");
/* harmony import */ var _lib_cnaf__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_lib_cnaf__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _lib_historique__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../lib/historique */ "./lib/historique.js");





var _jsxFileName = "/home/q/code/qblanc/beta.gouv/analyse-flux-insertion/pages/cnaf/instruction/index.js",
    _s = $RefreshSig$();










var reducer = Object(_lib_historique__WEBPACK_IMPORTED_MODULE_11__["reducerFactory"])('Test - CNAF - Instruction');
var devMode = true;
function Instruction() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      devFile = _useState[0],
      setDevFile = _useState[1];

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_3__["useReducer"])(reducer, [], _lib_historique__WEBPACK_IMPORTED_MODULE_11__["initReducer"]),
      runs = _useReducer[0],
      dispatchRuns = _useReducer[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isPending = _useState2[0],
      setIsPending = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      fileSize = _useState3[0],
      setFileSize = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (devFile) {
      fileHandler(devFile);
    }
  }, [devFile]);
  var handleNewRuns = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (data) {
    dispatchRuns({
      type: 'reset',
      items: data
    });
  });
  var selectHandler = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (event) {
    for (var i = 0; i < event.target.files.length; i++) {
      fileHandler(event.target.files[i]);
    }

    event.target.value = '';
  });

  var fileHandler = function fileHandler(file) {
    if (devMode && file != devFile) {
      setDevFile(file);
    }

    setFileSize(file.size);
    setIsPending(true);
    var start_time = new Date();
    var reader = new FileReader();

    reader.onload = function (event) {
      var parser = new DOMParser();
      var dom = parser.parseFromString(event.target.result, "application/xml");
      var desc = dom.getElementsByTagName('IdentificationFlux')[0];
      var frequency = desc.getElementsByTagName('TYPEFLUX')[0].innerHTML;
      var type = desc.getElementsByTagName('NATFLUX')[0].innerHTML;
      var dt = desc.getElementsByTagName('DTCREAFLUX')[0].innerHTML;
      var time = desc.getElementsByTagName('HEUCREAFLUX')[0].innerHTML;

      var items = Object(_babel_runtime_helpers_esm_construct__WEBPACK_IMPORTED_MODULE_1__["default"])(Array, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(dom.getElementsByTagName('InfoDemandeRSA')));

      var withEmail = items.filter(function (i) {
        return i.getElementsByTagName('ADRELEC').length;
      });
      var withUsableEmail = items.filter(function (i) {
        var ok = i.getElementsByTagName('AUTORUTIADRELEC')[0];
        return i.getElementsByTagName('ADRELEC').length && ok && ok.innerHTML == "A";
      });
      var withForbiddenEmailUsage = items.filter(function (i) {
        var ok = i.getElementsByTagName('AUTORUTIADRELEC')[0];
        return i.getElementsByTagName('ADRELEC').length && ok && ok.innerHTML == "R";
      });
      var withoutEmailUsage = items.filter(function (i) {
        var ok = i.getElementsByTagName('AUTORUTIADRELEC')[0];
        return i.getElementsByTagName('ADRELEC').length && ok && ok.innerHTML == "I";
      });
      var withPhone = items.filter(function (i) {
        return i.getElementsByTagName('NUMTEL').length;
      });
      var withUsablePhone = items.filter(function (i) {
        var ok = i.getElementsByTagName('AUTORUTITEL')[0];
        return i.getElementsByTagName('NUMTEL').length && ok && ok.innerHTML == "A";
      });
      var withForbiddenPhoneUsage = items.filter(function (i) {
        var ok = i.getElementsByTagName('AUTORUTITEL')[0];
        return i.getElementsByTagName('NUMTEL').length && ok && ok.innerHTML == "R";
      });
      var withoutPhoneUsage = items.filter(function (i) {
        var ok = i.getElementsByTagName('AUTORUTITEL')[0];
        return i.getElementsByTagName('NUMTEL').length && ok && ok.innerHTML == "I";
      });
      var withDSP = items.filter(function (i) {
        return i.getElementsByTagName('DonneesSocioProfessionnelles').length;
      });
      setIsPending(false);
      dispatchRuns({
        type: 'append',
        item: {
          seed: Math.random(),
          timestamp: new Date().toISOString().slice(0, 19),
          duration: new Date() - start_time,
          filename: file.name,
          fileDatetime: "".concat(dt, "-").concat(time),
          frequency: frequency,
          type: type,
          // WIP: OK sur Firefox KO sur Chrome
          error: dom.activeElement && dom.activeElement.nodeName == "parsererror",
          total: items.length,
          email: {
            total: withEmail.length,
            withAutorisation: withUsableEmail.length,
            withExplicitRefusal: withForbiddenEmailUsage.length,
            withoutAutorisationDetails: withoutEmailUsage.length
          },
          phone: {
            total: withPhone.length,
            withAutorisation: withUsableEmail.length,
            withExplicitRefusal: withForbiddenEmailUsage.length,
            withoutAutorisationDetails: withoutEmailUsage.length
          },
          withDSP: withDSP.length,
          fileSize: file.size
        }
      });
    };

    reader.readAsText(file);
  };

  var round = function round(value) {
    return Math.round(value);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.container,
    fileHandler: fileHandler,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_admin__WEBPACK_IMPORTED_MODULE_5__["default"], {
      category: "Instruction",
      onRunRefresh: handleNewRuns
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.main,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.title,
        children: "Lecteur de fichier \xAB Instruction \xBB de la CNAF"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.description,
        children: ["Glissez et d\xE9posez le fichier CNAF \xE0 analyser ou s\xE9lectionnez le.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 76
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "file",
          onChange: selectHandler,
          multiple: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 9
      }, this), isPending && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_pending__WEBPACK_IMPORTED_MODULE_8__["default"], {
        fileSize: fileSize
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 23
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.description,
        children: ["Les op\xE9rations sont toutes r\xE9alis\xE9es sur votre ordinateur.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 69
        }, this), "Aucune donn\xE9e personnelle n'est transf\xE9r\xE9e."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.description,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "#pourquoi",
          children: "Pourquoi un tel lecteur\xA0?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 9
      }, this), runs && runs.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.subtitle,
          children: "Historique"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Date"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 161,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Fichier"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 162,
                columnNumber: 17
              }, this), devMode && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Taille"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 163,
                columnNumber: 30
              }, this), devMode && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: ["Dur\xE9e", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 164,
                  columnNumber: 51
                }, this), "(en s)"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 164,
                columnNumber: 30
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Date du fichier"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 165,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Fr\xE9quence"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 166,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Nature"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 167,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Dossiers"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 168,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                colSpan: "8",
                children: "avec email"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 169,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                colSpan: "8",
                children: "avec t\xE9l\xE9phone"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 170,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                colSpan: "2",
                rowSpan: "2",
                children: "DSP (%)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 171,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Erreur"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 172,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 160,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                colSpan: "2",
                children: "# (%)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 175,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                colSpan: "2",
                children: "et autorisation (%)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 176,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                colSpan: "2",
                children: "refus explicit (%)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 177,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                colSpan: "2",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("abbr", {
                  title: "Balise AUTORUTIADRELEC pr\xE9sente et \xE9gale \xE0 'I'",
                  children: "inconnu explicit (I) (%)"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 178,
                  columnNumber: 33
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 178,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                colSpan: "2",
                children: "# (%)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 180,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                colSpan: "2",
                children: "et autorisation (%)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 181,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                colSpan: "2",
                children: "refus explicit (%)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 182,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                colSpan: "2",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("abbr", {
                  title: "Balise AUTORUTITEL pr\xE9sente et \xE9gale \xE0 'I'",
                  children: "inconnu explicit (I) (%)"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 183,
                  columnNumber: 33
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 183,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 174,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
            children: runs.map(function (r) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: r.timestamp
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 188,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: r.filename
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 189,
                  columnNumber: 17
                }, _this), devMode && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: r.fileSize
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 190,
                  columnNumber: 30
                }, _this), devMode && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: !isNaN(r.duration) ? r.duration / 1000 : "#N/A"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 191,
                  columnNumber: 30
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: r.fileDatetime
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 192,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: "".concat(r.frequency, " (").concat(_lib_cnaf__WEBPACK_IMPORTED_MODULE_10__["frequencyNames"][r.frequency] || '?', ")")
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 193,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: "".concat(r.type, " (").concat(_lib_cnaf__WEBPACK_IMPORTED_MODULE_10__["typeNames"][r.type] || '?', ")")
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 194,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.numeric,
                  children: r.total
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 195,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.numeric,
                  children: r.email.total
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 197,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: "shrink",
                  children: round(r.email.total / r.total * 100)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 198,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.numeric,
                  children: r.email.withAutorisation
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 200,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: "shrink",
                  children: round(r.email.withAutorisation / r.total * 100)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 201,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.numeric,
                  children: r.email.withExplicitRefusal
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 203,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: "shrink",
                  children: round(r.email.withExplicitRefusal / r.total * 100)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 204,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.numeric,
                  children: r.email.withoutAutorisationDetails
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 206,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: "shrink",
                  children: round(r.email.withoutAutorisationDetails / r.total * 100)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 207,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.numeric,
                  children: r.phone.total
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 209,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: "shrink",
                  children: round(r.phone.total / r.total * 100)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 210,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.numeric,
                  children: r.phone.withAutorisation
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 212,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: "shrink",
                  children: round(r.phone.withAutorisation / r.total * 100)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 213,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.numeric,
                  children: r.phone.withExplicitRefusal
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 215,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: "shrink",
                  children: round(r.phone.withExplicitRefusal / r.total * 100)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 216,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.numeric,
                  children: r.phone.withoutAutorisationDetails
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 218,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: "shrink",
                  children: round(r.phone.withoutAutorisationDetails / r.total * 100)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 219,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.numeric,
                  children: r.withDSP
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 222,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: "shrink",
                  children: round(r.withDSP / r.total * 100)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 223,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: r.error ? 'Oui' : 'Non'
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 224,
                  columnNumber: 17
                }, _this)]
              }, "".concat(r.timestamp, "-").concat(r.filename, "-").concat(r.seed), true, {
                fileName: _jsxFileName,
                lineNumber: 187,
                columnNumber: 31
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 186,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: function onClick() {
            return dispatchRuns({
              type: 'reset'
            });
          },
          children: "Vider l'historique"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 230,
          columnNumber: 11
        }, this)]
      }, void 0, true), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.description,
        children: ["Un probl\xE8me, une question ? Contactez-nous \xE0 ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_mailer__WEBPACK_IMPORTED_MODULE_7__["default"], {
          subject: "Flux instruction CNAF",
          children: "data.insertion@beta.gouv.fr"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 234,
          columnNumber: 56
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        id: "pourquoi",
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.subtitle,
        children: "Pourquoi un lecteur de fichier CNAF\xA0?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.text,
        children: "Tous les d\xE9partements n'ont pas les outils pour analyser les fichiers envoy\xE9s par la CNAF. Cela peut ralentir et compliquer nos \xE9changes."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.text,
        children: "Avec cet outil, nous souhaitons permettre aux personnes qui ont acc\xE8s \xE0 ces fichiers d'en extraire des statistiques g\xE9n\xE9rales sans avoir \xE0 mettre les mains dans le camboui elles-m\xEAme."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 244,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.text,
        children: "Aujourd'hui, nous cherchons \xE0 comprendre pourquoi pour la CNAF 90% des dossiers pr\xE9sents dans les fichiers quotidiens d'instructions contiennent des emails alors que ce taux est de 30% \xE0 50% pour certains d\xE9partements."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 247,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 129,
    columnNumber: 5
  }, this);
}

_s(Instruction, "zHuSjMywaJQzKkb+JanT9WkKMe0=");

_c = Instruction;

var _c;

$RefreshReg$(_c, "Instruction");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2FkbWluLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9jbmFmL2luc3RydWN0aW9uL2luZGV4LmpzIl0sIm5hbWVzIjpbIm5hbWVNYXAiLCJNQVRPTU9fVVJMIiwicHJvY2VzcyIsIk1BVE9NT19TSVRFX0lEIiwiZmV0Y2hMb2ciLCJ0b2tlbiIsIm5hbWUiLCJ1cmwiLCJmZXRjaCIsInJlc3BvbnNlIiwianNvbiIsImV2ZW50cyIsImNvbmNhdCIsImZpbHRlciIsImkiLCJsYWJlbCIsIm1hcCIsImNhdGVnb3J5Iiwic3VidGFibGUiLCJkYXRhIiwiZSIsIkpTT04iLCJwYXJzZSIsIml0ZW0iLCJ0aW1lc3RhbXAiLCJ0aW1ldGFtcCIsInNlZWQiLCJNYXRoIiwicmFuZG9tIiwiZHVyYXRpb24iLCJlbWFpbCIsInRvdGFsIiwid2l0aEVtYWlsIiwid2l0aEF1dG9yaXNhdGlvbiIsIndpdGhFeHBsaWNpdFJlZnVzYWwiLCJ3aXRob3V0QXV0b3Jpc2F0aW9uRGV0YWlscyIsImNEYXRlIiwiRGF0ZSIsInBob25lIiwic29ydCIsImEiLCJiIiwiZXhwb3J0cyIsInJlZHVjZXIiLCJyZWR1Y2VyRmFjdG9yeSIsImRldk1vZGUiLCJJbnN0cnVjdGlvbiIsInVzZVN0YXRlIiwiZGV2RmlsZSIsInNldERldkZpbGUiLCJ1c2VSZWR1Y2VyIiwiaW5pdFJlZHVjZXIiLCJydW5zIiwiZGlzcGF0Y2hSdW5zIiwiaXNQZW5kaW5nIiwic2V0SXNQZW5kaW5nIiwiZmlsZVNpemUiLCJzZXRGaWxlU2l6ZSIsInVzZUVmZmVjdCIsImZpbGVIYW5kbGVyIiwiaGFuZGxlTmV3UnVucyIsInVzZUNhbGxiYWNrIiwidHlwZSIsIml0ZW1zIiwic2VsZWN0SGFuZGxlciIsImV2ZW50IiwidGFyZ2V0IiwiZmlsZXMiLCJsZW5ndGgiLCJ2YWx1ZSIsImZpbGUiLCJzaXplIiwic3RhcnRfdGltZSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJwYXJzZXIiLCJET01QYXJzZXIiLCJkb20iLCJwYXJzZUZyb21TdHJpbmciLCJyZXN1bHQiLCJkZXNjIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJmcmVxdWVuY3kiLCJpbm5lckhUTUwiLCJkdCIsInRpbWUiLCJBcnJheSIsIndpdGhVc2FibGVFbWFpbCIsIm9rIiwid2l0aEZvcmJpZGRlbkVtYWlsVXNhZ2UiLCJ3aXRob3V0RW1haWxVc2FnZSIsIndpdGhQaG9uZSIsIndpdGhVc2FibGVQaG9uZSIsIndpdGhGb3JiaWRkZW5QaG9uZVVzYWdlIiwid2l0aG91dFBob25lVXNhZ2UiLCJ3aXRoRFNQIiwidG9JU09TdHJpbmciLCJzbGljZSIsImZpbGVuYW1lIiwiZmlsZURhdGV0aW1lIiwiZXJyb3IiLCJhY3RpdmVFbGVtZW50Iiwibm9kZU5hbWUiLCJyZWFkQXNUZXh0Iiwicm91bmQiLCJzdHlsZXMiLCJjb250YWluZXIiLCJtYWluIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInN1YnRpdGxlIiwiciIsImlzTmFOIiwiZnJlcXVlbmN5TmFtZXMiLCJ0eXBlTmFtZXMiLCJudW1lcmljIiwidGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsT0FBTyxHQUFHO0FBQ2QsVUFBUSxhQURNO0FBRWQsK0JBQTZCLGFBRmY7QUFHZCxnQ0FBOEIsY0FIaEI7QUFJZCx3QkFBc0I7QUFKUixDQUFoQjtBQU9BLElBQU1DLFVBQVUsR0FBR0MsNEJBQW5CO0FBQ0EsSUFBTUMsY0FBYyxHQUFHRCxLQUF2Qjs7U0FFZUUsUTs7Ozs7dUVBQWYsaUJBQXdCQyxLQUF4QixFQUErQkMsSUFBL0I7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1FDLGVBRFIsYUFDaUJOLFVBRGpCLGlGQUNrR0UsY0FEbEcsb0ZBQzBMRSxLQUQxTDtBQUFBO0FBQUEsbUJBRXlCRyxLQUFLLENBQUNELEdBQUQsQ0FGOUI7O0FBQUE7QUFFUUUsb0JBRlI7QUFBQTtBQUFBLG1CQUdxQkEsUUFBUSxDQUFDQyxJQUFULEVBSHJCOztBQUFBO0FBR1FBLGdCQUhSO0FBSVFDLGtCQUpSLEdBSWlCLFlBQUdDLE1BQUgsZ0NBQWFGLElBQUksQ0FBQ0csTUFBTCxDQUFZLFVBQUFDLENBQUM7QUFBQSxxQkFBSWQsT0FBTyxDQUFDYyxDQUFDLENBQUNDLEtBQUgsQ0FBUCxJQUFvQlQsSUFBeEI7QUFBQSxhQUFiLEVBQTJDVSxHQUEzQyxDQUErQyxVQUFBQyxRQUFRO0FBQUEscUJBQUlBLFFBQVEsQ0FBQ0MsUUFBYjtBQUFBLGFBQXZELENBQWIsRUFKakI7QUFLUUMsZ0JBTFIsR0FLZVIsTUFBTSxDQUFDSyxHQUFQLENBQVcsVUFBQUksQ0FBQztBQUFBLHFCQUFJQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0YsQ0FBQyxDQUFDTCxLQUFiLENBQUo7QUFBQSxhQUFaLEVBQXFDQyxHQUFyQyxDQUF5QyxVQUFBTyxJQUFJLEVBQUk7QUFFNUQ7QUFDQSxrQkFBTUMsU0FBUyxHQUFHRCxJQUFJLENBQUNDLFNBQUwsSUFBa0JELElBQUksQ0FBQ0UsUUFBekM7QUFDQTtBQUNFQyxvQkFBSSxFQUFFQyxJQUFJLENBQUNDLE1BQUwsRUFEUjtBQUVFSix5QkFBUyxFQUFUQSxTQUZGO0FBR0VLLHdCQUFRLEVBQUVOLElBQUksQ0FBQ00sUUFIakI7QUFJRUMscUJBQUssRUFBRTtBQUNMQyx1QkFBSyxFQUFFUixJQUFJLENBQUNTLFNBRFA7QUFFTEMsa0NBQWdCLEVBQUVWLElBQUksQ0FBQ1UsZ0JBRmxCO0FBR0xDLHFDQUFtQixFQUFFWCxJQUFJLENBQUNXLG1CQUhyQjtBQUlMQyw0Q0FBMEIsRUFBRVosSUFBSSxDQUFDWTtBQUo1QixpQkFKVDtBQVVFQyxxQkFBSyxFQUFHLElBQUlDLElBQUosQ0FBU2IsU0FBVCxDQVZWO0FBV0VjLHFCQUFLLEVBQUU7QUFYVCxpQkFZS2YsSUFaTDtBQWNELGFBbEJZLENBTGY7QUF5QkVKLGdCQUFJLENBQUNvQixJQUFMLENBQVUsVUFBQ0MsQ0FBRCxFQUFHQyxDQUFIO0FBQUEscUJBQVNELENBQUMsQ0FBQ0osS0FBRixHQUFVSyxDQUFDLENBQUNMLEtBQXJCO0FBQUEsYUFBVjtBQXpCRiw2Q0EwQlNqQixJQTFCVDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O0FBNkJBdUIsT0FBTyxDQUFDdEMsUUFBUixHQUFtQkEsUUFBbkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQSxJQUFNdUMsT0FBTyxHQUFHQyx1RUFBYyxDQUFDLDJCQUFELENBQTlCO0FBQ0EsSUFBTUMsT0FBTyxPQUFiO0FBRWUsU0FBU0MsV0FBVCxHQUF1QjtBQUFBOztBQUFBOztBQUFBLGtCQUNOQyxzREFBUSxDQUFDLElBQUQsQ0FERjtBQUFBLE1BQzdCQyxPQUQ2QjtBQUFBLE1BQ3BCQyxVQURvQjs7QUFBQSxvQkFFUEMsd0RBQVUsQ0FBQ1AsT0FBRCxFQUFVLEVBQVYsRUFBY1EsNERBQWQsQ0FGSDtBQUFBLE1BRTdCQyxJQUY2QjtBQUFBLE1BRXZCQyxZQUZ1Qjs7QUFBQSxtQkFHRk4sc0RBQVEsQ0FBQyxLQUFELENBSE47QUFBQSxNQUc3Qk8sU0FINkI7QUFBQSxNQUdsQkMsWUFIa0I7O0FBQUEsbUJBSUpSLHNEQUFRLENBQUMsQ0FBRCxDQUpKO0FBQUEsTUFJN0JTLFFBSjZCO0FBQUEsTUFJbkJDLFdBSm1COztBQU1wQ0MseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBR1YsT0FBSCxFQUFZO0FBQ1ZXLGlCQUFXLENBQUNYLE9BQUQsQ0FBWDtBQUNEO0FBQ0YsR0FKUSxFQUlOLENBQUNBLE9BQUQsQ0FKTSxDQUFUO0FBTUEsTUFBTVksYUFBYSxHQUFHQyx5REFBVyxDQUFDLFVBQUExQyxJQUFJLEVBQUk7QUFDeENrQyxnQkFBWSxDQUFDO0FBQ1hTLFVBQUksRUFBRSxPQURLO0FBRVhDLFdBQUssRUFBRTVDO0FBRkksS0FBRCxDQUFaO0FBSUQsR0FMZ0MsQ0FBakM7QUFPQSxNQUFNNkMsYUFBYSxHQUFHSCx5REFBVyxDQUFDLFVBQUNJLEtBQUQsRUFBVztBQUMzQyxTQUFLLElBQUluRCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFDbUQsS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtBQWIsQ0FBbUJDLE1BQXJDLEVBQTZDdEQsQ0FBQyxFQUE5QyxFQUFrRDtBQUNoRDZDLGlCQUFXLENBQUNNLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxLQUFiLENBQW1CckQsQ0FBbkIsQ0FBRCxDQUFYO0FBQ0Q7O0FBQ0RtRCxTQUFLLENBQUNDLE1BQU4sQ0FBYUcsS0FBYixHQUFxQixFQUFyQjtBQUNELEdBTGdDLENBQWpDOztBQU9BLE1BQU1WLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNXLElBQUQsRUFBVTtBQUM1QixRQUFJekIsT0FBTyxJQUFJeUIsSUFBSSxJQUFJdEIsT0FBdkIsRUFBZ0M7QUFDOUJDLGdCQUFVLENBQUNxQixJQUFELENBQVY7QUFDRDs7QUFDRGIsZUFBVyxDQUFDYSxJQUFJLENBQUNDLElBQU4sQ0FBWDtBQUNBaEIsZ0JBQVksQ0FBQyxJQUFELENBQVo7QUFDQSxRQUFNaUIsVUFBVSxHQUFHLElBQUluQyxJQUFKLEVBQW5CO0FBRUEsUUFBSW9DLE1BQU0sR0FBRyxJQUFJQyxVQUFKLEVBQWI7O0FBQ0FELFVBQU0sQ0FBQ0UsTUFBUCxHQUFnQixVQUFTVixLQUFULEVBQWdCO0FBQzlCLFVBQU1XLE1BQU0sR0FBRyxJQUFJQyxTQUFKLEVBQWY7QUFDQSxVQUFNQyxHQUFHLEdBQUdGLE1BQU0sQ0FBQ0csZUFBUCxDQUF1QmQsS0FBSyxDQUFDQyxNQUFOLENBQWFjLE1BQXBDLEVBQTRDLGlCQUE1QyxDQUFaO0FBRUEsVUFBTUMsSUFBSSxHQUFHSCxHQUFHLENBQUNJLG9CQUFKLENBQXlCLG9CQUF6QixFQUErQyxDQUEvQyxDQUFiO0FBQ0EsVUFBTUMsU0FBUyxHQUFHRixJQUFJLENBQUNDLG9CQUFMLENBQTBCLFVBQTFCLEVBQXNDLENBQXRDLEVBQXlDRSxTQUEzRDtBQUNBLFVBQU10QixJQUFJLEdBQUdtQixJQUFJLENBQUNDLG9CQUFMLENBQTBCLFNBQTFCLEVBQXFDLENBQXJDLEVBQXdDRSxTQUFyRDtBQUNBLFVBQU1DLEVBQUUsR0FBR0osSUFBSSxDQUFDQyxvQkFBTCxDQUEwQixZQUExQixFQUF3QyxDQUF4QyxFQUEyQ0UsU0FBdEQ7QUFDQSxVQUFNRSxJQUFJLEdBQUdMLElBQUksQ0FBQ0Msb0JBQUwsQ0FBMEIsYUFBMUIsRUFBeUMsQ0FBekMsRUFBNENFLFNBQXpEOztBQUVBLFVBQU1yQixLQUFLLEdBQUcscUZBQUl3QixLQUFQLCtGQUFnQlQsR0FBRyxDQUFDSSxvQkFBSixDQUF5QixnQkFBekIsQ0FBaEIsRUFBWDs7QUFDQSxVQUFNbEQsU0FBUyxHQUFHK0IsS0FBSyxDQUFDbEQsTUFBTixDQUFhLFVBQUFDLENBQUM7QUFBQSxlQUFJQSxDQUFDLENBQUNvRSxvQkFBRixDQUF1QixTQUF2QixFQUFrQ2QsTUFBdEM7QUFBQSxPQUFkLENBQWxCO0FBQ0EsVUFBTW9CLGVBQWUsR0FBR3pCLEtBQUssQ0FBQ2xELE1BQU4sQ0FBYSxVQUFBQyxDQUFDLEVBQUk7QUFDeEMsWUFBTTJFLEVBQUUsR0FBRzNFLENBQUMsQ0FBQ29FLG9CQUFGLENBQXVCLGlCQUF2QixFQUEwQyxDQUExQyxDQUFYO0FBQ0EsZUFBT3BFLENBQUMsQ0FBQ29FLG9CQUFGLENBQXVCLFNBQXZCLEVBQWtDZCxNQUFsQyxJQUE0Q3FCLEVBQTVDLElBQWtEQSxFQUFFLENBQUNMLFNBQUgsSUFBZ0IsR0FBekU7QUFDRCxPQUh1QixDQUF4QjtBQUlBLFVBQU1NLHVCQUF1QixHQUFHM0IsS0FBSyxDQUFDbEQsTUFBTixDQUFhLFVBQUFDLENBQUMsRUFBSTtBQUNoRCxZQUFNMkUsRUFBRSxHQUFHM0UsQ0FBQyxDQUFDb0Usb0JBQUYsQ0FBdUIsaUJBQXZCLEVBQTBDLENBQTFDLENBQVg7QUFDQSxlQUFPcEUsQ0FBQyxDQUFDb0Usb0JBQUYsQ0FBdUIsU0FBdkIsRUFBa0NkLE1BQWxDLElBQTRDcUIsRUFBNUMsSUFBa0RBLEVBQUUsQ0FBQ0wsU0FBSCxJQUFnQixHQUF6RTtBQUNELE9BSCtCLENBQWhDO0FBSUEsVUFBTU8saUJBQWlCLEdBQUc1QixLQUFLLENBQUNsRCxNQUFOLENBQWEsVUFBQUMsQ0FBQyxFQUFJO0FBQzFDLFlBQU0yRSxFQUFFLEdBQUczRSxDQUFDLENBQUNvRSxvQkFBRixDQUF1QixpQkFBdkIsRUFBMEMsQ0FBMUMsQ0FBWDtBQUNBLGVBQU9wRSxDQUFDLENBQUNvRSxvQkFBRixDQUF1QixTQUF2QixFQUFrQ2QsTUFBbEMsSUFBNENxQixFQUE1QyxJQUFrREEsRUFBRSxDQUFDTCxTQUFILElBQWdCLEdBQXpFO0FBQ0QsT0FIeUIsQ0FBMUI7QUFLQSxVQUFNUSxTQUFTLEdBQUc3QixLQUFLLENBQUNsRCxNQUFOLENBQWEsVUFBQUMsQ0FBQztBQUFBLGVBQUlBLENBQUMsQ0FBQ29FLG9CQUFGLENBQXVCLFFBQXZCLEVBQWlDZCxNQUFyQztBQUFBLE9BQWQsQ0FBbEI7QUFDQSxVQUFNeUIsZUFBZSxHQUFHOUIsS0FBSyxDQUFDbEQsTUFBTixDQUFhLFVBQUFDLENBQUMsRUFBSTtBQUN4QyxZQUFNMkUsRUFBRSxHQUFHM0UsQ0FBQyxDQUFDb0Usb0JBQUYsQ0FBdUIsYUFBdkIsRUFBc0MsQ0FBdEMsQ0FBWDtBQUNBLGVBQU9wRSxDQUFDLENBQUNvRSxvQkFBRixDQUF1QixRQUF2QixFQUFpQ2QsTUFBakMsSUFBMkNxQixFQUEzQyxJQUFpREEsRUFBRSxDQUFDTCxTQUFILElBQWdCLEdBQXhFO0FBQ0QsT0FIdUIsQ0FBeEI7QUFJQSxVQUFNVSx1QkFBdUIsR0FBRy9CLEtBQUssQ0FBQ2xELE1BQU4sQ0FBYSxVQUFBQyxDQUFDLEVBQUk7QUFDaEQsWUFBTTJFLEVBQUUsR0FBRzNFLENBQUMsQ0FBQ29FLG9CQUFGLENBQXVCLGFBQXZCLEVBQXNDLENBQXRDLENBQVg7QUFDQSxlQUFPcEUsQ0FBQyxDQUFDb0Usb0JBQUYsQ0FBdUIsUUFBdkIsRUFBaUNkLE1BQWpDLElBQTJDcUIsRUFBM0MsSUFBaURBLEVBQUUsQ0FBQ0wsU0FBSCxJQUFnQixHQUF4RTtBQUNELE9BSCtCLENBQWhDO0FBSUEsVUFBTVcsaUJBQWlCLEdBQUdoQyxLQUFLLENBQUNsRCxNQUFOLENBQWEsVUFBQUMsQ0FBQyxFQUFJO0FBQzFDLFlBQU0yRSxFQUFFLEdBQUczRSxDQUFDLENBQUNvRSxvQkFBRixDQUF1QixhQUF2QixFQUFzQyxDQUF0QyxDQUFYO0FBQ0EsZUFBT3BFLENBQUMsQ0FBQ29FLG9CQUFGLENBQXVCLFFBQXZCLEVBQWlDZCxNQUFqQyxJQUEyQ3FCLEVBQTNDLElBQWlEQSxFQUFFLENBQUNMLFNBQUgsSUFBZ0IsR0FBeEU7QUFDRCxPQUh5QixDQUExQjtBQUtBLFVBQU1ZLE9BQU8sR0FBR2pDLEtBQUssQ0FBQ2xELE1BQU4sQ0FBYSxVQUFBQyxDQUFDO0FBQUEsZUFBSUEsQ0FBQyxDQUFDb0Usb0JBQUYsQ0FBdUIsOEJBQXZCLEVBQXVEZCxNQUEzRDtBQUFBLE9BQWQsQ0FBaEI7QUFFQWIsa0JBQVksQ0FBQyxLQUFELENBQVo7QUFFQUYsa0JBQVksQ0FBQztBQUNYUyxZQUFJLEVBQUUsUUFESztBQUVYdkMsWUFBSSxFQUFFO0FBQ0pHLGNBQUksRUFBRUMsSUFBSSxDQUFDQyxNQUFMLEVBREY7QUFFSkosbUJBQVMsRUFBRyxJQUFJYSxJQUFKLEVBQUQsQ0FBYTRELFdBQWIsR0FBMkJDLEtBQTNCLENBQWlDLENBQWpDLEVBQW1DLEVBQW5DLENBRlA7QUFHSnJFLGtCQUFRLEVBQUcsSUFBSVEsSUFBSixFQUFELEdBQWVtQyxVQUhyQjtBQUlKMkIsa0JBQVEsRUFBRTdCLElBQUksQ0FBQ2hFLElBSlg7QUFLSjhGLHNCQUFZLFlBQUtmLEVBQUwsY0FBV0MsSUFBWCxDQUxSO0FBTUpILG1CQUFTLEVBQVRBLFNBTkk7QUFPSnJCLGNBQUksRUFBSkEsSUFQSTtBQVFKO0FBQ0F1QyxlQUFLLEVBQUV2QixHQUFHLENBQUN3QixhQUFKLElBQXFCeEIsR0FBRyxDQUFDd0IsYUFBSixDQUFrQkMsUUFBbEIsSUFBOEIsYUFUdEQ7QUFVSnhFLGVBQUssRUFBRWdDLEtBQUssQ0FBQ0ssTUFWVDtBQVdKdEMsZUFBSyxFQUFFO0FBQ0xDLGlCQUFLLEVBQUVDLFNBQVMsQ0FBQ29DLE1BRFo7QUFFTG5DLDRCQUFnQixFQUFFdUQsZUFBZSxDQUFDcEIsTUFGN0I7QUFHTGxDLCtCQUFtQixFQUFFd0QsdUJBQXVCLENBQUN0QixNQUh4QztBQUlMakMsc0NBQTBCLEVBQUV3RCxpQkFBaUIsQ0FBQ3ZCO0FBSnpDLFdBWEg7QUFpQko5QixlQUFLLEVBQUU7QUFDTFAsaUJBQUssRUFBRTZELFNBQVMsQ0FBQ3hCLE1BRFo7QUFFTG5DLDRCQUFnQixFQUFFdUQsZUFBZSxDQUFDcEIsTUFGN0I7QUFHTGxDLCtCQUFtQixFQUFFd0QsdUJBQXVCLENBQUN0QixNQUh4QztBQUlMakMsc0NBQTBCLEVBQUV3RCxpQkFBaUIsQ0FBQ3ZCO0FBSnpDLFdBakJIO0FBdUJKNEIsaUJBQU8sRUFBRUEsT0FBTyxDQUFDNUIsTUF2QmI7QUF3QkpaLGtCQUFRLEVBQUVjLElBQUksQ0FBQ0M7QUF4Qlg7QUFGSyxPQUFELENBQVo7QUE2QkQsS0F4RUQ7O0FBeUVBRSxVQUFNLENBQUMrQixVQUFQLENBQWtCbEMsSUFBbEI7QUFDRCxHQW5GRDs7QUFxRkEsTUFBTW1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNwQyxLQUFEO0FBQUEsV0FBVzFDLElBQUksQ0FBQzhFLEtBQUwsQ0FBV3BDLEtBQVgsQ0FBWDtBQUFBLEdBQWQ7O0FBQ0Esc0JBQ0UscUVBQUMsMERBQUQ7QUFBUSxhQUFTLEVBQUVxQyw4REFBTSxDQUFDQyxTQUExQjtBQUNFLGVBQVcsRUFBRWhELFdBRGY7QUFBQSw0QkFFRSxxRUFBQyx5REFBRDtBQUFPLGNBQVEsRUFBQyxhQUFoQjtBQUE4QixrQkFBWSxFQUFFQztBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFHRTtBQUFNLGVBQVMsRUFBRThDLDhEQUFNLENBQUNFLElBQXhCO0FBQUEsOEJBQ0U7QUFBSSxpQkFBUyxFQUFFRiw4REFBTSxDQUFDRyxLQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBS0U7QUFBRyxpQkFBUyxFQUFFSCw4REFBTSxDQUFDSSxXQUFyQjtBQUFBLDhHQUNtRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURuRSxlQUVFO0FBQU8sY0FBSSxFQUFDLE1BQVo7QUFBbUIsa0JBQVEsRUFBRTlDLGFBQTdCO0FBQTRDLGtCQUFRO0FBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEYsRUFVR1YsU0FBUyxpQkFBSSxxRUFBQywyREFBRDtBQUFnQixnQkFBUSxFQUFFRTtBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVmhCLGVBWUU7QUFBRyxpQkFBUyxFQUFFa0QsOERBQU0sQ0FBQ0ksV0FBckI7QUFBQSx1R0FDNEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFENUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWkYsZUFpQkU7QUFBRyxpQkFBUyxFQUFFSiw4REFBTSxDQUFDSSxXQUFyQjtBQUFBLCtCQUNFO0FBQUcsY0FBSSxFQUFDLFdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBakJGLEVBcUJJMUQsSUFBSSxJQUFJQSxJQUFJLENBQUNnQixNQUFMLEdBQWMsQ0FBdEIsaUJBQTRCO0FBQUEsZ0NBQzVCO0FBQUksbUJBQVMsRUFBRXNDLDhEQUFNLENBQUNLLFFBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUQ0QixlQUs1QjtBQUFBLGtDQUNFO0FBQUEsb0NBQ0U7QUFBQSxzQ0FDRTtBQUFJLHVCQUFPLEVBQUMsR0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixlQUVFO0FBQUksdUJBQU8sRUFBQyxHQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZGLEVBR0lsRSxPQUFPLGlCQUFJO0FBQUksdUJBQU8sRUFBQyxHQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUhmLEVBSUlBLE9BQU8saUJBQUk7QUFBSSx1QkFBTyxFQUFDLEdBQVo7QUFBQSxvREFBcUI7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUpmLGVBS0U7QUFBSSx1QkFBTyxFQUFDLEdBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBTEYsZUFNRTtBQUFJLHVCQUFPLEVBQUMsR0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFORixlQU9FO0FBQUksdUJBQU8sRUFBQyxHQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQVBGLGVBUUU7QUFBSSx1QkFBTyxFQUFDLEdBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBUkYsZUFTRTtBQUFJLHVCQUFPLEVBQUMsR0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFURixlQVVFO0FBQUksdUJBQU8sRUFBQyxHQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQVZGLGVBV0U7QUFBSSx1QkFBTyxFQUFDLEdBQVo7QUFBZ0IsdUJBQU8sRUFBQyxHQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFYRixlQVlFO0FBQUksdUJBQU8sRUFBQyxHQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQWVFO0FBQUEsc0NBQ0U7QUFBSSx1QkFBTyxFQUFDLEdBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsZUFFRTtBQUFJLHVCQUFPLEVBQUMsR0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFGRixlQUdFO0FBQUksdUJBQU8sRUFBQyxHQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUhGLGVBSUU7QUFBSSx1QkFBTyxFQUFDLEdBQVo7QUFBQSx1Q0FBZ0I7QUFBTSx1QkFBSyxFQUFDLHlEQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSkYsZUFNRTtBQUFJLHVCQUFPLEVBQUMsR0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFORixlQU9FO0FBQUksdUJBQU8sRUFBQyxHQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQVBGLGVBUUU7QUFBSSx1QkFBTyxFQUFDLEdBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBUkYsZUFTRTtBQUFJLHVCQUFPLEVBQUMsR0FBWjtBQUFBLHVDQUFnQjtBQUFNLHVCQUFLLEVBQUMscURBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBNEJFO0FBQUEsc0JBQ0dPLElBQUksQ0FBQ3BDLEdBQUwsQ0FBUyxVQUFBZ0csQ0FBQztBQUFBLGtDQUFLO0FBQUEsd0NBQ2Q7QUFBQSw0QkFBS0EsQ0FBQyxDQUFDeEY7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURjLGVBRWQ7QUFBQSw0QkFBS3dGLENBQUMsQ0FBQ2I7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZjLEVBR1p0RCxPQUFPLGlCQUFJO0FBQUEsNEJBQUttRSxDQUFDLENBQUN4RDtBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBSEMsRUFJWlgsT0FBTyxpQkFBSTtBQUFBLDRCQUFLLENBQUNvRSxLQUFLLENBQUNELENBQUMsQ0FBQ25GLFFBQUgsQ0FBTixHQUFxQm1GLENBQUMsQ0FBQ25GLFFBQUYsR0FBVyxJQUFoQyxHQUF1QztBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUpDLGVBS2Q7QUFBQSw0QkFBS21GLENBQUMsQ0FBQ1o7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUxjLGVBTWQ7QUFBQSxzQ0FBUVksQ0FBQyxDQUFDN0IsU0FBVixlQUF3QitCLHlEQUFjLENBQUNGLENBQUMsQ0FBQzdCLFNBQUgsQ0FBZCxJQUErQixHQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBTmMsZUFPZDtBQUFBLHNDQUFRNkIsQ0FBQyxDQUFDbEQsSUFBVixlQUFtQnFELG9EQUFTLENBQUNILENBQUMsQ0FBQ2xELElBQUgsQ0FBVCxJQUFxQixHQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBUGMsZUFRZDtBQUFJLDJCQUFTLEVBQUU0Qyw4REFBTSxDQUFDVSxPQUF0QjtBQUFBLDRCQUFnQ0osQ0FBQyxDQUFDakY7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFSYyxlQVVkO0FBQUksMkJBQVMsRUFBRTJFLDhEQUFNLENBQUNVLE9BQXRCO0FBQUEsNEJBQWdDSixDQUFDLENBQUNsRixLQUFGLENBQVFDO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBVmMsZUFXZDtBQUFJLDJCQUFTLEVBQUMsUUFBZDtBQUFBLDRCQUF3QjBFLEtBQUssQ0FBQ08sQ0FBQyxDQUFDbEYsS0FBRixDQUFRQyxLQUFSLEdBQWNpRixDQUFDLENBQUNqRixLQUFoQixHQUFzQixHQUF2QjtBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQVhjLGVBYWQ7QUFBSSwyQkFBUyxFQUFFMkUsOERBQU0sQ0FBQ1UsT0FBdEI7QUFBQSw0QkFBZ0NKLENBQUMsQ0FBQ2xGLEtBQUYsQ0FBUUc7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFiYyxlQWNkO0FBQUksMkJBQVMsRUFBQyxRQUFkO0FBQUEsNEJBQXdCd0UsS0FBSyxDQUFDTyxDQUFDLENBQUNsRixLQUFGLENBQVFHLGdCQUFSLEdBQXlCK0UsQ0FBQyxDQUFDakYsS0FBM0IsR0FBaUMsR0FBbEM7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFkYyxlQWdCZDtBQUFJLDJCQUFTLEVBQUUyRSw4REFBTSxDQUFDVSxPQUF0QjtBQUFBLDRCQUFnQ0osQ0FBQyxDQUFDbEYsS0FBRixDQUFRSTtBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQWhCYyxlQWlCZDtBQUFJLDJCQUFTLEVBQUMsUUFBZDtBQUFBLDRCQUF3QnVFLEtBQUssQ0FBQ08sQ0FBQyxDQUFDbEYsS0FBRixDQUFRSSxtQkFBUixHQUE0QjhFLENBQUMsQ0FBQ2pGLEtBQTlCLEdBQW9DLEdBQXJDO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBakJjLGVBbUJkO0FBQUksMkJBQVMsRUFBRTJFLDhEQUFNLENBQUNVLE9BQXRCO0FBQUEsNEJBQWdDSixDQUFDLENBQUNsRixLQUFGLENBQVFLO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBbkJjLGVBb0JkO0FBQUksMkJBQVMsRUFBQyxRQUFkO0FBQUEsNEJBQXdCc0UsS0FBSyxDQUFDTyxDQUFDLENBQUNsRixLQUFGLENBQVFLLDBCQUFSLEdBQW1DNkUsQ0FBQyxDQUFDakYsS0FBckMsR0FBMkMsR0FBNUM7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFwQmMsZUFzQmQ7QUFBSSwyQkFBUyxFQUFFMkUsOERBQU0sQ0FBQ1UsT0FBdEI7QUFBQSw0QkFBZ0NKLENBQUMsQ0FBQzFFLEtBQUYsQ0FBUVA7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkF0QmMsZUF1QmQ7QUFBSSwyQkFBUyxFQUFDLFFBQWQ7QUFBQSw0QkFBd0IwRSxLQUFLLENBQUNPLENBQUMsQ0FBQzFFLEtBQUYsQ0FBUVAsS0FBUixHQUFjaUYsQ0FBQyxDQUFDakYsS0FBaEIsR0FBc0IsR0FBdkI7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkF2QmMsZUF5QmQ7QUFBSSwyQkFBUyxFQUFFMkUsOERBQU0sQ0FBQ1UsT0FBdEI7QUFBQSw0QkFBZ0NKLENBQUMsQ0FBQzFFLEtBQUYsQ0FBUUw7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkF6QmMsZUEwQmQ7QUFBSSwyQkFBUyxFQUFDLFFBQWQ7QUFBQSw0QkFBd0J3RSxLQUFLLENBQUNPLENBQUMsQ0FBQzFFLEtBQUYsQ0FBUUwsZ0JBQVIsR0FBeUIrRSxDQUFDLENBQUNqRixLQUEzQixHQUFpQyxHQUFsQztBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQTFCYyxlQTRCZDtBQUFJLDJCQUFTLEVBQUUyRSw4REFBTSxDQUFDVSxPQUF0QjtBQUFBLDRCQUFnQ0osQ0FBQyxDQUFDMUUsS0FBRixDQUFRSjtBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQTVCYyxlQTZCZDtBQUFJLDJCQUFTLEVBQUMsUUFBZDtBQUFBLDRCQUF3QnVFLEtBQUssQ0FBQ08sQ0FBQyxDQUFDMUUsS0FBRixDQUFRSixtQkFBUixHQUE0QjhFLENBQUMsQ0FBQ2pGLEtBQTlCLEdBQW9DLEdBQXJDO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBN0JjLGVBK0JkO0FBQUksMkJBQVMsRUFBRTJFLDhEQUFNLENBQUNVLE9BQXRCO0FBQUEsNEJBQWdDSixDQUFDLENBQUMxRSxLQUFGLENBQVFIO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBL0JjLGVBZ0NkO0FBQUksMkJBQVMsRUFBQyxRQUFkO0FBQUEsNEJBQXdCc0UsS0FBSyxDQUFDTyxDQUFDLENBQUMxRSxLQUFGLENBQVFILDBCQUFSLEdBQW1DNkUsQ0FBQyxDQUFDakYsS0FBckMsR0FBMkMsR0FBNUM7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFoQ2MsZUFtQ2Q7QUFBSSwyQkFBUyxFQUFFMkUsOERBQU0sQ0FBQ1UsT0FBdEI7QUFBQSw0QkFBZ0NKLENBQUMsQ0FBQ2hCO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBbkNjLGVBb0NkO0FBQUksMkJBQVMsRUFBQyxRQUFkO0FBQUEsNEJBQXdCUyxLQUFLLENBQUNPLENBQUMsQ0FBQ2hCLE9BQUYsR0FBVWdCLENBQUMsQ0FBQ2pGLEtBQVosR0FBa0IsR0FBbkI7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFwQ2MsZUFxQ2Q7QUFBQSw0QkFBS2lGLENBQUMsQ0FBQ1gsS0FBRixHQUFVLEtBQVYsR0FBa0I7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFyQ2M7QUFBQSwyQkFBWVcsQ0FBQyxDQUFDeEYsU0FBZCxjQUEyQndGLENBQUMsQ0FBQ2IsUUFBN0IsY0FBeUNhLENBQUMsQ0FBQ3RGLElBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQUw7QUFBQSxhQUFWO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkE1QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUw0QixlQTZFNUI7QUFBUSxpQkFBTyxFQUFFO0FBQUEsbUJBQU0yQixZQUFZLENBQUM7QUFBQ1Msa0JBQUksRUFBRTtBQUFQLGFBQUQsQ0FBbEI7QUFBQSxXQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkE3RTRCO0FBQUEsc0JBckJoQyxlQXFHRTtBQUFHLGlCQUFTLEVBQUU0Qyw4REFBTSxDQUFDSSxXQUFyQjtBQUFBLHVGQUMrQyxxRUFBQywwREFBRDtBQUFRLGlCQUFPLEVBQUMsdUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUQvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FyR0YsZUF5R0U7QUFBSSxVQUFFLEVBQUMsVUFBUDtBQUFrQixpQkFBUyxFQUFFSiw4REFBTSxDQUFDSyxRQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXpHRixlQTZHRTtBQUFHLGlCQUFTLEVBQUVMLDhEQUFNLENBQUNXLElBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBN0dGLGVBZ0hFO0FBQUcsaUJBQVMsRUFBRVgsOERBQU0sQ0FBQ1csSUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FoSEYsZUFtSEU7QUFBRyxpQkFBUyxFQUFFWCw4REFBTSxDQUFDVyxJQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQW5IRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQThIRDs7R0E5T3VCdkUsVzs7S0FBQUEsVyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jbmFmL2luc3RydWN0aW9uLjRjM2FiYzNkY2E5NjgyZTM2NzI0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBuYW1lTWFwID0ge1xuICBcIlRlc3RcIjogXCJJbnN0cnVjdGlvblwiLFxuICBcIlRlc3QgLSBDTkFGIC0gSW5zdHJ1Y3Rpb25cIjogXCJJbnN0cnVjdGlvblwiLFxuICBcIlRlc3QgLSBDTkFGIC0gQsOpbsOpZmljaWFpcmVcIjogXCJCw6luw6lmaWNpYWlyZVwiLFxuICBcIlRlc3QgLSBQb2xlIEVtcGxvaVwiOiBcIlDDtGxlIEVtcGxvaVwiLFxufVxuXG5jb25zdCBNQVRPTU9fVVJMID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTUFUT01PX1VSTFxuY29uc3QgTUFUT01PX1NJVEVfSUQgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19NQVRPTU9fU0lURV9JRFxuXG5hc3luYyBmdW5jdGlvbiBmZXRjaExvZyh0b2tlbiwgbmFtZSkge1xuICBjb25zdCB1cmwgPSBgJHtNQVRPTU9fVVJMfS9pbmRleC5waHA/ZGF0ZT10b2RheSZleHBhbmRlZD0xJmZpbHRlcl9saW1pdD0yNSZmb3JtYXQ9SlNPTiZpZFNpdGU9JHtNQVRPTU9fU0lURV9JRH0mbWV0aG9kPUV2ZW50cy5nZXRDYXRlZ29yeSZtb2R1bGU9QVBJJnBlcmlvZD1tb250aCZzZWdtZW50PSZ0b2tlbl9hdXRoPSR7dG9rZW59YFxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybClcbiAgY29uc3QganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICBjb25zdCBldmVudHMgPSBbXS5jb25jYXQoLi4uanNvbi5maWx0ZXIoaSA9PiBuYW1lTWFwW2kubGFiZWxdID09IG5hbWUpLm1hcChjYXRlZ29yeSA9PiBjYXRlZ29yeS5zdWJ0YWJsZSkpXG4gIGNvbnN0IGRhdGEgPSBldmVudHMubWFwKGUgPT4gSlNPTi5wYXJzZShlLmxhYmVsKSkubWFwKGl0ZW0gPT4ge1xuXG4gICAgLy8gTGVnYWN5IHR5cG8gbWFuYWdlbWVudFxuICAgIGNvbnN0IHRpbWVzdGFtcCA9IGl0ZW0udGltZXN0YW1wIHx8IGl0ZW0udGltZXRhbXBcbiAgICByZXR1cm4ge1xuICAgICAgc2VlZDogTWF0aC5yYW5kb20oKSxcbiAgICAgIHRpbWVzdGFtcCxcbiAgICAgIGR1cmF0aW9uOiBpdGVtLmR1cmF0aW9uLFxuICAgICAgZW1haWw6IHtcbiAgICAgICAgdG90YWw6IGl0ZW0ud2l0aEVtYWlsLFxuICAgICAgICB3aXRoQXV0b3Jpc2F0aW9uOiBpdGVtLndpdGhBdXRvcmlzYXRpb24sXG4gICAgICAgIHdpdGhFeHBsaWNpdFJlZnVzYWw6IGl0ZW0ud2l0aEV4cGxpY2l0UmVmdXNhbCxcbiAgICAgICAgd2l0aG91dEF1dG9yaXNhdGlvbkRldGFpbHM6IGl0ZW0ud2l0aG91dEF1dG9yaXNhdGlvbkRldGFpbHMsXG4gICAgICB9LFxuICAgICAgY0RhdGUgOiBuZXcgRGF0ZSh0aW1lc3RhbXApLFxuICAgICAgcGhvbmU6IHt9LFxuICAgICAgLi4uaXRlbVxuICAgIH1cbiAgfSlcblxuICBkYXRhLnNvcnQoKGEsYikgPT4gYS5jRGF0ZSAtIGIuY0RhdGUpXG4gIHJldHVybiBkYXRhXG59XG5cbmV4cG9ydHMuZmV0Y2hMb2cgPSBmZXRjaExvZ1xuIiwiaW1wb3J0IHt1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVkdWNlcn0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbmltcG9ydCBBZG1pbiBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2FkbWluJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2xheW91dCdcbmltcG9ydCBNYWlsZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9tYWlsZXInXG5pbXBvcnQgUGVuZGluZ01lc3NhZ2UgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9wZW5kaW5nJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi8uLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuXG5pbXBvcnQgeyBmcmVxdWVuY3lOYW1lcywgdHlwZU5hbWVzIH0gZnJvbSAnLi4vLi4vLi4vbGliL2NuYWYnXG5pbXBvcnQgeyBpbml0UmVkdWNlciwgcmVkdWNlckZhY3RvcnkgfSBmcm9tICcuLi8uLi8uLi9saWIvaGlzdG9yaXF1ZSdcblxuY29uc3QgcmVkdWNlciA9IHJlZHVjZXJGYWN0b3J5KCdUZXN0IC0gQ05BRiAtIEluc3RydWN0aW9uJylcbmNvbnN0IGRldk1vZGUgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PSAnZGV2ZWxvcG1lbnQnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluc3RydWN0aW9uKCkge1xuICBjb25zdCBbZGV2RmlsZSwgc2V0RGV2RmlsZV0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbcnVucywgZGlzcGF0Y2hSdW5zXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgW10sIGluaXRSZWR1Y2VyKVxuICBjb25zdCBbaXNQZW5kaW5nLCBzZXRJc1BlbmRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZmlsZVNpemUsIHNldEZpbGVTaXplXSA9IHVzZVN0YXRlKDApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYoZGV2RmlsZSkge1xuICAgICAgZmlsZUhhbmRsZXIoZGV2RmlsZSlcbiAgICB9XG4gIH0sIFtkZXZGaWxlXSlcblxuICBjb25zdCBoYW5kbGVOZXdSdW5zID0gdXNlQ2FsbGJhY2soZGF0YSA9PiB7XG4gICAgZGlzcGF0Y2hSdW5zKHtcbiAgICAgIHR5cGU6ICdyZXNldCcsXG4gICAgICBpdGVtczogZGF0YVxuICAgIH0pXG4gIH0pXG5cbiAgY29uc3Qgc2VsZWN0SGFuZGxlciA9IHVzZUNhbGxiYWNrKChldmVudCkgPT4ge1xuICAgIGZvciAodmFyIGkgPSAwOyBpPGV2ZW50LnRhcmdldC5maWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgZmlsZUhhbmRsZXIoZXZlbnQudGFyZ2V0LmZpbGVzW2ldKVxuICAgIH1cbiAgICBldmVudC50YXJnZXQudmFsdWUgPSAnJ1xuICB9KVxuXG4gIGNvbnN0IGZpbGVIYW5kbGVyID0gKGZpbGUpID0+IHtcbiAgICBpZiAoZGV2TW9kZSAmJiBmaWxlICE9IGRldkZpbGUpIHtcbiAgICAgIHNldERldkZpbGUoZmlsZSlcbiAgICB9XG4gICAgc2V0RmlsZVNpemUoZmlsZS5zaXplKTtcbiAgICBzZXRJc1BlbmRpbmcodHJ1ZSk7XG4gICAgY29uc3Qgc3RhcnRfdGltZSA9IG5ldyBEYXRlKCk7XG5cbiAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgY29uc3QgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpXG4gICAgICBjb25zdCBkb20gPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKGV2ZW50LnRhcmdldC5yZXN1bHQsIFwiYXBwbGljYXRpb24veG1sXCIpXG5cbiAgICAgIGNvbnN0IGRlc2MgPSBkb20uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ0lkZW50aWZpY2F0aW9uRmx1eCcpWzBdXG4gICAgICBjb25zdCBmcmVxdWVuY3kgPSBkZXNjLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdUWVBFRkxVWCcpWzBdLmlubmVySFRNTFxuICAgICAgY29uc3QgdHlwZSA9IGRlc2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ05BVEZMVVgnKVswXS5pbm5lckhUTUxcbiAgICAgIGNvbnN0IGR0ID0gZGVzYy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnRFRDUkVBRkxVWCcpWzBdLmlubmVySFRNTFxuICAgICAgY29uc3QgdGltZSA9IGRlc2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ0hFVUNSRUFGTFVYJylbMF0uaW5uZXJIVE1MXG5cbiAgICAgIGNvbnN0IGl0ZW1zID0gbmV3IEFycmF5KC4uLmRvbS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnSW5mb0RlbWFuZGVSU0EnKSlcbiAgICAgIGNvbnN0IHdpdGhFbWFpbCA9IGl0ZW1zLmZpbHRlcihpID0+IGkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ0FEUkVMRUMnKS5sZW5ndGgpXG4gICAgICBjb25zdCB3aXRoVXNhYmxlRW1haWwgPSBpdGVtcy5maWx0ZXIoaSA9PiB7XG4gICAgICAgIGNvbnN0IG9rID0gaS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnQVVUT1JVVElBRFJFTEVDJylbMF1cbiAgICAgICAgcmV0dXJuIGkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ0FEUkVMRUMnKS5sZW5ndGggJiYgb2sgJiYgb2suaW5uZXJIVE1MID09IFwiQVwiXG4gICAgICB9KVxuICAgICAgY29uc3Qgd2l0aEZvcmJpZGRlbkVtYWlsVXNhZ2UgPSBpdGVtcy5maWx0ZXIoaSA9PiB7XG4gICAgICAgIGNvbnN0IG9rID0gaS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnQVVUT1JVVElBRFJFTEVDJylbMF1cbiAgICAgICAgcmV0dXJuIGkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ0FEUkVMRUMnKS5sZW5ndGggJiYgb2sgJiYgb2suaW5uZXJIVE1MID09IFwiUlwiXG4gICAgICB9KVxuICAgICAgY29uc3Qgd2l0aG91dEVtYWlsVXNhZ2UgPSBpdGVtcy5maWx0ZXIoaSA9PiB7XG4gICAgICAgIGNvbnN0IG9rID0gaS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnQVVUT1JVVElBRFJFTEVDJylbMF1cbiAgICAgICAgcmV0dXJuIGkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ0FEUkVMRUMnKS5sZW5ndGggJiYgb2sgJiYgb2suaW5uZXJIVE1MID09IFwiSVwiXG4gICAgICB9KVxuXG4gICAgICBjb25zdCB3aXRoUGhvbmUgPSBpdGVtcy5maWx0ZXIoaSA9PiBpLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdOVU1URUwnKS5sZW5ndGgpXG4gICAgICBjb25zdCB3aXRoVXNhYmxlUGhvbmUgPSBpdGVtcy5maWx0ZXIoaSA9PiB7XG4gICAgICAgIGNvbnN0IG9rID0gaS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnQVVUT1JVVElURUwnKVswXVxuICAgICAgICByZXR1cm4gaS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnTlVNVEVMJykubGVuZ3RoICYmIG9rICYmIG9rLmlubmVySFRNTCA9PSBcIkFcIlxuICAgICAgfSlcbiAgICAgIGNvbnN0IHdpdGhGb3JiaWRkZW5QaG9uZVVzYWdlID0gaXRlbXMuZmlsdGVyKGkgPT4ge1xuICAgICAgICBjb25zdCBvayA9IGkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ0FVVE9SVVRJVEVMJylbMF1cbiAgICAgICAgcmV0dXJuIGkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ05VTVRFTCcpLmxlbmd0aCAmJiBvayAmJiBvay5pbm5lckhUTUwgPT0gXCJSXCJcbiAgICAgIH0pXG4gICAgICBjb25zdCB3aXRob3V0UGhvbmVVc2FnZSA9IGl0ZW1zLmZpbHRlcihpID0+IHtcbiAgICAgICAgY29uc3Qgb2sgPSBpLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdBVVRPUlVUSVRFTCcpWzBdXG4gICAgICAgIHJldHVybiBpLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdOVU1URUwnKS5sZW5ndGggJiYgb2sgJiYgb2suaW5uZXJIVE1MID09IFwiSVwiXG4gICAgICB9KVxuXG4gICAgICBjb25zdCB3aXRoRFNQID0gaXRlbXMuZmlsdGVyKGkgPT4gaS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnRG9ubmVlc1NvY2lvUHJvZmVzc2lvbm5lbGxlcycpLmxlbmd0aClcblxuICAgICAgc2V0SXNQZW5kaW5nKGZhbHNlKTtcblxuICAgICAgZGlzcGF0Y2hSdW5zKHtcbiAgICAgICAgdHlwZTogJ2FwcGVuZCcsXG4gICAgICAgIGl0ZW06IHtcbiAgICAgICAgICBzZWVkOiBNYXRoLnJhbmRvbSgpLFxuICAgICAgICAgIHRpbWVzdGFtcDogKG5ldyBEYXRlKCkpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwxOSksXG4gICAgICAgICAgZHVyYXRpb246IChuZXcgRGF0ZSgpKSAtIHN0YXJ0X3RpbWUsXG4gICAgICAgICAgZmlsZW5hbWU6IGZpbGUubmFtZSxcbiAgICAgICAgICBmaWxlRGF0ZXRpbWU6IGAke2R0fS0ke3RpbWV9YCxcbiAgICAgICAgICBmcmVxdWVuY3ksXG4gICAgICAgICAgdHlwZSxcbiAgICAgICAgICAvLyBXSVA6IE9LIHN1ciBGaXJlZm94IEtPIHN1ciBDaHJvbWVcbiAgICAgICAgICBlcnJvcjogZG9tLmFjdGl2ZUVsZW1lbnQgJiYgZG9tLmFjdGl2ZUVsZW1lbnQubm9kZU5hbWUgPT0gXCJwYXJzZXJlcnJvclwiLFxuICAgICAgICAgIHRvdGFsOiBpdGVtcy5sZW5ndGgsXG4gICAgICAgICAgZW1haWw6IHtcbiAgICAgICAgICAgIHRvdGFsOiB3aXRoRW1haWwubGVuZ3RoLFxuICAgICAgICAgICAgd2l0aEF1dG9yaXNhdGlvbjogd2l0aFVzYWJsZUVtYWlsLmxlbmd0aCxcbiAgICAgICAgICAgIHdpdGhFeHBsaWNpdFJlZnVzYWw6IHdpdGhGb3JiaWRkZW5FbWFpbFVzYWdlLmxlbmd0aCxcbiAgICAgICAgICAgIHdpdGhvdXRBdXRvcmlzYXRpb25EZXRhaWxzOiB3aXRob3V0RW1haWxVc2FnZS5sZW5ndGgsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBwaG9uZToge1xuICAgICAgICAgICAgdG90YWw6IHdpdGhQaG9uZS5sZW5ndGgsXG4gICAgICAgICAgICB3aXRoQXV0b3Jpc2F0aW9uOiB3aXRoVXNhYmxlRW1haWwubGVuZ3RoLFxuICAgICAgICAgICAgd2l0aEV4cGxpY2l0UmVmdXNhbDogd2l0aEZvcmJpZGRlbkVtYWlsVXNhZ2UubGVuZ3RoLFxuICAgICAgICAgICAgd2l0aG91dEF1dG9yaXNhdGlvbkRldGFpbHM6IHdpdGhvdXRFbWFpbFVzYWdlLmxlbmd0aCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHdpdGhEU1A6IHdpdGhEU1AubGVuZ3RoLFxuICAgICAgICAgIGZpbGVTaXplOiBmaWxlLnNpemUsXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIHJlYWRlci5yZWFkQXNUZXh0KGZpbGUpXG4gIH1cblxuICBjb25zdCByb3VuZCA9ICh2YWx1ZSkgPT4gTWF0aC5yb3VuZCh2YWx1ZSlcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn1cbiAgICAgIGZpbGVIYW5kbGVyPXtmaWxlSGFuZGxlcn0+XG4gICAgICA8QWRtaW4gY2F0ZWdvcnk9XCJJbnN0cnVjdGlvblwiIG9uUnVuUmVmcmVzaD17aGFuZGxlTmV3UnVuc30vPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XG4gICAgICAgICAgTGVjdGV1ciBkZSBmaWNoaWVyIMKrIEluc3RydWN0aW9uIMK7IGRlIGxhIENOQUZcbiAgICAgICAgPC9oMT5cblxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgICAgR2xpc3NleiBldCBkw6lwb3NleiBsZSBmaWNoaWVyIENOQUYgw6AgYW5hbHlzZXIgb3Ugc8OpbGVjdGlvbm5leiBsZS48YnIvPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG9uQ2hhbmdlPXtzZWxlY3RIYW5kbGVyfSBtdWx0aXBsZS8+XG4gICAgICAgIDwvcD5cblxuICAgICAgICB7aXNQZW5kaW5nICYmIDxQZW5kaW5nTWVzc2FnZSBmaWxlU2l6ZT17ZmlsZVNpemV9Lz59XG5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgIExlcyBvcMOpcmF0aW9ucyBzb250IHRvdXRlcyByw6lhbGlzw6llcyBzdXIgdm90cmUgb3JkaW5hdGV1ci48YnIvPlxuICAgICAgICAgIEF1Y3VuZSBkb25uw6llIHBlcnNvbm5lbGxlIG4nZXN0IHRyYW5zZsOpcsOpZS5cbiAgICAgICAgPC9wPlxuXG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICA8YSBocmVmPVwiI3BvdXJxdW9pXCI+UG91cnF1b2kgdW4gdGVsIGxlY3RldXImbmJzcDs/PC9hPlxuICAgICAgICA8L3A+XG5cbiAgICAgICAgeyBydW5zICYmIHJ1bnMubGVuZ3RoID4gMCAmJiAoPD5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuc3VidGl0bGV9PlxuICAgICAgICAgICAgSGlzdG9yaXF1ZVxuICAgICAgICAgIDwvaDI+XG5cbiAgICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5EYXRlPC90aD5cbiAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5GaWNoaWVyPC90aD5cbiAgICAgICAgICAgICAgICB7IGRldk1vZGUgJiYgPHRoIHJvd1NwYW49XCIyXCI+VGFpbGxlPC90aD59XG4gICAgICAgICAgICAgICAgeyBkZXZNb2RlICYmIDx0aCByb3dTcGFuPVwiMlwiPkR1csOpZTxici8+KGVuIHMpPC90aD59XG4gICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+RGF0ZSBkdSBmaWNoaWVyPC90aD5cbiAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5GcsOpcXVlbmNlPC90aD5cbiAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5OYXR1cmU8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPkRvc3NpZXJzPC90aD5cbiAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj1cIjhcIj5hdmVjIGVtYWlsPC90aD5cbiAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj1cIjhcIj5hdmVjIHTDqWzDqXBob25lPC90aD5cbiAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj1cIjJcIiByb3dTcGFuPVwiMlwiPkRTUCAoJSk8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPkVycmV1cjwvdGg+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj1cIjJcIj4jICglKTwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIGNvbFNwYW49XCIyXCI+ZXQgYXV0b3Jpc2F0aW9uICglKTwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIGNvbFNwYW49XCIyXCI+cmVmdXMgZXhwbGljaXQgKCUpPC90aD5cbiAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj1cIjJcIj48YWJiciB0aXRsZT1cIkJhbGlzZSBBVVRPUlVUSUFEUkVMRUMgcHLDqXNlbnRlIGV0IMOpZ2FsZSDDoCAnSSdcIj5pbmNvbm51IGV4cGxpY2l0IChJKSAoJSk8L2FiYnI+PC90aD5cblxuICAgICAgICAgICAgICAgIDx0aCBjb2xTcGFuPVwiMlwiPiMgKCUpPC90aD5cbiAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj1cIjJcIj5ldCBhdXRvcmlzYXRpb24gKCUpPC90aD5cbiAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj1cIjJcIj5yZWZ1cyBleHBsaWNpdCAoJSk8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBjb2xTcGFuPVwiMlwiPjxhYmJyIHRpdGxlPVwiQmFsaXNlIEFVVE9SVVRJVEVMIHByw6lzZW50ZSBldCDDqWdhbGUgw6AgJ0knXCI+aW5jb25udSBleHBsaWNpdCAoSSkgKCUpPC9hYmJyPjwvdGg+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICB7cnVucy5tYXAociA9PiAoPHRyIGtleT17YCR7ci50aW1lc3RhbXB9LSR7ci5maWxlbmFtZX0tJHtyLnNlZWR9YCB9PlxuICAgICAgICAgICAgICAgIDx0ZD57ci50aW1lc3RhbXB9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e3IuZmlsZW5hbWV9PC90ZD5cbiAgICAgICAgICAgICAgICB7IGRldk1vZGUgJiYgPHRkPntyLmZpbGVTaXplfTwvdGQ+fVxuICAgICAgICAgICAgICAgIHsgZGV2TW9kZSAmJiA8dGQ+eyFpc05hTihyLmR1cmF0aW9uKSA/IHIuZHVyYXRpb24vMTAwMCA6IFwiI04vQVwifTwvdGQ+fVxuICAgICAgICAgICAgICAgIDx0ZD57ci5maWxlRGF0ZXRpbWV9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e2Ake3IuZnJlcXVlbmN5fSAoJHtmcmVxdWVuY3lOYW1lc1tyLmZyZXF1ZW5jeV0gfHwgJz8nfSlgfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPntgJHtyLnR5cGV9ICgke3R5cGVOYW1lc1tyLnR5cGVdIHx8ICc/J30pYH08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5udW1lcmljfT57ci50b3RhbH08L3RkPlxuXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLm51bWVyaWN9PntyLmVtYWlsLnRvdGFsfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInNocmlua1wiPntyb3VuZChyLmVtYWlsLnRvdGFsL3IudG90YWwqMTAwKX08L3RkPlxuXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLm51bWVyaWN9PntyLmVtYWlsLndpdGhBdXRvcmlzYXRpb259PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwic2hyaW5rXCI+e3JvdW5kKHIuZW1haWwud2l0aEF1dG9yaXNhdGlvbi9yLnRvdGFsKjEwMCl9PC90ZD5cblxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5udW1lcmljfT57ci5lbWFpbC53aXRoRXhwbGljaXRSZWZ1c2FsfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInNocmlua1wiPntyb3VuZChyLmVtYWlsLndpdGhFeHBsaWNpdFJlZnVzYWwvci50b3RhbCoxMDApfTwvdGQ+XG5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMubnVtZXJpY30+e3IuZW1haWwud2l0aG91dEF1dG9yaXNhdGlvbkRldGFpbHN9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwic2hyaW5rXCI+e3JvdW5kKHIuZW1haWwud2l0aG91dEF1dG9yaXNhdGlvbkRldGFpbHMvci50b3RhbCoxMDApfTwvdGQ+XG5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMubnVtZXJpY30+e3IucGhvbmUudG90YWx9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwic2hyaW5rXCI+e3JvdW5kKHIucGhvbmUudG90YWwvci50b3RhbCoxMDApfTwvdGQ+XG5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMubnVtZXJpY30+e3IucGhvbmUud2l0aEF1dG9yaXNhdGlvbn08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJzaHJpbmtcIj57cm91bmQoci5waG9uZS53aXRoQXV0b3Jpc2F0aW9uL3IudG90YWwqMTAwKX08L3RkPlxuXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLm51bWVyaWN9PntyLnBob25lLndpdGhFeHBsaWNpdFJlZnVzYWx9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwic2hyaW5rXCI+e3JvdW5kKHIucGhvbmUud2l0aEV4cGxpY2l0UmVmdXNhbC9yLnRvdGFsKjEwMCl9PC90ZD5cblxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5udW1lcmljfT57ci5waG9uZS53aXRob3V0QXV0b3Jpc2F0aW9uRGV0YWlsc308L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJzaHJpbmtcIj57cm91bmQoci5waG9uZS53aXRob3V0QXV0b3Jpc2F0aW9uRGV0YWlscy9yLnRvdGFsKjEwMCl9PC90ZD5cblxuXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLm51bWVyaWN9PntyLndpdGhEU1B9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwic2hyaW5rXCI+e3JvdW5kKHIud2l0aERTUC9yLnRvdGFsKjEwMCl9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e3IuZXJyb3IgPyAnT3VpJyA6ICdOb24nfTwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgPC90YWJsZT5cblxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZGlzcGF0Y2hSdW5zKHt0eXBlOiAncmVzZXQnfSl9PlZpZGVyIGwnaGlzdG9yaXF1ZTwvYnV0dG9uPlxuICAgICAgICA8Lz4pfVxuXG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICBVbiBwcm9ibMOobWUsIHVuZSBxdWVzdGlvbiA/IENvbnRhY3Rlei1ub3VzIMOgIDxNYWlsZXIgc3ViamVjdD1cIkZsdXggaW5zdHJ1Y3Rpb24gQ05BRlwiPmRhdGEuaW5zZXJ0aW9uQGJldGEuZ291di5mcjwvTWFpbGVyPlxuICAgICAgICA8L3A+XG5cbiAgICAgICAgPGgyIGlkPVwicG91cnF1b2lcIiBjbGFzc05hbWU9e3N0eWxlcy5zdWJ0aXRsZX0+XG4gICAgICAgICAgUG91cnF1b2kgdW4gbGVjdGV1ciBkZSBmaWNoaWVyIENOQUYmbmJzcDs/XG4gICAgICAgIDwvaDI+XG5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+XG4gICAgICAgICAgVG91cyBsZXMgZMOpcGFydGVtZW50cyBuJ29udCBwYXMgbGVzIG91dGlscyBwb3VyIGFuYWx5c2VyIGxlcyBmaWNoaWVycyBlbnZvecOpcyBwYXIgbGEgQ05BRi4gQ2VsYSBwZXV0IHJhbGVudGlyIGV0IGNvbXBsaXF1ZXIgbm9zIMOpY2hhbmdlcy5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5cbiAgICAgICAgICBBdmVjIGNldCBvdXRpbCwgbm91cyBzb3VoYWl0b25zIHBlcm1ldHRyZSBhdXggcGVyc29ubmVzIHF1aSBvbnQgYWNjw6hzIMOgIGNlcyBmaWNoaWVycyBkJ2VuIGV4dHJhaXJlIGRlcyBzdGF0aXN0aXF1ZXMgZ8OpbsOpcmFsZXMgc2FucyBhdm9pciDDoCBtZXR0cmUgbGVzIG1haW5zIGRhbnMgbGUgY2FtYm91aSBlbGxlcy1tw6ptZS5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5cbiAgICAgICAgICBBdWpvdXJkJ2h1aSwgbm91cyBjaGVyY2hvbnMgw6AgY29tcHJlbmRyZSBwb3VycXVvaSBwb3VyIGxhIENOQUYgOTAlIGRlcyBkb3NzaWVycyBwcsOpc2VudHMgZGFucyBsZXMgZmljaGllcnMgcXVvdGlkaWVucyBkJ2luc3RydWN0aW9ucyBjb250aWVubmVudCBkZXMgZW1haWxzIGFsb3JzIHF1ZSBjZSB0YXV4IGVzdCBkZSAzMCUgw6AgNTAlIHBvdXIgY2VydGFpbnMgZMOpcGFydGVtZW50cy5cbiAgICAgICAgPC9wPlxuXG4gICAgICA8L21haW4+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=