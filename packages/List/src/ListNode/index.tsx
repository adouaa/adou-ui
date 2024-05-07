import React, { useEffect, useState } from 'react';
import "./index.scss";

interface ListNodeProps {
  children?: any;
  node: any;
  isTree: boolean;
  showOptIcons?: boolean;
  showAddIcon?: boolean;
  showEditIcon?: boolean;
  activeId?: string | number;
  wrap?: boolean;
  isTreeChildren?: boolean;
  isExpanded?: boolean;
  showTag?: boolean;
  prefixTag?: string;
  onToggle?: (node: any) => void;
  onItemClick?: (node: any) => void;
  onIconClick?: (node: any) => void;
  onOptIconClick?: (type: string, node: any) => void;
}

const ListNode = ({ prefixTag, showTag = false, children, wrap = true, node, isTree, showOptIcons = true, showAddIcon = true, showEditIcon = true, activeId, onToggle, onIconClick, onItemClick, onOptIconClick }: ListNodeProps) => {

  const [isExpanded, setIsExpanded] = useState(false);
  const [isShowIcons, setIsShowIcons] = useState(false);



  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
    onToggle && onToggle(node);
  };

  const handleItemClick = (node: any) => {
    onItemClick && onItemClick(node);
  }

  const handleIconClick = (node: any, e?: any) => {
    e.stopPropagation();
    handleToggle();
    onIconClick && onIconClick(node);
  }

  const handleChildrenIconClick = (node: any) => {
    onIconClick && onIconClick(node);
  }

  const handleOptIconClick = (e: any, type: string, node: any) => {
    e.stopPropagation(); // 阻止事件冒泡
    onOptIconClick && onOptIconClick(type, node);
  }

  const handleChildrenOptIconClick = (type: string, node: any) => {
    onOptIconClick && onOptIconClick(type, node);
  }

  const renderTag = () => {
    const childArr = children?.length > 0 ? children : [children];
    
    return childArr.map((item: any) => {
      
      if (item?.props?.id === node.showTag) {
        return item;
      }
    })
  }
  
  return (
    // style={{whiteSpace: `${wrap ? "wrap" : "nowrap"}`}} 
    <div className='list-node-wrapper'>
      <div className='node-item'>
        <div className={`left-content ${Number(activeId) === Number(node.id) && "active"}`} onClick={() => handleItemClick(node)} onMouseEnter={() => setIsShowIcons(true)} onMouseLeave={() => setIsShowIcons(false)}>
          <div className={`prefix-tag`}>
            <i className={prefixTag}></i>
          </div>
          {showTag && renderTag()}
          {isTree && node.children && node.children.length > 0 && <i onClick={(e) => handleIconClick(node, e)} className={`icon fa fa-caret-${isExpanded ? 'down' : 'right'}`}></i>}
          <span onClick={() => handleItemClick(node)} className={`item-name ${node.children && node.children.length > 0 ? 'has-children' : 'no-children'}`}>{node.name}</span>
          <div className="right-content" style={{ display: (showOptIcons && isShowIcons) ? 'block' : 'none' }}>
            <i style={{ display: (showAddIcon) ? 'inline-block' : 'none' }} className="icon fa fa-plus" onClick={(e) => handleOptIconClick(e, 'add', node,)}></i>
            <i style={{ display: (showEditIcon) ? 'inline-block' : 'none' }} className="icon fa fa-pencil" onClick={(e) => handleOptIconClick(e, 'edit', node,)}></i>
            <i className="icon fa fa-trash" onClick={(e) => handleOptIconClick(e, 'delete', node,)}></i>
          </div>
        </div>

      </div>
      {node.children && node.children.length > 0 && (
        <div className={`children ${isExpanded ? 'expanded' : 'not-expand'}`} style={{ marginLeft: '1rem' }}>
          {node.children.map((child: any) => (
            // 这里别忘记也要像List父组件一样把 回调传递给 ListNode子组件，因为是递归，所以要这么做，
            // 具体传递的回调的函数需要的参数有哪些，就得参考父组件原来是怎么写的，也可以直接不写好像。。。
            // 或许只是为了写个占位，代表需要触发父组件的这个回调函数？
            // 如果是传递的属性的话，是需要写的,像父组件那样子写，用的参数是父组件传递过来的，类似父组件那样再写一遍
            <ListNode prefixTag={prefixTag} showTag={showTag} children={children} showAddIcon={showAddIcon} showEditIcon={showEditIcon} showOptIcons={showOptIcons} activeId={activeId} onOptIconClick={(type, child) => handleChildrenOptIconClick(type, child)} onIconClick={handleChildrenIconClick} onItemClick={handleItemClick} key={child.id} node={child} isTree={isTree} onToggle={onToggle} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ListNode;
