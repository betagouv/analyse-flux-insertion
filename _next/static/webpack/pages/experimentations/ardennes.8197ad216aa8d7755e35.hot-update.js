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
        console.log(jsonData.size);

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
                size: jsonData.size
              });
              return userData;
            } else {
              userData["Compte rdv"] = "Nope";
              setPromises({
                count: promises.count + 1,
                size: jsonData.size
              });
              return userData;
            }
          }); // Récupérer le token d'invitation
          // Envoyer le mail à la place d'Isabelle
          // } else if (userData["RDV pris"] != "O") {
          //   // Vérifier si l'utilisateur a pris un rdv
          //   // si oui => userData["RDV pris"] = "O";
          //   // si non => userData["RDV pris"] = "N";
          //   userData["RDV pris"] = "N";
          //   return userData;
        }
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
        lineNumber: 139,
        columnNumber: 9
      }, this), !isLogged && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: "create-forms",
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.create,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_login_form__WEBPACK_IMPORTED_MODULE_7__["default"], {
          onLogin: onLogin
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 11
      }, this), isLogged && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_file__WEBPACK_IMPORTED_MODULE_5__["default"], {
          fileHandler: fileHandler,
          isPending: isPending,
          fileSize: fileSize
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 11
        }, this), usersData && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.subtitle,
            children: "B\xE9n\xE9ficiaires RSA"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 153,
            columnNumber: 13
          }, this), usersData.length == 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.description,
            children: "Aucun b\xE9n\xE9ficiaire dans le fichier"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 15
          }, this), usersData.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                  rowSpan: "2",
                  children: "Nom"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 164,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                  rowSpan: "2",
                  children: "Pr\xE9nom"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 165,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                  rowSpan: "2",
                  children: "Mail"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 166,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                  rowSpan: "2",
                  children: "T\xE9l\xE9phone"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 167,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 163,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 162,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
              children: usersData.map(function (user, index) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                    children: user["NOM"]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 172,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                    children: user["PRENOM"]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 173,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                    children: user["MAIL"]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 174,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                    children: user["TELEPHONE"]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 175,
                    columnNumber: 21
                  }, _this)]
                }, index, true, {
                  fileName: _jsxFileName,
                  lineNumber: 171,
                  columnNumber: 52
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 170,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 161,
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
              lineNumber: 187,
              columnNumber: 15
            }, this)
          }, void 0, false)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 11
        }, this)]
      }, void 0, true)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 137,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXhwZXJpbWVudGF0aW9ucy9hcmRlbm5lcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJyZWR1Y2VyIiwicmVkdWNlckZhY3RvcnkiLCJkZXZNb2RlIiwiQXJkZW5uZXMiLCJ1c2VTdGF0ZSIsImRldkZpbGUiLCJzZXREZXZGaWxlIiwidXNlUmVkdWNlciIsImluaXRSZWR1Y2VyIiwicnVucyIsImRpc3BhdGNoUnVucyIsInVzZXJzRGF0YSIsInNldFVzZXJzRGF0YSIsImlzUGVuZGluZyIsInNldElzUGVuZGluZyIsImZpbGVTaXplIiwic2V0RmlsZVNpemUiLCJpc0xvZ2dlZCIsInNldElzTG9nZ2VkIiwidWlkIiwiY2xpZW50IiwidG9rZW4iLCJzZXRUb2tlbiIsImNvdW50Iiwic2l6ZSIsInByb21pc2VzIiwic2V0UHJvbWlzZXMiLCJSRFZfVVJMIiwicHJvY2VzcyIsInBhdGgiLCJ1cmwiLCJvbkxvZ2luIiwidG9rZW5JZCIsInVzZUVmZmVjdCIsImFsZXJ0IiwiZmlsZUhhbmRsZXIiLCJmaWxlIiwic3RhcnRfdGltZSIsIkRhdGUiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwiZXZlbnQiLCJmaWxlRGF0YSIsIlVpbnQ4QXJyYXkiLCJ0YXJnZXQiLCJyZXN1bHQiLCJ4bHMiLCJYTFNYIiwidHlwZSIsIndvcmtzaGVldCIsIlNoZWV0cyIsIlNoZWV0TmFtZXMiLCJyYW5nZSIsImRlY29kZV9yYW5nZSIsInMiLCJjIiwiZSIsIm5ld19yYW5nZSIsImVuY29kZV9yYW5nZSIsImpzb25EYXRhIiwic2hlZXRfdG9fanNvbiIsImJsYW5rcm93cyIsInJhdyIsImRlZnZhbCIsInByb2Nlc3NlZERhdGEiLCJtYXAiLCJ1c2VyRGF0YSIsImluZGV4IiwiY29uc29sZSIsImxvZyIsInVzZXIiLCJmaXJzdF9uYW1lIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsInRvTG93ZXJDYXNlIiwibGFzdF9uYW1lIiwiZW1haWwiLCJwaG9uZV9udW1iZXIiLCJyZXBsYWNlIiwib3JnYW5pc2F0aW9uX2lkcyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlc3BvbnNlIiwic3RhdHVzIiwiaXRlbSIsInRpbWVzdGFtcCIsInRvSVNPU3RyaW5nIiwiZHVyYXRpb24iLCJmaWxlbmFtZSIsIm5hbWUiLCJyZWFkQXNBcnJheUJ1ZmZlciIsInN0eWxlcyIsImNvbnRhaW5lciIsIm1haW4iLCJ0aXRsZSIsImNyZWF0ZSIsInN1YnRpdGxlIiwibGVuZ3RoIiwiZGVzY3JpcHRpb24iLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHQyx1RUFBYyxDQUFDLGdEQUFELENBQTlCO0FBQ0EsSUFBTUMsT0FBTyxPQUFiO0FBRWUsU0FBU0MsUUFBVCxHQUFvQjtBQUFBOztBQUFBOztBQUFBLGtCQUNIQyxzREFBUSxDQUFDLElBQUQsQ0FETDtBQUFBLE1BQzFCQyxPQUQwQjtBQUFBLE1BQ2pCQyxVQURpQjs7QUFBQSxvQkFFSkMsd0RBQVUsQ0FBQ1AsT0FBRCxFQUFVLEVBQVYsRUFBY1EsNERBQWQsQ0FGTjtBQUFBLE1BRTFCQyxJQUYwQjtBQUFBLE1BRXBCQyxZQUZvQjs7QUFBQSxtQkFHQ04sc0RBQVEsQ0FBQyxJQUFELENBSFQ7QUFBQSxNQUcxQk8sU0FIMEI7QUFBQSxNQUdmQyxZQUhlOztBQUFBLG1CQUlDUixzREFBUSxDQUFDLEtBQUQsQ0FKVDtBQUFBLE1BSTFCUyxTQUowQjtBQUFBLE1BSWZDLFlBSmU7O0FBQUEsbUJBS0RWLHNEQUFRLENBQUMsQ0FBRCxDQUxQO0FBQUEsTUFLMUJXLFFBTDBCO0FBQUEsTUFLaEJDLFdBTGdCOztBQUFBLG1CQU1EWixzREFBUSxDQUFDLEtBQUQs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QURJO0FBSFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFsQ1k7QUFBQSxzQkFYaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBMEREOztHQWpMdUJ2RyxROztLQUFBQSxRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2V4cGVyaW1lbnRhdGlvbnMvYXJkZW5uZXMuODE5N2FkMjE2YWE4ZDc3NTVlMzUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvZGUgYXZlYyBvcmdhIGZpeGUgKEFyZGVubmVzKVxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0ICogYXMgWExTWCBmcm9tICd4bHN4JztcblxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2xheW91dCdcbmltcG9ydCBGaWxlSGFuZGxlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2ZpbGUnXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvZm9vdGVyJ1xuaW1wb3J0IExvZ2luRm9ybSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2xvZ2luLWZvcm0nXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uLy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5cbmltcG9ydCB7IGdldEZvcm1hdHRlZFRpbWUgfSBmcm9tICcuLi8uLi8uLi9saWIvY25hZidcbmltcG9ydCB7IGluaXRSZWR1Y2VyLCByZWR1Y2VyRmFjdG9yeSB9IGZyb20gJy4uLy4uLy4uL2xpYi9oaXN0b3JpcXVlJ1xuXG5jb25zdCByZWR1Y2VyID0gcmVkdWNlckZhY3RvcnkoJ0V4cMOpcmltZW50YXRpb24gQXJkZW5uZXMgLSBDTkFGIC0gQsOpbsOpZmljaWFpcmUnKVxuY29uc3QgZGV2TW9kZSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09ICdkZXZlbG9wbWVudCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXJkZW5uZXMoKSB7XG4gIGNvbnN0IFtkZXZGaWxlLCBzZXREZXZGaWxlXSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFtydW5zLCBkaXNwYXRjaFJ1bnNdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBbXSwgaW5pdFJlZHVjZXIpXG4gIGNvbnN0IFt1c2Vyc0RhdGEsIHNldFVzZXJzRGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2lzUGVuZGluZywgc2V0SXNQZW5kaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2ZpbGVTaXplLCBzZXRGaWxlU2l6ZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2lzTG9nZ2VkLCBzZXRJc0xvZ2dlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt0b2tlbiwgc2V0VG9rZW5dID0gdXNlU3RhdGUoe1xuICAgICAgICAgIFwidG9rZW5JZFwiOiAnJyxcbiAgICAgICAgICB1aWQ6ICcnLFxuICAgICAgICAgIGNsaWVudDogJydcbiAgfSk7XG4gIGNvbnN0IFtwcm9taXNlcywgc2V0UHJvbWlzZXNdID0gdXNlU3RhdGUoe1xuICAgIGNvdW50OiAwLFxuICAgIHNpemU6IDBcbiAgfSk7XG4gIGNvbnN0IFJEVl9VUkwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19SRFZfREVNT19VUkw7XG4gIGNvbnN0IHBhdGggPSAnL3VzZXJzJztcbiAgY29uc3QgdXJsID0gYCR7UkRWX1VSTH0vYXBpL3YxJHtwYXRofWA7XG5cblxuICBjb25zdCBvbkxvZ2luID0gKHRva2VuSWQsIHVpZCwgY2xpZW50KSA9PiB7XG4gICAgc2V0VG9rZW4oeyAuLi50b2tlbiwgdG9rZW5JZDogdG9rZW5JZCwgdWlkOiB1aWQsIGNsaWVudDogY2xpZW50IH0pO1xuICAgIHNldElzTG9nZ2VkKHRydWUpO1xuICB9O1xuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgaWYoZGV2RmlsZSkge1xuICAvLyAgICAgZmlsZUhhbmRsZXIoZGV2RmlsZSlcbiAgLy8gICB9XG4gIC8vIH0sIFtkZXZGaWxlXSlcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZihwcm9taXNlcy5zaXplID4gMCAmJiBwcm9taXNlcy5jb3VudCA9PSBwcm9taXNlcy5zaXplICkge1xuICAgICAgYWxlcnQoXCJ5ZXNcIilcbiAgICB9XG4gIH0sIFtwcm9taXNlc10pXG5cbiAgY29uc3QgZmlsZUhhbmRsZXIgPSAoZmlsZSkgPT4ge1xuICAgIGlmIChkZXZNb2RlICYmIGZpbGUgIT0gZGV2RmlsZSkge1xuICAgICAgc2V0RGV2RmlsZShmaWxlKVxuICAgIH1cbiAgICBzZXRGaWxlU2l6ZShmaWxlLnNpemUpO1xuICAgIHNldElzUGVuZGluZyh0cnVlKTtcbiAgICBjb25zdCBzdGFydF90aW1lID0gbmV3IERhdGUoKTtcblxuICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXG4gICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgY29uc3QgZmlsZURhdGEgPSBuZXcgVWludDhBcnJheShldmVudC50YXJnZXQucmVzdWx0KTtcbiAgICAgIGNvbnN0IHhscyA9IFhMU1gucmVhZChmaWxlRGF0YSwge3R5cGU6J2FycmF5J30pXG4gICAgICAvKiBHZXQgZmlyc3Qgd29ya3NoZWV0ICovXG4gICAgICBjb25zdCB3b3Jrc2hlZXQgPSB4bHMuU2hlZXRzW3hscy5TaGVldE5hbWVzWzBdXTtcbiAgICAgIC8vIExpbWl0ZXIgbGEgY2FwdHVyZSBhdXggY29sb25uZXMgQS1UXG4gICAgICBjb25zdCByYW5nZSA9IFhMU1gudXRpbHMuZGVjb2RlX3JhbmdlKHdvcmtzaGVldFsnIXJlZiddKTtcbiAgICAgIHJhbmdlLnMuYyA9IDA7IC8vIDAgPT0gWExTWC51dGlscy5kZWNvZGVfY29sKFwiQVwiKVxuICAgICAgcmFuZ2UuZS5jID0gMTk7IC8vIDE5ID09IFhMU1gudXRpbHMuZGVjb2RlX2NvbChcIlRcIilcbiAgICAgIGNvbnN0IG5ld19yYW5nZSA9IFhMU1gudXRpbHMuZW5jb2RlX3JhbmdlKHJhbmdlKTtcbiAgICAgIC8qIENvbnZlcnQgYXJyYXkgdG8ganNvbiovXG4gICAgICBjb25zdCBqc29uRGF0YSA9IFhMU1gudXRpbHMuc2hlZXRfdG9fanNvbih3b3Jrc2hlZXQsIHsgYmxhbmtyb3dzOiBmYWxzZSwgcmF3OiBmYWxzZSwgZGVmdmFsOiBudWxsLCByYW5nZTogbmV3X3JhbmdlIH0pO1xuICAgICAgY29uc3QgcHJvY2Vzc2VkRGF0YSA9IGpzb25EYXRhLm1hcCgodXNlckRhdGEsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGpzb25EYXRhLnNpemUpO1xuICAgICAgICBpZiAodXNlckRhdGFbXCJDb21wdGUgcmR2XCJdICE9IFwiT1wiKSB7XG4gICAgICAgICAgY29uc3QgdXNlciA9IHsgZmlyc3RfbmFtZTogdXNlckRhdGFbXCJQUkVOT01cIl0uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB1c2VyRGF0YVtcIlBSRU5PTVwiXS5zbGljZSgxKS50b0xvd2VyQ2FzZSgpLCBsYXN0X25hbWU6IHVzZXJEYXRhW1wiTk9NXCJdLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdXNlckRhdGFbXCJOT01cIl0uc2xpY2UoMSkudG9Mb3dlckNhc2UoKSwgZW1haWw6IHVzZXJEYXRhW1wiTUFJTFwiXSwgcGhvbmVfbnVtYmVyOiB1c2VyRGF0YVtcIlRFTEVQSE9ORVwiXS5yZXBsYWNlKC9cXHMrL2csICcnKSwgb3JnYW5pc2F0aW9uX2lkczogWzFdIH07XG4gICAgICAgICAgZmV0Y2godXJsLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgXCJhY2Nlc3MtdG9rZW5cIjogdG9rZW4udG9rZW5JZCxcbiAgICAgICAgICAgICAgdWlkOiB0b2tlbi51aWQsXG4gICAgICAgICAgICAgIGNsaWVudDogdG9rZW4uY2xpZW50XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodXNlcilcbiAgICAgICAgICB9KVxuICAgICAgICAgIC8vIENvbXB0ZXIgbGUgbm9tYnJlIGRlIGNvbXB0ZXMgY3LDqcOpcyBldCBsZSBub21icmUgZGUgZmFpbCA/IEV0IGxvZ2dlciBwb3VyIGxlcyBmYWlscyBwb3VyIGluZGlxdWVyIHF1aSBhIGZhaWwgP1xuXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgdXNlckRhdGFbXCJDb21wdGUgcmR2XCJdID0gXCJPXCI7XG4gICAgICAgICAgICAgIHVzZXJEYXRhW1wiUkRWIHByaXNcIl0gPSBcIk5cIjtcbiAgICAgICAgICAgICAgc2V0UHJvbWlzZXMoeyBjb3VudDogcHJvbWlzZXMuY291bnQgKyAxLCBzaXplOiBqc29uRGF0YS5zaXplfSlcbiAgICAgICAgICAgICAgcmV0dXJuIHVzZXJEYXRhO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdXNlckRhdGFbXCJDb21wdGUgcmR2XCJdID0gXCJOb3BlXCI7XG4gICAgICAgICAgICAgIHNldFByb21pc2VzKHsgY291bnQ6IHByb21pc2VzLmNvdW50ICsgMSwgc2l6ZToganNvbkRhdGEuc2l6ZX0pXG4gICAgICAgICAgICAgIHJldHVybiB1c2VyRGF0YTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIC8vIFLDqWN1cMOpcmVyIGxlIHRva2VuIGQnaW52aXRhdGlvblxuICAgICAgICAgIC8vIEVudm95ZXIgbGUgbWFpbCDDoCBsYSBwbGFjZSBkJ0lzYWJlbGxlXG4gICAgICAgICAgLy8gfSBlbHNlIGlmICh1c2VyRGF0YVtcIlJEViBwcmlzXCJdICE9IFwiT1wiKSB7XG4gICAgICAgICAgICAvLyAgIC8vIFbDqXJpZmllciBzaSBsJ3V0aWxpc2F0ZXVyIGEgcHJpcyB1biByZHZcbiAgICAgICAgICAgIC8vICAgLy8gc2kgb3VpID0+IHVzZXJEYXRhW1wiUkRWIHByaXNcIl0gPSBcIk9cIjtcbiAgICAgICAgICAgIC8vICAgLy8gc2kgbm9uID0+IHVzZXJEYXRhW1wiUkRWIHByaXNcIl0gPSBcIk5cIjtcbiAgICAgICAgLy8gICB1c2VyRGF0YVtcIlJEViBwcmlzXCJdID0gXCJOXCI7XG4gICAgICAgIC8vICAgcmV0dXJuIHVzZXJEYXRhO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLy8gc2V0VXNlcnNEYXRhKHByb2Nlc3NlZERhdGEpO1xuICAgICAgLy8gY29uc3Qgb3V0V29ya2Jvb2sgPSBYTFNYLnV0aWxzLmJvb2tfbmV3KCk7XG4gICAgICAvLyBjb25zdCBvdXRXb3Jrc2hlZXQgPSBYTFNYLnV0aWxzLmpzb25fdG9fc2hlZXQocHJvY2Vzc2VkRGF0YSk7XG4gICAgICAvLyBYTFNYLnV0aWxzLmJvb2tfYXBwZW5kX3NoZWV0KG91dFdvcmtib29rLCBvdXRXb3Jrc2hlZXQsIFwiRElWRVJHRU5DRVNcIik7XG4gICAgICAvLyBYTFNYLnV0aWxzLmJvb2tfYXBwZW5kX3NoZWV0KG91dFdvcmtib29rLCB4bHMuU2hlZXRzW3hscy5TaGVldE5hbWVzWzFdXSwgXCJHUkFQSElRVUVcIik7XG4gICAgICAvLyBYTFNYLnV0aWxzLmJvb2tfYXBwZW5kX3NoZWV0KG91dFdvcmtib29rLCB4bHMuU2hlZXRzW3hscy5TaGVldE5hbWVzWzJdXSwgXCJTZWxlY3Rpb24gQ09BXCIpO1xuICAgICAgLy8gWExTWC53cml0ZUZpbGUob3V0V29ya2Jvb2ssIGBhcmRlbm5lc19yc2FfJHtnZXRGb3JtYXR0ZWRUaW1lKCl9Lnhsc3hgKVxuXG4gICAgICBzZXRJc1BlbmRpbmcoZmFsc2UpO1xuXG4gICAgICBkaXNwYXRjaFJ1bnMoe1xuICAgICAgICB0eXBlOiAnYXBwZW5kJyxcbiAgICAgICAgaXRlbToge1xuICAgICAgICAgIHRpbWVzdGFtcDogKG5ldyBEYXRlKCkpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTkpLFxuICAgICAgICAgIGR1cmF0aW9uOiAobmV3IERhdGUoKSkgLSBzdGFydF90aW1lLFxuICAgICAgICAgIGZpbGVuYW1lOiBmaWxlLm5hbWUsXG4gICAgICAgICAgZmlsZVNpemU6IGZpbGUuc2l6ZSxcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGZpbGUpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cbiAgICAgICAgICBFeHDDqXJpbWVudGF0aW9uIEFyZGVubmVzXG4gICAgICAgIDwvaDE+XG5cbiAgICAgICAgeyFpc0xvZ2dlZCAmJlxuICAgICAgICAgIDxkaXYgaWQ9XCJjcmVhdGUtZm9ybXNcIiBjbGFzc05hbWU9e3N0eWxlcy5jcmVhdGV9PlxuICAgICAgICAgICAgPExvZ2luRm9ybSBvbkxvZ2luPXtvbkxvZ2lufSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG5cbiAgICAgICAgeyBpc0xvZ2dlZCAmJiA8PlxuICAgICAgICAgIDxGaWxlSGFuZGxlciBmaWxlSGFuZGxlcj17ZmlsZUhhbmRsZXJ9IGlzUGVuZGluZz17aXNQZW5kaW5nfSBmaWxlU2l6ZT17ZmlsZVNpemV9IC8+XG5cbiAgICAgICAgICB7IHVzZXJzRGF0YSAmJiA8PlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnN1YnRpdGxlfT5cbiAgICAgICAgICAgICAgQsOpbsOpZmljaWFpcmVzIFJTQVxuICAgICAgICAgICAgPC9oMj5cblxuICAgICAgICAgICAgeyB1c2Vyc0RhdGEubGVuZ3RoID09IDAgJiZcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PkF1Y3VuIGLDqW7DqWZpY2lhaXJlIGRhbnMgbGUgZmljaGllcjwvcD5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHsgdXNlcnNEYXRhLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgICAgPHRhYmxlPlxuICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+Tm9tPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+UHLDqW5vbTwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPk1haWw8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5Uw6lsw6lwaG9uZTwvdGg+XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAge3VzZXJzRGF0YS5tYXAoKHVzZXIsIGluZGV4KSA9PiAoPHRyIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3VzZXJbXCJOT01cIl19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPnt1c2VyW1wiUFJFTk9NXCJdfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57dXNlcltcIk1BSUxcIl19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPnt1c2VyW1wiVEVMRVBIT05FXCJdfTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC8+fVxuXG4gICAgICAgICAgPEZvb3RlclxuICAgICAgICAgICAgc3ViamVjdD1cIkV4cMOpcmltZW50YXRpb24gQXJkZW5uZXNcIlxuICAgICAgICAgICAgcG91cnF1b2k9XCJRdWVsIGVzdCBsJ29iamVjdGlmIGRlIGNldHRlIGV4cMOpcmltZW50YXRpb24mbmJzcDs/XCJcbiAgICAgICAgICAgIHRleHQ9ezw+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRleHR9PkZhY2lsaXRlciBsZSB0cmF2YWlsIGRlcyBhZ2VudHMgZHUgZMOpcGFydGVtZW50IGV0IHRlc3RlciBsJ3V0aWxpc2F0aW9uIGRlIGwnYXBwbGljYXRpb24gUkRWLVNvbGlkYXJpdMOpcyBwb3VyIGFjY8OpbMOpcmVyIGxhIHByaXNlIGR1IHByZW1pZXIgcmVuZGV6LXZvdXMgZCdvcmllbnRhdGlvbi48L3A+XG4gICAgICAgICAgICA8Lz59XG4gICAgICAgICAgLz5cbiAgICAgICAgPC8+fVxuICAgICAgPC9tYWluPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9