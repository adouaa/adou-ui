import { withTranslation } from "react-i18next";
import classNames from "classnames";
import React
 from "react";
import "./index.css";

import { LegacyRef, useContext, useEffect, useRef, useState } from "react";
import { FormContext, FormContextProps } from "../adou-form";
import { SelectProps } from "../adou-new-form/adou-select";

interface LiveSearchSelectProps extends SelectProps {
    defaultValue?: any;
    onSelectOK: (value: string) => void;
    setFormItemValue?: (value: any) => void;
}

const LiveSearchSelect = (props: LiveSearchSelectProps) => {

    const { defaultValue, options, size, externalClassName, readOnly, onSelectOK, setFormItemValue } = props;

    const context: FormContextProps = useContext(FormContext);

    const selectedValeRef = useRef("");
    // const [value, setValue] = useState(""); // 给个 || ""就会让 input为受控状态，不能让它默认是 defaultValue，有可能不存在。。
    // 注意！！！如果发现状态没有按预知的方向变化的话，就考虑用 xxxRef来替代。。。
    // prevSelectedValueRef.current 用来记录上一次正确选择的数据
    // 防止用户输入不正确，搜索不到对应数据，出现空的情况。先保存一下上次的数据，然后在出现意外的时候复制给要展示的数据
    const prevSelectedValueRef = useRef<string>(""); // 不用 defaultValue的原因同上
    const searchValueRef = useRef<string>(defaultValue || "");
    const [showOptions, setShowOptions] = useState(false);
    const [filterdOptions, setFilterdOptions] = useState(options);


    const cls = classNames({
        [`live-search-select-wrapper form-select-${size} adou-live-search-select`]: true,
        [externalClassName as string]: externalClassName
    })

    const handleSelect = (e: any, option: any) => {
        // setValue(option.label);
        selectedValeRef.current = option.label;
        prevSelectedValueRef.current = option.label;
        onSelectOK && onSelectOK(option);
        context.handleChange(context.name, option)
        
        setFormItemValue && setFormItemValue(option);
    }

    const filterOptions = (value: any) => {
        setFilterdOptions(options.filter(option => option.label.includes(value)));
    }

    const handleInputBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {

        // 因为是先执行 Blur回调，必须要让它在 select之后再进行校验，所以要用定时器异步一下
        setTimeout(() => {
            context.checkValidate(selectedValeRef.current);
        }, 150);
        
        
    }

    const handleInputClick = (e: any) => {
        // setValue("");
        selectedValeRef.current = "";
        searchValueRef.current = "";
        setShowOptions(true);
        // 这个时候也要重新过滤数据
        filterOptions(searchValueRef.current)
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value;
        // setValue(value);
        selectedValeRef.current = value;
        searchValueRef.current = value;
        // 输入改变的时候重新过滤
        filterOptions(searchValueRef.current)
    }

    // 选项的ref数组--巧妙
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const optionItemRefs = options.map(() => useRef<HTMLDivElement>(null));

    // input输入框的ref
    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        window.addEventListener("click", (e) => {
            if (e.target === inputRef.current) {
                return setShowOptions(true);
            } else if (optionItemRefs.some(ref => ref.current === e.target)) {

            } else { // 点击的是除了输入框和选项
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
        })
    }, [])

    // 让搜索框展示默认值
    useEffect(() => {
        // 如果有默认值，让实时搜索框的值为默认值（没有做判断搜索列表是否存在该值）
        if (defaultValue?.value) {
            // 用 ref的话就不用加 定时器，用 state的话就要加定时器。。。（0秒即可）
            let label = filterdOptions.find(option => option.label === defaultValue.label)?.label
                context.formData[context.name as string] = defaultValue; // 让 Form里面对应的数据项有值
                // 保存默认值，防止用户输入不正确
                prevSelectedValueRef.current = label;
                label && (selectedValeRef.current = defaultValue.label);
                // 将默认值的label赋值给 FormItemValue，为了让校验通过
                setFormItemValue && setFormItemValue(defaultValue.label);
        } else { // 如果没有默认值，也要记得把 prevSelectedValueRef置空
            // setValue("");
            selectedValeRef.current = "";
            prevSelectedValueRef.current = ""; // 记得把 prevSelectedValueRef置空
        }
    }, [defaultValue])

    // Form的formData发生变化，表单数据也要对应发生变化
    useEffect(() => {
        if (!context.formData[context.name as string]) {
            // setValue("");
            selectedValeRef.current = "";
            prevSelectedValueRef.current = "";
        }
    }, [context.formData[context.name as string]])


    return <div className={cls}>
        <input value={selectedValeRef.current} onBlur={(e) => handleInputBlur(e)} onChange={(e) => handleInputChange(e)} onClick={handleInputClick} ref={inputRef} readOnly={readOnly} type="text" className="form-control" aria-label="Username" aria-describedby="basic-addon1" />
        {showOptions && <div className="option-wrapper">
            {filterdOptions.length ? filterdOptions.map((option, index) => {
                // --巧妙
                return <div ref={optionItemRefs[index]} key={index} onClick={(e) => handleSelect(e, option)} className="option-item">
                    {option.label}
                </div>
            }) : <div className="option-item">No match content</div>}
        </div>}
    </div>
};

export default withTranslation()(LiveSearchSelect);