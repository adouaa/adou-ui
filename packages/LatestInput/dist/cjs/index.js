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
___CSS_LOADER_EXPORT___.push([module.id, `.adou-input-wrapper .adou-input-form-content {
  height: 100%;
  border-radius: 0.375rem;
  transition: background-color 0.5s ease, border-color 0.5s ease, box-shadow 0.5s ease;
}
.adou-input-wrapper .adou-input-form-content .input-box {
  width: 100%;
}
.adou-input-wrapper .adou-input-label-vertical {
  display: flex;
  align-items: self-start;
  justify-content: center;
  flex-direction: column;
}
.adou-input-wrapper .adou-input-label-horizontal {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}
.adou-input-wrapper .adou-input-label-horizontal .adou-input-label-box {
  display: flex;
  align-items: center;
  justify-content: center;
}
.adou-input-wrapper .adou-input-label-horizontal-top {
  display: flex;
  justify-content: center;
  align-items: self-start;
  flex-direction: row;
}
.adou-input-wrapper .adou-input-clear-icon-box {
  width: 24px;
  text-align: right;
  display: flex;
  align-items: center;
}
.adou-input-wrapper .adou-input-clear-icon {
  cursor: pointer;
  transition: all 0.3s;
  color: #c6c6cd;
}
.adou-input-wrapper .adou-input-clear-icon:hover {
  transform: scale(1.2);
  color: red !important;
}
.adou-input-wrapper .adou-input .input {
  background-color: var(--bs-body-bg) !important;
}`, "",{"version":3,"sources":["webpack://./src/index.scss"],"names":[],"mappings":"AAIQ;EACI,YAAA;EACA,uBAAA;EAEA,oFAAA;AAJZ;AAMY;EACI,WAAA;AAJhB;AAQQ;EACI,aAAA;EACA,uBAAA;EACA,uBAAA;EACA,sBAAA;AANZ;AASQ;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,mBAAA;AAPZ;AASY;EACI,aAAA;EACA,mBAAA;EACA,uBAAA;AAPhB;AAWQ;EACI,aAAA;EACA,uBAAA;EACA,uBAAA;EACA,mBAAA;AATZ;AAYQ;EACI,WAAA;EACA,iBAAA;EACA,aAAA;EACA,mBAAA;AAVZ;AAaQ;EAEI,eAAA;EACA,oBAAA;EACA,cAAA;AAZZ;AAcY;EACI,qBAAA;EACA,qBAAA;AAZhB;AAgBQ;EACI,8CAAA;AAdZ","sourcesContent":[".adou-input-wrapper {\r\n\r\n    .adou-input {\r\n\r\n        &-form-content {\r\n            height: 100%;\r\n            border-radius: 0.375rem;\r\n            // box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075); 加上这个在 borderless 情况下底部会有条线\r\n            transition: background-color 0.5s ease, border-color 0.5s ease, box-shadow 0.5s ease;\r\n\r\n            .input-box {\r\n                width: 100%;\r\n            }\r\n        }\r\n\r\n        &-label-vertical {\r\n            display: flex;\r\n            align-items: self-start;\r\n            justify-content: center;\r\n            flex-direction: column;\r\n        }\r\n\r\n        &-label-horizontal {\r\n            display: flex;\r\n            justify-content: center;\r\n            align-items: center;\r\n            flex-direction: row;\r\n\r\n            .adou-input-label-box {\r\n                display: flex;\r\n                align-items: center;\r\n                justify-content: center;\r\n            }\r\n        }\r\n\r\n        &-label-horizontal-top {\r\n            display: flex;\r\n            justify-content: center;\r\n            align-items: self-start;\r\n            flex-direction: row;\r\n        }\r\n\r\n        &-clear-icon-box {\r\n            width: 24px;\r\n            text-align: right;\r\n            display: flex;\r\n            align-items: center;\r\n        }\r\n\r\n        &-clear-icon {\r\n\r\n            cursor: pointer;\r\n            transition: all 0.3s;\r\n            color: #c6c6cd;\r\n\r\n            &:hover {\r\n                transform: scale(1.2);\r\n                color: red !important;\r\n            }\r\n        }\r\n\r\n        .input {\r\n            background-color: var(--bs-body-bg) !important;\r\n        }\r\n    }\r\n}"],"sourceRoot":""}]);
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


const Input = (_ref, ref) => {
  let {
    title,
    wrap,
    wrapperClassName,
    backgroundColor,
    inputStyle,
    prefix,
    suffix,
    addonBefore,
    addonAfter,
    varient = "outlined",
    valueKey,
    labelKey,
    wrapperWidth,
    wrapperStyle,
    clearable = false,
    commonSuffixContent,
    formStyle,
    suffixContentExternalClassName,
    inputExternalClassName,
    textEnd,
    name,
    errMsg,
    labelWidth,
    commonSuffixIcon,
    width = "100%",
    label,
    layout = "horizontal",
    labelColor,
    required = false,
    type = "text",
    defaultValue,
    size,
    externalClassName,
    prefixContent,
    suffixContent,
    suffixContentType = "button",
    placeholder,
    style,
    disabled,
    transparent,
    children,
    onClick,
    onFocus,
    onBlur,
    onChange,
    onIconClick,
    onFormDataChange,
    onFieldChange,
    onValidateField
  } = _ref;
  const [value, setValue] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(defaultValue !== null && defaultValue !== void 0 ? defaultValue : "");
  const [isEnter, setIsEnter] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false);
  const [isFocus, setIsFocus] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false);
  const inputRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  const inputFormContentRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  const handleClick = function (e) {
    e.stopPropagation();
    onClick && onClick(e);
  };
  const handleFocus = function (e) {
    e.stopPropagation();
    if (varient === "filled" && inputFormContentRef.current && !disabled) {
      inputFormContentRef.current.style.backgroundColor = "";
      setIsFocus(true);
    }
    onFocus && onFocus(e);
  };
  const handleBlur = function (e) {
    onBlur && onBlur(e);
    handleValidate(value);
    if (varient === "filled" && inputFormContentRef.current) {
      inputFormContentRef.current.style.backgroundColor = "#f0f0f0";
    }
    setIsFocus(false);
  };
  const handleChange = function (e) {
    const value = e.target.value;
    const returnValue = type === "number" ? Number(value) : value;
    setValue(value);
    onChange && onChange(returnValue);
    onFormDataChange && onFormDataChange(name, returnValue);
    handleFieldChange && handleFieldChange(returnValue);
    handleValidate(value);
  };
  const handleIconClick = () => {
    onIconClick && onIconClick(value);
  };
  const [error, setError] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false);
  const handleFieldChange = value => {
    onFieldChange && onFieldChange(name, value);
  };
  const handleValidate = data => {
    onValidateField && onValidateField(name, data);
  };
  const validate = () => {};
  const clear = () => {
    setValue("");
  };
  const handleMouseEnter = () => {
    setIsEnter(true);
  };
  const handleMouseLeave = () => {
    setIsEnter(false);
  };
  const handleClearIconClick = () => {
    clear();
    handleFieldChange("");
    handleFieldChange("");
    console.log("5: ", 5);
    handleValidate("");
  };
  const generateClsWhenHasLabel = () => {
    switch (layout) {
      case "horizontal":
        return "adou-input-label-horizontal";
      case "horizontal-top":
        return "adou-input-label-horizontal-top";
      case "vertical":
        return "adou-input-label-vertical";
    }
  };
  const judgeBgColor = () => {
    if (disabled) {
      return "#eee";
    } else if (varient === "filled") {
      return "#f0f0f0";
    } else if (backgroundColor) {
      return backgroundColor;
    } else {
      return "transparent";
    }
  };
  const judgeBorder = () => {
    if (varient === "borderless") {
      return "border-0";
    } else if (varient === "filled" && !addonAfter && !addonBefore) {
      return "border-0";
    } else {
      return "";
    }
  };
  const commonElement = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("input", {
    className: "input border-0 flex-fill form-control ".concat(textEnd || type === "number" ? "text-end" : "", " ").concat(suffixContent && suffixContentType === "button" ? "suffix-content-btn" : "", " ").concat(inputExternalClassName || "", " "),
    ref: inputRef,
    required: required,
    style: {
      flex: 1,
      width,
      outline: "none",
      ...(varient === "filled" && {
        backgroundColor: "transparent"
      }),
      ...(addonBefore && {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0
      }),
      ...(addonAfter && {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0
      }),
      height: size === "lg" ? "48px" : size === "sm" ? "32px" : "38px",
      backgroundColor: judgeBgColor(),
      cursor: disabled ? "not-allowed" : "auto",
      borderRadius: "0.375rem",
      // 和父组件的 borderRadius 保持一致
      ...inputStyle
    },
    step: 1,
    name: name,
    value: value,
    readOnly: disabled,
    placeholder: placeholder,
    onChange: handleChange,
    onBlur: e => handleBlur(e),
    onFocus: e => handleFocus(e),
    onClick: e => handleClick(e),
    type: type
  }), suffix && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "suffix-box"
  }, suffix), clearable && true && value ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
    className: "adou-input-clear-icon-box fade-enter me-1",
    style: {
      top: size === "sm" ? "2px" : size === "lg" ? " 10px" : "6px"
    }
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("i", {
    className: "adou-input-clear-icon fa-regular fa-circle-xmark text-secondary flex-fill",
    style: {
      fontSize: "12px",
      cursor: "pointer"
    },
    onClick: handleClearIconClick
  })) : /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "adou-input-common-sufiix-content position-absolute text-secondary",
    style: {
      right: "14px",
      top: size === "sm" ? "14%" : size === "lg" ? " 26%" : "18%"
    }
  }, commonSuffixContent));

  // Expose validate method via ref
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useImperativeHandle)(ref, () => ({
    validate,
    clear
  }));
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (defaultValue || defaultValue === 0 || defaultValue === false) {
      setValue(defaultValue);
      handleValidate(defaultValue);
      setError(false);
    } else {
      setValue("");
    }
  }, [defaultValue]);
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    title: title || label,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    className: "adou-input-wrapper position-relative ".concat(wrapperClassName ? wrapperClassName : ""),
    style: {
      ...wrapperStyle,
      ...(wrapperWidth ? {
        width: wrapperWidth
      } : {
        flex: 1
      }),
      cursor: disabled ? "not-allowed" : "auto"
    }
  }, !label && (addonAfter || addonBefore) ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "adou-input"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "input-group",
    style: {
      flexWrap: wrap ? "wrap" : "nowrap"
      // height: size === 'lg' ? '48px' : size === 'sm' ? '32px' : '40px',
    }
  }, addonBefore && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
    className: "input-group-text py-0",
    style: {
      fontSize: "14px"
    }
  }, addonBefore), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    style: {
      ...(varient === "filled" && {
        border: addonBefore || addonAfter ? "" : "none"
      }),
      ...formStyle,
      backgroundColor: judgeBgColor(),
      border: varient === "outlined" ? "1px solid #ced4da" : ""
    },
    ref: inputFormContentRef,
    tabIndex: 1,
    className: "adou-input-form-content d-flex flex-fill align-items-center ".concat(isFocus ? "adou-form-control-focus" : "")
  }, prefix && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "prefix-box"
  }, prefix), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "input-box flex-fill d-flex  align-items-center"
  }, commonElement)), addonAfter && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
    className: "input-group-text py-0",
    style: {
      fontSize: "14px"
    }
  }, addonAfter && addonAfter))) :
  /*#__PURE__*/
  // 只有在是 label 的情况下才去对 生成对应的类名
  external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "adou-input flex-fill ".concat(generateClsWhenHasLabel()),
    style: {
      height: "100%"
    }
  }, label && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
    className: "pe-3 ".concat(layout === "vertical" ? "pb-1" : ""),
    style: {
      width: labelWidth
    }
  }, label), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    tabIndex: 1,
    style: {
      width: "100%",
      ...(varient === "filled" && {
        backgroundColor: "#f0f0f0",
        border: "none"
      }),
      border: varient === "outlined" ? "" : "",
      backgroundColor: judgeBgColor(),
      ...formStyle
    },
    ref: inputFormContentRef,
    className: "adou-input-form-content flex-fill d-flex align-items-center ".concat(isFocus ? "adou-form-control-focus" : "", " ").concat(judgeBorder())
  }, prefix && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "prefix-box"
  }, prefix), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "input-box flex-fill d-flex align-items-center"
  }, commonElement))));
};

// 对于使用 forwardRef 包装的组件，displayName 需要在 forwardRef 调用之后设置
// 上述代码中，Input 组件是通过 forwardRef 包装的，因此需要在 forwardRef 调用之后设置 displayName

const ForwardedInput = /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef)(Input);
ForwardedInput.displayName = "Input";
/* harmony default export */ const src_0 = (ForwardedInput);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});