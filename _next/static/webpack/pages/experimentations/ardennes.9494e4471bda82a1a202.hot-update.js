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
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/layout */ "./components/layout.js");
/* harmony import */ var _components_fileHandler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/fileHandler */ "./components/fileHandler.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/footer */ "./components/footer.js");
/* harmony import */ var _components_loginForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/loginForm */ "./components/loginForm.js");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _lib_appFetch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../lib/appFetch */ "./lib/appFetch.js");
/* harmony import */ var _lib_reducerFactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../lib/reducerFactory */ "./lib/reducerFactory.js");
/* harmony import */ var _lib_dates__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../lib/dates */ "./lib/dates.js");







var _jsxFileName = "/home/q/code/qblanc/beta.gouv/analyse-flux-insertion/pages/experimentations/ardennes/index.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











var reducer = Object(_lib_reducerFactory__WEBPACK_IMPORTED_MODULE_13__["reducerFactory"])("Expérimentation Ardennes - CNAF - Bénéficiaire");
var devMode = true;
var orgaID = "1";
var RDV_SOLIDARITES_URL = "http://localhost:5000";
var userUrl = RDV_SOLIDARITES_URL + "/api/v1/users";
function Ardennes() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(null),
      devFile = _useState[0],
      setDevFile = _useState[1];

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_5__["useReducer"])(reducer, [], _lib_reducerFactory__WEBPACK_IMPORTED_MODULE_13__["initReducer"]),
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
    var outWorkbook = xlsx__WEBPACK_IMPORTED_MODULE_6__["utils"].book_new();
    var outWorksheet = xlsx__WEBPACK_IMPORTED_MODULE_6__["utils"].json_to_sheet(usersData);
    xlsx__WEBPACK_IMPORTED_MODULE_6__["utils"].book_append_sheet(outWorkbook, outWorksheet, "DIVERGENCES"); // XLSX.utils.book_append_sheet(outWorkbook, xls.Sheets[xls.SheetNames[1]], "GRAPHIQUE");
    // XLSX.utils.book_append_sheet(outWorkbook, xls.Sheets[xls.SheetNames[2]], "Selection COA");

    xlsx__WEBPACK_IMPORTED_MODULE_6__["writeFile"](outWorkbook, "ardennes_rsa_".concat(Object(_lib_dates__WEBPACK_IMPORTED_MODULE_14__["getDateTimeString"])(new Date()), ".xlsx"));
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
              return Object(_lib_appFetch__WEBPACK_IMPORTED_MODULE_12__["appFetch"])(invitationUrl, token);

            case 3:
              result = _context2.sent;

              if (result.invitation_url) {
                newUsersData = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(usersData);
                newUsersData[userIndex]["Invitation"] = result.invitation_url;
                newUsersData[userIndex]["Date d'invitation"] = Object(_lib_dates__WEBPACK_IMPORTED_MODULE_14__["getFrenchFormatDateString"])(new Date());
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
              return Object(_lib_appFetch__WEBPACK_IMPORTED_MODULE_12__["appFetch"])(getUserUrl, token);

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

                newUsersData[userIndex]["Date d'invitation"] = Object(_lib_dates__WEBPACK_IMPORTED_MODULE_14__["getFrenchFormatDateString"])(invitation_date);
              }

              if (result.user.invitation_accepted_at) {
                inscription_date = result.user.invitation_accepted_at // Date au format : 2021-04-15 14:53:56 +0200
                .substring(0, 10); // Récupérer les 10 premiers chiffres (la date)

                inscription_date = new Date(inscription_date); // Créer une date JS

                newUsersData[userIndex]["Date d'inscription"] = Object(_lib_dates__WEBPACK_IMPORTED_MODULE_14__["getFrenchFormatDateString"])(inscription_date);
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
                birth_date: Object(_lib_dates__WEBPACK_IMPORTED_MODULE_14__["stringToDate"])(userData["DATE DE NAISSANCE"]),
                address: address,
                caisse_affiliation: "caf",
                affiliation_number: userData["N°CAF"],
                organisation_ids: [orgaID]
              };
              _context5.next = 4;
              return Object(_lib_appFetch__WEBPACK_IMPORTED_MODULE_12__["appFetch"])(userUrl, token, "POST", JSON.stringify(user));

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
                  var xls = xlsx__WEBPACK_IMPORTED_MODULE_6__["read"](fileData, {
                    type: "array",
                    cellDates: true,
                    dateNF: "dd/mm/yyyy"
                  });
                  var worksheet = xls.Sheets[xls.SheetNames[0]]; // Limiter la capture aux colonnes A-V

                  var range = xlsx__WEBPACK_IMPORTED_MODULE_6__["utils"].decode_range(worksheet["!ref"]);
                  range.s.c = 0; // 0 == XLSX.utils.decode_col("A")

                  range.e.c = 21; // 19 == XLSX.utils.decode_col("V")

                  var new_range = xlsx__WEBPACK_IMPORTED_MODULE_6__["utils"].encode_range(range);
                  var jsonData = xlsx__WEBPACK_IMPORTED_MODULE_6__["utils"].sheet_to_json(worksheet, {
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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.container,
    handleFile: handleFile,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.main,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.title,
        children: "Exp\xE9rimentation Ardennes"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 9
      }, this), !isLogged && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.create,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_loginForm__WEBPACK_IMPORTED_MODULE_10__["default"], {
          handleLogin: handleLogin,
          rdvUrl: RDV_SOLIDARITES_URL
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 11
      }, this), isLogged && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_fileHandler__WEBPACK_IMPORTED_MODULE_8__["default"], {
          handleFile: handleFile,
          fileSize: fileSize,
          pendingMessage: "Récupération des informations, merci de patienter"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 13
        }, this), usersData && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.subtitle,
            children: "B\xE9n\xE9ficiaires RSA"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 218,
            columnNumber: 17
          }, this), usersData.length == 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.description,
            children: "Aucun b\xE9n\xE9ficiaire dans le fichier"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 221,
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
                    lineNumber: 229,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    rowSpan: "2",
                    children: "Nom"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 230,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    rowSpan: "2",
                    children: "Pr\xE9nom"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 231,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    rowSpan: "2",
                    children: "Mail"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 232,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    rowSpan: "2",
                    children: "T\xE9l\xE9phone"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 233,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    rowSpan: "2",
                    children: "ID RDV-Solidarit\xE9s"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 234,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    colSpan: "3",
                    children: "Invitation"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 235,
                    columnNumber: 27
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 228,
                  columnNumber: 25
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    colSpan: "1",
                    children: "Dernier envoi le"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 238,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    colSpan: "1",
                    children: "Date d'inscription"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 239,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    colSpan: "1",
                    children: "Action"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 240,
                    columnNumber: 27
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 237,
                  columnNumber: 25
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 227,
                columnNumber: 23
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
                children: Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(usersData).reverse().map(function (user, index) {
                  user["DATE"] !== "" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.center,
                      children: user["DATE"]
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 248,
                      columnNumber: 31
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.center,
                      children: user["NOM"]
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 249,
                      columnNumber: 31
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.center,
                      children: user["PRENOM"]
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 250,
                      columnNumber: 31
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.center,
                      children: user["MAIL"]
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 251,
                      columnNumber: 31
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.center,
                      children: user["TELEPHONE"]
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 252,
                      columnNumber: 31
                    }, _this), user["ID RDV"] === "" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.center,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                        onClick: function onClick() {
                          return createUser(user, index);
                        },
                        children: "Cr\xE9er un compte"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 256,
                        columnNumber: 35
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 255,
                      columnNumber: 33
                    }, _this), user["ID RDV"] !== "" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.center,
                      children: user["ID RDV"]
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 262,
                      columnNumber: 33
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.center,
                      children: user["Date d'invitation"]
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 264,
                      columnNumber: 31
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.center,
                      children: user["Date d'inscription"]
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 265,
                      columnNumber: 31
                    }, _this), user["ID RDV"] !== "" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.center,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                        onClick: function onClick() {
                          return generateInvitationUrl(user["ID RDV"], index);
                        },
                        children: [user["Date d'invitation"] !== "" && "Regénérer invitation", user["Date d'invitation"] === "" && "Générer invitation"]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 268,
                        columnNumber: 35
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 267,
                      columnNumber: 33
                    }, _this), user["ID RDV"] === "" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.center
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 276,
                      columnNumber: 57
                    }, _this)]
                  }, index, true, {
                    fileName: _jsxFileName,
                    lineNumber: 247,
                    columnNumber: 29
                  }, _this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 243,
                columnNumber: 23
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 226,
              columnNumber: 21
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.button,
              onClick: writeFile,
              children: "Reg\xE9n\xE9rer fichier"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 283,
              columnNumber: 21
            }, this)]
          }, void 0, true)]
        }, void 0, true)]
      }, void 0, true), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_footer__WEBPACK_IMPORTED_MODULE_9__["default"], {
        subject: "Exp\xE9rimentation Ardennes",
        pourquoi: "Quel est l'objectif de cette exp\xE9rimentation\xA0?",
        text: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.text,
            children: "Faciliter le travail des agents du d\xE9partement et tester l'utilisation de l'application RDV-Solidarit\xE9s pour acc\xE9l\xE9rer la prise du premier rendez-vous d'orientation."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 298,
            columnNumber: 15
          }, this)
        }, void 0, false)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 293,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 198,
    columnNumber: 5
  }, this);
}

_s(Ardennes, "l5Rg3y2ZxcSGwZhX0xFprTuZX1M=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXhwZXJpbWVudGF0aW9ucy9hcmRlbm5lcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJyZWR1Y2VyIiwicmVkdWNlckZhY3RvcnkiLCJkZXZNb2RlIiwib3JnYUlEIiwicHJvY2VzcyIsIlJEVl9TT0xJREFSSVRFU19VUkwiLCJ1c2VyVXJsIiwiQXJkZW5uZXMiLCJ1c2VTdGF0ZSIsImRldkZpbGUiLCJzZXREZXZGaWxlIiwidXNlUmVkdWNlciIsImluaXRSZWR1Y2VyIiwicnVucyIsImRpc3BhdGNoUnVucyIsInVzZXJzRGF0YSIsInNldFVzZXJzRGF0YSIsInVzZXJTdGF0dXNDaGVja2VkIiwic2V0VXNlclN0YXR1c0NoZWNrZWQiLCJmaWxlU2l6ZSIsInNldEZpbGVTaXplIiwiaXNMb2dnZWQiLCJzZXRJc0xvZ2dlZCIsInRva2VuSWQiLCJ1aWQiLCJjbGllbnQiLCJ0b2tlbiIsInNldFRva2VuIiwidXNlRWZmZWN0IiwiaGFuZGxlRmlsZSIsImZvckVhY2giLCJ1c2VyIiwidXNlckluZGV4IiwiY2hlY2tVc2VySW52aXRhdGlvblN0YXR1cyIsIndyaXRlRmlsZSIsIm91dFdvcmtib29rIiwiWExTWCIsImJvb2tfbmV3Iiwib3V0V29ya3NoZWV0IiwianNvbl90b19zaGVldCIsImJvb2tfYXBwZW5kX3NoZWV0IiwiZ2V0RGF0ZVRpbWVTdHJpbmciLCJEYXRlIiwiZ2VuZXJhdGVJbnZpdGF0aW9uVXJsIiwidXNlcklkIiwiaW52aXRhdGlvblVybCIsImFwcEZldGNoIiwicmVzdWx0IiwiaW52aXRhdGlvbl91cmwiLCJuZXdVc2Vyc0RhdGEiLCJnZXRGcmVuY2hGb3JtYXREYXRlU3RyaW5nIiwiZ2V0VXNlciIsImdldFVzZXJVcmwiLCJpbnZpdGF0aW9uX2NyZWF0ZWRfYXQiLCJpbnZpdGF0aW9uX2RhdGUiLCJzdWJzdHJpbmciLCJpbnZpdGF0aW9uX2FjY2VwdGVkX2F0IiwiaW5zY3JpcHRpb25fZGF0ZSIsImNyZWF0ZVVzZXIiLCJ1c2VyRGF0YSIsImFkZHJlc3MiLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwiZW1haWwiLCJwaG9uZV9udW1iZXIiLCJyZXBsYWNlIiwiYmlydGhfZGF0ZSIsInN0cmluZ1RvRGF0ZSIsImNhaXNzZV9hZmZpbGlhdGlvbiIsImFmZmlsaWF0aW9uX251bWJlciIsIm9yZ2FuaXNhdGlvbl9pZHMiLCJKU09OIiwic3RyaW5naWZ5IiwiaWQiLCJlcnJvcnMiLCJlcnJvciIsImFsZXJ0IiwiYmFzZSIsImhhbmRsZUxvZ2luIiwiZmlsZSIsInNpemUiLCJzdGFydF90aW1lIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwiZXZlbnQiLCJmaWxlRGF0YSIsIlVpbnQ4QXJyYXkiLCJ0YXJnZXQiLCJ4bHMiLCJ0eXBlIiwiY2VsbERhdGVzIiwiZGF0ZU5GIiwid29ya3NoZWV0IiwiU2hlZXRzIiwiU2hlZXROYW1lcyIsInJhbmdlIiwiZGVjb2RlX3JhbmdlIiwicyIsImMiLCJlIiwibmV3X3JhbmdlIiwiZW5jb2RlX3JhbmdlIiwianNvbkRhdGEiLCJzaGVldF90b19qc29uIiwiYmxhbmtyb3dzIiwicmF3IiwiZGVmdmFsIiwibWFwIiwiT2JqZWN0Iiwia2V5cyIsInJlZHVjZSIsInJlcyIsImtleSIsInNldElzUGVuZGluZyIsIml0ZW0iLCJ0aW1lc3RhbXAiLCJ0b0lTT1N0cmluZyIsInNsaWNlIiwiZHVyYXRpb24iLCJmaWxlbmFtZSIsIm5hbWUiLCJmaWxlTGluZXMiLCJsZW5ndGgiLCJyZWFkQXNBcnJheUJ1ZmZlciIsInN0eWxlcyIsImNvbnRhaW5lciIsIm1haW4iLCJ0aXRsZSIsImNyZWF0ZSIsInN1YnRpdGxlIiwiZGVzY3JpcHRpb24iLCJyZXZlcnNlIiwiaW5kZXgiLCJjZW50ZXIiLCJidXR0b24iLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtB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NkJBN0I1QjtBQUFBLHFCQUFTRCxLQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREQ7QUFnQ0MsaUJBakNIO0FBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBMERFO0FBQVEsdUJBQVMsRUFBRVIsK0RBQU0sQ0FBQ1UsTUFBMUI7QUFBa0MscUJBQU8sRUFBRXZHLFNBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQTFERjtBQUFBLDBCQVJKO0FBQUEsd0JBUko7QUFBQSxzQkFWSixlQThGRSxxRUFBQywwREFBRDtBQUNFLGVBQU8sRUFBQyw2QkFEVjtBQUVFLGdCQUFRLEVBQUMsc0RBRlg7QUFHRSxZQUFJLGVBQ0Y7QUFBQSxpQ0FDRTtBQUFHLHFCQUFTLEVBQUU2RiwrREFBTSxDQUFDVyxJQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTlGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFnSEQ7O0dBalN1Qm5JLFE7O0tBQUFBLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZXhwZXJpbWVudGF0aW9ucy9hcmRlbm5lcy45NDk0ZTQ0NzFiZGE4MmExYTIwMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVkdWNlciB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgWExTWCBmcm9tIFwieGxzeFwiO1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2xheW91dFwiO1xuaW1wb3J0IEZpbGVIYW5kbGVyIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2ZpbGVIYW5kbGVyXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2Zvb3RlclwiO1xuaW1wb3J0IExvZ2luRm9ybSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9sb2dpbkZvcm1cIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uLy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcblxuaW1wb3J0IHsgYXBwRmV0Y2ggfSBmcm9tIFwiLi4vLi4vLi4vbGliL2FwcEZldGNoXCI7XG5pbXBvcnQgeyBpbml0UmVkdWNlciwgcmVkdWNlckZhY3RvcnkgfSBmcm9tIFwiLi4vLi4vLi4vbGliL3JlZHVjZXJGYWN0b3J5XCI7XG5pbXBvcnQgeyBnZXREYXRlVGltZVN0cmluZywgZ2V0RnJlbmNoRm9ybWF0RGF0ZVN0cmluZywgc3RyaW5nVG9EYXRlIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9kYXRlc1wiO1xuXG5jb25zdCByZWR1Y2VyID0gcmVkdWNlckZhY3RvcnkoXCJFeHDDqXJpbWVudGF0aW9uIEFyZGVubmVzIC0gQ05BRiAtIELDqW7DqWZpY2lhaXJlXCIpO1xuY29uc3QgZGV2TW9kZSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09IFwiZGV2ZWxvcG1lbnRcIjtcbmNvbnN0IG9yZ2FJRCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX09SR0FOSVNBVElPTl9JRF9QUk9EO1xuY29uc3QgUkRWX1NPTElEQVJJVEVTX1VSTCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1JEVl9TT0xJREFSSVRFU19QUk9EX1VSTDtcbmNvbnN0IHVzZXJVcmwgPSBSRFZfU09MSURBUklURVNfVVJMICsgXCIvYXBpL3YxL3VzZXJzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFyZGVubmVzKCkge1xuICBjb25zdCBbZGV2RmlsZSwgc2V0RGV2RmlsZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3J1bnMsIGRpc3BhdGNoUnVuc10gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIFtdLCBpbml0UmVkdWNlcik7XG4gIGNvbnN0IFt1c2Vyc0RhdGEsIHNldFVzZXJzRGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3VzZXJTdGF0dXNDaGVja2VkLCBzZXRVc2VyU3RhdHVzQ2hlY2tlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtmaWxlU2l6ZSwgc2V0RmlsZVNpemVdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtpc0xvZ2dlZCwgc2V0SXNMb2dnZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbdG9rZW4sIHNldFRva2VuXSA9IHVzZVN0YXRlKHtcbiAgICB0b2tlbklkOiBcIlwiLFxuICAgIHVpZDogXCJcIixcbiAgICBjbGllbnQ6IFwiXCIsXG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRldkZpbGUpIHtcbiAgICAgIGhhbmRsZUZpbGUoZGV2RmlsZSk7XG4gICAgfVxuICB9LCBbZGV2RmlsZV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHVzZXJzRGF0YSAmJiB1c2VyU3RhdHVzQ2hlY2tlZCA9PT0gZmFsc2UpIHtcbiAgICAgIHVzZXJzRGF0YS5mb3JFYWNoKCh1c2VyLCB1c2VySW5kZXgpID0+IHtcbiAgICAgICAgaWYgKHVzZXJbXCJJRCBSRFZcIl0gIT0gXCJcIikge1xuICAgICAgICAgIGNoZWNrVXNlckludml0YXRpb25TdGF0dXModXNlcltcIklEIFJEVlwiXSwgdXNlckluZGV4KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBzZXRVc2VyU3RhdHVzQ2hlY2tlZCh0cnVlKTtcbiAgICB9XG4gIH0sIFt1c2Vyc0RhdGFdKTtcblxuICBjb25zdCB3cml0ZUZpbGUgPSAoKSA9PiB7XG4gICAgY29uc3Qgb3V0V29ya2Jvb2sgPSBYTFNYLnV0aWxzLmJvb2tfbmV3KCk7XG4gICAgY29uc3Qgb3V0V29ya3NoZWV0ID0gWExTWC51dGlscy5qc29uX3RvX3NoZWV0KHVzZXJzRGF0YSk7XG4gICAgWExTWC51dGlscy5ib29rX2FwcGVuZF9zaGVldChvdXRXb3JrYm9vaywgb3V0V29ya3NoZWV0LCBcIkRJVkVSR0VOQ0VTXCIpO1xuICAgIC8vIFhMU1gudXRpbHMuYm9va19hcHBlbmRfc2hlZXQob3V0V29ya2Jvb2ssIHhscy5TaGVldHNbeGxzLlNoZWV0TmFtZXNbMV1dLCBcIkdSQVBISVFVRVwiKTtcbiAgICAvLyBYTFNYLnV0aWxzLmJvb2tfYXBwZW5kX3NoZWV0KG91dFdvcmtib29rLCB4bHMuU2hlZXRzW3hscy5TaGVldE5hbWVzWzJdXSwgXCJTZWxlY3Rpb24gQ09BXCIpO1xuICAgIFhMU1gud3JpdGVGaWxlKG91dFdvcmtib29rLCBgYXJkZW5uZXNfcnNhXyR7Z2V0RGF0ZVRpbWVTdHJpbmcobmV3IERhdGUoKSl9Lnhsc3hgKTtcbiAgfTtcblxuICBhc3luYyBmdW5jdGlvbiBnZW5lcmF0ZUludml0YXRpb25VcmwodXNlcklkLCB1c2VySW5kZXgpIHtcbiAgICBjb25zdCBpbnZpdGF0aW9uVXJsID0gdXNlclVybCArIGAvJHt1c2VySWR9L2ludml0ZWA7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXBwRmV0Y2goaW52aXRhdGlvblVybCwgdG9rZW4pO1xuXG4gICAgaWYgKHJlc3VsdC5pbnZpdGF0aW9uX3VybCkge1xuICAgICAgbGV0IG5ld1VzZXJzRGF0YSA9IFsuLi51c2Vyc0RhdGFdO1xuICAgICAgbmV3VXNlcnNEYXRhW3VzZXJJbmRleF1bXCJJbnZpdGF0aW9uXCJdID0gcmVzdWx0Lmludml0YXRpb25fdXJsO1xuICAgICAgbmV3VXNlcnNEYXRhW3VzZXJJbmRleF1bXCJEYXRlIGQnaW52aXRhdGlvblwiXSA9IGdldEZyZW5jaEZvcm1hdERhdGVTdHJpbmcobmV3IERhdGUoKSk7XG4gICAgICBzZXRVc2Vyc0RhdGEobmV3VXNlcnNEYXRhKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBnZXRVc2VyKHVzZXJJZCwgdG9rZW4pIHtcbiAgICBjb25zdCBnZXRVc2VyVXJsID0gdXNlclVybCArIGAvJHt1c2VySWR9YDtcbiAgICByZXR1cm4gYXdhaXQgYXBwRmV0Y2goZ2V0VXNlclVybCwgdG9rZW4pO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gY2hlY2tVc2VySW52aXRhdGlvblN0YXR1cyh1c2VySWQsIHVzZXJJbmRleCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFVzZXIodXNlcklkLCB0b2tlbik7XG5cbiAgICBsZXQgbmV3VXNlcnNEYXRhID0gWy4uLnVzZXJzRGF0YV07XG4gICAgaWYgKHJlc3VsdC51c2VyLmludml0YXRpb25fY3JlYXRlZF9hdCkge1xuICAgICAgbGV0IGludml0YXRpb25fZGF0ZSA9IHJlc3VsdC51c2VyLmludml0YXRpb25fY3JlYXRlZF9hdCAvLyBEYXRlIGF1IGZvcm1hdCA6IDIwMjEtMDQtMTUgMTQ6NTM6NTYgKzAyMDBcbiAgICAgICAgLnN1YnN0cmluZygwLCAxMCk7IC8vIFLDqWN1cMOpcmVyIGxlcyAxMCBwcmVtaWVycyBjaGlmZnJlcyAobGEgZGF0ZSlcbiAgICAgIGludml0YXRpb25fZGF0ZSA9IG5ldyBEYXRlKGludml0YXRpb25fZGF0ZSk7IC8vIENyw6llciB1bmUgZGF0ZSBKU1xuICAgICAgbmV3VXNlcnNEYXRhW3VzZXJJbmRleF1bXCJEYXRlIGQnaW52aXRhdGlvblwiXSA9IGdldEZyZW5jaEZvcm1hdERhdGVTdHJpbmcoaW52aXRhdGlvbl9kYXRlKTtcbiAgICB9XG4gICAgaWYgKHJlc3VsdC51c2VyLmludml0YXRpb25fYWNjZXB0ZWRfYXQpIHtcbiAgICAgIGxldCBpbnNjcmlwdGlvbl9kYXRlID0gcmVzdWx0LnVzZXIuaW52aXRhdGlvbl9hY2NlcHRlZF9hdCAvLyBEYXRlIGF1IGZvcm1hdCA6IDIwMjEtMDQtMTUgMTQ6NTM6NTYgKzAyMDBcbiAgICAgICAgLnN1YnN0cmluZygwLCAxMCk7IC8vIFLDqWN1cMOpcmVyIGxlcyAxMCBwcmVtaWVycyBjaGlmZnJlcyAobGEgZGF0ZSlcbiAgICAgIGluc2NyaXB0aW9uX2RhdGUgPSBuZXcgRGF0ZShpbnNjcmlwdGlvbl9kYXRlKTsgLy8gQ3LDqWVyIHVuZSBkYXRlIEpTXG4gICAgICBuZXdVc2Vyc0RhdGFbdXNlckluZGV4XVtcIkRhdGUgZCdpbnNjcmlwdGlvblwiXSA9IGdldEZyZW5jaEZvcm1hdERhdGVTdHJpbmcoaW5zY3JpcHRpb25fZGF0ZSk7XG4gICAgfVxuICAgIHNldFVzZXJzRGF0YShuZXdVc2Vyc0RhdGEpO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVXNlcih1c2VyRGF0YSwgdXNlckluZGV4KSB7XG4gICAgY29uc3QgYWRkcmVzcyA9IHVzZXJEYXRhW1wiQURSRVNTRVwiXSArIFwiIC0gXCIgKyB1c2VyRGF0YVtcIkNPREUgUE9TVEFMXCJdICsgXCIgXCIgKyB1c2VyRGF0YVtcIlZJTExFXCJdO1xuXG4gICAgY29uc3QgdXNlciA9IHtcbiAgICAgIGZpcnN0X25hbWU6IHVzZXJEYXRhW1wiUFJFTk9NXCJdLFxuICAgICAgbGFzdF9uYW1lOiB1c2VyRGF0YVtcIk5PTVwiXSxcbiAgICAgIGVtYWlsOiB1c2VyRGF0YVtcIk1BSUxcIl0sXG4gICAgICBwaG9uZV9udW1iZXI6IHVzZXJEYXRhW1wiVEVMRVBIT05FXCJdLnJlcGxhY2UoL1xccysvZywgXCJcIiksXG4gICAgICBiaXJ0aF9kYXRlOiBzdHJpbmdUb0RhdGUodXNlckRhdGFbXCJEQVRFIERFIE5BSVNTQU5DRVwiXSksXG4gICAgICBhZGRyZXNzOiBhZGRyZXNzLFxuICAgICAgY2Fpc3NlX2FmZmlsaWF0aW9uOiBcImNhZlwiLFxuICAgICAgYWZmaWxpYXRpb25fbnVtYmVyOiB1c2VyRGF0YVtcIk7CsENBRlwiXSxcbiAgICAgIG9yZ2FuaXNhdGlvbl9pZHM6IFtvcmdhSURdLFxuICAgIH07XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBhcHBGZXRjaCh1c2VyVXJsLCB0b2tlbiwgXCJQT1NUXCIsIEpTT04uc3RyaW5naWZ5KHVzZXIpKTtcblxuICAgIGxldCBuZXdVc2Vyc0RhdGEgPSBbLi4udXNlcnNEYXRhXTtcbiAgICBpZiAocmVzdWx0LnVzZXIpIHtcbiAgICAgIG5ld1VzZXJzRGF0YVt1c2VySW5kZXhdW1wiSUQgUkRWXCJdID0gcmVzdWx0LnVzZXIuaWQ7XG4gICAgICBzZXRVc2Vyc0RhdGEobmV3VXNlcnNEYXRhKTtcbiAgICAgIGdlbmVyYXRlSW52aXRhdGlvblVybChyZXN1bHQudXNlci5pZCwgdXNlckluZGV4KTtcbiAgICB9IGVsc2UgaWYgKHJlc3VsdC5lcnJvcnMgJiYgcmVzdWx0LmVycm9ycy5lbWFpbCAmJiByZXN1bHQuZXJyb3JzLmVtYWlsWzBdLmVycm9yID09PSBcInRha2VuXCIpIHtcbiAgICAgIG5ld1VzZXJzRGF0YVt1c2VySW5kZXhdW1wiSUQgUkRWXCJdID0gcmVzdWx0LmVycm9ycy5lbWFpbFswXS5pZDtcbiAgICAgIHNldFVzZXJzRGF0YShuZXdVc2Vyc0RhdGEpO1xuICAgICAgY2hlY2tVc2VySW52aXRhdGlvblN0YXR1cyhyZXN1bHQuZXJyb3JzLmVtYWlsWzBdLmlkLCB1c2VySW5kZXgpO1xuICAgICAgYWxlcnQoXCJVbiBjb21wdGUgYXNzb2Npw6kgw6AgY2V0IGVtYWlsIGV4aXN0ZSBkw6lqw6BcIik7XG4gICAgfSBlbHNlIGlmIChyZXN1bHQuZXJyb3JzICYmIHJlc3VsdC5lcnJvcnMuZW1haWwgJiYgcmVzdWx0LmVycm9ycy5lbWFpbFswXS5lcnJvciA9PT0gXCJpbnZhbGlkXCIpIHtcbiAgICAgIGFsZXJ0KFwiTCdhZHJlc3NlIG1haWwgbidlc3QgcGFzIHZhbGlkZVwiKTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgcmVzdWx0LmVycm9ycyAmJlxuICAgICAgcmVzdWx0LmVycm9ycy5maXJzdF9uYW1lICYmXG4gICAgICByZXN1bHQuZXJyb3JzLmZpcnN0X25hbWVbMF0uZXJyb3IgPT09IFwiZMOpasOgIHV0aWxpc8OpXCJcbiAgICApIHtcbiAgICAgIGFsZXJ0KFxuICAgICAgICBcIkxhIGNyw6lhdGlvbiBkdSBjb21wdGUgYSDDqWNob3XDqS4gTCd1dGlsaXNhdGV1ciBzZW1ibGUgZXhpc3RlciBtYWlzIG4nYSBwdSDDqnRyZSByw6ljdXDDqXLDqS5cIlxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKHJlc3VsdC5lcnJvcnMgJiYgcmVzdWx0LmVycm9yc1swXSAmJiByZXN1bHQuZXJyb3JzWzBdLmJhc2UgPT09IFwiZm9yYmlkZGVuXCIpIHtcbiAgICAgIGFsZXJ0KFwiVm90cmUgY29tcHRlIGFnZW50IFJEVi1Tb2xpZGFyaXTDqXMgbmUgdm91cyBwZXJtZXQgcGFzIGQnZWZmZWN0dWVyIGNldHRlIGFjdGlvbi5cIik7XG4gICAgfSBlbHNlIGlmIChyZXN1bHQuZXJyb3JzICYmIHJlc3VsdC5lcnJvcnNbMF0pIHtcbiAgICAgIGFsZXJ0KHJlc3VsdC5lcnJvcnNbMF0pO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUxvZ2luID0gKHRva2VuSWQsIHVpZCwgY2xpZW50KSA9PiB7XG4gICAgc2V0VG9rZW4oeyAuLi50b2tlbiwgdG9rZW5JZDogdG9rZW5JZCwgdWlkOiB1aWQsIGNsaWVudDogY2xpZW50IH0pO1xuICAgIHNldElzTG9nZ2VkKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUZpbGUgPSBhc3luYyBmaWxlID0+IHtcbiAgICBpZiAoZGV2TW9kZSAmJiBmaWxlICE9IGRldkZpbGUpIHtcbiAgICAgIHNldERldkZpbGUoZmlsZSk7XG4gICAgfVxuICAgIHNldEZpbGVTaXplKGZpbGUuc2l6ZSk7XG4gICAgY29uc3Qgc3RhcnRfdGltZSA9IG5ldyBEYXRlKCk7XG5cbiAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBjb25zdCBmaWxlRGF0YSA9IG5ldyBVaW50OEFycmF5KGV2ZW50LnRhcmdldC5yZXN1bHQpO1xuICAgICAgICBjb25zdCB4bHMgPSBYTFNYLnJlYWQoZmlsZURhdGEsIHsgdHlwZTogXCJhcnJheVwiLCBjZWxsRGF0ZXM6IHRydWUsIGRhdGVORjogXCJkZC9tbS95eXl5XCIgfSk7XG4gICAgICAgIGNvbnN0IHdvcmtzaGVldCA9IHhscy5TaGVldHNbeGxzLlNoZWV0TmFtZXNbMF1dO1xuICAgICAgICAvLyBMaW1pdGVyIGxhIGNhcHR1cmUgYXV4IGNvbG9ubmVzIEEtVlxuICAgICAgICBjb25zdCByYW5nZSA9IFhMU1gudXRpbHMuZGVjb2RlX3JhbmdlKHdvcmtzaGVldFtcIiFyZWZcIl0pO1xuICAgICAgICByYW5nZS5zLmMgPSAwOyAvLyAwID09IFhMU1gudXRpbHMuZGVjb2RlX2NvbChcIkFcIilcbiAgICAgICAgcmFuZ2UuZS5jID0gMjE7IC8vIDE5ID09IFhMU1gudXRpbHMuZGVjb2RlX2NvbChcIlZcIilcbiAgICAgICAgY29uc3QgbmV3X3JhbmdlID0gWExTWC51dGlscy5lbmNvZGVfcmFuZ2UocmFuZ2UpO1xuXG4gICAgICAgIGxldCBqc29uRGF0YSA9IFhMU1gudXRpbHMuc2hlZXRfdG9fanNvbih3b3Jrc2hlZXQsIHtcbiAgICAgICAgICBibGFua3Jvd3M6IGZhbHNlLFxuICAgICAgICAgIHJhdzogZmFsc2UsXG4gICAgICAgICAgZGVmdmFsOiBcIlwiLFxuICAgICAgICAgIHJhbmdlOiBuZXdfcmFuZ2UsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHdlIHJlbW92ZSBsaW5lIGJyZWFrcyBmcm9tIGFsbCBrZXlzXG4gICAgICAgIGpzb25EYXRhID0ganNvbkRhdGEubWFwKHVzZXJEYXRhID0+IHtcbiAgICAgICAgICByZXR1cm4gWy4uLk9iamVjdC5rZXlzKHVzZXJEYXRhKV0ucmVkdWNlKChyZXMsIGtleSkgPT4ge1xuICAgICAgICAgICAgcmVzW2tleS5yZXBsYWNlKC9bXFxuXFxyXSsvZywgXCIgXCIpXSA9IHVzZXJEYXRhW2tleV07XG4gICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICAgIH0sIHt9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAganNvbkRhdGEgPT0gbnVsbCAmJiBzZXRJc1BlbmRpbmcoZmFsc2UpO1xuICAgICAgICBzZXRVc2VyU3RhdHVzQ2hlY2tlZChmYWxzZSk7XG4gICAgICAgIHNldFVzZXJzRGF0YShqc29uRGF0YSk7XG4gICAgICAgIGRpc3BhdGNoUnVucyh7XG4gICAgICAgICAgdHlwZTogXCJhcHBlbmRcIixcbiAgICAgICAgICBpdGVtOiB7XG4gICAgICAgICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxOSksXG4gICAgICAgICAgICBkdXJhdGlvbjogbmV3IERhdGUoKSAtIHN0YXJ0X3RpbWUsXG4gICAgICAgICAgICBmaWxlbmFtZTogZmlsZS5uYW1lLFxuICAgICAgICAgICAgZmlsZVNpemU6IGZpbGUuc2l6ZSxcbiAgICAgICAgICAgIGZpbGVMaW5lczoganNvbkRhdGEubGVuZ3RoLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9O1xuICAgICAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGZpbGUpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dCBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9IGhhbmRsZUZpbGU9e2hhbmRsZUZpbGV9PlxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+RXhww6lyaW1lbnRhdGlvbiBBcmRlbm5lczwvaDE+XG5cbiAgICAgICAgeyFpc0xvZ2dlZCAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jcmVhdGV9PlxuICAgICAgICAgICAgPExvZ2luRm9ybSBoYW5kbGVMb2dpbj17aGFuZGxlTG9naW59IHJkdlVybD17UkRWX1NPTElEQVJJVEVTX1VSTH0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cblxuICAgICAgICB7aXNMb2dnZWQgJiYgKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8RmlsZUhhbmRsZXJcbiAgICAgICAgICAgICAgaGFuZGxlRmlsZT17aGFuZGxlRmlsZX1cbiAgICAgICAgICAgICAgZmlsZVNpemU9e2ZpbGVTaXplfVxuICAgICAgICAgICAgICBwZW5kaW5nTWVzc2FnZT17XCJSw6ljdXDDqXJhdGlvbiBkZXMgaW5mb3JtYXRpb25zLCBtZXJjaSBkZSBwYXRpZW50ZXJcIn1cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIHt1c2Vyc0RhdGEgJiYgKFxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5zdWJ0aXRsZX0+QsOpbsOpZmljaWFpcmVzIFJTQTwvaDI+XG5cbiAgICAgICAgICAgICAgICB7dXNlcnNEYXRhLmxlbmd0aCA9PSAwICYmIChcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5BdWN1biBiw6luw6lmaWNpYWlyZSBkYW5zIGxlIGZpY2hpZXI8L3A+XG4gICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgIHt1c2Vyc0RhdGEubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5EYXRlPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+Tm9tPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHJvd1NwYW49XCIyXCI+UHLDqW5vbTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPk1haWw8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggcm93U3Bhbj1cIjJcIj5Uw6lsw6lwaG9uZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCByb3dTcGFuPVwiMlwiPklEIFJEVi1Tb2xpZGFyaXTDqXM8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj1cIjNcIj5JbnZpdGF0aW9uPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjb2xTcGFuPVwiMVwiPkRlcm5pZXIgZW52b2kgbGU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj1cIjFcIj5EYXRlIGQnaW5zY3JpcHRpb248L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj1cIjFcIj5BY3Rpb248L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiByZXZlcnNlIGVzdCB1dGlsaXPDqSBwb3VyIHF1ZSBsZXMgdXRpbGlzYXRldXJzIGxlcyBwbHVzIHLDqWNlbnRzIGFwcGFyYWlzc2VudCBlbiBoYXV0ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAge1suLi51c2Vyc0RhdGFdLnJldmVyc2UoKS5tYXAoKHVzZXIsIGluZGV4KSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7dXNlcltcIkRBVEVcIl0gIT09IFwiXCIgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9Pnt1c2VyW1wiREFURVwiXX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+e3VzZXJbXCJOT01cIl19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9Pnt1c2VyW1wiUFJFTk9NXCJdfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT57dXNlcltcIk1BSUxcIl19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9Pnt1c2VyW1wiVEVMRVBIT05FXCJdfTwvdGQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyW1wiSUQgUkRWXCJdID09PSBcIlwiICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBjcmVhdGVVc2VyKHVzZXIsIGluZGV4KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDcsOpZXIgdW4gY29tcHRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3VzZXJbXCJJRCBSRFZcIl0gIT09IFwiXCIgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT57dXNlcltcIklEIFJEVlwiXX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9Pnt1c2VyW1wiRGF0ZSBkJ2ludml0YXRpb25cIl19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9Pnt1c2VyW1wiRGF0ZSBkJ2luc2NyaXB0aW9uXCJdfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXNlcltcIklEIFJEVlwiXSAhPT0gXCJcIiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGdlbmVyYXRlSW52aXRhdGlvblVybCh1c2VyW1wiSUQgUkRWXCJdLCBpbmRleCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3VzZXJbXCJEYXRlIGQnaW52aXRhdGlvblwiXSAhPT0gXCJcIiAmJiBcIlJlZ8OpbsOpcmVyIGludml0YXRpb25cIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyW1wiRGF0ZSBkJ2ludml0YXRpb25cIl0gPT09IFwiXCIgJiYgXCJHw6luw6lyZXIgaW52aXRhdGlvblwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyW1wiSUQgUkRWXCJdID09PSBcIlwiICYmIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9PjwvdGQ+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259IG9uQ2xpY2s9e3dyaXRlRmlsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgUmVnw6luw6lyZXIgZmljaGllclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cblxuICAgICAgICA8Rm9vdGVyXG4gICAgICAgICAgc3ViamVjdD1cIkV4cMOpcmltZW50YXRpb24gQXJkZW5uZXNcIlxuICAgICAgICAgIHBvdXJxdW9pPVwiUXVlbCBlc3QgbCdvYmplY3RpZiBkZSBjZXR0ZSBleHDDqXJpbWVudGF0aW9uJm5ic3A7P1wiXG4gICAgICAgICAgdGV4dD17XG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5cbiAgICAgICAgICAgICAgICBGYWNpbGl0ZXIgbGUgdHJhdmFpbCBkZXMgYWdlbnRzIGR1IGTDqXBhcnRlbWVudCBldCB0ZXN0ZXIgbCd1dGlsaXNhdGlvbiBkZVxuICAgICAgICAgICAgICAgIGwnYXBwbGljYXRpb24gUkRWLVNvbGlkYXJpdMOpcyBwb3VyIGFjY8OpbMOpcmVyIGxhIHByaXNlIGR1IHByZW1pZXIgcmVuZGV6LXZvdXNcbiAgICAgICAgICAgICAgICBkJ29yaWVudGF0aW9uLlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICB9XG4gICAgICAgIC8+XG4gICAgICA8L21haW4+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9