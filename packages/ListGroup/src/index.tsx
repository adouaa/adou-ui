import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import splitFilesIntoColumns from "./splitFilesIntoColumns";

interface ListGroupProps {
  itemHeight?: any;
  columnMaxHeight?: any;
  lineBreak?: boolean;
  // 每列展示的文件数量--优先根据这个属性，没有再通过 columnMaxHeight 和 itemHeight 进行计算
  filesPerColumn?: number;
  columns?: number; // 展示的列数
  height?: any;
  maxHeight?: any;
  canActive?: boolean;
  externalClassName?: string;
  noWrap?: boolean;
  defaultFirst?: boolean;
  data?: any[];
  activeList?: any;
  labelKey?: string;
  valueKey?: string;
  type?: string;
  onItemClick?: (item?: any) => void;
  onItemDoubleClick?: (item?: any) => void;
  render?: any;
}

const ListGroup = ({
  itemHeight = 40,
  columnMaxHeight,
  lineBreak,
  filesPerColumn,
  columns = 2,
  height,
  maxHeight,
  canActive = true,
  externalClassName,
  noWrap,
  defaultFirst = false,
  data,
  activeList: selectList,
  labelKey = "label",
  valueKey = "value",
  type = "primary",
  render,
  onItemClick,
  onItemDoubleClick,
}: ListGroupProps) => {
  const [list, setList] = useState<any[]>([]);
  const [activeList, setActiveList] = useState<any>(selectList || {});
  const [parentMaxHeight, setParentMaxHeight] = useState<any>(columnMaxHeight);

  const listGroupRef = useRef<any>(null);

  const handleItemClick = (item: any) => {
    let data: any;
    if (Array.isArray(activeList)) {
      const hasSelected = activeList.some(
        (selectedItem: any) => selectedItem[valueKey!] === item[valueKey!]
      );
      data = hasSelected
        ? activeList.filter(
            (selectedItem: any) => selectedItem[valueKey!] !== item[valueKey!]
          )
        : [...activeList, item];
      setActiveList(data);
      onItemClick && onItemClick(item);
    } else {
      const hasSelected = activeList[valueKey] === item[valueKey];
      data = hasSelected ? {} : item;
      setActiveList(data);
      onItemClick && onItemClick(data);
    }
  };

  const handleItemDoubleClick = (e: any, item: any) => {
    e.preventDefault(); // 阻止可能触发的默认点击行为
    e.stopPropagation();
    onItemDoubleClick && onItemDoubleClick(item);
  };

  const judgeIsActive = (item: any) => {
    if (!canActive) return "";
    let flag: boolean = false;
    if (Array.isArray(activeList)) {
      if (
        activeList.map((item: any) => item[valueKey!]).includes(item[valueKey!])
      )
        flag = true;
    } else {
      if (activeList?.[valueKey!] === item[valueKey!]) flag = true;
    }
    if (flag) {
      return `active bg-${type} border-${type}`;
    } else {
      return "";
    }
  };

  useEffect(() => {
    if (selectList) {
      setActiveList(selectList || {});
    } else if (defaultFirst) {
      setActiveList(data?.[0]);
    }
    if (listGroupRef.current) {
      const parentElement = listGroupRef.current.parentElement;
      if (parentElement && parentElement.clientHeight > 0) {
        setParentMaxHeight(parentElement.clientHeight);
      }
    }
  }, [selectList, data, columnMaxHeight]);

  useEffect(() => {
    // 如果需要换行，则根据 判断 filesPerColunm 是否有值，有值则直接分割，没有值则根据 parentMaxHeight 和 itemHeight 计算每列的文件数量
    if (lineBreak) {
      if (filesPerColumn) {
        setList(splitFilesIntoColumns(data || [], filesPerColumn));
      } else {
        // 存放列表的数据，二维数组：[["1", "2", "3"], ["4", "5", "6"]]
        const columnsData: any[][] = [];
        let currentColumn: any[] = [];
        let currentHeight = 0;

        data?.forEach((item) => {
          // 假设每个项的高度为 40px
          // 如果加上这个 item的高度 超过了最大高度，则把之前那一组的数据 放到 columnsData 中，然后清空数据，开始新的列
          if (
            currentHeight + itemHeight >
            parseFloat(columnMaxHeight || maxHeight || parentMaxHeight)
          ) {
            columnsData.push(currentColumn);
            currentColumn = [];
            currentHeight = 0;
          }
          currentColumn.push(item);
          currentHeight += itemHeight;
        });

        if (currentColumn.length > 0) {
          columnsData.push(currentColumn);
        }

        setList(columnsData);
      }
    } else {
      setList(data || []);
    }
  }, [data, lineBreak, columnMaxHeight, maxHeight, parentMaxHeight]);

  return (
    <div
      className={`list-group-wrapper ${externalClassName || ""}`}
      ref={listGroupRef}
    >
      {lineBreak ? (
        <div className="row g-0">
          {list.map((columnItems, columnIndex) => (
            <div className={`col`} key={columnIndex}>
              <ul
                className="list-group me-2"
                style={{
                  height,
                  // maxHeight:
                  //   maxHeight || height || lineBreak ? parentMaxHeight : "",
                  maxHeight:
                    columnMaxHeight || maxHeight || height || parentMaxHeight,
                  overflowY: "auto",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  boxSizing: "border-box",
                }}
              >
                {Array.isArray(columnItems) &&
                  columnItems?.map((item: any, itemIndex: number) => (
                    <button
                      onClick={() => handleItemClick(item)}
                      onDoubleClick={(e) => handleItemDoubleClick(e, item)}
                      key={itemIndex}
                      type="button"
                      className={`list-group-item list-group-item-action border-0 ${judgeIsActive(
                        item
                      )}`}
                    >
                      {render ? render(item) : item[labelKey!]}
                    </button>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <div
          className="list-group"
          style={{
            height,
            maxHeight: maxHeight || height,
            overflowY: "auto",
            border: list.length ? "1px solid #ccc" : "none",
          }}
        >
          {list!?.map((item: any, index: number) => (
            <button
              style={{
                whiteSpace: noWrap ? "nowrap" : "normal",
                border: "none",
              }}
              onClick={() => handleItemClick(item)}
              onDoubleClick={(e) => handleItemDoubleClick(e, item)}
              key={item[valueKey!]}
              type="button"
              className={`list-group-item list-group-item-action ${judgeIsActive(
                item
              )}`}
            >
              {render ? render(item) : item[labelKey!]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ListGroup;
