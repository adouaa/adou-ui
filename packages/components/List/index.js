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

/***/ 58:
/***/ ((module) => {

//

module.exports = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;
  if (ret !== void 0) {
    return !!ret;
  }
  if (objA === objB) {
    return true;
  }
  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }
  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) {
    return false;
  }
  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];
    if (!bHasOwnProperty(key)) {
      return false;
    }
    var valueA = objA[key];
    var valueB = objB[key];
    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
    if (ret === false || ret === void 0 && valueA !== valueB) {
      return false;
    }
  }
  return true;
};

/***/ }),

/***/ 562:
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
.list-node-wrapper {
  color: #606266;
  font-size: 14px;
}
.list-node-wrapper .node-item-list .left-content {
  display: flex;
  align-items: center;
  /* display: inline-block; // 这个加上就会把这个盒子的宽度变成跟内容的宽度一样，而不会是根据父容器的宽度 */
  padding: 3px 20px 3px 14px;
  position: relative;
  /* 添加相对定位--好像没用 */
  min-width: 120px;
  cursor: pointer;
}
.list-node-wrapper .node-item-list .left-content:hover {
  background-color: #f6f6f6;
}
.list-node-wrapper .node-item-list .left-content.active {
  color: #fff;
  background-color: #2783d8;
}
.list-node-wrapper .node-item-list .left-content .tag1 {
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 6px;
  background-color: #f0f9eb;
  color: #6dc442;
  white-space: nowrap;
}
.list-node-wrapper .node-item-list .left-content .tag2 {
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 6px;
  background-color: #fef0f0;
  color: #f67878;
  white-space: nowrap;
}
.list-node-wrapper .node-item-list .left-content .item-name {
  word-break: break-all;
}
.list-node-wrapper .node-item-list .left-content .right-content {
  padding: 1px;
  position: absolute;
  border-radius: 4px;
  right: 10px;
  color: #606266;
  background-color: #fff;
  z-index: 999;
}
.list-node-wrapper .node-item-list .left-content .right-content i {
  margin: 0 4px;
}
.list-node-wrapper .children {
  max-height: 0;
  /* 初始状态下高度为0 */
  overflow-y: hidden;
  /* 隐藏溢出内容 */
}
.list-node-wrapper .children.not-expand {
  transition: max-height 0.25s ease;
}
.list-node-wrapper .children.expanded {
  overflow-y: clip;
  transition: max-height 0.3s ease;
  /* 添加过渡效果 */
  max-height: 1000px;
  /* 展开时高度自动适应内容 */
}`, "",{"version":3,"sources":["webpack://./src/ListNode/index.scss"],"names":[],"mappings":"AAAA,gBAAgB;AAAhB;EACI,cAAA;EACA,eAAA;AAEJ;AACQ;EAEI,aAAA;EACA,mBAAA;EACA,oEAAA;EACA,0BAAA;EAEA,kBAAA;EACA,iBAAA;EACA,gBAAA;EACA,eAAA;AADZ;AAGY;EACI,yBAAA;AADhB;AAIY;EACI,WAAA;EACA,yBAAA;AAFhB;AAKY;EACI,eAAA;EACA,gBAAA;EACA,kBAAA;EACA,yBAAA;EACA,cAAA;EACA,mBAAA;AAHhB;AAMY;EACI,eAAA;EACA,gBAAA;EACA,kBAAA;EACA,yBAAA;EACA,cAAA;EACA,mBAAA;AAJhB;AAUY;EACI,qBAAA;AARhB;AAWY;EACI,YAAA;EACA,kBAAA;EACA,kBAAA;EAEA,WAAA;EACA,cAAA;EACA,sBAAA;EACA,YAAA;AAVhB;AAagB;EACI,aAAA;AAXpB;AAuBI;EAEI,aAAA;EACA,cAAA;EACA,kBAAA;EAEA,WAAA;AAvBR;AAwBQ;EACI,iCAAA;AAtBZ;AAyBQ;EACI,gBAAA;EACA,gCAAA;EACA,WAAA;EACA,kBAAA;EACA,gBAAA;AAvBZ","sourcesContent":[".list-node-wrapper {\r\n    color: #606266;\r\n    font-size: 14px;\r\n\r\n    .node-item-list {\r\n        .left-content {\r\n            // 使用 display 会出现 hover背景色和 active高亮色宽度比较短，但是没事。。\r\n            display: flex;\r\n            align-items: center;\r\n            /* display: inline-block; // 这个加上就会把这个盒子的宽度变成跟内容的宽度一样，而不会是根据父容器的宽度 */\r\n            padding: 3px 20px 3px 14px;\r\n            // white-space: wrap;\r\n            position: relative;\r\n            /* 添加相对定位--好像没用 */\r\n            min-width: 120px;\r\n            cursor: pointer;\r\n\r\n            &:hover {\r\n                background-color: #f6f6f6;\r\n            }\r\n\r\n            &.active {\r\n                color: #fff;\r\n                background-color: #2783d8;\r\n            }\r\n\r\n            .tag1 {\r\n                font-size: 12px;\r\n                padding: 2px 6px;\r\n                border-radius: 6px;\r\n                background-color: #f0f9eb;\r\n                color: #6dc442;\r\n                white-space: nowrap;\r\n            }\r\n\r\n            .tag2 {\r\n                font-size: 12px;\r\n                padding: 2px 6px;\r\n                border-radius: 6px;\r\n                background-color: #fef0f0;\r\n                color: #f67878;\r\n                white-space: nowrap;\r\n\r\n            }\r\n\r\n\r\n\r\n            .item-name {\r\n                word-break: break-all; // 树节点 的名字太长让它换行\r\n            }\r\n\r\n            .right-content {\r\n                padding: 1px;\r\n                position: absolute;\r\n                border-radius: 4px;\r\n                // top: 2px;\r\n                right: 10px;\r\n                color: #606266;\r\n                background-color: #fff;\r\n                z-index: 999;\r\n\r\n\r\n                i {\r\n                    margin: 0 4px;\r\n                }\r\n            }\r\n        }\r\n\r\n        .has-children {}\r\n\r\n        .no-children {\r\n            // padding-left: 10px;\r\n        }\r\n    }\r\n\r\n    .children {\r\n        // padding-left: 10px;\r\n        max-height: 0;\r\n        /* 初始状态下高度为0 */\r\n        overflow-y: hidden;\r\n\r\n        /* 隐藏溢出内容 */\r\n        &.not-expand {\r\n            transition: max-height .25s ease; //这个加上过度效果会出现点击的节点的内部闪现x轴滚动条\r\n        }\r\n\r\n        &.expanded {\r\n            overflow-y: clip; // 这句话加上就不会出现很多歌滚动条。。。\r\n            transition: max-height .3s ease;\r\n            /* 添加过渡效果 */\r\n            max-height: 1000px;\r\n            /* 展开时高度自动适应内容 */\r\n        }\r\n    }\r\n}"],"sourceRoot":""}]);
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

;// CONCATENATED MODULE: ../../node_modules/tslib/tslib.es6.mjs
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */

var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  }
  return __assign.apply(this, arguments);
}

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) { decorator(target, key, paramIndex); }
}

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
      var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
          if (result === void 0) continue;
          if (result === null || typeof result !== "object") throw new TypeError("Object expected");
          if (_ = accept(result.get)) descriptor.get = _;
          if (_ = accept(result.set)) descriptor.set = _;
          if (_ = accept(result.init)) initializers.unshift(_);
      }
      else if (_ = accept(result)) {
          if (kind === "field") initializers.unshift(_);
          else descriptor[key] = _;
      }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};

function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};

function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
};

function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                  if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                  if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                  if (t[2]) _.ops.pop();
                  _.trys.pop(); continue;
          }
          op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
      next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
      }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  }
  catch (error) { e = { error: error }; }
  finally {
      try {
          if (r && !r.done && (m = i["return"])) m.call(i);
      }
      finally { if (e) throw e.error; }
  }
  return ar;
}

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
  return ar;
}

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
  return r;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
  function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
  function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
  function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
  function fulfill(value) { resume("next", value); }
  function reject(value) { resume("throw", value); }
  function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
  function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
  function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
  function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
  return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
  o["default"] = v;
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
}

function __importDefault(mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}

function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose;
    if (async) {
        if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
        dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
        if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
        dispose = value[Symbol.dispose];
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    env.stack.push({ value: value, dispose: dispose, async: async });
  }
  else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}

var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  function next() {
    while (env.stack.length) {
      var rec = env.stack.pop();
      try {
        var result = rec.dispose && rec.dispose.call(rec.value);
        if (rec.async) return Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
      }
      catch (e) {
          fail(e);
      }
    }
    if (env.hasError) throw env.error;
  }
  return next();
}

/* harmony default export */ const tslib_es6 = ({
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __metadata,
  __awaiter,
  __generator,
  __createBinding,
  __exportStar,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources,
});

// EXTERNAL MODULE: ../../node_modules/shallowequal/index.js
var shallowequal = __webpack_require__(58);
var shallowequal_default = /*#__PURE__*/__webpack_require__.n(shallowequal);
;// CONCATENATED MODULE: ../../node_modules/stylis/src/Enum.js
var MS = '-ms-';
var MOZ = '-moz-';
var WEBKIT = '-webkit-';
var COMMENT = 'comm';
var Enum_RULESET = 'rule';
var DECLARATION = 'decl';
var PAGE = '@page';
var MEDIA = '@media';
var IMPORT = '@import';
var CHARSET = '@charset';
var VIEWPORT = '@viewport';
var SUPPORTS = '@supports';
var DOCUMENT = '@document';
var NAMESPACE = '@namespace';
var KEYFRAMES = '@keyframes';
var FONT_FACE = '@font-face';
var COUNTER_STYLE = '@counter-style';
var FONT_FEATURE_VALUES = '@font-feature-values';
var LAYER = '@layer';
var SCOPE = '@scope';
;// CONCATENATED MODULE: ../../node_modules/stylis/src/Utility.js
/**
 * @param {number}
 * @return {number}
 */
var abs = Math.abs;

/**
 * @param {number}
 * @return {string}
 */
var Utility_from = String.fromCharCode;

/**
 * @param {object}
 * @return {object}
 */
var Utility_assign = Object.assign;

/**
 * @param {string} value
 * @param {number} length
 * @return {number}
 */
function hash(value, length) {
  return Utility_charat(value, 0) ^ 45 ? (((length << 2 ^ Utility_charat(value, 0)) << 2 ^ Utility_charat(value, 1)) << 2 ^ Utility_charat(value, 2)) << 2 ^ Utility_charat(value, 3) : 0;
}

/**
 * @param {string} value
 * @return {string}
 */
function trim(value) {
  return value.trim();
}

/**
 * @param {string} value
 * @param {RegExp} pattern
 * @return {string?}
 */
function match(value, pattern) {
  return (value = pattern.exec(value)) ? value[0] : value;
}

/**
 * @param {string} value
 * @param {(string|RegExp)} pattern
 * @param {string} replacement
 * @return {string}
 */
function replace(value, pattern, replacement) {
  return value.replace(pattern, replacement);
}

/**
 * @param {string} value
 * @param {string} search
 * @param {number} position
 * @return {number}
 */
function indexof(value, search, position) {
  return value.indexOf(search, position);
}

/**
 * @param {string} value
 * @param {number} index
 * @return {number}
 */
function Utility_charat(value, index) {
  return value.charCodeAt(index) | 0;
}

/**
 * @param {string} value
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function Utility_substr(value, begin, end) {
  return value.slice(begin, end);
}

/**
 * @param {string} value
 * @return {number}
 */
function Utility_strlen(value) {
  return value.length;
}

/**
 * @param {any[]} value
 * @return {number}
 */
function Utility_sizeof(value) {
  return value.length;
}

/**
 * @param {any} value
 * @param {any[]} array
 * @return {any}
 */
function Utility_append(value, array) {
  return array.push(value), value;
}

/**
 * @param {string[]} array
 * @param {function} callback
 * @return {string}
 */
function Utility_combine(array, callback) {
  return array.map(callback).join('');
}

/**
 * @param {string[]} array
 * @param {RegExp} pattern
 * @return {string[]}
 */
function filter(array, pattern) {
  return array.filter(function (value) {
    return !match(value, pattern);
  });
}
;// CONCATENATED MODULE: ../../node_modules/stylis/src/Tokenizer.js

var line = 1;
var column = 1;
var Tokenizer_length = 0;
var position = 0;
var character = 0;
var characters = '';

/**
 * @param {string} value
 * @param {object | null} root
 * @param {object | null} parent
 * @param {string} type
 * @param {string[] | string} props
 * @param {object[] | string} children
 * @param {object[]} siblings
 * @param {number} length
 */
function node(value, root, parent, type, props, children, length, siblings) {
  return {
    value: value,
    root: root,
    parent: parent,
    type: type,
    props: props,
    children: children,
    line: line,
    column: column,
    length: length,
    return: '',
    siblings: siblings
  };
}

/**
 * @param {object} root
 * @param {object} props
 * @return {object}
 */
function copy(root, props) {
  return Utility_assign(node('', null, null, '', null, null, 0, root.siblings), root, {
    length: -root.length
  }, props);
}

/**
 * @param {object} root
 */
function lift(root) {
  while (root.root) root = copy(root.root, {
    children: [root]
  });
  Utility_append(root, root.siblings);
}

/**
 * @return {number}
 */
function Tokenizer_char() {
  return character;
}

/**
 * @return {number}
 */
function prev() {
  character = position > 0 ? Utility_charat(characters, --position) : 0;
  if (column--, character === 10) column = 1, line--;
  return character;
}

/**
 * @return {number}
 */
function next() {
  character = position < Tokenizer_length ? Utility_charat(characters, position++) : 0;
  if (column++, character === 10) column = 1, line++;
  return character;
}

/**
 * @return {number}
 */
function peek() {
  return Utility_charat(characters, position);
}

/**
 * @return {number}
 */
function caret() {
  return position;
}

/**
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function slice(begin, end) {
  return Utility_substr(characters, begin, end);
}

/**
 * @param {number} type
 * @return {number}
 */
function token(type) {
  switch (type) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}

/**
 * @param {string} value
 * @return {any[]}
 */
function alloc(value) {
  return line = column = 1, Tokenizer_length = Utility_strlen(characters = value), position = 0, [];
}

/**
 * @param {any} value
 * @return {any}
 */
function dealloc(value) {
  return characters = '', value;
}

/**
 * @param {number} type
 * @return {string}
 */
function delimit(type) {
  return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
}

/**
 * @param {string} value
 * @return {string[]}
 */
function Tokenizer_tokenize(value) {
  return dealloc(tokenizer(alloc(value)));
}

/**
 * @param {number} type
 * @return {string}
 */
function whitespace(type) {
  while (character = peek()) if (character < 33) next();else break;
  return token(type) > 2 || token(character) > 3 ? '' : ' ';
}

/**
 * @param {string[]} children
 * @return {string[]}
 */
function tokenizer(children) {
  while (next()) switch (token(character)) {
    case 0:
      append(identifier(position - 1), children);
      break;
    case 2:
      append(delimit(character), children);
      break;
    default:
      append(from(character), children);
  }
  return children;
}

/**
 * @param {number} index
 * @param {number} count
 * @return {string}
 */
function escaping(index, count) {
  while (--count && next())
  // not 0-9 A-F a-f
  if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97) break;
  return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32));
}

/**
 * @param {number} type
 * @return {number}
 */
function delimiter(type) {
  while (next()) switch (character) {
    // ] ) " '
    case type:
      return position;
    // " '
    case 34:
    case 39:
      if (type !== 34 && type !== 39) delimiter(character);
      break;
    // (
    case 40:
      if (type === 41) delimiter(type);
      break;
    // \
    case 92:
      next();
      break;
  }
  return position;
}

/**
 * @param {number} type
 * @param {number} index
 * @return {number}
 */
function commenter(type, index) {
  while (next())
  // //
  if (type + character === 47 + 10) break;
  // /*
  else if (type + character === 42 + 42 && peek() === 47) break;
  return '/*' + slice(index, position - 1) + '*' + Utility_from(type === 47 ? type : next());
}

/**
 * @param {number} index
 * @return {string}
 */
function identifier(index) {
  while (!token(peek())) next();
  return slice(index, position);
}
;// CONCATENATED MODULE: ../../node_modules/stylis/src/Serializer.js



/**
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function serialize(children, callback) {
  var output = '';
  for (var i = 0; i < children.length; i++) output += callback(children[i], i, children, callback) || '';
  return output;
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function stringify(element, index, children, callback) {
  switch (element.type) {
    case LAYER:
      if (element.children.length) break;
    case IMPORT:
    case DECLARATION:
      return element.return = element.return || element.value;
    case COMMENT:
      return '';
    case KEYFRAMES:
      return element.return = element.value + '{' + serialize(element.children, callback) + '}';
    case Enum_RULESET:
      if (!Utility_strlen(element.value = element.props.join(','))) return '';
  }
  return Utility_strlen(children = serialize(element.children, callback)) ? element.return = element.value + '{' + children + '}' : '';
}
;// CONCATENATED MODULE: ../../node_modules/stylis/src/Prefixer.js



/**
 * @param {string} value
 * @param {number} length
 * @param {object[]} children
 * @return {string}
 */
function prefix(value, length, children) {
  switch (hash(value, length)) {
    // color-adjust
    case 5103:
      return WEBKIT + 'print-' + value + value;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return WEBKIT + value + value;
    // tab-size
    case 4789:
      return MOZ + value + value;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return WEBKIT + value + MOZ + value + MS + value + value;
    // writing-mode
    case 5936:
      switch (Utility_charat(value, length + 11)) {
        // vertical-l(r)
        case 114:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'tb') + value;
        // vertical-r(l)
        case 108:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'tb-rl') + value;
        // horizontal(-)tb
        case 45:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'lr') + value;
        // default: fallthrough to below
      }
    // flex, flex-direction, scroll-snap-type, writing-mode
    case 6828:
    case 4268:
    case 2903:
      return WEBKIT + value + MS + value + value;
    // order
    case 6165:
      return WEBKIT + value + MS + 'flex-' + value + value;
    // align-items
    case 5187:
      return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + 'box-$1$2' + MS + 'flex-$1$2') + value;
    // align-self
    case 5443:
      return WEBKIT + value + MS + 'flex-item-' + replace(value, /flex-|-self/g, '') + (!match(value, /flex-|baseline/) ? MS + 'grid-row-' + replace(value, /flex-|-self/g, '') : '') + value;
    // align-content
    case 4675:
      return WEBKIT + value + MS + 'flex-line-pack' + replace(value, /align-content|flex-|-self/g, '') + value;
    // flex-shrink
    case 5548:
      return WEBKIT + value + MS + replace(value, 'shrink', 'negative') + value;
    // flex-basis
    case 5292:
      return WEBKIT + value + MS + replace(value, 'basis', 'preferred-size') + value;
    // flex-grow
    case 6060:
      return WEBKIT + 'box-' + replace(value, '-grow', '') + WEBKIT + value + MS + replace(value, 'grow', 'positive') + value;
    // transition
    case 4554:
      return WEBKIT + replace(value, /([^-])(transform)/g, '$1' + WEBKIT + '$2') + value;
    // cursor
    case 6187:
      return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + '$1'), /(image-set)/, WEBKIT + '$1'), value, '') + value;
    // background, background-image
    case 5495:
    case 3959:
      return replace(value, /(image-set\([^]*)/, WEBKIT + '$1' + '$`$1');
    // justify-content
    case 4968:
      return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + 'box-pack:$3' + MS + 'flex-pack:$3'), /s.+-b[^;]+/, 'justify') + WEBKIT + value + value;
    // justify-self
    case 4200:
      if (!match(value, /flex-|baseline/)) return MS + 'grid-column-align' + Utility_substr(value, length) + value;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return MS + replace(value, 'template-', '') + value;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      if (children && children.some(function (element, index) {
        return length = index, match(element.props, /grid-\w+-end/);
      })) {
        return ~indexof(value + (children = children[length].value), 'span', 0) ? value : MS + replace(value, '-start', '') + value + MS + 'grid-row-span:' + (~indexof(children, 'span', 0) ? match(children, /\d+/) : +match(children, /\d+/) - +match(value, /\d+/)) + ';';
      }
      return MS + replace(value, '-start', '') + value;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return children && children.some(function (element) {
        return match(element.props, /grid-\w+-start/);
      }) ? value : MS + replace(replace(value, '-end', '-span'), 'span ', '') + value;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return replace(value, /(.+)-inline(.+)/, WEBKIT + '$1$2') + value;
    // (min|max)?(width|height|inline-size|block-size)
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      // stretch, max-content, min-content, fill-available
      if (Utility_strlen(value) - 1 - length > 6) switch (Utility_charat(value, length + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          // -
          if (Utility_charat(value, length + 4) !== 45) break;
        // (f)ill-available, (f)it-content
        case 102:
          return replace(value, /(.+:)(.+)-([^]+)/, '$1' + WEBKIT + '$2-$3' + '$1' + MOZ + (Utility_charat(value, length + 3) == 108 ? '$3' : '$2-$3')) + value;
        // (s)tretch
        case 115:
          return ~indexof(value, 'stretch', 0) ? prefix(replace(value, 'stretch', 'fill-available'), length, children) + value : value;
      }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return replace(value, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function (_, a, b, c, d, e, f) {
        return MS + a + ':' + b + f + (c ? MS + a + '-span:' + (d ? e : +e - +b) + f : '') + value;
      });
    // position: sticky
    case 4949:
      // stick(y)?
      if (Utility_charat(value, length + 6) === 121) return replace(value, ':', ':' + WEBKIT) + value;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch (Utility_charat(value, Utility_charat(value, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return replace(value, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, '$1' + WEBKIT + (Utility_charat(value, 14) === 45 ? 'inline-' : '') + 'box$3' + '$1' + WEBKIT + '$2$3' + '$1' + MS + '$2box$3') + value;
        // (inline-)?gri(d)
        case 100:
          return replace(value, ':', ':' + MS) + value;
      }
      break;
    // scroll-margin, scroll-margin-(top|right|bottom|left)
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return replace(value, 'scroll-', 'scroll-snap-') + value;
  }
  return value;
}
;// CONCATENATED MODULE: ../../node_modules/stylis/src/Middleware.js






/**
 * @param {function[]} collection
 * @return {function}
 */
function middleware(collection) {
  var length = Utility_sizeof(collection);
  return function (element, index, children, callback) {
    var output = '';
    for (var i = 0; i < length; i++) output += collection[i](element, index, children, callback) || '';
    return output;
  };
}

/**
 * @param {function} callback
 * @return {function}
 */
function rulesheet(callback) {
  return function (element) {
    if (!element.root) if (element = element.return) callback(element);
  };
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 * @param {function} callback
 */
function prefixer(element, index, children, callback) {
  if (element.length > -1) if (!element.return) switch (element.type) {
    case DECLARATION:
      element.return = prefix(element.value, element.length, children);
      return;
    case KEYFRAMES:
      return serialize([copy(element, {
        value: replace(element.value, '@', '@' + WEBKIT)
      })], callback);
    case Enum_RULESET:
      if (element.length) return Utility_combine(children = element.props, function (value) {
        switch (match(value, callback = /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ':read-only':
          case ':read-write':
            lift(copy(element, {
              props: [replace(value, /:(read-\w+)/, ':' + MOZ + '$1')]
            }));
            lift(copy(element, {
              props: [value]
            }));
            Utility_assign(element, {
              props: filter(children, callback)
            });
            break;
          // :placeholder
          case '::placeholder':
            lift(copy(element, {
              props: [replace(value, /:(plac\w+)/, ':' + WEBKIT + 'input-$1')]
            }));
            lift(copy(element, {
              props: [replace(value, /:(plac\w+)/, ':' + MOZ + '$1')]
            }));
            lift(copy(element, {
              props: [replace(value, /:(plac\w+)/, MS + 'input-$1')]
            }));
            lift(copy(element, {
              props: [value]
            }));
            Utility_assign(element, {
              props: filter(children, callback)
            });
            break;
        }
        return '';
      });
  }
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 */
function namespace(element) {
  switch (element.type) {
    case RULESET:
      element.props = element.props.map(function (value) {
        return combine(tokenize(value), function (value, index, children) {
          switch (charat(value, 0)) {
            // \f
            case 12:
              return substr(value, 1, strlen(value));
            // \0 ( + > ~
            case 0:
            case 40:
            case 43:
            case 62:
            case 126:
              return value;
            // :
            case 58:
              if (children[++index] === 'global') children[index] = '', children[++index] = '\f' + substr(children[index], index = 1, -1);
            // \s
            case 32:
              return index === 1 ? '' : value;
            default:
              switch (index) {
                case 0:
                  element = value;
                  return sizeof(children) > 1 ? '' : value;
                case index = sizeof(children) - 1:
                case 2:
                  return index === 2 ? value + element + element : value + element;
                default:
                  return value;
              }
          }
        });
      });
  }
}
;// CONCATENATED MODULE: ../../node_modules/stylis/src/Parser.js




/**
 * @param {string} value
 * @return {object[]}
 */
function compile(value) {
  return dealloc(parse('', null, null, null, [''], value = alloc(value), 0, [0], value));
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {string[]} rule
 * @param {string[]} rules
 * @param {string[]} rulesets
 * @param {number[]} pseudo
 * @param {number[]} points
 * @param {string[]} declarations
 * @return {object}
 */
function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
  var index = 0;
  var offset = 0;
  var length = pseudo;
  var atrule = 0;
  var property = 0;
  var previous = 0;
  var variable = 1;
  var scanning = 1;
  var ampersand = 1;
  var character = 0;
  var type = '';
  var props = rules;
  var children = rulesets;
  var reference = rule;
  var characters = type;
  while (scanning) switch (previous = character, character = next()) {
    // (
    case 40:
      if (previous != 108 && Utility_charat(characters, length - 1) == 58) {
        if (indexof(characters += replace(delimit(character), '&', '&\f'), '&\f', abs(index ? points[index - 1] : 0)) != -1) ampersand = -1;
        break;
      }
    // " ' [
    case 34:
    case 39:
    case 91:
      characters += delimit(character);
      break;
    // \t \n \r \s
    case 9:
    case 10:
    case 13:
    case 32:
      characters += whitespace(previous);
      break;
    // \
    case 92:
      characters += escaping(caret() - 1, 7);
      continue;
    // /
    case 47:
      switch (peek()) {
        case 42:
        case 47:
          Utility_append(comment(commenter(next(), caret()), root, parent, declarations), declarations);
          break;
        default:
          characters += '/';
      }
      break;
    // {
    case 123 * variable:
      points[index++] = Utility_strlen(characters) * ampersand;
    // } ; \0
    case 125 * variable:
    case 59:
    case 0:
      switch (character) {
        // \0 }
        case 0:
        case 125:
          scanning = 0;
        // ;
        case 59 + offset:
          if (ampersand == -1) characters = replace(characters, /\f/g, '');
          if (property > 0 && Utility_strlen(characters) - length) Utility_append(property > 32 ? declaration(characters + ';', rule, parent, length - 1, declarations) : declaration(replace(characters, ' ', '') + ';', rule, parent, length - 2, declarations), declarations);
          break;
        // @ ;
        case 59:
          characters += ';';
        // { rule/at-rule
        default:
          Utility_append(reference = ruleset(characters, root, parent, index, offset, rules, points, type, props = [], children = [], length, rulesets), rulesets);
          if (character === 123) if (offset === 0) parse(characters, root, reference, reference, props, rulesets, length, points, children);else switch (atrule === 99 && Utility_charat(characters, 3) === 110 ? 100 : atrule) {
            // d l m s
            case 100:
            case 108:
            case 109:
            case 115:
              parse(value, reference, reference, rule && Utility_append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length, children), children), rules, children, length, points, rule ? props : children);
              break;
            default:
              parse(characters, reference, reference, reference, [''], children, 0, points, children);
          }
      }
      index = offset = property = 0, variable = ampersand = 1, type = characters = '', length = pseudo;
      break;
    // :
    case 58:
      length = 1 + Utility_strlen(characters), property = previous;
    default:
      if (variable < 1) if (character == 123) --variable;else if (character == 125 && variable++ == 0 && prev() == 125) continue;
      switch (characters += Utility_from(character), character * variable) {
        // &
        case 38:
          ampersand = offset > 0 ? 1 : (characters += '\f', -1);
          break;
        // ,
        case 44:
          points[index++] = (Utility_strlen(characters) - 1) * ampersand, ampersand = 1;
          break;
        // @
        case 64:
          // -
          if (peek() === 45) characters += delimit(next());
          atrule = peek(), offset = length = Utility_strlen(type = characters += identifier(caret())), character++;
          break;
        // -
        case 45:
          if (previous === 45 && Utility_strlen(characters) == 2) variable = 0;
      }
  }
  return rulesets;
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} index
 * @param {number} offset
 * @param {string[]} rules
 * @param {number[]} points
 * @param {string} type
 * @param {string[]} props
 * @param {string[]} children
 * @param {number} length
 * @param {object[]} siblings
 * @return {object}
 */
function ruleset(value, root, parent, index, offset, rules, points, type, props, children, length, siblings) {
  var post = offset - 1;
  var rule = offset === 0 ? rules : [''];
  var size = Utility_sizeof(rule);
  for (var i = 0, j = 0, k = 0; i < index; ++i) for (var x = 0, y = Utility_substr(value, post + 1, post = abs(j = points[i])), z = value; x < size; ++x) if (z = trim(j > 0 ? rule[x] + ' ' + y : replace(y, /&\f/g, rule[x]))) props[k++] = z;
  return node(value, root, parent, offset === 0 ? Enum_RULESET : type, props, children, length, siblings);
}

/**
 * @param {number} value
 * @param {object} root
 * @param {object?} parent
 * @param {object[]} siblings
 * @return {object}
 */
function comment(value, root, parent, siblings) {
  return node(value, root, parent, COMMENT, Utility_from(Tokenizer_char()), Utility_substr(value, 2, -2), 0, siblings);
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} length
 * @param {object[]} siblings
 * @return {object}
 */
function declaration(value, root, parent, length, siblings) {
  return node(value, root, parent, DECLARATION, Utility_substr(value, 0, length), Utility_substr(value, length + 1, -1), length, siblings);
}
;// CONCATENATED MODULE: ../../node_modules/@emotion/unitless/dist/emotion-unitless.esm.js
var unitlessKeys = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

;// CONCATENATED MODULE: ../../node_modules/styled-components/dist/styled-components.browser.esm.js






var f = "undefined" != typeof process && void 0 !== process.env && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled",
  m = "active",
  y = "data-styled-version",
  v = "6.1.13",
  g = "/*!sc*/\n",
  S = "undefined" != typeof window && "HTMLElement" in window,
  w = Boolean("boolean" == typeof SC_DISABLE_SPEEDY ? SC_DISABLE_SPEEDY : "undefined" != typeof process && void 0 !== process.env && void 0 !== process.env.REACT_APP_SC_DISABLE_SPEEDY && "" !== process.env.REACT_APP_SC_DISABLE_SPEEDY ? "false" !== process.env.REACT_APP_SC_DISABLE_SPEEDY && process.env.REACT_APP_SC_DISABLE_SPEEDY : "undefined" != typeof process && void 0 !== process.env && void 0 !== process.env.SC_DISABLE_SPEEDY && "" !== process.env.SC_DISABLE_SPEEDY ? "false" !== process.env.SC_DISABLE_SPEEDY && process.env.SC_DISABLE_SPEEDY : "production" !== "production"),
  b = {},
  E = /invalid hook call/i,
  N = new Set(),
  P = function (t, n) {
    if (false) { var a, o, s, i; }
  },
  _ = Object.freeze([]),
  C = Object.freeze({});
function I(e, t, n) {
  return void 0 === n && (n = C), e.theme !== n.theme && e.theme || t || n.theme;
}
var A = new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]),
  O = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  D = /(^-|-$)/g;
function R(e) {
  return e.replace(O, "-").replace(D, "");
}
var T = /(a)(d)/gi,
  k = 52,
  j = function (e) {
    return String.fromCharCode(e + (e > 25 ? 39 : 97));
  };
function x(e) {
  var t,
    n = "";
  for (t = Math.abs(e); t > k; t = t / k | 0) n = j(t % k) + n;
  return (j(t % k) + n).replace(T, "$1-$2");
}
var V,
  F = 5381,
  M = function (e, t) {
    for (var n = t.length; n;) e = 33 * e ^ t.charCodeAt(--n);
    return e;
  },
  z = function (e) {
    return M(F, e);
  };
function $(e) {
  return x(z(e) >>> 0);
}
function B(e) {
  return  false || e.displayName || e.name || "Component";
}
function L(e) {
  return "string" == typeof e && ( true || 0);
}
var G = "function" == typeof Symbol && Symbol.for,
  Y = G ? Symbol.for("react.memo") : 60115,
  W = G ? Symbol.for("react.forward_ref") : 60112,
  q = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0
  },
  H = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0
  },
  U = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
  },
  J = ((V = {})[W] = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
  }, V[Y] = U, V);
function X(e) {
  return ("type" in (t = e) && t.type.$$typeof) === Y ? U : "$$typeof" in e ? J[e.$$typeof] : q;
  var t;
}
var Z = Object.defineProperty,
  K = Object.getOwnPropertyNames,
  Q = Object.getOwnPropertySymbols,
  ee = Object.getOwnPropertyDescriptor,
  te = Object.getPrototypeOf,
  ne = Object.prototype;
function oe(e, t, n) {
  if ("string" != typeof t) {
    if (ne) {
      var o = te(t);
      o && o !== ne && oe(e, o, n);
    }
    var r = K(t);
    Q && (r = r.concat(Q(t)));
    for (var s = X(e), i = X(t), a = 0; a < r.length; ++a) {
      var c = r[a];
      if (!(c in H || n && n[c] || i && c in i || s && c in s)) {
        var l = ee(t, c);
        try {
          Z(e, c, l);
        } catch (e) {}
      }
    }
  }
  return e;
}
function re(e) {
  return "function" == typeof e;
}
function se(e) {
  return "object" == typeof e && "styledComponentId" in e;
}
function ie(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function ae(e, t) {
  if (0 === e.length) return "";
  for (var n = e[0], o = 1; o < e.length; o++) n += t ? t + e[o] : e[o];
  return n;
}
function ce(e) {
  return null !== e && "object" == typeof e && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function le(e, t, n) {
  if (void 0 === n && (n = !1), !n && !ce(e) && !Array.isArray(e)) return t;
  if (Array.isArray(t)) for (var o = 0; o < t.length; o++) e[o] = le(e[o], t[o]);else if (ce(t)) for (var o in t) e[o] = le(e[o], t[o]);
  return e;
}
function ue(e, t) {
  Object.defineProperty(e, "toString", {
    value: t
  });
}
var pe =  false ? 0 : {};
function de() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  for (var n = e[0], o = [], r = 1, s = e.length; r < s; r += 1) o.push(e[r]);
  return o.forEach(function (e) {
    n = n.replace(/%[a-z]/, e);
  }), n;
}
function he(t) {
  for (var n = [], o = 1; o < arguments.length; o++) n[o - 1] = arguments[o];
  return  true ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t, " for more information.").concat(n.length > 0 ? " Args: ".concat(n.join(", ")) : "")) : 0;
}
var fe = function () {
    function e(e) {
      this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e;
    }
    return e.prototype.indexOfGroup = function (e) {
      for (var t = 0, n = 0; n < e; n++) t += this.groupSizes[n];
      return t;
    }, e.prototype.insertRules = function (e, t) {
      if (e >= this.groupSizes.length) {
        for (var n = this.groupSizes, o = n.length, r = o; e >= r;) if ((r <<= 1) < 0) throw he(16, "".concat(e));
        this.groupSizes = new Uint32Array(r), this.groupSizes.set(n), this.length = r;
        for (var s = o; s < r; s++) this.groupSizes[s] = 0;
      }
      for (var i = this.indexOfGroup(e + 1), a = (s = 0, t.length); s < a; s++) this.tag.insertRule(i, t[s]) && (this.groupSizes[e]++, i++);
    }, e.prototype.clearGroup = function (e) {
      if (e < this.length) {
        var t = this.groupSizes[e],
          n = this.indexOfGroup(e),
          o = n + t;
        this.groupSizes[e] = 0;
        for (var r = n; r < o; r++) this.tag.deleteRule(n);
      }
    }, e.prototype.getGroup = function (e) {
      var t = "";
      if (e >= this.length || 0 === this.groupSizes[e]) return t;
      for (var n = this.groupSizes[e], o = this.indexOfGroup(e), r = o + n, s = o; s < r; s++) t += "".concat(this.tag.getRule(s)).concat(g);
      return t;
    }, e;
  }(),
  me = (/* unused pure expression or super */ null && (1 << 30)),
  ye = new Map(),
  ve = new Map(),
  ge = 1,
  Se = function (e) {
    if (ye.has(e)) return ye.get(e);
    for (; ve.has(ge);) ge++;
    var t = ge++;
    if (false) {}
    return ye.set(e, t), ve.set(t, e), t;
  },
  we = function (e, t) {
    ge = t + 1, ye.set(e, t), ve.set(t, e);
  },
  be = "style[".concat(f, "][").concat(y, '="').concat(v, '"]'),
  Ee = new RegExp("^".concat(f, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),
  Ne = function (e, t, n) {
    for (var o, r = n.split(","), s = 0, i = r.length; s < i; s++) (o = r[s]) && e.registerName(t, o);
  },
  Pe = function (e, t) {
    for (var n, o = (null !== (n = t.textContent) && void 0 !== n ? n : "").split(g), r = [], s = 0, i = o.length; s < i; s++) {
      var a = o[s].trim();
      if (a) {
        var c = a.match(Ee);
        if (c) {
          var l = 0 | parseInt(c[1], 10),
            u = c[2];
          0 !== l && (we(u, l), Ne(e, u, c[3]), e.getTag().insertRules(l, r)), r.length = 0;
        } else r.push(a);
      }
    }
  },
  _e = function (e) {
    for (var t = document.querySelectorAll(be), n = 0, o = t.length; n < o; n++) {
      var r = t[n];
      r && r.getAttribute(f) !== m && (Pe(e, r), r.parentNode && r.parentNode.removeChild(r));
    }
  };
function Ce() {
  return  true ? __webpack_require__.nc : 0;
}
var Ie = function (e) {
    var t = document.head,
      n = e || t,
      o = document.createElement("style"),
      r = function (e) {
        var t = Array.from(e.querySelectorAll("style[".concat(f, "]")));
        return t[t.length - 1];
      }(n),
      s = void 0 !== r ? r.nextSibling : null;
    o.setAttribute(f, m), o.setAttribute(y, v);
    var i = Ce();
    return i && o.setAttribute("nonce", i), n.insertBefore(o, s), o;
  },
  Ae = function () {
    function e(e) {
      this.element = Ie(e), this.element.appendChild(document.createTextNode("")), this.sheet = function (e) {
        if (e.sheet) return e.sheet;
        for (var t = document.styleSheets, n = 0, o = t.length; n < o; n++) {
          var r = t[n];
          if (r.ownerNode === e) return r;
        }
        throw he(17);
      }(this.element), this.length = 0;
    }
    return e.prototype.insertRule = function (e, t) {
      try {
        return this.sheet.insertRule(t, e), this.length++, !0;
      } catch (e) {
        return !1;
      }
    }, e.prototype.deleteRule = function (e) {
      this.sheet.deleteRule(e), this.length--;
    }, e.prototype.getRule = function (e) {
      var t = this.sheet.cssRules[e];
      return t && t.cssText ? t.cssText : "";
    }, e;
  }(),
  Oe = function () {
    function e(e) {
      this.element = Ie(e), this.nodes = this.element.childNodes, this.length = 0;
    }
    return e.prototype.insertRule = function (e, t) {
      if (e <= this.length && e >= 0) {
        var n = document.createTextNode(t);
        return this.element.insertBefore(n, this.nodes[e] || null), this.length++, !0;
      }
      return !1;
    }, e.prototype.deleteRule = function (e) {
      this.element.removeChild(this.nodes[e]), this.length--;
    }, e.prototype.getRule = function (e) {
      return e < this.length ? this.nodes[e].textContent : "";
    }, e;
  }(),
  De = function () {
    function e(e) {
      this.rules = [], this.length = 0;
    }
    return e.prototype.insertRule = function (e, t) {
      return e <= this.length && (this.rules.splice(e, 0, t), this.length++, !0);
    }, e.prototype.deleteRule = function (e) {
      this.rules.splice(e, 1), this.length--;
    }, e.prototype.getRule = function (e) {
      return e < this.length ? this.rules[e] : "";
    }, e;
  }(),
  Re = S,
  Te = {
    isServer: !S,
    useCSSOMInjection: !w
  },
  ke = function () {
    function e(e, n, o) {
      void 0 === e && (e = C), void 0 === n && (n = {});
      var r = this;
      this.options = __assign(__assign({}, Te), e), this.gs = n, this.names = new Map(o), this.server = !!e.isServer, !this.server && S && Re && (Re = !1, _e(this)), ue(this, function () {
        return function (e) {
          for (var t = e.getTag(), n = t.length, o = "", r = function (n) {
              var r = function (e) {
                return ve.get(e);
              }(n);
              if (void 0 === r) return "continue";
              var s = e.names.get(r),
                i = t.getGroup(n);
              if (void 0 === s || !s.size || 0 === i.length) return "continue";
              var a = "".concat(f, ".g").concat(n, '[id="').concat(r, '"]'),
                c = "";
              void 0 !== s && s.forEach(function (e) {
                e.length > 0 && (c += "".concat(e, ","));
              }), o += "".concat(i).concat(a, '{content:"').concat(c, '"}').concat(g);
            }, s = 0; s < n; s++) r(s);
          return o;
        }(r);
      });
    }
    return e.registerId = function (e) {
      return Se(e);
    }, e.prototype.rehydrate = function () {
      !this.server && S && _e(this);
    }, e.prototype.reconstructWithOptions = function (n, o) {
      return void 0 === o && (o = !0), new e(__assign(__assign({}, this.options), n), this.gs, o && this.names || void 0);
    }, e.prototype.allocateGSInstance = function (e) {
      return this.gs[e] = (this.gs[e] || 0) + 1;
    }, e.prototype.getTag = function () {
      return this.tag || (this.tag = (e = function (e) {
        var t = e.useCSSOMInjection,
          n = e.target;
        return e.isServer ? new De(n) : t ? new Ae(n) : new Oe(n);
      }(this.options), new fe(e)));
      var e;
    }, e.prototype.hasNameForId = function (e, t) {
      return this.names.has(e) && this.names.get(e).has(t);
    }, e.prototype.registerName = function (e, t) {
      if (Se(e), this.names.has(e)) this.names.get(e).add(t);else {
        var n = new Set();
        n.add(t), this.names.set(e, n);
      }
    }, e.prototype.insertRules = function (e, t, n) {
      this.registerName(e, t), this.getTag().insertRules(Se(e), n);
    }, e.prototype.clearNames = function (e) {
      this.names.has(e) && this.names.get(e).clear();
    }, e.prototype.clearRules = function (e) {
      this.getTag().clearGroup(Se(e)), this.clearNames(e);
    }, e.prototype.clearTag = function () {
      this.tag = void 0;
    }, e;
  }(),
  je = /&/g,
  xe = /^\s*\/\/.*$/gm;
function Ve(e, t) {
  return e.map(function (e) {
    return "rule" === e.type && (e.value = "".concat(t, " ").concat(e.value), e.value = e.value.replaceAll(",", ",".concat(t, " ")), e.props = e.props.map(function (e) {
      return "".concat(t, " ").concat(e);
    })), Array.isArray(e.children) && "@keyframes" !== e.type && (e.children = Ve(e.children, t)), e;
  });
}
function Fe(e) {
  var t,
    n,
    o,
    r = void 0 === e ? C : e,
    s = r.options,
    i = void 0 === s ? C : s,
    a = r.plugins,
    c = void 0 === a ? _ : a,
    l = function (e, o, r) {
      return r.startsWith(n) && r.endsWith(n) && r.replaceAll(n, "").length > 0 ? ".".concat(t) : e;
    },
    u = c.slice();
  u.push(function (e) {
    e.type === Enum_RULESET && e.value.includes("&") && (e.props[0] = e.props[0].replace(je, n).replace(o, l));
  }), i.prefix && u.push(prefixer), u.push(stringify);
  var p = function (e, r, s, a) {
    void 0 === r && (r = ""), void 0 === s && (s = ""), void 0 === a && (a = "&"), t = a, n = r, o = new RegExp("\\".concat(n, "\\b"), "g");
    var c = e.replace(xe, ""),
      l = compile(s || r ? "".concat(s, " ").concat(r, " { ").concat(c, " }") : c);
    i.namespace && (l = Ve(l, i.namespace));
    var p = [];
    return serialize(l, middleware(u.concat(rulesheet(function (e) {
      return p.push(e);
    })))), p;
  };
  return p.hash = c.length ? c.reduce(function (e, t) {
    return t.name || he(15), M(e, t.name);
  }, F).toString() : "", p;
}
var Me = new ke(),
  ze = Fe(),
  $e = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createContext({
    shouldForwardProp: void 0,
    styleSheet: Me,
    stylis: ze
  }),
  Be = $e.Consumer,
  Le = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createContext(void 0);
function Ge() {
  return (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useContext)($e);
}
function Ye(e) {
  var t = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(e.stylisPlugins),
    n = t[0],
    r = t[1],
    c = Ge().styleSheet,
    l = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(function () {
      var t = c;
      return e.sheet ? t = e.sheet : e.target && (t = t.reconstructWithOptions({
        target: e.target
      }, !1)), e.disableCSSOMInjection && (t = t.reconstructWithOptions({
        useCSSOMInjection: !1
      })), t;
    }, [e.disableCSSOMInjection, e.sheet, e.target, c]),
    u = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(function () {
      return Fe({
        options: {
          namespace: e.namespace,
          prefix: e.enableVendorPrefixes
        },
        plugins: n
      });
    }, [e.enableVendorPrefixes, e.namespace, n]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    shallowequal_default()(n, e.stylisPlugins) || r(e.stylisPlugins);
  }, [e.stylisPlugins]);
  var d = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(function () {
    return {
      shouldForwardProp: e.shouldForwardProp,
      styleSheet: l,
      stylis: u
    };
  }, [e.shouldForwardProp, l, u]);
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement($e.Provider, {
    value: d
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(Le.Provider, {
    value: u
  }, e.children));
}
var We = function () {
    function e(e, t) {
      var n = this;
      this.inject = function (e, t) {
        void 0 === t && (t = ze);
        var o = n.name + t.hash;
        e.hasNameForId(n.id, o) || e.insertRules(n.id, o, t(n.rules, o, "@keyframes"));
      }, this.name = e, this.id = "sc-keyframes-".concat(e), this.rules = t, ue(this, function () {
        throw he(12, String(n.name));
      });
    }
    return e.prototype.getName = function (e) {
      return void 0 === e && (e = ze), this.name + e.hash;
    }, e;
  }(),
  qe = function (e) {
    return e >= "A" && e <= "Z";
  };
function He(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var o = e[n];
    if (1 === n && "-" === o && "-" === e[0]) return e;
    qe(o) ? t += "-" + o.toLowerCase() : t += o;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var Ue = function (e) {
    return null == e || !1 === e || "" === e;
  },
  Je = function (t) {
    var n,
      o,
      r = [];
    for (var s in t) {
      var i = t[s];
      t.hasOwnProperty(s) && !Ue(i) && (Array.isArray(i) && i.isCss || re(i) ? r.push("".concat(He(s), ":"), i, ";") : ce(i) ? r.push.apply(r, __spreadArray(__spreadArray(["".concat(s, " {")], Je(i), !1), ["}"], !1)) : r.push("".concat(He(s), ": ").concat((n = s, null == (o = i) || "boolean" == typeof o || "" === o ? "" : "number" != typeof o || 0 === o || n in unitlessKeys || n.startsWith("--") ? String(o).trim() : "".concat(o, "px")), ";")));
    }
    return r;
  };
function Xe(e, t, n, o) {
  if (Ue(e)) return [];
  if (se(e)) return [".".concat(e.styledComponentId)];
  if (re(e)) {
    if (!re(s = e) || s.prototype && s.prototype.isReactComponent || !t) return [e];
    var r = e(t);
    return  true || 0, Xe(r, t, n, o);
  }
  var s;
  return e instanceof We ? n ? (e.inject(n, o), [e.getName(o)]) : [e] : ce(e) ? Je(e) : Array.isArray(e) ? Array.prototype.concat.apply(_, e.map(function (e) {
    return Xe(e, t, n, o);
  })) : [e.toString()];
}
function Ze(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (re(n) && !se(n)) return !1;
  }
  return !0;
}
var Ke = z(v),
  Qe = function () {
    function e(e, t, n) {
      this.rules = e, this.staticRulesId = "", this.isStatic =  true && (void 0 === n || n.isStatic) && Ze(e), this.componentId = t, this.baseHash = M(Ke, t), this.baseStyle = n, ke.registerId(t);
    }
    return e.prototype.generateAndInjectStyles = function (e, t, n) {
      var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(e, t, n) : "";
      if (this.isStatic && !n.hash) {
        if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) o = ie(o, this.staticRulesId);else {
          var r = ae(Xe(this.rules, e, t, n)),
            s = x(M(this.baseHash, r) >>> 0);
          if (!t.hasNameForId(this.componentId, s)) {
            var i = n(r, ".".concat(s), void 0, this.componentId);
            t.insertRules(this.componentId, s, i);
          }
          o = ie(o, s), this.staticRulesId = s;
        }
      } else {
        for (var a = M(this.baseHash, n.hash), c = "", l = 0; l < this.rules.length; l++) {
          var u = this.rules[l];
          if ("string" == typeof u) c += u,  false && (0);else if (u) {
            var p = ae(Xe(u, e, t, n));
            a = M(a, p + l), c += p;
          }
        }
        if (c) {
          var d = x(a >>> 0);
          t.hasNameForId(this.componentId, d) || t.insertRules(this.componentId, d, n(c, ".".concat(d), void 0, this.componentId)), o = ie(o, d);
        }
      }
      return o;
    }, e;
  }(),
  et = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createContext(void 0),
  tt = et.Consumer;
function nt() {
  var e = c(et);
  if (!e) throw he(18);
  return e;
}
function ot(e) {
  var n = o.useContext(et),
    r = i(function () {
      return function (e, n) {
        if (!e) throw he(14);
        if (re(e)) {
          var o = e(n);
          if (false) {}
          return o;
        }
        if (Array.isArray(e) || "object" != typeof e) throw he(8);
        return n ? t(t({}, n), e) : e;
      }(e.theme, n);
    }, [e.theme, n]);
  return e.children ? /*#__PURE__*/o.createElement(et.Provider, {
    value: r
  }, e.children) : null;
}
var rt = {},
  st = new Set();
function it(e, r, s) {
  var i = se(e),
    a = e,
    c = !L(e),
    p = r.attrs,
    d = void 0 === p ? _ : p,
    h = r.componentId,
    f = void 0 === h ? function (e, t) {
      var n = "string" != typeof e ? "sc" : R(e);
      rt[n] = (rt[n] || 0) + 1;
      var o = "".concat(n, "-").concat($(v + n + rt[n]));
      return t ? "".concat(t, "-").concat(o) : o;
    }(r.displayName, r.parentComponentId) : h,
    m = r.displayName,
    y = void 0 === m ? function (e) {
      return L(e) ? "styled.".concat(e) : "Styled(".concat(B(e), ")");
    }(e) : m,
    g = r.displayName && r.componentId ? "".concat(R(r.displayName), "-").concat(r.componentId) : r.componentId || f,
    S = i && a.attrs ? a.attrs.concat(d).filter(Boolean) : d,
    w = r.shouldForwardProp;
  if (i && a.shouldForwardProp) {
    var b = a.shouldForwardProp;
    if (r.shouldForwardProp) {
      var E = r.shouldForwardProp;
      w = function (e, t) {
        return b(e, t) && E(e, t);
      };
    } else w = b;
  }
  var N = new Qe(s, g, i ? a.componentStyle : void 0);
  function O(e, r) {
    return function (e, r, s) {
      var i = e.attrs,
        a = e.componentStyle,
        c = e.defaultProps,
        p = e.foldedComponentIds,
        d = e.styledComponentId,
        h = e.target,
        f = external_root_React_commonjs2_react_commonjs_react_amd_react_default().useContext(et),
        m = Ge(),
        y = e.shouldForwardProp || m.shouldForwardProp;
       false && 0;
      var v = I(r, f, c) || C,
        g = function (e, n, o) {
          for (var r, s = __assign(__assign({}, n), {
              className: void 0,
              theme: o
            }), i = 0; i < e.length; i += 1) {
            var a = re(r = e[i]) ? r(s) : r;
            for (var c in a) s[c] = "className" === c ? ie(s[c], a[c]) : "style" === c ? __assign(__assign({}, s[c]), a[c]) : a[c];
          }
          return n.className && (s.className = ie(s.className, n.className)), s;
        }(i, r, v),
        S = g.as || h,
        w = {};
      for (var b in g) void 0 === g[b] || "$" === b[0] || "as" === b || "theme" === b && g.theme === v || ("forwardedAs" === b ? w.as = g.forwardedAs : y && !y(b, S) || (w[b] = g[b], y || "development" !== "production" || 0 || 0 || 0 || (0)));
      var E = function (e, t) {
        var n = Ge(),
          o = e.generateAndInjectStyles(t, n.styleSheet, n.stylis);
        return  false && 0, o;
      }(a, g);
       false && 0;
      var N = ie(p, d);
      return E && (N += " " + E), g.className && (N += " " + g.className), w[L(S) && !A.has(S) ? "class" : "className"] = N, w.ref = s, /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.createElement)(S, w);
    }(D, e, r);
  }
  O.displayName = y;
  var D = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef(O);
  return D.attrs = S, D.componentStyle = N, D.displayName = y, D.shouldForwardProp = w, D.foldedComponentIds = i ? ie(a.foldedComponentIds, a.styledComponentId) : "", D.styledComponentId = g, D.target = i ? a.target : e, Object.defineProperty(D, "defaultProps", {
    get: function () {
      return this._foldedDefaultProps;
    },
    set: function (e) {
      this._foldedDefaultProps = i ? function (e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        for (var o = 0, r = t; o < r.length; o++) le(e, r[o], !0);
        return e;
      }({}, a.defaultProps, e) : e;
    }
  }),  false && (0), ue(D, function () {
    return ".".concat(D.styledComponentId);
  }), c && oe(D, e, {
    attrs: !0,
    componentStyle: !0,
    displayName: !0,
    foldedComponentIds: !0,
    shouldForwardProp: !0,
    styledComponentId: !0,
    target: !0
  }), D;
}
function at(e, t) {
  for (var n = [e[0]], o = 0, r = t.length; o < r; o += 1) n.push(t[o], e[o + 1]);
  return n;
}
var ct = function (e) {
  return Object.assign(e, {
    isCss: !0
  });
};
function lt(t) {
  for (var n = [], o = 1; o < arguments.length; o++) n[o - 1] = arguments[o];
  if (re(t) || ce(t)) return ct(Xe(at(_, __spreadArray([t], n, !0))));
  var r = t;
  return 0 === n.length && 1 === r.length && "string" == typeof r[0] ? Xe(r) : ct(Xe(at(r, n)));
}
function ut(n, o, r) {
  if (void 0 === r && (r = C), !o) throw he(1, o);
  var s = function (t) {
    for (var s = [], i = 1; i < arguments.length; i++) s[i - 1] = arguments[i];
    return n(o, r, lt.apply(void 0, __spreadArray([t], s, !1)));
  };
  return s.attrs = function (e) {
    return ut(n, o, __assign(__assign({}, r), {
      attrs: Array.prototype.concat(r.attrs, e).filter(Boolean)
    }));
  }, s.withConfig = function (e) {
    return ut(n, o, __assign(__assign({}, r), e));
  }, s;
}
var pt = function (e) {
    return ut(it, e);
  },
  dt = pt;
A.forEach(function (e) {
  dt[e] = pt(e);
});
var ht = function () {
  function e(e, t) {
    this.rules = e, this.componentId = t, this.isStatic = Ze(e), ke.registerId(this.componentId + 1);
  }
  return e.prototype.createStyles = function (e, t, n, o) {
    var r = o(ae(Xe(this.rules, t, n, o)), ""),
      s = this.componentId + e;
    n.insertRules(s, s, r);
  }, e.prototype.removeStyles = function (e, t) {
    t.clearRules(this.componentId + e);
  }, e.prototype.renderStyles = function (e, t, n, o) {
    e > 2 && ke.registerId(this.componentId + e), this.removeStyles(e, n), this.createStyles(e, t, n, o);
  }, e;
}();
function ft(n) {
  for (var r = [], s = 1; s < arguments.length; s++) r[s - 1] = arguments[s];
  var i = lt.apply(void 0, e([n], r, !1)),
    a = "sc-global-".concat($(JSON.stringify(i))),
    c = new ht(i, a);
   false && 0;
  var l = function (e) {
    var t = Ge(),
      n = o.useContext(et),
      r = o.useRef(t.styleSheet.allocateGSInstance(a)).current;
    return  false && 0,  false && 0, t.styleSheet.server && u(r, e, t.styleSheet, n, t.stylis), o.useLayoutEffect(function () {
      if (!t.styleSheet.server) return u(r, e, t.styleSheet, n, t.stylis), function () {
        return c.removeStyles(r, t.styleSheet);
      };
    }, [r, e, t.styleSheet, n, t.stylis]), null;
  };
  function u(e, n, o, r, s) {
    if (c.isStatic) c.renderStyles(e, b, o, s);else {
      var i = t(t({}, n), {
        theme: I(n, r, l.defaultProps)
      });
      c.renderStyles(e, i, o, s);
    }
  }
  return /*#__PURE__*/o.memo(l);
}
function mt(t) {
  for (var n = [], o = 1; o < arguments.length; o++) n[o - 1] = arguments[o];
   false && 0;
  var r = ae(lt.apply(void 0, e([t], n, !1))),
    s = $(r);
  return new We(s, r);
}
function yt(e) {
  var n = /*#__PURE__*/o.forwardRef(function (n, r) {
    var s = I(n, o.useContext(et), e.defaultProps);
    return  false && 0, /*#__PURE__*/o.createElement(e, t({}, n, {
      theme: s,
      ref: r
    }));
  });
  return n.displayName = "WithTheme(".concat(B(e), ")"), oe(n, e);
}
var vt = function () {
    function e() {
      var e = this;
      this._emitSheetCSS = function () {
        var t = e.instance.toString();
        if (!t) return "";
        var n = Ce(),
          o = ae([n && 'nonce="'.concat(n, '"'), "".concat(f, '="true"'), "".concat(y, '="').concat(v, '"')].filter(Boolean), " ");
        return "<style ".concat(o, ">").concat(t, "</style>");
      }, this.getStyleTags = function () {
        if (e.sealed) throw he(2);
        return e._emitSheetCSS();
      }, this.getStyleElement = function () {
        var n;
        if (e.sealed) throw he(2);
        var r = e.instance.toString();
        if (!r) return [];
        var s = ((n = {})[f] = "", n[y] = v, n.dangerouslySetInnerHTML = {
            __html: r
          }, n),
          i = Ce();
        return i && (s.nonce = i), [/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("style", __assign({}, s, {
          key: "sc-0-0"
        }))];
      }, this.seal = function () {
        e.sealed = !0;
      }, this.instance = new ke({
        isServer: !0
      }), this.sealed = !1;
    }
    return e.prototype.collectStyles = function (e) {
      if (this.sealed) throw he(2);
      return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(Ye, {
        sheet: this.instance
      }, e);
    }, e.prototype.interleaveWithNodeStream = function (e) {
      throw he(3);
    }, e;
  }(),
  gt = {
    StyleSheet: ke,
    mainSheet: Me
  };
 false && 0;
var St = "__sc-".concat(f, "__");
 false && (0);

;// CONCATENATED MODULE: ./src/ListNode/style.ts
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const ListNodeWrapper = dt.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  .list-node-wrapper {\n    color: #606266;\n    font-size: 14px;\n\n    .node-item-list {\n      .left-content {\n        // \u4F7F\u7528 display \u4F1A\u51FA\u73B0 hover\u80CC\u666F\u8272\u548C active\u9AD8\u4EAE\u8272\u5BBD\u5EA6\u6BD4\u8F83\u77ED\uFF0C\u4F46\u662F\u6CA1\u4E8B\u3002\u3002\n        display: flex;\n        align-items: center;\n        /* display: inline-block; // \u8FD9\u4E2A\u52A0\u4E0A\u5C31\u4F1A\u628A\u8FD9\u4E2A\u76D2\u5B50\u7684\u5BBD\u5EA6\u53D8\u6210\u8DDF\u5185\u5BB9\u7684\u5BBD\u5EA6\u4E00\u6837\uFF0C\u800C\u4E0D\u4F1A\u662F\u6839\u636E\u7236\u5BB9\u5668\u7684\u5BBD\u5EA6 */\n        padding: 3px 20px 3px 14px;\n        // white-space: wrap;\n        position: relative;\n        /* \u6DFB\u52A0\u76F8\u5BF9\u5B9A\u4F4D--\u597D\u50CF\u6CA1\u7528 */\n        min-width: 120px;\n        cursor: pointer;\n\n        &:hover {\n          background-color: #f6f6f6;\n        }\n\n        &.active {\n          color: ", ";\n          background-color: ", ";\n        }\n\n        .tag1 {\n          font-size: 12px;\n          padding: 2px 6px;\n          border-radius: 6px;\n          background-color: #f0f9eb;\n          color: #6dc442;\n          white-space: nowrap;\n        }\n\n        .tag2 {\n          font-size: 12px;\n          padding: 2px 6px;\n          border-radius: 6px;\n          background-color: #fef0f0;\n          color: #f67878;\n          white-space: nowrap;\n        }\n\n        .item-name {\n          word-break: break-all; // \u6811\u8282\u70B9 \u7684\u540D\u5B57\u592A\u957F\u8BA9\u5B83\u6362\u884C\n        }\n\n        .right-content {\n          padding: 1px;\n          position: absolute;\n          border-radius: 4px;\n          // top: 2px;\n          right: 10px;\n          color: #606266;\n          background-color: #fff;\n          z-index: 999;\n\n          i {\n            margin: 0 4px;\n          }\n        }\n        .icon {\n          transition: all 0.3s ease;\n        }\n      }\n\n      .has-children {\n      }\n\n      .no-children {\n        /* padding-left: 10px; */\n      }\n    }\n\n    .children {\n      /* padding-left: 10px; */\n      max-height: 0;\n      /* \u521D\u59CB\u72B6\u6001\u4E0B\u9AD8\u5EA6\u4E3A0 */\n      overflow-y: hidden;\n\n      /* \u9690\u85CF\u6EA2\u51FA\u5185\u5BB9 */\n      &.not-expand {\n        transition: max-height 0.25s ease; //\u8FD9\u4E2A\u52A0\u4E0A\u8FC7\u5EA6\u6548\u679C\u4F1A\u51FA\u73B0\u70B9\u51FB\u7684\u8282\u70B9\u7684\u5185\u90E8\u95EA\u73B0x\u8F74\u6EDA\u52A8\u6761\n      }\n\n      &.expanded {\n        overflow-y: clip; // \u8FD9\u53E5\u8BDD\u52A0\u4E0A\u5C31\u4E0D\u4F1A\u51FA\u73B0\u5F88\u591A\u6B4C\u6EDA\u52A8\u6761\u3002\u3002\u3002\n        transition: max-height 0.3s ease;\n        /* \u6DFB\u52A0\u8FC7\u6E21\u6548\u679C */\n        max-height: 1000px;\n        /* \u5C55\u5F00\u65F6\u9AD8\u5EA6\u81EA\u52A8\u9002\u5E94\u5185\u5BB9 */\n      }\n    }\n  }\n"])), props => props.$activeFontColor, props => props.$activeBgc);
;// CONCATENATED MODULE: ./src/ListNode/index.tsx



const ListNode_ListNode = _ref => {
  let {
    maxLevel,
    onLoadNode,
    lazy = false,
    activeFontColor = "#fff",
    activeBgc = "#2783d8",
    bgc = "transparent",
    addIconClass,
    deleteIconClass,
    editIconClass,
    prefixTag,
    showTag = true,
    children,
    wrap = true,
    node: data,
    isTree,
    showOptIcons = true,
    showAddIcon = true,
    showEditIcon = true,
    activeId,
    onToggle,
    onToggleIconClick,
    onItemClick,
    onOptIconClick
  } = _ref;
  const [isExpanded, setIsExpanded] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false);
  const [isShowIcons, setIsShowIcons] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false);
  const [node, setNode] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(data);

  // 计算children的maxWidth
  const [childrenMaxHeight, setChildrenMaxHeight] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(0);
  const toggledNodeItemRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  const [nodeInstances, setNodeInstances] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)({});
  const handleToggle = () => {
    setIsExpanded(prev => !prev);
    onToggle && onToggle(node);
    /* setTimeout(() => {
      onToggleIconClick && onToggleIconClick(node);
    }); */
  };
  const handleItemClick = node => {
    onItemClick && onItemClick(node);
  };
  const setMaxHeights = function (element, expandedParents) {
    let closed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    let currentMaxHeight;

    // scrollHeight 可以用来确定元素内容的总高度，包括隐藏的溢出内容。
    currentMaxHeight = element.scrollHeight;
    // 遍历所有找到的父 div 元素
    expandedParents.forEach((parent, index) => {
      // 将当前父 div 元素的 maxHeight 设置为当前值加上上一个父 div 元素的 maxHeight

      if (index) {
        // 后面遍历到的expanded元素 因为要加上前边遍历到的expanded元素，所以要加上它的 maxHeight
        // 如此往复就会正确计算好展开的maxHeight。。。
        const parenetMaxHeight = parseInt(parent.style.maxHeight);
        parent.style.maxHeight = "".concat(currentMaxHeight + parenetMaxHeight, "px");
      } else {
        // 如果是第一个遍历到的expanded元素的话，只要赋上本身的 scrollHeight即可
        // 后面遍历到的expanded元素 因为要加上前边遍历到的expanded元素，所以要加上它的 maxHeight
        // 如此往复就会正确计算好展开的maxHeight。。。
        parent.style.maxHeight = "".concat(currentMaxHeight, "px");
      }
      // 更新 currentMaxHeight 为当前父 div 元素的实际高度
      // ----错了，不能累加，每次用最开始的计算就行。。因为后面遍历到的 expanded元素会加上它本身的 maxHeight
      // 这个 maxHeight就会正确的包括前面的 expanded元素的高度。
    });
  };
  function findExpandedParents(element) {
    // 存放所有expanded元素的数组
    let expandedParents = [];
    // 存放当前元素
    let currentElement = element;

    // 循环遍历每个父节点
    while (currentElement) {
      // 检查当前元素是否是 div 并且包含 'expanded' 类
      if (currentElement.tagName === "DIV" && currentElement.classList.contains("expanded")) {
        expandedParents.push(currentElement);
      }
      // 移动到当前元素的父节点--类似递归的操作
      currentElement = currentElement.parentNode;
    }
    setMaxHeights(element, expandedParents);
  }

  /* const updateNodeLoadInfo = (node: any) => {
    if (!node.hasLoaded) {
      setNode({ ...node, loading: true });
    }
  }; */

  const generateCalcDom = selector => {
    var _toggledNodeItemRef$c;
    console.log("generateCalcDom: ");
    const notExpandedChildren = (_toggledNodeItemRef$c = toggledNodeItemRef.current) === null || _toggledNodeItemRef$c === void 0 ? void 0 : _toggledNodeItemRef$c.querySelector(".children.".concat(selector || "not-expand"));
    // console.log("notExpandedChildren: ", notExpandedChildren);
    // childrenList: 类名为 children下的所有div节点
    const childrenList = notExpandedChildren === null || notExpandedChildren === void 0 ? void 0 : notExpandedChildren.querySelectorAll(".list-node-wrapper");
    if (childrenList) {
      // 伪数组无法遍历，造成新数组来处理
      const childrenArr = [...childrenList];
      // 存放是expanded节点的子元素
      const expandedChildrenList = [];

      // 因为isExpanded状态的设置是异步的，所以这边要加个定时器，不然不行
      setTimeout(() => {
        childrenArr.forEach(child => {
          // 找到list-node-wrapper的父节点
          const parent = child.parentNode;
          // 通过判断list-node-wrapper的父节点是否是 expanded，来决定要不要存入数组
          if (parent.classList.contains("expanded")) {
            expandedChildrenList.push(child);
          }
        });

        // 存放父节点
        let childrenContainerDiv;
        expandedChildrenList === null || expandedChildrenList === void 0 || expandedChildrenList.forEach(child => {
          // 相同的节点只处理一次
          if (childrenContainerDiv != child.parentNode) {
            // 存放父节点
            childrenContainerDiv = child.parentNode;
            // 判断这个父节点是否是展开状态--貌似有点多余，不用判断，直接执行函数即可
            findExpandedParents(childrenContainerDiv);
          }
        });
      }, 0);
    }
  };
  const handleLoadNode = async clickNode => {
    // 先基于点击的clickNode创建一个新的节点对象副本，用于后续更新操作
    let updatedNode = {
      ...clickNode
    };

    // 设置加载状态为true，表示正在加载子节点数据
    updatedNode.loading = true;
    setNode(updatedNode); // 先更新数据是为了展示 loading效果

    // 调用父组件传递的onLoadNode函数来获取子节点数据

    // 使用更新后的节点对象来更新组件的node状态
    const parentLoadNodeRes = await onLoadNode(clickNode);

    // 如果获取到了子节点数据，更新节点的相关属性
    if (parentLoadNodeRes) {
      updatedNode.children = parentLoadNodeRes.map(item => ({
        ...item,
        level: clickNode.level + 1,
        isExpanded: false
      }));

      // 设置加载状态为false，表示子节点数据加载完成
      updatedNode.loading = false;

      // 设置hasLoaded为true，表示已经成功加载过数据
      updatedNode.hasLoaded = true;
    }
    // 不知道为什么这里不能加定时器，会出问题。。。并且在父组件的 onLoadNode回调里面也不能使用定时器，不会等定时器结束再执行这里，也不会拿到定时器返回的数据【可能可以使用 Promise来？？】
    setNode(updatedNode);
  };
  const handleToggleIconClick = async (node, e) => {
    var _target$parentNode;
    e.stopPropagation();
    // 如果是懒加载，并且还没加载过 子节点 的数据，则 加载子节点数据
    if (isTree && lazy && !node.hasLoaded) {
      await handleLoadNode(node);
    }
    // 公共操作
    e.stopPropagation();
    handleToggle();
    const target = e.target;
    // 因为点击的是 折叠icon，所以要去 父元素 (left-content) 的 父元素(node-item-list)
    const nodeItem = (_target$parentNode = target.parentNode) === null || _target$parentNode === void 0 ? void 0 : _target$parentNode.parentNode;
    toggledNodeItemRef.current = nodeItem;
    // console.log("nodeItem: ", nodeItem);
    /* if (lazy) {
      updateNodeLoadInfo(node);
    } */

    // 1. 如果未展开，设置高度为 nodeItem 的 scrollHeight，这样子节点才能显示出来。
    if (!isExpanded) {
      // 如果是展开，这个操作也是不能少的--具体原因未知。。。
      setChildrenMaxHeight(nodeItem.scrollHeight);
    } else {
      // 如果是折叠，直接maxHeight设置为0即可。虽热子节点的maxHeight不会为，但是父节点的maxHeight为0，就隐藏子节点了
      setChildrenMaxHeight(0);
    }
    generateCalcDom();

    // 一开始还没点击展开的时候，都是 not-expanded
    // （如果数据是 异步 请求回来的话，可能会出问题：数据还没回来，但是 js已经取完 dom了，导致高度计算失败）
  };
  const handleNodeNameClick = (node, e) => {
    // onItemClick && onItemClick(node); // 注释掉，防止出现调用两次 onItemClick
  };
  const handleChildrenIconClick = node => {
    onToggleIconClick && onToggleIconClick(node);
  };
  const handleOptIconClick = (e, type, node) => {
    e.stopPropagation(); // 阻止事件冒泡
    onOptIconClick && onOptIconClick(type, node);
  };
  const handleChildrenOptIconClick = (type, node) => {
    onOptIconClick && onOptIconClick(type, node);
  };
  const renderTag = () => {
    const childArr = (children === null || children === void 0 ? void 0 : children.length) > 0 ? children : [children];
    return childArr.map(item => {
      var _item$props;
      if ((item === null || item === void 0 || (_item$props = item.props) === null || _item$props === void 0 ? void 0 : _item$props.id) === node.showTag) {
        return item;
      }
    });
  };

  // 鼠标进入折叠icon
  const handleMouseEnterExpandIcon = () => {
    setNode(preData => ({
      ...preData,
      isEnter: true
    }));
  };

  // 鼠标离开折叠icon
  const handleMouseLeaveExpandIcon = () => {
    setNode(preData => ({
      ...preData,
      isEnter: false
    }));
  };
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    // TODO：数据变化的时候 loading设置为false，第一次点击之后将 hasLoaded 设置为 true
    /* if (isTree && lazy && !node.hasLoaded && node.loading) {
      setNode({ ...data, loading: false, hasLoaded: true });
    } else {
      setNode(data);
    } */
  }, [data]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (!node.loading && node.hasLoaded) {
      generateCalcDom("expanded");
    }
  }, [node.loading, node.hasLoaded]);
  return (
    /*#__PURE__*/
    // style={{whiteSpace: `${wrap ? "wrap" : "nowrap"}`}}
    // 整个树
    external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(ListNodeWrapper, {
      $activeFontColor: activeFontColor,
      $activeBgc: activeBgc,
      className: "list-node-wrapper"
    }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
      className: "list-node-wrapper"
    }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
      className: "node-item-list"
    }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
      style: {
        backgroundColor: node.bgc,
        ...(Number(activeId) === Number(node.id) ? {
          backgroundColor: activeBgc
        } : ""),
        paddingLeft: node.level * 26 + "px" // 让树节点的层级有缩进，并且是充满一整行的样式
      },
      className: "left-content ".concat(!node.level && "ps-2", " ").concat(String(activeId) === String(node.id) ? "active" : ""),
      onClick: () => handleItemClick(node),
      onMouseEnter: () => setIsShowIcons(true),
      onMouseLeave: () => setIsShowIcons(false)
    }, isTree && (!node.hasLoaded || node.children && node.children.length > 0) && node.level !== maxLevel - 1 && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("i", {
      onMouseEnter: handleMouseEnterExpandIcon,
      onMouseLeave: handleMouseLeaveExpandIcon,
      style: {
        fontSize: "16px",
        width: "10px",
        ...(node.isEnter ? {
          transform: "scale(1.4)",
          color: "#334155"
        } : "")
      },
      onClick: e => handleToggleIconClick(node, e),
      className: "icon fa fa-caret-".concat(isExpanded ? "down" : "right")
    }), node.loading && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
      style: {
        width: "18px",
        height: "18px"
      },
      className: "spinner-border mx-1 ms-2",
      role: "status"
    }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
      className: "visually-hidden "
    }, "Loading...")), prefixTag && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
      className: "prefix-tag ms-2"
    }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("i", {
      className: "".concat(prefixTag, " ").concat(activeId === node.id ? "text-white" : "")
    })), showTag && renderTag(), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
      style: {
        whiteSpace: "".concat(wrap ? "normal" : "nowrap")
      },
      onClick: e => handleNodeNameClick(node, e),
      className: "ms-2 item-name ".concat(node.children && node.children.length > 0 ? "has-children" : "no-children")
    }, node.name), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
      className: "right-content",
      style: {
        display: showOptIcons && isShowIcons ? "block" : "none"
      }
    }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("i", {
      style: {
        display: showAddIcon ? "inline-block" : "none"
      },
      className: "icon fa ".concat(addIconClass || "fa-plus text-success"),
      onClick: e => handleOptIconClick(e, "add", node)
    }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("i", {
      style: {
        display: showEditIcon ? "inline-block" : "none"
      },
      className: "icon fa ".concat(editIconClass || "fa-pencil text-warning"),
      onClick: e => handleOptIconClick(e, "edit", node)
    }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("i", {
      className: "icon fa ".concat(deleteIconClass || "fa-trash text-danger"),
      onClick: e => handleOptIconClick(e, "delete", node)
    }))), node.children && node.children.length > 0 && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
      className: "children ".concat(isExpanded ? "expanded" : "not-expand"),
      style: {
        maxHeight: childrenMaxHeight
      }
    }, node.children.map(child =>
    /*#__PURE__*/
    // 这里别忘记也要像List父组件一样把 回调传递给 ListNode子组件，因为是递归，所以要这么做，
    // 具体传递的回调的函数需要的参数有哪些，就得参考父组件原来是怎么写的，也可以直接不写好像。。。
    // 或许只是为了写个占位，代表需要触发父组件的这个回调函数？
    // 如果是传递的属性的话，是需要写的,像父组件那样子写，用的参数是父组件传递过来的，类似父组件那样再写一遍
    // 注意！！！如果传递的是回调的话，直接将 父组件List 传递给 子组件ListNode 的回调再次传递给子组件ListNode(children) 的props，这样子组件ListNode(children) 才能正确调用这个回调，包括调用回调时候数据是否正确、函数是否正确【eg：onLoadNode={onLoadNode}】
    external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(ListNode_ListNode, {
      maxLevel: maxLevel,
      onLoadNode: onLoadNode,
      lazy: lazy,
      addIconClass: addIconClass,
      editIconClass: editIconClass,
      deleteIconClass: deleteIconClass,
      prefixTag: prefixTag,
      showTag: showTag,
      children: children,
      showAddIcon: showAddIcon,
      showEditIcon: showEditIcon,
      showOptIcons: showOptIcons,
      activeId: activeId,
      onOptIconClick: (type, child) => handleChildrenOptIconClick(type, child),
      onToggleIconClick: handleChildrenIconClick,
      onItemClick: handleItemClick,
      key: child.id,
      node: child,
      isTree: isTree,
      onToggle: onToggle
    }))))))
  );
};
/* harmony default export */ const src_ListNode_0 = (ListNode_ListNode);
;// CONCATENATED MODULE: ./src/index.tsx
// List组件


const List = /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef)((_ref, ref) => {
  let {
    maxLevel,
    lazy,
    overflowY = true,
    activeBgc,
    deleteIconClass,
    addIconClass,
    editIconClass,
    prefixTag,
    showSearch = false,
    showTag = true,
    children,
    wrap = true,
    data,
    isTree = false,
    showOptIcons = true,
    showAddIcon = true,
    showEditIcon = true,
    activeId,
    maxWidth = 300,
    maxHeight = "100%",
    onToggle,
    onItemClick,
    onToggleIconClick,
    onOptIconClick,
    onLoadNode
  } = _ref;
  const [_activeId, set_ActiveId] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(activeId);
  const [treeData, settreeData] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)([]);
  const handleItemClick = node => {
    set_ActiveId(node.id);
    onItemClick && onItemClick(node);
  };
  const handleToggleIconClick = node => {
    onToggleIconClick && onToggleIconClick(node);
  };
  const handleOptIconClick = (type, node) => {
    onOptIconClick && onOptIconClick(type, node);
  };
  const handleInputChange = value => {};
  const handleInputIconClick = value => {};

  /**
   * 自动滚动到底部的逻辑
   */
  const listRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  const scrollToEnd = () => {
    setTimeout(() => {
      if (listRef.current) {
        listRef.current.scrollTo({
          top: listRef.current.scrollHeight,
          behavior: "smooth"
        });
      }
    }, 0);
  };
  const scrollToTop = () => {
    setTimeout(() => {
      if (listRef.current) {
        listRef.current.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
    }, 0);
  };
  const convertListToTree = (list, pid) => {
    let level = 0;
    // 递归辅助函数，用于处理每个节点及其子节点
    const buildTree = (items, parentId, currentLevel) => {
      const children = [];
      items.forEach(item => {
        if (item.pid === parentId) {
          item.level = currentLevel;
          children.push(item);
          // 递归调用自身处理子节点，层级加1
          item.children = buildTree(list, item.id, currentLevel + 1);
        }
      });
      return children;
    };
    const data = buildTree(list, pid, level);
    return data;
  };
  function flattenDataWithoutNesting(data) {
    let flattened = [];
    function flattenRecursive(node, parentId) {
      const {
        id,
        name,
        isExpanded
      } = node;
      flattened.push({
        ...node,
        id,
        name,
        isExpanded,
        pid: parentId
      });
      if (node.children && node.children.length > 0) {
        node.children.forEach(child => {
          flattenRecursive(child, id);
        });
      }
    }
    data.forEach(rootNode => {
      flattenRecursive(rootNode, null);
    });
    return flattened;
  }
  const handleLoadNode = async node => {
    if (onLoadNode) {
      const res = await onLoadNode(node, treeData);
      return res;
    }
  };
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useImperativeHandle)(ref, () => ({
    scrollToEnd,
    scrollToTop,
    flattenDataWithoutNesting,
    convertListToTree
  }));
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    set_ActiveId(activeId);
  }, [activeId]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    var _data$;
    settreeData(convertListToTree(flattenDataWithoutNesting(data), (data === null || data === void 0 || (_data$ = data[0]) === null || _data$ === void 0 ? void 0 : _data$.pid) || null));
  }, [data]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    // console.log("treeData: ", treeData);
  }, [treeData]);
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "list-wrapper",
    style: {
      flex: 1,
      height: "100%"
    }
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    ref: listRef,
    className: "list-content",
    style: {
      maxWidth: maxWidth,
      maxHeight: maxHeight,
      overflow: overflowY ? "auto" : ""
    }
  }, treeData && treeData.map(item => /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(src_ListNode_0, {
    maxLevel: maxLevel,
    onLoadNode: handleLoadNode,
    lazy: lazy,
    activeBgc: activeBgc,
    addIconClass: addIconClass,
    deleteIconClass: deleteIconClass,
    editIconClass: editIconClass,
    prefixTag: prefixTag,
    showTag: showTag,
    wrap: wrap,
    showEditIcon: showEditIcon,
    showAddIcon: showAddIcon,
    activeId: _activeId,
    showOptIcons: showOptIcons,
    onOptIconClick: (type, node) => handleOptIconClick(type, node),
    onToggleIconClick: handleToggleIconClick,
    onItemClick: handleItemClick,
    key: item.id,
    node: item,
    isTree: isTree,
    onToggle: onToggle
  }, children))));
});
/* harmony default export */ const src = (List);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});