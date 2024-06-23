import Button from "components/adou-button";
import React, { useEffect, useState } from "react";
import { withTranslation } from "react-i18next";

interface ModalProps {
    type?: string;
    title?: string;
    show: boolean;
    content?: any;
    confirmText?: string,
    cancelText?: string,
    maxHeight?: number;
    overflowY?: boolean;
    width?: string;
    onCancel?: () => void;
    onClose?: () => void;
    onConfirm?: () => void;
}
const Modal: React.FC<ModalProps> = ({
    type,
    title,
    show,
    content,
    confirmText,
    cancelText,
    maxHeight,
    overflowY,
    width = type === "tip" ? "400px" : "600px",
    onCancel,
    onClose,
    onConfirm
}) => {

    const [visible, setVisible] = useState(false);

    const handleOnClose = () => {
        setVisible(false)
        setTimeout(() => {
            show = false;
            onClose && onClose();
        }, 100);
    }

    const handleOnCancel = () => {
        setVisible(false);
        setTimeout(() => {
            show = false;
            onCancel && onCancel();
        }, 100);
    }

    const handleOnConfirm = () => {
        setTimeout(() => {
            onConfirm && onConfirm();

        }, 100);
    }

    const handleClickOutside = (e: any) => {
        const classNames = e.target.className;

        classNames?.includes("fade") && onClose && onClose();
    }
    useEffect(() => {

        setTimeout(() => {
            setVisible(show);
        }, 100);

    }, [show])

    useEffect(() => {
        window.addEventListener("click", (e) => handleClickOutside(e))
        return () => {
            window.removeEventListener("click", (e) => handleClickOutside(e))
        }
    }, [])

    return (
        <>
            {/* 
            注意：展示的时候要先让整个 modal先 display: block，先在html结构中存在，然后再给它一个 show的类名
                  关闭的的时候，要先 移除掉show的类名，然后再让整个 modal在结构中消失，即 display: none
                  并且，要用 父组件传递的show && 来判断是否展示整个 div，不能用 visible，不然就同步了
                  一定要记住先后原则：展示--先出现，再添加类名【show】 消失--先移除类名【show】，再消失。（不能两者一起添加或消失）
                  否则，就不会有一个动画效果
        */}
            {(show && type === "tip") ?
                <div>
                    <div className={`modal fade ${visible ? "show " : ""}`} style={{ display: show ? "block" : "none" }} id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className={`modal-dialog ${"modal-dialog-centered"}`} style={{ maxWidth: "fit-content" }}>
                            <div className="modal-content" style={{ width: width }}>
                                <div className="modal-header" style={{ padding: "15px 15px 10px", borderBottom: 0 }}>
                                    <h5 style={{ fontSize: "18px", lineHeight: "18px" }} className="modal-title" id="exampleModalLabel">{title || "Modal title"}</h5>
                                    <button onClick={handleOnClose} type="button" className="btn-close" aria-label="Close"></button>
                                </div>
                                <div className="modal-body" style={{
                                    overflowY: overflowY ? "auto" : "visible",
                                    maxHeight: overflowY ? (maxHeight + "px" || "60vh") : "none",
                                    padding: "10px 15px"
                                }}> {/* 设置最大高度和滚动条 */}
                                    {content || "..."}
                                </div>
                                <div className="modal-footer" style={{border: "none", padding: "5px 15px"}}>
                                    {<Button size="sm" className="btn btn-primary" onClickOK={handleOnConfirm}>{confirmText || "确定"}</Button>}
                                </div>
                            </div>
                        </div>
                    </div>
                    {visible ? <div className={`modal-backdrop fade ${visible && 'show'}`}></div> : null}
                </div> :
                <div>
                    <div className={`modal fade ${visible ? "show " : ""}`} style={{ display: show ? "block" : "none" }} id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className={`modal-dialog`} style={{ maxWidth: "fit-content" }}>
                            <div className="modal-content" style={{ width: width }}>
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">{title || "Modal title"}</h5>
                                    <button onClick={handleOnClose} type="button" className="btn-close" aria-label="Close"></button>
                                </div>
                                <div className="modal-body" style={{
                                    overflowY: overflowY ? "auto" : "visible",
                                    maxHeight: overflowY ? (maxHeight + "px" || "60vh") : "none",
                                }}> {/* 设置最大高度和滚动条 */}
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
                </div>
            }
        </>
    );
};

export default withTranslation()(Modal);
