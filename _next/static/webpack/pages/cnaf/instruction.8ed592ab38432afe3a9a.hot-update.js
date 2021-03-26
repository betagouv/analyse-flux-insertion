webpackHotUpdate_N_E("pages/cnaf/instruction",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY25hZi9pbnN0cnVjdGlvbi9pbmRleC5qcyJdLCJuYW1lcyI6WyJyZWR1Y2VyIiwicmVkdWNlckZhY3RvcnkiLCJkZXZNb2RlIiwiSW5zdHJ1Y3Rpb24iLCJ1c2VTdGF0ZSIsImRldkZpbGUiLCJzZXREZXZGaWxlIiwidXNlUmVkdWNlciIsImluaXRSZWR1Y2VyIiwicnVucyIsImRpc3BhdGNoUnVucyIsImlzUGVuZGluZyIsInNldElzUGVuZGluZyIsImZpbGVTaXplIiwic2V0RmlsZVNpemUiLCJ1c2VFZmZlY3QiLCJmaWxlSGFuZGxlciIsImhhbmRsZU5ld1J1bnMiLCJ1c2VDYWxsYmFjayIsImRhdGEiLCJ0eXBlIiwiaXRlbXMiLCJzZWxlY3RIYW5kbGVyIiwiZXZlbnQiLCJpIiwidGFyZ2V0IiwiZmlsZXMiLCJsZW5ndGgiLCJ2YWx1ZSIsImZpbGUiLCJzaXplIiwic3RhcnRfdGltZSIsIkRhdGUiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwicGFyc2VyIiwiRE9NUGFyc2VyIiwiZG9tIiwicGFyc2VGcm9tU3RyaW5nIiwicmVzdWx0IiwiZGVzYyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiZnJlcXVlbmN5IiwiaW5uZXJIVE1MIiwiZHQiLCJ0aW1lIiwiQXJyYXkiLCJ3aXRoRW1haWwiLCJmaWx0ZXIiLCJ3aXRoVXNhYmxlRW1haWwiLCJvayIsIndpdGhGb3JiaWRkZW5FbWFpbFVzYWdlIiwid2l0aG91dEVtYWlsVXNhZ2UiLCJ3aXRoUGhvbmUiLCJ3aXRoVXNhYmxlUGhvbmUiLCJ3aXRoRm9yYmlkZGVuUGhvbmVVc2FnZSIsIndpdGhvdXRQaG9uZVVzYWdlIiwid2l0aERTUCIsIml0ZW0iLCJzZWVkIiwiTWF0aCIsInJhbmRvbSIsInRpbWVzdGFtcCIsInRvSVNPU3RyaW5nIiwic2xpY2UiLCJkdXJhdGlvbiIsImZpbGVuYW1lIiwibmFtZSIsImZpbGVEYXRldGltZSIsImVycm9yIiwiYWN0aXZlRWxlbWVudCIsIm5vZGVOYW1lIiwidG90YWwiLCJlbWFpbCIsIndpdGhBdXRvcmlzYXRpb24iLCJ3aXRoRXhwbGljaXRSZWZ1c2FsIiwid2l0aG91dEF1dG9yaXNhdGlvbkRldGFpbHMiLCJwaG9uZSIsInJlYWRBc1RleHQiLCJyb3VuZCIsInN0eWxlcyIsImNvbnRhaW5lciIsIm1haW4iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwic3VidGl0bGUiLCJtYXAiLCJyIiwiaXNOYU4iLCJmcmVxdWVuY3lOYW1lcyIsInR5cGVOYW1lcyIsIm51bWVyaWMiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHQyx1RUFBYyxDQUFDLDJCQUFELENBQTlCO0FBQ0EsSUFBTUMsT0FBTyxPQUFiO0FBRWUsU0FBU0MsV0FBVCxHQUF1QjtBQUFBOztBQUFBOztBQUFBLGtCQUNOQyxzREFBUSxDQUFDLElBQUQsQ0FERjtBQUFBLE1BQzdCQyxPQUQ2QjtBQUFBLE1BQ3BCQyxVQURvQjs7QUFBQSxvQkFFUEMsd0RBQVUsQ0FBQ1AsT0FBRCxFQUFVLEVBQVYsRUFBY1EsNERBQWQsQ0FGSDtBQUFBLE1BRTdCQyxJQUY2QjtBQUFBLE1BRXZCQyxZQUZ1Qjs7QUFBQSxtQkFHRk4sc0RBQVEsQ0FBQyxLQUFELENBSE47QUFBQSxNQUc3Qk8sU0FINkI7QUFBQSxNQUdsQkMsWUFIa0I7O0FBQUEsbUJBSUpSLHNEQUFRLENBQUMsQ0FBRCxDQUpKO0FBQUEsTUFJN0JTLFFBSjZCO0FBQUEsTUFJbkJDLFdBSm1COztBQU1wQ0MseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBR1YsT0FBSCxFQUFZO0FBQ1ZXLGlCQUFXLENBQUNYLE9BQUQsQ0FBWDtBQUNEO0FBQ0YsR0FKUSxFQUlOLENBQUNBLE9BQUQsQ0FKTSxDQUFUO0FBTUEsTUFBTVksYUFBYSxHQUFHQyx5REFB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aEhGLGVBbUhFO0FBQUcsaUJBQVMsRUFBRVosOERBQU0sQ0FBQ1ksSUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FuSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE4SEQ7O0dBOU91QjFGLFc7O0tBQUFBLFciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY25hZi9pbnN0cnVjdGlvbi44ZWQ1OTJhYjM4NDMyYWZlM2E5YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVkdWNlcn0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbmltcG9ydCBBZG1pbiBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2FkbWluJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2xheW91dCdcbmltcG9ydCBNYWlsZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9tYWlsZXInXG5pbXBvcnQgUGVuZGluZ01lc3NhZ2UgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9wZW5kaW5nJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi8uLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuXG5pbXBvcnQgeyBmcmVxdWVuY3lOYW1lcywgdHlwZU5hbWVzIH0gZnJvbSAnLi4vLi4vLi4vbGliL2NuYWYnXG5pbXBvcnQgeyBpbml0UmVkdWNlciwgcmVkdWNlckZhY3RvcnkgfSBmcm9tICcuLi8uLi8uLi9saWIvaGlzdG9yaXF1ZSdcblxuY29uc3QgcmVkdWNlciA9IHJlZHVjZXJGYWN0b3J5KCdUZXN0IC0gQ05BRiAtIEluc3RydWN0aW9uJylcbmNvbnN0IGRldk1vZGUgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PSAnZGV2ZWxvcG1lbnQnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluc3RydWN0aW9uKCkge1xuICBjb25zdCBbZGV2RmlsZSwgc2V0RGV2RmlsZV0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbcnVucywgZGlzcGF0Y2hSdW5zXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgW10sIGluaXRSZWR1Y2VyKVxuICBjb25zdCBbaXNQZW5kaW5nLCBzZXRJc1BlbmRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZmlsZVNpemUsIHNldEZpbGVTaXplXSA9IHVzZVN0YXRlKDApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYoZGV2RmlsZSkge1xuICAgICAgZmlsZUhhbmRsZXIoZGV2RmlsZSlcbiAgICB9XG4gIH0sIFtkZXZGaWxlXSlcblxuICBjb25zdCBoYW5kbGVOZXdSdW5zID0gdXNlQ2FsbGJhY2soZGF0YSA9PiB7XG4gICAgZGlzcGF0Y2hSdW5zKHtcbiAgICAgIHR5cGU6ICdyZXNldCcsXG4gICAgICBpdGVtczogZGF0YVxuICAgIH0pXG4gIH0pXG5cbiAgY29uc3Qgc2VsZWN0SGFuZGxlciA9IHVzZUNhbGxiYWNrKChldmVudCkgPT4ge1xuICAgIGZvciAodmFyIGkgPSAwOyBpPGV2ZW50LnRhcmdldC5maWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgZmlsZUhhbmRsZXIoZXZlbnQudGFyZ2V0LmZpbGVzW2ldKVxuICAgIH1cbiAgICBldmVudC50YXJnZXQudmFsdWUgPSAnJ1xuICB9KVxuXG4gIGNvbnN0IGZpbGVIYW5kbGVyID0gKGZpbGUpID0+IHtcbiAgICBpZiAoZGV2TW9kZSAmJiBmaWxlICE9IGRldkZpbGUpIHtcbiAgICAgIHNldERldkZpbGUoZmlsZSlcbiAgICB9XG4gICAgc2V0RmlsZVNpemUoZmlsZS5zaXplKTtcbiAgICBzZXRJc1BlbmRpbmcodHJ1ZSk7XG4gICAgY29uc3Qgc3RhcnRfdGltZSA9IG5ldyBEYXRlKCk7XG5cbiAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgY29uc3QgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpXG4gICAgICBjb25zdCBkb20gPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKGV2ZW50LnRhcmdldC5yZXN1bHQsIFwiYXBwbGljYXRpb24veG1sXCIpXG5cbiAgICAgIGNvbnN0IGRlc2MgPSBkb20uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ0lkZW50aWZpY2F0aW9uRmx1eCcpWzBdXG4gICAgICBjb25zdCBmcmVxdWVuY3kgPSBkZXNjLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdUWVBFRkxVWCcpWzBdLmlubmVySFRNTFxuICAgICAgY29uc3QgdHlwZSA9IGRlc2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ05BVEZMVVgnKVswXS5pbm5lckhUTUxcbiAgICAgIGNvbnN0IGR0ID0gZGVzYy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnRFRDUkVBRkxVWCcpWzBdLmlubmVySFRNTFxuICAgICAgY29uc3QgdGltZSA9IGRlc2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ0hFVUNSRUFGTFVYJylbMF0uaW5uZXJIVE1MXG5cbiAgICAgIGNvbnN0IGl0ZW1zID0gbmV3IEFycmF5KC4uLmRvbS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnSW5mb0RlbWFuZGVSU0EnKSlcbiAgICAgIGNvbnN0IHdpdGhFbWFpbCA9IGl0ZW1zLmZpbHRlcihpID0+IGkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ0FEUkVMRUMnKS5sZW5ndGgpXG4gICAgICBjb25zdCB3aXRoVXNhYmxlRW1haWwgPSBpdGVtcy5maWx0ZXIoaSA9PiB7XG4gICAgICAgIGNvbnN0IG9rID0gaS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnQVVUT1JVVElBRFJFTEVDJylbMF1cbiAgICAgICAgcmV0dXJuIGkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ0FEUkVMRUMnKS5sZW5ndGggJiYgb2sgJiYgb2suaW5uZXJIVE1MID09IFwiQVwiXG4gICAgICB9KVxuICAgICAgY29uc3Qgd2l0aEZvcmJpZGRlbkVtYWlsVXNhZ2UgPSBpdGVtcy5maWx0ZXIoaSA9PiB7XG4gICAgICAgIGNvbnN0IG9rID0gaS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnQVVUT1JVVElBRFJFTEVDJylbMF1cbiAgICAgICAgcmV0dXJuIGkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ0FEUkVMRUMnKS5sZW5ndGggJiYgb2sgJiYgb2suaW5uZXJIVE1MID09IFwiUlwiXG4gICAgICB9KVxuICAgICAgY29uc3Qgd2l0aG91dEVtYWlsVXNhZ2UgPSBpdGVtcy5maWx0ZXIoaSA9PiB7XG4gICAgICAgIGNvbnN0IG9rID0gaS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnQVVUT1JVVElBRFJFTEVDJylbMF1cbiAgICAgICAgcmV0dXJuIGkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ0FEUkVMRUMnKS5sZW5ndGggJiYgb2sgJiYgb2suaW5uZXJIVE1MID09IFwiSVwiXG4gICAgICB9KVxuXG4gICAgICBjb25zdCB3aXRoUGhvbmUgPSBpdGVtcy5maWx0ZXIoaSA9PiBpLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdOVU1URUwnKS5sZW5ndGgpXG4gICAgICBjb25zdCB3aXRoVXNhYmxlUGhvbmUgPSBpdGVtcy5maWx0ZXIoaSA9PiB7XG4gICAgICAgIGNvbnN0IG9rID0gaS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnQVVUT1JVVElURUwnKVswXVxuICAgICAgICByZXR1cm4gaS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnTlVNVEVMJykubGVuZ3RoICYmIG9rICYmIG9rLmlubmVySFRNTCA9PSBcIkFcIlxuICAgICAgfSlcbiAgICAgIGNvbnN0IHdpdGhGb3JiaWRkZW5QaG9uZVVzYWdlID0gaXRlbXMuZmlsdGVyKGkgPT4ge1xuICAgICAgICBjb25zdCBvayA9IGkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ0FVVE9SVVRJVEVMJylbMF1cbiAgICAgICAgcmV0dXJuIGkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ05VTVRFTCcpLmxlbmd0aCAmJiBvayAmJiBvay5pbm5lckhUTUwgPT0gXCJSXCJcbiAgICAgIH0pXG4gICAgICBjb25zdCB3aXRob3V0UGhvbmVVc2FnZSA9IGl0ZW1zLmZpbHRlcihpID0+IHtcbiAgICAgICAgY29uc3Qgb2sgPSBpLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdBVVRPUlVUSVRFTCcpWzBdXG4gICAgICAgIHJldHVybiBpLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdOVU1URUwnKS5sZW5ndGggJiYgb2sgJiYgb2suaW5uZXJIVE1MID09IFwiSVwiXG4gICAgICB9KVxuXG4gICAgICBjb25zdCB3aXRoRFNQID0gaXRlbXMuZmlsdGVyKGkgPT4gaS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnRG9ubmVlc1NvY2lvUHJvZmVzc2lvbm5lbGxlcycpLmxlbmd0aClcblxuICAgICAgc2V0SXNQZW5kaW5nKGZhbHNlKTtcblxuICAgICAgZGlzcGF0Y2hSdW5zKHtcbiAgICAgICAgdHlwZTogJ2FwcGVuZCcsXG4gICAgICAgIGl0ZW06IHtcbiAgICAgICAgICBzZWVkOiBNYXRoLnJhbmRvbSgpLFxuICAgICAgICAgIHRpbWVzdGFtcDogKG5ldyBEYXRlKCkpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwxOSksXG4gICAgICAgICAgZHVyYXRpb246IChuZXcgRGF0ZSgpKSAtIHN0YXJ0X3RpbWUsXG4gICAgICAgICAgZmlsZW5hbWU6IGZpbGUubmFtZSxcbiAgICAgICAgICBmaWxlRGF0ZXRpbWU6IGAke2R0fS0ke3RpbWV9YCxcbiAgICAgICAgICBmcmVxdWVuY3ksXG4gICAgICAgICAgdHlwZSxcbiAgICAgICAgICAvLyBXSVA6IE9LIHN1ciBGaXJlZm94IEtPIHN1ciBDaHJvbWVcbiAgICAgICAgICBlcnJvcjogZG9tLmFjdGl2ZUVsZW1lbnQgJiYgZG9tLmFjdGl2ZUVsZW1lbnQubm9kZU5hbWUgPT0gXCJwYXJzZXJlcnJvclwiLFxuICAgICAgICAgIHRvdGFsOiBpdGVtcy5sZW5ndGgsXG4gICAgICAgICAgZW1haWw6IHtcbiAgICAgICAgICAgIHRvdGFsOiB3aXRoRW1haWwubGVuZ3RoLFxuICAgICAgICAgICAgd2l0aEF1dG9yaXNhdGlvbjogd2l0aFVzYWJsZUVtYWlsLmxlbmd0aCxcbiAgICAgICAgICAgIHdpdGhFeHBsaWNpdFJlZnVzYWw6IHdpdGhGb3JiaWRkZW5FbWFpbFVzYWdlLmxlbmd0aCxcbiAgICAgICAgICAgIHdpdGhvdXRBdXRvcmlzYXRpb25EZXRhaWxzOiB3aXRob3V0RW1haWxVc2FnZS5sZW5ndGgsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBwaG9uZToge1xuICAgICAgICAgICAgdG90YWw6IHdpdGhQaG9uZS5sZW5ndGgsXG4gICAgICAgICAgICB3aXRoQXV0b3Jpc2F0aW9uOiB3aXRoVXNhYmxlRW1haWwubGVuZ3RoLFxuICAgICAgICAgICAgd2l0aEV4cGxpY2l0UmVmdXNhbDogd2l0aEZvcmJpZGRlbkVtYWlsVXNhZ2UubGVuZ3RoLFxuICAgICAgICAgICAgd2l0aG91dEF1dG9yaXNhdGlvbkRldGFpbHM6IHdpdGhvdXRFbWFpbFVzYWdlLmxlbmd0aCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHdpdGhEU1A6IHdpdGhEU1AubGVuZ3RoLFxuICAgICAgICAgIGZpbGVTaXplOiBmaWxlLnNpemUsXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIHJlYWRlci5yZWFkQXNUZXh0KGZpbGUpXG4gIH1cblxuICBjb25zdCByb3VuZCA9ICh2YWx1ZSkgPT4gTWF0aC5yb3VuZCh2YWx1ZSlcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn1cbiAgICAgIGZpbGVIYW5kbGVyPXtmaWxlSGFuZGxlcn0+XG4gICAgICA8QWRtaW4gY2F0ZWdvcnk9XCJJbnN0cnVjdGlvblwiIG9uUnVuUmVmcmVzaD17aGFuZGxlTmV3UnVuc30vPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XG4gICAgICAgICAgTGVjdGV1ciBkZSBmaWNoaWVyIMKrIEluc3RydWN0aW9uIMK7IGRlIGxhIENOQUZcbiAgICAgICAgPC9oMT5cblxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgICAgR2xpc3NleiBldCBkw6lwb3NleiBsZSBmaWNoaWVyIENOQUYgw6AgYW5hbHlzZXIgb3Ugc8OpbGVjdGlvbm5leiBsZS48YnIvPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG9uQ2hhbmdlPXtzZWxlY3RIYW5kbGVyfSBtdWx0aXBsZS8+XG4gICAgICAgIDwvcD5cblxuICAgICAgICB7aXNQZW5kaW5nICYmIDxQZW5kaW5nTWVzc2FnZSBmaWxlU2l6ZT17ZmlsZVNpemV9Lz59XG5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgIExlcyBvcMOpcmF0aW9ucyBzb250IHRvdXRlcyByw6lhbGlzw6llcyBzdXIgdm90cmUgb3JkaW5hdGV1ci48YnIvPlxuICAgICAgICAgIEF1Y3VuZSBkb25uw6llIHBlcnNvbm5lbGxlIG4nZXN0IHRyYW5zZsOpcsOpZS5cbiAgICAgICAgPC9wPlxuXG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICA8YSBocmVmPVwiI3BvdXJxdW9pXCI+UG91cnF1b2kgdW4gdGVsIGxlY3RldXImbmJzcDs/PC9hPlxuICAgICAgICA8L3A+XG5cbiAgICAgICAgeyBydW5zICYmIHJ1bnMubGVuZ3RoID4gMCAmJiAoPD5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuc3VidGl0bGV9PlxuICAgICAgICAgICAgSGlzdG9yaXF1ZVxuICAgICAgICAgIDwvaDI+XG5cbiAgICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5EYXRlPC90aD5cbiAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5GaWNoaWVyPC90aD5cbiAgICAgICAgICAgICAgICB7IGRldk1vZGUgJiYgPHRoIHJvd1NwYW49XCIyXCI+VGFpbGxlPC90aD59XG4gICAgICAgICAgICAgICAgeyBkZXZNb2RlICYmIDx0aCByb3dTcGFuPVwiMlwiPkR1csOpZTxici8+KGVuIHMpPC90aD59XG4gICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+RGF0ZSBkdSBmaWNoaWVyPC90aD5cbiAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5GcsOpcXVlbmNlPC90aD5cbiAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5OYXR1cmU8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPkRvc3NpZXJzPC90aD5cbiAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj1cIjhcIj5hdmVjIGVtYWlsPC90aD5cbiAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj1cIjhcIj5hdmVjIHTDqWzDqXBob25lPC90aD5cbiAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj1cIjJcIiByb3dTcGFuPVwiMlwiPkRTUCAoJSk8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPkVycmV1cjwvdGg+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj1cIjJcIj4jICglKTwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIGNvbFNwYW49XCIyXCI+ZXQgYXV0b3Jpc2F0aW9uICglKTwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIGNvbFNwYW49XCIyXCI+cmVmdXMgZXhwbGljaXQgKCUpPC90aD5cbiAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj1cIjJcIj48YWJiciB0aXRsZT1cIkJhbGlzZSBBVVRPUlVUSUFEUkVMRUMgcHLDqXNlbnRlIGV0IMOpZ2FsZSDDoCAnSSdcIj5pbmNvbm51IGV4cGxpY2l0IChJKSAoJSk8L2FiYnI+PC90aD5cblxuICAgICAgICAgICAgICAgIDx0aCBjb2xTcGFuPVwiMlwiPiMgKCUpPC90aD5cbiAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj1cIjJcIj5ldCBhdXRvcmlzYXRpb24gKCUpPC90aD5cbiAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj1cIjJcIj5yZWZ1cyBleHBsaWNpdCAoJSk8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBjb2xTcGFuPVwiMlwiPjxhYmJyIHRpdGxlPVwiQmFsaXNlIEFVVE9SVVRJVEVMIHByw6lzZW50ZSBldCDDqWdhbGUgw6AgJ0knXCI+aW5jb25udSBleHBsaWNpdCAoSSkgKCUpPC9hYmJyPjwvdGg+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICB7cnVucy5tYXAociA9PiAoPHRyIGtleT17YCR7ci50aW1lc3RhbXB9LSR7ci5maWxlbmFtZX0tJHtyLnNlZWR9YCB9PlxuICAgICAgICAgICAgICAgIDx0ZD57ci50aW1lc3RhbXB9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e3IuZmlsZW5hbWV9PC90ZD5cbiAgICAgICAgICAgICAgICB7IGRldk1vZGUgJiYgPHRkPntyLmZpbGVTaXplfTwvdGQ+fVxuICAgICAgICAgICAgICAgIHsgZGV2TW9kZSAmJiA8dGQ+eyFpc05hTihyLmR1cmF0aW9uKSA/IHIuZHVyYXRpb24vMTAwMCA6IFwiI04vQVwifTwvdGQ+fVxuICAgICAgICAgICAgICAgIDx0ZD57ci5maWxlRGF0ZXRpbWV9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e2Ake3IuZnJlcXVlbmN5fSAoJHtmcmVxdWVuY3lOYW1lc1tyLmZyZXF1ZW5jeV0gfHwgJz8nfSlgfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPntgJHtyLnR5cGV9ICgke3R5cGVOYW1lc1tyLnR5cGVdIHx8ICc/J30pYH08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5udW1lcmljfT57ci50b3RhbH08L3RkPlxuXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLm51bWVyaWN9PntyLmVtYWlsLnRvdGFsfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInNocmlua1wiPntyb3VuZChyLmVtYWlsLnRvdGFsL3IudG90YWwqMTAwKX08L3RkPlxuXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLm51bWVyaWN9PntyLmVtYWlsLndpdGhBdXRvcmlzYXRpb259PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwic2hyaW5rXCI+e3JvdW5kKHIuZW1haWwud2l0aEF1dG9yaXNhdGlvbi9yLnRvdGFsKjEwMCl9PC90ZD5cblxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5udW1lcmljfT57ci5lbWFpbC53aXRoRXhwbGljaXRSZWZ1c2FsfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInNocmlua1wiPntyb3VuZChyLmVtYWlsLndpdGhFeHBsaWNpdFJlZnVzYWwvci50b3RhbCoxMDApfTwvdGQ+XG5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMubnVtZXJpY30+e3IuZW1haWwud2l0aG91dEF1dG9yaXNhdGlvbkRldGFpbHN9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwic2hyaW5rXCI+e3JvdW5kKHIuZW1haWwud2l0aG91dEF1dG9yaXNhdGlvbkRldGFpbHMvci50b3RhbCoxMDApfTwvdGQ+XG5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMubnVtZXJpY30+e3IucGhvbmUudG90YWx9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwic2hyaW5rXCI+e3JvdW5kKHIucGhvbmUudG90YWwvci50b3RhbCoxMDApfTwvdGQ+XG5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMubnVtZXJpY30+e3IucGhvbmUud2l0aEF1dG9yaXNhdGlvbn08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJzaHJpbmtcIj57cm91bmQoci5waG9uZS53aXRoQXV0b3Jpc2F0aW9uL3IudG90YWwqMTAwKX08L3RkPlxuXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLm51bWVyaWN9PntyLnBob25lLndpdGhFeHBsaWNpdFJlZnVzYWx9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwic2hyaW5rXCI+e3JvdW5kKHIucGhvbmUud2l0aEV4cGxpY2l0UmVmdXNhbC9yLnRvdGFsKjEwMCl9PC90ZD5cblxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5udW1lcmljfT57ci5waG9uZS53aXRob3V0QXV0b3Jpc2F0aW9uRGV0YWlsc308L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJzaHJpbmtcIj57cm91bmQoci5waG9uZS53aXRob3V0QXV0b3Jpc2F0aW9uRGV0YWlscy9yLnRvdGFsKjEwMCl9PC90ZD5cblxuXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLm51bWVyaWN9PntyLndpdGhEU1B9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwic2hyaW5rXCI+e3JvdW5kKHIud2l0aERTUC9yLnRvdGFsKjEwMCl9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e3IuZXJyb3IgPyAnT3VpJyA6ICdOb24nfTwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgPC90YWJsZT5cblxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZGlzcGF0Y2hSdW5zKHt0eXBlOiAncmVzZXQnfSl9PlZpZGVyIGwnaGlzdG9yaXF1ZTwvYnV0dG9uPlxuICAgICAgICA8Lz4pfVxuXG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICBVbiBwcm9ibMOobWUsIHVuZSBxdWVzdGlvbiA/IENvbnRhY3Rlei1ub3VzIMOgIDxNYWlsZXIgc3ViamVjdD1cIkZsdXggaW5zdHJ1Y3Rpb24gQ05BRlwiPmRhdGEuaW5zZXJ0aW9uQGJldGEuZ291di5mcjwvTWFpbGVyPlxuICAgICAgICA8L3A+XG5cbiAgICAgICAgPGgyIGlkPVwicG91cnF1b2lcIiBjbGFzc05hbWU9e3N0eWxlcy5zdWJ0aXRsZX0+XG4gICAgICAgICAgUG91cnF1b2kgdW4gbGVjdGV1ciBkZSBmaWNoaWVyIENOQUYmbmJzcDs/XG4gICAgICAgIDwvaDI+XG5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+XG4gICAgICAgICAgVG91cyBsZXMgZMOpcGFydGVtZW50cyBuJ29udCBwYXMgbGVzIG91dGlscyBwb3VyIGFuYWx5c2VyIGxlcyBmaWNoaWVycyBlbnZvecOpcyBwYXIgbGEgQ05BRi4gQ2VsYSBwZXV0IHJhbGVudGlyIGV0IGNvbXBsaXF1ZXIgbm9zIMOpY2hhbmdlcy5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5cbiAgICAgICAgICBBdmVjIGNldCBvdXRpbCwgbm91cyBzb3VoYWl0b25zIHBlcm1ldHRyZSBhdXggcGVyc29ubmVzIHF1aSBvbnQgYWNjw6hzIMOgIGNlcyBmaWNoaWVycyBkJ2VuIGV4dHJhaXJlIGRlcyBzdGF0aXN0aXF1ZXMgZ8OpbsOpcmFsZXMgc2FucyBhdm9pciDDoCBtZXR0cmUgbGVzIG1haW5zIGRhbnMgbGUgY2FtYm91aSBlbGxlcy1tw6ptZS5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5cbiAgICAgICAgICBBdWpvdXJkJ2h1aSwgbm91cyBjaGVyY2hvbnMgw6AgY29tcHJlbmRyZSBwb3VycXVvaSBwb3VyIGxhIENOQUYgOTAlIGRlcyBkb3NzaWVycyBwcsOpc2VudHMgZGFucyBsZXMgZmljaGllcnMgcXVvdGlkaWVucyBkJ2luc3RydWN0aW9ucyBjb250aWVubmVudCBkZXMgZW1haWxzIGFsb3JzIHF1ZSBjZSB0YXV4IGVzdCBkZSAzMCUgw6AgNTAlIHBvdXIgY2VydGFpbnMgZMOpcGFydGVtZW50cy5cbiAgICAgICAgPC9wPlxuXG4gICAgICA8L21haW4+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=