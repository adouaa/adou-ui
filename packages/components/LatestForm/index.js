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



// 新增一个接口来扩展 Form 组件类型，使其包含 Item 属性

const Form = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((_ref, AdouFormRef) => {
  let {
    wrpa = true,
    externalWrapperClassName,
    externalWrapperStyle,
    commonRules,
    form,
    commonFormItemWrapperWidth,
    commonFormItemWrapperMinWidth,
    commonFormItemWrapperMaxWidth,
    commonWrapperWidth,
    clearable = true,
    size,
    labelWidth,
    layout,
    oneLine = false,
    data,
    labelPosition,
    labelColor = 'rgb(63 109 184)',
    inline,
    required,
    children,
    eachWordWidth = 22,
    commonSuffixIcon = '',
    onSubmit
  } = _ref;
  const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(data || {});
  const formRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  // 存放 FormItem 的 refs
  const formItemRefs = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({});

  /* const handleChangeData = (key: string, value: any) => {
        setFormData((prevData: any) => ({
            ...prevData,
            [key]: value,
        }));
        onFormDataChange && onFormDataChange(key, value);
    }; */

  const validateForm = () => {
    let isValid = true;
    for (const key in formItemRefs.current) {
      const formItemRef = formItemRefs.current[key];
      console.log('formItemRef: ', formItemRef);
      if (formItemRef.current) {
        const result = formItemRef.current.validateField('', '', true);
        if (!result) {
          isValid = false;
        }
      }
    }
    return isValid;
  };

  // 增强 form 对象，添加 validate 方法
  form.validate = validateForm;
  const getFormData = function () {
    let needCheck = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    if (needCheck) {
      const isValid = validateForm();
      if (!isValid) return false;
    }
    return formData;
  };
  const clearFormData = () => {
    setFormData({});
  };

  /* const getFormData = (needCheck: boolean = true) => {
        const formWrapper = formRef.current; // 获取 search-wrapper 的 DOM 元素
        if (!formWrapper) return;
            if (needCheck) {
            const isValid = validateForm();
            if (!isValid) return false;
        }
            // 遍历所有表单元素
        const formValues: any = {};
        const formElements = formWrapper.querySelectorAll('input, select, textarea');
            formElements.forEach((element: any) => {
            const { name, value, tagName, type } = element;
            if (!name) return;
            const child = childRefs.current[name]?.current;
            // 处理 input 元素
            if (tagName === 'INPUT') {
                if (type === 'checkbox') {
                    // 如果是复选框，更新 formValues[name] 为选中的复选框的值的数组
                    if (!formValues[name]) {
                        formValues[name] = [];
                    }
                    if (element.checked) {
                        // 如果是 checkbox的话，会造出多个 input type="checkbox"的表单
                        formValues[name].push(value);
                    }
                } else {
                    if (child?.getValue) {
                        formValues[name] = child.getValue();
                    } else {
                        formValues[name] = type === 'number' ? Number(value) : value;
                    }
                }
            }
            // 处理 select 元素
            else if (tagName === 'SELECT') {
                if (child?.getValue) {
                    formValues[name] = child.getValue();
                } else {
                    formValues[name] = element.value;
                }
            }
            // 处理 textarea 元素
            else if (tagName === 'TEXTAREA') {
                formValues[name] = value;
            }
        });
            // 输出收集到的表单值
            // 这里可以根据需要，将 formValues 传递给其他处理函数或者组件
        return formValues;
    }; */

  const clearForm = () => {
    const formWrapper = formRef.current; // 获取 search-wrapper 的 DOM 元素
    if (!formWrapper) return;

    // 遍历所有child
    for (let key in childRefs.current) {
      let child = childRefs.current[key];
      child.current && child.current.clear && child.current.clear();
    }
  };

  /* const validateForm = () => {
        const formWrapper = formRef.current; // 获取 search-wrapper 的 DOM 元素
        if (!formWrapper) return false;
            let isValid = true; // 默认表单验证通过
            // 遍历所有child
        for (let key in childRefs.current) {
            let child = childRefs.current[key];
            // 如果该表单组件没有validate方法，代表不做校验
            if (child.current?.validate) {
                const valid = child.current && child.current.validate && child.current.validate();
                    if (!valid) {
                    console.log('存在校验不通过的表单：', key);
                        isValid = false;
                }
            }
        }
            if (!isValid) {
            console.log('表单校验失败，请填写所有必填项！');
        }
            return isValid;
    }; */

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
      const props = child.props;
      if (child.type.displayName !== 'FormItem') return; // 过滤掉不是 FormItem
      const formItemRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createRef(); // 创建一个 ref
      // child.type 子元素自身（FormItem），检查其静态属性 displayName 是否满足条件
      const enhancedChildren = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().cloneElement(child, {
        labelWidth: labelWidth || maxLengthLabelWidth + 'px',
        key: props.name,
        // ref 稍后哦再做，可能子组件要用 React.ForwdRef() 来包裹
        ...(child.formItemRef ? {
          formItemRef: child.formItemRef
        } : {
          formItemRef
        }),
        4: maxLengthLabelWidth + 'px',
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
        wrapperWidth: commonWrapperWidth,
        formItemWrapperWidth: commonFormItemWrapperWidth,
        formItemWrapperMaxWidth: commonFormItemWrapperMaxWidth,
        formItemWrapperMinWidth: commonFormItemWrapperMinWidth,
        rules: commonRules,
        oneLine,
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
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(AdouFormRef, () => ({
    // getFormData,
    // clearForm,
    validateForm
    // clearFormData,
    // validate,
  }));
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setFormData(data);
  }, [data]);
  const handleKeyDown = event => {
    // 检查是否按下了 Ctrl + Enter
    if (event.ctrlKey && event.key === 'q') {
      console.log('// 检查是否按下了 Ctrl + Enter: ');
      event.preventDefault(); // 阻止默认行为
      onSubmit && onSubmit(); // 触发提交事件
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      flex: 1
    },
    className: "adou-new-form-wrapper ".concat(externalWrapperClassName, " ").concat(wrpa ? 'flex-wrap' : 'flex-nowrap', " ").concat(layout === 'inline' ? 'd-flex' : ''),
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