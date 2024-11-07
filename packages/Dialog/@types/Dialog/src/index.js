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
const Dialog = ({ showConfirm = true, showCancel = true, showClose = true, canConfirm = true, clickOutside = false, confirmText = "确定", cancelText = "取消", confirmBtnClass = "primary", cancelBtnClass = "secondary", show: isOpen = false, title = "提示", children = null, type = "", maxHeight = "500px", width = "600px", maxWidth, onCancel, onClose = () => { }, onConfirm = () => { }, }) => {
    const dialogRef = (0, react_1.useRef)(null);
    const [show, setShow] = (0, react_1.useState)(false);
    const [isAnimating, setIsAnimating] = (0, react_1.useState)(false);
    const [initialPosition, setInitialPosition] = (0, react_1.useState)({ x: 0, y: 0 });
    const [firstOpen, setFirstOpen] = (0, react_1.useState)(false);
    const { position, handleMouseDown } = (0, useDrag_1.default)(dialogRef, true, false);
    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            onConfirm && onConfirm();
        }
    };
    (0, react_1.useEffect)(() => {
        if (show) {
            if (dialogRef.current) {
                const dialogWidth = dialogRef.current.offsetWidth;
                const dialogHeight = dialogRef.current.offsetHeight;
                const initialX = (window.innerWidth - dialogWidth) / 2;
                const initialY = (window.innerHeight - dialogHeight) / 2;
                dialogRef.current.style.top = `${type === "tip" ? `${initialY}px` : "2%"}`;
                dialogRef.current.style.left = `${initialX}px`;
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
        }
    }, [isOpen, type]);
    (0, useClickOutside_1.default)(dialogRef, clickOutside && onClose);
    return (react_1.default.createElement(react_1.default.Fragment, null, (isOpen || isAnimating) &&
        react_dom_1.default.createPortal(react_1.default.createElement("div", { className: `dialog-overlay ${show ? "open" : ""}` },
            react_1.default.createElement("div", { onKeyDown: handleKeyDown, tabIndex: 0, ref: dialogRef, className: `dialog ${show ? "open" : ""}`, style: {
                    top: `${position.y - 20}px`,
                    left: `${position.x}px`,
                    transform: `translateY(${firstOpen ? "20px" : "0"})`,
                    width,
                    maxWidth,
                } },
                react_1.default.createElement("div", { className: "dialog-header p-2 ps-3", onMouseDown: handleMouseDown },
                    react_1.default.createElement("span", { className: "fs-5" }, title),
                    showClose && (react_1.default.createElement("button", { className: "dialog-close hover-scale", onClick: onClose }, "\u00D7"))),
                react_1.default.createElement("div", { className: "dialog-content", style: { maxHeight } }, children),
                react_1.default.createElement("div", { className: "dialog-footer d-flex justify-content-end p-3" },
                    showCancel && (react_1.default.createElement(Button_1.default, { className: `me-2 btn-${cancelBtnClass}`, size: "md", onClickOK: onCancel ?? onClose }, cancelText)),
                    showConfirm && (react_1.default.createElement(Button_1.default, { disabled: !canConfirm, className: `btn-${confirmBtnClass}`, size: "md", onClickOK: onConfirm }, confirmText))))), document.body)));
};
exports.default = Dialog;
//# sourceMappingURL=index.js.map