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
          _args5 = arguments;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              userId = _args5.length > 2 && _args5[2] !== undefined ? _args5[2] : null;
              console.log(userId);

              if (!(userId != null)) {
                _context5.next = 18;
                break;
              }

              _context5.next = 5;
              return getUser(userId);

            case 5:
              result = _context5.sent;
              console.log(result);
              console.log(result.user.first_name);
              console.log(result.user.last_name);
              console.log(result.user.birth_date);
              console.log(result.user.address);
              console.log(userData["PRENOM"]);
              console.log(userData["NOM"]);
              console.log(Object(_lib_dates__WEBPACK_IMPORTED_MODULE_15__["applicationDateToString"])(Object(_lib_dates__WEBPACK_IMPORTED_MODULE_15__["stringToDate"])(userData["DATE DE NAISSANCE"])));
              console.log(userData["ADRESSE"] + " - " + userData["CODE POSTAL"] + " " + userData["VILLE"]);

              if (result && result.user.first_name.toUpperCase() === userData["PRENOM"].toUpperCase() && result.user.last_name.toUpperCase() === userData["NOM"].toUpperCase() && result.user.birth_date === Object(_lib_dates__WEBPACK_IMPORTED_MODULE_15__["applicationDateToString"])(Object(_lib_dates__WEBPACK_IMPORTED_MODULE_15__["stringToDate"])(userData["DATE DE NAISSANCE"])) && result.user.address.toUpperCase() === userData["ADRESSE"].toUpperCase() + " - " + userData["CODE POSTAL"].toUpperCase() + " " + userData["VILLE"].toUpperCase()) {
                console.log("yes");
                newUsersData[userIndex]["ID RDV"] = result.errors.email[0].id;
                setUsersData(newUsersData);
                checkUserInvitationStatus(result.errors.email[0].id, userIndex);
                alert("Un compte associé à cet email existe déjà");
              }

              _context5.next = 19;
              break;

            case 18:
              createUser(userData, userIndex, false);

            case 19:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXhwZXJpbWVudGF0aW9ucy9hcmRlbm5lcy1kZW1vL2luZGV4LmpzIl0sIm5hbWVzIjpbInJlZHVjZXIiLCJyZWR1Y2VyRmFjdG9yeSIsIkFyZGVubmVzIiwicm91dGVyIiwidXNlUm91dGVyIiwiaXNEZW1vIiwicGF0aG5hbWUiLCJpbmNsdWRlcyIsImRldk1vZGUiLCJvcmdhSUQiLCJwcm9jZXNzIiwiUkRWX1NPTElEQVJJVEVTX1VSTCIsInVzZXJVcmwiLCJ1c2VTdGF0ZSIsImRldkZpbGUiLCJzZXREZXZGaWxlIiwidXNlUmVkdWNlciIsImluaXRSZWR1Y2VyIiwicnVucyIsImRpc3BhdGNoUnVucyIsInVzZXJzRGF0YSIsInNldFVzZXJzRGF0YSIsInVzZXJTdGF0dXNDaGVja2VkIiwic2V0VXNlclN0YXR1c0NoZWNrZWQiLCJmaWxlU2l6ZSIsInNldEZpbGVTaXplIiwiaXNMb2dnZWQiLCJzZXRJc0xvZ2dlZCIsInRva2VuSWQiLCJ1aWQiLCJjbGllbnQiLCJ0b2tlbiIsInNldFRva2VuIiwidXNlRWZmZWN0IiwiaGFuZGxlRmlsZSIsImZvckVhY2giLCJ1c2VyIiwidXNlckluZGV4IiwiY2hlY2tVc2VySW52aXRhdGlvblN0YXR1cyIsIndyaXRlRmlsZSIsIm91dFdvcmtib29rIiwiWExTWCIsImJvb2tfbmV3Iiwib3V0V29ya3NoZWV0IiwianNvbl90b19zaGVldCIsImJvb2tfYXBwZW5kX3NoZWV0IiwiZ2V0RGF0ZVRpbWVTdHJpbmciLCJEYXRlIiwiZ2VuZXJhdGVJbnZpdGF0aW9uVXJsIiwidXNlcklkIiwiaW52aXRhdGlvblVybCIsImFwcEZldGNoIiwicmVzdWx0IiwibmV3VXNlcnNEYXRhIiwiaW52aXRhdGlvbl91cmwiLCJpbnZpdGF0aW9uX3Rva2VuIiwiZ2V0RnJlbmNoRm9ybWF0RGF0ZVN0cmluZyIsImdldFVzZXIiLCJnZXRVc2VyVXJsIiwiaW52aXRhdGlvbl9jcmVhdGVkX2F0IiwiaW52aXRhdGlvbl9kYXRlIiwic3Vic3RyaW5nIiwiaW52aXRhdGlvbl9hY2NlcHRlZF9hdCIsImluc2NyaXB0aW9uX2RhdGUiLCJpbnZhbGlkT3JUYWtlbk1haWwiLCJ1c2VyRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwiYmlydGhfZGF0ZSIsImFkZHJlc3MiLCJhcHBsaWNhdGlvbkRhdGVUb1N0cmluZyIsInN0cmluZ1RvRGF0ZSIsInRvVXBwZXJDYXNlIiwiZXJyb3JzIiwiZW1haWwiLCJpZCIsImFsZXJ0IiwiY3JlYXRlVXNlciIsIndpdGhFbWFpbCIsInBob25lX251bWJlciIsInJlcGxhY2UiLCJjYWlzc2VfYWZmaWxpYXRpb24iLCJhZmZpbGlhdGlvbl9udW1iZXIiLCJvcmdhbmlzYXRpb25faWRzIiwiSlNPTiIsInN0cmluZ2lmeSIsImVycm9yIiwiYmFzZSIsImhhbmRsZUxvZ2luIiwiZmlsZSIsInNpemUiLCJzdGFydF90aW1lIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwiZXZlbnQiLCJmaWxlRGF0YSIsIlVpbnQ4QXJyYXkiLCJ0YXJnZXQiLCJ4bHMiLCJ0eXBlIiwiY2VsbERhdGVzIiwiZGF0ZU5GIiwid29ya3NoZWV0IiwiU2hlZXRzIiwiU2hlZXROYW1lcyIsImpzb25EYXRhIiwic2hlZXRfdG9fanNvbiIsImJsYW5rcm93cyIsInJhdyIsImRlZnZhbCIsIm1hcCIsIk9iamVjdCIsImtleXMiLCJyZWR1Y2UiLCJyZXMiLCJrZXkiLCJpdGVtIiwidGltZXN0YW1wIiwidG9JU09TdHJpbmciLCJzbGljZSIsImR1cmF0aW9uIiwiZmlsZW5hbWUiLCJuYW1lIiwiZmlsZUxpbmVzIiwibGVuZ3RoIiwicmVhZEFzQXJyYXlCdWZmZXIiLCJzdHlsZXMiLCJjb250YWluZXIiLCJtYWluIiwidGl0bGUiLCJjcmVhdGUiLCJzdWJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicmV2ZXJzZSIsImluZGV4IiwiY2VudGVy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Q0FBSixLQUFtQixFQUFuQixpQkFBeUI7QUFBSSxpQ0FBUyxFQUFFK0YsK0RBQU0sQ0FBQ1M7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFwQzVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKLHFCQUFlRCxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRDRCO0FBQUEsaUJBQTdCO0FBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBbUVFO0FBQVEsdUJBQVMsRUFBRVIsK0RBQU0sQ0FBQ1UsTUFBMUI7QUFBa0MscUJBQU8sRUFBRXRHLFNBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQW5FRjtBQUFBLDBCQVJKO0FBQUEsd0JBUko7QUFBQSxzQkFWSixlQXVHRSxxRUFBQywyREFBRDtBQUNFLGVBQU8sRUFBQyw2QkFEVjtBQUVFLGdCQUFRLEVBQUMsc0RBRlg7QUFHRSxZQUFJLGVBQ0Y7QUFBQSxpQ0FDRTtBQUFHLHFCQUFTLEVBQUU0RiwrREFBTSxDQUFDVyxJQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXZHRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF5SEQ7O0dBN1V1QjVJLFE7VUFDUEUscUQ7OztLQURPRixRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2V4cGVyaW1lbnRhdGlvbnMvYXJkZW5uZXMtZGVtby4xOTRlYTgzODEzMjc0NGU4ZTdjZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnJhZ21lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZHVjZXIgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0ICogYXMgWExTWCBmcm9tIFwieGxzeFwiO1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2xheW91dFwiO1xuaW1wb3J0IEZpbGVIYW5kbGVyIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2ZpbGVIYW5kbGVyXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2Zvb3RlclwiO1xuaW1wb3J0IExvZ2luRm9ybSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9sb2dpbkZvcm1cIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uLy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcblxuaW1wb3J0IHsgYXBwRmV0Y2ggfSBmcm9tIFwiLi4vLi4vLi4vbGliL2FwcEZldGNoXCI7XG5pbXBvcnQgeyBpbml0UmVkdWNlciwgcmVkdWNlckZhY3RvcnkgfSBmcm9tIFwiLi4vLi4vLi4vbGliL3JlZHVjZXJGYWN0b3J5XCI7XG5pbXBvcnQgeyBhcHBsaWNhdGlvbkRhdGVUb1N0cmluZywgZ2V0RGF0ZVRpbWVTdHJpbmcsIGdldEZyZW5jaEZvcm1hdERhdGVTdHJpbmcsIHN0cmluZ1RvRGF0ZSB9IGZyb20gXCIuLi8uLi8uLi9saWIvZGF0ZXNcIjtcblxuY29uc3QgcmVkdWNlciA9IHJlZHVjZXJGYWN0b3J5KFwiRXhww6lyaW1lbnRhdGlvbiBBcmRlbm5lcyAtIENOQUYgLSBCw6luw6lmaWNpYWlyZVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXJkZW5uZXMoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBpc0RlbW8gPSByb3V0ZXIucGF0aG5hbWUuaW5jbHVkZXMoXCJkZW1vXCIpO1xuICBjb25zdCBkZXZNb2RlID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT0gXCJkZXZlbG9wbWVudFwiO1xuICBjb25zdCBvcmdhSUQgPSBpc0RlbW9cbiAgICA/IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX09SR0FOSVNBVElPTl9JRF9ERU1PXG4gICAgOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19PUkdBTklTQVRJT05fSURfUFJPRDtcblxuICBjb25zdCBSRFZfU09MSURBUklURVNfVVJMID0gaXNEZW1vXG4gICAgPyBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19SRFZfU09MSURBUklURVNfREVNT19VUkxcbiAgICA6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1JEVl9TT0xJREFSSVRFU19QUk9EX1VSTDtcbiAgY29uc3QgdXNlclVybCA9IFJEVl9TT0xJREFSSVRFU19VUkwgKyBcIi9hcGkvdjEvdXNlcnNcIjtcblxuICBjb25zdCBbZGV2RmlsZSwgc2V0RGV2RmlsZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3J1bnMsIGRpc3BhdGNoUnVuc10gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIFtdLCBpbml0UmVkdWNlcik7XG4gIGNvbnN0IFt1c2Vyc0RhdGEsIHNldFVzZXJzRGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3VzZXJTdGF0dXNDaGVja2VkLCBzZXRVc2VyU3RhdHVzQ2hlY2tlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtmaWxlU2l6ZSwgc2V0RmlsZVNpemVdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtpc0xvZ2dlZCwgc2V0SXNMb2dnZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbdG9rZW4sIHNldFRva2VuXSA9IHVzZVN0YXRlKHtcbiAgICB0b2tlbklkOiBcIlwiLFxuICAgIHVpZDogXCJcIixcbiAgICBjbGllbnQ6IFwiXCIsXG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRldkZpbGUpIHtcbiAgICAgIGhhbmRsZUZpbGUoZGV2RmlsZSk7XG4gICAgfVxuICB9LCBbZGV2RmlsZV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHVzZXJzRGF0YSAmJiB1c2VyU3RhdHVzQ2hlY2tlZCA9PT0gZmFsc2UpIHtcbiAgICAgIHVzZXJzRGF0YS5mb3JFYWNoKCh1c2VyLCB1c2VySW5kZXgpID0+IHtcbiAgICAgICAgaWYgKHVzZXJbXCJJRCBSRFZcIl0gIT0gXCJcIikge1xuICAgICAgICAgIGNoZWNrVXNlckludml0YXRpb25TdGF0dXModXNlcltcIklEIFJEVlwiXSwgdXNlckluZGV4KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBzZXRVc2VyU3RhdHVzQ2hlY2tlZCh0cnVlKTtcbiAgICB9XG4gIH0sIFt1c2Vyc0RhdGFdKTtcblxuICBjb25zdCB3cml0ZUZpbGUgPSAoKSA9PiB7XG4gICAgY29uc3Qgb3V0V29ya2Jvb2sgPSBYTFNYLnV0aWxzLmJvb2tfbmV3KCk7XG4gICAgY29uc3Qgb3V0V29ya3NoZWV0ID0gWExTWC51dGlscy5qc29uX3RvX3NoZWV0KHVzZXJzRGF0YSk7XG4gICAgWExTWC51dGlscy5ib29rX2FwcGVuZF9zaGVldChvdXRXb3JrYm9vaywgb3V0V29ya3NoZWV0LCBcIkRJVkVSR0VOQ0VTXCIpO1xuICAgIC8vIFhMU1gudXRpbHMuYm9va19hcHBlbmRfc2hlZXQob3V0V29ya2Jvb2ssIHhscy5TaGVldHNbeGxzLlNoZWV0TmFtZXNbMV1dLCBcIkdSQVBISVFVRVwiKTtcbiAgICAvLyBYTFNYLnV0aWxzLmJvb2tfYXBwZW5kX3NoZWV0KG91dFdvcmtib29rLCB4bHMuU2hlZXRzW3hscy5TaGVldE5hbWVzWzJdXSwgXCJTZWxlY3Rpb24gQ09BXCIpO1xuICAgIFhMU1gud3JpdGVGaWxlKG91dFdvcmtib29rLCBgYXJkZW5uZXNfcnNhXyR7Z2V0RGF0ZVRpbWVTdHJpbmcobmV3IERhdGUoKSl9Lnhsc3hgKTtcbiAgfTtcblxuICBhc3luYyBmdW5jdGlvbiBnZW5lcmF0ZUludml0YXRpb25VcmwodXNlcklkLCB1c2VySW5kZXgpIHtcbiAgICBjb25zdCBpbnZpdGF0aW9uVXJsID0gdXNlclVybCArIGAvJHt1c2VySWR9L2ludml0ZWA7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXBwRmV0Y2goaW52aXRhdGlvblVybCwgdG9rZW4pO1xuXG4gICAgbGV0IG5ld1VzZXJzRGF0YSA9IFsuLi51c2Vyc0RhdGFdO1xuICAgIGlmIChyZXN1bHQuaW52aXRhdGlvbl91cmwpIHtcbiAgICAgIG5ld1VzZXJzRGF0YVt1c2VySW5kZXhdW1wiTGllbiBkJ2ludml0YXRpb25cIl0gPSByZXN1bHQuaW52aXRhdGlvbl91cmw7XG4gICAgfSBlbHNlIGlmIChyZXN1bHQuaW52aXRhdGlvbl90b2tlbikge1xuICAgICAgbmV3VXNlcnNEYXRhW3VzZXJJbmRleF1bXCJDb2RlIGQnaW52aXRhdGlvblwiXSA9IHJlc3VsdC5pbnZpdGF0aW9uX3Rva2VuO1xuICAgIH1cbiAgICBuZXdVc2Vyc0RhdGFbdXNlckluZGV4XVtcIkRhdGUgZCdpbnZpdGF0aW9uXCJdID0gZ2V0RnJlbmNoRm9ybWF0RGF0ZVN0cmluZyhuZXcgRGF0ZSgpKTtcbiAgICBzZXRVc2Vyc0RhdGEobmV3VXNlcnNEYXRhKTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGdldFVzZXIodXNlcklkKSB7XG4gICAgY29uc3QgZ2V0VXNlclVybCA9IHVzZXJVcmwgKyBgLyR7dXNlcklkfWA7XG4gICAgcmV0dXJuIGF3YWl0IGFwcEZldGNoKGdldFVzZXJVcmwsIHRva2VuKTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGNoZWNrVXNlckludml0YXRpb25TdGF0dXModXNlcklkLCB1c2VySW5kZXgpIHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRVc2VyKHVzZXJJZCk7XG5cbiAgICBsZXQgbmV3VXNlcnNEYXRhID0gWy4uLnVzZXJzRGF0YV07XG4gICAgaWYgKHJlc3VsdC51c2VyLmludml0YXRpb25fY3JlYXRlZF9hdCkge1xuICAgICAgbGV0IGludml0YXRpb25fZGF0ZSA9IHJlc3VsdC51c2VyLmludml0YXRpb25fY3JlYXRlZF9hdCAvLyBEYXRlIGF1IGZvcm1hdCA6IDIwMjEtMDQtMTUgMTQ6NTM6NTYgKzAyMDBcbiAgICAgICAgLnN1YnN0cmluZygwLCAxMCk7IC8vIFLDqWN1cMOpcmVyIGxlcyAxMCBwcmVtaWVycyBjaGlmZnJlcyAobGEgZGF0ZSlcbiAgICAgIGludml0YXRpb25fZGF0ZSA9IG5ldyBEYXRlKGludml0YXRpb25fZGF0ZSk7IC8vIENyw6llciB1bmUgZGF0ZSBKU1xuICAgICAgbmV3VXNlcnNEYXRhW3VzZXJJbmRleF1bXCJEYXRlIGQnaW52aXRhdGlvblwiXSA9IGdldEZyZW5jaEZvcm1hdERhdGVTdHJpbmcoaW52aXRhdGlvbl9kYXRlKTtcbiAgICB9XG4gICAgaWYgKHJlc3VsdC51c2VyLmludml0YXRpb25fYWNjZXB0ZWRfYXQpIHtcbiAgICAgIGxldCBpbnNjcmlwdGlvbl9kYXRlID0gcmVzdWx0LnVzZXIuaW52aXRhdGlvbl9hY2NlcHRlZF9hdCAvLyBEYXRlIGF1IGZvcm1hdCA6IDIwMjEtMDQtMTUgMTQ6NTM6NTYgKzAyMDBcbiAgICAgICAgLnN1YnN0cmluZygwLCAxMCk7IC8vIFLDqWN1cMOpcmVyIGxlcyAxMCBwcmVtaWVycyBjaGlmZnJlcyAobGEgZGF0ZSlcbiAgICAgIGluc2NyaXB0aW9uX2RhdGUgPSBuZXcgRGF0ZShpbnNjcmlwdGlvbl9kYXRlKTsgLy8gQ3LDqWVyIHVuZSBkYXRlIEpTXG4gICAgICBuZXdVc2Vyc0RhdGFbdXNlckluZGV4XVtcIkRhdGUgZCdpbnNjcmlwdGlvblwiXSA9IGdldEZyZW5jaEZvcm1hdERhdGVTdHJpbmcoaW5zY3JpcHRpb25fZGF0ZSk7XG4gICAgfVxuICAgIHNldFVzZXJzRGF0YShuZXdVc2Vyc0RhdGEpO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gaW52YWxpZE9yVGFrZW5NYWlsKHVzZXJEYXRhLCB1c2VySW5kZXgsIHVzZXJJZCA9IG51bGwpIHtcbiAgICBjb25zb2xlLmxvZyh1c2VySWQpXG4gICAgaWYgKHVzZXJJZCAhPSBudWxsKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRVc2VyKHVzZXJJZCk7XG5cbiAgICAgIGNvbnNvbGUubG9nKHJlc3VsdClcbiAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC51c2VyLmZpcnN0X25hbWUpO1xuICAgICAgY29uc29sZS5sb2cocmVzdWx0LnVzZXIubGFzdF9uYW1lKTtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC51c2VyLmJpcnRoX2RhdGUpO1xuICAgICAgY29uc29sZS5sb2cocmVzdWx0LnVzZXIuYWRkcmVzcyk7XG4gICAgICBjb25zb2xlLmxvZyh1c2VyRGF0YVtcIlBSRU5PTVwiXSk7XG4gICAgICBjb25zb2xlLmxvZyh1c2VyRGF0YVtcIk5PTVwiXSk7XG4gICAgICBjb25zb2xlLmxvZyhhcHBsaWNhdGlvbkRhdGVUb1N0cmluZyhzdHJpbmdUb0RhdGUodXNlckRhdGFbXCJEQVRFIERFIE5BSVNTQU5DRVwiXSkpKTtcbiAgICAgIGNvbnNvbGUubG9nKHVzZXJEYXRhW1wiQURSRVNTRVwiXSArIFwiIC0gXCIgKyB1c2VyRGF0YVtcIkNPREUgUE9TVEFMXCJdICsgXCIgXCIgKyB1c2VyRGF0YVtcIlZJTExFXCJdKTtcbiAgICAgIGlmIChcbiAgICAgICAgcmVzdWx0ICYmXG4gICAgICAgIHJlc3VsdC51c2VyLmZpcnN0X25hbWUudG9VcHBlckNhc2UoKSA9PT0gdXNlckRhdGFbXCJQUkVOT01cIl0udG9VcHBlckNhc2UoKSAmJlxuICAgICAgICByZXN1bHQudXNlci5sYXN0X25hbWUudG9VcHBlckNhc2UoKSA9PT0gdXNlckRhdGFbXCJOT01cIl0udG9VcHBlckNhc2UoKSAmJlxuICAgICAgICByZXN1bHQudXNlci5iaXJ0aF9kYXRlID09PSBhcHBsaWNhdGlvbkRhdGVUb1N0cmluZyhzdHJpbmdUb0RhdGUodXNlckRhdGFbXCJEQVRFIERFIE5BSVNTQU5DRVwiXSkpICYmXG4gICAgICAgIHJlc3VsdC51c2VyLmFkZHJlc3MudG9VcHBlckNhc2UoKSA9PT1cbiAgICAgICAgICB1c2VyRGF0YVtcIkFEUkVTU0VcIl0udG9VcHBlckNhc2UoKSArXG4gICAgICAgICAgICBcIiAtIFwiICtcbiAgICAgICAgICAgIHVzZXJEYXRhW1wiQ09ERSBQT1NUQUxcIl0udG9VcHBlckNhc2UoKSArXG4gICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICB1c2VyRGF0YVtcIlZJTExFXCJdLnRvVXBwZXJDYXNlKClcbiAgICAgICkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInllc1wiKTtcbiAgICAgICAgbmV3VXNlcnNEYXRhW3VzZXJJbmRleF1bXCJJRCBSRFZcIl0gPSByZXN1bHQuZXJyb3JzLmVtYWlsWzBdLmlkO1xuICAgICAgICBzZXRVc2Vyc0RhdGEobmV3VXNlcnNEYXRhKTtcbiAgICAgICAgY2hlY2tVc2VySW52aXRhdGlvblN0YXR1cyhyZXN1bHQuZXJyb3JzLmVtYWlsWzBdLmlkLCB1c2VySW5kZXgpO1xuICAgICAgICBhbGVydChcIlVuIGNvbXB0ZSBhc3NvY2nDqSDDoCBjZXQgZW1haWwgZXhpc3RlIGTDqWrDoFwiKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY3JlYXRlVXNlcih1c2VyRGF0YSwgdXNlckluZGV4LCBmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVXNlcih1c2VyRGF0YSwgdXNlckluZGV4LCB3aXRoRW1haWwgPSB0cnVlKSB7XG4gICAgY29uc3QgYWRkcmVzcyA9IHVzZXJEYXRhW1wiQURSRVNTRVwiXSArIFwiIC0gXCIgKyB1c2VyRGF0YVtcIkNPREUgUE9TVEFMXCJdICsgXCIgXCIgKyB1c2VyRGF0YVtcIlZJTExFXCJdO1xuXG4gICAgbGV0IHVzZXIgPSB7XG4gICAgICBmaXJzdF9uYW1lOiB1c2VyRGF0YVtcIlBSRU5PTVwiXSxcbiAgICAgIGxhc3RfbmFtZTogdXNlckRhdGFbXCJOT01cIl0sXG4gICAgICBwaG9uZV9udW1iZXI6IHVzZXJEYXRhW1wiVEVMRVBIT05FXCJdLnJlcGxhY2UoL1xccysvZywgXCJcIiksXG4gICAgICBiaXJ0aF9kYXRlOiBzdHJpbmdUb0RhdGUodXNlckRhdGFbXCJEQVRFIERFIE5BSVNTQU5DRVwiXSksXG4gICAgICBhZGRyZXNzOiBhZGRyZXNzLFxuICAgICAgY2Fpc3NlX2FmZmlsaWF0aW9uOiBcImNhZlwiLFxuICAgICAgYWZmaWxpYXRpb25fbnVtYmVyOiB1c2VyRGF0YVtcIk7CsENBRlwiXSxcbiAgICAgIG9yZ2FuaXNhdGlvbl9pZHM6IFtvcmdhSURdLFxuICAgIH07XG4gICAgaWYgKHdpdGhFbWFpbCA9PT0gdHJ1ZSkgdXNlci5lbWFpbCA9IHVzZXJEYXRhW1wiTUFJTFwiXTtcblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGFwcEZldGNoKHVzZXJVcmwsIHRva2VuLCBcIlBPU1RcIiwgSlNPTi5zdHJpbmdpZnkodXNlcikpO1xuXG4gICAgbGV0IG5ld1VzZXJzRGF0YSA9IFsuLi51c2Vyc0RhdGFdO1xuICAgIGlmIChyZXN1bHQudXNlcikge1xuICAgICAgbmV3VXNlcnNEYXRhW3VzZXJJbmRleF1bXCJJRCBSRFZcIl0gPSByZXN1bHQudXNlci5pZDtcbiAgICAgIHNldFVzZXJzRGF0YShuZXdVc2Vyc0RhdGEpO1xuICAgICAgZ2VuZXJhdGVJbnZpdGF0aW9uVXJsKHJlc3VsdC51c2VyLmlkLCB1c2VySW5kZXgpO1xuICAgIH0gZWxzZSBpZiAocmVzdWx0LmVycm9ycyAmJiByZXN1bHQuZXJyb3JzLmVtYWlsICYmIHJlc3VsdC5lcnJvcnMuZW1haWxbMF0uZXJyb3IgPT09IFwidGFrZW5cIikge1xuICAgICAgaW52YWxpZE9yVGFrZW5NYWlsKHVzZXJEYXRhLCB1c2VySW5kZXgsIHJlc3VsdC5lcnJvcnMuZW1haWxbMF0uaWQpO1xuICAgIH0gZWxzZSBpZiAocmVzdWx0LmVycm9ycyAmJiByZXN1bHQuZXJyb3JzLmVtYWlsICYmIHJlc3VsdC5lcnJvcnMuZW1haWxbMF0uZXJyb3IgPT09IFwiaW52YWxpZFwiKSB7XG4gICAgICBpbnZhbGlkT3JUYWtlbk1haWwodXNlckRhdGEsIHVzZXJJbmRleClcbiAgICB9IGVsc2UgaWYgKHJlc3VsdC5lcnJvcnMgJiYgcmVzdWx0LmVycm9ycy5maXJzdF9uYW1lICYmIHJlc3VsdC5lcnJvcnMuZmlyc3RfbmFtZVswXS5lcnJvciA9PT0gXCJkw6lqw6AgdXRpbGlzw6lcIikge1xuICAgICAgYWxlcnQoXCJMYSBjcsOpYXRpb24gZHUgY29tcHRlIGEgw6ljaG91w6kuIEwndXRpbGlzYXRldXIgc2VtYmxlIGV4aXN0ZXIgbWFpcyBuJ2EgcHUgw6p0cmUgcsOpY3Vww6lyw6kuXCIpO1xuICAgIH0gZWxzZSBpZiAocmVzdWx0LmVycm9ycyAmJiByZXN1bHQuZXJyb3JzWzBdICYmIHJlc3VsdC5lcnJvcnNbMF0uYmFzZSA9PT0gXCJmb3JiaWRkZW5cIikge1xuICAgICAgYWxlcnQoXCJWb3RyZSBjb21wdGUgYWdlbnQgUkRWLVNvbGlkYXJpdMOpcyBuZSB2b3VzIHBlcm1ldCBwYXMgZCdlZmZlY3R1ZXIgY2V0dGUgYWN0aW9uLlwiKTtcbiAgICB9IGVsc2UgaWYgKHJlc3VsdC5lcnJvcnMgJiYgcmVzdWx0LmVycm9yc1swXSkge1xuICAgICAgYWxlcnQocmVzdWx0LmVycm9yc1swXSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgaGFuZGxlTG9naW4gPSAodG9rZW5JZCwgdWlkLCBjbGllbnQpID0+IHtcbiAgICBzZXRUb2tlbih7IC4uLnRva2VuLCB0b2tlbklkOiB0b2tlbklkLCB1aWQ6IHVpZCwgY2xpZW50OiBjbGllbnQgfSk7XG4gICAgc2V0SXNMb2dnZWQodHJ1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRmlsZSA9IGFzeW5jIGZpbGUgPT4ge1xuICAgIGlmIChkZXZNb2RlICYmIGZpbGUgIT0gZGV2RmlsZSkge1xuICAgICAgc2V0RGV2RmlsZShmaWxlKTtcbiAgICB9XG4gICAgc2V0RmlsZVNpemUoZmlsZS5zaXplKTtcbiAgICBjb25zdCBzdGFydF90aW1lID0gbmV3IERhdGUoKTtcblxuICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGZpbGVEYXRhID0gbmV3IFVpbnQ4QXJyYXkoZXZlbnQudGFyZ2V0LnJlc3VsdCk7XG4gICAgICAgIGNvbnN0IHhscyA9IFhMU1gucmVhZChmaWxlRGF0YSwgeyB0eXBlOiBcImFycmF5XCIsIGNlbGxEYXRlczogdHJ1ZSwgZGF0ZU5GOiBcImRkL21tL3l5eXlcIiB9KTtcbiAgICAgICAgY29uc3Qgd29ya3NoZWV0ID0geGxzLlNoZWV0c1t4bHMuU2hlZXROYW1lc1swXV07XG5cbiAgICAgICAgbGV0IGpzb25EYXRhID0gWExTWC51dGlscy5zaGVldF90b19qc29uKHdvcmtzaGVldCwge1xuICAgICAgICAgIGJsYW5rcm93czogZmFsc2UsXG4gICAgICAgICAgcmF3OiBmYWxzZSxcbiAgICAgICAgICBkZWZ2YWw6IFwiXCIsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHdlIHJlbW92ZSBsaW5lIGJyZWFrcyBmcm9tIGFsbCBrZXlzXG4gICAgICAgIGpzb25EYXRhID0ganNvbkRhdGEubWFwKHVzZXJEYXRhID0+IHtcbiAgICAgICAgICByZXR1cm4gWy4uLk9iamVjdC5rZXlzKHVzZXJEYXRhKV0ucmVkdWNlKChyZXMsIGtleSkgPT4ge1xuICAgICAgICAgICAgcmVzW2tleS5yZXBsYWNlKC9bXFxuXFxyXSsvZywgXCIgXCIpXSA9IHVzZXJEYXRhW2tleV07XG4gICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICAgIH0sIHt9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2V0VXNlclN0YXR1c0NoZWNrZWQoZmFsc2UpO1xuICAgICAgICBzZXRVc2Vyc0RhdGEoanNvbkRhdGEpO1xuICAgICAgICBkaXNwYXRjaFJ1bnMoe1xuICAgICAgICAgIHR5cGU6IFwiYXBwZW5kXCIsXG4gICAgICAgICAgaXRlbToge1xuICAgICAgICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTkpLFxuICAgICAgICAgICAgZHVyYXRpb246IG5ldyBEYXRlKCkgLSBzdGFydF90aW1lLFxuICAgICAgICAgICAgZmlsZW5hbWU6IGZpbGUubmFtZSxcbiAgICAgICAgICAgIGZpbGVTaXplOiBmaWxlLnNpemUsXG4gICAgICAgICAgICBmaWxlTGluZXM6IGpzb25EYXRhLmxlbmd0aCxcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfTtcbiAgICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihmaWxlKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfSBoYW5kbGVGaWxlPXtoYW5kbGVGaWxlfT5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PkV4cMOpcmltZW50YXRpb24gQXJkZW5uZXM8L2gxPlxuXG4gICAgICAgIHshaXNMb2dnZWQgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY3JlYXRlfT5cbiAgICAgICAgICAgIDxMb2dpbkZvcm0gaGFuZGxlTG9naW49e2hhbmRsZUxvZ2lufSByZHZVcmw9e1JEVl9TT0xJREFSSVRFU19VUkx9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG5cbiAgICAgICAge2lzTG9nZ2VkICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPEZpbGVIYW5kbGVyXG4gICAgICAgICAgICAgIGhhbmRsZUZpbGU9e2hhbmRsZUZpbGV9XG4gICAgICAgICAgICAgIGZpbGVTaXplPXtmaWxlU2l6ZX1cbiAgICAgICAgICAgICAgcGVuZGluZ01lc3NhZ2U9e1wiUsOpY3Vww6lyYXRpb24gZGVzIGluZm9ybWF0aW9ucywgbWVyY2kgZGUgcGF0aWVudGVyXCJ9XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICB7dXNlcnNEYXRhICYmIChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuc3VidGl0bGV9PkLDqW7DqWZpY2lhaXJlcyBSU0E8L2gyPlxuXG4gICAgICAgICAgICAgICAge3VzZXJzRGF0YS5sZW5ndGggPT0gMCAmJiAoXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+QXVjdW4gYsOpbsOpZmljaWFpcmUgZGFucyBsZSBmaWNoaWVyPC9wPlxuICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICB7dXNlcnNEYXRhLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlPlxuICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+RGF0ZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPk5vbTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPlByw6lub208L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5NYWlsPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+VMOpbMOpcGhvbmU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5JRCBSRFYtU29saWRhcml0w6lzPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNvbFNwYW49XCIzXCI+SW52aXRhdGlvbjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj1cIjFcIj5EZXJuaWVyIGVudm9pIGxlPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNvbFNwYW49XCIxXCI+RGF0ZSBkJ2luc2NyaXB0aW9uPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNvbFNwYW49XCIxXCI+QWN0aW9uPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogcmV2ZXJzZSBlc3QgdXRpbGlzw6kgcG91ciBxdWUgbGVzIHV0aWxpc2F0ZXVycyBsZXMgcGx1cyByw6ljZW50cyBhcHBhcmFpc3NlbnQgZW4gaGF1dCAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIHtbLi4udXNlcnNEYXRhXS5yZXZlcnNlKCkubWFwKCh1c2VyLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RnJhZ21lbnQga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3VzZXJbXCJEQVRFXCJdICE9PSBcIlwiICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+e3VzZXJbXCJEQVRFXCJdfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9Pnt1c2VyW1wiTk9NXCJdfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9Pnt1c2VyW1wiUFJFTk9NXCJdfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9Pnt1c2VyW1wiTUFJTFwiXX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT57dXNlcltcIlRFTEVQSE9ORVwiXX08L3RkPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyW1wiSUQgUkRWXCJdID09PSBcIlwiICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY3JlYXRlVXNlcih1c2VyLCB1c2Vyc0RhdGEubGVuZ3RoIC0gaW5kZXggLSAxKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3LDqWVyIHVuIGNvbXB0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3VzZXJbXCJJRCBSRFZcIl0gIT09IFwiXCIgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9Pnt1c2VyW1wiSUQgUkRWXCJdfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9Pnt1c2VyW1wiRGF0ZSBkJ2ludml0YXRpb25cIl19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+e3VzZXJbXCJEYXRlIGQnaW5zY3JpcHRpb25cIl19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3VzZXJbXCJJRCBSRFZcIl0gIT09IFwiXCIgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlSW52aXRhdGlvblVybChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJbXCJJRCBSRFZcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2Vyc0RhdGEubGVuZ3RoIC0gaW5kZXggLSAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyW1wiRGF0ZSBkJ2ludml0YXRpb25cIl0gIT09IFwiXCIgJiYgXCJSZWfDqW7DqXJlciBpbnZpdGF0aW9uXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyW1wiRGF0ZSBkJ2ludml0YXRpb25cIl0gPT09IFwiXCIgJiYgXCJHw6luw6lyZXIgaW52aXRhdGlvblwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3VzZXJbXCJJRCBSRFZcIl0gPT09IFwiXCIgJiYgPHRkIGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+PC90ZD59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufSBvbkNsaWNrPXt3cml0ZUZpbGV9PlxuICAgICAgICAgICAgICAgICAgICAgIFJlZ8OpbsOpcmVyIGZpY2hpZXJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG5cbiAgICAgICAgPEZvb3RlclxuICAgICAgICAgIHN1YmplY3Q9XCJFeHDDqXJpbWVudGF0aW9uIEFyZGVubmVzXCJcbiAgICAgICAgICBwb3VycXVvaT1cIlF1ZWwgZXN0IGwnb2JqZWN0aWYgZGUgY2V0dGUgZXhww6lyaW1lbnRhdGlvbiZuYnNwOz9cIlxuICAgICAgICAgIHRleHQ9e1xuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+XG4gICAgICAgICAgICAgICAgRmFjaWxpdGVyIGxlIHRyYXZhaWwgZGVzIGFnZW50cyBkdSBkw6lwYXJ0ZW1lbnQgZXQgdGVzdGVyIGwndXRpbGlzYXRpb24gZGVcbiAgICAgICAgICAgICAgICBsJ2FwcGxpY2F0aW9uIFJEVi1Tb2xpZGFyaXTDqXMgcG91ciBhY2PDqWzDqXJlciBsYSBwcmlzZSBkdSBwcmVtaWVyIHJlbmRlei12b3VzXG4gICAgICAgICAgICAgICAgZCdvcmllbnRhdGlvbi5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgPC9tYWluPlxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==