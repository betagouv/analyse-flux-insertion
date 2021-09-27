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
  var usersUrl = RDV_SOLIDARITES_URL + "/api/v1/users";

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(null),
      devFile = _useState[0],
      setDevFile = _useState[1];

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_5__["useReducer"])(reducer, [], _lib_reducerFactory__WEBPACK_IMPORTED_MODULE_14__["initReducer"]),
      runs = _useReducer[0],
      dispatchRuns = _useReducer[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(null),
      usersData = _useState2[0],
      setUsersData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      existingUsers = _useState3[0],
      setExistingUsers = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      usersRetrieved = _useState4[0],
      setUsersRetrieved = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      usersStatusChecked = _useState5[0],
      setUserStatusChecked = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(0),
      fileSize = _useState6[0],
      setFileSize = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      isLogged = _useState7[0],
      setIsLogged = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({
    tokenId: "",
    uid: "",
    client: ""
  }),
      token = _useState8[0],
      setToken = _useState8[1];

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    if (usersData && !usersRetrieved) {
      retrieveExistingUsers();
    }
  }, [usersData]);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    if (usersRetrieved && !usersStatusChecked) {
      usersData.forEach(function (user, userIndex) {
        if (user["ID RDV"] && user["ID RDV"].length > 0 && !user["Date d'inscription"]) {
          checkUserInvitationStatus(user["ID RDV"], userIndex);
        }
      });
      setUserStatusChecked(true);
    }
  }, [usersRetrieved]);

  function retrieveExistingUsers() {
    return _retrieveExistingUsers.apply(this, arguments);
  }

  function _retrieveExistingUsers() {
    _retrieveExistingUsers = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
      var next_page, _loop;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              next_page = 1;
              _loop = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _loop() {
                var retrieveUsersUrl, result;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _loop$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        retrieveUsersUrl = usersUrl + "?page=".concat(next_page);
                        _context2.next = 3;
                        return Object(_lib_appFetch__WEBPACK_IMPORTED_MODULE_13__["appFetch"])(retrieveUsersUrl, token);

                      case 3:
                        result = _context2.sent;
                        setExistingUsers(function (existingUsers) {
                          return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(existingUsers), Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(result.users));
                        });
                        next_page = result.meta.next_page;

                        if (!result.meta.next_page) {
                          console.log(check);
                          setUsersRetrieved(true);
                        }

                      case 7:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _loop);
              });

            case 2:
              if (!next_page) {
                _context3.next = 6;
                break;
              }

              return _context3.delegateYield(_loop(), "t0", 4);

            case 4:
              _context3.next = 2;
              break;

            case 6:
              ;

            case 7:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee2);
    }));
    return _retrieveExistingUsers.apply(this, arguments);
  }

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
    _generateInvitationUrl = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(userId, userIndex) {
      var invitationUrl, result, newUsersData, userEmail;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              invitationUrl = usersUrl + "/".concat(userId, "/invite");
              _context4.next = 3;
              return Object(_lib_appFetch__WEBPACK_IMPORTED_MODULE_13__["appFetch"])(invitationUrl, token);

            case 3:
              result = _context4.sent;
              newUsersData = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(usersData);
              userEmail = newUsersData[userIndex]["MAIL"];

              if (userEmail && userEmail.length > 0) {
                newUsersData[userIndex]["Lien d'invitation"] = result.invitation_url;
              } else {
                newUsersData[userIndex]["Code d'invitation"] = result.invitation_token;
              }

              newUsersData[userIndex]["Date d'invitation"] = Object(_lib_dates__WEBPACK_IMPORTED_MODULE_15__["getFrenchFormatDateString"])(new Date());
              setUsersData(newUsersData);

            case 9:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee3);
    }));
    return _generateInvitationUrl.apply(this, arguments);
  }

  function getUser(_x3) {
    return _getUser.apply(this, arguments);
  }

  function _getUser() {
    _getUser = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4(userId) {
      var getUserUrl;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              getUserUrl = usersUrl + "/".concat(userId);
              _context5.next = 3;
              return Object(_lib_appFetch__WEBPACK_IMPORTED_MODULE_13__["appFetch"])(getUserUrl, token);

            case 3:
              return _context5.abrupt("return", _context5.sent);

            case 4:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee4);
    }));
    return _getUser.apply(this, arguments);
  }

  function checkUserInvitationStatus(_x4, _x5) {
    return _checkUserInvitationStatus.apply(this, arguments);
  }

  function _checkUserInvitationStatus() {
    _checkUserInvitationStatus = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5(userId, userIndex) {
      var user, newUsersData, invitation_date, inscription_date;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              user = existingUsers.find(function (user) {
                return user.id == userId;
              });
              newUsersData = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(usersData);

              if (user.invitation_created_at) {
                invitation_date = user.invitation_created_at // Date au format : 2021-04-15 14:53:56 +0200
                .substring(0, 10); // Récupérer les 10 premiers chiffres (la date)

                invitation_date = new Date(invitation_date); // Créer une date JS

                newUsersData[userIndex]["Date d'invitation"] = Object(_lib_dates__WEBPACK_IMPORTED_MODULE_15__["getFrenchFormatDateString"])(invitation_date);
              }

              if (user.invitation_accepted_at) {
                inscription_date = user.invitation_accepted_at // Date au format : 2021-04-15 14:53:56 +0200
                .substring(0, 10); // Récupérer les 10 premiers chiffres (la date)

                inscription_date = new Date(inscription_date); // Créer une date JS

                newUsersData[userIndex]["Date d'inscription"] = Object(_lib_dates__WEBPACK_IMPORTED_MODULE_15__["getFrenchFormatDateString"])(inscription_date);
              }

              setUsersData(newUsersData);

            case 5:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee5);
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
    _handleUserWithTakenEmail = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee6(userData, userIndex, userId) {
      var result, newUsersData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee6$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return getUser(userId);

            case 2:
              result = _context7.sent;

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
              return _context7.stop();
          }
        }
      }, _callee6);
    }));
    return _handleUserWithTakenEmail.apply(this, arguments);
  }

  function createUser(_x9, _x10) {
    return _createUser.apply(this, arguments);
  }

  function _createUser() {
    _createUser = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee7(userData, userIndex) {
      var withEmail,
          responsible_id,
          address,
          user,
          result,
          newUsersData,
          _args8 = arguments;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee7$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              withEmail = _args8.length > 2 && _args8[2] !== undefined ? _args8[2] : true;
              responsible_id = _args8.length > 3 && _args8[3] !== undefined ? _args8[3] : null;
              address = displayAddress(userData);
              if ([13, 15].includes(userData["N°CAF"].trim().length)) userData["N°CAF"] = "";
              user = {
                first_name: userData["PRENOM"],
                last_name: userData["NOM"],
                phone_number: userData["TELEPHONE"].replace(/\s+/g, ""),
                birth_date: Object(_lib_dates__WEBPACK_IMPORTED_MODULE_15__["applicationDateToString"])(Object(_lib_dates__WEBPACK_IMPORTED_MODULE_15__["stringToDate"])(userData["DATE DE NAISSANCE"])),
                address: address,
                caisse_affiliation: "caf",
                affiliation_number: userData["N°CAF"],
                organisation_ids: [orgaID],
                responsible_id: responsible_id
              };
              if (withEmail === true) user.email = userData["MAIL"];
              _context8.next = 8;
              return Object(_lib_appFetch__WEBPACK_IMPORTED_MODULE_13__["appFetch"])(usersUrl, token, "POST", JSON.stringify(user));

            case 8:
              result = _context8.sent;
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
              return _context8.stop();
          }
        }
      }, _callee7);
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
        lineNumber: 252,
        columnNumber: 9
      }, this), !isLogged && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.create,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_loginForm__WEBPACK_IMPORTED_MODULE_11__["default"], {
          handleLogin: handleLogin,
          rdvUrl: RDV_SOLIDARITES_URL
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 256,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 255,
        columnNumber: 11
      }, this), isLogged && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_fileHandler__WEBPACK_IMPORTED_MODULE_9__["default"], {
          handleFile: handleFile,
          fileSize: fileSize,
          pendingMessage: "Récupération des informations, merci de patienter"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 262,
          columnNumber: 13
        }, this), usersData && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.subtitle,
            children: "B\xE9n\xE9ficiaires RSA"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 270,
            columnNumber: 17
          }, this), usersData.length == 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.description,
            children: "Aucun b\xE9n\xE9ficiaire dans le fichier"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 273,
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
                    lineNumber: 281,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    rowSpan: "2",
                    children: "Nom"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 282,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    rowSpan: "2",
                    children: "Pr\xE9nom"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 283,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    rowSpan: "2",
                    children: "Mail"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 284,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    rowSpan: "2",
                    children: "T\xE9l\xE9phone"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 285,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    rowSpan: "2",
                    children: "ID RDV-Solidarit\xE9s"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 286,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    colSpan: "3",
                    children: "Invitation"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 287,
                    columnNumber: 27
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 280,
                  columnNumber: 25
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    colSpan: "1",
                    children: "Dernier envoi le"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 290,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    colSpan: "1",
                    children: "Date d'inscription"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 291,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    colSpan: "1",
                    children: "Action"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 292,
                    columnNumber: 27
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 289,
                  columnNumber: 25
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 279,
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
                        lineNumber: 301,
                        columnNumber: 33
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center,
                        children: user["NOM"]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 302,
                        columnNumber: 33
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center,
                        children: user["PRENOM"]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 303,
                        columnNumber: 33
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center,
                        children: user["MAIL"]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 304,
                        columnNumber: 33
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center,
                        children: user["TELEPHONE"]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 305,
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
                          lineNumber: 309,
                          columnNumber: 37
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 308,
                        columnNumber: 35
                      }, _this), user["ID RDV"] !== "" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center,
                        children: user["ID RDV"]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 317,
                        columnNumber: 35
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center,
                        children: user["Date d'invitation"]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 319,
                        columnNumber: 33
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center,
                        children: user["Date d'inscription"]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 320,
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
                          lineNumber: 323,
                          columnNumber: 37
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 322,
                        columnNumber: 35
                      }, _this), user["ID RDV"] === "" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 336,
                        columnNumber: 59
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 300,
                      columnNumber: 31
                    }, _this)
                  }, index, false, {
                    fileName: _jsxFileName,
                    lineNumber: 298,
                    columnNumber: 27
                  }, _this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 295,
                columnNumber: 23
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 278,
              columnNumber: 21
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.button,
              onClick: writeFile,
              children: "Reg\xE9n\xE9rer fichier"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 344,
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
            lineNumber: 359,
            columnNumber: 15
          }, this)
        }, void 0, false)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 354,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 250,
    columnNumber: 5
  }, this);
}

_s(Ardennes, "qOAOzyZW7r2OPLlCFWVq4CqGJBI=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXhwZXJpbWVudGF0aW9ucy9hcmRlbm5lcy1kZW1vL2luZGV4LmpzIl0sIm5hbWVzIjpbInJlZHVjZXIiLCJyZWR1Y2VyRmFjdG9yeSIsIkFyZGVubmVzIiwicm91dGVyIiwidXNlUm91dGVyIiwiaXNEZW1vIiwicGF0aG5hbWUiLCJpbmNsdWRlcyIsImRldk1vZGUiLCJvcmdhSUQiLCJwcm9jZXNzIiwiUkRWX1NPTElEQVJJVEVTX1VSTCIsInVzZXJzVXJsIiwidXNlU3RhdGUiLCJkZXZGaWxlIiwic2V0RGV2RmlsZSIsInVzZVJlZHVjZXIiLCJpbml0UmVkdWNlciIsInJ1bnMiLCJkaXNwYXRjaFJ1bnMiLCJ1c2Vyc0RhdGEiLCJzZXRVc2Vyc0RhdGEiLCJleGlzdGluZ1VzZXJzIiwic2V0RXhpc3RpbmdVc2VycyIsInVzZXJzUmV0cmlldmVkIiwic2V0VXNlcnNSZXRyaWV2ZWQiLCJ1c2Vyc1N0YXR1c0NoZWNrZWQiLCJzZXRVc2VyU3RhdHVzQ2hlY2tlZCIsImZpbGVTaXplIiwic2V0RmlsZVNpemUiLCJpc0xvZ2dlZCIsInNldElzTG9nZ2VkIiwidG9rZW5JZCIsInVpZCIsImNsaWVudCIsInRva2VuIiwic2V0VG9rZW4iLCJ1c2VFZmZlY3QiLCJyZXRyaWV2ZUV4aXN0aW5nVXNlcnMiLCJmb3JFYWNoIiwidXNlciIsInVzZXJJbmRleCIsImxlbmd0aCIsImNoZWNrVXNlckludml0YXRpb25TdGF0dXMiLCJuZXh0X3BhZ2UiLCJyZXRyaWV2ZVVzZXJzVXJsIiwiYXBwRmV0Y2giLCJyZXN1bHQiLCJ1c2VycyIsIm1ldGEiLCJjb25zb2xlIiwibG9nIiwiY2hlY2siLCJ3cml0ZUZpbGUiLCJvdXRXb3JrYm9vayIsIlhMU1giLCJib29rX25ldyIsIm91dFdvcmtzaGVldCIsImpzb25fdG9fc2hlZXQiLCJib29rX2FwcGVuZF9zaGVldCIsImdldERhdGVUaW1lU3RyaW5nIiwiRGF0ZSIsImdlbmVyYXRlSW52aXRhdGlvblVybCIsInVzZXJJZCIsImludml0YXRpb25VcmwiLCJuZXdVc2Vyc0RhdGEiLCJ1c2VyRW1haWwiLCJpbnZpdGF0aW9uX3VybCIsImludml0YXRpb25fdG9rZW4iLCJnZXRGcmVuY2hGb3JtYXREYXRlU3RyaW5nIiwiZ2V0VXNlciIsImdldFVzZXJVcmwiLCJmaW5kIiwiaWQiLCJpbnZpdGF0aW9uX2NyZWF0ZWRfYXQiLCJpbnZpdGF0aW9uX2RhdGUiLCJzdWJzdHJpbmciLCJpbnZpdGF0aW9uX2FjY2VwdGVkX2F0IiwiaW5zY3JpcHRpb25fZGF0ZSIsImRpc3BsYXlBZGRyZXNzIiwidXNlckRhdGEiLCJoYW5kbGVVc2VyV2l0aFRha2VuRW1haWwiLCJmaXJzdF9uYW1lIiwidG9VcHBlckNhc2UiLCJsYXN0X25hbWUiLCJiaXJ0aF9kYXRlIiwiYXBwbGljYXRpb25EYXRlVG9TdHJpbmciLCJzdHJpbmdUb0RhdGUiLCJhZGRyZXNzIiwiYWxlcnQiLCJjcmVhdGVVc2VyIiwid2l0aEVtYWlsIiwicmVzcG9uc2libGVfaWQiLCJ0cmltIiwicGhvbmVfbnVtYmVyIiwicmVwbGFjZSIsImNhaXNzZV9hZmZpbGlhdGlvbiIsImFmZmlsaWF0aW9uX251bWJlciIsIm9yZ2FuaXNhdGlvbl9pZHMiLCJlbWFpbCIsIkpTT04iLCJzdHJpbmdpZnkiLCJlcnJvcnMiLCJlcnJvciIsImJhc2UiLCJoYW5kbGVMb2dpbiIsImhhbmRsZUZpbGUiLCJmaWxlIiwic2l6ZSIsInN0YXJ0X3RpbWUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJldmVudCIsImZpbGVEYXRhIiwiVWludDhBcnJheSIsInRhcmdldCIsInhscyIsInR5cGUiLCJjZWxsRGF0ZXMiLCJkYXRlTkYiLCJ3b3Jrc2hlZXQiLCJTaGVldHMiLCJTaGVldE5hbWVzIiwianNvbkRhdGEiLCJzaGVldF90b19qc29uIiwiYmxhbmtyb3dzIiwicmF3IiwiZGVmdmFsIiwibWFwIiwiT2JqZWN0Iiwia2V5cyIsInJlZHVjZSIsInJlcyIsImtleSIsIml0ZW0iLCJ0aW1lc3RhbXAiLCJ0b0lTT1N0cmluZyIsInNsaWNlIiwiZHVyYXRpb24iLCJmaWxlbmFtZSIsIm5hbWUiLCJmaWxlTGluZXMiLCJyZWFkQXNBcnJheUJ1ZmZlciIsInN0eWxlcyIsImNvbnRhaW5lciIsIm1haW4iLCJ0aXRsZSIsImNyZWF0ZSIsInN1YnRpdGxlIiwiZGVzY3JpcHRpb24iLCJyZXZlcnNlIiwiaW5kZXgiLCJjZW50ZXIiLCJidXR0b24iLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBT0EsSUFBTUEsT0FBTyxHQUFHQywyRUFBYyxDQUFDLGdEQUFELENBQTlCO0FBRWUsU0FBU0MsUUFBVCxHQUFvQjtBQUFBOztBQUFBOztBQUNqQyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHRixNQUFNLENBQUNHLFFBQVAsQ0FBZ0JDLFFBQWhCLENBQXlCLE1BQXpCLENBQWY7QUFDQSxNQUFNQyxPQUFPLE9BQWI7QUFDQSxNQUFNQyxNQUFNLEdBQUdKLE1BQU0sR0FDakJLLEdBRGlCLEdBRWpCQSxHQUZKO0FBSUEsTUFBTUMsbUJBQW1CLEdBQUdOLE1BQU0sR0FDOUJLLHVCQUQ4QixHQUU5QkEsdUJBRko7QUFHQSxNQUFNRSxRQUFRLEdBQUdELG1CQUFtQixHQUFHLGVBQXZDOztBQVhpQyxrQkFhSEUsc0RBQVEsQ0FBQyxJQUFELENBYkw7QUFBQSxNQWExQkMsT0FiMEI7QUFBQSxNQWFqQkMsVUFiaUI7O0FBQUEsb0JBY0pDLHdEQUFVLENBQUNoQixPQUFELEVBQVUsRUFBVixFQUFjaUIsZ0VBQWQsQ0FkTjtBQUFBLE1BYzFCQyxJQWQwQjtBQUFBLE1BY3BCQyxZQWRvQjs7QUFBQSxtQkFlQ04sc0RBQVEsQ0FBQyxJQUFELENB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REYsZUFtRUU7QUFBUSx1QkFBUyxFQUFFUiwrREFBTSxDQUFDVSxNQUExQjtBQUFrQyxxQkFBTyxFQUFFdkcsU0FBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBbkVGO0FBQUEsMEJBUko7QUFBQSx3QkFSSjtBQUFBLHNCQVZKLGVBdUdFLHFFQUFDLDJEQUFEO0FBQ0UsZUFBTyxFQUFDLDZCQURWO0FBRUUsZ0JBQVEsRUFBQyxzREFGWDtBQUdFLFlBQUksZUFDRjtBQUFBLGlDQUNFO0FBQUcscUJBQVMsRUFBRTZGLCtEQUFNLENBQUNXLElBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBdkdGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXlIRDs7R0E1VnVCM0osUTtVQUNQRSxxRDs7O0tBRE9GLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZXhwZXJpbWVudGF0aW9ucy9hcmRlbm5lcy1kZW1vLjZjNTY2Mjk4MWNkYjJhZWEwMDQ0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGcmFnbWVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVkdWNlciB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgKiBhcyBYTFNYIGZyb20gXCJ4bHN4XCI7XG5cbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0XCI7XG5pbXBvcnQgRmlsZUhhbmRsZXIgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvZmlsZUhhbmRsZXJcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvZm9vdGVyXCI7XG5pbXBvcnQgTG9naW5Gb3JtIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2xvZ2luRm9ybVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuXG5pbXBvcnQgeyBhcHBGZXRjaCB9IGZyb20gXCIuLi8uLi8uLi9saWIvYXBwRmV0Y2hcIjtcbmltcG9ydCB7IGluaXRSZWR1Y2VyLCByZWR1Y2VyRmFjdG9yeSB9IGZyb20gXCIuLi8uLi8uLi9saWIvcmVkdWNlckZhY3RvcnlcIjtcbmltcG9ydCB7XG4gIGFwcGxpY2F0aW9uRGF0ZVRvU3RyaW5nLFxuICBnZXREYXRlVGltZVN0cmluZyxcbiAgZ2V0RnJlbmNoRm9ybWF0RGF0ZVN0cmluZyxcbiAgc3RyaW5nVG9EYXRlLFxufSBmcm9tIFwiLi4vLi4vLi4vbGliL2RhdGVzXCI7XG5cbmNvbnN0IHJlZHVjZXIgPSByZWR1Y2VyRmFjdG9yeShcIkV4cMOpcmltZW50YXRpb24gQXJkZW5uZXMgLSBDTkFGIC0gQsOpbsOpZmljaWFpcmVcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFyZGVubmVzKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgaXNEZW1vID0gcm91dGVyLnBhdGhuYW1lLmluY2x1ZGVzKFwiZGVtb1wiKTtcbiAgY29uc3QgZGV2TW9kZSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09IFwiZGV2ZWxvcG1lbnRcIjtcbiAgY29uc3Qgb3JnYUlEID0gaXNEZW1vXG4gICAgPyBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19PUkdBTklTQVRJT05fSURfREVNT1xuICAgIDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfT1JHQU5JU0FUSU9OX0lEX1BST0Q7XG5cbiAgY29uc3QgUkRWX1NPTElEQVJJVEVTX1VSTCA9IGlzRGVtb1xuICAgID8gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUkRWX1NPTElEQVJJVEVTX0RFTU9fVVJMXG4gICAgOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19SRFZfU09MSURBUklURVNfUFJPRF9VUkw7XG4gIGNvbnN0IHVzZXJzVXJsID0gUkRWX1NPTElEQVJJVEVTX1VSTCArIFwiL2FwaS92MS91c2Vyc1wiO1xuXG4gIGNvbnN0IFtkZXZGaWxlLCBzZXREZXZGaWxlXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbcnVucywgZGlzcGF0Y2hSdW5zXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgW10sIGluaXRSZWR1Y2VyKTtcbiAgY29uc3QgW3VzZXJzRGF0YSwgc2V0VXNlcnNEYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbZXhpc3RpbmdVc2Vycywgc2V0RXhpc3RpbmdVc2Vyc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFt1c2Vyc1JldHJpZXZlZCwgc2V0VXNlcnNSZXRyaWV2ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbdXNlcnNTdGF0dXNDaGVja2VkLCBzZXRVc2VyU3RhdHVzQ2hlY2tlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtmaWxlU2l6ZSwgc2V0RmlsZVNpemVdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtpc0xvZ2dlZCwgc2V0SXNMb2dnZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbdG9rZW4sIHNldFRva2VuXSA9IHVzZVN0YXRlKHtcbiAgICB0b2tlbklkOiBcIlwiLFxuICAgIHVpZDogXCJcIixcbiAgICBjbGllbnQ6IFwiXCIsXG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHVzZXJzRGF0YSAmJiAhdXNlcnNSZXRyaWV2ZWQpIHtcbiAgICAgIHJldHJpZXZlRXhpc3RpbmdVc2VycygpO1xuICAgIH1cbiAgfSwgW3VzZXJzRGF0YV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHVzZXJzUmV0cmlldmVkICYmICF1c2Vyc1N0YXR1c0NoZWNrZWQpIHtcbiAgICAgIHVzZXJzRGF0YS5mb3JFYWNoKCh1c2VyLCB1c2VySW5kZXgpID0+IHtcbiAgICAgICAgaWYgKHVzZXJbXCJJRCBSRFZcIl0gJiYgdXNlcltcIklEIFJEVlwiXS5sZW5ndGggPiAwICYmICF1c2VyW1wiRGF0ZSBkJ2luc2NyaXB0aW9uXCJdKSB7XG4gICAgICAgICAgY2hlY2tVc2VySW52aXRhdGlvblN0YXR1cyh1c2VyW1wiSUQgUkRWXCJdLCB1c2VySW5kZXgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHNldFVzZXJTdGF0dXNDaGVja2VkKHRydWUpO1xuICAgIH1cbiAgfSwgW3VzZXJzUmV0cmlldmVkXSk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gcmV0cmlldmVFeGlzdGluZ1VzZXJzKCkge1xuICAgIGxldCBuZXh0X3BhZ2UgPSAxO1xuICAgIHdoaWxlIChuZXh0X3BhZ2UpIHtcbiAgICAgIGxldCByZXRyaWV2ZVVzZXJzVXJsID0gdXNlcnNVcmwgKyBgP3BhZ2U9JHtuZXh0X3BhZ2V9YFxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXBwRmV0Y2gocmV0cmlldmVVc2Vyc1VybCwgdG9rZW4pO1xuICAgICAgc2V0RXhpc3RpbmdVc2VycyhleGlzdGluZ1VzZXJzID0+IFsuLi5leGlzdGluZ1VzZXJzLCAuLi5yZXN1bHQudXNlcnNdKTtcbiAgICAgIG5leHRfcGFnZSA9IHJlc3VsdC5tZXRhLm5leHRfcGFnZVxuICAgICAgaWYgKCFyZXN1bHQubWV0YS5uZXh0X3BhZ2UpIHtcbiAgICAgICAgY29uc29sZS5sb2coY2hlY2spO1xuICAgICAgICBzZXRVc2Vyc1JldHJpZXZlZCh0cnVlKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgY29uc3Qgd3JpdGVGaWxlID0gKCkgPT4ge1xuICAgIGNvbnN0IG91dFdvcmtib29rID0gWExTWC51dGlscy5ib29rX25ldygpO1xuICAgIGNvbnN0IG91dFdvcmtzaGVldCA9IFhMU1gudXRpbHMuanNvbl90b19zaGVldCh1c2Vyc0RhdGEpO1xuICAgIFhMU1gudXRpbHMuYm9va19hcHBlbmRfc2hlZXQob3V0V29ya2Jvb2ssIG91dFdvcmtzaGVldCwgXCJESVZFUkdFTkNFU1wiKTtcbiAgICAvLyBYTFNYLnV0aWxzLmJvb2tfYXBwZW5kX3NoZWV0KG91dFdvcmtib29rLCB4bHMuU2hlZXRzW3hscy5TaGVldE5hbWVzWzFdXSwgXCJHUkFQSElRVUVcIik7XG4gICAgLy8gWExTWC51dGlscy5ib29rX2FwcGVuZF9zaGVldChvdXRXb3JrYm9vaywgeGxzLlNoZWV0c1t4bHMuU2hlZXROYW1lc1syXV0sIFwiU2VsZWN0aW9uIENPQVwiKTtcbiAgICBYTFNYLndyaXRlRmlsZShvdXRXb3JrYm9vaywgYGFyZGVubmVzX3JzYV8ke2dldERhdGVUaW1lU3RyaW5nKG5ldyBEYXRlKCkpfS54bHN4YCk7XG4gIH07XG5cbiAgYXN5bmMgZnVuY3Rpb24gZ2VuZXJhdGVJbnZpdGF0aW9uVXJsKHVzZXJJZCwgdXNlckluZGV4KSB7XG4gICAgY29uc3QgaW52aXRhdGlvblVybCA9IHVzZXJzVXJsICsgYC8ke3VzZXJJZH0vaW52aXRlYDtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBhcHBGZXRjaChpbnZpdGF0aW9uVXJsLCB0b2tlbik7XG5cbiAgICBsZXQgbmV3VXNlcnNEYXRhID0gWy4uLnVzZXJzRGF0YV07XG4gICAgbGV0IHVzZXJFbWFpbCA9IG5ld1VzZXJzRGF0YVt1c2VySW5kZXhdW1wiTUFJTFwiXVxuICAgIGlmICh1c2VyRW1haWwgJiYgdXNlckVtYWlsLmxlbmd0aCA+IDApIHtcbiAgICAgIG5ld1VzZXJzRGF0YVt1c2VySW5kZXhdW1wiTGllbiBkJ2ludml0YXRpb25cIl0gPSByZXN1bHQuaW52aXRhdGlvbl91cmw7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1VzZXJzRGF0YVt1c2VySW5kZXhdW1wiQ29kZSBkJ2ludml0YXRpb25cIl0gPSByZXN1bHQuaW52aXRhdGlvbl90b2tlbjtcbiAgICB9XG4gICAgbmV3VXNlcnNEYXRhW3VzZXJJbmRleF1bXCJEYXRlIGQnaW52aXRhdGlvblwiXSA9IGdldEZyZW5jaEZvcm1hdERhdGVTdHJpbmcobmV3IERhdGUoKSk7XG4gICAgc2V0VXNlcnNEYXRhKG5ld1VzZXJzRGF0YSk7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBnZXRVc2VyKHVzZXJJZCkge1xuICAgIGNvbnN0IGdldFVzZXJVcmwgPSB1c2Vyc1VybCArIGAvJHt1c2VySWR9YDtcbiAgICByZXR1cm4gYXdhaXQgYXBwRmV0Y2goZ2V0VXNlclVybCwgdG9rZW4pO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gY2hlY2tVc2VySW52aXRhdGlvblN0YXR1cyh1c2VySWQsIHVzZXJJbmRleCkge1xuICAgIGNvbnN0IHVzZXIgPSBleGlzdGluZ1VzZXJzLmZpbmQodXNlciA9PiB1c2VyLmlkID09IHVzZXJJZClcblxuICAgIGxldCBuZXdVc2Vyc0RhdGEgPSBbLi4udXNlcnNEYXRhXTtcbiAgICBpZiAodXNlci5pbnZpdGF0aW9uX2NyZWF0ZWRfYXQpIHtcbiAgICAgIGxldCBpbnZpdGF0aW9uX2RhdGUgPSB1c2VyLmludml0YXRpb25fY3JlYXRlZF9hdCAvLyBEYXRlIGF1IGZvcm1hdCA6IDIwMjEtMDQtMTUgMTQ6NTM6NTYgKzAyMDBcbiAgICAgICAgLnN1YnN0cmluZygwLCAxMCk7IC8vIFLDqWN1cMOpcmVyIGxlcyAxMCBwcmVtaWVycyBjaGlmZnJlcyAobGEgZGF0ZSlcbiAgICAgIGludml0YXRpb25fZGF0ZSA9IG5ldyBEYXRlKGludml0YXRpb25fZGF0ZSk7IC8vIENyw6llciB1bmUgZGF0ZSBKU1xuICAgICAgbmV3VXNlcnNEYXRhW3VzZXJJbmRleF1bXCJEYXRlIGQnaW52aXRhdGlvblwiXSA9IGdldEZyZW5jaEZvcm1hdERhdGVTdHJpbmcoaW52aXRhdGlvbl9kYXRlKTtcbiAgICB9XG4gICAgaWYgKHVzZXIuaW52aXRhdGlvbl9hY2NlcHRlZF9hdCkge1xuICAgICAgbGV0IGluc2NyaXB0aW9uX2RhdGUgPSB1c2VyLmludml0YXRpb25fYWNjZXB0ZWRfYXQgLy8gRGF0ZSBhdSBmb3JtYXQgOiAyMDIxLTA0LTE1IDE0OjUzOjU2ICswMjAwXG4gICAgICAgIC5zdWJzdHJpbmcoMCwgMTApOyAvLyBSw6ljdXDDqXJlciBsZXMgMTAgcHJlbWllcnMgY2hpZmZyZXMgKGxhIGRhdGUpXG4gICAgICBpbnNjcmlwdGlvbl9kYXRlID0gbmV3IERhdGUoaW5zY3JpcHRpb25fZGF0ZSk7IC8vIENyw6llciB1bmUgZGF0ZSBKU1xuICAgICAgbmV3VXNlcnNEYXRhW3VzZXJJbmRleF1bXCJEYXRlIGQnaW5zY3JpcHRpb25cIl0gPSBnZXRGcmVuY2hGb3JtYXREYXRlU3RyaW5nKGluc2NyaXB0aW9uX2RhdGUpO1xuICAgIH1cbiAgICBzZXRVc2Vyc0RhdGEobmV3VXNlcnNEYXRhKTtcbiAgfVxuXG4gIGNvbnN0IGRpc3BsYXlBZGRyZXNzID0gdXNlckRhdGEgPT4ge1xuICAgIHJldHVybiB1c2VyRGF0YVtcIkFEUkVTU0VcIl0gKyBcIiAtIFwiICsgdXNlckRhdGFbXCJDT0RFIFBPU1RBTFwiXSArIFwiIFwiICsgdXNlckRhdGFbXCJWSUxMRVwiXTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVVzZXJXaXRoVGFrZW5FbWFpbCh1c2VyRGF0YSwgdXNlckluZGV4LCB1c2VySWQpIHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRVc2VyKHVzZXJJZCk7XG5cbiAgICAvLyBWw6lyaWZpZSBkJ2Fib3JkIHNpIGwndXRpbGlzYXRldXIgYXZlYyBsZSBtw6ptZSBlbWFpbCBlc3QgdW4gZG91YmxvblxuICAgIGlmIChcbiAgICAgIHJlc3VsdCAmJlxuICAgICAgcmVzdWx0LnVzZXIgJiZcbiAgICAgIHJlc3VsdC51c2VyLmZpcnN0X25hbWUudG9VcHBlckNhc2UoKSA9PT0gdXNlckRhdGFbXCJQUkVOT01cIl0udG9VcHBlckNhc2UoKSAmJlxuICAgICAgcmVzdWx0LnVzZXIubGFzdF9uYW1lLnRvVXBwZXJDYXNlKCkgPT09IHVzZXJEYXRhW1wiTk9NXCJdLnRvVXBwZXJDYXNlKCkgJiZcbiAgICAgIHJlc3VsdC51c2VyLmJpcnRoX2RhdGUgPT09XG4gICAgICAgIGFwcGxpY2F0aW9uRGF0ZVRvU3RyaW5nKHN0cmluZ1RvRGF0ZSh1c2VyRGF0YVtcIkRBVEUgREUgTkFJU1NBTkNFXCJdKSkgJiZcbiAgICAgIHJlc3VsdC51c2VyLmFkZHJlc3MudG9VcHBlckNhc2UoKSA9PT0gZGlzcGxheUFkZHJlc3ModXNlckRhdGEpLnRvVXBwZXJDYXNlKClcbiAgICApIHtcbiAgICAgIGxldCBuZXdVc2Vyc0RhdGEgPSBbLi4udXNlcnNEYXRhXTtcbiAgICAgIG5ld1VzZXJzRGF0YVt1c2VySW5kZXhdW1wiSUQgUkRWXCJdID0gdXNlcklkO1xuICAgICAgc2V0VXNlcnNEYXRhKG5ld1VzZXJzRGF0YSk7XG4gICAgICBjaGVja1VzZXJJbnZpdGF0aW9uU3RhdHVzKHVzZXJJZCwgdXNlckluZGV4KTtcbiAgICAgIGFsZXJ0KFwiVW4gY29tcHRlIGFzc29jacOpIMOgIGNldCBlbWFpbCBleGlzdGUgZMOpasOgXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjcmVhdGVVc2VyKHVzZXJEYXRhLCB1c2VySW5kZXgsIGZhbHNlLCB1c2VySWQpOyAvLyBTaSBjZSBuJ2VzdCBwYXMgdW4gZG91YmxvbiwgY3LDqWUgdW4gdXRpbGlzYXRldXIgZW4gdGFudCBxdWUgXCJwcm9jaGVcIiBkZSBsJ3V0aWxpc2F0ZXVyIGV4aXN0YW50XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVXNlcih1c2VyRGF0YSwgdXNlckluZGV4LCB3aXRoRW1haWwgPSB0cnVlLCByZXNwb25zaWJsZV9pZCA9IG51bGwpIHtcbiAgICBjb25zdCBhZGRyZXNzID0gZGlzcGxheUFkZHJlc3ModXNlckRhdGEpO1xuICAgIGlmIChbMTMsIDE1XS5pbmNsdWRlcyh1c2VyRGF0YVtcIk7CsENBRlwiXS50cmltKCkubGVuZ3RoKSkgdXNlckRhdGFbXCJOwrBDQUZcIl0gPSBcIlwiXG5cbiAgICBsZXQgdXNlciA9IHtcbiAgICAgIGZpcnN0X25hbWU6IHVzZXJEYXRhW1wiUFJFTk9NXCJdLFxuICAgICAgbGFzdF9uYW1lOiB1c2VyRGF0YVtcIk5PTVwiXSxcbiAgICAgIHBob25lX251bWJlcjogdXNlckRhdGFbXCJURUxFUEhPTkVcIl0ucmVwbGFjZSgvXFxzKy9nLCBcIlwiKSxcbiAgICAgIGJpcnRoX2RhdGU6IGFwcGxpY2F0aW9uRGF0ZVRvU3RyaW5nKHN0cmluZ1RvRGF0ZSh1c2VyRGF0YVtcIkRBVEUgREUgTkFJU1NBTkNFXCJdKSksXG4gICAgICBhZGRyZXNzOiBhZGRyZXNzLFxuICAgICAgY2Fpc3NlX2FmZmlsaWF0aW9uOiBcImNhZlwiLFxuICAgICAgYWZmaWxpYXRpb25fbnVtYmVyOiB1c2VyRGF0YVtcIk7CsENBRlwiXSxcbiAgICAgIG9yZ2FuaXNhdGlvbl9pZHM6IFtvcmdhSURdLFxuICAgICAgcmVzcG9uc2libGVfaWQ6IHJlc3BvbnNpYmxlX2lkXG4gICAgfTtcbiAgICBpZiAod2l0aEVtYWlsID09PSB0cnVlKSB1c2VyLmVtYWlsID0gdXNlckRhdGFbXCJNQUlMXCJdO1xuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXBwRmV0Y2godXNlcnNVcmwsIHRva2VuLCBcIlBPU1RcIiwgSlNPTi5zdHJpbmdpZnkodXNlcikpO1xuXG4gICAgbGV0IG5ld1VzZXJzRGF0YSA9IFsuLi51c2Vyc0RhdGFdO1xuICAgIGlmIChyZXN1bHQudXNlcikge1xuICAgICAgbmV3VXNlcnNEYXRhW3VzZXJJbmRleF1bXCJJRCBSRFZcIl0gPSByZXN1bHQudXNlci5pZDtcbiAgICAgIHNldFVzZXJzRGF0YShuZXdVc2Vyc0RhdGEpO1xuICAgICAgZ2VuZXJhdGVJbnZpdGF0aW9uVXJsKHJlc3VsdC51c2VyLmlkLCB1c2VySW5kZXgpO1xuICAgIH0gZWxzZSBpZiAocmVzdWx0LmVycm9ycyAmJiByZXN1bHQuZXJyb3JzLmVtYWlsICYmIHJlc3VsdC5lcnJvcnMuZW1haWxbMF0uZXJyb3IgPT09IFwidGFrZW5cIikge1xuICAgICAgaGFuZGxlVXNlcldpdGhUYWtlbkVtYWlsKHVzZXJEYXRhLCB1c2VySW5kZXgsIHJlc3VsdC5lcnJvcnMuZW1haWxbMF0uaWQpO1xuICAgIH0gZWxzZSBpZiAocmVzdWx0LmVycm9ycyAmJiByZXN1bHQuZXJyb3JzLmVtYWlsICYmIHJlc3VsdC5lcnJvcnMuZW1haWxbMF0uZXJyb3IgPT09IFwiaW52YWxpZFwiKSB7XG4gICAgICBjcmVhdGVVc2VyKHVzZXJEYXRhLCB1c2VySW5kZXgsIGZhbHNlKTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgcmVzdWx0LmVycm9ycyAmJlxuICAgICAgcmVzdWx0LmVycm9ycy5maXJzdF9uYW1lICYmXG4gICAgICByZXN1bHQuZXJyb3JzLmZpcnN0X25hbWVbMF0uZXJyb3IgPT09IFwiZMOpasOgIHV0aWxpc8OpXCJcbiAgICApIHtcbiAgICAgIGFsZXJ0KFxuICAgICAgICBcIkxhIGNyw6lhdGlvbiBkdSBjb21wdGUgYSDDqWNob3XDqS4gTCd1dGlsaXNhdGV1ciBzZW1ibGUgZXhpc3RlciBtYWlzIG4nYSBwdSDDqnRyZSByw6ljdXDDqXLDqS5cIlxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKHJlc3VsdC5lcnJvcnMgJiYgcmVzdWx0LmVycm9yc1swXSAmJiByZXN1bHQuZXJyb3JzWzBdLmJhc2UgPT09IFwiZm9yYmlkZGVuXCIpIHtcbiAgICAgIGFsZXJ0KFwiVm90cmUgY29tcHRlIGFnZW50IFJEVi1Tb2xpZGFyaXTDqXMgbmUgdm91cyBwZXJtZXQgcGFzIGQnZWZmZWN0dWVyIGNldHRlIGFjdGlvbi5cIik7XG4gICAgfSBlbHNlIGlmIChyZXN1bHQuZXJyb3JzICYmIHJlc3VsdC5lcnJvcnNbMF0pIHtcbiAgICAgIGFsZXJ0KHJlc3VsdC5lcnJvcnNbMF0pO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUxvZ2luID0gKHRva2VuSWQsIHVpZCwgY2xpZW50KSA9PiB7XG4gICAgc2V0VG9rZW4oeyAuLi50b2tlbiwgdG9rZW5JZDogdG9rZW5JZCwgdWlkOiB1aWQsIGNsaWVudDogY2xpZW50IH0pO1xuICAgIHNldElzTG9nZ2VkKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUZpbGUgPSBhc3luYyBmaWxlID0+IHtcbiAgICBpZiAoZGV2TW9kZSAmJiBmaWxlICE9IGRldkZpbGUpIHtcbiAgICAgIHNldERldkZpbGUoZmlsZSk7XG4gICAgfVxuICAgIHNldEZpbGVTaXplKGZpbGUuc2l6ZSk7XG4gICAgY29uc3Qgc3RhcnRfdGltZSA9IG5ldyBEYXRlKCk7XG5cbiAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBjb25zdCBmaWxlRGF0YSA9IG5ldyBVaW50OEFycmF5KGV2ZW50LnRhcmdldC5yZXN1bHQpO1xuICAgICAgICBjb25zdCB4bHMgPSBYTFNYLnJlYWQoZmlsZURhdGEsIHsgdHlwZTogXCJhcnJheVwiLCBjZWxsRGF0ZXM6IHRydWUsIGRhdGVORjogXCJkZC9tbS95eXl5XCIgfSk7XG4gICAgICAgIGNvbnN0IHdvcmtzaGVldCA9IHhscy5TaGVldHNbeGxzLlNoZWV0TmFtZXNbMF1dO1xuXG4gICAgICAgIGxldCBqc29uRGF0YSA9IFhMU1gudXRpbHMuc2hlZXRfdG9fanNvbih3b3Jrc2hlZXQsIHtcbiAgICAgICAgICBibGFua3Jvd3M6IGZhbHNlLFxuICAgICAgICAgIHJhdzogZmFsc2UsXG4gICAgICAgICAgZGVmdmFsOiBcIlwiLFxuICAgICAgICB9KTtcblxuICAgICAgICAvLyB3ZSByZW1vdmUgbGluZSBicmVha3MgZnJvbSBhbGwga2V5c1xuICAgICAgICBqc29uRGF0YSA9IGpzb25EYXRhLm1hcCh1c2VyRGF0YSA9PiB7XG4gICAgICAgICAgcmV0dXJuIFsuLi5PYmplY3Qua2V5cyh1c2VyRGF0YSldLnJlZHVjZSgocmVzLCBrZXkpID0+IHtcbiAgICAgICAgICAgIHJlc1trZXkucmVwbGFjZSgvW1xcblxccl0rL2csIFwiIFwiKV0gPSB1c2VyRGF0YVtrZXldO1xuICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgICB9LCB7fSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNldFVzZXJTdGF0dXNDaGVja2VkKGZhbHNlKTtcbiAgICAgICAgc2V0VXNlcnNEYXRhKGpzb25EYXRhKTtcbiAgICAgICAgZGlzcGF0Y2hSdW5zKHtcbiAgICAgICAgICB0eXBlOiBcImFwcGVuZFwiLFxuICAgICAgICAgIGl0ZW06IHtcbiAgICAgICAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDE5KSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiBuZXcgRGF0ZSgpIC0gc3RhcnRfdGltZSxcbiAgICAgICAgICAgIGZpbGVuYW1lOiBmaWxlLm5hbWUsXG4gICAgICAgICAgICBmaWxlU2l6ZTogZmlsZS5zaXplLFxuICAgICAgICAgICAgZmlsZUxpbmVzOiBqc29uRGF0YS5sZW5ndGgsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH07XG4gICAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoZmlsZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0gaGFuZGxlRmlsZT17aGFuZGxlRmlsZX0+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5FeHDDqXJpbWVudGF0aW9uIEFyZGVubmVzPC9oMT5cblxuICAgICAgICB7IWlzTG9nZ2VkICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNyZWF0ZX0+XG4gICAgICAgICAgICA8TG9naW5Gb3JtIGhhbmRsZUxvZ2luPXtoYW5kbGVMb2dpbn0gcmR2VXJsPXtSRFZfU09MSURBUklURVNfVVJMfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuXG4gICAgICAgIHtpc0xvZ2dlZCAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxGaWxlSGFuZGxlclxuICAgICAgICAgICAgICBoYW5kbGVGaWxlPXtoYW5kbGVGaWxlfVxuICAgICAgICAgICAgICBmaWxlU2l6ZT17ZmlsZVNpemV9XG4gICAgICAgICAgICAgIHBlbmRpbmdNZXNzYWdlPXtcIlLDqWN1cMOpcmF0aW9uIGRlcyBpbmZvcm1hdGlvbnMsIG1lcmNpIGRlIHBhdGllbnRlclwifVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAge3VzZXJzRGF0YSAmJiAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnN1YnRpdGxlfT5Cw6luw6lmaWNpYWlyZXMgUlNBPC9oMj5cblxuICAgICAgICAgICAgICAgIHt1c2Vyc0RhdGEubGVuZ3RoID09IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PkF1Y3VuIGLDqW7DqWZpY2lhaXJlIGRhbnMgbGUgZmljaGllcjwvcD5cbiAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAge3VzZXJzRGF0YS5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPkRhdGU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5Ob208L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5QcsOpbm9tPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+TWFpbDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPlTDqWzDqXBob25lPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+SUQgUkRWLVNvbGlkYXJpdMOpczwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjb2xTcGFuPVwiM1wiPkludml0YXRpb248L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNvbFNwYW49XCIxXCI+RGVybmllciBlbnZvaSBsZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjb2xTcGFuPVwiMVwiPkRhdGUgZCdpbnNjcmlwdGlvbjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjb2xTcGFuPVwiMVwiPkFjdGlvbjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIHJldmVyc2UgZXN0IHV0aWxpc8OpIHBvdXIgcXVlIGxlcyB1dGlsaXNhdGV1cnMgbGVzIHBsdXMgcsOpY2VudHMgYXBwYXJhaXNzZW50IGVuIGhhdXQgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICB7Wy4uLnVzZXJzRGF0YV0ucmV2ZXJzZSgpLm1hcCgodXNlciwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZyYWdtZW50IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyW1wiREFURVwiXSAhPT0gXCJcIiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9Pnt1c2VyW1wiREFURVwiXX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT57dXNlcltcIk5PTVwiXX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT57dXNlcltcIlBSRU5PTVwiXX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT57dXNlcltcIk1BSUxcIl19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+e3VzZXJbXCJURUxFUEhPTkVcIl19PC90ZD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXNlcltcIklEIFJEVlwiXSA9PT0gXCJcIiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNyZWF0ZVVzZXIodXNlciwgdXNlcnNEYXRhLmxlbmd0aCAtIGluZGV4IC0gMSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENyw6llciB1biBjb21wdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyW1wiSUQgUkRWXCJdICE9PSBcIlwiICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT57dXNlcltcIklEIFJEVlwiXX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT57dXNlcltcIkRhdGUgZCdpbnZpdGF0aW9uXCJdfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9Pnt1c2VyW1wiRGF0ZSBkJ2luc2NyaXB0aW9uXCJdfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyW1wiSUQgUkRWXCJdICE9PSBcIlwiICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZUludml0YXRpb25VcmwoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyW1wiSUQgUkRWXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcnNEYXRhLmxlbmd0aCAtIGluZGV4IC0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXNlcltcIkRhdGUgZCdpbnZpdGF0aW9uXCJdICE9PSBcIlwiICYmIFwiUmVnw6luw6lyZXIgaW52aXRhdGlvblwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXNlcltcIkRhdGUgZCdpbnZpdGF0aW9uXCJdID09PSBcIlwiICYmIFwiR8OpbsOpcmVyIGludml0YXRpb25cIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyW1wiSUQgUkRWXCJdID09PSBcIlwiICYmIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9PjwvdGQ+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cblxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0gb25DbGljaz17d3JpdGVGaWxlfT5cbiAgICAgICAgICAgICAgICAgICAgICBSZWfDqW7DqXJlciBmaWNoaWVyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuXG4gICAgICAgIDxGb290ZXJcbiAgICAgICAgICBzdWJqZWN0PVwiRXhww6lyaW1lbnRhdGlvbiBBcmRlbm5lc1wiXG4gICAgICAgICAgcG91cnF1b2k9XCJRdWVsIGVzdCBsJ29iamVjdGlmIGRlIGNldHRlIGV4cMOpcmltZW50YXRpb24mbmJzcDs/XCJcbiAgICAgICAgICB0ZXh0PXtcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRleHR9PlxuICAgICAgICAgICAgICAgIEZhY2lsaXRlciBsZSB0cmF2YWlsIGRlcyBhZ2VudHMgZHUgZMOpcGFydGVtZW50IGV0IHRlc3RlciBsJ3V0aWxpc2F0aW9uIGRlXG4gICAgICAgICAgICAgICAgbCdhcHBsaWNhdGlvbiBSRFYtU29saWRhcml0w6lzIHBvdXIgYWNjw6lsw6lyZXIgbGEgcHJpc2UgZHUgcHJlbWllciByZW5kZXotdm91c1xuICAgICAgICAgICAgICAgIGQnb3JpZW50YXRpb24uXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgIH1cbiAgICAgICAgLz5cbiAgICAgIDwvbWFpbj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=