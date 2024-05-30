import React from 'react';
export type NodeType = {
    id: string;
    name: string;
    isExpanded: boolean;
    children: NodeType[];
};
interface ListProps {
    data?: any[];
    isTree?: boolean;
    maxWidth?: any;
    maxHeight?: any;
    showOptIcons?: boolean;
    showAddIcon?: boolean;
    showEditIcon?: boolean;
    activeId?: string | number;
    wrap?: boolean;
    children?: any;
    showTag?: boolean;
    showSearch?: boolean;
    prefixTag?: string;
    onToggle?: (node: any) => void;
    onItemClick?: (node: any) => void;
    onIconClick?: (node: any) => void;
    onOptIconClick?: (type: string, node: any) => void;
}
declare const List: ({ prefixTag, showSearch, showTag, children, wrap, data, isTree, showOptIcons, showAddIcon, showEditIcon, activeId, maxWidth, maxHeight, onToggle, onItemClick, onIconClick, onOptIconClick }: ListProps) => React.JSX.Element;
export default List;
