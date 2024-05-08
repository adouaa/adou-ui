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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
require("./index.scss");
const react_i18next_1 = require("react-i18next");
const index_1 = require("../../index");
const TagInput = (props) => {
    const { defaultValue = [], onChange } = props;
    const context = (0, react_1.useContext)(index_1.FormContext) || {};
    const [inputList, setInputList] = (0, react_1.useState)(defaultValue || context.formData?.[context.name] || []);
    const [inputValue, setInputValue] = (0, react_1.useState)("");
    const [isHighlighted, setIsHighlighted] = (0, react_1.useState)(false);
    const addInput = () => {
        // 因为state是异步的，所以要把数据先处理好再使用
        const data = [...inputList, inputValue];
        setInputList(data);
        setInputValue("");
        context.checkValidate && context.checkValidate(1);
        // 把数据传回给父组件
        onChange && onChange(data);
    };
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };
    const handleKeyDown = (event) => {
        const value = event.target.value.trim(); // 会有一个空格存在，要去掉
        if (!value)
            return;
        let flag = false;
        if (event.keyCode === 32 || event.keyCode === 13) {
            event.preventDefault(); // 阻止默认行为，防止提交表单或失去焦点
            flag = inputList.length > 0 && inputList.some((item) => item === value);
            !flag && addInput();
        }
    };
    const handleDeleteItem = (item) => {
        const tagList = inputList.filter((value) => item !== value);
        setInputList(tagList);
        onChange && onChange(tagList);
        // 注意，这边不能直接用 inputList给 formData赋值，会出现不一致的情况
        context.handleChange && context.handleChange(context.name, tagList);
        context.checkValidate && context.checkValidate(inputList.filter((v) => v !== item).length);
    };
    const handleBlur = () => {
        // 注意，这边要在 inpuut失焦的时候触发，不能在 input change的时候触发，不然会出现校验错误
        context.handleChange && context.handleChange(context.name, inputList);
        context.checkValidate && context.checkValidate(inputList.length);
        setIsHighlighted(false);
    };
    const handleFocus = () => {
        setIsHighlighted(true);
    };
    (0, react_1.useEffect)(() => {
        if (defaultValue.length) {
            setInputList(defaultValue);
            if (context.formData) {
                context.formData[context.name] = defaultValue;
            }
        }
    }, [defaultValue]);
    (0, react_1.useEffect)(() => {
        setInputList(context.formData?.[context.name] || "");
    }, [context.formData?.[context.name]]);
    return react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `tag-input-wrapper form-control ${isHighlighted && "focus"}` },
            react_1.default.createElement("div", { className: "tag-input-content" },
                react_1.default.createElement("ul", { className: "tag-input-list" }, inputList.length > 0 && inputList.map((item) => {
                    return react_1.default.createElement("li", { className: "list-item", key: item },
                        item,
                        react_1.default.createElement("span", { onClick: () => handleDeleteItem(item), className: "item-icon" }, "x"));
                })),
                react_1.default.createElement("div", { className: "tag-input-control" },
                    react_1.default.createElement("input", { value: inputValue, autoComplete: "off", onFocus: handleFocus, onBlur: handleBlur, onChange: (e) => handleInputChange(e), onKeyDown: handleKeyDown, placeholder: "\u7A7A\u683C\u6216\u56DE\u8F66\u5206\u5272", type: "text", className: "input" })))));
};
exports.default = (0, react_i18next_1.withTranslation)()(TagInput);
//# sourceMappingURL=index.js.map