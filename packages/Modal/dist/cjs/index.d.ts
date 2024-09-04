import React from "react";
export interface ModalProps {
    type?: string;
    title?: string;
    show: boolean;
    children?: any;
    confirmText?: string;
    cancelText?: string;
    maxHeight?: any;
    overflowY?: boolean;
    width?: string;
    showConfirm?: boolean;
    showCancel?: boolean;
    onCancel?: () => void;
    onClose?: () => void;
    onConfirm?: () => void;
}
declare const Modal: React.FC<ModalProps>;
export default Modal;
