import React, { useRef, useState, useEffect } from 'react';
import './index.scss'; // 自定义样式

const ResizableSidebar = ({ children }) => {
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
    console.log("down");
    setIsDragging(true);

  }
  
  const handleDragStart = () => {
    // [_initialSideBarWidth, setInitialSideBarWidth]好像目前没用。。
    const _initialSideBarWidth = resizeableContainerRef.current.offsetWidth;
    setInitialSideBarWidth(_initialSideBarWidth)
  }

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setCurrentSidebarWidth(e.clientX);
  }

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    setCurrentSidebarWidth(e.clientX);
    setIsDragging(false);
  }

  return (
    <>
      <h1>isDragging = {isDragging ? 1 : 0}</h1>
      <h1>555555555</h1>
      <h1>555555555</h1>
      <div
        ref={resizeableContainerRef}
        className={`resizable-sidebar ${isDragging ? "draging" : ""}`}
        style={{ width: `${currentSidebarWidth || 320}px` }}
      >
        initialSideBarWidth = {initialSideBarWidth}
        <button className="btn btn-link" onClick={toggleSidebar}>
          {currentSidebarWidth === 320 ? 'Expand' : 'Collapse'}
        </button>
        {children}
        {/* 滚动条 */}
        <div
          ref={siderBarRef}
          draggable={true}
          style={{ opacity: 0, right: isDragging ? "-5px" : "-2px" }}
          className={`resize-handle`}
          onMouseDown={handleMouseDown}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          onDragStart={handleDragStart}
        >
        </div>
      </div>
    </>
  );
};

export default ResizableSidebar;
