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
const react_i18next_1 = require("react-i18next");
const react_dom_1 = __importDefault(require("react-dom"));
const Modal = ({ type, title, show, children, confirmText, cancelText, maxHeight, overflowY, width, showConfirm = true, showCancel = true, onCancel, onClose, onConfirm, }) => {
    const [visible, setVisible] = (0, react_1.useState)(false);
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
        setTimeout(() => {
            onConfirm && onConfirm();
        }, 100);
    };
    (0, react_1.useEffect)(() => {
        setTimeout(() => {
            setVisible(show);
        }, 100);
    }, [show]);
    return (react_1.default.createElement(react_1.default.Fragment, null, show &&
        react_dom_1.default.createPortal(react_1.default.createElement("div", null,
            react_1.default.createElement("div", { className: `modal fade ${visible ? "show " : ""}`, style: { display: show ? "block" : "none" }, id: "exampleModal", tabIndex: -1, "aria-labelledby": "exampleModalLabel" },
                react_1.default.createElement("div", { className: `modal-dialog ${type === "tip" ? "modal-dialog-centered" : ""}`, style: { maxWidth: "fit-content" } },
                    react_1.default.createElement("div", { className: "modal-content", style: { width: width } },
                        react_1.default.createElement("div", { className: "modal-header" },
                            react_1.default.createElement("h5", { className: "modal-title", id: "exampleModalLabel" }, title || "Modal title"),
                            react_1.default.createElement("button", { onClick: handleOnClose, type: "button", className: "btn-close", "aria-label": "Close" })),
                        react_1.default.createElement("div", { className: "modal-body", style: overflowY
                                ? { maxHeight: maxHeight, overflowY: "auto" }
                                : {} },
                            " ",
                            children || "..."),
                        react_1.default.createElement("div", { className: "modal-footer" },
                            showCancel ? (react_1.default.createElement("button", { type: "button", className: "btn btn-secondary", "data-bs-dismiss": "modal", onClick: handleOnCancel }, cancelText || "取消")) : (""),
                            showConfirm ? (react_1.default.createElement("button", { type: "button", className: "btn btn-primary", onClick: handleOnConfirm }, confirmText || "确定")) : (""))))),
            visible ? (react_1.default.createElement("div", { className: `modal-backdrop fade ${visible && "show"}` })) : null), document.body)));
};
exports.default = (0, react_i18next_1.withTranslation)()(Modal);
//# sourceMappingURL=index.js.map