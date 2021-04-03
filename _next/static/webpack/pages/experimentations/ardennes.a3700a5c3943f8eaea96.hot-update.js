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
      className: styles.button_login,
      children: "Se connecter"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 22
    }, this), isPending && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: styles.button_login,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sb2dpbi1mb3JtLmpzIl0sIm5hbWVzIjpbIkxvZ2luRm9ybSIsIm9uTG9naW4iLCJ1c2VTdGF0ZSIsImxvZ2luIiwic2V0TG9naW4iLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiaXNQZW5kaW5nIiwic2V0SXNQZW5kaW5nIiwiUkRWX1VSTCIsInByb2Nlc3MiLCJwYXRoIiwidXJsIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwidXNlciIsImVtYWlsIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzcG9uc2UiLCJvayIsImdldCIsImpzb24iLCJhbGVydCIsInRhcmdldCIsInZhbHVlIiwic3R5bGVzIiwiYnV0dG9uX2xvZ2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLFNBQVQsT0FFWjtBQUFBOztBQUFBLE1BRERDLE9BQ0MsUUFEREEsT0FDQzs7QUFBQSxrQkFDeUJDLHNEQUFRLENBQUMsRUFBRCxDQURqQztBQUFBLE1BQ01DLEtBRE47QUFBQSxNQUNhQyxRQURiOztBQUFBLG1CQUUrQkYsc0RBQVEsQ0FBQyxFQUFELENBRnZDO0FBQUEsTUFFTUcsUUFGTjtBQUFBLE1BRWdCQyxXQUZoQjs7QUFBQSxtQkFHaUNKLHNEQUFRLENBQUMsS0FBRCxDQUh6QztBQUFBLE1BR01LLFNBSE47QUFBQSxNQUdpQkMsWUFIakI7O0FBSUQsTUFBTUMsT0FBTyxHQUFHQyx1QkFBaEI7QUFDQSxNQUFNQyxJQUFJLEdBQUcsZUFBYjtBQUNBLE1BQU1DLEdBQUcsYUFBTUgsT0FBTixvQkFBdUJFLElBQXZCLENBQVQ7O0FBR0EsTUFBTUUsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsQ0FBRCxFQUFPO0FBQzFCQSxLQUFDLENBQUNDLGNBQUY7QUFFQSxRQUFNQyxJQUFJLEdBQUc7QUFBRUMsV0FBSyxFQUFFZCxLQUFUO0FBQWdCRSxjQUFRLEVBQUVBO0FBQTFCLEtBQWI7QUFDQUcsZ0JBQVksQ0FBQyxJQUFELENBQVo7QUFFQVUsU0FBSyxDQUFDTixHQUFELEVBQU07QUFDVE8sWUFBTSxFQUFFLE1BREM7QUFFVEMsYUFBTyxFQUFFO0FBQUUsd0JBQWdCO0FBQWxCLE9BRkE7QUFHVEMsVUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZVAsSUFBZjtBQUhHLEtBQU4sQ0FBTCxDQU1DUSxJQU5ELENBTU0sVUFBQ0MsUUFBRCxFQUFjO0FBQ2xCakIsa0JBQVksQ0FBQyxLQUFELENBQVo7O0FBQ0EsVUFBSWlCLFFBQVEsQ0FBQ0MsRUFBYixFQUFpQjtBQUNmekIsZUFBTyxDQUFDd0IsUUFBUSxDQUFDTCxPQUFULENBQWlCTyxHQUFqQixDQUFxQixjQUFyQixDQUFELEVBQXVDRixRQUFRLENBQUNMLE9BQVQsQ0FBaUJPLEdBQWpCLENBQXFCLEtBQXJCLENBQXZDLEVBQW9FRixRQUFRLENBQUNMLE9BQVQsQ0FBaUJPLEdBQWpCLENBQXFCLFFBQXJCLENBQXBFLENBQVA7QUFDQSxlQUFPRixRQUFRLENBQUNHLElBQVQsRUFBUDtBQUNELE9BSEQsTUFHTztBQUNMQyxhQUFLLDRHQUFMO0FBQ0Q7QUFDRixLQWRELEVBTjBCLENBcUIxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNELEdBNUJEOztBQThCQSxzQkFDRTtBQUNFLFlBQVEsRUFBRWhCLFlBRFo7QUFBQSw0QkFHRTtBQUFPLGFBQU8sRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEYsZUFJRTtBQUNFLFFBQUUsRUFBQyxhQURMO0FBRUUsVUFBSSxFQUFDLE9BRlA7QUFHRSxXQUFLLEVBQUVWLEtBSFQ7QUFJRSxjQUFRLEVBQUUsa0JBQUNXLENBQUQ7QUFBQSxlQUFPVixRQUFRLENBQUNVLENBQUMsQ0FBQ2dCLE1BQUYsQ0FBU0MsS0FBVixDQUFmO0FBQUEsT0FKWjtBQUtFLGNBQVE7QUFMVjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkYsZUFXRTtBQUFPLGFBQU8sRUFBQyxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhGLGVBWUU7QUFDRSxRQUFFLEVBQUMsZ0JBREw7QUFFRSxVQUFJLEVBQUMsVUFGUDtBQUdFLFdBQUssRUFBRTFCLFFBSFQ7QUFJRSxjQUFRLEVBQUUsa0JBQUNTLENBQUQ7QUFBQSxlQUFPUixXQUFXLENBQUNRLENBQUMsQ0FBQ2dCLE1BQUYsQ0FBU0MsS0FBVixDQUFsQjtBQUFBLE9BSlo7QUFLRSxjQUFRO0FBTFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVpGLEVBbUJHLENBQUN4QixTQUFELGlCQUFjO0FBQVEsZUFBUyxFQUFFeUIsTUFBTSxDQUFDQyxZQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQW5CakIsRUFvQkcxQixTQUFTLGlCQUFJO0FBQVEsZUFBUyxFQUFFeUIsTUFBTSxDQUFDQyxZQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXBCaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF3QkQ7O0dBakV1QmpDLFM7O0tBQUFBLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZXhwZXJpbWVudGF0aW9ucy9hcmRlbm5lcy5hMzcwMGE1YzM5NDNmOGVhZWE5Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW5Gb3JtKHtcbiAgb25Mb2dpblxufSkge1xuICBjb25zdCBbbG9naW4sIHNldExvZ2luXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtpc1BlbmRpbmcsIHNldElzUGVuZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFJEVl9VUkwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19SRFZfREVNT19VUkw7XG4gIGNvbnN0IHBhdGggPSAnL2F1dGgvc2lnbl9pbic7XG4gIGNvbnN0IHVybCA9IGAke1JEVl9VUkx9L2FwaS92MSR7cGF0aH1gO1xuXG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCB1c2VyID0geyBlbWFpbDogbG9naW4sIHBhc3N3b3JkOiBwYXNzd29yZCB9O1xuICAgIHNldElzUGVuZGluZyh0cnVlKTtcblxuICAgIGZldGNoKHVybCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHVzZXIpXG4gICAgfSlcblxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgc2V0SXNQZW5kaW5nKGZhbHNlKTtcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICBvbkxvZ2luKHJlc3BvbnNlLmhlYWRlcnMuZ2V0KFwiYWNjZXNzLXRva2VuXCIpLCByZXNwb25zZS5oZWFkZXJzLmdldChcInVpZFwiKSwgcmVzcG9uc2UuaGVhZGVycy5nZXQoXCJjbGllbnRcIikpO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWxlcnQoYEF1Y3VuIGNvbXB0ZSBuJ2VzdCByYXR0YWNow6kgw6AgY2UgY291cGxlIGVtYWlsL21vdCBkZSBwYXNzZS4gTWVyY2kgZGUgdsOpcmlmaWVyIHZvcyBpZGVudGlmaWFudHMuYCk7XG4gICAgICB9XG4gICAgfSlcbiAgICAvLyAudGhlbihyZXN1bHQgPT4ge1xuICAgIC8vICAgY29uc29sZS5sb2coJ1N1Y2Nlc3M6Jyk7XG4gICAgLy8gfSlcbiAgICAvLyAuY2F0Y2goZXJyb3IgPT4ge1xuICAgIC8vICAgYWxlcnQoYFVuZSBlcnJldXIgcydlc3QgcHJvZHVpdGUsIG1lcmNpIGRlIHLDqWVzc2F5ZXIuYCk7XG4gICAgLy8gICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcik7XG4gICAgLy8gfSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxmb3JtXG4gICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxuICAgID5cbiAgICAgIDxsYWJlbCBodG1sRm9yPVwiYWdlbnRfZW1haWxcIj5FbWFpbDwvbGFiZWw+XG4gICAgICA8aW5wdXRcbiAgICAgICAgaWQ9XCJhZ2VudF9lbWFpbFwiXG4gICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgIHZhbHVlPXtsb2dpbn1cbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRMb2dpbihlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIHJlcXVpcmVkXG4gICAgICAvPlxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJhZ2VudF9wYXNzd29yZFwiPk1vdCBkZSBwYXNzZTwvbGFiZWw+XG4gICAgICA8aW5wdXRcbiAgICAgICAgaWQ9XCJhZ2VudF9wYXNzd29yZFwiXG4gICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIHJlcXVpcmVkXG4gICAgICAvPlxuICAgICAgeyFpc1BlbmRpbmcgJiYgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25fbG9naW59PlNlIGNvbm5lY3RlcjwvYnV0dG9uPn1cbiAgICAgIHtpc1BlbmRpbmcgJiYgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25fbG9naW59PkNvbm5leGlvbiBlbiBjb3VyczwvYnV0dG9uPn1cbiAgICA8L2Zvcm0+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=