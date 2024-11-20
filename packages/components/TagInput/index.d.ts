import React from "react";
import "./index.scss";
interface TagInputProps {
    suffixContentType?: string;
    suffixContent?: any;
    name?: string;
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
    onFormDataChange?: (key: string, value: any) => void;
}
declare const TagInput: React.ForwardRefExoticComponent<TagInputProps & React.RefAttributes<unknown>>;
export default TagInput;
