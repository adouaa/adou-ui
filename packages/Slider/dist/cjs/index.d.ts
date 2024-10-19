import React from "react";
import "./index.scss";
type MarkItem = {
    distance: string;
    label: string | number;
    style?: React.CSSProperties;
};
interface SliderProps {
    marks?: MarkItem[];
    sliderWidth?: any;
    min?: number;
    max?: number;
    step?: number;
    value?: number | number[];
    range?: boolean;
    showStops?: boolean;
    showInput?: boolean;
    onChange?: () => void;
}
declare const Slider: ({ marks, range, sliderWidth, min, max, step, value, showStops, showInput, onChange, }: SliderProps) => React.JSX.Element;
export default Slider;
