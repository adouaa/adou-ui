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
.time-line-wrapper-y {
  position: relative;
}
.time-line-wrapper-y .content {
  position: relative;
  padding-left: 20px;
}
.time-line-wrapper-y .content .icon {
  position: absolute;
  left: -12px;
  top: -6px;
  height: 20px;
  width: 20px;
  /* 事件点颜色 */
  border-radius: 50%;
}
.time-line-wrapper-y .content .icon .un-finish {
  color: #6c757d;
}
.time-line-wrapper-y .content .icon .finished {
  color: #198754;
}
.time-line-wrapper-y .time-line-content {
  display: inline-block;
  background-color: #f9f9f9;
  padding: 6px;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}
.time-line-wrapper-y .time-line-line {
  position: absolute;
  left: -3px;
  /* 使连接线与主线对齐 */
  top: 14px;
  /* 根据需要调整线的位置 */
  /* 线条宽度 */
  height: 120px;
  background-color: #ccc;
  /* 线条颜色 */
}
.time-line-wrapper-y .time-line-line.finished {
  background-color: #198754;
}
.time-line-wrapper-y .time-line-line.un-finish {
  background-color: #6c757d;
}
.time-line-wrapper-y .time-line-date {
  margin: 4px 0;
  font-size: 12px;
  color: #999;
  min-height: 18px;
}

.time-line-wrapper-x {
  position: relative;
  display: flex;
}
.time-line-wrapper-x .content {
  position: relative;
  padding-top: 15px;
  margin-right: 15px;
}
.time-line-wrapper-x .content .icon {
  position: absolute;
  left: -12px;
  top: -6px;
  height: 20px;
  width: 20px;
  /* 事件点颜色 */
  border-radius: 50%;
}
.time-line-wrapper-x .content .icon .un-finish {
  color: #6c757d;
}
.time-line-wrapper-x .content .icon .finished {
  color: #198754;
}
.time-line-wrapper-x .time-line-content {
  background-color: #f9f9f9;
  padding: 6px;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}
.time-line-wrapper-x .time-line-line {
  position: absolute;
  left: 8px;
  /* 使连接线与主线对齐 */
  top: 4px;
  /* 根据需要调整线的位置 */
  /* 线条宽度 */
  height: 2px;
  background-color: #ccc;
  /* 线条颜色 */
}
.time-line-wrapper-x .time-line-line.finished {
  background-color: #198754;
}
.time-line-wrapper-x .time-line-line.un-finish {
  background-color: #6c757d;
}
.time-line-wrapper-x .time-line-date {
  font-size: 12px;
  color: #999;
}`, "",{"version":3,"sources":["webpack://./src/index.scss"],"names":[],"mappings":"AAAA,gBAAgB;AAAhB;EACI,kBAAA;AAEJ;AAAI;EACI,kBAAA;EACA,kBAAA;AAER;AAAQ;EACI,kBAAA;EACA,WAAA;EACA,SAAA;EACA,YAAA;EACA,WAAA;EACA,UAAA;EACA,kBAAA;AAEZ;AAAY;EACI,cAAA;AAEhB;AACY;EACI,cAAA;AAChB;AAKI;EACI,qBAAA;EACA,yBAAA;EACA,YAAA;EACA,kBAAA;EACA,wCAAA;AAHR;AAOI;EACI,kBAAA;EACA,UAAA;EACA,cAAA;EACA,SAAA;EACA,eAAA;EACA,SAAA;EACA,aAAA;EACA,sBAAA;EACA,SAAA;AALR;AAQI;EACI,yBAAA;AANR;AASI;EACI,yBAAA;AAPR;AAUI;EACI,aAAA;EACA,eAAA;EACA,WAAA;EACA,gBAAA;AARR;;AAYA;EACI,kBAAA;EAEA,aAAA;AAVJ;AAYI;EACI,kBAAA;EACA,iBAAA;EACA,kBAAA;AAVR;AAYQ;EACI,kBAAA;EACA,WAAA;EACA,SAAA;EACA,YAAA;EACA,WAAA;EACA,UAAA;EACA,kBAAA;AAVZ;AAYY;EACI,cAAA;AAVhB;AAaY;EACI,cAAA;AAXhB;AAiBI;EACI,yBAAA;EACA,YAAA;EACA,kBAAA;EACA,wCAAA;AAfR;AAmBI;EACI,kBAAA;EACA,SAAA;EACA,cAAA;EACA,QAAA;EACA,eAAA;EACA,SAAA;EACA,WAAA;EACA,sBAAA;EACA,SAAA;AAjBR;AAoBI;EACI,yBAAA;AAlBR;AAqBI;EACI,yBAAA;AAnBR;AAsBI;EACI,eAAA;EACA,WAAA;AApBR","sourcesContent":[".time-line-wrapper-y {\r\n    position: relative;\r\n\r\n    .content {\r\n        position: relative;\r\n        padding-left: 20px;\r\n\r\n        .icon {\r\n            position: absolute;\r\n            left: -12px;\r\n            top: -6px;\r\n            height: 20px;\r\n            width: 20px;\r\n            /* 事件点颜色 */\r\n            border-radius: 50%;\r\n\r\n            .un-finish {\r\n                color: #6c757d;\r\n            }\r\n\r\n            .finished {\r\n                color: #198754;\r\n            }\r\n        }\r\n    }\r\n\r\n\r\n    .time-line-content {\r\n        display: inline-block;\r\n        background-color: #f9f9f9;\r\n        padding: 6px;\r\n        border-radius: 5px;\r\n        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\r\n    }\r\n\r\n\r\n    .time-line-line {\r\n        position: absolute;\r\n        left: -3px;\r\n        /* 使连接线与主线对齐 */\r\n        top: 14px;\r\n        /* 根据需要调整线的位置 */\r\n        /* 线条宽度 */\r\n        height: 120px;\r\n        background-color: #ccc;\r\n        /* 线条颜色 */\r\n    }\r\n\r\n    .time-line-line.finished {\r\n        background-color: #198754;\r\n    }\r\n\r\n    .time-line-line.un-finish {\r\n        background-color: #6c757d;\r\n    }\r\n\r\n    .time-line-date {\r\n        margin: 4px 0;\r\n        font-size: 12px;\r\n        color: #999;\r\n        min-height: 18px;\r\n    }\r\n}\r\n\r\n.time-line-wrapper-x {\r\n    position: relative;\r\n    // border-left: 2px solid #ccc;\r\n    display: flex;\r\n\r\n    .content {\r\n        position: relative;\r\n        padding-top: 15px;\r\n        margin-right: 15px;\r\n\r\n        .icon {\r\n            position: absolute;\r\n            left: -12px;\r\n            top: -6px;\r\n            height: 20px;\r\n            width: 20px;\r\n            /* 事件点颜色 */\r\n            border-radius: 50%;\r\n\r\n            .un-finish {\r\n                color: #6c757d;\r\n            }\r\n\r\n            .finished {\r\n                color: #198754;\r\n            }\r\n        }\r\n    }\r\n\r\n\r\n    .time-line-content {\r\n        background-color: #f9f9f9;\r\n        padding: 6px;\r\n        border-radius: 5px;\r\n        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\r\n    }\r\n\r\n\r\n    .time-line-line {\r\n        position: absolute;\r\n        left: 8px;\r\n        /* 使连接线与主线对齐 */\r\n        top: 4px;\r\n        /* 根据需要调整线的位置 */\r\n        /* 线条宽度 */\r\n        height: 2px;\r\n        background-color: #ccc;\r\n        /* 线条颜色 */\r\n    }\r\n\r\n    .time-line-line.finished {\r\n        background-color: #198754;\r\n    }\r\n\r\n    .time-line-line.un-finish {\r\n        background-color: #6c757d;\r\n    }\r\n\r\n    .time-line-date {\r\n        font-size: 12px;\r\n        color: #999;\r\n    }\r\n}"],"sourceRoot":""}]);
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
  TimeLineItem: () => (/* reexport */ TimelineItem),
  "default": () => (/* binding */ src_0)
});

// EXTERNAL MODULE: external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"}
var external_root_React_commonjs2_react_commonjs_react_amd_react_ = __webpack_require__(442);
var external_root_React_commonjs2_react_commonjs_react_amd_react_default = /*#__PURE__*/__webpack_require__.n(external_root_React_commonjs2_react_commonjs_react_amd_react_);
;// CONCATENATED MODULE: ./src/TimelineItem/index.tsx


const TimeLineItem = _ref => {
  let {
    data,
    render,
    vertical,
    isLasted
  } = _ref;
  const [timeLineWidth, setTimeLineWidth] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(0);
  const [timeLineHeight, setTimeLineHeight] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(0);
  const timeLineItemWrapperRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)();
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (timeLineItemWrapperRef.current) {
      if (vertical) {
        setTimeLineHeight(timeLineItemWrapperRef.current.getBoundingClientRect().height - 14);
        setTimeLineWidth(2);
      } else {
        setTimeLineWidth(timeLineItemWrapperRef.current.getBoundingClientRect().width - 20);
        setTimeLineHeight(2);
      }
    }
  }, [timeLineItemWrapperRef, data, render]);
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    ref: timeLineItemWrapperRef,
    className: "time-line-item-wrapper"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "content"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "icon d-flex justify-content-center align-items-center"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("i", {
    className: "fs-5 fa-solid  ".concat(data.isFinish ? data.checkedIcon || "fa-circle-check finished" : data.unCheckedIcon || "fa-solid fa-circle-xmark un-finish")
  })), data.date && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "time-line-date"
  }, data.date), data.render ? data.render(data) : render ? render(data) : /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "time-line-content"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", null, data.title), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", null, data.description)), !isLasted && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    style: {
      width: timeLineWidth,
      height: timeLineHeight
    },
    className: "time-line-line ".concat(data.isFinish ? "finished" : "un-finish")
  }), " "));
};
/* harmony default export */ const TimelineItem = (TimeLineItem);
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


 // 引入样式文件


const TimeLine = _ref => {
  let {
    children,
    events,
    vertical = true
  } = _ref;
  const timeLineContentBoxRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)();
  const renderChildren = () => {
    let childrenArr = children;
    let enhancedChildren = [];
    if (!Array.isArray(children)) {
      childrenArr = [children];
    }
    events.map((event, index, self) => {
      childrenArr.forEach((chid, i) => {
        if (index === i) {
          const enhancedChild = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().cloneElement(chid, {
            data: event,
            vertical: vertical,
            isLasted: i === self.length - 1
          });
          enhancedChildren.push(enhancedChild);
        }
      });
    });
    {
      /* events.map((event: any, index: number, self: any[]) => (
            <div ref={timeLineContentBoxRef} className='time-line-content-box' key={event.id}>
                {render && render(event, timeLineWidth, timeLineHeight, index === self.length - 1)}
            </div>
        )) */
    }
    return enhancedChildren.map((item, index) => /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
      className: "time-line-item",
      key: index
    }, item));
  };
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "time-line-wrapper-".concat(vertical ? 'y' : 'x', " pt-2")
  }, renderChildren());
};
/* harmony default export */ const src_0 = (TimeLine);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});