import React, { ReactNode } from "react";
import classNames from "classnames";
import "./index.css"

type color = "primary" | "secondary" | "danger" | "success" | "warning" | "info" | "light" | "dark";

interface buttonProps {
    type?: color
    size?: 'sm' | 'md' | 'lg';
    children?: ReactNode;
    className?: string;
    round?: boolean;
    textColor?: color;
    outlineColor?: color;
    disabled?: boolean;
    onClickOK?: () => void;
}
const Button: React.FC<buttonProps> = (props: buttonProps) => {
    const { children, type, size, className, round, textColor, disabled, outlineColor, onClickOK } = props;

    const handleOnClick = () => {
        onClickOK && onClickOK();
    }
    const cls = classNames({
        "btn": true,
        [`btn-${type}`]: type, // 是 true就会加上这个类名
        [`btn-${size}`]: size,
        [`rounded`]: round,
        [`text-${textColor}`]: textColor,
        [`btn-outline-${outlineColor}`]: outlineColor,
        disabled,
        [className as string]: className,
    })

    const applyStylesToChildren = () => {
        return React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
                
                const enhancedChild = React.cloneElement(child, {
                    style: {
                    //    [`${size === "sm" ? "fontSize" : ""}`]: "12px" ,
                    }
                } as React.Attributes);
                return enhancedChild;
            }
        });
    };

    return (
        <button
            style={{ cursor: "pointer" }}
            onClick={handleOnClick}
            className={cls}
        >
            {applyStylesToChildren()}
        </button>
    );
}

export default Button;