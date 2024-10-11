import React from "react";
import "./index.scss";
interface ResizableSidebarProps {
    contentFlex?: boolean;
    initialWidth?: number;
    initialHeight?: any;
    minDragWidth?: number;
    minWidth?: number;
    maxWidth?: any;
    children?: any;
}
declare const ResizableSidebar: ({ contentFlex, initialWidth, initialHeight, minDragWidth, minWidth, maxWidth, children, }: ResizableSidebarProps) => React.JSX.Element;
export default ResizableSidebar;
