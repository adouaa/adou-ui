import React from "react";
import "./index.scss";
interface ListGroupProps {
    multiple?: boolean;
    itemHeight?: number;
    columnMaxHeight?: number;
    lineBreak?: boolean;
    listPerColumn?: number;
    height?: any;
    maxHeight?: any;
    activeOnClick?: boolean;
    externalClassName?: string;
    noWrap?: boolean;
    defaultFirst?: boolean;
    data?: any[];
    activeList?: any;
    labelKey?: string;
    valueKey?: string;
    type?: string;
    onItemClick?: (item?: any) => void;
    onItemDoubleClick?: (item?: any) => void;
    render?: (item: any, labelKey: string, valueKey: string) => void;
}
declare const ListGroup: ({ multiple, itemHeight, columnMaxHeight, lineBreak, listPerColumn, height, maxHeight, activeOnClick, externalClassName, noWrap, defaultFirst, data, activeList: selectList, labelKey, valueKey, type, render, onItemClick, onItemDoubleClick, }: ListGroupProps) => React.JSX.Element;
export default ListGroup;
