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
___CSS_LOADER_EXPORT___.push([module.id, `.empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
}
.empty .text {
  color: #cccccc;
}`, "",{"version":3,"sources":["webpack://./src/index.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,OAAA;AACJ;AAAI;EACI,cAAA;AAER","sourcesContent":[".empty {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    flex: 1;\r\n    .text {\r\n        color: #cccccc;\r\n    }\r\n}"],"sourceRoot":""}]);
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

;// CONCATENATED MODULE: ./src/index.tsx


const Empty = _ref => {
  let {
    showSvg = true,
    svg,
    text = "提示",
    style
  } = _ref;
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    style: style,
    className: "empty"
  }, showSvg ? svg ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("svg", null) : /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("svg", {
    width: "70px",
    height: "90px",
    viewBox: "0 0 1024 1024",
    className: "icon",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    d: "M993.763 493.538v35c0 13.331-6.04 26.664-18.135 37.137-140.149 121.422-280.35 242.795-420.49 364.219-11.813 10.237-25.813 15.501-42.454 15.501v-35c16.644 0 30.641-5.264 42.454-15.501C695.28 773.47 835.474 652.092 975.628 530.677c12.095-10.475 18.135-23.803 18.135-37.139z",
    fill: "#E2AC47"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    d: "M30.239 528.367v-3.5-1.75-3.5-3.5-1.75-3.5-3.5-1.75-3.5-3.5-1.75-3.5c0 14.707 6.701 29.313 19.037 40.019 138.449 120.064 277.049 239.996 415.562 360.02 13.002 11.26 28.74 16.466 47.853 16.994v35c-19.108-0.528-34.851-5.734-47.853-16.994C326.325 808.382 187.725 688.45 49.276 568.386c-12.337-10.705-19.037-25.312-19.037-40.019z",
    fill: "#E2AC47"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    d: "M510.786 76.601c16.263 0 32.546 5.362 44.946 16.097 139.949 121.188 279.9 242.376 419.818 363.586 24.241 20.995 24.295 53.413 0.079 74.396C835.48 652.101 695.28 773.478 555.141 894.898c-11.814 10.238-25.813 15.502-42.451 15.502-19.109-0.528-34.853-5.734-47.854-16.994C326.324 773.382 187.724 653.45 49.275 533.386c-19.581-16.987-24.96-43.81-11.895-65.251 3.919-6.438 8.669-11.829 14.465-16.849C189.954 331.734 328.024 212.152 466.107 92.567c12.296-10.639 28.478-15.966 44.679-15.966z",
    fill: "#F4DF4B"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    d: "M411.821 590.017v16.801c0-3.938-1.372-6.845-4.813-9.416-12.549-9.394-25.189-18.726-37.428-28.422-31.681-25.136-54.261-55.104-61.034-92.359-1.914-10.537-2.872-20.891-2.872-31.053v-16.801c0 10.16 0.958 20.517 2.872 31.054 6.773 37.256 29.354 67.225 61.034 92.357 12.238 9.698 24.879 19.03 37.428 28.423 3.441 2.573 4.813 5.476 4.813 9.416z",
    fill: "#E7BA4A"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    d: "M411.821 590.017v16.801c0-3.938-1.372-6.845-4.813-9.416-12.549-9.394-25.189-18.726-37.428-28.422-31.681-25.136-54.261-55.104-61.034-92.359-1.914-10.537-2.872-20.891-2.872-31.053v-16.801c0 10.16 0.958 20.517 2.872 31.054 6.773 37.256 29.354 67.225 61.034 92.357 12.238 9.698 24.879 19.03 37.428 28.423 3.441 2.573 4.813 5.476 4.813 9.416",
    fill: "#E7BA4A"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    d: "M718.325 432.268v16.801c0 49.485-24.574 91.829-71.955 127.182-9.898 7.378-19.737 14.804-29.698 22.113-3.33 2.446-4.586 5.272-4.586 9.061v-16.801c0-3.787 1.256-6.612 4.586-9.061 9.961-7.31 19.8-14.735 29.698-22.112 47.381-35.353 71.955-77.697 71.955-127.183z",
    fill: "#E7BA4A"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    d: "M718.325 432.268v16.801c0 2.958-0.088 5.891-0.263 8.799v-16.8c0.175-2.909 0.263-5.842 0.263-8.8",
    fill: "#E7BA4A"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    d: "M718.063 441.067v16.8c-1.879 31.138-13.784 59.351-35.26 84.679v-16.8c21.474-25.329 33.381-53.541 35.26-84.679M682.803 525.746v16.8c-10.06 11.867-22.221 23.102-36.433 33.703-9.898 7.379-19.737 14.805-29.698 22.114-0.889 0.652-1.63 1.331-2.239 2.052v-16.8c0.609-0.722 1.352-1.398 2.239-2.052 9.961-7.311 19.8-14.736 29.698-22.114 14.212-10.602 26.373-21.836 36.433-33.703M614.433 583.615v16.8c-1.479 1.746-2.18 3.718-2.319 6.072v-16.802c0.139-2.352 0.838-4.324 2.319-6.07M612.112 589.687v16.802c-0.021 0.306-0.027 0.616-0.027 0.937v-16.801c0-0.321 0.008-0.632 0.027-0.938",
    fill: "#E7BA4A"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    d: "M578.139 594.405v16.8c0.005 3.288-1.577 3.333-7.57 3.333v-16.8c5.994 0 7.575-0.045 7.57-3.333z",
    fill: "#E7BA4A"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    d: "M578.139 594.405v16.8c0 0.178-0.004 0.346-0.014 0.506v-16.8c0.01-0.16 0.014-0.328 0.014-0.506M578.125 594.911v16.8c-0.046 0.776-0.213 1.34-0.554 1.75v-16.8c0.341-0.41 0.508-0.974 0.554-1.75",
    fill: "#E7BA4A"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    d: "M577.573 596.659v16.801a2.022 2.022 0 0 1-0.448 0.391v-16.802a1.92 1.92 0 0 0 0.448-0.39M577.125 597.049v16.801a2.5 2.5 0 0 1-0.526 0.258v-16.801c0.196-0.074 0.371-0.158 0.526-0.258M576.599 597.304v16.801a5.519 5.519 0 0 1-1.185 0.271v-16.801a5.443 5.443 0 0 0 1.185-0.271M575.414 597.577v16.8c-1.14 0.154-2.714 0.161-4.847 0.161v-16.8c2.132 0 3.704-0.007 4.847-0.161",
    fill: "#E7BA4A"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    d: "M445.973 610.859v-16.801c0 2.808 2.107 3.673 6.032 3.73v16.8c-3.924-0.057-6.032-0.922-6.032-3.729z",
    fill: "#E7BA4A"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    d: "M452.005 597.79v16.8c-3.925-0.059-6.032-0.924-6.032-3.729V594.06c0 2.806 2.108 3.671 6.032 3.73",
    fill: "#E7BA4A"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    d: "M495.048 592.455v16.801c0.021 3.843-1.332 5.31-5.542 5.354v-16.8c4.211-0.045 5.561-1.511 5.542-5.355z",
    fill: "#E7BA4A"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    d: "M495.048 592.455v16.801c0.001 0.307-0.005 0.595-0.021 0.868v-16.801c0.016-0.274 0.023-0.562 0.021-0.868M495.026 593.323v16.801c-0.079 1.326-0.375 2.317-0.973 3.025v-16.801c0.599-0.707 0.894-1.699 0.973-3.025",
    fill: "#E7BA4A"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    d: "M494.054 596.35v16.801a3.201 3.201 0 0 1-0.727 0.634v-16.8c0.28-0.18 0.522-0.391 0.727-0.635",
    fill: "#E7BA4A"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    d: "M493.328 596.983v16.8a4.148 4.148 0 0 1-0.793 0.388V597.37c0.293-0.107 0.558-0.234 0.793-0.387M492.534 597.37v16.801c-0.409 0.148-0.876 0.26-1.407 0.33v-16.8c0.531-0.071 0.998-0.18 1.407-0.331M491.127 597.703v16.8c-0.485 0.065-1.021 0.1-1.62 0.106v-16.801a12.878 12.878 0 0 0 1.62-0.105",
    fill: "#E7BA4A"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    d: "M489.507 597.81v16.801a1235.93 1235.93 0 0 0-9.993-0.11c-2.651-0.017-5.305-0.027-7.957-0.027a1648.822 1648.822 0 0 0-19.549 0.118v-16.8c3.464-0.039 6.925-0.071 10.389-0.092 2.73-0.017 5.461-0.025 9.16-0.027 2.652 0 5.307 0.013 7.957 0.027 3.146 0.021 6.292 0.056 9.993 0.11z",
    fill: "#E7BA4A"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    d: "M489.507 597.81v16.801a1235.93 1235.93 0 0 0-9.993-0.11c-2.651-0.017-5.305-0.027-7.957-0.027a1648.822 1648.822 0 0 0-19.549 0.118v-16.8c3.464-0.039 6.925-0.071 10.389-0.092 2.73-0.017 5.461-0.025 9.16-0.027 2.652 0 5.307 0.013 7.957 0.027 3.146 0.021 6.292 0.056 9.993 0.11",
    fill: "#E7BA4A"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    d: "M568.534 597.741v16.8l-3.229-0.006c-1.794-0.004-3.589-0.009-5.383-0.015a2661.326 2661.326 0 0 0-9.408-0.025c-3.161 0-5.238 0.006-7.315 0.02-2.636 0.02-5.27 0.049-7.904 0.101v-16.8a613.1 613.1 0 0 1 7.904-0.101c2.076-0.014 4.155-0.02 7.315-0.02 1.255 0 2.508 0.001 3.764 0.006 1.881 0.004 3.762 0.011 5.644 0.018 1.794 0.005 3.587 0.012 5.383 0.016l3.229 0.006z",
    fill: "#E7BA4A"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    d: "M568.534 597.741v16.8l-3.229-0.006c-1.794-0.004-3.589-0.009-5.383-0.015a2661.326 2661.326 0 0 0-9.408-0.025c-3.161 0-5.238 0.006-7.315 0.02-2.636 0.02-5.27 0.049-7.904 0.101v-16.8a613.1 613.1 0 0 1 7.904-0.101c2.076-0.014 4.155-0.02 7.315-0.02 1.255 0 2.508 0.001 3.764 0.006 1.881 0.004 3.762 0.011 5.644 0.018 1.794 0.005 3.587 0.012 5.383 0.016l3.229 0.006",
    fill: "#E7BA4A"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    d: "M512.051 279.554c45.628 0.084 89.793 16.21 122.674 46.243a273.56 273.56 0 0 1 1.687 1.562c31.329 29.422 47.188 63.438 47.306 101.549 0.022 7.479-0.562 15.117-1.754 22.907-4.405 28.754-20.573 52.744-44.243 72.796-13.708 11.621-28.456 22.33-42.94 33.25-10.621 8.019-17.152 17.313-17.143 29.344a35.3 35.3 0 0 0 0.261 4.188c0.146 1.228 0.241 2.216 0.242 3.015 0.005 3.288-1.577 3.333-7.57 3.333l-2.033 0.003-3.229-0.006c-1.794-0.004-3.589-0.011-5.383-0.016l-5.644-0.018a944.518 944.518 0 0 0-3.764-0.006c-3.16 0-5.238 0.006-7.315 0.021-2.636 0.019-5.271 0.047-7.904 0.1-5.038-0.086-6.472-1.527-6.451-5.544 0.172-33.609 0.039-67.229 0.223-100.834 0.021-2.095 1.391-4.671 3.113-6.199 14.971-13.313 30.13-26.458 45.301-39.596 4.074-3.522 6.96-7.466 6.96-12.357 0-0.603-0.044-1.215-0.137-1.846-1.393-8.202-8.636-13.209-16.555-13.367-3.643 0.049-6.638 0.764-9.444 2.245-0.47 0.248-0.932 0.514-1.388 0.804-4.173 2.646-7.642 6.136-11.371 9.298-11.208 9.471-22.377 18.969-33.565 28.449-15.413-13.164-30.645-26.466-46.338-39.344-3.578-2.942-8.547-5.343-13.315-6.285-2.116-0.287-2.614-0.312-3.104-0.316-6.262 0.198-11.117 3.313-13.668 7.596-1.427 2.396-2.148 4.898-2.149 7.377-0.001 3.867 1.75 7.681 5.324 10.964 7.55 6.932 15.4 13.618 23.165 20.376 9.998 8.702 20.148 17.292 29.967 26.145 1.691 1.527 2.964 4.129 2.975 6.241 0.181 33.609 0.07 67.226 0.21 100.833 0.021 3.843-1.332 5.309-5.541 5.354a1172.281 1172.281 0 0 0-17.95-0.136c-3.698 0.001-6.431 0.011-9.159 0.027-3.464 0.021-6.927 0.052-10.392 0.092-4.35-0.064-6.468-1.123-5.957-4.716 0.351-2.146 0.501-4.02 0.499-5.827-0.015-14.725-10.189-25.1-22.946-34.622-14.254-10.644-28.689-21.212-41.854-32.824-28.188-24.869-41.703-54.226-41.761-87.038-0.011-6.81 0.558-13.769 1.692-20.867 8.68-54.253 41.934-94.112 98.622-117.926a174.99 174.99 0 0 1 3.687-1.501c21.956-8.676 45.113-12.887 68.059-12.921z",
    fill: "#F9F4BE"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    d: "M535.298 597.817v16.8c-5.038-0.086-6.471-1.526-6.45-5.544v-16.8c-0.021 4.017 1.412 5.458 6.45 5.544z",
    fill: "#E7BA4A"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    d: "M535.298 597.817v16.8c-5.038-0.086-6.471-1.526-6.45-5.544v-16.8c-0.021 4.017 1.412 5.458 6.45 5.544",
    fill: "#E7BA4A"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    d: "M452.366 644.117c-1.833 0-3.138 0.033-4.067 0.204v-1.964-2.083-2.16-2.198-2.196-2.155-2.079-1.959c0.93-0.171 2.234-0.205 4.067-0.205v16.795z",
    fill: "#E7BA4A"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    d: "M452.366 627.317v16.8c-1.59 0-2.782 0.023-3.675 0.143v-16.8c0.893-0.118 2.086-0.143 3.675-0.143M448.691 627.46v16.8c-0.436 0.06-0.799 0.141-1.104 0.249v-16.801a5.42 5.42 0 0 1 1.104-0.248",
    fill: "#E7BA4A"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    d: "M446.483 645.386c-0.38 0.672-0.443 1.694-0.443 3.242v-16.8c0.001-2.862 0.217-3.922 2.237-4.303V627.525a0.05 0.05 0 0 0 0.021-0.005v16.794c-0.939 0.182-1.492 0.5-1.815 1.072v-1.959-2.076-2.157-2.195-2.195-2.155-2.077-1.962 14.817c0 0.588 0.149 1.39 0 1.959z",
    fill: "#E7BA4A"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    d: "M448.691 627.46v16.8c-0.436 0.06-0.799 0.141-1.104 0.249v-16.801a5.42 5.42 0 0 1 1.104-0.248",
    fill: "#E7BA4A"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    d: "M447.588 627.707v16.8c-0.188 0.07-0.354 0.147-0.5 0.242v-16.8c0.145-0.093 0.312-0.173 0.5-0.242M447.087 627.949v16.8a1.829 1.829 0 0 0-0.416 0.363v-16.801c0.117-0.138 0.254-0.258 0.416-0.362",
    fill: "#E7BA4A"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    d: "M446.672 628.313v16.8c-0.387 0.465-0.542 1.14-0.599 2.121v-16.801c0.057-0.983 0.212-1.656 0.599-2.12M446.073 630.434v16.801c-0.024 0.413-0.033 0.88-0.033 1.407v-16.8c0-0.529 0.008-0.996 0.033-1.408",
    fill: "#E7BA4A"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    d: "M452.363 627.316c0.565 0 1.181 0.002 1.85 0.007h2.411c6.156-0.003 12.317-0.006 18.472-0.006 12.317 0 24.628 0.006 36.946 0.006h57.659c8.347 0 8.215 0 8.354 7.463 0.007 0.25 0.011 0.499 0.009 0.748-0.022 7.692-2.821 14.311-9.422 19.723-5.392 4.436-11.69 6.81-19.132 6.81l-21.896 0.021c-7.136 0.007-14.268 0.014-21.399 0.014H505.283a8906.406 8906.406 0 0 1-30.788-0.052c-15.933-0.062-28.54-11.481-28.46-25.405l0.004-0.329 0.005-0.392c0.126-8.079-1.065-8.608 6.319-8.608z",
    fill: "#F2EA90"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    d: "M549.51 662.065v16.801c-7.298 0.005-14.599 0.014-21.896 0.021-7.136 0.007-14.268 0.015-21.399 0.015h-0.498v-16.801h0.498c7.133 0 14.264-0.007 21.399-0.014 7.297-0.008 14.598-0.016 21.896-0.022z",
    fill: "#E7BA4A"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    d: "M549.51 662.065v16.801c-7.298 0.005-14.599 0.014-21.896 0.021-7.136 0.007-14.268 0.015-21.399 0.015h-0.498v-16.801h0.498c7.133 0 14.264-0.007 21.399-0.014 7.297-0.008 14.598-0.016 21.896-0.022",
    fill: "#E7BA4A"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    d: "M505.716 662.102v16.801h-0.433c-4.874 0-9.748-0.003-14.621-0.012-5.389-0.009-10.779-0.021-16.167-0.041-15.933-0.062-28.54-11.48-28.46-25.404v-16.801c-0.08 13.924 12.529 25.346 28.46 25.405a8906.406 8906.406 0 0 0 30.788 0.052h0.433z",
    fill: "#E7BA4A"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    d: "M505.716 662.102v16.801h-0.433c-4.874 0-9.748-0.003-14.621-0.012-5.389-0.009-10.779-0.021-16.167-0.041-15.933-0.062-28.54-11.48-28.46-25.404v-16.801c-0.08 13.924 12.529 25.346 28.46 25.405a8906.406 8906.406 0 0 0 30.788 0.052h0.433",
    fill: "#E7BA4A"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    d: "M713.26 392.009c16.351 67.141-7.127 122.851-66.89 167.442-9.898 7.378-19.737 14.805-29.698 22.112-3.396 2.495-4.636 5.388-4.584 9.287 0.232 16.282 0.928 32.614-0.084 48.853-1.823 29.636-25.611 50.588-59.762 51.819-12.646 0.449-25.327 0.671-38.006 0.671-14.946 0-29.892-0.305-44.803-0.89-32.961-1.292-57.587-24.896-57.708-53.548-0.062-15.817-0.161-31.627 0.091-47.436 0.07-4.096-1.279-7.081-4.809-9.718-12.549-9.393-25.189-18.725-37.428-28.422-31.681-25.135-54.261-55.102-61.034-92.358-9.324-51.349 4.022-98.381 40.521-139.681 36.561-41.387 85.479-64.329 145.484-69.356 2.107-0.175 4.133-1.108 6.199-1.694h22.398c2.066 0.585 4.094 1.519 6.198 1.694 91.4 7.514 165.014 63.568 183.915 141.225z m-31.299 59.807c1.193-7.791 1.777-15.43 1.754-22.907-0.115-38.111-15.978-72.129-47.305-101.551-0.563-0.525-1.12-1.043-1.688-1.562-32.879-30.034-77.045-46.159-122.028-46.243-23.596 0.032-46.742 4.244-68.704 12.914a185.191 185.191 0 0 0-3.686 1.499c-56.689 23.815-89.942 63.673-98.624 117.928-1.136 7.1-1.702 14.057-1.691 20.867 0.058 32.812 13.571 62.17 41.761 87.04 13.165 11.609 27.6 22.182 41.854 32.82 12.758 9.525 22.933 19.902 22.947 34.624a34.519 34.519 0 0 1-0.468 5.629c-0.542 3.794 1.575 4.852 5.258 4.915 4.133-0.038 7.597-0.071 11.062-0.092a1324.852 1324.852 0 0 1 17.117 0.001c3.146 0.021 6.291 0.058 9.436 0.107 4.765-0.044 6.117-1.51 6.097-5.352-0.141-33.607-0.03-67.225-0.212-100.833-0.01-2.112-1.28-4.714-2.974-6.241-9.816-8.852-19.97-17.44-29.97-26.144-7.762-6.759-15.614-13.446-23.164-20.378-3.574-3.281-5.327-7.095-5.324-10.962 0.001-2.479 0.725-4.981 2.147-7.377 2.553-4.281 7.41-7.396 13.026-7.586 1.133-0.006 1.632 0.019 2.131 0.068 6.384 1.181 11.353 3.582 14.934 6.524 15.693 12.876 30.924 26.18 46.338 39.344 11.187-9.479 22.356-18.979 33.565-28.449 3.729-3.159 7.196-6.651 11.37-9.298 0.456-0.29 0.919-0.557 1.387-0.803a19.405 19.405 0 0 1 8.729-2.248c8.637 0.159 15.879 5.167 17.212 12.988 0.148 1.011 0.195 1.627 0.195 2.227 0 4.891-2.886 8.836-6.961 12.357-15.17 13.139-30.331 26.283-45.3 39.596-1.721 1.528-3.095 4.105-3.114 6.198-0.184 33.608-0.051 67.227-0.222 100.834-0.021 4.018 1.412 5.459 5.574 5.545 3.511-0.052 6.146-0.081 8.78-0.099 2.075-0.015 4.153-0.021 6.23-0.021 2.339 0 3.59 0.003 4.847 0.006l5.641 0.018c1.795 0.005 3.589 0.012 5.384 0.018l2.155 0.001c1.752 0.003 2.429 0.001 3.107 0 5.995 0 7.577-0.045 7.571-3.333-0.002-0.797-0.096-1.787-0.242-3.013a35.352 35.352 0 0 1-0.261-4.188c-0.012-12.031 6.52-21.326 17.142-29.342 14.485-10.922 29.232-21.632 42.939-33.252 23.674-20.051 39.844-44.04 44.248-72.794M568.643 655.257c6.602-5.412 9.398-12.027 9.42-19.723 0.004-0.247 0-0.498-0.007-0.748-0.141-7.463-0.01-7.463-8.355-7.463h-57.657c-12.315 0-24.632-0.005-36.946-0.005-6.157 0-12.315 0.002-18.472 0.005h-2.411c-0.668-0.003-1.284-0.006-1.847-0.006-7.387 0-6.199 0.528-6.321 8.604l-0.005 0.395-0.005 0.327c-0.08 13.925 12.528 25.347 28.46 25.405 5.39 0.022 10.779 0.033 16.167 0.041 4.874 0.009 9.747 0.011 14.622 0.011h0.931c7.134 0 14.265-0.007 21.399-0.014 7.299-0.008 14.598-0.016 21.896-0.021 7.437 0 13.737-2.373 19.131-6.808",
    fill: "#EFD350"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    d: "M612.537 620.409v16.8c0 6.438-0.134 12.872-0.533 19.291-1.823 29.637-25.611 50.59-59.762 51.82-12.646 0.45-25.327 0.67-38.006 0.67-14.946 0-29.892-0.305-44.803-0.89-32.961-1.292-57.587-24.896-57.708-53.547-0.031-8.026-0.072-16.053-0.072-24.076v-16.8c0 8.023 0.041 16.05 0.072 24.076 0.12 28.65 24.746 52.255 57.708 53.547 14.912 0.585 29.858 0.89 44.803 0.89 12.679 0 25.356-0.22 38.006-0.67 34.149-1.231 57.938-22.185 59.762-51.82 0.399-6.418 0.533-12.853 0.533-19.291z",
    fill: "#E7BA4A"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    d: "M612.537 620.409v16.8c0 6.259-0.125 12.513-0.499 18.752v-16.8c0.374-6.238 0.499-12.493 0.499-18.752M612.037 639.161v16.8l-0.033 0.54c-0.732 11.958-5.046 22.502-12.172 30.907v-16.8c7.126-8.406 11.438-18.949 12.172-30.907l0.033-0.54M599.831 670.608v16.8c-3.437 4.055-7.526 7.61-12.187 10.589v-16.8c4.661-2.979 8.752-6.535 12.187-10.589",
    fill: "#E7BA4A"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    d: "M587.646 681.195v16.8c-3.65 2.331-7.649 4.309-11.959 5.892v-16.8c4.309-1.583 8.308-3.561 11.959-5.892",
    fill: "#E7BA4A"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    d: "M575.688 687.087v16.8c-4.727 1.736-9.823 3-15.236 3.735v-16.8c5.412-0.736 10.509-1.998 15.236-3.735M560.45 690.822v16.8a83.425 83.425 0 0 1-8.208 0.698c-12.646 0.45-25.327 0.67-38.006 0.67-14.946 0-29.892-0.305-44.803-0.89-32.961-1.292-57.587-24.896-57.708-53.547-0.031-8.026-0.072-16.053-0.072-24.076v-16.8c0 8.023 0.041 16.05 0.072 24.076 0.12 28.65 24.746 52.255 57.708 53.547 14.912 0.585 29.858 0.89 44.803 0.89 12.679 0 25.356-0.22 38.006-0.67a83.12 83.12 0 0 0 8.208-0.698",
    fill: "#E7BA4A"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    d: "M614.405 724.054v16.802c0 1.104-0.12 2.257-0.364 3.448-1.259 6.155-6.157 10.38-13.314 11.461-0.736 0.113-1.481 0.28-2.219 0.28-32.056 0.015-64.124 0.068-96.185 0.068-25.557 0-51.101-0.034-76.656-0.147-9.875-0.043-16.197-6.415-16.197-14.379v-16.8c0 7.962 6.322 14.335 16.197 14.379 25.556 0.113 51.1 0.147 76.656 0.147 32.061 0 64.129-0.055 96.185-0.068 0.736 0 1.481-0.167 2.219-0.28 7.155-1.08 12.056-5.307 13.314-11.461 0.246-1.192 0.364-2.345 0.364-3.45z",
    fill: "#E7BA4A"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    d: "M614.405 724.054v16.802c0 0.327-0.011 0.663-0.031 0.999v-16.801c0.022-0.338 0.031-0.672 0.031-1M614.374 725.054v16.801c-0.051 0.794-0.16 1.611-0.331 2.449-0.479 2.332-1.479 4.391-2.929 6.103v-16.8c1.448-1.714 2.45-3.771 2.929-6.103 0.171-0.839 0.28-1.656 0.331-2.45M611.114 733.604v16.801a14.143 14.143 0 0 1-3.188 2.771v-16.8a14.076 14.076 0 0 0 3.188-2.772",
    fill: "#E7BA4A"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    d: "M607.928 736.375v16.8a16.89 16.89 0 0 1-3.22 1.585v-16.8a16.744 16.744 0 0 0 3.22-1.585M604.708 737.96v16.8a20.63 20.63 0 0 1-3.979 1.004c-0.425 0.065-0.853 0.147-1.278 0.205v-16.801c0.427-0.057 0.854-0.141 1.278-0.205a20.395 20.395 0 0 0 3.979-1.003M599.449 739.171v16.8a6.921 6.921 0 0 1-0.94 0.074c-32.054 0.015-64.124 0.068-96.185 0.068-25.556 0-51.101-0.034-76.655-0.147-9.875-0.043-16.197-6.415-16.197-14.379v-16.8c0 7.962 6.322 14.335 16.197 14.379 25.556 0.113 51.1 0.147 76.655 0.147 32.061 0 64.131-0.055 96.185-0.068 0.313-0.002 0.628-0.031 0.94-0.074",
    fill: "#E7BA4A"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("path", {
    d: "M560.361 709.575c11.692 0 23.385 0.019 35.071 0.075 13.318 0.063 20.746 7.411 18.609 17.854-1.26 6.153-6.158 10.378-13.315 11.46-0.735 0.113-1.48 0.28-2.219 0.28-32.054 0.015-64.124 0.068-96.185 0.068-25.556 0-51.101-0.034-76.655-0.147-11.582-0.051-18.275-8.808-15.615-18.628 1.766-6.469 7.712-10.642 16.45-10.789 8.414-0.13 16.827-0.151 25.244-0.151 2.425 0 4.85 0.001 7.275 0.005a2838.127 2838.127 0 0 0 11.671 0c4.601-0.009 9.201-0.012 13.801-0.012 9.197 0 18.396 0.012 27.59 0.012l7.509 0.003c6.045 0 12.088-0.008 18.134-0.015 7.544-0.008 15.09-0.015 22.635-0.015z",
    fill: "#EFD350"
  })) : "", /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
    className: "text"
  }, text));
};
/* harmony default export */ const src_0 = (Empty);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});