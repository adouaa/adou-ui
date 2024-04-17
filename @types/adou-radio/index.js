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
const Radio = (props) => {
    const { className, options, defaultValue, onChangeOK } = props;
    // 确保value不会是undefined，如果defaultValue或formData中相应的值是undefined，则将其设为空字符串
    const [optionsList, setOptionsList] = (0, react_1.useState)(options || []);
    const cls = (0, classnames_1.default)({
        "form-check-input": true,
        [className]: className
    });
    const handleChange = (item) => {
        setOptionsList(preArr => {
            return preArr?.map(option => {
                return { ...option, checked: option.value === item.value };
            });
        });
        onChangeOK && onChangeOK(item);
    };
    (0, react_1.useEffect)(() => {
        if (defaultValue?.value) {
            setOptionsList(preArr => {
                return preArr?.map(option => {
                    if (defaultValue.value === option.value) {
                        option.checked = true;
                    }
                    return option;
                });
            });
        }
    }, []);
    return react_1.default.createElement(react_1.default.Fragment, null, optionsList?.map(item => {
        return react_1.default.createElement("div", { key: item.value, className: "form-check", style: { textAlign: "left" } },
            react_1.default.createElement("input", { disabled: item.disabled, className: cls, type: "radio", name: item.name, id: item.id, checked: item.checked, onChange: () => handleChange(item), value: item.value }),
            react_1.default.createElement("label", { className: "form-check-label", htmlFor: item.id }, item.label || "Default Radio"));
    }));
};
exports.default = (0, react_i18next_1.withTranslation)()(Radio);
//# sourceMappingURL=index.js.map