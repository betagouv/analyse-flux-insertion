webpackHotUpdate_N_E("pages/experimentations/ardennes",{

/***/ "./components/file.js":
/*!****************************!*\
  !*** ./components/file.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FileHandler; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pending__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pending */ "./components/pending.js");



var _jsxFileName = "/home/q/code/qblanc/beta.gouv/analyse-flux-insertion/components/file.js",
    _s = $RefreshSig$();




function FileHandler(_ref) {
  _s();

  var handleFile = _ref.handleFile,
      isPending = _ref.isPending,
      fileSize = _ref.fileSize;
  var handleSelect = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (event) {
    for (var i = 0; i < event.target.files.length; i++) {
      handleFile(event.target.files[i]);
    }

    event.target.value = "";
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.description,
      children: ["Glissez et d\xE9posez le fichier \xE0 analyser ou s\xE9lectionnez le.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "file",
        onChange: handleSelect,
        multiple: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this), isPending && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pending__WEBPACK_IMPORTED_MODULE_3__["default"], {
      fileSize: fileSize
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 21
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.description,
      children: ["Les op\xE9rations sont toutes r\xE9alis\xE9es sur votre ordinateur.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this), "Aucune donn\xE9e personnelle n'est transf\xE9r\xE9e."]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(FileHandler, "8vT76ss3ymPx8VyfSLA+l7caxj0=");

_c = FileHandler;

var _c;

$RefreshReg$(_c, "FileHandler");

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

/***/ "./components/fileHandler.js":
false,

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
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "/home/q/code/qblanc/beta.gouv/analyse-flux-insertion/components/login-form.js",
    _s = $RefreshSig$();



function LoginForm(_ref) {
  _s();

  var handleLogin = _ref.handleLogin;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      login = _useState[0],
      setLogin = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      password = _useState2[0],
      setPassword = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isPending = _useState3[0],
      setIsPending = _useState3[1];

  var RDV_URL = "http://localhost:5000";
  var path = "/auth/sign_in";
  var url = "".concat(RDV_URL, "/api/v1").concat(path);

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    var user = {
      email: login,
      password: password
    };
    setIsPending(true);
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    }).then(function (response) {
      setIsPending(false);

      if (response.ok) {
        handleLogin(response.headers.get("access-token"), response.headers.get("uid"), response.headers.get("client"));
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
      required: true,
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.margin_bottom
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, this), !isPending && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.button,
      children: "Se connecter"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 22
    }, this), isPending && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.button,
      children: "Connexion en cours"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 5
  }, this);
}

_s(LoginForm, "QqqA1PbH0RiAgevNAVPaPiVr2tQ=");

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

/***/ "./components/loginForm.js":
false,

/***/ "./components/pending.js":
/*!*******************************!*\
  !*** ./components/pending.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PendingMessage; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "/home/q/code/qblanc/beta.gouv/analyse-flux-insertion/components/pending.js";

function PendingMessage(_ref) {
  var fileSize = _ref.fileSize;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.pending_warning,
    children: ["Calcul des statistiques en cours, merci de patienter", fileSize > 100000000 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 11
      }, this), "Pour les fichiers sup\xE9rieurs \xE0 100 Mo, le temps de traitement peut d\xE9passer 1 minute."]
    }, void 0, true)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
_c = PendingMessage;

var _c;

$RefreshReg$(_c, "PendingMessage");

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

/***/ "./lib/appFetch.js":
false,

/***/ "./lib/dates.js":
/*!**********************!*\
  !*** ./lib/dates.js ***!
  \**********************/
/*! exports provided: stringToDate, getDateTimeString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringToDate", function() { return stringToDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDateTimeString", function() { return getDateTimeString; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");


var stringToDate = function stringToDate(dateStr) {
  var _dateStr$split = dateStr.split("/"),
      _dateStr$split2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_dateStr$split, 3),
      day = _dateStr$split2[0],
      month = _dateStr$split2[1],
      year = _dateStr$split2[2];

  return new Date(year, month - 1, day);
};

function getDateTimeString() {
  var today = new Date();
  var y = today.getFullYear(); // JavaScript months are 0-based.

  var m = today.getMonth() + 1;
  var d = today.getDate();
  var h = today.getHours();
  var mi = today.getMinutes();
  var s = today.getSeconds();
  return y + "_" + m + "_" + d + "_" + h + "_" + mi + "_" + s;
}



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

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
false,

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
/* harmony import */ var _lib_dates__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../lib/dates */ "./lib/dates.js");
/* harmony import */ var _lib_historique__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../lib/historique */ "./lib/historique.js");





var _jsxFileName = "/home/q/code/qblanc/beta.gouv/analyse-flux-insertion/pages/experimentations/ardennes/index.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










var reducer = Object(_lib_historique__WEBPACK_IMPORTED_MODULE_11__["reducerFactory"])("Expérimentation Ardennes - CNAF - Bénéficiaire");
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
    tokenId: "",
    uid: "",
    client: ""
  }),
      token = _useState6[0],
      setToken = _useState6[1];

  var RDV_SOLIDARITES_URL = "http://localhost:5000";
  var createUsersUrl = "".concat(RDV_SOLIDARITES_URL, "/api/v1/users");
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (devFile) {
      handleFile(devFile);
    }
  }, [devFile]);

  var writeFile = function writeFile() {
    var outWorkbook = xlsx__WEBPACK_IMPORTED_MODULE_4__["utils"].book_new();
    var outWorksheet = xlsx__WEBPACK_IMPORTED_MODULE_4__["utils"].json_to_sheet(usersData);
    xlsx__WEBPACK_IMPORTED_MODULE_4__["utils"].book_append_sheet(outWorkbook, outWorksheet, "DIVERGENCES"); // XLSX.utils.book_append_sheet(outWorkbook, xls.Sheets[xls.SheetNames[1]], "GRAPHIQUE");
    // XLSX.utils.book_append_sheet(outWorkbook, xls.Sheets[xls.SheetNames[2]], "Selection COA");

    xlsx__WEBPACK_IMPORTED_MODULE_4__["writeFile"](outWorkbook, "ardennes_rsa_".concat(Object(_lib_dates__WEBPACK_IMPORTED_MODULE_10__["getDateTimeString"])(), ".xlsx"));
  };

  var createUser = function createUser(userData, userIndex) {
    var address = userData["ADRESSE"] + " - " + userData["CODE\r\nPOSTAL"] + " " + userData["VILLE"];
    var user = {
      first_name: userData["PRENOM"],
      last_name: userData["NOM"],
      email: userData["MAIL"],
      phone_number: userData["TELEPHONE"].replace(/\s+/g, ""),
      birth_date: Object(_lib_dates__WEBPACK_IMPORTED_MODULE_10__["stringToDate"])(userData["DATE DE\r\nNAISSANCE"]),
      address: address,
      caisse_affiliation: "caf",
      affiliation_number: userData["N°CAF"],
      organisation_ids: ["1"]
    };
    fetch(createUsersUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "access-token": token.tokenId,
        uid: token.uid,
        client: token.client
      },
      body: JSON.stringify(user)
    }).then(function (response) {
      return response.json();
    }).then(function (result) {
      var newUsersData = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(usersData);

      if (result.user) {
        newUsersData[userIndex]["ID RDV"] = result.user.id;
        setUsersData(newUsersData);
      } else if (result.errors.email && result.errors.email[0].error === "taken") {
        newUsersData[userIndex]["ID RDV"] = result.errors.email[0].id;
        setUsersData(newUsersData);
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
      var xls = xlsx__WEBPACK_IMPORTED_MODULE_4__["read"](fileData, {
        type: "array",
        cellDates: true,
        dateNF: "dd/mm/yyyy"
      });
      /* Get first worksheet */

      var worksheet = xls.Sheets[xls.SheetNames[0]]; // Limiter la capture aux colonnes A-T

      var range = xlsx__WEBPACK_IMPORTED_MODULE_4__["utils"].decode_range(worksheet["!ref"]);
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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.container,
    handleFile: handleFile,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.main,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.title,
        children: "Exp\xE9rimentation Ardennes"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 9
      }, this), !isLogged && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.create,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_login_form__WEBPACK_IMPORTED_MODULE_8__["default"], {
          handleLogin: handleLogin
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 11
      }, this), isLogged && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_file__WEBPACK_IMPORTED_MODULE_6__["default"], {
          handleFile: handleFile,
          isPending: isPending,
          fileSize: fileSize
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 13
        }, this), usersData && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.subtitle,
            children: "B\xE9n\xE9ficiaires RSA"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 175,
            columnNumber: 17
          }, this), usersData.length == 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.description,
            children: "Aucun b\xE9n\xE9ficiaire dans le fichier"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 178,
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
                    lineNumber: 187,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    rowSpan: "2",
                    children: "Pr\xE9nom"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 188,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    rowSpan: "2",
                    children: "Mail"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 189,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    rowSpan: "2",
                    children: "T\xE9l\xE9phone"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 190,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    rowSpan: "2",
                    children: "ID RDV-Solidarit\xE9s"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 191,
                    columnNumber: 27
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 186,
                  columnNumber: 25
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 193,
                  columnNumber: 25
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 185,
                columnNumber: 23
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
                children: usersData.map(function (user, index) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.center,
                      children: user["NOM"]
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 198,
                      columnNumber: 29
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.center,
                      children: user["PRENOM"]
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 199,
                      columnNumber: 29
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.center,
                      children: user["MAIL"]
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 200,
                      columnNumber: 29
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.center,
                      children: user["TELEPHONE"]
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 201,
                      columnNumber: 29
                    }, _this), user["ID RDV"] != "" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.center,
                      children: user["ID RDV"]
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 205,
                      columnNumber: 31
                    }, _this), user["ID RDV"] == "" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.center,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                        onClick: function onClick() {
                          return createUser(user, index);
                        },
                        children: "Cr\xE9er un compte"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 211,
                        columnNumber: 33
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 210,
                      columnNumber: 31
                    }, _this)]
                  }, index, true, {
                    fileName: _jsxFileName,
                    lineNumber: 197,
                    columnNumber: 27
                  }, _this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 195,
                columnNumber: 23
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 184,
              columnNumber: 21
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.button,
              onClick: writeFile,
              children: "Reg\xE9n\xE9rer fichier"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 221,
              columnNumber: 21
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
            lineNumber: 236,
            columnNumber: 15
          }, this)
        }, void 0, false)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 155,
    columnNumber: 5
  }, this);
}

_s(Ardennes, "Stzgdlnu1YZ5cBxBl3/RvRIi48g=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9maWxlLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xvZ2luLWZvcm0uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcGVuZGluZy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbGliL2RhdGVzLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9leHBlcmltZW50YXRpb25zL2FyZGVubmVzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkZpbGVIYW5kbGVyIiwiaGFuZGxlRmlsZSIsImlzUGVuZGluZyIsImZpbGVTaXplIiwiaGFuZGxlU2VsZWN0IiwidXNlQ2FsbGJhY2siLCJldmVudCIsImkiLCJ0YXJnZXQiLCJmaWxlcyIsImxlbmd0aCIsInZhbHVlIiwic3R5bGVzIiwiZGVzY3JpcHRpb24iLCJMb2dpbkZvcm0iLCJoYW5kbGVMb2dpbiIsInVzZVN0YXRlIiwibG9naW4iLCJzZXRMb2dpbiIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJzZXRJc1BlbmRpbmciLCJSRFZfVVJMIiwicHJvY2VzcyIsInBhdGgiLCJ1cmwiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJ1c2VyIiwiZW1haWwiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXNwb25zZSIsIm9rIiwiZ2V0IiwianNvbiIsImFsZXJ0IiwibWFyZ2luX2JvdHRvbSIsImJ1dHRvbiIsIlBlbmRpbmdNZXNzYWdlIiwicGVuZGluZ193YXJuaW5nIiwic3RyaW5nVG9EYXRlIiwiZGF0ZVN0ciIsInNwbGl0IiwiZGF5IiwibW9udGgiLCJ5ZWFyIiwiRGF0ZSIsImdldERhdGVUaW1lU3RyaW5nIiwidG9kYXkiLCJ5IiwiZ2V0RnVsbFllYXIiLCJtIiwiZ2V0TW9udGgiLCJkIiwiZ2V0RGF0ZSIsImgiLCJnZXRIb3VycyIsIm1pIiwiZ2V0TWludXRlcyIsInMiLCJnZXRTZWNvbmRzIiwicmVkdWNlciIsInJlZHVjZXJGYWN0b3J5IiwiZGV2TW9kZSIsIkFyZGVubmVzIiwiZGV2RmlsZSIsInNldERldkZpbGUiLCJ1c2VSZWR1Y2VyIiwiaW5pdFJlZHVjZXIiLCJydW5zIiwiZGlzcGF0Y2hSdW5zIiwidXNlcnNEYXRhIiwic2V0VXNlcnNEYXRhIiwic2V0RmlsZVNpemUiLCJpc0xvZ2dlZCIsInNldElzTG9nZ2VkIiwidG9rZW5JZCIsInVpZCIsImNsaWVudCIsInRva2VuIiwic2V0VG9rZW4iLCJSRFZfU09MSURBUklURVNfVVJMIiwiY3JlYXRlVXNlcnNVcmwiLCJ1c2VFZmZlY3QiLCJ3cml0ZUZpbGUiLCJvdXRXb3JrYm9vayIsIlhMU1giLCJib29rX25ldyIsIm91dFdvcmtzaGVldCIsImpzb25fdG9fc2hlZXQiLCJib29rX2FwcGVuZF9zaGVldCIsImNyZWF0ZVVzZXIiLCJ1c2VyRGF0YSIsInVzZXJJbmRleCIsImFkZHJlc3MiLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwicGhvbmVfbnVtYmVyIiwicmVwbGFjZSIsImJpcnRoX2RhdGUiLCJjYWlzc2VfYWZmaWxpYXRpb24iLCJhZmZpbGlhdGlvbl9udW1iZXIiLCJvcmdhbmlzYXRpb25faWRzIiwicmVzdWx0IiwibmV3VXNlcnNEYXRhIiwiaWQiLCJlcnJvcnMiLCJlcnJvciIsImZpbGUiLCJzaXplIiwic3RhcnRfdGltZSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJmaWxlRGF0YSIsIlVpbnQ4QXJyYXkiLCJ4bHMiLCJ0eXBlIiwiY2VsbERhdGVzIiwiZGF0ZU5GIiwid29ya3NoZWV0IiwiU2hlZXRzIiwiU2hlZXROYW1lcyIsInJhbmdlIiwiZGVjb2RlX3JhbmdlIiwiYyIsIm5ld19yYW5nZSIsImVuY29kZV9yYW5nZSIsImpzb25EYXRhIiwic2hlZXRfdG9fanNvbiIsImJsYW5rcm93cyIsInJhdyIsImRlZnZhbCIsIml0ZW0iLCJ0aW1lc3RhbXAiLCJ0b0lTT1N0cmluZyIsInNsaWNlIiwiZHVyYXRpb24iLCJmaWxlbmFtZSIsIm5hbWUiLCJmaWxlTGluZXMiLCJyZWFkQXNBcnJheUJ1ZmZlciIsImNvbnRhaW5lciIsIm1haW4iLCJ0aXRsZSIsImNyZWF0ZSIsInN1YnRpdGxlIiwibWFwIiwiaW5kZXgiLCJjZW50ZXIiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBRWUsU0FBU0EsV0FBVCxPQUEwRDtBQUFBOztBQUFBLE1BQW5DQyxVQUFtQyxRQUFuQ0EsVUFBbUM7QUFBQSxNQUF2QkMsU0FBdUIsUUFBdkJBLFNBQXVCO0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZO0FBQ3ZFLE1BQU1DLFlBQVksR0FBR0MseURBQVcsQ0FBQyxVQUFBQyxLQUFLLEVBQUk7QUFDeEMsU0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRCxLQUFLLENBQUNFLE1BQU4sQ0FBYUMsS0FBYixDQUFtQkMsTUFBdkMsRUFBK0NILENBQUMsRUFBaEQsRUFBb0Q7QUFDbEROLGdCQUFVLENBQUNLLEtBQUssQ0FBQ0UsTUFBTixDQUFhQyxLQUFiLENBQW1CRixDQUFuQixDQUFELENBQVY7QUFDRDs7QUFDREQsU0FBSyxDQUFDRSxNQUFOLENBQWFHLEtBQWIsR0FBcUIsRUFBckI7QUFDRCxHQUwrQixDQUFoQztBQU9BLHNCQUNFO0FBQUEsNEJBQ0U7QUFBRyxlQUFTLEVBQUVDLDhEQUFNLENBQUNDLFdBQXJCO0FBQUEsdUdBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBR0U7QUFBTyxZQUFJLEVBQUMsTUFBWjtBQUFtQixnQkFBUSxFQUFFVCxZQUE3QjtBQUEyQyxnQkFBUTtBQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsRUFPR0YsU0FBUyxpQkFBSSxxRUFBQyxnREFBRDtBQUFnQixjQUFRLEVBQUVDO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQaEIsZUFTRTtBQUFHLGVBQVMsRUFBRVMsOERBQU0sQ0FBQ0MsV0FBckI7QUFBQSxxR0FFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVEY7QUFBQSxrQkFERjtBQWlCRDs7R0F6QnVCYixXOztLQUFBQSxXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0x4QjtBQUNBO0FBRWUsU0FBU2MsU0FBVCxPQUFvQztBQUFBOztBQUFBLE1BQWZDLFdBQWUsUUFBZkEsV0FBZTs7QUFBQSxrQkFDdkJDLHNEQUFRLENBQUMsRUFBRCxDQURlO0FBQUEsTUFDMUNDLEtBRDBDO0FBQUEsTUFDbkNDLFFBRG1DOztBQUFBLG1CQUVqQkYsc0RBQVEsQ0FBQyxFQUFELENBRlM7QUFBQSxNQUUxQ0csUUFGMEM7QUFBQSxNQUVoQ0MsV0FGZ0M7O0FBQUEsbUJBR2ZKLHNEQUFRLENBQUMsS0FBRCxDQUhPO0FBQUEsTUFHMUNkLFNBSDBDO0FBQUEsTUFHL0JtQixZQUgrQjs7QUFJakQsTUFBTUMsT0FBTyxHQUFHQyx1QkFBaEI7QUFDQSxNQUFNQyxJQUFJLEdBQUcsZUFBYjtBQUNBLE1BQU1DLEdBQUcsYUFBTUgsT0FBTixvQkFBdUJFLElBQXZCLENBQVQ7O0FBRUEsTUFBTUUsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQUMsQ0FBQyxFQUFJO0FBQ3hCQSxLQUFDLENBQUNDLGNBQUY7QUFFQSxRQUFNQyxJQUFJLEdBQUc7QUFBRUMsV0FBSyxFQUFFYixLQUFUO0FBQWdCRSxjQUFRLEVBQUVBO0FBQTFCLEtBQWI7QUFDQUUsZ0JBQVksQ0FBQyxJQUFELENBQVo7QUFFQVUsU0FBSyxDQUFDTixHQUFELEVBQU07QUFDVE8sWUFBTSxFQUFFLE1BREM7QUFFVEMsYUFBTyxFQUFFO0FBQUUsd0JBQWdCO0FBQWxCLE9BRkE7QUFHVEMsVUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZVAsSUFBZjtBQUhHLEtBQU4sQ0FBTCxDQUlHUSxJQUpILENBSVEsVUFBQUMsUUFBUSxFQUFJO0FBQ2xCakIsa0JBQVksQ0FBQyxLQUFELENBQVo7O0FBQ0EsVUFBSWlCLFFBQVEsQ0FBQ0MsRUFBYixFQUFpQjtBQUNmeEIsbUJBQVcsQ0FDVHVCLFFBQVEsQ0FBQ0wsT0FBVCxDQUFpQk8sR0FBakIsQ0FBcUIsY0FBckIsQ0FEUyxFQUVURixRQUFRLENBQUNMLE9BQVQsQ0FBaUJPLEdBQWpCLENBQXFCLEtBQXJCLENBRlMsRUFHVEYsUUFBUSxDQUFDTCxPQUFULENBQWlCTyxHQUFqQixDQUFxQixRQUFyQixDQUhTLENBQVg7QUFLQSxlQUFPRixRQUFRLENBQUNHLElBQVQsRUFBUDtBQUNELE9BUEQsTUFPTztBQUNMQyxhQUFLLDRHQUFMO0FBR0Q7QUFDRixLQWxCRCxFQU53QixDQXlCeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRCxHQWhDRDs7QUFrQ0Esc0JBQ0U7QUFBTSxZQUFRLEVBQUVoQixZQUFoQjtBQUFBLDRCQUNFO0FBQU8sYUFBTyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQ0UsUUFBRSxFQUFDLGFBREw7QUFFRSxVQUFJLEVBQUMsT0FGUDtBQUdFLFdBQUssRUFBRVQsS0FIVDtBQUlFLGNBQVEsRUFBRSxrQkFBQVUsQ0FBQztBQUFBLGVBQUlULFFBQVEsQ0FBQ1MsQ0FBQyxDQUFDbkIsTUFBRixDQUFTRyxLQUFWLENBQVo7QUFBQSxPQUpiO0FBS0UsY0FBUTtBQUxWO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQVNFO0FBQU8sYUFBTyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVEYsZUFVRTtBQUNFLFFBQUUsRUFBQyxnQkFETDtBQUVFLFVBQUksRUFBQyxVQUZQO0FBR0UsV0FBSyxFQUFFUSxRQUhUO0FBSUUsY0FBUSxFQUFFLGtCQUFBUSxDQUFDO0FBQUEsZUFBSVAsV0FBVyxDQUFDTyxDQUFDLENBQUNuQixNQUFGLENBQVNHLEtBQVYsQ0FBZjtBQUFBLE9BSmI7QUFLRSxjQUFRLE1BTFY7QUFNRSxlQUFTLEVBQUVDLDhEQUFNLENBQUMrQjtBQU5wQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVkYsRUFrQkcsQ0FBQ3pDLFNBQUQsaUJBQWM7QUFBUSxlQUFTLEVBQUVVLDhEQUFNLENBQUNnQyxNQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWxCakIsRUFtQkcxQyxTQUFTLGlCQUNSO0FBQVEsZUFBUyxFQUFFVSw4REFBTSxDQUFDZ0MsTUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFwQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF5QkQ7O0dBbkV1QjlCLFM7O0tBQUFBLFM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIeEI7QUFFZSxTQUFTK0IsY0FBVCxPQUFzQztBQUFBLE1BQVoxQyxRQUFZLFFBQVpBLFFBQVk7QUFDbkQsc0JBQ0U7QUFBRyxhQUFTLEVBQUVTLDhEQUFNLENBQUNrQyxlQUFyQjtBQUFBLHVFQUVHM0MsUUFBUSxHQUFHLFNBQVgsaUJBQ0M7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREY7QUFBQSxvQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVlEO0tBYnVCMEMsYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0Z4QixJQUFNRSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFBQyxPQUFPLEVBQUk7QUFBQSx1QkFDSEEsT0FBTyxDQUFDQyxLQUFSLENBQWMsR0FBZCxDQURHO0FBQUE7QUFBQSxNQUN2QkMsR0FEdUI7QUFBQSxNQUNsQkMsS0FEa0I7QUFBQSxNQUNYQyxJQURXOztBQUU5QixTQUFPLElBQUlDLElBQUosQ0FBU0QsSUFBVCxFQUFlRCxLQUFLLEdBQUcsQ0FBdkIsRUFBMEJELEdBQTFCLENBQVA7QUFDRCxDQUhEOztBQUtBLFNBQVNJLGlCQUFULEdBQTZCO0FBQzNCLE1BQUlDLEtBQUssR0FBRyxJQUFJRixJQUFKLEVBQVo7QUFDQSxNQUFJRyxDQUFDLEdBQUdELEtBQUssQ0FBQ0UsV0FBTixFQUFSLENBRjJCLENBRzNCOztBQUNBLE1BQUlDLENBQUMsR0FBR0gsS0FBSyxDQUFDSSxRQUFOLEtBQW1CLENBQTNCO0FBQ0EsTUFBSUMsQ0FBQyxHQUFHTCxLQUFLLENBQUNNLE9BQU4sRUFBUjtBQUNBLE1BQUlDLENBQUMsR0FBR1AsS0FBSyxDQUFDUSxRQUFOLEVBQVI7QUFDQSxNQUFJQyxFQUFFLEdBQUdULEtBQUssQ0FBQ1UsVUFBTixFQUFUO0FBQ0EsTUFBSUMsQ0FBQyxHQUFHWCxLQUFLLENBQUNZLFVBQU4sRUFBUjtBQUNBLFNBQU9YLENBQUMsR0FBRyxHQUFKLEdBQVVFLENBQVYsR0FBYyxHQUFkLEdBQW9CRSxDQUFwQixHQUF3QixHQUF4QixHQUE4QkUsQ0FBOUIsR0FBa0MsR0FBbEMsR0FBd0NFLEVBQXhDLEdBQTZDLEdBQTdDLEdBQW1ERSxDQUExRDtBQUNEOztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUEsSUFBTUUsT0FBTyxHQUFHQyx1RUFBYyxDQUM1QixnREFENEIsQ0FBOUI7QUFHQSxJQUFNQyxPQUFPLE9BQWI7QUFFZSxTQUFTQyxRQUFULEdBQW9CO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ0h2RCxzREFBUSxDQUFDLElBQUQsQ0FETDtBQUFBLE1BQzFCd0QsT0FEMEI7QUFBQSxNQUNqQkMsVUFEaUI7O0FBQUEsb0JBRUpDLHdEQUFVLENBQUNOLE9BQUQsRUFBVSxFQUFWLEVBQWNPLDREQUFkLENBRk47QUFBQSxNQUUxQkMsSUFGMEI7QUFBQSxNQUVwQkMsWUFGb0I7O0FBQUEsbUJBR0M3RCxzREFBUSxDQUFDLElBQUQsQ0FIVDtBQUFBLE1BRzFCOEQsU0FIMEI7QUFBQSxNQUdmQyxZQUhlOztBQUFBLG1CQUlDL0Qsc0RBQVEsQ0FBQyxLQUFELENBSlQ7QUFBQSxNQUkxQmQsU0FKMEI7QUFBQSxNQUlmbUIsWUFKZTs7QUFBQSxtQkFLREwsc0RBQVEsQ0FBQyxDQUFELENBTFA7QUFBQSxNQUsxQmIsUUFMMEI7QUFBQSxNQUtoQjZFLFdBTGdCOztBQUFBLG1CQU1EaEUsc0RBQVEsQ0FBQyxLQUFELENBTlA7QUFBQSxNQU0xQmlFLFFBTjBCO0FBQUEsTUFNaEJDLFdBTmdCOztBQUFBLG1CQU9QbEUsc0RBQVEsQ0FBQztBQUNqQ21FLFdBQU8sRUFBRSxFQUR3QjtBQUVqQ0MsT0FBRyxFQUFFLEVBRjRCO0FBR2pDQyxVQUFNLEVBQUU7QUFIeUIsR0FBRCxDQVBEO0FBQUEsTUFPMUJDLEtBUDBCO0FBQUEsTUFPbkJDLFFBUG1COztBQVlqQyxNQUFNQyxtQkFBbUIsR0FBR2pFLHVCQUE1QjtBQUNBLE1BQU1rRSxjQUFjLGFBQU1ELG1CQUFOLGtCQUFwQjtBQUVBRSx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJbEIsT0FBSixFQUFhO0FBQ1h2RSxnQkFBVSxDQUFDdUUsT0FBRCxDQUFWO0FBQ0Q7QUFDRixHQUpRLEVBSU4sQ0FBQ0EsT0FBRCxDQUpNLENBQVQ7O0FBTUEsTUFBTW1CLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDdEIsUUFBTUMsV0FBVyxHQUFHQywwQ0FBQSxDQUFXQyxRQUFYLEVBQXBCO0FBQ0EsUUFBTUMsWUFBWSxHQUFHRiwwQ0FBQSxDQUFXRyxhQUFYLENBQXlCbEIsU0FBekIsQ0FBckI7QUFDQWUsOENBQUEsQ0FBV0ksaUJBQVgsQ0FBNkJMLFdBQTdCLEVBQTBDRyxZQUExQyxFQUF3RCxhQUF4RCxFQUhzQixDQUl0QjtBQUNBOztBQUNBRixrREFBQSxDQUFlRCxXQUFmLHlCQUE0Q3RDLHFFQUFpQixFQUE3RDtBQUNELEdBUEQ7O0FBU0EsTUFBTTRDLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLFFBQUQsRUFBV0MsU0FBWCxFQUF5QjtBQUMxQyxRQUFNQyxPQUFPLEdBQ1hGLFFBQVEsQ0FBQyxTQUFELENBQVIsR0FDQSxLQURBLEdBRUFBLFFBQVEsQ0FBQyxnQkFBRCxDQUZSLEdBR0EsR0FIQSxHQUlBQSxRQUFRLENBQUMsT0FBRCxDQUxWO0FBT0EsUUFBTXRFLElBQUksR0FBRztBQUNYeUUsZ0JBQVUsRUFBRUgsUUFBUSxDQUFDLFFBQUQsQ0FEVDtBQUVYSSxlQUFTLEVBQUVKLFFBQVEsQ0FBQyxLQUFELENBRlI7QUFHWHJFLFdBQUssRUFBRXFFLFFBQVEsQ0FBQyxNQUFELENBSEo7QUFJWEssa0JBQVksRUFBRUwsUUFBUSxDQUFDLFdBQUQsQ0FBUixDQUFzQk0sT0FBdEIsQ0FBOEIsTUFBOUIsRUFBc0MsRUFBdEMsQ0FKSDtBQUtYQyxnQkFBVSxFQUFFM0QsZ0VBQVksQ0FBQ29ELFFBQVEsQ0FBQyxzQkFBRCxDQUFULENBTGI7QUFNWEUsYUFBTyxFQUFFQSxPQU5FO0FBT1hNLHdCQUFrQixFQUFFLEtBUFQ7QUFRWEMsd0JBQWtCLEVBQUVULFFBQVEsQ0FBQyxPQUFELENBUmpCO0FBU1hVLHNCQUFnQixFQUFFLENBQUN0RixHQUFEO0FBVFAsS0FBYjtBQVdBUSxTQUFLLENBQUMwRCxjQUFELEVBQWlCO0FBQ3BCekQsWUFBTSxFQUFFLE1BRFk7QUFFcEJDLGFBQU8sRUFBRTtBQUNQLHdCQUFnQixrQkFEVDtBQUVQLHdCQUFnQnFELEtBQUssQ0FBQ0gsT0FGZjtBQUdQQyxXQUFHLEVBQUVFLEtBQUssQ0FBQ0YsR0FISjtBQUlQQyxjQUFNLEVBQUVDLEtBQUssQ0FBQ0Q7QUFKUCxPQUZXO0FBUXBCbkQsVUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZVAsSUFBZjtBQVJjLEtBQWpCLENBQUwsQ0FVR1EsSUFWSCxDQVVRLFVBQUFDLFFBQVE7QUFBQSxhQUFJQSxRQUFRLENBQUNHLElBQVQsRUFBSjtBQUFBLEtBVmhCLEVBV0dKLElBWEgsQ0FXUSxVQUFBeUUsTUFBTSxFQUFJO0FBQ2QsVUFBSUMsWUFBWSxHQUFHLDZGQUFJakMsU0FBUCxDQUFoQjs7QUFDQSxVQUFJZ0MsTUFBTSxDQUFDakYsSUFBWCxFQUFpQjtBQUNma0Ysb0JBQVksQ0FBQ1gsU0FBRCxDQUFaLENBQXdCLFFBQXhCLElBQW9DVSxNQUFNLENBQUNqRixJQUFQLENBQVltRixFQUFoRDtBQUNBakMsb0JBQVksQ0FBQ2dDLFlBQUQsQ0FBWjtBQUNELE9BSEQsTUFHTyxJQUNMRCxNQUFNLENBQUNHLE1BQVAsQ0FBY25GLEtBQWQsSUFDQWdGLE1BQU0sQ0FBQ0csTUFBUCxDQUFjbkYsS0FBZCxDQUFvQixDQUFwQixFQUF1Qm9GLEtBQXZCLEtBQWlDLE9BRjVCLEVBR0w7QUFDQUgsb0JBQVksQ0FBQ1gsU0FBRCxDQUFaLENBQXdCLFFBQXhCLElBQW9DVSxNQUFNLENBQUNHLE1BQVAsQ0FBY25GLEtBQWQsQ0FBb0IsQ0FBcEIsRUFBdUJrRixFQUEzRDtBQUNBakMsb0JBQVksQ0FBQ2dDLFlBQUQsQ0FBWjtBQUNBckUsYUFBSyxDQUFDLDJDQUFELENBQUw7QUFDRCxPQVBNLE1BT0EsSUFDTG9FLE1BQU0sQ0FBQ0csTUFBUCxDQUFjbkYsS0FBZCxJQUNBZ0YsTUFBTSxDQUFDRyxNQUFQLENBQWNuRixLQUFkLENBQW9CLENBQXBCLEVBQXVCb0YsS0FBdkIsS0FBaUMsU0FGNUIsRUFHTDtBQUNBeEUsYUFBSyxDQUFDLGlDQUFELENBQUw7QUFDRCxPQUxNLE1BS0EsSUFBSW9FLE1BQU0sQ0FBQ0csTUFBUCxJQUFpQkgsTUFBTSxDQUFDRyxNQUFQLENBQWMsQ0FBZCxDQUFyQixFQUF1QztBQUM1Q3ZFLGFBQUssQ0FBQ29FLE1BQU0sQ0FBQ0csTUFBUCxDQUFjLENBQWQsQ0FBRCxDQUFMO0FBQ0Q7QUFDRixLQS9CSCxXQWdDUyxVQUFBQyxLQUFLO0FBQUEsYUFBSXhFLEtBQUssQ0FBQ3dFLEtBQUQsQ0FBVDtBQUFBLEtBaENkO0FBaUNELEdBcEREOztBQXNEQSxNQUFNbkcsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ29FLE9BQUQsRUFBVUMsR0FBVixFQUFlQyxNQUFmLEVBQTBCO0FBQzVDRSxZQUFRLGlDQUFNRCxLQUFOO0FBQWFILGFBQU8sRUFBRUEsT0FBdEI7QUFBK0JDLFNBQUcsRUFBRUEsR0FBcEM7QUFBeUNDLFlBQU0sRUFBRUE7QUFBakQsT0FBUjtBQUNBSCxlQUFXLENBQUMsSUFBRCxDQUFYO0FBQ0QsR0FIRDs7QUFLQSxNQUFNakYsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQWtILElBQUksRUFBSTtBQUN6QixRQUFJN0MsT0FBTyxJQUFJNkMsSUFBSSxJQUFJM0MsT0FBdkIsRUFBZ0M7QUFDOUJDLGdCQUFVLENBQUMwQyxJQUFELENBQVY7QUFDRDs7QUFDRG5DLGVBQVcsQ0FBQ21DLElBQUksQ0FBQ0MsSUFBTixDQUFYO0FBQ0EvRixnQkFBWSxDQUFDLElBQUQsQ0FBWjtBQUNBLFFBQU1nRyxVQUFVLEdBQUcsSUFBSWhFLElBQUosRUFBbkI7QUFFQSxRQUFJaUUsTUFBTSxHQUFHLElBQUlDLFVBQUosRUFBYjs7QUFDQUQsVUFBTSxDQUFDRSxNQUFQLEdBQWdCLFVBQVVsSCxLQUFWLEVBQWlCO0FBQy9CLFVBQU1tSCxRQUFRLEdBQUcsSUFBSUMsVUFBSixDQUFlcEgsS0FBSyxDQUFDRSxNQUFOLENBQWFzRyxNQUE1QixDQUFqQjtBQUNBLFVBQU1hLEdBQUcsR0FBRzlCLHlDQUFBLENBQVU0QixRQUFWLEVBQW9CO0FBQzlCRyxZQUFJLEVBQUUsT0FEd0I7QUFFOUJDLGlCQUFTLEVBQUUsSUFGbUI7QUFHOUJDLGNBQU0sRUFBRTtBQUhzQixPQUFwQixDQUFaO0FBS0E7O0FBQ0EsVUFBTUMsU0FBUyxHQUFHSixHQUFHLENBQUNLLE1BQUosQ0FBV0wsR0FBRyxDQUFDTSxVQUFKLENBQWUsQ0FBZixDQUFYLENBQWxCLENBUitCLENBUy9COztBQUNBLFVBQU1DLEtBQUssR0FBR3JDLDBDQUFBLENBQVdzQyxZQUFYLENBQXdCSixTQUFTLENBQUMsTUFBRCxDQUFqQyxDQUFkO0FBQ0FHLFdBQUssQ0FBQ2hFLENBQU4sQ0FBUWtFLENBQVIsR0FBWSxDQUFaLENBWCtCLENBV2hCOztBQUNmRixXQUFLLENBQUN2RyxDQUFOLENBQVF5RyxDQUFSLEdBQVksRUFBWixDQVorQixDQVlmOztBQUNoQixVQUFNQyxTQUFTLEdBQUd4QywwQ0FBQSxDQUFXeUMsWUFBWCxDQUF3QkosS0FBeEIsQ0FBbEI7QUFDQTs7QUFDQSxVQUFNSyxRQUFRLEdBQUcxQywwQ0FBQSxDQUFXMkMsYUFBWCxDQUF5QlQsU0FBekIsRUFBb0M7QUFDbkRVLGlCQUFTLEVBQUUsS0FEd0M7QUFFbkRDLFdBQUcsRUFBRSxLQUY4QztBQUduREMsY0FBTSxFQUFFLEVBSDJDO0FBSW5EVCxhQUFLLEVBQUVHO0FBSjRDLE9BQXBDLENBQWpCO0FBTUF0RCxrQkFBWSxDQUFDd0QsUUFBRCxDQUFaO0FBQ0FsSCxrQkFBWSxDQUFDLEtBQUQsQ0FBWjtBQUVBd0Qsa0JBQVksQ0FBQztBQUNYK0MsWUFBSSxFQUFFLFFBREs7QUFFWGdCLFlBQUksRUFBRTtBQUNKQyxtQkFBUyxFQUFFLElBQUl4RixJQUFKLEdBQVd5RixXQUFYLEdBQXlCQyxLQUF6QixDQUErQixDQUEvQixFQUFrQyxFQUFsQyxDQURQO0FBRUpDLGtCQUFRLEVBQUUsSUFBSTNGLElBQUosS0FBYWdFLFVBRm5CO0FBR0o0QixrQkFBUSxFQUFFOUIsSUFBSSxDQUFDK0IsSUFIWDtBQUlKL0ksa0JBQVEsRUFBRWdILElBQUksQ0FBQ0MsSUFKWDtBQUtKK0IsbUJBQVMsRUFBRVosUUFBUSxDQUFDN0g7QUFMaEI7QUFGSyxPQUFELENBQVo7QUFVRCxLQWxDRDs7QUFtQ0E0RyxVQUFNLENBQUM4QixpQkFBUCxDQUF5QmpDLElBQXpCO0FBQ0QsR0E3Q0Q7O0FBK0NBLHNCQUNFLHFFQUFDLDBEQUFEO0FBQVEsYUFBUyxFQUFFdkcsOERBQU0sQ0FBQ3lJLFNBQTFCO0FBQXFDLGNBQVUsRUFBRXBKLFVBQWpEO0FBQUEsMkJBQ0U7QUFBTSxlQUFTLEVBQUVXLDhEQUFNLENBQUMwSSxJQUF4QjtBQUFBLDhCQUNFO0FBQUksaUJBQVMsRUFBRTFJLDhEQUFNLENBQUMySSxLQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLEVBR0csQ0FBQ3RFLFFBQUQsaUJBQ0M7QUFBSyxpQkFBUyxFQUFFckUsOERBQU0sQ0FBQzRJLE1BQXZCO0FBQUEsK0JBQ0UscUVBQUMsOERBQUQ7QUFBVyxxQkFBVyxFQUFFekk7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKSixFQVNHa0UsUUFBUSxpQkFDUDtBQUFBLGdDQUNFLHFFQUFDLHdEQUFEO0FBQ0Usb0JBQVUsRUFBRWhGLFVBRGQ7QUFFRSxtQkFBUyxFQUFFQyxTQUZiO0FBR0Usa0JBQVEsRUFBRUM7QUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLEVBT0cyRSxTQUFTLGlCQUNSO0FBQUEsa0NBQ0U7QUFBSSxxQkFBUyxFQUFFbEUsOERBQU0sQ0FBQzZJLFFBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLEVBR0czRSxTQUFTLENBQUNwRSxNQUFWLElBQW9CLENBQXBCLGlCQUNDO0FBQUcscUJBQVMsRUFBRUUsOERBQU0sQ0FBQ0MsV0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkosRUFRR2lFLFNBQVMsQ0FBQ3BFLE1BQVYsR0FBbUIsQ0FBbkIsaUJBQ0M7QUFBQSxvQ0FDRTtBQUFBLHNDQUNFO0FBQUEsd0NBQ0U7QUFBQSwwQ0FDRTtBQUFJLDJCQUFPLEVBQUMsR0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFERixlQUVFO0FBQUksMkJBQU8sRUFBQyxHQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUZGLGVBR0U7QUFBSSwyQkFBTyxFQUFDLEdBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBSEYsZUFJRTtBQUFJLDJCQUFPLEVBQUMsR0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFKRixlQUtFO0FBQUksMkJBQU8sRUFBQyxHQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERixlQVFFO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLGVBV0U7QUFBQSwwQkFDR29FLFNBQVMsQ0FBQzRFLEdBQVYsQ0FBYyxVQUFDN0gsSUFBRCxFQUFPOEgsS0FBUDtBQUFBLHNDQUNiO0FBQUEsNENBQ0U7QUFBSSwrQkFBUyxFQUFFL0ksOERBQU0sQ0FBQ2dKLE1BQXRCO0FBQUEsZ0NBQStCL0gsSUFBSSxDQUFDLEtBQUQ7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFERixlQUVFO0FBQUksK0JBQVMsRUFBRWpCLDhEQUFNLENBQUNnSixNQUF0QjtBQUFBLGdDQUErQi9ILElBQUksQ0FBQyxRQUFEO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBRkYsZUFHRTtBQUFJLCtCQUFTLEVBQUVqQiw4REFBTSxDQUFDZ0osTUFBdEI7QUFBQSxnQ0FBK0IvSCxJQUFJLENBQUMsTUFBRDtBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUhGLGVBSUU7QUFBSSwrQkFBUyxFQUFFakIsOERBQU0sQ0FBQ2dKLE1BQXRCO0FBQUEsZ0NBQ0cvSCxJQUFJLENBQUMsV0FBRDtBQURQO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBSkYsRUFPR0EsSUFBSSxDQUFDLFFBQUQsQ0FBSixJQUFrQixFQUFsQixpQkFDQztBQUFJLCtCQUFTLEVBQUVqQiw4REFBTSxDQUFDZ0osTUFBdEI7QUFBQSxnQ0FDRy9ILElBQUksQ0FBQyxRQUFEO0FBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFSSixFQVlHQSxJQUFJLENBQUMsUUFBRCxDQUFKLElBQWtCLEVBQWxCLGlCQUNDO0FBQUksK0JBQVMsRUFBRWpCLDhEQUFNLENBQUNnSixNQUF0QjtBQUFBLDZDQUNFO0FBQVEsK0JBQU8sRUFBRTtBQUFBLGlDQUFNMUQsVUFBVSxDQUFDckUsSUFBRCxFQUFPOEgsS0FBUCxDQUFoQjtBQUFBLHlCQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBYko7QUFBQSxxQkFBU0EsS0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURhO0FBQUEsaUJBQWQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQXNDRTtBQUFRLHVCQUFTLEVBQUUvSSw4REFBTSxDQUFDZ0MsTUFBMUI7QUFBa0MscUJBQU8sRUFBRStDLFNBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQXRDRjtBQUFBLDBCQVRKO0FBQUEsd0JBUko7QUFBQSxzQkFWSixlQTJFRSxxRUFBQywwREFBRDtBQUNFLGVBQU8sRUFBQyw2QkFEVjtBQUVFLGdCQUFRLEVBQUMsc0RBRlg7QUFHRSxZQUFJLGVBQ0Y7QUFBQSxpQ0FDRTtBQUFHLHFCQUFTLEVBQUUvRSw4REFBTSxDQUFDaUosSUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0EzRUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBNkZEOztHQXJPdUJ0RixROztLQUFBQSxRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2V4cGVyaW1lbnRhdGlvbnMvYXJkZW5uZXMuODYwZmMzYzA2MjE3N2QxYmVlMjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBQZW5kaW5nTWVzc2FnZSBmcm9tIFwiLi9wZW5kaW5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZpbGVIYW5kbGVyKHsgaGFuZGxlRmlsZSwgaXNQZW5kaW5nLCBmaWxlU2l6ZSB9KSB7XG4gIGNvbnN0IGhhbmRsZVNlbGVjdCA9IHVzZUNhbGxiYWNrKGV2ZW50ID0+IHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV2ZW50LnRhcmdldC5maWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgaGFuZGxlRmlsZShldmVudC50YXJnZXQuZmlsZXNbaV0pO1xuICAgIH1cbiAgICBldmVudC50YXJnZXQudmFsdWUgPSBcIlwiO1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgIEdsaXNzZXogZXQgZMOpcG9zZXogbGUgZmljaGllciDDoCBhbmFseXNlciBvdSBzw6lsZWN0aW9ubmV6IGxlLlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgb25DaGFuZ2U9e2hhbmRsZVNlbGVjdH0gbXVsdGlwbGUgLz5cbiAgICAgIDwvcD5cblxuICAgICAge2lzUGVuZGluZyAmJiA8UGVuZGluZ01lc3NhZ2UgZmlsZVNpemU9e2ZpbGVTaXplfSAvPn1cblxuICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxuICAgICAgICBMZXMgb3DDqXJhdGlvbnMgc29udCB0b3V0ZXMgcsOpYWxpc8OpZXMgc3VyIHZvdHJlIG9yZGluYXRldXIuXG4gICAgICAgIDxiciAvPlxuICAgICAgICBBdWN1bmUgZG9ubsOpZSBwZXJzb25uZWxsZSBuJ2VzdCB0cmFuc2bDqXLDqWUuXG4gICAgICA8L3A+XG4gICAgPC8+XG4gICk7XG59XG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbkZvcm0oeyBoYW5kbGVMb2dpbiB9KSB7XG4gIGNvbnN0IFtsb2dpbiwgc2V0TG9naW5dID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtpc1BlbmRpbmcsIHNldElzUGVuZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFJEVl9VUkwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19SRFZfU09MSURBUklURVNfREVNT19VUkw7XG4gIGNvbnN0IHBhdGggPSBcIi9hdXRoL3NpZ25faW5cIjtcbiAgY29uc3QgdXJsID0gYCR7UkRWX1VSTH0vYXBpL3YxJHtwYXRofWA7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgdXNlciA9IHsgZW1haWw6IGxvZ2luLCBwYXNzd29yZDogcGFzc3dvcmQgfTtcbiAgICBzZXRJc1BlbmRpbmcodHJ1ZSk7XG5cbiAgICBmZXRjaCh1cmwsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh1c2VyKSxcbiAgICB9KS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIHNldElzUGVuZGluZyhmYWxzZSk7XG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgaGFuZGxlTG9naW4oXG4gICAgICAgICAgcmVzcG9uc2UuaGVhZGVycy5nZXQoXCJhY2Nlc3MtdG9rZW5cIiksXG4gICAgICAgICAgcmVzcG9uc2UuaGVhZGVycy5nZXQoXCJ1aWRcIiksXG4gICAgICAgICAgcmVzcG9uc2UuaGVhZGVycy5nZXQoXCJjbGllbnRcIilcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KFxuICAgICAgICAgIGBBdWN1biBjb21wdGUgbidlc3QgcmF0dGFjaMOpIMOgIGNlIGNvdXBsZSBlbWFpbC9tb3QgZGUgcGFzc2UuIE1lcmNpIGRlIHbDqXJpZmllciB2b3MgaWRlbnRpZmlhbnRzLmBcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAvLyAudGhlbihyZXN1bHQgPT4ge1xuICAgIC8vICAgY29uc29sZS5sb2coJ1N1Y2Nlc3M6Jyk7XG4gICAgLy8gfSlcbiAgICAvLyAuY2F0Y2goZXJyb3IgPT4ge1xuICAgIC8vICAgYWxlcnQoYFVuZSBlcnJldXIgcydlc3QgcHJvZHVpdGUsIG1lcmNpIGRlIHLDqWVzc2F5ZXIuYCk7XG4gICAgLy8gICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcik7XG4gICAgLy8gfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgIDxsYWJlbCBodG1sRm9yPVwiYWdlbnRfZW1haWxcIj5FbWFpbDwvbGFiZWw+XG4gICAgICA8aW5wdXRcbiAgICAgICAgaWQ9XCJhZ2VudF9lbWFpbFwiXG4gICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgIHZhbHVlPXtsb2dpbn1cbiAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0TG9naW4oZS50YXJnZXQudmFsdWUpfVxuICAgICAgICByZXF1aXJlZFxuICAgICAgLz5cbiAgICAgIDxsYWJlbCBodG1sRm9yPVwiYWdlbnRfcGFzc3dvcmRcIj5Nb3QgZGUgcGFzc2U8L2xhYmVsPlxuICAgICAgPGlucHV0XG4gICAgICAgIGlkPVwiYWdlbnRfcGFzc3dvcmRcIlxuICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubWFyZ2luX2JvdHRvbX1cbiAgICAgIC8+XG4gICAgICB7IWlzUGVuZGluZyAmJiA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0+U2UgY29ubmVjdGVyPC9idXR0b24+fVxuICAgICAge2lzUGVuZGluZyAmJiAoXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufT5Db25uZXhpb24gZW4gY291cnM8L2J1dHRvbj5cbiAgICAgICl9XG4gICAgPC9mb3JtPlxuICApO1xufVxuIiwiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQZW5kaW5nTWVzc2FnZSh7IGZpbGVTaXplIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5wZW5kaW5nX3dhcm5pbmd9PlxuICAgICAgQ2FsY3VsIGRlcyBzdGF0aXN0aXF1ZXMgZW4gY291cnMsIG1lcmNpIGRlIHBhdGllbnRlclxuICAgICAge2ZpbGVTaXplID4gMTAwMDAwMDAwICYmIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICBQb3VyIGxlcyBmaWNoaWVycyBzdXDDqXJpZXVycyDDoCAxMDAgTW8sIGxlIHRlbXBzIGRlIHRyYWl0ZW1lbnQgcGV1dFxuICAgICAgICAgIGTDqXBhc3NlciAxIG1pbnV0ZS5cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvcD5cbiAgKTtcbn1cbiIsImNvbnN0IHN0cmluZ1RvRGF0ZSA9IGRhdGVTdHIgPT4ge1xuICBjb25zdCBbZGF5LCBtb250aCwgeWVhcl0gPSBkYXRlU3RyLnNwbGl0KFwiL1wiKTtcbiAgcmV0dXJuIG5ldyBEYXRlKHllYXIsIG1vbnRoIC0gMSwgZGF5KTtcbn07XG5cbmZ1bmN0aW9uIGdldERhdGVUaW1lU3RyaW5nKCkge1xuICB2YXIgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICB2YXIgeSA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XG4gIC8vIEphdmFTY3JpcHQgbW9udGhzIGFyZSAwLWJhc2VkLlxuICB2YXIgbSA9IHRvZGF5LmdldE1vbnRoKCkgKyAxO1xuICB2YXIgZCA9IHRvZGF5LmdldERhdGUoKTtcbiAgdmFyIGggPSB0b2RheS5nZXRIb3VycygpO1xuICB2YXIgbWkgPSB0b2RheS5nZXRNaW51dGVzKCk7XG4gIHZhciBzID0gdG9kYXkuZ2V0U2Vjb25kcygpO1xuICByZXR1cm4geSArIFwiX1wiICsgbSArIFwiX1wiICsgZCArIFwiX1wiICsgaCArIFwiX1wiICsgbWkgKyBcIl9cIiArIHM7XG59XG5cbmV4cG9ydCB7IHN0cmluZ1RvRGF0ZSwgZ2V0RGF0ZVRpbWVTdHJpbmcgfTtcbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZHVjZXIgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIFhMU1ggZnJvbSBcInhsc3hcIjtcblxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9sYXlvdXRcIjtcbmltcG9ydCBGaWxlSGFuZGxlciBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9maWxlXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2Zvb3RlclwiO1xuaW1wb3J0IExvZ2luRm9ybSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9sb2dpbi1mb3JtXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi8uLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5cbmltcG9ydCB7IGdldERhdGVUaW1lU3RyaW5nLCBzdHJpbmdUb0RhdGUgfSBmcm9tIFwiLi4vLi4vLi4vbGliL2RhdGVzXCI7XG5pbXBvcnQgeyBpbml0UmVkdWNlciwgcmVkdWNlckZhY3RvcnkgfSBmcm9tIFwiLi4vLi4vLi4vbGliL2hpc3RvcmlxdWVcIjtcblxuY29uc3QgcmVkdWNlciA9IHJlZHVjZXJGYWN0b3J5KFxuICBcIkV4cMOpcmltZW50YXRpb24gQXJkZW5uZXMgLSBDTkFGIC0gQsOpbsOpZmljaWFpcmVcIlxuKTtcbmNvbnN0IGRldk1vZGUgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PSBcImRldmVsb3BtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFyZGVubmVzKCkge1xuICBjb25zdCBbZGV2RmlsZSwgc2V0RGV2RmlsZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3J1bnMsIGRpc3BhdGNoUnVuc10gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIFtdLCBpbml0UmVkdWNlcik7XG4gIGNvbnN0IFt1c2Vyc0RhdGEsIHNldFVzZXJzRGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2lzUGVuZGluZywgc2V0SXNQZW5kaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2ZpbGVTaXplLCBzZXRGaWxlU2l6ZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2lzTG9nZ2VkLCBzZXRJc0xvZ2dlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt0b2tlbiwgc2V0VG9rZW5dID0gdXNlU3RhdGUoe1xuICAgIHRva2VuSWQ6IFwiXCIsXG4gICAgdWlkOiBcIlwiLFxuICAgIGNsaWVudDogXCJcIixcbiAgfSk7XG4gIGNvbnN0IFJEVl9TT0xJREFSSVRFU19VUkwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19SRFZfU09MSURBUklURVNfREVNT19VUkw7XG4gIGNvbnN0IGNyZWF0ZVVzZXJzVXJsID0gYCR7UkRWX1NPTElEQVJJVEVTX1VSTH0vYXBpL3YxL3VzZXJzYDtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkZXZGaWxlKSB7XG4gICAgICBoYW5kbGVGaWxlKGRldkZpbGUpO1xuICAgIH1cbiAgfSwgW2RldkZpbGVdKTtcblxuICBjb25zdCB3cml0ZUZpbGUgPSAoKSA9PiB7XG4gICAgY29uc3Qgb3V0V29ya2Jvb2sgPSBYTFNYLnV0aWxzLmJvb2tfbmV3KCk7XG4gICAgY29uc3Qgb3V0V29ya3NoZWV0ID0gWExTWC51dGlscy5qc29uX3RvX3NoZWV0KHVzZXJzRGF0YSk7XG4gICAgWExTWC51dGlscy5ib29rX2FwcGVuZF9zaGVldChvdXRXb3JrYm9vaywgb3V0V29ya3NoZWV0LCBcIkRJVkVSR0VOQ0VTXCIpO1xuICAgIC8vIFhMU1gudXRpbHMuYm9va19hcHBlbmRfc2hlZXQob3V0V29ya2Jvb2ssIHhscy5TaGVldHNbeGxzLlNoZWV0TmFtZXNbMV1dLCBcIkdSQVBISVFVRVwiKTtcbiAgICAvLyBYTFNYLnV0aWxzLmJvb2tfYXBwZW5kX3NoZWV0KG91dFdvcmtib29rLCB4bHMuU2hlZXRzW3hscy5TaGVldE5hbWVzWzJdXSwgXCJTZWxlY3Rpb24gQ09BXCIpO1xuICAgIFhMU1gud3JpdGVGaWxlKG91dFdvcmtib29rLCBgYXJkZW5uZXNfcnNhXyR7Z2V0RGF0ZVRpbWVTdHJpbmcoKX0ueGxzeGApO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZVVzZXIgPSAodXNlckRhdGEsIHVzZXJJbmRleCkgPT4ge1xuICAgIGNvbnN0IGFkZHJlc3MgPVxuICAgICAgdXNlckRhdGFbXCJBRFJFU1NFXCJdICtcbiAgICAgIFwiIC0gXCIgK1xuICAgICAgdXNlckRhdGFbXCJDT0RFXFxyXFxuUE9TVEFMXCJdICtcbiAgICAgIFwiIFwiICtcbiAgICAgIHVzZXJEYXRhW1wiVklMTEVcIl07XG5cbiAgICBjb25zdCB1c2VyID0ge1xuICAgICAgZmlyc3RfbmFtZTogdXNlckRhdGFbXCJQUkVOT01cIl0sXG4gICAgICBsYXN0X25hbWU6IHVzZXJEYXRhW1wiTk9NXCJdLFxuICAgICAgZW1haWw6IHVzZXJEYXRhW1wiTUFJTFwiXSxcbiAgICAgIHBob25lX251bWJlcjogdXNlckRhdGFbXCJURUxFUEhPTkVcIl0ucmVwbGFjZSgvXFxzKy9nLCBcIlwiKSxcbiAgICAgIGJpcnRoX2RhdGU6IHN0cmluZ1RvRGF0ZSh1c2VyRGF0YVtcIkRBVEUgREVcXHJcXG5OQUlTU0FOQ0VcIl0pLFxuICAgICAgYWRkcmVzczogYWRkcmVzcyxcbiAgICAgIGNhaXNzZV9hZmZpbGlhdGlvbjogXCJjYWZcIixcbiAgICAgIGFmZmlsaWF0aW9uX251bWJlcjogdXNlckRhdGFbXCJOwrBDQUZcIl0sXG4gICAgICBvcmdhbmlzYXRpb25faWRzOiBbcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfT1JHQU5JU0FUSU9OX0lEX0RFTU9dLFxuICAgIH07XG4gICAgZmV0Y2goY3JlYXRlVXNlcnNVcmwsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICBcImFjY2Vzcy10b2tlblwiOiB0b2tlbi50b2tlbklkLFxuICAgICAgICB1aWQ6IHRva2VuLnVpZCxcbiAgICAgICAgY2xpZW50OiB0b2tlbi5jbGllbnQsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodXNlciksXG4gICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgIGxldCBuZXdVc2Vyc0RhdGEgPSBbLi4udXNlcnNEYXRhXTtcbiAgICAgICAgaWYgKHJlc3VsdC51c2VyKSB7XG4gICAgICAgICAgbmV3VXNlcnNEYXRhW3VzZXJJbmRleF1bXCJJRCBSRFZcIl0gPSByZXN1bHQudXNlci5pZDtcbiAgICAgICAgICBzZXRVc2Vyc0RhdGEobmV3VXNlcnNEYXRhKTtcbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICByZXN1bHQuZXJyb3JzLmVtYWlsICYmXG4gICAgICAgICAgcmVzdWx0LmVycm9ycy5lbWFpbFswXS5lcnJvciA9PT0gXCJ0YWtlblwiXG4gICAgICAgICkge1xuICAgICAgICAgIG5ld1VzZXJzRGF0YVt1c2VySW5kZXhdW1wiSUQgUkRWXCJdID0gcmVzdWx0LmVycm9ycy5lbWFpbFswXS5pZDtcbiAgICAgICAgICBzZXRVc2Vyc0RhdGEobmV3VXNlcnNEYXRhKTtcbiAgICAgICAgICBhbGVydChcIlVuIGNvbXB0ZSBhc3NvY2nDqSDDoCBjZXQgZW1haWwgZXhpc3RlIGTDqWrDoFwiKTtcbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICByZXN1bHQuZXJyb3JzLmVtYWlsICYmXG4gICAgICAgICAgcmVzdWx0LmVycm9ycy5lbWFpbFswXS5lcnJvciA9PT0gXCJpbnZhbGlkXCJcbiAgICAgICAgKSB7XG4gICAgICAgICAgYWxlcnQoXCJMJ2FkcmVzc2UgbWFpbCBuJ2VzdCBwYXMgdmFsaWRlXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5lcnJvcnMgJiYgcmVzdWx0LmVycm9yc1swXSkge1xuICAgICAgICAgIGFsZXJ0KHJlc3VsdC5lcnJvcnNbMF0pO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IGFsZXJ0KGVycm9yKSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTG9naW4gPSAodG9rZW5JZCwgdWlkLCBjbGllbnQpID0+IHtcbiAgICBzZXRUb2tlbih7IC4uLnRva2VuLCB0b2tlbklkOiB0b2tlbklkLCB1aWQ6IHVpZCwgY2xpZW50OiBjbGllbnQgfSk7XG4gICAgc2V0SXNMb2dnZWQodHJ1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRmlsZSA9IGZpbGUgPT4ge1xuICAgIGlmIChkZXZNb2RlICYmIGZpbGUgIT0gZGV2RmlsZSkge1xuICAgICAgc2V0RGV2RmlsZShmaWxlKTtcbiAgICB9XG4gICAgc2V0RmlsZVNpemUoZmlsZS5zaXplKTtcbiAgICBzZXRJc1BlbmRpbmcodHJ1ZSk7XG4gICAgY29uc3Qgc3RhcnRfdGltZSA9IG5ldyBEYXRlKCk7XG5cbiAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBjb25zdCBmaWxlRGF0YSA9IG5ldyBVaW50OEFycmF5KGV2ZW50LnRhcmdldC5yZXN1bHQpO1xuICAgICAgY29uc3QgeGxzID0gWExTWC5yZWFkKGZpbGVEYXRhLCB7XG4gICAgICAgIHR5cGU6IFwiYXJyYXlcIixcbiAgICAgICAgY2VsbERhdGVzOiB0cnVlLFxuICAgICAgICBkYXRlTkY6IFwiZGQvbW0veXl5eVwiLFxuICAgICAgfSk7XG4gICAgICAvKiBHZXQgZmlyc3Qgd29ya3NoZWV0ICovXG4gICAgICBjb25zdCB3b3Jrc2hlZXQgPSB4bHMuU2hlZXRzW3hscy5TaGVldE5hbWVzWzBdXTtcbiAgICAgIC8vIExpbWl0ZXIgbGEgY2FwdHVyZSBhdXggY29sb25uZXMgQS1UXG4gICAgICBjb25zdCByYW5nZSA9IFhMU1gudXRpbHMuZGVjb2RlX3JhbmdlKHdvcmtzaGVldFtcIiFyZWZcIl0pO1xuICAgICAgcmFuZ2Uucy5jID0gMDsgLy8gMCA9PSBYTFNYLnV0aWxzLmRlY29kZV9jb2woXCJBXCIpXG4gICAgICByYW5nZS5lLmMgPSAxOTsgLy8gMTkgPT0gWExTWC51dGlscy5kZWNvZGVfY29sKFwiVFwiKVxuICAgICAgY29uc3QgbmV3X3JhbmdlID0gWExTWC51dGlscy5lbmNvZGVfcmFuZ2UocmFuZ2UpO1xuICAgICAgLyogQ29udmVydCBhcnJheSB0byBqc29uKi9cbiAgICAgIGNvbnN0IGpzb25EYXRhID0gWExTWC51dGlscy5zaGVldF90b19qc29uKHdvcmtzaGVldCwge1xuICAgICAgICBibGFua3Jvd3M6IGZhbHNlLFxuICAgICAgICByYXc6IGZhbHNlLFxuICAgICAgICBkZWZ2YWw6IFwiXCIsXG4gICAgICAgIHJhbmdlOiBuZXdfcmFuZ2UsXG4gICAgICB9KTtcbiAgICAgIHNldFVzZXJzRGF0YShqc29uRGF0YSk7XG4gICAgICBzZXRJc1BlbmRpbmcoZmFsc2UpO1xuXG4gICAgICBkaXNwYXRjaFJ1bnMoe1xuICAgICAgICB0eXBlOiBcImFwcGVuZFwiLFxuICAgICAgICBpdGVtOiB7XG4gICAgICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTkpLFxuICAgICAgICAgIGR1cmF0aW9uOiBuZXcgRGF0ZSgpIC0gc3RhcnRfdGltZSxcbiAgICAgICAgICBmaWxlbmFtZTogZmlsZS5uYW1lLFxuICAgICAgICAgIGZpbGVTaXplOiBmaWxlLnNpemUsXG4gICAgICAgICAgZmlsZUxpbmVzOiBqc29uRGF0YS5sZW5ndGgsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9O1xuICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihmaWxlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfSBoYW5kbGVGaWxlPXtoYW5kbGVGaWxlfT5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PkV4cMOpcmltZW50YXRpb24gQXJkZW5uZXM8L2gxPlxuXG4gICAgICAgIHshaXNMb2dnZWQgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY3JlYXRlfT5cbiAgICAgICAgICAgIDxMb2dpbkZvcm0gaGFuZGxlTG9naW49e2hhbmRsZUxvZ2lufSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuXG4gICAgICAgIHtpc0xvZ2dlZCAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxGaWxlSGFuZGxlclxuICAgICAgICAgICAgICBoYW5kbGVGaWxlPXtoYW5kbGVGaWxlfVxuICAgICAgICAgICAgICBpc1BlbmRpbmc9e2lzUGVuZGluZ31cbiAgICAgICAgICAgICAgZmlsZVNpemU9e2ZpbGVTaXplfVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAge3VzZXJzRGF0YSAmJiAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnN1YnRpdGxlfT5Cw6luw6lmaWNpYWlyZXMgUlNBPC9oMj5cblxuICAgICAgICAgICAgICAgIHt1c2Vyc0RhdGEubGVuZ3RoID09IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgICAgICAgICAgICBBdWN1biBiw6luw6lmaWNpYWlyZSBkYW5zIGxlIGZpY2hpZXJcbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHt1c2Vyc0RhdGEubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5Ob208L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5QcsOpbm9tPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+TWFpbDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPlTDqWzDqXBob25lPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+SUQgUkRWLVNvbGlkYXJpdMOpczwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPjwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dXNlcnNEYXRhLm1hcCgodXNlciwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9Pnt1c2VyW1wiTk9NXCJdfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+e3VzZXJbXCJQUkVOT01cIl19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT57dXNlcltcIk1BSUxcIl19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyW1wiVEVMRVBIT05FXCJdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3VzZXJbXCJJRCBSRFZcIl0gIT0gXCJcIiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3VzZXJbXCJJRCBSRFZcIl19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3VzZXJbXCJJRCBSRFZcIl0gPT0gXCJcIiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBjcmVhdGVVc2VyKHVzZXIsIGluZGV4KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3LDqWVyIHVuIGNvbXB0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259IG9uQ2xpY2s9e3dyaXRlRmlsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgUmVnw6luw6lyZXIgZmljaGllclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cblxuICAgICAgICA8Rm9vdGVyXG4gICAgICAgICAgc3ViamVjdD1cIkV4cMOpcmltZW50YXRpb24gQXJkZW5uZXNcIlxuICAgICAgICAgIHBvdXJxdW9pPVwiUXVlbCBlc3QgbCdvYmplY3RpZiBkZSBjZXR0ZSBleHDDqXJpbWVudGF0aW9uJm5ic3A7P1wiXG4gICAgICAgICAgdGV4dD17XG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5cbiAgICAgICAgICAgICAgICBGYWNpbGl0ZXIgbGUgdHJhdmFpbCBkZXMgYWdlbnRzIGR1IGTDqXBhcnRlbWVudCBldCB0ZXN0ZXJcbiAgICAgICAgICAgICAgICBsJ3V0aWxpc2F0aW9uIGRlIGwnYXBwbGljYXRpb24gUkRWLVNvbGlkYXJpdMOpcyBwb3VyIGFjY8OpbMOpcmVyIGxhXG4gICAgICAgICAgICAgICAgcHJpc2UgZHUgcHJlbWllciByZW5kZXotdm91cyBkJ29yaWVudGF0aW9uLlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICB9XG4gICAgICAgIC8+XG4gICAgICA8L21haW4+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9