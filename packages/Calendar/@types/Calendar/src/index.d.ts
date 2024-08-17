import React from "react";
import "./index.scss";
interface CalendarProps {
    date?: Date;
}
declare const Calendar: ({ date }: CalendarProps) => React.JSX.Element;
export default Calendar;
