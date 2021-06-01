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

              if (result && result.user.first_name.toUpperCase() === userData["PRENOM"].toUpperCase() && result.user.last_name.toUpperCase() === userData["NOM"].toUpperCase() && result.user.birth_date === userData["DATE DE NAISSANCE"] && result.user.address.toUpperCase() === userData["ADRESSE"].toUpperCase() + " - " + userData["CODE POSTAL"].toUpperCase() + " " + userData["VILLE"].toUpperCase()) {
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
        lineNumber: 227,
        columnNumber: 9
      }, this), !isLogged && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.create,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_loginForm__WEBPACK_IMPORTED_MODULE_11__["default"], {
          handleLogin: handleLogin,
          rdvUrl: RDV_SOLIDARITES_URL
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 231,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 230,
        columnNumber: 11
      }, this), isLogged && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_fileHandler__WEBPACK_IMPORTED_MODULE_9__["default"], {
          handleFile: handleFile,
          fileSize: fileSize,
          pendingMessage: "Récupération des informations, merci de patienter"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 237,
          columnNumber: 13
        }, this), usersData && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.subtitle,
            children: "B\xE9n\xE9ficiaires RSA"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 245,
            columnNumber: 17
          }, this), usersData.length == 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.description,
            children: "Aucun b\xE9n\xE9ficiaire dans le fichier"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 248,
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
                    lineNumber: 256,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    rowSpan: "2",
                    children: "Nom"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 257,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    rowSpan: "2",
                    children: "Pr\xE9nom"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 258,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    rowSpan: "2",
                    children: "Mail"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 259,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    rowSpan: "2",
                    children: "T\xE9l\xE9phone"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 260,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    rowSpan: "2",
                    children: "ID RDV-Solidarit\xE9s"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 261,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    colSpan: "3",
                    children: "Invitation"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 262,
                    columnNumber: 27
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 255,
                  columnNumber: 25
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    colSpan: "1",
                    children: "Dernier envoi le"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 265,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    colSpan: "1",
                    children: "Date d'inscription"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 266,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    colSpan: "1",
                    children: "Action"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 267,
                    columnNumber: 27
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 264,
                  columnNumber: 25
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 254,
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
                        lineNumber: 276,
                        columnNumber: 33
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center,
                        children: user["NOM"]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 277,
                        columnNumber: 33
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center,
                        children: user["PRENOM"]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 278,
                        columnNumber: 33
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center,
                        children: user["MAIL"]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 279,
                        columnNumber: 33
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center,
                        children: user["TELEPHONE"]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 280,
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
                          lineNumber: 284,
                          columnNumber: 37
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 283,
                        columnNumber: 35
                      }, _this), user["ID RDV"] !== "" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center,
                        children: user["ID RDV"]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 292,
                        columnNumber: 35
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center,
                        children: user["Date d'invitation"]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 294,
                        columnNumber: 33
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center,
                        children: user["Date d'inscription"]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 295,
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
                          lineNumber: 298,
                          columnNumber: 37
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 297,
                        columnNumber: 35
                      }, _this), user["ID RDV"] === "" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.center
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 311,
                        columnNumber: 59
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 275,
                      columnNumber: 31
                    }, _this)
                  }, index, false, {
                    fileName: _jsxFileName,
                    lineNumber: 273,
                    columnNumber: 27
                  }, _this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 270,
                columnNumber: 23
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 253,
              columnNumber: 21
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.button,
              onClick: writeFile,
              children: "Reg\xE9n\xE9rer fichier"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 319,
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
            lineNumber: 334,
            columnNumber: 15
          }, this)
        }, void 0, false)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 329,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 225,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXhwZXJpbWVudGF0aW9ucy9hcmRlbm5lcy1kZW1vL2luZGV4LmpzIl0sIm5hbWVzIjpbInJlZHVjZXIiLCJyZWR1Y2VyRmFjdG9yeSIsIkFyZGVubmVzIiwicm91dGVyIiwidXNlUm91dGVyIiwiaXNEZW1vIiwicGF0aG5hbWUiLCJpbmNsdWRlcyIsImRldk1vZGUiLCJvcmdhSUQiLCJwcm9jZXNzIiwiUkRWX1NPTElEQVJJVEVTX1VSTCIsInVzZXJVcmwiLCJ1c2VTdGF0ZSIsImRldkZpbGUiLCJzZXREZXZGaWxlIiwidXNlUmVkdWNlciIsImluaXRSZWR1Y2VyIiwicnVucyIsImRpc3BhdGNoUnVucyIsInVzZXJzRGF0YSIsInNldFVzZXJzRGF0YSIsInVzZXJTdGF0dXNDaGVja2VkIiwic2V0VXNlclN0YXR1c0NoZWNrZWQiLCJmaWxlU2l6ZSIsInNldEZpbGVTaXplIiwiaXNMb2dnZWQiLCJzZXRJc0xvZ2dlZCIsInRva2VuSWQiLCJ1aWQiLCJjbGllbnQiLCJ0b2tlbiIsInNldFRva2VuIiwidXNlRWZmZWN0IiwiaGFuZGxlRmlsZSIsImZvckVhY2giLCJ1c2VyIiwidXNlckluZGV4IiwiY2hlY2tVc2VySW52aXRhdGlvblN0YXR1cyIsIndyaXRlRmlsZSIsIm91dFdvcmtib29rIiwiWExTWCIsImJvb2tfbmV3Iiwib3V0V29ya3NoZWV0IiwianNvbl90b19zaGVldCIsImJvb2tfYXBwZW5kX3NoZWV0IiwiZ2V0RGF0ZVRpbWVTdHJpbmciLCJEYXRlIiwiZ2VuZXJhdGVJbnZpdGF0aW9uVXJsIiwidXNlcklkIiwiaW52aXRhdGlvblVybCIsImFwcEZldGNoIiwicmVzdWx0IiwibmV3VXNlcnNEYXRhIiwiaW52aXRhdGlvbl91cmwiLCJpbnZpdGF0aW9uX3Rva2VuIiwiZ2V0RnJlbmNoRm9ybWF0RGF0ZVN0cmluZyIsImdldFVzZXIiLCJnZXRVc2VyVXJsIiwiaW52aXRhdGlvbl9jcmVhdGVkX2F0IiwiaW52aXRhdGlvbl9kYXRlIiwic3Vic3RyaW5nIiwiaW52aXRhdGlvbl9hY2NlcHRlZF9hdCIsImluc2NyaXB0aW9uX2RhdGUiLCJpbnZhbGlkT3JUYWtlbk1haWwiLCJ1c2VyRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwiYmlydGhfZGF0ZSIsImFkZHJlc3MiLCJhcHBsaWNhdGlvbkRhdGVUb1N0cmluZyIsInN0cmluZ1RvRGF0ZSIsInRvVXBwZXJDYXNlIiwiZXJyb3JzIiwiZW1haWwiLCJpZCIsImFsZXJ0IiwiY3JlYXRlVXNlciIsIndpdGhFbWFpbCIsInBob25lX251bWJlciIsInJlcGxhY2UiLCJjYWlzc2VfYWZmaWxpYXRpb24iLCJhZmZpbGlhdGlvbl9udW1iZXIiLCJvcmdhbmlzYXRpb25faWRzIiwiSlNPTiIsInN0cmluZ2lmeSIsImVycm9yIiwiYmFzZSIsImhhbmRsZUxvZ2luIiwiZmlsZSIsInNpemUiLCJzdGFydF90aW1lIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwiZXZlbnQiLCJmaWxlRGF0YSIsIlVpbnQ4QXJyYXkiLCJ0YXJnZXQiLCJ4bHMiLCJ0eXBlIiwiY2VsbERhdGVzIiwiZGF0ZU5GIiwid29ya3NoZWV0IiwiU2hlZXRzIiwiU2hlZXROYW1lcyIsImpzb25EYXRhIiwic2hlZXRfdG9fanNvbiIsImJsYW5rcm93cyIsInJhdyIsImRlZnZhbCIsIm1hcCIsIk9iamVjdCIsImtleXMiLCJyZWR1Y2UiLCJyZXMiLCJrZXkiLCJpdGVtIiwidGltZXN0YW1wIiwidG9JU09TdHJpbmciLCJzbGljZSIsImR1cmF0aW9uIiwiZmlsZW5hbWUiLCJuYW1lIiwiZmlsZUxpbmVzIiwibGVuZ3RoIiwicmVhZEFzQXJyYXlCdWZmZXIiLCJzdHlsZXMiLCJjb250YWluZXIiLCJtYWluIiwidGl0bGUiLCJjcmVhdGUiLCJzdWJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicmV2ZXJzZSIsImluZGV4IiwiY2VudGVyIiwiYnV0dG9uIiwidGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLE9BQU8sR0FBR0MsMkVBQWMsQ0FBQyxnREFBRCxDQUE5QjtBQUVlLFNBQVNDLFFBQVQsR0FBb0I7QUFBQTs7QUFBQTs7QUFDakMsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQU1DLE1BQU0sR0FBR0YsTUFBTSxDQUFDRyxRQUFQLENBQWdCQyxRQUFoQixDQUF5QixNQUF6QixDQUFmO0FBQ0EsTUFBTUMsT0FBTyxPQUFiO0FBQ0EsTUFBTUMsTUFBTSxHQUFHSixNQUFNLEdBQ2pCSyxHQURpQixHQUVqQkEsR0FGSjtBQUlBLE1BQU1DLG1CQUFtQixHQUFHTixNQUFNLEdBQzlCSyx1QkFEOEIsR0FFOUJBLHVCQUZKO0FBR0EsTUFBTUUsT0FBTyxHQUFHRCxtQkFBbUIsR0FBRyxlQUF0Qzs7QUFYaUMsa0JBYUhFLHNEQUFRLENBQUMsSUFBRCxDQWJMO0FBQUEsTUFhMUJDLE9BYjBCO0FBQUEsTUFhakJDLFVBYmlCOztBQUFBLG9CQWNKQyx3REFBVSxDQUFDaEIsT0FBRCxFQUFVLEVBQVYsRUFBY2lCLGdFQUFkLENBZE47QUFBQSxNQWMxQkMsSUFkMEI7QUFBQSxNQWNwQkMsWUFkb0I7O0FBQUEsbUJBZUNOLHNEQUFRLENBQUMsSUFBRCxDQWZUO0FBQUEsTUFlMUJPLFNBZjBCO0FBQUEsTUFlZkMsWUFmZTs7QUFBQSxtQkFnQmlCUixzREFBUSxDQUFDLEtBQUQsQ0FoQnpCO0FBQUEsTUFnQjFCUyxpQkFoQjBCO0FBQUEsTUFnQlBDLG9CQWhCTzs7QUFBQSxtQkFpQkRWLHNEQUFRLENBQUMsQ0FBRCxDQWpCUDtBQUFBLE1BaUIxQlcsUUFqQjBCO0FBQUEsTUFpQmhCQyxXQWpCZ0I7O0FBQUEsbUJBa0JEWixzREFBUSxDQUFDLEtBQUQsQ0FsQlA7QUFBQSxNQWtCMUJhLFFBbEIwQjtBQUFBLE1Ba0JoQkMsV0FsQmdCOztBQUFBLG1CQW1CUGQsc0RBQVEsQ0FBQztBQUNqQ2UsV0FBTyxFQUFFLEVBRHdCO0FBRWpDQyxPQUFHLEVBQUUsRUFGNEI7QUFHakNDLFVBQU0sRUFBRTtBQUh5QixHQUFELENBbkJEO0FBQUEsTUFtQjFCQyxLQW5CMEI7QUFBQSxNQW1CbkJDLFFBbkJtQjs7QUF5QmpDQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJbkIsT0FBSixFQUFhO0FBQ1hvQixnQkFBVSxDQUFDcEIsT0FBRCxDQUFWO0FBQ0Q7QUFDRixHQUpRLEVBSU4sQ0FBQ0EsT0FBRCxDQUpNLENBQVQ7QUFNQW1CLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUliLFNBQVMsSUFBSUUsaUJBQWlCLEtBQUssS0FBdkMsRUFBOEM7QUFDNUNGLGVBQVMsQ0FBQ2UsT0FBVixDQUFrQixVQUFDQyxJQUFELEVBQU9DLFNBQVAsRUFBcUI7QUFDckMsWUFBSUQsSUFBSSxDQUFDLFFBQUQsQ0FBSixJQUFrQixFQUF0QixFQUEwQjtBQUN4QkUsbUNBQXlCLENBQUNGLElBQUksQ0FBQyxRQUFELENBQUwsRUFBaUJDLFNBQWpCLENBQXpCO0FBQ0Q7QUFDRixPQUpEO0FBS0FkLDBCQUFvQixDQUFDLElBQUQsQ0FBcEI7QUFDRDtBQUNGLEdBVFEsRUFTTixDQUFDSCxTQUFELENBVE0sQ0FBVDs7QUFXQSxNQUFNbUIsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUN0QixRQUFNQyxXQUFXLEdBQUdDLDBDQUFBLENBQVdDLFFBQVgsRUFBcEI7QUFDQSxRQUFNQyxZQUFZLEdBQUdGLDBDQUFBLENBQVdHLGFBQVgsQ0FBeUJ4QixTQUF6QixDQUFyQjtBQUNBcUIsOENBQUEsQ0FBV0ksaUJBQVgsQ0FBNkJMLFdBQTdCLEVBQTBDRyxZQUExQyxFQUF3RCxhQUF4RCxFQUhzQixDQUl0QjtBQUNBOztBQUNBRixrREFBQSxDQUFlRCxXQUFmLHlCQUE0Q00scUVBQWlCLENBQUMsSUFBSUMsSUFBSixFQUFELENBQTdEO0FBQ0QsR0FQRDs7QUExQ2lDLFdBbURsQkMscUJBbkRrQjtBQUFBO0FBQUE7O0FBQUE7QUFBQSw4TUFtRGpDLGtCQUFxQ0MsTUFBckMsRUFBNkNaLFNBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNRYSwyQkFEUixHQUN3QnRDLE9BQU8sY0FBT3FDLE1BQVAsWUFEL0I7QUFBQTtBQUFBLHFCQUV1QkUsK0RBQVEsQ0FBQ0QsYUFBRCxFQUFnQm5CLEtBQWhCLENBRi9COztBQUFBO0FBRVFxQixvQkFGUjtBQUlNQywwQkFKTixnR0FJeUJqQyxTQUp6Qjs7QUFLRSxrQkFBSWdDLE1BQU0sQ0FBQ0UsY0FBWCxFQUEyQjtBQUN6QkQsNEJBQVksQ0FBQ2hCLFNBQUQsQ0FBWixDQUF3QixtQkFBeEIsSUFBK0NlLE1BQU0sQ0FBQ0UsY0FBdEQ7QUFDRCxlQUZELE1BRU8sSUFBSUYsTUFBTSxDQUFDRyxnQkFBWCxFQUE2QjtBQUNsQ0YsNEJBQVksQ0FBQ2hCLFNBQUQsQ0FBWixDQUF3QixtQkFBeEIsSUFBK0NlLE1BQU0sQ0FBQ0csZ0JBQXREO0FBQ0Q7O0FBQ0RGLDBCQUFZLENBQUNoQixTQUFELENBQVosQ0FBd0IsbUJBQXhCLElBQStDbUIsNkVBQXlCLENBQUMsSUFBSVQsSUFBSixFQUFELENBQXhFO0FBQ0ExQiwwQkFBWSxDQUFDZ0MsWUFBRCxDQUFaOztBQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBbkRpQztBQUFBO0FBQUE7O0FBQUEsV0FpRWxCSSxPQWpFa0I7QUFBQTtBQUFBOztBQUFBO0FBQUEsZ01BaUVqQyxrQkFBdUJSLE1BQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNRUyx3QkFEUixHQUNxQjlDLE9BQU8sY0FBT3FDLE1BQVAsQ0FENUI7QUFBQTtBQUFBLHFCQUVlRSwrREFBUSxDQUFDTyxVQUFELEVBQWEzQixLQUFiLENBRnZCOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FqRWlDO0FBQUE7QUFBQTs7QUFBQSxXQXNFbEJPLHlCQXRFa0I7QUFBQTtBQUFBOztBQUFBO0FBQUEsa05Bc0VqQyxrQkFBeUNXLE1BQXpDLEVBQWlEWixTQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUN1Qm9CLE9BQU8sQ0FBQ1IsTUFBRCxDQUQ5Qjs7QUFBQTtBQUNRRyxvQkFEUjtBQUdNQywwQkFITixnR0FHeUJqQyxTQUh6Qjs7QUFJRSxrQkFBSWdDLE1BQU0sQ0FBQ2hCLElBQVAsQ0FBWXVCLHFCQUFoQixFQUF1QztBQUNqQ0MsK0JBRGlDLEdBQ2ZSLE1BQU0sQ0FBQ2hCLElBQVAsQ0FBWXVCLHFCQUFaLENBQWtDO0FBQWxDLGlCQUNuQkUsU0FEbUIsQ0FDVCxDQURTLEVBQ04sRUFETSxDQURlLEVBRWhCOztBQUNyQkQsK0JBQWUsR0FBRyxJQUFJYixJQUFKLENBQVNhLGVBQVQsQ0FBbEIsQ0FIcUMsQ0FHUTs7QUFDN0NQLDRCQUFZLENBQUNoQixTQUFELENBQVosQ0FBd0IsbUJBQXhCLElBQStDbUIsNkVBQXlCLENBQUNJLGVBQUQsQ0FBeEU7QUFDRDs7QUFDRCxrQkFBSVIsTUFBTSxDQUFDaEIsSUFBUCxDQUFZMEIsc0JBQWhCLEVBQXdDO0FBQ2xDQyxnQ0FEa0MsR0FDZlgsTUFBTSxDQUFDaEIsSUFBUCxDQUFZMEIsc0JBQVosQ0FBbUM7QUFBbkMsaUJBQ3BCRCxTQURvQixDQUNWLENBRFUsRUFDUCxFQURPLENBRGUsRUFFakI7O0FBQ3JCRSxnQ0FBZ0IsR0FBRyxJQUFJaEIsSUFBSixDQUFTZ0IsZ0JBQVQsQ0FBbkIsQ0FIc0MsQ0FHUzs7QUFDL0NWLDRCQUFZLENBQUNoQixTQUFELENBQVosQ0FBd0Isb0JBQXhCLElBQWdEbUIsNkVBQXlCLENBQUNPLGdCQUFELENBQXpFO0FBQ0Q7O0FBQ0QxQywwQkFBWSxDQUFDZ0MsWUFBRCxDQUFaOztBQWhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQXRFaUM7QUFBQTtBQUFBOztBQUFBLFdBeUZsQlcsa0JBekZrQjtBQUFBO0FBQUE7O0FBQUE7QUFBQSwyTUF5RmpDLGtCQUFrQ0MsUUFBbEMsRUFBNEM1QixTQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVEWSxvQkFBdkQsOERBQWdFLElBQWhFO0FBQ0VpQixxQkFBTyxDQUFDQyxHQUFSLENBQVlsQixNQUFaOztBQURGLG9CQUVNQSxNQUFNLElBQUksSUFGaEI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxxQkFHeUJRLE9BQU8sQ0FBQ1IsTUFBRCxDQUhoQzs7QUFBQTtBQUdVRyxvQkFIVjtBQUtJYyxxQkFBTyxDQUFDQyxHQUFSLENBQVlmLE1BQVo7QUFDQWMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZZixNQUFNLENBQUNoQixJQUFQLENBQVlnQyxVQUF4QjtBQUNBRixxQkFBTyxDQUFDQyxHQUFSLENBQVlmLE1BQU0sQ0FBQ2hCLElBQVAsQ0FBWWlDLFNBQXhCO0FBQ0FILHFCQUFPLENBQUNDLEdBQVIsQ0FBWWYsTUFBTSxDQUFDaEIsSUFBUCxDQUFZa0MsVUFBeEI7QUFDQUoscUJBQU8sQ0FBQ0MsR0FBUixDQUFZZixNQUFNLENBQUNoQixJQUFQLENBQVltQyxPQUF4QjtBQUNBTCxxQkFBTyxDQUFDQyxHQUFSLENBQVlGLFFBQVEsQ0FBQyxRQUFELENBQXBCO0FBQ0FDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBUSxDQUFDLEtBQUQsQ0FBcEI7QUFDQUMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZSywyRUFBdUIsQ0FBQ0MsZ0VBQVksQ0FBQ1IsUUFBUSxDQUFDLG1CQUFELENBQVQsQ0FBYixDQUFuQztBQUNBQyxxQkFBTyxDQUFDQyxHQUFSLENBQVlGLFFBQVEsQ0FBQyxTQUFELENBQVIsR0FBc0IsS0FBdEIsR0FBOEJBLFFBQVEsQ0FBQyxhQUFELENBQXRDLEdBQXdELEdBQXhELEdBQThEQSxRQUFRLENBQUMsT0FBRCxDQUFsRjs7QUFDQSxrQkFDRWIsTUFBTSxJQUNOQSxNQUFNLENBQUNoQixJQUFQLENBQVlnQyxVQUFaLENBQXVCTSxXQUF2QixPQUF5Q1QsUUFBUSxDQUFDLFFBQUQsQ0FBUixDQUFtQlMsV0FBbkIsRUFEekMsSUFFQXRCLE1BQU0sQ0FBQ2hCLElBQVAsQ0FBWWlDLFNBQVosQ0FBc0JLLFdBQXRCLE9BQXdDVCxRQUFRLENBQUMsS0FBRCxDQUFSLENBQWdCUyxXQUFoQixFQUZ4QyxJQUdBdEIsTUFBTSxDQUFDaEIsSUFBUCxDQUFZa0MsVUFBWixLQUEyQkwsUUFBUSxDQUFDLG1CQUFELENBSG5DLElBSUFiLE1BQU0sQ0FBQ2hCLElBQVAsQ0FBWW1DLE9BQVosQ0FBb0JHLFdBQXBCLE9BQXNDVCxRQUFRLENBQUMsU0FBRCxDQUFSLENBQW9CUyxXQUFwQixLQUFvQyxLQUFwQyxHQUE0Q1QsUUFBUSxDQUFDLGFBQUQsQ0FBUixDQUF3QlMsV0FBeEIsRUFBNUMsR0FBb0YsR0FBcEYsR0FBMEZULFFBQVEsQ0FBQyxPQUFELENBQVIsQ0FBa0JTLFdBQWxCLEVBTGxJLEVBTUU7QUFDQVIsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQVo7QUFDQWQsNEJBQVksQ0FBQ2hCLFNBQUQsQ0FBWixDQUF3QixRQUF4QixJQUFvQ2UsTUFBTSxDQUFDdUIsTUFBUCxDQUFjQyxLQUFkLENBQW9CLENBQXBCLEVBQXVCQyxFQUEzRDtBQUNBeEQsNEJBQVksQ0FBQ2dDLFlBQUQsQ0FBWjtBQUNBZix5Q0FBeUIsQ0FBQ2MsTUFBTSxDQUFDdUIsTUFBUCxDQUFjQyxLQUFkLENBQW9CLENBQXBCLEVBQXVCQyxFQUF4QixFQUE0QnhDLFNBQTVCLENBQXpCO0FBQ0F5QyxxQkFBSyxDQUFDLDJDQUFELENBQUw7QUFDRDs7QUExQkw7QUFBQTs7QUFBQTtBQTRCSUMsd0JBQVUsQ0FBQ2QsUUFBRCxFQUFXNUIsU0FBWCxFQUFzQixLQUF0QixDQUFWOztBQTVCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQXpGaUM7QUFBQTtBQUFBOztBQUFBLFdBeUhsQjBDLFVBekhrQjtBQUFBO0FBQUE7O0FBQUE7QUFBQSxtTUF5SGpDLGtCQUEwQmQsUUFBMUIsRUFBb0M1QixTQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStDMkMsdUJBQS9DLDhEQUEyRCxJQUEzRDtBQUNRVCxxQkFEUixHQUNrQk4sUUFBUSxDQUFDLFNBQUQsQ0FBUixHQUFzQixLQUF0QixHQUE4QkEsUUFBUSxDQUFDLGFBQUQsQ0FBdEMsR0FBd0QsR0FBeEQsR0FBOERBLFFBQVEsQ0FBQyxPQUFELENBRHhGO0FBR003QixrQkFITixHQUdhO0FBQ1RnQywwQkFBVSxFQUFFSCxRQUFRLENBQUMsUUFBRCxDQURYO0FBRVRJLHlCQUFTLEVBQUVKLFFBQVEsQ0FBQyxLQUFELENBRlY7QUFHVGdCLDRCQUFZLEVBQUVoQixRQUFRLENBQUMsV0FBRCxDQUFSLENBQXNCaUIsT0FBdEIsQ0FBOEIsTUFBOUIsRUFBc0MsRUFBdEMsQ0FITDtBQUlUWiwwQkFBVSxFQUFFRyxnRUFBWSxDQUFDUixRQUFRLENBQUMsbUJBQUQsQ0FBVCxDQUpmO0FBS1RNLHVCQUFPLEVBQUVBLE9BTEE7QUFNVFksa0NBQWtCLEVBQUUsS0FOWDtBQU9UQyxrQ0FBa0IsRUFBRW5CLFFBQVEsQ0FBQyxPQUFELENBUG5CO0FBUVRvQixnQ0FBZ0IsRUFBRSxDQUFDNUUsTUFBRDtBQVJULGVBSGI7QUFhRSxrQkFBSXVFLFNBQVMsS0FBSyxJQUFsQixFQUF3QjVDLElBQUksQ0FBQ3dDLEtBQUwsR0FBYVgsUUFBUSxDQUFDLE1BQUQsQ0FBckI7QUFiMUI7QUFBQSxxQkFldUJkLCtEQUFRLENBQUN2QyxPQUFELEVBQVVtQixLQUFWLEVBQWlCLE1BQWpCLEVBQXlCdUQsSUFBSSxDQUFDQyxTQUFMLENBQWVuRCxJQUFmLENBQXpCLENBZi9COztBQUFBO0FBZVFnQixvQkFmUjtBQWlCTUMsMEJBakJOLGdHQWlCeUJqQyxTQWpCekI7O0FBa0JFLGtCQUFJZ0MsTUFBTSxDQUFDaEIsSUFBWCxFQUFpQjtBQUNmaUIsNEJBQVksQ0FBQ2hCLFNBQUQsQ0FBWixDQUF3QixRQUF4QixJQUFvQ2UsTUFBTSxDQUFDaEIsSUFBUCxDQUFZeUMsRUFBaEQ7QUFDQXhELDRCQUFZLENBQUNnQyxZQUFELENBQVo7QUFDQUwscUNBQXFCLENBQUNJLE1BQU0sQ0FBQ2hCLElBQVAsQ0FBWXlDLEVBQWIsRUFBaUJ4QyxTQUFqQixDQUFyQjtBQUNELGVBSkQsTUFJTyxJQUFJZSxNQUFNLENBQUN1QixNQUFQLElBQWlCdkIsTUFBTSxDQUFDdUIsTUFBUCxDQUFjQyxLQUEvQixJQUF3Q3hCLE1BQU0sQ0FBQ3VCLE1BQVAsQ0FBY0MsS0FBZCxDQUFvQixDQUFwQixFQUF1QlksS0FBdkIsS0FBaUMsT0FBN0UsRUFBc0Y7QUFDM0Z4QixrQ0FBa0IsQ0FBQ0MsUUFBRCxFQUFXNUIsU0FBWCxFQUFzQmUsTUFBTSxDQUFDdUIsTUFBUCxDQUFjQyxLQUFkLENBQW9CLENBQXBCLEVBQXVCQyxFQUE3QyxDQUFsQjtBQUNELGVBRk0sTUFFQSxJQUFJekIsTUFBTSxDQUFDdUIsTUFBUCxJQUFpQnZCLE1BQU0sQ0FBQ3VCLE1BQVAsQ0FBY0MsS0FBL0IsSUFBd0N4QixNQUFNLENBQUN1QixNQUFQLENBQWNDLEtBQWQsQ0FBb0IsQ0FBcEIsRUFBdUJZLEtBQXZCLEtBQWlDLFNBQTdFLEVBQXdGO0FBQzdGeEIsa0NBQWtCLENBQUNDLFFBQUQsRUFBVzVCLFNBQVgsQ0FBbEI7QUFDRCxlQUZNLE1BRUEsSUFBSWUsTUFBTSxDQUFDdUIsTUFBUCxJQUFpQnZCLE1BQU0sQ0FBQ3VCLE1BQVAsQ0FBY1AsVUFBL0IsSUFBNkNoQixNQUFNLENBQUN1QixNQUFQLENBQWNQLFVBQWQsQ0FBeUIsQ0FBekIsRUFBNEJvQixLQUE1QixLQUFzQyxjQUF2RixFQUF1RztBQUM1R1YscUJBQUssQ0FBQyx5RkFBRCxDQUFMO0FBQ0QsZUFGTSxNQUVBLElBQUkxQixNQUFNLENBQUN1QixNQUFQLElBQWlCdkIsTUFBTSxDQUFDdUIsTUFBUCxDQUFjLENBQWQsQ0FBakIsSUFBcUN2QixNQUFNLENBQUN1QixNQUFQLENBQWMsQ0FBZCxFQUFpQmMsSUFBakIsS0FBMEIsV0FBbkUsRUFBZ0Y7QUFDckZYLHFCQUFLLENBQUMsaUZBQUQsQ0FBTDtBQUNELGVBRk0sTUFFQSxJQUFJMUIsTUFBTSxDQUFDdUIsTUFBUCxJQUFpQnZCLE1BQU0sQ0FBQ3VCLE1BQVAsQ0FBYyxDQUFkLENBQXJCLEVBQXVDO0FBQzVDRyxxQkFBSyxDQUFDMUIsTUFBTSxDQUFDdUIsTUFBUCxDQUFjLENBQWQsQ0FBRCxDQUFMO0FBQ0Q7O0FBaENIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBekhpQztBQUFBO0FBQUE7O0FBNEpqQyxNQUFNZSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDOUQsT0FBRCxFQUFVQyxHQUFWLEVBQWVDLE1BQWYsRUFBMEI7QUFDNUNFLFlBQVEsaUNBQU1ELEtBQU47QUFBYUgsYUFBTyxFQUFFQSxPQUF0QjtBQUErQkMsU0FBRyxFQUFFQSxHQUFwQztBQUF5Q0MsWUFBTSxFQUFFQTtBQUFqRCxPQUFSO0FBQ0FILGVBQVcsQ0FBQyxJQUFELENBQVg7QUFDRCxHQUhEOztBQUtBLE1BQU1PLFVBQVU7QUFBQSxnTUFBRyxpQkFBTXlELElBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2pCLGtCQUFJbkYsT0FBTyxJQUFJbUYsSUFBSSxJQUFJN0UsT0FBdkIsRUFBZ0M7QUFDOUJDLDBCQUFVLENBQUM0RSxJQUFELENBQVY7QUFDRDs7QUFDRGxFLHlCQUFXLENBQUNrRSxJQUFJLENBQUNDLElBQU4sQ0FBWDtBQUNNQyx3QkFMVyxHQUtFLElBQUk5QyxJQUFKLEVBTEY7QUFBQTtBQUFBLHFCQU9YLElBQUkrQyxPQUFKLENBQVksVUFBQUMsT0FBTyxFQUFJO0FBQzNCLG9CQUFJQyxNQUFNLEdBQUcsSUFBSUMsVUFBSixFQUFiOztBQUNBRCxzQkFBTSxDQUFDRSxNQUFQLEdBQWdCLFVBQVVDLEtBQVYsRUFBaUI7QUFDL0Isc0JBQU1DLFFBQVEsR0FBRyxJQUFJQyxVQUFKLENBQWVGLEtBQUssQ0FBQ0csTUFBTixDQUFhbEQsTUFBNUIsQ0FBakI7QUFDQSxzQkFBTW1ELEdBQUcsR0FBRzlELHlDQUFBLENBQVUyRCxRQUFWLEVBQW9CO0FBQUVJLHdCQUFJLEVBQUUsT0FBUjtBQUFpQkMsNkJBQVMsRUFBRSxJQUE1QjtBQUFrQ0MsMEJBQU0sRUFBRTtBQUExQyxtQkFBcEIsQ0FBWjtBQUNBLHNCQUFNQyxTQUFTLEdBQUdKLEdBQUcsQ0FBQ0ssTUFBSixDQUFXTCxHQUFHLENBQUNNLFVBQUosQ0FBZSxDQUFmLENBQVgsQ0FBbEI7QUFFQSxzQkFBSUMsUUFBUSxHQUFHckUsMENBQUEsQ0FBV3NFLGFBQVgsQ0FBeUJKLFNBQXpCLEVBQW9DO0FBQ2pESyw2QkFBUyxFQUFFLEtBRHNDO0FBRWpEQyx1QkFBRyxFQUFFLEtBRjRDO0FBR2pEQywwQkFBTSxFQUFFO0FBSHlDLG1CQUFwQyxDQUFmLENBTCtCLENBVy9COztBQUNBSiwwQkFBUSxHQUFHQSxRQUFRLENBQUNLLEdBQVQsQ0FBYSxVQUFBbEQsUUFBUSxFQUFJO0FBQ2xDLDJCQUFPLDZGQUFJbUQsTUFBTSxDQUFDQyxJQUFQLENBQVlwRCxRQUFaLENBQUosRUFBMkJxRCxNQUEzQixDQUFrQyxVQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBYztBQUNyREQseUJBQUcsQ0FBQ0MsR0FBRyxDQUFDdEMsT0FBSixDQUFZLFVBQVosRUFBd0IsR0FBeEIsQ0FBRCxDQUFILEdBQW9DakIsUUFBUSxDQUFDdUQsR0FBRCxDQUE1QztBQUNBLDZCQUFPRCxHQUFQO0FBQ0QscUJBSE0sRUFHSixFQUhJLENBQVA7QUFJRCxtQkFMVSxDQUFYO0FBT0FoRyxzQ0FBb0IsQ0FBQyxLQUFELENBQXBCO0FBQ0FGLDhCQUFZLENBQUN5RixRQUFELENBQVo7QUFDQTNGLDhCQUFZLENBQUM7QUFDWHFGLHdCQUFJLEVBQUUsUUFESztBQUVYaUIsd0JBQUksRUFBRTtBQUNKQywrQkFBUyxFQUFFLElBQUkzRSxJQUFKLEdBQVc0RSxXQUFYLEdBQXlCQyxLQUF6QixDQUErQixDQUEvQixFQUFrQyxFQUFsQyxDQURQO0FBRUpDLDhCQUFRLEVBQUUsSUFBSTlFLElBQUosS0FBYThDLFVBRm5CO0FBR0ppQyw4QkFBUSxFQUFFbkMsSUFBSSxDQUFDb0MsSUFIWDtBQUlKdkcsOEJBQVEsRUFBRW1FLElBQUksQ0FBQ0MsSUFKWDtBQUtKb0MsK0JBQVMsRUFBRWxCLFFBQVEsQ0FBQ21CO0FBTGhCO0FBRkssbUJBQUQsQ0FBWjtBQVVBbEMseUJBQU87QUFDUixpQkFoQ0Q7O0FBaUNBQyxzQkFBTSxDQUFDa0MsaUJBQVAsQ0FBeUJ2QyxJQUF6QjtBQUNELGVBcENLLENBUFc7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBVnpELFVBQVU7QUFBQTtBQUFBO0FBQUEsS0FBaEI7O0FBOENBLHNCQUNFLHFFQUFDLDBEQUFEO0FBQVEsYUFBUyxFQUFFaUcsK0RBQU0sQ0FBQ0MsU0FBMUI7QUFBcUMsY0FBVSxFQUFFbEcsVUFBakQ7QUFBQSwyQkFDRTtBQUFNLGVBQVMsRUFBRWlHLCtEQUFNLENBQUNFLElBQXhCO0FBQUEsOEJBQ0U7QUFBSSxpQkFBUyxFQUFFRiwrREFBTSxDQUFDRyxLQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLEVBR0csQ0FBQzVHLFFBQUQsaUJBQ0M7QUFBSyxpQkFBUyxFQUFFeUcsK0RBQU0sQ0FBQ0ksTUFBdkI7QUFBQSwrQkFDRSxxRUFBQyw4REFBRDtBQUFXLHFCQUFXLEVBQUU3QyxXQUF4QjtBQUFxQyxnQkFBTSxFQUFFL0U7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKSixFQVNHZSxRQUFRLGlCQUNQO0FBQUEsZ0NBQ0UscUVBQUMsK0RBQUQ7QUFDRSxvQkFBVSxFQUFFUSxVQURkO0FBRUUsa0JBQVEsRUFBRVYsUUFGWjtBQUdFLHdCQUFjLEVBQUU7QUFIbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixFQU9HSixTQUFTLGlCQUNSO0FBQUEsa0NBQ0U7QUFBSSxxQkFBUyxFQUFFK0csK0RBQU0sQ0FBQ0ssUUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsRUFHR3BILFNBQVMsQ0FBQzZHLE1BQVYsSUFBb0IsQ0FBcEIsaUJBQ0M7QUFBRyxxQkFBUyxFQUFFRSwrREFBTSxDQUFDTSxXQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKSixFQU9HckgsU0FBUyxDQUFDNkcsTUFBVixHQUFtQixDQUFuQixpQkFDQztBQUFBLG9DQUNFO0FBQUEsc0NBQ0U7QUFBQSx3Q0FDRTtBQUFBLDBDQUNFO0FBQUksMkJBQU8sRUFBQyxHQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURGLGVBRUU7QUFBSSwyQkFBTyxFQUFDLEdBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBRkYsZUFHRTtBQUFJLDJCQUFPLEVBQUMsR0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFIRixlQUlFO0FBQUksMkJBQU8sRUFBQyxHQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUpGLGVBS0U7QUFBSSwyQkFBTyxFQUFDLEdBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBTEYsZUFNRTtBQUFJLDJCQUFPLEVBQUMsR0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFORixlQU9FO0FBQUksMkJBQU8sRUFBQyxHQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERixlQVVFO0FBQUEsMENBQ0U7QUFBSSwyQkFBTyxFQUFDLEdBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREYsZUFFRTtBQUFJLDJCQUFPLEVBQUMsR0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFGRixlQUdFO0FBQUksMkJBQU8sRUFBQyxHQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsZUFpQkU7QUFBQSwwQkFFRyw2RkFBSTdHLFNBQUosRUFBZXNILE9BQWYsR0FBeUJ2QixHQUF6QixDQUE2QixVQUFDL0UsSUFBRCxFQUFPdUcsS0FBUDtBQUFBLHNDQUM1QixxRUFBQyw4Q0FBRDtBQUFBLDhCQUNHdkcsSUFBSSxDQUFDLE1BQUQsQ0FBSixLQUFpQixFQUFqQixpQkFDQztBQUFBLDhDQUNFO0FBQUksaUNBQVMsRUFBRStGLCtEQUFNLENBQUNTLE1BQXRCO0FBQUEsa0NBQStCeEcsSUFBSSxDQUFDLE1BQUQ7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFERixlQUVFO0FBQUksaUNBQVMsRUFBRStGLCtEQUFNLENBQUNTLE1BQXRCO0FBQUEsa0NBQStCeEcsSUFBSSxDQUFDLEtBQUQ7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFGRixlQUdFO0FBQUksaUNBQVMsRUFBRStGLCtEQUFNLENBQUNTLE1BQXRCO0FBQUEsa0NBQStCeEcsSUFBSSxDQUFDLFFBQUQ7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFIRixlQUlFO0FBQUksaUNBQVMsRUFBRStGLCtEQUFNLENBQUNTLE1BQXRCO0FBQUEsa0NBQStCeEcsSUFBSSxDQUFDLE1BQUQ7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFKRixlQUtFO0FBQUksaUNBQVMsRUFBRStGLCtEQUFNLENBQUNTLE1BQXRCO0FBQUEsa0NBQStCeEcsSUFBSSxDQUFDLFdBQUQ7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFMRixFQU9HQSxJQUFJLENBQUMsUUFBRCxDQUFKLEtBQW1CLEVBQW5CLGlCQUNDO0FBQUksaUNBQVMsRUFBRStGLCtEQUFNLENBQUNTLE1BQXRCO0FBQUEsK0NBQ0U7QUFDRSxpQ0FBTyxFQUFFO0FBQUEsbUNBQU03RCxVQUFVLENBQUMzQyxJQUFELEVBQU9oQixTQUFTLENBQUM2RyxNQUFWLEdBQW1CVSxLQUFuQixHQUEyQixDQUFsQyxDQUFoQjtBQUFBLDJCQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFSSixFQWdCR3ZHLElBQUksQ0FBQyxRQUFELENBQUosS0FBbUIsRUFBbkIsaUJBQ0M7QUFBSSxpQ0FBUyxFQUFFK0YsK0RBQU0sQ0FBQ1MsTUFBdEI7QUFBQSxrQ0FBK0J4RyxJQUFJLENBQUMsUUFBRDtBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQWpCSixlQW1CRTtBQUFJLGlDQUFTLEVBQUUrRiwrREFBTSxDQUFDUyxNQUF0QjtBQUFBLGtDQUErQnhHLElBQUksQ0FBQyxtQkFBRDtBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQW5CRixlQW9CRTtBQUFJLGlDQUFTLEVBQUUrRiwrREFBTSxDQUFDUyxNQUF0QjtBQUFBLGtDQUErQnhHLElBQUksQ0FBQyxvQkFBRDtBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQXBCRixFQXFCR0EsSUFBSSxDQUFDLFFBQUQsQ0FBSixLQUFtQixFQUFuQixpQkFDQztBQUFJLGlDQUFTLEVBQUUrRiwrREFBTSxDQUFDUyxNQUF0QjtBQUFBLCtDQUNFO0FBQ0UsaUNBQU8sRUFBRTtBQUFBLG1DQUNQNUYscUJBQXFCLENBQ25CWixJQUFJLENBQUMsUUFBRCxDQURlLEVBRW5CaEIsU0FBUyxDQUFDNkcsTUFBVixHQUFtQlUsS0FBbkIsR0FBMkIsQ0FGUixDQURkO0FBQUEsMkJBRFg7QUFBQSxxQ0FRR3ZHLElBQUksQ0FBQyxtQkFBRCxDQUFKLEtBQThCLEVBQTlCLElBQW9DLHNCQVJ2QyxFQVNHQSxJQUFJLENBQUMsbUJBQUQsQ0FBSixLQUE4QixFQUE5QixJQUFvQyxvQkFUdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkF0QkosRUFvQ0dBLElBQUksQ0FBQyxRQUFELENBQUosS0FBbUIsRUFBbkIsaUJBQXlCO0FBQUksaUNBQVMsRUFBRStGLCtEQUFNLENBQUNTO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBcEM1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSixxQkFBZUQsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUQ0QjtBQUFBLGlCQUE3QjtBQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBakJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQW1FRTtBQUFRLHVCQUFTLEVBQUVSLCtEQUFNLENBQUNVLE1BQTFCO0FBQWtDLHFCQUFPLEVBQUV0RyxTQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFuRUY7QUFBQSwwQkFSSjtBQUFBLHdCQVJKO0FBQUEsc0JBVkosZUF1R0UscUVBQUMsMkRBQUQ7QUFDRSxlQUFPLEVBQUMsNkJBRFY7QUFFRSxnQkFBUSxFQUFDLHNEQUZYO0FBR0UsWUFBSSxlQUNGO0FBQUEsaUNBQ0U7QUFBRyxxQkFBUyxFQUFFNEYsK0RBQU0sQ0FBQ1csSUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F2R0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBeUhEOztHQXhVdUI1SSxRO1VBQ1BFLHFEOzs7S0FET0YsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9leHBlcmltZW50YXRpb25zL2FyZGVubmVzLWRlbW8uMGRjOGIzYWY2MzFmM2M1Mjc3ODcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZyYWdtZW50LCB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWR1Y2VyIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCAqIGFzIFhMU1ggZnJvbSBcInhsc3hcIjtcblxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9sYXlvdXRcIjtcbmltcG9ydCBGaWxlSGFuZGxlciBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9maWxlSGFuZGxlclwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9mb290ZXJcIjtcbmltcG9ydCBMb2dpbkZvcm0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvbG9naW5Gb3JtXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi8uLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5cbmltcG9ydCB7IGFwcEZldGNoIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9hcHBGZXRjaFwiO1xuaW1wb3J0IHsgaW5pdFJlZHVjZXIsIHJlZHVjZXJGYWN0b3J5IH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9yZWR1Y2VyRmFjdG9yeVwiO1xuaW1wb3J0IHsgYXBwbGljYXRpb25EYXRlVG9TdHJpbmcsIGdldERhdGVUaW1lU3RyaW5nLCBnZXRGcmVuY2hGb3JtYXREYXRlU3RyaW5nLCBzdHJpbmdUb0RhdGUgfSBmcm9tIFwiLi4vLi4vLi4vbGliL2RhdGVzXCI7XG5cbmNvbnN0IHJlZHVjZXIgPSByZWR1Y2VyRmFjdG9yeShcIkV4cMOpcmltZW50YXRpb24gQXJkZW5uZXMgLSBDTkFGIC0gQsOpbsOpZmljaWFpcmVcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFyZGVubmVzKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgaXNEZW1vID0gcm91dGVyLnBhdGhuYW1lLmluY2x1ZGVzKFwiZGVtb1wiKTtcbiAgY29uc3QgZGV2TW9kZSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09IFwiZGV2ZWxvcG1lbnRcIjtcbiAgY29uc3Qgb3JnYUlEID0gaXNEZW1vXG4gICAgPyBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19PUkdBTklTQVRJT05fSURfREVNT1xuICAgIDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfT1JHQU5JU0FUSU9OX0lEX1BST0Q7XG5cbiAgY29uc3QgUkRWX1NPTElEQVJJVEVTX1VSTCA9IGlzRGVtb1xuICAgID8gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUkRWX1NPTElEQVJJVEVTX0RFTU9fVVJMXG4gICAgOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19SRFZfU09MSURBUklURVNfUFJPRF9VUkw7XG4gIGNvbnN0IHVzZXJVcmwgPSBSRFZfU09MSURBUklURVNfVVJMICsgXCIvYXBpL3YxL3VzZXJzXCI7XG5cbiAgY29uc3QgW2RldkZpbGUsIHNldERldkZpbGVdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtydW5zLCBkaXNwYXRjaFJ1bnNdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBbXSwgaW5pdFJlZHVjZXIpO1xuICBjb25zdCBbdXNlcnNEYXRhLCBzZXRVc2Vyc0RhdGFdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFt1c2VyU3RhdHVzQ2hlY2tlZCwgc2V0VXNlclN0YXR1c0NoZWNrZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZmlsZVNpemUsIHNldEZpbGVTaXplXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbaXNMb2dnZWQsIHNldElzTG9nZ2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Rva2VuLCBzZXRUb2tlbl0gPSB1c2VTdGF0ZSh7XG4gICAgdG9rZW5JZDogXCJcIixcbiAgICB1aWQ6IFwiXCIsXG4gICAgY2xpZW50OiBcIlwiLFxuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkZXZGaWxlKSB7XG4gICAgICBoYW5kbGVGaWxlKGRldkZpbGUpO1xuICAgIH1cbiAgfSwgW2RldkZpbGVdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh1c2Vyc0RhdGEgJiYgdXNlclN0YXR1c0NoZWNrZWQgPT09IGZhbHNlKSB7XG4gICAgICB1c2Vyc0RhdGEuZm9yRWFjaCgodXNlciwgdXNlckluZGV4KSA9PiB7XG4gICAgICAgIGlmICh1c2VyW1wiSUQgUkRWXCJdICE9IFwiXCIpIHtcbiAgICAgICAgICBjaGVja1VzZXJJbnZpdGF0aW9uU3RhdHVzKHVzZXJbXCJJRCBSRFZcIl0sIHVzZXJJbmRleCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgc2V0VXNlclN0YXR1c0NoZWNrZWQodHJ1ZSk7XG4gICAgfVxuICB9LCBbdXNlcnNEYXRhXSk7XG5cbiAgY29uc3Qgd3JpdGVGaWxlID0gKCkgPT4ge1xuICAgIGNvbnN0IG91dFdvcmtib29rID0gWExTWC51dGlscy5ib29rX25ldygpO1xuICAgIGNvbnN0IG91dFdvcmtzaGVldCA9IFhMU1gudXRpbHMuanNvbl90b19zaGVldCh1c2Vyc0RhdGEpO1xuICAgIFhMU1gudXRpbHMuYm9va19hcHBlbmRfc2hlZXQob3V0V29ya2Jvb2ssIG91dFdvcmtzaGVldCwgXCJESVZFUkdFTkNFU1wiKTtcbiAgICAvLyBYTFNYLnV0aWxzLmJvb2tfYXBwZW5kX3NoZWV0KG91dFdvcmtib29rLCB4bHMuU2hlZXRzW3hscy5TaGVldE5hbWVzWzFdXSwgXCJHUkFQSElRVUVcIik7XG4gICAgLy8gWExTWC51dGlscy5ib29rX2FwcGVuZF9zaGVldChvdXRXb3JrYm9vaywgeGxzLlNoZWV0c1t4bHMuU2hlZXROYW1lc1syXV0sIFwiU2VsZWN0aW9uIENPQVwiKTtcbiAgICBYTFNYLndyaXRlRmlsZShvdXRXb3JrYm9vaywgYGFyZGVubmVzX3JzYV8ke2dldERhdGVUaW1lU3RyaW5nKG5ldyBEYXRlKCkpfS54bHN4YCk7XG4gIH07XG5cbiAgYXN5bmMgZnVuY3Rpb24gZ2VuZXJhdGVJbnZpdGF0aW9uVXJsKHVzZXJJZCwgdXNlckluZGV4KSB7XG4gICAgY29uc3QgaW52aXRhdGlvblVybCA9IHVzZXJVcmwgKyBgLyR7dXNlcklkfS9pbnZpdGVgO1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGFwcEZldGNoKGludml0YXRpb25VcmwsIHRva2VuKTtcblxuICAgIGxldCBuZXdVc2Vyc0RhdGEgPSBbLi4udXNlcnNEYXRhXTtcbiAgICBpZiAocmVzdWx0Lmludml0YXRpb25fdXJsKSB7XG4gICAgICBuZXdVc2Vyc0RhdGFbdXNlckluZGV4XVtcIkxpZW4gZCdpbnZpdGF0aW9uXCJdID0gcmVzdWx0Lmludml0YXRpb25fdXJsO1xuICAgIH0gZWxzZSBpZiAocmVzdWx0Lmludml0YXRpb25fdG9rZW4pIHtcbiAgICAgIG5ld1VzZXJzRGF0YVt1c2VySW5kZXhdW1wiQ29kZSBkJ2ludml0YXRpb25cIl0gPSByZXN1bHQuaW52aXRhdGlvbl90b2tlbjtcbiAgICB9XG4gICAgbmV3VXNlcnNEYXRhW3VzZXJJbmRleF1bXCJEYXRlIGQnaW52aXRhdGlvblwiXSA9IGdldEZyZW5jaEZvcm1hdERhdGVTdHJpbmcobmV3IERhdGUoKSk7XG4gICAgc2V0VXNlcnNEYXRhKG5ld1VzZXJzRGF0YSk7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBnZXRVc2VyKHVzZXJJZCkge1xuICAgIGNvbnN0IGdldFVzZXJVcmwgPSB1c2VyVXJsICsgYC8ke3VzZXJJZH1gO1xuICAgIHJldHVybiBhd2FpdCBhcHBGZXRjaChnZXRVc2VyVXJsLCB0b2tlbik7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBjaGVja1VzZXJJbnZpdGF0aW9uU3RhdHVzKHVzZXJJZCwgdXNlckluZGV4KSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0VXNlcih1c2VySWQpO1xuXG4gICAgbGV0IG5ld1VzZXJzRGF0YSA9IFsuLi51c2Vyc0RhdGFdO1xuICAgIGlmIChyZXN1bHQudXNlci5pbnZpdGF0aW9uX2NyZWF0ZWRfYXQpIHtcbiAgICAgIGxldCBpbnZpdGF0aW9uX2RhdGUgPSByZXN1bHQudXNlci5pbnZpdGF0aW9uX2NyZWF0ZWRfYXQgLy8gRGF0ZSBhdSBmb3JtYXQgOiAyMDIxLTA0LTE1IDE0OjUzOjU2ICswMjAwXG4gICAgICAgIC5zdWJzdHJpbmcoMCwgMTApOyAvLyBSw6ljdXDDqXJlciBsZXMgMTAgcHJlbWllcnMgY2hpZmZyZXMgKGxhIGRhdGUpXG4gICAgICBpbnZpdGF0aW9uX2RhdGUgPSBuZXcgRGF0ZShpbnZpdGF0aW9uX2RhdGUpOyAvLyBDcsOpZXIgdW5lIGRhdGUgSlNcbiAgICAgIG5ld1VzZXJzRGF0YVt1c2VySW5kZXhdW1wiRGF0ZSBkJ2ludml0YXRpb25cIl0gPSBnZXRGcmVuY2hGb3JtYXREYXRlU3RyaW5nKGludml0YXRpb25fZGF0ZSk7XG4gICAgfVxuICAgIGlmIChyZXN1bHQudXNlci5pbnZpdGF0aW9uX2FjY2VwdGVkX2F0KSB7XG4gICAgICBsZXQgaW5zY3JpcHRpb25fZGF0ZSA9IHJlc3VsdC51c2VyLmludml0YXRpb25fYWNjZXB0ZWRfYXQgLy8gRGF0ZSBhdSBmb3JtYXQgOiAyMDIxLTA0LTE1IDE0OjUzOjU2ICswMjAwXG4gICAgICAgIC5zdWJzdHJpbmcoMCwgMTApOyAvLyBSw6ljdXDDqXJlciBsZXMgMTAgcHJlbWllcnMgY2hpZmZyZXMgKGxhIGRhdGUpXG4gICAgICBpbnNjcmlwdGlvbl9kYXRlID0gbmV3IERhdGUoaW5zY3JpcHRpb25fZGF0ZSk7IC8vIENyw6llciB1bmUgZGF0ZSBKU1xuICAgICAgbmV3VXNlcnNEYXRhW3VzZXJJbmRleF1bXCJEYXRlIGQnaW5zY3JpcHRpb25cIl0gPSBnZXRGcmVuY2hGb3JtYXREYXRlU3RyaW5nKGluc2NyaXB0aW9uX2RhdGUpO1xuICAgIH1cbiAgICBzZXRVc2Vyc0RhdGEobmV3VXNlcnNEYXRhKTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGludmFsaWRPclRha2VuTWFpbCh1c2VyRGF0YSwgdXNlckluZGV4LCB1c2VySWQgPSBudWxsKSB7XG4gICAgY29uc29sZS5sb2codXNlcklkKVxuICAgIGlmICh1c2VySWQgIT0gbnVsbCkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0VXNlcih1c2VySWQpO1xuXG4gICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXG4gICAgICBjb25zb2xlLmxvZyhyZXN1bHQudXNlci5maXJzdF9uYW1lKTtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC51c2VyLmxhc3RfbmFtZSk7XG4gICAgICBjb25zb2xlLmxvZyhyZXN1bHQudXNlci5iaXJ0aF9kYXRlKTtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC51c2VyLmFkZHJlc3MpO1xuICAgICAgY29uc29sZS5sb2codXNlckRhdGFbXCJQUkVOT01cIl0pO1xuICAgICAgY29uc29sZS5sb2codXNlckRhdGFbXCJOT01cIl0pO1xuICAgICAgY29uc29sZS5sb2coYXBwbGljYXRpb25EYXRlVG9TdHJpbmcoc3RyaW5nVG9EYXRlKHVzZXJEYXRhW1wiREFURSBERSBOQUlTU0FOQ0VcIl0pKSk7XG4gICAgICBjb25zb2xlLmxvZyh1c2VyRGF0YVtcIkFEUkVTU0VcIl0gKyBcIiAtIFwiICsgdXNlckRhdGFbXCJDT0RFIFBPU1RBTFwiXSArIFwiIFwiICsgdXNlckRhdGFbXCJWSUxMRVwiXSk7XG4gICAgICBpZiAoXG4gICAgICAgIHJlc3VsdCAmJlxuICAgICAgICByZXN1bHQudXNlci5maXJzdF9uYW1lLnRvVXBwZXJDYXNlKCkgPT09IHVzZXJEYXRhW1wiUFJFTk9NXCJdLnRvVXBwZXJDYXNlKCkgJiZcbiAgICAgICAgcmVzdWx0LnVzZXIubGFzdF9uYW1lLnRvVXBwZXJDYXNlKCkgPT09IHVzZXJEYXRhW1wiTk9NXCJdLnRvVXBwZXJDYXNlKCkgJiZcbiAgICAgICAgcmVzdWx0LnVzZXIuYmlydGhfZGF0ZSA9PT0gdXNlckRhdGFbXCJEQVRFIERFIE5BSVNTQU5DRVwiXSAmJlxuICAgICAgICByZXN1bHQudXNlci5hZGRyZXNzLnRvVXBwZXJDYXNlKCkgPT09IHVzZXJEYXRhW1wiQURSRVNTRVwiXS50b1VwcGVyQ2FzZSgpICsgXCIgLSBcIiArIHVzZXJEYXRhW1wiQ09ERSBQT1NUQUxcIl0udG9VcHBlckNhc2UoKSArIFwiIFwiICsgdXNlckRhdGFbXCJWSUxMRVwiXS50b1VwcGVyQ2FzZSgpXG4gICAgICApIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ5ZXNcIik7XG4gICAgICAgIG5ld1VzZXJzRGF0YVt1c2VySW5kZXhdW1wiSUQgUkRWXCJdID0gcmVzdWx0LmVycm9ycy5lbWFpbFswXS5pZDtcbiAgICAgICAgc2V0VXNlcnNEYXRhKG5ld1VzZXJzRGF0YSk7XG4gICAgICAgIGNoZWNrVXNlckludml0YXRpb25TdGF0dXMocmVzdWx0LmVycm9ycy5lbWFpbFswXS5pZCwgdXNlckluZGV4KTtcbiAgICAgICAgYWxlcnQoXCJVbiBjb21wdGUgYXNzb2Npw6kgw6AgY2V0IGVtYWlsIGV4aXN0ZSBkw6lqw6BcIik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNyZWF0ZVVzZXIodXNlckRhdGEsIHVzZXJJbmRleCwgZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVVzZXIodXNlckRhdGEsIHVzZXJJbmRleCwgd2l0aEVtYWlsID0gdHJ1ZSkge1xuICAgIGNvbnN0IGFkZHJlc3MgPSB1c2VyRGF0YVtcIkFEUkVTU0VcIl0gKyBcIiAtIFwiICsgdXNlckRhdGFbXCJDT0RFIFBPU1RBTFwiXSArIFwiIFwiICsgdXNlckRhdGFbXCJWSUxMRVwiXTtcblxuICAgIGxldCB1c2VyID0ge1xuICAgICAgZmlyc3RfbmFtZTogdXNlckRhdGFbXCJQUkVOT01cIl0sXG4gICAgICBsYXN0X25hbWU6IHVzZXJEYXRhW1wiTk9NXCJdLFxuICAgICAgcGhvbmVfbnVtYmVyOiB1c2VyRGF0YVtcIlRFTEVQSE9ORVwiXS5yZXBsYWNlKC9cXHMrL2csIFwiXCIpLFxuICAgICAgYmlydGhfZGF0ZTogc3RyaW5nVG9EYXRlKHVzZXJEYXRhW1wiREFURSBERSBOQUlTU0FOQ0VcIl0pLFxuICAgICAgYWRkcmVzczogYWRkcmVzcyxcbiAgICAgIGNhaXNzZV9hZmZpbGlhdGlvbjogXCJjYWZcIixcbiAgICAgIGFmZmlsaWF0aW9uX251bWJlcjogdXNlckRhdGFbXCJOwrBDQUZcIl0sXG4gICAgICBvcmdhbmlzYXRpb25faWRzOiBbb3JnYUlEXSxcbiAgICB9O1xuICAgIGlmICh3aXRoRW1haWwgPT09IHRydWUpIHVzZXIuZW1haWwgPSB1c2VyRGF0YVtcIk1BSUxcIl07XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBhcHBGZXRjaCh1c2VyVXJsLCB0b2tlbiwgXCJQT1NUXCIsIEpTT04uc3RyaW5naWZ5KHVzZXIpKTtcblxuICAgIGxldCBuZXdVc2Vyc0RhdGEgPSBbLi4udXNlcnNEYXRhXTtcbiAgICBpZiAocmVzdWx0LnVzZXIpIHtcbiAgICAgIG5ld1VzZXJzRGF0YVt1c2VySW5kZXhdW1wiSUQgUkRWXCJdID0gcmVzdWx0LnVzZXIuaWQ7XG4gICAgICBzZXRVc2Vyc0RhdGEobmV3VXNlcnNEYXRhKTtcbiAgICAgIGdlbmVyYXRlSW52aXRhdGlvblVybChyZXN1bHQudXNlci5pZCwgdXNlckluZGV4KTtcbiAgICB9IGVsc2UgaWYgKHJlc3VsdC5lcnJvcnMgJiYgcmVzdWx0LmVycm9ycy5lbWFpbCAmJiByZXN1bHQuZXJyb3JzLmVtYWlsWzBdLmVycm9yID09PSBcInRha2VuXCIpIHtcbiAgICAgIGludmFsaWRPclRha2VuTWFpbCh1c2VyRGF0YSwgdXNlckluZGV4LCByZXN1bHQuZXJyb3JzLmVtYWlsWzBdLmlkKTtcbiAgICB9IGVsc2UgaWYgKHJlc3VsdC5lcnJvcnMgJiYgcmVzdWx0LmVycm9ycy5lbWFpbCAmJiByZXN1bHQuZXJyb3JzLmVtYWlsWzBdLmVycm9yID09PSBcImludmFsaWRcIikge1xuICAgICAgaW52YWxpZE9yVGFrZW5NYWlsKHVzZXJEYXRhLCB1c2VySW5kZXgpXG4gICAgfSBlbHNlIGlmIChyZXN1bHQuZXJyb3JzICYmIHJlc3VsdC5lcnJvcnMuZmlyc3RfbmFtZSAmJiByZXN1bHQuZXJyb3JzLmZpcnN0X25hbWVbMF0uZXJyb3IgPT09IFwiZMOpasOgIHV0aWxpc8OpXCIpIHtcbiAgICAgIGFsZXJ0KFwiTGEgY3LDqWF0aW9uIGR1IGNvbXB0ZSBhIMOpY2hvdcOpLiBMJ3V0aWxpc2F0ZXVyIHNlbWJsZSBleGlzdGVyIG1haXMgbidhIHB1IMOqdHJlIHLDqWN1cMOpcsOpLlwiKTtcbiAgICB9IGVsc2UgaWYgKHJlc3VsdC5lcnJvcnMgJiYgcmVzdWx0LmVycm9yc1swXSAmJiByZXN1bHQuZXJyb3JzWzBdLmJhc2UgPT09IFwiZm9yYmlkZGVuXCIpIHtcbiAgICAgIGFsZXJ0KFwiVm90cmUgY29tcHRlIGFnZW50IFJEVi1Tb2xpZGFyaXTDqXMgbmUgdm91cyBwZXJtZXQgcGFzIGQnZWZmZWN0dWVyIGNldHRlIGFjdGlvbi5cIik7XG4gICAgfSBlbHNlIGlmIChyZXN1bHQuZXJyb3JzICYmIHJlc3VsdC5lcnJvcnNbMF0pIHtcbiAgICAgIGFsZXJ0KHJlc3VsdC5lcnJvcnNbMF0pO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUxvZ2luID0gKHRva2VuSWQsIHVpZCwgY2xpZW50KSA9PiB7XG4gICAgc2V0VG9rZW4oeyAuLi50b2tlbiwgdG9rZW5JZDogdG9rZW5JZCwgdWlkOiB1aWQsIGNsaWVudDogY2xpZW50IH0pO1xuICAgIHNldElzTG9nZ2VkKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUZpbGUgPSBhc3luYyBmaWxlID0+IHtcbiAgICBpZiAoZGV2TW9kZSAmJiBmaWxlICE9IGRldkZpbGUpIHtcbiAgICAgIHNldERldkZpbGUoZmlsZSk7XG4gICAgfVxuICAgIHNldEZpbGVTaXplKGZpbGUuc2l6ZSk7XG4gICAgY29uc3Qgc3RhcnRfdGltZSA9IG5ldyBEYXRlKCk7XG5cbiAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBjb25zdCBmaWxlRGF0YSA9IG5ldyBVaW50OEFycmF5KGV2ZW50LnRhcmdldC5yZXN1bHQpO1xuICAgICAgICBjb25zdCB4bHMgPSBYTFNYLnJlYWQoZmlsZURhdGEsIHsgdHlwZTogXCJhcnJheVwiLCBjZWxsRGF0ZXM6IHRydWUsIGRhdGVORjogXCJkZC9tbS95eXl5XCIgfSk7XG4gICAgICAgIGNvbnN0IHdvcmtzaGVldCA9IHhscy5TaGVldHNbeGxzLlNoZWV0TmFtZXNbMF1dO1xuXG4gICAgICAgIGxldCBqc29uRGF0YSA9IFhMU1gudXRpbHMuc2hlZXRfdG9fanNvbih3b3Jrc2hlZXQsIHtcbiAgICAgICAgICBibGFua3Jvd3M6IGZhbHNlLFxuICAgICAgICAgIHJhdzogZmFsc2UsXG4gICAgICAgICAgZGVmdmFsOiBcIlwiLFxuICAgICAgICB9KTtcblxuICAgICAgICAvLyB3ZSByZW1vdmUgbGluZSBicmVha3MgZnJvbSBhbGwga2V5c1xuICAgICAgICBqc29uRGF0YSA9IGpzb25EYXRhLm1hcCh1c2VyRGF0YSA9PiB7XG4gICAgICAgICAgcmV0dXJuIFsuLi5PYmplY3Qua2V5cyh1c2VyRGF0YSldLnJlZHVjZSgocmVzLCBrZXkpID0+IHtcbiAgICAgICAgICAgIHJlc1trZXkucmVwbGFjZSgvW1xcblxccl0rL2csIFwiIFwiKV0gPSB1c2VyRGF0YVtrZXldO1xuICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgICB9LCB7fSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNldFVzZXJTdGF0dXNDaGVja2VkKGZhbHNlKTtcbiAgICAgICAgc2V0VXNlcnNEYXRhKGpzb25EYXRhKTtcbiAgICAgICAgZGlzcGF0Y2hSdW5zKHtcbiAgICAgICAgICB0eXBlOiBcImFwcGVuZFwiLFxuICAgICAgICAgIGl0ZW06IHtcbiAgICAgICAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDE5KSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiBuZXcgRGF0ZSgpIC0gc3RhcnRfdGltZSxcbiAgICAgICAgICAgIGZpbGVuYW1lOiBmaWxlLm5hbWUsXG4gICAgICAgICAgICBmaWxlU2l6ZTogZmlsZS5zaXplLFxuICAgICAgICAgICAgZmlsZUxpbmVzOiBqc29uRGF0YS5sZW5ndGgsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH07XG4gICAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoZmlsZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0gaGFuZGxlRmlsZT17aGFuZGxlRmlsZX0+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5FeHDDqXJpbWVudGF0aW9uIEFyZGVubmVzPC9oMT5cblxuICAgICAgICB7IWlzTG9nZ2VkICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNyZWF0ZX0+XG4gICAgICAgICAgICA8TG9naW5Gb3JtIGhhbmRsZUxvZ2luPXtoYW5kbGVMb2dpbn0gcmR2VXJsPXtSRFZfU09MSURBUklURVNfVVJMfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuXG4gICAgICAgIHtpc0xvZ2dlZCAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxGaWxlSGFuZGxlclxuICAgICAgICAgICAgICBoYW5kbGVGaWxlPXtoYW5kbGVGaWxlfVxuICAgICAgICAgICAgICBmaWxlU2l6ZT17ZmlsZVNpemV9XG4gICAgICAgICAgICAgIHBlbmRpbmdNZXNzYWdlPXtcIlLDqWN1cMOpcmF0aW9uIGRlcyBpbmZvcm1hdGlvbnMsIG1lcmNpIGRlIHBhdGllbnRlclwifVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAge3VzZXJzRGF0YSAmJiAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnN1YnRpdGxlfT5Cw6luw6lmaWNpYWlyZXMgUlNBPC9oMj5cblxuICAgICAgICAgICAgICAgIHt1c2Vyc0RhdGEubGVuZ3RoID09IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PkF1Y3VuIGLDqW7DqWZpY2lhaXJlIGRhbnMgbGUgZmljaGllcjwvcD5cbiAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAge3VzZXJzRGF0YS5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPkRhdGU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5Ob208L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5QcsOpbm9tPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+TWFpbDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPlTDqWzDqXBob25lPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+SUQgUkRWLVNvbGlkYXJpdMOpczwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjb2xTcGFuPVwiM1wiPkludml0YXRpb248L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNvbFNwYW49XCIxXCI+RGVybmllciBlbnZvaSBsZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjb2xTcGFuPVwiMVwiPkRhdGUgZCdpbnNjcmlwdGlvbjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjb2xTcGFuPVwiMVwiPkFjdGlvbjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIHJldmVyc2UgZXN0IHV0aWxpc8OpIHBvdXIgcXVlIGxlcyB1dGlsaXNhdGV1cnMgbGVzIHBsdXMgcsOpY2VudHMgYXBwYXJhaXNzZW50IGVuIGhhdXQgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICB7Wy4uLnVzZXJzRGF0YV0ucmV2ZXJzZSgpLm1hcCgodXNlciwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZyYWdtZW50IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyW1wiREFURVwiXSAhPT0gXCJcIiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9Pnt1c2VyW1wiREFURVwiXX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT57dXNlcltcIk5PTVwiXX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT57dXNlcltcIlBSRU5PTVwiXX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT57dXNlcltcIk1BSUxcIl19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+e3VzZXJbXCJURUxFUEhPTkVcIl19PC90ZD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXNlcltcIklEIFJEVlwiXSA9PT0gXCJcIiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNyZWF0ZVVzZXIodXNlciwgdXNlcnNEYXRhLmxlbmd0aCAtIGluZGV4IC0gMSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENyw6llciB1biBjb21wdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyW1wiSUQgUkRWXCJdICE9PSBcIlwiICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT57dXNlcltcIklEIFJEVlwiXX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT57dXNlcltcIkRhdGUgZCdpbnZpdGF0aW9uXCJdfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9Pnt1c2VyW1wiRGF0ZSBkJ2luc2NyaXB0aW9uXCJdfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyW1wiSUQgUkRWXCJdICE9PSBcIlwiICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZUludml0YXRpb25VcmwoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyW1wiSUQgUkRWXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcnNEYXRhLmxlbmd0aCAtIGluZGV4IC0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXNlcltcIkRhdGUgZCdpbnZpdGF0aW9uXCJdICE9PSBcIlwiICYmIFwiUmVnw6luw6lyZXIgaW52aXRhdGlvblwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXNlcltcIkRhdGUgZCdpbnZpdGF0aW9uXCJdID09PSBcIlwiICYmIFwiR8OpbsOpcmVyIGludml0YXRpb25cIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyW1wiSUQgUkRWXCJdID09PSBcIlwiICYmIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9PjwvdGQ+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cblxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0gb25DbGljaz17d3JpdGVGaWxlfT5cbiAgICAgICAgICAgICAgICAgICAgICBSZWfDqW7DqXJlciBmaWNoaWVyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuXG4gICAgICAgIDxGb290ZXJcbiAgICAgICAgICBzdWJqZWN0PVwiRXhww6lyaW1lbnRhdGlvbiBBcmRlbm5lc1wiXG4gICAgICAgICAgcG91cnF1b2k9XCJRdWVsIGVzdCBsJ29iamVjdGlmIGRlIGNldHRlIGV4cMOpcmltZW50YXRpb24mbmJzcDs/XCJcbiAgICAgICAgICB0ZXh0PXtcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRleHR9PlxuICAgICAgICAgICAgICAgIEZhY2lsaXRlciBsZSB0cmF2YWlsIGRlcyBhZ2VudHMgZHUgZMOpcGFydGVtZW50IGV0IHRlc3RlciBsJ3V0aWxpc2F0aW9uIGRlXG4gICAgICAgICAgICAgICAgbCdhcHBsaWNhdGlvbiBSRFYtU29saWRhcml0w6lzIHBvdXIgYWNjw6lsw6lyZXIgbGEgcHJpc2UgZHUgcHJlbWllciByZW5kZXotdm91c1xuICAgICAgICAgICAgICAgIGQnb3JpZW50YXRpb24uXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgIH1cbiAgICAgICAgLz5cbiAgICAgIDwvbWFpbj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=