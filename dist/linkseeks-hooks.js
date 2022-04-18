(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@linkseeks/core"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["@linkseeks/core", "react"], factory);
	else if(typeof exports === 'object')
		exports["linkseeksHooks"] = factory(require("@linkseeks/core"), require("react"));
	else
		root["linkseeksHooks"] = factory(root["@linkseeks/core"], root["react"]);
})(this, (__WEBPACK_EXTERNAL_MODULE__linkseeks_core__, __WEBPACK_EXTERNAL_MODULE_react__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/useInject/index.ts":
/*!********************************!*\
  !*** ./src/useInject/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useInject": () => (/* binding */ useInject)
/* harmony export */ });
/* harmony import */ var _linkseeks_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @linkseeks/core */ "@linkseeks/core");
/* harmony import */ var _linkseeks_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_linkseeks_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function useInject(identifier) {
    const [service, setService] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    if (!_linkseeks_core__WEBPACK_IMPORTED_MODULE_0__.container) {
        throw new Error("container null create!");
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        const target = _linkseeks_core__WEBPACK_IMPORTED_MODULE_0__.container === null || _linkseeks_core__WEBPACK_IMPORTED_MODULE_0__.container === void 0 ? void 0 : _linkseeks_core__WEBPACK_IMPORTED_MODULE_0__.container.get(identifier);
        setService(target);
    }, [_linkseeks_core__WEBPACK_IMPORTED_MODULE_0__.container]);
    return [service];
}


/***/ }),

/***/ "@linkseeks/core":
/*!**********************************!*\
  !*** external "@linkseeks/core" ***!
  \**********************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__linkseeks_core__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useInject": () => (/* reexport safe */ _useInject__WEBPACK_IMPORTED_MODULE_0__.useInject)
/* harmony export */ });
/* harmony import */ var _useInject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useInject */ "./src/useInject/index.ts");



})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=linkseeks-hooks.js.map