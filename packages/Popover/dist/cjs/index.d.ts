import React from "react";
import "./index.scss";
interface PopoverProps {
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
}
declare const Popover: React.FC<PopoverProps>;
export default Popover;
