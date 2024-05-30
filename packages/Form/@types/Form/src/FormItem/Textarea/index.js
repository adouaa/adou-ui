"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const index_1 = require("../../index");
const react_2 = __importDefault(require("react"));
require("./index.css");
const TextArea = (props) => {
    const { label, placeholder, disabled, defaultValue, onChangeOK, setFormItemValue } = props;
    // 获取 `FormContext.Provider` 提供提供的 `value` 值
    const context = (0, react_1.useContext)(index_1.FormContext);
    const [value, setValue] = (0, react_1.useState)(defaultValue ?? context.formData[context.name] ?? '');
    const handleChange = (e, ...args) => {
        setValue(e.target.value); // 手动将表单的value值赋值
        setFormItemValue && setFormItemValue(e.target.value);
        // 根据 name 属性，更新 Form 中的数据源
        context.formData[context.name] = e.target.value;
        // context.handleChange(context.name, e.target.value) // 这边不能直接用 handleChange来赋值，会出现赋值错误的情况
        onChangeOK && onChangeOK(e, ...args);
    };
    const handleBlur = (e) => {
        setFormItemValue && setFormItemValue(e.target.value);
        context.checkValidate(e.target.value); // 失焦的时候也要立马让父组件执行 检验方法
    };
    (0, react_1.useEffect)(() => {
        setValue(context.formData[context.name] || "");
    }, [context.formData[context.name]]);
    (0, react_1.useEffect)(() => {
        if (defaultValue) {
            setValue(defaultValue);
            setFormItemValue && setFormItemValue(defaultValue);
            // 这边不能直接用 context.handleChange(context.name, defaultValue)来赋默认值，会被置为空，并且失去 提交和重置功能
            context.formData[context.name] = defaultValue;
        }
        else {
            // setValue(context.formData[context.name as string] || "")
            setValue(""); // 用这个比较直接
        }
    }, [defaultValue]);
    return react_2.default.createElement(react_2.default.Fragment, null,
        react_2.default.createElement("div", { className: "textarea-warpper" },
            label && react_2.default.createElement("span", { className: "input-group-text" }, label),
            react_2.default.createElement("textarea", { value: value, disabled: disabled, onBlur: (e) => handleBlur(e), onChange: (e) => handleChange(e), placeholder: placeholder, className: "form-control", "aria-label": "With textarea" })));
};
exports.default = (0, react_i18next_1.withTranslation)()(TextArea);
//# sourceMappingURL=index.js.map