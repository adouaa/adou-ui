// List组件
import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import ListNode from './adou-list-node';
import Input from '../adou-new-form/adou-Input';

export type NodeType = {
    id: string;
    name: string;
    isExpanded: boolean;
    children: NodeType[];
  };
  
  interface ListProps {
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
    onIconClick?: (node: any) => void;
    onOptIconClick?: (type: string, node: any) => void;
  }
  
  const List = forwardRef(
    (
      {
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
        isTree = true,
        showOptIcons = true,
        showAddIcon = true,
        showEditIcon = true,
        activeId,
        maxWidth = 300,
        maxHeight = "500px",
        onToggle,
        onItemClick,
        onIconClick,
        onOptIconClick,
      }: ListProps,
      ref
    ) => {
      const [_activeId, set_ActiveId] = useState(activeId);
  
      const handleItemClick = (node: any) => {
        set_ActiveId(node.id);
        onItemClick && onItemClick(node);
      };
  
      const handleIconClick = (node: any) => {
        onIconClick && onIconClick(node);
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
  
      useImperativeHandle(ref, () => ({
        scrollToEnd,
        scrollToTop,
      }));
  
      useEffect(() => {
        set_ActiveId(activeId);
      }, [activeId]);
  
      return (
        <div className="list-wrapper" style={{ flex: 1, height: "100%" }}>
          {showSearch && (
            <div className="showSearch mb-2">
              <Input
                onIconClick={handleInputIconClick}
                onChange={(value: string) => handleInputChange(value)}
              >
                <i className="fa-solid fa-magnifying-glass"></i>
              </Input>
            </div>
          )}
          <div
            ref={listRef}
            className="list-content"
            style={{
              maxWidth: maxWidth,
              maxHeight: maxHeight,
              overflow: overflowY ? "auto" : "",
            }}
          >
            {data &&
              data.map((item: any) => (
                <ListNode
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
                  onOptIconClick={(type, node) => handleOptIconClick(type, node)}
                  onIconClick={handleIconClick}
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
