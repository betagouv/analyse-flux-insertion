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
      console.log(userData["INDEX INDIVIDU"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXhwZXJpbWVudGF0aW9ucy9hcmRlbm5lcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJyZWR1Y2VyIiwicmVkdWNlckZhY3RvcnkiLCJkZXZNb2RlIiwiQXJkZW5uZXMiLCJ1c2VTdGF0ZSIsImRldkZpbGUiLCJzZXREZXZGaWxlIiwidXNlUmVkdWNlciIsImluaXRSZWR1Y2VyIiwicnVucyIsImRpc3BhdGNoUnVucyIsInVzZXJzRGF0YSIsInNldFVzZXJzRGF0YSIsImlzUGVuZGluZyIsInNldElzUGVuZGluZyIsImZpbGVTaXplIiwic2V0RmlsZVNpemUiLCJpc0xvZ2dlZCIsInNldElzTG9nZ2VkIiwidWlkIiwiY2xpZW50IiwidG9rZW4iLCJzZXRUb2tlbiIsIlJEVl9VUkwiLCJwcm9jZXNzIiwicGF0aCIsInVybCIsInVzZUVmZmVjdCIsImZpbGVIYW5kbGVyIiwiZmlsZVdyaXRlciIsIm91dFdvcmtib29rIiwiWExTWCIsImJvb2tfbmV3Iiwib3V0V29ya3NoZWV0IiwianNvbl90b19zaGVldCIsImJvb2tfYXBwZW5kX3NoZWV0IiwiZ2V0Rm9ybWF0dGVkVGltZSIsImNyZWF0ZVVzZXIiLCJ1c2VyRGF0YSIsImkiLCJ1c2VyIiwiZmlyc3RfbmFtZSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJ0b0xvd2VyQ2FzZSIsImxhc3RfbmFtZSIsImVtYWlsIiwicGhvbmVfbnVtYmVyIiwicmVwbGFjZSIsIm9yZ2FuaXNhdGlvbl9pZHMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJ0b2tlbklkIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsInVzZXJzZGF0YSIsInN1Y2Nlc3MiLCJpZCIsImVycm9ycyIsImVycm9yIiwiYWxlcnQiLCJvbkxvZ2luIiwiZmlsZSIsInNpemUiLCJzdGFydF90aW1lIiwiRGF0ZSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJldmVudCIsImZpbGVEYXRhIiwiVWludDhBcnJheSIsInRhcmdldCIsInhscyIsInR5cGUiLCJ3b3Jrc2hlZXQiLCJTaGVldHMiLCJTaGVldE5hbWVzIiwicmFuZ2UiLCJkZWNvZGVfcmFuZ2UiLCJzIiwiYyIsImUiLCJuZXdfcmFuZ2UiLCJlbmNvZGVfcmFuZ2UiLCJqc29uRGF0YSIsInNoZWV0X3RvX2pzb24iLCJibGFua3Jvd3MiLCJyYXciLCJkZWZ2YWwiLCJpdGVtIiwidGltZXN0YW1wIiwidG9JU09TdHJpbmciLCJkdXJhdGlvbiIsImZpbGVuYW1lIiwibmFtZSIsImZpbGVMaW5lcyIsImxlbmd0aCIsInJlYWRBc0FycmF5QnVmZmVyIiwic3R5bGVzIiwiY29udGFpbmVyIiwibWFpbiIsInRpdGxlIiwiY3JlYXRlIiwic3VidGl0bGUiLCJkZXNjcmlwdGlvbiIsIm1hcCIsImluZGV4IiwiY2VudGVyIiwidGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHQyx1RUFBYyxDQUFDLGdEQUFELENBQTlCO0FBQ0EsSUFBTUMsT0FBTyxPQUFiO0FBRWUsU0FBU0MsUUFBVCxHQUFvQjtBQUFBOztBQUFBOztBQUFBLGtCQUNIQyxzREFBUSxDQUFDLElBQUQsQ0FETDtBQUFBLE1BQzFCQyxPQUQwQjtBQUFBLE1BQ2pCQyxVQURpQjs7QUFBQSxvQkFFSkMsd0RBQVUsQ0FBQ1AsT0FBRCxFQUFVLEVBQVYsRUFBY1EsNERBQWQsQ0FGTjtBQUFBLE1BRTFCQyxJQUYwQjtBQUFBLE1BRXBCQyxZQUZvQjs7QUFBQSxtQkFHQ04sc0RBQVEsQ0FBQyxJQUFELENBSFQ7QUFBQSxNQUcxQk8sU0FIMEI7QUFBQSxNQUdmQyxZQUhlOztBQUFBLG1CQUlDUixzREFBUSxDQUFDLEtB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O0FBQUEsK0JBQU1oRixVQUFVLENBQUNHLElBQUQsRUFBTzRFLEtBQVAsQ0FBaEI7QUFBQSx1QkFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFUNkI7QUFBQSxtQkFBU0EsS0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUFsQjtBQUFBLGVBQWQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFEd0IsZUE2QnhCO0FBQVEsbUJBQU8sRUFBRXZGLFVBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQTdCd0I7QUFBQSx3QkFSYjtBQUFBLHNCQWJqQixlQXNERSxxRUFBQywwREFBRDtBQUNFLGVBQU8sRUFBQyw2QkFEVjtBQUVFLGdCQUFRLEVBQUMsc0RBRlg7QUFHRSxZQUFJLGVBQUU7QUFBQSxpQ0FDSjtBQUFHLHFCQUFTLEVBQUUrRSw4REFBTSxDQUFDVSxJQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURJO0FBSFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXRERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFrRUQ7O0dBckx1Qm5ILFE7O0tBQUFBLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZXhwZXJpbWVudGF0aW9ucy9hcmRlbm5lcy5jODg0NjllZmE4ZGMwZWVkZDhjOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gUGVuc2V6IMOgIHbDqXJpZmllciBsJ0lEIGRlIGwnb3JnYW5pc2F0aW9uXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgKiBhcyBYTFNYIGZyb20gJ3hsc3gnO1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0J1xuaW1wb3J0IEZpbGVIYW5kbGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvZmlsZSdcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9mb290ZXInXG5pbXBvcnQgTG9naW5Gb3JtIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvbG9naW4tZm9ybSdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcblxuaW1wb3J0IHsgZ2V0Rm9ybWF0dGVkVGltZSB9IGZyb20gJy4uLy4uLy4uL2xpYi9jbmFmJ1xuaW1wb3J0IHsgaW5pdFJlZHVjZXIsIHJlZHVjZXJGYWN0b3J5IH0gZnJvbSAnLi4vLi4vLi4vbGliL2hpc3RvcmlxdWUnXG5cbmNvbnN0IHJlZHVjZXIgPSByZWR1Y2VyRmFjdG9yeSgnRXhww6lyaW1lbnRhdGlvbiBBcmRlbm5lcyAtIENOQUYgLSBCw6luw6lmaWNpYWlyZScpXG5jb25zdCBkZXZNb2RlID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT0gJ2RldmVsb3BtZW50J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcmRlbm5lcygpIHtcbiAgY29uc3QgW2RldkZpbGUsIHNldERldkZpbGVdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW3J1bnMsIGRpc3BhdGNoUnVuc10gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIFtdLCBpbml0UmVkdWNlcilcbiAgY29uc3QgW3VzZXJzRGF0YSwgc2V0VXNlcnNEYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbaXNQZW5kaW5nLCBzZXRJc1BlbmRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZmlsZVNpemUsIHNldEZpbGVTaXplXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbaXNMb2dnZWQsIHNldElzTG9nZ2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Rva2VuLCBzZXRUb2tlbl0gPSB1c2VTdGF0ZSh7XG4gICAgICAgICAgXCJ0b2tlbklkXCI6ICcnLFxuICAgICAgICAgIHVpZDogJycsXG4gICAgICAgICAgY2xpZW50OiAnJ1xuICB9KTtcbiAgY29uc3QgUkRWX1VSTCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1JEVl9ERU1PX1VSTDtcbiAgY29uc3QgcGF0aCA9ICcvdXNlcnMnO1xuICBjb25zdCB1cmwgPSBgJHtSRFZfVVJMfS9hcGkvdjEke3BhdGh9YDtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmKGRldkZpbGUpIHtcbiAgICAgIGZpbGVIYW5kbGVyKGRldkZpbGUpXG4gICAgfVxuICB9LCBbZGV2RmlsZV0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZih1c2Vyc0RhdGEpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHVzZXJzRGF0YSlcbiAgICB9XG4gIH0sIFt1c2Vyc0RhdGFdKVxuXG4gIGNvbnN0IGZpbGVXcml0ZXIgPSAoKSA9PiB7XG4gICAgY29uc3Qgb3V0V29ya2Jvb2sgPSBYTFNYLnV0aWxzLmJvb2tfbmV3KCk7XG4gICAgY29uc3Qgb3V0V29ya3NoZWV0ID0gWExTWC51dGlscy5qc29uX3RvX3NoZWV0KHVzZXJzRGF0YSk7XG4gICAgWExTWC51dGlscy5ib29rX2FwcGVuZF9zaGVldChvdXRXb3JrYm9vaywgb3V0V29ya3NoZWV0LCBcIkRJVkVSR0VOQ0VTXCIpO1xuICAgIC8vIFhMU1gudXRpbHMuYm9va19hcHBlbmRfc2hlZXQob3V0V29ya2Jvb2ssIHhscy5TaGVldHNbeGxzLlNoZWV0TmFtZXNbMV1dLCBcIkdSQVBISVFVRVwiKTtcbiAgICAvLyBYTFNYLnV0aWxzLmJvb2tfYXBwZW5kX3NoZWV0KG91dFdvcmtib29rLCB4bHMuU2hlZXRzW3hscy5TaGVldE5hbWVzWzJdXSwgXCJTZWxlY3Rpb24gQ09BXCIpO1xuICAgIFhMU1gud3JpdGVGaWxlKG91dFdvcmtib29rLCBgYXJkZW5uZXNfcnNhXyR7Z2V0Rm9ybWF0dGVkVGltZSgpfS54bHN4YClcbiAgfVxuXG4gIGNvbnN0IGNyZWF0ZVVzZXIgPSAodXNlckRhdGEsIGkpID0+IHtcbiAgICBjb25zdCB1c2VyID0geyBmaXJzdF9uYW1lOiB1c2VyRGF0YVtcIlBSRU5PTVwiXS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHVzZXJEYXRhW1wiUFJFTk9NXCJdLnNsaWNlKDEpLnRvTG93ZXJDYXNlKCksIGxhc3RfbmFtZTogdXNlckRhdGFbXCJOT01cIl0uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB1c2VyRGF0YVtcIk5PTVwiXS5zbGljZSgxKS50b0xvd2VyQ2FzZSgpLCBlbWFpbDogdXNlckRhdGFbXCJNQUlMXCJdLCBwaG9uZV9udW1iZXI6IHVzZXJEYXRhW1wiVEVMRVBIT05FXCJdLnJlcGxhY2UoL1xccysvZywgJycpLCBvcmdhbmlzYXRpb25faWRzOiBbMV0gfTtcbiAgICBmZXRjaCh1cmwsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICBcImFjY2Vzcy10b2tlblwiOiB0b2tlbi50b2tlbklkLFxuICAgICAgICB1aWQ6IHRva2VuLnVpZCxcbiAgICAgICAgY2xpZW50OiB0b2tlbi5jbGllbnRcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh1c2VyKVxuICAgIH0pXG5cbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHVzZXJEYXRhW1wiSU5ERVggSU5ESVZJRFVcIl0pXG4gICAgICBsZXQgdXNlcnNkYXRhID0gWy4uLnVzZXJzRGF0YV07XG4gICAgICBpZiAocmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgICAgdXNlcnNkYXRhW2ldW1wiSURcIl0gPSByZXN1bHQudXNlci5pZFxuICAgICAgICBzZXRVc2Vyc0RhdGEodXNlcnNkYXRhKTtcbiAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmVycm9ycy5lbWFpbCAmJiByZXN1bHQuZXJyb3JzLmVtYWlsWzBdLmVycm9yID09PSBcInRha2VuXCIpIHtcbiAgICAgICAgdXNlcnNkYXRhW2ldW1wiSURcIl0gPSByZXN1bHQuZXJyb3JzLmVtYWlsWzBdLmlkXG4gICAgICAgIHNldFVzZXJzRGF0YSh1c2Vyc2RhdGEpO1xuICAgICAgICBhbGVydChcIlVuIGNvbXB0ZSBhc3NvY2nDqSDDoCBjZXQgZW1haWwgZXhpc3RlIGTDqWrDoFwiKVxuICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZXJyb3JzLmVtYWlsICYmIHJlc3VsdC5lcnJvcnMuZW1haWxbMF0uZXJyb3IgPT09IFwiaW52YWxpZFwiKSB7XG4gICAgICAgIGFsZXJ0KFwiTCdhZHJlc3NlIG1haWwgbidlc3QgcGFzIHZhbGlkZVwiKVxuICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZXJyb3JzICYmIHJlc3VsdC5lcnJvcnNbMF0pIHtcbiAgICAgICAgYWxlcnQocmVzdWx0LmVycm9yc1swXSlcbiAgICAgIH1cbiAgICB9KVxuICAgIC5jYXRjaChlcnJvciA9PiBhbGVydChlcnJvcikpXG4gICAgLy8gUsOpY3Vww6lyZXIgbGUgdG9rZW4gZCdpbnZpdGF0aW9uXG4gICAgLy8gRW52b3llciBsZSBtYWlsIMOgIGxhIHBsYWNlIGQnSXNhYmVsbGVcbiAgfVxuXG4gIGNvbnN0IG9uTG9naW4gPSAodG9rZW5JZCwgdWlkLCBjbGllbnQpID0+IHtcbiAgICBzZXRUb2tlbih7IC4uLnRva2VuLCB0b2tlbklkOiB0b2tlbklkLCB1aWQ6IHVpZCwgY2xpZW50OiBjbGllbnQgfSk7XG4gICAgc2V0SXNMb2dnZWQodHJ1ZSk7XG4gIH07XG5cbiAgY29uc3QgZmlsZUhhbmRsZXIgPSAoZmlsZSkgPT4ge1xuICAgIGlmIChkZXZNb2RlICYmIGZpbGUgIT0gZGV2RmlsZSkge1xuICAgICAgc2V0RGV2RmlsZShmaWxlKVxuICAgIH1cbiAgICBzZXRGaWxlU2l6ZShmaWxlLnNpemUpO1xuICAgIHNldElzUGVuZGluZyh0cnVlKTtcbiAgICBjb25zdCBzdGFydF90aW1lID0gbmV3IERhdGUoKTtcblxuICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXG4gICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgY29uc3QgZmlsZURhdGEgPSBuZXcgVWludDhBcnJheShldmVudC50YXJnZXQucmVzdWx0KTtcbiAgICAgIGNvbnN0IHhscyA9IFhMU1gucmVhZChmaWxlRGF0YSwge3R5cGU6J2FycmF5J30pXG4gICAgICAvKiBHZXQgZmlyc3Qgd29ya3NoZWV0ICovXG4gICAgICBjb25zdCB3b3Jrc2hlZXQgPSB4bHMuU2hlZXRzW3hscy5TaGVldE5hbWVzWzBdXTtcbiAgICAgIC8vIExpbWl0ZXIgbGEgY2FwdHVyZSBhdXggY29sb25uZXMgQS1UXG4gICAgICBjb25zdCByYW5nZSA9IFhMU1gudXRpbHMuZGVjb2RlX3JhbmdlKHdvcmtzaGVldFsnIXJlZiddKTtcbiAgICAgIHJhbmdlLnMuYyA9IDA7IC8vIDAgPT0gWExTWC51dGlscy5kZWNvZGVfY29sKFwiQVwiKVxuICAgICAgcmFuZ2UuZS5jID0gMTk7IC8vIDE5ID09IFhMU1gudXRpbHMuZGVjb2RlX2NvbChcIlRcIilcbiAgICAgIGNvbnN0IG5ld19yYW5nZSA9IFhMU1gudXRpbHMuZW5jb2RlX3JhbmdlKHJhbmdlKTtcbiAgICAgIC8qIENvbnZlcnQgYXJyYXkgdG8ganNvbiovXG4gICAgICBjb25zdCBqc29uRGF0YSA9IFhMU1gudXRpbHMuc2hlZXRfdG9fanNvbih3b3Jrc2hlZXQsIHsgYmxhbmtyb3dzOiBmYWxzZSwgcmF3OiBmYWxzZSwgZGVmdmFsOiBcIlwiLCByYW5nZTogbmV3X3JhbmdlIH0pO1xuICAgICAgc2V0VXNlcnNEYXRhKGpzb25EYXRhKTtcbiAgICAgIHNldElzUGVuZGluZyhmYWxzZSk7XG5cbiAgICAgIGRpc3BhdGNoUnVucyh7XG4gICAgICAgIHR5cGU6ICdhcHBlbmQnLFxuICAgICAgICBpdGVtOiB7XG4gICAgICAgICAgdGltZXN0YW1wOiAobmV3IERhdGUoKSkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxOSksXG4gICAgICAgICAgZHVyYXRpb246IChuZXcgRGF0ZSgpKSAtIHN0YXJ0X3RpbWUsXG4gICAgICAgICAgZmlsZW5hbWU6IGZpbGUubmFtZSxcbiAgICAgICAgICBmaWxlU2l6ZTogZmlsZS5zaXplLFxuICAgICAgICAgIGZpbGVMaW5lczoganNvbkRhdGEubGVuZ3RoXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihmaWxlKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPExheW91dCBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9IGZpbGVIYW5kbGVyPXtmaWxlSGFuZGxlcn0+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cbiAgICAgICAgICBFeHDDqXJpbWVudGF0aW9uIEFyZGVubmVzXG4gICAgICAgIDwvaDE+XG5cbiAgICAgICAgeyFpc0xvZ2dlZCAmJlxuICAgICAgICAgIDxkaXYgaWQ9XCJjcmVhdGUtZm9ybXNcIiBjbGFzc05hbWU9e3N0eWxlcy5jcmVhdGV9PlxuICAgICAgICAgICAgPExvZ2luRm9ybSBvbkxvZ2luPXtvbkxvZ2lufSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG5cbiAgICAgICAgPEZpbGVIYW5kbGVyIGZpbGVIYW5kbGVyPXtmaWxlSGFuZGxlcn0gaXNQZW5kaW5nPXtpc1BlbmRpbmd9IGZpbGVTaXplPXtmaWxlU2l6ZX0gLz5cblxuICAgICAgICB7IHVzZXJzRGF0YSAmJiA8PlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5zdWJ0aXRsZX0+XG4gICAgICAgICAgICBCw6luw6lmaWNpYWlyZXMgUlNBXG4gICAgICAgICAgPC9oMj5cblxuICAgICAgICAgIHsgdXNlcnNEYXRhLmxlbmd0aCA9PSAwICYmXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+QXVjdW4gYsOpbsOpZmljaWFpcmUgZGFucyBsZSBmaWNoaWVyPC9wPlxuICAgICAgICAgIH1cbiAgICAgICAgICB7IHVzZXJzRGF0YS5sZW5ndGggPiAwICYmIDw+XG4gICAgICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5Ob208L3RoPlxuICAgICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+UHLDqW5vbTwvdGg+XG4gICAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5NYWlsPC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPlTDqWzDqXBob25lPC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPklEIFJEVi1Tb2xpZGFyaXTDqXM8L3RoPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPHRyPjwvdHI+XG4gICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICB7dXNlcnNEYXRhLm1hcCgodXNlciwgaW5kZXgpID0+ICg8dHIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT57dXNlcltcIk5PTVwiXX08L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+e3VzZXJbXCJQUkVOT01cIl19PC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9Pnt1c2VyW1wiTUFJTFwiXX08L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+e3VzZXJbXCJURUxFUEhPTkVcIl19PC90ZD5cbiAgICAgICAgICAgICAgICAgIHt1c2VyW1wiSURcIl0gIT0gXCJcIiAmJlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT57dXNlcltcIklEXCJdfTwvdGQ+XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB7dXNlcltcIklEXCJdID09PSBcIlwiICYmXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9PjxidXR0b24gb25DbGljaz17KCkgPT4gY3JlYXRlVXNlcih1c2VyLCBpbmRleCl9ID5DcsOpZXIgdW4gY29tcHRlPC9idXR0b24+PC90ZD5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+XG5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17ZmlsZVdyaXRlcn0+UmVnw6luw6lyZXIgZmljaGllcjwvYnV0dG9uPlxuICAgICAgICAgIDwvPn1cbiAgICAgICAgPC8+fVxuXG4gICAgICAgIDxGb290ZXJcbiAgICAgICAgICBzdWJqZWN0PVwiRXhww6lyaW1lbnRhdGlvbiBBcmRlbm5lc1wiXG4gICAgICAgICAgcG91cnF1b2k9XCJRdWVsIGVzdCBsJ29iamVjdGlmIGRlIGNldHRlIGV4cMOpcmltZW50YXRpb24mbmJzcDs/XCJcbiAgICAgICAgICB0ZXh0PXs8PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+RmFjaWxpdGVyIGxlIHRyYXZhaWwgZGVzIGFnZW50cyBkdSBkw6lwYXJ0ZW1lbnQgZXQgdGVzdGVyIGwndXRpbGlzYXRpb24gZGUgbCdhcHBsaWNhdGlvbiBSRFYtU29saWRhcml0w6lzIHBvdXIgYWNjw6lsw6lyZXIgbGEgcHJpc2UgZHUgcHJlbWllciByZW5kZXotdm91cyBkJ29yaWVudGF0aW9uLjwvcD5cbiAgICAgICAgICA8Lz59XG4gICAgICAgIC8+XG4gICAgICA8L21haW4+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=