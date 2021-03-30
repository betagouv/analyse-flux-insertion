webpackHotUpdate_N_E("pages/experimentations/ardennes",{

/***/ "./pages/experimentations/ardennes/index.js":
/*!**************************************************!*\
  !*** ./pages/experimentations/ardennes/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Ardennes; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/layout */ "./components/layout.js");
/* harmony import */ var _components_file__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/file */ "./components/file.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/footer */ "./components/footer.js");
/* harmony import */ var _components_login_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/login-form */ "./components/login-form.js");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _lib_cnaf__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../lib/cnaf */ "./lib/cnaf.js");
/* harmony import */ var _lib_historique__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../lib/historique */ "./lib/historique.js");




var _jsxFileName = "/home/q/code/qblanc/beta.gouv/analyse-flux-insertion/pages/experimentations/ardennes/index.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// Code avec orga fixe (Ardennes)









var reducer = Object(_lib_historique__WEBPACK_IMPORTED_MODULE_10__["reducerFactory"])('Expérimentation Ardennes - CNAF - Bénéficiaire');
var devMode = true;
function Ardennes() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      devFile = _useState[0],
      setDevFile = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      usersData = _useState2[0],
      setUsersData = _useState2[1];

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_2__["useReducer"])(reducer, [], _lib_historique__WEBPACK_IMPORTED_MODULE_10__["initReducer"]),
      runs = _useReducer[0],
      dispatchRuns = _useReducer[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isPending = _useState3[0],
      setIsPending = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      fileSize = _useState4[0],
      setFileSize = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isLogged = _useState5[0],
      setIsLogged = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    "tokenId": '',
    uid: '',
    client: ''
  }),
      token = _useState6[0],
      setToken = _useState6[1];

  var RDV_URL = "http://localhost:5000";
  var path = '/users';
  var url = "".concat(RDV_URL, "/api/v1").concat(path);

  var onLogin = function onLogin(tokenId, uid, client) {
    setToken(_objectSpread(_objectSpread({}, token), {}, {
      tokenId: tokenId,
      uid: uid,
      client: client
    }));
    setIsLogged(true);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (devFile) {
      fileHandler(devFile);
    }
  }, [devFile]);

  var fileHandler = function fileHandler(file) {
    if (devMode && file != devFile) {
      setDevFile(file);
    }

    setFileSize(file.size);
    setIsPending(true);
    var start_time = new Date();
    var reader = new FileReader();

    reader.onload = function (event) {
      var fileData = new Uint8Array(event.target.result);
      var xls = xlsx__WEBPACK_IMPORTED_MODULE_3__["read"](fileData, {
        type: 'array'
      });
      /* Get first worksheet */

      var worksheet = xls.Sheets[xls.SheetNames[0]]; // Limiter la capture aux colonnes A-T

      var range = xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].decode_range(worksheet['!ref']);
      range.s.c = 0; // 0 == XLSX.utils.decode_col("A")

      range.e.c = 19; // 19 == XLSX.utils.decode_col("T")

      var new_range = xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].encode_range(range);
      /* Convert array to json*/

      var jsonData = xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].sheet_to_json(worksheet, {
        blankrows: false,
        raw: false,
        defval: null,
        range: new_range
      });
      var processedData = jsonData.map(function (userData, index) {
        if (userData["Compte rdv"] != "O") {
          var user = {
            first_name: userData["PRENOM"].charAt(0).toUpperCase() + userData["PRENOM"].slice(1).toLowerCase(),
            last_name: userData["NOM"].charAt(0).toUpperCase() + userData["NOM"].slice(1).toLowerCase(),
            email: userData["MAIL"],
            phone_number: userData["TELEPHONE"].replace(/\s+/g, ''),
            organisation_ids: 1
          };
          console.log(token);
          console.log(token.token);
          fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              "access-token": token.tokenId,
              uid: token.uid,
              client: token.client
            },
            body: JSON.stringify(user)
          }) // Compter le nombre de comptes créés et le nombre de fail ? Et logger pour les fails pour indiquer qui a fail ?
          .then(function (response) {
            if (response.status === 200) {
              userData["Compte rdv"] = "O";
            } else {
              userData["Compte rdv"] = "N";
            }
          });
          userData["RDV pris"] = "N";
          return userData; // Récupérer le token d'invitation
          // Envoyer le mail à la place d'Isabelle
        } else if (userData["RDV pris"] != "O") {
          // Vérifier si l'utilisateur a pris un rdv
          // si oui => userData["RDV pris"] = "O";
          // si non => userData["RDV pris"] = "N";
          userData["RDV pris"] = "N";
          return userData;
        }
      });
      setUsersData(processedData);
      var outWorkbook = xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].book_new();
      var outWorksheet = xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].json_to_sheet(processedData);
      xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].book_append_sheet(outWorkbook, outWorksheet, "DIVERGENCES");
      xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].book_append_sheet(outWorkbook, xls.Sheets[xls.SheetNames[1]], "GRAPHIQUE");
      xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].book_append_sheet(outWorkbook, xls.Sheets[xls.SheetNames[2]], "Selection COA");
      xlsx__WEBPACK_IMPORTED_MODULE_3__["writeFile"](outWorkbook, "ardennes_rsa_".concat(Object(_lib_cnaf__WEBPACK_IMPORTED_MODULE_9__["getFormattedTime"])(), ".xlsx"));
      setIsPending(false);
      dispatchRuns({
        type: 'append',
        item: {
          timestamp: new Date().toISOString().slice(0, 19),
          duration: new Date() - start_time,
          filename: file.name,
          fileSize: file.size
        }
      });
    };

    reader.readAsArrayBuffer(file);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.container,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.main,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.title,
        children: "Exp\xE9rimentation Ardennes"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 9
      }, this), !isLogged && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: "create-forms",
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.create,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_login_form__WEBPACK_IMPORTED_MODULE_7__["default"], {
          onLogin: onLogin
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 11
      }, this), isLogged && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_file__WEBPACK_IMPORTED_MODULE_5__["default"], {
          fileHandler: fileHandler,
          isPending: isPending,
          fileSize: fileSize
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 11
        }, this), usersData && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.subtitle,
            children: "B\xE9n\xE9ficiaires RSA"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 13
          }, this), usersData.length == 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.description,
            children: "Aucun b\xE9n\xE9ficiaire dans le fichier"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 15
          }, this), usersData.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                  rowSpan: "2",
                  children: "Nom"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 153,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                  rowSpan: "2",
                  children: "Pr\xE9nom"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 154,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                  rowSpan: "2",
                  children: "Mail"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 155,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                  rowSpan: "2",
                  children: "T\xE9l\xE9phone"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 156,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 152,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 151,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
              children: usersData.map(function (user, index) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                    children: user["NOM"]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 161,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                    children: user["PRENOM"]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 162,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                    children: user["MAIL"]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 163,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                    children: user["TELEPHONE"]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 164,
                    columnNumber: 21
                  }, _this)]
                }, index, true, {
                  fileName: _jsxFileName,
                  lineNumber: 160,
                  columnNumber: 52
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 159,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 15
          }, this)]
        }, void 0, true), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
          subject: "Exp\xE9rimentation Ardennes",
          pourquoi: "Quel est l'objectif de cette exp\xE9rimentation\xA0?",
          text: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.text,
              children: "Faciliter le travail des agents du d\xE9partement et tester l'utilisation de l'application RDV-Solidarit\xE9s pour acc\xE9l\xE9rer la prise du premier rendez-vous d'orientation."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 176,
              columnNumber: 15
            }, this)
          }, void 0, false)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 11
        }, this)]
      }, void 0, true)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 126,
    columnNumber: 5
  }, this);
}

_s(Ardennes, "31782Kii2V7Uyx3Ia18so4D87JQ=");

_c = Ardennes;

var _c;

$RefreshReg$(_c, "Ardennes");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXhwZXJpbWVudGF0aW9ucy9hcmRlbm5lcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJyZWR1Y2VyIiwicmVkdWNlckZhY3RvcnkiLCJkZXZNb2RlIiwiQXJkZW5uZXMiLCJ1c2VTdGF0ZSIsImRldkZpbGUiLCJzZXREZXZGaWxlIiwidXNlcnNEYXRhIiwic2V0VXNlcnNEYXRhIiwidXNlUmVkdWNlciIsImluaXRSZWR1Y2VyIiwicnVucyIsImRpc3BhdGNoUnVucyIsImlzUGVuZGluZyIsInNldElzUGVuZGluZyIsImZpbGVTaXplIiwic2V0RmlsZVNpemUiLCJpc0xvZ2dlZCIsInNldElzTG9nZ2VkIiwidWlkIiwiY2xpZW50IiwidG9rZW4iLCJzZXRUb2tlbiIsIlJEVl9VUkwiLCJwcm9jZXNzIiwicGF0aCIsInVybCIsIm9uTG9naW4iLCJ0b2tlbklkIiwidXNlRWZmZWN0IiwiZmlsZUhhbmRsZXIiLCJmaWxlIiwic2l6ZSIsInN0YXJ0X3RpbWUiLCJEYXRlIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsImV2ZW50IiwiZmlsZURhdGEiLCJVaW50OEFycmF5IiwidGFyZ2V0IiwicmVzdWx0IiwieGxzIiwiWExTWCIsInR5cGUiLCJ3b3Jrc2hlZXQiLCJTaGVldHMiLCJTaGVldE5hbWVzIiwicmFuZ2UiLCJkZWNvZGVfcmFuZ2UiLCJzIiwiYyIsImUiLCJuZXdfcmFuZ2UiLCJlbmNvZGVfcmFuZ2UiLCJqc29uRGF0YSIsInNoZWV0X3RvX2pzb24iLCJibGFua3Jvd3MiLCJyYXciLCJkZWZ2YWwiLCJwcm9jZXNzZWREYXRhIiwibWFwIiwidXNlckRhdGEiLCJpbmRleCIsInVzZXIiLCJmaXJzdF9uYW1lIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsInRvTG93ZXJDYXNlIiwibGFzdF9uYW1lIiwiZW1haWwiLCJwaG9uZV9udW1iZXIiLCJyZXBsYWNlIiwib3JnYW5pc2F0aW9uX2lkcyIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXNwb25zZSIsInN0YXR1cyIsIm91dFdvcmtib29rIiwiYm9va19uZXciLCJvdXRXb3Jrc2hlZXQiLCJqc29uX3RvX3NoZWV0IiwiYm9va19hcHBlbmRfc2hlZXQiLCJnZXRGb3JtYXR0ZWRUaW1lIiwiaXRlbSIsInRpbWVzdGFtcCIsInRvSVNPU3RyaW5nIiwiZHVyYXRpb24iLCJmaWxlbmFtZSIsIm5hbWUiLCJyZWFkQXNBcnJheUJ1ZmZlciIsInN0eWxlcyIsImNvbnRhaW5lciIsIm1haW4iLCJ0aXRsZSIsImNyZWF0ZSIsInN1YnRpdGxlIiwibGVuZ3RoIiwiZGVzY3JpcHRpb24iLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHQyx1RUFBYyxDQUFDLGdEQUFELENBQTlCO0FBQ0EsSUFBTUMsT0FBTyxPQUFiO0FBRWUsU0FBU0MsUUFBVCxHQUFvQjtBQUFBOztBQUFBOztBQUFBLGtCQUNIQyxzREFBUSxDQUFDLElBQUQsQ0FETDtBQUFBLE1BQzFCQyxPQUQwQjtBQUFBLE1BQ2pCQyxVQURpQjs7QUFBQSxtQkFFQ0Ysc0RBQVEsQ0FBQyxJQUFELENBRlQ7QUFBQSxNQUUxQkcsU0FGMEI7QUFBQSxNQUVmQyxZQUZlOztBQUFBLG9CQUdKQyx3REFBVSxDQUFDVCxPQUFELEVBQVUsRUFBVixFQUFjVSw0REFBZCxDQUhOO0FBQUEsTUFHMUJDLElBSDBCO0FBQUEsTUFHcEJDLFlBSG9COztBQUFBLG1CQUlDUixzREFBUSxDQUFDLEtBQUQsQ0FKVDtBQUFBLE1BSTFCUyxTQUowQjtBQUFBLE1BSWZDLFlBSmU7O0FBQUEsbUJBS0RWLHNEQUFRLENBQUMsQ0FBRCxDQUxQO0FBQUEsTUFLMUJX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QkFISCxlQWtDWixxRUFBQywwREFBRDtBQUNFLGlCQUFPLEVBQUMsNkJBRFY7QUFFRSxrQkFBUSxFQUFDLHNEQUZYO0FBR0UsY0FBSSxlQUFFO0FBQUEsbUNBQ0o7QUFBRyx1QkFBUyxFQUFFb0MsOERBQU0sQ0FBQ1EsSUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESTtBQUhSO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBbENZO0FBQUEsc0JBWGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTBERDs7R0F0S3VCekcsUTs7S0FBQUEsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9leHBlcmltZW50YXRpb25zL2FyZGVubmVzLjY4ZmJiYmM2MjhmYjIxMDRmNDAwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb2RlIGF2ZWMgb3JnYSBmaXhlIChBcmRlbm5lcylcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCdcbmltcG9ydCAqIGFzIFhMU1ggZnJvbSAneGxzeCc7XG5cbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9sYXlvdXQnXG5pbXBvcnQgRmlsZUhhbmRsZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9maWxlJ1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2Zvb3RlcidcbmltcG9ydCBMb2dpbkZvcm0gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9sb2dpbi1mb3JtJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi8uLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuXG5pbXBvcnQgeyBnZXRGb3JtYXR0ZWRUaW1lIH0gZnJvbSAnLi4vLi4vLi4vbGliL2NuYWYnXG5pbXBvcnQgeyBpbml0UmVkdWNlciwgcmVkdWNlckZhY3RvcnkgfSBmcm9tICcuLi8uLi8uLi9saWIvaGlzdG9yaXF1ZSdcblxuY29uc3QgcmVkdWNlciA9IHJlZHVjZXJGYWN0b3J5KCdFeHDDqXJpbWVudGF0aW9uIEFyZGVubmVzIC0gQ05BRiAtIELDqW7DqWZpY2lhaXJlJylcbmNvbnN0IGRldk1vZGUgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PSAnZGV2ZWxvcG1lbnQnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFyZGVubmVzKCkge1xuICBjb25zdCBbZGV2RmlsZSwgc2V0RGV2RmlsZV0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbdXNlcnNEYXRhLCBzZXRVc2Vyc0RhdGFdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtydW5zLCBkaXNwYXRjaFJ1bnNdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBbXSwgaW5pdFJlZHVjZXIpXG4gIGNvbnN0IFtpc1BlbmRpbmcsIHNldElzUGVuZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtmaWxlU2l6ZSwgc2V0RmlsZVNpemVdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtpc0xvZ2dlZCwgc2V0SXNMb2dnZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbdG9rZW4sIHNldFRva2VuXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgICBcInRva2VuSWRcIjogJycsXG4gICAgICAgICAgdWlkOiAnJyxcbiAgICAgICAgICBjbGllbnQ6ICcnXG4gIH0pO1xuICBjb25zdCBSRFZfVVJMID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUkRWX0RFTU9fVVJMO1xuICBjb25zdCBwYXRoID0gJy91c2Vycyc7XG4gIGNvbnN0IHVybCA9IGAke1JEVl9VUkx9L2FwaS92MSR7cGF0aH1gO1xuXG5cbiAgY29uc3Qgb25Mb2dpbiA9ICh0b2tlbklkLCB1aWQsIGNsaWVudCkgPT4ge1xuICAgIHNldFRva2VuKHsgLi4udG9rZW4sIHRva2VuSWQ6IHRva2VuSWQsIHVpZDogdWlkLCBjbGllbnQ6IGNsaWVudCB9KTtcbiAgICBzZXRJc0xvZ2dlZCh0cnVlKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmKGRldkZpbGUpIHtcbiAgICAgIGZpbGVIYW5kbGVyKGRldkZpbGUpXG4gICAgfVxuICB9LCBbZGV2RmlsZV0pXG5cbiAgY29uc3QgZmlsZUhhbmRsZXIgPSAoZmlsZSkgPT4ge1xuICAgIGlmIChkZXZNb2RlICYmIGZpbGUgIT0gZGV2RmlsZSkge1xuICAgICAgc2V0RGV2RmlsZShmaWxlKVxuICAgIH1cbiAgICBzZXRGaWxlU2l6ZShmaWxlLnNpemUpO1xuICAgIHNldElzUGVuZGluZyh0cnVlKTtcbiAgICBjb25zdCBzdGFydF90aW1lID0gbmV3IERhdGUoKTtcblxuICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXG4gICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgY29uc3QgZmlsZURhdGEgPSBuZXcgVWludDhBcnJheShldmVudC50YXJnZXQucmVzdWx0KTtcbiAgICAgIGNvbnN0IHhscyA9IFhMU1gucmVhZChmaWxlRGF0YSwge3R5cGU6J2FycmF5J30pXG4gICAgICAvKiBHZXQgZmlyc3Qgd29ya3NoZWV0ICovXG4gICAgICBjb25zdCB3b3Jrc2hlZXQgPSB4bHMuU2hlZXRzW3hscy5TaGVldE5hbWVzWzBdXTtcbiAgICAgIC8vIExpbWl0ZXIgbGEgY2FwdHVyZSBhdXggY29sb25uZXMgQS1UXG4gICAgICBjb25zdCByYW5nZSA9IFhMU1gudXRpbHMuZGVjb2RlX3JhbmdlKHdvcmtzaGVldFsnIXJlZiddKTtcbiAgICAgIHJhbmdlLnMuYyA9IDA7IC8vIDAgPT0gWExTWC51dGlscy5kZWNvZGVfY29sKFwiQVwiKVxuICAgICAgcmFuZ2UuZS5jID0gMTk7IC8vIDE5ID09IFhMU1gudXRpbHMuZGVjb2RlX2NvbChcIlRcIilcbiAgICAgIGNvbnN0IG5ld19yYW5nZSA9IFhMU1gudXRpbHMuZW5jb2RlX3JhbmdlKHJhbmdlKTtcbiAgICAgIC8qIENvbnZlcnQgYXJyYXkgdG8ganNvbiovXG4gICAgICBjb25zdCBqc29uRGF0YSA9IFhMU1gudXRpbHMuc2hlZXRfdG9fanNvbih3b3Jrc2hlZXQsIHsgYmxhbmtyb3dzOiBmYWxzZSwgcmF3OiBmYWxzZSwgZGVmdmFsOiBudWxsLCByYW5nZTogbmV3X3JhbmdlIH0pO1xuICAgICAgY29uc3QgcHJvY2Vzc2VkRGF0YSA9IGpzb25EYXRhLm1hcCgodXNlckRhdGEsIGluZGV4KSA9PiB7XG4gICAgICAgIGlmICh1c2VyRGF0YVtcIkNvbXB0ZSByZHZcIl0gIT0gXCJPXCIpIHtcbiAgICAgICAgICBjb25zdCB1c2VyID0geyBmaXJzdF9uYW1lOiB1c2VyRGF0YVtcIlBSRU5PTVwiXS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHVzZXJEYXRhW1wiUFJFTk9NXCJdLnNsaWNlKDEpLnRvTG93ZXJDYXNlKCksIGxhc3RfbmFtZTogdXNlckRhdGFbXCJOT01cIl0uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB1c2VyRGF0YVtcIk5PTVwiXS5zbGljZSgxKS50b0xvd2VyQ2FzZSgpLCBlbWFpbDogdXNlckRhdGFbXCJNQUlMXCJdLCBwaG9uZV9udW1iZXI6IHVzZXJEYXRhW1wiVEVMRVBIT05FXCJdLnJlcGxhY2UoL1xccysvZywgJycpLCBvcmdhbmlzYXRpb25faWRzOiAxIH07XG4gICAgICAgICAgY29uc29sZS5sb2codG9rZW4pO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHRva2VuLnRva2VuKTtcbiAgICAgICAgICBmZXRjaCh1cmwsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICBcImFjY2Vzcy10b2tlblwiOiB0b2tlbi50b2tlbklkLFxuICAgICAgICAgICAgICB1aWQ6IHRva2VuLnVpZCxcbiAgICAgICAgICAgICAgY2xpZW50OiB0b2tlbi5jbGllbnRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh1c2VyKVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLy8gQ29tcHRlciBsZSBub21icmUgZGUgY29tcHRlcyBjcsOpw6lzIGV0IGxlIG5vbWJyZSBkZSBmYWlsID8gRXQgbG9nZ2VyIHBvdXIgbGVzIGZhaWxzIHBvdXIgaW5kaXF1ZXIgcXVpIGEgZmFpbCA/XG5cbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICB1c2VyRGF0YVtcIkNvbXB0ZSByZHZcIl0gPSBcIk9cIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHVzZXJEYXRhW1wiQ29tcHRlIHJkdlwiXSA9IFwiTlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICAgdXNlckRhdGFbXCJSRFYgcHJpc1wiXSA9IFwiTlwiO1xuICAgICAgICAgIHJldHVybiB1c2VyRGF0YTtcbiAgICAgICAgICAvLyBSw6ljdXDDqXJlciBsZSB0b2tlbiBkJ2ludml0YXRpb25cbiAgICAgICAgICAvLyBFbnZveWVyIGxlIG1haWwgw6AgbGEgcGxhY2UgZCdJc2FiZWxsZVxuICAgICAgICB9IGVsc2UgaWYgKHVzZXJEYXRhW1wiUkRWIHByaXNcIl0gIT0gXCJPXCIpIHtcbiAgICAgICAgICAvLyBWw6lyaWZpZXIgc2kgbCd1dGlsaXNhdGV1ciBhIHByaXMgdW4gcmR2XG4gICAgICAgICAgLy8gc2kgb3VpID0+IHVzZXJEYXRhW1wiUkRWIHByaXNcIl0gPSBcIk9cIjtcbiAgICAgICAgICAvLyBzaSBub24gPT4gdXNlckRhdGFbXCJSRFYgcHJpc1wiXSA9IFwiTlwiO1xuICAgICAgICAgIHVzZXJEYXRhW1wiUkRWIHByaXNcIl0gPSBcIk5cIjtcbiAgICAgICAgICByZXR1cm4gdXNlckRhdGE7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICBzZXRVc2Vyc0RhdGEocHJvY2Vzc2VkRGF0YSk7XG4gICAgICBjb25zdCBvdXRXb3JrYm9vayA9IFhMU1gudXRpbHMuYm9va19uZXcoKTtcbiAgICAgIGNvbnN0IG91dFdvcmtzaGVldCA9IFhMU1gudXRpbHMuanNvbl90b19zaGVldChwcm9jZXNzZWREYXRhKTtcbiAgICAgIFhMU1gudXRpbHMuYm9va19hcHBlbmRfc2hlZXQob3V0V29ya2Jvb2ssIG91dFdvcmtzaGVldCwgXCJESVZFUkdFTkNFU1wiKTtcbiAgICAgIFhMU1gudXRpbHMuYm9va19hcHBlbmRfc2hlZXQob3V0V29ya2Jvb2ssIHhscy5TaGVldHNbeGxzLlNoZWV0TmFtZXNbMV1dLCBcIkdSQVBISVFVRVwiKTtcbiAgICAgIFhMU1gudXRpbHMuYm9va19hcHBlbmRfc2hlZXQob3V0V29ya2Jvb2ssIHhscy5TaGVldHNbeGxzLlNoZWV0TmFtZXNbMl1dLCBcIlNlbGVjdGlvbiBDT0FcIik7XG4gICAgICBYTFNYLndyaXRlRmlsZShvdXRXb3JrYm9vaywgYGFyZGVubmVzX3JzYV8ke2dldEZvcm1hdHRlZFRpbWUoKX0ueGxzeGApXG5cbiAgICAgIHNldElzUGVuZGluZyhmYWxzZSk7XG5cbiAgICAgIGRpc3BhdGNoUnVucyh7XG4gICAgICAgIHR5cGU6ICdhcHBlbmQnLFxuICAgICAgICBpdGVtOiB7XG4gICAgICAgICAgdGltZXN0YW1wOiAobmV3IERhdGUoKSkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxOSksXG4gICAgICAgICAgZHVyYXRpb246IChuZXcgRGF0ZSgpKSAtIHN0YXJ0X3RpbWUsXG4gICAgICAgICAgZmlsZW5hbWU6IGZpbGUubmFtZSxcbiAgICAgICAgICBmaWxlU2l6ZTogZmlsZS5zaXplLFxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoZmlsZSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxuICAgICAgICAgIEV4cMOpcmltZW50YXRpb24gQXJkZW5uZXNcbiAgICAgICAgPC9oMT5cblxuICAgICAgICB7IWlzTG9nZ2VkICYmXG4gICAgICAgICAgPGRpdiBpZD1cImNyZWF0ZS1mb3Jtc1wiIGNsYXNzTmFtZT17c3R5bGVzLmNyZWF0ZX0+XG4gICAgICAgICAgICA8TG9naW5Gb3JtIG9uTG9naW49e29uTG9naW59IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cblxuICAgICAgICB7IGlzTG9nZ2VkICYmIDw+XG4gICAgICAgICAgPEZpbGVIYW5kbGVyIGZpbGVIYW5kbGVyPXtmaWxlSGFuZGxlcn0gaXNQZW5kaW5nPXtpc1BlbmRpbmd9IGZpbGVTaXplPXtmaWxlU2l6ZX0gLz5cblxuICAgICAgICAgIHsgdXNlcnNEYXRhICYmIDw+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuc3VidGl0bGV9PlxuICAgICAgICAgICAgICBCw6luw6lmaWNpYWlyZXMgUlNBXG4gICAgICAgICAgICA8L2gyPlxuXG4gICAgICAgICAgICB7IHVzZXJzRGF0YS5sZW5ndGggPT0gMCAmJlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+QXVjdW4gYsOpbsOpZmljaWFpcmUgZGFucyBsZSBmaWNoaWVyPC9wPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgeyB1c2Vyc0RhdGEubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5Ob208L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5QcsOpbm9tPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+TWFpbDwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPlTDqWzDqXBob25lPC90aD5cbiAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICB7dXNlcnNEYXRhLm1hcCgodXNlciwgaW5kZXgpID0+ICg8dHIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57dXNlcltcIk5PTVwiXX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3VzZXJbXCJQUkVOT01cIl19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPnt1c2VyW1wiTUFJTFwiXX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3VzZXJbXCJURUxFUEhPTkVcIl19PC90ZD5cbiAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8Lz59XG5cbiAgICAgICAgICA8Rm9vdGVyXG4gICAgICAgICAgICBzdWJqZWN0PVwiRXhww6lyaW1lbnRhdGlvbiBBcmRlbm5lc1wiXG4gICAgICAgICAgICBwb3VycXVvaT1cIlF1ZWwgZXN0IGwnb2JqZWN0aWYgZGUgY2V0dGUgZXhww6lyaW1lbnRhdGlvbiZuYnNwOz9cIlxuICAgICAgICAgICAgdGV4dD17PD5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+RmFjaWxpdGVyIGxlIHRyYXZhaWwgZGVzIGFnZW50cyBkdSBkw6lwYXJ0ZW1lbnQgZXQgdGVzdGVyIGwndXRpbGlzYXRpb24gZGUgbCdhcHBsaWNhdGlvbiBSRFYtU29saWRhcml0w6lzIHBvdXIgYWNjw6lsw6lyZXIgbGEgcHJpc2UgZHUgcHJlbWllciByZW5kZXotdm91cyBkJ29yaWVudGF0aW9uLjwvcD5cbiAgICAgICAgICAgIDwvPn1cbiAgICAgICAgICAvPlxuICAgICAgICA8Lz59XG4gICAgICA8L21haW4+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=