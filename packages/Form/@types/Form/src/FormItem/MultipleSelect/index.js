"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_i18next_1 = require("react-i18next");
const classnames_1 = __importDefault(require("classnames"));
const react_1 = __importStar(require("react"));
require("./index.css");
const index_1 = require("../../index");
const react_2 = require("react");
const MultipleSelect = (props) => {
    const { defaultValue, showSelected = true, options, size, className, disabled = false, setFormItemValue, onChangeOK, onMultipleSelectChangeOK } = props;
    // 获取 `FormContext.Provider` 提供提供的 `value` 值
    const context = (0, react_1.useContext)(index_1.FormContext);
    // const [value, setValue] = useState(defaultValue || ""); // 给个 || ""就会让 input为受苦状态
    // 注意！！！如果发现状态没有按预知的方向变化的话，就考虑用 xxxRef来替代。。。
    // const prevSelectedValueRef = useRef<string>(defaultValue || "");
    const searchValueRef = (0, react_2.useRef)(defaultValue || "");
    const [tempOptions, setTempOptions] = (0, react_2.useState)(options || []);
    const [showOptions, setShowOptions] = (0, react_2.useState)(false);
    const [filterdOptions, setFilterdOptions] = (0, react_2.useState)(options); // 多选主要是靠这个来展示哪个选项被打钩
    // 是否展示选中的选项
    const [selectedOptions, setSelectedOptions] = (0, react_2.useState)([]); // 选中的选项展示在 框中
    const [showSelectedOptions, setShowSelectedOptions] = (0, react_2.useState)(false);
    let selectedOptionRefs = [];
    let optionItemRefs = [];
    // 框高亮
    const [isHighlighted, setIsHighlighted] = (0, react_2.useState)(false);
    const cls = (0, classnames_1.default)({
        [`form-select form-select-${size} mb-3`]: true,
        [className]: className
    });
    const filterdOption = (option) => {
        filterdOptions.forEach(item => {
            if (item.value === option.value) {
                item.selected = false;
            }
        });
        setFilterdOptions(filterdOptions); // 这句竟然加和不加都可以。。。
    };
    const handleSelect = (option) => {
        option.selected = true;
        let hasSelected = selectedOptions.some(item => item.label === option.label);
        const nowSelectedList = selectedOptions.filter(item => item.label !== option.label);
        // 这句话写不写都可以，因为在下面的 useEffect中也为该变量赋值了
        setSelectedOptions(hasSelected ? nowSelectedList : [...selectedOptions, option]);
        hasSelected && filterdOption(option);
        setShowSelectedOptions(true);
        // 这里不能直接用 selectedOptions这个状态，会有延迟
        // 要用原来所有的状态，去过滤掉没选上的，再传递给父组件
        const selectedList = (hasSelected ? nowSelectedList : [...selectedOptions, option]);
        onMultipleSelectChangeOK && onMultipleSelectChangeOK(selectedList);
        context.handleChange && context.handleChange(context.name, selectedList);
        setFormItemValue && setFormItemValue(selectedList);
        const length = hasSelected ? nowSelectedList.length : 1;
        setTimeout(() => {
            context.checkValidate && context.checkValidate(length);
        }, 100); // 选择或者取消选择的时候也要进行校验
    };
    const handleInputClick = (e) => {
        setIsHighlighted(true);
        // 这个时候也要重新过滤数据
    };
    const handleInputChange = (e) => {
        let value = e.target.value;
        searchValueRef.current = value;
        onChangeOK && onChangeOK(e.target.value);
        // 输入改变的时候重新过滤
    };
    // 选项的ref数组--巧妙
    const handleDeleteItem = (item) => {
        const selectedList = selectedOptions.filter(option => option !== item);
        setSelectedOptions(selectedList);
        setFilterdOptions(filterdOptions.map((v) => {
            if (v.label === item.label) {
                v.selected = false;
            }
            return v;
        }));
        onChangeOK && onChangeOK(selectedList);
        context.checkValidate && context.checkValidate(selectedList.length);
        context.handleChange && context.handleChange(context.name, selectedList);
    };
    const handleBlur = () => {
        context.checkValidate && context.checkValidate(selectedOptions.length);
    };
    // 一些用来判断选项是否展示的的Ref
    const multipleInputRef = (0, react_2.useRef)();
    const selectListRef = (0, react_2.useRef)();
    // 巧妙
    const multipleSelectWrapperFormControlRef = (0, react_2.useRef)();
    // 点击外边wrapper，展示选项
    const handleWrapperClick = () => {
        setShowOptions(true);
    };
    (0, react_2.useEffect)(() => {
        window.addEventListener("click", (e) => {
            // 用类名方便
            let classNames = ["multiple-input", "option-icon", "option-item", "option-item false", "option-item multiple-select-active", "select-list", "selected-option", "multiple-select-wrapper form-control ", "multiple-select-wrapper form-control focus"];
            if (!classNames.includes(e.target.className)) {
                setIsHighlighted(false);
                setShowOptions(false);
            }
            else {
            }
        });
    }, []);
    const newFilterOptions = (arr, item) => {
        arr.forEach((i) => {
            if (i.user_id === item.user_id) {
                i.selected = true;
            }
        });
        setFilterdOptions(arr);
    };
    // 让多选框默认展示父组件传递过来的值
    (0, react_2.useEffect)(() => {
        let arr = [];
        let tempFilterdOptions = [];
        if (defaultValue?.length) {
            if (context.formData) {
                context.formData[context.name] = defaultValue;
            }
            setFormItemValue && setFormItemValue(defaultValue);
            defaultValue?.map((item) => {
                tempOptions.some((option) => {
                    option.value === item.value && arr.push(item);
                    return false;
                });
                return false;
            });
            if (arr?.length) {
                setSelectedOptions(arr);
                setShowSelectedOptions(true);
                setTimeout(() => {
                    setFilterdOptions(preArr => {
                        preArr.forEach(item => {
                            tempFilterdOptions.push({ ...item, selected: arr.some(i => i.value === item.value) });
                        });
                        return tempFilterdOptions;
                    });
                }, 0);
            }
        }
        else {
            setSelectedOptions([]);
            setFilterdOptions(options?.map(item => {
                item.selected = false;
                return item;
            }));
        }
    }, [defaultValue]);
    (0, react_2.useEffect)(() => {
        // 把option后面打钩的选项置空（option后面都不打钩，即 selected置为false）
        if (!context?.formData?.[context?.name]) {
            setFilterdOptions(preArr => {
                return preArr?.map(item => {
                    item.selected = false;
                    return item;
                });
            });
        }
        // 把展示在input的选项置空，即没有选中的选项，要判断下是否在 Form下
        if (context.formData) {
            setSelectedOptions(context?.formData?.[context?.name] || []);
        }
    }, [context?.formData?.[context?.name]]);
    (0, react_2.useEffect)(() => {
        if (selectedOptions.length) {
            selectedOptions.forEach((item) => {
                newFilterOptions(options, item);
            });
        }
        else {
            setFilterdOptions(options);
            setTempOptions(options);
        }
    }, [options]);
    return react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { ref: multipleSelectWrapperFormControlRef, tabIndex: 0, onBlur: handleBlur, onClick: handleWrapperClick, className: `multiple-select-wrapper form-control ${isHighlighted ? "focus" : ""}` },
            react_1.default.createElement("div", { ref: selectListRef, className: "select-list" }, showSelected && showSelectedOptions && selectedOptions?.map((option, index) => {
                return react_1.default.createElement("div", { ref: selectedOptionRefs[index], className: "selected-option", key: option.value, style: {} },
                    option.label,
                    react_1.default.createElement("span", { onClick: () => handleDeleteItem(option), className: "option-icon" }, "x"));
            })),
            react_1.default.createElement("div", { className: "input-control" },
                react_1.default.createElement("input", { ref: multipleInputRef, placeholder: "\u8F93\u5165\u5173\u952E\u8BCD", onChange: (e) => handleInputChange(e), onClick: handleInputClick, disabled: disabled, type: "text", className: "multiple-input", "aria-label": "Username", "aria-describedby": "basic-addon1" }))),
        !disabled && showOptions &&
            react_1.default.createElement("div", { className: "option-wrapper multiple-select-option-wrapper" }, filterdOptions?.map((option, index) => {
                // --巧妙
                return react_1.default.createElement("div", { ref: optionItemRefs[index], key: index, onClick: () => handleSelect(option), className: `option-item ${option.selected && "multiple-select-active"}` }, option.label);
            })));
};
exports.default = (0, react_i18next_1.withTranslation)()(MultipleSelect);
//# sourceMappingURL=index.js.map