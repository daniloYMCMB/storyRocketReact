webpackHotUpdate("static/development/pages/search.js",{

/***/ "./components/SearchTags.js":
/*!**********************************!*\
  !*** ./components/SearchTags.js ***!
  \**********************************/
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








var _jsxFileName = "/Users/daniloviacavavizarreta/www/storyrocketreact/components/SearchTags.js";



var KeyCodes = {
  comma: 188,
  enter: 13
};
var delimiters = [KeyCodes.comma, KeyCodes.enter];

var SearchTags =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(SearchTags, _Component);

  function SearchTags(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SearchTags);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(SearchTags).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleTagMenu", function (e) {
      var material = document.getElementById("SearchTags-input");
      material.classList.toggle("active");
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleClear", function (e) {
      _this.setState({
        tags: []
      });

      var clear = document.getElementById("clearTag");
      clear.classList.remove('active');
    });

    _this.state = {
      tags: [// { id: "Thailand", text: "Thailand" },
        // { id: "India", text: "India" }
      ]
    };
    _this.handleDelete = _this.handleDelete.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.handleAddition = _this.handleAddition.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.handleDrag = _this.handleDrag.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(SearchTags, [{
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
      console.log(this.state.tags);
      var ReactTags__selected = document.getElementById("SearchTags-input");

      if (ReactTags__selected.hasChildNodes()) {
        var clear = document.getElementById("clearTag");
        clear.classList.add('active');
      }
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
        className: "SearchTags",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_SearchTitle__WEBPACK_IMPORTED_MODULE_9__["default"], {
        title: "Tags",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        onClick: this.handleTagMenu,
        className: "searchTagMenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "/static/img/arrowUp.svg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "SearchTags-input",
        id: "SearchTags-input",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_tag_input__WEBPACK_IMPORTED_MODULE_10__["WithContext"], {
        tags: tags,
        suggestions: suggestions,
        handleDelete: this.handleDelete,
        handleAddition: this.handleAddition,
        handleDrag: this.handleDrag,
        delimiters: delimiters,
        placeholder: "Search Tag",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "clearTag",
        id: "clearTag",
        onClick: this.handleClear,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, "X "), " Clear selection "), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("style", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, "\n            .SearchTags {\n              background: white;\n              padding: 10px;\n              box-sizing: border-box;\n              font-family: sans-serif;\n              border-radius: 5px;\n              margin-bottom: 10px;\n              position: relative;\n              text-align: center;\n            }\n\n            .SearchTags-input {\n              position: relative;\n              display: none;\n            }\n            .SearchTags-input.active {\n              display: block;\n            }\n\n            .searchTagMenu {\n              position: absolute;\n              top: 23px;\n              right: 20px;\n              cursor: pointer;\n            }\n\n            .searchTagMenu img {\n              width: 15px;\n            }\n\n            .searchTagMenu {\n              position: absolute;\n              top: 23px;\n              right: 20px;\n              cursor: pointer;\n            }\n\n            .SearchTags-input .ReactTags__tagInput{\n              position: absolute;\n              top: -45px;\n              left: 20px;\n              width: 80%;\n              margin: auto;\n            }\n\n            .SearchTags-input .ReactTags__tagInput input{\n              width: 100%;\n              height: 30px;\n              box-sizing: border-box;\n              padding-left: 10px;\n              border: 1px solid #80808038;\n              border-radius: 4px;\n            }\n\n            .SearchTags-input .ReactTags__remove {\n              margin-left: 10px;\n            }\n\n            .ReactTags__selected {\n              margin-top: 70px;\n              text-align: left;\n              padding-left: 17px;\n            }\n\n            .tag-wrapper {\n              background: #1c2d4c;\n              margin: 5px;\n              color: #ff8f17;\n              padding: 5px 10px;\n              font-size: 15px;\n              border-radius: 4px !important;\n              display: inline-block;\n              \n            }\n\n            .clearTag {\n              margin-top: 20px;\n              display: none;\n              text-align: center;\n              cursor: pointer;\n            }\n\n            .clearTag.active {\n              display: block;\n            }\n          "));
    }
  }]);

  return SearchTags;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SearchTags);

/***/ })

})
//# sourceMappingURL=search.js.85a68859f397c41b22de.hot-update.js.map