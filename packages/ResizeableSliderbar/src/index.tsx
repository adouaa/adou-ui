import React, { useRef, useState, useEffect } from 'react';
import './index.scss'; // 自定义样式

interface ResizableSidebarProps {
    minWidth?: number;
    maxWidth?: number;
    children?: any;
}

const ResizableSidebar = ({ minWidth = 280, maxWidth = 500, children }: ResizableSidebarProps) => {
    const sidebarRef = useRef<any>(null);
    const [isResizing, setIsResizing] = useState(false);
    const [currentSidebarWidth, setCurrentSidebarWidth] = useState(320); // 最新宽度
    const [initialSideBarWidth, setInitialSideBarWidth] = useState<number>(0); // 记录初始宽度
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const resizeableContainerRef = useRef<any>();
    const siderBarRef = useRef<any>();

    useEffect(() => {
        const handleMouseMove = (event: any) => {
            if (!isResizing) return;
            console.log(event.clientX);
            console.log(sidebarRef.current.getBoundingClientRect().left);
            console.log(event.clientX - sidebarRef.current.getBoundingClientRect().left);

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
        console.log(currentSidebarWidth);

        setCurrentSidebarWidth(currentSidebarWidth === 320 ? 500 : 320); // 假设展开宽度为300
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
        if (e.clientX >= maxWidth) {
            setCurrentSidebarWidth(maxWidth);
        } else if (e.clientX <= minWidth) {
            setCurrentSidebarWidth(minWidth);
        } else {
            setCurrentSidebarWidth(e.clientX);
        }
    };

    const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
        if (e.clientX >= maxWidth) {
            setCurrentSidebarWidth(maxWidth);
        } else if (e.clientX <= minWidth) {
            setCurrentSidebarWidth(minWidth);
        } else {
            setCurrentSidebarWidth(e.clientX);
        }
        setIsDragging(false);
    };

    const getContentWidth = () => {
        const content = resizeableContainerRef.current.querySelector('.content');
        return content.offsetWidth;
    };

    return (
        <>
            <div ref={resizeableContainerRef} className={`resizable-sidebar ${isDragging ? 'draging' : ''}`} style={{ width: `${currentSidebarWidth || 320}px` }}>
                <div className="content">{children}</div>
                {/* 滚动条 */}
                <div
                    ref={siderBarRef}
                    draggable={true}
                    style={{ opacity: 0, right: isDragging ? '-5px' : '-2px' }}
                    className={`resize-handle`}
                    onMouseUp={handleDragEnd}
                    onMouseDown={handleMouseDown}
                    onDrag={handleDrag}
                    onDragEnd={handleDragEnd}
                    onDragStart={handleDragStart}
                ></div>
            </div>
        </>
    );
};

export default ResizableSidebar;
