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
      newKeysDroits = Array.from(new Set(newKeysDroits));
      setKeysDroits(newKeysDroits);
      var devoirs = people.map(function (i) {
        return i.getElementsByTagName('TOPPERSDRODEVORSA');
      }).reduce(processField, {});
      var newKeysDevoirs = keysDevoirs.concat(Object.keys(devoirs));
      setKeysDevoirs(Array.from(new Set(newKeysDevoirs)));
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
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_admin__WEBPACK_IMPORTED_MODULE_4__["default"], {
      category: "B\xE9n\xE9ficiaire",
      onRunRefresh: handleNewRuns
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.main,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.title,
        children: ["Lecteur de fichier", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 29
        }, this), "\xAB B\xE9n\xE9ficiaire \xBB de la CNAF"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_file__WEBPACK_IMPORTED_MODULE_6__["default"], {
        fileHandler: fileHandler,
        isPending: isPending,
        fileSize: fileSize
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 9
      }, this), runs && runs.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.subtitle,
          children: "Statistiques droits & devoirs"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.margin_side,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 184,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Dossiers (Foyers)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 185,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Personnes"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 186,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                colSpan: keysDroits.length,
                children: "Valeurs balises ETATDOSRSA"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 187,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                colSpan: keysDevoirs.length,
                children: "Valeurs balises TOPPERSDRODEVORSA"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 188,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Personnes soumises droits et devoirs dans foyer droit ouvert et versable"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 189,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 183,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              children: [keysDroits.map(function (k) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                  colSpan: "1",
                  children: k
                }, k, false, {
                  fileName: _jsxFileName,
                  lineNumber: 192,
                  columnNumber: 38
                }, _this);
              }), keysDevoirs.map(function (k) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                  colSpan: "1",
                  children: k
                }, k, false, {
                  fileName: _jsxFileName,
                  lineNumber: 193,
                  columnNumber: 39
                }, _this);
              })]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 191,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 182,
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
                  lineNumber: 198,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.center,
                  children: r.total
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 199,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.center,
                  children: r.people
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 200,
                  columnNumber: 17
                }, _this), keysDroits.map(function (k) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.center,
                    children: r.droits[k] || 0
                  }, k, false, {
                    fileName: _jsxFileName,
                    lineNumber: 201,
                    columnNumber: 38
                  }, _this);
                }), keysDevoirs.map(function (k) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.center,
                    children: r.devoirs[k] || 0
                  }, k, false, {
                    fileName: _jsxFileName,
                    lineNumber: 202,
                    columnNumber: 39
                  }, _this);
                }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.center,
                  children: r.droitsEtDevoirs[1] || 0
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 203,
                  columnNumber: 17
                }, _this)]
              }, "".concat(r.timestamp, "-").concat(r.filename, "-").concat(r.seed, "-0"), true, {
                fileName: _jsxFileName,
                lineNumber: 197,
                columnNumber: 36
              }, _this);
            }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 207,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 196,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 181,
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
              lineNumber: 215,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.bold,
              children: "Valeur balise ETATDOSRSA"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 216,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: ["0=Nouvelle demande en attente de d\xE9cision CG pour ouverture du droit", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 217,
                columnNumber: 86
              }, this), "1=Droit refus\xE9", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 218,
                columnNumber: 29
              }, this), "2=Droit ouvert et versable", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 219,
                columnNumber: 41
              }, this), "3=Droit ouvert et suspendu (le montant du droit est calculable, mais l'existence du droit est remis en cause)", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 220,
                columnNumber: 124
              }, this), "4=Droit ouvert mais versement suspendu (le montant du droit n'est pas calculable)", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 221,
                columnNumber: 96
              }, this), "5=Droit clos", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 222,
                columnNumber: 27
              }, this), "6=Droit clos sur mois ant\xE9rieur ayant eu un contr\xF4le dans le mois de r\xE9f\xE9rence pour une p\xE9riode ant\xE9rieure."]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 217,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 214,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.legende_box,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.bold,
              children: "Valeur balise TOPPERSDRODEVORSA"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 226,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: ["0=Personne pas soumise \xE0 droits et devoirs", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 227,
                columnNumber: 60
              }, this), "1=Personne soumise \xE0 droits et devoirs"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 227,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "\xA0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 229,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.bold,
              children: "Personnes soumises droits et devoirs dans foyer droit ouvert et versable"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 230,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "Nombre de personnes dont la balise TOPPERSDRODEVORSA=1 pr\xE9sents dans des foyers dont la balise ETATDOSRSA=2"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 231,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 225,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.subtitle,
          children: "Historique"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 235,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.margin_side,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 242,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Fichier"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 243,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Date"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 244,
                columnNumber: 17
              }, this), devMode && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Taille"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 245,
                columnNumber: 30
              }, this), devMode && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: ["Dur\xE9e", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 246,
                  columnNumber: 51
                }, this), "(en s)"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 246,
                columnNumber: 30
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Date du fichier"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 247,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Fr\xE9quence"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 248,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Nature"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 249,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Dossiers"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 250,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "D\xE9tails"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 251,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Erreur"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 252,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 241,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 254,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 240,
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
                  lineNumber: 259,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: r.filename
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 260,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: r.timestamp
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 261,
                  columnNumber: 17
                }, _this), devMode && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: r.fileSize
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 262,
                  columnNumber: 30
                }, _this), devMode && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: !isNaN(r.duration) ? r.duration / 1000 : "#N/A"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 263,
                  columnNumber: 30
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: r.fileDatetime
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 264,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: "".concat(r.frequency, " (").concat(_lib_cnaf__WEBPACK_IMPORTED_MODULE_9__["frequencyNames"][r.frequency] || '?', ")")
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 265,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: "".concat(r.type, " (").concat(_lib_cnaf__WEBPACK_IMPORTED_MODULE_9__["typeNames"][r.type] || '?', ")")
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 266,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.numeric,
                  children: r.total
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 267,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: "shrink",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                    onClick: handleDateHistogram,
                    "data-index": i,
                    children: "Afficher par date"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 268,
                    columnNumber: 40
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 268,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: r.error ? 'Oui' : 'Non'
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 269,
                  columnNumber: 17
                }, _this)]
              }, "".concat(r.timestamp, "-").concat(r.filename, "-").concat(r.seed), true, {
                fileName: _jsxFileName,
                lineNumber: 258,
                columnNumber: 36
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 257,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 239,
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
          lineNumber: 275,
          columnNumber: 11
        }, this)]
      }, void 0, true), runs.length != 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.text,
        children: "Vous pouvez acc\xE9der \xE0 une repr\xE9sentation graphique de la r\xE9partition dans les temps des demandes connues dans les fichiers analys\xE9s. Pour cela il faut cliquer sur le bouton \xAB Afficher par date \xBB."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 278,
        columnNumber: 31
      }, this), dateData.index != undefined && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.subtitle,
          children: "Nombre de dossiers associ\xE9s \xE0 des demandes r\xE9alis\xE9s \xE0 chaque date"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 284,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            height: 250 * dateData.yearCount + "px",
            width: "100%"
          },
          children: Object(_components_chart__WEBPACK_IMPORTED_MODULE_5__["default"])(dateData)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 287,
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
            lineNumber: 297,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.text,
            children: "Avec cet outil, nous souhaitons permettre aux personnes qui ont acc\xE8s \xE0 ces fichiers d'en extraire des statistiques g\xE9n\xE9rales sans avoir \xE0 mettre les mains dans le camboui elles-m\xEAme."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 298,
            columnNumber: 13
          }, this)]
        }, void 0, true)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 293,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 167,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbGVjdGV1ci9jbmFmL2JlbmVmaWNpYWlyZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJyZWR1Y2VyIiwicmVkdWNlckZhY3RvcnkiLCJkZXZNb2RlIiwiQmVuZWZpY2lhaXJlIiwidXNlU3RhdGUiLCJkZXZGaWxlIiwic2V0RGV2RmlsZSIsInVzZVJlZHVjZXIiLCJpbml0UmVkdWNlciIsInJ1bnMiLCJkaXNwYXRjaFJ1bnMiLCJpc1BlbmRpbmciLCJzZXRJc1BlbmRpbmciLCJmaWxlU2l6ZSIsInNldEZpbGVTaXplIiwia2V5c0Ryb2l0cyIsInNldEtleXNEcm9pdHMiLCJrZXlzRGV2b2lycyIsInNldEtleXNEZXZvaXJzIiwiaW5kZXgiLCJ1bmRlZmluZWQiLCJkYXRhIiwiZnJvbSIsInRvIiwiZGF0ZURhdGEiLCJzZXREYXRlRGF0YSIsImhhbmRsZU5ld1J1bnMiLCJ1c2VDYWxsYmFjayIsInR5cGUiLCJmb2xkZXJzIiwidXNlRWZmZWN0IiwiZmlsZUhhbmRsZXIiLCJoYW5kbGVEYXRlSGlzdG9ncmFtIiwiZXZlbnQiLCJzaG93RGF0ZUhpc3RvZ3JhbSIsInBhcnNlSW50IiwidGFyZ2V0IiwiZGF0YXNldCIsInNvdXJjZSIsImRhdGVzIiwiT2JqZWN0Iiwia2V5cyIsIm1pbkRhdGUiLCJtYXhEYXRlIiwibWFwIiwiZCIsImRhdGUiLCJEYXRlIiwiZGF5IiwidG9JU09TdHJpbmciLCJzbGljZSIsInZhbHVlIiwieWVhckNvdW50IiwiZ2V0WWVhciIsImZpbGUiLCJzaXplIiwic3RhcnRfdGltZSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJwYXJzZXIiLCJET01QYXJzZXIiLCJkb20iLCJwYXJzZUZyb21TdHJpbmciLCJyZXN1bHQiLCJkZXNjIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJmcmVxdWVuY3kiLCJpbm5lckhUTUwiLCJkdCIsInRpbWUiLCJwcm9jZXNzRmllbGQiLCJhY2N1bSIsIkFycmF5IiwicGVvcGxlIiwiaSIsInJlZHVjZSIsImRyb2l0cyIsIm5ld0tleXNEcm9pdHMiLCJjb25jYXQiLCJTZXQiLCJkZXZvaXJzIiwibmV3S2V5c0Rldm9pcnMiLCJmb2xkZXJzRHJvaXRzT3V2ZXJ0cyIsImZpbHRlciIsIml0ZW1zIiwiZmxhdCIsImRyb2l0c0V0RGV2b2lycyIsIml0ZW0iLCJzZWVkIiwiTWF0aCIsInJhbmRvbSIsInRpbWVzdGFtcCIsImR1cmF0aW9uIiwiZmlsZW5hbWUiLCJuYW1lIiwiZmlsZURhdGV0aW1lIiwiZXJyb3IiLCJhY3RpdmVFbGVtZW50Iiwibm9kZU5hbWUiLCJ0b3RhbCIsImxlbmd0aCIsInJlYWRBc1RleHQiLCJzdHlsZXMiLCJjb250YWluZXIiLCJtYWluIiwidGl0bGUiLCJzdWJ0aXRsZSIsIm1hcmdpbl9zaWRlIiwiayIsInIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjZW50ZXIiLCJsZWdlbmRlIiwibGVnZW5kZV9ib3giLCJsZWdlbmRlX3RpdGxlIiwiYm9sZCIsImlzTmFOIiwiZnJlcXVlbmN5TmFtZXMiLCJ0eXBlTmFtZXMiLCJudW1lcmljIiwibWFyZ2luX2JvdHRvbSIsInRleHQiLCJoZWlnaHQiLCJ3aWR0aCIsIlJlc3BvbnNpdmVDYWxlbmRhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQSxJQUFNQSxPQUFPLEdBQUdDLHVFQUFjLENBQUMsNEJBQUQsQ0FBOUI7QUFDQSxJQUFNQyxPQUFPLE9BQWI7QUFFZSxTQUFTQyxZQUFULEdBQXdCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ1BDLHNEQUFRLENBQUMsSUFBRCxDQUREO0FBQUEsTUFDOUJDLE9BRDhCO0FBQUEsTUFDckJDLFVBRHFCOztBQUFBLG9CQUVSQyx3REFBVSxDQUFDUCxPQUFELEVBQVUsRUFBVixFQUFjUSw0REFBZCxDQUZGO0FBQUEsTUFFOUJDLElBRjhCO0FBQUEs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bUJBQVMsRUFBRW1GLCtEQUFNLENBQUNJLFFBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBSUU7QUFBSyxlQUFLLEVBQUU7QUFBQ2dCLGtCQUFNLEVBQUcsTUFBSW5HLFFBQVEsQ0FBQzRCLFNBQWQsR0FBMkIsSUFBcEM7QUFBMEN3RSxpQkFBSyxFQUFFO0FBQWpELFdBQVo7QUFBQSxvQkFDR0MsaUVBQWtCLENBQUNyRyxRQUFEO0FBRHJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkY7QUFBQSxzQkFsSEosZUE0SEUscUVBQUMsMERBQUQ7QUFDRSxlQUFPLEVBQUMsOEJBRFY7QUFFRSxnQkFBUSxFQUFDLDBDQUZYO0FBR0UsWUFBSSxlQUFFO0FBQUEsa0NBQ0o7QUFBRyxxQkFBUyxFQUFFK0UsK0RBQU0sQ0FBQ21CLElBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURJLGVBRUo7QUFBRyxxQkFBUyxFQUFFbkIsK0RBQU0sQ0FBQ21CLElBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZJO0FBQUE7QUFIUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBNUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBMElEOztHQWhTdUJ2SCxZOztLQUFBQSxZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xlY3RldXIvY25hZi9iZW5lZmljaWFpcmUuNjFhMzE5YjYzMmNkNjZlZjVkNDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZHVjZXIsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQWRtaW4gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9hZG1pbidcbmltcG9ydCBSZXNwb25zaXZlQ2FsZW5kYXIgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9jaGFydCdcbmltcG9ydCBGaWxlSGFuZGxlciBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL2ZpbGUnXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvZm9vdGVyJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL2xheW91dCdcbmltcG9ydCB7IGZyZXF1ZW5jeU5hbWVzLCB0eXBlTmFtZXMgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvY25hZidcbmltcG9ydCB7IGluaXRSZWR1Y2VyLCByZWR1Y2VyRmFjdG9yeSB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9oaXN0b3JpcXVlJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi8uLi8uLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuXG5cblxuY29uc3QgcmVkdWNlciA9IHJlZHVjZXJGYWN0b3J5KCdUZXN0IC0gQ05BRiAtIELDqW7DqWZpY2lhaXJlJylcbmNvbnN0IGRldk1vZGUgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PSAnZGV2ZWxvcG1lbnQnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJlbmVmaWNpYWlyZSgpIHtcbiAgY29uc3QgW2RldkZpbGUsIHNldERldkZpbGVdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW3J1bnMsIGRpc3BhdGNoUnVuc10gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIFtdLCBpbml0UmVkdWNlcilcbiAgY29uc3QgW2lzUGVuZGluZywgc2V0SXNQZW5kaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2ZpbGVTaXplLCBzZXRGaWxlU2l6ZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2tleXNEcm9pdHMsIHNldEtleXNEcm9pdHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBba2V5c0Rldm9pcnMsIHNldEtleXNEZXZvaXJzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2RhdGVEYXRhLCBzZXREYXRlRGF0YV0gPSB1c2VTdGF0ZSh7XG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBkYXRhOiBbXSxcbiAgICBmcm9tOiBcIjIwMTYtMDMtMDFcIixcbiAgICB0bzogXCIyMDIxLTAzLTAxXCIsXG4gIH0pXG5cbiAgY29uc3QgaGFuZGxlTmV3UnVucyA9IHVzZUNhbGxiYWNrKGRhdGEgPT4ge1xuICAgIGRpc3BhdGNoUnVucyh7XG4gICAgICB0eXBlOiAncmVzZXQnLFxuICAgICAgZm9sZGVyczogZGF0YVxuICAgIH0pXG4gIH0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZihkZXZGaWxlKSB7XG4gICAgICBmaWxlSGFuZGxlcihkZXZGaWxlKVxuICAgIH1cbiAgfSwgW2RldkZpbGVdKVxuXG4gIGNvbnN0IGhhbmRsZURhdGVIaXN0b2dyYW0gPSB1c2VDYWxsYmFjayhldmVudCA9PiBzaG93RGF0ZUhpc3RvZ3JhbShwYXJzZUludChldmVudC50YXJnZXQuZGF0YXNldC5pbmRleCkpKVxuICBjb25zdCBzaG93RGF0ZUhpc3RvZ3JhbSA9IHVzZUNhbGxiYWNrKGluZGV4ID0+IHtcbiAgICBjb25zdCBzb3VyY2UgPSBydW5zW2luZGV4XVxuXG4gICAgY29uc3QgZGF0ZXMgPSBPYmplY3Qua2V5cyhzb3VyY2UuZGF0ZXMpXG4gICAgbGV0IG1pbkRhdGUgPSBudWxsXG4gICAgbGV0IG1heERhdGUgPSBudWxsXG5cbiAgICBjb25zdCBkYXRhID0gZGF0ZXMubWFwKGQgPT4ge1xuICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZShkKVxuICAgICAgaWYgKCFtaW5EYXRlKSB7XG4gICAgICAgIG1pbkRhdGUgPSBkYXRlXG4gICAgICAgIG1heERhdGUgPSBkYXRlXG4gICAgICB9IGVsc2UgaWYgKGRhdGUgPCBtaW5EYXRlKSB7XG4gICAgICAgIG1pbkRhdGUgPSBkYXRlXG4gICAgICB9IGVsc2UgaWYgKG1heERhdGUgPCBkYXRlKSB7XG4gICAgICAgIG1heERhdGUgPSBkYXRlXG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICBkYXk6IGRhdGUudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCksXG4gICAgICAgIHZhbHVlOiBzb3VyY2UuZGF0ZXNbZF1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgeWVhckNvdW50ID0gbWF4RGF0ZS5nZXRZZWFyKCkgLSBtaW5EYXRlLmdldFllYXIoKSArIDFcbiAgICBzZXREYXRlRGF0YSh7XG4gICAgICBpbmRleCxcbiAgICAgIGRhdGEsXG4gICAgICBmcm9tOiBtaW5EYXRlLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApLFxuICAgICAgdG86IG1heERhdGUudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCksXG4gICAgICB5ZWFyQ291bnQsXG4gICAgfSlcbiAgfSlcblxuICBjb25zdCBmaWxlSGFuZGxlciA9IChmaWxlKSA9PiB7XG4gICAgaWYgKGRldk1vZGUgJiYgZmlsZSAhPSBkZXZGaWxlKSB7XG4gICAgICBzZXREZXZGaWxlKGZpbGUpXG4gICAgfVxuICAgIHNldEZpbGVTaXplKGZpbGUuc2l6ZSk7XG4gICAgc2V0SXNQZW5kaW5nKHRydWUpO1xuICAgIGNvbnN0IHN0YXJ0X3RpbWUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcbiAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGNvbnN0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKVxuICAgICAgY29uc3QgZG9tID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhldmVudC50YXJnZXQucmVzdWx0LCBcImFwcGxpY2F0aW9uL3htbFwiKVxuXG4gICAgICBjb25zdCBkZXNjID0gZG9tLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdJZGVudGlmaWNhdGlvbkZsdXgnKVswXVxuICAgICAgY29uc3QgZnJlcXVlbmN5ID0gZGVzYy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnVFlQRUZMVVgnKVswXS5pbm5lckhUTUxcbiAgICAgIGNvbnN0IHR5cGUgPSBkZXNjLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdOQVRGTFVYJylbMF0uaW5uZXJIVE1MXG4gICAgICBjb25zdCBkdCA9IGRlc2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ0RUQ1JFQUZMVVgnKVswXS5pbm5lckhUTUxcbiAgICAgIGNvbnN0IHRpbWUgPSBkZXNjLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdIRVVDUkVBRkxVWCcpWzBdLmlubmVySFRNTFxuXG4gICAgICBjb25zdCBwcm9jZXNzRmllbGQgPSAoYWNjdW0sIHZhbHVlKSA9PiB7XG4gICAgICAgICAgaWYgKHZhbHVlWzBdKSB7XG4gICAgICAgICAgICBhY2N1bVt2YWx1ZVswXS5pbm5lckhUTUxdID0gKGFjY3VtW3ZhbHVlWzBdLmlubmVySFRNTF0gfHwgMCkgKyAxXG4gICAgICAgICAgICBhY2N1bVtcIlRvdGFsXCJdID0gKGFjY3VtW1wiVG90YWxcIl0gfHwgMCkgKyAxXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBhY2N1bVxuICAgICAgfVxuXG4gICAgICBjb25zdCBmb2xkZXJzID0gbmV3IEFycmF5KC4uLmRvbS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnSW5mb3NGb3llclJTQScpKVxuICAgICAgY29uc3QgcGVvcGxlID0gbmV3IEFycmF5KC4uLmRvbS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnUGVyc29ubmUnKSlcblxuICAgICAgY29uc3QgZGF0ZXMgPSBmb2xkZXJzXG4gICAgICAgIC5tYXAoaSA9PiBpLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdEVERFTVJTQScpWzBdLmlubmVySFRNTClcbiAgICAgICAgLnJlZHVjZSgoYWNjdW0sIHZhbHVlKSA9PiB7XG4gICAgICAgICAgYWNjdW1bdmFsdWVdID0gKGFjY3VtW3ZhbHVlXSB8fCAwICkgKyAxXG4gICAgICAgICAgcmV0dXJuIGFjY3VtXG4gICAgICAgIH0sIHt9KVxuXG4gICAgICBjb25zdCBkcm9pdHMgPSBmb2xkZXJzXG4gICAgICAgIC5tYXAoaSA9PiBpLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdFVEFURE9TUlNBJykpXG4gICAgICAgIC5yZWR1Y2UocHJvY2Vzc0ZpZWxkLCB7fSlcbiAgICAgIGxldCBuZXdLZXlzRHJvaXRzID0ga2V5c0Ryb2l0cy5jb25jYXQoT2JqZWN0LmtleXMoZHJvaXRzKSk7XG4gICAgICBuZXdLZXlzRHJvaXRzID0gQXJyYXkuZnJvbShuZXcgU2V0KG5ld0tleXNEcm9pdHMpKVxuICAgICAgc2V0S2V5c0Ryb2l0cyhuZXdLZXlzRHJvaXRzKVxuXG4gICAgICBjb25zdCBkZXZvaXJzID0gcGVvcGxlXG4gICAgICAgIC5tYXAoaSA9PiBpLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdUT1BQRVJTRFJPREVWT1JTQScpKVxuICAgICAgICAucmVkdWNlKHByb2Nlc3NGaWVsZCwge30pXG4gICAgICBjb25zdCBuZXdLZXlzRGV2b2lycyA9IGtleXNEZXZvaXJzLmNvbmNhdChPYmplY3Qua2V5cyhkZXZvaXJzKSk7XG4gICAgICBzZXRLZXlzRGV2b2lycyhBcnJheS5mcm9tKG5ldyBTZXQobmV3S2V5c0Rldm9pcnMpKSlcblxuICAgICAgY29uc3QgZm9sZGVyc0Ryb2l0c091dmVydHMgPSBmb2xkZXJzXG4gICAgICAgIC5maWx0ZXIoaSA9PiBpLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdFVEFURE9TUlNBJylbMF0uaW5uZXJIVE1MID09IFwiMlwiKVxuICAgICAgICAubWFwKGkgPT4ge1xuICAgICAgICAgIGxldCBpdGVtcyA9IGkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ1BlcnNvbm5lJylcbiAgICAgICAgICByZXR1cm4gWy4uLml0ZW1zXVxuICAgICAgICB9KVxuICAgICAgICAuZmxhdCgpXG5cbiAgICAgIGNvbnN0IGRyb2l0c0V0RGV2b2lycyA9IGZvbGRlcnNEcm9pdHNPdXZlcnRzXG4gICAgICAgIC5tYXAoaSA9PiBpLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdUT1BQRVJTRFJPREVWT1JTQScpKVxuICAgICAgICAucmVkdWNlKHByb2Nlc3NGaWVsZCwge30pXG5cbiAgICAgIHNldElzUGVuZGluZyhmYWxzZSk7XG5cbiAgICAgIGRpc3BhdGNoUnVucyh7XG4gICAgICAgIHR5cGU6ICdhcHBlbmQnLFxuICAgICAgICBpdGVtOiB7XG4gICAgICAgICAgc2VlZDogTWF0aC5yYW5kb20oKSxcbiAgICAgICAgICB0aW1lc3RhbXA6IChuZXcgRGF0ZSgpKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDE5KSxcbiAgICAgICAgICBkdXJhdGlvbjogKG5ldyBEYXRlKCkpIC0gc3RhcnRfdGltZSxcbiAgICAgICAgICBmaWxlbmFtZTogZmlsZS5uYW1lLFxuICAgICAgICAgIGZpbGVEYXRldGltZTogYCR7ZHR9LSR7dGltZX1gLFxuICAgICAgICAgIGZyZXF1ZW5jeSxcbiAgICAgICAgICB0eXBlLFxuICAgICAgICAgIC8vIFdJUDogT0sgc3VyIEZpcmVmb3ggS08gc3VyIENocm9tZVxuICAgICAgICAgIGVycm9yOiBkb20uYWN0aXZlRWxlbWVudCAmJiBkb20uYWN0aXZlRWxlbWVudC5ub2RlTmFtZSA9PSBcInBhcnNlcmVycm9yXCIsXG4gICAgICAgICAgdG90YWw6IGZvbGRlcnMubGVuZ3RoLFxuICAgICAgICAgIGZpbGVTaXplOiBmaWxlLnNpemUsXG4gICAgICAgICAgcGVvcGxlOiBwZW9wbGUubGVuZ3RoLFxuICAgICAgICAgIGRhdGVzLFxuICAgICAgICAgIGRldm9pcnMsXG4gICAgICAgICAgZHJvaXRzLFxuICAgICAgICAgIGRyb2l0c0V0RGV2b2lyc1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICByZWFkZXIucmVhZEFzVGV4dChmaWxlKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8QWRtaW4gY2F0ZWdvcnk9XCJCw6luw6lmaWNpYWlyZVwiIG9uUnVuUmVmcmVzaD17aGFuZGxlTmV3UnVuc30vPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XG4gICAgICAgICAgTGVjdGV1ciBkZSBmaWNoaWVyPGJyLz7CqyBCw6luw6lmaWNpYWlyZSDCuyBkZSBsYSBDTkFGXG4gICAgICAgIDwvaDE+XG5cbiAgICAgICAgPEZpbGVIYW5kbGVyIGZpbGVIYW5kbGVyPXtmaWxlSGFuZGxlcn0gaXNQZW5kaW5nPXtpc1BlbmRpbmd9IGZpbGVTaXplPXtmaWxlU2l6ZX0gLz5cblxuICAgICAgICB7IHJ1bnMgJiYgcnVucy5sZW5ndGggPiAwICYmICg8PlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5zdWJ0aXRsZX0+XG4gICAgICAgICAgICBTdGF0aXN0aXF1ZXMgZHJvaXRzICYgZGV2b2lyc1xuICAgICAgICAgIDwvaDI+XG5cbiAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPXtzdHlsZXMubWFyZ2luX3NpZGV9PlxuICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+PC90aD5cbiAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5Eb3NzaWVycyAoRm95ZXJzKTwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+UGVyc29ubmVzPC90aD5cbiAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj17a2V5c0Ryb2l0cy5sZW5ndGh9PlZhbGV1cnMgYmFsaXNlcyBFVEFURE9TUlNBPC90aD5cbiAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj17a2V5c0Rldm9pcnMubGVuZ3RofT5WYWxldXJzIGJhbGlzZXMgVE9QUEVSU0RST0RFVk9SU0E8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPlBlcnNvbm5lcyBzb3VtaXNlcyBkcm9pdHMgZXQgZGV2b2lycyBkYW5zIGZveWVyIGRyb2l0IG91dmVydCBldCB2ZXJzYWJsZTwvdGg+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICB7a2V5c0Ryb2l0cy5tYXAoayA9PiA8dGgga2V5PXtrfSBjb2xTcGFuPVwiMVwiPntrfTwvdGg+KX1cbiAgICAgICAgICAgICAgICB7a2V5c0Rldm9pcnMubWFwKGsgPT4gPHRoIGtleT17a30gY29sU3Bhbj1cIjFcIj57a308L3RoPil9XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICB7cnVucy5tYXAoKHIsIGkpID0+ICg8dHIga2V5PXtgJHtyLnRpbWVzdGFtcH0tJHtyLmZpbGVuYW1lfS0ke3Iuc2VlZH0tMGAgfSBzdHlsZT17IGkgPT0gZGF0ZURhdGEuaW5kZXggPyB7YmFja2dyb3VuZENvbG9yOiAnbGlnaHRncmV5J306IHt9IH0+XG4gICAgICAgICAgICAgICAgPHRkPntydW5zLmxlbmd0aCAtIGl9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT57ci50b3RhbH08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9PntyLnBlb3BsZX08L3RkPlxuICAgICAgICAgICAgICAgIHtrZXlzRHJvaXRzLm1hcChrID0+IDx0ZCBrZXk9e2t9IGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+e3IuZHJvaXRzW2tdIHx8IDB9PC90ZD4pfVxuICAgICAgICAgICAgICAgIHtrZXlzRGV2b2lycy5tYXAoayA9PiA8dGQga2V5PXtrfSBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9PntyLmRldm9pcnNba10gfHwgMH08L3RkPil9XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+e3IuZHJvaXRzRXREZXZvaXJzWzFdIHx8IDB9PC90ZD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICkpfVxuXG4gICAgICAgICAgICAgIDx0cj5cblxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICA8L3RhYmxlPlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sZWdlbmRlfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGVnZW5kZV9ib3h9PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5sZWdlbmRlX3RpdGxlfT5Mw6lnZW5kZSZuYnNwOzo8L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmJvbGR9PlZhbGV1ciBiYWxpc2UgRVRBVERPU1JTQTwvcD5cbiAgICAgICAgICAgICAgPHA+MD1Ob3V2ZWxsZSBkZW1hbmRlIGVuIGF0dGVudGUgZGUgZMOpY2lzaW9uIENHIHBvdXIgb3V2ZXJ0dXJlIGR1IGRyb2l0PGJyLz5cbiAgICAgICAgICAgICAgMT1Ecm9pdCByZWZ1c8OpPGJyLz5cbiAgICAgICAgICAgICAgMj1Ecm9pdCBvdXZlcnQgZXQgdmVyc2FibGU8YnIvPlxuICAgICAgICAgICAgICAzPURyb2l0IG91dmVydCBldCBzdXNwZW5kdSAobGUgbW9udGFudCBkdSBkcm9pdCBlc3QgY2FsY3VsYWJsZSwgbWFpcyBsJ2V4aXN0ZW5jZSBkdSBkcm9pdCBlc3QgcmVtaXMgZW4gY2F1c2UpPGJyLz5cbiAgICAgICAgICAgICAgND1Ecm9pdCBvdXZlcnQgbWFpcyB2ZXJzZW1lbnQgc3VzcGVuZHUgKGxlIG1vbnRhbnQgZHUgZHJvaXQgbidlc3QgcGFzIGNhbGN1bGFibGUpPGJyLz5cbiAgICAgICAgICAgICAgNT1Ecm9pdCBjbG9zPGJyLz5cbiAgICAgICAgICAgICAgNj1Ecm9pdCBjbG9zIHN1ciBtb2lzIGFudMOpcmlldXIgYXlhbnQgZXUgdW4gY29udHLDtGxlIGRhbnMgbGUgbW9pcyBkZSByw6lmw6lyZW5jZSBwb3VyIHVuZSBww6lyaW9kZSBhbnTDqXJpZXVyZS48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGVnZW5kZV9ib3h9PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5ib2xkfT5WYWxldXIgYmFsaXNlIFRPUFBFUlNEUk9ERVZPUlNBPC9wPlxuICAgICAgICAgICAgICA8cD4wPVBlcnNvbm5lIHBhcyBzb3VtaXNlIMOgIGRyb2l0cyBldCBkZXZvaXJzPGJyIC8+XG4gICAgICAgICAgICAgIDE9UGVyc29ubmUgc291bWlzZSDDoCBkcm9pdHMgZXQgZGV2b2lyczwvcD5cbiAgICAgICAgICAgICAgPHA+Jm5ic3A7PC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5ib2xkfT5QZXJzb25uZXMgc291bWlzZXMgZHJvaXRzIGV0IGRldm9pcnMgZGFucyBmb3llciBkcm9pdCBvdXZlcnQgZXQgdmVyc2FibGU8L3A+XG4gICAgICAgICAgICAgIDxwPk5vbWJyZSBkZSBwZXJzb25uZXMgZG9udCBsYSBiYWxpc2UgVE9QUEVSU0RST0RFVk9SU0E9MSBwcsOpc2VudHMgZGFucyBkZXMgZm95ZXJzIGRvbnQgbGEgYmFsaXNlIEVUQVRET1NSU0E9MjwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnN1YnRpdGxlfT5cbiAgICAgICAgICAgIEhpc3RvcmlxdWVcbiAgICAgICAgICA8L2gyPlxuXG4gICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT17c3R5bGVzLm1hcmdpbl9zaWRlfT5cbiAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPjwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+RmljaGllcjwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+RGF0ZTwvdGg+XG4gICAgICAgICAgICAgICAgeyBkZXZNb2RlICYmIDx0aCByb3dTcGFuPVwiMlwiPlRhaWxsZTwvdGg+fVxuICAgICAgICAgICAgICAgIHsgZGV2TW9kZSAmJiA8dGggcm93U3Bhbj1cIjJcIj5EdXLDqWU8YnIvPihlbiBzKTwvdGg+fVxuICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPkRhdGUgZHUgZmljaGllcjwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+RnLDqXF1ZW5jZTwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+TmF0dXJlPC90aD5cbiAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5Eb3NzaWVyczwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+RMOpdGFpbHM8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPkVycmV1cjwvdGg+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgIHtydW5zLm1hcCgociwgaSkgPT4gKDx0ciBrZXk9e2Ake3IudGltZXN0YW1wfS0ke3IuZmlsZW5hbWV9LSR7ci5zZWVkfWAgfSBzdHlsZT17IGkgPT0gZGF0ZURhdGEuaW5kZXggPyB7YmFja2dyb3VuZENvbG9yOiAnbGlnaHRncmV5J306IHt9IH0+XG4gICAgICAgICAgICAgICAgPHRkPntydW5zLmxlbmd0aCAtIGl9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e3IuZmlsZW5hbWV9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e3IudGltZXN0YW1wfTwvdGQ+XG4gICAgICAgICAgICAgICAgeyBkZXZNb2RlICYmIDx0ZD57ci5maWxlU2l6ZX08L3RkPn1cbiAgICAgICAgICAgICAgICB7IGRldk1vZGUgJiYgPHRkPnshaXNOYU4oci5kdXJhdGlvbikgPyByLmR1cmF0aW9uLzEwMDAgOiBcIiNOL0FcIn08L3RkPn1cbiAgICAgICAgICAgICAgICA8dGQ+e3IuZmlsZURhdGV0aW1lfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPntgJHtyLmZyZXF1ZW5jeX0gKCR7ZnJlcXVlbmN5TmFtZXNbci5mcmVxdWVuY3ldIHx8ICc/J30pYH08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57YCR7ci50eXBlfSAoJHt0eXBlTmFtZXNbci50eXBlXSB8fCAnPyd9KWB9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMubnVtZXJpY30+e3IudG90YWx9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwic2hyaW5rXCI+PGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVEYXRlSGlzdG9ncmFtfSBkYXRhLWluZGV4PXtpfT5BZmZpY2hlciBwYXIgZGF0ZTwvYnV0dG9uPjwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPntyLmVycm9yID8gJ091aScgOiAnTm9uJ308L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgIDwvdGFibGU+XG5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoUnVucyh7dHlwZTogJ3Jlc2V0J30pfSBjbGFzc05hbWU9e3N0eWxlcy5tYXJnaW5fYm90dG9tfT5WaWRlciBsJ2hpc3RvcmlxdWU8L2J1dHRvbj5cbiAgICAgICAgPC8+KX1cblxuICAgICAgICB7cnVucy5sZW5ndGggIT0gMCAmJiAoPHAgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+XG4gICAgICAgIFZvdXMgcG91dmV6IGFjY8OpZGVyIMOgIHVuZSByZXByw6lzZW50YXRpb24gZ3JhcGhpcXVlIGRlIGxhIHLDqXBhcnRpdGlvbiBkYW5zIGxlcyB0ZW1wcyBkZXMgZGVtYW5kZXMgY29ubnVlcyBkYW5zIGxlcyBmaWNoaWVycyBhbmFseXPDqXMuIFBvdXIgY2VsYSBpbCBmYXV0IGNsaXF1ZXIgc3VyIGxlIGJvdXRvbiDCqyBBZmZpY2hlciBwYXIgZGF0ZSDCuy5cbiAgICAgICAgICA8L3A+KX1cblxuICAgICAgICB7ZGF0ZURhdGEuaW5kZXggIT0gdW5kZWZpbmVkICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnN1YnRpdGxlfT5cbiAgICAgICAgICAgICAgTm9tYnJlIGRlIGRvc3NpZXJzIGFzc29jacOpcyDDoCBkZXMgZGVtYW5kZXMgcsOpYWxpc8OpcyDDoCBjaGFxdWUgZGF0ZVxuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6ICgyNTAqZGF0ZURhdGEueWVhckNvdW50KSArIFwicHhcIiwgd2lkdGg6IFwiMTAwJVwifX0+XG4gICAgICAgICAgICAgIHtSZXNwb25zaXZlQ2FsZW5kYXIoZGF0ZURhdGEpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG5cbiAgICAgICAgPEZvb3RlclxuICAgICAgICAgIHN1YmplY3Q9XCJGbHV4IGLDqW7DqWZpY2lhaXJlIENOQUZcIlxuICAgICAgICAgIHBvdXJxdW9pPVwiUG91cnF1b2kgdW4gbGVjdGV1ciBkZSBmaWNoaWVyIENOQUYmbmJzcDs/XCJcbiAgICAgICAgICB0ZXh0PXs8PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+VG91cyBsZXMgZMOpcGFydGVtZW50cyBuJ29udCBwYXMgbGVzIG91dGlscyBwb3VyIGFuYWx5c2VyIGxlcyBmaWNoaWVycyBlbnZvecOpcyBwYXIgbGEgQ05BRi4gQ2VsYSBwZXV0IHJhbGVudGlyIGV0IGNvbXBsaXF1ZXIgbm9zIMOpY2hhbmdlcy48L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5BdmVjIGNldCBvdXRpbCwgbm91cyBzb3VoYWl0b25zIHBlcm1ldHRyZSBhdXggcGVyc29ubmVzIHF1aSBvbnQgYWNjw6hzIMOgIGNlcyBmaWNoaWVycyBkJ2VuIGV4dHJhaXJlIGRlcyBzdGF0aXN0aXF1ZXMgZ8OpbsOpcmFsZXMgc2FucyBhdm9pciDDoCBtZXR0cmUgbGVzIG1haW5zIGRhbnMgbGUgY2FtYm91aSBlbGxlcy1tw6ptZS48L3A+XG4gICAgICAgICAgPC8+fVxuICAgICAgICAvPlxuICAgICAgPC9tYWluPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9