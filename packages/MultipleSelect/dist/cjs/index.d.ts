import React from "react";
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
    disabled?: any;
    onMultipleSelectChangeOK?: ((selectedOptions: any[]) => void) | undefined;
    setFormItemValue?: ((value: any) => void) | undefined;
    defaultValue?: any;
    options: any[];
    placeholder?: string | undefined;
    size?: "sm" | "lg" | undefined;
    className?: string | undefined;
    showSelected?: boolean | undefined;
    onChangeOK?: ((e?: any, ...args: any) => void) | undefined;
}, keyof import("react-i18next").WithTranslation<N, undefined>> & import("react-i18next").WithTranslationProps>;
export default _default;
