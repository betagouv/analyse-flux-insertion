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
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (usersData) {// console.log(usersData)
    }
  }, [usersData]);

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
      console.log(userData["N° DOSSIER"]);

      var usersdata = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(usersData);

      if (result.success) {
        usersdata[i]["ID"] = result.user.id;
        setUsersData(usersdata);
      } else if (result.errors.email && result.errors.email[0].error === "taken") {
        usersdata[i]["ID"] = result.errors.email[0].id;
        setUsersData(usersdata);
        alert("Un compte associé à cet email existe déjà");
      } else if (result.errors.email && result.errors.email[0].error === "invalid") {
        alert("L'adresse mail n'est pas valide");
      } else if (result.errors && result.errors[0]) {
        alert(result.errors[0]);
      }
    })["catch"](function (error) {
      return alert(error);
    }); // Récupérer le token d'invitation
    // Envoyer le mail à la place d'Isabelle
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
        lineNumber: 135,
        columnNumber: 9
      }, this), !isLogged && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: "create-forms",
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.create,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_login_form__WEBPACK_IMPORTED_MODULE_8__["default"], {
          onLogin: onLogin
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_file__WEBPACK_IMPORTED_MODULE_6__["default"], {
        fileHandler: fileHandler,
        isPending: isPending,
        fileSize: fileSize
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 9
      }, this), usersData && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.subtitle,
          children: "B\xE9n\xE9ficiaires RSA"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 11
        }, this), usersData.length == 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.description,
          children: "Aucun b\xE9n\xE9ficiaire dans le fichier"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 13
        }, this), usersData.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                  rowSpan: "2",
                  children: "Nom"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 159,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                  rowSpan: "2",
                  children: "Pr\xE9nom"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 160,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                  rowSpan: "2",
                  children: "Mail"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 161,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                  rowSpan: "2",
                  children: "T\xE9l\xE9phone"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 162,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                  rowSpan: "2",
                  children: "ID RDV-Solidarit\xE9s"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 163,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 158,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 165,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 157,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
              children: usersData.map(function (user, index) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.center,
                    children: user["NOM"]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 169,
                    columnNumber: 19
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.center,
                    children: user["PRENOM"]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 170,
                    columnNumber: 19
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.center,
                    children: user["MAIL"]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 171,
                    columnNumber: 19
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.center,
                    children: user["TELEPHONE"]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 172,
                    columnNumber: 19
                  }, _this), user["ID"] != "" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.center,
                    children: user["ID"]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 174,
                    columnNumber: 21
                  }, _this), user["ID"] === "" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.center,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                      onClick: function onClick() {
                        return createUser(user, index);
                      },
                      children: "Cr\xE9er un compte"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 177,
                      columnNumber: 51
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 177,
                    columnNumber: 21
                  }, _this)]
                }, index, true, {
                  fileName: _jsxFileName,
                  lineNumber: 168,
                  columnNumber: 50
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 167,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onClick: fileWriter,
            children: "Reg\xE9n\xE9rer fichier"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 184,
            columnNumber: 13
          }, this)]
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
      lineNumber: 134,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 133,
    columnNumber: 5
  }, this);
}

_s(Ardennes, "DCfqAppIV4YfnB1UxYwbGYVDYWs=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXhwZXJpbWVudGF0aW9ucy9hcmRlbm5lcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJyZWR1Y2VyIiwicmVkdWNlckZhY3RvcnkiLCJkZXZNb2RlIiwiQXJkZW5uZXMiLCJ1c2VTdGF0ZSIsImRldkZpbGUiLCJzZXREZXZGaWxlIiwidXNlUmVkdWNlciIsImluaXRSZWR1Y2VyIiwicnVucyIsImRpc3BhdGNoUnVucyIsInVzZXJzRGF0YSIsInNldFVzZXJzRGF0YSIsImlzUGVuZGluZyIsInNldElzUGVuZGluZyIsImZpbGVTaXplIiwic2V0RmlsZVNpemUiLCJpc0xvZ2dlZCIsInNldElzTG9nZ2VkIiwidWlkIiwiY2xpZW50IiwidG9rZW4iLCJzZXRUb2tlbiIsIlJEVl9VUkwiLCJwcm9jZXNzIiwicGF0aCIsInVybCIsInVzZUVmZmVjdCIsImZpbGVIYW5kbGVyIiwiZmlsZVdyaXRlciIsIm91dFdvcmtib29rIiwiWExTWCIsImJvb2tfbmV3Iiwib3V0V29ya3NoZWV0IiwianNvbl90b19zaGVldCIsImJvb2tfYXBwZW5kX3NoZWV0IiwiZ2V0Rm9ybWF0dGVkVGltZSIsImNyZWF0ZVVzZXIiLCJ1c2VyRGF0YSIsImkiLCJ1c2VyIiwiZmlyc3RfbmFtZSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJ0b0xvd2VyQ2FzZSIsImxhc3RfbmFtZSIsImVtYWlsIiwicGhvbmVfbnVtYmVyIiwicmVwbGFjZSIsIm9yZ2FuaXNhdGlvbl9pZHMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJ0b2tlbklkIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsInVzZXJzZGF0YSIsInN1Y2Nlc3MiLCJpZCIsImVycm9ycyIsImVycm9yIiwiYWxlcnQiLCJvbkxvZ2luIiwiZmlsZSIsInNpemUiLCJzdGFydF90aW1lIiwiRGF0ZSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJldmVudCIsImZpbGVEYXRhIiwiVWludDhBcnJheSIsInRhcmdldCIsInhscyIsInR5cGUiLCJ3b3Jrc2hlZXQiLCJTaGVldHMiLCJTaGVldE5hbWVzIiwicmFuZ2UiLCJkZWNvZGVfcmFuZ2UiLCJzIiwiYyIsImUiLCJuZXdfcmFuZ2UiLCJlbmNvZGVfcmFuZ2UiLCJqc29uRGF0YSIsInNoZWV0X3RvX2pzb24iLCJibGFua3Jvd3MiLCJyYXciLCJkZWZ2YWwiLCJpdGVtIiwidGltZXN0YW1wIiwidG9JU09TdHJpbmciLCJkdXJhdGlvbiIsImZpbGVuYW1lIiwibmFtZSIsImZpbGVMaW5lcyIsImxlbmd0aCIsInJlYWRBc0FycmF5QnVmZmVyIiwic3R5bGVzIiwiY29udGFpbmVyIiwibWFpbiIsInRpdGxlIiwiY3JlYXRlIiwic3VidGl0bGUiLCJkZXNjcmlwdGlvbiIsIm1hcCIsImluZGV4IiwiY2VudGVyIiwidGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHQyx1RUFBYyxDQUFDLGdEQUFELENBQTlCO0FBQ0EsSUFBTUMsT0FBTyxPQUFiO0FBRWUsU0FBU0MsUUFBVCxHQUFvQjtBQUFBOztBQUFBOztBQUFBLGtCQUNIQyxzREFBUSxDQUFDLElBQUQsQ0FETDtBQUFBLE1BQzFCQyxPQUQwQjtBQUFBLE1BQ2pCQyxVQURpQjs7QUFBQSxvQkFFSkMsd0RBQVUsQ0FBQ1AsT0FBRCxFQUFVLEVBQVYsRUFBY1EsNERBQWQsQ0FGTjtBQUFBLE1BRTFCQyxJQUYwQjtBQUFBLE1BRXBCQyxZQUZvQjs7QUFBQSxtQkFHQ04sc0RBQVEsQ0FBQyxJQUFELENBSFQ7QUFBQSxNQUcxQk8sU0FIMEI7QUFBQSxNQUdmQyxZQUhlOztBQUFBLG1CQUlDUixzREFBUSxDQUFDLEtB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QUFBQSwrQkFBTWhGLFVBQVUsQ0FBQ0csSUFBRCxFQUFPNEUsS0FBUCxDQUFoQjtBQUFBLHVCQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQVQ2QjtBQUFBLG1CQUFTQSxLQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBQWxCO0FBQUEsZUFBZDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUR3QixlQTZCeEI7QUFBUSxtQkFBTyxFQUFFdkYsVUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBN0J3QjtBQUFBLHdCQVJiO0FBQUEsc0JBYmpCLGVBc0RFLHFFQUFDLDBEQUFEO0FBQ0UsZUFBTyxFQUFDLDZCQURWO0FBRUUsZ0JBQVEsRUFBQyxzREFGWDtBQUdFLFlBQUksZUFBRTtBQUFBLGlDQUNKO0FBQUcscUJBQVMsRUFBRStFLDhEQUFNLENBQUNVLElBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREk7QUFIUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBdERGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWtFRDs7R0FyTHVCbkgsUTs7S0FBQUEsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9leHBlcmltZW50YXRpb25zL2FyZGVubmVzLmFmMWFiYTM3ZDg5NDJhNjgxOWRlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBQZW5zZXogw6AgdsOpcmlmaWVyIGwnSUQgZGUgbCdvcmdhbmlzYXRpb25cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCdcbmltcG9ydCAqIGFzIFhMU1ggZnJvbSAneGxzeCc7XG5cbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9sYXlvdXQnXG5pbXBvcnQgRmlsZUhhbmRsZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9maWxlJ1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2Zvb3RlcidcbmltcG9ydCBMb2dpbkZvcm0gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9sb2dpbi1mb3JtJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi8uLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuXG5pbXBvcnQgeyBnZXRGb3JtYXR0ZWRUaW1lIH0gZnJvbSAnLi4vLi4vLi4vbGliL2NuYWYnXG5pbXBvcnQgeyBpbml0UmVkdWNlciwgcmVkdWNlckZhY3RvcnkgfSBmcm9tICcuLi8uLi8uLi9saWIvaGlzdG9yaXF1ZSdcblxuY29uc3QgcmVkdWNlciA9IHJlZHVjZXJGYWN0b3J5KCdFeHDDqXJpbWVudGF0aW9uIEFyZGVubmVzIC0gQ05BRiAtIELDqW7DqWZpY2lhaXJlJylcbmNvbnN0IGRldk1vZGUgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PSAnZGV2ZWxvcG1lbnQnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFyZGVubmVzKCkge1xuICBjb25zdCBbZGV2RmlsZSwgc2V0RGV2RmlsZV0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbcnVucywgZGlzcGF0Y2hSdW5zXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgW10sIGluaXRSZWR1Y2VyKVxuICBjb25zdCBbdXNlcnNEYXRhLCBzZXRVc2Vyc0RhdGFdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtpc1BlbmRpbmcsIHNldElzUGVuZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtmaWxlU2l6ZSwgc2V0RmlsZVNpemVdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtpc0xvZ2dlZCwgc2V0SXNMb2dnZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbdG9rZW4sIHNldFRva2VuXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgICBcInRva2VuSWRcIjogJycsXG4gICAgICAgICAgdWlkOiAnJyxcbiAgICAgICAgICBjbGllbnQ6ICcnXG4gIH0pO1xuICBjb25zdCBSRFZfVVJMID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUkRWX0RFTU9fVVJMO1xuICBjb25zdCBwYXRoID0gJy91c2Vycyc7XG4gIGNvbnN0IHVybCA9IGAke1JEVl9VUkx9L2FwaS92MSR7cGF0aH1gO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYoZGV2RmlsZSkge1xuICAgICAgZmlsZUhhbmRsZXIoZGV2RmlsZSlcbiAgICB9XG4gIH0sIFtkZXZGaWxlXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmKHVzZXJzRGF0YSkge1xuICAgICAgLy8gY29uc29sZS5sb2codXNlcnNEYXRhKVxuICAgIH1cbiAgfSwgW3VzZXJzRGF0YV0pXG5cbiAgY29uc3QgZmlsZVdyaXRlciA9ICgpID0+IHtcbiAgICBjb25zdCBvdXRXb3JrYm9vayA9IFhMU1gudXRpbHMuYm9va19uZXcoKTtcbiAgICBjb25zdCBvdXRXb3Jrc2hlZXQgPSBYTFNYLnV0aWxzLmpzb25fdG9fc2hlZXQodXNlcnNEYXRhKTtcbiAgICBYTFNYLnV0aWxzLmJvb2tfYXBwZW5kX3NoZWV0KG91dFdvcmtib29rLCBvdXRXb3Jrc2hlZXQsIFwiRElWRVJHRU5DRVNcIik7XG4gICAgLy8gWExTWC51dGlscy5ib29rX2FwcGVuZF9zaGVldChvdXRXb3JrYm9vaywgeGxzLlNoZWV0c1t4bHMuU2hlZXROYW1lc1sxXV0sIFwiR1JBUEhJUVVFXCIpO1xuICAgIC8vIFhMU1gudXRpbHMuYm9va19hcHBlbmRfc2hlZXQob3V0V29ya2Jvb2ssIHhscy5TaGVldHNbeGxzLlNoZWV0TmFtZXNbMl1dLCBcIlNlbGVjdGlvbiBDT0FcIik7XG4gICAgWExTWC53cml0ZUZpbGUob3V0V29ya2Jvb2ssIGBhcmRlbm5lc19yc2FfJHtnZXRGb3JtYXR0ZWRUaW1lKCl9Lnhsc3hgKVxuICB9XG5cbiAgY29uc3QgY3JlYXRlVXNlciA9ICh1c2VyRGF0YSwgaSkgPT4ge1xuICAgIGNvbnN0IHVzZXIgPSB7IGZpcnN0X25hbWU6IHVzZXJEYXRhW1wiUFJFTk9NXCJdLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdXNlckRhdGFbXCJQUkVOT01cIl0uc2xpY2UoMSkudG9Mb3dlckNhc2UoKSwgbGFzdF9uYW1lOiB1c2VyRGF0YVtcIk5PTVwiXS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHVzZXJEYXRhW1wiTk9NXCJdLnNsaWNlKDEpLnRvTG93ZXJDYXNlKCksIGVtYWlsOiB1c2VyRGF0YVtcIk1BSUxcIl0sIHBob25lX251bWJlcjogdXNlckRhdGFbXCJURUxFUEhPTkVcIl0ucmVwbGFjZSgvXFxzKy9nLCAnJyksIG9yZ2FuaXNhdGlvbl9pZHM6IFsxXSB9O1xuICAgIGZldGNoKHVybCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIFwiYWNjZXNzLXRva2VuXCI6IHRva2VuLnRva2VuSWQsXG4gICAgICAgIHVpZDogdG9rZW4udWlkLFxuICAgICAgICBjbGllbnQ6IHRva2VuLmNsaWVudFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHVzZXIpXG4gICAgfSlcblxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgY29uc29sZS5sb2codXNlckRhdGFbXCJOwrAgRE9TU0lFUlwiXSlcbiAgICAgIGxldCB1c2Vyc2RhdGEgPSBbLi4udXNlcnNEYXRhXTtcbiAgICAgIGlmIChyZXN1bHQuc3VjY2Vzcykge1xuICAgICAgICB1c2Vyc2RhdGFbaV1bXCJJRFwiXSA9IHJlc3VsdC51c2VyLmlkXG4gICAgICAgIHNldFVzZXJzRGF0YSh1c2Vyc2RhdGEpO1xuICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZXJyb3JzLmVtYWlsICYmIHJlc3VsdC5lcnJvcnMuZW1haWxbMF0uZXJyb3IgPT09IFwidGFrZW5cIikge1xuICAgICAgICB1c2Vyc2RhdGFbaV1bXCJJRFwiXSA9IHJlc3VsdC5lcnJvcnMuZW1haWxbMF0uaWRcbiAgICAgICAgc2V0VXNlcnNEYXRhKHVzZXJzZGF0YSk7XG4gICAgICAgIGFsZXJ0KFwiVW4gY29tcHRlIGFzc29jacOpIMOgIGNldCBlbWFpbCBleGlzdGUgZMOpasOgXCIpXG4gICAgICB9IGVsc2UgaWYgKHJlc3VsdC5lcnJvcnMuZW1haWwgJiYgcmVzdWx0LmVycm9ycy5lbWFpbFswXS5lcnJvciA9PT0gXCJpbnZhbGlkXCIpIHtcbiAgICAgICAgYWxlcnQoXCJMJ2FkcmVzc2UgbWFpbCBuJ2VzdCBwYXMgdmFsaWRlXCIpXG4gICAgICB9IGVsc2UgaWYgKHJlc3VsdC5lcnJvcnMgJiYgcmVzdWx0LmVycm9yc1swXSkge1xuICAgICAgICBhbGVydChyZXN1bHQuZXJyb3JzWzBdKVxuICAgICAgfVxuICAgIH0pXG4gICAgLmNhdGNoKGVycm9yID0+IGFsZXJ0KGVycm9yKSlcbiAgICAvLyBSw6ljdXDDqXJlciBsZSB0b2tlbiBkJ2ludml0YXRpb25cbiAgICAvLyBFbnZveWVyIGxlIG1haWwgw6AgbGEgcGxhY2UgZCdJc2FiZWxsZVxuICB9XG5cbiAgY29uc3Qgb25Mb2dpbiA9ICh0b2tlbklkLCB1aWQsIGNsaWVudCkgPT4ge1xuICAgIHNldFRva2VuKHsgLi4udG9rZW4sIHRva2VuSWQ6IHRva2VuSWQsIHVpZDogdWlkLCBjbGllbnQ6IGNsaWVudCB9KTtcbiAgICBzZXRJc0xvZ2dlZCh0cnVlKTtcbiAgfTtcblxuICBjb25zdCBmaWxlSGFuZGxlciA9IChmaWxlKSA9PiB7XG4gICAgaWYgKGRldk1vZGUgJiYgZmlsZSAhPSBkZXZGaWxlKSB7XG4gICAgICBzZXREZXZGaWxlKGZpbGUpXG4gICAgfVxuICAgIHNldEZpbGVTaXplKGZpbGUuc2l6ZSk7XG4gICAgc2V0SXNQZW5kaW5nKHRydWUpO1xuICAgIGNvbnN0IHN0YXJ0X3RpbWUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcbiAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBjb25zdCBmaWxlRGF0YSA9IG5ldyBVaW50OEFycmF5KGV2ZW50LnRhcmdldC5yZXN1bHQpO1xuICAgICAgY29uc3QgeGxzID0gWExTWC5yZWFkKGZpbGVEYXRhLCB7dHlwZTonYXJyYXknfSlcbiAgICAgIC8qIEdldCBmaXJzdCB3b3Jrc2hlZXQgKi9cbiAgICAgIGNvbnN0IHdvcmtzaGVldCA9IHhscy5TaGVldHNbeGxzLlNoZWV0TmFtZXNbMF1dO1xuICAgICAgLy8gTGltaXRlciBsYSBjYXB0dXJlIGF1eCBjb2xvbm5lcyBBLVRcbiAgICAgIGNvbnN0IHJhbmdlID0gWExTWC51dGlscy5kZWNvZGVfcmFuZ2Uod29ya3NoZWV0WychcmVmJ10pO1xuICAgICAgcmFuZ2Uucy5jID0gMDsgLy8gMCA9PSBYTFNYLnV0aWxzLmRlY29kZV9jb2woXCJBXCIpXG4gICAgICByYW5nZS5lLmMgPSAxOTsgLy8gMTkgPT0gWExTWC51dGlscy5kZWNvZGVfY29sKFwiVFwiKVxuICAgICAgY29uc3QgbmV3X3JhbmdlID0gWExTWC51dGlscy5lbmNvZGVfcmFuZ2UocmFuZ2UpO1xuICAgICAgLyogQ29udmVydCBhcnJheSB0byBqc29uKi9cbiAgICAgIGNvbnN0IGpzb25EYXRhID0gWExTWC51dGlscy5zaGVldF90b19qc29uKHdvcmtzaGVldCwgeyBibGFua3Jvd3M6IGZhbHNlLCByYXc6IGZhbHNlLCBkZWZ2YWw6IFwiXCIsIHJhbmdlOiBuZXdfcmFuZ2UgfSk7XG4gICAgICBzZXRVc2Vyc0RhdGEoanNvbkRhdGEpO1xuICAgICAgc2V0SXNQZW5kaW5nKGZhbHNlKTtcblxuICAgICAgZGlzcGF0Y2hSdW5zKHtcbiAgICAgICAgdHlwZTogJ2FwcGVuZCcsXG4gICAgICAgIGl0ZW06IHtcbiAgICAgICAgICB0aW1lc3RhbXA6IChuZXcgRGF0ZSgpKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDE5KSxcbiAgICAgICAgICBkdXJhdGlvbjogKG5ldyBEYXRlKCkpIC0gc3RhcnRfdGltZSxcbiAgICAgICAgICBmaWxlbmFtZTogZmlsZS5uYW1lLFxuICAgICAgICAgIGZpbGVTaXplOiBmaWxlLnNpemUsXG4gICAgICAgICAgZmlsZUxpbmVzOiBqc29uRGF0YS5sZW5ndGhcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGZpbGUpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0gZmlsZUhhbmRsZXI9e2ZpbGVIYW5kbGVyfT5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxuICAgICAgICAgIEV4cMOpcmltZW50YXRpb24gQXJkZW5uZXNcbiAgICAgICAgPC9oMT5cblxuICAgICAgICB7IWlzTG9nZ2VkICYmXG4gICAgICAgICAgPGRpdiBpZD1cImNyZWF0ZS1mb3Jtc1wiIGNsYXNzTmFtZT17c3R5bGVzLmNyZWF0ZX0+XG4gICAgICAgICAgICA8TG9naW5Gb3JtIG9uTG9naW49e29uTG9naW59IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cblxuICAgICAgICA8RmlsZUhhbmRsZXIgZmlsZUhhbmRsZXI9e2ZpbGVIYW5kbGVyfSBpc1BlbmRpbmc9e2lzUGVuZGluZ30gZmlsZVNpemU9e2ZpbGVTaXplfSAvPlxuXG4gICAgICAgIHsgdXNlcnNEYXRhICYmIDw+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnN1YnRpdGxlfT5cbiAgICAgICAgICAgIELDqW7DqWZpY2lhaXJlcyBSU0FcbiAgICAgICAgICA8L2gyPlxuXG4gICAgICAgICAgeyB1c2Vyc0RhdGEubGVuZ3RoID09IDAgJiZcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5BdWN1biBiw6luw6lmaWNpYWlyZSBkYW5zIGxlIGZpY2hpZXI8L3A+XG4gICAgICAgICAgfVxuICAgICAgICAgIHsgdXNlcnNEYXRhLmxlbmd0aCA+IDAgJiYgPD5cbiAgICAgICAgICAgIDx0YWJsZT5cbiAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPk5vbTwvdGg+XG4gICAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5QcsOpbm9tPC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPk1haWw8L3RoPlxuICAgICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+VMOpbMOpcGhvbmU8L3RoPlxuICAgICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+SUQgUkRWLVNvbGlkYXJpdMOpczwvdGg+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8dHI+PC90cj5cbiAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgIHt1c2Vyc0RhdGEubWFwKCh1c2VyLCBpbmRleCkgPT4gKDx0ciBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9Pnt1c2VyW1wiTk9NXCJdfTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT57dXNlcltcIlBSRU5PTVwiXX08L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+e3VzZXJbXCJNQUlMXCJdfTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT57dXNlcltcIlRFTEVQSE9ORVwiXX08L3RkPlxuICAgICAgICAgICAgICAgICAge3VzZXJbXCJJRFwiXSAhPSBcIlwiICYmXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9Pnt1c2VyW1wiSURcIl19PC90ZD5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHt1c2VyW1wiSURcIl0gPT09IFwiXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+PGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBjcmVhdGVVc2VyKHVzZXIsIGluZGV4KX0gPkNyw6llciB1biBjb21wdGU8L2J1dHRvbj48L3RkPlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgPC90YWJsZT5cblxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtmaWxlV3JpdGVyfT5SZWfDqW7DqXJlciBmaWNoaWVyPC9idXR0b24+XG4gICAgICAgICAgPC8+fVxuICAgICAgICA8Lz59XG5cbiAgICAgICAgPEZvb3RlclxuICAgICAgICAgIHN1YmplY3Q9XCJFeHDDqXJpbWVudGF0aW9uIEFyZGVubmVzXCJcbiAgICAgICAgICBwb3VycXVvaT1cIlF1ZWwgZXN0IGwnb2JqZWN0aWYgZGUgY2V0dGUgZXhww6lyaW1lbnRhdGlvbiZuYnNwOz9cIlxuICAgICAgICAgIHRleHQ9ezw+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5GYWNpbGl0ZXIgbGUgdHJhdmFpbCBkZXMgYWdlbnRzIGR1IGTDqXBhcnRlbWVudCBldCB0ZXN0ZXIgbCd1dGlsaXNhdGlvbiBkZSBsJ2FwcGxpY2F0aW9uIFJEVi1Tb2xpZGFyaXTDqXMgcG91ciBhY2PDqWzDqXJlciBsYSBwcmlzZSBkdSBwcmVtaWVyIHJlbmRlei12b3VzIGQnb3JpZW50YXRpb24uPC9wPlxuICAgICAgICAgIDwvPn1cbiAgICAgICAgLz5cbiAgICAgIDwvbWFpbj5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==