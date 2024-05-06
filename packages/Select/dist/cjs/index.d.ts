import React from "react";
import "./index.scss";
export interface SelectProps {
    defaultValue?: any;
    options: any[];
    placeholder?: string;
    size?: "sm" | "lg";
    className?: string;
    disabled?: boolean;
    width?: string;
    transparent?: boolean;
    maxHeight?: string;
    onChangeOK?: (e?: any, ...args: any) => void;
    setFormItemValue?: (value: any) => void;
}
declare const _default: React.ComponentType<Omit<{
    defaultValue?: any;
    options: any[];
    placeholder?: string | undefined;
    size?: "sm" | "lg" | undefined;
    className?: string | undefined;
    disabled?: boolean | undefined;
    width?: string | undefined;
    transparent?: boolean | undefined;
    maxHeight?: string | undefined;
    onChangeOK?: ((e?: any, ...args: any) => void) | undefined;
    setFormItemValue?: ((value: any) => void) | undefined;
}, keyof import("react-i18next").WithTranslation<N, undefined>> & import("react-i18next").WithTranslationProps>;
export default _default;
