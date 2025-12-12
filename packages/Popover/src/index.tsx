import React, {
  useState,
  useRef,
  useEffect,
  useImperativeHandle,
  forwardRef,
  Fragment,
} from "react";
import "./index.scss"; // 引入样式文件
import { getAbsolutePosition, useClickOutside } from "adou-ui/Utils";
import ReactDOM from "react-dom";

interface PopoverProps {
  ref?: any;
  show?: boolean;
  content: any;
  position?: "top" | "bottom" | "left" | "right";
  children: React.ReactNode;
  bgc?: string;
  color?: string;
  borderColor?: string;
  wrapperClassname?: string;
  onClose?: () => void;
}

const Popover: React.FC<PopoverProps> = forwardRef(
  (
    {
      show = true,
      content,
      position = "top",
      children,
      bgc,
      color,
      borderColor,
      wrapperClassname,
      onClose,
    },
    ref
  ) => {
    const [isShow, setIsShow] = useState<boolean>(false);
    const [customSelectContentPosition, setCustomSelectContentPosition] =
      useState<any>({});
    const [containerHeight, setContainerHeight] = useState<string>("");

    const childrenRef = useRef<any>(null);
    const contentRef = useRef<any>(null);

    const isShowAllowedByProp = useRef<boolean>(show);
    isShowAllowedByProp.current = show;

    const [isVisible, setIsVisible] = useState(false);
    const popoverRef = useRef<HTMLDivElement>(null);
    const isEnterPopoverRef = useRef<boolean>(false);
    const enterTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const calcContentPosition = () => {
      if (!childrenRef.current) return;
      const position = getAbsolutePosition(childrenRef.current, 0, 0);
      if (popoverRef.current) {
        position.y = position.y - popoverRef.current.clientHeight - 12;
      }
      setCustomSelectContentPosition(position);
    };

    const handleTriggerClick = () => {
      if (isVisible) return;
      if (enterTimeoutRef.current) {
        clearTimeout(enterTimeoutRef.current);
      }

      calcContentPosition(); // Calculate position on each click

      enterTimeoutRef.current = setTimeout(() => {
        if (!isShowAllowedByProp.current) return;
        setIsShow(true);
        setTimeout(() => {
          setIsVisible(true);
        }, 50);
      }, 200);
    };

    const handleClosePopover = () => {
      // CRITICAL FIX: Clear any pending "show" action.
      if (enterTimeoutRef.current) {
        clearTimeout(enterTimeoutRef.current);
      }
      isEnterPopoverRef.current = false;

      // 这边加个定时器，让 动画消失的慢一点--注意：要比下面的 setIsShow 定时器的时间少一点
      setTimeout(() => {
        setIsVisible(false);
      }, 100);

      setTimeout(() => {
        setIsShow(false);
        if (onClose) {
          onClose();
        }
        console.log("关闭: ");
      }, 300); // Wait for transition to finish
    };

    const handleClick = (e: React.MouseEvent) => {
      e.stopPropagation();
    };

    const handleMouseEnterPopover = () => {
      isEnterPopoverRef.current = true;
      setIsVisible(true);
      setTimeout(() => {
        setIsShow(true);
      }, 400);
    };

    useClickOutside([childrenRef, popoverRef], handleClosePopover, isShow);

    useImperativeHandle(ref, () => ({
      handleClose: handleClosePopover,
    }));

    useEffect(() => {
      isShowAllowedByProp.current = show;
      if (!show && isShow) {
        handleClosePopover();
      }
    }, [show, isShow]);

    useEffect(() => {
      if (isShow) {
        // Recalculate position and height once it's rendered.
        calcContentPosition();
        setTimeout(() => {
          if (contentRef.current) {
            setContainerHeight(`${contentRef.current.clientHeight + 22}px`);
          }
        }, 10);
      }
    }, [isShow, content]);

    useEffect(() => {
      console.log("isShow: ", isShow);
    }, [isShow]);

    return (
      <Fragment>
        <div
          ref={childrenRef}
          className={`adou-popover-trigger`}
          onClick={handleTriggerClick}
        >
          {children}
        </div>
        {content &&
          isShow &&
          ReactDOM.createPortal(
            <div
              ref={popoverRef}
              onClick={handleClick}
              onMouseEnter={handleMouseEnterPopover}
              className={`adou-popover ${
                isVisible ? "show-tool-tip" : ""
              } adou-popover-${position} ${wrapperClassname || ""}`}
              style={{
                position: "absolute",
                top: customSelectContentPosition.y + "px",
                left: customSelectContentPosition.x + "px",
                backgroundColor: bgc,
                color: color,
                borderColor: borderColor,
                padding: "8px",
                zIndex: 2,
                height: containerHeight,
              }}
            >
              <div
                style={{
                  borderColor: `${borderColor} transparent transparent transparent`,
                }}
                className={`adou-popover-arrow adou-popover-arrow-${position}`}
              ></div>
              <div className="adou-popover-content" ref={contentRef}>
                {content}
              </div>
              <i onClick={handleClosePopover} className="close-icon fa-regular fa-circle-xmark hover-scale"></i>
            </div>,
            document.body
          )}
      </Fragment>
    );
  }
);

export default Popover;
