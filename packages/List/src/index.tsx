// List组件
import React, { useEffect, useState } from 'react';
import ListNode from './ListNode';
import Input from "adou-ui/Input";

export type NodeType = {
    id: string,
    name: string,
    isExpanded: boolean,
    children: NodeType[],
}

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

const List = ({ prefixTag, showSearch = false, showTag = false, children, wrap = true, data, isTree = true, showOptIcons = true, showAddIcon = true, showEditIcon = true, activeId, maxWidth = 300, maxHeight = "500px", onToggle, onItemClick, onIconClick, onOptIconClick }: ListProps) => {


    const [_activeId, set_ActiveId] = useState(activeId);


    const handleItemClick = (node: any) => {
        set_ActiveId(node.id)
        onItemClick && onItemClick(node);
    }

    const handleIconClick = (node: any) => {
        onIconClick && onIconClick(node);
    }

    const handleOptIconClick = (type: string, node: any) => {
        onOptIconClick && onOptIconClick(type, node);
    }

    const handleInputChange = (value: string) => {

    }

    const handleInputIconClick = (value: string) => {

    }

    useEffect(() => {
        set_ActiveId(activeId);
    }, [activeId])

    return (
        <div className='list-wrapper'>
            {showSearch &&
                <div className="showSearch mb-2">
                    <Input onIconClick={handleInputIconClick} onChange={(value: string) => handleInputChange(value)}>
                        <i className='fa-solid fa-magnifying-glass'></i>
                    </Input>
                </div>
            }
            <div className="list-content">
                <div style={{ maxWidth: maxWidth + "px", maxHeight: maxHeight, overflow: 'auto' }}>
                    {data && data.map((item: any) => (
                        <ListNode prefixTag={prefixTag} showTag={showTag} wrap={wrap} showEditIcon={showEditIcon} showAddIcon={showAddIcon} activeId={_activeId} showOptIcons={showOptIcons} onOptIconClick={(type, node) => handleOptIconClick(type, node)} onIconClick={handleIconClick} onItemClick={handleItemClick} key={item.id} node={item} isTree={isTree} onToggle={onToggle}>
                            {children}
                        </ListNode>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default List;
