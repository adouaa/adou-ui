import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import React from "react";

interface ListGroupProps {
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
  const [activeList, setActiveList] = useState<any>(selectList || {});
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
  }, [selectList, data]);

  return (
    <div className={`list-group-wrapper ${externalClassName}`}>
      <div className="list-group">
        {data!?.map((item: any) => (
          <button
            style={{ whiteSpace: noWrap ? "nowrap" : "normal" }}
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
    </div>
  );
};

export default ListGroup;
