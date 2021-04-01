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
      setIsPending(false); // Note pour plus tard :
      // Il pourra être intéressant, dans une seconde itération de recouper TOPPERSDRODEVORSA avec ROLEPERS.
      // Il pourra être intéressant dans une troisième itération de faire le croisement entre ETATDOSRSA d'une part et ( TOPPERSDRODEVORSA / ROLEPERS ) d'autres part mais pour cela il faudra un tableau avec une ligne par valeur de ETATDOSRSA et une colonne par croisement ( TOPPERSDRODEVORSA / ROLEPERS ).

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

  var round = function round(value) {
    return Math.round(value);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_admin__WEBPACK_IMPORTED_MODULE_4__["default"], {
      category: "B\xE9n\xE9ficiaire",
      onRunRefresh: handleNewRuns
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.main,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.title,
        children: ["Lecteur de fichier", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 29
        }, this), "\xAB B\xE9n\xE9ficiaire \xBB de la CNAF"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_file__WEBPACK_IMPORTED_MODULE_6__["default"], {
        fileHandler: fileHandler,
        isPending: isPending,
        fileSize: fileSize
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 9
      }, this), runs && runs.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.subtitle,
          children: "Statistiques droits & devoirs"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.margin_side,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 191,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Dossiers (Foyers)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 192,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Personnes"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 193,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                colSpan: keysDroits.length,
                children: "Valeurs balises ETATDOSRSA"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 194,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                colSpan: keysDevoirs.length,
                children: "Valeurs balises TOPPERSDRODEVORSA"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 195,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Personnes soumises droits et devoirs dans foyer droit ouvert et versable"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 196,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 190,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              children: [keysDroits.map(function (k) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                  colSpan: "1",
                  children: k
                }, k, false, {
                  fileName: _jsxFileName,
                  lineNumber: 199,
                  columnNumber: 38
                }, _this);
              }), keysDevoirs.map(function (k) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                  colSpan: "1",
                  children: k
                }, k, false, {
                  fileName: _jsxFileName,
                  lineNumber: 200,
                  columnNumber: 39
                }, _this);
              })]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 198,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 189,
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
                  lineNumber: 205,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.center,
                  children: r.total
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 206,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.center,
                  children: r.people
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 207,
                  columnNumber: 17
                }, _this), keysDroits.map(function (k) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.center,
                    children: r.droits[k] || 0
                  }, k, false, {
                    fileName: _jsxFileName,
                    lineNumber: 208,
                    columnNumber: 38
                  }, _this);
                }), keysDevoirs.map(function (k) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.center,
                    children: r.devoirs[k] || 0
                  }, k, false, {
                    fileName: _jsxFileName,
                    lineNumber: 209,
                    columnNumber: 39
                  }, _this);
                }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.center,
                  children: r.droitsEtDevoirs[1] || 0
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 210,
                  columnNumber: 17
                }, _this)]
              }, "".concat(r.timestamp, "-").concat(r.filename, "-").concat(r.seed, "-0"), true, {
                fileName: _jsxFileName,
                lineNumber: 204,
                columnNumber: 36
              }, _this);
            }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 214,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 203,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 188,
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
              lineNumber: 222,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.bold,
              children: "Valeur balise ETATDOSRSA"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 223,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: ["0=Nouvelle demande en attente de d\xE9cision CG pour ouverture du droit", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 224,
                columnNumber: 86
              }, this), "1=Droit refus\xE9", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 225,
                columnNumber: 29
              }, this), "2=Droit ouvert et versable", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 226,
                columnNumber: 41
              }, this), "3=Droit ouvert et suspendu (le montant du droit est calculable, mais l'existence du droit est remis en cause)", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 227,
                columnNumber: 124
              }, this), "4=Droit ouvert mais versement suspendu (le montant du droit n'est pas calculable)", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 228,
                columnNumber: 96
              }, this), "5=Droit clos", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 229,
                columnNumber: 27
              }, this), "6=Droit clos sur mois ant\xE9rieur ayant eu un contr\xF4le dans le mois de r\xE9f\xE9rence pour une p\xE9riode ant\xE9rieure."]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 224,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 221,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.legende_box,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.bold,
              children: "Valeur balise TOPPERSDRODEVORSA"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 233,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: ["0=Personne pas soumise \xE0 droits et devoirs", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 234,
                columnNumber: 60
              }, this), "1=Personne soumise \xE0 droits et devoirs"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 234,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "\xA0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 236,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.bold,
              children: "Personnes soumises droits et devoirs dans foyer droit ouvert et versable"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 237,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "Nombre de personnes dont la balise TOPPERSDRODEVORSA=1 pr\xE9sents dans des foyers dont la balise ETATDOSRSA=2"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 238,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 232,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 220,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.subtitle,
          children: "Historique"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 242,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.margin_side,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 249,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Fichier"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 250,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Date"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 251,
                columnNumber: 17
              }, this), devMode && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Taille"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 252,
                columnNumber: 30
              }, this), devMode && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: ["Dur\xE9e", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 253,
                  columnNumber: 51
                }, this), "(en s)"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 253,
                columnNumber: 30
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Date du fichier"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 254,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Fr\xE9quence"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 255,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Nature"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 256,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Dossiers"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 257,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "D\xE9tails"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 258,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Erreur"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 259,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 248,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 261,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 247,
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
                  lineNumber: 266,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: r.filename
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 267,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: r.timestamp
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 268,
                  columnNumber: 17
                }, _this), devMode && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: r.fileSize
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 269,
                  columnNumber: 30
                }, _this), devMode && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: !isNaN(r.duration) ? r.duration / 1000 : "#N/A"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 270,
                  columnNumber: 30
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: r.fileDatetime
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 271,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: "".concat(r.frequency, " (").concat(_lib_cnaf__WEBPACK_IMPORTED_MODULE_9__["frequencyNames"][r.frequency] || '?', ")")
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 272,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: "".concat(r.type, " (").concat(_lib_cnaf__WEBPACK_IMPORTED_MODULE_9__["typeNames"][r.type] || '?', ")")
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 273,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.numeric,
                  children: r.total
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 274,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: "shrink",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                    onClick: handleDateHistogram,
                    "data-index": i,
                    children: "Afficher par date"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 275,
                    columnNumber: 40
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 275,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: r.error ? 'Oui' : 'Non'
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 276,
                  columnNumber: 17
                }, _this)]
              }, "".concat(r.timestamp, "-").concat(r.filename, "-").concat(r.seed), true, {
                fileName: _jsxFileName,
                lineNumber: 265,
                columnNumber: 36
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 264,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 246,
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
          lineNumber: 282,
          columnNumber: 11
        }, this)]
      }, void 0, true), runs.length != 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.text,
        children: "Vous pouvez acc\xE9der \xE0 une repr\xE9sentation graphique de la r\xE9partition dans les temps des demandes connues dans les fichiers analys\xE9s. Pour cela il faut cliquer sur le bouton \xAB Afficher par date \xBB."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 285,
        columnNumber: 31
      }, this), dateData.index != undefined && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.subtitle,
          children: "Nombre de dossiers associ\xE9s \xE0 des demandes r\xE9alis\xE9s \xE0 chaque date"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 291,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            height: 250 * dateData.yearCount + "px",
            width: "100%"
          },
          children: Object(_components_chart__WEBPACK_IMPORTED_MODULE_5__["default"])(dateData)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 294,
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
            lineNumber: 304,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.text,
            children: "Avec cet outil, nous souhaitons permettre aux personnes qui ont acc\xE8s \xE0 ces fichiers d'en extraire des statistiques g\xE9n\xE9rales sans avoir \xE0 mettre les mains dans le camboui elles-m\xEAme."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 305,
            columnNumber: 13
          }, this)]
        }, void 0, true)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 300,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 174,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbGVjdGV1ci9jbmFmL2JlbmVmaWNpYWlyZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJyZWR1Y2VyIiwicmVkdWNlckZhY3RvcnkiLCJkZXZNb2RlIiwiQmVuZWZpY2lhaXJlIiwidXNlU3RhdGUiLCJkZXZGaWxlIiwic2V0RGV2RmlsZSIsInVzZVJlZHVjZXIiLCJpbml0UmVkdWNlciIsInJ1bnMiLCJkaXNwYXRjaFJ1bnMiLCJpc1BlbmRpbmciLCJzZXRJc1BlbmRpbmciLCJmaWxlU2l6ZSIsInNldEZpbGVTaXplIiwia2V5c0Ryb2l0cyIsInNldEtleXNEcm9pdHMiLCJrZXlzRGV2b2lycyIsInNldEtleXNEZXZvaXJzIiwiaW5kZXgiLCJ1bmRlZmluZWQiLCJkYXRhIiwiZnJvbSIsInRvIiwiZGF0ZURhdGEiLCJzZXREYXRlRGF0YSIsImhhbmRsZU5ld1J1bnMiLCJ1c2VDYWxsYmFjayIsInR5cGUiLCJmb2xkZXJzIiwidXNlRWZmZWN0IiwiZmlsZUhhbmRsZXIiLCJoYW5kbGVEYXRlSGlzdG9ncmFtIiwiZXZlbnQiLCJzaG93RGF0ZUhpc3RvZ3JhbSIsInBhcnNlSW50IiwidGFyZ2V0IiwiZGF0YXNldCIsInNvdXJjZSIsImRhdGVzIiwiT2JqZWN0Iiwia2V5cyIsIm1pbkRhdGUiLCJtYXhEYXRlIiwibWFwIiwiZCIsImRhdGUiLCJEYXRlIiwiZGF5IiwidG9JU09TdHJpbmciLCJzbGljZSIsInZhbHVlIiwieWVhckNvdW50IiwiZ2V0WWVhciIsImZpbGUiLCJzaXplIiwic3RhcnRfdGltZSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJwYXJzZXIiLCJET01QYXJzZXIiLCJkb20iLCJwYXJzZUZyb21TdHJpbmciLCJyZXN1bHQiLCJkZXNjIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJmcmVxdWVuY3kiLCJpbm5lckhUTUwiLCJkdCIsInRpbWUiLCJwcm9jZXNzRmllbGQiLCJhY2N1bSIsIkFycmF5IiwicGVvcGxlIiwiaSIsInJlZHVjZSIsImRyb2l0cyIsIm5ld0tleXNEcm9pdHMiLCJjb25jYXQiLCJTZXQiLCJkZXZvaXJzIiwibmV3S2V5c0Rldm9pcnMiLCJmb2xkZXJzRHJvaXRzT3V2ZXJ0cyIsImZpbHRlciIsIml0ZW1zIiwiZmxhdCIsImRyb2l0c0V0RGV2b2lycyIsIml0ZW0iLCJzZWVkIiwiTWF0aCIsInJhbmRvbSIsInRpbWVzdGFtcCIsImR1cmF0aW9uIiwiZmlsZW5hbWUiLCJuYW1lIiwiZmlsZURhdGV0aW1lIiwiZXJyb3IiLCJhY3RpdmVFbGVtZW50Iiwibm9kZU5hbWUiLCJ0b3RhbCIsImxlbmd0aCIsInJlYWRBc1RleHQiLCJyb3VuZCIsInN0eWxlcyIsImNvbnRhaW5lciIsIm1haW4iLCJ0aXRsZSIsInN1YnRpdGxlIiwibWFyZ2luX3NpZGUiLCJrIiwiciIsImJhY2tncm91bmRDb2xvciIsImNlbnRlciIsImxlZ2VuZGUiLCJsZWdlbmRlX2JveCIsImxlZ2VuZGVfdGl0bGUiLCJib2xkIiwiaXNOYU4iLCJmcmVxdWVuY3lOYW1lcyIsInR5cGVOYW1lcyIsIm51bWVyaWMiLCJtYXJnaW5fYm90dG9tIiwidGV4dCIsImhlaWdodCIsIndpZHRoIiwiUmVzcG9uc2l2ZUNhbGVuZGFyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBLElBQU1BLE9BQU8sR0FBR0MsdUVBQWMsQ0FBQyw0QkFBRCxDQUE5QjtBQUNBLElBQU1DLE9BQU8sT0FBYjtBQUVlLFNBQVNDLFlBQVQsR0FBd0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFDUEMsc0RBQVEsQ0FBQyxJQUFELENBREQ7QUFBQSxNQUM5QkMsT0FEOEI7QUFBQSxNQUNyQkMsVUFEcUI7O0FBQUEsb0JBRVJDLHdEQUFVLENBQUNQLE9BQUQsRUFBVSxFQUFWLEVBQWNRLDREQUFkLENBRkY7QUFBQSxNQUU5QkMsSUFG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QjtBQUFHLGlCQUFTLEVBQUVHLCtEQUFNLENBQUNtQixJQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTdHeEIsRUFpSEduRyxRQUFRLENBQUNMLEtBQVQsSUFBa0JDLFNBQWxCLGlCQUNDO0FBQUEsZ0NBQ0U7QUFBSSxtQkFBUyxFQUFFb0YsK0RBQU0sQ0FBQ0ksUUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFJRTtBQUFLLGVBQUssRUFBRTtBQUFDZ0Isa0JBQU0sRUFBRyxNQUFJcEcsUUFBUSxDQUFDNEIsU0FBZCxHQUEyQixJQUFwQztBQUEwQ3lFLGlCQUFLLEVBQUU7QUFBakQsV0FBWjtBQUFBLG9CQUNHQyxpRUFBa0IsQ0FBQ3RHLFFBQUQ7QUFEckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRjtBQUFBLHNCQWxISixlQTRIRSxxRUFBQywwREFBRDtBQUNFLGVBQU8sRUFBQyw4QkFEVjtBQUVFLGdCQUFRLEVBQUMsMENBRlg7QUFHRSxZQUFJLGVBQUU7QUFBQSxrQ0FDSjtBQUFHLHFCQUFTLEVBQUVnRiwrREFBTSxDQUFDbUIsSUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREksZUFFSjtBQUFHLHFCQUFTLEVBQUVuQiwrREFBTSxDQUFDbUIsSUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkk7QUFBQTtBQUhSO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E1SEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUEwSUQ7O0dBdlN1QnhILFk7O0tBQUFBLFkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbGVjdGV1ci9jbmFmL2JlbmVmaWNpYWlyZS40NGY0MDY3MmQwOGU2MjI3NTI3Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVkdWNlciwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBBZG1pbiBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL2FkbWluJ1xuaW1wb3J0IFJlc3BvbnNpdmVDYWxlbmRhciBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL2NoYXJ0J1xuaW1wb3J0IEZpbGVIYW5kbGVyIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvZmlsZSdcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9mb290ZXInXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0J1xuaW1wb3J0IHsgZnJlcXVlbmN5TmFtZXMsIHR5cGVOYW1lcyB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9jbmFmJ1xuaW1wb3J0IHsgaW5pdFJlZHVjZXIsIHJlZHVjZXJGYWN0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL2hpc3RvcmlxdWUnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uLy4uLy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5cblxuXG5jb25zdCByZWR1Y2VyID0gcmVkdWNlckZhY3RvcnkoJ1Rlc3QgLSBDTkFGIC0gQsOpbsOpZmljaWFpcmUnKVxuY29uc3QgZGV2TW9kZSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09ICdkZXZlbG9wbWVudCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmVuZWZpY2lhaXJlKCkge1xuICBjb25zdCBbZGV2RmlsZSwgc2V0RGV2RmlsZV0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbcnVucywgZGlzcGF0Y2hSdW5zXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgW10sIGluaXRSZWR1Y2VyKVxuICBjb25zdCBbaXNQZW5kaW5nLCBzZXRJc1BlbmRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZmlsZVNpemUsIHNldEZpbGVTaXplXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBba2V5c0Ryb2l0cywgc2V0S2V5c0Ryb2l0c10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtrZXlzRGV2b2lycywgc2V0S2V5c0Rldm9pcnNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbZGF0ZURhdGEsIHNldERhdGVEYXRhXSA9IHVzZVN0YXRlKHtcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGRhdGE6IFtdLFxuICAgIGZyb206IFwiMjAxNi0wMy0wMVwiLFxuICAgIHRvOiBcIjIwMjEtMDMtMDFcIixcbiAgfSlcblxuICBjb25zdCBoYW5kbGVOZXdSdW5zID0gdXNlQ2FsbGJhY2soZGF0YSA9PiB7XG4gICAgZGlzcGF0Y2hSdW5zKHtcbiAgICAgIHR5cGU6ICdyZXNldCcsXG4gICAgICBmb2xkZXJzOiBkYXRhXG4gICAgfSlcbiAgfSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmKGRldkZpbGUpIHtcbiAgICAgIGZpbGVIYW5kbGVyKGRldkZpbGUpXG4gICAgfVxuICB9LCBbZGV2RmlsZV0pXG5cbiAgY29uc3QgaGFuZGxlRGF0ZUhpc3RvZ3JhbSA9IHVzZUNhbGxiYWNrKGV2ZW50ID0+IHNob3dEYXRlSGlzdG9ncmFtKHBhcnNlSW50KGV2ZW50LnRhcmdldC5kYXRhc2V0LmluZGV4KSkpXG4gIGNvbnN0IHNob3dEYXRlSGlzdG9ncmFtID0gdXNlQ2FsbGJhY2soaW5kZXggPT4ge1xuICAgIGNvbnN0IHNvdXJjZSA9IHJ1bnNbaW5kZXhdXG5cbiAgICBjb25zdCBkYXRlcyA9IE9iamVjdC5rZXlzKHNvdXJjZS5kYXRlcylcbiAgICBsZXQgbWluRGF0ZSA9IG51bGxcbiAgICBsZXQgbWF4RGF0ZSA9IG51bGxcblxuICAgIGNvbnN0IGRhdGEgPSBkYXRlcy5tYXAoZCA9PiB7XG4gICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKGQpXG4gICAgICBpZiAoIW1pbkRhdGUpIHtcbiAgICAgICAgbWluRGF0ZSA9IGRhdGVcbiAgICAgICAgbWF4RGF0ZSA9IGRhdGVcbiAgICAgIH0gZWxzZSBpZiAoZGF0ZSA8IG1pbkRhdGUpIHtcbiAgICAgICAgbWluRGF0ZSA9IGRhdGVcbiAgICAgIH0gZWxzZSBpZiAobWF4RGF0ZSA8IGRhdGUpIHtcbiAgICAgICAgbWF4RGF0ZSA9IGRhdGVcbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRheTogZGF0ZS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKSxcbiAgICAgICAgdmFsdWU6IHNvdXJjZS5kYXRlc1tkXVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCB5ZWFyQ291bnQgPSBtYXhEYXRlLmdldFllYXIoKSAtIG1pbkRhdGUuZ2V0WWVhcigpICsgMVxuICAgIHNldERhdGVEYXRhKHtcbiAgICAgIGluZGV4LFxuICAgICAgZGF0YSxcbiAgICAgIGZyb206IG1pbkRhdGUudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCksXG4gICAgICB0bzogbWF4RGF0ZS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKSxcbiAgICAgIHllYXJDb3VudCxcbiAgICB9KVxuICB9KVxuXG4gIGNvbnN0IGZpbGVIYW5kbGVyID0gKGZpbGUpID0+IHtcbiAgICBpZiAoZGV2TW9kZSAmJiBmaWxlICE9IGRldkZpbGUpIHtcbiAgICAgIHNldERldkZpbGUoZmlsZSlcbiAgICB9XG4gICAgc2V0RmlsZVNpemUoZmlsZS5zaXplKTtcbiAgICBzZXRJc1BlbmRpbmcodHJ1ZSk7XG4gICAgY29uc3Qgc3RhcnRfdGltZSA9IG5ldyBEYXRlKCk7XG5cbiAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgY29uc3QgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpXG4gICAgICBjb25zdCBkb20gPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKGV2ZW50LnRhcmdldC5yZXN1bHQsIFwiYXBwbGljYXRpb24veG1sXCIpXG5cbiAgICAgIGNvbnN0IGRlc2MgPSBkb20uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ0lkZW50aWZpY2F0aW9uRmx1eCcpWzBdXG4gICAgICBjb25zdCBmcmVxdWVuY3kgPSBkZXNjLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdUWVBFRkxVWCcpWzBdLmlubmVySFRNTFxuICAgICAgY29uc3QgdHlwZSA9IGRlc2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ05BVEZMVVgnKVswXS5pbm5lckhUTUxcbiAgICAgIGNvbnN0IGR0ID0gZGVzYy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnRFRDUkVBRkxVWCcpWzBdLmlubmVySFRNTFxuICAgICAgY29uc3QgdGltZSA9IGRlc2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ0hFVUNSRUFGTFVYJylbMF0uaW5uZXJIVE1MXG5cbiAgICAgIGNvbnN0IHByb2Nlc3NGaWVsZCA9IChhY2N1bSwgdmFsdWUpID0+IHtcbiAgICAgICAgICBpZiAodmFsdWVbMF0pIHtcbiAgICAgICAgICAgIGFjY3VtW3ZhbHVlWzBdLmlubmVySFRNTF0gPSAoYWNjdW1bdmFsdWVbMF0uaW5uZXJIVE1MXSB8fCAwKSArIDFcbiAgICAgICAgICAgIGFjY3VtW1wiVG90YWxcIl0gPSAoYWNjdW1bXCJUb3RhbFwiXSB8fCAwKSArIDFcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGFjY3VtXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGZvbGRlcnMgPSBuZXcgQXJyYXkoLi4uZG9tLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdJbmZvc0ZveWVyUlNBJykpXG4gICAgICBjb25zdCBwZW9wbGUgPSBuZXcgQXJyYXkoLi4uZG9tLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdQZXJzb25uZScpKVxuXG4gICAgICBjb25zdCBkYXRlcyA9IGZvbGRlcnNcbiAgICAgICAgLm1hcChpID0+IGkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ0RUREVNUlNBJylbMF0uaW5uZXJIVE1MKVxuICAgICAgICAucmVkdWNlKChhY2N1bSwgdmFsdWUpID0+IHtcbiAgICAgICAgICBhY2N1bVt2YWx1ZV0gPSAoYWNjdW1bdmFsdWVdIHx8IDAgKSArIDFcbiAgICAgICAgICByZXR1cm4gYWNjdW1cbiAgICAgICAgfSwge30pXG5cbiAgICAgIGNvbnN0IGRyb2l0cyA9IGZvbGRlcnNcbiAgICAgICAgLm1hcChpID0+IGkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ0VUQVRET1NSU0EnKSlcbiAgICAgICAgLnJlZHVjZShwcm9jZXNzRmllbGQsIHt9KVxuICAgICAgbGV0IG5ld0tleXNEcm9pdHMgPSBrZXlzRHJvaXRzLmNvbmNhdChPYmplY3Qua2V5cyhkcm9pdHMpKTtcbiAgICAgIG5ld0tleXNEcm9pdHMgPSBBcnJheS5mcm9tKG5ldyBTZXQobmV3S2V5c0Ryb2l0cykpXG4gICAgICBzZXRLZXlzRHJvaXRzKG5ld0tleXNEcm9pdHMpXG5cbiAgICAgIGNvbnN0IGRldm9pcnMgPSBwZW9wbGVcbiAgICAgICAgLm1hcChpID0+IGkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ1RPUFBFUlNEUk9ERVZPUlNBJykpXG4gICAgICAgIC5yZWR1Y2UocHJvY2Vzc0ZpZWxkLCB7fSlcbiAgICAgIGNvbnN0IG5ld0tleXNEZXZvaXJzID0ga2V5c0Rldm9pcnMuY29uY2F0KE9iamVjdC5rZXlzKGRldm9pcnMpKTtcbiAgICAgIHNldEtleXNEZXZvaXJzKEFycmF5LmZyb20obmV3IFNldChuZXdLZXlzRGV2b2lycykpKVxuXG4gICAgICBjb25zdCBmb2xkZXJzRHJvaXRzT3V2ZXJ0cyA9IGZvbGRlcnNcbiAgICAgICAgLmZpbHRlcihpID0+IGkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ0VUQVRET1NSU0EnKVswXS5pbm5lckhUTUwgPT0gXCIyXCIpXG4gICAgICAgIC5tYXAoaSA9PiB7XG4gICAgICAgICAgbGV0IGl0ZW1zID0gaS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnUGVyc29ubmUnKVxuICAgICAgICAgIHJldHVybiBbLi4uaXRlbXNdXG4gICAgICAgIH0pXG4gICAgICAgIC5mbGF0KClcblxuICAgICAgY29uc3QgZHJvaXRzRXREZXZvaXJzID0gZm9sZGVyc0Ryb2l0c091dmVydHNcbiAgICAgICAgLm1hcChpID0+IGkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ1RPUFBFUlNEUk9ERVZPUlNBJykpXG4gICAgICAgIC5yZWR1Y2UocHJvY2Vzc0ZpZWxkLCB7fSlcblxuICAgICAgc2V0SXNQZW5kaW5nKGZhbHNlKTtcblxuLy8gTm90ZSBwb3VyIHBsdXMgdGFyZCA6XG5cbi8vIElsIHBvdXJyYSDDqnRyZSBpbnTDqXJlc3NhbnQsIGRhbnMgdW5lIHNlY29uZGUgaXTDqXJhdGlvbiBkZSByZWNvdXBlciBUT1BQRVJTRFJPREVWT1JTQSBhdmVjIFJPTEVQRVJTLlxuXG4vLyBJbCBwb3VycmEgw6p0cmUgaW50w6lyZXNzYW50IGRhbnMgdW5lIHRyb2lzacOobWUgaXTDqXJhdGlvbiBkZSBmYWlyZSBsZSBjcm9pc2VtZW50IGVudHJlIEVUQVRET1NSU0EgZCd1bmUgcGFydCBldCAoIFRPUFBFUlNEUk9ERVZPUlNBIC8gUk9MRVBFUlMgKSBkJ2F1dHJlcyBwYXJ0IG1haXMgcG91ciBjZWxhIGlsIGZhdWRyYSB1biB0YWJsZWF1IGF2ZWMgdW5lIGxpZ25lIHBhciB2YWxldXIgZGUgRVRBVERPU1JTQSBldCB1bmUgY29sb25uZSBwYXIgY3JvaXNlbWVudCAoIFRPUFBFUlNEUk9ERVZPUlNBIC8gUk9MRVBFUlMgKS5cblxuICAgICAgZGlzcGF0Y2hSdW5zKHtcbiAgICAgICAgdHlwZTogJ2FwcGVuZCcsXG4gICAgICAgIGl0ZW06IHtcbiAgICAgICAgICBzZWVkOiBNYXRoLnJhbmRvbSgpLFxuICAgICAgICAgIHRpbWVzdGFtcDogKG5ldyBEYXRlKCkpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTkpLFxuICAgICAgICAgIGR1cmF0aW9uOiAobmV3IERhdGUoKSkgLSBzdGFydF90aW1lLFxuICAgICAgICAgIGZpbGVuYW1lOiBmaWxlLm5hbWUsXG4gICAgICAgICAgZmlsZURhdGV0aW1lOiBgJHtkdH0tJHt0aW1lfWAsXG4gICAgICAgICAgZnJlcXVlbmN5LFxuICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgLy8gV0lQOiBPSyBzdXIgRmlyZWZveCBLTyBzdXIgQ2hyb21lXG4gICAgICAgICAgZXJyb3I6IGRvbS5hY3RpdmVFbGVtZW50ICYmIGRvbS5hY3RpdmVFbGVtZW50Lm5vZGVOYW1lID09IFwicGFyc2VyZXJyb3JcIixcbiAgICAgICAgICB0b3RhbDogZm9sZGVycy5sZW5ndGgsXG4gICAgICAgICAgZmlsZVNpemU6IGZpbGUuc2l6ZSxcbiAgICAgICAgICBwZW9wbGU6IHBlb3BsZS5sZW5ndGgsXG4gICAgICAgICAgZGF0ZXMsXG4gICAgICAgICAgZGV2b2lycyxcbiAgICAgICAgICBkcm9pdHMsXG4gICAgICAgICAgZHJvaXRzRXREZXZvaXJzXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIHJlYWRlci5yZWFkQXNUZXh0KGZpbGUpXG4gIH1cblxuICBjb25zdCByb3VuZCA9ICh2YWx1ZSkgPT4gTWF0aC5yb3VuZCh2YWx1ZSlcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8QWRtaW4gY2F0ZWdvcnk9XCJCw6luw6lmaWNpYWlyZVwiIG9uUnVuUmVmcmVzaD17aGFuZGxlTmV3UnVuc30vPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XG4gICAgICAgICAgTGVjdGV1ciBkZSBmaWNoaWVyPGJyLz7CqyBCw6luw6lmaWNpYWlyZSDCuyBkZSBsYSBDTkFGXG4gICAgICAgIDwvaDE+XG5cbiAgICAgICAgPEZpbGVIYW5kbGVyIGZpbGVIYW5kbGVyPXtmaWxlSGFuZGxlcn0gaXNQZW5kaW5nPXtpc1BlbmRpbmd9IGZpbGVTaXplPXtmaWxlU2l6ZX0gLz5cblxuICAgICAgICB7IHJ1bnMgJiYgcnVucy5sZW5ndGggPiAwICYmICg8PlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5zdWJ0aXRsZX0+XG4gICAgICAgICAgICBTdGF0aXN0aXF1ZXMgZHJvaXRzICYgZGV2b2lyc1xuICAgICAgICAgIDwvaDI+XG5cbiAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPXtzdHlsZXMubWFyZ2luX3NpZGV9PlxuICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+PC90aD5cbiAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5Eb3NzaWVycyAoRm95ZXJzKTwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+UGVyc29ubmVzPC90aD5cbiAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj17a2V5c0Ryb2l0cy5sZW5ndGh9PlZhbGV1cnMgYmFsaXNlcyBFVEFURE9TUlNBPC90aD5cbiAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj17a2V5c0Rldm9pcnMubGVuZ3RofT5WYWxldXJzIGJhbGlzZXMgVE9QUEVSU0RST0RFVk9SU0E8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPlBlcnNvbm5lcyBzb3VtaXNlcyBkcm9pdHMgZXQgZGV2b2lycyBkYW5zIGZveWVyIGRyb2l0IG91dmVydCBldCB2ZXJzYWJsZTwvdGg+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICB7a2V5c0Ryb2l0cy5tYXAoayA9PiA8dGgga2V5PXtrfSBjb2xTcGFuPVwiMVwiPntrfTwvdGg+KX1cbiAgICAgICAgICAgICAgICB7a2V5c0Rldm9pcnMubWFwKGsgPT4gPHRoIGtleT17a30gY29sU3Bhbj1cIjFcIj57a308L3RoPil9XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICB7cnVucy5tYXAoKHIsIGkpID0+ICg8dHIga2V5PXtgJHtyLnRpbWVzdGFtcH0tJHtyLmZpbGVuYW1lfS0ke3Iuc2VlZH0tMGAgfSBzdHlsZT17IGkgPT0gZGF0ZURhdGEuaW5kZXggPyB7YmFja2dyb3VuZENvbG9yOiAnbGlnaHRncmV5J306IHt9IH0+XG4gICAgICAgICAgICAgICAgPHRkPntydW5zLmxlbmd0aCAtIGl9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT57ci50b3RhbH08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9PntyLnBlb3BsZX08L3RkPlxuICAgICAgICAgICAgICAgIHtrZXlzRHJvaXRzLm1hcChrID0+IDx0ZCBrZXk9e2t9IGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+e3IuZHJvaXRzW2tdIHx8IDB9PC90ZD4pfVxuICAgICAgICAgICAgICAgIHtrZXlzRGV2b2lycy5tYXAoayA9PiA8dGQga2V5PXtrfSBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9PntyLmRldm9pcnNba10gfHwgMH08L3RkPil9XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+e3IuZHJvaXRzRXREZXZvaXJzWzFdIHx8IDB9PC90ZD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICkpfVxuXG4gICAgICAgICAgICAgIDx0cj5cblxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICA8L3RhYmxlPlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sZWdlbmRlfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGVnZW5kZV9ib3h9PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5sZWdlbmRlX3RpdGxlfT5Mw6lnZW5kZSZuYnNwOzo8L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmJvbGR9PlZhbGV1ciBiYWxpc2UgRVRBVERPU1JTQTwvcD5cbiAgICAgICAgICAgICAgPHA+MD1Ob3V2ZWxsZSBkZW1hbmRlIGVuIGF0dGVudGUgZGUgZMOpY2lzaW9uIENHIHBvdXIgb3V2ZXJ0dXJlIGR1IGRyb2l0PGJyLz5cbiAgICAgICAgICAgICAgMT1Ecm9pdCByZWZ1c8OpPGJyLz5cbiAgICAgICAgICAgICAgMj1Ecm9pdCBvdXZlcnQgZXQgdmVyc2FibGU8YnIvPlxuICAgICAgICAgICAgICAzPURyb2l0IG91dmVydCBldCBzdXNwZW5kdSAobGUgbW9udGFudCBkdSBkcm9pdCBlc3QgY2FsY3VsYWJsZSwgbWFpcyBsJ2V4aXN0ZW5jZSBkdSBkcm9pdCBlc3QgcmVtaXMgZW4gY2F1c2UpPGJyLz5cbiAgICAgICAgICAgICAgND1Ecm9pdCBvdXZlcnQgbWFpcyB2ZXJzZW1lbnQgc3VzcGVuZHUgKGxlIG1vbnRhbnQgZHUgZHJvaXQgbidlc3QgcGFzIGNhbGN1bGFibGUpPGJyLz5cbiAgICAgICAgICAgICAgNT1Ecm9pdCBjbG9zPGJyLz5cbiAgICAgICAgICAgICAgNj1Ecm9pdCBjbG9zIHN1ciBtb2lzIGFudMOpcmlldXIgYXlhbnQgZXUgdW4gY29udHLDtGxlIGRhbnMgbGUgbW9pcyBkZSByw6lmw6lyZW5jZSBwb3VyIHVuZSBww6lyaW9kZSBhbnTDqXJpZXVyZS48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGVnZW5kZV9ib3h9PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5ib2xkfT5WYWxldXIgYmFsaXNlIFRPUFBFUlNEUk9ERVZPUlNBPC9wPlxuICAgICAgICAgICAgICA8cD4wPVBlcnNvbm5lIHBhcyBzb3VtaXNlIMOgIGRyb2l0cyBldCBkZXZvaXJzPGJyIC8+XG4gICAgICAgICAgICAgIDE9UGVyc29ubmUgc291bWlzZSDDoCBkcm9pdHMgZXQgZGV2b2lyczwvcD5cbiAgICAgICAgICAgICAgPHA+Jm5ic3A7PC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5ib2xkfT5QZXJzb25uZXMgc291bWlzZXMgZHJvaXRzIGV0IGRldm9pcnMgZGFucyBmb3llciBkcm9pdCBvdXZlcnQgZXQgdmVyc2FibGU8L3A+XG4gICAgICAgICAgICAgIDxwPk5vbWJyZSBkZSBwZXJzb25uZXMgZG9udCBsYSBiYWxpc2UgVE9QUEVSU0RST0RFVk9SU0E9MSBwcsOpc2VudHMgZGFucyBkZXMgZm95ZXJzIGRvbnQgbGEgYmFsaXNlIEVUQVRET1NSU0E9MjwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnN1YnRpdGxlfT5cbiAgICAgICAgICAgIEhpc3RvcmlxdWVcbiAgICAgICAgICA8L2gyPlxuXG4gICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT17c3R5bGVzLm1hcmdpbl9zaWRlfT5cbiAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPjwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+RmljaGllcjwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+RGF0ZTwvdGg+XG4gICAgICAgICAgICAgICAgeyBkZXZNb2RlICYmIDx0aCByb3dTcGFuPVwiMlwiPlRhaWxsZTwvdGg+fVxuICAgICAgICAgICAgICAgIHsgZGV2TW9kZSAmJiA8dGggcm93U3Bhbj1cIjJcIj5EdXLDqWU8YnIvPihlbiBzKTwvdGg+fVxuICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPkRhdGUgZHUgZmljaGllcjwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+RnLDqXF1ZW5jZTwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+TmF0dXJlPC90aD5cbiAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5Eb3NzaWVyczwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+RMOpdGFpbHM8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPkVycmV1cjwvdGg+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgIHtydW5zLm1hcCgociwgaSkgPT4gKDx0ciBrZXk9e2Ake3IudGltZXN0YW1wfS0ke3IuZmlsZW5hbWV9LSR7ci5zZWVkfWAgfSBzdHlsZT17IGkgPT0gZGF0ZURhdGEuaW5kZXggPyB7YmFja2dyb3VuZENvbG9yOiAnbGlnaHRncmV5J306IHt9IH0+XG4gICAgICAgICAgICAgICAgPHRkPntydW5zLmxlbmd0aCAtIGl9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e3IuZmlsZW5hbWV9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e3IudGltZXN0YW1wfTwvdGQ+XG4gICAgICAgICAgICAgICAgeyBkZXZNb2RlICYmIDx0ZD57ci5maWxlU2l6ZX08L3RkPn1cbiAgICAgICAgICAgICAgICB7IGRldk1vZGUgJiYgPHRkPnshaXNOYU4oci5kdXJhdGlvbikgPyByLmR1cmF0aW9uLzEwMDAgOiBcIiNOL0FcIn08L3RkPn1cbiAgICAgICAgICAgICAgICA8dGQ+e3IuZmlsZURhdGV0aW1lfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPntgJHtyLmZyZXF1ZW5jeX0gKCR7ZnJlcXVlbmN5TmFtZXNbci5mcmVxdWVuY3ldIHx8ICc/J30pYH08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57YCR7ci50eXBlfSAoJHt0eXBlTmFtZXNbci50eXBlXSB8fCAnPyd9KWB9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMubnVtZXJpY30+e3IudG90YWx9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwic2hyaW5rXCI+PGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVEYXRlSGlzdG9ncmFtfSBkYXRhLWluZGV4PXtpfT5BZmZpY2hlciBwYXIgZGF0ZTwvYnV0dG9uPjwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPntyLmVycm9yID8gJ091aScgOiAnTm9uJ308L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgIDwvdGFibGU+XG5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoUnVucyh7dHlwZTogJ3Jlc2V0J30pfSBjbGFzc05hbWU9e3N0eWxlcy5tYXJnaW5fYm90dG9tfT5WaWRlciBsJ2hpc3RvcmlxdWU8L2J1dHRvbj5cbiAgICAgICAgPC8+KX1cblxuICAgICAgICB7cnVucy5sZW5ndGggIT0gMCAmJiAoPHAgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+XG4gICAgICAgIFZvdXMgcG91dmV6IGFjY8OpZGVyIMOgIHVuZSByZXByw6lzZW50YXRpb24gZ3JhcGhpcXVlIGRlIGxhIHLDqXBhcnRpdGlvbiBkYW5zIGxlcyB0ZW1wcyBkZXMgZGVtYW5kZXMgY29ubnVlcyBkYW5zIGxlcyBmaWNoaWVycyBhbmFseXPDqXMuIFBvdXIgY2VsYSBpbCBmYXV0IGNsaXF1ZXIgc3VyIGxlIGJvdXRvbiDCqyBBZmZpY2hlciBwYXIgZGF0ZSDCuy5cbiAgICAgICAgICA8L3A+KX1cblxuICAgICAgICB7ZGF0ZURhdGEuaW5kZXggIT0gdW5kZWZpbmVkICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnN1YnRpdGxlfT5cbiAgICAgICAgICAgICAgTm9tYnJlIGRlIGRvc3NpZXJzIGFzc29jacOpcyDDoCBkZXMgZGVtYW5kZXMgcsOpYWxpc8OpcyDDoCBjaGFxdWUgZGF0ZVxuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6ICgyNTAqZGF0ZURhdGEueWVhckNvdW50KSArIFwicHhcIiwgd2lkdGg6IFwiMTAwJVwifX0+XG4gICAgICAgICAgICAgIHtSZXNwb25zaXZlQ2FsZW5kYXIoZGF0ZURhdGEpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG5cbiAgICAgICAgPEZvb3RlclxuICAgICAgICAgIHN1YmplY3Q9XCJGbHV4IGLDqW7DqWZpY2lhaXJlIENOQUZcIlxuICAgICAgICAgIHBvdXJxdW9pPVwiUG91cnF1b2kgdW4gbGVjdGV1ciBkZSBmaWNoaWVyIENOQUYmbmJzcDs/XCJcbiAgICAgICAgICB0ZXh0PXs8PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+VG91cyBsZXMgZMOpcGFydGVtZW50cyBuJ29udCBwYXMgbGVzIG91dGlscyBwb3VyIGFuYWx5c2VyIGxlcyBmaWNoaWVycyBlbnZvecOpcyBwYXIgbGEgQ05BRi4gQ2VsYSBwZXV0IHJhbGVudGlyIGV0IGNvbXBsaXF1ZXIgbm9zIMOpY2hhbmdlcy48L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5BdmVjIGNldCBvdXRpbCwgbm91cyBzb3VoYWl0b25zIHBlcm1ldHRyZSBhdXggcGVyc29ubmVzIHF1aSBvbnQgYWNjw6hzIMOgIGNlcyBmaWNoaWVycyBkJ2VuIGV4dHJhaXJlIGRlcyBzdGF0aXN0aXF1ZXMgZ8OpbsOpcmFsZXMgc2FucyBhdm9pciDDoCBtZXR0cmUgbGVzIG1haW5zIGRhbnMgbGUgY2FtYm91aSBlbGxlcy1tw6ptZS48L3A+XG4gICAgICAgICAgPC8+fVxuICAgICAgICAvPlxuICAgICAgPC9tYWluPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9