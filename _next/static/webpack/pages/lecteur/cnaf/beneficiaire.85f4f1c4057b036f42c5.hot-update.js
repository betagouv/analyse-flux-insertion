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
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_admin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/admin */ "./components/admin.js");
/* harmony import */ var _components_chart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/chart */ "./components/chart.js");
/* harmony import */ var _components_fileHandler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/fileHandler */ "./components/fileHandler.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/footer */ "./components/footer.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/layout */ "./components/layout.js");
/* harmony import */ var _lib_cnaf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../lib/cnaf */ "./lib/cnaf.js");
/* harmony import */ var _lib_historique__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../lib/historique */ "./lib/historique.js");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10__);




var _jsxFileName = "/home/q/code/qblanc/beta.gouv/analyse-flux-insertion/pages/lecteur/cnaf/beneficiaire/index.js",
    _s = $RefreshSig$();










var reducer = Object(_lib_historique__WEBPACK_IMPORTED_MODULE_9__["reducerFactory"])("Test - CNAF - Bénéficiaire");
var devMode = true;
function Beneficiaire() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      devFile = _useState[0],
      setDevFile = _useState[1];

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_2__["useReducer"])(reducer, [], _lib_historique__WEBPACK_IMPORTED_MODULE_9__["initReducer"]),
      runs = _useReducer[0],
      dispatchRuns = _useReducer[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isPending = _useState2[0],
      setIsPending = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      fileSize = _useState3[0],
      setFileSize = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      keysDroits = _useState4[0],
      setKeysDroits = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      keysDevoirs = _useState5[0],
      setKeysDevoirs = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    index: undefined,
    data: [],
    from: "2016-03-01",
    to: "2021-03-01"
  }),
      dateData = _useState6[0],
      setDateData = _useState6[1];

  var handleNewRuns = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (data) {
    dispatchRuns({
      type: "reset",
      folders: data
    });
  });
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (devFile) {
      handleFile(devFile);
    }
  }, [devFile]);
  var handleDateHistogram = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (event) {
    return showDateHistogram(parseInt(event.target.dataset.index));
  });
  var showDateHistogram = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (index) {
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

  var calculateTotal = function calculateTotal(category) {
    var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    return runs.reduce(function (accum, run) {
      var toAdd = index === null ? run[category] : run[category][index];
      return accum + (toAdd || 0);
    }, 0);
  };

  var handleFile = function handleFile(file) {
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
      var desc = dom.getElementsByTagName("IdentificationFlux")[0];
      var frequency = desc.getElementsByTagName("TYPEFLUX")[0].innerHTML;
      var type = desc.getElementsByTagName("NATFLUX")[0].innerHTML;
      var dt = desc.getElementsByTagName("DTCREAFLUX")[0].innerHTML;
      var time = desc.getElementsByTagName("HEUCREAFLUX")[0].innerHTML;
      var foldersCount = dom.getElementsByTagName("InfosFoyerRSA").length;
      var peopleCount = dom.getElementsByTagName("Personne").length;
      var dates = {},
          droits = {},
          devoirs = {},
          droitsEtDevoirs = {};

      var accumData = function accumData(accum, value) {
        accum[value] = (accum[value] || 0) + 1;
        accum["Total"] = (accum["Total"] || 0) + 1;
      };

      var _loop = function _loop(i) {
        var folder = dom.getElementsByTagName("InfosFoyerRSA")[i]; // compte les infos relatives au dossier

        var folder_date = folder.getElementsByTagName("DTDEMRSA")[0].innerHTML;
        dates[folder_date] = (dates[folder_date] || 0) + 1;

        if (folder.getElementsByTagName("ETATDOSRSA")[0]) {
          accumData(droits, folder.getElementsByTagName("ETATDOSRSA")[0].innerHTML);
        } // compte les infos relatives aux personnes présentes dans le dossier


        var people = folder.getElementsByTagName("Personne");

        Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(people).forEach(function (p) {
          if (p.getElementsByTagName("TOPPERSDRODEVORSA")[0]) {
            accumData(devoirs, p.getElementsByTagName("TOPPERSDRODEVORSA")[0].innerHTML);

            if (folder.getElementsByTagName("ETATDOSRSA")[0].innerHTML == "2") {
              // Compte les infos relatives aux personnes présentes dans le dossier lorsque les droits sont ouverts
              accumData(droitsEtDevoirs, p.getElementsByTagName("TOPPERSDRODEVORSA")[0].innerHTML);
            }
          }
        });
      };

      for (var i = 0; i < foldersCount; i++) {
        _loop(i);
      } // store les clés dans un state pour n'afficher dans le tableau que les données présentes


      var newKeysDroits = keysDroits.concat(Object.keys(droits));
      setKeysDroits(Array.from(new Set(newKeysDroits)).sort());
      var newKeysDevoirs = keysDevoirs.concat(Object.keys(devoirs));
      setKeysDevoirs(Array.from(new Set(newKeysDevoirs)).sort());
      setIsPending(false);
      dispatchRuns({
        type: "append",
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
          total: foldersCount,
          fileSize: file.size,
          people: peopleCount,
          dates: dates,
          devoirs: devoirs,
          droits: droits,
          droitsEtDevoirs: droitsEtDevoirs
        }
      });
    };

    reader.readAsText(file);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.container,
    handleFile: handleFile,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_admin__WEBPACK_IMPORTED_MODULE_3__["default"], {
      category: "B\xE9n\xE9ficiaire",
      onRunRefresh: handleNewRuns
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.main,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.title,
        children: ["Lecteur de fichier", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 11
        }, this), "\xAB B\xE9n\xE9ficiaire \xBB de la CNAF"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_fileHandler__WEBPACK_IMPORTED_MODULE_5__["default"], {
        handleFile: handleFile,
        isPending: isPending,
        fileSize: fileSize,
        message: "Calcul des statistiques en cours, merci de patienter"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 9
      }, this), runs && runs.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.subtitle,
          children: "Statistiques droits & devoirs"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.margin_side,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 196,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Dossiers (Foyers)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 197,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Personnes"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 198,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                colSpan: keysDroits.length,
                children: "Valeurs balises ETATDOSRSA"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 199,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                colSpan: keysDevoirs.length,
                children: "Valeurs balises TOPPERSDRODEVORSA"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 202,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                colSpan: "3",
                children: "Nombre de personnes dans foyer droit ouvert et versable"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 205,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 195,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              children: [keysDroits.map(function (k) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                  colSpan: "1",
                  children: k
                }, k, false, {
                  fileName: _jsxFileName,
                  lineNumber: 209,
                  columnNumber: 21
                }, _this);
              }), keysDevoirs.map(function (k) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                  colSpan: "1",
                  children: k
                }, k, false, {
                  fileName: _jsxFileName,
                  lineNumber: 214,
                  columnNumber: 21
                }, _this);
              }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                colSpan: "1",
                children: "Soumises droits & devoirs"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 218,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                colSpan: "1",
                children: "Non soumises droits & devoirs"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 219,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                colSpan: "1",
                children: "Total"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 220,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 207,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 194,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
            children: [runs.reverse().map(function (r, i) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                style: i == dateData.index ? {
                  backgroundColor: "lightgrey"
                } : {},
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: i + 1
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 230,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.center,
                  children: r.total
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 231,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.center,
                  children: r.people
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 232,
                  columnNumber: 21
                }, _this), keysDroits.map(function (k) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.center,
                    children: r.droits[k] || 0
                  }, k, false, {
                    fileName: _jsxFileName,
                    lineNumber: 234,
                    columnNumber: 23
                  }, _this);
                }), keysDevoirs.map(function (k) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.center,
                    children: r.devoirs[k] || 0
                  }, k, false, {
                    fileName: _jsxFileName,
                    lineNumber: 239,
                    columnNumber: 23
                  }, _this);
                }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.center,
                  children: r.droitsEtDevoirs[1] || 0
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 243,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.center,
                  children: r.droitsEtDevoirs[0] || 0
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 246,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.center,
                  children: r.droitsEtDevoirs["Total"] || 0
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 249,
                  columnNumber: 21
                }, _this)]
              }, "".concat(r.timestamp, "-").concat(r.filename, "-").concat(r.seed, "-0"), true, {
                fileName: _jsxFileName,
                lineNumber: 226,
                columnNumber: 19
              }, _this);
            }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: "Total"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 255,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.center,
                children: calculateTotal("total")
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 256,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.center,
                children: calculateTotal("people")
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 257,
                columnNumber: 19
              }, this), keysDroits.map(function (k) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.center,
                  children: calculateTotal("droits", k) || 0
                }, k, false, {
                  fileName: _jsxFileName,
                  lineNumber: 259,
                  columnNumber: 21
                }, _this);
              }), keysDevoirs.map(function (k) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.center,
                  children: calculateTotal("devoirs", k) || 0
                }, k, false, {
                  fileName: _jsxFileName,
                  lineNumber: 264,
                  columnNumber: 21
                }, _this);
              }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.center,
                children: calculateTotal("droitsEtDevoirs", 1) || 0
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 268,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.center,
                children: calculateTotal("droitsEtDevoirs", 0) || 0
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 271,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.center,
                children: calculateTotal("droitsEtDevoirs", "Total") || 0
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 274,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 254,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 279,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 223,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.legende,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.legende_box,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.legende_title,
              children: "L\xE9gende\xA0:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 285,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.bold,
              children: "Valeur balise ETATDOSRSA"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 286,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: ["0=Nouvelle demande en attente de d\xE9cision CG pour ouverture du droit", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 290,
                columnNumber: 19
              }, this), "1=Droit refus\xE9", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 292,
                columnNumber: 19
              }, this), "2=Droit ouvert et versable", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 294,
                columnNumber: 19
              }, this), "3=Droit ouvert et suspendu (le montant du droit est calculable, mais l'existence du droit est remis en cause)", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 297,
                columnNumber: 19
              }, this), "4=Droit ouvert mais versement suspendu (le montant du droit n'est pas calculable)", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 300,
                columnNumber: 19
              }, this), "5=Droit clos", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 302,
                columnNumber: 19
              }, this), "6=Droit clos sur mois ant\xE9rieur ayant eu un contr\xF4le dans le mois de r\xE9f\xE9rence pour une p\xE9riode ant\xE9rieure."]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 287,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 284,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.legende_box,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.bold,
              children: "Valeur balise TOPPERSDRODEVORSA"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 308,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: ["0=Personne pas soumise \xE0 droits et devoirs", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 311,
                columnNumber: 19
              }, this), "1=Personne soumise \xE0 droits et devoirs"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 309,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "\xA0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 314,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.bold,
              children: "Personnes dans foyer droit ouvert et versable"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 315,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "Soumises droits & devoirs : Nombre de personnes dont la balise TOPPERSDRODEVORSA=1 pr\xE9sents dans des foyers dont la balise ETATDOSRSA=2"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 318,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "Non soumises droits & devoirs : Nombre de personnes dont la balise TOPPERSDRODEVORSA=0 pr\xE9sents dans des foyers dont la balise ETATDOSRSA=2"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 321,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 307,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 283,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.subtitle,
          children: "Historique"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 327,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.margin_side,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 332,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Fichier"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 333,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Date"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 334,
                columnNumber: 19
              }, this), devMode && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Taille"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 335,
                columnNumber: 31
              }, this), devMode && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: ["Dur\xE9e", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 339,
                  columnNumber: 23
                }, this), "(en s)"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 337,
                columnNumber: 21
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Date du fichier"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 343,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Fr\xE9quence"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 344,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Nature"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 345,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Dossiers"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 346,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "D\xE9tails"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 347,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Erreur"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 348,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 331,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 350,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 330,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
            children: runs.reverse().map(function (r, i) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                style: i == dateData.index ? {
                  backgroundColor: "lightgrey"
                } : {},
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: i + 1
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 363,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: r.filename
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 364,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: r.timestamp
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 365,
                  columnNumber: 21
                }, _this), devMode && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: r.fileSize
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 366,
                  columnNumber: 33
                }, _this), devMode && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: !isNaN(r.duration) ? r.duration / 1000 : "#N/A"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 368,
                  columnNumber: 23
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: r.fileDatetime
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 370,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: "".concat(r.frequency, " (").concat(_lib_cnaf__WEBPACK_IMPORTED_MODULE_8__["frequencyNames"][r.frequency] || "?", ")")
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 371,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: "".concat(r.type, " (").concat(_lib_cnaf__WEBPACK_IMPORTED_MODULE_8__["typeNames"][r.type] || "?", ")")
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 374,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.numeric,
                  children: r.total
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 375,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: "shrink",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                    onClick: handleDateHistogram,
                    "data-index": i,
                    children: "Afficher par date"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 377,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 376,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: r.error ? "Oui" : "Non"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 381,
                  columnNumber: 21
                }, _this)]
              }, "".concat(r.timestamp, "-").concat(r.filename, "-").concat(r.seed), true, {
                fileName: _jsxFileName,
                lineNumber: 355,
                columnNumber: 19
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 352,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 329,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: function onClick() {
            return dispatchRuns({
              type: "reset"
            });
          },
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.margin_bottom,
          children: "Vider l'historique"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 387,
          columnNumber: 13
        }, this)]
      }, void 0, true), runs.length != 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.text,
        children: "Vous pouvez acc\xE9der \xE0 une repr\xE9sentation graphique de la r\xE9partition dans les temps des demandes connues dans les fichiers analys\xE9s. Pour cela il faut cliquer sur le bouton \xAB Afficher par date \xBB."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 397,
        columnNumber: 11
      }, this), dateData.index != undefined && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.subtitle,
          children: "Nombre de dossiers associ\xE9s \xE0 des demandes r\xE9alis\xE9s \xE0 chaque date"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 406,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            height: 250 * dateData.yearCount + "px",
            width: "100%"
          },
          children: Object(_components_chart__WEBPACK_IMPORTED_MODULE_4__["default"])(dateData)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 409,
          columnNumber: 13
        }, this)]
      }, void 0, true), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
        subject: "Flux b\xE9n\xE9ficiaire CNAF",
        pourquoi: "Pourquoi un lecteur de fichier CNAF\xA0?",
        text: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.text,
            children: "Tous les d\xE9partements n'ont pas les outils pour analyser les fichiers envoy\xE9s par la CNAF. Cela peut ralentir et compliquer nos \xE9changes."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 422,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.text,
            children: "Avec cet outil, nous souhaitons permettre aux personnes qui ont acc\xE8s \xE0 ces fichiers d'en extraire des statistiques g\xE9n\xE9rales sans avoir \xE0 mettre les mains dans le camboui elles-m\xEAme."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 427,
            columnNumber: 15
          }, this)]
        }, void 0, true)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 417,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbGVjdGV1ci9jbmFmL2JlbmVmaWNpYWlyZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJyZWR1Y2VyIiwicmVkdWNlckZhY3RvcnkiLCJkZXZNb2RlIiwiQmVuZWZpY2lhaXJlIiwidXNlU3RhdGUiLCJkZXZGaWxlIiwic2V0RGV2RmlsZSIsInVzZVJlZHVjZXIiLCJpbml0UmVkdWNlciIsInJ1bnMiLCJkaXNwYXRjaFJ1bnMiLCJpc1BlbmRpbmciLCJzZXRJc1BlbmRpbmciLCJmaWxlU2l6ZSIsInNldEZpbGVTaXplIiwia2V5c0Ryb2l0cyIsInNldEtleXNEcm9pdHMiLCJrZXlzRGV2b2lycyIsInNldEtleXNEZXZvaXJzIiwiaW5kZXgiLCJ1bmRlZmluZWQiLCJkYXRhIiwiZnJvbSIsInRvIiwiZGF0ZURhdGEiLCJzZXREYXRlRGF0YSIsImhhbmRsZU5ld1J1bnMiLCJ1c2VDYWxsYmFjayIsInR5cGUiLCJmb2xkZXJzIiwidXNlRWZmZWN0IiwiaGFuZGxlRmlsZSIsImhhbmRsZURhdGVIaXN0b2dyYW0iLCJldmVudCIsInNob3dEYXRlSGlzdG9ncmFtIiwicGFyc2VJbnQiLCJ0YXJnZXQiLCJkYXRhc2V0Iiwic291cmNlIiwiZGF0ZXMiLCJPYmplY3QiLCJrZXlzIiwibWluRGF0ZSIsIm1heERhdGUiLCJtYXAiLCJkIiwiZGF0ZSIsIkRhdGUiLCJkYXkiLCJ0b0lTT1N0cmluZyIsInNsaWNlIiwidmFsdWUiLCJ5ZWFyQ291bnQiLCJnZXRZZWFyIiwiY2FsY3VsYXRlVG90YWwiLCJjYXRlZ29yeSIsInJlZHVjZSIsImFjY3VtIiwicnVuIiwidG9BZGQiLCJmaWxlIiwic2l6ZSIsInN0YXJ0X3RpbWUiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwicGFyc2VyIiwiRE9NUGFyc2VyIiwiZG9tIiwicGFyc2VGcm9tU3RyaW5nIiwicmVzdWx0IiwiZGVzYyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiZnJlcXVlbmN5IiwiaW5uZXJIVE1MIiwiZHQiLCJ0aW1lIiwiZm9sZGVyc0NvdW50IiwibGVuZ3RoIiwicGVvcGxlQ291bnQiLCJkcm9pdHMiLCJkZXZvaXJzIiwiZHJvaXRzRXREZXZvaXJzIiwiYWNjdW1EYXRhIiwiaSIsImZvbGRlciIsImZvbGRlcl9kYXRlIiwicGVvcGxlIiwiZm9yRWFjaCIsInAiLCJuZXdLZXlzRHJvaXRzIiwiY29uY2F0IiwiQXJyYXkiLCJTZXQiLCJzb3J0IiwibmV3S2V5c0Rldm9pcnMiLCJpdGVtIiwic2VlZCIsIk1hdGgiLCJyYW5kb20iLCJ0aW1lc3RhbXAiLCJkdXJhdGlvbiIsImZpbGVuYW1lIiwibmFtZSIsImZpbGVEYXRldGltZSIsImVycm9yIiwiYWN0aXZlRWxlbWVudCIsIm5vZGVOYW1lIiwidG90YWwiLCJyZWFkQXNUZXh0Iiwic3R5bGVzIiwiY29udGFpbmVyIiwibWFpbiIsInRpdGxlIiwic3VidGl0bGUiLCJtYXJnaW5fc2lkZSIsImsiLCJyZXZlcnNlIiwiciIsImJhY2tncm91bmRDb2xvciIsImNlbnRlciIsImxlZ2VuZGUiLCJsZWdlbmRlX2JveCIsImxlZ2VuZGVfdGl0bGUiLCJib2xkIiwiaXNOYU4iLCJmcmVxdWVuY3lOYW1lcyIsInR5cGVOYW1lcyIsIm51bWVyaWMiLCJtYXJnaW5fYm90dG9tIiwidGV4dCIsImhlaWdodCIsIndpZHRoIiwiUmVzcG9uc2l2ZUNhbGVuZGFyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxPQUFPLEdBQUdDLHNFQUFjLENBQUMsNEJBQUQsQ0FBOUI7QUFDQSxJQUFNQyxPQUFPLE9BQWI7QUFFZSxTQUFTQyxZQUFULEdBQXdCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ1BDLHNEQUFRLENBQUMsSUFBRCxDQUREO0FBQUEsTUFDOUJDLE9BRDhCO0FBQUEsTUFDckJDLFVBRHFCOztBQUFBLG9C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SixFQW9PRzFHLFFBQVEsQ0FBQ0wsS0FBVCxJQUFrQkMsU0FBbEIsaUJBQ0M7QUFBQSxnQ0FDRTtBQUFJLG1CQUFTLEVBQUUwRiwrREFBTSxDQUFDSSxRQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUlFO0FBQ0UsZUFBSyxFQUFFO0FBQUVpQixrQkFBTSxFQUFFLE1BQU0zRyxRQUFRLENBQUM0QixTQUFmLEdBQTJCLElBQXJDO0FBQTJDZ0YsaUJBQUssRUFBRTtBQUFsRCxXQURUO0FBQUEsb0JBR0dDLGlFQUFrQixDQUFDN0csUUFBRDtBQUhyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpGO0FBQUEsc0JBck9KLGVBaVBFLHFFQUFDLDBEQUFEO0FBQ0UsZUFBTyxFQUFDLDhCQURWO0FBRUUsZ0JBQVEsRUFBQywwQ0FGWDtBQUdFLFlBQUksZUFDRjtBQUFBLGtDQUNFO0FBQUcscUJBQVMsRUFBRXNGLCtEQUFNLENBQUNvQixJQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQU1FO0FBQUcscUJBQVMsRUFBRXBCLCtEQUFNLENBQUNvQixJQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFORjtBQUFBO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWpQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXlRRDs7R0F0YXVCL0gsWTs7S0FBQUEsWSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sZWN0ZXVyL2NuYWYvYmVuZWZpY2lhaXJlLjg1ZjRmMWM0MDU3YjAzNmY0MmM1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgQWRtaW4gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvYWRtaW5cIjtcbmltcG9ydCBSZXNwb25zaXZlQ2FsZW5kYXIgZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvY2hhcnRcIjtcbmltcG9ydCBGaWxlSGFuZGxlciBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9maWxlSGFuZGxlclwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9mb290ZXJcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0XCI7XG5cbmltcG9ydCB7IGZyZXF1ZW5jeU5hbWVzLCB0eXBlTmFtZXMgfSBmcm9tIFwiLi4vLi4vLi4vLi4vbGliL2NuYWZcIjtcbmltcG9ydCB7IGluaXRSZWR1Y2VyLCByZWR1Y2VyRmFjdG9yeSB9IGZyb20gXCIuLi8uLi8uLi8uLi9saWIvaGlzdG9yaXF1ZVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vLi4vLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuXG5jb25zdCByZWR1Y2VyID0gcmVkdWNlckZhY3RvcnkoXCJUZXN0IC0gQ05BRiAtIELDqW7DqWZpY2lhaXJlXCIpO1xuY29uc3QgZGV2TW9kZSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09IFwiZGV2ZWxvcG1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmVuZWZpY2lhaXJlKCkge1xuICBjb25zdCBbZGV2RmlsZSwgc2V0RGV2RmlsZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3J1bnMsIGRpc3BhdGNoUnVuc10gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIFtdLCBpbml0UmVkdWNlcik7XG4gIGNvbnN0IFtpc1BlbmRpbmcsIHNldElzUGVuZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtmaWxlU2l6ZSwgc2V0RmlsZVNpemVdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtrZXlzRHJvaXRzLCBzZXRLZXlzRHJvaXRzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2tleXNEZXZvaXJzLCBzZXRLZXlzRGV2b2lyc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtkYXRlRGF0YSwgc2V0RGF0ZURhdGFdID0gdXNlU3RhdGUoe1xuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgZGF0YTogW10sXG4gICAgZnJvbTogXCIyMDE2LTAzLTAxXCIsXG4gICAgdG86IFwiMjAyMS0wMy0wMVwiLFxuICB9KTtcblxuICBjb25zdCBoYW5kbGVOZXdSdW5zID0gdXNlQ2FsbGJhY2soZGF0YSA9PiB7XG4gICAgZGlzcGF0Y2hSdW5zKHtcbiAgICAgIHR5cGU6IFwicmVzZXRcIixcbiAgICAgIGZvbGRlcnM6IGRhdGEsXG4gICAgfSk7XG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRldkZpbGUpIHtcbiAgICAgIGhhbmRsZUZpbGUoZGV2RmlsZSk7XG4gICAgfVxuICB9LCBbZGV2RmlsZV0pO1xuXG4gIGNvbnN0IGhhbmRsZURhdGVIaXN0b2dyYW0gPSB1c2VDYWxsYmFjayhldmVudCA9PlxuICAgIHNob3dEYXRlSGlzdG9ncmFtKHBhcnNlSW50KGV2ZW50LnRhcmdldC5kYXRhc2V0LmluZGV4KSlcbiAgKTtcbiAgY29uc3Qgc2hvd0RhdGVIaXN0b2dyYW0gPSB1c2VDYWxsYmFjayhpbmRleCA9PiB7XG4gICAgY29uc3Qgc291cmNlID0gcnVuc1tpbmRleF07XG5cbiAgICBjb25zdCBkYXRlcyA9IE9iamVjdC5rZXlzKHNvdXJjZS5kYXRlcyk7XG4gICAgbGV0IG1pbkRhdGUgPSBudWxsO1xuICAgIGxldCBtYXhEYXRlID0gbnVsbDtcblxuICAgIGNvbnN0IGRhdGEgPSBkYXRlcy5tYXAoZCA9PiB7XG4gICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKGQpO1xuICAgICAgaWYgKCFtaW5EYXRlKSB7XG4gICAgICAgIG1pbkRhdGUgPSBkYXRlO1xuICAgICAgICBtYXhEYXRlID0gZGF0ZTtcbiAgICAgIH0gZWxzZSBpZiAoZGF0ZSA8IG1pbkRhdGUpIHtcbiAgICAgICAgbWluRGF0ZSA9IGRhdGU7XG4gICAgICB9IGVsc2UgaWYgKG1heERhdGUgPCBkYXRlKSB7XG4gICAgICAgIG1heERhdGUgPSBkYXRlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGF5OiBkYXRlLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApLFxuICAgICAgICB2YWx1ZTogc291cmNlLmRhdGVzW2RdLFxuICAgICAgfTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHllYXJDb3VudCA9IG1heERhdGUuZ2V0WWVhcigpIC0gbWluRGF0ZS5nZXRZZWFyKCkgKyAxO1xuICAgIHNldERhdGVEYXRhKHtcbiAgICAgIGluZGV4LFxuICAgICAgZGF0YSxcbiAgICAgIGZyb206IG1pbkRhdGUudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCksXG4gICAgICB0bzogbWF4RGF0ZS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKSxcbiAgICAgIHllYXJDb3VudCxcbiAgICB9KTtcbiAgfSk7XG5cbiAgY29uc3QgY2FsY3VsYXRlVG90YWwgPSAoY2F0ZWdvcnksIGluZGV4ID0gbnVsbCkgPT4ge1xuICAgIHJldHVybiBydW5zLnJlZHVjZSgoYWNjdW0sIHJ1bikgPT4ge1xuICAgICAgY29uc3QgdG9BZGQgPSBpbmRleCA9PT0gbnVsbCA/IHJ1bltjYXRlZ29yeV0gOiBydW5bY2F0ZWdvcnldW2luZGV4XTtcbiAgICAgIHJldHVybiBhY2N1bSArICh0b0FkZCB8fCAwKTtcbiAgICB9LCAwKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVGaWxlID0gZmlsZSA9PiB7XG4gICAgaWYgKGRldk1vZGUgJiYgZmlsZSAhPSBkZXZGaWxlKSB7XG4gICAgICBzZXREZXZGaWxlKGZpbGUpO1xuICAgIH1cbiAgICBzZXRGaWxlU2l6ZShmaWxlLnNpemUpO1xuICAgIHNldElzUGVuZGluZyh0cnVlKTtcbiAgICBjb25zdCBzdGFydF90aW1lID0gbmV3IERhdGUoKTtcblxuICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGNvbnN0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcbiAgICAgIGNvbnN0IGRvbSA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoXG4gICAgICAgIGV2ZW50LnRhcmdldC5yZXN1bHQsXG4gICAgICAgIFwiYXBwbGljYXRpb24veG1sXCJcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IGRlc2MgPSBkb20uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJJZGVudGlmaWNhdGlvbkZsdXhcIilbMF07XG4gICAgICBjb25zdCBmcmVxdWVuY3kgPSBkZXNjLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiVFlQRUZMVVhcIilbMF0uaW5uZXJIVE1MO1xuICAgICAgY29uc3QgdHlwZSA9IGRlc2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJOQVRGTFVYXCIpWzBdLmlubmVySFRNTDtcbiAgICAgIGNvbnN0IGR0ID0gZGVzYy5nZXRFbGVtZW50c0J5VGFnTmFtZShcIkRUQ1JFQUZMVVhcIilbMF0uaW5uZXJIVE1MO1xuICAgICAgY29uc3QgdGltZSA9IGRlc2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJIRVVDUkVBRkxVWFwiKVswXS5pbm5lckhUTUw7XG4gICAgICBjb25zdCBmb2xkZXJzQ291bnQgPSBkb20uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJJbmZvc0ZveWVyUlNBXCIpLmxlbmd0aDtcbiAgICAgIGNvbnN0IHBlb3BsZUNvdW50ID0gZG9tLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiUGVyc29ubmVcIikubGVuZ3RoO1xuXG4gICAgICBjb25zdCBbZGF0ZXMsIGRyb2l0cywgZGV2b2lycywgZHJvaXRzRXREZXZvaXJzXSA9IFt7fSwge30sIHt9LCB7fV1cbiAgICAgIGNvbnN0IGFjY3VtRGF0YSA9IChhY2N1bSwgdmFsdWUpID0+IHtcbiAgICAgICAgYWNjdW1bdmFsdWVdID0gKGFjY3VtW3ZhbHVlXSB8fCAwKSArIDE7XG4gICAgICAgIGFjY3VtW1wiVG90YWxcIl0gPSAoYWNjdW1bXCJUb3RhbFwiXSB8fCAwKSArIDE7XG4gICAgICB9O1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZvbGRlcnNDb3VudDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGZvbGRlciA9IGRvbS5nZXRFbGVtZW50c0J5VGFnTmFtZShcIkluZm9zRm95ZXJSU0FcIilbaV07XG4gICAgICAgIC8vIGNvbXB0ZSBsZXMgaW5mb3MgcmVsYXRpdmVzIGF1IGRvc3NpZXJcbiAgICAgICAgY29uc3QgZm9sZGVyX2RhdGUgPSBmb2xkZXIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJEVERFTVJTQVwiKVswXS5pbm5lckhUTUxcbiAgICAgICAgZGF0ZXNbZm9sZGVyX2RhdGVdID0gKGRhdGVzW2ZvbGRlcl9kYXRlXSB8fCAwKSArIDE7XG4gICAgICAgIGlmIChmb2xkZXIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJFVEFURE9TUlNBXCIpWzBdKSB7XG4gICAgICAgICAgYWNjdW1EYXRhKGRyb2l0cywgZm9sZGVyLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiRVRBVERPU1JTQVwiKVswXS5pbm5lckhUTUwpXG4gICAgICAgIH1cblxuICAgICAgICAvLyBjb21wdGUgbGVzIGluZm9zIHJlbGF0aXZlcyBhdXggcGVyc29ubmVzIHByw6lzZW50ZXMgZGFucyBsZSBkb3NzaWVyXG4gICAgICAgIGNvbnN0IHBlb3BsZSA9IGZvbGRlci5nZXRFbGVtZW50c0J5VGFnTmFtZShcIlBlcnNvbm5lXCIpO1xuICAgICAgICBbLi4ucGVvcGxlXS5mb3JFYWNoKHAgPT4ge1xuICAgICAgICAgIGlmIChwLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiVE9QUEVSU0RST0RFVk9SU0FcIilbMF0pIHtcbiAgICAgICAgICAgIGFjY3VtRGF0YShkZXZvaXJzLCBwLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiVE9QUEVSU0RST0RFVk9SU0FcIilbMF0uaW5uZXJIVE1MKVxuICAgICAgICAgICAgaWYgKGZvbGRlci5nZXRFbGVtZW50c0J5VGFnTmFtZShcIkVUQVRET1NSU0FcIilbMF0uaW5uZXJIVE1MID09IFwiMlwiKSB7XG4gICAgICAgICAgICAgIC8vIENvbXB0ZSBsZXMgaW5mb3MgcmVsYXRpdmVzIGF1eCBwZXJzb25uZXMgcHLDqXNlbnRlcyBkYW5zIGxlIGRvc3NpZXIgbG9yc3F1ZSBsZXMgZHJvaXRzIHNvbnQgb3V2ZXJ0c1xuICAgICAgICAgICAgICBhY2N1bURhdGEoZHJvaXRzRXREZXZvaXJzLCBwLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiVE9QUEVSU0RST0RFVk9SU0FcIilbMF0uaW5uZXJIVE1MKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgIH1cblxuICAgICAgLy8gc3RvcmUgbGVzIGNsw6lzIGRhbnMgdW4gc3RhdGUgcG91ciBuJ2FmZmljaGVyIGRhbnMgbGUgdGFibGVhdSBxdWUgbGVzIGRvbm7DqWVzIHByw6lzZW50ZXNcbiAgICAgIGNvbnN0IG5ld0tleXNEcm9pdHMgPSBrZXlzRHJvaXRzLmNvbmNhdChPYmplY3Qua2V5cyhkcm9pdHMpKTtcbiAgICAgIHNldEtleXNEcm9pdHMoQXJyYXkuZnJvbShuZXcgU2V0KG5ld0tleXNEcm9pdHMpKS5zb3J0KCkpO1xuICAgICAgY29uc3QgbmV3S2V5c0Rldm9pcnMgPSBrZXlzRGV2b2lycy5jb25jYXQoT2JqZWN0LmtleXMoZGV2b2lycykpO1xuICAgICAgc2V0S2V5c0Rldm9pcnMoQXJyYXkuZnJvbShuZXcgU2V0KG5ld0tleXNEZXZvaXJzKSkuc29ydCgpKTtcblxuICAgICAgc2V0SXNQZW5kaW5nKGZhbHNlKTtcblxuICAgICAgZGlzcGF0Y2hSdW5zKHtcbiAgICAgICAgdHlwZTogXCJhcHBlbmRcIixcbiAgICAgICAgaXRlbToge1xuICAgICAgICAgIHNlZWQ6IE1hdGgucmFuZG9tKCksXG4gICAgICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTkpLFxuICAgICAgICAgIGR1cmF0aW9uOiBuZXcgRGF0ZSgpIC0gc3RhcnRfdGltZSxcbiAgICAgICAgICBmaWxlbmFtZTogZmlsZS5uYW1lLFxuICAgICAgICAgIGZpbGVEYXRldGltZTogYCR7ZHR9LSR7dGltZX1gLFxuICAgICAgICAgIGZyZXF1ZW5jeSxcbiAgICAgICAgICB0eXBlLFxuICAgICAgICAgIC8vIFdJUDogT0sgc3VyIEZpcmVmb3ggS08gc3VyIENocm9tZVxuICAgICAgICAgIGVycm9yOlxuICAgICAgICAgICAgZG9tLmFjdGl2ZUVsZW1lbnQgJiYgZG9tLmFjdGl2ZUVsZW1lbnQubm9kZU5hbWUgPT0gXCJwYXJzZXJlcnJvclwiLFxuICAgICAgICAgIHRvdGFsOiBmb2xkZXJzQ291bnQsXG4gICAgICAgICAgZmlsZVNpemU6IGZpbGUuc2l6ZSxcbiAgICAgICAgICBwZW9wbGU6IHBlb3BsZUNvdW50LFxuICAgICAgICAgIGRhdGVzLFxuICAgICAgICAgIGRldm9pcnMsXG4gICAgICAgICAgZHJvaXRzLFxuICAgICAgICAgIGRyb2l0c0V0RGV2b2lycyxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH07XG4gICAgcmVhZGVyLnJlYWRBc1RleHQoZmlsZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0gaGFuZGxlRmlsZT17aGFuZGxlRmlsZX0+XG4gICAgICA8QWRtaW4gY2F0ZWdvcnk9XCJCw6luw6lmaWNpYWlyZVwiIG9uUnVuUmVmcmVzaD17aGFuZGxlTmV3UnVuc30gLz5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxuICAgICAgICAgIExlY3RldXIgZGUgZmljaGllclxuICAgICAgICAgIDxiciAvPsKrIELDqW7DqWZpY2lhaXJlIMK7IGRlIGxhIENOQUZcbiAgICAgICAgPC9oMT5cblxuICAgICAgICA8RmlsZUhhbmRsZXJcbiAgICAgICAgICBoYW5kbGVGaWxlPXtoYW5kbGVGaWxlfVxuICAgICAgICAgIGlzUGVuZGluZz17aXNQZW5kaW5nfVxuICAgICAgICAgIGZpbGVTaXplPXtmaWxlU2l6ZX1cbiAgICAgICAgICBtZXNzYWdlPXtcIkNhbGN1bCBkZXMgc3RhdGlzdGlxdWVzIGVuIGNvdXJzLCBtZXJjaSBkZSBwYXRpZW50ZXJcIn1cbiAgICAgICAgLz5cblxuICAgICAgICB7cnVucyAmJiBydW5zLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuc3VidGl0bGV9PlN0YXRpc3RpcXVlcyBkcm9pdHMgJiBkZXZvaXJzPC9oMj5cblxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT17c3R5bGVzLm1hcmdpbl9zaWRlfT5cbiAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPjwvdGg+XG4gICAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5Eb3NzaWVycyAoRm95ZXJzKTwvdGg+XG4gICAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5QZXJzb25uZXM8L3RoPlxuICAgICAgICAgICAgICAgICAgPHRoIGNvbFNwYW49e2tleXNEcm9pdHMubGVuZ3RofT5cbiAgICAgICAgICAgICAgICAgICAgVmFsZXVycyBiYWxpc2VzIEVUQVRET1NSU0FcbiAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj17a2V5c0Rldm9pcnMubGVuZ3RofT5cbiAgICAgICAgICAgICAgICAgICAgVmFsZXVycyBiYWxpc2VzIFRPUFBFUlNEUk9ERVZPUlNBXG4gICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgPHRoIGNvbFNwYW49XCIzXCI+Tm9tYnJlIGRlIHBlcnNvbm5lcyBkYW5zIGZveWVyIGRyb2l0IG91dmVydCBldCB2ZXJzYWJsZTwvdGg+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICB7a2V5c0Ryb2l0cy5tYXAoayA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDx0aCBrZXk9e2t9IGNvbFNwYW49XCIxXCI+XG4gICAgICAgICAgICAgICAgICAgICAge2t9XG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIHtrZXlzRGV2b2lycy5tYXAoayA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDx0aCBrZXk9e2t9IGNvbFNwYW49XCIxXCI+XG4gICAgICAgICAgICAgICAgICAgICAge2t9XG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDx0aCBjb2xTcGFuPVwiMVwiPlNvdW1pc2VzIGRyb2l0cyAmIGRldm9pcnM8L3RoPlxuICAgICAgICAgICAgICAgICAgPHRoIGNvbFNwYW49XCIxXCI+Tm9uIHNvdW1pc2VzIGRyb2l0cyAmIGRldm9pcnM8L3RoPlxuICAgICAgICAgICAgICAgICAgPHRoIGNvbFNwYW49XCIxXCI+VG90YWw8L3RoPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICB7LyogcmV2ZXJzZSBlc3QgdXRpbGlzw6kgcG91ciBxdWUgbGVzIGZpY2hpZXJzIGFwcGFyYWlzc2VudCBkYW5zIGxldXIgb3JkcmUgZCd1cGxvYWQgKi99XG4gICAgICAgICAgICAgICAge3J1bnMucmV2ZXJzZSgpLm1hcCgociwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPHRyXG4gICAgICAgICAgICAgICAgICAgIGtleT17YCR7ci50aW1lc3RhbXB9LSR7ci5maWxlbmFtZX0tJHtyLnNlZWR9LTBgfVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17aSA9PSBkYXRlRGF0YS5pbmRleCA/IHsgYmFja2dyb3VuZENvbG9yOiBcImxpZ2h0Z3JleVwiIH0gOiB7fSB9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57aSArIDF9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+e3IudG90YWx9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+e3IucGVvcGxlfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIHtrZXlzRHJvaXRzLm1hcChrID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8dGQga2V5PXtrfSBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAge3IuZHJvaXRzW2tdIHx8IDB9XG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIHtrZXlzRGV2b2lycy5tYXAoayA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17a30gY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtyLmRldm9pcnNba10gfHwgMH1cbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+XG4gICAgICAgICAgICAgICAgICAgICAge3IuZHJvaXRzRXREZXZvaXJzWzFdIHx8IDB9XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgIHtyLmRyb2l0c0V0RGV2b2lyc1swXSB8fCAwfVxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT5cbiAgICAgICAgICAgICAgICAgICAgICB7ci5kcm9pdHNFdERldm9pcnNbXCJUb3RhbFwiXSB8fCAwfVxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICA8dGQ+VG90YWw8L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+e2NhbGN1bGF0ZVRvdGFsKFwidG90YWxcIil9PC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9PntjYWxjdWxhdGVUb3RhbChcInBlb3BsZVwiKX08L3RkPlxuICAgICAgICAgICAgICAgICAge2tleXNEcm9pdHMubWFwKGsgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8dGQga2V5PXtrfSBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgIHtjYWxjdWxhdGVUb3RhbChcImRyb2l0c1wiLCBrKSB8fCAwfVxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICB7a2V5c0Rldm9pcnMubWFwKGsgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8dGQga2V5PXtrfSBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgIHtjYWxjdWxhdGVUb3RhbChcImRldm9pcnNcIiwgaykgfHwgMH1cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+XG4gICAgICAgICAgICAgICAgICAgIHtjYWxjdWxhdGVUb3RhbChcImRyb2l0c0V0RGV2b2lyc1wiLCAxKSB8fCAwfVxuICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9PlxuICAgICAgICAgICAgICAgICAgICB7Y2FsY3VsYXRlVG90YWwoXCJkcm9pdHNFdERldm9pcnNcIiwgMCkgfHwgMH1cbiAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT5cbiAgICAgICAgICAgICAgICAgICAge2NhbGN1bGF0ZVRvdGFsKFwiZHJvaXRzRXREZXZvaXJzXCIsIFwiVG90YWxcIikgfHwgMH1cbiAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cblxuICAgICAgICAgICAgICAgIDx0cj48L3RyPlxuICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgPC90YWJsZT5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sZWdlbmRlfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sZWdlbmRlX2JveH0+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMubGVnZW5kZV90aXRsZX0+TMOpZ2VuZGUmbmJzcDs6PC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmJvbGR9PlZhbGV1ciBiYWxpc2UgRVRBVERPU1JTQTwvcD5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIDA9Tm91dmVsbGUgZGVtYW5kZSBlbiBhdHRlbnRlIGRlIGTDqWNpc2lvbiBDRyBwb3VyIG91dmVydHVyZSBkdVxuICAgICAgICAgICAgICAgICAgZHJvaXRcbiAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgMT1Ecm9pdCByZWZ1c8OpXG4gICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgIDI9RHJvaXQgb3V2ZXJ0IGV0IHZlcnNhYmxlXG4gICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgIDM9RHJvaXQgb3V2ZXJ0IGV0IHN1c3BlbmR1IChsZSBtb250YW50IGR1IGRyb2l0IGVzdFxuICAgICAgICAgICAgICAgICAgY2FsY3VsYWJsZSwgbWFpcyBsJ2V4aXN0ZW5jZSBkdSBkcm9pdCBlc3QgcmVtaXMgZW4gY2F1c2UpXG4gICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgIDQ9RHJvaXQgb3V2ZXJ0IG1haXMgdmVyc2VtZW50IHN1c3BlbmR1IChsZSBtb250YW50IGR1IGRyb2l0XG4gICAgICAgICAgICAgICAgICBuJ2VzdCBwYXMgY2FsY3VsYWJsZSlcbiAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgNT1Ecm9pdCBjbG9zXG4gICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgIDY9RHJvaXQgY2xvcyBzdXIgbW9pcyBhbnTDqXJpZXVyIGF5YW50IGV1IHVuIGNvbnRyw7RsZSBkYW5zIGxlXG4gICAgICAgICAgICAgICAgICBtb2lzIGRlIHLDqWbDqXJlbmNlIHBvdXIgdW5lIHDDqXJpb2RlIGFudMOpcmlldXJlLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGVnZW5kZV9ib3h9PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmJvbGR9PlZhbGV1ciBiYWxpc2UgVE9QUEVSU0RST0RFVk9SU0E8L3A+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAwPVBlcnNvbm5lIHBhcyBzb3VtaXNlIMOgIGRyb2l0cyBldCBkZXZvaXJzXG4gICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgIDE9UGVyc29ubmUgc291bWlzZSDDoCBkcm9pdHMgZXQgZGV2b2lyc1xuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8cD4mbmJzcDs8L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuYm9sZH0+XG4gICAgICAgICAgICAgICAgICBQZXJzb25uZXMgZGFucyBmb3llciBkcm9pdCBvdXZlcnQgZXQgdmVyc2FibGVcbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICBTb3VtaXNlcyBkcm9pdHMgJiBkZXZvaXJzIDogTm9tYnJlIGRlIHBlcnNvbm5lcyBkb250IGxhIGJhbGlzZSBUT1BQRVJTRFJPREVWT1JTQT0xIHByw6lzZW50cyBkYW5zIGRlcyBmb3llcnMgZG9udCBsYSBiYWxpc2UgRVRBVERPU1JTQT0yXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgTm9uIHNvdW1pc2VzIGRyb2l0cyAmIGRldm9pcnMgOiBOb21icmUgZGUgcGVyc29ubmVzIGRvbnQgbGEgYmFsaXNlIFRPUFBFUlNEUk9ERVZPUlNBPTAgcHLDqXNlbnRzIGRhbnMgZGVzIGZveWVycyBkb250IGxhIGJhbGlzZSBFVEFURE9TUlNBPTJcbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5zdWJ0aXRsZX0+SGlzdG9yaXF1ZTwvaDI+XG5cbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9e3N0eWxlcy5tYXJnaW5fc2lkZX0+XG4gICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj48L3RoPlxuICAgICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+RmljaGllcjwvdGg+XG4gICAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5EYXRlPC90aD5cbiAgICAgICAgICAgICAgICAgIHtkZXZNb2RlICYmIDx0aCByb3dTcGFuPVwiMlwiPlRhaWxsZTwvdGg+fVxuICAgICAgICAgICAgICAgICAge2Rldk1vZGUgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5cbiAgICAgICAgICAgICAgICAgICAgICBEdXLDqWVcbiAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAoZW4gcylcbiAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5EYXRlIGR1IGZpY2hpZXI8L3RoPlxuICAgICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+RnLDqXF1ZW5jZTwvdGg+XG4gICAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5OYXR1cmU8L3RoPlxuICAgICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+RG9zc2llcnM8L3RoPlxuICAgICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+RMOpdGFpbHM8L3RoPlxuICAgICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+RXJyZXVyPC90aD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDx0cj48L3RyPlxuICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgey8qIHJldmVyc2UgZXN0IHV0aWxpc8OpIHBvdXIgcXVlIGxlcyBmaWNoaWVycyBhcHBhcmFpc3NlbnQgZGFucyBsZXVyIG9yZHJlIGQndXBsb2FkICovfVxuICAgICAgICAgICAgICAgIHtydW5zLnJldmVyc2UoKS5tYXAoKHIsIGkpID0+IChcbiAgICAgICAgICAgICAgICAgIDx0clxuICAgICAgICAgICAgICAgICAgICBrZXk9e2Ake3IudGltZXN0YW1wfS0ke3IuZmlsZW5hbWV9LSR7ci5zZWVkfWB9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXtcbiAgICAgICAgICAgICAgICAgICAgICBpID09IGRhdGVEYXRhLmluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICA/IHsgYmFja2dyb3VuZENvbG9yOiBcImxpZ2h0Z3JleVwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDoge31cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e2kgKyAxfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57ci5maWxlbmFtZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3IudGltZXN0YW1wfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIHtkZXZNb2RlICYmIDx0ZD57ci5maWxlU2l6ZX08L3RkPn1cbiAgICAgICAgICAgICAgICAgICAge2Rldk1vZGUgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD57IWlzTmFOKHIuZHVyYXRpb24pID8gci5kdXJhdGlvbiAvIDEwMDAgOiBcIiNOL0FcIn08L3RkPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3IuZmlsZURhdGV0aW1lfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57YCR7ci5mcmVxdWVuY3l9ICgke1xuICAgICAgICAgICAgICAgICAgICAgIGZyZXF1ZW5jeU5hbWVzW3IuZnJlcXVlbmN5XSB8fCBcIj9cIlxuICAgICAgICAgICAgICAgICAgICB9KWB9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPntgJHtyLnR5cGV9ICgke3R5cGVOYW1lc1tyLnR5cGVdIHx8IFwiP1wifSlgfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5udW1lcmljfT57ci50b3RhbH08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwic2hyaW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVEYXRlSGlzdG9ncmFtfSBkYXRhLWluZGV4PXtpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFmZmljaGVyIHBhciBkYXRlXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57ci5lcnJvciA/IFwiT3VpXCIgOiBcIk5vblwifTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgPC90YWJsZT5cblxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaFJ1bnMoeyB0eXBlOiBcInJlc2V0XCIgfSl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm1hcmdpbl9ib3R0b219XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFZpZGVyIGwnaGlzdG9yaXF1ZVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG5cbiAgICAgICAge3J1bnMubGVuZ3RoICE9IDAgJiYgKFxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRleHR9PlxuICAgICAgICAgICAgVm91cyBwb3V2ZXogYWNjw6lkZXIgw6AgdW5lIHJlcHLDqXNlbnRhdGlvbiBncmFwaGlxdWUgZGUgbGEgcsOpcGFydGl0aW9uXG4gICAgICAgICAgICBkYW5zIGxlcyB0ZW1wcyBkZXMgZGVtYW5kZXMgY29ubnVlcyBkYW5zIGxlcyBmaWNoaWVycyBhbmFseXPDqXMuIFBvdXJcbiAgICAgICAgICAgIGNlbGEgaWwgZmF1dCBjbGlxdWVyIHN1ciBsZSBib3V0b24gwqsgQWZmaWNoZXIgcGFyIGRhdGUgwrsuXG4gICAgICAgICAgPC9wPlxuICAgICAgICApfVxuXG4gICAgICAgIHtkYXRlRGF0YS5pbmRleCAhPSB1bmRlZmluZWQgJiYgKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuc3VidGl0bGV9PlxuICAgICAgICAgICAgICBOb21icmUgZGUgZG9zc2llcnMgYXNzb2Npw6lzIMOgIGRlcyBkZW1hbmRlcyByw6lhbGlzw6lzIMOgIGNoYXF1ZSBkYXRlXG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IDI1MCAqIGRhdGVEYXRhLnllYXJDb3VudCArIFwicHhcIiwgd2lkdGg6IFwiMTAwJVwiIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtSZXNwb25zaXZlQ2FsZW5kYXIoZGF0ZURhdGEpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG5cbiAgICAgICAgPEZvb3RlclxuICAgICAgICAgIHN1YmplY3Q9XCJGbHV4IGLDqW7DqWZpY2lhaXJlIENOQUZcIlxuICAgICAgICAgIHBvdXJxdW9pPVwiUG91cnF1b2kgdW4gbGVjdGV1ciBkZSBmaWNoaWVyIENOQUYmbmJzcDs/XCJcbiAgICAgICAgICB0ZXh0PXtcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRleHR9PlxuICAgICAgICAgICAgICAgIFRvdXMgbGVzIGTDqXBhcnRlbWVudHMgbidvbnQgcGFzIGxlcyBvdXRpbHMgcG91ciBhbmFseXNlciBsZXNcbiAgICAgICAgICAgICAgICBmaWNoaWVycyBlbnZvecOpcyBwYXIgbGEgQ05BRi4gQ2VsYSBwZXV0IHJhbGVudGlyIGV0IGNvbXBsaXF1ZXJcbiAgICAgICAgICAgICAgICBub3Mgw6ljaGFuZ2VzLlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRleHR9PlxuICAgICAgICAgICAgICAgIEF2ZWMgY2V0IG91dGlsLCBub3VzIHNvdWhhaXRvbnMgcGVybWV0dHJlIGF1eCBwZXJzb25uZXMgcXVpIG9udFxuICAgICAgICAgICAgICAgIGFjY8OocyDDoCBjZXMgZmljaGllcnMgZCdlbiBleHRyYWlyZSBkZXMgc3RhdGlzdGlxdWVzIGfDqW7DqXJhbGVzXG4gICAgICAgICAgICAgICAgc2FucyBhdm9pciDDoCBtZXR0cmUgbGVzIG1haW5zIGRhbnMgbGUgY2FtYm91aSBlbGxlcy1tw6ptZS5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgPC9tYWluPlxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==