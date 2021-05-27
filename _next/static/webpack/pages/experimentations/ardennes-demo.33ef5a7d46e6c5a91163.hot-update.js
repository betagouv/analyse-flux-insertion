webpackHotUpdate_N_E("pages/experimentations/ardennes-demo",{

/***/ "./pages/experimentations/ardennes-demo/index.js":
/*!*******************************************************!*\
  !*** ./pages/experimentations/ardennes-demo/index.js ***!
  \*******************************************************/
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







var _jsxFileName = "/home/q/code/qblanc/beta.gouv/analyse-flux-insertion/pages/experimentations/ardennes-demo/index.js",
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
              newUsersData = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(usersData);

              if (result.invitation_url) {
                newUsersData[userIndex]["Lien d'invitation"] = result.invitation_url;
              } else if (result.invitation_token) {
                newUsersData[userIndex]["Code d'invitation"] = result.invitation_token;
              }

              newUsersData[userIndex]["Date d'invitation"] = Object(_lib_dates__WEBPACK_IMPORTED_MODULE_15__["getFrenchFormatDateString"])(new Date());
              setUsersData(newUsersData);

            case 8:
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
                  var worksheet = xls.Sheets[xls.SheetNames[0]];
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
        lineNumber: 206,
        columnNumber: 9
      }, this), !isLogged && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.create,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_loginForm__WEBPACK_IMPORTED_MODULE_11__["default"], {
          handleLogin: handleLogin,
          rdvUrl: RDV_SOLIDARITES_URL
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 11
      }, this), isLogged && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_fileHandler__WEBPACK_IMPORTED_MODULE_9__["default"], {
          handleFile: handleFile,
          fileSize: fileSize,
          pendingMessage: "Récupération des informations, merci de patienter"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 216,
          columnNumber: 13
        }, this), usersData && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.subtitle,
            children: "B\xE9n\xE9ficiaires RSA"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 224,
            columnNumber: 17
          }, this), usersData.length == 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.description,
            children: "Aucun b\xE9n\xE9ficiaire dans le fichier"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 227,
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
                    lineNumber: 235,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    rowSpan: "2",
                    children: "Nom"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 236,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    rowSpan: "2",
                    children: "Pr\xE9nom"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 237,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    rowSpan: "2",
                    children: "Mail"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 238,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    rowSpan: "2",
                    children: "T\xE9l\xE9phone"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 239,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    rowSpan: "2",
                    children: "ID RDV-Solidarit\xE9s"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 240,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    colSpan: "3",
                    children: "Invitation"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 241,
                    columnNumber: 27
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 234,
                  columnNumber: 25
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    colSpan: "1",
                    children: "Dernier envoi le"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 244,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    colSpan: "1",
                    children: "Date d'inscription"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 245,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    colSpan: "1",
                    children: "Action"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 246,
                    columnNumber: 27
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 243,
                  columnNumber: 25
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 233,
                columnNumber: 23
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
                children: Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(usersData).reverse().map(function (user, index) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_5__["Fragment"], {
                    children: user["DATE"] !== "" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center,
                        children: user["DATE"]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 255,
                        columnNumber: 33
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center,
                        children: user["NOM"]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 256,
                        columnNumber: 33
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center,
                        children: user["PRENOM"]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 257,
                        columnNumber: 33
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center,
                        children: user["MAIL"]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 258,
                        columnNumber: 33
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center,
                        children: user["TELEPHONE"]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 259,
                        columnNumber: 33
                      }, _this), user["ID RDV"] === "" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center,
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                          onClick: function onClick() {
                            return createUser(user, usersData.length - index - 1);
                          },
                          children: "Cr\xE9er un compte"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 263,
                          columnNumber: 37
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 262,
                        columnNumber: 35
                      }, _this), user["ID RDV"] !== "" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center,
                        children: user["ID RDV"]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 271,
                        columnNumber: 35
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center,
                        children: user["Date d'invitation"]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 273,
                        columnNumber: 33
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center,
                        children: user["Date d'inscription"]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 274,
                        columnNumber: 33
                      }, _this), user["ID RDV"] !== "" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center,
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                          onClick: function onClick() {
                            return generateInvitationUrl(user["ID RDV"], usersData.length - index - 1);
                          },
                          children: [user["Date d'invitation"] !== "" && "Regénérer invitation", user["Date d'invitation"] === "" && "Générer invitation"]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 277,
                          columnNumber: 37
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 276,
                        columnNumber: 35
                      }, _this), user["ID RDV"] === "" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 290,
                        columnNumber: 59
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 254,
                      columnNumber: 31
                    }, _this)
                  }, index, false, {
                    fileName: _jsxFileName,
                    lineNumber: 252,
                    columnNumber: 27
                  }, _this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 249,
                columnNumber: 23
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 232,
              columnNumber: 21
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.button,
              onClick: writeFile,
              children: "Reg\xE9n\xE9rer fichier"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 298,
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
            lineNumber: 313,
            columnNumber: 15
          }, this)
        }, void 0, false)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 308,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 204,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXhwZXJpbWVudGF0aW9ucy9hcmRlbm5lcy1kZW1vL2luZGV4LmpzIl0sIm5hbWVzIjpbInJlZHVjZXIiLCJyZWR1Y2VyRmFjdG9yeSIsIkFyZGVubmVzIiwicm91dGVyIiwidXNlUm91dGVyIiwiaXNEZW1vIiwicGF0aG5hbWUiLCJpbmNsdWRlcyIsImRldk1vZGUiLCJvcmdhSUQiLCJwcm9jZXNzIiwiUkRWX1NPTElEQVJJVEVTX1VSTCIsInVzZXJVcmwiLCJ1c2VTdGF0ZSIsImRldkZpbGUiLCJzZXREZXZGaWxlIiwidXNlUmVkdWNlciIsImluaXRSZWR1Y2VyIiwicnVucyIsImRpc3BhdGNoUnVucyIsInVzZXJzRGF0YSIsInNldFVzZXJzRGF0YSIsInVzZXJTdGF0dXNDaGVja2VkIiwic2V0VXNlclN0YXR1c0NoZWNrZWQiLCJmaWxlU2l6ZSIsInNldEZpbGVTaXplIiwiaXNMb2dnZWQiLCJzZXRJc0xvZ2dlZCIsInRva2VuSWQiLCJ1aWQiLCJjbGllbnQiLCJ0b2tlbiIsInNldFRva2VuIiwidXNlRWZmZWN0IiwiaGFuZGxlRmlsZSIsImZvckVhY2giLCJ1c2VyIiwidXNlckluZGV4IiwiY2hlY2tVc2VySW52aXRhdGlvblN0YXR1cyIsIndyaXRlRmlsZSIsIm91dFdvcmtib29rIiwiWExTWCIsImJvb2tfbmV3Iiwib3V0V29ya3NoZWV0IiwianNvbl90b19zaGVldCIsImJvb2tfYXBwZW5kX3NoZWV0IiwiZ2V0RGF0ZVRpbWVTdHJpbmciLCJEYXRlIiwiZ2VuZXJhdGVJbnZpdGF0aW9uVXJsIiwidXNlcklkIiwiaW52aXRhdGlvblVybCIsImFwcEZldGNoIiwicmVzdWx0IiwibmV3VXNlcnNEYXRhIiwiaW52aXRhdGlvbl91cmwiLCJpbnZpdGF0aW9uX3Rva2VuIiwiZ2V0RnJlbmNoRm9ybWF0RGF0ZVN0cmluZyIsImdldFVzZXIiLCJnZXRVc2VyVXJsIiwiaW52aXRhdGlvbl9jcmVhdGVkX2F0IiwiaW52aXRhdGlvbl9kYXRlIiwic3Vic3RyaW5nIiwiaW52aXRhdGlvbl9hY2NlcHRlZF9hdCIsImluc2NyaXB0aW9uX2RhdGUiLCJjcmVhdGVVc2VyIiwidXNlckRhdGEiLCJhZGRyZXNzIiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsImVtYWlsIiwicGhvbmVfbnVtYmVyIiwicmVwbGFjZSIsImJpcnRoX2RhdGUiLCJzdHJpbmdUb0RhdGUiLCJjYWlzc2VfYWZmaWxpYXRpb24iLCJhZmZpbGlhdGlvbl9udW1iZXIiLCJvcmdhbmlzYXRpb25faWRzIiwiSlNPTiIsInN0cmluZ2lmeSIsImlkIiwiZXJyb3JzIiwiZXJyb3IiLCJhbGVydCIsImJhc2UiLCJoYW5kbGVMb2dpbiIsImZpbGUiLCJzaXplIiwic3RhcnRfdGltZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsImV2ZW50IiwiZmlsZURhdGEiLCJVaW50OEFycmF5IiwidGFyZ2V0IiwieGxzIiwidHlwZSIsImNlbGxEYXRlcyIsImRhdGVORiIsIndvcmtzaGVldCIsIlNoZWV0cyIsIlNoZWV0TmFtZXMiLCJqc29uRGF0YSIsInNoZWV0X3RvX2pzb24iLCJibGFua3Jvd3MiLCJyYXciLCJkZWZ2YWwiLCJyYW5nZSIsIm5ld19yYW5nZSIsIm1hcCIsIk9iamVjdCIsImtleXMiLCJyZWR1Y2UiLCJyZXMiLCJrZXkiLCJzZXRJc1BlbmRpbmciLCJpdGVtIiwidGltZXN0YW1wIiwidG9JU09TdHJpbmciLCJzbGljZSIsImR1cmF0aW9uIiwiZmlsZW5hbWUiLCJuYW1lIiwiZmlsZUxpbmVzIiwibGVuZ3RoIiwicmVhZEFzQXJyYXlCdWZmZXIiLCJzdHlsZXMiLCJjb250YWluZXIiLCJtYWluIiwidGl0bGUiLCJjcmVhdGUiLCJzdWJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicmV2ZXJzZSIsImluZGV4IiwiY2VudGVyIiwiYnV0dG9uIiwidGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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b0Msb0JBVHZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBdEJKLEVBb0NHQSxJQUFJLENBQUMsUUFBRCxDQUFKLEtBQW1CLEVBQW5CLGlCQUF5QjtBQUFJLGlDQUFTLEVBQUU0RiwrREFBTSxDQUFDUztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQXBDNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkoscUJBQWVELEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFENEI7QUFBQSxpQkFBN0I7QUFGSDtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQWpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFtRUU7QUFBUSx1QkFBUyxFQUFFUiwrREFBTSxDQUFDVSxNQUExQjtBQUFrQyxxQkFBTyxFQUFFbkcsU0FBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBbkVGO0FBQUEsMEJBUko7QUFBQSx3QkFSSjtBQUFBLHNCQVZKLGVBdUdFLHFFQUFDLDJEQUFEO0FBQ0UsZUFBTyxFQUFDLDZCQURWO0FBRUUsZ0JBQVEsRUFBQyxzREFGWDtBQUdFLFlBQUksZUFDRjtBQUFBLGlDQUNFO0FBQUcscUJBQVMsRUFBRXlGLCtEQUFNLENBQUNXLElBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBdkdGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXlIRDs7R0FuVHVCekksUTtVQUNQRSxxRDs7O0tBRE9GLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZXhwZXJpbWVudGF0aW9ucy9hcmRlbm5lcy1kZW1vLjMzZWY1YTdkNDZlNmM1YTkxMTYzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGcmFnbWVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVkdWNlciB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgKiBhcyBYTFNYIGZyb20gXCJ4bHN4XCI7XG5cbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0XCI7XG5pbXBvcnQgRmlsZUhhbmRsZXIgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvZmlsZUhhbmRsZXJcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvZm9vdGVyXCI7XG5pbXBvcnQgTG9naW5Gb3JtIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2xvZ2luRm9ybVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuXG5pbXBvcnQgeyBhcHBGZXRjaCB9IGZyb20gXCIuLi8uLi8uLi9saWIvYXBwRmV0Y2hcIjtcbmltcG9ydCB7IGluaXRSZWR1Y2VyLCByZWR1Y2VyRmFjdG9yeSB9IGZyb20gXCIuLi8uLi8uLi9saWIvcmVkdWNlckZhY3RvcnlcIjtcbmltcG9ydCB7IGdldERhdGVUaW1lU3RyaW5nLCBnZXRGcmVuY2hGb3JtYXREYXRlU3RyaW5nLCBzdHJpbmdUb0RhdGUgfSBmcm9tIFwiLi4vLi4vLi4vbGliL2RhdGVzXCI7XG5cbmNvbnN0IHJlZHVjZXIgPSByZWR1Y2VyRmFjdG9yeShcIkV4cMOpcmltZW50YXRpb24gQXJkZW5uZXMgLSBDTkFGIC0gQsOpbsOpZmljaWFpcmVcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFyZGVubmVzKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgaXNEZW1vID0gcm91dGVyLnBhdGhuYW1lLmluY2x1ZGVzKFwiZGVtb1wiKTtcbiAgY29uc3QgZGV2TW9kZSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09IFwiZGV2ZWxvcG1lbnRcIjtcbiAgY29uc3Qgb3JnYUlEID0gaXNEZW1vXG4gICAgPyBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19PUkdBTklTQVRJT05fSURfREVNT1xuICAgIDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfT1JHQU5JU0FUSU9OX0lEX1BST0Q7XG5cbiAgY29uc3QgUkRWX1NPTElEQVJJVEVTX1VSTCA9IGlzRGVtb1xuICAgID8gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUkRWX1NPTElEQVJJVEVTX0RFTU9fVVJMXG4gICAgOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19SRFZfU09MSURBUklURVNfUFJPRF9VUkw7XG4gIGNvbnN0IHVzZXJVcmwgPSBSRFZfU09MSURBUklURVNfVVJMICsgXCIvYXBpL3YxL3VzZXJzXCI7XG5cbiAgY29uc3QgW2RldkZpbGUsIHNldERldkZpbGVdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtydW5zLCBkaXNwYXRjaFJ1bnNdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBbXSwgaW5pdFJlZHVjZXIpO1xuICBjb25zdCBbdXNlcnNEYXRhLCBzZXRVc2Vyc0RhdGFdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFt1c2VyU3RhdHVzQ2hlY2tlZCwgc2V0VXNlclN0YXR1c0NoZWNrZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZmlsZVNpemUsIHNldEZpbGVTaXplXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbaXNMb2dnZWQsIHNldElzTG9nZ2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Rva2VuLCBzZXRUb2tlbl0gPSB1c2VTdGF0ZSh7XG4gICAgdG9rZW5JZDogXCJcIixcbiAgICB1aWQ6IFwiXCIsXG4gICAgY2xpZW50OiBcIlwiLFxuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkZXZGaWxlKSB7XG4gICAgICBoYW5kbGVGaWxlKGRldkZpbGUpO1xuICAgIH1cbiAgfSwgW2RldkZpbGVdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh1c2Vyc0RhdGEgJiYgdXNlclN0YXR1c0NoZWNrZWQgPT09IGZhbHNlKSB7XG4gICAgICB1c2Vyc0RhdGEuZm9yRWFjaCgodXNlciwgdXNlckluZGV4KSA9PiB7XG4gICAgICAgIGlmICh1c2VyW1wiSUQgUkRWXCJdICE9IFwiXCIpIHtcbiAgICAgICAgICBjaGVja1VzZXJJbnZpdGF0aW9uU3RhdHVzKHVzZXJbXCJJRCBSRFZcIl0sIHVzZXJJbmRleCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgc2V0VXNlclN0YXR1c0NoZWNrZWQodHJ1ZSk7XG4gICAgfVxuICB9LCBbdXNlcnNEYXRhXSk7XG5cbiAgY29uc3Qgd3JpdGVGaWxlID0gKCkgPT4ge1xuICAgIGNvbnN0IG91dFdvcmtib29rID0gWExTWC51dGlscy5ib29rX25ldygpO1xuICAgIGNvbnN0IG91dFdvcmtzaGVldCA9IFhMU1gudXRpbHMuanNvbl90b19zaGVldCh1c2Vyc0RhdGEpO1xuICAgIFhMU1gudXRpbHMuYm9va19hcHBlbmRfc2hlZXQob3V0V29ya2Jvb2ssIG91dFdvcmtzaGVldCwgXCJESVZFUkdFTkNFU1wiKTtcbiAgICAvLyBYTFNYLnV0aWxzLmJvb2tfYXBwZW5kX3NoZWV0KG91dFdvcmtib29rLCB4bHMuU2hlZXRzW3hscy5TaGVldE5hbWVzWzFdXSwgXCJHUkFQSElRVUVcIik7XG4gICAgLy8gWExTWC51dGlscy5ib29rX2FwcGVuZF9zaGVldChvdXRXb3JrYm9vaywgeGxzLlNoZWV0c1t4bHMuU2hlZXROYW1lc1syXV0sIFwiU2VsZWN0aW9uIENPQVwiKTtcbiAgICBYTFNYLndyaXRlRmlsZShvdXRXb3JrYm9vaywgYGFyZGVubmVzX3JzYV8ke2dldERhdGVUaW1lU3RyaW5nKG5ldyBEYXRlKCkpfS54bHN4YCk7XG4gIH07XG5cbiAgYXN5bmMgZnVuY3Rpb24gZ2VuZXJhdGVJbnZpdGF0aW9uVXJsKHVzZXJJZCwgdXNlckluZGV4KSB7XG4gICAgY29uc3QgaW52aXRhdGlvblVybCA9IHVzZXJVcmwgKyBgLyR7dXNlcklkfS9pbnZpdGVgO1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGFwcEZldGNoKGludml0YXRpb25VcmwsIHRva2VuKTtcblxuICAgIGxldCBuZXdVc2Vyc0RhdGEgPSBbLi4udXNlcnNEYXRhXTtcbiAgICBpZiAocmVzdWx0Lmludml0YXRpb25fdXJsKSB7XG4gICAgICBuZXdVc2Vyc0RhdGFbdXNlckluZGV4XVtcIkxpZW4gZCdpbnZpdGF0aW9uXCJdID0gcmVzdWx0Lmludml0YXRpb25fdXJsO1xuICAgIH0gZWxzZSBpZiAocmVzdWx0Lmludml0YXRpb25fdG9rZW4pIHtcbiAgICAgIG5ld1VzZXJzRGF0YVt1c2VySW5kZXhdW1wiQ29kZSBkJ2ludml0YXRpb25cIl0gPSByZXN1bHQuaW52aXRhdGlvbl90b2tlbjtcbiAgICB9XG4gICAgbmV3VXNlcnNEYXRhW3VzZXJJbmRleF1bXCJEYXRlIGQnaW52aXRhdGlvblwiXSA9IGdldEZyZW5jaEZvcm1hdERhdGVTdHJpbmcobmV3IERhdGUoKSk7XG4gICAgc2V0VXNlcnNEYXRhKG5ld1VzZXJzRGF0YSk7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBnZXRVc2VyKHVzZXJJZCwgdG9rZW4pIHtcbiAgICBjb25zdCBnZXRVc2VyVXJsID0gdXNlclVybCArIGAvJHt1c2VySWR9YDtcbiAgICByZXR1cm4gYXdhaXQgYXBwRmV0Y2goZ2V0VXNlclVybCwgdG9rZW4pO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gY2hlY2tVc2VySW52aXRhdGlvblN0YXR1cyh1c2VySWQsIHVzZXJJbmRleCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFVzZXIodXNlcklkLCB0b2tlbik7XG5cbiAgICBsZXQgbmV3VXNlcnNEYXRhID0gWy4uLnVzZXJzRGF0YV07XG4gICAgaWYgKHJlc3VsdC51c2VyLmludml0YXRpb25fY3JlYXRlZF9hdCkge1xuICAgICAgbGV0IGludml0YXRpb25fZGF0ZSA9IHJlc3VsdC51c2VyLmludml0YXRpb25fY3JlYXRlZF9hdCAvLyBEYXRlIGF1IGZvcm1hdCA6IDIwMjEtMDQtMTUgMTQ6NTM6NTYgKzAyMDBcbiAgICAgICAgLnN1YnN0cmluZygwLCAxMCk7IC8vIFLDqWN1cMOpcmVyIGxlcyAxMCBwcmVtaWVycyBjaGlmZnJlcyAobGEgZGF0ZSlcbiAgICAgIGludml0YXRpb25fZGF0ZSA9IG5ldyBEYXRlKGludml0YXRpb25fZGF0ZSk7IC8vIENyw6llciB1bmUgZGF0ZSBKU1xuICAgICAgbmV3VXNlcnNEYXRhW3VzZXJJbmRleF1bXCJEYXRlIGQnaW52aXRhdGlvblwiXSA9IGdldEZyZW5jaEZvcm1hdERhdGVTdHJpbmcoaW52aXRhdGlvbl9kYXRlKTtcbiAgICB9XG4gICAgaWYgKHJlc3VsdC51c2VyLmludml0YXRpb25fYWNjZXB0ZWRfYXQpIHtcbiAgICAgIGxldCBpbnNjcmlwdGlvbl9kYXRlID0gcmVzdWx0LnVzZXIuaW52aXRhdGlvbl9hY2NlcHRlZF9hdCAvLyBEYXRlIGF1IGZvcm1hdCA6IDIwMjEtMDQtMTUgMTQ6NTM6NTYgKzAyMDBcbiAgICAgICAgLnN1YnN0cmluZygwLCAxMCk7IC8vIFLDqWN1cMOpcmVyIGxlcyAxMCBwcmVtaWVycyBjaGlmZnJlcyAobGEgZGF0ZSlcbiAgICAgIGluc2NyaXB0aW9uX2RhdGUgPSBuZXcgRGF0ZShpbnNjcmlwdGlvbl9kYXRlKTsgLy8gQ3LDqWVyIHVuZSBkYXRlIEpTXG4gICAgICBuZXdVc2Vyc0RhdGFbdXNlckluZGV4XVtcIkRhdGUgZCdpbnNjcmlwdGlvblwiXSA9IGdldEZyZW5jaEZvcm1hdERhdGVTdHJpbmcoaW5zY3JpcHRpb25fZGF0ZSk7XG4gICAgfVxuICAgIHNldFVzZXJzRGF0YShuZXdVc2Vyc0RhdGEpO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVXNlcih1c2VyRGF0YSwgdXNlckluZGV4KSB7XG4gICAgY29uc3QgYWRkcmVzcyA9IHVzZXJEYXRhW1wiQURSRVNTRVwiXSArIFwiIC0gXCIgKyB1c2VyRGF0YVtcIkNPREUgUE9TVEFMXCJdICsgXCIgXCIgKyB1c2VyRGF0YVtcIlZJTExFXCJdO1xuXG4gICAgbGV0IHVzZXIgPSB7XG4gICAgICBmaXJzdF9uYW1lOiB1c2VyRGF0YVtcIlBSRU5PTVwiXSxcbiAgICAgIGxhc3RfbmFtZTogdXNlckRhdGFbXCJOT01cIl0sXG4gICAgICBlbWFpbDogdXNlckRhdGFbXCJNQUlMXCJdLFxuICAgICAgcGhvbmVfbnVtYmVyOiB1c2VyRGF0YVtcIlRFTEVQSE9ORVwiXS5yZXBsYWNlKC9cXHMrL2csIFwiXCIpLFxuICAgICAgYmlydGhfZGF0ZTogc3RyaW5nVG9EYXRlKHVzZXJEYXRhW1wiREFURSBERSBOQUlTU0FOQ0VcIl0pLFxuICAgICAgYWRkcmVzczogYWRkcmVzcyxcbiAgICAgIGNhaXNzZV9hZmZpbGlhdGlvbjogXCJjYWZcIixcbiAgICAgIGFmZmlsaWF0aW9uX251bWJlcjogdXNlckRhdGFbXCJOwrBDQUZcIl0sXG4gICAgICBvcmdhbmlzYXRpb25faWRzOiBbb3JnYUlEXSxcbiAgICB9O1xuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXBwRmV0Y2godXNlclVybCwgdG9rZW4sIFwiUE9TVFwiLCBKU09OLnN0cmluZ2lmeSh1c2VyKSk7XG5cbiAgICBsZXQgbmV3VXNlcnNEYXRhID0gWy4uLnVzZXJzRGF0YV07XG4gICAgaWYgKHJlc3VsdC51c2VyKSB7XG4gICAgICBuZXdVc2Vyc0RhdGFbdXNlckluZGV4XVtcIklEIFJEVlwiXSA9IHJlc3VsdC51c2VyLmlkO1xuICAgICAgc2V0VXNlcnNEYXRhKG5ld1VzZXJzRGF0YSk7XG4gICAgICBnZW5lcmF0ZUludml0YXRpb25VcmwocmVzdWx0LnVzZXIuaWQsIHVzZXJJbmRleCk7XG4gICAgfSBlbHNlIGlmIChyZXN1bHQuZXJyb3JzICYmIHJlc3VsdC5lcnJvcnMuZW1haWwgJiYgcmVzdWx0LmVycm9ycy5lbWFpbFswXS5lcnJvciA9PT0gXCJ0YWtlblwiKSB7XG4gICAgICBuZXdVc2Vyc0RhdGFbdXNlckluZGV4XVtcIklEIFJEVlwiXSA9IHJlc3VsdC5lcnJvcnMuZW1haWxbMF0uaWQ7XG4gICAgICBzZXRVc2Vyc0RhdGEobmV3VXNlcnNEYXRhKTtcbiAgICAgIGNoZWNrVXNlckludml0YXRpb25TdGF0dXMocmVzdWx0LmVycm9ycy5lbWFpbFswXS5pZCwgdXNlckluZGV4KTtcbiAgICAgIGFsZXJ0KFwiVW4gY29tcHRlIGFzc29jacOpIMOgIGNldCBlbWFpbCBleGlzdGUgZMOpasOgXCIpO1xuICAgIH0gZWxzZSBpZiAocmVzdWx0LmVycm9ycyAmJiByZXN1bHQuZXJyb3JzLmVtYWlsICYmIHJlc3VsdC5lcnJvcnMuZW1haWxbMF0uZXJyb3IgPT09IFwiaW52YWxpZFwiKSB7XG4gICAgICBhbGVydChcIkwnYWRyZXNzZSBtYWlsIG4nZXN0IHBhcyB2YWxpZGVcIik7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIHJlc3VsdC5lcnJvcnMgJiZcbiAgICAgIHJlc3VsdC5lcnJvcnMuZmlyc3RfbmFtZSAmJlxuICAgICAgcmVzdWx0LmVycm9ycy5maXJzdF9uYW1lWzBdLmVycm9yID09PSBcImTDqWrDoCB1dGlsaXPDqVwiXG4gICAgKSB7XG4gICAgICBhbGVydChcbiAgICAgICAgXCJMYSBjcsOpYXRpb24gZHUgY29tcHRlIGEgw6ljaG91w6kuIEwndXRpbGlzYXRldXIgc2VtYmxlIGV4aXN0ZXIgbWFpcyBuJ2EgcHUgw6p0cmUgcsOpY3Vww6lyw6kuXCJcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmIChyZXN1bHQuZXJyb3JzICYmIHJlc3VsdC5lcnJvcnNbMF0gJiYgcmVzdWx0LmVycm9yc1swXS5iYXNlID09PSBcImZvcmJpZGRlblwiKSB7XG4gICAgICBhbGVydChcIlZvdHJlIGNvbXB0ZSBhZ2VudCBSRFYtU29saWRhcml0w6lzIG5lIHZvdXMgcGVybWV0IHBhcyBkJ2VmZmVjdHVlciBjZXR0ZSBhY3Rpb24uXCIpO1xuICAgIH0gZWxzZSBpZiAocmVzdWx0LmVycm9ycyAmJiByZXN1bHQuZXJyb3JzWzBdKSB7XG4gICAgICBhbGVydChyZXN1bHQuZXJyb3JzWzBdKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBoYW5kbGVMb2dpbiA9ICh0b2tlbklkLCB1aWQsIGNsaWVudCkgPT4ge1xuICAgIHNldFRva2VuKHsgLi4udG9rZW4sIHRva2VuSWQ6IHRva2VuSWQsIHVpZDogdWlkLCBjbGllbnQ6IGNsaWVudCB9KTtcbiAgICBzZXRJc0xvZ2dlZCh0cnVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVGaWxlID0gYXN5bmMgZmlsZSA9PiB7XG4gICAgaWYgKGRldk1vZGUgJiYgZmlsZSAhPSBkZXZGaWxlKSB7XG4gICAgICBzZXREZXZGaWxlKGZpbGUpO1xuICAgIH1cbiAgICBzZXRGaWxlU2l6ZShmaWxlLnNpemUpO1xuICAgIGNvbnN0IHN0YXJ0X3RpbWUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgZmlsZURhdGEgPSBuZXcgVWludDhBcnJheShldmVudC50YXJnZXQucmVzdWx0KTtcbiAgICAgICAgY29uc3QgeGxzID0gWExTWC5yZWFkKGZpbGVEYXRhLCB7IHR5cGU6IFwiYXJyYXlcIiwgY2VsbERhdGVzOiB0cnVlLCBkYXRlTkY6IFwiZGQvbW0veXl5eVwiIH0pO1xuICAgICAgICBjb25zdCB3b3Jrc2hlZXQgPSB4bHMuU2hlZXRzW3hscy5TaGVldE5hbWVzWzBdXTtcblxuICAgICAgICBsZXQganNvbkRhdGEgPSBYTFNYLnV0aWxzLnNoZWV0X3RvX2pzb24od29ya3NoZWV0LCB7XG4gICAgICAgICAgYmxhbmtyb3dzOiBmYWxzZSxcbiAgICAgICAgICByYXc6IGZhbHNlLFxuICAgICAgICAgIGRlZnZhbDogXCJcIixcbiAgICAgICAgICByYW5nZTogbmV3X3JhbmdlLFxuICAgICAgICB9KTtcblxuICAgICAgICAvLyB3ZSByZW1vdmUgbGluZSBicmVha3MgZnJvbSBhbGwga2V5c1xuICAgICAgICBqc29uRGF0YSA9IGpzb25EYXRhLm1hcCh1c2VyRGF0YSA9PiB7XG4gICAgICAgICAgcmV0dXJuIFsuLi5PYmplY3Qua2V5cyh1c2VyRGF0YSldLnJlZHVjZSgocmVzLCBrZXkpID0+IHtcbiAgICAgICAgICAgIHJlc1trZXkucmVwbGFjZSgvW1xcblxccl0rL2csIFwiIFwiKV0gPSB1c2VyRGF0YVtrZXldO1xuICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgICB9LCB7fSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGpzb25EYXRhID09IG51bGwgJiYgc2V0SXNQZW5kaW5nKGZhbHNlKTtcbiAgICAgICAgc2V0VXNlclN0YXR1c0NoZWNrZWQoZmFsc2UpO1xuICAgICAgICBzZXRVc2Vyc0RhdGEoanNvbkRhdGEpO1xuICAgICAgICBkaXNwYXRjaFJ1bnMoe1xuICAgICAgICAgIHR5cGU6IFwiYXBwZW5kXCIsXG4gICAgICAgICAgaXRlbToge1xuICAgICAgICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTkpLFxuICAgICAgICAgICAgZHVyYXRpb246IG5ldyBEYXRlKCkgLSBzdGFydF90aW1lLFxuICAgICAgICAgICAgZmlsZW5hbWU6IGZpbGUubmFtZSxcbiAgICAgICAgICAgIGZpbGVTaXplOiBmaWxlLnNpemUsXG4gICAgICAgICAgICBmaWxlTGluZXM6IGpzb25EYXRhLmxlbmd0aCxcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfTtcbiAgICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihmaWxlKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfSBoYW5kbGVGaWxlPXtoYW5kbGVGaWxlfT5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PkV4cMOpcmltZW50YXRpb24gQXJkZW5uZXM8L2gxPlxuXG4gICAgICAgIHshaXNMb2dnZWQgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY3JlYXRlfT5cbiAgICAgICAgICAgIDxMb2dpbkZvcm0gaGFuZGxlTG9naW49e2hhbmRsZUxvZ2lufSByZHZVcmw9e1JEVl9TT0xJREFSSVRFU19VUkx9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG5cbiAgICAgICAge2lzTG9nZ2VkICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPEZpbGVIYW5kbGVyXG4gICAgICAgICAgICAgIGhhbmRsZUZpbGU9e2hhbmRsZUZpbGV9XG4gICAgICAgICAgICAgIGZpbGVTaXplPXtmaWxlU2l6ZX1cbiAgICAgICAgICAgICAgcGVuZGluZ01lc3NhZ2U9e1wiUsOpY3Vww6lyYXRpb24gZGVzIGluZm9ybWF0aW9ucywgbWVyY2kgZGUgcGF0aWVudGVyXCJ9XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICB7dXNlcnNEYXRhICYmIChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuc3VidGl0bGV9PkLDqW7DqWZpY2lhaXJlcyBSU0E8L2gyPlxuXG4gICAgICAgICAgICAgICAge3VzZXJzRGF0YS5sZW5ndGggPT0gMCAmJiAoXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+QXVjdW4gYsOpbsOpZmljaWFpcmUgZGFucyBsZSBmaWNoaWVyPC9wPlxuICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICB7dXNlcnNEYXRhLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlPlxuICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+RGF0ZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPk5vbTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPlByw6lub208L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5NYWlsPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+VMOpbMOpcGhvbmU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5JRCBSRFYtU29saWRhcml0w6lzPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNvbFNwYW49XCIzXCI+SW52aXRhdGlvbjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj1cIjFcIj5EZXJuaWVyIGVudm9pIGxlPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNvbFNwYW49XCIxXCI+RGF0ZSBkJ2luc2NyaXB0aW9uPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNvbFNwYW49XCIxXCI+QWN0aW9uPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogcmV2ZXJzZSBlc3QgdXRpbGlzw6kgcG91ciBxdWUgbGVzIHV0aWxpc2F0ZXVycyBsZXMgcGx1cyByw6ljZW50cyBhcHBhcmFpc3NlbnQgZW4gaGF1dCAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIHtbLi4udXNlcnNEYXRhXS5yZXZlcnNlKCkubWFwKCh1c2VyLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RnJhZ21lbnQga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3VzZXJbXCJEQVRFXCJdICE9PSBcIlwiICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+e3VzZXJbXCJEQVRFXCJdfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9Pnt1c2VyW1wiTk9NXCJdfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9Pnt1c2VyW1wiUFJFTk9NXCJdfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9Pnt1c2VyW1wiTUFJTFwiXX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT57dXNlcltcIlRFTEVQSE9ORVwiXX08L3RkPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyW1wiSUQgUkRWXCJdID09PSBcIlwiICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY3JlYXRlVXNlcih1c2VyLCB1c2Vyc0RhdGEubGVuZ3RoIC0gaW5kZXggLSAxKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3LDqWVyIHVuIGNvbXB0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3VzZXJbXCJJRCBSRFZcIl0gIT09IFwiXCIgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9Pnt1c2VyW1wiSUQgUkRWXCJdfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9Pnt1c2VyW1wiRGF0ZSBkJ2ludml0YXRpb25cIl19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+e3VzZXJbXCJEYXRlIGQnaW5zY3JpcHRpb25cIl19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3VzZXJbXCJJRCBSRFZcIl0gIT09IFwiXCIgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlSW52aXRhdGlvblVybChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJbXCJJRCBSRFZcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2Vyc0RhdGEubGVuZ3RoIC0gaW5kZXggLSAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyW1wiRGF0ZSBkJ2ludml0YXRpb25cIl0gIT09IFwiXCIgJiYgXCJSZWfDqW7DqXJlciBpbnZpdGF0aW9uXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyW1wiRGF0ZSBkJ2ludml0YXRpb25cIl0gPT09IFwiXCIgJiYgXCJHw6luw6lyZXIgaW52aXRhdGlvblwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3VzZXJbXCJJRCBSRFZcIl0gPT09IFwiXCIgJiYgPHRkIGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+PC90ZD59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufSBvbkNsaWNrPXt3cml0ZUZpbGV9PlxuICAgICAgICAgICAgICAgICAgICAgIFJlZ8OpbsOpcmVyIGZpY2hpZXJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG5cbiAgICAgICAgPEZvb3RlclxuICAgICAgICAgIHN1YmplY3Q9XCJFeHDDqXJpbWVudGF0aW9uIEFyZGVubmVzXCJcbiAgICAgICAgICBwb3VycXVvaT1cIlF1ZWwgZXN0IGwnb2JqZWN0aWYgZGUgY2V0dGUgZXhww6lyaW1lbnRhdGlvbiZuYnNwOz9cIlxuICAgICAgICAgIHRleHQ9e1xuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+XG4gICAgICAgICAgICAgICAgRmFjaWxpdGVyIGxlIHRyYXZhaWwgZGVzIGFnZW50cyBkdSBkw6lwYXJ0ZW1lbnQgZXQgdGVzdGVyIGwndXRpbGlzYXRpb24gZGVcbiAgICAgICAgICAgICAgICBsJ2FwcGxpY2F0aW9uIFJEVi1Tb2xpZGFyaXTDqXMgcG91ciBhY2PDqWzDqXJlciBsYSBwcmlzZSBkdSBwcmVtaWVyIHJlbmRlei12b3VzXG4gICAgICAgICAgICAgICAgZCdvcmllbnRhdGlvbi5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgPC9tYWluPlxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==