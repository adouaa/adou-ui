"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
require("./index.css");
const Button = (props) => {
    const { children, type, size, className, round, onClickOK } = props;
    const handleOnClick = () => {
        onClickOK && onClickOK();
    };
    const cls = (0, classnames_1.default)({
        "ant-btn": true,
        [`ant-btn-${type}`]: type,
        [`ant-btn-${size}`]: size,
        [`ant-btn-round`]: round,
        [className]: className,
    });
    return (react_1.default.createElement("button", { style: { cursor: "pointer" }, onClick: handleOnClick, className: cls }, children));
};
exports.default = Button;
//# sourceMappingURL=index.js.map