webpackHotUpdate_N_E("pages/experimentations/ardennes",{

/***/ "./lib/dates.js":
/*!**********************!*\
  !*** ./lib/dates.js ***!
  \**********************/
/*! exports provided: toDate, getFormattedTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toDate", function() { return toDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFormattedTime", function() { return getFormattedTime; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");


var toDate = function toDate(dateStr) {
  var _dateStr$split = dateStr.split("/"),
      _dateStr$split2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_dateStr$split, 3),
      day = _dateStr$split2[0],
      month = _dateStr$split2[1],
      year = _dateStr$split2[2];

  return new Date(year, month - 1, day);
};

function getFormattedTime() {
  var today = new Date();
  var y = today.getFullYear(); // JavaScript months are 0-based.

  var m = today.getMonth() + 1;
  var d = today.getDate();
  var h = today.getHours();
  var mi = today.getMinutes();
  var s = today.getSeconds();
  return y + "_" + m + "_" + d + "_" + h + "_" + mi + "_" + s;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2RhdGVzLmpzIl0sIm5hbWVzIjpbInRvRGF0ZSIsImRhdGVTdHIiLCJzcGxpdCIsImRheSIsIm1vbnRoIiwieWVhciIsIkRhdGUiLCJnZXRGb3JtYXR0ZWRUaW1lIiwidG9kYXkiLCJ5IiwiZ2V0RnVsbFllYXIiLCJtIiwiZ2V0TW9udGgiLCJkIiwiZ2V0RGF0ZSIsImgiLCJnZXRIb3VycyIsIm1pIiwiZ2V0TWludXRlcyIsInMiLCJnZXRTZWNvbmRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsT0FBRCxFQUFhO0FBQUEsdUJBQ0NBLE9BQU8sQ0FBQ0MsS0FBUixDQUFjLEdBQWQsQ0FERDtBQUFBO0FBQUEsTUFDbkJDLEdBRG1CO0FBQUEsTUFDZEMsS0FEYztBQUFBLE1BQ1BDLElBRE87O0FBRTFCLFNBQU8sSUFBSUMsSUFBSixDQUFTRCxJQUFULEVBQWVELEtBQUssR0FBRyxDQUF2QixFQUEwQkQsR0FBMUIsQ0FBUDtBQUNELENBSEQ7O0FBS0EsU0FBU0ksZ0JBQVQsR0FBNEI7QUFDeEIsTUFBSUMsS0FBSyxHQUFHLElBQUlGLElBQUosRUFBWjtBQUNBLE1BQUlHLENBQUMsR0FBR0QsS0FBSyxDQUFDRSxXQUFOLEVBQVIsQ0FGd0IsQ0FHeEI7O0FBQ0EsTUFBSUMsQ0FBQyxHQUFHSCxLQUFLLENBQUNJLFFBQU4sS0FBbUIsQ0FBM0I7QUFDQSxNQUFJQyxDQUFDLEdBQUdMLEtBQUssQ0FBQ00sT0FBTixFQUFSO0FBQ0EsTUFBSUMsQ0FBQyxHQUFHUCxLQUFLLENBQUNRLFFBQU4sRUFBUjtBQUNBLE1BQUlDLEVBQUUsR0FBR1QsS0FBSyxDQUFDVSxVQUFOLEVBQVQ7QUFDQSxNQUFJQyxDQUFDLEdBQUdYLEtBQUssQ0FBQ1ksVUFBTixFQUFSO0FBQ0EsU0FBT1gsQ0FBQyxHQUFHLEdBQUosR0FBVUUsQ0FBVixHQUFjLEdBQWQsR0FBb0JFLENBQXBCLEdBQXdCLEdBQXhCLEdBQThCRSxDQUE5QixHQUFrQyxHQUFsQyxHQUF3Q0UsRUFBeEMsR0FBNkMsR0FBN0MsR0FBbURFLENBQTFEO0FBQ0g7O0FBRUQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZXhwZXJpbWVudGF0aW9ucy9hcmRlbm5lcy5jNDhlYTNmYWU0OWJkNjY1NGM2Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdG9EYXRlID0gKGRhdGVTdHIpID0+IHtcbiAgY29uc3QgW2RheSwgbW9udGgsIHllYXJdID0gZGF0ZVN0ci5zcGxpdChcIi9cIilcbiAgcmV0dXJuIG5ldyBEYXRlKHllYXIsIG1vbnRoIC0gMSwgZGF5KVxufVxuXG5mdW5jdGlvbiBnZXRGb3JtYXR0ZWRUaW1lKCkge1xuICAgIHZhciB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgdmFyIHkgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xuICAgIC8vIEphdmFTY3JpcHQgbW9udGhzIGFyZSAwLWJhc2VkLlxuICAgIHZhciBtID0gdG9kYXkuZ2V0TW9udGgoKSArIDE7XG4gICAgdmFyIGQgPSB0b2RheS5nZXREYXRlKCk7XG4gICAgdmFyIGggPSB0b2RheS5nZXRIb3VycygpO1xuICAgIHZhciBtaSA9IHRvZGF5LmdldE1pbnV0ZXMoKTtcbiAgICB2YXIgcyA9IHRvZGF5LmdldFNlY29uZHMoKTtcbiAgICByZXR1cm4geSArIFwiX1wiICsgbSArIFwiX1wiICsgZCArIFwiX1wiICsgaCArIFwiX1wiICsgbWkgKyBcIl9cIiArIHM7XG59XG5cbmV4cG9ydCB7IHRvRGF0ZSwgZ2V0Rm9ybWF0dGVkVGltZSB9XG4iXSwic291cmNlUm9vdCI6IiJ9