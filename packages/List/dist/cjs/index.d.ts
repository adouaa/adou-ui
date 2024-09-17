import React from "react";
export type NodeType = {
    id: string;
    name: string;
    isExpanded: boolean;
    children: NodeType[];
};
interface ListProps {
    data?: any[];
    activeBgc?: any;
    deleteIconClass?: string;
    addIconClass?: string;
    editIconClass?: string;
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
declare const List: React.ForwardRefExoticComponent<ListProps & React.RefAttributes<unknown>>;
export default List;
