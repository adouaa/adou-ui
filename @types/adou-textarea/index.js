"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("react");
const react_i18next_1 = require("react-i18next");
const TextArea = (props) => {
    const { label, placeholder, disabled, defaultValue, onChangeOK } = props;
    // 获取 `FormContext.Provider` 提供提供的 `value` 值
    const [value, setValue] = (0, react_2.useState)(defaultValue ?? '');
    const handleChange = (e, ...args) => {
        setValue(e.target.value);
        // 根据 name 属性，更新 Form 中的数据源
        onChangeOK && onChangeOK(e.target.value, ...args);
    };
    (0, react_2.useEffect)(() => {
        if (defaultValue) {
            setValue(defaultValue);
            // 这边不能直接用 context.handleChange(context.name, defaultValue)来赋默认值，会被置为空，并且失去 提交和重置功能
        }
    }, [defaultValue]);
    return react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "input-group" },
            label && react_1.default.createElement("span", { className: "input-group-text" }, label),
            react_1.default.createElement("textarea", { value: value, disabled: disabled, onChange: (e) => handleChange(e), placeholder: placeholder, className: "form-control", "aria-label": "With textarea" })));
};
exports.default = (0, react_i18next_1.withTranslation)()(TextArea);
//# sourceMappingURL=index.js.map