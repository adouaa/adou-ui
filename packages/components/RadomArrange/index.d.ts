import React from "react";
import "./index.scss";
interface RandomArrangeProps {
    actRef?: any;
    children?: React.ReactNode;
    buttonText?: string;
    onShuffle?: () => void;
    className?: string;
    buttonClassName?: string;
    showButton?: boolean;
    animationDuration?: number;
    animationTiming?: string;
}
declare const RandomArrange: ({ actRef, children, buttonText, onShuffle, className, buttonClassName, showButton, animationDuration, animationTiming, }: RandomArrangeProps) => React.JSX.Element;
export default RandomArrange;
