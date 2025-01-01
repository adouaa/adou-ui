import React from "react";
import "./index.scss";
interface PopoverProps {
    title?: any;
    trigger?: "click" | "hover";
    ref?: any;
    show?: boolean;
    content: any;
    position?: "top" | "bottom" | "left" | "right";
    children: React.ReactNode;
    bgc?: string;
    color?: string;
    borderColor?: string;
    wrapperClassname?: string;
    onClose?: () => void;
    onShowChange?: (show: boolean) => void;
}
declare const Popover: React.FC<PopoverProps>;
export default Popover;
