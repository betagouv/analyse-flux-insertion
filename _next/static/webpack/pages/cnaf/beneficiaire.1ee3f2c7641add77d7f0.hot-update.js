webpackHotUpdate_N_E("pages/cnaf/beneficiaire",{

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
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        charSet: "utf-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            children: "Accueil"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, this), ' ', "|", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/mentions-legales",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            children: "Mentions l\xE9gales"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, this), ' ', "|", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mailer__WEBPACK_IMPORTED_MODULE_5__["default"], {
          children: "Contact"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, this), children, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.footer,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mailer__WEBPACK_IMPORTED_MODULE_5__["default"], {
        children: "Propuls\xE9 par data.insertion"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
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

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/Home.module.css":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./styles/Home.module.css ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".Home_container__1EcsU {\n  min-height: 100vh;\n  padding: 0 0.5rem;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: flex;\n  -webkit-flex-direction: column;\n     -moz-box-orient: vertical;\n     -moz-box-direction: normal;\n          flex-direction: column;\n  -webkit-justify-content: center;\n     -moz-box-pack: center;\n          justify-content: center;\n  -webkit-align-items: center;\n     -moz-box-align: center;\n          align-items: center;\n}\n\n.Home_content__2fqOz {\n  max-width: 800px;\n}\n\n.Home_main__1x8gC {\n  padding: 5rem 0;\n  -webkit-flex: 1 1;\n     -moz-box-flex: 1;\n          flex: 1 1;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: flex;\n  -webkit-flex-direction: column;\n     -moz-box-orient: vertical;\n     -moz-box-direction: normal;\n          flex-direction: column;\n  -webkit-justify-content: center;\n     -moz-box-pack: center;\n          justify-content: center;\n  -webkit-align-items: center;\n     -moz-box-align: center;\n          align-items: center;\n}\n\n.Home_footer__1WdhD {\n  width: 100%;\n  height: 100px;\n  border-top: 1px solid #eaeaea;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: flex;\n  -webkit-justify-content: center;\n     -moz-box-pack: center;\n          justify-content: center;\n  -webkit-align-items: center;\n     -moz-box-align: center;\n          align-items: center;\n}\n\n.Home_footer__1WdhD img {\n  margin-left: 0.5rem;\n}\n\n.Home_footer__1WdhD a {\n  display: -webkit-flex;\n  display: -moz-box;\n  display: flex;\n  -webkit-justify-content: center;\n     -moz-box-pack: center;\n          justify-content: center;\n  -webkit-align-items: center;\n     -moz-box-align: center;\n          align-items: center;\n}\n\n.Home_title__3DjR7 a {\n  color: #0070f3;\n  text-decoration: none;\n}\n\n.Home_title__3DjR7 a:hover,\n.Home_title__3DjR7 a:focus,\n.Home_title__3DjR7 a:active {\n  text-decoration: underline;\n}\n\n.Home_title__3DjR7 {\n  margin: 0;\n  line-height: 1.15;\n  font-size: 4rem;\n}\n\n.Home_subtitle__3I2yI {\n  margin: 0;\n  line-height: 1.15;\n  font-size: 3rem;\n}\n\n.Home_title__3DjR7,\n.Home_subtitle__3I2yI,\n.Home_description__17Z4F {\n  text-align: center;\n}\n\n.Home_description__17Z4F,\n.Home_text__1sCQa {\n  line-height: 1.5;\n  font-size: 1.5rem;\n}\n\n.Home_code__axx2Y {\n  background: #fafafa;\n  border-radius: 5px;\n  padding: 0.75rem;\n  font-size: 1.1rem;\n  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,\n    Bitstream Vera Sans Mono, Courier New, monospace;\n}\n\n.Home_grid__2Ei2F {\n  display: -webkit-flex;\n  display: -moz-box;\n  display: flex;\n  -webkit-align-items: stretch;\n     -moz-box-align: stretch;\n          align-items: stretch;\n  -webkit-flex-wrap: wrap;\n          flex-wrap: wrap;\n  margin-top: 3rem;\n}\n\n.Home_grid__2Ei2F,\n.Home_text__1sCQa {\n  max-width: 800px;\n}\n\n.Home_card__2SdtB {\n  margin: 1rem;\n  -webkit-flex-basis: 45%;\n          flex-basis: 45%;\n  padding: 1.5rem;\n  text-align: left;\n  color: inherit;\n  text-decoration: none;\n  border: 1px solid #eaeaea;\n  border-radius: 10px;\n  -moz-transition: color 0.15s ease, border-color 0.15s ease;\n  transition: color 0.15s ease, border-color 0.15s ease;\n}\n\n.Home_card__2SdtB:hover,\n.Home_card__2SdtB:focus,\n.Home_card__2SdtB:active {\n  color: #0070f3;\n  border-color: #0070f3;\n}\n\n.Home_card__2SdtB h3 {\n  margin: 0 0 1rem 0;\n  font-size: 1.5rem;\n}\n\n.Home_card__2SdtB p {\n  margin: 0;\n  font-size: 1.25rem;\n  line-height: 1.5;\n}\n\n.Home_logo__1YbrH {\n  height: 1em;\n}\n\n@media (max-width: 600px) {\n  .Home_grid__2Ei2F {\n    -webkit-flex-direction: column;\n       -moz-box-orient: vertical;\n       -moz-box-direction: normal;\n            flex-direction: column;\n  }\n  .Home_grid__2Ei2F,\n  .Home_text__1sCQa {\n    width: 100%;\n  }\n}\n\n.Home_numeric__1Wnqa {\n  text-align: right;\n}\n", "",{"version":3,"sources":["webpack://styles/Home.module.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,qBAAa;EAAb,iBAAa;EAAb,aAAa;EACb,8BAAsB;KAAtB,yBAAsB;KAAtB,0BAAsB;UAAtB,sBAAsB;EACtB,+BAAuB;KAAvB,qBAAuB;UAAvB,uBAAuB;EACvB,2BAAmB;KAAnB,sBAAmB;UAAnB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,iBAAO;KAAP,gBAAO;UAAP,SAAO;EACP,qBAAa;EAAb,iBAAa;EAAb,aAAa;EACb,8BAAsB;KAAtB,yBAAsB;KAAtB,0BAAsB;UAAtB,sBAAsB;EACtB,+BAAuB;KAAvB,qBAAuB;UAAvB,uBAAuB;EACvB,2BAAmB;KAAnB,sBAAmB;UAAnB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,6BAA6B;EAC7B,qBAAa;EAAb,iBAAa;EAAb,aAAa;EACb,+BAAuB;KAAvB,qBAAuB;UAAvB,uBAAuB;EACvB,2BAAmB;KAAnB,sBAAmB;UAAnB,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,qBAAa;EAAb,iBAAa;EAAb,aAAa;EACb,+BAAuB;KAAvB,qBAAuB;UAAvB,uBAAuB;EACvB,2BAAmB;KAAnB,sBAAmB;UAAnB,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,qBAAqB;AACvB;;AAEA;;;EAGE,0BAA0B;AAC5B;;AAEA;EACE,SAAS;EACT,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,SAAS;EACT,iBAAiB;EACjB,eAAe;AACjB;;AAEA;;;EAGE,kBAAkB;AACpB;;AAEA;;EAEE,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,mBAAmB;EACnB,kBAAkB;EAClB,gBAAgB;EAChB,iBAAiB;EACjB;oDACkD;AACpD;;AAEA;EACE,qBAAa;EAAb,iBAAa;EAAb,aAAa;EACb,4BAAoB;KAApB,uBAAoB;UAApB,oBAAoB;EACpB,uBAAe;UAAf,eAAe;EACf,gBAAgB;AAClB;;AAEA;;EAEE,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,uBAAe;UAAf,eAAe;EACf,eAAe;EACf,gBAAgB;EAChB,cAAc;EACd,qBAAqB;EACrB,yBAAyB;EACzB,mBAAmB;EACnB,0DAAqD;EAArD,qDAAqD;AACvD;;AAEA;;;EAGE,cAAc;EACd,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,SAAS;EACT,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE;IACE,8BAAsB;OAAtB,yBAAsB;OAAtB,0BAAsB;YAAtB,sBAAsB;EACxB;EACA;;IAEE,WAAW;EACb;AACF;;AAEA;EACE,iBAAiB;AACnB","sourcesContent":[".container {\n  min-height: 100vh;\n  padding: 0 0.5rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.content {\n  max-width: 800px;\n}\n\n.main {\n  padding: 5rem 0;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.footer {\n  width: 100%;\n  height: 100px;\n  border-top: 1px solid #eaeaea;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.footer img {\n  margin-left: 0.5rem;\n}\n\n.footer a {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.title a {\n  color: #0070f3;\n  text-decoration: none;\n}\n\n.title a:hover,\n.title a:focus,\n.title a:active {\n  text-decoration: underline;\n}\n\n.title {\n  margin: 0;\n  line-height: 1.15;\n  font-size: 4rem;\n}\n\n.subtitle {\n  margin: 0;\n  line-height: 1.15;\n  font-size: 3rem;\n}\n\n.title,\n.subtitle,\n.description {\n  text-align: center;\n}\n\n.description,\n.text {\n  line-height: 1.5;\n  font-size: 1.5rem;\n}\n\n.code {\n  background: #fafafa;\n  border-radius: 5px;\n  padding: 0.75rem;\n  font-size: 1.1rem;\n  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,\n    Bitstream Vera Sans Mono, Courier New, monospace;\n}\n\n.grid {\n  display: flex;\n  align-items: stretch;\n  flex-wrap: wrap;\n  margin-top: 3rem;\n}\n\n.grid,\n.text {\n  max-width: 800px;\n}\n\n.card {\n  margin: 1rem;\n  flex-basis: 45%;\n  padding: 1.5rem;\n  text-align: left;\n  color: inherit;\n  text-decoration: none;\n  border: 1px solid #eaeaea;\n  border-radius: 10px;\n  transition: color 0.15s ease, border-color 0.15s ease;\n}\n\n.card:hover,\n.card:focus,\n.card:active {\n  color: #0070f3;\n  border-color: #0070f3;\n}\n\n.card h3 {\n  margin: 0 0 1rem 0;\n  font-size: 1.5rem;\n}\n\n.card p {\n  margin: 0;\n  font-size: 1.25rem;\n  line-height: 1.5;\n}\n\n.logo {\n  height: 1em;\n}\n\n@media (max-width: 600px) {\n  .grid {\n    flex-direction: column;\n  }\n  .grid,\n  .text {\n    width: 100%;\n  }\n}\n\n.numeric {\n  text-align: right;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": "Home_container__1EcsU",
	"content": "Home_content__2fqOz",
	"main": "Home_main__1x8gC",
	"footer": "Home_footer__1WdhD",
	"title": "Home_title__3DjR7",
	"subtitle": "Home_subtitle__3I2yI",
	"description": "Home_description__17Z4F",
	"text": "Home_text__1sCQa",
	"code": "Home_code__axx2Y",
	"grid": "Home_grid__2Ei2F",
	"card": "Home_card__2SdtB",
	"logo": "Home_logo__1YbrH",
	"numeric": "Home_numeric__1Wnqa"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MiXSwibmFtZXMiOlsiTGF5b3V0IiwiY2hpbGRyZW4iLCJ0aXRsZSIsImZpbGVIYW5kbGVyIiwiZGVmYXVsdENvbG9yIiwidXNlU3RhdGUiLCJjb2xvciIsInNldENvbG9yIiwiZHJhZ0hhbmRsZXIiLCJ1c2VDYWxsYmFjayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJkcm9wSGFuZGxlciIsImkiLCJkYXRhVHJhbnNmZXIiLCJmaWxlcyIsImxlbmd0aCIsImJhY2tncm91bmRDb2xvciIsInN0eWxlcyIsImZvb3RlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHZSxTQUFTQSxNQUFULE9BSVo7QUFBQTs7QUFBQTs7QUFBQSxNQUhEQyxRQUdDLFFBSERBLFFBR0M7QUFBQSx3QkFGREMsS0FFQztBQUFBLE1BRkRBLEtBRUMsMkJBRk8sZ0RBRVA7QUFBQSxNQUREQyxXQUNDLFFBRERBLFdBQ0M7QUFDRCxNQUFNQyxZQUFZLEdBQUcsT0FBckI7O0FBREMsa0JBRXlCQyxzREFBUSxDQUFDRCxZQUFELENBRmpDO0FBQUEsTUFFTUUsS0FGTjtBQUFBLE1BRWFDLFFBRmI7O0FBSUQsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQUYsS0FBSztBQUFBOztBQUFBLFdBQUlHLHlEQUFXLENBQUMsVUFBQ0MsS0FBRCxFQUFXO0FBQ2xESCxjQUFRLENBQUNELEtBQUQsQ0FBUjtBQUNBSSxXQUFLLENBQUNDLGNBQU4sR0FGa0QsQ0FFM0I7QUFDeEIsS0FIdUMsQ0FBZjtBQUFBLEdBQXpCOztBQUpDLEtBSUtILFdBSkw7O0FBU0QsTUFBTUksV0FBVyxHQUFHSCx5REFBVyxDQUFDLFVBQUNDLEtBQUQsRUFBVztBQUN6Q0EsU0FBSyxDQUFDQyxj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LHdCQUF3Qix1QkFBdUIscUJBQXFCLHNCQUFzQix5SUFBeUksR0FBRyxXQUFXLGtCQUFrQix5QkFBeUIsb0JBQW9CLHFCQUFxQixHQUFHLG1CQUFtQixxQkFBcUIsR0FBRyxXQUFXLGlCQUFpQixvQkFBb0Isb0JBQW9CLHFCQUFxQixtQkFBbUIsMEJBQTBCLDhCQUE4Qix3QkFBd0IsMERBQTBELEdBQUcsOENBQThDLG1CQUFtQiwwQkFBMEIsR0FBRyxjQUFjLHVCQUF1QixzQkFBc0IsR0FBRyxhQUFhLGNBQWMsdUJBQXVCLHFCQUFxQixHQUFHLFdBQVcsZ0JBQWdCLEdBQUcsK0JBQStCLFdBQVcsNkJBQTZCLEtBQUsscUJBQXFCLGtCQUFrQixLQUFLLEdBQUcsY0FBYyxzQkFBc0IsR0FBRyxxQkFBcUI7QUFDemtQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY25hZi9iZW5lZmljaWFpcmUuMWVlM2YyYzc2NDFhZGQ3N2Q3ZjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlQ2FsbGJhY2ssIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCBNYWlsZXIgZnJvbSAnLi9tYWlsZXInXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHtcbiAgY2hpbGRyZW4sXG4gIHRpdGxlID0gJ0FuYWx5c2VyIGxlcyBmbHV4IGRlIGRvbm7DqWVzIGRhbnMgbFxcJ2luc2VydGlvbicsXG4gIGZpbGVIYW5kbGVyLFxufSkge1xuICBjb25zdCBkZWZhdWx0Q29sb3IgPSAnd2hpdGUnXG4gIGNvbnN0IFtjb2xvciwgc2V0Q29sb3JdID0gdXNlU3RhdGUoZGVmYXVsdENvbG9yKVxuXG4gIGNvbnN0IGRyYWdIYW5kbGVyID0gY29sb3IgPT4gdXNlQ2FsbGJhY2soKGV2ZW50KSA9PiB7XG4gICAgc2V0Q29sb3IoY29sb3IpXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKSAvLyBQcmV2ZW50IGZpbGUgZnJvbSBiZWluZyBvcGVuIG9uIGRyb3BcbiAgfSlcblxuICBjb25zdCBkcm9wSGFuZGxlciA9IHVzZUNhbGxiYWNrKChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBzZXRDb2xvcihkZWZhdWx0Q29sb3IpXG4gICAgZm9yICh2YXIgaSA9IDA7IGk8ZXZlbnQuZGF0YVRyYW5zZmVyLmZpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBmaWxlSGFuZGxlcihldmVudC5kYXRhVHJhbnNmZXIuZmlsZXNbaV0pXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjpjb2xvcn19XG4gICAgICBvbkRyYWdPdmVyPXtkcmFnSGFuZGxlcignIzAwNzBmMycpfVxuICAgICAgb25EcmFnTGVhdmU9e2RyYWdIYW5kbGVyKGRlZmF1bHRDb2xvcil9XG4gICAgICBvbkRyb3A9e2Ryb3BIYW5kbGVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGhlYWRlcj5cbiAgICAgICAgPG5hdj5cbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgPGE+QWNjdWVpbDwvYT5cbiAgICAgICAgICA8L0xpbms+eycgJ318eycgJ31cbiAgICAgICAgICA8TGluayBocmVmPVwiL21lbnRpb25zLWxlZ2FsZXNcIj5cbiAgICAgICAgICAgIDxhPk1lbnRpb25zIGzDqWdhbGVzPC9hPlxuICAgICAgICAgIDwvTGluaz57JyAnfXx7JyAnfVxuICAgICAgICAgIDxNYWlsZXI+XG4gICAgICAgICAgICBDb250YWN0XG4gICAgICAgICAgPC9NYWlsZXI+XG4gICAgICAgIDwvbmF2PlxuICAgICAgPC9oZWFkZXI+XG5cbiAgICAgIHtjaGlsZHJlbn1cblxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxuICAgICAgICA8TWFpbGVyPlByb3B1bHPDqSBwYXIgZGF0YS5pbnNlcnRpb248L01haWxlcj5cbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvZGl2PlxuICApXG59XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuSG9tZV9jb250YWluZXJfXzFFY3NVIHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgcGFkZGluZzogMCAwLjVyZW07XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbW96LWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAtbW96LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgICAgLW1vei1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgLW1vei1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgIC1tb3otYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5Ib21lX2NvbnRlbnRfXzJmcU96IHtcXG4gIG1heC13aWR0aDogODAwcHg7XFxufVxcblxcbi5Ib21lX21haW5fXzF4OGdDIHtcXG4gIHBhZGRpbmc6IDVyZW0gMDtcXG4gIC13ZWJraXQtZmxleDogMSAxO1xcbiAgICAgLW1vei1ib3gtZmxleDogMTtcXG4gICAgICAgICAgZmxleDogMSAxO1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogLW1vei1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgLW1vei1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gICAgIC1tb3otYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgIC1tb3otYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAtbW96LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uSG9tZV9mb290ZXJfXzFXZGhEIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWFlYWVhO1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogLW1vei1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgIC1tb3otYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAtbW96LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uSG9tZV9mb290ZXJfXzFXZGhEIGltZyB7XFxuICBtYXJnaW4tbGVmdDogMC41cmVtO1xcbn1cXG5cXG4uSG9tZV9mb290ZXJfXzFXZGhEIGEge1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogLW1vei1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgIC1tb3otYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAtbW96LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uSG9tZV90aXRsZV9fM0RqUjcgYSB7XFxuICBjb2xvcjogIzAwNzBmMztcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLkhvbWVfdGl0bGVfXzNEalI3IGE6aG92ZXIsXFxuLkhvbWVfdGl0bGVfXzNEalI3IGE6Zm9jdXMsXFxuLkhvbWVfdGl0bGVfXzNEalI3IGE6YWN0aXZlIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4uSG9tZV90aXRsZV9fM0RqUjcge1xcbiAgbWFyZ2luOiAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7XFxuICBmb250LXNpemU6IDRyZW07XFxufVxcblxcbi5Ib21lX3N1YnRpdGxlX18zSTJ5SSB7XFxuICBtYXJnaW46IDA7XFxuICBsaW5lLWhlaWdodDogMS4xNTtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuLkhvbWVfdGl0bGVfXzNEalI3LFxcbi5Ib21lX3N1YnRpdGxlX18zSTJ5SSxcXG4uSG9tZV9kZXNjcmlwdGlvbl9fMTdaNEYge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uSG9tZV9kZXNjcmlwdGlvbl9fMTdaNEYsXFxuLkhvbWVfdGV4dF9fMXNDUWEge1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uSG9tZV9jb2RlX19heHgyWSB7XFxuICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogMC43NXJlbTtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgZm9udC1mYW1pbHk6IE1lbmxvLCBNb25hY28sIEx1Y2lkYSBDb25zb2xlLCBMaWJlcmF0aW9uIE1vbm8sIERlamFWdSBTYW5zIE1vbm8sXFxuICAgIEJpdHN0cmVhbSBWZXJhIFNhbnMgTW9ubywgQ291cmllciBOZXcsIG1vbm9zcGFjZTtcXG59XFxuXFxuLkhvbWVfZ3JpZF9fMkVpMkYge1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogLW1vei1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gICAgIC1tb3otYm94LWFsaWduOiBzdHJldGNoO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gIC13ZWJraXQtZmxleC13cmFwOiB3cmFwO1xcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICBtYXJnaW4tdG9wOiAzcmVtO1xcbn1cXG5cXG4uSG9tZV9ncmlkX18yRWkyRixcXG4uSG9tZV90ZXh0X18xc0NRYSB7XFxuICBtYXgtd2lkdGg6IDgwMHB4O1xcbn1cXG5cXG4uSG9tZV9jYXJkX18yU2R0QiB7XFxuICBtYXJnaW46IDFyZW07XFxuICAtd2Via2l0LWZsZXgtYmFzaXM6IDQ1JTtcXG4gICAgICAgICAgZmxleC1iYXNpczogNDUlO1xcbiAgcGFkZGluZzogMS41cmVtO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2VhZWFlYTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAtbW96LXRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlO1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZSwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2U7XFxufVxcblxcbi5Ib21lX2NhcmRfXzJTZHRCOmhvdmVyLFxcbi5Ib21lX2NhcmRfXzJTZHRCOmZvY3VzLFxcbi5Ib21lX2NhcmRfXzJTZHRCOmFjdGl2ZSB7XFxuICBjb2xvcjogIzAwNzBmMztcXG4gIGJvcmRlci1jb2xvcjogIzAwNzBmMztcXG59XFxuXFxuLkhvbWVfY2FyZF9fMlNkdEIgaDMge1xcbiAgbWFyZ2luOiAwIDAgMXJlbSAwO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5Ib21lX2NhcmRfXzJTZHRCIHAge1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG59XFxuXFxuLkhvbWVfbG9nb19fMVlickgge1xcbiAgaGVpZ2h0OiAxZW07XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLkhvbWVfZ3JpZF9fMkVpMkYge1xcbiAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgIC1tb3otYm94LW9yaWVudDogdmVydGljYWw7XFxuICAgICAgIC1tb3otYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuICAuSG9tZV9ncmlkX18yRWkyRixcXG4gIC5Ib21lX3RleHRfXzFzQ1FhIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxufVxcblxcbi5Ib21lX251bWVyaWNfXzFXbnFhIHtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIscUJBQWE7RUFBYixpQkFBYTtFQUFiLGFBQWE7RUFDYiw4QkFBc0I7S0FBdEIseUJBQXNCO0tBQXRCLDBCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsK0JBQXVCO0tBQXZCLHFCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsMkJBQW1CO0tBQW5CLHNCQUFtQjtVQUFuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQU87S0FBUCxnQkFBTztVQUFQLFNBQU87RUFDUCxxQkFBYTtFQUFiLGlCQUFhO0VBQWIsYUFBYTtFQUNiLDhCQUFzQjtLQUF0Qix5QkFBc0I7S0FBdEIsMEJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0QiwrQkFBdUI7S0FBdkIscUJBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QiwyQkFBbUI7S0FBbkIsc0JBQW1CO1VBQW5CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLHFCQUFhO0VBQWIsaUJBQWE7RUFBYixhQUFhO0VBQ2IsK0JBQXVCO0tBQXZCLHFCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsMkJBQW1CO0tBQW5CLHNCQUFtQjtVQUFuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxxQkFBYTtFQUFiLGlCQUFhO0VBQWIsYUFBYTtFQUNiLCtCQUF1QjtLQUF2QixxQkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLDJCQUFtQjtLQUFuQixzQkFBbUI7VUFBbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtBQUN2Qjs7QUFFQTs7O0VBR0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsU0FBUztFQUNULGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsU0FBUztFQUNULGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBOzs7RUFHRSxrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQjtvREFDa0Q7QUFDcEQ7O0FBRUE7RUFDRSxxQkFBYTtFQUFiLGlCQUFhO0VBQWIsYUFBYTtFQUNiLDRCQUFvQjtLQUFwQix1QkFBb0I7VUFBcEIsb0JBQW9CO0VBQ3BCLHVCQUFlO1VBQWYsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osdUJBQWU7VUFBZixlQUFlO0VBQ2YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsMERBQXFEO0VBQXJELHFEQUFxRDtBQUN2RDs7QUFFQTs7O0VBR0UsY0FBYztFQUNkLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFO0lBQ0UsOEJBQXNCO09BQXRCLHlCQUFzQjtPQUF0QiwwQkFBc0I7WUFBdEIsc0JBQXNCO0VBQ3hCO0VBQ0E7O0lBRUUsV0FBVztFQUNiO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNvbnRhaW5lciB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIHBhZGRpbmc6IDAgMC41cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIG1heC13aWR0aDogODAwcHg7XFxufVxcblxcbi5tYWluIHtcXG4gIHBhZGRpbmc6IDVyZW0gMDtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZvb3RlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2VhZWFlYTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mb290ZXIgaW1nIHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxufVxcblxcbi5mb290ZXIgYSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGl0bGUgYSB7XFxuICBjb2xvcjogIzAwNzBmMztcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLnRpdGxlIGE6aG92ZXIsXFxuLnRpdGxlIGE6Zm9jdXMsXFxuLnRpdGxlIGE6YWN0aXZlIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgbWFyZ2luOiAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7XFxuICBmb250LXNpemU6IDRyZW07XFxufVxcblxcbi5zdWJ0aXRsZSB7XFxuICBtYXJnaW46IDA7XFxuICBsaW5lLWhlaWdodDogMS4xNTtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuLnRpdGxlLFxcbi5zdWJ0aXRsZSxcXG4uZGVzY3JpcHRpb24ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24sXFxuLnRleHQge1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uY29kZSB7XFxuICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogMC43NXJlbTtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgZm9udC1mYW1pbHk6IE1lbmxvLCBNb25hY28sIEx1Y2lkYSBDb25zb2xlLCBMaWJlcmF0aW9uIE1vbm8sIERlamFWdSBTYW5zIE1vbm8sXFxuICAgIEJpdHN0cmVhbSBWZXJhIFNhbnMgTW9ubywgQ291cmllciBOZXcsIG1vbm9zcGFjZTtcXG59XFxuXFxuLmdyaWQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgbWFyZ2luLXRvcDogM3JlbTtcXG59XFxuXFxuLmdyaWQsXFxuLnRleHQge1xcbiAgbWF4LXdpZHRoOiA4MDBweDtcXG59XFxuXFxuLmNhcmQge1xcbiAgbWFyZ2luOiAxcmVtO1xcbiAgZmxleC1iYXNpczogNDUlO1xcbiAgcGFkZGluZzogMS41cmVtO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2VhZWFlYTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLCBib3JkZXItY29sb3IgMC4xNXMgZWFzZTtcXG59XFxuXFxuLmNhcmQ6aG92ZXIsXFxuLmNhcmQ6Zm9jdXMsXFxuLmNhcmQ6YWN0aXZlIHtcXG4gIGNvbG9yOiAjMDA3MGYzO1xcbiAgYm9yZGVyLWNvbG9yOiAjMDA3MGYzO1xcbn1cXG5cXG4uY2FyZCBoMyB7XFxuICBtYXJnaW46IDAgMCAxcmVtIDA7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLmNhcmQgcCB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBsaW5lLWhlaWdodDogMS41O1xcbn1cXG5cXG4ubG9nbyB7XFxuICBoZWlnaHQ6IDFlbTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAuZ3JpZCB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuICAuZ3JpZCxcXG4gIC50ZXh0IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxufVxcblxcbi5udW1lcmljIHtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJjb250YWluZXJcIjogXCJIb21lX2NvbnRhaW5lcl9fMUVjc1VcIixcblx0XCJjb250ZW50XCI6IFwiSG9tZV9jb250ZW50X18yZnFPelwiLFxuXHRcIm1haW5cIjogXCJIb21lX21haW5fXzF4OGdDXCIsXG5cdFwiZm9vdGVyXCI6IFwiSG9tZV9mb290ZXJfXzFXZGhEXCIsXG5cdFwidGl0bGVcIjogXCJIb21lX3RpdGxlX18zRGpSN1wiLFxuXHRcInN1YnRpdGxlXCI6IFwiSG9tZV9zdWJ0aXRsZV9fM0kyeUlcIixcblx0XCJkZXNjcmlwdGlvblwiOiBcIkhvbWVfZGVzY3JpcHRpb25fXzE3WjRGXCIsXG5cdFwidGV4dFwiOiBcIkhvbWVfdGV4dF9fMXNDUWFcIixcblx0XCJjb2RlXCI6IFwiSG9tZV9jb2RlX19heHgyWVwiLFxuXHRcImdyaWRcIjogXCJIb21lX2dyaWRfXzJFaTJGXCIsXG5cdFwiY2FyZFwiOiBcIkhvbWVfY2FyZF9fMlNkdEJcIixcblx0XCJsb2dvXCI6IFwiSG9tZV9sb2dvX18xWWJySFwiLFxuXHRcIm51bWVyaWNcIjogXCJIb21lX251bWVyaWNfXzFXbnFhXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==