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
exports.FormContext = exports.FormItem = void 0;
const react_1 = __importStar(require("react"));
const FormItem_1 = __importDefault(require("./FormItem"));
exports.FormItem = FormItem_1.default;
// 基于 FormContext 下发表单数据源以及修改方法
exports.FormContext = (0, react_1.createContext)({});
const Form = (0, react_1.forwardRef)((props, formRef) => {
    const { suffixIcon, inline = false, errorInline = false, labelAlignX, name, labelWidth, onSuffixIconClick } = props;
    // 统一管理表单数据源
    const [formData, setFormData] = (0, react_1.useState)({});
    const [validation, setValidation] = (0, react_1.useState)(true);
    // 对外暴露的API
    (0, react_1.useImperativeHandle)(formRef, () => ({
        // 表单提交
        submitForm: (callback) => {
            callback && callback({ ...formData });
        },
        validate: (callback) => {
            let isValid = true;
            formItems.forEach(item => {
                const validationResult = item.handleValidate(formData);
                if (!validationResult && item.validate)
                    isValid = false; // 假设validate方法返回false表示验证失败
            });
            callback && callback(isValid);
        },
        // 表单重置
        resetForm: () => {
            let data = { ...formData };
            Object.keys(data).forEach((item) => {
                data[item] = "";
            });
            formItems.forEach(item => {
                item.handleValidate(formData, true); // 在重置表单的时候将错误也清除掉--好像没用
            });
            setFormData(data);
        },
        // 表单重新验证
        reValidate: () => {
            formItems.forEach(item => {
                // 不知道为什么在 FormItem中无法通过 context.formData来获取数据，所以这边直接在父组件这里传递过去
                item.handleValidate(formData);
            });
        }
    }));
    // Form表单内的表单项修改统一的赋值方法
    const handleChange = (name, value) => {
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    // 提交表单判断是否通过验证
    const handleValidate = (validate) => {
        setValidation(validate);
    };
    // 添加一个状态来保存FormItem的引用或校验函数列表
    const [formItems, setFormItems] = (0, react_1.useState)([]);
    const registerFormItem = (item) => {
        setFormItems((prevArr) => [...prevArr, item]);
    };
    // 计算出最长的label
    let maxLabelLength = 0;
    let array = [];
    if (!props.children.length) {
        array.push(props.children);
    }
    else {
        array = props.children;
    }
    array.forEach((item) => {
        if (maxLabelLength < item?.props?.label?.length) {
            maxLabelLength = item.props.label.length;
        }
    });
    const renderContent = () => {
        const renderChildren = [];
        // 这个方法可行
        react_1.default.Children.map(props.children, (child) => {
            // child.type 子元素自身（FormItem），检查其静态属性 displayName 是否满足条件
            if (child?.type?.displayName === 'formItem') {
                const enhancedChildren = react_1.default.cloneElement(child, {
                    maxLabelLength,
                    labelAlignX,
                    labelWidth,
                    key: child.props.name,
                    errorInline,
                    suffixIcon,
                    onSuffixIconClick
                });
                renderChildren.push(enhancedChildren);
            }
        });
        // 这边不能直接用 props.children.forEach，会报错：props.children.forEach is not a function
        // 具体原因不清楚，但是可以用上面那个的方法
        // props.children?.forEach((item: any) => {
        //   if (item.type.displayName === "formItem") {
        //     renderChildren.push(item)
        //   }
        // })
        return renderChildren;
    };
    // 传入数据源以及数据源的修改方法，子孙后代都可读取 value 中的值
    return react_1.default.createElement(exports.FormContext.Provider, { value: { formData, handleChange, handleValidate, registerFormItem } },
        react_1.default.createElement("div", { className: `${inline ? "form-wrapper" : ""}` }, renderContent()));
});
Form.displayName = 'form';
exports.default = Form;
//# sourceMappingURL=index.js.map