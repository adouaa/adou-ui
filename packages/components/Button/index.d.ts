import React, { ReactNode } from "react";
import "./index.css";
type color = "primary" | "secondary" | "danger" | "success" | "warning" | "info" | "light" | "dark";
interface buttonProps {
    type?: color;
    size?: 'sm' | 'md' | 'lg';
    children?: ReactNode;
    className?: string;
    round?: boolean;
    textColor?: color;
    outlineColor?: color;
    disabled?: boolean;
    onClickOK?: () => void;
}
declare const Button: React.FC<buttonProps>;
export default Button;
