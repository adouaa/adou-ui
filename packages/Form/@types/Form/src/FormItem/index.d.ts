import React from 'react';
import "./index.css";
export interface FormItemProps {
    name: string;
    width?: string;
    label: string;
    children: React.ReactNode;
    labelAlignX?: "left" | "right";
    labelWidth?: number;
    inline?: boolean;
    validate?: boolean;
    rule?: any;
    maxLabelLength?: number;
    labelAlignY?: any;
    errorInline?: boolean;
    suffixIcon?: any;
    onSuffixIconClick?: (name: string, value: any) => void;
}
declare const FormItem: {
    (props: FormItemProps): React.JSX.Element;
    displayName: string;
    Input: React.ComponentType<Omit<{
        style?: any;
        type?: "text" | "datetime-local" | "date" | "time" | undefined;
        name?: string | undefined;
        defaultValue?: string | undefined;
        size?: "large" | "middle" | "small" | undefined;
        className?: string | undefined;
        prefixContent?: any;
        suffixContent?: any;
        placeholder?: string | undefined;
        disabled?: boolean | undefined;
        setFormItemValue?: ((value: any) => void) | undefined;
        onClickOK?: ((e: React.MouseEvent<HTMLInputElement, MouseEvent>, ...args: any) => void) | undefined;
        onFocusOK?: ((e: React.FocusEvent<HTMLInputElement, Element>, ...args: any) => void) | undefined;
        onBlurOK?: ((e: React.FocusEvent<HTMLInputElement, Element>, ...args: any) => void) | undefined;
        onChangeOK?: ((e: React.ChangeEvent<HTMLInputElement>, ...args: any) => void) | undefined;
    }, keyof import("react-i18next").WithTranslation<N, undefined>> & import("react-i18next").WithTranslationProps>;
    Select: React.ComponentType<Omit<{
        style?: any;
        defaultValue?: any;
        size?: "sm" | "lg" | undefined;
        className?: string | undefined;
        placeholder?: string | undefined;
        disabled?: boolean | undefined;
        setFormItemValue?: ((value: any) => void) | undefined;
        onChangeOK?: ((e?: any, ...args: any) => void) | undefined;
        options: any[];
        transparent?: boolean | undefined;
    }, keyof import("react-i18next").WithTranslation<N, undefined>> & import("react-i18next").WithTranslationProps>;
    TextArea: React.ComponentType<Omit<{
        label?: string | undefined;
        defaultValue?: string | undefined;
        placeholder?: string | undefined;
        disabled?: boolean | undefined;
        setFormItemValue?: ((value: any) => void) | undefined;
        onChangeOK?: ((e: React.ChangeEvent<HTMLTextAreaElement>, ...args: any) => void) | undefined;
    }, keyof import("react-i18next").WithTranslation<N, undefined>> & import("react-i18next").WithTranslationProps>;
    LiveSearchSelect: React.ComponentType<Omit<{
        style?: any;
        defaultValue?: any;
        size?: "sm" | "lg" | undefined;
        className?: string | undefined;
        placeholder?: string | undefined;
        disabled?: boolean | undefined;
        setFormItemValue?: ((value: any) => void) | undefined;
        onChangeOK?: ((e?: any, ...args: any) => void) | undefined;
        options: any[];
        transparent?: boolean | undefined;
        onSelectOK: (value: string) => void;
    }, keyof import("react-i18next").WithTranslation<N, undefined>> & import("react-i18next").WithTranslationProps>;
    MultipleSelect: React.ComponentType<Omit<{
        defaultValue?: any;
        size?: "sm" | "lg" | undefined;
        className?: string | undefined;
        placeholder?: string | undefined;
        disabled?: any;
        setFormItemValue?: ((value: any) => void) | undefined;
        onChangeOK?: ((e?: any, ...args: any) => void) | undefined;
        options: any[];
        onMultipleSelectChangeOK?: ((selectedOptions: any[]) => void) | undefined;
        showSelected?: boolean | undefined;
    }, keyof import("react-i18next").WithTranslation<N, undefined>> & import("react-i18next").WithTranslationProps>;
    Radio: React.ComponentType<Omit<{
        label?: string | undefined;
        name?: string | undefined;
        defaultValue?: any;
        className?: string | undefined;
        setFormItemValue?: ((value: any) => void) | undefined;
        onChangeOK?: ((item: any) => void) | undefined;
        value?: string | undefined;
        id?: string | undefined;
        options?: any[] | undefined;
        checked?: boolean | undefined;
        inline?: boolean | undefined;
    }, keyof import("react-i18next").WithTranslation<N, undefined>> & import("react-i18next").WithTranslationProps>;
    Checkbox: React.ComponentType<Omit<{
        defaultValue?: any;
        className?: string | undefined;
        setFormItemValue?: ((value: any) => void) | undefined;
        onChangeOK?: ((item: any) => void) | undefined;
        options?: any[] | undefined;
        inline?: boolean | undefined;
        wrap?: boolean | undefined;
    }, keyof import("react-i18next").WithTranslation<N, undefined>> & import("react-i18next").WithTranslationProps>;
    TagInput: React.ComponentType<Omit<{
        defaultValue?: any;
        onChange?: ((value: any) => void) | undefined;
    }, keyof import("react-i18next").WithTranslation<N, undefined>> & import("react-i18next").WithTranslationProps>;
};
export default FormItem;
