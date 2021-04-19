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
/* harmony import */ var _components_loginForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/loginForm */ "./components/loginForm.js");
/* harmony import */ var _components_createUserButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/createUserButton */ "./components/createUserButton.js");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _lib_historique__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../lib/historique */ "./lib/historique.js");
/* harmony import */ var _lib_dates__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../lib/dates */ "./lib/dates.js");
/* harmony import */ var _lib_checkUserInvitationStatus__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../lib/checkUserInvitationStatus */ "./lib/checkUserInvitationStatus.js");
/* harmony import */ var _lib_generateInvitation__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../lib/generateInvitation */ "./lib/generateInvitation.js");




var _jsxFileName = "/home/q/code/qblanc/beta.gouv/analyse-flux-insertion/pages/experimentations/ardennes/index.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }













var reducer = Object(_lib_historique__WEBPACK_IMPORTED_MODULE_10__["reducerFactory"])("Expérimentation Ardennes - CNAF - Bénéficiaire");
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

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      userStatusChecked = _useState4[0],
      setUserStatusChecked = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      fileSize = _useState5[0],
      setFileSize = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isLogged = _useState6[0],
      setIsLogged = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    tokenId: "",
    uid: "",
    client: ""
  }),
      token = _useState7[0],
      setToken = _useState7[1];

  var RDV_SOLIDARITES_URL = "http://localhost:5000";
  var userUrl = RDV_SOLIDARITES_URL + "/api/v1/users";
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (devFile) {
      handleFile(devFile);
    }
  }, [devFile]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (usersData && userStatusChecked === false) {
      usersData.forEach(function (user, userIndex) {
        if (user["ID RDV"] != "") {
          Object(_lib_checkUserInvitationStatus__WEBPACK_IMPORTED_MODULE_12__["checkUserInvitationStatus"])(user, userIndex, token, usersData, updateUsersData);
        }
      });
      setUserStatusChecked(true);
    }
  }, [usersData]);

  var writeFile = function writeFile() {
    var outWorkbook = xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].book_new();
    var outWorksheet = xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].json_to_sheet(usersData);
    xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].book_append_sheet(outWorkbook, outWorksheet, "DIVERGENCES"); // XLSX.utils.book_append_sheet(outWorkbook, xls.Sheets[xls.SheetNames[1]], "GRAPHIQUE");
    // XLSX.utils.book_append_sheet(outWorkbook, xls.Sheets[xls.SheetNames[2]], "Selection COA");

    xlsx__WEBPACK_IMPORTED_MODULE_3__["writeFile"](outWorkbook, "ardennes_rsa_".concat(Object(_lib_dates__WEBPACK_IMPORTED_MODULE_11__["getDateTimeString"])(new Date()), ".xlsx"));
  };

  var updateUsersData = function updateUsersData(data) {
    setUsersData(data);
  };

  var handleLogin = function handleLogin(tokenId, uid, client) {
    setToken(_objectSpread(_objectSpread({}, token), {}, {
      tokenId: tokenId,
      uid: uid,
      client: client
    }));
    setIsLogged(true);
  };

  var handleFile = function handleFile(file) {
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
        type: 'array',
        cellDates: true,
        dateNF: 'dd/mm/yyyy'
      });
      var worksheet = xls.Sheets[xls.SheetNames[0]]; // Limiter la capture aux colonnes A-V

      var range = xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].decode_range(worksheet['!ref']);
      range.s.c = 0; // 0 == XLSX.utils.decode_col("A")

      range.e.c = 21; // 19 == XLSX.utils.decode_col("V")

      var new_range = xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].encode_range(range);
      var jsonData = xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].sheet_to_json(worksheet, {
        blankrows: false,
        raw: false,
        defval: "",
        range: new_range
      });
      setUsersData(jsonData);
      setIsPending(false);
      dispatchRuns({
        type: "append",
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
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.container,
    handleFile: handleFile,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.main,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.title,
        children: "Exp\xE9rimentation Ardennes"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 9
      }, this), !isLogged && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.create,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_loginForm__WEBPACK_IMPORTED_MODULE_7__["default"], {
          handleLogin: handleLogin
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 11
      }, this), isLogged && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_file__WEBPACK_IMPORTED_MODULE_5__["default"], {
          handleFile: handleFile,
          isPending: isPending,
          fileSize: fileSize
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 13
        }, this), usersData && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.subtitle,
            children: "B\xE9n\xE9ficiaires RSA"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 17
          }, this), usersData.length == 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.description,
            children: "Aucun b\xE9n\xE9ficiaire dans le fichier"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 19
          }, this), usersData.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    rowSpan: "2",
                    children: "Nom"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 140,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    rowSpan: "2",
                    children: "Pr\xE9nom"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 141,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    rowSpan: "2",
                    children: "Mail"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 142,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    rowSpan: "2",
                    children: "T\xE9l\xE9phone"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 143,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    rowSpan: "2",
                    children: "ID RDV-Solidarit\xE9s"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 144,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    colSpan: "3",
                    children: "Invitation"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 145,
                    columnNumber: 27
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 139,
                  columnNumber: 25
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    colSpan: "1",
                    children: "Dernier envoi le"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 148,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    colSpan: "1",
                    children: "Date d'inscription"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 149,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    colSpan: "1"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 150,
                    columnNumber: 27
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 147,
                  columnNumber: 25
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 138,
                columnNumber: 23
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
                children: usersData.map(function (user, index) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.center,
                      children: user["NOM"]
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 156,
                      columnNumber: 29
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.center,
                      children: user["PRENOM"]
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 157,
                      columnNumber: 29
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.center,
                      children: user["MAIL"]
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 158,
                      columnNumber: 29
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.center,
                      children: user["TELEPHONE"]
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 159,
                      columnNumber: 29
                    }, _this), user["ID RDV"] == "" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.center,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_createUserButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
                        user: user,
                        index: index,
                        token: token,
                        usersData: usersData,
                        updateUsersData: updateUsersData
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 165,
                        columnNumber: 33
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 164,
                      columnNumber: 31
                    }, _this), user["ID RDV"] != "" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.center,
                      children: user["ID RDV"]
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 175,
                      columnNumber: 31
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.center,
                      children: user["Date d'invitation"]
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 179,
                      columnNumber: 29
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.center,
                      children: user["Date d'inscription"]
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 180,
                      columnNumber: 29
                    }, _this), user["ID RDV"] != "" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.center,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                        onClick: function onClick() {
                          return Object(_lib_generateInvitation__WEBPACK_IMPORTED_MODULE_13__["generateInvitation"])(user["ID RDV"], index, token, usersData, updateUsersData);
                        },
                        children: [user["Date d'invitation"] != "" && "Regénérer invitation", user["Date d'invitation"] == "" && "Générer invitation"]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 183,
                        columnNumber: 33
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 182,
                      columnNumber: 31
                    }, _this)]
                  }, index, true, {
                    fileName: _jsxFileName,
                    lineNumber: 155,
                    columnNumber: 27
                  }, _this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 153,
                columnNumber: 23
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 137,
              columnNumber: 21
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.button,
              onClick: writeFile,
              children: "Reg\xE9n\xE9rer fichier"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 198,
              columnNumber: 21
            }, this)]
          }, void 0, true)]
        }, void 0, true)]
      }, void 0, true), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
        subject: "Exp\xE9rimentation Ardennes",
        pourquoi: "Quel est l'objectif de cette exp\xE9rimentation\xA0?",
        text: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.text,
            children: "Faciliter le travail des agents du d\xE9partement et tester l'utilisation de l'application RDV-Solidarit\xE9s pour acc\xE9l\xE9rer la prise du premier rendez-vous d'orientation."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 213,
            columnNumber: 15
          }, this)
        }, void 0, false)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 107,
    columnNumber: 5
  }, this);
}

_s(Ardennes, "AwBNrg+B2OMOV1x6MexNwpm6qaU=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXhwZXJpbWVudGF0aW9ucy9hcmRlbm5lcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJyZWR1Y2VyIiwicmVkdWNlckZhY3RvcnkiLCJkZXZNb2RlIiwiQXJkZW5uZXMiLCJ1c2VTdGF0ZSIsImRldkZpbGUiLCJzZXREZXZGaWxlIiwidXNlUmVkdWNlciIsImluaXRSZWR1Y2VyIiwicnVucyIsImRpc3BhdGNoUnVucyIsInVzZXJzRGF0YSIsInNldFVzZXJzRGF0YSIsImlzUGVuZGluZyIsInNldElzUGVuZGluZyIsInVzZXJTdGF0dXNDaGVja2VkIiwic2V0VXNlclN0YXR1c0NoZWNrZWQiLCJmaWxlU2l6ZSIsInNldEZpbGVTaXplIiwiaXNMb2dnZWQiLCJzZXRJc0xvZ2dlZCIsInRva2VuSWQiLCJ1aWQiLCJjbGllbnQiLCJ0b2tlbiIsInNldFRva2VuIiwiUkRWX1NPTElEQVJJVEVTX1VSTCIsInByb2Nlc3MiLCJ1c2VyVXJsIiwidXNlRWZmZWN0IiwiaGFuZGxlRmlsZSIsImZvckVhY2giLCJ1c2VyIiwidXNlckluZGV4IiwiY2hlY2tVc2VySW52aXRhdGlvblN0YXR1cyIsInVwZGF0ZVVzZXJzRGF0YSIsIndyaXRlRmlsZSIsIm91dFdvcmtib29rIiwiWExTWCIsImJvb2tfbmV3Iiwib3V0V29ya3NoZWV0IiwianNvbl90b19zaGVldCIsImJvb2tfYXBwZW5kX3NoZWV0IiwiZ2V0RGF0ZVRpbWVTdHJpbmciLCJEYXRlIiwiZGF0YSIsImhhbmRsZUxvZ2luIiwiZmlsZSIsInNpemUiLCJzdGFydF90aW1lIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsImV2ZW50IiwiZmlsZURhdGEiLCJVaW50OEFycmF5IiwidGFyZ2V0IiwicmVzdWx0IiwieGxzIiwidHlwZSIsImNlbGxEYXRlcyIsImRhdGVORiIsIndvcmtzaGVldCIsIlNoZWV0cyIsIlNoZWV0TmFtZXMiLCJyYW5nZSIsImRlY29kZV9yYW5nZSIsInMiLCJjIiwiZSIsIm5ld19yYW5nZSIsImVuY29kZV9yYW5nZSIsImpzb25EYXRhIiwic2hlZXRfdG9fanNvbiIsImJsYW5rcm93cyIsInJhdyIsImRlZnZhbCIsIml0ZW0iLCJ0aW1lc3RhbXAiLCJ0b0lTT1N0cmluZyIsInNsaWNlIiwiZHVyYXRpb24iLCJmaWxlbmFtZSIsIm5hbWUiLCJmaWxlTGluZXMiLCJsZW5ndGgiLCJyZWFkQXNBcnJheUJ1ZmZlciIsInN0eWxlcyIsImNvbnRhaW5lciIsIm1haW4iLCJ0aXRsZSIsImNyZWF0ZSIsInN1YnRpdGxlIiwiZGVzY3JpcHRpb24iLCJtYXAiLCJpbmRleCIsImNlbnRlciIsImdlbmVyYXRlSW52aXRhdGlvbiIsImJ1dHRvbiIsInRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHQyx1RUFBYyxDQUFDLGdEQUFELENBQTlCO0FBQ0EsSUFBTUMsT0FBTyxPQUFiO0FBRWUsU0FBU0MsUUFBVCxHQUFvQjtBQUFBOztBQUFBOztBQUFBLGtCQUNIQyxzREFBUSxDQUFDLElBQUQsQ0FETDtBQUFBLE1BQzFCQyxPQUQwQjtBQUFBLE1BQ2pCQyxVQURpQjs7QUFBQSxvQkFFSkMsd0RBQVUsQ0FBQ1AsT0FBRCxFQUFVLEVBQVYsRUFBY1EsNERBQWQsQ0FGTjtBQUFBLE1BRTFCQyxJQUYwQjtBQUFBLE1BRXBCQyxZQUZvQjs7QUFBQSxtQkFHQ04sc0RBQVEsQ0FBQyxJQUFELENBSFQ7QUFBQSxNQUcxQk8sU0FIMEI7QUFBQSxNQUdmQyxZQUhlOztBQUFBLG1CQUlDUixzREFBUSxDQUFDLEtBQUQsQ0FKVDtBQUFBLE1BSTFCUyxTQUowQjtBQUFBLE1BSWZDLFlBSmU7O0FBQUEsbUJBS2lCVixzREFBUSxDQUFDLEtBQUQsQ0FMekI7QUFBQSxNQUsxQlcsaUJBTDBC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QURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXNIRDs7R0E3TXVCaEcsUTs7S0FBQUEsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9leHBlcmltZW50YXRpb25zL2FyZGVubmVzLmY2YjU1YWFiNTQyYmRkYWEzNTIyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWR1Y2VyIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyBYTFNYIGZyb20gXCJ4bHN4XCI7XG5cbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0XCI7XG5pbXBvcnQgRmlsZUhhbmRsZXIgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvZmlsZVwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9mb290ZXJcIjtcbmltcG9ydCBMb2dpbkZvcm0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvbG9naW5Gb3JtXCI7XG5pbXBvcnQgQ3JlYXRlVXNlckJ1dHRvbiBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9jcmVhdGVVc2VyQnV0dG9uXCJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uLy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcblxuaW1wb3J0IHsgaW5pdFJlZHVjZXIsIHJlZHVjZXJGYWN0b3J5IH0gZnJvbSAnLi4vLi4vLi4vbGliL2hpc3RvcmlxdWUnXG5pbXBvcnQgeyBnZXREYXRlVGltZVN0cmluZyB9IGZyb20gJy4uLy4uLy4uL2xpYi9kYXRlcydcbmltcG9ydCB7IGNoZWNrVXNlckludml0YXRpb25TdGF0dXMgfSBmcm9tICcuLi8uLi8uLi9saWIvY2hlY2tVc2VySW52aXRhdGlvblN0YXR1cydcbmltcG9ydCB7IGdlbmVyYXRlSW52aXRhdGlvbiB9IGZyb20gJy4uLy4uLy4uL2xpYi9nZW5lcmF0ZUludml0YXRpb24nXG5cbmNvbnN0IHJlZHVjZXIgPSByZWR1Y2VyRmFjdG9yeShcIkV4cMOpcmltZW50YXRpb24gQXJkZW5uZXMgLSBDTkFGIC0gQsOpbsOpZmljaWFpcmVcIik7XG5jb25zdCBkZXZNb2RlID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT0gXCJkZXZlbG9wbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcmRlbm5lcygpIHtcbiAgY29uc3QgW2RldkZpbGUsIHNldERldkZpbGVdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtydW5zLCBkaXNwYXRjaFJ1bnNdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBbXSwgaW5pdFJlZHVjZXIpO1xuICBjb25zdCBbdXNlcnNEYXRhLCBzZXRVc2Vyc0RhdGFdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtpc1BlbmRpbmcsIHNldElzUGVuZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt1c2VyU3RhdHVzQ2hlY2tlZCwgc2V0VXNlclN0YXR1c0NoZWNrZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZmlsZVNpemUsIHNldEZpbGVTaXplXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbaXNMb2dnZWQsIHNldElzTG9nZ2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Rva2VuLCBzZXRUb2tlbl0gPSB1c2VTdGF0ZSh7XG4gICAgdG9rZW5JZDogXCJcIixcbiAgICB1aWQ6IFwiXCIsXG4gICAgY2xpZW50OiBcIlwiLFxuICB9KTtcbiAgY29uc3QgUkRWX1NPTElEQVJJVEVTX1VSTCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1JEVl9TT0xJREFSSVRFU19ERU1PX1VSTDtcbiAgY29uc3QgdXNlclVybCA9IFJEVl9TT0xJREFSSVRFU19VUkwgKyBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19SRFZfU09MSURBUklURVNfVVNFUl9QQVRIO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRldkZpbGUpIHtcbiAgICAgIGhhbmRsZUZpbGUoZGV2RmlsZSk7XG4gICAgfVxuICB9LCBbZGV2RmlsZV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYodXNlcnNEYXRhICYmIHVzZXJTdGF0dXNDaGVja2VkID09PSBmYWxzZSkge1xuICAgICAgdXNlcnNEYXRhLmZvckVhY2goKHVzZXIsIHVzZXJJbmRleCkgPT4ge1xuICAgICAgICBpZiAodXNlcltcIklEIFJEVlwiXSAhPSBcIlwiKSB7XG4gICAgICAgICAgY2hlY2tVc2VySW52aXRhdGlvblN0YXR1cyh1c2VyLCB1c2VySW5kZXgsIHRva2VuLCB1c2Vyc0RhdGEsIHVwZGF0ZVVzZXJzRGF0YSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgc2V0VXNlclN0YXR1c0NoZWNrZWQodHJ1ZSk7XG4gICAgfVxuICB9LCBbdXNlcnNEYXRhXSlcblxuICBjb25zdCB3cml0ZUZpbGUgPSAoKSA9PiB7XG4gICAgY29uc3Qgb3V0V29ya2Jvb2sgPSBYTFNYLnV0aWxzLmJvb2tfbmV3KCk7XG4gICAgY29uc3Qgb3V0V29ya3NoZWV0ID0gWExTWC51dGlscy5qc29uX3RvX3NoZWV0KHVzZXJzRGF0YSk7XG4gICAgWExTWC51dGlscy5ib29rX2FwcGVuZF9zaGVldChvdXRXb3JrYm9vaywgb3V0V29ya3NoZWV0LCBcIkRJVkVSR0VOQ0VTXCIpO1xuICAgIC8vIFhMU1gudXRpbHMuYm9va19hcHBlbmRfc2hlZXQob3V0V29ya2Jvb2ssIHhscy5TaGVldHNbeGxzLlNoZWV0TmFtZXNbMV1dLCBcIkdSQVBISVFVRVwiKTtcbiAgICAvLyBYTFNYLnV0aWxzLmJvb2tfYXBwZW5kX3NoZWV0KG91dFdvcmtib29rLCB4bHMuU2hlZXRzW3hscy5TaGVldE5hbWVzWzJdXSwgXCJTZWxlY3Rpb24gQ09BXCIpO1xuICAgIFhMU1gud3JpdGVGaWxlKG91dFdvcmtib29rLCBgYXJkZW5uZXNfcnNhXyR7Z2V0RGF0ZVRpbWVTdHJpbmcobmV3IERhdGUoKSl9Lnhsc3hgKVxuICB9XG5cbiAgY29uc3QgdXBkYXRlVXNlcnNEYXRhID0gKGRhdGEpID0+IHtcbiAgICBzZXRVc2Vyc0RhdGEoZGF0YSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTG9naW4gPSAodG9rZW5JZCwgdWlkLCBjbGllbnQpID0+IHtcbiAgICBzZXRUb2tlbih7IC4uLnRva2VuLCB0b2tlbklkOiB0b2tlbklkLCB1aWQ6IHVpZCwgY2xpZW50OiBjbGllbnQgfSk7XG4gICAgc2V0SXNMb2dnZWQodHJ1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRmlsZSA9IGZpbGUgPT4ge1xuICAgIGlmIChkZXZNb2RlICYmIGZpbGUgIT0gZGV2RmlsZSkge1xuICAgICAgc2V0RGV2RmlsZShmaWxlKTtcbiAgICB9XG4gICAgc2V0RmlsZVNpemUoZmlsZS5zaXplKTtcbiAgICBzZXRJc1BlbmRpbmcodHJ1ZSk7XG4gICAgY29uc3Qgc3RhcnRfdGltZSA9IG5ldyBEYXRlKCk7XG5cbiAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBjb25zdCBmaWxlRGF0YSA9IG5ldyBVaW50OEFycmF5KGV2ZW50LnRhcmdldC5yZXN1bHQpO1xuICAgICAgY29uc3QgeGxzID0gWExTWC5yZWFkKGZpbGVEYXRhLCB7dHlwZTonYXJyYXknLCBjZWxsRGF0ZXM6IHRydWUsIGRhdGVORjonZGQvbW0veXl5eSd9KVxuICAgICAgY29uc3Qgd29ya3NoZWV0ID0geGxzLlNoZWV0c1t4bHMuU2hlZXROYW1lc1swXV07XG4gICAgICAvLyBMaW1pdGVyIGxhIGNhcHR1cmUgYXV4IGNvbG9ubmVzIEEtVlxuICAgICAgY29uc3QgcmFuZ2UgPSBYTFNYLnV0aWxzLmRlY29kZV9yYW5nZSh3b3Jrc2hlZXRbJyFyZWYnXSk7XG4gICAgICByYW5nZS5zLmMgPSAwOyAvLyAwID09IFhMU1gudXRpbHMuZGVjb2RlX2NvbChcIkFcIilcbiAgICAgIHJhbmdlLmUuYyA9IDIxOyAvLyAxOSA9PSBYTFNYLnV0aWxzLmRlY29kZV9jb2woXCJWXCIpXG4gICAgICBjb25zdCBuZXdfcmFuZ2UgPSBYTFNYLnV0aWxzLmVuY29kZV9yYW5nZShyYW5nZSk7XG5cbiAgICAgIGNvbnN0IGpzb25EYXRhID0gWExTWC51dGlscy5zaGVldF90b19qc29uKHdvcmtzaGVldCwgeyBibGFua3Jvd3M6IGZhbHNlLCByYXc6IGZhbHNlLCBkZWZ2YWw6IFwiXCIsIHJhbmdlOiBuZXdfcmFuZ2UgfSk7XG4gICAgICBzZXRVc2Vyc0RhdGEoanNvbkRhdGEpO1xuICAgICAgc2V0SXNQZW5kaW5nKGZhbHNlKTtcbiAgICAgIGRpc3BhdGNoUnVucyh7XG4gICAgICAgIHR5cGU6IFwiYXBwZW5kXCIsXG4gICAgICAgIGl0ZW06IHtcbiAgICAgICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxOSksXG4gICAgICAgICAgZHVyYXRpb246IG5ldyBEYXRlKCkgLSBzdGFydF90aW1lLFxuICAgICAgICAgIGZpbGVuYW1lOiBmaWxlLm5hbWUsXG4gICAgICAgICAgZmlsZVNpemU6IGZpbGUuc2l6ZSxcbiAgICAgICAgICBmaWxlTGluZXM6IGpzb25EYXRhLmxlbmd0aCxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH07XG4gICAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGZpbGUpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dCBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9IGhhbmRsZUZpbGU9e2hhbmRsZUZpbGV9PlxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+RXhww6lyaW1lbnRhdGlvbiBBcmRlbm5lczwvaDE+XG5cbiAgICAgICAgeyFpc0xvZ2dlZCAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jcmVhdGV9PlxuICAgICAgICAgICAgPExvZ2luRm9ybSBoYW5kbGVMb2dpbj17aGFuZGxlTG9naW59IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG5cbiAgICAgICAge2lzTG9nZ2VkICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPEZpbGVIYW5kbGVyXG4gICAgICAgICAgICAgIGhhbmRsZUZpbGU9e2hhbmRsZUZpbGV9XG4gICAgICAgICAgICAgIGlzUGVuZGluZz17aXNQZW5kaW5nfVxuICAgICAgICAgICAgICBmaWxlU2l6ZT17ZmlsZVNpemV9XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICB7dXNlcnNEYXRhICYmIChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuc3VidGl0bGV9PkLDqW7DqWZpY2lhaXJlcyBSU0E8L2gyPlxuXG4gICAgICAgICAgICAgICAge3VzZXJzRGF0YS5sZW5ndGggPT0gMCAmJiAoXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgICAgICAgICAgICAgIEF1Y3VuIGLDqW7DqWZpY2lhaXJlIGRhbnMgbGUgZmljaGllclxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICB7dXNlcnNEYXRhLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlPlxuICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+Tm9tPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+UHLDqW5vbTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPk1haWw8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5Uw6lsw6lwaG9uZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPklEIFJEVi1Tb2xpZGFyaXTDqXM8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj1cIjNcIj5JbnZpdGF0aW9uPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjb2xTcGFuPVwiMVwiPkRlcm5pZXIgZW52b2kgbGU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj1cIjFcIj5EYXRlIGQnaW5zY3JpcHRpb248L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj1cIjFcIj48L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt1c2Vyc0RhdGEubWFwKCh1c2VyLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+e3VzZXJbXCJOT01cIl19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT57dXNlcltcIlBSRU5PTVwiXX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9Pnt1c2VyW1wiTUFJTFwiXX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3VzZXJbXCJURUxFUEhPTkVcIl19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyW1wiSUQgUkRWXCJdID09IFwiXCIgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDcmVhdGVVc2VyQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcj17dXNlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW49e3Rva2VufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJzRGF0YT17dXNlcnNEYXRhfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVVzZXJzRGF0YT17dXBkYXRlVXNlcnNEYXRhfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyW1wiSUQgUkRWXCJdICE9IFwiXCIgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyW1wiSUQgUkRWXCJdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9Pnt1c2VyW1wiRGF0ZSBkJ2ludml0YXRpb25cIl19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT57dXNlcltcIkRhdGUgZCdpbnNjcmlwdGlvblwiXX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyW1wiSUQgUkRWXCJdICE9IFwiXCIgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZ2VuZXJhdGVJbnZpdGF0aW9uKHVzZXJbXCJJRCBSRFZcIl0sIGluZGV4LCB0b2tlbiwgdXNlcnNEYXRhLCB1cGRhdGVVc2Vyc0RhdGEpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXNlcltcIkRhdGUgZCdpbnZpdGF0aW9uXCJdICE9IFwiXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlJlZ8OpbsOpcmVyIGludml0YXRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXNlcltcIkRhdGUgZCdpbnZpdGF0aW9uXCJdID09IFwiXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkfDqW7DqXJlciBpbnZpdGF0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cblxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0gb25DbGljaz17d3JpdGVGaWxlfT5cbiAgICAgICAgICAgICAgICAgICAgICBSZWfDqW7DqXJlciBmaWNoaWVyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuXG4gICAgICAgIDxGb290ZXJcbiAgICAgICAgICBzdWJqZWN0PVwiRXhww6lyaW1lbnRhdGlvbiBBcmRlbm5lc1wiXG4gICAgICAgICAgcG91cnF1b2k9XCJRdWVsIGVzdCBsJ29iamVjdGlmIGRlIGNldHRlIGV4cMOpcmltZW50YXRpb24mbmJzcDs/XCJcbiAgICAgICAgICB0ZXh0PXtcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRleHR9PlxuICAgICAgICAgICAgICAgIEZhY2lsaXRlciBsZSB0cmF2YWlsIGRlcyBhZ2VudHMgZHUgZMOpcGFydGVtZW50IGV0IHRlc3RlclxuICAgICAgICAgICAgICAgIGwndXRpbGlzYXRpb24gZGUgbCdhcHBsaWNhdGlvbiBSRFYtU29saWRhcml0w6lzIHBvdXIgYWNjw6lsw6lyZXIgbGFcbiAgICAgICAgICAgICAgICBwcmlzZSBkdSBwcmVtaWVyIHJlbmRlei12b3VzIGQnb3JpZW50YXRpb24uXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgIH1cbiAgICAgICAgLz5cbiAgICAgIDwvbWFpbj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=