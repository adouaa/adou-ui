import React, { useState } from 'react';
import './index.scss'; // 引入样式
import Button from 'components/adou-button';

const Calendar = () => {
    // 示例日期和时间段，使用对象形式并添加唯一标识符
    const [days, setDays] = useState<any[]>([
        { id: 1, name: 'Mon' },
        { id: 2, name: 'Tue' },
        { id: 3, name: 'Wed' },
        { id: 4, name: 'Thu' },
        { id: 5, name: 'Fri' },
        { id: 6, name: 'Sat' },
        { id: 7, name: 'Sun' },
    ]);

    const [timeSlots, setTimeSlots] = useState<any[]>([
        { id: 1, time: '08:00 AM' },
        { id: 2, time: '09:00 AM' },
        { id: 3, time: '10:00 AM' },
        { id: 4, time: '11:00 AM' },
        { id: 5, time: '12:00 PM' },
        { id: 6, time: '01:00 PM' },
        { id: 7, time: '02:00 PM' },
        { id: 8, time: '03:00 PM' },
        { id: 9, time: '04:00 PM' },
        { id: 10, time: '05:00 PM' },
    ]);

    const handleTdClick = (day: any) => {
        setDays((preArr: any) => {
            return preArr.map((item: any) => {
                if (item.id === day.id) {
                }
                return item;
            });
        });
    };

    const handleTimeLineChange = () => {
        setDays([
            { id: 2, name: 'Tue' },
            { id: 5, name: 'Fri' },
            { id: 2, name: 'Tue' },
        ]);
    };

    const [currentMonth, setCurrentMonth] = useState(new Date());

    // 获取指定月份的第一天和最后一天
    const getCurrentMonthFirstAndLastDay = (currentMonth: any) => {
        const year = currentMonth.getFullYear();
        const month = currentMonth.getMonth() - 1;

        // 获取指定月份的第一天
        const firstDay = new Date(year, month, 1);
        // 获取指定月份的最后一天
        const lastDay = new Date(year, month + 1, 0);

        return { firstDay, lastDay };
    };

    const getCurrentMonthDays = () => {
        const length = lastDay.getDate();
        return Array.from({ length }, (_, i) => i + 1);
    };

    // 获取上一个月的天数
    const getPreviousMonthDays = (date: any) => {
        const month = date.getMonth();
        const year = date.getFullYear();
        const lastMonth = new Date(year, month, 0);
        // 上一个月的天数
        const lastMonthDays = lastMonth.getDate();
        return lastMonthDays;
    };

    // 获取下一个月的天数
    const getNextMonthDays = (date: any) => {
        const month = date.getMonth();
        const year = date.getFullYear();
        const nextMonth = new Date(year, month + 1, 1);
        // 下一个月的天数. new Date()的参数需要传入的值是正常月份的值，所以需要加1。而通过date.getMonth()获取到的月份值是从0开始，所以会少于1
        const nextMonthDays = new Date(nextMonth.getFullYear(), nextMonth.getMonth() + 1, 0).getDate();
        return nextMonthDays;
    };

    // 获取上一个月需要展示在给月份的日期号数
    const getShouldShowPreMonthDays = () => {
        console.log(currentMonthFirstDay);

        return Array.from({ length: currentMonthFirstDay - 1 }, (_, i) => prevMonthDays - i).reverse();
    };
    // 获取下一个月需要展示在给月份的日期号数
    const getShouldShowNextMonthDays = () => {
        console.log(currentMonthLastDay);

        return Array.from({ length: 7 - currentMonthLastDay }, (_, i) => i + 1);
    };

    const { firstDay, lastDay } = getCurrentMonthFirstAndLastDay(currentMonth);
    const currentMonthFirstDay = firstDay.getDay();
    const currentMonthLastDay = lastDay.getDay();

    const prevMonthDays = getPreviousMonthDays(firstDay);
    const nextMonthDays = getNextMonthDays(firstDay);
    const shouldShowPreMonthDays = getShouldShowPreMonthDays();
    const shouldShowNextMonthDays = getShouldShowNextMonthDays();
    const currentMonthDays = getCurrentMonthDays();
    console.log(currentMonthDays);
    console.log(shouldShowNextMonthDays);

    const allDays = [
        ...shouldShowPreMonthDays.map((day) => ({ day, isCurrentMonth: false })),
        ...currentMonthDays.map((day) => ({ day, isCurrentMonth: true })),
        ...shouldShowNextMonthDays.map((day) => ({ day, isCurrentMonth: false })),
    ];
    // 函数将数字数组分组，每组 7 个
    const chunkAllDays = (array: any, size: any) => {
        const result: any = [];
        for (let i = 0; i < array.length; i += size) {
            result.push(array.slice(i, i + size));
        }
        return result;
    };
    const finalShowData = chunkAllDays(allDays, 7);
    console.log(finalShowData);

    // 获取当前月份的所有日期
    const monthDays = Array.from({ length: lastDay.getDate() }, (_, i) => i + 1);

    return (
        <div className="calendar-container">
            {/* <Button type="warning" size="sm" onClickOK={handleTimeLineChange}>
                改变时间轴
            </Button> */}
            <table className="calendar-table">
                <thead>
                    <tr>
                        {/* <th>Time</th> */}
                        {days.map((day) => (
                            <th key={day.id}>{day.name}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {finalShowData.map((week: any, weekIndex: number) => (
                        <tr key={weekIndex}>
                            {week.map(({ day, isCurrentMonth }: any, dayIndex: number) => (
                                <td key={dayIndex} className={`calendar-cell ${!isCurrentMonth ? 'gray' : ''}`}>
                                    {day}
                                </td>
                            ))}
                        </tr>
                    ))}
                    {/* {timeSlots.map((timeSlot) => (
                        <tr key={timeSlot.id}>
                            {shouldShowPreMonthDays.map((num: number) => (
                                <td onClick={() => handleTdClick(num)} key={`shouldShowPreMonthDays + ${num}`} className="calendar-cell">
                                    {num}
                                </td>
                            ))}
                            {currentMonthDays.map((num) => (
                                <td onClick={() => handleTdClick(num)} key={`currentMonthDays+  ${num}`} className="calendar-cell">
                                    {num}
                                </td>
                            ))}
                            {shouldShowNextMonthDays.map((num: number) => (
                                <td onClick={() => handleTdClick(num)} key={`shouldShowNextMonthDays + ${num}`} className="calendar-cell">
                                    {num}
                                </td>
                            ))}
                        </tr>
                    ))} */}
                </tbody>
            </table>
        </div>
    );
};

export default Calendar;
