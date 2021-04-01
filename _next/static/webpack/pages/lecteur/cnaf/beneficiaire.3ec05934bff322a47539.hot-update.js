webpackHotUpdate_N_E("pages/lecteur/cnaf/beneficiaire",{

/***/ "./pages/lecteur/cnaf/beneficiaire/index.js":
/*!**************************************************!*\
  !*** ./pages/lecteur/cnaf/beneficiaire/index.js ***!
  \**************************************************/
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
/* harmony import */ var _components_admin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/admin */ "./components/admin.js");
/* harmony import */ var _components_chart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/chart */ "./components/chart.js");
/* harmony import */ var _components_file__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/file */ "./components/file.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/footer */ "./components/footer.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/layout */ "./components/layout.js");
/* harmony import */ var _lib_cnaf__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../lib/cnaf */ "./lib/cnaf.js");
/* harmony import */ var _lib_historique__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../lib/historique */ "./lib/historique.js");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11__);





var _jsxFileName = "/home/q/code/qblanc/beta.gouv/analyse-flux-insertion/pages/lecteur/cnaf/beneficiaire/index.js",
    _s = $RefreshSig$();










var reducer = Object(_lib_historique__WEBPACK_IMPORTED_MODULE_10__["reducerFactory"])('Test - CNAF - Bénéficiaire');
var devMode = true;
function Beneficiaire() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      devFile = _useState[0],
      setDevFile = _useState[1];

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_3__["useReducer"])(reducer, [], _lib_historique__WEBPACK_IMPORTED_MODULE_10__["initReducer"]),
      runs = _useReducer[0],
      dispatchRuns = _useReducer[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isPending = _useState2[0],
      setIsPending = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      fileSize = _useState3[0],
      setFileSize = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      keysDroits = _useState4[0],
      setKeysDroits = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      keysDevoirs = _useState5[0],
      setKeysDevoirs = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    index: undefined,
    data: [],
    from: "2016-03-01",
    to: "2021-03-01"
  }),
      dateData = _useState6[0],
      setDateData = _useState6[1];

  var handleNewRuns = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (data) {
    dispatchRuns({
      type: 'reset',
      folders: data
    });
  });
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (devFile) {
      fileHandler(devFile);
    }
  }, [devFile]);
  var handleDateHistogram = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (event) {
    return showDateHistogram(parseInt(event.target.dataset.index));
  });
  var showDateHistogram = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (index) {
    var source = runs[index];
    var dates = Object.keys(source.dates);
    var minDate = null;
    var maxDate = null;
    var data = dates.map(function (d) {
      var date = new Date(d);

      if (!minDate) {
        minDate = date;
        maxDate = date;
      } else if (date < minDate) {
        minDate = date;
      } else if (maxDate < date) {
        maxDate = date;
      }

      return {
        day: date.toISOString().slice(0, 10),
        value: source.dates[d]
      };
    });
    var yearCount = maxDate.getYear() - minDate.getYear() + 1;
    setDateData({
      index: index,
      data: data,
      from: minDate.toISOString().slice(0, 10),
      to: maxDate.toISOString().slice(0, 10),
      yearCount: yearCount
    });
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

      var processField = function processField(accum, value) {
        if (value[0]) {
          accum[value[0].innerHTML] = (accum[value[0].innerHTML] || 0) + 1;
          accum["Total"] = (accum["Total"] || 0) + 1;
        }

        return accum;
      };

      var folders = Object(_babel_runtime_helpers_esm_construct__WEBPACK_IMPORTED_MODULE_1__["default"])(Array, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(dom.getElementsByTagName('InfosFoyerRSA')));

      var people = Object(_babel_runtime_helpers_esm_construct__WEBPACK_IMPORTED_MODULE_1__["default"])(Array, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(dom.getElementsByTagName('Personne')));

      var dates = folders.map(function (i) {
        return i.getElementsByTagName('DTDEMRSA')[0].innerHTML;
      }).reduce(function (accum, value) {
        accum[value] = (accum[value] || 0) + 1;
        return accum;
      }, {});
      var droits = folders.map(function (i) {
        return i.getElementsByTagName('ETATDOSRSA');
      }).reduce(processField, {});
      var newKeysDroits = keysDroits.concat(Object.keys(droits));
      setKeysDroits(Array.from(new Set(newKeysDroits)).sort());
      var devoirs = people.map(function (i) {
        return i.getElementsByTagName('TOPPERSDRODEVORSA');
      }).reduce(processField, {});
      var newKeysDevoirs = keysDevoirs.concat(Object.keys(devoirs));
      setKeysDevoirs(Array.from(new Set(newKeysDevoirs)).sort());
      var foldersDroitsOuverts = folders.filter(function (i) {
        return i.getElementsByTagName('ETATDOSRSA')[0].innerHTML == "2";
      }).map(function (i) {
        var items = i.getElementsByTagName('Personne');
        return Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(items);
      }).flat();
      var droitsEtDevoirs = foldersDroitsOuverts.map(function (i) {
        return i.getElementsByTagName('TOPPERSDRODEVORSA');
      }).reduce(processField, {});
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
          total: folders.length,
          fileSize: file.size,
          people: people.length,
          dates: dates,
          devoirs: devoirs,
          droits: droits,
          droitsEtDevoirs: droitsEtDevoirs
        }
      });
    };

    reader.readAsText(file);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.container,
    fileHandler: fileHandler,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_admin__WEBPACK_IMPORTED_MODULE_4__["default"], {
      category: "B\xE9n\xE9ficiaire",
      onRunRefresh: handleNewRuns
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.main,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.title,
        children: ["Lecteur de fichier", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 29
        }, this), "\xAB B\xE9n\xE9ficiaire \xBB de la CNAF"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_file__WEBPACK_IMPORTED_MODULE_6__["default"], {
        fileHandler: fileHandler,
        isPending: isPending,
        fileSize: fileSize
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 9
      }, this), runs && runs.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.subtitle,
          children: "Statistiques droits & devoirs"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.margin_side,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 183,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Dossiers (Foyers)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 184,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Personnes"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 185,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                colSpan: keysDroits.length,
                children: "Valeurs balises ETATDOSRSA"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 186,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                colSpan: keysDevoirs.length,
                children: "Valeurs balises TOPPERSDRODEVORSA"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 187,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Personnes soumises droits et devoirs dans foyer droit ouvert et versable"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 188,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 182,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              children: [keysDroits.map(function (k) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                  colSpan: "1",
                  children: k
                }, k, false, {
                  fileName: _jsxFileName,
                  lineNumber: 191,
                  columnNumber: 38
                }, _this);
              }), keysDevoirs.map(function (k) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                  colSpan: "1",
                  children: k
                }, k, false, {
                  fileName: _jsxFileName,
                  lineNumber: 192,
                  columnNumber: 39
                }, _this);
              })]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 190,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 181,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
            children: [runs.map(function (r, i) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                style: i == dateData.index ? {
                  backgroundColor: 'lightgrey'
                } : {},
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: runs.length - i
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 197,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.center,
                  children: r.total
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 198,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.center,
                  children: r.people
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 199,
                  columnNumber: 17
                }, _this), keysDroits.map(function (k) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.center,
                    children: r.droits[k] || 0
                  }, k, false, {
                    fileName: _jsxFileName,
                    lineNumber: 200,
                    columnNumber: 38
                  }, _this);
                }), keysDevoirs.map(function (k) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.center,
                    children: r.devoirs[k] || 0
                  }, k, false, {
                    fileName: _jsxFileName,
                    lineNumber: 201,
                    columnNumber: 39
                  }, _this);
                }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.center,
                  children: r.droitsEtDevoirs[1] || 0
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 202,
                  columnNumber: 17
                }, _this)]
              }, "".concat(r.timestamp, "-").concat(r.filename, "-").concat(r.seed, "-0"), true, {
                fileName: _jsxFileName,
                lineNumber: 196,
                columnNumber: 36
              }, _this);
            }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 206,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 195,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.legende,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.legende_box,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.legende_title,
              children: "L\xE9gende\xA0:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 214,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.bold,
              children: "Valeur balise ETATDOSRSA"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 215,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: ["0=Nouvelle demande en attente de d\xE9cision CG pour ouverture du droit", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 216,
                columnNumber: 86
              }, this), "1=Droit refus\xE9", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 217,
                columnNumber: 29
              }, this), "2=Droit ouvert et versable", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 218,
                columnNumber: 41
              }, this), "3=Droit ouvert et suspendu (le montant du droit est calculable, mais l'existence du droit est remis en cause)", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 219,
                columnNumber: 124
              }, this), "4=Droit ouvert mais versement suspendu (le montant du droit n'est pas calculable)", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 220,
                columnNumber: 96
              }, this), "5=Droit clos", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 221,
                columnNumber: 27
              }, this), "6=Droit clos sur mois ant\xE9rieur ayant eu un contr\xF4le dans le mois de r\xE9f\xE9rence pour une p\xE9riode ant\xE9rieure."]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 216,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 213,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.legende_box,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.bold,
              children: "Valeur balise TOPPERSDRODEVORSA"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 225,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: ["0=Personne pas soumise \xE0 droits et devoirs", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 226,
                columnNumber: 60
              }, this), "1=Personne soumise \xE0 droits et devoirs"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 226,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "\xA0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 228,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.bold,
              children: "Personnes soumises droits et devoirs dans foyer droit ouvert et versable"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 229,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "Nombre de personnes dont la balise TOPPERSDRODEVORSA=1 pr\xE9sents dans des foyers dont la balise ETATDOSRSA=2"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 230,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 224,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 212,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.subtitle,
          children: "Historique"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 234,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.margin_side,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 241,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Fichier"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 242,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Date"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 243,
                columnNumber: 17
              }, this), devMode && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Taille"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 244,
                columnNumber: 30
              }, this), devMode && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: ["Dur\xE9e", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 245,
                  columnNumber: 51
                }, this), "(en s)"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 245,
                columnNumber: 30
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Date du fichier"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 246,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Fr\xE9quence"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 247,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Nature"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 248,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Dossiers"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 249,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "D\xE9tails"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 250,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Erreur"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 251,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 240,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 253,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 239,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
            children: runs.map(function (r, i) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                style: i == dateData.index ? {
                  backgroundColor: 'lightgrey'
                } : {},
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: runs.length - i
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 258,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: r.filename
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 259,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: r.timestamp
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 260,
                  columnNumber: 17
                }, _this), devMode && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: r.fileSize
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 261,
                  columnNumber: 30
                }, _this), devMode && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: !isNaN(r.duration) ? r.duration / 1000 : "#N/A"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 262,
                  columnNumber: 30
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: r.fileDatetime
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 263,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: "".concat(r.frequency, " (").concat(_lib_cnaf__WEBPACK_IMPORTED_MODULE_9__["frequencyNames"][r.frequency] || '?', ")")
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 264,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: "".concat(r.type, " (").concat(_lib_cnaf__WEBPACK_IMPORTED_MODULE_9__["typeNames"][r.type] || '?', ")")
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 265,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.numeric,
                  children: r.total
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 266,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: "shrink",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                    onClick: handleDateHistogram,
                    "data-index": i,
                    children: "Afficher par date"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 267,
                    columnNumber: 40
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 267,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: r.error ? 'Oui' : 'Non'
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 268,
                  columnNumber: 17
                }, _this)]
              }, "".concat(r.timestamp, "-").concat(r.filename, "-").concat(r.seed), true, {
                fileName: _jsxFileName,
                lineNumber: 257,
                columnNumber: 36
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 256,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 238,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: function onClick() {
            return dispatchRuns({
              type: 'reset'
            });
          },
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.margin_bottom,
          children: "Vider l'historique"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 274,
          columnNumber: 11
        }, this)]
      }, void 0, true), runs.length != 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.text,
        children: "Vous pouvez acc\xE9der \xE0 une repr\xE9sentation graphique de la r\xE9partition dans les temps des demandes connues dans les fichiers analys\xE9s. Pour cela il faut cliquer sur le bouton \xAB Afficher par date \xBB."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 277,
        columnNumber: 31
      }, this), dateData.index != undefined && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.subtitle,
          children: "Nombre de dossiers associ\xE9s \xE0 des demandes r\xE9alis\xE9s \xE0 chaque date"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 283,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            height: 250 * dateData.yearCount + "px",
            width: "100%"
          },
          children: Object(_components_chart__WEBPACK_IMPORTED_MODULE_5__["default"])(dateData)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 286,
          columnNumber: 13
        }, this)]
      }, void 0, true), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
        subject: "Flux b\xE9n\xE9ficiaire CNAF",
        pourquoi: "Pourquoi un lecteur de fichier CNAF\xA0?",
        text: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.text,
            children: "Tous les d\xE9partements n'ont pas les outils pour analyser les fichiers envoy\xE9s par la CNAF. Cela peut ralentir et compliquer nos \xE9changes."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 296,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.text,
            children: "Avec cet outil, nous souhaitons permettre aux personnes qui ont acc\xE8s \xE0 ces fichiers d'en extraire des statistiques g\xE9n\xE9rales sans avoir \xE0 mettre les mains dans le camboui elles-m\xEAme."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 297,
            columnNumber: 13
          }, this)]
        }, void 0, true)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 292,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 166,
    columnNumber: 5
  }, this);
}

_s(Beneficiaire, "vQ4OdtZlQHcu1Jno5YCzRdRvJ20=");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbGVjdGV1ci9jbmFmL2JlbmVmaWNpYWlyZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJyZWR1Y2VyIiwicmVkdWNlckZhY3RvcnkiLCJkZXZNb2RlIiwiQmVuZWZpY2lhaXJlIiwidXNlU3RhdGUiLCJkZXZGaWxlIiwic2V0RGV2RmlsZSIsInVzZVJlZHVjZXIiLCJpbml0UmVkdWNlciIsInJ1bnMiLCJkaXNwYXRjaFJ1bnMiLCJpc1BlbmRpbmciLCJzZXRJc1BlbmRpbmciLCJmaWxlU2l6ZSIsInNldEZpbGVTaXplIiwia2V5c0Ryb2l0cyIsInNldEtleXNEcm9pdHMiLCJrZXlzRGV2b2lycyIsInNldEtleXNEZXZvaXJzIiwiaW5kZXgiLCJ1bmRlZmluZWQiLCJkYXRhIiwiZnJvbSIsInRvIiwiZGF0ZURhdGEiLCJzZXREYXRlRGF0YSIsImhhbmRsZU5ld1J1bnMiLCJ1c2VDYWxsYmFjayIsInR5cGUiLCJmb2xkZXJzIiwidXNlRWZmZWN0IiwiZmlsZUhhbmRsZXIiLCJoYW5kbGVEYXRlSGlzdG9ncmFtIiwiZXZlbnQiLCJzaG93RGF0ZUhpc3RvZ3JhbSIsInBhcnNlSW50IiwidGFyZ2V0IiwiZGF0YXNldCIsInNvdXJjZSIsImRhdGVzIiwiT2JqZWN0Iiwia2V5cyIsIm1pbkRhdGUiLCJtYXhEYXRlIiwibWFwIiwiZCIsImRhdGUiLCJEYXRlIiwiZGF5IiwidG9JU09TdHJpbmciLCJzbGljZSIsInZhbHVlIiwieWVhckNvdW50IiwiZ2V0WWVhciIsImZpbGUiLCJzaXplIiwic3RhcnRfdGltZSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJwYXJzZXIiLCJET01QYXJzZXIiLCJkb20iLCJwYXJzZUZyb21TdHJpbmciLCJyZXN1bHQiLCJkZXNjIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJmcmVxdWVuY3kiLCJpbm5lckhUTUwiLCJkdCIsInRpbWUiLCJwcm9jZXNzRmllbGQiLCJhY2N1bSIsIkFycmF5IiwicGVvcGxlIiwiaSIsInJlZHVjZSIsImRyb2l0cyIsIm5ld0tleXNEcm9pdHMiLCJjb25jYXQiLCJTZXQiLCJzb3J0IiwiZGV2b2lycyIsIm5ld0tleXNEZXZvaXJzIiwiZm9sZGVyc0Ryb2l0c091dmVydHMiLCJmaWx0ZXIiLCJpdGVtcyIsImZsYXQiLCJkcm9pdHNFdERldm9pcnMiLCJpdGVtIiwic2VlZCIsIk1hdGgiLCJyYW5kb20iLCJ0aW1lc3RhbXAiLCJkdXJhdGlvbiIsImZpbGVuYW1lIiwibmFtZSIsImZpbGVEYXRldGltZSIsImVycm9yIiwiYWN0aXZlRWxlbWVudCIsIm5vZGVOYW1lIiwidG90YWwiLCJsZW5ndGgiLCJyZWFkQXNUZXh0Iiwic3R5bGVzIiwiY29udGFpbmVyIiwibWFpbiIsInRpdGxlIiwic3VidGl0bGUiLCJtYXJnaW5fc2lkZSIsImsiLCJyIiwiYmFja2dyb3VuZENvbG9yIiwiY2VudGVyIiwibGVnZW5kZSIsImxlZ2VuZGVfYm94IiwibGVnZW5kZV90aXRsZSIsImJvbGQiLCJpc05hTiIsImZyZXF1ZW5jeU5hbWVzIiwidHlwZU5hbWVzIiwibnVtZXJpYyIsIm1hcmdpbl9ib3R0b20iLCJ0ZXh0IiwiaGVpZ2h0Iiwid2lkdGgiLCJSZXNwb25zaXZlQ2FsZW5kYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUEsSUFBTUEsT0FBTyxHQUFHQyx1RUFBYyxDQUFDLDRCQUFELENBQTlCO0FBQ0EsSUFBTUMsT0FBTyxPQUFiO0FBRWUsU0FBU0MsWUFBVCxHQUF3QjtBQUFBOztBQUFBOztBQUFBLGtCQUNQQyxzREFBUSxDQUFDLElBQUQsQ0FERDtBQUFBLE1BQzlCQyxPQUQ4QjtBQUFBLE1BQ3JCQyxVQURxQjs7QUFBQSxvQkFFUkMsd0RBQVUsQ0FBQ1AsT0FBRCxFQUFVLEVBQVYsRUFBY1EsNERBQWQsQ0FGRjtBQUFBLE1BRTlCQyxJQUY4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QUFrQkMsU0FBbEIsaUJBQ0M7QUFBQSxnQ0FDRTtBQUFJLG1CQUFTLEVBQUVvRiwrREFBTSxDQUFDSSxRQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUlFO0FBQUssZUFBSyxFQUFFO0FBQUNnQixrQkFBTSxFQUFHLE1BQUlwRyxRQUFRLENBQUM0QixTQUFkLEdBQTJCLElBQXBDO0FBQTBDeUUsaUJBQUssRUFBRTtBQUFqRCxXQUFaO0FBQUEsb0JBQ0dDLGlFQUFrQixDQUFDdEcsUUFBRDtBQURyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpGO0FBQUEsc0JBbEhKLGVBNEhFLHFFQUFDLDBEQUFEO0FBQ0UsZUFBTyxFQUFDLDhCQURWO0FBRUUsZ0JBQVEsRUFBQywwQ0FGWDtBQUdFLFlBQUksZUFBRTtBQUFBLGtDQUNKO0FBQUcscUJBQVMsRUFBRWdGLCtEQUFNLENBQUNtQixJQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESSxlQUVKO0FBQUcscUJBQVMsRUFBRW5CLCtEQUFNLENBQUNtQixJQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSTtBQUFBO0FBSFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTVIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTBJRDs7R0EvUnVCeEgsWTs7S0FBQUEsWSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sZWN0ZXVyL2NuYWYvYmVuZWZpY2lhaXJlLjNlYzA1OTM0YmZmMzIyYTQ3NTM5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEFkbWluIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvYWRtaW4nXG5pbXBvcnQgUmVzcG9uc2l2ZUNhbGVuZGFyIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvY2hhcnQnXG5pbXBvcnQgRmlsZUhhbmRsZXIgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9maWxlJ1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL2Zvb3RlcidcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9sYXlvdXQnXG5pbXBvcnQgeyBmcmVxdWVuY3lOYW1lcywgdHlwZU5hbWVzIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL2NuYWYnXG5pbXBvcnQgeyBpbml0UmVkdWNlciwgcmVkdWNlckZhY3RvcnkgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvaGlzdG9yaXF1ZSdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vLi4vLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcblxuXG5cbmNvbnN0IHJlZHVjZXIgPSByZWR1Y2VyRmFjdG9yeSgnVGVzdCAtIENOQUYgLSBCw6luw6lmaWNpYWlyZScpXG5jb25zdCBkZXZNb2RlID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT0gJ2RldmVsb3BtZW50J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCZW5lZmljaWFpcmUoKSB7XG4gIGNvbnN0IFtkZXZGaWxlLCBzZXREZXZGaWxlXSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFtydW5zLCBkaXNwYXRjaFJ1bnNdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBbXSwgaW5pdFJlZHVjZXIpXG4gIGNvbnN0IFtpc1BlbmRpbmcsIHNldElzUGVuZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtmaWxlU2l6ZSwgc2V0RmlsZVNpemVdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtrZXlzRHJvaXRzLCBzZXRLZXlzRHJvaXRzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2tleXNEZXZvaXJzLCBzZXRLZXlzRGV2b2lyc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtkYXRlRGF0YSwgc2V0RGF0ZURhdGFdID0gdXNlU3RhdGUoe1xuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgZGF0YTogW10sXG4gICAgZnJvbTogXCIyMDE2LTAzLTAxXCIsXG4gICAgdG86IFwiMjAyMS0wMy0wMVwiLFxuICB9KVxuXG4gIGNvbnN0IGhhbmRsZU5ld1J1bnMgPSB1c2VDYWxsYmFjayhkYXRhID0+IHtcbiAgICBkaXNwYXRjaFJ1bnMoe1xuICAgICAgdHlwZTogJ3Jlc2V0JyxcbiAgICAgIGZvbGRlcnM6IGRhdGFcbiAgICB9KVxuICB9KVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYoZGV2RmlsZSkge1xuICAgICAgZmlsZUhhbmRsZXIoZGV2RmlsZSlcbiAgICB9XG4gIH0sIFtkZXZGaWxlXSlcblxuICBjb25zdCBoYW5kbGVEYXRlSGlzdG9ncmFtID0gdXNlQ2FsbGJhY2soZXZlbnQgPT4gc2hvd0RhdGVIaXN0b2dyYW0ocGFyc2VJbnQoZXZlbnQudGFyZ2V0LmRhdGFzZXQuaW5kZXgpKSlcbiAgY29uc3Qgc2hvd0RhdGVIaXN0b2dyYW0gPSB1c2VDYWxsYmFjayhpbmRleCA9PiB7XG4gICAgY29uc3Qgc291cmNlID0gcnVuc1tpbmRleF1cblxuICAgIGNvbnN0IGRhdGVzID0gT2JqZWN0LmtleXMoc291cmNlLmRhdGVzKVxuICAgIGxldCBtaW5EYXRlID0gbnVsbFxuICAgIGxldCBtYXhEYXRlID0gbnVsbFxuXG4gICAgY29uc3QgZGF0YSA9IGRhdGVzLm1hcChkID0+IHtcbiAgICAgIGxldCBkYXRlID0gbmV3IERhdGUoZClcbiAgICAgIGlmICghbWluRGF0ZSkge1xuICAgICAgICBtaW5EYXRlID0gZGF0ZVxuICAgICAgICBtYXhEYXRlID0gZGF0ZVxuICAgICAgfSBlbHNlIGlmIChkYXRlIDwgbWluRGF0ZSkge1xuICAgICAgICBtaW5EYXRlID0gZGF0ZVxuICAgICAgfSBlbHNlIGlmIChtYXhEYXRlIDwgZGF0ZSkge1xuICAgICAgICBtYXhEYXRlID0gZGF0ZVxuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGF5OiBkYXRlLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApLFxuICAgICAgICB2YWx1ZTogc291cmNlLmRhdGVzW2RdXG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IHllYXJDb3VudCA9IG1heERhdGUuZ2V0WWVhcigpIC0gbWluRGF0ZS5nZXRZZWFyKCkgKyAxXG4gICAgc2V0RGF0ZURhdGEoe1xuICAgICAgaW5kZXgsXG4gICAgICBkYXRhLFxuICAgICAgZnJvbTogbWluRGF0ZS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKSxcbiAgICAgIHRvOiBtYXhEYXRlLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApLFxuICAgICAgeWVhckNvdW50LFxuICAgIH0pXG4gIH0pXG5cbiAgY29uc3QgZmlsZUhhbmRsZXIgPSAoZmlsZSkgPT4ge1xuICAgIGlmIChkZXZNb2RlICYmIGZpbGUgIT0gZGV2RmlsZSkge1xuICAgICAgc2V0RGV2RmlsZShmaWxlKVxuICAgIH1cbiAgICBzZXRGaWxlU2l6ZShmaWxlLnNpemUpO1xuICAgIHNldElzUGVuZGluZyh0cnVlKTtcbiAgICBjb25zdCBzdGFydF90aW1lID0gbmV3IERhdGUoKTtcblxuICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXG4gICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBjb25zdCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKClcbiAgICAgIGNvbnN0IGRvbSA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoZXZlbnQudGFyZ2V0LnJlc3VsdCwgXCJhcHBsaWNhdGlvbi94bWxcIilcblxuICAgICAgY29uc3QgZGVzYyA9IGRvbS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnSWRlbnRpZmljYXRpb25GbHV4JylbMF1cbiAgICAgIGNvbnN0IGZyZXF1ZW5jeSA9IGRlc2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ1RZUEVGTFVYJylbMF0uaW5uZXJIVE1MXG4gICAgICBjb25zdCB0eXBlID0gZGVzYy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnTkFURkxVWCcpWzBdLmlubmVySFRNTFxuICAgICAgY29uc3QgZHQgPSBkZXNjLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdEVENSRUFGTFVYJylbMF0uaW5uZXJIVE1MXG4gICAgICBjb25zdCB0aW1lID0gZGVzYy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnSEVVQ1JFQUZMVVgnKVswXS5pbm5lckhUTUxcblxuICAgICAgY29uc3QgcHJvY2Vzc0ZpZWxkID0gKGFjY3VtLCB2YWx1ZSkgPT4ge1xuICAgICAgICAgIGlmICh2YWx1ZVswXSkge1xuICAgICAgICAgICAgYWNjdW1bdmFsdWVbMF0uaW5uZXJIVE1MXSA9IChhY2N1bVt2YWx1ZVswXS5pbm5lckhUTUxdIHx8IDApICsgMVxuICAgICAgICAgICAgYWNjdW1bXCJUb3RhbFwiXSA9IChhY2N1bVtcIlRvdGFsXCJdIHx8IDApICsgMVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gYWNjdW1cbiAgICAgIH1cblxuICAgICAgY29uc3QgZm9sZGVycyA9IG5ldyBBcnJheSguLi5kb20uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ0luZm9zRm95ZXJSU0EnKSlcbiAgICAgIGNvbnN0IHBlb3BsZSA9IG5ldyBBcnJheSguLi5kb20uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ1BlcnNvbm5lJykpXG5cbiAgICAgIGNvbnN0IGRhdGVzID0gZm9sZGVyc1xuICAgICAgICAubWFwKGkgPT4gaS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnRFRERU1SU0EnKVswXS5pbm5lckhUTUwpXG4gICAgICAgIC5yZWR1Y2UoKGFjY3VtLCB2YWx1ZSkgPT4ge1xuICAgICAgICAgIGFjY3VtW3ZhbHVlXSA9IChhY2N1bVt2YWx1ZV0gfHwgMCApICsgMVxuICAgICAgICAgIHJldHVybiBhY2N1bVxuICAgICAgICB9LCB7fSlcblxuICAgICAgY29uc3QgZHJvaXRzID0gZm9sZGVyc1xuICAgICAgICAubWFwKGkgPT4gaS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnRVRBVERPU1JTQScpKVxuICAgICAgICAucmVkdWNlKHByb2Nlc3NGaWVsZCwge30pXG4gICAgICBsZXQgbmV3S2V5c0Ryb2l0cyA9IGtleXNEcm9pdHMuY29uY2F0KE9iamVjdC5rZXlzKGRyb2l0cykpO1xuICAgICAgc2V0S2V5c0Ryb2l0cyhBcnJheS5mcm9tKG5ldyBTZXQobmV3S2V5c0Ryb2l0cykpLnNvcnQoKSlcblxuICAgICAgY29uc3QgZGV2b2lycyA9IHBlb3BsZVxuICAgICAgLm1hcChpID0+IGkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ1RPUFBFUlNEUk9ERVZPUlNBJykpXG4gICAgICAucmVkdWNlKHByb2Nlc3NGaWVsZCwge30pXG4gICAgICBjb25zdCBuZXdLZXlzRGV2b2lycyA9IGtleXNEZXZvaXJzLmNvbmNhdChPYmplY3Qua2V5cyhkZXZvaXJzKSk7XG4gICAgICBzZXRLZXlzRGV2b2lycyhBcnJheS5mcm9tKG5ldyBTZXQobmV3S2V5c0Rldm9pcnMpKS5zb3J0KCkpXG5cbiAgICAgIGNvbnN0IGZvbGRlcnNEcm9pdHNPdXZlcnRzID0gZm9sZGVyc1xuICAgICAgICAuZmlsdGVyKGkgPT4gaS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnRVRBVERPU1JTQScpWzBdLmlubmVySFRNTCA9PSBcIjJcIilcbiAgICAgICAgLm1hcChpID0+IHtcbiAgICAgICAgICBsZXQgaXRlbXMgPSBpLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdQZXJzb25uZScpXG4gICAgICAgICAgcmV0dXJuIFsuLi5pdGVtc11cbiAgICAgICAgfSlcbiAgICAgICAgLmZsYXQoKVxuXG4gICAgICAgIGNvbnN0IGRyb2l0c0V0RGV2b2lycyA9IGZvbGRlcnNEcm9pdHNPdXZlcnRzXG4gICAgICAgIC5tYXAoaSA9PiBpLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdUT1BQRVJTRFJPREVWT1JTQScpKVxuICAgICAgICAucmVkdWNlKHByb2Nlc3NGaWVsZCwge30pXG5cbiAgICAgICAgc2V0SXNQZW5kaW5nKGZhbHNlKTtcblxuICAgICAgICBkaXNwYXRjaFJ1bnMoe1xuICAgICAgICAgIHR5cGU6ICdhcHBlbmQnLFxuICAgICAgICAgIGl0ZW06IHtcbiAgICAgICAgICAgIHNlZWQ6IE1hdGgucmFuZG9tKCksXG4gICAgICAgICAgICB0aW1lc3RhbXA6IChuZXcgRGF0ZSgpKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDE5KSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAobmV3IERhdGUoKSkgLSBzdGFydF90aW1lLFxuICAgICAgICAgICAgZmlsZW5hbWU6IGZpbGUubmFtZSxcbiAgICAgICAgICBmaWxlRGF0ZXRpbWU6IGAke2R0fS0ke3RpbWV9YCxcbiAgICAgICAgICBmcmVxdWVuY3ksXG4gICAgICAgICAgdHlwZSxcbiAgICAgICAgICAvLyBXSVA6IE9LIHN1ciBGaXJlZm94IEtPIHN1ciBDaHJvbWVcbiAgICAgICAgICBlcnJvcjogZG9tLmFjdGl2ZUVsZW1lbnQgJiYgZG9tLmFjdGl2ZUVsZW1lbnQubm9kZU5hbWUgPT0gXCJwYXJzZXJlcnJvclwiLFxuICAgICAgICAgIHRvdGFsOiBmb2xkZXJzLmxlbmd0aCxcbiAgICAgICAgICBmaWxlU2l6ZTogZmlsZS5zaXplLFxuICAgICAgICAgIHBlb3BsZTogcGVvcGxlLmxlbmd0aCxcbiAgICAgICAgICBkYXRlcyxcbiAgICAgICAgICBkZXZvaXJzLFxuICAgICAgICAgIGRyb2l0cyxcbiAgICAgICAgICBkcm9pdHNFdERldm9pcnNcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgcmVhZGVyLnJlYWRBc1RleHQoZmlsZSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPExheW91dCBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9IGZpbGVIYW5kbGVyPXtmaWxlSGFuZGxlcn0+XG4gICAgICA8QWRtaW4gY2F0ZWdvcnk9XCJCw6luw6lmaWNpYWlyZVwiIG9uUnVuUmVmcmVzaD17aGFuZGxlTmV3UnVuc30vPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XG4gICAgICAgICAgTGVjdGV1ciBkZSBmaWNoaWVyPGJyLz7CqyBCw6luw6lmaWNpYWlyZSDCuyBkZSBsYSBDTkFGXG4gICAgICAgIDwvaDE+XG5cbiAgICAgICAgPEZpbGVIYW5kbGVyIGZpbGVIYW5kbGVyPXtmaWxlSGFuZGxlcn0gaXNQZW5kaW5nPXtpc1BlbmRpbmd9IGZpbGVTaXplPXtmaWxlU2l6ZX0gLz5cblxuICAgICAgICB7IHJ1bnMgJiYgcnVucy5sZW5ndGggPiAwICYmICg8PlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5zdWJ0aXRsZX0+XG4gICAgICAgICAgICBTdGF0aXN0aXF1ZXMgZHJvaXRzICYgZGV2b2lyc1xuICAgICAgICAgIDwvaDI+XG5cbiAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPXtzdHlsZXMubWFyZ2luX3NpZGV9PlxuICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+PC90aD5cbiAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5Eb3NzaWVycyAoRm95ZXJzKTwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+UGVyc29ubmVzPC90aD5cbiAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj17a2V5c0Ryb2l0cy5sZW5ndGh9PlZhbGV1cnMgYmFsaXNlcyBFVEFURE9TUlNBPC90aD5cbiAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj17a2V5c0Rldm9pcnMubGVuZ3RofT5WYWxldXJzIGJhbGlzZXMgVE9QUEVSU0RST0RFVk9SU0E8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPlBlcnNvbm5lcyBzb3VtaXNlcyBkcm9pdHMgZXQgZGV2b2lycyBkYW5zIGZveWVyIGRyb2l0IG91dmVydCBldCB2ZXJzYWJsZTwvdGg+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICB7a2V5c0Ryb2l0cy5tYXAoayA9PiA8dGgga2V5PXtrfSBjb2xTcGFuPVwiMVwiPntrfTwvdGg+KX1cbiAgICAgICAgICAgICAgICB7a2V5c0Rldm9pcnMubWFwKGsgPT4gPHRoIGtleT17a30gY29sU3Bhbj1cIjFcIj57a308L3RoPil9XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICB7cnVucy5tYXAoKHIsIGkpID0+ICg8dHIga2V5PXtgJHtyLnRpbWVzdGFtcH0tJHtyLmZpbGVuYW1lfS0ke3Iuc2VlZH0tMGAgfSBzdHlsZT17IGkgPT0gZGF0ZURhdGEuaW5kZXggPyB7YmFja2dyb3VuZENvbG9yOiAnbGlnaHRncmV5J306IHt9IH0+XG4gICAgICAgICAgICAgICAgPHRkPntydW5zLmxlbmd0aCAtIGl9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT57ci50b3RhbH08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9PntyLnBlb3BsZX08L3RkPlxuICAgICAgICAgICAgICAgIHtrZXlzRHJvaXRzLm1hcChrID0+IDx0ZCBrZXk9e2t9IGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+e3IuZHJvaXRzW2tdIHx8IDB9PC90ZD4pfVxuICAgICAgICAgICAgICAgIHtrZXlzRGV2b2lycy5tYXAoayA9PiA8dGQga2V5PXtrfSBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9PntyLmRldm9pcnNba10gfHwgMH08L3RkPil9XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+e3IuZHJvaXRzRXREZXZvaXJzWzFdIHx8IDB9PC90ZD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICkpfVxuXG4gICAgICAgICAgICAgIDx0cj5cblxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICA8L3RhYmxlPlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sZWdlbmRlfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGVnZW5kZV9ib3h9PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5sZWdlbmRlX3RpdGxlfT5Mw6lnZW5kZSZuYnNwOzo8L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmJvbGR9PlZhbGV1ciBiYWxpc2UgRVRBVERPU1JTQTwvcD5cbiAgICAgICAgICAgICAgPHA+MD1Ob3V2ZWxsZSBkZW1hbmRlIGVuIGF0dGVudGUgZGUgZMOpY2lzaW9uIENHIHBvdXIgb3V2ZXJ0dXJlIGR1IGRyb2l0PGJyLz5cbiAgICAgICAgICAgICAgMT1Ecm9pdCByZWZ1c8OpPGJyLz5cbiAgICAgICAgICAgICAgMj1Ecm9pdCBvdXZlcnQgZXQgdmVyc2FibGU8YnIvPlxuICAgICAgICAgICAgICAzPURyb2l0IG91dmVydCBldCBzdXNwZW5kdSAobGUgbW9udGFudCBkdSBkcm9pdCBlc3QgY2FsY3VsYWJsZSwgbWFpcyBsJ2V4aXN0ZW5jZSBkdSBkcm9pdCBlc3QgcmVtaXMgZW4gY2F1c2UpPGJyLz5cbiAgICAgICAgICAgICAgND1Ecm9pdCBvdXZlcnQgbWFpcyB2ZXJzZW1lbnQgc3VzcGVuZHUgKGxlIG1vbnRhbnQgZHUgZHJvaXQgbidlc3QgcGFzIGNhbGN1bGFibGUpPGJyLz5cbiAgICAgICAgICAgICAgNT1Ecm9pdCBjbG9zPGJyLz5cbiAgICAgICAgICAgICAgNj1Ecm9pdCBjbG9zIHN1ciBtb2lzIGFudMOpcmlldXIgYXlhbnQgZXUgdW4gY29udHLDtGxlIGRhbnMgbGUgbW9pcyBkZSByw6lmw6lyZW5jZSBwb3VyIHVuZSBww6lyaW9kZSBhbnTDqXJpZXVyZS48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGVnZW5kZV9ib3h9PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5ib2xkfT5WYWxldXIgYmFsaXNlIFRPUFBFUlNEUk9ERVZPUlNBPC9wPlxuICAgICAgICAgICAgICA8cD4wPVBlcnNvbm5lIHBhcyBzb3VtaXNlIMOgIGRyb2l0cyBldCBkZXZvaXJzPGJyIC8+XG4gICAgICAgICAgICAgIDE9UGVyc29ubmUgc291bWlzZSDDoCBkcm9pdHMgZXQgZGV2b2lyczwvcD5cbiAgICAgICAgICAgICAgPHA+Jm5ic3A7PC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5ib2xkfT5QZXJzb25uZXMgc291bWlzZXMgZHJvaXRzIGV0IGRldm9pcnMgZGFucyBmb3llciBkcm9pdCBvdXZlcnQgZXQgdmVyc2FibGU8L3A+XG4gICAgICAgICAgICAgIDxwPk5vbWJyZSBkZSBwZXJzb25uZXMgZG9udCBsYSBiYWxpc2UgVE9QUEVSU0RST0RFVk9SU0E9MSBwcsOpc2VudHMgZGFucyBkZXMgZm95ZXJzIGRvbnQgbGEgYmFsaXNlIEVUQVRET1NSU0E9MjwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnN1YnRpdGxlfT5cbiAgICAgICAgICAgIEhpc3RvcmlxdWVcbiAgICAgICAgICA8L2gyPlxuXG4gICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT17c3R5bGVzLm1hcmdpbl9zaWRlfT5cbiAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPjwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+RmljaGllcjwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+RGF0ZTwvdGg+XG4gICAgICAgICAgICAgICAgeyBkZXZNb2RlICYmIDx0aCByb3dTcGFuPVwiMlwiPlRhaWxsZTwvdGg+fVxuICAgICAgICAgICAgICAgIHsgZGV2TW9kZSAmJiA8dGggcm93U3Bhbj1cIjJcIj5EdXLDqWU8YnIvPihlbiBzKTwvdGg+fVxuICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPkRhdGUgZHUgZmljaGllcjwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+RnLDqXF1ZW5jZTwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+TmF0dXJlPC90aD5cbiAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5Eb3NzaWVyczwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+RMOpdGFpbHM8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPkVycmV1cjwvdGg+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgIHtydW5zLm1hcCgociwgaSkgPT4gKDx0ciBrZXk9e2Ake3IudGltZXN0YW1wfS0ke3IuZmlsZW5hbWV9LSR7ci5zZWVkfWAgfSBzdHlsZT17IGkgPT0gZGF0ZURhdGEuaW5kZXggPyB7YmFja2dyb3VuZENvbG9yOiAnbGlnaHRncmV5J306IHt9IH0+XG4gICAgICAgICAgICAgICAgPHRkPntydW5zLmxlbmd0aCAtIGl9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e3IuZmlsZW5hbWV9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e3IudGltZXN0YW1wfTwvdGQ+XG4gICAgICAgICAgICAgICAgeyBkZXZNb2RlICYmIDx0ZD57ci5maWxlU2l6ZX08L3RkPn1cbiAgICAgICAgICAgICAgICB7IGRldk1vZGUgJiYgPHRkPnshaXNOYU4oci5kdXJhdGlvbikgPyByLmR1cmF0aW9uLzEwMDAgOiBcIiNOL0FcIn08L3RkPn1cbiAgICAgICAgICAgICAgICA8dGQ+e3IuZmlsZURhdGV0aW1lfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPntgJHtyLmZyZXF1ZW5jeX0gKCR7ZnJlcXVlbmN5TmFtZXNbci5mcmVxdWVuY3ldIHx8ICc/J30pYH08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57YCR7ci50eXBlfSAoJHt0eXBlTmFtZXNbci50eXBlXSB8fCAnPyd9KWB9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMubnVtZXJpY30+e3IudG90YWx9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwic2hyaW5rXCI+PGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVEYXRlSGlzdG9ncmFtfSBkYXRhLWluZGV4PXtpfT5BZmZpY2hlciBwYXIgZGF0ZTwvYnV0dG9uPjwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPntyLmVycm9yID8gJ091aScgOiAnTm9uJ308L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgIDwvdGFibGU+XG5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoUnVucyh7dHlwZTogJ3Jlc2V0J30pfSBjbGFzc05hbWU9e3N0eWxlcy5tYXJnaW5fYm90dG9tfT5WaWRlciBsJ2hpc3RvcmlxdWU8L2J1dHRvbj5cbiAgICAgICAgPC8+KX1cblxuICAgICAgICB7cnVucy5sZW5ndGggIT0gMCAmJiAoPHAgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+XG4gICAgICAgIFZvdXMgcG91dmV6IGFjY8OpZGVyIMOgIHVuZSByZXByw6lzZW50YXRpb24gZ3JhcGhpcXVlIGRlIGxhIHLDqXBhcnRpdGlvbiBkYW5zIGxlcyB0ZW1wcyBkZXMgZGVtYW5kZXMgY29ubnVlcyBkYW5zIGxlcyBmaWNoaWVycyBhbmFseXPDqXMuIFBvdXIgY2VsYSBpbCBmYXV0IGNsaXF1ZXIgc3VyIGxlIGJvdXRvbiDCqyBBZmZpY2hlciBwYXIgZGF0ZSDCuy5cbiAgICAgICAgICA8L3A+KX1cblxuICAgICAgICB7ZGF0ZURhdGEuaW5kZXggIT0gdW5kZWZpbmVkICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnN1YnRpdGxlfT5cbiAgICAgICAgICAgICAgTm9tYnJlIGRlIGRvc3NpZXJzIGFzc29jacOpcyDDoCBkZXMgZGVtYW5kZXMgcsOpYWxpc8OpcyDDoCBjaGFxdWUgZGF0ZVxuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6ICgyNTAqZGF0ZURhdGEueWVhckNvdW50KSArIFwicHhcIiwgd2lkdGg6IFwiMTAwJVwifX0+XG4gICAgICAgICAgICAgIHtSZXNwb25zaXZlQ2FsZW5kYXIoZGF0ZURhdGEpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG5cbiAgICAgICAgPEZvb3RlclxuICAgICAgICAgIHN1YmplY3Q9XCJGbHV4IGLDqW7DqWZpY2lhaXJlIENOQUZcIlxuICAgICAgICAgIHBvdXJxdW9pPVwiUG91cnF1b2kgdW4gbGVjdGV1ciBkZSBmaWNoaWVyIENOQUYmbmJzcDs/XCJcbiAgICAgICAgICB0ZXh0PXs8PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+VG91cyBsZXMgZMOpcGFydGVtZW50cyBuJ29udCBwYXMgbGVzIG91dGlscyBwb3VyIGFuYWx5c2VyIGxlcyBmaWNoaWVycyBlbnZvecOpcyBwYXIgbGEgQ05BRi4gQ2VsYSBwZXV0IHJhbGVudGlyIGV0IGNvbXBsaXF1ZXIgbm9zIMOpY2hhbmdlcy48L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5BdmVjIGNldCBvdXRpbCwgbm91cyBzb3VoYWl0b25zIHBlcm1ldHRyZSBhdXggcGVyc29ubmVzIHF1aSBvbnQgYWNjw6hzIMOgIGNlcyBmaWNoaWVycyBkJ2VuIGV4dHJhaXJlIGRlcyBzdGF0aXN0aXF1ZXMgZ8OpbsOpcmFsZXMgc2FucyBhdm9pciDDoCBtZXR0cmUgbGVzIG1haW5zIGRhbnMgbGUgY2FtYm91aSBlbGxlcy1tw6ptZS48L3A+XG4gICAgICAgICAgPC8+fVxuICAgICAgICAvPlxuICAgICAgPC9tYWluPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9