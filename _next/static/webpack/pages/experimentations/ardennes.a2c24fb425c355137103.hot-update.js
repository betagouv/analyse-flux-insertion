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
/* harmony import */ var _lib_appFetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/appFetch */ "./lib/appFetch.js");





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
            return Object(_lib_appFetch__WEBPACK_IMPORTED_MODULE_4__["appFetch"])(getUserUrl, token);

          case 3:
            result = _context.sent;
            newUsersData = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(usersData);

            if (result.user.invitation_created_at) {
              invitation_date = result.user.invitation_created_at // Date au format : 2021-04-15 14:53:56 +0200
              .substring(0, 10); // Récupérer les 10 premiers chiffres (la date)

              invitation_date = new Date(invitation_date); // Créer une date JS

              newUsersData[userIndex]["Date d'invitation"] = Object(_dates__WEBPACK_IMPORTED_MODULE_3__["getFrenchFormatDateString"])(invitation_date);
            }

            if (result.user.invitation_accepted_at) {
              inscription_date = result.user.invitation_accepted_at // Date au format : 2021-04-15 14:53:56 +0200
              .substring(0, 10); // Récupérer les 10 premiers chiffres (la date)

              inscription_date = new Date(inscription_date); // Créer une date JS

              newUsersData[userIndex]["Date d'inscription"] = Object(_dates__WEBPACK_IMPORTED_MODULE_3__["getFrenchFormatDateString"])(inscription_date);
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

/***/ }),

/***/ "./lib/dates.js":
/*!**********************!*\
  !*** ./lib/dates.js ***!
  \**********************/
/*! exports provided: getFrenchFormatDateString, stringToDate, getDateTimeString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFrenchFormatDateString", function() { return getFrenchFormatDateString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringToDate", function() { return stringToDate; });
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

function getDateTimeString(date) {
  var y = date.getFullYear(); // JavaScript months are 0-based.

  var m = date.getMonth() + 1;
  var d = date.getDate();
  var h = date.getHours();
  var mi = date.getMinutes();
  var s = date.getSeconds();
  return y + "_" + m + "_" + d + "_" + h + "_" + mi + "_" + s;
}

function getFrenchFormatDateString(date) {
  var y = date.getFullYear(); // JavaScript months are 0-based.

  var m = date.getMonth() + 1;
  var d = date.getDate();
  return d + "/" + m + "/" + y;
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
/* harmony import */ var _lib_appFetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/appFetch */ "./lib/appFetch.js");





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
            return Object(_lib_appFetch__WEBPACK_IMPORTED_MODULE_4__["appFetch"])(invitationUrl, token);

          case 5:
            result = _context.sent;

            if (result.invitation_url) {
              newUsersData = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(usersData);
              newUsersData[userIndex]["Invitation"] = result.invitation_url;
              newUsersData[userIndex]["Date d'invitation"] = Object(_dates__WEBPACK_IMPORTED_MODULE_3__["getFrenchFormatDateString"])(new Date());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2NoZWNrVXNlckludml0YXRpb25TdGF0dXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2xpYi9kYXRlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbGliL2dlbmVyYXRlSW52aXRhdGlvbi5qcyJdLCJuYW1lcyI6WyJSRFZfU09MSURBUklURVNfVVJMIiwicHJvY2VzcyIsInVzZXJVcmwiLCJjaGVja1VzZXJJbnZpdGF0aW9uU3RhdHVzIiwidXNlciIsInVzZXJJbmRleCIsInRva2VuIiwidXNlcnNEYXRhIiwidXBkYXRlVXNlcnNEYXRhIiwiZ2V0VXNlclVybCIsImFwcEZldGNoIiwicmVzdWx0IiwibmV3VXNlcnNEYXRhIiwiaW52aXRhdGlvbl9jcmVhdGVkX2F0IiwiaW52aXRhdGlvbl9kYXRlIiwic3Vic3RyaW5nIiwiRGF0ZSIsImdldEZyZW5jaEZvcm1hdERhdGVTdHJpbmciLCJpbnZpdGF0aW9uX2FjY2VwdGVkX2F0IiwiaW5zY3JpcHRpb25fZGF0ZSIsInN0cmluZ1RvRGF0ZSIsImRhdGVTdHIiLCJzcGxpdCIsImRheSIsIm1vbnRoIiwieWVhciIsImdldERhdGVUaW1lU3RyaW5nIiwiZGF0ZSIsInkiLCJnZXRGdWxsWWVhciIsIm0iLCJnZXRNb250aCIsImQiLCJnZXREYXRlIiwiaCIsImdldEhvdXJzIiwibWkiLCJnZXRNaW51dGVzIiwicyIsImdldFNlY29uZHMiLCJnZW5lcmF0ZUludml0YXRpb24iLCJ1c2VySWQiLCJpbnZpdGF0aW9uVXJsIiwiaW52aXRhdGlvbl91cmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxtQkFBbUIsR0FBR0MsdUJBQTVCO0FBQ0EsSUFBTUMsT0FBTyxHQUFHRixtQkFBbUIsR0FBRyxjQUF0QztBQUVPLFNBQWVHLHlCQUF0QjtBQUFBO0FBQUE7OztnTkFBTyxpQkFBeUNDLElBQXpDLEVBQStDQyxTQUEvQyxFQUEwREMsS0FB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TCxFQUFSO0FBQ0EsU0FBT0QsQ0FBQyxHQUFHLEdBQUosR0FBVUYsQ0FBVixHQUFjLEdBQWQsR0FBb0JGLENBQTNCO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFHTyxTQUFlWSxrQkFBdEI7QUFBQTtBQUFBOzs7eU1BQU8saUJBQWtDQyxNQUFsQyxFQUEwQ3BDLFNBQTFDLEVBQXFEQyxLQUFyRCxFQUE0REMsU0FBNUQsRUFBdUVDLGVBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNDUiwrQkFERCxHQUN1QkMsdUJBRHZCO0FBRUNDLG1CQUZELEdBRVdGLG1CQUFtQixHQUFHLGNBRmpDO0FBR0MwQyx5QkFIRCxHQUdpQnhDLE9BQU8sY0FBT3VDLE1BQVAsWUFIeEI7QUFBQTtBQUFBLG1CQUtnQi9CLDhEQUFRLENBQUNnQyxhQUFELEVBQWdCcEMsS0FBaEIsQ0FMeEI7O0FBQUE7QUFLQ0ssa0JBTEQ7O0FBT0wsZ0JBQUlBLE1BQU0sQ0FBQ2dDLGNBQVgsRUFBMkI7QUFDckIvQiwwQkFEcUIsZ0dBQ0ZMLFNBREU7QUFFekJLLDBCQUFZLENBQUNQLFNBQUQsQ0FBWixDQUF3QixZQUF4QixJQUF3Q00sTUFBTSxDQUFDZ0MsY0FBL0M7QUFDQS9CLDBCQUFZLENBQUNQLFNBQUQsQ0FBWixDQUF3QixtQkFBeEIsSUFBK0NZLHdFQUF5QixDQUFDLElBQUlELElBQUosRUFBRCxDQUF4RTtBQUNBUiw2QkFBZSxDQUFDSSxZQUFELENBQWY7QUFDRDs7QUFaSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2V4cGVyaW1lbnRhdGlvbnMvYXJkZW5uZXMuYTJjMjRmYjQyNWMzNTUxMzcxMDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldEZyZW5jaEZvcm1hdERhdGVTdHJpbmcgfSBmcm9tIFwiLi9kYXRlc1wiXG5pbXBvcnQgeyBhcHBGZXRjaCB9IGZyb20gXCIuLi9saWIvYXBwRmV0Y2hcIlxuXG5jb25zdCBSRFZfU09MSURBUklURVNfVVJMID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUkRWX1NPTElEQVJJVEVTX0RFTU9fVVJMO1xuY29uc3QgdXNlclVybCA9IFJEVl9TT0xJREFSSVRFU19VUkwgKyBcImFwaS92MS91c2Vyc1wiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2hlY2tVc2VySW52aXRhdGlvblN0YXR1cyh1c2VyLCB1c2VySW5kZXgsIHRva2VuLCB1c2Vyc0RhdGEsIHVwZGF0ZVVzZXJzRGF0YSkge1xuXG4gIGNvbnN0IGdldFVzZXJVcmwgPSB1c2VyVXJsICsgYC8ke3VzZXJbXCJJRCBSRFZcIl19YDtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXBwRmV0Y2goZ2V0VXNlclVybCwgdG9rZW4pO1xuXG4gIGxldCBuZXdVc2Vyc0RhdGEgPSBbLi4udXNlcnNEYXRhXTtcblxuICBpZiAocmVzdWx0LnVzZXIuaW52aXRhdGlvbl9jcmVhdGVkX2F0KSB7XG4gICAgbGV0IGludml0YXRpb25fZGF0ZSA9IHJlc3VsdC51c2VyLmludml0YXRpb25fY3JlYXRlZF9hdCAvLyBEYXRlIGF1IGZvcm1hdCA6IDIwMjEtMDQtMTUgMTQ6NTM6NTYgKzAyMDBcbiAgICAgIC5zdWJzdHJpbmcoMCwgMTApOyAvLyBSw6ljdXDDqXJlciBsZXMgMTAgcHJlbWllcnMgY2hpZmZyZXMgKGxhIGRhdGUpXG4gICAgaW52aXRhdGlvbl9kYXRlID0gbmV3IERhdGUoaW52aXRhdGlvbl9kYXRlKSAvLyBDcsOpZXIgdW5lIGRhdGUgSlNcbiAgICBuZXdVc2Vyc0RhdGFbdXNlckluZGV4XVtcIkRhdGUgZCdpbnZpdGF0aW9uXCJdID0gZ2V0RnJlbmNoRm9ybWF0RGF0ZVN0cmluZyhpbnZpdGF0aW9uX2RhdGUpO1xuICB9XG4gIGlmIChyZXN1bHQudXNlci5pbnZpdGF0aW9uX2FjY2VwdGVkX2F0KSB7XG4gICAgbGV0IGluc2NyaXB0aW9uX2RhdGUgPSByZXN1bHQudXNlci5pbnZpdGF0aW9uX2FjY2VwdGVkX2F0IC8vIERhdGUgYXUgZm9ybWF0IDogMjAyMS0wNC0xNSAxNDo1Mzo1NiArMDIwMFxuICAgICAgLnN1YnN0cmluZygwLCAxMCk7IC8vIFLDqWN1cMOpcmVyIGxlcyAxMCBwcmVtaWVycyBjaGlmZnJlcyAobGEgZGF0ZSlcbiAgICBpbnNjcmlwdGlvbl9kYXRlID0gbmV3IERhdGUoaW5zY3JpcHRpb25fZGF0ZSkgLy8gQ3LDqWVyIHVuZSBkYXRlIEpTXG4gICAgbmV3VXNlcnNEYXRhW3VzZXJJbmRleF1bXCJEYXRlIGQnaW5zY3JpcHRpb25cIl0gPSBnZXRGcmVuY2hGb3JtYXREYXRlU3RyaW5nKGluc2NyaXB0aW9uX2RhdGUpO1xuICB9XG5cbiAgdXBkYXRlVXNlcnNEYXRhKG5ld1VzZXJzRGF0YSk7XG59XG4iLCJjb25zdCBzdHJpbmdUb0RhdGUgPSBkYXRlU3RyID0+IHtcbiAgY29uc3QgW2RheSwgbW9udGgsIHllYXJdID0gZGF0ZVN0ci5zcGxpdChcIi9cIik7XG4gIHJldHVybiBuZXcgRGF0ZSh5ZWFyLCBtb250aCAtIDEsIGRheSk7XG59O1xuXG5mdW5jdGlvbiBnZXREYXRlVGltZVN0cmluZyhkYXRlKSB7XG4gIGxldCB5ID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAvLyBKYXZhU2NyaXB0IG1vbnRocyBhcmUgMC1iYXNlZC5cbiAgbGV0IG0gPSBkYXRlLmdldE1vbnRoKCkgKyAxO1xuICBsZXQgZCA9IGRhdGUuZ2V0RGF0ZSgpO1xuICBsZXQgaCA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgbGV0IG1pID0gZGF0ZS5nZXRNaW51dGVzKCk7XG4gIGxldCBzID0gZGF0ZS5nZXRTZWNvbmRzKCk7XG4gIHJldHVybiB5ICsgXCJfXCIgKyBtICsgXCJfXCIgKyBkICsgXCJfXCIgKyBoICsgXCJfXCIgKyBtaSArIFwiX1wiICsgcztcbn1cblxuZnVuY3Rpb24gZ2V0RnJlbmNoRm9ybWF0RGF0ZVN0cmluZyhkYXRlKSB7XG4gIGxldCB5ID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAvLyBKYXZhU2NyaXB0IG1vbnRocyBhcmUgMC1iYXNlZC5cbiAgbGV0IG0gPSBkYXRlLmdldE1vbnRoKCkgKyAxO1xuICBsZXQgZCA9IGRhdGUuZ2V0RGF0ZSgpO1xuICByZXR1cm4gZCArIFwiL1wiICsgbSArIFwiL1wiICsgeTtcbn1cblxuZXhwb3J0IHsgZ2V0RnJlbmNoRm9ybWF0RGF0ZVN0cmluZywgc3RyaW5nVG9EYXRlLCBnZXREYXRlVGltZVN0cmluZyB9XG4iLCJpbXBvcnQgeyBnZXRGcmVuY2hGb3JtYXREYXRlU3RyaW5nIH0gZnJvbSBcIi4vZGF0ZXNcIlxuaW1wb3J0IHsgYXBwRmV0Y2ggfSBmcm9tIFwiLi4vbGliL2FwcEZldGNoXCJcblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2VuZXJhdGVJbnZpdGF0aW9uKHVzZXJJZCwgdXNlckluZGV4LCB0b2tlbiwgdXNlcnNEYXRhLCB1cGRhdGVVc2Vyc0RhdGEpIHtcbiAgY29uc3QgUkRWX1NPTElEQVJJVEVTX1VSTCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1JEVl9TT0xJREFSSVRFU19ERU1PX1VSTDtcbiAgY29uc3QgdXNlclVybCA9IFJEVl9TT0xJREFSSVRFU19VUkwgKyBcImFwaS92MS91c2Vyc1wiO1xuICBjb25zdCBpbnZpdGF0aW9uVXJsID0gdXNlclVybCArIGAvJHt1c2VySWR9L2ludml0ZWA7XG5cbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXBwRmV0Y2goaW52aXRhdGlvblVybCwgdG9rZW4pO1xuXG4gIGlmIChyZXN1bHQuaW52aXRhdGlvbl91cmwpIHtcbiAgICBsZXQgbmV3VXNlcnNEYXRhID0gWy4uLnVzZXJzRGF0YV07XG4gICAgbmV3VXNlcnNEYXRhW3VzZXJJbmRleF1bXCJJbnZpdGF0aW9uXCJdID0gcmVzdWx0Lmludml0YXRpb25fdXJsO1xuICAgIG5ld1VzZXJzRGF0YVt1c2VySW5kZXhdW1wiRGF0ZSBkJ2ludml0YXRpb25cIl0gPSBnZXRGcmVuY2hGb3JtYXREYXRlU3RyaW5nKG5ldyBEYXRlKCkpO1xuICAgIHVwZGF0ZVVzZXJzRGF0YShuZXdVc2Vyc0RhdGEpO1xuICB9XG59XG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==