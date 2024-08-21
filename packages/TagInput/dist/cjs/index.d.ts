import React from "react";
import "./index.scss";
interface TagInputProps {
    name?: string;
    suffixContent?: any;
    isFormItem?: boolean;
    required?: boolean;
    errMsg?: string;
    labelWidth?: any;
    commonSuffixIcon?: string;
    readOnly?: boolean;
    width?: any;
    label?: string;
    labelPosition?: "left-top" | "center" | "top";
    inputGroup?: boolean;
    labelColor?: string;
    defaultValue?: any;
    onChange?: (value: any) => void;
}
declare const TagInput: React.ForwardRefExoticComponent<TagInputProps & React.RefAttributes<unknown>>;
export default TagInput;
