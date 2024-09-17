import React from "react";
import "./index.scss";
interface RadioProps {
    name?: string;
    key?: string;
    width?: any;
    isFormItem?: string;
    errMsg?: string;
    labelWidth?: any;
    commonSuffixIcon?: string;
    readOnly?: boolean;
    defaultValue?: any;
    checked?: boolean;
    label?: string;
    inputGroup?: boolean;
    labelPosition?: "left-top" | "center" | "top" | "input-group";
    labelColor?: string;
    required?: boolean;
    id?: string;
    value?: string;
    externalClassName?: string;
    options?: any[];
    inline?: boolean;
    onChangeOK?: (item: any) => void;
}
declare const _default: React.ForwardRefExoticComponent<RadioProps & React.RefAttributes<any>>;
export default _default;
