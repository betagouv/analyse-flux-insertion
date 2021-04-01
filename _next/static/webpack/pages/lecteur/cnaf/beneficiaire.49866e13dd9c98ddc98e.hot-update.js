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
      setKeysDevoirs(Array.from(new Set(newKeysDevoirs)));
      var foldersDroitsOuverts = folders.filter(function (i) {
        return i.getElementsByTagName('ETATDOSRSA')[0].innerHTML == "2";
      }).map(function (i) {
        var items = i.getElementsByTagName('Personne');
        return Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(items);
      }).flat();
      var droitsEtDevoirs = foldersDroitsOuverts.map(function (i) {
        return i.getElementsByTagName('TOPPERSDRODEVORSA');
      }).reduce(processField, {});
      setIsPending(false);
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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_admin__WEBPACK_IMPORTED_MODULE_4__["default"], {
      category: "B\xE9n\xE9ficiaire",
      onRunRefresh: handleNewRuns
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.main,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.title,
        children: ["Lecteur de fichier", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 29
        }, this), "\xAB B\xE9n\xE9ficiaire \xBB de la CNAF"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_file__WEBPACK_IMPORTED_MODULE_6__["default"], {
        fileHandler: fileHandler,
        isPending: isPending,
        fileSize: fileSize
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 9
      }, this), runs && runs.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.subtitle,
          children: "Statistiques droits & devoirs"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.margin_side,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 184,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Dossiers (Foyers)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 185,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Personnes"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 186,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                colSpan: keysDroits.length,
                children: "Valeurs balises ETATDOSRSA"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 187,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                colSpan: keysDevoirs.length,
                children: "Valeurs balises TOPPERSDRODEVORSA"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 188,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Personnes soumises droits et devoirs dans foyer droit ouvert et versable"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 189,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 183,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              children: [keysDroits.map(function (k) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                  colSpan: "1",
                  children: k
                }, k, false, {
                  fileName: _jsxFileName,
                  lineNumber: 192,
                  columnNumber: 38
                }, _this);
              }), keysDevoirs.map(function (k) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                  colSpan: "1",
                  children: k
                }, k, false, {
                  fileName: _jsxFileName,
                  lineNumber: 193,
                  columnNumber: 39
                }, _this);
              })]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 191,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 182,
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
                  lineNumber: 198,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.center,
                  children: r.total
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 199,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.center,
                  children: r.people
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 200,
                  columnNumber: 17
                }, _this), keysDroits.map(function (k) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.center,
                    children: r.droits[k] || 0
                  }, k, false, {
                    fileName: _jsxFileName,
                    lineNumber: 201,
                    columnNumber: 38
                  }, _this);
                }), keysDevoirs.map(function (k) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.center,
                    children: r.devoirs[k] || 0
                  }, k, false, {
                    fileName: _jsxFileName,
                    lineNumber: 202,
                    columnNumber: 39
                  }, _this);
                }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.center,
                  children: r.droitsEtDevoirs[1] || 0
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 203,
                  columnNumber: 17
                }, _this)]
              }, "".concat(r.timestamp, "-").concat(r.filename, "-").concat(r.seed, "-0"), true, {
                fileName: _jsxFileName,
                lineNumber: 197,
                columnNumber: 36
              }, _this);
            }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 207,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 196,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 181,
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
              lineNumber: 215,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.bold,
              children: "Valeur balise ETATDOSRSA"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 216,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: ["0=Nouvelle demande en attente de d\xE9cision CG pour ouverture du droit", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 217,
                columnNumber: 86
              }, this), "1=Droit refus\xE9", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 218,
                columnNumber: 29
              }, this), "2=Droit ouvert et versable", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 219,
                columnNumber: 41
              }, this), "3=Droit ouvert et suspendu (le montant du droit est calculable, mais l'existence du droit est remis en cause)", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 220,
                columnNumber: 124
              }, this), "4=Droit ouvert mais versement suspendu (le montant du droit n'est pas calculable)", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 221,
                columnNumber: 96
              }, this), "5=Droit clos", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 222,
                columnNumber: 27
              }, this), "6=Droit clos sur mois ant\xE9rieur ayant eu un contr\xF4le dans le mois de r\xE9f\xE9rence pour une p\xE9riode ant\xE9rieure."]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 217,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 214,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.legende_box,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.bold,
              children: "Valeur balise TOPPERSDRODEVORSA"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 226,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: ["0=Personne pas soumise \xE0 droits et devoirs", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 227,
                columnNumber: 60
              }, this), "1=Personne soumise \xE0 droits et devoirs"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 227,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "\xA0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 229,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.bold,
              children: "Personnes soumises droits et devoirs dans foyer droit ouvert et versable"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 230,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "Nombre de personnes dont la balise TOPPERSDRODEVORSA=1 pr\xE9sents dans des foyers dont la balise ETATDOSRSA=2"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 231,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 225,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.subtitle,
          children: "Historique"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 235,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.margin_side,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 242,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Fichier"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 243,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Date"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 244,
                columnNumber: 17
              }, this), devMode && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Taille"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 245,
                columnNumber: 30
              }, this), devMode && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: ["Dur\xE9e", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 246,
                  columnNumber: 51
                }, this), "(en s)"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 246,
                columnNumber: 30
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Date du fichier"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 247,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Fr\xE9quence"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 248,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Nature"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 249,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Dossiers"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 250,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "D\xE9tails"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 251,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                rowSpan: "2",
                children: "Erreur"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 252,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 241,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 254,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 240,
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
                  lineNumber: 259,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: r.filename
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 260,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: r.timestamp
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 261,
                  columnNumber: 17
                }, _this), devMode && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: r.fileSize
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 262,
                  columnNumber: 30
                }, _this), devMode && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: !isNaN(r.duration) ? r.duration / 1000 : "#N/A"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 263,
                  columnNumber: 30
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: r.fileDatetime
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 264,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: "".concat(r.frequency, " (").concat(_lib_cnaf__WEBPACK_IMPORTED_MODULE_9__["frequencyNames"][r.frequency] || '?', ")")
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 265,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: "".concat(r.type, " (").concat(_lib_cnaf__WEBPACK_IMPORTED_MODULE_9__["typeNames"][r.type] || '?', ")")
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 266,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.numeric,
                  children: r.total
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 267,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: "shrink",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                    onClick: handleDateHistogram,
                    "data-index": i,
                    children: "Afficher par date"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 268,
                    columnNumber: 40
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 268,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: r.error ? 'Oui' : 'Non'
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 269,
                  columnNumber: 17
                }, _this)]
              }, "".concat(r.timestamp, "-").concat(r.filename, "-").concat(r.seed), true, {
                fileName: _jsxFileName,
                lineNumber: 258,
                columnNumber: 36
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 257,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 239,
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
          lineNumber: 275,
          columnNumber: 11
        }, this)]
      }, void 0, true), runs.length != 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.text,
        children: "Vous pouvez acc\xE9der \xE0 une repr\xE9sentation graphique de la r\xE9partition dans les temps des demandes connues dans les fichiers analys\xE9s. Pour cela il faut cliquer sur le bouton \xAB Afficher par date \xBB."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 278,
        columnNumber: 31
      }, this), dateData.index != undefined && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.subtitle,
          children: "Nombre de dossiers associ\xE9s \xE0 des demandes r\xE9alis\xE9s \xE0 chaque date"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 284,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            height: 250 * dateData.yearCount + "px",
            width: "100%"
          },
          children: Object(_components_chart__WEBPACK_IMPORTED_MODULE_5__["default"])(dateData)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 287,
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
            lineNumber: 297,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.text,
            children: "Avec cet outil, nous souhaitons permettre aux personnes qui ont acc\xE8s \xE0 ces fichiers d'en extraire des statistiques g\xE9n\xE9rales sans avoir \xE0 mettre les mains dans le camboui elles-m\xEAme."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 298,
            columnNumber: 13
          }, this)]
        }, void 0, true)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 293,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 167,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9maWxlLmpzIiwid2VicGFjazovL19OX0UvLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9sZWN0ZXVyL2NuYWYvYmVuZWZpY2lhaXJlL2luZGV4LmpzIl0sIm5hbWVzIjpbIkZpbGVIYW5kbGVyIiwiZmlsZUhhbmRsZXIiLCJpc1BlbmRpbmciLCJmaWxlU2l6ZSIsInNlbGVjdEhhbmRsZXIiLCJ1c2VDYWxsYmFjayIsImV2ZW50IiwiaSIsInRhcmdldCIsImZpbGVzIiwibGVuZ3RoIiwidmFsdWUiLCJzdHlsZXMiLCJkZXNjcmlwdGlvbiIsInJlZHVjZXIiLCJyZWR1Y2VyRmFjdG9yeSIsImRldk1vZGUiLCJCZW5lZmljaWFpcmUiLCJ1c2VTdGF0ZSIsImRldkZpbGUiLCJzZXREZXZGaWxlIiwidXNlUmVkdWNlciIsImluaXRSZWR1Y2VyIiwicnVucyIsImRpc3BhdGNoUnVucyIsInNldElzUGVuZGluZyIsInNldEZpbGVTaXplIiwia2V5c0Ryb2l0cyIsInNldEtleXNEcm9pdHMiLCJrZXlzRGV2b2lycyIsInNldEtleXNEZXZvaXJzIiwiaW5kZXgiLCJ1bmRlZmluZWQiLCJkYXRhIiwiZnJvbSIsInRvIiwiZGF0ZURhdGEiLCJzZXREYXRlRGF0YSIsImhhbmRsZU5ld1J1bnMiLCJ0eXBlIiwiZm9sZGVycyIsInVzZUVmZmVjdCIsImhhbmRsZURhdGVIaXN0b2dyYW0iLCJzaG93RGF0ZUhpc3RvZ3JhbSIsInBhcnNlSW50IiwiZGF0YXNldCIsInNvdXJjZSIsImRhdGVzIiwiT2JqZWN0Iiwia2V5cyIsIm1pbkRhdGUiLCJtYXhEYXRlIiwibWFwIiwiZCIsImRhdGUiLCJEYXRlIiwiZGF5IiwidG9JU09TdHJpbmciLCJzbGljZSIsInllYXJDb3VudCIsImdldFllYXIiLCJmaWxlIiwic2l6ZSIsInN0YXJ0X3RpbWUiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwicGFyc2VyIiwiRE9NUGFyc2VyIiwiZG9tIiwicGFyc2VGcm9tU3RyaW5nIiwicmVzdWx0IiwiZGVzYyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiZnJlcXVlbmN5IiwiaW5uZXJIVE1MIiwiZHQiLCJ0aW1lIiwicHJvY2Vzc0ZpZWxkIiwiYWNjdW0iLCJBcnJheSIsInBlb3BsZSIsInJlZHVjZSIsImRyb2l0cyIsIm5ld0tleXNEcm9pdHMiLCJjb25jYXQiLCJTZXQiLCJkZXZvaXJzIiwibmV3S2V5c0Rldm9pcnMiLCJmb2xkZXJzRHJvaXRzT3V2ZXJ0cyIsImZpbHRlciIsIml0ZW1zIiwiZmxhdCIsImRyb2l0c0V0RGV2b2lycyIsIml0ZW0iLCJzZWVkIiwiTWF0aCIsInJhbmRvbSIsInRpbWVzdGFtcCIsImR1cmF0aW9uIiwiZmlsZW5hbWUiLCJuYW1lIiwiZmlsZURhdGV0aW1lIiwiZXJyb3IiLCJhY3RpdmVFbGVtZW50Iiwibm9kZU5hbWUiLCJ0b3RhbCIsInJlYWRBc1RleHQiLCJjb250YWluZXIiLCJtYWluIiwidGl0bGUiLCJzdWJ0aXRsZSIsIm1hcmdpbl9zaWRlIiwiayIsInIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjZW50ZXIiLCJsZWdlbmRlIiwibGVnZW5kZV9ib3giLCJsZWdlbmRlX3RpdGxlIiwiYm9sZCIsImlzTmFOIiwiZnJlcXVlbmN5TmFtZXMiLCJ0eXBlTmFtZXMiLCJudW1lcmljIiwibWFyZ2luX2JvdHRvbSIsInRleHQiLCJoZWlnaHQiLCJ3aWR0aCIsIlJlc3BvbnNpdmVDYWxlbmRhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUVlLFNBQVNBLFdBQVQsT0FJWjtBQUFBOztBQUFBLE1BSERDLFdBR0MsUUFIREEsV0FHQztBQUFBLE1BRkRDLFNBRUMsUUFGREEsU0FFQztBQUFBLE1BRERDLFFBQ0MsUUFEREEsUUFDQztBQUNELE1BQU1DLGFBQWEsR0FBR0MseURBQVcsQ0FBQyxVQUFDQyxLQUFELEVBQVc7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QUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFdBQVcsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxPQUFPLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLFNBQVMsWUFBWSxPQUFPLE9BQU8sWUFBWSxhQUFhLE9BQU8sS0FBSyxLQUFLLFlBQVksY0FBYyxNQUFNLEtBQUssWUFBWSxjQUFjLE1BQU0sS0FBSyxZQUFZLGNBQWMsTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxhQUFhLGNBQWMsTUFBTSxLQUFLLFlBQVksYUFBYSxjQUFjLE1BQU0sS0FBSyxZQUFZLGFBQWEsY0FBYyxNQUFNLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLHlCQUF5QixhQUFhLGFBQWEseUJBQXlCLGFBQWEsYUFBYSx5QkFBeUIsYUFBYSxhQUFhLHlCQUF5QixhQUFhLGFBQWEseUJBQXlCLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sT0FBTyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxXQUFXLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxZ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aWNpYWlyZS40OTg2NmUxM2RkOWM5OGRkYzk4ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VDYWxsYmFja30gZnJvbSAncmVhY3QnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCBQZW5kaW5nTWVzc2FnZSBmcm9tICcuL3BlbmRpbmcnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZpbGVIYW5kbGVyKHtcbiAgZmlsZUhhbmRsZXIsXG4gIGlzUGVuZGluZyxcbiAgZmlsZVNpemVcbn0pIHtcbiAgY29uc3Qgc2VsZWN0SGFuZGxlciA9IHVzZUNhbGxiYWNrKChldmVudCkgPT4ge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXZlbnQudGFyZ2V0LmZpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBmaWxlSGFuZGxlcihldmVudC50YXJnZXQuZmlsZXNbaV0pXG4gICAgfVxuICAgIGV2ZW50LnRhcmdldC52YWx1ZSA9ICcnXG4gIH0pXG5cbiAgcmV0dXJuICg8PlxuICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cbiAgICAgIEdsaXNzZXogZXQgZMOpcG9zZXogbGUgZmljaGllciDDoCBhbmFseXNlciBvdSBzw6lsZWN0aW9ubmV6IGxlLjxici8+XG4gICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBvbkNoYW5nZT17c2VsZWN0SGFuZGxlcn0gbXVsdGlwbGUvPlxuICAgIDwvcD5cblxuICAgIHtpc1BlbmRpbmcgJiYgPFBlbmRpbmdNZXNzYWdlIGZpbGVTaXplPXtmaWxlU2l6ZX0vPn1cblxuICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cbiAgICAgIExlcyBvcMOpcmF0aW9ucyBzb250IHRvdXRlcyByw6lhbGlzw6llcyBzdXIgdm90cmUgb3JkaW5hdGV1ci48YnIvPlxuICAgICAgQXVjdW5lIGRvbm7DqWUgcGVyc29ubmVsbGUgbidlc3QgdHJhbnNmw6lyw6llLlxuICAgIDwvcD5cbiAgPC8+KVxufVxuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLkhvbWVfY29udGFpbmVyX18xRWNzVSB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIHBhZGRpbmc6IDAgMC41cmVtO1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogLW1vei1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgLW1vei1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gICAgIC1tb3otYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgIC1tb3otYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAtbW96LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uSG9tZV9jb250ZW50X18yZnFPeiB7XFxuICBtYXgtd2lkdGg6IDgwMHB4O1xcbn1cXG5cXG4uSG9tZV9tYWluX18xeDhnQyB7XFxuICBwYWRkaW5nOiA1cmVtIDA7XFxuICAtd2Via2l0LWZsZXg6IDEgMTtcXG4gICAgIC1tb3otYm94LWZsZXg6IDE7XFxuICAgICAgICAgIGZsZXg6IDEgMTtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tb3otYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgIC1tb3otYm94LW9yaWVudDogdmVydGljYWw7XFxuICAgICAtbW96LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAtbW96LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgLW1vei1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLkhvbWVfZm9vdGVyX18xV2RoRCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2VhZWFlYTtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tb3otYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAtbW96LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgLW1vei1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLkhvbWVfZm9vdGVyX18xV2RoRCBpbWcge1xcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXG59XFxuXFxuLkhvbWVfZm9vdGVyX18xV2RoRCBhIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tb3otYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAtbW96LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgLW1vei1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLkhvbWVfdGl0bGVfXzNEalI3IGEge1xcbiAgY29sb3I6ICMwMDcwZjM7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5Ib21lX3RpdGxlX18zRGpSNyBhOmhvdmVyLFxcbi5Ib21lX3RpdGxlX18zRGpSNyBhOmZvY3VzLFxcbi5Ib21lX3RpdGxlX18zRGpSNyBhOmFjdGl2ZSB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLkhvbWVfdGl0bGVfXzNEalI3IHtcXG4gIG1hcmdpbjogMDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjE1O1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbn1cXG5cXG4uSG9tZV9zdWJ0aXRsZV9fM0kyeUkge1xcbiAgbWFyZ2luOiAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbi5Ib21lX21hcmdpbl9ib3R0b21fXzNPWlc5IHtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHggIWltcG9ydGFudDtcXG59XFxuXFxuLkhvbWVfdGl0bGVfXzNEalI3LFxcbi5Ib21lX3N1YnRpdGxlX18zSTJ5SSxcXG4uSG9tZV9kZXNjcmlwdGlvbl9fMTdaNEYsXFxuLkhvbWVfcGVuZGluZ193YXJuaW5nX18yTDc2cixcXG4uSG9tZV9jZW50ZXJfXzJaeGRyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLkhvbWVfZGVzY3JpcHRpb25fXzE3WjRGLFxcbi5Ib21lX3RleHRfXzFzQ1FhLFxcbi5Ib21lX3BlbmRpbmdfd2FybmluZ19fMkw3NnIge1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgSG9tZV9ncm93X18zaWlGLSB7XFxuICAgIDAlIHtcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjA0KTtcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA0KTtcXG4gICAgICB9XFxuICAgIDUwJSB7XFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgICAgfVxcbiAgICAgIDEwMCUge1xcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDQpO1xcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDQpO1xcbiAgICB9XFxufVxcblxcbkAtbW96LWtleWZyYW1lcyBIb21lX2dyb3dfXzNpaUYtIHtcXG4gICAgMCUge1xcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMDQpO1xcbiAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDQpO1xcbiAgICAgIH1cXG4gICAgNTAlIHtcXG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgICB9XFxuICAgICAgMTAwJSB7XFxuICAgICAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4wNCk7XFxuICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNCk7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyBIb21lX2dyb3dfXzNpaUYtIHtcXG4gICAgMCUge1xcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDQpO1xcbiAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMDQpO1xcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDQpO1xcbiAgICAgIH1cXG4gICAgNTAlIHtcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgICB9XFxuICAgICAgMTAwJSB7XFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wNCk7XFxuICAgICAgICAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4wNCk7XFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNCk7XFxuICAgIH1cXG59XFxuXFxuLkhvbWVfcGVuZGluZ193YXJuaW5nX18yTDc2ciB7XFxuICBjb2xvcjogcmdiKDE5OSwgNTUsIDU1KTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogNXM7XFxuICAgICAtbW96LWFuaW1hdGlvbi1kdXJhdGlvbjogNXM7XFxuICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNXM7IC8qIHRoZSBkdXJhdGlvbiBvZiB0aGUgYW5pbWF0aW9uICovXFxuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbiAgICAgLW1vei1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXG4gICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7IC8qIGhvdyB0aGUgYW5pbWF0aW9uIHdpbGwgYmVoYXZlICovXFxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMHM7XFxuICAgICAtbW96LWFuaW1hdGlvbi1kZWxheTogMHM7XFxuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMHM7IC8qIGhvdyBsb25nIHRvIGRlbGF5IHRoZSBhbmltYXRpb24gZnJvbSBzdGFydGluZyAqL1xcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXG4gICAgIC1tb3otYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxuICAgICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlOyAvKiBob3cgbWFueSB0aW1lcyB0aGUgYW5pbWF0aW9uIHdpbGwgcGxheSAqL1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogSG9tZV9ncm93X18zaWlGLTtcXG4gICAgIC1tb3otYW5pbWF0aW9uLW5hbWU6IEhvbWVfZ3Jvd19fM2lpRi07XFxuICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBIb21lX2dyb3dfXzNpaUYtOyAvKiB0aGUgbmFtZSBvZiB0aGUgYW5pbWF0aW9uIHdlIGRlZmluZWQgYWJvdmUgKi9cXG59XFxuXFxuLkhvbWVfY29kZV9fYXh4Mlkge1xcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDAuNzVyZW07XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIGZvbnQtZmFtaWx5OiBNZW5sbywgTW9uYWNvLCBMdWNpZGEgQ29uc29sZSwgTGliZXJhdGlvbiBNb25vLCBEZWphVnUgU2FucyBNb25vLFxcbiAgICBCaXRzdHJlYW0gVmVyYSBTYW5zIE1vbm8sIENvdXJpZXIgTmV3LCBtb25vc3BhY2U7XFxufVxcblxcbi5Ib21lX2JvbGRfXzJ0S2V6IHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uSG9tZV9sZWdlbmRlX18zZjR1biB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXggIWltcG9ydGFudDtcXG4gIGRpc3BsYXk6IC1tb3otYm94ICFpbXBvcnRhbnQ7XFxuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XFxuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIG1hcmdpbjogMCAzcmVtO1xcbn1cXG5cXG4uSG9tZV9sZWdlbmRlX3RpdGxlX18yQnJqXyB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4uSG9tZV9sZWdlbmRlX2JveF9fMzJiMUkge1xcbiAgd2lkdGg6IDQwJTtcXG4gIC8qIG1hcmdpbjogMCAxcmVtOyAqL1xcbn1cXG5cXG4uSG9tZV9ncmlkX18yRWkyRiB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbW96LWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgICAgLW1vei1ib3gtYWxpZ246IHN0cmV0Y2g7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgLXdlYmtpdC1mbGV4LXdyYXA6IHdyYXA7XFxuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gIG1hcmdpbi10b3A6IDNyZW07XFxufVxcblxcbi5Ib21lX2dyaWRfXzJFaTJGLFxcbi5Ib21lX3RleHRfXzFzQ1FhIHtcXG4gIG1heC13aWR0aDogODAwcHg7XFxufVxcblxcbi5Ib21lX2NhcmRfXzJTZHRCIHtcXG4gIG1hcmdpbjogMXJlbTtcXG4gIC13ZWJraXQtZmxleC1iYXNpczogNDUlO1xcbiAgICAgICAgICBmbGV4LWJhc2lzOiA0NSU7XFxuICBwYWRkaW5nOiAxLjVyZW07XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZWFlYWVhO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIC1tb3otdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZSwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2U7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLCBib3JkZXItY29sb3IgMC4xNXMgZWFzZTtcXG59XFxuXFxuLkhvbWVfY2FyZF9fMlNkdEI6aG92ZXIsXFxuLkhvbWVfY2FyZF9fMlNkdEI6Zm9jdXMsXFxuLkhvbWVfY2FyZF9fMlNkdEI6YWN0aXZlIHtcXG4gIGNvbG9yOiAjMDA3MGYzO1xcbiAgYm9yZGVyLWNvbG9yOiAjMDA3MGYzO1xcbn1cXG5cXG4uSG9tZV9jYXJkX18yU2R0QiBoMyB7XFxuICBtYXJnaW46IDAgMCAxcmVtIDA7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLkhvbWVfY2FyZF9fMlNkdEIgcCB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBsaW5lLWhlaWdodDogMS41O1xcbn1cXG5cXG4uSG9tZV9sb2dvX18xWWJySCB7XFxuICBoZWlnaHQ6IDFlbTtcXG59XFxuXFxuLkhvbWVfY3JlYXRlX19TT0VaTCB7XFxuICBtYXgtd2lkdGg6IDgwMHB4O1xcbiAgbWFyZ2luOiA1MHB4IGF1dG87XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbW96LWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgIC1tb3otYm94LXBhY2s6IGp1c3RpZnk7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLkhvbWVfY3JlYXRlX19TT0VaTCBsYWJlbCB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5Ib21lX2NyZWF0ZV9fU09FWkwgaW5wdXQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiA2cHggMTBweDtcXG4gIG1hcmdpbjogMTBweCAwO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4uSG9tZV9jcmVhdGVfX1NPRVpMIGJ1dHRvbiB7XFxuICBtYXJnaW46IDIwcHggYXV0byAwIGF1dG87XFxuICBiYWNrZ3JvdW5kOiAjMzU3MWYxO1xcbiAgY29sb3I6ICNmZmY7XFxuICBib3JkZXI6IDA7XFxuICBwYWRkaW5nOiAxMnB4O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5Ib21lX2dyaWRfXzJFaTJGIHtcXG4gICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAtbW96LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgICAgICAtbW96LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbiAgLkhvbWVfZ3JpZF9fMkVpMkYsXFxuICAuSG9tZV90ZXh0X18xc0NRYSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG5cXG4uSG9tZV9udW1lcmljX18xV25xYSB7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLHFCQUFhO0VBQWIsaUJBQWE7RUFBYixhQUFhO0VBQ2IsOEJBQXNCO0tBQXRCLHlCQUFzQjtLQUF0QiwwQkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLCtCQUF1QjtLQUF2QixxQkFB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aW5lciB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIHBhZGRpbmc6IDAgMC41cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIG1heC13aWR0aDogODAwcHg7XFxufVxcblxcbi5tYWluIHtcXG4gIHBhZGRpbmc6IDVyZW0gMDtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZvb3RlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2VhZWFlYTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mb290ZXIgaW1nIHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxufVxcblxcbi5mb290ZXIgYSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGl0bGUgYSB7XFxuICBjb2xvcjogIzAwNzBmMztcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLnRpdGxlIGE6aG92ZXIsXFxuLnRpdGxlIGE6Zm9jdXMsXFxuLnRpdGxlIGE6YWN0aXZlIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgbWFyZ2luOiAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7XFxuICBmb250LXNpemU6IDRyZW07XFxufVxcblxcbi5zdWJ0aXRsZSB7XFxuICBtYXJnaW46IDA7XFxuICBsaW5lLWhlaWdodDogMS4xNTtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuLm1hcmdpbl9ib3R0b20ge1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweCAhaW1wb3J0YW50O1xcbn1cXG5cXG4udGl0bGUsXFxuLnN1YnRpdGxlLFxcbi5kZXNjcmlwdGlvbixcXG4ucGVuZGluZ193YXJuaW5nLFxcbi5jZW50ZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24sXFxuLnRleHQsXFxuLnBlbmRpbmdfd2FybmluZyB7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbkBrZXlmcmFtZXMgZ3JvdyB7XFxuICAgIDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNCk7XFxuICAgICAgfVxcbiAgICA1MCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgICB9XFxuICAgICAgMTAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDQpO1xcbiAgICB9XFxufVxcblxcbi5wZW5kaW5nX3dhcm5pbmcge1xcbiAgY29sb3I6IHJnYigxOTksIDU1LCA1NSk7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1czsgLyogdGhlIGR1cmF0aW9uIG9mIHRoZSBhbmltYXRpb24gKi9cXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0OyAvKiBob3cgdGhlIGFuaW1hdGlvbiB3aWxsIGJlaGF2ZSAqL1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAwczsgLyogaG93IGxvbmcgdG8gZGVsYXkgdGhlIGFuaW1hdGlvbiBmcm9tIHN0YXJ0aW5nICovXFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTsgLyogaG93IG1hbnkgdGltZXMgdGhlIGFuaW1hdGlvbiB3aWxsIHBsYXkgKi9cXG4gIGFuaW1hdGlvbi1uYW1lOiBncm93OyAvKiB0aGUgbmFtZSBvZiB0aGUgYW5pbWF0aW9uIHdlIGRlZmluZWQgYWJvdmUgKi9cXG59XFxuXFxuLmNvZGUge1xcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDAuNzVyZW07XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIGZvbnQtZmFtaWx5OiBNZW5sbywgTW9uYWNvLCBMdWNpZGEgQ29uc29sZSwgTGliZXJhdGlvbiBNb25vLCBEZWphVnUgU2FucyBNb25vLFxcbiAgICBCaXRzdHJlYW0gVmVyYSBTYW5zIE1vbm8sIENvdXJpZXIgTmV3LCBtb25vc3BhY2U7XFxufVxcblxcbi5ib2xkIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ubGVnZW5kZSB7XFxuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIG1hcmdpbjogMCAzcmVtO1xcbn1cXG5cXG4ubGVnZW5kZV90aXRsZSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4ubGVnZW5kZV9ib3gge1xcbiAgd2lkdGg6IDQwJTtcXG4gIC8qIG1hcmdpbjogMCAxcmVtOyAqL1xcbn1cXG5cXG4uZ3JpZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBtYXJnaW4tdG9wOiAzcmVtO1xcbn1cXG5cXG4uZ3JpZCxcXG4udGV4dCB7XFxuICBtYXgtd2lkdGg6IDgwMHB4O1xcbn1cXG5cXG4uY2FyZCB7XFxuICBtYXJnaW46IDFyZW07XFxuICBmbGV4LWJhc2lzOiA0NSU7XFxuICBwYWRkaW5nOiAxLjVyZW07XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZWFlYWVhO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlO1xcbn1cXG5cXG4uY2FyZDpob3ZlcixcXG4uY2FyZDpmb2N1cyxcXG4uY2FyZDphY3RpdmUge1xcbiAgY29sb3I6ICMwMDcwZjM7XFxuICBib3JkZXItY29sb3I6ICMwMDcwZjM7XFxufVxcblxcbi5jYXJkIGgzIHtcXG4gIG1hcmdpbjogMCAwIDFyZW0gMDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uY2FyZCBwIHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxufVxcblxcbi5sb2dvIHtcXG4gIGhlaWdodDogMWVtO1xcbn1cXG5cXG4uY3JlYXRlIHtcXG4gIG1heC13aWR0aDogODAwcHg7XFxuICBtYXJnaW46IDUwcHggYXV0bztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5jcmVhdGUgbGFiZWwge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4uY3JlYXRlIGlucHV0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogNnB4IDEwcHg7XFxuICBtYXJnaW46IDEwcHggMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5jcmVhdGUgYnV0dG9uIHtcXG4gIG1hcmdpbjogMjBweCBhdXRvIDAgYXV0bztcXG4gIGJhY2tncm91bmQ6ICMzNTcxZjE7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogMDtcXG4gIHBhZGRpbmc6IDEycHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLmdyaWQge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbiAgLmdyaWQsXFxuICAudGV4dCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG5cXG4ubnVtZXJpYyB7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiSG9tZV9jb250YWluZXJfXzFFY3NVXCIsXG5cdFwiY29udGVudFwiOiBcIkhvbWVfY29udGVudF9fMmZxT3pcIixcblx0XCJtYWluXCI6IFwiSG9tZV9tYWluX18xeDhnQ1wiLFxuXHRcImZvb3RlclwiOiBcIkhvbWVfZm9vdGVyX18xV2RoRFwiLFxuXHRcInRpdGxlXCI6IFwiSG9tZV90aXRsZV9fM0RqUjdcIixcblx0XCJzdWJ0aXRsZVwiOiBcIkhvbWVfc3VidGl0bGVfXzNJMnlJXCIsXG5cdFwibWFyZ2luX2JvdHRvbVwiOiBcIkhvbWVfbWFyZ2luX2JvdHRvbV9fM09aVzlcIixcblx0XCJkZXNjcmlwdGlvblwiOiBcIkhvbWVfZGVzY3JpcHRpb25fXzE3WjRGXCIsXG5cdFwicGVuZGluZ193YXJuaW5nXCI6IFwiSG9tZV9wZW5kaW5nX3dhcm5pbmdfXzJMNzZyXCIsXG5cdFwiY2VudGVyXCI6IFwiSG9tZV9jZW50ZXJfXzJaeGRyXCIsXG5cdFwidGV4dFwiOiBcIkhvbWVfdGV4dF9fMXNDUWFcIixcblx0XCJncm93XCI6IFwiSG9tZV9ncm93X18zaWlGLVwiLFxuXHRcImNvZGVcIjogXCJIb21lX2NvZGVfX2F4eDJZXCIsXG5cdFwiYm9sZFwiOiBcIkhvbWVfYm9sZF9fMnRLZXpcIixcblx0XCJsZWdlbmRlXCI6IFwiSG9tZV9sZWdlbmRlX18zZjR1blwiLFxuXHRcImxlZ2VuZGVfdGl0bGVcIjogXCJIb21lX2xlZ2VuZGVfdGl0bGVfXzJCcmpfXCIsXG5cdFwibGVnZW5kZV9ib3hcIjogXCJIb21lX2xlZ2VuZGVfYm94X18zMmIxSVwiLFxuXHRcImdyaWRcIjogXCJIb21lX2dyaWRfXzJFaTJGXCIsXG5cdFwiY2FyZFwiOiBcIkhvbWVfY2FyZF9fMlNkdEJcIixcblx0XCJsb2dvXCI6IFwiSG9tZV9sb2dvX18xWWJySFwiLFxuXHRcImNyZWF0ZVwiOiBcIkhvbWVfY3JlYXRlX19TT0VaTFwiLFxuXHRcIm51bWVyaWNcIjogXCJIb21lX251bWVyaWNfXzFXbnFhXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVkdWNlciwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBBZG1pbiBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL2FkbWluJ1xuaW1wb3J0IFJlc3BvbnNpdmVDYWxlbmRhciBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL2NoYXJ0J1xuaW1wb3J0IEZpbGVIYW5kbGVyIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvZmlsZSdcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9mb290ZXInXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0J1xuaW1wb3J0IHsgZnJlcXVlbmN5TmFtZXMsIHR5cGVOYW1lcyB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9jbmFmJ1xuaW1wb3J0IHsgaW5pdFJlZHVjZXIsIHJlZHVjZXJGYWN0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL2hpc3RvcmlxdWUnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uLy4uLy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5cblxuXG5jb25zdCByZWR1Y2VyID0gcmVkdWNlckZhY3RvcnkoJ1Rlc3QgLSBDTkFGIC0gQsOpbsOpZmljaWFpcmUnKVxuY29uc3QgZGV2TW9kZSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09ICdkZXZlbG9wbWVudCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmVuZWZpY2lhaXJlKCkge1xuICBjb25zdCBbZGV2RmlsZSwgc2V0RGV2RmlsZV0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbcnVucywgZGlzcGF0Y2hSdW5zXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgW10sIGluaXRSZWR1Y2VyKVxuICBjb25zdCBbaXNQZW5kaW5nLCBzZXRJc1BlbmRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZmlsZVNpemUsIHNldEZpbGVTaXplXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBba2V5c0Ryb2l0cywgc2V0S2V5c0Ryb2l0c10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtrZXlzRGV2b2lycywgc2V0S2V5c0Rldm9pcnNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbZGF0ZURhdGEsIHNldERhdGVEYXRhXSA9IHVzZVN0YXRlKHtcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGRhdGE6IFtdLFxuICAgIGZyb206IFwiMjAxNi0wMy0wMVwiLFxuICAgIHRvOiBcIjIwMjEtMDMtMDFcIixcbiAgfSlcblxuICBjb25zdCBoYW5kbGVOZXdSdW5zID0gdXNlQ2FsbGJhY2soZGF0YSA9PiB7XG4gICAgZGlzcGF0Y2hSdW5zKHtcbiAgICAgIHR5cGU6ICdyZXNldCcsXG4gICAgICBmb2xkZXJzOiBkYXRhXG4gICAgfSlcbiAgfSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmKGRldkZpbGUpIHtcbiAgICAgIGZpbGVIYW5kbGVyKGRldkZpbGUpXG4gICAgfVxuICB9LCBbZGV2RmlsZV0pXG5cbiAgY29uc3QgaGFuZGxlRGF0ZUhpc3RvZ3JhbSA9IHVzZUNhbGxiYWNrKGV2ZW50ID0+IHNob3dEYXRlSGlzdG9ncmFtKHBhcnNlSW50KGV2ZW50LnRhcmdldC5kYXRhc2V0LmluZGV4KSkpXG4gIGNvbnN0IHNob3dEYXRlSGlzdG9ncmFtID0gdXNlQ2FsbGJhY2soaW5kZXggPT4ge1xuICAgIGNvbnN0IHNvdXJjZSA9IHJ1bnNbaW5kZXhdXG5cbiAgICBjb25zdCBkYXRlcyA9IE9iamVjdC5rZXlzKHNvdXJjZS5kYXRlcylcbiAgICBsZXQgbWluRGF0ZSA9IG51bGxcbiAgICBsZXQgbWF4RGF0ZSA9IG51bGxcblxuICAgIGNvbnN0IGRhdGEgPSBkYXRlcy5tYXAoZCA9PiB7XG4gICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKGQpXG4gICAgICBpZiAoIW1pbkRhdGUpIHtcbiAgICAgICAgbWluRGF0ZSA9IGRhdGVcbiAgICAgICAgbWF4RGF0ZSA9IGRhdGVcbiAgICAgIH0gZWxzZSBpZiAoZGF0ZSA8IG1pbkRhdGUpIHtcbiAgICAgICAgbWluRGF0ZSA9IGRhdGVcbiAgICAgIH0gZWxzZSBpZiAobWF4RGF0ZSA8IGRhdGUpIHtcbiAgICAgICAgbWF4RGF0ZSA9IGRhdGVcbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRheTogZGF0ZS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKSxcbiAgICAgICAgdmFsdWU6IHNvdXJjZS5kYXRlc1tkXVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCB5ZWFyQ291bnQgPSBtYXhEYXRlLmdldFllYXIoKSAtIG1pbkRhdGUuZ2V0WWVhcigpICsgMVxuICAgIHNldERhdGVEYXRhKHtcbiAgICAgIGluZGV4LFxuICAgICAgZGF0YSxcbiAgICAgIGZyb206IG1pbkRhdGUudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCksXG4gICAgICB0bzogbWF4RGF0ZS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKSxcbiAgICAgIHllYXJDb3VudCxcbiAgICB9KVxuICB9KVxuXG4gIGNvbnN0IGZpbGVIYW5kbGVyID0gKGZpbGUpID0+IHtcbiAgICBpZiAoZGV2TW9kZSAmJiBmaWxlICE9IGRldkZpbGUpIHtcbiAgICAgIHNldERldkZpbGUoZmlsZSlcbiAgICB9XG4gICAgc2V0RmlsZVNpemUoZmlsZS5zaXplKTtcbiAgICBzZXRJc1BlbmRpbmcodHJ1ZSk7XG4gICAgY29uc3Qgc3RhcnRfdGltZSA9IG5ldyBEYXRlKCk7XG5cbiAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgY29uc3QgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpXG4gICAgICBjb25zdCBkb20gPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKGV2ZW50LnRhcmdldC5yZXN1bHQsIFwiYXBwbGljYXRpb24veG1sXCIpXG5cbiAgICAgIGNvbnN0IGRlc2MgPSBkb20uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ0lkZW50aWZpY2F0aW9uRmx1eCcpWzBdXG4gICAgICBjb25zdCBmcmVxdWVuY3kgPSBkZXNjLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdUWVBFRkxVWCcpWzBdLmlubmVySFRNTFxuICAgICAgY29uc3QgdHlwZSA9IGRlc2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ05BVEZMVVgnKVswXS5pbm5lckhUTUxcbiAgICAgIGNvbnN0IGR0ID0gZGVzYy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnRFRDUkVBRkxVWCcpWzBdLmlubmVySFRNTFxuICAgICAgY29uc3QgdGltZSA9IGRlc2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ0hFVUNSRUFGTFVYJylbMF0uaW5uZXJIVE1MXG5cbiAgICAgIGNvbnN0IHByb2Nlc3NGaWVsZCA9IChhY2N1bSwgdmFsdWUpID0+IHtcbiAgICAgICAgICBpZiAodmFsdWVbMF0pIHtcbiAgICAgICAgICAgIGFjY3VtW3ZhbHVlWzBdLmlubmVySFRNTF0gPSAoYWNjdW1bdmFsdWVbMF0uaW5uZXJIVE1MXSB8fCAwKSArIDFcbiAgICAgICAgICAgIGFjY3VtW1wiVG90YWxcIl0gPSAoYWNjdW1bXCJUb3RhbFwiXSB8fCAwKSArIDFcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGFjY3VtXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGZvbGRlcnMgPSBuZXcgQXJyYXkoLi4uZG9tLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdJbmZvc0ZveWVyUlNBJykpXG4gICAgICBjb25zdCBwZW9wbGUgPSBuZXcgQXJyYXkoLi4uZG9tLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdQZXJzb25uZScpKVxuXG4gICAgICBjb25zdCBkYXRlcyA9IGZvbGRlcnNcbiAgICAgICAgLm1hcChpID0+IGkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ0RUREVNUlNBJylbMF0uaW5uZXJIVE1MKVxuICAgICAgICAucmVkdWNlKChhY2N1bSwgdmFsdWUpID0+IHtcbiAgICAgICAgICBhY2N1bVt2YWx1ZV0gPSAoYWNjdW1bdmFsdWVdIHx8IDAgKSArIDFcbiAgICAgICAgICByZXR1cm4gYWNjdW1cbiAgICAgICAgfSwge30pXG5cbiAgICAgIGNvbnN0IGRyb2l0cyA9IGZvbGRlcnNcbiAgICAgICAgLm1hcChpID0+IGkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ0VUQVRET1NSU0EnKSlcbiAgICAgICAgLnJlZHVjZShwcm9jZXNzRmllbGQsIHt9KVxuICAgICAgbGV0IG5ld0tleXNEcm9pdHMgPSBrZXlzRHJvaXRzLmNvbmNhdChPYmplY3Qua2V5cyhkcm9pdHMpKTtcbiAgICAgIG5ld0tleXNEcm9pdHMgPSBBcnJheS5mcm9tKG5ldyBTZXQobmV3S2V5c0Ryb2l0cykpXG4gICAgICBzZXRLZXlzRHJvaXRzKG5ld0tleXNEcm9pdHMpXG5cbiAgICAgIGNvbnN0IGRldm9pcnMgPSBwZW9wbGVcbiAgICAgICAgLm1hcChpID0+IGkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ1RPUFBFUlNEUk9ERVZPUlNBJykpXG4gICAgICAgIC5yZWR1Y2UocHJvY2Vzc0ZpZWxkLCB7fSlcbiAgICAgIGNvbnN0IG5ld0tleXNEZXZvaXJzID0ga2V5c0Rldm9pcnMuY29uY2F0KE9iamVjdC5rZXlzKGRldm9pcnMpKTtcbiAgICAgIHNldEtleXNEZXZvaXJzKEFycmF5LmZyb20obmV3IFNldChuZXdLZXlzRGV2b2lycykpKVxuXG4gICAgICBjb25zdCBmb2xkZXJzRHJvaXRzT3V2ZXJ0cyA9IGZvbGRlcnNcbiAgICAgICAgLmZpbHRlcihpID0+IGkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ0VUQVRET1NSU0EnKVswXS5pbm5lckhUTUwgPT0gXCIyXCIpXG4gICAgICAgIC5tYXAoaSA9PiB7XG4gICAgICAgICAgbGV0IGl0ZW1zID0gaS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnUGVyc29ubmUnKVxuICAgICAgICAgIHJldHVybiBbLi4uaXRlbXNdXG4gICAgICAgIH0pXG4gICAgICAgIC5mbGF0KClcblxuICAgICAgY29uc3QgZHJvaXRzRXREZXZvaXJzID0gZm9sZGVyc0Ryb2l0c091dmVydHNcbiAgICAgICAgLm1hcChpID0+IGkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ1RPUFBFUlNEUk9ERVZPUlNBJykpXG4gICAgICAgIC5yZWR1Y2UocHJvY2Vzc0ZpZWxkLCB7fSlcblxuICAgICAgc2V0SXNQZW5kaW5nKGZhbHNlKTtcblxuICAgICAgZGlzcGF0Y2hSdW5zKHtcbiAgICAgICAgdHlwZTogJ2FwcGVuZCcsXG4gICAgICAgIGl0ZW06IHtcbiAgICAgICAgICBzZWVkOiBNYXRoLnJhbmRvbSgpLFxuICAgICAgICAgIHRpbWVzdGFtcDogKG5ldyBEYXRlKCkpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTkpLFxuICAgICAgICAgIGR1cmF0aW9uOiAobmV3IERhdGUoKSkgLSBzdGFydF90aW1lLFxuICAgICAgICAgIGZpbGVuYW1lOiBmaWxlLm5hbWUsXG4gICAgICAgICAgZmlsZURhdGV0aW1lOiBgJHtkdH0tJHt0aW1lfWAsXG4gICAgICAgICAgZnJlcXVlbmN5LFxuICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgLy8gV0lQOiBPSyBzdXIgRmlyZWZveCBLTyBzdXIgQ2hyb21lXG4gICAgICAgICAgZXJyb3I6IGRvbS5hY3RpdmVFbGVtZW50ICYmIGRvbS5hY3RpdmVFbGVtZW50Lm5vZGVOYW1lID09IFwicGFyc2VyZXJyb3JcIixcbiAgICAgICAgICB0b3RhbDogZm9sZGVycy5sZW5ndGgsXG4gICAgICAgICAgZmlsZVNpemU6IGZpbGUuc2l6ZSxcbiAgICAgICAgICBwZW9wbGU6IHBlb3BsZS5sZW5ndGgsXG4gICAgICAgICAgZGF0ZXMsXG4gICAgICAgICAgZGV2b2lycyxcbiAgICAgICAgICBkcm9pdHMsXG4gICAgICAgICAgZHJvaXRzRXREZXZvaXJzXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIHJlYWRlci5yZWFkQXNUZXh0KGZpbGUpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxBZG1pbiBjYXRlZ29yeT1cIkLDqW7DqWZpY2lhaXJlXCIgb25SdW5SZWZyZXNoPXtoYW5kbGVOZXdSdW5zfS8+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cbiAgICAgICAgICBMZWN0ZXVyIGRlIGZpY2hpZXI8YnIvPsKrIELDqW7DqWZpY2lhaXJlIMK7IGRlIGxhIENOQUZcbiAgICAgICAgPC9oMT5cblxuICAgICAgICA8RmlsZUhhbmRsZXIgZmlsZUhhbmRsZXI9e2ZpbGVIYW5kbGVyfSBpc1BlbmRpbmc9e2lzUGVuZGluZ30gZmlsZVNpemU9e2ZpbGVTaXplfSAvPlxuXG4gICAgICAgIHsgcnVucyAmJiBydW5zLmxlbmd0aCA+IDAgJiYgKDw+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnN1YnRpdGxlfT5cbiAgICAgICAgICAgIFN0YXRpc3RpcXVlcyBkcm9pdHMgJiBkZXZvaXJzXG4gICAgICAgICAgPC9oMj5cblxuICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9e3N0eWxlcy5tYXJnaW5fc2lkZX0+XG4gICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj48L3RoPlxuICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPkRvc3NpZXJzIChGb3llcnMpPC90aD5cbiAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5QZXJzb25uZXM8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBjb2xTcGFuPXtrZXlzRHJvaXRzLmxlbmd0aH0+VmFsZXVycyBiYWxpc2VzIEVUQVRET1NSU0E8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBjb2xTcGFuPXtrZXlzRGV2b2lycy5sZW5ndGh9PlZhbGV1cnMgYmFsaXNlcyBUT1BQRVJTRFJPREVWT1JTQTwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+UGVyc29ubmVzIHNvdW1pc2VzIGRyb2l0cyBldCBkZXZvaXJzIGRhbnMgZm95ZXIgZHJvaXQgb3V2ZXJ0IGV0IHZlcnNhYmxlPC90aD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIHtrZXlzRHJvaXRzLm1hcChrID0+IDx0aCBrZXk9e2t9IGNvbFNwYW49XCIxXCI+e2t9PC90aD4pfVxuICAgICAgICAgICAgICAgIHtrZXlzRGV2b2lycy5tYXAoayA9PiA8dGgga2V5PXtrfSBjb2xTcGFuPVwiMVwiPntrfTwvdGg+KX1cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgIHtydW5zLm1hcCgociwgaSkgPT4gKDx0ciBrZXk9e2Ake3IudGltZXN0YW1wfS0ke3IuZmlsZW5hbWV9LSR7ci5zZWVkfS0wYCB9IHN0eWxlPXsgaSA9PSBkYXRlRGF0YS5pbmRleCA/IHtiYWNrZ3JvdW5kQ29sb3I6ICdsaWdodGdyZXknfToge30gfT5cbiAgICAgICAgICAgICAgICA8dGQ+e3J1bnMubGVuZ3RoIC0gaX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9PntyLnRvdGFsfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+e3IucGVvcGxlfTwvdGQ+XG4gICAgICAgICAgICAgICAge2tleXNEcm9pdHMubWFwKGsgPT4gPHRkIGtleT17a30gY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT57ci5kcm9pdHNba10gfHwgMH08L3RkPil9XG4gICAgICAgICAgICAgICAge2tleXNEZXZvaXJzLm1hcChrID0+IDx0ZCBrZXk9e2t9IGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+e3IuZGV2b2lyc1trXSB8fCAwfTwvdGQ+KX1cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT57ci5kcm9pdHNFdERldm9pcnNbMV0gfHwgMH08L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgKSl9XG5cbiAgICAgICAgICAgICAgPHRyPlxuXG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgIDwvdGFibGU+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxlZ2VuZGV9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sZWdlbmRlX2JveH0+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmxlZ2VuZGVfdGl0bGV9PkzDqWdlbmRlJm5ic3A7OjwvcD5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuYm9sZH0+VmFsZXVyIGJhbGlzZSBFVEFURE9TUlNBPC9wPlxuICAgICAgICAgICAgICA8cD4wPU5vdXZlbGxlIGRlbWFuZGUgZW4gYXR0ZW50ZSBkZSBkw6ljaXNpb24gQ0cgcG91ciBvdXZlcnR1cmUgZHUgZHJvaXQ8YnIvPlxuICAgICAgICAgICAgICAxPURyb2l0IHJlZnVzw6k8YnIvPlxuICAgICAgICAgICAgICAyPURyb2l0IG91dmVydCBldCB2ZXJzYWJsZTxici8+XG4gICAgICAgICAgICAgIDM9RHJvaXQgb3V2ZXJ0IGV0IHN1c3BlbmR1IChsZSBtb250YW50IGR1IGRyb2l0IGVzdCBjYWxjdWxhYmxlLCBtYWlzIGwnZXhpc3RlbmNlIGR1IGRyb2l0IGVzdCByZW1pcyBlbiBjYXVzZSk8YnIvPlxuICAgICAgICAgICAgICA0PURyb2l0IG91dmVydCBtYWlzIHZlcnNlbWVudCBzdXNwZW5kdSAobGUgbW9udGFudCBkdSBkcm9pdCBuJ2VzdCBwYXMgY2FsY3VsYWJsZSk8YnIvPlxuICAgICAgICAgICAgICA1PURyb2l0IGNsb3M8YnIvPlxuICAgICAgICAgICAgICA2PURyb2l0IGNsb3Mgc3VyIG1vaXMgYW50w6lyaWV1ciBheWFudCBldSB1biBjb250csO0bGUgZGFucyBsZSBtb2lzIGRlIHLDqWbDqXJlbmNlIHBvdXIgdW5lIHDDqXJpb2RlIGFudMOpcmlldXJlLjwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sZWdlbmRlX2JveH0+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmJvbGR9PlZhbGV1ciBiYWxpc2UgVE9QUEVSU0RST0RFVk9SU0E8L3A+XG4gICAgICAgICAgICAgIDxwPjA9UGVyc29ubmUgcGFzIHNvdW1pc2Ugw6AgZHJvaXRzIGV0IGRldm9pcnM8YnIgLz5cbiAgICAgICAgICAgICAgMT1QZXJzb25uZSBzb3VtaXNlIMOgIGRyb2l0cyBldCBkZXZvaXJzPC9wPlxuICAgICAgICAgICAgICA8cD4mbmJzcDs8L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmJvbGR9PlBlcnNvbm5lcyBzb3VtaXNlcyBkcm9pdHMgZXQgZGV2b2lycyBkYW5zIGZveWVyIGRyb2l0IG91dmVydCBldCB2ZXJzYWJsZTwvcD5cbiAgICAgICAgICAgICAgPHA+Tm9tYnJlIGRlIHBlcnNvbm5lcyBkb250IGxhIGJhbGlzZSBUT1BQRVJTRFJPREVWT1JTQT0xIHByw6lzZW50cyBkYW5zIGRlcyBmb3llcnMgZG9udCBsYSBiYWxpc2UgRVRBVERPU1JTQT0yPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuc3VidGl0bGV9PlxuICAgICAgICAgICAgSGlzdG9yaXF1ZVxuICAgICAgICAgIDwvaDI+XG5cbiAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPXtzdHlsZXMubWFyZ2luX3NpZGV9PlxuICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+PC90aD5cbiAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5GaWNoaWVyPC90aD5cbiAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5EYXRlPC90aD5cbiAgICAgICAgICAgICAgICB7IGRldk1vZGUgJiYgPHRoIHJvd1NwYW49XCIyXCI+VGFpbGxlPC90aD59XG4gICAgICAgICAgICAgICAgeyBkZXZNb2RlICYmIDx0aCByb3dTcGFuPVwiMlwiPkR1csOpZTxici8+KGVuIHMpPC90aD59XG4gICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+RGF0ZSBkdSBmaWNoaWVyPC90aD5cbiAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5GcsOpcXVlbmNlPC90aD5cbiAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5OYXR1cmU8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPkRvc3NpZXJzPC90aD5cbiAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5Ew6l0YWlsczwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+RXJyZXVyPC90aD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAge3J1bnMubWFwKChyLCBpKSA9PiAoPHRyIGtleT17YCR7ci50aW1lc3RhbXB9LSR7ci5maWxlbmFtZX0tJHtyLnNlZWR9YCB9IHN0eWxlPXsgaSA9PSBkYXRlRGF0YS5pbmRleCA/IHtiYWNrZ3JvdW5kQ29sb3I6ICdsaWdodGdyZXknfToge30gfT5cbiAgICAgICAgICAgICAgICA8dGQ+e3J1bnMubGVuZ3RoIC0gaX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57ci5maWxlbmFtZX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57ci50aW1lc3RhbXB9PC90ZD5cbiAgICAgICAgICAgICAgICB7IGRldk1vZGUgJiYgPHRkPntyLmZpbGVTaXplfTwvdGQ+fVxuICAgICAgICAgICAgICAgIHsgZGV2TW9kZSAmJiA8dGQ+eyFpc05hTihyLmR1cmF0aW9uKSA/IHIuZHVyYXRpb24vMTAwMCA6IFwiI04vQVwifTwvdGQ+fVxuICAgICAgICAgICAgICAgIDx0ZD57ci5maWxlRGF0ZXRpbWV9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e2Ake3IuZnJlcXVlbmN5fSAoJHtmcmVxdWVuY3lOYW1lc1tyLmZyZXF1ZW5jeV0gfHwgJz8nfSlgfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPntgJHtyLnR5cGV9ICgke3R5cGVOYW1lc1tyLnR5cGVdIHx8ICc/J30pYH08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5udW1lcmljfT57ci50b3RhbH08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJzaHJpbmtcIj48YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZURhdGVIaXN0b2dyYW19IGRhdGEtaW5kZXg9e2l9PkFmZmljaGVyIHBhciBkYXRlPC9idXR0b24+PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e3IuZXJyb3IgPyAnT3VpJyA6ICdOb24nfTwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgPC90YWJsZT5cblxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZGlzcGF0Y2hSdW5zKHt0eXBlOiAncmVzZXQnfSl9IGNsYXNzTmFtZT17c3R5bGVzLm1hcmdpbl9ib3R0b219PlZpZGVyIGwnaGlzdG9yaXF1ZTwvYnV0dG9uPlxuICAgICAgICA8Lz4pfVxuXG4gICAgICAgIHtydW5zLmxlbmd0aCAhPSAwICYmICg8cCBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5cbiAgICAgICAgVm91cyBwb3V2ZXogYWNjw6lkZXIgw6AgdW5lIHJlcHLDqXNlbnRhdGlvbiBncmFwaGlxdWUgZGUgbGEgcsOpcGFydGl0aW9uIGRhbnMgbGVzIHRlbXBzIGRlcyBkZW1hbmRlcyBjb25udWVzIGRhbnMgbGVzIGZpY2hpZXJzIGFuYWx5c8Opcy4gUG91ciBjZWxhIGlsIGZhdXQgY2xpcXVlciBzdXIgbGUgYm91dG9uIMKrIEFmZmljaGVyIHBhciBkYXRlIMK7LlxuICAgICAgICAgIDwvcD4pfVxuXG4gICAgICAgIHtkYXRlRGF0YS5pbmRleCAhPSB1bmRlZmluZWQgJiYgKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuc3VidGl0bGV9PlxuICAgICAgICAgICAgICBOb21icmUgZGUgZG9zc2llcnMgYXNzb2Npw6lzIMOgIGRlcyBkZW1hbmRlcyByw6lhbGlzw6lzIMOgIGNoYXF1ZSBkYXRlXG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDogKDI1MCpkYXRlRGF0YS55ZWFyQ291bnQpICsgXCJweFwiLCB3aWR0aDogXCIxMDAlXCJ9fT5cbiAgICAgICAgICAgICAge1Jlc3BvbnNpdmVDYWxlbmRhcihkYXRlRGF0YSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cblxuICAgICAgICA8Rm9vdGVyXG4gICAgICAgICAgc3ViamVjdD1cIkZsdXggYsOpbsOpZmljaWFpcmUgQ05BRlwiXG4gICAgICAgICAgcG91cnF1b2k9XCJQb3VycXVvaSB1biBsZWN0ZXVyIGRlIGZpY2hpZXIgQ05BRiZuYnNwOz9cIlxuICAgICAgICAgIHRleHQ9ezw+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5Ub3VzIGxlcyBkw6lwYXJ0ZW1lbnRzIG4nb250IHBhcyBsZXMgb3V0aWxzIHBvdXIgYW5hbHlzZXIgbGVzIGZpY2hpZXJzIGVudm95w6lzIHBhciBsYSBDTkFGLiBDZWxhIHBldXQgcmFsZW50aXIgZXQgY29tcGxpcXVlciBub3Mgw6ljaGFuZ2VzLjwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRleHR9PkF2ZWMgY2V0IG91dGlsLCBub3VzIHNvdWhhaXRvbnMgcGVybWV0dHJlIGF1eCBwZXJzb25uZXMgcXVpIG9udCBhY2PDqHMgw6AgY2VzIGZpY2hpZXJzIGQnZW4gZXh0cmFpcmUgZGVzIHN0YXRpc3RpcXVlcyBnw6luw6lyYWxlcyBzYW5zIGF2b2lyIMOgIG1ldHRyZSBsZXMgbWFpbnMgZGFucyBsZSBjYW1ib3VpIGVsbGVzLW3Dqm1lLjwvcD5cbiAgICAgICAgICA8Lz59XG4gICAgICAgIC8+XG4gICAgICA8L21haW4+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=