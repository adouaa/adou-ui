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
exports.FormContext = void 0;
const react_1 = __importStar(require("react"));
// 基于 FormContext 下发表单数据源以及修改方法
exports.FormContext = (0, react_1.createContext)({});
const Form = (0, react_1.forwardRef)((props, formRef) => {
    // 统一管理表单数据源
    const [formData, setFormData] = (0, react_1.useState)({});
    // 对外暴露的API
    (0, react_1.useImperativeHandle)(formRef, () => ({
        // 表单提交
        submitForm: (callback) => {
            callback && callback({ ...formData });
        },
        // 表单重置
        resetForm: () => {
            let data = { ...formData };
            Object.keys(data).forEach((item) => {
                data[item] = "";
            });
            setFormData(data);
        },
    }));
    // Form表单内的表单项修改统一的赋值方法
    const handleChange = (name, value) => {
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const renderContent = () => {
        const renderChildren = [];
        react_1.default.Children.map(props.children, (child) => {
            // child.type 子元素自身（FormItem），检查其静态属性 displayName 是否满足条件
            if (child.type.displayName === 'formItem') {
                renderChildren.push(child);
            }
        });
        return renderChildren;
    };
    // 传入数据源以及数据源的修改方法，子孙后代都可读取 value 中的值
    return react_1.default.createElement(exports.FormContext.Provider, { value: { formData, handleChange } }, renderContent());
});
Form.displayName = 'form';
exports.default = Form;
//# sourceMappingURL=index.js.map