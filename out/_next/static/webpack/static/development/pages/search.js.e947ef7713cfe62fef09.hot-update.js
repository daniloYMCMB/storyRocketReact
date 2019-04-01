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
      var clear = document.getElementById("clearSearchView");
      clear.classList.add('active');
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
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_SearchTitle_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
        title: "Views",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "searchViews-items",
        id: "SearchMaterialType",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "searchViews-item",
        id: "searchViews-item",
        onClick: this.handleSearchViewActive,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "icon mia",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("svg", {
        className: "trendingIcon",
        style: {
          width: 50,
          borderRadius: 0,
          height: 70
        },
        version: "1.1",
        viewBox: "0 0 512 640",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        className: "tw",
        d: "M446.73,268.439h-45.29c-3.741,0-6.774,3.033-6.774,6.774s3.033,6.774,6.774,6.774h38.515v180.271h-31.74V305.661   c0-3.741-3.033-6.774-6.774-6.774s-6.774,3.033-6.774,6.774v163.372c0,3.741,3.033,6.773,6.774,6.773h45.29   c3.74,0,6.773-3.032,6.773-6.773V275.214C453.504,271.473,450.471,268.439,446.73,268.439z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        className: "tw",
        d: "M361.641,352.701h-45.289c-3.742,0-6.775,3.033-6.775,6.774v109.558c0,3.741,3.033,6.773,6.775,6.773h45.289   c3.741,0,6.773-3.032,6.773-6.773V359.476C368.414,355.734,365.382,352.701,361.641,352.701z M354.866,462.259h-31.741V366.25   h31.741V462.259z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        className: "tw",
        d: "M276.551,390.57h-45.289c-3.742,0-6.774,3.033-6.774,6.775v71.688c0,3.741,3.033,6.773,6.774,6.773h45.289   c3.742,0,6.774-3.032,6.774-6.773v-71.688C283.325,393.604,280.293,390.57,276.551,390.57z M269.776,462.259h-31.741v-58.14h31.741   V462.259z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        className: "tw",
        d: "M191.461,422.544h-45.29c-3.741,0-6.774,3.032-6.774,6.774v39.715c0,3.741,3.033,6.773,6.774,6.773h45.29   c3.741,0,6.774-3.032,6.774-6.773v-39.715C198.235,425.576,195.203,422.544,191.461,422.544z M184.687,462.259h-31.741v-26.166   h31.741V462.259z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        className: "tw",
        d: "M413.077,177.319c1.143-2.308,0.877-5.065-0.685-7.113l-26.73-35.032c-1.281-1.68-3.273-2.666-5.385-2.666   c-2.113,0-4.105,0.986-5.387,2.666l-26.729,35.032c-2.27,2.974-1.697,7.225,1.276,9.495c1.228,0.936,2.672,1.389,4.104,1.389   c2.041,0,4.057-0.917,5.391-2.665l21.344-27.974l13.039,17.09h-13.039c-3.742,0-6.774,3.033-6.774,6.774   c0,97.535-79.351,176.885-176.885,176.885c-3.742,0-6.774,3.033-6.774,6.775c0,3.74,3.033,6.773,6.774,6.773   c102.737,0,186.718-81.78,190.3-183.659h20.088C409.582,181.089,411.936,179.628,413.077,177.319z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        className: "tw",
        d: "M289.732,276.23c0.386-0.295,0.733-0.629,1.048-0.999c27.02-25.228,43.958-61.123,43.958-100.917   c0-76.16-61.961-138.121-138.121-138.121c-3.452,0-6.862,0.17-10.251,0.42c-0.008,0-0.016-0.001-0.024,0   c-0.005,0-0.01,0.002-0.016,0.003c-38.972,2.887-73.493,21.985-96.806,50.595c-0.391,0.383-0.723,0.819-1.013,1.288   c-18.762,23.587-30.013,53.403-30.013,85.814c0,36.062,13.906,68.926,36.62,93.55c0.29,0.378,0.619,0.72,0.981,1.029   c25.207,26.774,60.933,43.542,100.521,43.542C232.463,312.436,265.157,298.703,289.732,276.23z M191.14,274.525   c-14.631-11.31-32.874-17.537-51.368-17.537h-36.23c-19.574-22.013-31.497-50.971-31.497-82.674   c0-28.364,9.547-54.528,25.571-75.492h37.786c9.966,0,18.075,8.108,18.075,18.075c0,9.967-8.109,18.076-18.075,18.076h-18.369   c-15.455,0-28.029,12.574-28.029,28.029c0,15.456,12.574,28.029,28.029,28.029h1.417c9.157,0,16.605,7.45,16.605,16.607   c0,9.157-7.449,16.606-16.605,16.606c-3.742,0-6.774,3.032-6.774,6.774c0,3.741,3.033,6.774,6.774,6.774   c16.627,0,30.154-13.528,30.154-30.155c0-16.628-13.527-30.155-30.154-30.155h-1.417c-7.985,0-14.48-6.496-14.48-14.481   c0-7.985,6.496-14.48,14.48-14.48h18.369c17.437,0,31.624-14.186,31.624-31.625c0-17.438-14.187-31.624-31.624-31.624h-25.785   c19.031-18.599,43.973-31.148,71.714-34.561c5.422,24.208,26.823,41.732,52.294,41.732h19.699c3.741,0,6.773-3.033,6.773-6.774   s-3.032-6.774-6.773-6.774h-19.699c-18.304,0-33.787-12.107-38.555-29.116c0.518-0.006,1.028-0.039,1.547-0.039   c68.689,0,124.572,55.883,124.572,124.573c0,35.244-14.736,67.092-38.342,89.774h-22.665c-7.25,0-13.148-5.897-13.148-13.147   s5.898-13.147,13.148-13.147h2.568c15.05,0,27.294-12.245,27.294-27.294s-12.244-27.293-27.294-27.293h-24.105   c-11.336,0-20.558-9.223-20.558-20.559s9.222-20.558,20.558-20.558h49.802c3.741,0,6.773-3.032,6.773-6.774   s-3.032-6.774-6.773-6.774h-49.802c-18.807,0-34.106,15.3-34.106,34.106s15.3,34.107,34.106,34.107h24.105   c7.579,0,13.745,6.166,13.745,13.745s-6.166,13.745-13.745,13.745h-2.568c-14.721,0-26.696,11.976-26.696,26.696   s11.976,26.695,26.696,26.695h5.951c-19.869,13.412-43.794,21.25-69.516,21.25c-29.976,0-57.51-10.646-79.028-28.351h22.182   c15.511,0,30.811,5.224,43.083,14.708c1.232,0.953,2.691,1.414,4.138,1.414c2.025,0,4.03-0.904,5.364-2.632   C194.645,281.066,194.101,276.813,191.14,274.525z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, "Trending"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "searchViews-item",
        id: "searchViews-item2",
        onClick: this.handleSearchViewActive2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "icon mia",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("svg", {
        style: {
          width: 40,
          borderRadius: 0,
          height: 64
        },
        height: "512pt",
        viewBox: "0 -20 512 512",
        width: "512pt",
        xmlns: "http://www.w3.org/2000/svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "m256.238281 368c-4.421875 0-8.039062-3.574219-8.039062-8s3.535156-8 7.953125-8h.085937c4.417969 0 8 3.574219 8 8s-3.582031 8-8 8zm0 0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "m504 352h-495.625c-4.421875 0-8-3.574219-8-8s3.578125-8 8-8h495.625c4.425781 0 8 3.574219 8 8s-3.574219 8-8 8zm0 0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "m488 384h-464c-13.230469 0-24-10.769531-24-24v-336c0-13.230469 10.769531-24 24-24h464c13.230469 0 24 10.769531 24 24v336c0 13.230469-10.769531 24-24 24zm-464-368c-4.414062 0-8 3.585938-8 8v336c0 4.414062 3.585938 8 8 8h464c4.414062 0 8-3.585938 8-8v-336c0-4.414062-3.585938-8-8-8zm0 0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "m184.007812 448c-.640624 0-1.296874-.078125-1.945312-.238281-4.285156-1.074219-6.894531-5.417969-5.824219-9.699219l16-64c1.066407-4.292969 5.417969-6.917969 9.699219-5.824219 4.285156 1.074219 6.894531 5.417969 5.824219 9.699219l-16 64c-.914063 3.636719-4.167969 6.0625-7.753907 6.0625zm0 0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "m327.992188 448c-3.585938 0-6.839844-2.425781-7.753907-6.0625l-16-64c-1.078125-4.28125 1.53125-8.625 5.824219-9.699219 4.273438-1.101562 8.625 1.53125 9.699219 5.824219l16 64c1.078125 4.28125-1.53125 8.625-5.824219 9.699219-.648438.160156-1.304688.238281-1.945312.238281zm0 0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "m152 464c-4.425781 0-8-3.574219-8-8 0-13.230469 10.769531-24 24-24 4.425781 0 8 3.574219 8 8s-3.574219 8-8 8c-4.414062 0-8 3.585938-8 8 0 4.425781-3.574219 8-8 8zm0 0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "m360 464c-4.425781 0-8-3.574219-8-8 0-4.414062-3.585938-8-8-8-4.425781 0-8-3.574219-8-8s3.574219-8 8-8c13.230469 0 24 10.769531 24 24 0 4.425781-3.574219 8-8 8zm0 0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "m344 448h-176c-4.425781 0-8-3.574219-8-8s3.574219-8 8-8h176c4.425781 0 8 3.574219 8 8s-3.574219 8-8 8zm0 0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "m152 472c-4.425781 0-8-3.574219-8-8v-8c0-4.425781 3.574219-8 8-8s8 3.574219 8 8v8c0 4.425781-3.574219 8-8 8zm0 0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "m360 472h-208c-4.425781 0-8-3.574219-8-8s3.574219-8 8-8h208c4.425781 0 8 3.574219 8 8s-3.574219 8-8 8zm0 0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "m360 472c-4.425781 0-8-3.574219-8-8v-8c0-4.425781 3.574219-8 8-8s8 3.574219 8 8v8c0 4.425781-3.574219 8-8 8zm0 0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "m256 296c-73.777344 0-143.289062-42.160156-190.71875-115.664062-1.714844-2.640626-1.714844-6.03125 0-8.671876 47.429688-73.503906 116.941406-115.664062 190.71875-115.664062s143.289062 42.160156 190.71875 115.664062c1.714844 2.640626 1.714844 6.03125 0 8.671876-47.429688 73.503906-116.941406 115.664062-190.71875 115.664062zm-174.433594-120c44.320313 66.167969 107.640625 104 174.433594 104s130.113281-37.832031 174.433594-104c-44.320313-66.167969-107.640625-104-174.433594-104s-130.113281 37.832031-174.433594 104zm0 0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "m256 264c-48.519531 0-88-39.480469-88-88s39.480469-88 88-88 88 39.480469 88 88-39.480469 88-88 88zm0-160c-39.703125 0-72 32.296875-72 72s32.296875 72 72 72 72-32.296875 72-72-32.296875-72-72-72zm0 0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "m256 208c-17.648438 0-32-14.351562-32-32s14.351562-32 32-32 32 14.351562 32 32-14.351562 32-32 32zm0-48c-8.824219 0-16 7.175781-16 16s7.175781 16 16 16 16-7.175781 16-16-7.175781-16-16-16zm0 0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, "Most Views"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "searchViews-item",
        id: "searchViews-item3",
        onClick: this.handleSearchViewActive3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "icon mia",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("svg", {
        style: {
          width: 37,
          borderRadius: 0,
          height: 60
        },
        viewBox: "0 0 512.017 512.017",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        transform: "translate(0 -1)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M392.512,128.748v-3.081L276.828,1.017h-3.182c-0.118-0.007-0.235,0.002-0.353,0H0.038v512h392.474V129.175 C392.516,129.033,392.516,128.891,392.512,128.748z M364.415,120.484h-82.779V31.29L364.415,120.484z M17.105,495.951V18.084 H264.57v110.933c0,4.713,3.82,8.533,8.533,8.533h102.342v358.4H17.105z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M341.312,222.884h-128c-4.713,0-8.533,3.82-8.533,8.533s3.821,8.533,8.533,8.533h128c4.713,0,8.533-3.82,8.533-8.533 S346.025,222.884,341.312,222.884z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M213.312,205.817h110.933c4.713,0,8.533-3.82,8.533-8.533s-3.82-8.533-8.533-8.533H213.312 c-4.713,0-8.533,3.82-8.533,8.533S208.599,205.817,213.312,205.817z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M141.566,190.451c-3.773-2.823-9.121-2.053-11.945,1.72l-19.639,26.247l-10.102-10.102 c-3.332-3.332-8.735-3.332-12.068,0s-3.332,8.735,0,12.068l17.067,17.067c3.675,3.675,9.753,3.239,12.866-0.922l25.54-34.133 C146.11,198.623,145.34,193.275,141.566,190.451z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M110.912,146.084c-37.703,0-68.267,30.564-68.267,68.267c0,37.703,30.564,68.267,68.267,68.267 s68.267-30.564,68.267-68.267C179.179,176.648,148.615,146.084,110.912,146.084z M110.912,265.551 c-28.277,0-51.2-22.923-51.2-51.2c0-28.277,22.923-51.2,51.2-51.2s51.2,22.923,51.2,51.2 C162.112,242.628,139.189,265.551,110.912,265.551z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M341.312,402.084h-128c-4.713,0-8.533,3.82-8.533,8.533s3.821,8.533,8.533,8.533h128c4.713,0,8.533-3.82,8.533-8.533 S346.025,402.084,341.312,402.084z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M213.312,385.017h110.933c4.713,0,8.533-3.82,8.533-8.533s-3.82-8.533-8.533-8.533H213.312 c-4.713,0-8.533,3.82-8.533,8.533S208.599,385.017,213.312,385.017z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M141.566,369.651c-3.773-2.823-9.121-2.053-11.945,1.72l-19.639,26.247l-10.102-10.102 c-3.332-3.332-8.735-3.332-12.068,0s-3.332,8.735,0,12.068l17.067,17.067c3.675,3.675,9.753,3.239,12.866-0.922l25.54-34.133 C146.11,377.823,145.34,372.475,141.566,369.651z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M110.912,325.284c-37.703,0-68.267,30.564-68.267,68.267c0,37.703,30.564,68.267,68.267,68.267 s68.267-30.564,68.267-68.267C179.179,355.848,148.615,325.284,110.912,325.284z M110.912,444.751 c-28.277,0-51.2-22.923-51.2-51.2c0-28.277,22.923-51.2,51.2-51.2s51.2,22.923,51.2,51.2 C162.112,421.828,139.189,444.751,110.912,444.751z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M486.507,1.017h-34.389c-14.065,0-25.472,11.407-25.472,25.472v34.261v51.2v318l34.133,59.733v14.8 c0,4.713,3.82,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-14.801l34.133-59.733v-318v-51.2V26.489 C511.979,12.424,500.572,1.017,486.507,1.017z M443.712,77.817h51.2v17.067h-51.2V77.817z M469.312,470.218l-19.429-34.001 h38.858L469.312,470.218z M494.912,419.151h-51.2v-307.2h51.2V419.151z M443.712,60.751V26.489c0-4.64,3.766-8.405,8.405-8.405 h34.389c4.64,0,8.405,3.766,8.405,8.405v34.261H443.712z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, "Latest")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "clearSearchView",
        id: "clearSearchView",
        onClick: this.handleClear,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, "\u2715 "), " Clear selection "), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("style", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, "\n          .searchViews {\n            background: #e1e2e4;\n            box-sizing: border-box;\n            font-family: sans-serif;\n            border-radius: 5px;\n            margin-bottom: 10px;\n            text-align: center;\n          }\n\n          .searchViews-items {\n            display: flex;\n            justify-content: space-around;\n            align-items: center;\n            flex-wrap: wrap;\n            text-align: center;\n          }\n\n          .searchViews-item a {\n            text-decoration: none;\n          }\n\n          .searchViews-item {\n            margin: 10px 10px 20px 10px;\n            cursor: pointer;\n          }\n\n          .searchViews-item:hover h4:before,\n          .searchViews-item.active h4:before{\n            width: 100%;\n          }\n\n          .searchViews-item:hover .icon,\n          .searchViews-item.active .icon{\n            border: 2px solid #ffa603;\n            background: #1c2d4c;\n          }\n\n          .searchViews-item:hover svg,\n          .searchViews-item.active svg{\n            fill: #ffa603;\n          }\n\n          .searchViews-item path,\n          .searchViews-item path{\n            stroke-dasharray: 300, 0, 3000;\n          }\n\n          .searchViews-item:hover path,\n          .searchViews-item.active path{\n            animation: twitter 2s;\n          }\n\n          .searchViews-item h4 {\n            margin-top: 10px;\n            color: #1c2d4c;\n            border-bottom: 2px solid transparent;\n            transition: .25s linear;\n            position: relative;\n            display: inline-block;\n          }\n\n          .searchViews-item h4:before {\n            content: \"\";\n            position: absolute;\n            bottom: -5px;\n            left: 0;\n            height: 2px;\n            width: 0;\n            background: #1c2d4c;\n            transition: .15s linear;\n          }\n\n          .searchViews-item svg{\n            fill: #1c2d4c;\n            margin: 0 auto;\n            width: 70px;\n            height: 70px;\n            background: transparent;\n            border-radius: 50%;\n            transition: .25s linear;\n          }\n\n          .icon {\n            width: 70px;\n            height: 65px;\n            background: transparent;\n            padding-top: 5px;\n            border-radius: 50%;\n            transition: .25s linear;\n            border: 2px solid #1c2d4c;\n          }\n\n          .clearSearchView {\n            margin: 10px auto;\n            display: none;\n            text-align: center;\n            cursor: pointer;\n            transition: .25s linear;\n            padding: 5px;\n            border: 1px solid transparent;\n            font-weight: 100;\n          }\n\n          .clearSearchView:hover {\n            background: #1c2d4c;\n            border-radius: 4px;\n            color: orange;\n            border: 1px solid orange;\n          }\n\n          .clearSearchView.active {\n            display: inline-block;\n          }\n\n          @media screen and (max-width: 767px) {\n            \n\n            .searchViews-item .trendingIcon {\n              height: 60px !important;\n            }\n          }\n\n        "));
    }
  }]);

  return SearchViews;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SearchViews);

/***/ })

})
//# sourceMappingURL=search.js.e947ef7713cfe62fef09.hot-update.js.map