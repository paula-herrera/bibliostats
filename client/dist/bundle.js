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
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/index.jsx":
/*!******************************!*\
  !*** ./client/src/index.jsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nError: Plugin/Preset files are not allowed to export objects, only functions. In /Users/paulaherrera/HackReactor/mvp/bibliostats/node_modules/babel-preset-react/lib/index.js\\n    at createDescriptor (/Users/paulaherrera/node_modules/@babel/core/lib/config/config-descriptors.js:178:11)\\n    at /Users/paulaherrera/node_modules/@babel/core/lib/config/config-descriptors.js:109:50\\n    at Array.map (<anonymous>)\\n    at createDescriptors (/Users/paulaherrera/node_modules/@babel/core/lib/config/config-descriptors.js:109:29)\\n    at createPresetDescriptors (/Users/paulaherrera/node_modules/@babel/core/lib/config/config-descriptors.js:101:10)\\n    at /Users/paulaherrera/node_modules/@babel/core/lib/config/config-descriptors.js:58:104\\n    at cachedFunction (/Users/paulaherrera/node_modules/@babel/core/lib/config/caching.js:62:27)\\n    at cachedFunction.next (<anonymous>)\\n    at evaluateSync (/Users/paulaherrera/node_modules/gensync/index.js:251:28)\\n    at sync (/Users/paulaherrera/node_modules/gensync/index.js:89:14)\\n    at presets (/Users/paulaherrera/node_modules/@babel/core/lib/config/config-descriptors.js:29:84)\\n    at mergeChainOpts (/Users/paulaherrera/node_modules/@babel/core/lib/config/config-chain.js:416:26)\\n    at /Users/paulaherrera/node_modules/@babel/core/lib/config/config-chain.js:374:7\\n    at Generator.next (<anonymous>)\\n    at buildRootChain (/Users/paulaherrera/node_modules/@babel/core/lib/config/config-chain.js:73:36)\\n    at buildRootChain.next (<anonymous>)\\n    at loadPrivatePartialConfig (/Users/paulaherrera/node_modules/@babel/core/lib/config/partial.js:101:62)\\n    at loadPrivatePartialConfig.next (<anonymous>)\\n    at /Users/paulaherrera/node_modules/@babel/core/lib/config/partial.js:140:25\\n    at Generator.next (<anonymous>)\\n    at step (/Users/paulaherrera/node_modules/gensync/index.js:261:32)\\n    at evaluateAsync (/Users/paulaherrera/node_modules/gensync/index.js:291:5)\\n    at /Users/paulaherrera/node_modules/gensync/index.js:93:9\\n    at new Promise (<anonymous>)\\n    at async (/Users/paulaherrera/node_modules/gensync/index.js:92:14)\\n    at Object.<anonymous> (/Users/paulaherrera/HackReactor/mvp/bibliostats/node_modules/babel-loader/lib/index.js:155:26)\\n    at Generator.next (<anonymous>)\\n    at asyncGeneratorStep (/Users/paulaherrera/HackReactor/mvp/bibliostats/node_modules/babel-loader/lib/index.js:3:103)\\n    at _next (/Users/paulaherrera/HackReactor/mvp/bibliostats/node_modules/babel-loader/lib/index.js:5:194)\\n    at /Users/paulaherrera/HackReactor/mvp/bibliostats/node_modules/babel-loader/lib/index.js:5:364\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2luZGV4LmpzeC5qcyIsInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/src/index.jsx\n");

/***/ })

/******/ });