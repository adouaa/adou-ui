import React, { useRef, useState, useEffect } from 'react';
import './index.scss'; // 自定义样式

const ResizableSidebar = ({ children }) => {
  const sidebarRef = useRef<any>(null);
  const [isResizing, setIsResizing] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(400); // 初始宽度

  useEffect(() => {
    const handleMouseMove = (event: any) => {
      if (!isResizing) return;
      console.log(event.clientX);
      console.log(sidebarRef.current.getBoundingClientRect().left);
      console.log(event.clientX - sidebarRef.current.getBoundingClientRect().left);
      
      setSidebarWidth(event.clientX - sidebarRef.current.getBoundingClientRect().left);
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
    setSidebarWidth(sidebarWidth === 200 ? 300 : 200); // 假设展开宽度为300
  };

  const handleClick = () => {
    console.log("-----------");
    
  }

  return (
    <div
      ref={sidebarRef}
      className="resizable-sidebar"
      style={{ width: `${sidebarWidth}px` }}
    >
      <button className="btn btn-link" onClick={toggleSidebar}>
        {sidebarWidth === 200 ? 'Expand' : 'Collapse'}
      </button>
      {children}
      {/* 滚动条 */}
      <div className="resize-handle" onMouseDown={startResizing}></div>
    </div>
  );
};

export default ResizableSidebar;
