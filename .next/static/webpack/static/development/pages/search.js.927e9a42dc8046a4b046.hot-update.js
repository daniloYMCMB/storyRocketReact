webpackHotUpdate("static/development/pages/search.js",{

/***/ "./components/SearchViews.js":
/*!***********************************!*\
  !*** ./components/SearchViews.js ***!
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _SearchTitle_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SearchTitle.js */ "./components/SearchTitle.js");







var _jsxFileName = "/Users/daniloviacavavizarreta/www/storyrocketreact/components/SearchViews.js";



var SearchViews =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(SearchViews, _Component);

  function SearchViews() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SearchViews);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SearchViews)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleSearchViewActive", function (e) {
      var searchViewItem = document.getElementById("searchViews-item");
      searchViewItem.classList.toggle('active');

      for (var i = 0; i < searchViewItem.length; i++) {
        console.log(searchViewItem);
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleSearchViewActive2", function (e) {
      var searchViewItem = document.getElementById("searchViews-item2");
      searchViewItem.classList.toggle('active');
      var clear = document.getElementById("clearSearchView");
      clear.classList.add('active');
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleSearchViewActive3", function (e) {
      var searchViewItem = document.getElementById("searchViews-item3");
      searchViewItem.classList.toggle('active');
      var clear = document.getElementById("clearSearchView");
      clear.classList.add('active');
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleClear", function (e) {
      var searchViewItem = document.getElementsByClassName("searchViews-item");

      for (var i = 0; i < searchViewItem.length; i++) {
        console.log(searchViewItem);

        if (searchViewItem[i].classList.contains('active')) {
          searchViewItem[i].classList.remove('active');
        }
      }

      var clear = document.getElementById("clearSearchView");
      clear.classList.remove('active');
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SearchViews, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "searchViews",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_SearchTitle_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
        title: "Views",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "searchViews-items",
        id: "SearchMaterialType",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "searchViews-item",
        id: "searchViews-item",
        onClick: this.handleSearchViewActive,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("svg", {
        version: "1.1",
        viewBox: "0 0 512 640",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M446.73,268.439h-45.29c-3.741,0-6.774,3.033-6.774,6.774s3.033,6.774,6.774,6.774h38.515v180.271h-31.74V305.661   c0-3.741-3.033-6.774-6.774-6.774s-6.774,3.033-6.774,6.774v163.372c0,3.741,3.033,6.773,6.774,6.773h45.29   c3.74,0,6.773-3.032,6.773-6.773V275.214C453.504,271.473,450.471,268.439,446.73,268.439z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M361.641,352.701h-45.289c-3.742,0-6.775,3.033-6.775,6.774v109.558c0,3.741,3.033,6.773,6.775,6.773h45.289   c3.741,0,6.773-3.032,6.773-6.773V359.476C368.414,355.734,365.382,352.701,361.641,352.701z M354.866,462.259h-31.741V366.25   h31.741V462.259z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M276.551,390.57h-45.289c-3.742,0-6.774,3.033-6.774,6.775v71.688c0,3.741,3.033,6.773,6.774,6.773h45.289   c3.742,0,6.774-3.032,6.774-6.773v-71.688C283.325,393.604,280.293,390.57,276.551,390.57z M269.776,462.259h-31.741v-58.14h31.741   V462.259z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M191.461,422.544h-45.29c-3.741,0-6.774,3.032-6.774,6.774v39.715c0,3.741,3.033,6.773,6.774,6.773h45.29   c3.741,0,6.774-3.032,6.774-6.773v-39.715C198.235,425.576,195.203,422.544,191.461,422.544z M184.687,462.259h-31.741v-26.166   h31.741V462.259z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M413.077,177.319c1.143-2.308,0.877-5.065-0.685-7.113l-26.73-35.032c-1.281-1.68-3.273-2.666-5.385-2.666   c-2.113,0-4.105,0.986-5.387,2.666l-26.729,35.032c-2.27,2.974-1.697,7.225,1.276,9.495c1.228,0.936,2.672,1.389,4.104,1.389   c2.041,0,4.057-0.917,5.391-2.665l21.344-27.974l13.039,17.09h-13.039c-3.742,0-6.774,3.033-6.774,6.774   c0,97.535-79.351,176.885-176.885,176.885c-3.742,0-6.774,3.033-6.774,6.775c0,3.74,3.033,6.773,6.774,6.773   c102.737,0,186.718-81.78,190.3-183.659h20.088C409.582,181.089,411.936,179.628,413.077,177.319z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M289.732,276.23c0.386-0.295,0.733-0.629,1.048-0.999c27.02-25.228,43.958-61.123,43.958-100.917   c0-76.16-61.961-138.121-138.121-138.121c-3.452,0-6.862,0.17-10.251,0.42c-0.008,0-0.016-0.001-0.024,0   c-0.005,0-0.01,0.002-0.016,0.003c-38.972,2.887-73.493,21.985-96.806,50.595c-0.391,0.383-0.723,0.819-1.013,1.288   c-18.762,23.587-30.013,53.403-30.013,85.814c0,36.062,13.906,68.926,36.62,93.55c0.29,0.378,0.619,0.72,0.981,1.029   c25.207,26.774,60.933,43.542,100.521,43.542C232.463,312.436,265.157,298.703,289.732,276.23z M191.14,274.525   c-14.631-11.31-32.874-17.537-51.368-17.537h-36.23c-19.574-22.013-31.497-50.971-31.497-82.674   c0-28.364,9.547-54.528,25.571-75.492h37.786c9.966,0,18.075,8.108,18.075,18.075c0,9.967-8.109,18.076-18.075,18.076h-18.369   c-15.455,0-28.029,12.574-28.029,28.029c0,15.456,12.574,28.029,28.029,28.029h1.417c9.157,0,16.605,7.45,16.605,16.607   c0,9.157-7.449,16.606-16.605,16.606c-3.742,0-6.774,3.032-6.774,6.774c0,3.741,3.033,6.774,6.774,6.774   c16.627,0,30.154-13.528,30.154-30.155c0-16.628-13.527-30.155-30.154-30.155h-1.417c-7.985,0-14.48-6.496-14.48-14.481   c0-7.985,6.496-14.48,14.48-14.48h18.369c17.437,0,31.624-14.186,31.624-31.625c0-17.438-14.187-31.624-31.624-31.624h-25.785   c19.031-18.599,43.973-31.148,71.714-34.561c5.422,24.208,26.823,41.732,52.294,41.732h19.699c3.741,0,6.773-3.033,6.773-6.774   s-3.032-6.774-6.773-6.774h-19.699c-18.304,0-33.787-12.107-38.555-29.116c0.518-0.006,1.028-0.039,1.547-0.039   c68.689,0,124.572,55.883,124.572,124.573c0,35.244-14.736,67.092-38.342,89.774h-22.665c-7.25,0-13.148-5.897-13.148-13.147   s5.898-13.147,13.148-13.147h2.568c15.05,0,27.294-12.245,27.294-27.294s-12.244-27.293-27.294-27.293h-24.105   c-11.336,0-20.558-9.223-20.558-20.559s9.222-20.558,20.558-20.558h49.802c3.741,0,6.773-3.032,6.773-6.774   s-3.032-6.774-6.773-6.774h-49.802c-18.807,0-34.106,15.3-34.106,34.106s15.3,34.107,34.106,34.107h24.105   c7.579,0,13.745,6.166,13.745,13.745s-6.166,13.745-13.745,13.745h-2.568c-14.721,0-26.696,11.976-26.696,26.696   s11.976,26.695,26.696,26.695h5.951c-19.869,13.412-43.794,21.25-69.516,21.25c-29.976,0-57.51-10.646-79.028-28.351h22.182   c15.511,0,30.811,5.224,43.083,14.708c1.232,0.953,2.691,1.414,4.138,1.414c2.025,0,4.03-0.904,5.364-2.632   C194.645,281.066,194.101,276.813,191.14,274.525z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "Trending"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "searchViews-item",
        id: "searchViews-item2",
        onClick: this.handleSearchViewActive2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("svg", {
        version: "1.1",
        viewBox: "0 0 512 640",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M446.73,268.439h-45.29c-3.741,0-6.774,3.033-6.774,6.774s3.033,6.774,6.774,6.774h38.515v180.271h-31.74V305.661   c0-3.741-3.033-6.774-6.774-6.774s-6.774,3.033-6.774,6.774v163.372c0,3.741,3.033,6.773,6.774,6.773h45.29   c3.74,0,6.773-3.032,6.773-6.773V275.214C453.504,271.473,450.471,268.439,446.73,268.439z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M361.641,352.701h-45.289c-3.742,0-6.775,3.033-6.775,6.774v109.558c0,3.741,3.033,6.773,6.775,6.773h45.289   c3.741,0,6.773-3.032,6.773-6.773V359.476C368.414,355.734,365.382,352.701,361.641,352.701z M354.866,462.259h-31.741V366.25   h31.741V462.259z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M276.551,390.57h-45.289c-3.742,0-6.774,3.033-6.774,6.775v71.688c0,3.741,3.033,6.773,6.774,6.773h45.289   c3.742,0,6.774-3.032,6.774-6.773v-71.688C283.325,393.604,280.293,390.57,276.551,390.57z M269.776,462.259h-31.741v-58.14h31.741   V462.259z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M191.461,422.544h-45.29c-3.741,0-6.774,3.032-6.774,6.774v39.715c0,3.741,3.033,6.773,6.774,6.773h45.29   c3.741,0,6.774-3.032,6.774-6.773v-39.715C198.235,425.576,195.203,422.544,191.461,422.544z M184.687,462.259h-31.741v-26.166   h31.741V462.259z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M413.077,177.319c1.143-2.308,0.877-5.065-0.685-7.113l-26.73-35.032c-1.281-1.68-3.273-2.666-5.385-2.666   c-2.113,0-4.105,0.986-5.387,2.666l-26.729,35.032c-2.27,2.974-1.697,7.225,1.276,9.495c1.228,0.936,2.672,1.389,4.104,1.389   c2.041,0,4.057-0.917,5.391-2.665l21.344-27.974l13.039,17.09h-13.039c-3.742,0-6.774,3.033-6.774,6.774   c0,97.535-79.351,176.885-176.885,176.885c-3.742,0-6.774,3.033-6.774,6.775c0,3.74,3.033,6.773,6.774,6.773   c102.737,0,186.718-81.78,190.3-183.659h20.088C409.582,181.089,411.936,179.628,413.077,177.319z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M289.732,276.23c0.386-0.295,0.733-0.629,1.048-0.999c27.02-25.228,43.958-61.123,43.958-100.917   c0-76.16-61.961-138.121-138.121-138.121c-3.452,0-6.862,0.17-10.251,0.42c-0.008,0-0.016-0.001-0.024,0   c-0.005,0-0.01,0.002-0.016,0.003c-38.972,2.887-73.493,21.985-96.806,50.595c-0.391,0.383-0.723,0.819-1.013,1.288   c-18.762,23.587-30.013,53.403-30.013,85.814c0,36.062,13.906,68.926,36.62,93.55c0.29,0.378,0.619,0.72,0.981,1.029   c25.207,26.774,60.933,43.542,100.521,43.542C232.463,312.436,265.157,298.703,289.732,276.23z M191.14,274.525   c-14.631-11.31-32.874-17.537-51.368-17.537h-36.23c-19.574-22.013-31.497-50.971-31.497-82.674   c0-28.364,9.547-54.528,25.571-75.492h37.786c9.966,0,18.075,8.108,18.075,18.075c0,9.967-8.109,18.076-18.075,18.076h-18.369   c-15.455,0-28.029,12.574-28.029,28.029c0,15.456,12.574,28.029,28.029,28.029h1.417c9.157,0,16.605,7.45,16.605,16.607   c0,9.157-7.449,16.606-16.605,16.606c-3.742,0-6.774,3.032-6.774,6.774c0,3.741,3.033,6.774,6.774,6.774   c16.627,0,30.154-13.528,30.154-30.155c0-16.628-13.527-30.155-30.154-30.155h-1.417c-7.985,0-14.48-6.496-14.48-14.481   c0-7.985,6.496-14.48,14.48-14.48h18.369c17.437,0,31.624-14.186,31.624-31.625c0-17.438-14.187-31.624-31.624-31.624h-25.785   c19.031-18.599,43.973-31.148,71.714-34.561c5.422,24.208,26.823,41.732,52.294,41.732h19.699c3.741,0,6.773-3.033,6.773-6.774   s-3.032-6.774-6.773-6.774h-19.699c-18.304,0-33.787-12.107-38.555-29.116c0.518-0.006,1.028-0.039,1.547-0.039   c68.689,0,124.572,55.883,124.572,124.573c0,35.244-14.736,67.092-38.342,89.774h-22.665c-7.25,0-13.148-5.897-13.148-13.147   s5.898-13.147,13.148-13.147h2.568c15.05,0,27.294-12.245,27.294-27.294s-12.244-27.293-27.294-27.293h-24.105   c-11.336,0-20.558-9.223-20.558-20.559s9.222-20.558,20.558-20.558h49.802c3.741,0,6.773-3.032,6.773-6.774   s-3.032-6.774-6.773-6.774h-49.802c-18.807,0-34.106,15.3-34.106,34.106s15.3,34.107,34.106,34.107h24.105   c7.579,0,13.745,6.166,13.745,13.745s-6.166,13.745-13.745,13.745h-2.568c-14.721,0-26.696,11.976-26.696,26.696   s11.976,26.695,26.696,26.695h5.951c-19.869,13.412-43.794,21.25-69.516,21.25c-29.976,0-57.51-10.646-79.028-28.351h22.182   c15.511,0,30.811,5.224,43.083,14.708c1.232,0.953,2.691,1.414,4.138,1.414c2.025,0,4.03-0.904,5.364-2.632   C194.645,281.066,194.101,276.813,191.14,274.525z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, "Most Views"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "searchViews-item",
        id: "searchViews-item3",
        onClick: this.handleSearchViewActive3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("svg", {
        version: "1.1",
        viewBox: "0 0 512 640",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M446.73,268.439h-45.29c-3.741,0-6.774,3.033-6.774,6.774s3.033,6.774,6.774,6.774h38.515v180.271h-31.74V305.661   c0-3.741-3.033-6.774-6.774-6.774s-6.774,3.033-6.774,6.774v163.372c0,3.741,3.033,6.773,6.774,6.773h45.29   c3.74,0,6.773-3.032,6.773-6.773V275.214C453.504,271.473,450.471,268.439,446.73,268.439z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M361.641,352.701h-45.289c-3.742,0-6.775,3.033-6.775,6.774v109.558c0,3.741,3.033,6.773,6.775,6.773h45.289   c3.741,0,6.773-3.032,6.773-6.773V359.476C368.414,355.734,365.382,352.701,361.641,352.701z M354.866,462.259h-31.741V366.25   h31.741V462.259z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M276.551,390.57h-45.289c-3.742,0-6.774,3.033-6.774,6.775v71.688c0,3.741,3.033,6.773,6.774,6.773h45.289   c3.742,0,6.774-3.032,6.774-6.773v-71.688C283.325,393.604,280.293,390.57,276.551,390.57z M269.776,462.259h-31.741v-58.14h31.741   V462.259z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M191.461,422.544h-45.29c-3.741,0-6.774,3.032-6.774,6.774v39.715c0,3.741,3.033,6.773,6.774,6.773h45.29   c3.741,0,6.774-3.032,6.774-6.773v-39.715C198.235,425.576,195.203,422.544,191.461,422.544z M184.687,462.259h-31.741v-26.166   h31.741V462.259z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M413.077,177.319c1.143-2.308,0.877-5.065-0.685-7.113l-26.73-35.032c-1.281-1.68-3.273-2.666-5.385-2.666   c-2.113,0-4.105,0.986-5.387,2.666l-26.729,35.032c-2.27,2.974-1.697,7.225,1.276,9.495c1.228,0.936,2.672,1.389,4.104,1.389   c2.041,0,4.057-0.917,5.391-2.665l21.344-27.974l13.039,17.09h-13.039c-3.742,0-6.774,3.033-6.774,6.774   c0,97.535-79.351,176.885-176.885,176.885c-3.742,0-6.774,3.033-6.774,6.775c0,3.74,3.033,6.773,6.774,6.773   c102.737,0,186.718-81.78,190.3-183.659h20.088C409.582,181.089,411.936,179.628,413.077,177.319z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M289.732,276.23c0.386-0.295,0.733-0.629,1.048-0.999c27.02-25.228,43.958-61.123,43.958-100.917   c0-76.16-61.961-138.121-138.121-138.121c-3.452,0-6.862,0.17-10.251,0.42c-0.008,0-0.016-0.001-0.024,0   c-0.005,0-0.01,0.002-0.016,0.003c-38.972,2.887-73.493,21.985-96.806,50.595c-0.391,0.383-0.723,0.819-1.013,1.288   c-18.762,23.587-30.013,53.403-30.013,85.814c0,36.062,13.906,68.926,36.62,93.55c0.29,0.378,0.619,0.72,0.981,1.029   c25.207,26.774,60.933,43.542,100.521,43.542C232.463,312.436,265.157,298.703,289.732,276.23z M191.14,274.525   c-14.631-11.31-32.874-17.537-51.368-17.537h-36.23c-19.574-22.013-31.497-50.971-31.497-82.674   c0-28.364,9.547-54.528,25.571-75.492h37.786c9.966,0,18.075,8.108,18.075,18.075c0,9.967-8.109,18.076-18.075,18.076h-18.369   c-15.455,0-28.029,12.574-28.029,28.029c0,15.456,12.574,28.029,28.029,28.029h1.417c9.157,0,16.605,7.45,16.605,16.607   c0,9.157-7.449,16.606-16.605,16.606c-3.742,0-6.774,3.032-6.774,6.774c0,3.741,3.033,6.774,6.774,6.774   c16.627,0,30.154-13.528,30.154-30.155c0-16.628-13.527-30.155-30.154-30.155h-1.417c-7.985,0-14.48-6.496-14.48-14.481   c0-7.985,6.496-14.48,14.48-14.48h18.369c17.437,0,31.624-14.186,31.624-31.625c0-17.438-14.187-31.624-31.624-31.624h-25.785   c19.031-18.599,43.973-31.148,71.714-34.561c5.422,24.208,26.823,41.732,52.294,41.732h19.699c3.741,0,6.773-3.033,6.773-6.774   s-3.032-6.774-6.773-6.774h-19.699c-18.304,0-33.787-12.107-38.555-29.116c0.518-0.006,1.028-0.039,1.547-0.039   c68.689,0,124.572,55.883,124.572,124.573c0,35.244-14.736,67.092-38.342,89.774h-22.665c-7.25,0-13.148-5.897-13.148-13.147   s5.898-13.147,13.148-13.147h2.568c15.05,0,27.294-12.245,27.294-27.294s-12.244-27.293-27.294-27.293h-24.105   c-11.336,0-20.558-9.223-20.558-20.559s9.222-20.558,20.558-20.558h49.802c3.741,0,6.773-3.032,6.773-6.774   s-3.032-6.774-6.773-6.774h-49.802c-18.807,0-34.106,15.3-34.106,34.106s15.3,34.107,34.106,34.107h24.105   c7.579,0,13.745,6.166,13.745,13.745s-6.166,13.745-13.745,13.745h-2.568c-14.721,0-26.696,11.976-26.696,26.696   s11.976,26.695,26.696,26.695h5.951c-19.869,13.412-43.794,21.25-69.516,21.25c-29.976,0-57.51-10.646-79.028-28.351h22.182   c15.511,0,30.811,5.224,43.083,14.708c1.232,0.953,2.691,1.414,4.138,1.414c2.025,0,4.03-0.904,5.364-2.632   C194.645,281.066,194.101,276.813,191.14,274.525z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, "Latest")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "clearSearchView",
        id: "clearSearchView",
        onClick: this.handleClear,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, "X "), " Clear selection "), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("style", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, "\n          .searchViews {\n            background: #e1e2e4;\n            padding: 10px;\n            box-sizing: border-box;\n            font-family: sans-serif;\n            border-radius: 5px;\n            margin-bottom: 10px;\n          }\n\n          .searchViews-items {\n            display: flex;\n            justify-content: space-around;\n            align-items: center;\n            flex-wrap: wrap;\n            text-align: center;\n          }\n\n          .searchViews-item a {\n            text-decoration: none;\n          }\n\n          .searchViews-item {\n            margin: 10px 10px 20px 10px;\n            cursor: pointer;\n          }\n\n          .searchViews-item:hover h4:before,\n          .searchViews-item.active h4:before{\n            width: 100%;\n          }\n\n          .searchViews-item:hover .icon,\n          .searchViews-item.active .icon{\n            border: 2px solid #ffa603;\n            background: #1c2d4c;\n          }\n\n          .searchViews-item:hover svg,\n          .searchViews-item.active svg{\n            fill: #ffa603;\n          }\n\n          .searchViews-item h4 {\n            margin-top: 10px;\n            color: #1c2d4c;\n            border-bottom: 2px solid transparent;\n            transition: .25s linear;\n            position: relative;\n            display: inline-block;\n          }\n\n          .searchViews-item h4:before {\n            content: \"\";\n            position: absolute;\n            bottom: -5px;\n            left: 0;\n            height: 2px;\n            width: 0;\n            background: #1c2d4c;\n            transition: .15s linear;\n          }\n\n          .searchViews-item svg{\n            fill: #1c2d4c;\n            margin: 0 auto;\n            width: 70px;\n            height: 70px;\n            background: transparent;\n            border-radius: 50%;\n            transition: .25s linear;\n          }\n\n          .searchViews-item #tw{\n            stroke-dasharray: 300, 0, 3000;\n          }\n\n          .icon {\n            width: 70px;\n            height: 65px;\n            background: transparent;\n            padding-top: 5px;\n            border-radius: 50%;\n            transition: .25s linear;\n            border: 2px solid #1c2d4c;\n          }\n\n          .clearSearchView {\n            margin-top: 20px;\n            display: none;\n            text-align: center;\n            cursor: pointer;\n          }\n\n          .clearSearchView.active {\n            display: block;\n          }\n\n        "));
    }
  }]);

  return SearchViews;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SearchViews);

/***/ })

})
//# sourceMappingURL=search.js.927e9a42dc8046a4b046.hot-update.js.map