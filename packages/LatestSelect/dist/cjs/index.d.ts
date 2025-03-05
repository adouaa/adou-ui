import "./index.scss";
import React from "react";
export interface SelectProps {
    addonStyle?: React.CSSProperties;
    addonAfter?: any;
    inputStyle?: React.CSSProperties;
    showIcon?: boolean;
    title?: string;
    backgroundColor?: string;
    mode?: "common" | "liveSearch" | "tags";
    multiple?: boolean;
    showSearch?: boolean;
    prefix?: any;
    suffix?: any;
    varient?: "outlined" | "filled" | "borderless";
    contentWrap?: boolean;
    ellipsis?: boolean;
    compact?: boolean;
    wrapperStyle?: React.CSSProperties;
    wrapperWidth?: any;
    commonSuffixContent?: string;
    clearable?: boolean;
    isAddon?: boolean;
    formStyle?: React.CSSProperties;
    errorPaddingLeft?: any;
    suffixContentExternalCls?: string;
    selectContentExternalCls?: string;
    labelMinWidth?: any;
    noWrap?: boolean;
    shouldFocus?: boolean;
    activeColor?: {
        font: string;
        bgc: string;
    };
    returnType?: "str" | "obj";
    showEmpty?: boolean;
    showDefaultValue?: boolean;
    labelKey?: string;
    valueKey?: string;
    showLabel?: boolean;
    suffixContent?: any;
    suffixContentType?: string;
    inline?: boolean;
    isFormItem?: boolean;
    name?: string;
    errMsg?: string;
    labelWidth?: any;
    commonSuffixIcon?: string;
    width?: any;
    label?: any;
    labelPosition?: "left-top" | "center" | "top";
    inputGroup?: boolean;
    labelColor?: string;
    required?: boolean;
    defaultValue?: any;
    options: any[];
    placeholder?: string;
    size?: "sm" | "lg" | "default";
    externalClassName?: string;
    disabled?: boolean;
    transparent?: boolean;
    optionContentMaxHeight?: string;
    onChange?: (e?: any, ...args: any) => void;
    onFormDataChange?: (key: string, value: any) => void;
    onFieldChange?: (name: string, value: any) => void;
    onValidateField?: (name: string, value?: any) => void;
    optionRender?: (option: any, labelKey?: any, valueKey?: any) => void;
    onInputChange?: (value: string) => void;
    filterOption?: (input: string, option: any, labelKey?: any, valueKey?: any) => any | boolean;
}
declare const Select: React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<unknown>>;
export default Select;
