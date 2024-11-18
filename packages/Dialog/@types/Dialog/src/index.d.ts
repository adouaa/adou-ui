import React from "react";
import "./index.scss";
interface DialogProps {
    needDestroy?: boolean;
    maxY?: boolean;
    maxX?: boolean;
    max?: boolean;
    showConfirm?: boolean;
    showCancel?: boolean;
    showClose?: boolean;
    canConfirm?: boolean;
    clickOutside?: boolean;
    confirmText?: string;
    cancelText?: string;
    confirmBtnClass?: string;
    cancelBtnClass?: string;
    show?: boolean;
    title?: string;
    children?: React.ReactNode;
    type?: string;
    maxHeight?: string;
    width?: string;
    height?: string;
    maxWidth?: string;
    onCancel?: () => void;
    onClose?: () => void;
    onConfirm?: () => void;
}
declare const Dialog: React.FC<DialogProps>;
export default Dialog;