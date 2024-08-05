import React from "react";
import TimeLineItem from "./TimelineItem";
import "./index.scss";
interface TimeLineProps {
    events?: any;
    vertical?: boolean;
    children?: any;
}
export { TimeLineItem };
declare const TimeLine: ({ children, events, vertical }: TimeLineProps) => React.JSX.Element;
export default TimeLine;
