import React from 'react';
import FormItem from "./FormItem";
export { FormItem };
export declare const FormContext: React.Context<{}>;
interface FormProps {
    children?: any;
    name?: string;
}
declare const Form: React.ForwardRefExoticComponent<FormProps & React.RefAttributes<unknown>>;
export default Form;
