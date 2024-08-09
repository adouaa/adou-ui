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
.tag-input-wrapper {
  height: 100%;
  margin-top: 10px;
}
.tag-input-wrapper .form-control {
  cursor: text;
}
.tag-input-wrapper .inputGroup {
  display: flex;
  align-items: center;
}
.tag-input-wrapper .label-box {
  font-size: 14px;
  min-width: 50px;
  max-width: 120px !important;
  flex-wrap: wrap;
}
.tag-input-wrapper .label-in-center {
  display: flex;
  align-items: center;
}
.tag-input-wrapper .label-in-left-top {
  display: flex;
}
.tag-input-wrapper .label-in-left-top .label-box {
  display: flex;
  align-items: start;
}
.tag-input-wrapper .content-box .tag-input-list {
  padding: 0;
  margin-bottom: 0;
  display: flex;
  flex-wrap: wrap;
}
.tag-input-wrapper .content-box .tag-input-list .list-item {
  color: #7e8085;
  list-style-type: none;
  font-size: 14px;
  padding: 3px 22px 3px 12px;
  border-radius: 13px;
  background-color: #f4f4f5;
  position: relative;
  margin-right: 6px;
  margin-bottom: 6px;
}
.tag-input-wrapper .content-box .tag-input-list .list-item .item-icon {
  color: #999ba1;
  position: absolute;
  right: 10px;
  bottom: 4px;
  cursor: pointer;
}
.tag-input-wrapper .tag-input-control {
  flex: 1;
}
.tag-input-wrapper .tag-input-control .input {
  width: 100%;
  outline: none;
  border: none;
}

.focus {
  border-color: #80bdff;
  /* 设置输入框获得焦点时的边框颜色 */
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.313);
  /* 设置输入框获得焦点时的阴影效果 */
}`, "",{"version":3,"sources":["webpack://./src/index.scss"],"names":[],"mappings":"AAAA,gBAAgB;AAAhB;EACI,YAAA;EACA,gBAAA;AAEJ;AAAI;EACI,YAAA;AAER;AACI;EACI,aAAA;EACA,mBAAA;AACR;AAGI;EACI,eAAA;EACA,eAAA;EACA,2BAAA;EACA,eAAA;AADR;AAKI;EACI,aAAA;EACA,mBAAA;AAHR;AAMI;EACI,aAAA;AAJR;AAMQ;EACI,aAAA;EACA,kBAAA;AAJZ;AAUQ;EACI,UAAA;EACA,gBAAA;EACA,aAAA;EACA,eAAA;AARZ;AAUY;EACI,cAAA;EACA,qBAAA;EACA,eAAA;EACA,0BAAA;EACA,mBAAA;EACA,yBAAA;EACA,kBAAA;EACA,iBAAA;EACA,kBAAA;AARhB;AAUgB;EACI,cAAA;EACA,kBAAA;EACA,WAAA;EACA,WAAA;EACA,eAAA;AARpB;AAcI;EACI,OAAA;AAZR;AAcQ;EACI,WAAA;EACA,aAAA;EACA,YAAA;AAZZ;;AAiBA;EACI,qBAAA;EACA,oBAAA;EACA,iDAAA;EACA,oBAAA;AAdJ","sourcesContent":[".tag-input-wrapper {\r\n    height: 100%;\r\n    margin-top: 10px;\r\n\r\n    .form-control {\r\n        cursor: text;\r\n    }\r\n\r\n    .inputGroup {\r\n        display: flex;\r\n        align-items: center;\r\n    }\r\n\r\n\r\n    .label-box {\r\n        font-size: 14px;\r\n        min-width: 50px;\r\n        max-width: 120px !important;\r\n        flex-wrap: wrap;\r\n    }\r\n\r\n\r\n    .label-in-center {\r\n        display: flex;\r\n        align-items: center;\r\n    }\r\n\r\n    .label-in-left-top {\r\n        display: flex;\r\n\r\n        .label-box {\r\n            display: flex;\r\n            align-items: start;\r\n        }\r\n    }\r\n\r\n    .content-box {\r\n\r\n        .tag-input-list {\r\n            padding: 0;\r\n            margin-bottom: 0;\r\n            display: flex;\r\n            flex-wrap: wrap; // 不写这个太窄的话会挤在一起\r\n\r\n            .list-item {\r\n                color: #7e8085;\r\n                list-style-type: none;\r\n                font-size: 14px;\r\n                padding: 3px 22px 3px 12px;\r\n                border-radius: 13px;\r\n                background-color: #f4f4f5;\r\n                position: relative;\r\n                margin-right: 6px;\r\n                margin-bottom: 6px;\r\n\r\n                .item-icon {\r\n                    color: #999ba1;\r\n                    position: absolute;\r\n                    right: 10px;\r\n                    bottom: 4px;\r\n                    cursor: pointer;\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    .tag-input-control {\r\n        flex: 1;\r\n\r\n        .input {\r\n            width: 100%;\r\n            outline: none;\r\n            border: none;\r\n        }\r\n    }\r\n}\r\n\r\n.focus {\r\n    border-color: #80bdff;\r\n    /* 设置输入框获得焦点时的边框颜色 */\r\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.313);\r\n    /* 设置输入框获得焦点时的阴影效果 */\r\n}"],"sourceRoot":""}]);
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


const TagInput = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef((_ref, ref) => {
  let {
    required,
    isFormItem,
    errMsg,
    labelWidth,
    commonSuffixIcon,
    readOnly,
    width,
    label,
    labelColor,
    inputGroup = false,
    labelPosition = "center",
    name,
    defaultValue = [],
    onChange
  } = _ref;
  const [inputList, setInputList] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(defaultValue || []);
  const [inputValue, setInputValue] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)("");
  const [isHighlighted, setIsHighlighted] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false);
  const addInput = () => {
    // 因为state是异步的，所以要把数据先处理好再使用
    const data = [...inputList, inputValue];
    setInputList(data);
    setInputValue("");
    // 把数据传回给父组件
    onChange && onChange(data);
    setError(false);
  };
  const handleInputChange = e => {
    setInputValue(e.target.value);
  };
  const handleKeyDown = event => {
    const value = event.target.value.trim(); // 会有一个空格存在，要去掉
    if (!value) return;
    let flag = false;
    if (event.keyCode === 32 || event.keyCode === 13) {
      event.preventDefault(); // 阻止默认行为，防止提交表单或失去焦点
      flag = inputList.length > 0 && inputList.some(item => item === value);
      !flag && addInput();
    }
  };
  const handleDeleteItem = item => {
    const tagList = inputList.filter(value => item !== value);
    if (!tagList.length) {
      setError(true);
    }
    setInputList(tagList);
    onChange && onChange(tagList);
    // 注意，这边不能直接用 inputList给 formData赋值，会出现不一致的情况
  };
  const handleBlur = () => {
    // 注意，这边要在 inpuut失焦的时候触发，不能在 input change的时候触发，不然会出现校验错误
    setIsHighlighted(false);
  };
  const handleFocus = () => {
    setIsHighlighted(true);
  };
  const inputRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)();
  const handleClickFormControl = () => {
    inputRef.current.focus();
  };
  const getValue = () => {
    return inputList || [];
  };
  // 校验方法
  const [error, setError] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false);
  const validate = () => {
    if (!required) return true;
    if (inputList.length) {
      setError(false);
      return true;
    } else {
      setError(true);
      return false;
    }
  };
  // 清除内容方法
  const clear = () => {
    setInputList("");
  };
  const handleClickCommonSuffixIcon = () => {
    clear();
    setError(true);
  };
  // Expose validate method via ref
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useImperativeHandle)(ref, () => ({
    getValue,
    validate,
    clear
  }));
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (defaultValue.length) {
      setInputList(defaultValue);
    } else {
      setInputList([]);
    }
  }, [defaultValue]);
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "tag-input-wrapper ".concat(!error && isFormItem && "mb-3"),
    style: {
      width
    }
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "content-box ".concat(inputGroup ? "inputGroup" : "label-in-".concat(labelPosition))
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
    className: "label-box ".concat(inputGroup ? "input-group-text" : ""),
    style: {
      color: labelColor,
      width: labelWidth
    }
  }, label), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    style: {
      display: "flex"
    },
    onClick: handleClickFormControl,
    className: "form-control ".concat(isHighlighted ? "focus" : "")
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("ul", {
    className: "tag-input-list"
  }, inputList.length > 0 && inputList.map(item => {
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("li", {
      className: "list-item",
      key: item
    }, item, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
      onClick: () => handleDeleteItem(item),
      className: "item-icon"
    }, "x"));
  })), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "tag-input-control"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("input", {
    readOnly: readOnly,
    ref: inputRef,
    name: name,
    value: inputValue,
    autoComplete: "off",
    onFocus: handleFocus,
    onBlur: handleBlur,
    onChange: e => handleInputChange(e),
    onKeyDown: handleKeyDown,
    placeholder: "\u7A7A\u683C\u6216\u56DE\u8F66\u5206\u5272",
    type: "text",
    className: "input"
  }))), commonSuffixIcon && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("i", {
    onClick: handleClickCommonSuffixIcon,
    className: "".concat(commonSuffixIcon, " common-suffix-icon ms-2")
  })), error && required && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "animate__animated animate__fadeIn",
    style: {
      color: "red",
      paddingLeft: parseInt(labelWidth) > 120 ? "120px" : labelWidth
    }
  }, "".concat(errMsg || "".concat(label, "\u4E0D\u80FD\u4E3A\u7A7A"))));
});
/* harmony default export */ const src_0 = (TagInput);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});