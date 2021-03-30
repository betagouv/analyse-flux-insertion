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
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/layout */ "./components/layout.js");
/* harmony import */ var _components_file__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/file */ "./components/file.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/footer */ "./components/footer.js");
/* harmony import */ var _components_login_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/login-form */ "./components/login-form.js");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _lib_cnaf__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../lib/cnaf */ "./lib/cnaf.js");
/* harmony import */ var _lib_historique__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../lib/historique */ "./lib/historique.js");





var _jsxFileName = "/home/q/code/qblanc/beta.gouv/analyse-flux-insertion/pages/experimentations/ardennes/index.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// Code avec orga fixe (Ardennes)









var reducer = Object(_lib_historique__WEBPACK_IMPORTED_MODULE_11__["reducerFactory"])('Expérimentation Ardennes - CNAF - Bénéficiaire');
var devMode = true;
function Ardennes() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      devFile = _useState[0],
      setDevFile = _useState[1];

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_3__["useReducer"])(reducer, [], _lib_historique__WEBPACK_IMPORTED_MODULE_11__["initReducer"]),
      runs = _useReducer[0],
      dispatchRuns = _useReducer[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      usersData = _useState2[0],
      setUsersData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      processedData = _useState3[0],
      setProcessedData = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isPending = _useState4[0],
      setIsPending = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      fileSize = _useState5[0],
      setFileSize = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isLogged = _useState6[0],
      setIsLogged = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    "tokenId": '',
    uid: '',
    client: ''
  }),
      token = _useState7[0],
      setToken = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    count: 0,
    size: 0
  }),
      promises = _useState8[0],
      setPromises = _useState8[1];

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
  }; // useEffect(() => {
  //   if(devFile) {
  //     fileHandler(devFile)
  //   }
  // }, [devFile])


  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    console.log(processedData);
    console.log(promises.size);
    console.log(promises.count);

    if (promises.size > 0 && promises.count == promises.size) {
      setUsersData(processedData);
      var outWorkbook = xlsx__WEBPACK_IMPORTED_MODULE_4__["utils"].book_new();
      var outWorksheet = xlsx__WEBPACK_IMPORTED_MODULE_4__["utils"].json_to_sheet(processedData);
      xlsx__WEBPACK_IMPORTED_MODULE_4__["utils"].book_append_sheet(outWorkbook, outWorksheet, "DIVERGENCES"); // XLSX.utils.book_append_sheet(outWorkbook, xls.Sheets[xls.SheetNames[1]], "GRAPHIQUE");
      // XLSX.utils.book_append_sheet(outWorkbook, xls.Sheets[xls.SheetNames[2]], "Selection COA");

      xlsx__WEBPACK_IMPORTED_MODULE_4__["writeFile"](outWorkbook, "ardennes_rsa_".concat(Object(_lib_cnaf__WEBPACK_IMPORTED_MODULE_10__["getFormattedTime"])(), ".xlsx"));
    }
  }, [promises]);

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
      var xls = xlsx__WEBPACK_IMPORTED_MODULE_4__["read"](fileData, {
        type: 'array'
      });
      /* Get first worksheet */

      var worksheet = xls.Sheets[xls.SheetNames[0]]; // Limiter la capture aux colonnes A-T

      var range = xlsx__WEBPACK_IMPORTED_MODULE_4__["utils"].decode_range(worksheet['!ref']);
      range.s.c = 0; // 0 == XLSX.utils.decode_col("A")

      range.e.c = 19; // 19 == XLSX.utils.decode_col("T")

      var new_range = xlsx__WEBPACK_IMPORTED_MODULE_4__["utils"].encode_range(range);
      /* Convert array to json*/

      var jsonData = xlsx__WEBPACK_IMPORTED_MODULE_4__["utils"].sheet_to_json(worksheet, {
        blankrows: false,
        raw: false,
        defval: null,
        range: new_range
      });
      var test = jsonData.map(function (userData) {
        if (userData["Compte rdv"] != "O") {
          var user = {
            first_name: userData["PRENOM"].charAt(0).toUpperCase() + userData["PRENOM"].slice(1).toLowerCase(),
            last_name: userData["NOM"].charAt(0).toUpperCase() + userData["NOM"].slice(1).toLowerCase(),
            email: userData["MAIL"],
            phone_number: userData["TELEPHONE"].replace(/\s+/g, ''),
            organisation_ids: [1]
          };
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
              userData["RDV pris"] = "N";
              setProcessedData([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(processedData), [userData]));
              setPromises({
                count: promises.count + 1,
                size: jsonData.length
              });
              return userData;
            } else {
              userData["Compte rdv"] = "Nope";
              setProcessedData([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(processedData), [userData]));
              setPromises({
                count: promises.count + 1,
                size: jsonData.length
              });
              return userData;
            }
          }); // Récupérer le token d'invitation
          // Envoyer le mail à la place d'Isabelle
        } else {
          if (userData["RDV pris"] != "O") {// Vérifier si l'utilisateur a pris un rdv
            // si oui => userData["RDV pris"] = "O";
            // si non => userData["RDV pris"] = "N";
          }

          userData["RDV pris"] = "N";
          setProcessedData([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(processedData), [userData]));
          setPromises({
            count: promises.count + 1,
            size: jsonData.length
          });
          return userData;
        }
      });
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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.container,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.main,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.title,
        children: "Exp\xE9rimentation Ardennes"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 9
      }, this), !isLogged && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: "create-forms",
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.create,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_login_form__WEBPACK_IMPORTED_MODULE_8__["default"], {
          onLogin: onLogin
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 11
      }, this), isLogged && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_file__WEBPACK_IMPORTED_MODULE_6__["default"], {
          fileHandler: fileHandler,
          isPending: isPending,
          fileSize: fileSize
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 11
        }, this), usersData && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.subtitle,
            children: "B\xE9n\xE9ficiaires RSA"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 163,
            columnNumber: 13
          }, this), usersData.length == 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.description,
            children: "Aucun b\xE9n\xE9ficiaire dans le fichier"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 168,
            columnNumber: 15
          }, this), usersData.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                  rowSpan: "2",
                  children: "Nom"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 174,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                  rowSpan: "2",
                  children: "Pr\xE9nom"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 175,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                  rowSpan: "2",
                  children: "Mail"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 176,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                  rowSpan: "2",
                  children: "T\xE9l\xE9phone"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 177,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 173,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 172,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
              children: usersData.map(function (user, index) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                    children: user["NOM"]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 182,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                    children: user["PRENOM"]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 183,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                    children: user["MAIL"]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 184,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                    children: user["TELEPHONE"]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 185,
                    columnNumber: 21
                  }, _this)]
                }, index, true, {
                  fileName: _jsxFileName,
                  lineNumber: 181,
                  columnNumber: 52
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 180,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 171,
            columnNumber: 15
          }, this)]
        }, void 0, true), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
          subject: "Exp\xE9rimentation Ardennes",
          pourquoi: "Quel est l'objectif de cette exp\xE9rimentation\xA0?",
          text: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.text,
              children: "Faciliter le travail des agents du d\xE9partement et tester l'utilisation de l'application RDV-Solidarit\xE9s pour acc\xE9l\xE9rer la prise du premier rendez-vous d'orientation."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 197,
              columnNumber: 15
            }, this)
          }, void 0, false)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 11
        }, this)]
      }, void 0, true)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 147,
    columnNumber: 5
  }, this);
}

_s(Ardennes, "Qd6yYiphLNSddn3EYzfEgGlKKEo=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXhwZXJpbWVudGF0aW9ucy9hcmRlbm5lcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJyZWR1Y2VyIiwicmVkdWNlckZhY3RvcnkiLCJkZXZNb2RlIiwiQXJkZW5uZXMiLCJ1c2VTdGF0ZSIsImRldkZpbGUiLCJzZXREZXZGaWxlIiwidXNlUmVkdWNlciIsImluaXRSZWR1Y2VyIiwicnVucyIsImRpc3BhdGNoUnVucyIsInVzZXJzRGF0YSIsInNldFVzZXJzRGF0YSIsInByb2Nlc3NlZERhdGEiLCJzZXRQcm9jZXNzZWREYXRhIiwiaXNQZW5kaW5nIiwic2V0SXNQZW5kaW5nIiwiZmlsZVNpemUiLCJzZXRGaWxlU2l6ZSIsImlzTG9nZ2VkIiwic2V0SXNMb2dnZWQiLCJ1aWQiLCJjbGllbnQiLCJ0b2tlbiIsInNldFRva2VuIiwiY291bnQiLCJzaXplIiwicHJvbWlzZXMiLCJzZXRQcm9taXNlcyIsIlJEVl9VUkwiLCJwcm9jZXNzIiwicGF0aCIsInVybCIsIm9uTG9naW4iLCJ0b2tlbklkIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsIm91dFdvcmtib29rIiwiWExTWCIsImJvb2tfbmV3Iiwib3V0V29ya3NoZWV0IiwianNvbl90b19zaGVldCIsImJvb2tfYXBwZW5kX3NoZWV0IiwiZ2V0Rm9ybWF0dGVkVGltZSIsImZpbGVIYW5kbGVyIiwiZmlsZSIsInN0YXJ0X3RpbWUiLCJEYXRlIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsImV2ZW50IiwiZmlsZURhdGEiLCJVaW50OEFycmF5IiwidGFyZ2V0IiwicmVzdWx0IiwieGxzIiwidHlwZSIsIndvcmtzaGVldCIsIlNoZWV0cyIsIlNoZWV0TmFtZXMiLCJyYW5nZSIsImRlY29kZV9yYW5nZSIsInMiLCJjIiwiZSIsIm5ld19yYW5nZSIsImVuY29kZV9yYW5nZSIsImpzb25EYXRhIiwic2hlZXRfdG9fanNvbiIsImJsYW5rcm93cyIsInJhdyIsImRlZnZhbCIsInRlc3QiLCJtYXAiLCJ1c2VyRGF0YSIsInVzZXIiLCJmaXJzdF9uYW1lIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsInRvTG93ZXJDYXNlIiwibGFzdF9uYW1lIiwiZW1haWwiLCJwaG9uZV9udW1iZXIiLCJyZXBsYWNlIiwib3JnYW5pc2F0aW9uX2lkcyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlc3BvbnNlIiwic3RhdHVzIiwibGVuZ3RoIiwiaXRlbSIsInRpbWVzdGFtcCIsInRvSVNPU3RyaW5nIiwiZHVyYXRpb24iLCJmaWxlbmFtZSIsIm5hbWUiLCJyZWFkQXNBcnJheUJ1ZmZlciIsInN0eWxlcyIsImNvbnRhaW5lciIsIm1haW4iLCJ0aXRsZSIsImNyZWF0ZSIsInN1YnRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbmRleCIsInRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBLElBQU1BLE9BQU8sR0FBR0MsdUVBQWMsQ0FBQyxnREFBRCxDQUE5QjtBQUNBLElBQU1DLE9BQU8sT0FBYjtBQUVlLFNBQVNDLFFBQVQsR0FBb0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFDSEMsc0RBQVEsQ0FBQyxJQUFELENBREw7QUFBQSxNQUMxQkMsT0FEMEI7QUFBQSxNQUNqQkMsVUFEaUI7O0FBQUEsb0JBRUpDLHdEQUFVLENBQUNQLE9BQUQsRUFBVSxFQUFWLEVBQWNRLDREQUFkLENBRk47QUFBQSxNQUUxQkMsSUFGMEI7QUFBQSxNQUVwQkMsWUFGb0I7O0FBQUEsbUJBR0NOLHNEQUFRLENBQUMsSUFBRCxDQUhUO0FBQUEsTUFHMUJPLFNBSDBCO0FBQUEsTUFHZkMsWUFIZTs7QUFBQSxtQkFJU1Isc0RBQVEsQ0FBQyxJQUFELENBSmpCO0FBQUEsTUFJMUJTLGFBSjBC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QTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBMEREOztHQTNMdUI5RyxROztLQUFBQSxRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2V4cGVyaW1lbnRhdGlvbnMvYXJkZW5uZXMuNGMwMjg2Y2E0NDliYWFlMzg5ZDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvZGUgYXZlYyBvcmdhIGZpeGUgKEFyZGVubmVzKVxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0ICogYXMgWExTWCBmcm9tICd4bHN4JztcblxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2xheW91dCdcbmltcG9ydCBGaWxlSGFuZGxlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2ZpbGUnXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvZm9vdGVyJ1xuaW1wb3J0IExvZ2luRm9ybSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2xvZ2luLWZvcm0nXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uLy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5cbmltcG9ydCB7IGdldEZvcm1hdHRlZFRpbWUgfSBmcm9tICcuLi8uLi8uLi9saWIvY25hZidcbmltcG9ydCB7IGluaXRSZWR1Y2VyLCByZWR1Y2VyRmFjdG9yeSB9IGZyb20gJy4uLy4uLy4uL2xpYi9oaXN0b3JpcXVlJ1xuXG5jb25zdCByZWR1Y2VyID0gcmVkdWNlckZhY3RvcnkoJ0V4cMOpcmltZW50YXRpb24gQXJkZW5uZXMgLSBDTkFGIC0gQsOpbsOpZmljaWFpcmUnKVxuY29uc3QgZGV2TW9kZSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09ICdkZXZlbG9wbWVudCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXJkZW5uZXMoKSB7XG4gIGNvbnN0IFtkZXZGaWxlLCBzZXREZXZGaWxlXSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFtydW5zLCBkaXNwYXRjaFJ1bnNdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBbXSwgaW5pdFJlZHVjZXIpXG4gIGNvbnN0IFt1c2Vyc0RhdGEsIHNldFVzZXJzRGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3Byb2Nlc3NlZERhdGEsIHNldFByb2Nlc3NlZERhdGFdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtpc1BlbmRpbmcsIHNldElzUGVuZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtmaWxlU2l6ZSwgc2V0RmlsZVNpemVdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtpc0xvZ2dlZCwgc2V0SXNMb2dnZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbdG9rZW4sIHNldFRva2VuXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgICBcInRva2VuSWRcIjogJycsXG4gICAgICAgICAgdWlkOiAnJyxcbiAgICAgICAgICBjbGllbnQ6ICcnXG4gIH0pO1xuICBjb25zdCBbcHJvbWlzZXMsIHNldFByb21pc2VzXSA9IHVzZVN0YXRlKHtcbiAgICBjb3VudDogMCxcbiAgICBzaXplOiAwXG4gIH0pO1xuICBjb25zdCBSRFZfVVJMID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUkRWX0RFTU9fVVJMO1xuICBjb25zdCBwYXRoID0gJy91c2Vycyc7XG4gIGNvbnN0IHVybCA9IGAke1JEVl9VUkx9L2FwaS92MSR7cGF0aH1gO1xuXG5cbiAgY29uc3Qgb25Mb2dpbiA9ICh0b2tlbklkLCB1aWQsIGNsaWVudCkgPT4ge1xuICAgIHNldFRva2VuKHsgLi4udG9rZW4sIHRva2VuSWQ6IHRva2VuSWQsIHVpZDogdWlkLCBjbGllbnQ6IGNsaWVudCB9KTtcbiAgICBzZXRJc0xvZ2dlZCh0cnVlKTtcbiAgfTtcblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGlmKGRldkZpbGUpIHtcbiAgLy8gICAgIGZpbGVIYW5kbGVyKGRldkZpbGUpXG4gIC8vICAgfVxuICAvLyB9LCBbZGV2RmlsZV0pXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2cocHJvY2Vzc2VkRGF0YSlcbiAgICBjb25zb2xlLmxvZyhwcm9taXNlcy5zaXplKVxuICAgIGNvbnNvbGUubG9nKHByb21pc2VzLmNvdW50KVxuICAgIGlmIChwcm9taXNlcy5zaXplID4gMCAmJiBwcm9taXNlcy5jb3VudCA9PSBwcm9taXNlcy5zaXplKSB7XG4gICAgICBzZXRVc2Vyc0RhdGEocHJvY2Vzc2VkRGF0YSk7XG4gICAgICBjb25zdCBvdXRXb3JrYm9vayA9IFhMU1gudXRpbHMuYm9va19uZXcoKTtcbiAgICAgIGNvbnN0IG91dFdvcmtzaGVldCA9IFhMU1gudXRpbHMuanNvbl90b19zaGVldChwcm9jZXNzZWREYXRhKTtcbiAgICAgIFhMU1gudXRpbHMuYm9va19hcHBlbmRfc2hlZXQob3V0V29ya2Jvb2ssIG91dFdvcmtzaGVldCwgXCJESVZFUkdFTkNFU1wiKTtcbiAgICAgIC8vIFhMU1gudXRpbHMuYm9va19hcHBlbmRfc2hlZXQob3V0V29ya2Jvb2ssIHhscy5TaGVldHNbeGxzLlNoZWV0TmFtZXNbMV1dLCBcIkdSQVBISVFVRVwiKTtcbiAgICAgIC8vIFhMU1gudXRpbHMuYm9va19hcHBlbmRfc2hlZXQob3V0V29ya2Jvb2ssIHhscy5TaGVldHNbeGxzLlNoZWV0TmFtZXNbMl1dLCBcIlNlbGVjdGlvbiBDT0FcIik7XG4gICAgICBYTFNYLndyaXRlRmlsZShvdXRXb3JrYm9vaywgYGFyZGVubmVzX3JzYV8ke2dldEZvcm1hdHRlZFRpbWUoKX0ueGxzeGApXG4gICAgfVxuICB9LCBbcHJvbWlzZXNdKVxuXG4gIGNvbnN0IGZpbGVIYW5kbGVyID0gKGZpbGUpID0+IHtcbiAgICBpZiAoZGV2TW9kZSAmJiBmaWxlICE9IGRldkZpbGUpIHtcbiAgICAgIHNldERldkZpbGUoZmlsZSlcbiAgICB9XG4gICAgc2V0RmlsZVNpemUoZmlsZS5zaXplKTtcbiAgICBzZXRJc1BlbmRpbmcodHJ1ZSk7XG4gICAgY29uc3Qgc3RhcnRfdGltZSA9IG5ldyBEYXRlKCk7XG5cbiAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGNvbnN0IGZpbGVEYXRhID0gbmV3IFVpbnQ4QXJyYXkoZXZlbnQudGFyZ2V0LnJlc3VsdCk7XG4gICAgICBjb25zdCB4bHMgPSBYTFNYLnJlYWQoZmlsZURhdGEsIHt0eXBlOidhcnJheSd9KVxuICAgICAgLyogR2V0IGZpcnN0IHdvcmtzaGVldCAqL1xuICAgICAgY29uc3Qgd29ya3NoZWV0ID0geGxzLlNoZWV0c1t4bHMuU2hlZXROYW1lc1swXV07XG4gICAgICAvLyBMaW1pdGVyIGxhIGNhcHR1cmUgYXV4IGNvbG9ubmVzIEEtVFxuICAgICAgY29uc3QgcmFuZ2UgPSBYTFNYLnV0aWxzLmRlY29kZV9yYW5nZSh3b3Jrc2hlZXRbJyFyZWYnXSk7XG4gICAgICByYW5nZS5zLmMgPSAwOyAvLyAwID09IFhMU1gudXRpbHMuZGVjb2RlX2NvbChcIkFcIilcbiAgICAgIHJhbmdlLmUuYyA9IDE5OyAvLyAxOSA9PSBYTFNYLnV0aWxzLmRlY29kZV9jb2woXCJUXCIpXG4gICAgICBjb25zdCBuZXdfcmFuZ2UgPSBYTFNYLnV0aWxzLmVuY29kZV9yYW5nZShyYW5nZSk7XG4gICAgICAvKiBDb252ZXJ0IGFycmF5IHRvIGpzb24qL1xuICAgICAgY29uc3QganNvbkRhdGEgPSBYTFNYLnV0aWxzLnNoZWV0X3RvX2pzb24od29ya3NoZWV0LCB7IGJsYW5rcm93czogZmFsc2UsIHJhdzogZmFsc2UsIGRlZnZhbDogbnVsbCwgcmFuZ2U6IG5ld19yYW5nZSB9KTtcbiAgICAgIGNvbnN0IHRlc3QgPSBqc29uRGF0YS5tYXAodXNlckRhdGEgPT4ge1xuICAgICAgICBpZiAodXNlckRhdGFbXCJDb21wdGUgcmR2XCJdICE9IFwiT1wiKSB7XG4gICAgICAgICAgY29uc3QgdXNlciA9IHsgZmlyc3RfbmFtZTogdXNlckRhdGFbXCJQUkVOT01cIl0uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB1c2VyRGF0YVtcIlBSRU5PTVwiXS5zbGljZSgxKS50b0xvd2VyQ2FzZSgpLCBsYXN0X25hbWU6IHVzZXJEYXRhW1wiTk9NXCJdLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdXNlckRhdGFbXCJOT01cIl0uc2xpY2UoMSkudG9Mb3dlckNhc2UoKSwgZW1haWw6IHVzZXJEYXRhW1wiTUFJTFwiXSwgcGhvbmVfbnVtYmVyOiB1c2VyRGF0YVtcIlRFTEVQSE9ORVwiXS5yZXBsYWNlKC9cXHMrL2csICcnKSwgb3JnYW5pc2F0aW9uX2lkczogWzFdIH07XG4gICAgICAgICAgZmV0Y2godXJsLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgXCJhY2Nlc3MtdG9rZW5cIjogdG9rZW4udG9rZW5JZCxcbiAgICAgICAgICAgICAgdWlkOiB0b2tlbi51aWQsXG4gICAgICAgICAgICAgIGNsaWVudDogdG9rZW4uY2xpZW50XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodXNlcilcbiAgICAgICAgICB9KVxuICAgICAgICAgIC8vIENvbXB0ZXIgbGUgbm9tYnJlIGRlIGNvbXB0ZXMgY3LDqcOpcyBldCBsZSBub21icmUgZGUgZmFpbCA/IEV0IGxvZ2dlciBwb3VyIGxlcyBmYWlscyBwb3VyIGluZGlxdWVyIHF1aSBhIGZhaWwgP1xuXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgdXNlckRhdGFbXCJDb21wdGUgcmR2XCJdID0gXCJPXCI7XG4gICAgICAgICAgICAgIHVzZXJEYXRhW1wiUkRWIHByaXNcIl0gPSBcIk5cIjtcbiAgICAgICAgICAgICAgc2V0UHJvY2Vzc2VkRGF0YShbLi4ucHJvY2Vzc2VkRGF0YSwgdXNlckRhdGFdKTtcbiAgICAgICAgICAgICAgc2V0UHJvbWlzZXMoeyBjb3VudDogcHJvbWlzZXMuY291bnQgKyAxLCBzaXplOiBqc29uRGF0YS5sZW5ndGh9KVxuICAgICAgICAgICAgICByZXR1cm4gdXNlckRhdGE7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHVzZXJEYXRhW1wiQ29tcHRlIHJkdlwiXSA9IFwiTm9wZVwiO1xuICAgICAgICAgICAgICBzZXRQcm9jZXNzZWREYXRhKFsuLi5wcm9jZXNzZWREYXRhLCB1c2VyRGF0YV0pO1xuICAgICAgICAgICAgICBzZXRQcm9taXNlcyh7IGNvdW50OiBwcm9taXNlcy5jb3VudCArIDEsIHNpemU6IGpzb25EYXRhLmxlbmd0aH0pXG4gICAgICAgICAgICAgIHJldHVybiB1c2VyRGF0YTtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLy8gUsOpY3Vww6lyZXIgbGUgdG9rZW4gZCdpbnZpdGF0aW9uXG4gICAgICAgICAgLy8gRW52b3llciBsZSBtYWlsIMOgIGxhIHBsYWNlIGQnSXNhYmVsbGVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAodXNlckRhdGFbXCJSRFYgcHJpc1wiXSAhPSBcIk9cIikge1xuICAgICAgICAgICAgLy8gVsOpcmlmaWVyIHNpIGwndXRpbGlzYXRldXIgYSBwcmlzIHVuIHJkdlxuICAgICAgICAgICAgLy8gc2kgb3VpID0+IHVzZXJEYXRhW1wiUkRWIHByaXNcIl0gPSBcIk9cIjtcbiAgICAgICAgICAgIC8vIHNpIG5vbiA9PiB1c2VyRGF0YVtcIlJEViBwcmlzXCJdID0gXCJOXCI7XG4gICAgICAgICAgfVxuICAgICAgICAgIHVzZXJEYXRhW1wiUkRWIHByaXNcIl0gPSBcIk5cIjtcbiAgICAgICAgICBzZXRQcm9jZXNzZWREYXRhKFsuLi5wcm9jZXNzZWREYXRhLCB1c2VyRGF0YV0pO1xuICAgICAgICAgIHNldFByb21pc2VzKHsgY291bnQ6IHByb21pc2VzLmNvdW50ICsgMSwgc2l6ZToganNvbkRhdGEubGVuZ3RofSlcbiAgICAgICAgICByZXR1cm4gdXNlckRhdGE7XG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIHNldElzUGVuZGluZyhmYWxzZSk7XG5cbiAgICAgIGRpc3BhdGNoUnVucyh7XG4gICAgICAgIHR5cGU6ICdhcHBlbmQnLFxuICAgICAgICBpdGVtOiB7XG4gICAgICAgICAgdGltZXN0YW1wOiAobmV3IERhdGUoKSkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxOSksXG4gICAgICAgICAgZHVyYXRpb246IChuZXcgRGF0ZSgpKSAtIHN0YXJ0X3RpbWUsXG4gICAgICAgICAgZmlsZW5hbWU6IGZpbGUubmFtZSxcbiAgICAgICAgICBmaWxlU2l6ZTogZmlsZS5zaXplLFxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoZmlsZSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxuICAgICAgICAgIEV4cMOpcmltZW50YXRpb24gQXJkZW5uZXNcbiAgICAgICAgPC9oMT5cblxuICAgICAgICB7IWlzTG9nZ2VkICYmXG4gICAgICAgICAgPGRpdiBpZD1cImNyZWF0ZS1mb3Jtc1wiIGNsYXNzTmFtZT17c3R5bGVzLmNyZWF0ZX0+XG4gICAgICAgICAgICA8TG9naW5Gb3JtIG9uTG9naW49e29uTG9naW59IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cblxuICAgICAgICB7IGlzTG9nZ2VkICYmIDw+XG4gICAgICAgICAgPEZpbGVIYW5kbGVyIGZpbGVIYW5kbGVyPXtmaWxlSGFuZGxlcn0gaXNQZW5kaW5nPXtpc1BlbmRpbmd9IGZpbGVTaXplPXtmaWxlU2l6ZX0gLz5cblxuICAgICAgICAgIHsgdXNlcnNEYXRhICYmIDw+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuc3VidGl0bGV9PlxuICAgICAgICAgICAgICBCw6luw6lmaWNpYWlyZXMgUlNBXG4gICAgICAgICAgICA8L2gyPlxuXG4gICAgICAgICAgICB7IHVzZXJzRGF0YS5sZW5ndGggPT0gMCAmJlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+QXVjdW4gYsOpbsOpZmljaWFpcmUgZGFucyBsZSBmaWNoaWVyPC9wPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgeyB1c2Vyc0RhdGEubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5Ob208L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5QcsOpbm9tPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+TWFpbDwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPlTDqWzDqXBob25lPC90aD5cbiAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICB7dXNlcnNEYXRhLm1hcCgodXNlciwgaW5kZXgpID0+ICg8dHIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57dXNlcltcIk5PTVwiXX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3VzZXJbXCJQUkVOT01cIl19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPnt1c2VyW1wiTUFJTFwiXX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3VzZXJbXCJURUxFUEhPTkVcIl19PC90ZD5cbiAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8Lz59XG5cbiAgICAgICAgICA8Rm9vdGVyXG4gICAgICAgICAgICBzdWJqZWN0PVwiRXhww6lyaW1lbnRhdGlvbiBBcmRlbm5lc1wiXG4gICAgICAgICAgICBwb3VycXVvaT1cIlF1ZWwgZXN0IGwnb2JqZWN0aWYgZGUgY2V0dGUgZXhww6lyaW1lbnRhdGlvbiZuYnNwOz9cIlxuICAgICAgICAgICAgdGV4dD17PD5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+RmFjaWxpdGVyIGxlIHRyYXZhaWwgZGVzIGFnZW50cyBkdSBkw6lwYXJ0ZW1lbnQgZXQgdGVzdGVyIGwndXRpbGlzYXRpb24gZGUgbCdhcHBsaWNhdGlvbiBSRFYtU29saWRhcml0w6lzIHBvdXIgYWNjw6lsw6lyZXIgbGEgcHJpc2UgZHUgcHJlbWllciByZW5kZXotdm91cyBkJ29yaWVudGF0aW9uLjwvcD5cbiAgICAgICAgICAgIDwvPn1cbiAgICAgICAgICAvPlxuICAgICAgICA8Lz59XG4gICAgICA8L21haW4+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=