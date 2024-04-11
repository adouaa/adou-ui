
import React, { useContext, useEffect, useState } from "react";
import { withTranslation } from "react-i18next"
import classNames from "classnames";
import { FormContext } from "adou-form";

export interface InputProps {
    name?: string;
    defaultValue?: string;
    size?: "large" | "middle" | "small" | undefined;
    className?: string;
    prefixContent?: any;
    suffixContent?: any;
    placeholder?: string;
    style?: any;
    disabled?: boolean;
    onClickOK?: (e: React.MouseEvent<HTMLInputElement, MouseEvent>, ...args: any) => void;
    onFocusOK?: (e: React.FocusEvent<HTMLInputElement, Element>, ...args: any) => void;
    onBlurOK?: (e: React.FocusEvent<HTMLInputElement, Element>, ...args: any) => void;
    onChangeOK?: (e: React.ChangeEvent<HTMLInputElement>, ...args: any) => void;

}

export interface FormContextProps {
    handleChange?: any;
    name?: string,
    formData?: any
}

const Input: React.FC<InputProps> = (props: InputProps) => {

    // 获取 `FormContext.Provider` 提供提供的 `value` 值
    const context: FormContextProps = useContext(FormContext);



    const { name, size, className, prefixContent, suffixContent, placeholder, style, disabled, defaultValue, onClickOK, onFocusOK, onBlurOK, onChangeOK } = props;


    // 确保value不会是undefined，如果defaultValue或formData中相应的值是undefined，则将其设为空字符串
    const [value, setValue] = useState(defaultValue ?? context.formData?.[context.name as string] ?? '');

    const cls = classNames({
        "input-group": true,
        [`input-group-${size}`]: size,
        [className as string]: className,
    })

    const handleClick = (e: React.MouseEvent<HTMLInputElement, MouseEvent>, ...args: any) => {
        onClickOK && onClickOK(e, ...args);
    }
    const handleFocus = (e: React.FocusEvent<HTMLInputElement, Element>, ...args: any) => {
        onFocusOK && onFocusOK(e, ...args);
    }
    const handleBlur = (e: React.FocusEvent<HTMLInputElement, Element>, ...args: any) => {
        onBlurOK && onBlurOK(e, ...args);

    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, ...args: any) => {
        setValue(e.target.value);
        // 根据 name 属性，更新 Form 中的数据源
        context.handleChange(context.name, e.target.value)
    }

    useEffect(() => {
        setValue(context.formData?.[context.name as string] || "");
    }, [context.formData?.[context.name as string]])

    useEffect(() => {
        console.log("input context = ", context);
        
        if (defaultValue) {
            setValue(defaultValue);
            // 这边不能直接用 context.handleChange(context.name, defaultValue)来赋默认值，会被置为空，并且失去 提交和重置功能
            context.formData[context.name as string] = defaultValue;
        }
    }, [defaultValue])

    return (
        <>
            <div className={cls} style={{flex: 1}}>
                {prefixContent && <span className="input-group-text" id="basic-addon1">{prefixContent}</span>}
                <input name={name} value={value} disabled={disabled} style={style} placeholder={placeholder} onChange={handleChange} onBlur={(e) => handleBlur(e, "hello1", 5561)} onFocus={(e) => handleFocus(e, "hello1", 5561)} onClick={(e) => handleClick(e, "hello", 556)} type="text" className="form-control" aria-label="Username" aria-describedby="basic-addon1" />
                {suffixContent && <span className="input-group-text" id="basic-addon2">{suffixContent}</span>}
            </div>
        </>
    )
}

Input.displayName = "Input";

export default withTranslation()(Input);