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


  // 计算children的maxWidth
  const [childrenMaxHeight, setChildrenMaxHeight] = useState<any>(0);


  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
    onToggle && onToggle(node);
  };

  const handleItemClick = (node: any) => {

    onItemClick && onItemClick(node);
  }

  const setMaxHeights = (element: any, expandedParents: any[], closed: boolean = false) => {
    console.log(isExpanded);
    
    let currentMaxHeight = element.scrollHeight;
    // 遍历所有找到的父 div 元素
    expandedParents.forEach((parent: any, index: number) => {
      // 将当前父 div 元素的 maxHeight 设置为当前值加上上一个父 div 元素的 maxHeight

      if (index) {
        const parenetMaxHeight = parseInt(parent.style.maxHeight);
        parent.style.maxHeight = `${currentMaxHeight + parenetMaxHeight}px`;

      } else {
        parent.style.maxHeight = `${currentMaxHeight}px`;

      }
      // 更新 currentMaxHeight 为当前父 div 元素的实际高度
    });
  }

  function findExpandedParents(element: any) {
    let expandedParents: any = [];
    let currentElement = element;

    // 循环遍历每个父节点
    while (currentElement) {
      // 检查当前元素是否是 div 并且包含 'expanded' 类
      if (currentElement.tagName === 'DIV' && currentElement.classList.contains('expanded')) {
        expandedParents.push(currentElement);
      }
      // 移动到当前元素的父节点
      currentElement = currentElement.parentNode;
    }

    setMaxHeights(element, expandedParents);
  }


  const handleFolderIconClick = (node: any, e?: any) => {
    // 公共操作
    e.stopPropagation();
    handleToggle();
    onIconClick && onIconClick(node);
    const target = e.target;
    const nodeItem = target.parentNode?.parentNode;
    if (!isExpanded) {
      setChildrenMaxHeight(nodeItem.clientHeight)
    } else {
      setChildrenMaxHeight(0)
    }
    const notExpandedChildren = nodeItem.querySelector(".children.not-expand");
    // const chidlrenHeight = notExpandedChildren?.clientHeight;
    // childrenNodeList: 类名为 children下的所有div节点
    const childrenNodeList = notExpandedChildren?.querySelectorAll(".list-node-wrapper");
    console.log(childrenNodeList);

    setTimeout(() => {
      let childrenContainerDivHeight = 0;
      let childrenContainerDiv: any;
      childrenNodeList?.forEach((node: any) => {
        if (childrenContainerDiv != node.parentNode) {
          // 找到子节点的父节点(类名为children)
          childrenContainerDiv = node.parentNode;
          // 判断这个父节点是否是展开状态
          const expanded = childrenContainerDiv.classList.contains('expanded');
          if (expanded) {
            findExpandedParents(childrenContainerDiv);
          } else {
            console.log("关闭");
            
          }
        }

      })


    }, 0);

  }

  const handleNodeNameClick = (node: any, e: any) => {
    onItemClick && onItemClick(node);
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
    // 整个树
    <div className='list-node-wrapper'>
      {/* 每个树节点 */}
      <div className='node-item'>
        {/* handleItemClick: 整个树节点的点击事件 */}
        <div className={`left-content ${Number(activeId) === Number(node.id) && "active"}`} onClick={() => handleItemClick(node)} onMouseEnter={() => setIsShowIcons(true)} onMouseLeave={() => setIsShowIcons(false)}>
          {/* 最左边的tag */}
          <div className={`prefix-tag`}>
            <i className={prefixTag}></i>
          </div>
          {/* 展示标志 */}
          {showTag && renderTag()}
          {/* 有子节点的话，展示折叠按钮 */}
          {isTree && node.children && node.children.length > 0 && <i style={{ fontSize: "16px" }} onClick={(e) => handleFolderIconClick(node, e)} className={`icon fa fa-caret-${isExpanded ? 'down' : 'right'}`}></i>}
          {/* 节点名字 */}
          <span onClick={(e) => handleNodeNameClick(node, e)} className={`item-name ${node.children && node.children.length > 0 ? 'has-children' : 'no-children'}`}>{node.name}</span>
          <div className="right-content" style={{ display: (showOptIcons && isShowIcons) ? 'block' : 'none' }}>
            <i style={{ display: (showAddIcon) ? 'inline-block' : 'none' }} className="icon fa fa-plus" onClick={(e) => handleOptIconClick(e, 'add', node,)}></i>
            <i style={{ display: (showEditIcon) ? 'inline-block' : 'none' }} className="icon fa fa-pencil" onClick={(e) => handleOptIconClick(e, 'edit', node,)}></i>
            <i className="icon fa fa-trash" onClick={(e) => handleOptIconClick(e, 'delete', node,)}></i>
          </div>
        </div>
        {node.children && node.children.length > 0 && (
          <div className={`children ${isExpanded ? 'expanded' : 'not-expand'}`} style={{ maxHeight: childrenMaxHeight }}>
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

    </div>
  );
};


export default ListNode;
