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
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/Menu */ \"./src/Menu.js\");\nvar _jsxFileName = \"/Users/xzaizenx/routing/server/server.js\";\n\n\n\n\n\n\nconst app = express__WEBPACK_IMPORTED_MODULE_3___default()(); //express.static is a express middleware that serves static files\n//and to subscribe to express middleware, we use app.use()\n\napp.use(express__WEBPACK_IMPORTED_MODULE_3___default.a.static(\"../../build\"));\napp.get(\"/*\", (req, res) => {\n  //renders our app as a string\n  const reactApp = react_dom_server__WEBPACK_IMPORTED_MODULE_4___default.a.renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_src_Menu__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 50\n    }\n  }));\n  const indexFile = path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(\"./build/index.html\");\n\n  const readIndexFile = async () => {\n    try {\n      const readHTML = (await fs__WEBPACK_IMPORTED_MODULE_1___default.a.readFile(indexFile, \"utf8\")).replace(`<div id=\"root\"></div>`, `<div id=\"root\">${reactApp}</div>`);\n      res.send(readHTML);\n    } catch (e) {\n      console.error(e);\n    }\n  };\n\n  readIndexFile();\n}); //the port is stored in process.env.PORT in our DEV envionrment, but if not then it's 4000\n\nconst PORT = process.env.PORT || 4000;\napp.listen(PORT, () => console.log(`file is served up on PORT ${PORT}`));\n\n//# sourceURL=webpack:///./server/server.js?");

/***/ }),

/***/ "./src/Menu.js":
/*!*********************!*\
  !*** ./src/Menu.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _data_anime_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/anime.json */ \"./src/data/anime.json\");\nvar _data_anime_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./data/anime.json */ \"./src/data/anime.json\", 1);\nvar _jsxFileName = \"/Users/xzaizenx/routing/src/Menu.js\";\n\n\n\nconst Recipe = ({\n  name,\n  description\n}) => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }\n  }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }\n  }, description));\n};\n\nconst Menu = () => {\n  return _data_anime_json__WEBPACK_IMPORTED_MODULE_1__.map(dataList => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Recipe, Object.assign({}, dataList, {\n    key: dataList.id,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 36\n    }\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menu);\n\n//# sourceURL=webpack:///./src/Menu.js?");

/***/ }),

/***/ "./src/data/anime.json":
/*!*****************************!*\
  !*** ./src/data/anime.json ***!
  \*****************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"[{\\\"id\\\":1,\\\"name\\\":\\\"Jujutsu Kaisen\\\",\\\"description\\\":\\\"An anime about curses, and by far the best one this season\\\",\\\"status\\\":\\\"active\\\"},{\\\"id\\\":2,\\\"name\\\":\\\"Re Zero\\\",\\\"description\\\":\\\"An Isekai show where the protagonist Subaru revives\\\",\\\"status\\\":\\\"active\\\"},{\\\"id\\\":3,\\\"name\\\":\\\"Bleach\\\",\\\"description\\\":\\\"A shonen anime about Shinigamis\\\",\\\"status\\\":\\\"finished\\\"},{\\\"id\\\":4,\\\"name\\\":\\\"One Piece\\\",\\\"description\\\":\\\"A shonen anime about Pirates\\\",\\\"status\\\":\\\"active\\\"},{\\\"id\\\":5,\\\"name\\\":\\\"Magi\\\",\\\"description\\\":\\\"A shonen anime about magicians\\\",\\\"status\\\":\\\"finished\\\"},{\\\"id\\\":6,\\\"name\\\":\\\"Promised Neverland\\\",\\\"description\\\":\\\"A shonen anime about mysteries\\\",\\\"status\\\":\\\"active\\\"},{\\\"id\\\":7,\\\"name\\\":\\\"Dr. Stone\\\",\\\"description\\\":\\\"Highschooler Senku is a scientific genius, but one day, a mysterious light eradicates civilaziation. Senku is the first human to awake after 2000 years.\\\",\\\"status\\\":\\\"active\\\"},{\\\"id\\\":8,\\\"name\\\":\\\"Naruto\\\",\\\"description\\\":\\\"A Shonen anime staged in a Ninja world. Naruto is a ninja growing up in Konoha.\\\",\\\"status\\\":\\\"finished\\\"},{\\\"id\\\":9,\\\"name\\\":\\\"Boruto\\\",\\\"description\\\":\\\"A sequel to the popular Naruto franchise.\\\",\\\"status\\\":\\\"active\\\"},{\\\"id\\\":10,\\\"name\\\":\\\"Kimetsu\\\",\\\"description\\\":\\\"A Shonen anime where demons `Oni` roam around the world, and protagonist Tanjiro gets his whole family, except his younger sister, killed by a demon. Although his sister Nezuko is alive, she turns into a demon as well.\\\",\\\"status\\\":\\\"finished\\\"}]\");\n\n//# sourceURL=webpack:///./src/data/anime.json?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ })

/******/ });