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

  var calculateTotal = function calculateTotal(category, index) {
    if (typeof index === 'undefined') {
      runs.reduce(function (accum, run) {
        accum = accum + (run[category] || 0);
        console.log(accum);
        return accum;
      }, 0);
    } else {
      runs.reduce(function (accum, run) {
        accum = accum + (run[category][index] || 0);
        return accum;
      }, 0);
    }
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
      lineNumber: 183,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.main,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.title,
        children: ["Lecteur de fichier", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 11
        }, this), "\xAB B\xE9n\xE9ficiaire \xBB de la CNAF"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_fileHandler__WEBPACK_IMPORTED_MODULE_5__["default"], {
        handleFile: handleFile,
        isPending: isPending,
        fileSize: fileSize,
        message: "Calcul des statistiques en cours, merci de patienter"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 9
      }, this), runs && runs.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.subtitle,
          children: "Statistiques droits & devoirs"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 199,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.margin_side,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 204,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Dossiers (Foyers)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 205,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Personnes"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 206,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                colSpan: keysDroits.length,
                children: "Valeurs balises ETATDOSRSA"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 207,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                colSpan: keysDevoirs.length,
                children: "Valeurs balises TOPPERSDRODEVORSA"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 210,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                colSpan: "3",
                children: "Nombre de personnes dans foyer droit ouvert et versable"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 213,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 203,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              children: [keysDroits.map(function (k) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                  colSpan: "1",
                  children: k
                }, k, false, {
                  fileName: _jsxFileName,
                  lineNumber: 217,
                  columnNumber: 21
                }, _this);
              }), keysDevoirs.map(function (k) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                  colSpan: "1",
                  children: k
                }, k, false, {
                  fileName: _jsxFileName,
                  lineNumber: 222,
                  columnNumber: 21
                }, _this);
              }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                colSpan: "1",
                children: "Soumises droits & devoirs"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 226,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                colSpan: "1",
                children: "Non soumises droits & devoirs"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 227,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                colSpan: "1",
                children: "Total"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 228,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 215,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 202,
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
                  lineNumber: 238,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.center,
                  children: r.total
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 239,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.center,
                  children: r.people
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 240,
                  columnNumber: 21
                }, _this), keysDroits.map(function (k) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.center,
                    children: r.droits[k] || 0
                  }, k, false, {
                    fileName: _jsxFileName,
                    lineNumber: 242,
                    columnNumber: 23
                  }, _this);
                }), keysDevoirs.map(function (k) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.center,
                    children: r.devoirs[k] || 0
                  }, k, false, {
                    fileName: _jsxFileName,
                    lineNumber: 247,
                    columnNumber: 23
                  }, _this);
                }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.center,
                  children: r.droitsEtDevoirs[1] || 0
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 251,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.center,
                  children: r.droitsEtDevoirs[0] || 0
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 254,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.center,
                  children: r.droitsEtDevoirs["Total"] || 0
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 257,
                  columnNumber: 21
                }, _this)]
              }, "".concat(r.timestamp, "-").concat(r.filename, "-").concat(r.seed, "-0"), true, {
                fileName: _jsxFileName,
                lineNumber: 234,
                columnNumber: 19
              }, _this);
            }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: "Total"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 263,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.center,
                children: calculateTotal("total")
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 264,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.center,
                children: calculateTotal("people")
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 265,
                columnNumber: 19
              }, this), keysDroits.map(function (k) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.center,
                  children: calculateTotal("droits", k) || 0
                }, k, false, {
                  fileName: _jsxFileName,
                  lineNumber: 267,
                  columnNumber: 21
                }, _this);
              }), keysDevoirs.map(function (k) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.center,
                  children: calculateTotal("devoirs", k) || 0
                }, k, false, {
                  fileName: _jsxFileName,
                  lineNumber: 272,
                  columnNumber: 21
                }, _this);
              }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.center,
                children: calculateTotal("droitsEtDevoirs", 1) || 0
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 276,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.center,
                children: calculateTotal("droitsEtDevoirs", 0) || 0
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 279,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.center,
                children: calculateTotal("droitsEtDevoirs", "Total") || 0
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 282,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 262,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 287,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 231,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 201,
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
              lineNumber: 293,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.bold,
              children: "Valeur balise ETATDOSRSA"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 294,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: ["0=Nouvelle demande en attente de d\xE9cision CG pour ouverture du droit", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 298,
                columnNumber: 19
              }, this), "1=Droit refus\xE9", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 300,
                columnNumber: 19
              }, this), "2=Droit ouvert et versable", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 302,
                columnNumber: 19
              }, this), "3=Droit ouvert et suspendu (le montant du droit est calculable, mais l'existence du droit est remis en cause)", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 305,
                columnNumber: 19
              }, this), "4=Droit ouvert mais versement suspendu (le montant du droit n'est pas calculable)", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 308,
                columnNumber: 19
              }, this), "5=Droit clos", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 310,
                columnNumber: 19
              }, this), "6=Droit clos sur mois ant\xE9rieur ayant eu un contr\xF4le dans le mois de r\xE9f\xE9rence pour une p\xE9riode ant\xE9rieure."]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 295,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 292,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.legende_box,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.bold,
              children: "Valeur balise TOPPERSDRODEVORSA"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 316,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: ["0=Personne pas soumise \xE0 droits et devoirs", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 319,
                columnNumber: 19
              }, this), "1=Personne soumise \xE0 droits et devoirs"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 317,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "\xA0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 322,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.bold,
              children: "Personnes dans foyer droit ouvert et versable"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 323,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "Soumises droits & devoirs : Nombre de personnes dont la balise TOPPERSDRODEVORSA=1 pr\xE9sents dans des foyers dont la balise ETATDOSRSA=2"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 326,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "Non soumises droits & devoirs : Nombre de personnes dont la balise TOPPERSDRODEVORSA=0 pr\xE9sents dans des foyers dont la balise ETATDOSRSA=2"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 329,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 315,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 291,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.subtitle,
          children: "Historique"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 335,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.margin_side,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 340,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Fichier"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 341,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Date"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 342,
                columnNumber: 19
              }, this), devMode && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Taille"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 343,
                columnNumber: 31
              }, this), devMode && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: ["Dur\xE9e", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 347,
                  columnNumber: 23
                }, this), "(en s)"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 345,
                columnNumber: 21
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Date du fichier"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 351,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Fr\xE9quence"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 352,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Nature"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 353,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Dossiers"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 354,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "D\xE9tails"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 355,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Erreur"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 356,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 339,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 358,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 338,
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
                  lineNumber: 371,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: r.filename
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 372,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: r.timestamp
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 373,
                  columnNumber: 21
                }, _this), devMode && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: r.fileSize
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 374,
                  columnNumber: 33
                }, _this), devMode && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: !isNaN(r.duration) ? r.duration / 1000 : "#N/A"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 376,
                  columnNumber: 23
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: r.fileDatetime
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 378,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: "".concat(r.frequency, " (").concat(_lib_cnaf__WEBPACK_IMPORTED_MODULE_8__["frequencyNames"][r.frequency] || "?", ")")
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 379,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: "".concat(r.type, " (").concat(_lib_cnaf__WEBPACK_IMPORTED_MODULE_8__["typeNames"][r.type] || "?", ")")
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 382,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.numeric,
                  children: r.total
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 383,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: "shrink",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                    onClick: handleDateHistogram,
                    "data-index": i,
                    children: "Afficher par date"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 385,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 384,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: r.error ? "Oui" : "Non"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 389,
                  columnNumber: 21
                }, _this)]
              }, "".concat(r.timestamp, "-").concat(r.filename, "-").concat(r.seed), true, {
                fileName: _jsxFileName,
                lineNumber: 363,
                columnNumber: 19
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 360,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 337,
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
          lineNumber: 395,
          columnNumber: 13
        }, this)]
      }, void 0, true), runs.length != 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.text,
        children: "Vous pouvez acc\xE9der \xE0 une repr\xE9sentation graphique de la r\xE9partition dans les temps des demandes connues dans les fichiers analys\xE9s. Pour cela il faut cliquer sur le bouton \xAB Afficher par date \xBB."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 405,
        columnNumber: 11
      }, this), dateData.index != undefined && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.subtitle,
          children: "Nombre de dossiers associ\xE9s \xE0 des demandes r\xE9alis\xE9s \xE0 chaque date"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 414,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            height: 250 * dateData.yearCount + "px",
            width: "100%"
          },
          children: Object(_components_chart__WEBPACK_IMPORTED_MODULE_4__["default"])(dateData)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 417,
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
            lineNumber: 430,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.text,
            children: "Avec cet outil, nous souhaitons permettre aux personnes qui ont acc\xE8s \xE0 ces fichiers d'en extraire des statistiques g\xE9n\xE9rales sans avoir \xE0 mettre les mains dans le camboui elles-m\xEAme."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 435,
            columnNumber: 15
          }, this)]
        }, void 0, true)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 425,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 182,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbGVjdGV1ci9jbmFmL2JlbmVmaWNpYWlyZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJyZWR1Y2VyIiwicmVkdWNlckZhY3RvcnkiLCJkZXZNb2RlIiwiQmVuZWZpY2lhaXJlIiwidXNlU3RhdGUiLCJkZXZGaWxlIiwic2V0RGV2RmlsZSIsInVzZVJlZHVjZXIiLCJpbml0UmVkdWNlciIsInJ1bnMiLCJkaXNwYXRjaFJ1bnMiLCJpc1BlbmRpbmciLCJzZXRJc1BlbmRpbmciLCJmaWxlU2l6ZSIsInNldEZpbGVTaXplIiwia2V5c0Ryb2l0cyIsInNldEtleXNEcm9pdHMiLCJrZXlzRGV2b2lycyIsInNldEtleXNEZXZvaXJzIiwiaW5kZXgiLCJ1bmRlZmluZWQiLCJkYXRhIiwiZnJvbSIsInRvIiwiZGF0ZURhdGEiLCJzZXREYXRlRGF0YSIsImhhbmRsZU5ld1J1bnMiLCJ1c2VDYWxsYmFjayIsInR5cGUiLCJmb2xkZXJzIiwidXNlRWZmZWN0IiwiaGFuZGxlRmlsZSIsImhhbmRsZURhdGVIaXN0b2dyYW0iLCJldmVudCIsInNob3dEYXRlSGlzdG9ncmFtIiwicGFyc2VJbnQiLCJ0YXJnZXQiLCJkYXRhc2V0Iiwic291cmNlIiwiZGF0ZXMiLCJPYmplY3QiLCJrZXlzIiwibWluRGF0ZSIsIm1heERhdGUiLCJtYXAiLCJkIiwiZGF0ZSIsIkRhdGUiLCJkYXkiLCJ0b0lTT1N0cmluZyIsInNsaWNlIiwidmFsdWUiLCJ5ZWFyQ291bnQiLCJnZXRZZWFyIiwiY2FsY3VsYXRlVG90YWwiLCJjYXRlZ29yeSIsInJlZHVjZSIsImFjY3VtIiwicnVuIiwiY29uc29sZSIsImxvZyIsImZpbGUiLCJzaXplIiwic3RhcnRfdGltZSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJwYXJzZXIiLCJET01QYXJzZXIiLCJkb20iLCJwYXJzZUZyb21TdHJpbmciLCJyZXN1bHQiLCJkZXNjIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJmcmVxdWVuY3kiLCJpbm5lckhUTUwiLCJkdCIsInRpbWUiLCJmb2xkZXJzQ291bnQiLCJsZW5ndGgiLCJwZW9wbGVDb3VudCIsImRyb2l0cyIsImRldm9pcnMiLCJkcm9pdHNFdERldm9pcnMiLCJhY2N1bURhdGEiLCJpIiwiZm9sZGVyIiwiZm9sZGVyX2RhdGUiLCJwZW9wbGUiLCJmb3JFYWNoIiwicCIsIm5ld0tleXNEcm9pdHMiLCJjb25jYXQiLCJBcnJheSIsIlNldCIsInNvcnQiLCJuZXdLZXlzRGV2b2lycyIsIml0ZW0iLCJzZWVkIiwiTWF0aCIsInJhbmRvbSIsInRpbWVzdGFtcCIsImR1cmF0aW9uIiwiZmlsZW5hbWUiLCJuYW1lIiwiZmlsZURhdGV0aW1lIiwiZXJyb3IiLCJhY3RpdmVFbGVtZW50Iiwibm9kZU5hbWUiLCJ0b3RhbCIsInJlYWRBc1RleHQiLCJzdHlsZXMiLCJjb250YWluZXIiLCJtYWluIiwidGl0bGUiLCJzdWJ0aXRsZSIsIm1hcmdpbl9zaWRlIiwiayIsInJldmVyc2UiLCJyIiwiYmFja2dyb3VuZENvbG9yIiwiY2VudGVyIiwibGVnZW5kZSIsImxlZ2VuZGVfYm94IiwibGVnZW5kZV90aXRsZSIsImJvbGQiLCJpc05hTiIsImZyZXF1ZW5jeU5hbWVzIiwidHlwZU5hbWVzIiwibnVtZXJpYyIsIm1hcmdpbl9ib3R0b20iLCJ0ZXh0IiwiaGVpZ2h0Iiwid2lkdGgiLCJSZXNwb25zaXZlQ2FsZW5kYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLE9BQU8sR0FBR0Msc0VBQWMsQ0FBQyw0QkFBRCxDQUE5QjtBQUNBLElBQU1DLE9BQU8sT0FBYjtBQUVlLFNBQVNDLFlBQVQsR0FBd0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFDUEMsc0RBQVEsQ0FBQyxJQUFELENBREQ7QUFBQSxNQUM5QkMsT0FEOEI7QUFBQSxNQUNyQkMsVUFEcUI7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N2Y1YjNkODYyYTdiZThmZDAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZHVjZXIsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBBZG1pbiBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9hZG1pblwiO1xuaW1wb3J0IFJlc3BvbnNpdmVDYWxlbmRhciBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9jaGFydFwiO1xuaW1wb3J0IEZpbGVIYW5kbGVyIGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2ZpbGVIYW5kbGVyXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2Zvb3RlclwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9sYXlvdXRcIjtcblxuaW1wb3J0IHsgZnJlcXVlbmN5TmFtZXMsIHR5cGVOYW1lcyB9IGZyb20gXCIuLi8uLi8uLi8uLi9saWIvY25hZlwiO1xuaW1wb3J0IHsgaW5pdFJlZHVjZXIsIHJlZHVjZXJGYWN0b3J5IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2xpYi9oaXN0b3JpcXVlXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi8uLi8uLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5cbmNvbnN0IHJlZHVjZXIgPSByZWR1Y2VyRmFjdG9yeShcIlRlc3QgLSBDTkFGIC0gQsOpbsOpZmljaWFpcmVcIik7XG5jb25zdCBkZXZNb2RlID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT0gXCJkZXZlbG9wbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCZW5lZmljaWFpcmUoKSB7XG4gIGNvbnN0IFtkZXZGaWxlLCBzZXREZXZGaWxlXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbcnVucywgZGlzcGF0Y2hSdW5zXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgW10sIGluaXRSZWR1Y2VyKTtcbiAgY29uc3QgW2lzUGVuZGluZywgc2V0SXNQZW5kaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2ZpbGVTaXplLCBzZXRGaWxlU2l6ZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2tleXNEcm9pdHMsIHNldEtleXNEcm9pdHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBba2V5c0Rldm9pcnMsIHNldEtleXNEZXZvaXJzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2RhdGVEYXRhLCBzZXREYXRlRGF0YV0gPSB1c2VTdGF0ZSh7XG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBkYXRhOiBbXSxcbiAgICBmcm9tOiBcIjIwMTYtMDMtMDFcIixcbiAgICB0bzogXCIyMDIxLTAzLTAxXCIsXG4gIH0pO1xuXG4gIGNvbnN0IGhhbmRsZU5ld1J1bnMgPSB1c2VDYWxsYmFjayhkYXRhID0+IHtcbiAgICBkaXNwYXRjaFJ1bnMoe1xuICAgICAgdHlwZTogXCJyZXNldFwiLFxuICAgICAgZm9sZGVyczogZGF0YSxcbiAgICB9KTtcbiAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZGV2RmlsZSkge1xuICAgICAgaGFuZGxlRmlsZShkZXZGaWxlKTtcbiAgICB9XG4gIH0sIFtkZXZGaWxlXSk7XG5cbiAgY29uc3QgaGFuZGxlRGF0ZUhpc3RvZ3JhbSA9IHVzZUNhbGxiYWNrKGV2ZW50ID0+XG4gICAgc2hvd0RhdGVIaXN0b2dyYW0ocGFyc2VJbnQoZXZlbnQudGFyZ2V0LmRhdGFzZXQuaW5kZXgpKVxuICApO1xuICBjb25zdCBzaG93RGF0ZUhpc3RvZ3JhbSA9IHVzZUNhbGxiYWNrKGluZGV4ID0+IHtcbiAgICBjb25zdCBzb3VyY2UgPSBydW5zW2luZGV4XTtcblxuICAgIGNvbnN0IGRhdGVzID0gT2JqZWN0LmtleXMoc291cmNlLmRhdGVzKTtcbiAgICBsZXQgbWluRGF0ZSA9IG51bGw7XG4gICAgbGV0IG1heERhdGUgPSBudWxsO1xuXG4gICAgY29uc3QgZGF0YSA9IGRhdGVzLm1hcChkID0+IHtcbiAgICAgIGxldCBkYXRlID0gbmV3IERhdGUoZCk7XG4gICAgICBpZiAoIW1pbkRhdGUpIHtcbiAgICAgICAgbWluRGF0ZSA9IGRhdGU7XG4gICAgICAgIG1heERhdGUgPSBkYXRlO1xuICAgICAgfSBlbHNlIGlmIChkYXRlIDwgbWluRGF0ZSkge1xuICAgICAgICBtaW5EYXRlID0gZGF0ZTtcbiAgICAgIH0gZWxzZSBpZiAobWF4RGF0ZSA8IGRhdGUpIHtcbiAgICAgICAgbWF4RGF0ZSA9IGRhdGU7XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICBkYXk6IGRhdGUudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCksXG4gICAgICAgIHZhbHVlOiBzb3VyY2UuZGF0ZXNbZF0sXG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgY29uc3QgeWVhckNvdW50ID0gbWF4RGF0ZS5nZXRZZWFyKCkgLSBtaW5EYXRlLmdldFllYXIoKSArIDE7XG4gICAgc2V0RGF0ZURhdGEoe1xuICAgICAgaW5kZXgsXG4gICAgICBkYXRhLFxuICAgICAgZnJvbTogbWluRGF0ZS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKSxcbiAgICAgIHRvOiBtYXhEYXRlLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApLFxuICAgICAgeWVhckNvdW50LFxuICAgIH0pO1xuICB9KTtcblxuICBjb25zdCBjYWxjdWxhdGVUb3RhbCA9IChjYXRlZ29yeSwgaW5kZXgpID0+IHtcbiAgICBpZiAodHlwZW9mIGluZGV4ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcnVucy5yZWR1Y2UoKGFjY3VtLCBydW4pID0+IHtcbiAgICAgICAgYWNjdW0gPSBhY2N1bSArIChydW5bY2F0ZWdvcnldIHx8IDApXG4gICAgICAgIGNvbnNvbGUubG9nKGFjY3VtKVxuICAgICAgICByZXR1cm4gYWNjdW1cbiAgICAgIH0sIDApXG4gICAgfSBlbHNlIHtcbiAgICAgIHJ1bnMucmVkdWNlKChhY2N1bSwgcnVuKSA9PiB7XG4gICAgICAgIGFjY3VtID0gYWNjdW0gKyAocnVuW2NhdGVnb3J5XVtpbmRleF0gfHwgMClcbiAgICAgICAgcmV0dXJuIGFjY3VtXG4gICAgICB9LCAwKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUZpbGUgPSBmaWxlID0+IHtcbiAgICBpZiAoZGV2TW9kZSAmJiBmaWxlICE9IGRldkZpbGUpIHtcbiAgICAgIHNldERldkZpbGUoZmlsZSk7XG4gICAgfVxuICAgIHNldEZpbGVTaXplKGZpbGUuc2l6ZSk7XG4gICAgc2V0SXNQZW5kaW5nKHRydWUpO1xuICAgIGNvbnN0IHN0YXJ0X3RpbWUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgY29uc3QgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuICAgICAgY29uc3QgZG9tID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhcbiAgICAgICAgZXZlbnQudGFyZ2V0LnJlc3VsdCxcbiAgICAgICAgXCJhcHBsaWNhdGlvbi94bWxcIlxuICAgICAgKTtcblxuICAgICAgY29uc3QgZGVzYyA9IGRvbS5nZXRFbGVtZW50c0J5VGFnTmFtZShcIklkZW50aWZpY2F0aW9uRmx1eFwiKVswXTtcbiAgICAgIGNvbnN0IGZyZXF1ZW5jeSA9IGRlc2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJUWVBFRkxVWFwiKVswXS5pbm5lckhUTUw7XG4gICAgICBjb25zdCB0eXBlID0gZGVzYy5nZXRFbGVtZW50c0J5VGFnTmFtZShcIk5BVEZMVVhcIilbMF0uaW5uZXJIVE1MO1xuICAgICAgY29uc3QgZHQgPSBkZXNjLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiRFRDUkVBRkxVWFwiKVswXS5pbm5lckhUTUw7XG4gICAgICBjb25zdCB0aW1lID0gZGVzYy5nZXRFbGVtZW50c0J5VGFnTmFtZShcIkhFVUNSRUFGTFVYXCIpWzBdLmlubmVySFRNTDtcbiAgICAgIGNvbnN0IGZvbGRlcnNDb3VudCA9IGRvbS5nZXRFbGVtZW50c0J5VGFnTmFtZShcIkluZm9zRm95ZXJSU0FcIikubGVuZ3RoO1xuICAgICAgY29uc3QgcGVvcGxlQ291bnQgPSBkb20uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJQZXJzb25uZVwiKS5sZW5ndGg7XG5cbiAgICAgIGNvbnN0IFtkYXRlcywgZHJvaXRzLCBkZXZvaXJzLCBkcm9pdHNFdERldm9pcnNdID0gW3t9LCB7fSwge30sIHt9XVxuICAgICAgY29uc3QgYWNjdW1EYXRhID0gKGFjY3VtLCB2YWx1ZSkgPT4ge1xuICAgICAgICBhY2N1bVt2YWx1ZV0gPSAoYWNjdW1bdmFsdWVdIHx8IDApICsgMTtcbiAgICAgICAgYWNjdW1bXCJUb3RhbFwiXSA9IChhY2N1bVtcIlRvdGFsXCJdIHx8IDApICsgMTtcbiAgICAgIH07XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZm9sZGVyc0NvdW50OyBpKyspIHtcbiAgICAgICAgY29uc3QgZm9sZGVyID0gZG9tLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiSW5mb3NGb3llclJTQVwiKVtpXTtcbiAgICAgICAgLy8gY29tcHRlIGxlcyBpbmZvcyByZWxhdGl2ZXMgYXUgZG9zc2llclxuICAgICAgICBjb25zdCBmb2xkZXJfZGF0ZSA9IGZvbGRlci5nZXRFbGVtZW50c0J5VGFnTmFtZShcIkRUREVNUlNBXCIpWzBdLmlubmVySFRNTFxuICAgICAgICBkYXRlc1tmb2xkZXJfZGF0ZV0gPSAoZGF0ZXNbZm9sZGVyX2RhdGVdIHx8IDApICsgMTtcbiAgICAgICAgaWYgKGZvbGRlci5nZXRFbGVtZW50c0J5VGFnTmFtZShcIkVUQVRET1NSU0FcIilbMF0pIHtcbiAgICAgICAgICBhY2N1bURhdGEoZHJvaXRzLCBmb2xkZXIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJFVEFURE9TUlNBXCIpWzBdLmlubmVySFRNTClcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNvbXB0ZSBsZXMgaW5mb3MgcmVsYXRpdmVzIGF1eCBwZXJzb25uZXMgcHLDqXNlbnRlcyBkYW5zIGxlIGRvc3NpZXJcbiAgICAgICAgY29uc3QgcGVvcGxlID0gZm9sZGVyLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiUGVyc29ubmVcIik7XG4gICAgICAgIFsuLi5wZW9wbGVdLmZvckVhY2gocCA9PiB7XG4gICAgICAgICAgaWYgKHAuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJUT1BQRVJTRFJPREVWT1JTQVwiKVswXSkge1xuICAgICAgICAgICAgYWNjdW1EYXRhKGRldm9pcnMsIHAuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJUT1BQRVJTRFJPREVWT1JTQVwiKVswXS5pbm5lckhUTUwpXG4gICAgICAgICAgICBpZiAoZm9sZGVyLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiRVRBVERPU1JTQVwiKVswXS5pbm5lckhUTUwgPT0gXCIyXCIpIHtcbiAgICAgICAgICAgICAgLy8gQ29tcHRlIGxlcyBpbmZvcyByZWxhdGl2ZXMgYXV4IHBlcnNvbm5lcyBwcsOpc2VudGVzIGRhbnMgbGUgZG9zc2llciBsb3JzcXVlIGxlcyBkcm9pdHMgc29udCBvdXZlcnRzXG4gICAgICAgICAgICAgIGFjY3VtRGF0YShkcm9pdHNFdERldm9pcnMsIHAuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJUT1BQRVJTRFJPREVWT1JTQVwiKVswXS5pbm5lckhUTUwpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgfVxuXG4gICAgICAvLyBzdG9yZSBsZXMgY2zDqXMgZGFucyB1biBzdGF0ZSBwb3VyIG4nYWZmaWNoZXIgZGFucyBsZSB0YWJsZWF1IHF1ZSBsZXMgZG9ubsOpZXMgcHLDqXNlbnRlc1xuICAgICAgY29uc3QgbmV3S2V5c0Ryb2l0cyA9IGtleXNEcm9pdHMuY29uY2F0KE9iamVjdC5rZXlzKGRyb2l0cykpO1xuICAgICAgc2V0S2V5c0Ryb2l0cyhBcnJheS5mcm9tKG5ldyBTZXQobmV3S2V5c0Ryb2l0cykpLnNvcnQoKSk7XG4gICAgICBjb25zdCBuZXdLZXlzRGV2b2lycyA9IGtleXNEZXZvaXJzLmNvbmNhdChPYmplY3Qua2V5cyhkZXZvaXJzKSk7XG4gICAgICBzZXRLZXlzRGV2b2lycyhBcnJheS5mcm9tKG5ldyBTZXQobmV3S2V5c0Rldm9pcnMpKS5zb3J0KCkpO1xuXG4gICAgICBzZXRJc1BlbmRpbmcoZmFsc2UpO1xuXG4gICAgICBkaXNwYXRjaFJ1bnMoe1xuICAgICAgICB0eXBlOiBcImFwcGVuZFwiLFxuICAgICAgICBpdGVtOiB7XG4gICAgICAgICAgc2VlZDogTWF0aC5yYW5kb20oKSxcbiAgICAgICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxOSksXG4gICAgICAgICAgZHVyYXRpb246IG5ldyBEYXRlKCkgLSBzdGFydF90aW1lLFxuICAgICAgICAgIGZpbGVuYW1lOiBmaWxlLm5hbWUsXG4gICAgICAgICAgZmlsZURhdGV0aW1lOiBgJHtkdH0tJHt0aW1lfWAsXG4gICAgICAgICAgZnJlcXVlbmN5LFxuICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgLy8gV0lQOiBPSyBzdXIgRmlyZWZveCBLTyBzdXIgQ2hyb21lXG4gICAgICAgICAgZXJyb3I6XG4gICAgICAgICAgICBkb20uYWN0aXZlRWxlbWVudCAmJiBkb20uYWN0aXZlRWxlbWVudC5ub2RlTmFtZSA9PSBcInBhcnNlcmVycm9yXCIsXG4gICAgICAgICAgdG90YWw6IGZvbGRlcnNDb3VudCxcbiAgICAgICAgICBmaWxlU2l6ZTogZmlsZS5zaXplLFxuICAgICAgICAgIHBlb3BsZTogcGVvcGxlQ291bnQsXG4gICAgICAgICAgZGF0ZXMsXG4gICAgICAgICAgZGV2b2lycyxcbiAgICAgICAgICBkcm9pdHMsXG4gICAgICAgICAgZHJvaXRzRXREZXZvaXJzLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfTtcbiAgICByZWFkZXIucmVhZEFzVGV4dChmaWxlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfSBoYW5kbGVGaWxlPXtoYW5kbGVGaWxlfT5cbiAgICAgIDxBZG1pbiBjYXRlZ29yeT1cIkLDqW7DqWZpY2lhaXJlXCIgb25SdW5SZWZyZXNoPXtoYW5kbGVOZXdSdW5zfSAvPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XG4gICAgICAgICAgTGVjdGV1ciBkZSBmaWNoaWVyXG4gICAgICAgICAgPGJyIC8+wqsgQsOpbsOpZmljaWFpcmUgwrsgZGUgbGEgQ05BRlxuICAgICAgICA8L2gxPlxuXG4gICAgICAgIDxGaWxlSGFuZGxlclxuICAgICAgICAgIGhhbmRsZUZpbGU9e2hhbmRsZUZpbGV9XG4gICAgICAgICAgaXNQZW5kaW5nPXtpc1BlbmRpbmd9XG4gICAgICAgICAgZmlsZVNpemU9e2ZpbGVTaXplfVxuICAgICAgICAgIG1lc3NhZ2U9e1wiQ2FsY3VsIGRlcyBzdGF0aXN0aXF1ZXMgZW4gY291cnMsIG1lcmNpIGRlIHBhdGllbnRlclwifVxuICAgICAgICAvPlxuXG4gICAgICAgIHtydW5zICYmIHJ1bnMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5zdWJ0aXRsZX0+U3RhdGlzdGlxdWVzIGRyb2l0cyAmIGRldm9pcnM8L2gyPlxuXG4gICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPXtzdHlsZXMubWFyZ2luX3NpZGV9PlxuICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+PC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPkRvc3NpZXJzIChGb3llcnMpPC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPlBlcnNvbm5lczwvdGg+XG4gICAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj17a2V5c0Ryb2l0cy5sZW5ndGh9PlxuICAgICAgICAgICAgICAgICAgICBWYWxldXJzIGJhbGlzZXMgRVRBVERPU1JTQVxuICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aCBjb2xTcGFuPXtrZXlzRGV2b2lycy5sZW5ndGh9PlxuICAgICAgICAgICAgICAgICAgICBWYWxldXJzIGJhbGlzZXMgVE9QUEVSU0RST0RFVk9SU0FcbiAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj1cIjNcIj5Ob21icmUgZGUgcGVyc29ubmVzIGRhbnMgZm95ZXIgZHJvaXQgb3V2ZXJ0IGV0IHZlcnNhYmxlPC90aD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgIHtrZXlzRHJvaXRzLm1hcChrID0+IChcbiAgICAgICAgICAgICAgICAgICAgPHRoIGtleT17a30gY29sU3Bhbj1cIjFcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7a31cbiAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAge2tleXNEZXZvaXJzLm1hcChrID0+IChcbiAgICAgICAgICAgICAgICAgICAgPHRoIGtleT17a30gY29sU3Bhbj1cIjFcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7a31cbiAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPHRoIGNvbFNwYW49XCIxXCI+U291bWlzZXMgZHJvaXRzICYgZGV2b2lyczwvdGg+XG4gICAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj1cIjFcIj5Ob24gc291bWlzZXMgZHJvaXRzICYgZGV2b2lyczwvdGg+XG4gICAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj1cIjFcIj5Ub3RhbDwvdGg+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgIHsvKiByZXZlcnNlIGVzdCB1dGlsaXPDqSBwb3VyIHF1ZSBsZXMgZmljaGllcnMgYXBwYXJhaXNzZW50IGRhbnMgbGV1ciBvcmRyZSBkJ3VwbG9hZCAqL31cbiAgICAgICAgICAgICAgICB7cnVucy5yZXZlcnNlKCkubWFwKChyLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8dHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtgJHtyLnRpbWVzdGFtcH0tJHtyLmZpbGVuYW1lfS0ke3Iuc2VlZH0tMGB9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXtpID09IGRhdGVEYXRhLmluZGV4ID8geyBiYWNrZ3JvdW5kQ29sb3I6IFwibGlnaHRncmV5XCIgfSA6IHt9IH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHRkPntpICsgMX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT57ci50b3RhbH08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT57ci5wZW9wbGV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAge2tleXNEcm9pdHMubWFwKGsgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e2t9IGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ci5kcm9pdHNba10gfHwgMH1cbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAge2tleXNEZXZvaXJzLm1hcChrID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8dGQga2V5PXtrfSBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAge3IuZGV2b2lyc1trXSB8fCAwfVxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT5cbiAgICAgICAgICAgICAgICAgICAgICB7ci5kcm9pdHNFdERldm9pcnNbMV0gfHwgMH1cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+XG4gICAgICAgICAgICAgICAgICAgICAge3IuZHJvaXRzRXREZXZvaXJzWzBdIHx8IDB9XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgIHtyLmRyb2l0c0V0RGV2b2lyc1tcIlRvdGFsXCJdIHx8IDB9XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgIDx0ZD5Ub3RhbDwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT57Y2FsY3VsYXRlVG90YWwoXCJ0b3RhbFwiKX08L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+e2NhbGN1bGF0ZVRvdGFsKFwicGVvcGxlXCIpfTwvdGQ+XG4gICAgICAgICAgICAgICAgICB7a2V5c0Ryb2l0cy5tYXAoayA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e2t9IGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+XG4gICAgICAgICAgICAgICAgICAgICAge2NhbGN1bGF0ZVRvdGFsKFwiZHJvaXRzXCIsIGspIHx8IDB9XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIHtrZXlzRGV2b2lycy5tYXAoayA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e2t9IGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+XG4gICAgICAgICAgICAgICAgICAgICAge2NhbGN1bGF0ZVRvdGFsKFwiZGV2b2lyc1wiLCBrKSB8fCAwfVxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT5cbiAgICAgICAgICAgICAgICAgICAge2NhbGN1bGF0ZVRvdGFsKFwiZHJvaXRzRXREZXZvaXJzXCIsIDEpIHx8IDB9XG4gICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+XG4gICAgICAgICAgICAgICAgICAgIHtjYWxjdWxhdGVUb3RhbChcImRyb2l0c0V0RGV2b2lyc1wiLCAwKSB8fCAwfVxuICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9PlxuICAgICAgICAgICAgICAgICAgICB7Y2FsY3VsYXRlVG90YWwoXCJkcm9pdHNFdERldm9pcnNcIiwgXCJUb3RhbFwiKSB8fCAwfVxuICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuXG4gICAgICAgICAgICAgICAgPHRyPjwvdHI+XG4gICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICA8L3RhYmxlPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxlZ2VuZGV9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxlZ2VuZGVfYm94fT5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5sZWdlbmRlX3RpdGxlfT5Mw6lnZW5kZSZuYnNwOzo8L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuYm9sZH0+VmFsZXVyIGJhbGlzZSBFVEFURE9TUlNBPC9wPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgMD1Ob3V2ZWxsZSBkZW1hbmRlIGVuIGF0dGVudGUgZGUgZMOpY2lzaW9uIENHIHBvdXIgb3V2ZXJ0dXJlIGR1XG4gICAgICAgICAgICAgICAgICBkcm9pdFxuICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAxPURyb2l0IHJlZnVzw6lcbiAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgMj1Ecm9pdCBvdXZlcnQgZXQgdmVyc2FibGVcbiAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgMz1Ecm9pdCBvdXZlcnQgZXQgc3VzcGVuZHUgKGxlIG1vbnRhbnQgZHUgZHJvaXQgZXN0XG4gICAgICAgICAgICAgICAgICBjYWxjdWxhYmxlLCBtYWlzIGwnZXhpc3RlbmNlIGR1IGRyb2l0IGVzdCByZW1pcyBlbiBjYXVzZSlcbiAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgND1Ecm9pdCBvdXZlcnQgbWFpcyB2ZXJzZW1lbnQgc3VzcGVuZHUgKGxlIG1vbnRhbnQgZHUgZHJvaXRcbiAgICAgICAgICAgICAgICAgIG4nZXN0IHBhcyBjYWxjdWxhYmxlKVxuICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICA1PURyb2l0IGNsb3NcbiAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgNj1Ecm9pdCBjbG9zIHN1ciBtb2lzIGFudMOpcmlldXIgYXlhbnQgZXUgdW4gY29udHLDtGxlIGRhbnMgbGVcbiAgICAgICAgICAgICAgICAgIG1vaXMgZGUgcsOpZsOpcmVuY2UgcG91ciB1bmUgcMOpcmlvZGUgYW50w6lyaWV1cmUuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sZWdlbmRlX2JveH0+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuYm9sZH0+VmFsZXVyIGJhbGlzZSBUT1BQRVJTRFJPREVWT1JTQTwvcD5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIDA9UGVyc29ubmUgcGFzIHNvdW1pc2Ugw6AgZHJvaXRzIGV0IGRldm9pcnNcbiAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgMT1QZXJzb25uZSBzb3VtaXNlIMOgIGRyb2l0cyBldCBkZXZvaXJzXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxwPiZuYnNwOzwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5ib2xkfT5cbiAgICAgICAgICAgICAgICAgIFBlcnNvbm5lcyBkYW5zIGZveWVyIGRyb2l0IG91dmVydCBldCB2ZXJzYWJsZVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIFNvdW1pc2VzIGRyb2l0cyAmIGRldm9pcnMgOiBOb21icmUgZGUgcGVyc29ubmVzIGRvbnQgbGEgYmFsaXNlIFRPUFBFUlNEUk9ERVZPUlNBPTEgcHLDqXNlbnRzIGRhbnMgZGVzIGZveWVycyBkb250IGxhIGJhbGlzZSBFVEFURE9TUlNBPTJcbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICBOb24gc291bWlzZXMgZHJvaXRzICYgZGV2b2lycyA6IE5vbWJyZSBkZSBwZXJzb25uZXMgZG9udCBsYSBiYWxpc2UgVE9QUEVSU0RST0RFVk9SU0E9MCBwcsOpc2VudHMgZGFucyBkZXMgZm95ZXJzIGRvbnQgbGEgYmFsaXNlIEVUQVRET1NSU0E9MlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnN1YnRpdGxlfT5IaXN0b3JpcXVlPC9oMj5cblxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT17c3R5bGVzLm1hcmdpbl9zaWRlfT5cbiAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPjwvdGg+XG4gICAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5GaWNoaWVyPC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPkRhdGU8L3RoPlxuICAgICAgICAgICAgICAgICAge2Rldk1vZGUgJiYgPHRoIHJvd1NwYW49XCIyXCI+VGFpbGxlPC90aD59XG4gICAgICAgICAgICAgICAgICB7ZGV2TW9kZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPlxuICAgICAgICAgICAgICAgICAgICAgIER1csOpZVxuICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgIChlbiBzKVxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPkRhdGUgZHUgZmljaGllcjwvdGg+XG4gICAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5GcsOpcXVlbmNlPC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPk5hdHVyZTwvdGg+XG4gICAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5Eb3NzaWVyczwvdGg+XG4gICAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5Ew6l0YWlsczwvdGg+XG4gICAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5FcnJldXI8L3RoPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPHRyPjwvdHI+XG4gICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICB7LyogcmV2ZXJzZSBlc3QgdXRpbGlzw6kgcG91ciBxdWUgbGVzIGZpY2hpZXJzIGFwcGFyYWlzc2VudCBkYW5zIGxldXIgb3JkcmUgZCd1cGxvYWQgKi99XG4gICAgICAgICAgICAgICAge3J1bnMucmV2ZXJzZSgpLm1hcCgociwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPHRyXG4gICAgICAgICAgICAgICAgICAgIGtleT17YCR7ci50aW1lc3RhbXB9LSR7ci5maWxlbmFtZX0tJHtyLnNlZWR9YH1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e1xuICAgICAgICAgICAgICAgICAgICAgIGkgPT0gZGF0ZURhdGEuaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgID8geyBiYWNrZ3JvdW5kQ29sb3I6IFwibGlnaHRncmV5XCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgOiB7fVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57aSArIDF9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPntyLmZpbGVuYW1lfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57ci50aW1lc3RhbXB9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAge2Rldk1vZGUgJiYgPHRkPntyLmZpbGVTaXplfTwvdGQ+fVxuICAgICAgICAgICAgICAgICAgICB7ZGV2TW9kZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgPHRkPnshaXNOYU4oci5kdXJhdGlvbikgPyByLmR1cmF0aW9uIC8gMTAwMCA6IFwiI04vQVwifTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57ci5maWxlRGF0ZXRpbWV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPntgJHtyLmZyZXF1ZW5jeX0gKCR7XG4gICAgICAgICAgICAgICAgICAgICAgZnJlcXVlbmN5TmFtZXNbci5mcmVxdWVuY3ldIHx8IFwiP1wiXG4gICAgICAgICAgICAgICAgICAgIH0pYH08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e2Ake3IudHlwZX0gKCR7dHlwZU5hbWVzW3IudHlwZV0gfHwgXCI/XCJ9KWB9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLm51bWVyaWN9PntyLnRvdGFsfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJzaHJpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZURhdGVIaXN0b2dyYW19IGRhdGEtaW5kZXg9e2l9PlxuICAgICAgICAgICAgICAgICAgICAgICAgQWZmaWNoZXIgcGFyIGRhdGVcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPntyLmVycm9yID8gXCJPdWlcIiA6IFwiTm9uXCJ9PC90ZD5cbiAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICA8L3RhYmxlPlxuXG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoUnVucyh7IHR5cGU6IFwicmVzZXRcIiB9KX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubWFyZ2luX2JvdHRvbX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgVmlkZXIgbCdoaXN0b3JpcXVlXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cblxuICAgICAgICB7cnVucy5sZW5ndGggIT0gMCAmJiAoXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+XG4gICAgICAgICAgICBWb3VzIHBvdXZleiBhY2PDqWRlciDDoCB1bmUgcmVwcsOpc2VudGF0aW9uIGdyYXBoaXF1ZSBkZSBsYSByw6lwYXJ0aXRpb25cbiAgICAgICAgICAgIGRhbnMgbGVzIHRlbXBzIGRlcyBkZW1hbmRlcyBjb25udWVzIGRhbnMgbGVzIGZpY2hpZXJzIGFuYWx5c8Opcy4gUG91clxuICAgICAgICAgICAgY2VsYSBpbCBmYXV0IGNsaXF1ZXIgc3VyIGxlIGJvdXRvbiDCqyBBZmZpY2hlciBwYXIgZGF0ZSDCuy5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICl9XG5cbiAgICAgICAge2RhdGVEYXRhLmluZGV4ICE9IHVuZGVmaW5lZCAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5zdWJ0aXRsZX0+XG4gICAgICAgICAgICAgIE5vbWJyZSBkZSBkb3NzaWVycyBhc3NvY2nDqXMgw6AgZGVzIGRlbWFuZGVzIHLDqWFsaXPDqXMgw6AgY2hhcXVlIGRhdGVcbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogMjUwICogZGF0ZURhdGEueWVhckNvdW50ICsgXCJweFwiLCB3aWR0aDogXCIxMDAlXCIgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge1Jlc3BvbnNpdmVDYWxlbmRhcihkYXRlRGF0YSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cblxuICAgICAgICA8Rm9vdGVyXG4gICAgICAgICAgc3ViamVjdD1cIkZsdXggYsOpbsOpZmljaWFpcmUgQ05BRlwiXG4gICAgICAgICAgcG91cnF1b2k9XCJQb3VycXVvaSB1biBsZWN0ZXVyIGRlIGZpY2hpZXIgQ05BRiZuYnNwOz9cIlxuICAgICAgICAgIHRleHQ9e1xuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+XG4gICAgICAgICAgICAgICAgVG91cyBsZXMgZMOpcGFydGVtZW50cyBuJ29udCBwYXMgbGVzIG91dGlscyBwb3VyIGFuYWx5c2VyIGxlc1xuICAgICAgICAgICAgICAgIGZpY2hpZXJzIGVudm95w6lzIHBhciBsYSBDTkFGLiBDZWxhIHBldXQgcmFsZW50aXIgZXQgY29tcGxpcXVlclxuICAgICAgICAgICAgICAgIG5vcyDDqWNoYW5nZXMuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+XG4gICAgICAgICAgICAgICAgQXZlYyBjZXQgb3V0aWwsIG5vdXMgc291aGFpdG9ucyBwZXJtZXR0cmUgYXV4IHBlcnNvbm5lcyBxdWkgb250XG4gICAgICAgICAgICAgICAgYWNjw6hzIMOgIGNlcyBmaWNoaWVycyBkJ2VuIGV4dHJhaXJlIGRlcyBzdGF0aXN0aXF1ZXMgZ8OpbsOpcmFsZXNcbiAgICAgICAgICAgICAgICBzYW5zIGF2b2lyIMOgIG1ldHRyZSBsZXMgbWFpbnMgZGFucyBsZSBjYW1ib3VpIGVsbGVzLW3Dqm1lLlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICB9XG4gICAgICAgIC8+XG4gICAgICA8L21haW4+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9