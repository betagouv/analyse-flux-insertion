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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sb2dpbi1mb3JtLmpzIl0sIm5hbWVzIjpbIkxvZ2luRm9ybSIsIm9uTG9naW4iLCJ1c2VTdGF0ZSIsImxvZ2luIiwic2V0TG9naW4iLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiaXNQZW5kaW5nIiwic2V0SXNQZW5kaW5nIiwiUkRWX1VSTCIsInByb2Nlc3MiLCJwYXRoIiwidXJsIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwidXNlciIsImVtYWlsIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzcG9uc2UiLCJvayIsImdldCIsImpzb24iLCJhbGVydCIsInRhcmdldCIsInZhbHVlIiwic3R5bGVzIiwibWFyZ2luX2JvdHRvbSIsImJ1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsU0FBVCxPQUVaO0FBQUE7O0FBQUEsTUFEREMsT0FDQyxRQUREQSxPQUNDOztBQUFBLGtCQUN5QkMsc0RBQVEsQ0FBQyxFQUFELENBRGpDO0FBQUEsTUFDTUMsS0FETjtBQUFBLE1BQ2FDLFFBRGI7O0FBQUEsbUJBRStCRixzREFBUSxDQUFDLEVBQUQsQ0FGdkM7QUFBQSxNQUVNRyxRQUZOO0FBQUEsTUFFZ0JDLFdBRmhCOztBQUFBLG1CQUdpQ0osc0RBQVEsQ0FBQyxLQUFELENBSHpDO0FBQUEsTUFHTUssU0FITjtBQUFBLE1BR2lCQyxZQUhqQjs7QUFJRCxNQUFNQyxPQUFPLEdBQUdDLHVCQUFoQjtBQUNBLE1BQU1DLElBQUksR0FBRyxlQUFiO0FBQ0EsTUFBTUMsR0FBRyxhQUFNSCxPQUFOLG9CQUF1QkUsSUFBdkIsQ0FBVDs7QUFHQSxNQUFNRSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxDQUFELEVBQU87QUFDMUJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUVBLFFBQU1DLElBQUksR0FBRztBQUFFQyxXQUFLLEVBQUVkLEtBQVQ7QUFBZ0JFLGNBQVEsRUFBRUE7QUFBMUIsS0FBYjtBQUNBRyxnQkFBWSxDQUFDLElBQUQsQ0FBWjtBQUVBVSxTQUFLLENBQUNOLEdBQUQsRUFBTTtBQUNUTyxZQUFNLEVBQUUsTUFEQztBQUVUQyxhQUFPLEVBQUU7QUFBRSx3QkFBZ0I7QUFBbEIsT0FGQTtBQUdUQyxVQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlUCxJQUFmO0FBSEcsS0FBTixDQUFMLENBTUNRLElBTkQsQ0FNTSxVQUFDQyxRQUFELEVBQWM7QUFDbEJqQixrQkFBWSxDQUFDLEtBQUQsQ0FBWjs7QUFDQSxVQUFJaUIsUUFBUSxDQUFDQyxFQUFiLEVBQWlCO0FBQ2Z6QixlQUFPLENBQUN3QixRQUFRLENBQUNMLE9BQVQsQ0FBaUJPLEdBQWpCLENBQXFCLGNBQXJCLENBQUQsRUFBdUNGLFFBQVEsQ0FBQ0wsT0FBVCxDQUFpQk8sR0FBakIsQ0FBcUIsS0FBckIsQ0FBdkMsRUFBb0VGLFFBQVEsQ0FBQ0wsT0FBVCxDQUFpQk8sR0FBakIsQ0FBcUIsUUFBckIsQ0FBcEUsQ0FBUDtBQUNBLGVBQU9GLFFBQVEsQ0FBQ0csSUFBVCxFQUFQO0FBQ0QsT0FIRCxNQUdPO0FBQ0xDLGFBQUssNEdBQUw7QUFDRDtBQUNGLEtBZEQsRUFOMEIsQ0FxQjFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0QsR0E1QkQ7O0FBOEJBLHNCQUNFO0FBQ0UsWUFBUSxFQUFFaEIsWUFEWjtBQUFBLDRCQUdFO0FBQU8sYUFBTyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRixlQUlFO0FBQ0UsUUFBRSxFQUFDLGFBREw7QUFFRSxVQUFJLEVBQUMsT0FGUDtBQUdFLFdBQUssRUFBRVYsS0FIVDtBQUlFLGNBQVEsRUFBRSxrQkFBQ1csQ0FBRDtBQUFBLGVBQU9WLFFBQVEsQ0FBQ1UsQ0FBQyxDQUFDZ0IsTUFBRixDQUFTQyxLQUFWLENBQWY7QUFBQSxPQUpaO0FBS0UsY0FBUTtBQUxWO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRixlQVdFO0FBQU8sYUFBTyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEYsZUFZRTtBQUNFLFFBQUUsRUFBQyxnQkFETDtBQUVFLFVBQUksRUFBQyxVQUZQO0FBR0UsV0FBSyxFQUFFMUIsUUFIVDtBQUlFLGNBQVEsRUFBRSxrQkFBQ1MsQ0FBRDtBQUFBLGVBQU9SLFdBQVcsQ0FBQ1EsQ0FBQyxDQUFDZ0IsTUFBRixDQUFTQyxLQUFWLENBQWxCO0FBQUEsT0FKWjtBQUtFLGNBQVEsTUFMVjtBQU1FLGVBQVMsRUFBRUMsOERBQU0sQ0FBQ0M7QUFOcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVpGLEVBb0JHLENBQUMxQixTQUFELGlCQUFjO0FBQVEsZUFBUyxFQUFFeUIsOERBQU0sQ0FBQ0UsTUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFwQmpCLEVBcUJHM0IsU0FBUyxpQkFBSTtBQUFRLGVBQVMsRUFBRXlCLDhEQUFNLENBQUNFLE1BQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBckJoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXlCRDs7R0FsRXVCbEMsUzs7S0FBQUEsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9leHBlcmltZW50YXRpb25zL2FyZGVubmVzLmViMWJhNWNhOTQ2NDUzYjI4NGJkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbkZvcm0oe1xuICBvbkxvZ2luXG59KSB7XG4gIGNvbnN0IFtsb2dpbiwgc2V0TG9naW5dID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2lzUGVuZGluZywgc2V0SXNQZW5kaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgUkRWX1VSTCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1JEVl9ERU1PX1VSTDtcbiAgY29uc3QgcGF0aCA9ICcvYXV0aC9zaWduX2luJztcbiAgY29uc3QgdXJsID0gYCR7UkRWX1VSTH0vYXBpL3YxJHtwYXRofWA7XG5cblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IHVzZXIgPSB7IGVtYWlsOiBsb2dpbiwgcGFzc3dvcmQ6IHBhc3N3b3JkIH07XG4gICAgc2V0SXNQZW5kaW5nKHRydWUpO1xuXG4gICAgZmV0Y2godXJsLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodXNlcilcbiAgICB9KVxuXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBzZXRJc1BlbmRpbmcoZmFsc2UpO1xuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgIG9uTG9naW4ocmVzcG9uc2UuaGVhZGVycy5nZXQoXCJhY2Nlc3MtdG9rZW5cIiksIHJlc3BvbnNlLmhlYWRlcnMuZ2V0KFwidWlkXCIpLCByZXNwb25zZS5oZWFkZXJzLmdldChcImNsaWVudFwiKSk7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbGVydChgQXVjdW4gY29tcHRlIG4nZXN0IHJhdHRhY2jDqSDDoCBjZSBjb3VwbGUgZW1haWwvbW90IGRlIHBhc3NlLiBNZXJjaSBkZSB2w6lyaWZpZXIgdm9zIGlkZW50aWZpYW50cy5gKTtcbiAgICAgIH1cbiAgICB9KVxuICAgIC8vIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgLy8gICBjb25zb2xlLmxvZygnU3VjY2VzczonKTtcbiAgICAvLyB9KVxuICAgIC8vIC5jYXRjaChlcnJvciA9PiB7XG4gICAgLy8gICBhbGVydChgVW5lIGVycmV1ciBzJ2VzdCBwcm9kdWl0ZSwgbWVyY2kgZGUgcsOpZXNzYXllci5gKTtcbiAgICAvLyAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKTtcbiAgICAvLyB9KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGZvcm1cbiAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XG4gICAgPlxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJhZ2VudF9lbWFpbFwiPkVtYWlsPC9sYWJlbD5cbiAgICAgIDxpbnB1dFxuICAgICAgICBpZD1cImFnZW50X2VtYWlsXCJcbiAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgdmFsdWU9e2xvZ2lufVxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldExvZ2luKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgcmVxdWlyZWRcbiAgICAgIC8+XG4gICAgICA8bGFiZWwgaHRtbEZvcj1cImFnZW50X3Bhc3N3b3JkXCI+TW90IGRlIHBhc3NlPC9sYWJlbD5cbiAgICAgIDxpbnB1dFxuICAgICAgICBpZD1cImFnZW50X3Bhc3N3b3JkXCJcbiAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubWFyZ2luX2JvdHRvbX1cbiAgICAgIC8+XG4gICAgICB7IWlzUGVuZGluZyAmJiA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0+U2UgY29ubmVjdGVyPC9idXR0b24+fVxuICAgICAge2lzUGVuZGluZyAmJiA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0+Q29ubmV4aW9uIGVuIGNvdXJzPC9idXR0b24+fVxuICAgIDwvZm9ybT5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==