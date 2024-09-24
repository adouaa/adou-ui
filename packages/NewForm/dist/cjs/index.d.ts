import React from "react";
interface FormProps {
    oneLine?: boolean;
    data?: any;
    children?: any;
    labelColor?: string;
    eachWordWidth?: number;
    commonSuffixIcon?: any;
    required?: boolean;
    inline?: boolean;
    labelPosition?: "center" | "top" | "left-top";
    onFormDataChange?: (key: string, value: any) => void;
}
declare const Form: React.ForwardRefExoticComponent<FormProps & React.RefAttributes<unknown>>;
export default Form;
