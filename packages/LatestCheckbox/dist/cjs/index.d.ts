import React from "react";
import "./index.scss";
interface CheckboxProps {
    contentClassName?: string;
    labelClassName?: string;
    uniqId?: string | number;
    height?: string;
    optionClassName?: string;
    width?: any;
    valueKey?: string;
    labelKey?: string;
    returnType?: "str" | "obj";
    suffixContentType?: string;
    suffixContent?: any;
    name?: string;
    isFormItem?: boolean;
    errMsg?: string;
    labelWidth?: any;
    commonSuffixIcon?: string;
    readOnly?: boolean;
    inputGroup?: boolean;
    label?: string;
    labelPosition?: "left-top" | "center" | "top" | "input-group";
    labelColor?: string;
    required?: boolean;
    defaultValue?: string | string[] | {
        label: string;
        value: string;
    }[] | any[];
    externalClassName?: string;
    options?: {
        label: string;
        value: string;
    }[] | any[];
    inline?: boolean;
    wrap?: boolean;
    onChange?: (item: {
        label: string;
        value: string;
    }[] | any[]) => void;
    onFormDataChange?: (key: string, value: any) => void;
}
declare const _default: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<any>>;
export default _default;
