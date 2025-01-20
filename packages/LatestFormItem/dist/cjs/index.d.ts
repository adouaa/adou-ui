import { ReactNode } from "react";
import React from "react";
import "./index.scss";
interface FormItemProps {
    addonAfterStyle?: React.CSSProperties;
    wrapperClassName?: string;
    suffix?: any;
    disabled?: boolean;
    labelColor?: string;
    contentBackgroundColor?: string;
    wrapperMinWidth?: any;
    wrapperWidth?: any;
    wrapperMaxWidth?: any;
    contentWrapperWidth?: any;
    wrapperStyle?: React.CSSProperties;
    contentWrap?: boolean;
    oneLine?: boolean;
    labelWrap?: boolean;
    formItemRef?: any;
    rules?: any;
    setFieldValue?: any;
    data?: any;
    clearable?: boolean;
    addonAfter?: ReactNode | string | number;
    size?: "lg" | "default" | "sm";
    labelWidth?: any;
    layout?: "horizontal" | "horizontal-top" | "vertical" | "inline";
    addonBefore?: ReactNode | string | number;
    label?: string;
    name?: string;
    children?: ReactNode;
}
declare const FormItem: {
    ({ addonAfterStyle, wrapperClassName, suffix, disabled, labelColor, contentBackgroundColor, wrapperMinWidth, wrapperWidth, wrapperMaxWidth, contentWrapperWidth, wrapperStyle, contentWrap, oneLine, labelWrap, formItemRef, rules, setFieldValue, data, clearable, addonAfter, size, labelWidth, layout, addonBefore, label, name, children, }: FormItemProps): React.JSX.Element;
    displayName: string;
};
export default FormItem;
