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
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "/home/q/code/qblanc/beta.gouv/analyse-flux-insertion/components/login-form.js",
    _s = $RefreshSig$();



function LoginForm(_ref) {
  _s();

  var handleLogin = _ref.handleLogin;

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
      lineNumber: 49,
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
      lineNumber: 50,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
      htmlFor: "agent_password",
      children: "Mot de passe"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
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
      lineNumber: 58,
      columnNumber: 7
    }, this), !isPending && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.button,
      children: "Se connecter"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 22
    }, this), isPending && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.button,
      children: "Connexion en cours"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 21
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 46,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sb2dpbi1mb3JtLmpzIl0sIm5hbWVzIjpbIkxvZ2luRm9ybSIsImhhbmRsZUxvZ2luIiwidXNlU3RhdGUiLCJsb2dpbiIsInNldExvZ2luIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImlzUGVuZGluZyIsInNldElzUGVuZGluZyIsIlJEVl9VUkwiLCJwcm9jZXNzIiwicGF0aCIsInVybCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInVzZXIiLCJlbWFpbCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJnZXQiLCJqc29uIiwiYWxlcnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInN0eWxlcyIsIm1hcmdpbl9ib3R0b20iLCJidXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLFNBQVQsT0FFWjtBQUFBOztBQUFBLE1BRERDLFdBQ0MsUUFEREEsV0FDQzs7QUFBQSxrQkFDeUJDLHNEQUFRLENBQUMsRUFBRCxDQURqQztBQUFBLE1BQ01DLEtBRE47QUFBQSxNQUNhQyxRQURiOztBQUFBLG1CQUUrQkYsc0RBQVEsQ0FBQyxFQUFELENBRnZDO0FBQUEsTUFFTUcsUUFGTjtBQUFBLE1BRWdCQyxXQUZoQjs7QUFBQSxtQkFHaUNKLHNEQUFRLENBQUMsS0FBRCxDQUh6QztBQUFBLE1BR01LLFNBSE47QUFBQSxNQUdpQkMsWUFIakI7O0FBSUQsTUFBTUMsT0FBTyxHQUFHQyx1QkFBaEI7QUFDQSxNQUFNQyxJQUFJLEdBQUcsZUFBYjtBQUNBLE1BQU1DLEdBQUcsYUFBTUgsT0FBTixvQkFBdUJFLElBQXZCLENBQVQ7O0FBR0EsTUFBTUUsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsQ0FBRCxFQUFPO0FBQzFCQSxLQUFDLENBQUNDLGNBQUY7QUFFQSxRQUFNQyxJQUFJLEdBQUc7QUFBRUMsV0FBSyxFQUFFZCxLQUFUO0FBQWdCRSxjQUFRLEVBQUVBO0FBQTFCLEtBQWI7QUFDQUcsZ0JBQVksQ0FBQyxJQUFELENBQVo7QUFFQVUsU0FBSyxDQUFDTixHQUFELEVBQU07QUFDVE8sWUFBTSxFQUFFLE1BREM7QUFFVEMsYUFBTyxFQUFFO0FBQUUsd0JBQWdCO0FBQWxCLE9BRkE7QUFHVEMsVUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZVAsSUFBZjtBQUhHLEtBQU4sQ0FBTCxDQU1DUSxJQU5ELENBTU0sVUFBQ0MsUUFBRCxFQUFjO0FBQ2xCakIsa0JBQVksQ0FBQyxLQUFELENBQVo7O0FBQ0EsVUFBSWlCLFFBQVEsQ0FBQ0MsRUFBYixFQUFpQjtBQUNmekIsbUJBQVcsQ0FBQ3dCLFFBQVEsQ0FBQ0wsT0FBVCxDQUFpQk8sR0FBakIsQ0FBcUIsY0FBckIsQ0FBRCxFQUF1Q0YsUUFBUSxDQUFDTCxPQUFULENBQWlCTyxHQUFqQixDQUFxQixLQUFyQixDQUF2QyxFQUFvRUYsUUFBUSxDQUFDTCxPQUFULENBQWlCTyxHQUFqQixDQUFxQixRQUFyQixDQUFwRSxDQUFYO0FBQ0EsZUFBT0YsUUFBUSxDQUFDRyxJQUFULEVBQVA7QUFDRCxPQUhELE1BR087QUFDTEMsYUFBSyw0R0FBTDtBQUNEO0FBQ0YsS0FkRCxFQU4wQixDQXFCMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRCxHQTVCRDs7QUE4QkEsc0JBQ0U7QUFDRSxZQUFRLEVBQUVoQixZQURaO0FBQUEsNEJBR0U7QUFBTyxhQUFPLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGLGVBSUU7QUFDRSxRQUFFLEVBQUMsYUFETDtBQUVFLFVBQUksRUFBQyxPQUZQO0FBR0UsV0FBSyxFQUFFVixLQUhUO0FBSUUsY0FBUSxFQUFFLGtCQUFDVyxDQUFEO0FBQUEsZUFBT1YsUUFBUSxDQUFDVSxDQUFDLENBQUNnQixNQUFGLENBQVNDLEtBQVYsQ0FBZjtBQUFBLE9BSlo7QUFLRSxjQUFRO0FBTFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLGVBV0U7QUFBTyxhQUFPLEVBQUMsZ0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYRixlQVlFO0FBQ0UsUUFBRSxFQUFDLGdCQURMO0FBRUUsVUFBSSxFQUFDLFVBRlA7QUFHRSxXQUFLLEVBQUUxQixRQUhUO0FBSUUsY0FBUSxFQUFFLGtCQUFDUyxDQUFEO0FBQUEsZUFBT1IsV0FBVyxDQUFDUSxDQUFDLENBQUNnQixNQUFGLENBQVNDLEtBQVYsQ0FBbEI7QUFBQSxPQUpaO0FBS0UsY0FBUSxNQUxWO0FBTUUsZUFBUyxFQUFFQyw4REFBTSxDQUFDQztBQU5wQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWkYsRUFvQkcsQ0FBQzFCLFNBQUQsaUJBQWM7QUFBUSxlQUFTLEVBQUV5Qiw4REFBTSxDQUFDRSxNQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXBCakIsRUFxQkczQixTQUFTLGlCQUFJO0FBQVEsZUFBUyxFQUFFeUIsOERBQU0sQ0FBQ0UsTUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFyQmhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBeUJEOztHQWxFdUJsQyxTOztLQUFBQSxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2V4cGVyaW1lbnRhdGlvbnMvYXJkZW5uZXMuYTA1ZTg2NTJhMTY2MTIyNzEzNmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luRm9ybSh7XG4gIGhhbmRsZUxvZ2luXG59KSB7XG4gIGNvbnN0IFtsb2dpbiwgc2V0TG9naW5dID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2lzUGVuZGluZywgc2V0SXNQZW5kaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgUkRWX1VSTCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1JEVl9TT0xJREFSSVRFU19ERU1PX1VSTDtcbiAgY29uc3QgcGF0aCA9ICcvYXV0aC9zaWduX2luJztcbiAgY29uc3QgdXJsID0gYCR7UkRWX1VSTH0vYXBpL3YxJHtwYXRofWA7XG5cblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IHVzZXIgPSB7IGVtYWlsOiBsb2dpbiwgcGFzc3dvcmQ6IHBhc3N3b3JkIH07XG4gICAgc2V0SXNQZW5kaW5nKHRydWUpO1xuXG4gICAgZmV0Y2godXJsLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodXNlcilcbiAgICB9KVxuXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBzZXRJc1BlbmRpbmcoZmFsc2UpO1xuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgIGhhbmRsZUxvZ2luKHJlc3BvbnNlLmhlYWRlcnMuZ2V0KFwiYWNjZXNzLXRva2VuXCIpLCByZXNwb25zZS5oZWFkZXJzLmdldChcInVpZFwiKSwgcmVzcG9uc2UuaGVhZGVycy5nZXQoXCJjbGllbnRcIikpO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWxlcnQoYEF1Y3VuIGNvbXB0ZSBuJ2VzdCByYXR0YWNow6kgw6AgY2UgY291cGxlIGVtYWlsL21vdCBkZSBwYXNzZS4gTWVyY2kgZGUgdsOpcmlmaWVyIHZvcyBpZGVudGlmaWFudHMuYCk7XG4gICAgICB9XG4gICAgfSlcbiAgICAvLyAudGhlbihyZXN1bHQgPT4ge1xuICAgIC8vICAgY29uc29sZS5sb2coJ1N1Y2Nlc3M6Jyk7XG4gICAgLy8gfSlcbiAgICAvLyAuY2F0Y2goZXJyb3IgPT4ge1xuICAgIC8vICAgYWxlcnQoYFVuZSBlcnJldXIgcydlc3QgcHJvZHVpdGUsIG1lcmNpIGRlIHLDqWVzc2F5ZXIuYCk7XG4gICAgLy8gICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcik7XG4gICAgLy8gfSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxmb3JtXG4gICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxuICAgID5cbiAgICAgIDxsYWJlbCBodG1sRm9yPVwiYWdlbnRfZW1haWxcIj5FbWFpbDwvbGFiZWw+XG4gICAgICA8aW5wdXRcbiAgICAgICAgaWQ9XCJhZ2VudF9lbWFpbFwiXG4gICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgIHZhbHVlPXtsb2dpbn1cbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRMb2dpbihlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIHJlcXVpcmVkXG4gICAgICAvPlxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJhZ2VudF9wYXNzd29yZFwiPk1vdCBkZSBwYXNzZTwvbGFiZWw+XG4gICAgICA8aW5wdXRcbiAgICAgICAgaWQ9XCJhZ2VudF9wYXNzd29yZFwiXG4gICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIHJlcXVpcmVkXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm1hcmdpbl9ib3R0b219XG4gICAgICAvPlxuICAgICAgeyFpc1BlbmRpbmcgJiYgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259PlNlIGNvbm5lY3RlcjwvYnV0dG9uPn1cbiAgICAgIHtpc1BlbmRpbmcgJiYgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259PkNvbm5leGlvbiBlbiBjb3VyczwvYnV0dG9uPn1cbiAgICA8L2Zvcm0+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=