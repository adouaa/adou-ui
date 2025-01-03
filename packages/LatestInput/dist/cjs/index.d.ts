import React, { ReactNode } from "react";
import "./index.scss";
export interface InputProps {
    title?: string;
    wrap?: boolean;
    wrapperClassName?: string;
    backgroundColor?: string;
    inputStyle?: React.CSSProperties;
    prefix?: any;
    suffix?: any;
    addonBefore?: ReactNode | string | number;
    addonAfter?: ReactNode | string | number;
    varient?: "outlined" | "filled" | "borderless";
    valueKey?: string;
    labelKey?: string;
    wrapperWidth?: any;
    wrapperStyle?: React.CSSProperties;
    commonSuffixContent?: string;
    clearable?: boolean;
    formStyle?: React.CSSProperties;
    suffixContentExternalClassName?: string;
    inputExternalClassName?: string;
    textEnd?: boolean;
    name?: string;
    inline?: boolean;
    isFormItem?: boolean;
    errMsg?: string;
    labelWidth?: any;
    commonSuffixIcon?: string;
    width?: any;
    label?: string;
    layout?: "horizontal" | "horizontal-top" | "vertical" | "inline";
    inputGroup?: boolean;
    labelColor?: string;
    required?: boolean;
    type?: "text" | "datetime-local" | "date" | "time" | "number";
    defaultValue?: any;
    size?: "lg" | "default" | "sm";
    externalClassName?: string;
    prefixContent?: any;
    suffixContent?: any;
    suffixContentType?: string;
    placeholder?: string;
    style?: React.CSSProperties;
    disabled?: boolean;
    transparent?: boolean;
    children?: any;
    onClick?: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
    onFocus?: (e: React.FocusEvent<HTMLInputElement, Element>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement, Element>) => void;
    onChange?: (value: any) => void;
    onIconClick?: (value: string) => void;
    onFormDataChange?: (key: string, value: any) => void;
    onFieldChange?: (name: string, value: any) => void;
    onValidateField?: (name: string, value?: any) => void;
}
export interface InputRef {
    validate: () => void;
}
declare const ForwardedInput: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<InputRef>>;
export default ForwardedInput;
