import React from "react";
import "./index.scss";
interface FormProps {
    children?: any;
    labelColor?: string;
    eachWordWidth?: number;
    commonSuffixIcon?: any;
    required?: boolean;
    inline?: boolean;
    labelPosition?: "center" | "top" | "left-top";
}
declare const Form: React.ForwardRefExoticComponent<FormProps & React.RefAttributes<unknown>>;
export default Form;
