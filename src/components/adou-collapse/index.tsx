import React, { useState, useRef } from 'react';
import './index.scss';

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef: any = useRef(null);

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
        style={{
          maxWidth: isOpen ? `${contentRef.current.scrollWidth}px` : '0px',
          // maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : '0px',
          opacity: isOpen ? 1 : 0
        }}
        ref={contentRef}
      >
        {children}
      </div>
    </div>
  );
};

export default Collapse;
