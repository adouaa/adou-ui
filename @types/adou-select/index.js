"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_i18next_1 = require("react-i18next");
const classnames_1 = __importDefault(require("classnames"));
const react_1 = require("react");
const react_2 = __importDefault(require("react"));
const Select = (props) => {
    const { defaultValue, options, placeholder, size, className, disabled, onChangeOK } = props;
    // 获取 `FormContext.Provider` 提供提供的 `value` 值
    const [value, setValue] = (0, react_1.useState)(defaultValue);
    const cls = (0, classnames_1.default)({
        [`form-select form-select-${size} mb-3`]: true,
        [className]: className
    });
    const handleSelect = (e) => {
        const selectedIndex = e.target.selectedIndex;
        const selectedOption = options[selectedIndex];
        setValue(selectedOption);
        onChangeOK && onChangeOK(selectedOption);
    };
    (0, react_1.useEffect)(() => {
        if (defaultValue?.value) {
            setValue(defaultValue); // 直接在判断有默认值的地方就给表单赋值，就不会出现数据闪动的现象
            // 这边不能直接用 context.handleChange(context.name, defaultValue)来赋默认值，会被置为空，并且失去 提交和重置功能
        }
        else {
            // js默认的选择框好像只能这样写，不能写成 setValue=({})
            // 只能让它重置为选中第一个选项。。
            setValue({ label: "", value: "" });
        }
    }, [defaultValue]);
    return react_2.default.createElement(react_2.default.Fragment, null,
        react_2.default.createElement("select", { value: value?.value, onChange: (e) => handleSelect(e), className: cls, "aria-label": ".form-select-lg example", disabled: disabled }, options?.map(item => react_2.default.createElement("option", { disabled: item.disabled, key: item.value, value: item.value }, item.label))));
};
exports.default = (0, react_i18next_1.withTranslation)()(Select);
//# sourceMappingURL=index.js.map