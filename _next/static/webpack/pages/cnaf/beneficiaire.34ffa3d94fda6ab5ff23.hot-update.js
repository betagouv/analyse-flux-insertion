webpackHotUpdate_N_E("pages/cnaf/beneficiaire",{

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
                duration: "".concat(duration / 1000, "s"),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2FkbWluLmpzIl0sIm5hbWVzIjpbIm5hbWVNYXAiLCJNQVRPTU9fVVJMIiwicHJvY2VzcyIsIk1BVE9NT19TSVRFX0lEIiwiZmV0Y2hMb2ciLCJ0b2tlbiIsIm5hbWUiLCJ1cmwiLCJmZXRjaCIsInJlc3BvbnNlIiwianNvbiIsImV2ZW50cyIsImNvbmNhdCIsImZpbHRlciIsImkiLCJsYWJlbCIsIm1hcCIsImNhdGVnb3J5Iiwic3VidGFibGUiLCJkYXRhIiwiZSIsIkpTT04iLCJwYXJzZSIsIml0ZW0iLCJ0aW1lc3RhbXAiLCJ0aW1ldGFtcCIsInNlZWQiLCJNYXRoIiwicmFuZG9tIiwiZHVyYXRpb24iLCJlbWFpbCIsInRvdGFsIiwid2l0aEVtYWlsIiwid2l0aEF1dG9yaXNhdGlvbiIsIndpdGhFeHBsaWNpdFJlZnVzYWwiLCJ3aXRob3V0QXV0b3Jpc2F0aW9uRGV0YWlscyIsImNEYXRlIiwiRGF0ZSIsInBob25lIiwic29ydCIsImEiLCJiIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsT0FBTyxHQUFHO0FBQ2QsVUFBUSxhQURNO0FBRWQsK0JBQTZCLGFBRmY7QUFHZCxnQ0FBOEIsY0FIaEI7QUFJZCx3QkFBc0I7QUFKUixDQUFoQjtBQU9BLElBQU1DLFVBQVUsR0FBR0MsNEJBQW5CO0FBQ0EsSUFBTUMsY0FBYyxHQUFHRCxLQUF2Qjs7U0FFZUUsUTs7Ozs7dUVBQWYsaUJBQXdCQyxLQUF4QixFQUErQkMsSUFBL0I7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1FDLGVBRFIsYUFDaUJOLFVBRGpCLGlGQUNrR0UsY0FEbEcsb0ZBQzBMRSxLQUQxTDtBQUFBO0FBQUEsbUJBRXlCRyxLQUFLLENBQUNELEdBQUQsQ0FGOUI7O0FBQUE7QUFFUUUsb0JBRlI7QUFBQTtBQUFBLG1CQUdxQkEsUUFBUSxDQUFDQyxJQUFULEVBSHJCOztBQUFBO0FBR1FBLGdCQUhSO0FBSVFDLGtCQUpSLEdBSWlCLFlBQUdDLE1BQUgsZ0NBQWFGLElBQUksQ0FBQ0csTUFBTCxDQUFZLFVBQUFDLENBQUM7QUFBQSxxQkFBSWQsT0FBTyxDQUFDYyxDQUFDLENBQUNDLEtBQUgsQ0FBUCxJQUFvQlQsSUFBeEI7QUFBQSxhQUFiLEVBQTJDVSxHQUEzQyxDQUErQyxVQUFBQyxRQUFRO0FBQUEscUJBQUlBLFFBQVEsQ0FBQ0MsUUFBYjtBQUFBLGFBQXZELENBQWIsRUFKakI7QUFLUUMsZ0JBTFIsR0FLZVIsTUFBTSxDQUFDSyxHQUFQLENBQVcsVUFBQUksQ0FBQztBQUFBLHFCQUFJQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0YsQ0FBQyxDQUFDTCxLQUFiLENBQUo7QUFBQSxhQUFaLEVBQXFDQyxHQUFyQyxDQUF5QyxVQUFBTyxJQUFJLEVBQUk7QUFFNUQ7QUFDQSxrQkFBTUMsU0FBUyxHQUFHRCxJQUFJLENBQUNDLFNBQUwsSUFBa0JELElBQUksQ0FBQ0UsUUFBekM7QUFDQTtBQUNFQyxvQkFBSSxFQUFFQyxJQUFJLENBQUNDLE1BQUwsRUFEUjtBQUVFSix5QkFBUyxFQUFUQSxTQUZGO0FBR0VLLHdCQUFRLFlBQUtBLFFBQVEsR0FBQyxJQUFkLE1BSFY7QUFJRUMscUJBQUssRUFBRTtBQUNMQyx1QkFBSyxFQUFFUixJQUFJLENBQUNTLFNBRFA7QUFFTEMsa0NBQWdCLEVBQUVWLElBQUksQ0FBQ1UsZ0JBRmxCO0FBR0xDLHFDQUFtQixFQUFFWCxJQUFJLENBQUNXLG1CQUhyQjtBQUlMQyw0Q0FBMEIsRUFBRVosSUFBSSxDQUFDWTtBQUo1QixpQkFKVDtBQVVFQyxxQkFBSyxFQUFHLElBQUlDLElBQUosQ0FBU2IsU0FBVCxDQVZWO0FBV0VjLHFCQUFLLEVBQUU7QUFYVCxpQkFZS2YsSUFaTDtBQWNELGFBbEJZLENBTGY7QUF5QkVKLGdCQUFJLENBQUNvQixJQUFMLENBQVUsVUFBQ0MsQ0FBRCxFQUFHQyxDQUFIO0FBQUEscUJBQVNELENBQUMsQ0FBQ0osS0FBRixHQUFVSyxDQUFDLENBQUNMLEtBQXJCO0FBQUEsYUFBVjtBQXpCRiw2Q0EwQlNqQixJQTFCVDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O0FBNkJBdUIsT0FBTyxDQUFDdEMsUUFBUixHQUFtQkEsUUFBbkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY25hZi9iZW5lZmljaWFpcmUuMzRmZmEzZDk0ZmRhNmFiNWZmMjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG5hbWVNYXAgPSB7XG4gIFwiVGVzdFwiOiBcIkluc3RydWN0aW9uXCIsXG4gIFwiVGVzdCAtIENOQUYgLSBJbnN0cnVjdGlvblwiOiBcIkluc3RydWN0aW9uXCIsXG4gIFwiVGVzdCAtIENOQUYgLSBCw6luw6lmaWNpYWlyZVwiOiBcIkLDqW7DqWZpY2lhaXJlXCIsXG4gIFwiVGVzdCAtIFBvbGUgRW1wbG9pXCI6IFwiUMO0bGUgRW1wbG9pXCIsXG59XG5cbmNvbnN0IE1BVE9NT19VUkwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19NQVRPTU9fVVJMXG5jb25zdCBNQVRPTU9fU0lURV9JRCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX01BVE9NT19TSVRFX0lEXG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoTG9nKHRva2VuLCBuYW1lKSB7XG4gIGNvbnN0IHVybCA9IGAke01BVE9NT19VUkx9L2luZGV4LnBocD9kYXRlPXRvZGF5JmV4cGFuZGVkPTEmZmlsdGVyX2xpbWl0PTI1JmZvcm1hdD1KU09OJmlkU2l0ZT0ke01BVE9NT19TSVRFX0lEfSZtZXRob2Q9RXZlbnRzLmdldENhdGVnb3J5Jm1vZHVsZT1BUEkmcGVyaW9kPW1vbnRoJnNlZ21lbnQ9JnRva2VuX2F1dGg9JHt0b2tlbn1gXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKVxuICBjb25zdCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gIGNvbnN0IGV2ZW50cyA9IFtdLmNvbmNhdCguLi5qc29uLmZpbHRlcihpID0+IG5hbWVNYXBbaS5sYWJlbF0gPT0gbmFtZSkubWFwKGNhdGVnb3J5ID0+IGNhdGVnb3J5LnN1YnRhYmxlKSlcbiAgY29uc3QgZGF0YSA9IGV2ZW50cy5tYXAoZSA9PiBKU09OLnBhcnNlKGUubGFiZWwpKS5tYXAoaXRlbSA9PiB7XG5cbiAgICAvLyBMZWdhY3kgdHlwbyBtYW5hZ2VtZW50XG4gICAgY29uc3QgdGltZXN0YW1wID0gaXRlbS50aW1lc3RhbXAgfHwgaXRlbS50aW1ldGFtcFxuICAgIHJldHVybiB7XG4gICAgICBzZWVkOiBNYXRoLnJhbmRvbSgpLFxuICAgICAgdGltZXN0YW1wLFxuICAgICAgZHVyYXRpb246IGAke2R1cmF0aW9uLzEwMDB9c2AsXG4gICAgICBlbWFpbDoge1xuICAgICAgICB0b3RhbDogaXRlbS53aXRoRW1haWwsXG4gICAgICAgIHdpdGhBdXRvcmlzYXRpb246IGl0ZW0ud2l0aEF1dG9yaXNhdGlvbixcbiAgICAgICAgd2l0aEV4cGxpY2l0UmVmdXNhbDogaXRlbS53aXRoRXhwbGljaXRSZWZ1c2FsLFxuICAgICAgICB3aXRob3V0QXV0b3Jpc2F0aW9uRGV0YWlsczogaXRlbS53aXRob3V0QXV0b3Jpc2F0aW9uRGV0YWlscyxcbiAgICAgIH0sXG4gICAgICBjRGF0ZSA6IG5ldyBEYXRlKHRpbWVzdGFtcCksXG4gICAgICBwaG9uZToge30sXG4gICAgICAuLi5pdGVtXG4gICAgfVxuICB9KVxuXG4gIGRhdGEuc29ydCgoYSxiKSA9PiBhLmNEYXRlIC0gYi5jRGF0ZSlcbiAgcmV0dXJuIGRhdGFcbn1cblxuZXhwb3J0cy5mZXRjaExvZyA9IGZldGNoTG9nXG4iXSwic291cmNlUm9vdCI6IiJ9