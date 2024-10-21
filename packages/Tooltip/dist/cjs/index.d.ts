import React from "react";
import "./index.scss";
interface TooltipProps {
    flex?: boolean;
    mustShow?: boolean;
    show?: boolean;
    text: string;
    position?: "top" | "bottom" | "left" | "right";
    children: React.ReactNode;
    bgc?: string;
    color?: string;
    borderColor?: string;
    wrapperClassname?: string;
}
declare const Tooltip: React.FC<TooltipProps>;
export default Tooltip;
