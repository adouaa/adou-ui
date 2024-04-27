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

/***/ 562:
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
.list-node-wrapper {
  color: #606266;
  font-size: 14px;
}
.list-node-wrapper .node-item .left-content {
  display: flex;
  align-items: center;
  /* display: inline-block; // 这个加上就会把这个盒子的宽度变成跟内容的宽度一样，而不会是根据父容器的宽度 */
  padding: 3px 20px 3px 14px;
  position: relative; /* 添加相对定位--好像没用 */
  min-width: 120px;
  cursor: pointer;
}
.list-node-wrapper .node-item .left-content:hover {
  background-color: #f6f6f6;
}
.list-node-wrapper .node-item .left-content.active {
  color: #fff;
  background-color: #2783d8;
}
.list-node-wrapper .node-item .left-content .tag1 {
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 6px;
  background-color: #f0f9eb;
  color: #6dc442;
  white-space: nowrap;
}
.list-node-wrapper .node-item .left-content .tag2 {
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 6px;
  background-color: #fef0f0;
  color: #f67878;
  white-space: nowrap;
}
.list-node-wrapper .node-item .left-content .icon {
  width: 8px;
  margin: 0 6px;
}
.list-node-wrapper .node-item .left-content .item-name {
  word-break: break-all;
}
.list-node-wrapper .node-item .left-content .right-content {
  padding: 0 5px;
  position: absolute;
  border-radius: 4px;
  top: 2px;
  right: 10px;
  color: #606266;
  background-color: #fff;
  z-index: 999;
}
.list-node-wrapper .node-item .left-content .right-content i {
  margin: 0 6px;
}
.list-node-wrapper .node-item .no-children {
  padding-left: 16px;
}
.list-node-wrapper .children {
  padding-left: 10px;
  max-height: 0; /* 初始状态下高度为0 */
  overflow-y: hidden; /* 隐藏溢出内容 */
}
.list-node-wrapper .children.expanded {
  overflow-y: clip;
  transition: max-height 2s ease; /* 添加过渡效果 */
  max-height: 1000px; /* 展开时高度自动适应内容 */
}`, "",{"version":3,"sources":["webpack://./src/ListNode/index.scss"],"names":[],"mappings":"AAAA,gBAAgB;AAAhB;EACI,cAAA;EACA,eAAA;AAEJ;AAAQ;EAEI,aAAA;EACA,mBAAA;EACA,oEAAA;EACA,0BAAA;EAEA,kBAAA,EAAA,iBAAA;EACA,gBAAA;EACA,eAAA;AAAZ;AACY;EACI,yBAAA;AAChB;AACY;EACI,WAAA;EACA,yBAAA;AAChB;AACY;EACI,eAAA;EACA,gBAAA;EACA,kBAAA;EACA,yBAAA;EACA,cAAA;EACA,mBAAA;AAChB;AACY;EACI,eAAA;EACA,gBAAA;EACA,kBAAA;EACA,yBAAA;EACA,cAAA;EACA,mBAAA;AAChB;AAEY;EACI,UAAA;EACA,aAAA;AAAhB;AAEY;EACI,qBAAA;AAAhB;AAEY;EACI,cAAA;EACA,kBAAA;EACA,kBAAA;EACA,QAAA;EACA,WAAA;EACA,cAAA;EACA,sBAAA;EACA,YAAA;AAAhB;AACgB;EACI,aAAA;AACpB;AAMQ;EACI,kBAAA;AAJZ;AAOI;EACI,kBAAA;EACA,aAAA,EAAA,cAAA;EACA,kBAAA,EAAA,WAAA;AALR;AASQ;EACI,gBAAA;EACA,8BAAA,EAAA,WAAA;EACA,kBAAA,EAAA,gBAAA;AAPZ","sourcesContent":[".list-node-wrapper {\r\n    color: #606266;\r\n    font-size: 14px;\r\n    .node-item {\r\n        .left-content {\r\n            // 使用 display 会出现 hover背景色和 active高亮色宽度比较短，但是没事。。\r\n            display: flex;\r\n            align-items: center;\r\n            /* display: inline-block; // 这个加上就会把这个盒子的宽度变成跟内容的宽度一样，而不会是根据父容器的宽度 */\r\n            padding: 3px 20px 3px 14px;\r\n            // white-space: wrap;\r\n            position: relative; /* 添加相对定位--好像没用 */\r\n            min-width: 120px;\r\n            cursor: pointer;\r\n            &:hover {\r\n                background-color: #f6f6f6;\r\n            }\r\n            &.active {\r\n                color: #fff;\r\n                background-color: #2783d8;\r\n            }\r\n            .tag1 {\r\n                font-size: 12px;\r\n                padding: 2px 6px;\r\n                border-radius: 6px;\r\n                background-color: #f0f9eb;\r\n                color: #6dc442;\r\n                white-space: nowrap;\r\n            }\r\n            .tag2 {\r\n                font-size: 12px;\r\n                padding: 2px 6px;\r\n                border-radius: 6px;\r\n                background-color: #fef0f0;\r\n                color: #f67878;\r\n                white-space: nowrap;\r\n\r\n            }\r\n            .icon {\r\n                width: 8px;\r\n                margin: 0 6px;\r\n            }\r\n            .item-name {\r\n                word-break: break-all;\r\n            }\r\n            .right-content {\r\n                padding: 0 5px;\r\n                position: absolute;\r\n                border-radius: 4px;\r\n                top: 2px;\r\n                right: 10px;\r\n                color: #606266;\r\n                background-color: #fff;\r\n                z-index: 999;\r\n                i {\r\n                    margin: 0 6px;\r\n                }\r\n            }\r\n        }\r\n        \r\n        .has-children {\r\n        }\r\n        .no-children {\r\n            padding-left: 16px;\r\n        }\r\n    }\r\n    .children {\r\n        padding-left: 10px;\r\n        max-height: 0; /* 初始状态下高度为0 */\r\n        overflow-y: hidden; /* 隐藏溢出内容 */\r\n        &.not-expand {\r\n            // transition: max-height .2s ease; 这个加上过度效果会出现点击的节点的内部闪现x轴滚动条\r\n        }\r\n        &.expanded {\r\n            overflow-y: clip; // 这句话加上就不会出现很多歌滚动条。。。\r\n            transition: max-height 2s ease; /* 添加过渡效果 */\r\n            max-height: 1000px; /* 展开时高度自动适应内容 */\r\n        }\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
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
  "default": () => (/* binding */ src)
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
// EXTERNAL MODULE: ../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/ListNode/index.scss
var ListNode = __webpack_require__(562);
;// CONCATENATED MODULE: ./src/ListNode/index.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(ListNode/* default */.A, options);




       /* harmony default export */ const src_ListNode = (ListNode/* default */.A && ListNode/* default */.A.locals ? ListNode/* default */.A.locals : undefined);

;// CONCATENATED MODULE: ./src/ListNode/index.tsx


const ListNode_ListNode = _ref => {
  let {
    showTag = false,
    children,
    wrap = true,
    node,
    isTree,
    showOptIcons = true,
    showAddIcon = true,
    showEditIcon = true,
    activeId,
    onToggle,
    onIconClick,
    onItemClick,
    onOptIconClick
  } = _ref;
  const [isExpanded, setIsExpanded] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false);
  const [isShowIcons, setIsShowIcons] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false);
  const handleToggle = () => {
    setIsExpanded(prev => !prev);
    onToggle && onToggle(node);
  };
  const handleItemClick = node => {
    onItemClick && onItemClick(node);
  };
  const handleIconClick = (node, e) => {
    e.stopPropagation();
    handleToggle();
    onIconClick && onIconClick(node);
  };
  const handleChildrenIconClick = node => {
    onIconClick && onIconClick(node);
  };
  const handleOptIconClick = (e, type, node) => {
    e.stopPropagation(); // 阻止事件冒泡
    onOptIconClick && onOptIconClick(type, node);
  };
  const handleChildrenOptIconClick = (type, node) => {
    onOptIconClick && onOptIconClick(type, node);
  };
  const renderTag = () => {
    return children.map(item => {
      if (item.props.id === node.showTag) {
        return item;
      }
    });
  };
  return (
    /*#__PURE__*/
    // style={{whiteSpace: `${wrap ? "wrap" : "nowrap"}`}} 
    external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
      className: "list-node-wrapper"
    }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
      className: "node-item"
    }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
      className: "left-content ".concat(Number(activeId) === Number(node.id) && "active"),
      onClick: () => handleItemClick(node),
      onMouseEnter: () => setIsShowIcons(true),
      onMouseLeave: () => setIsShowIcons(false)
    }, showTag && renderTag(), isTree && node.children && node.children.length > 0 && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("i", {
      onClick: e => handleIconClick(node, e),
      className: "icon fa fa-caret-".concat(isExpanded ? 'down' : 'right')
    }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
      onClick: () => handleItemClick(node),
      className: "item-name ".concat(node.children && node.children.length > 0 ? 'has-children' : 'no-children')
    }, node.name), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
      className: "right-content",
      style: {
        display: showOptIcons && isShowIcons ? 'block' : 'none'
      }
    }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("i", {
      style: {
        display: showAddIcon ? 'inline-block' : 'none'
      },
      className: "icon fa fa-plus",
      onClick: e => handleOptIconClick(e, 'add', node)
    }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("i", {
      style: {
        display: showEditIcon ? 'inline-block' : 'none'
      },
      className: "icon fa fa-pencil",
      onClick: e => handleOptIconClick(e, 'edit', node)
    }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("i", {
      className: "icon fa fa-trash",
      onClick: e => handleOptIconClick(e, 'delete', node)
    })))), node.children && node.children.length > 0 && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
      className: "children ".concat(isExpanded ? 'expanded' : 'not-expand'),
      style: {
        marginLeft: '1rem'
      }
    }, node.children.map(child =>
    /*#__PURE__*/
    // 这里别忘记也要像List父组件一样把 回调传递给 ListNode子组件，因为是递归，所以要这么做，
    // 具体传递的回调的函数需要的参数有哪些，就得参考父组件原来是怎么写的，也可以直接不写好像。。。
    // 或许只是为了写个占位，代表需要触发父组件的这个回调函数？
    // 如果是传递的属性的话，是需要写的,像父组件那样子写，用的参数是父组件传递过来的，类似父组件那样再写一遍
    external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(ListNode_ListNode, {
      showTag: showTag,
      children: children,
      showAddIcon: showAddIcon,
      showEditIcon: showEditIcon,
      showOptIcons: showOptIcons,
      activeId: activeId,
      onOptIconClick: (type, child) => handleChildrenOptIconClick(type, child),
      onIconClick: handleChildrenIconClick,
      onItemClick: handleItemClick,
      key: child.id,
      node: child,
      isTree: isTree,
      onToggle: onToggle
    }))))
  );
};
/* harmony default export */ const src_ListNode_0 = (ListNode_ListNode);
;// CONCATENATED MODULE: ./src/index.tsx
// List组件


const List = _ref => {
  let {
    showTag = false,
    children,
    wrap = true,
    data,
    isTree = true,
    showOptIcons = true,
    showAddIcon = true,
    showEditIcon = true,
    activeId,
    maxWidth = 300,
    maxHeight = 200,
    onToggle,
    onItemClick,
    onIconClick,
    onOptIconClick
  } = _ref;
  const [_activeId, set_ActiveId] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(activeId);
  const handleItemClick = node => {
    set_ActiveId(node.id);
    onItemClick && onItemClick(node);
  };
  const handleIconClick = node => {
    onIconClick && onIconClick(node);
  };
  const handleOptIconClick = (type, node) => {
    onOptIconClick && onOptIconClick(type, node);
  };
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    set_ActiveId(activeId);
  }, [activeId]);
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    style: {
      maxWidth: maxWidth + "px",
      maxHeight: maxHeight + "px",
      overflow: 'auto'
    }
  }, data && data.map(item => /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(src_ListNode_0, {
    showTag: showTag,
    wrap: wrap,
    showEditIcon: showEditIcon,
    showAddIcon: showAddIcon,
    activeId: _activeId,
    showOptIcons: showOptIcons,
    onOptIconClick: (type, node) => handleOptIconClick(type, node),
    onIconClick: handleIconClick,
    onItemClick: handleItemClick,
    key: item.id,
    node: item,
    isTree: isTree,
    onToggle: onToggle
  }, children)));
};
/* harmony default export */ const src = (List);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});