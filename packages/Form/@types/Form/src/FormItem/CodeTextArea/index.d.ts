import React from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/theme/base16-light.css";
import "codemirror/theme/base16-dark.css";
import "codemirror/mode/htmlmixed/htmlmixed";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";
import "./index.scss";
declare const _default: React.ComponentType<Omit<{
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
export default _default;
