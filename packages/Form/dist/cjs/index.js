(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["RPB"] = factory(require("react"));
	else
		root["RPB"] = factory(root["React"]);
})(this, (__WEBPACK_EXTERNAL_MODULE__442__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 191:
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ 73:
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ 978:
/***/ ((module) => {

/**
 * This file automatically generated from `pre-publish.js`.
 * Do not manually edit.
 */

module.exports = {
  "area": true,
  "base": true,
  "br": true,
  "col": true,
  "embed": true,
  "hr": true,
  "img": true,
  "input": true,
  "link": true,
  "meta": true,
  "param": true,
  "source": true,
  "track": true,
  "wbr": true
};

/***/ }),

/***/ 989:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(191);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@charset "UTF-8";
/* 自定义的公共css */
.option-wrapper {
  width: 300px;
  text-align: left;
  background-color: #fff;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  border: 1px solid black;
  margin-top: 2px;
  margin-left: 4px;
  position: absolute;
  z-index: 9999;
}

.option-item {
  padding: 2px 8px;
}

.option-item:hover {
  background-color: rgb(25, 103, 210);
  cursor: pointer;
}

.live-search-select-wrapper {
  flex: 1;
}`, "",{"version":3,"sources":["webpack://./src/FormItem/LiveSearchSelect/index.css"],"names":[],"mappings":"AAAA,gBAAgB;AAAhB,cAAA;AACA;EACI,YAAA;EACA,gBAAA;EACA,sBAAA;EACA,0CAAA;EACA,uBAAA;EACA,eAAA;EACA,gBAAA;EACA,kBAAA;EACA,aAAA;AAEJ;;AACE;EACE,gBAAA;AAEJ;;AACE;EACE,mCAAA;EACA,eAAA;AAEJ;;AAAE;EACE,OAAA;AAGJ","sourcesContent":["/* 自定义的公共css */\r\n.option-wrapper {\r\n    width: 300px;\r\n    text-align: left;\r\n    background-color: #fff;\r\n    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);\r\n    border: 1px solid black;\r\n    margin-top: 2px;\r\n    margin-left: 4px;\r\n    position: absolute;\r\n    z-index: 9999;\r\n  }\r\n  \r\n  .option-item {\r\n    padding: 2px 8px;\r\n  }\r\n  \r\n  .option-item:hover {\r\n    background-color: rgba(25, 103, 210);\r\n    cursor: pointer;\r\n  }\r\n  .live-search-select-wrapper {\r\n    flex: 1;\r\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 675:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(191);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@charset "UTF-8";
.multiple-select-wrapper {
  position: relative;
  flex: 1;
}

.multiple-select-active {
  background-color: rgb(25, 103, 210);
}

.multiple-select-option-wrapper {
  padding: 14px;
}

.multiple-select-active::after {
  content: "✔";
}

.selected-option {
  position: absolute;
  padding: 4px 10px;
  border-radius: 50%;
  background-color: #f0f0f0;
  top: 3px;
}`, "",{"version":3,"sources":["webpack://./src/FormItem/MultipleSelect/index.css"],"names":[],"mappings":"AAAA,gBAAgB;AAAhB;EACI,kBAAA;EACA,OAAA;AAEJ;;AAAA;EACI,mCAAA;AAGJ;;AADA;EACI,aAAA;AAIJ;;AAFA;EACI,YAAA;AAKJ;;AAHA;EACI,kBAAA;EACA,iBAAA;EACA,kBAAA;EACA,yBAAA;EACA,QAAA;AAMJ","sourcesContent":[".multiple-select-wrapper {\r\n    position: relative;\r\n    flex: 1;\r\n}\r\n.multiple-select-active {\r\n    background-color: rgba(25, 103, 210);\r\n}\r\n.multiple-select-option-wrapper {\r\n    padding: 14px;\r\n}\r\n.multiple-select-active::after {\r\n    content: \"✔\";\r\n}\r\n.selected-option {\r\n    position: absolute;\r\n    padding: 4px 10px;\r\n    border-radius: 50%;\r\n    background-color: #f0f0f0;\r\n    top: 3px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 5:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(191);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.textarea-warpper {
  flex: 1;
}`, "",{"version":3,"sources":["webpack://./src/FormItem/Textarea/index.css"],"names":[],"mappings":"AAAA;EACI,OAAA;AACJ","sourcesContent":[".textarea-warpper {\r\n    flex: 1;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 591:
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 128:
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ 51:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ 855:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 740:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ 656:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ 442:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__442__;

/***/ }),

/***/ 650:
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
  'use strict';

  var hasOwn = {}.hasOwnProperty;
  function classNames() {
    var classes = '';
    for (var i = 0; i < arguments.length; i++) {
      var arg = arguments[i];
      if (arg) {
        classes = appendClass(classes, parseValue(arg));
      }
    }
    return classes;
  }
  function parseValue(arg) {
    if (typeof arg === 'string' || typeof arg === 'number') {
      return arg;
    }
    if (typeof arg !== 'object') {
      return '';
    }
    if (Array.isArray(arg)) {
      return classNames.apply(null, arg);
    }
    if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
      return arg.toString();
    }
    var classes = '';
    for (var key in arg) {
      if (hasOwn.call(arg, key) && arg[key]) {
        classes = appendClass(classes, key);
      }
    }
    return classes;
  }
  function appendClass(value, newClass) {
    if (!newClass) {
      return value;
    }
    if (value) {
      return value + ' ' + newClass;
    }
    return value + newClass;
  }
  if ( true && module.exports) {
    classNames.default = classNames;
    module.exports = classNames;
  } else if (true) {
    // register as 'classnames', consistent with npm package name
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return classNames;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})();

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  FormContext: () => (/* binding */ FormContext),
  FormItem: () => (/* reexport */ src_FormItem),
  "default": () => (/* binding */ src)
});

// EXTERNAL MODULE: external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"}
var external_root_React_commonjs2_react_commonjs_react_amd_react_ = __webpack_require__(442);
var external_root_React_commonjs2_react_commonjs_react_amd_react_default = /*#__PURE__*/__webpack_require__.n(external_root_React_commonjs2_react_commonjs_react_amd_react_);
// EXTERNAL MODULE: ../../node_modules/void-elements/index.js
var void_elements = __webpack_require__(978);
var void_elements_default = /*#__PURE__*/__webpack_require__.n(void_elements);
;// CONCATENATED MODULE: ../../node_modules/html-parse-stringify/dist/html-parse-stringify.module.js

var t = /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;
function n(n) {
  var r = {
      type: "tag",
      name: "",
      voidElement: !1,
      attrs: {},
      children: []
    },
    i = n.match(/<\/?([^\s]+?)[/\s>]/);
  if (i && (r.name = i[1], ((void_elements_default())[i[1]] || "/" === n.charAt(n.length - 2)) && (r.voidElement = !0), r.name.startsWith("!--"))) {
    var s = n.indexOf("--\x3e");
    return {
      type: "comment",
      comment: -1 !== s ? n.slice(4, s) : ""
    };
  }
  for (var a = new RegExp(t), c = null; null !== (c = a.exec(n));) if (c[0].trim()) if (c[1]) {
    var o = c[1].trim(),
      l = [o, ""];
    o.indexOf("=") > -1 && (l = o.split("=")), r.attrs[l[0]] = l[1], a.lastIndex--;
  } else c[2] && (r.attrs[c[2]] = c[3].trim().substring(1, c[3].length - 1));
  return r;
}
var r = /<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,
  i = /^\s*$/,
  s = Object.create(null);
function a(e, t) {
  switch (t.type) {
    case "text":
      return e + t.content;
    case "tag":
      return e += "<" + t.name + (t.attrs ? function (e) {
        var t = [];
        for (var n in e) t.push(n + '="' + e[n] + '"');
        return t.length ? " " + t.join(" ") : "";
      }(t.attrs) : "") + (t.voidElement ? "/>" : ">"), t.voidElement ? e : e + t.children.reduce(a, "") + "</" + t.name + ">";
    case "comment":
      return e + "\x3c!--" + t.comment + "--\x3e";
  }
}
var c = {
  parse: function (e, t) {
    t || (t = {}), t.components || (t.components = s);
    var a,
      c = [],
      o = [],
      l = -1,
      m = !1;
    if (0 !== e.indexOf("<")) {
      var u = e.indexOf("<");
      c.push({
        type: "text",
        content: -1 === u ? e : e.substring(0, u)
      });
    }
    return e.replace(r, function (r, s) {
      if (m) {
        if (r !== "</" + a.name + ">") return;
        m = !1;
      }
      var u,
        f = "/" !== r.charAt(1),
        h = r.startsWith("\x3c!--"),
        p = s + r.length,
        d = e.charAt(p);
      if (h) {
        var v = n(r);
        return l < 0 ? (c.push(v), c) : ((u = o[l]).children.push(v), c);
      }
      if (f && (l++, "tag" === (a = n(r)).type && t.components[a.name] && (a.type = "component", m = !0), a.voidElement || m || !d || "<" === d || a.children.push({
        type: "text",
        content: e.slice(p, e.indexOf("<", p))
      }), 0 === l && c.push(a), (u = o[l - 1]) && u.children.push(a), o[l] = a), (!f || a.voidElement) && (l > -1 && (a.voidElement || a.name === r.slice(2, -1)) && (l--, a = -1 === l ? c : o[l]), !m && "<" !== d && d)) {
        u = -1 === l ? c : o[l].children;
        var x = e.indexOf("<", p),
          g = e.slice(p, -1 === x ? void 0 : x);
        i.test(g) && (g = " "), (x > -1 && l + u.length >= 0 || " " !== g) && u.push({
          type: "text",
          content: g
        });
      }
    }), c;
  },
  stringify: function (e) {
    return e.reduce(function (e, t) {
      return e + a("", t);
    }, "");
  }
};
/* harmony default export */ const html_parse_stringify_module = ((/* unused pure expression or super */ null && (c)));
;// CONCATENATED MODULE: ../../node_modules/react-i18next/dist/es/utils.js
function utils_warn() {
  if (console && console.warn) {
    var _console;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (typeof args[0] === 'string') args[0] = "react-i18next:: ".concat(args[0]);
    (_console = console).warn.apply(_console, args);
  }
}
var alreadyWarned = {};
function utils_warnOnce() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }
  if (typeof args[0] === 'string' && alreadyWarned[args[0]]) return;
  if (typeof args[0] === 'string') alreadyWarned[args[0]] = new Date();
  utils_warn.apply(void 0, args);
}
function loadNamespaces(i18n, ns, cb) {
  i18n.loadNamespaces(ns, function () {
    if (i18n.isInitialized) {
      cb();
    } else {
      var initialized = function initialized() {
        setTimeout(function () {
          i18n.off('initialized', initialized);
        }, 0);
        cb();
      };
      i18n.on('initialized', initialized);
    }
  });
}
function oldI18nextHasLoadedNamespace(ns, i18n) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var lng = i18n.languages[0];
  var fallbackLng = i18n.options ? i18n.options.fallbackLng : false;
  var lastLng = i18n.languages[i18n.languages.length - 1];
  if (lng.toLowerCase() === 'cimode') return true;
  var loadNotPending = function loadNotPending(l, n) {
    var loadState = i18n.services.backendConnector.state["".concat(l, "|").concat(n)];
    return loadState === -1 || loadState === 2;
  };
  if (options.bindI18n && options.bindI18n.indexOf('languageChanging') > -1 && i18n.services.backendConnector.backend && i18n.isLanguageChangingTo && !loadNotPending(i18n.isLanguageChangingTo, ns)) return false;
  if (i18n.hasResourceBundle(lng, ns)) return true;
  if (!i18n.services.backendConnector.backend || i18n.options.resources && !i18n.options.partialBundledLanguages) return true;
  if (loadNotPending(lng, ns) && (!fallbackLng || loadNotPending(lastLng, ns))) return true;
  return false;
}
function hasLoadedNamespace(ns, i18n) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  if (!i18n.languages || !i18n.languages.length) {
    utils_warnOnce('i18n.languages were undefined or empty', i18n.languages);
    return true;
  }
  var isNewerI18next = i18n.options.ignoreJSONStructure !== undefined;
  if (!isNewerI18next) {
    return oldI18nextHasLoadedNamespace(ns, i18n, options);
  }
  return i18n.hasLoadedNamespace(ns, {
    precheck: function precheck(i18nInstance, loadNotPending) {
      if (options.bindI18n && options.bindI18n.indexOf('languageChanging') > -1 && i18nInstance.services.backendConnector.backend && i18nInstance.isLanguageChangingTo && !loadNotPending(i18nInstance.isLanguageChangingTo, ns)) return false;
    }
  });
}
function utils_getDisplayName(Component) {
  return Component.displayName || Component.name || (typeof Component === 'string' && Component.length > 0 ? Component : 'Unknown');
}
;// CONCATENATED MODULE: ../../node_modules/@babel/runtime/helpers/esm/typeof.js
function typeof_typeof(o) {
  "@babel/helpers - typeof";

  return typeof_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, typeof_typeof(o);
}
;// CONCATENATED MODULE: ../../node_modules/@babel/runtime/helpers/esm/toPrimitive.js

function toPrimitive(t, r) {
  if ("object" != typeof_typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof_typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
;// CONCATENATED MODULE: ../../node_modules/@babel/runtime/helpers/esm/toPropertyKey.js


function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == typeof_typeof(i) ? i : i + "";
}
;// CONCATENATED MODULE: ../../node_modules/@babel/runtime/helpers/esm/defineProperty.js

function defineProperty_defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
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
;// CONCATENATED MODULE: ../../node_modules/react-i18next/dist/es/unescape.js
var matchHtmlEntity = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g;
var htmlEntities = {
  '&amp;': '&',
  '&#38;': '&',
  '&lt;': '<',
  '&#60;': '<',
  '&gt;': '>',
  '&#62;': '>',
  '&apos;': "'",
  '&#39;': "'",
  '&quot;': '"',
  '&#34;': '"',
  '&nbsp;': ' ',
  '&#160;': ' ',
  '&copy;': '©',
  '&#169;': '©',
  '&reg;': '®',
  '&#174;': '®',
  '&hellip;': '…',
  '&#8230;': '…',
  '&#x2F;': '/',
  '&#47;': '/'
};
var unescapeHtmlEntity = function unescapeHtmlEntity(m) {
  return htmlEntities[m];
};
var unescape_unescape = function unescape(text) {
  return text.replace(matchHtmlEntity, unescapeHtmlEntity);
};
;// CONCATENATED MODULE: ../../node_modules/react-i18next/dist/es/defaults.js

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        defineProperty_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}

var defaultOptions = {
  bindI18n: 'languageChanged',
  bindI18nStore: '',
  transEmptyNodeValue: '',
  transSupportBasicHtmlNodes: true,
  transWrapTextNodes: '',
  transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],
  useSuspense: true,
  unescape: unescape_unescape
};
function setDefaults() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  defaultOptions = _objectSpread(_objectSpread({}, defaultOptions), options);
}
function defaults_getDefaults() {
  return defaultOptions;
}
;// CONCATENATED MODULE: ../../node_modules/react-i18next/dist/es/TransWithoutContext.js



var _excluded = (/* unused pure expression or super */ null && (["format"])),
  _excluded2 = (/* unused pure expression or super */ null && (["children", "count", "parent", "i18nKey", "context", "tOptions", "values", "defaults", "components", "ns", "i18n", "t", "shouldUnescape"]));
function TransWithoutContext_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function TransWithoutContext_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      TransWithoutContext_ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      TransWithoutContext_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}





function hasChildren(node, checkLength) {
  if (!node) return false;
  var base = node.props ? node.props.children : node.children;
  if (checkLength) return base.length > 0;
  return !!base;
}
function getChildren(node) {
  if (!node) return [];
  return node.props ? node.props.children : node.children;
}
function hasValidReactChildren(children) {
  if (Object.prototype.toString.call(children) !== '[object Array]') return false;
  return children.every(function (child) {
    return /*#__PURE__*/isValidElement(child);
  });
}
function getAsArray(data) {
  return Array.isArray(data) ? data : [data];
}
function mergeProps(source, target) {
  var newTarget = TransWithoutContext_objectSpread({}, target);
  newTarget.props = Object.assign(source.props, target.props);
  return newTarget;
}
function nodesToString(children, i18nOptions) {
  if (!children) return '';
  var stringNode = '';
  var childrenArray = getAsArray(children);
  var keepArray = i18nOptions.transSupportBasicHtmlNodes && i18nOptions.transKeepBasicHtmlNodesFor ? i18nOptions.transKeepBasicHtmlNodesFor : [];
  childrenArray.forEach(function (child, childIndex) {
    if (typeof child === 'string') {
      stringNode += "".concat(child);
    } else if ( /*#__PURE__*/isValidElement(child)) {
      var childPropsCount = Object.keys(child.props).length;
      var shouldKeepChild = keepArray.indexOf(child.type) > -1;
      var childChildren = child.props.children;
      if (!childChildren && shouldKeepChild && childPropsCount === 0) {
        stringNode += "<".concat(child.type, "/>");
      } else if (!childChildren && (!shouldKeepChild || childPropsCount !== 0)) {
        stringNode += "<".concat(childIndex, "></").concat(childIndex, ">");
      } else if (child.props.i18nIsDynamicList) {
        stringNode += "<".concat(childIndex, "></").concat(childIndex, ">");
      } else if (shouldKeepChild && childPropsCount === 1 && typeof childChildren === 'string') {
        stringNode += "<".concat(child.type, ">").concat(childChildren, "</").concat(child.type, ">");
      } else {
        var content = nodesToString(childChildren, i18nOptions);
        stringNode += "<".concat(childIndex, ">").concat(content, "</").concat(childIndex, ">");
      }
    } else if (child === null) {
      warn("Trans: the passed in value is invalid - seems you passed in a null child.");
    } else if (_typeof(child) === 'object') {
      var format = child.format,
        clone = _objectWithoutProperties(child, _excluded);
      var keys = Object.keys(clone);
      if (keys.length === 1) {
        var value = format ? "".concat(keys[0], ", ").concat(format) : keys[0];
        stringNode += "{{".concat(value, "}}");
      } else {
        warn("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.", child);
      }
    } else {
      warn("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.", child);
    }
  });
  return stringNode;
}
function renderNodes(children, targetString, i18n, i18nOptions, combinedTOpts, shouldUnescape) {
  if (targetString === '') return [];
  var keepArray = i18nOptions.transKeepBasicHtmlNodesFor || [];
  var emptyChildrenButNeedsHandling = targetString && new RegExp(keepArray.join('|')).test(targetString);
  if (!children && !emptyChildrenButNeedsHandling) return [targetString];
  var data = {};
  function getData(childs) {
    var childrenArray = getAsArray(childs);
    childrenArray.forEach(function (child) {
      if (typeof child === 'string') return;
      if (hasChildren(child)) getData(getChildren(child));else if (_typeof(child) === 'object' && ! /*#__PURE__*/isValidElement(child)) Object.assign(data, child);
    });
  }
  getData(children);
  var ast = HTML.parse("<0>".concat(targetString, "</0>"));
  var opts = TransWithoutContext_objectSpread(TransWithoutContext_objectSpread({}, data), combinedTOpts);
  function renderInner(child, node, rootReactNode) {
    var childs = getChildren(child);
    var mappedChildren = mapAST(childs, node.children, rootReactNode);
    return hasValidReactChildren(childs) && mappedChildren.length === 0 ? childs : mappedChildren;
  }
  function pushTranslatedJSX(child, inner, mem, i, isVoid) {
    if (child.dummy) child.children = inner;
    mem.push( /*#__PURE__*/cloneElement(child, TransWithoutContext_objectSpread(TransWithoutContext_objectSpread({}, child.props), {}, {
      key: i
    }), isVoid ? undefined : inner));
  }
  function mapAST(reactNode, astNode, rootReactNode) {
    var reactNodes = getAsArray(reactNode);
    var astNodes = getAsArray(astNode);
    return astNodes.reduce(function (mem, node, i) {
      var translationContent = node.children && node.children[0] && node.children[0].content && i18n.services.interpolator.interpolate(node.children[0].content, opts, i18n.language);
      if (node.type === 'tag') {
        var tmp = reactNodes[parseInt(node.name, 10)];
        if (!tmp && rootReactNode.length === 1 && rootReactNode[0][node.name]) tmp = rootReactNode[0][node.name];
        if (!tmp) tmp = {};
        var child = Object.keys(node.attrs).length !== 0 ? mergeProps({
          props: node.attrs
        }, tmp) : tmp;
        var isElement = /*#__PURE__*/isValidElement(child);
        var isValidTranslationWithChildren = isElement && hasChildren(node, true) && !node.voidElement;
        var isEmptyTransWithHTML = emptyChildrenButNeedsHandling && _typeof(child) === 'object' && child.dummy && !isElement;
        var isKnownComponent = _typeof(children) === 'object' && children !== null && Object.hasOwnProperty.call(children, node.name);
        if (typeof child === 'string') {
          var value = i18n.services.interpolator.interpolate(child, opts, i18n.language);
          mem.push(value);
        } else if (hasChildren(child) || isValidTranslationWithChildren) {
          var inner = renderInner(child, node, rootReactNode);
          pushTranslatedJSX(child, inner, mem, i);
        } else if (isEmptyTransWithHTML) {
          var _inner = mapAST(reactNodes, node.children, rootReactNode);
          mem.push( /*#__PURE__*/cloneElement(child, TransWithoutContext_objectSpread(TransWithoutContext_objectSpread({}, child.props), {}, {
            key: i
          }), _inner));
        } else if (Number.isNaN(parseFloat(node.name))) {
          if (isKnownComponent) {
            var _inner2 = renderInner(child, node, rootReactNode);
            pushTranslatedJSX(child, _inner2, mem, i, node.voidElement);
          } else if (i18nOptions.transSupportBasicHtmlNodes && keepArray.indexOf(node.name) > -1) {
            if (node.voidElement) {
              mem.push( /*#__PURE__*/createElement(node.name, {
                key: "".concat(node.name, "-").concat(i)
              }));
            } else {
              var _inner3 = mapAST(reactNodes, node.children, rootReactNode);
              mem.push( /*#__PURE__*/createElement(node.name, {
                key: "".concat(node.name, "-").concat(i)
              }, _inner3));
            }
          } else if (node.voidElement) {
            mem.push("<".concat(node.name, " />"));
          } else {
            var _inner4 = mapAST(reactNodes, node.children, rootReactNode);
            mem.push("<".concat(node.name, ">").concat(_inner4, "</").concat(node.name, ">"));
          }
        } else if (_typeof(child) === 'object' && !isElement) {
          var content = node.children[0] ? translationContent : null;
          if (content) mem.push(content);
        } else if (node.children.length === 1 && translationContent) {
          mem.push( /*#__PURE__*/cloneElement(child, TransWithoutContext_objectSpread(TransWithoutContext_objectSpread({}, child.props), {}, {
            key: i
          }), translationContent));
        } else {
          mem.push( /*#__PURE__*/cloneElement(child, TransWithoutContext_objectSpread(TransWithoutContext_objectSpread({}, child.props), {}, {
            key: i
          })));
        }
      } else if (node.type === 'text') {
        var wrapTextNodes = i18nOptions.transWrapTextNodes;
        var _content = shouldUnescape ? i18nOptions.unescape(i18n.services.interpolator.interpolate(node.content, opts, i18n.language)) : i18n.services.interpolator.interpolate(node.content, opts, i18n.language);
        if (wrapTextNodes) {
          mem.push( /*#__PURE__*/createElement(wrapTextNodes, {
            key: "".concat(node.name, "-").concat(i)
          }, _content));
        } else {
          mem.push(_content);
        }
      }
      return mem;
    }, []);
  }
  var result = mapAST([{
    dummy: true,
    children: children || []
  }], ast, getAsArray(children || []));
  return getChildren(result[0]);
}
function Trans(_ref) {
  var children = _ref.children,
    count = _ref.count,
    parent = _ref.parent,
    i18nKey = _ref.i18nKey,
    context = _ref.context,
    _ref$tOptions = _ref.tOptions,
    tOptions = _ref$tOptions === void 0 ? {} : _ref$tOptions,
    values = _ref.values,
    defaults = _ref.defaults,
    components = _ref.components,
    ns = _ref.ns,
    i18nFromProps = _ref.i18n,
    tFromProps = _ref.t,
    shouldUnescape = _ref.shouldUnescape,
    additionalProps = _objectWithoutProperties(_ref, _excluded2);
  var i18n = i18nFromProps || getI18n();
  if (!i18n) {
    warnOnce('You will need to pass in an i18next instance by using i18nextReactModule');
    return children;
  }
  var t = tFromProps || i18n.t.bind(i18n) || function (k) {
    return k;
  };
  if (context) tOptions.context = context;
  var reactI18nextOptions = TransWithoutContext_objectSpread(TransWithoutContext_objectSpread({}, getDefaults()), i18n.options && i18n.options.react);
  var namespaces = ns || t.ns || i18n.options && i18n.options.defaultNS;
  namespaces = typeof namespaces === 'string' ? [namespaces] : namespaces || ['translation'];
  var defaultValue = defaults || nodesToString(children, reactI18nextOptions) || reactI18nextOptions.transEmptyNodeValue || i18nKey;
  var hashTransKey = reactI18nextOptions.hashTransKey;
  var key = i18nKey || (hashTransKey ? hashTransKey(defaultValue) : defaultValue);
  var interpolationOverride = values ? tOptions.interpolation : {
    interpolation: TransWithoutContext_objectSpread(TransWithoutContext_objectSpread({}, tOptions.interpolation), {}, {
      prefix: '#$?',
      suffix: '?$#'
    })
  };
  var combinedTOpts = TransWithoutContext_objectSpread(TransWithoutContext_objectSpread(TransWithoutContext_objectSpread(TransWithoutContext_objectSpread({}, tOptions), {}, {
    count: count
  }, values), interpolationOverride), {}, {
    defaultValue: defaultValue,
    ns: namespaces
  });
  var translation = key ? t(key, combinedTOpts) : defaultValue;
  var content = renderNodes(components || children, translation, i18n, reactI18nextOptions, combinedTOpts, shouldUnescape);
  var useAsParent = parent !== undefined ? parent : reactI18nextOptions.defaultTransParent;
  return useAsParent ? /*#__PURE__*/createElement(useAsParent, additionalProps, content) : content;
}
;// CONCATENATED MODULE: ../../node_modules/@babel/runtime/helpers/esm/classCallCheck.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
;// CONCATENATED MODULE: ../../node_modules/@babel/runtime/helpers/esm/createClass.js

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
;// CONCATENATED MODULE: ../../node_modules/react-i18next/dist/es/i18nInstance.js
var i18nInstance;
function setI18n(instance) {
  i18nInstance = instance;
}
function i18nInstance_getI18n() {
  return i18nInstance;
}
;// CONCATENATED MODULE: ../../node_modules/react-i18next/dist/es/initReactI18next.js


var initReactI18next = {
  type: '3rdParty',
  init: function init(instance) {
    setDefaults(instance.options.react);
    setI18n(instance);
  }
};
;// CONCATENATED MODULE: ../../node_modules/react-i18next/dist/es/context.js



function context_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function context_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      context_ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      context_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}





var context_I18nContext = /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.createContext)();
var ReportNamespaces = function () {
  function ReportNamespaces() {
    _classCallCheck(this, ReportNamespaces);
    this.usedNamespaces = {};
  }
  _createClass(ReportNamespaces, [{
    key: "addUsedNamespaces",
    value: function addUsedNamespaces(namespaces) {
      var _this = this;
      namespaces.forEach(function (ns) {
        if (!_this.usedNamespaces[ns]) _this.usedNamespaces[ns] = true;
      });
    }
  }, {
    key: "getUsedNamespaces",
    value: function getUsedNamespaces() {
      return Object.keys(this.usedNamespaces);
    }
  }]);
  return ReportNamespaces;
}();
function context_composeInitialProps(ForComponent) {
  return function (ctx) {
    return new Promise(function (resolve) {
      var i18nInitialProps = getInitialProps();
      if (ForComponent.getInitialProps) {
        ForComponent.getInitialProps(ctx).then(function (componentsInitialProps) {
          resolve(context_objectSpread(context_objectSpread({}, componentsInitialProps), i18nInitialProps));
        });
      } else {
        resolve(i18nInitialProps);
      }
    });
  };
}
function getInitialProps() {
  var i18n = getI18n();
  var namespaces = i18n.reportNamespaces ? i18n.reportNamespaces.getUsedNamespaces() : [];
  var ret = {};
  var initialI18nStore = {};
  i18n.languages.forEach(function (l) {
    initialI18nStore[l] = {};
    namespaces.forEach(function (ns) {
      initialI18nStore[l][ns] = i18n.getResourceBundle(l, ns) || {};
    });
  });
  ret.initialI18nStore = initialI18nStore;
  ret.initialLanguage = i18n.language;
  return ret;
}
;// CONCATENATED MODULE: ../../node_modules/react-i18next/dist/es/Trans.js


var Trans_excluded = (/* unused pure expression or super */ null && (["children", "count", "parent", "i18nKey", "context", "tOptions", "values", "defaults", "components", "ns", "i18n", "t", "shouldUnescape"]));
function Trans_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function Trans_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      Trans_ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      Trans_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}




function Trans_Trans(_ref) {
  var children = _ref.children,
    count = _ref.count,
    parent = _ref.parent,
    i18nKey = _ref.i18nKey,
    context = _ref.context,
    _ref$tOptions = _ref.tOptions,
    tOptions = _ref$tOptions === void 0 ? {} : _ref$tOptions,
    values = _ref.values,
    defaults = _ref.defaults,
    components = _ref.components,
    ns = _ref.ns,
    i18nFromProps = _ref.i18n,
    tFromProps = _ref.t,
    shouldUnescape = _ref.shouldUnescape,
    additionalProps = _objectWithoutProperties(_ref, Trans_excluded);
  var _ref2 = useContext(I18nContext) || {},
    i18nFromContext = _ref2.i18n,
    defaultNSFromContext = _ref2.defaultNS;
  var i18n = i18nFromProps || i18nFromContext || getI18n();
  var t = tFromProps || i18n && i18n.t.bind(i18n);
  return TransWithoutContext(Trans_objectSpread({
    children: children,
    count: count,
    parent: parent,
    i18nKey: i18nKey,
    context: context,
    tOptions: tOptions,
    values: values,
    defaults: defaults,
    components: components,
    ns: ns || t && t.ns || defaultNSFromContext || i18n && i18n.options && i18n.options.defaultNS,
    i18n: i18n,
    t: tFromProps,
    shouldUnescape: shouldUnescape
  }, additionalProps));
}
;// CONCATENATED MODULE: ../../node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
;// CONCATENATED MODULE: ../../node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
;// CONCATENATED MODULE: ../../node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
;// CONCATENATED MODULE: ../../node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
;// CONCATENATED MODULE: ../../node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
;// CONCATENATED MODULE: ../../node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function slicedToArray_slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
;// CONCATENATED MODULE: ../../node_modules/react-i18next/dist/es/useTranslation.js



function useTranslation_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function useTranslation_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      useTranslation_ownKeys(Object(source), true).forEach(function (key) {
        defineProperty_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      useTranslation_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}



var usePrevious = function usePrevious(value, ignore) {
  var ref = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)();
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    ref.current = ignore ? ref.current : value;
  }, [value, ignore]);
  return ref.current;
};
function useTranslation_useTranslation(ns) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var i18nFromProps = props.i18n;
  var _ref = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useContext)(context_I18nContext) || {},
    i18nFromContext = _ref.i18n,
    defaultNSFromContext = _ref.defaultNS;
  var i18n = i18nFromProps || i18nFromContext || i18nInstance_getI18n();
  if (i18n && !i18n.reportNamespaces) i18n.reportNamespaces = new ReportNamespaces();
  if (!i18n) {
    utils_warnOnce('You will need to pass in an i18next instance by using initReactI18next');
    var notReadyT = function notReadyT(k, optsOrDefaultValue) {
      if (typeof optsOrDefaultValue === 'string') return optsOrDefaultValue;
      if (optsOrDefaultValue && typeof_typeof(optsOrDefaultValue) === 'object' && typeof optsOrDefaultValue.defaultValue === 'string') return optsOrDefaultValue.defaultValue;
      return Array.isArray(k) ? k[k.length - 1] : k;
    };
    var retNotReady = [notReadyT, {}, false];
    retNotReady.t = notReadyT;
    retNotReady.i18n = {};
    retNotReady.ready = false;
    return retNotReady;
  }
  if (i18n.options.react && i18n.options.react.wait !== undefined) utils_warnOnce('It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.');
  var i18nOptions = useTranslation_objectSpread(useTranslation_objectSpread(useTranslation_objectSpread({}, defaults_getDefaults()), i18n.options.react), props);
  var useSuspense = i18nOptions.useSuspense,
    keyPrefix = i18nOptions.keyPrefix;
  var namespaces = ns || defaultNSFromContext || i18n.options && i18n.options.defaultNS;
  namespaces = typeof namespaces === 'string' ? [namespaces] : namespaces || ['translation'];
  if (i18n.reportNamespaces.addUsedNamespaces) i18n.reportNamespaces.addUsedNamespaces(namespaces);
  var ready = (i18n.isInitialized || i18n.initializedStoreOnce) && namespaces.every(function (n) {
    return hasLoadedNamespace(n, i18n, i18nOptions);
  });
  function getT() {
    return i18n.getFixedT(null, i18nOptions.nsMode === 'fallback' ? namespaces : namespaces[0], keyPrefix);
  }
  var _useState = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(getT),
    _useState2 = slicedToArray_slicedToArray(_useState, 2),
    t = _useState2[0],
    setT = _useState2[1];
  var joinedNS = namespaces.join();
  var previousJoinedNS = usePrevious(joinedNS);
  var isMounted = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(true);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    var bindI18n = i18nOptions.bindI18n,
      bindI18nStore = i18nOptions.bindI18nStore;
    isMounted.current = true;
    if (!ready && !useSuspense) {
      loadNamespaces(i18n, namespaces, function () {
        if (isMounted.current) setT(getT);
      });
    }
    if (ready && previousJoinedNS && previousJoinedNS !== joinedNS && isMounted.current) {
      setT(getT);
    }
    function boundReset() {
      if (isMounted.current) setT(getT);
    }
    if (bindI18n && i18n) i18n.on(bindI18n, boundReset);
    if (bindI18nStore && i18n) i18n.store.on(bindI18nStore, boundReset);
    return function () {
      isMounted.current = false;
      if (bindI18n && i18n) bindI18n.split(' ').forEach(function (e) {
        return i18n.off(e, boundReset);
      });
      if (bindI18nStore && i18n) bindI18nStore.split(' ').forEach(function (e) {
        return i18n.store.off(e, boundReset);
      });
    };
  }, [i18n, joinedNS]);
  var isInitial = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(true);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    if (isMounted.current && !isInitial.current) {
      setT(getT);
    }
    isInitial.current = false;
  }, [i18n, keyPrefix]);
  var ret = [t, i18n, ready];
  ret.t = t;
  ret.i18n = i18n;
  ret.ready = ready;
  if (ready) return ret;
  if (!ready && !useSuspense) return ret;
  throw new Promise(function (resolve) {
    loadNamespaces(i18n, namespaces, function () {
      resolve();
    });
  });
}
;// CONCATENATED MODULE: ../../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
;// CONCATENATED MODULE: ../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js

function objectWithoutProperties_objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
;// CONCATENATED MODULE: ../../node_modules/react-i18next/dist/es/withTranslation.js



var withTranslation_excluded = ["forwardedRef"];
function withTranslation_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function withTranslation_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      withTranslation_ownKeys(Object(source), true).forEach(function (key) {
        defineProperty_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      withTranslation_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}



function withTranslation(ns) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function Extend(WrappedComponent) {
    function I18nextWithTranslation(_ref) {
      var forwardedRef = _ref.forwardedRef,
        rest = objectWithoutProperties_objectWithoutProperties(_ref, withTranslation_excluded);
      var _useTranslation = useTranslation_useTranslation(ns, withTranslation_objectSpread(withTranslation_objectSpread({}, rest), {}, {
          keyPrefix: options.keyPrefix
        })),
        _useTranslation2 = slicedToArray_slicedToArray(_useTranslation, 3),
        t = _useTranslation2[0],
        i18n = _useTranslation2[1],
        ready = _useTranslation2[2];
      var passDownProps = withTranslation_objectSpread(withTranslation_objectSpread({}, rest), {}, {
        t: t,
        i18n: i18n,
        tReady: ready
      });
      if (options.withRef && forwardedRef) {
        passDownProps.ref = forwardedRef;
      } else if (!options.withRef && forwardedRef) {
        passDownProps.forwardedRef = forwardedRef;
      }
      return /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.createElement)(WrappedComponent, passDownProps);
    }
    I18nextWithTranslation.displayName = "withI18nextTranslation(".concat(utils_getDisplayName(WrappedComponent), ")");
    I18nextWithTranslation.WrappedComponent = WrappedComponent;
    var forwardRef = function forwardRef(props, ref) {
      return /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.createElement)(I18nextWithTranslation, Object.assign({}, props, {
        forwardedRef: ref
      }));
    };
    return options.withRef ? /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef)(forwardRef) : I18nextWithTranslation;
  };
}
;// CONCATENATED MODULE: ../../node_modules/react-i18next/dist/es/Translation.js


var Translation_excluded = (/* unused pure expression or super */ null && (["ns", "children"]));

function Translation(props) {
  var ns = props.ns,
    children = props.children,
    options = _objectWithoutProperties(props, Translation_excluded);
  var _useTranslation = useTranslation(ns, options),
    _useTranslation2 = _slicedToArray(_useTranslation, 3),
    t = _useTranslation2[0],
    i18n = _useTranslation2[1],
    ready = _useTranslation2[2];
  return children(t, {
    i18n: i18n,
    lng: i18n.language
  }, ready);
}
;// CONCATENATED MODULE: ../../node_modules/react-i18next/dist/es/I18nextProvider.js


function I18nextProvider(_ref) {
  var i18n = _ref.i18n,
    defaultNS = _ref.defaultNS,
    children = _ref.children;
  var value = useMemo(function () {
    return {
      i18n: i18n,
      defaultNS: defaultNS
    };
  }, [i18n, defaultNS]);
  return /*#__PURE__*/createElement(I18nContext.Provider, {
    value: value
  }, children);
}
;// CONCATENATED MODULE: ../../node_modules/react-i18next/dist/es/useSSR.js


function useSSR_useSSR(initialI18nStore, initialLanguage) {
  var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var i18nFromProps = props.i18n;
  var _ref = useContext(I18nContext) || {},
    i18nFromContext = _ref.i18n;
  var i18n = i18nFromProps || i18nFromContext || getI18n();
  if (i18n.options && i18n.options.isClone) return;
  if (initialI18nStore && !i18n.initializedStoreOnce) {
    i18n.services.resourceStore.data = initialI18nStore;
    i18n.options.ns = Object.values(initialI18nStore).reduce(function (mem, lngResources) {
      Object.keys(lngResources).forEach(function (ns) {
        if (mem.indexOf(ns) < 0) mem.push(ns);
      });
      return mem;
    }, i18n.options.ns);
    i18n.initializedStoreOnce = true;
    i18n.isInitialized = true;
  }
  if (initialLanguage && !i18n.initializedLanguageOnce) {
    i18n.changeLanguage(initialLanguage);
    i18n.initializedLanguageOnce = true;
  }
}
;// CONCATENATED MODULE: ../../node_modules/react-i18next/dist/es/withSSR.js


var withSSR_excluded = (/* unused pure expression or super */ null && (["initialI18nStore", "initialLanguage"]));
function withSSR_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function withSSR_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      withSSR_ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      withSSR_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}




function withSSR() {
  return function Extend(WrappedComponent) {
    function I18nextWithSSR(_ref) {
      var initialI18nStore = _ref.initialI18nStore,
        initialLanguage = _ref.initialLanguage,
        rest = _objectWithoutProperties(_ref, withSSR_excluded);
      useSSR(initialI18nStore, initialLanguage);
      return /*#__PURE__*/createElement(WrappedComponent, withSSR_objectSpread({}, rest));
    }
    I18nextWithSSR.getInitialProps = composeInitialProps(WrappedComponent);
    I18nextWithSSR.displayName = "withI18nextSSR(".concat(getDisplayName(WrappedComponent), ")");
    I18nextWithSSR.WrappedComponent = WrappedComponent;
    return I18nextWithSSR;
  };
}
;// CONCATENATED MODULE: ../../node_modules/react-i18next/dist/es/index.js









var date = function date() {
  return '';
};
var time = function time() {
  return '';
};
var number = function number() {
  return '';
};
var es_select = function select() {
  return '';
};
var plural = function plural() {
  return '';
};
var selectOrdinal = function selectOrdinal() {
  return '';
};
// EXTERNAL MODULE: ../../../node_modules/classnames/index.js
var classnames = __webpack_require__(650);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// CONCATENATED MODULE: ./src/FormItem/Input/index.tsx




const Input = props => {
  var _ref;
  // 获取 `FormContext.Provider` 提供提供的 `value` 值
  const context = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useContext)(FormContext);
  const {
    name,
    size,
    className,
    prefixContent,
    suffixContent,
    placeholder,
    style,
    disabled,
    defaultValue,
    onClickOK,
    onFocusOK,
    onBlurOK,
    setFormItemValue
  } = props;

  // 确保value不会是undefined，如果defaultValue或formData中相应的值是undefined，则将其设为空字符串
  const [value, setValue] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)((_ref = defaultValue !== null && defaultValue !== void 0 ? defaultValue : context.formData[context.name]) !== null && _ref !== void 0 ? _ref : '');
  const cls = classnames_default()({
    "input-group": true,
    ["input-group-".concat(size)]: size,
    [className]: className
  });
  const handleClick = function (e) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    onClickOK && onClickOK(e, ...args);
  };
  const handleFocus = function (e) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }
    onFocusOK && onFocusOK(e, ...args);
  };
  const handleBlur = function (e) {
    // 为了让父组件能拿到值，在点击确定按钮的时候，让Form调用每个表单项的检验方法
    setFormItemValue && setFormItemValue(e.target.value);
    context.checkValidate(e.target.value);
    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }
    onBlurOK && onBlurOK(e, ...args);
  };
  const handleChange = function (e) {
    setValue(e.target.value);
    setFormItemValue && setFormItemValue(e.target.value);
    // 根据 name 属性，更新 Form 中的数据源
    context.handleChange(context.name, e.target.value);
  };
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    setValue(context.formData[context.name] || "");
  }, [context.formData[context.name]]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (defaultValue) {
      // 为了一上来就提交表单，这边有默认值也要给 父组件设置
      setValue(defaultValue);
      setFormItemValue && setFormItemValue(defaultValue);
      // 这边不能直接用 context.handleChange(context.name, defaultValue)来赋默认值，会被置为空，并且失去 提交和重置功能
      context.formData[context.name] = defaultValue;
    }
  }, [defaultValue]);
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: cls,
    style: {
      flex: 1
    }
  }, prefixContent && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
    className: "input-group-text",
    id: "basic-addon1"
  }, prefixContent), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("input", {
    name: name,
    value: value,
    disabled: disabled,
    style: style,
    placeholder: placeholder,
    onChange: handleChange,
    onBlur: e => handleBlur(e, "hello1", 5561),
    onFocus: e => handleFocus(e, "hello1", 5561),
    onClick: e => handleClick(e, "hello", 556),
    type: "text",
    className: "form-control",
    "aria-label": "Username",
    "aria-describedby": "basic-addon1"
  }), suffixContent && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
    className: "input-group-text",
    id: "basic-addon2"
  }, suffixContent)));
};
Input.displayName = "Input";
/* harmony default export */ const FormItem_Input = (withTranslation()(Input));
;// CONCATENATED MODULE: ./src/FormItem/Select/index.tsx





const Select = props => {
  const {
    defaultValue,
    options,
    placeholder,
    size,
    className,
    disabled,
    onChangeOK,
    setFormItemValue
  } = props;

  // 获取 `FormContext.Provider` 提供提供的 `value` 值
  const context = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useContext)(FormContext);
  const [value, setValue] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(defaultValue);
  const cls = classnames_default()({
    ["form-select form-select-".concat(size)]: true,
    [className]: className
  });
  const handleSelect = e => {
    const selectedIndex = e.target.selectedIndex;
    const selectedOption = options[selectedIndex];
    setValue(selectedOption);
    onChangeOK && onChangeOK(selectedOption);
    context.handleChange(context.name, selectedOption);
    context.checkValidate(selectedOption); // 选中的时候，要让他做校验
    setFormItemValue && setFormItemValue(selectedOption);
  };
  const handleBlur = () => {
    console.log(5522, value.label);
    setTimeout(() => {
      context.checkValidate(value.label);
    }, 150);
  };
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    // 这边用判断来，如果表单的数据 context.formData[context.name as string]没有值（""）
    // 就直接给value设置为{ label: "", value: "" }，不能直接设置为""，这样子原生select选中的值会保持原来选中的
    if (!context.formData[context.name]) {
      setValue({
        label: "",
        value: ""
      });
    }
  }, [context.formData[context.name]]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (defaultValue !== null && defaultValue !== void 0 && defaultValue.value) {
      setValue(defaultValue); // 直接在判断有默认值的地方就给表单赋值，就不会出现数据闪动的现象
      // 这边不能直接用 context.handleChange(context.name, defaultValue)来赋默认值，会被置为空，并且失去 提交和重置功能
      context.formData[context.name] = defaultValue; // 让 Form里面对应的数据项有值
      setFormItemValue && setFormItemValue(defaultValue);
    } else {
      // js默认的选择框好像只能这样写，不能写成 setValue=({})
      // 只能让它重置为选中第一个选项。。
      setValue({
        label: "",
        value: ""
      });
    }
  }, [defaultValue]);
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("select", {
    style: {
      flex: 1
    },
    value: value === null || value === void 0 ? void 0 : value.value,
    onBlur: () => handleBlur(),
    onChange: e => handleSelect(e),
    className: cls,
    "aria-label": ".form-select-lg example",
    disabled: disabled
  }, options.map(item => /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("option", {
    disabled: item.disabled,
    key: item.value,
    value: item.value
  }, item.label))));
};
/* harmony default export */ const FormItem_Select = (withTranslation()(Select));
// EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(591);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(740);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(128);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(855);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(51);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(656);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/FormItem/Textarea/index.css
var Textarea = __webpack_require__(5);
;// CONCATENATED MODULE: ./src/FormItem/Textarea/index.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(Textarea/* default */.A, options);




       /* harmony default export */ const FormItem_Textarea = (Textarea/* default */.A && Textarea/* default */.A.locals ? Textarea/* default */.A.locals : undefined);

;// CONCATENATED MODULE: ./src/FormItem/Textarea/index.tsx





const TextArea = props => {
  var _ref;
  const {
    label,
    placeholder,
    disabled,
    defaultValue,
    onChangeOK,
    setFormItemValue
  } = props;

  // 获取 `FormContext.Provider` 提供提供的 `value` 值
  const context = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useContext)(FormContext);
  const [value, setValue] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)((_ref = defaultValue !== null && defaultValue !== void 0 ? defaultValue : context.formData[context.name]) !== null && _ref !== void 0 ? _ref : '');
  const handleChange = function (e) {
    setValue(e.target.value); // 手动将表单的value值赋值
    setFormItemValue && setFormItemValue(e.target.value);
    // 根据 name 属性，更新 Form 中的数据源
    context.formData[context.name] = e.target.value;
    // context.handleChange(context.name, e.target.value) // 这边不能直接用 handleChange来赋值，会出现赋值错误的情况
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    onChangeOK && onChangeOK(e, ...args);
  };
  const handleBlur = e => {
    setFormItemValue && setFormItemValue(e.target.value);
    context.checkValidate(e.target.value); // 失焦的时候也要立马让父组件执行 检验方法
  };
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    setValue(context.formData[context.name] || "");
  }, [context.formData[context.name]]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (defaultValue) {
      setValue(defaultValue);
      setFormItemValue && setFormItemValue(defaultValue);
      // 这边不能直接用 context.handleChange(context.name, defaultValue)来赋默认值，会被置为空，并且失去 提交和重置功能
      context.formData[context.name] = defaultValue;
    }
  }, [defaultValue]);
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "textarea-warpper"
  }, label && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
    className: "input-group-text"
  }, label), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("textarea", {
    value: value,
    disabled: disabled,
    onBlur: e => handleBlur(e),
    onChange: e => handleChange(e),
    placeholder: placeholder,
    className: "form-control",
    "aria-label": "With textarea"
  })));
};
/* harmony default export */ const src_FormItem_Textarea = (withTranslation()(TextArea));
// EXTERNAL MODULE: ../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/FormItem/LiveSearchSelect/index.css
var LiveSearchSelect = __webpack_require__(989);
;// CONCATENATED MODULE: ./src/FormItem/LiveSearchSelect/index.css

      
      
      
      
      
      
      
      
      

var LiveSearchSelect_options = {};

LiveSearchSelect_options.styleTagTransform = (styleTagTransform_default());
LiveSearchSelect_options.setAttributes = (setAttributesWithoutAttributes_default());

      LiveSearchSelect_options.insert = insertBySelector_default().bind(null, "head");
    
LiveSearchSelect_options.domAPI = (styleDomAPI_default());
LiveSearchSelect_options.insertStyleElement = (insertStyleElement_default());

var LiveSearchSelect_update = injectStylesIntoStyleTag_default()(LiveSearchSelect/* default */.A, LiveSearchSelect_options);




       /* harmony default export */ const FormItem_LiveSearchSelect = (LiveSearchSelect/* default */.A && LiveSearchSelect/* default */.A.locals ? LiveSearchSelect/* default */.A.locals : undefined);

;// CONCATENATED MODULE: ./src/FormItem/LiveSearchSelect/index.tsx






const LiveSearchSelect_LiveSearchSelect = props => {
  const {
    defaultValue,
    options,
    size,
    className,
    disabled,
    onSelectOK,
    setFormItemValue
  } = props;
  const context = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useContext)(FormContext);
  const selectedValeRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)("");
  // const [value, setValue] = useState(""); // 给个 || ""就会让 input为受控状态，不能让它默认是 defaultValue，有可能不存在。。
  // 注意！！！如果发现状态没有按预知的方向变化的话，就考虑用 xxxRef来替代。。。
  // prevSelectedValueRef.current 用来记录上一次正确选择的数据
  // 防止用户输入不正确，搜索不到对应数据，出现空的情况。先保存一下上次的数据，然后在出现意外的时候复制给要展示的数据
  const prevSelectedValueRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(""); // 不用 defaultValue的原因同上
  const searchValueRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(defaultValue || "");
  const [showOptions, setShowOptions] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false);
  const [filterdOptions, setFilterdOptions] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(options);
  const cls = classnames_default()({
    ["live-search-select-wrapper form-select-".concat(size, " adou-live-search-select")]: true,
    [className]: className
  });
  const handleSelect = (e, option) => {
    // setValue(option.label);
    selectedValeRef.current = option.label;
    prevSelectedValueRef.current = option.label;
    onSelectOK && onSelectOK(option);
    context.handleChange(context.name, option);
    console.log("option = ", option);
    setFormItemValue && setFormItemValue(option);
  };
  const filterOptions = value => {
    setFilterdOptions(options.filter(option => option.label.includes(value)));
  };
  const handleInputBlur = e => {
    // 因为是先执行 Blur回调，必须要让它在 select之后再进行校验，所以要用定时器异步一下
    setTimeout(() => {
      context.checkValidate(selectedValeRef.current);
    }, 150);
  };
  const handleInputClick = e => {
    // setValue("");
    selectedValeRef.current = "";
    searchValueRef.current = "";
    setShowOptions(true);
    // 这个时候也要重新过滤数据
    filterOptions(searchValueRef.current);
  };
  const handleInputChange = e => {
    let value = e.target.value;
    // setValue(value);
    selectedValeRef.current = value;
    searchValueRef.current = value;
    // 输入改变的时候重新过滤
    filterOptions(searchValueRef.current);
  };

  // 选项的ref数组--巧妙
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const optionItemRefs = options.map(() => (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null));

  // input输入框的ref
  const inputRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    window.addEventListener("click", e => {
      if (e.target === inputRef.current) {
        return setShowOptions(true);
      } else if (optionItemRefs.some(ref => ref.current === e.target)) {} else {
        // 点击的是除了输入框和选项
        // setValue(prevSelectedValueRef.current)
        selectedValeRef.current = prevSelectedValueRef.current;
      }
      setShowOptions(false);

      /* else {
         console.log("点击到别的地", prevSelectedValueRef.current);
         setShowOptions(false);
      } */
      // 搜索的就不做多选了
      /* if (!multiple) {
          return setShowOptions(false);
      } */
      // --巧妙
      /* if (!optionItemRefs.some(ref => ref.current === e.target)) {
          setShowOptions(false);
      } */
    });
  }, []);

  // 让搜索框展示默认值
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    // 如果有默认值，让实时搜索框的值为默认值（没有做判断搜索列表是否存在该值）
    if (defaultValue !== null && defaultValue !== void 0 && defaultValue.value) {
      var _filterdOptions$find;
      // 用 ref的话就不用加 定时器，用 state的话就要加定时器。。。（0秒即可）
      let label = (_filterdOptions$find = filterdOptions.find(option => option.label === defaultValue.label)) === null || _filterdOptions$find === void 0 ? void 0 : _filterdOptions$find.label;
      context.formData[context.name] = defaultValue; // 让 Form里面对应的数据项有值
      // 保存默认值，防止用户输入不正确
      prevSelectedValueRef.current = label;
      label && (selectedValeRef.current = defaultValue.label);
      // 将默认值的label赋值给 FormItemValue，为了让校验通过
      setFormItemValue && setFormItemValue(defaultValue.label);
    } else {
      // 如果没有默认值，也要记得把 prevSelectedValueRef置空
      // setValue("");
      selectedValeRef.current = "";
      prevSelectedValueRef.current = ""; // 记得把 prevSelectedValueRef置空
    }
  }, [defaultValue]);

  // Form的formData发生变化，表单数据也要对应发生变化
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (!context.formData[context.name]) {
      // setValue("");
      selectedValeRef.current = "";
      prevSelectedValueRef.current = "";
    }
  }, [context.formData[context.name]]);
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: cls
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("input", {
    value: selectedValeRef.current,
    onBlur: e => handleInputBlur(e),
    onChange: e => handleInputChange(e),
    onClick: handleInputClick,
    ref: inputRef,
    disabled: disabled,
    type: "text",
    className: "form-control",
    "aria-label": "Username",
    "aria-describedby": "basic-addon1"
  }), showOptions && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "option-wrapper"
  }, filterdOptions.length ? filterdOptions.map((option, index) => {
    // --巧妙
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
      ref: optionItemRefs[index],
      key: index,
      onClick: e => handleSelect(e, option),
      className: "option-item"
    }, option.label);
  }) : /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "option-item"
  }, "No match content")));
};
/* harmony default export */ const src_FormItem_LiveSearchSelect = (withTranslation()(LiveSearchSelect_LiveSearchSelect));
// EXTERNAL MODULE: ../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/FormItem/MultipleSelect/index.css
var MultipleSelect = __webpack_require__(675);
;// CONCATENATED MODULE: ./src/FormItem/MultipleSelect/index.css

      
      
      
      
      
      
      
      
      

var MultipleSelect_options = {};

MultipleSelect_options.styleTagTransform = (styleTagTransform_default());
MultipleSelect_options.setAttributes = (setAttributesWithoutAttributes_default());

      MultipleSelect_options.insert = insertBySelector_default().bind(null, "head");
    
MultipleSelect_options.domAPI = (styleDomAPI_default());
MultipleSelect_options.insertStyleElement = (insertStyleElement_default());

var MultipleSelect_update = injectStylesIntoStyleTag_default()(MultipleSelect/* default */.A, MultipleSelect_options);




       /* harmony default export */ const FormItem_MultipleSelect = (MultipleSelect/* default */.A && MultipleSelect/* default */.A.locals ? MultipleSelect/* default */.A.locals : undefined);

;// CONCATENATED MODULE: ./src/FormItem/MultipleSelect/index.tsx






const MultipleSelect_MultipleSelect = props => {
  const {
    defaultValue,
    options,
    size,
    className,
    disabled,
    onMultipleSelectChangeOK,
    setFormItemValue
  } = props;

  // 获取 `FormContext.Provider` 提供提供的 `value` 值
  const context = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useContext)(FormContext);

  // const [value, setValue] = useState(defaultValue || ""); // 给个 || ""就会让 input为受苦状态
  // 注意！！！如果发现状态没有按预知的方向变化的话，就考虑用 xxxRef来替代。。。
  // const prevSelectedValueRef = useRef<string>(defaultValue || "");
  const searchValueRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(defaultValue || "");
  const [showOptions, setShowOptions] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false);
  const [filterdOptions, setFilterdOptions] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(options); // 多选主要是靠这个来展示哪个选项被打钩
  // 是否展示选中的选项
  const [selectedOptions, setSelectedOptions] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)([]); // 选中的选项展示在 input框中
  const [showSelectedOptions, setShowSelectedOptions] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false);
  const cls = classnames_default()({
    ["form-select form-select-".concat(size, " mb-3")]: true,
    [className]: className
  });
  const filterdOption = option => {
    filterdOptions.forEach(item => {
      if (item.value === option.value) {
        item.selected = false;
      }
    });
    setFilterdOptions(filterdOptions); // 这句竟然加和不加都可以。。。
  };
  const handleSelect = (e, option) => {
    // prevSelectedValueRef.current = option.label;
    option.selected = true;
    let hasSelected = selectedOptions.some(item => item.label === option.label);
    setSelectedOptions(hasSelected ? selectedOptions.filter(item => item.label !== option.label) : [...selectedOptions, {
      label: option.label,
      value: option.value
    }]);
    hasSelected && filterdOption(option);
    setShowSelectedOptions(true);
    // 这里不能直接用 selectedOptions这个状态，会有延迟
    // 要用原来所有的状态，去过滤掉没选上的，再传递给父组件
    // onMultipleSelectChangeOK && onMultipleSelectChangeOK(selectedOptions); 
    const selectedList = filterdOptions.filter(item => item.selected);
    onMultipleSelectChangeOK && onMultipleSelectChangeOK(selectedList);
    context.handleChange(context.name, selectedList);
    setFormItemValue && setFormItemValue(selectedList);
  };
  const handleInputClick = e => {
    searchValueRef.current = "";
    setShowOptions(true);
    // 这个时候也要重新过滤数据
  };
  const handleInputChange = e => {
    let value = e.target.value;
    searchValueRef.current = value;
    // 输入改变的时候重新过滤
  };

  // 选项的ref数组--巧妙
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const optionItemRefs = options.map(() => (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null));

  // input输入框的ref
  const inputRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    window.addEventListener("click", e => {
      if (e.target === inputRef.current) {
        return setShowOptions(true);
      }
      // --巧妙
      // 点的不是 input框，也不是 选项，则将 active类名去掉，并且隐藏 选项
      if (!optionItemRefs.some(ref => ref.current === e.target)) {
        return setShowOptions(false);
      }
    });
  }, []);

  // 让多选框默认展示父组件传递过来的值
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    let arr = [];
    if (defaultValue !== null && defaultValue !== void 0 && defaultValue.length) {
      console.log("defaultValue = ", defaultValue);
      context.formData[context.name] = defaultValue; // 让 Form里面对应的数据项有值
      setFormItemValue && setFormItemValue(defaultValue);
      defaultValue === null || defaultValue === void 0 || defaultValue.map(item => {
        options.some(option => {
          option.value === item.value && arr.push(item);
          return false;
        });
        return false;
      });
      if (arr !== null && arr !== void 0 && arr.length) {
        setSelectedOptions(arr);
        setShowSelectedOptions(true);
        setFilterdOptions(preArr => {
          let filterdOptions = [];
          preArr.forEach(item => {
            filterdOptions.push({
              ...item,
              selected: arr.some(i => i.value === item.value)
            });
          });
          return filterdOptions;
        });
      }
    } else {
      setSelectedOptions([]);
      setFilterdOptions(options === null || options === void 0 ? void 0 : options.map(item => {
        item.selected = false;
        return item;
      }));
    }
  }, [defaultValue]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    // 把option后面打钩的选项置空（option后面都不打钩，即 selected置为false）
    if (!context.formData[context.name]) {
      console.log("置空");
      setFilterdOptions(preArr => {
        return preArr === null || preArr === void 0 ? void 0 : preArr.map(item => {
          item.selected = false;
          return item;
        });
      });
    }
    // 把展示在input的选项置空，即没有选中的选项
    setSelectedOptions(context.formData[context.name] || []);
  }, [context.formData[context.name]]);

  // 计算每个项的宽度和间距
  const itemWidth = 100 / options.length;
  const gapWidth = 1; // 设置间距大小，单位为像素

  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "multiple-select-wrapper"
  }, showSelectedOptions && (selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.map((option, index) => {
    // index * 80 + 10 这边的10 要与第一个距离左边的距离相等！！！不能不加，也不能加太多，否则就会与第一个太靠近或者与第一个距离太远！！！
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
      className: "selected-option",
      key: option.value,
      style: {
        left: "".concat(index * (itemWidth + gapWidth), "%"),
        // 考虑到间距
        width: "".concat(itemWidth, "%"),
        textAlign: 'center',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, option.label);
  })), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("input", {
    readOnly: true,
    onChange: e => handleInputChange(e),
    onClick: handleInputClick,
    ref: inputRef,
    disabled: disabled,
    type: "text",
    className: "form-control",
    "aria-label": "Username",
    "aria-describedby": "basic-addon1"
  }), showOptions && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "option-wrapper multiple-select-option-wrapper"
  }, filterdOptions === null || filterdOptions === void 0 ? void 0 : filterdOptions.map((option, index) => {
    // --巧妙
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
      ref: optionItemRefs[index],
      key: index,
      onClick: e => handleSelect(e, option),
      className: "option-item ".concat(option.selected && "multiple-select-active")
    }, option.label);
  })));
};
/* harmony default export */ const src_FormItem_MultipleSelect = (withTranslation()(MultipleSelect_MultipleSelect));
;// CONCATENATED MODULE: ./src/FormItem/Radio/index.tsx




const Radio = props => {
  const {
    className,
    inline = true,
    options,
    defaultValue,
    onChangeOK,
    setFormItemValue
  } = props;

  // 获取 `FormContext.Provider` 提供提供的 `value` 值
  const context = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useContext)(FormContext);

  // 确保value不会是undefined，如果defaultValue或formData中相应的值是undefined，则将其设为空字符串

  const [optionsList, setOptionsList] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(options || []);
  const cls = classnames_default()({
    "form-check-input": true,
    [className]: className
  });
  const handleChange = item => {
    context.formData[context.name] = item;
    setOptionsList(preArr => {
      return preArr.map(option => {
        return {
          ...option,
          checked: option.value === item.value
        };
      });
    });
    setFormItemValue && setFormItemValue(item);
    onChangeOK && onChangeOK(item);
  };
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (defaultValue !== null && defaultValue !== void 0 && defaultValue.value) {
      context.formData[context.name] = defaultValue;
      setFormItemValue && setFormItemValue(defaultValue);
      setOptionsList(preArr => {
        return preArr.map(option => {
          if (defaultValue.value === option.value) {
            option.checked = true;
          }
          return option;
        });
      });
    }
  }, []);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (!context.formData[context.name]) {
      setOptionsList(preArr => {
        return preArr.map(option => {
          option.checked = false;
          return option;
        });
      });
    }
  }, [context.formData[context.name]]);
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "radio-wrapper ".concat(inline && "d-flex")
  }, optionsList === null || optionsList === void 0 ? void 0 : optionsList.map(item => {
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
      key: item.value,
      className: "form-check",
      style: {
        marginRight: "20px"
      }
    }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("input", {
      disabled: item.disabled,
      className: cls,
      type: "radio",
      name: item.name,
      id: item.id,
      checked: item.checked,
      onChange: () => handleChange(item),
      value: item.value
    }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("label", {
      className: "form-check-label",
      htmlFor: item.id
    }, item.label || "Default Radio"));
  })));
};
/* harmony default export */ const FormItem_Radio = (withTranslation()(Radio));
;// CONCATENATED MODULE: ./src/FormItem/Checkbox/index.tsx




const Checkbox = props => {
  // 获取 `FormContext.Provider` 提供提供的 `value` 值
  const context = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useContext)(FormContext);
  const {
    className,
    inline = true,
    options,
    defaultValue,
    wrap = true,
    onChangeOK,
    setFormItemValue
  } = props;
  const [optionsList, setOptionsList] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(options || []);
  const cls = classnames_default()({
    "form-check-input": true,
    [className]: className
  });
  const handleChange = item => {
    const updatedChheckboxData = optionsList === null || optionsList === void 0 ? void 0 : optionsList.map(option => {
      if (option.value === item.value) {
        return {
          ...option,
          checked: !option.checked
        };
        // 下面这样写也可以
        /* item.checked = !item.checked;
        return item; */
      } else {
        return option;
      }
    });
    context.formData[context.name] = updatedChheckboxData.filter(item => item.checked);
    setOptionsList(updatedChheckboxData);
    onChangeOK && onChangeOK(updatedChheckboxData === null || updatedChheckboxData === void 0 ? void 0 : updatedChheckboxData.filter(v => v.checked));
    setFormItemValue && setFormItemValue(updatedChheckboxData === null || updatedChheckboxData === void 0 ? void 0 : updatedChheckboxData.filter(v => v.checked));
  };
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (defaultValue.length) {
      context.formData[context.name] = defaultValue;
      setFormItemValue && setFormItemValue(defaultValue);
      setOptionsList(preArr => {
        return preArr.map(option => {
          if (defaultValue.some(item => item.value === option.value)) {
            option.checked = true;
          }
          return option;
        });
      });
    }
  }, []);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (!context.formData[context.name]) {
      setOptionsList(preArr => {
        return preArr.map(option => {
          option.checked = false;
          return option;
        });
      });
    }
  }, [context.formData[context.name]]);
  const divClasses = classnames_default()({
    'checkbox-wrapper': true,
    'd-flex': inline,
    "flex-wrap": wrap
  });
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: divClasses
  }, optionsList === null || optionsList === void 0 ? void 0 : optionsList.map(item => {
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
      key: item.value,
      className: "form-check",
      style: {
        textAlign: "left",
        marginRight: "20px"
      }
    }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("input", {
      className: cls,
      type: "checkbox",
      name: item.name,
      id: item.id,
      checked: item.checked,
      onChange: () => handleChange(item),
      value: item.value
    }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("label", {
      className: "form-check-label",
      htmlFor: item.id
    }, item.label || "Default Checkbox"));
  })));
};
/* harmony default export */ const FormItem_Checkbox = (withTranslation()(Checkbox));
;// CONCATENATED MODULE: ./src/FormItem/index.tsx









const FormItem = props => {
  // 获取 `FormContext.Provider` 提供提供的 `value` 值
  const context = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useContext)(FormContext);
  const {
    children,
    width,
    name,
    inline = true,
    labelAlignY = "center",
    label,
    labelWidth = 100,
    validate,
    rule,
    maxLabelLength,
    labelAlignX = "right"
  } = props;
  const [error, setError] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)("");

  // 每个字体的width
  const eachWordWidth = 24;

  // 用于失焦的时候来验证表单
  const checkValidate = value => {
    if (validate) {
      var _rule$;
      context.handleValidate(false); // 一开始进去先置为错误的，表单验证不通过
      if (rule[0].required && !value) {
        return setError(rule[0].message);
      }
      if ((_rule$ = rule[1]) !== null && _rule$ !== void 0 && _rule$.type) {
        const type = rule[1].type;
        switch (type) {
          case "email":
            if (!/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value)) {
              return setError(rule[1].message);
            }
            break;
          case "number":
            if (!/^[0-9]*$/.test(value)) {
              return setError(rule[1].message);
            }
        }
      }
      context.handleValidate(true); // 最后可以执行到这步的时候，说明 表单验证通过
      setError("");
    }
  };
  const renderContent = () => {
    const enhancedChildren = external_root_React_commonjs2_react_commonjs_react_amd_react_default().Children.map(props.children, child => {
      return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().cloneElement(child, {
        setFormItemValue: handleSetFormItemValue // 把子元素的值设置到表单中
      });
    });

    // 子元素检查
    if ( /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().isValidElement(children)) {
      return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
        style: {
          width: width
        },
        className: "form-item mb-3 ".concat(inline && "d-flex align-items-".concat(labelAlignY))
      }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
        className: "form-item-label",
        style: {
          width: (maxLabelLength * eachWordWidth > labelWidth ? labelWidth : maxLabelLength * eachWordWidth) + "px",
          textAlign: labelAlignX
        }
      }, label, ":"), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
        style: {
          flex: 1,
          marginLeft: "15px"
        }
      }, enhancedChildren)), error && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
        className: "form-item-error text-danger small",
        style: {
          textAlign: "left",
          margin: "-15px 0 5px ".concat(label.length * labelWidth + "px")
        }
      }, error));
    }
    return null;
  };

  // Form自动校验逻辑
  const newFormItemValue = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)();
  const handleSetFormItemValue = value => {
    newFormItemValue.current = value;
  };
  const handleValidate = formItemValue => {
    if (validate) {
      var _rule$2;
      name === "multiple" && console.log("进来handleValidate = ", formItemValue);
      let valid = true;
      if (rule[0].required && !formItemValue) {
        setError(rule[0].message);
        valid = false;
        return valid;
      }
      if ((_rule$2 = rule[1]) !== null && _rule$2 !== void 0 && _rule$2.type) {
        const type = rule[1].type;
        switch (type) {
          case "email":
            if (!/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(formItemValue)) {
              setError(rule[1].message);
              valid = false;
            }
            break;
          case "number":
            if (!/^[0-9]*$/.test(formItemValue)) {
              setError(rule[1].message);
              valid = false;
            }
        }
      }
      if (valid) {
        setError("");
      }
      return valid;
    }
  };
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    context.registerFormItem({
      name,
      validate,
      handleValidate: () => handleValidate(newFormItemValue.current)
    });
    // 组件卸载时可能需要一个注销逻辑
  }, []);

  // 复写 FormContext.Provider，增加 name 参数的传递
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(FormContext.Provider, {
    value: {
      ...context,
      checkValidate,
      name
    }
  }, renderContent());
};
FormItem.displayName = 'formItem';
FormItem.Input = FormItem_Input;
FormItem.Select = FormItem_Select;
FormItem.TextArea = src_FormItem_Textarea;
FormItem.LiveSearchSelect = src_FormItem_LiveSearchSelect;
FormItem.MultipleSelect = src_FormItem_MultipleSelect;
FormItem.Radio = FormItem_Radio;
FormItem.Checkbox = FormItem_Checkbox;
/* harmony default export */ const src_FormItem = (FormItem);
;// CONCATENATED MODULE: ./src/index.tsx




// 基于 FormContext 下发表单数据源以及修改方法
const FormContext = /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.createContext)({});
const Form = /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef)((props, formRef) => {
  const {
    labelAlignX,
    name,
    labelWidth
  } = props;
  console.log("labelAlignX = ", props.labelAlignX);
  console.log("name = ", name);

  // 统一管理表单数据源
  const [formData, setFormData] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)({});
  const [validation, setValidation] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(true);

  // 对外暴露的API
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useImperativeHandle)(formRef, () => ({
    // 表单提交
    submitForm: callback => {
      callback && callback({
        ...formData
      });
    },
    validate: callback => {
      let isValid = true;
      formItems.forEach(item => {
        const validationResult = item.handleValidate();
        console.log("validationResult = ", validationResult);
        if (!validationResult && item.validate) isValid = false; // 假设validate方法返回false表示验证失败
      });
      callback && callback(isValid);
    },
    // 表单重置
    resetForm: () => {
      let data = {
        ...formData
      };
      Object.keys(data).forEach(item => {
        data[item] = "";
      });
      setFormData(data);
    }
  }));

  // Form表单内的表单项修改统一的赋值方法
  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // 提交表单判断是否通过验证
  const handleValidate = validate => {
    setValidation(validate);
  };

  // 添加一个状态来保存FormItem的引用或校验函数列表
  const [formItems, setFormItems] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)([]);
  const registerFormItem = item => {
    setFormItems(prevArr => [...prevArr, item]);
  };

  // 计算出最长的label
  let maxLabelLength = 0;
  props.children.forEach(item => {
    if (maxLabelLength < item.props.label.length) {
      maxLabelLength = item.props.label.length;
    }
  });
  const renderContent = () => {
    const renderChildren = [];

    // 这个方法可行
    external_root_React_commonjs2_react_commonjs_react_amd_react_default().Children.map(props.children, child => {
      // child.type 子元素自身（FormItem），检查其静态属性 displayName 是否满足条件
      if (child.type.displayName === 'formItem') {
        const enhancedChildren = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().cloneElement(child, {
          maxLabelLength,
          labelAlignX,
          labelWidth,
          key: child.props.name // 给每个组件一个 key
        });
        renderChildren.push(enhancedChildren);
      }
    });

    // 这边不能直接用 props.children.forEach，会报错：props.children.forEach is not a function
    // 具体原因不清楚，但是可以用上面那个的方法
    // props.children?.forEach((item: any) => {
    //   if (item.type.displayName === "formItem") {
    //     renderChildren.push(item)
    //   }
    // })
    return renderChildren;
  };

  // 传入数据源以及数据源的修改方法，子孙后代都可读取 value 中的值
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(FormContext.Provider, {
    value: {
      formData,
      handleChange,
      handleValidate,
      registerFormItem
    }
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, renderContent()));
});
Form.displayName = 'form';
/* harmony default export */ const src = (Form);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});