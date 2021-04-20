webpackHotUpdate_N_E("pages/experimentations/ardennes",{

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

function getDateTimeString() {
  var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
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

/***/ "./lib/historique.js":
/*!***************************!*\
  !*** ./lib/historique.js ***!
  \***************************/
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
            applicantsPersonalData = _action$item.applicantsPersonalData,
            logData = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_action$item, ["applicantsPersonalData"]);

        if (devMode) {
          console.log(logData);
        }

        Object(_socialgouv_matomo_next__WEBPACK_IMPORTED_MODULE_3__["push"])(["trackEvent", logName, JSON.stringify(_objectSpread(_objectSpread({}, logData), {}, {
          seed: undefined
        }))]);
        return [action.item].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state));

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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2RhdGVzLmpzIiwid2VicGFjazovL19OX0UvLi9saWIvaGlzdG9yaXF1ZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZS5qcyJdLCJuYW1lcyI6WyJzdHJpbmdUb0RhdGUiLCJkYXRlU3RyIiwic3BsaXQiLCJkYXkiLCJtb250aCIsInllYXIiLCJEYXRlIiwiZ2V0RGF0ZVRpbWVTdHJpbmciLCJkYXRlIiwieSIsImdldEZ1bGxZZWFyIiwibSIsImdldE1vbnRoIiwiZCIsImdldERhdGUiLCJoIiwiZ2V0SG91cnMiLCJtaSIsImdldE1pbnV0ZXMiLCJzIiwiZ2V0U2Vjb25kcyIsImdldEZyZW5jaEZvcm1hdERhdGVTdHJpbmciLCJkZXZNb2RlIiwiaW5pdFJlZHVjZXIiLCJpdGVtcyIsInJlZHVjZXJGYWN0b3J5IiwibG9nTmFtZSIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJpdGVtIiwiYXBwbGljYW50c1BlcnNvbmFsRGF0YSIsImxvZ0RhdGEiLCJjb25zb2xlIiwibG9nIiwicHVzaCIsIkpTT04iLCJzdHJpbmdpZnkiLCJzZWVkIiwidW5kZWZpbmVkIiwiRXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQUMsT0FBTyxFQUFJO0FBQUEsdUJBQ0hBLE9BQU8sQ0FBQ0MsS0FBUixDQUFjLEdBQWQsQ0FERztBQUFBO0FBQUEsTUFDdkJDLEdBRHVCO0FBQUEsTUFDbEJDLEtBRGtCO0FBQUEsTUFDWEMsSUFEVzs7QUFFOUIsU0FBTyxJQUFJQyxJQUFKLENB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cEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2V4cGVyaW1lbnRhdGlvbnMvYXJkZW5uZXMuMjI4YmU0M2RhNDAzNGRiYTk0YjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHN0cmluZ1RvRGF0ZSA9IGRhdGVTdHIgPT4ge1xuICBjb25zdCBbZGF5LCBtb250aCwgeWVhcl0gPSBkYXRlU3RyLnNwbGl0KFwiL1wiKTtcbiAgcmV0dXJuIG5ldyBEYXRlKHllYXIsIG1vbnRoIC0gMSwgZGF5KTtcbn07XG5cbmZ1bmN0aW9uIGdldERhdGVUaW1lU3RyaW5nKGRhdGUgPSBuZXcgRGF0ZSgpKSB7XG4gIGxldCB5ID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAvLyBKYXZhU2NyaXB0IG1vbnRocyBhcmUgMC1iYXNlZC5cbiAgbGV0IG0gPSBkYXRlLmdldE1vbnRoKCkgKyAxO1xuICBsZXQgZCA9IGRhdGUuZ2V0RGF0ZSgpO1xuICBsZXQgaCA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgbGV0IG1pID0gZGF0ZS5nZXRNaW51dGVzKCk7XG4gIGxldCBzID0gZGF0ZS5nZXRTZWNvbmRzKCk7XG4gIHJldHVybiB5ICsgXCJfXCIgKyBtICsgXCJfXCIgKyBkICsgXCJfXCIgKyBoICsgXCJfXCIgKyBtaSArIFwiX1wiICsgcztcbn1cblxuZnVuY3Rpb24gZ2V0RnJlbmNoRm9ybWF0RGF0ZVN0cmluZyhkYXRlKSB7XG4gIGxldCB5ID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAvLyBKYXZhU2NyaXB0IG1vbnRocyBhcmUgMC1iYXNlZC5cbiAgbGV0IG0gPSBkYXRlLmdldE1vbnRoKCkgKyAxO1xuICBsZXQgZCA9IGRhdGUuZ2V0RGF0ZSgpO1xuICByZXR1cm4gZCArIFwiL1wiICsgbSArIFwiL1wiICsgeTtcbn1cblxuZXhwb3J0IHsgZ2V0RnJlbmNoRm9ybWF0RGF0ZVN0cmluZywgc3RyaW5nVG9EYXRlLCBnZXREYXRlVGltZVN0cmluZyB9O1xuIiwiaW1wb3J0IHsgcHVzaCB9IGZyb20gXCJAc29jaWFsZ291di9tYXRvbW8tbmV4dFwiO1xuXG5jb25zdCBkZXZNb2RlID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT0gXCJkZXZlbG9wbWVudFwiO1xuXG5mdW5jdGlvbiBpbml0UmVkdWNlcihpdGVtcykge1xuICByZXR1cm4gaXRlbXMgfHwgW107XG59XG5cbmZ1bmN0aW9uIHJlZHVjZXJGYWN0b3J5KGxvZ05hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUsIGFjdGlvbikge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgXCJhcHBlbmRcIjpcbiAgICAgICAgLy8gd2UgZG9uJ3Qgd2FudCB0byBzZW5kIHRoZSBhcHBsaWNhbnRzIHBlcnNvbmFsIGRhdGFcbiAgICAgICAgbGV0IHsgYXBwbGljYW50c1BlcnNvbmFsRGF0YSwgLi4ubG9nRGF0YSB9ID0gYWN0aW9uLml0ZW07XG4gICAgICAgIGlmIChkZXZNb2RlKSB7XG4gICAgICAgICAgY29uc29sZS5sb2cobG9nRGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgcHVzaChbXCJ0cmFja0V2ZW50XCIsIGxvZ05hbWUsIEpTT04uc3RyaW5naWZ5KHsgLi4ubG9nRGF0YSwgc2VlZDogdW5kZWZpbmVkIH0pXSk7XG4gICAgICAgIHJldHVybiBbYWN0aW9uLml0ZW0sIC4uLnN0YXRlXTtcbiAgICAgIGNhc2UgXCJyZXNldFwiOlxuICAgICAgICByZXR1cm4gaW5pdFJlZHVjZXIoYWN0aW9uLml0ZW1zKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IHsgaW5pdFJlZHVjZXIsIHJlZHVjZXJGYWN0b3J5IH07XG4iLCJpbXBvcnQgb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSBvYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpO1xuICB2YXIga2V5LCBpO1xuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIHNvdXJjZVN5bWJvbEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXTtcbiAgICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlO1xuICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufSJdLCJzb3VyY2VSb290IjoiIn0=