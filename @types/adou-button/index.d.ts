import React, { ReactNode } from "react";
import "./index.css";
interface buttonProps {
    type?: "primary" | "default" | "danger" | "dashed" | "link" | "text" | undefined;
    size?: "large" | "middle" | "small" | undefined;
    children?: ReactNode;
    className?: string;
    round?: boolean;
    onClickOK?: () => void;
}
declare const Button: React.FC<buttonProps>;
export default Button;
