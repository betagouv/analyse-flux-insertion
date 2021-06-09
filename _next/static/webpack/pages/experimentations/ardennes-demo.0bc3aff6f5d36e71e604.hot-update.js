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

  var displayAddress = function displayAddress(userData) {
    return userData["ADRESSE"] + " - " + userData["CODE POSTAL"] + " " + userData["VILLE"];
  };

  function handleUserWithTakenEmail(_x6, _x7, _x8) {
    return _handleUserWithTakenEmail.apply(this, arguments);
  }

  function _handleUserWithTakenEmail() {
    _handleUserWithTakenEmail = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5(userData, userIndex, userId) {
      var result, newUsersData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return getUser(userId);

            case 2:
              result = _context5.sent;

              // Vérifie d'abord si l'utilisateur avec le même email est un doublon
              if (result && result.user && result.user.first_name.toUpperCase() === userData["PRENOM"].toUpperCase() && result.user.last_name.toUpperCase() === userData["NOM"].toUpperCase() && result.user.birth_date === Object(_lib_dates__WEBPACK_IMPORTED_MODULE_15__["applicationDateToString"])(Object(_lib_dates__WEBPACK_IMPORTED_MODULE_15__["stringToDate"])(userData["DATE DE NAISSANCE"])) && result.user.address.toUpperCase() === displayAddress(userData).toUpperCase()) {
                newUsersData = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(usersData);
                newUsersData[userIndex]["ID RDV"] = userId;
                setUsersData(newUsersData);
                checkUserInvitationStatus(userId, userIndex);
                alert("Un compte associé à cet email existe déjà");
              } else {
                createUser(userData, userIndex, false, userId); // Si ce n'est pas un doublon, crée un utilisateur en tant que "proche" de l'utilisateur existant
              }

            case 4:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));
    return _handleUserWithTakenEmail.apply(this, arguments);
  }

  function createUser(_x9, _x10) {
    return _createUser.apply(this, arguments);
  }

  function _createUser() {
    _createUser = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee6(userData, userIndex) {
      var withEmail,
          responsible_id,
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
              responsible_id = _args6.length > 3 && _args6[3] !== undefined ? _args6[3] : null;
              address = displayAddress(userData);
              if ([13, 15].includes(userData["N°CAF"].trim().length)) userData["N°CAF"] = "";
              user = {
                first_name: userData["PRENOM"],
                last_name: userData["NOM"],
                phone_number: userData["TELEPHONE"].replace(/\s+/g, ""),
                birth_date: Object(_lib_dates__WEBPACK_IMPORTED_MODULE_15__["stringToDate"])(userData["DATE DE NAISSANCE"]),
                address: address,
                caisse_affiliation: "caf",
                affiliation_number: userData["N°CAF"],
                organisation_ids: [orgaID],
                responsible_id: responsible_id
              };
              if (withEmail === true) user.email = userData["MAIL"];
              _context6.next = 8;
              return Object(_lib_appFetch__WEBPACK_IMPORTED_MODULE_13__["appFetch"])(userUrl, token, "POST", JSON.stringify(user));

            case 8:
              result = _context6.sent;
              newUsersData = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(usersData);

              if (result.user) {
                newUsersData[userIndex]["ID RDV"] = result.user.id;
                setUsersData(newUsersData);
                generateInvitationUrl(result.user.id, userIndex);
              } else if (result.errors && result.errors.email && result.errors.email[0].error === "taken") {
                handleUserWithTakenEmail(userData, userIndex, result.errors.email[0].id);
              } else if (result.errors && result.errors.email && result.errors.email[0].error === "invalid") {
                createUser(userData, userIndex, false);
              } else if (result.errors && result.errors.first_name && result.errors.first_name[0].error === "déjà utilisé") {
                alert("La création du compte a échoué. L'utilisateur semble exister mais n'a pu être récupéré.");
              } else if (result.errors && result.errors[0] && result.errors[0].base === "forbidden") {
                alert("Votre compte agent RDV-Solidarités ne vous permet pas d'effectuer cette action.");
              } else if (result.errors && result.errors[0]) {
                alert(result.errors[0]);
              }

            case 11:
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

    return function handleFile(_x11) {
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
        lineNumber: 230,
        columnNumber: 9
      }, this), !isLogged && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.create,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_loginForm__WEBPACK_IMPORTED_MODULE_11__["default"], {
          handleLogin: handleLogin,
          rdvUrl: RDV_SOLIDARITES_URL
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 234,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 11
      }, this), isLogged && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_fileHandler__WEBPACK_IMPORTED_MODULE_9__["default"], {
          handleFile: handleFile,
          fileSize: fileSize,
          pendingMessage: "Récupération des informations, merci de patienter"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 240,
          columnNumber: 13
        }, this), usersData && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.subtitle,
            children: "B\xE9n\xE9ficiaires RSA"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 248,
            columnNumber: 17
          }, this), usersData.length == 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.description,
            children: "Aucun b\xE9n\xE9ficiaire dans le fichier"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 251,
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
                    lineNumber: 259,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    rowSpan: "2",
                    children: "Nom"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 260,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    rowSpan: "2",
                    children: "Pr\xE9nom"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 261,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    rowSpan: "2",
                    children: "Mail"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 262,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    rowSpan: "2",
                    children: "T\xE9l\xE9phone"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 263,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    rowSpan: "2",
                    children: "ID RDV-Solidarit\xE9s"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 264,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    colSpan: "3",
                    children: "Invitation"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 265,
                    columnNumber: 27
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 258,
                  columnNumber: 25
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    colSpan: "1",
                    children: "Dernier envoi le"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 268,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    colSpan: "1",
                    children: "Date d'inscription"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 269,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    colSpan: "1",
                    children: "Action"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 270,
                    columnNumber: 27
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 267,
                  columnNumber: 25
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 257,
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
                        lineNumber: 279,
                        columnNumber: 33
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center,
                        children: user["NOM"]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 280,
                        columnNumber: 33
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center,
                        children: user["PRENOM"]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 281,
                        columnNumber: 33
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center,
                        children: user["MAIL"]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 282,
                        columnNumber: 33
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center,
                        children: user["TELEPHONE"]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 283,
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
                          lineNumber: 287,
                          columnNumber: 37
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 286,
                        columnNumber: 35
                      }, _this), user["ID RDV"] !== "" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center,
                        children: user["ID RDV"]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 295,
                        columnNumber: 35
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center,
                        children: user["Date d'invitation"]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 297,
                        columnNumber: 33
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center,
                        children: user["Date d'inscription"]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 298,
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
                          lineNumber: 301,
                          columnNumber: 37
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 300,
                        columnNumber: 35
                      }, _this), user["ID RDV"] === "" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 314,
                        columnNumber: 59
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 278,
                      columnNumber: 31
                    }, _this)
                  }, index, false, {
                    fileName: _jsxFileName,
                    lineNumber: 276,
                    columnNumber: 27
                  }, _this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 273,
                columnNumber: 23
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 256,
              columnNumber: 21
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.button,
              onClick: writeFile,
              children: "Reg\xE9n\xE9rer fichier"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 322,
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
            lineNumber: 337,
            columnNumber: 15
          }, this)
        }, void 0, false)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 332,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 228,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXhwZXJpbWVudGF0aW9ucy9hcmRlbm5lcy1kZW1vL2luZGV4LmpzIl0sIm5hbWVzIjpbInJlZHVjZXIiLCJyZWR1Y2VyRmFjdG9yeSIsIkFyZGVubmVzIiwicm91dGVyIiwidXNlUm91dGVyIiwiaXNEZW1vIiwicGF0aG5hbWUiLCJpbmNsdWRlcyIsImRldk1vZGUiLCJvcmdhSUQiLCJwcm9jZXNzIiwiUkRWX1NPTElEQVJJVEVTX1VSTCIsInVzZXJVcmwiLCJ1c2VTdGF0ZSIsImRldkZpbGUiLCJzZXREZXZGaWxlIiwidXNlUmVkdWNlciIsImluaXRSZWR1Y2VyIiwicnVucyIsImRpc3BhdGNoUnVucyIsInVzZXJzRGF0YSIsInNldFVzZXJzRGF0YSIsInVzZXJTdGF0dXNDaGVja2VkIiwic2V0VXNlclN0YXR1c0NoZWNrZWQiLCJmaWxlU2l6ZSIsInNldEZpbGVTaXplIiwiaXNMb2dnZWQiLCJzZXRJc0xvZ2dlZCIsInRva2VuSWQiLCJ1aWQiLCJjbGllbnQiLCJ0b2tlbiIsInNldFRva2VuIiwidXNlRWZmZWN0IiwiaGFuZGxlRmlsZSIsImZvckVhY2giLCJ1c2VyIiwidXNlckluZGV4IiwiY2hlY2tVc2VySW52aXRhdGlvblN0YXR1cyIsIndyaXRlRmlsZSIsIm91dFdvcmtib29rIiwiWExTWCIsImJvb2tfbmV3Iiwib3V0V29ya3NoZWV0IiwianNvbl90b19zaGVldCIsImJvb2tfYXBwZW5kX3NoZWV0IiwiZ2V0RGF0ZVRpbWVTdHJpbmciLCJEYXRlIiwiZ2VuZXJhdGVJbnZpdGF0aW9uVXJsIiwidXNlcklkIiwiaW52aXRhdGlvblVybCIsImFwcEZldGNoIiwicmVzdWx0IiwibmV3VXNlcnNEYXRhIiwiaW52aXRhdGlvbl91cmwiLCJpbnZpdGF0aW9uX3Rva2VuIiwiZ2V0RnJlbmNoRm9ybWF0RGF0ZVN0cmluZyIsImdldFVzZXIiLCJnZXRVc2VyVXJsIiwiaW52aXRhdGlvbl9jcmVhdGVkX2F0IiwiaW52aXRhdGlvbl9kYXRlIiwic3Vic3RyaW5nIiwiaW52aXRhdGlvbl9hY2NlcHRlZF9hdCIsImluc2NyaXB0aW9uX2RhdGUiLCJkaXNwbGF5QWRkcmVzcyIsInVzZXJEYXRhIiwiaGFuZGxlVXNlcldpdGhUYWtlbkVtYWlsIiwiZmlyc3RfbmFtZSIsInRvVXBwZXJDYXNlIiwibGFzdF9uYW1lIiwiYmlydGhfZGF0ZSIsImFwcGxpY2F0aW9uRGF0ZVRvU3RyaW5nIiwic3RyaW5nVG9EYXRlIiwiYWRkcmVzcyIsImFsZXJ0IiwiY3JlYXRlVXNlciIsIndpdGhFbWFpbCIsInJlc3BvbnNpYmxlX2lkIiwidHJpbSIsImxlbmd0aCIsInBob25lX251bWJlciIsInJlcGxhY2UiLCJjYWlzc2VfYWZmaWxpYXRpb24iLCJhZmZpbGlhdGlvbl9udW1iZXIiLCJvcmdhbmlzYXRpb25faWRzIiwiZW1haWwiLCJKU09OIiwic3RyaW5naWZ5IiwiaWQiLCJlcnJvcnMiLCJlcnJvciIsImJhc2UiLCJoYW5kbGVMb2dpbiIsImZpbGUiLCJzaXplIiwic3RhcnRfdGltZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsImV2ZW50IiwiZmlsZURhdGEiLCJVaW50OEFycmF5IiwidGFyZ2V0IiwieGxzIiwidHlwZSIsImNlbGxEYXRlcyIsImRhdGVORiIsIndvcmtzaGVldCIsIlNoZWV0cyIsIlNoZWV0TmFtZXMiLCJqc29uRGF0YSIsInNoZWV0X3RvX2pzb24iLCJibGFua3Jvd3MiLCJyYXciLCJkZWZ2YWwiLCJtYXAiLCJPYmplY3QiLCJrZXlzIiwicmVkdWNlIiwicmVzIiwia2V5IiwiaXRlbSIsInRpbWVzdGFtcCIsInRvSVNPU3RyaW5nIiwic2xpY2UiLCJkdXJhdGlvbiIsImZpbGVuYW1lIiwibmFtZSIsImZpbGVMaW5lcyIsInJlYWRBc0FycmF5QnVmZmVyIiwic3R5bGVzIiwiY29udGFpbmVyIiwibWFpbiIsInRpdGxlIiwiY3JlYXRlIiwic3VidGl0bGUiLCJkZXNjcmlw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QTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXZHRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF5SEQ7O0dBM1V1QjdJLFE7VUFDUEUscUQ7OztLQURPRixRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2V4cGVyaW1lbnRhdGlvbnMvYXJkZW5uZXMtZGVtby4wYmMzYWZmNmY1ZDM2ZTcxZTYwNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnJhZ21lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZHVjZXIgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0ICogYXMgWExTWCBmcm9tIFwieGxzeFwiO1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2xheW91dFwiO1xuaW1wb3J0IEZpbGVIYW5kbGVyIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2ZpbGVIYW5kbGVyXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2Zvb3RlclwiO1xuaW1wb3J0IExvZ2luRm9ybSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9sb2dpbkZvcm1cIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uLy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcblxuaW1wb3J0IHsgYXBwRmV0Y2ggfSBmcm9tIFwiLi4vLi4vLi4vbGliL2FwcEZldGNoXCI7XG5pbXBvcnQgeyBpbml0UmVkdWNlciwgcmVkdWNlckZhY3RvcnkgfSBmcm9tIFwiLi4vLi4vLi4vbGliL3JlZHVjZXJGYWN0b3J5XCI7XG5pbXBvcnQgeyBhcHBsaWNhdGlvbkRhdGVUb1N0cmluZywgZ2V0RGF0ZVRpbWVTdHJpbmcsIGdldEZyZW5jaEZvcm1hdERhdGVTdHJpbmcsIHN0cmluZ1RvRGF0ZSB9IGZyb20gXCIuLi8uLi8uLi9saWIvZGF0ZXNcIjtcblxuY29uc3QgcmVkdWNlciA9IHJlZHVjZXJGYWN0b3J5KFwiRXhww6lyaW1lbnRhdGlvbiBBcmRlbm5lcyAtIENOQUYgLSBCw6luw6lmaWNpYWlyZVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXJkZW5uZXMoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBpc0RlbW8gPSByb3V0ZXIucGF0aG5hbWUuaW5jbHVkZXMoXCJkZW1vXCIpO1xuICBjb25zdCBkZXZNb2RlID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT0gXCJkZXZlbG9wbWVudFwiO1xuICBjb25zdCBvcmdhSUQgPSBpc0RlbW9cbiAgICA/IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX09SR0FOSVNBVElPTl9JRF9ERU1PXG4gICAgOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19PUkdBTklTQVRJT05fSURfUFJPRDtcblxuICBjb25zdCBSRFZfU09MSURBUklURVNfVVJMID0gaXNEZW1vXG4gICAgPyBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19SRFZfU09MSURBUklURVNfREVNT19VUkxcbiAgICA6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1JEVl9TT0xJREFSSVRFU19QUk9EX1VSTDtcbiAgY29uc3QgdXNlclVybCA9IFJEVl9TT0xJREFSSVRFU19VUkwgKyBcIi9hcGkvdjEvdXNlcnNcIjtcblxuICBjb25zdCBbZGV2RmlsZSwgc2V0RGV2RmlsZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3J1bnMsIGRpc3BhdGNoUnVuc10gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIFtdLCBpbml0UmVkdWNlcik7XG4gIGNvbnN0IFt1c2Vyc0RhdGEsIHNldFVzZXJzRGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3VzZXJTdGF0dXNDaGVja2VkLCBzZXRVc2VyU3RhdHVzQ2hlY2tlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtmaWxlU2l6ZSwgc2V0RmlsZVNpemVdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtpc0xvZ2dlZCwgc2V0SXNMb2dnZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbdG9rZW4sIHNldFRva2VuXSA9IHVzZVN0YXRlKHtcbiAgICB0b2tlbklkOiBcIlwiLFxuICAgIHVpZDogXCJcIixcbiAgICBjbGllbnQ6IFwiXCIsXG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRldkZpbGUpIHtcbiAgICAgIGhhbmRsZUZpbGUoZGV2RmlsZSk7XG4gICAgfVxuICB9LCBbZGV2RmlsZV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHVzZXJzRGF0YSAmJiB1c2VyU3RhdHVzQ2hlY2tlZCA9PT0gZmFsc2UpIHtcbiAgICAgIHVzZXJzRGF0YS5mb3JFYWNoKCh1c2VyLCB1c2VySW5kZXgpID0+IHtcbiAgICAgICAgaWYgKHVzZXJbXCJJRCBSRFZcIl0gIT0gXCJcIikge1xuICAgICAgICAgIGNoZWNrVXNlckludml0YXRpb25TdGF0dXModXNlcltcIklEIFJEVlwiXSwgdXNlckluZGV4KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBzZXRVc2VyU3RhdHVzQ2hlY2tlZCh0cnVlKTtcbiAgICB9XG4gIH0sIFt1c2Vyc0RhdGFdKTtcblxuICBjb25zdCB3cml0ZUZpbGUgPSAoKSA9PiB7XG4gICAgY29uc3Qgb3V0V29ya2Jvb2sgPSBYTFNYLnV0aWxzLmJvb2tfbmV3KCk7XG4gICAgY29uc3Qgb3V0V29ya3NoZWV0ID0gWExTWC51dGlscy5qc29uX3RvX3NoZWV0KHVzZXJzRGF0YSk7XG4gICAgWExTWC51dGlscy5ib29rX2FwcGVuZF9zaGVldChvdXRXb3JrYm9vaywgb3V0V29ya3NoZWV0LCBcIkRJVkVSR0VOQ0VTXCIpO1xuICAgIC8vIFhMU1gudXRpbHMuYm9va19hcHBlbmRfc2hlZXQob3V0V29ya2Jvb2ssIHhscy5TaGVldHNbeGxzLlNoZWV0TmFtZXNbMV1dLCBcIkdSQVBISVFVRVwiKTtcbiAgICAvLyBYTFNYLnV0aWxzLmJvb2tfYXBwZW5kX3NoZWV0KG91dFdvcmtib29rLCB4bHMuU2hlZXRzW3hscy5TaGVldE5hbWVzWzJdXSwgXCJTZWxlY3Rpb24gQ09BXCIpO1xuICAgIFhMU1gud3JpdGVGaWxlKG91dFdvcmtib29rLCBgYXJkZW5uZXNfcnNhXyR7Z2V0RGF0ZVRpbWVTdHJpbmcobmV3IERhdGUoKSl9Lnhsc3hgKTtcbiAgfTtcblxuICBhc3luYyBmdW5jdGlvbiBnZW5lcmF0ZUludml0YXRpb25VcmwodXNlcklkLCB1c2VySW5kZXgpIHtcbiAgICBjb25zdCBpbnZpdGF0aW9uVXJsID0gdXNlclVybCArIGAvJHt1c2VySWR9L2ludml0ZWA7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXBwRmV0Y2goaW52aXRhdGlvblVybCwgdG9rZW4pO1xuXG4gICAgbGV0IG5ld1VzZXJzRGF0YSA9IFsuLi51c2Vyc0RhdGFdO1xuICAgIGlmIChyZXN1bHQuaW52aXRhdGlvbl91cmwpIHtcbiAgICAgIG5ld1VzZXJzRGF0YVt1c2VySW5kZXhdW1wiTGllbiBkJ2ludml0YXRpb25cIl0gPSByZXN1bHQuaW52aXRhdGlvbl91cmw7XG4gICAgfSBlbHNlIGlmIChyZXN1bHQuaW52aXRhdGlvbl90b2tlbikge1xuICAgICAgbmV3VXNlcnNEYXRhW3VzZXJJbmRleF1bXCJDb2RlIGQnaW52aXRhdGlvblwiXSA9IHJlc3VsdC5pbnZpdGF0aW9uX3Rva2VuO1xuICAgIH1cbiAgICBuZXdVc2Vyc0RhdGFbdXNlckluZGV4XVtcIkRhdGUgZCdpbnZpdGF0aW9uXCJdID0gZ2V0RnJlbmNoRm9ybWF0RGF0ZVN0cmluZyhuZXcgRGF0ZSgpKTtcbiAgICBzZXRVc2Vyc0RhdGEobmV3VXNlcnNEYXRhKTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGdldFVzZXIodXNlcklkKSB7XG4gICAgY29uc3QgZ2V0VXNlclVybCA9IHVzZXJVcmwgKyBgLyR7dXNlcklkfWA7XG4gICAgcmV0dXJuIGF3YWl0IGFwcEZldGNoKGdldFVzZXJVcmwsIHRva2VuKTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGNoZWNrVXNlckludml0YXRpb25TdGF0dXModXNlcklkLCB1c2VySW5kZXgpIHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRVc2VyKHVzZXJJZCk7XG5cbiAgICBsZXQgbmV3VXNlcnNEYXRhID0gWy4uLnVzZXJzRGF0YV07XG4gICAgaWYgKHJlc3VsdC51c2VyLmludml0YXRpb25fY3JlYXRlZF9hdCkge1xuICAgICAgbGV0IGludml0YXRpb25fZGF0ZSA9IHJlc3VsdC51c2VyLmludml0YXRpb25fY3JlYXRlZF9hdCAvLyBEYXRlIGF1IGZvcm1hdCA6IDIwMjEtMDQtMTUgMTQ6NTM6NTYgKzAyMDBcbiAgICAgICAgLnN1YnN0cmluZygwLCAxMCk7IC8vIFLDqWN1cMOpcmVyIGxlcyAxMCBwcmVtaWVycyBjaGlmZnJlcyAobGEgZGF0ZSlcbiAgICAgIGludml0YXRpb25fZGF0ZSA9IG5ldyBEYXRlKGludml0YXRpb25fZGF0ZSk7IC8vIENyw6llciB1bmUgZGF0ZSBKU1xuICAgICAgbmV3VXNlcnNEYXRhW3VzZXJJbmRleF1bXCJEYXRlIGQnaW52aXRhdGlvblwiXSA9IGdldEZyZW5jaEZvcm1hdERhdGVTdHJpbmcoaW52aXRhdGlvbl9kYXRlKTtcbiAgICB9XG4gICAgaWYgKHJlc3VsdC51c2VyLmludml0YXRpb25fYWNjZXB0ZWRfYXQpIHtcbiAgICAgIGxldCBpbnNjcmlwdGlvbl9kYXRlID0gcmVzdWx0LnVzZXIuaW52aXRhdGlvbl9hY2NlcHRlZF9hdCAvLyBEYXRlIGF1IGZvcm1hdCA6IDIwMjEtMDQtMTUgMTQ6NTM6NTYgKzAyMDBcbiAgICAgICAgLnN1YnN0cmluZygwLCAxMCk7IC8vIFLDqWN1cMOpcmVyIGxlcyAxMCBwcmVtaWVycyBjaGlmZnJlcyAobGEgZGF0ZSlcbiAgICAgIGluc2NyaXB0aW9uX2RhdGUgPSBuZXcgRGF0ZShpbnNjcmlwdGlvbl9kYXRlKTsgLy8gQ3LDqWVyIHVuZSBkYXRlIEpTXG4gICAgICBuZXdVc2Vyc0RhdGFbdXNlckluZGV4XVtcIkRhdGUgZCdpbnNjcmlwdGlvblwiXSA9IGdldEZyZW5jaEZvcm1hdERhdGVTdHJpbmcoaW5zY3JpcHRpb25fZGF0ZSk7XG4gICAgfVxuICAgIHNldFVzZXJzRGF0YShuZXdVc2Vyc0RhdGEpO1xuICB9XG5cbiAgY29uc3QgZGlzcGxheUFkZHJlc3MgPSB1c2VyRGF0YSA9PiB7XG4gICAgcmV0dXJuIHVzZXJEYXRhW1wiQURSRVNTRVwiXSArIFwiIC0gXCIgKyB1c2VyRGF0YVtcIkNPREUgUE9TVEFMXCJdICsgXCIgXCIgKyB1c2VyRGF0YVtcIlZJTExFXCJdO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlVXNlcldpdGhUYWtlbkVtYWlsKHVzZXJEYXRhLCB1c2VySW5kZXgsIHVzZXJJZCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFVzZXIodXNlcklkKTtcblxuICAgIC8vIFbDqXJpZmllIGQnYWJvcmQgc2kgbCd1dGlsaXNhdGV1ciBhdmVjIGxlIG3Dqm1lIGVtYWlsIGVzdCB1biBkb3VibG9uXG4gICAgaWYgKFxuICAgICAgcmVzdWx0ICYmXG4gICAgICByZXN1bHQudXNlciAmJlxuICAgICAgcmVzdWx0LnVzZXIuZmlyc3RfbmFtZS50b1VwcGVyQ2FzZSgpID09PSB1c2VyRGF0YVtcIlBSRU5PTVwiXS50b1VwcGVyQ2FzZSgpICYmXG4gICAgICByZXN1bHQudXNlci5sYXN0X25hbWUudG9VcHBlckNhc2UoKSA9PT0gdXNlckRhdGFbXCJOT01cIl0udG9VcHBlckNhc2UoKSAmJlxuICAgICAgcmVzdWx0LnVzZXIuYmlydGhfZGF0ZSA9PT1cbiAgICAgICAgYXBwbGljYXRpb25EYXRlVG9TdHJpbmcoc3RyaW5nVG9EYXRlKHVzZXJEYXRhW1wiREFURSBERSBOQUlTU0FOQ0VcIl0pKSAmJlxuICAgICAgcmVzdWx0LnVzZXIuYWRkcmVzcy50b1VwcGVyQ2FzZSgpID09PSBkaXNwbGF5QWRkcmVzcyh1c2VyRGF0YSkudG9VcHBlckNhc2UoKVxuICAgICkge1xuICAgICAgbGV0IG5ld1VzZXJzRGF0YSA9IFsuLi51c2Vyc0RhdGFdO1xuICAgICAgbmV3VXNlcnNEYXRhW3VzZXJJbmRleF1bXCJJRCBSRFZcIl0gPSB1c2VySWQ7XG4gICAgICBzZXRVc2Vyc0RhdGEobmV3VXNlcnNEYXRhKTtcbiAgICAgIGNoZWNrVXNlckludml0YXRpb25TdGF0dXModXNlcklkLCB1c2VySW5kZXgpO1xuICAgICAgYWxlcnQoXCJVbiBjb21wdGUgYXNzb2Npw6kgw6AgY2V0IGVtYWlsIGV4aXN0ZSBkw6lqw6BcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNyZWF0ZVVzZXIodXNlckRhdGEsIHVzZXJJbmRleCwgZmFsc2UsIHVzZXJJZCk7IC8vIFNpIGNlIG4nZXN0IHBhcyB1biBkb3VibG9uLCBjcsOpZSB1biB1dGlsaXNhdGV1ciBlbiB0YW50IHF1ZSBcInByb2NoZVwiIGRlIGwndXRpbGlzYXRldXIgZXhpc3RhbnRcbiAgICB9XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBjcmVhdGVVc2VyKHVzZXJEYXRhLCB1c2VySW5kZXgsIHdpdGhFbWFpbCA9IHRydWUsIHJlc3BvbnNpYmxlX2lkID0gbnVsbCkge1xuICAgIGNvbnN0IGFkZHJlc3MgPSBkaXNwbGF5QWRkcmVzcyh1c2VyRGF0YSk7XG4gICAgaWYgKFsxMywgMTVdLmluY2x1ZGVzKHVzZXJEYXRhW1wiTsKwQ0FGXCJdLnRyaW0oKS5sZW5ndGgpKSB1c2VyRGF0YVtcIk7CsENBRlwiXSA9IFwiXCJcblxuICAgIGxldCB1c2VyID0ge1xuICAgICAgZmlyc3RfbmFtZTogdXNlckRhdGFbXCJQUkVOT01cIl0sXG4gICAgICBsYXN0X25hbWU6IHVzZXJEYXRhW1wiTk9NXCJdLFxuICAgICAgcGhvbmVfbnVtYmVyOiB1c2VyRGF0YVtcIlRFTEVQSE9ORVwiXS5yZXBsYWNlKC9cXHMrL2csIFwiXCIpLFxuICAgICAgYmlydGhfZGF0ZTogc3RyaW5nVG9EYXRlKHVzZXJEYXRhW1wiREFURSBERSBOQUlTU0FOQ0VcIl0pLFxuICAgICAgYWRkcmVzczogYWRkcmVzcyxcbiAgICAgIGNhaXNzZV9hZmZpbGlhdGlvbjogXCJjYWZcIixcbiAgICAgIGFmZmlsaWF0aW9uX251bWJlcjogdXNlckRhdGFbXCJOwrBDQUZcIl0sXG4gICAgICBvcmdhbmlzYXRpb25faWRzOiBbb3JnYUlEXSxcbiAgICAgIHJlc3BvbnNpYmxlX2lkOiByZXNwb25zaWJsZV9pZFxuICAgIH07XG4gICAgaWYgKHdpdGhFbWFpbCA9PT0gdHJ1ZSkgdXNlci5lbWFpbCA9IHVzZXJEYXRhW1wiTUFJTFwiXTtcblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGFwcEZldGNoKHVzZXJVcmwsIHRva2VuLCBcIlBPU1RcIiwgSlNPTi5zdHJpbmdpZnkodXNlcikpO1xuXG4gICAgbGV0IG5ld1VzZXJzRGF0YSA9IFsuLi51c2Vyc0RhdGFdO1xuICAgIGlmIChyZXN1bHQudXNlcikge1xuICAgICAgbmV3VXNlcnNEYXRhW3VzZXJJbmRleF1bXCJJRCBSRFZcIl0gPSByZXN1bHQudXNlci5pZDtcbiAgICAgIHNldFVzZXJzRGF0YShuZXdVc2Vyc0RhdGEpO1xuICAgICAgZ2VuZXJhdGVJbnZpdGF0aW9uVXJsKHJlc3VsdC51c2VyLmlkLCB1c2VySW5kZXgpO1xuICAgIH0gZWxzZSBpZiAocmVzdWx0LmVycm9ycyAmJiByZXN1bHQuZXJyb3JzLmVtYWlsICYmIHJlc3VsdC5lcnJvcnMuZW1haWxbMF0uZXJyb3IgPT09IFwidGFrZW5cIikge1xuICAgICAgaGFuZGxlVXNlcldpdGhUYWtlbkVtYWlsKHVzZXJEYXRhLCB1c2VySW5kZXgsIHJlc3VsdC5lcnJvcnMuZW1haWxbMF0uaWQpO1xuICAgIH0gZWxzZSBpZiAocmVzdWx0LmVycm9ycyAmJiByZXN1bHQuZXJyb3JzLmVtYWlsICYmIHJlc3VsdC5lcnJvcnMuZW1haWxbMF0uZXJyb3IgPT09IFwiaW52YWxpZFwiKSB7XG4gICAgICBjcmVhdGVVc2VyKHVzZXJEYXRhLCB1c2VySW5kZXgsIGZhbHNlKTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgcmVzdWx0LmVycm9ycyAmJlxuICAgICAgcmVzdWx0LmVycm9ycy5maXJzdF9uYW1lICYmXG4gICAgICByZXN1bHQuZXJyb3JzLmZpcnN0X25hbWVbMF0uZXJyb3IgPT09IFwiZMOpasOgIHV0aWxpc8OpXCJcbiAgICApIHtcbiAgICAgIGFsZXJ0KFxuICAgICAgICBcIkxhIGNyw6lhdGlvbiBkdSBjb21wdGUgYSDDqWNob3XDqS4gTCd1dGlsaXNhdGV1ciBzZW1ibGUgZXhpc3RlciBtYWlzIG4nYSBwdSDDqnRyZSByw6ljdXDDqXLDqS5cIlxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKHJlc3VsdC5lcnJvcnMgJiYgcmVzdWx0LmVycm9yc1swXSAmJiByZXN1bHQuZXJyb3JzWzBdLmJhc2UgPT09IFwiZm9yYmlkZGVuXCIpIHtcbiAgICAgIGFsZXJ0KFwiVm90cmUgY29tcHRlIGFnZW50IFJEVi1Tb2xpZGFyaXTDqXMgbmUgdm91cyBwZXJtZXQgcGFzIGQnZWZmZWN0dWVyIGNldHRlIGFjdGlvbi5cIik7XG4gICAgfSBlbHNlIGlmIChyZXN1bHQuZXJyb3JzICYmIHJlc3VsdC5lcnJvcnNbMF0pIHtcbiAgICAgIGFsZXJ0KHJlc3VsdC5lcnJvcnNbMF0pO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUxvZ2luID0gKHRva2VuSWQsIHVpZCwgY2xpZW50KSA9PiB7XG4gICAgc2V0VG9rZW4oeyAuLi50b2tlbiwgdG9rZW5JZDogdG9rZW5JZCwgdWlkOiB1aWQsIGNsaWVudDogY2xpZW50IH0pO1xuICAgIHNldElzTG9nZ2VkKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUZpbGUgPSBhc3luYyBmaWxlID0+IHtcbiAgICBpZiAoZGV2TW9kZSAmJiBmaWxlICE9IGRldkZpbGUpIHtcbiAgICAgIHNldERldkZpbGUoZmlsZSk7XG4gICAgfVxuICAgIHNldEZpbGVTaXplKGZpbGUuc2l6ZSk7XG4gICAgY29uc3Qgc3RhcnRfdGltZSA9IG5ldyBEYXRlKCk7XG5cbiAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBjb25zdCBmaWxlRGF0YSA9IG5ldyBVaW50OEFycmF5KGV2ZW50LnRhcmdldC5yZXN1bHQpO1xuICAgICAgICBjb25zdCB4bHMgPSBYTFNYLnJlYWQoZmlsZURhdGEsIHsgdHlwZTogXCJhcnJheVwiLCBjZWxsRGF0ZXM6IHRydWUsIGRhdGVORjogXCJkZC9tbS95eXl5XCIgfSk7XG4gICAgICAgIGNvbnN0IHdvcmtzaGVldCA9IHhscy5TaGVldHNbeGxzLlNoZWV0TmFtZXNbMF1dO1xuXG4gICAgICAgIGxldCBqc29uRGF0YSA9IFhMU1gudXRpbHMuc2hlZXRfdG9fanNvbih3b3Jrc2hlZXQsIHtcbiAgICAgICAgICBibGFua3Jvd3M6IGZhbHNlLFxuICAgICAgICAgIHJhdzogZmFsc2UsXG4gICAgICAgICAgZGVmdmFsOiBcIlwiLFxuICAgICAgICB9KTtcblxuICAgICAgICAvLyB3ZSByZW1vdmUgbGluZSBicmVha3MgZnJvbSBhbGwga2V5c1xuICAgICAgICBqc29uRGF0YSA9IGpzb25EYXRhLm1hcCh1c2VyRGF0YSA9PiB7XG4gICAgICAgICAgcmV0dXJuIFsuLi5PYmplY3Qua2V5cyh1c2VyRGF0YSldLnJlZHVjZSgocmVzLCBrZXkpID0+IHtcbiAgICAgICAgICAgIHJlc1trZXkucmVwbGFjZSgvW1xcblxccl0rL2csIFwiIFwiKV0gPSB1c2VyRGF0YVtrZXldO1xuICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgICB9LCB7fSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNldFVzZXJTdGF0dXNDaGVja2VkKGZhbHNlKTtcbiAgICAgICAgc2V0VXNlcnNEYXRhKGpzb25EYXRhKTtcbiAgICAgICAgZGlzcGF0Y2hSdW5zKHtcbiAgICAgICAgICB0eXBlOiBcImFwcGVuZFwiLFxuICAgICAgICAgIGl0ZW06IHtcbiAgICAgICAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDE5KSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiBuZXcgRGF0ZSgpIC0gc3RhcnRfdGltZSxcbiAgICAgICAgICAgIGZpbGVuYW1lOiBmaWxlLm5hbWUsXG4gICAgICAgICAgICBmaWxlU2l6ZTogZmlsZS5zaXplLFxuICAgICAgICAgICAgZmlsZUxpbmVzOiBqc29uRGF0YS5sZW5ndGgsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH07XG4gICAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoZmlsZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0gaGFuZGxlRmlsZT17aGFuZGxlRmlsZX0+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5FeHDDqXJpbWVudGF0aW9uIEFyZGVubmVzPC9oMT5cblxuICAgICAgICB7IWlzTG9nZ2VkICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNyZWF0ZX0+XG4gICAgICAgICAgICA8TG9naW5Gb3JtIGhhbmRsZUxvZ2luPXtoYW5kbGVMb2dpbn0gcmR2VXJsPXtSRFZfU09MSURBUklURVNfVVJMfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuXG4gICAgICAgIHtpc0xvZ2dlZCAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxGaWxlSGFuZGxlclxuICAgICAgICAgICAgICBoYW5kbGVGaWxlPXtoYW5kbGVGaWxlfVxuICAgICAgICAgICAgICBmaWxlU2l6ZT17ZmlsZVNpemV9XG4gICAgICAgICAgICAgIHBlbmRpbmdNZXNzYWdlPXtcIlLDqWN1cMOpcmF0aW9uIGRlcyBpbmZvcm1hdGlvbnMsIG1lcmNpIGRlIHBhdGllbnRlclwifVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAge3VzZXJzRGF0YSAmJiAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnN1YnRpdGxlfT5Cw6luw6lmaWNpYWlyZXMgUlNBPC9oMj5cblxuICAgICAgICAgICAgICAgIHt1c2Vyc0RhdGEubGVuZ3RoID09IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PkF1Y3VuIGLDqW7DqWZpY2lhaXJlIGRhbnMgbGUgZmljaGllcjwvcD5cbiAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAge3VzZXJzRGF0YS5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPkRhdGU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5Ob208L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5QcsOpbm9tPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+TWFpbDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPlTDqWzDqXBob25lPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+SUQgUkRWLVNvbGlkYXJpdMOpczwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjb2xTcGFuPVwiM1wiPkludml0YXRpb248L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNvbFNwYW49XCIxXCI+RGVybmllciBlbnZvaSBsZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjb2xTcGFuPVwiMVwiPkRhdGUgZCdpbnNjcmlwdGlvbjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjb2xTcGFuPVwiMVwiPkFjdGlvbjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIHJldmVyc2UgZXN0IHV0aWxpc8OpIHBvdXIgcXVlIGxlcyB1dGlsaXNhdGV1cnMgbGVzIHBsdXMgcsOpY2VudHMgYXBwYXJhaXNzZW50IGVuIGhhdXQgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICB7Wy4uLnVzZXJzRGF0YV0ucmV2ZXJzZSgpLm1hcCgodXNlciwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZyYWdtZW50IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyW1wiREFURVwiXSAhPT0gXCJcIiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9Pnt1c2VyW1wiREFURVwiXX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT57dXNlcltcIk5PTVwiXX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT57dXNlcltcIlBSRU5PTVwiXX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT57dXNlcltcIk1BSUxcIl19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+e3VzZXJbXCJURUxFUEhPTkVcIl19PC90ZD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXNlcltcIklEIFJEVlwiXSA9PT0gXCJcIiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNyZWF0ZVVzZXIodXNlciwgdXNlcnNEYXRhLmxlbmd0aCAtIGluZGV4IC0gMSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENyw6llciB1biBjb21wdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyW1wiSUQgUkRWXCJdICE9PSBcIlwiICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT57dXNlcltcIklEIFJEVlwiXX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT57dXNlcltcIkRhdGUgZCdpbnZpdGF0aW9uXCJdfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9Pnt1c2VyW1wiRGF0ZSBkJ2luc2NyaXB0aW9uXCJdfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyW1wiSUQgUkRWXCJdICE9PSBcIlwiICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZUludml0YXRpb25VcmwoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyW1wiSUQgUkRWXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcnNEYXRhLmxlbmd0aCAtIGluZGV4IC0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXNlcltcIkRhdGUgZCdpbnZpdGF0aW9uXCJdICE9PSBcIlwiICYmIFwiUmVnw6luw6lyZXIgaW52aXRhdGlvblwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXNlcltcIkRhdGUgZCdpbnZpdGF0aW9uXCJdID09PSBcIlwiICYmIFwiR8OpbsOpcmVyIGludml0YXRpb25cIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyW1wiSUQgUkRWXCJdID09PSBcIlwiICYmIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9PjwvdGQ+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cblxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0gb25DbGljaz17d3JpdGVGaWxlfT5cbiAgICAgICAgICAgICAgICAgICAgICBSZWfDqW7DqXJlciBmaWNoaWVyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuXG4gICAgICAgIDxGb290ZXJcbiAgICAgICAgICBzdWJqZWN0PVwiRXhww6lyaW1lbnRhdGlvbiBBcmRlbm5lc1wiXG4gICAgICAgICAgcG91cnF1b2k9XCJRdWVsIGVzdCBsJ29iamVjdGlmIGRlIGNldHRlIGV4cMOpcmltZW50YXRpb24mbmJzcDs/XCJcbiAgICAgICAgICB0ZXh0PXtcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRleHR9PlxuICAgICAgICAgICAgICAgIEZhY2lsaXRlciBsZSB0cmF2YWlsIGRlcyBhZ2VudHMgZHUgZMOpcGFydGVtZW50IGV0IHRlc3RlciBsJ3V0aWxpc2F0aW9uIGRlXG4gICAgICAgICAgICAgICAgbCdhcHBsaWNhdGlvbiBSRFYtU29saWRhcml0w6lzIHBvdXIgYWNjw6lsw6lyZXIgbGEgcHJpc2UgZHUgcHJlbWllciByZW5kZXotdm91c1xuICAgICAgICAgICAgICAgIGQnb3JpZW50YXRpb24uXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgIH1cbiAgICAgICAgLz5cbiAgICAgIDwvbWFpbj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=