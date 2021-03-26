webpackHotUpdate_N_E("pages/cnaf/instruction",{

/***/ "./lib/admin.js":
/*!**********************!*\
  !*** ./lib/admin.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

var _defineProperty = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

var _toConsumableArray = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");

var _asyncToGenerator = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var nameMap = {
  "Test": "Instruction",
  "Test - CNAF - Instruction": "Instruction",
  "Test - CNAF - Bénéficiaire": "Bénéficiaire",
  "Test - Pole Emploi": "Pôle Emploi"
};
var MATOMO_URL = "https://stats.data.gouv.fr";
var MATOMO_SITE_ID = "159";

function fetchLog(_x, _x2) {
  return _fetchLog.apply(this, arguments);
}

function _fetchLog() {
  _fetchLog = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(token, name) {
    var _ref;

    var url, response, json, events, data;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = "".concat(MATOMO_URL, "/index.php?date=today&expanded=1&filter_limit=25&format=JSON&idSite=").concat(MATOMO_SITE_ID, "&method=Events.getCategory&module=API&period=month&segment=&token_auth=").concat(token);
            _context.next = 3;
            return fetch(url);

          case 3:
            response = _context.sent;
            _context.next = 6;
            return response.json();

          case 6:
            json = _context.sent;
            events = (_ref = []).concat.apply(_ref, _toConsumableArray(json.filter(function (i) {
              return nameMap[i.label] == name;
            }).map(function (category) {
              return category.subtable;
            })));
            data = events.map(function (e) {
              return JSON.parse(e.label);
            }).map(function (item) {
              // Legacy typo management
              var timestamp = item.timestamp || item.timetamp;
              return _objectSpread({
                seed: Math.random(),
                timestamp: timestamp,
                duration_in_second: item.duration,
                email: {
                  total: item.withEmail,
                  withAutorisation: item.withAutorisation,
                  withExplicitRefusal: item.withExplicitRefusal,
                  withoutAutorisationDetails: item.withoutAutorisationDetails
                },
                cDate: new Date(timestamp),
                phone: {}
              }, item);
            });
            data.sort(function (a, b) {
              return a.cDate - b.cDate;
            });
            return _context.abrupt("return", data);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _fetchLog.apply(this, arguments);
}

exports.fetchLog = fetchLog;

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2FkbWluLmpzIl0sIm5hbWVzIjpbIm5hbWVNYXAiLCJNQVRPTU9fVVJMIiwicHJvY2VzcyIsIk1BVE9NT19TSVRFX0lEIiwiZmV0Y2hMb2ciLCJ0b2tlbiIsIm5hbWUiLCJ1cmwiLCJmZXRjaCIsInJlc3BvbnNlIiwianNvbiIsImV2ZW50cyIsImNvbmNhdCIsImZpbHRlciIsImkiLCJsYWJlbCIsIm1hcCIsImNhdGVnb3J5Iiwic3VidGFibGUiLCJkYXRhIiwiZSIsIkpTT04iLCJwYXJzZSIsIml0ZW0iLCJ0aW1lc3RhbXAiLCJ0aW1ldGFtcCIsInNlZWQiLCJNYXRoIiwicmFuZG9tIiwiZHVyYXRpb25faW5fc2Vjb25kIiwiZHVyYXRpb24iLCJlbWFpbCIsInRvdGFsIiwid2l0aEVtYWlsIiwid2l0aEF1dG9yaXNhdGlvbiIsIndpdGhFeHBsaWNpdFJlZnVzYWwiLCJ3aXRob3V0QXV0b3Jpc2F0aW9uRGV0YWlscyIsImNEYXRlIiwiRGF0ZSIsInBob25lIiwic29ydCIsImEiLCJiIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsT0FBTyxHQUFHO0FBQ2QsVUFBUSxhQURNO0FBRWQsK0JBQTZCLGFBRmY7QUFHZCxnQ0FBOEIsY0FIaEI7QUFJZCx3QkFBc0I7QUFKUixDQUFoQjtBQU9BLElBQU1DLFVBQVUsR0FBR0MsNEJBQW5CO0FBQ0EsSUFBTUMsY0FBYyxHQUFHRCxLQUF2Qjs7U0FFZUUsUTs7Ozs7dUVBQWYsaUJBQXdCQyxLQUF4QixFQUErQkMsSUFBL0I7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1FDLGVBRFIsYUFDaUJOLFVBRGpCLGlGQUNrR0UsY0FEbEcsb0ZBQzBMRSxLQUQxTDtBQUFBO0FBQUEsbUJBRXlCRyxLQUFLLENBQUNELEdBQUQsQ0FGOUI7O0FBQUE7QUFFUUUsb0JBRlI7QUFBQTtBQUFBLG1CQUdxQkEsUUFBUSxDQUFDQyxJQUFULEVBSHJCOztBQUFBO0FBR1FBLGdCQUhSO0FBSVFDLGtCQUpSLEdBSWlCLFlBQUdDLE1BQUgsZ0NBQWFGLElBQUksQ0FBQ0csTUFBTCxDQUFZLFVBQUFDLENBQUM7QUFBQSxxQkFBSWQsT0FBTyxDQUFDYyxDQUFDLENBQUNDLEtBQUgsQ0FBUCxJQUFvQlQsSUFBeEI7QUFBQSxhQUFiLEVBQTJDVSxHQUEzQyxDQUErQyxVQUFBQyxRQUFRO0FBQUEscUJBQUlBLFFBQVEsQ0FBQ0MsUUFBYjtBQUFBLGFBQXZELENBQWIsRUFKakI7QUFLUUMsZ0JBTFIsR0FLZVIsTUFBTSxDQUFDSyxHQUFQLENBQVcsVUFBQUksQ0FBQztBQUFBLHFCQUFJQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0YsQ0FBQyxDQUFDTCxLQUFiLENBQUo7QUFBQSxhQUFaLEVBQXFDQyxHQUFyQyxDQUF5QyxVQUFBTyxJQUFJLEVBQUk7QUFFNUQ7QUFDQSxrQkFBTUMsU0FBUyxHQUFHRCxJQUFJLENBQUNDLFNBQUwsSUFBa0JELElBQUksQ0FBQ0UsUUFBekM7QUFDQTtBQUNFQyxvQkFBSSxFQUFFQyxJQUFJLENBQUNDLE1BQUwsRUFEUjtBQUVFSix5QkFBUyxFQUFUQSxTQUZGO0FBR0VLLGtDQUFrQixFQUFFTixJQUFJLENBQUNPLFFBSDNCO0FBSUVDLHFCQUFLLEVBQUU7QUFDTEMsdUJBQUssRUFBRVQsSUFBSSxDQUFDVSxTQURQO0FBRUxDLGtDQUFnQixFQUFFWCxJQUFJLENBQUNXLGdCQUZsQjtBQUdMQyxxQ0FBbUIsRUFBRVosSUFBSSxDQUFDWSxtQkFIckI7QUFJTEMsNENBQTBCLEVBQUViLElBQUksQ0FBQ2E7QUFKNUIsaUJBSlQ7QUFVRUMscUJBQUssRUFBRyxJQUFJQyxJQUFKLENBQVNkLFNBQVQsQ0FWVjtBQVdFZSxxQkFBSyxFQUFFO0FBWFQsaUJBWUtoQixJQVpMO0FBY0QsYUFsQlksQ0FMZjtBQXlCRUosZ0JBQUksQ0FBQ3FCLElBQUwsQ0FBVSxVQUFDQyxDQUFELEVBQUdDLENBQUg7QUFBQSxxQkFBU0QsQ0FBQyxDQUFDSixLQUFGLEdBQVVLLENBQUMsQ0FBQ0wsS0FBckI7QUFBQSxhQUFWO0FBekJGLDZDQTBCU2xCLElBMUJUOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7QUE2QkF3QixPQUFPLENBQUN2QyxRQUFSLEdBQW1CQSxRQUFuQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jbmFmL2luc3RydWN0aW9uLmZiNjNjYTFmYzY5ZWU1NTZkMTU5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBuYW1lTWFwID0ge1xuICBcIlRlc3RcIjogXCJJbnN0cnVjdGlvblwiLFxuICBcIlRlc3QgLSBDTkFGIC0gSW5zdHJ1Y3Rpb25cIjogXCJJbnN0cnVjdGlvblwiLFxuICBcIlRlc3QgLSBDTkFGIC0gQsOpbsOpZmljaWFpcmVcIjogXCJCw6luw6lmaWNpYWlyZVwiLFxuICBcIlRlc3QgLSBQb2xlIEVtcGxvaVwiOiBcIlDDtGxlIEVtcGxvaVwiLFxufVxuXG5jb25zdCBNQVRPTU9fVVJMID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTUFUT01PX1VSTFxuY29uc3QgTUFUT01PX1NJVEVfSUQgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19NQVRPTU9fU0lURV9JRFxuXG5hc3luYyBmdW5jdGlvbiBmZXRjaExvZyh0b2tlbiwgbmFtZSkge1xuICBjb25zdCB1cmwgPSBgJHtNQVRPTU9fVVJMfS9pbmRleC5waHA/ZGF0ZT10b2RheSZleHBhbmRlZD0xJmZpbHRlcl9saW1pdD0yNSZmb3JtYXQ9SlNPTiZpZFNpdGU9JHtNQVRPTU9fU0lURV9JRH0mbWV0aG9kPUV2ZW50cy5nZXRDYXRlZ29yeSZtb2R1bGU9QVBJJnBlcmlvZD1tb250aCZzZWdtZW50PSZ0b2tlbl9hdXRoPSR7dG9rZW59YFxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybClcbiAgY29uc3QganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICBjb25zdCBldmVudHMgPSBbXS5jb25jYXQoLi4uanNvbi5maWx0ZXIoaSA9PiBuYW1lTWFwW2kubGFiZWxdID09IG5hbWUpLm1hcChjYXRlZ29yeSA9PiBjYXRlZ29yeS5zdWJ0YWJsZSkpXG4gIGNvbnN0IGRhdGEgPSBldmVudHMubWFwKGUgPT4gSlNPTi5wYXJzZShlLmxhYmVsKSkubWFwKGl0ZW0gPT4ge1xuXG4gICAgLy8gTGVnYWN5IHR5cG8gbWFuYWdlbWVudFxuICAgIGNvbnN0IHRpbWVzdGFtcCA9IGl0ZW0udGltZXN0YW1wIHx8IGl0ZW0udGltZXRhbXBcbiAgICByZXR1cm4ge1xuICAgICAgc2VlZDogTWF0aC5yYW5kb20oKSxcbiAgICAgIHRpbWVzdGFtcCxcbiAgICAgIGR1cmF0aW9uX2luX3NlY29uZDogaXRlbS5kdXJhdGlvbixcbiAgICAgIGVtYWlsOiB7XG4gICAgICAgIHRvdGFsOiBpdGVtLndpdGhFbWFpbCxcbiAgICAgICAgd2l0aEF1dG9yaXNhdGlvbjogaXRlbS53aXRoQXV0b3Jpc2F0aW9uLFxuICAgICAgICB3aXRoRXhwbGljaXRSZWZ1c2FsOiBpdGVtLndpdGhFeHBsaWNpdFJlZnVzYWwsXG4gICAgICAgIHdpdGhvdXRBdXRvcmlzYXRpb25EZXRhaWxzOiBpdGVtLndpdGhvdXRBdXRvcmlzYXRpb25EZXRhaWxzLFxuICAgICAgfSxcbiAgICAgIGNEYXRlIDogbmV3IERhdGUodGltZXN0YW1wKSxcbiAgICAgIHBob25lOiB7fSxcbiAgICAgIC4uLml0ZW1cbiAgICB9XG4gIH0pXG5cbiAgZGF0YS5zb3J0KChhLGIpID0+IGEuY0RhdGUgLSBiLmNEYXRlKVxuICByZXR1cm4gZGF0YVxufVxuXG5leHBvcnRzLmZldGNoTG9nID0gZmV0Y2hMb2dcbiJdLCJzb3VyY2VSb290IjoiIn0=