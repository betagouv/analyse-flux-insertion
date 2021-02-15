webpackHotUpdate_N_E("pages/cnaf/instruction",{

/***/ "./pages/cnaf/instruction/index.js":
/*!*****************************************!*\
  !*** ./pages/cnaf/instruction/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_construct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/construct */ \"./node_modules/@babel/runtime/helpers/esm/construct.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _socialgouv_matomo_next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @socialgouv/matomo-next */ \"./node_modules/@socialgouv/matomo-next/lib/index.js\");\n/* harmony import */ var _socialgouv_matomo_next__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_socialgouv_matomo_next__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/layout */ \"./components/layout.js\");\n/* harmony import */ var _components_mailer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/mailer */ \"./components/mailer.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\nvar _jsxFileName = \"/home/thomas/repos/analyse-flux-insertion/pages/cnaf/instruction/index.js\",\n    _s2 = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction init() {\n  return [];\n}\n\nfunction reducer(state, action) {\n  switch (action.type) {\n    case 'append':\n      Object(_socialgouv_matomo_next__WEBPACK_IMPORTED_MODULE_5__[\"push\"])(['trackEvent', 'Test - CNAF - Instruction', JSON.stringify(action.item)]);\n      return [action.item].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(state));\n\n    case 'reset':\n      return init();\n\n    default:\n      throw new Error();\n  }\n}\n\nfunction Home() {\n  _s2();\n\n  var _s = $RefreshSig$(),\n      _this = this;\n\n  var defaultColor = 'white';\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(defaultColor),\n      color = _useState[0],\n      setColor = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(null),\n      file = _useState2[0],\n      setFile = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])('?'),\n      total = _useState3[0],\n      setTotal = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])('?'),\n      countWithEmail = _useState4[0],\n      setCountWithEmail = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])('?'),\n      countWithUsableEmail = _useState5[0],\n      setCountWithUsableEmail = _useState5[1];\n\n  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useReducer\"])(reducer, [], init),\n      runs = _useReducer[0],\n      dispatchRuns = _useReducer[1];\n\n  var dragHandler = function dragHandler(color) {\n    _s();\n\n    return Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useCallback\"])(function (event) {\n      setColor(color);\n      event.preventDefault(); // Prevent file from being open on drop\n    });\n  };\n\n  _s(dragHandler, \"epj4qY15NHsef74wNqHIp5fdZmg=\");\n\n  var fileHandler = function fileHandler(file) {\n    var reader = new FileReader();\n\n    reader.onload = function (event) {\n      var parser = new DOMParser();\n      var dom = parser.parseFromString(event.target.result, \"application/xml\");\n\n      var items = Object(_babel_runtime_helpers_esm_construct__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Array, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(dom.getElementsByTagName('InfoDemandeRSA')));\n\n      var withEmail = items.filter(function (i) {\n        return i.getElementsByTagName('ADRELEC').length;\n      });\n      var withUsableEmail = items.filter(function (i) {\n        var ok = i.getElementsByTagName('AUTORUTIADRELEC')[0];\n        return i.getElementsByTagName('ADRELEC').length && ok && ok.innerHTML == \"A\";\n      });\n      dispatchRuns({\n        type: 'append',\n        item: {\n          timetamp: new Date().toISOString().slice(0, 19),\n          filename: file.name,\n          error: dom.activeElement.nodeName == \"parsererror\",\n          total: items.length,\n          withEmail: withEmail.length,\n          withAutorisation: withUsableEmail.length\n        }\n      });\n    };\n\n    reader.readAsText(file);\n  };\n\n  var dropHandler = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useCallback\"])(function (event) {\n    event.preventDefault();\n    setColor(defaultColor);\n\n    for (var i = 0; i < event.dataTransfer.files.length; i++) {\n      fileHandler(event.dataTransfer.files[i]);\n    }\n  });\n  var selectHandler = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useCallback\"])(function (event) {\n    for (var i = 0; i < event.target.files.length; i++) {\n      fileHandler(event.target.files[i]);\n    }\n\n    event.target.value = '';\n  });\n\n  var round = function round(value) {\n    return Math.round(value);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_layout__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.container,\n    style: {\n      backgroundColor: color\n    },\n    onDragOver: dragHandler('#0070f3'),\n    onDragLeave: dragHandler(defaultColor),\n    onDrop: dropHandler,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.main,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.title,\n        children: \"Lecteur de fichier CNAF\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.description,\n        children: [\"Glissez et d\\xE9posez le fichier CNAF \\xE0 analyser ou s\\xE9lectionnez le.\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 93,\n          columnNumber: 76\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          type: \"file\",\n          onChange: selectHandler,\n          multiple: true\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 94,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.description,\n        children: [\"Les op\\xE9rations sont toutes r\\xE9alis\\xE9es sur votre ordinateur.\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 98,\n          columnNumber: 69\n        }, this), \"Aucune donn\\xE9e personnelle n'est transf\\xE9r\\xE9e.\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.description,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          href: \"#pourquoi\",\n          children: \"Pourquoi un tel lecteur\\xA0?\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 103,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 102,\n        columnNumber: 9\n      }, this), runs && runs.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.subtitle,\n          children: \"Historique\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 107,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"table\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tbody\", {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tr\", {\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"th\", {\n                children: \"Date\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 114,\n                columnNumber: 17\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"th\", {\n                children: \"Fichier\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 115,\n                columnNumber: 17\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"th\", {\n                children: \"Dossiers\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 116,\n                columnNumber: 17\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"th\", {\n                children: \"avec email\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 117,\n                columnNumber: 17\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"th\", {\n                children: \"et autorisation\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 118,\n                columnNumber: 17\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"th\", {\n                children: \"Erreur\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 119,\n                columnNumber: 17\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 113,\n              columnNumber: 15\n            }, this), runs.map(function (r) {\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tr\", {\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n                  children: r.timetamp\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 122,\n                  columnNumber: 17\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n                  children: r.filename\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 123,\n                  columnNumber: 17\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n                  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.numeric,\n                  children: r.total\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 124,\n                  columnNumber: 17\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n                  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.numeric,\n                  children: [r.withEmail, \" (\", round(r.withEmail / r.total * 100), \"%)\"]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 125,\n                  columnNumber: 17\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n                  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.numeric,\n                  children: [r.withAutorisation, \" (\", round(r.withAutorisation / r.total * 100), \"%)\"]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 126,\n                  columnNumber: 17\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n                  children: r.error ? 'Oui' : 'Non'\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 127,\n                  columnNumber: 17\n                }, _this)]\n              }, \"\".concat(r.timetamp, \"-\").concat(r.filename), true, {\n                fileName: _jsxFileName,\n                lineNumber: 121,\n                columnNumber: 31\n              }, _this);\n            })]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 112,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 111,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          onClick: function onClick() {\n            return dispatchRuns({\n              type: 'reset'\n            });\n          },\n          children: \"Vider l'historique\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 133,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.description,\n        children: [\"Un probl\\xE8me, une question ? Contactez-nous \\xE0 \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_mailer__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n          subject: \"Flux instruction CNAF\",\n          children: \"data.insertion@beta.gouv.fr\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 137,\n          columnNumber: 56\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 136,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n        id: \"pourquoi\",\n        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.subtitle,\n        children: \"Pourquoi un lecteur de fichier CNAF\\xA0?\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 140,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.text,\n        children: \"Tous les d\\xE9partements n'ont pas les outils pour analyser les fichiers envoy\\xE9s par la CNAF. Cela peut ralentir et compliquer nos \\xE9changes.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 144,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.text,\n        children: \"Avec cet outil, nous souhaitons permettre aux personnes qui ont acc\\xE8s \\xE0 ces fichiers d'en extraire des statistiques g\\xE9n\\xE9rales sans avoir \\xE0 mettre les mains dans le camboui elles-m\\xEAme.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 147,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.text,\n        children: \"Aujourd'hui, nous cherchons \\xE0 comprendre pourquoi pour la CNAF 90% des dossiers pr\\xE9sents dans les fichiers quotidiens d'instructions contiennent des emails alors que ce taux est de 30% \\xE0 50% pour certains d\\xE9partements.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 150,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 85,\n    columnNumber: 5\n  }, this);\n}\n\n_s2(Home, \"ylyajD2R2ArWJQuTTzuGu8z8/dA=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY25hZi9pbnN0cnVjdGlvbi9pbmRleC5qcz8zZDRhIl0sIm5hbWVzIjpbImluaXQiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicHVzaCIsIkpTT04iLCJzdHJpbmdpZnkiLCJpdGVtIiwiRXJyb3IiLCJIb21lIiwiZGVmYXVsdENvbG9yIiwidXNlU3RhdGUiLCJjb2xvciIsInNldENvbG9yIiwiZmlsZSIsInNldEZpbGUiLCJ0b3RhbCIsInNldFRvdGFsIiwiY291bnRXaXRoRW1haWwiLCJzZXRDb3VudFdpdGhFbWFpbCIsImNvdW50V2l0aFVzYWJsZUVtYWlsIiwic2V0Q291bnRXaXRoVXNhYmxlRW1haWwiLCJ1c2VSZWR1Y2VyIiwicnVucyIsImRpc3BhdGNoUnVucyIsImRyYWdIYW5kbGVyIiwidXNlQ2FsbGJhY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZmlsZUhhbmRsZXIiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwicGFyc2VyIiwiRE9NUGFyc2VyIiwiZG9tIiwicGFyc2VGcm9tU3RyaW5nIiwidGFyZ2V0IiwicmVzdWx0IiwiaXRlbXMiLCJBcnJheSIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwid2l0aEVtYWlsIiwiZmlsdGVyIiwiaSIsImxlbmd0aCIsIndpdGhVc2FibGVFbWFpbCIsIm9rIiwiaW5uZXJIVE1MIiwidGltZXRhbXAiLCJEYXRlIiwidG9JU09TdHJpbmciLCJzbGljZSIsImZpbGVuYW1lIiwibmFtZSIsImVycm9yIiwiYWN0aXZlRWxlbWVudCIsIm5vZGVOYW1lIiwid2l0aEF1dG9yaXNhdGlvbiIsInJlYWRBc1RleHQiLCJkcm9wSGFuZGxlciIsImRhdGFUcmFuc2ZlciIsImZpbGVzIiwic2VsZWN0SGFuZGxlciIsInZhbHVlIiwicm91bmQiLCJNYXRoIiwic3R5bGVzIiwiY29udGFpbmVyIiwiYmFja2dyb3VuZENvbG9yIiwibWFpbiIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzdWJ0aXRsZSIsIm1hcCIsInIiLCJudW1lcmljIiwidGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLFNBQVNBLElBQVQsR0FBZ0I7QUFDZCxTQUFPLEVBQVA7QUFDRDs7QUFFRCxTQUFTQyxPQUFULENBQWlCQyxLQUFqQixFQUF3QkMsTUFBeEIsRUFBZ0M7QUFDOUIsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0UsU0FBSyxRQUFMO0FBQ0VDLDBFQUFJLENBQUMsQ0FBQyxZQUFELEVBQWUsMkJBQWYsRUFBNENDLElBQUksQ0FBQ0MsU0FBTCxDQUFlSixNQUFNLENBQUNLLElBQXRCLENBQTVDLENBQUQsQ0FBSjtBQUNBLGNBQVFMLE1BQU0sQ0FBQ0ssSUFBZixzR0FBd0JOLEtBQXhCOztBQUNGLFNBQUssT0FBTDtBQUNFLGFBQU9GLElBQUksRUFBWDs7QUFDRjtBQUNFLFlBQU0sSUFBSVMsS0FBSixFQUFOO0FBUEo7QUFTRDs7QUFFYyxTQUFTQyxJQUFULEdBQWdCO0FBQUE7O0FBQUE7QUFBQTs7QUFDN0IsTUFBTUMsWUFBWSxHQUFHLE9BQXJCOztBQUQ2QixrQkFFSEMsc0RBQVEsQ0FBQ0QsWUFBRCxDQUZMO0FBQUEsTUFFdEJFLEtBRnNCO0FBQUEsTUFFZkMsUUFGZTs7QUFBQSxtQkFHTEYsc0RBQVEsQ0FBQyxJQUFELENBSEg7QUFBQSxNQUd0QkcsSUFIc0I7QUFBQSxNQUdoQkMsT0FIZ0I7O0FBQUEsbUJBSUhKLHNEQUFRLENBQUMsR0FBRCxDQUpMO0FBQUEsTUFJdEJLLEtBSnNCO0FBQUEsTUFJZkMsUUFKZTs7QUFBQSxtQkFLZU4sc0RBQVEsQ0FBQyxHQUFELENBTHZCO0FBQUEsTUFLdEJPLGNBTHNCO0FBQUEsTUFLTkMsaUJBTE07O0FBQUEsbUJBTTJCUixzREFBUSxDQUFDLEdBQUQsQ0FObkM7QUFBQSxNQU10QlMsb0JBTnNCO0FBQUEsTUFNQUMsdUJBTkE7O0FBQUEsb0JBUUFDLHdEQUFVLENBQUN0QixPQUFELEVBQVUsRUFBVixFQUFjRCxJQUFkLENBUlY7QUFBQSxNQVF0QndCLElBUnNCO0FBQUEsTUFRaEJDLFlBUmdCOztBQVU3QixNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFBYixLQUFLO0FBQUE7O0FBQUEsV0FBSWMseURBQVcsQ0FBQyxVQUFDQyxLQUFELEVBQVc7QUFDbERkLGNBQVEsQ0FBQ0QsS0FBRCxDQUFSO0FBQ0FlLFdBQUssQ0FBQ0MsY0FBTixHQUZrRCxDQUUzQjtBQUN4QixLQUh1QyxDQUFmO0FBQUEsR0FBekI7O0FBVjZCLEtBVXZCSCxXQVZ1Qjs7QUFlN0IsTUFBTUksV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ2YsSUFBRCxFQUFVO0FBQzVCLFFBQUlnQixNQUFNLEdBQUcsSUFBSUMsVUFBSixFQUFiOztBQUNBRCxVQUFNLENBQUNFLE1BQVAsR0FBZ0IsVUFBU0wsS0FBVCxFQUFnQjtBQUM5QixVQUFNTSxNQUFNLEdBQUcsSUFBSUMsU0FBSixFQUFmO0FBQ0EsVUFBTUMsR0FBRyxHQUFHRixNQUFNLENBQUNHLGVBQVAsQ0FBdUJULEtBQUssQ0FBQ1UsTUFBTixDQUFhQyxNQUFwQyxFQUE0QyxpQkFBNUMsQ0FBWjs7QUFFQSxVQUFNQyxLQUFLLEdBQUcscUZBQUlDLEtBQVAsK0ZBQWdCTCxHQUFHLENBQUNNLG9CQUFKLENBQXlCLGdCQUF6QixDQUFoQixFQUFYOztBQUNBLFVBQU1DLFNBQVMsR0FBR0gsS0FBSyxDQUFDSSxNQUFOLENBQWEsVUFBQUMsQ0FBQztBQUFBLGVBQUlBLENBQUMsQ0FBQ0gsb0JBQUYsQ0FBdUIsU0FBdkIsRUFBa0NJLE1BQXRDO0FBQUEsT0FBZCxDQUFsQjtBQUNBLFVBQU1DLGVBQWUsR0FBR1AsS0FBSyxDQUFDSSxNQUFOLENBQWEsVUFBQUMsQ0FBQyxFQUFJO0FBQ3hDLFlBQU1HLEVBQUUsR0FBR0gsQ0FBQyxDQUFDSCxvQkFBRixDQUF1QixpQkFBdkIsRUFBMEMsQ0FBMUMsQ0FBWDtBQUNBLGVBQU9HLENBQUMsQ0FBQ0gsb0JBQUYsQ0FBdUIsU0FBdkIsRUFBa0NJLE1BQWxDLElBQTRDRSxFQUE1QyxJQUFrREEsRUFBRSxDQUFDQyxTQUFILElBQWdCLEdBQXpFO0FBQ0QsT0FIdUIsQ0FBeEI7QUFLQXhCLGtCQUFZLENBQUM7QUFDWHJCLFlBQUksRUFBRSxRQURLO0FBRVhJLFlBQUksRUFBRTtBQUNKMEMsa0JBQVEsRUFBRyxJQUFJQyxJQUFKLEVBQUQsQ0FBYUMsV0FBYixHQUEyQkMsS0FBM0IsQ0FBaUMsQ0FBakMsRUFBbUMsRUFBbkMsQ0FETjtBQUVKQyxrQkFBUSxFQUFFdkMsSUFBSSxDQUFDd0MsSUFGWDtBQUdKQyxlQUFLLEVBQUVwQixHQUFHLENBQUNxQixhQUFKLENBQWtCQyxRQUFsQixJQUE4QixhQUhqQztBQUlKekMsZUFBSyxFQUFFdUIsS0FBSyxDQUFDTSxNQUpUO0FBS0pILG1CQUFTLEVBQUVBLFNBQVMsQ0FBQ0csTUFMakI7QUFNSmEsMEJBQWdCLEVBQUVaLGVBQWUsQ0FBQ0Q7QUFOOUI7QUFGSyxPQUFELENBQVo7QUFXRCxLQXRCRDs7QUF1QkFmLFVBQU0sQ0FBQzZCLFVBQVAsQ0FBa0I3QyxJQUFsQjtBQUNELEdBMUJEOztBQTRCQSxNQUFNOEMsV0FBVyxHQUFHbEMseURBQVcsQ0FBQyxVQUFDQyxLQUFELEVBQVc7QUFDekNBLFNBQUssQ0FBQ0MsY0FBTjtBQUNBZixZQUFRLENBQUNILFlBQUQsQ0FBUjs7QUFDQSxTQUFLLElBQUlrQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFDakIsS0FBSyxDQUFDa0MsWUFBTixDQUFtQkMsS0FBbkIsQ0FBeUJqQixNQUEzQyxFQUFtREQsQ0FBQyxFQUFwRCxFQUF3RDtBQUN0RGYsaUJBQVcsQ0FBQ0YsS0FBSyxDQUFDa0MsWUFBTixDQUFtQkMsS0FBbkIsQ0FBeUJsQixDQUF6QixDQUFELENBQVg7QUFDRDtBQUNGLEdBTjhCLENBQS9CO0FBUUEsTUFBTW1CLGFBQWEsR0FBR3JDLHlEQUFXLENBQUMsVUFBQ0MsS0FBRCxFQUFXO0FBQzNDLFNBQUssSUFBSWlCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUNqQixLQUFLLENBQUNVLE1BQU4sQ0FBYXlCLEtBQWIsQ0FBbUJqQixNQUFyQyxFQUE2Q0QsQ0FBQyxFQUE5QyxFQUFrRDtBQUNoRGYsaUJBQVcsQ0FBQ0YsS0FBSyxDQUFDVSxNQUFOLENBQWF5QixLQUFiLENBQW1CbEIsQ0FBbkIsQ0FBRCxDQUFYO0FBQ0Q7O0FBQ0RqQixTQUFLLENBQUNVLE1BQU4sQ0FBYTJCLEtBQWIsR0FBcUIsRUFBckI7QUFDRCxHQUxnQyxDQUFqQzs7QUFPQSxNQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDRCxLQUFEO0FBQUEsV0FBV0UsSUFBSSxDQUFDRCxLQUFMLENBQVdELEtBQVgsQ0FBWDtBQUFBLEdBQWQ7O0FBQ0Esc0JBQ0UscUVBQUMsMERBQUQ7QUFBUSxhQUFTLEVBQUVHLDhEQUFNLENBQUNDLFNBQTFCO0FBQXFDLFNBQUssRUFBRTtBQUFDQyxxQkFBZSxFQUFDekQ7QUFBakIsS0FBNUM7QUFBcUUsY0FBVSxFQUFFYSxXQUFXLENBQUMsU0FBRCxDQUE1RjtBQUF5RyxlQUFXLEVBQUVBLFdBQVcsQ0FBQ2YsWUFBRCxDQUFqSTtBQUFpSixVQUFNLEVBQUVrRCxXQUF6SjtBQUFBLDJCQUVFO0FBQU0sZUFBUyxFQUFFTyw4REFBTSxDQUFDRyxJQUF4QjtBQUFBLDhCQUNFO0FBQUksaUJBQVMsRUFBRUgsOERBQU0sQ0FBQ0ksS0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUtFO0FBQUcsaUJBQVMsRUFBRUosOERBQU0sQ0FBQ0ssV0FBckI7QUFBQSw4R0FDbUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEbkUsZUFFRTtBQUFPLGNBQUksRUFBQyxNQUFaO0FBQW1CLGtCQUFRLEVBQUVULGFBQTdCO0FBQTRDLGtCQUFRO0FBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEYsZUFVRTtBQUFHLGlCQUFTLEVBQUVJLDhEQUFNLENBQUNLLFdBQXJCO0FBQUEsdUdBQzREO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRDVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVZGLGVBZUU7QUFBRyxpQkFBUyxFQUFFTCw4REFBTSxDQUFDSyxXQUFyQjtBQUFBLCtCQUNFO0FBQUcsY0FBSSxFQUFDLFdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBZkYsRUFtQklqRCxJQUFJLElBQUlBLElBQUksQ0FBQ3NCLE1BQUwsR0FBYyxDQUF0QixpQkFBNEI7QUFBQSxnQ0FDNUI7QUFBSSxtQkFBUyxFQUFFc0IsOERBQU0sQ0FBQ00sUUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRDRCLGVBSzVCO0FBQUEsaUNBQ0U7QUFBQSxvQ0FDRTtBQUFBLHNDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRkYsZUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFIRixlQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUpGLGVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBTEYsZUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsRUFTR2xELElBQUksQ0FBQ21ELEdBQUwsQ0FBUyxVQUFBQyxDQUFDO0FBQUEsa0NBQUs7QUFBQSx3Q0FDZDtBQUFBLDRCQUFLQSxDQUFDLENBQUMxQjtBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRGMsZUFFZDtBQUFBLDRCQUFLMEIsQ0FBQyxDQUFDdEI7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZjLGVBR2Q7QUFBSSwyQkFBUyxFQUFFYyw4REFBTSxDQUFDUyxPQUF0QjtBQUFBLDRCQUFnQ0QsQ0FBQyxDQUFDM0Q7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFIYyxlQUlkO0FBQUksMkJBQVMsRUFBRW1ELDhEQUFNLENBQUNTLE9BQXRCO0FBQUEsNkJBQWdDRCxDQUFDLENBQUNqQyxTQUFsQyxRQUErQ3VCLEtBQUssQ0FBQ1UsQ0FBQyxDQUFDakMsU0FBRixHQUFZaUMsQ0FBQyxDQUFDM0QsS0FBZCxHQUFvQixHQUFyQixDQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBSmMsZUFLZDtBQUFJLDJCQUFTLEVBQUVtRCw4REFBTSxDQUFDUyxPQUF0QjtBQUFBLDZCQUFnQ0QsQ0FBQyxDQUFDakIsZ0JBQWxDLFFBQXNETyxLQUFLLENBQUNVLENBQUMsQ0FBQ2pCLGdCQUFGLEdBQW1CaUIsQ0FBQyxDQUFDM0QsS0FBckIsR0FBMkIsR0FBNUIsQ0FBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUxjLGVBTWQ7QUFBQSw0QkFBSzJELENBQUMsQ0FBQ3BCLEtBQUYsR0FBVSxLQUFWLEdBQWtCO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBTmM7QUFBQSwyQkFBWW9CLENBQUMsQ0FBQzFCLFFBQWQsY0FBMEIwQixDQUFDLENBQUN0QixRQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUFMO0FBQUEsYUFBVixDQVRIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTDRCLGVBMkI1QjtBQUFRLGlCQUFPLEVBQUU7QUFBQSxtQkFBTTdCLFlBQVksQ0FBQztBQUFDckIsa0JBQUksRUFBRTtBQUFQLGFBQUQsQ0FBbEI7QUFBQSxXQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkEzQjRCO0FBQUEsc0JBbkJoQyxlQWlERTtBQUFHLGlCQUFTLEVBQUVnRSw4REFBTSxDQUFDSyxXQUFyQjtBQUFBLHVGQUMrQyxxRUFBQywwREFBRDtBQUFRLGlCQUFPLEVBQUMsdUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUQvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FqREYsZUFxREU7QUFBSSxVQUFFLEVBQUMsVUFBUDtBQUFrQixpQkFBUyxFQUFFTCw4REFBTSxDQUFDTSxRQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXJERixlQXlERTtBQUFHLGlCQUFTLEVBQUVOLDhEQUFNLENBQUNVLElBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBekRGLGVBNERFO0FBQUcsaUJBQVMsRUFBRVYsOERBQU0sQ0FBQ1UsSUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E1REYsZUErREU7QUFBRyxpQkFBUyxFQUFFViw4REFBTSxDQUFDVSxJQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQS9ERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF5RUQ7O0lBcEl1QnBFLEk7O0tBQUFBLEkiLCJmaWxlIjoiLi9wYWdlcy9jbmFmL2luc3RydWN0aW9uL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVkdWNlcn0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyBwdXNoIH0gZnJvbSBcIkBzb2NpYWxnb3V2L21hdG9tby1uZXh0XCJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9sYXlvdXQnXG5pbXBvcnQgTWFpbGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvbWFpbGVyJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi8uLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuXG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gIHJldHVybiBbXVxufVxuXG5mdW5jdGlvbiByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ2FwcGVuZCc6XG4gICAgICBwdXNoKFsndHJhY2tFdmVudCcsICdUZXN0IC0gQ05BRiAtIEluc3RydWN0aW9uJywgSlNPTi5zdHJpbmdpZnkoYWN0aW9uLml0ZW0pXSlcbiAgICAgIHJldHVybiBbYWN0aW9uLml0ZW0sIC4uLnN0YXRlXVxuICAgIGNhc2UgJ3Jlc2V0JzpcbiAgICAgIHJldHVybiBpbml0KClcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBkZWZhdWx0Q29sb3IgPSAnd2hpdGUnXG4gIGNvbnN0IFtjb2xvciwgc2V0Q29sb3JdID0gdXNlU3RhdGUoZGVmYXVsdENvbG9yKVxuICBjb25zdCBbZmlsZSwgc2V0RmlsZV0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbdG90YWwsIHNldFRvdGFsXSA9IHVzZVN0YXRlKCc/JylcbiAgY29uc3QgW2NvdW50V2l0aEVtYWlsLCBzZXRDb3VudFdpdGhFbWFpbF0gPSB1c2VTdGF0ZSgnPycpXG4gIGNvbnN0IFtjb3VudFdpdGhVc2FibGVFbWFpbCwgc2V0Q291bnRXaXRoVXNhYmxlRW1haWxdID0gdXNlU3RhdGUoJz8nKVxuXG4gIGNvbnN0IFtydW5zLCBkaXNwYXRjaFJ1bnNdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBbXSwgaW5pdClcblxuICBjb25zdCBkcmFnSGFuZGxlciA9IGNvbG9yID0+IHVzZUNhbGxiYWNrKChldmVudCkgPT4ge1xuICAgIHNldENvbG9yKGNvbG9yKVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCkgLy8gUHJldmVudCBmaWxlIGZyb20gYmVpbmcgb3BlbiBvbiBkcm9wXG4gIH0pXG5cbiAgY29uc3QgZmlsZUhhbmRsZXIgPSAoZmlsZSkgPT4ge1xuICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXG4gICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBjb25zdCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKClcbiAgICAgIGNvbnN0IGRvbSA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoZXZlbnQudGFyZ2V0LnJlc3VsdCwgXCJhcHBsaWNhdGlvbi94bWxcIilcblxuICAgICAgY29uc3QgaXRlbXMgPSBuZXcgQXJyYXkoLi4uZG9tLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdJbmZvRGVtYW5kZVJTQScpKVxuICAgICAgY29uc3Qgd2l0aEVtYWlsID0gaXRlbXMuZmlsdGVyKGkgPT4gaS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnQURSRUxFQycpLmxlbmd0aClcbiAgICAgIGNvbnN0IHdpdGhVc2FibGVFbWFpbCA9IGl0ZW1zLmZpbHRlcihpID0+IHtcbiAgICAgICAgY29uc3Qgb2sgPSBpLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdBVVRPUlVUSUFEUkVMRUMnKVswXVxuICAgICAgICByZXR1cm4gaS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnQURSRUxFQycpLmxlbmd0aCAmJiBvayAmJiBvay5pbm5lckhUTUwgPT0gXCJBXCJcbiAgICAgIH0pXG5cbiAgICAgIGRpc3BhdGNoUnVucyh7XG4gICAgICAgIHR5cGU6ICdhcHBlbmQnLFxuICAgICAgICBpdGVtOiB7XG4gICAgICAgICAgdGltZXRhbXA6IChuZXcgRGF0ZSgpKS50b0lTT1N0cmluZygpLnNsaWNlKDAsMTkpLFxuICAgICAgICAgIGZpbGVuYW1lOiBmaWxlLm5hbWUsXG4gICAgICAgICAgZXJyb3I6IGRvbS5hY3RpdmVFbGVtZW50Lm5vZGVOYW1lID09IFwicGFyc2VyZXJyb3JcIixcbiAgICAgICAgICB0b3RhbDogaXRlbXMubGVuZ3RoLFxuICAgICAgICAgIHdpdGhFbWFpbDogd2l0aEVtYWlsLmxlbmd0aCxcbiAgICAgICAgICB3aXRoQXV0b3Jpc2F0aW9uOiB3aXRoVXNhYmxlRW1haWwubGVuZ3RoXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIHJlYWRlci5yZWFkQXNUZXh0KGZpbGUpXG4gIH1cblxuICBjb25zdCBkcm9wSGFuZGxlciA9IHVzZUNhbGxiYWNrKChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBzZXRDb2xvcihkZWZhdWx0Q29sb3IpXG4gICAgZm9yICh2YXIgaSA9IDA7IGk8ZXZlbnQuZGF0YVRyYW5zZmVyLmZpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBmaWxlSGFuZGxlcihldmVudC5kYXRhVHJhbnNmZXIuZmlsZXNbaV0pXG4gICAgfVxuICB9KVxuXG4gIGNvbnN0IHNlbGVjdEhhbmRsZXIgPSB1c2VDYWxsYmFjaygoZXZlbnQpID0+IHtcbiAgICBmb3IgKHZhciBpID0gMDsgaTxldmVudC50YXJnZXQuZmlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGZpbGVIYW5kbGVyKGV2ZW50LnRhcmdldC5maWxlc1tpXSlcbiAgICB9XG4gICAgZXZlbnQudGFyZ2V0LnZhbHVlID0gJydcbiAgfSlcblxuICBjb25zdCByb3VuZCA9ICh2YWx1ZSkgPT4gTWF0aC5yb3VuZCh2YWx1ZSlcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6Y29sb3J9fSBvbkRyYWdPdmVyPXtkcmFnSGFuZGxlcignIzAwNzBmMycpfSBvbkRyYWdMZWF2ZT17ZHJhZ0hhbmRsZXIoZGVmYXVsdENvbG9yKX0gb25Ecm9wPXtkcm9wSGFuZGxlcn0+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxuICAgICAgICAgIExlY3RldXIgZGUgZmljaGllciBDTkFGXG4gICAgICAgIDwvaDE+XG5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgIEdsaXNzZXogZXQgZMOpcG9zZXogbGUgZmljaGllciBDTkFGIMOgIGFuYWx5c2VyIG91IHPDqWxlY3Rpb25uZXogbGUuPGJyLz5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBvbkNoYW5nZT17c2VsZWN0SGFuZGxlcn0gbXVsdGlwbGUvPlxuICAgICAgICA8L3A+XG5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgIExlcyBvcMOpcmF0aW9ucyBzb250IHRvdXRlcyByw6lhbGlzw6llcyBzdXIgdm90cmUgb3JkaW5hdGV1ci48YnIvPlxuICAgICAgICAgIEF1Y3VuZSBkb25uw6llIHBlcnNvbm5lbGxlIG4nZXN0IHRyYW5zZsOpcsOpZS5cbiAgICAgICAgPC9wPlxuXG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICA8YSBocmVmPVwiI3BvdXJxdW9pXCI+UG91cnF1b2kgdW4gdGVsIGxlY3RldXImbmJzcDs/PC9hPlxuICAgICAgICA8L3A+XG5cbiAgICAgICAgeyBydW5zICYmIHJ1bnMubGVuZ3RoID4gMCAmJiAoPD5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuc3VidGl0bGV9PlxuICAgICAgICAgICAgSGlzdG9yaXF1ZVxuICAgICAgICAgIDwvaDI+XG5cbiAgICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGg+RGF0ZTwvdGg+XG4gICAgICAgICAgICAgICAgPHRoPkZpY2hpZXI8L3RoPlxuICAgICAgICAgICAgICAgIDx0aD5Eb3NzaWVyczwvdGg+XG4gICAgICAgICAgICAgICAgPHRoPmF2ZWMgZW1haWw8L3RoPlxuICAgICAgICAgICAgICAgIDx0aD5ldCBhdXRvcmlzYXRpb248L3RoPlxuICAgICAgICAgICAgICAgIDx0aD5FcnJldXI8L3RoPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICB7cnVucy5tYXAociA9PiAoPHRyIGtleT17YCR7ci50aW1ldGFtcH0tJHtyLmZpbGVuYW1lfWAgfT5cbiAgICAgICAgICAgICAgICA8dGQ+e3IudGltZXRhbXB9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e3IuZmlsZW5hbWV9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMubnVtZXJpY30+e3IudG90YWx9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMubnVtZXJpY30+e3Iud2l0aEVtYWlsfSAoe3JvdW5kKHIud2l0aEVtYWlsL3IudG90YWwqMTAwKX0lKTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLm51bWVyaWN9PntyLndpdGhBdXRvcmlzYXRpb259ICh7cm91bmQoci53aXRoQXV0b3Jpc2F0aW9uL3IudG90YWwqMTAwKX0lKTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPntyLmVycm9yID8gJ091aScgOiAnTm9uJ308L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgIDwvdGFibGU+XG5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoUnVucyh7dHlwZTogJ3Jlc2V0J30pfT5WaWRlciBsJ2hpc3RvcmlxdWU8L2J1dHRvbj5cbiAgICAgICAgPC8+KX1cblxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgICAgVW4gcHJvYmzDqG1lLCB1bmUgcXVlc3Rpb24gPyBDb250YWN0ZXotbm91cyDDoCA8TWFpbGVyIHN1YmplY3Q9XCJGbHV4IGluc3RydWN0aW9uIENOQUZcIj5kYXRhLmluc2VydGlvbkBiZXRhLmdvdXYuZnI8L01haWxlcj5cbiAgICAgICAgPC9wPlxuXG4gICAgICAgIDxoMiBpZD1cInBvdXJxdW9pXCIgY2xhc3NOYW1lPXtzdHlsZXMuc3VidGl0bGV9PlxuICAgICAgICAgIFBvdXJxdW9pIHVuIGxlY3RldXIgZGUgZmljaGllciBDTkFGJm5ic3A7P1xuICAgICAgICA8L2gyPlxuXG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRleHR9PlxuICAgICAgICAgIFRvdXMgbGVzIGTDqXBhcnRlbWVudHMgbidvbnQgcGFzIGxlcyBvdXRpbHMgcG91ciBhbmFseXNlciBsZXMgZmljaGllcnMgZW52b3nDqXMgcGFyIGxhIENOQUYuIENlbGEgcGV1dCByYWxlbnRpciBldCBjb21wbGlxdWVyIG5vcyDDqWNoYW5nZXMuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+XG4gICAgICAgICAgQXZlYyBjZXQgb3V0aWwsIG5vdXMgc291aGFpdG9ucyBwZXJtZXR0cmUgYXV4IHBlcnNvbm5lcyBxdWkgb250IGFjY8OocyDDoCBjZXMgZmljaGllcnMgZCdlbiBleHRyYWlyZSBkZXMgc3RhdGlzdGlxdWVzIGfDqW7DqXJhbGVzIHNhbnMgYXZvaXIgw6AgbWV0dHJlIGxlcyBtYWlucyBkYW5zIGxlIGNhbWJvdWkgZWxsZXMtbcOqbWUuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+XG4gICAgICAgICAgQXVqb3VyZCdodWksIG5vdXMgY2hlcmNob25zIMOgIGNvbXByZW5kcmUgcG91cnF1b2kgcG91ciBsYSBDTkFGIDkwJSBkZXMgZG9zc2llcnMgcHLDqXNlbnRzIGRhbnMgbGVzIGZpY2hpZXJzIHF1b3RpZGllbnMgZCdpbnN0cnVjdGlvbnMgY29udGllbm5lbnQgZGVzIGVtYWlscyBhbG9ycyBxdWUgY2UgdGF1eCBlc3QgZGUgMzAlIMOgIDUwJSBwb3VyIGNlcnRhaW5zIGTDqXBhcnRlbWVudHMuXG4gICAgICAgIDwvcD5cblxuICAgICAgPC9tYWluPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/cnaf/instruction/index.js\n");

/***/ })

})