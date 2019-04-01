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
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "SearchTitle",
        onClick: this.handleMenu,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        className: "SearchTitle-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, this.props.title)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        onClick: this.handleMenu,
        className: "searchGenresMenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "/static/img/arrowUp.svg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "searchGenres-list",
        id: "searchGenresList",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
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
          lineNumber: 56
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        for: "box1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "Action")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
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
          lineNumber: 60
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        for: "box2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, "Biography")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
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
          lineNumber: 64
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        for: "box3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "Documentary")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
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
          lineNumber: 68
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        for: "box8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, "Thriller")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
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
          lineNumber: 72
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        for: "box9",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "Faith")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
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
          lineNumber: 76
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        for: "box10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, "Crime"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
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
          lineNumber: 82
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        for: "box4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, "Graphic Novels")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
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
          lineNumber: 86
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        for: "box5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, "Film Noir")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
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
          lineNumber: 90
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        for: "box6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, "Romance")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
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
          lineNumber: 94
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        for: "box11",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, "War")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
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
          lineNumber: 98
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        for: "box12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, "Spy")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
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
          lineNumber: 102
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        for: "box13",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, "Mafia")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "clearGenre",
        id: "clearGenre",
        onClick: this.handleClear,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, "\u2715  "), " Clear selection "), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("style", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, "\n\t\t\t\t.SearchTitle {\n\t\t\t\t\tposition: relative;\n\t\t\t\t\tpadding: 10px;\n\t\t\t\t\tcursor: pointer;\n\t\t\t\t\tmargin-bottom: 20px;\n\t\t\t\t}\n\n\t\t\t\t.SearchTitle:hover .searchGenresMenu,\n\t\t\t\t.SearchTitle.active .searchGenresMenu{\n\t\t\t\t\ttransform: rotate(180deg);\n\t\t\t\t}\n\n\t\t\t\t.SearchTitle-text {\n\t\t\t\t\ttext-align: left;\n\t\t\t\t\tfont-size: 18px;\n\t\t\t\t\tfont-weight: bold;\n\t\t\t\t\tmargin-bottom: 15px;\n\t\t\t\t\tmargin-top: 10px;\n\t\t\t\t\tmargin-left: 10px;\n\t\t\t\t\ttext-align: left;\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\t.searchGenres {\n\t\t\t\t\tfont-family: sans-serif;\n\t\t\t\t\tbackground: white;\n\t\t\t\t\tborder-radius: 5px;\n\t\t\t\t  margin-bottom: 10px;\n\t\t\t\t  position: relative;\n\t\t\t\t}\n\n\t\t\t\t.searchGenres-list {\n\t\t\t\t  display: flex;\n\t\t\t\t  justify-content: space-around;\n\t\t\t\t  align-items: center;\n\t\t\t\t  display: none;\n\t\t\t\t  padding: 10px 0;\n\t\t\t\t}\n\n\t\t\t\t.searchGenresMenu {\n\t\t\t\t  position: absolute;\n\t\t\t\t  top: 23px;\n\t\t\t\t  right: 20px;\n\t\t\t\t  cursor: pointer;\n\t\t\t\t}\n\n\t\t\t\t.searchGenresMenu img {\n\t\t\t\t  width: 15px;\n\t\t\t\t}\n\n\t\t\t\t.searchGenres-list.active {\n\t\t\t\t  display: flex;\n\t\t\t\t}\n\t\t\t\t.searchGenres-list ul{\n\t\t\t\t  \n\t\t\t\t}\n\t\t\t\t.searchGenres-list li{\n\t\t\t\t  text-align: left;\n\t\t\t\t  margin-bottom: 10px;\n\t\t\t\t}\n\n\t\t\t\t.styled-checkbox {\n\t\t\t\t  position: absolute;\n\t\t\t\t  opacity: 0;\n\t\t\t\t}\n\t\t\t\t.styled-checkbox + label {\n\t\t\t\t  position: relative;\n\t\t\t\t  cursor: pointer;\n\t\t\t\t  padding: 0;\n\t\t\t\t}\n\t\t\t\t.styled-checkbox + label:before {\n\t\t\t\t  content: '';\n\t\t\t\t  margin-right: 10px;\n\t\t\t\t  display: inline-block;\n\t\t\t\t  vertical-align: text-top;\n\t\t\t\t  width: 15px;\n\t\t\t\t  height: 15px;\n\t\t\t\t  background: white;\n\t\t\t\t  border: 2px solid #160e26;\n\t\t\t\t  border-radius: 4px;\n\t\t\t\t}\n\t\t\t\t.styled-checkbox:hover + label:before {\n\t\t\t\t  background: white;\n\t\t\t\t}\n\t\t\t\t.styled-checkbox:focus + label:before {\n\t\t\t\t  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.12);\n\t\t\t\t}\n\t\t\t\t.styled-checkbox:checked + label:before {\n\t\t\t\t  background: #1c2d4c;\n\t\t\t\t}\n\t\t\t\t.styled-checkbox:disabled + label {\n\t\t\t\t  color: #b8b8b8;\n\t\t\t\t  cursor: auto;\n\t\t\t\t}\n\t\t\t\t.styled-checkbox:disabled + label:before {\n\t\t\t\t  box-shadow: none;\n\t\t\t\t  background: #ddd;\n\t\t\t\t}\n\t\t\t\t.styled-checkbox:checked + label:after {\n\t\t\t\t  content: '';\n\t\t\t\t  position: absolute;\n\t\t\t\t  left: 4px;\n\t\t\t\t  top: 8px;\n\t\t\t\t  background: orange;\n\t\t\t\t  width: 2px;\n\t\t\t\t  height: 2px;\n\t\t\t\t  box-shadow: 2px 0 0 orange, 4px 0 0 orange, 4px -2px 0 orange, 4px -4px 0 orange, 4px -6px 0 orange, 4px -8px 0 orange;\n\t\t\t\t  transform: rotate(45deg);\n\t\t\t\t}\n\n\t\t\t\t.clearGenre {\n\t\t\t\t  margin-top: 20px;\n\t\t\t\t  display: none;\n\t\t\t\t  text-align: center;\n\t\t\t\t  cursor: pointer;\n\t\t\t\t  transition: .25s linear;\n\t\t\t\t  padding: 5px;\n\t\t\t\t  border: 1px solid transparent;\n\t\t\t\t  font-weight: 100;\n\t\t\t\t}\n\n\t\t          .clearGenre:hover {\n\t\t            background: #1c2d4c;\n\t\t            border-radius: 4px;\n\t\t            color: orange;\n\t\t            border: 1px solid orange;\n\t\t          }\n\n\t\t\t\t.clearGenre.active {\n\t\t\t\t  display: inline-block;\n\t\t\t\t}\n\t\t\t"));
    }
  }]);

  return SearchGenres;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SearchGenres);

/***/ })

})
//# sourceMappingURL=search.js.0634d4ebe159574d5773.hot-update.js.map