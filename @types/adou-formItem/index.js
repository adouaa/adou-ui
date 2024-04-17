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
const adou_form_1 = require("../adou-form");
const adou_formItem_input_1 = __importDefault(require("./adou-formItem-input"));
const adou_formItem_select_1 = __importDefault(require("./adou-formItem-select"));
const adou_formItem_textarea_1 = __importDefault(require("./adou-formItem-textarea"));
const adou_formItem_liveSearchSelect_1 = __importDefault(require("./adou-formItem-liveSearchSelect"));
const adou_formItem_multipleSelect_1 = __importDefault(require("./adou-formItem-multipleSelect"));
const adou_formItem_radio_1 = __importDefault(require("./adou-formItem-radio"));
const adou_formItem_checkbox_1 = __importDefault(require("./adou-formItem-checkbox"));
const FormItem = (props) => {
    const context = (0, react_1.useContext)(adou_form_1.FormContext);
    const { children, width, name, inline = true, labelPosition = "center", label, labelWidth = 24 } = props;
    const renderContent = () => {
        // 子元素检查
        if (react_1.default.isValidElement(children)) {
            console.log(children.type.displayName);
            return (react_1.default.createElement(react_1.default.Fragment, null, react_1.default.createElement("div", { style: { width: width }, className: `form-item mb-3 ${inline && `d-flex align-items-${labelPosition}`}` },
                react_1.default.createElement("div", { className: "form-item-label", style: { width: label.length * labelWidth + "px" } },
                    label,
                    "\uFF1A"),
                children)));
        }
        return null;
    };
    // 复写 FormContext.Provider，增加 name 参数的传递
    return react_1.default.createElement(adou_form_1.FormContext.Provider, { value: { ...context, name } }, renderContent());
};
FormItem.displayName = 'formItem';
FormItem.Input = adou_formItem_input_1.default;
FormItem.Select = adou_formItem_select_1.default;
FormItem.TextArea = adou_formItem_textarea_1.default;
FormItem.LiveSearchSelect = adou_formItem_liveSearchSelect_1.default;
FormItem.MultipleSelect = adou_formItem_multipleSelect_1.default;
FormItem.Radio = adou_formItem_radio_1.default;
FormItem.Checkbox = adou_formItem_checkbox_1.default;
exports.default = FormItem;
//# sourceMappingURL=index.js.map