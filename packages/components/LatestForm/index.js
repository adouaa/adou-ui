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
/* 定义 fadeInDown 动画关键帧 */
@keyframes fade-in-Down {
  from {
    /* 初始状态，透明度为 0，向上偏移一定距离（这里设置为 -20px，可以根据实际需求调整） */
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    /* 最终状态，完全显示，位置正常 */
    opacity: 1;
    transform: translateY(0px);
  }
}
/* 应用 fadeInDown 动画到具体元素的类名 */
.fadeInDown {
  /* 使用 animation 属性来应用动画，指定动画名称、持续时间、动画曲线、延迟时间和播放次数等 */
  animation: fade-in-Down 0.5s ease-in-out 0s 1;
}

/* 定义 fadeInUp 动画关键帧 */
@keyframes fadeInUp {
  from {
    /* 初始状态，透明度为 0，向下偏移一定距离（这里设置为 20px，可按需调整） */
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    /* 最终状态，完全显示，位置正常 */
    opacity: 1;
    transform: translateY(0);
  }
}
/* 应用 fadeInUp 动画到具体元素的类名 */
.fadeInUp {
  animation: fadeInUp 1s ease-in-out 0s 1;
}`, "",{"version":3,"sources":["webpack://./src/index.scss"],"names":[],"mappings":"AAAA,gBAAgB;AAAhB,wBAAA;AACA;EACI;IACI,iDAAA;IACA,UAAA;IACA,4BAAA;EAEN;EACE;IACI,mBAAA;IACA,UAAA;IACA,0BAAA;EACN;AACF;AAEA,6BAAA;AACA;EACI,qDAAA;EACA,6CAAA;AAAJ;;AAGA,sBAAA;AACA;EACI;IACI,2CAAA;IACA,UAAA;IACA,2BAAA;EAAN;EAGE;IACI,mBAAA;IACA,UAAA;IACA,wBAAA;EADN;AACF;AAIA,2BAAA;AACA;EACI,uCAAA;AAFJ","sourcesContent":["/* 定义 fadeInDown 动画关键帧 */\r\n@keyframes fade-in-Down {\r\n    from {\r\n        /* 初始状态，透明度为 0，向上偏移一定距离（这里设置为 -20px，可以根据实际需求调整） */\r\n        opacity: 0;\r\n        transform: translateY(-10px);\r\n    }\r\n\r\n    to {\r\n        /* 最终状态，完全显示，位置正常 */\r\n        opacity: 1;\r\n        transform: translateY(0px);\r\n    }\r\n}\r\n\r\n/* 应用 fadeInDown 动画到具体元素的类名 */\r\n.fadeInDown {\r\n    /* 使用 animation 属性来应用动画，指定动画名称、持续时间、动画曲线、延迟时间和播放次数等 */\r\n    animation: fade-in-Down .5s ease-in-out 0s 1;\r\n}\r\n\r\n/* 定义 fadeInUp 动画关键帧 */\r\n@keyframes fadeInUp {\r\n    from {\r\n        /* 初始状态，透明度为 0，向下偏移一定距离（这里设置为 20px，可按需调整） */\r\n        opacity: 0;\r\n        transform: translateY(20px);\r\n    }\r\n\r\n    to {\r\n        /* 最终状态，完全显示，位置正常 */\r\n        opacity: 1;\r\n        transform: translateY(0);\r\n    }\r\n}\r\n\r\n/* 应用 fadeInUp 动画到具体元素的类名 */\r\n.fadeInUp {\r\n    animation: fadeInUp 1s ease-in-out 0s 1;\r\n}"],"sourceRoot":""}]);
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




// 新增一个接口来扩展 Form 组件类型，使其包含 Item 属性

const Form = /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef)((_ref, AdouFormRef) => {
  let {
    commonFormContenClassName,
    commonErrorType = "label",
    commonForItemClsssName,
    commonDisabled,
    showNotFormItem,
    commonContentBackgroundColor,
    wrpa = true,
    externalWrapperClassName,
    externalWrapperStyle,
    commonRules,
    form,
    commonFormItemWrapperWidth,
    commonFormItemWrapperMinWidth,
    commonFormItemWrapperMaxWidth,
    clearable = false,
    size,
    labelWidth,
    layout,
    oneLine = false,
    labelPosition,
    labelColor = "#8d9095",
    inline,
    required,
    children,
    eachWordWidth = 22,
    commonSuffixIcon = "",
    onSubmit
  } = _ref;
  const formRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);

  // 存放 FormItem 的 refs
  const formItemRefs = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)({});
  const validateForm = detail => {
    // 存放 校验失败的表单的 label
    const errorLabels = [];
    let isValid = true;
    for (const key in formItemRefs.current) {
      const formItemRef = formItemRefs.current[key];
      if (formItemRef.current) {
        const result = formItemRef.current.validateField("", "", true);
        if (!result) {
          const label = formItemRef.current.getLabel();
          errorLabels.push(label);
          isValid = false;
        }
      }
    }
    if (detail) {
      return {
        isValid,
        errorLabels
      };
    } else {
      return isValid;
    }
  };
  let maxLengthLabelWidth = 0;
  const calcMaxLabelWidth = () => {
    var _sortedLabelWidthList;
    const labelWidthList = [];
    external_root_React_commonjs2_react_commonjs_react_amd_react_default().Children.map(children, child => {
      var _child$props;
      if (child !== null && child !== void 0 && (_child$props = child.props) !== null && _child$props !== void 0 && _child$props.label) {
        var _child$props2;
        labelWidthList.push((_child$props2 = child.props) === null || _child$props2 === void 0 ? void 0 : _child$props2.label);
      }
    });
    const sortedLabelWidthList = labelWidthList.sort((a, b) => a.length - b.length);
    maxLengthLabelWidth = ((_sortedLabelWidthList = sortedLabelWidthList[sortedLabelWidthList.length - 1]) === null || _sortedLabelWidthList === void 0 ? void 0 : _sortedLabelWidthList.length) * eachWordWidth;
  };
  const renderChildren = () => {
    const renderChildren = [];
    calcMaxLabelWidth();
    // 这个方法可行
    external_root_React_commonjs2_react_commonjs_react_amd_react_default().Children.map(children, child => {
      if (!child) return;
      const props = child.props;
      if (!showNotFormItem && child.type.displayName !== "FormItem") return; // 过滤掉不是 FormItem
      const formItemRef = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createRef(); // 创建一个 ref
      // child.type 子元素自身（FormItem），检查其静态属性 displayName 是否满足条件
      const enhancedChildren = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().cloneElement(child, {
        labelWidth: labelWidth || maxLengthLabelWidth + "px",
        key: props.name,
        // ref 稍后哦再做，可能子组件要用 React.ForwdRef() 来包裹
        ...(child.formItemRef ? {
          formItemRef: child.formItemRef
        } : {
          formItemRef
        }),
        4: maxLengthLabelWidth + "px",
        commonSuffixIcon,
        isFormItem: !oneLine,
        ...(labelPosition ? {
          labelPosition
        } : {}),
        // 动态添加 required 属性

        ...(inline ? {
          inline: true
        } : {}),
        // 动态添加 required 属性

        ...(required ? {
          required: true
        } : {}),
        // 动态添加 required 属性
        labelColor,
        setFieldValue: form === null || form === void 0 ? void 0 : form.setFieldValue,
        // 设置表单数据
        // onFormDataChange: handleChangeData,
        data: form === null || form === void 0 ? void 0 : form.formData,
        // 注意：一个组件只能有一个 ref，要么外面提供ref手动处理，要么在 Form组件下统一提供ref
        // 可以自定义要不要在Form下给表单组件提供 ref
        // [`${props.name === "test-select" ? "" : "ref"}`]: childRef
        size,
        clearable,
        layout,
        wrapperWidth: commonFormItemWrapperWidth,
        wrapperMaxWidth: commonFormItemWrapperMaxWidth,
        wrapperMinWidth: commonFormItemWrapperMinWidth,
        wrapperClassName: commonForItemClsssName,
        contentBackgroundColor: commonContentBackgroundColor,
        formContentClassName: commonFormContenClassName,
        rules: commonRules ? commonRules : required ? [{
          required: true
        }] : [],
        oneLine,
        disabled: commonDisabled,
        errorType: commonErrorType,
        ...props // 为了不覆盖 FormItem 本来的 属性
      });
      renderChildren.push(enhancedChildren);
      // 将子组件的 ref 存储到 childRefs 中
      // 如果子组件内部没有用 useImperativeHandle来暴露东西的话，chidRef.current就是null
      if (props.name) {
        // childRefs.current[props.name] = child.ref ? child.ref : childRef;
        formItemRefs.current[props.name] = child.formItemRef ? child.formItemRef : formItemRef;
      }
    });
    return renderChildren;
  };

  // 对外暴露的API
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useImperativeHandle)(AdouFormRef, () => ({
    // getFormData,
    // clearForm,
    validateForm
    // clearFormData,
    // validate,
  }));
  const handleKeyDown = event => {
    // 检查是否按下了 Ctrl + Enter
    if (event.ctrlKey && event.key === "q") {
      console.log("// 检查是否按下了 Ctrl + Enter: ");
      event.preventDefault(); // 阻止默认行为
      onSubmit && onSubmit(); // 触发提交事件
    }
  };
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    style: {
      flex: 1,
      ...externalWrapperStyle
    },
    className: "adou-new-form-wrapper ".concat(externalWrapperClassName ? externalWrapperClassName : "", " ").concat(wrpa ? "flex-wrap" : "flex-nowrap", " ").concat(layout === "inline" ? "d-flex" : ""),
    ref: formRef,
    onKeyDown: handleKeyDown
  }, renderChildren());
});
/* harmony default export */ const src_0 = (Form);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});