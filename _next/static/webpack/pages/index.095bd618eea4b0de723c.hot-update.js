webpackHotUpdate_N_E("pages/index",{

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mailer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mailer */ "./components/mailer.js");


var _jsxFileName = "/home/q/code/qblanc/beta.gouv/analyse-flux-insertion/components/layout.js",
    _s2 = $RefreshSig$();






function Layout(_ref) {
  _s2();

  var _s = $RefreshSig$();

  var children = _ref.children,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'Analyser les flux de données dans l\'insertion' : _ref$title,
      fileHandler = _ref.fileHandler;
  var defaultColor = 'white';

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(defaultColor),
      color = _useState[0],
      setColor = _useState[1];

  var dragHandler = function dragHandler(color) {
    _s();

    return Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (event) {
      setColor(color);
      event.preventDefault(); // Prevent file from being open on drop
    });
  };

  _s(dragHandler, "epj4qY15NHsef74wNqHIp5fdZmg=");

  var dropHandler = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (event) {
    event.preventDefault();
    setColor(defaultColor);

    for (var i = 0; i < event.dataTransfer.files.length; i++) {
      fileHandler(event.dataTransfer.files[i]);
    }
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    style: {
      backgroundColor: color
    },
    onDragOver: dragHandler('#0070f3'),
    onDragLeave: dragHandler(defaultColor),
    onDrop: dropHandler,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        charSet: "utf-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        children: "data.insertion"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            children: "Accueil"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, this), ' ', "|", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/mentions-legales",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            children: "Mentions l\xE9gales"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, this), ' ', "|", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mailer__WEBPACK_IMPORTED_MODULE_5__["default"], {
          children: "Contact"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, this), children, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.footer,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mailer__WEBPACK_IMPORTED_MODULE_5__["default"], {
        children: "Propuls\xE9 par data.insertion"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }, this);
}

_s2(Layout, "NsbKgc0vOqtEiUAj6vlDUOOvG6w=");

_c = Layout;

var _c;

$RefreshReg$(_c, "Layout");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQuanMiXSwibmFtZXMiOlsiTGF5b3V0IiwiY2hpbGRyZW4iLCJ0aXRsZSIsImZpbGVIYW5kbGVyIiwiZGVmYXVsdENvbG9yIiwidXNlU3RhdGUiLCJjb2xvciIsInNldENvbG9yIiwiZHJhZ0hhbmRsZXIiLCJ1c2VDYWxsYmFjayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJkcm9wSGFuZGxlciIsImkiLCJkYXRhVHJhbnNmZXIiLCJmaWxlcyIsImxlbmd0aCIsImJhY2tncm91bmRDb2xvciIsInN0eWxlcyIsImZvb3RlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHZSxTQUFTQSxNQUFULE9BSVo7QUFBQTs7QUFBQTs7QUFBQSxNQUhEQyxRQUdDLFFBSERBLFFBR0M7QUFBQSx3QkFGREMsS0FFQztBQUFBLE1BRkRBLEtBRUMsMkJBRk8sZ0RBRVA7QUFBQSxNQUREQyxXQUNDLFFBRERBLFdBQ0M7QUFDRCxNQUFNQyxZQUFZLEdBQUcsT0FBckI7O0FBREMsa0JBRXlCQyxzREFBUSxDQUFDRCxZQUFELENBRmpDO0FBQUEsTUFFTUUsS0FGTjtBQUFBLE1BRWFDLFFBRmI7O0FBSUQsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQUYsS0FBSztBQUFBOztBQUFBLFdBQUlHLHlEQUFXLENBQUMsVUFBQ0MsS0FBRCxFQUFXO0FBQ2xESCxjQUFRLENBQUNELEtBQUQsQ0FBUjtBQUNBSSxXQUFLLENBQUNDLGNBQU4sR0FGa0QsQ0FFM0I7QUFDeEIsS0FIdUMsQ0FBZjtBQUFBLEdBQXpCOztBQUpDLEtBSUtILFdBSkw7O0FBU0QsTUFBTUksV0FBVyxHQUFHSCx5REFBVyxDQUFDLFVBQUNDLEtBQUQsRUFBVztBQUN6Q0EsU0FBSyxDQUFDQyxjQUFOO0FBQ0FKLFlBQVEsQ0FBQ0gsWUFBRCxDQUFSOztBQUNBLFNBQUssSUFBSVMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBQ0gsS0FBSyxDQUFDSSxZQUFOLENBQW1CQyxLQUFuQixDQUF5QkMsTUFBM0MsRUFBbURILENBQUMsRUFBcEQsRUFBd0Q7QUFDdERWLGlCQUFXLENBQUNPLEtBQUssQ0FBQ0ksWUFBTixDQUFtQkMsS0FBbkIsQ0FBeUJGLENBQXpCLENBQUQsQ0FBWDtBQUNEO0FBQ0YsR0FOOEIsQ0FBL0I7QUFRQSxzQkFDRTtBQUFLLFNBQUssRUFBRTtBQUFDSSxxQkFBZSxFQUFDWDtBQUFqQixLQUFaO0FBQ0UsY0FBVSxFQUFFRSxXQUFXLENBQUMsU0FBRCxDQUR6QjtBQUVFLGVBQVcsRUFBRUEsV0FBVyxDQUFDSixZQUFELENBRjFCO0FBR0UsVUFBTSxFQUFFUSxXQUhWO0FBQUEsNEJBSUUscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDRTtBQUFBLGtCQUFRVjtBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQU0sZUFBTyxFQUFDO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBR0U7QUFBTSxZQUFJLEVBQUMsVUFBWDtBQUFzQixlQUFPLEVBQUM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLGVBU0U7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBR0U7QUFBQSxnQ0FDRSxxRUFBQyxnREFBRDtBQUFNLGNBQUksRUFBQyxHQUFYO0FBQUEsaUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLEVBR1UsR0FIVixPQUdnQixHQUhoQixlQUlFLHFFQUFDLGdEQUFEO0FBQU0sY0FBSSxFQUFDLG1CQUFYO0FBQUEsaUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpGLEVBTVUsR0FOVixPQU1nQixHQU5oQixlQU9FLHFFQUFDLCtDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVRGLEVBeUJHRCxRQXpCSCxlQTJCRTtBQUFRLGVBQVMsRUFBRWlCLDhEQUFNLENBQUNDLE1BQTFCO0FBQUEsNkJBQ0UscUVBQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBM0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBaUNEOztJQXREdUJuQixNOztLQUFBQSxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjA5NWJkNjE4ZWVhNGIwZGU3MjNjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZUNhbGxiYWNrLCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgTWFpbGVyIGZyb20gJy4vbWFpbGVyJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCh7XG4gIGNoaWxkcmVuLFxuICB0aXRsZSA9ICdBbmFseXNlciBsZXMgZmx1eCBkZSBkb25uw6llcyBkYW5zIGxcXCdpbnNlcnRpb24nLFxuICBmaWxlSGFuZGxlcixcbn0pIHtcbiAgY29uc3QgZGVmYXVsdENvbG9yID0gJ3doaXRlJ1xuICBjb25zdCBbY29sb3IsIHNldENvbG9yXSA9IHVzZVN0YXRlKGRlZmF1bHRDb2xvcilcblxuICBjb25zdCBkcmFnSGFuZGxlciA9IGNvbG9yID0+IHVzZUNhbGxiYWNrKChldmVudCkgPT4ge1xuICAgIHNldENvbG9yKGNvbG9yKVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCkgLy8gUHJldmVudCBmaWxlIGZyb20gYmVpbmcgb3BlbiBvbiBkcm9wXG4gIH0pXG5cbiAgY29uc3QgZHJvcEhhbmRsZXIgPSB1c2VDYWxsYmFjaygoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgc2V0Q29sb3IoZGVmYXVsdENvbG9yKVxuICAgIGZvciAodmFyIGkgPSAwOyBpPGV2ZW50LmRhdGFUcmFuc2Zlci5maWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgZmlsZUhhbmRsZXIoZXZlbnQuZGF0YVRyYW5zZmVyLmZpbGVzW2ldKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6Y29sb3J9fVxuICAgICAgb25EcmFnT3Zlcj17ZHJhZ0hhbmRsZXIoJyMwMDcwZjMnKX1cbiAgICAgIG9uRHJhZ0xlYXZlPXtkcmFnSGFuZGxlcihkZWZhdWx0Q29sb3IpfVxuICAgICAgb25Ecm9wPXtkcm9wSGFuZGxlcn0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8aGVhZGVyPlxuICAgICAgICA8aDM+ZGF0YS5pbnNlcnRpb248L2gzPlxuXG4gICAgICAgIDxuYXY+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgIDxhPkFjY3VlaWw8L2E+XG4gICAgICAgICAgPC9MaW5rPnsnICd9fHsnICd9XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9tZW50aW9ucy1sZWdhbGVzXCI+XG4gICAgICAgICAgICA8YT5NZW50aW9ucyBsw6lnYWxlczwvYT5cbiAgICAgICAgICA8L0xpbms+eycgJ318eycgJ31cbiAgICAgICAgICA8TWFpbGVyPlxuICAgICAgICAgICAgQ29udGFjdFxuICAgICAgICAgIDwvTWFpbGVyPlxuICAgICAgICA8L25hdj5cbiAgICAgIDwvaGVhZGVyPlxuXG4gICAgICB7Y2hpbGRyZW59XG5cbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cbiAgICAgICAgPE1haWxlcj5Qcm9wdWxzw6kgcGFyIGRhdGEuaW5zZXJ0aW9uPC9NYWlsZXI+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==