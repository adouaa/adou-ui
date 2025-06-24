import { useState, useEffect, useRef } from "react";
import React from "react";
import splitListIntoColumns from "./splitListIntoColumns";
import "./index.scss";

interface ListGroupProps {
  activeId?: string | number;
  showBorderRadius?: boolean;
  showBorder?: boolean;
  buttonWidth?: any;
  canCancel?: boolean;
  multiple?: boolean;
  itemHeight?: number; // 控制每个 button 的高度，如果刚好为 40，则会出现 y轴滚动条
  columnMaxHeight?: number;
  lineBreak?: boolean;
  // 每列展示的文件数量--优先根据这个属性，没有再通过 columnMaxHeight 和 itemHeight 进行计算
  listPerColumn?: number;
  height?: any;
  maxHeight?: any;
  activeOnClick?: boolean;
  externalClassName?: string;
  noWrap?: boolean;
  defaultSelectFirst?: boolean; // 默认选中第一个
  data?: any[];
  activeList?: any;
  labelKey?: string;
  valueKey?: string;
  type?: string;
  onItemClick?: (item?: any) => void;
  onItemDoubleClick?: (item?: any) => void;
  render?: (item: any, labelKey: string, valueKey: string) => any;
}

const ListGroup = ({
  activeId,
  showBorderRadius = true,
  showBorder = true,
  buttonWidth,
  canCancel,
  multiple,
  itemHeight = 38,
  columnMaxHeight,
  lineBreak = false,
  listPerColumn,
  height,
  maxHeight,
  activeOnClick = true,
  externalClassName,
  noWrap,
  defaultSelectFirst = false,
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
  const [buttonMaxWidth, setButtonMaxWidth] = useState<any>(null);

  const listGroupRef = useRef<any>(null);

  const handleItemClick = (item: any) => {
    let data: any;
    if (multiple && Array.isArray(activeList)) {
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
    } else if (activeList) {
      const hasSelected = activeList[valueKey] === item[valueKey];
      data = hasSelected && canCancel ? {} : item;
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
    if (!activeOnClick) return "";
    let flag: boolean = false;
    if (multiple && Array.isArray(activeList)) {
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
    } else if (defaultSelectFirst) {
      setActiveList(data?.[0]);
    } else if (activeId) {
      setActiveList(
        data?.find((item: any) => item[valueKey!] === activeId) || {}
      ); // setActiveList 要设置个 空对象兜底
    }
    if (listGroupRef.current) {
      const parentElement = listGroupRef.current.parentElement;
      if (parentElement && parentElement.clientHeight > 0) {
        setParentMaxHeight(parentElement.clientHeight);
      }
    }
  }, [selectList, activeId, data, columnMaxHeight, listGroupRef.current]);

  useEffect(() => {
    // 如果需要换行，则根据 判断 filesPerColunm 是否有值，有值则直接分割，没有值则根据 parentMaxHeight 和 itemHeight 计算每列的文件数量
    if (lineBreak && (columnMaxHeight || maxHeight || parentMaxHeight)) {
      if (listPerColumn) {
        setList(splitListIntoColumns(data || [], listPerColumn));
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

  // 循环病历每项的 label-text，获取最大宽度，赋值给 button
  useEffect(() => {
    if (buttonWidth) {
      setButtonMaxWidth(buttonWidth);
      return;
    }
    if (!listGroupRef.current) return;
    // 不能直接 querySelector，因为可能存在多个 list-group，要确定父元素
    const wrapper = listGroupRef.current;

    // 只查找当前组件下的 label-text
    const labelElements = wrapper.querySelectorAll(".label-text");

    if (!labelElements || labelElements.length === 0) return;
    let maxWidth = 0;

    labelElements.forEach((el: any) => {
      const width = el.scrollWidth || el.offsetWidth; // 或 el.offsetWidth，但 scrollWidth 更稳妥
      if (width > maxWidth) maxWidth = width;
    });

    // 设置一个缓冲值，例如加上 padding 等
    setButtonMaxWidth(maxWidth + 32 + "px"); // 加上 padding 和额外空间
  }, [list, buttonWidth]);

  return (
    <div
      className={`list-group-wrapper ${externalClassName || ""}`}
      ref={listGroupRef}
    >
      {lineBreak && (columnMaxHeight || maxHeight || parentMaxHeight) ? (
        <div className="row g-0">
          {list.map((columnItems, columnIndex) => (
            <div
              className={`col ${noWrap ? "overflow-auto" : ""}`}
              key={columnIndex}
            >
              <ul
                className={`list-group ${
                  columnIndex === list.length - 1 ? "" : "me-2"
                }`}
                style={{
                  height,
                  // maxHeight:
                  //   maxHeight || height || lineBreak ? parentMaxHeight : "",
                  maxHeight:
                    columnMaxHeight || maxHeight || height || parentMaxHeight,
                  overflowY: "auto",
                  border: showBorder ? "1px solid #ccc" : "none",
                  borderRadius: showBorderRadius ? "5px" : "0",
                  boxSizing: "border-box",
                }}
              >
                {Array.isArray(columnItems) &&
                  columnItems?.map((item: any, itemIndex: number) => (
                    <div className="list-group-item-wrapper" key={itemIndex}>
                      <button
                        onClick={() => handleItemClick(item)}
                        onDoubleClick={(e) => handleItemDoubleClick(e, item)}
                        key={itemIndex}
                        type="button"
                        className={`list-group-item list-group-item-action px-2 border-0 ${judgeIsActive(
                          item
                        )}`}
                        style={{
                          whiteSpace: noWrap ? "nowrap" : "normal",
                          height: itemHeight + "px",
                          // 不能用 maxWidth，因为如果是短的 label 就不起作用了
                          // minWidth: buttonMaxWidth,
                        }}
                      >
                        {item.render ? (
                          item.render(item, labelKey, valueKey)
                        ) : render ? (
                          <div className="label-text">
                            {/* 防止外部自己定义 render，于是加一个 label-text 的标签包裹 */}
                            {render(item, labelKey, valueKey)}
                          </div>
                        ) : multiple ? (
                          <div className="list-group-item-wrapper d-flex align-items-center">
                            <div className="item-check d-flex align-items-center me-1">
                              <input
                                checked={activeList
                                  .map(
                                    (item: any) =>
                                      item[valueKey] && item[valueKey]
                                  )
                                  .includes(item[valueKey])}
                                type="checkbox"
                              />
                            </div>
                            <div className="text">{item[labelKey!]}</div>
                          </div>
                        ) : (
                          item[labelKey!]
                        )}
                      </button>
                    </div>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        // 好像不会执行这边的渲染
        <div
          className="list-group"
          style={{
            height,
            maxHeight: maxHeight || height,
            overflowY: "auto",
            border: showBorder && list.length ? "1px solid #ccc" : "none",
            borderRadius: !showBorderRadius ? "0px" : "5px",
          }}
        >
          {list!?.map((item: any, index: number) => (
            <div
              className="list-group-item-wrapper d-flex align-items-center"
              key={item[valueKey!]}
            >
              <button
                style={{
                  whiteSpace: noWrap ? "nowrap" : "normal",
                  border: "none",
                  // 不能用 maxWidth，因为如果是短的 label 就不起作用了
                  // minWidth: buttonMaxWidth,
                }}
                onClick={() => handleItemClick(item)}
                onDoubleClick={(e) => handleItemDoubleClick(e, item)}
                key={item[valueKey!]}
                type="button"
                className={`list-group-item list-group-item-action px-2 ${judgeIsActive(
                  item
                )}`}
              >
                {item.render ? (
                  item.render(item, labelKey, valueKey)
                ) : render ? (
                  <div className="label-text">
                    {/* 防止外部自己定义 render，于是加一个 label-text 的标签包裹 */}
                    {render(item, labelKey, valueKey)}
                  </div>
                ) : multiple ? (
                  <div className="list-group-item-wrapper d-flex align-items-center">
                    <div className="item-check d-flex align-items-center me-1">
                      <input
                        checked={activeList
                          .map((item: any) => item[valueKey] && item[valueKey])
                          .includes(item[valueKey])}
                        type="checkbox"
                      />
                    </div>
                    <div className="text">{item[labelKey!]}</div>
                  </div>
                ) : (
                  <div className="label-text">{item[labelKey!]}</div>
                )}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ListGroup;
