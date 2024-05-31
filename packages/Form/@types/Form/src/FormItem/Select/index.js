"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_i18next_1 = require("react-i18next");
const classnames_1 = __importDefault(require("classnames"));
const react_1 = require("react");
const index_1 = require("../../index");
require("./index.scss");
const getAbsolutePositionOfStage_1 = __importDefault(require("../../../../utils/src/libs/getAbsolutePositionOfStage"));
const react_2 = __importDefault(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
const Select = (props) => {
    const { style, defaultValue, options, placeholder, size, className, disabled, transparent, onChangeOK, setFormItemValue } = props;
    // 获取 `FormContext.Provider` 提供提供的 `value` 值
    const context = (0, react_1.useContext)(index_1.FormContext);
    const [newOptions, setNewOptions] = (0, react_1.useState)(options || []);
    const [value, setValue] = (0, react_1.useState)(defaultValue) || {};
    const [showOptions, setShowOptions] = (0, react_1.useState)(false);
    const cls = (0, classnames_1.default)({
        [`form-select form-select-${size}`]: true,
        [className]: className
    });
    const handleSelect = (e) => {
        const selectedIndex = e.target.selectedIndex - 1;
        const selectedOption = options[selectedIndex];
        setValue(selectedOption);
        context.handleChange(context.name, selectedOption);
        context.checkValidate(selectedOption); // 选中的时候，要让他做校验
        setFormItemValue && setFormItemValue(selectedOption);
        onChangeOK && onChangeOK(selectedOption);
    };
    const handleBlur = () => {
        // 这边就不用再加 定时器了
        context.checkValidate(value?.value); // 将value.label换成value.value，为了兼容默认值为空是 请选择的情况
    };
    // 测试getAbsolutePosition
    const customSelectRef = (0, react_1.useRef)();
    const contentRef = (0, react_1.useRef)();
    const [customSelectContentPosition, setCustomSelectContentPosition] = (0, react_1.useState)({});
    const handleDivClick = (e) => {
        if (disabled)
            return;
        // 新增使用createPortal来定位下拉框
        const position = (0, getAbsolutePositionOfStage_1.default)(customSelectRef.current, 0, 0);
        setCustomSelectContentPosition(position);
        e.stopPropagation(); // 阻止事件冒泡
        setShowOptions(!showOptions);
    };
    const handleOptionClick = (item) => {
        context.handleChange(context.name, item);
        context.checkValidate(item); // 选中的时候，要让他做校验
        setFormItemValue && setFormItemValue(item);
        onChangeOK && onChangeOK(item);
        setValue(item);
    };
    const handleClick = (e) => {
        let classNameList = ["custom-select form-control"];
        let value = e.target;
        if (!classNameList.includes(value.className)) {
            setShowOptions(false);
        }
    };
    (0, react_1.useEffect)(() => {
        window.addEventListener("click", handleClick);
        return () => {
            window.removeEventListener("click", handleClick);
        };
    });
    (0, react_1.useEffect)(() => {
        // 这边用判断来，如果表单的数据 context.formData[context.name as string]没有值（""）
        // 就直接给value设置为{ label: "", value: "" }，不能直接设置为""，这样子原生select选中的值会保持原来选中的
        if (!context.formData[context.name]) {
            setValue({ label: "", value: "" });
        }
    }, [context.formData[context.name]]);
    (0, react_1.useEffect)(() => {
        if (defaultValue?.value) {
            const selectOption = options.find((option) => option.value === defaultValue.value);
            setValue(selectOption); // 直接在判断有默认值的地方就给表单赋值，就不会出现数据闪动的现象
            // 这边不能直接用 context.handleChange(context.name, defaultValue)来赋默认值，会被置为空，并且失去 提交和重置功能
            context.formData[context.name] = selectOption; // 让 Form里面对应的数据项有值
            setFormItemValue && setFormItemValue(selectOption);
        }
        else {
            // js默认的选择框好像只能这样写，不能写成 setValue=({})
            // 只能让它重置为选中第一个选项。。
            setValue({ label: "", value: "" });
        }
    }, [defaultValue]);
    (0, react_1.useEffect)(() => {
        // 创建一个新数组，将 "请选择" 选项添加在数组的开头
        const enhancedOptions = [...options];
        setNewOptions(enhancedOptions);
        // 如果 defaultValue 未定义，则将选择设置为 "请选择" 选项 -- 不写也没问题qwq
        /* if (!defaultValue) {
            setValue({ label: "请选择", value: "" });
        } */
    }, [options]);
    return react_2.default.createElement("div", { className: "select-wrapper", style: style },
        react_2.default.createElement("div", { "aria-disabled": disabled, ref: customSelectRef, onBlur: handleBlur, onClick: (e) => handleDivClick(e), tabIndex: 1, className: "custom-select form-control", style: { textAlign: "left", background: transparent ? "transparent" : "#fff" } },
            value?.value ? value.label : react_2.default.createElement("span", { className: "select-placeholder" }, placeholder),
            react_2.default.createElement("i", { onClick: (e) => handleDivClick(e), className: `icon fa-solid fa-caret-right rotate-up ${showOptions ? "rotate-up" : "rotate-down"}` })),
        react_dom_1.default.createPortal(react_2.default.createElement("div", { style: { position: "absolute", top: (customSelectContentPosition.y + customSelectContentPosition.height) + "px", left: customSelectContentPosition.x + "px" }, ref: contentRef, className: `custom-select-content ${showOptions ? "custom-select-content-open" : ""}` }, showOptions && newOptions.map(item => react_2.default.createElement("div", { onClick: () => handleOptionClick(item), className: "option", key: item.value }, item.label))), document.body));
};
exports.default = (0, react_i18next_1.withTranslation)()(Select);
//# sourceMappingURL=index.js.map