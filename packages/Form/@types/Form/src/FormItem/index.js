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
const index_1 = require("../index");
require("./index.css");
const Input_1 = __importDefault(require("./Input"));
const Select_1 = __importDefault(require("./Select"));
const Textarea_1 = __importDefault(require("./Textarea"));
const LiveSearchSelect_1 = __importDefault(require("./LiveSearchSelect"));
const MultipleSelect_1 = __importDefault(require("./MultipleSelect"));
const Radio_1 = __importDefault(require("./Radio"));
const Checkbox_1 = __importDefault(require("./Checkbox"));
const TagInput_1 = __importDefault(require("./TagInput"));
const FormItem = (props) => {
    // 获取 `FormContext.Provider` 提供提供的 `value` 值
    const context = (0, react_1.useContext)(index_1.FormContext);
    const { suffixIcon, errorInline = false, children, width, name, inline = true, labelAlignY = "center", label, labelWidth = 100, validate, rule, maxLabelLength = 0, labelAlignX = "right", onSuffixIconClick } = props;
    const [error, setError] = (0, react_1.useState)("");
    // 每个字体的width
    const eachWordWidth = 24;
    // 用于失焦的时候来验证表单
    const checkValidate = (value) => {
        if (validate) {
            context.handleValidate(false); // 一开始进去先置为错误的，表单验证不通过
            if (rule[0].required && !value) {
                return setError(rule[0].message);
            }
            if (rule[1]?.type) {
                const type = rule[1].type;
                switch (type) {
                    case "email":
                        if (!/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value)) {
                            return setError(rule[1].message);
                        }
                        break;
                    case "number":
                        if (!/^[0-9]*$/.test(value)) {
                            return setError(rule[1].message);
                        }
                }
            }
            context.handleValidate(true); // 最后可以执行到这步的时候，说明 表单验证通过
            setError("");
        }
        else { // 为了兼容动态判断是否需要检验表单的情况
            setError("");
            context.handleValidate(false);
        }
    };
    const handleSuffixIconClick = () => {
        onSuffixIconClick && onSuffixIconClick(name, context.formData[name]);
    };
    const renderContent = () => {
        const enhancedChildren = react_1.default.Children.map(props.children, (child) => {
            return react_1.default.cloneElement(child, {
                setFormItemValue: handleSetFormItemValue, // 把子元素的值设置到表单中
            });
        });
        // 子元素检查
        if (react_1.default.isValidElement(children)) {
            return (react_1.default.createElement("div", { className: `form-item-wrapper ${errorInline ? "error-inline" : ""}` },
                react_1.default.createElement("div", { style: { width: width }, className: `form-item mb-3 ${inline && `d-flex align-items-${labelAlignY}`}` },
                    react_1.default.createElement("div", { className: "form-item-label", style: { width: ((maxLabelLength * eachWordWidth > labelWidth) ? labelWidth : maxLabelLength * eachWordWidth) + "px", textAlign: labelAlignX } },
                        label,
                        ":"),
                    react_1.default.createElement("div", { style: { flex: 1, marginLeft: "15px" } }, enhancedChildren),
                    suffixIcon && react_1.default.createElement("div", { className: "suffix-icon-container", onClick: handleSuffixIconClick }, suffixIcon)),
                error && react_1.default.createElement("div", { className: `form-item-error text-danger small ${error ? 'fadeIn' : 'fadeOut'}`, style: { textAlign: "left", margin: `-15px 0 5px ${((maxLabelLength * eachWordWidth > labelWidth) ? labelWidth + (0.8 * eachWordWidth) : (maxLabelLength + 0.8) * eachWordWidth) + "px"}`, marginLeft: `${errorInline && "10px"}` } }, error)));
        }
        return null;
    };
    // Form自动校验逻辑
    const newFormItemValue = (0, react_1.useRef)();
    const handleSetFormItemValue = (value) => {
        newFormItemValue.current = value;
    };
    const handleValidate = (formData, forceTrue) => {
        if (forceTrue) {
            setError("");
            return true;
        }
        else {
            if (validate) {
                let valid = true;
                if (Array.isArray(formData[name])) {
                    if (rule[0].required && !formData[name].length) {
                        setError(rule[0].message);
                        valid = false;
                        return valid;
                    }
                }
                else {
                    if (rule[0].required && !formData[name]) {
                        setError(rule[0].message);
                        valid = false;
                        return valid;
                    }
                }
                if (rule[1]?.type) {
                    const type = rule[1].type;
                    switch (type) {
                        case "email":
                            if (!/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(formData[name])) {
                                setError(rule[1].message);
                                valid = false;
                            }
                            break;
                        case "number":
                            if (!/^[0-9]*$/.test(formData[name])) {
                                setError(rule[1].message);
                                valid = false;
                            }
                    }
                }
                if (valid) {
                    setError("");
                }
                return valid;
            }
            else { // 为了兼容动态校验表单的情况
                setError("");
                return true;
            }
        }
    };
    (0, react_1.useEffect)(() => {
        context?.registerFormItem({
            name,
            validate,
            handleValidate: handleValidate // 无法做动态校验哈哈
        });
        // 组件卸载时可能需要一个注销逻辑
    }, []);
    // 复写 FormContext.Provider，增加 name 参数的传递
    return react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(index_1.FormContext.Provider, { value: { ...context, checkValidate, name } }, renderContent()));
};
FormItem.displayName = 'formItem';
FormItem.Input = Input_1.default;
FormItem.Select = Select_1.default;
FormItem.TextArea = Textarea_1.default;
FormItem.LiveSearchSelect = LiveSearchSelect_1.default;
FormItem.MultipleSelect = MultipleSelect_1.default;
FormItem.Radio = Radio_1.default;
FormItem.Checkbox = Checkbox_1.default;
FormItem.TagInput = TagInput_1.default;
exports.default = FormItem;
//# sourceMappingURL=index.js.map