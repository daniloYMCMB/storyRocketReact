webpackHotUpdate("static/development/pages/search.js",{

/***/ "./pages/search.js":
/*!*************************!*\
  !*** ./pages/search.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Search; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_SearchInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/SearchInput */ "./components/SearchInput.js");
/* harmony import */ var _components_SearchViews__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/SearchViews */ "./components/SearchViews.js");
/* harmony import */ var _components_SearchGenres__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/SearchGenres */ "./components/SearchGenres.js");
/* harmony import */ var _components_SearchMaterialType__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/SearchMaterialType */ "./components/SearchMaterialType.js");
/* harmony import */ var _components_SearchIntendedMedium__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/SearchIntendedMedium */ "./components/SearchIntendedMedium.js");
/* harmony import */ var _components_SearchTags__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/SearchTags */ "./components/SearchTags.js");
/* harmony import */ var _components_SearchLanguages__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/SearchLanguages */ "./components/SearchLanguages.js");
/* harmony import */ var _components_SearchLocation__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/SearchLocation */ "./components/SearchLocation.js");
/* harmony import */ var _components_SearchEra__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/SearchEra */ "./components/SearchEra.js");





var _jsxFileName = "/Users/daniloviacavavizarreta/www/storyrocketreact/pages/search.js";












var Search =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Search, _React$Component);

  function Search() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Search);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Search).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Search, [{
    key: "handleMenu",
    value: function handleMenu() {
      var menu = document.getElementById("btnMenu");
      menu.classList.toggle('active');
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
        title: "Search",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "searchContainer df",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "searchSidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "btnMenu",
        id: "btnMenu",
        onClick: this.handleMenu,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_SearchInput__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_SearchViews__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_SearchGenres__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_SearchMaterialType__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_SearchIntendedMedium__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_SearchTags__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_SearchLanguages__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_SearchLocation__WEBPACK_IMPORTED_MODULE_14__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_SearchEra__WEBPACK_IMPORTED_MODULE_15__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "searchContent",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "content"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("style", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "\n\t\t\t\t\t\t.searchContainer {\n\t\t\t\t\t\t\tpadding: 10px;\n\t\t\t\t\t\t\tcolor: white;\n\t\t\t\t\t\t\tmax-width: 1200px;\n\t\t\t\t\t\t\twidth: 95%;\n\t\t\t\t\t\t\tmargin: auto;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t.df {\n\t\t\t\t\t\t\tdisplay: flex;\n\t\t\t\t\t\t\tjustify-content: center;\n\t\t\t\t\t\t\talign-items: stretch;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t.searchSidebar {\n\t\t\t\t\t\t\twidth: 35%;\n\t\t\t\t\t\t\tmargin-right: 2%;\n\t\t\t\t\t\t\tcolor: #1c2d4c;\n\t\t\t\t\t\t\tbackground: #f3f3f3;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t.searchContent {\n\t\t\t\t\t\t\twidth: 70%;\n\t\t\t\t\t\t\tbackground: orange;\n\t\t\t\t\t\t\theight: 1000vh;\n\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t@media screen and (max-width: 1000px) {\n\t\t\t\t\t\t\t.searchSidebar {\n\t\t\t\t\t\t\t\twidth: 50%;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t@media screen and (max-width: 768px) {\n\t\t\t\t\t\t\t.searchSidebar {\n\t\t\t\t\t\t\t\twidth: 290px;\n\t\t\t\t\t\t\t\tposition: absolute;\n\t\t\t\t\t\t\t\ttop: 0;\n\t\t\t\t\t\t\t\tleft: 0;\n\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t.searchContent {\n\t\t\t\t\t\t\t\twidth: 100%;\n\t\t\t\t\t\t\t\tbackground: orange;\n\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t.btnMenu {\n\t\t\t\t\t\t\t\tposition: absolute;\n\t\t\t\t\t\t\t\ttop: 5px;\n\t\t\t\t\t\t\t\tleft: 294px;\n\t\t\t\t\t\t\t\tborder: 1px solid red;\n\t\t\t\t\t\t\t\theight: 30px;\n\t\t\t\t\t\t\t\twidth: 30px;\n\t\t\t\t\t\t\t\tbackground: green;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t")));
    }
  }]);

  return Search;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



/***/ })

})
//# sourceMappingURL=search.js.950f546b97cf655f6fd7.hot-update.js.map