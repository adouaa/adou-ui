import React from "react";
import { withTranslation } from "react-i18next";

import "./index.scss";

interface TabsProps {
  children?: any;
  handleLabelClick?: any;
  activeIndex?: number;
  activeLabelColor?: string;
  tabStyle?: "common" | "bootstrap";
  contentPadding?: string;
  clearOnChange?: boolean;
  lineaGradient?: string;
}

const Tabs = (props: TabsProps) => {
  const {
    lineaGradient = "#dafbff, #fff",
    children,
    handleLabelClick,
    activeIndex = 0,
    activeLabelColor = "#409eff",
    tabStyle = "common",
    contentPadding,
    clearOnChange = true,
  } = props;

  const handleLabelClickFn = (index: number, itemInfo: any) => {
    handleLabelClick && handleLabelClick(index, itemInfo);
  };

  const renderHeader = () => {
    const tabItems: any = [];
    React.Children.map(children, (child: any) => {
      tabItems.push(child);
    });
    return (
      <>
        {tabStyle === "common" ? (
          <div className="tabs-header">
            {tabItems.map((child: any, index: number) => {
              if (!child) return;

              return (
                <div key={index}>
                  <div
                    className={`tabs-header-item-box ${index === 0 && "first"}`}
                  >
                    <div
                      onClick={() => handleLabelClickFn(index, child)}
                      className={`tabs-header-item  ${
                        activeIndex === index && "active"
                      }`}
                    >
                      {child?.props?.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <ul className="nav nav-tabs mb-2">
            {tabItems.map((child: any, index: number) => {
              return (
                <li
                  key={index}
                  className="nav-item d-flex"
                  onClick={() => handleLabelClickFn(index, child)}
                >
                  <a
                    style={{
                      marginLeft: index === 0 ? "10px" : "",
                      color:
                        index === activeIndex
                          ? child.props.activeLabelColor || activeLabelColor
                          : "",
                      cursor: "pointer",
                      ...(index === activeIndex
                        ? {
                            background: `linear-gradient(${lineaGradient})`,
                          }
                        : {}),
                    }}
                    className={`${
                      index === activeIndex ? "active" : ""
                    } nav-link`}
                    aria-current="page"
                  >
                    <i className={child.props.prefixIcon + " me-1"}></i>
                    {child.props.label}
                  </a>
                </li>
              );
            })}
          </ul>
        )}
      </>
    );
  };

  const renderContent = () => {
    const renderChildren: any = [];
    React.Children.map(children, (child: any, index) => {
      if (child) {
        const enhancedChildren = React.cloneElement(child, {
          active: index === activeIndex,
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
    <>
      <div className="tabs-box">
        {/* 先渲染头部 */}
        {renderHeader()}
        {/* 再渲染内容 */}
        {renderContent()}
      </div>
    </>
  );
};

export default withTranslation()(Tabs);
