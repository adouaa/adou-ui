import React, { useState, useRef, useEffect } from "react";
import "./index.scss"; // 引入样式文件

interface TooltipProps {
  flex?: boolean;
  mustShow?: boolean; // 用来支持Slider的鼠标不在RunWay上面的时候也会展示提示
  show?: boolean;
  text: string;
  position?: "top" | "bottom" | "left" | "right";
  children: React.ReactNode;
  bgc?: string;
  color?: string;
  borderColor?: string;
  wrapperClassname?: string;
}

const Tooltip: React.FC<TooltipProps> = ({
  flex,
  mustShow,
  show = true,
  text,
  position = "top",
  children,
  bgc,
  color,
  borderColor,
  wrapperClassname,
}) => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState(false); // 用来实现当鼠标进入提示区域可以让提示存在的效果
  const tooltipRef = useRef<HTMLDivElement>(null);
  // ！！！用来记录鼠标是否进入提示区域
  //       当鼠标离开内容区域的时候，去判断是否进入了提示区域，如果进入，则不隐藏提示文字
  const isEnterTooltipRef = useRef<boolean>(false);
  const enterTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    // 进入的时候，如果存在定时器，也清除掉
    if (enterTimeoutRef.current) {
      clearTimeout(enterTimeoutRef.current);
    }
    enterTimeoutRef.current = setTimeout(() => {
      setIsShow(true);
      setTimeout(() => {
        setIsVisible(true);
      }, 50);
    }, 200); // 延迟100毫秒
  };

  const handleMouseLeave = () => {
    if (mustShow) return;
    if (enterTimeoutRef.current) {
      clearTimeout(enterTimeoutRef.current);
    }
    setTimeout(() => {
      if (!isEnterTooltipRef.current) {
        setIsVisible(false);
      }
    }, 200);
    setTimeout(() => {
      if (!isEnterTooltipRef.current) {
        setIsShow(false);
      }
    }, 300);
  };

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // 阻止事件的冒泡
  };

  /**
   * 用来实现当鼠标进入提示区域可以让提示存在的效果
   */
  const handleMouseEnterTooltip = () => {
    isEnterTooltipRef.current = true;
    // 如果当前是显示状态才能设置isVisible为true，不然鼠标移到提示区域也会展示
    setIsVisible(true);
    setTimeout(() => {
      setIsShow(true);
    }, 400);
  };

  const handleMouseLeaveTooltip = () => {
    if (mustShow) return;
    isEnterTooltipRef.current = false;
    setTimeout(() => {
      setIsVisible(false);
    }, 200);
    setTimeout(() => {
      setIsShow(false);
    }, 300);
  };

  useEffect(() => {
    if (mustShow) {
      console.log("if: ", mustShow);
      handleMouseEnter();
    } else {
      console.log("else: ", mustShow);

      handleMouseLeave();
    }
  }, [mustShow]);

  return (
    <div
      className={`adou-tooltip-wrapper ${wrapperClassname || ""}`}
      style={{ ...(flex ? { flex: 1 } : {}) }}
    >
      <div
        className="content"
        ref={tooltipRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>
      {text && show && isShow && (
        <div
          onClick={handleClick}
          onMouseEnter={handleMouseEnterTooltip}
          onMouseLeave={handleMouseLeaveTooltip}
          className={`adou-tooltip ${
            isVisible ? "show-tool-tip" : ""
          } adou-tooltip-${position}`}
          style={{ backgroundColor: bgc, color: color }}
        >
          <div
            style={{
              borderColor: `transparent transparent ${borderColor} transparent`,
            }}
            className={`adou-tooltip-arrow adou-tooltip-arrow-${position}`}
          ></div>
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
