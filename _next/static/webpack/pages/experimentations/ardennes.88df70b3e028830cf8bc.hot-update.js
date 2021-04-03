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
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
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

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// Pensez à vérifier l'ID de l'organisation
// Rajouter toutes les infos sur l'utilisateur dispo dans le fichier d'Isabelle
// Récupérer le token d'invitation
// Proposer d'envoyer le mail
// Envoyer le mail à la place d'Isabelle
// Mettre un cookie de session pour le login ?









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

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isPending = _useState3[0],
      setIsPending = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      fileSize = _useState4[0],
      setFileSize = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isLogged = _useState5[0],
      setIsLogged = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    "tokenId": '',
    uid: '',
    client: ''
  }),
      token = _useState6[0],
      setToken = _useState6[1];

  var RDV_URL = "http://localhost:5000";
  var path = '/users';
  var url = "".concat(RDV_URL, "/api/v1").concat(path);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (devFile) {
      fileHandler(devFile);
    }
  }, [devFile]);

  var fileWriter = function fileWriter() {
    var outWorkbook = xlsx__WEBPACK_IMPORTED_MODULE_4__["utils"].book_new();
    var outWorksheet = xlsx__WEBPACK_IMPORTED_MODULE_4__["utils"].json_to_sheet(usersData);
    xlsx__WEBPACK_IMPORTED_MODULE_4__["utils"].book_append_sheet(outWorkbook, outWorksheet, "DIVERGENCES"); // XLSX.utils.book_append_sheet(outWorkbook, xls.Sheets[xls.SheetNames[1]], "GRAPHIQUE");
    // XLSX.utils.book_append_sheet(outWorkbook, xls.Sheets[xls.SheetNames[2]], "Selection COA");

    xlsx__WEBPACK_IMPORTED_MODULE_4__["writeFile"](outWorkbook, "ardennes_rsa_".concat(Object(_lib_cnaf__WEBPACK_IMPORTED_MODULE_10__["getFormattedTime"])(), ".xlsx"));
  };

  var createUser = function createUser(userData, i) {
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
    }).then(function (response) {
      return response.json();
    }).then(function (result) {
      var usersdata = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(usersData);

      if (result.success) {
        usersdata[i]["ID RDV"] = result.user.id;
        setUsersData(usersdata);
      } else if (result.errors.email && result.errors.email[0].error === "taken") {
        usersdata[i]["ID RDV"] = result.errors.email[0].id;
        setUsersData(usersdata);
        alert("Un compte associé à cet email existe déjà");
      } else if (result.errors.email && result.errors.email[0].error === "invalid") {
        alert("L'adresse mail n'est pas valide");
      } else if (result.errors && result.errors[0]) {
        alert(result.errors[0]);
      }
    })["catch"](function (error) {
      return alert(error);
    });
  };

  var onLogin = function onLogin(tokenId, uid, client) {
    setToken(_objectSpread(_objectSpread({}, token), {}, {
      tokenId: tokenId,
      uid: uid,
      client: client
    }));
    setIsLogged(true);
  };

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
        defval: "",
        range: new_range
      });
      setUsersData(jsonData);
      setIsPending(false);
      dispatchRuns({
        type: 'append',
        item: {
          timestamp: new Date().toISOString().slice(0, 19),
          duration: new Date() - start_time,
          filename: file.name,
          fileSize: file.size,
          fileLines: jsonData.length
        }
      });
    };

    reader.readAsArrayBuffer(file);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.container,
    fileHandler: fileHandler,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.main,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.title,
        children: "Exp\xE9rimentation Ardennes"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 9
      }, this), !isLogged && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: "create-forms",
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.create,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_login_form__WEBPACK_IMPORTED_MODULE_8__["default"], {
          onLogin: onLogin
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 11
      }, this), isLogged && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_file__WEBPACK_IMPORTED_MODULE_6__["default"], {
          fileHandler: fileHandler,
          isPending: isPending,
          fileSize: fileSize
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 11
        }, this), usersData && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.subtitle,
            children: "B\xE9n\xE9ficiaires RSA"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 13
          }, this), usersData.length == 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.description,
            children: "Aucun b\xE9n\xE9ficiaire dans le fichier"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 15
          }, this), usersData.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    rowSpan: "2",
                    children: "Nom"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 158,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    rowSpan: "2",
                    children: "Pr\xE9nom"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 159,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    rowSpan: "2",
                    children: "Mail"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 160,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    rowSpan: "2",
                    children: "T\xE9l\xE9phone"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 161,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    rowSpan: "2",
                    children: "ID RDV-Solidarit\xE9s"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 162,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 157,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 164,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 156,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
                children: usersData.map(function (user, index) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.center,
                      children: user["NOM"]
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 168,
                      columnNumber: 21
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.center,
                      children: user["PRENOM"]
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 169,
                      columnNumber: 21
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.center,
                      children: user["MAIL"]
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 170,
                      columnNumber: 21
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.center,
                      children: user["TELEPHONE"]
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 171,
                      columnNumber: 21
                    }, _this), user["ID RDV"] != "" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.center,
                      children: user["ID RDV"]
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 173,
                      columnNumber: 23
                    }, _this), user["ID RDV"] == "" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.center,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                        onClick: function onClick() {
                          return createUser(user, index);
                        },
                        children: "Cr\xE9er un compte"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 176,
                        columnNumber: 53
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 176,
                      columnNumber: 23
                    }, _this)]
                  }, index, true, {
                    fileName: _jsxFileName,
                    lineNumber: 167,
                    columnNumber: 52
                  }, _this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 166,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 155,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              onClick: fileWriter,
              children: "Reg\xE9n\xE9rer fichier"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 183,
              columnNumber: 15
            }, this)]
          }, void 0, true)]
        }, void 0, true)]
      }, void 0, true), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
        subject: "Exp\xE9rimentation Ardennes",
        pourquoi: "Quel est l'objectif de cette exp\xE9rimentation\xA0?",
        text: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.text,
            children: "Faciliter le travail des agents du d\xE9partement et tester l'utilisation de l'application RDV-Solidarit\xE9s pour acc\xE9l\xE9rer la prise du premier rendez-vous d'orientation."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 192,
            columnNumber: 13
          }, this)
        }, void 0, false)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 130,
    columnNumber: 5
  }, this);
}

_s(Ardennes, "lziIpI3ElEFzEb/SNsVprtRfmeM=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXhwZXJpbWVudGF0aW9ucy9hcmRlbm5lcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJyZWR1Y2VyIiwicmVkdWNlckZhY3RvcnkiLCJkZXZNb2RlIiwiQXJkZW5uZXMiLCJ1c2VTdGF0ZSIsImRldkZpbGUiLCJzZXREZXZGaWxlIiwidXNlUmVkdWNlciIsImluaXRSZWR1Y2VyIiwicnVucyIsImRpc3BhdGNoUnVucyIsInVzZXJzRGF0YSIsInNldFVzZXJzRGF0YSIsImlzUGVuZGluZyIsInNldElzUGVuZGluZyIsImZpbGVTaXplIiwic2V0RmlsZVNpemUiLCJpc0xvZ2dlZCIsInNldElzTG9nZ2VkIiwidWlkIiwiY2xpZW50IiwidG9rZW4iLCJzZXRUb2tlbiIsIlJEVl9VUkwiLCJwcm9jZXNzIiwicGF0aCIsInVybCIsInVzZUVmZmVjdCIsImZpbGVIYW5kbGVyIiwiZmlsZVdyaXRlciIsIm91dFdvcmtib29rIiwiWExTWCIsImJvb2tfbmV3Iiwib3V0V29ya3NoZWV0IiwianNvbl90b19zaGVldCIsImJvb2tfYXBwZW5kX3NoZWV0IiwiZ2V0Rm9ybWF0dGVkVGltZSIsImNyZWF0ZVVzZXIiLCJ1c2VyRGF0YSIsImkiLCJ1c2VyIiwiZmlyc3RfbmFtZSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJ0b0xvd2VyQ2FzZSIsImxhc3RfbmFtZSIsImVtYWlsIiwicGhvbmVfbnVtYmVyIiwicmVwbGFjZSIsIm9yZ2FuaXNhdGlvbl9pZHMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJ0b2tlbklkIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwicmVzdWx0IiwidXNlcnNkYXRhIiwic3VjY2VzcyIsImlkIiwiZXJyb3JzIiwiZXJyb3IiLCJhbGVydCIsIm9uTG9naW4iLCJmaWxlIiwic2l6ZSIsInN0YXJ0X3RpbWUiLCJEYXRlIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsImV2ZW50IiwiZmlsZURhdGEiLCJVaW50OEFycmF5IiwidGFyZ2V0IiwieGxzIiwidHlwZSIsIndvcmtzaGVldCIsIlNoZWV0cyIsIlNoZWV0TmFtZXMiLCJyYW5nZSIsImRlY29kZV9yYW5nZSIsInMiLCJjIiwiZSIsIm5ld19yYW5nZSIsImVuY29kZV9yYW5nZSIsImpzb25EYXRhIiwic2hlZXRfdG9fanNvbiIsImJsYW5rcm93cyIsInJhdyIsImRlZnZhbCIsIml0ZW0iLCJ0aW1lc3RhbXAiLCJ0b0lTT1N0cmluZyIsImR1cmF0aW9uIiwiZmlsZW5hbWUiLCJuYW1lIiwiZmlsZUxpbmVzIiwibGVuZ3RoIiwicmVhZEFzQXJyYXlCdWZmZXIiLCJzdHlsZXMiLCJjb250YWluZXIiLCJtYWluIiwidGl0bGUiLCJjcmVhdGUiLCJzdWJ0aXRsZSIsImRlc2NyaXB0aW9uIiwibWFwIiwiaW5kZXgiLCJjZW50ZXIiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHQyx1RUFBYyxDQUFDLGdEQUFELENBQTlCO0FBQ0EsSUFBTUMsT0FBTyxPQUFiO0FBRWUsU0FBU0MsUUFBVCxHQUFvQjtBQUFBOztBQUFBOztBQUFBLGtCQUNIQyxzREFBUSxDQUFDLElBQUQsQ0FETDtBQUFBLE1BQzFCQyxPQUQwQjtBQUFBLE1BQ2pCQyxVQURpQjs7QUFBQSxvQkFFSkMsd0RBQVUsQ0FBQ1AsT0FBRCxFQUFVLEVBQVYsRUFBY1EsNERBQWQsQ0FGTjtBQUFBLE1BRTFCQyxJQUYwQjtBQUFBLE1BRXBCQyxZQUZvQjs7QUFBQSxtQkFHQ04sc0RBQVEsQ0FBQyxJQUFELENBSFQ7QUFBQSxNQUcxQk8sU0FIMEI7QUFBQSxNQUdmQyxZQUhlOztBQUFBLG1CQUlDUixzREFB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QUEscUJBQVNBLEtBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFBbEI7QUFBQSxpQkFBZDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUR3QixlQTZCeEI7QUFBUSxxQkFBTyxFQUFFckYsVUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBN0J3QjtBQUFBLDBCQVJiO0FBQUEsd0JBSko7QUFBQSxzQkFYZixlQXlERSxxRUFBQywwREFBRDtBQUNFLGVBQU8sRUFBQyw2QkFEVjtBQUVFLGdCQUFRLEVBQUMsc0RBRlg7QUFHRSxZQUFJLGVBQUU7QUFBQSxpQ0FDSjtBQUFHLHFCQUFTLEVBQUU2RSw4REFBTSxDQUFDVSxJQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURJO0FBSFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXpERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFxRUQ7O0dBL0t1QmpILFE7O0tBQUFBLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZXhwZXJpbWVudGF0aW9ucy9hcmRlbm5lcy44OGRmNzBiM2UwMjg4MzBjZjhiYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gUGVuc2V6IMOgIHbDqXJpZmllciBsJ0lEIGRlIGwnb3JnYW5pc2F0aW9uXG4vLyBSYWpvdXRlciB0b3V0ZXMgbGVzIGluZm9zIHN1ciBsJ3V0aWxpc2F0ZXVyIGRpc3BvIGRhbnMgbGUgZmljaGllciBkJ0lzYWJlbGxlXG4vLyBSw6ljdXDDqXJlciBsZSB0b2tlbiBkJ2ludml0YXRpb25cbi8vIFByb3Bvc2VyIGQnZW52b3llciBsZSBtYWlsXG4vLyBFbnZveWVyIGxlIG1haWwgw6AgbGEgcGxhY2UgZCdJc2FiZWxsZVxuLy8gTWV0dHJlIHVuIGNvb2tpZSBkZSBzZXNzaW9uIHBvdXIgbGUgbG9naW4gP1xuXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgKiBhcyBYTFNYIGZyb20gJ3hsc3gnO1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0J1xuaW1wb3J0IEZpbGVIYW5kbGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvZmlsZSdcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9mb290ZXInXG5pbXBvcnQgTG9naW5Gb3JtIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvbG9naW4tZm9ybSdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcblxuaW1wb3J0IHsgZ2V0Rm9ybWF0dGVkVGltZSB9IGZyb20gJy4uLy4uLy4uL2xpYi9jbmFmJ1xuaW1wb3J0IHsgaW5pdFJlZHVjZXIsIHJlZHVjZXJGYWN0b3J5IH0gZnJvbSAnLi4vLi4vLi4vbGliL2hpc3RvcmlxdWUnXG5cbmNvbnN0IHJlZHVjZXIgPSByZWR1Y2VyRmFjdG9yeSgnRXhww6lyaW1lbnRhdGlvbiBBcmRlbm5lcyAtIENOQUYgLSBCw6luw6lmaWNpYWlyZScpXG5jb25zdCBkZXZNb2RlID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT0gJ2RldmVsb3BtZW50J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcmRlbm5lcygpIHtcbiAgY29uc3QgW2RldkZpbGUsIHNldERldkZpbGVdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW3J1bnMsIGRpc3BhdGNoUnVuc10gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIFtdLCBpbml0UmVkdWNlcilcbiAgY29uc3QgW3VzZXJzRGF0YSwgc2V0VXNlcnNEYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbaXNQZW5kaW5nLCBzZXRJc1BlbmRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZmlsZVNpemUsIHNldEZpbGVTaXplXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbaXNMb2dnZWQsIHNldElzTG9nZ2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Rva2VuLCBzZXRUb2tlbl0gPSB1c2VTdGF0ZSh7XG4gICAgICAgICAgXCJ0b2tlbklkXCI6ICcnLFxuICAgICAgICAgIHVpZDogJycsXG4gICAgICAgICAgY2xpZW50OiAnJ1xuICB9KTtcbiAgY29uc3QgUkRWX1VSTCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1JEVl9ERU1PX1VSTDtcbiAgY29uc3QgcGF0aCA9ICcvdXNlcnMnO1xuICBjb25zdCB1cmwgPSBgJHtSRFZfVVJMfS9hcGkvdjEke3BhdGh9YDtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmKGRldkZpbGUpIHtcbiAgICAgIGZpbGVIYW5kbGVyKGRldkZpbGUpXG4gICAgfVxuICB9LCBbZGV2RmlsZV0pXG5cbiAgY29uc3QgZmlsZVdyaXRlciA9ICgpID0+IHtcbiAgICBjb25zdCBvdXRXb3JrYm9vayA9IFhMU1gudXRpbHMuYm9va19uZXcoKTtcbiAgICBjb25zdCBvdXRXb3Jrc2hlZXQgPSBYTFNYLnV0aWxzLmpzb25fdG9fc2hlZXQodXNlcnNEYXRhKTtcbiAgICBYTFNYLnV0aWxzLmJvb2tfYXBwZW5kX3NoZWV0KG91dFdvcmtib29rLCBvdXRXb3Jrc2hlZXQsIFwiRElWRVJHRU5DRVNcIik7XG4gICAgLy8gWExTWC51dGlscy5ib29rX2FwcGVuZF9zaGVldChvdXRXb3JrYm9vaywgeGxzLlNoZWV0c1t4bHMuU2hlZXROYW1lc1sxXV0sIFwiR1JBUEhJUVVFXCIpO1xuICAgIC8vIFhMU1gudXRpbHMuYm9va19hcHBlbmRfc2hlZXQob3V0V29ya2Jvb2ssIHhscy5TaGVldHNbeGxzLlNoZWV0TmFtZXNbMl1dLCBcIlNlbGVjdGlvbiBDT0FcIik7XG4gICAgWExTWC53cml0ZUZpbGUob3V0V29ya2Jvb2ssIGBhcmRlbm5lc19yc2FfJHtnZXRGb3JtYXR0ZWRUaW1lKCl9Lnhsc3hgKVxuICB9XG5cbiAgY29uc3QgY3JlYXRlVXNlciA9ICh1c2VyRGF0YSwgaSkgPT4ge1xuICAgIGNvbnN0IHVzZXIgPSB7IGZpcnN0X25hbWU6IHVzZXJEYXRhW1wiUFJFTk9NXCJdLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdXNlckRhdGFbXCJQUkVOT01cIl0uc2xpY2UoMSkudG9Mb3dlckNhc2UoKSwgbGFzdF9uYW1lOiB1c2VyRGF0YVtcIk5PTVwiXS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHVzZXJEYXRhW1wiTk9NXCJdLnNsaWNlKDEpLnRvTG93ZXJDYXNlKCksIGVtYWlsOiB1c2VyRGF0YVtcIk1BSUxcIl0sIHBob25lX251bWJlcjogdXNlckRhdGFbXCJURUxFUEhPTkVcIl0ucmVwbGFjZSgvXFxzKy9nLCAnJyksIG9yZ2FuaXNhdGlvbl9pZHM6IFsxXSB9O1xuICAgIGZldGNoKHVybCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIFwiYWNjZXNzLXRva2VuXCI6IHRva2VuLnRva2VuSWQsXG4gICAgICAgIHVpZDogdG9rZW4udWlkLFxuICAgICAgICBjbGllbnQ6IHRva2VuLmNsaWVudFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHVzZXIpXG4gICAgfSlcblxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgbGV0IHVzZXJzZGF0YSA9IFsuLi51c2Vyc0RhdGFdO1xuICAgICAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICAgIHVzZXJzZGF0YVtpXVtcIklEIFJEVlwiXSA9IHJlc3VsdC51c2VyLmlkXG4gICAgICAgIHNldFVzZXJzRGF0YSh1c2Vyc2RhdGEpO1xuICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZXJyb3JzLmVtYWlsICYmIHJlc3VsdC5lcnJvcnMuZW1haWxbMF0uZXJyb3IgPT09IFwidGFrZW5cIikge1xuICAgICAgICB1c2Vyc2RhdGFbaV1bXCJJRCBSRFZcIl0gPSByZXN1bHQuZXJyb3JzLmVtYWlsWzBdLmlkXG4gICAgICAgIHNldFVzZXJzRGF0YSh1c2Vyc2RhdGEpO1xuICAgICAgICBhbGVydChcIlVuIGNvbXB0ZSBhc3NvY2nDqSDDoCBjZXQgZW1haWwgZXhpc3RlIGTDqWrDoFwiKVxuICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZXJyb3JzLmVtYWlsICYmIHJlc3VsdC5lcnJvcnMuZW1haWxbMF0uZXJyb3IgPT09IFwiaW52YWxpZFwiKSB7XG4gICAgICAgIGFsZXJ0KFwiTCdhZHJlc3NlIG1haWwgbidlc3QgcGFzIHZhbGlkZVwiKVxuICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZXJyb3JzICYmIHJlc3VsdC5lcnJvcnNbMF0pIHtcbiAgICAgICAgYWxlcnQocmVzdWx0LmVycm9yc1swXSlcbiAgICAgIH1cbiAgICB9KVxuICAgIC5jYXRjaChlcnJvciA9PiBhbGVydChlcnJvcikpXG4gIH1cblxuICBjb25zdCBvbkxvZ2luID0gKHRva2VuSWQsIHVpZCwgY2xpZW50KSA9PiB7XG4gICAgc2V0VG9rZW4oeyAuLi50b2tlbiwgdG9rZW5JZDogdG9rZW5JZCwgdWlkOiB1aWQsIGNsaWVudDogY2xpZW50IH0pO1xuICAgIHNldElzTG9nZ2VkKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IGZpbGVIYW5kbGVyID0gKGZpbGUpID0+IHtcbiAgICBpZiAoZGV2TW9kZSAmJiBmaWxlICE9IGRldkZpbGUpIHtcbiAgICAgIHNldERldkZpbGUoZmlsZSlcbiAgICB9XG4gICAgc2V0RmlsZVNpemUoZmlsZS5zaXplKTtcbiAgICBzZXRJc1BlbmRpbmcodHJ1ZSk7XG4gICAgY29uc3Qgc3RhcnRfdGltZSA9IG5ldyBEYXRlKCk7XG5cbiAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGNvbnN0IGZpbGVEYXRhID0gbmV3IFVpbnQ4QXJyYXkoZXZlbnQudGFyZ2V0LnJlc3VsdCk7XG4gICAgICBjb25zdCB4bHMgPSBYTFNYLnJlYWQoZmlsZURhdGEsIHt0eXBlOidhcnJheSd9KVxuICAgICAgLyogR2V0IGZpcnN0IHdvcmtzaGVldCAqL1xuICAgICAgY29uc3Qgd29ya3NoZWV0ID0geGxzLlNoZWV0c1t4bHMuU2hlZXROYW1lc1swXV07XG4gICAgICAvLyBMaW1pdGVyIGxhIGNhcHR1cmUgYXV4IGNvbG9ubmVzIEEtVFxuICAgICAgY29uc3QgcmFuZ2UgPSBYTFNYLnV0aWxzLmRlY29kZV9yYW5nZSh3b3Jrc2hlZXRbJyFyZWYnXSk7XG4gICAgICByYW5nZS5zLmMgPSAwOyAvLyAwID09IFhMU1gudXRpbHMuZGVjb2RlX2NvbChcIkFcIilcbiAgICAgIHJhbmdlLmUuYyA9IDE5OyAvLyAxOSA9PSBYTFNYLnV0aWxzLmRlY29kZV9jb2woXCJUXCIpXG4gICAgICBjb25zdCBuZXdfcmFuZ2UgPSBYTFNYLnV0aWxzLmVuY29kZV9yYW5nZShyYW5nZSk7XG4gICAgICAvKiBDb252ZXJ0IGFycmF5IHRvIGpzb24qL1xuICAgICAgY29uc3QganNvbkRhdGEgPSBYTFNYLnV0aWxzLnNoZWV0X3RvX2pzb24od29ya3NoZWV0LCB7IGJsYW5rcm93czogZmFsc2UsIHJhdzogZmFsc2UsIGRlZnZhbDogXCJcIiwgcmFuZ2U6IG5ld19yYW5nZSB9KTtcbiAgICAgIHNldFVzZXJzRGF0YShqc29uRGF0YSk7XG4gICAgICBzZXRJc1BlbmRpbmcoZmFsc2UpO1xuXG4gICAgICBkaXNwYXRjaFJ1bnMoe1xuICAgICAgICB0eXBlOiAnYXBwZW5kJyxcbiAgICAgICAgaXRlbToge1xuICAgICAgICAgIHRpbWVzdGFtcDogKG5ldyBEYXRlKCkpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTkpLFxuICAgICAgICAgIGR1cmF0aW9uOiAobmV3IERhdGUoKSkgLSBzdGFydF90aW1lLFxuICAgICAgICAgIGZpbGVuYW1lOiBmaWxlLm5hbWUsXG4gICAgICAgICAgZmlsZVNpemU6IGZpbGUuc2l6ZSxcbiAgICAgICAgICBmaWxlTGluZXM6IGpzb25EYXRhLmxlbmd0aFxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoZmlsZSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfSBmaWxlSGFuZGxlcj17ZmlsZUhhbmRsZXJ9PlxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XG4gICAgICAgICAgRXhww6lyaW1lbnRhdGlvbiBBcmRlbm5lc1xuICAgICAgICA8L2gxPlxuXG4gICAgICAgIHshaXNMb2dnZWQgJiZcbiAgICAgICAgICA8ZGl2IGlkPVwiY3JlYXRlLWZvcm1zXCIgY2xhc3NOYW1lPXtzdHlsZXMuY3JlYXRlfT5cbiAgICAgICAgICAgIDxMb2dpbkZvcm0gb25Mb2dpbj17b25Mb2dpbn0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuXG4gICAgICAgIHtpc0xvZ2dlZCAmJiA8PlxuICAgICAgICAgIDxGaWxlSGFuZGxlciBmaWxlSGFuZGxlcj17ZmlsZUhhbmRsZXJ9IGlzUGVuZGluZz17aXNQZW5kaW5nfSBmaWxlU2l6ZT17ZmlsZVNpemV9IC8+XG5cblxuICAgICAgICAgIHsgdXNlcnNEYXRhICYmIDw+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuc3VidGl0bGV9PlxuICAgICAgICAgICAgICBCw6luw6lmaWNpYWlyZXMgUlNBXG4gICAgICAgICAgICA8L2gyPlxuXG4gICAgICAgICAgICB7IHVzZXJzRGF0YS5sZW5ndGggPT0gMCAmJlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+QXVjdW4gYsOpbsOpZmljaWFpcmUgZGFucyBsZSBmaWNoaWVyPC9wPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgeyB1c2Vyc0RhdGEubGVuZ3RoID4gMCAmJiA8PlxuICAgICAgICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5Ob208L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5QcsOpbm9tPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+TWFpbDwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPlTDqWzDqXBob25lPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+SUQgUkRWLVNvbGlkYXJpdMOpczwvdGg+XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgPHRyPjwvdHI+XG4gICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICB7dXNlcnNEYXRhLm1hcCgodXNlciwgaW5kZXgpID0+ICg8dHIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9Pnt1c2VyW1wiTk9NXCJdfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9Pnt1c2VyW1wiUFJFTk9NXCJdfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9Pnt1c2VyW1wiTUFJTFwiXX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT57dXNlcltcIlRFTEVQSE9ORVwiXX08L3RkPlxuICAgICAgICAgICAgICAgICAgICB7dXNlcltcIklEIFJEVlwiXSAhPSBcIlwiICYmXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+e3VzZXJbXCJJRCBSRFZcIl19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB7dXNlcltcIklEIFJEVlwiXSA9PSBcIlwiICYmXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+PGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBjcmVhdGVVc2VyKHVzZXIsIGluZGV4KX0gPkNyw6llciB1biBjb21wdGU8L2J1dHRvbj48L3RkPlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgIDwvdGFibGU+XG5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtmaWxlV3JpdGVyfT5SZWfDqW7DqXJlciBmaWNoaWVyPC9idXR0b24+XG4gICAgICAgICAgICA8Lz59XG4gICAgICAgICAgPC8+fVxuICAgICAgICA8Lz59XG5cbiAgICAgICAgPEZvb3RlclxuICAgICAgICAgIHN1YmplY3Q9XCJFeHDDqXJpbWVudGF0aW9uIEFyZGVubmVzXCJcbiAgICAgICAgICBwb3VycXVvaT1cIlF1ZWwgZXN0IGwnb2JqZWN0aWYgZGUgY2V0dGUgZXhww6lyaW1lbnRhdGlvbiZuYnNwOz9cIlxuICAgICAgICAgIHRleHQ9ezw+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5GYWNpbGl0ZXIgbGUgdHJhdmFpbCBkZXMgYWdlbnRzIGR1IGTDqXBhcnRlbWVudCBldCB0ZXN0ZXIgbCd1dGlsaXNhdGlvbiBkZSBsJ2FwcGxpY2F0aW9uIFJEVi1Tb2xpZGFyaXTDqXMgcG91ciBhY2PDqWzDqXJlciBsYSBwcmlzZSBkdSBwcmVtaWVyIHJlbmRlei12b3VzIGQnb3JpZW50YXRpb24uPC9wPlxuICAgICAgICAgIDwvPn1cbiAgICAgICAgLz5cbiAgICAgIDwvbWFpbj5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==