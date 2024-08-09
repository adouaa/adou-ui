import classNames from 'classnames';
import React, { Fragment, useEffect, useState } from 'react';
import { withTranslation } from 'react-i18next';
import EditableTableCell from './adou-editableTableCell';
import './index.scss';

export { EditableTableCell };

interface TableProps {
    collection?: boolean;
    collapse?: boolean;
    expandAll?: boolean;
    eidtable?: boolean;
    size?: 'lg' | 'sm';
    data: any;
    headLabels?: any;
    propsData?: any;
    tableHover?: boolean;
    tableStriped?: boolean;
    tableBorderd?: boolean;
    tableBorderless?: boolean;
    headColor?: 'light' | 'dark';
    align?: 'top' | 'middle' | 'bottom';
    captionContent?: any;
    captionPosition?: 'top' | 'bottom';
    tableResponsive?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    children?: any;
    headSticky?: boolean;
    headTextColor?: string;
    headBGC?: any;
    divider?: boolean;
    maxHeight?: string;
    minHeight?: string;
    onEditOK?: (data: any) => void;
}

const Table = (props: TableProps) => {
    const {
        collection,
        collapse,
        expandAll = true,
        size = 'lg',
        data,
        headLabels,
        propsData,
        tableHover = true,
        tableStriped = true,
        tableBorderd = false,
        tableBorderless = false,
        headColor = 'null',
        captionContent,
        captionPosition = 'top',
        tableResponsive = 'xxl',
        eidtable = false,
        headSticky = true,
        headTextColor = 'white',
        headBGC = '#2782d7',
        divider,
        maxHeight,
        minHeight = '300px',
    } = props;

    const cls = classNames({
        table: true,
        'table-striped': tableStriped,
        'table-hover': tableHover,
        'table-bordered': tableBorderd,
        'table-borderless': tableBorderless,
        [`table-${size}`]: true,
        [`table-${headColor}`]: true,
    });

    const [tabelData, setTableData] = useState([]);

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
        console.log(array);

        let widthObject: any = {};
        const textPositionObject: any = {};
        const verticalAlignObject: any = {};
        array.forEach((item: any) => {
            if (item?.props) {
                widthObject[item.props.prop] = item.props.width;
                textPositionObject[item.props.prop] = item.props.textPosition || 'center';
                verticalAlignObject[item.props.prop] = item.props.verticalAlign || 'middle';
            }
        });
        if (Object.values(widthObject).every((item: any) => !item)) {
            widthObject = calculateHeaderWidth(array);
        } else {
        }
        return (
            <>
                <thead style={{ position: headSticky ? 'sticky' : 'unset', top: 0, backgroundColor: `${headBGC}`, zIndex: 999 }} className={`text-${headTextColor}`}>
                    <tr>
                        {/* 头部 */}
                        {collection && (
                            <>
                                {/* 复选框 */}
                                <th scope="col" style={{ width: '50px' }}>
                                    <input type="checkbox" />
                                </th>
                            </>
                        )}
                        {array &&
                            array.map((child: any, rowIndex: number) => {
                                if (child?.props) {
                                    return (
                                        <th
                                            style={{ width: widthObject[(child as React.ReactElement).props.prop] }}
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
                <tbody className={`${divider && 'table-group-divider'}`}>
                    {tabelData.length > 0 &&
                        tabelData.map((data: any, rowIndex: number) => {
                            return (
                                <Fragment key={data.teamId}>
                                    <tr key={rowIndex}>
                                        {collection && (
                                            <td scope="row" style={{ width: '50px' }}>
                                                <input type="checkbox" />
                                            </td>
                                        )}
                                        {React.Children.map(array, (child, colIndex) => {
                                            let prop = (child as React.ReactElement).props.prop;
                                            if (React.isValidElement(child)) {
                                                const enhancedChild = React.cloneElement(child, {
                                                    value: data[`${prop}`],
                                                    rowData: data,
                                                    eidtable,
                                                    prop: prop,
                                                    rowIndex: rowIndex,
                                                    colIndex: colIndex,
                                                    canCollapse: data.children,
                                                    collapse: collapse,
                                                    width: widthObject[(child as React.ReactElement).props.prop],
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
                                                        }}
                                                        key={colIndex}
                                                    >
                                                        <div className="d-flex collapse-table-td">
                                                            {!colIndex && collapse && data.children ? (
                                                                <i
                                                                    onClick={() => handleCollapseClick(data, rowIndex)}
                                                                    className={`fa-solid ${data.collapse ? 'rotate-down' : ''} collapse-icon fa-chevron-right me-2`}
                                                                ></i>
                                                            ) : (
                                                                ''
                                                            )}
                                                            {enhancedChild}
                                                        </div>
                                                    </td>
                                                );
                                            }
                                        })}
                                    </tr>
                                    {/* 展开行 */}
                                    {data.collapse &&
                                        data.children &&
                                        data.children.map((member: any) => (
                                            <tr className="collapse-table-tr" key={member.teamId} style={{ [`${!data.collapse ? 'display' : ''}`]: 'none' }}>
                                                {collection && (
                                                    <td scope="row" style={{ width: '50px' }}>
                                                        <input type="checkbox" />
                                                    </td>
                                                )}
                                                {React.Children.map(array, (child, colIndex) => {
                                                    let prop = (child as React.ReactElement).props.prop;
                                                    if (React.isValidElement(child)) {
                                                        const enhancedChild = React.cloneElement(child, {
                                                            value: member[prop],
                                                            rowData: member,
                                                            eidtable,
                                                            prop: prop,
                                                            rowIndex: rowIndex,
                                                            colIndex: colIndex,
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
                                                                    paddingLeft: '20px',
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
            </>
        );
    };

    const calculateHeaderWidth = (headerLabels: any[]) => {
        const labelLengthObj = {};
        const newHeaderLabels = headerLabels.map((item: any) => {
            return {
                label: item.props.label,
                prop: item.props.prop,
            };
        });

        const totalLabelLength = newHeaderLabels.reduce((acc, curr) => acc + curr.label.length, 0);

        newHeaderLabels.forEach((item: any) => {
            labelLengthObj[item.prop] = Number((item.label?.length / totalLabelLength).toFixed(2)) * 100 + '%';
        });

        return labelLengthObj;
    };

    useEffect(() => {
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

    return (
        <>
            <div style={{ minHeight: minHeight, maxHeight: maxHeight, overflow: 'auto' }} className={`table-wrapper ${`table-responsive${'-' + tableResponsive}`}`}>
                <table className={cls}>{renderCollapseChildren()}</table>
            </div>
        </>
    );
};

Table.EditableTableCell = EditableTableCell;

export default withTranslation()(Table);
