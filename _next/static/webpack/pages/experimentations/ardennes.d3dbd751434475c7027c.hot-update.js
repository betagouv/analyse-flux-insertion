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

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    count: 0,
    size: 0
  }),
      promises = _useState7[0],
      setPromises = _useState7[1];

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
      alert("yes");
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
      var processedData = jsonData.map(function (userData, index) {
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
            } else {
              userData["Compte rdv"] = "Nope";
            }
          }); // Récupérer le token d'invitation
          // Envoyer le mail à la place d'Isabelle
        } else {
          if (userData["RDV pris"] != "O") {// Vérifier si l'utilisateur a pris un rdv
            // si oui => userData["RDV pris"] = "O";
            // si non => userData["RDV pris"] = "N";
          }

          userData["RDV pris"] = "N";
        }

        setPromises({
          count: promises.count + 1,
          size: jsonData.length
        });
        return userData;
      }); // setUsersData(processedData);
      // const outWorkbook = XLSX.utils.book_new();
      // const outWorksheet = XLSX.utils.json_to_sheet(processedData);
      // XLSX.utils.book_append_sheet(outWorkbook, outWorksheet, "DIVERGENCES");
      // XLSX.utils.book_append_sheet(outWorkbook, xls.Sheets[xls.SheetNames[1]], "GRAPHIQUE");
      // XLSX.utils.book_append_sheet(outWorkbook, xls.Sheets[xls.SheetNames[2]], "Selection COA");
      // XLSX.writeFile(outWorkbook, `ardennes_rsa_${getFormattedTime()}.xlsx`)

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
        lineNumber: 138,
        columnNumber: 9
      }, this), !isLogged && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: "create-forms",
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.create,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_login_form__WEBPACK_IMPORTED_MODULE_7__["default"], {
          onLogin: onLogin
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 11
      }, this), isLogged && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_file__WEBPACK_IMPORTED_MODULE_5__["default"], {
          fileHandler: fileHandler,
          isPending: isPending,
          fileSize: fileSize
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 11
        }, this), usersData && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.subtitle,
            children: "B\xE9n\xE9ficiaires RSA"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 13
          }, this), usersData.length == 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.description,
            children: "Aucun b\xE9n\xE9ficiaire dans le fichier"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 15
          }, this), usersData.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                  rowSpan: "2",
                  children: "Nom"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 163,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                  rowSpan: "2",
                  children: "Pr\xE9nom"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 164,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                  rowSpan: "2",
                  children: "Mail"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 165,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                  rowSpan: "2",
                  children: "T\xE9l\xE9phone"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 166,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 162,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 161,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
              children: usersData.map(function (user, index) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                    children: user["NOM"]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 171,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                    children: user["PRENOM"]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 172,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                    children: user["MAIL"]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 173,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                    children: user["TELEPHONE"]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 174,
                    columnNumber: 21
                  }, _this)]
                }, index, true, {
                  fileName: _jsxFileName,
                  lineNumber: 170,
                  columnNumber: 52
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 169,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 160,
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
              lineNumber: 186,
              columnNumber: 15
            }, this)
          }, void 0, false)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 11
        }, this)]
      }, void 0, true)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 136,
    columnNumber: 5
  }, this);
}

_s(Ardennes, "u0JHv+RDSRmX1/iF4fTq9NAiWCY=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXhwZXJpbWVudGF0aW9ucy9hcmRlbm5lcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJyZWR1Y2VyIiwicmVkdWNlckZhY3RvcnkiLCJkZXZNb2RlIiwiQXJkZW5uZXMiLCJ1c2VTdGF0ZSIsImRldkZpbGUiLCJzZXREZXZGaWxlIiwidXNlUmVkdWNlciIsImluaXRSZWR1Y2VyIiwicnVucyIsImRpc3BhdGNoUnVucyIsInVzZXJzRGF0YSIsInNldFVzZXJzRGF0YSIsImlzUGVuZGluZyIsInNldElzUGVuZGluZyIsImZpbGVTaXplIiwic2V0RmlsZVNpemUiLCJpc0xvZ2dlZCIsInNldElzTG9nZ2VkIiwidWlkIiwiY2xpZW50IiwidG9rZW4iLCJzZXRUb2tlbiIsImNvdW50Iiwic2l6ZSIsInByb21pc2VzIiwic2V0UHJvbWlzZXMiLCJSRFZfVVJMIiwicHJvY2VzcyIsInBhdGgiLCJ1cmwiLCJvbkxvZ2luIiwidG9rZW5JZCIsInVzZUVmZmVjdCIsImFsZXJ0IiwiZmlsZUhhbmRsZXIiLCJmaWxlIiwic3RhcnRfdGltZSIsIkRhdGUiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwiZXZlbnQiLCJmaWxlRGF0YSIsIlVpbnQ4QXJyYXkiLCJ0YXJnZXQiLCJyZXN1bHQiLCJ4bHMiLCJYTFNYIiwidHlwZSIsIndvcmtzaGVldCIsIlNoZWV0cyIsIlNoZWV0TmFtZXMiLCJyYW5nZSIsImRlY29kZV9yYW5nZSIsInMiLCJjIiwiZSIsIm5ld19yYW5nZSIsImVuY29kZV9yYW5nZSIsImpzb25EYXRhIiwic2hlZXRfdG9fanNvbiIsImJsYW5rcm93cyIsInJhdyIsImRlZnZhbCIsInByb2Nlc3NlZERhdGEiLCJtYXAiLCJ1c2VyRGF0YSIsImluZGV4IiwidXNlciIsImZpcnN0X25hbWUiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwidG9Mb3dlckNhc2UiLCJsYXN0X25hbWUiLCJlbWFpbCIsInBob25lX251bWJlciIsInJlcGxhY2UiLCJvcmdhbmlzYXRpb25faWRzIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJsZW5ndGgiLCJpdGVtIiwidGltZXN0YW1wIiwidG9JU09TdHJpbmciLCJkdXJhdGlvbiIsImZpbGVuYW1lIiwibmFtZSIsInJlYWRBc0FycmF5QnVmZmVyIiwic3R5bGVzIiwiY29udGFpbmVyIiwibWFpbiIsInRpdGxlIiwiY3JlYXRlIiwic3VidGl0bGUiLCJkZXNjcmlwdGlvbiIsInRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQSxJQUFNQSxPQUFPLEdBQUdDLHVFQUFjLENBQUMsZ0RBQUQsQ0FBOUI7QUFDQSxJQUFNQyxPQUFPLE9BQWI7QUFFZSxTQUFTQyxRQUFULEdBQW9CO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ0hDLHNEQUFRLENBQUMsSUFBRCxDQURMO0FBQUEsTUFDMUJDLE9BRDBCO0FBQUEsTUFDakJDLFVBRGlCOztBQUFBLG9CQUVKQyx3REFBVSxDQUFDUCxPQUFELEVBQVUsRUFBVixFQUFjUSw0REFBZCxDQUZOO0FBQUEsTUFFMUJDLElBRjBCO0FBQUEsTUFFcEJDLFlBRm9COztBQUFBLG1CQUdDTixzREFBUSxDQUFDLElBQUQsQ0FIVDtBQUFBLE1BRzFCTyxTQUgwQjtBQUFBLE1BR2ZDLFlBSGU7O0FBQUEsbUJBSUNSLHNEQUFRLENBQUMsS0FBRCxDQUpUO0FBQUEsTUFJMUJTLFNBSjBCO0FBQUEsTUFJZkMsWUFKZTs7QUFBQSxtQkFLRFYsc0RBQVEsQ0FBQyxDQUFELENBTFA7QUFBQSxNQUsxQlcsUUFMMEI7QUFBQSxNQUtoQkMsV0FMZ0I7O0FBQUEsbUJBTURaLHNEQUFRLENBQUMsS0FBRCxDQU5QO0FBQUEsTUFNMUJh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QURGO0FBMEREOztHQWhMdUJyRyxROztLQUFBQSxRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2V4cGVyaW1lbnRhdGlvbnMvYXJkZW5uZXMuZDNkYmQ3NTE0MzQ0NzVjNzAyN2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvZGUgYXZlYyBvcmdhIGZpeGUgKEFyZGVubmVzKVxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0ICogYXMgWExTWCBmcm9tICd4bHN4JztcblxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2xheW91dCdcbmltcG9ydCBGaWxlSGFuZGxlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2ZpbGUnXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvZm9vdGVyJ1xuaW1wb3J0IExvZ2luRm9ybSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2xvZ2luLWZvcm0nXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uLy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5cbmltcG9ydCB7IGdldEZvcm1hdHRlZFRpbWUgfSBmcm9tICcuLi8uLi8uLi9saWIvY25hZidcbmltcG9ydCB7IGluaXRSZWR1Y2VyLCByZWR1Y2VyRmFjdG9yeSB9IGZyb20gJy4uLy4uLy4uL2xpYi9oaXN0b3JpcXVlJ1xuXG5jb25zdCByZWR1Y2VyID0gcmVkdWNlckZhY3RvcnkoJ0V4cMOpcmltZW50YXRpb24gQXJkZW5uZXMgLSBDTkFGIC0gQsOpbsOpZmljaWFpcmUnKVxuY29uc3QgZGV2TW9kZSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09ICdkZXZlbG9wbWVudCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXJkZW5uZXMoKSB7XG4gIGNvbnN0IFtkZXZGaWxlLCBzZXREZXZGaWxlXSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFtydW5zLCBkaXNwYXRjaFJ1bnNdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBbXSwgaW5pdFJlZHVjZXIpXG4gIGNvbnN0IFt1c2Vyc0RhdGEsIHNldFVzZXJzRGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2lzUGVuZGluZywgc2V0SXNQZW5kaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2ZpbGVTaXplLCBzZXRGaWxlU2l6ZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2lzTG9nZ2VkLCBzZXRJc0xvZ2dlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt0b2tlbiwgc2V0VG9rZW5dID0gdXNlU3RhdGUoe1xuICAgICAgICAgIFwidG9rZW5JZFwiOiAnJyxcbiAgICAgICAgICB1aWQ6ICcnLFxuICAgICAgICAgIGNsaWVudDogJydcbiAgfSk7XG4gIGNvbnN0IFtwcm9taXNlcywgc2V0UHJvbWlzZXNdID0gdXNlU3RhdGUoe1xuICAgIGNvdW50OiAwLFxuICAgIHNpemU6IDBcbiAgfSk7XG4gIGNvbnN0IFJEVl9VUkwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19SRFZfREVNT19VUkw7XG4gIGNvbnN0IHBhdGggPSAnL3VzZXJzJztcbiAgY29uc3QgdXJsID0gYCR7UkRWX1VSTH0vYXBpL3YxJHtwYXRofWA7XG5cblxuICBjb25zdCBvbkxvZ2luID0gKHRva2VuSWQsIHVpZCwgY2xpZW50KSA9PiB7XG4gICAgc2V0VG9rZW4oeyAuLi50b2tlbiwgdG9rZW5JZDogdG9rZW5JZCwgdWlkOiB1aWQsIGNsaWVudDogY2xpZW50IH0pO1xuICAgIHNldElzTG9nZ2VkKHRydWUpO1xuICB9O1xuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgaWYoZGV2RmlsZSkge1xuICAvLyAgICAgZmlsZUhhbmRsZXIoZGV2RmlsZSlcbiAgLy8gICB9XG4gIC8vIH0sIFtkZXZGaWxlXSlcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZihwcm9taXNlcy5zaXplID4gMCAmJiBwcm9taXNlcy5jb3VudCA9PSBwcm9taXNlcy5zaXplICkge1xuICAgICAgYWxlcnQoXCJ5ZXNcIilcbiAgICB9XG4gIH0sIFtwcm9taXNlc10pXG5cbiAgY29uc3QgZmlsZUhhbmRsZXIgPSAoZmlsZSkgPT4ge1xuICAgIGlmIChkZXZNb2RlICYmIGZpbGUgIT0gZGV2RmlsZSkge1xuICAgICAgc2V0RGV2RmlsZShmaWxlKVxuICAgIH1cbiAgICBzZXRGaWxlU2l6ZShmaWxlLnNpemUpO1xuICAgIHNldElzUGVuZGluZyh0cnVlKTtcbiAgICBjb25zdCBzdGFydF90aW1lID0gbmV3IERhdGUoKTtcblxuICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXG4gICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgY29uc3QgZmlsZURhdGEgPSBuZXcgVWludDhBcnJheShldmVudC50YXJnZXQucmVzdWx0KTtcbiAgICAgIGNvbnN0IHhscyA9IFhMU1gucmVhZChmaWxlRGF0YSwge3R5cGU6J2FycmF5J30pXG4gICAgICAvKiBHZXQgZmlyc3Qgd29ya3NoZWV0ICovXG4gICAgICBjb25zdCB3b3Jrc2hlZXQgPSB4bHMuU2hlZXRzW3hscy5TaGVldE5hbWVzWzBdXTtcbiAgICAgIC8vIExpbWl0ZXIgbGEgY2FwdHVyZSBhdXggY29sb25uZXMgQS1UXG4gICAgICBjb25zdCByYW5nZSA9IFhMU1gudXRpbHMuZGVjb2RlX3JhbmdlKHdvcmtzaGVldFsnIXJlZiddKTtcbiAgICAgIHJhbmdlLnMuYyA9IDA7IC8vIDAgPT0gWExTWC51dGlscy5kZWNvZGVfY29sKFwiQVwiKVxuICAgICAgcmFuZ2UuZS5jID0gMTk7IC8vIDE5ID09IFhMU1gudXRpbHMuZGVjb2RlX2NvbChcIlRcIilcbiAgICAgIGNvbnN0IG5ld19yYW5nZSA9IFhMU1gudXRpbHMuZW5jb2RlX3JhbmdlKHJhbmdlKTtcbiAgICAgIC8qIENvbnZlcnQgYXJyYXkgdG8ganNvbiovXG4gICAgICBjb25zdCBqc29uRGF0YSA9IFhMU1gudXRpbHMuc2hlZXRfdG9fanNvbih3b3Jrc2hlZXQsIHsgYmxhbmtyb3dzOiBmYWxzZSwgcmF3OiBmYWxzZSwgZGVmdmFsOiBudWxsLCByYW5nZTogbmV3X3JhbmdlIH0pO1xuICAgICAgY29uc3QgcHJvY2Vzc2VkRGF0YSA9IGpzb25EYXRhLm1hcCgodXNlckRhdGEsIGluZGV4KSA9PiB7XG4gICAgICAgIGlmICh1c2VyRGF0YVtcIkNvbXB0ZSByZHZcIl0gIT0gXCJPXCIpIHtcbiAgICAgICAgICBjb25zdCB1c2VyID0geyBmaXJzdF9uYW1lOiB1c2VyRGF0YVtcIlBSRU5PTVwiXS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHVzZXJEYXRhW1wiUFJFTk9NXCJdLnNsaWNlKDEpLnRvTG93ZXJDYXNlKCksIGxhc3RfbmFtZTogdXNlckRhdGFbXCJOT01cIl0uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB1c2VyRGF0YVtcIk5PTVwiXS5zbGljZSgxKS50b0xvd2VyQ2FzZSgpLCBlbWFpbDogdXNlckRhdGFbXCJNQUlMXCJdLCBwaG9uZV9udW1iZXI6IHVzZXJEYXRhW1wiVEVMRVBIT05FXCJdLnJlcGxhY2UoL1xccysvZywgJycpLCBvcmdhbmlzYXRpb25faWRzOiBbMV0gfTtcbiAgICAgICAgICBmZXRjaCh1cmwsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICBcImFjY2Vzcy10b2tlblwiOiB0b2tlbi50b2tlbklkLFxuICAgICAgICAgICAgICB1aWQ6IHRva2VuLnVpZCxcbiAgICAgICAgICAgICAgY2xpZW50OiB0b2tlbi5jbGllbnRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh1c2VyKVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLy8gQ29tcHRlciBsZSBub21icmUgZGUgY29tcHRlcyBjcsOpw6lzIGV0IGxlIG5vbWJyZSBkZSBmYWlsID8gRXQgbG9nZ2VyIHBvdXIgbGVzIGZhaWxzIHBvdXIgaW5kaXF1ZXIgcXVpIGEgZmFpbCA/XG5cbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICB1c2VyRGF0YVtcIkNvbXB0ZSByZHZcIl0gPSBcIk9cIjtcbiAgICAgICAgICAgICAgdXNlckRhdGFbXCJSRFYgcHJpc1wiXSA9IFwiTlwiO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdXNlckRhdGFbXCJDb21wdGUgcmR2XCJdID0gXCJOb3BlXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICAvLyBSw6ljdXDDqXJlciBsZSB0b2tlbiBkJ2ludml0YXRpb25cbiAgICAgICAgICAvLyBFbnZveWVyIGxlIG1haWwgw6AgbGEgcGxhY2UgZCdJc2FiZWxsZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh1c2VyRGF0YVtcIlJEViBwcmlzXCJdICE9IFwiT1wiKSB7XG4gICAgICAgICAgICAvLyBWw6lyaWZpZXIgc2kgbCd1dGlsaXNhdGV1ciBhIHByaXMgdW4gcmR2XG4gICAgICAgICAgICAvLyBzaSBvdWkgPT4gdXNlckRhdGFbXCJSRFYgcHJpc1wiXSA9IFwiT1wiO1xuICAgICAgICAgICAgLy8gc2kgbm9uID0+IHVzZXJEYXRhW1wiUkRWIHByaXNcIl0gPSBcIk5cIjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdXNlckRhdGFbXCJSRFYgcHJpc1wiXSA9IFwiTlwiO1xuICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgc2V0UHJvbWlzZXMoeyBjb3VudDogcHJvbWlzZXMuY291bnQgKyAxLCBzaXplOiBqc29uRGF0YS5sZW5ndGh9KVxuICAgICAgICAgICAgICByZXR1cm4gdXNlckRhdGE7XG5cbiAgICAgIH0pXG4gICAgICAvLyBzZXRVc2Vyc0RhdGEocHJvY2Vzc2VkRGF0YSk7XG4gICAgICAvLyBjb25zdCBvdXRXb3JrYm9vayA9IFhMU1gudXRpbHMuYm9va19uZXcoKTtcbiAgICAgIC8vIGNvbnN0IG91dFdvcmtzaGVldCA9IFhMU1gudXRpbHMuanNvbl90b19zaGVldChwcm9jZXNzZWREYXRhKTtcbiAgICAgIC8vIFhMU1gudXRpbHMuYm9va19hcHBlbmRfc2hlZXQob3V0V29ya2Jvb2ssIG91dFdvcmtzaGVldCwgXCJESVZFUkdFTkNFU1wiKTtcbiAgICAgIC8vIFhMU1gudXRpbHMuYm9va19hcHBlbmRfc2hlZXQob3V0V29ya2Jvb2ssIHhscy5TaGVldHNbeGxzLlNoZWV0TmFtZXNbMV1dLCBcIkdSQVBISVFVRVwiKTtcbiAgICAgIC8vIFhMU1gudXRpbHMuYm9va19hcHBlbmRfc2hlZXQob3V0V29ya2Jvb2ssIHhscy5TaGVldHNbeGxzLlNoZWV0TmFtZXNbMl1dLCBcIlNlbGVjdGlvbiBDT0FcIik7XG4gICAgICAvLyBYTFNYLndyaXRlRmlsZShvdXRXb3JrYm9vaywgYGFyZGVubmVzX3JzYV8ke2dldEZvcm1hdHRlZFRpbWUoKX0ueGxzeGApXG5cbiAgICAgIHNldElzUGVuZGluZyhmYWxzZSk7XG5cbiAgICAgIGRpc3BhdGNoUnVucyh7XG4gICAgICAgIHR5cGU6ICdhcHBlbmQnLFxuICAgICAgICBpdGVtOiB7XG4gICAgICAgICAgdGltZXN0YW1wOiAobmV3IERhdGUoKSkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxOSksXG4gICAgICAgICAgZHVyYXRpb246IChuZXcgRGF0ZSgpKSAtIHN0YXJ0X3RpbWUsXG4gICAgICAgICAgZmlsZW5hbWU6IGZpbGUubmFtZSxcbiAgICAgICAgICBmaWxlU2l6ZTogZmlsZS5zaXplLFxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoZmlsZSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxuICAgICAgICAgIEV4cMOpcmltZW50YXRpb24gQXJkZW5uZXNcbiAgICAgICAgPC9oMT5cblxuICAgICAgICB7IWlzTG9nZ2VkICYmXG4gICAgICAgICAgPGRpdiBpZD1cImNyZWF0ZS1mb3Jtc1wiIGNsYXNzTmFtZT17c3R5bGVzLmNyZWF0ZX0+XG4gICAgICAgICAgICA8TG9naW5Gb3JtIG9uTG9naW49e29uTG9naW59IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cblxuICAgICAgICB7IGlzTG9nZ2VkICYmIDw+XG4gICAgICAgICAgPEZpbGVIYW5kbGVyIGZpbGVIYW5kbGVyPXtmaWxlSGFuZGxlcn0gaXNQZW5kaW5nPXtpc1BlbmRpbmd9IGZpbGVTaXplPXtmaWxlU2l6ZX0gLz5cblxuICAgICAgICAgIHsgdXNlcnNEYXRhICYmIDw+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuc3VidGl0bGV9PlxuICAgICAgICAgICAgICBCw6luw6lmaWNpYWlyZXMgUlNBXG4gICAgICAgICAgICA8L2gyPlxuXG4gICAgICAgICAgICB7IHVzZXJzRGF0YS5sZW5ndGggPT0gMCAmJlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+QXVjdW4gYsOpbsOpZmljaWFpcmUgZGFucyBsZSBmaWNoaWVyPC9wPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgeyB1c2Vyc0RhdGEubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5Ob208L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5QcsOpbm9tPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+TWFpbDwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPlTDqWzDqXBob25lPC90aD5cbiAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICB7dXNlcnNEYXRhLm1hcCgodXNlciwgaW5kZXgpID0+ICg8dHIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57dXNlcltcIk5PTVwiXX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3VzZXJbXCJQUkVOT01cIl19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPnt1c2VyW1wiTUFJTFwiXX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3VzZXJbXCJURUxFUEhPTkVcIl19PC90ZD5cbiAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8Lz59XG5cbiAgICAgICAgICA8Rm9vdGVyXG4gICAgICAgICAgICBzdWJqZWN0PVwiRXhww6lyaW1lbnRhdGlvbiBBcmRlbm5lc1wiXG4gICAgICAgICAgICBwb3VycXVvaT1cIlF1ZWwgZXN0IGwnb2JqZWN0aWYgZGUgY2V0dGUgZXhww6lyaW1lbnRhdGlvbiZuYnNwOz9cIlxuICAgICAgICAgICAgdGV4dD17PD5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+RmFjaWxpdGVyIGxlIHRyYXZhaWwgZGVzIGFnZW50cyBkdSBkw6lwYXJ0ZW1lbnQgZXQgdGVzdGVyIGwndXRpbGlzYXRpb24gZGUgbCdhcHBsaWNhdGlvbiBSRFYtU29saWRhcml0w6lzIHBvdXIgYWNjw6lsw6lyZXIgbGEgcHJpc2UgZHUgcHJlbWllciByZW5kZXotdm91cyBkJ29yaWVudGF0aW9uLjwvcD5cbiAgICAgICAgICAgIDwvPn1cbiAgICAgICAgICAvPlxuICAgICAgICA8Lz59XG4gICAgICA8L21haW4+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=