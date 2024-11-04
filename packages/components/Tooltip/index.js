(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["RPB"] = factory(require("react"), require("react-dom"));
	else
		root["RPB"] = factory(root["React"], root["ReactDOM"]);
})(this, (__WEBPACK_EXTERNAL_MODULE__442__, __WEBPACK_EXTERNAL_MODULE__3__) => {
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
.adou-tooltip-wrapper {
  position: relative;
  width: fit-content;
}
.adou-tooltip-wrapper .content {
  width: fit-content;
}

.adou-tooltip {
  height: fit-content;
  position: absolute;
  color: #fff;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 14px;
  opacity: 0;
  transform: scale(0);
  /* 初始状态为缩小 */
  transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;
  /* 添加 transform 过渡效果 */
  /* 防止鼠标事件穿透到 Tooltip 后面的元素 */
  z-index: 10000;
}
.adou-tooltip .adou-tooltip-arrow {
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
}

.show-tool-tip {
  opacity: 1;
  /* 显示时放大 */
  pointer-events: auto;
  /* 启用鼠标事件 */
}

.adou-tooltip-top,
.adou-tooltip-top-left,
.adou-tooltip-top-right {
  bottom: 100%;
  left: 50%;
  transform: translate(-50%, -10px) scale(0);
  /* 初始状态为缩小 */
}
.adou-tooltip-top.show-tool-tip,
.adou-tooltip-top-left.show-tool-tip,
.adou-tooltip-top-right.show-tool-tip {
  transform: translate(-50%, -10px) scale(1);
  /* 显示时放大 */
}

.adou-tooltip-bottom,
.adou-tooltip-bottom-left,
.adou-tooltip-bottom-right {
  top: 100%;
  left: 50%;
  transform: translate(-50%, 10px) scale(0);
  /* 初始状态为缩小 */
}
.adou-tooltip-bottom.show-tool-tip,
.adou-tooltip-bottom-left.show-tool-tip,
.adou-tooltip-bottom-right.show-tool-tip {
  transform: translate(-50%, 10px) scale(1);
  /* 显示时放大 */
}

.adou-tooltip-left,
.adou-tooltip-left-top,
.adou-tooltip-left-bottom {
  right: 100%;
  top: 50%;
  transform: translate(-10px, -50%) scale(0);
  width: fit-content;
  /* 初始状态为缩小 */
}
.adou-tooltip-left.show-tool-tip,
.adou-tooltip-left-top.show-tool-tip,
.adou-tooltip-left-bottom.show-tool-tip {
  transform: translate(-10px, -50%) scale(1);
  /* 显示时放大 */
}

.adou-tooltip-right,
.adou-tooltip-right-top,
.adou-tooltip-right-bottom {
  top: 50%;
  transform: translate(10px, -50%) scale(0);
  /* 初始状态为缩小 */
}
.adou-tooltip-right.show-tool-tip,
.adou-tooltip-right-top.show-tool-tip,
.adou-tooltip-right-bottom.show-tool-tip {
  transform: translate(10px, -50%) scale(1);
  /* 显示时放大 */
}

.adou-tooltip-arrow-top {
  border-width: 9px 9px 0 9px;
  border-color: green transparent transparent transparent;
  bottom: -9px;
  left: 50%;
  transform: translateX(-50%);
}

.adou-tooltip-arrow-top-left,
.adou-tooltip-arrow-top-right {
  border-width: 9px 9px 0 9px;
  border-color: green transparent transparent transparent;
  bottom: -9px;
  transform: translateX(-50%);
}

.adou-tooltip-arrow-bottom {
  border-width: 0 9px 9px 9px;
  border-color: transparent transparent green transparent;
  top: -9px;
  left: 50%;
  transform: translateX(-50%);
}

.adou-tooltip-arrow-left,
.adou-tooltip-arrow-left-bottom {
  border-width: 9px 0 9px 9px;
  border-color: transparent transparent transparent green;
  right: -9px;
  top: 50%;
  transform: translateY(-50%);
}

.adou-tooltip-arrow-right {
  border-width: 9px 9px 9px 0;
  border-color: transparent green transparent transparent;
  left: -9px;
  top: 50%;
  transform: translateY(-50%);
}

.adou-tooltip-arrow-right-top,
.adou-tooltip-arrow-right-bottom {
  border-width: 9px 9px 9px 0;
  border-color: transparent green transparent transparent;
  transform: translateY(-50%);
}

.adou-tooltip-arrow-bottom-left,
.adou-tooltip-arrow-bottom-right {
  border-width: 0 9px 9px 9px;
  border-color: transparent transparent green transparent;
  top: -9px;
  transform: translateX(-50%);
}

.adou-tooltip-arrow-left-top {
  border-width: 9px 0 9px 9px;
  border-color: transparent transparent transparent green;
  transform: translateY(-50%);
}`, "",{"version":3,"sources":["webpack://./src/index.scss"],"names":[],"mappings":"AAAA,gBAAgB;AAAhB;EACI,kBAAA;EACA,kBAAA;AAEJ;AAAI;EACI,kBAAA;AAER;;AAEA;EACI,mBAAA;EACA,kBAAA;EACA,WAAA;EACA,iBAAA;EACA,kBAAA;EACA,eAAA;EACA,UAAA;EACA,mBAAA;EACA,YAAA;EACA,gEACI;EAEJ,sBAAA;EAEA,4BAAA;EACA,cAAA;AAFJ;AAII;EACI,kBAAA;EACA,QAAA;EACA,SAAA;EACA,mBAAA;AAFR;;AAMA;EACI,UAAA;EACA,UAAA;EACA,oBAAA;EACA,WAAA;AAHJ;;AAMA;;;EAGI,YAAA;EACA,SAAA;EACA,0CAAA;EACA,YAAA;AAHJ;AAKI;;;EACI,0CAAA;EACA,UAAA;AADR;;AAKA;;;EAGI,SAAA;EACA,SAAA;EACA,yCAAA;EACA,YAAA;AAFJ;AAII;;;EACI,yCAAA;EACA,UAAA;AAAR;;AAIA;;;EAGI,WAAA;EACA,QAAA;EACA,0CAAA;EACA,kBAAA;EACA,YAAA;AADJ;AAGI;;;EACI,0CAAA;EACA,UAAA;AACR;;AAGA;;;EAGI,QAAA;EACA,yCAAA;EACA,YAAA;AAAJ;AAEI;;;EACI,yCAAA;EACA,UAAA;AAER;;AAGA;EACI,2BAAA;EACA,uDAAA;EACA,YAAA;EACA,SAAA;EACA,2BAAA;AAAJ;;AAGA;;EAEI,2BAAA;EACA,uDAAA;EACA,YAAA;EACA,2BAAA;AAAJ;;AAGA;EACI,2BAAA;EACA,uDAAA;EACA,SAAA;EACA,SAAA;EACA,2BAAA;AAAJ;;AAGA;;EAEI,2BAAA;EACA,uDAAA;EACA,WAAA;EACA,QAAA;EACA,2BAAA;AAAJ;;AAGA;EACI,2BAAA;EACA,uDAAA;EACA,UAAA;EACA,QAAA;EACA,2BAAA;AAAJ;;AAIA;;EAEI,2BAAA;EACA,uDAAA;EACA,2BAAA;AADJ;;AAIA;;EAEI,2BAAA;EACA,uDAAA;EACA,SAAA;EACA,2BAAA;AADJ;;AAIA;EACI,2BAAA;EACA,uDAAA;EACA,2BAAA;AADJ","sourcesContent":[".adou-tooltip-wrapper {\r\n    position: relative;\r\n    width: fit-content;\r\n\r\n    .content {\r\n        width: fit-content;\r\n    }\r\n}\r\n\r\n.adou-tooltip {\r\n    height: fit-content;\r\n    position: absolute;\r\n    color: #fff;\r\n    padding: 5px 10px;\r\n    border-radius: 4px;\r\n    font-size: 14px;\r\n    opacity: 0;\r\n    transform: scale(0);\r\n    /* 初始状态为缩小 */\r\n    transition:\r\n        opacity 0.2s ease-in-out,\r\n        transform 0.2s ease-in-out;\r\n    /* 添加 transform 过渡效果 */\r\n    // pointer-events: none;\r\n    /* 防止鼠标事件穿透到 Tooltip 后面的元素 */\r\n    z-index: 10000;\r\n\r\n    .adou-tooltip-arrow {\r\n        position: absolute;\r\n        width: 0;\r\n        height: 0;\r\n        border-style: solid;\r\n    }\r\n}\r\n\r\n.show-tool-tip {\r\n    opacity: 1;\r\n    /* 显示时放大 */\r\n    pointer-events: auto;\r\n    /* 启用鼠标事件 */\r\n}\r\n\r\n.adou-tooltip-top,\r\n.adou-tooltip-top-left,\r\n.adou-tooltip-top-right {\r\n    bottom: 100%;\r\n    left: 50%;\r\n    transform: translate(-50%, -10px) scale(0);\r\n    /* 初始状态为缩小 */\r\n\r\n    &.show-tool-tip {\r\n        transform: translate(-50%, -10px) scale(1);\r\n        /* 显示时放大 */\r\n    }\r\n}\r\n\r\n.adou-tooltip-bottom,\r\n.adou-tooltip-bottom-left,\r\n.adou-tooltip-bottom-right {\r\n    top: 100%;\r\n    left: 50%;\r\n    transform: translate(-50%, 10px) scale(0);\r\n    /* 初始状态为缩小 */\r\n\r\n    &.show-tool-tip {\r\n        transform: translate(-50%, 10px) scale(1);\r\n        /* 显示时放大 */\r\n    }\r\n}\r\n\r\n.adou-tooltip-left,\r\n.adou-tooltip-left-top,\r\n.adou-tooltip-left-bottom {\r\n    right: 100%;\r\n    top: 50%;\r\n    transform: translate(-10px, -50%) scale(0);\r\n    width: fit-content;\r\n    /* 初始状态为缩小 */\r\n\r\n    &.show-tool-tip {\r\n        transform: translate(-10px, -50%) scale(1);\r\n        /* 显示时放大 */\r\n    }\r\n}\r\n\r\n.adou-tooltip-right,\r\n.adou-tooltip-right-top,\r\n.adou-tooltip-right-bottom {\r\n    top: 50%;\r\n    transform: translate(10px, -50%) scale(0);\r\n    /* 初始状态为缩小 */\r\n\r\n    &.show-tool-tip {\r\n        transform: translate(10px, -50%) scale(1);\r\n        /* 显示时放大 */\r\n    }\r\n}\r\n\r\n\r\n.adou-tooltip-arrow-top {\r\n    border-width: 9px 9px 0 9px;\r\n    border-color: green transparent transparent transparent;\r\n    bottom: -9px;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n}\r\n\r\n.adou-tooltip-arrow-top-left,\r\n.adou-tooltip-arrow-top-right {\r\n    border-width: 9px 9px 0 9px;\r\n    border-color: green transparent transparent transparent;\r\n    bottom: -9px;\r\n    transform: translateX(-50%);\r\n}\r\n\r\n.adou-tooltip-arrow-bottom {\r\n    border-width: 0 9px 9px 9px;\r\n    border-color: transparent transparent green transparent;\r\n    top: -9px;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n}\r\n\r\n.adou-tooltip-arrow-left,\r\n.adou-tooltip-arrow-left-bottom {\r\n    border-width: 9px 0 9px 9px;\r\n    border-color: transparent transparent transparent green;\r\n    right: -9px;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n}\r\n\r\n.adou-tooltip-arrow-right {\r\n    border-width: 9px 9px 9px 0;\r\n    border-color: transparent green transparent transparent;\r\n    left: -9px;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n}\r\n\r\n\r\n.adou-tooltip-arrow-right-top,\r\n.adou-tooltip-arrow-right-bottom {\r\n    border-width: 9px 9px 9px 0;\r\n    border-color: transparent green transparent transparent;\r\n    transform: translateY(-50%);\r\n}\r\n\r\n.adou-tooltip-arrow-bottom-left,\r\n.adou-tooltip-arrow-bottom-right {\r\n    border-width: 0 9px 9px 9px;\r\n    border-color: transparent transparent green transparent;\r\n    top: -9px;\r\n    transform: translateX(-50%);\r\n}\r\n\r\n.adou-tooltip-arrow-left-top {\r\n    border-width: 9px 0 9px 9px;\r\n    border-color: transparent transparent transparent green;\r\n    transform: translateY(-50%);\r\n}"],"sourceRoot":""}]);
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

/***/ }),

/***/ 3:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__3__;

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

;// CONCATENATED MODULE: ./src/utils/getAbsolutePosition.js
function getAbsolutePosition(domElement) {
  let left = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  let top = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  if (!parseInt(left)) {
    left = 0;
  } else {
    left = parseInt(left);
  }
  if (!parseInt(top)) {
    top = 0;
  } else {
    top = parseInt(top);
  }
  const box = domElement.getBoundingClientRect();
  const body = document.body;
  const docElem = document.documentElement;
  const scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop;
  const scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft;
  const clientTop = docElem.clientTop || body.clientTop || 0;
  const clientLeft = docElem.clientLeft || body.clientLeft || 0;
  const attr = {};
  attr.y = box.top + scrollTop - clientTop + top;
  attr.x = box.left + scrollLeft - clientLeft + left;
  attr.width = box.width;
  attr.height = box.height;
  return attr;
}
/* harmony default export */ const utils_getAbsolutePosition = (getAbsolutePosition);
// EXTERNAL MODULE: external {"root":"ReactDOM","commonjs2":"react-dom","commonjs":"react-dom","amd":"react-dom"}
var external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_ = __webpack_require__(3);
var external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_default = /*#__PURE__*/__webpack_require__.n(external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_);
;// CONCATENATED MODULE: ./src/index.tsx

 // 引入样式文件


const Tooltip = _ref => {
  var _text$trim;
  let {
    left,
    right,
    top,
    bottom,
    wrap = false,
    width,
    arrowOffsetPercent,
    wrapperFlex,
    mustShow,
    show = true,
    text,
    position = "top",
    children,
    tooltipBgc = "#333",
    tooltipFontColor,
    arrowBorderColor = "#333",
    wrapperClassname
  } = _ref;
  const [isShow, setIsShow] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false);
  const [isVisible, setIsVisible] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false); // 用来实现当鼠标进入提示区域可以让提示存在的效果
  const tooltipRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  // ！！！用来记录鼠标是否进入提示区域
  //       当鼠标离开内容区域的时候，去判断是否进入了提示区域，如果进入，则不隐藏提示文字
  const isEnterTooltipRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(false);
  const enterTimeoutRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  const [tooltipWidth, setTooltipWidth] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(0);
  const [tooltipHeight, setTooltipHeight] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(0);
  const contentRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  const [tooltipContentPosition, settooltipContentPosition] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)({});
  const handleMouseEnter = () => {
    // 进入的时候，如果存在定时器，也清除掉
    if (enterTimeoutRef.current) {
      clearTimeout(enterTimeoutRef.current);
    }
    enterTimeoutRef.current = setTimeout(() => {
      setIsShow(true);
      setTimeout(() => {
        setIsVisible(true);
      }, 50);
    }, 200); // 延迟100毫秒
  };
  const handleMouseLeave = () => {
    if (mustShow) return;
    if (enterTimeoutRef.current) {
      clearTimeout(enterTimeoutRef.current);
    }
    setTimeout(() => {
      if (!isEnterTooltipRef.current) {
        setIsVisible(false);
      }
    }, 200);
    setTimeout(() => {
      if (!isEnterTooltipRef.current) {
        setIsShow(false);
      }
    }, 300);
  };
  const handleClick = e => {
    e.stopPropagation(); // 阻止事件的冒泡
  };

  /**
   * 用来实现当鼠标进入提示区域可以让提示存在的效果
   */
  const handleMouseEnterTooltip = () => {
    isEnterTooltipRef.current = true;
    // 如果当前是显示状态才能设置isVisible为true，不然鼠标移到提示区域也会展示
    setIsVisible(true);
    setTimeout(() => {
      setIsShow(true);
    }, 400);
  };
  const handleMouseLeaveTooltip = () => {
    if (mustShow) return;
    isEnterTooltipRef.current = false;
    setTimeout(() => {
      setIsVisible(false);
    }, 200);
    setTimeout(() => {
      setIsShow(false);
    }, 300);
  };

  // 注意：定位完 tooltipContentPosition 和 contentRef 之后，内容是向两边撑开的
  // 所以需要计算一下 tooltipRef 的位置(- 是left，+ 是 right)
  const calcTooltipContentTopAndLeft = () => {
    var _tooltipRef$current, _contentRef$current, _tooltipRef$current2, _contentRef$current2, _tooltipRef$current3, _contentRef$current3;
    const verticalTop = tooltipContentPosition.y - ((_tooltipRef$current = tooltipRef.current) === null || _tooltipRef$current === void 0 ? void 0 : _tooltipRef$current.clientHeight) - 8 + "px";
    const verticalBottom = tooltipContentPosition.y + ((_contentRef$current = contentRef.current) === null || _contentRef$current === void 0 ? void 0 : _contentRef$current.clientHeight) + 5 + "px";
    const horizontalLeft = tooltipContentPosition.x - ((_tooltipRef$current2 = tooltipRef.current) === null || _tooltipRef$current2 === void 0 ? void 0 : _tooltipRef$current2.clientWidth) + "px";
    const horizontalTop = tooltipContentPosition.y + ((_contentRef$current2 = contentRef.current) === null || _contentRef$current2 === void 0 ? void 0 : _contentRef$current2.clientHeight) / 2 - ((_tooltipRef$current3 = tooltipRef.current) === null || _tooltipRef$current3 === void 0 ? void 0 : _tooltipRef$current3.clientHeight) / 2 + "px";
    const content = tooltipContentPosition.x + ((_contentRef$current3 = contentRef.current) === null || _contentRef$current3 === void 0 ? void 0 : _contentRef$current3.clientWidth) / 2 + "px";
    if (position === "top") {
      return {
        top: verticalTop,
        left: content
      };
    } else if (position === "top-right") {
      var _contentRef$current4, _tooltipRef$current4;
      return {
        top: verticalTop,
        left: tooltipContentPosition.x + ((_contentRef$current4 = contentRef.current) === null || _contentRef$current4 === void 0 ? void 0 : _contentRef$current4.clientWidth) / 2 + ((_tooltipRef$current4 = tooltipRef.current) === null || _tooltipRef$current4 === void 0 ? void 0 : _tooltipRef$current4.clientWidth) / 2 + "px"
      };
    } else if (position === "top-left") {
      var _contentRef$current5, _tooltipRef$current5;
      return {
        top: verticalTop,
        left: tooltipContentPosition.x + ((_contentRef$current5 = contentRef.current) === null || _contentRef$current5 === void 0 ? void 0 : _contentRef$current5.clientWidth) / 2 - ((_tooltipRef$current5 = tooltipRef.current) === null || _tooltipRef$current5 === void 0 ? void 0 : _tooltipRef$current5.clientWidth) / 2 + "px"
      };
    } else if (position === "bottom") {
      return {
        top: verticalBottom,
        left: content
      };
    } else if (position === "bottom-right") {
      var _tooltipRef$current6, _contentRef$current6;
      return {
        top: verticalBottom,
        left: tooltipContentPosition.x + ((_tooltipRef$current6 = tooltipRef.current) === null || _tooltipRef$current6 === void 0 ? void 0 : _tooltipRef$current6.clientWidth) / 2 + ((_contentRef$current6 = contentRef.current) === null || _contentRef$current6 === void 0 ? void 0 : _contentRef$current6.clientWidth) / 2 + "px"
      };
    } else if (position === "bottom-left") {
      var _contentRef$current7, _tooltipRef$current7;
      return {
        top: verticalBottom,
        left: tooltipContentPosition.x + ((_contentRef$current7 = contentRef.current) === null || _contentRef$current7 === void 0 ? void 0 : _contentRef$current7.clientWidth) / 2 - ((_tooltipRef$current7 = tooltipRef.current) === null || _tooltipRef$current7 === void 0 ? void 0 : _tooltipRef$current7.clientWidth) / 2 + "px"
      };
    } else if (position === "left") {
      var _contentRef$current8;
      return {
        top: tooltipContentPosition.y + ((_contentRef$current8 = contentRef.current) === null || _contentRef$current8 === void 0 ? void 0 : _contentRef$current8.clientHeight) / 2 + "px",
        left: horizontalLeft
      };
    } else if (position === "left-top") {
      return {
        top: horizontalTop,
        left: horizontalLeft
      };
    } else if (position === "left-bottom") {
      var _contentRef$current9, _tooltipRef$current8;
      return {
        top: tooltipContentPosition.y + ((_contentRef$current9 = contentRef.current) === null || _contentRef$current9 === void 0 ? void 0 : _contentRef$current9.clientHeight) / 2 + ((_tooltipRef$current8 = tooltipRef.current) === null || _tooltipRef$current8 === void 0 ? void 0 : _tooltipRef$current8.clientHeight) / 2 + "px",
        left: horizontalLeft
      };
    } else if (position === "right") {
      var _contentRef$current10, _contentRef$current11;
      return {
        top: tooltipContentPosition.y + ((_contentRef$current10 = contentRef.current) === null || _contentRef$current10 === void 0 ? void 0 : _contentRef$current10.clientHeight) / 2 + "px",
        left: tooltipContentPosition.x + ((_contentRef$current11 = contentRef.current) === null || _contentRef$current11 === void 0 ? void 0 : _contentRef$current11.clientWidth) + "px"
      };
    } else if (position === "right-top") {
      var _contentRef$current12;
      return {
        top: horizontalTop,
        left: tooltipContentPosition.x + ((_contentRef$current12 = contentRef.current) === null || _contentRef$current12 === void 0 ? void 0 : _contentRef$current12.clientWidth) + "px"
      };
    } else if (position === "right-bottom") {
      var _contentRef$current13, _tooltipRef$current9, _contentRef$current14;
      return {
        top: tooltipContentPosition.y + ((_contentRef$current13 = contentRef.current) === null || _contentRef$current13 === void 0 ? void 0 : _contentRef$current13.clientHeight) / 2 + ((_tooltipRef$current9 = tooltipRef.current) === null || _tooltipRef$current9 === void 0 ? void 0 : _tooltipRef$current9.clientHeight) / 2 + "px",
        left: tooltipContentPosition.x + ((_contentRef$current14 = contentRef.current) === null || _contentRef$current14 === void 0 ? void 0 : _contentRef$current14.clientWidth) + "px"
      };
    }
  };
  const calcTooltipArrowTopAndLeft = () => {
    var _contentRef$current15, _contentRef$current16;
    // top 和 bottom 的属性
    const commonArrowOfsset = "-8px";
    const horizontal = tooltipWidth * (arrowOffsetPercent || 0.2);
    const minHorizontal = ((_contentRef$current15 = contentRef.current) === null || _contentRef$current15 === void 0 ? void 0 : _contentRef$current15.clientWidth) / 4;
    const finalHorizontal = horizontal > minHorizontal ? minHorizontal : horizontal + "px";

    // left 和 right 的属性
    const vertival = tooltipHeight * (arrowOffsetPercent || 0.2);
    const minVertival = ((_contentRef$current16 = contentRef.current) === null || _contentRef$current16 === void 0 ? void 0 : _contentRef$current16.clientHeight) / 4;
    const finalVertival = vertival > minVertival ? minVertival : vertival + "px";
    if (position === "top") {
      return {
        bottom: commonArrowOfsset,
        left: "50%",
        "border-color": "".concat(arrowBorderColor, " transparent transparent transparent")
      };
    } else if (position === "top-left") {
      return {
        bottom: commonArrowOfsset,
        right: right || finalHorizontal,
        "border-color": "".concat(arrowBorderColor, " transparent transparent transparent")
      };
    } else if (position === "top-right") {
      return {
        bottom: commonArrowOfsset,
        left: left || finalHorizontal,
        "border-color": "".concat(arrowBorderColor, " transparent transparent transparent")
      };
    } else if (position === "bottom") {
      return {
        top: commonArrowOfsset,
        left: "50%",
        "border-color": "transparent transparent ".concat(arrowBorderColor, " transparent")
      };
    } else if (position === "bottom-right") {
      return {
        top: commonArrowOfsset,
        left: left || finalHorizontal,
        "border-color": "transparent transparent ".concat(arrowBorderColor, " transparent")
      };
    } else if (position === "bottom-left") {
      return {
        top: commonArrowOfsset,
        right: right || finalHorizontal,
        "border-color": "transparent transparent ".concat(arrowBorderColor, " transparent")
      };
    } else if (position === "left-top") {
      return {
        bottom: bottom || finalVertival,
        right: commonArrowOfsset,
        "border-color": "transparent transparent transparent ".concat(arrowBorderColor)
      };
    } else if (position === "left-bottom") {
      return {
        top: top || finalVertival,
        right: "-9px",
        "border-color": "transparent transparent transparent ".concat(arrowBorderColor)
      };
    } else if (position === "right") {
      return {
        top: "50%",
        left: commonArrowOfsset,
        "border-color": "transparent ".concat(arrowBorderColor, " transparent transparent")
      };
    } else if (position === "right-top") {
      return {
        bottom: bottom || finalVertival,
        left: commonArrowOfsset,
        "border-color": "transparent ".concat(arrowBorderColor, " transparent transparent")
      };
    } else if (position === "right-bottom") {
      return {
        top: top || finalVertival,
        left: commonArrowOfsset,
        "border-color": "transparent ".concat(arrowBorderColor, " transparent transparent")
      };
    }
  };
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (mustShow) {
      handleMouseEnter();
    } else {
      handleMouseLeave();
    }
  }, [mustShow]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (tooltipRef.current) {
      const tooltipElement = tooltipRef.current;
      setTooltipWidth(tooltipElement.offsetWidth);
      setTooltipHeight(tooltipElement.offsetHeight);
    }
    if (isShow) {
      const position = utils_getAbsolutePosition(contentRef.current, 0, 0);
      settooltipContentPosition(position);
    }
  }, [isShow, isVisible]);
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "adou-tooltip-wrapper ".concat(wrapperClassname || ""),
    style: {
      ...(wrapperFlex ? {
        flex: 1,
        display: "flex"
      } : {})
    }
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    ref: contentRef,
    className: "content",
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    style: {
      ...(wrapperFlex ? {
        flex: 1
      } : {})
    }
  }, children), (typeof text === "string" ? (text === null || text === void 0 || (_text$trim = text.trim) === null || _text$trim === void 0 || (_text$trim = _text$trim.call(text)) === null || _text$trim === void 0 ? void 0 : _text$trim.length) > 0 : text) && show && isShow && /*#__PURE__*/external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_default().createPortal( /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    ref: tooltipRef,
    onClick: handleClick,
    onMouseEnter: handleMouseEnterTooltip,
    onMouseLeave: handleMouseLeaveTooltip,
    className: "adou-tooltip ".concat(isVisible ? "show-tool-tip" : "", " adou-tooltip-").concat(position),
    style: {
      backgroundColor: tooltipBgc,
      color: tooltipFontColor,
      width,
      whiteSpace: wrap || width ? "normal" : "nowrap",
      position: "absolute",
      ...calcTooltipContentTopAndLeft()
    }
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    style: {
      ...calcTooltipArrowTopAndLeft()
    },
    className: "adou-tooltip-arrow adou-tooltip-arrow-".concat(position)
  }), text), document.body));
};
/* harmony default export */ const src_0 = (Tooltip);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});