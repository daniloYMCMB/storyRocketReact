webpackHotUpdate("static/development/pages/search.js",{

/***/ "./components/SearchMaterialType.js":
/*!******************************************!*\
  !*** ./components/SearchMaterialType.js ***!
  \******************************************/
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







var _jsxFileName = "/Users/daniloviacavavizarreta/www/storyrocketreact/components/SearchMaterialType.js";



var SearchMaterialType =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(SearchMaterialType, _Component);

  function SearchMaterialType() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SearchMaterialType);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SearchMaterialType)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleOpenSearchMT", function (e) {
      var titleSearchMaterialType = document.getElementById("titleSearchMaterialType");
      titleSearchMaterialType.classList.toggle("active");
      var SearchMaterialTypeList = document.getElementById("SearchMaterialTypeList");
      SearchMaterialTypeList.classList.toggle("active");
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleClear", function (e) {
      var materialTypeItem = document.getElementsByClassName("SearchMaterialType-item");

      for (var i = 0; i < materialTypeItem.length; i++) {
        console.log(materialTypeItem);

        if (materialTypeItem[i].classList.contains('active')) {
          materialTypeItem[i].classList.remove('active');
        }
      }

      var clear = document.getElementById("clearMaterialType");
      clear.classList.remove('active');
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleMaterialActive", function (e) {
      var materialTypeItem = document.getElementById("item");
      materialTypeItem.classList.toggle('active');
      var clear = document.getElementById("clearMaterialType");
      clear.classList.add('active');
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleMaterialActive2", function (e) {
      var materialTypeItem = document.getElementById("item2");
      materialTypeItem.classList.toggle('active');
      var clear = document.getElementById("clearMaterialType");
      clear.classList.add('active');
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleMaterialActive3", function (e) {
      var materialTypeItem = document.getElementById("item3");
      materialTypeItem.classList.toggle('active');
      var clear = document.getElementById("clearMaterialType");
      clear.classList.add('active');
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleMaterialActive4", function (e) {
      var materialTypeItem = document.getElementById("item4");
      materialTypeItem.classList.toggle('active');
      var clear = document.getElementById("clearMaterialType");
      clear.classList.add('active');
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleMaterialActive5", function (e) {
      var materialTypeItem = document.getElementById("item5");
      materialTypeItem.classList.toggle('active');
      var clear = document.getElementById("clearMaterialType");
      clear.classList.add('active');
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SearchMaterialType, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "SearchMaterialType",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "titleSearchMenu",
        id: "titleSearchMaterialType",
        onClick: this.handleOpenSearchMT,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "SearchTitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        className: "SearchTitle-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, "Material Type")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "searchMaterialsMenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "/static/img/arrowUp.svg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "SearchMaterialType-container",
        id: "SearchMaterialTypeList",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "SearchMaterialType-items",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "SearchMaterialType-item",
        id: "item",
        onClick: this.handleMaterialActive,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "icon mia",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("svg", {
        viewBox: "0 0 412.72 412.72",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M404.72,82.944c-0.027,0-0.054,0-0.08,0h0h-27.12v-9.28c0.146-3.673-2.23-6.974-5.76-8 c-18.828-4.934-38.216-7.408-57.68-7.36c-32,0-75.6,7.2-107.84,40c-32-33.12-75.92-40-107.84-40 c-19.464-0.048-38.852,2.426-57.68,7.36c-3.53,1.026-5.906,4.327-5.76,8v9.2H8c-4.418,0-8,3.582-8,8v255.52c0,4.418,3.582,8,8,8 c1.374-0.004,2.724-0.362,3.92-1.04c0.8-0.4,80.8-44.16,192.48-16h1.2h0.72c0.638,0.077,1.282,0.077,1.92,0 c112-28.4,192,15.28,192.48,16c2.475,1.429,5.525,1.429,8,0c2.46-1.42,3.983-4.039,4-6.88V90.944 C412.72,86.526,409.139,82.944,404.72,82.944z M16,333.664V98.944h19.12v200.64c-0.05,4.418,3.491,8.04,7.909,8.09 c0.432,0.005,0.864-0.025,1.291-0.09c16.55-2.527,33.259-3.864,50-4c23.19-0.402,46.283,3.086,68.32,10.32 C112.875,307.886,62.397,314.688,16,333.664z M94.32,287.664c-14.551,0.033-29.085,0.968-43.52,2.8V79.984 c15.576-3.47,31.482-5.241,47.44-5.28c29.92,0,71.2,6.88,99.84,39.2l0.24,199.28C181.68,302.304,149.2,287.664,94.32,287.664z M214.32,113.904c28.64-32,69.92-39.2,99.84-39.2c15.957,0.047,31.863,1.817,47.44,5.28v210.48 c-14.354-1.849-28.808-2.811-43.28-2.88c-54.56,0-87.12,14.64-104,25.52V113.904z M396.64,333.664 c-46.496-19.028-97.09-25.831-146.96-19.76c22.141-7.26,45.344-10.749,68.64-10.32c16.846,0.094,33.663,1.404,50.32,3.92 c4.368,0.663,8.447-2.341,9.11-6.709c0.065-0.427,0.095-0.859,0.09-1.291V98.944h19.12L396.64,333.664z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, "Book"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "SearchMaterialType-item",
        id: "item2",
        onClick: this.handleMaterialActive2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "icon mia",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("svg", {
        version: "1.1",
        id: "Capa_1",
        x: "0px",
        y: "0px",
        viewBox: "0 0 389.4 389.4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M350.7,345.88v0.04h-13.2c-0.217-9.636-8.081-17.341-17.72-17.36H304.5V60.92h15.24c9.67,0.002,17.564-7.732,17.76-17.4 h13.2c7.213,0,13.06-5.847,13.06-13.06S357.913,17.4,350.7,17.4h-13.2c-0.196-9.652-8.066-17.38-17.72-17.4H69.66 c-9.654,0.02-17.524,7.748-17.72,17.4H38.7c-7.213,0-13.06,5.847-13.06,13.06s5.847,13.06,13.06,13.06h13.2 c0.196,9.652,8.066,17.38,17.72,17.4h15.24v267.6h-15.2c-9.639,0.019-17.503,7.724-17.72,17.36H38.7 c-7.213,0-13.06,5.847-13.06,13.06S31.487,372,38.7,372h13.2c0.196,9.652,8.066,17.38,17.72,17.4h250.12 c9.654-0.02,17.524-7.748,17.72-17.4h13.24c7.213,0,13.06-5.847,13.06-13.06S357.913,345.88,350.7,345.88z M337.54,26.72h13.16 c1.979,0.176,3.529,1.777,3.64,3.76h0.16c-0.1,2.056-1.744,3.7-3.8,3.8h-13.16V26.72z M51.7,34.28h-13 c-1.993-0.178-3.548-1.801-3.64-3.8h0.2c0.097-1.916,1.54-3.494,3.44-3.76h13V34.28z M51.86,362.72H38.7 c-1.979-0.176-3.529-1.777-3.64-3.76c0.1-2.056,1.744-3.7,3.8-3.8h13V362.72z M69.66,51.64c-4.69,0-8.498-3.79-8.52-8.48h0.2V17.8 c0-4.706,3.815-8.52,8.52-8.52h249.88c4.705,0,8.52,3.815,8.52,8.52v25.32c0,4.705-3.815,8.52-8.52,8.52H69.66z M295.22,60.92 v267.6H94.18l0.2-267.6H295.22z M328.22,371.64c0,4.705-3.815,8.52-8.52,8.52H69.66c-4.706,0-8.52-3.815-8.52-8.52v-25.32 c0-4.706,3.815-8.52,8.52-8.52h250.08c4.705,0,8.52,3.815,8.52,8.52L328.22,371.64z M351.479,362.72 c-0.259,0.027-0.52,0.027-0.779,0h-13.16v-7.56h13.16c2.088-0.215,3.954,1.303,4.169,3.391S353.566,362.505,351.479,362.72z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M157.22,75.36h-25c-9.799,0.022-17.738,7.961-17.76,17.76v25c0,9.815,7.945,17.778,17.76,17.8h25 c9.799-0.022,17.738-7.961,17.76-17.76V93.12C174.958,83.321,167.019,75.382,157.22,75.36z M165.78,118.12 c0.044,4.705-3.734,8.555-8.44,8.6c-0.04,0-0.08,0-0.12,0h-25c-4.705,0-8.52-3.815-8.52-8.52l0.04-25.08 c0-4.705,3.815-8.52,8.52-8.52h25c4.705,0,8.52,3.815,8.52,8.52V118.12z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M270.304,85.8c-0.001,0-0.003,0-0.004,0h-73.88c-2.563-0.001-4.641,2.075-4.642,4.638 c-0.001,2.563,2.075,4.641,4.638,4.642c0.001,0,0.003,0,0.004,0h73.88c2.563,0.001,4.641-2.075,4.642-4.638 C274.943,87.879,272.867,85.801,270.304,85.8z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M270.304,117.08c-0.001,0-0.003,0-0.004,0h-73.88c-2.563-0.001-4.641,2.075-4.642,4.638 c-0.001,2.563,2.075,4.641,4.638,4.642c0.001,0,0.003,0,0.004,0h73.88c2.563,0.001,4.641-2.075,4.642-4.638 C274.943,119.159,272.867,117.081,270.304,117.08z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M270.304,148.36c-0.001,0-0.003,0-0.004,0H119.1c-2.563-0.001-4.641,2.075-4.642,4.638 c-0.001,2.563,2.075,4.641,4.638,4.642c0.001,0,0.003,0,0.004,0h151.2c2.563,0.001,4.641-2.075,4.642-4.638 C274.943,150.439,272.867,148.361,270.304,148.36z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M270.304,179.64c-0.001,0-0.003,0-0.004,0H119.1c-2.563-0.001-4.641,2.075-4.642,4.638 c-0.001,2.563,2.075,4.641,4.638,4.642c0.001,0,0.003,0,0.004,0h151.2c2.563,0.001,4.641-2.075,4.642-4.638 C274.943,181.719,272.867,179.641,270.304,179.64z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M270.304,210.96c-0.001,0-0.003,0-0.004,0H119.1c-2.563-0.001-4.641,2.075-4.642,4.638 c-0.001,2.563,2.075,4.641,4.638,4.642c0.001,0,0.003,0,0.004,0h151.2c2.563,0.001,4.641-2.075,4.642-4.638 S272.867,210.961,270.304,210.96z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M270.304,242.24c-0.001,0-0.003,0-0.004,0H119.1c-2.563-0.001-4.641,2.075-4.642,4.638 c-0.001,2.563,2.075,4.641,4.638,4.642c0.001,0,0.003,0,0.004,0h151.2c2.563,0.001,4.641-2.075,4.642-4.638 C274.943,244.319,272.867,242.241,270.304,242.24z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M270.304,273.52c-0.001,0-0.003,0-0.004,0H119.1c-2.563-0.001-4.641,2.075-4.642,4.638 c-0.001,2.563,2.075,4.641,4.638,4.642c0.001,0,0.003,0,0.004,0h151.2c2.563,0.001,4.641-2.075,4.642-4.638 S272.867,273.521,270.304,273.52z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M270.304,304.8c-0.001,0-0.003,0-0.004,0H119.1c-2.563-0.001-4.641,2.075-4.642,4.638 c-0.001,2.563,2.075,4.641,4.638,4.642c0.001,0,0.003,0,0.004,0h151.2c2.563,0.001,4.641-2.075,4.642-4.638 C274.943,306.879,272.867,304.801,270.304,304.8z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        },
        __self: this
      }, "Manuscript"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "SearchMaterialType-item",
        id: "item3",
        onClick: this.handleMaterialActive3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "icon mia",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("svg", {
        version: "1.1",
        viewBox: "0 0 512 640",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M446.73,268.439h-45.29c-3.741,0-6.774,3.033-6.774,6.774s3.033,6.774,6.774,6.774h38.515v180.271h-31.74V305.661   c0-3.741-3.033-6.774-6.774-6.774s-6.774,3.033-6.774,6.774v163.372c0,3.741,3.033,6.773,6.774,6.773h45.29   c3.74,0,6.773-3.032,6.773-6.773V275.214C453.504,271.473,450.471,268.439,446.73,268.439z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M361.641,352.701h-45.289c-3.742,0-6.775,3.033-6.775,6.774v109.558c0,3.741,3.033,6.773,6.775,6.773h45.289   c3.741,0,6.773-3.032,6.773-6.773V359.476C368.414,355.734,365.382,352.701,361.641,352.701z M354.866,462.259h-31.741V366.25   h31.741V462.259z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M276.551,390.57h-45.289c-3.742,0-6.774,3.033-6.774,6.775v71.688c0,3.741,3.033,6.773,6.774,6.773h45.289   c3.742,0,6.774-3.032,6.774-6.773v-71.688C283.325,393.604,280.293,390.57,276.551,390.57z M269.776,462.259h-31.741v-58.14h31.741   V462.259z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M191.461,422.544h-45.29c-3.741,0-6.774,3.032-6.774,6.774v39.715c0,3.741,3.033,6.773,6.774,6.773h45.29   c3.741,0,6.774-3.032,6.774-6.773v-39.715C198.235,425.576,195.203,422.544,191.461,422.544z M184.687,462.259h-31.741v-26.166   h31.741V462.259z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M413.077,177.319c1.143-2.308,0.877-5.065-0.685-7.113l-26.73-35.032c-1.281-1.68-3.273-2.666-5.385-2.666   c-2.113,0-4.105,0.986-5.387,2.666l-26.729,35.032c-2.27,2.974-1.697,7.225,1.276,9.495c1.228,0.936,2.672,1.389,4.104,1.389   c2.041,0,4.057-0.917,5.391-2.665l21.344-27.974l13.039,17.09h-13.039c-3.742,0-6.774,3.033-6.774,6.774   c0,97.535-79.351,176.885-176.885,176.885c-3.742,0-6.774,3.033-6.774,6.775c0,3.74,3.033,6.773,6.774,6.773   c102.737,0,186.718-81.78,190.3-183.659h20.088C409.582,181.089,411.936,179.628,413.077,177.319z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M289.732,276.23c0.386-0.295,0.733-0.629,1.048-0.999c27.02-25.228,43.958-61.123,43.958-100.917   c0-76.16-61.961-138.121-138.121-138.121c-3.452,0-6.862,0.17-10.251,0.42c-0.008,0-0.016-0.001-0.024,0   c-0.005,0-0.01,0.002-0.016,0.003c-38.972,2.887-73.493,21.985-96.806,50.595c-0.391,0.383-0.723,0.819-1.013,1.288   c-18.762,23.587-30.013,53.403-30.013,85.814c0,36.062,13.906,68.926,36.62,93.55c0.29,0.378,0.619,0.72,0.981,1.029   c25.207,26.774,60.933,43.542,100.521,43.542C232.463,312.436,265.157,298.703,289.732,276.23z M191.14,274.525   c-14.631-11.31-32.874-17.537-51.368-17.537h-36.23c-19.574-22.013-31.497-50.971-31.497-82.674   c0-28.364,9.547-54.528,25.571-75.492h37.786c9.966,0,18.075,8.108,18.075,18.075c0,9.967-8.109,18.076-18.075,18.076h-18.369   c-15.455,0-28.029,12.574-28.029,28.029c0,15.456,12.574,28.029,28.029,28.029h1.417c9.157,0,16.605,7.45,16.605,16.607   c0,9.157-7.449,16.606-16.605,16.606c-3.742,0-6.774,3.032-6.774,6.774c0,3.741,3.033,6.774,6.774,6.774   c16.627,0,30.154-13.528,30.154-30.155c0-16.628-13.527-30.155-30.154-30.155h-1.417c-7.985,0-14.48-6.496-14.48-14.481   c0-7.985,6.496-14.48,14.48-14.48h18.369c17.437,0,31.624-14.186,31.624-31.625c0-17.438-14.187-31.624-31.624-31.624h-25.785   c19.031-18.599,43.973-31.148,71.714-34.561c5.422,24.208,26.823,41.732,52.294,41.732h19.699c3.741,0,6.773-3.033,6.773-6.774   s-3.032-6.774-6.773-6.774h-19.699c-18.304,0-33.787-12.107-38.555-29.116c0.518-0.006,1.028-0.039,1.547-0.039   c68.689,0,124.572,55.883,124.572,124.573c0,35.244-14.736,67.092-38.342,89.774h-22.665c-7.25,0-13.148-5.897-13.148-13.147   s5.898-13.147,13.148-13.147h2.568c15.05,0,27.294-12.245,27.294-27.294s-12.244-27.293-27.294-27.293h-24.105   c-11.336,0-20.558-9.223-20.558-20.559s9.222-20.558,20.558-20.558h49.802c3.741,0,6.773-3.032,6.773-6.774   s-3.032-6.774-6.773-6.774h-49.802c-18.807,0-34.106,15.3-34.106,34.106s15.3,34.107,34.106,34.107h24.105   c7.579,0,13.745,6.166,13.745,13.745s-6.166,13.745-13.745,13.745h-2.568c-14.721,0-26.696,11.976-26.696,26.696   s11.976,26.695,26.696,26.695h5.951c-19.869,13.412-43.794,21.25-69.516,21.25c-29.976,0-57.51-10.646-79.028-28.351h22.182   c15.511,0,30.811,5.224,43.083,14.708c1.232,0.953,2.691,1.414,4.138,1.414c2.025,0,4.03-0.904,5.364-2.632   C194.645,281.066,194.101,276.813,191.14,274.525z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285
        },
        __self: this
      }, "Play"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "SearchMaterialType-item",
        id: "item4",
        onClick: this.handleMaterialActive4,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "icon mia",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("svg", {
        version: "1.1",
        viewBox: "0 0 512 640",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M446.73,268.439h-45.29c-3.741,0-6.774,3.033-6.774,6.774s3.033,6.774,6.774,6.774h38.515v180.271h-31.74V305.661   c0-3.741-3.033-6.774-6.774-6.774s-6.774,3.033-6.774,6.774v163.372c0,3.741,3.033,6.773,6.774,6.773h45.29   c3.74,0,6.773-3.032,6.773-6.773V275.214C453.504,271.473,450.471,268.439,446.73,268.439z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M361.641,352.701h-45.289c-3.742,0-6.775,3.033-6.775,6.774v109.558c0,3.741,3.033,6.773,6.775,6.773h45.289   c3.741,0,6.773-3.032,6.773-6.773V359.476C368.414,355.734,365.382,352.701,361.641,352.701z M354.866,462.259h-31.741V366.25   h31.741V462.259z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 294
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M276.551,390.57h-45.289c-3.742,0-6.774,3.033-6.774,6.775v71.688c0,3.741,3.033,6.773,6.774,6.773h45.289   c3.742,0,6.774-3.032,6.774-6.773v-71.688C283.325,393.604,280.293,390.57,276.551,390.57z M269.776,462.259h-31.741v-58.14h31.741   V462.259z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 295
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M191.461,422.544h-45.29c-3.741,0-6.774,3.032-6.774,6.774v39.715c0,3.741,3.033,6.773,6.774,6.773h45.29   c3.741,0,6.774-3.032,6.774-6.773v-39.715C198.235,425.576,195.203,422.544,191.461,422.544z M184.687,462.259h-31.741v-26.166   h31.741V462.259z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M413.077,177.319c1.143-2.308,0.877-5.065-0.685-7.113l-26.73-35.032c-1.281-1.68-3.273-2.666-5.385-2.666   c-2.113,0-4.105,0.986-5.387,2.666l-26.729,35.032c-2.27,2.974-1.697,7.225,1.276,9.495c1.228,0.936,2.672,1.389,4.104,1.389   c2.041,0,4.057-0.917,5.391-2.665l21.344-27.974l13.039,17.09h-13.039c-3.742,0-6.774,3.033-6.774,6.774   c0,97.535-79.351,176.885-176.885,176.885c-3.742,0-6.774,3.033-6.774,6.775c0,3.74,3.033,6.773,6.774,6.773   c102.737,0,186.718-81.78,190.3-183.659h20.088C409.582,181.089,411.936,179.628,413.077,177.319z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M289.732,276.23c0.386-0.295,0.733-0.629,1.048-0.999c27.02-25.228,43.958-61.123,43.958-100.917   c0-76.16-61.961-138.121-138.121-138.121c-3.452,0-6.862,0.17-10.251,0.42c-0.008,0-0.016-0.001-0.024,0   c-0.005,0-0.01,0.002-0.016,0.003c-38.972,2.887-73.493,21.985-96.806,50.595c-0.391,0.383-0.723,0.819-1.013,1.288   c-18.762,23.587-30.013,53.403-30.013,85.814c0,36.062,13.906,68.926,36.62,93.55c0.29,0.378,0.619,0.72,0.981,1.029   c25.207,26.774,60.933,43.542,100.521,43.542C232.463,312.436,265.157,298.703,289.732,276.23z M191.14,274.525   c-14.631-11.31-32.874-17.537-51.368-17.537h-36.23c-19.574-22.013-31.497-50.971-31.497-82.674   c0-28.364,9.547-54.528,25.571-75.492h37.786c9.966,0,18.075,8.108,18.075,18.075c0,9.967-8.109,18.076-18.075,18.076h-18.369   c-15.455,0-28.029,12.574-28.029,28.029c0,15.456,12.574,28.029,28.029,28.029h1.417c9.157,0,16.605,7.45,16.605,16.607   c0,9.157-7.449,16.606-16.605,16.606c-3.742,0-6.774,3.032-6.774,6.774c0,3.741,3.033,6.774,6.774,6.774   c16.627,0,30.154-13.528,30.154-30.155c0-16.628-13.527-30.155-30.154-30.155h-1.417c-7.985,0-14.48-6.496-14.48-14.481   c0-7.985,6.496-14.48,14.48-14.48h18.369c17.437,0,31.624-14.186,31.624-31.625c0-17.438-14.187-31.624-31.624-31.624h-25.785   c19.031-18.599,43.973-31.148,71.714-34.561c5.422,24.208,26.823,41.732,52.294,41.732h19.699c3.741,0,6.773-3.033,6.773-6.774   s-3.032-6.774-6.773-6.774h-19.699c-18.304,0-33.787-12.107-38.555-29.116c0.518-0.006,1.028-0.039,1.547-0.039   c68.689,0,124.572,55.883,124.572,124.573c0,35.244-14.736,67.092-38.342,89.774h-22.665c-7.25,0-13.148-5.897-13.148-13.147   s5.898-13.147,13.148-13.147h2.568c15.05,0,27.294-12.245,27.294-27.294s-12.244-27.293-27.294-27.293h-24.105   c-11.336,0-20.558-9.223-20.558-20.559s9.222-20.558,20.558-20.558h49.802c3.741,0,6.773-3.032,6.773-6.774   s-3.032-6.774-6.773-6.774h-49.802c-18.807,0-34.106,15.3-34.106,34.106s15.3,34.107,34.106,34.107h24.105   c7.579,0,13.745,6.166,13.745,13.745s-6.166,13.745-13.745,13.745h-2.568c-14.721,0-26.696,11.976-26.696,26.696   s11.976,26.695,26.696,26.695h5.951c-19.869,13.412-43.794,21.25-69.516,21.25c-29.976,0-57.51-10.646-79.028-28.351h22.182   c15.511,0,30.811,5.224,43.083,14.708c1.232,0.953,2.691,1.414,4.138,1.414c2.025,0,4.03-0.904,5.364-2.632   C194.645,281.066,194.101,276.813,191.14,274.525z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302
        },
        __self: this
      }, "Script"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "SearchMaterialType-item",
        id: "item5",
        onClick: this.handleMaterialActive5,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "icon mia",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("svg", {
        version: "1.1",
        viewBox: "0 0 512 640",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 308
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 309
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M446.73,268.439h-45.29c-3.741,0-6.774,3.033-6.774,6.774s3.033,6.774,6.774,6.774h38.515v180.271h-31.74V305.661   c0-3.741-3.033-6.774-6.774-6.774s-6.774,3.033-6.774,6.774v163.372c0,3.741,3.033,6.773,6.774,6.773h45.29   c3.74,0,6.773-3.032,6.773-6.773V275.214C453.504,271.473,450.471,268.439,446.73,268.439z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 310
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M361.641,352.701h-45.289c-3.742,0-6.775,3.033-6.775,6.774v109.558c0,3.741,3.033,6.773,6.775,6.773h45.289   c3.741,0,6.773-3.032,6.773-6.773V359.476C368.414,355.734,365.382,352.701,361.641,352.701z M354.866,462.259h-31.741V366.25   h31.741V462.259z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 311
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M276.551,390.57h-45.289c-3.742,0-6.774,3.033-6.774,6.775v71.688c0,3.741,3.033,6.773,6.774,6.773h45.289   c3.742,0,6.774-3.032,6.774-6.773v-71.688C283.325,393.604,280.293,390.57,276.551,390.57z M269.776,462.259h-31.741v-58.14h31.741   V462.259z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M191.461,422.544h-45.29c-3.741,0-6.774,3.032-6.774,6.774v39.715c0,3.741,3.033,6.773,6.774,6.773h45.29   c3.741,0,6.774-3.032,6.774-6.773v-39.715C198.235,425.576,195.203,422.544,191.461,422.544z M184.687,462.259h-31.741v-26.166   h31.741V462.259z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 313
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M413.077,177.319c1.143-2.308,0.877-5.065-0.685-7.113l-26.73-35.032c-1.281-1.68-3.273-2.666-5.385-2.666   c-2.113,0-4.105,0.986-5.387,2.666l-26.729,35.032c-2.27,2.974-1.697,7.225,1.276,9.495c1.228,0.936,2.672,1.389,4.104,1.389   c2.041,0,4.057-0.917,5.391-2.665l21.344-27.974l13.039,17.09h-13.039c-3.742,0-6.774,3.033-6.774,6.774   c0,97.535-79.351,176.885-176.885,176.885c-3.742,0-6.774,3.033-6.774,6.775c0,3.74,3.033,6.773,6.774,6.773   c102.737,0,186.718-81.78,190.3-183.659h20.088C409.582,181.089,411.936,179.628,413.077,177.319z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M289.732,276.23c0.386-0.295,0.733-0.629,1.048-0.999c27.02-25.228,43.958-61.123,43.958-100.917   c0-76.16-61.961-138.121-138.121-138.121c-3.452,0-6.862,0.17-10.251,0.42c-0.008,0-0.016-0.001-0.024,0   c-0.005,0-0.01,0.002-0.016,0.003c-38.972,2.887-73.493,21.985-96.806,50.595c-0.391,0.383-0.723,0.819-1.013,1.288   c-18.762,23.587-30.013,53.403-30.013,85.814c0,36.062,13.906,68.926,36.62,93.55c0.29,0.378,0.619,0.72,0.981,1.029   c25.207,26.774,60.933,43.542,100.521,43.542C232.463,312.436,265.157,298.703,289.732,276.23z M191.14,274.525   c-14.631-11.31-32.874-17.537-51.368-17.537h-36.23c-19.574-22.013-31.497-50.971-31.497-82.674   c0-28.364,9.547-54.528,25.571-75.492h37.786c9.966,0,18.075,8.108,18.075,18.075c0,9.967-8.109,18.076-18.075,18.076h-18.369   c-15.455,0-28.029,12.574-28.029,28.029c0,15.456,12.574,28.029,28.029,28.029h1.417c9.157,0,16.605,7.45,16.605,16.607   c0,9.157-7.449,16.606-16.605,16.606c-3.742,0-6.774,3.032-6.774,6.774c0,3.741,3.033,6.774,6.774,6.774   c16.627,0,30.154-13.528,30.154-30.155c0-16.628-13.527-30.155-30.154-30.155h-1.417c-7.985,0-14.48-6.496-14.48-14.481   c0-7.985,6.496-14.48,14.48-14.48h18.369c17.437,0,31.624-14.186,31.624-31.625c0-17.438-14.187-31.624-31.624-31.624h-25.785   c19.031-18.599,43.973-31.148,71.714-34.561c5.422,24.208,26.823,41.732,52.294,41.732h19.699c3.741,0,6.773-3.033,6.773-6.774   s-3.032-6.774-6.773-6.774h-19.699c-18.304,0-33.787-12.107-38.555-29.116c0.518-0.006,1.028-0.039,1.547-0.039   c68.689,0,124.572,55.883,124.572,124.573c0,35.244-14.736,67.092-38.342,89.774h-22.665c-7.25,0-13.148-5.897-13.148-13.147   s5.898-13.147,13.148-13.147h2.568c15.05,0,27.294-12.245,27.294-27.294s-12.244-27.293-27.294-27.293h-24.105   c-11.336,0-20.558-9.223-20.558-20.559s9.222-20.558,20.558-20.558h49.802c3.741,0,6.773-3.032,6.773-6.774   s-3.032-6.774-6.773-6.774h-49.802c-18.807,0-34.106,15.3-34.106,34.106s15.3,34.107,34.106,34.107h24.105   c7.579,0,13.745,6.166,13.745,13.745s-6.166,13.745-13.745,13.745h-2.568c-14.721,0-26.696,11.976-26.696,26.696   s11.976,26.695,26.696,26.695h5.951c-19.869,13.412-43.794,21.25-69.516,21.25c-29.976,0-57.51-10.646-79.028-28.351h22.182   c15.511,0,30.811,5.224,43.083,14.708c1.232,0.953,2.691,1.414,4.138,1.414c2.025,0,4.03-0.904,5.364-2.632   C194.645,281.066,194.101,276.813,191.14,274.525z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 319
        },
        __self: this
      }, "Treatment")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "clearMaterialType",
        id: "clearMaterialType",
        onClick: this.handleClear,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324
        },
        __self: this
      }, "\u2715  "), " Clear selection ")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("style", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 328
        },
        __self: this
      }, "\n            .titleSearchMenu {\n              cursor: pointer;\n            }\n\n            .titleSearchMenu:hover .searchMaterialsMenu,\n            .titleSearchMenu.active .searchMaterialsMenu{\n              transform: rotate(180deg);\n            }\n\n            .SearchMaterialType {\n              background: #e1e2e4;\n              box-sizing: border-box;\n              font-family: sans-serif;\n              border-radius: 5px;\n              margin-bottom: 10px;\n              background: white;\n              position: relative;\n              text-align: center;\n            } \n\n            .searchMaterialsMenu {\n              position: absolute;\n              top: 23px;\n              right: 20px;\n              cursor: pointer;\n              transition: .25s linear;\n            }\n\n            .searchMaterialsMenu img {\n              width: 15px;\n            }\n\n            .SearchMaterialType-container {\n              display: none;\n            }\n            .SearchMaterialType-container.active {\n              display: block;\n            }\n\n            .SearchMaterialType-items {\n              justify-content: center;\n              align-items: center;\n              flex-wrap: wrap;\n              text-align: center;\n              display: flex;\n              padding: 10px;\n            }\n\n            .SearchMaterialType-item a {\n              text-decoration: none;\n            }\n\n            .SearchMaterialType-item {\n              margin: 10px 10px 20px 10px;\n              cursor: pointer;\n            }\n\n            .SearchMaterialType-item:hover h4:before,\n            .SearchMaterialType-item.active h4:before {\n              width: 100%;\n            }\n\n            .SearchMaterialType-item:hover .icon,\n            .SearchMaterialType-item.active .icon {\n              border: 2px solid #ffa603;\n              background: #1c2d4c;\n            }\n\n            .SearchMaterialType-item:hover svg,\n            .SearchMaterialType-item.active svg{\n              fill: #ffa603;\n            }\n\n            .SearchMaterialType-item path,\n            .SearchMaterialType-item path{\n              stroke-dasharray: 300, 0, 3000;\n          }\n\n            .SearchMaterialType-item:hover svg, \n            .SearchMaterialType-item.active svg {\n              fill: #ffa603;\n            }\n\n            .SearchMaterialType-item:hover path,\n            .SearchMaterialType-item.active path{\n              animation: twitter 2s;\n            }\n\n            .SearchMaterialType-item h4 {\n              margin-top: 10px;\n              color: #1c2d4c;\n              border-bottom: 2px solid transparent;\n              transition: .25s linear;\n              position: relative;\n              display: inline-block;\n            }\n\n            .SearchMaterialType-item h4:before {\n              content: \"\";\n              position: absolute;\n              bottom: -5px;\n              left: 0;\n              height: 2px;\n              width: 0;\n              background: #1c2d4c;\n              transition: .15s linear;\n            }\n\n            .SearchMaterialType-item svg{\n              fill: #1c2d4c;\n              margin: 0 auto;\n              width: 45px;\n              height: 60px;\n              background: transparent;\n              transition: .25s linear;\n            }\n\n            .icon {\n              width: 70px;\n              height: 65px;\n              background: transparent;\n              padding-top: 5px;\n              border-radius: 50%;\n              transition: .25s linear;\n              border: 2px solid #1c2d4c;\n            }\n\n            .clearMaterialType {\n              margin-bottom: 20px;\n              display: none;\n              text-align: center;\n              cursor: pointer;\n              transition: .25s linear;\n              padding: 5px;\n              border: 1px solid transparent;\n              font-weight: 100;\n            }\n\n              .clearMaterialType:hover {\n                background: #1c2d4c;\n                border-radius: 4px;\n                color: orange;\n                border: 1px solid orange;\n              }\n\n            .clearMaterialType.active {\n              display: inline-block;\n            }\n\n          "));
    }
  }]);

  return SearchMaterialType;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SearchMaterialType);

/***/ })

})
//# sourceMappingURL=search.js.aeddda8fce9c168645a2.hot-update.js.map