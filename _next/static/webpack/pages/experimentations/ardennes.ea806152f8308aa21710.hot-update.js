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

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_2__["useReducer"])(reducer, [], _lib_historique__WEBPACK_IMPORTED_MODULE_10__["initReducer"]),
      runs = _useReducer[0],
      dispatchRuns = _useReducer[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      usersData = _useState2[0],
      setUsersData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      processedData = _useState3[0],
      setProcessedData = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isPending = _useState4[0],
      setIsPending = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      fileSize = _useState5[0],
      setFileSize = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isLogged = _useState6[0],
      setIsLogged = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    "tokenId": '',
    uid: '',
    client: ''
  }),
      token = _useState7[0],
      setToken = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
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


  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (promises.size > 0 && promises.count == promises.size) {
      setUsersData(processedData);
      var outWorkbook = xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].book_new();
      var outWorksheet = xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].json_to_sheet(processedData);
      xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].book_append_sheet(outWorkbook, outWorksheet, "DIVERGENCES"); // XLSX.utils.book_append_sheet(outWorkbook, xls.Sheets[xls.SheetNames[1]], "GRAPHIQUE");
      // XLSX.utils.book_append_sheet(outWorkbook, xls.Sheets[xls.SheetNames[2]], "Selection COA");

      xlsx__WEBPACK_IMPORTED_MODULE_3__["writeFile"](outWorkbook, "ardennes_rsa_".concat(Object(_lib_cnaf__WEBPACK_IMPORTED_MODULE_9__["getFormattedTime"])(), ".xlsx"));
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
      setProcessedData(jsonData.map(function (userData) {
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
              setPromises({
                count: promises.count + 1,
                size: jsonData.length
              });
              return userData;
            } else {
              userData["Compte rdv"] = "Nope";
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
          setPromises({
            count: promises.count + 1,
            size: jsonData.length
          });
          return userData;
        }
      }));
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
        lineNumber: 146,
        columnNumber: 9
      }, this), !isLogged && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: "create-forms",
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.create,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_login_form__WEBPACK_IMPORTED_MODULE_7__["default"], {
          onLogin: onLogin
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 11
      }, this), isLogged && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_file__WEBPACK_IMPORTED_MODULE_5__["default"], {
          fileHandler: fileHandler,
          isPending: isPending,
          fileSize: fileSize
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 11
        }, this), usersData && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.subtitle,
            children: "B\xE9n\xE9ficiaires RSA"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 160,
            columnNumber: 13
          }, this), usersData.length == 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.description,
            children: "Aucun b\xE9n\xE9ficiaire dans le fichier"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 165,
            columnNumber: 15
          }, this), usersData.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                  rowSpan: "2",
                  children: "Nom"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 171,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                  rowSpan: "2",
                  children: "Pr\xE9nom"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 172,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                  rowSpan: "2",
                  children: "Mail"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 173,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                  rowSpan: "2",
                  children: "T\xE9l\xE9phone"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 174,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 170,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 169,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
              children: usersData.map(function (user, index) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                    children: user["NOM"]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 179,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                    children: user["PRENOM"]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 180,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                    children: user["MAIL"]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 181,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                    children: user["TELEPHONE"]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 182,
                    columnNumber: 21
                  }, _this)]
                }, index, true, {
                  fileName: _jsxFileName,
                  lineNumber: 178,
                  columnNumber: 52
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 177,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 168,
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
              lineNumber: 194,
              columnNumber: 15
            }, this)
          }, void 0, false)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 11
        }, this)]
      }, void 0, true)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 144,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXhwZXJpbWVudGF0aW9ucy9hcmRlbm5lcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJyZWR1Y2VyIiwicmVkdWNlckZhY3RvcnkiLCJkZXZNb2RlIiwiQXJkZW5uZXMiLCJ1c2VTdGF0ZSIsImRldkZpbGUiLCJzZXREZXZGaWxlIiwidXNlUmVkdWNlciIsImluaXRSZWR1Y2VyIiwicnVucyIsImRpc3BhdGNoUnVucyIsInVzZXJzRGF0YSIsInNldFVzZXJzRGF0YSIsInByb2Nlc3NlZERhdGEiLCJzZXRQcm9jZXNzZWREYXRhIiwiaXNQZW5kaW5nIiwic2V0SXNQZW5kaW5nIiwiZmlsZVNpemUiLCJzZXRGaWxlU2l6ZSIsImlzTG9nZ2VkIiwic2V0SXNMb2dnZWQiLCJ1aWQiLCJjbGllbnQiLCJ0b2tlbiIsInNldFRva2VuIiwiY291bnQiLCJzaXplIiwicHJvbWlzZXMiLCJzZXRQcm9taXNlcyIsIlJEVl9VUkwiLCJwcm9jZXNzIiwicGF0aCIsInVybCIsIm9uTG9naW4iLCJ0b2tlbklkIiwidXNlRWZmZWN0Iiwib3V0V29ya2Jvb2siLCJYTFNYIiwiYm9va19uZXciLCJvdXRXb3Jrc2hlZXQiLCJqc29uX3RvX3NoZWV0IiwiYm9va19hcHBlbmRfc2hlZXQiLCJnZXRGb3JtYXR0ZWRUaW1lIiwiZmlsZUhhbmRsZXIiLCJmaWxlIiwic3RhcnRfdGltZSIsIkRhdGUiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwiZXZlbnQiLCJmaWxlRGF0YSIsIlVpbnQ4QXJyYXkiLCJ0YXJnZXQiLCJyZXN1bHQiLCJ4bHMiLCJ0eXBlIiwid29ya3NoZWV0IiwiU2hlZXRzIiwiU2hlZXROYW1lcyIsInJhbmdlIiwiZGVjb2RlX3JhbmdlIiwicyIsImMiLCJlIiwibmV3X3JhbmdlIiwiZW5jb2RlX3JhbmdlIiwianNvbkRhdGEiLCJzaGVldF90b19qc29uIiwiYmxhbmtyb3dzIiwicmF3IiwiZGVmdmFsIiwibWFwIiwidXNlckRhdGEiLCJ1c2VyIiwiZmlyc3RfbmFtZSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJ0b0xvd2VyQ2FzZSIsImxhc3RfbmFtZSIsImVtYWlsIiwicGhvbmVfbnVtYmVyIiwicmVwbGFjZSIsIm9yZ2FuaXNhdGlvbl9pZHMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXNwb25zZSIsInN0YXR1cyIsImxlbmd0aCIsIml0ZW0iLCJ0aW1lc3RhbXAiLCJ0b0lTT1N0cmluZyIsImR1cmF0aW9uIiwiZmlsZW5hbWUiLCJuYW1lIiwicmVhZEFzQXJyYXlCdWZmZXIiLCJzdHlsZXMiLCJjb250YWluZXIiLCJtYWluIiwidGl0bGUiLCJjcmVhdGUiLCJzdWJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW5kZXgiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHQyx1RUFBYyxDQUFDLGdEQUFELENBQTlCO0FBQ0EsSUFBTUMsT0FBTyxPQUFiO0FBRWUsU0FBU0MsUUFBVCxHQUFvQjtBQUFBOztBQUFBOztBQUFBLGtCQUNIQyxzREFBUSxDQUFDLElBQUQsQ0FETDtBQUFBLE1BQzFCQyxPQUQwQjtBQUFBLE1BQ2pCQyxVQURpQjs7QUFBQSxvQkFFSkMsd0RBQVUsQ0FBQ1AsT0FBRCxFQUFVLEVBQVYsRUFBY1EsNERBQWQsQ0FGTjtBQUFBLE1BRTFCQyxJQUYwQjtBQUFBLE1BRXBCQyxZQUZvQjs7QUFBQSxtQkFHQ04sc0RBQVEsQ0FBQyxJQUFELENBSFQ7QUFBQSxNQUcxQk8sU0FIMEI7QUFBQSxNQUdmQyxZQUhlOztBQUFBLG1CQUlTUixzREFBUSxDQUFDLElBQUQsQ0FKakI7QUFBQSxNQUkxQlMsYUFKMEI7QUFBQSxNQUlYQyxnQkFKVzs7QUFBQSxt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QUFBLDhCQUFLbkMsSUFBSSxDQUFDLEtBQUQ7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUQrQixlQUUvQjtBQUFBLDhCQUFLQSxJQUFJLENBQUMsUUFBRDtBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRitCLGVBRy9CO0FBQUEsOEJBQUtBLElBQUksQ0FBQyxNQUFEO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFIK0IsZUFJL0I7QUFBQSw4QkFBS0EsSUFBSSxDQUFDLFdBQUQ7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUorQjtBQUFBLG1CQUFTbUMsS0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUFsQjtBQUFBLGVBQWQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFUVztBQUFBLHdCQUhILGVBa0NaLHFFQUFDLDBEQUFEO0FBQ0UsaUJBQU8sRUFBQyw2QkFEVjtBQUVFLGtCQUFRLEVBQUMsc0RBRlg7QUFHRSxjQUFJLGVBQUU7QUFBQSxtQ0FDSjtBQUFHLHVCQUFTLEVBQUVQLDhEQUFNLENBQUNRLElBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREk7QUFIUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWxDWTtBQUFBLHNCQVhoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUEwREQ7O0dBeEx1QjNHLFE7O0tBQUFBLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZXhwZXJpbWVudGF0aW9ucy9hcmRlbm5lcy5lYTgwNjE1MmY4MzA4YWEyMTcxMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29kZSBhdmVjIG9yZ2EgZml4ZSAoQXJkZW5uZXMpXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgKiBhcyBYTFNYIGZyb20gJ3hsc3gnO1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0J1xuaW1wb3J0IEZpbGVIYW5kbGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvZmlsZSdcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9mb290ZXInXG5pbXBvcnQgTG9naW5Gb3JtIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvbG9naW4tZm9ybSdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcblxuaW1wb3J0IHsgZ2V0Rm9ybWF0dGVkVGltZSB9IGZyb20gJy4uLy4uLy4uL2xpYi9jbmFmJ1xuaW1wb3J0IHsgaW5pdFJlZHVjZXIsIHJlZHVjZXJGYWN0b3J5IH0gZnJvbSAnLi4vLi4vLi4vbGliL2hpc3RvcmlxdWUnXG5cbmNvbnN0IHJlZHVjZXIgPSByZWR1Y2VyRmFjdG9yeSgnRXhww6lyaW1lbnRhdGlvbiBBcmRlbm5lcyAtIENOQUYgLSBCw6luw6lmaWNpYWlyZScpXG5jb25zdCBkZXZNb2RlID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT0gJ2RldmVsb3BtZW50J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcmRlbm5lcygpIHtcbiAgY29uc3QgW2RldkZpbGUsIHNldERldkZpbGVdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW3J1bnMsIGRpc3BhdGNoUnVuc10gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIFtdLCBpbml0UmVkdWNlcilcbiAgY29uc3QgW3VzZXJzRGF0YSwgc2V0VXNlcnNEYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbcHJvY2Vzc2VkRGF0YSwgc2V0UHJvY2Vzc2VkRGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2lzUGVuZGluZywgc2V0SXNQZW5kaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2ZpbGVTaXplLCBzZXRGaWxlU2l6ZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2lzTG9nZ2VkLCBzZXRJc0xvZ2dlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt0b2tlbiwgc2V0VG9rZW5dID0gdXNlU3RhdGUoe1xuICAgICAgICAgIFwidG9rZW5JZFwiOiAnJyxcbiAgICAgICAgICB1aWQ6ICcnLFxuICAgICAgICAgIGNsaWVudDogJydcbiAgfSk7XG4gIGNvbnN0IFtwcm9taXNlcywgc2V0UHJvbWlzZXNdID0gdXNlU3RhdGUoe1xuICAgIGNvdW50OiAwLFxuICAgIHNpemU6IDBcbiAgfSk7XG4gIGNvbnN0IFJEVl9VUkwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19SRFZfREVNT19VUkw7XG4gIGNvbnN0IHBhdGggPSAnL3VzZXJzJztcbiAgY29uc3QgdXJsID0gYCR7UkRWX1VSTH0vYXBpL3YxJHtwYXRofWA7XG5cblxuICBjb25zdCBvbkxvZ2luID0gKHRva2VuSWQsIHVpZCwgY2xpZW50KSA9PiB7XG4gICAgc2V0VG9rZW4oeyAuLi50b2tlbiwgdG9rZW5JZDogdG9rZW5JZCwgdWlkOiB1aWQsIGNsaWVudDogY2xpZW50IH0pO1xuICAgIHNldElzTG9nZ2VkKHRydWUpO1xuICB9O1xuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgaWYoZGV2RmlsZSkge1xuICAvLyAgICAgZmlsZUhhbmRsZXIoZGV2RmlsZSlcbiAgLy8gICB9XG4gIC8vIH0sIFtkZXZGaWxlXSlcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocHJvbWlzZXMuc2l6ZSA+IDAgJiYgcHJvbWlzZXMuY291bnQgPT0gcHJvbWlzZXMuc2l6ZSkge1xuICAgICAgc2V0VXNlcnNEYXRhKHByb2Nlc3NlZERhdGEpO1xuICAgICAgY29uc3Qgb3V0V29ya2Jvb2sgPSBYTFNYLnV0aWxzLmJvb2tfbmV3KCk7XG4gICAgICBjb25zdCBvdXRXb3Jrc2hlZXQgPSBYTFNYLnV0aWxzLmpzb25fdG9fc2hlZXQocHJvY2Vzc2VkRGF0YSk7XG4gICAgICBYTFNYLnV0aWxzLmJvb2tfYXBwZW5kX3NoZWV0KG91dFdvcmtib29rLCBvdXRXb3Jrc2hlZXQsIFwiRElWRVJHRU5DRVNcIik7XG4gICAgICAvLyBYTFNYLnV0aWxzLmJvb2tfYXBwZW5kX3NoZWV0KG91dFdvcmtib29rLCB4bHMuU2hlZXRzW3hscy5TaGVldE5hbWVzWzFdXSwgXCJHUkFQSElRVUVcIik7XG4gICAgICAvLyBYTFNYLnV0aWxzLmJvb2tfYXBwZW5kX3NoZWV0KG91dFdvcmtib29rLCB4bHMuU2hlZXRzW3hscy5TaGVldE5hbWVzWzJdXSwgXCJTZWxlY3Rpb24gQ09BXCIpO1xuICAgICAgWExTWC53cml0ZUZpbGUob3V0V29ya2Jvb2ssIGBhcmRlbm5lc19yc2FfJHtnZXRGb3JtYXR0ZWRUaW1lKCl9Lnhsc3hgKVxuICAgIH1cbiAgfSwgW3Byb21pc2VzXSlcblxuICBjb25zdCBmaWxlSGFuZGxlciA9IChmaWxlKSA9PiB7XG4gICAgaWYgKGRldk1vZGUgJiYgZmlsZSAhPSBkZXZGaWxlKSB7XG4gICAgICBzZXREZXZGaWxlKGZpbGUpXG4gICAgfVxuICAgIHNldEZpbGVTaXplKGZpbGUuc2l6ZSk7XG4gICAgc2V0SXNQZW5kaW5nKHRydWUpO1xuICAgIGNvbnN0IHN0YXJ0X3RpbWUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcbiAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBjb25zdCBmaWxlRGF0YSA9IG5ldyBVaW50OEFycmF5KGV2ZW50LnRhcmdldC5yZXN1bHQpO1xuICAgICAgY29uc3QgeGxzID0gWExTWC5yZWFkKGZpbGVEYXRhLCB7dHlwZTonYXJyYXknfSlcbiAgICAgIC8qIEdldCBmaXJzdCB3b3Jrc2hlZXQgKi9cbiAgICAgIGNvbnN0IHdvcmtzaGVldCA9IHhscy5TaGVldHNbeGxzLlNoZWV0TmFtZXNbMF1dO1xuICAgICAgLy8gTGltaXRlciBsYSBjYXB0dXJlIGF1eCBjb2xvbm5lcyBBLVRcbiAgICAgIGNvbnN0IHJhbmdlID0gWExTWC51dGlscy5kZWNvZGVfcmFuZ2Uod29ya3NoZWV0WychcmVmJ10pO1xuICAgICAgcmFuZ2Uucy5jID0gMDsgLy8gMCA9PSBYTFNYLnV0aWxzLmRlY29kZV9jb2woXCJBXCIpXG4gICAgICByYW5nZS5lLmMgPSAxOTsgLy8gMTkgPT0gWExTWC51dGlscy5kZWNvZGVfY29sKFwiVFwiKVxuICAgICAgY29uc3QgbmV3X3JhbmdlID0gWExTWC51dGlscy5lbmNvZGVfcmFuZ2UocmFuZ2UpO1xuICAgICAgLyogQ29udmVydCBhcnJheSB0byBqc29uKi9cbiAgICAgIGNvbnN0IGpzb25EYXRhID0gWExTWC51dGlscy5zaGVldF90b19qc29uKHdvcmtzaGVldCwgeyBibGFua3Jvd3M6IGZhbHNlLCByYXc6IGZhbHNlLCBkZWZ2YWw6IG51bGwsIHJhbmdlOiBuZXdfcmFuZ2UgfSk7XG4gICAgICBzZXRQcm9jZXNzZWREYXRhKFxuICAgICAgICBqc29uRGF0YS5tYXAodXNlckRhdGEgPT4ge1xuICAgICAgICAgIGlmICh1c2VyRGF0YVtcIkNvbXB0ZSByZHZcIl0gIT0gXCJPXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHVzZXIgPSB7IGZpcnN0X25hbWU6IHVzZXJEYXRhW1wiUFJFTk9NXCJdLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdXNlckRhdGFbXCJQUkVOT01cIl0uc2xpY2UoMSkudG9Mb3dlckNhc2UoKSwgbGFzdF9uYW1lOiB1c2VyRGF0YVtcIk5PTVwiXS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHVzZXJEYXRhW1wiTk9NXCJdLnNsaWNlKDEpLnRvTG93ZXJDYXNlKCksIGVtYWlsOiB1c2VyRGF0YVtcIk1BSUxcIl0sIHBob25lX251bWJlcjogdXNlckRhdGFbXCJURUxFUEhPTkVcIl0ucmVwbGFjZSgvXFxzKy9nLCAnJyksIG9yZ2FuaXNhdGlvbl9pZHM6IFsxXSB9O1xuICAgICAgICAgICAgZmV0Y2godXJsLCB7XG4gICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICBcImFjY2Vzcy10b2tlblwiOiB0b2tlbi50b2tlbklkLFxuICAgICAgICAgICAgICAgIHVpZDogdG9rZW4udWlkLFxuICAgICAgICAgICAgICAgIGNsaWVudDogdG9rZW4uY2xpZW50XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHVzZXIpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLy8gQ29tcHRlciBsZSBub21icmUgZGUgY29tcHRlcyBjcsOpw6lzIGV0IGxlIG5vbWJyZSBkZSBmYWlsID8gRXQgbG9nZ2VyIHBvdXIgbGVzIGZhaWxzIHBvdXIgaW5kaXF1ZXIgcXVpIGEgZmFpbCA/XG5cbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICB1c2VyRGF0YVtcIkNvbXB0ZSByZHZcIl0gPSBcIk9cIjtcbiAgICAgICAgICAgICAgICB1c2VyRGF0YVtcIlJEViBwcmlzXCJdID0gXCJOXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldFByb21pc2VzKHsgY291bnQ6IHByb21pc2VzLmNvdW50ICsgMSwgc2l6ZToganNvbkRhdGEubGVuZ3RofSlcbiAgICAgICAgICByZXR1cm4gdXNlckRhdGE7XG5cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB1c2VyRGF0YVtcIkNvbXB0ZSByZHZcIl0gPSBcIk5vcGVcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UHJvbWlzZXMoeyBjb3VudDogcHJvbWlzZXMuY291bnQgKyAxLCBzaXplOiBqc29uRGF0YS5sZW5ndGh9KVxuICAgICAgICAgIHJldHVybiB1c2VyRGF0YTtcblxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLy8gUsOpY3Vww6lyZXIgbGUgdG9rZW4gZCdpbnZpdGF0aW9uXG4gICAgICAgICAgICAvLyBFbnZveWVyIGxlIG1haWwgw6AgbGEgcGxhY2UgZCdJc2FiZWxsZVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodXNlckRhdGFbXCJSRFYgcHJpc1wiXSAhPSBcIk9cIikge1xuICAgICAgICAgICAgICAvLyBWw6lyaWZpZXIgc2kgbCd1dGlsaXNhdGV1ciBhIHByaXMgdW4gcmR2XG4gICAgICAgICAgICAgIC8vIHNpIG91aSA9PiB1c2VyRGF0YVtcIlJEViBwcmlzXCJdID0gXCJPXCI7XG4gICAgICAgICAgICAgIC8vIHNpIG5vbiA9PiB1c2VyRGF0YVtcIlJEViBwcmlzXCJdID0gXCJOXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1c2VyRGF0YVtcIlJEViBwcmlzXCJdID0gXCJOXCI7XG4gICAgICAgICAgICAgICAgICAgICAgc2V0UHJvbWlzZXMoeyBjb3VudDogcHJvbWlzZXMuY291bnQgKyAxLCBzaXplOiBqc29uRGF0YS5sZW5ndGh9KVxuICAgICAgICAgIHJldHVybiB1c2VyRGF0YTtcblxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIClcblxuICAgICAgc2V0SXNQZW5kaW5nKGZhbHNlKTtcblxuICAgICAgZGlzcGF0Y2hSdW5zKHtcbiAgICAgICAgdHlwZTogJ2FwcGVuZCcsXG4gICAgICAgIGl0ZW06IHtcbiAgICAgICAgICB0aW1lc3RhbXA6IChuZXcgRGF0ZSgpKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDE5KSxcbiAgICAgICAgICBkdXJhdGlvbjogKG5ldyBEYXRlKCkpIC0gc3RhcnRfdGltZSxcbiAgICAgICAgICBmaWxlbmFtZTogZmlsZS5uYW1lLFxuICAgICAgICAgIGZpbGVTaXplOiBmaWxlLnNpemUsXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihmaWxlKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPExheW91dCBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XG4gICAgICAgICAgRXhww6lyaW1lbnRhdGlvbiBBcmRlbm5lc1xuICAgICAgICA8L2gxPlxuXG4gICAgICAgIHshaXNMb2dnZWQgJiZcbiAgICAgICAgICA8ZGl2IGlkPVwiY3JlYXRlLWZvcm1zXCIgY2xhc3NOYW1lPXtzdHlsZXMuY3JlYXRlfT5cbiAgICAgICAgICAgIDxMb2dpbkZvcm0gb25Mb2dpbj17b25Mb2dpbn0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuXG4gICAgICAgIHsgaXNMb2dnZWQgJiYgPD5cbiAgICAgICAgICA8RmlsZUhhbmRsZXIgZmlsZUhhbmRsZXI9e2ZpbGVIYW5kbGVyfSBpc1BlbmRpbmc9e2lzUGVuZGluZ30gZmlsZVNpemU9e2ZpbGVTaXplfSAvPlxuXG4gICAgICAgICAgeyB1c2Vyc0RhdGEgJiYgPD5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5zdWJ0aXRsZX0+XG4gICAgICAgICAgICAgIELDqW7DqWZpY2lhaXJlcyBSU0FcbiAgICAgICAgICAgIDwvaDI+XG5cbiAgICAgICAgICAgIHsgdXNlcnNEYXRhLmxlbmd0aCA9PSAwICYmXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5BdWN1biBiw6luw6lmaWNpYWlyZSBkYW5zIGxlIGZpY2hpZXI8L3A+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB7IHVzZXJzRGF0YS5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICAgIDx0YWJsZT5cbiAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPk5vbTwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPlByw6lub208L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5NYWlsPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+VMOpbMOpcGhvbmU8L3RoPlxuICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgIHt1c2Vyc0RhdGEubWFwKCh1c2VyLCBpbmRleCkgPT4gKDx0ciBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgPHRkPnt1c2VyW1wiTk9NXCJdfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57dXNlcltcIlBSRU5PTVwiXX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3VzZXJbXCJNQUlMXCJdfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57dXNlcltcIlRFTEVQSE9ORVwiXX08L3RkPlxuICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvPn1cblxuICAgICAgICAgIDxGb290ZXJcbiAgICAgICAgICAgIHN1YmplY3Q9XCJFeHDDqXJpbWVudGF0aW9uIEFyZGVubmVzXCJcbiAgICAgICAgICAgIHBvdXJxdW9pPVwiUXVlbCBlc3QgbCdvYmplY3RpZiBkZSBjZXR0ZSBleHDDqXJpbWVudGF0aW9uJm5ic3A7P1wiXG4gICAgICAgICAgICB0ZXh0PXs8PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5GYWNpbGl0ZXIgbGUgdHJhdmFpbCBkZXMgYWdlbnRzIGR1IGTDqXBhcnRlbWVudCBldCB0ZXN0ZXIgbCd1dGlsaXNhdGlvbiBkZSBsJ2FwcGxpY2F0aW9uIFJEVi1Tb2xpZGFyaXTDqXMgcG91ciBhY2PDqWzDqXJlciBsYSBwcmlzZSBkdSBwcmVtaWVyIHJlbmRlei12b3VzIGQnb3JpZW50YXRpb24uPC9wPlxuICAgICAgICAgICAgPC8+fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvPn1cbiAgICAgIDwvbWFpbj5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==