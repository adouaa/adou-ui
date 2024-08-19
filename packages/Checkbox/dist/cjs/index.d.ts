import React from "react";
import "./index.scss";
interface CheckboxProps {
    name?: string;
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
    }[];
    externalClassName?: string;
    options?: {
        label: string;
        value: string;
    }[];
    inline?: boolean;
    wrap?: boolean;
    onChange?: (item: {
        label: string;
        value: string;
    }[]) => void;
}
declare const _default: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<any>>;
export default _default;
