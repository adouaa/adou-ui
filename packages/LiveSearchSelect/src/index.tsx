import { withTranslation } from "react-i18next";
import classNames from "classnames";

import "./index.css";

import { useContext, useEffect, useRef, useState, ChangeEvent } from "react";
import React from "react";

export interface SelectProps {
    defaultValue?: any;
    options: any[];
    placeholder?: string;
    size?: "sm" | "lg";
    className?: string;
    disabled?: boolean;
    onChangeOK?: (e?: ChangeEvent<HTMLSelectElement>, ...args: any) => void
}


interface LiveSearchSelectProps extends SelectProps {
    defaultValue?: any;
    onSelectOK: (value: string) => void;
}

const LiveSearchSelect = (props: LiveSearchSelectProps) => {

    const { defaultValue, options, size, className, disabled, onChangeOK, onSelectOK } = props;

    const [value, setValue] = useState(""); // 给个 || ""就会让 input为受控状态，不能让它默认是 defaultValue，有可能不存在。。
    // 注意！！！如果发现状态没有按预知的方向变化的话，就考虑用 xxxRef来替代。。。
    // prevSelectedValueRef.current 用来记录上一次正确选择的数据
    // 防止用户输入不正确，搜索不到对应数据，出现空的情况。先保存一下上次的数据，然后在出现意外的时候复制给要展示的数据
    const prevSelectedValueRef = useRef<string>(""); // 不用 defaultValue的原因同上
    const searchValueRef = useRef<string>(defaultValue || "");
    const [showOptions, setShowOptions] = useState(false);
    const [filterdOptions, setFilterdOptions] = useState(options);


    const cls = classNames({
        [`live-search-select-wrapper form-select-${size} mb-3 adou-live-search-select`]: true,
        [className as string]: className
    })

    const handleSelect = (e: any, option: any) => {
        console.log("e = ", e);
        console.log("option = ", option);

        setValue(option.label);
        prevSelectedValueRef.current = option.label;
        onSelectOK && onSelectOK(option);
    }

    const filterOptions = (value: any) => {
        setFilterdOptions(options.filter(option => option.label.includes(value)));
    }

    const handleInputClick = (e: any) => {
        setValue("");
        searchValueRef.current = "";
        setShowOptions(true);
        // 这个时候也要重新过滤数据
        filterOptions(searchValueRef.current)
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value;
        setValue(value);
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
                setValue(prevSelectedValueRef.current)
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

            let label = filterdOptions.find(option => option.label === defaultValue.label)?.label
            setTimeout(() => {
                // 保存默认值，防止用户输入不正确
                prevSelectedValueRef.current = label;
                label && setValue(defaultValue.label);
            }, 0);
        } else { // 如果没有默认值，也要记得把 prevSelectedValueRef置空
            setValue("");
            prevSelectedValueRef.current = ""; // 记得把 prevSelectedValueRef置空
        }
    }, [defaultValue])

    return <div className={cls}>
        <input value={value} onChange={(e) => handleInputChange(e)} onClick={handleInputClick} ref={inputRef} disabled={disabled} type="text" className="form-control" aria-label="Username" aria-describedby="basic-addon1" />
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