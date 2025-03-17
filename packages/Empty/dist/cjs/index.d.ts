import React from "react";
import "./index.scss";
interface EmptyProps {
    showSvg?: boolean;
    svg?: React.ReactNode;
    text?: any;
    style?: any;
}
declare const Empty: ({ showSvg, svg, text, style }: EmptyProps) => React.JSX.Element;
export default Empty;
