import React from "react";
import "./index.css";
export interface SelectProps {
    defaultValue?: any;
    options: any[];
    placeholder?: string;
    size?: "sm" | "lg";
    className?: string;
    disabled?: any;
    showSelected?: boolean;
    onChangeOK?: (e?: any, ...args: any) => void;
}
declare const _default: React.ComponentType<Omit<{
    defaultValue?: any;
    size?: "sm" | "lg" | undefined;
    className?: string | undefined;
    placeholder?: string | undefined;
    disabled?: any;
    setFormItemValue?: ((value: any) => void) | undefined;
    onChangeOK?: ((e?: any, ...args: any) => void) | undefined;
    options: any[];
    onMultipleSelectChangeOK?: ((selectedOptions: any[]) => void) | undefined;
    showSelected?: boolean | undefined;
}, keyof import("react-i18next").WithTranslation<N, undefined>> & import("react-i18next").WithTranslationProps>;
export default _default;
