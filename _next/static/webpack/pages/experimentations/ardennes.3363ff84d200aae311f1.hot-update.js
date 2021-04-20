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
                Object(_lib_generateInvitation__WEBPACK_IMPORTED_MODULE_6__["generateInvitation"])(result.user.id, userIndex);
              } else if (result.errors && result.errors.email && result.errors.email[0].error === "taken") {
                newUsersData[userIndex]["ID RDV"] = result.errors.email[0].id;
                updateUsersData(newUsersData);
                Object(_lib_checkUserInvitationStatus__WEBPACK_IMPORTED_MODULE_7__["checkUserInvitationStatus"])(result.errors.email[0].id, userIndex);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jcmVhdGVVc2VyQnV0dG9uLmpzIl0sIm5hbWVzIjpbIkNyZWF0ZVVzZXJCdXR0b24iLCJ0b2tlbiIsInVwZGF0ZVVzZXJzRGF0YSIsInVzZXJzRGF0YSIsInVzZXIiLCJpbmRleCIsIlJEVl9TT0xJREFSSVRFU19VUkwiLCJwcm9jZXNzIiwidXNlclVybCIsImNyZWF0ZVVzZXIiLCJ1c2VyRGF0YSIsInVzZXJJbmRleCIsImFkZHJlc3MiLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwiZW1haWwiLCJwaG9uZV9udW1iZXIiLCJyZXBsYWNlIiwiYmlydGhfZGF0ZSIsInN0cmluZ1RvRGF0ZSIsImNhaXNzZV9hZmZpbGlhdGlvbiIsImFmZmlsaWF0aW9uX251bWJlciIsIm9yZ2FuaXNhdGlvbl9pZHMiLCJmZXRjaFVybCIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXN1bHQiLCJuZXdVc2Vyc0RhdGEiLCJpZCIsImdlbmVyYXRlSW52aXRhdGlvbiIsImVycm9ycyIsImVycm9yIiwiY2hlY2tVc2VySW52aXRhdGlvblN0YXR1cyIsImFsZXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLGdCQUFULE9BTVo7QUFBQSxNQUxEQyxLQUtDLFFBTERBLEtBS0M7QUFBQSxNQUpEQyxlQUlDLFFBSkRBLGVBSUM7QUFBQSxNQUhEQyxTQUdDLFFBSERBLFNBR0M7QUFBQSxNQUZEQyxJQUVDLFFBRkRBLElBRUM7QUFBQSxNQUREQyxLQUNDLFFBRERBLEtBQ0M7QUFDRCxNQUFNQyxtQkFBbUIsR0FBR0MsdUJBQTVCO0FBQ0EsTUFBTUMsT0FBTyxHQUFHRixtQkFBbUIsR0FBR0MsZUFBdEM7O0FBRUEsTUFBTUUsVUFBVTtBQUFBLGlNQUFHLGlCQUFlQyxRQUFmLEVBQXlCQyxTQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFWEMscUJB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QkFBVnJCLFVBQVU7QUFBQTtBQUFBO0FBQUEsS0FBaEI7O0FBb0NBLHNCQUNFO0FBQVEsV0FBTyxFQUFFO0FBQUEsYUFBTUEsVUFBVSxDQUFDTCxJQUFELEVBQU9DLEtBQVAsQ0FBaEI7QUFBQSxLQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0Q7S0FuRHVCTCxnQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9leHBlcmltZW50YXRpb25zL2FyZGVubmVzLjMzNjNmZjg0ZDIwMGFhZTMxMWYxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmZXRjaFVybCB9IGZyb20gXCIuLi9saWIvZmV0Y2hVcmxcIlxuaW1wb3J0IHsgc3RyaW5nVG9EYXRlIH0gZnJvbSBcIi4uL2xpYi9kYXRlc1wiXG5pbXBvcnQgeyBnZW5lcmF0ZUludml0YXRpb24gfSBmcm9tICcuLi9saWIvZ2VuZXJhdGVJbnZpdGF0aW9uJ1xuaW1wb3J0IHsgY2hlY2tVc2VySW52aXRhdGlvblN0YXR1cyB9IGZyb20gJy4uL2xpYi9jaGVja1VzZXJJbnZpdGF0aW9uU3RhdHVzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcmVhdGVVc2VyQnV0dG9uKHtcbiAgdG9rZW4sXG4gIHVwZGF0ZVVzZXJzRGF0YSxcbiAgdXNlcnNEYXRhLFxuICB1c2VyLFxuICBpbmRleFxufSkge1xuICBjb25zdCBSRFZfU09MSURBUklURVNfVVJMID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUkRWX1NPTElEQVJJVEVTX0RFTU9fVVJMO1xuICBjb25zdCB1c2VyVXJsID0gUkRWX1NPTElEQVJJVEVTX1VSTCArIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1JEVl9TT0xJREFSSVRFU19VU0VSX1BBVEg7XG5cbiAgY29uc3QgY3JlYXRlVXNlciA9IGFzeW5jIGZ1bmN0aW9uKHVzZXJEYXRhLCB1c2VySW5kZXgpIHtcblxuICAgIGNvbnN0IGFkZHJlc3MgPSB1c2VyRGF0YVtcIkFEUkVTU0VcIl0gKyBcIiAtIFwiICsgdXNlckRhdGFbXCJDT0RFXFxyXFxuUE9TVEFMXCJdICsgXCIgXCIgKyB1c2VyRGF0YVtcIlZJTExFXCJdXG4gICAgY29uc3QgdXNlciA9IHtcbiAgICAgIGZpcnN0X25hbWU6IHVzZXJEYXRhW1wiUFJFTk9NXCJdLFxuICAgICAgbGFzdF9uYW1lOiB1c2VyRGF0YVtcIk5PTVwiXSxcbiAgICAgIGVtYWlsOiB1c2VyRGF0YVtcIk1BSUxcIl0sXG4gICAgICBwaG9uZV9udW1iZXI6IHVzZXJEYXRhW1wiVEVMRVBIT05FXCJdLnJlcGxhY2UoL1xccysvZywgXCJcIiksXG4gICAgICBiaXJ0aF9kYXRlOiBzdHJpbmdUb0RhdGUodXNlckRhdGFbXCJEQVRFIERFXFxyXFxuTkFJU1NBTkNFXCJdKSxcbiAgICAgIGFkZHJlc3M6IGFkZHJlc3MsXG4gICAgICBjYWlzc2VfYWZmaWxpYXRpb246IFwiY2FmXCIsXG4gICAgICBhZmZpbGlhdGlvbl9udW1iZXI6IHVzZXJEYXRhW1wiTsKwQ0FGXCJdLFxuICAgICAgb3JnYW5pc2F0aW9uX2lkczogW3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX09SR0FOSVNBVElPTl9JRF9ERU1PXSxcbiAgICB9O1xuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2hVcmwodXNlclVybCwgdG9rZW4sIFwiUE9TVFwiLCBKU09OLnN0cmluZ2lmeSh1c2VyKSk7XG5cbiAgICBsZXQgbmV3VXNlcnNEYXRhID0gWy4uLnVzZXJzRGF0YV07XG4gICAgaWYgKHJlc3VsdC51c2VyKSB7XG4gICAgICBuZXdVc2Vyc0RhdGFbdXNlckluZGV4XVtcIklEIFJEVlwiXSA9IHJlc3VsdC51c2VyLmlkO1xuICAgICAgdXBkYXRlVXNlcnNEYXRhKG5ld1VzZXJzRGF0YSk7XG4gICAgICBnZW5lcmF0ZUludml0YXRpb24ocmVzdWx0LnVzZXIuaWQsIHVzZXJJbmRleCk7XG4gICAgfSBlbHNlIGlmIChyZXN1bHQuZXJyb3JzICYmIHJlc3VsdC5lcnJvcnMuZW1haWwgJiYgcmVzdWx0LmVycm9ycy5lbWFpbFswXS5lcnJvciA9PT0gXCJ0YWtlblwiKSB7XG4gICAgICBuZXdVc2Vyc0RhdGFbdXNlckluZGV4XVtcIklEIFJEVlwiXSA9IHJlc3VsdC5lcnJvcnMuZW1haWxbMF0uaWQ7XG4gICAgICB1cGRhdGVVc2Vyc0RhdGEobmV3VXNlcnNEYXRhKTtcbiAgICAgIGNoZWNrVXNlckludml0YXRpb25TdGF0dXMocmVzdWx0LmVycm9ycy5lbWFpbFswXS5pZCwgdXNlckluZGV4KTtcbiAgICAgIGFsZXJ0KFwiVW4gY29tcHRlIGFzc29jacOpIMOgIGNldCBlbWFpbCBleGlzdGUgZMOpasOgXCIpO1xuICAgIH0gZWxzZSBpZiAocmVzdWx0LmVycm9ycyAmJiByZXN1bHQuZXJyb3JzLmZpcnN0X25hbWUgJiYgcmVzdWx0LmVycm9ycy5maXJzdF9uYW1lWzBdLmVycm9yID09PSBcImTDqWrDoCB1dGlsaXPDqVwiKSB7XG4gICAgICBhbGVydChcIkxhIGNyw6lhdGlvbiBkZSBjZSBjb21wdGUgYSDDqWNob3XDqS4gTCd1dGlsaXNhdGV1ciBzZW1ibGUgZMOpasOgIGV4aXN0ZXIgbWFpcyBuJ2EgcGFzIHB1IMOqdHJlIHLDqWN1cMOpcsOpLlwiKTtcbiAgICB9IGVsc2UgaWYgKHJlc3VsdC5lcnJvcnMuZW1haWwgJiYgcmVzdWx0LmVycm9ycy5lbWFpbFswXS5lcnJvciA9PT0gXCJpbnZhbGlkXCIpIHtcbiAgICAgIGFsZXJ0KFwiTCdhZHJlc3NlIG1haWwgbidlc3QgcGFzIHZhbGlkZVwiKTtcbiAgICB9IGVsc2UgaWYgKHJlc3VsdC5lcnJvcnMgJiYgcmVzdWx0LmVycm9yc1swXSkge1xuICAgICAgYWxlcnQocmVzdWx0LmVycm9yc1swXSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBjcmVhdGVVc2VyKHVzZXIsIGluZGV4KX0+XG4gICAgICBDcsOpZXIgdW4gY29tcHRlXG4gICAgPC9idXR0b24+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9