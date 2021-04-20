webpackHotUpdate_N_E("pages/lecteur/cnaf/instruction",{

/***/ "./lib/historique.js":
/*!***************************!*\
  !*** ./lib/historique.js ***!
  \***************************/
/*! exports provided: initReducer, reducerFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initReducer\", function() { return initReducer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reducerFactory\", function() { return reducerFactory; });\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var _socialgouv_matomo_next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @socialgouv/matomo-next */ \"./node_modules/@socialgouv/matomo-next/lib/index.js\");\n/* harmony import */ var _socialgouv_matomo_next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_socialgouv_matomo_next__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar devMode = true;\n\nfunction initReducer(items) {\n  return items || [];\n}\n\nfunction reducerFactory(logName) {\n  return function reducer(state, action) {\n    switch (action.type) {\n      case \"append\":\n        var _action$item = action.item,\n            applicantsPersonalData = _action$item.applicantsPersonalData,\n            logData = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_action$item, [\"applicantsPersonalData\"]); // we filter the personal data from the log data\n        // delete logData[\"applicantsPersonalData\"];\n        // logData = { ...logData, seed: undefined };\n\n\n        if (devMode) {\n          console.log(logData);\n        }\n\n        Object(_socialgouv_matomo_next__WEBPACK_IMPORTED_MODULE_2__[\"push\"])([\"trackEvent\", logName, JSON.stringify(logData)]);\n        return [action.item].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state));\n\n      case \"reset\":\n        return initReducer(action.items);\n\n      default:\n        throw new Error();\n    }\n  };\n}\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2hpc3RvcmlxdWUuanM/OThmNyJdLCJuYW1lcyI6WyJkZXZNb2RlIiwiaW5pdFJlZHVjZXIiLCJpdGVtcyIsInJlZHVjZXJGYWN0b3J5IiwibG9nTmFtZSIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJpdGVtIiwiYXBwbGljYW50c1BlcnNvbmFsRGF0YSIsImxvZ0RhdGEiLCJjb25zb2xlIiwibG9nIiwicHVzaCIsIkpTT04iLCJzdHJpbmdpZnkiLCJFcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFFQSxJQUFNQSxPQUFPLE9BQWI7O0FBRUEsU0FBU0MsV0FBVCxDQUFxQkMsS0FBckIsRUFBNEI7QUFDMUIsU0FBT0EsS0FBSyxJQUFJLEVBQWhCO0FBQ0Q7O0FBRUQsU0FBU0MsY0FBVCxDQUF3QkMsT0FBeEIsRUFBaUM7QUFDL0IsU0FBTyxTQUFTQyxPQUFULENBQWlCQyxLQUFqQixFQUF3QkMsTUFBeEIsRUFBZ0M7QUFDckMsWUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0UsV0FBSyxRQUFMO0FBQUEsMkJBQytDRCxNQUFNLENBQUNFLElBRHREO0FBQUEsWUFDUUMsc0JBRFIsZ0JBQ1FBLHNCQURSO0FBQUEsWUFDbUNDLE9BRG5DLGlKQUVFO0FBQ0E7QUFDQTs7O0FBQ0EsWUFBSVgsT0FBSixFQUFhO0FBQ1hZLGlCQUFPLENBQUNDLEdBQVIsQ0FBWUYsT0FBWjtBQUNEOztBQUNERyw0RUFBSSxDQUFDLENBQUMsWUFBRCxFQUFlVixPQUFmLEVBQXdCVyxJQUFJLENBQUNDLFNBQUwsQ0FBZUwsT0FBZixDQUF4QixDQUFELENBQUo7QUFDQSxnQkFBUUosTUFBTSxDQUFDRSxJQUFmLHNHQUF3QkgsS0FBeEI7O0FBQ0YsV0FBSyxPQUFMO0FBQ0UsZUFBT0wsV0FBVyxDQUFDTSxNQUFNLENBQUNMLEtBQVIsQ0FBbEI7O0FBQ0Y7QUFDRSxjQUFNLElBQUllLEtBQUosRUFBTjtBQWRKO0FBZ0JELEdBakJEO0FBa0JEOztBQUVEIiwiZmlsZSI6Ii4vbGliL2hpc3RvcmlxdWUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwdXNoIH0gZnJvbSBcIkBzb2NpYWxnb3V2L21hdG9tby1uZXh0XCI7XG5cbmNvbnN0IGRldk1vZGUgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PSBcImRldmVsb3BtZW50XCI7XG5cbmZ1bmN0aW9uIGluaXRSZWR1Y2VyKGl0ZW1zKSB7XG4gIHJldHVybiBpdGVtcyB8fCBbXTtcbn1cblxuZnVuY3Rpb24gcmVkdWNlckZhY3RvcnkobG9nTmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKSB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgY2FzZSBcImFwcGVuZFwiOlxuICAgICAgICBsZXQgeyBhcHBsaWNhbnRzUGVyc29uYWxEYXRhLCAuLi5sb2dEYXRhIH0gPSBhY3Rpb24uaXRlbTtcbiAgICAgICAgLy8gd2UgZmlsdGVyIHRoZSBwZXJzb25hbCBkYXRhIGZyb20gdGhlIGxvZyBkYXRhXG4gICAgICAgIC8vIGRlbGV0ZSBsb2dEYXRhW1wiYXBwbGljYW50c1BlcnNvbmFsRGF0YVwiXTtcbiAgICAgICAgLy8gbG9nRGF0YSA9IHsgLi4ubG9nRGF0YSwgc2VlZDogdW5kZWZpbmVkIH07XG4gICAgICAgIGlmIChkZXZNb2RlKSB7XG4gICAgICAgICAgY29uc29sZS5sb2cobG9nRGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgcHVzaChbXCJ0cmFja0V2ZW50XCIsIGxvZ05hbWUsIEpTT04uc3RyaW5naWZ5KGxvZ0RhdGEpXSk7XG4gICAgICAgIHJldHVybiBbYWN0aW9uLml0ZW0sIC4uLnN0YXRlXTtcbiAgICAgIGNhc2UgXCJyZXNldFwiOlxuICAgICAgICByZXR1cm4gaW5pdFJlZHVjZXIoYWN0aW9uLml0ZW1zKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IHsgaW5pdFJlZHVjZXIsIHJlZHVjZXJGYWN0b3J5IH07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/historique.js\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _objectWithoutProperties; });\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js\");\n\nfunction _objectWithoutProperties(source, excluded) {\n  if (source == null) return {};\n  var target = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(source, excluded);\n  var key, i;\n\n  if (Object.getOwnPropertySymbols) {\n    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);\n\n    for (i = 0; i < sourceSymbolKeys.length; i++) {\n      key = sourceSymbolKeys[i];\n      if (excluded.indexOf(key) >= 0) continue;\n      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;\n      target[key] = source[key];\n    }\n  }\n\n  return target;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzLmpzPzE1ZmQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQW1HO0FBQ3BGO0FBQ2Y7QUFDQSxlQUFlLHVHQUE0QjtBQUMzQzs7QUFFQTtBQUNBOztBQUVBLGVBQWUsNkJBQTZCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0gb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTtcbiAgdmFyIGtleSwgaTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07XG4gICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTtcbiAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _objectWithoutPropertiesLoose; });\nfunction _objectWithoutPropertiesLoose(source, excluded) {\n  if (source == null) return {};\n  var target = {};\n  var sourceKeys = Object.keys(source);\n  var key, i;\n\n  for (i = 0; i < sourceKeys.length; i++) {\n    key = sourceKeys[i];\n    if (excluded.indexOf(key) >= 0) continue;\n    target[key] = source[key];\n  }\n\n  return target;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanM/Y2NiNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhLHVCQUF1QjtBQUNwQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js\n");

/***/ })

})