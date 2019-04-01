webpackHotUpdate("static/development/pages/search.js",{

/***/ "./components/PopUpStory.js":
/*!**********************************!*\
  !*** ./components/PopUpStory.js ***!
  \**********************************/
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);







var _jsxFileName = "/Users/daniloviacavavizarreta/www/storyrocketreact/components/PopUpStory.js";




var PopUpStory =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(PopUpStory, _React$Component);

  function PopUpStory(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PopUpStory);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(PopUpStory).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleMenuHamburguesa", function (e) {
      e.preventDefault();
      var headerHamburguesa = document.getElementById('headerMenu-hamburguesa');
      var headerMenuMmobile = document.getElementById('headerMenu-mobile');
      headerHamburguesa.classList.toggle('active');
      headerMenuMmobile.classList.toggle('active');
    });

    _this.state = {};
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PopUpStory, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-104245795" + " " + "PopUpStory",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-104245795" + " " + "box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#popup1",
        className: "jsx-104245795" + " " + "button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "Let me Pop up")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        id: "popup1",
        className: "jsx-104245795" + " " + "overlay",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-104245795" + " " + "popup",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
        className: "jsx-104245795",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "Here i am"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        className: "jsx-104245795" + " " + "close",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, "\xD7"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-104245795" + " " + "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, "Thank to pop me out of that button, but now i'm done so you can close this window."))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "104245795",
        __self: this
      }, ".PopUpStory.jsx-104245795 .button.jsx-104245795{font-size:16px;padding:10px;color:red;border:2px solid #06D85F;cursor:pointer;-webkit-transition:all 0.3s ease-out;transition:all 0.3s ease-out;}.PopUpStory.jsx-104245795 .button.jsx-104245795:hover{background:#06D85F;}.PopUpStory.jsx-104245795 .overlay.jsx-104245795{position:fixed;top:0;bottom:0;left:0;right:0;background:rgba(0,0,0,0.7);-webkit-transition:opacity 500ms;transition:opacity 500ms;visibility:hidden;opacity:0;}.PopUpStory.jsx-104245795 .overlay.jsx-104245795:target{visibility:visible;opacity:1;}.PopUpStory.jsx-104245795 .popup.jsx-104245795{margin:23vh auto;padding:20px;background:#fff;border-radius:5px;width:50vw;height:50vh;position:relative;-webkit-transition:all 5s ease-in-out;transition:all 5s ease-in-out;}.PopUpStory.jsx-104245795 .popup.jsx-104245795 h2.jsx-104245795{margin-top:0;color:#333;font-family:Tahoma,Arial,sans-serif;}.PopUpStory.jsx-104245795 .popup.jsx-104245795 .close.jsx-104245795{position:absolute;top:20px;right:30px;-webkit-transition:all 200ms;transition:all 200ms;font-size:30px;font-weight:bold;-webkit-text-decoration:none;text-decoration:none;color:#333;}.PopUpStory.jsx-104245795 .popup.jsx-104245795 .close.jsx-104245795:hover{color:#06D85F;}.PopUpStory.jsx-104245795 .popup.jsx-104245795 .content.jsx-104245795{max-height:30%;overflow:auto;}@media screen and (max-width:700px){.PopUpStory.jsx-104245795 .box.jsx-104245795{width:70%;}.PopUpStory.jsx-104245795 .popup.jsx-104245795{width:70%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pbG92aWFjYXZhdml6YXJyZXRhL3d3dy9zdG9yeXJvY2tldHJlYWN0L2NvbXBvbmVudHMvUG9wVXBTdG9yeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1Q2lCLEFBTXdCLEFBUUksQUFJSixBQVdJLEFBS0YsQUFXSixBQUtLLEFBVUosQUFHQyxBQU1ILEFBR0EsVUFGWixBQUdBLEdBM0JXLENBZWIsQ0F0RGUsQUFZUCxBQTZDUSxFQTdCRCxDQWdCSixDQXBDWCxBQWVZLEVBVkQsR0EyQjZCLEdBSzNCLENBNUNELENBdUJaLEFBa0NBLENBNUNTLEFBZVMsT0FkUixDQWJpQixBQTRDSixPQTlCUyxDQWNaLGNBV3BCLEdBdENpQixDQTRCSixRQWRjLEdBZWIsR0E1QmlCLFNBNkJYLENBY0gsZUFDRSxFQWRhLGVBZVQsVUEvQkgsY0FicEIsSUFjWSxVQUNaLFlBOEJhLEdBZmIsUUFnQkEiLCJmaWxlIjoiL1VzZXJzL2Rhbmlsb3ZpYWNhdmF2aXphcnJldGEvd3d3L3N0b3J5cm9ja2V0cmVhY3QvY29tcG9uZW50cy9Qb3BVcFN0b3J5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY2xhc3MgUG9wVXBTdG9yeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdH07XG5cdH1cblxuXHRoYW5kbGVNZW51SGFtYnVyZ3Vlc2EgPSAoZSkgPT4ge1xuXHRcdGUucHJldmVudERlZmF1bHQoKVxuXG5cdFx0Y29uc3QgaGVhZGVySGFtYnVyZ3Vlc2EgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyTWVudS1oYW1idXJndWVzYScpXG5cdFx0Y29uc3QgaGVhZGVyTWVudU1tb2JpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyTWVudS1tb2JpbGUnKVxuXG5cdFx0aGVhZGVySGFtYnVyZ3Vlc2EuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJylcblx0XHRoZWFkZXJNZW51TW1vYmlsZS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKVxuXHR9XG5cblx0cmVuZGVyICgpIHtcblxuXHRcdHJldHVybiBcdDxkaXYgY2xhc3NOYW1lPVwiUG9wVXBTdG9yeVwiPlxuXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJib3hcIj5cblx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cImJ1dHRvblwiIGhyZWY9XCIjcG9wdXAxXCI+TGV0IG1lIFBvcCB1cDwvYT5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDxkaXYgaWQ9XCJwb3B1cDFcIiBjbGFzc05hbWU9XCJvdmVybGF5XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvcHVwXCI+XG5cdFx0XHRcdFx0XHRcdDxoMj5IZXJlIGkgYW08L2gyPlxuXHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJjbG9zZVwiIGhyZWY9XCIjXCI+JnRpbWVzOzwvYT5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG5cdFx0XHRcdFx0XHRcdFx0VGhhbmsgdG8gcG9wIG1lIG91dCBvZiB0aGF0IGJ1dHRvbiwgYnV0IG5vdyBpJ20gZG9uZSBzbyB5b3UgY2FuIGNsb3NlIHRoaXMgd2luZG93LlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0XHRcdFx0LlBvcFVwU3RvcnkgLmJveCB7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC5Qb3BVcFN0b3J5IC5idXR0b24ge1xuXHRcdFx0XHRcdFx0ICBmb250LXNpemU6IDE2cHg7XG5cdFx0XHRcdFx0XHQgIHBhZGRpbmc6IDEwcHg7XG5cdFx0XHRcdFx0XHQgIGNvbG9yOiByZWQ7XG5cdFx0XHRcdFx0XHQgIGJvcmRlcjogMnB4IHNvbGlkICMwNkQ4NUY7XG5cdFx0XHRcdFx0XHQgIGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdFx0XHRcdCAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuUG9wVXBTdG9yeSAuYnV0dG9uOmhvdmVyIHtcblx0XHRcdFx0XHRcdCAgYmFja2dyb3VuZDogIzA2RDg1Rjtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LlBvcFVwU3RvcnkgLm92ZXJsYXkge1xuXHRcdFx0XHRcdFx0ICBwb3NpdGlvbjogZml4ZWQ7XG5cdFx0XHRcdFx0XHQgIHRvcDogMDtcblx0XHRcdFx0XHRcdCAgYm90dG9tOiAwO1xuXHRcdFx0XHRcdFx0ICBsZWZ0OiAwO1xuXHRcdFx0XHRcdFx0ICByaWdodDogMDtcblx0XHRcdFx0XHRcdCAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xuXHRcdFx0XHRcdFx0ICB0cmFuc2l0aW9uOiBvcGFjaXR5IDUwMG1zO1xuXHRcdFx0XHRcdFx0ICB2aXNpYmlsaXR5OiBoaWRkZW47XG5cdFx0XHRcdFx0XHQgIG9wYWNpdHk6IDA7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuUG9wVXBTdG9yeSAub3ZlcmxheTp0YXJnZXQge1xuXHRcdFx0XHRcdFx0ICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuXHRcdFx0XHRcdFx0ICBvcGFjaXR5OiAxO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQuUG9wVXBTdG9yeSAucG9wdXAge1xuXHRcdFx0XHRcdFx0ICBtYXJnaW46IDIzdmggYXV0bztcblx0XHRcdFx0XHRcdCAgcGFkZGluZzogMjBweDtcblx0XHRcdFx0XHRcdCAgYmFja2dyb3VuZDogI2ZmZjtcblx0XHRcdFx0XHRcdCAgYm9yZGVyLXJhZGl1czogNXB4O1xuXHRcdFx0XHRcdFx0ICB3aWR0aDogNTB2dztcblx0XHRcdFx0XHRcdCAgaGVpZ2h0OiA1MHZoO1xuXHRcdFx0XHRcdFx0ICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdFx0XHQgIHRyYW5zaXRpb246IGFsbCA1cyBlYXNlLWluLW91dDtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LlBvcFVwU3RvcnkgLnBvcHVwIGgyIHtcblx0XHRcdFx0XHRcdCAgbWFyZ2luLXRvcDogMDtcblx0XHRcdFx0XHRcdCAgY29sb3I6ICMzMzM7XG5cdFx0XHRcdFx0XHQgIGZvbnQtZmFtaWx5OiBUYWhvbWEsIEFyaWFsLCBzYW5zLXNlcmlmO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LlBvcFVwU3RvcnkgLnBvcHVwIC5jbG9zZSB7XG5cdFx0XHRcdFx0XHQgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHRcdCAgdG9wOiAyMHB4O1xuXHRcdFx0XHRcdFx0ICByaWdodDogMzBweDtcblx0XHRcdFx0XHRcdCAgdHJhbnNpdGlvbjogYWxsIDIwMG1zO1xuXHRcdFx0XHRcdFx0ICBmb250LXNpemU6IDMwcHg7XG5cdFx0XHRcdFx0XHQgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRcdFx0XHRcdFx0ICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdFx0XHRcdFx0XHQgIGNvbG9yOiAjMzMzO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LlBvcFVwU3RvcnkgLnBvcHVwIC5jbG9zZTpob3ZlciB7XG5cdFx0XHRcdFx0XHQgIGNvbG9yOiAjMDZEODVGO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LlBvcFVwU3RvcnkgLnBvcHVwIC5jb250ZW50IHtcblx0XHRcdFx0XHRcdCAgbWF4LWhlaWdodDogMzAlO1xuXHRcdFx0XHRcdFx0ICBvdmVyZmxvdzogYXV0bztcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpe1xuXHRcdFx0XHRcdFx0ICAuUG9wVXBTdG9yeSAuYm94e1xuXHRcdFx0XHRcdFx0ICAgIHdpZHRoOiA3MCU7XG5cdFx0XHRcdFx0XHQgIH1cblx0XHRcdFx0XHRcdCAgLlBvcFVwU3RvcnkgLnBvcHVwe1xuXHRcdFx0XHRcdFx0ICAgIHdpZHRoOiA3MCU7XG5cdFx0XHRcdFx0XHQgIH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRgfTwvc3R5bGU+XG5cdFx0XHRcdDwvZGl2PlxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvcFVwU3Rvcnk7Il19 */\n/*@ sourceURL=/Users/daniloviacavavizarreta/www/storyrocketreact/components/PopUpStory.js */"));
    }
  }]);

  return PopUpStory;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (PopUpStory);

/***/ })

})
//# sourceMappingURL=search.js.baf4dacd957b5dd2c203.hot-update.js.map