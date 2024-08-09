import { useEffect, useRef, useState } from 'react';
import React from 'react';

interface TimeLineItemProps {
    data?: any;
    vertical?: boolean;
    render?: any;
    isLasted?: boolean;
}

const TimeLineItem = ({ data, render, vertical, isLasted }: TimeLineItemProps) => {
    const [timeLineWidth, setTimeLineWidth] = useState<number>(0);
    const [timeLineHeight, setTimeLineHeight] = useState<number>(0);

    const timeLineItemWrapperRef = useRef<any>();

    useEffect(() => {
        if (timeLineItemWrapperRef.current) {
            if (vertical) {
                setTimeLineHeight(timeLineItemWrapperRef.current.getBoundingClientRect().height - 20);
                setTimeLineWidth(2);
            } else {
                setTimeLineWidth(timeLineItemWrapperRef.current.getBoundingClientRect().width - 20);
                setTimeLineHeight(2);
            }
        }
    }, [timeLineItemWrapperRef, data]);

    return (
        <div ref={timeLineItemWrapperRef} className="time-line-item-wrapper">
            {render && render(data, timeLineWidth, timeLineHeight, isLasted)}
        </div>
    );
};

export default TimeLineItem;
