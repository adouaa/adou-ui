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
  parentTag?: string;
  prefixTag?: string;
  childTag: string;
  onToggle?: (node: any, setCanFolder?: any) => void;
  onItemClick?: (node: any, setCanFolder?: any) => void;
  onIconClick?: (node: any) => void;
  onOptIconClick?: (type: string, node: any) => void;
}

const ListNode = ({ parentTag = "fa-solid fa-bars", childTag = "fa-solid fa-paperclip", prefixTag, showTag = false, children, wrap = true, node, isTree, showOptIcons = true, showAddIcon = true, showEditIcon = true, activeId, onToggle, onIconClick, onItemClick, onOptIconClick }: ListNodeProps) => {

  const [isExpanded, setIsExpanded] = useState(false);
  const [isShowIcons, setIsShowIcons] = useState(false);
  const [updateKey, setUpdateKey] = useState<number>(0);

  // 用来判断该节点是否是可以折叠的节点，即是否是父节点
  const [canFolder, setCanFolder] = useState<boolean>(true);

  /* useEffect(() => {
    setTimeout(() => {
      if (updateKey) {
        if (node.children?.length) {
          console.log("进入if");

          setCanFolder(true);
        } else {
          console.log("进入else");

          setCanFolder(false);
        }
      }
    }, 1000);
  }, [updateKey]) */

  // 判断是否折叠可以通过：updateKey或者回调多传递一个 setCanFolder来完成
  const handleToggle = () => {
    setIsExpanded((prev) => !prev); // 控制父节点是否展开子节点
    onToggle && onToggle(node, setCanFolder);
    setUpdateKey(updateKey + 1)
  };

  const handleItemClick = (node: any) => {
    if (node.pid === 0) {

      setIsExpanded((preve) => !preve);
    }

    onItemClick && onItemClick(node, setCanFolder);
  }

  const handFolderleIconClick = (node: any, e?: any) => {
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
    <div className='list-node-wrapper-special'>
      <div className='node-item'>
        {/* 点击整个节点(不是折叠按钮)会触发click回调 */}
        <div className={`left-content ${Number(activeId) === Number(node.id) && "active"}`} onClick={() => handleItemClick(node)} onMouseEnter={() => setIsShowIcons(true)} onMouseLeave={() => setIsShowIcons(false)}>
          {/* 节点最左边的图标 */}
          <div className={`prefix-tag me-1`}>
            {/* 通过pid来判断，等于0就是第一层 */}
            {node.pid === 0 ? <i className={node.icon_name || parentTag}></i> : <i className={node.icon_name || childTag}></i>}
          </div>
          {showTag && renderTag()}
          {/* {isTree && node.children && node.children.length > 0 && <i onClick={(e) => handFolderleIconClick(node, e)} className={`icon fa fa-caret-${isExpanded ? 'down' : 'right'}`}></i>} */}
          {/* 点击节点名字也会触发click回调--现在不能触发
              因为父节点也有点击事件，如果子节点也触发点击事件，会冒泡到父节点，导致执行两遍回调
              去掉no-children的类名，不然节点名字和折叠按钮间距太宽(padding-left) */}
          <span style={{flex: 1, marginLeft: "8px"}} className={`item-name ${node.children && node.children.length > 0 ? 'has-children' : ''}`}>{node.name}</span>
          {/* 判断是否有子节点，展示折叠按钮 */}
          {isTree && canFolder && node.pid === 0 && <i onClick={(e) => handFolderleIconClick(node, e)} className={`icon fa fa-chevron-${isExpanded ? 'down' : 'right'}`}></i>}
          {/* 节点最后面的三个操作符 */}
          <div className="right-content" style={{ display: (showOptIcons && isShowIcons) ? 'block' : 'none' }}>
            <i style={{ display: (showAddIcon) ? 'inline-block' : 'none' }} className="icon fa fa-plus" onClick={(e) => handleOptIconClick(e, 'add', node,)}></i>
            <i style={{ display: (showEditIcon) ? 'inline-block' : 'none' }} className="icon fa fa-pencil" onClick={(e) => handleOptIconClick(e, 'edit', node,)}></i>
            {node.pid === 0 && <i className="icon fa fa-trash" onClick={(e) => handleOptIconClick(e, 'delete', node,)}></i>}
          </div>
        </div>

      </div>
      {/* 如果子节点还有children的话，就得再继续遍历来展示子节点--递归 */}
      {node.children && node.children.length > 0 && (
        // 为了参照实施的风格，删除了  style={{ marginLeft: '1rem' }}
        <div className={`children ${isExpanded ? 'expanded' : 'not-expand'}`}>
          {node.children.map((child: any) => (
            // 这里别忘记也要像List父组件一样把 回调传递给 ListNode子组件，因为是递归，所以要这么做，
            // 具体传递的回调的函数需要的参数有哪些，就得参考父组件原来是怎么写的，也可以直接不写好像。。。
            // 或许只是为了写个占位，代表需要触发父组件的这个回调函数？
            // 如果是传递的属性的话，是需要写的,像父组件那样子写，用的参数是父组件传递过来的，类似父组件那样再写一遍
            <ListNode parentTag={parentTag} childTag={childTag} prefixTag={prefixTag} showTag={showTag} children={children} showAddIcon={showAddIcon} showEditIcon={showEditIcon} showOptIcons={showOptIcons} activeId={activeId} onOptIconClick={(type, child) => handleChildrenOptIconClick(type, child)} onIconClick={handleChildrenIconClick} onItemClick={handleItemClick} key={child.id} node={child} isTree={isTree} onToggle={onToggle} />
          ))}
        </div>
      )}
    </div>
  );
};


export default ListNode;
