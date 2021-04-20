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
  var userUrl = RDV_SOLIDARITES_URL + "/api/v1/users";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jcmVhdGVVc2VyQnV0dG9uLmpzIl0sIm5hbWVzIjpbIkNyZWF0ZVVzZXJCdXR0b24iLCJ0b2tlbiIsInVwZGF0ZVVzZXJzRGF0YSIsInVzZXJzRGF0YSIsInVzZXIiLCJpbmRleCIsIlJEVl9TT0xJREFSSVRFU19VUkwiLCJwcm9jZXNzIiwidXNlclVybCIsImNyZWF0ZVVzZXIiLCJ1c2VyRGF0YSIsInVzZXJJbmRleCIsImFkZHJlc3MiLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwiZW1haWwiLCJwaG9uZV9udW1iZXIiLCJyZXBsYWNlIiwiYmlydGhfZGF0ZSIsInN0cmluZ1RvRGF0ZSIsImNhaXNzZV9hZmZpbGlhdGlvbiIsImFmZmlsaWF0aW9uX251bWJlciIsIm9yZ2FuaXNhdGlvbl9pZHMiLCJmZXRjaFVybCIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXN1bHQiLCJuZXdVc2Vyc0RhdGEiLCJpZCIsImdlbmVyYXRlSW52aXRhdGlvbiIsImVycm9ycyIsImVycm9yIiwiY2hlY2tVc2VySW52aXRhdGlvblN0YXR1cyIsImFsZXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLGdCQUFULE9BTVo7QUFBQSxNQUxEQyxLQUtDLFFBTERBLEtBS0M7QUFBQSxNQUpEQyxlQUlDLFFBSkRBLGVBSUM7QUFBQSxNQUhEQyxTQUdDLFFBSERBLFNBR0M7QUFBQSxNQUZEQyxJQUVDLFFBRkRBLElBRUM7QUFBQSxNQUREQyxLQUNDLFFBRERBLEtBQ0M7QUFDRCxNQUFNQyxtQkFBbUIsR0FBR0MsdUJBQTVCO0FBQ0EsTUFBTUMsT0FBTyxHQUFHRixtQkFBbUIsR0FBR0MsZUFBdEM7O0FBRUEsTUFBTUUsVUFBVTtBQUFBLGlNQUFHLGlCQUFlQyxRQUFmLEVBQXlCQyxTQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFWEMscUJB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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVZyQixVQUFVO0FBQUE7QUFBQTtBQUFBLEtBQWhCOztBQW9DQSxzQkFDRTtBQUFRLFdBQU8sRUFBRTtBQUFBLGFBQU1BLFVBQVUsQ0FBQ0wsSUFBRCxFQUFPQyxLQUFQLENBQWhCO0FBQUEsS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtEO0tBbkR1QkwsZ0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZXhwZXJpbWVudGF0aW9ucy9hcmRlbm5lcy5hODNiYTkwM2YxOTdhMThlZTU3OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZmV0Y2hVcmwgfSBmcm9tIFwiLi4vbGliL2ZldGNoVXJsXCJcbmltcG9ydCB7IHN0cmluZ1RvRGF0ZSB9IGZyb20gXCIuLi9saWIvZGF0ZXNcIlxuaW1wb3J0IHsgZ2VuZXJhdGVJbnZpdGF0aW9uIH0gZnJvbSAnLi4vbGliL2dlbmVyYXRlSW52aXRhdGlvbidcbmltcG9ydCB7IGNoZWNrVXNlckludml0YXRpb25TdGF0dXMgfSBmcm9tICcuLi9saWIvY2hlY2tVc2VySW52aXRhdGlvblN0YXR1cydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3JlYXRlVXNlckJ1dHRvbih7XG4gIHRva2VuLFxuICB1cGRhdGVVc2Vyc0RhdGEsXG4gIHVzZXJzRGF0YSxcbiAgdXNlcixcbiAgaW5kZXhcbn0pIHtcbiAgY29uc3QgUkRWX1NPTElEQVJJVEVTX1VSTCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1JEVl9TT0xJREFSSVRFU19ERU1PX1VSTDtcbiAgY29uc3QgdXNlclVybCA9IFJEVl9TT0xJREFSSVRFU19VUkwgKyBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19SRFZfU09MSURBUklURVNfVVNFUl9QQVRIO1xuXG4gIGNvbnN0IGNyZWF0ZVVzZXIgPSBhc3luYyBmdW5jdGlvbih1c2VyRGF0YSwgdXNlckluZGV4KSB7XG5cbiAgICBjb25zdCBhZGRyZXNzID0gdXNlckRhdGFbXCJBRFJFU1NFXCJdICsgXCIgLSBcIiArIHVzZXJEYXRhW1wiQ09ERVxcclxcblBPU1RBTFwiXSArIFwiIFwiICsgdXNlckRhdGFbXCJWSUxMRVwiXVxuICAgIGNvbnN0IHVzZXIgPSB7XG4gICAgICBmaXJzdF9uYW1lOiB1c2VyRGF0YVtcIlBSRU5PTVwiXSxcbiAgICAgIGxhc3RfbmFtZTogdXNlckRhdGFbXCJOT01cIl0sXG4gICAgICBlbWFpbDogdXNlckRhdGFbXCJNQUlMXCJdLFxuICAgICAgcGhvbmVfbnVtYmVyOiB1c2VyRGF0YVtcIlRFTEVQSE9ORVwiXS5yZXBsYWNlKC9cXHMrL2csIFwiXCIpLFxuICAgICAgYmlydGhfZGF0ZTogc3RyaW5nVG9EYXRlKHVzZXJEYXRhW1wiREFURSBERVxcclxcbk5BSVNTQU5DRVwiXSksXG4gICAgICBhZGRyZXNzOiBhZGRyZXNzLFxuICAgICAgY2Fpc3NlX2FmZmlsaWF0aW9uOiBcImNhZlwiLFxuICAgICAgYWZmaWxpYXRpb25fbnVtYmVyOiB1c2VyRGF0YVtcIk7CsENBRlwiXSxcbiAgICAgIG9yZ2FuaXNhdGlvbl9pZHM6IFtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19PUkdBTklTQVRJT05fSURfREVNT10sXG4gICAgfTtcblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoVXJsKHVzZXJVcmwsIHRva2VuLCBcIlBPU1RcIiwgSlNPTi5zdHJpbmdpZnkodXNlcikpO1xuXG4gICAgbGV0IG5ld1VzZXJzRGF0YSA9IFsuLi51c2Vyc0RhdGFdO1xuICAgIGlmIChyZXN1bHQudXNlcikge1xuICAgICAgbmV3VXNlcnNEYXRhW3VzZXJJbmRleF1bXCJJRCBSRFZcIl0gPSByZXN1bHQudXNlci5pZDtcbiAgICAgIHVwZGF0ZVVzZXJzRGF0YShuZXdVc2Vyc0RhdGEpO1xuICAgICAgZ2VuZXJhdGVJbnZpdGF0aW9uKG5ld1VzZXJzRGF0YVt1c2VySW5kZXhdLCB1c2VySW5kZXgsIHRva2VuLCB1c2Vyc0RhdGEsIHVwZGF0ZVVzZXJzRGF0YSk7XG4gICAgfSBlbHNlIGlmIChyZXN1bHQuZXJyb3JzICYmIHJlc3VsdC5lcnJvcnMuZW1haWwgJiYgcmVzdWx0LmVycm9ycy5lbWFpbFswXS5lcnJvciA9PT0gXCJ0YWtlblwiKSB7XG4gICAgICBuZXdVc2Vyc0RhdGFbdXNlckluZGV4XVtcIklEIFJEVlwiXSA9IHJlc3VsdC5lcnJvcnMuZW1haWxbMF0uaWQ7XG4gICAgICB1cGRhdGVVc2Vyc0RhdGEobmV3VXNlcnNEYXRhKTtcbiAgICAgIGNoZWNrVXNlckludml0YXRpb25TdGF0dXMobmV3VXNlcnNEYXRhW3VzZXJJbmRleF0sIHVzZXJJbmRleCwgdG9rZW4sIHVzZXJzRGF0YSwgdXBkYXRlVXNlcnNEYXRhKTtcbiAgICAgIGFsZXJ0KFwiVW4gY29tcHRlIGFzc29jacOpIMOgIGNldCBlbWFpbCBleGlzdGUgZMOpasOgXCIpO1xuICAgIH0gZWxzZSBpZiAocmVzdWx0LmVycm9ycyAmJiByZXN1bHQuZXJyb3JzLmZpcnN0X25hbWUgJiYgcmVzdWx0LmVycm9ycy5maXJzdF9uYW1lWzBdLmVycm9yID09PSBcImTDqWrDoCB1dGlsaXPDqVwiKSB7XG4gICAgICBhbGVydChcIkxhIGNyw6lhdGlvbiBkZSBjZSBjb21wdGUgYSDDqWNob3XDqS4gTCd1dGlsaXNhdGV1ciBzZW1ibGUgZMOpasOgIGV4aXN0ZXIgbWFpcyBuJ2EgcGFzIHB1IMOqdHJlIHLDqWN1cMOpcsOpLlwiKTtcbiAgICB9IGVsc2UgaWYgKHJlc3VsdC5lcnJvcnMuZW1haWwgJiYgcmVzdWx0LmVycm9ycy5lbWFpbFswXS5lcnJvciA9PT0gXCJpbnZhbGlkXCIpIHtcbiAgICAgIGFsZXJ0KFwiTCdhZHJlc3NlIG1haWwgbidlc3QgcGFzIHZhbGlkZVwiKTtcbiAgICB9IGVsc2UgaWYgKHJlc3VsdC5lcnJvcnMgJiYgcmVzdWx0LmVycm9yc1swXSkge1xuICAgICAgYWxlcnQocmVzdWx0LmVycm9yc1swXSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBjcmVhdGVVc2VyKHVzZXIsIGluZGV4KX0+XG4gICAgICBDcsOpZXIgdW4gY29tcHRlXG4gICAgPC9idXR0b24+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9