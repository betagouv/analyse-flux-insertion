webpackHotUpdate_N_E("pages/experimentations/ardennes",{

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
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/layout */ "./components/layout.js");
/* harmony import */ var _components_fileHandler__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/fileHandler */ "./components/fileHandler.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/footer */ "./components/footer.js");
/* harmony import */ var _components_loginForm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/loginForm */ "./components/loginForm.js");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _lib_appFetch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../lib/appFetch */ "./lib/appFetch.js");
/* harmony import */ var _lib_reducerFactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../lib/reducerFactory */ "./lib/reducerFactory.js");
/* harmony import */ var _lib_dates__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../lib/dates */ "./lib/dates.js");







var _jsxFileName = "/home/q/code/qblanc/beta.gouv/analyse-flux-insertion/pages/experimentations/ardennes/index.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }












var reducer = Object(_lib_reducerFactory__WEBPACK_IMPORTED_MODULE_14__["reducerFactory"])("Expérimentation Ardennes - CNAF - Bénéficiaire");
function Ardennes() {
  _s();

  var _this = this;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  var isDemo = router.pathname.includes("demo");
  var devMode = true;
  var orgaID = isDemo ? "1" : "1";
  var RDV_SOLIDARITES_URL = isDemo ? "http://localhost:5000" : "http://localhost:5000";
  var userUrl = RDV_SOLIDARITES_URL + "/api/v1/users";

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(null),
      devFile = _useState[0],
      setDevFile = _useState[1];

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_5__["useReducer"])(reducer, [], _lib_reducerFactory__WEBPACK_IMPORTED_MODULE_14__["initReducer"]),
      runs = _useReducer[0],
      dispatchRuns = _useReducer[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(null),
      usersData = _useState2[0],
      setUsersData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      userStatusChecked = _useState3[0],
      setUserStatusChecked = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(0),
      fileSize = _useState4[0],
      setFileSize = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      isLogged = _useState5[0],
      setIsLogged = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({
    tokenId: "",
    uid: "",
    client: ""
  }),
      token = _useState6[0],
      setToken = _useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    if (devFile) {
      handleFile(devFile);
    }
  }, [devFile]);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    if (usersData && userStatusChecked === false) {
      usersData.forEach(function (user, userIndex) {
        if (user["ID RDV"] != "") {
          checkUserInvitationStatus(user["ID RDV"], userIndex);
        }
      });
      setUserStatusChecked(true);
    }
  }, [usersData]);

  var writeFile = function writeFile() {
    var outWorkbook = xlsx__WEBPACK_IMPORTED_MODULE_7__["utils"].book_new();
    var outWorksheet = xlsx__WEBPACK_IMPORTED_MODULE_7__["utils"].json_to_sheet(usersData);
    xlsx__WEBPACK_IMPORTED_MODULE_7__["utils"].book_append_sheet(outWorkbook, outWorksheet, "DIVERGENCES"); // XLSX.utils.book_append_sheet(outWorkbook, xls.Sheets[xls.SheetNames[1]], "GRAPHIQUE");
    // XLSX.utils.book_append_sheet(outWorkbook, xls.Sheets[xls.SheetNames[2]], "Selection COA");

    xlsx__WEBPACK_IMPORTED_MODULE_7__["writeFile"](outWorkbook, "ardennes_rsa_".concat(Object(_lib_dates__WEBPACK_IMPORTED_MODULE_15__["getDateTimeString"])(new Date()), ".xlsx"));
  };

  function generateInvitationUrl(_x, _x2) {
    return _generateInvitationUrl.apply(this, arguments);
  }

  function _generateInvitationUrl() {
    _generateInvitationUrl = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(userId, userIndex) {
      var invitationUrl, result, newUsersData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              invitationUrl = userUrl + "/".concat(userId, "/invite");
              _context2.next = 3;
              return Object(_lib_appFetch__WEBPACK_IMPORTED_MODULE_13__["appFetch"])(invitationUrl, token);

            case 3:
              result = _context2.sent;

              if (result.invitation_url) {
                newUsersData = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(usersData);
                newUsersData[userIndex]["Invitation"] = result.invitation_url;
                newUsersData[userIndex]["Date d'invitation"] = Object(_lib_dates__WEBPACK_IMPORTED_MODULE_15__["getFrenchFormatDateString"])(new Date());
                setUsersData(newUsersData);
              }

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _generateInvitationUrl.apply(this, arguments);
  }

  function getUser(_x3, _x4) {
    return _getUser.apply(this, arguments);
  }

  function _getUser() {
    _getUser = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(userId, token) {
      var getUserUrl;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              getUserUrl = userUrl + "/".concat(userId);
              _context3.next = 3;
              return Object(_lib_appFetch__WEBPACK_IMPORTED_MODULE_13__["appFetch"])(getUserUrl, token);

            case 3:
              return _context3.abrupt("return", _context3.sent);

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _getUser.apply(this, arguments);
  }

  function checkUserInvitationStatus(_x5, _x6) {
    return _checkUserInvitationStatus.apply(this, arguments);
  }

  function _checkUserInvitationStatus() {
    _checkUserInvitationStatus = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4(userId, userIndex) {
      var result, newUsersData, invitation_date, inscription_date;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return getUser(userId, token);

            case 2:
              result = _context4.sent;
              newUsersData = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(usersData);

              if (result.user.invitation_created_at) {
                invitation_date = result.user.invitation_created_at // Date au format : 2021-04-15 14:53:56 +0200
                .substring(0, 10); // Récupérer les 10 premiers chiffres (la date)

                invitation_date = new Date(invitation_date); // Créer une date JS

                newUsersData[userIndex]["Date d'invitation"] = Object(_lib_dates__WEBPACK_IMPORTED_MODULE_15__["getFrenchFormatDateString"])(invitation_date);
              }

              if (result.user.invitation_accepted_at) {
                inscription_date = result.user.invitation_accepted_at // Date au format : 2021-04-15 14:53:56 +0200
                .substring(0, 10); // Récupérer les 10 premiers chiffres (la date)

                inscription_date = new Date(inscription_date); // Créer une date JS

                newUsersData[userIndex]["Date d'inscription"] = Object(_lib_dates__WEBPACK_IMPORTED_MODULE_15__["getFrenchFormatDateString"])(inscription_date);
              }

              setUsersData(newUsersData);

            case 7:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));
    return _checkUserInvitationStatus.apply(this, arguments);
  }

  function createUser(_x7, _x8) {
    return _createUser.apply(this, arguments);
  }

  function _createUser() {
    _createUser = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5(userData, userIndex) {
      var address, user, result, newUsersData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              address = userData["ADRESSE"] + " - " + userData["CODE POSTAL"] + " " + userData["VILLE"];
              user = {
                first_name: userData["PRENOM"],
                last_name: userData["NOM"],
                email: userData["MAIL"],
                phone_number: userData["TELEPHONE"].replace(/\s+/g, ""),
                birth_date: Object(_lib_dates__WEBPACK_IMPORTED_MODULE_15__["stringToDate"])(userData["DATE DE NAISSANCE"]),
                address: address,
                caisse_affiliation: "caf",
                affiliation_number: userData["N°CAF"],
                organisation_ids: [orgaID]
              };
              _context5.next = 4;
              return Object(_lib_appFetch__WEBPACK_IMPORTED_MODULE_13__["appFetch"])(userUrl, token, "POST", JSON.stringify(user));

            case 4:
              result = _context5.sent;
              newUsersData = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(usersData);

              if (result.user) {
                newUsersData[userIndex]["ID RDV"] = result.user.id;
                setUsersData(newUsersData);
                generateInvitationUrl(result.user.id, userIndex);
              } else if (result.errors && result.errors.email && result.errors.email[0].error === "taken") {
                newUsersData[userIndex]["ID RDV"] = result.errors.email[0].id;
                setUsersData(newUsersData);
                checkUserInvitationStatus(result.errors.email[0].id, userIndex);
                alert("Un compte associé à cet email existe déjà");
              } else if (result.errors && result.errors.email && result.errors.email[0].error === "invalid") {
                alert("L'adresse mail n'est pas valide");
              } else if (result.errors && result.errors.first_name && result.errors.first_name[0].error === "déjà utilisé") {
                alert("La création du compte a échoué. L'utilisateur semble exister mais n'a pu être récupéré.");
              } else if (result.errors && result.errors[0] && result.errors[0].base === "forbidden") {
                alert("Votre compte agent RDV-Solidarités ne vous permet pas d'effectuer cette action.");
              } else if (result.errors && result.errors[0]) {
                alert(result.errors[0]);
              }

            case 7:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));
    return _createUser.apply(this, arguments);
  }

  var handleLogin = function handleLogin(tokenId, uid, client) {
    setToken(_objectSpread(_objectSpread({}, token), {}, {
      tokenId: tokenId,
      uid: uid,
      client: client
    }));
    setIsLogged(true);
  };

  var handleFile = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(file) {
      var start_time;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (devMode && file != devFile) {
                setDevFile(file);
              }

              setFileSize(file.size);
              start_time = new Date();
              _context.next = 5;
              return new Promise(function (resolve) {
                var reader = new FileReader();

                reader.onload = function (event) {
                  var fileData = new Uint8Array(event.target.result);
                  var xls = xlsx__WEBPACK_IMPORTED_MODULE_7__["read"](fileData, {
                    type: "array",
                    cellDates: true,
                    dateNF: "dd/mm/yyyy"
                  });
                  var worksheet = xls.Sheets[xls.SheetNames[0]]; // Limiter la capture aux colonnes A-V

                  var range = xlsx__WEBPACK_IMPORTED_MODULE_7__["utils"].decode_range(worksheet["!ref"]);
                  range.s.c = 0; // 0 == XLSX.utils.decode_col("A")

                  range.e.c = 24; // 24 == XLSX.utils.decode_col("Y")

                  var new_range = xlsx__WEBPACK_IMPORTED_MODULE_7__["utils"].encode_range(range);
                  var jsonData = xlsx__WEBPACK_IMPORTED_MODULE_7__["utils"].sheet_to_json(worksheet, {
                    blankrows: false,
                    raw: false,
                    defval: "",
                    range: new_range
                  }); // we remove line breaks from all keys

                  jsonData = jsonData.map(function (userData) {
                    return Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(Object.keys(userData)).reduce(function (res, key) {
                      res[key.replace(/[\n\r]+/g, " ")] = userData[key];
                      return res;
                    }, {});
                  });
                  jsonData == null && setIsPending(false);
                  setUserStatusChecked(false);
                  setUsersData(jsonData);
                  dispatchRuns({
                    type: "append",
                    item: {
                      timestamp: new Date().toISOString().slice(0, 19),
                      duration: new Date() - start_time,
                      filename: file.name,
                      fileSize: file.size,
                      fileLines: jsonData.length
                    }
                  });
                  resolve();
                };

                reader.readAsArrayBuffer(file);
              });

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleFile(_x9) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.container,
    handleFile: handleFile,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.main,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.title,
        children: "Exp\xE9rimentation Ardennes"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 9
      }, this), !isLogged && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.create,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_loginForm__WEBPACK_IMPORTED_MODULE_11__["default"], {
          handleLogin: handleLogin,
          rdvUrl: RDV_SOLIDARITES_URL
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 11
      }, this), isLogged && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_fileHandler__WEBPACK_IMPORTED_MODULE_9__["default"], {
          handleFile: handleFile,
          fileSize: fileSize,
          pendingMessage: "Récupération des informations, merci de patienter"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 219,
          columnNumber: 13
        }, this), usersData && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.subtitle,
            children: "B\xE9n\xE9ficiaires RSA"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 227,
            columnNumber: 17
          }, this), usersData.length == 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.description,
            children: "Aucun b\xE9n\xE9ficiaire dans le fichier"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 230,
            columnNumber: 19
          }, this), usersData.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    rowSpan: "2",
                    children: "Date"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 238,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    rowSpan: "2",
                    children: "Nom"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 239,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    rowSpan: "2",
                    children: "Pr\xE9nom"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 240,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    rowSpan: "2",
                    children: "Mail"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 241,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    rowSpan: "2",
                    children: "T\xE9l\xE9phone"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 242,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    rowSpan: "2",
                    children: "ID RDV-Solidarit\xE9s"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 243,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    colSpan: "3",
                    children: "Invitation"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 244,
                    columnNumber: 27
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 237,
                  columnNumber: 25
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    colSpan: "1",
                    children: "Dernier envoi le"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 247,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    colSpan: "1",
                    children: "Date d'inscription"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 248,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    colSpan: "1",
                    children: "Action"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 249,
                    columnNumber: 27
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 246,
                  columnNumber: 25
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 236,
                columnNumber: 23
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
                children: Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(usersData).reverse().map(function (user, index) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
                    children: user["DATE"] !== "" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center,
                        children: user["DATE"]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 258,
                        columnNumber: 33
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center,
                        children: user["NOM"]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 259,
                        columnNumber: 33
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center,
                        children: user["PRENOM"]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 260,
                        columnNumber: 33
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center,
                        children: user["MAIL"]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 261,
                        columnNumber: 33
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center,
                        children: user["TELEPHONE"]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 262,
                        columnNumber: 33
                      }, _this), user["ID RDV"] === "" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center,
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                          onClick: function onClick() {
                            return createUser(user, index);
                          },
                          children: "Cr\xE9er un compte"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 266,
                          columnNumber: 37
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 265,
                        columnNumber: 35
                      }, _this), user["ID RDV"] !== "" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center,
                        children: user["ID RDV"]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 272,
                        columnNumber: 35
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center,
                        children: user["Date d'invitation"]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 274,
                        columnNumber: 33
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center,
                        children: user["Date d'inscription"]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 275,
                        columnNumber: 33
                      }, _this), user["ID RDV"] !== "" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center,
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                          onClick: function onClick() {
                            return generateInvitationUrl(user["ID RDV"], index);
                          },
                          children: [user["Date d'invitation"] !== "" && "Regénérer invitation", user["Date d'invitation"] === "" && "Générer invitation"]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 278,
                          columnNumber: 37
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 277,
                        columnNumber: 35
                      }, _this), user["ID RDV"] === "" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 286,
                        columnNumber: 59
                      }, _this)]
                    }, index, true, {
                      fileName: _jsxFileName,
                      lineNumber: 257,
                      columnNumber: 31
                    }, _this)
                  }, void 0, false);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 252,
                columnNumber: 23
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 235,
              columnNumber: 21
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.button,
              onClick: writeFile,
              children: "Reg\xE9n\xE9rer fichier"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 294,
              columnNumber: 21
            }, this)]
          }, void 0, true)]
        }, void 0, true)]
      }, void 0, true), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_footer__WEBPACK_IMPORTED_MODULE_10__["default"], {
        subject: "Exp\xE9rimentation Ardennes",
        pourquoi: "Quel est l'objectif de cette exp\xE9rimentation\xA0?",
        text: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.text,
            children: "Faciliter le travail des agents du d\xE9partement et tester l'utilisation de l'application RDV-Solidarit\xE9s pour acc\xE9l\xE9rer la prise du premier rendez-vous d'orientation."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 309,
            columnNumber: 15
          }, this)
        }, void 0, false)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 304,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 207,
    columnNumber: 5
  }, this);
}

_s(Ardennes, "elV9zkVqYzt2Pxn5gny0qSEwi+k=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"]];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXhwZXJpbWVudGF0aW9ucy9hcmRlbm5lcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJyZWR1Y2VyIiwicmVkdWNlckZhY3RvcnkiLCJBcmRlbm5lcyIsInJvdXRlciIsInVzZVJvdXRlciIsImlzRGVtbyIsInBhdGhuYW1lIiwiaW5jbHVkZXMiLCJkZXZNb2RlIiwib3JnYUlEIiwicHJvY2VzcyIsIlJEVl9TT0xJREFSSVRFU19VUkwiLCJ1c2VyVXJsIiwidXNlU3RhdGUiLCJkZXZGaWxlIiwic2V0RGV2RmlsZSIsInVzZVJlZHVjZXIiLCJpbml0UmVkdWNlciIsInJ1bnMiLCJkaXNwYXRjaFJ1bnMiLCJ1c2Vyc0RhdGEiLCJzZXRVc2Vyc0RhdGEiLCJ1c2VyU3RhdHVzQ2hlY2tlZCIsInNldFVzZXJTdGF0dXNDaGVja2VkIiwiZmlsZVNpemUiLCJzZXRGaWxlU2l6ZSIsImlzTG9nZ2VkIiwic2V0SXNMb2dnZWQiLCJ0b2tlbklkIiwidWlkIiwiY2xpZW50IiwidG9rZW4iLCJzZXRUb2tlbiIsInVzZUVmZmVjdCIsImhhbmRsZUZpbGUiLCJmb3JFYWNoIiwidXNlciIsInVzZXJJbmRleCIsImNoZWNrVXNlckludml0YXRpb25TdGF0dXMiLCJ3cml0ZUZpbGUiLCJvdXRXb3JrYm9vayIsIlhMU1giLCJib29rX25ldyIsIm91dFdvcmtzaGVldCIsImpzb25fdG9fc2hlZXQiLCJib29rX2FwcGVuZF9zaGVldCIsImdldERhdGVUaW1lU3RyaW5nIiwiRGF0ZSIsImdlbmVyYXRlSW52aXRhdGlvblVybCIsInVzZXJJZCIsImludml0YXRpb25VcmwiLCJhcHBGZXRjaCIsInJlc3VsdCIsImludml0YXRpb25fdXJsIiwibmV3VXNlcnNEYXRhIiwiZ2V0RnJlbmNoRm9ybWF0RGF0ZVN0cmluZyIsImdldFVzZXIiLCJnZXRVc2VyVXJsIiwiaW52aXRhdGlvbl9jcmVhdGVkX2F0IiwiaW52aXRhdGlvbl9kYXRlIiwic3Vic3RyaW5nIiwiaW52aXRhdGlvbl9hY2NlcHRlZF9hdCIsImluc2NyaXB0aW9uX2RhdGUiLCJjcmVhdGVVc2VyIiwidXNlckRhdGEiLCJhZGRyZXNzIiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsImVtYWlsIiwicGhvbmVfbnVtYmVyIiwicmVwbGFjZSIsImJpcnRoX2RhdGUiLCJzdHJpbmdUb0RhdGUiLCJjYWlzc2VfYWZmaWxpYXRpb24iLCJhZmZpbGlhdGlvbl9udW1iZXIiLCJvcmdhbmlzYXRpb25faWRzIiwiSlNPTiIsInN0cmluZ2lmeSIsImlkIiwiZXJyb3JzIiwiZXJyb3IiLCJhbGVydCIsImJhc2UiLCJoYW5kbGVMb2dpbiIsImZpbGUiLCJzaXplIiwic3RhcnRfdGltZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsImV2ZW50IiwiZmlsZURhdGEiLCJVaW50OEFycmF5IiwidGFyZ2V0IiwieGxzIiwidHlwZSIsImNlbGxEYXRlcyIsImRhdGVORiIsIndvcmtzaGVldCIsIlNoZWV0cyIsIlNoZWV0TmFtZXMiLCJyYW5nZSIsImRlY29kZV9yYW5nZSIsInMiLCJjIiwiZSIsIm5ld19yYW5nZSIsImVuY29kZV9yYW5nZSIsImpzb25EYXRhIiwic2hlZXRfdG9fanNvbiIsImJsYW5rcm93cyIsInJhdyIsImRlZnZhbCIsIm1hcCIsIk9iamVjdCIsImtleXMiLCJyZWR1Y2UiLCJyZXMiLCJrZXkiLCJzZXRJc1BlbmRpbmciLCJpdGVtIiwidGltZXN0YW1wIiwidG9JU09TdHJpbmciLCJzbGljZSIsImR1cmF0aW9uIiwiZmlsZW5hbWUiLCJuYW1lIiwiZmlsZUxpbmVzIiwibGVuZ3RoIiwicmVhZEFzQXJyYXlCdWZmZXIiLCJzdHlsZXMiLCJjb250YWluZXIiLCJtYWluIiwidGl0bGUiLCJjcmVhdGUiLCJzdWJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicmV2ZXJzZSIsImluZGV4IiwiY2VudGVyIiwiYnV0dG9uIiwidGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7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QUFDLG1CQUFELENBQUosS0FBOEIsRUFBOUIsSUFBb0Msc0JBSHZDLEVBSUdBLElBQUksQ0FBQyxtQkFBRCxDQUFKLEtBQThCLEVBQTlCLElBQW9DLG9CQUp2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQXBCSixFQTZCR0EsSUFBSSxDQUFDLFFBQUQsQ0FBSixLQUFtQixFQUFuQixpQkFBeUI7QUFBSSxpQ0FBUyxFQUFFZ0csK0RBQU0sQ0FBQ1M7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkE3QjVCO0FBQUEsdUJBQVNELEtBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKLG1DQUQ0QjtBQUFBLGlCQUE3QjtBQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBakJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQTRERTtBQUFRLHVCQUFTLEVBQUVSLCtEQUFNLENBQUNVLE1BQTFCO0FBQWtDLHFCQUFPLEVBQUV2RyxTQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkE1REY7QUFBQSwwQkFSSjtBQUFBLHdCQVJKO0FBQUEsc0JBVkosZUFnR0UscUVBQUMsMkRBQUQ7QUFDRSxlQUFPLEVBQUMsNkJBRFY7QUFFRSxnQkFBUSxFQUFDLHNEQUZYO0FBR0UsWUFBSSxlQUNGO0FBQUEsaUNBQ0U7QUFBRyxxQkFBUyxFQUFFNkYsK0RBQU0sQ0FBQ1csSUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FoR0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBa0hEOztHQS9TdUI3SSxRO1VBQ1BFLHFEOzs7S0FET0YsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9leHBlcmltZW50YXRpb25zL2FyZGVubmVzLmFmYzZkZDMxM2NkNjBmMWVmMzY2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWR1Y2VyIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCAqIGFzIFhMU1ggZnJvbSBcInhsc3hcIjtcblxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9sYXlvdXRcIjtcbmltcG9ydCBGaWxlSGFuZGxlciBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9maWxlSGFuZGxlclwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9mb290ZXJcIjtcbmltcG9ydCBMb2dpbkZvcm0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvbG9naW5Gb3JtXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi8uLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5cbmltcG9ydCB7IGFwcEZldGNoIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9hcHBGZXRjaFwiO1xuaW1wb3J0IHsgaW5pdFJlZHVjZXIsIHJlZHVjZXJGYWN0b3J5IH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9yZWR1Y2VyRmFjdG9yeVwiO1xuaW1wb3J0IHsgZ2V0RGF0ZVRpbWVTdHJpbmcsIGdldEZyZW5jaEZvcm1hdERhdGVTdHJpbmcsIHN0cmluZ1RvRGF0ZSB9IGZyb20gXCIuLi8uLi8uLi9saWIvZGF0ZXNcIjtcblxuY29uc3QgcmVkdWNlciA9IHJlZHVjZXJGYWN0b3J5KFwiRXhww6lyaW1lbnRhdGlvbiBBcmRlbm5lcyAtIENOQUYgLSBCw6luw6lmaWNpYWlyZVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXJkZW5uZXMoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBpc0RlbW8gPSByb3V0ZXIucGF0aG5hbWUuaW5jbHVkZXMoXCJkZW1vXCIpO1xuICBjb25zdCBkZXZNb2RlID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT0gXCJkZXZlbG9wbWVudFwiO1xuICBjb25zdCBvcmdhSUQgPSBpc0RlbW9cbiAgICA/IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX09SR0FOSVNBVElPTl9JRF9ERU1PXG4gICAgOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19PUkdBTklTQVRJT05fSURfUFJPRDtcblxuICBjb25zdCBSRFZfU09MSURBUklURVNfVVJMID0gaXNEZW1vXG4gICAgPyBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19SRFZfU09MSURBUklURVNfREVNT19VUkxcbiAgICA6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1JEVl9TT0xJREFSSVRFU19QUk9EX1VSTDtcbiAgY29uc3QgdXNlclVybCA9IFJEVl9TT0xJREFSSVRFU19VUkwgKyBcIi9hcGkvdjEvdXNlcnNcIjtcblxuICBjb25zdCBbZGV2RmlsZSwgc2V0RGV2RmlsZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3J1bnMsIGRpc3BhdGNoUnVuc10gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIFtdLCBpbml0UmVkdWNlcik7XG4gIGNvbnN0IFt1c2Vyc0RhdGEsIHNldFVzZXJzRGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3VzZXJTdGF0dXNDaGVja2VkLCBzZXRVc2VyU3RhdHVzQ2hlY2tlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtmaWxlU2l6ZSwgc2V0RmlsZVNpemVdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtpc0xvZ2dlZCwgc2V0SXNMb2dnZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbdG9rZW4sIHNldFRva2VuXSA9IHVzZVN0YXRlKHtcbiAgICB0b2tlbklkOiBcIlwiLFxuICAgIHVpZDogXCJcIixcbiAgICBjbGllbnQ6IFwiXCIsXG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRldkZpbGUpIHtcbiAgICAgIGhhbmRsZUZpbGUoZGV2RmlsZSk7XG4gICAgfVxuICB9LCBbZGV2RmlsZV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHVzZXJzRGF0YSAmJiB1c2VyU3RhdHVzQ2hlY2tlZCA9PT0gZmFsc2UpIHtcbiAgICAgIHVzZXJzRGF0YS5mb3JFYWNoKCh1c2VyLCB1c2VySW5kZXgpID0+IHtcbiAgICAgICAgaWYgKHVzZXJbXCJJRCBSRFZcIl0gIT0gXCJcIikge1xuICAgICAgICAgIGNoZWNrVXNlckludml0YXRpb25TdGF0dXModXNlcltcIklEIFJEVlwiXSwgdXNlckluZGV4KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBzZXRVc2VyU3RhdHVzQ2hlY2tlZCh0cnVlKTtcbiAgICB9XG4gIH0sIFt1c2Vyc0RhdGFdKTtcblxuICBjb25zdCB3cml0ZUZpbGUgPSAoKSA9PiB7XG4gICAgY29uc3Qgb3V0V29ya2Jvb2sgPSBYTFNYLnV0aWxzLmJvb2tfbmV3KCk7XG4gICAgY29uc3Qgb3V0V29ya3NoZWV0ID0gWExTWC51dGlscy5qc29uX3RvX3NoZWV0KHVzZXJzRGF0YSk7XG4gICAgWExTWC51dGlscy5ib29rX2FwcGVuZF9zaGVldChvdXRXb3JrYm9vaywgb3V0V29ya3NoZWV0LCBcIkRJVkVSR0VOQ0VTXCIpO1xuICAgIC8vIFhMU1gudXRpbHMuYm9va19hcHBlbmRfc2hlZXQob3V0V29ya2Jvb2ssIHhscy5TaGVldHNbeGxzLlNoZWV0TmFtZXNbMV1dLCBcIkdSQVBISVFVRVwiKTtcbiAgICAvLyBYTFNYLnV0aWxzLmJvb2tfYXBwZW5kX3NoZWV0KG91dFdvcmtib29rLCB4bHMuU2hlZXRzW3hscy5TaGVldE5hbWVzWzJdXSwgXCJTZWxlY3Rpb24gQ09BXCIpO1xuICAgIFhMU1gud3JpdGVGaWxlKG91dFdvcmtib29rLCBgYXJkZW5uZXNfcnNhXyR7Z2V0RGF0ZVRpbWVTdHJpbmcobmV3IERhdGUoKSl9Lnhsc3hgKTtcbiAgfTtcblxuICBhc3luYyBmdW5jdGlvbiBnZW5lcmF0ZUludml0YXRpb25VcmwodXNlcklkLCB1c2VySW5kZXgpIHtcbiAgICBjb25zdCBpbnZpdGF0aW9uVXJsID0gdXNlclVybCArIGAvJHt1c2VySWR9L2ludml0ZWA7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXBwRmV0Y2goaW52aXRhdGlvblVybCwgdG9rZW4pO1xuXG4gICAgaWYgKHJlc3VsdC5pbnZpdGF0aW9uX3VybCkge1xuICAgICAgbGV0IG5ld1VzZXJzRGF0YSA9IFsuLi51c2Vyc0RhdGFdO1xuICAgICAgbmV3VXNlcnNEYXRhW3VzZXJJbmRleF1bXCJJbnZpdGF0aW9uXCJdID0gcmVzdWx0Lmludml0YXRpb25fdXJsO1xuICAgICAgbmV3VXNlcnNEYXRhW3VzZXJJbmRleF1bXCJEYXRlIGQnaW52aXRhdGlvblwiXSA9IGdldEZyZW5jaEZvcm1hdERhdGVTdHJpbmcobmV3IERhdGUoKSk7XG4gICAgICBzZXRVc2Vyc0RhdGEobmV3VXNlcnNEYXRhKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBnZXRVc2VyKHVzZXJJZCwgdG9rZW4pIHtcbiAgICBjb25zdCBnZXRVc2VyVXJsID0gdXNlclVybCArIGAvJHt1c2VySWR9YDtcbiAgICByZXR1cm4gYXdhaXQgYXBwRmV0Y2goZ2V0VXNlclVybCwgdG9rZW4pO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gY2hlY2tVc2VySW52aXRhdGlvblN0YXR1cyh1c2VySWQsIHVzZXJJbmRleCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFVzZXIodXNlcklkLCB0b2tlbik7XG5cbiAgICBsZXQgbmV3VXNlcnNEYXRhID0gWy4uLnVzZXJzRGF0YV07XG4gICAgaWYgKHJlc3VsdC51c2VyLmludml0YXRpb25fY3JlYXRlZF9hdCkge1xuICAgICAgbGV0IGludml0YXRpb25fZGF0ZSA9IHJlc3VsdC51c2VyLmludml0YXRpb25fY3JlYXRlZF9hdCAvLyBEYXRlIGF1IGZvcm1hdCA6IDIwMjEtMDQtMTUgMTQ6NTM6NTYgKzAyMDBcbiAgICAgICAgLnN1YnN0cmluZygwLCAxMCk7IC8vIFLDqWN1cMOpcmVyIGxlcyAxMCBwcmVtaWVycyBjaGlmZnJlcyAobGEgZGF0ZSlcbiAgICAgIGludml0YXRpb25fZGF0ZSA9IG5ldyBEYXRlKGludml0YXRpb25fZGF0ZSk7IC8vIENyw6llciB1bmUgZGF0ZSBKU1xuICAgICAgbmV3VXNlcnNEYXRhW3VzZXJJbmRleF1bXCJEYXRlIGQnaW52aXRhdGlvblwiXSA9IGdldEZyZW5jaEZvcm1hdERhdGVTdHJpbmcoaW52aXRhdGlvbl9kYXRlKTtcbiAgICB9XG4gICAgaWYgKHJlc3VsdC51c2VyLmludml0YXRpb25fYWNjZXB0ZWRfYXQpIHtcbiAgICAgIGxldCBpbnNjcmlwdGlvbl9kYXRlID0gcmVzdWx0LnVzZXIuaW52aXRhdGlvbl9hY2NlcHRlZF9hdCAvLyBEYXRlIGF1IGZvcm1hdCA6IDIwMjEtMDQtMTUgMTQ6NTM6NTYgKzAyMDBcbiAgICAgICAgLnN1YnN0cmluZygwLCAxMCk7IC8vIFLDqWN1cMOpcmVyIGxlcyAxMCBwcmVtaWVycyBjaGlmZnJlcyAobGEgZGF0ZSlcbiAgICAgIGluc2NyaXB0aW9uX2RhdGUgPSBuZXcgRGF0ZShpbnNjcmlwdGlvbl9kYXRlKTsgLy8gQ3LDqWVyIHVuZSBkYXRlIEpTXG4gICAgICBuZXdVc2Vyc0RhdGFbdXNlckluZGV4XVtcIkRhdGUgZCdpbnNjcmlwdGlvblwiXSA9IGdldEZyZW5jaEZvcm1hdERhdGVTdHJpbmcoaW5zY3JpcHRpb25fZGF0ZSk7XG4gICAgfVxuICAgIHNldFVzZXJzRGF0YShuZXdVc2Vyc0RhdGEpO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVXNlcih1c2VyRGF0YSwgdXNlckluZGV4KSB7XG4gICAgY29uc3QgYWRkcmVzcyA9IHVzZXJEYXRhW1wiQURSRVNTRVwiXSArIFwiIC0gXCIgKyB1c2VyRGF0YVtcIkNPREUgUE9TVEFMXCJdICsgXCIgXCIgKyB1c2VyRGF0YVtcIlZJTExFXCJdO1xuXG4gICAgY29uc3QgdXNlciA9IHtcbiAgICAgIGZpcnN0X25hbWU6IHVzZXJEYXRhW1wiUFJFTk9NXCJdLFxuICAgICAgbGFzdF9uYW1lOiB1c2VyRGF0YVtcIk5PTVwiXSxcbiAgICAgIGVtYWlsOiB1c2VyRGF0YVtcIk1BSUxcIl0sXG4gICAgICBwaG9uZV9udW1iZXI6IHVzZXJEYXRhW1wiVEVMRVBIT05FXCJdLnJlcGxhY2UoL1xccysvZywgXCJcIiksXG4gICAgICBiaXJ0aF9kYXRlOiBzdHJpbmdUb0RhdGUodXNlckRhdGFbXCJEQVRFIERFIE5BSVNTQU5DRVwiXSksXG4gICAgICBhZGRyZXNzOiBhZGRyZXNzLFxuICAgICAgY2Fpc3NlX2FmZmlsaWF0aW9uOiBcImNhZlwiLFxuICAgICAgYWZmaWxpYXRpb25fbnVtYmVyOiB1c2VyRGF0YVtcIk7CsENBRlwiXSxcbiAgICAgIG9yZ2FuaXNhdGlvbl9pZHM6IFtvcmdhSURdLFxuICAgIH07XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBhcHBGZXRjaCh1c2VyVXJsLCB0b2tlbiwgXCJQT1NUXCIsIEpTT04uc3RyaW5naWZ5KHVzZXIpKTtcblxuICAgIGxldCBuZXdVc2Vyc0RhdGEgPSBbLi4udXNlcnNEYXRhXTtcbiAgICBpZiAocmVzdWx0LnVzZXIpIHtcbiAgICAgIG5ld1VzZXJzRGF0YVt1c2VySW5kZXhdW1wiSUQgUkRWXCJdID0gcmVzdWx0LnVzZXIuaWQ7XG4gICAgICBzZXRVc2Vyc0RhdGEobmV3VXNlcnNEYXRhKTtcbiAgICAgIGdlbmVyYXRlSW52aXRhdGlvblVybChyZXN1bHQudXNlci5pZCwgdXNlckluZGV4KTtcbiAgICB9IGVsc2UgaWYgKHJlc3VsdC5lcnJvcnMgJiYgcmVzdWx0LmVycm9ycy5lbWFpbCAmJiByZXN1bHQuZXJyb3JzLmVtYWlsWzBdLmVycm9yID09PSBcInRha2VuXCIpIHtcbiAgICAgIG5ld1VzZXJzRGF0YVt1c2VySW5kZXhdW1wiSUQgUkRWXCJdID0gcmVzdWx0LmVycm9ycy5lbWFpbFswXS5pZDtcbiAgICAgIHNldFVzZXJzRGF0YShuZXdVc2Vyc0RhdGEpO1xuICAgICAgY2hlY2tVc2VySW52aXRhdGlvblN0YXR1cyhyZXN1bHQuZXJyb3JzLmVtYWlsWzBdLmlkLCB1c2VySW5kZXgpO1xuICAgICAgYWxlcnQoXCJVbiBjb21wdGUgYXNzb2Npw6kgw6AgY2V0IGVtYWlsIGV4aXN0ZSBkw6lqw6BcIik7XG4gICAgfSBlbHNlIGlmIChyZXN1bHQuZXJyb3JzICYmIHJlc3VsdC5lcnJvcnMuZW1haWwgJiYgcmVzdWx0LmVycm9ycy5lbWFpbFswXS5lcnJvciA9PT0gXCJpbnZhbGlkXCIpIHtcbiAgICAgIGFsZXJ0KFwiTCdhZHJlc3NlIG1haWwgbidlc3QgcGFzIHZhbGlkZVwiKTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgcmVzdWx0LmVycm9ycyAmJlxuICAgICAgcmVzdWx0LmVycm9ycy5maXJzdF9uYW1lICYmXG4gICAgICByZXN1bHQuZXJyb3JzLmZpcnN0X25hbWVbMF0uZXJyb3IgPT09IFwiZMOpasOgIHV0aWxpc8OpXCJcbiAgICApIHtcbiAgICAgIGFsZXJ0KFxuICAgICAgICBcIkxhIGNyw6lhdGlvbiBkdSBjb21wdGUgYSDDqWNob3XDqS4gTCd1dGlsaXNhdGV1ciBzZW1ibGUgZXhpc3RlciBtYWlzIG4nYSBwdSDDqnRyZSByw6ljdXDDqXLDqS5cIlxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKHJlc3VsdC5lcnJvcnMgJiYgcmVzdWx0LmVycm9yc1swXSAmJiByZXN1bHQuZXJyb3JzWzBdLmJhc2UgPT09IFwiZm9yYmlkZGVuXCIpIHtcbiAgICAgIGFsZXJ0KFwiVm90cmUgY29tcHRlIGFnZW50IFJEVi1Tb2xpZGFyaXTDqXMgbmUgdm91cyBwZXJtZXQgcGFzIGQnZWZmZWN0dWVyIGNldHRlIGFjdGlvbi5cIik7XG4gICAgfSBlbHNlIGlmIChyZXN1bHQuZXJyb3JzICYmIHJlc3VsdC5lcnJvcnNbMF0pIHtcbiAgICAgIGFsZXJ0KHJlc3VsdC5lcnJvcnNbMF0pO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUxvZ2luID0gKHRva2VuSWQsIHVpZCwgY2xpZW50KSA9PiB7XG4gICAgc2V0VG9rZW4oeyAuLi50b2tlbiwgdG9rZW5JZDogdG9rZW5JZCwgdWlkOiB1aWQsIGNsaWVudDogY2xpZW50IH0pO1xuICAgIHNldElzTG9nZ2VkKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUZpbGUgPSBhc3luYyBmaWxlID0+IHtcbiAgICBpZiAoZGV2TW9kZSAmJiBmaWxlICE9IGRldkZpbGUpIHtcbiAgICAgIHNldERldkZpbGUoZmlsZSk7XG4gICAgfVxuICAgIHNldEZpbGVTaXplKGZpbGUuc2l6ZSk7XG4gICAgY29uc3Qgc3RhcnRfdGltZSA9IG5ldyBEYXRlKCk7XG5cbiAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBjb25zdCBmaWxlRGF0YSA9IG5ldyBVaW50OEFycmF5KGV2ZW50LnRhcmdldC5yZXN1bHQpO1xuICAgICAgICBjb25zdCB4bHMgPSBYTFNYLnJlYWQoZmlsZURhdGEsIHsgdHlwZTogXCJhcnJheVwiLCBjZWxsRGF0ZXM6IHRydWUsIGRhdGVORjogXCJkZC9tbS95eXl5XCIgfSk7XG4gICAgICAgIGNvbnN0IHdvcmtzaGVldCA9IHhscy5TaGVldHNbeGxzLlNoZWV0TmFtZXNbMF1dO1xuICAgICAgICAvLyBMaW1pdGVyIGxhIGNhcHR1cmUgYXV4IGNvbG9ubmVzIEEtVlxuICAgICAgICBjb25zdCByYW5nZSA9IFhMU1gudXRpbHMuZGVjb2RlX3JhbmdlKHdvcmtzaGVldFtcIiFyZWZcIl0pO1xuICAgICAgICByYW5nZS5zLmMgPSAwOyAvLyAwID09IFhMU1gudXRpbHMuZGVjb2RlX2NvbChcIkFcIilcbiAgICAgICAgcmFuZ2UuZS5jID0gMjQ7IC8vIDI0ID09IFhMU1gudXRpbHMuZGVjb2RlX2NvbChcIllcIilcbiAgICAgICAgY29uc3QgbmV3X3JhbmdlID0gWExTWC51dGlscy5lbmNvZGVfcmFuZ2UocmFuZ2UpO1xuXG4gICAgICAgIGxldCBqc29uRGF0YSA9IFhMU1gudXRpbHMuc2hlZXRfdG9fanNvbih3b3Jrc2hlZXQsIHtcbiAgICAgICAgICBibGFua3Jvd3M6IGZhbHNlLFxuICAgICAgICAgIHJhdzogZmFsc2UsXG4gICAgICAgICAgZGVmdmFsOiBcIlwiLFxuICAgICAgICAgIHJhbmdlOiBuZXdfcmFuZ2UsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHdlIHJlbW92ZSBsaW5lIGJyZWFrcyBmcm9tIGFsbCBrZXlzXG4gICAgICAgIGpzb25EYXRhID0ganNvbkRhdGEubWFwKHVzZXJEYXRhID0+IHtcbiAgICAgICAgICByZXR1cm4gWy4uLk9iamVjdC5rZXlzKHVzZXJEYXRhKV0ucmVkdWNlKChyZXMsIGtleSkgPT4ge1xuICAgICAgICAgICAgcmVzW2tleS5yZXBsYWNlKC9bXFxuXFxyXSsvZywgXCIgXCIpXSA9IHVzZXJEYXRhW2tleV07XG4gICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICAgIH0sIHt9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAganNvbkRhdGEgPT0gbnVsbCAmJiBzZXRJc1BlbmRpbmcoZmFsc2UpO1xuICAgICAgICBzZXRVc2VyU3RhdHVzQ2hlY2tlZChmYWxzZSk7XG4gICAgICAgIHNldFVzZXJzRGF0YShqc29uRGF0YSk7XG4gICAgICAgIGRpc3BhdGNoUnVucyh7XG4gICAgICAgICAgdHlwZTogXCJhcHBlbmRcIixcbiAgICAgICAgICBpdGVtOiB7XG4gICAgICAgICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxOSksXG4gICAgICAgICAgICBkdXJhdGlvbjogbmV3IERhdGUoKSAtIHN0YXJ0X3RpbWUsXG4gICAgICAgICAgICBmaWxlbmFtZTogZmlsZS5uYW1lLFxuICAgICAgICAgICAgZmlsZVNpemU6IGZpbGUuc2l6ZSxcbiAgICAgICAgICAgIGZpbGVMaW5lczoganNvbkRhdGEubGVuZ3RoLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9O1xuICAgICAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGZpbGUpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dCBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9IGhhbmRsZUZpbGU9e2hhbmRsZUZpbGV9PlxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+RXhww6lyaW1lbnRhdGlvbiBBcmRlbm5lczwvaDE+XG5cbiAgICAgICAgeyFpc0xvZ2dlZCAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jcmVhdGV9PlxuICAgICAgICAgICAgPExvZ2luRm9ybSBoYW5kbGVMb2dpbj17aGFuZGxlTG9naW59IHJkdlVybD17UkRWX1NPTElEQVJJVEVTX1VSTH0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cblxuICAgICAgICB7aXNMb2dnZWQgJiYgKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8RmlsZUhhbmRsZXJcbiAgICAgICAgICAgICAgaGFuZGxlRmlsZT17aGFuZGxlRmlsZX1cbiAgICAgICAgICAgICAgZmlsZVNpemU9e2ZpbGVTaXplfVxuICAgICAgICAgICAgICBwZW5kaW5nTWVzc2FnZT17XCJSw6ljdXDDqXJhdGlvbiBkZXMgaW5mb3JtYXRpb25zLCBtZXJjaSBkZSBwYXRpZW50ZXJcIn1cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIHt1c2Vyc0RhdGEgJiYgKFxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5zdWJ0aXRsZX0+QsOpbsOpZmljaWFpcmVzIFJTQTwvaDI+XG5cbiAgICAgICAgICAgICAgICB7dXNlcnNEYXRhLmxlbmd0aCA9PSAwICYmIChcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5BdWN1biBiw6luw6lmaWNpYWlyZSBkYW5zIGxlIGZpY2hpZXI8L3A+XG4gICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgIHt1c2Vyc0RhdGEubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5EYXRlPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+Tm9tPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+UHLDqW5vbTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPk1haWw8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5Uw6lsw6lwaG9uZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPklEIFJEVi1Tb2xpZGFyaXTDqXM8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj1cIjNcIj5JbnZpdGF0aW9uPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjb2xTcGFuPVwiMVwiPkRlcm5pZXIgZW52b2kgbGU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj1cIjFcIj5EYXRlIGQnaW5zY3JpcHRpb248L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj1cIjFcIj5BY3Rpb248L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiByZXZlcnNlIGVzdCB1dGlsaXPDqSBwb3VyIHF1ZSBsZXMgdXRpbGlzYXRldXJzIGxlcyBwbHVzIHLDqWNlbnRzIGFwcGFyYWlzc2VudCBlbiBoYXV0ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAge1suLi51c2Vyc0RhdGFdLnJldmVyc2UoKS5tYXAoKHVzZXIsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3VzZXJbXCJEQVRFXCJdICE9PSBcIlwiICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+e3VzZXJbXCJEQVRFXCJdfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9Pnt1c2VyW1wiTk9NXCJdfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9Pnt1c2VyW1wiUFJFTk9NXCJdfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9Pnt1c2VyW1wiTUFJTFwiXX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT57dXNlcltcIlRFTEVQSE9ORVwiXX08L3RkPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyW1wiSUQgUkRWXCJdID09PSBcIlwiICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gY3JlYXRlVXNlcih1c2VyLCBpbmRleCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDcsOpZXIgdW4gY29tcHRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3VzZXJbXCJJRCBSRFZcIl0gIT09IFwiXCIgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9Pnt1c2VyW1wiSUQgUkRWXCJdfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9Pnt1c2VyW1wiRGF0ZSBkJ2ludml0YXRpb25cIl19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+e3VzZXJbXCJEYXRlIGQnaW5zY3JpcHRpb25cIl19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3VzZXJbXCJJRCBSRFZcIl0gIT09IFwiXCIgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBnZW5lcmF0ZUludml0YXRpb25VcmwodXNlcltcIklEIFJEVlwiXSwgaW5kZXgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXNlcltcIkRhdGUgZCdpbnZpdGF0aW9uXCJdICE9PSBcIlwiICYmIFwiUmVnw6luw6lyZXIgaW52aXRhdGlvblwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXNlcltcIkRhdGUgZCdpbnZpdGF0aW9uXCJdID09PSBcIlwiICYmIFwiR8OpbsOpcmVyIGludml0YXRpb25cIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyW1wiSUQgUkRWXCJdID09PSBcIlwiICYmIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9PjwvdGQ+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259IG9uQ2xpY2s9e3dyaXRlRmlsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgUmVnw6luw6lyZXIgZmljaGllclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cblxuICAgICAgICA8Rm9vdGVyXG4gICAgICAgICAgc3ViamVjdD1cIkV4cMOpcmltZW50YXRpb24gQXJkZW5uZXNcIlxuICAgICAgICAgIHBvdXJxdW9pPVwiUXVlbCBlc3QgbCdvYmplY3RpZiBkZSBjZXR0ZSBleHDDqXJpbWVudGF0aW9uJm5ic3A7P1wiXG4gICAgICAgICAgdGV4dD17XG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5cbiAgICAgICAgICAgICAgICBGYWNpbGl0ZXIgbGUgdHJhdmFpbCBkZXMgYWdlbnRzIGR1IGTDqXBhcnRlbWVudCBldCB0ZXN0ZXIgbCd1dGlsaXNhdGlvbiBkZVxuICAgICAgICAgICAgICAgIGwnYXBwbGljYXRpb24gUkRWLVNvbGlkYXJpdMOpcyBwb3VyIGFjY8OpbMOpcmVyIGxhIHByaXNlIGR1IHByZW1pZXIgcmVuZGV6LXZvdXNcbiAgICAgICAgICAgICAgICBkJ29yaWVudGF0aW9uLlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICB9XG4gICAgICAgIC8+XG4gICAgICA8L21haW4+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9