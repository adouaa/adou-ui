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
const Tooltip_1 = __importDefault(require("../../Tooltip"));
const Select = react_2.default.forwardRef((props, ref) => {
    const { selectValueMaxWidth, errorPaddingLeft, suffixContentExternalCls, selectContentExternalCls, labelMinWidth, noWrap = true, shouldFocus = false, activeColor = { font: "#fff", bgc: "#2783d8" }, returnType = "obj", showDefaultValue = false, labelKey = "label", valueKey = "value", suffixContent, showLabel = true, suffixContentType, inline, commonSuffixIcon, isFormItem, errMsg, labelWidth, label, labelPosition = "center", inputGroup = false, labelColor, required = false, showEmpty = true, name, width, defaultValue, options, placeholder, externalClassName, readOnly, transparent, optionContentMaxHeight = "200px", onChange, onFormDataChange, } = props;
    const [isShow, setIsShow] = (0, react_1.useState)(false);
    const [closing, setClosing] = (0, react_1.useState)(false);
    // const { isShow, selectWrapperRef, handleClose } = useClickOutside();
    const [newOptions, setNewOptions] = (0, react_1.useState)(options || []);
    const [value, setValue] = (0, react_1.useState)(defaultValue || {});
    const [calcMaxHeight, setCalcMaxHeight] = (0, react_1.useState)(0);
    const [isDropdownOpen, setIsDropdownOpen] = (0, react_1.useState)(false);
    const [focusedIndex, setFocusedIndex] = (0, react_1.useState)(-1); // 新增状态，用于跟踪当前聚焦的选项
    const selectWrapperRef = (0, react_1.useRef)(null);
    const customSelectRef = (0, react_1.useRef)();
    const contentRef = (0, react_1.useRef)();
    const [customSelectContentPosition, setCustomSelectContentPosition] = (0, react_1.useState)({});
    const handleClose = () => {
        if (readOnly)
            return;
        if (isShow) {
            validate(); // 打开后的关闭再去校验有没有值
            setClosing(true);
            setTimeout(() => {
                setClosing(false);
                setIsShow((prev) => !prev);
            }, 100);
        }
        else {
            setIsShow((prev) => !prev);
        }
    };
    const handleDivClick = (e) => {
        e.stopPropagation();
        if (readOnly)
            return;
        const position = (0, index_1.getAbsolutePosition)(customSelectRef.current, 0, 0);
        setCustomSelectContentPosition(position);
        if (!isDropdownOpen) {
            handleClose();
            setIsDropdownOpen(true);
        }
    };
    const handleSelect = (item) => {
        setValue(item);
        const returnValue = returnType === "obj" || showDefaultValue ? item : item[valueKey];
        onChange && onChange(returnValue);
        setError(false);
        handleClose();
        setIsDropdownOpen(false);
        // 新增onFormDataChange来修改外部传入的数据
        onFormDataChange && onFormDataChange(name, returnValue);
        setError(false);
    };
    (0, react_1.useEffect)(() => {
        // 如果是必须展示默认值，不通过列表匹配的话，进入这个判断
        if (showDefaultValue) {
            if (typeof defaultValue !== "object") {
                setValue({ [valueKey]: defaultValue, [labelKey]: defaultValue });
            }
            else if (typeof defaultValue === "object") {
                setValue(defaultValue);
            }
        }
        else {
            if (typeof defaultValue === "object") {
                const selectOption = options.find((option) => option?.[valueKey] === defaultValue?.[valueKey]);
                // 如果没有找到匹配项，则不设置选中项
                if (selectOption) {
                    setValue(selectOption);
                }
            }
            else {
                if (defaultValue || defaultValue === 0 || defaultValue === false) {
                    const selectOption = options.find((option) => option[valueKey] === defaultValue);
                    setValue(selectOption);
                }
                else {
                    setValue("");
                }
            }
        }
        // 如果有值，则自动做校验，防止一开始没值出现空提示，后面切换了有值还是出现空提示的错误
        if (defaultValue) {
            setError(false);
        }
    }, [defaultValue, options]);
    (0, react_1.useEffect)(() => {
        if (showEmpty) {
            const enhancedOptions = [...options];
            setNewOptions(enhancedOptions);
        }
        else {
            setNewOptions(options);
        }
    }, [options]);
    (0, react_1.useEffect)(() => {
        setCalcMaxHeight(newOptions.length * 34 || 100);
    }, [newOptions]);
    const handleSelectChange = (e) => {
        setValue(e.target[valueKey]);
    };
    const getValue = () => {
        // 不能加这个逻辑，这样会导致手动选择另外的选项，返回的还是 defaultValue
        /* if (showDefaultValue) {
              return defaultValue;
            } */
        if (value?.[valueKey] ||
            value?.[valueKey] === 0 ||
            value?.[valueKey] === false) {
            // 感觉可有可无
            if (returnType === "obj") {
                onFormDataChange && onFormDataChange(name, value);
            }
            else {
                onFormDataChange &&
                    onFormDataChange(name, value[valueKey] || value[labelKey]);
            }
            return value[valueKey] || value[labelKey];
        }
        else {
            return value;
        }
    };
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
    const clear = () => {
        setValue("");
    };
    const handleClickCommonSuffixIcon = () => {
        clear();
        setError(true);
    };
    (0, react_1.useImperativeHandle)(ref, () => ({
        validate,
        clear,
        getValue,
    }));
    const wrapperClassName = `select-wrapper ${!error && isFormItem && "mb-3"} ${externalClassName || ""}`.trim();
    // 全部都 通过 KeyDown来关闭下拉列表项
    const handleKeyDown = (event) => {
        if (event.key === "Tab") {
            // 当下拉项展开的时候进入这个回调，来关闭下拉项
            if (isShow) {
                handleClose();
                setIsDropdownOpen(false);
            }
            return; // 让焦点移动到下一个表单元素
        }
        else if (isShow) {
            if (event.key === "ArrowUp") {
                event.preventDefault();
                setFocusedIndex((prevIndex) => prevIndex <= 0 ? newOptions.length - 1 : prevIndex - 1);
            }
            else if (event.key === "ArrowDown") {
                event.preventDefault();
                setFocusedIndex((prevIndex) => prevIndex >= newOptions.length - 1 ? 0 : prevIndex + 1);
            }
            else if (event.key === "Enter") {
                handleClose();
                if (focusedIndex == -1)
                    return;
                event.preventDefault();
                handleSelect(newOptions[focusedIndex]);
            }
        }
    };
    // 全部都 通过 focus来展开下拉列表项
    const handleFocus = (event) => {
        if (!shouldFocus)
            return;
        const position = (0, index_1.getAbsolutePosition)(customSelectRef.current, 0, 0);
        setCustomSelectContentPosition(position);
        handleClose();
        setIsDropdownOpen(true);
    };
    (0, react_1.useEffect)(() => {
        if (!isShow) {
            setIsDropdownOpen(false);
            setFocusedIndex(-1); // 重置聚焦索引
        }
    }, [isShow]);
    (0, index_1.useClickOutside)([customSelectRef, contentRef], handleClose, contentRef.current && isShow);
    return (react_2.default.createElement("div", { onFocus: handleFocus, onKeyDown: handleKeyDown, tabIndex: 0, ref: selectWrapperRef, className: `${wrapperClassName} `, style: {
            width,
            ...(inline && !width ? { flex: 1, marginRight: "15px" } : {}),
        } },
        react_2.default.createElement("select", { style: { display: "none" }, name: name },
            react_2.default.createElement("option", { value: value?.[valueKey] }, value?.[labelKey])),
        inputGroup ? (react_2.default.createElement("div", { className: "input-group" },
            react_2.default.createElement("label", { className: "input-group-text", htmlFor: "inputGroupSelect01" }, label),
            react_2.default.createElement("select", { onBlur: validate, onChange: handleSelectChange, value: value?.[valueKey], disabled: readOnly, className: "form-select", id: "inputGroupSelect01" }, newOptions?.map((option) => (react_2.default.createElement("option", { key: option[valueKey], value: option[valueKey] }, option[labelKey])))),
            commonSuffixIcon && (react_2.default.createElement("i", { onClick: handleClickCommonSuffixIcon, className: `${commonSuffixIcon} common-suffix-icon ms-2` })))) : (react_2.default.createElement("div", { onBlur: validate, className: `content-box label-in-${labelPosition} ${labelPosition === "top" && inline ? "me-2" : ""}` },
            showLabel && label && (react_2.default.createElement("span", { className: "label-box", style: {
                    color: labelColor,
                    width: labelWidth,
                    flexWrap: "nowrap",
                    alignItems: labelPosition === "left-top" ? "start" : "center",
                    ...(labelPosition !== "top" && { display: "flex" }),
                    ...(noWrap && { whiteSpace: "nowrap" }),
                    ...(labelMinWidth && { labelMinWidth }),
                } }, label)),
            react_2.default.createElement("div", { className: "select-form-content" },
                react_2.default.createElement("div", { ref: customSelectRef, onClick: (e) => handleDivClick(e), className: `select-content form-control ${selectContentExternalCls || ""}`, style: {
                        textAlign: "left",
                        background: transparent
                            ? "transparent"
                            : readOnly
                                ? "#eee"
                                : "#fff",
                        flex: 1,
                        ...(suffixContentType === "button"
                            ? {
                                borderTopRightRadius: 0,
                                borderBottomRightRadius: 0,
                                // borderRight: "none",
                            }
                            : {}),
                    } },
                    value?.[valueKey] ||
                        value?.[valueKey] === 0 ||
                        value?.[valueKey] === false ? (selectValueMaxWidth ? (react_2.default.createElement(Tooltip_1.default, { text: value?.[labelKey] },
                        react_2.default.createElement("span", { className: "select-value ellipsis-1", style: { maxWidth: selectValueMaxWidth } }, value[labelKey]))) : (react_2.default.createElement("span", { className: "select-value" }, value[labelKey]))) : (react_2.default.createElement("span", { className: "select-placeholder" }, placeholder)),
                    react_2.default.createElement("i", { style: { color: labelColor }, className: `icon fa-solid fa-caret-right ${isShow ? "rotate-up" : "rotate-down"}` })),
                suffixContent && (react_2.default.createElement("div", { className: `${suffixContentType === "button"
                        ? "suffix-content-btn-wrapper px-2"
                        : "suffix-content-text-wrapper ms-2"} ${suffixContentExternalCls || ""}` }, suffixContent))),
            commonSuffixIcon && (react_2.default.createElement("i", { onClick: handleClickCommonSuffixIcon, className: `${commonSuffixIcon} common-suffix-icon ms-2` })),
            react_dom_1.default.createPortal(react_2.default.createElement("div", { style: {
                    position: "absolute",
                    top: customSelectContentPosition.y +
                        customSelectContentPosition.height +
                        "px",
                    left: customSelectContentPosition.x + "px",
                    ...(isShow
                        ? {
                            maxHeight: calcMaxHeight > parseInt(optionContentMaxHeight)
                                ? optionContentMaxHeight
                                : calcMaxHeight + "px",
                        }
                        : {}),
                    ...(closing ? { opacity: 0, transform: "scaleY(0)" } : {}),
                }, ref: contentRef, className: `select-option-content ${isShow ? "select-option-content-open" : ""} ${closing ? "select-option-content-closing" : ""}` }, isShow && (react_2.default.createElement("div", { className: `option-box` }, newOptions.length > 0 ? (newOptions.map((item, index) => (react_2.default.createElement("div", { onClick: () => handleSelect(item), style: {
                    color: value?.[valueKey] === item[valueKey]
                        ? activeColor.font
                        : "#000",
                    backgroundColor: value?.[valueKey] === item[valueKey]
                        ? activeColor.bgc
                        : "",
                }, className: `select-option ${value?.[valueKey] === item[valueKey]
                    ? "select-option-active"
                    : ""} ${focusedIndex === index ? "focused" : ""}`, key: item[valueKey] }, item[labelKey])))) : (react_2.default.createElement("div", { className: "none-match ps-2" }, "No content"))))), document.body))),
        error && required && (react_2.default.createElement("div", { className: "animate__animated animate__fadeIn mb-1", style: {
                color: "#DC3545",
                fontSize: "14px",
                paddingLeft: errorPaddingLeft
                    ? errorPaddingLeft
                    : parseInt(labelWidth) > 120
                        ? "120px"
                        : parseInt(labelWidth) + 20 + "px",
            } }, `${errMsg || `${label || name}不能为空`}`))));
});
exports.default = (0, react_i18next_1.withTranslation)()(Select);
//# sourceMappingURL=index.js.map