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
.resizable-sidebar {
  position: relative;
  border-right: 2px solid #dee2e6;
  transition: width 0.25s ease;
  box-sizing: border-box;
  border-bottom: 1px solid #eee;
  /* 整体滚动条样式 */
  /* 滚动条轨道 */
  /* 滚动条滑块 */
  /* 滚动条滑块在悬停时的样式 */
}
.resizable-sidebar .toggle-btn {
  position: absolute;
  background: skyblue;
  backdrop-filter: saturate(180%) blur(10px);
  -webkit-backdrop-filter: saturate(180%) blur(10px);
  border-radius: 100%;
  height: 30px;
  width: 30px;
  z-index: 1;
  bottom: 1rem;
  right: -15px;
  bottom: 50%;
  transform: translateY(50%);
  box-shadow: var(--app-shadow);
  line-height: 30px;
  text-align: center;
  cursor: pointer;
}
.resizable-sidebar .content {
  height: 100%;
}
.resizable-sidebar ::-webkit-scrollbar {
  height: 4px;
  width: 4px;
  /* 设置滚动条的高度 */
}
.resizable-sidebar ::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 2px;
  /* 滚动条轨道的背景 */
}
.resizable-sidebar ::-webkit-scrollbar-thumb {
  background: #ccc;
  /* 滚动条滑块的颜色 */
  border-radius: 2px;
  /* 滚动条滑块的圆角 */
}
.resizable-sidebar ::-webkit-scrollbar-thumb:hover {
  background: #555;
  /* 滚动条滑块悬停时的颜色 */
}

.resizable-sidebar:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  /* 在悬停时添加阴影 */
}

.draging {
  border-right: 5px solid #007bff;
}

.resize-handle-bar {
  position: absolute;
  z-index: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 5px;
  cursor: ew-resize;
  background-color: #dee2e6;
  cursor: col-resize;
  transition: opacity 0.3s ease;
  /* 添加悬停动画效果 */
}

.resize-handle-bar:hover {
  opacity: 1;
}`, "",{"version":3,"sources":["webpack://./src/index.scss"],"names":[],"mappings":"AAAA,gBAAgB;AAAhB;EACE,kBAAA;EAEA,+BAAA;EACA,4BAAA;EACA,sBAAA;EACA,6BAAA;EA4BA,YAAA;EAOA,UAAA;EAOA,UAAA;EAQA,iBAAA;AA7CF;AAHE;EACE,kBAAA;EACA,mBAAA;EACA,0CAAA;EACA,kDAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,UAAA;EACA,YAAA;EACA,YAAA;EACA,WAAA;EACA,0BAAA;EACA,6BAAA;EACA,iBAAA;EACA,kBAAA;EAEA,eAAA;AAIJ;AADE;EACE,YAAA;AAGJ;AAGE;EACE,WAAA;EACA,UAAA;EACA,aAAA;AADJ;AAKE;EACE,mBAAA;EACA,kBAAA;EACA,aAAA;AAHJ;AAOE;EACE,gBAAA;EACA,aAAA;EACA,kBAAA;EACA,aAAA;AALJ;AASE;EACE,gBAAA;EACA,gBAAA;AAPJ;;AAWA;EACE,wCAAA;EACA,aAAA;AARF;;AAWA;EACE,+BAAA;AARF;;AAWA;EACE,kBAAA;EACA,UAAA;EACA,QAAA;EACA,MAAA;EACA,SAAA;EACA,UAAA;EACA,iBAAA;EACA,yBAAA;EACA,kBAAA;EACA,6BAAA;EACA,aAAA;AARF;;AAWA;EACE,UAAA;AARF","sourcesContent":[".resizable-sidebar {\r\n  position: relative;\r\n  // background-color: #f8f9fa;\r\n  border-right: 2px solid #dee2e6;\r\n  transition: width .25s ease;\r\n  box-sizing: border-box;\r\n  border-bottom: 1px solid #eee;\r\n\r\n  .toggle-btn {\r\n    position: absolute;\r\n    background: skyblue;\r\n    backdrop-filter: saturate(180%) blur(10px);\r\n    -webkit-backdrop-filter: saturate(180%) blur(10px);\r\n    border-radius: 100%;\r\n    height: 30px;\r\n    width: 30px;\r\n    z-index: 1;\r\n    bottom: 1rem;\r\n    right: -15px;\r\n    bottom: 50%;\r\n    transform: translateY(50%);\r\n    box-shadow: var(--app-shadow);\r\n    line-height: 30px;\r\n    text-align: center;\r\n    // transition: all 1s ease-in;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .content {\r\n    height: 100%;\r\n\r\n\r\n  }\r\n\r\n  /* 整体滚动条样式 */\r\n  ::-webkit-scrollbar {\r\n    height: 4px;\r\n    width: 4px;\r\n    /* 设置滚动条的高度 */\r\n  }\r\n\r\n  /* 滚动条轨道 */\r\n  ::-webkit-scrollbar-track {\r\n    background: #f1f1f1;\r\n    border-radius: 2px;\r\n    /* 滚动条轨道的背景 */\r\n  }\r\n\r\n  /* 滚动条滑块 */\r\n  ::-webkit-scrollbar-thumb {\r\n    background: #ccc;\r\n    /* 滚动条滑块的颜色 */\r\n    border-radius: 2px;\r\n    /* 滚动条滑块的圆角 */\r\n  }\r\n\r\n  /* 滚动条滑块在悬停时的样式 */\r\n  ::-webkit-scrollbar-thumb:hover {\r\n    background: #555;\r\n    /* 滚动条滑块悬停时的颜色 */\r\n  }\r\n}\r\n\r\n.resizable-sidebar:hover {\r\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\r\n  /* 在悬停时添加阴影 */\r\n}\r\n\r\n.draging {\r\n  border-right: 5px solid #007bff;\r\n}\r\n\r\n.resize-handle-bar {\r\n  position: absolute;\r\n  z-index: 0;\r\n  right: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n  width: 5px;\r\n  cursor: ew-resize;\r\n  background-color: #dee2e6;\r\n  cursor: col-resize;\r\n  transition: opacity 0.3s ease;\r\n  /* 添加悬停动画效果 */\r\n}\r\n\r\n.resize-handle-bar:hover {\r\n  opacity: 1;\r\n}"],"sourceRoot":""}]);
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

 // 自定义样式

const ResizableSidebar = _ref => {
  let {
    wrapperClsassName,
    wrapperStyle,
    showTggleBtnWhenNotExpanded = true,
    resizeableSliderbarRef,
    showToggleBtn = true,
    toggleBtnStyle,
    toggleBtnClassName,
    contentOverflow = true,
    contentFlex = false,
    initialWidth = "0px",
    initialHeight = "100%",
    minDragWidth = 0,
    minWidth = 50,
    maxWidth = "300px",
    children,
    onToggle
  } = _ref;
  const sidebarRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  const [isResizing, setIsResizing] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false);
  const [currentSidebarWidth, setCurrentSidebarWidth] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)("0"); // 最新宽度
  const [initialSideBarWidth, setInitialSideBarWidth] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(0); // 记录初始宽度
  const [initialSiderBarHeight, setInitialSiderBarHeight] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(initialHeight);
  const [isDragging, setIsDragging] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false);
  const [isExpanded, setIsExpanded] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false);
  const [calcMaxWidth, setCalcMaxWidth] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(maxWidth);
  const resizeableContainerRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)();
  const siderBarRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)();
  const toggleBtnRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    const handleMouseMove = event => {
      if (!isResizing) return;
      setCurrentSidebarWidth(event.clientX - sidebarRef.current.getBoundingClientRect().left);
    };
    const handleMouseUp = () => {
      setIsResizing(false);
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isResizing]);
  const toggleSidebar = () => {
    setCurrentSidebarWidth(
    // 这边直接用 minWidth 和 maxWidth 就行
    parseFloat(currentSidebarWidth) > minWidth ? minWidth + "px" : maxWidth); // 假设展开宽度为300
    const oldIsExpanded = isExpanded; // 记录当前展开状态
    onToggle && onToggle(!isExpanded);
    setIsExpanded(!oldIsExpanded);
  };
  const handleSliderBarMouseDown = e => {
    setIsDragging(true);
  };
  const handleDragStart = () => {
    // [_initialSideBarWidth, setInitialSideBarWidth]好像目前没用。。
    const _initialSideBarWidth = resizeableContainerRef.current.offsetWidth;
    setInitialSideBarWidth(_initialSideBarWidth);
  };
  const handleDrag = e => {
    e.preventDefault();
    const rect = resizeableContainerRef.current.getBoundingClientRect();
    const calcWidth = e.clientX - rect.left; // 计算当前鼠标的位置和元素距离浏览器左边位置的差来做新宽度
    if (calcWidth > parseFloat(calcMaxWidth)) {
      setCurrentSidebarWidth(calcMaxWidth);
    } else {
      setCurrentSidebarWidth(calcWidth + "px");
    }
  };
  const handleDragEnd = e => {
    const rect = resizeableContainerRef.current.getBoundingClientRect();
    const calcWidth = e.clientX - rect.left; // 计算当前鼠标的位置和元素距离浏览器左边位置的差来做新宽度
    console.log("calcWidth: ", calcWidth);
    e.preventDefault();
    if (calcWidth > parseFloat(calcMaxWidth)) {
      setCurrentSidebarWidth(calcMaxWidth);
    } else {
      setCurrentSidebarWidth(calcWidth + "px");
    }
    setIsDragging(false);
    setIsExpanded(!(parseFloat(currentSidebarWidth) > calcMaxWidth));
  };
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (typeof initialWidth === "string" ? parseFloat(initialWidth) : initialWidth) {
      setIsExpanded(true);
    }
  }, [initialWidth]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    // 延迟执行，因为父元素的内容可能是异步去获取的
    setTimeout(() => {
      var _resizeableContainerR;
      setInitialSiderBarHeight((_resizeableContainerR = resizeableContainerRef.current) === null || _resizeableContainerR === void 0 || (_resizeableContainerR = _resizeableContainerR.parentElement) === null || _resizeableContainerR === void 0 ? void 0 : _resizeableContainerR.offsetHeight);
    }, 1200);
  }, [resizeableContainerRef.current]);

  // 为第一次出现添加动画效果
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    setTimeout(() => {
      setCurrentSidebarWidth(initialWidth ? (typeof initialWidth === "string" ? parseFloat(initialWidth) // 将 initialWidth 转换为数字后 再比较
      : initialWidth) > parseFloat(maxWidth) ? maxWidth : initialWidth : 0);
    }, 100);
  }, []);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useImperativeHandle)(resizeableSliderbarRef, () => ({
    getExpandStatus: () => {
      return isExpanded;
    },
    toggleSidebar
  }), [isExpanded]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    setTimeout(() => {
      if (isExpanded && maxWidth.endsWith("%")) {
        setCalcMaxWidth(resizeableContainerRef.current.clientWidth);
      }
    }, 300);
  }, [maxWidth, isExpanded]);
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    ref: resizeableContainerRef,
    className: "resizable-sidebar ".concat(isDragging ? "draging" : "", " ").concat(wrapperClsassName ? wrapperClsassName : ""),
    style: {
      width: "".concat(currentSidebarWidth),
      height: initialHeight || initialSiderBarHeight + "px" || 0,
      paddingLeft: "5px",
      // overflow: currentSidebarWidth === maxWidth ? "auto" : "hidden",
      ...wrapperStyle
    }
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "content",
    style: {
      display: contentFlex ? "flex" : "",
      overflow: contentOverflow ? "auto" : ""
    }
  }, children), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    ref: siderBarRef,
    draggable: true,
    style: {
      opacity: 0,
      right: isDragging ? "-5px" : "-2px"
    },
    className: "resize-handle-bar",
    onMouseUp: handleDragEnd,
    onMouseDown: handleSliderBarMouseDown,
    onDrag: handleDrag,
    onDragEnd: handleDragEnd,
    onDragStart: handleDragStart
  }), (isExpanded ? (initialHeight > 0 || initialSiderBarHeight > 0) && showToggleBtn : showTggleBtnWhenNotExpanded) ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    ref: toggleBtnRef,
    className: "toggle-btn d-flex align-items-center justify-content-center hover-scale ".concat(toggleBtnClassName ? toggleBtnClassName : ""),
    onClick: toggleSidebar,
    style: {
      ...toggleBtnStyle
      /* ...(toggleBtnPosition?.right
        ? {
            right: isExpanded ? toggleBtnPosition.right : "12px",
            top: toggleBtnPosition.top,
          }
        : {}), */
    }
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("i", {
    className: "fa-solid text-white small ".concat(isExpanded ? "fa-angles-left" : "fa-angles-right" // 用 isExpanded 来判断按钮是展开还是收起
    )
  })) : ""));
};
/* harmony default export */ const src_0 = (ResizableSidebar);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});