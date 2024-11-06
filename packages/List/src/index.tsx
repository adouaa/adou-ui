// List组件
import React, {
  useEffect,
  useState,
  forwardRef,
  useRef,
  useImperativeHandle,
} from "react";
import ListNode from "./ListNode";
import Input from "adou-ui/Input";

export type NodeType = {
    id: string;
    name: string;
    isExpanded: boolean;
    children: NodeType[];
  };
  
  interface ListProps {
    maxLevel?: number;
    lazy?: boolean;
    overflowY?: boolean;
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
    onToggleIconClick?: (node: any) => void;
    onOptIconClick?: (type: string, node: any) => void;
    onLoadNode?: (node: any, treeData: any) => void;
  }
  
  const List = forwardRef(
    (
      {
        maxLevel,
        lazy,
        overflowY = true,
        activeBgc,
        deleteIconClass,
        addIconClass,
        editIconClass,
        prefixTag,
        showSearch = false,
        showTag = true,
        children,
        wrap = true,
        data,
        isTree = false,
        showOptIcons = true,
        showAddIcon = true,
        showEditIcon = true,
        activeId,
        maxWidth = 300,
        maxHeight = "100%",
        onToggle,
        onItemClick,
        onToggleIconClick,
        onOptIconClick,
        onLoadNode,
      }: ListProps,
      ref
    ) => {
      const [_activeId, set_ActiveId] = useState(activeId);
      const [treeData, settreeData] = useState<any[]>([]);
  
      const handleItemClick = (node: any) => {
        set_ActiveId(node.id);
        onItemClick && onItemClick(node);
      };
  
      const handleToggleIconClick = (node: any) => {
        onToggleIconClick && onToggleIconClick(node);
      };
  
      const handleOptIconClick = (type: string, node: any) => {
        onOptIconClick && onOptIconClick(type, node);
      };
  
      const handleInputChange = (value: string) => {};
  
      const handleInputIconClick = (value: string) => {};
  
      /**
       * 自动滚动到底部的逻辑
       */
      const listRef = useRef<any>(null);
      const scrollToEnd = () => {
        setTimeout(() => {
          if (listRef.current) {
            listRef.current.scrollTo({
              top: listRef.current.scrollHeight,
              behavior: "smooth",
            });
          }
        }, 0);
      };
  
      const scrollToTop = () => {
        setTimeout(() => {
          if (listRef.current) {
            listRef.current.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }
        }, 0);
      };
  
      const convertListToTree = (list: any[], pid: any) => {
        let level = 0;
        // 递归辅助函数，用于处理每个节点及其子节点
        const buildTree = (items: any[], parentId: any, currentLevel: any) => {
          const children: any = [];
          items.forEach((item: any) => {
            if (item.pid === parentId) {
              item.level = currentLevel;
              children.push(item);
              // 递归调用自身处理子节点，层级加1
              item.children = buildTree(list, item.id, currentLevel + 1);
            }
          });
          return children;
        };
  
        const data: any[] = buildTree(list, pid, level);
  
        return data;
      };
  
      function flattenDataWithoutNesting(data: any[]) {
        let flattened: any = [];
  
        function flattenRecursive(node: any, parentId: any) {
          const { id, name, isExpanded } = node;
  
          flattened.push({
            ...node,
            id,
            name,
            isExpanded,
            pid: parentId,
          });
  
          if (node.children && node.children.length > 0) {
            node.children.forEach((child: any) => {
              flattenRecursive(child, id);
            });
          }
        }
  
        data.forEach((rootNode: any) => {
          flattenRecursive(rootNode, null);
        });
  
        return flattened;
      }
  
      const handleLoadNode = async (node: any) => {
        if (onLoadNode) {
          const res = await onLoadNode(node, treeData);
          return res;
        }
      };
  
      useImperativeHandle(ref, () => ({
        scrollToEnd,
        scrollToTop,
        flattenDataWithoutNesting,
        convertListToTree,
      }));
  
      useEffect(() => {
        set_ActiveId(activeId);
      }, [activeId]);
  
      useEffect(() => {
        settreeData(
          convertListToTree(
            flattenDataWithoutNesting(data!),
            data?.[0]?.pid || null
          )
        );
      }, [data]);
  
      useEffect(() => {
        // console.log("treeData: ", treeData);
      }, [treeData]);
  
      return (
        <div className="list-wrapper" style={{ flex: 1, height: "100%" }}>
          <div
            ref={listRef}
            className="list-content"
            style={{
              maxWidth: maxWidth,
              maxHeight: maxHeight,
              overflow: overflowY ? "auto" : "",
            }}
          >
            {treeData &&
              treeData.map((item: any) => (
                <ListNode
                  maxLevel={maxLevel}
                  onLoadNode={handleLoadNode}
                  lazy={lazy}
                  activeBgc={activeBgc}
                  addIconClass={addIconClass}
                  deleteIconClass={deleteIconClass}
                  editIconClass={editIconClass}
                  prefixTag={prefixTag}
                  showTag={showTag}
                  wrap={wrap}
                  showEditIcon={showEditIcon}
                  showAddIcon={showAddIcon}
                  activeId={_activeId}
                  showOptIcons={showOptIcons}
                  onOptIconClick={(type: any, node: any) =>
                    handleOptIconClick(type, node)
                  }
                  onToggleIconClick={handleToggleIconClick}
                  onItemClick={handleItemClick}
                  key={item.id}
                  node={item}
                  isTree={isTree}
                  onToggle={onToggle}
                >
                  {children}
                </ListNode>
              ))}
          </div>
        </div>
      );
    }
  );
export default List;
