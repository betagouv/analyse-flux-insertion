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
/* harmony import */ var _components_mailer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/mailer */ "./components/mailer.js");
/* harmony import */ var _components_pending__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/pending */ "./components/pending.js");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _lib_cnaf__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../lib/cnaf */ "./lib/cnaf.js");
/* harmony import */ var _lib_cnaf__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_lib_cnaf__WEBPACK_IMPORTED_MODULE_11__);
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
  var selectHandler = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (event) {
    for (var i = 0; i < event.target.files.length; i++) {
      fileHandler(event.target.files[i]);
    }

    event.target.value = '';
  });
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
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_admin__WEBPACK_IMPORTED_MODULE_5__["default"], {
      category: "B\xE9n\xE9ficiaire",
      onRunRefresh: handleNewRuns
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.main,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.title,
        children: ["Lecteur de fichier", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 29
        }, this), "\xAB B\xE9n\xE9ficiaire \xBB de la CNAF"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.description,
        children: ["Glissez et d\xE9posez le fichier CNAF \xE0 analyser ou s\xE9lectionnez le.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 76
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "file",
          onChange: selectHandler,
          multiple: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 9
      }, this), isPending && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_pending__WEBPACK_IMPORTED_MODULE_9__["default"], {
        fileSize: fileSize
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 23
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.description,
        children: ["Les op\xE9rations sont toutes r\xE9alis\xE9es sur votre ordinateur.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 69
        }, this), "Aucune donn\xE9e personnelle n'est transf\xE9r\xE9e."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.description,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "#pourquoi",
          children: "Pourquoi un tel lecteur\xA0?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 9
      }, this), runs && runs.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.subtitle,
          children: "Historique"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Date"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 167,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Fichier"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 168,
                columnNumber: 17
              }, this), devMode && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Taille"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 169,
                columnNumber: 30
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Date du fichier"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 170,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Fr\xE9quence"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 171,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Nature"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 172,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Dossiers"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 173,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "D\xE9tails"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 174,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Erreur"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 175,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 166,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 177,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 165,
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
                  lineNumber: 182,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: r.filename
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 183,
                  columnNumber: 17
                }, _this), devMode && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: r.fileSize
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 184,
                  columnNumber: 30
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: r.fileDatetime
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 185,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: "".concat(r.frequency, " (").concat(_lib_cnaf__WEBPACK_IMPORTED_MODULE_11__["frequencyNames"][r.frequency] || '?', ")")
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 186,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: "".concat(r.type, " (").concat(_lib_cnaf__WEBPACK_IMPORTED_MODULE_11__["typeNames"][r.type] || '?', ")")
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 187,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.numeric,
                  children: r.total
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 188,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: "shrink",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                    onClick: handleDateHistogram,
                    "data-index": i,
                    children: "Afficher par date"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 189,
                    columnNumber: 40
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 189,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: r.error ? 'Oui' : 'Non'
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 190,
                  columnNumber: 17
                }, _this)]
              }, "".concat(r.timestamp, "-").concat(r.filename, "-").concat(r.seed), true, {
                fileName: _jsxFileName,
                lineNumber: 181,
                columnNumber: 36
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 180,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 164,
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
          lineNumber: 196,
          columnNumber: 11
        }, this)]
      }, void 0, true), runs.length != 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.text,
        children: "Vous pouvez acc\xE9der \xE0 une repr\xE9sentation graphique de la r\xE9partition dans les temps des demandes connues dans les fichiers analys\xE9s. Pour cela il faut cliquer sur le bouton \xAB Afficher par date \xBB."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 31
      }, this), dateData.index != undefined && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.subtitle,
          children: "Nombre de dossiers associ\xE9s \xE0 des demandes r\xE9alis\xE9s \xE0 chaque date"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            height: 250 * dateData.yearCount + "px",
            width: "100%"
          },
          children: Object(_components_chart__WEBPACK_IMPORTED_MODULE_6__["default"])(dateData)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 13
        }, this)]
      }, void 0, true), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.description,
        children: ["Un probl\xE8me, une question ? Contactez-nous \xE0 ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_mailer__WEBPACK_IMPORTED_MODULE_8__["default"], {
          subject: "Flux b\xE9n\xE9ficiaire CNAF",
          children: "data.insertion@beta.gouv.fr"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 56
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        id: "pourquoi",
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.subtitle,
        children: "Pourquoi un lecteur de fichier CNAF\xA0?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.text,
        children: "Tous les d\xE9partements n'ont pas les outils pour analyser les fichiers envoy\xE9s par la CNAF. Cela peut ralentir et compliquer nos \xE9changes."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.text,
        children: "Avec cet outil, nous souhaitons permettre aux personnes qui ont acc\xE8s \xE0 ces fichiers d'en extraire des statistiques g\xE9n\xE9rales sans avoir \xE0 mettre les mains dans le camboui elles-m\xEAme."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 136,
    columnNumber: 5
  }, this);
}

_s(Beneficiaire, "T8EpLv76ap0SQGqQs+RrXZFilyw=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbGVjdGV1ci9jbmFmL2JlbmVmaWNpYWlyZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJyZWR1Y2VyIiwicmVkdWNlckZhY3RvcnkiLCJkZXZNb2RlIiwiQmVuZWZpY2lhaXJlIiwidXNlU3RhdGUiLCJkZXZGaWxlIiwic2V0RGV2RmlsZSIsInVzZVJlZHVjZXIiLCJpbml0UmVkdWNlciIsInJ1bnMiLCJkaXNwYXRjaFJ1bnMiLCJpc1BlbmRpbmciLCJzZXRJc1BlbmRpbmciLCJmaWxlU2l6ZSIsInNldEZpbGVTaXplIiwiaW5kZXgiLCJ1bmRlZmluZWQiLCJkYXRhIiwiZnJvbSIsInRvIiwiZGF0ZURhdGEiLCJzZXREYXRlRGF0YSIsImhhbmRsZU5ld1J1bnMiLCJ1c2VDYWxsYmFjayIsInR5cGUiLCJpdGVtcyIsInVzZUVmZmVjdCIsImZpbGVIYW5kbGVyIiwic2VsZWN0SGFuZGxlciIsImV2ZW50IiwiaSIsInRhcmdldCIsImZpbGVzIiwibGVuZ3RoIiwidmFsdWUiLCJoYW5kbGVEYXRlSGlzdG9ncmFtIiwic2hvd0RhdGVIaXN0b2dyYW0iLCJwYXJzZUludCIsImRhdGFzZXQiLCJzb3VyY2UiLCJkYXRlcyIsIk9iamVjdCIsImtleXMiLCJtaW5EYXRlIiwibWF4RGF0ZSIsIm1hcCIsImQiLCJkYXRlIiwiRGF0ZSIsImRheSIsInRvSVNPU3RyaW5nIiwic2xpY2UiLCJ5ZWFyQ291bnQiLCJnZXRZZWFyIiwiZmlsZSIsInNpemUiLCJzdGFydF90aW1lIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsInBhcnNlciIsIkRPTVBhcnNlciIsImRvbSIsInBhcnNlRnJvbVN0cmluZyIsInJlc3VsdCIsImRlc2MiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImZyZXF1ZW5jeSIsImlubmVySFRNTCIsImR0IiwidGltZSIsIkFycmF5IiwicmVkdWNlIiwiYWNjdW0iLCJpdGVtIiwic2VlZCIsIk1hdGgiLCJyYW5kb20iLCJ0aW1lc3RhbXAiLCJkdXJhdGlvbiIsImZpbGVuYW1lIiwibmFtZSIsImZpbGVEYXRldGltZSIsImVycm9yIiwiYWN0aXZlRWxlbWVudCIsIm5vZGVOYW1lIiwidG90YWwiLCJyZWFkQXNUZXh0Iiwicm91bmQiLCJzdHlsZXMiLCJjb250YWluZXIiLCJtYWluIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInN1YnRpdGxlIiwiciIsImJhY2tncm91bmRDb2xvciIsImZyZXF1ZW5jeU5hbWVzIiwidHlwZU5hbWVzIiwibnVtZXJpYyIsInRleHQiLCJoZWlnaHQiLCJ3aWR0aCIsIlJlc3BvbnNpdmVDYWxlbmRhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBLElBQU1BLE9BQU8sR0FBR0MsdUVBQWMsQ0FBQyw0QkFBRCxDQUE5QjtBQUNBLElBQU1DLE9BQU8sT0FBYjtBQUVlLFNBQVNDLFlBQVQsR0FBd0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFDUEMsc0RBQVEsQ0FBQyxJQUFELENBREQ7QUFBQSxNQUM5QkMsT0FEOEI7QUFBQSxNQUNyQkMsVUFEcUI7O0FBQUEsb0JBRVJDLHdEQUFVLENBQUNQLE9BQUQsRUFBVSxFQUFWLEVBQWNRLDREQUFkLENBRkY7QUFBQSxNQUU5QkMsSUFGOEI7QUFBQSxNQUV4QkMsWUFGd0I7O0FBQUEsbUJBR0hOLHNEQUFRLENBQUMsS0FBRCxDQUhMO0FBQUEsTUFHOUJPLFNBSDhCO0FBQUEsTUFHbkJDLFlBSG1COztBQUFBLG1CQUlMUixzREFBUSxDQUFDLENBQUQsQ0FKSDtBQUFBLE1BSTlCUyxRQUo4QjtBQUFBLE1BSXBCQyxXQUpvQjs7QUFBQSxtQkFLTFYsc0RBQVEsQ0FBQztBQUN2Q1csU0FBSyxFQUFFQyxTQURnQztBQUV2Q0MsUUFBSSxFQUFFLEVBRmlDO0FBR3ZDQyxRQUFJLEVBQUUsWUFIaUM7QUFJdkNDLE1BQUUsRUFB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QUVxRSwrREFBTSxDQUFDSSxXQUFyQjtBQUFBLHVGQUMrQyxxRUFBQywwREFBRDtBQUFRLGlCQUFPLEVBQUMsOEJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUQvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E1RUYsZUFnRkU7QUFBSSxVQUFFLEVBQUMsVUFBUDtBQUFrQixpQkFBUyxFQUFFSiwrREFBTSxDQUFDSyxRQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWhGRixlQW9GRTtBQUFHLGlCQUFTLEVBQUVMLCtEQUFNLENBQUNXLElBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBcEZGLGVBdUZFO0FBQUcsaUJBQVMsRUFBRVgsK0RBQU0sQ0FBQ1csSUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F2RkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFpR0Q7O0dBdk51QmpHLFk7O0tBQUFBLFkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbGVjdGV1ci9jbmFmL2JlbmVmaWNpYWlyZS44OWE5NTJlNGYwODQ4YTFmNWY0NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVkdWNlcn0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbmltcG9ydCBBZG1pbiBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL2FkbWluJ1xuaW1wb3J0IFJlc3BvbnNpdmVDYWxlbmRhciBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL2NoYXJ0J1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL2xheW91dCdcbmltcG9ydCBNYWlsZXIgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9tYWlsZXInXG5pbXBvcnQgUGVuZGluZ01lc3NhZ2UgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9wZW5kaW5nJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi8uLi8uLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuXG5pbXBvcnQgeyBmcmVxdWVuY3lOYW1lcywgdHlwZU5hbWVzIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL2NuYWYnXG5pbXBvcnQgeyBpbml0UmVkdWNlciwgcmVkdWNlckZhY3RvcnkgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvaGlzdG9yaXF1ZSdcblxuY29uc3QgcmVkdWNlciA9IHJlZHVjZXJGYWN0b3J5KCdUZXN0IC0gQ05BRiAtIELDqW7DqWZpY2lhaXJlJylcbmNvbnN0IGRldk1vZGUgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PSAnZGV2ZWxvcG1lbnQnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJlbmVmaWNpYWlyZSgpIHtcbiAgY29uc3QgW2RldkZpbGUsIHNldERldkZpbGVdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW3J1bnMsIGRpc3BhdGNoUnVuc10gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIFtdLCBpbml0UmVkdWNlcilcbiAgY29uc3QgW2lzUGVuZGluZywgc2V0SXNQZW5kaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2ZpbGVTaXplLCBzZXRGaWxlU2l6ZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2RhdGVEYXRhLCBzZXREYXRlRGF0YV0gPSB1c2VTdGF0ZSh7XG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBkYXRhOiBbXSxcbiAgICBmcm9tOiBcIjIwMTYtMDMtMDFcIixcbiAgICB0bzogXCIyMDIxLTAzLTAxXCIsXG4gIH0pXG5cbiAgY29uc3QgaGFuZGxlTmV3UnVucyA9IHVzZUNhbGxiYWNrKGRhdGEgPT4ge1xuICAgIGRpc3BhdGNoUnVucyh7XG4gICAgICB0eXBlOiAncmVzZXQnLFxuICAgICAgaXRlbXM6IGRhdGFcbiAgICB9KVxuICB9KVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYoZGV2RmlsZSkge1xuICAgICAgZmlsZUhhbmRsZXIoZGV2RmlsZSlcbiAgICB9XG4gIH0sIFtkZXZGaWxlXSlcblxuICBjb25zdCBzZWxlY3RIYW5kbGVyID0gdXNlQ2FsbGJhY2soKGV2ZW50KSA9PiB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGk8ZXZlbnQudGFyZ2V0LmZpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBmaWxlSGFuZGxlcihldmVudC50YXJnZXQuZmlsZXNbaV0pXG4gICAgfVxuICAgIGV2ZW50LnRhcmdldC52YWx1ZSA9ICcnXG4gIH0pXG5cbiAgY29uc3QgaGFuZGxlRGF0ZUhpc3RvZ3JhbSA9IHVzZUNhbGxiYWNrKGV2ZW50ID0+IHNob3dEYXRlSGlzdG9ncmFtKHBhcnNlSW50KGV2ZW50LnRhcmdldC5kYXRhc2V0LmluZGV4KSkpXG4gIGNvbnN0IHNob3dEYXRlSGlzdG9ncmFtID0gdXNlQ2FsbGJhY2soaW5kZXggPT4ge1xuICAgIGNvbnN0IHNvdXJjZSA9IHJ1bnNbaW5kZXhdXG5cbiAgICBjb25zdCBkYXRlcyA9IE9iamVjdC5rZXlzKHNvdXJjZS5kYXRlcylcbiAgICBsZXQgbWluRGF0ZSA9IG51bGxcbiAgICBsZXQgbWF4RGF0ZSA9IG51bGxcblxuICAgIGNvbnN0IGRhdGEgPSBkYXRlcy5tYXAoZCA9PiB7XG4gICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKGQpXG4gICAgICBpZiAoIW1pbkRhdGUpIHtcbiAgICAgICAgbWluRGF0ZSA9IGRhdGVcbiAgICAgICAgbWF4RGF0ZSA9IGRhdGVcbiAgICAgIH0gZWxzZSBpZiAoZGF0ZSA8IG1pbkRhdGUpIHtcbiAgICAgICAgbWluRGF0ZSA9IGRhdGVcbiAgICAgIH0gZWxzZSBpZiAobWF4RGF0ZSA8IGRhdGUpIHtcbiAgICAgICAgbWF4RGF0ZSA9IGRhdGVcbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRheTogZGF0ZS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKSxcbiAgICAgICAgdmFsdWU6IHNvdXJjZS5kYXRlc1tkXVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCB5ZWFyQ291bnQgPSBtYXhEYXRlLmdldFllYXIoKSAtIG1pbkRhdGUuZ2V0WWVhcigpICsgMVxuICAgIHNldERhdGVEYXRhKHtcbiAgICAgIGluZGV4LFxuICAgICAgZGF0YSxcbiAgICAgIGZyb206IG1pbkRhdGUudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCksXG4gICAgICB0bzogbWF4RGF0ZS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKSxcbiAgICAgIHllYXJDb3VudCxcbiAgICB9KVxuICB9KVxuXG4gIGNvbnN0IGZpbGVIYW5kbGVyID0gKGZpbGUpID0+IHtcbiAgICBpZiAoZGV2TW9kZSAmJiBmaWxlICE9IGRldkZpbGUpIHtcbiAgICAgIHNldERldkZpbGUoZmlsZSlcbiAgICB9XG4gICAgc2V0RmlsZVNpemUoZmlsZS5zaXplKTtcbiAgICBzZXRJc1BlbmRpbmcodHJ1ZSk7XG4gICAgY29uc3Qgc3RhcnRfdGltZSA9IG5ldyBEYXRlKCk7XG5cbiAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgY29uc3QgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpXG4gICAgICBjb25zdCBkb20gPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKGV2ZW50LnRhcmdldC5yZXN1bHQsIFwiYXBwbGljYXRpb24veG1sXCIpXG5cbiAgICAgIGNvbnN0IGRlc2MgPSBkb20uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ0lkZW50aWZpY2F0aW9uRmx1eCcpWzBdXG4gICAgICBjb25zdCBmcmVxdWVuY3kgPSBkZXNjLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdUWVBFRkxVWCcpWzBdLmlubmVySFRNTFxuICAgICAgY29uc3QgdHlwZSA9IGRlc2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ05BVEZMVVgnKVswXS5pbm5lckhUTUxcbiAgICAgIGNvbnN0IGR0ID0gZGVzYy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnRFRDUkVBRkxVWCcpWzBdLmlubmVySFRNTFxuICAgICAgY29uc3QgdGltZSA9IGRlc2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ0hFVUNSRUFGTFVYJylbMF0uaW5uZXJIVE1MXG5cbiAgICAgIGNvbnN0IGl0ZW1zID0gbmV3IEFycmF5KC4uLmRvbS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnSW5mb3NGb3llclJTQScpKVxuXG4gICAgICBzZXRJc1BlbmRpbmcoZmFsc2UpO1xuXG4gICAgICBjb25zdCBkYXRlcyA9IGl0ZW1zXG4gICAgICAgIC5tYXAoaSA9PiBpLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdEVERFTVJTQScpWzBdLmlubmVySFRNTClcbiAgICAgICAgLnJlZHVjZSgoYWNjdW0sIHZhbHVlKSA9PiB7XG4gICAgICAgICAgYWNjdW1bdmFsdWVdID0gKGFjY3VtW3ZhbHVlXSB8fCAwICkgKyAxXG4gICAgICAgICAgcmV0dXJuIGFjY3VtXG4gICAgICAgIH0sIHt9KVxuXG4gICAgICBkaXNwYXRjaFJ1bnMoe1xuICAgICAgICB0eXBlOiAnYXBwZW5kJyxcbiAgICAgICAgaXRlbToge1xuICAgICAgICAgIHNlZWQ6IE1hdGgucmFuZG9tKCksXG4gICAgICAgICAgdGltZXN0YW1wOiAobmV3IERhdGUoKSkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxOSksXG4gICAgICAgICAgZHVyYXRpb246IChuZXcgRGF0ZSgpKSAtIHN0YXJ0X3RpbWUsXG4gICAgICAgICAgZmlsZW5hbWU6IGZpbGUubmFtZSxcbiAgICAgICAgICBmaWxlRGF0ZXRpbWU6IGAke2R0fS0ke3RpbWV9YCxcbiAgICAgICAgICBmcmVxdWVuY3ksXG4gICAgICAgICAgdHlwZSxcbiAgICAgICAgICAvLyBXSVA6IE9LIHN1ciBGaXJlZm94IEtPIHN1ciBDaHJvbWVcbiAgICAgICAgICBlcnJvcjogZG9tLmFjdGl2ZUVsZW1lbnQgJiYgZG9tLmFjdGl2ZUVsZW1lbnQubm9kZU5hbWUgPT0gXCJwYXJzZXJlcnJvclwiLFxuICAgICAgICAgIHRvdGFsOiBpdGVtcy5sZW5ndGgsXG4gICAgICAgICAgZmlsZVNpemU6IGZpbGUuc2l6ZSxcbiAgICAgICAgICBkYXRlcyxcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgcmVhZGVyLnJlYWRBc1RleHQoZmlsZSlcbiAgfVxuXG4gIGNvbnN0IHJvdW5kID0gKHZhbHVlKSA9PiBNYXRoLnJvdW5kKHZhbHVlKVxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxBZG1pbiBjYXRlZ29yeT1cIkLDqW7DqWZpY2lhaXJlXCIgb25SdW5SZWZyZXNoPXtoYW5kbGVOZXdSdW5zfS8+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cbiAgICAgICAgICBMZWN0ZXVyIGRlIGZpY2hpZXI8YnIvPsKrIELDqW7DqWZpY2lhaXJlIMK7IGRlIGxhIENOQUZcbiAgICAgICAgPC9oMT5cblxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgICAgR2xpc3NleiBldCBkw6lwb3NleiBsZSBmaWNoaWVyIENOQUYgw6AgYW5hbHlzZXIgb3Ugc8OpbGVjdGlvbm5leiBsZS48YnIvPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG9uQ2hhbmdlPXtzZWxlY3RIYW5kbGVyfSBtdWx0aXBsZS8+XG4gICAgICAgIDwvcD5cblxuICAgICAgICB7aXNQZW5kaW5nICYmIDxQZW5kaW5nTWVzc2FnZSBmaWxlU2l6ZT17ZmlsZVNpemV9Lz59XG5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgIExlcyBvcMOpcmF0aW9ucyBzb250IHRvdXRlcyByw6lhbGlzw6llcyBzdXIgdm90cmUgb3JkaW5hdGV1ci48YnIvPlxuICAgICAgICAgIEF1Y3VuZSBkb25uw6llIHBlcnNvbm5lbGxlIG4nZXN0IHRyYW5zZsOpcsOpZS5cbiAgICAgICAgPC9wPlxuXG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICA8YSBocmVmPVwiI3BvdXJxdW9pXCI+UG91cnF1b2kgdW4gdGVsIGxlY3RldXImbmJzcDs/PC9hPlxuICAgICAgICA8L3A+XG5cbiAgICAgICAgeyBydW5zICYmIHJ1bnMubGVuZ3RoID4gMCAmJiAoPD5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuc3VidGl0bGV9PlxuICAgICAgICAgICAgSGlzdG9yaXF1ZVxuICAgICAgICAgIDwvaDI+XG5cbiAgICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5EYXRlPC90aD5cbiAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5GaWNoaWVyPC90aD5cbiAgICAgICAgICAgICAgICB7IGRldk1vZGUgJiYgPHRoIHJvd1NwYW49XCIyXCI+VGFpbGxlPC90aD59XG4gICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+RGF0ZSBkdSBmaWNoaWVyPC90aD5cbiAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5GcsOpcXVlbmNlPC90aD5cbiAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5OYXR1cmU8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPkRvc3NpZXJzPC90aD5cbiAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5Ew6l0YWlsczwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+RXJyZXVyPC90aD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAge3J1bnMubWFwKChyLCBpKSA9PiAoPHRyIGtleT17YCR7ci50aW1lc3RhbXB9LSR7ci5maWxlbmFtZX0tJHtyLnNlZWR9YCB9IHN0eWxlPXsgaSA9PSBkYXRlRGF0YS5pbmRleCA/IHtiYWNrZ3JvdW5kQ29sb3I6ICdsaWdodGdyZXknfToge30gfT5cbiAgICAgICAgICAgICAgICA8dGQ+e3IudGltZXN0YW1wfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPntyLmZpbGVuYW1lfTwvdGQ+XG4gICAgICAgICAgICAgICAgeyBkZXZNb2RlICYmIDx0ZD57ci5maWxlU2l6ZX08L3RkPn1cbiAgICAgICAgICAgICAgICA8dGQ+e3IuZmlsZURhdGV0aW1lfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPntgJHtyLmZyZXF1ZW5jeX0gKCR7ZnJlcXVlbmN5TmFtZXNbci5mcmVxdWVuY3ldIHx8ICc/J30pYH08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57YCR7ci50eXBlfSAoJHt0eXBlTmFtZXNbci50eXBlXSB8fCAnPyd9KWB9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMubnVtZXJpY30+e3IudG90YWx9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwic2hyaW5rXCI+PGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVEYXRlSGlzdG9ncmFtfSBkYXRhLWluZGV4PXtpfT5BZmZpY2hlciBwYXIgZGF0ZTwvYnV0dG9uPjwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPntyLmVycm9yID8gJ091aScgOiAnTm9uJ308L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgIDwvdGFibGU+XG5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoUnVucyh7dHlwZTogJ3Jlc2V0J30pfT5WaWRlciBsJ2hpc3RvcmlxdWU8L2J1dHRvbj5cbiAgICAgICAgPC8+KX1cblxuICAgICAgICB7cnVucy5sZW5ndGggIT0gMCAmJiAoPHAgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+XG4gICAgICAgIFZvdXMgcG91dmV6IGFjY8OpZGVyIMOgIHVuZSByZXByw6lzZW50YXRpb24gZ3JhcGhpcXVlIGRlIGxhIHLDqXBhcnRpdGlvbiBkYW5zIGxlcyB0ZW1wcyBkZXMgZGVtYW5kZXMgY29ubnVlcyBkYW5zIGxlcyBmaWNoaWVycyBhbmFseXPDqXMuIFBvdXIgY2VsYSBpbCBmYXV0IGNsaXF1ZXIgc3VyIGxlIGJvdXRvbiDCqyBBZmZpY2hlciBwYXIgZGF0ZSDCuy5cbiAgICAgICAgICA8L3A+KX1cblxuICAgICAgICB7ZGF0ZURhdGEuaW5kZXggIT0gdW5kZWZpbmVkICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnN1YnRpdGxlfT5cbiAgICAgICAgICAgICAgTm9tYnJlIGRlIGRvc3NpZXJzIGFzc29jacOpcyDDoCBkZXMgZGVtYW5kZXMgcsOpYWxpc8OpcyDDoCBjaGFxdWUgZGF0ZVxuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6ICgyNTAqZGF0ZURhdGEueWVhckNvdW50KSArIFwicHhcIiwgd2lkdGg6IFwiMTAwJVwifX0+XG4gICAgICAgICAgICAgIHtSZXNwb25zaXZlQ2FsZW5kYXIoZGF0ZURhdGEpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgIFVuIHByb2Jsw6htZSwgdW5lIHF1ZXN0aW9uID8gQ29udGFjdGV6LW5vdXMgw6AgPE1haWxlciBzdWJqZWN0PVwiRmx1eCBiw6luw6lmaWNpYWlyZSBDTkFGXCI+ZGF0YS5pbnNlcnRpb25AYmV0YS5nb3V2LmZyPC9NYWlsZXI+XG4gICAgICAgIDwvcD5cblxuICAgICAgICA8aDIgaWQ9XCJwb3VycXVvaVwiIGNsYXNzTmFtZT17c3R5bGVzLnN1YnRpdGxlfT5cbiAgICAgICAgICBQb3VycXVvaSB1biBsZWN0ZXVyIGRlIGZpY2hpZXIgQ05BRiZuYnNwOz9cbiAgICAgICAgPC9oMj5cblxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5cbiAgICAgICAgICBUb3VzIGxlcyBkw6lwYXJ0ZW1lbnRzIG4nb250IHBhcyBsZXMgb3V0aWxzIHBvdXIgYW5hbHlzZXIgbGVzIGZpY2hpZXJzIGVudm95w6lzIHBhciBsYSBDTkFGLiBDZWxhIHBldXQgcmFsZW50aXIgZXQgY29tcGxpcXVlciBub3Mgw6ljaGFuZ2VzLlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRleHR9PlxuICAgICAgICAgIEF2ZWMgY2V0IG91dGlsLCBub3VzIHNvdWhhaXRvbnMgcGVybWV0dHJlIGF1eCBwZXJzb25uZXMgcXVpIG9udCBhY2PDqHMgw6AgY2VzIGZpY2hpZXJzIGQnZW4gZXh0cmFpcmUgZGVzIHN0YXRpc3RpcXVlcyBnw6luw6lyYWxlcyBzYW5zIGF2b2lyIMOgIG1ldHRyZSBsZXMgbWFpbnMgZGFucyBsZSBjYW1ib3VpIGVsbGVzLW3Dqm1lLlxuICAgICAgICA8L3A+XG5cbiAgICAgIDwvbWFpbj5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==