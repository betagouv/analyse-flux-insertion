webpackHotUpdate_N_E("pages/experimentations/ardennes-demo",{

/***/ "./lib/reducerFactory.js":
/*!*******************************!*\
  !*** ./lib/reducerFactory.js ***!
  \*******************************/
/*! exports provided: initReducer, reducerFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initReducer", function() { return initReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducerFactory", function() { return reducerFactory; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _socialgouv_matomo_next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @socialgouv/matomo-next */ "./node_modules/@socialgouv/matomo-next/lib/index.js");
/* harmony import */ var _socialgouv_matomo_next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_socialgouv_matomo_next__WEBPACK_IMPORTED_MODULE_3__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var devMode = true;

function initReducer(items) {
  return items || [];
}

function reducerFactory(logName) {
  return function reducer(state, action) {
    switch (action.type) {
      case "append":
        // we don't want to send the applicants personal data
        var _action$item = action.item,
            applicants = _action$item.applicants,
            applicantsEligibleAsNew = _action$item.applicantsEligibleAsNew,
            newApplicantsData = _action$item.newApplicantsData,
            applicantsWithRightsIds = _action$item.applicantsWithRightsIds,
            applicantsWithRights = _action$item.applicantsWithRights,
            logData = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_action$item, ["applicants", "applicantsEligibleAsNew", "newApplicantsData", "applicantsWithRightsIds", "applicantsWithRights"]);

        if (devMode) {
          console.log(logData);
        }

        Object(_socialgouv_matomo_next__WEBPACK_IMPORTED_MODULE_3__["push"])(["trackEvent", logName, JSON.stringify(_objectSpread(_objectSpread({}, logData), {}, {
          seed: undefined
        }))]);
        return [action.item].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state));

      case "update":
        var elIndex = state.findIndex(function (el) {
          return el.seed === action.item.seed;
        });
        state[elIndex] = _objectSpread(_objectSpread({}, state[elIndex]), action.item);
        return state;

      case "replace":
        return action.items;

      case "reset":
        return initReducer(action.items);

      default:
        throw new Error();
    }
  };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3JlZHVjZXJGYWN0b3J5LmpzIl0sIm5hbWVzIjpbImRldk1vZGUiLCJpbml0UmVkdWNlciIsIml0ZW1zIiwicmVkdWNlckZhY3RvcnkiLCJsb2dOYW1lIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIml0ZW0iLCJhcHBsaWNhbnRzIiwiYXBwbGljYW50c0VsaWdpYmxlQXNOZXciLCJuZXdBcHBsaWNhbnRzRGF0YSIsImFwcGxpY2FudHNXaXRoUmlnaHRzSWRzIiwiYXBwbGljYW50c1dpdGhSaWdodHMiLCJsb2dEYXRhIiwiY29uc29sZSIsImxvZyIsInB1c2giLCJKU09OIiwic3RyaW5naWZ5Iiwic2VlZCIsInVuZGVmaW5lZCIsImVsSW5kZXgiLCJmaW5kSW5kZXgiLCJlbCIsIkVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsSUFBTUEsT0FBTyxPQUFiOztBQUVBLFNBQVNDLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQTRCO0FBQzFCLFNBQU9BLEtBQUssSUFBSSxFQUFoQjtBQUNEOztBQUVELFNBQVNDLGNBQVQsQ0FBd0JDLE9BQXhCLEVBQWlDO0FBQy9CLFNBQU8sU0FBU0MsT0FBVCxDQUFpQkMsS0FBakIsRUFBd0JDLE1BQXhCLEVBQWdDO0FBQ3JDLFlBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNFLFdBQUssUUFBTDtBQUNFO0FBREYsMkJBU01ELE1BQU0sQ0FBQ0UsSUFUYjtBQUFBLFlBR0lDLFVBSEosZ0JBR0lBLFVBSEo7QUFBQSxZQUlJQyx1QkFKSixnQkFJSUEsdUJBSko7QUFBQSxZQUtJQyxpQkFMSixnQkFLSUEsaUJBTEo7QUFBQSxZQU1JQyx1QkFOSixnQkFNSUEsdUJBTko7QUFBQSxZQU9JQyxvQkFQSixnQkFPSUEsb0JBUEo7QUFBQSxZQVFPQyxPQVJQOztBQVVFLFlBQUlmLE9BQUosRUFBYTtBQUNYZ0IsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixPQUFaO0FBQ0Q7O0FBQ0RHLDRFQUFJLENBQUMsQ0FBQyxZQUFELEVBQWVkLE9BQWYsRUFBd0JlLElBQUksQ0FBQ0MsU0FBTCxpQ0FBb0JMLE9BQXBCO0FBQTZCTSxjQUFJLEVBQUVDO0FBQW5DLFdBQXhCLENBQUQsQ0FBSjtBQUNBLGdCQUFRZixNQUFNLENBQUNFLElBQWYsc0dBQXdCSCxLQUF4Qjs7QUFDRixXQUFLLFFBQUw7QUFDRSxZQUFNaUIsT0FBTyxHQUFHakIsS0FBSyxDQUFDa0IsU0FBTixDQUFnQixVQUFBQyxFQUFFO0FBQUEsaUJBQUlBLEVBQUUsQ0FBQ0osSUFBSCxLQUFZZCxNQUFNLENBQUNFLElBQVAsQ0FBWVksSUFBNUI7QUFBQSxTQUFsQixDQUFoQjtBQUNBZixhQUFLLENBQUNpQixPQUFELENBQUwsbUNBQXNCakIsS0FBSyxDQUFDaUIsT0FBRCxDQUEzQixHQUF5Q2hCLE1BQU0sQ0FBQ0UsSUFBaEQ7QUFDQSxlQUFPSCxLQUFQOztBQUNGLFdBQUssU0FBTDtBQUNFLGVBQU9DLE1BQU0sQ0FBQ0wsS0FBZDs7QUFDRixXQUFLLE9BQUw7QUFDRSxlQUFPRCxXQUFXLENBQUNNLE1BQU0sQ0FBQ0wsS0FBUixDQUFsQjs7QUFDRjtBQUNFLGNBQU0sSUFBSXdCLEtBQUosRUFBTjtBQXpCSjtBQTJCRCxHQTVCRDtBQTZCRDs7QUFFRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9leHBlcmltZW50YXRpb25zL2FyZGVubmVzLWRlbW8uZGMzZmVlNGYzMTc4MThlZWUxYjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHB1c2ggfSBmcm9tIFwiQHNvY2lhbGdvdXYvbWF0b21vLW5leHRcIjtcblxuY29uc3QgZGV2TW9kZSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09IFwiZGV2ZWxvcG1lbnRcIjtcblxuZnVuY3Rpb24gaW5pdFJlZHVjZXIoaXRlbXMpIHtcbiAgcmV0dXJuIGl0ZW1zIHx8IFtdO1xufVxuXG5mdW5jdGlvbiByZWR1Y2VyRmFjdG9yeShsb2dOYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pIHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICBjYXNlIFwiYXBwZW5kXCI6XG4gICAgICAgIC8vIHdlIGRvbid0IHdhbnQgdG8gc2VuZCB0aGUgYXBwbGljYW50cyBwZXJzb25hbCBkYXRhXG4gICAgICAgIGxldCB7XG4gICAgICAgICAgYXBwbGljYW50cyxcbiAgICAgICAgICBhcHBsaWNhbnRzRWxpZ2libGVBc05ldyxcbiAgICAgICAgICBuZXdBcHBsaWNhbnRzRGF0YSxcbiAgICAgICAgICBhcHBsaWNhbnRzV2l0aFJpZ2h0c0lkcyxcbiAgICAgICAgICBhcHBsaWNhbnRzV2l0aFJpZ2h0cyxcbiAgICAgICAgICAuLi5sb2dEYXRhXG4gICAgICAgIH0gPSBhY3Rpb24uaXRlbTtcbiAgICAgICAgaWYgKGRldk1vZGUpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhsb2dEYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBwdXNoKFtcInRyYWNrRXZlbnRcIiwgbG9nTmFtZSwgSlNPTi5zdHJpbmdpZnkoeyAuLi5sb2dEYXRhLCBzZWVkOiB1bmRlZmluZWQgfSldKTtcbiAgICAgICAgcmV0dXJuIFthY3Rpb24uaXRlbSwgLi4uc3RhdGVdO1xuICAgICAgY2FzZSBcInVwZGF0ZVwiOlxuICAgICAgICBjb25zdCBlbEluZGV4ID0gc3RhdGUuZmluZEluZGV4KGVsID0+IGVsLnNlZWQgPT09IGFjdGlvbi5pdGVtLnNlZWQpO1xuICAgICAgICBzdGF0ZVtlbEluZGV4XSA9IHsgLi4uc3RhdGVbZWxJbmRleF0sIC4uLmFjdGlvbi5pdGVtIH07XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIGNhc2UgXCJyZXBsYWNlXCI6XG4gICAgICAgIHJldHVybiBhY3Rpb24uaXRlbXM7XG4gICAgICBjYXNlIFwicmVzZXRcIjpcbiAgICAgICAgcmV0dXJuIGluaXRSZWR1Y2VyKGFjdGlvbi5pdGVtcyk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCB7IGluaXRSZWR1Y2VyLCByZWR1Y2VyRmFjdG9yeSB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==