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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_admin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/admin */ "./components/admin.js");
/* harmony import */ var _components_chart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/chart */ "./components/chart.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/layout */ "./components/layout.js");
/* harmony import */ var _components_file__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/file */ "./components/file.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/footer */ "./components/footer.js");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _lib_cnaf__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../lib/cnaf */ "./lib/cnaf.js");
/* harmony import */ var _lib_historique__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../lib/historique */ "./lib/historique.js");





var _jsxFileName = "/home/q/code/qblanc/beta.gouv/analyse-flux-insertion/pages/lecteur/cnaf/beneficiaire/index.js",
    _s = $RefreshSig$();











var reducer = Object(_lib_historique__WEBPACK_IMPORTED_MODULE_12__["reducerFactory"])('Test - CNAF - Bénéficiaire');
var devMode = true;
function Beneficiaire() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      devFile = _useState[0],
      setDevFile = _useState[1];

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_3__["useReducer"])(reducer, [], _lib_historique__WEBPACK_IMPORTED_MODULE_12__["initReducer"]),
      runs = _useReducer[0],
      dispatchRuns = _useReducer[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isPending = _useState2[0],
      setIsPending = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      fileSize = _useState3[0],
      setFileSize = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    index: undefined,
    data: [],
    from: "2016-03-01",
    to: "2021-03-01"
  }),
      dateData = _useState4[0],
      setDateData = _useState4[1];

  var handleNewRuns = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (data) {
    dispatchRuns({
      type: 'reset',
      items: data
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

      var items = Object(_babel_runtime_helpers_esm_construct__WEBPACK_IMPORTED_MODULE_1__["default"])(Array, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(dom.getElementsByTagName('InfosFoyerRSA')));

      setIsPending(false);
      var dates = items.map(function (i) {
        return i.getElementsByTagName('DTDEMRSA')[0].innerHTML;
      }).reduce(function (accum, value) {
        accum[value] = (accum[value] || 0) + 1;
        return accum;
      }, {});
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
          fileSize: file.size,
          dates: dates
        }
      });
    };

    reader.readAsText(file);
  };

  var round = function round(value) {
    return Math.round(value);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.container,
    fileHandler: fileHandler,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_admin__WEBPACK_IMPORTED_MODULE_5__["default"], {
      category: "B\xE9n\xE9ficiaire",
      onRunRefresh: handleNewRuns
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.main,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.title,
        children: ["Lecteur de fichier", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 29
        }, this), "\xAB B\xE9n\xE9ficiaire \xBB de la CNAF"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_file__WEBPACK_IMPORTED_MODULE_8__["default"], {
        fileHandler: fileHandler,
        isPending: isPending,
        fileSize: fileSize
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 9
      }, this), runs && runs.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.subtitle,
          children: "Historique"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Date"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 146,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Fichier"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 147,
                columnNumber: 17
              }, this), devMode && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Taille"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 148,
                columnNumber: 30
              }, this), devMode && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: ["Dur\xE9e", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 149,
                  columnNumber: 51
                }, this), "(en s)"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 149,
                columnNumber: 30
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Date du fichier"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 150,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Fr\xE9quence"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 151,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Nature"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 152,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Dossiers"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 153,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "D\xE9tails"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 154,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Erreur"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 155,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 145,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 157,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
            children: runs.map(function (r, i) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                style: i == dateData.index ? {
                  backgroundColor: 'lightgrey'
                } : {},
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: r.timestamp
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 162,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: r.filename
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 163,
                  columnNumber: 17
                }, _this), devMode && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: r.fileSize
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 164,
                  columnNumber: 30
                }, _this), devMode && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: !isNaN(r.duration) ? r.duration / 1000 : "#N/A"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 165,
                  columnNumber: 30
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: r.fileDatetime
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 166,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: "".concat(r.frequency, " (").concat(_lib_cnaf__WEBPACK_IMPORTED_MODULE_11__["frequencyNames"][r.frequency] || '?', ")")
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 167,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: "".concat(r.type, " (").concat(_lib_cnaf__WEBPACK_IMPORTED_MODULE_11__["typeNames"][r.type] || '?', ")")
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 168,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.numeric,
                  children: r.total
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 169,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: "shrink",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                    onClick: handleDateHistogram,
                    "data-index": i,
                    children: "Afficher par date"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 170,
                    columnNumber: 40
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 170,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: r.error ? 'Oui' : 'Non'
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 171,
                  columnNumber: 17
                }, _this)]
              }, "".concat(r.timestamp, "-").concat(r.filename, "-").concat(r.seed), true, {
                fileName: _jsxFileName,
                lineNumber: 161,
                columnNumber: 36
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 160,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 143,
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
          lineNumber: 177,
          columnNumber: 11
        }, this)]
      }, void 0, true), runs.length != 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.text,
        children: "Vous pouvez acc\xE9der \xE0 une repr\xE9sentation graphique de la r\xE9partition dans les temps des demandes connues dans les fichiers analys\xE9s. Pour cela il faut cliquer sur le bouton \xAB Afficher par date \xBB."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 31
      }, this), dateData.index != undefined && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.subtitle,
          children: "Nombre de dossiers associ\xE9s \xE0 des demandes r\xE9alis\xE9s \xE0 chaque date"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            height: 250 * dateData.yearCount + "px",
            width: "100%"
          },
          children: Object(_components_chart__WEBPACK_IMPORTED_MODULE_6__["default"])(dateData)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 13
        }, this)]
      }, void 0, true), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_footer__WEBPACK_IMPORTED_MODULE_9__["default"], {
        subject: "Flux b\xE9n\xE9ficiaire CNAF",
        pourquoi: "Pourquoi un lecteur de fichier CNAF\xA0?",
        text: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.text,
            children: "Tous les d\xE9partements n'ont pas les outils pour analyser les fichiers envoy\xE9s par la CNAF. Cela peut ralentir et compliquer nos \xE9changes."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 199,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.text,
            children: "Avec cet outil, nous souhaitons permettre aux personnes qui ont acc\xE8s \xE0 ces fichiers d'en extraire des statistiques g\xE9n\xE9rales sans avoir \xE0 mettre les mains dans le camboui elles-m\xEAme."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 200,
            columnNumber: 13
          }, this)]
        }, void 0, true)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 129,
    columnNumber: 5
  }, this);
}

_s(Beneficiaire, "RPqYHFYQ8de7tYA9wmX1S2yO8QY=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbGVjdGV1ci9jbmFmL2JlbmVmaWNpYWlyZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJyZWR1Y2VyIiwicmVkdWNlckZhY3RvcnkiLCJkZXZNb2RlIiwiQmVuZWZpY2lhaXJlIiwidXNlU3RhdGUiLCJkZXZGaWxlIiwic2V0RGV2RmlsZSIsInVzZVJlZHVjZXIiLCJpbml0UmVkdWNlciIsInJ1bnMiLCJkaXNwYXRjaFJ1bnMiLCJpc1BlbmRpbmciLCJzZXRJc1BlbmRpbmciLCJmaWxlU2l6ZSIsInNldEZpbGVTaXplIiwiaW5kZXgiLCJ1bmRlZmluZWQiLCJkYXRhIiwiZnJvbSIsInRvIiwiZGF0ZURhdGEiLCJzZXREYXRlRGF0YSIsImhhbmRsZU5ld1J1bnMiLCJ1c2VDYWxsYmFjayIsInR5cGUiLCJpdGVtcyIsInVzZUVmZmVjdCIsImZpbGVIYW5kbGVyIiwiaGFuZGxlRGF0ZUhpc3RvZ3JhbSIsImV2ZW50Iiwic2hvd0RhdGVIaXN0b2dyYW0iLCJwYXJzZUludCIsInRhcmdldCIsImRhdGFzZXQiLCJzb3VyY2UiLCJkYXRlcyIsIk9iamVjdCIsImtleXMiLCJtaW5EYXRlIiwibWF4RGF0ZSIsIm1hcCIsImQiLCJkYXRlIiwiRGF0ZSIsImRheSIsInRvSVNPU3RyaW5nIiwic2xpY2UiLCJ2YWx1ZSIsInllYXJDb3VudCIsImdldFllYXIiLCJmaWxlIiwic2l6ZSIsInN0YXJ0X3RpbWUiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwicGFyc2VyIiwiRE9NUGFyc2VyIiwiZG9tIiwicGFyc2VGcm9tU3RyaW5nIiwicmVzdWx0IiwiZGVzYyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiZnJlcXVlbmN5IiwiaW5uZXJIVE1MIiwiZHQiLCJ0aW1lIiwiQXJyYXkiLCJpIiwicmVkdWNlIiwiYWNjdW0iLCJpdGVtIiwic2VlZCIsIk1hdGgiLCJyYW5kb20iLCJ0aW1lc3RhbXAiLCJkdXJhdGlvbiIsImZpbGVuYW1lIiwibmFtZSIsImZpbGVEYXRldGltZSIsImVycm9yIiwiYWN0aXZlRWxlbWVudCIsIm5vZGVOYW1lIiwidG90YWwiLCJsZW5ndGgiLCJyZWFkQXNUZXh0Iiwicm91bmQiLCJzdHlsZXMiLCJjb250YWluZXIiLCJtYWluIiwidGl0bGUiLCJzdWJ0aXRsZSIsInIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJpc05hTiIsImZyZXF1ZW5jeU5hbWVzIiwidHlwZU5hbWVzIiwibnVtZXJpYyIsInRleHQiLCJoZWlnaHQiLCJ3aWR0aCIsIlJlc3BvbnNpdmVDYWxlbmRhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHQyx1RUFBYyxDQUFDLDRCQUFELENBQTlCO0FBQ0EsSUFBTUMsT0FBTyxPQUFiO0FBRWUsU0FBU0MsWUFBVCxHQUF3QjtBQUFBOztBQUFBOztBQUFBLGtCQUNQQyxzREFBUSxDQUFDLElBQUQsQ0FERDtBQUFBLE1BQzlCQyxPQUQ4QjtBQUFBLE1BQ3JCQyxVQURxQjs7QUFBQSxvQkFFUkMsd0RBQVUsQ0FBQ1AsT0FBRCxFQUFVLEVBQVYsRUFBY1EsNERBQWQsQ0FGRjtBQUFBLE1BRTlCQyxJQUY4QjtBQUFBLE1BRXhCQyxZQUZ3Qjs7QUFBQSxtQkFHSE4sc0RBQVEsQ0FBQyxLQUFELENBSEw7QUFBQSxNQUc5Qk8sU0FIOEI7QUFBQSxNQUduQkMsWUFIbUI7O0FBQUEsbUJBSUxSLHNEQUFRLENBQUMsQ0FBRCxDQUpIO0FBQUEsTUFJOUJTLFFBSjhCO0FBQUEsTUFJcEJDLFdBSm9COztBQUFBLG1CQUtMVixzREFBUSxDQUFDO0FBQ3ZDVyxTQUFLLEVBQUVDLFNBRGdDO0FBRXZDQyxRQUFJLEVBQUUsRUFGaUM7QUFHdkNDLFFBQUksRUFBRSxZQUhpQztBQUl2Q0MsTUFBRSxFQUFFO0FBSm1DLEdBQUQsQ0FMSDtBQUFBLE1BSzlCQyxR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QUFJLENBQUMyRSxNQUFMLElBQWUsQ0FBZixpQkFBcUI7QUFBRyxpQkFBUyxFQUFFRywrREFBTSxDQUFDVyxJQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWpEeEIsRUFxREc5RSxRQUFRLENBQUNMLEtBQVQsSUFBa0JDLFNBQWxCLGlCQUNDO0FBQUEsZ0NBQ0U7QUFBSSxtQkFBUyxFQUFFdUUsK0RBQU0sQ0FBQ0ksUUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFJRTtBQUFLLGVBQUssRUFBRTtBQUFDUSxrQkFBTSxFQUFHLE1BQUkvRSxRQUFRLENBQUM0QixTQUFkLEdBQTJCLElBQXBDO0FBQTBDb0QsaUJBQUssRUFBRTtBQUFqRCxXQUFaO0FBQUEsb0JBQ0dDLGlFQUFrQixDQUFDakYsUUFBRDtBQURyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpGO0FBQUEsc0JBdERKLGVBZ0VFLHFFQUFDLDBEQUFEO0FBQ0UsZUFBTyxFQUFDLDhCQURWO0FBRUUsZ0JBQVEsRUFBQywwQ0FGWDtBQUdFLFlBQUksZUFBRTtBQUFBLGtDQUNKO0FBQUcscUJBQVMsRUFBRW1FLCtEQUFNLENBQUNXLElBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURJLGVBRUo7QUFBRyxxQkFBUyxFQUFFWCwrREFBTSxDQUFDVyxJQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSTtBQUFBO0FBSFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWhFRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQThFRDs7R0E3THVCL0YsWTs7S0FBQUEsWSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sZWN0ZXVyL2NuYWYvYmVuZWZpY2lhaXJlLjI1NTJkZjE4MTFhN2I2NmU2NWRhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWR1Y2VyfSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuaW1wb3J0IEFkbWluIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvYWRtaW4nXG5pbXBvcnQgUmVzcG9uc2l2ZUNhbGVuZGFyIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvY2hhcnQnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0J1xuaW1wb3J0IEZpbGVIYW5kbGVyIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvZmlsZSdcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9mb290ZXInXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uLy4uLy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5cbmltcG9ydCB7IGZyZXF1ZW5jeU5hbWVzLCB0eXBlTmFtZXMgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvY25hZidcbmltcG9ydCB7IGluaXRSZWR1Y2VyLCByZWR1Y2VyRmFjdG9yeSB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9oaXN0b3JpcXVlJ1xuXG5jb25zdCByZWR1Y2VyID0gcmVkdWNlckZhY3RvcnkoJ1Rlc3QgLSBDTkFGIC0gQsOpbsOpZmljaWFpcmUnKVxuY29uc3QgZGV2TW9kZSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09ICdkZXZlbG9wbWVudCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmVuZWZpY2lhaXJlKCkge1xuICBjb25zdCBbZGV2RmlsZSwgc2V0RGV2RmlsZV0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbcnVucywgZGlzcGF0Y2hSdW5zXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgW10sIGluaXRSZWR1Y2VyKVxuICBjb25zdCBbaXNQZW5kaW5nLCBzZXRJc1BlbmRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZmlsZVNpemUsIHNldEZpbGVTaXplXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbZGF0ZURhdGEsIHNldERhdGVEYXRhXSA9IHVzZVN0YXRlKHtcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGRhdGE6IFtdLFxuICAgIGZyb206IFwiMjAxNi0wMy0wMVwiLFxuICAgIHRvOiBcIjIwMjEtMDMtMDFcIixcbiAgfSlcblxuICBjb25zdCBoYW5kbGVOZXdSdW5zID0gdXNlQ2FsbGJhY2soZGF0YSA9PiB7XG4gICAgZGlzcGF0Y2hSdW5zKHtcbiAgICAgIHR5cGU6ICdyZXNldCcsXG4gICAgICBpdGVtczogZGF0YVxuICAgIH0pXG4gIH0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZihkZXZGaWxlKSB7XG4gICAgICBmaWxlSGFuZGxlcihkZXZGaWxlKVxuICAgIH1cbiAgfSwgW2RldkZpbGVdKVxuXG4gIGNvbnN0IGhhbmRsZURhdGVIaXN0b2dyYW0gPSB1c2VDYWxsYmFjayhldmVudCA9PiBzaG93RGF0ZUhpc3RvZ3JhbShwYXJzZUludChldmVudC50YXJnZXQuZGF0YXNldC5pbmRleCkpKVxuICBjb25zdCBzaG93RGF0ZUhpc3RvZ3JhbSA9IHVzZUNhbGxiYWNrKGluZGV4ID0+IHtcbiAgICBjb25zdCBzb3VyY2UgPSBydW5zW2luZGV4XVxuXG4gICAgY29uc3QgZGF0ZXMgPSBPYmplY3Qua2V5cyhzb3VyY2UuZGF0ZXMpXG4gICAgbGV0IG1pbkRhdGUgPSBudWxsXG4gICAgbGV0IG1heERhdGUgPSBudWxsXG5cbiAgICBjb25zdCBkYXRhID0gZGF0ZXMubWFwKGQgPT4ge1xuICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZShkKVxuICAgICAgaWYgKCFtaW5EYXRlKSB7XG4gICAgICAgIG1pbkRhdGUgPSBkYXRlXG4gICAgICAgIG1heERhdGUgPSBkYXRlXG4gICAgICB9IGVsc2UgaWYgKGRhdGUgPCBtaW5EYXRlKSB7XG4gICAgICAgIG1pbkRhdGUgPSBkYXRlXG4gICAgICB9IGVsc2UgaWYgKG1heERhdGUgPCBkYXRlKSB7XG4gICAgICAgIG1heERhdGUgPSBkYXRlXG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICBkYXk6IGRhdGUudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCksXG4gICAgICAgIHZhbHVlOiBzb3VyY2UuZGF0ZXNbZF1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgeWVhckNvdW50ID0gbWF4RGF0ZS5nZXRZZWFyKCkgLSBtaW5EYXRlLmdldFllYXIoKSArIDFcbiAgICBzZXREYXRlRGF0YSh7XG4gICAgICBpbmRleCxcbiAgICAgIGRhdGEsXG4gICAgICBmcm9tOiBtaW5EYXRlLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApLFxuICAgICAgdG86IG1heERhdGUudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCksXG4gICAgICB5ZWFyQ291bnQsXG4gICAgfSlcbiAgfSlcblxuICBjb25zdCBmaWxlSGFuZGxlciA9IChmaWxlKSA9PiB7XG4gICAgaWYgKGRldk1vZGUgJiYgZmlsZSAhPSBkZXZGaWxlKSB7XG4gICAgICBzZXREZXZGaWxlKGZpbGUpXG4gICAgfVxuICAgIHNldEZpbGVTaXplKGZpbGUuc2l6ZSk7XG4gICAgc2V0SXNQZW5kaW5nKHRydWUpO1xuICAgIGNvbnN0IHN0YXJ0X3RpbWUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcbiAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGNvbnN0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKVxuICAgICAgY29uc3QgZG9tID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhldmVudC50YXJnZXQucmVzdWx0LCBcImFwcGxpY2F0aW9uL3htbFwiKVxuXG4gICAgICBjb25zdCBkZXNjID0gZG9tLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdJZGVudGlmaWNhdGlvbkZsdXgnKVswXVxuICAgICAgY29uc3QgZnJlcXVlbmN5ID0gZGVzYy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnVFlQRUZMVVgnKVswXS5pbm5lckhUTUxcbiAgICAgIGNvbnN0IHR5cGUgPSBkZXNjLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdOQVRGTFVYJylbMF0uaW5uZXJIVE1MXG4gICAgICBjb25zdCBkdCA9IGRlc2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ0RUQ1JFQUZMVVgnKVswXS5pbm5lckhUTUxcbiAgICAgIGNvbnN0IHRpbWUgPSBkZXNjLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdIRVVDUkVBRkxVWCcpWzBdLmlubmVySFRNTFxuXG4gICAgICBjb25zdCBpdGVtcyA9IG5ldyBBcnJheSguLi5kb20uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ0luZm9zRm95ZXJSU0EnKSlcblxuICAgICAgc2V0SXNQZW5kaW5nKGZhbHNlKTtcblxuICAgICAgY29uc3QgZGF0ZXMgPSBpdGVtc1xuICAgICAgICAubWFwKGkgPT4gaS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnRFRERU1SU0EnKVswXS5pbm5lckhUTUwpXG4gICAgICAgIC5yZWR1Y2UoKGFjY3VtLCB2YWx1ZSkgPT4ge1xuICAgICAgICAgIGFjY3VtW3ZhbHVlXSA9IChhY2N1bVt2YWx1ZV0gfHwgMCApICsgMVxuICAgICAgICAgIHJldHVybiBhY2N1bVxuICAgICAgICB9LCB7fSlcblxuICAgICAgZGlzcGF0Y2hSdW5zKHtcbiAgICAgICAgdHlwZTogJ2FwcGVuZCcsXG4gICAgICAgIGl0ZW06IHtcbiAgICAgICAgICBzZWVkOiBNYXRoLnJhbmRvbSgpLFxuICAgICAgICAgIHRpbWVzdGFtcDogKG5ldyBEYXRlKCkpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTkpLFxuICAgICAgICAgIGR1cmF0aW9uOiAobmV3IERhdGUoKSkgLSBzdGFydF90aW1lLFxuICAgICAgICAgIGZpbGVuYW1lOiBmaWxlLm5hbWUsXG4gICAgICAgICAgZmlsZURhdGV0aW1lOiBgJHtkdH0tJHt0aW1lfWAsXG4gICAgICAgICAgZnJlcXVlbmN5LFxuICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgLy8gV0lQOiBPSyBzdXIgRmlyZWZveCBLTyBzdXIgQ2hyb21lXG4gICAgICAgICAgZXJyb3I6IGRvbS5hY3RpdmVFbGVtZW50ICYmIGRvbS5hY3RpdmVFbGVtZW50Lm5vZGVOYW1lID09IFwicGFyc2VyZXJyb3JcIixcbiAgICAgICAgICB0b3RhbDogaXRlbXMubGVuZ3RoLFxuICAgICAgICAgIGZpbGVTaXplOiBmaWxlLnNpemUsXG4gICAgICAgICAgZGF0ZXMsXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIHJlYWRlci5yZWFkQXNUZXh0KGZpbGUpXG4gIH1cblxuICBjb25zdCByb3VuZCA9ICh2YWx1ZSkgPT4gTWF0aC5yb3VuZCh2YWx1ZSlcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0gZmlsZUhhbmRsZXI9e2ZpbGVIYW5kbGVyfT5cbiAgICAgIDxBZG1pbiBjYXRlZ29yeT1cIkLDqW7DqWZpY2lhaXJlXCIgb25SdW5SZWZyZXNoPXtoYW5kbGVOZXdSdW5zfS8+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cbiAgICAgICAgICBMZWN0ZXVyIGRlIGZpY2hpZXI8YnIvPsKrIELDqW7DqWZpY2lhaXJlIMK7IGRlIGxhIENOQUZcbiAgICAgICAgPC9oMT5cblxuICAgICAgICA8RmlsZUhhbmRsZXIgZmlsZUhhbmRsZXI9e2ZpbGVIYW5kbGVyfSBpc1BlbmRpbmc9e2lzUGVuZGluZ30gZmlsZVNpemU9e2ZpbGVTaXplfSAvPlxuXG4gICAgICAgIHsgcnVucyAmJiBydW5zLmxlbmd0aCA+IDAgJiYgKDw+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnN1YnRpdGxlfT5cbiAgICAgICAgICAgIEhpc3RvcmlxdWVcbiAgICAgICAgICA8L2gyPlxuXG4gICAgICAgICAgPHRhYmxlPlxuICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+RGF0ZTwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+RmljaGllcjwvdGg+XG4gICAgICAgICAgICAgICAgeyBkZXZNb2RlICYmIDx0aCByb3dTcGFuPVwiMlwiPlRhaWxsZTwvdGg+fVxuICAgICAgICAgICAgICAgIHsgZGV2TW9kZSAmJiA8dGggcm93U3Bhbj1cIjJcIj5EdXLDqWU8YnIvPihlbiBzKTwvdGg+fVxuICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPkRhdGUgZHUgZmljaGllcjwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+RnLDqXF1ZW5jZTwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+TmF0dXJlPC90aD5cbiAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5Eb3NzaWVyczwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+RMOpdGFpbHM8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPkVycmV1cjwvdGg+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgIHtydW5zLm1hcCgociwgaSkgPT4gKDx0ciBrZXk9e2Ake3IudGltZXN0YW1wfS0ke3IuZmlsZW5hbWV9LSR7ci5zZWVkfWAgfSBzdHlsZT17IGkgPT0gZGF0ZURhdGEuaW5kZXggPyB7YmFja2dyb3VuZENvbG9yOiAnbGlnaHRncmV5J306IHt9IH0+XG4gICAgICAgICAgICAgICAgPHRkPntyLnRpbWVzdGFtcH08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57ci5maWxlbmFtZX08L3RkPlxuICAgICAgICAgICAgICAgIHsgZGV2TW9kZSAmJiA8dGQ+e3IuZmlsZVNpemV9PC90ZD59XG4gICAgICAgICAgICAgICAgeyBkZXZNb2RlICYmIDx0ZD57IWlzTmFOKHIuZHVyYXRpb24pID8gci5kdXJhdGlvbi8xMDAwIDogXCIjTi9BXCJ9PC90ZD59XG4gICAgICAgICAgICAgICAgPHRkPntyLmZpbGVEYXRldGltZX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57YCR7ci5mcmVxdWVuY3l9ICgke2ZyZXF1ZW5jeU5hbWVzW3IuZnJlcXVlbmN5XSB8fCAnPyd9KWB9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e2Ake3IudHlwZX0gKCR7dHlwZU5hbWVzW3IudHlwZV0gfHwgJz8nfSlgfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLm51bWVyaWN9PntyLnRvdGFsfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInNocmlua1wiPjxidXR0b24gb25DbGljaz17aGFuZGxlRGF0ZUhpc3RvZ3JhbX0gZGF0YS1pbmRleD17aX0+QWZmaWNoZXIgcGFyIGRhdGU8L2J1dHRvbj48L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57ci5lcnJvciA/ICdPdWknIDogJ05vbid9PC90ZD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICA8L3RhYmxlPlxuXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaFJ1bnMoe3R5cGU6ICdyZXNldCd9KX0+VmlkZXIgbCdoaXN0b3JpcXVlPC9idXR0b24+XG4gICAgICAgIDwvPil9XG5cbiAgICAgICAge3J1bnMubGVuZ3RoICE9IDAgJiYgKDxwIGNsYXNzTmFtZT17c3R5bGVzLnRleHR9PlxuICAgICAgICBWb3VzIHBvdXZleiBhY2PDqWRlciDDoCB1bmUgcmVwcsOpc2VudGF0aW9uIGdyYXBoaXF1ZSBkZSBsYSByw6lwYXJ0aXRpb24gZGFucyBsZXMgdGVtcHMgZGVzIGRlbWFuZGVzIGNvbm51ZXMgZGFucyBsZXMgZmljaGllcnMgYW5hbHlzw6lzLiBQb3VyIGNlbGEgaWwgZmF1dCBjbGlxdWVyIHN1ciBsZSBib3V0b24gwqsgQWZmaWNoZXIgcGFyIGRhdGUgwrsuXG4gICAgICAgICAgPC9wPil9XG5cbiAgICAgICAge2RhdGVEYXRhLmluZGV4ICE9IHVuZGVmaW5lZCAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5zdWJ0aXRsZX0+XG4gICAgICAgICAgICAgIE5vbWJyZSBkZSBkb3NzaWVycyBhc3NvY2nDqXMgw6AgZGVzIGRlbWFuZGVzIHLDqWFsaXPDqXMgw6AgY2hhcXVlIGRhdGVcbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7aGVpZ2h0OiAoMjUwKmRhdGVEYXRhLnllYXJDb3VudCkgKyBcInB4XCIsIHdpZHRoOiBcIjEwMCVcIn19PlxuICAgICAgICAgICAgICB7UmVzcG9uc2l2ZUNhbGVuZGFyKGRhdGVEYXRhKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuXG4gICAgICAgIDxGb290ZXJcbiAgICAgICAgICBzdWJqZWN0PVwiRmx1eCBiw6luw6lmaWNpYWlyZSBDTkFGXCJcbiAgICAgICAgICBwb3VycXVvaT1cIlBvdXJxdW9pIHVuIGxlY3RldXIgZGUgZmljaGllciBDTkFGJm5ic3A7P1wiXG4gICAgICAgICAgdGV4dD17PD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRleHR9PlRvdXMgbGVzIGTDqXBhcnRlbWVudHMgbidvbnQgcGFzIGxlcyBvdXRpbHMgcG91ciBhbmFseXNlciBsZXMgZmljaGllcnMgZW52b3nDqXMgcGFyIGxhIENOQUYuIENlbGEgcGV1dCByYWxlbnRpciBldCBjb21wbGlxdWVyIG5vcyDDqWNoYW5nZXMuPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+QXZlYyBjZXQgb3V0aWwsIG5vdXMgc291aGFpdG9ucyBwZXJtZXR0cmUgYXV4IHBlcnNvbm5lcyBxdWkgb250IGFjY8OocyDDoCBjZXMgZmljaGllcnMgZCdlbiBleHRyYWlyZSBkZXMgc3RhdGlzdGlxdWVzIGfDqW7DqXJhbGVzIHNhbnMgYXZvaXIgw6AgbWV0dHJlIGxlcyBtYWlucyBkYW5zIGxlIGNhbWJvdWkgZWxsZXMtbcOqbWUuPC9wPlxuICAgICAgICAgIDwvPn1cbiAgICAgICAgLz5cbiAgICAgIDwvbWFpbj5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==