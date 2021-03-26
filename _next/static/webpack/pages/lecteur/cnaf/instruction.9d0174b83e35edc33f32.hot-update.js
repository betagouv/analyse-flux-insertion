webpackHotUpdate_N_E("pages/lecteur/cnaf/instruction",{

/***/ "./pages/lecteur/cnaf/instruction/index.js":
/*!*************************************************!*\
  !*** ./pages/lecteur/cnaf/instruction/index.js ***!
  \*************************************************/
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
/* harmony import */ var _components_admin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/admin */ "./components/admin.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/layout */ "./components/layout.js");
/* harmony import */ var _components_mailer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/mailer */ "./components/mailer.js");
/* harmony import */ var _components_pending__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/pending */ "./components/pending.js");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _lib_cnaf__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../lib/cnaf */ "./lib/cnaf.js");
/* harmony import */ var _lib_cnaf__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_lib_cnaf__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _lib_historique__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../lib/historique */ "./lib/historique.js");





var _jsxFileName = "/home/q/code/qblanc/beta.gouv/analyse-flux-insertion/pages/lecteur/cnaf/instruction/index.js",
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
        children: ["Lecteur de fichier", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 29
        }, this), "\xAB Instruction \xBB de la CNAF"]
      }, void 0, true, {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbGVjdGV1ci9jbmFmL2luc3RydWN0aW9uL2luZGV4LmpzIl0sIm5hbWVzIjpbInJlZHVjZXIiLCJyZWR1Y2VyRmFjdG9yeSIsImRldk1vZGUiLCJJbnN0cnVjdGlvbiIsInVzZVN0YXRlIiwiZGV2RmlsZSIsInNldERldkZpbGUiLCJ1c2VSZWR1Y2VyIiwiaW5pdFJlZHVjZXIiLCJydW5zIiwiZGlzcGF0Y2hSdW5zIiwiaXNQZW5kaW5nIiwic2V0SXNQZW5kaW5nIiwiZmlsZVNpemUiLCJzZXRGaWxlU2l6ZSIsInVzZUVmZmVjdCIsImZpbGVIYW5kbGVyIiwiaGFuZGxlTmV3UnVucyIsInVzZUNhbGxiYWNrIiwiZGF0YSIsInR5cGUiLCJpdGVtcyIsInNlbGVjdEhhbmRsZXIiLCJldmVudCIsImkiLCJ0YXJnZXQiLCJmaWxlcyIsImxlbmd0aCIsInZhbHVlIiwiZmlsZSIsInNpemUiLCJzdGFydF90aW1lIiwiRGF0ZSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJwYXJzZXIiLCJET01QYXJzZXIiLCJkb20iLCJwYXJzZUZyb21TdHJpbmciLCJyZXN1bHQiLCJkZXNjIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJmcmVxdWVuY3kiLCJpbm5lckhUTUwiLCJkdCIsInRpbWUiLCJBcnJheSIsIndpdGhFbWFpbCIsImZpbHRlciIsIndpdGhVc2FibGVFbWFpbCIsIm9rIiwid2l0aEZvcmJpZGRlbkVtYWlsVXNhZ2UiLCJ3aXRob3V0RW1haWxVc2FnZSIsIndpdGhQaG9uZSIsIndpdGhVc2FibGVQaG9uZSIsIndpdGhGb3JiaWRkZW5QaG9uZVVzYWdlIiwid2l0aG91dFBob25lVXNhZ2UiLCJ3aXRoRFNQIiwiaXRlbSIsInNlZWQiLCJNYXRoIiwicmFuZG9tIiwidGltZXN0YW1wIiwidG9JU09TdHJpbmciLCJzbGljZSIsImR1cmF0aW9uIiwiZmlsZW5hbWUiLCJuYW1lIiwiZmlsZURhdGV0aW1lIiwiZXJyb3IiLCJhY3RpdmVFbGVtZW50Iiwibm9kZU5hbWUiLCJ0b3RhbCIsImVtYWlsIiwid2l0aEF1dG9yaXNhdGlvbiIsIndpdGhFeHBsaWNpdFJlZnVzYWwiLCJ3aXRob3V0QXV0b3Jpc2F0aW9uRGV0YWlscyIsInBob25lIiwicmVhZEFzVGV4dCIsInJvdW5kIiwic3R5bGVzIiwiY29udGFpbmVyIiwibWFpbiIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzdWJ0aXRsZSIsIm1hcCIsInIiLCJmcmVxdWVuY3lOYW1lcyIsInR5cGVOYW1lcyIsIm51bWVyaWMiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHQyx1RUFBYyxDQUFDLDJCQUFELENBQTlCO0FBQ0EsSUFBTUMsT0FBTyxPQUFiO0FBRWUsU0FBU0MsV0FBVCxHQUF1QjtBQUFBOztBQUFBOztBQUFBLGtCQUNOQyxzREFBUSxDQUFDLElBQUQsQ0FERjtBQUFBLE1BQzdCQyxPQUQ2QjtBQUFBLE1BQ3BCQyxVQURvQjs7QUFBQSxvQkFFUEMsd0RBQVUsQ0FBQ1AsT0FBRCxFQUFVLEVBQVYsRUFBY1EsNERBQWQsQ0FGSDtBQUFBLE1BRTdCQyxJQUY2QjtBQUFBLE1BRXZCQyxZQUZ1Qjs7QUFBQSxtQkFHRk4sc0RBQVEsQ0FBQyxLQUFELENBSE47QUFBQSxNQUc3Qk8sU0FINkI7QUFBQSxNQUdsQkMsWUFIa0I7O0FBQUEsbUJBSUpSLHNEQUFRLENBQUMsQ0FBRCxDQUpKO0FBQUEsTUFJN0JTLFFBSjZCO0FBQUEsTUFJbkJDLFdBSm1COztBQU1wQ0MseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBR1YsT0FBSCxFQUFZO0FBQ1ZXLGlCQUFXLENBQUNYLE9BQUQsQ0FBWDtBQUNEO0FBQ0YsR0FKUSxFQUlOLENBQUNBLE9BQUQsQ0FKTSxDQUFUO0FBTUEsTUFBTVksYUFBYSxHQUFHQyx5REFB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dGlvbi45ZDAxNzRiODNlMzVlZGMzM2YzMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVkdWNlcn0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbmltcG9ydCBBZG1pbiBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL2FkbWluJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL2xheW91dCdcbmltcG9ydCBNYWlsZXIgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9tYWlsZXInXG5pbXBvcnQgUGVuZGluZ01lc3NhZ2UgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9wZW5kaW5nJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi8uLi8uLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuXG5pbXBvcnQgeyBmcmVxdWVuY3lOYW1lcywgdHlwZU5hbWVzIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL2NuYWYnXG5pbXBvcnQgeyBpbml0UmVkdWNlciwgcmVkdWNlckZhY3RvcnkgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvaGlzdG9yaXF1ZSdcblxuY29uc3QgcmVkdWNlciA9IHJlZHVjZXJGYWN0b3J5KCdUZXN0IC0gQ05BRiAtIEluc3RydWN0aW9uJylcbmNvbnN0IGRldk1vZGUgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PSAnZGV2ZWxvcG1lbnQnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluc3RydWN0aW9uKCkge1xuICBjb25zdCBbZGV2RmlsZSwgc2V0RGV2RmlsZV0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbcnVucywgZGlzcGF0Y2hSdW5zXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgW10sIGluaXRSZWR1Y2VyKVxuICBjb25zdCBbaXNQZW5kaW5nLCBzZXRJc1BlbmRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZmlsZVNpemUsIHNldEZpbGVTaXplXSA9IHVzZVN0YXRlKDApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYoZGV2RmlsZSkge1xuICAgICAgZmlsZUhhbmRsZXIoZGV2RmlsZSlcbiAgICB9XG4gIH0sIFtkZXZGaWxlXSlcblxuICBjb25zdCBoYW5kbGVOZXdSdW5zID0gdXNlQ2FsbGJhY2soZGF0YSA9PiB7XG4gICAgZGlzcGF0Y2hSdW5zKHtcbiAgICAgIHR5cGU6ICdyZXNldCcsXG4gICAgICBpdGVtczogZGF0YVxuICAgIH0pXG4gIH0pXG5cbiAgY29uc3Qgc2VsZWN0SGFuZGxlciA9IHVzZUNhbGxiYWNrKChldmVudCkgPT4ge1xuICAgIGZvciAodmFyIGkgPSAwOyBpPGV2ZW50LnRhcmdldC5maWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgZmlsZUhhbmRsZXIoZXZlbnQudGFyZ2V0LmZpbGVzW2ldKVxuICAgIH1cbiAgICBldmVudC50YXJnZXQudmFsdWUgPSAnJ1xuICB9KVxuXG4gIGNvbnN0IGZpbGVIYW5kbGVyID0gKGZpbGUpID0+IHtcbiAgICBpZiAoZGV2TW9kZSAmJiBmaWxlICE9IGRldkZpbGUpIHtcbiAgICAgIHNldERldkZpbGUoZmlsZSlcbiAgICB9XG4gICAgc2V0RmlsZVNpemUoZmlsZS5zaXplKTtcbiAgICBzZXRJc1BlbmRpbmcodHJ1ZSk7XG4gICAgY29uc3Qgc3RhcnRfdGltZSA9IG5ldyBEYXRlKCk7XG5cbiAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgY29uc3QgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpXG4gICAgICBjb25zdCBkb20gPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKGV2ZW50LnRhcmdldC5yZXN1bHQsIFwiYXBwbGljYXRpb24veG1sXCIpXG5cbiAgICAgIGNvbnN0IGRlc2MgPSBkb20uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ0lkZW50aWZpY2F0aW9uRmx1eCcpWzBdXG4gICAgICBjb25zdCBmcmVxdWVuY3kgPSBkZXNjLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdUWVBFRkxVWCcpWzBdLmlubmVySFRNTFxuICAgICAgY29uc3QgdHlwZSA9IGRlc2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ05BVEZMVVgnKVswXS5pbm5lckhUTUxcbiAgICAgIGNvbnN0IGR0ID0gZGVzYy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnRFRDUkVBRkxVWCcpWzBdLmlubmVySFRNTFxuICAgICAgY29uc3QgdGltZSA9IGRlc2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ0hFVUNSRUFGTFVYJylbMF0uaW5uZXJIVE1MXG5cbiAgICAgIGNvbnN0IGl0ZW1zID0gbmV3IEFycmF5KC4uLmRvbS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnSW5mb0RlbWFuZGVSU0EnKSlcbiAgICAgIGNvbnN0IHdpdGhFbWFpbCA9IGl0ZW1zLmZpbHRlcihpID0+IGkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ0FEUkVMRUMnKS5sZW5ndGgpXG4gICAgICBjb25zdCB3aXRoVXNhYmxlRW1haWwgPSBpdGVtcy5maWx0ZXIoaSA9PiB7XG4gICAgICAgIGNvbnN0IG9rID0gaS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnQVVUT1JVVElBRFJFTEVDJylbMF1cbiAgICAgICAgcmV0dXJuIGkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ0FEUkVMRUMnKS5sZW5ndGggJiYgb2sgJiYgb2suaW5uZXJIVE1MID09IFwiQVwiXG4gICAgICB9KVxuICAgICAgY29uc3Qgd2l0aEZvcmJpZGRlbkVtYWlsVXNhZ2UgPSBpdGVtcy5maWx0ZXIoaSA9PiB7XG4gICAgICAgIGNvbnN0IG9rID0gaS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnQVVUT1JVVElBRFJFTEVDJylbMF1cbiAgICAgICAgcmV0dXJuIGkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ0FEUkVMRUMnKS5sZW5ndGggJiYgb2sgJiYgb2suaW5uZXJIVE1MID09IFwiUlwiXG4gICAgICB9KVxuICAgICAgY29uc3Qgd2l0aG91dEVtYWlsVXNhZ2UgPSBpdGVtcy5maWx0ZXIoaSA9PiB7XG4gICAgICAgIGNvbnN0IG9rID0gaS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnQVVUT1JVVElBRFJFTEVDJylbMF1cbiAgICAgICAgcmV0dXJuIGkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ0FEUkVMRUMnKS5sZW5ndGggJiYgb2sgJiYgb2suaW5uZXJIVE1MID09IFwiSVwiXG4gICAgICB9KVxuXG4gICAgICBjb25zdCB3aXRoUGhvbmUgPSBpdGVtcy5maWx0ZXIoaSA9PiBpLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdOVU1URUwnKS5sZW5ndGgpXG4gICAgICBjb25zdCB3aXRoVXNhYmxlUGhvbmUgPSBpdGVtcy5maWx0ZXIoaSA9PiB7XG4gICAgICAgIGNvbnN0IG9rID0gaS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnQVVUT1JVVElURUwnKVswXVxuICAgICAgICByZXR1cm4gaS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnTlVNVEVMJykubGVuZ3RoICYmIG9rICYmIG9rLmlubmVySFRNTCA9PSBcIkFcIlxuICAgICAgfSlcbiAgICAgIGNvbnN0IHdpdGhGb3JiaWRkZW5QaG9uZVVzYWdlID0gaXRlbXMuZmlsdGVyKGkgPT4ge1xuICAgICAgICBjb25zdCBvayA9IGkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ0FVVE9SVVRJVEVMJylbMF1cbiAgICAgICAgcmV0dXJuIGkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ05VTVRFTCcpLmxlbmd0aCAmJiBvayAmJiBvay5pbm5lckhUTUwgPT0gXCJSXCJcbiAgICAgIH0pXG4gICAgICBjb25zdCB3aXRob3V0UGhvbmVVc2FnZSA9IGl0ZW1zLmZpbHRlcihpID0+IHtcbiAgICAgICAgY29uc3Qgb2sgPSBpLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdBVVRPUlVUSVRFTCcpWzBdXG4gICAgICAgIHJldHVybiBpLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdOVU1URUwnKS5sZW5ndGggJiYgb2sgJiYgb2suaW5uZXJIVE1MID09IFwiSVwiXG4gICAgICB9KVxuXG4gICAgICBjb25zdCB3aXRoRFNQID0gaXRlbXMuZmlsdGVyKGkgPT4gaS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnRG9ubmVlc1NvY2lvUHJvZmVzc2lvbm5lbGxlcycpLmxlbmd0aClcblxuICAgICAgc2V0SXNQZW5kaW5nKGZhbHNlKTtcblxuICAgICAgZGlzcGF0Y2hSdW5zKHtcbiAgICAgICAgdHlwZTogJ2FwcGVuZCcsXG4gICAgICAgIGl0ZW06IHtcbiAgICAgICAgICBzZWVkOiBNYXRoLnJhbmRvbSgpLFxuICAgICAgICAgIHRpbWVzdGFtcDogKG5ldyBEYXRlKCkpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwxOSksXG4gICAgICAgICAgZHVyYXRpb246IChuZXcgRGF0ZSgpKSAtIHN0YXJ0X3RpbWUsXG4gICAgICAgICAgZmlsZW5hbWU6IGZpbGUubmFtZSxcbiAgICAgICAgICBmaWxlRGF0ZXRpbWU6IGAke2R0fS0ke3RpbWV9YCxcbiAgICAgICAgICBmcmVxdWVuY3ksXG4gICAgICAgICAgdHlwZSxcbiAgICAgICAgICAvLyBXSVA6IE9LIHN1ciBGaXJlZm94IEtPIHN1ciBDaHJvbWVcbiAgICAgICAgICBlcnJvcjogZG9tLmFjdGl2ZUVsZW1lbnQgJiYgZG9tLmFjdGl2ZUVsZW1lbnQubm9kZU5hbWUgPT0gXCJwYXJzZXJlcnJvclwiLFxuICAgICAgICAgIHRvdGFsOiBpdGVtcy5sZW5ndGgsXG4gICAgICAgICAgZW1haWw6IHtcbiAgICAgICAgICAgIHRvdGFsOiB3aXRoRW1haWwubGVuZ3RoLFxuICAgICAgICAgICAgd2l0aEF1dG9yaXNhdGlvbjogd2l0aFVzYWJsZUVtYWlsLmxlbmd0aCxcbiAgICAgICAgICAgIHdpdGhFeHBsaWNpdFJlZnVzYWw6IHdpdGhGb3JiaWRkZW5FbWFpbFVzYWdlLmxlbmd0aCxcbiAgICAgICAgICAgIHdpdGhvdXRBdXRvcmlzYXRpb25EZXRhaWxzOiB3aXRob3V0RW1haWxVc2FnZS5sZW5ndGgsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBwaG9uZToge1xuICAgICAgICAgICAgdG90YWw6IHdpdGhQaG9uZS5sZW5ndGgsXG4gICAgICAgICAgICB3aXRoQXV0b3Jpc2F0aW9uOiB3aXRoVXNhYmxlRW1haWwubGVuZ3RoLFxuICAgICAgICAgICAgd2l0aEV4cGxpY2l0UmVmdXNhbDogd2l0aEZvcmJpZGRlbkVtYWlsVXNhZ2UubGVuZ3RoLFxuICAgICAgICAgICAgd2l0aG91dEF1dG9yaXNhdGlvbkRldGFpbHM6IHdpdGhvdXRFbWFpbFVzYWdlLmxlbmd0aCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHdpdGhEU1A6IHdpdGhEU1AubGVuZ3RoLFxuICAgICAgICAgIGZpbGVTaXplOiBmaWxlLnNpemUsXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIHJlYWRlci5yZWFkQXNUZXh0KGZpbGUpXG4gIH1cblxuICBjb25zdCByb3VuZCA9ICh2YWx1ZSkgPT4gTWF0aC5yb3VuZCh2YWx1ZSlcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn1cbiAgICAgIGZpbGVIYW5kbGVyPXtmaWxlSGFuZGxlcn0+XG4gICAgICA8QWRtaW4gY2F0ZWdvcnk9XCJJbnN0cnVjdGlvblwiIG9uUnVuUmVmcmVzaD17aGFuZGxlTmV3UnVuc30vPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XG4gICAgICAgICAgTGVjdGV1ciBkZSBmaWNoaWVyPGJyLz7CqyBJbnN0cnVjdGlvbiDCuyBkZSBsYSBDTkFGXG4gICAgICAgIDwvaDE+XG5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgIEdsaXNzZXogZXQgZMOpcG9zZXogbGUgZmljaGllciBDTkFGIMOgIGFuYWx5c2VyIG91IHPDqWxlY3Rpb25uZXogbGUuPGJyLz5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBvbkNoYW5nZT17c2VsZWN0SGFuZGxlcn0gbXVsdGlwbGUvPlxuICAgICAgICA8L3A+XG5cbiAgICAgICAge2lzUGVuZGluZyAmJiA8UGVuZGluZ01lc3NhZ2UgZmlsZVNpemU9e2ZpbGVTaXplfS8+fVxuXG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICBMZXMgb3DDqXJhdGlvbnMgc29udCB0b3V0ZXMgcsOpYWxpc8OpZXMgc3VyIHZvdHJlIG9yZGluYXRldXIuPGJyLz5cbiAgICAgICAgICBBdWN1bmUgZG9ubsOpZSBwZXJzb25uZWxsZSBuJ2VzdCB0cmFuc2bDqXLDqWUuXG4gICAgICAgIDwvcD5cblxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgICAgPGEgaHJlZj1cIiNwb3VycXVvaVwiPlBvdXJxdW9pIHVuIHRlbCBsZWN0ZXVyJm5ic3A7PzwvYT5cbiAgICAgICAgPC9wPlxuXG4gICAgICAgIHsgcnVucyAmJiBydW5zLmxlbmd0aCA+IDAgJiYgKDw+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnN1YnRpdGxlfT5cbiAgICAgICAgICAgIEhpc3RvcmlxdWVcbiAgICAgICAgICA8L2gyPlxuXG4gICAgICAgICAgPHRhYmxlPlxuICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+RGF0ZTwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+RmljaGllcjwvdGg+XG4gICAgICAgICAgICAgICAgeyBkZXZNb2RlICYmIDx0aCByb3dTcGFuPVwiMlwiPlRhaWxsZTwvdGg+fVxuICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPkRhdGUgZHUgZmljaGllcjwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+RnLDqXF1ZW5jZTwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+TmF0dXJlPC90aD5cbiAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5Eb3NzaWVyczwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIGNvbFNwYW49XCI4XCI+YXZlYyBlbWFpbDwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIGNvbFNwYW49XCI4XCI+YXZlYyB0w6lsw6lwaG9uZTwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIGNvbFNwYW49XCIyXCIgcm93U3Bhbj1cIjJcIj5EU1AgKCUpPC90aD5cbiAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5FcnJldXI8L3RoPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRoIGNvbFNwYW49XCIyXCI+IyAoJSk8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBjb2xTcGFuPVwiMlwiPmV0IGF1dG9yaXNhdGlvbiAoJSk8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBjb2xTcGFuPVwiMlwiPnJlZnVzIGV4cGxpY2l0ICglKTwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIGNvbFNwYW49XCIyXCI+PGFiYnIgdGl0bGU9XCJCYWxpc2UgQVVUT1JVVElBRFJFTEVDIHByw6lzZW50ZSBldCDDqWdhbGUgw6AgJ0knXCI+aW5jb25udSBleHBsaWNpdCAoSSkgKCUpPC9hYmJyPjwvdGg+XG5cbiAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj1cIjJcIj4jICglKTwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIGNvbFNwYW49XCIyXCI+ZXQgYXV0b3Jpc2F0aW9uICglKTwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIGNvbFNwYW49XCIyXCI+cmVmdXMgZXhwbGljaXQgKCUpPC90aD5cbiAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj1cIjJcIj48YWJiciB0aXRsZT1cIkJhbGlzZSBBVVRPUlVUSVRFTCBwcsOpc2VudGUgZXQgw6lnYWxlIMOgICdJJ1wiPmluY29ubnUgZXhwbGljaXQgKEkpICglKTwvYWJicj48L3RoPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAge3J1bnMubWFwKHIgPT4gKDx0ciBrZXk9e2Ake3IudGltZXN0YW1wfS0ke3IuZmlsZW5hbWV9LSR7ci5zZWVkfWAgfT5cbiAgICAgICAgICAgICAgICA8dGQ+e3IudGltZXN0YW1wfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPntyLmZpbGVuYW1lfTwvdGQ+XG4gICAgICAgICAgICAgICAgeyBkZXZNb2RlICYmIDx0ZD57ci5maWxlU2l6ZX08L3RkPn1cbiAgICAgICAgICAgICAgICA8dGQ+e3IuZmlsZURhdGV0aW1lfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPntgJHtyLmZyZXF1ZW5jeX0gKCR7ZnJlcXVlbmN5TmFtZXNbci5mcmVxdWVuY3ldIHx8ICc/J30pYH08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57YCR7ci50eXBlfSAoJHt0eXBlTmFtZXNbci50eXBlXSB8fCAnPyd9KWB9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMubnVtZXJpY30+e3IudG90YWx9PC90ZD5cblxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5udW1lcmljfT57ci5lbWFpbC50b3RhbH08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJzaHJpbmtcIj57cm91bmQoci5lbWFpbC50b3RhbC9yLnRvdGFsKjEwMCl9PC90ZD5cblxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5udW1lcmljfT57ci5lbWFpbC53aXRoQXV0b3Jpc2F0aW9ufTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInNocmlua1wiPntyb3VuZChyLmVtYWlsLndpdGhBdXRvcmlzYXRpb24vci50b3RhbCoxMDApfTwvdGQ+XG5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMubnVtZXJpY30+e3IuZW1haWwud2l0aEV4cGxpY2l0UmVmdXNhbH08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJzaHJpbmtcIj57cm91bmQoci5lbWFpbC53aXRoRXhwbGljaXRSZWZ1c2FsL3IudG90YWwqMTAwKX08L3RkPlxuXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLm51bWVyaWN9PntyLmVtYWlsLndpdGhvdXRBdXRvcmlzYXRpb25EZXRhaWxzfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInNocmlua1wiPntyb3VuZChyLmVtYWlsLndpdGhvdXRBdXRvcmlzYXRpb25EZXRhaWxzL3IudG90YWwqMTAwKX08L3RkPlxuXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLm51bWVyaWN9PntyLnBob25lLnRvdGFsfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInNocmlua1wiPntyb3VuZChyLnBob25lLnRvdGFsL3IudG90YWwqMTAwKX08L3RkPlxuXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLm51bWVyaWN9PntyLnBob25lLndpdGhBdXRvcmlzYXRpb259PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwic2hyaW5rXCI+e3JvdW5kKHIucGhvbmUud2l0aEF1dG9yaXNhdGlvbi9yLnRvdGFsKjEwMCl9PC90ZD5cblxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5udW1lcmljfT57ci5waG9uZS53aXRoRXhwbGljaXRSZWZ1c2FsfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInNocmlua1wiPntyb3VuZChyLnBob25lLndpdGhFeHBsaWNpdFJlZnVzYWwvci50b3RhbCoxMDApfTwvdGQ+XG5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMubnVtZXJpY30+e3IucGhvbmUud2l0aG91dEF1dG9yaXNhdGlvbkRldGFpbHN9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwic2hyaW5rXCI+e3JvdW5kKHIucGhvbmUud2l0aG91dEF1dG9yaXNhdGlvbkRldGFpbHMvci50b3RhbCoxMDApfTwvdGQ+XG5cblxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5udW1lcmljfT57ci53aXRoRFNQfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInNocmlua1wiPntyb3VuZChyLndpdGhEU1Avci50b3RhbCoxMDApfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPntyLmVycm9yID8gJ091aScgOiAnTm9uJ308L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgIDwvdGFibGU+XG5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoUnVucyh7dHlwZTogJ3Jlc2V0J30pfT5WaWRlciBsJ2hpc3RvcmlxdWU8L2J1dHRvbj5cbiAgICAgICAgPC8+KX1cblxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgICAgVW4gcHJvYmzDqG1lLCB1bmUgcXVlc3Rpb24gPyBDb250YWN0ZXotbm91cyDDoCA8TWFpbGVyIHN1YmplY3Q9XCJGbHV4IGluc3RydWN0aW9uIENOQUZcIj5kYXRhLmluc2VydGlvbkBiZXRhLmdvdXYuZnI8L01haWxlcj5cbiAgICAgICAgPC9wPlxuXG4gICAgICAgIDxoMiBpZD1cInBvdXJxdW9pXCIgY2xhc3NOYW1lPXtzdHlsZXMuc3VidGl0bGV9PlxuICAgICAgICAgIFBvdXJxdW9pIHVuIGxlY3RldXIgZGUgZmljaGllciBDTkFGJm5ic3A7P1xuICAgICAgICA8L2gyPlxuXG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRleHR9PlxuICAgICAgICAgIFRvdXMgbGVzIGTDqXBhcnRlbWVudHMgbidvbnQgcGFzIGxlcyBvdXRpbHMgcG91ciBhbmFseXNlciBsZXMgZmljaGllcnMgZW52b3nDqXMgcGFyIGxhIENOQUYuIENlbGEgcGV1dCByYWxlbnRpciBldCBjb21wbGlxdWVyIG5vcyDDqWNoYW5nZXMuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+XG4gICAgICAgICAgQXZlYyBjZXQgb3V0aWwsIG5vdXMgc291aGFpdG9ucyBwZXJtZXR0cmUgYXV4IHBlcnNvbm5lcyBxdWkgb250IGFjY8OocyDDoCBjZXMgZmljaGllcnMgZCdlbiBleHRyYWlyZSBkZXMgc3RhdGlzdGlxdWVzIGfDqW7DqXJhbGVzIHNhbnMgYXZvaXIgw6AgbWV0dHJlIGxlcyBtYWlucyBkYW5zIGxlIGNhbWJvdWkgZWxsZXMtbcOqbWUuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+XG4gICAgICAgICAgQXVqb3VyZCdodWksIG5vdXMgY2hlcmNob25zIMOgIGNvbXByZW5kcmUgcG91cnF1b2kgcG91ciBsYSBDTkFGIDkwJSBkZXMgZG9zc2llcnMgcHLDqXNlbnRzIGRhbnMgbGVzIGZpY2hpZXJzIHF1b3RpZGllbnMgZCdpbnN0cnVjdGlvbnMgY29udGllbm5lbnQgZGVzIGVtYWlscyBhbG9ycyBxdWUgY2UgdGF1eCBlc3QgZGUgMzAlIMOgIDUwJSBwb3VyIGNlcnRhaW5zIGTDqXBhcnRlbWVudHMuXG4gICAgICAgIDwvcD5cblxuICAgICAgPC9tYWluPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9