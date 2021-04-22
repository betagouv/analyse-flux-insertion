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
      var total = runs.reduce(function (accum, run) {
        accum = accum + (run[category] || 0);
      }, 0);
      return total;
    } else {
      var _total = runs.reduce(function (accum, run) {
        accum = accum + (run[category][index] || 0);
      }, 0);

      return _total;
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
      lineNumber: 182,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.main,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.title,
        children: ["Lecteur de fichier", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 11
        }, this), "\xAB B\xE9n\xE9ficiaire \xBB de la CNAF"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_fileHandler__WEBPACK_IMPORTED_MODULE_5__["default"], {
        handleFile: handleFile,
        isPending: isPending,
        fileSize: fileSize,
        message: "Calcul des statistiques en cours, merci de patienter"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 9
      }, this), runs && runs.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.subtitle,
          children: "Statistiques droits & devoirs"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.margin_side,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 203,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Dossiers (Foyers)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 204,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Personnes"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 205,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                colSpan: keysDroits.length,
                children: "Valeurs balises ETATDOSRSA"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 206,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                colSpan: keysDevoirs.length,
                children: "Valeurs balises TOPPERSDRODEVORSA"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 209,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                colSpan: "3",
                children: "Nombre de personnes dans foyer droit ouvert et versable"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 212,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 202,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              children: [keysDroits.map(function (k) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                  colSpan: "1",
                  children: k
                }, k, false, {
                  fileName: _jsxFileName,
                  lineNumber: 216,
                  columnNumber: 21
                }, _this);
              }), keysDevoirs.map(function (k) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                  colSpan: "1",
                  children: k
                }, k, false, {
                  fileName: _jsxFileName,
                  lineNumber: 221,
                  columnNumber: 21
                }, _this);
              }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                colSpan: "1",
                children: "Soumises droits & devoirs"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 225,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                colSpan: "1",
                children: "Non soumises droits & devoirs"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 226,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                colSpan: "1",
                children: "Total"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 227,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 214,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 201,
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
                  lineNumber: 237,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.center,
                  children: r.total
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 238,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.center,
                  children: r.people
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 239,
                  columnNumber: 21
                }, _this), keysDroits.map(function (k) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.center,
                    children: r.droits[k] || 0
                  }, k, false, {
                    fileName: _jsxFileName,
                    lineNumber: 241,
                    columnNumber: 23
                  }, _this);
                }), keysDevoirs.map(function (k) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.center,
                    children: r.devoirs[k] || 0
                  }, k, false, {
                    fileName: _jsxFileName,
                    lineNumber: 246,
                    columnNumber: 23
                  }, _this);
                }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.center,
                  children: r.droitsEtDevoirs[1] || 0
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 250,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.center,
                  children: r.droitsEtDevoirs[0] || 0
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 253,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.center,
                  children: r.droitsEtDevoirs["Total"] || 0
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 256,
                  columnNumber: 21
                }, _this)]
              }, "".concat(r.timestamp, "-").concat(r.filename, "-").concat(r.seed, "-0"), true, {
                fileName: _jsxFileName,
                lineNumber: 233,
                columnNumber: 19
              }, _this);
            }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: "Total"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 262,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.center,
                children: calculateTotal("total")
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 263,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.center,
                children: calculateTotal("people")
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 264,
                columnNumber: 19
              }, this), keysDroits.map(function (k) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.center,
                  children: calculateTotal("droits", k) || 0
                }, k, false, {
                  fileName: _jsxFileName,
                  lineNumber: 266,
                  columnNumber: 21
                }, _this);
              }), keysDevoirs.map(function (k) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.center,
                  children: calculateTotal("devoirs", k) || 0
                }, k, false, {
                  fileName: _jsxFileName,
                  lineNumber: 271,
                  columnNumber: 21
                }, _this);
              }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.center,
                children: calculateTotal("droitsEtDevoirs", 1) || 0
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 275,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.center,
                children: calculateTotal("droitsEtDevoirs", 0) || 0
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 278,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.center,
                children: calculateTotal("droitsEtDevoirs", "Total") || 0
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 281,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 261,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 286,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 230,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 200,
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
              lineNumber: 292,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.bold,
              children: "Valeur balise ETATDOSRSA"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 293,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: ["0=Nouvelle demande en attente de d\xE9cision CG pour ouverture du droit", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 297,
                columnNumber: 19
              }, this), "1=Droit refus\xE9", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 299,
                columnNumber: 19
              }, this), "2=Droit ouvert et versable", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 301,
                columnNumber: 19
              }, this), "3=Droit ouvert et suspendu (le montant du droit est calculable, mais l'existence du droit est remis en cause)", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 304,
                columnNumber: 19
              }, this), "4=Droit ouvert mais versement suspendu (le montant du droit n'est pas calculable)", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 307,
                columnNumber: 19
              }, this), "5=Droit clos", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 309,
                columnNumber: 19
              }, this), "6=Droit clos sur mois ant\xE9rieur ayant eu un contr\xF4le dans le mois de r\xE9f\xE9rence pour une p\xE9riode ant\xE9rieure."]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 294,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 291,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.legende_box,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.bold,
              children: "Valeur balise TOPPERSDRODEVORSA"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 315,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: ["0=Personne pas soumise \xE0 droits et devoirs", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 318,
                columnNumber: 19
              }, this), "1=Personne soumise \xE0 droits et devoirs"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 316,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "\xA0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 321,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.bold,
              children: "Personnes dans foyer droit ouvert et versable"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 322,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "Soumises droits & devoirs : Nombre de personnes dont la balise TOPPERSDRODEVORSA=1 pr\xE9sents dans des foyers dont la balise ETATDOSRSA=2"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 325,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "Non soumises droits & devoirs : Nombre de personnes dont la balise TOPPERSDRODEVORSA=0 pr\xE9sents dans des foyers dont la balise ETATDOSRSA=2"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 328,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 314,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 290,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.subtitle,
          children: "Historique"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 334,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.margin_side,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 339,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Fichier"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 340,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Date"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 341,
                columnNumber: 19
              }, this), devMode && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Taille"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 342,
                columnNumber: 31
              }, this), devMode && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: ["Dur\xE9e", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 346,
                  columnNumber: 23
                }, this), "(en s)"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 344,
                columnNumber: 21
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Date du fichier"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 350,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Fr\xE9quence"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 351,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Nature"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 352,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Dossiers"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 353,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "D\xE9tails"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 354,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Erreur"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 355,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 338,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 357,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 337,
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
                  lineNumber: 370,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: r.filename
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 371,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: r.timestamp
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 372,
                  columnNumber: 21
                }, _this), devMode && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: r.fileSize
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 373,
                  columnNumber: 33
                }, _this), devMode && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: !isNaN(r.duration) ? r.duration / 1000 : "#N/A"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 375,
                  columnNumber: 23
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: r.fileDatetime
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 377,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: "".concat(r.frequency, " (").concat(_lib_cnaf__WEBPACK_IMPORTED_MODULE_8__["frequencyNames"][r.frequency] || "?", ")")
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 378,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: "".concat(r.type, " (").concat(_lib_cnaf__WEBPACK_IMPORTED_MODULE_8__["typeNames"][r.type] || "?", ")")
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 381,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.numeric,
                  children: r.total
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 382,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: "shrink",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                    onClick: handleDateHistogram,
                    "data-index": i,
                    children: "Afficher par date"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 384,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 383,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: r.error ? "Oui" : "Non"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 388,
                  columnNumber: 21
                }, _this)]
              }, "".concat(r.timestamp, "-").concat(r.filename, "-").concat(r.seed), true, {
                fileName: _jsxFileName,
                lineNumber: 362,
                columnNumber: 19
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 359,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 336,
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
          lineNumber: 394,
          columnNumber: 13
        }, this)]
      }, void 0, true), runs.length != 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.text,
        children: "Vous pouvez acc\xE9der \xE0 une repr\xE9sentation graphique de la r\xE9partition dans les temps des demandes connues dans les fichiers analys\xE9s. Pour cela il faut cliquer sur le bouton \xAB Afficher par date \xBB."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 404,
        columnNumber: 11
      }, this), dateData.index != undefined && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.subtitle,
          children: "Nombre de dossiers associ\xE9s \xE0 des demandes r\xE9alis\xE9s \xE0 chaque date"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 413,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            height: 250 * dateData.yearCount + "px",
            width: "100%"
          },
          children: Object(_components_chart__WEBPACK_IMPORTED_MODULE_4__["default"])(dateData)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 416,
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
            lineNumber: 429,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.text,
            children: "Avec cet outil, nous souhaitons permettre aux personnes qui ont acc\xE8s \xE0 ces fichiers d'en extraire des statistiques g\xE9n\xE9rales sans avoir \xE0 mettre les mains dans le camboui elles-m\xEAme."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 434,
            columnNumber: 15
          }, this)]
        }, void 0, true)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 424,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 181,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbGVjdGV1ci9jbmFmL2JlbmVmaWNpYWlyZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJyZWR1Y2VyIiwicmVkdWNlckZhY3RvcnkiLCJkZXZNb2RlIiwiQmVuZWZpY2lhaXJlIiwidXNlU3RhdGUiLCJkZXZGaWxlIiwic2V0RGV2RmlsZSIsInVzZVJlZHVjZXIiLCJpbml0UmVkdWNlciIsInJ1bnMiLCJkaXNwYXRjaFJ1bnMiLCJpc1BlbmRpbmciLCJzZXRJc1BlbmRpbmciLCJmaWxlU2l6ZSIsInNldEZpbGVTaXplIiwia2V5c0Ryb2l0cyIsInNldEtleXNEcm9pdHMiLCJrZXlzRGV2b2lycyIsInNldEtleXNEZXZvaXJzIiwiaW5kZXgiLCJ1bmRlZmluZWQiLCJkYXRhIiwiZnJvbSIsInRvIiwiZGF0ZURhdGEiLCJzZXREYXRlRGF0YSIsImhhbmRsZU5ld1J1bnMiLCJ1c2VDYWxsYmFjayIsInR5cGUiLCJmb2xkZXJzIiwidXNlRWZmZWN0IiwiaGFuZGxlRmlsZSIsImhhbmRsZURhdGVIaXN0b2dyYW0iLCJldmVudCIsInNob3dEYXRlSGlzdG9ncmFtIiwicGFyc2VJbnQiLCJ0YXJnZXQiLCJkYXRhc2V0Iiwic291cmNlIiwiZGF0ZXMiLCJPYmplY3QiLCJrZXlzIiwibWluRGF0ZSIsIm1heERhdGUiLCJtYXAiLCJkIiwiZGF0ZSIsIkRhdGUiLCJkYXkiLCJ0b0lTT1N0cmluZyIsInNsaWNlIiwidmFsdWUiLCJ5ZWFyQ291bnQiLCJnZXRZZWFyIiwiY2FsY3VsYXRlVG90YWwiLCJjYXRlZ29yeSIsInRvdGFsIiwicmVkdWNlIiwiYWNjdW0iLCJydW4iLCJmaWxlIiwic2l6ZSIsInN0YXJ0X3RpbWUiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwicGFyc2VyIiwiRE9NUGFyc2VyIiwiZG9tIiwicGFyc2VGcm9tU3RyaW5nIiwicmVzdWx0IiwiZGVzYyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiZnJlcXVlbmN5IiwiaW5uZXJIVE1MIiwiZHQiLCJ0aW1lIiwiZm9sZGVyc0NvdW50IiwibGVuZ3RoIiwicGVvcGxlQ291bnQiLCJkcm9pdHMiLCJkZXZvaXJzIiwiZHJvaXRzRXREZXZvaXJzIiwiYWNjdW1EYXRhIiwiaSIsImZvbGRlciIsImZvbGRlcl9kYXRlIiwicGVvcGxlIiwiZm9yRWFjaCIsInAiLCJuZXdLZXlzRHJvaXRzIiwiY29uY2F0IiwiQXJyYXkiLCJTZXQiLCJzb3J0IiwibmV3S2V5c0Rldm9pcnMiLCJpdGVtIiwic2VlZCIsIk1hdGgiLCJyYW5kb20iLCJ0aW1lc3RhbXAiLCJkdXJhdGlvbiIsImZpbGVuYW1lIiwibmFtZSIsImZpbGVEYXRldGltZSIsImVycm9yIiwiYWN0aXZlRWxlbWVudCIsIm5vZGVOYW1lIiwicmVhZEFzVGV4dCIsInN0eWxlcyIsImNvbnRhaW5lciIsIm1haW4iLCJ0aXRsZSIsInN1YnRpdGxlIiwibWFyZ2luX3NpZGUiLCJrIiwicmV2ZXJzZSIsInIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjZW50ZXIiLCJsZWdlbmRlIiwibGVnZW5kZV9ib3giLCJsZWdlbmRlX3RpdGxlIiwiYm9sZCIsImlzTmFOIiwiZnJlcXVlbmN5TmFtZXMiLCJ0eXBlTmFtZXMiLCJudW1lcmljIiwibWFyZ2luX2JvdHRvbSIsInRleHQiLCJoZWlnaHQiLCJ3aWR0aCIsIlJlc3BvbnNpdmVDYWxlbmRhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHQyxzRUFBYyxDQUFDLDRCQUFELENBQTlCO0FBQ0EsSUFBTUMsT0FBTyxPQUFiO0FBRWUsU0FBU0MsWUFBVCxHQUF3QjtBQUFBOztBQUFBOztBQUFBLGtCQUNQQyxzREFBUSxDQUFDLElBQUQsQ0FERDtBQUFBLE1BQzlCQyxPQUQ4QjtBQUFBLE1BQ3JCQyxVQURxQjs7QUFBQSxvQkFFUkMsd0RB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NWZkMDZlZmIwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgQWRtaW4gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvYWRtaW5cIjtcbmltcG9ydCBSZXNwb25zaXZlQ2FsZW5kYXIgZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvY2hhcnRcIjtcbmltcG9ydCBGaWxlSGFuZGxlciBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9maWxlSGFuZGxlclwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9mb290ZXJcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0XCI7XG5cbmltcG9ydCB7IGZyZXF1ZW5jeU5hbWVzLCB0eXBlTmFtZXMgfSBmcm9tIFwiLi4vLi4vLi4vLi4vbGliL2NuYWZcIjtcbmltcG9ydCB7IGluaXRSZWR1Y2VyLCByZWR1Y2VyRmFjdG9yeSB9IGZyb20gXCIuLi8uLi8uLi8uLi9saWIvaGlzdG9yaXF1ZVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vLi4vLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuXG5jb25zdCByZWR1Y2VyID0gcmVkdWNlckZhY3RvcnkoXCJUZXN0IC0gQ05BRiAtIELDqW7DqWZpY2lhaXJlXCIpO1xuY29uc3QgZGV2TW9kZSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09IFwiZGV2ZWxvcG1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmVuZWZpY2lhaXJlKCkge1xuICBjb25zdCBbZGV2RmlsZSwgc2V0RGV2RmlsZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3J1bnMsIGRpc3BhdGNoUnVuc10gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIFtdLCBpbml0UmVkdWNlcik7XG4gIGNvbnN0IFtpc1BlbmRpbmcsIHNldElzUGVuZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtmaWxlU2l6ZSwgc2V0RmlsZVNpemVdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtrZXlzRHJvaXRzLCBzZXRLZXlzRHJvaXRzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2tleXNEZXZvaXJzLCBzZXRLZXlzRGV2b2lyc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtkYXRlRGF0YSwgc2V0RGF0ZURhdGFdID0gdXNlU3RhdGUoe1xuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgZGF0YTogW10sXG4gICAgZnJvbTogXCIyMDE2LTAzLTAxXCIsXG4gICAgdG86IFwiMjAyMS0wMy0wMVwiLFxuICB9KTtcblxuICBjb25zdCBoYW5kbGVOZXdSdW5zID0gdXNlQ2FsbGJhY2soZGF0YSA9PiB7XG4gICAgZGlzcGF0Y2hSdW5zKHtcbiAgICAgIHR5cGU6IFwicmVzZXRcIixcbiAgICAgIGZvbGRlcnM6IGRhdGEsXG4gICAgfSk7XG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRldkZpbGUpIHtcbiAgICAgIGhhbmRsZUZpbGUoZGV2RmlsZSk7XG4gICAgfVxuICB9LCBbZGV2RmlsZV0pO1xuXG4gIGNvbnN0IGhhbmRsZURhdGVIaXN0b2dyYW0gPSB1c2VDYWxsYmFjayhldmVudCA9PlxuICAgIHNob3dEYXRlSGlzdG9ncmFtKHBhcnNlSW50KGV2ZW50LnRhcmdldC5kYXRhc2V0LmluZGV4KSlcbiAgKTtcbiAgY29uc3Qgc2hvd0RhdGVIaXN0b2dyYW0gPSB1c2VDYWxsYmFjayhpbmRleCA9PiB7XG4gICAgY29uc3Qgc291cmNlID0gcnVuc1tpbmRleF07XG5cbiAgICBjb25zdCBkYXRlcyA9IE9iamVjdC5rZXlzKHNvdXJjZS5kYXRlcyk7XG4gICAgbGV0IG1pbkRhdGUgPSBudWxsO1xuICAgIGxldCBtYXhEYXRlID0gbnVsbDtcblxuICAgIGNvbnN0IGRhdGEgPSBkYXRlcy5tYXAoZCA9PiB7XG4gICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKGQpO1xuICAgICAgaWYgKCFtaW5EYXRlKSB7XG4gICAgICAgIG1pbkRhdGUgPSBkYXRlO1xuICAgICAgICBtYXhEYXRlID0gZGF0ZTtcbiAgICAgIH0gZWxzZSBpZiAoZGF0ZSA8IG1pbkRhdGUpIHtcbiAgICAgICAgbWluRGF0ZSA9IGRhdGU7XG4gICAgICB9IGVsc2UgaWYgKG1heERhdGUgPCBkYXRlKSB7XG4gICAgICAgIG1heERhdGUgPSBkYXRlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGF5OiBkYXRlLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApLFxuICAgICAgICB2YWx1ZTogc291cmNlLmRhdGVzW2RdLFxuICAgICAgfTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHllYXJDb3VudCA9IG1heERhdGUuZ2V0WWVhcigpIC0gbWluRGF0ZS5nZXRZZWFyKCkgKyAxO1xuICAgIHNldERhdGVEYXRhKHtcbiAgICAgIGluZGV4LFxuICAgICAgZGF0YSxcbiAgICAgIGZyb206IG1pbkRhdGUudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCksXG4gICAgICB0bzogbWF4RGF0ZS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKSxcbiAgICAgIHllYXJDb3VudCxcbiAgICB9KTtcbiAgfSk7XG5cbiAgY29uc3QgY2FsY3VsYXRlVG90YWwgPSAoY2F0ZWdvcnksIGluZGV4KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBpbmRleCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGxldCB0b3RhbCA9IHJ1bnMucmVkdWNlKChhY2N1bSwgcnVuKSA9PiB7XG4gICAgICAgIGFjY3VtID0gYWNjdW0gKyAocnVuW2NhdGVnb3J5XSB8fCAwKVxuICAgICAgfSwgMClcbiAgICAgIHJldHVybiB0b3RhbFxuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgdG90YWwgPSBydW5zLnJlZHVjZSgoYWNjdW0sIHJ1bikgPT4ge1xuICAgICAgICBhY2N1bSA9IGFjY3VtICsgKHJ1bltjYXRlZ29yeV1baW5kZXhdIHx8IDApXG4gICAgICB9LCAwKVxuICAgICAgcmV0dXJuIHRvdGFsXG4gICAgfVxuICB9XG5cbiAgY29uc3QgaGFuZGxlRmlsZSA9IGZpbGUgPT4ge1xuICAgIGlmIChkZXZNb2RlICYmIGZpbGUgIT0gZGV2RmlsZSkge1xuICAgICAgc2V0RGV2RmlsZShmaWxlKTtcbiAgICB9XG4gICAgc2V0RmlsZVNpemUoZmlsZS5zaXplKTtcbiAgICBzZXRJc1BlbmRpbmcodHJ1ZSk7XG4gICAgY29uc3Qgc3RhcnRfdGltZSA9IG5ldyBEYXRlKCk7XG5cbiAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBjb25zdCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG4gICAgICBjb25zdCBkb20gPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKFxuICAgICAgICBldmVudC50YXJnZXQucmVzdWx0LFxuICAgICAgICBcImFwcGxpY2F0aW9uL3htbFwiXG4gICAgICApO1xuXG4gICAgICBjb25zdCBkZXNjID0gZG9tLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiSWRlbnRpZmljYXRpb25GbHV4XCIpWzBdO1xuICAgICAgY29uc3QgZnJlcXVlbmN5ID0gZGVzYy5nZXRFbGVtZW50c0J5VGFnTmFtZShcIlRZUEVGTFVYXCIpWzBdLmlubmVySFRNTDtcbiAgICAgIGNvbnN0IHR5cGUgPSBkZXNjLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiTkFURkxVWFwiKVswXS5pbm5lckhUTUw7XG4gICAgICBjb25zdCBkdCA9IGRlc2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJEVENSRUFGTFVYXCIpWzBdLmlubmVySFRNTDtcbiAgICAgIGNvbnN0IHRpbWUgPSBkZXNjLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiSEVVQ1JFQUZMVVhcIilbMF0uaW5uZXJIVE1MO1xuICAgICAgY29uc3QgZm9sZGVyc0NvdW50ID0gZG9tLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiSW5mb3NGb3llclJTQVwiKS5sZW5ndGg7XG4gICAgICBjb25zdCBwZW9wbGVDb3VudCA9IGRvbS5nZXRFbGVtZW50c0J5VGFnTmFtZShcIlBlcnNvbm5lXCIpLmxlbmd0aDtcblxuICAgICAgY29uc3QgW2RhdGVzLCBkcm9pdHMsIGRldm9pcnMsIGRyb2l0c0V0RGV2b2lyc10gPSBbe30sIHt9LCB7fSwge31dXG4gICAgICBjb25zdCBhY2N1bURhdGEgPSAoYWNjdW0sIHZhbHVlKSA9PiB7XG4gICAgICAgIGFjY3VtW3ZhbHVlXSA9IChhY2N1bVt2YWx1ZV0gfHwgMCkgKyAxO1xuICAgICAgICBhY2N1bVtcIlRvdGFsXCJdID0gKGFjY3VtW1wiVG90YWxcIl0gfHwgMCkgKyAxO1xuICAgICAgfTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb2xkZXJzQ291bnQ7IGkrKykge1xuICAgICAgICBjb25zdCBmb2xkZXIgPSBkb20uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJJbmZvc0ZveWVyUlNBXCIpW2ldO1xuICAgICAgICAvLyBjb21wdGUgbGVzIGluZm9zIHJlbGF0aXZlcyBhdSBkb3NzaWVyXG4gICAgICAgIGNvbnN0IGZvbGRlcl9kYXRlID0gZm9sZGVyLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiRFRERU1SU0FcIilbMF0uaW5uZXJIVE1MXG4gICAgICAgIGRhdGVzW2ZvbGRlcl9kYXRlXSA9IChkYXRlc1tmb2xkZXJfZGF0ZV0gfHwgMCkgKyAxO1xuICAgICAgICBpZiAoZm9sZGVyLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiRVRBVERPU1JTQVwiKVswXSkge1xuICAgICAgICAgIGFjY3VtRGF0YShkcm9pdHMsIGZvbGRlci5nZXRFbGVtZW50c0J5VGFnTmFtZShcIkVUQVRET1NSU0FcIilbMF0uaW5uZXJIVE1MKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gY29tcHRlIGxlcyBpbmZvcyByZWxhdGl2ZXMgYXV4IHBlcnNvbm5lcyBwcsOpc2VudGVzIGRhbnMgbGUgZG9zc2llclxuICAgICAgICBjb25zdCBwZW9wbGUgPSBmb2xkZXIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJQZXJzb25uZVwiKTtcbiAgICAgICAgWy4uLnBlb3BsZV0uZm9yRWFjaChwID0+IHtcbiAgICAgICAgICBpZiAocC5nZXRFbGVtZW50c0J5VGFnTmFtZShcIlRPUFBFUlNEUk9ERVZPUlNBXCIpWzBdKSB7XG4gICAgICAgICAgICBhY2N1bURhdGEoZGV2b2lycywgcC5nZXRFbGVtZW50c0J5VGFnTmFtZShcIlRPUFBFUlNEUk9ERVZPUlNBXCIpWzBdLmlubmVySFRNTClcbiAgICAgICAgICAgIGlmIChmb2xkZXIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJFVEFURE9TUlNBXCIpWzBdLmlubmVySFRNTCA9PSBcIjJcIikge1xuICAgICAgICAgICAgICAvLyBDb21wdGUgbGVzIGluZm9zIHJlbGF0aXZlcyBhdXggcGVyc29ubmVzIHByw6lzZW50ZXMgZGFucyBsZSBkb3NzaWVyIGxvcnNxdWUgbGVzIGRyb2l0cyBzb250IG91dmVydHNcbiAgICAgICAgICAgICAgYWNjdW1EYXRhKGRyb2l0c0V0RGV2b2lycywgcC5nZXRFbGVtZW50c0J5VGFnTmFtZShcIlRPUFBFUlNEUk9ERVZPUlNBXCIpWzBdLmlubmVySFRNTClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICB9XG5cbiAgICAgIC8vIHN0b3JlIGxlcyBjbMOpcyBkYW5zIHVuIHN0YXRlIHBvdXIgbidhZmZpY2hlciBkYW5zIGxlIHRhYmxlYXUgcXVlIGxlcyBkb25uw6llcyBwcsOpc2VudGVzXG4gICAgICBjb25zdCBuZXdLZXlzRHJvaXRzID0ga2V5c0Ryb2l0cy5jb25jYXQoT2JqZWN0LmtleXMoZHJvaXRzKSk7XG4gICAgICBzZXRLZXlzRHJvaXRzKEFycmF5LmZyb20obmV3IFNldChuZXdLZXlzRHJvaXRzKSkuc29ydCgpKTtcbiAgICAgIGNvbnN0IG5ld0tleXNEZXZvaXJzID0ga2V5c0Rldm9pcnMuY29uY2F0KE9iamVjdC5rZXlzKGRldm9pcnMpKTtcbiAgICAgIHNldEtleXNEZXZvaXJzKEFycmF5LmZyb20obmV3IFNldChuZXdLZXlzRGV2b2lycykpLnNvcnQoKSk7XG5cbiAgICAgIHNldElzUGVuZGluZyhmYWxzZSk7XG5cbiAgICAgIGRpc3BhdGNoUnVucyh7XG4gICAgICAgIHR5cGU6IFwiYXBwZW5kXCIsXG4gICAgICAgIGl0ZW06IHtcbiAgICAgICAgICBzZWVkOiBNYXRoLnJhbmRvbSgpLFxuICAgICAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDE5KSxcbiAgICAgICAgICBkdXJhdGlvbjogbmV3IERhdGUoKSAtIHN0YXJ0X3RpbWUsXG4gICAgICAgICAgZmlsZW5hbWU6IGZpbGUubmFtZSxcbiAgICAgICAgICBmaWxlRGF0ZXRpbWU6IGAke2R0fS0ke3RpbWV9YCxcbiAgICAgICAgICBmcmVxdWVuY3ksXG4gICAgICAgICAgdHlwZSxcbiAgICAgICAgICAvLyBXSVA6IE9LIHN1ciBGaXJlZm94IEtPIHN1ciBDaHJvbWVcbiAgICAgICAgICBlcnJvcjpcbiAgICAgICAgICAgIGRvbS5hY3RpdmVFbGVtZW50ICYmIGRvbS5hY3RpdmVFbGVtZW50Lm5vZGVOYW1lID09IFwicGFyc2VyZXJyb3JcIixcbiAgICAgICAgICB0b3RhbDogZm9sZGVyc0NvdW50LFxuICAgICAgICAgIGZpbGVTaXplOiBmaWxlLnNpemUsXG4gICAgICAgICAgcGVvcGxlOiBwZW9wbGVDb3VudCxcbiAgICAgICAgICBkYXRlcyxcbiAgICAgICAgICBkZXZvaXJzLFxuICAgICAgICAgIGRyb2l0cyxcbiAgICAgICAgICBkcm9pdHNFdERldm9pcnMsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9O1xuICAgIHJlYWRlci5yZWFkQXNUZXh0KGZpbGUpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dCBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9IGhhbmRsZUZpbGU9e2hhbmRsZUZpbGV9PlxuICAgICAgPEFkbWluIGNhdGVnb3J5PVwiQsOpbsOpZmljaWFpcmVcIiBvblJ1blJlZnJlc2g9e2hhbmRsZU5ld1J1bnN9IC8+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cbiAgICAgICAgICBMZWN0ZXVyIGRlIGZpY2hpZXJcbiAgICAgICAgICA8YnIgLz7CqyBCw6luw6lmaWNpYWlyZSDCuyBkZSBsYSBDTkFGXG4gICAgICAgIDwvaDE+XG5cbiAgICAgICAgPEZpbGVIYW5kbGVyXG4gICAgICAgICAgaGFuZGxlRmlsZT17aGFuZGxlRmlsZX1cbiAgICAgICAgICBpc1BlbmRpbmc9e2lzUGVuZGluZ31cbiAgICAgICAgICBmaWxlU2l6ZT17ZmlsZVNpemV9XG4gICAgICAgICAgbWVzc2FnZT17XCJDYWxjdWwgZGVzIHN0YXRpc3RpcXVlcyBlbiBjb3VycywgbWVyY2kgZGUgcGF0aWVudGVyXCJ9XG4gICAgICAgIC8+XG5cbiAgICAgICAge3J1bnMgJiYgcnVucy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnN1YnRpdGxlfT5TdGF0aXN0aXF1ZXMgZHJvaXRzICYgZGV2b2lyczwvaDI+XG5cbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9e3N0eWxlcy5tYXJnaW5fc2lkZX0+XG4gICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj48L3RoPlxuICAgICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+RG9zc2llcnMgKEZveWVycyk8L3RoPlxuICAgICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+UGVyc29ubmVzPC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aCBjb2xTcGFuPXtrZXlzRHJvaXRzLmxlbmd0aH0+XG4gICAgICAgICAgICAgICAgICAgIFZhbGV1cnMgYmFsaXNlcyBFVEFURE9TUlNBXG4gICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgPHRoIGNvbFNwYW49e2tleXNEZXZvaXJzLmxlbmd0aH0+XG4gICAgICAgICAgICAgICAgICAgIFZhbGV1cnMgYmFsaXNlcyBUT1BQRVJTRFJPREVWT1JTQVxuICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aCBjb2xTcGFuPVwiM1wiPk5vbWJyZSBkZSBwZXJzb25uZXMgZGFucyBmb3llciBkcm9pdCBvdXZlcnQgZXQgdmVyc2FibGU8L3RoPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAge2tleXNEcm9pdHMubWFwKGsgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8dGgga2V5PXtrfSBjb2xTcGFuPVwiMVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtrfVxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICB7a2V5c0Rldm9pcnMubWFwKGsgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8dGgga2V5PXtrfSBjb2xTcGFuPVwiMVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtrfVxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj1cIjFcIj5Tb3VtaXNlcyBkcm9pdHMgJiBkZXZvaXJzPC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aCBjb2xTcGFuPVwiMVwiPk5vbiBzb3VtaXNlcyBkcm9pdHMgJiBkZXZvaXJzPC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aCBjb2xTcGFuPVwiMVwiPlRvdGFsPC90aD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgey8qIHJldmVyc2UgZXN0IHV0aWxpc8OpIHBvdXIgcXVlIGxlcyBmaWNoaWVycyBhcHBhcmFpc3NlbnQgZGFucyBsZXVyIG9yZHJlIGQndXBsb2FkICovfVxuICAgICAgICAgICAgICAgIHtydW5zLnJldmVyc2UoKS5tYXAoKHIsIGkpID0+IChcbiAgICAgICAgICAgICAgICAgIDx0clxuICAgICAgICAgICAgICAgICAgICBrZXk9e2Ake3IudGltZXN0YW1wfS0ke3IuZmlsZW5hbWV9LSR7ci5zZWVkfS0wYH1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e2kgPT0gZGF0ZURhdGEuaW5kZXggPyB7IGJhY2tncm91bmRDb2xvcjogXCJsaWdodGdyZXlcIiB9IDoge30gfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e2kgKyAxfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9PntyLnRvdGFsfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9PntyLnBlb3BsZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICB7a2V5c0Ryb2l0cy5tYXAoayA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17a30gY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtyLmRyb2l0c1trXSB8fCAwfVxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICB7a2V5c0Rldm9pcnMubWFwKGsgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e2t9IGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ci5kZXZvaXJzW2tdIHx8IDB9XG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgIHtyLmRyb2l0c0V0RGV2b2lyc1sxXSB8fCAwfVxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT5cbiAgICAgICAgICAgICAgICAgICAgICB7ci5kcm9pdHNFdERldm9pcnNbMF0gfHwgMH1cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+XG4gICAgICAgICAgICAgICAgICAgICAge3IuZHJvaXRzRXREZXZvaXJzW1wiVG90YWxcIl0gfHwgMH1cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgPHRkPlRvdGFsPC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9PntjYWxjdWxhdGVUb3RhbChcInRvdGFsXCIpfTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT57Y2FsY3VsYXRlVG90YWwoXCJwZW9wbGVcIil9PC90ZD5cbiAgICAgICAgICAgICAgICAgIHtrZXlzRHJvaXRzLm1hcChrID0+IChcbiAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17a30gY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT5cbiAgICAgICAgICAgICAgICAgICAgICB7Y2FsY3VsYXRlVG90YWwoXCJkcm9pdHNcIiwgaykgfHwgMH1cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAge2tleXNEZXZvaXJzLm1hcChrID0+IChcbiAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17a30gY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT5cbiAgICAgICAgICAgICAgICAgICAgICB7Y2FsY3VsYXRlVG90YWwoXCJkZXZvaXJzXCIsIGspIHx8IDB9XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9PlxuICAgICAgICAgICAgICAgICAgICB7Y2FsY3VsYXRlVG90YWwoXCJkcm9pdHNFdERldm9pcnNcIiwgMSkgfHwgMH1cbiAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT5cbiAgICAgICAgICAgICAgICAgICAge2NhbGN1bGF0ZVRvdGFsKFwiZHJvaXRzRXREZXZvaXJzXCIsIDApIHx8IDB9XG4gICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+XG4gICAgICAgICAgICAgICAgICAgIHtjYWxjdWxhdGVUb3RhbChcImRyb2l0c0V0RGV2b2lyc1wiLCBcIlRvdGFsXCIpIHx8IDB9XG4gICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG5cbiAgICAgICAgICAgICAgICA8dHI+PC90cj5cbiAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGVnZW5kZX0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGVnZW5kZV9ib3h9PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmxlZ2VuZGVfdGl0bGV9PkzDqWdlbmRlJm5ic3A7OjwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5ib2xkfT5WYWxldXIgYmFsaXNlIEVUQVRET1NSU0E8L3A+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAwPU5vdXZlbGxlIGRlbWFuZGUgZW4gYXR0ZW50ZSBkZSBkw6ljaXNpb24gQ0cgcG91ciBvdXZlcnR1cmUgZHVcbiAgICAgICAgICAgICAgICAgIGRyb2l0XG4gICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgIDE9RHJvaXQgcmVmdXPDqVxuICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAyPURyb2l0IG91dmVydCBldCB2ZXJzYWJsZVxuICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAzPURyb2l0IG91dmVydCBldCBzdXNwZW5kdSAobGUgbW9udGFudCBkdSBkcm9pdCBlc3RcbiAgICAgICAgICAgICAgICAgIGNhbGN1bGFibGUsIG1haXMgbCdleGlzdGVuY2UgZHUgZHJvaXQgZXN0IHJlbWlzIGVuIGNhdXNlKVxuICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICA0PURyb2l0IG91dmVydCBtYWlzIHZlcnNlbWVudCBzdXNwZW5kdSAobGUgbW9udGFudCBkdSBkcm9pdFxuICAgICAgICAgICAgICAgICAgbidlc3QgcGFzIGNhbGN1bGFibGUpXG4gICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgIDU9RHJvaXQgY2xvc1xuICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICA2PURyb2l0IGNsb3Mgc3VyIG1vaXMgYW50w6lyaWV1ciBheWFudCBldSB1biBjb250csO0bGUgZGFucyBsZVxuICAgICAgICAgICAgICAgICAgbW9pcyBkZSByw6lmw6lyZW5jZSBwb3VyIHVuZSBww6lyaW9kZSBhbnTDqXJpZXVyZS5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxlZ2VuZGVfYm94fT5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5ib2xkfT5WYWxldXIgYmFsaXNlIFRPUFBFUlNEUk9ERVZPUlNBPC9wPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgMD1QZXJzb25uZSBwYXMgc291bWlzZSDDoCBkcm9pdHMgZXQgZGV2b2lyc1xuICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAxPVBlcnNvbm5lIHNvdW1pc2Ugw6AgZHJvaXRzIGV0IGRldm9pcnNcbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPHA+Jm5ic3A7PC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmJvbGR9PlxuICAgICAgICAgICAgICAgICAgUGVyc29ubmVzIGRhbnMgZm95ZXIgZHJvaXQgb3V2ZXJ0IGV0IHZlcnNhYmxlXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgU291bWlzZXMgZHJvaXRzICYgZGV2b2lycyA6IE5vbWJyZSBkZSBwZXJzb25uZXMgZG9udCBsYSBiYWxpc2UgVE9QUEVSU0RST0RFVk9SU0E9MSBwcsOpc2VudHMgZGFucyBkZXMgZm95ZXJzIGRvbnQgbGEgYmFsaXNlIEVUQVRET1NSU0E9MlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIE5vbiBzb3VtaXNlcyBkcm9pdHMgJiBkZXZvaXJzIDogTm9tYnJlIGRlIHBlcnNvbm5lcyBkb250IGxhIGJhbGlzZSBUT1BQRVJTRFJPREVWT1JTQT0wIHByw6lzZW50cyBkYW5zIGRlcyBmb3llcnMgZG9udCBsYSBiYWxpc2UgRVRBVERPU1JTQT0yXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuc3VidGl0bGV9Pkhpc3RvcmlxdWU8L2gyPlxuXG4gICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPXtzdHlsZXMubWFyZ2luX3NpZGV9PlxuICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+PC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPkZpY2hpZXI8L3RoPlxuICAgICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+RGF0ZTwvdGg+XG4gICAgICAgICAgICAgICAgICB7ZGV2TW9kZSAmJiA8dGggcm93U3Bhbj1cIjJcIj5UYWlsbGU8L3RoPn1cbiAgICAgICAgICAgICAgICAgIHtkZXZNb2RlICYmIChcbiAgICAgICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgRHVyw6llXG4gICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgKGVuIHMpXG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+RGF0ZSBkdSBmaWNoaWVyPC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPkZyw6lxdWVuY2U8L3RoPlxuICAgICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+TmF0dXJlPC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPkRvc3NpZXJzPC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPkTDqXRhaWxzPC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPkVycmV1cjwvdGg+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8dHI+PC90cj5cbiAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgIHsvKiByZXZlcnNlIGVzdCB1dGlsaXPDqSBwb3VyIHF1ZSBsZXMgZmljaGllcnMgYXBwYXJhaXNzZW50IGRhbnMgbGV1ciBvcmRyZSBkJ3VwbG9hZCAqL31cbiAgICAgICAgICAgICAgICB7cnVucy5yZXZlcnNlKCkubWFwKChyLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8dHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtgJHtyLnRpbWVzdGFtcH0tJHtyLmZpbGVuYW1lfS0ke3Iuc2VlZH1gfVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17XG4gICAgICAgICAgICAgICAgICAgICAgaSA9PSBkYXRlRGF0YS5pbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgPyB7IGJhY2tncm91bmRDb2xvcjogXCJsaWdodGdyZXlcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICA6IHt9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHRkPntpICsgMX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3IuZmlsZW5hbWV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPntyLnRpbWVzdGFtcH08L3RkPlxuICAgICAgICAgICAgICAgICAgICB7ZGV2TW9kZSAmJiA8dGQ+e3IuZmlsZVNpemV9PC90ZD59XG4gICAgICAgICAgICAgICAgICAgIHtkZXZNb2RlICYmIChcbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+eyFpc05hTihyLmR1cmF0aW9uKSA/IHIuZHVyYXRpb24gLyAxMDAwIDogXCIjTi9BXCJ9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPHRkPntyLmZpbGVEYXRldGltZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e2Ake3IuZnJlcXVlbmN5fSAoJHtcbiAgICAgICAgICAgICAgICAgICAgICBmcmVxdWVuY3lOYW1lc1tyLmZyZXF1ZW5jeV0gfHwgXCI/XCJcbiAgICAgICAgICAgICAgICAgICAgfSlgfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57YCR7ci50eXBlfSAoJHt0eXBlTmFtZXNbci50eXBlXSB8fCBcIj9cIn0pYH08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMubnVtZXJpY30+e3IudG90YWx9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInNocmlua1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlRGF0ZUhpc3RvZ3JhbX0gZGF0YS1pbmRleD17aX0+XG4gICAgICAgICAgICAgICAgICAgICAgICBBZmZpY2hlciBwYXIgZGF0ZVxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3IuZXJyb3IgPyBcIk91aVwiIDogXCJOb25cIn08L3RkPlxuICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+XG5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGlzcGF0Y2hSdW5zKHsgdHlwZTogXCJyZXNldFwiIH0pfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5tYXJnaW5fYm90dG9tfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBWaWRlciBsJ2hpc3RvcmlxdWVcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuXG4gICAgICAgIHtydW5zLmxlbmd0aCAhPSAwICYmIChcbiAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5cbiAgICAgICAgICAgIFZvdXMgcG91dmV6IGFjY8OpZGVyIMOgIHVuZSByZXByw6lzZW50YXRpb24gZ3JhcGhpcXVlIGRlIGxhIHLDqXBhcnRpdGlvblxuICAgICAgICAgICAgZGFucyBsZXMgdGVtcHMgZGVzIGRlbWFuZGVzIGNvbm51ZXMgZGFucyBsZXMgZmljaGllcnMgYW5hbHlzw6lzLiBQb3VyXG4gICAgICAgICAgICBjZWxhIGlsIGZhdXQgY2xpcXVlciBzdXIgbGUgYm91dG9uIMKrIEFmZmljaGVyIHBhciBkYXRlIMK7LlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgKX1cblxuICAgICAgICB7ZGF0ZURhdGEuaW5kZXggIT0gdW5kZWZpbmVkICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnN1YnRpdGxlfT5cbiAgICAgICAgICAgICAgTm9tYnJlIGRlIGRvc3NpZXJzIGFzc29jacOpcyDDoCBkZXMgZGVtYW5kZXMgcsOpYWxpc8OpcyDDoCBjaGFxdWUgZGF0ZVxuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiAyNTAgKiBkYXRlRGF0YS55ZWFyQ291bnQgKyBcInB4XCIsIHdpZHRoOiBcIjEwMCVcIiB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7UmVzcG9uc2l2ZUNhbGVuZGFyKGRhdGVEYXRhKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuXG4gICAgICAgIDxGb290ZXJcbiAgICAgICAgICBzdWJqZWN0PVwiRmx1eCBiw6luw6lmaWNpYWlyZSBDTkFGXCJcbiAgICAgICAgICBwb3VycXVvaT1cIlBvdXJxdW9pIHVuIGxlY3RldXIgZGUgZmljaGllciBDTkFGJm5ic3A7P1wiXG4gICAgICAgICAgdGV4dD17XG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5cbiAgICAgICAgICAgICAgICBUb3VzIGxlcyBkw6lwYXJ0ZW1lbnRzIG4nb250IHBhcyBsZXMgb3V0aWxzIHBvdXIgYW5hbHlzZXIgbGVzXG4gICAgICAgICAgICAgICAgZmljaGllcnMgZW52b3nDqXMgcGFyIGxhIENOQUYuIENlbGEgcGV1dCByYWxlbnRpciBldCBjb21wbGlxdWVyXG4gICAgICAgICAgICAgICAgbm9zIMOpY2hhbmdlcy5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5cbiAgICAgICAgICAgICAgICBBdmVjIGNldCBvdXRpbCwgbm91cyBzb3VoYWl0b25zIHBlcm1ldHRyZSBhdXggcGVyc29ubmVzIHF1aSBvbnRcbiAgICAgICAgICAgICAgICBhY2PDqHMgw6AgY2VzIGZpY2hpZXJzIGQnZW4gZXh0cmFpcmUgZGVzIHN0YXRpc3RpcXVlcyBnw6luw6lyYWxlc1xuICAgICAgICAgICAgICAgIHNhbnMgYXZvaXIgw6AgbWV0dHJlIGxlcyBtYWlucyBkYW5zIGxlIGNhbWJvdWkgZWxsZXMtbcOqbWUuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgIH1cbiAgICAgICAgLz5cbiAgICAgIDwvbWFpbj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=