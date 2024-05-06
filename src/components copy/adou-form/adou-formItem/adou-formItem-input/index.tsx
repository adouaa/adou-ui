
import React, { useContext, useEffect, useState } from "react";
import { withTranslation } from "react-i18next"
import classNames from "classnames";
import { FormContext, FormContextProps } from "../../index";



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
    setFormItemValue?: (value: any) => void;
    onClickOK?: (e: React.MouseEvent<HTMLInputElement, MouseEvent>, ...args: any) => void;
    onFocusOK?: (e: React.FocusEvent<HTMLInputElement, Element>, ...args: any) => void;
    onBlurOK?: (e: React.FocusEvent<HTMLInputElement, Element>, ...args: any) => void;
    onChangeOK?: (e: React.ChangeEvent<HTMLInputElement>, ...args: any) => void;

}



const Input: React.FC<InputProps> = (props: InputProps) => {

    // 获取 `FormContext.Provider` 提供提供的 `value` 值
    const context: FormContextProps = useContext(FormContext);


    const { type = "text", name, size, className, prefixContent, suffixContent, placeholder, style, disabled, defaultValue, onClickOK, onFocusOK, onBlurOK, setFormItemValue } = props;


    // 确保value不会是undefined，如果defaultValue或formData中相应的值是undefined，则将其设为空字符串
    const [value, setValue] = useState(defaultValue ?? context.formData[context.name as string] ?? '');

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
        // 为了让父组件能拿到值，在点击确定按钮的时候，让Form调用每个表单项的检验方法
        setFormItemValue && setFormItemValue(e.target.value);
        context.checkValidate(e.target.value);
        onBlurOK && onBlurOK(e, ...args);

    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, ...args: any) => {
        setValue(e.target.value);
        setFormItemValue && setFormItemValue(e.target.value); 
        // 根据 name 属性，更新 Form 中的数据源
        context.handleChange(context.name, e.target.value)
    }

    useEffect(() => {
        setValue(context.formData[context.name as string] || "");
    }, [context.formData[context.name as string]])

    useEffect(() => {

        if (defaultValue) {
            
            // 为了一上来就提交表单，这边有默认值也要给 父组件设置
            setValue(defaultValue);
            setFormItemValue && setFormItemValue(defaultValue); 
            // 这边不能直接用 context.handleChange(context.name, defaultValue)来赋默认值，会被置为空，并且失去 提交和重置功能
            context.formData[context.name as string] = defaultValue;

            // 新增让校验通过----解决了在切换树形节点之前如果已经出现校验失败，切换节点的时候要全部置为校验通过
            context.checkValidate(defaultValue); 
        } else {
            // 不能直接写 setValue(defaultValue)
            // 不知道为什么如果 defaultValue是空的话不会value赋值为 ""
            // 所以只能写死为 ""
            setValue(""); 
        }
    }, [defaultValue])

    return (
        <>
            <div className={cls} style={{ flex: 1 }}>
                {prefixContent && <span className="input-group-text" id="basic-addon1">{prefixContent}</span>}
                <input step={1} name={name} value={value} disabled={disabled} style={style} placeholder={placeholder} onChange={handleChange} onBlur={(e) => handleBlur(e, "hello1", 5561)} onFocus={(e) => handleFocus(e, "hello1", 5561)} onClick={(e) => handleClick(e, "hello", 556)} type={type} className="form-control" aria-label="Username" aria-describedby="basic-addon1" />
                {suffixContent && <span className="input-group-text" id="basic-addon2">{suffixContent}</span>}
            </div>
        </>
    )
}

Input.displayName = "Input";

export default withTranslation()(Input);
