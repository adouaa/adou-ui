import React from "react";
export interface InputProps {
    type?: "text" | "datetime-local" | "date" | "time" | "number";
    name?: string;
    defaultValue?: any;
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
declare const _default: React.ComponentType<Omit<{
    style?: any;
    defaultValue?: any;
    placeholder?: string | undefined;
    size?: "small" | "large" | "middle" | undefined;
    className?: string | undefined;
    disabled?: boolean | undefined;
    onChangeOK?: ((e: React.ChangeEvent<HTMLInputElement>, ...args: any) => void) | undefined;
    setFormItemValue?: ((value: any) => void) | undefined;
    type?: "number" | "time" | "text" | "datetime-local" | "date" | undefined;
    name?: string | undefined;
    prefixContent?: any;
    suffixContent?: any;
    onClickOK?: ((e: React.MouseEvent<HTMLInputElement, MouseEvent>, ...args: any) => void) | undefined;
    onFocusOK?: ((e: React.FocusEvent<HTMLInputElement, Element>, ...args: any) => void) | undefined;
    onBlurOK?: ((e: React.FocusEvent<HTMLInputElement, Element>, ...args: any) => void) | undefined;
}, keyof import("react-i18next").WithTranslation<N, undefined>> & import("react-i18next").WithTranslationProps>;
export default _default;
