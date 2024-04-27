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
    maxWidth?: number;
    maxHeight?: number;
    showOptIcons?: boolean;
    showAddIcon?: boolean;
    showEditIcon?: boolean;
    activeId?: string | number;
    wrap?: boolean;
    children?: any;
    showTag?: boolean;
    onToggle?: (node: any) => void;
    onItemClick?: (node: any) => void;
    onIconClick?: (node: any) => void;
    onOptIconClick?: (type: string, node: any) => void;
}
declare const List: ({ showTag, children, wrap, data, isTree, showOptIcons, showAddIcon, showEditIcon, activeId, maxWidth, maxHeight, onToggle, onItemClick, onIconClick, onOptIconClick }: ListProps) => React.JSX.Element;
export default List;
