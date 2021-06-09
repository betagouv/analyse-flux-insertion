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
              console.log(userData["DATE DE NAISSANCE"]);
              console.log(Object(_lib_dates__WEBPACK_IMPORTED_MODULE_15__["stringToDate"])(userData["DATE DE NAISSANCE"]));
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
              _context6.next = 10;
              return Object(_lib_appFetch__WEBPACK_IMPORTED_MODULE_13__["appFetch"])(userUrl, token, "POST", JSON.stringify(user));

            case 10:
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

            case 13:
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
        lineNumber: 232,
        columnNumber: 9
      }, this), !isLogged && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.create,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_loginForm__WEBPACK_IMPORTED_MODULE_11__["default"], {
          handleLogin: handleLogin,
          rdvUrl: RDV_SOLIDARITES_URL
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 236,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 235,
        columnNumber: 11
      }, this), isLogged && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_fileHandler__WEBPACK_IMPORTED_MODULE_9__["default"], {
          handleFile: handleFile,
          fileSize: fileSize,
          pendingMessage: "Récupération des informations, merci de patienter"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 242,
          columnNumber: 13
        }, this), usersData && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.subtitle,
            children: "B\xE9n\xE9ficiaires RSA"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 250,
            columnNumber: 17
          }, this), usersData.length == 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.description,
            children: "Aucun b\xE9n\xE9ficiaire dans le fichier"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 253,
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
                    lineNumber: 261,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    rowSpan: "2",
                    children: "Nom"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 262,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    rowSpan: "2",
                    children: "Pr\xE9nom"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 263,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    rowSpan: "2",
                    children: "Mail"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 264,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    rowSpan: "2",
                    children: "T\xE9l\xE9phone"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 265,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    rowSpan: "2",
                    children: "ID RDV-Solidarit\xE9s"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 266,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    colSpan: "3",
                    children: "Invitation"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 267,
                    columnNumber: 27
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 260,
                  columnNumber: 25
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    colSpan: "1",
                    children: "Dernier envoi le"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 270,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    colSpan: "1",
                    children: "Date d'inscription"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 271,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    colSpan: "1",
                    children: "Action"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 272,
                    columnNumber: 27
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 269,
                  columnNumber: 25
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 259,
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
                        lineNumber: 281,
                        columnNumber: 33
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center,
                        children: user["NOM"]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 282,
                        columnNumber: 33
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center,
                        children: user["PRENOM"]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 283,
                        columnNumber: 33
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center,
                        children: user["MAIL"]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 284,
                        columnNumber: 33
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center,
                        children: user["TELEPHONE"]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 285,
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
                          lineNumber: 289,
                          columnNumber: 37
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 288,
                        columnNumber: 35
                      }, _this), user["ID RDV"] !== "" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center,
                        children: user["ID RDV"]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 297,
                        columnNumber: 35
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center,
                        children: user["Date d'invitation"]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 299,
                        columnNumber: 33
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center,
                        children: user["Date d'inscription"]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 300,
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
                          lineNumber: 303,
                          columnNumber: 37
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 302,
                        columnNumber: 35
                      }, _this), user["ID RDV"] === "" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 316,
                        columnNumber: 59
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 280,
                      columnNumber: 31
                    }, _this)
                  }, index, false, {
                    fileName: _jsxFileName,
                    lineNumber: 278,
                    columnNumber: 27
                  }, _this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 275,
                columnNumber: 23
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 258,
              columnNumber: 21
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.button,
              onClick: writeFile,
              children: "Reg\xE9n\xE9rer fichier"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 324,
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
            lineNumber: 339,
            columnNumber: 15
          }, this)
        }, void 0, false)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 334,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 230,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXhwZXJpbWVudGF0aW9ucy9hcmRlbm5lcy1kZW1vL2luZGV4LmpzIl0sIm5hbWVzIjpbInJlZHVjZXIiLCJyZWR1Y2VyRmFjdG9yeSIsIkFyZGVubmVzIiwicm91dGVyIiwidXNlUm91dGVyIiwiaXNEZW1vIiwicGF0aG5hbWUiLCJpbmNsdWRlcyIsImRldk1vZGUiLCJvcmdhSUQiLCJwcm9jZXNzIiwiUkRWX1NPTElEQVJJVEVTX1VSTCIsInVzZXJVcmwiLCJ1c2VTdGF0ZSIsImRldkZpbGUiLCJzZXREZXZGaWxlIiwidXNlUmVkdWNlciIsImluaXRSZWR1Y2VyIiwicnVucyIsImRpc3BhdGNoUnVucyIsInVzZXJzRGF0YSIsInNldFVzZXJzRGF0YSIsInVzZXJTdGF0dXNDaGVja2VkIiwic2V0VXNlclN0YXR1c0NoZWNrZWQiLCJmaWxlU2l6ZSIsInNldEZpbGVTaXplIiwiaXNMb2dnZWQiLCJzZXRJc0xvZ2dlZCIsInRva2VuSWQiLCJ1aWQiLCJjbGllbnQiLCJ0b2tlbiIsInNldFRva2VuIiwidXNlRWZmZWN0IiwiaGFuZGxlRmlsZSIsImZvckVhY2giLCJ1c2VyIiwidXNlckluZGV4IiwiY2hlY2tVc2VySW52aXRhdGlvblN0YXR1cyIsIndyaXRlRmlsZSIsIm91dFdvcmtib29rIiwiWExTWCIsImJvb2tfbmV3Iiwib3V0V29ya3NoZWV0IiwianNvbl90b19zaGVldCIsImJvb2tfYXBwZW5kX3NoZWV0IiwiZ2V0RGF0ZVRpbWVTdHJpbmciLCJEYXRlIiwiZ2VuZXJhdGVJbnZpdGF0aW9uVXJsIiwidXNlcklkIiwiaW52aXRhdGlvblVybCIsImFwcEZldGNoIiwicmVzdWx0IiwibmV3VXNlcnNEYXRhIiwiaW52aXRhdGlvbl91cmwiLCJpbnZpdGF0aW9uX3Rva2VuIiwiZ2V0RnJlbmNoRm9ybWF0RGF0ZVN0cmluZyIsImdldFVzZXIiLCJnZXRVc2VyVXJsIiwiaW52aXRhdGlvbl9jcmVhdGVkX2F0IiwiaW52aXRhdGlvbl9kYXRlIiwic3Vic3RyaW5nIiwiaW52aXRhdGlvbl9hY2NlcHRlZF9hdCIsImluc2NyaXB0aW9uX2RhdGUiLCJkaXNwbGF5QWRkcmVzcyIsInVzZXJEYXRhIiwiaGFuZGxlVXNlcldpdGhUYWtlbkVtYWlsIiwiZmlyc3RfbmFtZSIsInRvVXBwZXJDYXNlIiwibGFzdF9uYW1lIiwiYmlydGhfZGF0ZSIsImFwcGxpY2F0aW9uRGF0ZVRvU3RyaW5nIiwic3RyaW5nVG9EYXRlIiwiYWRkcmVzcyIsImFsZXJ0IiwiY3JlYXRlVXNlciIsIndpdGhFbWFpbCIsInJlc3BvbnNpYmxlX2lkIiwidHJpbSIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJwaG9uZV9udW1iZXIiLCJyZXBsYWNlIiwiY2Fpc3NlX2FmZmlsaWF0aW9uIiwiYWZmaWxpYXRpb25fbnVtYmVyIiwib3JnYW5pc2F0aW9uX2lkcyIsImVtYWlsIiwiSlNPTiIsInN0cmluZ2lmeSIsImlkIiwiZXJyb3JzIiwiZXJyb3IiLCJiYXNlIiwiaGFuZGxlTG9naW4iLCJmaWxlIiwic2l6ZSIsInN0YXJ0X3RpbWUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJldmVudCIsImZpbGVEYXRhIiwiVWludDhBcnJheSIsInRhcmdldCIsInhscyIsInR5cGUiLCJjZWxsRGF0ZXMiLCJkYXRlTkYiLCJ3b3Jrc2hlZXQiLCJTaGVldHMiLCJTaGVldE5hbWVzIiwianNvbkRhdGEiLCJzaGVldF90b19qc29uIiwiYmxhbmtyb3dzIiwicmF3IiwiZGVmdmFsIiwibWFwIiwiT2JqZWN0Iiwia2V5cyIsInJlZHVjZSIsInJlcyIsImtleSIsIml0ZW0iLCJ0aW1lc3RhbXAiLCJ0b0lTT1N0cmluZyIsInNsaWNlIiwiZHVyYXRpb24iLCJmaWxlbmFtZSIsIm5hbWUiLCJmaWxlTGluZXMiLCJyZWFkQXNBcnJheUJ1ZmZlciIsInN0eWxlcyIsImNvbnRhaW5lciIsIm1haW4iLCJ0aXRsZSIsImNyZWF0ZSIsInN1YnRpdGxlIiwiZGVzY3JpcHRpb24iLCJyZXZlcnNlIiwiaW5kZXgiLCJjZW50ZXIiLCJidXR0b24iLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHQywyRUFBYyxDQUFDLGdEQUFELENBQTlCO0FBRWUsU0FBU0MsUUFBVCxHQUFvQjtBQUFBOztBQUFBOztBQUNqQyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHRixNQUFNLENBQUNHLFFBQVAsQ0FBZ0JDLFFBQWhCLENBQXlCLE1BQXpCLENBQWY7QUFDQSxNQUFNQyxPQUFPLE9BQWI7QUFDQSxNQUFNQyxNQUFNLEdBQUdKLE1BQU0sR0FDakJLLEdBRGlCLEdBRWpCQSxHQUZKO0FBSUEsTUFBTUMsbUJBQW1CLEdBQUdOLE1BQU0sR0FDOUJLLHVCQUQ4QixHQUU5QkEsdUJBRko7QUFHQSxNQUFNRSxPQUFPLEdBQUdELG1CQUFtQixHQUFHLGVBQXRDOztBQVhpQyxrQkFhSEUsc0RBQVEsQ0FBQyxJQUFELENBYkw7QUFBQSxNQWExQkMsT0FiMEI7QUFBQSxNQWFqQkMsVUFiaUI7O0FBQUEsb0JBY0pDLHdEQUFVLENBQUNoQixPQUFELEVBQVUsRUFBVixFQUFjaUIsZ0VBQWQsQ0FkTjtBQUFBLE1BYzFCQyxJQWQwQjtBQUFBLE1BY3BCQyxZQWRvQjs7QUFBQSxtQkFlQ04sc0RBQVEsQ0FBQyxJQUFELENBZlQ7QUFBQSxNQWUxQk8sU0FmMEI7QUFBQSxNQWVmQyxZQWZlOztBQUFBLG1CQWdCaUJSLHNEQUFRLENBQUMsS0FBRCxDQWhCekI7QUFBQSxNQWdCMUJTLGlCQWhCMEI7QUFBQSxNQWdCUEMsb0JBaEJPOztBQUFBLG1CQWlCRFYsc0RBQVEsQ0FBQyxDQUFELENBakJQO0FBQUEsTUFpQjFCVyxRQWpCMEI7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c0JBVkosZUF1R0UscUVBQUMsMkRBQUQ7QUFDRSxlQUFPLEVBQUMsNkJBRFY7QUFFRSxnQkFBUSxFQUFDLHNEQUZYO0FBR0UsWUFBSSxlQUNGO0FBQUEsaUNBQ0U7QUFBRyxxQkFBUyxFQUFFK0YsK0RBQU0sQ0FBQ1csSUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F2R0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBeUhEOztHQTdVdUIvSSxRO1VBQ1BFLHFEOzs7S0FET0YsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9leHBlcmltZW50YXRpb25zL2FyZGVubmVzLWRlbW8uMDU2ZjFkYzA3ZjZkOGNhNTJjMTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZyYWdtZW50LCB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWR1Y2VyIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCAqIGFzIFhMU1ggZnJvbSBcInhsc3hcIjtcblxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9sYXlvdXRcIjtcbmltcG9ydCBGaWxlSGFuZGxlciBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9maWxlSGFuZGxlclwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9mb290ZXJcIjtcbmltcG9ydCBMb2dpbkZvcm0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvbG9naW5Gb3JtXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi8uLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5cbmltcG9ydCB7IGFwcEZldGNoIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9hcHBGZXRjaFwiO1xuaW1wb3J0IHsgaW5pdFJlZHVjZXIsIHJlZHVjZXJGYWN0b3J5IH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9yZWR1Y2VyRmFjdG9yeVwiO1xuaW1wb3J0IHsgYXBwbGljYXRpb25EYXRlVG9TdHJpbmcsIGdldERhdGVUaW1lU3RyaW5nLCBnZXRGcmVuY2hGb3JtYXREYXRlU3RyaW5nLCBzdHJpbmdUb0RhdGUgfSBmcm9tIFwiLi4vLi4vLi4vbGliL2RhdGVzXCI7XG5cbmNvbnN0IHJlZHVjZXIgPSByZWR1Y2VyRmFjdG9yeShcIkV4cMOpcmltZW50YXRpb24gQXJkZW5uZXMgLSBDTkFGIC0gQsOpbsOpZmljaWFpcmVcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFyZGVubmVzKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgaXNEZW1vID0gcm91dGVyLnBhdGhuYW1lLmluY2x1ZGVzKFwiZGVtb1wiKTtcbiAgY29uc3QgZGV2TW9kZSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09IFwiZGV2ZWxvcG1lbnRcIjtcbiAgY29uc3Qgb3JnYUlEID0gaXNEZW1vXG4gICAgPyBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19PUkdBTklTQVRJT05fSURfREVNT1xuICAgIDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfT1JHQU5JU0FUSU9OX0lEX1BST0Q7XG5cbiAgY29uc3QgUkRWX1NPTElEQVJJVEVTX1VSTCA9IGlzRGVtb1xuICAgID8gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUkRWX1NPTElEQVJJVEVTX0RFTU9fVVJMXG4gICAgOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19SRFZfU09MSURBUklURVNfUFJPRF9VUkw7XG4gIGNvbnN0IHVzZXJVcmwgPSBSRFZfU09MSURBUklURVNfVVJMICsgXCIvYXBpL3YxL3VzZXJzXCI7XG5cbiAgY29uc3QgW2RldkZpbGUsIHNldERldkZpbGVdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtydW5zLCBkaXNwYXRjaFJ1bnNdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBbXSwgaW5pdFJlZHVjZXIpO1xuICBjb25zdCBbdXNlcnNEYXRhLCBzZXRVc2Vyc0RhdGFdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFt1c2VyU3RhdHVzQ2hlY2tlZCwgc2V0VXNlclN0YXR1c0NoZWNrZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZmlsZVNpemUsIHNldEZpbGVTaXplXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbaXNMb2dnZWQsIHNldElzTG9nZ2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Rva2VuLCBzZXRUb2tlbl0gPSB1c2VTdGF0ZSh7XG4gICAgdG9rZW5JZDogXCJcIixcbiAgICB1aWQ6IFwiXCIsXG4gICAgY2xpZW50OiBcIlwiLFxuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkZXZGaWxlKSB7XG4gICAgICBoYW5kbGVGaWxlKGRldkZpbGUpO1xuICAgIH1cbiAgfSwgW2RldkZpbGVdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh1c2Vyc0RhdGEgJiYgdXNlclN0YXR1c0NoZWNrZWQgPT09IGZhbHNlKSB7XG4gICAgICB1c2Vyc0RhdGEuZm9yRWFjaCgodXNlciwgdXNlckluZGV4KSA9PiB7XG4gICAgICAgIGlmICh1c2VyW1wiSUQgUkRWXCJdICE9IFwiXCIpIHtcbiAgICAgICAgICBjaGVja1VzZXJJbnZpdGF0aW9uU3RhdHVzKHVzZXJbXCJJRCBSRFZcIl0sIHVzZXJJbmRleCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgc2V0VXNlclN0YXR1c0NoZWNrZWQodHJ1ZSk7XG4gICAgfVxuICB9LCBbdXNlcnNEYXRhXSk7XG5cbiAgY29uc3Qgd3JpdGVGaWxlID0gKCkgPT4ge1xuICAgIGNvbnN0IG91dFdvcmtib29rID0gWExTWC51dGlscy5ib29rX25ldygpO1xuICAgIGNvbnN0IG91dFdvcmtzaGVldCA9IFhMU1gudXRpbHMuanNvbl90b19zaGVldCh1c2Vyc0RhdGEpO1xuICAgIFhMU1gudXRpbHMuYm9va19hcHBlbmRfc2hlZXQob3V0V29ya2Jvb2ssIG91dFdvcmtzaGVldCwgXCJESVZFUkdFTkNFU1wiKTtcbiAgICAvLyBYTFNYLnV0aWxzLmJvb2tfYXBwZW5kX3NoZWV0KG91dFdvcmtib29rLCB4bHMuU2hlZXRzW3hscy5TaGVldE5hbWVzWzFdXSwgXCJHUkFQSElRVUVcIik7XG4gICAgLy8gWExTWC51dGlscy5ib29rX2FwcGVuZF9zaGVldChvdXRXb3JrYm9vaywgeGxzLlNoZWV0c1t4bHMuU2hlZXROYW1lc1syXV0sIFwiU2VsZWN0aW9uIENPQVwiKTtcbiAgICBYTFNYLndyaXRlRmlsZShvdXRXb3JrYm9vaywgYGFyZGVubmVzX3JzYV8ke2dldERhdGVUaW1lU3RyaW5nKG5ldyBEYXRlKCkpfS54bHN4YCk7XG4gIH07XG5cbiAgYXN5bmMgZnVuY3Rpb24gZ2VuZXJhdGVJbnZpdGF0aW9uVXJsKHVzZXJJZCwgdXNlckluZGV4KSB7XG4gICAgY29uc3QgaW52aXRhdGlvblVybCA9IHVzZXJVcmwgKyBgLyR7dXNlcklkfS9pbnZpdGVgO1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGFwcEZldGNoKGludml0YXRpb25VcmwsIHRva2VuKTtcblxuICAgIGxldCBuZXdVc2Vyc0RhdGEgPSBbLi4udXNlcnNEYXRhXTtcbiAgICBpZiAocmVzdWx0Lmludml0YXRpb25fdXJsKSB7XG4gICAgICBuZXdVc2Vyc0RhdGFbdXNlckluZGV4XVtcIkxpZW4gZCdpbnZpdGF0aW9uXCJdID0gcmVzdWx0Lmludml0YXRpb25fdXJsO1xuICAgIH0gZWxzZSBpZiAocmVzdWx0Lmludml0YXRpb25fdG9rZW4pIHtcbiAgICAgIG5ld1VzZXJzRGF0YVt1c2VySW5kZXhdW1wiQ29kZSBkJ2ludml0YXRpb25cIl0gPSByZXN1bHQuaW52aXRhdGlvbl90b2tlbjtcbiAgICB9XG4gICAgbmV3VXNlcnNEYXRhW3VzZXJJbmRleF1bXCJEYXRlIGQnaW52aXRhdGlvblwiXSA9IGdldEZyZW5jaEZvcm1hdERhdGVTdHJpbmcobmV3IERhdGUoKSk7XG4gICAgc2V0VXNlcnNEYXRhKG5ld1VzZXJzRGF0YSk7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBnZXRVc2VyKHVzZXJJZCkge1xuICAgIGNvbnN0IGdldFVzZXJVcmwgPSB1c2VyVXJsICsgYC8ke3VzZXJJZH1gO1xuICAgIHJldHVybiBhd2FpdCBhcHBGZXRjaChnZXRVc2VyVXJsLCB0b2tlbik7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBjaGVja1VzZXJJbnZpdGF0aW9uU3RhdHVzKHVzZXJJZCwgdXNlckluZGV4KSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0VXNlcih1c2VySWQpO1xuXG4gICAgbGV0IG5ld1VzZXJzRGF0YSA9IFsuLi51c2Vyc0RhdGFdO1xuICAgIGlmIChyZXN1bHQudXNlci5pbnZpdGF0aW9uX2NyZWF0ZWRfYXQpIHtcbiAgICAgIGxldCBpbnZpdGF0aW9uX2RhdGUgPSByZXN1bHQudXNlci5pbnZpdGF0aW9uX2NyZWF0ZWRfYXQgLy8gRGF0ZSBhdSBmb3JtYXQgOiAyMDIxLTA0LTE1IDE0OjUzOjU2ICswMjAwXG4gICAgICAgIC5zdWJzdHJpbmcoMCwgMTApOyAvLyBSw6ljdXDDqXJlciBsZXMgMTAgcHJlbWllcnMgY2hpZmZyZXMgKGxhIGRhdGUpXG4gICAgICBpbnZpdGF0aW9uX2RhdGUgPSBuZXcgRGF0ZShpbnZpdGF0aW9uX2RhdGUpOyAvLyBDcsOpZXIgdW5lIGRhdGUgSlNcbiAgICAgIG5ld1VzZXJzRGF0YVt1c2VySW5kZXhdW1wiRGF0ZSBkJ2ludml0YXRpb25cIl0gPSBnZXRGcmVuY2hGb3JtYXREYXRlU3RyaW5nKGludml0YXRpb25fZGF0ZSk7XG4gICAgfVxuICAgIGlmIChyZXN1bHQudXNlci5pbnZpdGF0aW9uX2FjY2VwdGVkX2F0KSB7XG4gICAgICBsZXQgaW5zY3JpcHRpb25fZGF0ZSA9IHJlc3VsdC51c2VyLmludml0YXRpb25fYWNjZXB0ZWRfYXQgLy8gRGF0ZSBhdSBmb3JtYXQgOiAyMDIxLTA0LTE1IDE0OjUzOjU2ICswMjAwXG4gICAgICAgIC5zdWJzdHJpbmcoMCwgMTApOyAvLyBSw6ljdXDDqXJlciBsZXMgMTAgcHJlbWllcnMgY2hpZmZyZXMgKGxhIGRhdGUpXG4gICAgICBpbnNjcmlwdGlvbl9kYXRlID0gbmV3IERhdGUoaW5zY3JpcHRpb25fZGF0ZSk7IC8vIENyw6llciB1bmUgZGF0ZSBKU1xuICAgICAgbmV3VXNlcnNEYXRhW3VzZXJJbmRleF1bXCJEYXRlIGQnaW5zY3JpcHRpb25cIl0gPSBnZXRGcmVuY2hGb3JtYXREYXRlU3RyaW5nKGluc2NyaXB0aW9uX2RhdGUpO1xuICAgIH1cbiAgICBzZXRVc2Vyc0RhdGEobmV3VXNlcnNEYXRhKTtcbiAgfVxuXG4gIGNvbnN0IGRpc3BsYXlBZGRyZXNzID0gdXNlckRhdGEgPT4ge1xuICAgIHJldHVybiB1c2VyRGF0YVtcIkFEUkVTU0VcIl0gKyBcIiAtIFwiICsgdXNlckRhdGFbXCJDT0RFIFBPU1RBTFwiXSArIFwiIFwiICsgdXNlckRhdGFbXCJWSUxMRVwiXTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVVzZXJXaXRoVGFrZW5FbWFpbCh1c2VyRGF0YSwgdXNlckluZGV4LCB1c2VySWQpIHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRVc2VyKHVzZXJJZCk7XG5cbiAgICAvLyBWw6lyaWZpZSBkJ2Fib3JkIHNpIGwndXRpbGlzYXRldXIgYXZlYyBsZSBtw6ptZSBlbWFpbCBlc3QgdW4gZG91YmxvblxuICAgIGlmIChcbiAgICAgIHJlc3VsdCAmJlxuICAgICAgcmVzdWx0LnVzZXIgJiZcbiAgICAgIHJlc3VsdC51c2VyLmZpcnN0X25hbWUudG9VcHBlckNhc2UoKSA9PT0gdXNlckRhdGFbXCJQUkVOT01cIl0udG9VcHBlckNhc2UoKSAmJlxuICAgICAgcmVzdWx0LnVzZXIubGFzdF9uYW1lLnRvVXBwZXJDYXNlKCkgPT09IHVzZXJEYXRhW1wiTk9NXCJdLnRvVXBwZXJDYXNlKCkgJiZcbiAgICAgIHJlc3VsdC51c2VyLmJpcnRoX2RhdGUgPT09XG4gICAgICAgIGFwcGxpY2F0aW9uRGF0ZVRvU3RyaW5nKHN0cmluZ1RvRGF0ZSh1c2VyRGF0YVtcIkRBVEUgREUgTkFJU1NBTkNFXCJdKSkgJiZcbiAgICAgIHJlc3VsdC51c2VyLmFkZHJlc3MudG9VcHBlckNhc2UoKSA9PT0gZGlzcGxheUFkZHJlc3ModXNlckRhdGEpLnRvVXBwZXJDYXNlKClcbiAgICApIHtcbiAgICAgIGxldCBuZXdVc2Vyc0RhdGEgPSBbLi4udXNlcnNEYXRhXTtcbiAgICAgIG5ld1VzZXJzRGF0YVt1c2VySW5kZXhdW1wiSUQgUkRWXCJdID0gdXNlcklkO1xuICAgICAgc2V0VXNlcnNEYXRhKG5ld1VzZXJzRGF0YSk7XG4gICAgICBjaGVja1VzZXJJbnZpdGF0aW9uU3RhdHVzKHVzZXJJZCwgdXNlckluZGV4KTtcbiAgICAgIGFsZXJ0KFwiVW4gY29tcHRlIGFzc29jacOpIMOgIGNldCBlbWFpbCBleGlzdGUgZMOpasOgXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjcmVhdGVVc2VyKHVzZXJEYXRhLCB1c2VySW5kZXgsIGZhbHNlLCB1c2VySWQpOyAvLyBTaSBjZSBuJ2VzdCBwYXMgdW4gZG91YmxvbiwgY3LDqWUgdW4gdXRpbGlzYXRldXIgZW4gdGFudCBxdWUgXCJwcm9jaGVcIiBkZSBsJ3V0aWxpc2F0ZXVyIGV4aXN0YW50XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVXNlcih1c2VyRGF0YSwgdXNlckluZGV4LCB3aXRoRW1haWwgPSB0cnVlLCByZXNwb25zaWJsZV9pZCA9IG51bGwpIHtcbiAgICBjb25zdCBhZGRyZXNzID0gZGlzcGxheUFkZHJlc3ModXNlckRhdGEpO1xuICAgIGlmIChbMTMsIDE1XS5pbmNsdWRlcyh1c2VyRGF0YVtcIk7CsENBRlwiXS50cmltKCkubGVuZ3RoKSkgdXNlckRhdGFbXCJOwrBDQUZcIl0gPSBcIlwiXG4gICAgY29uc29sZS5sb2codXNlckRhdGFbXCJEQVRFIERFIE5BSVNTQU5DRVwiXSlcbiAgICBjb25zb2xlLmxvZyhzdHJpbmdUb0RhdGUodXNlckRhdGFbXCJEQVRFIERFIE5BSVNTQU5DRVwiXSkpXG5cbiAgICBsZXQgdXNlciA9IHtcbiAgICAgIGZpcnN0X25hbWU6IHVzZXJEYXRhW1wiUFJFTk9NXCJdLFxuICAgICAgbGFzdF9uYW1lOiB1c2VyRGF0YVtcIk5PTVwiXSxcbiAgICAgIHBob25lX251bWJlcjogdXNlckRhdGFbXCJURUxFUEhPTkVcIl0ucmVwbGFjZSgvXFxzKy9nLCBcIlwiKSxcbiAgICAgIGJpcnRoX2RhdGU6IHN0cmluZ1RvRGF0ZSh1c2VyRGF0YVtcIkRBVEUgREUgTkFJU1NBTkNFXCJdKSxcbiAgICAgIGFkZHJlc3M6IGFkZHJlc3MsXG4gICAgICBjYWlzc2VfYWZmaWxpYXRpb246IFwiY2FmXCIsXG4gICAgICBhZmZpbGlhdGlvbl9udW1iZXI6IHVzZXJEYXRhW1wiTsKwQ0FGXCJdLFxuICAgICAgb3JnYW5pc2F0aW9uX2lkczogW29yZ2FJRF0sXG4gICAgICByZXNwb25zaWJsZV9pZDogcmVzcG9uc2libGVfaWRcbiAgICB9O1xuICAgIGlmICh3aXRoRW1haWwgPT09IHRydWUpIHVzZXIuZW1haWwgPSB1c2VyRGF0YVtcIk1BSUxcIl07XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBhcHBGZXRjaCh1c2VyVXJsLCB0b2tlbiwgXCJQT1NUXCIsIEpTT04uc3RyaW5naWZ5KHVzZXIpKTtcblxuICAgIGxldCBuZXdVc2Vyc0RhdGEgPSBbLi4udXNlcnNEYXRhXTtcbiAgICBpZiAocmVzdWx0LnVzZXIpIHtcbiAgICAgIG5ld1VzZXJzRGF0YVt1c2VySW5kZXhdW1wiSUQgUkRWXCJdID0gcmVzdWx0LnVzZXIuaWQ7XG4gICAgICBzZXRVc2Vyc0RhdGEobmV3VXNlcnNEYXRhKTtcbiAgICAgIGdlbmVyYXRlSW52aXRhdGlvblVybChyZXN1bHQudXNlci5pZCwgdXNlckluZGV4KTtcbiAgICB9IGVsc2UgaWYgKHJlc3VsdC5lcnJvcnMgJiYgcmVzdWx0LmVycm9ycy5lbWFpbCAmJiByZXN1bHQuZXJyb3JzLmVtYWlsWzBdLmVycm9yID09PSBcInRha2VuXCIpIHtcbiAgICAgIGhhbmRsZVVzZXJXaXRoVGFrZW5FbWFpbCh1c2VyRGF0YSwgdXNlckluZGV4LCByZXN1bHQuZXJyb3JzLmVtYWlsWzBdLmlkKTtcbiAgICB9IGVsc2UgaWYgKHJlc3VsdC5lcnJvcnMgJiYgcmVzdWx0LmVycm9ycy5lbWFpbCAmJiByZXN1bHQuZXJyb3JzLmVtYWlsWzBdLmVycm9yID09PSBcImludmFsaWRcIikge1xuICAgICAgY3JlYXRlVXNlcih1c2VyRGF0YSwgdXNlckluZGV4LCBmYWxzZSk7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIHJlc3VsdC5lcnJvcnMgJiZcbiAgICAgIHJlc3VsdC5lcnJvcnMuZmlyc3RfbmFtZSAmJlxuICAgICAgcmVzdWx0LmVycm9ycy5maXJzdF9uYW1lWzBdLmVycm9yID09PSBcImTDqWrDoCB1dGlsaXPDqVwiXG4gICAgKSB7XG4gICAgICBhbGVydChcbiAgICAgICAgXCJMYSBjcsOpYXRpb24gZHUgY29tcHRlIGEgw6ljaG91w6kuIEwndXRpbGlzYXRldXIgc2VtYmxlIGV4aXN0ZXIgbWFpcyBuJ2EgcHUgw6p0cmUgcsOpY3Vww6lyw6kuXCJcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmIChyZXN1bHQuZXJyb3JzICYmIHJlc3VsdC5lcnJvcnNbMF0gJiYgcmVzdWx0LmVycm9yc1swXS5iYXNlID09PSBcImZvcmJpZGRlblwiKSB7XG4gICAgICBhbGVydChcIlZvdHJlIGNvbXB0ZSBhZ2VudCBSRFYtU29saWRhcml0w6lzIG5lIHZvdXMgcGVybWV0IHBhcyBkJ2VmZmVjdHVlciBjZXR0ZSBhY3Rpb24uXCIpO1xuICAgIH0gZWxzZSBpZiAocmVzdWx0LmVycm9ycyAmJiByZXN1bHQuZXJyb3JzWzBdKSB7XG4gICAgICBhbGVydChyZXN1bHQuZXJyb3JzWzBdKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBoYW5kbGVMb2dpbiA9ICh0b2tlbklkLCB1aWQsIGNsaWVudCkgPT4ge1xuICAgIHNldFRva2VuKHsgLi4udG9rZW4sIHRva2VuSWQ6IHRva2VuSWQsIHVpZDogdWlkLCBjbGllbnQ6IGNsaWVudCB9KTtcbiAgICBzZXRJc0xvZ2dlZCh0cnVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVGaWxlID0gYXN5bmMgZmlsZSA9PiB7XG4gICAgaWYgKGRldk1vZGUgJiYgZmlsZSAhPSBkZXZGaWxlKSB7XG4gICAgICBzZXREZXZGaWxlKGZpbGUpO1xuICAgIH1cbiAgICBzZXRGaWxlU2l6ZShmaWxlLnNpemUpO1xuICAgIGNvbnN0IHN0YXJ0X3RpbWUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgZmlsZURhdGEgPSBuZXcgVWludDhBcnJheShldmVudC50YXJnZXQucmVzdWx0KTtcbiAgICAgICAgY29uc3QgeGxzID0gWExTWC5yZWFkKGZpbGVEYXRhLCB7IHR5cGU6IFwiYXJyYXlcIiwgY2VsbERhdGVzOiB0cnVlLCBkYXRlTkY6IFwiZGQvbW0veXl5eVwiIH0pO1xuICAgICAgICBjb25zdCB3b3Jrc2hlZXQgPSB4bHMuU2hlZXRzW3hscy5TaGVldE5hbWVzWzBdXTtcblxuICAgICAgICBsZXQganNvbkRhdGEgPSBYTFNYLnV0aWxzLnNoZWV0X3RvX2pzb24od29ya3NoZWV0LCB7XG4gICAgICAgICAgYmxhbmtyb3dzOiBmYWxzZSxcbiAgICAgICAgICByYXc6IGZhbHNlLFxuICAgICAgICAgIGRlZnZhbDogXCJcIixcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gd2UgcmVtb3ZlIGxpbmUgYnJlYWtzIGZyb20gYWxsIGtleXNcbiAgICAgICAganNvbkRhdGEgPSBqc29uRGF0YS5tYXAodXNlckRhdGEgPT4ge1xuICAgICAgICAgIHJldHVybiBbLi4uT2JqZWN0LmtleXModXNlckRhdGEpXS5yZWR1Y2UoKHJlcywga2V5KSA9PiB7XG4gICAgICAgICAgICByZXNba2V5LnJlcGxhY2UoL1tcXG5cXHJdKy9nLCBcIiBcIildID0gdXNlckRhdGFba2V5XTtcbiAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgICAgfSwge30pO1xuICAgICAgICB9KTtcblxuICAgICAgICBzZXRVc2VyU3RhdHVzQ2hlY2tlZChmYWxzZSk7XG4gICAgICAgIHNldFVzZXJzRGF0YShqc29uRGF0YSk7XG4gICAgICAgIGRpc3BhdGNoUnVucyh7XG4gICAgICAgICAgdHlwZTogXCJhcHBlbmRcIixcbiAgICAgICAgICBpdGVtOiB7XG4gICAgICAgICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxOSksXG4gICAgICAgICAgICBkdXJhdGlvbjogbmV3IERhdGUoKSAtIHN0YXJ0X3RpbWUsXG4gICAgICAgICAgICBmaWxlbmFtZTogZmlsZS5uYW1lLFxuICAgICAgICAgICAgZmlsZVNpemU6IGZpbGUuc2l6ZSxcbiAgICAgICAgICAgIGZpbGVMaW5lczoganNvbkRhdGEubGVuZ3RoLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9O1xuICAgICAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGZpbGUpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dCBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9IGhhbmRsZUZpbGU9e2hhbmRsZUZpbGV9PlxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+RXhww6lyaW1lbnRhdGlvbiBBcmRlbm5lczwvaDE+XG5cbiAgICAgICAgeyFpc0xvZ2dlZCAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jcmVhdGV9PlxuICAgICAgICAgICAgPExvZ2luRm9ybSBoYW5kbGVMb2dpbj17aGFuZGxlTG9naW59IHJkdlVybD17UkRWX1NPTElEQVJJVEVTX1VSTH0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cblxuICAgICAgICB7aXNMb2dnZWQgJiYgKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8RmlsZUhhbmRsZXJcbiAgICAgICAgICAgICAgaGFuZGxlRmlsZT17aGFuZGxlRmlsZX1cbiAgICAgICAgICAgICAgZmlsZVNpemU9e2ZpbGVTaXplfVxuICAgICAgICAgICAgICBwZW5kaW5nTWVzc2FnZT17XCJSw6ljdXDDqXJhdGlvbiBkZXMgaW5mb3JtYXRpb25zLCBtZXJjaSBkZSBwYXRpZW50ZXJcIn1cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIHt1c2Vyc0RhdGEgJiYgKFxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5zdWJ0aXRsZX0+QsOpbsOpZmljaWFpcmVzIFJTQTwvaDI+XG5cbiAgICAgICAgICAgICAgICB7dXNlcnNEYXRhLmxlbmd0aCA9PSAwICYmIChcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5BdWN1biBiw6luw6lmaWNpYWlyZSBkYW5zIGxlIGZpY2hpZXI8L3A+XG4gICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgIHt1c2Vyc0RhdGEubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5EYXRlPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+Tm9tPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+UHLDqW5vbTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPk1haWw8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5Uw6lsw6lwaG9uZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPklEIFJEVi1Tb2xpZGFyaXTDqXM8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj1cIjNcIj5JbnZpdGF0aW9uPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjb2xTcGFuPVwiMVwiPkRlcm5pZXIgZW52b2kgbGU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj1cIjFcIj5EYXRlIGQnaW5zY3JpcHRpb248L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj1cIjFcIj5BY3Rpb248L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiByZXZlcnNlIGVzdCB1dGlsaXPDqSBwb3VyIHF1ZSBsZXMgdXRpbGlzYXRldXJzIGxlcyBwbHVzIHLDqWNlbnRzIGFwcGFyYWlzc2VudCBlbiBoYXV0ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAge1suLi51c2Vyc0RhdGFdLnJldmVyc2UoKS5tYXAoKHVzZXIsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGcmFnbWVudCBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXNlcltcIkRBVEVcIl0gIT09IFwiXCIgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT57dXNlcltcIkRBVEVcIl19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+e3VzZXJbXCJOT01cIl19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+e3VzZXJbXCJQUkVOT01cIl19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+e3VzZXJbXCJNQUlMXCJdfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9Pnt1c2VyW1wiVEVMRVBIT05FXCJdfTwvdGQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3VzZXJbXCJJRCBSRFZcIl0gPT09IFwiXCIgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjcmVhdGVVc2VyKHVzZXIsIHVzZXJzRGF0YS5sZW5ndGggLSBpbmRleCAtIDEpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDcsOpZXIgdW4gY29tcHRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXNlcltcIklEIFJEVlwiXSAhPT0gXCJcIiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+e3VzZXJbXCJJRCBSRFZcIl19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+e3VzZXJbXCJEYXRlIGQnaW52aXRhdGlvblwiXX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT57dXNlcltcIkRhdGUgZCdpbnNjcmlwdGlvblwiXX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXNlcltcIklEIFJEVlwiXSAhPT0gXCJcIiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVJbnZpdGF0aW9uVXJsKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcltcIklEIFJEVlwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJzRGF0YS5sZW5ndGggLSBpbmRleCAtIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3VzZXJbXCJEYXRlIGQnaW52aXRhdGlvblwiXSAhPT0gXCJcIiAmJiBcIlJlZ8OpbsOpcmVyIGludml0YXRpb25cIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3VzZXJbXCJEYXRlIGQnaW52aXRhdGlvblwiXSA9PT0gXCJcIiAmJiBcIkfDqW7DqXJlciBpbnZpdGF0aW9uXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXNlcltcIklEIFJEVlwiXSA9PT0gXCJcIiAmJiA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT48L3RkPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259IG9uQ2xpY2s9e3dyaXRlRmlsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgUmVnw6luw6lyZXIgZmljaGllclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cblxuICAgICAgICA8Rm9vdGVyXG4gICAgICAgICAgc3ViamVjdD1cIkV4cMOpcmltZW50YXRpb24gQXJkZW5uZXNcIlxuICAgICAgICAgIHBvdXJxdW9pPVwiUXVlbCBlc3QgbCdvYmplY3RpZiBkZSBjZXR0ZSBleHDDqXJpbWVudGF0aW9uJm5ic3A7P1wiXG4gICAgICAgICAgdGV4dD17XG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5cbiAgICAgICAgICAgICAgICBGYWNpbGl0ZXIgbGUgdHJhdmFpbCBkZXMgYWdlbnRzIGR1IGTDqXBhcnRlbWVudCBldCB0ZXN0ZXIgbCd1dGlsaXNhdGlvbiBkZVxuICAgICAgICAgICAgICAgIGwnYXBwbGljYXRpb24gUkRWLVNvbGlkYXJpdMOpcyBwb3VyIGFjY8OpbMOpcmVyIGxhIHByaXNlIGR1IHByZW1pZXIgcmVuZGV6LXZvdXNcbiAgICAgICAgICAgICAgICBkJ29yaWVudGF0aW9uLlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICB9XG4gICAgICAgIC8+XG4gICAgICA8L21haW4+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9