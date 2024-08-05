import React from 'react';
import './index.scss';
interface ResizableSidebarProps {
    minWidth?: number;
    maxWidth?: number;
    children?: any;
}
declare const ResizableSidebar: ({ minWidth, maxWidth, children }: ResizableSidebarProps) => React.JSX.Element;
export default ResizableSidebar;
