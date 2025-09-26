import { useState, useEffect, useRef, useImperativeHandle } from "react";
import React from "react";
import splitListIntoColumns from "./splitListIntoColumns";
import "./index.scss";

interface ListGroupProps {
  focusedIndex?: any;
  actRef?: any;
  buttonClassName?: string;
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
  data?: any[];
  activeList?: any;
  labelKey?: string;
  valueKey?: string;
  type?: string;
  onItemClick?: (item: any, index: number) => void;
  onItemDoubleClick?: (item: any, index: number) => void;
  render?: (item: any, labelKey: string, valueKey: string) => any;
  onEnter?: (item: any, index: number) => void;
}

const ListGroup = ({
  focusedIndex,
  actRef,
  buttonClassName,
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
  height = "100%",
  maxHeight,
  activeOnClick = true,
  externalClassName,
  noWrap,
  data,
  activeList: selectList,
  labelKey = "label",
  valueKey = "value",
  type = "primary",
  render,
  onItemClick,
  onItemDoubleClick,
  onEnter,
}: ListGroupProps) => {
  const [list, setList] = useState<any[]>([]);
  const [activeList, setActiveList] = useState<any>(
    selectList || multiple ? [] : {}
  ); // 判断如果是多选，则要赋值为空数组
  const [parentMaxHeight, setParentMaxHeight] = useState<any>(columnMaxHeight);
  const [buttonMaxWidth, setButtonMaxWidth] = useState<any>(null);
  const [_focusedIndex, _setFocusedIndex] = useState<number>(0);

  const listGroupRef = useRef<any>(null);
  const itemRefs = useRef<(HTMLButtonElement | HTMLDivElement | null)[]>([]); // 存储所有项的引用

  // 注册项引用
  const registerRef = (
    index: number,
    ref: HTMLButtonElement | HTMLDivElement | null
  ) => {
    if (ref && !itemRefs.current[index]) {
      itemRefs.current[index] = ref;
    }
  };

  const getFlatIndex = (columnIndex: number, itemIndex: number): number => {
    let flatIndex = 0;
    // 累加前面所有列的长度，得到当前项的全局索引
    for (let i = 0; i < columnIndex; i++) {
      flatIndex += list[i]?.length || 0;
    }
    return flatIndex + itemIndex;
  };

  const handleItemClick = (item: any, index: number) => {
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
      onItemClick && onItemClick(item, index);
    } else if (activeList) {
      const hasSelected = activeList[valueKey] === item[valueKey];
      data = hasSelected && canCancel ? {} : item;
      setActiveList(data);
      console.log("内部传递的index: ", index);
      onItemClick && onItemClick(data, index);
    }
    _setFocusedIndex(index);
  };

  const handleItemDoubleClick = (e: any, item: any, index: number) => {
    e.preventDefault(); // 阻止可能触发的默认点击行为
    e.stopPropagation();
    onItemDoubleClick && onItemDoubleClick(item, index);
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

  // 滚动到指定项使其可见
  const scrollToItem = (index: number) => {
    const item = itemRefs.current[index];
    if (item) {
      // 平滑滚动到元素
      item.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  };

  // 处理键盘事件（逻辑不变，但依赖“全局索引”）
  const handleKeyDown = (e: KeyboardEvent) => {
    // 阻止箭头键默认滚动行为
    if (["ArrowUp", "ArrowDown"].includes(e.key)) {
      e.preventDefault();
    }
    let newIndex = _focusedIndex;
    switch (e.key) {
      case "ArrowDown": {
        newIndex = _focusedIndex === list.length - 1 ? 0 : _focusedIndex + 1;
        break;
      }
      case "ArrowUp": {
        newIndex = _focusedIndex <= 0 ? list.length - 1 : _focusedIndex - 1;
        break;
      }
      case "Enter": {
        if (_focusedIndex >= 0 && _focusedIndex < list.length) {
          if (onEnter) {
            handleItemClick(list[_focusedIndex], _focusedIndex);
            setTimeout(() => {
              onEnter(activeList, _focusedIndex);
            }, 500);
          }
        }
        break;
      }
    }
    // 如果是上下箭头，赋值完最新的 index 后，在最后统一处理
    if (["ArrowUp", "ArrowDown"].includes(e.key)) {
      if (list && list.length) {
        scrollToItem(newIndex);
        handleItemClick(list[newIndex], newIndex);
        if (!multiple) {
          setActiveList(list[newIndex]);
        }
      }
    }
  };

  useEffect(() => {
    if (listGroupRef.current) {
      listGroupRef.current.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      if (listGroupRef.current) {
        listGroupRef.current.removeEventListener("keydown", handleKeyDown);
      }
    };
  }, [list, _focusedIndex, listGroupRef.current]);

  useEffect(() => {
    // 要加个定时器，不然下方 setActiveList([]) 会清空选中项，导致选中项为空
    setTimeout(() => {
      if (selectList) {
        setActiveList(selectList);
      } else if (activeId) {
        setActiveList(
          data?.find((item: any) => item[valueKey!] === activeId) ||
            (multiple ? [] : {})
        ); // setActiveList 要设置个 空对象 || 空数组 兜底
      } else if (data && data.length && focusedIndex !== undefined) {
        setActiveList(data[focusedIndex]);
      }
      if (listGroupRef.current) {
        const parentElement = listGroupRef.current.parentElement;
        if (parentElement && parentElement.clientHeight > 0) {
          setParentMaxHeight(parentElement.clientHeight);
        }
      }
    }, 0);
  }, [
    selectList,
    activeId,
    data,
    columnMaxHeight,
    listGroupRef.current,
    multiple,
    focusedIndex,
  ]);

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
    setButtonMaxWidth(maxWidth + 8 + "px"); // 8 是 button 的 padding
  }, [list, buttonWidth]);

  useEffect(() => {
    // 在数据变化后，要清空 已选中的数据 activeList
    setActiveList([]);
    // 重置项引用
    itemRefs.current = [];
  }, [data]);

  useEffect(() => {
    if (focusedIndex !== undefined) {
      if (data && data.length) {
        scrollToItem(focusedIndex);
        _setFocusedIndex(focusedIndex);
      }
    }
  }, [data, focusedIndex]);

  useImperativeHandle(actRef, () => ({
    getSelectedList: () => activeList,
    scrollToItem,
    focus: () => {
      listGroupRef.current?.focus();
    },
  }));

  return (
    <div
      className={`list-group-wrapper ${externalClassName || ""}`}
      ref={listGroupRef}
      tabIndex={1}
      style={{ outline: "none" }}
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
                } ${showBorder ? "border" : ""}`}
                style={{
                  height,
                  // maxHeight:
                  //   maxHeight || height || lineBreak ? parentMaxHeight : "",
                  maxHeight:
                    columnMaxHeight || maxHeight || height || parentMaxHeight,
                  borderRadius: showBorderRadius ? "5px" : "0",
                  boxSizing: "border-box",
                }}
              >
                {Array.isArray(columnItems) &&
                  columnItems?.map((item: any, itemIndex: number) => {
                    const flatIndex = getFlatIndex(columnIndex, itemIndex);
                    return (
                      <div className="list-group-item-wrapper" key={itemIndex}>
                        <div
                          ref={(ref) => registerRef(flatIndex, ref)}
                          onClick={() => handleItemClick(item, itemIndex)}
                          onDoubleClick={(e) =>
                            handleItemDoubleClick(e, item, itemIndex)
                          }
                          key={itemIndex}
                          className={`list-group-item list-group-item-action px-2 border-0 ${
                            buttonClassName ? buttonClassName : ""
                          } ${judgeIsActive(item)}`}
                          style={{
                            whiteSpace: noWrap ? "nowrap" : "normal",
                            height: itemHeight + "px",
                            // 不能用 maxWidth，因为如果是短的 label 就不起作用了
                            minWidth: buttonMaxWidth,
                            cursor: "pointer",
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
                        </div>
                      </div>
                    );
                  })}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        // 好像不会执行这边的渲染
        <div
          className={`list-group ${showBorder && list.length ? "border" : ""}`}
          style={{
            height,
            maxHeight: maxHeight || height,
            overflowY: "auto",
            borderRadius: !showBorderRadius ? "0px" : "5px",
          }}
        >
          {list!?.map((item: any, index: number) => (
            <div
              className="list-group-item-wrapper d-flex align-items-center"
              key={item[valueKey!]}
            >
              <div
                ref={(ref) => registerRef(index, ref)}
                style={{
                  whiteSpace: noWrap ? "nowrap" : "normal",
                  border: "none",
                  // 不能用 maxWidth，因为如果是短的 label 就不起作用了
                  minWidth: buttonMaxWidth,
                  cursor: "pointer",
                }}
                onClick={() => handleItemClick(item, index)}
                onDoubleClick={(e) => handleItemDoubleClick(e, item, index)}
                key={item[valueKey!]}
                className={`list-group-item list-group-item-action px-2 ${
                  buttonClassName ? buttonClassName : ""
                } ${judgeIsActive(item)}`}
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
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ListGroup;
