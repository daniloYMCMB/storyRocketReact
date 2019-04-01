webpackHotUpdate("static/development/pages/search.js",{

/***/ "./components/SearchLocation.js":
/*!**************************************!*\
  !*** ./components/SearchLocation.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _SearchTitle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SearchTitle */ "./components/SearchTitle.js");
/* harmony import */ var react_tag_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-tag-input */ "./node_modules/react-tag-input/dist-modules/components/ReactTags.js");
/* harmony import */ var react_tag_input__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_tag_input__WEBPACK_IMPORTED_MODULE_10__);








var _jsxFileName = "/Users/daniloviacavavizarreta/www/storyrocketreact/components/SearchLocation.js";



var KeyCodes = {
  comma: 188,
  enter: 13
};
var delimiters = [KeyCodes.comma, KeyCodes.enter];

var SearchLocation =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(SearchLocation, _Component);

  function SearchLocation(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SearchLocation);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(SearchLocation).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleMenuLocation", function (e) {
      var material = document.getElementById("SearchLocation-input");
      material.classList.toggle("active");
    });

    _this.state = {
      tags: []
    };
    _this.handleDelete = _this.handleDelete.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.handleAddition = _this.handleAddition.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.handleDrag = _this.handleDrag.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(SearchLocation, [{
    key: "handleDelete",
    value: function handleDelete(i) {
      var tags = this.state.tags;
      this.setState({
        tags: tags.filter(function (tag, index) {
          return index !== i;
        })
      });
    }
  }, {
    key: "handleAddition",
    value: function handleAddition(tag) {
      this.setState(function (state) {
        return {
          tags: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.tags), [tag])
        };
      });
    }
  }, {
    key: "handleDrag",
    value: function handleDrag(tag, currPos, newPos) {
      var tags = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.state.tags);

      var newTags = tags.slice();
      newTags.splice(currPos, 1);
      newTags.splice(newPos, 0, tag); // re-render

      this.setState({
        tags: newTags
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          tags = _this$state.tags,
          suggestions = _this$state.suggestions;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "SearchLocation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_SearchTitle__WEBPACK_IMPORTED_MODULE_9__["default"], {
        title: "Location",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        onClick: this.handleMenuLocation,
        className: "searchLocationMenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "/static/img/arrowUp.svg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "SearchLocation-input",
        id: "SearchLocation-input",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_tag_input__WEBPACK_IMPORTED_MODULE_10__["WithContext"], {
        tags: tags,
        suggestions: suggestions,
        handleDelete: this.handleDelete,
        handleAddition: this.handleAddition,
        handleDrag: this.handleDrag,
        delimiters: delimiters,
        placeholder: "Search Location",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        className: "SearchLocation-image",
        src: "/static/img/search.svg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("style", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, "\n            .SearchLocation {\n              background: white;\n              padding: 10px;\n              box-sizing: border-box;\n              font-family: sans-serif;\n              border-radius: 5px;\n              margin-bottom: 10px;\n              position: relative;\n            }\n\n            .SearchLocation-title {\n              text-align: left;\n              font-size: 18px;\n              font-weight: bold;\n              margin-bottom: 15px;\n            }\n\n            .searchLocationMenu {\n              position: absolute;\n              top: 23px;\n              right: 20px;\n              cursor: pointer;\n            }\n\n            .searchLocationMenu img {\n              width: 15px;\n            }\n\n            .SearchLocation-input {\n              position: relative;\n              display: none;\n            }\n\n            .SearchLocation-input.active {\n              display: block;\n            }\n\n            .SearchLocation-input .ReactTags__tags{\n              position: relative;\n            }\n\n            .SearchLocation-image {\n              position: absolute;\n              top: -37px;\n              right: 27px;\n              width: 20px;\n              height: 20px;\n            }\n\n            .SearchLocation-input .ReactTags__tagInput{\n              position: absolute;\n              top: -45px;\n              left: 15px;\n              width: 90%;\n              margin: auto;\n            }\n\n            .SearchLocation-input .ReactTags__tagInput input{\n              width: 100%;\n              height: 30px;\n              box-sizing: border-box;\n              padding-left: 10px;\n              border:1px solid #0000000f\n            }\n\n            .ReactTags__selected {\n              margin-top: 70px;\n              text-align: left;\n              padding-left: 17px;\n            }\n\n            .tag-wrapper {\n              background: #1c2d4c;\n              margin: 5px;\n              color: #ff8f17;\n              padding: 5px 10px;\n              font-size: 15px;\n              border-radius: 15px;\n              display: inline-block;\n              \n            }\n          "));
    }
  }]);

  return SearchLocation;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SearchLocation);

/***/ })

})
//# sourceMappingURL=search.js.7e02a6065f82ab8953d3.hot-update.js.map