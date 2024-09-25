import React from "react";
import "./index.scss";
interface DialogProps {
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
    maxWidth?: string;
    onCancel?: () => void;
    onClose?: () => void;
    onConfirm?: () => void;
}
declare const Dialog: React.FC<DialogProps>;
export default Dialog;
