webpackHotUpdate_N_E("pages/lecteur/pole-emploi",{

/***/ "./pages/lecteur/pole-emploi/index.js":
/*!********************************************!*\
  !*** ./pages/lecteur/pole-emploi/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Beneficiaire; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_construct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/construct */ "./node_modules/@babel/runtime/helpers/esm/construct.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/layout */ "./components/layout.js");
/* harmony import */ var _components_mailer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/mailer */ "./components/mailer.js");
/* harmony import */ var _components_pending__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/pending */ "./components/pending.js");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _lib_historique__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../lib/historique */ "./lib/historique.js");





var _jsxFileName = "/home/q/code/qblanc/beta.gouv/analyse-flux-insertion/pages/lecteur/pole-emploi/index.js",
    _s = $RefreshSig$();








var reducer = Object(_lib_historique__WEBPACK_IMPORTED_MODULE_9__["reducerFactory"])('Test - Pole Emploi');
var devMode = true; // periodicite

var frequencyNames = {
  M: 'Mensuel'
}; // fichier

var typeNames = {
  PECG: 'PE vers CD'
};
function Beneficiaire() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      devFile = _useState[0],
      setDevFile = _useState[1];

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_3__["useReducer"])(reducer, [], _lib_historique__WEBPACK_IMPORTED_MODULE_9__["initReducer"]),
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
      var desc = dom.getElementsByTagName('entete')[0];
      var frequency = desc.getElementsByTagName('periodicite')[0].innerHTML;
      var type = desc.getElementsByTagName('fichier')[0].innerHTML;
      var departement = desc.getElementsByTagName('departement')[0].innerHTML;
      var referenceDate = desc.getElementsByTagName('date-reference')[0].innerHTML;
      var generationDate = desc.getElementsByTagName('date-fabrication')[0].innerHTML;

      var items = Object(_babel_runtime_helpers_esm_construct__WEBPACK_IMPORTED_MODULE_1__["default"])(Array, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(dom.getElementsByTagName('dossier')));

      var withLastMeetingDate = items.filter(function (i) {
        return i.getElementsByTagName('date-dernier-ent').length;
      });
      var withUsableLastMeetingDate = items.filter(function (i) {
        var nodes = i.getElementsByTagName('date-dernier-ent');
        return nodes.length && nodes[0].innerHTML.match(/\d{4}-\d{2}-\d{2}/);
      });
      setIsPending(false);
      dispatchRuns({
        type: 'append',
        item: {
          seed: Math.random(),
          timestamp: new Date().toISOString().slice(0, 19),
          duration: new Date() - start_time,
          filename: file.name,
          frequency: frequency,
          referenceDate: referenceDate,
          generationDate: generationDate,
          departement: departement,
          type: type,
          // WIP: OK sur Firefox KO sur Chrome
          error: dom.activeElement && dom.activeElement.nodeName == "parsererror",
          total: items.length,
          withLastMeetingDate: withLastMeetingDate.length,
          withUsableLastMeetingDate: withUsableLastMeetingDate.length,
          fileSize: file.size
        }
      });
    };

    reader.readAsText(file);
  };

  var round = function round(value) {
    return Math.round(value);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.container,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.main,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.title,
        children: "Analyser les fichiers P\xF4le Emploi"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.description,
        children: ["Glissez et d\xE9posez le fichier PE \xE0 analyser ou s\xE9lectionnez le.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 74
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "file",
          onChange: selectHandler,
          multiple: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 9
      }, this), isPending && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_pending__WEBPACK_IMPORTED_MODULE_7__["default"], {
        fileSize: fileSize
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 23
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.description,
        children: ["Les op\xE9rations sont toutes r\xE9alis\xE9es sur votre ordinateur.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 69
        }, this), "Aucune donn\xE9e personnelle n'est transf\xE9r\xE9e."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.description,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "#pourquoi",
          children: "Pourquoi un tel lecteur\xA0?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 9
      }, this), runs && runs.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.subtitle,
          children: "Historique"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Date"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 129,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Fichier"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 130,
                columnNumber: 17
              }, this), devMode && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Taille"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 131,
                columnNumber: 30
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Date de r\xE9f\xE9rence"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 132,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Date de fabrication"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 133,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Fr\xE9quence"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 134,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Nature"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 135,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "CD"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 136,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Dossiers"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 137,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                colSpan: "2",
                rowSpan: "2",
                children: "avec date de dernier entretien PPAE (%)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 138,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                colSpan: "2",
                rowSpan: "2",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("abbr", {
                  title: "Par valide, on veut dire contient une date au format AAA-MM-JJ",
                  children: ["avec date de dernier entretien PPAE ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                    children: "valide"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 139,
                    columnNumber: 158
                  }, this), " (%)"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 139,
                  columnNumber: 45
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 139,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Erreur"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 140,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 142,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
            children: runs.map(function (r, i) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: r.timestamp
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 147,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: r.filename
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 148,
                  columnNumber: 17
                }, _this), devMode && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: r.fileSize
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 149,
                  columnNumber: 30
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: r.referenceDate
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 150,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: r.generationDate
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 151,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: "".concat(r.frequency, " (").concat(frequencyNames[r.frequency] || '?', ")")
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 152,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: "".concat(r.type, " (").concat(typeNames[r.type] || '?', ")")
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 153,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: "shrink",
                  children: r.departement
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 154,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.numeric,
                  children: r.total
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 155,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: r.withLastMeetingDate
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 156,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: "shrink",
                  children: round(r.withLastMeetingDate / r.total * 100)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 157,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: r.withUsableLastMeetingDate
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 158,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: "shrink",
                  children: round(r.withUsableLastMeetingDate / r.total * 100)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 159,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: r.error ? 'Oui' : 'Non'
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 161,
                  columnNumber: 17
                }, _this)]
              }, "".concat(r.timestamp, "-").concat(r.filename, "-").concat(r.seed), true, {
                fileName: _jsxFileName,
                lineNumber: 146,
                columnNumber: 36
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 126,
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
          lineNumber: 167,
          columnNumber: 11
        }, this)]
      }, void 0, true), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.description,
        children: ["Un probl\xE8me, une question ? Contactez-nous \xE0 ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_mailer__WEBPACK_IMPORTED_MODULE_6__["default"], {
          subject: "Flux Pole Emploi",
          children: "data.insertion@beta.gouv.fr"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 56
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        id: "pourquoi",
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.subtitle,
        children: "Pourquoi un lecteur de fichier P\xF4le Emploi\xA0?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.text,
        children: "Tous les d\xE9partements n'ont pas les outils pour analyser les fichiers envoy\xE9s par P\xF4le Emploi. Cela peut ralentir et compliquer nos \xE9changes."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.text,
        children: "Avec cet outil, nous souhaitons permettre aux personnes qui ont acc\xE8s \xE0 ces fichiers d'en extraire des statistiques g\xE9n\xE9rales sans avoir \xE0 mettre les mains dans le camboui elles-m\xEAme."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 98,
    columnNumber: 5
  }, this);
}

_s(Beneficiaire, "US6gyCFmVSOT6Tz9HHzDix0x5ak=");

_c = Beneficiaire;

var _c;

$RefreshReg$(_c, "Beneficiaire");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbGVjdGV1ci9wb2xlLWVtcGxvaS9pbmRleC5qcyJdLCJuYW1lcyI6WyJyZWR1Y2VyIiwicmVkdWNlckZhY3RvcnkiLCJkZXZNb2RlIiwiZnJlcXVlbmN5TmFtZXMiLCJNIiwidHlwZU5hbWVzIiwiUEVDRyIsIkJlbmVmaWNpYWlyZSIsInVzZVN0YXRlIiwiZGV2RmlsZSIsInNldERldkZpbGUiLCJ1c2VSZWR1Y2VyIiwiaW5pdFJlZHVjZXIiLCJydW5zIiwiZGlzcGF0Y2hSdW5zIiwiaXNQZW5kaW5nIiwic2V0SXNQZW5kaW5nIiwiZmlsZVNpemUiLCJzZXRGaWxlU2l6ZSIsInVzZUVmZmVjdCIsImZpbGVIYW5kbGVyIiwic2VsZWN0SGFuZGxlciIsInVzZUNhbGxiYWNrIiwiZXZlbnQiLCJpIiwidGFyZ2V0IiwiZmlsZXMiLCJsZW5ndGgiLCJ2YWx1ZSIsImZpbGUiLCJzaXplIiwic3RhcnRfdGltZSIsIkRhdGUiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwicGFyc2VyIiwiRE9NUGFyc2VyIiwiZG9tIiwicGFyc2VGcm9tU3RyaW5nIiwicmVzdWx0IiwiZGVzYyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiZnJlcXVlbmN5IiwiaW5uZXJIVE1MIiwidHlwZSIsImRlcGFydGVtZW50IiwicmVmZXJlbmNlRGF0ZSIsImdlbmVyYXRpb25EYXRlIiwiaXRlbXMiLCJBcnJheSIsIndpdGhMYXN0TWVldGluZ0RhdGUiLCJmaWx0ZXIiLCJ3aXRoVXNhYmxlTGFzdE1lZXRpbmdEYXRlIiwibm9kZXMiLCJtYXRjaCIsIml0ZW0iLCJzZWVkIiwiTWF0aCIsInJhbmRvbSIsInRpbWVzdGFtcCIsInRvSVNPU3RyaW5nIiwic2xpY2UiLCJkdXJhdGlvbiIsImZpbGVuYW1lIiwibmFtZSIsImVycm9yIiwiYWN0aXZlRWxlbWVudCIsIm5vZGVOYW1lIiwidG90YWwiLCJyZWFkQXNUZXh0Iiwicm91bmQiLCJzdHlsZXMiLCJjb250YWluZXIiLCJtYWluIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInN1YnRpdGxlIiwibWFwIiwiciIsIm51bWVyaWMiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQSxJQUFNQSxPQUFPLEdBQUdDLHNFQUFjLENBQUMsb0JBQUQsQ0FBOUI7QUFDQSxJQUFNQyxPQUFPLE9BQWIsQyxDQUdBOztBQUNBLElBQU1DLGNBQWMsR0FBRztBQUNyQkMsR0FBQyxFQUFFO0FBRGtCLENBQXZCLEMsQ0FJQTs7QUFDQSxJQUFNQyxTQUFTLEdBQUc7QUFDaEJDLE1BQUksRUFBRTtBQURVLENBQWxCO0FBSWUsU0FBU0MsWUFBVCxHQUF3QjtBQUFBOztBQUFBOztBQUFBLGtCQUNQQyxzREFBUSxDQUFDLElBQUQsQ0FERDtBQUFBLE1BQzlCQyxPQUQ4QjtBQUFBLE1BQ3JCQyxVQURxQjs7QUFBQSxvQkFFUkMsd0RBQVUsQ0FBQ1gsT0FBRCxFQUFVLEVBQVYsRUFBY1ksMkRBQWQsQ0FGRjtBQUFBLE1BRTlCQyxJQUY4QjtBQUFBLE1BRXhCQyxZQUZ3Qjs7QUFBQSxtQkFHSE4sc0RBQVEsQ0FBQyxLQUFELENBSEw7QUFBQSxNQUc5Qk8sU0FIOEI7QUFBQSxNQUduQkMsWUFIbUI7O0FBQUEsbUJBSUxSLHNEQUFRLENBQUMsQ0FBRCxDQUpIO0FBQUEsTUFJOUJTLFFBSjhCO0FBQUEsTUFJcEJDLFdBSm9COztBQU1yQ0MseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBR1YsT0FBSCxFQUFZO0FBQ1ZXLGlCQUFXLENBQUNYLE9BQUQsQ0FBWDtBQUNEO0FBQ0YsR0FKUSxFQUlOLENBQUNBLE9BQUQsQ0FKTSxDQUFUO0FBTUEsTUFBTVksYUFBYSxHQUFHQyx5REFBVyxDQUFDLFVBQUNDLEtBQUQsRUFBVztBQUMzQyxTQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUNELEtBQUssQ0FB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bEZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTRGRDs7R0FwS3VCMUUsWTs7S0FBQUEsWSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sZWN0ZXVyL3BvbGUtZW1wbG9pLjM5Y2NiZmM1NjU2MTc1NWNkYmQ2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWR1Y2VyfSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2xheW91dCdcbmltcG9ydCBNYWlsZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9tYWlsZXInXG5pbXBvcnQgUGVuZGluZ01lc3NhZ2UgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9wZW5kaW5nJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi8uLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuXG5pbXBvcnQgeyBpbml0UmVkdWNlciwgcmVkdWNlckZhY3RvcnkgfSBmcm9tICcuLi8uLi8uLi9saWIvaGlzdG9yaXF1ZSdcblxuY29uc3QgcmVkdWNlciA9IHJlZHVjZXJGYWN0b3J5KCdUZXN0IC0gUG9sZSBFbXBsb2knKVxuY29uc3QgZGV2TW9kZSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09ICdkZXZlbG9wbWVudCdcblxuXG4vLyBwZXJpb2RpY2l0ZVxuY29uc3QgZnJlcXVlbmN5TmFtZXMgPSB7XG4gIE06ICdNZW5zdWVsJyxcbn1cblxuLy8gZmljaGllclxuY29uc3QgdHlwZU5hbWVzID0ge1xuICBQRUNHOiAnUEUgdmVycyBDRCcsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJlbmVmaWNpYWlyZSgpIHtcbiAgY29uc3QgW2RldkZpbGUsIHNldERldkZpbGVdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW3J1bnMsIGRpc3BhdGNoUnVuc10gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIFtdLCBpbml0UmVkdWNlcilcbiAgY29uc3QgW2lzUGVuZGluZywgc2V0SXNQZW5kaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2ZpbGVTaXplLCBzZXRGaWxlU2l6ZV0gPSB1c2VTdGF0ZSgwKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmKGRldkZpbGUpIHtcbiAgICAgIGZpbGVIYW5kbGVyKGRldkZpbGUpXG4gICAgfVxuICB9LCBbZGV2RmlsZV0pXG5cbiAgY29uc3Qgc2VsZWN0SGFuZGxlciA9IHVzZUNhbGxiYWNrKChldmVudCkgPT4ge1xuICAgIGZvciAodmFyIGkgPSAwOyBpPGV2ZW50LnRhcmdldC5maWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgZmlsZUhhbmRsZXIoZXZlbnQudGFyZ2V0LmZpbGVzW2ldKVxuICAgIH1cbiAgICBldmVudC50YXJnZXQudmFsdWUgPSAnJ1xuICB9KVxuXG4gIGNvbnN0IGZpbGVIYW5kbGVyID0gKGZpbGUpID0+IHtcbiAgICBpZiAoZGV2TW9kZSAmJiBmaWxlICE9IGRldkZpbGUpIHtcbiAgICAgIHNldERldkZpbGUoZmlsZSlcbiAgICB9XG4gICAgc2V0RmlsZVNpemUoZmlsZS5zaXplKTtcbiAgICBzZXRJc1BlbmRpbmcodHJ1ZSk7XG4gICAgY29uc3Qgc3RhcnRfdGltZSA9IG5ldyBEYXRlKCk7XG5cbiAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgY29uc3QgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpXG4gICAgICBjb25zdCBkb20gPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKGV2ZW50LnRhcmdldC5yZXN1bHQsIFwiYXBwbGljYXRpb24veG1sXCIpXG5cbiAgICAgIGNvbnN0IGRlc2MgPSBkb20uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2VudGV0ZScpWzBdXG4gICAgICBjb25zdCBmcmVxdWVuY3kgPSBkZXNjLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdwZXJpb2RpY2l0ZScpWzBdLmlubmVySFRNTFxuICAgICAgY29uc3QgdHlwZSA9IGRlc2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2ZpY2hpZXInKVswXS5pbm5lckhUTUxcbiAgICAgIGNvbnN0IGRlcGFydGVtZW50ID0gZGVzYy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnZGVwYXJ0ZW1lbnQnKVswXS5pbm5lckhUTUxcbiAgICAgIGNvbnN0IHJlZmVyZW5jZURhdGUgPSBkZXNjLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdkYXRlLXJlZmVyZW5jZScpWzBdLmlubmVySFRNTFxuICAgICAgY29uc3QgZ2VuZXJhdGlvbkRhdGUgPSBkZXNjLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdkYXRlLWZhYnJpY2F0aW9uJylbMF0uaW5uZXJIVE1MXG4gICAgICBjb25zdCBpdGVtcyA9IG5ldyBBcnJheSguLi5kb20uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2Rvc3NpZXInKSlcblxuICAgICAgY29uc3Qgd2l0aExhc3RNZWV0aW5nRGF0ZSA9IGl0ZW1zLmZpbHRlcihpID0+IGkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2RhdGUtZGVybmllci1lbnQnKS5sZW5ndGgpXG4gICAgICBjb25zdCB3aXRoVXNhYmxlTGFzdE1lZXRpbmdEYXRlID0gaXRlbXMuZmlsdGVyKGkgPT4ge1xuICAgICAgICBjb25zdCBub2RlcyA9IGkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2RhdGUtZGVybmllci1lbnQnKVxuICAgICAgICByZXR1cm4gbm9kZXMubGVuZ3RoICYmIG5vZGVzWzBdLmlubmVySFRNTC5tYXRjaCgvXFxkezR9LVxcZHsyfS1cXGR7Mn0vKVxuICAgICAgfSlcblxuICAgICAgc2V0SXNQZW5kaW5nKGZhbHNlKTtcbiAgICAgIGRpc3BhdGNoUnVucyh7XG4gICAgICAgIHR5cGU6ICdhcHBlbmQnLFxuICAgICAgICBpdGVtOiB7XG4gICAgICAgICAgc2VlZDogTWF0aC5yYW5kb20oKSxcbiAgICAgICAgICB0aW1lc3RhbXA6IChuZXcgRGF0ZSgpKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDE5KSxcbiAgICAgICAgICBkdXJhdGlvbjogKG5ldyBEYXRlKCkpIC0gc3RhcnRfdGltZSxcbiAgICAgICAgICBmaWxlbmFtZTogZmlsZS5uYW1lLFxuICAgICAgICAgIGZyZXF1ZW5jeSxcbiAgICAgICAgICByZWZlcmVuY2VEYXRlLFxuICAgICAgICAgIGdlbmVyYXRpb25EYXRlLFxuICAgICAgICAgIGRlcGFydGVtZW50LFxuICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgLy8gV0lQOiBPSyBzdXIgRmlyZWZveCBLTyBzdXIgQ2hyb21lXG4gICAgICAgICAgZXJyb3I6IGRvbS5hY3RpdmVFbGVtZW50ICYmIGRvbS5hY3RpdmVFbGVtZW50Lm5vZGVOYW1lID09IFwicGFyc2VyZXJyb3JcIixcbiAgICAgICAgICB0b3RhbDogaXRlbXMubGVuZ3RoLFxuICAgICAgICAgIHdpdGhMYXN0TWVldGluZ0RhdGU6IHdpdGhMYXN0TWVldGluZ0RhdGUubGVuZ3RoLFxuICAgICAgICAgIHdpdGhVc2FibGVMYXN0TWVldGluZ0RhdGU6IHdpdGhVc2FibGVMYXN0TWVldGluZ0RhdGUubGVuZ3RoLFxuICAgICAgICAgIGZpbGVTaXplOiBmaWxlLnNpemUsXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIHJlYWRlci5yZWFkQXNUZXh0KGZpbGUpXG4gIH1cblxuICBjb25zdCByb3VuZCA9ICh2YWx1ZSkgPT4gTWF0aC5yb3VuZCh2YWx1ZSlcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxuICAgICAgICAgIEFuYWx5c2VyIGxlcyBmaWNoaWVycyBQw7RsZSBFbXBsb2lcbiAgICAgICAgPC9oMT5cblxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgICAgR2xpc3NleiBldCBkw6lwb3NleiBsZSBmaWNoaWVyIFBFIMOgIGFuYWx5c2VyIG91IHPDqWxlY3Rpb25uZXogbGUuPGJyLz5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBvbkNoYW5nZT17c2VsZWN0SGFuZGxlcn0gbXVsdGlwbGUvPlxuICAgICAgICA8L3A+XG5cbiAgICAgICAge2lzUGVuZGluZyAmJiA8UGVuZGluZ01lc3NhZ2UgZmlsZVNpemU9e2ZpbGVTaXplfS8+fVxuXG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICBMZXMgb3DDqXJhdGlvbnMgc29udCB0b3V0ZXMgcsOpYWxpc8OpZXMgc3VyIHZvdHJlIG9yZGluYXRldXIuPGJyLz5cbiAgICAgICAgICBBdWN1bmUgZG9ubsOpZSBwZXJzb25uZWxsZSBuJ2VzdCB0cmFuc2bDqXLDqWUuXG4gICAgICAgIDwvcD5cblxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgICAgPGEgaHJlZj1cIiNwb3VycXVvaVwiPlBvdXJxdW9pIHVuIHRlbCBsZWN0ZXVyJm5ic3A7PzwvYT5cbiAgICAgICAgPC9wPlxuXG4gICAgICAgIHsgcnVucyAmJiBydW5zLmxlbmd0aCA+IDAgJiYgKDw+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnN1YnRpdGxlfT5cbiAgICAgICAgICAgIEhpc3RvcmlxdWVcbiAgICAgICAgICA8L2gyPlxuXG4gICAgICAgICAgPHRhYmxlPlxuICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+RGF0ZTwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+RmljaGllcjwvdGg+XG4gICAgICAgICAgICAgICAgeyBkZXZNb2RlICYmIDx0aCByb3dTcGFuPVwiMlwiPlRhaWxsZTwvdGg+fVxuICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPkRhdGUgZGUgcsOpZsOpcmVuY2U8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPkRhdGUgZGUgZmFicmljYXRpb248L3RoPlxuICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPkZyw6lxdWVuY2U8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPk5hdHVyZTwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+Q0Q8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPkRvc3NpZXJzPC90aD5cbiAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj1cIjJcIiByb3dTcGFuPVwiMlwiPmF2ZWMgZGF0ZSBkZSBkZXJuaWVyIGVudHJldGllbiBQUEFFICglKTwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIGNvbFNwYW49XCIyXCIgcm93U3Bhbj1cIjJcIj48YWJiciB0aXRsZT1cIlBhciB2YWxpZGUsIG9uIHZldXQgZGlyZSBjb250aWVudCB1bmUgZGF0ZSBhdSBmb3JtYXQgQUFBLU1NLUpKXCI+YXZlYyBkYXRlIGRlIGRlcm5pZXIgZW50cmV0aWVuIFBQQUUgPGk+dmFsaWRlPC9pPiAoJSk8L2FiYnI+PC90aD5cbiAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5FcnJldXI8L3RoPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICB7cnVucy5tYXAoKHIsIGkpID0+ICg8dHIga2V5PXtgJHtyLnRpbWVzdGFtcH0tJHtyLmZpbGVuYW1lfS0ke3Iuc2VlZH1gIH0gPlxuICAgICAgICAgICAgICAgIDx0ZD57ci50aW1lc3RhbXB9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e3IuZmlsZW5hbWV9PC90ZD5cbiAgICAgICAgICAgICAgICB7IGRldk1vZGUgJiYgPHRkPntyLmZpbGVTaXplfTwvdGQ+fVxuICAgICAgICAgICAgICAgIDx0ZD57ci5yZWZlcmVuY2VEYXRlfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPntyLmdlbmVyYXRpb25EYXRlfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPntgJHtyLmZyZXF1ZW5jeX0gKCR7ZnJlcXVlbmN5TmFtZXNbci5mcmVxdWVuY3ldIHx8ICc/J30pYH08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57YCR7ci50eXBlfSAoJHt0eXBlTmFtZXNbci50eXBlXSB8fCAnPyd9KWB9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwic2hyaW5rXCI+e3IuZGVwYXJ0ZW1lbnR9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMubnVtZXJpY30+e3IudG90YWx9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e3Iud2l0aExhc3RNZWV0aW5nRGF0ZX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJzaHJpbmtcIj57cm91bmQoci53aXRoTGFzdE1lZXRpbmdEYXRlL3IudG90YWwqMTAwKX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57ci53aXRoVXNhYmxlTGFzdE1lZXRpbmdEYXRlfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInNocmlua1wiPntyb3VuZChyLndpdGhVc2FibGVMYXN0TWVldGluZ0RhdGUvci50b3RhbCoxMDApfTwvdGQ+XG5cbiAgICAgICAgICAgICAgICA8dGQ+e3IuZXJyb3IgPyAnT3VpJyA6ICdOb24nfTwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgPC90YWJsZT5cblxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZGlzcGF0Y2hSdW5zKHt0eXBlOiAncmVzZXQnfSl9PlZpZGVyIGwnaGlzdG9yaXF1ZTwvYnV0dG9uPlxuICAgICAgICA8Lz4pfVxuXG5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgIFVuIHByb2Jsw6htZSwgdW5lIHF1ZXN0aW9uID8gQ29udGFjdGV6LW5vdXMgw6AgPE1haWxlciBzdWJqZWN0PVwiRmx1eCBQb2xlIEVtcGxvaVwiPmRhdGEuaW5zZXJ0aW9uQGJldGEuZ291di5mcjwvTWFpbGVyPlxuICAgICAgICA8L3A+XG5cbiAgICAgICAgPGgyIGlkPVwicG91cnF1b2lcIiBjbGFzc05hbWU9e3N0eWxlcy5zdWJ0aXRsZX0+XG4gICAgICAgICAgUG91cnF1b2kgdW4gbGVjdGV1ciBkZSBmaWNoaWVyIFDDtGxlIEVtcGxvaSZuYnNwOz9cbiAgICAgICAgPC9oMj5cblxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5cbiAgICAgICAgICBUb3VzIGxlcyBkw6lwYXJ0ZW1lbnRzIG4nb250IHBhcyBsZXMgb3V0aWxzIHBvdXIgYW5hbHlzZXIgbGVzIGZpY2hpZXJzIGVudm95w6lzIHBhciBQw7RsZSBFbXBsb2kuIENlbGEgcGV1dCByYWxlbnRpciBldCBjb21wbGlxdWVyIG5vcyDDqWNoYW5nZXMuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+XG4gICAgICAgICAgQXZlYyBjZXQgb3V0aWwsIG5vdXMgc291aGFpdG9ucyBwZXJtZXR0cmUgYXV4IHBlcnNvbm5lcyBxdWkgb250IGFjY8OocyDDoCBjZXMgZmljaGllcnMgZCdlbiBleHRyYWlyZSBkZXMgc3RhdGlzdGlxdWVzIGfDqW7DqXJhbGVzIHNhbnMgYXZvaXIgw6AgbWV0dHJlIGxlcyBtYWlucyBkYW5zIGxlIGNhbWJvdWkgZWxsZXMtbcOqbWUuXG4gICAgICAgIDwvcD5cblxuICAgICAgPC9tYWluPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9