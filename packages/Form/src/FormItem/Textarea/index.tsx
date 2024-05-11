import { useContext, useEffect, useState } from "react";
import { withTranslation } from "react-i18next"
import { FormContext } from "../../index";

import { FormContextProps } from "../../index";
import React from "react";

import "./index.css";


interface TextAreaProps {
    defaultValue?: string,
    label?: string,
    placeholder?: string;
    disabled?: boolean;
    onChangeOK?: (e: React.ChangeEvent<HTMLTextAreaElement>, ...args: any) => void
    setFormItemValue?: (value: any) => void;
}

const TextArea: React.FC<TextAreaProps> = (props: TextAreaProps) => {

    const { label, placeholder, disabled, defaultValue, onChangeOK, setFormItemValue } = props;

    // 获取 `FormContext.Provider` 提供提供的 `value` 值
  const context: FormContextProps = useContext(FormContext);

    const [value, setValue] = useState(defaultValue ?? context.formData[context.name as string] ?? '');


    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>, ...args: any) => {
        setValue(e.target.value); // 手动将表单的value值赋值
        setFormItemValue && setFormItemValue(e.target.value);
        // 根据 name 属性，更新 Form 中的数据源
        context.formData[context.name as string] = e.target.value;
        // context.handleChange(context.name, e.target.value) // 这边不能直接用 handleChange来赋值，会出现赋值错误的情况
        onChangeOK && onChangeOK(e, ...args);
    }

    const handleBlur = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setFormItemValue && setFormItemValue(e.target.value);
        context.checkValidate(e.target.value); // 失焦的时候也要立马让父组件执行 检验方法
    }

    useEffect(() => {
        setValue(context.formData[context.name as string] || "");
        }, [context.formData[context.name as string]])

    useEffect(() => {
        if (defaultValue) {
            setValue(defaultValue);
            setFormItemValue && setFormItemValue(defaultValue);
            // 这边不能直接用 context.handleChange(context.name, defaultValue)来赋默认值，会被置为空，并且失去 提交和重置功能
            context.formData[context.name as string] = defaultValue; 
        } else {
            // setValue(context.formData[context.name as string] || "")
            setValue(""); // 用这个比较直接
        }
    }, [defaultValue])

    return <>
        <div className="textarea-warpper">
            {label && <span className="input-group-text">{label}</span>}
            <textarea value={value} disabled={disabled} onBlur={(e) => handleBlur(e)} onChange={(e) => handleChange(e)} placeholder={placeholder} className="form-control" aria-label="With textarea"></textarea>
        </div>
    </>
}

export default withTranslation()(TextArea);