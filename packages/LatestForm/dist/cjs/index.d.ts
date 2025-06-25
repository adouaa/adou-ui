import React from "react";
import "./index.scss";
interface FormProps {
    commonFormContenClassName?: string;
    commonErrorType?: "label" | "message";
    commonForItemClsssName?: string;
    commonDisabled?: boolean;
    showNotFormItem?: boolean;
    commonContentBackgroundColor?: any;
    commonFormItemWrapperWidth?: any;
    commonFormItemWrapperMinWidth?: any;
    commonFormItemWrapperMaxWidth?: any;
    wrpa?: boolean;
    externalWrapperClassName?: string;
    externalWrapperStyle?: React.CSSProperties;
    commonRules?: any;
    form: any;
    clearable?: boolean;
    size?: "lg" | "default" | "sm";
    labelWidth?: any;
    layout?: "horizontal" | "horizontal-top" | "vertical" | "inline";
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
    onSubmit?: () => void;
}
interface ExtendedForm extends React.ForwardRefExoticComponent<FormProps & React.RefAttributes<unknown>> {
    Item: React.ComponentType<any>;
}
declare const Form: ExtendedForm;
export default Form;
