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
        viewBox: "0 0 512.001 512.001",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M67.969,171.84c-5.52,0-9.996,4.475-9.996,9.996v0.181c0,5.521,4.476,9.996,9.996,9.996c5.52,0,9.996-4.475,9.996-9.996 v-0.181C77.966,176.315,73.489,171.84,67.969,171.84z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M454.126,274.542c1.383-0.874,2.531-2.073,3.343-3.495c18.36-32.153,35.921-73.863,45.828-108.855 c12.791-45.175,11.496-71.426-3.96-80.252c-15.454-8.822-38.72,3.4-71.127,37.376c-9.426,9.883-19.121,21.178-28.524,33.133 V64.072h11.995v5.998c0,5.521,4.476,9.996,9.996,9.996h25.99c5.52,0,9.996-4.475,9.996-9.996V10.093 c0-5.521-4.476-9.996-9.996-9.996h-25.99c-5.52,0-9.996,4.475-9.996,9.996v5.998h-12.454c-1.273-4.055-5.062-6.997-9.537-6.997 H67.974c-4.475,0-8.263,2.942-9.537,6.997H45.983v-5.998c0-5.521-4.476-9.996-9.996-9.996H9.996C4.476,0.096,0,4.572,0,10.093 V70.07c0,5.521,4.476,9.996,9.996,9.996h25.99c5.52,0,9.996-4.475,9.996-9.996v-5.998h11.996v73.113 c0,5.521,4.476,9.996,9.996,9.996c5.52,0,9.996-4.475,9.996-9.996V71.07h301.721v108.44 c-8.067,11.639-15.531,23.371-21.941,34.596c-0.813,1.42-1.263,3.019-1.312,4.654l-2.978,98.484l-57.448,100.609 c-2.738,4.794-1.071,10.9,3.724,13.638c1.563,0.894,3.268,1.316,4.947,1.316c3.472,0,6.846-1.811,8.69-5.041l57.449-100.609 l8.869-5.602v119.375H77.971V225.297c0-5.521-4.476-9.996-9.996-9.996c-5.52,0-9.996,4.475-9.996,9.996v222.632H46.15v-5.998 c0-5.521-4.476-9.996-9.996-9.996h-25.99c-5.52,0-9.996,4.475-9.996,9.996v59.978c0,5.521,4.476,9.996,9.996,9.996h25.99 c5.52,0,9.996-4.475,9.996-9.996v-5.998h12.287c1.274,4.055,5.062,6.997,9.537,6.997h321.712c4.475,0,8.263-2.942,9.537-6.997 h12.621v5.998c0,5.521,4.476,9.996,9.996,9.996h25.99c5.52,0,9.996-4.475,9.996-9.996v-59.978c0-5.521-4.476-9.996-9.996-9.996 h-25.99c-5.52,0-9.996,4.475-9.996,9.996v5.998h-12.161v-139L454.126,274.542z M431.838,20.089h5.831v39.985h-5.831V20.089z M25.99,26.087v27.99v5.998h-5.998V20.089h5.998V26.087z M57.978,44.08H45.983v-7.997h11.996V44.08z M379.691,51.077H77.971 V29.085h301.72V51.077z M26.157,456.147c-0.104,0.578-0.167,1.17-0.167,1.777v27.99c0,0.608,0.063,1.2,0.167,1.777v4.22h-5.998 v-39.985h5.998V456.147z M57.978,475.918H46.15v-7.997h11.829V475.918z M379.691,482.915H77.971v-21.992h301.72V482.915z M431.838,485.914v-27.99v-5.998h5.998v39.985h-5.998V485.914z M491.911,115.1c-0.379,8.947-2.376,22.304-7.852,41.645 c-2.92,10.311-6.536,21.234-10.652,32.312l-31.082,12.881L491.911,115.1z M442.676,133.114 c13.874-14.547,24.362-23.054,31.875-27.928l-63.334,110.914l-8.564-31.363c-0.191-0.7-0.456-1.359-0.778-1.978 C414.84,164.778,429.047,147.404,442.676,133.114z M399.684,36.083h11.995v7.997h-11.995V36.083z M374.581,280.258l1.766-58.385 c3.367-5.806,7.02-11.742,10.884-17.716l9.965,36.496L374.581,280.258z M411.846,467.921v7.997h-12.161v-7.997H411.846z M391.943,290.171l34.369-60.189c0.668-0.126,1.333-0.318,1.986-0.589l34.657-14.363c-6.691,15.447-14.074,30.511-21.628,43.948 L391.943,290.171z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M306.798,130.048H183.677c-5.52,0-9.996,4.475-9.996,9.996s4.476,9.996,9.996,9.996h123.121 c5.52,0,9.996-4.475,9.996-9.996S312.318,130.048,306.798,130.048z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
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
        d: "M151.161,130.048h-0.131c-5.52,0-9.996,4.475-9.996,9.996s4.475,9.996,9.996,9.996h0.131c5.52,0,9.996-4.475,9.996-9.996 S156.681,130.048,151.161,130.048z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M306.798,174.01H183.677c-5.52,0-9.996,4.475-9.996,9.996s4.476,9.996,9.996,9.996h123.121 c5.52,0,9.996-4.475,9.996-9.996S312.318,174.01,306.798,174.01z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M151.161,174.01h-0.131c-5.52,0-9.996,4.475-9.996,9.996s4.475,9.996,9.996,9.996h0.131c5.52,0,9.996-4.475,9.996-9.996 S156.681,174.01,151.161,174.01z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M306.798,217.973H183.677c-5.52,0-9.996,4.475-9.996,9.996s4.476,9.996,9.996,9.996h123.121 c5.52,0,9.996-4.475,9.996-9.996S312.318,217.973,306.798,217.973z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M151.161,217.973h-0.131c-5.52,0-9.996,4.475-9.996,9.996s4.475,9.996,9.996,9.996h0.131c5.52,0,9.996-4.475,9.996-9.996 S156.681,217.973,151.161,217.973z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M306.798,261.935H183.677c-5.52,0-9.996,4.475-9.996,9.996c0,5.521,4.476,9.996,9.996,9.996h123.121 c5.52,0,9.996-4.475,9.996-9.996C316.794,266.41,312.318,261.935,306.798,261.935z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M151.161,261.935h-0.131c-5.52,0-9.996,4.475-9.996,9.996c0,5.521,4.475,9.996,9.996,9.996h0.131 c5.52,0,9.996-4.475,9.996-9.996C161.158,266.41,156.681,261.935,151.161,261.935z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M306.798,305.898H183.677c-5.52,0-9.996,4.475-9.996,9.996s4.476,9.996,9.996,9.996h123.121 c5.52,0,9.996-4.475,9.996-9.996S312.318,305.898,306.798,305.898z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M151.161,305.898h-0.131c-5.52,0-9.996,4.475-9.996,9.996s4.475,9.996,9.996,9.996h0.131c5.52,0,9.996-4.475,9.996-9.996 S156.681,305.898,151.161,305.898z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M256.07,350.097h-72.393c-5.52,0-9.996,4.475-9.996,9.996s4.476,9.996,9.996,9.996h72.393c5.52,0,9.996-4.475,9.996-9.996 S261.59,350.097,256.07,350.097z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M151.161,350.097h-0.131c-5.52,0-9.996,4.475-9.996,9.996s4.475,9.996,9.996,9.996h0.131c5.52,0,9.996-4.475,9.996-9.996 S156.681,350.097,151.161,350.097z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
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
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292
        },
        __self: this
      }, "Manuscript"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "SearchMaterialType-item",
        id: "item3",
        onClick: this.handleMaterialActive3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 295
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "icon mia",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("svg", {
        height: "512pt",
        viewBox: "-31 0 512 512",
        width: "512pt",
        xmlns: "http://www.w3.org/2000/svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        "fill-rule": "evenodd",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 299
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "m440.589844 206.675781h-341.171875l327.699219-94.929687c2.546874-.738282 4.695312-2.460938 5.976562-4.78125 1.28125-2.324219 1.585938-5.058594.847656-7.605469l-17.148437-59.199219c-6.851563-23.644531-28.867188-40.160156-53.539063-40.160156-5.199218 0-10.378906.738281-15.402344 2.191406l-307.675781 89.128906c-14.230469 4.121094-26.023437 13.582032-33.214843 26.632813-7.1875 13.050781-8.875 28.078125-4.753907 42.304687l16.753907 57.835938v238.253906c0 30.6875 24.964843 55.652344 55.648437 55.652344h120.164063c5.523437 0 10-4.476562 10-10s-4.476563-10-10-10h-120.160157c-19.660156 0-35.652343-15.992188-35.652343-35.652344v-136.085937h51.230468.023438.019531 78.3125.023437.023438 78.3125.023438.023437 78.3125.023437.019532 105.28125v136.085937c0 19.660156-15.992188 35.652344-35.652344 35.652344h-120.164062c-5.519532 0-10 4.476562-10 10s4.480468 10 10 10h120.164062c30.6875 0 55.652344-24.964844 55.652344-55.652344v-239.671875c0-5.523437-4.476563-10-10-10zm-176.332032 93.585938 42.488282-73.585938h55.261718l-42.484374 73.585938zm-78.359374 0 42.488281-73.585938h55.261719l-42.484376 73.585938zm-78.355469 0 42.484375-73.585938h55.265625l-42.488281 73.585938zm37.179687-129.457031-71.148437-68.335938 53.308593-15.441406c.375.546875.8125 1.0625 1.3125 1.542968l71.148438 68.335938-53.308594 15.441406c-.375-.546875-.816406-1.066406-1.3125-1.542968zm134-125.839844 71.148438 68.335937-53.308594 15.441407c-.375-.546876-.8125-1.066407-1.3125-1.542969l-71.148438-68.335938 53.308594-15.441406c.375.546875.8125 1.0625 1.3125 1.542969zm-75.265625 21.804687 71.148438 68.332031-53.308594 15.445313c-.375-.546875-.8125-1.066406-1.3125-1.542969l-71.148437-68.335937 53.308593-15.441407c.378907.542969.816407 1.0625 1.3125 1.542969zm149.960938-45.367187c3.210937-.929688 6.519531-1.402344 9.835937-1.402344 15.824219 0 29.9375 10.578125 34.328125 25.726562l14.367188 49.589844-40.121094 11.621094c-.378906-.546875-.816406-1.0625-1.316406-1.542969l-71.144531-68.332031zm-328.9375 106.199218c4.609375-8.371093 12.160156-14.433593 21.261719-17.070312l5.875-1.703125c.378906.546875.816406 1.066406 1.3125 1.542969l71.148437 68.335937-88.292969 25.578125-14.367187-49.589844c-2.636719-9.097656-1.546875-18.71875 3.0625-27.09375zm14.480469 99.074219h87.972656l-42.484375 73.585938h-45.488281zm303.65625 73.585938 42.484374-73.585938h45.488282v73.585938zm0 0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "m303.921875 405.113281c0-3.574219-1.90625-6.875-5-8.660156l-87.855469-50.722656c-3.09375-1.785157-6.90625-1.785157-10 0-3.09375 1.785156-5 5.085937-5 8.660156v101.445313c0 3.570312 1.90625 6.871093 5 8.65625 1.546875.894531 3.273438 1.34375 5 1.34375 1.726563 0 3.453125-.449219 5-1.34375l87.855469-50.71875c3.09375-1.785157 5-5.085938 5-8.660157zm-87.855469 33.402344v-66.804687l57.855469 33.402343zm0 0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 301
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "m234.773438 492c-5.507813 0-10 4.492188-10 10s4.492187 10 10 10c5.511718 0 10-4.492188 10-10s-4.488282-10-10-10zm0 0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306
        },
        __self: this
      }, "Play"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "SearchMaterialType-item",
        id: "item4",
        onClick: this.handleMaterialActive4,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 309
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 310
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "icon mia",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 311
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("svg", {
        height: "511pt",
        viewBox: "-61 1 511 511.99999",
        width: "511pt",
        xmlns: "http://www.w3.org/2000/svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "m361.285156 389.519531h-10.25v-370.953125c0-10.238281-8.328125-18.566406-18.566406-18.566406h-125.253906c-4.214844 0-7.617188 3.414062-7.617188 7.617188 0 4.207031 3.402344 7.617187 7.617188 7.617187h125.253906c1.835938 0 3.332031 1.496094 3.332031 3.332031v370.953125h-232.589843c-15.042969 0-27.28125 12.230469-27.28125 27.273438v50.300781c0 17.964844-16.398438 31.128906-29.609376 29.660156-15.648437 0-30.0625-12.90625-30.585937-30.15625.019531-289.417968.023437-327.046875.023437-330.953125 0-.289062 0-.398437 0-.402343v-.007813h96.933594c18.351563 0 33.292969-14.941406 33.292969-33.292969v-86.707031h30.757813c4.207031 0 7.617187-3.410156 7.617187-7.617187 0-4.203126-3.410156-7.617188-7.617187-7.617188h-33.507813c-5.050781 0-9.847656 1.875-13.613281 5.3125-130.195313 120.476562-125.058594 113.753906-127.304688 119.511719-1.175781 2.570312-1.796875 5.414062-1.796875 8.257812 0 36.445313-.015625 297.199219-.019531 333.898438.726562 25.109375 21.328125 45.019531 46.347656 45.019531 84.640625 0 63.097656-.011719 296.570313 0 .0625 0 .132812 0 .191406-.011719h.050781c14.128906 0 27.628906-6.824219 36.089844-18.25 2.511719-3.382812 1.800781-8.148437-1.582031-10.65625-3.375-2.5-8.148438-1.796875-10.65625 1.585938-4.105469 5.535156-9.976563 9.433593-16.476563 11.128906-5.246094 1.386719 17.292969.957031-270.910156.957031 6.90625-7.972656 11.042969-18.386718 11.042969-29.660156v-50.300781c0-6.632813 5.402343-12.035157 12.042969-12.035157h258.074218c6.644532 0 12.046875 5.402344 12.046875 12.035157v43.527343c0 4.203126 3.414063 7.617188 7.617188 7.617188 4.207031 0 7.617187-3.414062 7.617187-7.617188v-43.527343c0-15.042969-12.238281-27.273438-27.28125-27.273438zm-230.535156-364.523437v76.945312c0 9.953125-8.105469 18.058594-18.058594 18.058594h-85.039062zm0 0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "m299.445312 343.476562h-172.675781c-4.207031 0-7.621093 3.414063-7.621093 7.617188 0 4.207031 3.414062 7.617188 7.621093 7.617188h172.675781c4.207032 0 7.617188-3.410157 7.617188-7.617188 0-4.203125-3.410156-7.617188-7.617188-7.617188zm0 0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "m51.277344 343.476562c-4.207032 0-7.617188 3.414063-7.617188 7.617188 0 4.207031 3.410156 7.617188 7.617188 7.617188h45.019531c4.203125 0 7.617187-3.410157 7.617187-7.617188 0-4.203125-3.414062-7.617188-7.617187-7.617188zm0 0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "m299.445312 295.054688h-248.167968c-4.210938 0-7.621094 3.410156-7.621094 7.617187 0 4.210937 3.410156 7.617187 7.621094 7.617187h248.167968c4.207032 0 7.617188-3.40625 7.617188-7.617187 0-4.207031-3.410156-7.617187-7.617188-7.617187zm0 0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "m299.445312 246.628906h-248.167968c-4.210938 0-7.621094 3.410156-7.621094 7.621094 0 4.207031 3.410156 7.617188 7.621094 7.617188h248.167968c4.207032 0 7.617188-3.410157 7.617188-7.617188 0-4.210938-3.410156-7.621094-7.617188-7.621094zm0 0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "m299.445312 198.203125h-45.015624c-4.207032 0-7.621094 3.414063-7.621094 7.617187 0 4.21875 3.414062 7.621094 7.621094 7.621094h45.015624c4.207032 0 7.617188-3.402344 7.617188-7.621094 0-4.203124-3.410156-7.617187-7.617188-7.617187zm0 0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "m51.277344 213.441406h172.679687c4.203125 0 7.617188-3.402344 7.617188-7.621094 0-4.203124-3.414063-7.617187-7.617188-7.617187h-172.679687c-4.207032 0-7.617188 3.414063-7.617188 7.617187 0 4.21875 3.410156 7.621094 7.617188 7.621094zm0 0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "m299.445312 149.785156h-248.167968c-4.210938 0-7.621094 3.410156-7.621094 7.617188 0 4.207031 3.410156 7.617187 7.621094 7.617187h248.167968c4.207032 0 7.617188-3.410156 7.617188-7.617187 0-4.207032-3.410156-7.617188-7.617188-7.617188zm0 0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "m299.445312 101.359375h-118.03125c-4.207031 0-7.617187 3.410156-7.617187 7.617187 0 4.210938 3.410156 7.621094 7.617187 7.621094h118.03125c4.207032 0 7.617188-3.410156 7.617188-7.621094 0-4.207031-3.410156-7.617187-7.617188-7.617187zm0 0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "m299.445312 52.9375h-118.03125c-4.207031 0-7.617187 3.410156-7.617187 7.617188 0 4.207031 3.410156 7.617187 7.617187 7.617187h118.03125c4.207032 0 7.617188-3.410156 7.617188-7.617187 0-4.207032-3.410156-7.617188-7.617188-7.617188zm0 0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314
        },
        __self: this
      }, "Script"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "SearchMaterialType-item",
        id: "item5",
        onClick: this.handleMaterialActive5,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 318
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "icon mia",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 319
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("svg", {
        version: "1.1",
        id: "Layer_1",
        x: "0px",
        y: "0px",
        viewBox: "0 0 512.017 512.017",
        width: "512",
        height: "512",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 321
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M490.033,21.984c-29.309-29.31-76.754-29.314-106.066,0L317,88.951l-66.967-66.967c-29.308-29.309-76.752-29.315-106.066,0   c-29.31,29.309-29.314,76.754,0,106.066l74.246,74.247L317,103.51l98.787,98.787l74.246-74.247   C519.342,98.741,519.348,51.298,490.033,21.984z M218.213,159.869l-53.033-53.033c-17.586-17.585-17.589-46.051,0-63.639   c17.586-17.586,46.051-17.588,63.64,0l53.033,53.033L218.213,159.869z M468.82,106.836l-53.033,53.033L352.147,96.23l53.033-53.033   c17.585-17.586,46.051-17.589,63.639,0C486.405,60.782,486.409,89.248,468.82,106.836z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("rect", {
        x: "302",
        y: "150.017",
        width: "30",
        height: "30",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 323
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("rect", {
        x: "272",
        y: "210.017",
        width: "30",
        height: "30",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("rect", {
        x: "332",
        y: "210.017",
        width: "30",
        height: "30",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 325
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("rect", {
        x: "242",
        y: "270.017",
        width: "30",
        height: "30",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 326
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("rect", {
        x: "302",
        y: "270.017",
        width: "30",
        height: "30",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 327
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("rect", {
        x: "362",
        y: "270.017",
        width: "30",
        height: "30",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 328
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M176.175,499.757c27.509,6.305,53.493,12.26,91.984,12.26c72.208,0,113.401-24.342,168.004-61.479l75.743-51.515   l-8.244-12.366c-22.964-34.445-69.592-43.394-103.675-19.901c-14.175,9.771-29.069,17.841-44.29,24.088   c-11.723-26.746-38.393-44.827-68.697-44.827l-52.853,0.009c-6.765,0-13.338-2.041-19.009-5.884   c-31.856-21.582-52.493-34.879-74.405-36.257c-22.295-1.408-42.637,10.196-68.26,27.132H0v151h15   C98.769,482.017,139.892,491.442,176.175,499.757z M30,361.017h51.542c15.162-9.542,39.494-28.306,57.309-27.191   c13.856,0.871,31.708,12.351,59.461,31.153c10.657,7.22,23.048,11.036,35.834,11.037L287,376.007   c17.207,0,32.46,9.717,40.008,24.345c-17.064,4.33-34.225,6.337-50.924,5.864c-22.542-0.646-44.818-4.589-66.212-11.72l-8.128-2.71   l-9.487,28.461l8.128,2.709c24.182,8.061,49.362,12.518,74.841,13.247c49.666,1.426,99.916-15.885,141.787-44.747   c16.29-11.228,36.961-9.81,51.34,0.907l-49.061,33.368c-56.255,38.26-89.502,56.286-151.133,56.286   c-35.098,0-58.354-5.33-85.283-11.501c-35.598-8.159-75.658-17.341-152.876-18.398V361.017z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 329
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 334
        },
        __self: this
      }, "Treatment")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "clearMaterialType",
        id: "clearMaterialType",
        onClick: this.handleClear,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 339
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 339
        },
        __self: this
      }, "\u2715  "), " Clear selection ")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("style", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 343
        },
        __self: this
      }, "\n            .titleSearchMenu {\n              cursor: pointer;\n            }\n\n            .titleSearchMenu:hover .searchMaterialsMenu,\n            .titleSearchMenu.active .searchMaterialsMenu{\n              transform: rotate(180deg);\n            }\n\n            .SearchMaterialType {\n              background: #e1e2e4;\n              box-sizing: border-box;\n              font-family: sans-serif;\n              border-radius: 5px;\n              margin-bottom: 10px;\n              background: white;\n              position: relative;\n              text-align: center;\n            } \n\n            .searchMaterialsMenu {\n              position: absolute;\n              top: 23px;\n              right: 20px;\n              cursor: pointer;\n              transition: .25s linear;\n            }\n\n            .searchMaterialsMenu img {\n              width: 15px;\n            }\n\n            .SearchMaterialType-container {\n              display: none;\n            }\n            .SearchMaterialType-container.active {\n              display: block;\n            }\n\n            .SearchMaterialType-items {\n              justify-content: center;\n              align-items: center;\n              flex-wrap: wrap;\n              text-align: center;\n              display: flex;\n              padding: 10px;\n            }\n\n            .SearchMaterialType-item a {\n              text-decoration: none;\n            }\n\n            .SearchMaterialType-item {\n              margin: 10px 10px 20px 10px;\n              cursor: pointer;\n            }\n\n            .SearchMaterialType-item:hover h4:before,\n            .SearchMaterialType-item.active h4:before {\n              width: 100%;\n            }\n\n            .SearchMaterialType-item:hover .icon,\n            .SearchMaterialType-item.active .icon {\n              border: 2px solid #ffa603;\n              background: #1c2d4c;\n            }\n\n            .SearchMaterialType-item:hover svg,\n            .SearchMaterialType-item.active svg{\n              fill: #ffa603;\n            }\n\n            .SearchMaterialType-item path,\n            .SearchMaterialType-item path{\n              stroke-dasharray: 300, 0, 3000;\n          }\n\n            .SearchMaterialType-item:hover svg, \n            .SearchMaterialType-item.active svg {\n              fill: #ffa603;\n            }\n\n            .SearchMaterialType-item:hover path,\n            .SearchMaterialType-item.active path{\n              animation: twitter 2s;\n            }\n\n            .SearchMaterialType-item h4 {\n              margin-top: 10px;\n              color: #1c2d4c;\n              border-bottom: 2px solid transparent;\n              transition: .25s linear;\n              position: relative;\n              display: inline-block;\n            }\n\n            .SearchMaterialType-item h4:before {\n              content: \"\";\n              position: absolute;\n              bottom: -5px;\n              left: 0;\n              height: 2px;\n              width: 0;\n              background: #1c2d4c;\n              transition: .15s linear;\n            }\n\n            .SearchMaterialType-item svg{\n              fill: #1c2d4c;\n              margin: 0 auto;\n              width: 45px;\n              height: 60px;\n              background: transparent;\n              transition: .25s linear;\n            }\n\n            .icon {\n              width: 70px;\n              height: 65px;\n              background: transparent;\n              padding-top: 5px;\n              border-radius: 50%;\n              transition: .25s linear;\n              border: 2px solid #1c2d4c;\n            }\n\n            .clearMaterialType {\n              margin-bottom: 10px;\n              display: none;\n              text-align: center;\n              cursor: pointer;\n              transition: .25s linear;\n              padding: 5px;\n              border: 1px solid transparent;\n              font-weight: 100;\n            }\n\n              .clearMaterialType:hover {\n                background: #1c2d4c;\n                border-radius: 4px;\n                color: orange;\n                border: 1px solid orange;\n              }\n\n            .clearMaterialType.active {\n              display: inline-block;\n            }\n\n            @media screen and (max-width: 767px) {\n              .SearchMaterialType-item h4 {\n                font-size: 12px;\n              }\n              .icon {\n                width: 60px !important;\n                height: 55px !important;\n              }\n\n              .SearchMaterialType-item svg {\n                width: 35px !important;\n                height: 50px !important;\n              }\n            }\n\n          "));
    }
  }]);

  return SearchMaterialType;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SearchMaterialType);

/***/ })

})
//# sourceMappingURL=search.js.1b3b83824985d3d7945e.hot-update.js.map