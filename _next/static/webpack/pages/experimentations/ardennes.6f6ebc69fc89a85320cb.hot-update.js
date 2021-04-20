webpackHotUpdate_N_E("pages/experimentations/ardennes",{

/***/ "./components/createUserButton.js":
/*!****************************************!*\
  !*** ./components/createUserButton.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CreateUserButton; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _lib_fetchUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/fetchUrl */ "./lib/fetchUrl.js");
/* harmony import */ var _lib_dates__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/dates */ "./lib/dates.js");
/* harmony import */ var _lib_generateInvitation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/generateInvitation */ "./lib/generateInvitation.js");
/* harmony import */ var _lib_checkUserInvitationStatus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/checkUserInvitationStatus */ "./lib/checkUserInvitationStatus.js");




var _jsxFileName = "/home/q/code/qblanc/beta.gouv/analyse-flux-insertion/components/createUserButton.js";




function CreateUserButton(_ref) {
  var token = _ref.token,
      updateUsersData = _ref.updateUsersData,
      usersData = _ref.usersData,
      user = _ref.user,
      index = _ref.index;
  var RDV_SOLIDARITES_URL = "http://localhost:5000";
  var userUrl = RDV_SOLIDARITES_URL + "api/v1/users";

  var createUser = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(userData, userIndex) {
      var address, user, result, newUsersData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              address = userData["ADRESSE"] + " - " + userData["CODE\r\nPOSTAL"] + " " + userData["VILLE"];
              user = {
                first_name: userData["PRENOM"],
                last_name: userData["NOM"],
                email: userData["MAIL"],
                phone_number: userData["TELEPHONE"].replace(/\s+/g, ""),
                birth_date: Object(_lib_dates__WEBPACK_IMPORTED_MODULE_5__["stringToDate"])(userData["DATE DE\r\nNAISSANCE"]),
                address: address,
                caisse_affiliation: "caf",
                affiliation_number: userData["N°CAF"],
                organisation_ids: ["1"]
              };
              _context.next = 4;
              return Object(_lib_fetchUrl__WEBPACK_IMPORTED_MODULE_4__["fetchUrl"])(userUrl, token, "POST", JSON.stringify(user));

            case 4:
              result = _context.sent;
              newUsersData = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(usersData);

              if (result.user) {
                newUsersData[userIndex]["ID RDV"] = result.user.id;
                updateUsersData(newUsersData);
                Object(_lib_generateInvitation__WEBPACK_IMPORTED_MODULE_6__["generateInvitation"])(newUsersData[userIndex], userIndex, token, usersData, updateUsersData);
              } else if (result.errors && result.errors.email && result.errors.email[0].error === "taken") {
                newUsersData[userIndex]["ID RDV"] = result.errors.email[0].id;
                updateUsersData(newUsersData);
                Object(_lib_checkUserInvitationStatus__WEBPACK_IMPORTED_MODULE_7__["checkUserInvitationStatus"])(newUsersData[userIndex], userIndex, token, usersData, updateUsersData);
                alert("Un compte associé à cet email existe déjà");
              } else if (result.errors && result.errors.first_name && result.errors.first_name[0].error === "déjà utilisé") {
                alert("La création de ce compte a échoué. L'utilisateur semble déjà exister mais n'a pas pu être récupéré.");
              } else if (result.errors.email && result.errors.email[0].error === "invalid") {
                alert("L'adresse mail n'est pas valide");
              } else if (result.errors && result.errors[0]) {
                alert(result.errors[0]);
              }

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function createUser(_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
    onClick: function onClick() {
      return createUser(user, index);
    },
    children: "Cr\xE9er un compte"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 5
  }, this);
}
_c = CreateUserButton;

var _c;

$RefreshReg$(_c, "CreateUserButton");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jcmVhdGVVc2VyQnV0dG9uLmpzIl0sIm5hbWVzIjpbIkNyZWF0ZVVzZXJCdXR0b24iLCJ0b2tlbiIsInVwZGF0ZVVzZXJzRGF0YSIsInVzZXJzRGF0YSIsInVzZXIiLCJpbmRleCIsIlJEVl9TT0xJREFSSVRFU19VUkwiLCJwcm9jZXNzIiwidXNlclVybCIsImNyZWF0ZVVzZXIiLCJ1c2VyRGF0YSIsInVzZXJJbmRleCIsImFkZHJlc3MiLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwiZW1haWwiLCJwaG9uZV9udW1iZXIiLCJyZXBsYWNlIiwiYmlydGhfZGF0ZSIsInN0cmluZ1RvRGF0ZSIsImNhaXNzZV9hZmZpbGlhdGlvbiIsImFmZmlsaWF0aW9uX251bWJlciIsIm9yZ2FuaXNhdGlvbl9pZHMiLCJmZXRjaFVybCIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXN1bHQiLCJuZXdVc2Vyc0RhdGEiLCJpZCIsImdlbmVyYXRlSW52aXRhdGlvbiIsImVycm9ycyIsImVycm9yIiwiY2hlY2tVc2VySW52aXRhdGlvblN0YXR1cyIsImFsZXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLGdCQUFULE9BTVo7QUFBQSxNQUxDQyxLQUtELFFBTENBLEtBS0Q7QUFBQSxNQUpEQyxlQUlDLFFBSkRBLGVBSUM7QUFBQSxNQUhEQyxTQUdDLFFBSERBLFNBR0M7QUFBQSxNQUZEQyxJQUVDLFFBRkRBLElBRUM7QUFBQSxNQUREQyxLQUNDLFFBRERBLEtBQ0M7QUFDRCxNQUFNQyxtQkFBbUIsR0FBR0MsdUJBQTVCO0FBQ0EsTUFBTUMsT0FBTyxHQUFHRixtQkFBbUIsR0FBRyxjQUF0Qzs7QUFFQSxNQUFNRyxVQUFVO0FBQUEsaU1BQUcsaUJBQWVDLFFBQWYsRUFBeUJDLFNBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVYQyxxQkFGVyxHQUVERixRQUFRLENBQUMsU0FBRCxDQUFSLEdBQXNCLEtBQXRCLEdBQThCQSxRQUFRLENBQUMsZ0JBQUQsQ0FBdEMsR0FBMkQsR0FBM0QsR0FBaUVBLFFBQVEsQ0FBQyxPQUFELENBRnhFO0FBR1hOLGtCQUhXLEdBR0o7QUFDWFMsMEJBQVUsRUFBRUgsUUFBUSxDQUFDLFFBQUQsQ0FEVDtBQUVYSSx5QkFBUyxFQUFFSixRQUFRLENBQUMsS0FBRCxDQUZSO0FBR1hLLHFCQUFLLEVBQUVMLFFBQVEsQ0FBQyxNQUFELENBSEo7QUFJWE0sNEJBQVksRUFBRU4sUUFBUSxDQUFDLFdBQUQsQ0FBUixDQUFzQk8sT0FBdEIsQ0FBOEIsTUFBOUIsRUFBc0MsRUFBdEMsQ0FKSDtBQUtYQywwQkFBVSxFQUFFQywrREFBWSxDQUFDVCxRQUFRLENBQUMsc0JBQUQsQ0FBVCxDQUxiO0FBTVhFLHVCQUFPLEVBQUVBLE9BTkU7QUFPWFEsa0NBQWtCLEVBQUUsS0FQVDtBQVFYQyxrQ0FBa0IsRUFBRVgsUUFBUSxDQUFDLE9BQUQsQ0FSakI7QUFTWFksZ0NBQWdCLEVBQUUsQ0FBQ2YsR0FBRDtBQVRQLGVBSEk7QUFBQTtBQUFBLHFCQWVJZ0IsOERBQVEsQ0FBQ2YsT0FBRCxFQUFVUCxLQUFWLEVBQWlCLE1BQWpCLEVBQXlCdUIsSUFBSSxDQUFDQyxTQUFMLENBQWVyQixJQUFmLENBQXpCLENBZlo7O0FBQUE7QUFlWHNCLG9CQWZXO0FBaUJiQywwQkFqQmEsZ0dBaUJNeEIsU0FqQk47O0FBa0JqQixrQkFBSXVCLE1BQU0sQ0FBQ3RCLElBQVgsRUFBaUI7QUFDZnVCLDRCQUFZLENBQUNoQixTQUFELENBQVosQ0FBd0IsUUFBeEIsSUFBb0NlLE1BQU0sQ0FBQ3RCLElBQVAsQ0FBWXdCLEVBQWhEO0FBQ0ExQiwrQkFBZSxDQUFDeUIsWUFBRCxDQUFmO0FBQ0FFLGtHQUFrQixDQUFDRixZQUFZLENBQUNoQixTQUFELENBQWIsRUFBMEJBLFNBQTFCLEVBQXFDVixLQUFyQyxFQUE0Q0UsU0FBNUMsRUFBdURELGVBQXZELENBQWxCO0FBQ0QsZUFKRCxNQUlPLElBQUl3QixNQUFNLENBQUNJLE1BQVAsSUFBaUJKLE1BQU0sQ0FBQ0ksTUFBUCxDQUFjZixLQUEvQixJQUF3Q1csTUFBTSxDQUFDSSxNQUFQLENBQWNmLEtBQWQsQ0FBb0IsQ0FBcEIsRUFBdUJnQixLQUF2QixLQUFpQyxPQUE3RSxFQUFzRjtBQUMzRkosNEJBQVksQ0FBQ2hCLFNBQUQsQ0FBWixDQUF3QixRQUF4QixJQUFvQ2UsTUFBTSxDQUFDSSxNQUFQLENBQWNmLEtBQWQsQ0FBb0IsQ0FBcEIsRUFBdUJhLEVBQTNEO0FBQ0ExQiwrQkFBZSxDQUFDeUIsWUFBRCxDQUFmO0FBQ0FLLGdIQUF5QixDQUFDTCxZQUFZLENBQUNoQixTQUFELENBQWIsRUFBMEJBLFNBQTFCLEVBQXFDVixLQUFyQyxFQUE0Q0UsU0FBNUMsRUFBdURELGVBQXZELENBQXpCO0FBQ0ErQixxQkFBSyxDQUFDLDJDQUFELENBQUw7QUFDRCxlQUxNLE1BS0EsSUFBSVAsTUFBTSxDQUFDSSxNQUFQLElBQWlCSixNQUFNLENBQUNJLE1BQVAsQ0FBY2pCLFVBQS9CLElBQTZDYSxNQUFNLENBQUNJLE1BQVAsQ0FBY2pCLFVBQWQsQ0FBeUIsQ0FBekIsRUFBNEJrQixLQUE1QixLQUFzQyxjQUF2RixFQUF1RztBQUM1R0UscUJBQUssQ0FBQyxxR0FBRCxDQUFMO0FBQ0QsZUFGTSxNQUVBLElBQUlQLE1BQU0sQ0FBQ0ksTUFBUCxDQUFjZixLQUFkLElBQXVCVyxNQUFNLENBQUNJLE1BQVAsQ0FBY2YsS0FBZCxDQUFvQixDQUFwQixFQUF1QmdCLEtBQXZCLEtBQWlDLFNBQTVELEVBQXVFO0FBQzVFRSxxQkFBSyxDQUFDLGlDQUFELENBQUw7QUFDRCxlQUZNLE1BRUEsSUFBSVAsTUFBTSxDQUFDSSxNQUFQLElBQWlCSixNQUFNLENBQUNJLE1BQVAsQ0FBYyxDQUFkLENBQXJCLEVBQXVDO0FBQzVDRyxxQkFBSyxDQUFDUCxNQUFNLENBQUNJLE1BQVAsQ0FBYyxDQUFkLENBQUQsQ0FBTDtBQUNEOztBQWpDZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBVnJCLFVBQVU7QUFBQTtBQUFBO0FBQUEsS0FBaEI7O0FBb0NBLHNCQUNFO0FBQVEsV0FBTyxFQUFFO0FBQUEsYUFBTUEsVUFBVSxDQUFDTCxJQUFELEVBQU9DLEtBQVAsQ0FBaEI7QUFBQSxLQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0Q7S0FuRHVCTCxnQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9leHBlcmltZW50YXRpb25zL2FyZGVubmVzLjZmNmViYzY5ZmM4OWE4NTMyMGNiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmZXRjaFVybCB9IGZyb20gXCIuLi9saWIvZmV0Y2hVcmxcIlxuaW1wb3J0IHsgc3RyaW5nVG9EYXRlIH0gZnJvbSBcIi4uL2xpYi9kYXRlc1wiXG5pbXBvcnQgeyBnZW5lcmF0ZUludml0YXRpb24gfSBmcm9tICcuLi9saWIvZ2VuZXJhdGVJbnZpdGF0aW9uJ1xuaW1wb3J0IHsgY2hlY2tVc2VySW52aXRhdGlvblN0YXR1cyB9IGZyb20gJy4uL2xpYi9jaGVja1VzZXJJbnZpdGF0aW9uU3RhdHVzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcmVhdGVVc2VyQnV0dG9uKHtcbiAgICB0b2tlbixcbiAgdXBkYXRlVXNlcnNEYXRhLFxuICB1c2Vyc0RhdGEsXG4gIHVzZXIsXG4gIGluZGV4XG59KSB7XG4gIGNvbnN0IFJEVl9TT0xJREFSSVRFU19VUkwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19SRFZfU09MSURBUklURVNfREVNT19VUkw7XG4gIGNvbnN0IHVzZXJVcmwgPSBSRFZfU09MSURBUklURVNfVVJMICsgXCJhcGkvdjEvdXNlcnNcIjtcblxuICBjb25zdCBjcmVhdGVVc2VyID0gYXN5bmMgZnVuY3Rpb24odXNlckRhdGEsIHVzZXJJbmRleCkge1xuXG4gICAgY29uc3QgYWRkcmVzcyA9IHVzZXJEYXRhW1wiQURSRVNTRVwiXSArIFwiIC0gXCIgKyB1c2VyRGF0YVtcIkNPREVcXHJcXG5QT1NUQUxcIl0gKyBcIiBcIiArIHVzZXJEYXRhW1wiVklMTEVcIl1cbiAgICBjb25zdCB1c2VyID0ge1xuICAgICAgZmlyc3RfbmFtZTogdXNlckRhdGFbXCJQUkVOT01cIl0sXG4gICAgICBsYXN0X25hbWU6IHVzZXJEYXRhW1wiTk9NXCJdLFxuICAgICAgZW1haWw6IHVzZXJEYXRhW1wiTUFJTFwiXSxcbiAgICAgIHBob25lX251bWJlcjogdXNlckRhdGFbXCJURUxFUEhPTkVcIl0ucmVwbGFjZSgvXFxzKy9nLCBcIlwiKSxcbiAgICAgIGJpcnRoX2RhdGU6IHN0cmluZ1RvRGF0ZSh1c2VyRGF0YVtcIkRBVEUgREVcXHJcXG5OQUlTU0FOQ0VcIl0pLFxuICAgICAgYWRkcmVzczogYWRkcmVzcyxcbiAgICAgIGNhaXNzZV9hZmZpbGlhdGlvbjogXCJjYWZcIixcbiAgICAgIGFmZmlsaWF0aW9uX251bWJlcjogdXNlckRhdGFbXCJOwrBDQUZcIl0sXG4gICAgICBvcmdhbmlzYXRpb25faWRzOiBbcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfT1JHQU5JU0FUSU9OX0lEX0RFTU9dLFxuICAgIH07XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaFVybCh1c2VyVXJsLCB0b2tlbiwgXCJQT1NUXCIsIEpTT04uc3RyaW5naWZ5KHVzZXIpKTtcblxuICAgIGxldCBuZXdVc2Vyc0RhdGEgPSBbLi4udXNlcnNEYXRhXTtcbiAgICBpZiAocmVzdWx0LnVzZXIpIHtcbiAgICAgIG5ld1VzZXJzRGF0YVt1c2VySW5kZXhdW1wiSUQgUkRWXCJdID0gcmVzdWx0LnVzZXIuaWQ7XG4gICAgICB1cGRhdGVVc2Vyc0RhdGEobmV3VXNlcnNEYXRhKTtcbiAgICAgIGdlbmVyYXRlSW52aXRhdGlvbihuZXdVc2Vyc0RhdGFbdXNlckluZGV4XSwgdXNlckluZGV4LCB0b2tlbiwgdXNlcnNEYXRhLCB1cGRhdGVVc2Vyc0RhdGEpO1xuICAgIH0gZWxzZSBpZiAocmVzdWx0LmVycm9ycyAmJiByZXN1bHQuZXJyb3JzLmVtYWlsICYmIHJlc3VsdC5lcnJvcnMuZW1haWxbMF0uZXJyb3IgPT09IFwidGFrZW5cIikge1xuICAgICAgbmV3VXNlcnNEYXRhW3VzZXJJbmRleF1bXCJJRCBSRFZcIl0gPSByZXN1bHQuZXJyb3JzLmVtYWlsWzBdLmlkO1xuICAgICAgdXBkYXRlVXNlcnNEYXRhKG5ld1VzZXJzRGF0YSk7XG4gICAgICBjaGVja1VzZXJJbnZpdGF0aW9uU3RhdHVzKG5ld1VzZXJzRGF0YVt1c2VySW5kZXhdLCB1c2VySW5kZXgsIHRva2VuLCB1c2Vyc0RhdGEsIHVwZGF0ZVVzZXJzRGF0YSk7XG4gICAgICBhbGVydChcIlVuIGNvbXB0ZSBhc3NvY2nDqSDDoCBjZXQgZW1haWwgZXhpc3RlIGTDqWrDoFwiKTtcbiAgICB9IGVsc2UgaWYgKHJlc3VsdC5lcnJvcnMgJiYgcmVzdWx0LmVycm9ycy5maXJzdF9uYW1lICYmIHJlc3VsdC5lcnJvcnMuZmlyc3RfbmFtZVswXS5lcnJvciA9PT0gXCJkw6lqw6AgdXRpbGlzw6lcIikge1xuICAgICAgYWxlcnQoXCJMYSBjcsOpYXRpb24gZGUgY2UgY29tcHRlIGEgw6ljaG91w6kuIEwndXRpbGlzYXRldXIgc2VtYmxlIGTDqWrDoCBleGlzdGVyIG1haXMgbidhIHBhcyBwdSDDqnRyZSByw6ljdXDDqXLDqS5cIik7XG4gICAgfSBlbHNlIGlmIChyZXN1bHQuZXJyb3JzLmVtYWlsICYmIHJlc3VsdC5lcnJvcnMuZW1haWxbMF0uZXJyb3IgPT09IFwiaW52YWxpZFwiKSB7XG4gICAgICBhbGVydChcIkwnYWRyZXNzZSBtYWlsIG4nZXN0IHBhcyB2YWxpZGVcIik7XG4gICAgfSBlbHNlIGlmIChyZXN1bHQuZXJyb3JzICYmIHJlc3VsdC5lcnJvcnNbMF0pIHtcbiAgICAgIGFsZXJ0KHJlc3VsdC5lcnJvcnNbMF0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gY3JlYXRlVXNlcih1c2VyLCBpbmRleCl9PlxuICAgICAgQ3LDqWVyIHVuIGNvbXB0ZVxuICAgIDwvYnV0dG9uPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==