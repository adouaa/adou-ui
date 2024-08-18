import React from "react";
import "./index.scss";
interface EventCalendarProps {
    date?: Date;
    data?: any[];
    wrapperHeight?: any;
    contentHeight?: any;
    modalContent?: any;
    renderEvent?: any;
}
declare const EventCalendar: ({ date, wrapperHeight, contentHeight, data, modalContent, renderEvent, }: EventCalendarProps) => React.JSX.Element;
export default EventCalendar;
