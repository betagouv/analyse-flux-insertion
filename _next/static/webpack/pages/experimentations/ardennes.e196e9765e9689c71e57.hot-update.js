webpackHotUpdate_N_E("pages/experimentations/ardennes",{

/***/ "./lib/checkUserInvitationStatus.js":
/*!******************************************!*\
  !*** ./lib/checkUserInvitationStatus.js ***!
  \******************************************/
/*! exports provided: checkUserInvitationStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkUserInvitationStatus", function() { return checkUserInvitationStatus; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _dates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dates */ "./lib/dates.js");
/* harmony import */ var _lib_fetchUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/fetchUrl */ "./lib/fetchUrl.js");





var RDV_SOLIDARITES_URL = "http://localhost:5000";
var userUrl = RDV_SOLIDARITES_URL + "/api/v1/users";
function checkUserInvitationStatus(_x, _x2, _x3, _x4, _x5) {
  return _checkUserInvitationStatus.apply(this, arguments);
}

function _checkUserInvitationStatus() {
  _checkUserInvitationStatus = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(user, userIndex, token, usersData, updateUsersData) {
    var getUserUrl, result, newUsersData, invitation_date, inscription_date;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            getUserUrl = userUrl + "/".concat(user["ID RDV"]);
            _context.next = 3;
            return Object(_lib_fetchUrl__WEBPACK_IMPORTED_MODULE_4__["fetchUrl"])(getUserUrl, token);

          case 3:
            result = _context.sent;
            newUsersData = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(usersData);

            if (result.user.invitation_created_at) {
              invitation_date = result.user.invitation_created_at // Date au format : 2021-04-15 14:53:56 +0200
              .substring(0, 10); // Récupérer les 10 premiers chiffres (la date)

              invitation_date = new Date(invitation_date); // Créer une date JS

              newUsersData[userIndex]["Date d'invitation"] = Object(_dates__WEBPACK_IMPORTED_MODULE_3__["getFrenchFromatDateString"])(invitation_date);
            }

            if (result.user.invitation_accepted_at) {
              inscription_date = result.user.invitation_accepted_at // Date au format : 2021-04-15 14:53:56 +0200
              .substring(0, 10); // Récupérer les 10 premiers chiffres (la date)

              inscription_date = new Date(inscription_date); // Créer une date JS

              newUsersData[userIndex]["Date d'inscription"] = Object(_dates__WEBPACK_IMPORTED_MODULE_3__["getFrenchFromatDateString"])(inscription_date);
            }

            updateUsersData(newUsersData);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _checkUserInvitationStatus.apply(this, arguments);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2NoZWNrVXNlckludml0YXRpb25TdGF0dXMuanMiXSwibmFtZXMiOlsiUkRWX1NPTElEQVJJVEVTX1VSTCIsInByb2Nlc3MiLCJ1c2VyVXJsIiwiY2hlY2tVc2VySW52aXRhdGlvblN0YXR1cyIsInVzZXIiLCJ1c2VySW5kZXgiLCJ0b2tlbiIsInVzZXJzRGF0YSIsInVwZGF0ZVVzZXJzRGF0YSIsImdldFVzZXJVcmwiLCJmZXRjaFVybCIsInJlc3VsdCIsIm5ld1VzZXJzRGF0YSIsImludml0YXRpb25fY3JlYXRlZF9hdCIsImludml0YXRpb25fZGF0ZSIsInN1YnN0cmluZyIsIkRhdGUiLCJnZXRGcmVuY2hGcm9tYXREYXRlU3RyaW5nIiwiaW52aXRhdGlvbl9hY2NlcHRlZF9hdCIsImluc2NyaXB0aW9uX2RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxtQkFBbUIsR0FBR0MsdUJBQTVCO0FBQ0EsSUFBTUMsT0FBTyxHQUFHRixtQkFBbUIsR0FBR0MsZUFBdEM7QUFFTyxTQUFlRSx5QkFBdEI7QUFBQTtBQUFBOzs7Z05BQU8saUJBQXlDQyxJQUF6QyxFQUErQ0MsU0FBL0MsRUFBMERDLEtBQTFELEVBQWlFQyxTQUFqRSxFQUE0RUMsZUFBNUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUNDLHNCQUZELEdBRWNQLE9BQU8sY0FBT0UsSUFBSSxDQUFDLFFBQUQsQ0FBWCxDQUZyQjtBQUFBO0FBQUEsbUJBR2dCTSw4REFBUSxDQUFDRCxVQUFELEVBQWFILEtBQWIsQ0FIeEI7O0FBQUE7QUFHQ0ssa0JBSEQ7QUFLREMsd0JBTEMsZ0dBS2tCTCxTQUxsQjs7QUFPTCxnQkFBSUksTUFBTSxDQUFDUCxJQUFQLENBQVlTLHFCQUFoQixFQUF1QztBQUNqQ0MsNkJBRGlDLEdBQ2ZILE1BQU0sQ0FBQ1AsSUFBUCxDQUFZUyxxQkFBWixDQUFrQztBQUFsQyxlQUNuQkUsU0FEbUIsQ0FDVCxDQURTLEVBQ04sRUFETSxDQURlLEVBRWhCOztBQUNyQkQsNkJBQWUsR0FBRyxJQUFJRSxJQUFKLENBQVNGLGVBQVQsQ0FBbEIsQ0FIcUMsQ0FHTzs7QUFDNUNGLDBCQUFZLENBQUNQLFNBQUQsQ0FBWixDQUF3QixtQkFBeEIsSUFBK0NZLHdFQUF5QixDQUFDSCxlQUFELENBQXhFO0FBQ0Q7O0FBQ0QsZ0JBQUlILE1BQU0sQ0FBQ1AsSUFBUCxDQUFZYyxzQkFBaEIsRUFBd0M7QUFDbENDLDhCQURrQyxHQUNmUixNQUFNLENBQUNQLElBQVAsQ0FBWWMsc0JBQVosQ0FBbUM7QUFBbkMsZUFDcEJILFNBRG9CLENBQ1YsQ0FEVSxFQUNQLEVBRE8sQ0FEZSxFQUVqQjs7QUFDckJJLDhCQUFnQixHQUFHLElBQUlILElBQUosQ0FBU0csZ0JBQVQsQ0FBbkIsQ0FIc0MsQ0FHUTs7QUFDOUNQLDBCQUFZLENBQUNQLFNBQUQsQ0FBWixDQUF3QixvQkFBeEIsSUFBZ0RZLHdFQUF5QixDQUFDRSxnQkFBRCxDQUF6RTtBQUNEOztBQUVEWCwyQkFBZSxDQUFDSSxZQUFELENBQWY7O0FBcEJLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZXhwZXJpbWVudGF0aW9ucy9hcmRlbm5lcy5lMTk2ZTk3NjVlOTY4OWM3MWU1Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0RnJlbmNoRnJvbWF0RGF0ZVN0cmluZyB9IGZyb20gXCIuL2RhdGVzXCJcbmltcG9ydCB7IGZldGNoVXJsIH0gZnJvbSBcIi4uL2xpYi9mZXRjaFVybFwiXG5cbmNvbnN0IFJEVl9TT0xJREFSSVRFU19VUkwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19SRFZfU09MSURBUklURVNfREVNT19VUkw7XG5jb25zdCB1c2VyVXJsID0gUkRWX1NPTElEQVJJVEVTX1VSTCArIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1JEVl9TT0xJREFSSVRFU19VU0VSX1BBVEg7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjaGVja1VzZXJJbnZpdGF0aW9uU3RhdHVzKHVzZXIsIHVzZXJJbmRleCwgdG9rZW4sIHVzZXJzRGF0YSwgdXBkYXRlVXNlcnNEYXRhKSB7XG5cbiAgY29uc3QgZ2V0VXNlclVybCA9IHVzZXJVcmwgKyBgLyR7dXNlcltcIklEIFJEVlwiXX1gO1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaFVybChnZXRVc2VyVXJsLCB0b2tlbik7XG5cbiAgbGV0IG5ld1VzZXJzRGF0YSA9IFsuLi51c2Vyc0RhdGFdO1xuXG4gIGlmIChyZXN1bHQudXNlci5pbnZpdGF0aW9uX2NyZWF0ZWRfYXQpIHtcbiAgICBsZXQgaW52aXRhdGlvbl9kYXRlID0gcmVzdWx0LnVzZXIuaW52aXRhdGlvbl9jcmVhdGVkX2F0IC8vIERhdGUgYXUgZm9ybWF0IDogMjAyMS0wNC0xNSAxNDo1Mzo1NiArMDIwMFxuICAgICAgLnN1YnN0cmluZygwLCAxMCk7IC8vIFLDqWN1cMOpcmVyIGxlcyAxMCBwcmVtaWVycyBjaGlmZnJlcyAobGEgZGF0ZSlcbiAgICBpbnZpdGF0aW9uX2RhdGUgPSBuZXcgRGF0ZShpbnZpdGF0aW9uX2RhdGUpIC8vIENyw6llciB1bmUgZGF0ZSBKU1xuICAgIG5ld1VzZXJzRGF0YVt1c2VySW5kZXhdW1wiRGF0ZSBkJ2ludml0YXRpb25cIl0gPSBnZXRGcmVuY2hGcm9tYXREYXRlU3RyaW5nKGludml0YXRpb25fZGF0ZSk7XG4gIH1cbiAgaWYgKHJlc3VsdC51c2VyLmludml0YXRpb25fYWNjZXB0ZWRfYXQpIHtcbiAgICBsZXQgaW5zY3JpcHRpb25fZGF0ZSA9IHJlc3VsdC51c2VyLmludml0YXRpb25fYWNjZXB0ZWRfYXQgLy8gRGF0ZSBhdSBmb3JtYXQgOiAyMDIxLTA0LTE1IDE0OjUzOjU2ICswMjAwXG4gICAgICAuc3Vic3RyaW5nKDAsIDEwKTsgLy8gUsOpY3Vww6lyZXIgbGVzIDEwIHByZW1pZXJzIGNoaWZmcmVzIChsYSBkYXRlKVxuICAgIGluc2NyaXB0aW9uX2RhdGUgPSBuZXcgRGF0ZShpbnNjcmlwdGlvbl9kYXRlKSAvLyBDcsOpZXIgdW5lIGRhdGUgSlNcbiAgICBuZXdVc2Vyc0RhdGFbdXNlckluZGV4XVtcIkRhdGUgZCdpbnNjcmlwdGlvblwiXSA9IGdldEZyZW5jaEZyb21hdERhdGVTdHJpbmcoaW5zY3JpcHRpb25fZGF0ZSk7XG4gIH1cblxuICB1cGRhdGVVc2Vyc0RhdGEobmV3VXNlcnNEYXRhKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=