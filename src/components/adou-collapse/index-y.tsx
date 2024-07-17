import React, { useState, useRef, useEffect } from 'react';
import './index.scss';

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef: any = useRef(null);

  // 动态更新maxHeight
  useEffect(() => {
    if (isOpen && contentRef.current) {
      contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
    } else if (contentRef.current) {
      contentRef.current.style.maxHeight = '0px';
    }
  }, [isOpen, contentRef]);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse-container">
      <div className="collapse-header" onClick={toggleCollapse}>
        {title}
      </div>
      <div
        className="collapse-content"
        ref={contentRef}
        style={{
          opacity: isOpen ? 1 : 0,
          overflow: 'hidden',
          transition: 'max-height 0.5s ease, opacity 0.5s ease'
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Collapse;
