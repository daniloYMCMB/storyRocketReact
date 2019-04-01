webpackHotUpdate("static/development/pages/search.js",{

/***/ "./components/SearchGenres.js":
/*!************************************!*\
  !*** ./components/SearchGenres.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _SearchTitle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SearchTitle */ "./components/SearchTitle.js");







var _jsxFileName = "/Users/daniloviacavavizarreta/www/storyrocketreact/components/SearchGenres.js";



var SearchGenres =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(SearchGenres, _Component);

  function SearchGenres() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SearchGenres);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SearchGenres)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleMenu", function (e) {
      var genre = document.getElementById("searchGenresList");
      genre.classList.toggle("active");
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleClear", function (e) {
      var genre = document.getElementsByClassName("styled-checkbox");

      for (var i = 0; i < genre.length; i++) {
        if (genre[i].checked) {
          genre[i].checked = false;
        }
      }

      var clear = document.getElementById("clearGenre");
      clear.classList.remove('active');
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleChangeGenre", function (e) {
      var clear = document.getElementById("clearGenre");

      if (e.target.value) {
        clear.classList.add('active');
      } else {
        clear.classList.remove('active');
      }
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SearchGenres, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "searchGenres",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_SearchTitle__WEBPACK_IMPORTED_MODULE_8__["default"], {
        title: "Genres",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "searchGenres-list",
        id: "searchGenresList",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        onChange: this.handleChangeGenre,
        className: "styled-checkbox",
        id: "box1",
        type: "checkbox",
        value: "value1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        for: "box1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "Action")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        onChange: this.handleChangeGenre,
        className: "styled-checkbox",
        id: "box2",
        type: "checkbox",
        value: "value1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        for: "box2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "Biography")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        onChange: this.handleChangeGenre,
        className: "styled-checkbox",
        id: "box3",
        type: "checkbox",
        value: "value1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        for: "box3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "Documentary")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        onChange: this.handleChangeGenre,
        className: "styled-checkbox",
        id: "box8",
        type: "checkbox",
        value: "value1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        for: "box8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "Thriller")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        onChange: this.handleChangeGenre,
        className: "styled-checkbox",
        id: "box9",
        type: "checkbox",
        value: "value1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        for: "box9",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "Faith")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        onChange: this.handleChangeGenre,
        className: "styled-checkbox",
        id: "box10",
        type: "checkbox",
        value: "value1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        for: "box10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "Crime"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        onChange: this.handleChangeGenre,
        className: "styled-checkbox",
        id: "box4",
        type: "checkbox",
        value: "value",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        for: "box4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, "Graphic Novels")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        onChange: this.handleChangeGenre,
        className: "styled-checkbox",
        id: "box5",
        type: "checkbox",
        value: "value",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        for: "box5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, "Film Noir")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        onChange: this.handleChangeGenre,
        className: "styled-checkbox",
        id: "box6",
        type: "checkbox",
        value: "value1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        for: "box6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, "Romance")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        onChange: this.handleChangeGenre,
        className: "styled-checkbox",
        id: "box11",
        type: "checkbox",
        value: "value",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        for: "box11",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, "War")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        onChange: this.handleChangeGenre,
        className: "styled-checkbox",
        id: "box12",
        type: "checkbox",
        value: "value",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        for: "box12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, "Spy")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        onChange: this.handleChangeGenre,
        className: "styled-checkbox",
        id: "box13",
        type: "checkbox",
        value: "value1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        for: "box13",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, "Mafia")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "clearGenre",
        id: "clearGenre",
        onClick: this.handleClear,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, "\u2715 "), " Clear selection "), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("style", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, "\n\t\t\t\t.searchGenres {\n\t\t\t\t\tfont-family: sans-serif;\n\t\t\t\t\tbackground: white;\n\t\t\t\t\tborder-radius: 5px;\n\t\t\t\t\t  margin-bottom: 10px;\n\t\t\t\t\t  position: relative;\n\t\t\t\t\t  text-align: center;\n\t\t\t\t}\n\n\t\t\t\t.searchGenres-list {\n\t\t\t\t  display: flex;\n\t\t\t\t  justify-content: space-around;\n\t\t\t\t  align-items: center;\n\t\t\t\t  display: none;\n\t\t\t\t}\n\n\t\t\t\t.searchGenresMenu {\n\t\t\t\t  position: absolute;\n\t\t\t\t  top: 23px;\n\t\t\t\t  right: 20px;\n\t\t\t\t  cursor: pointer;\n\t\t\t\t}\n\n\t\t\t\t.searchGenresMenu img {\n\t\t\t\t  width: 15px;\n\t\t\t\t}\n\n\t\t\t\t.searchGenres-list.active {\n\t\t\t\t  display: flex;\n\t\t\t\t}\n\t\t\t\t.searchGenres-list ul{\n\t\t\t\t  \n\t\t\t\t}\n\t\t\t\t.searchGenres-list li{\n\t\t\t\t  text-align: left;\n\t\t\t\t  margin-bottom: 10px;\n\t\t\t\t}\n\n\t\t\t\t.styled-checkbox {\n\t\t\t\t  position: absolute;\n\t\t\t\t  opacity: 0;\n\t\t\t\t}\n\t\t\t\t.styled-checkbox + label {\n\t\t\t\t  position: relative;\n\t\t\t\t  cursor: pointer;\n\t\t\t\t  padding: 0;\n\t\t\t\t}\n\t\t\t\t.styled-checkbox + label:before {\n\t\t\t\t  content: '';\n\t\t\t\t  margin-right: 10px;\n\t\t\t\t  display: inline-block;\n\t\t\t\t  vertical-align: text-top;\n\t\t\t\t  width: 15px;\n\t\t\t\t  height: 15px;\n\t\t\t\t  background: white;\n\t\t\t\t  border: 2px solid #160e26;\n\t\t\t\t  border-radius: 4px;\n\t\t\t\t}\n\t\t\t\t.styled-checkbox:hover + label:before {\n\t\t\t\t  background: white;\n\t\t\t\t}\n\t\t\t\t.styled-checkbox:focus + label:before {\n\t\t\t\t  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.12);\n\t\t\t\t}\n\t\t\t\t.styled-checkbox:checked + label:before {\n\t\t\t\t  background: #1c2d4c;\n\t\t\t\t}\n\t\t\t\t.styled-checkbox:disabled + label {\n\t\t\t\t  color: #b8b8b8;\n\t\t\t\t  cursor: auto;\n\t\t\t\t}\n\t\t\t\t.styled-checkbox:disabled + label:before {\n\t\t\t\t  box-shadow: none;\n\t\t\t\t  background: #ddd;\n\t\t\t\t}\n\t\t\t\t.styled-checkbox:checked + label:after {\n\t\t\t\t  content: '';\n\t\t\t\t  position: absolute;\n\t\t\t\t  left: 4px;\n\t\t\t\t  top: 8px;\n\t\t\t\t  background: orange;\n\t\t\t\t  width: 2px;\n\t\t\t\t  height: 2px;\n\t\t\t\t  box-shadow: 2px 0 0 orange, 4px 0 0 orange, 4px -2px 0 orange, 4px -4px 0 orange, 4px -6px 0 orange, 4px -8px 0 orange;\n\t\t\t\t  transform: rotate(45deg);\n\t\t\t\t}\n\n\t\t\t\t.clearGenre {\n\t\t\t\t  margin-top: 20px;\n\t\t\t\t  display: none;\n\t\t\t\t  text-align: center;\n\t\t\t\t  cursor: pointer;\n\t\t\t\t  transition: .25s linear;\n\t\t\t\t  padding: 5px;\n\t\t\t\t  border: 1px solid transparent;\n\t\t\t\t  font-weight: 100;\n\t\t\t\t}\n\n\t\t          .clearGenre:hover {\n\t\t            background: #1c2d4c;\n\t\t            border-radius: 4px;\n\t\t            color: orange;\n\t\t            border: 1px solid orange;\n\t\t          }\n\n\t\t\t\t.clearGenre.active {\n\t\t\t\t  display: inline-block;\n\t\t\t\t}\n\t\t\t"));
    }
  }]);

  return SearchGenres;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SearchGenres);

/***/ }),

/***/ "./components/SearchTitle.js":
/*!***********************************!*\
  !*** ./components/SearchTitle.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);







var _jsxFileName = "/Users/daniloviacavavizarreta/www/storyrocketreact/components/SearchTitle.js";



var SearchTitle =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(SearchTitle, _Component);

  function SearchTitle() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SearchTitle);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SearchTitle)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleMenu", function (e) {
      var genre = document.getElementById("searchGenresList");
      genre.classList.toggle("active");
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SearchTitle, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        onClick: this.handleMenu,
        className: "jsx-1149516171" + " " + "SearchTitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
        className: "jsx-1149516171" + " " + "SearchTitle-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, this.props.title), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1149516171" + " " + "searchGenresMenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "/static/img/arrowUp.svg",
        alt: "",
        className: "jsx-1149516171",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1149516171",
        __self: this
      }, ".SearchTitle.jsx-1149516171{position:relative;padding:10px;cursor:pointer;margin-bottom:20px;}.SearchTitle-text.jsx-1149516171{text-align:left;font-size:18px;font-weight:bold;margin-bottom:15px;margin-top:10px;margin-left:10px;text-align:left;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pbG92aWFjYXZhdml6YXJyZXRhL3d3dy9zdG9yeXJvY2tldHJlYWN0L2NvbXBvbmVudHMvU2VhcmNoVGl0bGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUJzQixBQUd1QixBQU9GLGdCQUNELEVBUEYsYUFDRSxBQU9FLGVBTkUsRUFPQSxpQkFOcEIsRUFPaUIsZ0JBQ0MsaUJBQ0QsZ0JBQ2pCIiwiZmlsZSI6Ii9Vc2Vycy9kYW5pbG92aWFjYXZhdml6YXJyZXRhL3d3dy9zdG9yeXJvY2tldHJlYWN0L2NvbXBvbmVudHMvU2VhcmNoVGl0bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBTZWFyY2hUaXRsZSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgaGFuZGxlTWVudSA9IChlKSA9PiB7XG4gICAgY29uc3QgZ2VucmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaEdlbnJlc0xpc3RcIilcbiAgICBnZW5yZS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpXG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIlNlYXJjaFRpdGxlXCIgb25DbGljaz17dGhpcy5oYW5kbGVNZW51fSA+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIlNlYXJjaFRpdGxlLXRleHRcIj5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLnRpdGxlfVxuICAgICAgICAgIDwvaDI+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaEdlbnJlc01lbnVcIj5cblx0XHRcdDxpbWcgc3JjPVwiL3N0YXRpYy9pbWcvYXJyb3dVcC5zdmdcIiBhbHQ9XCJcIi8+XG5cdFx0ICA8L2Rpdj5cblxuICAgICAgICAgIDxzdHlsZSBqc3g+e2Bcblx0XHRcdC5TZWFyY2hUaXRsZSB7XG5cdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0cGFkZGluZzogMTBweDtcblx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiAyMHB4O1xuXHRcdFx0fVxuXG5cdFx0XHQuU2VhcmNoVGl0bGUtdGV4dCB7XG5cdFx0XHRcdHRleHQtYWxpZ246IGxlZnQ7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMThweDtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IDE1cHg7XG5cdFx0XHRcdG1hcmdpbi10b3A6IDEwcHg7XG5cdFx0XHRcdG1hcmdpbi1sZWZ0OiAxMHB4O1xuXHRcdFx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xuXHRcdFx0fVxuXG5cdFx0YH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaFRpdGxlO1xuIl19 */\n/*@ sourceURL=/Users/daniloviacavavizarreta/www/storyrocketreact/components/SearchTitle.js */"));
    }
  }]);

  return SearchTitle;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SearchTitle);

/***/ })

})
//# sourceMappingURL=search.js.82bb1e88444bbdb21a17.hot-update.js.map