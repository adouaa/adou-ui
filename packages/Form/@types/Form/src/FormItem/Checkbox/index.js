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
const classnames_1 = __importDefault(require("classnames"));
const react_1 = __importStar(require("react"));
const react_i18next_1 = require("react-i18next");
const index_1 = require("../../index");
const Checkbox = (props) => {
    // 获取 `FormContext.Provider` 提供提供的 `value` 值
    const context = (0, react_1.useContext)(index_1.FormContext) || {};
    const { className, inline = true, options, defaultValue, wrap = true, onChangeOK, setFormItemValue } = props;
    const [optionsList, setOptionsList] = (0, react_1.useState)(options || []);
    const cls = (0, classnames_1.default)({
        "form-check-input": true,
        [className]: className
    });
    const handleChange = (item) => {
        const updatedChheckboxData = optionsList?.map((option) => {
            if (option.value === item.value) {
                return { ...option, checked: !option.checked };
                // 下面这样写也可以
                /* item.checked = !item.checked;
            return item; */
            }
            else {
                return option;
            }
        });
        if (context.formData) {
            context.formData[context.name] = updatedChheckboxData.filter(item => item.checked);
            const checkedList = updatedChheckboxData.filter(item => item.checked);
            context.handleChange && context.handleChange(context.name, checkedList);
            context.checkValidate && context.checkValidate(checkedList.length);
        }
        setOptionsList(updatedChheckboxData);
        onChangeOK && onChangeOK(updatedChheckboxData?.filter(v => v.checked));
        setFormItemValue && setFormItemValue(updatedChheckboxData?.filter(v => v.checked));
    };
    const handleBlur = () => {
        const checkedList = optionsList.filter(item => item.checked);
        context.handleChange && context.handleChange(context.name, checkedList);
        context.checkValidate && context.checkValidate(checkedList.length);
    };
    (0, react_1.useEffect)(() => {
        if (defaultValue.length) {
            if (context.formData) {
                context.formData[context.name] = defaultValue;
            }
            setFormItemValue && setFormItemValue(defaultValue);
            setOptionsList(preArr => {
                return preArr.map(option => {
                    if (defaultValue.some((item) => item.value === option.value)) {
                        option.checked = true;
                    }
                    return option;
                });
            });
        }
        else {
            context.checkValidate && context.checkValidate(0);
        }
    }, [defaultValue]);
    (0, react_1.useEffect)(() => {
        if (!context.formData?.[context.name]) {
            setOptionsList(preArr => {
                return preArr.map(option => {
                    option.checked = false;
                    return option;
                });
            });
        }
    }, [context.formData?.[context.name]]);
    const divClasses = (0, classnames_1.default)({
        'checkbox-wrapper': true,
        'd-flex': inline,
        "flex-wrap": wrap
    });
    return react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: divClasses }, optionsList?.map(item => {
            return react_1.default.createElement("div", { key: item.value, className: "form-check", style: { textAlign: "left", marginRight: "20px" } },
                react_1.default.createElement("input", { onBlur: handleBlur, className: cls, type: "checkbox", name: item.name, id: item.id, checked: item.checked, onChange: () => handleChange(item), value: item.value }),
                react_1.default.createElement("label", { className: "form-check-label", htmlFor: item.id }, item.label || "Default Checkbox"));
        })));
};
exports.default = (0, react_i18next_1.withTranslation)()(Checkbox);
//# sourceMappingURL=index.js.map