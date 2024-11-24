import React from "react";
interface ListGroupProps {
    itemHeight?: any;
    columnMaxHeight?: any;
    lineBreak?: boolean;
    filesPerColumn?: number;
    columns?: number;
    height?: any;
    maxHeight?: any;
    canActive?: boolean;
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
    render?: any;
}
declare const ListGroup: ({ itemHeight, columnMaxHeight, lineBreak, filesPerColumn, columns, height, maxHeight, canActive, externalClassName, noWrap, defaultFirst, data, activeList: selectList, labelKey, valueKey, type, render, onItemClick, onItemDoubleClick, }: ListGroupProps) => React.JSX.Element;
export default ListGroup;
