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
    suffixContent?: any;
    commonSuffixContent?: any;
    onSuffixIconClick?: (name: string, value: any) => void;
}
declare const FormItem: {
    (props: FormItemProps): React.JSX.Element;
    displayName: string;
    Input: React.ComponentType<Omit<{
        style?: any;
        defaultValue?: any;
        placeholder?: string | undefined;
        size?: "small" | "large" | "middle" | undefined;
        className?: string | undefined;
        disabled?: boolean | undefined;
        onChangeOK?: ((e: React.ChangeEvent<HTMLInputElement>, ...args: any) => void) | undefined;
        setFormItemValue?: ((value: any) => void) | undefined;
        name?: string | undefined;
        type?: "number" | "time" | "text" | "date" | "datetime-local" | undefined;
        prefixContent?: any;
        suffixContent?: any;
        onClickOK?: ((e: React.MouseEvent<HTMLInputElement, MouseEvent>, ...args: any) => void) | undefined;
        onFocusOK?: ((e: React.FocusEvent<HTMLInputElement, Element>, ...args: any) => void) | undefined;
        onBlurOK?: ((e: React.FocusEvent<HTMLInputElement, Element>, ...args: any) => void) | undefined;
    }, keyof import("react-i18next").WithTranslation<N, undefined>> & import("react-i18next").WithTranslationProps>;
    Select: React.ComponentType<Omit<{
        style?: any;
        defaultValue?: any;
        options: any[];
        placeholder?: string | undefined;
        size?: "sm" | "lg" | undefined;
        className?: string | undefined;
        disabled?: boolean | undefined;
        transparent?: boolean | undefined;
        onChangeOK?: ((e?: any, ...args: any) => void) | undefined;
        setFormItemValue?: ((value: any) => void) | undefined;
    }, keyof import("react-i18next").WithTranslation<N, undefined>> & import("react-i18next").WithTranslationProps>;
    TextArea: React.ComponentType<Omit<{
        label?: string | undefined;
        defaultValue?: string | undefined;
        placeholder?: string | undefined;
        disabled?: boolean | undefined;
        onChangeOK?: ((e: React.ChangeEvent<HTMLTextAreaElement>, ...args: any) => void) | undefined;
        setFormItemValue?: ((value: any) => void) | undefined;
        rows?: number | undefined;
    }, keyof import("react-i18next").WithTranslation<N, undefined>> & import("react-i18next").WithTranslationProps>;
    LiveSearchSelect: React.ComponentType<Omit<{
        style?: any;
        defaultValue?: any;
        options: any[];
        placeholder?: string | undefined;
        size?: "sm" | "lg" | undefined;
        className?: string | undefined;
        disabled?: boolean | undefined;
        transparent?: boolean | undefined;
        onChangeOK?: ((e?: any, ...args: any) => void) | undefined;
        setFormItemValue?: ((value: any) => void) | undefined;
        onSelectOK: (value: string) => void;
    }, keyof import("react-i18next").WithTranslation<N, undefined>> & import("react-i18next").WithTranslationProps>;
    MultipleSelect: React.ComponentType<Omit<{
        defaultValue?: any;
        options: any[];
        placeholder?: string | undefined;
        size?: "sm" | "lg" | undefined;
        className?: string | undefined;
        disabled?: any;
        onChangeOK?: ((e?: any, ...args: any) => void) | undefined;
        setFormItemValue?: ((value: any) => void) | undefined;
        onMultipleSelectChangeOK?: ((selectedOptions: any[]) => void) | undefined;
        showSelected?: boolean | undefined;
    }, keyof import("react-i18next").WithTranslation<N, undefined>> & import("react-i18next").WithTranslationProps>;
    Radio: React.ComponentType<Omit<{
        label?: string | undefined;
        defaultValue?: any;
        options?: any[] | undefined;
        className?: string | undefined;
        onChangeOK?: ((item: any) => void) | undefined;
        setFormItemValue?: ((value: any) => void) | undefined;
        value?: string | undefined;
        name?: string | undefined;
        id?: string | undefined;
        checked?: boolean | undefined;
        inline?: boolean | undefined;
    }, keyof import("react-i18next").WithTranslation<N, undefined>> & import("react-i18next").WithTranslationProps>;
    Checkbox: React.ComponentType<Omit<{
        defaultValue?: any;
        options?: any[] | undefined;
        className?: string | undefined;
        onChangeOK?: ((item: any) => void) | undefined;
        setFormItemValue?: ((value: any) => void) | undefined;
        inline?: boolean | undefined;
        wrap?: boolean | undefined;
    }, keyof import("react-i18next").WithTranslation<N, undefined>> & import("react-i18next").WithTranslationProps>;
    TagInput: React.ComponentType<Omit<{
        defaultValue?: any;
        onChange?: ((value: any) => void) | undefined;
    }, keyof import("react-i18next").WithTranslation<N, undefined>> & import("react-i18next").WithTranslationProps>;
    CodeTextArea: React.ComponentType<Omit<{
        label?: string | undefined;
        defaultValue?: string | undefined;
        placeholder?: string | undefined;
        onChangeOK?: ((e: React.ChangeEvent<HTMLTextAreaElement>, ...args: any) => void) | undefined;
        setFormItemValue?: ((value: any) => void) | undefined;
        readOnly?: boolean | undefined;
        mode?: "htmlmixed" | "css" | "javascript" | undefined;
        theme?: "material" | "base16-light" | "base16-dark" | undefined;
        lineNumbers?: boolean | undefined;
        lineWrapping?: boolean | undefined;
        autoCloseTags?: boolean | undefined;
        styleActiveLine?: boolean | undefined;
        showCursorWhenSelecting?: boolean | undefined;
    }, keyof import("react-i18next").WithTranslation<N, undefined>> & import("react-i18next").WithTranslationProps>;
};
export default FormItem;
