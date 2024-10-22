import React, { useRef, useState, useEffect } from 'react';
import './index.scss'; // 自定义样式

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

const ResizableSidebar = ({
    contentOverflow = true,
    contentFlex = true,
    initialWidth = 0,
    initialHeight = '500px',
    minDragWidth = 0,
    minWidth = 0,
    maxWidth = '300px',
    children,
}: ResizableSidebarProps) => {
    const sidebarRef = useRef<any>(null);
    const [isResizing, setIsResizing] = useState(false);
    const [currentSidebarWidth, setCurrentSidebarWidth] = useState<any>('0'); // 最新宽度
    const [initialSideBarWidth, setInitialSideBarWidth] = useState<number>(0); // 记录初始宽度
    const [initialSiderBarHeight, setInitialSiderBarHeight] = useState<any>(initialHeight);
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const resizeableContainerRef = useRef<any>();
    const siderBarRef = useRef<any>();

    useEffect(() => {
        const handleMouseMove = (event: any) => {
            if (!isResizing) return;

            setCurrentSidebarWidth(event.clientX - sidebarRef.current.getBoundingClientRect().left);
        };

        const handleMouseUp = () => {
            setIsResizing(false);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isResizing]);

    const startResizing = () => {
        setIsResizing(true);
    };

    const toggleSidebar = () => {
        console.log('currentSidebarWidth: ', currentSidebarWidth > minWidth ? 0 : parseFloat(maxWidth));
        setCurrentSidebarWidth(parseFloat(currentSidebarWidth) > minWidth ? 0 : maxWidth); // 假设展开宽度为300
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
    };

    const handleDragStart = () => {
        // [_initialSideBarWidth, setInitialSideBarWidth]好像目前没用。。
        const _initialSideBarWidth = resizeableContainerRef.current.offsetWidth;
        setInitialSideBarWidth(_initialSideBarWidth);
    };

    const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();

        const rect = resizeableContainerRef.current.getBoundingClientRect();
        const calcWidth = e.clientX - rect.left; // 计算当前鼠标的位置和元素距离浏览器左边位置的差来做新宽度
        if (calcWidth > parseFloat(maxWidth)) {
            setCurrentSidebarWidth(maxWidth);
        } else {
            setCurrentSidebarWidth(calcWidth + 'px');
        }
    };

    const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
        const rect = resizeableContainerRef.current.getBoundingClientRect();
        const calcWidth = e.clientX - rect.left; // 计算当前鼠标的位置和元素距离浏览器左边位置的差来做新宽度
        e.preventDefault();
        if (calcWidth > parseFloat(maxWidth)) {
            setCurrentSidebarWidth(maxWidth);
        } else {
            setCurrentSidebarWidth(calcWidth + 'px');
        }
        setIsDragging(false);
    };

    const getContentWidth = () => {
        const content = resizeableContainerRef.current.querySelector('.content');
        return content.offsetWidth;
    };

    useEffect(() => {
        // 延迟执行，因为父元素的内容可能是异步去获取的
        setTimeout(() => {
            setInitialSiderBarHeight(resizeableContainerRef.current?.parentElement?.offsetHeight);
        }, 1200);
    }, [resizeableContainerRef.current]);

    // 为第一次出现添加动画效果
    useEffect(() => {
        setTimeout(() => {
            setCurrentSidebarWidth(initialWidth ? (parseFloat(initialWidth!) > parseFloat(maxWidth) ? maxWidth : initialWidth) : 0);
        }, 100);
    }, []);

    return (
        <>
            <div
                ref={resizeableContainerRef}
                className={`pb-1 resizable-sidebar pe-1 ${isDragging ? 'draging' : ''}`}
                style={{
                    width: `${currentSidebarWidth}`,
                    height: initialHeight || initialSiderBarHeight + 'px' || 0,
                    paddingLeft: '5px',
                    // overflow: currentSidebarWidth === maxWidth ? "auto" : "hidden",
                }}
            >
                <div
                    className="content"
                    style={{
                        display: contentFlex ? 'flex' : '',
                        overflow: contentOverflow ? 'auto' : '',
                    }}
                >
                    {children}
                </div>
                {/* 滚动条 */}
                <div
                    ref={siderBarRef}
                    draggable={true}
                    style={{ opacity: 0, right: isDragging ? '-5px' : '-2px' }}
                    className={`resize-handle-bar`}
                    onMouseUp={handleDragEnd}
                    onMouseDown={handleMouseDown}
                    onDrag={handleDrag}
                    onDragEnd={handleDragEnd}
                    onDragStart={handleDragStart}
                ></div>
                {initialHeight > 0 || initialSiderBarHeight > 0 ? (
                    <div className="toggle-btn" onClick={toggleSidebar}>
                        <i className={`fa-solid text-white ${currentSidebarWidth <= minWidth ? 'fa-angles-right' : 'fa-angles-left'}`}></i>
                    </div>
                ) : (
                    ''
                )}
            </div>
        </>
    );
};

export default ResizableSidebar;
