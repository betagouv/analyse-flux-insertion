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
            userUrl = RDV_SOLIDARITES_URL + "api/v1/users";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2dlbmVyYXRlSW52aXRhdGlvbi5qcyJdLCJuYW1lcyI6WyJnZW5lcmF0ZUludml0YXRpb24iLCJ1c2VySWQiLCJ1c2VySW5kZXgiLCJ0b2tlbiIsInVzZXJzRGF0YSIsInVwZGF0ZVVzZXJzRGF0YSIsIlJEVl9TT0xJREFSSVRFU19VUkwiLCJwcm9jZXNzIiwidXNlclVybCIsImludml0YXRpb25VcmwiLCJmZXRjaFVybCIsInJlc3VsdCIsImludml0YXRpb25fdXJsIiwibmV3VXNlcnNEYXRhIiwiZ2V0RnJlbmNoRnJvbWF0RGF0ZVN0cmluZyIsIkRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHTyxTQUFlQSxrQkFBdEI7QUFBQTtBQUFBOzs7eU1BQU8saUJBQWtDQyxNQUFsQyxFQUEwQ0MsU0FBMUMsRUFBcURDLEtBQXJELEVBQTREQyxTQUE1RCxFQUF1RUMsZUFBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0RDLCtCQURDLEdBQ3FCQyx1QkFEckI7QUFFREMsbUJBRkMsR0FFU0YsbUJBQW1CLEdBQUcsY0FGL0I7QUFHQ0cseUJBSEQsR0FHaUJELE9BQU8sY0FBT1AsTUFBUCxZQUh4QjtBQUFBO0FBQUEsbUJBS2dCUyw4REFBUSxDQUFDRCxhQUFELEVBQWdCTixLQUFoQixDQUx4Qjs7QUFBQTtBQUtDUSxrQkFMRDs7QUFPTCxnQkFBSUEsTUFBTSxDQUFDQyxjQUFYLEVBQTJCO0FBQ3JCQywwQkFEcUIsZ0dBQ0ZULFNBREU7QUFFekJTLDBCQUFZLENBQUNYLFNBQUQsQ0FBWixDQUF3QixZQUF4QixJQUF3Q1MsTUFBTSxDQUFDQyxjQUEvQztBQUNBQywwQkFBWSxDQUFDWCxTQUFELENBQVosQ0FBd0IsbUJBQXhCLElBQStDWSx3RUFBeUIsQ0FBQyxJQUFJQyxJQUFKLEVBQUQsQ0FBeEU7QUFDQVYsNkJBQWUsQ0FBQ1EsWUFBRCxDQUFmO0FBQ0Q7O0FBWkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9leHBlcmltZW50YXRpb25zL2FyZGVubmVzLjRjM2Y4MDc1MjZiY2RiODdiZGZkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRGcmVuY2hGcm9tYXREYXRlU3RyaW5nIH0gZnJvbSBcIi4vZGF0ZXNcIlxuaW1wb3J0IHsgZmV0Y2hVcmwgfSBmcm9tIFwiLi4vbGliL2ZldGNoVXJsXCJcblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2VuZXJhdGVJbnZpdGF0aW9uKHVzZXJJZCwgdXNlckluZGV4LCB0b2tlbiwgdXNlcnNEYXRhLCB1cGRhdGVVc2Vyc0RhdGEpIHtcbmNvbnN0IFJEVl9TT0xJREFSSVRFU19VUkwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19SRFZfU09MSURBUklURVNfREVNT19VUkw7XG5jb25zdCB1c2VyVXJsID0gUkRWX1NPTElEQVJJVEVTX1VSTCArIFwiYXBpL3YxL3VzZXJzXCI7XG4gIGNvbnN0IGludml0YXRpb25VcmwgPSB1c2VyVXJsICsgYC8ke3VzZXJJZH0vaW52aXRlYDtcblxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaFVybChpbnZpdGF0aW9uVXJsLCB0b2tlbik7XG5cbiAgaWYgKHJlc3VsdC5pbnZpdGF0aW9uX3VybCkge1xuICAgIGxldCBuZXdVc2Vyc0RhdGEgPSBbLi4udXNlcnNEYXRhXTtcbiAgICBuZXdVc2Vyc0RhdGFbdXNlckluZGV4XVtcIkludml0YXRpb25cIl0gPSByZXN1bHQuaW52aXRhdGlvbl91cmw7XG4gICAgbmV3VXNlcnNEYXRhW3VzZXJJbmRleF1bXCJEYXRlIGQnaW52aXRhdGlvblwiXSA9IGdldEZyZW5jaEZyb21hdERhdGVTdHJpbmcobmV3IERhdGUoKSk7XG4gICAgdXBkYXRlVXNlcnNEYXRhKG5ld1VzZXJzRGF0YSk7XG4gIH1cbn1cblxuXG4iXSwic291cmNlUm9vdCI6IiJ9