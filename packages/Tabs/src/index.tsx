import React from "react";
import { withTranslation } from "react-i18next"

import TabItem from "./TabItem";
import "./index.scss";


export {TabItem}


interface TabsProps {
    children?: any,
    handleLabelClick?: any,
    activeIndex?: number,
}

const Tabs = (props: TabsProps) => {

    const { children, handleLabelClick, activeIndex = 0 } = props;

    const handleLabelClickFn = (index: number) => {
        handleLabelClick && handleLabelClick(index);
    }

    const renderHeader = () => {
        const items: any = [];
        React.Children.map(children, (child: any) => {
            items.push(child);
        })
        return <>
            <div className="tabs-header">
                {items.map((child: any, index: number) => {

                    return <div key={index}>
                        <div className={`tabs-header-item-box ${index === 0 && "first"}`}>
                            <div onClick={() => handleLabelClickFn(index)} className={`tabs-header-item  ${activeIndex === index && "active"}`}>
                                {child.props.label}
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </>

    }

    const renderContent = () => {
        const renderChildren: any = []
        React.Children.map(children, (child: any, index) => {
            const enhancedChildren = React.cloneElement((child), {
                active: index === activeIndex,
                key: index
            })
        renderChildren.push(enhancedChildren);
        })
        return renderChildren;
    }


    return <>
        <div className="tabs-box">
            {/* 先渲染头部 */}
            {renderHeader()}
            {/* 再渲染内容 */}
            {renderContent()}
        </div>
    </>
}

export default withTranslation()(Tabs);