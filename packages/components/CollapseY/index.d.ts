import React from "react";
import "./index.scss";
interface CollapseYProps {
    wrapperClassName?: string;
    controlRightIcon?: string;
    controlClassName?: string;
    showBorder?: boolean;
    single?: boolean;
    hover?: boolean;
    controlContent?: any;
    children?: any;
    showContent?: boolean;
    onClick?: () => void;
}
declare const CollapseY: ({ wrapperClassName, controlRightIcon, controlClassName, showBorder, single, hover, controlContent, children, onClick, showContent, }: CollapseYProps) => React.JSX.Element;
export default CollapseY;
