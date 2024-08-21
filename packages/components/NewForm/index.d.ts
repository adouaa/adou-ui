import React from "react";
import "./index.scss";
interface AdouNewFormProps {
    children?: any;
    eachWordWidth?: number;
    commonSuffixIcon?: any;
    required?: boolean;
    inline?: boolean;
    labelPosition?: "center" | "top" | "left-top";
}
declare const AdouNewForm: React.ForwardRefExoticComponent<AdouNewFormProps & React.RefAttributes<unknown>>;
export default AdouNewForm;
