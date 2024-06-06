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
const react_1 = __importStar(require("react"));
const react_i18next_1 = require("react-i18next");
const classnames_1 = __importDefault(require("classnames"));
const index_1 = require("../../index");
const Input = (props) => {
    // 获取 `FormContext.Provider` 提供提供的 `value` 值
    const context = (0, react_1.useContext)(index_1.FormContext);
    const { type = "text", name, size, className, prefixContent, suffixContent, placeholder, style, disabled, defaultValue, onClickOK, onFocusOK, onBlurOK, setFormItemValue } = props;
    // 确保value不会是undefined，如果defaultValue或formData中相应的值是undefined，则将其设为空字符串
    const [value, setValue] = (0, react_1.useState)(defaultValue ?? context.formData[context.name] ?? '');
    const cls = (0, classnames_1.default)({
        "input-group": true,
        [`input-group-${size}`]: size,
        [className]: className,
    });
    const handleClick = (e, ...args) => {
        onClickOK && onClickOK(e, ...args);
    };
    const handleFocus = (e, ...args) => {
        onFocusOK && onFocusOK(e, ...args);
    };
    const handleBlur = (e, ...args) => {
        // 为了让父组件能拿到值，在点击确定按钮的时候，让Form调用每个表单项的检验方法
        setFormItemValue && setFormItemValue(e.target.value);
        context.checkValidate(e.target.value);
        onBlurOK && onBlurOK(e, ...args);
    };
    const handleChange = (e, ...args) => {
        setValue(e.target.value);
        setFormItemValue && setFormItemValue(e.target.value);
        // 根据 name 属性，更新 Form 中的数据源
        context.handleChange(context.name, e.target.value);
    };
    (0, react_1.useEffect)(() => {
        // 要做0的判断
        if (context.formData[context.name] || context.formData[context.name] == 0) {
            setValue(context.formData[context.name]);
        }
        else {
            setValue("");
        }
    }, [context.formData[context.name]]);
    (0, react_1.useEffect)(() => {
        // 要做0的判断并且在formData那也要处理一下，不然会被 setValue("");置空
        if (defaultValue || defaultValue == 0) {
            // 为了一上来就提交表单，这边有默认值也要给 父组件设置
            setValue(defaultValue);
            setFormItemValue && setFormItemValue(defaultValue);
            // 这边不能直接用 context.handleChange(context.name, defaultValue)来赋默认值，会被置为空，并且失去 提交和重置功能
            context.formData[context.name] = defaultValue;
            // 新增让校验通过----解决了在切换树形节点之前如果已经出现校验失败，切换节点的时候要全部置为校验通过
            context.checkValidate(defaultValue);
        }
        else {
            // 不能直接写 setValue(defaultValue)
            // 不知道为什么如果 defaultValue是空的话不会value赋值为 ""
            // 所以只能写死为 ""
            setValue("");
        }
    }, [defaultValue]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: cls, style: { flex: 1 } },
            prefixContent && react_1.default.createElement("span", { className: "input-group-text", id: "basic-addon1" }, prefixContent),
            react_1.default.createElement("input", { step: 1, name: name, value: value, disabled: disabled, style: style, placeholder: placeholder, onChange: handleChange, onBlur: (e) => handleBlur(e, "hello1", 5561), onFocus: (e) => handleFocus(e, "hello1", 5561), onClick: (e) => handleClick(e, "hello", 556), type: type, className: "form-control", "aria-label": "Username", "aria-describedby": "basic-addon1" }),
            suffixContent && react_1.default.createElement("span", { className: "input-group-text", id: "basic-addon2" }, suffixContent))));
};
Input.displayName = "Input";
exports.default = (0, react_i18next_1.withTranslation)()(Input);
//# sourceMappingURL=index.js.map