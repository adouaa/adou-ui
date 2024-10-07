import React from "react";
import "./index.scss";
export interface InputProps {
    name?: string;
    inline?: boolean;
    isFormItem?: boolean;
    errMsg?: string;
    labelWidth?: any;
    commonSuffixIcon?: string;
    width?: any;
    label?: string;
    labelPosition?: "left-top" | "center" | "top";
    inputGroup?: boolean;
    labelColor?: string;
    required?: boolean;
    type?: "text" | "datetime-local" | "date" | "time" | "number";
    defaultValue?: any;
    size?: "large" | "middle" | "small" | undefined;
    externalClassName?: string;
    prefixContent?: any;
    suffixContent?: any;
    suffixContentType?: string;
    placeholder?: string;
    style?: React.CSSProperties;
    readOnly?: boolean;
    transparent?: boolean;
    children?: any;
    onClick?: (e: React.MouseEvent<HTMLInputElement, MouseEvent>, ...args: any) => void;
    onFocus?: (e: React.FocusEvent<HTMLInputElement, Element>, ...args: any) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement, Element>, ...args: any) => void;
    onChange?: (value: any, ...args: any) => void;
    onIconClick?: (value: string) => void;
    onFormDataChange?: (key: string, value: any) => void;
}
export interface InputRef {
    validate: () => void;
}
declare const _default: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<InputRef>>;
export default _default;
