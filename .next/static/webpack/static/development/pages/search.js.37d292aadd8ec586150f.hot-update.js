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
      }, "T\xEDtulo de Pop up"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
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
      }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis incidunt suscipit, doloribus ratione veniam id earum dolorem distinctio nulla consectetur sunt esse molestiae alias, libero vero quas exercitationem nesciunt voluptatem!"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "104245795",
        __self: this
      }, ".PopUpStory.jsx-104245795 .button.jsx-104245795{font-size:16px;padding:10px;color:red;border:2px solid #06D85F;cursor:pointer;-webkit-transition:all 0.3s ease-out;transition:all 0.3s ease-out;}.PopUpStory.jsx-104245795 .button.jsx-104245795:hover{background:#06D85F;}.PopUpStory.jsx-104245795 .overlay.jsx-104245795{position:fixed;top:0;bottom:0;left:0;right:0;background:rgba(0,0,0,0.7);-webkit-transition:opacity 500ms;transition:opacity 500ms;visibility:hidden;opacity:0;}.PopUpStory.jsx-104245795 .overlay.jsx-104245795:target{visibility:visible;opacity:1;}.PopUpStory.jsx-104245795 .popup.jsx-104245795{margin:23vh auto;padding:20px;background:#fff;border-radius:5px;width:50vw;height:50vh;position:relative;-webkit-transition:all 5s ease-in-out;transition:all 5s ease-in-out;}.PopUpStory.jsx-104245795 .popup.jsx-104245795 h2.jsx-104245795{margin-top:0;color:#333;font-family:Tahoma,Arial,sans-serif;}.PopUpStory.jsx-104245795 .popup.jsx-104245795 .close.jsx-104245795{position:absolute;top:20px;right:30px;-webkit-transition:all 200ms;transition:all 200ms;font-size:30px;font-weight:bold;-webkit-text-decoration:none;text-decoration:none;color:#333;}.PopUpStory.jsx-104245795 .popup.jsx-104245795 .close.jsx-104245795:hover{color:#06D85F;}.PopUpStory.jsx-104245795 .popup.jsx-104245795 .content.jsx-104245795{max-height:30%;overflow:auto;}@media screen and (max-width:700px){.PopUpStory.jsx-104245795 .box.jsx-104245795{width:70%;}.PopUpStory.jsx-104245795 .popup.jsx-104245795{width:70%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pbG92aWFjYXZhdml6YXJyZXRhL3d3dy9zdG9yeXJvY2tldHJlYWN0L2NvbXBvbmVudHMvUG9wVXBTdG9yeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1Q2lCLEFBTXdCLEFBUUksQUFJSixBQVdJLEFBS0YsQUFXSixBQUtLLEFBVUosQUFHQyxBQU1ILEFBR0EsVUFGWixBQUdBLEdBM0JXLENBZWIsQ0F0RGUsQUFZUCxBQTZDUSxFQTdCRCxDQWdCSixDQXBDWCxBQWVZLEVBVkQsR0EyQjZCLEdBSzNCLENBNUNELENBdUJaLEFBa0NBLENBNUNTLEFBZVMsT0FkUixDQWJpQixBQTRDSixPQTlCUyxDQWNaLGNBV3BCLEdBdENpQixDQTRCSixRQWRjLEdBZWIsR0E1QmlCLFNBNkJYLENBY0gsZUFDRSxFQWRhLGVBZVQsVUEvQkgsY0FicEIsSUFjWSxVQUNaLFlBOEJhLEdBZmIsUUFnQkEiLCJmaWxlIjoiL1VzZXJzL2Rhbmlsb3ZpYWNhdmF2aXphcnJldGEvd3d3L3N0b3J5cm9ja2V0cmVhY3QvY29tcG9uZW50cy9Qb3BVcFN0b3J5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY2xhc3MgUG9wVXBTdG9yeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdH07XG5cdH1cblxuXHRoYW5kbGVNZW51SGFtYnVyZ3Vlc2EgPSAoZSkgPT4ge1xuXHRcdGUucHJldmVudERlZmF1bHQoKVxuXG5cdFx0Y29uc3QgaGVhZGVySGFtYnVyZ3Vlc2EgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyTWVudS1oYW1idXJndWVzYScpXG5cdFx0Y29uc3QgaGVhZGVyTWVudU1tb2JpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyTWVudS1tb2JpbGUnKVxuXG5cdFx0aGVhZGVySGFtYnVyZ3Vlc2EuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJylcblx0XHRoZWFkZXJNZW51TW1vYmlsZS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKVxuXHR9XG5cblx0cmVuZGVyICgpIHtcblxuXHRcdHJldHVybiBcdDxkaXYgY2xhc3NOYW1lPVwiUG9wVXBTdG9yeVwiPlxuXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJib3hcIj5cblx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cImJ1dHRvblwiIGhyZWY9XCIjcG9wdXAxXCI+TGV0IG1lIFBvcCB1cDwvYT5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDxkaXYgaWQ9XCJwb3B1cDFcIiBjbGFzc05hbWU9XCJvdmVybGF5XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvcHVwXCI+XG5cdFx0XHRcdFx0XHRcdDxoMj5Uw610dWxvIGRlIFBvcCB1cDwvaDI+XG5cdFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cImNsb3NlXCIgaHJlZj1cIiNcIj4mdGltZXM7PC9hPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cblx0XHRcdFx0XHRcdFx0XHRMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gRmFjaWxpcyBpbmNpZHVudCBzdXNjaXBpdCwgZG9sb3JpYnVzIHJhdGlvbmUgdmVuaWFtIGlkIGVhcnVtIGRvbG9yZW0gZGlzdGluY3RpbyBudWxsYSBjb25zZWN0ZXR1ciBzdW50IGVzc2UgbW9sZXN0aWFlIGFsaWFzLCBsaWJlcm8gdmVybyBxdWFzIGV4ZXJjaXRhdGlvbmVtIG5lc2NpdW50IHZvbHVwdGF0ZW0hXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRcdFx0XHQuUG9wVXBTdG9yeSAuYm94IHtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LlBvcFVwU3RvcnkgLmJ1dHRvbiB7XG5cdFx0XHRcdFx0XHQgIGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdFx0XHRcdCAgcGFkZGluZzogMTBweDtcblx0XHRcdFx0XHRcdCAgY29sb3I6IHJlZDtcblx0XHRcdFx0XHRcdCAgYm9yZGVyOiAycHggc29saWQgIzA2RDg1Rjtcblx0XHRcdFx0XHRcdCAgY3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0XHRcdFx0ICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5Qb3BVcFN0b3J5IC5idXR0b246aG92ZXIge1xuXHRcdFx0XHRcdFx0ICBiYWNrZ3JvdW5kOiAjMDZEODVGO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQuUG9wVXBTdG9yeSAub3ZlcmxheSB7XG5cdFx0XHRcdFx0XHQgIHBvc2l0aW9uOiBmaXhlZDtcblx0XHRcdFx0XHRcdCAgdG9wOiAwO1xuXHRcdFx0XHRcdFx0ICBib3R0b206IDA7XG5cdFx0XHRcdFx0XHQgIGxlZnQ6IDA7XG5cdFx0XHRcdFx0XHQgIHJpZ2h0OiAwO1xuXHRcdFx0XHRcdFx0ICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG5cdFx0XHRcdFx0XHQgIHRyYW5zaXRpb246IG9wYWNpdHkgNTAwbXM7XG5cdFx0XHRcdFx0XHQgIHZpc2liaWxpdHk6IGhpZGRlbjtcblx0XHRcdFx0XHRcdCAgb3BhY2l0eTogMDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5Qb3BVcFN0b3J5IC5vdmVybGF5OnRhcmdldCB7XG5cdFx0XHRcdFx0XHQgIHZpc2liaWxpdHk6IHZpc2libGU7XG5cdFx0XHRcdFx0XHQgIG9wYWNpdHk6IDE7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC5Qb3BVcFN0b3J5IC5wb3B1cCB7XG5cdFx0XHRcdFx0XHQgIG1hcmdpbjogMjN2aCBhdXRvO1xuXHRcdFx0XHRcdFx0ICBwYWRkaW5nOiAyMHB4O1xuXHRcdFx0XHRcdFx0ICBiYWNrZ3JvdW5kOiAjZmZmO1xuXHRcdFx0XHRcdFx0ICBib3JkZXItcmFkaXVzOiA1cHg7XG5cdFx0XHRcdFx0XHQgIHdpZHRoOiA1MHZ3O1xuXHRcdFx0XHRcdFx0ICBoZWlnaHQ6IDUwdmg7XG5cdFx0XHRcdFx0XHQgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0XHRcdCAgdHJhbnNpdGlvbjogYWxsIDVzIGVhc2UtaW4tb3V0O1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQuUG9wVXBTdG9yeSAucG9wdXAgaDIge1xuXHRcdFx0XHRcdFx0ICBtYXJnaW4tdG9wOiAwO1xuXHRcdFx0XHRcdFx0ICBjb2xvcjogIzMzMztcblx0XHRcdFx0XHRcdCAgZm9udC1mYW1pbHk6IFRhaG9tYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuUG9wVXBTdG9yeSAucG9wdXAgLmNsb3NlIHtcblx0XHRcdFx0XHRcdCAgcG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdFx0ICB0b3A6IDIwcHg7XG5cdFx0XHRcdFx0XHQgIHJpZ2h0OiAzMHB4O1xuXHRcdFx0XHRcdFx0ICB0cmFuc2l0aW9uOiBhbGwgMjAwbXM7XG5cdFx0XHRcdFx0XHQgIGZvbnQtc2l6ZTogMzBweDtcblx0XHRcdFx0XHRcdCAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cdFx0XHRcdFx0XHQgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRcdFx0XHRcdCAgY29sb3I6ICMzMzM7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuUG9wVXBTdG9yeSAucG9wdXAgLmNsb3NlOmhvdmVyIHtcblx0XHRcdFx0XHRcdCAgY29sb3I6ICMwNkQ4NUY7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuUG9wVXBTdG9yeSAucG9wdXAgLmNvbnRlbnQge1xuXHRcdFx0XHRcdFx0ICBtYXgtaGVpZ2h0OiAzMCU7XG5cdFx0XHRcdFx0XHQgIG92ZXJmbG93OiBhdXRvO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCl7XG5cdFx0XHRcdFx0XHQgIC5Qb3BVcFN0b3J5IC5ib3h7XG5cdFx0XHRcdFx0XHQgICAgd2lkdGg6IDcwJTtcblx0XHRcdFx0XHRcdCAgfVxuXHRcdFx0XHRcdFx0ICAuUG9wVXBTdG9yeSAucG9wdXB7XG5cdFx0XHRcdFx0XHQgICAgd2lkdGg6IDcwJTtcblx0XHRcdFx0XHRcdCAgfVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGB9PC9zdHlsZT5cblx0XHRcdFx0PC9kaXY+XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9wVXBTdG9yeTsiXX0= */\n/*@ sourceURL=/Users/daniloviacavavizarreta/www/storyrocketreact/components/PopUpStory.js */"));
    }
  }]);

  return PopUpStory;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (PopUpStory);

/***/ })

})
//# sourceMappingURL=search.js.37d292aadd8ec586150f.hot-update.js.map