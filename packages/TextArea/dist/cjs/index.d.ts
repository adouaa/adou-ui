import React from "react";
import "./index.scss";
interface TextAreaProps {
    name?: string;
    inline?: boolean;
    isFormItem?: boolean;
    errMsg?: string;
    labelWidth?: any;
    commonSuffixIcon?: string;
    readOnly?: boolean;
    externalClassName?: string;
    width?: any;
    inputGroup?: boolean;
    labelPosition?: "left-top" | "center" | "top" | "input-group";
    labelColor?: string;
    required?: boolean;
    ref?: any;
    defaultValue?: string;
    label?: any;
    placeholder?: string;
    disabled?: boolean;
    onChangeOK?: (value: any, ...args: any) => void;
    onFormDataChange?: (key: string, value: any) => void;
}
declare const TextArea: React.FC<TextAreaProps>;
export default TextArea;
