"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_i18next_1 = require("react-i18next");
const react_1 = require("react");
const react_2 = __importDefault(require("react"));
require("./index.scss");
const react_dom_1 = __importDefault(require("react-dom"));
const index_1 = require("adou-ui/Utils/index");
const Select = react_2.default.forwardRef((props, ref) => {
    const { rounded, minWidth = "205px", optionContentMaxHeight = "300px", commonSuffixIcon, isFormItem, errMsg, labelWidth, label, labelPosition = "center", inputGroup = false, labelColor, required = false, showEmpty = true, name, width, defaultValue, options, placeholder, size, externalClassName, readOnly, transparent, maxHeight, onChange, } = props;
    const [newOptions, setNewOptions] = (0, react_1.useState)(options || []);
    const [value, setValue] = (0, react_1.useState)(defaultValue || {});
    const [showOptions, setShowOptions] = (0, react_1.useState)(false);
    // 测试getAbsolutePosition
    const customSelectRef = (0, react_1.useRef)();
    const contentRef = (0, react_1.useRef)();
    const [customSelectContentPosition, setCustomSelectContentPosition] = (0, react_1.useState)({});
    const handleDivClock = (e) => {
        // 新增使用createPortal来定位下拉框
        const position = (0, index_1.getAbsolutePosition)(customSelectRef.current, 0, 0);
        setCustomSelectContentPosition(position);
        e.stopPropagation(); // 阻止事件冒泡
        !readOnly && setShowOptions(!showOptions);
    };
    const handleSelect = (item) => {
        setValue(item);
        onChange && onChange(item);
        setShowOptions(false);
        setError(false);
    };
    (0, react_1.useEffect)(() => {
        if (defaultValue) {
            const selectOption = options.find((option) => option.value === defaultValue);
            setValue(selectOption);
        }
        else {
            setValue(""); // 如果没有默认值，重置为初始状态
        }
    }, [defaultValue, options]);
    (0, react_1.useEffect)(() => {
        // setValue({}) // 不知道要不要加 -- 不能加，加完之后会出现默认值无法赋值。。。
        if (showEmpty) {
            // 创建一个新数组，将 "空" 选项添加在数组的开头
            const enhancedOptions = [...options];
            setNewOptions(enhancedOptions);
        }
        else {
            setNewOptions(options);
        }
    }, [options]);
    const handleClick = (e) => {
        let classNameList = ["custom-select form-control"];
        let value = e.target;
        if (!classNameList.includes(value.className)) {
            setShowOptions(false);
        }
    };
    const handleSelectChange = (e) => {
        setValue(e.target.value);
    };
    const getValue = () => {
        return value?.value || value;
    };
    // 校验方法
    const [error, setError] = (0, react_1.useState)(false);
    const validate = () => {
        if (!required)
            return true;
        if (value) {
            setError(false);
            return true;
        }
        else {
            setError(true);
            return false;
        }
    };
    // 清除内容方法
    const clear = () => {
        setValue("");
    };
    const handleClickCommonSuffixIcon = () => {
        clear();
        setError(true);
    };
    // Expose validateInput method via ref
    (0, react_1.useImperativeHandle)(ref, () => ({
        validate,
        clear,
        getValue,
    }));
    const wrapperClassName = `select-wrapper ${!error && isFormItem && "mb-3"} ${externalClassName || ""}`.trim();
    (0, react_1.useEffect)(() => {
        window.addEventListener("click", handleClick);
        return () => {
            window.removeEventListener("click", handleClick);
        };
    });
    return (react_2.default.createElement("div", { className: wrapperClassName, style: { width } },
        react_2.default.createElement("select", { style: { display: "none" }, name: name },
            react_2.default.createElement("option", { value: value?.value }, value?.label)),
        inputGroup ? (react_2.default.createElement("div", { className: "input-group" },
            react_2.default.createElement("label", { className: "input-group-text", htmlFor: "inputGroupSelect01" }, label),
            react_2.default.createElement("select", { onBlur: validate, onChange: handleSelectChange, value: value?.value, disabled: readOnly, className: "form-select", id: "inputGroupSelect01" }, newOptions?.map((option) => (react_2.default.createElement("option", { key: option.value, value: option.value }, option.label)))),
            commonSuffixIcon && (react_2.default.createElement("i", { onClick: handleClickCommonSuffixIcon, className: `${commonSuffixIcon} common-suffix-icon ms-2` })))) : (react_2.default.createElement("div", { onBlur: validate, className: `content-box label-in-${labelPosition}` },
            isFormItem && (react_2.default.createElement("span", { className: "label-box", style: {
                    color: labelColor,
                    width: labelWidth,
                    flexWrap: "nowrap",
                } }, label)),
            react_2.default.createElement("div", { ref: customSelectRef, onClick: (e) => handleDivClock(e), tabIndex: 1, className: `custom-select form-control`, style: {
                    textAlign: "left",
                    background: transparent ? "transparent" : "#fff",
                    minWidth,
                    ...(rounded ? { borderRadius: "20px" } : {}),
                } },
                value?.value ? (react_2.default.createElement("span", { className: "select-value" }, value.label)) : (react_2.default.createElement("span", { className: "select-placeholder" }, placeholder)),
                react_2.default.createElement("i", { onClick: (e) => handleDivClock(e), className: `icon fa-solid fa-caret-right rotate-up ${showOptions ? "rotate-up" : "rotate-down"}` })),
            commonSuffixIcon && (react_2.default.createElement("i", { onClick: handleClickCommonSuffixIcon, className: `${commonSuffixIcon} common-suffix-icon ms-2` })),
            react_dom_1.default.createPortal(react_2.default.createElement("div", { style: {
                    position: "absolute",
                    top: customSelectContentPosition.y +
                        customSelectContentPosition.height +
                        "px",
                    left: customSelectContentPosition.x + "px",
                    ...(showOptions ? { maxHeight: optionContentMaxHeight } : {}),
                }, ref: contentRef, className: `custom-select-content ${showOptions ? "custom-select-content-open" : ""}` }, showOptions &&
                newOptions.map((item) => (react_2.default.createElement("div", { onClick: () => handleSelect(item), className: "option", key: item.value }, item.label)))), document.body))),
        error && required && (react_2.default.createElement("div", { className: "animate__animated animate__fadeIn mb-1", style: {
                color: "#DC3545",
                fontSize: "14px",
                paddingLeft: parseInt(labelWidth) > 120 ? "120px" : labelWidth,
            } }, `${errMsg || `${name}不能为空`}`))));
});
exports.default = (0, react_i18next_1.withTranslation)()(Select);
//# sourceMappingURL=index.js.map