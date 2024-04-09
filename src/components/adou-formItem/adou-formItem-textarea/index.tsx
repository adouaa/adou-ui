import { useContext, useEffect, useState } from "react";
import { withTranslation } from "react-i18next"
import { FormContext } from "../../adou-form";
import { FormContextProps } from "../adou-formItem-input";
import "./index.css";


interface TextAreaProps {
    defaultValue?: string,
    label?: string,
    onChangeOK?: (e: React.ChangeEvent<HTMLTextAreaElement>, ...args: any) => void
    placeholder?: string;
    disabled?: boolean;
}

const TextArea: React.FC<TextAreaProps> = (props: TextAreaProps) => {

    const {label, placeholder, disabled, defaultValue, onChangeOK} = props;

    // 获取 `FormContext.Provider` 提供提供的 `value` 值
  const context: FormContextProps = useContext(FormContext);

    const [value, setValue] = useState(defaultValue ?? context.formData[context.name as string] ?? '');


    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>, ...args: any) => {
        setValue(e.target.value); // 手动将表单的value值赋值
        // 根据 name 属性，更新 Form 中的数据源
        context.formData[context.name as string] = e.target.value;
        // context.handleChange(context.name, e.target.value) // 这边不能直接用 handleChange来赋值，会出现赋值错误的情况
        onChangeOK && onChangeOK(e, ...args);
    }

    useEffect(() => {
        console.log("formData变化");
        
        setValue(context.formData[context.name as string] || "");
        }, [context.formData[context.name as string]])

    useEffect(() => {
        console.log("默认值变了");
        
        if (defaultValue) {
            setValue(defaultValue);
            // 这边不能直接用 context.handleChange(context.name, defaultValue)来赋默认值，会被置为空，并且失去 提交和重置功能
            context.formData[context.name as string] = defaultValue; 
        }
    }, [defaultValue])

    return <>
        <div className="textarea-warpper">
            {label && <span className="input-group-text">{label}</span>}
            <textarea value={value} disabled={disabled} onChange={(e) => handleChange(e)} placeholder={placeholder} className="form-control" aria-label="With textarea"></textarea>
        </div>
    </>
}

export default withTranslation()(TextArea);