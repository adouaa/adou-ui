import React, { useContext, useEffect, useState } from "react";
import { withTranslation } from "react-i18next"
import classNames from "classnames";

import "./index.scss";

export interface InputProps {
    type?: "text" | "datetime-local" | "date" | "time";
    name?: string;
    defaultValue?: string;
    size?: "large" | "middle" | "small" | undefined;
    className?: string;
    prefixContent?: any;
    suffixContent?: any;
    placeholder?: string;
    style?: any;
    disabled?: boolean;
    children?: any;
    transparent?: boolean;
    setFormItemValue?: (value: any) => void;
    onClick?: (e: React.MouseEvent<HTMLInputElement, MouseEvent>, ...args: any) => void;
    onFocus?: (e: React.FocusEvent<HTMLInputElement, Element>, ...args: any) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement, Element>, ...args: any) => void;
    onChange?: (value: any, ...args: any) => void;
    onIconClick?: (value: string) => void;
}



const Input: React.FC<InputProps> = (props: InputProps) => {

    // 获取 `FormContext.Provider` 提供提供的 `value` 值


    const { transparent, children, type = "text", name, size, className, prefixContent, suffixContent, placeholder, style, disabled, defaultValue, onChange, onClick, onFocus, onBlur, setFormItemValue, onIconClick } = props;


    // 确保value不会是undefined，如果defaultValue或formData中相应的值是undefined，则将其设为空字符串
    const [value, setValue] = useState(defaultValue ?? '');

    const cls = classNames({
        "input-group": suffixContent || prefixContent,
        [`input-group-${size}`]: size,
        [className as string]: className,
    })

    const handleClick = (e: React.MouseEvent<HTMLInputElement, MouseEvent>, ...args: any) => {
        onClick && onClick(e, ...args);
    }
    const handleFocus = (e: React.FocusEvent<HTMLInputElement, Element>, ...args: any) => {
        onFocus && onFocus(e, ...args);
    }
    const handleBlur = (e: React.FocusEvent<HTMLInputElement, Element>, ...args: any) => {
        // 为了让父组件能拿到值，在点击确定按钮的时候，让Form调用每个表单项的检验方法
        setFormItemValue && setFormItemValue(e.target.value);
        onBlur && onBlur(e, ...args);

    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, ...args: any) => {
        setValue(e.target.value);
        setFormItemValue && setFormItemValue(e.target.value);
        // 根据 name 属性，更新 Form 中的数据源
        onChange && onChange(e.target.value, ...args);

    }

    const handleIconClick = () => {
        onIconClick && onIconClick(value);
    }


    useEffect(() => {
        if (defaultValue) {
            // 为了一上来就提交表单，这边有默认值也要给 父组件设置
            setValue(defaultValue);
            setFormItemValue && setFormItemValue(defaultValue);
        } else {
            // 不能直接写 setValue(defaultValue)
            // 不知道为什么如果 defaultValue是空的话不会value赋值为 ""
            // 所以只能写死为 ""
            setValue("");
        }
    }, [defaultValue])

    return (
        <>
            <div className={cls + "input-wrapper"} style={{ flex: 1 }}>
                <div style={style} className="icon-input input-group">
                    {prefixContent && <span className="input-group-text" id="basic-addon1">{prefixContent}</span>}
                    <input style={{
                        borderRadius: "6px", borderTopLeftRadius: prefixContent ? 0 : '6px',
                        borderBottomLeftRadius: prefixContent ? 0 : '6px',
                        ...(transparent ? { backgroundColor: "transparent", border: "transparent", textAlign: "center" } : {})
                    }} step={1} name={name} value={value} disabled={disabled} placeholder={placeholder} onChange={handleChange} onBlur={(e) => handleBlur(e, "hello1", 5561)} onFocus={(e) => handleFocus(e, "hello1", 5561)} onClick={(e) => handleClick(e, "hello", 556)} type={type} className="form-control" aria-label="Username" aria-describedby="basic-addon1" />
                    <div onClick={handleIconClick} className="icon">
                        {children}
                    </div>
                </div>
                {suffixContent && <span className="input-group-text" id="basic-addon2">{suffixContent}</span>}
            </div>
        </>
    )
}


export default withTranslation()(Input);




