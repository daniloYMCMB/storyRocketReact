webpackHotUpdate("static/development/pages/search.js",{

/***/ "./components/SearchEra.js":
/*!*********************************!*\
  !*** ./components/SearchEra.js ***!
  \*********************************/
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







var _jsxFileName = "/Users/daniloviacavavizarreta/www/storyrocketreact/components/SearchEra.js";


var SearchEra =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(SearchEra, _Component);

  function SearchEra() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SearchEra);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SearchEra)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleMenuEra", function (e) {
      var era = document.getElementById("searchEraMenu-list");
      era.classList.toggle("active");
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleClear", function (e) {
      var genre = document.getElementsByClassName("styled-checkboxEra");

      for (var i = 0; i < genre.length; i++) {
        if (genre[i].checked) {
          genre[i].checked = false;
        }
      }

      var clear = document.getElementById("clearEra");
      clear.classList.remove('active');
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleChangeEra", function (e) {
      var clear = document.getElementById("clearEra");

      if (e.target.value) {
        clear.classList.add('active');
      } else {
        clear.classList.remove('active');
      }
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SearchEra, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "SearchEra",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "titleSearchMenu",
        id: "titleSearchGenre",
        onClick: this.handleMenuEra,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "SearchTitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        className: "SearchTitle-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, "Era")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "searchEraMenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "/static/img/arrowUp.svg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "searchEraMenu-container",
        id: "searchEraMenu-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "searchEraMenu-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        onChange: this.handleChangeEra,
        className: "styled-checkboxEra",
        id: "era1",
        type: "checkbox",
        value: "value1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        for: "era1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, "Antiguo")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        onChange: this.handleChangeEra,
        className: "styled-checkboxEra",
        id: "era2",
        type: "checkbox",
        value: "value1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        for: "era2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "Contempor\xE1neo"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        onChange: this.handleChangeEra,
        className: "styled-checkboxEra",
        id: "era5",
        type: "checkbox",
        value: "value",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        for: "era5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "Actual")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        onChange: this.handleChangeEra,
        className: "styled-checkboxEra",
        id: "era6",
        type: "checkbox",
        value: "value",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        for: "era6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "Tendencia")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "clearEra",
        id: "clearEra",
        onClick: this.handleClear,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "\u2715 "), " Clear selection ")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("style", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, "\n            .titleSearchGenre {\n              cursor: pointer;\n            }\n\n            .titleSearchMenu:hover .searchEraMenu,\n            .titleSearchMenu.active .searchEraMenu{\n              transform: rotate(180deg);\n            }\n\n            .SearchEra {\n              background: white;\n              box-sizing: border-box;\n              font-family: sans-serif;\n              border-radius: 5px;\n              margin-bottom: 10px;\n              position: relative;\n              text-align: center;\n            }\n\n            .searchEraMenu {\n              position: absolute;\n              top: 23px;\n              right: 20px;\n              cursor: pointer;\n              transition: .25s linear;\n            }\n\n            .searchEraMenu img {\n              width: 15px;\n            }\n\n            .searchEraMenu-container {\n              display: none;\n            }\n\n            .searchEraMenu-container.active {\n              display: block;\n            }\n      \n            .searchEraMenu-list {\n              display: flex;\n              justify-content: space-between;\n              align-items: center;\n              padding: 10px 25px 15px 25px;\n            }\n            .searchEraMenu-list ul{\n              \n            }\n            .searchEraMenu-list li{\n              text-align: left;\n              margin-bottom: 10px;\n            }\n\n            .styled-checkboxEra {\n              position: absolute;\n              opacity: 0;\n            }\n            .styled-checkboxEra + label {\n              position: relative;\n              cursor: pointer;\n              padding: 0;\n            }\n            .styled-checkboxEra + label:before {\n              content: '';\n              margin-right: 10px;\n              display: inline-block;\n              vertical-align: text-top;\n              width: 15px;\n              height: 15px;\n              background: white;\n              border: 2px solid #160e26;\n              border-radius: 4px;\n            }\n            .styled-checkboxEra:hover + label:before {\n              background: white;\n            }\n            .styled-checkboxEra:focus + label:before {\n              box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.12);\n            }\n            .styled-checkboxEra:checked + label:before {\n              background: #1c2d4c;\n            }\n            .styled-checkboxEra:disabled + label {\n              color: #b8b8b8;\n              cursor: auto;\n            }\n            .styled-checkboxEra:disabled + label:before {\n              box-shadow: none;\n              background: #ddd;\n            }\n            .styled-checkboxEra:checked + label:after {\n              content: '';\n              position: absolute;\n              left: 4px;\n              top: 8px;\n              background: orange;\n              width: 2px;\n              height: 2px;\n              box-shadow: 2px 0 0 orange, 4px 0 0 orange, 4px -2px 0 orange, 4px -4px 0 orange, 4px -6px 0 orange, 4px -8px 0 orange;\n              -webkit-transform: rotate(45deg);\n                      transform: rotate(45deg);\n            }\n\n            .clearEra {\n              margin-bottom: 10px;\n              display: none;\n              text-align: center;\n              cursor: pointer;\n              transition: .25s linear;\n              padding: 5px;\n              border: 1px solid transparent;\n              font-weight: 100;\n            }\n\n            .clearEra:hover {\n              background: #1c2d4c;\n              border-radius: 4px;\n              color: orange;\n              border: 1px solid orange;\n            }\n\n            .clearEra.active {\n              display: inline-block;\n            }\n\n            @media screen and (max-width: 800px) {\n              .searchEraMenu-list {\n                padding: 10px 10px 15px 10px;\n              }\n            }\n\n          "));
    }
  }]);

  return SearchEra;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SearchEra);

/***/ })

})
//# sourceMappingURL=search.js.fd6099f89a7e36ff83fd.hot-update.js.map