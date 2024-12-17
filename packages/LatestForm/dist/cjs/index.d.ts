import React from 'react';
interface FormProps {
    commonWrapperWidth?: any;
    commonFormItemWrapperMinWidth?: any;
    commonFormItemWrapperMaxWidth?: any;
    wrpa?: boolean;
    externalWrapperClassName?: string;
    externalWrapperStyle?: React.CSSProperties;
    commonRules?: any;
    form: any;
    commonFormItemWrapperWidth?: any;
    commonContentWrapperWidth?: any;
    clearable?: boolean;
    size?: 'lg' | 'default' | 'sm';
    labelWidth?: any;
    layout?: 'horizontal' | 'horizontal-top' | 'vertical' | 'inline';
    oneLine?: boolean;
    data?: any;
    children?: any;
    labelColor?: string;
    eachWordWidth?: number;
    commonSuffixIcon?: any;
    required?: boolean;
    inline?: boolean;
    labelPosition?: 'center' | 'top' | 'left-top';
    onFormDataChange?: (key: string, value: any) => void;
    onSubmit?: () => void;
}
interface ExtendedForm extends React.ForwardRefExoticComponent<FormProps & React.RefAttributes<unknown>> {
    Item: React.ComponentType<any>;
}
declare const Form: ExtendedForm;
export default Form;
