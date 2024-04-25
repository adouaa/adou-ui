import React from "react";
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
    autoFocus?: boolean;
    setFormItemValue?: (value: any) => void;
    onClickOK?: (e: React.MouseEvent<HTMLInputElement, MouseEvent>, ...args: any) => void;
    onFocusOK?: (e: React.FocusEvent<HTMLInputElement, Element>, ...args: any) => void;
    onBlurOK?: (e: React.FocusEvent<HTMLInputElement, Element>, ...args: any) => void;
    onChangeOK?: (e: any, ...args: any) => void;
}
export interface FormContextProps {
    handleChange?: any;
    name?: string;
    formData?: any;
}
declare const _default: React.ComponentType<Omit<{
    style?: any;
    type?: "text" | "date" | "time" | undefined;
    name?: string | undefined;
    defaultValue?: string | undefined;
    size?: "large" | "middle" | "small" | undefined;
    className?: string | undefined;
    prefixContent?: any;
    suffixContent?: any;
    placeholder?: string | undefined;
    disabled?: boolean | undefined;
    autoFocus?: boolean | undefined;
    setFormItemValue?: ((value: any) => void) | undefined;
    onClickOK?: ((e: React.MouseEvent<HTMLInputElement, MouseEvent>, ...args: any) => void) | undefined;
    onFocusOK?: ((e: React.FocusEvent<HTMLInputElement, Element>, ...args: any) => void) | undefined;
    onBlurOK?: ((e: React.FocusEvent<HTMLInputElement, Element>, ...args: any) => void) | undefined;
    onChangeOK?: ((e: any, ...args: any) => void) | undefined;
}, keyof import("react-i18next").WithTranslation<N, undefined>> & import("react-i18next").WithTranslationProps>;
export default _default;
