"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
require("./index.scss"); // 引入样式
const src_1 = __importDefault(require("../../Select/src"));
const Calendar = ({ date }) => {
    /**
     * 点击某天高亮的逻辑
     */
    const [activeId, setActiveId] = (0, react_1.useState)();
    const handleTdClick = (dayInfo) => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), dayInfo.day));
        setActiveId(dayInfo.id);
    };
    const handleTimeLineChange = () => { };
    const [currentDate, setCurrentDate] = (0, react_1.useState)(date || new Date());
    const [currentMonth, setCurrentMonth] = (0, react_1.useState)();
    const [currentYear, setCurrentYear] = (0, react_1.useState)();
    const getCurrentYear = (year) => {
        let currentYear;
        if (year) {
            currentYear = year;
        }
        else {
            currentYear = new Date().getFullYear();
        }
        setCurrentYear(currentYear);
    };
    const getCurrentMonth = (month) => {
        let currentMonth;
        if (month || month === 0) {
            // 因为月份列表是从0开始的，所以要加1
            currentMonth = month + 1;
        }
        else {
            currentMonth = new Date().getMonth() + 1;
        }
        setCurrentMonth(currentMonth);
    };
    // 获取指定月份的第一天和最后一天
    const getCurrentMonthFirstAndLastDate = (currentDate) => {
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
    const getPreviousMonthDays = (date) => {
        const month = date.getMonth();
        const year = date.getFullYear();
        const lastMonth = new Date(year, month, 0);
        // 上一个月的天数
        const lastMonthDays = lastMonth.getDate();
        return lastMonthDays;
    };
    // 获取下一个月的天数
    const getNextMonthDays = (date) => {
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
            return {
                id: `${currentYear}-${currentMonth - 1}-${prevMonthDays - i}`,
                day: prevMonthDays - i,
                isCurrentMonth: false,
            };
        }).reverse();
    };
    // 获取下一个月需要展示在给月份的日期号数
    const getShouldShowNextMonthDays = () => {
        return Array.from({ length: 7 - currentMonthLastDay }, (_, i) => {
            return {
                id: `${currentYear}-${currentMonth + 1}-${i + 1}`,
                day: i + 1,
                isCurrentMonth: false,
            };
        });
    };
    // 函数将数字数组分组，每组 7 个
    const chunkAllDays = (array, size) => {
        const result = [];
        for (let i = 0; i < array.length; i += size) {
            result.push(array.slice(i, i + size));
        }
        return result;
    };
    /**
     * 获取这个月的第一天和最后一天(date)
     */
    const [currentMonthFirstAndLastDate, setFirstAndLastDate] = (0, react_1.useState)(getCurrentMonthFirstAndLastDate(currentDate));
    // 这个月的第一天(date)
    const [currentMonthFirstDate, setCurrentMonthFirstDate] = (0, react_1.useState)(currentMonthFirstAndLastDate.firstDate);
    // 这个月的最后一天(date)
    const [currentMonthLastDate, setCurrentMonthLastDate] = (0, react_1.useState)(currentMonthFirstAndLastDate.lastDate);
    // 这个月第一天是星期几(day)
    const [currentMonthFirstDay, setCurrentMonthFirstDay] = (0, react_1.useState)(currentMonthFirstDate.getDay());
    // 这个月最后一天是星期几(day)
    const [currentMonthLastDay, setCurrentMonthLastDay] = (0, react_1.useState)(currentMonthLastDate.getDay());
    // 上一个月的天数
    const [prevMonthDays, setPrevMonthDays] = (0, react_1.useState)(getPreviousMonthDays(currentMonthFirstDate));
    // 下一个月的天数
    const [nextMonthDays, setNextMonthDays] = (0, react_1.useState)(getNextMonthDays(currentMonthFirstDate));
    /**
     * 获取当前日历应该展示的所有日期
     */
    // 获取上一个月需要展示在该月份的日期号数
    const [shouldShowPreMonthDays, setshouldShowPreMonthDays] = (0, react_1.useState)(getShouldShowPreMonthDays());
    // 下一个月需要展示在该月份的日期号数
    const [shouldShowNextMonthDays, setShouldShowNextMonthDays] = (0, react_1.useState)(getShouldShowNextMonthDays());
    // 这月需要展示在该月份的日期号数
    const [currentMonthDays, setCurrentMonthDays] = (0, react_1.useState)(getCurrentMonthDays());
    // 当前日历应该展示的所有日期
    const [allDays, setAllDays] = (0, react_1.useState)([
        ...shouldShowPreMonthDays,
        ...currentMonthDays,
        ...shouldShowNextMonthDays,
    ]);
    // 分组后的最终展示的数据(七天一组，一个日历共展示 35天)
    const [finalShowData, setfinalShowData] = (0, react_1.useState)([]);
    // const allDays = [...shouldShowPreMonthDays, ...currentMonthDays, ...shouldShowNextMonthDays];
    // 示例日期和时间段，使用对象形式并添加唯一标识符
    const [days, setDays] = (0, react_1.useState)([
        { id: 1, name: "Mon" },
        { id: 2, name: "Tue" },
        { id: 3, name: "Wed" },
        { id: 4, name: "Thu" },
        { id: 5, name: "Fri" },
        { id: 6, name: "Sat" },
        { id: 7, name: "Sun" },
        /* { id: 1, name: '周一' },
            { id: 2, name: '周二' },
            { id: 3, name: '周三' },
            { id: 4, name: '周四' },
            { id: 5, name: '周五' },
            { id: 6, name: '周六' },
            { id: 7, name: '周日' }, */
    ]);
    const [timeSlots, setTimeSlots] = (0, react_1.useState)([
        { id: 1, time: "08:00 AM" },
        { id: 2, time: "09:00 AM" },
        { id: 3, time: "10:00 AM" },
        { id: 4, time: "11:00 AM" },
        { id: 5, time: "12:00 PM" },
        { id: 6, time: "01:00 PM" },
        { id: 7, time: "02:00 PM" },
        { id: 8, time: "03:00 PM" },
        { id: 9, time: "04:00 PM" },
        { id: 10, time: "05:00 PM" },
    ]);
    // 获取当前月份的所有日期
    const monthDays = Array.from({ length: currentMonthLastDate.getDate() }, (_, i) => i + 1);
    /**
     * 展示在头部左上角的日期
     */
    const [weekDayNames, setWddkDayNames] = (0, react_1.useState)([
        "星期日",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六",
    ]);
    const [dayOfWeek, setDayOfWeek] = (0, react_1.useState)(currentDate.getDay()); // 0 (星期天) 到 6 (星期六)
    const [displayDay, setdisplayDay] = (0, react_1.useState)(0); // 将星期天转换为 7
    const [topLeftDay, setTopLeftDay] = (0, react_1.useState)("");
    const handleTestPreDate = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - 1));
    };
    const handleTestNextDate = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 1));
    };
    const getTopLeftDay = (currentDate) => {
        const displayDay = currentDate.getDay();
        setTopLeftDay(weekDayNames[displayDay]);
        setdisplayDay(displayDay);
    };
    /**
     * 展示在头部的月份
     */
    const [monthNames, setMonthNames] = (0, react_1.useState)([
        "一月",
        "二月",
        "三月",
        "四月",
        "五月",
        "六月",
        "七月",
        "八月",
        "九月",
        "十月",
        "十一月",
        "十二月",
    ]);
    const [displayMonth, setdisplayMonth] = (0, react_1.useState)(0); // 将星期天转换为 7
    const [topMLeftMonth, settopMLeftMonth] = (0, react_1.useState)("");
    // TODO: 不能用currentDate来获取月份
    const getTopLeftMonth = (currentDate) => {
        const disPlayMonth = currentDate.getMonth();
        settopMLeftMonth(monthNames[disPlayMonth]);
    };
    /**
     * 日历操作区域
     */
    // 目前少一个月才是好操作的
    const [months, setMonths] = (0, react_1.useState)([
        { label: "January", value: 0 },
        { label: "February", value: 1 },
        { label: "March", value: 2 },
        { label: "April", value: 3 },
        { label: "May", value: 4 },
        { label: "June", value: 5 },
        { label: "July", value: 6 },
        { label: "August", value: 7 },
        { label: "September", value: 8 },
        { label: "October", value: 9 },
        { label: "November", value: 10 },
        { label: "December", value: 11 },
    ]);
    // 目前少一个月才是好操作的
    const [years, setYears] = (0, react_1.useState)([]);
    const generateYears = () => {
        // 创建一个空数组来存储结果
        const yearsList = [];
        // 生成当前年份以及前后5年的年份
        for (let i = -5; i <= 5; i++) {
            yearsList.push({ label: currentYear + i, value: currentYear + i });
        }
        setYears(yearsList);
    };
    // 更换月份
    const handleCurrentMonthChange = (month) => {
        getCurrentMonth(month.value);
        // 月份从0开始，少一个月直接赋值就是正确的
        setCurrentDate(new Date(currentDate.getFullYear(), month.value, currentDate.getDate()));
    };
    // 更换年份
    const handleCurrentYearChange = (year) => {
        getCurrentYear(year.value);
        setCurrentDate(new Date(year.value, currentDate.getMonth(), currentDate.getDate()));
    };
    // 获取上一个月的日期
    const getPreviousMonthDate = (date = currentDate, step) => {
        let currentData = new Date(date);
        // 创建一个新的 Date 对象，避免修改原始日期
        const prevMonthDate = new Date(currentData.getFullYear(), currentData.getMonth() + step, currentData.getDate());
        // 处理日期溢出问题，例如 2024-03-31 -> 2024-02-29
        // 通过设置到下一个月的1号，然后回退一天来处理
        if (prevMonthDate.getMonth() !==
            (currentData.getMonth() + step + 12) % 12) {
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
    const calendarContainerRef = (0, react_1.useRef)();
    const calendarHeaderRef = (0, react_1.useRef)();
    const [calendarTableMaxHeight, setCalendarTableMaxHeight] = (0, react_1.useState)(0);
    // 计算表格内容区域的最大高度
    const handleCalendarTableMaxHeight = () => {
        if (calendarContainerRef.current && calendarHeaderRef.current) {
            const calendarContainerHeight = calendarContainerRef.current.clientHeight - 8;
            setCalendarTableMaxHeight(calendarContainerHeight - calendarHeaderRef.current.clientHeight);
        }
    };
    (0, react_1.useEffect)(() => {
        getCurrentYear();
        getCurrentMonth();
    }, []);
    (0, react_1.useEffect)(() => {
        setFirstAndLastDate(getCurrentMonthFirstAndLastDate(currentDate));
        getTopLeftDay(currentDate);
        getTopLeftMonth(currentDate);
    }, [currentDate]);
    (0, react_1.useEffect)(() => {
        setshouldShowPreMonthDays(getShouldShowPreMonthDays());
        setShouldShowNextMonthDays(getShouldShowNextMonthDays());
        setCurrentMonthDays(getCurrentMonthDays());
        generateYears();
        setActiveId(`${currentYear}-${currentMonth}-${currentDate.getDate()}`);
    }, [
        currentMonth,
        currentYear,
        currentMonthFirstDay,
        currentMonthLastDay,
        currentMonthLastDate,
    ]);
    (0, react_1.useEffect)(() => {
        setCurrentMonthFirstDate(currentMonthFirstAndLastDate.firstDate);
        setCurrentMonthLastDate(currentMonthFirstAndLastDate.lastDate);
    }, [currentMonthFirstAndLastDate]);
    (0, react_1.useEffect)(() => {
        setCurrentMonthFirstDay(currentMonthFirstDate.getDay());
        setCurrentMonthLastDay(currentMonthLastDate.getDay());
        setPrevMonthDays(getPreviousMonthDays(currentMonthFirstDate));
    }, [currentMonthFirstDate, currentMonthLastDate]);
    (0, react_1.useEffect)(() => {
        setAllDays([
            ...shouldShowPreMonthDays,
            ...currentMonthDays,
            ...shouldShowNextMonthDays,
        ]);
    }, [shouldShowPreMonthDays, currentMonthDays, shouldShowNextMonthDays]);
    (0, react_1.useEffect)(() => {
        setfinalShowData(chunkAllDays(allDays, 7));
        handleCalendarTableMaxHeight();
    }, [allDays]);
    (0, react_1.useEffect)(() => { }, []);
    return (react_1.default.createElement("div", { className: "calendar-container", ref: calendarContainerRef },
        react_1.default.createElement("div", { className: "calendar-header", ref: calendarHeaderRef },
            react_1.default.createElement("div", { className: "current-date-info" },
                react_1.default.createElement("div", { className: "left me-3" },
                    react_1.default.createElement("div", { className: "day-box" },
                        react_1.default.createElement("div", { className: "day" }, topLeftDay)),
                    react_1.default.createElement("div", { className: "date-box" },
                        react_1.default.createElement("div", { className: "date" },
                            react_1.default.createElement("div", { className: "num" }, currentDate.getDate())))),
                react_1.default.createElement("div", { className: "right" },
                    react_1.default.createElement("div", { className: "month me-1" }, topMLeftMonth),
                    react_1.default.createElement("div", { className: "year" }, currentDate.getFullYear()))),
            react_1.default.createElement("div", { className: "calendar-option" },
                react_1.default.createElement("div", { className: "left" },
                    react_1.default.createElement("div", { className: "month-select" },
                        react_1.default.createElement(src_1.default, { rounded: true, placeholder: "January", defaultValue: currentDate.getMonth(), onChange: handleCurrentMonthChange, minWidth: "120px", width: "120px", optionContentMaxHeight: "300px", options: months })),
                    react_1.default.createElement("div", { className: "year-select ms-2 me-2" },
                        react_1.default.createElement(src_1.default, { rounded: true, defaultValue: currentDate.getFullYear(), onChange: handleCurrentYearChange, minWidth: "80px", width: "80px", optionContentMaxHeight: "300px", options: years }))),
                react_1.default.createElement("div", { className: "right" },
                    react_1.default.createElement("div", { onClick: goToday, className: "today-btn" }, "\u4ECA\u5929")))),
        react_1.default.createElement("div", { className: "calendar-content mt-2", style: { maxHeight: calendarTableMaxHeight } },
            react_1.default.createElement("table", { className: "calendar-table" },
                react_1.default.createElement("thead", { style: { position: "sticky", top: 0, zIndex: 1 } },
                    react_1.default.createElement("tr", null, days.map((day) => (react_1.default.createElement("th", { key: day.id }, day.name))))),
                react_1.default.createElement("tbody", null, finalShowData.map((week, weekIndex) => (react_1.default.createElement("tr", { key: weekIndex }, week.map((dayInfo, dayIndex) => (react_1.default.createElement("td", { onClick: () => handleTdClick(dayInfo), key: dayInfo.id, className: `calendar-cell` },
                    react_1.default.createElement("div", { className: `calendar-cell-content ${!dayInfo.isCurrentMonth ? "gray" : ""}  ${activeId === dayInfo.id ? "active" : ""}` }, dayInfo.day)))))))))),
        react_1.default.createElement("div", { onClick: () => getPreviousMonthDate(currentDate, -1), className: "month-btn pre-month-btn" },
            react_1.default.createElement("i", { className: "fa-solid fa-angle-left " })),
        react_1.default.createElement("div", { onClick: () => getPreviousMonthDate(currentDate, 1), className: "month-btn next-month-btn" },
            react_1.default.createElement("i", { className: "fa-solid fa-angle-right " }))));
};
exports.default = Calendar;
//# sourceMappingURL=index.js.map