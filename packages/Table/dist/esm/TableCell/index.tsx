import AdouInput from "adou-ui/Input";
import React, { useEffect, useRef, useState } from "react";
import { withTranslation } from "react-i18next";

interface TableCellProps {
    sortable?: any;
    maxWidth?: any;
    children?: any;
    prop?: string;
    label?: string;
    rowIndex?: number;
    colIndex?: number;
    value?: string;
    rowData?: any;
    eidtable?: boolean;
    render?: any;
    width?: string;
    textPosition?: "center" | "start" | "end" | "justify";
    verticalAlign?: "middle" | "top" | "bottom" | "baseline";
    onChange?: (rowIndex: number, colIndex: number, value: string) => void;
    onEditCancel?: () => void;
    onEditOK?: (value: string) => void;
  }
  
  const TableCell = (props: TableCellProps) => {
    const {
      sortable,
      maxWidth,
      render,
      rowData,
      prop,
      label,
      rowIndex,
      colIndex,
      value,
      eidtable,
      textPosition = "center",
      width,
      onChange,
      onEditCancel,
      onEditOK,
    } = props;
  
    const [isEditing, setIsEditing] = useState(false);
    const [editedValue, setEditedValue] = useState(value || ""); // 最终展示的值
    const wrapperRef = useRef<any>(null);
    const handleDoubleClick = () => {
      eidtable && setIsEditing(true);
    };
  
    const handleBlur = (e: any) => {
      const value = e.target.value;
      setIsEditing(false);
      if (true) {
        setEditedValue(value);
        onEditOK && onEditOK(value);
      }
    };
    const handleChange = (e: any) => {};
  
    // 这边必须要写一个监听传递过来的value的钩子函数，因为cell展示的值是 editValue
    // 当传递过来的value发生变化时，将它重新赋值给cell要展示的值
    // 如果cell要展示的值是 value，就可以不用写
    useEffect(() => {
      setEditedValue(value!);
    }, [value]);
  
    return (
      <div className="table-cell d-flex" style={{ width: "100%" }}>
        {render ? (
          render(editedValue, rowData, rowIndex, prop, colIndex)
        ) : (
          <div
            className="table-cell-wrapper"
            style={{ display: "inline-block", overflow: "hidden", width: "100%" }}
            onDoubleClick={handleDoubleClick}
            ref={wrapperRef}
          >
            {isEditing ? (
              <div
                style={{
                  width: wrapperRef.current
                    ? `${wrapperRef.current.clientWidth}px`
                    : "100%",
                  boxSizing: "border-box",
                }}
              >
                <AdouInput
                  defaultValue={editedValue}
                  onChange={(e: any) => handleChange(e)}
                  onBlur={(e: any) => handleBlur(e)}
                />
              </div>
            ) : (
              <div className="ellipsis-1" style={{ minWidth: "100px", maxWidth }}>
                {editedValue}
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

export default withTranslation()(TableCell);
