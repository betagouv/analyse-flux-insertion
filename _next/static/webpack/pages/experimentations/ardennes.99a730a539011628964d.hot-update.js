webpackHotUpdate_N_E("pages/experimentations/ardennes",{

/***/ "./lib/generateInvitation.js":
/*!***********************************!*\
  !*** ./lib/generateInvitation.js ***!
  \***********************************/
/*! exports provided: generateInvitation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateInvitation", function() { return generateInvitation; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _dates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dates */ "./lib/dates.js");
/* harmony import */ var _lib_fetchUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/fetchUrl */ "./lib/fetchUrl.js");





function generateInvitation(_x, _x2, _x3, _x4, _x5) {
  return _generateInvitation.apply(this, arguments);
}

function _generateInvitation() {
  _generateInvitation = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(userId, userIndex, token, usersData, updateUsersData) {
    var RDV_SOLIDARITES_URL, userUrl, invitationUrl, result, newUsersData;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            RDV_SOLIDARITES_URL = "http://localhost:5000";
            userUrl = RDV_SOLIDARITES_URL + "/api/v1/users";
            invitationUrl = userUrl + "/".concat(userId, "/invite");
            _context.next = 5;
            return Object(_lib_fetchUrl__WEBPACK_IMPORTED_MODULE_4__["fetchUrl"])(invitationUrl, token);

          case 5:
            result = _context.sent;

            if (result.invitation_url) {
              newUsersData = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(usersData);
              newUsersData[userIndex]["Invitation"] = result.invitation_url;
              newUsersData[userIndex]["Date d'invitation"] = Object(_dates__WEBPACK_IMPORTED_MODULE_3__["getFrenchFromatDateString"])(new Date());
              updateUsersData(newUsersData);
            }

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _generateInvitation.apply(this, arguments);
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2dlbmVyYXRlSW52aXRhdGlvbi5qcyJdLCJuYW1lcyI6WyJnZW5lcmF0ZUludml0YXRpb24iLCJ1c2VySWQiLCJ1c2VySW5kZXgiLCJ0b2tlbiIsInVzZXJzRGF0YSIsInVwZGF0ZVVzZXJzRGF0YSIsIlJEVl9TT0xJREFSSVRFU19VUkwiLCJwcm9jZXNzIiwidXNlclVybCIsImludml0YXRpb25VcmwiLCJmZXRjaFVybCIsInJlc3VsdCIsImludml0YXRpb25fdXJsIiwibmV3VXNlcnNEYXRhIiwiZ2V0RnJlbmNoRnJvbWF0RGF0ZVN0cmluZyIsIkRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHTyxTQUFlQSxrQkFBdEI7QUFBQTtBQUFBOzs7eU1BQU8saUJBQWtDQyxNQUFsQyxFQUEwQ0MsU0FBMUMsRUFBcURDLEtBQXJELEVBQTREQyxTQUE1RCxFQUF1RUMsZUFBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0RDLCtCQURDLEdBQ3FCQyx1QkFEckI7QUFFREMsbUJBRkMsR0FFU0YsbUJBQW1CLEdBQUdDLGVBRi9CO0FBR0NFLHlCQUhELEdBR2lCRCxPQUFPLGNBQU9QLE1BQVAsWUFIeEI7QUFBQTtBQUFBLG1CQUtnQlMsOERBQVEsQ0FBQ0QsYUFBRCxFQUFnQk4sS0FBaEIsQ0FMeEI7O0FBQUE7QUFLQ1Esa0JBTEQ7O0FBT0wsZ0JBQUlBLE1BQU0sQ0FBQ0MsY0FBWCxFQUEyQjtBQUNyQkMsMEJBRHFCLGdHQUNGVCxTQURFO0FBRXpCUywwQkFBWSxDQUFDWCxTQUFELENBQVosQ0FBd0IsWUFBeEIsSUFBd0NTLE1BQU0sQ0FBQ0MsY0FBL0M7QUFDQUMsMEJBQVksQ0FBQ1gsU0FBRCxDQUFaLENBQXdCLG1CQUF4QixJQUErQ1ksd0VBQXlCLENBQUMsSUFBSUMsSUFBSixFQUFELENBQXhFO0FBQ0FWLDZCQUFlLENBQUNRLFlBQUQsQ0FBZjtBQUNEOztBQVpJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZXhwZXJpbWVudGF0aW9ucy9hcmRlbm5lcy45OWE3MzBhNTM5MDExNjI4OTY0ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0RnJlbmNoRnJvbWF0RGF0ZVN0cmluZyB9IGZyb20gXCIuL2RhdGVzXCJcbmltcG9ydCB7IGZldGNoVXJsIH0gZnJvbSBcIi4uL2xpYi9mZXRjaFVybFwiXG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlSW52aXRhdGlvbih1c2VySWQsIHVzZXJJbmRleCwgdG9rZW4sIHVzZXJzRGF0YSwgdXBkYXRlVXNlcnNEYXRhKSB7XG5jb25zdCBSRFZfU09MSURBUklURVNfVVJMID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUkRWX1NPTElEQVJJVEVTX0RFTU9fVVJMO1xuY29uc3QgdXNlclVybCA9IFJEVl9TT0xJREFSSVRFU19VUkwgKyBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19SRFZfU09MSURBUklURVNfVVNFUl9QQVRIO1xuICBjb25zdCBpbnZpdGF0aW9uVXJsID0gdXNlclVybCArIGAvJHt1c2VySWR9L2ludml0ZWA7XG5cbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2hVcmwoaW52aXRhdGlvblVybCwgdG9rZW4pO1xuXG4gIGlmIChyZXN1bHQuaW52aXRhdGlvbl91cmwpIHtcbiAgICBsZXQgbmV3VXNlcnNEYXRhID0gWy4uLnVzZXJzRGF0YV07XG4gICAgbmV3VXNlcnNEYXRhW3VzZXJJbmRleF1bXCJJbnZpdGF0aW9uXCJdID0gcmVzdWx0Lmludml0YXRpb25fdXJsO1xuICAgIG5ld1VzZXJzRGF0YVt1c2VySW5kZXhdW1wiRGF0ZSBkJ2ludml0YXRpb25cIl0gPSBnZXRGcmVuY2hGcm9tYXREYXRlU3RyaW5nKG5ldyBEYXRlKCkpO1xuICAgIHVwZGF0ZVVzZXJzRGF0YShuZXdVc2Vyc0RhdGEpO1xuICB9XG59XG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==