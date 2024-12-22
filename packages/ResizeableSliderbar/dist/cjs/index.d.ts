import React from "react";
import "./index.scss";
interface ResizableSidebarProps {
    wrapperClsassName?: string;
    wrapperStyle?: React.CSSProperties;
    showTggleBtnWhenNotExpanded?: boolean;
    resizeableSliderbarRef?: any;
    showToggleBtn?: boolean;
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
    onToggle?: (isExpanded: boolean) => void;
}
declare const ResizableSidebar: ({ wrapperClsassName, wrapperStyle, showTggleBtnWhenNotExpanded, resizeableSliderbarRef, showToggleBtn, toggleBtnStyle, toggleBtnClassName, contentOverflow, contentFlex, initialWidth, initialHeight, minDragWidth, minWidth, maxWidth, children, onToggle, }: ResizableSidebarProps) => React.JSX.Element;
export default ResizableSidebar;
