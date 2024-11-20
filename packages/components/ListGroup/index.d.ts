import React from "react";
interface ListGroupProps {
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
declare const ListGroup: ({ externalClassName, noWrap, defaultFirst, data, activeList: selectList, labelKey, valueKey, type, render, onItemClick, onItemDoubleClick, }: ListGroupProps) => React.JSX.Element;
export default ListGroup;
