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

  function getUser(_x3) {
    return _getUser.apply(this, arguments);
  }

  function _getUser() {
    _getUser = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(userId) {
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

  function checkUserInvitationStatus(_x4, _x5) {
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
              return getUser(userId);

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

  function invalidOrTakenMail(_x6, _x7) {
    return _invalidOrTakenMail.apply(this, arguments);
  }

  function _invalidOrTakenMail() {
    _invalidOrTakenMail = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5(userData, userIndex) {
      var userId,
          result,
          newUsersData,
          _args5 = arguments;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              userId = _args5.length > 2 && _args5[2] !== undefined ? _args5[2] : null;

              if (!(userId != null)) {
                _context5.next = 8;
                break;
              }

              _context5.next = 4;
              return getUser(userId);

            case 4:
              result = _context5.sent;

              if (result && result.user.first_name.toUpperCase() === userData["PRENOM"].toUpperCase() && result.user.last_name.toUpperCase() === userData["NOM"].toUpperCase() && result.user.birth_date === Object(_lib_dates__WEBPACK_IMPORTED_MODULE_15__["applicationDateToString"])(Object(_lib_dates__WEBPACK_IMPORTED_MODULE_15__["stringToDate"])(userData["DATE DE NAISSANCE"])) && result.user.address.toUpperCase() === userData["ADRESSE"].toUpperCase() + " - " + userData["CODE POSTAL"].toUpperCase() + " " + userData["VILLE"].toUpperCase()) {
                newUsersData = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(usersData);
                newUsersData[userIndex]["ID RDV"] = userId;
                setUsersData(newUsersData);
                checkUserInvitationStatus(result.errors.email[0].id, userIndex);
                alert("Un compte associé à cet email existe déjà");
              } else {
                createUser(userData, userIndex, false);
              }

              _context5.next = 9;
              break;

            case 8:
              createUser(userData, userIndex, false);

            case 9:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));
    return _invalidOrTakenMail.apply(this, arguments);
  }

  function createUser(_x8, _x9) {
    return _createUser.apply(this, arguments);
  }

  function _createUser() {
    _createUser = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee6(userData, userIndex) {
      var withEmail,
          address,
          user,
          result,
          newUsersData,
          _args6 = arguments;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              withEmail = _args6.length > 2 && _args6[2] !== undefined ? _args6[2] : true;
              address = userData["ADRESSE"] + " - " + userData["CODE POSTAL"] + " " + userData["VILLE"];
              user = {
                first_name: userData["PRENOM"],
                last_name: userData["NOM"],
                phone_number: userData["TELEPHONE"].replace(/\s+/g, ""),
                birth_date: Object(_lib_dates__WEBPACK_IMPORTED_MODULE_15__["stringToDate"])(userData["DATE DE NAISSANCE"]),
                address: address,
                caisse_affiliation: "caf",
                affiliation_number: userData["N°CAF"],
                organisation_ids: [orgaID]
              };
              if (withEmail === true) user.email = userData["MAIL"];
              _context6.next = 6;
              return Object(_lib_appFetch__WEBPACK_IMPORTED_MODULE_13__["appFetch"])(userUrl, token, "POST", JSON.stringify(user));

            case 6:
              result = _context6.sent;
              newUsersData = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(usersData);

              if (result.user) {
                newUsersData[userIndex]["ID RDV"] = result.user.id;
                setUsersData(newUsersData);
                generateInvitationUrl(result.user.id, userIndex);
              } else if (result.errors && result.errors.email && result.errors.email[0].error === "taken") {
                invalidOrTakenMail(userData, userIndex, result.errors.email[0].id);
              } else if (result.errors && result.errors.email && result.errors.email[0].error === "invalid") {
                invalidOrTakenMail(userData, userIndex);
              } else if (result.errors && result.errors.first_name && result.errors.first_name[0].error === "déjà utilisé") {
                alert("La création du compte a échoué. L'utilisateur semble exister mais n'a pu être récupéré.");
              } else if (result.errors && result.errors[0] && result.errors[0].base === "forbidden") {
                alert("Votre compte agent RDV-Solidarités ne vous permet pas d'effectuer cette action.");
              } else if (result.errors && result.errors[0]) {
                alert(result.errors[0]);
              }

            case 9:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
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
                    defval: ""
                  }); // we remove line breaks from all keys

                  jsonData = jsonData.map(function (userData) {
                    return Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(Object.keys(userData)).reduce(function (res, key) {
                      res[key.replace(/[\n\r]+/g, " ")] = userData[key];
                      return res;
                    }, {});
                  });
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

    return function handleFile(_x10) {
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
        lineNumber: 224,
        columnNumber: 9
      }, this), !isLogged && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.create,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_loginForm__WEBPACK_IMPORTED_MODULE_11__["default"], {
          handleLogin: handleLogin,
          rdvUrl: RDV_SOLIDARITES_URL
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 228,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 11
      }, this), isLogged && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_fileHandler__WEBPACK_IMPORTED_MODULE_9__["default"], {
          handleFile: handleFile,
          fileSize: fileSize,
          pendingMessage: "Récupération des informations, merci de patienter"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 234,
          columnNumber: 13
        }, this), usersData && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.subtitle,
            children: "B\xE9n\xE9ficiaires RSA"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 242,
            columnNumber: 17
          }, this), usersData.length == 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.description,
            children: "Aucun b\xE9n\xE9ficiaire dans le fichier"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 245,
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
                    lineNumber: 253,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    rowSpan: "2",
                    children: "Nom"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 254,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    rowSpan: "2",
                    children: "Pr\xE9nom"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 255,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    rowSpan: "2",
                    children: "Mail"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 256,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    rowSpan: "2",
                    children: "T\xE9l\xE9phone"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 257,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    rowSpan: "2",
                    children: "ID RDV-Solidarit\xE9s"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 258,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    colSpan: "3",
                    children: "Invitation"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 259,
                    columnNumber: 27
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 252,
                  columnNumber: 25
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    colSpan: "1",
                    children: "Dernier envoi le"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 262,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    colSpan: "1",
                    children: "Date d'inscription"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 263,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    colSpan: "1",
                    children: "Action"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 264,
                    columnNumber: 27
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 261,
                  columnNumber: 25
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 251,
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
                        lineNumber: 273,
                        columnNumber: 33
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center,
                        children: user["NOM"]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 274,
                        columnNumber: 33
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center,
                        children: user["PRENOM"]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 275,
                        columnNumber: 33
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center,
                        children: user["MAIL"]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 276,
                        columnNumber: 33
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center,
                        children: user["TELEPHONE"]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 277,
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
                          lineNumber: 281,
                          columnNumber: 37
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 280,
                        columnNumber: 35
                      }, _this), user["ID RDV"] !== "" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center,
                        children: user["ID RDV"]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 289,
                        columnNumber: 35
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center,
                        children: user["Date d'invitation"]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 291,
                        columnNumber: 33
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center,
                        children: user["Date d'inscription"]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 292,
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
                          lineNumber: 295,
                          columnNumber: 37
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 294,
                        columnNumber: 35
                      }, _this), user["ID RDV"] === "" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 308,
                        columnNumber: 59
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 272,
                      columnNumber: 31
                    }, _this)
                  }, index, false, {
                    fileName: _jsxFileName,
                    lineNumber: 270,
                    columnNumber: 27
                  }, _this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 267,
                columnNumber: 23
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 250,
              columnNumber: 21
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.button,
              onClick: writeFile,
              children: "Reg\xE9n\xE9rer fichier"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 316,
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
            lineNumber: 331,
            columnNumber: 15
          }, this)
        }, void 0, false)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 326,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 222,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXhwZXJpbWVudGF0aW9ucy9hcmRlbm5lcy1kZW1vL2luZGV4LmpzIl0sIm5hbWVzIjpbInJlZHVjZXIiLCJyZWR1Y2VyRmFjdG9yeSIsIkFyZGVubmVzIiwicm91dGVyIiwidXNlUm91dGVyIiwiaXNEZW1vIiwicGF0aG5hbWUiLCJpbmNsdWRlcyIsImRldk1vZGUiLCJvcmdhSUQiLCJwcm9jZXNzIiwiUkRWX1NPTElEQVJJVEVTX1VSTCIsInVzZXJVcmwiLCJ1c2VTdGF0ZSIsImRldkZpbGUiLCJzZXREZXZGaWxlIiwidXNlUmVkdWNlciIsImluaXRSZWR1Y2VyIiwicnVucyIsImRpc3BhdGNoUnVucyIsInVzZXJzRGF0YSIsInNldFVzZXJzRGF0YSIsInVzZXJTdGF0dXNDaGVja2VkIiwic2V0VXNlclN0YXR1c0NoZWNrZWQiLCJmaWxlU2l6ZSIsInNldEZpbGVTaXplIiwiaXNMb2dnZWQiLCJzZXRJc0xvZ2dlZCIsInRva2VuSWQiLCJ1aWQiLCJjbGllbnQiLCJ0b2tlbiIsInNldFRva2VuIiwidXNlRWZmZWN0IiwiaGFuZGxlRmlsZSIsImZvckVhY2giLCJ1c2VyIiwidXNlckluZGV4IiwiY2hlY2tVc2VySW52aXRhdGlvblN0YXR1cyIsIndyaXRlRmlsZSIsIm91dFdvcmtib29rIiwiWExTWCIsImJvb2tfbmV3Iiwib3V0V29ya3NoZWV0IiwianNvbl90b19zaGVldCIsImJvb2tfYXBwZW5kX3NoZWV0IiwiZ2V0RGF0ZVRpbWVTdHJpbmciLCJEYXRlIiwiZ2VuZXJhdGVJbnZpdGF0aW9uVXJsIiwidXNlcklkIiwiaW52aXRhdGlvblVybCIsImFwcEZldGNoIiwicmVzdWx0IiwibmV3VXNlcnNEYXRhIiwiaW52aXRhdGlvbl91cmwiLCJpbnZpdGF0aW9uX3Rva2VuIiwiZ2V0RnJlbmNoRm9ybWF0RGF0ZVN0cmluZyIsImdldFVzZXIiLCJnZXRVc2VyVXJsIiwiaW52aXRhdGlvbl9jcmVhdGVkX2F0IiwiaW52aXRhdGlvbl9kYXRlIiwic3Vic3RyaW5nIiwiaW52aXRhdGlvbl9hY2NlcHRlZF9hdCIsImluc2NyaXB0aW9uX2RhdGUiLCJpbnZhbGlkT3JUYWtlbk1haWwiLCJ1c2VyRGF0YSIsImZpcnN0X25hbWUiLCJ0b1VwcGVyQ2FzZSIsImxhc3RfbmFtZSIsImJpcnRoX2RhdGUiLCJhcHBsaWNhdGlvbkRhdGVUb1N0cmluZyIsInN0cmluZ1RvRGF0ZSIsImFkZHJlc3MiLCJlcnJvcnMiLCJlbWFpbCIsImlkIiwiYWxlcnQiLCJjcmVhdGVVc2VyIiwid2l0aEVtYWlsIiwicGhvbmVfbnVtYmVyIiwicmVwbGFjZSIsImNhaXNzZV9hZmZpbGlhdGlvbiIsImFmZmlsaWF0aW9uX251bWJlciIsIm9yZ2FuaXNhdGlvbl9pZHMiLCJKU09OIiwic3RyaW5naWZ5IiwiZXJyb3IiLCJiYXNlIiwiaGFuZGxlTG9naW4iLCJmaWxlIiwic2l6ZSIsInN0YXJ0X3RpbWUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJldmVudCIsImZpbGVEYXRhIiwiVWludDhBcnJheSIsInRhcmdldCIsInhscyIsInR5cGUiLCJjZWxsRGF0ZXMiLCJkYXRlTkYiLCJ3b3Jrc2hlZXQiLCJTaGVldHMiLCJTaGVldE5hbWVzIiwianNvbkRhdGEiLCJzaGVldF90b19qc29uIiwiYmxhbmtyb3dzIiwicmF3IiwiZGVmdmFsIiwibWFwIiwiT2JqZWN0Iiwia2V5cyIsInJlZHVjZSIsInJlcyIsImtleSIsIml0ZW0iLCJ0aW1lc3RhbXAiLCJ0b0lTT1N0cmluZyIsInNsaWNlIiwiZHVyYXRpb24iLCJmaWxlbmFtZSIsIm5hbWUiLCJmaWxlTGluZXMiLCJsZW5ndGgiLCJyZWFkQXNBcnJheUJ1ZmZlciIsInN0eWxlcyIsImNvbnRhaW5lciIsIm1haW4iLCJ0aXRsZSIsImNyZWF0ZSIsInN1YnRpdGxlIiwiZGVzY3JpcHRpb24iLCJyZXZlcnNlIiwiaW5kZXgiLCJjZW50ZXIiLCJidXR0b24iLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHQywyRUFBYyxDQUFDLGdEQUFELENBQTlCO0FBRWUsU0FBU0MsUUFBVCxHQUFvQjtBQUFBOztBQUFBOztBQUNqQyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHRixNQUFNLENBQUNHLFFBQVAsQ0FBZ0JDLFFBQWhCLENBQXlCLE1BQXpCLENBQWY7QUFDQSxNQUFNQyxPQUFPLE9BQWI7QUFDQSxNQUFNQyxNQUFNLEdBQUdKLE1BQU0sR0FDakJLLEdBRGlCLEdBRWpCQSxHQUZKO0FBSUEsTUFBTUMsbUJBQW1CLEdBQUdOLE1BQU0sR0FDOUJLLHVCQUQ4QixHQUU5QkEsdUJBRko7QUFHQSxNQUFNRSxPQUFPLEdBQUdELG1CQUFtQixHQUFHLGVBQXRDOztBQVhpQyxrQkFhSEUsc0RBQVEsQ0FBQyxJQUFELENBYkw7QUFBQSxNQWExQkMsT0FiMEI7QUFBQSxNQWFqQkMsVUFiaUI7O0FBQUEsb0JBY0pDLHdEQUFVLENBQUNoQixPQUFELEVBQVUsRUFBVixFQUFjaUIsZ0VBQWQsQ0FkTjtBQUFBLE1BYzFCQyxJQWQwQjtBQUFBLE1BY3BCQyxZQWRvQjs7QUFBQSxtQkFlQ04sc0RBQVEsQ0FBQyxJQUFELENBZlQ7QUFBQSxNQWUxQk8sU0FmMEI7QUFBQSxNQWVmQyxZQWZlOztBQUFBLG1CQWdCaUJSLHNEQUFRLENBQUMsS0FBRCxDQWhCekI7QUFBQSxNQWdCMUJTLGlCQWhCMEI7QUFBQSxNQWdCUEMsb0JBaEJPOztBQUFBLG1CQWlCRFYsc0RBQVEsQ0FBQyxDQUFELENBakJQO0FBQUEsTUFpQjFCVyxRQWpCMEI7QUFBQSxNQWlCaEJDLFdBakJnQjs7QUFBQSxtQkFrQkRaLHNEQUFRLENBQUMsS0FBRCxDQWxCUDtBQUFBLE1Ba0IxQmEsUUFsQjBCO0FBQUEsTUFrQmhCQyxXQWxCZ0I7O0FBQUEsbUJBbUJQZCxzREFBUSxDQUFDO0FBQ2pDZSxXQUFPLEVBQUUsRUFEd0I7QUFFakNDLE9BQUcsRUFBRSxFQUY0QjtBQUdqQ0MsVUFBTSxFQUFFO0FBSHlCLEdBQUQsQ0FuQkQ7QUFBQSxNQW1CMUJDLEtBbkIwQjtBQUFBLE1BbUJuQkMsUUFuQm1COztBQXlCakNDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUluQixPQUFKLEVBQWE7QUFDWG9CLGdCQUFVLENBQUNwQixPQUFELENBQVY7QUFDRDtBQUNGLEdBSlEsRUFJTixDQUFDQSxPQUFELENBSk0sQ0FBVDtBQU1BbUIseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSWIsU0FBUyxJQUFJRSxpQkFBaUIsS0FBSyxLQUF2QyxFQUE4QztBQUM1Q0YsZUFBUyxDQUFDZSxPQUFWLENBQWtCLFVBQUNDLElBQUQsRUFBT0MsU0FBUCxFQUFxQjtBQUNyQyxZQUFJRCxJQUFJLENBQUMsUUFBRCxDQUFKLElBQWtCLEVBQXRCLEVBQTBCO0FBQ3hCRSxtQ0FBeUIsQ0FBQ0YsSUFBSSxDQUFDLFFBQUQsQ0FBTCxFQUFpQkMsU0FBakIsQ0FBekI7QUFDRDtBQUNGLE9BSkQ7QUFLQWQsMEJBQW9CLENBQUMsSUFBRCxDQUFwQjtBQUNEO0FBQ0YsR0FUUSxFQVNOLENBQUNILFNBQUQsQ0FUTSxDQUFUOztBQVdBLE1BQU1tQixTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3RCLFFBQU1DLFdBQVcsR0FBR0MsMENBQUEsQ0FBV0MsUUFBWCxFQUFwQjtBQUNBLFFBQU1DLFlBQVksR0FBR0YsMENBQUEsQ0FBV0csYUFBWCxDQUF5QnhCLFNBQXpCLENBQXJCO0FBQ0FxQiw4Q0FBQSxDQUFXSSxpQkFBWCxDQUE2QkwsV0FBN0IsRUFBMENHLFlBQTFDLEVBQXdELGFBQXhELEVBSHNCLENBSXRCO0FBQ0E7O0FBQ0FGLGtEQUFBLENBQWVELFdBQWYseUJBQTRDTSxxRUFBaUIsQ0FBQyxJQUFJQyxJQUFKLEVBQUQsQ0FBN0Q7QUFDRCxHQVBEOztBQTFDaUMsV0FtRGxCQyxxQkFuRGtCO0FBQUE7QUFBQTs7QUFBQTtBQUFBLDhNQW1EakMsa0JBQXFDQyxNQUFyQyxFQUE2Q1osU0FBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1FhLDJCQURSLEdBQ3dCdEMsT0FBTyxjQUFPcUMsTUFBUCxZQUQvQjtBQUFBO0FBQUEscUJBRXVCRSwrREFBUSxDQUFDRCxhQUFELEVBQWdCbkIsS0FBaEIsQ0FGL0I7O0FBQUE7QUFFUXFCLG9CQUZSO0FBSU1DLDBCQUpOLGdHQUl5QmpDLFNBSnpCOztBQUtFLGtCQUFJZ0MsTUFBTSxDQUFDRSxjQUFYLEVBQTJCO0FBQ3pCRCw0QkFBWSxDQUFDaEIsU0FBRCxDQUFaLENBQXdCLG1CQUF4QixJQUErQ2UsTUFBTSxDQUFDRSxjQUF0RDtBQUNELGVBRkQsTUFFTyxJQUFJRixNQUFNLENBQUNHLGdCQUFYLEVBQTZCO0FBQ2xDRiw0QkFBWSxDQUFDaEIsU0FBRCxDQUFaLENBQXdCLG1CQUF4QixJQUErQ2UsTUFBTSxDQUFDRyxnQkFBdEQ7QUFDRDs7QUFDREYsMEJBQVksQ0FBQ2hCLFNBQUQsQ0FBWixDQUF3QixtQkFBeEIsSUFBK0NtQiw2RUFBeUIsQ0FBQyxJQUFJVCxJQUFKLEVBQUQsQ0FBeEU7QUFDQTFCLDBCQUFZLENBQUNnQyxZQUFELENBQVo7O0FBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FuRGlDO0FBQUE7QUFBQTs7QUFBQSxXQWlFbEJJLE9BakVrQjtBQUFBO0FBQUE7O0FBQUE7QUFBQSxnTUFpRWpDLGtCQUF1QlIsTUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1FTLHdCQURSLEdBQ3FCOUMsT0FBTyxjQUFPcUMsTUFBUCxDQUQ1QjtBQUFBO0FBQUEscUJBRWVFLCtEQUFRLENBQUNPLFVBQUQsRUFBYTNCLEtBQWIsQ0FGdkI7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWpFaUM7QUFBQTtBQUFBOztBQUFBLFdBc0VsQk8seUJBdEVrQjtBQUFBO0FBQUE7O0FBQUE7QUFBQSxrTkFzRWpDLGtCQUF5Q1csTUFBekMsRUFBaURaLFNBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ3VCb0IsT0FBTyxDQUFDUixNQUFELENBRDlCOztBQUFBO0FBQ1FHLG9CQURSO0FBR01DLDBCQUhOLGdHQUd5QmpDLFNBSHpCOztBQUlFLGtCQUFJZ0MsTUFBTSxDQUFDaEIsSUFBUCxDQUFZdUIscUJBQWhCLEVBQXVDO0FBQ2pDQywrQkFEaUMsR0FDZlIsTUFBTSxDQUFDaEIsSUFBUCxDQUFZdUIscUJBQVosQ0FBa0M7QUFBbEMsaUJBQ25CRSxTQURtQixDQUNULENBRFMsRUFDTixFQURNLENBRGUsRUFFaEI7O0FBQ3JCRCwrQkFBZSxHQUFHLElBQUliLElBQUosQ0FBU2EsZUFBVCxDQUFsQixDQUhxQyxDQUdROztBQUM3Q1AsNEJBQVksQ0FBQ2hCLFNBQUQsQ0FBWixDQUF3QixtQkFBeEIsSUFBK0NtQiw2RUFBeUIsQ0FBQ0ksZUFBRCxDQUF4RTtBQUNEOztBQUNELGtCQUFJUixNQUFNLENBQUNoQixJQUFQLENBQVkwQixzQkFBaEIsRUFBd0M7QUFDbENDLGdDQURrQyxHQUNmWCxNQUFNLENBQUNoQixJQUFQLENBQVkwQixzQkFBWixDQUFtQztBQUFuQyxpQkFDcEJELFNBRG9CLENBQ1YsQ0FEVSxFQUNQLEVBRE8sQ0FEZSxFQUVqQjs7QUFDckJFLGdDQUFnQixHQUFHLElBQUloQixJQUFKLENBQVNnQixnQkFBVCxDQUFuQixDQUhzQyxDQUdTOztBQUMvQ1YsNEJBQVksQ0FBQ2hCLFNBQUQsQ0FBWixDQUF3QixvQkFBeEIsSUFBZ0RtQiw2RUFBeUIsQ0FBQ08sZ0JBQUQsQ0FBekU7QUFDRDs7QUFDRDFDLDBCQUFZLENBQUNnQyxZQUFELENBQVo7O0FBaEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBdEVpQztBQUFBO0FBQUE7O0FBQUEsV0F5RmxCVyxrQkF6RmtCO0FBQUE7QUFBQTs7QUFBQTtBQUFBLDJNQXlGakMsa0JBQWtDQyxRQUFsQyxFQUE0QzVCLFNBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF1RFksb0JBQXZELDhEQUFnRSxJQUFoRTs7QUFBQSxvQkFDTUEsTUFBTSxJQUFJLElBRGhCO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEscUJBRXlCUSxPQUFPLENBQUNSLE1BQUQsQ0FGaEM7O0FBQUE7QUFFVUcsb0JBRlY7O0FBSUksa0JBQ0VBLE1BQU0sSUFDTkEsTUFBTSxDQUFDaEIsSUFBUCxDQUFZOEIsVUFBWixDQUF1QkMsV0FBdkIsT0FBeUNGLFFBQVEsQ0FBQyxRQUFELENBQVIsQ0FBbUJFLFdBQW5CLEVBRHpDLElBRUFmLE1BQU0sQ0FBQ2hCLElBQVAsQ0FBWWdDLFNBQVosQ0FBc0JELFdBQXRCLE9BQXdDRixRQUFRLENBQUMsS0FBRCxDQUFSLENBQWdCRSxXQUFoQixFQUZ4QyxJQUdBZixNQUFNLENBQUNoQixJQUFQLENBQVlpQyxVQUFaLEtBQTJCQywyRUFBdUIsQ0FBQ0MsZ0VBQVksQ0FBQ04sUUFBUSxDQUFDLG1CQUFELENBQVQsQ0FBYixDQUhsRCxJQUlBYixNQUFNLENBQUNoQixJQUFQLENBQVlvQyxPQUFaLENBQW9CTCxXQUFwQixPQUNFRixRQUFRLENBQUMsU0FBRCxDQUFSLENBQW9CRSxXQUFwQixLQUNFLEtBREYsR0FFRUYsUUFBUSxDQUFDLGFBQUQsQ0FBUixDQUF3QkUsV0FBeEIsRUFGRixHQUdFLEdBSEYsR0FJRUYsUUFBUSxDQUFDLE9BQUQsQ0FBUixDQUFrQkUsV0FBbEIsRUFWTixFQVdFO0FBQ0lkLDRCQURKLGdHQUN1QmpDLFNBRHZCO0FBRUFpQyw0QkFBWSxDQUFDaEIsU0FBRCxDQUFaLENBQXdCLFFBQXhCLElBQW9DWSxNQUFwQztBQUNBNUIsNEJBQVksQ0FBQ2dDLFlBQUQsQ0FBWjtBQUNBZix5Q0FBeUIsQ0FBQ2MsTUFBTSxDQUFDcUIsTUFBUCxDQUFjQyxLQUFkLENBQW9CLENBQXBCLEVBQXVCQyxFQUF4QixFQUE0QnRDLFNBQTVCLENBQXpCO0FBQ0F1QyxxQkFBSyxDQUFDLDJDQUFELENBQUw7QUFDRCxlQWpCRCxNQWlCTztBQUNMQywwQkFBVSxDQUFDWixRQUFELEVBQVc1QixTQUFYLEVBQXNCLEtBQXRCLENBQVY7QUFDRDs7QUF2Qkw7QUFBQTs7QUFBQTtBQXlCSXdDLHdCQUFVLENBQUNaLFFBQUQsRUFBVzVCLFNBQVgsRUFBc0IsS0FBdEIsQ0FBVjs7QUF6Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0F6RmlDO0FBQUE7QUFBQTs7QUFBQSxXQXNIbEJ3QyxVQXRIa0I7QUFBQTtBQUFBOztBQUFBO0FBQUEsbU1Bc0hqQyxrQkFBMEJaLFFBQTFCLEVBQW9DNUIsU0FBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQ3lDLHVCQUEvQyw4REFBMkQsSUFBM0Q7QUFDUU4scUJBRFIsR0FDa0JQLFFBQVEsQ0FBQyxTQUFELENBQVIsR0FBc0IsS0FBdEIsR0FBOEJBLFFBQVEsQ0FBQyxhQUFELENBQXRDLEdBQXdELEdBQXhELEdBQThEQSxRQUFRLENBQUMsT0FBRCxDQUR4RjtBQUdNN0Isa0JBSE4sR0FHYTtBQUNUOEIsMEJBQVUsRUFBRUQsUUFBUSxDQUFDLFFBQUQsQ0FEWDtBQUVURyx5QkFBUyxFQUFFSCxRQUFRLENBQUMsS0FBRCxDQUZWO0FBR1RjLDRCQUFZLEVBQUVkLFFBQVEsQ0FBQyxXQUFELENBQVIsQ0FBc0JlLE9BQXRCLENBQThCLE1BQTlCLEVBQXNDLEVBQXRDLENBSEw7QUFJVFgsMEJBQVUsRUFBRUUsZ0VBQVksQ0FBQ04sUUFBUSxDQUFDLG1CQUFELENBQVQsQ0FKZjtBQUtUTyx1QkFBTyxFQUFFQSxPQUxBO0FBTVRTLGtDQUFrQixFQUFFLEtBTlg7QUFPVEMsa0NBQWtCLEVBQUVqQixRQUFRLENBQUMsT0FBRCxDQVBuQjtBQVFUa0IsZ0NBQWdCLEVBQUUsQ0FBQzFFLE1BQUQ7QUFSVCxlQUhiO0FBYUUsa0JBQUlxRSxTQUFTLEtBQUssSUFBbEIsRUFBd0IxQyxJQUFJLENBQUNzQyxLQUFMLEdBQWFULFFBQVEsQ0FBQyxNQUFELENBQXJCO0FBYjFCO0FBQUEscUJBZXVCZCwrREFBUSxDQUFDdkMsT0FBRCxFQUFVbUIsS0FBVixFQUFpQixNQUFqQixFQUF5QnFELElBQUksQ0FBQ0MsU0FBTCxDQUFlakQsSUFBZixDQUF6QixDQWYvQjs7QUFBQTtBQWVRZ0Isb0JBZlI7QUFpQk1DLDBCQWpCTixnR0FpQnlCakMsU0FqQnpCOztBQWtCRSxrQkFBSWdDLE1BQU0sQ0FBQ2hCLElBQVgsRUFBaUI7QUFDZmlCLDRCQUFZLENBQUNoQixTQUFELENBQVosQ0FBd0IsUUFBeEIsSUFBb0NlLE1BQU0sQ0FBQ2hCLElBQVAsQ0FBWXVDLEVBQWhEO0FBQ0F0RCw0QkFBWSxDQUFDZ0MsWUFBRCxDQUFaO0FBQ0FMLHFDQUFxQixDQUFDSSxNQUFNLENBQUNoQixJQUFQLENBQVl1QyxFQUFiLEVBQWlCdEMsU0FBakIsQ0FBckI7QUFDRCxlQUpELE1BSU8sSUFBSWUsTUFBTSxDQUFDcUIsTUFBUCxJQUFpQnJCLE1BQU0sQ0FBQ3FCLE1BQVAsQ0FBY0MsS0FBL0IsSUFBd0N0QixNQUFNLENBQUNxQixNQUFQLENBQWNDLEtBQWQsQ0FBb0IsQ0FBcEIsRUFBdUJZLEtBQXZCLEtBQWlDLE9BQTdFLEVBQXNGO0FBQzNGdEIsa0NBQWtCLENBQUNDLFFBQUQsRUFBVzVCLFNBQVgsRUFBc0JlLE1BQU0sQ0FBQ3FCLE1BQVAsQ0FBY0MsS0FBZCxDQUFvQixDQUFwQixFQUF1QkMsRUFBN0MsQ0FBbEI7QUFDRCxlQUZNLE1BRUEsSUFBSXZCLE1BQU0sQ0FBQ3FCLE1BQVAsSUFBaUJyQixNQUFNLENBQUNxQixNQUFQLENBQWNDLEtBQS9CLElBQXdDdEIsTUFBTSxDQUFDcUIsTUFBUCxDQUFjQyxLQUFkLENBQW9CLENBQXBCLEVBQXVCWSxLQUF2QixLQUFpQyxTQUE3RSxFQUF3RjtBQUM3RnRCLGtDQUFrQixDQUFDQyxRQUFELEVBQVc1QixTQUFYLENBQWxCO0FBQ0QsZUFGTSxNQUVBLElBQUllLE1BQU0sQ0FBQ3FCLE1BQVAsSUFBaUJyQixNQUFNLENBQUNxQixNQUFQLENBQWNQLFVBQS9CLElBQTZDZCxNQUFNLENBQUNxQixNQUFQLENBQWNQLFVBQWQsQ0FBeUIsQ0FBekIsRUFBNEJvQixLQUE1QixLQUFzQyxjQUF2RixFQUF1RztBQUM1R1YscUJBQUssQ0FBQyx5RkFBRCxDQUFMO0FBQ0QsZUFGTSxNQUVBLElBQUl4QixNQUFNLENBQUNxQixNQUFQLElBQWlCckIsTUFBTSxDQUFDcUIsTUFBUCxDQUFjLENBQWQsQ0FBakIsSUFBcUNyQixNQUFNLENBQUNxQixNQUFQLENBQWMsQ0FBZCxFQUFpQmMsSUFBakIsS0FBMEIsV0FBbkUsRUFBZ0Y7QUFDckZYLHFCQUFLLENBQUMsaUZBQUQsQ0FBTDtBQUNELGVBRk0sTUFFQSxJQUFJeEIsTUFBTSxDQUFDcUIsTUFBUCxJQUFpQnJCLE1BQU0sQ0FBQ3FCLE1BQVAsQ0FBYyxDQUFkLENBQXJCLEVBQXVDO0FBQzVDRyxxQkFBSyxDQUFDeEIsTUFBTSxDQUFDcUIsTUFBUCxDQUFjLENBQWQsQ0FBRCxDQUFMO0FBQ0Q7O0FBaENIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBdEhpQztBQUFBO0FBQUE7O0FBeUpqQyxNQUFNZSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDNUQsT0FBRCxFQUFVQyxHQUFWLEVBQWVDLE1BQWYsRUFBMEI7QUFDNUNFLFlBQVEsaUNBQU1ELEtBQU47QUFBYUgsYUFBTyxFQUFFQSxPQUF0QjtBQUErQkMsU0FBRyxFQUFFQSxHQUFwQztBQUF5Q0MsWUFBTSxFQUFFQTtBQUFqRCxPQUFSO0FBQ0FILGVBQVcsQ0FBQyxJQUFELENBQVg7QUFDRCxHQUhEOztBQUtBLE1BQU1PLFVBQVU7QUFBQSxnTUFBRyxpQkFBTXVELElBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2pCLGtCQUFJakYsT0FBTyxJQUFJaUYsSUFBSSxJQUFJM0UsT0FBdkIsRUFBZ0M7QUFDOUJDLDBCQUFVLENBQUMwRSxJQUFELENBQVY7QUFDRDs7QUFDRGhFLHlCQUFXLENBQUNnRSxJQUFJLENBQUNDLElBQU4sQ0FBWDtBQUNNQyx3QkFMVyxHQUtFLElBQUk1QyxJQUFKLEVBTEY7QUFBQTtBQUFBLHFCQU9YLElBQUk2QyxPQUFKLENBQVksVUFBQUMsT0FBTyxFQUFJO0FBQzNCLG9CQUFJQyxNQUFNLEdBQUcsSUFBSUMsVUFBSixFQUFiOztBQUNBRCxzQkFBTSxDQUFDRSxNQUFQLEdBQWdCLFVBQVVDLEtBQVYsRUFBaUI7QUFDL0Isc0JBQU1DLFFBQVEsR0FBRyxJQUFJQyxVQUFKLENBQWVGLEtBQUssQ0FBQ0csTUFBTixDQUFhaEQsTUFBNUIsQ0FBakI7QUFDQSxzQkFBTWlELEdBQUcsR0FBRzVELHlDQUFBLENBQVV5RCxRQUFWLEVBQW9CO0FBQUVJLHdCQUFJLEVBQUUsT0FBUjtBQUFpQkMsNkJBQVMsRUFBRSxJQUE1QjtBQUFrQ0MsMEJBQU0sRUFBRTtBQUExQyxtQkFBcEIsQ0FBWjtBQUNBLHNCQUFNQyxTQUFTLEdBQUdKLEdBQUcsQ0FBQ0ssTUFBSixDQUFXTCxHQUFHLENBQUNNLFVBQUosQ0FBZSxDQUFmLENBQVgsQ0FBbEI7QUFFQSxzQkFBSUMsUUFBUSxHQUFHbkUsMENBQUEsQ0FBV29FLGFBQVgsQ0FBeUJKLFNBQXpCLEVBQW9DO0FBQ2pESyw2QkFBUyxFQUFFLEtBRHNDO0FBRWpEQyx1QkFBRyxFQUFFLEtBRjRDO0FBR2pEQywwQkFBTSxFQUFFO0FBSHlDLG1CQUFwQyxDQUFmLENBTCtCLENBVy9COztBQUNBSiwwQkFBUSxHQUFHQSxRQUFRLENBQUNLLEdBQVQsQ0FBYSxVQUFBaEQsUUFBUSxFQUFJO0FBQ2xDLDJCQUFPLDZGQUFJaUQsTUFBTSxDQUFDQyxJQUFQLENBQVlsRCxRQUFaLENBQUosRUFBMkJtRCxNQUEzQixDQUFrQyxVQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBYztBQUNyREQseUJBQUcsQ0FBQ0MsR0FBRyxDQUFDdEMsT0FBSixDQUFZLFVBQVosRUFBd0IsR0FBeEIsQ0FBRCxDQUFILEdBQW9DZixRQUFRLENBQUNxRCxHQUFELENBQTVDO0FBQ0EsNkJBQU9ELEdBQVA7QUFDRCxxQkFITSxFQUdKLEVBSEksQ0FBUDtBQUlELG1CQUxVLENBQVg7QUFPQTlGLHNDQUFvQixDQUFDLEtBQUQsQ0FBcEI7QUFDQUYsOEJBQVksQ0FBQ3VGLFFBQUQsQ0FBWjtBQUNBekYsOEJBQVksQ0FBQztBQUNYbUYsd0JBQUksRUFBRSxRQURLO0FBRVhpQix3QkFBSSxFQUFFO0FBQ0pDLCtCQUFTLEVBQUUsSUFBSXpFLElBQUosR0FBVzBFLFdBQVgsR0FBeUJDLEtBQXpCLENBQStCLENBQS9CLEVBQWtDLEVBQWxDLENBRFA7QUFFSkMsOEJBQVEsRUFBRSxJQUFJNUUsSUFBSixLQUFhNEMsVUFGbkI7QUFHSmlDLDhCQUFRLEVBQUVuQyxJQUFJLENBQUNvQyxJQUhYO0FBSUpyRyw4QkFBUSxFQUFFaUUsSUFBSSxDQUFDQyxJQUpYO0FBS0pvQywrQkFBUyxFQUFFbEIsUUFBUSxDQUFDbUI7QUFMaEI7QUFGSyxtQkFBRCxDQUFaO0FBVUFsQyx5QkFBTztBQUNSLGlCQWhDRDs7QUFpQ0FDLHNCQUFNLENBQUNrQyxpQkFBUCxDQUF5QnZDLElBQXpCO0FBQ0QsZUFwQ0ssQ0FQVzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFWdkQsVUFBVTtBQUFBO0FBQUE7QUFBQSxLQUFoQjs7QUE4Q0Esc0JBQ0UscUVBQUMsMERBQUQ7QUFBUSxhQUFTLEVBQUUrRiwrREFBTSxDQUFDQyxTQUExQjtBQUFxQyxjQUFVLEVBQUVoRyxVQUFqRDtBQUFBLDJCQUNFO0FBQU0sZUFBUyxFQUFFK0YsK0RBQU0sQ0FBQ0UsSUFBeEI7QUFBQSw4QkFDRTtBQUFJLGlCQUFTLEVBQUVGLCtEQUFNLENBQUNHLEtBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsRUFHRyxDQUFDMUcsUUFBRCxpQkFDQztBQUFLLGlCQUFTLEVBQUV1RywrREFBTSxDQUFDSSxNQUF2QjtBQUFBLCtCQUNFLHFFQUFDLDhEQUFEO0FBQVcscUJBQVcsRUFBRTdDLFdBQXhCO0FBQXFDLGdCQUFNLEVBQUU3RTtBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpKLEVBU0dlLFFBQVEsaUJBQ1A7QUFBQSxnQ0FDRSxxRUFBQywrREFBRDtBQUNFLG9CQUFVLEVBQUVRLFVBRGQ7QUFFRSxrQkFBUSxFQUFFVixRQUZaO0FBR0Usd0JBQWMsRUFBRTtBQUhsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLEVBT0dKLFNBQVMsaUJBQ1I7QUFBQSxrQ0FDRTtBQUFJLHFCQUFTLEVBQUU2RywrREFBTSxDQUFDSyxRQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixFQUdHbEgsU0FBUyxDQUFDMkcsTUFBVixJQUFvQixDQUFwQixpQkFDQztBQUFHLHFCQUFTLEVBQUVFLCtEQUFNLENBQUNNLFdBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpKLEVBT0duSCxTQUFTLENBQUMyRyxNQUFWLEdBQW1CLENBQW5CLGlCQUNDO0FBQUEsb0NBQ0U7QUFBQSxzQ0FDRTtBQUFBLHdDQUNFO0FBQUEsMENBQ0U7QUFBSSwyQkFBTyxFQUFDLEdBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREYsZUFFRTtBQUFJLDJCQUFPLEVBQUMsR0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFGRixlQUdFO0FBQUksMkJBQU8sRUFBQyxHQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUhGLGVBSUU7QUFBSSwyQkFBTyxFQUFDLEdBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBSkYsZUFLRTtBQUFJLDJCQUFPLEVBQUMsR0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFMRixlQU1FO0FBQUksMkJBQU8sRUFBQyxHQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQU5GLGVBT0U7QUFBSSwyQkFBTyxFQUFDLEdBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURGLGVBVUU7QUFBQSwwQ0FDRTtBQUFJLDJCQUFPLEVBQUMsR0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFERixlQUVFO0FBQUksMkJBQU8sRUFBQyxHQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUZGLGVBR0U7QUFBSSwyQkFBTyxFQUFDLEdBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixlQWlCRTtBQUFBLDBCQUVHLDZGQUFJM0csU0FBSixFQUFlb0gsT0FBZixHQUF5QnZCLEdBQXpCLENBQTZCLFVBQUM3RSxJQUFELEVBQU9xRyxLQUFQO0FBQUEsc0NBQzVCLHFFQUFDLDhDQUFEO0FBQUEsOEJBQ0dyRyxJQUFJLENBQUMsTUFBRCxDQUFKLEtBQWlCLEVBQWpCLGlCQUNDO0FBQUEsOENBQ0U7QUFBSSxpQ0FBUyxFQUFFNkYsK0RBQU0sQ0FBQ1MsTUFBdEI7QUFBQSxrQ0FBK0J0RyxJQUFJLENBQUMsTUFBRDtBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQURGLGVBRUU7QUFBSSxpQ0FBUyxFQUFFNkYsK0RBQU0sQ0FBQ1MsTUFBdEI7QUFBQSxrQ0FBK0J0RyxJQUFJLENBQUMsS0FBRDtBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQUZGLGVBR0U7QUFBSSxpQ0FBUyxFQUFFNkYsK0RBQU0sQ0FBQ1MsTUFBdEI7QUFBQSxrQ0FBK0J0RyxJQUFJLENBQUMsUUFBRDtBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQUhGLGVBSUU7QUFBSSxpQ0FBUyxFQUFFNkYsK0RBQU0sQ0FBQ1MsTUFBdEI7QUFBQSxrQ0FBK0J0RyxJQUFJLENBQUMsTUFBRDtBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQUpGLGVBS0U7QUFBSSxpQ0FBUyxFQUFFNkYsK0RBQU0sQ0FBQ1MsTUFBdEI7QUFBQSxrQ0FBK0J0RyxJQUFJLENBQUMsV0FBRDtBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQUxGLEVBT0dBLElBQUksQ0FBQyxRQUFELENBQUosS0FBbUIsRUFBbkIsaUJBQ0M7QUFBSSxpQ0FBUyxFQUFFNkYsK0RBQU0sQ0FBQ1MsTUFBdEI7QUFBQSwrQ0FDRTtBQUNFLGlDQUFPLEVBQUU7QUFBQSxtQ0FBTTdELFVBQVUsQ0FBQ3pDLElBQUQsRUFBT2hCLFNBQVMsQ0FBQzJHLE1BQVYsR0FBbUJVLEtBQW5CLEdBQTJCLENBQWxDLENBQWhCO0FBQUEsMkJBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQVJKLEVBZ0JHckcsSUFBSSxDQUFDLFFBQUQsQ0FBSixLQUFtQixFQUFuQixpQkFDQztBQUFJLGlDQUFTLEVBQUU2RiwrREFBTSxDQUFDUyxNQUF0QjtBQUFBLGtDQUErQnRHLElBQUksQ0FBQyxRQUFEO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBakJKLGVBbUJFO0FBQUksaUNBQVMsRUFBRTZGLCtEQUFNLENBQUNTLE1BQXRCO0FBQUEsa0NBQStCdEcsSUFBSSxDQUFDLG1CQUFEO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBbkJGLGVBb0JFO0FBQUksaUNBQVMsRUFBRTZGLCtEQUFNLENBQUNTLE1BQXRCO0FBQUEsa0NBQStCdEcsSUFBSSxDQUFDLG9CQUFEO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBcEJGLEVBcUJHQSxJQUFJLENBQUMsUUFBRCxDQUFKLEtBQW1CLEVBQW5CLGlCQUNDO0FBQUksaUNBQVMsRUFBRTZGLCtEQUFNLENBQUNTLE1BQXRCO0FBQUEsK0NBQ0U7QUFDRSxpQ0FBTyxFQUFFO0FBQUEsbUNBQ1AxRixxQkFBcUIsQ0FDbkJaLElBQUksQ0FBQyxRQUFELENBRGUsRUFFbkJoQixTQUFTLENBQUMyRyxNQUFWLEdBQW1CVSxLQUFuQixHQUEyQixDQUZSLENBRGQ7QUFBQSwyQkFEWDtBQUFBLHFDQVFHckcsSUFBSSxDQUFDLG1CQUFELENBQUosS0FBOEIsRUFBOUIsSUFBb0Msc0JBUnZDLEVBU0dBLElBQUksQ0FBQyxtQkFBRCxDQUFKLEtBQThCLEVBQTlCLElBQW9DLG9CQVR2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQXRCSixFQW9DR0EsSUFBSSxDQUFDLFFBQUQsQ0FBSixLQUFtQixFQUFuQixpQkFBeUI7QUFBSSxpQ0FBUyxFQUFFNkYsK0RBQU0sQ0FBQ1M7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFwQzVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKLHFCQUFlRCxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRDRCO0FBQUEsaUJBQTdCO0FBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBbUVFO0FBQVEsdUJBQVMsRUFBRVIsK0RBQU0sQ0FBQ1UsTUFBMUI7QUFBa0MscUJBQU8sRUFBRXBHLFNBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQW5FRjtBQUFBLDBCQVJKO0FBQUEsd0JBUko7QUFBQSxzQkFWSixlQXVHRSxxRUFBQywyREFBRDtBQUNFLGVBQU8sRUFBQyw2QkFEVjtBQUVFLGdCQUFRLEVBQUMsc0RBRlg7QUFHRSxZQUFJLGVBQ0Y7QUFBQSxpQ0FDRTtBQUFHLHFCQUFTLEVBQUUwRiwrREFBTSxDQUFDVyxJQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXZHRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF5SEQ7O0dBclV1QjFJLFE7VUFDUEUscUQ7OztLQURPRixRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2V4cGVyaW1lbnRhdGlvbnMvYXJkZW5uZXMtZGVtby5mOTI2ZWQ4ZGFmYzQzNmIxOTFiNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnJhZ21lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZHVjZXIgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0ICogYXMgWExTWCBmcm9tIFwieGxzeFwiO1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2xheW91dFwiO1xuaW1wb3J0IEZpbGVIYW5kbGVyIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2ZpbGVIYW5kbGVyXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2Zvb3RlclwiO1xuaW1wb3J0IExvZ2luRm9ybSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9sb2dpbkZvcm1cIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uLy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcblxuaW1wb3J0IHsgYXBwRmV0Y2ggfSBmcm9tIFwiLi4vLi4vLi4vbGliL2FwcEZldGNoXCI7XG5pbXBvcnQgeyBpbml0UmVkdWNlciwgcmVkdWNlckZhY3RvcnkgfSBmcm9tIFwiLi4vLi4vLi4vbGliL3JlZHVjZXJGYWN0b3J5XCI7XG5pbXBvcnQgeyBhcHBsaWNhdGlvbkRhdGVUb1N0cmluZywgZ2V0RGF0ZVRpbWVTdHJpbmcsIGdldEZyZW5jaEZvcm1hdERhdGVTdHJpbmcsIHN0cmluZ1RvRGF0ZSB9IGZyb20gXCIuLi8uLi8uLi9saWIvZGF0ZXNcIjtcblxuY29uc3QgcmVkdWNlciA9IHJlZHVjZXJGYWN0b3J5KFwiRXhww6lyaW1lbnRhdGlvbiBBcmRlbm5lcyAtIENOQUYgLSBCw6luw6lmaWNpYWlyZVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXJkZW5uZXMoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBpc0RlbW8gPSByb3V0ZXIucGF0aG5hbWUuaW5jbHVkZXMoXCJkZW1vXCIpO1xuICBjb25zdCBkZXZNb2RlID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT0gXCJkZXZlbG9wbWVudFwiO1xuICBjb25zdCBvcmdhSUQgPSBpc0RlbW9cbiAgICA/IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX09SR0FOSVNBVElPTl9JRF9ERU1PXG4gICAgOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19PUkdBTklTQVRJT05fSURfUFJPRDtcblxuICBjb25zdCBSRFZfU09MSURBUklURVNfVVJMID0gaXNEZW1vXG4gICAgPyBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19SRFZfU09MSURBUklURVNfREVNT19VUkxcbiAgICA6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1JEVl9TT0xJREFSSVRFU19QUk9EX1VSTDtcbiAgY29uc3QgdXNlclVybCA9IFJEVl9TT0xJREFSSVRFU19VUkwgKyBcIi9hcGkvdjEvdXNlcnNcIjtcblxuICBjb25zdCBbZGV2RmlsZSwgc2V0RGV2RmlsZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3J1bnMsIGRpc3BhdGNoUnVuc10gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIFtdLCBpbml0UmVkdWNlcik7XG4gIGNvbnN0IFt1c2Vyc0RhdGEsIHNldFVzZXJzRGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3VzZXJTdGF0dXNDaGVja2VkLCBzZXRVc2VyU3RhdHVzQ2hlY2tlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtmaWxlU2l6ZSwgc2V0RmlsZVNpemVdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtpc0xvZ2dlZCwgc2V0SXNMb2dnZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbdG9rZW4sIHNldFRva2VuXSA9IHVzZVN0YXRlKHtcbiAgICB0b2tlbklkOiBcIlwiLFxuICAgIHVpZDogXCJcIixcbiAgICBjbGllbnQ6IFwiXCIsXG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRldkZpbGUpIHtcbiAgICAgIGhhbmRsZUZpbGUoZGV2RmlsZSk7XG4gICAgfVxuICB9LCBbZGV2RmlsZV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHVzZXJzRGF0YSAmJiB1c2VyU3RhdHVzQ2hlY2tlZCA9PT0gZmFsc2UpIHtcbiAgICAgIHVzZXJzRGF0YS5mb3JFYWNoKCh1c2VyLCB1c2VySW5kZXgpID0+IHtcbiAgICAgICAgaWYgKHVzZXJbXCJJRCBSRFZcIl0gIT0gXCJcIikge1xuICAgICAgICAgIGNoZWNrVXNlckludml0YXRpb25TdGF0dXModXNlcltcIklEIFJEVlwiXSwgdXNlckluZGV4KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBzZXRVc2VyU3RhdHVzQ2hlY2tlZCh0cnVlKTtcbiAgICB9XG4gIH0sIFt1c2Vyc0RhdGFdKTtcblxuICBjb25zdCB3cml0ZUZpbGUgPSAoKSA9PiB7XG4gICAgY29uc3Qgb3V0V29ya2Jvb2sgPSBYTFNYLnV0aWxzLmJvb2tfbmV3KCk7XG4gICAgY29uc3Qgb3V0V29ya3NoZWV0ID0gWExTWC51dGlscy5qc29uX3RvX3NoZWV0KHVzZXJzRGF0YSk7XG4gICAgWExTWC51dGlscy5ib29rX2FwcGVuZF9zaGVldChvdXRXb3JrYm9vaywgb3V0V29ya3NoZWV0LCBcIkRJVkVSR0VOQ0VTXCIpO1xuICAgIC8vIFhMU1gudXRpbHMuYm9va19hcHBlbmRfc2hlZXQob3V0V29ya2Jvb2ssIHhscy5TaGVldHNbeGxzLlNoZWV0TmFtZXNbMV1dLCBcIkdSQVBISVFVRVwiKTtcbiAgICAvLyBYTFNYLnV0aWxzLmJvb2tfYXBwZW5kX3NoZWV0KG91dFdvcmtib29rLCB4bHMuU2hlZXRzW3hscy5TaGVldE5hbWVzWzJdXSwgXCJTZWxlY3Rpb24gQ09BXCIpO1xuICAgIFhMU1gud3JpdGVGaWxlKG91dFdvcmtib29rLCBgYXJkZW5uZXNfcnNhXyR7Z2V0RGF0ZVRpbWVTdHJpbmcobmV3IERhdGUoKSl9Lnhsc3hgKTtcbiAgfTtcblxuICBhc3luYyBmdW5jdGlvbiBnZW5lcmF0ZUludml0YXRpb25VcmwodXNlcklkLCB1c2VySW5kZXgpIHtcbiAgICBjb25zdCBpbnZpdGF0aW9uVXJsID0gdXNlclVybCArIGAvJHt1c2VySWR9L2ludml0ZWA7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXBwRmV0Y2goaW52aXRhdGlvblVybCwgdG9rZW4pO1xuXG4gICAgbGV0IG5ld1VzZXJzRGF0YSA9IFsuLi51c2Vyc0RhdGFdO1xuICAgIGlmIChyZXN1bHQuaW52aXRhdGlvbl91cmwpIHtcbiAgICAgIG5ld1VzZXJzRGF0YVt1c2VySW5kZXhdW1wiTGllbiBkJ2ludml0YXRpb25cIl0gPSByZXN1bHQuaW52aXRhdGlvbl91cmw7XG4gICAgfSBlbHNlIGlmIChyZXN1bHQuaW52aXRhdGlvbl90b2tlbikge1xuICAgICAgbmV3VXNlcnNEYXRhW3VzZXJJbmRleF1bXCJDb2RlIGQnaW52aXRhdGlvblwiXSA9IHJlc3VsdC5pbnZpdGF0aW9uX3Rva2VuO1xuICAgIH1cbiAgICBuZXdVc2Vyc0RhdGFbdXNlckluZGV4XVtcIkRhdGUgZCdpbnZpdGF0aW9uXCJdID0gZ2V0RnJlbmNoRm9ybWF0RGF0ZVN0cmluZyhuZXcgRGF0ZSgpKTtcbiAgICBzZXRVc2Vyc0RhdGEobmV3VXNlcnNEYXRhKTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGdldFVzZXIodXNlcklkKSB7XG4gICAgY29uc3QgZ2V0VXNlclVybCA9IHVzZXJVcmwgKyBgLyR7dXNlcklkfWA7XG4gICAgcmV0dXJuIGF3YWl0IGFwcEZldGNoKGdldFVzZXJVcmwsIHRva2VuKTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGNoZWNrVXNlckludml0YXRpb25TdGF0dXModXNlcklkLCB1c2VySW5kZXgpIHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRVc2VyKHVzZXJJZCk7XG5cbiAgICBsZXQgbmV3VXNlcnNEYXRhID0gWy4uLnVzZXJzRGF0YV07XG4gICAgaWYgKHJlc3VsdC51c2VyLmludml0YXRpb25fY3JlYXRlZF9hdCkge1xuICAgICAgbGV0IGludml0YXRpb25fZGF0ZSA9IHJlc3VsdC51c2VyLmludml0YXRpb25fY3JlYXRlZF9hdCAvLyBEYXRlIGF1IGZvcm1hdCA6IDIwMjEtMDQtMTUgMTQ6NTM6NTYgKzAyMDBcbiAgICAgICAgLnN1YnN0cmluZygwLCAxMCk7IC8vIFLDqWN1cMOpcmVyIGxlcyAxMCBwcmVtaWVycyBjaGlmZnJlcyAobGEgZGF0ZSlcbiAgICAgIGludml0YXRpb25fZGF0ZSA9IG5ldyBEYXRlKGludml0YXRpb25fZGF0ZSk7IC8vIENyw6llciB1bmUgZGF0ZSBKU1xuICAgICAgbmV3VXNlcnNEYXRhW3VzZXJJbmRleF1bXCJEYXRlIGQnaW52aXRhdGlvblwiXSA9IGdldEZyZW5jaEZvcm1hdERhdGVTdHJpbmcoaW52aXRhdGlvbl9kYXRlKTtcbiAgICB9XG4gICAgaWYgKHJlc3VsdC51c2VyLmludml0YXRpb25fYWNjZXB0ZWRfYXQpIHtcbiAgICAgIGxldCBpbnNjcmlwdGlvbl9kYXRlID0gcmVzdWx0LnVzZXIuaW52aXRhdGlvbl9hY2NlcHRlZF9hdCAvLyBEYXRlIGF1IGZvcm1hdCA6IDIwMjEtMDQtMTUgMTQ6NTM6NTYgKzAyMDBcbiAgICAgICAgLnN1YnN0cmluZygwLCAxMCk7IC8vIFLDqWN1cMOpcmVyIGxlcyAxMCBwcmVtaWVycyBjaGlmZnJlcyAobGEgZGF0ZSlcbiAgICAgIGluc2NyaXB0aW9uX2RhdGUgPSBuZXcgRGF0ZShpbnNjcmlwdGlvbl9kYXRlKTsgLy8gQ3LDqWVyIHVuZSBkYXRlIEpTXG4gICAgICBuZXdVc2Vyc0RhdGFbdXNlckluZGV4XVtcIkRhdGUgZCdpbnNjcmlwdGlvblwiXSA9IGdldEZyZW5jaEZvcm1hdERhdGVTdHJpbmcoaW5zY3JpcHRpb25fZGF0ZSk7XG4gICAgfVxuICAgIHNldFVzZXJzRGF0YShuZXdVc2Vyc0RhdGEpO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gaW52YWxpZE9yVGFrZW5NYWlsKHVzZXJEYXRhLCB1c2VySW5kZXgsIHVzZXJJZCA9IG51bGwpIHtcbiAgICBpZiAodXNlcklkICE9IG51bGwpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFVzZXIodXNlcklkKTtcblxuICAgICAgaWYgKFxuICAgICAgICByZXN1bHQgJiZcbiAgICAgICAgcmVzdWx0LnVzZXIuZmlyc3RfbmFtZS50b1VwcGVyQ2FzZSgpID09PSB1c2VyRGF0YVtcIlBSRU5PTVwiXS50b1VwcGVyQ2FzZSgpICYmXG4gICAgICAgIHJlc3VsdC51c2VyLmxhc3RfbmFtZS50b1VwcGVyQ2FzZSgpID09PSB1c2VyRGF0YVtcIk5PTVwiXS50b1VwcGVyQ2FzZSgpICYmXG4gICAgICAgIHJlc3VsdC51c2VyLmJpcnRoX2RhdGUgPT09IGFwcGxpY2F0aW9uRGF0ZVRvU3RyaW5nKHN0cmluZ1RvRGF0ZSh1c2VyRGF0YVtcIkRBVEUgREUgTkFJU1NBTkNFXCJdKSkgJiZcbiAgICAgICAgcmVzdWx0LnVzZXIuYWRkcmVzcy50b1VwcGVyQ2FzZSgpID09PVxuICAgICAgICAgIHVzZXJEYXRhW1wiQURSRVNTRVwiXS50b1VwcGVyQ2FzZSgpICtcbiAgICAgICAgICAgIFwiIC0gXCIgK1xuICAgICAgICAgICAgdXNlckRhdGFbXCJDT0RFIFBPU1RBTFwiXS50b1VwcGVyQ2FzZSgpICtcbiAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgIHVzZXJEYXRhW1wiVklMTEVcIl0udG9VcHBlckNhc2UoKVxuICAgICAgKSB7XG4gICAgICAgIGxldCBuZXdVc2Vyc0RhdGEgPSBbLi4udXNlcnNEYXRhXTtcbiAgICAgICAgbmV3VXNlcnNEYXRhW3VzZXJJbmRleF1bXCJJRCBSRFZcIl0gPSB1c2VySWQ7XG4gICAgICAgIHNldFVzZXJzRGF0YShuZXdVc2Vyc0RhdGEpO1xuICAgICAgICBjaGVja1VzZXJJbnZpdGF0aW9uU3RhdHVzKHJlc3VsdC5lcnJvcnMuZW1haWxbMF0uaWQsIHVzZXJJbmRleCk7XG4gICAgICAgIGFsZXJ0KFwiVW4gY29tcHRlIGFzc29jacOpIMOgIGNldCBlbWFpbCBleGlzdGUgZMOpasOgXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3JlYXRlVXNlcih1c2VyRGF0YSwgdXNlckluZGV4LCBmYWxzZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNyZWF0ZVVzZXIodXNlckRhdGEsIHVzZXJJbmRleCwgZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVVzZXIodXNlckRhdGEsIHVzZXJJbmRleCwgd2l0aEVtYWlsID0gdHJ1ZSkge1xuICAgIGNvbnN0IGFkZHJlc3MgPSB1c2VyRGF0YVtcIkFEUkVTU0VcIl0gKyBcIiAtIFwiICsgdXNlckRhdGFbXCJDT0RFIFBPU1RBTFwiXSArIFwiIFwiICsgdXNlckRhdGFbXCJWSUxMRVwiXTtcblxuICAgIGxldCB1c2VyID0ge1xuICAgICAgZmlyc3RfbmFtZTogdXNlckRhdGFbXCJQUkVOT01cIl0sXG4gICAgICBsYXN0X25hbWU6IHVzZXJEYXRhW1wiTk9NXCJdLFxuICAgICAgcGhvbmVfbnVtYmVyOiB1c2VyRGF0YVtcIlRFTEVQSE9ORVwiXS5yZXBsYWNlKC9cXHMrL2csIFwiXCIpLFxuICAgICAgYmlydGhfZGF0ZTogc3RyaW5nVG9EYXRlKHVzZXJEYXRhW1wiREFURSBERSBOQUlTU0FOQ0VcIl0pLFxuICAgICAgYWRkcmVzczogYWRkcmVzcyxcbiAgICAgIGNhaXNzZV9hZmZpbGlhdGlvbjogXCJjYWZcIixcbiAgICAgIGFmZmlsaWF0aW9uX251bWJlcjogdXNlckRhdGFbXCJOwrBDQUZcIl0sXG4gICAgICBvcmdhbmlzYXRpb25faWRzOiBbb3JnYUlEXSxcbiAgICB9O1xuICAgIGlmICh3aXRoRW1haWwgPT09IHRydWUpIHVzZXIuZW1haWwgPSB1c2VyRGF0YVtcIk1BSUxcIl07XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBhcHBGZXRjaCh1c2VyVXJsLCB0b2tlbiwgXCJQT1NUXCIsIEpTT04uc3RyaW5naWZ5KHVzZXIpKTtcblxuICAgIGxldCBuZXdVc2Vyc0RhdGEgPSBbLi4udXNlcnNEYXRhXTtcbiAgICBpZiAocmVzdWx0LnVzZXIpIHtcbiAgICAgIG5ld1VzZXJzRGF0YVt1c2VySW5kZXhdW1wiSUQgUkRWXCJdID0gcmVzdWx0LnVzZXIuaWQ7XG4gICAgICBzZXRVc2Vyc0RhdGEobmV3VXNlcnNEYXRhKTtcbiAgICAgIGdlbmVyYXRlSW52aXRhdGlvblVybChyZXN1bHQudXNlci5pZCwgdXNlckluZGV4KTtcbiAgICB9IGVsc2UgaWYgKHJlc3VsdC5lcnJvcnMgJiYgcmVzdWx0LmVycm9ycy5lbWFpbCAmJiByZXN1bHQuZXJyb3JzLmVtYWlsWzBdLmVycm9yID09PSBcInRha2VuXCIpIHtcbiAgICAgIGludmFsaWRPclRha2VuTWFpbCh1c2VyRGF0YSwgdXNlckluZGV4LCByZXN1bHQuZXJyb3JzLmVtYWlsWzBdLmlkKTtcbiAgICB9IGVsc2UgaWYgKHJlc3VsdC5lcnJvcnMgJiYgcmVzdWx0LmVycm9ycy5lbWFpbCAmJiByZXN1bHQuZXJyb3JzLmVtYWlsWzBdLmVycm9yID09PSBcImludmFsaWRcIikge1xuICAgICAgaW52YWxpZE9yVGFrZW5NYWlsKHVzZXJEYXRhLCB1c2VySW5kZXgpXG4gICAgfSBlbHNlIGlmIChyZXN1bHQuZXJyb3JzICYmIHJlc3VsdC5lcnJvcnMuZmlyc3RfbmFtZSAmJiByZXN1bHQuZXJyb3JzLmZpcnN0X25hbWVbMF0uZXJyb3IgPT09IFwiZMOpasOgIHV0aWxpc8OpXCIpIHtcbiAgICAgIGFsZXJ0KFwiTGEgY3LDqWF0aW9uIGR1IGNvbXB0ZSBhIMOpY2hvdcOpLiBMJ3V0aWxpc2F0ZXVyIHNlbWJsZSBleGlzdGVyIG1haXMgbidhIHB1IMOqdHJlIHLDqWN1cMOpcsOpLlwiKTtcbiAgICB9IGVsc2UgaWYgKHJlc3VsdC5lcnJvcnMgJiYgcmVzdWx0LmVycm9yc1swXSAmJiByZXN1bHQuZXJyb3JzWzBdLmJhc2UgPT09IFwiZm9yYmlkZGVuXCIpIHtcbiAgICAgIGFsZXJ0KFwiVm90cmUgY29tcHRlIGFnZW50IFJEVi1Tb2xpZGFyaXTDqXMgbmUgdm91cyBwZXJtZXQgcGFzIGQnZWZmZWN0dWVyIGNldHRlIGFjdGlvbi5cIik7XG4gICAgfSBlbHNlIGlmIChyZXN1bHQuZXJyb3JzICYmIHJlc3VsdC5lcnJvcnNbMF0pIHtcbiAgICAgIGFsZXJ0KHJlc3VsdC5lcnJvcnNbMF0pO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUxvZ2luID0gKHRva2VuSWQsIHVpZCwgY2xpZW50KSA9PiB7XG4gICAgc2V0VG9rZW4oeyAuLi50b2tlbiwgdG9rZW5JZDogdG9rZW5JZCwgdWlkOiB1aWQsIGNsaWVudDogY2xpZW50IH0pO1xuICAgIHNldElzTG9nZ2VkKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUZpbGUgPSBhc3luYyBmaWxlID0+IHtcbiAgICBpZiAoZGV2TW9kZSAmJiBmaWxlICE9IGRldkZpbGUpIHtcbiAgICAgIHNldERldkZpbGUoZmlsZSk7XG4gICAgfVxuICAgIHNldEZpbGVTaXplKGZpbGUuc2l6ZSk7XG4gICAgY29uc3Qgc3RhcnRfdGltZSA9IG5ldyBEYXRlKCk7XG5cbiAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBjb25zdCBmaWxlRGF0YSA9IG5ldyBVaW50OEFycmF5KGV2ZW50LnRhcmdldC5yZXN1bHQpO1xuICAgICAgICBjb25zdCB4bHMgPSBYTFNYLnJlYWQoZmlsZURhdGEsIHsgdHlwZTogXCJhcnJheVwiLCBjZWxsRGF0ZXM6IHRydWUsIGRhdGVORjogXCJkZC9tbS95eXl5XCIgfSk7XG4gICAgICAgIGNvbnN0IHdvcmtzaGVldCA9IHhscy5TaGVldHNbeGxzLlNoZWV0TmFtZXNbMF1dO1xuXG4gICAgICAgIGxldCBqc29uRGF0YSA9IFhMU1gudXRpbHMuc2hlZXRfdG9fanNvbih3b3Jrc2hlZXQsIHtcbiAgICAgICAgICBibGFua3Jvd3M6IGZhbHNlLFxuICAgICAgICAgIHJhdzogZmFsc2UsXG4gICAgICAgICAgZGVmdmFsOiBcIlwiLFxuICAgICAgICB9KTtcblxuICAgICAgICAvLyB3ZSByZW1vdmUgbGluZSBicmVha3MgZnJvbSBhbGwga2V5c1xuICAgICAgICBqc29uRGF0YSA9IGpzb25EYXRhLm1hcCh1c2VyRGF0YSA9PiB7XG4gICAgICAgICAgcmV0dXJuIFsuLi5PYmplY3Qua2V5cyh1c2VyRGF0YSldLnJlZHVjZSgocmVzLCBrZXkpID0+IHtcbiAgICAgICAgICAgIHJlc1trZXkucmVwbGFjZSgvW1xcblxccl0rL2csIFwiIFwiKV0gPSB1c2VyRGF0YVtrZXldO1xuICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgICB9LCB7fSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNldFVzZXJTdGF0dXNDaGVja2VkKGZhbHNlKTtcbiAgICAgICAgc2V0VXNlcnNEYXRhKGpzb25EYXRhKTtcbiAgICAgICAgZGlzcGF0Y2hSdW5zKHtcbiAgICAgICAgICB0eXBlOiBcImFwcGVuZFwiLFxuICAgICAgICAgIGl0ZW06IHtcbiAgICAgICAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDE5KSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiBuZXcgRGF0ZSgpIC0gc3RhcnRfdGltZSxcbiAgICAgICAgICAgIGZpbGVuYW1lOiBmaWxlLm5hbWUsXG4gICAgICAgICAgICBmaWxlU2l6ZTogZmlsZS5zaXplLFxuICAgICAgICAgICAgZmlsZUxpbmVzOiBqc29uRGF0YS5sZW5ndGgsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH07XG4gICAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoZmlsZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0gaGFuZGxlRmlsZT17aGFuZGxlRmlsZX0+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5FeHDDqXJpbWVudGF0aW9uIEFyZGVubmVzPC9oMT5cblxuICAgICAgICB7IWlzTG9nZ2VkICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNyZWF0ZX0+XG4gICAgICAgICAgICA8TG9naW5Gb3JtIGhhbmRsZUxvZ2luPXtoYW5kbGVMb2dpbn0gcmR2VXJsPXtSRFZfU09MSURBUklURVNfVVJMfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuXG4gICAgICAgIHtpc0xvZ2dlZCAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxGaWxlSGFuZGxlclxuICAgICAgICAgICAgICBoYW5kbGVGaWxlPXtoYW5kbGVGaWxlfVxuICAgICAgICAgICAgICBmaWxlU2l6ZT17ZmlsZVNpemV9XG4gICAgICAgICAgICAgIHBlbmRpbmdNZXNzYWdlPXtcIlLDqWN1cMOpcmF0aW9uIGRlcyBpbmZvcm1hdGlvbnMsIG1lcmNpIGRlIHBhdGllbnRlclwifVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAge3VzZXJzRGF0YSAmJiAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnN1YnRpdGxlfT5Cw6luw6lmaWNpYWlyZXMgUlNBPC9oMj5cblxuICAgICAgICAgICAgICAgIHt1c2Vyc0RhdGEubGVuZ3RoID09IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PkF1Y3VuIGLDqW7DqWZpY2lhaXJlIGRhbnMgbGUgZmljaGllcjwvcD5cbiAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAge3VzZXJzRGF0YS5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPkRhdGU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5Ob208L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5QcsOpbm9tPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+TWFpbDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPlTDqWzDqXBob25lPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+SUQgUkRWLVNvbGlkYXJpdMOpczwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjb2xTcGFuPVwiM1wiPkludml0YXRpb248L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNvbFNwYW49XCIxXCI+RGVybmllciBlbnZvaSBsZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjb2xTcGFuPVwiMVwiPkRhdGUgZCdpbnNjcmlwdGlvbjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjb2xTcGFuPVwiMVwiPkFjdGlvbjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIHJldmVyc2UgZXN0IHV0aWxpc8OpIHBvdXIgcXVlIGxlcyB1dGlsaXNhdGV1cnMgbGVzIHBsdXMgcsOpY2VudHMgYXBwYXJhaXNzZW50IGVuIGhhdXQgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICB7Wy4uLnVzZXJzRGF0YV0ucmV2ZXJzZSgpLm1hcCgodXNlciwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZyYWdtZW50IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyW1wiREFURVwiXSAhPT0gXCJcIiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9Pnt1c2VyW1wiREFURVwiXX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT57dXNlcltcIk5PTVwiXX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT57dXNlcltcIlBSRU5PTVwiXX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT57dXNlcltcIk1BSUxcIl19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+e3VzZXJbXCJURUxFUEhPTkVcIl19PC90ZD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXNlcltcIklEIFJEVlwiXSA9PT0gXCJcIiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNyZWF0ZVVzZXIodXNlciwgdXNlcnNEYXRhLmxlbmd0aCAtIGluZGV4IC0gMSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENyw6llciB1biBjb21wdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyW1wiSUQgUkRWXCJdICE9PSBcIlwiICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT57dXNlcltcIklEIFJEVlwiXX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT57dXNlcltcIkRhdGUgZCdpbnZpdGF0aW9uXCJdfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9Pnt1c2VyW1wiRGF0ZSBkJ2luc2NyaXB0aW9uXCJdfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyW1wiSUQgUkRWXCJdICE9PSBcIlwiICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZUludml0YXRpb25VcmwoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyW1wiSUQgUkRWXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcnNEYXRhLmxlbmd0aCAtIGluZGV4IC0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXNlcltcIkRhdGUgZCdpbnZpdGF0aW9uXCJdICE9PSBcIlwiICYmIFwiUmVnw6luw6lyZXIgaW52aXRhdGlvblwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXNlcltcIkRhdGUgZCdpbnZpdGF0aW9uXCJdID09PSBcIlwiICYmIFwiR8OpbsOpcmVyIGludml0YXRpb25cIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyW1wiSUQgUkRWXCJdID09PSBcIlwiICYmIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9PjwvdGQ+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cblxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0gb25DbGljaz17d3JpdGVGaWxlfT5cbiAgICAgICAgICAgICAgICAgICAgICBSZWfDqW7DqXJlciBmaWNoaWVyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuXG4gICAgICAgIDxGb290ZXJcbiAgICAgICAgICBzdWJqZWN0PVwiRXhww6lyaW1lbnRhdGlvbiBBcmRlbm5lc1wiXG4gICAgICAgICAgcG91cnF1b2k9XCJRdWVsIGVzdCBsJ29iamVjdGlmIGRlIGNldHRlIGV4cMOpcmltZW50YXRpb24mbmJzcDs/XCJcbiAgICAgICAgICB0ZXh0PXtcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRleHR9PlxuICAgICAgICAgICAgICAgIEZhY2lsaXRlciBsZSB0cmF2YWlsIGRlcyBhZ2VudHMgZHUgZMOpcGFydGVtZW50IGV0IHRlc3RlciBsJ3V0aWxpc2F0aW9uIGRlXG4gICAgICAgICAgICAgICAgbCdhcHBsaWNhdGlvbiBSRFYtU29saWRhcml0w6lzIHBvdXIgYWNjw6lsw6lyZXIgbGEgcHJpc2UgZHUgcHJlbWllciByZW5kZXotdm91c1xuICAgICAgICAgICAgICAgIGQnb3JpZW50YXRpb24uXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgIH1cbiAgICAgICAgLz5cbiAgICAgIDwvbWFpbj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=