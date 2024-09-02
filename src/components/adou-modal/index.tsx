import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

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

const Modal: React.FC<ModalProps> = ({
    type,
    title,
    show,
    children,
    confirmText,
    cancelText,
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
        setVisible(false);
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

    const handleMouseMove = (e: MouseEvent) => {
        if (dragging && modalRef.current) {
            const x = e.clientX; // 鼠标相对于视口的位置
            const y = e.clientY + 60;
            /* 
                不能 - offset.x 和 offset.y，导致 handleMouseDown下的 setOff也没啥用
                modalRef.current.style.left = `${x - offset.x}px`;
                modalRef.current.style.top = `${y - offset.y}px`; 
            */
            modalRef.current.style.left = `${x}px`;
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
            // setDragging(false); 当鼠标弹起来的时候，会执行这个useEffect，就会移除window的事件监听器，否则会一直执行
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [dragging]);

    return (
        <>
            {/* 
            注意：展示的时候要先让整个 modal先 display: block，先在html结构中存在，然后再给它一个 show的类名
                  关闭的的时候，要先 移除掉show的类名，然后再让整个 modal在结构中消失，即 display: none
                  并且，要用 父组件传递的show && 来判断是否展示整个 div，不能用 visible，不然就同步了
                  一定要记住先后原则：展示--先出现，再添加类名【show】 消失--先移除类名【show】，再消失。（不能两者一起添加或消失）
                  否则，就不会有一个动画效果
        */}
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
                                top: type === 'tips' ? '50%' : '30%',
                                transform: 'translate(-50%, -50%)',
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
                                    <div className="modal-body" style={overflowY ? { maxHeight: maxHeight, overflowY: 'auto' } : {}}>
                                        {children || '内容'}
                                    </div>
                                    <div className="modal-footer">
                                        {showCancel && (
                                            <button type="button" className="btn btn-secondary" onClick={handleOnCancel}>
                                                {cancelText || '取消'}
                                            </button>
                                        )}
                                        {showConfirm && (
                                            <button type="button" className="btn btn-primary" onClick={handleOnConfirm}>
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
