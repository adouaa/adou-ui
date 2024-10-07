import React from "react";
import "./index.scss";
interface CascaderProps {
    width?: any;
    inline?: boolean;
    activeColor?: {
        font: string;
        bgc: string;
    };
    returnType?: string;
    required?: boolean;
    name?: string;
    label?: any;
    errMsg?: string;
    isFormItem?: boolean;
    labelColor?: string;
    showLabel?: boolean;
    labelWidth?: any;
    labelPosition?: "center" | "left-top" | "top";
    clearable?: boolean;
    valueKey?: string;
    labelKey?: string;
    filterable?: boolean;
    options: any;
    defaultValue?: string[];
    onChange?: (value: string[]) => void;
    onFormDataChange?: (key: string, value: any) => void;
}
declare const Cascader: React.ForwardRefExoticComponent<CascaderProps & React.RefAttributes<unknown>>;
export default Cascader;
