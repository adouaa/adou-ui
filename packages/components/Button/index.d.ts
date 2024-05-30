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
    label?: string;
    prefixIcon?: string;
    suffixIcon?: string;
    loading?: boolean;
    spinerType?: "border" | "grow";
    spinerColor?: color;
    fontSize?: string;
    onClickOK?: () => void;
}
declare const Button: React.FC<buttonProps>;
export default Button;
