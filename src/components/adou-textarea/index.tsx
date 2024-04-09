import { useContext, useEffect, useState } from "react";
import { withTranslation } from "react-i18next"


interface TextAreaProps {
    defaultValue?: string,
    label?: string,
    onChangeOK?: (e: any, ...args: any) => void
    placeholder?: string;
    disabled?: boolean;
}

const TextArea: React.FC<TextAreaProps> = (props: TextAreaProps) => {

    const {label, placeholder, disabled, defaultValue, onChangeOK} = props;

    // 获取 `FormContext.Provider` 提供提供的 `value` 值

    const [value, setValue] = useState(defaultValue ?? '');


    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>, ...args: any) => {
        setValue(e.target.value);
        // 根据 name 属性，更新 Form 中的数据源
        onChangeOK && onChangeOK(e.target.value, ...args);
    }

 
    useEffect(() => {
        if (defaultValue) {
            setValue(defaultValue);
            // 这边不能直接用 context.handleChange(context.name, defaultValue)来赋默认值，会被置为空，并且失去 提交和重置功能
        }
    }, [defaultValue])

    return <>
        <div className="input-group">
            {label && <span className="input-group-text">{label}</span>}
            <textarea value={value} disabled={disabled} onChange={(e) => handleChange(e)} placeholder={placeholder} className="form-control" aria-label="With textarea"></textarea>
        </div>
    </>
}

export default withTranslation()(TextArea);