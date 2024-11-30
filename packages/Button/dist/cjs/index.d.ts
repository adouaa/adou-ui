import React, { ReactNode } from "react";
type ThemeType = "primary" | "secondary" | "danger" | "success" | "warning" | "info" | "light" | "dark";
interface buttonProps {
    type?: ThemeType;
    size?: "sm" | "md" | "lg";
    children?: ReactNode;
    externalClassName?: string;
    round?: boolean;
    textColor?: ThemeType;
    outlineColor?: ThemeType;
    disabled?: boolean;
    label?: string;
    prefixIcon?: string;
    suffixIcon?: string;
    loading?: boolean;
    spinerType?: "border" | "grow";
    spinerColor?: ThemeType;
    fontSize?: string;
    onClick?: () => void;
}
declare const Button: React.FC<buttonProps>;
export default Button;
