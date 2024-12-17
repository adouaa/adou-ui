import React, { useRef, useState, useEffect } from "react";
import "./index.scss"; // 自定义样式

interface ResizableSidebarProps {
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
}

const ResizableSidebar = ({
  toggleBtnStyle,
  toggleBtnClassName,
  contentOverflow = true,
  contentFlex = false,
  initialWidth = 0,
  initialHeight = "100%",
  minDragWidth = 0,
  minWidth = 50,
  maxWidth = "300px",
  children,
}: ResizableSidebarProps) => {
  const sidebarRef = useRef<any>(null);
  const [isResizing, setIsResizing] = useState(false);
  const [currentSidebarWidth, setCurrentSidebarWidth] = useState<any>("0"); // 最新宽度
  const [initialSideBarWidth, setInitialSideBarWidth] = useState<number>(0); // 记录初始宽度
  const [initialSiderBarHeight, setInitialSiderBarHeight] =
    useState<any>(initialHeight);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const resizeableContainerRef = useRef<any>();
  const siderBarRef = useRef<any>();
  const toggleBtnRef = useRef<any>(null);

  useEffect(() => {
    const handleMouseMove = (event: any) => {
      if (!isResizing) return;

      setCurrentSidebarWidth(
        event.clientX - sidebarRef.current.getBoundingClientRect().left
      );
    };

    const handleMouseUp = () => {
      setIsResizing(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isResizing]);

  const startResizing = () => {
    setIsResizing(true);
  };

  const toggleSidebar = () => {
    setCurrentSidebarWidth(
      parseFloat(currentSidebarWidth) > minWidth
        ? minWidth + "px"
        : initialWidth || maxWidth
    ); // 假设展开宽度为300
    setIsExpanded((prev: boolean) => !prev);
  };

  const handleSliderBarMouseDown = (e: React.MouseEvent) => {
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
      setCurrentSidebarWidth(calcWidth + "px");
    }
  };

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    const rect = resizeableContainerRef.current.getBoundingClientRect();
    const calcWidth = e.clientX - rect.left; // 计算当前鼠标的位置和元素距离浏览器左边位置的差来做新宽度
    e.preventDefault();
    if (calcWidth > parseFloat(maxWidth)) {
      setCurrentSidebarWidth(maxWidth);
    } else {
      setCurrentSidebarWidth(calcWidth + "px");
    }
    setIsDragging(false);
  };

  const getContentWidth = () => {
    const content = resizeableContainerRef.current.querySelector(".content");
    return content.offsetWidth;
  };

  useEffect(() => {
    if (initialWidth) {
      setIsExpanded(true);
    }
  }, [initialWidth]);

  useEffect(() => {
    // 延迟执行，因为父元素的内容可能是异步去获取的
    setTimeout(() => {
      setInitialSiderBarHeight(
        resizeableContainerRef.current?.parentElement?.offsetHeight
      );
    }, 1200);
  }, [resizeableContainerRef.current]);

  // 为第一次出现添加动画效果
  useEffect(() => {
    setTimeout(() => {
      setCurrentSidebarWidth(
        initialWidth
          ? parseFloat(initialWidth!) > parseFloat(maxWidth)
            ? maxWidth
            : initialWidth
          : 0
      );
    }, 100);
  }, []);

  return (
    <>
      <div
        ref={resizeableContainerRef}
        className={`pb-1 resizable-sidebar pe-1 ${isDragging ? "draging" : ""}`}
        style={{
          width: `${currentSidebarWidth}`,
          height: initialHeight || initialSiderBarHeight + "px" || 0,
          paddingLeft: "5px",
          // overflow: currentSidebarWidth === maxWidth ? "auto" : "hidden",
        }}
      >
        <div
          className="content"
          style={{
            display: contentFlex ? "flex" : "",
            overflow: contentOverflow ? "auto" : "",
          }}
        >
          {children}
        </div>
        {/* 滚动条 */}
        <div
          ref={siderBarRef}
          draggable={true}
          style={{ opacity: 0, right: isDragging ? "-5px" : "-2px" }}
          className={`resize-handle-bar`}
          onMouseUp={handleDragEnd}
          onMouseDown={handleSliderBarMouseDown}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          onDragStart={handleDragStart}
        ></div>
        {initialHeight > 0 || initialSiderBarHeight > 0 ? (
          <div
            ref={toggleBtnRef}
            className={`toggle-btn ${toggleBtnClassName}`}
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
              className={`fa-solid text-white ${
                parseFloat(currentSidebarWidth) <= minWidth
                  ? "fa-angles-right"
                  : "fa-angles-left"
              }`}
            ></i>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default ResizableSidebar;
