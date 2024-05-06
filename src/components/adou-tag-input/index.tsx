import React, { useContext, useEffect, useState } from "react";

import "./index.scss";
import { withTranslation } from "react-i18next"
import { FormContext, FormContextProps } from "components/adou-form";

interface TagInputProps {
    defaultValue?: any;
    onChange?: (value: any) => void;
}

const TagInput = (props: TagInputProps) => {

    const { defaultValue = [], onChange } = props;

    const context: FormContextProps = useContext(FormContext) || {};


    const [inputList, setInputList] = useState<any>(defaultValue || context.formData?.[context.name as string] || []);

    const [inputValue, setInputValue] = useState("");


    const [isHighlighted, setIsHighlighted] = useState(false);

    const addInput = () => {
        // 因为state是异步的，所以要把数据先处理好再使用
        const data = [...inputList, inputValue];
        setInputList(data);
        setInputValue("");
        context.checkValidate && context.checkValidate(1);
        // 把数据传回给父组件
        onChange && onChange(data);   
    }

    const handleInputChange = (e: any) => {
        setInputValue(e.target.value);
    }

    const handleKeyDown = (event: any) => {
        const value = event.target.value.trim(); // 会有一个空格存在，要去掉
        if (!value) return;
        let flag = false;
        if (event.keyCode === 32 || event.keyCode === 13) {
            event.preventDefault(); // 阻止默认行为，防止提交表单或失去焦点
            flag = inputList.length > 0 && inputList.some((item: any) => item === value);
            !flag && addInput();
        } 

    };

    const handleDeleteItem = (item: any) => {
        const tagList = inputList.filter((value: any) => item !== value);
        setInputList(tagList)
        onChange && onChange(tagList);
        // 注意，这边不能直接用 inputList给 formData赋值，会出现不一致的情况
        
        context.handleChange && context.handleChange(context.name, tagList);
        context.checkValidate && context.checkValidate(inputList.filter((v: any) => v !== item).length);
    }

    const handleBlur = () => {
        // 注意，这边要在 inpuut失焦的时候触发，不能在 input change的时候触发，不然会出现校验错误
        context.handleChange && context.handleChange(context.name, inputList);
        context.checkValidate && context.checkValidate(inputList.length);
        setIsHighlighted(false);
    }

    const handleFocus = () => {
        setIsHighlighted(true);
    }

    useEffect(() => {
        if (defaultValue.length) {
            setInputList(defaultValue);
            if (context.formData) {
                context.formData[context.name as string] = defaultValue;
            }
        }
    }, [defaultValue])

    useEffect(() => {
        
        setInputList(context.formData?.[context.name as string] || "");
    }, [context.formData?.[context.name as string]])

    return <>
    {/* 实现点击后高亮，div必须加上 form-control，这个类名会空值高亮以动画效果出现。并且 focus类名必须动态添加 */}
        <div className={`tag-input-wrapper form-control ${isHighlighted && "focus"}`}>
            <div className="tag-input-content">
                <ul className="tag-input-list">
                    {inputList.length > 0 && inputList.map((item: any) => {
                        return <li className="list-item" key={item}>
                        {item}
                        <span onClick={() => handleDeleteItem(item)} className="item-icon">x</span>
                    </li>
                    })}
                </ul>
                <div className="tag-input-control">
                    <input value={inputValue} autoComplete="off" onFocus={handleFocus} onBlur={handleBlur} onChange={(e) => handleInputChange(e)} onKeyDown={handleKeyDown} placeholder="空格或回车分割" type="text" className="input"></input>
                </div>
            </div>
        </div>
    </>
}

export default withTranslation()(TagInput);