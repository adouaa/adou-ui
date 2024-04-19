import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { withTranslation } from "react-i18next"
import EditableTableCell from "./adou-editableTableCell";
export {EditableTableCell}

interface TableProps {
    eidtable?: boolean,
    size?: "lg" | "sm",
    data: any,
    headLabels?: any,
    propsData?: any,
    tableHover?: boolean,
    tableStriped?: boolean,
    tableBorderd?: boolean,
    tableBorderless?: boolean,
    headColor?: "light" | "dark",
    align?: "top" | "middle" | "bottom",
    captionContent?: any,
    captionPosition?: "top" | "bottom",
    tableResponsive?: "sm" | "md" | "lg" | "xl" | "xxl",
    children?: any,

    onEditOK?: (data: any) => void,
}

const Table = (props: TableProps) => {

    const {
        children,
        size = "lg",
        data,
        headLabels,
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
    } = props;

    const cls = classNames({
        "table": true,
        "table-striped": tableStriped,
        "table-hover": tableHover,
        "table-bordered": tableBorderd,
        "table-borderless": tableBorderless,
        [`table-${size}`]: true,
        [`caption-${captionPosition}`]: true,
        [`table-${headColor}`]: true,
    })

    const [tabelData, setTableData] = useState(data || []);

    // 控制渲染的子组件
    const renderChildren = () => {
        // 兼容，不知道为什么children只有一个的话会被当做是 对象来处理。。
        let array: any = [];
        if (!props.children.length) {
          array.push(props.children);
        } else {
          array = props.children;
        }
        
        return <>
            <thead className={`${headColor} && table-${headColor}`}>
                <tr>
                    {/* 头部 */}
                    {array && array.map((child: any) => {
                        return <th scope="col" key={child.props.label}>{child.props.label}</th>
                    })}
                </tr>

            </thead>
            <tbody className="table-group-divider">
                {tabelData.map((data: any, rowIndex: number) => {
                    return <tr key={rowIndex}>
                        {React.Children.map(array, (child, colIndex) => {
                            if (React.isValidElement(child)) {
                                const enhancedChild = React.cloneElement(child, {
                                    value: data[`${(child as React.ReactElement).props.prop}`],
                                    rowData: data,
                                    eidtable,
                                    prop: (child as React.ReactElement).props.prop,
                                    rowIndex: rowIndex,
                                    colIndex: colIndex
                                } as React.Attributes);
                                return <td key={colIndex}>{enhancedChild}</td>;
                            }
                        })}
                    </tr>
                })}
            </tbody></>



    }


    const handleTdClick = (content: any, prop: string) => {
    }

    const handleTdDoubleClick = (e: any, content: any, prop: string) => {

    }

    const handleEditOK = (rowIndex: number, prop: string, value: string) => {
       
    }

    useEffect(() => {
        setTableData(data);
    }, [data])

    return <>
        <div className={`table-wrapper ${`table-responsive${"-" + tableResponsive}`}`}>
            <table className={cls}>
                <caption>{captionContent}</caption>
                {renderChildren()}
            </table>
        </div>
    </>
}

Table.EditableTableCell = EditableTableCell;

export default withTranslation()(Table);