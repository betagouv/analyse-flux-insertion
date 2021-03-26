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
                duration_in_second: duration / 1000,
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
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Date du fichier"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 164,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Fr\xE9quence"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 165,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Nature"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 166,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Dossiers"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 167,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                colSpan: "8",
                children: "avec email"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 168,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                colSpan: "8",
                children: "avec t\xE9l\xE9phone"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 169,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                colSpan: "2",
                rowSpan: "2",
                children: "DSP (%)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 170,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Erreur"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 171,
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
                lineNumber: 174,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                colSpan: "2",
                children: "et autorisation (%)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 175,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                colSpan: "2",
                children: "refus explicit (%)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 176,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                colSpan: "2",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("abbr", {
                  title: "Balise AUTORUTIADRELEC pr\xE9sente et \xE9gale \xE0 'I'",
                  children: "inconnu explicit (I) (%)"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 177,
                  columnNumber: 33
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 177,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                colSpan: "2",
                children: "# (%)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 179,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                colSpan: "2",
                children: "et autorisation (%)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 180,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                colSpan: "2",
                children: "refus explicit (%)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 181,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                colSpan: "2",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("abbr", {
                  title: "Balise AUTORUTITEL pr\xE9sente et \xE9gale \xE0 'I'",
                  children: "inconnu explicit (I) (%)"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 182,
                  columnNumber: 33
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 182,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 173,
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
                  lineNumber: 187,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: r.filename
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 188,
                  columnNumber: 17
                }, _this), devMode && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: r.fileSize
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 189,
                  columnNumber: 30
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: r.fileDatetime
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 190,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: "".concat(r.frequency, " (").concat(_lib_cnaf__WEBPACK_IMPORTED_MODULE_10__["frequencyNames"][r.frequency] || '?', ")")
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 191,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: "".concat(r.type, " (").concat(_lib_cnaf__WEBPACK_IMPORTED_MODULE_10__["typeNames"][r.type] || '?', ")")
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 192,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.numeric,
                  children: r.total
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 193,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.numeric,
                  children: r.email.total
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 195,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: "shrink",
                  children: round(r.email.total / r.total * 100)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 196,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.numeric,
                  children: r.email.withAutorisation
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 198,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: "shrink",
                  children: round(r.email.withAutorisation / r.total * 100)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 199,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.numeric,
                  children: r.email.withExplicitRefusal
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 201,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: "shrink",
                  children: round(r.email.withExplicitRefusal / r.total * 100)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 202,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.numeric,
                  children: r.email.withoutAutorisationDetails
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 204,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: "shrink",
                  children: round(r.email.withoutAutorisationDetails / r.total * 100)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 205,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.numeric,
                  children: r.phone.total
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 207,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: "shrink",
                  children: round(r.phone.total / r.total * 100)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 208,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.numeric,
                  children: r.phone.withAutorisation
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 210,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: "shrink",
                  children: round(r.phone.withAutorisation / r.total * 100)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 211,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.numeric,
                  children: r.phone.withExplicitRefusal
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 213,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: "shrink",
                  children: round(r.phone.withExplicitRefusal / r.total * 100)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 214,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.numeric,
                  children: r.phone.withoutAutorisationDetails
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 216,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: "shrink",
                  children: round(r.phone.withoutAutorisationDetails / r.total * 100)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 217,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.numeric,
                  children: r.withDSP
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 220,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: "shrink",
                  children: round(r.withDSP / r.total * 100)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 221,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: r.error ? 'Oui' : 'Non'
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 222,
                  columnNumber: 17
                }, _this)]
              }, "".concat(r.timestamp, "-").concat(r.filename, "-").concat(r.seed), true, {
                fileName: _jsxFileName,
                lineNumber: 186,
                columnNumber: 31
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 185,
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
          lineNumber: 228,
          columnNumber: 11
        }, this)]
      }, void 0, true), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.description,
        children: ["Un probl\xE8me, une question ? Contactez-nous \xE0 ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_mailer__WEBPACK_IMPORTED_MODULE_7__["default"], {
          subject: "Flux instruction CNAF",
          children: "data.insertion@beta.gouv.fr"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 232,
          columnNumber: 56
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        id: "pourquoi",
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.subtitle,
        children: "Pourquoi un lecteur de fichier CNAF\xA0?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 235,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.text,
        children: "Tous les d\xE9partements n'ont pas les outils pour analyser les fichiers envoy\xE9s par la CNAF. Cela peut ralentir et compliquer nos \xE9changes."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.text,
        children: "Avec cet outil, nous souhaitons permettre aux personnes qui ont acc\xE8s \xE0 ces fichiers d'en extraire des statistiques g\xE9n\xE9rales sans avoir \xE0 mettre les mains dans le camboui elles-m\xEAme."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.text,
        children: "Aujourd'hui, nous cherchons \xE0 comprendre pourquoi pour la CNAF 90% des dossiers pr\xE9sents dans les fichiers quotidiens d'instructions contiennent des emails alors que ce taux est de 30% \xE0 50% pour certains d\xE9partements."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 245,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2FkbWluLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9jbmFmL2luc3RydWN0aW9uL2luZGV4LmpzIl0sIm5hbWVzIjpbIm5hbWVNYXAiLCJNQVRPTU9fVVJMIiwicHJvY2VzcyIsIk1BVE9NT19TSVRFX0lEIiwiZmV0Y2hMb2ciLCJ0b2tlbiIsIm5hbWUiLCJ1cmwiLCJmZXRjaCIsInJlc3BvbnNlIiwianNvbiIsImV2ZW50cyIsImNvbmNhdCIsImZpbHRlciIsImkiLCJsYWJlbCIsIm1hcCIsImNhdGVnb3J5Iiwic3VidGFibGUiLCJkYXRhIiwiZSIsIkpTT04iLCJwYXJzZSIsIml0ZW0iLCJ0aW1lc3RhbXAiLCJ0aW1ldGFtcCIsInNlZWQiLCJNYXRoIiwicmFuZG9tIiwiZHVyYXRpb25faW5fc2Vjb25kIiwiZHVyYXRpb24iLCJlbWFpbCIsInRvdGFsIiwid2l0aEVtYWlsIiwid2l0aEF1dG9yaXNhdGlvbiIsIndpdGhFeHBsaWNpdFJlZnVzYWwiLCJ3aXRob3V0QXV0b3Jpc2F0aW9uRGV0YWlscyIsImNEYXRlIiwiRGF0ZSIsInBob25lIiwic29ydCIsImEiLCJiIiwiZXhwb3J0cyIsInJlZHVjZXIiLCJyZWR1Y2VyRmFjdG9yeSIsImRldk1vZGUiLCJJbnN0cnVjdGlvbiIsInVzZVN0YXRlIiwiZGV2RmlsZSIsInNldERldkZpbGUiLCJ1c2VSZWR1Y2VyIiwiaW5pdFJlZHVjZXIiLCJydW5zIiwiZGlzcGF0Y2hSdW5zIiwiaXNQZW5kaW5nIiwic2V0SXNQZW5kaW5nIiwiZmlsZVNpemUiLCJzZXRGaWxlU2l6ZSIsInVzZUVmZmVjdCIsImZpbGVIYW5kbGVyIiwiaGFuZGxlTmV3UnVucyIsInVzZUNhbGxiYWNrIiwidHlwZSIsIml0ZW1zIiwic2VsZWN0SGFuZGxlciIsImV2ZW50IiwidGFyZ2V0IiwiZmlsZXMiLCJsZW5ndGgiLCJ2YWx1ZSIsImZpbGUiLCJzaXplIiwic3RhcnRfdGltZSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJwYXJzZXIiLCJET01QYXJzZXIiLCJkb20iLCJwYXJzZUZyb21TdHJpbmciLCJyZXN1bHQiLCJkZXNjIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJmcmVxdWVuY3kiLCJpbm5lckhUTUwiLCJkdCIsInRpbWUiLCJBcnJheSIsIndpdGhVc2FibGVFbWFpbCIsIm9rIiwid2l0aEZvcmJpZGRlbkVtYWlsVXNhZ2UiLCJ3aXRob3V0RW1haWxVc2FnZSIsIndpdGhQaG9uZSIsIndpdGhVc2FibGVQaG9uZSIsIndpdGhGb3JiaWRkZW5QaG9uZVVzYWdlIiwid2l0aG91dFBob25lVXNhZ2UiLCJ3aXRoRFNQIiwidG9JU09TdHJpbmciLCJzbGljZSIsImZpbGVuYW1lIiwiZmlsZURhdGV0aW1lIiwiZXJyb3IiLCJhY3RpdmVFbGVtZW50Iiwibm9kZU5hbWUiLCJyZWFkQXNUZXh0Iiwicm91bmQiLCJzdHlsZXMiLCJjb250YWluZXIiLCJtYWluIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInN1YnRpdGxlIiwiciIsImZyZXF1ZW5jeU5hbWVzIiwidHlwZU5hbWVzIiwibnVtZXJpYyIsInRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLE9BQU8sR0FBRztBQUNkLFVBQVEsYUFETTtBQUVkLCtCQUE2QixhQUZmO0FBR2QsZ0NBQThCLGNBSGhCO0FBSWQsd0JBQXNCO0FBSlIsQ0FBaEI7QUFPQSxJQUFNQyxVQUFVLEdBQUdDLDRCQUFuQjtBQUNBLElBQU1DLGNBQWMsR0FBR0QsS0FBdkI7O1NBRWVFLFE7Ozs7O3VFQUFmLGlCQUF3QkMsS0FBeEIsRUFBK0JDLElBQS9CO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNRQyxlQURSLGFBQ2lCTixVQURqQixpRkFDa0dFLGNBRGxHLG9GQUMwTEUsS0FEMUw7QUFBQTtBQUFBLG1CQUV5QkcsS0FBSyxDQUFDRCxHQUFELENBRjlCOztBQUFBO0FBRVFFLG9CQUZSO0FBQUE7QUFB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QUFBO0FBQUE7QUFBQSx1QkFBTDtBQUFBLGFBQVY7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQTNCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTDRCLGVBMkU1QjtBQUFRLGlCQUFPLEVBQUU7QUFBQSxtQkFBTTRCLFlBQVksQ0FBQztBQUFDUyxrQkFBSSxFQUFFO0FBQVAsYUFBRCxDQUFsQjtBQUFBLFdBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTNFNEI7QUFBQSxzQkFyQmhDLGVBbUdFO0FBQUcsaUJBQVMsRUFBRTRDLDhEQUFNLENBQUNJLFdBQXJCO0FBQUEsdUZBQytDLHFFQUFDLDBEQUFEO0FBQVEsaUJBQU8sRUFBQyx1QkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRC9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQW5HRixlQXVHRTtBQUFJLFVBQUUsRUFBQyxVQUFQO0FBQWtCLGlCQUFTLEVBQUVKLDhEQUFNLENBQUNLLFFBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBdkdGLGVBMkdFO0FBQUcsaUJBQVMsRUFBRUwsOERBQU0sQ0FBQ1UsSUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0EzR0YsZUE4R0U7QUFBRyxpQkFBUyxFQUFFViw4REFBTSxDQUFDVSxJQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTlHRixlQWlIRTtBQUFHLGlCQUFTLEVBQUVWLDhEQUFNLENBQUNVLElBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBakhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBNEhEOztHQTVPdUJ0RSxXOztLQUFBQSxXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NuYWYvaW5zdHJ1Y3Rpb24uZjgzYmM1NWI3Mjk0MDVjN2U5NzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG5hbWVNYXAgPSB7XG4gIFwiVGVzdFwiOiBcIkluc3RydWN0aW9uXCIsXG4gIFwiVGVzdCAtIENOQUYgLSBJbnN0cnVjdGlvblwiOiBcIkluc3RydWN0aW9uXCIsXG4gIFwiVGVzdCAtIENOQUYgLSBCw6luw6lmaWNpYWlyZVwiOiBcIkLDqW7DqWZpY2lhaXJlXCIsXG4gIFwiVGVzdCAtIFBvbGUgRW1wbG9pXCI6IFwiUMO0bGUgRW1wbG9pXCIsXG59XG5cbmNvbnN0IE1BVE9NT19VUkwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19NQVRPTU9fVVJMXG5jb25zdCBNQVRPTU9fU0lURV9JRCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX01BVE9NT19TSVRFX0lEXG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoTG9nKHRva2VuLCBuYW1lKSB7XG4gIGNvbnN0IHVybCA9IGAke01BVE9NT19VUkx9L2luZGV4LnBocD9kYXRlPXRvZGF5JmV4cGFuZGVkPTEmZmlsdGVyX2xpbWl0PTI1JmZvcm1hdD1KU09OJmlkU2l0ZT0ke01BVE9NT19TSVRFX0lEfSZtZXRob2Q9RXZlbnRzLmdldENhdGVnb3J5Jm1vZHVsZT1BUEkmcGVyaW9kPW1vbnRoJnNlZ21lbnQ9JnRva2VuX2F1dGg9JHt0b2tlbn1gXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKVxuICBjb25zdCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gIGNvbnN0IGV2ZW50cyA9IFtdLmNvbmNhdCguLi5qc29uLmZpbHRlcihpID0+IG5hbWVNYXBbaS5sYWJlbF0gPT0gbmFtZSkubWFwKGNhdGVnb3J5ID0+IGNhdGVnb3J5LnN1YnRhYmxlKSlcbiAgY29uc3QgZGF0YSA9IGV2ZW50cy5tYXAoZSA9PiBKU09OLnBhcnNlKGUubGFiZWwpKS5tYXAoaXRlbSA9PiB7XG5cbiAgICAvLyBMZWdhY3kgdHlwbyBtYW5hZ2VtZW50XG4gICAgY29uc3QgdGltZXN0YW1wID0gaXRlbS50aW1lc3RhbXAgfHwgaXRlbS50aW1ldGFtcFxuICAgIHJldHVybiB7XG4gICAgICBzZWVkOiBNYXRoLnJhbmRvbSgpLFxuICAgICAgdGltZXN0YW1wLFxuICAgICAgZHVyYXRpb25faW5fc2Vjb25kOiBkdXJhdGlvbi8xMDAwLFxuICAgICAgZW1haWw6IHtcbiAgICAgICAgdG90YWw6IGl0ZW0ud2l0aEVtYWlsLFxuICAgICAgICB3aXRoQXV0b3Jpc2F0aW9uOiBpdGVtLndpdGhBdXRvcmlzYXRpb24sXG4gICAgICAgIHdpdGhFeHBsaWNpdFJlZnVzYWw6IGl0ZW0ud2l0aEV4cGxpY2l0UmVmdXNhbCxcbiAgICAgICAgd2l0aG91dEF1dG9yaXNhdGlvbkRldGFpbHM6IGl0ZW0ud2l0aG91dEF1dG9yaXNhdGlvbkRldGFpbHMsXG4gICAgICB9LFxuICAgICAgY0RhdGUgOiBuZXcgRGF0ZSh0aW1lc3RhbXApLFxuICAgICAgcGhvbmU6IHt9LFxuICAgICAgLi4uaXRlbVxuICAgIH1cbiAgfSlcblxuICBkYXRhLnNvcnQoKGEsYikgPT4gYS5jRGF0ZSAtIGIuY0RhdGUpXG4gIHJldHVybiBkYXRhXG59XG5cbmV4cG9ydHMuZmV0Y2hMb2cgPSBmZXRjaExvZ1xuIiwiaW1wb3J0IHt1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVkdWNlcn0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbmltcG9ydCBBZG1pbiBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2FkbWluJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2xheW91dCdcbmltcG9ydCBNYWlsZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9tYWlsZXInXG5pbXBvcnQgUGVuZGluZ01lc3NhZ2UgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9wZW5kaW5nJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi8uLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuXG5pbXBvcnQgeyBmcmVxdWVuY3lOYW1lcywgdHlwZU5hbWVzIH0gZnJvbSAnLi4vLi4vLi4vbGliL2NuYWYnXG5pbXBvcnQgeyBpbml0UmVkdWNlciwgcmVkdWNlckZhY3RvcnkgfSBmcm9tICcuLi8uLi8uLi9saWIvaGlzdG9yaXF1ZSdcblxuY29uc3QgcmVkdWNlciA9IHJlZHVjZXJGYWN0b3J5KCdUZXN0IC0gQ05BRiAtIEluc3RydWN0aW9uJylcbmNvbnN0IGRldk1vZGUgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PSAnZGV2ZWxvcG1lbnQnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluc3RydWN0aW9uKCkge1xuICBjb25zdCBbZGV2RmlsZSwgc2V0RGV2RmlsZV0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbcnVucywgZGlzcGF0Y2hSdW5zXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgW10sIGluaXRSZWR1Y2VyKVxuICBjb25zdCBbaXNQZW5kaW5nLCBzZXRJc1BlbmRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZmlsZVNpemUsIHNldEZpbGVTaXplXSA9IHVzZVN0YXRlKDApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYoZGV2RmlsZSkge1xuICAgICAgZmlsZUhhbmRsZXIoZGV2RmlsZSlcbiAgICB9XG4gIH0sIFtkZXZGaWxlXSlcblxuICBjb25zdCBoYW5kbGVOZXdSdW5zID0gdXNlQ2FsbGJhY2soZGF0YSA9PiB7XG4gICAgZGlzcGF0Y2hSdW5zKHtcbiAgICAgIHR5cGU6ICdyZXNldCcsXG4gICAgICBpdGVtczogZGF0YVxuICAgIH0pXG4gIH0pXG5cbiAgY29uc3Qgc2VsZWN0SGFuZGxlciA9IHVzZUNhbGxiYWNrKChldmVudCkgPT4ge1xuICAgIGZvciAodmFyIGkgPSAwOyBpPGV2ZW50LnRhcmdldC5maWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgZmlsZUhhbmRsZXIoZXZlbnQudGFyZ2V0LmZpbGVzW2ldKVxuICAgIH1cbiAgICBldmVudC50YXJnZXQudmFsdWUgPSAnJ1xuICB9KVxuXG4gIGNvbnN0IGZpbGVIYW5kbGVyID0gKGZpbGUpID0+IHtcbiAgICBpZiAoZGV2TW9kZSAmJiBmaWxlICE9IGRldkZpbGUpIHtcbiAgICAgIHNldERldkZpbGUoZmlsZSlcbiAgICB9XG4gICAgc2V0RmlsZVNpemUoZmlsZS5zaXplKTtcbiAgICBzZXRJc1BlbmRpbmcodHJ1ZSk7XG4gICAgY29uc3Qgc3RhcnRfdGltZSA9IG5ldyBEYXRlKCk7XG5cbiAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgY29uc3QgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpXG4gICAgICBjb25zdCBkb20gPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKGV2ZW50LnRhcmdldC5yZXN1bHQsIFwiYXBwbGljYXRpb24veG1sXCIpXG5cbiAgICAgIGNvbnN0IGRlc2MgPSBkb20uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ0lkZW50aWZpY2F0aW9uRmx1eCcpWzBdXG4gICAgICBjb25zdCBmcmVxdWVuY3kgPSBkZXNjLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdUWVBFRkxVWCcpWzBdLmlubmVySFRNTFxuICAgICAgY29uc3QgdHlwZSA9IGRlc2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ05BVEZMVVgnKVswXS5pbm5lckhUTUxcbiAgICAgIGNvbnN0IGR0ID0gZGVzYy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnRFRDUkVBRkxVWCcpWzBdLmlubmVySFRNTFxuICAgICAgY29uc3QgdGltZSA9IGRlc2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ0hFVUNSRUFGTFVYJylbMF0uaW5uZXJIVE1MXG5cbiAgICAgIGNvbnN0IGl0ZW1zID0gbmV3IEFycmF5KC4uLmRvbS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnSW5mb0RlbWFuZGVSU0EnKSlcbiAgICAgIGNvbnN0IHdpdGhFbWFpbCA9IGl0ZW1zLmZpbHRlcihpID0+IGkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ0FEUkVMRUMnKS5sZW5ndGgpXG4gICAgICBjb25zdCB3aXRoVXNhYmxlRW1haWwgPSBpdGVtcy5maWx0ZXIoaSA9PiB7XG4gICAgICAgIGNvbnN0IG9rID0gaS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnQVVUT1JVVElBRFJFTEVDJylbMF1cbiAgICAgICAgcmV0dXJuIGkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ0FEUkVMRUMnKS5sZW5ndGggJiYgb2sgJiYgb2suaW5uZXJIVE1MID09IFwiQVwiXG4gICAgICB9KVxuICAgICAgY29uc3Qgd2l0aEZvcmJpZGRlbkVtYWlsVXNhZ2UgPSBpdGVtcy5maWx0ZXIoaSA9PiB7XG4gICAgICAgIGNvbnN0IG9rID0gaS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnQVVUT1JVVElBRFJFTEVDJylbMF1cbiAgICAgICAgcmV0dXJuIGkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ0FEUkVMRUMnKS5sZW5ndGggJiYgb2sgJiYgb2suaW5uZXJIVE1MID09IFwiUlwiXG4gICAgICB9KVxuICAgICAgY29uc3Qgd2l0aG91dEVtYWlsVXNhZ2UgPSBpdGVtcy5maWx0ZXIoaSA9PiB7XG4gICAgICAgIGNvbnN0IG9rID0gaS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnQVVUT1JVVElBRFJFTEVDJylbMF1cbiAgICAgICAgcmV0dXJuIGkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ0FEUkVMRUMnKS5sZW5ndGggJiYgb2sgJiYgb2suaW5uZXJIVE1MID09IFwiSVwiXG4gICAgICB9KVxuXG4gICAgICBjb25zdCB3aXRoUGhvbmUgPSBpdGVtcy5maWx0ZXIoaSA9PiBpLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdOVU1URUwnKS5sZW5ndGgpXG4gICAgICBjb25zdCB3aXRoVXNhYmxlUGhvbmUgPSBpdGVtcy5maWx0ZXIoaSA9PiB7XG4gICAgICAgIGNvbnN0IG9rID0gaS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnQVVUT1JVVElURUwnKVswXVxuICAgICAgICByZXR1cm4gaS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnTlVNVEVMJykubGVuZ3RoICYmIG9rICYmIG9rLmlubmVySFRNTCA9PSBcIkFcIlxuICAgICAgfSlcbiAgICAgIGNvbnN0IHdpdGhGb3JiaWRkZW5QaG9uZVVzYWdlID0gaXRlbXMuZmlsdGVyKGkgPT4ge1xuICAgICAgICBjb25zdCBvayA9IGkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ0FVVE9SVVRJVEVMJylbMF1cbiAgICAgICAgcmV0dXJuIGkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ05VTVRFTCcpLmxlbmd0aCAmJiBvayAmJiBvay5pbm5lckhUTUwgPT0gXCJSXCJcbiAgICAgIH0pXG4gICAgICBjb25zdCB3aXRob3V0UGhvbmVVc2FnZSA9IGl0ZW1zLmZpbHRlcihpID0+IHtcbiAgICAgICAgY29uc3Qgb2sgPSBpLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdBVVRPUlVUSVRFTCcpWzBdXG4gICAgICAgIHJldHVybiBpLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdOVU1URUwnKS5sZW5ndGggJiYgb2sgJiYgb2suaW5uZXJIVE1MID09IFwiSVwiXG4gICAgICB9KVxuXG4gICAgICBjb25zdCB3aXRoRFNQID0gaXRlbXMuZmlsdGVyKGkgPT4gaS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnRG9ubmVlc1NvY2lvUHJvZmVzc2lvbm5lbGxlcycpLmxlbmd0aClcblxuICAgICAgc2V0SXNQZW5kaW5nKGZhbHNlKTtcblxuICAgICAgZGlzcGF0Y2hSdW5zKHtcbiAgICAgICAgdHlwZTogJ2FwcGVuZCcsXG4gICAgICAgIGl0ZW06IHtcbiAgICAgICAgICBzZWVkOiBNYXRoLnJhbmRvbSgpLFxuICAgICAgICAgIHRpbWVzdGFtcDogKG5ldyBEYXRlKCkpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwxOSksXG4gICAgICAgICAgZHVyYXRpb246IChuZXcgRGF0ZSgpKSAtIHN0YXJ0X3RpbWUsXG4gICAgICAgICAgZmlsZW5hbWU6IGZpbGUubmFtZSxcbiAgICAgICAgICBmaWxlRGF0ZXRpbWU6IGAke2R0fS0ke3RpbWV9YCxcbiAgICAgICAgICBmcmVxdWVuY3ksXG4gICAgICAgICAgdHlwZSxcbiAgICAgICAgICAvLyBXSVA6IE9LIHN1ciBGaXJlZm94IEtPIHN1ciBDaHJvbWVcbiAgICAgICAgICBlcnJvcjogZG9tLmFjdGl2ZUVsZW1lbnQgJiYgZG9tLmFjdGl2ZUVsZW1lbnQubm9kZU5hbWUgPT0gXCJwYXJzZXJlcnJvclwiLFxuICAgICAgICAgIHRvdGFsOiBpdGVtcy5sZW5ndGgsXG4gICAgICAgICAgZW1haWw6IHtcbiAgICAgICAgICAgIHRvdGFsOiB3aXRoRW1haWwubGVuZ3RoLFxuICAgICAgICAgICAgd2l0aEF1dG9yaXNhdGlvbjogd2l0aFVzYWJsZUVtYWlsLmxlbmd0aCxcbiAgICAgICAgICAgIHdpdGhFeHBsaWNpdFJlZnVzYWw6IHdpdGhGb3JiaWRkZW5FbWFpbFVzYWdlLmxlbmd0aCxcbiAgICAgICAgICAgIHdpdGhvdXRBdXRvcmlzYXRpb25EZXRhaWxzOiB3aXRob3V0RW1haWxVc2FnZS5sZW5ndGgsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBwaG9uZToge1xuICAgICAgICAgICAgdG90YWw6IHdpdGhQaG9uZS5sZW5ndGgsXG4gICAgICAgICAgICB3aXRoQXV0b3Jpc2F0aW9uOiB3aXRoVXNhYmxlRW1haWwubGVuZ3RoLFxuICAgICAgICAgICAgd2l0aEV4cGxpY2l0UmVmdXNhbDogd2l0aEZvcmJpZGRlbkVtYWlsVXNhZ2UubGVuZ3RoLFxuICAgICAgICAgICAgd2l0aG91dEF1dG9yaXNhdGlvbkRldGFpbHM6IHdpdGhvdXRFbWFpbFVzYWdlLmxlbmd0aCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHdpdGhEU1A6IHdpdGhEU1AubGVuZ3RoLFxuICAgICAgICAgIGZpbGVTaXplOiBmaWxlLnNpemUsXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIHJlYWRlci5yZWFkQXNUZXh0KGZpbGUpXG4gIH1cblxuICBjb25zdCByb3VuZCA9ICh2YWx1ZSkgPT4gTWF0aC5yb3VuZCh2YWx1ZSlcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn1cbiAgICAgIGZpbGVIYW5kbGVyPXtmaWxlSGFuZGxlcn0+XG4gICAgICA8QWRtaW4gY2F0ZWdvcnk9XCJJbnN0cnVjdGlvblwiIG9uUnVuUmVmcmVzaD17aGFuZGxlTmV3UnVuc30vPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XG4gICAgICAgICAgTGVjdGV1ciBkZSBmaWNoaWVyIMKrIEluc3RydWN0aW9uIMK7IGRlIGxhIENOQUZcbiAgICAgICAgPC9oMT5cblxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgICAgR2xpc3NleiBldCBkw6lwb3NleiBsZSBmaWNoaWVyIENOQUYgw6AgYW5hbHlzZXIgb3Ugc8OpbGVjdGlvbm5leiBsZS48YnIvPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG9uQ2hhbmdlPXtzZWxlY3RIYW5kbGVyfSBtdWx0aXBsZS8+XG4gICAgICAgIDwvcD5cblxuICAgICAgICB7aXNQZW5kaW5nICYmIDxQZW5kaW5nTWVzc2FnZSBmaWxlU2l6ZT17ZmlsZVNpemV9Lz59XG5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgIExlcyBvcMOpcmF0aW9ucyBzb250IHRvdXRlcyByw6lhbGlzw6llcyBzdXIgdm90cmUgb3JkaW5hdGV1ci48YnIvPlxuICAgICAgICAgIEF1Y3VuZSBkb25uw6llIHBlcnNvbm5lbGxlIG4nZXN0IHRyYW5zZsOpcsOpZS5cbiAgICAgICAgPC9wPlxuXG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICA8YSBocmVmPVwiI3BvdXJxdW9pXCI+UG91cnF1b2kgdW4gdGVsIGxlY3RldXImbmJzcDs/PC9hPlxuICAgICAgICA8L3A+XG5cbiAgICAgICAgeyBydW5zICYmIHJ1bnMubGVuZ3RoID4gMCAmJiAoPD5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuc3VidGl0bGV9PlxuICAgICAgICAgICAgSGlzdG9yaXF1ZVxuICAgICAgICAgIDwvaDI+XG5cbiAgICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5EYXRlPC90aD5cbiAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5GaWNoaWVyPC90aD5cbiAgICAgICAgICAgICAgICB7IGRldk1vZGUgJiYgPHRoIHJvd1NwYW49XCIyXCI+VGFpbGxlPC90aD59XG4gICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+RGF0ZSBkdSBmaWNoaWVyPC90aD5cbiAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5GcsOpcXVlbmNlPC90aD5cbiAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5OYXR1cmU8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPkRvc3NpZXJzPC90aD5cbiAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj1cIjhcIj5hdmVjIGVtYWlsPC90aD5cbiAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj1cIjhcIj5hdmVjIHTDqWzDqXBob25lPC90aD5cbiAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj1cIjJcIiByb3dTcGFuPVwiMlwiPkRTUCAoJSk8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPkVycmV1cjwvdGg+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj1cIjJcIj4jICglKTwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIGNvbFNwYW49XCIyXCI+ZXQgYXV0b3Jpc2F0aW9uICglKTwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIGNvbFNwYW49XCIyXCI+cmVmdXMgZXhwbGljaXQgKCUpPC90aD5cbiAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj1cIjJcIj48YWJiciB0aXRsZT1cIkJhbGlzZSBBVVRPUlVUSUFEUkVMRUMgcHLDqXNlbnRlIGV0IMOpZ2FsZSDDoCAnSSdcIj5pbmNvbm51IGV4cGxpY2l0IChJKSAoJSk8L2FiYnI+PC90aD5cblxuICAgICAgICAgICAgICAgIDx0aCBjb2xTcGFuPVwiMlwiPiMgKCUpPC90aD5cbiAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj1cIjJcIj5ldCBhdXRvcmlzYXRpb24gKCUpPC90aD5cbiAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj1cIjJcIj5yZWZ1cyBleHBsaWNpdCAoJSk8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBjb2xTcGFuPVwiMlwiPjxhYmJyIHRpdGxlPVwiQmFsaXNlIEFVVE9SVVRJVEVMIHByw6lzZW50ZSBldCDDqWdhbGUgw6AgJ0knXCI+aW5jb25udSBleHBsaWNpdCAoSSkgKCUpPC9hYmJyPjwvdGg+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICB7cnVucy5tYXAociA9PiAoPHRyIGtleT17YCR7ci50aW1lc3RhbXB9LSR7ci5maWxlbmFtZX0tJHtyLnNlZWR9YCB9PlxuICAgICAgICAgICAgICAgIDx0ZD57ci50aW1lc3RhbXB9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e3IuZmlsZW5hbWV9PC90ZD5cbiAgICAgICAgICAgICAgICB7IGRldk1vZGUgJiYgPHRkPntyLmZpbGVTaXplfTwvdGQ+fVxuICAgICAgICAgICAgICAgIDx0ZD57ci5maWxlRGF0ZXRpbWV9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e2Ake3IuZnJlcXVlbmN5fSAoJHtmcmVxdWVuY3lOYW1lc1tyLmZyZXF1ZW5jeV0gfHwgJz8nfSlgfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPntgJHtyLnR5cGV9ICgke3R5cGVOYW1lc1tyLnR5cGVdIHx8ICc/J30pYH08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5udW1lcmljfT57ci50b3RhbH08L3RkPlxuXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLm51bWVyaWN9PntyLmVtYWlsLnRvdGFsfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInNocmlua1wiPntyb3VuZChyLmVtYWlsLnRvdGFsL3IudG90YWwqMTAwKX08L3RkPlxuXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLm51bWVyaWN9PntyLmVtYWlsLndpdGhBdXRvcmlzYXRpb259PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwic2hyaW5rXCI+e3JvdW5kKHIuZW1haWwud2l0aEF1dG9yaXNhdGlvbi9yLnRvdGFsKjEwMCl9PC90ZD5cblxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5udW1lcmljfT57ci5lbWFpbC53aXRoRXhwbGljaXRSZWZ1c2FsfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInNocmlua1wiPntyb3VuZChyLmVtYWlsLndpdGhFeHBsaWNpdFJlZnVzYWwvci50b3RhbCoxMDApfTwvdGQ+XG5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMubnVtZXJpY30+e3IuZW1haWwud2l0aG91dEF1dG9yaXNhdGlvbkRldGFpbHN9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwic2hyaW5rXCI+e3JvdW5kKHIuZW1haWwud2l0aG91dEF1dG9yaXNhdGlvbkRldGFpbHMvci50b3RhbCoxMDApfTwvdGQ+XG5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMubnVtZXJpY30+e3IucGhvbmUudG90YWx9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwic2hyaW5rXCI+e3JvdW5kKHIucGhvbmUudG90YWwvci50b3RhbCoxMDApfTwvdGQ+XG5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMubnVtZXJpY30+e3IucGhvbmUud2l0aEF1dG9yaXNhdGlvbn08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJzaHJpbmtcIj57cm91bmQoci5waG9uZS53aXRoQXV0b3Jpc2F0aW9uL3IudG90YWwqMTAwKX08L3RkPlxuXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLm51bWVyaWN9PntyLnBob25lLndpdGhFeHBsaWNpdFJlZnVzYWx9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwic2hyaW5rXCI+e3JvdW5kKHIucGhvbmUud2l0aEV4cGxpY2l0UmVmdXNhbC9yLnRvdGFsKjEwMCl9PC90ZD5cblxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5udW1lcmljfT57ci5waG9uZS53aXRob3V0QXV0b3Jpc2F0aW9uRGV0YWlsc308L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJzaHJpbmtcIj57cm91bmQoci5waG9uZS53aXRob3V0QXV0b3Jpc2F0aW9uRGV0YWlscy9yLnRvdGFsKjEwMCl9PC90ZD5cblxuXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLm51bWVyaWN9PntyLndpdGhEU1B9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwic2hyaW5rXCI+e3JvdW5kKHIud2l0aERTUC9yLnRvdGFsKjEwMCl9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e3IuZXJyb3IgPyAnT3VpJyA6ICdOb24nfTwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgPC90YWJsZT5cblxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZGlzcGF0Y2hSdW5zKHt0eXBlOiAncmVzZXQnfSl9PlZpZGVyIGwnaGlzdG9yaXF1ZTwvYnV0dG9uPlxuICAgICAgICA8Lz4pfVxuXG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICBVbiBwcm9ibMOobWUsIHVuZSBxdWVzdGlvbiA/IENvbnRhY3Rlei1ub3VzIMOgIDxNYWlsZXIgc3ViamVjdD1cIkZsdXggaW5zdHJ1Y3Rpb24gQ05BRlwiPmRhdGEuaW5zZXJ0aW9uQGJldGEuZ291di5mcjwvTWFpbGVyPlxuICAgICAgICA8L3A+XG5cbiAgICAgICAgPGgyIGlkPVwicG91cnF1b2lcIiBjbGFzc05hbWU9e3N0eWxlcy5zdWJ0aXRsZX0+XG4gICAgICAgICAgUG91cnF1b2kgdW4gbGVjdGV1ciBkZSBmaWNoaWVyIENOQUYmbmJzcDs/XG4gICAgICAgIDwvaDI+XG5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+XG4gICAgICAgICAgVG91cyBsZXMgZMOpcGFydGVtZW50cyBuJ29udCBwYXMgbGVzIG91dGlscyBwb3VyIGFuYWx5c2VyIGxlcyBmaWNoaWVycyBlbnZvecOpcyBwYXIgbGEgQ05BRi4gQ2VsYSBwZXV0IHJhbGVudGlyIGV0IGNvbXBsaXF1ZXIgbm9zIMOpY2hhbmdlcy5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5cbiAgICAgICAgICBBdmVjIGNldCBvdXRpbCwgbm91cyBzb3VoYWl0b25zIHBlcm1ldHRyZSBhdXggcGVyc29ubmVzIHF1aSBvbnQgYWNjw6hzIMOgIGNlcyBmaWNoaWVycyBkJ2VuIGV4dHJhaXJlIGRlcyBzdGF0aXN0aXF1ZXMgZ8OpbsOpcmFsZXMgc2FucyBhdm9pciDDoCBtZXR0cmUgbGVzIG1haW5zIGRhbnMgbGUgY2FtYm91aSBlbGxlcy1tw6ptZS5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5cbiAgICAgICAgICBBdWpvdXJkJ2h1aSwgbm91cyBjaGVyY2hvbnMgw6AgY29tcHJlbmRyZSBwb3VycXVvaSBwb3VyIGxhIENOQUYgOTAlIGRlcyBkb3NzaWVycyBwcsOpc2VudHMgZGFucyBsZXMgZmljaGllcnMgcXVvdGlkaWVucyBkJ2luc3RydWN0aW9ucyBjb250aWVubmVudCBkZXMgZW1haWxzIGFsb3JzIHF1ZSBjZSB0YXV4IGVzdCBkZSAzMCUgw6AgNTAlIHBvdXIgY2VydGFpbnMgZMOpcGFydGVtZW50cy5cbiAgICAgICAgPC9wPlxuXG4gICAgICA8L21haW4+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=