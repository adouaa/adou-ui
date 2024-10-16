import React from "react";
interface ListGroupProps {
    data?: any[];
    activeList?: any;
    labelKey?: string;
    valueKey?: string;
    type?: string;
    onItemClick?: (item?: any) => void;
    render?: any;
}
declare const ListGroup: ({ data, activeList, valueKey, type, render, onItemClick, }: ListGroupProps) => React.JSX.Element;
export default ListGroup;
