import React from 'react';
import './index.scss';
interface TooltipProps {
    text: string;
    position?: 'top' | 'bottom' | 'left' | 'right';
    children: React.ReactNode;
    bgc?: string;
    color?: string;
    borderColor?: string;
}
declare const Tooltip: React.FC<TooltipProps>;
export default Tooltip;
