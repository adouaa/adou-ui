import React from "react";
import "./index.scss";
interface TooltipProps {
    left?: any;
    right?: any;
    top?: any;
    bottom?: any;
    wrap?: boolean;
    width?: any;
    arrowOffsetPercent?: number;
    wrapperFlex?: boolean;
    mustShow?: boolean;
    show?: boolean;
    text: any;
    position?: "top" | "bottom" | "left" | "right" | "top-left" | "top-right" | "bottom-left" | "bottom-right" | "left-top" | "left-bottom" | "right-bottom" | "right-top";
    children: React.ReactNode;
    tooltipBgc?: string;
    tooltipFontColor?: string;
    arrowBorderColor?: string;
    wrapperClassname?: string;
}
declare const Tooltip: React.FC<TooltipProps>;
export default Tooltip;
