webpackHotUpdate_N_E("pages/experimentations/ardennes",{

/***/ "./lib/fetchUrl.js":
/*!*************************!*\
  !*** ./lib/fetchUrl.js ***!
  \*************************/
/*! exports provided: fetchUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUrl", function() { return fetchUrl; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");


function fetchUrl(_x, _x2) {
  return _fetchUrl.apply(this, arguments);
}

function _fetchUrl() {
  _fetchUrl = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(url, token) {
    var method,
        body,
        response,
        result,
        _args = arguments;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            method = _args.length > 2 && _args[2] !== undefined ? _args[2] : "GET";
            body = _args.length > 3 && _args[3] !== undefined ? _args[3] : null;
            _context.next = 4;
            return fetch(url, {
              method: method,
              headers: {
                "Content-Type": "application/json",
                "access-token": token.tokenId,
                uid: token.uid,
                client: token.client
              },
              body: body
            });

          case 4:
            response = _context.sent;
            result = response.json();
            return _context.abrupt("return", result);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _fetchUrl.apply(this, arguments);
}

;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2ZldGNoVXJsLmpzIl0sIm5hbWVzIjpbImZldGNoVXJsIiwidXJsIiwidG9rZW4iLCJtZXRob2QiLCJib2R5IiwiZmV0Y2giLCJoZWFkZXJzIiwidG9rZW5JZCIsInVpZCIsImNsaWVudCIsInJlc3BvbnNlIiwicmVzdWx0IiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxTQUFlQSxRQUF0QjtBQUFBO0FBQUE7OzsrTEFBTyxpQkFBd0JDLEdBQXhCLEVBQTZCQyxLQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFvQ0Msa0JBQXBDLDJEQUE2QyxLQUE3QztBQUFvREMsZ0JBQXBELDJEQUEyRCxJQUEzRDtBQUFBO0FBQUEsbUJBQ2tCQyxLQUFLLENBQUNKLEdBQUQsRUFBTTtBQUNoQ0Usb0JBQU0sRUFBRUEsTUFEd0I7QUFFaENHLHFCQUFPLEVBQUU7QUFDUCxnQ0FBZ0Isa0JBRFQ7QUFFUCxnQ0FBZ0JKLEtBQUssQ0FBQ0ssT0FGZjtBQUdQQyxtQkFBRyxFQUFFTixLQUFLLENBQUNNLEdBSEo7QUFJUEMsc0JBQU0sRUFBRVAsS0FBSyxDQUFDTztBQUpQLGVBRnVCO0FBUWhDTCxrQkFBSSxFQUFFQTtBQVIwQixhQUFOLENBRHZCOztBQUFBO0FBQ0NNLG9CQUREO0FBV0NDLGtCQVhELEdBV1VELFFBQVEsQ0FBQ0UsSUFBVCxFQVhWO0FBQUEsNkNBYUVELE1BYkY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztBQWNOIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2V4cGVyaW1lbnRhdGlvbnMvYXJkZW5uZXMuMDdiZjU0M2EzZGQyZjYxOWQ1NWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaFVybCh1cmwsIHRva2VuLCBtZXRob2QgPSBcIkdFVFwiLCBib2R5ID0gbnVsbCkge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgIG1ldGhvZDogbWV0aG9kLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgXCJhY2Nlc3MtdG9rZW5cIjogdG9rZW4udG9rZW5JZCxcbiAgICAgIHVpZDogdG9rZW4udWlkLFxuICAgICAgY2xpZW50OiB0b2tlbi5jbGllbnQsXG4gICAgfSxcbiAgICBib2R5OiBib2R5LFxuICB9KVxuICBjb25zdCByZXN1bHQgPSByZXNwb25zZS5qc29uKCk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9