import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import React from "react";

interface ListGroupProps {
  data?: any[];
  activeList?: any;
  labelKey?: string;
  valueKey?: string;
  type?: string;
  onItemClick?: (item?: any) => void;
  render?: any;
}

const ListGroup = ({
  data,
  activeList,
  valueKey,
  type,
  render,
  onItemClick,
}: ListGroupProps) => {
  const handleItemClick = (item: any) => {
    onItemClick && onItemClick(item);
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
    }
  };

  return (
    <div className="list-group-wrapper">
      <div className="list-group">
        {data!.map((item: any) => (
          <button
            onClick={() => handleItemClick(item)}
            key={item[valueKey!]}
            type="button"
            className={`list-group-item list-group-item-action ${judgeIsActive(
              item
            )}`}
          >
            {render(item)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ListGroup;
