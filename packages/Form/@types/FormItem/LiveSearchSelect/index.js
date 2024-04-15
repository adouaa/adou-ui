"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_i18next_1 = require("react-i18next");
const classnames_1 = __importDefault(require("classnames"));
const react_1 = __importDefault(require("react"));
require("./index.css");
const react_2 = require("react");
const index_1 = require("../../index");
const LiveSearchSelect = (props) => {
    const { defaultValue, options, size, className, disabled, onSelectOK, setFormItemValue } = props;
    const context = (0, react_2.useContext)(index_1.FormContext);
    const selectedValeRef = (0, react_2.useRef)("");
    // const [value, setValue] = useState(""); // 给个 || ""就会让 input为受控状态，不能让它默认是 defaultValue，有可能不存在。。
    // 注意！！！如果发现状态没有按预知的方向变化的话，就考虑用 xxxRef来替代。。。
    // prevSelectedValueRef.current 用来记录上一次正确选择的数据
    // 防止用户输入不正确，搜索不到对应数据，出现空的情况。先保存一下上次的数据，然后在出现意外的时候复制给要展示的数据
    const prevSelectedValueRef = (0, react_2.useRef)(""); // 不用 defaultValue的原因同上
    const searchValueRef = (0, react_2.useRef)(defaultValue || "");
    const [showOptions, setShowOptions] = (0, react_2.useState)(false);
    const [filterdOptions, setFilterdOptions] = (0, react_2.useState)(options);
    const cls = (0, classnames_1.default)({
        [`live-search-select-wrapper form-select-${size} adou-live-search-select`]: true,
        [className]: className
    });
    const handleSelect = (e, option) => {
        // setValue(option.label);
        selectedValeRef.current = option.label;
        prevSelectedValueRef.current = option.label;
        onSelectOK && onSelectOK(option);
        context.handleChange(context.name, option);
        console.log("option = ", option);
        setFormItemValue && setFormItemValue(option);
    };
    const filterOptions = (value) => {
        setFilterdOptions(options.filter(option => option.label.includes(value)));
    };
    const handleInputBlur = (e) => {
        // 因为是先执行 Blur回调，必须要让它在 select之后再进行校验，所以要用定时器异步一下
        setTimeout(() => {
            context.checkValidate(selectedValeRef.current);
        }, 150);
    };
    const handleInputClick = (e) => {
        // setValue("");
        selectedValeRef.current = "";
        searchValueRef.current = "";
        setShowOptions(true);
        // 这个时候也要重新过滤数据
        filterOptions(searchValueRef.current);
    };
    const handleInputChange = (e) => {
        let value = e.target.value;
        // setValue(value);
        selectedValeRef.current = value;
        searchValueRef.current = value;
        // 输入改变的时候重新过滤
        filterOptions(searchValueRef.current);
    };
    // 选项的ref数组--巧妙
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const optionItemRefs = options.map(() => (0, react_2.useRef)(null));
    // input输入框的ref
    const inputRef = (0, react_2.useRef)(null);
    (0, react_2.useEffect)(() => {
        window.addEventListener("click", (e) => {
            if (e.target === inputRef.current) {
                return setShowOptions(true);
            }
            else if (optionItemRefs.some(ref => ref.current === e.target)) {
            }
            else { // 点击的是除了输入框和选项
                // setValue(prevSelectedValueRef.current)
                selectedValeRef.current = prevSelectedValueRef.current;
            }
            setShowOptions(false);
            /* else {
               console.log("点击到别的地", prevSelectedValueRef.current);
               setShowOptions(false);
           } */
            // 搜索的就不做多选了
            /* if (!multiple) {
                return setShowOptions(false);
            } */
            // --巧妙
            /* if (!optionItemRefs.some(ref => ref.current === e.target)) {
                setShowOptions(false);
            } */
        });
    }, []);
    // 让搜索框展示默认值
    (0, react_2.useEffect)(() => {
        // 如果有默认值，让实时搜索框的值为默认值（没有做判断搜索列表是否存在该值）
        if (defaultValue?.value) {
            // 用 ref的话就不用加 定时器，用 state的话就要加定时器。。。（0秒即可）
            let label = filterdOptions.find(option => option.label === defaultValue.label)?.label;
            context.formData[context.name] = defaultValue; // 让 Form里面对应的数据项有值
            // 保存默认值，防止用户输入不正确
            prevSelectedValueRef.current = label;
            label && (selectedValeRef.current = defaultValue.label);
            // 将默认值的label赋值给 FormItemValue，为了让校验通过
            setFormItemValue && setFormItemValue(defaultValue.label);
        }
        else { // 如果没有默认值，也要记得把 prevSelectedValueRef置空
            // setValue("");
            selectedValeRef.current = "";
            prevSelectedValueRef.current = ""; // 记得把 prevSelectedValueRef置空
        }
    }, [defaultValue]);
    // Form的formData发生变化，表单数据也要对应发生变化
    (0, react_2.useEffect)(() => {
        if (!context.formData[context.name]) {
            // setValue("");
            selectedValeRef.current = "";
            prevSelectedValueRef.current = "";
        }
    }, [context.formData[context.name]]);
    return react_1.default.createElement("div", { className: cls },
        react_1.default.createElement("input", { value: selectedValeRef.current, onBlur: (e) => handleInputBlur(e), onChange: (e) => handleInputChange(e), onClick: handleInputClick, ref: inputRef, disabled: disabled, type: "text", className: "form-control", "aria-label": "Username", "aria-describedby": "basic-addon1" }),
        showOptions && react_1.default.createElement("div", { className: "option-wrapper" }, filterdOptions.length ? filterdOptions.map((option, index) => {
            // --巧妙
            return react_1.default.createElement("div", { ref: optionItemRefs[index], key: index, onClick: (e) => handleSelect(e, option), className: "option-item" }, option.label);
        }) : react_1.default.createElement("div", { className: "option-item" }, "No match content")));
};
exports.default = (0, react_i18next_1.withTranslation)()(LiveSearchSelect);
//# sourceMappingURL=index.js.map