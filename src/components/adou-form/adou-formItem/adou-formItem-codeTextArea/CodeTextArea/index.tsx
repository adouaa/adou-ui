import { useContext, useEffect, useState } from "react";
import { withTranslation } from "react-i18next"
import { FormContext, FormContextProps } from "../../../index";
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
    defaultValue?: string,
    label?: string,
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
    setFormItemValue?: (value: any) => void;
}

const CodeTextArea: React.FC<CodeTextAreaProps> = (props: CodeTextAreaProps) => {

    const { autoCloseTags = true, showCursorWhenSelecting = true, styleActiveLine = true, mode = "htmlmixed", theme = "base16-light", lineNumbers = false, lineWrapping = true, readOnly, defaultValue, onChangeOK, setFormItemValue } = props;

    // 获取 `FormContext.Provider` 提供提供的 `value` 值
    const context: FormContextProps = useContext(FormContext);

    const [value, setValue] = useState(defaultValue || '');


    const handleChange = (value: any, ...args: any) => {
        setValue(value); // 手动将表单的value值赋值
        setFormItemValue && setFormItemValue(value);
        // 根据 name 属性，更新 Form 中的数据源
        context.formData[context.name as string] = value;
        // context.handleChange(context.name, e.target.value) // 这边不能直接用 handleChange来赋值，会出现赋值错误的情况
        onChangeOK && onChangeOK(value, ...args);
    }

    const handleBlur = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setFormItemValue && setFormItemValue(e.target.value);
        context.checkValidate(e.target.value); // 失焦的时候也要立马让父组件执行 检验方法
    }

    useEffect(() => {
        setValue(context.formData[context.name as string] || "");
    }, [context.formData[context.name as string]])

    useEffect(() => {
        console.log("defaultValue = ", defaultValue);
        
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
            <CodeMirror
                value={value}
                onBeforeChange={(editor: any, data: any, value: any) => {
                    handleChange(value);
                }}
                options={{
                    readOnly,
                    showCursorWhenSelecting,
                    mode,
                    theme, // 设置主题为默认，背景色为亮色
                    lineNumbers, // 不显示行号
                    lineWrapping,
                }}
            />
        </div>
    </>
}

export default withTranslation()(CodeTextArea);