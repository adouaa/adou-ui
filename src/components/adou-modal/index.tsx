import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

export interface ModalProps {
    type?: string;
    title?: string;
    show: boolean;
    children?: any;
    confirmText?: string;
    confirmBtnClass?: string;
    cancelText?: string;
    cancelmBtnClass?: string;
    maxHeight?: any;
    overflowY?: boolean;
    width?: string;
    showConfirm?: boolean;
    showCancel?: boolean;
    onCancel?: () => void;
    onClose?: () => void;
    onConfirm?: () => void;
}

const Modal: React.FC<ModalProps> = ({
    type,
    title,
    show,
    children,
    confirmText,
    confirmBtnClass = 'primary',
    cancelText,
    cancelmBtnClass = 'secondary',
    maxHeight,
    overflowY = true,
    width = '600px',
    showConfirm = true,
    showCancel = true,
    onCancel,
    onClose,
    onConfirm,
}) => {
    const [visible, setVisible] = useState(false);
    const [dragging, setDragging] = useState(false);
    const [offset, setOffset] = useState({ x: 0, y: 0 });
    const modalRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setTimeout(() => {
            setVisible(show);
        }, 100);
    }, [show]);

    const handleOnClose = () => {
        setVisible(false);
        setTimeout(() => {
            onClose && onClose();
        }, 100);
    };

    const handleOnCancel = () => {
        setVisible(false);
        setTimeout(() => {
            onCancel && onCancel();
        }, 100);
    };

    const handleOnConfirm = () => {
        // setVisible(false);
        setTimeout(() => {
            onConfirm && onConfirm();
        }, 100);
    };

    // Drag related functions
    const handleMouseDown = (e: React.MouseEvent) => {
        if (modalRef.current) {
            const rect = modalRef.current.getBoundingClientRect();
            setOffset({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
            setDragging(true);
        }
    };

    // 当 x = e.clientX  并且  modalRef.current.style.left = `${x}px`的时候，鼠标会一直处于模态框头部的中间位置
    // 以下写法可以保证 鼠标在正确的位置，用上 offset 和 width 进行计算，比较合理
    const handleMouseMove = (e: MouseEvent) => {
        if (dragging && modalRef.current) {
            const clientWidth = modalRef.current.clientWidth;
            const x = e.clientX - offset.x;
            const y = e.clientY - offset.y;
            modalRef.current.style.left = `${x + clientWidth / 2}px`;
            modalRef.current.style.top = `${y}px`;
        }
    };

    const handleMouseUp = () => {
        setDragging(false);
    };

    useEffect(() => {
        if (dragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [dragging]);

    useEffect(() => {
        if (modalRef.current && contentRef.current) {
            const contentHeight = contentRef.current.scrollHeight;
            const windowHeight = window.innerHeight;
            const modalHeight = modalRef.current.offsetHeight;
            /* const top =
        contentHeight > windowHeight ? 60 : (windowHeight - modalHeight) / 2; */
            const top = type === 'tip' ? '25%' : '1%';
            modalRef.current.style.top = top;
        }
    }, [visible, children]);

    return (
        <>
            {show &&
                ReactDOM.createPortal(
                    <div>
                        <div
                            ref={modalRef}
                            className={`modal fade ${visible ? 'show ' : ''}`}
                            style={{
                                display: show ? 'block' : 'none',
                                width: 'fit-content',
                                height: 'fit-content',
                                position: 'fixed',
                                left: '50%',
                                transform: 'translate(-50%)',
                            }}
                            id="exampleModal"
                            tabIndex={-1}
                            aria-labelledby="exampleModalLabel"
                        >
                            <div className={`modal-dialog ${type === 'tip' ? 'modal-dialog-centered' : ''}`} style={{ maxWidth: 'fit-content' }}>
                                <div className="modal-content" style={{ width: width, minWidth: '300px' }}>
                                    <div onMouseDown={handleMouseDown} style={{ cursor: 'move' }} className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">
                                            {title || '标题'}
                                        </h5>
                                        <button onClick={handleOnClose} type="button" className="btn-close" aria-label="Close"></button>
                                    </div>
                                    <div ref={contentRef} className="modal-body" style={overflowY ? { maxHeight: maxHeight, overflowY: 'auto' } : {}}>
                                        {children || '内容'}
                                    </div>
                                    <div className="modal-footer">
                                        {showCancel && (
                                            <button type="button" className={`btn btn-${cancelmBtnClass}`} onClick={handleOnCancel}>
                                                {cancelText || '取消'}
                                            </button>
                                        )}
                                        {showConfirm && (
                                            <button type="button" className={`btn btn-${confirmBtnClass}`} onClick={handleOnConfirm}>
                                                {confirmText || '确定'}
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {visible ? <div className={`modal-backdrop fade ${visible && 'show'}`}></div> : null}
                    </div>,
                    document.body
                )}
        </>
    );
};

export default Modal;
