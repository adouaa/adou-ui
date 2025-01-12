import React from "react";
import TabItem from "./TabItem";
import "./index.scss";
interface TabsProps {
    commonTabItemHeaderExternalCls?: string;
    tabRef?: any;
    extraContentCls?: string;
    contentHeight?: any;
    extraData?: any;
    showExtraContent?: boolean;
    commonExtraContent?: any;
    children?: any;
    activeIndex?: number;
    activeLabelColor?: string;
    tabStyle?: 'common' | 'bootstrap';
    contentPadding?: string;
    clearOnChange?: boolean;
    lineaGradient?: string;
    onLabelClick?: (index: number, itemInfo: any) => void;
}
declare const Tabs: (props: TabsProps) => React.JSX.Element;
export { TabItem };
export default Tabs;
