import AdouInput from "../../../Input";
import React, { useRef, useState } from "react";
import { withTranslation } from "react-i18next";

interface EditableTableCellProps {
    children?: any;
    prop?: string,
    label?: string,
    rowIndex?: number,
    colIndex?: number,
    value?: string,
    rowData?: any,
    eidtable?: boolean,
    render?: any,
    onChange?: (rowIndex: number, colIndex: number, value: string) => void,
    onEditCancel?: () => void;
    onEditOK?: (value: string) => void;
}

const EditableTableCell = (props: EditableTableCellProps) => {

    const { render, rowData, prop, label, rowIndex, colIndex, value, eidtable, onChange, onEditCancel, onEditOK } = props;

    const [isEditing, setIsEditing] = useState(false);
    const [editedValue, setEditedValue] = useState(value || "");
    const wrapperRef = useRef<any>(null);
    const handleDoubleClick = () => {
        eidtable && setIsEditing(true);
    }

    const handleBlur = (e: any) => {
        const value = e.target.value;
        setIsEditing(false);
        if (true) {
            setEditedValue(value)
            onEditOK && onEditOK(value);
        }

    }
    const handleChange = (e: any) => {
    }
    

    return <>
        {render ? render(value, rowData, rowIndex, prop, colIndex) : <div
            className="edit-able-table-cell-wrapper"
            style={{ display: 'inline-block', overflow: 'hidden' }}
            onDoubleClick={handleDoubleClick}
            ref={wrapperRef}
        >
            {isEditing ? (
                <div style={{
                    width: wrapperRef.current ? `${wrapperRef.current.clientWidth}px` : '100%',
                    boxSizing: 'border-box',
                }}>
                    <AdouInput
                        defaultValue={editedValue}
                        onChangeOK={(e) => handleChange(e)}
                        onBlurOK={(e) => handleBlur(e)}
                    />
                </div>
            ) : (
                <div style={{ minWidth: "100px" }}>{editedValue}</div>
            )}
        </div>}
    </>
}

export default withTranslation()(EditableTableCell);