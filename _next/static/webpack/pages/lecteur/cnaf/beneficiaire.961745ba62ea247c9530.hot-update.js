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
        accum + (run[category] || 0);
      }, 0);
    } else {
      runs.reduce(function (accum, run) {
        accum + (run[category][index] || 0);
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
      lineNumber: 180,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.main,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.title,
        children: ["Lecteur de fichier", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 11
        }, this), "\xAB B\xE9n\xE9ficiaire \xBB de la CNAF"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_fileHandler__WEBPACK_IMPORTED_MODULE_5__["default"], {
        handleFile: handleFile,
        isPending: isPending,
        fileSize: fileSize,
        message: "Calcul des statistiques en cours, merci de patienter"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 9
      }, this), runs && runs.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.subtitle,
          children: "Statistiques droits & devoirs"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.margin_side,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 201,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Dossiers (Foyers)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 202,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Personnes"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 203,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                colSpan: keysDroits.length,
                children: "Valeurs balises ETATDOSRSA"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 204,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                colSpan: keysDevoirs.length,
                children: "Valeurs balises TOPPERSDRODEVORSA"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 207,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                colSpan: "3",
                children: "Nombre de personnes dans foyer droit ouvert et versable"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 210,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 200,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              children: [keysDroits.map(function (k) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                  colSpan: "1",
                  children: k
                }, k, false, {
                  fileName: _jsxFileName,
                  lineNumber: 214,
                  columnNumber: 21
                }, _this);
              }), keysDevoirs.map(function (k) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                  colSpan: "1",
                  children: k
                }, k, false, {
                  fileName: _jsxFileName,
                  lineNumber: 219,
                  columnNumber: 21
                }, _this);
              }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                colSpan: "1",
                children: "Soumises droits & devoirs"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 223,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                colSpan: "1",
                children: "Non soumises droits & devoirs"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 224,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                colSpan: "1",
                children: "Total"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 225,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 212,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 199,
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
                  lineNumber: 235,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.center,
                  children: r.total
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 236,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.center,
                  children: r.people
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 237,
                  columnNumber: 21
                }, _this), keysDroits.map(function (k) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.center,
                    children: r.droits[k] || 0
                  }, k, false, {
                    fileName: _jsxFileName,
                    lineNumber: 239,
                    columnNumber: 23
                  }, _this);
                }), keysDevoirs.map(function (k) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.center,
                    children: r.devoirs[k] || 0
                  }, k, false, {
                    fileName: _jsxFileName,
                    lineNumber: 244,
                    columnNumber: 23
                  }, _this);
                }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.center,
                  children: r.droitsEtDevoirs[1] || 0
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 248,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.center,
                  children: r.droitsEtDevoirs[0] || 0
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 251,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.center,
                  children: r.droitsEtDevoirs["Total"] || 0
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 254,
                  columnNumber: 21
                }, _this)]
              }, "".concat(r.timestamp, "-").concat(r.filename, "-").concat(r.seed, "-0"), true, {
                fileName: _jsxFileName,
                lineNumber: 231,
                columnNumber: 19
              }, _this);
            }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: "Total"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 260,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.center,
                children: calculateTotal("total")
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 261,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.center,
                children: calculateTotal("people")
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 262,
                columnNumber: 19
              }, this), keysDroits.map(function (k) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.center,
                  children: calculateTotal("droits", k) || 0
                }, k, false, {
                  fileName: _jsxFileName,
                  lineNumber: 264,
                  columnNumber: 21
                }, _this);
              }), keysDevoirs.map(function (k) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.center,
                  children: calculateTotal("devoirs", k) || 0
                }, k, false, {
                  fileName: _jsxFileName,
                  lineNumber: 269,
                  columnNumber: 21
                }, _this);
              }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.center,
                children: calculateTotal("droitsEtDevoirs", 1) || 0
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 273,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.center,
                children: calculateTotal("droitsEtDevoirs", 0) || 0
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 276,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.center,
                children: calculateTotal("droitsEtDevoirs", "Total") || 0
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 279,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 259,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 284,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 228,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 198,
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
              lineNumber: 290,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.bold,
              children: "Valeur balise ETATDOSRSA"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 291,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: ["0=Nouvelle demande en attente de d\xE9cision CG pour ouverture du droit", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 295,
                columnNumber: 19
              }, this), "1=Droit refus\xE9", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 297,
                columnNumber: 19
              }, this), "2=Droit ouvert et versable", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 299,
                columnNumber: 19
              }, this), "3=Droit ouvert et suspendu (le montant du droit est calculable, mais l'existence du droit est remis en cause)", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 302,
                columnNumber: 19
              }, this), "4=Droit ouvert mais versement suspendu (le montant du droit n'est pas calculable)", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 305,
                columnNumber: 19
              }, this), "5=Droit clos", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 307,
                columnNumber: 19
              }, this), "6=Droit clos sur mois ant\xE9rieur ayant eu un contr\xF4le dans le mois de r\xE9f\xE9rence pour une p\xE9riode ant\xE9rieure."]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 292,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 289,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.legende_box,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.bold,
              children: "Valeur balise TOPPERSDRODEVORSA"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 313,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: ["0=Personne pas soumise \xE0 droits et devoirs", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 316,
                columnNumber: 19
              }, this), "1=Personne soumise \xE0 droits et devoirs"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 314,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "\xA0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 319,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.bold,
              children: "Personnes dans foyer droit ouvert et versable"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 320,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "Soumises droits & devoirs : Nombre de personnes dont la balise TOPPERSDRODEVORSA=1 pr\xE9sents dans des foyers dont la balise ETATDOSRSA=2"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 323,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "Non soumises droits & devoirs : Nombre de personnes dont la balise TOPPERSDRODEVORSA=0 pr\xE9sents dans des foyers dont la balise ETATDOSRSA=2"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 326,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 312,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 288,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.subtitle,
          children: "Historique"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 332,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.margin_side,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 337,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Fichier"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 338,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Date"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 339,
                columnNumber: 19
              }, this), devMode && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Taille"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 340,
                columnNumber: 31
              }, this), devMode && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: ["Dur\xE9e", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 344,
                  columnNumber: 23
                }, this), "(en s)"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 342,
                columnNumber: 21
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Date du fichier"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 348,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Fr\xE9quence"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 349,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Nature"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 350,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Dossiers"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 351,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "D\xE9tails"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 352,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Erreur"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 353,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 336,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 355,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 335,
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
                  lineNumber: 368,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: r.filename
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 369,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: r.timestamp
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 370,
                  columnNumber: 21
                }, _this), devMode && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: r.fileSize
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 371,
                  columnNumber: 33
                }, _this), devMode && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: !isNaN(r.duration) ? r.duration / 1000 : "#N/A"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 373,
                  columnNumber: 23
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: r.fileDatetime
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 375,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: "".concat(r.frequency, " (").concat(_lib_cnaf__WEBPACK_IMPORTED_MODULE_8__["frequencyNames"][r.frequency] || "?", ")")
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 376,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: "".concat(r.type, " (").concat(_lib_cnaf__WEBPACK_IMPORTED_MODULE_8__["typeNames"][r.type] || "?", ")")
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 379,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.numeric,
                  children: r.total
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 380,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: "shrink",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                    onClick: handleDateHistogram,
                    "data-index": i,
                    children: "Afficher par date"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 382,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 381,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: r.error ? "Oui" : "Non"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 386,
                  columnNumber: 21
                }, _this)]
              }, "".concat(r.timestamp, "-").concat(r.filename, "-").concat(r.seed), true, {
                fileName: _jsxFileName,
                lineNumber: 360,
                columnNumber: 19
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 357,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 334,
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
          lineNumber: 392,
          columnNumber: 13
        }, this)]
      }, void 0, true), runs.length != 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.text,
        children: "Vous pouvez acc\xE9der \xE0 une repr\xE9sentation graphique de la r\xE9partition dans les temps des demandes connues dans les fichiers analys\xE9s. Pour cela il faut cliquer sur le bouton \xAB Afficher par date \xBB."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 402,
        columnNumber: 11
      }, this), dateData.index != undefined && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.subtitle,
          children: "Nombre de dossiers associ\xE9s \xE0 des demandes r\xE9alis\xE9s \xE0 chaque date"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 411,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            height: 250 * dateData.yearCount + "px",
            width: "100%"
          },
          children: Object(_components_chart__WEBPACK_IMPORTED_MODULE_4__["default"])(dateData)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 414,
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
            lineNumber: 427,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.text,
            children: "Avec cet outil, nous souhaitons permettre aux personnes qui ont acc\xE8s \xE0 ces fichiers d'en extraire des statistiques g\xE9n\xE9rales sans avoir \xE0 mettre les mains dans le camboui elles-m\xEAme."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 432,
            columnNumber: 15
          }, this)]
        }, void 0, true)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 422,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 179,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbGVjdGV1ci9jbmFmL2JlbmVmaWNpYWlyZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJyZWR1Y2VyIiwicmVkdWNlckZhY3RvcnkiLCJkZXZNb2RlIiwiQmVuZWZpY2lhaXJlIiwidXNlU3RhdGUiLCJkZXZGaWxlIiwic2V0RGV2RmlsZSIsInVzZVJlZHVjZXIiLCJpbml0UmVkdWNlciIsInJ1bnMiLCJkaXNwYXRjaFJ1bnMiLCJpc1BlbmRpbmciLCJzZXRJc1BlbmRpbmciLCJmaWxlU2l6ZSIsInNldEZpbGVTaXplIiwia2V5c0Ryb2l0cyIsInNldEtleXNEcm9pdHMiLCJrZXlzRGV2b2lycyIsInNldEtleXNEZXZvaXJzIiwiaW5kZXgiLCJ1bmRlZmluZWQiLCJkYXRhIiwiZnJvbSIsInRvIiwiZGF0ZURhdGEiLCJzZXREYXRlRGF0YSIsImhhbmRsZU5ld1J1bnMiLCJ1c2VDYWxsYmFjayIsInR5cGUiLCJmb2xkZXJzIiwidXNlRWZmZWN0IiwiaGFuZGxlRmlsZSIsImhhbmRsZURhdGVIaXN0b2dyYW0iLCJldmVudCIsInNob3dEYXRlSGlzdG9ncmFtIiwicGFyc2VJbnQiLCJ0YXJnZXQiLCJkYXRhc2V0Iiwic291cmNlIiwiZGF0ZXMiLCJPYmplY3QiLCJrZXlzIiwibWluRGF0ZSIsIm1heERhdGUiLCJtYXAiLCJkIiwiZGF0ZSIsIkRhdGUiLCJkYXkiLCJ0b0lTT1N0cmluZyIsInNsaWNlIiwidmFsdWUiLCJ5ZWFyQ291bnQiLCJnZXRZZWFyIiwiY2FsY3VsYXRlVG90YWwiLCJjYXRlZ29yeSIsInJlZHVjZSIsImFjY3VtIiwicnVuIiwiZmlsZSIsInNpemUiLCJzdGFydF90aW1lIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsInBhcnNlciIsIkRPTVBhcnNlciIsImRvbSIsInBhcnNlRnJvbVN0cmluZyIsInJlc3VsdCIsImRlc2MiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImZyZXF1ZW5jeSIsImlubmVySFRNTCIsImR0IiwidGltZSIsImZvbGRlcnNDb3VudCIsImxlbmd0aCIsInBlb3BsZUNvdW50IiwiZHJvaXRzIiwiZGV2b2lycyIsImRyb2l0c0V0RGV2b2lycyIsImFjY3VtRGF0YSIsImkiLCJmb2xkZXIiLCJmb2xkZXJfZGF0ZSIsInBlb3BsZSIsImZvckVhY2giLCJwIiwibmV3S2V5c0Ryb2l0cyIsImNvbmNhdCIsIkFycmF5IiwiU2V0Iiwic29ydCIsIm5ld0tleXNEZXZvaXJzIiwiaXRlbSIsInNlZWQiLCJNYXRoIiwicmFuZG9tIiwidGltZXN0YW1wIiwiZHVyYXRpb24iLCJmaWxlbmFtZSIsIm5hbWUiLCJmaWxlRGF0ZXRpbWUiLCJlcnJvciIsImFjdGl2ZUVsZW1lbnQiLCJub2RlTmFtZSIsInRvdGFsIiwicmVhZEFzVGV4dCIsInN0eWxlcyIsImNvbnRhaW5lciIsIm1haW4iLCJ0aXRsZSIsInN1YnRpdGxlIiwibWFyZ2luX3NpZGUiLCJrIiwicmV2ZXJzZSIsInIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjZW50ZXIiLCJsZWdlbmRlIiwibGVnZW5kZV9ib3giLCJsZWdlbmRlX3RpdGxlIiwiYm9sZCIsImlzTmFOIiwiZnJlcXVlbmN5TmFtZXMiLCJ0eXBlTmFtZXMiLCJudW1lcmljIiwibWFyZ2luX2JvdHRvbSIsInRleHQiLCJoZWlnaHQiLCJ3aWR0aCIsIlJlc3BvbnNpdmVDYWxlbmRhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHQyxzRUFBYyxDQUFDLDRCQUFELENBQTlCO0FBQ0EsSUFBTUMsT0FBTyxPQUFiO0FBRWUsU0FBU0MsWUFBVCxHQUF3QjtBQUFBOztBQUFBOztBQUFBLGtCQUNQQyxzREFBUSxDQUFDLElBQUQsQ0FERDtBQUFBLE1BQzlCQyxPQUQ4QjtBQUFBLE1BQ3JCQyxVQURxQjs7QUFBQSxvQkFFUkMsd0RB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QkFBUyxFQUFFZ0MsK0RBQU0sQ0FBQ29CLElBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBN05KLEVBb09HekcsUUFBUSxDQUFDTCxLQUFULElBQWtCQyxTQUFsQixpQkFDQztBQUFBLGdDQUNFO0FBQUksbUJBQVMsRUFBRXlGLCtEQUFNLENBQUNJLFFBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBSUU7QUFDRSxlQUFLLEVBQUU7QUFBRWlCLGtCQUFNLEVBQUUsTUFBTTFHLFFBQVEsQ0FBQzRCLFNBQWYsR0FBMkIsSUFBckM7QUFBMkMrRSxpQkFBSyxFQUFFO0FBQWxELFdBRFQ7QUFBQSxvQkFHR0MsaUVBQWtCLENBQUM1RyxRQUFEO0FBSHJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkY7QUFBQSxzQkFyT0osZUFpUEUscUVBQUMsMERBQUQ7QUFDRSxlQUFPLEVBQUMsOEJBRFY7QUFFRSxnQkFBUSxFQUFDLDBDQUZYO0FBR0UsWUFBSSxlQUNGO0FBQUEsa0NBQ0U7QUFBRyxxQkFBUyxFQUFFcUYsK0RBQU0sQ0FBQ29CLElBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBTUU7QUFBRyxxQkFBUyxFQUFFcEIsK0RBQU0sQ0FBQ29CLElBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQU5GO0FBQUE7QUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBalBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBeVFEOztHQTNhdUI5SCxZOztLQUFBQSxZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xlY3RldXIvY25hZi9iZW5lZmljaWFpcmUuOTYxNzQ1YmE2MmVhMjQ3Yzk1MzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZHVjZXIsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBBZG1pbiBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9hZG1pblwiO1xuaW1wb3J0IFJlc3BvbnNpdmVDYWxlbmRhciBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9jaGFydFwiO1xuaW1wb3J0IEZpbGVIYW5kbGVyIGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2ZpbGVIYW5kbGVyXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2Zvb3RlclwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9sYXlvdXRcIjtcblxuaW1wb3J0IHsgZnJlcXVlbmN5TmFtZXMsIHR5cGVOYW1lcyB9IGZyb20gXCIuLi8uLi8uLi8uLi9saWIvY25hZlwiO1xuaW1wb3J0IHsgaW5pdFJlZHVjZXIsIHJlZHVjZXJGYWN0b3J5IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2xpYi9oaXN0b3JpcXVlXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi8uLi8uLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5cbmNvbnN0IHJlZHVjZXIgPSByZWR1Y2VyRmFjdG9yeShcIlRlc3QgLSBDTkFGIC0gQsOpbsOpZmljaWFpcmVcIik7XG5jb25zdCBkZXZNb2RlID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT0gXCJkZXZlbG9wbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCZW5lZmljaWFpcmUoKSB7XG4gIGNvbnN0IFtkZXZGaWxlLCBzZXREZXZGaWxlXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbcnVucywgZGlzcGF0Y2hSdW5zXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgW10sIGluaXRSZWR1Y2VyKTtcbiAgY29uc3QgW2lzUGVuZGluZywgc2V0SXNQZW5kaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2ZpbGVTaXplLCBzZXRGaWxlU2l6ZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2tleXNEcm9pdHMsIHNldEtleXNEcm9pdHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBba2V5c0Rldm9pcnMsIHNldEtleXNEZXZvaXJzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2RhdGVEYXRhLCBzZXREYXRlRGF0YV0gPSB1c2VTdGF0ZSh7XG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBkYXRhOiBbXSxcbiAgICBmcm9tOiBcIjIwMTYtMDMtMDFcIixcbiAgICB0bzogXCIyMDIxLTAzLTAxXCIsXG4gIH0pO1xuXG4gIGNvbnN0IGhhbmRsZU5ld1J1bnMgPSB1c2VDYWxsYmFjayhkYXRhID0+IHtcbiAgICBkaXNwYXRjaFJ1bnMoe1xuICAgICAgdHlwZTogXCJyZXNldFwiLFxuICAgICAgZm9sZGVyczogZGF0YSxcbiAgICB9KTtcbiAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZGV2RmlsZSkge1xuICAgICAgaGFuZGxlRmlsZShkZXZGaWxlKTtcbiAgICB9XG4gIH0sIFtkZXZGaWxlXSk7XG5cbiAgY29uc3QgaGFuZGxlRGF0ZUhpc3RvZ3JhbSA9IHVzZUNhbGxiYWNrKGV2ZW50ID0+XG4gICAgc2hvd0RhdGVIaXN0b2dyYW0ocGFyc2VJbnQoZXZlbnQudGFyZ2V0LmRhdGFzZXQuaW5kZXgpKVxuICApO1xuICBjb25zdCBzaG93RGF0ZUhpc3RvZ3JhbSA9IHVzZUNhbGxiYWNrKGluZGV4ID0+IHtcbiAgICBjb25zdCBzb3VyY2UgPSBydW5zW2luZGV4XTtcblxuICAgIGNvbnN0IGRhdGVzID0gT2JqZWN0LmtleXMoc291cmNlLmRhdGVzKTtcbiAgICBsZXQgbWluRGF0ZSA9IG51bGw7XG4gICAgbGV0IG1heERhdGUgPSBudWxsO1xuXG4gICAgY29uc3QgZGF0YSA9IGRhdGVzLm1hcChkID0+IHtcbiAgICAgIGxldCBkYXRlID0gbmV3IERhdGUoZCk7XG4gICAgICBpZiAoIW1pbkRhdGUpIHtcbiAgICAgICAgbWluRGF0ZSA9IGRhdGU7XG4gICAgICAgIG1heERhdGUgPSBkYXRlO1xuICAgICAgfSBlbHNlIGlmIChkYXRlIDwgbWluRGF0ZSkge1xuICAgICAgICBtaW5EYXRlID0gZGF0ZTtcbiAgICAgIH0gZWxzZSBpZiAobWF4RGF0ZSA8IGRhdGUpIHtcbiAgICAgICAgbWF4RGF0ZSA9IGRhdGU7XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICBkYXk6IGRhdGUudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCksXG4gICAgICAgIHZhbHVlOiBzb3VyY2UuZGF0ZXNbZF0sXG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgY29uc3QgeWVhckNvdW50ID0gbWF4RGF0ZS5nZXRZZWFyKCkgLSBtaW5EYXRlLmdldFllYXIoKSArIDE7XG4gICAgc2V0RGF0ZURhdGEoe1xuICAgICAgaW5kZXgsXG4gICAgICBkYXRhLFxuICAgICAgZnJvbTogbWluRGF0ZS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKSxcbiAgICAgIHRvOiBtYXhEYXRlLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApLFxuICAgICAgeWVhckNvdW50LFxuICAgIH0pO1xuICB9KTtcblxuICBjb25zdCBjYWxjdWxhdGVUb3RhbCA9IChjYXRlZ29yeSwgaW5kZXgpID0+IHtcbiAgICBpZiAodHlwZW9mIGluZGV4ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcnVucy5yZWR1Y2UoKGFjY3VtLCBydW4pID0+IHtcbiAgICAgICAgYWNjdW0gKyAocnVuW2NhdGVnb3J5XSB8fCAwKVxuICAgICAgfSwgMClcbiAgICB9IGVsc2Uge1xuICAgICAgcnVucy5yZWR1Y2UoKGFjY3VtLCBydW4pID0+IHtcbiAgICAgICAgYWNjdW0gKyAocnVuW2NhdGVnb3J5XVtpbmRleF0gfHwgMClcbiAgICAgIH0sIDApXG4gICAgfVxuICB9XG5cbiAgY29uc3QgaGFuZGxlRmlsZSA9IGZpbGUgPT4ge1xuICAgIGlmIChkZXZNb2RlICYmIGZpbGUgIT0gZGV2RmlsZSkge1xuICAgICAgc2V0RGV2RmlsZShmaWxlKTtcbiAgICB9XG4gICAgc2V0RmlsZVNpemUoZmlsZS5zaXplKTtcbiAgICBzZXRJc1BlbmRpbmcodHJ1ZSk7XG4gICAgY29uc3Qgc3RhcnRfdGltZSA9IG5ldyBEYXRlKCk7XG5cbiAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBjb25zdCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG4gICAgICBjb25zdCBkb20gPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKFxuICAgICAgICBldmVudC50YXJnZXQucmVzdWx0LFxuICAgICAgICBcImFwcGxpY2F0aW9uL3htbFwiXG4gICAgICApO1xuXG4gICAgICBjb25zdCBkZXNjID0gZG9tLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiSWRlbnRpZmljYXRpb25GbHV4XCIpWzBdO1xuICAgICAgY29uc3QgZnJlcXVlbmN5ID0gZGVzYy5nZXRFbGVtZW50c0J5VGFnTmFtZShcIlRZUEVGTFVYXCIpWzBdLmlubmVySFRNTDtcbiAgICAgIGNvbnN0IHR5cGUgPSBkZXNjLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiTkFURkxVWFwiKVswXS5pbm5lckhUTUw7XG4gICAgICBjb25zdCBkdCA9IGRlc2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJEVENSRUFGTFVYXCIpWzBdLmlubmVySFRNTDtcbiAgICAgIGNvbnN0IHRpbWUgPSBkZXNjLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiSEVVQ1JFQUZMVVhcIilbMF0uaW5uZXJIVE1MO1xuICAgICAgY29uc3QgZm9sZGVyc0NvdW50ID0gZG9tLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiSW5mb3NGb3llclJTQVwiKS5sZW5ndGg7XG4gICAgICBjb25zdCBwZW9wbGVDb3VudCA9IGRvbS5nZXRFbGVtZW50c0J5VGFnTmFtZShcIlBlcnNvbm5lXCIpLmxlbmd0aDtcblxuICAgICAgY29uc3QgW2RhdGVzLCBkcm9pdHMsIGRldm9pcnMsIGRyb2l0c0V0RGV2b2lyc10gPSBbe30sIHt9LCB7fSwge31dXG4gICAgICBjb25zdCBhY2N1bURhdGEgPSAoYWNjdW0sIHZhbHVlKSA9PiB7XG4gICAgICAgIGFjY3VtW3ZhbHVlXSA9IChhY2N1bVt2YWx1ZV0gfHwgMCkgKyAxO1xuICAgICAgICBhY2N1bVtcIlRvdGFsXCJdID0gKGFjY3VtW1wiVG90YWxcIl0gfHwgMCkgKyAxO1xuICAgICAgfTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb2xkZXJzQ291bnQ7IGkrKykge1xuICAgICAgICBjb25zdCBmb2xkZXIgPSBkb20uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJJbmZvc0ZveWVyUlNBXCIpW2ldO1xuICAgICAgICAvLyBjb21wdGUgbGVzIGluZm9zIHJlbGF0aXZlcyBhdSBkb3NzaWVyXG4gICAgICAgIGNvbnN0IGZvbGRlcl9kYXRlID0gZm9sZGVyLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiRFRERU1SU0FcIilbMF0uaW5uZXJIVE1MXG4gICAgICAgIGRhdGVzW2ZvbGRlcl9kYXRlXSA9IChkYXRlc1tmb2xkZXJfZGF0ZV0gfHwgMCkgKyAxO1xuICAgICAgICBpZiAoZm9sZGVyLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiRVRBVERPU1JTQVwiKVswXSkge1xuICAgICAgICAgIGFjY3VtRGF0YShkcm9pdHMsIGZvbGRlci5nZXRFbGVtZW50c0J5VGFnTmFtZShcIkVUQVRET1NSU0FcIilbMF0uaW5uZXJIVE1MKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gY29tcHRlIGxlcyBpbmZvcyByZWxhdGl2ZXMgYXV4IHBlcnNvbm5lcyBwcsOpc2VudGVzIGRhbnMgbGUgZG9zc2llclxuICAgICAgICBjb25zdCBwZW9wbGUgPSBmb2xkZXIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJQZXJzb25uZVwiKTtcbiAgICAgICAgWy4uLnBlb3BsZV0uZm9yRWFjaChwID0+IHtcbiAgICAgICAgICBpZiAocC5nZXRFbGVtZW50c0J5VGFnTmFtZShcIlRPUFBFUlNEUk9ERVZPUlNBXCIpWzBdKSB7XG4gICAgICAgICAgICBhY2N1bURhdGEoZGV2b2lycywgcC5nZXRFbGVtZW50c0J5VGFnTmFtZShcIlRPUFBFUlNEUk9ERVZPUlNBXCIpWzBdLmlubmVySFRNTClcbiAgICAgICAgICAgIGlmIChmb2xkZXIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJFVEFURE9TUlNBXCIpWzBdLmlubmVySFRNTCA9PSBcIjJcIikge1xuICAgICAgICAgICAgICAvLyBDb21wdGUgbGVzIGluZm9zIHJlbGF0aXZlcyBhdXggcGVyc29ubmVzIHByw6lzZW50ZXMgZGFucyBsZSBkb3NzaWVyIGxvcnNxdWUgbGVzIGRyb2l0cyBzb250IG91dmVydHNcbiAgICAgICAgICAgICAgYWNjdW1EYXRhKGRyb2l0c0V0RGV2b2lycywgcC5nZXRFbGVtZW50c0J5VGFnTmFtZShcIlRPUFBFUlNEUk9ERVZPUlNBXCIpWzBdLmlubmVySFRNTClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICB9XG5cbiAgICAgIC8vIHN0b3JlIGxlcyBjbMOpcyBkYW5zIHVuIHN0YXRlIHBvdXIgbidhZmZpY2hlciBkYW5zIGxlIHRhYmxlYXUgcXVlIGxlcyBkb25uw6llcyBwcsOpc2VudGVzXG4gICAgICBjb25zdCBuZXdLZXlzRHJvaXRzID0ga2V5c0Ryb2l0cy5jb25jYXQoT2JqZWN0LmtleXMoZHJvaXRzKSk7XG4gICAgICBzZXRLZXlzRHJvaXRzKEFycmF5LmZyb20obmV3IFNldChuZXdLZXlzRHJvaXRzKSkuc29ydCgpKTtcbiAgICAgIGNvbnN0IG5ld0tleXNEZXZvaXJzID0ga2V5c0Rldm9pcnMuY29uY2F0KE9iamVjdC5rZXlzKGRldm9pcnMpKTtcbiAgICAgIHNldEtleXNEZXZvaXJzKEFycmF5LmZyb20obmV3IFNldChuZXdLZXlzRGV2b2lycykpLnNvcnQoKSk7XG5cbiAgICAgIHNldElzUGVuZGluZyhmYWxzZSk7XG5cbiAgICAgIGRpc3BhdGNoUnVucyh7XG4gICAgICAgIHR5cGU6IFwiYXBwZW5kXCIsXG4gICAgICAgIGl0ZW06IHtcbiAgICAgICAgICBzZWVkOiBNYXRoLnJhbmRvbSgpLFxuICAgICAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDE5KSxcbiAgICAgICAgICBkdXJhdGlvbjogbmV3IERhdGUoKSAtIHN0YXJ0X3RpbWUsXG4gICAgICAgICAgZmlsZW5hbWU6IGZpbGUubmFtZSxcbiAgICAgICAgICBmaWxlRGF0ZXRpbWU6IGAke2R0fS0ke3RpbWV9YCxcbiAgICAgICAgICBmcmVxdWVuY3ksXG4gICAgICAgICAgdHlwZSxcbiAgICAgICAgICAvLyBXSVA6IE9LIHN1ciBGaXJlZm94IEtPIHN1ciBDaHJvbWVcbiAgICAgICAgICBlcnJvcjpcbiAgICAgICAgICAgIGRvbS5hY3RpdmVFbGVtZW50ICYmIGRvbS5hY3RpdmVFbGVtZW50Lm5vZGVOYW1lID09IFwicGFyc2VyZXJyb3JcIixcbiAgICAgICAgICB0b3RhbDogZm9sZGVyc0NvdW50LFxuICAgICAgICAgIGZpbGVTaXplOiBmaWxlLnNpemUsXG4gICAgICAgICAgcGVvcGxlOiBwZW9wbGVDb3VudCxcbiAgICAgICAgICBkYXRlcyxcbiAgICAgICAgICBkZXZvaXJzLFxuICAgICAgICAgIGRyb2l0cyxcbiAgICAgICAgICBkcm9pdHNFdERldm9pcnMsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9O1xuICAgIHJlYWRlci5yZWFkQXNUZXh0KGZpbGUpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dCBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9IGhhbmRsZUZpbGU9e2hhbmRsZUZpbGV9PlxuICAgICAgPEFkbWluIGNhdGVnb3J5PVwiQsOpbsOpZmljaWFpcmVcIiBvblJ1blJlZnJlc2g9e2hhbmRsZU5ld1J1bnN9IC8+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cbiAgICAgICAgICBMZWN0ZXVyIGRlIGZpY2hpZXJcbiAgICAgICAgICA8YnIgLz7CqyBCw6luw6lmaWNpYWlyZSDCuyBkZSBsYSBDTkFGXG4gICAgICAgIDwvaDE+XG5cbiAgICAgICAgPEZpbGVIYW5kbGVyXG4gICAgICAgICAgaGFuZGxlRmlsZT17aGFuZGxlRmlsZX1cbiAgICAgICAgICBpc1BlbmRpbmc9e2lzUGVuZGluZ31cbiAgICAgICAgICBmaWxlU2l6ZT17ZmlsZVNpemV9XG4gICAgICAgICAgbWVzc2FnZT17XCJDYWxjdWwgZGVzIHN0YXRpc3RpcXVlcyBlbiBjb3VycywgbWVyY2kgZGUgcGF0aWVudGVyXCJ9XG4gICAgICAgIC8+XG5cbiAgICAgICAge3J1bnMgJiYgcnVucy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnN1YnRpdGxlfT5TdGF0aXN0aXF1ZXMgZHJvaXRzICYgZGV2b2lyczwvaDI+XG5cbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9e3N0eWxlcy5tYXJnaW5fc2lkZX0+XG4gICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj48L3RoPlxuICAgICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+RG9zc2llcnMgKEZveWVycyk8L3RoPlxuICAgICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+UGVyc29ubmVzPC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aCBjb2xTcGFuPXtrZXlzRHJvaXRzLmxlbmd0aH0+XG4gICAgICAgICAgICAgICAgICAgIFZhbGV1cnMgYmFsaXNlcyBFVEFURE9TUlNBXG4gICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgPHRoIGNvbFNwYW49e2tleXNEZXZvaXJzLmxlbmd0aH0+XG4gICAgICAgICAgICAgICAgICAgIFZhbGV1cnMgYmFsaXNlcyBUT1BQRVJTRFJPREVWT1JTQVxuICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aCBjb2xTcGFuPVwiM1wiPk5vbWJyZSBkZSBwZXJzb25uZXMgZGFucyBmb3llciBkcm9pdCBvdXZlcnQgZXQgdmVyc2FibGU8L3RoPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAge2tleXNEcm9pdHMubWFwKGsgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8dGgga2V5PXtrfSBjb2xTcGFuPVwiMVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtrfVxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICB7a2V5c0Rldm9pcnMubWFwKGsgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8dGgga2V5PXtrfSBjb2xTcGFuPVwiMVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtrfVxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj1cIjFcIj5Tb3VtaXNlcyBkcm9pdHMgJiBkZXZvaXJzPC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aCBjb2xTcGFuPVwiMVwiPk5vbiBzb3VtaXNlcyBkcm9pdHMgJiBkZXZvaXJzPC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aCBjb2xTcGFuPVwiMVwiPlRvdGFsPC90aD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgey8qIHJldmVyc2UgZXN0IHV0aWxpc8OpIHBvdXIgcXVlIGxlcyBmaWNoaWVycyBhcHBhcmFpc3NlbnQgZGFucyBsZXVyIG9yZHJlIGQndXBsb2FkICovfVxuICAgICAgICAgICAgICAgIHtydW5zLnJldmVyc2UoKS5tYXAoKHIsIGkpID0+IChcbiAgICAgICAgICAgICAgICAgIDx0clxuICAgICAgICAgICAgICAgICAgICBrZXk9e2Ake3IudGltZXN0YW1wfS0ke3IuZmlsZW5hbWV9LSR7ci5zZWVkfS0wYH1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e2kgPT0gZGF0ZURhdGEuaW5kZXggPyB7IGJhY2tncm91bmRDb2xvcjogXCJsaWdodGdyZXlcIiB9IDoge30gfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e2kgKyAxfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9PntyLnRvdGFsfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9PntyLnBlb3BsZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICB7a2V5c0Ryb2l0cy5tYXAoayA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17a30gY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtyLmRyb2l0c1trXSB8fCAwfVxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICB7a2V5c0Rldm9pcnMubWFwKGsgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e2t9IGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ci5kZXZvaXJzW2tdIHx8IDB9XG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgIHtyLmRyb2l0c0V0RGV2b2lyc1sxXSB8fCAwfVxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT5cbiAgICAgICAgICAgICAgICAgICAgICB7ci5kcm9pdHNFdERldm9pcnNbMF0gfHwgMH1cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+XG4gICAgICAgICAgICAgICAgICAgICAge3IuZHJvaXRzRXREZXZvaXJzW1wiVG90YWxcIl0gfHwgMH1cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgPHRkPlRvdGFsPC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9PntjYWxjdWxhdGVUb3RhbChcInRvdGFsXCIpfTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT57Y2FsY3VsYXRlVG90YWwoXCJwZW9wbGVcIil9PC90ZD5cbiAgICAgICAgICAgICAgICAgIHtrZXlzRHJvaXRzLm1hcChrID0+IChcbiAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17a30gY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT5cbiAgICAgICAgICAgICAgICAgICAgICB7Y2FsY3VsYXRlVG90YWwoXCJkcm9pdHNcIiwgaykgfHwgMH1cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAge2tleXNEZXZvaXJzLm1hcChrID0+IChcbiAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17a30gY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT5cbiAgICAgICAgICAgICAgICAgICAgICB7Y2FsY3VsYXRlVG90YWwoXCJkZXZvaXJzXCIsIGspIHx8IDB9XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9PlxuICAgICAgICAgICAgICAgICAgICB7Y2FsY3VsYXRlVG90YWwoXCJkcm9pdHNFdERldm9pcnNcIiwgMSkgfHwgMH1cbiAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT5cbiAgICAgICAgICAgICAgICAgICAge2NhbGN1bGF0ZVRvdGFsKFwiZHJvaXRzRXREZXZvaXJzXCIsIDApIHx8IDB9XG4gICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+XG4gICAgICAgICAgICAgICAgICAgIHtjYWxjdWxhdGVUb3RhbChcImRyb2l0c0V0RGV2b2lyc1wiLCBcIlRvdGFsXCIpIHx8IDB9XG4gICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG5cbiAgICAgICAgICAgICAgICA8dHI+PC90cj5cbiAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGVnZW5kZX0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGVnZW5kZV9ib3h9PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmxlZ2VuZGVfdGl0bGV9PkzDqWdlbmRlJm5ic3A7OjwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5ib2xkfT5WYWxldXIgYmFsaXNlIEVUQVRET1NSU0E8L3A+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAwPU5vdXZlbGxlIGRlbWFuZGUgZW4gYXR0ZW50ZSBkZSBkw6ljaXNpb24gQ0cgcG91ciBvdXZlcnR1cmUgZHVcbiAgICAgICAgICAgICAgICAgIGRyb2l0XG4gICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgIDE9RHJvaXQgcmVmdXPDqVxuICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAyPURyb2l0IG91dmVydCBldCB2ZXJzYWJsZVxuICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAzPURyb2l0IG91dmVydCBldCBzdXNwZW5kdSAobGUgbW9udGFudCBkdSBkcm9pdCBlc3RcbiAgICAgICAgICAgICAgICAgIGNhbGN1bGFibGUsIG1haXMgbCdleGlzdGVuY2UgZHUgZHJvaXQgZXN0IHJlbWlzIGVuIGNhdXNlKVxuICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICA0PURyb2l0IG91dmVydCBtYWlzIHZlcnNlbWVudCBzdXNwZW5kdSAobGUgbW9udGFudCBkdSBkcm9pdFxuICAgICAgICAgICAgICAgICAgbidlc3QgcGFzIGNhbGN1bGFibGUpXG4gICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgIDU9RHJvaXQgY2xvc1xuICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICA2PURyb2l0IGNsb3Mgc3VyIG1vaXMgYW50w6lyaWV1ciBheWFudCBldSB1biBjb250csO0bGUgZGFucyBsZVxuICAgICAgICAgICAgICAgICAgbW9pcyBkZSByw6lmw6lyZW5jZSBwb3VyIHVuZSBww6lyaW9kZSBhbnTDqXJpZXVyZS5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxlZ2VuZGVfYm94fT5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5ib2xkfT5WYWxldXIgYmFsaXNlIFRPUFBFUlNEUk9ERVZPUlNBPC9wPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgMD1QZXJzb25uZSBwYXMgc291bWlzZSDDoCBkcm9pdHMgZXQgZGV2b2lyc1xuICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAxPVBlcnNvbm5lIHNvdW1pc2Ugw6AgZHJvaXRzIGV0IGRldm9pcnNcbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPHA+Jm5ic3A7PC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmJvbGR9PlxuICAgICAgICAgICAgICAgICAgUGVyc29ubmVzIGRhbnMgZm95ZXIgZHJvaXQgb3V2ZXJ0IGV0IHZlcnNhYmxlXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgU291bWlzZXMgZHJvaXRzICYgZGV2b2lycyA6IE5vbWJyZSBkZSBwZXJzb25uZXMgZG9udCBsYSBiYWxpc2UgVE9QUEVSU0RST0RFVk9SU0E9MSBwcsOpc2VudHMgZGFucyBkZXMgZm95ZXJzIGRvbnQgbGEgYmFsaXNlIEVUQVRET1NSU0E9MlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIE5vbiBzb3VtaXNlcyBkcm9pdHMgJiBkZXZvaXJzIDogTm9tYnJlIGRlIHBlcnNvbm5lcyBkb250IGxhIGJhbGlzZSBUT1BQRVJTRFJPREVWT1JTQT0wIHByw6lzZW50cyBkYW5zIGRlcyBmb3llcnMgZG9udCBsYSBiYWxpc2UgRVRBVERPU1JTQT0yXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuc3VidGl0bGV9Pkhpc3RvcmlxdWU8L2gyPlxuXG4gICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPXtzdHlsZXMubWFyZ2luX3NpZGV9PlxuICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+PC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPkZpY2hpZXI8L3RoPlxuICAgICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+RGF0ZTwvdGg+XG4gICAgICAgICAgICAgICAgICB7ZGV2TW9kZSAmJiA8dGggcm93U3Bhbj1cIjJcIj5UYWlsbGU8L3RoPn1cbiAgICAgICAgICAgICAgICAgIHtkZXZNb2RlICYmIChcbiAgICAgICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgRHVyw6llXG4gICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgKGVuIHMpXG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+RGF0ZSBkdSBmaWNoaWVyPC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPkZyw6lxdWVuY2U8L3RoPlxuICAgICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+TmF0dXJlPC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPkRvc3NpZXJzPC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPkTDqXRhaWxzPC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPkVycmV1cjwvdGg+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8dHI+PC90cj5cbiAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgIHsvKiByZXZlcnNlIGVzdCB1dGlsaXPDqSBwb3VyIHF1ZSBsZXMgZmljaGllcnMgYXBwYXJhaXNzZW50IGRhbnMgbGV1ciBvcmRyZSBkJ3VwbG9hZCAqL31cbiAgICAgICAgICAgICAgICB7cnVucy5yZXZlcnNlKCkubWFwKChyLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8dHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtgJHtyLnRpbWVzdGFtcH0tJHtyLmZpbGVuYW1lfS0ke3Iuc2VlZH1gfVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17XG4gICAgICAgICAgICAgICAgICAgICAgaSA9PSBkYXRlRGF0YS5pbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgPyB7IGJhY2tncm91bmRDb2xvcjogXCJsaWdodGdyZXlcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICA6IHt9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHRkPntpICsgMX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3IuZmlsZW5hbWV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPntyLnRpbWVzdGFtcH08L3RkPlxuICAgICAgICAgICAgICAgICAgICB7ZGV2TW9kZSAmJiA8dGQ+e3IuZmlsZVNpemV9PC90ZD59XG4gICAgICAgICAgICAgICAgICAgIHtkZXZNb2RlICYmIChcbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+eyFpc05hTihyLmR1cmF0aW9uKSA/IHIuZHVyYXRpb24gLyAxMDAwIDogXCIjTi9BXCJ9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPHRkPntyLmZpbGVEYXRldGltZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e2Ake3IuZnJlcXVlbmN5fSAoJHtcbiAgICAgICAgICAgICAgICAgICAgICBmcmVxdWVuY3lOYW1lc1tyLmZyZXF1ZW5jeV0gfHwgXCI/XCJcbiAgICAgICAgICAgICAgICAgICAgfSlgfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57YCR7ci50eXBlfSAoJHt0eXBlTmFtZXNbci50eXBlXSB8fCBcIj9cIn0pYH08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMubnVtZXJpY30+e3IudG90YWx9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInNocmlua1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlRGF0ZUhpc3RvZ3JhbX0gZGF0YS1pbmRleD17aX0+XG4gICAgICAgICAgICAgICAgICAgICAgICBBZmZpY2hlciBwYXIgZGF0ZVxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3IuZXJyb3IgPyBcIk91aVwiIDogXCJOb25cIn08L3RkPlxuICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+XG5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGlzcGF0Y2hSdW5zKHsgdHlwZTogXCJyZXNldFwiIH0pfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5tYXJnaW5fYm90dG9tfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBWaWRlciBsJ2hpc3RvcmlxdWVcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuXG4gICAgICAgIHtydW5zLmxlbmd0aCAhPSAwICYmIChcbiAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5cbiAgICAgICAgICAgIFZvdXMgcG91dmV6IGFjY8OpZGVyIMOgIHVuZSByZXByw6lzZW50YXRpb24gZ3JhcGhpcXVlIGRlIGxhIHLDqXBhcnRpdGlvblxuICAgICAgICAgICAgZGFucyBsZXMgdGVtcHMgZGVzIGRlbWFuZGVzIGNvbm51ZXMgZGFucyBsZXMgZmljaGllcnMgYW5hbHlzw6lzLiBQb3VyXG4gICAgICAgICAgICBjZWxhIGlsIGZhdXQgY2xpcXVlciBzdXIgbGUgYm91dG9uIMKrIEFmZmljaGVyIHBhciBkYXRlIMK7LlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgKX1cblxuICAgICAgICB7ZGF0ZURhdGEuaW5kZXggIT0gdW5kZWZpbmVkICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnN1YnRpdGxlfT5cbiAgICAgICAgICAgICAgTm9tYnJlIGRlIGRvc3NpZXJzIGFzc29jacOpcyDDoCBkZXMgZGVtYW5kZXMgcsOpYWxpc8OpcyDDoCBjaGFxdWUgZGF0ZVxuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiAyNTAgKiBkYXRlRGF0YS55ZWFyQ291bnQgKyBcInB4XCIsIHdpZHRoOiBcIjEwMCVcIiB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7UmVzcG9uc2l2ZUNhbGVuZGFyKGRhdGVEYXRhKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuXG4gICAgICAgIDxGb290ZXJcbiAgICAgICAgICBzdWJqZWN0PVwiRmx1eCBiw6luw6lmaWNpYWlyZSBDTkFGXCJcbiAgICAgICAgICBwb3VycXVvaT1cIlBvdXJxdW9pIHVuIGxlY3RldXIgZGUgZmljaGllciBDTkFGJm5ic3A7P1wiXG4gICAgICAgICAgdGV4dD17XG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5cbiAgICAgICAgICAgICAgICBUb3VzIGxlcyBkw6lwYXJ0ZW1lbnRzIG4nb250IHBhcyBsZXMgb3V0aWxzIHBvdXIgYW5hbHlzZXIgbGVzXG4gICAgICAgICAgICAgICAgZmljaGllcnMgZW52b3nDqXMgcGFyIGxhIENOQUYuIENlbGEgcGV1dCByYWxlbnRpciBldCBjb21wbGlxdWVyXG4gICAgICAgICAgICAgICAgbm9zIMOpY2hhbmdlcy5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5cbiAgICAgICAgICAgICAgICBBdmVjIGNldCBvdXRpbCwgbm91cyBzb3VoYWl0b25zIHBlcm1ldHRyZSBhdXggcGVyc29ubmVzIHF1aSBvbnRcbiAgICAgICAgICAgICAgICBhY2PDqHMgw6AgY2VzIGZpY2hpZXJzIGQnZW4gZXh0cmFpcmUgZGVzIHN0YXRpc3RpcXVlcyBnw6luw6lyYWxlc1xuICAgICAgICAgICAgICAgIHNhbnMgYXZvaXIgw6AgbWV0dHJlIGxlcyBtYWlucyBkYW5zIGxlIGNhbWJvdWkgZWxsZXMtbcOqbWUuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgIH1cbiAgICAgICAgLz5cbiAgICAgIDwvbWFpbj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=