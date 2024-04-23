import React from "react";
export interface SelectProps {
    defaultValue?: any;
    options: any[];
    placeholder?: string;
    size?: "sm" | "lg";
    className?: string;
    disabled?: boolean;
    onChangeOK?: (e?: any, ...args: any) => void;
}
declare const _default: React.ComponentType<Omit<{
    defaultValue?: any;
    options: any[];
    placeholder?: string | undefined;
    size?: "sm" | "lg" | undefined;
    className?: string | undefined;
    disabled?: boolean | undefined;
    onChangeOK?: ((e?: any, ...args: any) => void) | undefined;
}, keyof import("react-i18next").WithTranslation<N, undefined>> & import("react-i18next").WithTranslationProps>;
export default _default;
