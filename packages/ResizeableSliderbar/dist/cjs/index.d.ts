import React from "react";
import "./index.scss";
interface ResizableSidebarProps {
    wrapperClsassName?: string;
    wrapperStyle?: React.CSSProperties;
    showTggleBtnWhenNotExpanded?: boolean;
    actRef?: any;
    showToggleBtn?: boolean;
    toggleBtnStyle?: React.CSSProperties;
    toggleBtnClassName?: string;
    contentOverflow?: boolean;
    contentFlex?: boolean;
    initialWidth?: string;
    initialHeight?: any;
    minDragWidth?: number;
    minWidth?: number;
    maxWidth?: string;
    children?: any;
    onToggle?: (isExpanded: boolean) => void;
}
declare const ResizableSidebar: ({ wrapperClsassName, wrapperStyle, showTggleBtnWhenNotExpanded, actRef, showToggleBtn, toggleBtnStyle, toggleBtnClassName, contentOverflow, contentFlex, initialWidth, initialHeight, minWidth, maxWidth, children, onToggle, }: ResizableSidebarProps) => React.JSX.Element;
export default ResizableSidebar;
