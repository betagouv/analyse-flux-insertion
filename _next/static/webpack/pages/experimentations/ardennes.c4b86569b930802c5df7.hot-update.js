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
var userUrl = RDV_SOLIDARITES_URL + "api/v1/users";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2NoZWNrVXNlckludml0YXRpb25TdGF0dXMuanMiXSwibmFtZXMiOlsiUkRWX1NPTElEQVJJVEVTX1VSTCIsInByb2Nlc3MiLCJ1c2VyVXJsIiwiY2hlY2tVc2VySW52aXRhdGlvblN0YXR1cyIsInVzZXIiLCJ1c2VySW5kZXgiLCJ0b2tlbiIsInVzZXJzRGF0YSIsInVwZGF0ZVVzZXJzRGF0YSIsImdldFVzZXJVcmwiLCJmZXRjaFVybCIsInJlc3VsdCIsIm5ld1VzZXJzRGF0YSIsImludml0YXRpb25fY3JlYXRlZF9hdCIsImludml0YXRpb25fZGF0ZSIsInN1YnN0cmluZyIsIkRhdGUiLCJnZXRGcmVuY2hGcm9tYXREYXRlU3RyaW5nIiwiaW52aXRhdGlvbl9hY2NlcHRlZF9hdCIsImluc2NyaXB0aW9uX2RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxtQkFBbUIsR0FBR0MsdUJBQTVCO0FBQ0EsSUFBTUMsT0FBTyxHQUFHRixtQkFBbUIsR0FBRyxjQUF0QztBQUVPLFNBQWVHLHlCQUF0QjtBQUFBO0FBQUE7OztnTkFBTyxpQkFBeUNDLElBQXpDLEVBQStDQyxTQUEvQyxFQUEwREMsS0FBMUQsRUFBaUVDLFNBQWpFLEVBQTRFQyxlQUE1RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQ0Msc0JBRkQsR0FFY1AsT0FBTyxjQUFPRSxJQUFJLENBQUMsUUFBRCxDQUFYLENBRnJCO0FBQUE7QUFBQSxtQkFHZ0JNLDhEQUFRLENBQUNELFVBQUQsRUFBYUgsS0FBYixDQUh4Qjs7QUFBQTtBQUdDSyxrQkFIRDtBQUtEQyx3QkFMQyxnR0FLa0JMLFNBTGxCOztBQU9MLGdCQUFJSSxNQUFNLENBQUNQLElBQVAsQ0FBWVMscUJBQWhCLEVBQXVDO0FBQ2pDQyw2QkFEaUMsR0FDZkgsTUFBTSxDQUFDUCxJQUFQLENBQVlTLHFCQUFaLENBQWtDO0FBQWxDLGVBQ25CRSxTQURtQixDQUNULENBRFMsRUFDTixFQURNLENBRGUsRUFFaEI7O0FBQ3JCRCw2QkFBZSxHQUFHLElBQUlFLElBQUosQ0FBU0YsZUFBVCxDQUFsQixDQUhxQyxDQUdPOztBQUM1Q0YsMEJBQVksQ0FBQ1AsU0FBRCxDQUFaLENBQXdCLG1CQUF4QixJQUErQ1ksd0VBQXlCLENBQUNILGVBQUQsQ0FBeEU7QUFDRDs7QUFDRCxnQkFBSUgsTUFBTSxDQUFDUCxJQUFQLENBQVljLHNCQUFoQixFQUF3QztBQUNsQ0MsOEJBRGtDLEdBQ2ZSLE1BQU0sQ0FBQ1AsSUFBUCxDQUFZYyxzQkFBWixDQUFtQztBQUFuQyxlQUNwQkgsU0FEb0IsQ0FDVixDQURVLEVBQ1AsRUFETyxDQURlLEVBRWpCOztBQUNyQkksOEJBQWdCLEdBQUcsSUFBSUgsSUFBSixDQUFTRyxnQkFBVCxDQUFuQixDQUhzQyxDQUdROztBQUM5Q1AsMEJBQVksQ0FBQ1AsU0FBRCxDQUFaLENBQXdCLG9CQUF4QixJQUFnRFksd0VBQXlCLENBQUNFLGdCQUFELENBQXpFO0FBQ0Q7O0FBRURYLDJCQUFlLENBQUNJLFlBQUQsQ0FBZjs7QUFwQks7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9leHBlcmltZW50YXRpb25zL2FyZGVubmVzLmM0Yjg2NTY5YjkzMDgwMmM1ZGY3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRGcmVuY2hGcm9tYXREYXRlU3RyaW5nIH0gZnJvbSBcIi4vZGF0ZXNcIlxuaW1wb3J0IHsgZmV0Y2hVcmwgfSBmcm9tIFwiLi4vbGliL2ZldGNoVXJsXCJcblxuY29uc3QgUkRWX1NPTElEQVJJVEVTX1VSTCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1JEVl9TT0xJREFSSVRFU19ERU1PX1VSTDtcbmNvbnN0IHVzZXJVcmwgPSBSRFZfU09MSURBUklURVNfVVJMICsgXCJhcGkvdjEvdXNlcnNcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNoZWNrVXNlckludml0YXRpb25TdGF0dXModXNlciwgdXNlckluZGV4LCB0b2tlbiwgdXNlcnNEYXRhLCB1cGRhdGVVc2Vyc0RhdGEpIHtcblxuICBjb25zdCBnZXRVc2VyVXJsID0gdXNlclVybCArIGAvJHt1c2VyW1wiSUQgUkRWXCJdfWA7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoVXJsKGdldFVzZXJVcmwsIHRva2VuKTtcblxuICBsZXQgbmV3VXNlcnNEYXRhID0gWy4uLnVzZXJzRGF0YV07XG5cbiAgaWYgKHJlc3VsdC51c2VyLmludml0YXRpb25fY3JlYXRlZF9hdCkge1xuICAgIGxldCBpbnZpdGF0aW9uX2RhdGUgPSByZXN1bHQudXNlci5pbnZpdGF0aW9uX2NyZWF0ZWRfYXQgLy8gRGF0ZSBhdSBmb3JtYXQgOiAyMDIxLTA0LTE1IDE0OjUzOjU2ICswMjAwXG4gICAgICAuc3Vic3RyaW5nKDAsIDEwKTsgLy8gUsOpY3Vww6lyZXIgbGVzIDEwIHByZW1pZXJzIGNoaWZmcmVzIChsYSBkYXRlKVxuICAgIGludml0YXRpb25fZGF0ZSA9IG5ldyBEYXRlKGludml0YXRpb25fZGF0ZSkgLy8gQ3LDqWVyIHVuZSBkYXRlIEpTXG4gICAgbmV3VXNlcnNEYXRhW3VzZXJJbmRleF1bXCJEYXRlIGQnaW52aXRhdGlvblwiXSA9IGdldEZyZW5jaEZyb21hdERhdGVTdHJpbmcoaW52aXRhdGlvbl9kYXRlKTtcbiAgfVxuICBpZiAocmVzdWx0LnVzZXIuaW52aXRhdGlvbl9hY2NlcHRlZF9hdCkge1xuICAgIGxldCBpbnNjcmlwdGlvbl9kYXRlID0gcmVzdWx0LnVzZXIuaW52aXRhdGlvbl9hY2NlcHRlZF9hdCAvLyBEYXRlIGF1IGZvcm1hdCA6IDIwMjEtMDQtMTUgMTQ6NTM6NTYgKzAyMDBcbiAgICAgIC5zdWJzdHJpbmcoMCwgMTApOyAvLyBSw6ljdXDDqXJlciBsZXMgMTAgcHJlbWllcnMgY2hpZmZyZXMgKGxhIGRhdGUpXG4gICAgaW5zY3JpcHRpb25fZGF0ZSA9IG5ldyBEYXRlKGluc2NyaXB0aW9uX2RhdGUpIC8vIENyw6llciB1bmUgZGF0ZSBKU1xuICAgIG5ld1VzZXJzRGF0YVt1c2VySW5kZXhdW1wiRGF0ZSBkJ2luc2NyaXB0aW9uXCJdID0gZ2V0RnJlbmNoRnJvbWF0RGF0ZVN0cmluZyhpbnNjcmlwdGlvbl9kYXRlKTtcbiAgfVxuXG4gIHVwZGF0ZVVzZXJzRGF0YShuZXdVc2Vyc0RhdGEpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==