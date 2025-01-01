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
.list-node-wrapper .node-item-list {
  position: relative;
}
.list-node-wrapper .node-item-list.show-line::before {
  height: 2.3125rem;
  content: "";
  position: absolute;
  left: -8px;
  width: 0.875rem;
  top: calc(0px - 1.24rem);
  border-bottom: 1px solid #d9d9d9;
  border-left: 1px solid #d9d9d9;
  z-index: 0;
}
.list-node-wrapper .node-item-list.show-line:not(.each-last):after {
  content: "";
  position: absolute;
  left: -8px;
  bottom: -16px;
  width: 0.875rem;
  height: 100%;
  border-bottom: 1px solid #d9d9d9;
  border-left: 1px solid #d9d9d9;
  border-bottom-width: 0;
  z-index: -1;
}
.list-node-wrapper .node-item-list.show-line.first::after {
  left: 0px !important;
}
.list-node-wrapper .node-item-list.show-line.first::before {
  border-left-width: 0px;
}
.list-node-wrapper .node-item-list .node-item-content {
  display: flex;
  align-items: center;
  /* display: inline-block; // 这个加上就会把这个盒子的宽度变成跟内容的宽度一样，而不会是根据父容器的宽度 */
  padding: 3px 0px 3px 14px;
  position: relative;
  /* 添加相对定位--好像没用 */
  min-width: 120px;
  cursor: pointer;
  /*  &:hover {
    background-color: #f6f6f6;
  } */
}
.list-node-wrapper .node-item-list .node-item-content .tag1 {
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 6px;
  background-color: #f0f9eb;
  color: #6dc442;
  white-space: nowrap;
}
.list-node-wrapper .node-item-list .node-item-content .tag2 {
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 6px;
  background-color: #fef0f0;
  color: #f67878;
  white-space: nowrap;
}
.list-node-wrapper .node-item-list .node-item-content .item-name {
  flex: 1;
  padding: 2px 8px;
  border-radius: 6px;
  word-break: break-all;
  transition: all 0.3s ease;
  /* &.active {
      background-color: red;
  } */
}
.list-node-wrapper .node-item-list .node-item-content .item-name:hover {
  background-color: #cce1fc;
}
.list-node-wrapper .node-item-list .node-item-content .right-content {
  padding: 1px;
  position: absolute;
  border-radius: 4px;
  right: 10px;
  color: #606266;
  background-color: #fff;
  z-index: 999;
  transition: all 0.3s ease;
}
.list-node-wrapper .node-item-list .node-item-content .right-content i {
  margin: 0 4px;
}
.list-node-wrapper .node-item-list .node-item-content .right-content.show-opt-icons {
  transform: scale(1);
  opacity: 1;
}
.list-node-wrapper .node-item-list .node-item-content .right-content.hide-opt-icons {
  transform: scale(0.8);
  opacity: 0;
}
.list-node-wrapper .node-item-list .node-item-content .toggle-icon {
  transition: all 0.3s ease;
}
.list-node-wrapper .node-item-list .no-children {
  /* padding-left: 10px; */
}
.list-node-wrapper .children {
  /* padding-left: 10px; */
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
}`, "",{"version":3,"sources":["webpack://./src/ListNode/index.scss"],"names":[],"mappings":"AAAA,gBAAgB;AAAhB;EACI,cAAA;EACA,eAAA;AAEJ;AAAI;EACI,kBAAA;AAER;AAAQ;EACI,iBAAA;EACA,WAAA;EACA,kBAAA;EACA,UAAA;EAEA,eAAA;EACA,wBAAA;EACA,gCAAA;EACA,8BAAA;EACA,UAAA;AACZ;AAEQ;EACI,WAAA;EACA,kBAAA;EAEA,UAAA;EACA,aAAA;EAEA,eAAA;EACA,YAAA;EACA,gCAAA;EACA,8BAAA;EACA,sBAAA;EACA,WAAA;AAFZ;AAKQ;EACI,oBAAA;AAHZ;AAOQ;EACI,sBAAA;AALZ;AAQQ;EAEI,aAAA;EACA,mBAAA;EACA,oEAAA;EACA,yBAAA;EAEA,kBAAA;EACA,iBAAA;EACA,gBAAA;EACA,eAAA;EAEA;;KAAA;AAPZ;AAWY;EACI,eAAA;EACA,gBAAA;EACA,kBAAA;EACA,yBAAA;EACA,cAAA;EACA,mBAAA;AAThB;AAYY;EACI,eAAA;EACA,gBAAA;EACA,kBAAA;EACA,yBAAA;EACA,cAAA;EACA,mBAAA;AAVhB;AAaY;EACI,OAAA;EACA,gBAAA;EACA,kBAAA;EACA,qBAAA;EACA,yBAAA;EAMA;;KAAA;AAdhB;AAUgB;EACI,yBAAA;AARpB;AAkBY;EACI,YAAA;EACA,kBAAA;EACA,kBAAA;EAEA,WAAA;EACA,cAAA;EACA,sBAAA;EACA,YAAA;EACA,yBAAA;AAjBhB;AAmBgB;EACI,aAAA;AAjBpB;AAoBgB;EACI,mBAAA;EACA,UAAA;AAlBpB;AAqBgB;EACI,qBAAA;EACA,UAAA;AAnBpB;AAuBY;EACI,yBAAA;AArBhB;AA2BQ;EACI,wBAAA;AAzBZ;AA6BI;EACI,wBAAA;EACA,aAAA;EACA,cAAA;EACA,kBAAA;EAEA,WAAA;AA5BR;AA6BQ;EACI,iCAAA;AA3BZ;AA8BQ;EACI,gBAAA;EACA,gCAAA;EACA,WAAA;EACA,kBAAA;EACA,gBAAA;AA5BZ","sourcesContent":[".list-node-wrapper {\r\n    color: #606266;\r\n    font-size: 14px;\r\n\r\n    .node-item-list {\r\n        position: relative;\r\n\r\n        &.show-line::before {\r\n            height: calc(0.875rem * 1.5 + 0.5rem + 0.5rem);\r\n            content: '';\r\n            position: absolute;\r\n            left: -8px;\r\n            // border-inline-end: 1px solid #d9d9d9;\r\n            width: 0.875rem;\r\n            top: calc(0px - 1.24rem);\r\n            border-bottom: 1px solid #d9d9d9;\r\n            border-left: 1px solid #d9d9d9;\r\n            z-index: 0;\r\n        }\r\n\r\n        &.show-line:not(.each-last):after {\r\n            content: '';\r\n            position: absolute;\r\n            // top: calc(0.875rem * 1.5);\r\n            left: -8px;\r\n            bottom: -16px;\r\n            // border-inline-end: 1px solid #d9d9d9;\r\n            width: 0.875rem;\r\n            height: 100%;\r\n            border-bottom: 1px solid #d9d9d9;\r\n            border-left: 1px solid #d9d9d9;\r\n            border-bottom-width: 0;\r\n            z-index: -1;\r\n        }\r\n\r\n        &.show-line.first::after {\r\n            left: -0px !important; // 由于 overflow 的原因，所以让 都是第一层的节点，左边框线的 left 为0\r\n            // border-left-width: 5px;\r\n        }\r\n\r\n        &.show-line.first::before {\r\n            border-left-width: 0px;\r\n        }\r\n\r\n        .node-item-content {\r\n            // 使用 display 会出现 hover背景色和 active高亮色宽度比较短，但是没事。。\r\n            display: flex;\r\n            align-items: center;\r\n            /* display: inline-block; // 这个加上就会把这个盒子的宽度变成跟内容的宽度一样，而不会是根据父容器的宽度 */\r\n            padding: 3px 0px 3px 14px;\r\n            // white-space: wrap;\r\n            position: relative;\r\n            /* 添加相对定位--好像没用 */\r\n            min-width: 120px;\r\n            cursor: pointer;\r\n\r\n            /*  &:hover {\r\n      background-color: #f6f6f6;\r\n    } */\r\n\r\n            .tag1 {\r\n                font-size: 12px;\r\n                padding: 2px 6px;\r\n                border-radius: 6px;\r\n                background-color: #f0f9eb;\r\n                color: #6dc442;\r\n                white-space: nowrap;\r\n            }\r\n\r\n            .tag2 {\r\n                font-size: 12px;\r\n                padding: 2px 6px;\r\n                border-radius: 6px;\r\n                background-color: #fef0f0;\r\n                color: #f67878;\r\n                white-space: nowrap;\r\n            }\r\n\r\n            .item-name {\r\n                flex: 1;\r\n                padding: 2px 8px;\r\n                border-radius: 6px;\r\n                word-break: break-all; // 树节点 的名字太长让它换行\r\n                transition: all .3s ease;\r\n\r\n                &:hover {\r\n                    background-color: #cce1fc;\r\n                }\r\n\r\n                /* &.active {\r\n                    background-color: red;\r\n                } */\r\n\r\n\r\n            }\r\n\r\n            .right-content {\r\n                padding: 1px;\r\n                position: absolute;\r\n                border-radius: 4px;\r\n                // top: 2px;\r\n                right: 10px;\r\n                color: #606266;\r\n                background-color: #fff;\r\n                z-index: 999;\r\n                transition: all 0.3s ease;\r\n\r\n                i {\r\n                    margin: 0 4px;\r\n                }\r\n\r\n                &.show-opt-icons {\r\n                    transform: scale(1);\r\n                    opacity: 1;\r\n                }\r\n\r\n                &.hide-opt-icons {\r\n                    transform: scale(0.8);\r\n                    opacity: 0;\r\n                }\r\n            }\r\n\r\n            .toggle-icon {\r\n                transition: all 0.3s ease;\r\n            }\r\n        }\r\n\r\n        .has-children {}\r\n\r\n        .no-children {\r\n            /* padding-left: 10px; */\r\n        }\r\n    }\r\n\r\n    .children {\r\n        /* padding-left: 10px; */\r\n        max-height: 0;\r\n        /* 初始状态下高度为0 */\r\n        overflow-y: hidden;\r\n\r\n        /* 隐藏溢出内容 */\r\n        &.not-expand {\r\n            transition: max-height 0.25s ease; //这个加上过度效果会出现点击的节点的内部闪现x轴滚动条\r\n        }\r\n\r\n        &.expanded {\r\n            overflow-y: clip; // 这句话加上就不会出现很多歌滚动条。。。\r\n            transition: max-height 0.3s ease;\r\n            /* 添加过渡效果 */\r\n            max-height: 1000px;\r\n            /* 展开时高度自动适应内容 */\r\n        }\r\n    }\r\n}"],"sourceRoot":""}]);
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
    defaltExpandNodes,
    showLine,
    maxLevel,
    onLoadNode,
    lazy = false,
    activeFontColor = '#fff',
    activeBgc = '#2783d8',
    bgc = 'transparent',
    addIconClass,
    deleteIconClass,
    editIconClass,
    prefixTag,
    showTag = true,
    children,
    wrap = true,
    node: data,
    isTree,
    showOptIcons = false,
    showAddIcon = false,
    showEditIcon = false,
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
  const toggleIconRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  const handleToggle = () => {
    setIsExpanded(prev => !prev);
    onToggle && onToggle(node);
    /* setTimeout(() => {
    onToggleIconClick && onToggleIconClick(node);
    }); */
  };
  const handleMouseLeaveRightContent = () => {
    setIsShowIcons(false);
  };
  const handleMouseEnterRightContent = () => {
    setIsShowIcons(true);
  };
  const handleNodeNameClick = (e, node) => {
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
      if (currentElement.tagName === 'DIV' && currentElement.classList.contains('expanded')) {
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
    const notExpandedChildren = (_toggledNodeItemRef$c = toggledNodeItemRef.current) === null || _toggledNodeItemRef$c === void 0 ? void 0 : _toggledNodeItemRef$c.querySelector(".children.".concat(selector || 'not-expand'));
    // console.log("notExpandedChildren: ", notExpandedChildren);
    // childrenList: 类名为 children下的所有div节点
    const childrenList = notExpandedChildren === null || notExpandedChildren === void 0 ? void 0 : notExpandedChildren.querySelectorAll('.list-node-wrapper');
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
          if (parent.classList.contains('expanded')) {
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
      updatedNode.children = parentLoadNodeRes.map((item, index) => {
        let nodeInfo = {
          ...item,
          level: clickNode.level + 1,
          isExpanded: false
        };
        if (index === parentLoadNodeRes.length - 1) {
          nodeInfo.isEachLast = true;
        }
        return nodeInfo;
      });

      // 设置加载状态为false，表示子节点数据加载完成
      updatedNode.loading = false;

      // 设置hasLoaded为true，表示已经成功加载过数据
      updatedNode.hasLoaded = true;
    }
    // 不知道为什么这里不能加定时器，会出问题。。。并且在父组件的 onLoadNode回调里面也不能使用定时器，不会等定时器结束再执行这里，也不会拿到定时器返回的数据【可能可以使用 Promise来？？】
    setNode(updatedNode);
  };
  const handleToggleIconClick = async (node, e) => {
    var _target;
    // 公共操作
    let target;
    if (e) {
      e.stopPropagation();
      target = e.target;
    } else {
      target = toggleIconRef.current;
    }
    handleToggle();

    // 如果是懒加载，并且还没加载过 子节点 的数据，则 加载子节点数据
    if (isTree && lazy && !node.hasLoaded) {
      await handleLoadNode(node);
    }

    // 因为点击的是 折叠icon，所以要去 父元素 (left-content) 的 父元素(node-item-list)
    const nodeItem = (_target = target) === null || _target === void 0 || (_target = _target.parentNode) === null || _target === void 0 ? void 0 : _target.parentNode;
    toggledNodeItemRef.current = nodeItem;
    // console.log("nodeItem: ", nodeItem);
    /* if (lazy) {
    updateNodeLoadInfo(node);
    } */

    // 1. 如果未展开，设置高度为 nodeItem 的 scrollHeight，这样子节点才能显示出来。
    if (!isExpanded) {
      // 如果是展开，这个操作也是不能少的--具体原因未知。。。
      setChildrenMaxHeight(nodeItem === null || nodeItem === void 0 ? void 0 : nodeItem.scrollHeight);
    } else {
      // 如果是折叠，直接maxHeight设置为0即可。虽热子节点的maxHeight不会为，但是父节点的maxHeight为0，就隐藏子节点了
      setChildrenMaxHeight(0);
    }
    generateCalcDom();

    // 一开始还没点击展开的时候，都是 not-expanded
    // （如果数据是 异步 请求回来的话，可能会出问题：数据还没回来，但是 js已经取完 dom了，导致高度计算失败）
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
    if (defaltExpandNodes !== null && defaltExpandNodes !== void 0 && defaltExpandNodes.includes(data.id)) {
      // 因为子节点展开与否会影响父节点的样式，所以需要延迟执行，等子节点的样式计算完成后，再执行父节点的样式计算，但是为什么是 level === 1的呢？
      if (data.level === 1) {
        setTimeout(() => {
          handleToggleIconClick(node);
        }, 100);
      } else {
        handleToggleIconClick(node);
      }
    }
    setNode(data); // 更新 node信息
  }, [data]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (!node.loading && node.hasLoaded) {
      generateCalcDom('expanded');
    }
  }, [node.loading, node.hasLoaded]);
  return (
    /*#__PURE__*/
    // style={{whiteSpace: `${wrap ? "wrap" : "nowrap"}`}}
    // 整个树
    external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
      className: "list-node-wrapper"
    }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
      className: "node-item-list  ".concat(showLine ? 'show-line' : '', " ").concat(node.isEachLast ? 'each-last' : '', " ").concat(node.isFirst ? 'first' : '')
    }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
      onMouseEnter: handleMouseEnterRightContent,
      onMouseLeave: handleMouseLeaveRightContent,
      style: {
        backgroundColor: node.bgc,
        ...(!showLine && {
          paddingLeft: node.level * 26 + 'px'
        }) // 让树节点的层级有缩进，并且是充满一整行的样式
      },
      className: "node-item-content pe-1 ".concat(!node.level ? 'ps-2' : '')
    }, isTree && (!node.hasLoaded && lazy || node.children && node.children.length > 0) && node.level !== maxLevel - 1 ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("i", {
      ref: toggleIconRef,
      onMouseEnter: handleMouseEnterExpandIcon,
      onMouseLeave: handleMouseLeaveExpandIcon,
      style: {
        fontSize: '16px',
        width: '10px',
        ...(node.isEnter ? {
          transform: 'scale(1.4)',
          color: '#334155'
        } : ''),
        marginRight: '4px'
      },
      onClick: e => handleToggleIconClick(node, e),
      className: "toggle-icon fa fa-caret-".concat(isExpanded ? 'down' : 'right')
    }) :
    /*#__PURE__*/
    // 留一个空的 span，来做 占位，使得样式对齐
    external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
      className: "empty-placehokder",
      style: {
        width: '14px'
      }
    }), node.loading && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
      style: {
        width: '18px',
        height: '18px'
      },
      className: "spinner-border mx-1 ms-2",
      role: "status"
    }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
      className: "visually-hidden "
    }, "Loading...")), node.prefixTag || prefixTag ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
      className: "prefix-tag ms-1"
    }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("i", {
      className: "".concat(node.prefixTag || prefixTag, " ").concat(activeId === node.id ? '' : '')
    })) : '', showTag && renderTag(), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
      style: {
        whiteSpace: "".concat(wrap ? 'normal' : 'nowrap'),
        ...(isShowIcons ? {
          backgroundColor: '#cce1fc'
        } : {}),
        ...(String(activeId) === String(node.id) ? {
          backgroundColor: activeBgc,
          color: activeFontColor
        } : '') // id 要用 String 来修饰，用 Number 会出现问题
      },
      onClick: e => handleNodeNameClick(e, node),
      className: "".concat(isTree && (!node.hasLoaded && lazy || node.children && node.children.length > 0) && node.level !== maxLevel - 1 || node.prefixTag || prefixTag ? 'ms-1' // 存在 折叠按钮 或者有 prefixTag 的时候，需要缩进，否则 不需要缩进
      : '', " py-1 item-name ").concat(node.children && node.children.length > 0 ? 'has-children' : 'no-children', " ").concat(String(activeId) === String(node.id) ? 'active' : '')
    }, node.name), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
      className: "right-content ".concat(showOptIcons && isShowIcons ? 'show-opt-icons' : 'hide-opt-icons')
      // 这个 display 会导致动画无法生效
      /* style={{
          display: showOptIcons && isShowIcons ? 'block' : 'none',
      }} */
    }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("i", {
      style: {
        display: showAddIcon || addIconClass ? 'inline-block' : 'none'
      },
      className: "icon fa ".concat(addIconClass || 'fa-plus text-success'),
      onClick: e => handleOptIconClick(e, 'add', node)
    }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("i", {
      style: {
        display: showEditIcon || editIconClass ? 'inline-block' : 'none'
      },
      className: "icon fa ".concat(editIconClass || 'fa-pencil text-warning'),
      onClick: e => handleOptIconClick(e, 'edit', node)
    }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("i", {
      className: "icon fa ".concat(deleteIconClass || 'fa-trash text-danger'),
      onClick: e => handleOptIconClick(e, 'delete', node)
    }))), node.children && node.children.length > 0 && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
      className: "children ".concat(isExpanded ? 'expanded' : 'not-expand'),
      style: {
        maxHeight: childrenMaxHeight,
        paddingLeft: showLine ? '35px' : 0
      }
    }, node.children.map(child =>
    /*#__PURE__*/
    // 这里别忘记也要像List父组件一样把 回调传递给 ListNode子组件，因为是递归，所以要这么做，
    // 具体传递的回调的函数需要的参数有哪些，就得参考父组件原来是怎么写的，也可以直接不写好像。。。
    // 或许只是为了写个占位，代表需要触发父组件的这个回调函数？
    // 如果是传递的属性的话，是需要写的,像父组件那样子写，用的参数是父组件传递过来的，类似父组件那样再写一遍
    // 注意！！！如果传递的是回调的话，直接将 父组件List 传递给 子组件ListNode 的回调再次传递给子组件ListNode(children) 的props，这样子组件ListNode(children) 才能正确调用这个回调，包括调用回调时候数据是否正确、函数是否正确【eg：onLoadNode={onLoadNode}】
    external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(ListNode_ListNode, {
      defaltExpandNodes: defaltExpandNodes,
      showLine: showLine,
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
      onItemClick: onItemClick,
      key: child.id,
      node: child,
      isTree: isTree,
      onToggle: onToggle
    })))))
  );
};
/* harmony default export */ const src_ListNode_0 = (ListNode_ListNode);
;// CONCATENATED MODULE: ./src/index.tsx
// List组件


const List = /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef)((_ref, ref) => {
  let {
    defaltExpandNodes,
    showLine,
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
    showOptIcons = false,
    showAddIcon = true,
    showEditIcon = true,
    activeId,
    maxWidth = 300,
    maxHeight = '100%',
    onToggle,
    onItemClick,
    onToggleIconClick,
    onOptIconClick,
    onLoadNode
  } = _ref;
  const [_activeId, set_ActiveId] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(activeId);
  const [treeData, setTreeData] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)([]);
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
          behavior: 'smooth'
        });
      }
    }, 10);
  };
  const scrollToTop = () => {
    setTimeout(() => {
      if (listRef.current) {
        listRef.current.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    }, 0);
  };
  function markLastChildrenAndFirstItem(items) {
    let lastItemIndex = -1;
    items.forEach((item, index) => {
      if (item.children && item.children.length > 0) {
        // 递归处理子节点
        item.children = markLastChildrenAndFirstItem(item.children);

        // 获取子节点中的最后一项并设置isLast为true
        const lastChild = item.children[item.children.length - 1];
        if (lastChild) {
          lastChild.isEachLast = true;
        }
      }

      // 判断当前项是否为这一层级的最后一项
      if (index === items.length - 1) {
        item.isEachLast = true;
        lastItemIndex = index;
      } else {
        item.isEachLast = false;
      }

      // 判断是否为数组的第一条数据，若是则添加first属性并设置为true
      if (index === 0) {}
    });

    // 如果这一层级没有子节点且之前有过节点（通过lastItemIndex判断），则将最后一个节点的isLast设为true
    if (items.length === 0 && lastItemIndex >= 0) {
      items[lastItemIndex].isEachLast = true;
    }
    return items;
  }
  const convertListToTree = (list, pid) => {
    let level = 0;
    // 递归辅助函数，用于处理每个节点及其子节点
    const buildTree = (items, parentId, currentLevel) => {
      const children = [];
      items.forEach(item => {
        if (item.pid === parentId) {
          item.level = currentLevel;
          if (item.level === 0) {
            // 由于 overflow 的原因，所以通过让 都是第一层的节点带上 isFirst，使得左边框线的 left 为0
            item.isFirst = true;
          }
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
    return flattened.map((item, index) => {
      // 由于 overflow 的原因，所以通过让 都是第一层的节点带上 isFirst，使得左边框线的 left 为0
      if (index === 0) {
        return {
          ...item,
          isFirst: true
        };
      }
      return item;
    });
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
    setTreeData(markLastChildrenAndFirstItem(convertListToTree(flattenDataWithoutNesting(data), (data === null || data === void 0 || (_data$ = data[0]) === null || _data$ === void 0 ? void 0 : _data$.pid) || null)));
    // data 变化的时候，也要将 选中的id 置为 -1，防止遗留上一次 选中的id
    if (!activeId) {
      set_ActiveId(-1);
    }
  }, [data]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {}, [treeData]);
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "list-wrapper ".concat(showLine ? "ps-2" : ''),
    style: {
      flex: 1,
      height: '100%'
    }
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    ref: listRef,
    className: "list-content",
    style: {
      maxWidth: maxWidth,
      maxHeight: maxHeight,
      overflowY: 'auto'
    }
  }, treeData && treeData.map(item => /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(src_ListNode_0, {
    defaltExpandNodes: defaltExpandNodes,
    showLine: showLine,
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