module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/Users/daniloviacavavizarreta/www/storyrocketreact/components/Footer.js";



var Footer =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Footer, _React$Component);

  function Footer(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Footer);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Footer).call(this, props));
    _this.state = {};
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Footer, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("footer", {
        className: "footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, "footer"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("style", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, "\n\t\t\t\t\t\t.footer {\n\t\t\t\t\t\t\tbackground: #E43776;\n\t\t\t\t\t\t\tpadding: 10px;\n\t\t\t\t\t\t\tcolor: white;\n\t\t\t\t\t\t}\n\t\t\t\t\t"));
    }
  }]);

  return Footer;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);







var _jsxFileName = "/Users/daniloviacavavizarreta/www/storyrocketreact/components/Header.js";




var Header =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Header, _React$Component);

  function Header(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Header).call(this, props));

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

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("header", {
        className: "jsx-1643764959" + " " + "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1643764959" + " " + "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, "header"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1643764959",
        __self: this
      }, ".header.jsx-1643764959{background:green;padding:10px;color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pbG92aWFjYXZhdml6YXJyZXRhL3d3dy9zdG9yeXJvY2tldHJlYWN0L2NvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZCaUIsQUFHeUIsaUJBQ0osYUFDRCxZQUNiIiwiZmlsZSI6Ii9Vc2Vycy9kYW5pbG92aWFjYXZhdml6YXJyZXRhL3d3dy9zdG9yeXJvY2tldHJlYWN0L2NvbXBvbmVudHMvSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0fTtcblx0fVxuXG5cdGhhbmRsZU1lbnVIYW1idXJndWVzYSA9IChlKSA9PiB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cblx0XHRjb25zdCBoZWFkZXJIYW1idXJndWVzYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXJNZW51LWhhbWJ1cmd1ZXNhJylcblx0XHRjb25zdCBoZWFkZXJNZW51TW1vYmlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXJNZW51LW1vYmlsZScpXG5cblx0XHRoZWFkZXJIYW1idXJndWVzYS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKVxuXHRcdGhlYWRlck1lbnVNbW9iaWxlLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpXG5cdFx0XG5cdH1cblxuXHRyZW5kZXIgKCkge1xuXG5cdFx0cmV0dXJuIFx0PGhlYWRlciBjbGFzc05hbWU9XCJoZWFkZXJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0aGVhZGVyXG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRcdFx0XHQuaGVhZGVyIHtcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogZ3JlZW47XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDEwcHg7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGB9PC9zdHlsZT5cblx0XHRcdFx0PC9oZWFkZXI+XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyJdfQ== */\n/*@ sourceURL=/Users/daniloviacavavizarreta/www/storyrocketreact/components/Header.js */"));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next-server/head */ "next-server/head");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_server_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");





var _jsxFileName = "/Users/daniloviacavavizarreta/www/storyrocketreact/components/Layout.js";







var Layout =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Layout, _React$Component);

  function Layout() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Layout);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Layout).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Layout, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2939046593" + " " + "Layout",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_server_head__WEBPACK_IMPORTED_MODULE_7___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("title", {
        className: "jsx-2939046593",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, this.props.title), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0",
        className: "jsx-2939046593",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("link", {
        rel: "icon",
        type: "image/png",
        href: "/static/img/pd-small.svg",
        className: "jsx-2939046593",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }), this.props.children, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "2939046593",
        __self: this
      }, "html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,main,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section{display:block;}body{line-height:1;}ol,ul{list-style:none;}blockquote,q{quotes:none;}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none;}table{border-collapse:collapse;border-spacing:0;}a{-webkit-text-decoration:none;text-decoration:none;display:inline-block;}input:focus{border:none;outline-color:white;}img{max-width:100%;height:auto;display:block;margin:auto;}:focus{outline:inherit;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pbG92aWFjYXZhdml6YXJyZXRhL3d3dy9zdG9yeXJvY2tldHJlYWN0L2NvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStCK0IsQUFnQmlCLEFBU0ssQUFHQSxBQUdFLEFBR0osQUFJRCxBQUljLEFBSUosQUFJVCxBQUlHLEFBTUMsU0EzQ04sRUFzQkcsQ0FKZCxBQWdCcUIsRUF6QnJCLEFBR0EsQ0EwQmEsQ0F2QmIsQUE2QkEsR0EzQ1UsS0FzQlYsQ0FHa0IsRUFhSCxDQXJDQyxJQWlDaEIsU0FLYSxDQWJiLENBeEJjLE9BMkJRLEdBV3RCLEdBckN5QixlQTJCekIsU0ExQkEiLCJmaWxlIjoiL1VzZXJzL2Rhbmlsb3ZpYWNhdmF2aXphcnJldGEvd3d3L3N0b3J5cm9ja2V0cmVhY3QvY29tcG9uZW50cy9MYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXlvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgfVxuXG5cdHJlbmRlciAoKSB7IFxuXHRcdFxuXHRcdHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cIkxheW91dFwiID5cblxuXHRcdFx0XHRcdDxIZWFkPlxuXHRcdFx0XHRcdFx0PHRpdGxlPnsgdGhpcy5wcm9wcy50aXRsZSB9PC90aXRsZT5cblxuXHRcdFx0XHRcdFx0PG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIiAvPlxuXG5cdFx0XHRcdFx0XHQ8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIGhyZWY9XCIvc3RhdGljL2ltZy9wZC1zbWFsbC5zdmdcIiAvPlxuXG5cdFx0XHRcdFx0PC9IZWFkPlxuXG5cdFx0XHRcdFx0PEhlYWRlcj48L0hlYWRlcj5cblx0XHRcdFx0XHRcblx0XHRcdFx0XHR7dGhpcy5wcm9wcy5jaGlsZHJlbn1cblxuXHRcdFx0XHRcdDxGb290ZXI+PC9Gb290ZXI+XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0PHN0eWxlIGpzeCBnbG9iYWw9XCJ0cnVlXCI+e2BcblxuXHRcdFx0XHRcdFx0aHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxuXHRcdFx0XHRcdFx0aDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxuXHRcdFx0XHRcdFx0YSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxuXHRcdFx0XHRcdFx0ZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxuXHRcdFx0XHRcdFx0c21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcblx0XHRcdFx0XHRcdGIsIHUsIGksIGNlbnRlcixcblx0XHRcdFx0XHRcdGRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXG5cdFx0XHRcdFx0XHRmaWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcblx0XHRcdFx0XHRcdHRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxuXHRcdFx0XHRcdFx0YXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsXG5cdFx0XHRcdFx0XHRmaWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsXG5cdFx0XHRcdFx0XHRtYWluLCBtZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcblx0XHRcdFx0XHRcdHRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0XHRcdFx0cGFkZGluZzogMDtcblx0XHRcdFx0XHRcdFx0Ym9yZGVyOiAwO1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDEwMCU7XG5cdFx0XHRcdFx0XHRcdGZvbnQ6IGluaGVyaXQ7XG5cdFx0XHRcdFx0XHRcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsXG5cdFx0XHRcdFx0XHRmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtYWluLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGJvZHkge1xuXHRcdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogMTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdG9sLCB1bCB7XG5cdFx0XHRcdFx0XHRcdGxpc3Qtc3R5bGU6IG5vbmU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRibG9ja3F1b3RlLCBxIHtcblx0XHRcdFx0XHRcdFx0cXVvdGVzOiBub25lO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0YmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXG5cdFx0XHRcdFx0XHRxOmJlZm9yZSwgcTphZnRlciB7XG5cdFx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnO1xuXHRcdFx0XHRcdFx0XHRjb250ZW50OiBub25lO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0dGFibGUge1xuXHRcdFx0XHRcdFx0XHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuXHRcdFx0XHRcdFx0XHRib3JkZXItc3BhY2luZzogMDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGEge1xuXHRcdFx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlucHV0OmZvY3VzIHtcblx0XHRcdFx0XHRcdFx0Ym9yZGVyOiBub25lO1xuXHRcdFx0XHRcdFx0XHRvdXRsaW5lLWNvbG9yOiB3aGl0ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGltZyB7XG5cdFx0XHRcdFx0XHRcdG1heC13aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiBhdXRvO1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0XHRcdFx0bWFyZ2luOiBhdXRvO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0OmZvY3VzIHtcblx0XHRcdFx0XHRcdFx0b3V0bGluZTogaW5oZXJpdDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0YH08L3N0eWxlPlxuXG5cdFx0XHRcdDwvZGl2PlxuXHR9XG59Il19 */\n/*@ sourceURL=/Users/daniloviacavavizarreta/www/storyrocketreact/components/Layout.js */"));
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



/***/ }),

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _SearchTitle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SearchTitle */ "./components/SearchTitle.js");







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
      var era = document.getElementById("SearchEra-input");
      era.classList.toggle("active");
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
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_SearchTitle__WEBPACK_IMPORTED_MODULE_8__["default"], {
        title: "Era",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        onClick: this.handleMenuEra,
        className: "searchEraMenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "/static/img/arrowUp.svg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "SearchEra-input",
        id: "SearchEra-input",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        className: "e-range",
        type: "range",
        min: "0",
        max: "10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("style", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, "\n            .SearchEra {\n              background: white;\n              padding: 10px;\n              box-sizing: border-box;\n              font-family: sans-serif;\n              border-radius: 5px;\n              margin-bottom: 10px;\n              position: relative;\n            }\n\n            .searchEraMenu {\n              position: absolute;\n              top: 23px;\n              right: 20px;\n              cursor: pointer;\n            }\n\n            .searchEraMenu img {\n              width: 15px;\n            }\n\n            .SearchEra-input {\n              display: none;\n            }\n\n            .SearchEra-input.active {\n              display: block;\n            }\n\n            .e-range {\n              display: block;\n              -webkit-appearance: none;\n                 -moz-appearance: none;\n                      appearance: none;\n              width: 90%;\n              margin: auto;\n              height: 30px;\n              overflow: hidden;\n              cursor: pointer;\n            }\n            .e-range:focus {\n              outline: none;\n            }\n\n            /*linea*/\n            .e-range::-webkit-slider-runnable-track {\n              width: 100%;\n              height: 15px;\n              /*background: linear-gradient(to bottom, #ffdc46, #ffdc46) 100% 50%/100% 3px no-repeat transparent;*/\n              background: #ffdc46;\n            }\n\n            /*bola*/\n            .e-range::-webkit-slider-thumb {\n              position: relative;\n              -webkit-appearance: none;\n                      appearance: none;\n              height: 20px;\n              width: 20px;\n              background: #11072f;\n              border: 0;\n              top: -2px;\n              transition: background-color 150ms;\n            }\n\n            .e-range::-moz-range-track,\n            .e-range::-moz-range-progress {\n              width: 100%;\n              height: 30px;\n              background: #cfcfcf;\n            }\n\n            .e-range::-moz-range-progress {\n              background: linear-gradient(to bottom, #0199ff, #0199ff) 100% 50%/100% 3px no-repeat transparent;\n            }\n\n            .e-range::-moz-range-thumb {\n              -moz-appearance: none;\n                   appearance: none;\n              margin: 0;\n              height: 13px;\n              width: 13px;\n              background: #0199ff;\n              border-radius: 100%;\n              border: 0;\n              transition: background-color 150ms;\n            }\n\n            .e-range::-ms-track {\n              width: 100%;\n              height: 30px;\n              border: 0;\n              color: transparent;\n              background: transparent;\n            }\n          "));
    }
  }]);

  return SearchEra;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SearchEra);

/***/ }),

/***/ "./components/SearchGenres.js":
/*!************************************!*\
  !*** ./components/SearchGenres.js ***!
  \************************************/
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _SearchTitle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SearchTitle */ "./components/SearchTitle.js");







var _jsxFileName = "/Users/daniloviacavavizarreta/www/storyrocketreact/components/SearchGenres.js";



var SearchGenres =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(SearchGenres, _Component);

  function SearchGenres() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SearchGenres);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SearchGenres)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleMenu", function (e) {
      var genre = document.getElementById("searchGenresList");
      genre.classList.toggle("active");
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleClear", function (e) {
      var genre = document.getElementsByClassName("styled-checkbox");

      for (var i = 0; i < genre.length; i++) {
        if (genre[i].checked) {
          genre[i].checked = false;
        }
      }

      var clear = document.getElementById("clearGenre");
      clear.classList.remove('active');
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleChangeGenre", function (e) {
      var clear = document.getElementById("clearGenre");

      if (e.target.value) {
        clear.classList.add('active');
      } else {
        clear.classList.remove('active');
      }
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SearchGenres, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "searchGenres",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_SearchTitle__WEBPACK_IMPORTED_MODULE_8__["default"], {
        title: "Genres",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        onClick: this.handleMenu,
        className: "searchGenresMenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "/static/img/arrowUp.svg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "searchGenres-list",
        id: "searchGenresList",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        onChange: this.handleChangeGenre,
        className: "styled-checkbox",
        id: "box1",
        type: "checkbox",
        value: "value1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        for: "box1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "Action")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        onChange: this.handleChangeGenre,
        className: "styled-checkbox",
        id: "box2",
        type: "checkbox",
        value: "value1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        for: "box2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "Biography")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        onChange: this.handleChangeGenre,
        className: "styled-checkbox",
        id: "box3",
        type: "checkbox",
        value: "value1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        for: "box3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, "Documentary")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        onChange: this.handleChangeGenre,
        className: "styled-checkbox",
        id: "box8",
        type: "checkbox",
        value: "value1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        for: "box8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "Thriller")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        onChange: this.handleChangeGenre,
        className: "styled-checkbox",
        id: "box9",
        type: "checkbox",
        value: "value1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        for: "box9",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "Faith")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        onChange: this.handleChangeGenre,
        className: "styled-checkbox",
        id: "box10",
        type: "checkbox",
        value: "value1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        for: "box10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "Crime"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        onChange: this.handleChangeGenre,
        className: "styled-checkbox",
        id: "box4",
        type: "checkbox",
        value: "value",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        for: "box4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, "Graphic Novels")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        onChange: this.handleChangeGenre,
        className: "styled-checkbox",
        id: "box5",
        type: "checkbox",
        value: "value",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        for: "box5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, "Film Noir")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        onChange: this.handleChangeGenre,
        className: "styled-checkbox",
        id: "box6",
        type: "checkbox",
        value: "value1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        for: "box6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, "Romance")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        onChange: this.handleChangeGenre,
        className: "styled-checkbox",
        id: "box11",
        type: "checkbox",
        value: "value",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        for: "box11",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, "War")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        onChange: this.handleChangeGenre,
        className: "styled-checkbox",
        id: "box12",
        type: "checkbox",
        value: "value",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        for: "box12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, "Spy")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        onChange: this.handleChangeGenre,
        className: "styled-checkbox",
        id: "box13",
        type: "checkbox",
        value: "value1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        for: "box13",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, "Mafia")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "clearGenre",
        id: "clearGenre",
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
      }, "\n\t\t\t\t.searchGenres {\n\t\t\t\t\tfont-family: sans-serif;\n\t\t\t\t\tbackground: white;\n\t\t\t\t\tpadding: 10px;\n\t\t\t\t\tborder-radius: 5px;\n\t\t\t\t  margin-bottom: 10px;\n\t\t\t\t  position: relative;\n\t\t\t\t}\n\n\t\t\t\t.searchGenres-list {\n\t\t\t\t  display: flex;\n\t\t\t\t  justify-content: space-around;\n\t\t\t\t  align-items: center;\n\t\t\t\t  display: none;\n\t\t\t\t}\n\n\t\t\t\t.searchGenresMenu {\n\t\t\t\t  position: absolute;\n\t\t\t\t  top: 23px;\n\t\t\t\t  right: 20px;\n\t\t\t\t  cursor: pointer;\n\t\t\t\t}\n\n\t\t\t\t.searchGenresMenu img {\n\t\t\t\t  width: 15px;\n\t\t\t\t}\n\n\t\t\t\t.searchGenres-list.active {\n\t\t\t\t  display: flex;\n\t\t\t\t}\n\t\t\t\t.searchGenres-list ul{\n\t\t\t\t  \n\t\t\t\t}\n\t\t\t\t.searchGenres-list li{\n\t\t\t\t  text-align: left;\n\t\t\t\t  margin-bottom: 10px;\n\t\t\t\t}\n\n\t\t\t\t.styled-checkbox {\n\t\t\t\t  position: absolute;\n\t\t\t\t  opacity: 0;\n\t\t\t\t}\n\t\t\t\t.styled-checkbox + label {\n\t\t\t\t  position: relative;\n\t\t\t\t  cursor: pointer;\n\t\t\t\t  padding: 0;\n\t\t\t\t}\n\t\t\t\t.styled-checkbox + label:before {\n\t\t\t\t  content: '';\n\t\t\t\t  margin-right: 10px;\n\t\t\t\t  display: inline-block;\n\t\t\t\t  vertical-align: text-top;\n\t\t\t\t  width: 15px;\n\t\t\t\t  height: 15px;\n\t\t\t\t  background: white;\n\t\t\t\t  border: 2px solid #160e26;\n\t\t\t\t  border-radius: 4px;\n\t\t\t\t}\n\t\t\t\t.styled-checkbox:hover + label:before {\n\t\t\t\t  background: white;\n\t\t\t\t}\n\t\t\t\t.styled-checkbox:focus + label:before {\n\t\t\t\t  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.12);\n\t\t\t\t}\n\t\t\t\t.styled-checkbox:checked + label:before {\n\t\t\t\t  background: #1c2d4c;\n\t\t\t\t}\n\t\t\t\t.styled-checkbox:disabled + label {\n\t\t\t\t  color: #b8b8b8;\n\t\t\t\t  cursor: auto;\n\t\t\t\t}\n\t\t\t\t.styled-checkbox:disabled + label:before {\n\t\t\t\t  box-shadow: none;\n\t\t\t\t  background: #ddd;\n\t\t\t\t}\n\t\t\t\t.styled-checkbox:checked + label:after {\n\t\t\t\t  content: '';\n\t\t\t\t  position: absolute;\n\t\t\t\t  left: 4px;\n\t\t\t\t  top: 8px;\n\t\t\t\t  background: orange;\n\t\t\t\t  width: 2px;\n\t\t\t\t  height: 2px;\n\t\t\t\t  box-shadow: 2px 0 0 orange, 4px 0 0 orange, 4px -2px 0 orange, 4px -4px 0 orange, 4px -6px 0 orange, 4px -8px 0 orange;\n\t\t\t\t  -webkit-transform: rotate(45deg);\n\t\t\t\t          transform: rotate(45deg);\n\t\t\t\t}\n\n\t\t\t\t.clearGenre {\n\t\t\t\t  margin-top: 20px;\n\t\t\t\t  display: none;\n\t\t\t\t}\n\n\t\t\t\t.clearGenre.active {\n\t\t\t\t  display: block;\n\t\t\t\t}\n\t\t\t"));
    }
  }]);

  return SearchGenres;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SearchGenres);

/***/ }),

/***/ "./components/SearchInput.js":
/*!***********************************!*\
  !*** ./components/SearchInput.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);





var _jsxFileName = "/Users/daniloviacavavizarreta/www/storyrocketreact/components/SearchInput.js";


var SearchInput =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(SearchInput, _Component);

  function SearchInput() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SearchInput);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SearchInput).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SearchInput, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "searchInput",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("form", {
        action: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        type: "text",
        placeholder: "Search author or title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "/static/img/search.svg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("style", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, "\n\t\t\t\t\t.searchInput {\n\t\t\t\t\t\tbackground: white;\n\t\t\t\t\t\tcolor: gray;\n\t\t\t\t\t\tposition: relative;\n\t\t\t\t\t\tmargin: 10px 0;\n\t\t\t\t\t}\n\n\t\t\t\t\t.searchInput input {\n\t\t\t\t\t\twidth: 100%;\n\t\t\t\t\t\theight: 30px;\n\t\t\t\t\t\tpadding-left: 10px;\n\t\t\t\t\t\tborder: 1px solid #0000000f;\n\t\t\t\t\t\tbox-sizing: border-box;\n\t\t\t\t\t}\n\n\t\t\t\t\t.searchInput button {\n\t\t\t\t\t\tposition: absolute;\n\t\t\t\t\t\twidth: 30px;\n\t\t\t\t\t\theight: 30px;\n\t\t\t\t\t\ttop: 0px;\n\t\t\t\t\t\tright: 10px;\n\t\t\t\t\t\tbottom: 0;\n\t\t\t\t\t\tmargin: auto;\n\t\t\t\t\t\tborder: none;\n\t\t\t\t\t\tbackground: transparent;\n\t\t\t\t\t}\n\n\t\t\t\t\t.searchInput img {\n\t\t\t\t\t\tmargin-top: 7px;\n\t\t\t\t\t\tdisplay: block;\n\t\t\t\t\t}\n\t\t\t\t"));
    }
  }]);

  return SearchInput;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SearchInput);

/***/ }),

/***/ "./components/SearchIntendedMedium.js":
/*!********************************************!*\
  !*** ./components/SearchIntendedMedium.js ***!
  \********************************************/
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _SearchTitle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SearchTitle */ "./components/SearchTitle.js");







var _jsxFileName = "/Users/daniloviacavavizarreta/www/storyrocketreact/components/SearchIntendedMedium.js";



var SearchIntendedMedium =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(SearchIntendedMedium, _Component);

  function SearchIntendedMedium() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SearchIntendedMedium);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SearchIntendedMedium)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleIntended", function (e) {
      var intended = document.getElementById("SearchIntendedMedium-items");
      intended.classList.toggle("active");
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SearchIntendedMedium, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "SearchIntendedMedium",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_SearchTitle__WEBPACK_IMPORTED_MODULE_8__["default"], {
        title: "Intended Medium",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        onClick: this.handleIntended,
        className: "searchIntendedMenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "/static/img/arrowUp.svg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "SearchIntendedMedium-items",
        id: "SearchIntendedMedium-items",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "SearchIntendedMedium-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("svg", {
        version: "1.1",
        viewBox: "0 0 512 640",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M446.73,268.439h-45.29c-3.741,0-6.774,3.033-6.774,6.774s3.033,6.774,6.774,6.774h38.515v180.271h-31.74V305.661   c0-3.741-3.033-6.774-6.774-6.774s-6.774,3.033-6.774,6.774v163.372c0,3.741,3.033,6.773,6.774,6.773h45.29   c3.74,0,6.773-3.032,6.773-6.773V275.214C453.504,271.473,450.471,268.439,446.73,268.439z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M361.641,352.701h-45.289c-3.742,0-6.775,3.033-6.775,6.774v109.558c0,3.741,3.033,6.773,6.775,6.773h45.289   c3.741,0,6.773-3.032,6.773-6.773V359.476C368.414,355.734,365.382,352.701,361.641,352.701z M354.866,462.259h-31.741V366.25   h31.741V462.259z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M276.551,390.57h-45.289c-3.742,0-6.774,3.033-6.774,6.775v71.688c0,3.741,3.033,6.773,6.774,6.773h45.289   c3.742,0,6.774-3.032,6.774-6.773v-71.688C283.325,393.604,280.293,390.57,276.551,390.57z M269.776,462.259h-31.741v-58.14h31.741   V462.259z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M191.461,422.544h-45.29c-3.741,0-6.774,3.032-6.774,6.774v39.715c0,3.741,3.033,6.773,6.774,6.773h45.29   c3.741,0,6.774-3.032,6.774-6.773v-39.715C198.235,425.576,195.203,422.544,191.461,422.544z M184.687,462.259h-31.741v-26.166   h31.741V462.259z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M413.077,177.319c1.143-2.308,0.877-5.065-0.685-7.113l-26.73-35.032c-1.281-1.68-3.273-2.666-5.385-2.666   c-2.113,0-4.105,0.986-5.387,2.666l-26.729,35.032c-2.27,2.974-1.697,7.225,1.276,9.495c1.228,0.936,2.672,1.389,4.104,1.389   c2.041,0,4.057-0.917,5.391-2.665l21.344-27.974l13.039,17.09h-13.039c-3.742,0-6.774,3.033-6.774,6.774   c0,97.535-79.351,176.885-176.885,176.885c-3.742,0-6.774,3.033-6.774,6.775c0,3.74,3.033,6.773,6.774,6.773   c102.737,0,186.718-81.78,190.3-183.659h20.088C409.582,181.089,411.936,179.628,413.077,177.319z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M289.732,276.23c0.386-0.295,0.733-0.629,1.048-0.999c27.02-25.228,43.958-61.123,43.958-100.917   c0-76.16-61.961-138.121-138.121-138.121c-3.452,0-6.862,0.17-10.251,0.42c-0.008,0-0.016-0.001-0.024,0   c-0.005,0-0.01,0.002-0.016,0.003c-38.972,2.887-73.493,21.985-96.806,50.595c-0.391,0.383-0.723,0.819-1.013,1.288   c-18.762,23.587-30.013,53.403-30.013,85.814c0,36.062,13.906,68.926,36.62,93.55c0.29,0.378,0.619,0.72,0.981,1.029   c25.207,26.774,60.933,43.542,100.521,43.542C232.463,312.436,265.157,298.703,289.732,276.23z M191.14,274.525   c-14.631-11.31-32.874-17.537-51.368-17.537h-36.23c-19.574-22.013-31.497-50.971-31.497-82.674   c0-28.364,9.547-54.528,25.571-75.492h37.786c9.966,0,18.075,8.108,18.075,18.075c0,9.967-8.109,18.076-18.075,18.076h-18.369   c-15.455,0-28.029,12.574-28.029,28.029c0,15.456,12.574,28.029,28.029,28.029h1.417c9.157,0,16.605,7.45,16.605,16.607   c0,9.157-7.449,16.606-16.605,16.606c-3.742,0-6.774,3.032-6.774,6.774c0,3.741,3.033,6.774,6.774,6.774   c16.627,0,30.154-13.528,30.154-30.155c0-16.628-13.527-30.155-30.154-30.155h-1.417c-7.985,0-14.48-6.496-14.48-14.481   c0-7.985,6.496-14.48,14.48-14.48h18.369c17.437,0,31.624-14.186,31.624-31.625c0-17.438-14.187-31.624-31.624-31.624h-25.785   c19.031-18.599,43.973-31.148,71.714-34.561c5.422,24.208,26.823,41.732,52.294,41.732h19.699c3.741,0,6.773-3.033,6.773-6.774   s-3.032-6.774-6.773-6.774h-19.699c-18.304,0-33.787-12.107-38.555-29.116c0.518-0.006,1.028-0.039,1.547-0.039   c68.689,0,124.572,55.883,124.572,124.573c0,35.244-14.736,67.092-38.342,89.774h-22.665c-7.25,0-13.148-5.897-13.148-13.147   s5.898-13.147,13.148-13.147h2.568c15.05,0,27.294-12.245,27.294-27.294s-12.244-27.293-27.294-27.293h-24.105   c-11.336,0-20.558-9.223-20.558-20.559s9.222-20.558,20.558-20.558h49.802c3.741,0,6.773-3.032,6.773-6.774   s-3.032-6.774-6.773-6.774h-49.802c-18.807,0-34.106,15.3-34.106,34.106s15.3,34.107,34.106,34.107h24.105   c7.579,0,13.745,6.166,13.745,13.745s-6.166,13.745-13.745,13.745h-2.568c-14.721,0-26.696,11.976-26.696,26.696   s11.976,26.695,26.696,26.695h5.951c-19.869,13.412-43.794,21.25-69.516,21.25c-29.976,0-57.51-10.646-79.028-28.351h22.182   c15.511,0,30.811,5.224,43.083,14.708c1.232,0.953,2.691,1.414,4.138,1.414c2.025,0,4.03-0.904,5.364-2.632   C194.645,281.066,194.101,276.813,191.14,274.525z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "Movie/Film"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "SearchIntendedMedium-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("svg", {
        version: "1.1",
        viewBox: "0 0 512 640",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M446.73,268.439h-45.29c-3.741,0-6.774,3.033-6.774,6.774s3.033,6.774,6.774,6.774h38.515v180.271h-31.74V305.661   c0-3.741-3.033-6.774-6.774-6.774s-6.774,3.033-6.774,6.774v163.372c0,3.741,3.033,6.773,6.774,6.773h45.29   c3.74,0,6.773-3.032,6.773-6.773V275.214C453.504,271.473,450.471,268.439,446.73,268.439z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M361.641,352.701h-45.289c-3.742,0-6.775,3.033-6.775,6.774v109.558c0,3.741,3.033,6.773,6.775,6.773h45.289   c3.741,0,6.773-3.032,6.773-6.773V359.476C368.414,355.734,365.382,352.701,361.641,352.701z M354.866,462.259h-31.741V366.25   h31.741V462.259z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M276.551,390.57h-45.289c-3.742,0-6.774,3.033-6.774,6.775v71.688c0,3.741,3.033,6.773,6.774,6.773h45.289   c3.742,0,6.774-3.032,6.774-6.773v-71.688C283.325,393.604,280.293,390.57,276.551,390.57z M269.776,462.259h-31.741v-58.14h31.741   V462.259z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M191.461,422.544h-45.29c-3.741,0-6.774,3.032-6.774,6.774v39.715c0,3.741,3.033,6.773,6.774,6.773h45.29   c3.741,0,6.774-3.032,6.774-6.773v-39.715C198.235,425.576,195.203,422.544,191.461,422.544z M184.687,462.259h-31.741v-26.166   h31.741V462.259z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M413.077,177.319c1.143-2.308,0.877-5.065-0.685-7.113l-26.73-35.032c-1.281-1.68-3.273-2.666-5.385-2.666   c-2.113,0-4.105,0.986-5.387,2.666l-26.729,35.032c-2.27,2.974-1.697,7.225,1.276,9.495c1.228,0.936,2.672,1.389,4.104,1.389   c2.041,0,4.057-0.917,5.391-2.665l21.344-27.974l13.039,17.09h-13.039c-3.742,0-6.774,3.033-6.774,6.774   c0,97.535-79.351,176.885-176.885,176.885c-3.742,0-6.774,3.033-6.774,6.775c0,3.74,3.033,6.773,6.774,6.773   c102.737,0,186.718-81.78,190.3-183.659h20.088C409.582,181.089,411.936,179.628,413.077,177.319z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M289.732,276.23c0.386-0.295,0.733-0.629,1.048-0.999c27.02-25.228,43.958-61.123,43.958-100.917   c0-76.16-61.961-138.121-138.121-138.121c-3.452,0-6.862,0.17-10.251,0.42c-0.008,0-0.016-0.001-0.024,0   c-0.005,0-0.01,0.002-0.016,0.003c-38.972,2.887-73.493,21.985-96.806,50.595c-0.391,0.383-0.723,0.819-1.013,1.288   c-18.762,23.587-30.013,53.403-30.013,85.814c0,36.062,13.906,68.926,36.62,93.55c0.29,0.378,0.619,0.72,0.981,1.029   c25.207,26.774,60.933,43.542,100.521,43.542C232.463,312.436,265.157,298.703,289.732,276.23z M191.14,274.525   c-14.631-11.31-32.874-17.537-51.368-17.537h-36.23c-19.574-22.013-31.497-50.971-31.497-82.674   c0-28.364,9.547-54.528,25.571-75.492h37.786c9.966,0,18.075,8.108,18.075,18.075c0,9.967-8.109,18.076-18.075,18.076h-18.369   c-15.455,0-28.029,12.574-28.029,28.029c0,15.456,12.574,28.029,28.029,28.029h1.417c9.157,0,16.605,7.45,16.605,16.607   c0,9.157-7.449,16.606-16.605,16.606c-3.742,0-6.774,3.032-6.774,6.774c0,3.741,3.033,6.774,6.774,6.774   c16.627,0,30.154-13.528,30.154-30.155c0-16.628-13.527-30.155-30.154-30.155h-1.417c-7.985,0-14.48-6.496-14.48-14.481   c0-7.985,6.496-14.48,14.48-14.48h18.369c17.437,0,31.624-14.186,31.624-31.625c0-17.438-14.187-31.624-31.624-31.624h-25.785   c19.031-18.599,43.973-31.148,71.714-34.561c5.422,24.208,26.823,41.732,52.294,41.732h19.699c3.741,0,6.773-3.033,6.773-6.774   s-3.032-6.774-6.773-6.774h-19.699c-18.304,0-33.787-12.107-38.555-29.116c0.518-0.006,1.028-0.039,1.547-0.039   c68.689,0,124.572,55.883,124.572,124.573c0,35.244-14.736,67.092-38.342,89.774h-22.665c-7.25,0-13.148-5.897-13.148-13.147   s5.898-13.147,13.148-13.147h2.568c15.05,0,27.294-12.245,27.294-27.294s-12.244-27.293-27.294-27.293h-24.105   c-11.336,0-20.558-9.223-20.558-20.559s9.222-20.558,20.558-20.558h49.802c3.741,0,6.773-3.032,6.773-6.774   s-3.032-6.774-6.773-6.774h-49.802c-18.807,0-34.106,15.3-34.106,34.106s15.3,34.107,34.106,34.107h24.105   c7.579,0,13.745,6.166,13.745,13.745s-6.166,13.745-13.745,13.745h-2.568c-14.721,0-26.696,11.976-26.696,26.696   s11.976,26.695,26.696,26.695h5.951c-19.869,13.412-43.794,21.25-69.516,21.25c-29.976,0-57.51-10.646-79.028-28.351h22.182   c15.511,0,30.811,5.224,43.083,14.708c1.232,0.953,2.691,1.414,4.138,1.414c2.025,0,4.03-0.904,5.364-2.632   C194.645,281.066,194.101,276.813,191.14,274.525z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "Web"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "SearchIntendedMedium-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("svg", {
        version: "1.1",
        viewBox: "0 0 512 640",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M446.73,268.439h-45.29c-3.741,0-6.774,3.033-6.774,6.774s3.033,6.774,6.774,6.774h38.515v180.271h-31.74V305.661   c0-3.741-3.033-6.774-6.774-6.774s-6.774,3.033-6.774,6.774v163.372c0,3.741,3.033,6.773,6.774,6.773h45.29   c3.74,0,6.773-3.032,6.773-6.773V275.214C453.504,271.473,450.471,268.439,446.73,268.439z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M361.641,352.701h-45.289c-3.742,0-6.775,3.033-6.775,6.774v109.558c0,3.741,3.033,6.773,6.775,6.773h45.289   c3.741,0,6.773-3.032,6.773-6.773V359.476C368.414,355.734,365.382,352.701,361.641,352.701z M354.866,462.259h-31.741V366.25   h31.741V462.259z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M276.551,390.57h-45.289c-3.742,0-6.774,3.033-6.774,6.775v71.688c0,3.741,3.033,6.773,6.774,6.773h45.289   c3.742,0,6.774-3.032,6.774-6.773v-71.688C283.325,393.604,280.293,390.57,276.551,390.57z M269.776,462.259h-31.741v-58.14h31.741   V462.259z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M191.461,422.544h-45.29c-3.741,0-6.774,3.032-6.774,6.774v39.715c0,3.741,3.033,6.773,6.774,6.773h45.29   c3.741,0,6.774-3.032,6.774-6.773v-39.715C198.235,425.576,195.203,422.544,191.461,422.544z M184.687,462.259h-31.741v-26.166   h31.741V462.259z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M413.077,177.319c1.143-2.308,0.877-5.065-0.685-7.113l-26.73-35.032c-1.281-1.68-3.273-2.666-5.385-2.666   c-2.113,0-4.105,0.986-5.387,2.666l-26.729,35.032c-2.27,2.974-1.697,7.225,1.276,9.495c1.228,0.936,2.672,1.389,4.104,1.389   c2.041,0,4.057-0.917,5.391-2.665l21.344-27.974l13.039,17.09h-13.039c-3.742,0-6.774,3.033-6.774,6.774   c0,97.535-79.351,176.885-176.885,176.885c-3.742,0-6.774,3.033-6.774,6.775c0,3.74,3.033,6.773,6.774,6.773   c102.737,0,186.718-81.78,190.3-183.659h20.088C409.582,181.089,411.936,179.628,413.077,177.319z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M289.732,276.23c0.386-0.295,0.733-0.629,1.048-0.999c27.02-25.228,43.958-61.123,43.958-100.917   c0-76.16-61.961-138.121-138.121-138.121c-3.452,0-6.862,0.17-10.251,0.42c-0.008,0-0.016-0.001-0.024,0   c-0.005,0-0.01,0.002-0.016,0.003c-38.972,2.887-73.493,21.985-96.806,50.595c-0.391,0.383-0.723,0.819-1.013,1.288   c-18.762,23.587-30.013,53.403-30.013,85.814c0,36.062,13.906,68.926,36.62,93.55c0.29,0.378,0.619,0.72,0.981,1.029   c25.207,26.774,60.933,43.542,100.521,43.542C232.463,312.436,265.157,298.703,289.732,276.23z M191.14,274.525   c-14.631-11.31-32.874-17.537-51.368-17.537h-36.23c-19.574-22.013-31.497-50.971-31.497-82.674   c0-28.364,9.547-54.528,25.571-75.492h37.786c9.966,0,18.075,8.108,18.075,18.075c0,9.967-8.109,18.076-18.075,18.076h-18.369   c-15.455,0-28.029,12.574-28.029,28.029c0,15.456,12.574,28.029,28.029,28.029h1.417c9.157,0,16.605,7.45,16.605,16.607   c0,9.157-7.449,16.606-16.605,16.606c-3.742,0-6.774,3.032-6.774,6.774c0,3.741,3.033,6.774,6.774,6.774   c16.627,0,30.154-13.528,30.154-30.155c0-16.628-13.527-30.155-30.154-30.155h-1.417c-7.985,0-14.48-6.496-14.48-14.481   c0-7.985,6.496-14.48,14.48-14.48h18.369c17.437,0,31.624-14.186,31.624-31.625c0-17.438-14.187-31.624-31.624-31.624h-25.785   c19.031-18.599,43.973-31.148,71.714-34.561c5.422,24.208,26.823,41.732,52.294,41.732h19.699c3.741,0,6.773-3.033,6.773-6.774   s-3.032-6.774-6.773-6.774h-19.699c-18.304,0-33.787-12.107-38.555-29.116c0.518-0.006,1.028-0.039,1.547-0.039   c68.689,0,124.572,55.883,124.572,124.573c0,35.244-14.736,67.092-38.342,89.774h-22.665c-7.25,0-13.148-5.897-13.148-13.147   s5.898-13.147,13.148-13.147h2.568c15.05,0,27.294-12.245,27.294-27.294s-12.244-27.293-27.294-27.293h-24.105   c-11.336,0-20.558-9.223-20.558-20.559s9.222-20.558,20.558-20.558h49.802c3.741,0,6.773-3.032,6.773-6.774   s-3.032-6.774-6.773-6.774h-49.802c-18.807,0-34.106,15.3-34.106,34.106s15.3,34.107,34.106,34.107h24.105   c7.579,0,13.745,6.166,13.745,13.745s-6.166,13.745-13.745,13.745h-2.568c-14.721,0-26.696,11.976-26.696,26.696   s11.976,26.695,26.696,26.695h5.951c-19.869,13.412-43.794,21.25-69.516,21.25c-29.976,0-57.51-10.646-79.028-28.351h22.182   c15.511,0,30.811,5.224,43.083,14.708c1.232,0.953,2.691,1.414,4.138,1.414c2.025,0,4.03-0.904,5.364-2.632   C194.645,281.066,194.101,276.813,191.14,274.525z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "Television"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "SearchIntendedMedium-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("svg", {
        version: "1.1",
        viewBox: "0 0 512 640",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M446.73,268.439h-45.29c-3.741,0-6.774,3.033-6.774,6.774s3.033,6.774,6.774,6.774h38.515v180.271h-31.74V305.661   c0-3.741-3.033-6.774-6.774-6.774s-6.774,3.033-6.774,6.774v163.372c0,3.741,3.033,6.773,6.774,6.773h45.29   c3.74,0,6.773-3.032,6.773-6.773V275.214C453.504,271.473,450.471,268.439,446.73,268.439z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M361.641,352.701h-45.289c-3.742,0-6.775,3.033-6.775,6.774v109.558c0,3.741,3.033,6.773,6.775,6.773h45.289   c3.741,0,6.773-3.032,6.773-6.773V359.476C368.414,355.734,365.382,352.701,361.641,352.701z M354.866,462.259h-31.741V366.25   h31.741V462.259z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M276.551,390.57h-45.289c-3.742,0-6.774,3.033-6.774,6.775v71.688c0,3.741,3.033,6.773,6.774,6.773h45.289   c3.742,0,6.774-3.032,6.774-6.773v-71.688C283.325,393.604,280.293,390.57,276.551,390.57z M269.776,462.259h-31.741v-58.14h31.741   V462.259z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M191.461,422.544h-45.29c-3.741,0-6.774,3.032-6.774,6.774v39.715c0,3.741,3.033,6.773,6.774,6.773h45.29   c3.741,0,6.774-3.032,6.774-6.773v-39.715C198.235,425.576,195.203,422.544,191.461,422.544z M184.687,462.259h-31.741v-26.166   h31.741V462.259z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M413.077,177.319c1.143-2.308,0.877-5.065-0.685-7.113l-26.73-35.032c-1.281-1.68-3.273-2.666-5.385-2.666   c-2.113,0-4.105,0.986-5.387,2.666l-26.729,35.032c-2.27,2.974-1.697,7.225,1.276,9.495c1.228,0.936,2.672,1.389,4.104,1.389   c2.041,0,4.057-0.917,5.391-2.665l21.344-27.974l13.039,17.09h-13.039c-3.742,0-6.774,3.033-6.774,6.774   c0,97.535-79.351,176.885-176.885,176.885c-3.742,0-6.774,3.033-6.774,6.775c0,3.74,3.033,6.773,6.774,6.773   c102.737,0,186.718-81.78,190.3-183.659h20.088C409.582,181.089,411.936,179.628,413.077,177.319z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M289.732,276.23c0.386-0.295,0.733-0.629,1.048-0.999c27.02-25.228,43.958-61.123,43.958-100.917   c0-76.16-61.961-138.121-138.121-138.121c-3.452,0-6.862,0.17-10.251,0.42c-0.008,0-0.016-0.001-0.024,0   c-0.005,0-0.01,0.002-0.016,0.003c-38.972,2.887-73.493,21.985-96.806,50.595c-0.391,0.383-0.723,0.819-1.013,1.288   c-18.762,23.587-30.013,53.403-30.013,85.814c0,36.062,13.906,68.926,36.62,93.55c0.29,0.378,0.619,0.72,0.981,1.029   c25.207,26.774,60.933,43.542,100.521,43.542C232.463,312.436,265.157,298.703,289.732,276.23z M191.14,274.525   c-14.631-11.31-32.874-17.537-51.368-17.537h-36.23c-19.574-22.013-31.497-50.971-31.497-82.674   c0-28.364,9.547-54.528,25.571-75.492h37.786c9.966,0,18.075,8.108,18.075,18.075c0,9.967-8.109,18.076-18.075,18.076h-18.369   c-15.455,0-28.029,12.574-28.029,28.029c0,15.456,12.574,28.029,28.029,28.029h1.417c9.157,0,16.605,7.45,16.605,16.607   c0,9.157-7.449,16.606-16.605,16.606c-3.742,0-6.774,3.032-6.774,6.774c0,3.741,3.033,6.774,6.774,6.774   c16.627,0,30.154-13.528,30.154-30.155c0-16.628-13.527-30.155-30.154-30.155h-1.417c-7.985,0-14.48-6.496-14.48-14.481   c0-7.985,6.496-14.48,14.48-14.48h18.369c17.437,0,31.624-14.186,31.624-31.625c0-17.438-14.187-31.624-31.624-31.624h-25.785   c19.031-18.599,43.973-31.148,71.714-34.561c5.422,24.208,26.823,41.732,52.294,41.732h19.699c3.741,0,6.773-3.033,6.773-6.774   s-3.032-6.774-6.773-6.774h-19.699c-18.304,0-33.787-12.107-38.555-29.116c0.518-0.006,1.028-0.039,1.547-0.039   c68.689,0,124.572,55.883,124.572,124.573c0,35.244-14.736,67.092-38.342,89.774h-22.665c-7.25,0-13.148-5.897-13.148-13.147   s5.898-13.147,13.148-13.147h2.568c15.05,0,27.294-12.245,27.294-27.294s-12.244-27.293-27.294-27.293h-24.105   c-11.336,0-20.558-9.223-20.558-20.559s9.222-20.558,20.558-20.558h49.802c3.741,0,6.773-3.032,6.773-6.774   s-3.032-6.774-6.773-6.774h-49.802c-18.807,0-34.106,15.3-34.106,34.106s15.3,34.107,34.106,34.107h24.105   c7.579,0,13.745,6.166,13.745,13.745s-6.166,13.745-13.745,13.745h-2.568c-14.721,0-26.696,11.976-26.696,26.696   s11.976,26.695,26.696,26.695h5.951c-19.869,13.412-43.794,21.25-69.516,21.25c-29.976,0-57.51-10.646-79.028-28.351h22.182   c15.511,0,30.811,5.224,43.083,14.708c1.232,0.953,2.691,1.414,4.138,1.414c2.025,0,4.03-0.904,5.364-2.632   C194.645,281.066,194.101,276.813,191.14,274.525z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, "Stage-Theatre"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "SearchIntendedMedium-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("svg", {
        version: "1.1",
        viewBox: "0 0 512 640",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M446.73,268.439h-45.29c-3.741,0-6.774,3.033-6.774,6.774s3.033,6.774,6.774,6.774h38.515v180.271h-31.74V305.661   c0-3.741-3.033-6.774-6.774-6.774s-6.774,3.033-6.774,6.774v163.372c0,3.741,3.033,6.773,6.774,6.773h45.29   c3.74,0,6.773-3.032,6.773-6.773V275.214C453.504,271.473,450.471,268.439,446.73,268.439z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M361.641,352.701h-45.289c-3.742,0-6.775,3.033-6.775,6.774v109.558c0,3.741,3.033,6.773,6.775,6.773h45.289   c3.741,0,6.773-3.032,6.773-6.773V359.476C368.414,355.734,365.382,352.701,361.641,352.701z M354.866,462.259h-31.741V366.25   h31.741V462.259z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M276.551,390.57h-45.289c-3.742,0-6.774,3.033-6.774,6.775v71.688c0,3.741,3.033,6.773,6.774,6.773h45.289   c3.742,0,6.774-3.032,6.774-6.773v-71.688C283.325,393.604,280.293,390.57,276.551,390.57z M269.776,462.259h-31.741v-58.14h31.741   V462.259z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M191.461,422.544h-45.29c-3.741,0-6.774,3.032-6.774,6.774v39.715c0,3.741,3.033,6.773,6.774,6.773h45.29   c3.741,0,6.774-3.032,6.774-6.773v-39.715C198.235,425.576,195.203,422.544,191.461,422.544z M184.687,462.259h-31.741v-26.166   h31.741V462.259z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M413.077,177.319c1.143-2.308,0.877-5.065-0.685-7.113l-26.73-35.032c-1.281-1.68-3.273-2.666-5.385-2.666   c-2.113,0-4.105,0.986-5.387,2.666l-26.729,35.032c-2.27,2.974-1.697,7.225,1.276,9.495c1.228,0.936,2.672,1.389,4.104,1.389   c2.041,0,4.057-0.917,5.391-2.665l21.344-27.974l13.039,17.09h-13.039c-3.742,0-6.774,3.033-6.774,6.774   c0,97.535-79.351,176.885-176.885,176.885c-3.742,0-6.774,3.033-6.774,6.775c0,3.74,3.033,6.773,6.774,6.773   c102.737,0,186.718-81.78,190.3-183.659h20.088C409.582,181.089,411.936,179.628,413.077,177.319z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M289.732,276.23c0.386-0.295,0.733-0.629,1.048-0.999c27.02-25.228,43.958-61.123,43.958-100.917   c0-76.16-61.961-138.121-138.121-138.121c-3.452,0-6.862,0.17-10.251,0.42c-0.008,0-0.016-0.001-0.024,0   c-0.005,0-0.01,0.002-0.016,0.003c-38.972,2.887-73.493,21.985-96.806,50.595c-0.391,0.383-0.723,0.819-1.013,1.288   c-18.762,23.587-30.013,53.403-30.013,85.814c0,36.062,13.906,68.926,36.62,93.55c0.29,0.378,0.619,0.72,0.981,1.029   c25.207,26.774,60.933,43.542,100.521,43.542C232.463,312.436,265.157,298.703,289.732,276.23z M191.14,274.525   c-14.631-11.31-32.874-17.537-51.368-17.537h-36.23c-19.574-22.013-31.497-50.971-31.497-82.674   c0-28.364,9.547-54.528,25.571-75.492h37.786c9.966,0,18.075,8.108,18.075,18.075c0,9.967-8.109,18.076-18.075,18.076h-18.369   c-15.455,0-28.029,12.574-28.029,28.029c0,15.456,12.574,28.029,28.029,28.029h1.417c9.157,0,16.605,7.45,16.605,16.607   c0,9.157-7.449,16.606-16.605,16.606c-3.742,0-6.774,3.032-6.774,6.774c0,3.741,3.033,6.774,6.774,6.774   c16.627,0,30.154-13.528,30.154-30.155c0-16.628-13.527-30.155-30.154-30.155h-1.417c-7.985,0-14.48-6.496-14.48-14.481   c0-7.985,6.496-14.48,14.48-14.48h18.369c17.437,0,31.624-14.186,31.624-31.625c0-17.438-14.187-31.624-31.624-31.624h-25.785   c19.031-18.599,43.973-31.148,71.714-34.561c5.422,24.208,26.823,41.732,52.294,41.732h19.699c3.741,0,6.773-3.033,6.773-6.774   s-3.032-6.774-6.773-6.774h-19.699c-18.304,0-33.787-12.107-38.555-29.116c0.518-0.006,1.028-0.039,1.547-0.039   c68.689,0,124.572,55.883,124.572,124.573c0,35.244-14.736,67.092-38.342,89.774h-22.665c-7.25,0-13.148-5.897-13.148-13.147   s5.898-13.147,13.148-13.147h2.568c15.05,0,27.294-12.245,27.294-27.294s-12.244-27.293-27.294-27.293h-24.105   c-11.336,0-20.558-9.223-20.558-20.559s9.222-20.558,20.558-20.558h49.802c3.741,0,6.773-3.032,6.773-6.774   s-3.032-6.774-6.773-6.774h-49.802c-18.807,0-34.106,15.3-34.106,34.106s15.3,34.107,34.106,34.107h24.105   c7.579,0,13.745,6.166,13.745,13.745s-6.166,13.745-13.745,13.745h-2.568c-14.721,0-26.696,11.976-26.696,26.696   s11.976,26.695,26.696,26.695h5.951c-19.869,13.412-43.794,21.25-69.516,21.25c-29.976,0-57.51-10.646-79.028-28.351h22.182   c15.511,0,30.811,5.224,43.083,14.708c1.232,0.953,2.691,1.414,4.138,1.414c2.025,0,4.03-0.904,5.364-2.632   C194.645,281.066,194.101,276.813,191.14,274.525z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, "Literary"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "SearchIntendedMedium-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("svg", {
        version: "1.1",
        viewBox: "0 0 512 640",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M446.73,268.439h-45.29c-3.741,0-6.774,3.033-6.774,6.774s3.033,6.774,6.774,6.774h38.515v180.271h-31.74V305.661   c0-3.741-3.033-6.774-6.774-6.774s-6.774,3.033-6.774,6.774v163.372c0,3.741,3.033,6.773,6.774,6.773h45.29   c3.74,0,6.773-3.032,6.773-6.773V275.214C453.504,271.473,450.471,268.439,446.73,268.439z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M361.641,352.701h-45.289c-3.742,0-6.775,3.033-6.775,6.774v109.558c0,3.741,3.033,6.773,6.775,6.773h45.289   c3.741,0,6.773-3.032,6.773-6.773V359.476C368.414,355.734,365.382,352.701,361.641,352.701z M354.866,462.259h-31.741V366.25   h31.741V462.259z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M276.551,390.57h-45.289c-3.742,0-6.774,3.033-6.774,6.775v71.688c0,3.741,3.033,6.773,6.774,6.773h45.289   c3.742,0,6.774-3.032,6.774-6.773v-71.688C283.325,393.604,280.293,390.57,276.551,390.57z M269.776,462.259h-31.741v-58.14h31.741   V462.259z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M191.461,422.544h-45.29c-3.741,0-6.774,3.032-6.774,6.774v39.715c0,3.741,3.033,6.773,6.774,6.773h45.29   c3.741,0,6.774-3.032,6.774-6.773v-39.715C198.235,425.576,195.203,422.544,191.461,422.544z M184.687,462.259h-31.741v-26.166   h31.741V462.259z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M413.077,177.319c1.143-2.308,0.877-5.065-0.685-7.113l-26.73-35.032c-1.281-1.68-3.273-2.666-5.385-2.666   c-2.113,0-4.105,0.986-5.387,2.666l-26.729,35.032c-2.27,2.974-1.697,7.225,1.276,9.495c1.228,0.936,2.672,1.389,4.104,1.389   c2.041,0,4.057-0.917,5.391-2.665l21.344-27.974l13.039,17.09h-13.039c-3.742,0-6.774,3.033-6.774,6.774   c0,97.535-79.351,176.885-176.885,176.885c-3.742,0-6.774,3.033-6.774,6.775c0,3.74,3.033,6.773,6.774,6.773   c102.737,0,186.718-81.78,190.3-183.659h20.088C409.582,181.089,411.936,179.628,413.077,177.319z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M289.732,276.23c0.386-0.295,0.733-0.629,1.048-0.999c27.02-25.228,43.958-61.123,43.958-100.917   c0-76.16-61.961-138.121-138.121-138.121c-3.452,0-6.862,0.17-10.251,0.42c-0.008,0-0.016-0.001-0.024,0   c-0.005,0-0.01,0.002-0.016,0.003c-38.972,2.887-73.493,21.985-96.806,50.595c-0.391,0.383-0.723,0.819-1.013,1.288   c-18.762,23.587-30.013,53.403-30.013,85.814c0,36.062,13.906,68.926,36.62,93.55c0.29,0.378,0.619,0.72,0.981,1.029   c25.207,26.774,60.933,43.542,100.521,43.542C232.463,312.436,265.157,298.703,289.732,276.23z M191.14,274.525   c-14.631-11.31-32.874-17.537-51.368-17.537h-36.23c-19.574-22.013-31.497-50.971-31.497-82.674   c0-28.364,9.547-54.528,25.571-75.492h37.786c9.966,0,18.075,8.108,18.075,18.075c0,9.967-8.109,18.076-18.075,18.076h-18.369   c-15.455,0-28.029,12.574-28.029,28.029c0,15.456,12.574,28.029,28.029,28.029h1.417c9.157,0,16.605,7.45,16.605,16.607   c0,9.157-7.449,16.606-16.605,16.606c-3.742,0-6.774,3.032-6.774,6.774c0,3.741,3.033,6.774,6.774,6.774   c16.627,0,30.154-13.528,30.154-30.155c0-16.628-13.527-30.155-30.154-30.155h-1.417c-7.985,0-14.48-6.496-14.48-14.481   c0-7.985,6.496-14.48,14.48-14.48h18.369c17.437,0,31.624-14.186,31.624-31.625c0-17.438-14.187-31.624-31.624-31.624h-25.785   c19.031-18.599,43.973-31.148,71.714-34.561c5.422,24.208,26.823,41.732,52.294,41.732h19.699c3.741,0,6.773-3.033,6.773-6.774   s-3.032-6.774-6.773-6.774h-19.699c-18.304,0-33.787-12.107-38.555-29.116c0.518-0.006,1.028-0.039,1.547-0.039   c68.689,0,124.572,55.883,124.572,124.573c0,35.244-14.736,67.092-38.342,89.774h-22.665c-7.25,0-13.148-5.897-13.148-13.147   s5.898-13.147,13.148-13.147h2.568c15.05,0,27.294-12.245,27.294-27.294s-12.244-27.293-27.294-27.293h-24.105   c-11.336,0-20.558-9.223-20.558-20.559s9.222-20.558,20.558-20.558h49.802c3.741,0,6.773-3.032,6.773-6.774   s-3.032-6.774-6.773-6.774h-49.802c-18.807,0-34.106,15.3-34.106,34.106s15.3,34.107,34.106,34.107h24.105   c7.579,0,13.745,6.166,13.745,13.745s-6.166,13.745-13.745,13.745h-2.568c-14.721,0-26.696,11.976-26.696,26.696   s11.976,26.695,26.696,26.695h5.951c-19.869,13.412-43.794,21.25-69.516,21.25c-29.976,0-57.51-10.646-79.028-28.351h22.182   c15.511,0,30.811,5.224,43.083,14.708c1.232,0.953,2.691,1.414,4.138,1.414c2.025,0,4.03-0.904,5.364-2.632   C194.645,281.066,194.101,276.813,191.14,274.525z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, "Radio-Podcast")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("style", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, "\n            .SearchIntendedMedium {\n              background: white;\n              padding: 10px;\n              box-sizing: border-box;\n              font-family: sans-serif;\n              border-radius: 5px;\n              margin-bottom: 10px;\n              position: relative;\n            }\n\n            .searchIntendedMenu {\n              position: absolute;\n              top: 23px;\n              right: 20px;\n              cursor: pointer;\n            }\n\n            .searchIntendedMenu img {\n              width: 15px;\n            }\n\n            .SearchIntendedMedium-items {\n              display: flex;\n              justify-content: space-evenly;\n              align-items: center;\n              flex-wrap: wrap;\n              display: none;\n            }\n\n            .SearchIntendedMedium-items.active {\n              display: flex;\n            }\n\n            .SearchIntendedMedium-item a {\n              text-decoration: none;\n            }\n\n            .SearchIntendedMedium-item {\n              margin: 10px 10px 20px 10px;\n            }\n\n            .SearchIntendedMedium-item:hover h4:before{\n              width: 100%;\n            }\n\n            .SearchIntendedMedium-item:hover .icon{\n              border: 2px solid #ffa603;\n              background: #1c2d4c;\n            }\n\n            .SearchIntendedMedium-item:hover svg{\n              fill: #ffa603;\n            }\n\n\n            .SearchIntendedMedium-item h4 {\n              margin-top: 10px;\n              color: #1c2d4c;\n              border-bottom: 2px solid transparent;\n              transition: .25s linear;\n              position: relative;\n              display: inline-block;\n            }\n\n            .SearchIntendedMedium-item h4:before {\n              content: \"\";\n              position: absolute;\n              bottom: -5px;\n              left: 0;\n              height: 2px;\n              width: 0;\n              background: #1c2d4c;\n              transition: .15s linear;\n            }\n\n            .SearchIntendedMedium-item svg{\n              fill: #1c2d4c;\n              margin: 0 auto;\n              width: 70px;\n              height: 70px;\n              background: transparent;\n              border-radius: 50%;\n              transition: .25s linear;\n            }\n\n            .icon {\n              width: 70px;\n              height: 65px;\n              background: transparent;\n              padding-top: 5px;\n              border-radius: 50%;\n              transition: .25s linear;\n              border: 2px solid #1c2d4c;\n              margin: auto;\n            }\n          "));
    }
  }]);

  return SearchIntendedMedium;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SearchIntendedMedium);

/***/ }),

/***/ "./components/SearchLanguages.js":
/*!***************************************!*\
  !*** ./components/SearchLanguages.js ***!
  \***************************************/
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _SearchTitle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SearchTitle */ "./components/SearchTitle.js");







var _jsxFileName = "/Users/daniloviacavavizarreta/www/storyrocketreact/components/SearchLanguages.js";



var SearchLanguages =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(SearchLanguages, _Component);

  function SearchLanguages() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SearchLanguages);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SearchLanguages)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleLanguage", function (e) {
      var language = document.getElementById("searchLanguages-list");
      language.classList.toggle("active");
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SearchLanguages, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "searchLanguages",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_SearchTitle__WEBPACK_IMPORTED_MODULE_8__["default"], {
        title: "Languages",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        onClick: this.handleLanguage,
        className: "searchLanguagesMenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "/static/img/arrowUp.svg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "searchLanguages-list",
        id: "searchLanguages-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        className: "styled-checkbox",
        id: "caja1",
        type: "checkbox",
        value: "value1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        for: "caja1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, "English")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        className: "styled-checkbox",
        id: "caja2",
        type: "checkbox",
        value: "value1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        for: "caja2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "Spanish")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        className: "styled-checkbox",
        id: "caja3",
        type: "checkbox",
        value: "value1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        for: "caja3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, "French")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        className: "styled-checkbox",
        id: "caja8",
        type: "checkbox",
        value: "value1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        for: "caja8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "Arabic"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        className: "styled-checkbox",
        id: "caja4",
        type: "checkbox",
        value: "value",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        for: "caja4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "Icelandinc")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        className: "styled-checkbox",
        id: "caja5",
        type: "checkbox",
        value: "value",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        for: "caja5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, "Portuguese")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        className: "styled-checkbox",
        id: "caja6",
        type: "checkbox",
        value: "value1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        for: "caja6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "Chinese")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        className: "styled-checkbox",
        id: "caja11",
        type: "checkbox",
        value: "value",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        for: "caja11",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "Dutch")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("style", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "\n\t\t\t\t.searchLanguages {\n\t\t\t\t\tfont-family: sans-serif;\n\t\t\t\t\tbackground: white;\n\t\t\t\t\tpadding: 10px;\n\t\t\t\t\tborder-radius: 5px;\n\t\t\t\t  margin-bottom: 10px;\n\t\t\t\t  position: relative;\n\t\t\t\t}\n\n\t\t\t\t.searchLanguages-title {\n\t\t\t\t\ttext-align: left;\n\t\t\t\t\tfont-size: 18px;\n\t\t\t\t\tfont-weight: bold;\n\t\t\t\t\tmargin-bottom: 25px;\n\t\t\t\t\tfont-family: sans-serif;\n\t\t\t\t}\n\n\t\t\t\t.searchLanguagesMenu {\n\t\t\t\t  position: absolute;\n\t\t\t\t  top: 23px;\n\t\t\t\t  right: 20px;\n\t\t\t\t  cursor: pointer;\n\t\t\t\t}\n\n\t\t\t\t.searchLanguagesMenu img {\n\t\t\t\t  width: 15px;\n\t\t\t\t}\n\n\t\t\t\t.searchLanguages-list {\n\t\t\t\t  display: none;\n\t\t\t\t  justify-content: space-around;\n\t\t\t\t  align-items: center;\n\t\t\t\t}\n\n\t\t\t\t.searchLanguages-list.active {\n\t\t\t\t  display: flex;\n\t\t\t\t}\n\t\t\t\t.searchLanguages-list ul{\n\t\t\t\t  \n\t\t\t\t}\n\t\t\t\t.searchLanguages-list li{\n\t\t\t\t  text-align: left;\n\t\t\t\t  margin-bottom: 10px;\n\t\t\t\t}\n\n\t\t\t\t.styled-checkbox {\n\t\t\t\t  position: absolute;\n\t\t\t\t  opacity: 0;\n\t\t\t\t}\n\t\t\t\t.styled-checkbox + label {\n\t\t\t\t  position: relative;\n\t\t\t\t  cursor: pointer;\n\t\t\t\t  padding: 0;\n\t\t\t\t}\n\t\t\t\t.styled-checkbox + label:before {\n\t\t\t\t  content: '';\n\t\t\t\t  margin-right: 10px;\n\t\t\t\t  display: inline-block;\n\t\t\t\t  vertical-align: text-top;\n\t\t\t\t  width: 15px;\n\t\t\t\t  height: 15px;\n\t\t\t\t  background: white;\n\t\t\t\t  border: 2px solid #160e26;\n\t\t\t\t  border-radius: 4px;\n\t\t\t\t}\n\t\t\t\t.styled-checkbox:hover + label:before {\n\t\t\t\t  background: white;\n\t\t\t\t}\n\t\t\t\t.styled-checkbox:focus + label:before {\n\t\t\t\t  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.12);\n\t\t\t\t}\n\t\t\t\t.styled-checkbox:checked + label:before {\n\t\t\t\t  background: #1c2d4c;\n\t\t\t\t}\n\t\t\t\t.styled-checkbox:disabled + label {\n\t\t\t\t  color: #b8b8b8;\n\t\t\t\t  cursor: auto;\n\t\t\t\t}\n\t\t\t\t.styled-checkbox:disabled + label:before {\n\t\t\t\t  box-shadow: none;\n\t\t\t\t  background: #ddd;\n\t\t\t\t}\n\t\t\t\t.styled-checkbox:checked + label:after {\n\t\t\t\t  content: '';\n\t\t\t\t  position: absolute;\n\t\t\t\t  left: 4px;\n\t\t\t\t  top: 8px;\n\t\t\t\t  background: orange;\n\t\t\t\t  width: 2px;\n\t\t\t\t  height: 2px;\n\t\t\t\t  box-shadow: 2px 0 0 orange, 4px 0 0 orange, 4px -2px 0 orange, 4px -4px 0 orange, 4px -6px 0 orange, 4px -8px 0 orange;\n\t\t\t\t  -webkit-transform: rotate(45deg);\n\t\t\t\t          transform: rotate(45deg);\n\t\t\t\t}\n\n\t\t\t"));
    }
  }]);

  return SearchLanguages;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SearchLanguages);

/***/ }),

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _SearchTitle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SearchTitle */ "./components/SearchTitle.js");
/* harmony import */ var react_tag_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-tag-input */ "react-tag-input");
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
      }, "\n            .SearchLocation {\n              background: white;\n              padding: 10px;\n              box-sizing: border-box;\n              font-family: sans-serif;\n              border-radius: 5px;\n              margin-bottom: 10px;\n              position: relative;\n            }\n\n            .SearchLocation-title {\n              text-align: left;\n              font-size: 18px;\n              font-weight: bold;\n              margin-bottom: 15px;\n            }\n\n            .searchLocationMenu {\n              position: absolute;\n              top: 23px;\n              right: 20px;\n              cursor: pointer;\n            }\n\n            .searchLocationMenu img {\n              width: 15px;\n            }\n\n            .SearchLocation-input {\n              position: relative;\n              display: none;\n            }\n\n            .SearchLocation-input.active {\n              display: block;\n            }\n\n            .SearchLocation-input .ReactTags__tags{\n              position: relative;\n            }\n\n            .SearchLocation-image {\n              position: absolute;\n              top: -37px;\n              right: 27px;\n              width: 20px;\n              height: 20px;\n            }\n\n            .SearchLocation-input .ReactTags__tagInput{\n              position: absolute;\n              top: -45px;\n              left: 15px;\n              width: 90%;\n              margin: auto;\n            }\n\n            .SearchLocation-input .ReactTags__tagInput input{\n              width: 100%;\n              height: 30px;\n              box-sizing: border-box;\n              padding-left: 10px;\n            }\n\n            .ReactTags__selected {\n              margin-top: 70px;\n              text-align: left;\n              padding-left: 17px;\n            }\n\n            .tag-wrapper {\n              background: #1c2d4c;\n              margin: 5px;\n              color: #ff8f17;\n              padding: 5px 10px;\n              font-size: 15px;\n              border-radius: 15px;\n              display: inline-block;\n              \n            }\n          "));
    }
  }]);

  return SearchLocation;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SearchLocation);

/***/ }),

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleMenuMaterial", function (e) {
      var material = document.getElementById("SearchMaterialType");
      material.classList.toggle("active");
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
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_SearchTitle__WEBPACK_IMPORTED_MODULE_8__["default"], {
        title: "Material Type",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        onClick: this.handleMenuMaterial,
        className: "searchMaterialsMenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "/static/img/arrowUp.svg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "SearchMaterialType-items",
        id: "SearchMaterialType",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "SearchMaterialType-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("svg", {
        version: "1.1",
        viewBox: "0 0 512 640",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M446.73,268.439h-45.29c-3.741,0-6.774,3.033-6.774,6.774s3.033,6.774,6.774,6.774h38.515v180.271h-31.74V305.661   c0-3.741-3.033-6.774-6.774-6.774s-6.774,3.033-6.774,6.774v163.372c0,3.741,3.033,6.773,6.774,6.773h45.29   c3.74,0,6.773-3.032,6.773-6.773V275.214C453.504,271.473,450.471,268.439,446.73,268.439z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M361.641,352.701h-45.289c-3.742,0-6.775,3.033-6.775,6.774v109.558c0,3.741,3.033,6.773,6.775,6.773h45.289   c3.741,0,6.773-3.032,6.773-6.773V359.476C368.414,355.734,365.382,352.701,361.641,352.701z M354.866,462.259h-31.741V366.25   h31.741V462.259z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M276.551,390.57h-45.289c-3.742,0-6.774,3.033-6.774,6.775v71.688c0,3.741,3.033,6.773,6.774,6.773h45.289   c3.742,0,6.774-3.032,6.774-6.773v-71.688C283.325,393.604,280.293,390.57,276.551,390.57z M269.776,462.259h-31.741v-58.14h31.741   V462.259z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M191.461,422.544h-45.29c-3.741,0-6.774,3.032-6.774,6.774v39.715c0,3.741,3.033,6.773,6.774,6.773h45.29   c3.741,0,6.774-3.032,6.774-6.773v-39.715C198.235,425.576,195.203,422.544,191.461,422.544z M184.687,462.259h-31.741v-26.166   h31.741V462.259z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M413.077,177.319c1.143-2.308,0.877-5.065-0.685-7.113l-26.73-35.032c-1.281-1.68-3.273-2.666-5.385-2.666   c-2.113,0-4.105,0.986-5.387,2.666l-26.729,35.032c-2.27,2.974-1.697,7.225,1.276,9.495c1.228,0.936,2.672,1.389,4.104,1.389   c2.041,0,4.057-0.917,5.391-2.665l21.344-27.974l13.039,17.09h-13.039c-3.742,0-6.774,3.033-6.774,6.774   c0,97.535-79.351,176.885-176.885,176.885c-3.742,0-6.774,3.033-6.774,6.775c0,3.74,3.033,6.773,6.774,6.773   c102.737,0,186.718-81.78,190.3-183.659h20.088C409.582,181.089,411.936,179.628,413.077,177.319z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M289.732,276.23c0.386-0.295,0.733-0.629,1.048-0.999c27.02-25.228,43.958-61.123,43.958-100.917   c0-76.16-61.961-138.121-138.121-138.121c-3.452,0-6.862,0.17-10.251,0.42c-0.008,0-0.016-0.001-0.024,0   c-0.005,0-0.01,0.002-0.016,0.003c-38.972,2.887-73.493,21.985-96.806,50.595c-0.391,0.383-0.723,0.819-1.013,1.288   c-18.762,23.587-30.013,53.403-30.013,85.814c0,36.062,13.906,68.926,36.62,93.55c0.29,0.378,0.619,0.72,0.981,1.029   c25.207,26.774,60.933,43.542,100.521,43.542C232.463,312.436,265.157,298.703,289.732,276.23z M191.14,274.525   c-14.631-11.31-32.874-17.537-51.368-17.537h-36.23c-19.574-22.013-31.497-50.971-31.497-82.674   c0-28.364,9.547-54.528,25.571-75.492h37.786c9.966,0,18.075,8.108,18.075,18.075c0,9.967-8.109,18.076-18.075,18.076h-18.369   c-15.455,0-28.029,12.574-28.029,28.029c0,15.456,12.574,28.029,28.029,28.029h1.417c9.157,0,16.605,7.45,16.605,16.607   c0,9.157-7.449,16.606-16.605,16.606c-3.742,0-6.774,3.032-6.774,6.774c0,3.741,3.033,6.774,6.774,6.774   c16.627,0,30.154-13.528,30.154-30.155c0-16.628-13.527-30.155-30.154-30.155h-1.417c-7.985,0-14.48-6.496-14.48-14.481   c0-7.985,6.496-14.48,14.48-14.48h18.369c17.437,0,31.624-14.186,31.624-31.625c0-17.438-14.187-31.624-31.624-31.624h-25.785   c19.031-18.599,43.973-31.148,71.714-34.561c5.422,24.208,26.823,41.732,52.294,41.732h19.699c3.741,0,6.773-3.033,6.773-6.774   s-3.032-6.774-6.773-6.774h-19.699c-18.304,0-33.787-12.107-38.555-29.116c0.518-0.006,1.028-0.039,1.547-0.039   c68.689,0,124.572,55.883,124.572,124.573c0,35.244-14.736,67.092-38.342,89.774h-22.665c-7.25,0-13.148-5.897-13.148-13.147   s5.898-13.147,13.148-13.147h2.568c15.05,0,27.294-12.245,27.294-27.294s-12.244-27.293-27.294-27.293h-24.105   c-11.336,0-20.558-9.223-20.558-20.559s9.222-20.558,20.558-20.558h49.802c3.741,0,6.773-3.032,6.773-6.774   s-3.032-6.774-6.773-6.774h-49.802c-18.807,0-34.106,15.3-34.106,34.106s15.3,34.107,34.106,34.107h24.105   c7.579,0,13.745,6.166,13.745,13.745s-6.166,13.745-13.745,13.745h-2.568c-14.721,0-26.696,11.976-26.696,26.696   s11.976,26.695,26.696,26.695h5.951c-19.869,13.412-43.794,21.25-69.516,21.25c-29.976,0-57.51-10.646-79.028-28.351h22.182   c15.511,0,30.811,5.224,43.083,14.708c1.232,0.953,2.691,1.414,4.138,1.414c2.025,0,4.03-0.904,5.364-2.632   C194.645,281.066,194.101,276.813,191.14,274.525z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "Book"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "SearchMaterialType-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("svg", {
        version: "1.1",
        viewBox: "0 0 512 640",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M446.73,268.439h-45.29c-3.741,0-6.774,3.033-6.774,6.774s3.033,6.774,6.774,6.774h38.515v180.271h-31.74V305.661   c0-3.741-3.033-6.774-6.774-6.774s-6.774,3.033-6.774,6.774v163.372c0,3.741,3.033,6.773,6.774,6.773h45.29   c3.74,0,6.773-3.032,6.773-6.773V275.214C453.504,271.473,450.471,268.439,446.73,268.439z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M361.641,352.701h-45.289c-3.742,0-6.775,3.033-6.775,6.774v109.558c0,3.741,3.033,6.773,6.775,6.773h45.289   c3.741,0,6.773-3.032,6.773-6.773V359.476C368.414,355.734,365.382,352.701,361.641,352.701z M354.866,462.259h-31.741V366.25   h31.741V462.259z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M276.551,390.57h-45.289c-3.742,0-6.774,3.033-6.774,6.775v71.688c0,3.741,3.033,6.773,6.774,6.773h45.289   c3.742,0,6.774-3.032,6.774-6.773v-71.688C283.325,393.604,280.293,390.57,276.551,390.57z M269.776,462.259h-31.741v-58.14h31.741   V462.259z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M191.461,422.544h-45.29c-3.741,0-6.774,3.032-6.774,6.774v39.715c0,3.741,3.033,6.773,6.774,6.773h45.29   c3.741,0,6.774-3.032,6.774-6.773v-39.715C198.235,425.576,195.203,422.544,191.461,422.544z M184.687,462.259h-31.741v-26.166   h31.741V462.259z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M413.077,177.319c1.143-2.308,0.877-5.065-0.685-7.113l-26.73-35.032c-1.281-1.68-3.273-2.666-5.385-2.666   c-2.113,0-4.105,0.986-5.387,2.666l-26.729,35.032c-2.27,2.974-1.697,7.225,1.276,9.495c1.228,0.936,2.672,1.389,4.104,1.389   c2.041,0,4.057-0.917,5.391-2.665l21.344-27.974l13.039,17.09h-13.039c-3.742,0-6.774,3.033-6.774,6.774   c0,97.535-79.351,176.885-176.885,176.885c-3.742,0-6.774,3.033-6.774,6.775c0,3.74,3.033,6.773,6.774,6.773   c102.737,0,186.718-81.78,190.3-183.659h20.088C409.582,181.089,411.936,179.628,413.077,177.319z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M289.732,276.23c0.386-0.295,0.733-0.629,1.048-0.999c27.02-25.228,43.958-61.123,43.958-100.917   c0-76.16-61.961-138.121-138.121-138.121c-3.452,0-6.862,0.17-10.251,0.42c-0.008,0-0.016-0.001-0.024,0   c-0.005,0-0.01,0.002-0.016,0.003c-38.972,2.887-73.493,21.985-96.806,50.595c-0.391,0.383-0.723,0.819-1.013,1.288   c-18.762,23.587-30.013,53.403-30.013,85.814c0,36.062,13.906,68.926,36.62,93.55c0.29,0.378,0.619,0.72,0.981,1.029   c25.207,26.774,60.933,43.542,100.521,43.542C232.463,312.436,265.157,298.703,289.732,276.23z M191.14,274.525   c-14.631-11.31-32.874-17.537-51.368-17.537h-36.23c-19.574-22.013-31.497-50.971-31.497-82.674   c0-28.364,9.547-54.528,25.571-75.492h37.786c9.966,0,18.075,8.108,18.075,18.075c0,9.967-8.109,18.076-18.075,18.076h-18.369   c-15.455,0-28.029,12.574-28.029,28.029c0,15.456,12.574,28.029,28.029,28.029h1.417c9.157,0,16.605,7.45,16.605,16.607   c0,9.157-7.449,16.606-16.605,16.606c-3.742,0-6.774,3.032-6.774,6.774c0,3.741,3.033,6.774,6.774,6.774   c16.627,0,30.154-13.528,30.154-30.155c0-16.628-13.527-30.155-30.154-30.155h-1.417c-7.985,0-14.48-6.496-14.48-14.481   c0-7.985,6.496-14.48,14.48-14.48h18.369c17.437,0,31.624-14.186,31.624-31.625c0-17.438-14.187-31.624-31.624-31.624h-25.785   c19.031-18.599,43.973-31.148,71.714-34.561c5.422,24.208,26.823,41.732,52.294,41.732h19.699c3.741,0,6.773-3.033,6.773-6.774   s-3.032-6.774-6.773-6.774h-19.699c-18.304,0-33.787-12.107-38.555-29.116c0.518-0.006,1.028-0.039,1.547-0.039   c68.689,0,124.572,55.883,124.572,124.573c0,35.244-14.736,67.092-38.342,89.774h-22.665c-7.25,0-13.148-5.897-13.148-13.147   s5.898-13.147,13.148-13.147h2.568c15.05,0,27.294-12.245,27.294-27.294s-12.244-27.293-27.294-27.293h-24.105   c-11.336,0-20.558-9.223-20.558-20.559s9.222-20.558,20.558-20.558h49.802c3.741,0,6.773-3.032,6.773-6.774   s-3.032-6.774-6.773-6.774h-49.802c-18.807,0-34.106,15.3-34.106,34.106s15.3,34.107,34.106,34.107h24.105   c7.579,0,13.745,6.166,13.745,13.745s-6.166,13.745-13.745,13.745h-2.568c-14.721,0-26.696,11.976-26.696,26.696   s11.976,26.695,26.696,26.695h5.951c-19.869,13.412-43.794,21.25-69.516,21.25c-29.976,0-57.51-10.646-79.028-28.351h22.182   c15.511,0,30.811,5.224,43.083,14.708c1.232,0.953,2.691,1.414,4.138,1.414c2.025,0,4.03-0.904,5.364-2.632   C194.645,281.066,194.101,276.813,191.14,274.525z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "Manuscript"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "SearchMaterialType-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("svg", {
        version: "1.1",
        viewBox: "0 0 512 640",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M446.73,268.439h-45.29c-3.741,0-6.774,3.033-6.774,6.774s3.033,6.774,6.774,6.774h38.515v180.271h-31.74V305.661   c0-3.741-3.033-6.774-6.774-6.774s-6.774,3.033-6.774,6.774v163.372c0,3.741,3.033,6.773,6.774,6.773h45.29   c3.74,0,6.773-3.032,6.773-6.773V275.214C453.504,271.473,450.471,268.439,446.73,268.439z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M361.641,352.701h-45.289c-3.742,0-6.775,3.033-6.775,6.774v109.558c0,3.741,3.033,6.773,6.775,6.773h45.289   c3.741,0,6.773-3.032,6.773-6.773V359.476C368.414,355.734,365.382,352.701,361.641,352.701z M354.866,462.259h-31.741V366.25   h31.741V462.259z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M276.551,390.57h-45.289c-3.742,0-6.774,3.033-6.774,6.775v71.688c0,3.741,3.033,6.773,6.774,6.773h45.289   c3.742,0,6.774-3.032,6.774-6.773v-71.688C283.325,393.604,280.293,390.57,276.551,390.57z M269.776,462.259h-31.741v-58.14h31.741   V462.259z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M191.461,422.544h-45.29c-3.741,0-6.774,3.032-6.774,6.774v39.715c0,3.741,3.033,6.773,6.774,6.773h45.29   c3.741,0,6.774-3.032,6.774-6.773v-39.715C198.235,425.576,195.203,422.544,191.461,422.544z M184.687,462.259h-31.741v-26.166   h31.741V462.259z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M413.077,177.319c1.143-2.308,0.877-5.065-0.685-7.113l-26.73-35.032c-1.281-1.68-3.273-2.666-5.385-2.666   c-2.113,0-4.105,0.986-5.387,2.666l-26.729,35.032c-2.27,2.974-1.697,7.225,1.276,9.495c1.228,0.936,2.672,1.389,4.104,1.389   c2.041,0,4.057-0.917,5.391-2.665l21.344-27.974l13.039,17.09h-13.039c-3.742,0-6.774,3.033-6.774,6.774   c0,97.535-79.351,176.885-176.885,176.885c-3.742,0-6.774,3.033-6.774,6.775c0,3.74,3.033,6.773,6.774,6.773   c102.737,0,186.718-81.78,190.3-183.659h20.088C409.582,181.089,411.936,179.628,413.077,177.319z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M289.732,276.23c0.386-0.295,0.733-0.629,1.048-0.999c27.02-25.228,43.958-61.123,43.958-100.917   c0-76.16-61.961-138.121-138.121-138.121c-3.452,0-6.862,0.17-10.251,0.42c-0.008,0-0.016-0.001-0.024,0   c-0.005,0-0.01,0.002-0.016,0.003c-38.972,2.887-73.493,21.985-96.806,50.595c-0.391,0.383-0.723,0.819-1.013,1.288   c-18.762,23.587-30.013,53.403-30.013,85.814c0,36.062,13.906,68.926,36.62,93.55c0.29,0.378,0.619,0.72,0.981,1.029   c25.207,26.774,60.933,43.542,100.521,43.542C232.463,312.436,265.157,298.703,289.732,276.23z M191.14,274.525   c-14.631-11.31-32.874-17.537-51.368-17.537h-36.23c-19.574-22.013-31.497-50.971-31.497-82.674   c0-28.364,9.547-54.528,25.571-75.492h37.786c9.966,0,18.075,8.108,18.075,18.075c0,9.967-8.109,18.076-18.075,18.076h-18.369   c-15.455,0-28.029,12.574-28.029,28.029c0,15.456,12.574,28.029,28.029,28.029h1.417c9.157,0,16.605,7.45,16.605,16.607   c0,9.157-7.449,16.606-16.605,16.606c-3.742,0-6.774,3.032-6.774,6.774c0,3.741,3.033,6.774,6.774,6.774   c16.627,0,30.154-13.528,30.154-30.155c0-16.628-13.527-30.155-30.154-30.155h-1.417c-7.985,0-14.48-6.496-14.48-14.481   c0-7.985,6.496-14.48,14.48-14.48h18.369c17.437,0,31.624-14.186,31.624-31.625c0-17.438-14.187-31.624-31.624-31.624h-25.785   c19.031-18.599,43.973-31.148,71.714-34.561c5.422,24.208,26.823,41.732,52.294,41.732h19.699c3.741,0,6.773-3.033,6.773-6.774   s-3.032-6.774-6.773-6.774h-19.699c-18.304,0-33.787-12.107-38.555-29.116c0.518-0.006,1.028-0.039,1.547-0.039   c68.689,0,124.572,55.883,124.572,124.573c0,35.244-14.736,67.092-38.342,89.774h-22.665c-7.25,0-13.148-5.897-13.148-13.147   s5.898-13.147,13.148-13.147h2.568c15.05,0,27.294-12.245,27.294-27.294s-12.244-27.293-27.294-27.293h-24.105   c-11.336,0-20.558-9.223-20.558-20.559s9.222-20.558,20.558-20.558h49.802c3.741,0,6.773-3.032,6.773-6.774   s-3.032-6.774-6.773-6.774h-49.802c-18.807,0-34.106,15.3-34.106,34.106s15.3,34.107,34.106,34.107h24.105   c7.579,0,13.745,6.166,13.745,13.745s-6.166,13.745-13.745,13.745h-2.568c-14.721,0-26.696,11.976-26.696,26.696   s11.976,26.695,26.696,26.695h5.951c-19.869,13.412-43.794,21.25-69.516,21.25c-29.976,0-57.51-10.646-79.028-28.351h22.182   c15.511,0,30.811,5.224,43.083,14.708c1.232,0.953,2.691,1.414,4.138,1.414c2.025,0,4.03-0.904,5.364-2.632   C194.645,281.066,194.101,276.813,191.14,274.525z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "Play"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "SearchMaterialType-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("svg", {
        version: "1.1",
        viewBox: "0 0 512 640",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M446.73,268.439h-45.29c-3.741,0-6.774,3.033-6.774,6.774s3.033,6.774,6.774,6.774h38.515v180.271h-31.74V305.661   c0-3.741-3.033-6.774-6.774-6.774s-6.774,3.033-6.774,6.774v163.372c0,3.741,3.033,6.773,6.774,6.773h45.29   c3.74,0,6.773-3.032,6.773-6.773V275.214C453.504,271.473,450.471,268.439,446.73,268.439z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M361.641,352.701h-45.289c-3.742,0-6.775,3.033-6.775,6.774v109.558c0,3.741,3.033,6.773,6.775,6.773h45.289   c3.741,0,6.773-3.032,6.773-6.773V359.476C368.414,355.734,365.382,352.701,361.641,352.701z M354.866,462.259h-31.741V366.25   h31.741V462.259z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M276.551,390.57h-45.289c-3.742,0-6.774,3.033-6.774,6.775v71.688c0,3.741,3.033,6.773,6.774,6.773h45.289   c3.742,0,6.774-3.032,6.774-6.773v-71.688C283.325,393.604,280.293,390.57,276.551,390.57z M269.776,462.259h-31.741v-58.14h31.741   V462.259z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M191.461,422.544h-45.29c-3.741,0-6.774,3.032-6.774,6.774v39.715c0,3.741,3.033,6.773,6.774,6.773h45.29   c3.741,0,6.774-3.032,6.774-6.773v-39.715C198.235,425.576,195.203,422.544,191.461,422.544z M184.687,462.259h-31.741v-26.166   h31.741V462.259z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M413.077,177.319c1.143-2.308,0.877-5.065-0.685-7.113l-26.73-35.032c-1.281-1.68-3.273-2.666-5.385-2.666   c-2.113,0-4.105,0.986-5.387,2.666l-26.729,35.032c-2.27,2.974-1.697,7.225,1.276,9.495c1.228,0.936,2.672,1.389,4.104,1.389   c2.041,0,4.057-0.917,5.391-2.665l21.344-27.974l13.039,17.09h-13.039c-3.742,0-6.774,3.033-6.774,6.774   c0,97.535-79.351,176.885-176.885,176.885c-3.742,0-6.774,3.033-6.774,6.775c0,3.74,3.033,6.773,6.774,6.773   c102.737,0,186.718-81.78,190.3-183.659h20.088C409.582,181.089,411.936,179.628,413.077,177.319z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M289.732,276.23c0.386-0.295,0.733-0.629,1.048-0.999c27.02-25.228,43.958-61.123,43.958-100.917   c0-76.16-61.961-138.121-138.121-138.121c-3.452,0-6.862,0.17-10.251,0.42c-0.008,0-0.016-0.001-0.024,0   c-0.005,0-0.01,0.002-0.016,0.003c-38.972,2.887-73.493,21.985-96.806,50.595c-0.391,0.383-0.723,0.819-1.013,1.288   c-18.762,23.587-30.013,53.403-30.013,85.814c0,36.062,13.906,68.926,36.62,93.55c0.29,0.378,0.619,0.72,0.981,1.029   c25.207,26.774,60.933,43.542,100.521,43.542C232.463,312.436,265.157,298.703,289.732,276.23z M191.14,274.525   c-14.631-11.31-32.874-17.537-51.368-17.537h-36.23c-19.574-22.013-31.497-50.971-31.497-82.674   c0-28.364,9.547-54.528,25.571-75.492h37.786c9.966,0,18.075,8.108,18.075,18.075c0,9.967-8.109,18.076-18.075,18.076h-18.369   c-15.455,0-28.029,12.574-28.029,28.029c0,15.456,12.574,28.029,28.029,28.029h1.417c9.157,0,16.605,7.45,16.605,16.607   c0,9.157-7.449,16.606-16.605,16.606c-3.742,0-6.774,3.032-6.774,6.774c0,3.741,3.033,6.774,6.774,6.774   c16.627,0,30.154-13.528,30.154-30.155c0-16.628-13.527-30.155-30.154-30.155h-1.417c-7.985,0-14.48-6.496-14.48-14.481   c0-7.985,6.496-14.48,14.48-14.48h18.369c17.437,0,31.624-14.186,31.624-31.625c0-17.438-14.187-31.624-31.624-31.624h-25.785   c19.031-18.599,43.973-31.148,71.714-34.561c5.422,24.208,26.823,41.732,52.294,41.732h19.699c3.741,0,6.773-3.033,6.773-6.774   s-3.032-6.774-6.773-6.774h-19.699c-18.304,0-33.787-12.107-38.555-29.116c0.518-0.006,1.028-0.039,1.547-0.039   c68.689,0,124.572,55.883,124.572,124.573c0,35.244-14.736,67.092-38.342,89.774h-22.665c-7.25,0-13.148-5.897-13.148-13.147   s5.898-13.147,13.148-13.147h2.568c15.05,0,27.294-12.245,27.294-27.294s-12.244-27.293-27.294-27.293h-24.105   c-11.336,0-20.558-9.223-20.558-20.559s9.222-20.558,20.558-20.558h49.802c3.741,0,6.773-3.032,6.773-6.774   s-3.032-6.774-6.773-6.774h-49.802c-18.807,0-34.106,15.3-34.106,34.106s15.3,34.107,34.106,34.107h24.105   c7.579,0,13.745,6.166,13.745,13.745s-6.166,13.745-13.745,13.745h-2.568c-14.721,0-26.696,11.976-26.696,26.696   s11.976,26.695,26.696,26.695h5.951c-19.869,13.412-43.794,21.25-69.516,21.25c-29.976,0-57.51-10.646-79.028-28.351h22.182   c15.511,0,30.811,5.224,43.083,14.708c1.232,0.953,2.691,1.414,4.138,1.414c2.025,0,4.03-0.904,5.364-2.632   C194.645,281.066,194.101,276.813,191.14,274.525z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, "Script"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "SearchMaterialType-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("svg", {
        version: "1.1",
        viewBox: "0 0 512 640",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M446.73,268.439h-45.29c-3.741,0-6.774,3.033-6.774,6.774s3.033,6.774,6.774,6.774h38.515v180.271h-31.74V305.661   c0-3.741-3.033-6.774-6.774-6.774s-6.774,3.033-6.774,6.774v163.372c0,3.741,3.033,6.773,6.774,6.773h45.29   c3.74,0,6.773-3.032,6.773-6.773V275.214C453.504,271.473,450.471,268.439,446.73,268.439z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M361.641,352.701h-45.289c-3.742,0-6.775,3.033-6.775,6.774v109.558c0,3.741,3.033,6.773,6.775,6.773h45.289   c3.741,0,6.773-3.032,6.773-6.773V359.476C368.414,355.734,365.382,352.701,361.641,352.701z M354.866,462.259h-31.741V366.25   h31.741V462.259z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M276.551,390.57h-45.289c-3.742,0-6.774,3.033-6.774,6.775v71.688c0,3.741,3.033,6.773,6.774,6.773h45.289   c3.742,0,6.774-3.032,6.774-6.773v-71.688C283.325,393.604,280.293,390.57,276.551,390.57z M269.776,462.259h-31.741v-58.14h31.741   V462.259z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M191.461,422.544h-45.29c-3.741,0-6.774,3.032-6.774,6.774v39.715c0,3.741,3.033,6.773,6.774,6.773h45.29   c3.741,0,6.774-3.032,6.774-6.773v-39.715C198.235,425.576,195.203,422.544,191.461,422.544z M184.687,462.259h-31.741v-26.166   h31.741V462.259z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M413.077,177.319c1.143-2.308,0.877-5.065-0.685-7.113l-26.73-35.032c-1.281-1.68-3.273-2.666-5.385-2.666   c-2.113,0-4.105,0.986-5.387,2.666l-26.729,35.032c-2.27,2.974-1.697,7.225,1.276,9.495c1.228,0.936,2.672,1.389,4.104,1.389   c2.041,0,4.057-0.917,5.391-2.665l21.344-27.974l13.039,17.09h-13.039c-3.742,0-6.774,3.033-6.774,6.774   c0,97.535-79.351,176.885-176.885,176.885c-3.742,0-6.774,3.033-6.774,6.775c0,3.74,3.033,6.773,6.774,6.773   c102.737,0,186.718-81.78,190.3-183.659h20.088C409.582,181.089,411.936,179.628,413.077,177.319z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M289.732,276.23c0.386-0.295,0.733-0.629,1.048-0.999c27.02-25.228,43.958-61.123,43.958-100.917   c0-76.16-61.961-138.121-138.121-138.121c-3.452,0-6.862,0.17-10.251,0.42c-0.008,0-0.016-0.001-0.024,0   c-0.005,0-0.01,0.002-0.016,0.003c-38.972,2.887-73.493,21.985-96.806,50.595c-0.391,0.383-0.723,0.819-1.013,1.288   c-18.762,23.587-30.013,53.403-30.013,85.814c0,36.062,13.906,68.926,36.62,93.55c0.29,0.378,0.619,0.72,0.981,1.029   c25.207,26.774,60.933,43.542,100.521,43.542C232.463,312.436,265.157,298.703,289.732,276.23z M191.14,274.525   c-14.631-11.31-32.874-17.537-51.368-17.537h-36.23c-19.574-22.013-31.497-50.971-31.497-82.674   c0-28.364,9.547-54.528,25.571-75.492h37.786c9.966,0,18.075,8.108,18.075,18.075c0,9.967-8.109,18.076-18.075,18.076h-18.369   c-15.455,0-28.029,12.574-28.029,28.029c0,15.456,12.574,28.029,28.029,28.029h1.417c9.157,0,16.605,7.45,16.605,16.607   c0,9.157-7.449,16.606-16.605,16.606c-3.742,0-6.774,3.032-6.774,6.774c0,3.741,3.033,6.774,6.774,6.774   c16.627,0,30.154-13.528,30.154-30.155c0-16.628-13.527-30.155-30.154-30.155h-1.417c-7.985,0-14.48-6.496-14.48-14.481   c0-7.985,6.496-14.48,14.48-14.48h18.369c17.437,0,31.624-14.186,31.624-31.625c0-17.438-14.187-31.624-31.624-31.624h-25.785   c19.031-18.599,43.973-31.148,71.714-34.561c5.422,24.208,26.823,41.732,52.294,41.732h19.699c3.741,0,6.773-3.033,6.773-6.774   s-3.032-6.774-6.773-6.774h-19.699c-18.304,0-33.787-12.107-38.555-29.116c0.518-0.006,1.028-0.039,1.547-0.039   c68.689,0,124.572,55.883,124.572,124.573c0,35.244-14.736,67.092-38.342,89.774h-22.665c-7.25,0-13.148-5.897-13.148-13.147   s5.898-13.147,13.148-13.147h2.568c15.05,0,27.294-12.245,27.294-27.294s-12.244-27.293-27.294-27.293h-24.105   c-11.336,0-20.558-9.223-20.558-20.559s9.222-20.558,20.558-20.558h49.802c3.741,0,6.773-3.032,6.773-6.774   s-3.032-6.774-6.773-6.774h-49.802c-18.807,0-34.106,15.3-34.106,34.106s15.3,34.107,34.106,34.107h24.105   c7.579,0,13.745,6.166,13.745,13.745s-6.166,13.745-13.745,13.745h-2.568c-14.721,0-26.696,11.976-26.696,26.696   s11.976,26.695,26.696,26.695h5.951c-19.869,13.412-43.794,21.25-69.516,21.25c-29.976,0-57.51-10.646-79.028-28.351h22.182   c15.511,0,30.811,5.224,43.083,14.708c1.232,0.953,2.691,1.414,4.138,1.414c2.025,0,4.03-0.904,5.364-2.632   C194.645,281.066,194.101,276.813,191.14,274.525z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, "Treatment")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("style", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, "\n            .SearchMaterialType {\n              background: #e1e2e4;\n              padding: 10px;\n              box-sizing: border-box;\n              font-family: sans-serif;\n              border-radius: 5px;\n              margin-bottom: 10px;\n              background: white;\n              position: relative;\n            }\n\n            .searchMaterialsMenu {\n              position: absolute;\n              top: 23px;\n              right: 20px;\n              cursor: pointer;\n            }\n\n            .searchMaterialsMenu img {\n              width: 15px;\n            }\n\n\n            .SearchMaterialType-items {\n              display: flex;\n              justify-content: space-evenly;\n              align-items: center;\n              flex-wrap: wrap;\n              display: none;\n            }\n\n            .SearchMaterialType-items.active {\n              display: flex;\n            }\n\n            .SearchMaterialType-item a {\n              text-decoration: none;\n            }\n\n            .SearchMaterialType-item {\n              margin: 10px 10px 20px 10px;\n            }\n\n            .SearchMaterialType-item:hover h4:before{\n              width: 100%;\n            }\n\n            .SearchMaterialType-item:hover .icon{\n              border: 2px solid #ffa603;\n              background: #1c2d4c;\n            }\n\n            .SearchMaterialType-item:hover svg{\n              fill: #ffa603;\n            }\n\n\n            .SearchMaterialType-item h4 {\n              margin-top: 10px;\n              color: #1c2d4c;\n              border-bottom: 2px solid transparent;\n              transition: .25s linear;\n              position: relative;\n              display: inline-block;\n            }\n\n            .SearchMaterialType-item h4:before {\n              content: \"\";\n              position: absolute;\n              bottom: -5px;\n              left: 0;\n              height: 2px;\n              width: 0;\n              background: #1c2d4c;\n              transition: .15s linear;\n            }\n\n            .SearchMaterialType-item svg{\n              fill: #1c2d4c;\n              margin: 0 auto;\n              width: 70px;\n              height: 70px;\n              background: transparent;\n              border-radius: 50%;\n              transition: .25s linear;\n            }\n\n            .icon {\n              width: 70px;\n              height: 65px;\n              background: transparent;\n              padding-top: 5px;\n              border-radius: 50%;\n              transition: .25s linear;\n              border: 2px solid #1c2d4c;\n            }\n\n          "));
    }
  }]);

  return SearchMaterialType;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SearchMaterialType);

/***/ }),

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _SearchTitle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SearchTitle */ "./components/SearchTitle.js");
/* harmony import */ var react_tag_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-tag-input */ "react-tag-input");
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

    _this.state = {
      tags: [{
        id: "Thailand",
        text: "Thailand"
      }, {
        id: "India",
        text: "India"
      }]
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
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_SearchTitle__WEBPACK_IMPORTED_MODULE_9__["default"], {
        title: "Tags",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        onClick: this.handleTagMenu,
        className: "searchTagMenu",
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
        className: "SearchTags-input",
        id: "SearchTags-input",
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
        placeholder: "Search Tag",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("style", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, "\n            .SearchTags {\n              background: white;\n              padding: 10px;\n              box-sizing: border-box;\n              font-family: sans-serif;\n              border-radius: 5px;\n              margin-bottom: 10px;\n              position: relative;\n            }\n\n            .SearchTags-input {\n              position: relative;\n              display: none;\n            }\n            .SearchTags-input.active {\n              display: block;\n            }\n\n            .searchTagMenu {\n              position: absolute;\n              top: 23px;\n              right: 20px;\n              cursor: pointer;\n            }\n\n            .searchTagMenu img {\n              width: 15px;\n            }\n\n            .searchTagMenu {\n              position: absolute;\n              top: 23px;\n              right: 20px;\n              cursor: pointer;\n            }\n\n            .SearchTags-input .ReactTags__tagInput{\n              position: absolute;\n              top: -45px;\n              left: 20px;\n              width: 80%;\n              margin: auto;\n            }\n\n            .SearchTags-input .ReactTags__tagInput input{\n              width: 100%;\n              height: 30px;\n              box-sizing: border-box;\n              padding-left: 10px;\n              border: 1px solid #80808038;\n              border-radius: 4px;\n            }\n\n            .SearchTags-input .ReactTags__remove {\n              margin-left: 10px;\n            }\n\n            .ReactTags__selected {\n              margin-top: 70px;\n              text-align: left;\n              padding-left: 17px;\n            }\n\n            .tag-wrapper {\n              background: #1c2d4c;\n              margin: 5px;\n              color: #ff8f17;\n              padding: 5px 10px;\n              font-size: 15px;\n              border-radius: 4px !important;\n              display: inline-block;\n              \n            }\n          "));
    }
  }]);

  return SearchTags;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SearchTags);

/***/ }),

/***/ "./components/SearchTitle.js":
/*!***********************************!*\
  !*** ./components/SearchTitle.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/Users/daniloviacavavizarreta/www/storyrocketreact/components/SearchTitle.js";



var SearchTitle =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(SearchTitle, _Component);

  function SearchTitle() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SearchTitle);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SearchTitle).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SearchTitle, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-2523725131" + " " + "SearchTitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
        className: "jsx-2523725131" + " " + "SearchTitle-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, this.props.title), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "2523725131",
        __self: this
      }, ".SearchTitle.jsx-2523725131{position:relative;}.SearchTitle-text.jsx-2523725131{text-align:left;font-size:18px;font-weight:bold;margin-bottom:15px;margin-top:10px;margin-left:10px;text-align:left;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pbG92aWFjYXZhdml6YXJyZXRhL3d3dy9zdG9yeXJvY2tldHJlYWN0L2NvbXBvbmVudHMvU2VhcmNoVGl0bGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWXNCLEFBR3VCLEFBSUYsZ0JBQ0QsRUFKaEIsYUFLa0IsaUJBQ0UsbUJBQ0gsZ0JBQ0MsaUJBQ0QsZ0JBQ2pCIiwiZmlsZSI6Ii9Vc2Vycy9kYW5pbG92aWFjYXZhdml6YXJyZXRhL3d3dy9zdG9yeXJvY2tldHJlYWN0L2NvbXBvbmVudHMvU2VhcmNoVGl0bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBTZWFyY2hUaXRsZSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgcmVuZGVyKCkge1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJTZWFyY2hUaXRsZVwiPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJTZWFyY2hUaXRsZS10ZXh0XCI+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy50aXRsZX1cbiAgICAgICAgICA8L2gyPlxuXG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuXHRcdFx0LlNlYXJjaFRpdGxlIHtcblx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0fVxuXG5cdFx0XHQuU2VhcmNoVGl0bGUtdGV4dCB7XG5cdFx0XHRcdHRleHQtYWxpZ246IGxlZnQ7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMThweDtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IDE1cHg7XG5cdFx0XHRcdG1hcmdpbi10b3A6IDEwcHg7XG5cdFx0XHRcdG1hcmdpbi1sZWZ0OiAxMHB4O1xuXHRcdFx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xuXHRcdFx0fVxuXHRcdGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hUaXRsZTtcbiJdfQ== */\n/*@ sourceURL=/Users/daniloviacavavizarreta/www/storyrocketreact/components/SearchTitle.js */"));
    }
  }]);

  return SearchTitle;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SearchTitle);

/***/ }),

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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _SearchTitle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SearchTitle.js */ "./components/SearchTitle.js");





var _jsxFileName = "/Users/daniloviacavavizarreta/www/storyrocketreact/components/SearchViews.js";



var SearchViews =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(SearchViews, _Component);

  function SearchViews() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SearchViews);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SearchViews).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SearchViews, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "searchViews",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_SearchTitle_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
        title: "Views",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: "searchViews-items",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "searchViews-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("svg", {
        version: "1.1",
        viewBox: "0 0 512 640",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("path", {
        id: "tw",
        d: "M446.73,268.439h-45.29c-3.741,0-6.774,3.033-6.774,6.774s3.033,6.774,6.774,6.774h38.515v180.271h-31.74V305.661   c0-3.741-3.033-6.774-6.774-6.774s-6.774,3.033-6.774,6.774v163.372c0,3.741,3.033,6.773,6.774,6.773h45.29   c3.74,0,6.773-3.032,6.773-6.773V275.214C453.504,271.473,450.471,268.439,446.73,268.439z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("path", {
        d: "M361.641,352.701h-45.289c-3.742,0-6.775,3.033-6.775,6.774v109.558c0,3.741,3.033,6.773,6.775,6.773h45.289   c3.741,0,6.773-3.032,6.773-6.773V359.476C368.414,355.734,365.382,352.701,361.641,352.701z M354.866,462.259h-31.741V366.25   h31.741V462.259z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("path", {
        d: "M276.551,390.57h-45.289c-3.742,0-6.774,3.033-6.774,6.775v71.688c0,3.741,3.033,6.773,6.774,6.773h45.289   c3.742,0,6.774-3.032,6.774-6.773v-71.688C283.325,393.604,280.293,390.57,276.551,390.57z M269.776,462.259h-31.741v-58.14h31.741   V462.259z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("path", {
        d: "M191.461,422.544h-45.29c-3.741,0-6.774,3.032-6.774,6.774v39.715c0,3.741,3.033,6.773,6.774,6.773h45.29   c3.741,0,6.774-3.032,6.774-6.773v-39.715C198.235,425.576,195.203,422.544,191.461,422.544z M184.687,462.259h-31.741v-26.166   h31.741V462.259z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("path", {
        d: "M413.077,177.319c1.143-2.308,0.877-5.065-0.685-7.113l-26.73-35.032c-1.281-1.68-3.273-2.666-5.385-2.666   c-2.113,0-4.105,0.986-5.387,2.666l-26.729,35.032c-2.27,2.974-1.697,7.225,1.276,9.495c1.228,0.936,2.672,1.389,4.104,1.389   c2.041,0,4.057-0.917,5.391-2.665l21.344-27.974l13.039,17.09h-13.039c-3.742,0-6.774,3.033-6.774,6.774   c0,97.535-79.351,176.885-176.885,176.885c-3.742,0-6.774,3.033-6.774,6.775c0,3.74,3.033,6.773,6.774,6.773   c102.737,0,186.718-81.78,190.3-183.659h20.088C409.582,181.089,411.936,179.628,413.077,177.319z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("path", {
        d: "M289.732,276.23c0.386-0.295,0.733-0.629,1.048-0.999c27.02-25.228,43.958-61.123,43.958-100.917   c0-76.16-61.961-138.121-138.121-138.121c-3.452,0-6.862,0.17-10.251,0.42c-0.008,0-0.016-0.001-0.024,0   c-0.005,0-0.01,0.002-0.016,0.003c-38.972,2.887-73.493,21.985-96.806,50.595c-0.391,0.383-0.723,0.819-1.013,1.288   c-18.762,23.587-30.013,53.403-30.013,85.814c0,36.062,13.906,68.926,36.62,93.55c0.29,0.378,0.619,0.72,0.981,1.029   c25.207,26.774,60.933,43.542,100.521,43.542C232.463,312.436,265.157,298.703,289.732,276.23z M191.14,274.525   c-14.631-11.31-32.874-17.537-51.368-17.537h-36.23c-19.574-22.013-31.497-50.971-31.497-82.674   c0-28.364,9.547-54.528,25.571-75.492h37.786c9.966,0,18.075,8.108,18.075,18.075c0,9.967-8.109,18.076-18.075,18.076h-18.369   c-15.455,0-28.029,12.574-28.029,28.029c0,15.456,12.574,28.029,28.029,28.029h1.417c9.157,0,16.605,7.45,16.605,16.607   c0,9.157-7.449,16.606-16.605,16.606c-3.742,0-6.774,3.032-6.774,6.774c0,3.741,3.033,6.774,6.774,6.774   c16.627,0,30.154-13.528,30.154-30.155c0-16.628-13.527-30.155-30.154-30.155h-1.417c-7.985,0-14.48-6.496-14.48-14.481   c0-7.985,6.496-14.48,14.48-14.48h18.369c17.437,0,31.624-14.186,31.624-31.625c0-17.438-14.187-31.624-31.624-31.624h-25.785   c19.031-18.599,43.973-31.148,71.714-34.561c5.422,24.208,26.823,41.732,52.294,41.732h19.699c3.741,0,6.773-3.033,6.773-6.774   s-3.032-6.774-6.773-6.774h-19.699c-18.304,0-33.787-12.107-38.555-29.116c0.518-0.006,1.028-0.039,1.547-0.039   c68.689,0,124.572,55.883,124.572,124.573c0,35.244-14.736,67.092-38.342,89.774h-22.665c-7.25,0-13.148-5.897-13.148-13.147   s5.898-13.147,13.148-13.147h2.568c15.05,0,27.294-12.245,27.294-27.294s-12.244-27.293-27.294-27.293h-24.105   c-11.336,0-20.558-9.223-20.558-20.559s9.222-20.558,20.558-20.558h49.802c3.741,0,6.773-3.032,6.773-6.774   s-3.032-6.774-6.773-6.774h-49.802c-18.807,0-34.106,15.3-34.106,34.106s15.3,34.107,34.106,34.107h24.105   c7.579,0,13.745,6.166,13.745,13.745s-6.166,13.745-13.745,13.745h-2.568c-14.721,0-26.696,11.976-26.696,26.696   s11.976,26.695,26.696,26.695h5.951c-19.869,13.412-43.794,21.25-69.516,21.25c-29.976,0-57.51-10.646-79.028-28.351h22.182   c15.511,0,30.811,5.224,43.083,14.708c1.232,0.953,2.691,1.414,4.138,1.414c2.025,0,4.03-0.904,5.364-2.632   C194.645,281.066,194.101,276.813,191.14,274.525z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, "Trending"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "searchViews-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("svg", {
        version: "1.1",
        viewBox: "0 0 512 640",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("path", {
        d: "M446.73,268.439h-45.29c-3.741,0-6.774,3.033-6.774,6.774s3.033,6.774,6.774,6.774h38.515v180.271h-31.74V305.661   c0-3.741-3.033-6.774-6.774-6.774s-6.774,3.033-6.774,6.774v163.372c0,3.741,3.033,6.773,6.774,6.773h45.29   c3.74,0,6.773-3.032,6.773-6.773V275.214C453.504,271.473,450.471,268.439,446.73,268.439z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("path", {
        d: "M361.641,352.701h-45.289c-3.742,0-6.775,3.033-6.775,6.774v109.558c0,3.741,3.033,6.773,6.775,6.773h45.289   c3.741,0,6.773-3.032,6.773-6.773V359.476C368.414,355.734,365.382,352.701,361.641,352.701z M354.866,462.259h-31.741V366.25   h31.741V462.259z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("path", {
        d: "M276.551,390.57h-45.289c-3.742,0-6.774,3.033-6.774,6.775v71.688c0,3.741,3.033,6.773,6.774,6.773h45.289   c3.742,0,6.774-3.032,6.774-6.773v-71.688C283.325,393.604,280.293,390.57,276.551,390.57z M269.776,462.259h-31.741v-58.14h31.741   V462.259z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("path", {
        d: "M191.461,422.544h-45.29c-3.741,0-6.774,3.032-6.774,6.774v39.715c0,3.741,3.033,6.773,6.774,6.773h45.29   c3.741,0,6.774-3.032,6.774-6.773v-39.715C198.235,425.576,195.203,422.544,191.461,422.544z M184.687,462.259h-31.741v-26.166   h31.741V462.259z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("path", {
        d: "M413.077,177.319c1.143-2.308,0.877-5.065-0.685-7.113l-26.73-35.032c-1.281-1.68-3.273-2.666-5.385-2.666   c-2.113,0-4.105,0.986-5.387,2.666l-26.729,35.032c-2.27,2.974-1.697,7.225,1.276,9.495c1.228,0.936,2.672,1.389,4.104,1.389   c2.041,0,4.057-0.917,5.391-2.665l21.344-27.974l13.039,17.09h-13.039c-3.742,0-6.774,3.033-6.774,6.774   c0,97.535-79.351,176.885-176.885,176.885c-3.742,0-6.774,3.033-6.774,6.775c0,3.74,3.033,6.773,6.774,6.773   c102.737,0,186.718-81.78,190.3-183.659h20.088C409.582,181.089,411.936,179.628,413.077,177.319z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("path", {
        d: "M289.732,276.23c0.386-0.295,0.733-0.629,1.048-0.999c27.02-25.228,43.958-61.123,43.958-100.917   c0-76.16-61.961-138.121-138.121-138.121c-3.452,0-6.862,0.17-10.251,0.42c-0.008,0-0.016-0.001-0.024,0   c-0.005,0-0.01,0.002-0.016,0.003c-38.972,2.887-73.493,21.985-96.806,50.595c-0.391,0.383-0.723,0.819-1.013,1.288   c-18.762,23.587-30.013,53.403-30.013,85.814c0,36.062,13.906,68.926,36.62,93.55c0.29,0.378,0.619,0.72,0.981,1.029   c25.207,26.774,60.933,43.542,100.521,43.542C232.463,312.436,265.157,298.703,289.732,276.23z M191.14,274.525   c-14.631-11.31-32.874-17.537-51.368-17.537h-36.23c-19.574-22.013-31.497-50.971-31.497-82.674   c0-28.364,9.547-54.528,25.571-75.492h37.786c9.966,0,18.075,8.108,18.075,18.075c0,9.967-8.109,18.076-18.075,18.076h-18.369   c-15.455,0-28.029,12.574-28.029,28.029c0,15.456,12.574,28.029,28.029,28.029h1.417c9.157,0,16.605,7.45,16.605,16.607   c0,9.157-7.449,16.606-16.605,16.606c-3.742,0-6.774,3.032-6.774,6.774c0,3.741,3.033,6.774,6.774,6.774   c16.627,0,30.154-13.528,30.154-30.155c0-16.628-13.527-30.155-30.154-30.155h-1.417c-7.985,0-14.48-6.496-14.48-14.481   c0-7.985,6.496-14.48,14.48-14.48h18.369c17.437,0,31.624-14.186,31.624-31.625c0-17.438-14.187-31.624-31.624-31.624h-25.785   c19.031-18.599,43.973-31.148,71.714-34.561c5.422,24.208,26.823,41.732,52.294,41.732h19.699c3.741,0,6.773-3.033,6.773-6.774   s-3.032-6.774-6.773-6.774h-19.699c-18.304,0-33.787-12.107-38.555-29.116c0.518-0.006,1.028-0.039,1.547-0.039   c68.689,0,124.572,55.883,124.572,124.573c0,35.244-14.736,67.092-38.342,89.774h-22.665c-7.25,0-13.148-5.897-13.148-13.147   s5.898-13.147,13.148-13.147h2.568c15.05,0,27.294-12.245,27.294-27.294s-12.244-27.293-27.294-27.293h-24.105   c-11.336,0-20.558-9.223-20.558-20.559s9.222-20.558,20.558-20.558h49.802c3.741,0,6.773-3.032,6.773-6.774   s-3.032-6.774-6.773-6.774h-49.802c-18.807,0-34.106,15.3-34.106,34.106s15.3,34.107,34.106,34.107h24.105   c7.579,0,13.745,6.166,13.745,13.745s-6.166,13.745-13.745,13.745h-2.568c-14.721,0-26.696,11.976-26.696,26.696   s11.976,26.695,26.696,26.695h5.951c-19.869,13.412-43.794,21.25-69.516,21.25c-29.976,0-57.51-10.646-79.028-28.351h22.182   c15.511,0,30.811,5.224,43.083,14.708c1.232,0.953,2.691,1.414,4.138,1.414c2.025,0,4.03-0.904,5.364-2.632   C194.645,281.066,194.101,276.813,191.14,274.525z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "Most Views"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "searchViews-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("svg", {
        version: "1.1",
        viewBox: "0 0 512 640",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("path", {
        d: "M446.73,268.439h-45.29c-3.741,0-6.774,3.033-6.774,6.774s3.033,6.774,6.774,6.774h38.515v180.271h-31.74V305.661   c0-3.741-3.033-6.774-6.774-6.774s-6.774,3.033-6.774,6.774v163.372c0,3.741,3.033,6.773,6.774,6.773h45.29   c3.74,0,6.773-3.032,6.773-6.773V275.214C453.504,271.473,450.471,268.439,446.73,268.439z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("path", {
        d: "M361.641,352.701h-45.289c-3.742,0-6.775,3.033-6.775,6.774v109.558c0,3.741,3.033,6.773,6.775,6.773h45.289   c3.741,0,6.773-3.032,6.773-6.773V359.476C368.414,355.734,365.382,352.701,361.641,352.701z M354.866,462.259h-31.741V366.25   h31.741V462.259z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("path", {
        d: "M276.551,390.57h-45.289c-3.742,0-6.774,3.033-6.774,6.775v71.688c0,3.741,3.033,6.773,6.774,6.773h45.289   c3.742,0,6.774-3.032,6.774-6.773v-71.688C283.325,393.604,280.293,390.57,276.551,390.57z M269.776,462.259h-31.741v-58.14h31.741   V462.259z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("path", {
        d: "M191.461,422.544h-45.29c-3.741,0-6.774,3.032-6.774,6.774v39.715c0,3.741,3.033,6.773,6.774,6.773h45.29   c3.741,0,6.774-3.032,6.774-6.773v-39.715C198.235,425.576,195.203,422.544,191.461,422.544z M184.687,462.259h-31.741v-26.166   h31.741V462.259z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("path", {
        d: "M413.077,177.319c1.143-2.308,0.877-5.065-0.685-7.113l-26.73-35.032c-1.281-1.68-3.273-2.666-5.385-2.666   c-2.113,0-4.105,0.986-5.387,2.666l-26.729,35.032c-2.27,2.974-1.697,7.225,1.276,9.495c1.228,0.936,2.672,1.389,4.104,1.389   c2.041,0,4.057-0.917,5.391-2.665l21.344-27.974l13.039,17.09h-13.039c-3.742,0-6.774,3.033-6.774,6.774   c0,97.535-79.351,176.885-176.885,176.885c-3.742,0-6.774,3.033-6.774,6.775c0,3.74,3.033,6.773,6.774,6.773   c102.737,0,186.718-81.78,190.3-183.659h20.088C409.582,181.089,411.936,179.628,413.077,177.319z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("path", {
        d: "M289.732,276.23c0.386-0.295,0.733-0.629,1.048-0.999c27.02-25.228,43.958-61.123,43.958-100.917   c0-76.16-61.961-138.121-138.121-138.121c-3.452,0-6.862,0.17-10.251,0.42c-0.008,0-0.016-0.001-0.024,0   c-0.005,0-0.01,0.002-0.016,0.003c-38.972,2.887-73.493,21.985-96.806,50.595c-0.391,0.383-0.723,0.819-1.013,1.288   c-18.762,23.587-30.013,53.403-30.013,85.814c0,36.062,13.906,68.926,36.62,93.55c0.29,0.378,0.619,0.72,0.981,1.029   c25.207,26.774,60.933,43.542,100.521,43.542C232.463,312.436,265.157,298.703,289.732,276.23z M191.14,274.525   c-14.631-11.31-32.874-17.537-51.368-17.537h-36.23c-19.574-22.013-31.497-50.971-31.497-82.674   c0-28.364,9.547-54.528,25.571-75.492h37.786c9.966,0,18.075,8.108,18.075,18.075c0,9.967-8.109,18.076-18.075,18.076h-18.369   c-15.455,0-28.029,12.574-28.029,28.029c0,15.456,12.574,28.029,28.029,28.029h1.417c9.157,0,16.605,7.45,16.605,16.607   c0,9.157-7.449,16.606-16.605,16.606c-3.742,0-6.774,3.032-6.774,6.774c0,3.741,3.033,6.774,6.774,6.774   c16.627,0,30.154-13.528,30.154-30.155c0-16.628-13.527-30.155-30.154-30.155h-1.417c-7.985,0-14.48-6.496-14.48-14.481   c0-7.985,6.496-14.48,14.48-14.48h18.369c17.437,0,31.624-14.186,31.624-31.625c0-17.438-14.187-31.624-31.624-31.624h-25.785   c19.031-18.599,43.973-31.148,71.714-34.561c5.422,24.208,26.823,41.732,52.294,41.732h19.699c3.741,0,6.773-3.033,6.773-6.774   s-3.032-6.774-6.773-6.774h-19.699c-18.304,0-33.787-12.107-38.555-29.116c0.518-0.006,1.028-0.039,1.547-0.039   c68.689,0,124.572,55.883,124.572,124.573c0,35.244-14.736,67.092-38.342,89.774h-22.665c-7.25,0-13.148-5.897-13.148-13.147   s5.898-13.147,13.148-13.147h2.568c15.05,0,27.294-12.245,27.294-27.294s-12.244-27.293-27.294-27.293h-24.105   c-11.336,0-20.558-9.223-20.558-20.559s9.222-20.558,20.558-20.558h49.802c3.741,0,6.773-3.032,6.773-6.774   s-3.032-6.774-6.773-6.774h-49.802c-18.807,0-34.106,15.3-34.106,34.106s15.3,34.107,34.106,34.107h24.105   c7.579,0,13.745,6.166,13.745,13.745s-6.166,13.745-13.745,13.745h-2.568c-14.721,0-26.696,11.976-26.696,26.696   s11.976,26.695,26.696,26.695h5.951c-19.869,13.412-43.794,21.25-69.516,21.25c-29.976,0-57.51-10.646-79.028-28.351h22.182   c15.511,0,30.811,5.224,43.083,14.708c1.232,0.953,2.691,1.414,4.138,1.414c2.025,0,4.03-0.904,5.364-2.632   C194.645,281.066,194.101,276.813,191.14,274.525z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, "Latest")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("style", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "\n          .searchViews {\n            background: #e1e2e4;\n            padding: 10px;\n            box-sizing: border-box;\n            font-family: sans-serif;\n            border-radius: 5px;\n            margin-bottom: 10px;\n          }\n\n          .searchViews-items {\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            flex-wrap: wrap;\n            text-align: center;\n          }\n\n          .searchViews-item a {\n            text-decoration: none;\n          }\n\n          .searchViews-item {\n            margin: 10px 10px 20px 10px;\n          }\n\n          .searchViews-item:hover h4:before{\n            width: 100%;\n          }\n\n          .searchViews-item:hover .icon{\n            border: 2px solid #ffa603;\n            background: #1c2d4c;\n          }\n\n          .searchViews-item:hover svg{\n            fill: #ffa603;\n          }\n\n          .searchViews-item:hover #tw{\n            animation: flash .7s;\n          }\n\n\n          .searchViews-item h4 {\n            margin-top: 10px;\n            color: #1c2d4c;\n            border-bottom: 2px solid transparent;\n            transition: .25s linear;\n            position: relative;\n            display: inline-block;\n          }\n\n          .searchViews-item h4:before {\n            content: \"\";\n            position: absolute;\n            bottom: -5px;\n            left: 0;\n            height: 2px;\n            width: 0;\n            background: #1c2d4c;\n            transition: .15s linear;\n          }\n\n          .searchViews-item svg{\n            fill: #1c2d4c;\n            margin: 0 auto;\n            width: 70px;\n            height: 70px;\n            background: transparent;\n            border-radius: 50%;\n            transition: .25s linear;\n          }\n\n          .searchViews-item #tw{\n            stroke-dasharray: 300, 0, 3000;\n          }\n\n          .icon {\n            width: 70px;\n            height: 65px;\n            background: transparent;\n            padding-top: 5px;\n            border-radius: 50%;\n            transition: .25s linear;\n            border: 2px solid #1c2d4c;\n          }\n\n          @keyframes flash {\n            10% {\n              stroke-dasharray: 300,500,3000;\n            }\n            100% {\n              stroke-dasharray: 3300,500,300;\n            }\n          }\n\n\n        "));
    }
  }]);

  return SearchViews;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SearchViews);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/from.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/from */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/array/from.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/array/is-array.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/is-iterable */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/is-iterable.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/json/stringify.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/assign.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/create.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/define-property.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/get-prototype-of.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/set-prototype-of.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/reflect/construct */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/reflect/construct.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/symbol/index.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/symbol/iterator.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/construct.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/construct.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Reflect$construct = __webpack_require__(/*! ../core-js/reflect/construct */ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !_Reflect$construct) return false;
  if (_Reflect$construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(_Reflect$construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = _Reflect$construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithoutHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
/* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/is-iterable */ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js");
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__);


function _iterableToArray(iter) {
  if (_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js");
/* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js");



function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/array/from.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/array/from.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.string.iterator */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../../modules/es6.array.from */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.array.from.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").Array.from;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/array/is-array.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/array/is-array.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.array.is-array */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.array.is-array.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").Array.isArray;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/is-iterable.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/is-iterable.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.string.iterator.js");
module.exports = __webpack_require__(/*! ../modules/core.is-iterable */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/core.is-iterable.js");


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/json/stringify.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/json/stringify.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ../../modules/_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js");
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/assign.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/assign.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.assign */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.assign.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").Object.assign;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/create.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/create.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.create */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.create.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/define-property.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/define-property.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.define-property */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.define-property.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/get-prototype-of.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/get-prototype-of.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.get-prototype-of */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.get-prototype-of.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").Object.getPrototypeOf;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/set-prototype-of.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/set-prototype-of.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.set-prototype-of */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.set-prototype-of.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").Object.setPrototypeOf;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/reflect/construct.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/reflect/construct.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.reflect.construct */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.reflect.construct.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").Reflect.construct;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/symbol/index.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/symbol/index.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.symbol */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.symbol.js");
__webpack_require__(/*! ../../modules/es6.object.to-string */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.symbol.async-iterator.js");
__webpack_require__(/*! ../../modules/es7.symbol.observable */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.symbol.observable.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").Symbol;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/symbol/iterator.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/symbol/iterator.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.string.iterator */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../../modules/web.dom.iterable */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/web.dom.iterable.js");
module.exports = __webpack_require__(/*! ../../modules/_wks-ext */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-ext.js").f('iterator');


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_a-function.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_add-to-unscopables.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_add-to-unscopables.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-includes.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-includes.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_bind.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_bind.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_a-function.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
var invoke = __webpack_require__(/*! ./_invoke */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_invoke.js");
var arraySlice = [].slice;
var factories = {};

var construct = function (F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);
  var bound = function (/* args... */) {
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_classof.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_classof.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_cof.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_cof.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_create-property.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_create-property.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_property-desc.js");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ctx.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_defined.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_defined.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_dom-create.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_enum-bug-keys.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_enum-keys.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_enum-keys.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-pie.js");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_html.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_html.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_invoke.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_invoke.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iobject.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iobject.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-array-iter.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-array-iter.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iterators.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-array.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-array.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-call.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-call.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-create.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-create.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-define.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-define.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-detect.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-detect.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-step.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-step.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iterators.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iterators.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_library.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_library.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_meta.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_meta.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-assign.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-assign.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-create.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-create.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dps.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dps.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopd.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopd.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopn-ext.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopn-ext.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js");
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopn.js").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopn.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopn.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gops.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gops.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gpo.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gpo.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys-internal.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-pie.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-pie.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-sap.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-sap.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_property-desc.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_redefine.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_redefine.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_hide */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js");


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-proto.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-proto.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(/*! ./_ctx */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ctx.js")(Function.call, __webpack_require__(/*! ./_object-gopd */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-to-string-tag.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-to-string-tag.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared-key.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared-key.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_string-at.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_string-at.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-absolute-index.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-integer.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-integer.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-length.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-length.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-object.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-object.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-primitive.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_uid.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_uid.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-define.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-define.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_library.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-ext.js");
var defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-ext.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-ext.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js");


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/core.get-iterator-method.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/core.get-iterator-method.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/core.is-iterable.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/core.is-iterable.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.array.from.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.array.from.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ctx.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-object.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-array-iter.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-length.js");
var createProperty = __webpack_require__(/*! ./_create-property */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_create-property.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/core.get-iterator-method.js");

$export($export.S + $export.F * !__webpack_require__(/*! ./_iter-detect */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-detect.js")(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.array.is-array.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.array.is-array.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");

$export($export.S, 'Array', { isArray: __webpack_require__(/*! ./_is-array */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-array.js") });


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.array.iterator.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.array.iterator.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.assign.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.assign.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-assign.js") });


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.create.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.create.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(/*! ./_object-create */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-create.js") });


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.define-property.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.define-property.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js").f });


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.get-prototype-of.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.get-prototype-of.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-object.js");
var $getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gpo.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-sap.js")('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.set-prototype-of.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.set-prototype-of.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(/*! ./_set-proto */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-proto.js").set });


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.to-string.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.to-string.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.reflect.construct.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.reflect.construct.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
var create = __webpack_require__(/*! ./_object-create */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-create.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_a-function.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js");
var bind = __webpack_require__(/*! ./_bind */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_bind.js");
var rConstruct = (__webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js").Reflect || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  rConstruct(function () { /* empty */ });
});

$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.string.iterator.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.string.iterator.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.symbol.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.symbol.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_redefine.js");
var META = __webpack_require__(/*! ./_meta */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_meta.js").KEY;
var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-to-string-tag.js");
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_uid.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-ext.js");
var wksDefine = __webpack_require__(/*! ./_wks-define */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-define.js");
var enumKeys = __webpack_require__(/*! ./_enum-keys */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_enum-keys.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-array.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-primitive.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_property-desc.js");
var _create = __webpack_require__(/*! ./_object-create */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-create.js");
var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopn-ext.js");
var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopd.js");
var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys.js");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(/*! ./_object-gopn */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-pie.js").f = $propertyIsEnumerable;
  __webpack_require__(/*! ./_object-gops */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gops.js").f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.symbol.async-iterator.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.symbol.async-iterator.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-define.js")('asyncIterator');


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.symbol.observable.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.symbol.observable.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-define.js")('observable');


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/web.dom.iterable.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/web.dom.iterable.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./es6.array.iterator */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.array.iterator.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iterators.js");
var TO_STRING_TAG = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "url");

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var router_1 = __importStar(__webpack_require__(/*! next/router */ "./node_modules/next/router.js"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatUrl) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatUrl(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: href && (0, _typeof2.default)(href) === 'object' ? utils_1.formatWithValidation(href) : href,
        as: asHref && (0, _typeof2.default)(asHref) === 'object' ? utils_1.formatWithValidation(asHref) : asHref
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
        props.href = router_1.Router._rewriteUrlForNextExport(props.href);
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (true) {
  var warn = utils_1.execOnce(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]).isRequired,
    as: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
    prefetch: prop_types_1.default.bool,
    replace: prop_types_1.default.bool,
    shallow: prop_types_1.default.bool,
    passHref: prop_types_1.default.bool,
    scroll: prop_types_1.default.bool,
    children: prop_types_1.default.oneOfType([prop_types_1.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

exports.default = Link;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _assign = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js"));

var _construct2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/construct */ "./node_modules/@babel/runtime-corejs2/helpers/construct.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* global window */

var router_1 = __importDefault(__webpack_require__(/*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"));

var SingletonRouter = {
  router: null,
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (typeof window !== 'undefined') {
      this.readyCallbacks.push(cb);
    }
  }
}; // Create public properties and methods of the router in the SingletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath'];
var propertyFields = ['components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(SingletonRouter, 'events', {
  get: function get() {
    return router_1.default.events;
  }
});
propertyFields.concat(urlPropertyFields).forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(SingletonRouter, field, {
    get: function get() {
      throwIfNoRouter();
      return SingletonRouter.router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  SingletonRouter[field] = function () {
    var _SingletonRouter$rout;

    throwIfNoRouter();
    return (_SingletonRouter$rout = SingletonRouter.router)[field].apply(_SingletonRouter$rout, arguments);
  };
});
routerEvents.forEach(function (event) {
  SingletonRouter.ready(function () {
    router_1.default.events.on(event, function () {
      var eventField = "on".concat(event.charAt(0).toUpperCase()).concat(event.substring(1));

      if (SingletonRouter[eventField]) {
        try {
          SingletonRouter[eventField].apply(SingletonRouter, arguments);
        } catch (err) {
          console.error("Error when running the Router event: ".concat(eventField));
          console.error("".concat(err.message, "\n").concat(err.stack));
        }
      }
    });
  });
});

function throwIfNoRouter() {
  if (!SingletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }
} // Export the SingletonRouter and this is the public API.


exports.default = SingletonRouter; // Reexport the withRoute HOC

var with_router_1 = __webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js");

exports.withRouter = with_router_1.default; // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.

exports.createRouter = function () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  SingletonRouter.router = (0, _construct2.default)(router_1.default, args);
  SingletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  SingletonRouter.readyCallbacks = [];
  return SingletonRouter.router;
}; // Export the actual Router class, which is usually used inside the server


exports.Router = router_1.default; // This function is used to create the `withRouter` router instance

function makePublicRouterInstance(router) {
  var instance = {};

  for (var _i = 0; _i < urlPropertyFields.length; _i++) {
    var property = urlPropertyFields[_i];

    if ((0, _typeof2.default)(router[property]) === 'object') {
      instance[property] = (0, _assign.default)({}, router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = router_1.default.events;
  propertyFields.forEach(function (field) {
    // Here we need to use Object.defineProperty because, we need to return
    // the property assigned to the actual router
    // The value might get changed as we change routes and this is the
    // proper way to access it
    (0, _defineProperty.default)(instance, field, {
      get: function get() {
        return router[field];
      }
    });
  });
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return router[field].apply(router, arguments);
    };
  });
  return instance;
}

exports.makePublicRouterInstance = makePublicRouterInstance;

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _assign = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var hoist_non_react_statics_1 = __importDefault(__webpack_require__(/*! hoist-non-react-statics */ "./node_modules/next/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function withRouter(ComposedComponent) {
  var displayName = utils_1.getDisplayName(ComposedComponent);

  var WithRouteWrapper =
  /*#__PURE__*/
  function (_react_1$Component) {
    (0, _inherits2.default)(WithRouteWrapper, _react_1$Component);

    function WithRouteWrapper() {
      (0, _classCallCheck2.default)(this, WithRouteWrapper);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithRouteWrapper).apply(this, arguments));
    }

    (0, _createClass2.default)(WithRouteWrapper, [{
      key: "render",
      value: function render() {
        return react_1.default.createElement(ComposedComponent, (0, _assign.default)({
          router: this.context.router
        }, this.props));
      }
    }]);
    return WithRouteWrapper;
  }(react_1.Component);

  WithRouteWrapper.contextTypes = {
    router: prop_types_1.default.object
  };
  WithRouteWrapper.displayName = "withRouter(".concat(displayName, ")");
  return hoist_non_react_statics_1.default(WithRouteWrapper, ComposedComponent);
}

exports.default = withRouter;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/next/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var ReactIs = __webpack_require__(/*! react-is */ "react-is");
var REACT_STATICS = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var FORWARD_REF_STATICS = {
    '$$typeof': true,
    render: true
};

var TYPE_STATICS = {};
TYPE_STATICS[ReactIs.ForwardRef] = FORWARD_REF_STATICS;

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
        // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        var targetStatics = TYPE_STATICS[targetComponent['$$typeof']] || REACT_STATICS;
        var sourceStatics = TYPE_STATICS[sourceComponent['$$typeof']] || REACT_STATICS;

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try {
                    // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/next/router.js":
/*!*************************************!*\
  !*** ./node_modules/next/router.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/router */ "./node_modules/next/dist/client/router.js")


/***/ }),

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheet);

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#".concat(name, "-deleted-rule____{}");
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  _createClass(StyleSheet, [{
    key: "setOptimizeForSpeed",
    value: function setOptimizeForSpeed(bool) {
      invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
      invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
      this.flush();
      this._optimizeForSpeed = bool;
      this.inject();
    }
  }, {
    key: "isOptimizeForSpeed",
    value: function isOptimizeForSpeed() {
      return this._optimizeForSpeed;
    }
  }, {
    key: "inject",
    value: function inject() {
      var _this = this;

      invariant(!this._injected, 'sheet already injected');
      this._injected = true;

      if (this._isBrowser && this._optimizeForSpeed) {
        this._tags[0] = this.makeStyleTag(this._name);
        this._optimizeForSpeed = 'insertRule' in this.getSheet();

        if (!this._optimizeForSpeed) {
          if (!isProd) {
            console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
          }

          this.flush();
          this._injected = true;
        }

        return;
      }

      this._serverSheet = {
        cssRules: [],
        insertRule: function insertRule(rule, index) {
          if (typeof index === 'number') {
            _this._serverSheet.cssRules[index] = {
              cssText: rule
            };
          } else {
            _this._serverSheet.cssRules.push({
              cssText: rule
            });
          }

          return index;
        },
        deleteRule: function deleteRule(index) {
          _this._serverSheet.cssRules[index] = null;
        }
      };
    }
  }, {
    key: "getSheetForTag",
    value: function getSheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet;
      } // this weirdness brought to you by firefox


      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          return document.styleSheets[i];
        }
      }
    }
  }, {
    key: "getSheet",
    value: function getSheet() {
      return this.getSheetForTag(this._tags[this._tags.length - 1]);
    }
  }, {
    key: "insertRule",
    value: function insertRule(rule, index) {
      invariant(isString(rule), '`insertRule` accepts only strings');

      if (!this._isBrowser) {
        if (typeof index !== 'number') {
          index = this._serverSheet.cssRules.length;
        }

        this._serverSheet.insertRule(rule, index);

        return this._rulesCount++;
      }

      if (this._optimizeForSpeed) {
        var sheet = this.getSheet();

        if (typeof index !== 'number') {
          index = sheet.cssRules.length;
        } // this weirdness for perf, and chrome's weird bug
        // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          }

          return -1;
        }
      } else {
        var insertionPoint = this._tags[index];

        this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
      }

      return this._rulesCount++;
    }
  }, {
    key: "replaceRule",
    value: function replaceRule(index, rule) {
      if (this._optimizeForSpeed || !this._isBrowser) {
        var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

        if (!rule.trim()) {
          rule = this._deletedRulePlaceholder;
        }

        if (!sheet.cssRules[index]) {
          // @TBD Should we throw an error?
          return index;
        }

        sheet.deleteRule(index);

        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          } // In order to preserve the indices we insert a deleteRulePlaceholder


          sheet.insertRule(this._deletedRulePlaceholder, index);
        }
      } else {
        var tag = this._tags[index];
        invariant(tag, "old rule at index `".concat(index, "` not found"));
        tag.textContent = rule;
      }

      return index;
    }
  }, {
    key: "deleteRule",
    value: function deleteRule(index) {
      if (!this._isBrowser) {
        this._serverSheet.deleteRule(index);

        return;
      }

      if (this._optimizeForSpeed) {
        this.replaceRule(index, '');
      } else {
        var tag = this._tags[index];
        invariant(tag, "rule at index `".concat(index, "` not found"));
        tag.parentNode.removeChild(tag);
        this._tags[index] = null;
      }
    }
  }, {
    key: "flush",
    value: function flush() {
      this._injected = false;
      this._rulesCount = 0;

      if (this._isBrowser) {
        this._tags.forEach(function (tag) {
          return tag && tag.parentNode.removeChild(tag);
        });

        this._tags = [];
      } else {
        // simpler on server
        this._serverSheet.cssRules = [];
      }
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this2 = this;

      if (!this._isBrowser) {
        return this._serverSheet.cssRules;
      }

      return this._tags.reduce(function (rules, tag) {
        if (tag) {
          rules = rules.concat(_this2.getSheetForTag(tag).cssRules.map(function (rule) {
            return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
          }));
        } else {
          rules.push(null);
        }

        return rules;
      }, []);
    }
  }, {
    key: "makeStyleTag",
    value: function makeStyleTag(name, cssString, relativeToTag) {
      if (cssString) {
        invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
      }

      var tag = document.createElement('style');
      if (this._nonce) tag.setAttribute('nonce', this._nonce);
      tag.type = 'text/css';
      tag.setAttribute("data-".concat(name), '');

      if (cssString) {
        tag.appendChild(document.createTextNode(cssString));
      }

      var head = document.head || document.getElementsByTagName('head')[0];

      if (relativeToTag) {
        head.insertBefore(tag, relativeToTag);
      } else {
        head.appendChild(tag);
      }

      return tag;
    }
  }, {
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports.default = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flush = flush;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styleSheetRegistry = new _stylesheetRegistry.default();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inherits(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _classCallCheck(this, JSXStyle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(JSXStyle).call(this, props));
    _this.prevProps = {};
    return _this;
  }

  _createClass(JSXStyle, [{
    key: "shouldComponentUpdate",
    // probably faster than PureComponent (shallowEqual)
    value: function shouldComponentUpdate(otherProps) {
      return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
      // These are the computed values for dynamic styles.
      String(this.props.dynamic) !== String(otherProps.dynamic);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      styleSheetRegistry.remove(this.props);
    }
  }, {
    key: "render",
    value: function render() {
      // This is a workaround to make the side effect async safe in the "render" phase.
      // See https://github.com/zeit/styled-jsx/pull/484
      if (this.shouldComponentUpdate(this.prevProps)) {
        // Updates
        if (this.prevProps.id) {
          styleSheetRegistry.remove(this.prevProps);
        }

        styleSheetRegistry.add(this.props);
        this.prevProps = this.props;
      }

      return null;
    }
  }], [{
    key: "dynamic",
    value: function dynamic(info) {
      return info.map(function (tagInfo) {
        var baseId = tagInfo[0];
        var props = tagInfo[1];
        return styleSheetRegistry.computeId(baseId, props);
      }).join(' ');
    }
  }]);

  return JSXStyle;
}(_react.Component);

exports.default = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheetRegistry);

    this._sheet = styleSheet || new _stylesheet.default({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  _createClass(StyleSheetRegistry, [{
    key: "add",
    value: function add(props) {
      var _this = this;

      if (undefined === this._optimizeForSpeed) {
        this._optimizeForSpeed = Array.isArray(props.children);

        this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

        this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
      }

      if (this._isBrowser && !this._fromServer) {
        this._fromServer = this.selectFromServer();
        this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
          acc[tagName] = 0;
          return acc;
        }, {});
      }

      var _this$getIdAndRules = this.getIdAndRules(props),
          styleId = _this$getIdAndRules.styleId,
          rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


      if (styleId in this._instancesCounts) {
        this._instancesCounts[styleId] += 1;
        return;
      }

      var indices = rules.map(function (rule) {
        return _this._sheet.insertRule(rule);
      }) // Filter out invalid rules
      .filter(function (index) {
        return index !== -1;
      });
      this._indices[styleId] = indices;
      this._instancesCounts[styleId] = 1;
    }
  }, {
    key: "remove",
    value: function remove(props) {
      var _this2 = this;

      var _this$getIdAndRules2 = this.getIdAndRules(props),
          styleId = _this$getIdAndRules2.styleId;

      invariant(styleId in this._instancesCounts, "styleId: `".concat(styleId, "` not found"));
      this._instancesCounts[styleId] -= 1;

      if (this._instancesCounts[styleId] < 1) {
        var tagFromServer = this._fromServer && this._fromServer[styleId];

        if (tagFromServer) {
          tagFromServer.parentNode.removeChild(tagFromServer);
          delete this._fromServer[styleId];
        } else {
          this._indices[styleId].forEach(function (index) {
            return _this2._sheet.deleteRule(index);
          });

          delete this._indices[styleId];
        }

        delete this._instancesCounts[styleId];
      }
    }
  }, {
    key: "update",
    value: function update(props, nextProps) {
      this.add(nextProps);
      this.remove(props);
    }
  }, {
    key: "flush",
    value: function flush() {
      this._sheet.flush();

      this._sheet.inject();

      this._fromServer = undefined;
      this._indices = {};
      this._instancesCounts = {};
      this.computeId = this.createComputeId();
      this.computeSelector = this.createComputeSelector();
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this3 = this;

      var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
        return [styleId, _this3._fromServer[styleId]];
      }) : [];

      var cssRules = this._sheet.cssRules();

      return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
        return [styleId, _this3._indices[styleId].map(function (index) {
          return cssRules[index].cssText;
        }).join(_this3._optimizeForSpeed ? '' : '\n')];
      }) // filter out empty rules
      .filter(function (rule) {
        return Boolean(rule[1]);
      }));
    }
    /**
     * createComputeId
     *
     * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
     */

  }, {
    key: "createComputeId",
    value: function createComputeId() {
      var cache = {};
      return function (baseId, props) {
        if (!props) {
          return "jsx-".concat(baseId);
        }

        var propsToString = String(props);
        var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

        if (!cache[key]) {
          cache[key] = "jsx-".concat((0, _stringHash.default)("".concat(baseId, "-").concat(propsToString)));
        }

        return cache[key];
      };
    }
    /**
     * createComputeSelector
     *
     * Creates a function to compute and memoize dynamic selectors.
     */

  }, {
    key: "createComputeSelector",
    value: function createComputeSelector() {
      var selectoPlaceholderRegexp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /__jsx-style-dynamic-selector/g;
      var cache = {};
      return function (id, css) {
        // Sanitize SSR-ed CSS.
        // Client side code doesn't need to be sanitized since we use
        // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
        if (!this._isBrowser) {
          css = sanitize(css);
        }

        var idcss = id + css;

        if (!cache[idcss]) {
          cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
        }

        return cache[idcss];
      };
    }
  }, {
    key: "getIdAndRules",
    value: function getIdAndRules(props) {
      var _this4 = this;

      var css = props.children,
          dynamic = props.dynamic,
          id = props.id;

      if (dynamic) {
        var styleId = this.computeId(id, dynamic);
        return {
          styleId: styleId,
          rules: Array.isArray(css) ? css.map(function (rule) {
            return _this4.computeSelector(styleId, rule);
          }) : [this.computeSelector(styleId, css)]
        };
      }

      return {
        styleId: this.computeId(id),
        rules: Array.isArray(css) ? css : [css]
      };
    }
    /**
     * selectFromServer
     *
     * Collects style tags from the document with id __jsx-XXX
     */

  }, {
    key: "selectFromServer",
    value: function selectFromServer() {
      var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
      return elements.reduce(function (acc, element) {
        var id = element.id.slice(2);
        acc[id] = element;
        return acc;
      }, {});
    }
  }]);

  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


/***/ }),

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
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
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
        title: "Search",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "searchContainer df",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "searchSidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, "sidebar", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_SearchInput__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_SearchViews__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_SearchGenres__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_SearchMaterialType__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_SearchIntendedMedium__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_SearchTags__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_SearchLanguages__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_SearchLocation__WEBPACK_IMPORTED_MODULE_14__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_SearchEra__WEBPACK_IMPORTED_MODULE_15__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "searchContent",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, "content"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("style", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, "\n\t\t\t\t\t\t.searchContainer {\n\t\t\t\t\t\t\tbackground: blue;\n\t\t\t\t\t\t\tpadding: 10px;\n\t\t\t\t\t\t\tcolor: white;\n\t\t\t\t\t\t\tmax-width: 1200px;\n\t\t\t\t\t\t\twidth: 95%;\n\t\t\t\t\t\t\tmargin: auto;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t.df {\n\t\t\t\t\t\t\tdisplay: flex;\n\t\t\t\t\t\t\tjustify-content: center;\n\t\t\t\t\t\t\talign-items: center;\n\t\t\t\t\t\t\tflex-direction: column;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t.searchSidebar {\n\t\t\t\t\t\t\twidth: 58%;\n\t\t\t\t\t\t\tmargin-right: 2%;\n\t\t\t\t\t\t\tcolor: #1c2d4c;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t.searchContent {\n\t\t\t\t\t\t\twidth: 70%;\n\t\t\t\t\t\t\tbackground: orange;\n\t\t\t\t\t\t}\n\t\t\t\t\t")));
    }
  }]);

  return Search;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/search.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/daniloviacavavizarreta/www/storyrocketreact/pages/search.js */"./pages/search.js");


/***/ }),

/***/ "next-server/dist/lib/router/router":
/*!*****************************************************!*\
  !*** external "next-server/dist/lib/router/router" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next-server/head":
/*!***********************************!*\
  !*** external "next-server/head" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-tag-input":
/*!**********************************!*\
  !*** external "react-tag-input" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-tag-input");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=search.js.map