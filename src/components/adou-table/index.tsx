import classNames from 'classnames';
import React, { Fragment, useEffect, useImperativeHandle, useState } from 'react';
import EditableTableCell from './adou-editableTableCell';
import './index.scss';

export { EditableTableCell };

interface TableProps {
    width?: any; // 控制 table的宽度，太宽的话 可以形成滚动条
    tableBgc?: any;
    tableRef?: any;
    activeId?: number | string;
    maxWidth?: any;
    showIndex?: boolean;
    single?: boolean;
    id?: string;
    trPointer?: boolean;
    textPosition?: 'center' | 'left' | 'right' | 'justify';
    verticalAlign?: 'top' | 'middle' | 'bottom';
    collection?: boolean;
    collapse?: boolean;
    expandAll?: boolean;
    eidtable?: boolean;
    size?: 'lg' | 'sm';
    data: any;
    tableStriped?: boolean;
    tableBorderd?: boolean;
    tableBorderless?: boolean;
    headColor?: 'light' | 'dark';
    tableResponsive?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    children?: any;
    headSticky?: boolean;
    headTextColor?: string;
    headBGC?: any;
    divider?: boolean;
    maxHeight?: string;
    minHeight?: string;
    onEditOK?: (data: any) => void;
    onRowDoubleClick?: (row: any) => void;
    onRowClick?: (row: any) => void;
    onClearSelected?: () => void;
}

const Table = (props: TableProps) => {
    const {
        width, // 控制 table的宽度，太宽的话 可以形成滚动条
        tableBgc,
        tableRef,
        activeId,
        maxWidth,
        showIndex = true,
        single = true,
        id = 'id',
        trPointer = true,
        textPosition,
        verticalAlign,
        collection,
        collapse,
        expandAll = true,
        size = 'lg',
        data,
        tableStriped = true,
        tableBorderd = false,
        tableBorderless = false,
        headColor = 'null',
        tableResponsive = 'xxl',
        eidtable = false,
        headSticky = true,
        headTextColor = 'white',
        headBGC = '#2782d7',
        divider,
        maxHeight = '500px',
        minHeight = '0px',
        onRowDoubleClick,
        onRowClick,
    } = props;

    const cls = classNames({
        table: true,
        'table-striped': tableStriped,
        // "table-hover": tableHover, 加上这句话就没有动画效果了
        'table-bordered': tableBorderd,
        'table-borderless': tableBorderless,
        [`table-${size}`]: true,
        [`table-${headColor}`]: true,
        'mb-0': true,
    });

    const [tableData, setTableData] = useState([]);

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
                textPositionObject[item.props.prop] = item.props.textPosition || textPosition || 'center';
                verticalAlignObject[item.props.prop] = item.props.verticalAlign || verticalAlign || 'middle';
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
                        position: headSticky ? 'sticky' : 'unset',
                        top: 0,
                        backgroundColor: `${headBGC || tableBgc} `,
                        zIndex: 999,
                    }}
                    className={`text-${headTextColor}`}
                >
                    <tr>
                        {/* 头部 */}
                        {collection && (
                            <>
                                {/* 复选框 */}
                                <th scope="col" style={{ width: '50px' }}>
                                    {!single && <input checked={checkedAll} onChange={handleCheckedAllChange} type={single ? 'radio' : 'checkbox'} />}
                                </th>
                            </>
                        )}
                        {/* 索引 */}
                        {showIndex && (
                            <>
                                {/* 索引框 */}
                                <th scope="col" style={{ minWidth: '50px' }}></th>
                            </>
                        )}
                        {array &&
                            array.map((child: any, rowIndex: number) => {
                                if (child?.props) {
                                    return (
                                        <th
                                            style={{
                                                whiteSpace: 'nowrap',
                                                width: widthObject[(child as React.ReactElement).props.prop],
                                            }}
                                            className={`${'text-' + textPositionObject[child.props.prop]}`}
                                            scope="col"
                                            key={child.props.label}
                                        >
                                            {child.props.label}
                                        </th>
                                    );
                                }
                            })}
                    </tr>
                </thead>
                {tableData.length > 0 ? (
                    <tbody className={`${divider ? 'table-group-divider' : ''}`}>
                        {tableData.map((data: any, rowIndex: number) => {
                            return (
                                <Fragment /* key={data[id]} */ key={rowIndex}>
                                    <tr
                                        onClick={() => handleRowClick(data)}
                                        // onDoubleClick={() => handleRowDoubleClick(data)}
                                        // key={rowIndex}
                                        className={`tr-content ${data.checked ? 'tr-checked' : ''}`}
                                        style={{ ...(trPointer ? { cursor: 'pointer' } : '') }}
                                    >
                                        {collection && (
                                            // 复选框
                                            <td scope="row" style={{ width: '50px' }}>
                                                <input
                                                    name={data[id]}
                                                    id={data[id]}
                                                    checked={data.checked}
                                                    onChange={(e) => handleCheckboxChange(e, data)}
                                                    type={single ? 'radio' : 'checkbox'}
                                                />
                                            </td>
                                        )}
                                        {showIndex && (
                                            // 索引框
                                            <th
                                                className="text-center"
                                                scope="col"
                                                style={{
                                                    alignContent: 'center',
                                                    padding: '0px',
                                                    width: '50px',
                                                    ...(data.children ? { backgroundColor: '#fff', boxShadow: 'none' } : {}),
                                                }}
                                            >
                                                {rowIndex + 1}
                                            </th>
                                        )}
                                        {React.Children.map(array, (child, colIndex) => {
                                            let prop = (child as React.ReactElement).props.prop;
                                            if (React.isValidElement(child)) {
                                                const enhancedChild = React.cloneElement(child, {
                                                    onCollapseClick: handleCollapseClick,
                                                    value: data[`${prop}`],
                                                    rowData: data,
                                                    eidtable,
                                                    prop: prop,
                                                    rowIndex: rowIndex,
                                                    colIndex: colIndex,
                                                    canCollapse: data.children,
                                                    collapse: collapse,
                                                    textPosition,
                                                    width: widthObject[(child as React.ReactElement).props.prop],
                                                } as React.Attributes);
                                                return (
                                                    <td
                                                        className={`${'text-' + textPositionObject[prop]} `}
                                                        style={{
                                                            verticalAlign: verticalAlignObject[prop],
                                                            width: widthObject[(child as React.ReactElement).props.prop],
                                                            maxWidth: maxWidth || (child as React.ReactElement).props.maxWidth,
                                                            overflowWrap: 'break-word',
                                                            wordWrap: 'break-word',
                                                            wordBreak: 'break-word',
                                                            // 如果要默认展示一行，并且x轴太长可以滚动的话，则设置为nowrap
                                                            // 注意：此时，外部设置的 width就没作用了，表格会自己根据内容来设置宽度
                                                            whiteSpace: 'nowrap',
                                                            [`${!colIndex && data.children ? 'paddingLeft' : ''}`]: '35px',
                                                        }}
                                                        key={colIndex}
                                                    >
                                                        <div className="d-flex collapse-table-td">
                                                            {!colIndex && collapse && data.children ? '' : ''}
                                                            {enhancedChild}
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
                                                className="collapse-table-tr"
                                                key={childData[id]}
                                                style={{
                                                    [`${!data.collapse ? 'display' : ''}`]: 'none',
                                                }}
                                            >
                                                {/* 复选框框 */}
                                                {collection && (
                                                    <td scope="row" style={{ width: '50px' }}>
                                                        <input
                                                            name={childData[id]}
                                                            id={childData[id]}
                                                            checked={childData.checked}
                                                            onChange={(e: any) => handleCheckboxChange(e, childData)}
                                                            type={single ? 'radio' : 'checkbox'}
                                                        />
                                                    </td>
                                                )}
                                                {/* 索引框 */}
                                                {showIndex && (
                                                    <th
                                                        className="text-center"
                                                        style={{
                                                            width: '50px',
                                                            padding: '0px',
                                                            alignContent: 'center',
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
                                                                className={`${'text-' + textPositionObject[prop]}`}
                                                                style={{
                                                                    verticalAlign: verticalAlignObject[prop],
                                                                    width: widthObject[(child as React.ReactElement).props.prop],
                                                                    overflowWrap: 'break-word',
                                                                    wordWrap: 'break-word',
                                                                    wordBreak: 'break-word',
                                                                    [`${!colIndex ? 'paddingLeft' : ''}`]: '60px',
                                                                }}
                                                                key={colIndex}
                                                            >
                                                                {enhancedChild}
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
                ) : null}
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

        const totalLabelLength = newHeaderLabels?.reduce((acc, curr) => acc + curr.label?.length, 0);

        newHeaderLabels.forEach((item: any) => {
            labelLengthObj[item.prop] = Number((item.label?.length / totalLabelLength).toFixed(2)) * 100 + '%';
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
    const handleRowClick = (row: any) => {
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

        onRowClick && onRowClick(row);
    };

    const handleCheckboxChange = (e: any, row: any) => {
        const checked = e.target.checked;
        row.checked = checked;
        setTableData((preArr: any) => {
            return preArr.map((item: any) => {
                if (item[id] === row[id]) {
                    console.log('jinlaile: ');
                    item.checked = checked;
                }
                return item;
            });
        });
        setCheckedAll(areAllChecked(tableData));
    };

    function areAllChecked(data: any[]): any {
        if (!data.length || !data) return false;
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

    const handleGetCheckedList = () => {
        return tableData.filter((item: any) => item.checked);
    };

    useEffect(() => {
        const checkedAll = areAllChecked(data);
        setCheckedAll(checkedAll);
        if (collapse) {
            setTableData(
                data.map((item: any) => {
                    item.collapse = expandAll;
                    return item;
                })
            );
        } else {
            setTableData(data);
        }
    }, [data]);

    useEffect(() => {
        setTableData((preData: any) =>
            preData.map((item: any) => {
                // 判断 id 是否存在，如果 id 不存在，并且 activeId 也不存在，那也是相等的，得排除
                if (item[id] && item[id] === activeId) {
                    item.checked = true;
                } else {
                    item.checked = false;
                }
                return item;
            })
        );
    }, [activeId, data]);

    useImperativeHandle(tableRef, () => ({
        clearChecked: handleClearChecked,
        getCheckedList: handleGetCheckedList,
    }));

    return (
        <>
            <div style={{ minHeight: minHeight, maxHeight: maxHeight, overflow: 'auto' }} className={`table-wrapper ${`table-responsive${'-' + tableResponsive}`}`}>
                <table style={{ background: tableBgc, width }} className={cls}>
                    {renderCollapseChildren()}
                </table>
                {tableData.length === 0 && <div className="text-center py-2">暂无数据~</div>}
            </div>
        </>
    );
};

Table.EditableTableCell = EditableTableCell;

export default Table;
