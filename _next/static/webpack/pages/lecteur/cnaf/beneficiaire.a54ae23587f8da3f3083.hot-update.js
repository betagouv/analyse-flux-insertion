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
    fileHandler: fileHandler,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbGVjdGV1ci9jbmFmL2JlbmVmaWNpYWlyZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJyZWR1Y2VyIiwicmVkdWNlckZhY3RvcnkiLCJkZXZNb2RlIiwiQmVuZWZpY2lhaXJlIiwidXNlU3RhdGUiLCJkZXZGaWxlIiwic2V0RGV2RmlsZSIsInVzZVJlZHVjZXIiLCJpbml0UmVkdWNlciIsInJ1bnMiLCJkaXNwYXRjaFJ1bnMiLCJpc1BlbmRpbmciLCJzZXRJc1BlbmRpbmciLCJmaWxlU2l6ZSIsInNldEZpbGVTaXplIiwia2V5c0Ryb2l0cyIsInNldEtleXNEcm9pdHMiLCJrZXlzRGV2b2lycyIsInNldEtleXNEZXZvaXJzIiwiaW5kZXgiLCJ1bmRlZmluZWQiLCJkYXRhIiwiZnJvbSIsInRvIiwiZGF0ZURhdGEiLCJzZXREYXRlRGF0YSIsImhhbmRsZU5ld1J1bnMiLCJ1c2VDYWxsYmFjayIsInR5cGUiLCJmb2xkZXJzIiwidXNlRWZmZWN0IiwiZmlsZUhhbmRsZXIiLCJoYW5kbGVEYXRlSGlzdG9ncmFtIiwiZXZlbnQiLCJzaG93RGF0ZUhpc3RvZ3JhbSIsInBhcnNlSW50IiwidGFyZ2V0IiwiZGF0YXNldCIsInNvdXJjZSIsImRhdGVzIiwiT2JqZWN0Iiwia2V5cyIsIm1pbkRhdGUiLCJtYXhEYXRlIiwibWFwIiwiZCIsImRhdGUiLCJEYXRlIiwiZGF5IiwidG9JU09TdHJpbmciLCJzbGljZSIsInZhbHVlIiwieWVhckNvdW50IiwiZ2V0WWVhciIsImZpbGUiLCJzaXplIiwic3RhcnRfdGltZSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJwYXJzZXIiLCJET01QYXJzZXIiLCJkb20iLCJwYXJzZUZyb21TdHJpbmciLCJyZXN1bHQiLCJkZXNjIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJmcmVxdWVuY3kiLCJpbm5lckhUTUwiLCJkdCIsInRpbWUiLCJwcm9jZXNzRmllbGQiLCJhY2N1bSIsIkFycmF5IiwicGVvcGxlIiwiaSIsInJlZHVjZSIsImRyb2l0cyIsIm5ld0tleXNEcm9pdHMiLCJjb25jYXQiLCJTZXQiLCJkZXZvaXJzIiwibmV3S2V5c0Rldm9pcnMiLCJmb2xkZXJzRHJvaXRzT3V2ZXJ0cyIsImZpbHRlciIsIml0ZW1zIiwiZmxhdCIsImRyb2l0c0V0RGV2b2lycyIsIml0ZW0iLCJzZWVkIiwiTWF0aCIsInJhbmRvbSIsInRpbWVzdGFtcCIsImR1cmF0aW9uIiwiZmlsZW5hbWUiLCJuYW1lIiwiZmlsZURhdGV0aW1lIiwiZXJyb3IiLCJhY3RpdmVFbGVtZW50Iiwibm9kZU5hbWUiLCJ0b3RhbCIsImxlbmd0aCIsInJlYWRBc1RleHQiLCJzdHlsZXMiLCJjb250YWluZXIiLCJtYWluIiwidGl0bGUiLCJzdWJ0aXRsZSIsIm1hcmdpbl9zaWRlIiwiayIsInIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjZW50ZXIiLCJsZWdlbmRlIiwibGVnZW5kZV9ib3giLCJsZWdlbmRlX3RpdGxlIiwiYm9sZCIsImlzTmFOIiwiZnJlcXVlbmN5TmFtZXMiLCJ0eXBlTmFtZXMiLCJudW1lcmljIiwibWFyZ2luX2JvdHRvbSIsInRleHQiLCJoZWlnaHQiLCJ3aWR0aCIsIlJlc3BvbnNpdmVDYWxlbmRhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQSxJQUFNQSxPQUFPLEdBQUdDLHVFQUFjLENBQUMsNEJBQUQsQ0FBOUI7QUFDQSxJQUFNQyxPQUFPLE9BQWI7QUFFZSxTQUFTQyxZQUFULEdBQXdCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ1BDLHNEQUFRLENBQUMsSUFBRCxDQUREO0FBQUEsTUFDOUJDLE9BRDhCO0FBQUEsTUFDckJDLFVBRHFCOztBQUFBLG9CQUVSQyx3REFBVSxDQUFDUCxPQUFELEVBQVUsRUFBVixFQUFjUSw0REFBZCxDQUZGO0FBQUEsTUFFOUJDLElBRjhCO0FBQUEs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LGlCQUNDO0FBQUEsZ0NBQ0U7QUFBSSxtQkFBUyxFQUFFbUYsK0RBQU0sQ0FBQ0ksUUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFJRTtBQUFLLGVBQUssRUFBRTtBQUFDZ0Isa0JBQU0sRUFBRyxNQUFJbkcsUUFBUSxDQUFDNEIsU0FBZCxHQUEyQixJQUFwQztBQUEwQ3dFLGlCQUFLLEVBQUU7QUFBakQsV0FBWjtBQUFBLG9CQUNHQyxpRUFBa0IsQ0FBQ3JHLFFBQUQ7QUFEckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRjtBQUFBLHNCQWxISixlQTRIRSxxRUFBQywwREFBRDtBQUNFLGVBQU8sRUFBQyw4QkFEVjtBQUVFLGdCQUFRLEVBQUMsMENBRlg7QUFHRSxZQUFJLGVBQUU7QUFBQSxrQ0FDSjtBQUFHLHFCQUFTLEVBQUUrRSwrREFBTSxDQUFDbUIsSUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREksZUFFSjtBQUFHLHFCQUFTLEVBQUVuQiwrREFBTSxDQUFDbUIsSUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkk7QUFBQTtBQUhSO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E1SEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUEwSUQ7O0dBaFN1QnZILFk7O0tBQUFBLFkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbGVjdGV1ci9jbmFmL2JlbmVmaWNpYWlyZS5hNTRhZTIzNTg3ZjhkYTNmMzA4My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVkdWNlciwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBBZG1pbiBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL2FkbWluJ1xuaW1wb3J0IFJlc3BvbnNpdmVDYWxlbmRhciBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL2NoYXJ0J1xuaW1wb3J0IEZpbGVIYW5kbGVyIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvZmlsZSdcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9mb290ZXInXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0J1xuaW1wb3J0IHsgZnJlcXVlbmN5TmFtZXMsIHR5cGVOYW1lcyB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9jbmFmJ1xuaW1wb3J0IHsgaW5pdFJlZHVjZXIsIHJlZHVjZXJGYWN0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL2hpc3RvcmlxdWUnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uLy4uLy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5cblxuXG5jb25zdCByZWR1Y2VyID0gcmVkdWNlckZhY3RvcnkoJ1Rlc3QgLSBDTkFGIC0gQsOpbsOpZmljaWFpcmUnKVxuY29uc3QgZGV2TW9kZSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09ICdkZXZlbG9wbWVudCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmVuZWZpY2lhaXJlKCkge1xuICBjb25zdCBbZGV2RmlsZSwgc2V0RGV2RmlsZV0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbcnVucywgZGlzcGF0Y2hSdW5zXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgW10sIGluaXRSZWR1Y2VyKVxuICBjb25zdCBbaXNQZW5kaW5nLCBzZXRJc1BlbmRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZmlsZVNpemUsIHNldEZpbGVTaXplXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBba2V5c0Ryb2l0cywgc2V0S2V5c0Ryb2l0c10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtrZXlzRGV2b2lycywgc2V0S2V5c0Rldm9pcnNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbZGF0ZURhdGEsIHNldERhdGVEYXRhXSA9IHVzZVN0YXRlKHtcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGRhdGE6IFtdLFxuICAgIGZyb206IFwiMjAxNi0wMy0wMVwiLFxuICAgIHRvOiBcIjIwMjEtMDMtMDFcIixcbiAgfSlcblxuICBjb25zdCBoYW5kbGVOZXdSdW5zID0gdXNlQ2FsbGJhY2soZGF0YSA9PiB7XG4gICAgZGlzcGF0Y2hSdW5zKHtcbiAgICAgIHR5cGU6ICdyZXNldCcsXG4gICAgICBmb2xkZXJzOiBkYXRhXG4gICAgfSlcbiAgfSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmKGRldkZpbGUpIHtcbiAgICAgIGZpbGVIYW5kbGVyKGRldkZpbGUpXG4gICAgfVxuICB9LCBbZGV2RmlsZV0pXG5cbiAgY29uc3QgaGFuZGxlRGF0ZUhpc3RvZ3JhbSA9IHVzZUNhbGxiYWNrKGV2ZW50ID0+IHNob3dEYXRlSGlzdG9ncmFtKHBhcnNlSW50KGV2ZW50LnRhcmdldC5kYXRhc2V0LmluZGV4KSkpXG4gIGNvbnN0IHNob3dEYXRlSGlzdG9ncmFtID0gdXNlQ2FsbGJhY2soaW5kZXggPT4ge1xuICAgIGNvbnN0IHNvdXJjZSA9IHJ1bnNbaW5kZXhdXG5cbiAgICBjb25zdCBkYXRlcyA9IE9iamVjdC5rZXlzKHNvdXJjZS5kYXRlcylcbiAgICBsZXQgbWluRGF0ZSA9IG51bGxcbiAgICBsZXQgbWF4RGF0ZSA9IG51bGxcblxuICAgIGNvbnN0IGRhdGEgPSBkYXRlcy5tYXAoZCA9PiB7XG4gICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKGQpXG4gICAgICBpZiAoIW1pbkRhdGUpIHtcbiAgICAgICAgbWluRGF0ZSA9IGRhdGVcbiAgICAgICAgbWF4RGF0ZSA9IGRhdGVcbiAgICAgIH0gZWxzZSBpZiAoZGF0ZSA8IG1pbkRhdGUpIHtcbiAgICAgICAgbWluRGF0ZSA9IGRhdGVcbiAgICAgIH0gZWxzZSBpZiAobWF4RGF0ZSA8IGRhdGUpIHtcbiAgICAgICAgbWF4RGF0ZSA9IGRhdGVcbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRheTogZGF0ZS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKSxcbiAgICAgICAgdmFsdWU6IHNvdXJjZS5kYXRlc1tkXVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCB5ZWFyQ291bnQgPSBtYXhEYXRlLmdldFllYXIoKSAtIG1pbkRhdGUuZ2V0WWVhcigpICsgMVxuICAgIHNldERhdGVEYXRhKHtcbiAgICAgIGluZGV4LFxuICAgICAgZGF0YSxcbiAgICAgIGZyb206IG1pbkRhdGUudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCksXG4gICAgICB0bzogbWF4RGF0ZS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKSxcbiAgICAgIHllYXJDb3VudCxcbiAgICB9KVxuICB9KVxuXG4gIGNvbnN0IGZpbGVIYW5kbGVyID0gKGZpbGUpID0+IHtcbiAgICBpZiAoZGV2TW9kZSAmJiBmaWxlICE9IGRldkZpbGUpIHtcbiAgICAgIHNldERldkZpbGUoZmlsZSlcbiAgICB9XG4gICAgc2V0RmlsZVNpemUoZmlsZS5zaXplKTtcbiAgICBzZXRJc1BlbmRpbmcodHJ1ZSk7XG4gICAgY29uc3Qgc3RhcnRfdGltZSA9IG5ldyBEYXRlKCk7XG5cbiAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgY29uc3QgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpXG4gICAgICBjb25zdCBkb20gPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKGV2ZW50LnRhcmdldC5yZXN1bHQsIFwiYXBwbGljYXRpb24veG1sXCIpXG5cbiAgICAgIGNvbnN0IGRlc2MgPSBkb20uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ0lkZW50aWZpY2F0aW9uRmx1eCcpWzBdXG4gICAgICBjb25zdCBmcmVxdWVuY3kgPSBkZXNjLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdUWVBFRkxVWCcpWzBdLmlubmVySFRNTFxuICAgICAgY29uc3QgdHlwZSA9IGRlc2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ05BVEZMVVgnKVswXS5pbm5lckhUTUxcbiAgICAgIGNvbnN0IGR0ID0gZGVzYy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnRFRDUkVBRkxVWCcpWzBdLmlubmVySFRNTFxuICAgICAgY29uc3QgdGltZSA9IGRlc2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ0hFVUNSRUFGTFVYJylbMF0uaW5uZXJIVE1MXG5cbiAgICAgIGNvbnN0IHByb2Nlc3NGaWVsZCA9IChhY2N1bSwgdmFsdWUpID0+IHtcbiAgICAgICAgICBpZiAodmFsdWVbMF0pIHtcbiAgICAgICAgICAgIGFjY3VtW3ZhbHVlWzBdLmlubmVySFRNTF0gPSAoYWNjdW1bdmFsdWVbMF0uaW5uZXJIVE1MXSB8fCAwKSArIDFcbiAgICAgICAgICAgIGFjY3VtW1wiVG90YWxcIl0gPSAoYWNjdW1bXCJUb3RhbFwiXSB8fCAwKSArIDFcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGFjY3VtXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGZvbGRlcnMgPSBuZXcgQXJyYXkoLi4uZG9tLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdJbmZvc0ZveWVyUlNBJykpXG4gICAgICBjb25zdCBwZW9wbGUgPSBuZXcgQXJyYXkoLi4uZG9tLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdQZXJzb25uZScpKVxuXG4gICAgICBjb25zdCBkYXRlcyA9IGZvbGRlcnNcbiAgICAgICAgLm1hcChpID0+IGkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ0RUREVNUlNBJylbMF0uaW5uZXJIVE1MKVxuICAgICAgICAucmVkdWNlKChhY2N1bSwgdmFsdWUpID0+IHtcbiAgICAgICAgICBhY2N1bVt2YWx1ZV0gPSAoYWNjdW1bdmFsdWVdIHx8IDAgKSArIDFcbiAgICAgICAgICByZXR1cm4gYWNjdW1cbiAgICAgICAgfSwge30pXG5cbiAgICAgIGNvbnN0IGRyb2l0cyA9IGZvbGRlcnNcbiAgICAgICAgLm1hcChpID0+IGkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ0VUQVRET1NSU0EnKSlcbiAgICAgICAgLnJlZHVjZShwcm9jZXNzRmllbGQsIHt9KVxuICAgICAgbGV0IG5ld0tleXNEcm9pdHMgPSBrZXlzRHJvaXRzLmNvbmNhdChPYmplY3Qua2V5cyhkcm9pdHMpKTtcbiAgICAgIG5ld0tleXNEcm9pdHMgPSBBcnJheS5mcm9tKG5ldyBTZXQobmV3S2V5c0Ryb2l0cykpXG4gICAgICBzZXRLZXlzRHJvaXRzKG5ld0tleXNEcm9pdHMpXG5cbiAgICAgIGNvbnN0IGRldm9pcnMgPSBwZW9wbGVcbiAgICAgICAgLm1hcChpID0+IGkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ1RPUFBFUlNEUk9ERVZPUlNBJykpXG4gICAgICAgIC5yZWR1Y2UocHJvY2Vzc0ZpZWxkLCB7fSlcbiAgICAgIGNvbnN0IG5ld0tleXNEZXZvaXJzID0ga2V5c0Rldm9pcnMuY29uY2F0KE9iamVjdC5rZXlzKGRldm9pcnMpKTtcbiAgICAgIHNldEtleXNEZXZvaXJzKEFycmF5LmZyb20obmV3IFNldChuZXdLZXlzRGV2b2lycykpKVxuXG4gICAgICBjb25zdCBmb2xkZXJzRHJvaXRzT3V2ZXJ0cyA9IGZvbGRlcnNcbiAgICAgICAgLmZpbHRlcihpID0+IGkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ0VUQVRET1NSU0EnKVswXS5pbm5lckhUTUwgPT0gXCIyXCIpXG4gICAgICAgIC5tYXAoaSA9PiB7XG4gICAgICAgICAgbGV0IGl0ZW1zID0gaS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnUGVyc29ubmUnKVxuICAgICAgICAgIHJldHVybiBbLi4uaXRlbXNdXG4gICAgICAgIH0pXG4gICAgICAgIC5mbGF0KClcblxuICAgICAgY29uc3QgZHJvaXRzRXREZXZvaXJzID0gZm9sZGVyc0Ryb2l0c091dmVydHNcbiAgICAgICAgLm1hcChpID0+IGkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ1RPUFBFUlNEUk9ERVZPUlNBJykpXG4gICAgICAgIC5yZWR1Y2UocHJvY2Vzc0ZpZWxkLCB7fSlcblxuICAgICAgc2V0SXNQZW5kaW5nKGZhbHNlKTtcblxuICAgICAgZGlzcGF0Y2hSdW5zKHtcbiAgICAgICAgdHlwZTogJ2FwcGVuZCcsXG4gICAgICAgIGl0ZW06IHtcbiAgICAgICAgICBzZWVkOiBNYXRoLnJhbmRvbSgpLFxuICAgICAgICAgIHRpbWVzdGFtcDogKG5ldyBEYXRlKCkpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTkpLFxuICAgICAgICAgIGR1cmF0aW9uOiAobmV3IERhdGUoKSkgLSBzdGFydF90aW1lLFxuICAgICAgICAgIGZpbGVuYW1lOiBmaWxlLm5hbWUsXG4gICAgICAgICAgZmlsZURhdGV0aW1lOiBgJHtkdH0tJHt0aW1lfWAsXG4gICAgICAgICAgZnJlcXVlbmN5LFxuICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgLy8gV0lQOiBPSyBzdXIgRmlyZWZveCBLTyBzdXIgQ2hyb21lXG4gICAgICAgICAgZXJyb3I6IGRvbS5hY3RpdmVFbGVtZW50ICYmIGRvbS5hY3RpdmVFbGVtZW50Lm5vZGVOYW1lID09IFwicGFyc2VyZXJyb3JcIixcbiAgICAgICAgICB0b3RhbDogZm9sZGVycy5sZW5ndGgsXG4gICAgICAgICAgZmlsZVNpemU6IGZpbGUuc2l6ZSxcbiAgICAgICAgICBwZW9wbGU6IHBlb3BsZS5sZW5ndGgsXG4gICAgICAgICAgZGF0ZXMsXG4gICAgICAgICAgZGV2b2lycyxcbiAgICAgICAgICBkcm9pdHMsXG4gICAgICAgICAgZHJvaXRzRXREZXZvaXJzXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIHJlYWRlci5yZWFkQXNUZXh0KGZpbGUpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfSBmaWxlSGFuZGxlcj17ZmlsZUhhbmRsZXJ9PlxuICAgICAgPEFkbWluIGNhdGVnb3J5PVwiQsOpbsOpZmljaWFpcmVcIiBvblJ1blJlZnJlc2g9e2hhbmRsZU5ld1J1bnN9Lz5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxuICAgICAgICAgIExlY3RldXIgZGUgZmljaGllcjxici8+wqsgQsOpbsOpZmljaWFpcmUgwrsgZGUgbGEgQ05BRlxuICAgICAgICA8L2gxPlxuXG4gICAgICAgIDxGaWxlSGFuZGxlciBmaWxlSGFuZGxlcj17ZmlsZUhhbmRsZXJ9IGlzUGVuZGluZz17aXNQZW5kaW5nfSBmaWxlU2l6ZT17ZmlsZVNpemV9IC8+XG5cbiAgICAgICAgeyBydW5zICYmIHJ1bnMubGVuZ3RoID4gMCAmJiAoPD5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuc3VidGl0bGV9PlxuICAgICAgICAgICAgU3RhdGlzdGlxdWVzIGRyb2l0cyAmIGRldm9pcnNcbiAgICAgICAgICA8L2gyPlxuXG4gICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT17c3R5bGVzLm1hcmdpbl9zaWRlfT5cbiAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPjwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+RG9zc2llcnMgKEZveWVycyk8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPlBlcnNvbm5lczwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIGNvbFNwYW49e2tleXNEcm9pdHMubGVuZ3RofT5WYWxldXJzIGJhbGlzZXMgRVRBVERPU1JTQTwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIGNvbFNwYW49e2tleXNEZXZvaXJzLmxlbmd0aH0+VmFsZXVycyBiYWxpc2VzIFRPUFBFUlNEUk9ERVZPUlNBPC90aD5cbiAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5QZXJzb25uZXMgc291bWlzZXMgZHJvaXRzIGV0IGRldm9pcnMgZGFucyBmb3llciBkcm9pdCBvdXZlcnQgZXQgdmVyc2FibGU8L3RoPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAge2tleXNEcm9pdHMubWFwKGsgPT4gPHRoIGtleT17a30gY29sU3Bhbj1cIjFcIj57a308L3RoPil9XG4gICAgICAgICAgICAgICAge2tleXNEZXZvaXJzLm1hcChrID0+IDx0aCBrZXk9e2t9IGNvbFNwYW49XCIxXCI+e2t9PC90aD4pfVxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAge3J1bnMubWFwKChyLCBpKSA9PiAoPHRyIGtleT17YCR7ci50aW1lc3RhbXB9LSR7ci5maWxlbmFtZX0tJHtyLnNlZWR9LTBgIH0gc3R5bGU9eyBpID09IGRhdGVEYXRhLmluZGV4ID8ge2JhY2tncm91bmRDb2xvcjogJ2xpZ2h0Z3JleSd9OiB7fSB9PlxuICAgICAgICAgICAgICAgIDx0ZD57cnVucy5sZW5ndGggLSBpfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+e3IudG90YWx9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT57ci5wZW9wbGV9PC90ZD5cbiAgICAgICAgICAgICAgICB7a2V5c0Ryb2l0cy5tYXAoayA9PiA8dGQga2V5PXtrfSBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9PntyLmRyb2l0c1trXSB8fCAwfTwvdGQ+KX1cbiAgICAgICAgICAgICAgICB7a2V5c0Rldm9pcnMubWFwKGsgPT4gPHRkIGtleT17a30gY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT57ci5kZXZvaXJzW2tdIHx8IDB9PC90ZD4pfVxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9PntyLmRyb2l0c0V0RGV2b2lyc1sxXSB8fCAwfTwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICApKX1cblxuICAgICAgICAgICAgICA8dHI+XG5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgPC90YWJsZT5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGVnZW5kZX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxlZ2VuZGVfYm94fT5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMubGVnZW5kZV90aXRsZX0+TMOpZ2VuZGUmbmJzcDs6PC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5ib2xkfT5WYWxldXIgYmFsaXNlIEVUQVRET1NSU0E8L3A+XG4gICAgICAgICAgICAgIDxwPjA9Tm91dmVsbGUgZGVtYW5kZSBlbiBhdHRlbnRlIGRlIGTDqWNpc2lvbiBDRyBwb3VyIG91dmVydHVyZSBkdSBkcm9pdDxici8+XG4gICAgICAgICAgICAgIDE9RHJvaXQgcmVmdXPDqTxici8+XG4gICAgICAgICAgICAgIDI9RHJvaXQgb3V2ZXJ0IGV0IHZlcnNhYmxlPGJyLz5cbiAgICAgICAgICAgICAgMz1Ecm9pdCBvdXZlcnQgZXQgc3VzcGVuZHUgKGxlIG1vbnRhbnQgZHUgZHJvaXQgZXN0IGNhbGN1bGFibGUsIG1haXMgbCdleGlzdGVuY2UgZHUgZHJvaXQgZXN0IHJlbWlzIGVuIGNhdXNlKTxici8+XG4gICAgICAgICAgICAgIDQ9RHJvaXQgb3V2ZXJ0IG1haXMgdmVyc2VtZW50IHN1c3BlbmR1IChsZSBtb250YW50IGR1IGRyb2l0IG4nZXN0IHBhcyBjYWxjdWxhYmxlKTxici8+XG4gICAgICAgICAgICAgIDU9RHJvaXQgY2xvczxici8+XG4gICAgICAgICAgICAgIDY9RHJvaXQgY2xvcyBzdXIgbW9pcyBhbnTDqXJpZXVyIGF5YW50IGV1IHVuIGNvbnRyw7RsZSBkYW5zIGxlIG1vaXMgZGUgcsOpZsOpcmVuY2UgcG91ciB1bmUgcMOpcmlvZGUgYW50w6lyaWV1cmUuPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxlZ2VuZGVfYm94fT5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuYm9sZH0+VmFsZXVyIGJhbGlzZSBUT1BQRVJTRFJPREVWT1JTQTwvcD5cbiAgICAgICAgICAgICAgPHA+MD1QZXJzb25uZSBwYXMgc291bWlzZSDDoCBkcm9pdHMgZXQgZGV2b2lyczxiciAvPlxuICAgICAgICAgICAgICAxPVBlcnNvbm5lIHNvdW1pc2Ugw6AgZHJvaXRzIGV0IGRldm9pcnM8L3A+XG4gICAgICAgICAgICAgIDxwPiZuYnNwOzwvcD5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuYm9sZH0+UGVyc29ubmVzIHNvdW1pc2VzIGRyb2l0cyBldCBkZXZvaXJzIGRhbnMgZm95ZXIgZHJvaXQgb3V2ZXJ0IGV0IHZlcnNhYmxlPC9wPlxuICAgICAgICAgICAgICA8cD5Ob21icmUgZGUgcGVyc29ubmVzIGRvbnQgbGEgYmFsaXNlIFRPUFBFUlNEUk9ERVZPUlNBPTEgcHLDqXNlbnRzIGRhbnMgZGVzIGZveWVycyBkb250IGxhIGJhbGlzZSBFVEFURE9TUlNBPTI8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5zdWJ0aXRsZX0+XG4gICAgICAgICAgICBIaXN0b3JpcXVlXG4gICAgICAgICAgPC9oMj5cblxuICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9e3N0eWxlcy5tYXJnaW5fc2lkZX0+XG4gICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj48L3RoPlxuICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPkZpY2hpZXI8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPkRhdGU8L3RoPlxuICAgICAgICAgICAgICAgIHsgZGV2TW9kZSAmJiA8dGggcm93U3Bhbj1cIjJcIj5UYWlsbGU8L3RoPn1cbiAgICAgICAgICAgICAgICB7IGRldk1vZGUgJiYgPHRoIHJvd1NwYW49XCIyXCI+RHVyw6llPGJyLz4oZW4gcyk8L3RoPn1cbiAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5EYXRlIGR1IGZpY2hpZXI8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPkZyw6lxdWVuY2U8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPk5hdHVyZTwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+RG9zc2llcnM8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPkTDqXRhaWxzPC90aD5cbiAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5FcnJldXI8L3RoPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICB7cnVucy5tYXAoKHIsIGkpID0+ICg8dHIga2V5PXtgJHtyLnRpbWVzdGFtcH0tJHtyLmZpbGVuYW1lfS0ke3Iuc2VlZH1gIH0gc3R5bGU9eyBpID09IGRhdGVEYXRhLmluZGV4ID8ge2JhY2tncm91bmRDb2xvcjogJ2xpZ2h0Z3JleSd9OiB7fSB9PlxuICAgICAgICAgICAgICAgIDx0ZD57cnVucy5sZW5ndGggLSBpfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPntyLmZpbGVuYW1lfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPntyLnRpbWVzdGFtcH08L3RkPlxuICAgICAgICAgICAgICAgIHsgZGV2TW9kZSAmJiA8dGQ+e3IuZmlsZVNpemV9PC90ZD59XG4gICAgICAgICAgICAgICAgeyBkZXZNb2RlICYmIDx0ZD57IWlzTmFOKHIuZHVyYXRpb24pID8gci5kdXJhdGlvbi8xMDAwIDogXCIjTi9BXCJ9PC90ZD59XG4gICAgICAgICAgICAgICAgPHRkPntyLmZpbGVEYXRldGltZX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57YCR7ci5mcmVxdWVuY3l9ICgke2ZyZXF1ZW5jeU5hbWVzW3IuZnJlcXVlbmN5XSB8fCAnPyd9KWB9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e2Ake3IudHlwZX0gKCR7dHlwZU5hbWVzW3IudHlwZV0gfHwgJz8nfSlgfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLm51bWVyaWN9PntyLnRvdGFsfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInNocmlua1wiPjxidXR0b24gb25DbGljaz17aGFuZGxlRGF0ZUhpc3RvZ3JhbX0gZGF0YS1pbmRleD17aX0+QWZmaWNoZXIgcGFyIGRhdGU8L2J1dHRvbj48L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57ci5lcnJvciA/ICdPdWknIDogJ05vbid9PC90ZD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICA8L3RhYmxlPlxuXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaFJ1bnMoe3R5cGU6ICdyZXNldCd9KX0gY2xhc3NOYW1lPXtzdHlsZXMubWFyZ2luX2JvdHRvbX0+VmlkZXIgbCdoaXN0b3JpcXVlPC9idXR0b24+XG4gICAgICAgIDwvPil9XG5cbiAgICAgICAge3J1bnMubGVuZ3RoICE9IDAgJiYgKDxwIGNsYXNzTmFtZT17c3R5bGVzLnRleHR9PlxuICAgICAgICBWb3VzIHBvdXZleiBhY2PDqWRlciDDoCB1bmUgcmVwcsOpc2VudGF0aW9uIGdyYXBoaXF1ZSBkZSBsYSByw6lwYXJ0aXRpb24gZGFucyBsZXMgdGVtcHMgZGVzIGRlbWFuZGVzIGNvbm51ZXMgZGFucyBsZXMgZmljaGllcnMgYW5hbHlzw6lzLiBQb3VyIGNlbGEgaWwgZmF1dCBjbGlxdWVyIHN1ciBsZSBib3V0b24gwqsgQWZmaWNoZXIgcGFyIGRhdGUgwrsuXG4gICAgICAgICAgPC9wPil9XG5cbiAgICAgICAge2RhdGVEYXRhLmluZGV4ICE9IHVuZGVmaW5lZCAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5zdWJ0aXRsZX0+XG4gICAgICAgICAgICAgIE5vbWJyZSBkZSBkb3NzaWVycyBhc3NvY2nDqXMgw6AgZGVzIGRlbWFuZGVzIHLDqWFsaXPDqXMgw6AgY2hhcXVlIGRhdGVcbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7aGVpZ2h0OiAoMjUwKmRhdGVEYXRhLnllYXJDb3VudCkgKyBcInB4XCIsIHdpZHRoOiBcIjEwMCVcIn19PlxuICAgICAgICAgICAgICB7UmVzcG9uc2l2ZUNhbGVuZGFyKGRhdGVEYXRhKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuXG4gICAgICAgIDxGb290ZXJcbiAgICAgICAgICBzdWJqZWN0PVwiRmx1eCBiw6luw6lmaWNpYWlyZSBDTkFGXCJcbiAgICAgICAgICBwb3VycXVvaT1cIlBvdXJxdW9pIHVuIGxlY3RldXIgZGUgZmljaGllciBDTkFGJm5ic3A7P1wiXG4gICAgICAgICAgdGV4dD17PD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRleHR9PlRvdXMgbGVzIGTDqXBhcnRlbWVudHMgbidvbnQgcGFzIGxlcyBvdXRpbHMgcG91ciBhbmFseXNlciBsZXMgZmljaGllcnMgZW52b3nDqXMgcGFyIGxhIENOQUYuIENlbGEgcGV1dCByYWxlbnRpciBldCBjb21wbGlxdWVyIG5vcyDDqWNoYW5nZXMuPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+QXZlYyBjZXQgb3V0aWwsIG5vdXMgc291aGFpdG9ucyBwZXJtZXR0cmUgYXV4IHBlcnNvbm5lcyBxdWkgb250IGFjY8OocyDDoCBjZXMgZmljaGllcnMgZCdlbiBleHRyYWlyZSBkZXMgc3RhdGlzdGlxdWVzIGfDqW7DqXJhbGVzIHNhbnMgYXZvaXIgw6AgbWV0dHJlIGxlcyBtYWlucyBkYW5zIGxlIGNhbWJvdWkgZWxsZXMtbcOqbWUuPC9wPlxuICAgICAgICAgIDwvPn1cbiAgICAgICAgLz5cbiAgICAgIDwvbWFpbj5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==