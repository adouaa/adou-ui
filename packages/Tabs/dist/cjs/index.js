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
___CSS_LOADER_EXPORT___.push([module.id, `/* index.scss */
@keyframes slideInFromLeft {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slideOutToRight {
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
}
.slide-enter {
  animation: slideInFromLeft 0.5s forwards;
}

.slide-exit {
  animation: slideOutToRight 0.5s forwards;
}

/* styles.css */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.fade-enter {
  animation: fadeIn 0.5s forwards;
}

.fade-exit {
  animation: fadeOut 0.5s forwards;
}

.tabs-box .nav .nav-link {
  color: #000;
}
.tabs-box .tabs-header {
  display: flex;
  border-bottom: 1px solid #dcdfe6;
}
.tabs-box .tabs-header .tabs-header-item-box {
  padding: 0 15px;
}
.tabs-box .tabs-header .tabs-header-item-box .tabs-header-item {
  padding: 9px 0;
  margin-bottom: -1px;
  font-size: 14px;
  cursor: pointer;
}
.tabs-box .tabs-header .tabs-header-item-box.first {
  padding-left: 0px;
}
.tabs-box .tabs-header .tabs-header-item.active {
  border-bottom: 1px solid #409eff;
  color: #409eff;
  box-sizing: border-box;
}
.tabs-box .header-wrapper {
  position: relative;
}
.tabs-box .header-wrapper .extra-content {
  cursor: pointer;
}`, "",{"version":3,"sources":["webpack://./src/index.scss"],"names":[],"mappings":"AAAA,eAAA;AACA;EACI;IACI,4BAAA;IACA,UAAA;EACN;EAEE;IACI,wBAAA;IACA,UAAA;EAAN;AACF;AAGA;EACI;IACI,wBAAA;IACA,UAAA;EADN;EAIE;IACI,2BAAA;IACA,UAAA;EAFN;AACF;AAKA;EACI,wCAAA;AAHJ;;AAMA;EACI,wCAAA;AAHJ;;AAMA,eAAA;AACA;EACI;IACI,UAAA;EAHN;EAME;IACI,UAAA;EAJN;AACF;AAOA;EACI;IACI,UAAA;EALN;EAQE;IACI,UAAA;EANN;AACF;AASA;EACI,+BAAA;AAPJ;;AAUA;EACI,gCAAA;AAPJ;;AAaQ;EACI,WAAA;AAVZ;AAgBI;EACI,aAAA;EACA,gCAAA;AAdR;AAgBQ;EACI,eAAA;AAdZ;AAgBY;EACI,cAAA;EACA,mBAAA;EACA,eAAA;EACA,eAAA;AAdhB;AAkBQ;EACI,iBAAA;AAhBZ;AAmBQ;EACI,gCAAA;EACA,cAAA;EACA,sBAAA;AAjBZ;AAwBI;EACI,kBAAA;AAtBR;AAwBQ;EAEI,eAAA;AAvBZ","sourcesContent":["/* index.scss */\n@keyframes slideInFromLeft {\n    from {\n        transform: translateX(-100%);\n        opacity: 0;\n    }\n\n    to {\n        transform: translateX(0);\n        opacity: 1;\n    }\n}\n\n@keyframes slideOutToRight {\n    from {\n        transform: translateX(0);\n        opacity: 1;\n    }\n\n    to {\n        transform: translateX(100%);\n        opacity: 0;\n    }\n}\n\n.slide-enter {\n    animation: slideInFromLeft 0.5s forwards;\n}\n\n.slide-exit {\n    animation: slideOutToRight 0.5s forwards;\n}\n\n/* styles.css */\n@keyframes fadeIn {\n    from {\n        opacity: 0;\n    }\n\n    to {\n        opacity: 1;\n    }\n}\n\n@keyframes fadeOut {\n    from {\n        opacity: 1;\n    }\n\n    to {\n        opacity: 0;\n    }\n}\n\n.fade-enter {\n    animation: fadeIn 0.5s forwards;\n}\n\n.fade-exit {\n    animation: fadeOut 0.5s forwards;\n}\n\n\n.tabs-box {\n    .nav {\n        .nav-link {\n            color: #000;\n        }\n\n        .nav-link.active {}\n    }\n\n    .tabs-header {\n        display: flex;\n        border-bottom: 1px solid #dcdfe6;\n\n        .tabs-header-item-box {\n            padding: 0 15px;\n\n            .tabs-header-item {\n                padding: 9px 0;\n                margin-bottom: -1px;\n                font-size: 14px;\n                cursor: pointer;\n            }\n        }\n\n        .tabs-header-item-box.first {\n            padding-left: 0px;\n        }\n\n        .tabs-header-item.active {\n            border-bottom: 1px solid #409eff;\n            color: #409eff;\n            box-sizing: border-box;\n\n        }\n\n\n    }\n\n    .header-wrapper {\n        position: relative;\n\n        .extra-content {\n\n            cursor: pointer;\n        }\n    }\n}"],"sourceRoot":""}]);
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
  TabItem: () => (/* reexport */ src_TabItem),
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

;// CONCATENATED MODULE: ./src/TabItem/index.tsx

const TabItem = props => {
  const {
    exsternalClsaaName,
    prefixIcon,
    headerIcon,
    extraContent,
    label,
    url,
    children,
    active,
    contentPadding = "0px",
    clearOnChange
  } = props;
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "tab-item-wrapper"
    // 当 active为 true 时，设置高度为 100%，否则为 0，避免父组件设置了 contentHeight 时，影响到 隐藏的 tabItem 的高度
    ,
    style: {
      height: active ? "100%" : "0"
    }
  }, clearOnChange ? active && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "tab-item-content",
    style: {
      padding: contentPadding || "0px 10px",
      height: "100%"
    }
  }, children) :
  /*#__PURE__*/
  // clearOnChange为true，不进行组件的销毁和重建，直接使用 d-none来进行切换
  external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "".concat(active ? "" : "d-none"),
    style: {
      padding: contentPadding || "0px 10px"
    }
  }, children));
};
/* harmony default export */ const src_TabItem = (TabItem);
;// CONCATENATED MODULE: ./src/index.tsx




const Tabs = props => {
  const {
    showContent = true,
    commonTabItemHeaderExternalCls,
    tabRef,
    commonExtraContent,
    extraContentCls,
    contentHeight,
    showExtraContent,
    lineaGradient = "",
    children,
    activeIndex = 0,
    activeLabelColor = "#409eff",
    tabStyle = "bootstrap",
    contentPadding,
    clearOnChange = true,
    onLabelClick
  } = props;
  const [updateKey, setupdateKey] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(0);
  const [currentIndex, setCurrentIndex] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(activeIndex);
  const content = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)();
  const handleLabelClickFn = (index, itemInfo) => {
    setCurrentIndex(index);
    onLabelClick && onLabelClick(index, itemInfo);
  };
  const renderHeader = () => {
    const tabItems = [];
    external_root_React_commonjs2_react_commonjs_react_amd_react_default().Children.map(children, child => {
      tabItems.push(child);
    });
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, tabStyle === "common" ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
      className: "header-wrapper"
    }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
      className: "tabs-header mb-2  d-flex align-items-center"
    }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
      className: "tabs-header-content d-flex",
      style: {
        flex: 1
      }
    }, tabItems.map((child, index) => {
      var _child$propps, _child$props, _child$props2;
      if (!child) return;
      return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
        key: index
      }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
        className: "tabs-header-item-box ".concat(((_child$propps = child.propps) === null || _child$propps === void 0 ? void 0 : _child$propps.exsternalClsaaName) || commonTabItemHeaderExternalCls, " ").concat(index === 0 && "first")
      }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
        onClick: () => handleLabelClickFn(index, child),
        className: "tabs-header-item d-flex align-items-center  ".concat(currentIndex === index && "active")
      }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
        className: "label-icon me-1"
      }, child === null || child === void 0 || (_child$props = child.props) === null || _child$props === void 0 ? void 0 : _child$props.headerIcon), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
        className: "label-text"
      }, child === null || child === void 0 || (_child$props2 = child.props) === null || _child$props2 === void 0 ? void 0 : _child$props2.label))));
    })), commonExtraContent && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
      className: "common-extra-content"
    }, commonExtraContent), content.current && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
      className: "extra-content"
    }, content.current))) : /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
      className: "header-wrapper"
    }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
      className: "bootstrap-tabs-header d-flex align-items-center"
    }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("ul", {
      className: "nav nav-tabs mb-2",
      style: {
        flex: 1
      }
    }, tabItems.map((child, index) => {
      var _child$propps2, _child$props3, _child$props4;
      return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("li", {
        key: index,
        className: "nav-item d-flex mt-0",
        onClick: () => handleLabelClickFn(index, child)
      }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("a", {
        style: {
          // marginLeft: index === 0 ? "10px" : "", // 展示头部小尾巴
          color: index === currentIndex ? child.props.activeLabelColor || activeLabelColor : "",
          cursor: "pointer",
          ...(index === currentIndex ? {
            background: "linear-gradient(".concat(lineaGradient, ")")
          } : {})
        },
        className: "".concat(index === currentIndex ? "active" : "", " ").concat(((_child$propps2 = child.propps) === null || _child$propps2 === void 0 ? void 0 : _child$propps2.exsternalClsaaName) || commonTabItemHeaderExternalCls, " nav-link d-flex align-items-center"),
        "aria-current": "page"
      }, child.props.prefixIcon && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("i", {
        className: child.props.prefixIcon + " me-1"
      }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
        className: "label-icon me-1"
      }, child === null || child === void 0 || (_child$props3 = child.props) === null || _child$props3 === void 0 ? void 0 : _child$props3.headerIcon), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
        className: "label-text"
      }, child === null || child === void 0 || (_child$props4 = child.props) === null || _child$props4 === void 0 ? void 0 : _child$props4.label)));
    })), commonExtraContent && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
      className: "common-extra-content"
    }, commonExtraContent), content.current && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
      className: "extra-content"
    }, content.current))));
  };
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    // 因为extraContent是用ref保存的，
    // 所以为了在切换回来的时候重新渲染extraContent的内容，需要强制修改state来重新渲染页面
    setupdateKey(updateKey + 1);
  }, [currentIndex]);
  const renderContent = () => {
    const renderChildren = [];
    external_root_React_commonjs2_react_commonjs_react_amd_react_default().Children.map(children, (child, index) => {
      if (child) {
        if (index === currentIndex) {
          content.current = child.props.extraContent;
        }
        const enhancedChildren = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().cloneElement(child, {
          active: index === currentIndex,
          key: index,
          contentPadding,
          clearOnChange
        });
        renderChildren.push(enhancedChildren);
      }
    });
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
      className: "tab-content",
      style: {
        ...(contentHeight ? {
          height: contentHeight
        } : {})
      }
    }, renderChildren);
  };
  const goTo = index => {
    setCurrentIndex(index);
  };
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useImperativeHandle)(tabRef, () => ({
    goTo,
    getCurrentIndex: () => currentIndex
  }));
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "tabs-box" /*  style={{ height: "100%" }} */
  }, renderHeader(), showContent && renderContent()));
};
/* harmony default export */ const src_0 = (Tabs);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});