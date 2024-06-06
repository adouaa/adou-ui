"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const index_1 = require("../../index");
const react_2 = __importDefault(require("react"));
const react_codemirror2_1 = require("react-codemirror2");
require("codemirror/lib/codemirror.css");
require("codemirror/theme/material.css");
require("codemirror/theme/base16-light.css");
require("codemirror/theme/base16-dark.css");
require("codemirror/mode/htmlmixed/htmlmixed");
require("codemirror/mode/css/css");
require("codemirror/mode/javascript/javascript");
require("./index.scss");
const CodeTextArea = (props) => {
    const { autoCloseTags = true, showCursorWhenSelecting = true, styleActiveLine = true, mode = "htmlmixed", theme = "base16-light", lineNumbers = false, lineWrapping = true, readOnly, defaultValue, onChangeOK, setFormItemValue } = props;
    // 获取 `FormContext.Provider` 提供提供的 `value` 值
    const context = (0, react_1.useContext)(index_1.FormContext);
    const [value, setValue] = (0, react_1.useState)(defaultValue || '');
    const handleChange = (value, ...args) => {
        setValue(value); // 手动将表单的value值赋值
        setFormItemValue && setFormItemValue(value);
        // 根据 name 属性，更新 Form 中的数据源
        context.formData[context.name] = value;
        // context.handleChange(context.name, e.target.value) // 这边不能直接用 handleChange来赋值，会出现赋值错误的情况
        onChangeOK && onChangeOK(value, ...args);
    };
    const handleBlur = (e) => {
        setFormItemValue && setFormItemValue(e.target.value);
        context.checkValidate(e.target.value); // 失焦的时候也要立马让父组件执行 检验方法
    };
    (0, react_1.useEffect)(() => {
        setValue(context.formData[context.name] || "");
    }, [context.formData[context.name]]);
    (0, react_1.useEffect)(() => {
        console.log("defaultValue = ", defaultValue);
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
            react_2.default.createElement(react_codemirror2_1.Controlled, { value: value, onBeforeChange: (editor, data, value) => {
                    handleChange(value);
                }, options: {
                    readOnly,
                    showCursorWhenSelecting,
                    mode,
                    theme,
                    lineNumbers,
                    lineWrapping,
                } })));
};
exports.default = (0, react_i18next_1.withTranslation)()(CodeTextArea);
//# sourceMappingURL=index.js.map