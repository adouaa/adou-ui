import React from "react";
import "./index.scss";
interface ResizableSidebarProps {
    toggleBtnStyle?: React.CSSProperties;
    toggleBtnClassName?: string;
    contentOverflow?: boolean;
    contentFlex?: boolean;
    initialWidth?: any;
    initialHeight?: any;
    minDragWidth?: number;
    minWidth?: number;
    maxWidth?: any;
    children?: any;
}
declare const ResizableSidebar: ({ toggleBtnStyle, toggleBtnClassName, contentOverflow, contentFlex, initialWidth, initialHeight, minDragWidth, minWidth, maxWidth, children, }: ResizableSidebarProps) => React.JSX.Element;
export default ResizableSidebar;
