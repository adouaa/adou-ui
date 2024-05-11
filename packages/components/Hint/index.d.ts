import "./index.scss";
import React from 'react';
interface Text {
    value: string;
    highlight?: boolean;
    textColor?: string;
    textBgcolor?: string;
}
interface HintContent {
    text: Text[];
}
interface HintItem {
    title: string;
    content: HintContent[];
}
declare const _default: React.ComponentType<Omit<{
    hintContent: HintItem[];
    bgc?: string | undefined;
    color?: string | undefined;
}, keyof import("react-i18next").WithTranslation<N, undefined>> & import("react-i18next").WithTranslationProps>;
export default _default;
