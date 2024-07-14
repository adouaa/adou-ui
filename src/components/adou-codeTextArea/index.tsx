import { useContext, useEffect, useImperativeHandle, useState } from "react";
import { withTranslation } from "react-i18next"
import React from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/theme/base16-light.css";
import "codemirror/theme/base16-dark.css";
import "codemirror/mode/htmlmixed/htmlmixed";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";
import "./index.scss";


interface CodeTextAreaProps {
    name?: string,
    required?: boolean;
    errMsg?: string;
    labelWidth?: any;
    commonSuffixIcon?: string;
    width?: any,
    defaultValue?: string,
    label?: string;
    labelPosition?: "left-top" | "center" | "top";
    inputGroup?: boolean;
    labelColor?: string;
    placeholder?: string;
    readOnly?: boolean;
    mode?: "htmlmixed" | "css" | "javascript",
    theme?: "material" | "base16-light" | "base16-dark";
    lineNumbers?: boolean;
    lineWrapping?: boolean;
    autoCloseTags?: boolean;
    styleActiveLine?: boolean;
    showCursorWhenSelecting?: boolean;
    onChangeOK?: (e: React.ChangeEvent<HTMLTextAreaElement>, ...args: any) => void
}

const CodeTextArea: React.FC<CodeTextAreaProps> = React.forwardRef((props: CodeTextAreaProps, ref) => {

    const { required, errMsg, labelWidth, commonSuffixIcon, width, label, labelColor, inputGroup = false, labelPosition = "center", name, autoCloseTags = true, showCursorWhenSelecting = true, styleActiveLine = true, mode = "htmlmixed", theme = "base16-light", lineNumbers = false, lineWrapping = true, readOnly, defaultValue, onChangeOK } = props;

    // 获取 `FormContext.Provider` 提供提供的 `value` 值

    const [value, setValue] = useState(defaultValue || '');


    const handleChange = (value: any, ...args: any) => {
        setValue(value); // 手动将表单的value值赋值
        // 根据 name 属性，更新 Form 中的数据源
        // context.handleChange(context.name, e.target.value) // 这边不能直接用 handleChange来赋值，会出现赋值错误的情况
        onChangeOK && onChangeOK(value, ...args);
        if (value) {
            setError(false);
        } else {
            setError(true);
        }
    }

    const handleBlur = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    }

    const getValue = () => {
        return value;
    }

    // 校验方法
    const [error, setError] = useState<boolean>(false);
    const validate = () => {
        if (!required) return true;
        // Example validation logic, replace with your actual validation needs
        if (value) {
            setError(false);
            return true;
        } else {
            setError(true);
            return false;
        }
    };
    // 清除内容方法
    const clear = () => {
        setValue("");
        setError(true);
    }
    const handleClickCommonSuffixIcon = () => {
        clear();
    }
    // Expose validateInput method via ref
    useImperativeHandle(ref, () => ({
        getValue,
        validate,
        clear
    }));


    useEffect(() => {

        if (defaultValue) {
            setValue(defaultValue);
            // 这边不能直接用 context.handleChange(context.name, defaultValue)来赋默认值，会被置为空，并且失去 提交和重置功能
        } else {
            // setValue(context.formData[context.name as string] || "")
            setValue(""); // 用这个比较直接
        }
    }, [defaultValue])

    return <>
        <div className={`textarea-warpper ${!error && "mb-3"}`} style={{ width }}>
            <select name={name} style={{ display: "none" }}></select>
            <div className={`content-box ${inputGroup ? "inputGroup" : `label-in-${labelPosition}`}`}>
                <span className={`label-box ${inputGroup ? "input-group-text" : ""}`} style={{ color: labelColor, width: labelWidth }}>{label}</span>

                <CodeMirror
                    value={value}
                    onBeforeChange={(editor: any, data: any, value: any) => {
                        handleChange(value);
                    }}
                    onBlur={(e: any) => handleBlur(e)}
                    options={{
                        readOnly,
                        showCursorWhenSelecting,
                        mode,
                        theme, // 设置主题为默认，背景色为亮色
                        lineNumbers, // 不显示行号
                        lineWrapping,
                    }}
                />
                {commonSuffixIcon && <i onClick={handleClickCommonSuffixIcon} className={`${commonSuffixIcon} common-suffix-icon ms-2`}></i>}
            </div>
            {error && required && <div className="animate__animated animate__fadeIn mb-1" style={{ color: "#DC3545", fontSize: "14px", paddingLeft: parseInt(labelWidth) > 120 ? "120px" : labelWidth }}>{`${errMsg || `${name}不能为空`}`}</div>}
        </div>
    </>
});

export default (CodeTextArea);