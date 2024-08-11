import AdouInput from '../../adou-new-form/adou-Input';
import React, { useEffect, useRef, useState } from 'react';
import { withTranslation } from 'react-i18next';
import './index.scss';

interface EditableTableCellProps {
    canCollapse?: boolean;
    collapse?: boolean;
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
    textPosition?: 'center' | 'left' | 'right' | 'justify';
    verticalAlign?: 'middle' | 'top' | 'bottom' | 'baseline';
    onCollapseClick?: (rowIndex: number, colIndex: any, value?: string) => void;
    onChange?: (rowIndex: number, colIndex: number, value: string) => void;
    onEditCancel?: () => void;
    onEditOK?: (value: string) => void;
}

const EditableTableCell = (props: EditableTableCellProps) => {
    const {
        render,
        canCollapse,
        collapse,
        rowData,
        prop,
        label,
        rowIndex,
        colIndex,
        value,
        eidtable,
        textPosition = 'center',
        width,
        onChange,
        onEditCancel,
        onEditOK,
        onCollapseClick,
    } = props;

    const [isEditing, setIsEditing] = useState(false);
    const [editedValue, setEditedValue] = useState(value || ''); // 最终展示的值
    const [widthPx, setWidthPx] = useState<number>(0);
    const wrapperRef = useRef<any>(null);
    const contentRef = useRef<any>(null);
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

    // 点击折叠图标的回调
    const handleCollapseClick = () => {
        onCollapseClick && onCollapseClick(rowData, rowIndex);
    };

    // 第一项能够折叠的类名
    const collapseClass = () => {
        switch (textPosition) {
            case 'center':
                return '';

            case 'left':
                return 'edit-table-cell-value-left';

            case 'right':
                return 'edit-table-cell-value-right';
            default:
                break;
        }
    };

    // 这边必须要写一个监听传递过来的value的钩子函数，因为cell展示的值是 editValue
    // 当传递过来的value发生变化时，将它重新赋值给cell要展示的值
    // 如果cell要展示的值是 value，就可以不用写
    useEffect(() => {
        setEditedValue(value!);
    }, [value]);

    useEffect(() => {
        setWidthPx(wrapperRef.current.clientWidth);
    }, [width]);

    return (
        <div ref={wrapperRef} className={`edit-table-cell-wrapper ${canCollapse && collapse && !colIndex ? 'can-collapse' : 'cannot-collapse'}`} style={{ flex: 1 }}>
            {render ? (
                render(editedValue, rowData, rowIndex, prop, colIndex)
            ) : (
                <div className="edit-able-table-cell-content" style={{ overflow: 'hidden', width: widthPx + 'px' }} onDoubleClick={handleDoubleClick} ref={contentRef}>
                    {collapse && canCollapse && !colIndex && (
                        <i onClick={handleCollapseClick} className={`fa-solid ${rowData.collapse ? 'rotate-down' : ''} collapse-icon fa-chevron-right`}></i>
                    )}
                    {isEditing ? (
                        <div
                            style={{
                                width: contentRef.current ? `${contentRef.current.clientWidth}px` : '100%',
                                boxSizing: 'border-box',
                            }}
                        >
                            <AdouInput defaultValue={editedValue} onChange={(e) => handleChange(e)} onBlur={(e) => handleBlur(e)} />
                        </div>
                    ) : (
                        <div className={`edit-table-cell-value text-in-one-line ${collapseClass()}`} style={{ maxWidth: '100%' }}>
                            {value}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default withTranslation()(EditableTableCell);
