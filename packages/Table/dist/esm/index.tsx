import classNames from "classnames";
import React, {
  Fragment,
  ReactElement,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { withTranslation } from "react-i18next";
import TableCell from "./TableCell";
import "./index.scss";
import Tooltip from "adou-ui/Tooltip";

export { TableCell };
interface TableProps {
  tableRef?: any;
  activeId?: number;
  maxWidth?: any;
  showIndex?: boolean;
  single?: boolean;
  id?: string;
  trPointer?: boolean;
  textPosition?: "center" | "left" | "right" | "justify";
  collection?: boolean;
  collapse?: boolean;
  expandAll?: boolean;
  eidtable?: boolean;
  size?: "lg" | "sm";
  data: any;
  headers?: any;
  propsData?: any;
  tableHover?: boolean;
  tableStriped?: boolean;
  tableBorderd?: boolean;
  tableBorderless?: boolean;
  headColor?: "light" | "dark";
  align?: "top" | "middle" | "bottom";
  captionContent?: any;
  captionPosition?: "top" | "bottom";
  tableResponsive?: "sm" | "md" | "lg" | "xl" | "xxl";
  children?: any;
  headSticky?: boolean;
  headTextColor?: string;
  headBGC?: any;
  divider?: boolean;
  maxHeight?: string;
  minHeight?: string;
  onEditOK?: (data: any) => void;
  onRowDoubleClick?: (row: any) => void;
  onClearSelected?: () => void;
}

const Table = (props: TableProps) => {
  const {
    tableRef,
    activeId,
    maxWidth,
    showIndex = true,
    single = true,
    id = "id",
    trPointer = true,
    textPosition,
    collection,
    collapse,
    expandAll = true,
    size = "lg",
    data,
    headers,
    propsData,
    tableHover = true,
    tableStriped = true,
    tableBorderd = false,
    tableBorderless = false,
    headColor = "null",
    captionContent,
    captionPosition = "top",
    tableResponsive = "xxl",
    eidtable = false,
    headSticky = true,
    headTextColor = "white",
    headBGC = "#2782d7",
    divider,
    maxHeight = "500px",
    minHeight = "300px",
    onRowDoubleClick,
  } = props;

  const cls = classNames({
    table: true,
    "table-striped": tableStriped,
    // "table-hover": tableHover, 加上这句话就没有动画效果了
    "table-bordered": tableBorderd,
    "table-borderless": tableBorderless,
    [`table-${size}`]: true,
    [`table-${headColor}`]: true,
  });

  const [tableData, setTableData] = useState<any[]>([]);
  const [originalTableData, setOriginalTableData] = useState<any[]>([]);
  const [tableHeaders, setTableHeaders] = useState<any[]>([]);

  // 折叠的逻辑
  const handleCollapseClick = (row: any, rowIndex: number) => {
    setTableData((preArr: any) => {
      return preArr.map((item: any, index: number) => {
        if (index === rowIndex) {
          item.collapse = !item.collapse;
        }
        return item;
      });
    });
  };

  const generateHeaderStyle = (position: string) => {
    switch (position) {
      case "left":
        return "flex-start";

      case "right":
        return "flex-end";

      default:
        return "center";
    }
  };

  const judgeSortIconBGC = (prop: string, isDown?: boolean) => {
    const findItem = tableHeaders.find((item: any) => item.prop === prop);
    if (!findItem) return;
    if (isDown) {
      if (findItem.isDown) {
        return "7px solid red";
      }
    } else {
      if (findItem.isUp) {
        return "7px solid red";
      }
    }
  };

  // 排序的逻辑--坑：一定要使用 [...preArr].sort，不能直接preArr.sort，这样会影响原来的数据，有Bug！！！
  const handleSortable = (prop: string, isDown?: boolean) => {
    setTableHeaders((preArr: any) =>
      preArr.map((item: any) => {
        if (prop === item.prop) {
          if (isDown) {
            item.isDown = !item.isDown;
            item.isUp = false;
            // 需要降序排序
            if (item.isDown) {
              console.log("down: ");
              setTableData((preArr: any) =>
                [...preArr].sort((a: any, b: any) =>
                  a[prop] < b[prop] ? 1 : -1
                )
              );
            } else {
              setTableData(data);
            }
          } else {
            item.isUp = !item.isUp;
            item.isDown = false;
            // 需要升序排序
            if (item.isUp) {
              setTableData((preArr: any) =>
                [...preArr].sort((a: any, b: any) =>
                  a[prop] > b[prop] ? 1 : -1
                )
              );
            } else {
              setTableData(data);
            }
          }
        }
        return item;
      })
    );

    // setTableData((preArr: any) => preArr.sort((a: any, b: any) => (a[prop] > b[prop] ? 1 : -1)));
    /* if (isDown) {
      const findItem = tableHeaders.find((item: any) => item.prop === prop);

      } */
  };

  // 渲染折叠的子组件
  const renderCollapseChildren = () => {
    let array: any = [];
    if (!props.children?.length) {
      array.push(props.children);
    } else {
      array = props.children;
    }

    let widthObject: any = {};
    const textPositionObject: any = {};
    const verticalAlignObject: any = {};
    array.forEach((item: any) => {
      if (item?.props) {
        widthObject[item.props.prop] = item.props.width;
        textPositionObject[item.props.prop] =
          item.props.textPosition || "center";
        verticalAlignObject[item.props.prop] =
          item.props.verticalAlign || "middle";
      }
    });
    if (Object.values(widthObject).every((item: any) => !item)) {
      widthObject = calculateHeaderWidth(array);
    } else {
    }
    return (
      <>
        <thead
          style={{
            position: headSticky ? "sticky" : "unset",
            top: 0,
            backgroundColor: `${headBGC}`,
            zIndex: 999,
          }}
          className={`text-${headTextColor}`}
        >
          <tr>
            {/* 头部 */}
            {collection && (
              <>
                {/* 复选框 */}
                <th scope="col" style={{ width: "50px" }}>
                  {!single && (
                    <input
                      checked={checkedAll}
                      onChange={handleCheckedAllChange}
                      type={single ? "radio" : "checkbox"}
                    />
                  )}
                </th>
              </>
            )}
            {/* 索引 */}
            {showIndex && (
              <>
                {/* 索引框 */}
                <th scope="col" style={{ minWidth: "50px" }}></th>
              </>
            )}
            {array &&
              array.map((child: any, rowIndex: number) => {
                if (child?.props) {
                  return (
                    <th
                      style={{
                        whiteSpace: "nowrap",
                        width:
                          widthObject[(child as React.ReactElement).props.prop],
                      }}
                      className={`${
                        "text-" + textPositionObject[child.props.prop]
                      }`}
                      scope="col"
                      key={child.props.label}
                    >
                      <div
                        className="header-content"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: generateHeaderStyle(
                            textPositionObject[child.props.prop]
                          ),
                        }}
                      >
                        <span className="header-text me-2">
                          {child.props.label}
                        </span>
                        {child.props.sortable && (
                          <span className="header-icon">
                            <i
                              style={{
                                borderBottom:
                                  judgeSortIconBGC(child.props.prop) ||
                                  "7px solid #000",
                              }}
                              onClick={() => handleSortable(child.props.prop)}
                              className="icon sort-up"
                            ></i>
                            <i
                              style={{
                                borderTop:
                                  judgeSortIconBGC(child.props.prop, true) ||
                                  "7px solid #000",
                              }}
                              onClick={() =>
                                handleSortable(child.props.prop, true)
                              }
                              className="icon sort-down"
                            ></i>
                          </span>
                        )}
                      </div>
                    </th>
                  );
                }
              })}
          </tr>
        </thead>
        <tbody className={`${divider ? "table-group-divider" : ""}`}>
          {tableData.length > 0 &&
            tableData.map((data: any, rowIndex: number) => {
              return (
                <Fragment key={data[id]}>
                  <tr
                    onClick={() => handleRowClick(data, rowIndex)}
                    // onDoubleClick={() => handleRowDoubleClick(data)}
                    key={rowIndex}
                    className={`tr-content ${data.checked ? "tr-checked" : ""}`}
                    style={{ ...(trPointer ? { cursor: "pointer" } : "") }}
                  >
                    {collection && (
                      // 复选框
                      <td scope="row" style={{ width: "50px" }}>
                        <input
                          name={data[id]}
                          id={data[id]}
                          checked={data.checked}
                          onChange={(e) => handleCheckboxChange(e, data)}
                          type={single ? "radio" : "checkbox"}
                        />
                      </td>
                    )}
                    {showIndex && (
                      // 索引框
                      <th
                        className="text-center"
                        scope="col"
                        style={{
                          alignContent: "center",
                          padding: "0px",
                          width: "50px",
                          /* ...(data.children ? { backgroundColor: '#fff', boxShadow: 'none' } : {}), */
                        }}
                      >
                        {rowIndex + 1}
                      </th>
                    )}
                    {React.Children.map(array, (child, colIndex) => {
                      let prop = (child as React.ReactElement).props.prop;
                      if (React.isValidElement(child)) {
                        const newChild = child as React.ReactElement;
                        const enhancedChild = React.cloneElement(child, {
                          onCollapseClick: handleCollapseClick,
                          isParent: !colIndex && collapse && data.children,
                          value: data[`${prop}`],
                          rowData: data,
                          eidtable,
                          prop: prop,
                          rowIndex: rowIndex,
                          colIndex: colIndex,
                          canCollapse: data.children,
                          collapse: data.collapse,
                          textPosition,
                          width: widthObject[newChild.props.prop],
                          maxWidth: newChild.props.maxWidth,
                        } as React.Attributes);
                        return (
                          <td
                            className={`${
                              !colIndex && collapse && data.children
                                ? "text-left"
                                : `text-${textPositionObject[prop]}`
                            } `}
                            style={{
                              verticalAlign: verticalAlignObject[prop],
                              width:
                                widthObject[
                                  (child as React.ReactElement).props.prop
                                ],
                              maxWidth:
                                maxWidth ||
                                (child as React.ReactElement).props.maxWidth,
                              overflowWrap: "break-word",
                              wordWrap: "break-word",
                              wordBreak: "break-word",
                              // 如果要默认展示一行，并且x轴太长可以滚动的话，则设置为nowrap
                              // 注意：此时，外部设置的 width就没作用了，表格会自己根据内容来设置宽度
                              whiteSpace: "nowrap",
                              /*  [`${!colIndex && data.children ? 'paddingLeft' : ''}`]: '35px', */
                            }}
                            key={colIndex}
                          >
                            {/* 整个子组件展示的位置 */}
                            <div className="collapse-table-td">
                              {/* {!colIndex && collapse && data.children ? '>' : ''} */}
                              {(child as ReactElement).props.tooltip ? (
                                <Tooltip text={data[prop]}>
                                  {enhancedChild}
                                </Tooltip>
                              ) : (
                                enhancedChild
                              )}
                            </div>
                          </td>
                        );
                      }
                    })}
                  </tr>
                  {/* ***************************************展开行********************************** */}
                  {data.collapse &&
                    data.children &&
                    data.children.map((childData: any, index: number) => (
                      <tr
                        className="collapse-table-tr animate__animated animate__fadeIn"
                        key={childData[id]}
                        /* style={{
                                                  ...(data.collapse ? { display: '' } : { display: 'none' }),
                                              }} */
                      >
                        {/* 复选框框 */}
                        {collection && (
                          <td scope="row" style={{ width: "50px" }}>
                            <input
                              name={childData[id]}
                              id={childData[id]}
                              checked={childData.checked}
                              onChange={(e: any) =>
                                handleCheckboxChange(e, childData)
                              }
                              type={single ? "radio" : "checkbox"}
                            />
                          </td>
                        )}
                        {/* 索引框 */}
                        {showIndex && (
                          <th
                            className="text-center"
                            style={{
                              width: "50px",
                              padding: "0px",
                              alignContent: "center",
                            }}
                          >
                            {`${rowIndex + 1}.${index + 1}`}
                          </th>
                        )}
                        {React.Children.map(array, (child, colIndex) => {
                          let prop = (child as React.ReactElement).props.prop;
                          if (React.isValidElement(child)) {
                            const enhancedChild = React.cloneElement(child, {
                              value: childData[prop],
                              rowData: childData,
                              eidtable,
                              prop: prop,
                              rowIndex: rowIndex,
                              colIndex: colIndex,
                              textPosition,
                            } as React.Attributes);
                            return (
                              <td
                                className={`${
                                  colIndex === 0 ? "text-left" : "text-center"
                                }`}
                                style={{
                                  verticalAlign: verticalAlignObject[prop],
                                  width:
                                    widthObject[
                                      (child as React.ReactElement).props.prop
                                    ],
                                  overflowWrap: "break-word",
                                  wordWrap: "break-word",
                                  wordBreak: "break-word",
                                  [`${!colIndex ? "paddingLeft" : ""}`]: "40px",
                                }}
                                key={colIndex}
                              >
                                <div className="collapse-table-td">
                                  {/* {!colIndex && collapse && data.children ? '>' : ''} */}
                                  {(child as ReactElement).props.tooltip ? (
                                    <Tooltip
                                      position="right"
                                      text={childData[prop]}
                                    >
                                      {enhancedChild}
                                    </Tooltip>
                                  ) : (
                                    enhancedChild
                                  )}
                                </div>
                              </td>
                            );
                          }
                        })}
                      </tr>
                    ))}
                </Fragment>
              );
            })}
        </tbody>
      </>
    );
  };

  const calculateHeaderWidth = (headerLabels: any[]) => {
    const labelLengthObj: any = {};
    const newHeaderLabels = headerLabels.map((item: any) => {
      return {
        label: item.props.label,
        prop: item.props.prop,
      };
    });

    const totalLabelLength = newHeaderLabels.reduce(
      (acc, curr) => acc + curr.label.length,
      0
    );

    newHeaderLabels.forEach((item: any) => {
      labelLengthObj[item.prop] =
        Number((item.label?.length / totalLabelLength).toFixed(2)) * 100 + "%";
    });

    return labelLengthObj;
  };

  // 选择逻辑
  const [checkedAll, setCheckedAll] = useState<boolean>(false);

  /**
   *
   * 双击选中这条tr
   */
  const handleRowDoubleClick = (row: any) => {
    const finalChecked: boolean = !row.checked;
    setTableData((preArr: any) => {
      return preArr.map((item: any) => {
        if (item[id] === row[id]) {
          item.checked = !item.checked;
        } else {
          if (single) {
            item.checked = false;
          }
        }
        return item;
      });
    });

    if (finalChecked) {
      onRowDoubleClick && onRowDoubleClick(row);
    } else {
      onRowDoubleClick && onRowDoubleClick({});
    }
  };

  /**
   *
   * 单击tr
   */
  const handleRowClick = (row: any, rowIndex?: number) => {
    handleCollapseClick(row, rowIndex!);
    const finalChecked: boolean = !row.checked;
    setTableData((preArr: any) => {
      return preArr.map((item: any) => {
        if (item[id] === row[id]) {
          item.checked = !item.checked;
        } else {
          if (single) {
            item.checked = false;
          }
        }
        return item;
      });
    });

    onRowDoubleClick && onRowDoubleClick(row);
  };

  const handleCheckboxChange = (e: any, row: any) => {
    const checked = e.target.checked;
    row.checked = checked;
    setTableData((preArr: any) => {
      return preArr.map((item: any) => {
        if (item[id] === row[id]) {
          item.checked = checked;
        }
        return item;
      });
    });
    setCheckedAll(areAllChecked(tableData));
  };

  function areAllChecked(data: any[]): any {
    // 遍历数组中的每个对象
    return data?.every((item) => {
      // 检查当前对象的 `checked` 属性
      if (!item.checked) return false;

      // 如果对象有 `children` 属性，递归检查其子对象
      if (item.children) {
        return areAllChecked(item.children);
      }

      return true;
    });
  }

  const handleCheckedAllChange = (e: any) => {
    const checkedAll = e.target.checked;
    setCheckedAll(checkedAll);

    const updateCheckedState = (data: any[]) => {
      return data.map((item: any) => {
        // 更新当前项目的 `checked` 状态
        item.checked = checkedAll;

        // 如果当前项目有 `children` 属性，递归更新其 `children` 的 `checked` 状态
        if (item.children) {
          item.children = updateCheckedState(item.children);
        }

        return item;
      });
    };

    setTableData(updateCheckedState(tableData) as any);
  };

  const handleClearChecked = () => {
    setTableData((preData: any) =>
      preData.map((item: any) => {
        item.checked = false;
        return item;
      })
    );
  };

  useEffect(() => {
    console.log("data: ", data);
    const checkedAll = areAllChecked(data);
    setCheckedAll(checkedAll);
    if (collapse) {
      const tempData = data.map((item: any) => {
        item.collapse = expandAll;
        return item;
      });
      setTableData(tempData);
      setOriginalTableData(tempData);
    } else {
      setTableData(data);
      setOriginalTableData(data);
    }
  }, [data]);

  useEffect(() => {
    setTableData((preData: any) =>
      preData.map((item: any) => {
        if (item[id] === activeId) {
          item.checked = true;
        } else {
          item.checked = false;
        }
        return item;
      })
    );
  }, [activeId]);

  useEffect(() => {
    setTableHeaders(headers);
  }, [headers]);

  /*     useEffect(() => {
      
  }, [tableHeaders]); */

  useImperativeHandle(tableRef, () => ({
    clearChecked: handleClearChecked,
  }));

  return (
    <>
      <div
        style={{ minHeight: minHeight, maxHeight: maxHeight, overflow: "auto" }}
        className={`table-wrapper ${`table-responsive${
          "-" + tableResponsive
        }`}`}
      >
        <table className={cls}>{renderCollapseChildren()}</table>
      </div>
      {JSON.stringify(data)}
    </>
  );
};

Table.TableCell = TableCell;

export default withTranslation()(Table);
