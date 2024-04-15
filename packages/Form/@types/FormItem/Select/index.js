"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_i18next_1 = require("react-i18next");
const classnames_1 = __importDefault(require("classnames"));
const react_1 = require("react");
const index_1 = require("../../index");
const react_2 = __importDefault(require("react"));
const Select = (props) => {
    const { defaultValue, options, placeholder, size, className, disabled, onChangeOK, setFormItemValue } = props;
    // 获取 `FormContext.Provider` 提供提供的 `value` 值
    const context = (0, react_1.useContext)(index_1.FormContext);
    const [value, setValue] = (0, react_1.useState)(defaultValue);
    const cls = (0, classnames_1.default)({
        [`form-select form-select-${size}`]: true,
        [className]: className
    });
    const handleSelect = (e) => {
        const selectedIndex = e.target.selectedIndex;
        const selectedOption = options[selectedIndex];
        setValue(selectedOption);
        onChangeOK && onChangeOK(selectedOption);
        context.handleChange(context.name, selectedOption);
        context.checkValidate(selectedOption); // 选中的时候，要让他做校验
        setFormItemValue && setFormItemValue(selectedOption);
    };
    const handleBlur = () => {
        console.log(5522, value.label);
        setTimeout(() => {
            context.checkValidate(value.label);
        }, 150);
    };
    (0, react_1.useEffect)(() => {
        // 这边用判断来，如果表单的数据 context.formData[context.name as string]没有值（""）
        // 就直接给value设置为{ label: "", value: "" }，不能直接设置为""，这样子原生select选中的值会保持原来选中的
        if (!context.formData[context.name]) {
            setValue({ label: "", value: "" });
        }
    }, [context.formData[context.name]]);
    (0, react_1.useEffect)(() => {
        if (defaultValue?.value) {
            setValue(defaultValue); // 直接在判断有默认值的地方就给表单赋值，就不会出现数据闪动的现象
            // 这边不能直接用 context.handleChange(context.name, defaultValue)来赋默认值，会被置为空，并且失去 提交和重置功能
            context.formData[context.name] = defaultValue; // 让 Form里面对应的数据项有值
            setFormItemValue && setFormItemValue(defaultValue);
        }
        else {
            // js默认的选择框好像只能这样写，不能写成 setValue=({})
            // 只能让它重置为选中第一个选项。。
            setValue({ label: "", value: "" });
        }
    }, [defaultValue]);
    return react_2.default.createElement(react_2.default.Fragment, null,
        react_2.default.createElement("select", { style: { flex: 1 }, value: value?.value, onBlur: () => handleBlur(), onChange: (e) => handleSelect(e), className: cls, "aria-label": ".form-select-lg example", disabled: disabled }, options.map(item => react_2.default.createElement("option", { disabled: item.disabled, key: item.value, value: item.value }, item.label))));
};
exports.default = (0, react_i18next_1.withTranslation)()(Select);
//# sourceMappingURL=index.js.map