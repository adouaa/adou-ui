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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(442);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const Form = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((_ref, AdouFormRef) => {
  let {
    oneLine = false,
    data,
    labelPosition,
    labelColor = "rgb(63 109 184)",
    inline,
    required,
    children,
    eachWordWidth = 21,
    commonSuffixIcon = "",
    onFormDataChange,
    onSubmit
  } = _ref;
  const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(data || {});
  const formRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const handleChangeData = (key, value) => {
    setFormData(prevData => ({
      ...prevData,
      [key]: value
    }));
    onFormDataChange && onFormDataChange(key, value);
  };
  const getData = function () {
    let needCheck = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    if (needCheck) {
      const isValid = validateForm();
      if (!isValid) return false;
    }
    return formData;
  };
  const getFormData = function () {
    let needCheck = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    const formWrapper = formRef.current; // 获取 search-wrapper 的 DOM 元素
    if (!formWrapper) return;
    if (needCheck) {
      const isValid = validateForm();
      if (!isValid) return false;
    }

    // 遍历所有表单元素
    const formValues = {};
    const formElements = formWrapper.querySelectorAll("input, select, textarea");
    formElements.forEach(element => {
      var _childRefs$current$na;
      const {
        name,
        value,
        tagName,
        type
      } = element;
      if (!name) return;
      const child = (_childRefs$current$na = childRefs.current[name]) === null || _childRefs$current$na === void 0 ? void 0 : _childRefs$current$na.current;
      // 处理 input 元素
      if (tagName === "INPUT") {
        if (type === "checkbox") {
          // 如果是复选框，更新 formValues[name] 为选中的复选框的值的数组
          if (!formValues[name]) {
            formValues[name] = [];
          }
          if (element.checked) {
            // 如果是 checkbox的话，会造出多个 input type="checkbox"的表单
            formValues[name].push(value);
          }
        } else {
          if (child !== null && child !== void 0 && child.getValue) {
            formValues[name] = child.getValue();
          } else {
            formValues[name] = type === "number" ? Number(value) : value;
          }
        }
      }
      // 处理 select 元素
      else if (tagName === "SELECT") {
        if (child !== null && child !== void 0 && child.getValue) {
          formValues[name] = child.getValue();
        } else {
          formValues[name] = element.value;
        }
      }
      // 处理 textarea 元素
      else if (tagName === "TEXTAREA") {
        formValues[name] = value;
      }
    });

    // 输出收集到的表单值

    // 这里可以根据需要，将 formValues 传递给其他处理函数或者组件
    return formValues;
  };
  const clearForm = () => {
    const formWrapper = formRef.current; // 获取 search-wrapper 的 DOM 元素
    if (!formWrapper) return;

    // 遍历所有child
    for (let key in childRefs.current) {
      let child = childRefs.current[key];
      child.current && child.current.clear && child.current.clear();
    }
  };
  const validateForm = () => {
    const formWrapper = formRef.current; // 获取 search-wrapper 的 DOM 元素
    if (!formWrapper) return false;
    let isValid = true; // 默认表单验证通过

    // 遍历所有child
    for (let key in childRefs.current) {
      var _child$current;
      let child = childRefs.current[key];
      // 如果该表单组件没有validate方法，代表不做校验
      if ((_child$current = child.current) !== null && _child$current !== void 0 && _child$current.validate) {
        const valid = child.current && child.current.validate && child.current.validate();
        if (!valid) {
          console.log("存在校验不通过的表单：", key);
          isValid = false;
        }
      }
    }
    if (!isValid) {
      console.log("表单校验失败，请填写所有必填项！");
    }
    return isValid;
  };
  const childRefs = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({});
  let maxLengthLabelWidth = 0;
  const calcMaxLabelWidth = () => {
    var _sortedLabelWidthList;
    const labelWidthList = [];
    react__WEBPACK_IMPORTED_MODULE_0___default().Children.map(children, child => {
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
    react__WEBPACK_IMPORTED_MODULE_0___default().Children.map(children, child => {
      var _child$props3;
      if (!(child !== null && child !== void 0 && (_child$props3 = child.props) !== null && _child$props3 !== void 0 && _child$props3.name)) {
        renderChildren.push(child);
      } else {
        const childRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createRef(); // 创建一个 ref
        // child.type 子元素自身（FormItem），检查其静态属性 displayName 是否满足条件
        const enhancedChildren = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().cloneElement(child, {
          key: child.props.name,
          ...(child.ref ? {
            ref: child.ref
          } : {
            ref: childRef
          }),
          labelWidth: maxLengthLabelWidth + "px",
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
          onFormDataChange: handleChangeData,
          defaultValue: data[child.props.name]

          // 注意：一个组件只能有一个 ref，要么外面提供ref手动处理，要么在 Form组件下统一提供ref
          // 可以自定义要不要在Form下给表单组件提供 ref
          // [`${child.props.name === "test-select" ? "" : "ref"}`]: childRef
        });
        renderChildren.push(enhancedChildren);
        // 将子组件的 ref 存储到 childRefs 中
        // 如果子组件内部没有用 useImperativeHandle来暴露东西的话，chidRef.current就是null
        if (child.props.name) {
          childRefs.current[child.props.name] = child.ref ? child.ref : childRef;
        }
      }
    });
    return renderChildren;
  };

  // 对外暴露的API
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(AdouFormRef, () => ({
    getFormData,
    getData,
    clearForm,
    validateForm
  }));
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setFormData(data);
  }, [data]);
  const handleKeyDown = event => {
    // 检查是否按下了 Ctrl + Enter
    if (event.ctrlKey && event.key === "q") {
      console.log("// 检查是否按下了 Ctrl + Enter: ");
      event.preventDefault(); // 阻止默认行为
      onSubmit && onSubmit(); // 触发提交事件
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "adou-new-form-wrapper flex-wrap ".concat(inline ? "d-flex" : ""),
    ref: formRef,
    onKeyDown: handleKeyDown
  }, renderChildren());
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});