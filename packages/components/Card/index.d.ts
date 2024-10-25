import { ReactNode } from "react";
import React from "react";
import "./index.scss";
interface CardProps {
    header?: ReactNode;
    headerAlign?: "start" | "center" | "end";
    footer?: ReactNode;
    footerAlign?: "start" | "center" | "end";
    children: ReactNode;
    externalClassName?: string;
    hoverUp?: boolean;
}
declare const Card: ({ hoverUp, header, headerAlign, footer, footerAlign, children, externalClassName, }: CardProps) => React.JSX.Element;
export default Card;
