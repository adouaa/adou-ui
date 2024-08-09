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
    onChange?: (rowIndex: number, colIndex: number, value: string) => void;
    onEditCancel?: () => void;
    onEditOK?: (value: string) => void;
}

const EditableTableCell = (props: EditableTableCellProps) => {
    const { render, canCollapse, collapse, rowData, prop, label, rowIndex, colIndex, value, eidtable, textPosition = 'center', width, onChange, onEditCancel, onEditOK } = props;

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
        <div ref={wrapperRef} className="edit-table-cell-wrapper" style={{ flex: 1 }}>
            {render ? (
                render(editedValue, rowData, rowIndex, prop, colIndex)
            ) : (
                <div
                    className="edit-able-table-cell-content"
                    style={{ display: 'inline-block', overflow: 'hidden', width: widthPx + 'px' }}
                    onDoubleClick={handleDoubleClick}
                    ref={contentRef}
                >
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
                        <div className="edit-table-cell-value" style={{ maxWidth: '100%', [`${collapse && canCollapse && !colIndex ? 'textAlign' : ''}`]: 'left' }}>
                            {value}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default withTranslation()(EditableTableCell);
