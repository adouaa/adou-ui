import React, { useContext, useEffect, useState } from "react";
import { withTranslation } from "react-i18next"
import classNames from "classnames";

export interface FormContextProps {
    handleChange?: any;
    name?: string,
    formData?: any,
}

export interface InputProps {
    type?: "text" | "date" | "time";
    name?: string;
    defaultValue?: string;
    size?: "large" | "middle" | "small" | undefined;
    className?: string;
    prefixContent?: any;
    suffixContent?: any;
    placeholder?: string;
    style?: any;
    disabled?: boolean;
    autoFocus?: boolean,
    setFormItemValue?: (value: any) => void;
    onClickOK?: (e: React.MouseEvent<HTMLInputElement, MouseEvent>, ...args: any) => void;
    onFocusOK?: (e: React.FocusEvent<HTMLInputElement, Element>, ...args: any) => void;
    onBlurOK?: (e: React.FocusEvent<HTMLInputElement, Element>, ...args: any) => void;
    onChangeOK?: (e: any, ...args: any) => void;

}

const Input: React.FC<InputProps> = (props: InputProps) => {


    
    const { type = "text", name, size, className, autoFocus, prefixContent, suffixContent, placeholder, style, disabled, defaultValue, onClickOK, onFocusOK, onBlurOK, onChangeOK } = props;


    // 确保value不会是undefined，如果defaultValue或formData中相应的值是undefined，则将其设为空字符串
    const [value, setValue] = useState(defaultValue ?? '');

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
        console.log("handleChange ============", e.target.value);
        
        onChangeOK && onChangeOK(e.target.value);
    }

    useEffect(() => {
        if (defaultValue) {
            setValue(defaultValue);
            // 这边不能直接用 context.handleChange(context.name, defaultValue)来赋默认值，会被置为空，并且失去 提交和重置功能
        } else {
            setValue("");
        }
        
    }, [defaultValue])

    return (
        <>
            <div className={cls} >
                {prefixContent && <span className="input-group-text" id="basic-addon1">{prefixContent}</span>}
                <input step={1} autoFocus={autoFocus} name={name} value={value} disabled={disabled} style={style} placeholder={placeholder} onChange={handleChange} onBlur={(e) => handleBlur(e, "hello1", 5561)} onFocus={(e) => handleFocus(e, "hello1", 5561)} onClick={(e) => handleClick(e, "hello", 556)} type={type} className="form-control" aria-label="Username" aria-describedby="basic-addon1" />
                {suffixContent && <span className="input-group-text" id="basic-addon2">{suffixContent}</span>}
            </div>
        </>
    )
}

export default withTranslation()(Input);



