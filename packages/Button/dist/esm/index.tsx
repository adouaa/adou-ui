import React, { ReactNode } from "react";
import classNames from "classnames";
import "./index.css"

interface buttonProps {
    type?: "primary" | "default" | "danger" | "dashed" | "link" | "text" | undefined;
    size?: "large" | "middle" | "small" | undefined;
    children?: ReactNode;
    className?: string;
    round?: boolean,
    onClickOK?: () => void;
}
const Button: React.FC<buttonProps> = (props: buttonProps) => {
    const { children , type, size, className, round, onClickOK } = props;

    const handleOnClick = () => {
        onClickOK && onClickOK();
    }
    const cls = classNames({
        "ant-btn": true,
        [`ant-btn-${type}`]: type, // 是 true就会加上这个类名
        [`ant-btn-${size}`]: size,
        [`ant-btn-round`]: round,
        [className as string]: className,
    })
    return (
        <button style={{cursor: "pointer"}} onClick={handleOnClick} className={cls}>{children}</button>
    );
}

export default Button;