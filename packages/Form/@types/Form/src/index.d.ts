import React from 'react';
import FormItem from "./FormItem";
export { FormItem };
export declare const FormContext: React.Context<{}>;
export interface FormContextProps {
    handleChange?: any;
    name?: string;
    formData?: any;
    handleValidate?: any;
    checkValidate?: any;
    registerFormItem?: any;
}
interface FormProps {
    children?: any;
    name?: string;
    labelWidth?: number;
    labelAlignX?: "left" | "right";
    inline?: boolean;
    errorInline?: boolean;
    commonSuffixContent?: any;
    onSuffixIconClick?: any;
}
declare const Form: React.ForwardRefExoticComponent<FormProps & React.RefAttributes<unknown>>;
export default Form;
