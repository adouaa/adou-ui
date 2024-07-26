import { useEffect, useRef, useState } from "react";
import React from "react";

interface TimeLineItemProps {
    data?: any,
    render?: any
}

const TimeLineItem = ({ data, render }: TimeLineItemProps) => {

    const timeLineWidthRef = useRef<number>(0);
    const timeLineHeightRef = useRef<number>(0);
    const timeLineItemWrapperRef = useRef<any>();

    useEffect(() => {
        if (timeLineItemWrapperRef.current) {
            timeLineWidthRef.current = timeLineItemWrapperRef.current.scrollHeight;
            timeLineHeightRef.current = timeLineItemWrapperRef.current.scrollWidth;
            console.log(timeLineHeightRef.current);
            
        }
    }, [timeLineItemWrapperRef]);

    return (
        <div ref={timeLineItemWrapperRef} className="time-line-item-wrapper">
            {render && render(data, timeLineWidthRef.current, timeLineHeightRef.current)}
        </div>
    );
};

export default TimeLineItem;