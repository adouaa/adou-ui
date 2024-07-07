import { forwardRef, useContext, useEffect, useImperativeHandle, useState } from "react";
import { FormContext, FormContextProps } from "../adou-form";
import React from "react";
import "./index.scss";
import classNames from "classnames";


interface TextAreaProps {
    name?: string;
    commonSuffixIcon?: string;
    readOnly?: boolean;
    externalClassName?: string;
    width?: any;
    inputGroup?: boolean;
    labelPosition?: "left-top" | "center" | "top" | "input-group";
    labelColor?: string;
    required?: boolean;
    ref?: any,
    defaultValue?: string,
    label?: string,
    placeholder?: string;
    disabled?: boolean;
    onChangeOK?: (value: any, ...args: any) => void
    setFormItemValue?: (value: any) => void;
}

const TextArea: React.FC<TextAreaProps> = React.forwardRef((props: TextAreaProps, ref) => {

    const { commonSuffixIcon, readOnly, externalClassName, width, inputGroup = false, labelPosition = "center", required = false, name, label, placeholder, disabled, defaultValue, onChangeOK, setFormItemValue } = props;

    // 获取 `FormContext.Provider` 提供提供的 `value` 值
    const context: FormContextProps = useContext(FormContext) || {};

    const [value, setValue] = useState(defaultValue ?? context.formData?.[context.name as string] ?? '');


    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>, ...args: any) => {
        setValue(e.target.value); // 手动将表单的value值赋值
        setFormItemValue && setFormItemValue(e.target.value);
        // 根据 name 属性，更新 Form 中的数据源
        if (context.formData) {
            context.formData[context.name as string] = e.target.value;
        }
        // context.handleChange(context.name, e.target.value) // 这边不能直接用 handleChange来赋值，会出现赋值错误的情况
        onChangeOK && onChangeOK(e.target.value, ...args);
    }

    const handleBlur = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setFormItemValue && setFormItemValue(e.target.value);
        context.checkValidate && context.checkValidate(e.target.value); // 失焦的时候也要立马让父组件执行 检验方法
    }

    const [error, setError] = useState<boolean>(true);
    const validateTextarea = () => {
        // Example validation logic, replace with your actual validation needs
        setError(true);
    };
    const handleClickCommonSuffixIcon = () => {
        setValue("");
    }

    // Expose validateInput method via ref
    useImperativeHandle(ref, () => ({
        validateTextarea,
    }));


    const textareaClasses = classNames({
        "textarea-warpper": true,
        [externalClassName as string]: externalClassName,
    });

    useEffect(() => {
        setValue(context?.formData?.[context.name as string] || "");
    }, [context?.formData?.[context?.name as string]])

    useEffect(() => {
        if (defaultValue) {
            setValue(defaultValue);
            setFormItemValue && setFormItemValue(defaultValue);
            // 这边不能直接用 context.handleChange(context.name, defaultValue)来赋默认值，会被置为空，并且失去 提交和重置功能
            if (context.formData) {
                context.formData[context.name as string] = defaultValue;
            }
        }
    }, [defaultValue])

    return <div className={textareaClasses} style={{ width }}>
        <div className={`label-in-${labelPosition} ${inputGroup ? "input-group" : ""}`}>
            {label && <span className={`${inputGroup ? "input-group-text" : ""} label-box`}>{label}</span>}
            <textarea readOnly={readOnly} required={required} name={name} value={value} disabled={disabled} onBlur={(e) => handleBlur(e)} onChange={(e) => handleChange(e)} placeholder={placeholder} className="form-control" aria-label="With textarea"></textarea>
            {commonSuffixIcon && <i onClick={handleClickCommonSuffixIcon} className={`${commonSuffixIcon} common-suffix-icon ms-2`}></i>}

        </div>
    </div>
})

export default (TextArea);