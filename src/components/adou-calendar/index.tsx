import React, { useEffect, useRef, useState } from 'react';
import './index.scss'; // 引入样式
import AdouSelect from '../../components/adou-select';

interface CalendarProps {
    date?: Date;
}

const Calendar = ({ date }: CalendarProps) => {
    /**
     * 点击某天高亮的逻辑
     */
    const [activeId, setActiveId] = useState<string>();
    const handleTdClick = (dayInfo: any) => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), dayInfo.day));
        setActiveId(dayInfo.id);
    };

    const handleTimeLineChange = () => {};

    const [currentDate, setCurrentDate] = useState(date || new Date());
    const [currentMonth, setCurrentMonth] = useState<any>();
    const [currentYear, setCurrentYear] = useState<any>();

    const getCurrentYear = (year?: number) => {
        let currentYear: any;
        if (year) {
            currentYear = year;
        } else {
            currentYear = new Date().getFullYear();
        }
        setCurrentYear(currentYear);
    };

    const getCurrentMonth = (month?: number) => {
        let currentMonth: any;
        if (month || month === 0) {
            // 因为月份列表是从0开始的，所以要加1
            currentMonth = month + 1;
        } else {
            currentMonth = new Date().getMonth() + 1;
        }
        setCurrentMonth(currentMonth);
    };

    // 获取指定月份的第一天和最后一天
    const getCurrentMonthFirstAndLastDate = (currentDate: any) => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();

        // 获取指定月份的第一天
        const firstDate = new Date(year, month, 1);
        // 获取指定月份的最后一天
        const lastDate = new Date(year, month + 1, 0);

        return { firstDate, lastDate };
    };

    const getCurrentMonthDays = () => {
        const length = currentMonthLastDate.getDate();
        return Array.from({ length }, (_, i) => {
            return {
                id: `${currentYear}-${currentMonth}-${i + 1}`,
                day: i + 1,
                isCurrentMonth: true,
            };
        });
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

    // 获取上一个月需要展示在该月份的日期号数
    const getShouldShowPreMonthDays = () => {
        return Array.from({ length: currentMonthFirstDay ? currentMonthFirstDay - 1 : 6 }, (_, i) => {
            return { id: `${currentYear}-${currentMonth - 1}-${prevMonthDays - i}`, day: prevMonthDays - i, isCurrentMonth: false };
        }).reverse();
    };
    // 获取下一个月需要展示在给月份的日期号数
    const getShouldShowNextMonthDays = () => {
        return Array.from({ length: 7 - currentMonthLastDay }, (_, i) => {
            return { id: `${currentYear}-${currentMonth + 1}-${i + 1}`, day: i + 1, isCurrentMonth: false };
        });
    };

    // 函数将数字数组分组，每组 7 个
    const chunkAllDays = (array: any, size: any) => {
        const result: any = [];
        for (let i = 0; i < array.length; i += size) {
            result.push(array.slice(i, i + size));
        }
        return result;
    };

    /**
     * 获取这个月的第一天和最后一天(date)
     */
    const [currentMonthFirstAndLastDate, setFirstAndLastDate] = useState<any>(getCurrentMonthFirstAndLastDate(currentDate));
    // 这个月的第一天(date)
    const [currentMonthFirstDate, setCurrentMonthFirstDate] = useState<any>(currentMonthFirstAndLastDate.firstDate);
    // 这个月的最后一天(date)
    const [currentMonthLastDate, setCurrentMonthLastDate] = useState<any>(currentMonthFirstAndLastDate.lastDate);

    // 这个月第一天是星期几(day)
    const [currentMonthFirstDay, setCurrentMonthFirstDay] = useState<any>(currentMonthFirstDate.getDay());
    // 这个月最后一天是星期几(day)
    const [currentMonthLastDay, setCurrentMonthLastDay] = useState<any>(currentMonthLastDate.getDay());

    // 上一个月的天数
    const [prevMonthDays, setPrevMonthDays] = useState<number>(getPreviousMonthDays(currentMonthFirstDate));
    // 下一个月的天数
    const [nextMonthDays, setNextMonthDays] = useState<number>(getNextMonthDays(currentMonthFirstDate));

    /**
     * 获取当前日历应该展示的所有日期
     */
    // 获取上一个月需要展示在该月份的日期号数
    const [shouldShowPreMonthDays, setshouldShowPreMonthDays] = useState<any>(getShouldShowPreMonthDays());
    // 下一个月需要展示在该月份的日期号数
    const [shouldShowNextMonthDays, setShouldShowNextMonthDays] = useState<any>(getShouldShowNextMonthDays());

    // 这月需要展示在该月份的日期号数
    const [currentMonthDays, setCurrentMonthDays] = useState<any>(getCurrentMonthDays());
    // 当前日历应该展示的所有日期
    const [allDays, setAllDays] = useState<any[]>([...shouldShowPreMonthDays, ...currentMonthDays, ...shouldShowNextMonthDays]);

    // 分组后的最终展示的数据(七天一组，一个日历共展示 35天)
    const [finalShowData, setfinalShowData] = useState<any>([]);

    // const allDays = [...shouldShowPreMonthDays, ...currentMonthDays, ...shouldShowNextMonthDays];
    // 示例日期和时间段，使用对象形式并添加唯一标识符
    const [days, setDays] = useState<any[]>([
        { id: 1, name: 'Mon' },
        { id: 2, name: 'Tue' },
        { id: 3, name: 'Wed' },
        { id: 4, name: 'Thu' },
        { id: 5, name: 'Fri' },
        { id: 6, name: 'Sat' },
        { id: 7, name: 'Sun' },
        /* { id: 1, name: '周一' },
        { id: 2, name: '周二' },
        { id: 3, name: '周三' },
        { id: 4, name: '周四' },
        { id: 5, name: '周五' },
        { id: 6, name: '周六' },
        { id: 7, name: '周日' }, */
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

    // 获取当前月份的所有日期
    const monthDays = Array.from({ length: currentMonthLastDate.getDate() }, (_, i) => i + 1);

    /**
     * 展示在头部左上角的日期
     */
    const [weekDayNames, setWddkDayNames] = useState<string[]>(['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']);
    const [dayOfWeek, setDayOfWeek] = useState<any>(currentDate.getDay()); // 0 (星期天) 到 6 (星期六)
    const [displayDay, setdisplayDay] = useState<number>(0); // 将星期天转换为 7
    const [topLeftDay, setTopLeftDay] = useState<any>('');
    const handleTestPreDate = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - 1));
    };
    const handleTestNextDate = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 1));
    };

    const getTopLeftDay = (currentDate: any) => {
        const displayDay = currentDate.getDay();
        setTopLeftDay(weekDayNames[displayDay]);
        setdisplayDay(displayDay);
    };

    /**
     * 展示在头部的月份
     */
    const [monthNames, setMonthNames] = useState<string[]>(['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']);
    const [displayMonth, setdisplayMonth] = useState<number>(0); // 将星期天转换为 7
    const [topMLeftMonth, settopMLeftMonth] = useState<string>('');

    // TODO: 不能用currentDate来获取月份
    const getTopLeftMonth = (currentDate: any) => {
        const disPlayMonth = currentDate.getMonth();
        settopMLeftMonth(monthNames[disPlayMonth]);
    };

    /**
     * 日历操作区域
     */
    // 目前少一个月才是好操作的
    const [months, setMonths] = useState<any[]>([
        { label: 'January', value: 0 },
        { label: 'February', value: 1 },
        { label: 'March', value: 2 },
        { label: 'April', value: 3 },
        { label: 'May', value: 4 },
        { label: 'June', value: 5 },
        { label: 'July', value: 6 },
        { label: 'August', value: 7 },
        { label: 'September', value: 8 },
        { label: 'October', value: 9 },
        { label: 'November', value: 10 },
        { label: 'December', value: 11 },
    ]);
    // 目前少一个月才是好操作的
    const [years, setYears] = useState<any[]>([]);
    const generateYears = () => {
        // 创建一个空数组来存储结果
        const yearsList: any[] = [];
        // 生成当前年份以及前后5年的年份
        for (let i = -5; i <= 5; i++) {
            yearsList.push({ label: currentYear + i, value: currentYear + i });
        }

        setYears(yearsList);
    };

    // 更换月份
    const handleCurrentMonthChange = (month: any) => {
        getCurrentMonth(month.value);
        // 月份从0开始，少一个月直接赋值就是正确的
        setCurrentDate(new Date(currentDate.getFullYear(), month.value, currentDate.getDate()));
    };

    // 更换年份
    const handleCurrentYearChange = (year: any) => {
        getCurrentYear(year.value);

        setCurrentDate(new Date(year.value, currentDate.getMonth(), currentDate.getDate()));
    };

    // 获取上一个月的日期
    const getPreviousMonthDate = (date: any = currentDate, step: number) => {
        let currentData = new Date(date);
        // 创建一个新的 Date 对象，避免修改原始日期
        const prevMonthDate = new Date(currentData.getFullYear(), currentData.getMonth() + step, currentData.getDate());

        // 处理日期溢出问题，例如 2024-03-31 -> 2024-02-29
        // 通过设置到下一个月的1号，然后回退一天来处理
        if (prevMonthDate.getMonth() !== (currentData.getMonth() + step + 12) % 12) {
            prevMonthDate.setDate(0);
        }

        setCurrentDate(prevMonthDate);
    };

    // 回到今天
    const goToday = () => {
        setCurrentDate(new Date());
    };

    /**
     * 让表格内容区域可以滚动
     */
    const calendarContainerRef = useRef<any>();
    const calendarHeaderRef = useRef<any>();
    const [calendarTableMaxHeight, setCalendarTableMaxHeight] = useState<number>(0);
    // 计算表格内容区域的最大高度
    const handleCalendarTableMaxHeight = () => {
        if (calendarContainerRef.current && calendarHeaderRef.current) {
            const calendarContainerHeight = calendarContainerRef.current.clientHeight - 8;
            setCalendarTableMaxHeight(calendarContainerHeight - calendarHeaderRef.current.clientHeight);
        }
    };

    useEffect(() => {
        getCurrentYear();
        getCurrentMonth();
    }, []);

    useEffect(() => {
        setFirstAndLastDate(getCurrentMonthFirstAndLastDate(currentDate));
        getTopLeftDay(currentDate);
        getTopLeftMonth(currentDate);
    }, [currentDate]);

    useEffect(() => {
        setshouldShowPreMonthDays(getShouldShowPreMonthDays());
        setShouldShowNextMonthDays(getShouldShowNextMonthDays());
        setCurrentMonthDays(getCurrentMonthDays());
        generateYears();
        setActiveId(`${currentYear}-${currentMonth}-${currentDate.getDate()}`);
    }, [currentMonth, currentYear, currentMonthFirstDay, currentMonthLastDay, currentMonthLastDate]);

    useEffect(() => {
        setCurrentMonthFirstDate(currentMonthFirstAndLastDate.firstDate);
        setCurrentMonthLastDate(currentMonthFirstAndLastDate.lastDate);
    }, [currentMonthFirstAndLastDate]);

    useEffect(() => {
        setCurrentMonthFirstDay(currentMonthFirstDate.getDay());
        setCurrentMonthLastDay(currentMonthLastDate.getDay());
        setPrevMonthDays(getPreviousMonthDays(currentMonthFirstDate));
    }, [currentMonthFirstDate, currentMonthLastDate]);

    useEffect(() => {
        setAllDays([...shouldShowPreMonthDays, ...currentMonthDays, ...shouldShowNextMonthDays]);
    }, [shouldShowPreMonthDays, currentMonthDays, shouldShowNextMonthDays]);

    useEffect(() => {
        setfinalShowData(chunkAllDays(allDays, 7));
        handleCalendarTableMaxHeight();
    }, [allDays]);

    useEffect(() => {}, []);

    return (
        <div className="calendar-container" ref={calendarContainerRef}>
            {/*  <Button type="primary" size="sm" onClickOK={handleTestPreDate}>
                测试上一天
            </Button>
            <Button type="primary" size="sm" onClickOK={handleTestNextDate}>
                测试下一天
            </Button> */}
            <div className="calendar-header" ref={calendarHeaderRef}>
                <div className="current-date-info">
                    <div className="left me-3">
                        {/* 今天的日期以及星期 */}
                        <div className="day-box">
                            <div className="day">{topLeftDay}</div>
                        </div>
                        <div className="date-box">
                            <div className="date">
                                <div className="num">{currentDate.getDate()}</div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="month me-1">{topMLeftMonth}</div>
                        <div className="year">{currentDate.getFullYear()}</div>
                    </div>
                </div>
                <div className="calendar-option">
                    {/* 默认值不能使用 currentMonth，因为会存在列表是从0开始，第一次选择框展示的月份会多一个月 */}
                    <div className="left">
                        <div className="month-select">
                            <AdouSelect
                                rounded
                                placeholder="January"
                                defaultValue={currentDate.getMonth()}
                                onChange={handleCurrentMonthChange}
                                minWidth={'120px'}
                                width={'120px'}
                                optionContentMaxHeight={'300px'}
                                options={months}
                            ></AdouSelect>
                        </div>
                        <div className="year-select ms-2 me-2">
                            <AdouSelect
                                rounded
                                defaultValue={currentDate.getFullYear()}
                                onChange={handleCurrentYearChange}
                                minWidth={'80px'}
                                width={'80px'}
                                optionContentMaxHeight={'300px'}
                                options={years}
                            ></AdouSelect>
                        </div>
                    </div>
                    <div className="right">
                        <div onClick={goToday} className="today-btn">
                            今天
                        </div>
                    </div>
                </div>
            </div>
            {/* <Button type="warning" size="sm" onClickOK={handleTimeLineChange}>
                改变时间轴
            </Button> */}
            <div className="calendar-content mt-2" style={{ maxHeight: calendarTableMaxHeight }}>
                <table className="calendar-table">
                    <thead style={{ position: 'sticky', top: 0, zIndex: 1 }}>
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
                                {week.map((dayInfo: any, dayIndex: number) => (
                                    <td onClick={() => handleTdClick(dayInfo)} key={dayInfo.id} className={`calendar-cell`}>
                                        <div className={`calendar-cell-content ${!dayInfo.isCurrentMonth ? 'gray' : ''}  ${activeId === dayInfo.id ? 'active' : ''}`}>
                                            {dayInfo.day}
                                        </div>
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div onClick={() => getPreviousMonthDate(currentDate, -1)} className="month-btn pre-month-btn">
                <i className="fa-solid fa-angle-left "></i>
            </div>
            <div onClick={() => getPreviousMonthDate(currentDate, 1)} className="month-btn next-month-btn">
                <i className="fa-solid fa-angle-right "></i>
            </div>
        </div>
    );
};

export default Calendar;
