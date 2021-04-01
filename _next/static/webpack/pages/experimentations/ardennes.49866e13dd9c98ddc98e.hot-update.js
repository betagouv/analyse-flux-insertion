webpackHotUpdate_N_E("pages/experimentations/ardennes",{

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
___CSS_LOADER_EXPORT___.push([module.i, ".Home_container__1EcsU {\n  min-height: 100vh;\n  padding: 0 0.5rem;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: flex;\n  -webkit-flex-direction: column;\n     -moz-box-orient: vertical;\n     -moz-box-direction: normal;\n          flex-direction: column;\n  -webkit-justify-content: center;\n     -moz-box-pack: center;\n          justify-content: center;\n  -webkit-align-items: center;\n     -moz-box-align: center;\n          align-items: center;\n}\n\n.Home_content__2fqOz {\n  max-width: 800px;\n}\n\n.Home_main__1x8gC {\n  padding: 5rem 0;\n  -webkit-flex: 1 1;\n     -moz-box-flex: 1;\n          flex: 1 1;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: flex;\n  -webkit-flex-direction: column;\n     -moz-box-orient: vertical;\n     -moz-box-direction: normal;\n          flex-direction: column;\n  -webkit-justify-content: center;\n     -moz-box-pack: center;\n          justify-content: center;\n  -webkit-align-items: center;\n     -moz-box-align: center;\n          align-items: center;\n}\n\n.Home_footer__1WdhD {\n  width: 100%;\n  height: 100px;\n  border-top: 1px solid #eaeaea;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: flex;\n  -webkit-justify-content: center;\n     -moz-box-pack: center;\n          justify-content: center;\n  -webkit-align-items: center;\n     -moz-box-align: center;\n          align-items: center;\n}\n\n.Home_footer__1WdhD img {\n  margin-left: 0.5rem;\n}\n\n.Home_footer__1WdhD a {\n  display: -webkit-flex;\n  display: -moz-box;\n  display: flex;\n  -webkit-justify-content: center;\n     -moz-box-pack: center;\n          justify-content: center;\n  -webkit-align-items: center;\n     -moz-box-align: center;\n          align-items: center;\n}\n\n.Home_title__3DjR7 a {\n  color: #0070f3;\n  text-decoration: none;\n}\n\n.Home_title__3DjR7 a:hover,\n.Home_title__3DjR7 a:focus,\n.Home_title__3DjR7 a:active {\n  text-decoration: underline;\n}\n\n.Home_title__3DjR7 {\n  margin: 0;\n  line-height: 1.15;\n  font-size: 4rem;\n}\n\n.Home_subtitle__3I2yI {\n  margin: 0;\n  line-height: 1.15;\n  font-size: 3rem;\n}\n\n.Home_margin_bottom__3OZW9 {\n  margin-bottom: 20px !important;\n}\n\n.Home_title__3DjR7,\n.Home_subtitle__3I2yI,\n.Home_description__17Z4F,\n.Home_pending_warning__2L76r,\n.Home_center__2Zxdr {\n  text-align: center;\n}\n\n.Home_description__17Z4F,\n.Home_text__1sCQa,\n.Home_pending_warning__2L76r {\n  line-height: 1.5;\n  font-size: 1.5rem;\n}\n\n@-webkit-keyframes Home_grow__3iiF- {\n    0% {\n        -webkit-transform: scale(1.04);\n                transform: scale(1.04);\n      }\n    50% {\n        -webkit-transform: scale(1);\n                transform: scale(1);\n      }\n      100% {\n        -webkit-transform: scale(1.04);\n                transform: scale(1.04);\n    }\n}\n\n@-moz-keyframes Home_grow__3iiF- {\n    0% {\n        -moz-transform: scale(1.04);\n             transform: scale(1.04);\n      }\n    50% {\n        -moz-transform: scale(1);\n             transform: scale(1);\n      }\n      100% {\n        -moz-transform: scale(1.04);\n             transform: scale(1.04);\n    }\n}\n\n@keyframes Home_grow__3iiF- {\n    0% {\n        -webkit-transform: scale(1.04);\n           -moz-transform: scale(1.04);\n                transform: scale(1.04);\n      }\n    50% {\n        -webkit-transform: scale(1);\n           -moz-transform: scale(1);\n                transform: scale(1);\n      }\n      100% {\n        -webkit-transform: scale(1.04);\n           -moz-transform: scale(1.04);\n                transform: scale(1.04);\n    }\n}\n\n.Home_pending_warning__2L76r {\n  color: rgb(199, 55, 55);\n  font-weight: 600;\n  -webkit-animation-duration: 5s;\n     -moz-animation-duration: 5s;\n          animation-duration: 5s; /* the duration of the animation */\n  -webkit-animation-timing-function: ease-in-out;\n     -moz-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; /* how the animation will behave */\n  -webkit-animation-delay: 0s;\n     -moz-animation-delay: 0s;\n          animation-delay: 0s; /* how long to delay the animation from starting */\n  -webkit-animation-iteration-count: infinite;\n     -moz-animation-iteration-count: infinite;\n          animation-iteration-count: infinite; /* how many times the animation will play */\n  -webkit-animation-name: Home_grow__3iiF-;\n     -moz-animation-name: Home_grow__3iiF-;\n          animation-name: Home_grow__3iiF-; /* the name of the animation we defined above */\n}\n\n.Home_code__axx2Y {\n  background: #fafafa;\n  border-radius: 5px;\n  padding: 0.75rem;\n  font-size: 1.1rem;\n  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,\n    Bitstream Vera Sans Mono, Courier New, monospace;\n}\n\n.Home_bold__2tKez {\n  font-weight: bold;\n}\n\n.Home_legende__3f4un {\n  display: -webkit-flex !important;\n  display: -moz-box !important;\n  display: flex !important;\n  -webkit-justify-content: space-around;\n          justify-content: space-around;\n  margin: 0 3rem;\n}\n\n.Home_legende_title__2Brj_ {\n  font-weight: bold;\n  text-decoration: underline;\n}\n\n.Home_legende_box__32b1I {\n  width: 40%;\n  /* margin: 0 1rem; */\n}\n\n.Home_grid__2Ei2F {\n  display: -webkit-flex;\n  display: -moz-box;\n  display: flex;\n  -webkit-align-items: stretch;\n     -moz-box-align: stretch;\n          align-items: stretch;\n  -webkit-flex-wrap: wrap;\n          flex-wrap: wrap;\n  margin-top: 3rem;\n}\n\n.Home_grid__2Ei2F,\n.Home_text__1sCQa {\n  max-width: 800px;\n}\n\n.Home_card__2SdtB {\n  margin: 1rem;\n  -webkit-flex-basis: 45%;\n          flex-basis: 45%;\n  padding: 1.5rem;\n  text-align: left;\n  color: inherit;\n  text-decoration: none;\n  border: 1px solid #eaeaea;\n  border-radius: 10px;\n  -moz-transition: color 0.15s ease, border-color 0.15s ease;\n  transition: color 0.15s ease, border-color 0.15s ease;\n}\n\n.Home_card__2SdtB:hover,\n.Home_card__2SdtB:focus,\n.Home_card__2SdtB:active {\n  color: #0070f3;\n  border-color: #0070f3;\n}\n\n.Home_card__2SdtB h3 {\n  margin: 0 0 1rem 0;\n  font-size: 1.5rem;\n}\n\n.Home_card__2SdtB p {\n  margin: 0;\n  font-size: 1.25rem;\n  line-height: 1.5;\n}\n\n.Home_logo__1YbrH {\n  height: 1em;\n}\n\n.Home_create__SOEZL {\n  max-width: 800px;\n  margin: 50px auto;\n  text-align: center;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: flex;\n  -webkit-justify-content: space-between;\n     -moz-box-pack: justify;\n          justify-content: space-between;\n}\n.Home_create__SOEZL label {\n  text-align: left;\n  display: block;\n}\n.Home_create__SOEZL input {\n  width: 100%;\n  padding: 6px 10px;\n  margin: 10px 0;\n  border: 1px solid #ddd;\n  -moz-box-sizing: border-box;\n       box-sizing: border-box;\n  display: block;\n}\n.Home_create__SOEZL button {\n  margin: 20px auto 0 auto;\n  background: #3571f1;\n  color: #fff;\n  border: 0;\n  padding: 12px;\n  border-radius: 3px;\n  cursor: pointer;\n}\n\n@media (max-width: 600px) {\n  .Home_grid__2Ei2F {\n    -webkit-flex-direction: column;\n       -moz-box-orient: vertical;\n       -moz-box-direction: normal;\n            flex-direction: column;\n  }\n  .Home_grid__2Ei2F,\n  .Home_text__1sCQa {\n    width: 100%;\n  }\n}\n\n.Home_numeric__1Wnqa {\n  text-align: right;\n}\n", "",{"version":3,"sources":["webpack://styles/Home.module.css"],"names":[],"mappings":"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","sourcesContent":[".container {\n  min-height: 100vh;\n  padding: 0 0.5rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.content {\n  max-width: 800px;\n}\n\n.main {\n  padding: 5rem 0;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.footer {\n  width: 100%;\n  height: 100px;\n  border-top: 1px solid #eaeaea;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.footer img {\n  margin-left: 0.5rem;\n}\n\n.footer a {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.title a {\n  color: #0070f3;\n  text-decoration: none;\n}\n\n.title a:hover,\n.title a:focus,\n.title a:active {\n  text-decoration: underline;\n}\n\n.title {\n  margin: 0;\n  line-height: 1.15;\n  font-size: 4rem;\n}\n\n.subtitle {\n  margin: 0;\n  line-height: 1.15;\n  font-size: 3rem;\n}\n\n.margin_bottom {\n  margin-bottom: 20px !important;\n}\n\n.title,\n.subtitle,\n.description,\n.pending_warning,\n.center {\n  text-align: center;\n}\n\n.description,\n.text,\n.pending_warning {\n  line-height: 1.5;\n  font-size: 1.5rem;\n}\n\n@keyframes grow {\n    0% {\n        transform: scale(1.04);\n      }\n    50% {\n        transform: scale(1);\n      }\n      100% {\n        transform: scale(1.04);\n    }\n}\n\n.pending_warning {\n  color: rgb(199, 55, 55);\n  font-weight: 600;\n  animation-duration: 5s; /* the duration of the animation */\n  animation-timing-function: ease-in-out; /* how the animation will behave */\n  animation-delay: 0s; /* how long to delay the animation from starting */\n  animation-iteration-count: infinite; /* how many times the animation will play */\n  animation-name: grow; /* the name of the animation we defined above */\n}\n\n.code {\n  background: #fafafa;\n  border-radius: 5px;\n  padding: 0.75rem;\n  font-size: 1.1rem;\n  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,\n    Bitstream Vera Sans Mono, Courier New, monospace;\n}\n\n.bold {\n  font-weight: bold;\n}\n\n.legende {\n  display: flex !important;\n  justify-content: space-around;\n  margin: 0 3rem;\n}\n\n.legende_title {\n  font-weight: bold;\n  text-decoration: underline;\n}\n\n.legende_box {\n  width: 40%;\n  /* margin: 0 1rem; */\n}\n\n.grid {\n  display: flex;\n  align-items: stretch;\n  flex-wrap: wrap;\n  margin-top: 3rem;\n}\n\n.grid,\n.text {\n  max-width: 800px;\n}\n\n.card {\n  margin: 1rem;\n  flex-basis: 45%;\n  padding: 1.5rem;\n  text-align: left;\n  color: inherit;\n  text-decoration: none;\n  border: 1px solid #eaeaea;\n  border-radius: 10px;\n  transition: color 0.15s ease, border-color 0.15s ease;\n}\n\n.card:hover,\n.card:focus,\n.card:active {\n  color: #0070f3;\n  border-color: #0070f3;\n}\n\n.card h3 {\n  margin: 0 0 1rem 0;\n  font-size: 1.5rem;\n}\n\n.card p {\n  margin: 0;\n  font-size: 1.25rem;\n  line-height: 1.5;\n}\n\n.logo {\n  height: 1em;\n}\n\n.create {\n  max-width: 800px;\n  margin: 50px auto;\n  text-align: center;\n  display: flex;\n  justify-content: space-between;\n}\n.create label {\n  text-align: left;\n  display: block;\n}\n.create input {\n  width: 100%;\n  padding: 6px 10px;\n  margin: 10px 0;\n  border: 1px solid #ddd;\n  box-sizing: border-box;\n  display: block;\n}\n.create button {\n  margin: 20px auto 0 auto;\n  background: #3571f1;\n  color: #fff;\n  border: 0;\n  padding: 12px;\n  border-radius: 3px;\n  cursor: pointer;\n}\n\n@media (max-width: 600px) {\n  .grid {\n    flex-direction: column;\n  }\n  .grid,\n  .text {\n    width: 100%;\n  }\n}\n\n.numeric {\n  text-align: right;\n}\n"],"sourceRoot":""}]);
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

/***/ "./pages/experimentations/ardennes/index.js":
/*!**************************************************!*\
  !*** ./pages/experimentations/ardennes/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Ardennes; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/layout */ "./components/layout.js");
/* harmony import */ var _components_file__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/file */ "./components/file.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/footer */ "./components/footer.js");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_historique__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../lib/historique */ "./lib/historique.js");



var _jsxFileName = "/home/q/code/qblanc/beta.gouv/analyse-flux-insertion/pages/experimentations/ardennes/index.js",
    _s = $RefreshSig$();








var reducer = Object(_lib_historique__WEBPACK_IMPORTED_MODULE_7__["reducerFactory"])('Expérimentation Ardennes - CNAF - Bénéficiaire');
var devMode = true;
function Ardennes() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      devFile = _useState[0],
      setDevFile = _useState[1];

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(reducer, [], _lib_historique__WEBPACK_IMPORTED_MODULE_7__["initReducer"]),
      runs = _useReducer[0],
      dispatchRuns = _useReducer[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      usersData = _useState2[0],
      setUsersData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isPending = _useState3[0],
      setIsPending = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      fileSize = _useState4[0],
      setFileSize = _useState4[1]; // useEffect(() => {
  //   if(devFile) {
  //     fileHandler(devFile)
  //   }
  // }, [devFile])


  var fileHandler = function fileHandler(file) {
    if (devMode && file != devFile) {
      setDevFile(file);
    }

    setFileSize(file.size);
    setIsPending(true);
    var start_time = new Date();
    var reader = new FileReader();

    reader.onload = function (event) {
      var fileData = new Uint8Array(event.target.result);
      var xls = xlsx__WEBPACK_IMPORTED_MODULE_2__["read"](fileData, {
        type: 'array'
      });
      /* Get first worksheet */

      var worksheet = xls.Sheets[xls.SheetNames[0]]; // Limiter la capture aux colonnes A-T

      var range = xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].decode_range(worksheet['!ref']);
      range.s.c = 0; // 0 == XLSX.utils.decode_col("A")

      range.e.c = 19; // 19 == XLSX.utils.decode_col("T")

      var new_range = xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].encode_range(range);
      /* Convert array to json*/

      var jsonData = xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].sheet_to_json(worksheet, {
        blankrows: false,
        raw: false,
        defval: null,
        range: new_range
      });
      var fileLength = jsonData.length;
      var processedData = jsonData.map(function (userData) {
        return userData;
      });
      setUsersData(processedData);
      setIsPending(false);
      dispatchRuns({
        type: 'append',
        item: {
          timestamp: new Date().toISOString().slice(0, 19),
          duration: new Date() - start_time,
          filename: file.name,
          fileSize: file.size,
          fileLines: fileLength
        }
      });
    };

    reader.readAsArrayBuffer(file);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.container,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.main,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.title,
        children: "Exp\xE9rimentation Ardennes"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_file__WEBPACK_IMPORTED_MODULE_4__["default"], {
        fileHandler: fileHandler,
        isPending: isPending,
        fileSize: fileSize
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, this), usersData && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.subtitle,
          children: "B\xE9n\xE9ficiaires RSA"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 11
        }, this), usersData.length == 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.description,
          children: "Aucun b\xE9n\xE9ficiaire dans le fichier"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 13
        }, this), usersData.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Nom"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Pr\xE9nom"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Mail"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 91,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "T\xE9l\xE9phone"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "RDV-Solidarit\xE9s"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 93,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
            children: usersData.map(function (user, index) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: user["NOM"]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 99,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: user["PRENOM"]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 100,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: user["MAIL"]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 101,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: user["TELEPHONE"]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 102,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.center,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                    onClick: function onClick() {
                      alert("Fonctionnalité à venir !");
                    },
                    children: "Cr\xE9er un compte"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 103,
                    columnNumber: 49
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 103,
                  columnNumber: 19
                }, _this)]
              }, index, true, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 50
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 13
        }, this)]
      }, void 0, true), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
        subject: "Exp\xE9rimentation Ardennes",
        pourquoi: "Quel est l'objectif de cette exp\xE9rimentation\xA0?",
        text: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.text,
            children: "Faciliter le travail des agents du d\xE9partement et tester l'utilisation de l'application RDV-Solidarit\xE9s pour acc\xE9l\xE9rer la prise du premier rendez-vous d'orientation."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 13
          }, this)
        }, void 0, false)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 5
  }, this);
}

_s(Ardennes, "zq+edCGLnyK8mnF9q5Es6F1poOI=");

_c = Ardennes;

var _c;

$RefreshReg$(_c, "Ardennes");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9maWxlLmpzIiwid2VicGFjazovL19OX0UvLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9leHBlcmltZW50YXRpb25zL2FyZGVubmVzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkZpbGVIYW5kbGVyIiwiZmlsZUhhbmRsZXIiLCJpc1BlbmRpbmciLCJmaWxlU2l6ZSIsInNlbGVjdEhhbmRsZXIiLCJ1c2VDYWxsYmFjayIsImV2ZW50IiwiaSIsInRhcmdldCIsImZpbGVzIiwibGVuZ3RoIiwidmFsdWUiLCJzdHlsZXMiLCJkZXNjcmlwdGlvbiIsInJlZHVjZXIiLCJyZWR1Y2VyRmFjdG9yeSIsImRldk1vZGUiLCJBcmRlbm5lcyIsInVzZVN0YXRlIiwiZGV2RmlsZSIsInNldERldkZpbGUiLCJ1c2VSZWR1Y2VyIiwiaW5pdFJlZHVjZXIiLCJydW5zIiwiZGlzcGF0Y2hSdW5zIiwidXNlcnNEYXRhIiwic2V0VXNlcnNEYXRhIiwic2V0SXNQZW5kaW5nIiwic2V0RmlsZVNpemUiLCJmaWxlIiwic2l6ZSIsInN0YXJ0X3RpbWUiLCJEYXRlIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsImZpbGVEYXRhIiwiVWludDhBcnJheSIsInJlc3VsdCIsInhscyIsIlhMU1giLCJ0eXBlIiwid29ya3NoZWV0IiwiU2hlZXRzIiwiU2hlZXROYW1lcyIsInJhbmdlIiwiZGVjb2RlX3JhbmdlIiwicyIsImMiLCJlIiwibmV3X3JhbmdlIiwiZW5jb2RlX3JhbmdlIiwianNvbkRhdGEiLCJzaGVldF90b19qc29uIiwiYmxhbmtyb3dzIiwicmF3IiwiZGVmdmFsIiwiZmlsZUxlbmd0aCIsInByb2Nlc3NlZERhdGEiLCJtYXAiLCJ1c2VyRGF0YSIsIml0ZW0iLCJ0aW1lc3RhbXAiLCJ0b0lTT1N0cmluZyIsInNsaWNlIiwiZHVyYXRpb24iLCJmaWxlbmFtZSIsIm5hbWUiLCJmaWxlTGluZXMiLCJyZWFkQXNBcnJheUJ1ZmZlciIsImNvbnRhaW5lciIsIm1haW4iLCJ0aXRsZSIsInN1YnRpdGxlIiwidXNlciIsImluZGV4IiwiY2VudGVyIiwiYWxlcnQiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBRWUsU0FBU0EsV0FBVCxPQUlaO0FBQUE7O0FBQUEsTUFIREMsV0FHQyxRQUhEQSxXQUdDO0FBQUEsTUFGREMsU0FFQyxRQUZEQSxTQUVDO0FBQUEsTUFEREMsUUFDQyxRQUREQSxRQUNDO0FBQ0QsTUFBTUMsYUFBYSxHQUFHQyx5REFBVyxDQUFDLFVBQUNDLEtBQUQsRUFBVztBQUMzQyxTQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdELEtBQUssQ0FBQ0UsTUFBTixDQUFhQyxLQUFiLENBQW1CQyxNQUF2QyxFQUErQ0gsQ0FBQyxFQUFoRCxFQUFvRDtBQUNsRE4saUJBQVcsQ0FBQ0ssS0FBSyxDQUFDRSxNQUFOLENBQWFDLEtBQWIsQ0FBbUJGLENBQW5CLENBQUQsQ0FBWDtBQUNEOztBQUNERCxTQUFLLENBQUNFLE1BQU4sQ0FBYUcsS0FBYixHQUFxQixFQUFyQjtBQUNELEdBTGdDLENBQWpDO0FBT0Esc0JBQVE7QUFBQSw0QkFDTjtBQUFHLGVBQVMsRUFBRUMsOERBQU0sQ0FBQ0MsV0FBckI7QUFBQSx1R0FDOEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUQ5RCxlQUVFO0FBQU8sWUFBSSxFQUFDLE1BQVo7QUFBbUIsZ0JBQVEsRUFBRVQsYUFBN0I7QUFBNEMsZ0JBQVE7QUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURNLEVBTUxGLFNBQVMsaUJBQUkscUVBQUMsZ0RBQUQ7QUFBZ0IsY0FBUSxFQUFFQztBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTlIsZUFRTjtBQUFHLGVBQVMsRUFBRVMsOERBQU0sQ0FBQ0MsV0FBckI7QUFBQSxxR0FDNEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUQ1RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSTTtBQUFBLGtCQUFSO0FBYUQ7O0dBekJ1QmIsVzs7S0FBQUEsVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTHhCO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMscUdBQWdEO0FBQzFGO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUywyQkFBMkIsc0JBQXNCLHNCQUFzQiwwQkFBMEIsc0JBQXNCLGtCQUFrQixtQ0FBbUMsaUNBQWlDLGtDQUFrQyxtQ0FBbUMsb0NBQW9DLDZCQUE2QixvQ0FBb0MsZ0NBQWdDLDhCQUE4QixnQ0FBZ0MsR0FBRywwQkFBMEIscUJBQXFCLEdBQUcsdUJBQXVCLG9CQUFvQixzQkFBc0Isd0JBQXdCLHNCQUFzQiwwQkFBMEIsc0JBQXNCLGtCQUFrQixtQ0FBbUMsaUNBQWlDLGtDQUFrQyxtQ0FBbUMsb0NBQW9DLDZCQUE2QixvQ0FBb0MsZ0NBQWdDLDhCQUE4QixnQ0FBZ0MsR0FBRyx5QkFBeUIsZ0JBQWdCLGtCQUFrQixrQ0FBa0MsMEJBQTBCLHNCQUFzQixrQkFBa0Isb0NBQW9DLDZCQUE2QixvQ0FBb0MsZ0NBQWdDLDhCQUE4QixnQ0FBZ0MsR0FBRyw2QkFBNkIsd0JBQXdCLEdBQUcsMkJBQTJCLDBCQUEwQixzQkFBc0Isa0JBQWtCLG9DQUFvQyw2QkFBNkIsb0NBQW9DLGdDQUFnQyw4QkFBOEIsZ0NBQWdDLEdBQUcsMEJBQTBCLG1CQUFtQiwwQkFBMEIsR0FBRywyRkFBMkYsK0JBQStCLEdBQUcsd0JBQXdCLGNBQWMsc0JBQXNCLG9CQUFvQixHQUFHLDJCQUEyQixjQUFjLHNCQUFzQixvQkFBb0IsR0FBRyxnQ0FBZ0MsbUNBQW1DLEdBQUcsZ0lBQWdJLHVCQUF1QixHQUFHLGlGQUFpRixxQkFBcUIsc0JBQXNCLEdBQUcseUNBQXlDLFVBQVUseUNBQXlDLHlDQUF5QyxTQUFTLFdBQVcsc0NBQXNDLHNDQUFzQyxTQUFTLGNBQWMseUNBQXlDLHlDQUF5QyxPQUFPLEdBQUcsc0NBQXNDLFVBQVUsc0NBQXNDLHNDQUFzQyxTQUFTLFdBQVcsbUNBQW1DLG1DQUFtQyxTQUFTLGNBQWMsc0NBQXNDLHNDQUFzQyxPQUFPLEdBQUcsaUNBQWlDLFVBQVUseUNBQXlDLHlDQUF5Qyx5Q0FBeUMsU0FBUyxXQUFXLHNDQUFzQyxzQ0FBc0Msc0NBQXNDLFNBQVMsY0FBYyx5Q0FBeUMseUNBQXlDLHlDQUF5QyxPQUFPLEdBQUcsa0NBQWtDLDRCQUE0QixxQkFBcUIsbUNBQW1DLG1DQUFtQyxtQ0FBbUMsdUZBQXVGLG1EQUFtRCxtREFBbUQsb0VBQW9FLGdDQUFnQyxnQ0FBZ0Msb0dBQW9HLGdEQUFnRCxnREFBZ0QsMEZBQTBGLDZDQUE2Qyw2Q0FBNkMsb0RBQW9ELHVCQUF1Qix3QkFBd0IsdUJBQXVCLHFCQUFxQixzQkFBc0IseUlBQXlJLEdBQUcsdUJBQXVCLHNCQUFzQixHQUFHLDBCQUEwQixxQ0FBcUMsaUNBQWlDLDZCQUE2QiwwQ0FBMEMsMENBQTBDLG1CQUFtQixHQUFHLGdDQUFnQyxzQkFBc0IsK0JBQStCLEdBQUcsOEJBQThCLGVBQWUsc0JBQXNCLE1BQU0sdUJBQXVCLDBCQUEwQixzQkFBc0Isa0JBQWtCLGlDQUFpQywrQkFBK0IsaUNBQWlDLDRCQUE0Qiw0QkFBNEIscUJBQXFCLEdBQUcsMkNBQTJDLHFCQUFxQixHQUFHLHVCQUF1QixpQkFBaUIsNEJBQTRCLDRCQUE0QixvQkFBb0IscUJBQXFCLG1CQUFtQiwwQkFBMEIsOEJBQThCLHdCQUF3QiwrREFBK0QsMERBQTBELEdBQUcsa0ZBQWtGLG1CQUFtQiwwQkFBMEIsR0FBRywwQkFBMEIsdUJBQXVCLHNCQUFzQixHQUFHLHlCQUF5QixjQUFjLHVCQUF1QixxQkFBcUIsR0FBRyx1QkFBdUIsZ0JBQWdCLEdBQUcseUJBQXlCLHFCQUFxQixzQkFBc0IsdUJBQXVCLDBCQUEwQixzQkFBc0Isa0JBQWtCLDJDQUEyQyw4QkFBOEIsMkNBQTJDLEdBQUcsNkJBQTZCLHFCQUFxQixtQkFBbUIsR0FBRyw2QkFBNkIsZ0JBQWdCLHNCQUFzQixtQkFBbUIsMkJBQTJCLGdDQUFnQyxnQ0FBZ0MsbUJBQW1CLEdBQUcsOEJBQThCLDZCQUE2Qix3QkFBd0IsZ0JBQWdCLGNBQWMsa0JBQWtCLHVCQUF1QixvQkFBb0IsR0FBRywrQkFBK0IsdUJBQXVCLHFDQUFxQyxtQ0FBbUMsb0NBQW9DLHFDQUFxQyxLQUFLLDZDQUE2QyxrQkFBa0IsS0FBSyxHQUFHLDBCQUEwQixzQkFBc0IsR0FBRyxTQUFTLHVGQUF1RixZQUFZLGFBQWEsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssV0FBVyxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLE9BQU8sWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sU0FBUyxZQUFZLE9BQU8sT0FBTyxZQUFZLGFBQWEsT0FBTyxLQUFLLEtBQUssWUFBWSxjQUFjLE1BQU0sS0FBSyxZQUFZLGNBQWMsTUFBTSxLQUFLLFlBQVksY0FBYyxNQUFNLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsY0FBYyxNQUFNLEtBQUssWUFBWSxhQUFhLGNBQWMsTUFBTSxLQUFLLFlBQVksYUFBYSxjQUFjLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEseUJBQXlCLGFBQWEsYUFBYSx5QkFBeUIsYUFBYSxhQUFhLHlCQUF5QixhQUFhLGFBQWEseUJBQXlCLGFBQWEsYUFBYSx5QkFBeUIsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxPQUFPLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFdBQVcsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFlBQVksVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxPQUFPLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxVQUFVLEtBQUssTUFBTSxLQUFLLFlBQVksc0NBQXNDLHNCQUFzQixzQkFBc0Isa0JBQWtCLDJCQUEyQiw0QkFBNEIsd0JBQXdCLEdBQUcsY0FBYyxxQkFBcUIsR0FBRyxXQUFXLG9CQUFvQixZQUFZLGtCQUFrQiwyQkFBMkIsNEJBQTRCLHdCQUF3QixHQUFHLGFBQWEsZ0JBQWdCLGtCQUFrQixrQ0FBa0Msa0JBQWtCLDRCQUE0Qix3QkFBd0IsR0FBRyxpQkFBaUIsd0JBQXdCLEdBQUcsZUFBZSxrQkFBa0IsNEJBQTRCLHdCQUF3QixHQUFHLGNBQWMsbUJBQW1CLDBCQUEwQixHQUFHLHVEQUF1RCwrQkFBK0IsR0FBRyxZQUFZLGNBQWMsc0JBQXNCLG9CQUFvQixHQUFHLGVBQWUsY0FBYyxzQkFBc0Isb0JBQW9CLEdBQUcsb0JBQW9CLG1DQUFtQyxHQUFHLG9FQUFvRSx1QkFBdUIsR0FBRyw2Q0FBNkMscUJBQXFCLHNCQUFzQixHQUFHLHFCQUFxQixVQUFVLGlDQUFpQyxTQUFTLFdBQVcsOEJBQThCLFNBQVMsY0FBYyxpQ0FBaUMsT0FBTyxHQUFHLHNCQUFzQiw0QkFBNEIscUJBQXFCLDJCQUEyQiwrRUFBK0UsNERBQTRELDRGQUE0RixzRUFBc0Usb0RBQW9ELFdBQVcsd0JBQXdCLHVCQUF1QixxQkFBcUIsc0JBQXNCLHlJQUF5SSxHQUFHLFdBQVcsc0JBQXNCLEdBQUcsY0FBYyw2QkFBNkIsa0NBQWtDLG1CQUFtQixHQUFHLG9CQUFvQixzQkFBc0IsK0JBQStCLEdBQUcsa0JBQWtCLGVBQWUsc0JBQXNCLE1BQU0sV0FBVyxrQkFBa0IseUJBQXlCLG9CQUFvQixxQkFBcUIsR0FBRyxtQkFBbUIscUJBQXFCLEdBQUcsV0FBVyxpQkFBaUIsb0JBQW9CLG9CQUFvQixxQkFBcUIsbUJBQW1CLDBCQUEwQiw4QkFBOEIsd0JBQXdCLDBEQUEwRCxHQUFHLDhDQUE4QyxtQkFBbUIsMEJBQTBCLEdBQUcsY0FBYyx1QkFBdUIsc0JBQXNCLEdBQUcsYUFBYSxjQUFjLHVCQUF1QixxQkFBcUIsR0FBRyxXQUFXLGdCQUFnQixHQUFHLGFBQWEscUJBQXFCLHNCQUFzQix1QkFBdUIsa0JBQWtCLG1DQUFtQyxHQUFHLGlCQUFpQixxQkFBcUIsbUJBQW1CLEdBQUcsaUJBQWlCLGdCQUFnQixzQkFBc0IsbUJBQW1CLDJCQUEyQiwyQkFBMkIsbUJBQW1CLEdBQUcsa0JBQWtCLDZCQUE2Qix3QkFBd0IsZ0JBQWdCLGNBQWMsa0JBQWtCLHVCQUF1QixvQkFBb0IsR0FBRywrQkFBK0IsV0FBVyw2QkFBNkIsS0FBSyxxQkFBcUIsa0JBQWtCLEtBQUssR0FBRyxjQUFjLHNCQUFzQixHQUFHLHFCQUFxQjtBQUNua2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUJBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUEsSUFBTWMsT0FBTyxHQUFHQyxzRUFBYyxDQUFDLGdEQUFELENBQTlCO0FBQ0EsSUFBTUMsT0FBTyxPQUFiO0FBRWUsU0FBU0MsUUFBVCxHQUFvQjtBQUFBOztBQUFBOztBQUFBLGtCQUNIQyxzREFBUSxDQUFDLElBQUQsQ0FETDtBQUFBLE1BQzFCQyxPQUQwQjtBQUFBLE1BQ2pCQyxVQURpQjs7QUFBQSxvQkFFSkMsd0RBQVUsQ0FBQ1AsT0FBRCxFQUFVLEVBQVYsRUFBY1EsMkRBQWQsQ0FGTjtBQUFBLE1BRTFCQyxJQUYwQjtBQUFBLE1BRXBCQyxZQUZvQjs7QUFBQSxtQkFHQ04sc0RBQVEsQ0FBQyxJQUFELENBSFQ7QUFBQSxNQUcxQk8sU0FIMEI7QUFBQSxNQUdmQyxZQUhlOztBQUFBLG1CQUlDUixzREFBUSxDQUFDLEtBQUQsQ0FKVDtBQUFBLE1BSTFCaEIsU0FKMEI7QUFBQSxNQUlmeUIsWUFKZTs7QUFBQSxtQkFLRFQsc0RBQVEsQ0FBQyxDQUFELENBTFA7QUFBQSxNQUsxQmYsUUFMMEI7QUFBQSxNQUtoQnlCLFdBTGdCLGtCQU9qQztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxNQUFNM0IsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQzRCLElBQUQsRUFBVTtBQUM1QixRQUFJYixPQUFPLElBQUlhLElBQUksSUFBSVYsT0FBdkIsRUFBZ0M7QUFDOUJDLGdCQUFVLENBQUNTLElBQUQsQ0FBVjtBQUNEOztBQUNERCxlQUFXLENBQUNDLElBQUksQ0FBQ0MsSUFBTixDQUFYO0FBQ0FILGdCQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0EsUUFBTUksVUFBVSxHQUFHLElBQUlDLElBQUosRUFBbkI7QUFFQSxRQUFJQyxNQUFNLEdBQUcsSUFBSUMsVUFBSixFQUFiOztBQUNBRCxVQUFNLENBQUNFLE1BQVAsR0FBZ0IsVUFBVTdCLEtBQVYsRUFBaUI7QUFDL0IsVUFBTThCLFFBQVEsR0FBRyxJQUFJQyxVQUFKLENBQWUvQixLQUFLLENBQUNFLE1BQU4sQ0FBYThCLE1BQTVCLENBQWpCO0FBQ0EsVUFBTUMsR0FBRyxHQUFHQyx5Q0FBQSxDQUFVSixRQUFWLEVBQW9CO0FBQUNLLFlBQUksRUFBQztBQUFOLE9BQXBCLENBQVo7QUFDQTs7QUFDQSxVQUFNQyxTQUFTLEdBQUdILEdBQUcsQ0FBQ0ksTUFBSixDQUFXSixHQUFHLENBQUNLLFVBQUosQ0FBZSxDQUFmLENBQVgsQ0FBbEIsQ0FKK0IsQ0FLL0I7O0FBQ0EsVUFBTUMsS0FBSyxHQUFHTCwwQ0FBQSxDQUFXTSxZQUFYLENBQXdCSixTQUFTLENBQUMsTUFBRCxDQUFqQyxDQUFkO0FBQ0FHLFdBQUssQ0FBQ0UsQ0FBTixDQUFRQyxDQUFSLEdBQVksQ0FBWixDQVArQixDQU9oQjs7QUFDZkgsV0FBSyxDQUFDSSxDQUFOLENBQVFELENBQVIsR0FBWSxFQUFaLENBUitCLENBUWY7O0FBQ2hCLFVBQU1FLFNBQVMsR0FBR1YsMENBQUEsQ0FBV1csWUFBWCxDQUF3Qk4sS0FBeEIsQ0FBbEI7QUFDQTs7QUFDQSxVQUFNTyxRQUFRLEdBQUdaLDBDQUFBLENBQVdhLGFBQVgsQ0FBeUJYLFNBQXpCLEVBQW9DO0FBQUVZLGlCQUFTLEVBQUUsS0FBYjtBQUFvQkMsV0FBRyxFQUFFLEtBQXpCO0FBQWdDQyxjQUFNLEVBQUUsSUFBeEM7QUFBOENYLGFBQUssRUFBRUs7QUFBckQsT0FBcEMsQ0FBakI7QUFDQSxVQUFNTyxVQUFVLEdBQUdMLFFBQVEsQ0FBQzFDLE1BQTVCO0FBRUEsVUFBTWdELGFBQWEsR0FBR04sUUFBUSxDQUFDTyxHQUFULENBQWEsVUFBQUMsUUFBUSxFQUFJO0FBQUUsZUFBT0EsUUFBUDtBQUFpQixPQUE1QyxDQUF0QjtBQUNBbEMsa0JBQVksQ0FBQ2dDLGFBQUQsQ0FBWjtBQUNBL0Isa0JBQVksQ0FBQyxLQUFELENBQVo7QUFFQUgsa0JBQVksQ0FBQztBQUNYaUIsWUFBSSxFQUFFLFFBREs7QUFFWG9CLFlBQUksRUFBRTtBQUNKQyxtQkFBUyxFQUFHLElBQUk5QixJQUFKLEVBQUQsQ0FBYStCLFdBQWIsR0FBMkJDLEtBQTNCLENBQWlDLENBQWpDLEVBQW9DLEVBQXBDLENBRFA7QUFFSkMsa0JBQVEsRUFBRyxJQUFJakMsSUFBSixFQUFELEdBQWVELFVBRnJCO0FBR0ptQyxrQkFBUSxFQUFFckMsSUFBSSxDQUFDc0MsSUFIWDtBQUlKaEUsa0JBQVEsRUFBRTBCLElBQUksQ0FBQ0MsSUFKWDtBQUtKc0MsbUJBQVMsRUFBRVg7QUFMUDtBQUZLLE9BQUQsQ0FBWjtBQVVELEtBNUJEOztBQTZCQXhCLFVBQU0sQ0FBQ29DLGlCQUFQLENBQXlCeEMsSUFBekI7QUFDRCxHQXZDRDs7QUF5Q0Esc0JBQ0UscUVBQUMsMERBQUQ7QUFBUSxhQUFTLEVBQUVqQiw4REFBTSxDQUFDMEQsU0FBMUI7QUFBQSwyQkFDRTtBQUFNLGVBQVMsRUFBRTFELDhEQUFNLENBQUMyRCxJQUF4QjtBQUFBLDhCQUNFO0FBQUksaUJBQVMsRUFBRTNELDhEQUFNLENBQUM0RCxLQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBS0UscUVBQUMsd0RBQUQ7QUFBYSxtQkFBVyxFQUFFdkUsV0FBMUI7QUFBdUMsaUJBQVMsRUFBRUMsU0FBbEQ7QUFBNkQsZ0JBQVEsRUFBRUM7QUFBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGLEVBT0lzQixTQUFTLGlCQUFJO0FBQUEsZ0NBQ2I7QUFBSSxtQkFBUyxFQUFFYiw4REFBTSxDQUFDNkQsUUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRGEsRUFLWGhELFNBQVMsQ0FBQ2YsTUFBVixJQUFvQixDQUFwQixpQkFDQTtBQUFHLG1CQUFTLEVBQUVFLDhEQUFNLENBQUNDLFdBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5XLEVBUVhZLFNBQVMsQ0FBQ2YsTUFBVixHQUFtQixDQUFuQixpQkFDQTtBQUFBLGtDQUNFO0FBQUEsb0NBQ0U7QUFBQSxzQ0FDRTtBQUFJLHVCQUFPLEVBQUMsR0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixlQUVFO0FBQUksdUJBQU8sRUFBQyxHQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZGLGVBR0U7QUFBSSx1QkFBTyxFQUFDLEdBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSEYsZUFJRTtBQUFJLHVCQUFPLEVBQUMsR0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFKRixlQUtFO0FBQUksdUJBQU8sRUFBQyxHQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQVFFO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBV0U7QUFBQSxzQkFDR2UsU0FBUyxDQUFDa0MsR0FBVixDQUFjLFVBQUNlLElBQUQsRUFBT0MsS0FBUDtBQUFBLGtDQUFrQjtBQUFBLHdDQUMvQjtBQUFBLDRCQUFLRCxJQUFJLENBQUMsS0FBRDtBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRCtCLGVBRS9CO0FBQUEsNEJBQUtBLElBQUksQ0FBQyxRQUFEO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGK0IsZUFHL0I7QUFBQSw0QkFBS0EsSUFBSSxDQUFDLE1BQUQ7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUgrQixlQUkvQjtBQUFBLDRCQUFLQSxJQUFJLENBQUMsV0FBRDtBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBSitCLGVBSy9CO0FBQUksMkJBQVMsRUFBRTlELDhEQUFNLENBQUNnRSxNQUF0QjtBQUFBLHlDQUE4QjtBQUFRLDJCQUFPLEVBQUUsbUJBQU07QUFBQ0MsMkJBQUssQ0FBQywwQkFBRCxDQUFMO0FBQWtDLHFCQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUwrQjtBQUFBLGlCQUFTRixLQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQWxCO0FBQUEsYUFBZDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVRXO0FBQUEsc0JBUGpCLGVBeUNFLHFFQUFDLDBEQUFEO0FBQ0UsZUFBTyxFQUFDLDZCQURWO0FBRUUsZ0JBQVEsRUFBQyxzREFGWDtBQUdFLFlBQUksZUFBRTtBQUFBLGlDQUNKO0FBQUcscUJBQVMsRUFBRS9ELDhEQUFNLENBQUNrRSxJQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURJO0FBSFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXpDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFxREQ7O0dBM0d1QjdELFE7O0tBQUFBLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZXhwZXJpbWVudGF0aW9ucy9hcmRlbm5lcy40OTg2NmUxM2RkOWM5OGRkYzk4ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VDYWxsYmFja30gZnJvbSAncmVhY3QnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCBQZW5kaW5nTWVzc2FnZSBmcm9tICcuL3BlbmRpbmcnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZpbGVIYW5kbGVyKHtcbiAgZmlsZUhhbmRsZXIsXG4gIGlzUGVuZGluZyxcbiAgZmlsZVNpemVcbn0pIHtcbiAgY29uc3Qgc2VsZWN0SGFuZGxlciA9IHVzZUNhbGxiYWNrKChldmVudCkgPT4ge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXZlbnQudGFyZ2V0LmZpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBmaWxlSGFuZGxlcihldmVudC50YXJnZXQuZmlsZXNbaV0pXG4gICAgfVxuICAgIGV2ZW50LnRhcmdldC52YWx1ZSA9ICcnXG4gIH0pXG5cbiAgcmV0dXJuICg8PlxuICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cbiAgICAgIEdsaXNzZXogZXQgZMOpcG9zZXogbGUgZmljaGllciDDoCBhbmFseXNlciBvdSBzw6lsZWN0aW9ubmV6IGxlLjxici8+XG4gICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBvbkNoYW5nZT17c2VsZWN0SGFuZGxlcn0gbXVsdGlwbGUvPlxuICAgIDwvcD5cblxuICAgIHtpc1BlbmRpbmcgJiYgPFBlbmRpbmdNZXNzYWdlIGZpbGVTaXplPXtmaWxlU2l6ZX0vPn1cblxuICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cbiAgICAgIExlcyBvcMOpcmF0aW9ucyBzb250IHRvdXRlcyByw6lhbGlzw6llcyBzdXIgdm90cmUgb3JkaW5hdGV1ci48YnIvPlxuICAgICAgQXVjdW5lIGRvbm7DqWUgcGVyc29ubmVsbGUgbidlc3QgdHJhbnNmw6lyw6llLlxuICAgIDwvcD5cbiAgPC8+KVxufVxuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLkhvbWVfY29udGFpbmVyX18xRWNzVSB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIHBhZGRpbmc6IDAgMC41cmVtO1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogLW1vei1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgLW1vei1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gICAgIC1tb3otYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgIC1tb3otYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAtbW96LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uSG9tZV9jb250ZW50X18yZnFPeiB7XFxuICBtYXgtd2lkdGg6IDgwMHB4O1xcbn1cXG5cXG4uSG9tZV9tYWluX18xeDhnQyB7XFxuICBwYWRkaW5nOiA1cmVtIDA7XFxuICAtd2Via2l0LWZsZXg6IDEgMTtcXG4gICAgIC1tb3otYm94LWZsZXg6IDE7XFxuICAgICAgICAgIGZsZXg6IDEgMTtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tb3otYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgIC1tb3otYm94LW9yaWVudDogdmVydGljYWw7XFxuICAgICAtbW96LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAtbW96LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgLW1vei1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLkhvbWVfZm9vdGVyX18xV2RoRCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2VhZWFlYTtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tb3otYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAtbW96LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgLW1vei1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLkhvbWVfZm9vdGVyX18xV2RoRCBpbWcge1xcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXG59XFxuXFxuLkhvbWVfZm9vdGVyX18xV2RoRCBhIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tb3otYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAtbW96LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgLW1vei1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLkhvbWVfdGl0bGVfXzNEalI3IGEge1xcbiAgY29sb3I6ICMwMDcwZjM7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5Ib21lX3RpdGxlX18zRGpSNyBhOmhvdmVyLFxcbi5Ib21lX3RpdGxlX18zRGpSNyBhOmZvY3VzLFxcbi5Ib21lX3RpdGxlX18zRGpSNyBhOmFjdGl2ZSB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLkhvbWVfdGl0bGVfXzNEalI3IHtcXG4gIG1hcmdpbjogMDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjE1O1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbn1cXG5cXG4uSG9tZV9zdWJ0aXRsZV9fM0kyeUkge1xcbiAgbWFyZ2luOiAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbi5Ib21lX21hcmdpbl9ib3R0b21fXzNPWlc5IHtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHggIWltcG9ydGFudDtcXG59XFxuXFxuLkhvbWVfdGl0bGVfXzNEalI3LFxcbi5Ib21lX3N1YnRpdGxlX18zSTJ5SSxcXG4uSG9tZV9kZXNjcmlwdGlvbl9fMTdaNEYsXFxuLkhvbWVfcGVuZGluZ193YXJuaW5nX18yTDc2cixcXG4uSG9tZV9jZW50ZXJfXzJaeGRyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLkhvbWVfZGVzY3JpcHRpb25fXzE3WjRGLFxcbi5Ib21lX3RleHRfXzFzQ1FhLFxcbi5Ib21lX3BlbmRpbmdfd2FybmluZ19fMkw3NnIge1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgSG9tZV9ncm93X18zaWlGLSB7XFxuICAgIDAlIHtcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjA0KTtcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA0KTtcXG4gICAgICB9XFxuICAgIDUwJSB7XFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgICAgfVxcbiAgICAgIDEwMCUge1xcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDQpO1xcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDQpO1xcbiAgICB9XFxufVxcblxcbkAtbW96LWtleWZyYW1lcyBIb21lX2dyb3dfXzNpaUYtIHtcXG4gICAgMCUge1xcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMDQpO1xcbiAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDQpO1xcbiAgICAgIH1cXG4gICAgNTAlIHtcXG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgICB9XFxuICAgICAgMTAwJSB7XFxuICAgICAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4wNCk7XFxuICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNCk7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyBIb21lX2dyb3dfXzNpaUYtIHtcXG4gICAgMCUge1xcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDQpO1xcbiAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMDQpO1xcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDQpO1xcbiAgICAgIH1cXG4gICAgNTAlIHtcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgICB9XFxuICAgICAgMTAwJSB7XFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wNCk7XFxuICAgICAgICAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4wNCk7XFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNCk7XFxuICAgIH1cXG59XFxuXFxuLkhvbWVfcGVuZGluZ193YXJuaW5nX18yTDc2ciB7XFxuICBjb2xvcjogcmdiKDE5OSwgNTUsIDU1KTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogNXM7XFxuICAgICAtbW96LWFuaW1hdGlvbi1kdXJhdGlvbjogNXM7XFxuICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNXM7IC8qIHRoZSBkdXJhdGlvbiBvZiB0aGUgYW5pbWF0aW9uICovXFxuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbiAgICAgLW1vei1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXG4gICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7IC8qIGhvdyB0aGUgYW5pbWF0aW9uIHdpbGwgYmVoYXZlICovXFxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMHM7XFxuICAgICAtbW96LWFuaW1hdGlvbi1kZWxheTogMHM7XFxuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMHM7IC8qIGhvdyBsb25nIHRvIGRlbGF5IHRoZSBhbmltYXRpb24gZnJvbSBzdGFydGluZyAqL1xcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXG4gICAgIC1tb3otYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxuICAgICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlOyAvKiBob3cgbWFueSB0aW1lcyB0aGUgYW5pbWF0aW9uIHdpbGwgcGxheSAqL1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogSG9tZV9ncm93X18zaWlGLTtcXG4gICAgIC1tb3otYW5pbWF0aW9uLW5hbWU6IEhvbWVfZ3Jvd19fM2lpRi07XFxuICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBIb21lX2dyb3dfXzNpaUYtOyAvKiB0aGUgbmFtZSBvZiB0aGUgYW5pbWF0aW9uIHdlIGRlZmluZWQgYWJvdmUgKi9cXG59XFxuXFxuLkhvbWVfY29kZV9fYXh4Mlkge1xcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDAuNzVyZW07XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIGZvbnQtZmFtaWx5OiBNZW5sbywgTW9uYWNvLCBMdWNpZGEgQ29uc29sZSwgTGliZXJhdGlvbiBNb25vLCBEZWphVnUgU2FucyBNb25vLFxcbiAgICBCaXRzdHJlYW0gVmVyYSBTYW5zIE1vbm8sIENvdXJpZXIgTmV3LCBtb25vc3BhY2U7XFxufVxcblxcbi5Ib21lX2JvbGRfXzJ0S2V6IHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uSG9tZV9sZWdlbmRlX18zZjR1biB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXggIWltcG9ydGFudDtcXG4gIGRpc3BsYXk6IC1tb3otYm94ICFpbXBvcnRhbnQ7XFxuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XFxuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIG1hcmdpbjogMCAzcmVtO1xcbn1cXG5cXG4uSG9tZV9sZWdlbmRlX3RpdGxlX18yQnJqXyB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4uSG9tZV9sZWdlbmRlX2JveF9fMzJiMUkge1xcbiAgd2lkdGg6IDQwJTtcXG4gIC8qIG1hcmdpbjogMCAxcmVtOyAqL1xcbn1cXG5cXG4uSG9tZV9ncmlkX18yRWkyRiB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbW96LWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgICAgLW1vei1ib3gtYWxpZ246IHN0cmV0Y2g7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgLXdlYmtpdC1mbGV4LXdyYXA6IHdyYXA7XFxuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gIG1hcmdpbi10b3A6IDNyZW07XFxufVxcblxcbi5Ib21lX2dyaWRfXzJFaTJGLFxcbi5Ib21lX3RleHRfXzFzQ1FhIHtcXG4gIG1heC13aWR0aDogODAwcHg7XFxufVxcblxcbi5Ib21lX2NhcmRfXzJTZHRCIHtcXG4gIG1hcmdpbjogMXJlbTtcXG4gIC13ZWJraXQtZmxleC1iYXNpczogNDUlO1xcbiAgICAgICAgICBmbGV4LWJhc2lzOiA0NSU7XFxuICBwYWRkaW5nOiAxLjVyZW07XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZWFlYWVhO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIC1tb3otdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZSwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2U7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLCBib3JkZXItY29sb3IgMC4xNXMgZWFzZTtcXG59XFxuXFxuLkhvbWVfY2FyZF9fMlNkdEI6aG92ZXIsXFxuLkhvbWVfY2FyZF9fMlNkdEI6Zm9jdXMsXFxuLkhvbWVfY2FyZF9fMlNkdEI6YWN0aXZlIHtcXG4gIGNvbG9yOiAjMDA3MGYzO1xcbiAgYm9yZGVyLWNvbG9yOiAjMDA3MGYzO1xcbn1cXG5cXG4uSG9tZV9jYXJkX18yU2R0QiBoMyB7XFxuICBtYXJnaW46IDAgMCAxcmVtIDA7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLkhvbWVfY2FyZF9fMlNkdEIgcCB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBsaW5lLWhlaWdodDogMS41O1xcbn1cXG5cXG4uSG9tZV9sb2dvX18xWWJySCB7XFxuICBoZWlnaHQ6IDFlbTtcXG59XFxuXFxuLkhvbWVfY3JlYXRlX19TT0VaTCB7XFxuICBtYXgtd2lkdGg6IDgwMHB4O1xcbiAgbWFyZ2luOiA1MHB4IGF1dG87XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbW96LWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgIC1tb3otYm94LXBhY2s6IGp1c3RpZnk7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLkhvbWVfY3JlYXRlX19TT0VaTCBsYWJlbCB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5Ib21lX2NyZWF0ZV9fU09FWkwgaW5wdXQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiA2cHggMTBweDtcXG4gIG1hcmdpbjogMTBweCAwO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4uSG9tZV9jcmVhdGVfX1NPRVpMIGJ1dHRvbiB7XFxuICBtYXJnaW46IDIwcHggYXV0byAwIGF1dG87XFxuICBiYWNrZ3JvdW5kOiAjMzU3MWYxO1xcbiAgY29sb3I6ICNmZmY7XFxuICBib3JkZXI6IDA7XFxuICBwYWRkaW5nOiAxMnB4O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5Ib21lX2dyaWRfXzJFaTJGIHtcXG4gICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAtbW96LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgICAgICAtbW96LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbiAgLkhvbWVfZ3JpZF9fMkVpMkYsXFxuICAuSG9tZV90ZXh0X18xc0NRYSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG5cXG4uSG9tZV9udW1lcmljX18xV25xYSB7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLHFCQUFhO0VBQWIsaUJBQWE7RUFBYixhQUFhO0VBQ2IsOEJBQXNCO0tBQXRCLHlCQUFzQjtLQUF0QiwwQkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLCtCQUF1QjtLQUF2QixxQkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLDJCQUFtQjtLQUFuQixzQkFBbUI7VUFBbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFPO0tBQVAsZ0JBQU87VUFBUCxTQUFPO0VBQ1AscUJBQWE7RUFBYixpQkFBYTtFQUFiLGFBQWE7RUFDYiw4QkFBc0I7S0FBdEIseUJBQXNCO0tBQXRCLDBCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsK0JBQXVCO0tBQXZCLHFCQUF1QjtV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Q25CLDBEQUFxRDtFQUFyRCxxREFBcUQ7QUFDdkQ7O0FBRUE7OztFQUdFLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsU0FBUztFQUNULGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixxQkFBYTtFQUFiLGlCQUFhO0VBQWIsYUFBYTtFQUNiLHNDQUE4QjtLQUE5QixzQkFBOEI7VUFBOUIsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLDJCQUFzQjtPQUF0QixzQkFBc0I7RUFDdEIsY0FBYztBQUNoQjtBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsU0FBUztFQUNULGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFO0lBQ0UsOEJBQXNCO09BQXRCLHlCQUFzQjtPQUF0QiwwQkFBc0I7WUFBdEIsc0JBQXNCO0VBQ3hCO0VBQ0E7O0lBRUUsV0FBVztFQUNiO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNvbnRhaW5lciB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIHBhZGRpbmc6IDAgMC41cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIG1heC13aWR0aDogODAwcHg7XFxufVxcblxcbi5tYWluIHtcXG4gIHBhZGRpbmc6IDVyZW0gMDtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZvb3RlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2VhZWFlYTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mb290ZXIgaW1nIHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxufVxcblxcbi5mb290ZXIgYSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGl0bGUgYSB7XFxuICBjb2xvcjogIzAwNzBmMztcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLnRpdGxlIGE6aG92ZXIsXFxuLnRpdGxlIGE6Zm9jdXMsXFxuLnRpdGxlIGE6YWN0aXZlIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgbWFyZ2luOiAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7XFxuICBmb250LXNpemU6IDRyZW07XFxufVxcblxcbi5zdWJ0aXRsZSB7XFxuICBtYXJnaW46IDA7XFxuICBsaW5lLWhlaWdodDogMS4xNTtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuLm1hcmdpbl9ib3R0b20ge1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweCAhaW1wb3J0YW50O1xcbn1cXG5cXG4udGl0bGUsXFxuLnN1YnRpdGxlLFxcbi5kZXNjcmlwdGlvbixcXG4ucGVuZGluZ193YXJuaW5nLFxcbi5jZW50ZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24sXFxuLnRleHQsXFxuLnBlbmRpbmdfd2FybmluZyB7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbkBrZXlmcmFtZXMgZ3JvdyB7XFxuICAgIDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNCk7XFxuICAgICAgfVxcbiAgICA1MCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgICB9XFxuICAgICAgMTAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDQpO1xcbiAgICB9XFxufVxcblxcbi5wZW5kaW5nX3dhcm5pbmcge1xcbiAgY29sb3I6IHJnYigxOTksIDU1LCA1NSk7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1czsgLyogdGhlIGR1cmF0aW9uIG9mIHRoZSBhbmltYXRpb24gKi9cXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0OyAvKiBob3cgdGhlIGFuaW1hdGlvbiB3aWxsIGJlaGF2ZSAqL1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAwczsgLyogaG93IGxvbmcgdG8gZGVsYXkgdGhlIGFuaW1hdGlvbiBmcm9tIHN0YXJ0aW5nICovXFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTsgLyogaG93IG1hbnkgdGltZXMgdGhlIGFuaW1hdGlvbiB3aWxsIHBsYXkgKi9cXG4gIGFuaW1hdGlvbi1uYW1lOiBncm93OyAvKiB0aGUgbmFtZSBvZiB0aGUgYW5pbWF0aW9uIHdlIGRlZmluZWQgYWJvdmUgKi9cXG59XFxuXFxuLmNvZGUge1xcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDAuNzVyZW07XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIGZvbnQtZmFtaWx5OiBNZW5sbywgTW9uYWNvLCBMdWNpZGEgQ29uc29sZSwgTGliZXJhdGlvbiBNb25vLCBEZWphVnUgU2FucyBNb25vLFxcbiAgICBCaXRzdHJlYW0gVmVyYSBTYW5zIE1vbm8sIENvdXJpZXIgTmV3LCBtb25vc3BhY2U7XFxufVxcblxcbi5ib2xkIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ubGVnZW5kZSB7XFxuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIG1hcmdpbjogMCAzcmVtO1xcbn1cXG5cXG4ubGVnZW5kZV90aXRsZSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4ubGVnZW5kZV9ib3gge1xcbiAgd2lkdGg6IDQwJTtcXG4gIC8qIG1hcmdpbjogMCAxcmVtOyAqL1xcbn1cXG5cXG4uZ3JpZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBtYXJnaW4tdG9wOiAzcmVtO1xcbn1cXG5cXG4uZ3JpZCxcXG4udGV4dCB7XFxuICBtYXgtd2lkdGg6IDgwMHB4O1xcbn1cXG5cXG4uY2FyZCB7XFxuICBtYXJnaW46IDFyZW07XFxuICBmbGV4LWJhc2lzOiA0NSU7XFxuICBwYWRkaW5nOiAxLjVyZW07XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZWFlYWVhO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlO1xcbn1cXG5cXG4uY2FyZDpob3ZlcixcXG4uY2FyZDpmb2N1cyxcXG4uY2FyZDphY3RpdmUge1xcbiAgY29sb3I6ICMwMDcwZjM7XFxuICBib3JkZXItY29sb3I6ICMwMDcwZjM7XFxufVxcblxcbi5jYXJkIGgzIHtcXG4gIG1hcmdpbjogMCAwIDFyZW0gMDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uY2FyZCBwIHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxufVxcblxcbi5sb2dvIHtcXG4gIGhlaWdodDogMWVtO1xcbn1cXG5cXG4uY3JlYXRlIHtcXG4gIG1heC13aWR0aDogODAwcHg7XFxuICBtYXJnaW46IDUwcHggYXV0bztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5jcmVhdGUgbGFiZWwge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4uY3JlYXRlIGlucHV0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogNnB4IDEwcHg7XFxuICBtYXJnaW46IDEwcHggMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5jcmVhdGUgYnV0dG9uIHtcXG4gIG1hcmdpbjogMjBweCBhdXRvIDAgYXV0bztcXG4gIGJhY2tncm91bmQ6ICMzNTcxZjE7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogMDtcXG4gIHBhZGRpbmc6IDEycHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLmdyaWQge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbiAgLmdyaWQsXFxuICAudGV4dCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG5cXG4ubnVtZXJpYyB7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiSG9tZV9jb250YWluZXJfXzFFY3NVXCIsXG5cdFwiY29udGVudFwiOiBcIkhvbWVfY29udGVudF9fMmZxT3pcIixcblx0XCJtYWluXCI6IFwiSG9tZV9tYWluX18xeDhnQ1wiLFxuXHRcImZvb3RlclwiOiBcIkhvbWVfZm9vdGVyX18xV2RoRFwiLFxuXHRcInRpdGxlXCI6IFwiSG9tZV90aXRsZV9fM0RqUjdcIixcblx0XCJzdWJ0aXRsZVwiOiBcIkhvbWVfc3VidGl0bGVfXzNJMnlJXCIsXG5cdFwibWFyZ2luX2JvdHRvbVwiOiBcIkhvbWVfbWFyZ2luX2JvdHRvbV9fM09aVzlcIixcblx0XCJkZXNjcmlwdGlvblwiOiBcIkhvbWVfZGVzY3JpcHRpb25fXzE3WjRGXCIsXG5cdFwicGVuZGluZ193YXJuaW5nXCI6IFwiSG9tZV9wZW5kaW5nX3dhcm5pbmdfXzJMNzZyXCIsXG5cdFwiY2VudGVyXCI6IFwiSG9tZV9jZW50ZXJfXzJaeGRyXCIsXG5cdFwidGV4dFwiOiBcIkhvbWVfdGV4dF9fMXNDUWFcIixcblx0XCJncm93XCI6IFwiSG9tZV9ncm93X18zaWlGLVwiLFxuXHRcImNvZGVcIjogXCJIb21lX2NvZGVfX2F4eDJZXCIsXG5cdFwiYm9sZFwiOiBcIkhvbWVfYm9sZF9fMnRLZXpcIixcblx0XCJsZWdlbmRlXCI6IFwiSG9tZV9sZWdlbmRlX18zZjR1blwiLFxuXHRcImxlZ2VuZGVfdGl0bGVcIjogXCJIb21lX2xlZ2VuZGVfdGl0bGVfXzJCcmpfXCIsXG5cdFwibGVnZW5kZV9ib3hcIjogXCJIb21lX2xlZ2VuZGVfYm94X18zMmIxSVwiLFxuXHRcImdyaWRcIjogXCJIb21lX2dyaWRfXzJFaTJGXCIsXG5cdFwiY2FyZFwiOiBcIkhvbWVfY2FyZF9fMlNkdEJcIixcblx0XCJsb2dvXCI6IFwiSG9tZV9sb2dvX18xWWJySFwiLFxuXHRcImNyZWF0ZVwiOiBcIkhvbWVfY3JlYXRlX19TT0VaTFwiLFxuXHRcIm51bWVyaWNcIjogXCJIb21lX251bWVyaWNfXzFXbnFhXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0ICogYXMgWExTWCBmcm9tICd4bHN4JztcblxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2xheW91dCdcbmltcG9ydCBGaWxlSGFuZGxlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2ZpbGUnXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvZm9vdGVyJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi8uLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuXG5pbXBvcnQgeyBpbml0UmVkdWNlciwgcmVkdWNlckZhY3RvcnkgfSBmcm9tICcuLi8uLi8uLi9saWIvaGlzdG9yaXF1ZSdcblxuY29uc3QgcmVkdWNlciA9IHJlZHVjZXJGYWN0b3J5KCdFeHDDqXJpbWVudGF0aW9uIEFyZGVubmVzIC0gQ05BRiAtIELDqW7DqWZpY2lhaXJlJylcbmNvbnN0IGRldk1vZGUgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PSAnZGV2ZWxvcG1lbnQnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFyZGVubmVzKCkge1xuICBjb25zdCBbZGV2RmlsZSwgc2V0RGV2RmlsZV0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbcnVucywgZGlzcGF0Y2hSdW5zXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgW10sIGluaXRSZWR1Y2VyKVxuICBjb25zdCBbdXNlcnNEYXRhLCBzZXRVc2Vyc0RhdGFdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtpc1BlbmRpbmcsIHNldElzUGVuZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtmaWxlU2l6ZSwgc2V0RmlsZVNpemVdID0gdXNlU3RhdGUoMCk7XG5cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBpZihkZXZGaWxlKSB7XG4gIC8vICAgICBmaWxlSGFuZGxlcihkZXZGaWxlKVxuICAvLyAgIH1cbiAgLy8gfSwgW2RldkZpbGVdKVxuXG4gIGNvbnN0IGZpbGVIYW5kbGVyID0gKGZpbGUpID0+IHtcbiAgICBpZiAoZGV2TW9kZSAmJiBmaWxlICE9IGRldkZpbGUpIHtcbiAgICAgIHNldERldkZpbGUoZmlsZSlcbiAgICB9XG4gICAgc2V0RmlsZVNpemUoZmlsZS5zaXplKTtcbiAgICBzZXRJc1BlbmRpbmcodHJ1ZSk7XG4gICAgY29uc3Qgc3RhcnRfdGltZSA9IG5ldyBEYXRlKCk7XG5cbiAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGNvbnN0IGZpbGVEYXRhID0gbmV3IFVpbnQ4QXJyYXkoZXZlbnQudGFyZ2V0LnJlc3VsdCk7XG4gICAgICBjb25zdCB4bHMgPSBYTFNYLnJlYWQoZmlsZURhdGEsIHt0eXBlOidhcnJheSd9KVxuICAgICAgLyogR2V0IGZpcnN0IHdvcmtzaGVldCAqL1xuICAgICAgY29uc3Qgd29ya3NoZWV0ID0geGxzLlNoZWV0c1t4bHMuU2hlZXROYW1lc1swXV07XG4gICAgICAvLyBMaW1pdGVyIGxhIGNhcHR1cmUgYXV4IGNvbG9ubmVzIEEtVFxuICAgICAgY29uc3QgcmFuZ2UgPSBYTFNYLnV0aWxzLmRlY29kZV9yYW5nZSh3b3Jrc2hlZXRbJyFyZWYnXSk7XG4gICAgICByYW5nZS5zLmMgPSAwOyAvLyAwID09IFhMU1gudXRpbHMuZGVjb2RlX2NvbChcIkFcIilcbiAgICAgIHJhbmdlLmUuYyA9IDE5OyAvLyAxOSA9PSBYTFNYLnV0aWxzLmRlY29kZV9jb2woXCJUXCIpXG4gICAgICBjb25zdCBuZXdfcmFuZ2UgPSBYTFNYLnV0aWxzLmVuY29kZV9yYW5nZShyYW5nZSk7XG4gICAgICAvKiBDb252ZXJ0IGFycmF5IHRvIGpzb24qL1xuICAgICAgY29uc3QganNvbkRhdGEgPSBYTFNYLnV0aWxzLnNoZWV0X3RvX2pzb24od29ya3NoZWV0LCB7IGJsYW5rcm93czogZmFsc2UsIHJhdzogZmFsc2UsIGRlZnZhbDogbnVsbCwgcmFuZ2U6IG5ld19yYW5nZSB9KTtcbiAgICAgIGNvbnN0IGZpbGVMZW5ndGggPSBqc29uRGF0YS5sZW5ndGg7XG5cbiAgICAgIGNvbnN0IHByb2Nlc3NlZERhdGEgPSBqc29uRGF0YS5tYXAodXNlckRhdGEgPT4geyByZXR1cm4gdXNlckRhdGEgfSlcbiAgICAgIHNldFVzZXJzRGF0YShwcm9jZXNzZWREYXRhKTtcbiAgICAgIHNldElzUGVuZGluZyhmYWxzZSk7XG5cbiAgICAgIGRpc3BhdGNoUnVucyh7XG4gICAgICAgIHR5cGU6ICdhcHBlbmQnLFxuICAgICAgICBpdGVtOiB7XG4gICAgICAgICAgdGltZXN0YW1wOiAobmV3IERhdGUoKSkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxOSksXG4gICAgICAgICAgZHVyYXRpb246IChuZXcgRGF0ZSgpKSAtIHN0YXJ0X3RpbWUsXG4gICAgICAgICAgZmlsZW5hbWU6IGZpbGUubmFtZSxcbiAgICAgICAgICBmaWxlU2l6ZTogZmlsZS5zaXplLFxuICAgICAgICAgIGZpbGVMaW5lczogZmlsZUxlbmd0aFxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoZmlsZSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxuICAgICAgICAgIEV4cMOpcmltZW50YXRpb24gQXJkZW5uZXNcbiAgICAgICAgPC9oMT5cblxuICAgICAgICA8RmlsZUhhbmRsZXIgZmlsZUhhbmRsZXI9e2ZpbGVIYW5kbGVyfSBpc1BlbmRpbmc9e2lzUGVuZGluZ30gZmlsZVNpemU9e2ZpbGVTaXplfSAvPlxuXG4gICAgICAgIHsgdXNlcnNEYXRhICYmIDw+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnN1YnRpdGxlfT5cbiAgICAgICAgICAgIELDqW7DqWZpY2lhaXJlcyBSU0FcbiAgICAgICAgICA8L2gyPlxuXG4gICAgICAgICAgeyB1c2Vyc0RhdGEubGVuZ3RoID09IDAgJiZcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5BdWN1biBiw6luw6lmaWNpYWlyZSBkYW5zIGxlIGZpY2hpZXI8L3A+XG4gICAgICAgICAgfVxuICAgICAgICAgIHsgdXNlcnNEYXRhLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgIDx0YWJsZT5cbiAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPk5vbTwvdGg+XG4gICAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5QcsOpbm9tPC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPk1haWw8L3RoPlxuICAgICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+VMOpbMOpcGhvbmU8L3RoPlxuICAgICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+UkRWLVNvbGlkYXJpdMOpczwvdGg+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8dHI+PC90cj5cbiAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgIHt1c2Vyc0RhdGEubWFwKCh1c2VyLCBpbmRleCkgPT4gKDx0ciBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgIDx0ZD57dXNlcltcIk5PTVwiXX08L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkPnt1c2VyW1wiUFJFTk9NXCJdfTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQ+e3VzZXJbXCJNQUlMXCJdfTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQ+e3VzZXJbXCJURUxFUEhPTkVcIl19PC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9PjxidXR0b24gb25DbGljaz17KCkgPT4ge2FsZXJ0KFwiRm9uY3Rpb25uYWxpdMOpIMOgIHZlbmlyICFcIil9fSA+Q3LDqWVyIHVuIGNvbXB0ZTwvYnV0dG9uPjwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgIH1cbiAgICAgICAgPC8+fVxuXG4gICAgICAgIDxGb290ZXJcbiAgICAgICAgICBzdWJqZWN0PVwiRXhww6lyaW1lbnRhdGlvbiBBcmRlbm5lc1wiXG4gICAgICAgICAgcG91cnF1b2k9XCJRdWVsIGVzdCBsJ29iamVjdGlmIGRlIGNldHRlIGV4cMOpcmltZW50YXRpb24mbmJzcDs/XCJcbiAgICAgICAgICB0ZXh0PXs8PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+RmFjaWxpdGVyIGxlIHRyYXZhaWwgZGVzIGFnZW50cyBkdSBkw6lwYXJ0ZW1lbnQgZXQgdGVzdGVyIGwndXRpbGlzYXRpb24gZGUgbCdhcHBsaWNhdGlvbiBSRFYtU29saWRhcml0w6lzIHBvdXIgYWNjw6lsw6lyZXIgbGEgcHJpc2UgZHUgcHJlbWllciByZW5kZXotdm91cyBkJ29yaWVudGF0aW9uLjwvcD5cbiAgICAgICAgICA8Lz59XG4gICAgICAgIC8+XG4gICAgICA8L21haW4+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=