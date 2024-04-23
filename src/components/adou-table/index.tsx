import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { withTranslation } from "react-i18next"
import EditableTableCell from "./adou-editableTableCell";
export { EditableTableCell }

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
    headSticky?: boolean,
    headTextColor?: string,
    headBGC?: any,
    divider?: boolean,
    maxHeight?: any,
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
        headSticky = true,
        headTextColor = "white",
        headBGC = "#2782d7",
        divider,
        maxHeight
    } = props;

    const cls = classNames({
        "table": true,
        "table-striped": tableStriped,
        "table-hover": tableHover,
        "table-bordered": tableBorderd,
        "table-borderless": tableBorderless,
        [`table-${size}`]: true,
        // [`caption-${captionPosition}`]: true,
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
        // 收集子组件的宽度属性、text位置属性、vertical-align属性
        const widthObject: any = {};
        const textPositionObject: any = {};
        const verticalAlignObject: any = {};
        array.forEach((item: any) => {
            widthObject[item.props.prop] = item.props.width;
            textPositionObject[item.props.prop] = item.props.textPosition;
            verticalAlignObject[item.props.prop] = item.props.verticalAlign;
        })


        return <>
            <thead style={{ position: headSticky ? "sticky" : "unset", top: 0, backgroundColor: `${headBGC}`, zIndex: 999 }} className={`text-${headTextColor}`}>
                <tr>
                    {/* 头部 */}
                    {array && array.map((child: any, rowIndex: number) => {
                        return <th className={`${"text-" + textPositionObject[child.props.prop]}`} scope="col" key={child.props.label}>{child.props.label}</th>
                    })}
                </tr>

            </thead>
            <tbody className={`${divider && "table-group-divider"}`}>
                {tabelData.map((data: any, rowIndex: number) => {
                    return <tr key={rowIndex}>
                        {React.Children.map(array, (child, colIndex) => {
                            let prop = (child as React.ReactElement).props.prop;
                            if (React.isValidElement(child)) {
                                const enhancedChild = React.cloneElement(child, {
                                    value: data[`${prop}`],
                                    rowData: data,
                                    eidtable,
                                    prop: prop,
                                    rowIndex: rowIndex,
                                    colIndex: colIndex
                                } as React.Attributes);
                                return <td className={`${"text-" + textPositionObject[prop]}`} style={{ verticalAlign: verticalAlignObject[prop], width: widthObject[(child as React.ReactElement).props.prop], overflowWrap: "break-word", wordWrap: "break-word", wordBreak: "break-word" }} key={colIndex}>{enhancedChild}</td>;
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
        <div style={{ maxHeight, overflow: "auto" }} className={`table-wrapper ${`table-responsive${"-" + tableResponsive}`}`}>
            {/* 不能这里边写东西了，因为 Table下的thead是用 sticky定位，
              粘性效果top: 0是相对于它的最近滚动祖先容器，即上边的div
              如果没给 上边的div 设置垂直滚动的话，就会去找往上找有 垂直滚动的祖先元素。。
              当滚动到特定位置 top: 0时变为固定定位，否则保持在正常流中
           */}
            <table className={cls}>
                {renderChildren()}
            </table>
        </div>
    </>
}

Table.EditableTableCell = EditableTableCell;

export default withTranslation()(Table);