import React, { useEffect, useRef, useState } from 'react';
import { withTranslation } from 'react-i18next';

import TabItem from './tab-item';

export { TabItem };

import './index.scss';

interface TabsProps {
    headerItemExternalCls?: string;
    extraContentCls?: string;
    contentHeight?: any;
    extraData?: any;
    showExtraContent?: boolean;
    commonExtraContent?: any;
    children?: any;
    onLabelClick?: any;
    activeIndex?: number;
    activeLabelColor?: string;
    tabStyle?: "common" | "bootstrap";
    contentPadding?: string;
    clearOnChange?: boolean;
    lineaGradient?: string;
  }
  
  const Tabs = (props: TabsProps) => {
    const {
      commonExtraContent,
      headerItemExternalCls,
      extraContentCls,
      contentHeight,
      showExtraContent,
      lineaGradient = "#dafbff, #fff",
      children,
      onLabelClick,
      activeIndex = 0,
      activeLabelColor = "#409eff",
      tabStyle = "bootstrap",
      contentPadding,
      clearOnChange = true,
    } = props;
  
    const [updateKey, setupdateKey] = useState<number>(0);
  
    const [currentIndex, setcurrentIndex] = useState<number>(activeIndex);
  
    const content = useRef<any>();
  
    const handleLabelClickFn = (index: number, itemInfo: any) => {
      setcurrentIndex(index);
      onLabelClick && onLabelClick(index, itemInfo);
    };
  
    const renderHeader = () => {
      const tabItems: any = [];
      React.Children.map(children, (child: any) => {
        tabItems.push(child);
      });
      return (
        <>
          {tabStyle === "common" ? (
            <div className="header-wrapper">
              <div className="tabs-header mb-2  d-flex align-items-center">
                <div className="tabs-header-content d-flex" style={{ flex: 1 }}>
                  {tabItems.map((child: any, index: number) => {
                    if (!child) return;
  
                    return (
                      <div key={index}>
                        <div
                          className={`tabs-header-item-box ${
                            index === 0 && "first"
                          }`}
                        >
                          <div
                            onClick={() => handleLabelClickFn(index, child)}
                            className={`tabs-header-item  ${
                              currentIndex === index && "active"
                            }`}
                          >
                            {child?.props?.label}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                {commonExtraContent && (
                  <div className="common-extra-content">{commonExtraContent}</div>
                )}
                {content.current && (
                  <div className="extra-content">{content.current}</div>
                )}
              </div>
            </div>
          ) : (
            <div className="header-wrapper">
              <div className="bootstrap-tabs-header d-flex">
                <ul className="nav nav-tabs mb-2" style={{ flex: 1 }}>
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
                              index === currentIndex
                                ? child.props.activeLabelColor || activeLabelColor
                                : "",
                            cursor: "pointer",
                            ...(index === currentIndex
                              ? {
                                  background: `linear-gradient(${lineaGradient})`,
                                }
                              : {}),
                          }}
                          className={`${
                            index === currentIndex ? "active" : ""
                          } ${headerItemExternalCls} nav-link`}
                          aria-current="page"
                        >
                          <i className={child.props.prefixIcon + " me-1"}></i>
                          {child.props.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
                {commonExtraContent && (
                  <div className="common-extra-content">{commonExtraContent}</div>
                )}
                {content.current && (
                  <div className="extra-content">{content.current}</div>
                )}
              </div>
            </div>
          )}
        </>
      );
    };
  
    useEffect(() => {
      // 因为extraContent是用ref保存的，
      // 所以为了在切换回来的时候重新渲染extraContent的内容，需要强制修改state来重新渲染页面
      setupdateKey(updateKey + 1);
    }, [currentIndex]);
  
    const renderContent = () => {
      const renderChildren: any = [];
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
      return (
        <div
          className="tab-content"
          style={{ ...(contentHeight ? { height: contentHeight } : {}) }}
        >
          {renderChildren}
        </div>
      );
    };
  
    return (
      <>
        <div className="tabs-box" style={{ height: "100%" }}>
          {/* 先渲染头部 */}
          {renderHeader()}
          {/* 再渲染内容 */}
          {renderContent()}
        </div>
      </>
    );
  };

export default withTranslation()(Tabs);
