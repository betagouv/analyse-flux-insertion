webpackHotUpdate_N_E("pages/lecteur/cnaf/beneficiaire",{

/***/ "./components/file.js":
/*!****************************!*\
  !*** ./components/file.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FileHandler; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pending__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pending */ "./components/pending.js");



var _jsxFileName = "/home/q/code/qblanc/beta.gouv/analyse-flux-insertion/components/file.js",
    _s = $RefreshSig$();




function FileHandler(_ref) {
  _s();

  var fileHandler = _ref.fileHandler,
      isPending = _ref.isPending,
      fileSize = _ref.fileSize;
  var selectHandler = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (event) {
    for (var i = 0; i < event.target.files.length; i++) {
      fileHandler(event.target.files[i]);
    }

    event.target.value = '';
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.description,
      children: ["Glissez et d\xE9posez le fichier \xE0 analyser ou s\xE9lectionnez le.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 67
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "file",
        onChange: selectHandler,
        multiple: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }, this), isPending && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pending__WEBPACK_IMPORTED_MODULE_3__["default"], {
      fileSize: fileSize
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 19
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.description,
      children: ["Les op\xE9rations sont toutes r\xE9alis\xE9es sur votre ordinateur.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 65
      }, this), "Aucune donn\xE9e personnelle n'est transf\xE9r\xE9e."]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }, this)]
  }, void 0, true);
}

_s(FileHandler, "GQW56GWp1yjNLIS2Lq8PsWS4JrY=");

_c = FileHandler;

var _c;

$RefreshReg$(_c, "FileHandler");

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
___CSS_LOADER_EXPORT___.push([module.i, ".Home_container__1EcsU {\n  min-height: 100vh;\n  padding: 0 0.5rem;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: flex;\n  -webkit-flex-direction: column;\n     -moz-box-orient: vertical;\n     -moz-box-direction: normal;\n          flex-direction: column;\n  -webkit-justify-content: center;\n     -moz-box-pack: center;\n          justify-content: center;\n  -webkit-align-items: center;\n     -moz-box-align: center;\n          align-items: center;\n}\n\n.Home_content__2fqOz {\n  max-width: 800px;\n}\n\n.Home_main__1x8gC {\n  padding: 5rem 0;\n  -webkit-flex: 1 1;\n     -moz-box-flex: 1;\n          flex: 1 1;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: flex;\n  -webkit-flex-direction: column;\n     -moz-box-orient: vertical;\n     -moz-box-direction: normal;\n          flex-direction: column;\n  -webkit-justify-content: center;\n     -moz-box-pack: center;\n          justify-content: center;\n  -webkit-align-items: center;\n     -moz-box-align: center;\n          align-items: center;\n}\n\n.Home_footer__1WdhD {\n  width: 100%;\n  height: 100px;\n  border-top: 1px solid #eaeaea;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: flex;\n  -webkit-justify-content: center;\n     -moz-box-pack: center;\n          justify-content: center;\n  -webkit-align-items: center;\n     -moz-box-align: center;\n          align-items: center;\n}\n\n.Home_footer__1WdhD img {\n  margin-left: 0.5rem;\n}\n\n.Home_footer__1WdhD a {\n  display: -webkit-flex;\n  display: -moz-box;\n  display: flex;\n  -webkit-justify-content: center;\n     -moz-box-pack: center;\n          justify-content: center;\n  -webkit-align-items: center;\n     -moz-box-align: center;\n          align-items: center;\n}\n\n.Home_title__3DjR7 a {\n  color: #0070f3;\n  text-decoration: none;\n}\n\n.Home_title__3DjR7 a:hover,\n.Home_title__3DjR7 a:focus,\n.Home_title__3DjR7 a:active {\n  text-decoration: underline;\n}\n\n.Home_title__3DjR7 {\n  margin: 0;\n  line-height: 1.15;\n  font-size: 4rem;\n}\n\n.Home_subtitle__3I2yI {\n  margin: 0;\n  line-height: 1.15;\n  font-size: 3rem;\n}\n\n.Home_margin_bottom__3OZW9 {\n  margin-bottom: 20px !important;\n}\n\n.Home_title__3DjR7,\n.Home_subtitle__3I2yI,\n.Home_description__17Z4F,\n.Home_pending_warning__2L76r,\n.Home_center__2Zxdr {\n  text-align: center;\n}\n\n.Home_description__17Z4F,\n.Home_text__1sCQa,\n.Home_pending_warning__2L76r {\n  line-height: 1.5;\n  font-size: 1.5rem;\n}\n\n@-webkit-keyframes Home_grow__3iiF- {\n    0% {\n        -webkit-transform: scale(1.04);\n                transform: scale(1.04);\n      }\n    50% {\n        -webkit-transform: scale(1);\n                transform: scale(1);\n      }\n      100% {\n        -webkit-transform: scale(1.04);\n                transform: scale(1.04);\n    }\n}\n\n@-moz-keyframes Home_grow__3iiF- {\n    0% {\n        -moz-transform: scale(1.04);\n             transform: scale(1.04);\n      }\n    50% {\n        -moz-transform: scale(1);\n             transform: scale(1);\n      }\n      100% {\n        -moz-transform: scale(1.04);\n             transform: scale(1.04);\n    }\n}\n\n@keyframes Home_grow__3iiF- {\n    0% {\n        -webkit-transform: scale(1.04);\n           -moz-transform: scale(1.04);\n                transform: scale(1.04);\n      }\n    50% {\n        -webkit-transform: scale(1);\n           -moz-transform: scale(1);\n                transform: scale(1);\n      }\n      100% {\n        -webkit-transform: scale(1.04);\n           -moz-transform: scale(1.04);\n                transform: scale(1.04);\n    }\n}\n\n.Home_pending_warning__2L76r {\n  color: rgb(199, 55, 55);\n  font-weight: 600;\n  -webkit-animation-duration: 5s;\n     -moz-animation-duration: 5s;\n          animation-duration: 5s; /* the duration of the animation */\n  -webkit-animation-timing-function: ease-in-out;\n     -moz-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; /* how the animation will behave */\n  -webkit-animation-delay: 0s;\n     -moz-animation-delay: 0s;\n          animation-delay: 0s; /* how long to delay the animation from starting */\n  -webkit-animation-iteration-count: infinite;\n     -moz-animation-iteration-count: infinite;\n          animation-iteration-count: infinite; /* how many times the animation will play */\n  -webkit-animation-name: Home_grow__3iiF-;\n     -moz-animation-name: Home_grow__3iiF-;\n          animation-name: Home_grow__3iiF-; /* the name of the animation we defined above */\n}\n\n.Home_code__axx2Y {\n  background: #fafafa;\n  border-radius: 5px;\n  padding: 0.75rem;\n  font-size: 1.1rem;\n  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,\n    Bitstream Vera Sans Mono, Courier New, monospace;\n}\n\n.Home_bold__2tKez {\n  font-weight: bold;\n}\n\n.Home_legende__3f4un {\n  display: -webkit-flex !important;\n  display: -moz-box !important;\n  display: flex !important;\n  -webkit-justify-content: space-around;\n          justify-content: space-around;\n  margin: 0 3rem;\n}\n\n.Home_legende_title__2Brj_ {\n  font-weight: bold;\n  text-decoration: underline;\n}\n\n.Home_legende_box__32b1I {\n  width: 40%;\n  /* margin: 0 1rem; */\n}\n\n.Home_grid__2Ei2F {\n  display: -webkit-flex;\n  display: -moz-box;\n  display: flex;\n  -webkit-align-items: stretch;\n     -moz-box-align: stretch;\n          align-items: stretch;\n  -webkit-flex-wrap: wrap;\n          flex-wrap: wrap;\n  margin-top: 3rem;\n}\n\n.Home_grid__2Ei2F,\n.Home_text__1sCQa {\n  max-width: 800px;\n}\n\n.Home_card__2SdtB {\n  margin: 1rem;\n  -webkit-flex-basis: 45%;\n          flex-basis: 45%;\n  padding: 1.5rem;\n  text-align: left;\n  color: inherit;\n  text-decoration: none;\n  border: 1px solid #eaeaea;\n  border-radius: 10px;\n  -moz-transition: color 0.15s ease, border-color 0.15s ease;\n  transition: color 0.15s ease, border-color 0.15s ease;\n}\n\n.Home_card__2SdtB:hover,\n.Home_card__2SdtB:focus,\n.Home_card__2SdtB:active {\n  color: #0070f3;\n  border-color: #0070f3;\n}\n\n.Home_card__2SdtB h3 {\n  margin: 0 0 1rem 0;\n  font-size: 1.5rem;\n}\n\n.Home_card__2SdtB p {\n  margin: 0;\n  font-size: 1.25rem;\n  line-height: 1.5;\n}\n\n.Home_logo__1YbrH {\n  height: 1em;\n}\n\n.Home_create__SOEZL {\n  max-width: 800px;\n  margin: 50px auto;\n  text-align: center;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: flex;\n  -webkit-justify-content: space-between;\n     -moz-box-pack: justify;\n          justify-content: space-between;\n}\n.Home_create__SOEZL label {\n  text-align: left;\n  display: block;\n}\n.Home_create__SOEZL input {\n  width: 100%;\n  padding: 6px 10px;\n  margin: 10px 0;\n  border: 1px solid #ddd;\n  -moz-box-sizing: border-box;\n       box-sizing: border-box;\n  display: block;\n}\n.Home_create__SOEZL button {\n  margin: 20px auto 0 auto;\n  background: #3571f1;\n  color: #fff;\n  border: 0;\n  padding: 12px;\n  border-radius: 3px;\n  cursor: pointer;\n}\n\n@media (max-width: 600px) {\n  .Home_grid__2Ei2F {\n    -webkit-flex-direction: column;\n       -moz-box-orient: vertical;\n       -moz-box-direction: normal;\n            flex-direction: column;\n  }\n  .Home_grid__2Ei2F,\n  .Home_text__1sCQa {\n    width: 100%;\n  }\n}\n\n.Home_numeric__1Wnqa {\n  text-align: right;\n}\n", "",{"version":3,"sources":["webpack://styles/Home.module.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,qBAAa;EAAb,iBAAa;EAAb,aAAa;EACb,8BAAsB;KAAtB,yBAAsB;KAAtB,0BAAsB;UAAtB,sBAAsB;EACtB,+BAAuB;KAAvB,qBAAuB;UAAvB,uBAAuB;EACvB,2BAAmB;KAAnB,sBAAmB;UAAnB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,iBAAO;KAAP,gBAAO;UAAP,SAAO;EACP,qBAAa;EAAb,iBAAa;EAAb,aAAa;EACb,8BAAsB;KAAtB,yBAAsB;KAAtB,0BAAsB;UAAtB,sBAAsB;EACtB,+BAAuB;KAAvB,qBAAuB;UAAvB,uBAAuB;EACvB,2BAAmB;KAAnB,sBAAmB;UAAnB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,6BAA6B;EAC7B,qBAAa;EAAb,iBAAa;EAAb,aAAa;EACb,+BAAuB;KAAvB,qBAAuB;UAAvB,uBAAuB;EACvB,2BAAmB;KAAnB,sBAAmB;UAAnB,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,qBAAa;EAAb,iBAAa;EAAb,aAAa;EACb,+BAAuB;KAAvB,qBAAuB;UAAvB,uBAAuB;EACvB,2BAAmB;KAAnB,sBAAmB;UAAnB,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,qBAAqB;AACvB;;AAEA;;;EAGE,0BAA0B;AAC5B;;AAEA;EACE,SAAS;EACT,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,SAAS;EACT,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,8BAA8B;AAChC;;AAEA;;;;;EAKE,kBAAkB;AACpB;;AAEA;;;EAGE,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;IACI;QACI,8BAAsB;gBAAtB,sBAAsB;MACxB;IACF;QACI,2BAAmB;gBAAnB,mBAAmB;MACrB;MACA;QACE,8BAAsB;gBAAtB,sBAAsB;IAC1B;AACJ;;AAVA;IACI;QACI,2BAAsB;aAAtB,sBAAsB;MACxB;IACF;QACI,wBAAmB;aAAnB,mBAAmB;MACrB;MACA;QACE,2BAAsB;aAAtB,sBAAsB;IAC1B;AACJ;;AAVA;IACI;QACI,8BAAsB;WAAtB,2BAAsB;gBAAtB,sBAAsB;MACxB;IACF;QACI,2BAAmB;WAAnB,wBAAmB;gBAAnB,mBAAmB;MACrB;MACA;QACE,8BAAsB;WAAtB,2BAAsB;gBAAtB,sBAAsB;IAC1B;AACJ;;AAEA;EACE,uBAAuB;EACvB,gBAAgB;EAChB,8BAAsB;KAAtB,2BAAsB;UAAtB,sBAAsB,EAAE,kCAAkC;EAC1D,8CAAsC;KAAtC,2CAAsC;UAAtC,sCAAsC,EAAE,kCAAkC;EAC1E,2BAAmB;KAAnB,wBAAmB;UAAnB,mBAAmB,EAAE,kDAAkD;EACvE,2CAAmC;KAAnC,wCAAmC;UAAnC,mCAAmC,EAAE,2CAA2C;EAChF,wCAAoB;KAApB,qCAAoB;UAApB,gCAAoB,EAAE,+CAA+C;AACvE;;AAEA;EACE,mBAAmB;EACnB,kBAAkB;EAClB,gBAAgB;EAChB,iBAAiB;EACjB;oDACkD;AACpD;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,gCAAwB;EAAxB,4BAAwB;EAAxB,wBAAwB;EACxB,qCAA6B;UAA7B,6BAA6B;EAC7B,cAAc;AAChB;;AAEA;EACE,iBAAiB;EACjB,0BAA0B;AAC5B;;AAEA;EACE,UAAU;EACV,oBAAoB;AACtB;;AAEA;EACE,qBAAa;EAAb,iBAAa;EAAb,aAAa;EACb,4BAAoB;KAApB,uBAAoB;UAApB,oBAAoB;EACpB,uBAAe;UAAf,eAAe;EACf,gBAAgB;AAClB;;AAEA;;EAEE,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,uBAAe;UAAf,eAAe;EACf,eAAe;EACf,gBAAgB;EAChB,cAAc;EACd,qBAAqB;EACrB,yBAAyB;EACzB,mBAAmB;EACnB,0DAAqD;EAArD,qDAAqD;AACvD;;AAEA;;;EAGE,cAAc;EACd,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,SAAS;EACT,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;EAClB,qBAAa;EAAb,iBAAa;EAAb,aAAa;EACb,sCAA8B;KAA9B,sBAA8B;UAA9B,8BAA8B;AAChC;AACA;EACE,gBAAgB;EAChB,cAAc;AAChB;AACA;EACE,WAAW;EACX,iBAAiB;EACjB,cAAc;EACd,sBAAsB;EACtB,2BAAsB;OAAtB,sBAAsB;EACtB,cAAc;AAChB;AACA;EACE,wBAAwB;EACxB,mBAAmB;EACnB,WAAW;EACX,SAAS;EACT,aAAa;EACb,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE;IACE,8BAAsB;OAAtB,yBAAsB;OAAtB,0BAAsB;YAAtB,sBAAsB;EACxB;EACA;;IAEE,WAAW;EACb;AACF;;AAEA;EACE,iBAAiB;AACnB","sourcesContent":[".container {\n  min-height: 100vh;\n  padding: 0 0.5rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.content {\n  max-width: 800px;\n}\n\n.main {\n  padding: 5rem 0;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.footer {\n  width: 100%;\n  height: 100px;\n  border-top: 1px solid #eaeaea;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.footer img {\n  margin-left: 0.5rem;\n}\n\n.footer a {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.title a {\n  color: #0070f3;\n  text-decoration: none;\n}\n\n.title a:hover,\n.title a:focus,\n.title a:active {\n  text-decoration: underline;\n}\n\n.title {\n  margin: 0;\n  line-height: 1.15;\n  font-size: 4rem;\n}\n\n.subtitle {\n  margin: 0;\n  line-height: 1.15;\n  font-size: 3rem;\n}\n\n.margin_bottom {\n  margin-bottom: 20px !important;\n}\n\n.title,\n.subtitle,\n.description,\n.pending_warning,\n.center {\n  text-align: center;\n}\n\n.description,\n.text,\n.pending_warning {\n  line-height: 1.5;\n  font-size: 1.5rem;\n}\n\n@keyframes grow {\n    0% {\n        transform: scale(1.04);\n      }\n    50% {\n        transform: scale(1);\n      }\n      100% {\n        transform: scale(1.04);\n    }\n}\n\n.pending_warning {\n  color: rgb(199, 55, 55);\n  font-weight: 600;\n  animation-duration: 5s; /* the duration of the animation */\n  animation-timing-function: ease-in-out; /* how the animation will behave */\n  animation-delay: 0s; /* how long to delay the animation from starting */\n  animation-iteration-count: infinite; /* how many times the animation will play */\n  animation-name: grow; /* the name of the animation we defined above */\n}\n\n.code {\n  background: #fafafa;\n  border-radius: 5px;\n  padding: 0.75rem;\n  font-size: 1.1rem;\n  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,\n    Bitstream Vera Sans Mono, Courier New, monospace;\n}\n\n.bold {\n  font-weight: bold;\n}\n\n.legende {\n  display: flex !important;\n  justify-content: space-around;\n  margin: 0 3rem;\n}\n\n.legende_title {\n  font-weight: bold;\n  text-decoration: underline;\n}\n\n.legende_box {\n  width: 40%;\n  /* margin: 0 1rem; */\n}\n\n.grid {\n  display: flex;\n  align-items: stretch;\n  flex-wrap: wrap;\n  margin-top: 3rem;\n}\n\n.grid,\n.text {\n  max-width: 800px;\n}\n\n.card {\n  margin: 1rem;\n  flex-basis: 45%;\n  padding: 1.5rem;\n  text-align: left;\n  color: inherit;\n  text-decoration: none;\n  border: 1px solid #eaeaea;\n  border-radius: 10px;\n  transition: color 0.15s ease, border-color 0.15s ease;\n}\n\n.card:hover,\n.card:focus,\n.card:active {\n  color: #0070f3;\n  border-color: #0070f3;\n}\n\n.card h3 {\n  margin: 0 0 1rem 0;\n  font-size: 1.5rem;\n}\n\n.card p {\n  margin: 0;\n  font-size: 1.25rem;\n  line-height: 1.5;\n}\n\n.logo {\n  height: 1em;\n}\n\n.create {\n  max-width: 800px;\n  margin: 50px auto;\n  text-align: center;\n  display: flex;\n  justify-content: space-between;\n}\n.create label {\n  text-align: left;\n  display: block;\n}\n.create input {\n  width: 100%;\n  padding: 6px 10px;\n  margin: 10px 0;\n  border: 1px solid #ddd;\n  box-sizing: border-box;\n  display: block;\n}\n.create button {\n  margin: 20px auto 0 auto;\n  background: #3571f1;\n  color: #fff;\n  border: 0;\n  padding: 12px;\n  border-radius: 3px;\n  cursor: pointer;\n}\n\n@media (max-width: 600px) {\n  .grid {\n    flex-direction: column;\n  }\n  .grid,\n  .text {\n    width: 100%;\n  }\n}\n\n.numeric {\n  text-align: right;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": "Home_container__1EcsU",
	"content": "Home_content__2fqOz",
	"main": "Home_main__1x8gC",
	"footer": "Home_footer__1WdhD",
	"title": "Home_title__3DjR7",
	"subtitle": "Home_subtitle__3I2yI",
	"margin_bottom": "Home_margin_bottom__3OZW9",
	"description": "Home_description__17Z4F",
	"pending_warning": "Home_pending_warning__2L76r",
	"center": "Home_center__2Zxdr",
	"text": "Home_text__1sCQa",
	"grow": "Home_grow__3iiF-",
	"code": "Home_code__axx2Y",
	"bold": "Home_bold__2tKez",
	"legende": "Home_legende__3f4un",
	"legende_title": "Home_legende_title__2Brj_",
	"legende_box": "Home_legende_box__32b1I",
	"grid": "Home_grid__2Ei2F",
	"card": "Home_card__2SdtB",
	"logo": "Home_logo__1YbrH",
	"create": "Home_create__SOEZL",
	"numeric": "Home_numeric__1Wnqa"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./pages/lecteur/cnaf/beneficiaire/index.js":
/*!**************************************************!*\
  !*** ./pages/lecteur/cnaf/beneficiaire/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Beneficiaire; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_construct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/construct */ "./node_modules/@babel/runtime/helpers/esm/construct.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_admin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/admin */ "./components/admin.js");
/* harmony import */ var _components_chart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/chart */ "./components/chart.js");
/* harmony import */ var _components_file__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/file */ "./components/file.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/footer */ "./components/footer.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/layout */ "./components/layout.js");
/* harmony import */ var _lib_cnaf__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../lib/cnaf */ "./lib/cnaf.js");
/* harmony import */ var _lib_historique__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../lib/historique */ "./lib/historique.js");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11__);





var _jsxFileName = "/home/q/code/qblanc/beta.gouv/analyse-flux-insertion/pages/lecteur/cnaf/beneficiaire/index.js",
    _s = $RefreshSig$();










var reducer = Object(_lib_historique__WEBPACK_IMPORTED_MODULE_10__["reducerFactory"])('Test - CNAF - Bénéficiaire');
var devMode = true;
function Beneficiaire() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      devFile = _useState[0],
      setDevFile = _useState[1];

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_3__["useReducer"])(reducer, [], _lib_historique__WEBPACK_IMPORTED_MODULE_10__["initReducer"]),
      runs = _useReducer[0],
      dispatchRuns = _useReducer[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isPending = _useState2[0],
      setIsPending = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      fileSize = _useState3[0],
      setFileSize = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      keysDroits = _useState4[0],
      setKeysDroits = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      keysDevoirs = _useState5[0],
      setKeysDevoirs = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    index: undefined,
    data: [],
    from: "2016-03-01",
    to: "2021-03-01"
  }),
      dateData = _useState6[0],
      setDateData = _useState6[1];

  var handleNewRuns = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (data) {
    dispatchRuns({
      type: 'reset',
      folders: data
    });
  });
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (devFile) {
      fileHandler(devFile);
    }
  }, [devFile]);
  var handleDateHistogram = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (event) {
    return showDateHistogram(parseInt(event.target.dataset.index));
  });
  var showDateHistogram = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (index) {
    var source = runs[index];
    var dates = Object.keys(source.dates);
    var minDate = null;
    var maxDate = null;
    var data = dates.map(function (d) {
      var date = new Date(d);

      if (!minDate) {
        minDate = date;
        maxDate = date;
      } else if (date < minDate) {
        minDate = date;
      } else if (maxDate < date) {
        maxDate = date;
      }

      return {
        day: date.toISOString().slice(0, 10),
        value: source.dates[d]
      };
    });
    var yearCount = maxDate.getYear() - minDate.getYear() + 1;
    setDateData({
      index: index,
      data: data,
      from: minDate.toISOString().slice(0, 10),
      to: maxDate.toISOString().slice(0, 10),
      yearCount: yearCount
    });
  });

  var fileHandler = function fileHandler(file) {
    if (devMode && file != devFile) {
      setDevFile(file);
    }

    setFileSize(file.size);
    setIsPending(true);
    var start_time = new Date();
    var reader = new FileReader();

    reader.onload = function (event) {
      var parser = new DOMParser();
      var dom = parser.parseFromString(event.target.result, "application/xml");
      var desc = dom.getElementsByTagName('IdentificationFlux')[0];
      var frequency = desc.getElementsByTagName('TYPEFLUX')[0].innerHTML;
      var type = desc.getElementsByTagName('NATFLUX')[0].innerHTML;
      var dt = desc.getElementsByTagName('DTCREAFLUX')[0].innerHTML;
      var time = desc.getElementsByTagName('HEUCREAFLUX')[0].innerHTML;

      var processField = function processField(accum, value) {
        if (value[0]) {
          accum[value[0].innerHTML] = (accum[value[0].innerHTML] || 0) + 1;
          accum["Total"] = (accum["Total"] || 0) + 1;
        }

        return accum;
      };

      var folders = Object(_babel_runtime_helpers_esm_construct__WEBPACK_IMPORTED_MODULE_1__["default"])(Array, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(dom.getElementsByTagName('InfosFoyerRSA')));

      var people = Object(_babel_runtime_helpers_esm_construct__WEBPACK_IMPORTED_MODULE_1__["default"])(Array, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(dom.getElementsByTagName('Personne')));

      var dates = folders.map(function (i) {
        return i.getElementsByTagName('DTDEMRSA')[0].innerHTML;
      }).reduce(function (accum, value) {
        accum[value] = (accum[value] || 0) + 1;
        return accum;
      }, {});
      var droits = folders.map(function (i) {
        return i.getElementsByTagName('ETATDOSRSA');
      }).reduce(processField, {});
      var newKeysDroits = keysDroits.concat(Object.keys(droits));
      newKeysDroits = Array.from(new Set(newKeysDroits));
      setKeysDroits(newKeysDroits);
      var devoirs = people.map(function (i) {
        return i.getElementsByTagName('TOPPERSDRODEVORSA');
      }).reduce(processField, {});
      var newKeysDevoirs = keysDevoirs.concat(Object.keys(devoirs));
      newKeysDevoirs = Array.from(new Set(newKeysDevoirs));
      setKeysDevoirs(newKeysDevoirs);
      var foldersDroitsOuverts = folders.filter(function (i) {
        return i.getElementsByTagName('ETATDOSRSA')[0].innerHTML == "2";
      }).map(function (i) {
        var items = i.getElementsByTagName('Personne');
        return Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(items);
      }).flat();
      var droitsEtDevoirs = foldersDroitsOuverts.map(function (i) {
        return i.getElementsByTagName('TOPPERSDRODEVORSA');
      }).reduce(processField, {});
      setIsPending(false); // Note pour plus tard :
      // Il pourra être intéressant, dans une seconde itération de recouper TOPPERSDRODEVORSA avec ROLEPERS.
      // Il pourra être intéressant dans une troisième itération de faire le croisement entre ETATDOSRSA d'une part et ( TOPPERSDRODEVORSA / ROLEPERS ) d'autres part mais pour cela il faudra un tableau avec une ligne par valeur de ETATDOSRSA et une colonne par croisement ( TOPPERSDRODEVORSA / ROLEPERS ).

      dispatchRuns({
        type: 'append',
        item: {
          seed: Math.random(),
          timestamp: new Date().toISOString().slice(0, 19),
          duration: new Date() - start_time,
          filename: file.name,
          fileDatetime: "".concat(dt, "-").concat(time),
          frequency: frequency,
          type: type,
          // WIP: OK sur Firefox KO sur Chrome
          error: dom.activeElement && dom.activeElement.nodeName == "parsererror",
          total: folders.length,
          fileSize: file.size,
          people: people.length,
          dates: dates,
          devoirs: devoirs,
          droits: droits,
          droitsEtDevoirs: droitsEtDevoirs
        }
      });
    };

    reader.readAsText(file);
  };

  var round = function round(value) {
    return Math.round(value);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_admin__WEBPACK_IMPORTED_MODULE_4__["default"], {
      category: "B\xE9n\xE9ficiaire",
      onRunRefresh: handleNewRuns
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.main,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.title,
        children: ["Lecteur de fichier", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 29
        }, this), "\xAB B\xE9n\xE9ficiaire \xBB de la CNAF"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_file__WEBPACK_IMPORTED_MODULE_6__["default"], {
        fileHandler: fileHandler,
        isPending: isPending,
        fileSize: fileSize
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 9
      }, this), runs && runs.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.subtitle,
          children: "Statistiques droits & devoirs"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.margin_side,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 192,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Dossiers (Foyers)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 193,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Personnes"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 194,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                colSpan: keysDroits.length,
                children: "Valeurs balises ETATDOSRSA"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 195,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                colSpan: keysDevoirs.length,
                children: "Valeurs balises TOPPERSDRODEVORSA"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 196,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Personnes soumises droits et devoirs dans foyer droit ouvert et versable"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 197,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 191,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              children: [keysDroits.map(function (k) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                  colSpan: "1",
                  children: k
                }, k, false, {
                  fileName: _jsxFileName,
                  lineNumber: 200,
                  columnNumber: 38
                }, _this);
              }), keysDevoirs.map(function (k) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                  colSpan: "1",
                  children: k
                }, k, false, {
                  fileName: _jsxFileName,
                  lineNumber: 201,
                  columnNumber: 39
                }, _this);
              })]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 199,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 190,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
            children: [runs.map(function (r, i) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                style: i == dateData.index ? {
                  backgroundColor: 'lightgrey'
                } : {},
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: runs.length - i
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 206,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.center,
                  children: r.total
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 207,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.center,
                  children: r.people
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 208,
                  columnNumber: 17
                }, _this), keysDroits.map(function (k) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.center,
                    children: r.droits[k] || 0
                  }, k, false, {
                    fileName: _jsxFileName,
                    lineNumber: 209,
                    columnNumber: 38
                  }, _this);
                }), keysDevoirs.map(function (k) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.center,
                    children: r.devoirs[k] || 0
                  }, k, false, {
                    fileName: _jsxFileName,
                    lineNumber: 210,
                    columnNumber: 39
                  }, _this);
                }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.center,
                  children: r.droitsEtDevoirs[1] || 0
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 211,
                  columnNumber: 17
                }, _this)]
              }, "".concat(r.timestamp, "-").concat(r.filename, "-").concat(r.seed, "-0"), true, {
                fileName: _jsxFileName,
                lineNumber: 205,
                columnNumber: 36
              }, _this);
            }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 215,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 204,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.legende,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.legende_box,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.legende_title,
              children: "L\xE9gende\xA0:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 223,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.bold,
              children: "Valeur balise ETATDOSRSA"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 224,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: ["0=Nouvelle demande en attente de d\xE9cision CG pour ouverture du droit", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 225,
                columnNumber: 86
              }, this), "1=Droit refus\xE9", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 226,
                columnNumber: 29
              }, this), "2=Droit ouvert et versable", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 227,
                columnNumber: 41
              }, this), "3=Droit ouvert et suspendu (le montant du droit est calculable, mais l'existence du droit est remis en cause)", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 228,
                columnNumber: 124
              }, this), "4=Droit ouvert mais versement suspendu (le montant du droit n'est pas calculable)", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 229,
                columnNumber: 96
              }, this), "5=Droit clos", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 230,
                columnNumber: 27
              }, this), "6=Droit clos sur mois ant\xE9rieur ayant eu un contr\xF4le dans le mois de r\xE9f\xE9rence pour une p\xE9riode ant\xE9rieure."]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 225,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 222,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.legende_box,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.bold,
              children: "Valeur balise TOPPERSDRODEVORSA"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 234,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: ["0=Personne pas soumise \xE0 droits et devoirs", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 235,
                columnNumber: 60
              }, this), "1=Personne soumise \xE0 droits et devoirs"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 235,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "\xA0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 237,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.bold,
              children: "Personnes soumises droits et devoirs dans foyer droit ouvert et versable"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 238,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "Nombre de personnes dont la balise TOPPERSDRODEVORSA=1 pr\xE9sents dans des foyers dont la balise ETATDOSRSA=2"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 239,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 233,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 221,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.subtitle,
          children: "Historique"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 243,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.margin_side,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 250,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Fichier"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 251,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Date"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 252,
                columnNumber: 17
              }, this), devMode && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Taille"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 253,
                columnNumber: 30
              }, this), devMode && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: ["Dur\xE9e", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 254,
                  columnNumber: 51
                }, this), "(en s)"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 254,
                columnNumber: 30
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Date du fichier"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 255,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Fr\xE9quence"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 256,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Nature"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 257,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Dossiers"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 258,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "D\xE9tails"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 259,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Erreur"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 260,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 249,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 262,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 248,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
            children: runs.map(function (r, i) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                style: i == dateData.index ? {
                  backgroundColor: 'lightgrey'
                } : {},
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: runs.length - i
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 267,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: r.filename
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 268,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: r.timestamp
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 269,
                  columnNumber: 17
                }, _this), devMode && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: r.fileSize
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 270,
                  columnNumber: 30
                }, _this), devMode && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: !isNaN(r.duration) ? r.duration / 1000 : "#N/A"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 271,
                  columnNumber: 30
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: r.fileDatetime
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 272,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: "".concat(r.frequency, " (").concat(_lib_cnaf__WEBPACK_IMPORTED_MODULE_9__["frequencyNames"][r.frequency] || '?', ")")
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 273,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: "".concat(r.type, " (").concat(_lib_cnaf__WEBPACK_IMPORTED_MODULE_9__["typeNames"][r.type] || '?', ")")
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 274,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.numeric,
                  children: r.total
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 275,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: "shrink",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                    onClick: handleDateHistogram,
                    "data-index": i,
                    children: "Afficher par date"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 276,
                    columnNumber: 40
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 276,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: r.error ? 'Oui' : 'Non'
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 277,
                  columnNumber: 17
                }, _this)]
              }, "".concat(r.timestamp, "-").concat(r.filename, "-").concat(r.seed), true, {
                fileName: _jsxFileName,
                lineNumber: 266,
                columnNumber: 36
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 265,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 247,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: function onClick() {
            return dispatchRuns({
              type: 'reset'
            });
          },
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.margin_bottom,
          children: "Vider l'historique"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 283,
          columnNumber: 11
        }, this)]
      }, void 0, true), runs.length != 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.text,
        children: "Vous pouvez acc\xE9der \xE0 une repr\xE9sentation graphique de la r\xE9partition dans les temps des demandes connues dans les fichiers analys\xE9s. Pour cela il faut cliquer sur le bouton \xAB Afficher par date \xBB."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 286,
        columnNumber: 31
      }, this), dateData.index != undefined && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.subtitle,
          children: "Nombre de dossiers associ\xE9s \xE0 des demandes r\xE9alis\xE9s \xE0 chaque date"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 292,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            height: 250 * dateData.yearCount + "px",
            width: "100%"
          },
          children: Object(_components_chart__WEBPACK_IMPORTED_MODULE_5__["default"])(dateData)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 295,
          columnNumber: 13
        }, this)]
      }, void 0, true), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
        subject: "Flux b\xE9n\xE9ficiaire CNAF",
        pourquoi: "Pourquoi un lecteur de fichier CNAF\xA0?",
        text: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.text,
            children: "Tous les d\xE9partements n'ont pas les outils pour analyser les fichiers envoy\xE9s par la CNAF. Cela peut ralentir et compliquer nos \xE9changes."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 305,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.text,
            children: "Avec cet outil, nous souhaitons permettre aux personnes qui ont acc\xE8s \xE0 ces fichiers d'en extraire des statistiques g\xE9n\xE9rales sans avoir \xE0 mettre les mains dans le camboui elles-m\xEAme."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 306,
            columnNumber: 13
          }, this)]
        }, void 0, true)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 301,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 175,
    columnNumber: 5
  }, this);
}

_s(Beneficiaire, "vQ4OdtZlQHcu1Jno5YCzRdRvJ20=");

_c = Beneficiaire;

var _c;

$RefreshReg$(_c, "Beneficiaire");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9maWxlLmpzIiwid2VicGFjazovL19OX0UvLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9sZWN0ZXVyL2NuYWYvYmVuZWZpY2lhaXJlL2luZGV4LmpzIl0sIm5hbWVzIjpbIkZpbGVIYW5kbGVyIiwiZmlsZUhhbmRsZXIiLCJpc1BlbmRpbmciLCJmaWxlU2l6ZSIsInNlbGVjdEhhbmRsZXIiLCJ1c2VDYWxsYmFjayIsImV2ZW50IiwiaSIsInRhcmdldCIsImZpbGVzIiwibGVuZ3RoIiwidmFsdWUiLCJzdHlsZXMiLCJkZXNjcmlwdGlvbiIsInJlZHVjZXIiLCJyZWR1Y2VyRmFjdG9yeSIsImRldk1vZGUiLCJCZW5lZmljaWFpcmUiLCJ1c2VTdGF0ZSIsImRldkZpbGUiLCJzZXREZXZGaWxlIiwidXNlUmVkdWNlciIsImluaXRSZWR1Y2VyIiwicnVucyIsImRpc3BhdGNoUnVucyIsInNldElzUGVuZGluZyIsInNldEZpbGVTaXplIiwia2V5c0Ryb2l0cyIsInNldEtleXNEcm9pdHMiLCJrZXlzRGV2b2lycyIsInNldEtleXNEZXZvaXJzIiwiaW5kZXgiLCJ1bmRlZmluZWQiLCJkYXRhIiwiZnJvbSIsInRvIiwiZGF0ZURhdGEiLCJzZXREYXRlRGF0YSIsImhhbmRsZU5ld1J1bnMiLCJ0eXBlIiwiZm9sZGVycyIsInVzZUVmZmVjdCIsImhhbmRsZURhdGVIaXN0b2dyYW0iLCJzaG93RGF0ZUhpc3RvZ3JhbSIsInBhcnNlSW50IiwiZGF0YXNldCIsInNvdXJjZSIsImRhdGVzIiwiT2JqZWN0Iiwia2V5cyIsIm1pbkRhdGUiLCJtYXhEYXRlIiwibWFwIiwiZCIsImRhdGUiLCJEYXRlIiwiZGF5IiwidG9JU09TdHJpbmciLCJzbGljZSIsInllYXJDb3VudCIsImdldFllYXIiLCJmaWxlIiwic2l6ZSIsInN0YXJ0X3RpbWUiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwicGFyc2VyIiwiRE9NUGFyc2VyIiwiZG9tIiwicGFyc2VGcm9tU3RyaW5nIiwicmVzdWx0IiwiZGVzYyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiZnJlcXVlbmN5IiwiaW5uZXJIVE1MIiwiZHQiLCJ0aW1lIiwicHJvY2Vzc0ZpZWxkIiwiYWNjdW0iLCJBcnJheSIsInBlb3BsZSIsInJlZHVjZSIsImRyb2l0cyIsIm5ld0tleXNEcm9pdHMiLCJjb25jYXQiLCJTZXQiLCJkZXZvaXJzIiwibmV3S2V5c0Rldm9pcnMiLCJmb2xkZXJzRHJvaXRzT3V2ZXJ0cyIsImZpbHRlciIsIml0ZW1zIiwiZmxhdCIsImRyb2l0c0V0RGV2b2lycyIsIml0ZW0iLCJzZWVkIiwiTWF0aCIsInJhbmRvbSIsInRpbWVzdGFtcCIsImR1cmF0aW9uIiwiZmlsZW5hbWUiLCJuYW1lIiwiZmlsZURhdGV0aW1lIiwiZXJyb3IiLCJhY3RpdmVFbGVtZW50Iiwibm9kZU5hbWUiLCJ0b3RhbCIsInJlYWRBc1RleHQiLCJyb3VuZCIsImNvbnRhaW5lciIsIm1haW4iLCJ0aXRsZSIsInN1YnRpdGxlIiwibWFyZ2luX3NpZGUiLCJrIiwiciIsImJhY2tncm91bmRDb2xvciIsImNlbnRlciIsImxlZ2VuZGUiLCJsZWdlbmRlX2JveCIsImxlZ2VuZGVfdGl0bGUiLCJib2xkIiwiaXNOYU4iLCJmcmVxdWVuY3lOYW1lcyIsInR5cGVOYW1lcyIsIm51bWVyaWMiLCJtYXJnaW5fYm90dG9tIiwidGV4dCIsImhlaWdodCIsIndpZHRoIiwiUmVzcG9uc2l2ZUNhbGVuZGFyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBRWUsU0FBU0EsV0FBVCxPQUlaO0FBQUE7O0FBQUEsTUFIREMsV0FHQyxRQUhEQSxXQUdDO0FBQUEsTUFGREMsU0FFQyxRQUZEQSxTQUVDO0FBQUEsTUFEREMsUUFDQyxRQUREQSxRQUNDO0FBQ0QsTUFBTUMsYUFBYSxHQUFHQyx5REFBVyxDQUFDLFVBQUNDLEtB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YSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssV0FBVyxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLE9BQU8sWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sU0FBUyxZQUFZLE9BQU8sT0FBTyxZQUFZLGFBQWEsT0FBTyxLQUFLLEtBQUssWUFBWSxjQUFjLE1BQU0sS0FBSyxZQUFZLGNBQWMsTUFBTSxLQUFLLFlBQVksY0FBYyxNQUFNLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsY0FBYyxNQUFNLEtBQUssWUFBWSxhQUFhLGNBQWMsTUFBTSxLQUFLLFlBQVksYUFBYSxjQUFjLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEseUJBQXlCLGFBQWEsYUFBYSx5QkFBeUIsYUFBYSxhQUFhLHlCQUF5QixhQUFhLGFBQWEseUJBQXlCLGFBQWEsYUFBYSx5QkFBeUIsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxPQUFPLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFdBQVcsV0FBVyxVQUFVLFlBQVksYUFB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QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTVIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTBJRDs7R0F4U3VCOUcsWTs7S0FBQUEsWSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sZWN0ZXVyL2NuYWYvYmVuZWZpY2lhaXJlLmNmMTE3NTg4YTFjYmJiZDUxOTVmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZUNhbGxiYWNrfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IFBlbmRpbmdNZXNzYWdlIGZyb20gJy4vcGVuZGluZydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmlsZUhhbmRsZXIoe1xuICBmaWxlSGFuZGxlcixcbiAgaXNQZW5kaW5nLFxuICBmaWxlU2l6ZVxufSkge1xuICBjb25zdCBzZWxlY3RIYW5kbGVyID0gdXNlQ2FsbGJhY2soKGV2ZW50KSA9PiB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBldmVudC50YXJnZXQuZmlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGZpbGVIYW5kbGVyKGV2ZW50LnRhcmdldC5maWxlc1tpXSlcbiAgICB9XG4gICAgZXZlbnQudGFyZ2V0LnZhbHVlID0gJydcbiAgfSlcblxuICByZXR1cm4gKDw+XG4gICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxuICAgICAgR2xpc3NleiBldCBkw6lwb3NleiBsZSBmaWNoaWVyIMOgIGFuYWx5c2VyIG91IHPDqWxlY3Rpb25uZXogbGUuPGJyLz5cbiAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG9uQ2hhbmdlPXtzZWxlY3RIYW5kbGVyfSBtdWx0aXBsZS8+XG4gICAgPC9wPlxuXG4gICAge2lzUGVuZGluZyAmJiA8UGVuZGluZ01lc3NhZ2UgZmlsZVNpemU9e2ZpbGVTaXplfS8+fVxuXG4gICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxuICAgICAgTGVzIG9ww6lyYXRpb25zIHNvbnQgdG91dGVzIHLDqWFsaXPDqWVzIHN1ciB2b3RyZSBvcmRpbmF0ZXVyLjxici8+XG4gICAgICBBdWN1bmUgZG9ubsOpZSBwZXJzb25uZWxsZSBuJ2VzdCB0cmFuc2bDqXLDqWUuXG4gICAgPC9wPlxuICA8Lz4pXG59XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuSG9tZV9jb250YWluZXJfXzFFY3NVIHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgcGFkZGluZzogMCAwLjVyZW07XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbW96LWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAtbW96LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgICAgLW1vei1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgLW1vei1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgIC1tb3otYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5Ib21lX2NvbnRlbnRfXzJmcU96IHtcXG4gIG1heC13aWR0aDogODAwcHg7XFxufVxcblxcbi5Ib21lX21haW5fXzF4OGdDIHtcXG4gIHBhZGRpbmc6IDVyZW0gMDtcXG4gIC13ZWJraXQtZmxleDogMSAxO1xcbiAgICAgLW1vei1ib3gtZmxleDogMTtcXG4gICAgICAgICAgZmxleDogMSAxO1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogLW1vei1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgLW1vei1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gICAgIC1tb3otYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgIC1tb3otYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAtbW96LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uSG9tZV9mb290ZXJfXzFXZGhEIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWFlYWVhO1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogLW1vei1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgIC1tb3otYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAtbW96LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uSG9tZV9mb290ZXJfXzFXZGhEIGltZyB7XFxuICBtYXJnaW4tbGVmdDogMC41cmVtO1xcbn1cXG5cXG4uSG9tZV9mb290ZXJfXzFXZGhEIGEge1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogLW1vei1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgIC1tb3otYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAtbW96LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uSG9tZV90aXRsZV9fM0RqUjcgYSB7XFxuICBjb2xvcjogIzAwNzBmMztcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLkhvbWVfdGl0bGVfXzNEalI3IGE6aG92ZXIsXFxuLkhvbWVfdGl0bGVfXzNEalI3IGE6Zm9jdXMsXFxuLkhvbWVfdGl0bGVfXzNEalI3IGE6YWN0aXZlIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4uSG9tZV90aXRsZV9fM0RqUjcge1xcbiAgbWFyZ2luOiAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7XFxuICBmb250LXNpemU6IDRyZW07XFxufVxcblxcbi5Ib21lX3N1YnRpdGxlX18zSTJ5SSB7XFxuICBtYXJnaW46IDA7XFxuICBsaW5lLWhlaWdodDogMS4xNTtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuLkhvbWVfbWFyZ2luX2JvdHRvbV9fM09aVzkge1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uSG9tZV90aXRsZV9fM0RqUjcsXFxuLkhvbWVfc3VidGl0bGVfXzNJMnlJLFxcbi5Ib21lX2Rlc2NyaXB0aW9uX18xN1o0RixcXG4uSG9tZV9wZW5kaW5nX3dhcm5pbmdfXzJMNzZyLFxcbi5Ib21lX2NlbnRlcl9fMlp4ZHIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uSG9tZV9kZXNjcmlwdGlvbl9fMTdaNEYsXFxuLkhvbWVfdGV4dF9fMXNDUWEsXFxuLkhvbWVfcGVuZGluZ193YXJuaW5nX18yTDc2ciB7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBIb21lX2dyb3dfXzNpaUYtIHtcXG4gICAgMCUge1xcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDQpO1xcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDQpO1xcbiAgICAgIH1cXG4gICAgNTAlIHtcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgICB9XFxuICAgICAgMTAwJSB7XFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wNCk7XFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNCk7XFxuICAgIH1cXG59XFxuXFxuQC1tb3ota2V5ZnJhbWVzIEhvbWVfZ3Jvd19fM2lpRi0ge1xcbiAgICAwJSB7XFxuICAgICAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4wNCk7XFxuICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNCk7XFxuICAgICAgfVxcbiAgICA1MCUge1xcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICAgIH1cXG4gICAgICAxMDAlIHtcXG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjA0KTtcXG4gICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA0KTtcXG4gICAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIEhvbWVfZ3Jvd19fM2lpRi0ge1xcbiAgICAwJSB7XFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wNCk7XFxuICAgICAgICAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4wNCk7XFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNCk7XFxuICAgICAgfVxcbiAgICA1MCUge1xcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICAgIH1cXG4gICAgICAxMDAlIHtcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjA0KTtcXG4gICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjA0KTtcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA0KTtcXG4gICAgfVxcbn1cXG5cXG4uSG9tZV9wZW5kaW5nX3dhcm5pbmdfXzJMNzZyIHtcXG4gIGNvbG9yOiByZ2IoMTk5LCA1NSwgNTUpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiA1cztcXG4gICAgIC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOiA1cztcXG4gICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1czsgLyogdGhlIGR1cmF0aW9uIG9mIHRoZSBhbmltYXRpb24gKi9cXG4gIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxuICAgICAtbW96LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbiAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDsgLyogaG93IHRoZSBhbmltYXRpb24gd2lsbCBiZWhhdmUgKi9cXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwcztcXG4gICAgIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAwcztcXG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwczsgLyogaG93IGxvbmcgdG8gZGVsYXkgdGhlIGFuaW1hdGlvbiBmcm9tIHN0YXJ0aW5nICovXFxuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcbiAgICAgLW1vei1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXG4gICAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7IC8qIGhvdyBtYW55IHRpbWVzIHRoZSBhbmltYXRpb24gd2lsbCBwbGF5ICovXFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBIb21lX2dyb3dfXzNpaUYtO1xcbiAgICAgLW1vei1hbmltYXRpb24tbmFtZTogSG9tZV9ncm93X18zaWlGLTtcXG4gICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IEhvbWVfZ3Jvd19fM2lpRi07IC8qIHRoZSBuYW1lIG9mIHRoZSBhbmltYXRpb24gd2UgZGVmaW5lZCBhYm92ZSAqL1xcbn1cXG5cXG4uSG9tZV9jb2RlX19heHgyWSB7XFxuICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogMC43NXJlbTtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgZm9udC1mYW1pbHk6IE1lbmxvLCBNb25hY28sIEx1Y2lkYSBDb25zb2xlLCBMaWJlcmF0aW9uIE1vbm8sIERlamFWdSBTYW5zIE1vbm8sXFxuICAgIEJpdHN0cmVhbSBWZXJhIFNhbnMgTW9ubywgQ291cmllciBOZXcsIG1vbm9zcGFjZTtcXG59XFxuXFxuLkhvbWVfYm9sZF9fMnRLZXoge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5Ib21lX2xlZ2VuZGVfXzNmNHVuIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleCAhaW1wb3J0YW50O1xcbiAgZGlzcGxheTogLW1vei1ib3ggIWltcG9ydGFudDtcXG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcXG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgbWFyZ2luOiAwIDNyZW07XFxufVxcblxcbi5Ib21lX2xlZ2VuZGVfdGl0bGVfXzJCcmpfIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi5Ib21lX2xlZ2VuZGVfYm94X18zMmIxSSB7XFxuICB3aWR0aDogNDAlO1xcbiAgLyogbWFyZ2luOiAwIDFyZW07ICovXFxufVxcblxcbi5Ib21lX2dyaWRfXzJFaTJGIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tb3otYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICAgICAtbW96LWJveC1hbGlnbjogc3RyZXRjaDtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICAtd2Via2l0LWZsZXgtd3JhcDogd3JhcDtcXG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcbiAgbWFyZ2luLXRvcDogM3JlbTtcXG59XFxuXFxuLkhvbWVfZ3JpZF9fMkVpMkYsXFxuLkhvbWVfdGV4dF9fMXNDUWEge1xcbiAgbWF4LXdpZHRoOiA4MDBweDtcXG59XFxuXFxuLkhvbWVfY2FyZF9fMlNkdEIge1xcbiAgbWFyZ2luOiAxcmVtO1xcbiAgLXdlYmtpdC1mbGV4LWJhc2lzOiA0NSU7XFxuICAgICAgICAgIGZsZXgtYmFzaXM6IDQ1JTtcXG4gIHBhZGRpbmc6IDEuNXJlbTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlYWVhZWE7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgLW1vei10cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLCBib3JkZXItY29sb3IgMC4xNXMgZWFzZTtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlO1xcbn1cXG5cXG4uSG9tZV9jYXJkX18yU2R0Qjpob3ZlcixcXG4uSG9tZV9jYXJkX18yU2R0Qjpmb2N1cyxcXG4uSG9tZV9jYXJkX18yU2R0QjphY3RpdmUge1xcbiAgY29sb3I6ICMwMDcwZjM7XFxuICBib3JkZXItY29sb3I6ICMwMDcwZjM7XFxufVxcblxcbi5Ib21lX2NhcmRfXzJTZHRCIGgzIHtcXG4gIG1hcmdpbjogMCAwIDFyZW0gMDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uSG9tZV9jYXJkX18yU2R0QiBwIHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxufVxcblxcbi5Ib21lX2xvZ29fXzFZYnJIIHtcXG4gIGhlaWdodDogMWVtO1xcbn1cXG5cXG4uSG9tZV9jcmVhdGVfX1NPRVpMIHtcXG4gIG1heC13aWR0aDogODAwcHg7XFxuICBtYXJnaW46IDUwcHggYXV0bztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tb3otYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgLW1vei1ib3gtcGFjazoganVzdGlmeTtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4uSG9tZV9jcmVhdGVfX1NPRVpMIGxhYmVsIHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLkhvbWVfY3JlYXRlX19TT0VaTCBpbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDZweCAxMHB4O1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5Ib21lX2NyZWF0ZV9fU09FWkwgYnV0dG9uIHtcXG4gIG1hcmdpbjogMjBweCBhdXRvIDAgYXV0bztcXG4gIGJhY2tncm91bmQ6ICMzNTcxZjE7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogMDtcXG4gIHBhZGRpbmc6IDEycHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLkhvbWVfZ3JpZF9fMkVpMkYge1xcbiAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgIC1tb3otYm94LW9yaWVudDogdmVydGljYWw7XFxuICAgICAgIC1tb3otYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuICAuSG9tZV9ncmlkX18yRWkyRixcXG4gIC5Ib21lX3RleHRfXzFzQ1FhIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxufVxcblxcbi5Ib21lX251bWVyaWNfXzFXbnFhIHtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiXSxcIm5h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QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0U7SUFDRSw4QkFBc0I7T0FBdEIseUJBQXNCO09BQXRCLDBCQUFzQjtZQUF0QixzQkFBc0I7RUFDeEI7RUFDQTs7SUFFRSxXQUFXO0VBQ2I7QUFDRjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY29udGFpbmVyIHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgcGFkZGluZzogMCAwLjVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgbWF4LXdpZHRoOiA4MDBweDtcXG59XFxuXFxuLm1haW4ge1xcbiAgcGFkZGluZzogNXJlbSAwO1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWFlYWVhO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZvb3RlciBpbWcge1xcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXG59XFxuXFxuLmZvb3RlciBhIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50aXRsZSBhIHtcXG4gIGNvbG9yOiAjMDA3MGYzO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4udGl0bGUgYTpob3ZlcixcXG4udGl0bGUgYTpmb2N1cyxcXG4udGl0bGUgYTphY3RpdmUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi50aXRsZSB7XFxuICBtYXJnaW46IDA7XFxuICBsaW5lLWhlaWdodDogMS4xNTtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG59XFxuXFxuLnN1YnRpdGxlIHtcXG4gIG1hcmdpbjogMDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjE1O1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4ubWFyZ2luX2JvdHRvbSB7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4ICFpbXBvcnRhbnQ7XFxufVxcblxcbi50aXRsZSxcXG4uc3VidGl0bGUsXFxuLmRlc2NyaXB0aW9uLFxcbi5wZW5kaW5nX3dhcm5pbmcsXFxuLmNlbnRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5kZXNjcmlwdGlvbixcXG4udGV4dCxcXG4ucGVuZGluZ193YXJuaW5nIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuQGtleWZyYW1lcyBncm93IHtcXG4gICAgMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA0KTtcXG4gICAgICB9XFxuICAgIDUwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICAgIH1cXG4gICAgICAxMDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNCk7XFxuICAgIH1cXG59XFxuXFxuLnBlbmRpbmdfd2FybmluZyB7XFxuICBjb2xvcjogcmdiKDE5OSwgNTUsIDU1KTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDVzOyAvKiB0aGUgZHVyYXRpb24gb2YgdGhlIGFuaW1hdGlvbiAqL1xcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7IC8qIGhvdyB0aGUgYW5pbWF0aW9uIHdpbGwgYmVoYXZlICovXFxuICBhbmltYXRpb24tZGVsYXk6IDBzOyAvKiBob3cgbG9uZyB0byBkZWxheSB0aGUgYW5pbWF0aW9uIGZyb20gc3RhcnRpbmcgKi9cXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlOyAvKiBob3cgbWFueSB0aW1lcyB0aGUgYW5pbWF0aW9uIHdpbGwgcGxheSAqL1xcbiAgYW5pbWF0aW9uLW5hbWU6IGdyb3c7IC8qIHRoZSBuYW1lIG9mIHRoZSBhbmltYXRpb24gd2UgZGVmaW5lZCBhYm92ZSAqL1xcbn1cXG5cXG4uY29kZSB7XFxuICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogMC43NXJlbTtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgZm9udC1mYW1pbHk6IE1lbmxvLCBNb25hY28sIEx1Y2lkYSBDb25zb2xlLCBMaWJlcmF0aW9uIE1vbm8sIERlamFWdSBTYW5zIE1vbm8sXFxuICAgIEJpdHN0cmVhbSBWZXJhIFNhbnMgTW9ubywgQ291cmllciBOZXcsIG1vbm9zcGFjZTtcXG59XFxuXFxuLmJvbGQge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5sZWdlbmRlIHtcXG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgbWFyZ2luOiAwIDNyZW07XFxufVxcblxcbi5sZWdlbmRlX3RpdGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi5sZWdlbmRlX2JveCB7XFxuICB3aWR0aDogNDAlO1xcbiAgLyogbWFyZ2luOiAwIDFyZW07ICovXFxufVxcblxcbi5ncmlkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIG1hcmdpbi10b3A6IDNyZW07XFxufVxcblxcbi5ncmlkLFxcbi50ZXh0IHtcXG4gIG1heC13aWR0aDogODAwcHg7XFxufVxcblxcbi5jYXJkIHtcXG4gIG1hcmdpbjogMXJlbTtcXG4gIGZsZXgtYmFzaXM6IDQ1JTtcXG4gIHBhZGRpbmc6IDEuNXJlbTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlYWVhZWE7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZSwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2U7XFxufVxcblxcbi5jYXJkOmhvdmVyLFxcbi5jYXJkOmZvY3VzLFxcbi5jYXJkOmFjdGl2ZSB7XFxuICBjb2xvcjogIzAwNzBmMztcXG4gIGJvcmRlci1jb2xvcjogIzAwNzBmMztcXG59XFxuXFxuLmNhcmQgaDMge1xcbiAgbWFyZ2luOiAwIDAgMXJlbSAwO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5jYXJkIHAge1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG59XFxuXFxuLmxvZ28ge1xcbiAgaGVpZ2h0OiAxZW07XFxufVxcblxcbi5jcmVhdGUge1xcbiAgbWF4LXdpZHRoOiA4MDBweDtcXG4gIG1hcmdpbjogNTBweCBhdXRvO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLmNyZWF0ZSBsYWJlbCB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5jcmVhdGUgaW5wdXQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiA2cHggMTBweDtcXG4gIG1hcmdpbjogMTBweCAwO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLmNyZWF0ZSBidXR0b24ge1xcbiAgbWFyZ2luOiAyMHB4IGF1dG8gMCBhdXRvO1xcbiAgYmFja2dyb3VuZDogIzM1NzFmMTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyOiAwO1xcbiAgcGFkZGluZzogMTJweDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAuZ3JpZCB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuICAuZ3JpZCxcXG4gIC50ZXh0IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxufVxcblxcbi5udW1lcmljIHtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJjb250YWluZXJcIjogXCJIb21lX2NvbnRhaW5lcl9fMUVjc1VcIixcblx0XCJjb250ZW50XCI6IFwiSG9tZV9jb250ZW50X18yZnFPelwiLFxuXHRcIm1haW5cIjogXCJIb21lX21haW5fXzF4OGdDXCIsXG5cdFwiZm9vdGVyXCI6IFwiSG9tZV9mb290ZXJfXzFXZGhEXCIsXG5cdFwidGl0bGVcIjogXCJIb21lX3RpdGxlX18zRGpSN1wiLFxuXHRcInN1YnRpdGxlXCI6IFwiSG9tZV9zdWJ0aXRsZV9fM0kyeUlcIixcblx0XCJtYXJnaW5fYm90dG9tXCI6IFwiSG9tZV9tYXJnaW5fYm90dG9tX18zT1pXOVwiLFxuXHRcImRlc2NyaXB0aW9uXCI6IFwiSG9tZV9kZXNjcmlwdGlvbl9fMTdaNEZcIixcblx0XCJwZW5kaW5nX3dhcm5pbmdcIjogXCJIb21lX3BlbmRpbmdfd2FybmluZ19fMkw3NnJcIixcblx0XCJjZW50ZXJcIjogXCJIb21lX2NlbnRlcl9fMlp4ZHJcIixcblx0XCJ0ZXh0XCI6IFwiSG9tZV90ZXh0X18xc0NRYVwiLFxuXHRcImdyb3dcIjogXCJIb21lX2dyb3dfXzNpaUYtXCIsXG5cdFwiY29kZVwiOiBcIkhvbWVfY29kZV9fYXh4MllcIixcblx0XCJib2xkXCI6IFwiSG9tZV9ib2xkX18ydEtlelwiLFxuXHRcImxlZ2VuZGVcIjogXCJIb21lX2xlZ2VuZGVfXzNmNHVuXCIsXG5cdFwibGVnZW5kZV90aXRsZVwiOiBcIkhvbWVfbGVnZW5kZV90aXRsZV9fMkJyal9cIixcblx0XCJsZWdlbmRlX2JveFwiOiBcIkhvbWVfbGVnZW5kZV9ib3hfXzMyYjFJXCIsXG5cdFwiZ3JpZFwiOiBcIkhvbWVfZ3JpZF9fMkVpMkZcIixcblx0XCJjYXJkXCI6IFwiSG9tZV9jYXJkX18yU2R0QlwiLFxuXHRcImxvZ29cIjogXCJIb21lX2xvZ29fXzFZYnJIXCIsXG5cdFwiY3JlYXRlXCI6IFwiSG9tZV9jcmVhdGVfX1NPRVpMXCIsXG5cdFwibnVtZXJpY1wiOiBcIkhvbWVfbnVtZXJpY19fMVducWFcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEFkbWluIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvYWRtaW4nXG5pbXBvcnQgUmVzcG9uc2l2ZUNhbGVuZGFyIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvY2hhcnQnXG5pbXBvcnQgRmlsZUhhbmRsZXIgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9maWxlJ1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL2Zvb3RlcidcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9sYXlvdXQnXG5pbXBvcnQgeyBmcmVxdWVuY3lOYW1lcywgdHlwZU5hbWVzIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL2NuYWYnXG5pbXBvcnQgeyBpbml0UmVkdWNlciwgcmVkdWNlckZhY3RvcnkgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvaGlzdG9yaXF1ZSdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vLi4vLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcblxuXG5cbmNvbnN0IHJlZHVjZXIgPSByZWR1Y2VyRmFjdG9yeSgnVGVzdCAtIENOQUYgLSBCw6luw6lmaWNpYWlyZScpXG5jb25zdCBkZXZNb2RlID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT0gJ2RldmVsb3BtZW50J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCZW5lZmljaWFpcmUoKSB7XG4gIGNvbnN0IFtkZXZGaWxlLCBzZXREZXZGaWxlXSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFtydW5zLCBkaXNwYXRjaFJ1bnNdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBbXSwgaW5pdFJlZHVjZXIpXG4gIGNvbnN0IFtpc1BlbmRpbmcsIHNldElzUGVuZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtmaWxlU2l6ZSwgc2V0RmlsZVNpemVdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtrZXlzRHJvaXRzLCBzZXRLZXlzRHJvaXRzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2tleXNEZXZvaXJzLCBzZXRLZXlzRGV2b2lyc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtkYXRlRGF0YSwgc2V0RGF0ZURhdGFdID0gdXNlU3RhdGUoe1xuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgZGF0YTogW10sXG4gICAgZnJvbTogXCIyMDE2LTAzLTAxXCIsXG4gICAgdG86IFwiMjAyMS0wMy0wMVwiLFxuICB9KVxuXG4gIGNvbnN0IGhhbmRsZU5ld1J1bnMgPSB1c2VDYWxsYmFjayhkYXRhID0+IHtcbiAgICBkaXNwYXRjaFJ1bnMoe1xuICAgICAgdHlwZTogJ3Jlc2V0JyxcbiAgICAgIGZvbGRlcnM6IGRhdGFcbiAgICB9KVxuICB9KVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYoZGV2RmlsZSkge1xuICAgICAgZmlsZUhhbmRsZXIoZGV2RmlsZSlcbiAgICB9XG4gIH0sIFtkZXZGaWxlXSlcblxuICBjb25zdCBoYW5kbGVEYXRlSGlzdG9ncmFtID0gdXNlQ2FsbGJhY2soZXZlbnQgPT4gc2hvd0RhdGVIaXN0b2dyYW0ocGFyc2VJbnQoZXZlbnQudGFyZ2V0LmRhdGFzZXQuaW5kZXgpKSlcbiAgY29uc3Qgc2hvd0RhdGVIaXN0b2dyYW0gPSB1c2VDYWxsYmFjayhpbmRleCA9PiB7XG4gICAgY29uc3Qgc291cmNlID0gcnVuc1tpbmRleF1cblxuICAgIGNvbnN0IGRhdGVzID0gT2JqZWN0LmtleXMoc291cmNlLmRhdGVzKVxuICAgIGxldCBtaW5EYXRlID0gbnVsbFxuICAgIGxldCBtYXhEYXRlID0gbnVsbFxuXG4gICAgY29uc3QgZGF0YSA9IGRhdGVzLm1hcChkID0+IHtcbiAgICAgIGxldCBkYXRlID0gbmV3IERhdGUoZClcbiAgICAgIGlmICghbWluRGF0ZSkge1xuICAgICAgICBtaW5EYXRlID0gZGF0ZVxuICAgICAgICBtYXhEYXRlID0gZGF0ZVxuICAgICAgfSBlbHNlIGlmIChkYXRlIDwgbWluRGF0ZSkge1xuICAgICAgICBtaW5EYXRlID0gZGF0ZVxuICAgICAgfSBlbHNlIGlmIChtYXhEYXRlIDwgZGF0ZSkge1xuICAgICAgICBtYXhEYXRlID0gZGF0ZVxuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGF5OiBkYXRlLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApLFxuICAgICAgICB2YWx1ZTogc291cmNlLmRhdGVzW2RdXG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IHllYXJDb3VudCA9IG1heERhdGUuZ2V0WWVhcigpIC0gbWluRGF0ZS5nZXRZZWFyKCkgKyAxXG4gICAgc2V0RGF0ZURhdGEoe1xuICAgICAgaW5kZXgsXG4gICAgICBkYXRhLFxuICAgICAgZnJvbTogbWluRGF0ZS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKSxcbiAgICAgIHRvOiBtYXhEYXRlLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApLFxuICAgICAgeWVhckNvdW50LFxuICAgIH0pXG4gIH0pXG5cbiAgY29uc3QgZmlsZUhhbmRsZXIgPSAoZmlsZSkgPT4ge1xuICAgIGlmIChkZXZNb2RlICYmIGZpbGUgIT0gZGV2RmlsZSkge1xuICAgICAgc2V0RGV2RmlsZShmaWxlKVxuICAgIH1cbiAgICBzZXRGaWxlU2l6ZShmaWxlLnNpemUpO1xuICAgIHNldElzUGVuZGluZyh0cnVlKTtcbiAgICBjb25zdCBzdGFydF90aW1lID0gbmV3IERhdGUoKTtcblxuICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXG4gICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBjb25zdCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKClcbiAgICAgIGNvbnN0IGRvbSA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoZXZlbnQudGFyZ2V0LnJlc3VsdCwgXCJhcHBsaWNhdGlvbi94bWxcIilcblxuICAgICAgY29uc3QgZGVzYyA9IGRvbS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnSWRlbnRpZmljYXRpb25GbHV4JylbMF1cbiAgICAgIGNvbnN0IGZyZXF1ZW5jeSA9IGRlc2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ1RZUEVGTFVYJylbMF0uaW5uZXJIVE1MXG4gICAgICBjb25zdCB0eXBlID0gZGVzYy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnTkFURkxVWCcpWzBdLmlubmVySFRNTFxuICAgICAgY29uc3QgZHQgPSBkZXNjLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdEVENSRUFGTFVYJylbMF0uaW5uZXJIVE1MXG4gICAgICBjb25zdCB0aW1lID0gZGVzYy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnSEVVQ1JFQUZMVVgnKVswXS5pbm5lckhUTUxcblxuICAgICAgY29uc3QgcHJvY2Vzc0ZpZWxkID0gKGFjY3VtLCB2YWx1ZSkgPT4ge1xuICAgICAgICAgIGlmICh2YWx1ZVswXSkge1xuICAgICAgICAgICAgYWNjdW1bdmFsdWVbMF0uaW5uZXJIVE1MXSA9IChhY2N1bVt2YWx1ZVswXS5pbm5lckhUTUxdIHx8IDApICsgMVxuICAgICAgICAgICAgYWNjdW1bXCJUb3RhbFwiXSA9IChhY2N1bVtcIlRvdGFsXCJdIHx8IDApICsgMVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gYWNjdW1cbiAgICAgIH1cblxuICAgICAgY29uc3QgZm9sZGVycyA9IG5ldyBBcnJheSguLi5kb20uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ0luZm9zRm95ZXJSU0EnKSlcbiAgICAgIGNvbnN0IHBlb3BsZSA9IG5ldyBBcnJheSguLi5kb20uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ1BlcnNvbm5lJykpXG5cbiAgICAgIGNvbnN0IGRhdGVzID0gZm9sZGVyc1xuICAgICAgICAubWFwKGkgPT4gaS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnRFRERU1SU0EnKVswXS5pbm5lckhUTUwpXG4gICAgICAgIC5yZWR1Y2UoKGFjY3VtLCB2YWx1ZSkgPT4ge1xuICAgICAgICAgIGFjY3VtW3ZhbHVlXSA9IChhY2N1bVt2YWx1ZV0gfHwgMCApICsgMVxuICAgICAgICAgIHJldHVybiBhY2N1bVxuICAgICAgICB9LCB7fSlcblxuICAgICAgY29uc3QgZHJvaXRzID0gZm9sZGVyc1xuICAgICAgICAubWFwKGkgPT4gaS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnRVRBVERPU1JTQScpKVxuICAgICAgICAucmVkdWNlKHByb2Nlc3NGaWVsZCwge30pXG4gICAgICBsZXQgbmV3S2V5c0Ryb2l0cyA9IGtleXNEcm9pdHMuY29uY2F0KE9iamVjdC5rZXlzKGRyb2l0cykpO1xuICAgICAgbmV3S2V5c0Ryb2l0cyA9IEFycmF5LmZyb20obmV3IFNldChuZXdLZXlzRHJvaXRzKSlcbiAgICAgIHNldEtleXNEcm9pdHMobmV3S2V5c0Ryb2l0cylcblxuICAgICAgY29uc3QgZGV2b2lycyA9IHBlb3BsZVxuICAgICAgICAubWFwKGkgPT4gaS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnVE9QUEVSU0RST0RFVk9SU0EnKSlcbiAgICAgICAgLnJlZHVjZShwcm9jZXNzRmllbGQsIHt9KVxuICAgICAgbGV0IG5ld0tleXNEZXZvaXJzID0ga2V5c0Rldm9pcnMuY29uY2F0KE9iamVjdC5rZXlzKGRldm9pcnMpKTtcbiAgICAgIG5ld0tleXNEZXZvaXJzID0gQXJyYXkuZnJvbShuZXcgU2V0KG5ld0tleXNEZXZvaXJzKSlcbiAgICAgIHNldEtleXNEZXZvaXJzKG5ld0tleXNEZXZvaXJzKVxuXG4gICAgICBjb25zdCBmb2xkZXJzRHJvaXRzT3V2ZXJ0cyA9IGZvbGRlcnNcbiAgICAgICAgLmZpbHRlcihpID0+IGkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ0VUQVRET1NSU0EnKVswXS5pbm5lckhUTUwgPT0gXCIyXCIpXG4gICAgICAgIC5tYXAoaSA9PiB7XG4gICAgICAgICAgbGV0IGl0ZW1zID0gaS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnUGVyc29ubmUnKVxuICAgICAgICAgIHJldHVybiBbLi4uaXRlbXNdXG4gICAgICAgIH0pXG4gICAgICAgIC5mbGF0KClcblxuICAgICAgY29uc3QgZHJvaXRzRXREZXZvaXJzID0gZm9sZGVyc0Ryb2l0c091dmVydHNcbiAgICAgICAgLm1hcChpID0+IGkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ1RPUFBFUlNEUk9ERVZPUlNBJykpXG4gICAgICAgIC5yZWR1Y2UocHJvY2Vzc0ZpZWxkLCB7fSlcblxuICAgICAgc2V0SXNQZW5kaW5nKGZhbHNlKTtcblxuLy8gTm90ZSBwb3VyIHBsdXMgdGFyZCA6XG5cbi8vIElsIHBvdXJyYSDDqnRyZSBpbnTDqXJlc3NhbnQsIGRhbnMgdW5lIHNlY29uZGUgaXTDqXJhdGlvbiBkZSByZWNvdXBlciBUT1BQRVJTRFJPREVWT1JTQSBhdmVjIFJPTEVQRVJTLlxuXG4vLyBJbCBwb3VycmEgw6p0cmUgaW50w6lyZXNzYW50IGRhbnMgdW5lIHRyb2lzacOobWUgaXTDqXJhdGlvbiBkZSBmYWlyZSBsZSBjcm9pc2VtZW50IGVudHJlIEVUQVRET1NSU0EgZCd1bmUgcGFydCBldCAoIFRPUFBFUlNEUk9ERVZPUlNBIC8gUk9MRVBFUlMgKSBkJ2F1dHJlcyBwYXJ0IG1haXMgcG91ciBjZWxhIGlsIGZhdWRyYSB1biB0YWJsZWF1IGF2ZWMgdW5lIGxpZ25lIHBhciB2YWxldXIgZGUgRVRBVERPU1JTQSBldCB1bmUgY29sb25uZSBwYXIgY3JvaXNlbWVudCAoIFRPUFBFUlNEUk9ERVZPUlNBIC8gUk9MRVBFUlMgKS5cblxuICAgICAgZGlzcGF0Y2hSdW5zKHtcbiAgICAgICAgdHlwZTogJ2FwcGVuZCcsXG4gICAgICAgIGl0ZW06IHtcbiAgICAgICAgICBzZWVkOiBNYXRoLnJhbmRvbSgpLFxuICAgICAgICAgIHRpbWVzdGFtcDogKG5ldyBEYXRlKCkpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTkpLFxuICAgICAgICAgIGR1cmF0aW9uOiAobmV3IERhdGUoKSkgLSBzdGFydF90aW1lLFxuICAgICAgICAgIGZpbGVuYW1lOiBmaWxlLm5hbWUsXG4gICAgICAgICAgZmlsZURhdGV0aW1lOiBgJHtkdH0tJHt0aW1lfWAsXG4gICAgICAgICAgZnJlcXVlbmN5LFxuICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgLy8gV0lQOiBPSyBzdXIgRmlyZWZveCBLTyBzdXIgQ2hyb21lXG4gICAgICAgICAgZXJyb3I6IGRvbS5hY3RpdmVFbGVtZW50ICYmIGRvbS5hY3RpdmVFbGVtZW50Lm5vZGVOYW1lID09IFwicGFyc2VyZXJyb3JcIixcbiAgICAgICAgICB0b3RhbDogZm9sZGVycy5sZW5ndGgsXG4gICAgICAgICAgZmlsZVNpemU6IGZpbGUuc2l6ZSxcbiAgICAgICAgICBwZW9wbGU6IHBlb3BsZS5sZW5ndGgsXG4gICAgICAgICAgZGF0ZXMsXG4gICAgICAgICAgZGV2b2lycyxcbiAgICAgICAgICBkcm9pdHMsXG4gICAgICAgICAgZHJvaXRzRXREZXZvaXJzXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIHJlYWRlci5yZWFkQXNUZXh0KGZpbGUpXG4gIH1cblxuICBjb25zdCByb3VuZCA9ICh2YWx1ZSkgPT4gTWF0aC5yb3VuZCh2YWx1ZSlcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8QWRtaW4gY2F0ZWdvcnk9XCJCw6luw6lmaWNpYWlyZVwiIG9uUnVuUmVmcmVzaD17aGFuZGxlTmV3UnVuc30vPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XG4gICAgICAgICAgTGVjdGV1ciBkZSBmaWNoaWVyPGJyLz7CqyBCw6luw6lmaWNpYWlyZSDCuyBkZSBsYSBDTkFGXG4gICAgICAgIDwvaDE+XG5cbiAgICAgICAgPEZpbGVIYW5kbGVyIGZpbGVIYW5kbGVyPXtmaWxlSGFuZGxlcn0gaXNQZW5kaW5nPXtpc1BlbmRpbmd9IGZpbGVTaXplPXtmaWxlU2l6ZX0gLz5cblxuICAgICAgICB7IHJ1bnMgJiYgcnVucy5sZW5ndGggPiAwICYmICg8PlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5zdWJ0aXRsZX0+XG4gICAgICAgICAgICBTdGF0aXN0aXF1ZXMgZHJvaXRzICYgZGV2b2lyc1xuICAgICAgICAgIDwvaDI+XG5cbiAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPXtzdHlsZXMubWFyZ2luX3NpZGV9PlxuICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+PC90aD5cbiAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5Eb3NzaWVycyAoRm95ZXJzKTwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+UGVyc29ubmVzPC90aD5cbiAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj17a2V5c0Ryb2l0cy5sZW5ndGh9PlZhbGV1cnMgYmFsaXNlcyBFVEFURE9TUlNBPC90aD5cbiAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj17a2V5c0Rldm9pcnMubGVuZ3RofT5WYWxldXJzIGJhbGlzZXMgVE9QUEVSU0RST0RFVk9SU0E8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPlBlcnNvbm5lcyBzb3VtaXNlcyBkcm9pdHMgZXQgZGV2b2lycyBkYW5zIGZveWVyIGRyb2l0IG91dmVydCBldCB2ZXJzYWJsZTwvdGg+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICB7a2V5c0Ryb2l0cy5tYXAoayA9PiA8dGgga2V5PXtrfSBjb2xTcGFuPVwiMVwiPntrfTwvdGg+KX1cbiAgICAgICAgICAgICAgICB7a2V5c0Rldm9pcnMubWFwKGsgPT4gPHRoIGtleT17a30gY29sU3Bhbj1cIjFcIj57a308L3RoPil9XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICB7cnVucy5tYXAoKHIsIGkpID0+ICg8dHIga2V5PXtgJHtyLnRpbWVzdGFtcH0tJHtyLmZpbGVuYW1lfS0ke3Iuc2VlZH0tMGAgfSBzdHlsZT17IGkgPT0gZGF0ZURhdGEuaW5kZXggPyB7YmFja2dyb3VuZENvbG9yOiAnbGlnaHRncmV5J306IHt9IH0+XG4gICAgICAgICAgICAgICAgPHRkPntydW5zLmxlbmd0aCAtIGl9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT57ci50b3RhbH08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9PntyLnBlb3BsZX08L3RkPlxuICAgICAgICAgICAgICAgIHtrZXlzRHJvaXRzLm1hcChrID0+IDx0ZCBrZXk9e2t9IGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+e3IuZHJvaXRzW2tdIHx8IDB9PC90ZD4pfVxuICAgICAgICAgICAgICAgIHtrZXlzRGV2b2lycy5tYXAoayA9PiA8dGQga2V5PXtrfSBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9PntyLmRldm9pcnNba10gfHwgMH08L3RkPil9XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+e3IuZHJvaXRzRXREZXZvaXJzWzFdIHx8IDB9PC90ZD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICkpfVxuXG4gICAgICAgICAgICAgIDx0cj5cblxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICA8L3RhYmxlPlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sZWdlbmRlfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGVnZW5kZV9ib3h9PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5sZWdlbmRlX3RpdGxlfT5Mw6lnZW5kZSZuYnNwOzo8L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmJvbGR9PlZhbGV1ciBiYWxpc2UgRVRBVERPU1JTQTwvcD5cbiAgICAgICAgICAgICAgPHA+MD1Ob3V2ZWxsZSBkZW1hbmRlIGVuIGF0dGVudGUgZGUgZMOpY2lzaW9uIENHIHBvdXIgb3V2ZXJ0dXJlIGR1IGRyb2l0PGJyLz5cbiAgICAgICAgICAgICAgMT1Ecm9pdCByZWZ1c8OpPGJyLz5cbiAgICAgICAgICAgICAgMj1Ecm9pdCBvdXZlcnQgZXQgdmVyc2FibGU8YnIvPlxuICAgICAgICAgICAgICAzPURyb2l0IG91dmVydCBldCBzdXNwZW5kdSAobGUgbW9udGFudCBkdSBkcm9pdCBlc3QgY2FsY3VsYWJsZSwgbWFpcyBsJ2V4aXN0ZW5jZSBkdSBkcm9pdCBlc3QgcmVtaXMgZW4gY2F1c2UpPGJyLz5cbiAgICAgICAgICAgICAgND1Ecm9pdCBvdXZlcnQgbWFpcyB2ZXJzZW1lbnQgc3VzcGVuZHUgKGxlIG1vbnRhbnQgZHUgZHJvaXQgbidlc3QgcGFzIGNhbGN1bGFibGUpPGJyLz5cbiAgICAgICAgICAgICAgNT1Ecm9pdCBjbG9zPGJyLz5cbiAgICAgICAgICAgICAgNj1Ecm9pdCBjbG9zIHN1ciBtb2lzIGFudMOpcmlldXIgYXlhbnQgZXUgdW4gY29udHLDtGxlIGRhbnMgbGUgbW9pcyBkZSByw6lmw6lyZW5jZSBwb3VyIHVuZSBww6lyaW9kZSBhbnTDqXJpZXVyZS48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGVnZW5kZV9ib3h9PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5ib2xkfT5WYWxldXIgYmFsaXNlIFRPUFBFUlNEUk9ERVZPUlNBPC9wPlxuICAgICAgICAgICAgICA8cD4wPVBlcnNvbm5lIHBhcyBzb3VtaXNlIMOgIGRyb2l0cyBldCBkZXZvaXJzPGJyIC8+XG4gICAgICAgICAgICAgIDE9UGVyc29ubmUgc291bWlzZSDDoCBkcm9pdHMgZXQgZGV2b2lyczwvcD5cbiAgICAgICAgICAgICAgPHA+Jm5ic3A7PC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5ib2xkfT5QZXJzb25uZXMgc291bWlzZXMgZHJvaXRzIGV0IGRldm9pcnMgZGFucyBmb3llciBkcm9pdCBvdXZlcnQgZXQgdmVyc2FibGU8L3A+XG4gICAgICAgICAgICAgIDxwPk5vbWJyZSBkZSBwZXJzb25uZXMgZG9udCBsYSBiYWxpc2UgVE9QUEVSU0RST0RFVk9SU0E9MSBwcsOpc2VudHMgZGFucyBkZXMgZm95ZXJzIGRvbnQgbGEgYmFsaXNlIEVUQVRET1NSU0E9MjwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnN1YnRpdGxlfT5cbiAgICAgICAgICAgIEhpc3RvcmlxdWVcbiAgICAgICAgICA8L2gyPlxuXG4gICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT17c3R5bGVzLm1hcmdpbl9zaWRlfT5cbiAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPjwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+RmljaGllcjwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+RGF0ZTwvdGg+XG4gICAgICAgICAgICAgICAgeyBkZXZNb2RlICYmIDx0aCByb3dTcGFuPVwiMlwiPlRhaWxsZTwvdGg+fVxuICAgICAgICAgICAgICAgIHsgZGV2TW9kZSAmJiA8dGggcm93U3Bhbj1cIjJcIj5EdXLDqWU8YnIvPihlbiBzKTwvdGg+fVxuICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPkRhdGUgZHUgZmljaGllcjwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+RnLDqXF1ZW5jZTwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+TmF0dXJlPC90aD5cbiAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5Eb3NzaWVyczwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+RMOpdGFpbHM8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPkVycmV1cjwvdGg+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgIHtydW5zLm1hcCgociwgaSkgPT4gKDx0ciBrZXk9e2Ake3IudGltZXN0YW1wfS0ke3IuZmlsZW5hbWV9LSR7ci5zZWVkfWAgfSBzdHlsZT17IGkgPT0gZGF0ZURhdGEuaW5kZXggPyB7YmFja2dyb3VuZENvbG9yOiAnbGlnaHRncmV5J306IHt9IH0+XG4gICAgICAgICAgICAgICAgPHRkPntydW5zLmxlbmd0aCAtIGl9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e3IuZmlsZW5hbWV9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e3IudGltZXN0YW1wfTwvdGQ+XG4gICAgICAgICAgICAgICAgeyBkZXZNb2RlICYmIDx0ZD57ci5maWxlU2l6ZX08L3RkPn1cbiAgICAgICAgICAgICAgICB7IGRldk1vZGUgJiYgPHRkPnshaXNOYU4oci5kdXJhdGlvbikgPyByLmR1cmF0aW9uLzEwMDAgOiBcIiNOL0FcIn08L3RkPn1cbiAgICAgICAgICAgICAgICA8dGQ+e3IuZmlsZURhdGV0aW1lfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPntgJHtyLmZyZXF1ZW5jeX0gKCR7ZnJlcXVlbmN5TmFtZXNbci5mcmVxdWVuY3ldIHx8ICc/J30pYH08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57YCR7ci50eXBlfSAoJHt0eXBlTmFtZXNbci50eXBlXSB8fCAnPyd9KWB9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMubnVtZXJpY30+e3IudG90YWx9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwic2hyaW5rXCI+PGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVEYXRlSGlzdG9ncmFtfSBkYXRhLWluZGV4PXtpfT5BZmZpY2hlciBwYXIgZGF0ZTwvYnV0dG9uPjwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPntyLmVycm9yID8gJ091aScgOiAnTm9uJ308L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgIDwvdGFibGU+XG5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoUnVucyh7dHlwZTogJ3Jlc2V0J30pfSBjbGFzc05hbWU9e3N0eWxlcy5tYXJnaW5fYm90dG9tfT5WaWRlciBsJ2hpc3RvcmlxdWU8L2J1dHRvbj5cbiAgICAgICAgPC8+KX1cblxuICAgICAgICB7cnVucy5sZW5ndGggIT0gMCAmJiAoPHAgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+XG4gICAgICAgIFZvdXMgcG91dmV6IGFjY8OpZGVyIMOgIHVuZSByZXByw6lzZW50YXRpb24gZ3JhcGhpcXVlIGRlIGxhIHLDqXBhcnRpdGlvbiBkYW5zIGxlcyB0ZW1wcyBkZXMgZGVtYW5kZXMgY29ubnVlcyBkYW5zIGxlcyBmaWNoaWVycyBhbmFseXPDqXMuIFBvdXIgY2VsYSBpbCBmYXV0IGNsaXF1ZXIgc3VyIGxlIGJvdXRvbiDCqyBBZmZpY2hlciBwYXIgZGF0ZSDCuy5cbiAgICAgICAgICA8L3A+KX1cblxuICAgICAgICB7ZGF0ZURhdGEuaW5kZXggIT0gdW5kZWZpbmVkICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnN1YnRpdGxlfT5cbiAgICAgICAgICAgICAgTm9tYnJlIGRlIGRvc3NpZXJzIGFzc29jacOpcyDDoCBkZXMgZGVtYW5kZXMgcsOpYWxpc8OpcyDDoCBjaGFxdWUgZGF0ZVxuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6ICgyNTAqZGF0ZURhdGEueWVhckNvdW50KSArIFwicHhcIiwgd2lkdGg6IFwiMTAwJVwifX0+XG4gICAgICAgICAgICAgIHtSZXNwb25zaXZlQ2FsZW5kYXIoZGF0ZURhdGEpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG5cbiAgICAgICAgPEZvb3RlclxuICAgICAgICAgIHN1YmplY3Q9XCJGbHV4IGLDqW7DqWZpY2lhaXJlIENOQUZcIlxuICAgICAgICAgIHBvdXJxdW9pPVwiUG91cnF1b2kgdW4gbGVjdGV1ciBkZSBmaWNoaWVyIENOQUYmbmJzcDs/XCJcbiAgICAgICAgICB0ZXh0PXs8PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+VG91cyBsZXMgZMOpcGFydGVtZW50cyBuJ29udCBwYXMgbGVzIG91dGlscyBwb3VyIGFuYWx5c2VyIGxlcyBmaWNoaWVycyBlbnZvecOpcyBwYXIgbGEgQ05BRi4gQ2VsYSBwZXV0IHJhbGVudGlyIGV0IGNvbXBsaXF1ZXIgbm9zIMOpY2hhbmdlcy48L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5BdmVjIGNldCBvdXRpbCwgbm91cyBzb3VoYWl0b25zIHBlcm1ldHRyZSBhdXggcGVyc29ubmVzIHF1aSBvbnQgYWNjw6hzIMOgIGNlcyBmaWNoaWVycyBkJ2VuIGV4dHJhaXJlIGRlcyBzdGF0aXN0aXF1ZXMgZ8OpbsOpcmFsZXMgc2FucyBhdm9pciDDoCBtZXR0cmUgbGVzIG1haW5zIGRhbnMgbGUgY2FtYm91aSBlbGxlcy1tw6ptZS48L3A+XG4gICAgICAgICAgPC8+fVxuICAgICAgICAvPlxuICAgICAgPC9tYWluPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9