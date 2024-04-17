"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_i18next_1 = require("react-i18next");
const classnames_1 = __importDefault(require("classnames"));
require("./index.css");
const react_1 = require("react");
const react_2 = __importDefault(require("react"));
const MultipleSelect = (props) => {
    const { defaultValue, options, size, className, disabled, onMultipleSelectChangeOK } = props;
    // 获取 `FormContext.Provider` 提供提供的 `value` 值
    // const [value, setValue] = useState(defaultValue || ""); // 给个 || ""就会让 input为受苦状态
    // 注意！！！如果发现状态没有按预知的方向变化的话，就考虑用 xxxRef来替代。。。
    // const prevSelectedValueRef = useRef<string>(defaultValue || "");
    const searchValueRef = (0, react_1.useRef)(defaultValue || "");
    const [showOptions, setShowOptions] = (0, react_1.useState)(false);
    const [filterdOptions, setFilterdOptions] = (0, react_1.useState)(options); // 多选主要是靠这个来展示哪个选项被打钩
    // 是否展示选中的选项
    const [selectedOptions, setSelectedOptions] = (0, react_1.useState)([]); // 选中的选项展示在 input框中
    const [showSelectedOptions, setShowSelectedOptions] = (0, react_1.useState)(false);
    const cls = (0, classnames_1.default)({
        [`form-select form-select-${size} mb-3`]: true,
        [className]: className
    });
    const filterdOption = (option) => {
        filterdOptions.forEach(item => {
            if (item.value === option.value) {
                item.selected = false;
            }
        });
        setFilterdOptions(filterdOptions); // 这句竟然加和不加都可以。。。
    };
    const handleSelect = (e, option) => {
        // prevSelectedValueRef.current = option.label;
        option.selected = true;
        let hasSelected = selectedOptions.some(item => item.label === option.label);
        setSelectedOptions(hasSelected ? selectedOptions.filter(item => item.label !== option.label) : [...selectedOptions, { label: option.label, value: option.value }]);
        hasSelected && filterdOption(option);
        setShowSelectedOptions(true);
        // 这里不能直接用 selectedOptions这个状态，会有延迟
        // 要用原来所有的状态，去过滤掉没选上的，再传递给父组件
        // onMultipleSelectChangeOK && onMultipleSelectChangeOK(selectedOptions); 
        const selectedList = filterdOptions.filter(item => item.selected);
        onMultipleSelectChangeOK && onMultipleSelectChangeOK(selectedList);
    };
    const handleInputClick = (e) => {
        searchValueRef.current = "";
        setShowOptions(true);
        // 这个时候也要重新过滤数据
    };
    const handleInputChange = (e) => {
        let value = e.target.value;
        searchValueRef.current = value;
        // 输入改变的时候重新过滤
    };
    // 选项的ref数组--巧妙
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const optionItemRefs = options.map(() => (0, react_1.useRef)(null));
    // input输入框的ref
    const inputRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        window.addEventListener("click", (e) => {
            if (e.target === inputRef.current) {
                return setShowOptions(true);
            }
            // --巧妙
            // 点的不是 input框，也不是 选项，则将 active类名去掉，并且隐藏 选项
            if (!optionItemRefs.some(ref => ref.current === e.target)) {
                return setShowOptions(false);
            }
        });
    }, []);
    // 让多选框默认展示父组件传递过来的值
    (0, react_1.useEffect)(() => {
        let arr = [];
        if (defaultValue?.length) {
            defaultValue?.map((item) => {
                options.some(option => {
                    option.value === item.value && arr.push(item);
                    return false;
                });
                return false;
            });
            if (arr?.length) {
                setSelectedOptions(arr);
                setShowSelectedOptions(true);
                setFilterdOptions(preArr => {
                    let filterdOptions = [];
                    preArr.forEach(item => {
                        filterdOptions.push({ ...item, selected: arr.some(i => i.value === item.value) });
                    });
                    return filterdOptions;
                });
            }
        }
        else {
            setSelectedOptions([]);
            setFilterdOptions(options.map(item => {
                item.selected = false;
                return item;
            }));
        }
    }, [defaultValue]);
    return react_2.default.createElement("div", { className: "multiple-select-wrapper" },
        showSelectedOptions && selectedOptions?.map((option, index) => {
            // index * 80 + 10 这边的10 要与第一个距离左边的距离相等！！！不能不加，也不能加太多，否则就会与第一个太靠近或者与第一个距离太远！！！
            return react_2.default.createElement("span", { className: "selected-option", key: option.value, style: { left: `${index === 0 ? 10 : index * 60 + 10}px` } }, option.label);
        }),
        react_2.default.createElement("input", { readOnly: true, onChange: (e) => handleInputChange(e), onClick: handleInputClick, ref: inputRef, disabled: disabled, type: "text", className: "form-control", "aria-label": "Username", "aria-describedby": "basic-addon1" }),
        showOptions && react_2.default.createElement("div", { className: "option-wrapper multiple-select-option-wrapper" }, filterdOptions.map((option, index) => {
            // --巧妙
            return react_2.default.createElement("div", { ref: optionItemRefs[index], key: index, onClick: (e) => handleSelect(e, option), className: `option-item ${option.selected && "multiple-select-active"}` }, option.label);
        })));
};
exports.default = (0, react_i18next_1.withTranslation)()(MultipleSelect);
//# sourceMappingURL=index.js.map