import React from "react";
import TimeLineItem from "./TimelineItem";
import "./index.scss";
export { TimeLineItem };
interface TimeLineProps {
    events?: any;
    vertical?: boolean;
    children?: any;
}
declare const TimeLine: ({ children, events, vertical }: TimeLineProps) => React.JSX.Element;
export default TimeLine;
