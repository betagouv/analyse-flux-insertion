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

// Pensez à vérifier l'ID de l'organisation
// Récupérer le token d'invitation
// Proposer d'envoyer le mail ?
// Envoyer le mail à la place d'Isabelle ?
// Mettre un cookie de session pour le login ?









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
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (devFile) {
      fileHandler(devFile);
    }
  }, [devFile]);

  var fileWriter = function fileWriter() {
    var outWorkbook = xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].book_new();
    var outWorksheet = xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].json_to_sheet(usersData);
    xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].book_append_sheet(outWorkbook, outWorksheet, "DIVERGENCES"); // XLSX.utils.book_append_sheet(outWorkbook, xls.Sheets[xls.SheetNames[1]], "GRAPHIQUE");
    // XLSX.utils.book_append_sheet(outWorkbook, xls.Sheets[xls.SheetNames[2]], "Selection COA");

    xlsx__WEBPACK_IMPORTED_MODULE_3__["writeFile"](outWorkbook, "ardennes_rsa_".concat(Object(_lib_cnaf__WEBPACK_IMPORTED_MODULE_9__["getFormattedTime"])(), ".xlsx"));
  };

  var createUser = function createUser(userData, i) {
    console.log(userData);
    console.log(userData[Object.keys(userData)[8]]);
    console.log(userData["DATE DE\rNAISSANCE"]); //     birth_date: STRING ou DATE - optionnel: Date de naissance
    // address: STRING - optionnel: Adresse au format texte
    // caisse_affiliation: STRING - optionnel: Caisse d'affiliation, valeurs possibles : aucune, caf ou msa
    // affiliation_number: STRING - optionnel: Numéro d'affiliation à la caisse

    var user = {
      first_name: userData["PRENOM"].charAt(0).toUpperCase() + userData["PRENOM"].slice(1).toLowerCase(),
      last_name: userData["NOM"].charAt(0).toUpperCase() + userData["NOM"].slice(1).toLowerCase(),
      email: userData["MAIL"],
      phone_number: userData["TELEPHONE"].replace(/\s+/g, ''),
      organisation_ids: [1]
    }; // fetch(url, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     "access-token": token.tokenId,
    //     uid: token.uid,
    //     client: token.client
    //   },
    //   body: JSON.stringify(user)
    // })
    // .then(response => response.json())
    // .then(result => {
    //   let newUsersData = [...usersData];
    //   if (result.success) {
    //     newUsersData[i]["ID RDV"] = result.user.id
    //     setUsersData(newUsersData);
    //   } else if (result.errors.email && result.errors.email[0].error === "taken") {
    //     newUsersData[i]["ID RDV"] = result.errors.email[0].id
    //     setUsersData(newUsersData);
    //     alert("Un compte associé à cet email existe déjà")
    //   } else if (result.errors.email && result.errors.email[0].error === "invalid") {
    //     alert("L'adresse mail n'est pas valide")
    //   } else if (result.errors && result.errors[0]) {
    //     alert(result.errors[0])
    //   }
    // })
    // .catch(error => alert(error))
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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.container,
    fileHandler: fileHandler,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.main,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.title,
        children: "Exp\xE9rimentation Ardennes"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 9
      }, this), !isLogged && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: "create-forms",
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.create,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_login_form__WEBPACK_IMPORTED_MODULE_7__["default"], {
          onLogin: onLogin
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 11
      }, this), isLogged && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_file__WEBPACK_IMPORTED_MODULE_5__["default"], {
          fileHandler: fileHandler,
          isPending: isPending,
          fileSize: fileSize
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 11
        }, this), usersData && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.subtitle,
            children: "B\xE9n\xE9ficiaires RSA"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 13
          }, this), usersData.length == 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.description,
            children: "Aucun b\xE9n\xE9ficiaire dans le fichier"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 161,
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
                    lineNumber: 167,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    rowSpan: "2",
                    children: "Pr\xE9nom"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 168,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    rowSpan: "2",
                    children: "Mail"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 169,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    rowSpan: "2",
                    children: "T\xE9l\xE9phone"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 170,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    rowSpan: "2",
                    children: "ID RDV-Solidarit\xE9s"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 171,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 166,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 173,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 165,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
                children: usersData.map(function (user, index) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.center,
                      children: user["NOM"]
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 177,
                      columnNumber: 21
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.center,
                      children: user["PRENOM"]
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 178,
                      columnNumber: 21
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.center,
                      children: user["MAIL"]
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 179,
                      columnNumber: 21
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.center,
                      children: user["TELEPHONE"]
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 180,
                      columnNumber: 21
                    }, _this), user["ID RDV"] != "" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.center,
                      children: user["ID RDV"]
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 182,
                      columnNumber: 23
                    }, _this), user["ID RDV"] == "" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.center,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                        onClick: function onClick() {
                          return createUser(user, index);
                        },
                        children: "Cr\xE9er un compte"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 185,
                        columnNumber: 53
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 185,
                      columnNumber: 23
                    }, _this)]
                  }, index, true, {
                    fileName: _jsxFileName,
                    lineNumber: 176,
                    columnNumber: 52
                  }, _this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 175,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 164,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.button,
              onClick: fileWriter,
              children: "Reg\xE9n\xE9rer fichier"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 192,
              columnNumber: 15
            }, this)]
          }, void 0, true)]
        }, void 0, true)]
      }, void 0, true), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
        subject: "Exp\xE9rimentation Ardennes",
        pourquoi: "Quel est l'objectif de cette exp\xE9rimentation\xA0?",
        text: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.text,
            children: "Faciliter le travail des agents du d\xE9partement et tester l'utilisation de l'application RDV-Solidarit\xE9s pour acc\xE9l\xE9rer la prise du premier rendez-vous d'orientation."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 201,
            columnNumber: 13
          }, this)
        }, void 0, false)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 139,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXhwZXJpbWVudGF0aW9ucy9hcmRlbm5lcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJyZWR1Y2VyIiwicmVkdWNlckZhY3RvcnkiLCJkZXZNb2RlIiwiQXJkZW5uZXMiLCJ1c2VTdGF0ZSIsImRldkZpbGUiLCJzZXREZXZGaWxlIiwidXNlUmVkdWNlciIsImluaXRSZWR1Y2VyIiwicnVucyIsImRpc3BhdGNoUnVucyIsInVzZXJzRGF0YSIsInNldFVzZXJzRGF0YSIsImlzUGVuZGluZyIsInNldElzUGVuZGluZyIsImZpbGVTaXplIiwic2V0RmlsZVNpemUiLCJpc0xvZ2dlZCIsInNldElzTG9nZ2VkIiwidWlkIiwiY2xpZW50IiwidG9rZW4iLCJzZXRUb2tlbiIsIlJEVl9VUkwiLCJwcm9jZXNzIiwicGF0aCIsInVybCIsInVzZUVmZmVjdCIsImZpbGVIYW5kbGVyIiwiZmlsZVdyaXRlciIsIm91dFdvcmtib29rIiwiWExTWCIsImJvb2tfbmV3Iiwib3V0V29ya3NoZWV0IiwianNvbl90b19zaGVldCIsImJvb2tfYXBwZW5kX3NoZWV0IiwiZ2V0Rm9ybWF0dGVkVGltZSIsImNyZWF0ZVVzZXIiLCJ1c2VyRGF0YSIsImkiLCJjb25zb2xlIiwibG9nIiwiT2JqZWN0Iiwia2V5cyIsInVzZXIiLCJmaXJzdF9uYW1lIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsInRvTG93ZXJDYXNlIiwibGFzdF9uYW1lIiwiZW1haWwiLCJwaG9uZV9udW1iZXIiLCJyZXBsYWNlIiwib3JnYW5pc2F0aW9uX2lkcyIsIm9uTG9naW4iLCJ0b2tlbklkIiwiZmlsZSIsInNpemUiLCJzdGFydF90aW1lIiwiRGF0ZSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJldmVudCIsImZpbGVEYXRhIiwiVWludDhBcnJheSIsInRhcmdldCIsInJlc3VsdCIsInhscyIsInR5cGUiLCJ3b3Jrc2hlZXQiLCJTaGVldHMiLCJTaGVldE5hbWVzIiwicmFuZ2UiLCJkZWNvZGVfcmFuZ2UiLCJzIiwiYyIsImUiLCJuZXdfcmFuZ2UiLCJlbmNvZGVfcmFuZ2UiLCJqc29uRGF0YSIsInNoZWV0X3RvX2pzb24iLCJibGFua3Jvd3MiLCJyYXciLCJkZWZ2YWwiLCJpdGVtIiwidGltZXN0YW1wIiwidG9JU09TdHJpbmciLCJkdXJhdGlvbiIsImZpbGVuYW1lIiwibmFtZSIsImZpbGVMaW5lcyIsImxlbmd0aCIsInJlYWRBc0FycmF5QnVmZmVyIiwic3R5bGVzIiwiY29udGFpbmVyIiwibWFpbiIsInRpdGxlIiwiY3JlYXRlIiwic3VidGl0bGUiLCJkZXNjcmlwdGlvbiIsIm1hcCIsImluZGV4IiwiY2VudGVyIiwiYnV0dG9uIiwidGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHQyx1RUFBYyxDQUFDLGdEQUFELENBQTlCO0FBQ0EsSUFBTUMsT0FBTyxPQUFiO0FBRWUsU0FBU0MsUUFBVCxHQUFvQjtBQUFBOztBQUFBOztBQUFBLGtCQUNIQyxzREFBUSxDQUFDLElBQUQsQ0FETDtBQUFBLE1BQzFCQyxPQUQwQjtBQUFBLE1BQ2pCQyxVQURpQjs7QUFBQSxvQkFFSkMsd0RBQVUsQ0FBQ1AsT0FBRCxFQUFVLEVBQVYsRUFBY1EsNERBQWQsQ0FGTjtBQUFBLE1BRTFCQyxJQUYwQjtBQUFBLE1BRXBCQyxZQUZvQjs7QUFBQSxtQkFHQ04sc0RBQVEsQ0FBQyxJQUFELENBSFQ7QUFBQSxNQUcxQk8sU0FIMEI7QUFBQSxNQUdmQyxZQUhlOztBQUFBLG1CQUlDUixzREFBUSxDQUFDLEtBQUQsQ0FKVDtBQUFBLE1BSTFCUyxTQUowQjtBQUFBLE1BSWZDLFlBSmU7O0FBQUEsbUJBS0RWLHNEQUFRLENBQUMsQ0FBRCxDQUxQO0FBQUEsTUFLMUJX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QUEsaUJBQWQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFEd0IsZUE2QnhCO0FBQVEsdUJBQVMsRUFBRVIsOERBQU0sQ0FBQ1UsTUFBMUI7QUFBa0MscUJBQU8sRUFBRTVFLFVBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQTdCd0I7QUFBQSwwQkFSYjtBQUFBLHdCQUpKO0FBQUEsc0JBWGYsZUF5REUscUVBQUMsMERBQUQ7QUFDRSxlQUFPLEVBQUMsNkJBRFY7QUFFRSxnQkFBUSxFQUFDLHNEQUZYO0FBR0UsWUFBSSxlQUFFO0FBQUEsaUNBQ0o7QUFBRyxxQkFBUyxFQUFFa0UsOERBQU0sQ0FBQ1csSUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESTtBQUhSO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F6REY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBcUVEOztHQXpMdUJ2RyxROztLQUFBQSxRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2V4cGVyaW1lbnRhdGlvbnMvYXJkZW5uZXMuZjZiODJmM2ViMTdhYWMyN2E5OWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFBlbnNleiDDoCB2w6lyaWZpZXIgbCdJRCBkZSBsJ29yZ2FuaXNhdGlvblxuLy8gUsOpY3Vww6lyZXIgbGUgdG9rZW4gZCdpbnZpdGF0aW9uXG4vLyBQcm9wb3NlciBkJ2Vudm95ZXIgbGUgbWFpbCA/XG4vLyBFbnZveWVyIGxlIG1haWwgw6AgbGEgcGxhY2UgZCdJc2FiZWxsZSA/XG4vLyBNZXR0cmUgdW4gY29va2llIGRlIHNlc3Npb24gcG91ciBsZSBsb2dpbiA/XG5cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCdcbmltcG9ydCAqIGFzIFhMU1ggZnJvbSAneGxzeCc7XG5cbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9sYXlvdXQnXG5pbXBvcnQgRmlsZUhhbmRsZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9maWxlJ1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2Zvb3RlcidcbmltcG9ydCBMb2dpbkZvcm0gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9sb2dpbi1mb3JtJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi8uLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuXG5pbXBvcnQgeyBnZXRGb3JtYXR0ZWRUaW1lIH0gZnJvbSAnLi4vLi4vLi4vbGliL2NuYWYnXG5pbXBvcnQgeyBpbml0UmVkdWNlciwgcmVkdWNlckZhY3RvcnkgfSBmcm9tICcuLi8uLi8uLi9saWIvaGlzdG9yaXF1ZSdcblxuY29uc3QgcmVkdWNlciA9IHJlZHVjZXJGYWN0b3J5KCdFeHDDqXJpbWVudGF0aW9uIEFyZGVubmVzIC0gQ05BRiAtIELDqW7DqWZpY2lhaXJlJylcbmNvbnN0IGRldk1vZGUgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PSAnZGV2ZWxvcG1lbnQnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFyZGVubmVzKCkge1xuICBjb25zdCBbZGV2RmlsZSwgc2V0RGV2RmlsZV0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbcnVucywgZGlzcGF0Y2hSdW5zXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgW10sIGluaXRSZWR1Y2VyKVxuICBjb25zdCBbdXNlcnNEYXRhLCBzZXRVc2Vyc0RhdGFdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtpc1BlbmRpbmcsIHNldElzUGVuZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtmaWxlU2l6ZSwgc2V0RmlsZVNpemVdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtpc0xvZ2dlZCwgc2V0SXNMb2dnZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbdG9rZW4sIHNldFRva2VuXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgICBcInRva2VuSWRcIjogJycsXG4gICAgICAgICAgdWlkOiAnJyxcbiAgICAgICAgICBjbGllbnQ6ICcnXG4gIH0pO1xuICBjb25zdCBSRFZfVVJMID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUkRWX0RFTU9fVVJMO1xuICBjb25zdCBwYXRoID0gJy91c2Vycyc7XG4gIGNvbnN0IHVybCA9IGAke1JEVl9VUkx9L2FwaS92MSR7cGF0aH1gO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYoZGV2RmlsZSkge1xuICAgICAgZmlsZUhhbmRsZXIoZGV2RmlsZSlcbiAgICB9XG4gIH0sIFtkZXZGaWxlXSlcblxuICBjb25zdCBmaWxlV3JpdGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IG91dFdvcmtib29rID0gWExTWC51dGlscy5ib29rX25ldygpO1xuICAgIGNvbnN0IG91dFdvcmtzaGVldCA9IFhMU1gudXRpbHMuanNvbl90b19zaGVldCh1c2Vyc0RhdGEpO1xuICAgIFhMU1gudXRpbHMuYm9va19hcHBlbmRfc2hlZXQob3V0V29ya2Jvb2ssIG91dFdvcmtzaGVldCwgXCJESVZFUkdFTkNFU1wiKTtcbiAgICAvLyBYTFNYLnV0aWxzLmJvb2tfYXBwZW5kX3NoZWV0KG91dFdvcmtib29rLCB4bHMuU2hlZXRzW3hscy5TaGVldE5hbWVzWzFdXSwgXCJHUkFQSElRVUVcIik7XG4gICAgLy8gWExTWC51dGlscy5ib29rX2FwcGVuZF9zaGVldChvdXRXb3JrYm9vaywgeGxzLlNoZWV0c1t4bHMuU2hlZXROYW1lc1syXV0sIFwiU2VsZWN0aW9uIENPQVwiKTtcbiAgICBYTFNYLndyaXRlRmlsZShvdXRXb3JrYm9vaywgYGFyZGVubmVzX3JzYV8ke2dldEZvcm1hdHRlZFRpbWUoKX0ueGxzeGApXG4gIH1cblxuICBjb25zdCBjcmVhdGVVc2VyID0gKHVzZXJEYXRhLCBpKSA9PiB7XG4gICAgY29uc29sZS5sb2codXNlckRhdGEpXG4gICAgY29uc29sZS5sb2codXNlckRhdGFbT2JqZWN0LmtleXModXNlckRhdGEpWzhdXSlcbiAgICBjb25zb2xlLmxvZyh1c2VyRGF0YVtcIkRBVEUgREVcXHJOQUlTU0FOQ0VcIl0pXG5cbi8vICAgICBiaXJ0aF9kYXRlOiBTVFJJTkcgb3UgREFURSAtIG9wdGlvbm5lbDogRGF0ZSBkZSBuYWlzc2FuY2Vcbi8vIGFkZHJlc3M6IFNUUklORyAtIG9wdGlvbm5lbDogQWRyZXNzZSBhdSBmb3JtYXQgdGV4dGVcbi8vIGNhaXNzZV9hZmZpbGlhdGlvbjogU1RSSU5HIC0gb3B0aW9ubmVsOiBDYWlzc2UgZCdhZmZpbGlhdGlvbiwgdmFsZXVycyBwb3NzaWJsZXMgOiBhdWN1bmUsIGNhZiBvdSBtc2Fcbi8vIGFmZmlsaWF0aW9uX251bWJlcjogU1RSSU5HIC0gb3B0aW9ubmVsOiBOdW3DqXJvIGQnYWZmaWxpYXRpb24gw6AgbGEgY2Fpc3NlXG5cblxuICAgIGNvbnN0IHVzZXIgPSB7IGZpcnN0X25hbWU6IHVzZXJEYXRhW1wiUFJFTk9NXCJdLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdXNlckRhdGFbXCJQUkVOT01cIl0uc2xpY2UoMSkudG9Mb3dlckNhc2UoKSwgbGFzdF9uYW1lOiB1c2VyRGF0YVtcIk5PTVwiXS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHVzZXJEYXRhW1wiTk9NXCJdLnNsaWNlKDEpLnRvTG93ZXJDYXNlKCksIGVtYWlsOiB1c2VyRGF0YVtcIk1BSUxcIl0sIHBob25lX251bWJlcjogdXNlckRhdGFbXCJURUxFUEhPTkVcIl0ucmVwbGFjZSgvXFxzKy9nLCAnJyksIG9yZ2FuaXNhdGlvbl9pZHM6IFsxXSB9O1xuICAgIC8vIGZldGNoKHVybCwge1xuICAgIC8vICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgLy8gICBoZWFkZXJzOiB7XG4gICAgLy8gICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgLy8gICAgIFwiYWNjZXNzLXRva2VuXCI6IHRva2VuLnRva2VuSWQsXG4gICAgLy8gICAgIHVpZDogdG9rZW4udWlkLFxuICAgIC8vICAgICBjbGllbnQ6IHRva2VuLmNsaWVudFxuICAgIC8vICAgfSxcbiAgICAvLyAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHVzZXIpXG4gICAgLy8gfSlcblxuICAgIC8vIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAvLyAudGhlbihyZXN1bHQgPT4ge1xuICAgIC8vICAgbGV0IG5ld1VzZXJzRGF0YSA9IFsuLi51c2Vyc0RhdGFdO1xuICAgIC8vICAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgLy8gICAgIG5ld1VzZXJzRGF0YVtpXVtcIklEIFJEVlwiXSA9IHJlc3VsdC51c2VyLmlkXG4gICAgLy8gICAgIHNldFVzZXJzRGF0YShuZXdVc2Vyc0RhdGEpO1xuICAgIC8vICAgfSBlbHNlIGlmIChyZXN1bHQuZXJyb3JzLmVtYWlsICYmIHJlc3VsdC5lcnJvcnMuZW1haWxbMF0uZXJyb3IgPT09IFwidGFrZW5cIikge1xuICAgIC8vICAgICBuZXdVc2Vyc0RhdGFbaV1bXCJJRCBSRFZcIl0gPSByZXN1bHQuZXJyb3JzLmVtYWlsWzBdLmlkXG4gICAgLy8gICAgIHNldFVzZXJzRGF0YShuZXdVc2Vyc0RhdGEpO1xuICAgIC8vICAgICBhbGVydChcIlVuIGNvbXB0ZSBhc3NvY2nDqSDDoCBjZXQgZW1haWwgZXhpc3RlIGTDqWrDoFwiKVxuICAgIC8vICAgfSBlbHNlIGlmIChyZXN1bHQuZXJyb3JzLmVtYWlsICYmIHJlc3VsdC5lcnJvcnMuZW1haWxbMF0uZXJyb3IgPT09IFwiaW52YWxpZFwiKSB7XG4gICAgLy8gICAgIGFsZXJ0KFwiTCdhZHJlc3NlIG1haWwgbidlc3QgcGFzIHZhbGlkZVwiKVxuICAgIC8vICAgfSBlbHNlIGlmIChyZXN1bHQuZXJyb3JzICYmIHJlc3VsdC5lcnJvcnNbMF0pIHtcbiAgICAvLyAgICAgYWxlcnQocmVzdWx0LmVycm9yc1swXSlcbiAgICAvLyAgIH1cbiAgICAvLyB9KVxuICAgIC8vIC5jYXRjaChlcnJvciA9PiBhbGVydChlcnJvcikpXG4gIH1cblxuICBjb25zdCBvbkxvZ2luID0gKHRva2VuSWQsIHVpZCwgY2xpZW50KSA9PiB7XG4gICAgc2V0VG9rZW4oeyAuLi50b2tlbiwgdG9rZW5JZDogdG9rZW5JZCwgdWlkOiB1aWQsIGNsaWVudDogY2xpZW50IH0pO1xuICAgIHNldElzTG9nZ2VkKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IGZpbGVIYW5kbGVyID0gKGZpbGUpID0+IHtcbiAgICBpZiAoZGV2TW9kZSAmJiBmaWxlICE9IGRldkZpbGUpIHtcbiAgICAgIHNldERldkZpbGUoZmlsZSlcbiAgICB9XG4gICAgc2V0RmlsZVNpemUoZmlsZS5zaXplKTtcbiAgICBzZXRJc1BlbmRpbmcodHJ1ZSk7XG4gICAgY29uc3Qgc3RhcnRfdGltZSA9IG5ldyBEYXRlKCk7XG5cbiAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGNvbnN0IGZpbGVEYXRhID0gbmV3IFVpbnQ4QXJyYXkoZXZlbnQudGFyZ2V0LnJlc3VsdCk7XG4gICAgICBjb25zdCB4bHMgPSBYTFNYLnJlYWQoZmlsZURhdGEsIHt0eXBlOidhcnJheSd9KVxuICAgICAgLyogR2V0IGZpcnN0IHdvcmtzaGVldCAqL1xuICAgICAgY29uc3Qgd29ya3NoZWV0ID0geGxzLlNoZWV0c1t4bHMuU2hlZXROYW1lc1swXV07XG4gICAgICAvLyBMaW1pdGVyIGxhIGNhcHR1cmUgYXV4IGNvbG9ubmVzIEEtVFxuICAgICAgY29uc3QgcmFuZ2UgPSBYTFNYLnV0aWxzLmRlY29kZV9yYW5nZSh3b3Jrc2hlZXRbJyFyZWYnXSk7XG4gICAgICByYW5nZS5zLmMgPSAwOyAvLyAwID09IFhMU1gudXRpbHMuZGVjb2RlX2NvbChcIkFcIilcbiAgICAgIHJhbmdlLmUuYyA9IDE5OyAvLyAxOSA9PSBYTFNYLnV0aWxzLmRlY29kZV9jb2woXCJUXCIpXG4gICAgICBjb25zdCBuZXdfcmFuZ2UgPSBYTFNYLnV0aWxzLmVuY29kZV9yYW5nZShyYW5nZSk7XG4gICAgICAvKiBDb252ZXJ0IGFycmF5IHRvIGpzb24qL1xuICAgICAgY29uc3QganNvbkRhdGEgPSBYTFNYLnV0aWxzLnNoZWV0X3RvX2pzb24od29ya3NoZWV0LCB7IGJsYW5rcm93czogZmFsc2UsIHJhdzogZmFsc2UsIGRlZnZhbDogXCJcIiwgcmFuZ2U6IG5ld19yYW5nZSB9KTtcbiAgICAgIHNldFVzZXJzRGF0YShqc29uRGF0YSk7XG4gICAgICBzZXRJc1BlbmRpbmcoZmFsc2UpO1xuXG4gICAgICBkaXNwYXRjaFJ1bnMoe1xuICAgICAgICB0eXBlOiAnYXBwZW5kJyxcbiAgICAgICAgaXRlbToge1xuICAgICAgICAgIHRpbWVzdGFtcDogKG5ldyBEYXRlKCkpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTkpLFxuICAgICAgICAgIGR1cmF0aW9uOiAobmV3IERhdGUoKSkgLSBzdGFydF90aW1lLFxuICAgICAgICAgIGZpbGVuYW1lOiBmaWxlLm5hbWUsXG4gICAgICAgICAgZmlsZVNpemU6IGZpbGUuc2l6ZSxcbiAgICAgICAgICBmaWxlTGluZXM6IGpzb25EYXRhLmxlbmd0aFxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoZmlsZSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfSBmaWxlSGFuZGxlcj17ZmlsZUhhbmRsZXJ9PlxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XG4gICAgICAgICAgRXhww6lyaW1lbnRhdGlvbiBBcmRlbm5lc1xuICAgICAgICA8L2gxPlxuXG4gICAgICAgIHshaXNMb2dnZWQgJiZcbiAgICAgICAgICA8ZGl2IGlkPVwiY3JlYXRlLWZvcm1zXCIgY2xhc3NOYW1lPXtzdHlsZXMuY3JlYXRlfT5cbiAgICAgICAgICAgIDxMb2dpbkZvcm0gb25Mb2dpbj17b25Mb2dpbn0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuXG4gICAgICAgIHtpc0xvZ2dlZCAmJiA8PlxuICAgICAgICAgIDxGaWxlSGFuZGxlciBmaWxlSGFuZGxlcj17ZmlsZUhhbmRsZXJ9IGlzUGVuZGluZz17aXNQZW5kaW5nfSBmaWxlU2l6ZT17ZmlsZVNpemV9IC8+XG5cblxuICAgICAgICAgIHsgdXNlcnNEYXRhICYmIDw+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuc3VidGl0bGV9PlxuICAgICAgICAgICAgICBCw6luw6lmaWNpYWlyZXMgUlNBXG4gICAgICAgICAgICA8L2gyPlxuXG4gICAgICAgICAgICB7IHVzZXJzRGF0YS5sZW5ndGggPT0gMCAmJlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+QXVjdW4gYsOpbsOpZmljaWFpcmUgZGFucyBsZSBmaWNoaWVyPC9wPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgeyB1c2Vyc0RhdGEubGVuZ3RoID4gMCAmJiA8PlxuICAgICAgICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5Ob208L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5QcsOpbm9tPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+TWFpbDwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPlTDqWzDqXBob25lPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+SUQgUkRWLVNvbGlkYXJpdMOpczwvdGg+XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgPHRyPjwvdHI+XG4gICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICB7dXNlcnNEYXRhLm1hcCgodXNlciwgaW5kZXgpID0+ICg8dHIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9Pnt1c2VyW1wiTk9NXCJdfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9Pnt1c2VyW1wiUFJFTk9NXCJdfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9Pnt1c2VyW1wiTUFJTFwiXX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT57dXNlcltcIlRFTEVQSE9ORVwiXX08L3RkPlxuICAgICAgICAgICAgICAgICAgICB7dXNlcltcIklEIFJEVlwiXSAhPSBcIlwiICYmXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+e3VzZXJbXCJJRCBSRFZcIl19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB7dXNlcltcIklEIFJEVlwiXSA9PSBcIlwiICYmXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+PGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBjcmVhdGVVc2VyKHVzZXIsIGluZGV4KX0gPkNyw6llciB1biBjb21wdGU8L2J1dHRvbj48L3RkPlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgIDwvdGFibGU+XG5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259IG9uQ2xpY2s9e2ZpbGVXcml0ZXJ9PlJlZ8OpbsOpcmVyIGZpY2hpZXI8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvPn1cbiAgICAgICAgICA8Lz59XG4gICAgICAgIDwvPn1cblxuICAgICAgICA8Rm9vdGVyXG4gICAgICAgICAgc3ViamVjdD1cIkV4cMOpcmltZW50YXRpb24gQXJkZW5uZXNcIlxuICAgICAgICAgIHBvdXJxdW9pPVwiUXVlbCBlc3QgbCdvYmplY3RpZiBkZSBjZXR0ZSBleHDDqXJpbWVudGF0aW9uJm5ic3A7P1wiXG4gICAgICAgICAgdGV4dD17PD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRleHR9PkZhY2lsaXRlciBsZSB0cmF2YWlsIGRlcyBhZ2VudHMgZHUgZMOpcGFydGVtZW50IGV0IHRlc3RlciBsJ3V0aWxpc2F0aW9uIGRlIGwnYXBwbGljYXRpb24gUkRWLVNvbGlkYXJpdMOpcyBwb3VyIGFjY8OpbMOpcmVyIGxhIHByaXNlIGR1IHByZW1pZXIgcmVuZGV6LXZvdXMgZCdvcmllbnRhdGlvbi48L3A+XG4gICAgICAgICAgPC8+fVxuICAgICAgICAvPlxuICAgICAgPC9tYWluPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9