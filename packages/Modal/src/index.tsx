import React, { useEffect, useState } from "react";
import { withTranslation } from "react-i18next";

// import "./index.css";

interface ModalProps {
    title?: string;
    show: boolean;
    content?: string;
    confirmText?: string,
    cancelText?: string,
    maxHeight?: number;
    overflowY?: boolean;
    onCancel?: () => void;
    onClose?: () => void;
    onConfirm?: () => void;
}
const Modal: React.FC<ModalProps> = ({
    title,
    show,
    content,
    confirmText,
    cancelText,
    maxHeight,
    overflowY,
    onCancel,
    onClose,
    onConfirm
}) => {

    const [visible, setVisible] = useState(false);

    const handleOnClose = () => {
        setVisible(false)
        setTimeout(() => {
            onClose && onClose();
        }, 100);
    }

    const handleOnCancel = () => {
        setVisible(false);
        setTimeout(() => {
            onCancel && onCancel();
        }, 100);
    }

    const handleOnConfirm = () => {
        setVisible(false);
        setTimeout(() => {
            onConfirm && onConfirm();
        }, 100);
    }

    useEffect(() => {
        setTimeout(() => {
            setVisible(show);
        }, 100);
    }, [show])

    return (
        <>
        {/* 
            注意：展示的时候要先让整个 modal先 display: block，先在html结构中存在，然后再给它一个 show的类名
                  关闭的的时候，要先 移除掉show的类名，然后再让整个 modal在结构中消失，即 display: none
                  并且，要用 父组件传递的show && 来判断是否展示整个 div，不能用 visible，不然就同步了
                  一定要记住先后原则：展示--先出现，再添加类名【show】 消失--先移除类名【show】，再消失。（不能两者一起添加或消失）
                  否则，就不会有一个动画效果
        */}
            {show && <div>
                <div className={`modal fade ${visible ? "show " : ""}`} style={{ display: show ? "block" : "none" }} id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">{title || "Modal title"}</h5>
                                <button onClick={handleOnClose} type="button" className="btn-close" aria-label="Close"></button>
                            </div>
                            <div className="modal-body" style={overflowY ? { maxHeight: maxHeight || "60vh", overflowY: "auto" } : {}}> {/* 设置最大高度和滚动条 */}
                                {content || "..."}
                            </div>
                            <div className="modal-footer">
                                {<button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleOnCancel}>{cancelText || "关闭"}</button>}
                                {<button type="button" className="btn btn-primary" onClick={handleOnConfirm}>{confirmText || "确定"}</button>}
                            </div>
                        </div>
                    </div>
                </div>
                {visible ? <div className={`modal-backdrop fade ${visible && 'show'}`}></div> : null}
            </div>}
        </>
    );
};

export default withTranslation()(Modal);
