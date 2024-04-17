import React from 'react';
export interface FormItemProps {
    name: string;
    width?: string;
    label: string;
    children: React.ReactNode;
    labelPosition?: string;
    labelWidth?: number;
    inline?: boolean;
}
declare const FormItem: {
    (props: FormItemProps): React.JSX.Element;
    displayName: string;
    Input: React.ComponentType<Omit<{
        style?: any;
        defaultValue?: string | undefined;
        placeholder?: string | undefined;
        size?: "small" | "large" | "middle" | undefined;
        className?: string | undefined;
        disabled?: boolean | undefined;
        onChangeOK?: ((e: React.ChangeEvent<HTMLInputElement>, ...args: any) => void) | undefined;
        name?: string | undefined;
        prefixContent?: any;
        suffixContent?: any;
        onClickOK?: ((e: React.MouseEvent<HTMLInputElement, MouseEvent>, ...args: any) => void) | undefined;
        onFocusOK?: ((e: React.FocusEvent<HTMLInputElement, Element>, ...args: any) => void) | undefined;
        onBlurOK?: ((e: React.FocusEvent<HTMLInputElement, Element>, ...args: any) => void) | undefined;
    }, keyof import("react-i18next").WithTranslation<N, undefined>> & import("react-i18next").WithTranslationProps>;
    Select: React.ComponentType<Omit<{
        defaultValue?: any;
        options: any[];
        placeholder?: string | undefined;
        size?: "sm" | "lg" | undefined;
        className?: string | undefined;
        disabled?: boolean | undefined;
        onChangeOK?: ((e?: React.ChangeEvent<HTMLSelectElement> | undefined, ...args: any) => void) | undefined;
    }, keyof import("react-i18next").WithTranslation<N, undefined>> & import("react-i18next").WithTranslationProps>;
    TextArea: React.ComponentType<Omit<{
        label?: string | undefined;
        defaultValue?: string | undefined;
        placeholder?: string | undefined;
        disabled?: boolean | undefined;
        onChangeOK?: ((e: React.ChangeEvent<HTMLTextAreaElement>, ...args: any) => void) | undefined;
    }, keyof import("react-i18next").WithTranslation<N, undefined>> & import("react-i18next").WithTranslationProps>;
    LiveSearchSelect: React.ComponentType<Omit<{
        defaultValue?: any;
        options: any[];
        placeholder?: string | undefined;
        size?: "sm" | "lg" | undefined;
        className?: string | undefined;
        disabled?: boolean | undefined;
        onChangeOK?: ((e?: React.ChangeEvent<HTMLSelectElement> | undefined, ...args: any) => void) | undefined;
        onSelectOK: (value: string) => void;
    }, keyof import("react-i18next").WithTranslation<N, undefined>> & import("react-i18next").WithTranslationProps>;
    MultipleSelect: React.ComponentType<Omit<{
        defaultValue?: any;
        options: any[];
        placeholder?: string | undefined;
        size?: "sm" | "lg" | undefined;
        className?: string | undefined;
        disabled?: boolean | undefined;
        onChangeOK?: ((e?: React.ChangeEvent<HTMLSelectElement> | undefined, ...args: any) => void) | undefined;
        onMultipleSelectChangeOK?: ((selectedOptions: any[]) => void) | undefined;
    }, keyof import("react-i18next").WithTranslation<N, undefined>> & import("react-i18next").WithTranslationProps>;
    Radio: React.ComponentType<Omit<{
        label?: string | undefined;
        defaultValue?: any;
        options?: any[] | undefined;
        className?: string | undefined;
        onChangeOK?: ((item: any) => void) | undefined;
        value?: string | undefined;
        name?: string | undefined;
        checked?: boolean | undefined;
        id?: string | undefined;
        inline?: boolean | undefined;
    }, keyof import("react-i18next").WithTranslation<N, undefined>> & import("react-i18next").WithTranslationProps>;
    Checkbox: React.ComponentType<Omit<{
        defaultValue?: any;
        options?: any[] | undefined;
        className?: string | undefined;
        onChangeOK?: ((item: any) => void) | undefined;
        inline?: boolean | undefined;
    }, keyof import("react-i18next").WithTranslation<N, undefined>> & import("react-i18next").WithTranslationProps>;
};
export default FormItem;
