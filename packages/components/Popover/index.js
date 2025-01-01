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
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 191:
/***/ ((module) => {



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

/***/ 483:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
.adou-popover-wrapper {
  width: fit-content;
  position: relative;
}
.adou-popover {
  min-width: 150px;
  position: absolute;
  background-color: white;
  color: rgba(0, 0, 0, 0.88);
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 14px;
  white-space: nowrap;
  opacity: 0;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
  z-index: 1;
  transform: translate(-54%, 0px);
  /* 防止鼠标事件穿透到 Tooltip 后面的元素 */
}
.adou-popover.show-popover {
  transform: scale(1.2) translate(-43%, -20px);
  opacity: 1;
  pointer-events: auto;
  /* 启用鼠标事件 */
}
.adou-popover.adou-popover-top {
  bottom: 100%;
  left: 50%;
  transform: sclae(1.2) translate(-43%, -20px);
}
.adou-popover.adou-popover-bottom {
  top: 100%;
  left: 50%;
  transform: translate(-50%, 10px);
}
.adou-popover.adou-popover-left {
  right: 100%;
  top: 50%;
  transform: translate(-10px, -50%);
}
.adou-popover.adou-popover-right {
  left: 100%;
  top: 50%;
  transform: translate(10px, -50%);
}

.adou-popover-arrow {
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
}
.adou-popover-arrow.adou-popover-arrow-top {
  border-width: 8px 8px 0 8px;
  border-color: #fff transparent transparent transparent;
  bottom: -7px;
  left: 50%;
  transform: translateX(-50%);
}
.adou-popover-arrow.adou-popover-arrow-bottom {
  border-width: 0 8px 8px 8px;
  border-color: transparent transparent #fff transparent;
  top: -7px;
  left: 50%;
  transform: translateX(-50%);
}
.adou-popover-arrow.adou-popover-arrow-left {
  border-width: 8px 0 8px 8px;
  border-color: transparent transparent transparent #fff;
  right: -7px;
  top: 50%;
  transform: translateY(-50%);
}
.adou-popover-arrow.adou-popover-arrow-right {
  border-width: 8px 8px 8px 0;
  border-color: transparent #fff transparent transparent;
  left: -7px;
  top: 50%;
  transform: translateY(-50%);
}`, "",{"version":3,"sources":["webpack://./src/index.scss"],"names":[],"mappings":"AAAA,gBAAgB;AAAhB;EACE,kBAAA;EACA,kBAAA;AAEF;AAGA;EACE,gBAAA;EACA,kBAAA;EACA,uBAAA;EACA,0BAAA;EACA,iBAAA;EACA,kBAAA;EACA,eAAA;EACA,mBAAA;EACA,UAAA;EACA,gCAAA;EACA,oHAAA;EAIA,UAAA;EACA,+BAAA;EAEA,4BAAA;AALF;AAOE;EACE,4CAAA;EACA,UAAA;EACA,oBAAA;EACA,WAAA;AALJ;AAQE;EACE,YAAA;EACA,SAAA;EACA,4CAAA;AANJ;AASE;EACE,SAAA;EACA,SAAA;EACA,gCAAA;AAPJ;AAUE;EACE,WAAA;EACA,QAAA;EACA,iCAAA;AARJ;AAWE;EACE,UAAA;EACA,QAAA;EACA,gCAAA;AATJ;;AAaA;EACE,kBAAA;EACA,QAAA;EACA,SAAA;EACA,mBAAA;AAVF;AAYE;EACE,2BAAA;EACA,sDAAA;EACA,YAAA;EACA,SAAA;EACA,2BAAA;AAVJ;AAaE;EACE,2BAAA;EACA,sDAAA;EACA,SAAA;EACA,SAAA;EACA,2BAAA;AAXJ;AAcE;EACE,2BAAA;EACA,sDAAA;EACA,WAAA;EACA,QAAA;EACA,2BAAA;AAZJ;AAeE;EACE,2BAAA;EACA,sDAAA;EACA,UAAA;EACA,QAAA;EACA,2BAAA;AAbJ","sourcesContent":[".adou-popover-wrapper {\r\n  width: fit-content;\r\n  position: relative;\r\n\r\n  .trigger-content {}\r\n}\r\n\r\n.adou-popover {\r\n  min-width: 150px;\r\n  position: absolute;\r\n  background-color: white;\r\n  color: rgba(0, 0, 0, 0.88);\r\n  padding: 5px 10px;\r\n  border-radius: 4px;\r\n  font-size: 14px;\r\n  white-space: nowrap;\r\n  opacity: 0;\r\n  transition: all .2s ease-in-out;\r\n  box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.08),\r\n    0 3px 6px -4px rgba(0, 0, 0, 0.12),\r\n    0 9px 28px 8px rgba(0, 0, 0, 0.05);\r\n  // border: 1px solid #e4e7ed;\r\n  z-index: 1;\r\n  transform: translate(-54%, 0px);\r\n  // pointer-events: none;\r\n  /* 防止鼠标事件穿透到 Tooltip 后面的元素 */\r\n\r\n  &.show-popover {\r\n    transform: scale(1.2) translate(-43%, -20px);\r\n    opacity: 1;\r\n    pointer-events: auto;\r\n    /* 启用鼠标事件 */\r\n  }\r\n\r\n  &.adou-popover-top {\r\n    bottom: 100%;\r\n    left: 50%;\r\n    transform: sclae(1.2) translate(-43%, -20px);\r\n  }\r\n\r\n  &.adou-popover-bottom {\r\n    top: 100%;\r\n    left: 50%;\r\n    transform: translate(-50%, 10px);\r\n  }\r\n\r\n  &.adou-popover-left {\r\n    right: 100%;\r\n    top: 50%;\r\n    transform: translate(-10px, -50%);\r\n  }\r\n\r\n  &.adou-popover-right {\r\n    left: 100%;\r\n    top: 50%;\r\n    transform: translate(10px, -50%);\r\n  }\r\n}\r\n\r\n.adou-popover-arrow {\r\n  position: absolute;\r\n  width: 0;\r\n  height: 0;\r\n  border-style: solid;\r\n\r\n  &.adou-popover-arrow-top {\r\n    border-width: 8px 8px 0 8px;\r\n    border-color: #fff transparent transparent transparent;\r\n    bottom: -7px;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n  }\r\n\r\n  &.adou-popover-arrow-bottom {\r\n    border-width: 0 8px 8px 8px;\r\n    border-color: transparent transparent #fff transparent;\r\n    top: -7px;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n  }\r\n\r\n  &.adou-popover-arrow-left {\r\n    border-width: 8px 0 8px 8px;\r\n    border-color: transparent transparent transparent #fff;\r\n    right: -7px;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n  }\r\n\r\n  &.adou-popover-arrow-right {\r\n    border-width: 8px 8px 8px 0;\r\n    border-color: transparent #fff transparent transparent;\r\n    left: -7px;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 591:
/***/ ((module) => {



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

module.exports = __WEBPACK_EXTERNAL_MODULE__442__;

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ src_0)
});

// EXTERNAL MODULE: external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"}
var external_root_React_commonjs2_react_commonjs_react_amd_react_ = __webpack_require__(442);
var external_root_React_commonjs2_react_commonjs_react_amd_react_default = /*#__PURE__*/__webpack_require__.n(external_root_React_commonjs2_react_commonjs_react_amd_react_);
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
// EXTERNAL MODULE: ../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/index.scss
var cjs_ruleSet_1_rules_1_use_2_src = __webpack_require__(483);
;// CONCATENATED MODULE: ./src/index.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(cjs_ruleSet_1_rules_1_use_2_src/* default */.A, options);




       /* harmony default export */ const src = (cjs_ruleSet_1_rules_1_use_2_src/* default */.A && cjs_ruleSet_1_rules_1_use_2_src/* default */.A.locals ? cjs_ruleSet_1_rules_1_use_2_src/* default */.A.locals : undefined);

;// CONCATENATED MODULE: ./src/utils/useClickOutside.js

const useClickOutside = function (refs, callback) {
  let enabled = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  let params = arguments.length > 3 ? arguments[3] : undefined;
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    const judge = event => {
      return refs.some(ref => {
        var _ref$current;
        return (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.contains(event.target);
      });
    };
    const handleClickOutside = event => {
      if (enabled && refs.length && !judge(event)) {
        callback && callback();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [refs, callback, enabled]);
};
/* harmony default export */ const utils_useClickOutside = (useClickOutside);
;// CONCATENATED MODULE: ./src/index.tsx

 // 引入样式文件

const Popover = /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef)((_ref, ref) => {
  let {
    title,
    trigger = "click",
    show = true,
    content,
    position = "top",
    children,
    bgc,
    color,
    borderColor,
    wrapperClassname,
    onClose,
    onShowChange
  } = _ref;
  const [isShow, setIsShow] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false);

  // 用来实现外部传来的show参与到控制是否展示的逻辑中来(偏业务逻辑了)
  //  不能用 isShow是因为 isShow是异步的。。
  const isShowRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(show);
  const [isVisible, setIsVisible] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false); // 用来实现当鼠标进入提示区域可以让提示存在的效果

  const isEnterContentRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(false);
  const popoverRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  const triggerRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  // ！！！用来记录鼠标是否进入提示区域
  //       当鼠标离开内容区域的时候，去判断是否进入了提示区域，如果进入，则不隐藏提示文字
  const isEnterPopoverRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(false);
  const enterTimeoutRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  const handleClick = e => {
    e.stopPropagation(); // 阻止事件的冒泡
  };
  const handleContentClick = () => {
    setTimeout(() => {
      if (trigger === "hover") return;
      if (isVisible) {
        setTimeout(() => {
          setIsVisible(false);
        }, 100);
        setTimeout(() => {
          setIsShow(false);
          onClose && onClose();
        }, 200);
        return;
      } // 防止此时Popover已经展示，再点击关闭后会立马又展示
      // 进入的时候，如果存在定时器，也清除掉
      if (enterTimeoutRef.current) {
        clearTimeout(enterTimeoutRef.current);
      }
      if (!isShowRef.current) return; // 如果外边的不想展示，则在这里return，不继续执行展示逻辑
      setIsShow(true);
      setTimeout(() => {
        setIsVisible(true);
      }, 50);
    }, 0); // 这边加个时间为 0 的定时器，是为了 在父组件点击 trigger(children) 的时候，先执行父组件的点击事件，再执行这里的事件 --> 保证传进来的 show 是正确的(true)
  };
  const handleMouseLeave = () => {
    if (enterTimeoutRef.current) {
      clearTimeout(enterTimeoutRef.current);
    }
    setTimeout(() => {
      if (isEnterContentRef.current) return;
      setTimeout(() => {
        handleClosePopover(); // 离开后 再手动执行一下关闭的逻辑
      }, 100); // 给个定时器，防止移入后立马移出，导致提示区域展示出来一点点就消失
    }, 100);
  };

  /**
   * 用来实现当鼠标进入提示区域可以让提示存在的效果
   */
  const handleMouseEnterPopover = () => {
    if (trigger === "click") return;
    enterTimeoutRef.current = setTimeout(() => {
      isEnterPopoverRef.current = true;
      // 如果当前是显示状态才能设置isVisible为true，不然鼠标移到提示区域也会展示
      setIsShow(true);
      setTimeout(() => {
        setIsVisible(true);
      }, 50);
    }, 200); // 给个 100ms 的定时器，防止鼠标 快速移入移出
  };

  // 关闭 Popover
  const handleClosePopover = () => {
    isEnterPopoverRef.current = false;
    setTimeout(() => {
      setIsVisible(false);
    }, 200);
    setTimeout(() => {
      setIsShow(false);
      onClose && onClose();
    }, 300);
  };

  // 进入 popover 内容区域的时候，不隐藏提示文字
  const handleEnterContent = () => {
    isEnterContentRef.current = true;
  };
  const handleLeaveContent = () => {
    if (trigger === "click") return; // 如果是点击触发，则不需要离开 content 的时候关闭 Popover
    isEnterContentRef.current = false;
    // 离开后 再手动执行一下关闭的逻辑
    handleClosePopover();
  };

  // 点击 触发内容 的时候也不执行这个钩子
  utils_useClickOutside([popoverRef, triggerRef], handleClosePopover, isVisible && isShow && Boolean(popoverRef.current));
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useImperativeHandle)(ref, () => ({
    handleClose: handleClosePopover
  }));
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    isShowRef.current = show;
    if (!show) {
      // 为了实现 在浮层内关闭的动画不会太丑，所以要给个 100ms 的定时器，让动画只展示 100ms
      setIsVisible(false);
      setTimeout(() => {
        setIsShow(false);
      }, 100); // 要把 isVisible 置为 false，不能置 isShow 为 false，不然就没有动画
    }
  }, [show]);

  // 当 isShow 变化的时候，通知父组件
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    onShowChange && onShowChange(isShow);
  }, [isShow]);
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "adou-popover-wrapper ".concat(wrapperClassname || "")
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    ref: triggerRef,
    className: "trigger-content",
    onMouseEnter: handleMouseEnterPopover,
    onClick: handleContentClick,
    onMouseLeave: handleMouseLeave
  }, children), content && isShow && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    ref: popoverRef,
    onMouseEnter: handleEnterContent,
    onMouseLeave: handleLeaveContent,
    onClick: handleClick
    // onMouseEnter={handleMouseEnterPopover}
    // onMouseLeave={handleClosePopover}
    ,
    className: "adou-popover p-2 ".concat(isVisible ? "show-popover" : "", " adou-popover-").concat(position),
    style: {
      backgroundColor: bgc,
      color: color
    }
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    style: {
      borderColor: "transparent transparent ".concat(borderColor, " transparent")
    },
    className: "adou-popover-arrow adou-popover-arrow-".concat(position)
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "popover-title mb-2"
  }, title), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "popover-content"
  }, content)));
});
/* harmony default export */ const src_0 = (Popover);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});