import React from "react";
import "./index.scss";
export interface SelectProps {
    returnType?: "str" | "obj";
    showDefaultValue?: boolean;
    labelKey?: string;
    valueKey?: string;
    name?: string;
    inline?: boolean;
    suffixContent?: any;
    suffixContentType?: string;
    contentWidth?: any;
    isFormItem?: boolean;
    attribute?: string;
    required?: boolean;
    errMsg?: string;
    labelWidth?: any;
    commonSuffixIcon?: string;
    width?: any;
    label?: string;
    labelPosition?: "left-top" | "center" | "top";
    inputGroup?: boolean;
    labelColor?: string;
    defaultValue?: any;
    options: any[];
    placeholder?: string;
    size?: "sm" | "lg";
    externalClassName?: string;
    readOnly?: any;
    showSelected?: boolean;
    single?: boolean;
    onInputChange?: (e?: any, ...args: any) => void;
    onFormDataChange?: (key: string, value: any) => void;
}
interface RetrieveSelectProps extends SelectProps {
    onRetrieveSelectChange?: (selectedOptions: any[]) => void;
    onDelete?: () => void;
}
declare const RetrievrSelect: React.FC<RetrieveSelectProps>;
export default RetrievrSelect;
