import React, { useRef, useState, useEffect, useImperativeHandle } from 'react';
import './index.scss'; // 自定义样式

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
    initialWidth?: number | string;
    initialHeight?: any;
    minDragWidth?: number;
    minWidth?: number;
    maxWidth?: string;
    children?: any;
    onToggle?: (isExpanded: boolean) => void;
}

const ResizableSidebar = ({
    wrapperClsassName,
    wrapperStyle,
    showTggleBtnWhenNotExpanded = true,
    resizeableSliderbarRef,
    showToggleBtn = true,
    toggleBtnStyle,
    toggleBtnClassName,
    contentOverflow = true,
    contentFlex = false,
    initialWidth = '0px',
    initialHeight = '100%',
    minDragWidth = 0,
    minWidth = 50,
    maxWidth = '300px',
    children,
    onToggle,
}: ResizableSidebarProps) => {
    const sidebarRef = useRef<any>(null);
    const [isResizing, setIsResizing] = useState(false);
    const [currentSidebarWidth, setCurrentSidebarWidth] = useState<any>('0'); // 最新宽度
    // const [initialSideBarWidth, setInitialSideBarWidth] = useState<number>(0); // 记录初始宽度
    const [initialSiderBarHeight, setInitialSiderBarHeight] = useState<any>(initialHeight);
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    const [calcMaxWidth, setCalcMaxWidth] = useState<any>(maxWidth);

    const resizeableContainerRef = useRef<any>();
    const siderBarRef = useRef<any>();
    const toggleBtnRef = useRef<any>(null);

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

    const toggleSidebar = () => {
        const currentIsExpanded = parseFloat(currentSidebarWidth) > minWidth; // 记录当前展开状态
        setCurrentSidebarWidth(
            // 这边直接用 minWidth 和 maxWidth 就行
            currentIsExpanded ? minWidth + 'px' : typeof calcMaxWidth === 'string' ? calcMaxWidth : calcMaxWidth + 'px'
        ); // 假设展开宽度为300
        onToggle && onToggle(!isExpanded);
        setIsExpanded(!currentIsExpanded);
    };

    const handleSliderBarMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
    };

    const handleDragStart = () => {
        // [_initialSideBarWidth, setInitialSideBarWidth]好像目前没用。。
    };

    const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();

        const rect = resizeableContainerRef.current.getBoundingClientRect();
        const calcWidth = e.clientX - rect.left; // 计算当前鼠标的位置和元素距离浏览器左边位置的差来做新宽度
        console.log('calcWidth: ', calcWidth);
        console.log('calcMaxWidth: ', calcMaxWidth);
        if (calcWidth > parseFloat(calcMaxWidth)) {
            setCurrentSidebarWidth(calcMaxWidth);
        } else {
            setCurrentSidebarWidth(calcWidth + 'px');
        }
    };

    const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
        const rect = resizeableContainerRef.current.getBoundingClientRect();
        const calcWidth = e.clientX - rect.left; // 计算当前鼠标的位置和元素距离浏览器左边位置的差来做新宽度
        e.preventDefault();
        if (calcWidth > parseFloat(calcMaxWidth)) {
            setCurrentSidebarWidth(calcMaxWidth);
        } else {
            setCurrentSidebarWidth(calcWidth + 'px');
        }
        setIsDragging(false);
        setIsExpanded(!(parseFloat(currentSidebarWidth) > calcMaxWidth));
    };

    useEffect(() => {
        if (typeof initialWidth === 'string' ? parseFloat(initialWidth) > minWidth : initialWidth > minWidth) {
            setIsExpanded(true);
        }
    }, [initialWidth]);

    useEffect(() => {
        // 延迟执行，因为父元素的内容可能是异步去获取的
        setTimeout(() => {
            setInitialSiderBarHeight(resizeableContainerRef.current?.parentElement?.offsetHeight);
        }, 1200);
    }, [resizeableContainerRef.current]);

    // 为第一次出现添加动画效果
    useEffect(() => {
        setTimeout(() => {
            setCurrentSidebarWidth(
                initialWidth
                    ? (typeof initialWidth === 'string'
                          ? parseFloat(initialWidth!) // 将 initialWidth 转换为数字后 再比较
                          : initialWidth) > parseFloat(maxWidth)
                        ? maxWidth
                        : initialWidth
                    : 0
            );
        }, 100);
    }, []);

    useImperativeHandle(
        resizeableSliderbarRef,
        () => ({
            getExpandStatus: () => {
                return isExpanded;
            },
            toggleSidebar,
        }),
        [isExpanded]
    );

    useEffect(() => {
        setTimeout(() => {
            // 判断是否是百分比，如果是，则计算当前容器的宽度
            if (isExpanded && maxWidth.endsWith('%')) {
                setCalcMaxWidth(resizeableContainerRef.current.clientWidth);
            } else {
                // 如果是像素，则直接使用
                setCalcMaxWidth(maxWidth);
            }
        }, 300);
    }, [maxWidth, isExpanded]);

    return (
        <>
            <div
                ref={resizeableContainerRef}
                className={`resizable-sidebar ${isDragging ? 'draging' : ''} ${wrapperClsassName ? wrapperClsassName : ''}`}
                style={{
                    width: `${currentSidebarWidth}`,
                    height: initialHeight || initialSiderBarHeight + 'px' || 0,
                    paddingLeft: '5px',
                    // overflow: currentSidebarWidth === maxWidth ? "auto" : "hidden",
                    ...wrapperStyle,
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
                    onMouseDown={handleSliderBarMouseDown}
                    onDrag={handleDrag}
                    onDragEnd={handleDragEnd}
                    onDragStart={handleDragStart}
                ></div>
                {(isExpanded ? (initialHeight > 0 || initialSiderBarHeight > 0) && showToggleBtn : showTggleBtnWhenNotExpanded) ? (
                    <div
                        ref={toggleBtnRef}
                        className={`toggle-btn d-flex align-items-center justify-content-center hover-scale ${toggleBtnClassName ? toggleBtnClassName : ''}`}
                        onClick={toggleSidebar}
                        style={{
                            ...toggleBtnStyle,
                            /* ...(toggleBtnPosition?.right
                ? {
                    right: isExpanded ? toggleBtnPosition.right : "12px",
                    top: toggleBtnPosition.top,
                  }
                : {}), */
                        }}
                    >
                        <i
                            className={`fa-solid text-white small ${
                                isExpanded ? 'fa-angles-left' : 'fa-angles-right' // 用 isExpanded 来判断按钮是展开还是收起
                            }`}
                        ></i>
                    </div>
                ) : (
                    ''
                )}
            </div>
        </>
    );
};

export default ResizableSidebar;
