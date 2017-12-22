/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(4);

var _express2 = _interopRequireDefault(_express);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(5);

var _reactHelmet = __webpack_require__(1);

var _styledComponents = __webpack_require__(2);

var _App = __webpack_require__(6);

var _App2 = _interopRequireDefault(_App);

var _Html = __webpack_require__(7);

var _Html2 = _interopRequireDefault(_Html);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = 3000;
var server = (0, _express2.default)();

server.get('/', function (req, res) {
  var sheet = new _styledComponents.ServerStyleSheet();

  var body = (0, _server.renderToString)(sheet.collectStyles(_react2.default.createElement(_App2.default, null)));
  var helmet = _reactHelmet.Helmet.renderStatic();
  var styles = sheet.getStyleTags();

  res.send((0, _Html2.default)({ body: body, helmet: helmet, styles: styles }));
});

server.listen(port);
console.log('Express server running at http://localhost:' + port);

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  html,\n  body {\n    margin: 0;\n    padding: 0;\n    font-family: \'Helvetica,Arial,sans-serif\';\n  }\n'], ['\n  html,\n  body {\n    margin: 0;\n    padding: 0;\n    font-family: \'Helvetica,Arial,sans-serif\';\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  font-size: 40px;\n  background: linear-gradient(20deg, rgb(219, 112, 147), #daa357);\n'], ['\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  font-size: 40px;\n  background: linear-gradient(20deg, rgb(219, 112, 147), #daa357);\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(1);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

(0, _styledComponents.injectGlobal)(_templateObject);

var Container = _styledComponents2.default.div(_templateObject2);

var App = function App() {
  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    _react2.default.createElement(
      _reactHelmet.Helmet,
      null,
      _react2.default.createElement(
        'title',
        null,
        'This is the app!'
      )
    ),
    _react2.default.createElement(
      Container,
      null,
      'Hello world!'
    )
  );
};

exports.default = App;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Html = function Html(_ref) {
  var body = _ref.body,
      helmet = _ref.helmet,
      styles = _ref.styles;
  return "\n  <!DOCTYPE html>\n  <html>\n    <head>\n      " + helmet.title.toString() + "\n      " + styles + "\n    </head>\n\n    <body>\n      <div id=\"app\">" + body + "</div>\n    </body>\n  </html>\n";
};

exports.default = Html;

/***/ })
/******/ ]);