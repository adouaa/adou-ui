import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { WithTranslation } from 'react-i18next';

interface InputProps extends WithTranslation {
    name?: string;
    required?: boolean;
    type?: "text" | "datetime-local" | "date" | "time";
    defaultValue?: any;
    size?: "large" | "middle" | "small" | undefined;
    className?: string;
    prefixContent?: any;
    suffixContent?: any;
    placeholder?: string;
    style?: React.CSSProperties;
    disabled?: boolean;
    transparent?: boolean;
    children?: any;
    setFormItemValue?: (value: any) => void;
    onClick?: (e: React.MouseEvent<HTMLInputElement, MouseEvent>, ...args: any) => void;
    onFocus?: (e: React.FocusEvent<HTMLInputElement, Element>, ...args: any) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement, Element>, ...args: any) => void;
    onChange?: (value: any, ...args: any) => void;
    onIconClick?: (value: string) => void;
}


export interface AdouInputRef {
    validateInput: () => void; // 定义暴露给父组件的方法
}

const AdouInput: React.ForwardRefRenderFunction<AdouInputRef, InputProps> = (
    { name, required = false, defaultValue = '', onChange }: InputProps,
    ref
) => {
    const inputRef = useRef<HTMLInputElement>(null);

    // 暴露给父组件的方法
    useImperativeHandle(ref, () => ({
        validateInput: () => {
            // 这里可以实现输入框的校验逻辑，比如检查输入是否合法
            console.log(`Validating input ${name}`);
        }
    }));

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(event.target.value);
    };

    return (
        <input
            ref={inputRef}
            type="text"
            name={name}
            required={required}
            defaultValue={defaultValue}
            onChange={handleChange}
        />
    );
};

export default forwardRef(AdouInput);
