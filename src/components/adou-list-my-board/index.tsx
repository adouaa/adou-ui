// List组件
import React, { useEffect, useState } from 'react';
import ListNode from './adou-list-node';
import Input from "../adou-Input";

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
    childTag?: string;
    parentTag?: string;
    onToggle?: (node: any, setCanFolder?: any) => void;
    onItemClick?: (node: any, setCanFolder?: any) => void;
    onIconClick?: (node: any) => void;
    onOptIconClick?: (type: string, node: any) => void;
}

const List = ({ parentTag = "fa-solid fa-bars", childTag = "fa-solid fa-paperclip", prefixTag, showSearch = false, showTag = false, children, wrap = true, data, isTree = true, showOptIcons = true, showAddIcon = true, showEditIcon = true, activeId, maxWidth = 300, maxHeight = "500px", onToggle, onItemClick, onIconClick, onOptIconClick }: ListProps) => {


    const [_activeId, set_ActiveId] = useState(activeId);


    // 跟 onToggle不一样，这边因为另外写了一个参数，所以要把 子组件传递的 setCanFolder参数显示接收，然后 显示传递给父组件
    const handleItemClick = (node: any, setCanFolder: any) => {
        /* if (node.pid) {
        // 为树形列表的点击项加上高亮
            set_ActiveId(node.id) // 在父组件这里控制高亮的id即可，子组件直接使用
        } */
        set_ActiveId(node.id)
        // 显示传递 setCanFolder参数给父组件
        onItemClick && onItemClick(node, setCanFolder);
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
                        <ListNode parentTag={parentTag} childTag={childTag} prefixTag={prefixTag} showTag={showTag} wrap={wrap} showEditIcon={showEditIcon} showAddIcon={showAddIcon} activeId={_activeId} showOptIcons={showOptIcons} onOptIconClick={(type, node) => handleOptIconClick(type, node)} onIconClick={handleIconClick} onItemClick={handleItemClick} key={item.id} node={item} isTree={isTree} onToggle={onToggle}>
                            {children}
                        </ListNode>
                    ))}
                </div>
            </div>
        </div>
    );
};


export default List;
