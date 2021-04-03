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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sb2dpbi1mb3JtLmpzIl0sIm5hbWVzIjpbIkxvZ2luRm9ybSIsIm9uTG9naW4iLCJ1c2VTdGF0ZSIsImxvZ2luIiwic2V0TG9naW4iLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiaXNQZW5kaW5nIiwic2V0SXNQZW5kaW5nIiwiUkRWX1VSTCIsInByb2Nlc3MiLCJwYXRoIiwidXJsIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwidXNlciIsImVtYWlsIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzcG9uc2UiLCJvayIsImdldCIsImpzb24iLCJhbGVydCIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLFNBQVQsT0FFWjtBQUFBOztBQUFBLE1BRERDLE9BQ0MsUUFEREEsT0FDQzs7QUFBQSxrQkFDeUJDLHNEQUFRLENBQUMsRUFBRCxDQURqQztBQUFBLE1BQ01DLEtBRE47QUFBQSxNQUNhQyxRQURiOztBQUFBLG1CQUUrQkYsc0RBQVEsQ0FBQyxFQUFELENBRnZDO0FBQUEsTUFFTUcsUUFGTjtBQUFBLE1BRWdCQyxXQUZoQjs7QUFBQSxtQkFHaUNKLHNEQUFRLENBQUMsS0FBRCxDQUh6QztBQUFBLE1BR01LLFNBSE47QUFBQSxNQUdpQkMsWUFIakI7O0FBSUQsTUFBTUMsT0FBTyxHQUFHQyx1QkFBaEI7QUFDQSxNQUFNQyxJQUFJLEdBQUcsZUFBYjtBQUNBLE1BQU1DLEdBQUcsYUFBTUgsT0FBTixvQkFBdUJFLElBQXZCLENBQVQ7O0FBR0EsTUFBTUUsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsQ0FBRCxFQUFPO0FBQzFCQSxLQUFDLENBQUNDLGNBQUY7QUFFQSxRQUFNQyxJQUFJLEdBQUc7QUFBRUMsV0FBSyxFQUFFZCxLQUFUO0FBQWdCRSxjQUFRLEVBQUVBO0FBQTFCLEtBQWI7QUFDQUcsZ0JBQVksQ0FBQyxJQUFELENBQVo7QUFFQVUsU0FBSyxDQUFDTixHQUFELEVBQU07QUFDVE8sWUFBTSxFQUFFLE1BREM7QUFFVEMsYUFBTyxFQUFFO0FBQUUsd0JBQWdCO0FBQWxCLE9BRkE7QUFHVEMsVUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZVAsSUFBZjtBQUhHLEtBQU4sQ0FBTCxDQU1DUSxJQU5ELENBTU0sVUFBQ0MsUUFBRCxFQUFjO0FBQ2xCakIsa0JBQVksQ0FBQyxLQUFELENBQVo7O0FBQ0EsVUFBSWlCLFFBQVEsQ0FBQ0MsRUFBYixFQUFpQjtBQUNmekIsZUFBTyxDQUFDd0IsUUFBUSxDQUFDTCxPQUFULENBQWlCTyxHQUFqQixDQUFxQixjQUFyQixDQUFELEVBQXVDRixRQUFRLENBQUNMLE9BQVQsQ0FBaUJPLEdBQWpCLENBQXFCLEtBQXJCLENBQXZDLEVBQW9FRixRQUFRLENBQUNMLE9BQVQsQ0FBaUJPLEdBQWpCLENBQXFCLFFBQXJCLENBQXBFLENBQVA7QUFDQSxlQUFPRixRQUFRLENBQUNHLElBQVQsRUFBUDtBQUNELE9BSEQsTUFHTztBQUNMQyxhQUFLLDRHQUFMO0FBQ0Q7QUFDRixLQWRELEVBTjBCLENBcUIxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNELEdBNUJEOztBQThCQSxzQkFDRTtBQUNFLFlBQVEsRUFBRWhCLFlBRFo7QUFBQSw0QkFHRTtBQUFPLGFBQU8sRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEYsZUFJRTtBQUNFLFFBQUUsRUFBQyxhQURMO0FBRUUsVUFBSSxFQUFDLE9BRlA7QUFHRSxXQUFLLEVBQUVWLEtBSFQ7QUFJRSxjQUFRLEVBQUUsa0JBQUNXLENBQUQ7QUFBQSxlQUFPVixRQUFRLENBQUNVLENBQUMsQ0FBQ2dCLE1BQUYsQ0FBU0MsS0FBVixDQUFmO0FBQUEsT0FKWjtBQUtFLGNBQVE7QUFMVjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkYsZUFXRTtBQUFPLGFBQU8sRUFBQyxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhGLGVBWUU7QUFDRSxRQUFFLEVBQUMsZ0JBREw7QUFFRSxVQUFJLEVBQUMsVUFGUDtBQUdFLFdBQUssRUFBRTFCLFFBSFQ7QUFJRSxjQUFRLEVBQUUsa0JBQUNTLENBQUQ7QUFBQSxlQUFPUixXQUFXLENBQUNRLENBQUMsQ0FBQ2dCLE1BQUYsQ0FBU0MsS0FBVixDQUFsQjtBQUFBLE9BSlo7QUFLRSxjQUFRO0FBTFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVpGLEVBbUJHLENBQUN4QixTQUFELGlCQUFjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbkJqQixFQW9CR0EsU0FBUyxpQkFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXBCaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF3QkQ7O0dBakV1QlAsUzs7S0FBQUEsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9leHBlcmltZW50YXRpb25zL2FyZGVubmVzLmQyMDZhYzEwNWVlMDE3MWRiMDE2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbkZvcm0oe1xuICBvbkxvZ2luXG59KSB7XG4gIGNvbnN0IFtsb2dpbiwgc2V0TG9naW5dID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2lzUGVuZGluZywgc2V0SXNQZW5kaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgUkRWX1VSTCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1JEVl9ERU1PX1VSTDtcbiAgY29uc3QgcGF0aCA9ICcvYXV0aC9zaWduX2luJztcbiAgY29uc3QgdXJsID0gYCR7UkRWX1VSTH0vYXBpL3YxJHtwYXRofWA7XG5cblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IHVzZXIgPSB7IGVtYWlsOiBsb2dpbiwgcGFzc3dvcmQ6IHBhc3N3b3JkIH07XG4gICAgc2V0SXNQZW5kaW5nKHRydWUpO1xuXG4gICAgZmV0Y2godXJsLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodXNlcilcbiAgICB9KVxuXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBzZXRJc1BlbmRpbmcoZmFsc2UpO1xuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgIG9uTG9naW4ocmVzcG9uc2UuaGVhZGVycy5nZXQoXCJhY2Nlc3MtdG9rZW5cIiksIHJlc3BvbnNlLmhlYWRlcnMuZ2V0KFwidWlkXCIpLCByZXNwb25zZS5oZWFkZXJzLmdldChcImNsaWVudFwiKSk7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbGVydChgQXVjdW4gY29tcHRlIG4nZXN0IHJhdHRhY2jDqSDDoCBjZSBjb3VwbGUgZW1haWwvbW90IGRlIHBhc3NlLiBNZXJjaSBkZSB2w6lyaWZpZXIgdm9zIGlkZW50aWZpYW50cy5gKTtcbiAgICAgIH1cbiAgICB9KVxuICAgIC8vIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgLy8gICBjb25zb2xlLmxvZygnU3VjY2VzczonKTtcbiAgICAvLyB9KVxuICAgIC8vIC5jYXRjaChlcnJvciA9PiB7XG4gICAgLy8gICBhbGVydChgVW5lIGVycmV1ciBzJ2VzdCBwcm9kdWl0ZSwgbWVyY2kgZGUgcsOpZXNzYXllci5gKTtcbiAgICAvLyAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKTtcbiAgICAvLyB9KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGZvcm1cbiAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XG4gICAgPlxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJhZ2VudF9lbWFpbFwiPkVtYWlsPC9sYWJlbD5cbiAgICAgIDxpbnB1dFxuICAgICAgICBpZD1cImFnZW50X2VtYWlsXCJcbiAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgdmFsdWU9e2xvZ2lufVxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldExvZ2luKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgcmVxdWlyZWRcbiAgICAgIC8+XG4gICAgICA8bGFiZWwgaHRtbEZvcj1cImFnZW50X3Bhc3N3b3JkXCI+TW90IGRlIHBhc3NlPC9sYWJlbD5cbiAgICAgIDxpbnB1dFxuICAgICAgICBpZD1cImFnZW50X3Bhc3N3b3JkXCJcbiAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgcmVxdWlyZWRcbiAgICAgIC8+XG4gICAgICB7IWlzUGVuZGluZyAmJiA8YnV0dG9uPlNlIGNvbm5lY3RlcjwvYnV0dG9uPn1cbiAgICAgIHtpc1BlbmRpbmcgJiYgPGJ1dHRvbj5Db25uZXhpb24gZW4gY291cnM8L2J1dHRvbj59XG4gICAgPC9mb3JtPlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9