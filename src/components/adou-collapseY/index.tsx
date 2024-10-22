import { useState, useEffect, useRef, ReactNode } from "react";
import React from "react";
import "./index.scss";

interface CollapseYProps {
  wrapperClassName?: string;
  controlRightIcon?: string;
  controlClassName?: string;
  showBorder?: boolean;
  single?: boolean;
  hover?: boolean;
  controlContent?: any;
  children?: any;
  showContent?: boolean; // 新增 showContent 属性
  onClick?: () => void; // 新增 onClick 属性
}

const CollapseY = ({
  wrapperClassName,
  controlRightIcon,
  controlClassName,
  showBorder = true,
  single,
  hover,
  controlContent,
  children,
  onClick,
  showContent = false,
}: CollapseYProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(showContent);
  const [isEnter, setIsEnter] = useState<boolean>(false);
  const contentRef = useRef<any>(null);

  const handleShow = () => {
    setIsOpen((pre) => !pre);
    if (onClick) {
      onClick(); // 调用传递的 onClick 函数
    }
  };

  const handleMouseEnter = () => {
    if (hover) {
      handleShow();
    }
    setIsEnter(true);
  };

  const handleMouseLeave = () => {
    setIsEnter(false);
  };

  const calculateContentMaxHeight = () => {
    if (contentRef.current) {
      const contentHeight = contentRef.current.scrollHeight;
      contentRef.current.style.maxHeight = isOpen ? `${contentHeight}px` : "0";
    }
  };

  useEffect(() => {
    if (single) {
      setIsOpen(showContent);
    }
  }, [showContent]);

  useEffect(() => {
    calculateContentMaxHeight();
  }, [isOpen]);

  return (
    <div
      className={`collapseY-wrapper ${wrapperClassName}`}
      style={{ ...(!showBorder ? { border: "none" } : {}) }}
    >
      <div
        className={`control ${controlClassName || ""}`}
        onClick={handleShow}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="control-left">{controlContent}</div>
        <div className="control-right">
          <i
            className={`control-arrow ${
              controlRightIcon || "fa-solid fa-angle-right"
            } ${isOpen ? "active" : ""} ${isEnter ? "enter" : ""}`}
          ></i>
        </div>
      </div>
      <div
        style={{
          maxHeight: "0",
          overflow: "hidden",
          transition: "max-height 0.3s ease-in-out",
        }}
        className="content"
        ref={contentRef}
      >
        {children}
      </div>
    </div>
  );
};

export default CollapseY;
