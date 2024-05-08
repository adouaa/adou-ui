import "./index.scss";
import React from "react";
export interface SelectProps {
    defaultValue?: any;
    options: any[];
    placeholder?: string;
    size?: "sm" | "lg";
    className?: string;
    disabled?: boolean;
    style?: any;
    transparent?: boolean;
    onChangeOK?: (e?: any, ...args: any) => void;
    setFormItemValue?: (value: any) => void;
}
declare const _default: React.ComponentType<Omit<{
    style?: any;
    defaultValue?: any;
    size?: "sm" | "lg" | undefined;
    className?: string | undefined;
    placeholder?: string | undefined;
    disabled?: boolean | undefined;
    setFormItemValue?: ((value: any) => void) | undefined;
    onChangeOK?: ((e?: any, ...args: any) => void) | undefined;
    options: any[];
    transparent?: boolean | undefined;
}, keyof import("react-i18next").WithTranslation<N, undefined>> & import("react-i18next").WithTranslationProps>;
export default _default;
