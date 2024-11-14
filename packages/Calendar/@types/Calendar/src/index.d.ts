import React from "react";
import "./index.scss";
import { CalendarDay } from "type";
interface CalendarProps {
    calendarRef?: any;
    cellHeight?: any;
    minCellHeight?: any;
    date?: Date;
    data?: CalendarDay[];
    wrapperWidth?: any;
    wrapperHeight?: any;
    contentHeight?: any;
    modalContent?: any;
    renderEventUIFn?: any;
    onDoubleClick?: (dayInfo: CalendarDay) => void;
}
declare const Calendar: ({ minCellHeight, calendarRef, cellHeight, date, wrapperWidth, wrapperHeight, contentHeight, data, renderEventUIFn, onDoubleClick, }: CalendarProps) => React.JSX.Element;
export default Calendar;
