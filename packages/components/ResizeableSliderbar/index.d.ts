import React from "react";
import "./index.scss";
interface ResizableSidebarProps {
    draggable?: boolean;
    wrapperClsassName?: string;
    wrapperStyle?: React.CSSProperties;
    showTggleBtnWhenNotExpanded?: boolean;
    resizeableSliderbarRef?: any;
    showToggleBtn?: boolean;
    toggleBtnStyle?: React.CSSProperties;
    toggleBtnClassName?: string;
    contentOverflow?: boolean;
    contentFlex?: boolean;
    initialWidth?: number | string;
    initialHeight?: any;
    minDragWidth?: number;
    minWidth?: number;
    maxWidth?: string;
    children?: any;
    onToggle?: (isExpanded: boolean) => void;
}
declare const ResizableSidebar: ({ draggable, wrapperClsassName, wrapperStyle, showTggleBtnWhenNotExpanded, resizeableSliderbarRef, showToggleBtn, toggleBtnStyle, toggleBtnClassName, contentOverflow, contentFlex, initialWidth, initialHeight, minDragWidth, minWidth, maxWidth, children, onToggle, }: ResizableSidebarProps) => React.JSX.Element;
export default ResizableSidebar;
