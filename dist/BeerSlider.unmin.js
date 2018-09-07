(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["BeerSlider"] = factory();
	else
		root["BeerSlider"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(1);

var _beerslider = __webpack_require__(3);

exports.default = _beerslider.BeerSlider;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BeerSlider = exports.BeerSlider = function () {
    function BeerSlider(element) {
        var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            _ref$start = _ref.start,
            start = _ref$start === undefined ? '50' : _ref$start,
            _ref$prefix = _ref.prefix,
            prefix = _ref$prefix === undefined ? 'beer' : _ref$prefix;

        _classCallCheck(this, BeerSlider);

        this.start = parseInt(start) ? Math.min(100, Math.max(0, parseInt(start))) : 50;
        this.prefix = prefix;
        if (!element || element.children.length !== 2) {
            return;
        }
        this.element = element;
        this.revealContainer = this.element.children[1];
        if (this.revealContainer.children.length < 1) {
            return;
        }
        this.revealElement = this.revealContainer.children[0];
        this.range = this.addElement('input', {
            type: 'range',
            class: this.prefix + '-range',
            value: this.start,
            min: '0',
            max: '100'
        });
        this.handle = this.addElement('span', {
            class: this.prefix + '-handle'
        });
        this.onImagesLoad();
    }

    _createClass(BeerSlider, [{
        key: 'init',
        value: function init() {
            this.element.classList.add(this.prefix + '-ready');
            this.setImgWidth();
            this.move();
            this.addListeners();
        }
    }, {
        key: 'loadingImg',
        value: function loadingImg(src) {
            return new Promise(function (resolve, reject) {
                var img = new Image();
                img.onload = function () {
                    return resolve();
                };
                img.onerror = function () {
                    return reject();
                };
                img.src = src;
            });
        }
    }, {
        key: 'loadedBoth',
        value: function loadedBoth() {
            var mainImageSrc = this.element.children[0].src;
            var revealImageSrc = this.revealElement.src;
            return Promise.all([this.loadingImg(mainImageSrc), this.loadingImg(revealImageSrc)]);
        }
    }, {
        key: 'onImagesLoad',
        value: function onImagesLoad() {
            var _this = this;

            if (!this.revealElement) {
                return;
            }
            this.loadedBoth().then(function () {
                _this.init();
            }, function () {
                console.error('Some errors occurred and images are not loaded.');
            });
        }
    }, {
        key: 'addElement',
        value: function addElement(tag, attributes) {
            var el = document.createElement(tag);
            Object.keys(attributes).forEach(function (key) {
                el.setAttribute(key, attributes[key]);
            });
            this.element.appendChild(el);
            return el;
        }
    }, {
        key: 'setImgWidth',
        value: function setImgWidth() {
            this.revealElement.style.width = getComputedStyle(this.element)['width'];
        }
    }, {
        key: 'addListeners',
        value: function addListeners() {
            var _this2 = this;

            var eventTypes = ['input', 'change'];
            eventTypes.forEach(function (i) {
                _this2.range.addEventListener(i, function () {
                    _this2.move();
                });
            });
            window.addEventListener('resize', function () {
                _this2.setImgWidth();
            });
        }
    }, {
        key: 'move',
        value: function move() {
            this.revealContainer.style.width = this.range.value + '%';
            this.handle.style.left = this.range.value + '%';
        }
    }]);

    return BeerSlider;
}();

/***/ })
/******/ ])["default"];
});