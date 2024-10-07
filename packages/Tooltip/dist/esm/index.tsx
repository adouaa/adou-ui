import React, { useState, useRef, useEffect } from 'react';
import './index.scss'; // 引入样式文件

interface TooltipProps {
    text: string;
    position?: 'top' | 'bottom' | 'left' | 'right';
    children: React.ReactNode;
    bgc?: string;
    color?: string;
    borderColor?: string;
}

const Tooltip: React.FC<TooltipProps> = ({ text, position = 'top', children, bgc, color, borderColor }) => {
    const [show, setShow] = useState<boolean>(false);
    const [isVisible, setIsVisible] = useState(false); // 用来实现当鼠标进入提示区域可以让提示存在的效果
    const tooltipRef = useRef<HTMLDivElement>(null);

    const handleMouseEnter = () => {
        setTimeout(() => {
            setShow(true);
        }, 50);
    };

    const handleMouseLeave = () => {
        setTimeout(() => {
            setShow(false);
        }, 200);
    };

    /**
     * 用来实现当鼠标进入提示区域可以让提示存在的效果
     */
    const handleMouseEnterTooltip = () => {
        // 如果当前是显示状态才能设置isVisible为true，不然鼠标移到提示区域也会展示
        if (show) {
            setIsVisible(true);
        }
    };

    const handleMouseLeaveTooltip = () => {
        setIsVisible(false);
    };

    return (
        <div className="adou-tooltip-wrapper">
            {String(show)}-{String(isVisible)}
            <div className="content" ref={tooltipRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                {children}
            </div>
            {
                <div
                    onMouseEnter={handleMouseEnterTooltip}
                    onMouseLeave={handleMouseLeaveTooltip}
                    className={`adou-tooltip ${show || isVisible ? 'show-tool-tip' : ''} adou-tooltip-${position}`}
                    style={{ backgroundColor: bgc, color: color }}
                >
                    <div style={{ borderColor: `transparent transparent ${borderColor} transparent` }} className={`adou-tooltip-arrow adou-tooltip-arrow-${position}`}></div>
                    {text}
                </div>
            }
        </div>
    );
};

export default Tooltip;
