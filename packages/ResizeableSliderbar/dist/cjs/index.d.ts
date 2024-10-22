import React from "react";
import "./index.scss";
interface ResizableSidebarProps {
    contentOverflow?: boolean;
    contentFlex?: boolean;
    initialWidth?: any;
    initialHeight?: any;
    minDragWidth?: number;
    minWidth?: number;
    maxWidth?: any;
    children?: any;
}
declare const ResizableSidebar: ({ contentOverflow, contentFlex, initialWidth, initialHeight, minDragWidth, minWidth, maxWidth, children, }: ResizableSidebarProps) => React.JSX.Element;
export default ResizableSidebar;
