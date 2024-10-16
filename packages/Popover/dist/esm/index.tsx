import React, {
  useState,
  useRef,
  useEffect,
  useImperativeHandle,
  forwardRef,
} from "react";
import "./index.scss"; // 引入样式文件
import useClickOutside from "./utils/useClickOutside";

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

    // 用来实现外部传来的show参与到控制是否展示的逻辑中来(偏业务逻辑了)
    //  不能用 isShow是因为 isShow是异步的。。
    const isShowRef = useRef<boolean>(show);

    const [isVisible, setIsVisible] = useState(false); // 用来实现当鼠标进入提示区域可以让提示存在的效果
    const popoverRef = useRef<HTMLDivElement>(null);
    // ！！！用来记录鼠标是否进入提示区域
    //       当鼠标离开内容区域的时候，去判断是否进入了提示区域，如果进入，则不隐藏提示文字
    const isEnterPopoverRef = useRef<boolean>(false);
    const enterTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handleContentClick = () => {
      if (isVisible) return; // 防止此时Popover已经展示，再点击关闭后会立马又展示
      // 进入的时候，如果存在定时器，也清除掉
      if (enterTimeoutRef.current) {
        clearTimeout(enterTimeoutRef.current);
      }
      enterTimeoutRef.current = setTimeout(() => {
        if (!isShowRef.current) return; // 如果外边的不想展示，则在这里return，不继续执行展示逻辑
        setIsShow(true);
        setTimeout(() => {
          setIsVisible(true);
        }, 50);
      }, 200); // 延迟100毫秒
    };

    const handleMouseLeave = () => {
      if (enterTimeoutRef.current) {
        clearTimeout(enterTimeoutRef.current);
      }
      setTimeout(() => {
        if (!isEnterPopoverRef.current) {
          setIsVisible(false);
        }
      }, 200);
      setTimeout(() => {
        if (!isEnterPopoverRef.current) {
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
    const handleMouseEnterPopover = () => {
      isEnterPopoverRef.current = true;
      // 如果当前是显示状态才能设置isVisible为true，不然鼠标移到提示区域也会展示
      setIsVisible(true);
      setTimeout(() => {
        setIsShow(true);
      }, 400);
    };

    const handleClosePopover = () => {
      isEnterPopoverRef.current = false;
      setTimeout(() => {
        setIsVisible(false);
      }, 200);
      setTimeout(() => {
        setIsShow(false);
        onClose && onClose();
      }, 300);
    };

    useClickOutside(
      [popoverRef],
      handleClosePopover,
      isVisible && isShow && Boolean(popoverRef.current),
      {
        isVisible,
        isShow,
        show,
        ref: Boolean(popoverRef.current),
      }
    );

    useImperativeHandle(ref, () => ({
      handleClose: handleClosePopover,
    }));

    useEffect(() => {
      isShowRef.current = show;
    }, [show]);

    return (
      <div className={`adou-popover-wrapper ${wrapperClassname || ""}`}>
        <div
          className="content"
          onClick={handleContentClick}
          // onMouseLeave={handleMouseLeave}
        >
          {children}
        </div>
        {content && isShow && (
          <div
            ref={popoverRef}
            onClick={handleClick}
            onMouseEnter={handleMouseEnterPopover}
            // onMouseLeave={handleClosePopover}
            className={`adou-popover ${
              isVisible ? "show-tool-tip" : ""
            } adou-popover-${position}`}
            style={{ backgroundColor: bgc, color: color }}
          >
            <div
              style={{
                borderColor: `transparent transparent ${borderColor} transparent`,
              }}
              className={`adou-popover-arrow adou-popover-arrow-${position}`}
            ></div>
            {content}
          </div>
        )}
      </div>
    );
  }
);
export default Popover;
