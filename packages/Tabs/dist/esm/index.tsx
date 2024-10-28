import React, { useEffect, useRef, useState } from "react";
import { withTranslation } from "react-i18next";

import TabItem from "./TabItem";

export { TabItem };

import "./index.scss";

interface TabsProps {
  extraData?: any;
  showExtraContent?: boolean;
  commonExtraContent?: any;
  children?: any;
  activeIndex?: number;
  activeLabelColor?: string;
  tabStyle?: "common" | "bootstrap";
  contentPadding?: string;
  clearOnChange?: boolean;
  linearGradient?: string;
  onLabelClick?: (index: number, tabItemInfo: any) => void;
}

const Tabs = (props: TabsProps) => {
  const {
    extraData,
    showExtraContent,
    commonExtraContent,
    linearGradient = "#dafbff, #fff",
    children,
    activeIndex = 0,
    activeLabelColor = "#409eff",
    tabStyle = "bootstrap",
    contentPadding,
    clearOnChange = true,
    onLabelClick,
  } = props;

  const [currentIndex, setCurrentIndex] = useState<number>(activeIndex);

  // 加上动画需要的数据
  const [isSliding, setIsSliding] = useState<boolean>(false);
  const [nextIndex, setNextIndex] = useState<number | null>(null);

  const content = useRef<any>();

  const handleLabelClickFn = (index: number, tabItemInfo: any) => {
    if (index !== currentIndex) {
      setNextIndex(index);
      setIsSliding(true);
    } else {
      onLabelClick && onLabelClick(index, tabItemInfo);
    }
  };

  useEffect(() => {
    if (isSliding) {
      const timer = setTimeout(() => {
        setCurrentIndex(nextIndex!);
        setIsSliding(false);
        onLabelClick && onLabelClick(nextIndex!, children[nextIndex!]);
      }, 200); // 动画持续时间
      return () => clearTimeout(timer);
    }
  }, [isSliding, nextIndex]);

  const renderHeader = () => {
    const tabItems: any[] = [];
    React.Children.map(children, (child) => {
      tabItems.push(child);
    });
    return (
      <>
        {tabStyle === "common" ? (
          <div className="header-wrapper">
            <div className="tabs-header">
              {tabItems.map((child: any, index: number) => {
                if (!child) return null;

                return (
                  <div key={index}>
                    <div
                      className={`tabs-header-item-box ${
                        index === 0 ? "first" : ""
                      }`}
                    >
                      <div
                        onClick={() => handleLabelClickFn(index, child)}
                        className={`tabs-header-item ${
                          currentIndex === index ? "active" : ""
                        }`}
                      >
                        {child?.props?.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            {showExtraContent && (
              <div className="extra-content">{commonExtraContent}</div>
            )}
          </div>
        ) : (
          <div className="header-wrapper">
            <ul className="nav nav-tabs mb-2">
              {tabItems.map((child: any, index: number) => (
                <li
                  key={index}
                  className="nav-item d-flex"
                  onClick={() => handleLabelClickFn(index, child)}
                >
                  <a
                    style={{
                      marginLeft: index === 0 ? "10px" : "",
                      color:
                        index === currentIndex
                          ? child.props.activeLabelColor || activeLabelColor
                          : "",
                      cursor: "pointer",
                      ...(index === currentIndex
                        ? { background: `linear-gradient(${linearGradient})` }
                        : {}),
                    }}
                    className={`nav-link ${
                      index === currentIndex ? "active" : ""
                    }`}
                    aria-current="page"
                  >
                    <i className={`${child.props.prefixIcon} me-1`}></i>
                    {child.props.label}
                  </a>
                </li>
              ))}
            </ul>
            {showExtraContent && (
              <div className="extra-content">{content.current}</div>
            )}
          </div>
        )}
      </>
    );
  };

  const renderContent = () => {
    const renderChildren: any[] = [];
    React.Children.map(children, (child: any, index) => {
      if (child) {
        if (index === currentIndex) {
          content.current = child.props.extraContent;
        }
        const enhancedChildren = React.cloneElement(child, {
          active: index === currentIndex,
          key: index,
          contentPadding,
          clearOnChange,
        });
        renderChildren.push(enhancedChildren);
      }
    });
    return renderChildren;
  };

  return (
    <div className="tabs-box">
      {renderHeader()}
      <div
        className={`tab-content ${isSliding ? "slide-exit" : "slide-enter"}`}
      >
        {renderContent()}
      </div>
    </div>
  );
};

export default withTranslation()(Tabs);
