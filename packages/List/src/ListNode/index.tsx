import React, { useEffect, useState } from "react";
import "./index.scss";

interface ListNodeProps {
  children?: any;
  activeBgc?: any;
  deleteIconClass?: string;
  addIconClass?: string;
  editIconClass?: string;
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

const ListNode = ({
  activeBgc = "#2783d8",
  addIconClass,
  deleteIconClass,
  editIconClass,
  prefixTag,
  showTag = true,
  children,
  wrap = true,
  node,
  isTree,
  showOptIcons = true,
  showAddIcon = true,
  showEditIcon = true,
  activeId,
  onToggle,
  onIconClick,
  onItemClick,
  onOptIconClick,
}: ListNodeProps) => {
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
  };

  const setMaxHeights = (
    element: any,
    expandedParents: any[],
    closed: boolean = false
  ) => {
    console.log(isExpanded);
    let currentMaxHeight: any;

    // scrollHeight 可以用来确定元素内容的总高度，包括隐藏的溢出内容。
    currentMaxHeight = element.scrollHeight;
    // 遍历所有找到的父 div 元素
    expandedParents.forEach((parent: any, index: number) => {
      // 将当前父 div 元素的 maxHeight 设置为当前值加上上一个父 div 元素的 maxHeight

      if (index) {
        // 后面遍历到的expanded元素 因为要加上前边遍历到的expanded元素，所以要加上它的 maxHeight
        // 如此往复就会正确计算好展开的maxHeight。。。
        const parenetMaxHeight = parseInt(parent.style.maxHeight);
        parent.style.maxHeight = `${currentMaxHeight + parenetMaxHeight}px`;
      } else {
        // 如果是第一个遍历到的expanded元素的话，只要赋上本身的 scrollHeight即可
        // 后面遍历到的expanded元素 因为要加上前边遍历到的expanded元素，所以要加上它的 maxHeight
        // 如此往复就会正确计算好展开的maxHeight。。。
        parent.style.maxHeight = `${currentMaxHeight}px`;
      }
      // 更新 currentMaxHeight 为当前父 div 元素的实际高度
      // ----错了，不能累加，每次用最开始的计算就行。。因为后面遍历到的 expanded元素会加上它本身的 maxHeight
      // 这个 maxHeight就会正确的包括前面的 expanded元素的高度。
    });
  };

  function findExpandedParents(element: any) {
    // 存放所有expanded元素的数组
    let expandedParents: any = [];
    // 存放当前元素
    let currentElement = element;

    // 循环遍历每个父节点
    while (currentElement) {
      // 检查当前元素是否是 div 并且包含 'expanded' 类
      if (
        currentElement.tagName === "DIV" &&
        currentElement.classList.contains("expanded")
      ) {
        expandedParents.push(currentElement);
      }
      // 移动到当前元素的父节点--类似递归的操作
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
      // 如果是展开，这个操作也是不能少的--具体原因未知。。。
      setChildrenMaxHeight(nodeItem.scrollHeight);
    } else {
      // 如果是折叠，直接maxHeight设置为0即可。虽热子节点的maxHeight不会为，但是父节点的maxHeight为0，就隐藏子节点了
      setChildrenMaxHeight(0);
    }
    // 一开始还没点击展开的时候，都是 not-expanded
    const notExpandedChildren = nodeItem.querySelector(".children.not-expand");
    // childrenList: 类名为 children下的所有div节点
    const childrenList =
      notExpandedChildren?.querySelectorAll(".list-node-wrapper");
    if (childrenList) {
      // 伪数组无法遍历，造成新数组来处理
      const childrenArr = [...childrenList];
      // 存放是expanded节点的子元素
      const expandedChildrenList: any = [];

      // 因为isExpanded状态的设置是异步的，所以这边要加个定时器，不然不行
      setTimeout(() => {
        childrenArr.forEach((child: any) => {
          // 找到list-node-wrapper的父节点
          const parent = child.parentNode;
          // 通过判断list-node-wrapper的父节点是否是 expanded，来决定要不要存入数组
          if (parent.classList.contains("expanded")) {
            console.log("child = ", child);

            expandedChildrenList.push(child);
          }
        });

        // 存放父节点
        let childrenContainerDiv: any;
        expandedChildrenList?.forEach((child: any) => {
          // 相同的节点只处理一次
          if (childrenContainerDiv != child.parentNode) {
            // 存放父节点
            childrenContainerDiv = child.parentNode;
            // 判断这个父节点是否是展开状态--貌似有点多余，不用判断，直接执行函数即可
            findExpandedParents(childrenContainerDiv);
          }
        });
      }, 0);
    }
  };

  const handleNodeNameClick = (node: any, e: any) => {
    // onItemClick && onItemClick(node); // 注释掉，防止出现调用两次 onItemClick
  };

  const handleChildrenIconClick = (node: any) => {
    onIconClick && onIconClick(node);
  };

  const handleOptIconClick = (e: any, type: string, node: any) => {
    e.stopPropagation(); // 阻止事件冒泡
    onOptIconClick && onOptIconClick(type, node);
  };

  const handleChildrenOptIconClick = (type: string, node: any) => {
    onOptIconClick && onOptIconClick(type, node);
  };

  const renderTag = () => {
    const childArr = children?.length > 0 ? children : [children];

    return childArr.map((item: any) => {
      if (item?.props?.id === node.showTag) {
        return item;
      }
    });
  };

  return (
    // style={{whiteSpace: `${wrap ? "wrap" : "nowrap"}`}}
    // 整个树
    <div className="list-node-wrapper">
      {/* 每个树节点 */}
      <div className="node-item">
        {/* handleItemClick: 整个树节点的点击事件 */}
        <div
          style={{
            ...(Number(activeId) === Number(node.id)
              ? { backgroundColor: activeBgc }
              : ""),
          }}
          className={`left-content ${
            Number(activeId) === Number(node.id) && "active"
          }`}
          onClick={() => handleItemClick(node)}
          onMouseEnter={() => setIsShowIcons(true)}
          onMouseLeave={() => setIsShowIcons(false)}
        >
          {/* 最左边的tag */}
          <div className={`prefix-tag`}>
            <i
              className={`${prefixTag} ${
                activeId === node.id ? "text-white" : ""
              }`}
            ></i>
          </div>
          {/* 展示标志 */}
          {showTag && renderTag()}
          {/* 有子节点的话，展示折叠按钮 */}
          {isTree && node.children && node.children.length > 0 && (
            <i
              style={{ fontSize: "16px" }}
              onClick={(e) => handleFolderIconClick(node, e)}
              className={`icon fa fa-caret-${isExpanded ? "down" : "right"}`}
            ></i>
          )}
          {/* 节点名字 */}
          <span
            onClick={(e) => handleNodeNameClick(node, e)}
            className={`item-name ${
              node.children && node.children.length > 0
                ? "has-children"
                : "no-children"
            }`}
          >
            {node.name}
          </span>
          <div
            className="right-content"
            style={{ display: showOptIcons && isShowIcons ? "block" : "none" }}
          >
            <i
              style={{ display: showAddIcon ? "inline-block" : "none" }}
              className={`icon fa ${addIconClass || "fa-plus text-success"}`}
              onClick={(e) => handleOptIconClick(e, "add", node)}
            ></i>
            <i
              style={{ display: showEditIcon ? "inline-block" : "none" }}
              className={`icon fa ${editIconClass || "fa-pencil text-warning"}`}
              onClick={(e) => handleOptIconClick(e, "edit", node)}
            ></i>
            <i
              className={`icon fa ${deleteIconClass || "fa-trash text-danger"}`}
              onClick={(e) => handleOptIconClick(e, "delete", node)}
            ></i>
          </div>
        </div>
        {node.children && node.children.length > 0 && (
          <div
            className={`children ${isExpanded ? "expanded" : "not-expand"}`}
            style={{ maxHeight: childrenMaxHeight }}
          >
            {node.children.map((child: any) => (
              // 这里别忘记也要像List父组件一样把 回调传递给 ListNode子组件，因为是递归，所以要这么做，
              // 具体传递的回调的函数需要的参数有哪些，就得参考父组件原来是怎么写的，也可以直接不写好像。。。
              // 或许只是为了写个占位，代表需要触发父组件的这个回调函数？
              // 如果是传递的属性的话，是需要写的,像父组件那样子写，用的参数是父组件传递过来的，类似父组件那样再写一遍
              <ListNode
                addIconClass={addIconClass}
                editIconClass={editIconClass}
                deleteIconClass={deleteIconClass}
                prefixTag={prefixTag}
                showTag={showTag}
                children={children}
                showAddIcon={showAddIcon}
                showEditIcon={showEditIcon}
                showOptIcons={showOptIcons}
                activeId={activeId}
                onOptIconClick={(type, child) =>
                  handleChildrenOptIconClick(type, child)
                }
                onIconClick={handleChildrenIconClick}
                onItemClick={handleItemClick}
                key={child.id}
                node={child}
                isTree={isTree}
                onToggle={onToggle}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ListNode;
