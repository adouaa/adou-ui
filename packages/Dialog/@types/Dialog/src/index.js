"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
const useDrag_1 = __importDefault(require("../../Utils/src/hooks/useDrag"));
const useClickOutside_1 = __importDefault(require("../../Utils/src/hooks/useClickOutside"));
const Button_1 = __importDefault(require("adou-ui/Button"));
require("./index.scss");
const Dialog = ({ confirmWhenEnter = true, draggble, confirmBtnLoading, needDestroy = false, maxY, maxX, max, showConfirm = true, showCancel = true, showClose = true, canConfirm = true, clickOutside = false, confirmText = "确定", cancelText = "取消", confirmBtnClass = "primary", cancelBtnClass = "secondary", show: isOpen = false, title = "提示", children = null, type = "", maxHeight = "400px", width = "600px", height, maxWidth, onCancel, onClose = () => { }, onConfirm = () => { }, }) => {
    const dialogRef = (0, react_1.useRef)(null);
    const triggerRef = (0, react_1.useRef)(null);
    const [show, setShow] = (0, react_1.useState)(false);
    const [destroied, setDestroied] = (0, react_1.useState)(false);
    const [isAnimating, setIsAnimating] = (0, react_1.useState)(false);
    const [initialPosition, setInitialPosition] = (0, react_1.useState)({ x: 0, y: 0 });
    const [firstOpen, setFirstOpen] = (0, react_1.useState)(false);
    const { position, handleMouseDown } = (0, useDrag_1.default)(triggerRef, dialogRef, draggble && !max, false);
    const handleKeyDown = (event) => {
        if (!confirmWhenEnter) {
            return;
        }
        if (event.key === "Enter") {
            onConfirm && onConfirm();
        }
        else if (event.key === "Escape") {
            onClose && onClose();
        }
    };
    (0, react_1.useEffect)(() => {
        if (show) {
            if (dialogRef.current) {
                const dialogWidth = dialogRef.current.offsetWidth;
                const dialogHeight = dialogRef.current.offsetHeight;
                const initialX = (window.innerWidth - dialogWidth) / 2;
                const initialY = (window.innerHeight - dialogHeight) / 2;
                // 如果对 Y轴 没有要求，则按 type 来定位
                if (!maxY && !max) {
                    // 减去20是因为有个 transForm: translateY(20px);
                    dialogRef.current.style.top = `${type === "tip" ? `${initialY - 20}px` : "2%"}`;
                }
                else {
                    // 如果是对 Y轴 有最大要求，则不仅是第一次，每次都要让 Y轴 在浏览器最上面，Y轴 占满整个屏幕
                    dialogRef.current.style.top = `-20px`;
                }
                dialogRef.current.style.left = `${initialX}px`;
                // 注意，这边要给个 100ms 差不多的定时器来确保 dialogRef.current 已经渲染完成
                setTimeout(() => {
                    dialogRef.current.focus(); // 将焦点设置到 modal
                }, 100);
            }
        }
        setTimeout(() => {
            setFirstOpen(show);
        }, 10);
    }, [show]);
    (0, react_1.useEffect)(() => {
        if (isOpen) {
            setDestroied(false);
            setTimeout(() => {
                setShow(isOpen);
            }, 100);
            setTimeout(() => {
                setIsAnimating(true);
            }, 200);
        }
        else {
            setTimeout(() => {
                setShow(isOpen);
            }, 100);
            // 需要销毁再执行该逻辑
            if (needDestroy) {
                setTimeout(() => {
                    setDestroied(true);
                }, 300); // 注意，延迟时间要 300差不多
            }
        }
    }, [isOpen, type]);
    (0, useClickOutside_1.default)(dialogRef, clickOutside && onClose);
    return (react_1.default.createElement(react_1.default.Fragment, null, (isOpen || isAnimating) &&
        react_dom_1.default.createPortal(react_1.default.createElement("div", { className: `dialog-overlay ${show ? "open" : ""}` }, !destroied && (react_1.default.createElement("div", { onKeyDown: handleKeyDown, tabIndex: 0, ref: dialogRef, className: `dialog ${show ? "open" : ""}`, style: {
                top: `${position.y - 20}px`,
                left: `${position.x}px`,
                transform: `translateY(${firstOpen ? "20px" : "0"})`,
                maxWidth: max || maxX ? "100vw" : width || maxWidth,
                width: max || maxX ? "100vw" : width || maxWidth,
            } },
            react_1.default.createElement("div", { className: "dialog-header px-2 ps-3" },
                react_1.default.createElement("span", { className: "dialog-header-title fs-5" }, title),
                react_1.default.createElement("div", { ref: triggerRef, className: "header-placeholder flex-fill", onMouseDown: draggble && !max ? handleMouseDown : undefined, style: {
                        cursor: draggble && !max ? "move" : "default",
                        height: "56.8px",
                    } }),
                showClose && (react_1.default.createElement("button", { className: "dialog-close hover-scale", onClick: onClose }, "\u00D7"))),
            react_1.default.createElement("div", { className: "dialog-content", style: {
                    maxHeight: max || maxY ? "calc(100vh - 8rem)" : height || maxHeight,
                    height: max || maxY ? "calc(100vh - 8rem)" : height,
                } }, children),
            react_1.default.createElement("div", { className: "dialog-footer d-flex justify-content-end p-3" },
                showCancel && (react_1.default.createElement(Button_1.default, { externalClassName: `me-2 btn-${cancelBtnClass}`, size: "md", onClickOK: onCancel ?? onClose }, cancelText)),
                showConfirm && (react_1.default.createElement(Button_1.default, { loading: confirmBtnLoading, disabled: !canConfirm, externalClassName: `btn-${confirmBtnClass}`, size: "md", onClickOK: onConfirm }, confirmText)))))), document.body)));
};
exports.default = Dialog;
//# sourceMappingURL=index.js.map