import React from "react";
export interface FormContextProps {
    handleChange?: any;
    name?: string;
    formData?: any;
}
declare const _default: React.ComponentType<Omit<{
    style?: any;
    defaultValue?: string | undefined;
    placeholder?: string | undefined;
    size?: "small" | "large" | "middle" | undefined;
    className?: string | undefined;
    disabled?: boolean | undefined;
    onChangeOK?: ((e: React.ChangeEvent<HTMLInputElement>, ...args: any) => void) | undefined;
    name?: string | undefined;
    prefixContent?: any;
    suffixContent?: any;
    onClickOK?: ((e: React.MouseEvent<HTMLInputElement, MouseEvent>, ...args: any) => void) | undefined;
    onFocusOK?: ((e: React.FocusEvent<HTMLInputElement, Element>, ...args: any) => void) | undefined;
    onBlurOK?: ((e: React.FocusEvent<HTMLInputElement, Element>, ...args: any) => void) | undefined;
}, keyof import("react-i18next").WithTranslation<N, undefined>> & import("react-i18next").WithTranslationProps>;
export default _default;
