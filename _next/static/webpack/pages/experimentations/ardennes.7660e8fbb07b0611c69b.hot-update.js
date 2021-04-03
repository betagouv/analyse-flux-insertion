webpackHotUpdate_N_E("pages/experimentations/ardennes",{

/***/ "./components/login-form.js":
/*!**********************************!*\
  !*** ./components/login-form.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoginForm; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "/home/q/code/qblanc/beta.gouv/analyse-flux-insertion/components/login-form.js",
    _s = $RefreshSig$();


function LoginForm(_ref) {
  _s();

  var onLogin = _ref.onLogin;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      login = _useState[0],
      setLogin = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      password = _useState2[0],
      setPassword = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isPending = _useState3[0],
      setIsPending = _useState3[1];

  var RDV_URL = "http://localhost:5000";
  var path = '/auth/sign_in';
  var url = "".concat(RDV_URL, "/api/v1").concat(path);

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    var user = {
      email: login,
      password: password
    };
    setIsPending(true);
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }).then(function (response) {
      setIsPending(false);

      if (response.ok) {
        onLogin(response.headers.get("access-token"), response.headers.get("uid"), response.headers.get("client"));
        return response.json();
      } else {
        alert("Aucun compte n'est rattach\xE9 \xE0 ce couple email/mot de passe. Merci de v\xE9rifier vos identifiants.");
      }
    }); // .then(result => {
    //   console.log('Success:');
    // })
    // .catch(error => {
    //   alert(`Une erreur s'est produite, merci de réessayer.`);
    //   console.error('Error:', error);
    // });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
    onSubmit: handleSubmit,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
      htmlFor: "agent_email",
      children: "Email"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      id: "agent_email",
      type: "email",
      value: login,
      onChange: function onChange(e) {
        return setLogin(e.target.value);
      },
      required: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
      htmlFor: "agent_password",
      children: "Mot de passe"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      id: "agent_password",
      type: "password",
      value: password,
      onChange: function onChange(e) {
        return setPassword(e.target.value);
      },
      required: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, this), !isPending && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      children: "Se connecter"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 22
    }, this), isPending && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      children: "Connexion en cours"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 21
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 5
  }, this);
}

_s(LoginForm, "dcx0SC2NNPP16vuxxYIUWcUla4M=");

_c = LoginForm;

var _c;

$RefreshReg$(_c, "LoginForm");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

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

  var createUser = function createUser(userData) {
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
      return console.log(result);
    }); // .then((response) => {
    //   if (response.status === 200) {
    //     console.log
    //     userData["Compte rdv"] = "O";
    //   } else {
    //     userData["Compte rdv"] = "N";
    //   }
    //   setProcessedData([...processedData, userData]);
    //   setPromises({ count: promises.count + 1, size: jsonData.length})
    //   return userData;
    // })
    // Récupérer le token d'invitation
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
        lineNumber: 127,
        columnNumber: 9
      }, this), !isLogged && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: "create-forms",
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.create,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_login_form__WEBPACK_IMPORTED_MODULE_7__["default"], {
          onLogin: onLogin
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_file__WEBPACK_IMPORTED_MODULE_5__["default"], {
        fileHandler: fileHandler,
        isPending: isPending,
        fileSize: fileSize
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 9
      }, this), usersData && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.subtitle,
          children: "B\xE9n\xE9ficiaires RSA"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 11
        }, this), usersData.length == 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.description,
          children: "Aucun b\xE9n\xE9ficiaire dans le fichier"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 145,
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
                  lineNumber: 151,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                  rowSpan: "2",
                  children: "Pr\xE9nom"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 152,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                  rowSpan: "2",
                  children: "Mail"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 153,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                  rowSpan: "2",
                  children: "T\xE9l\xE9phone"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 154,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                  rowSpan: "2",
                  children: "ID RDV-Solidarit\xE9s"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 155,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 150,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 157,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 149,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
              children: usersData.map(function (user, index) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.center,
                    children: user["NOM"]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 161,
                    columnNumber: 19
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.center,
                    children: user["PRENOM"]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 162,
                    columnNumber: 19
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.center,
                    children: user["MAIL"]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 163,
                    columnNumber: 19
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.center,
                    children: user["TELEPHONE"]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 164,
                    columnNumber: 19
                  }, _this), user[Object.keys(user)[18]] != "" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.center,
                    children: user[Object.keys(user)[18]]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 166,
                    columnNumber: 21
                  }, _this), user[Object.keys(user)[18]] === "" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.center,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                      onClick: function onClick() {
                        return createUser(user);
                      },
                      children: "Cr\xE9er un compte"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 169,
                      columnNumber: 51
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 169,
                    columnNumber: 21
                  }, _this)]
                }, index, true, {
                  fileName: _jsxFileName,
                  lineNumber: 160,
                  columnNumber: 50
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 159,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onClick: fileWriter,
            children: "Reg\xE9n\xE9rer fichier"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 176,
            columnNumber: 13
          }, this)]
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
            lineNumber: 184,
            columnNumber: 13
          }, this)
        }, void 0, false)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 125,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sb2dpbi1mb3JtLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9leHBlcmltZW50YXRpb25zL2FyZGVubmVzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkxvZ2luRm9ybSIsIm9uTG9naW4iLCJ1c2VTdGF0ZSIsImxvZ2luIiwic2V0TG9naW4iLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiaXNQZW5kaW5nIiwic2V0SXNQZW5kaW5nIiwiUkRWX1VSTCIsInByb2Nlc3MiLCJwYXRoIiwidXJsIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwidXNlciIsImVtYWlsIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzcG9uc2UiLCJvayIsImdldCIsImpzb24iLCJhbGVydCIsInRhcmdldCIsInZhbHVlIiwicmVkdWNlciIsInJlZHVjZXJGYWN0b3J5IiwiZGV2TW9kZSIsIkFyZGVubmVzIiwiZGV2RmlsZSIsInNldERldkZpbGUiLCJ1c2VSZWR1Y2VyIiwiaW5pdFJlZHVjZXIiLCJydW5zIiwiZGlzcGF0Y2hSdW5zIiwidXNlcnNEYXRhIiwic2V0VXNlcnNEYXRhIiwiZmlsZVNpemUiLCJzZXRGaWxlU2l6ZSIsImlzTG9nZ2VkIiwic2V0SXNMb2dnZWQiLCJ1aWQiLCJjbGllbnQiLCJ0b2tlbiIsInNldFRva2VuIiwidXNlRWZmZWN0IiwiZmlsZUhhbmRsZXIiLCJmaWxlV3JpdGVyIiwib3V0V29ya2Jvb2siLCJYTFNYIiwiYm9va19uZXciLCJvdXRXb3Jrc2hlZXQiLCJqc29uX3RvX3NoZWV0IiwiYm9va19hcHBlbmRfc2hlZXQiLCJnZXRGb3JtYXR0ZWRUaW1lIiwiY3JlYXRlVXNlciIsInVzZXJEYXRhIiwiZmlyc3RfbmFtZSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJ0b0xvd2VyQ2FzZSIsImxhc3RfbmFtZSIsInBob25lX251bWJlciIsInJlcGxhY2UiLCJvcmdhbmlzYXRpb25faWRzIiwidG9rZW5JZCIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJmaWxlIiwic2l6ZSIsInN0YXJ0X3RpbWUiLCJEYXRlIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsImV2ZW50IiwiZmlsZURhdGEiLCJVaW50OEFycmF5IiwieGxzIiwidHlwZSIsIndvcmtzaGVldCIsIlNoZWV0cyIsIlNoZWV0TmFtZXMiLCJyYW5nZSIsImRlY29kZV9yYW5nZSIsInMiLCJjIiwibmV3X3JhbmdlIiwiZW5jb2RlX3JhbmdlIiwianNvbkRhdGEiLCJzaGVldF90b19qc29uIiwiYmxhbmtyb3dzIiwicmF3IiwiZGVmdmFsIiwiaXRlbSIsInRpbWVzdGFtcCIsInRvSVNPU3RyaW5nIiwiZHVyYXRpb24iLCJmaWxlbmFtZSIsIm5hbWUiLCJmaWxlTGluZXMiLCJsZW5ndGgiLCJyZWFkQXNBcnJheUJ1ZmZlciIsInN0eWxlcyIsImNvbnRhaW5lciIsIm1haW4iLCJ0aXRsZSIsImNyZWF0ZSIsInN1YnRpdGxlIiwiZGVzY3JpcHRpb24iLCJtYXAiLCJpbmRleCIsImNlbnRlciIsIk9iamVjdCIsImtleXMiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLFNBQVQsT0FFWjtBQUFBOztBQUFBLE1BRERDLE9BQ0MsUUFEREEsT0FDQzs7QUFBQSxrQkFDeUJDLHNEQUFRLENBQUMsRUFBRCxDQURqQztBQUFBLE1BQ01DLEtBRE47QUFBQSxNQUNhQyxRQURiOztBQUFBLG1CQUUrQkYsc0RBQVEsQ0FBQyxFQUFELENBRnZDO0FBQUEsTUFFTUcsUUFGTjtBQUFBLE1BRWdCQyxXQUZoQjs7QUFBQSxtQkFHaUNKLHNEQUFRLENBQUMsS0FBRCxDQUh6QztBQUFBLE1BR01LLFNBSE47QUFBQSxNQUdpQkMsWUFIakI7O0FBSUQsTUFBTUMsT0FBTyxHQUFHQyx1QkFBaEI7QUFDQSxNQUFN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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBa0VEOztHQTdLdUJ6RixROztLQUFBQSxRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2V4cGVyaW1lbnRhdGlvbnMvYXJkZW5uZXMuNzY2MGU4ZmJiMDdiMDYxMWM2OWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luRm9ybSh7XG4gIG9uTG9naW5cbn0pIHtcbiAgY29uc3QgW2xvZ2luLCBzZXRMb2dpbl0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbaXNQZW5kaW5nLCBzZXRJc1BlbmRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBSRFZfVVJMID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUkRWX0RFTU9fVVJMO1xuICBjb25zdCBwYXRoID0gJy9hdXRoL3NpZ25faW4nO1xuICBjb25zdCB1cmwgPSBgJHtSRFZfVVJMfS9hcGkvdjEke3BhdGh9YDtcblxuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgdXNlciA9IHsgZW1haWw6IGxvZ2luLCBwYXNzd29yZDogcGFzc3dvcmQgfTtcbiAgICBzZXRJc1BlbmRpbmcodHJ1ZSk7XG5cbiAgICBmZXRjaCh1cmwsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh1c2VyKVxuICAgIH0pXG5cbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIHNldElzUGVuZGluZyhmYWxzZSk7XG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgb25Mb2dpbihyZXNwb25zZS5oZWFkZXJzLmdldChcImFjY2Vzcy10b2tlblwiKSwgcmVzcG9uc2UuaGVhZGVycy5nZXQoXCJ1aWRcIiksIHJlc3BvbnNlLmhlYWRlcnMuZ2V0KFwiY2xpZW50XCIpKTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KGBBdWN1biBjb21wdGUgbidlc3QgcmF0dGFjaMOpIMOgIGNlIGNvdXBsZSBlbWFpbC9tb3QgZGUgcGFzc2UuIE1lcmNpIGRlIHbDqXJpZmllciB2b3MgaWRlbnRpZmlhbnRzLmApO1xuICAgICAgfVxuICAgIH0pXG4gICAgLy8gLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKCdTdWNjZXNzOicpO1xuICAgIC8vIH0pXG4gICAgLy8gLmNhdGNoKGVycm9yID0+IHtcbiAgICAvLyAgIGFsZXJ0KGBVbmUgZXJyZXVyIHMnZXN0IHByb2R1aXRlLCBtZXJjaSBkZSByw6llc3NheWVyLmApO1xuICAgIC8vICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xuICAgIC8vIH0pO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybVxuICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cbiAgICA+XG4gICAgICA8bGFiZWwgaHRtbEZvcj1cImFnZW50X2VtYWlsXCI+RW1haWw8L2xhYmVsPlxuICAgICAgPGlucHV0XG4gICAgICAgIGlkPVwiYWdlbnRfZW1haWxcIlxuICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICB2YWx1ZT17bG9naW59XG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TG9naW4oZS50YXJnZXQudmFsdWUpfVxuICAgICAgICByZXF1aXJlZFxuICAgICAgLz5cbiAgICAgIDxsYWJlbCBodG1sRm9yPVwiYWdlbnRfcGFzc3dvcmRcIj5Nb3QgZGUgcGFzc2U8L2xhYmVsPlxuICAgICAgPGlucHV0XG4gICAgICAgIGlkPVwiYWdlbnRfcGFzc3dvcmRcIlxuICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICByZXF1aXJlZFxuICAgICAgLz5cbiAgICAgIHshaXNQZW5kaW5nICYmIDxidXR0b24+U2UgY29ubmVjdGVyPC9idXR0b24+fVxuICAgICAge2lzUGVuZGluZyAmJiA8YnV0dG9uPkNvbm5leGlvbiBlbiBjb3VyczwvYnV0dG9uPn1cbiAgICA8L2Zvcm0+XG4gIClcbn1cbiIsIi8vIFBlbnNleiDDoCB2w6lyaWZpZXIgbCdJRCBkZSBsJ29yZ2FuaXNhdGlvblxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0ICogYXMgWExTWCBmcm9tICd4bHN4JztcblxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2xheW91dCdcbmltcG9ydCBGaWxlSGFuZGxlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2ZpbGUnXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvZm9vdGVyJ1xuaW1wb3J0IExvZ2luRm9ybSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2xvZ2luLWZvcm0nXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uLy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5cbmltcG9ydCB7IGdldEZvcm1hdHRlZFRpbWUgfSBmcm9tICcuLi8uLi8uLi9saWIvY25hZidcbmltcG9ydCB7IGluaXRSZWR1Y2VyLCByZWR1Y2VyRmFjdG9yeSB9IGZyb20gJy4uLy4uLy4uL2xpYi9oaXN0b3JpcXVlJ1xuXG5jb25zdCByZWR1Y2VyID0gcmVkdWNlckZhY3RvcnkoJ0V4cMOpcmltZW50YXRpb24gQXJkZW5uZXMgLSBDTkFGIC0gQsOpbsOpZmljaWFpcmUnKVxuY29uc3QgZGV2TW9kZSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09ICdkZXZlbG9wbWVudCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXJkZW5uZXMoKSB7XG4gIGNvbnN0IFtkZXZGaWxlLCBzZXREZXZGaWxlXSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFtydW5zLCBkaXNwYXRjaFJ1bnNdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBbXSwgaW5pdFJlZHVjZXIpXG4gIGNvbnN0IFt1c2Vyc0RhdGEsIHNldFVzZXJzRGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2lzUGVuZGluZywgc2V0SXNQZW5kaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2ZpbGVTaXplLCBzZXRGaWxlU2l6ZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2lzTG9nZ2VkLCBzZXRJc0xvZ2dlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt0b2tlbiwgc2V0VG9rZW5dID0gdXNlU3RhdGUoe1xuICAgICAgICAgIFwidG9rZW5JZFwiOiAnJyxcbiAgICAgICAgICB1aWQ6ICcnLFxuICAgICAgICAgIGNsaWVudDogJydcbiAgfSk7XG4gIGNvbnN0IFJEVl9VUkwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19SRFZfREVNT19VUkw7XG4gIGNvbnN0IHBhdGggPSAnL3VzZXJzJztcbiAgY29uc3QgdXJsID0gYCR7UkRWX1VSTH0vYXBpL3YxJHtwYXRofWA7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZihkZXZGaWxlKSB7XG4gICAgICBmaWxlSGFuZGxlcihkZXZGaWxlKVxuICAgIH1cbiAgfSwgW2RldkZpbGVdKVxuXG4gIGNvbnN0IGZpbGVXcml0ZXIgPSAoKSA9PiB7XG4gICAgY29uc3Qgb3V0V29ya2Jvb2sgPSBYTFNYLnV0aWxzLmJvb2tfbmV3KCk7XG4gICAgY29uc3Qgb3V0V29ya3NoZWV0ID0gWExTWC51dGlscy5qc29uX3RvX3NoZWV0KHVzZXJzRGF0YSk7XG4gICAgWExTWC51dGlscy5ib29rX2FwcGVuZF9zaGVldChvdXRXb3JrYm9vaywgb3V0V29ya3NoZWV0LCBcIkRJVkVSR0VOQ0VTXCIpO1xuICAgIC8vIFhMU1gudXRpbHMuYm9va19hcHBlbmRfc2hlZXQob3V0V29ya2Jvb2ssIHhscy5TaGVldHNbeGxzLlNoZWV0TmFtZXNbMV1dLCBcIkdSQVBISVFVRVwiKTtcbiAgICAvLyBYTFNYLnV0aWxzLmJvb2tfYXBwZW5kX3NoZWV0KG91dFdvcmtib29rLCB4bHMuU2hlZXRzW3hscy5TaGVldE5hbWVzWzJdXSwgXCJTZWxlY3Rpb24gQ09BXCIpO1xuICAgIFhMU1gud3JpdGVGaWxlKG91dFdvcmtib29rLCBgYXJkZW5uZXNfcnNhXyR7Z2V0Rm9ybWF0dGVkVGltZSgpfS54bHN4YClcbiAgfVxuXG4gIGNvbnN0IGNyZWF0ZVVzZXIgPSAodXNlckRhdGEpID0+IHtcbiAgICBjb25zdCB1c2VyID0geyBmaXJzdF9uYW1lOiB1c2VyRGF0YVtcIlBSRU5PTVwiXS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHVzZXJEYXRhW1wiUFJFTk9NXCJdLnNsaWNlKDEpLnRvTG93ZXJDYXNlKCksIGxhc3RfbmFtZTogdXNlckRhdGFbXCJOT01cIl0uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB1c2VyRGF0YVtcIk5PTVwiXS5zbGljZSgxKS50b0xvd2VyQ2FzZSgpLCBlbWFpbDogdXNlckRhdGFbXCJNQUlMXCJdLCBwaG9uZV9udW1iZXI6IHVzZXJEYXRhW1wiVEVMRVBIT05FXCJdLnJlcGxhY2UoL1xccysvZywgJycpLCBvcmdhbmlzYXRpb25faWRzOiBbMV0gfTtcbiAgICBmZXRjaCh1cmwsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICBcImFjY2Vzcy10b2tlblwiOiB0b2tlbi50b2tlbklkLFxuICAgICAgICB1aWQ6IHRva2VuLnVpZCxcbiAgICAgICAgY2xpZW50OiB0b2tlbi5jbGllbnRcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh1c2VyKVxuICAgIH0pXG5cbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4ocmVzdWx0ID0+XG4gICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXG4gICAgKVxuXG4gICAgLy8gLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgLy8gICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAvLyAgICAgY29uc29sZS5sb2dcbiAgICAvLyAgICAgdXNlckRhdGFbXCJDb21wdGUgcmR2XCJdID0gXCJPXCI7XG4gICAgLy8gICB9IGVsc2Uge1xuICAgIC8vICAgICB1c2VyRGF0YVtcIkNvbXB0ZSByZHZcIl0gPSBcIk5cIjtcbiAgICAvLyAgIH1cbiAgICAvLyAgIHNldFByb2Nlc3NlZERhdGEoWy4uLnByb2Nlc3NlZERhdGEsIHVzZXJEYXRhXSk7XG4gICAgLy8gICBzZXRQcm9taXNlcyh7IGNvdW50OiBwcm9taXNlcy5jb3VudCArIDEsIHNpemU6IGpzb25EYXRhLmxlbmd0aH0pXG4gICAgLy8gICByZXR1cm4gdXNlckRhdGE7XG4gICAgLy8gfSlcbiAgICAvLyBSw6ljdXDDqXJlciBsZSB0b2tlbiBkJ2ludml0YXRpb25cbiAgICAvLyBFbnZveWVyIGxlIG1haWwgw6AgbGEgcGxhY2UgZCdJc2FiZWxsZVxuICB9XG5cbiAgY29uc3Qgb25Mb2dpbiA9ICh0b2tlbklkLCB1aWQsIGNsaWVudCkgPT4ge1xuICAgIHNldFRva2VuKHsgLi4udG9rZW4sIHRva2VuSWQ6IHRva2VuSWQsIHVpZDogdWlkLCBjbGllbnQ6IGNsaWVudCB9KTtcbiAgICBzZXRJc0xvZ2dlZCh0cnVlKTtcbiAgfTtcblxuICBjb25zdCBmaWxlSGFuZGxlciA9IChmaWxlKSA9PiB7XG4gICAgaWYgKGRldk1vZGUgJiYgZmlsZSAhPSBkZXZGaWxlKSB7XG4gICAgICBzZXREZXZGaWxlKGZpbGUpXG4gICAgfVxuICAgIHNldEZpbGVTaXplKGZpbGUuc2l6ZSk7XG4gICAgc2V0SXNQZW5kaW5nKHRydWUpO1xuICAgIGNvbnN0IHN0YXJ0X3RpbWUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcbiAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBjb25zdCBmaWxlRGF0YSA9IG5ldyBVaW50OEFycmF5KGV2ZW50LnRhcmdldC5yZXN1bHQpO1xuICAgICAgY29uc3QgeGxzID0gWExTWC5yZWFkKGZpbGVEYXRhLCB7dHlwZTonYXJyYXknfSlcbiAgICAgIC8qIEdldCBmaXJzdCB3b3Jrc2hlZXQgKi9cbiAgICAgIGNvbnN0IHdvcmtzaGVldCA9IHhscy5TaGVldHNbeGxzLlNoZWV0TmFtZXNbMF1dO1xuICAgICAgLy8gTGltaXRlciBsYSBjYXB0dXJlIGF1eCBjb2xvbm5lcyBBLVRcbiAgICAgIGNvbnN0IHJhbmdlID0gWExTWC51dGlscy5kZWNvZGVfcmFuZ2Uod29ya3NoZWV0WychcmVmJ10pO1xuICAgICAgcmFuZ2Uucy5jID0gMDsgLy8gMCA9PSBYTFNYLnV0aWxzLmRlY29kZV9jb2woXCJBXCIpXG4gICAgICByYW5nZS5lLmMgPSAxOTsgLy8gMTkgPT0gWExTWC51dGlscy5kZWNvZGVfY29sKFwiVFwiKVxuICAgICAgY29uc3QgbmV3X3JhbmdlID0gWExTWC51dGlscy5lbmNvZGVfcmFuZ2UocmFuZ2UpO1xuICAgICAgLyogQ29udmVydCBhcnJheSB0byBqc29uKi9cbiAgICAgIGNvbnN0IGpzb25EYXRhID0gWExTWC51dGlscy5zaGVldF90b19qc29uKHdvcmtzaGVldCwgeyBibGFua3Jvd3M6IGZhbHNlLCByYXc6IGZhbHNlLCBkZWZ2YWw6IFwiXCIsIHJhbmdlOiBuZXdfcmFuZ2UgfSk7XG4gICAgICBzZXRVc2Vyc0RhdGEoanNvbkRhdGEpO1xuICAgICAgc2V0SXNQZW5kaW5nKGZhbHNlKTtcblxuICAgICAgZGlzcGF0Y2hSdW5zKHtcbiAgICAgICAgdHlwZTogJ2FwcGVuZCcsXG4gICAgICAgIGl0ZW06IHtcbiAgICAgICAgICB0aW1lc3RhbXA6IChuZXcgRGF0ZSgpKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDE5KSxcbiAgICAgICAgICBkdXJhdGlvbjogKG5ldyBEYXRlKCkpIC0gc3RhcnRfdGltZSxcbiAgICAgICAgICBmaWxlbmFtZTogZmlsZS5uYW1lLFxuICAgICAgICAgIGZpbGVTaXplOiBmaWxlLnNpemUsXG4gICAgICAgICAgZmlsZUxpbmVzOiBqc29uRGF0YS5sZW5ndGhcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGZpbGUpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0gZmlsZUhhbmRsZXI9e2ZpbGVIYW5kbGVyfT5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxuICAgICAgICAgIEV4cMOpcmltZW50YXRpb24gQXJkZW5uZXNcbiAgICAgICAgPC9oMT5cblxuICAgICAgICB7IWlzTG9nZ2VkICYmXG4gICAgICAgICAgPGRpdiBpZD1cImNyZWF0ZS1mb3Jtc1wiIGNsYXNzTmFtZT17c3R5bGVzLmNyZWF0ZX0+XG4gICAgICAgICAgICA8TG9naW5Gb3JtIG9uTG9naW49e29uTG9naW59IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cblxuICAgICAgICA8RmlsZUhhbmRsZXIgZmlsZUhhbmRsZXI9e2ZpbGVIYW5kbGVyfSBpc1BlbmRpbmc9e2lzUGVuZGluZ30gZmlsZVNpemU9e2ZpbGVTaXplfSAvPlxuXG4gICAgICAgIHsgdXNlcnNEYXRhICYmIDw+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnN1YnRpdGxlfT5cbiAgICAgICAgICAgIELDqW7DqWZpY2lhaXJlcyBSU0FcbiAgICAgICAgICA8L2gyPlxuXG4gICAgICAgICAgeyB1c2Vyc0RhdGEubGVuZ3RoID09IDAgJiZcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5BdWN1biBiw6luw6lmaWNpYWlyZSBkYW5zIGxlIGZpY2hpZXI8L3A+XG4gICAgICAgICAgfVxuICAgICAgICAgIHsgdXNlcnNEYXRhLmxlbmd0aCA+IDAgJiYgPD5cbiAgICAgICAgICAgIDx0YWJsZT5cbiAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPk5vbTwvdGg+XG4gICAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5QcsOpbm9tPC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPk1haWw8L3RoPlxuICAgICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+VMOpbMOpcGhvbmU8L3RoPlxuICAgICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+SUQgUkRWLVNvbGlkYXJpdMOpczwvdGg+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8dHI+PC90cj5cbiAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgIHt1c2Vyc0RhdGEubWFwKCh1c2VyLCBpbmRleCkgPT4gKDx0ciBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9Pnt1c2VyW1wiTk9NXCJdfTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT57dXNlcltcIlBSRU5PTVwiXX08L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+e3VzZXJbXCJNQUlMXCJdfTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT57dXNlcltcIlRFTEVQSE9ORVwiXX08L3RkPlxuICAgICAgICAgICAgICAgICAge3VzZXJbT2JqZWN0LmtleXModXNlcilbMThdXSAhPSBcIlwiICYmXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9Pnt1c2VyW09iamVjdC5rZXlzKHVzZXIpWzE4XV19PC90ZD5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHt1c2VyW09iamVjdC5rZXlzKHVzZXIpWzE4XV0gPT09IFwiXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+PGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBjcmVhdGVVc2VyKHVzZXIpfSA+Q3LDqWVyIHVuIGNvbXB0ZTwvYnV0dG9uPjwvdGQ+XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICA8L3RhYmxlPlxuXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2ZpbGVXcml0ZXJ9PlJlZ8OpbsOpcmVyIGZpY2hpZXI8L2J1dHRvbj5cbiAgICAgICAgICA8Lz59XG4gICAgICAgIDwvPn1cblxuICAgICAgICA8Rm9vdGVyXG4gICAgICAgICAgc3ViamVjdD1cIkV4cMOpcmltZW50YXRpb24gQXJkZW5uZXNcIlxuICAgICAgICAgIHBvdXJxdW9pPVwiUXVlbCBlc3QgbCdvYmplY3RpZiBkZSBjZXR0ZSBleHDDqXJpbWVudGF0aW9uJm5ic3A7P1wiXG4gICAgICAgICAgdGV4dD17PD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRleHR9PkZhY2lsaXRlciBsZSB0cmF2YWlsIGRlcyBhZ2VudHMgZHUgZMOpcGFydGVtZW50IGV0IHRlc3RlciBsJ3V0aWxpc2F0aW9uIGRlIGwnYXBwbGljYXRpb24gUkRWLVNvbGlkYXJpdMOpcyBwb3VyIGFjY8OpbMOpcmVyIGxhIHByaXNlIGR1IHByZW1pZXIgcmVuZGV6LXZvdXMgZCdvcmllbnRhdGlvbi48L3A+XG4gICAgICAgICAgPC8+fVxuICAgICAgICAvPlxuICAgICAgPC9tYWluPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9