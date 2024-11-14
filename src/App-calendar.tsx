import Calendar from 'components/adou-event-calendar';
import AdouInput from 'components/adou-Input';
import React, { useEffect, useState } from 'react';

const App = () => {
    const [data, setData] = useState<any[]>([]);
    const [date, setDate] = useState<any>();

    useEffect(() => {
        setTimeout(() => {
            setData([
                {
                    id: '2022-8-29',
                    event: '打豆豆',
                    day: 29,
                    isCurrentMonth: false,
                },

                {
                    id: '2022-8-31',
                    event: '打豆豆',
                    day: 31,
                    isCurrentMonth: false,
                },
                {
                    id: '2022-9-1',
                    day: 1,
                    event: '学习2022-9-1',
                    isCurrentMonth: true,
                },
                {
                    id: '2022-9-2',
                    day: 2,
                    event: '学习2022-9-2',
                    isCurrentMonth: true,
                },
                {
                    id: '2022-9-3',
                    day: 3,
                    event: '学习2022-9-3',
                    isCurrentMonth: true,
                },
                {
                    id: '2022-9-4',
                    day: 4,
                    event: '学习2022-9-4',
                    isCurrentMonth: true,
                },
                {
                    id: '2022-9-5',
                    day: 5,
                    event: '学习2022-9-5',
                    isCurrentMonth: true,
                },
                {
                    id: '2022-9-6',
                    day: 6,
                    event: '学习2022-9-6',
                    isCurrentMonth: true,
                },
                {
                    id: '2022-9-7',
                    day: 7,
                    event: '学习2022-9-7',
                    isCurrentMonth: true,
                },
                {
                    id: '2022-9-8',
                    day: 8,
                    event: '学习2022-9-8',
                    isCurrentMonth: true,
                },
                {
                    id: '2022-9-9',
                    day: 9,
                    event: '学习2022-9-9',
                    isCurrentMonth: true,
                },
                {
                    id: '2022-9-10',
                    day: 10,
                    event: '学习2022-9-10',
                    isCurrentMonth: true,
                },
                {
                    id: '2022-9-11',
                    day: 11,
                    event: '学习2022-9-11',
                    isCurrentMonth: true,
                },
                {
                    id: '2022-9-12',
                    day: 12,
                    event: '学习2022-9-12',
                    isCurrentMonth: true,
                },
                {
                    id: '2022-9-13',
                    day: 13,
                    event: '学习2022-9-13',
                    isCurrentMonth: true,
                },
                {
                    id: '2022-9-14',
                    day: 14,
                    event: '学习2022-9-14',
                    isCurrentMonth: true,
                },
                {
                    id: '2022-9-15',
                    day: 15,
                    event: '学习2022-9-15',
                    isCurrentMonth: true,
                },
                {
                    id: '2022-9-16',
                    day: 16,
                    event: '学习2022-9-16',
                    isCurrentMonth: true,
                },
                {
                    id: '2022-9-17',
                    day: 17,
                    event: '学习2022-9-17',
                    isCurrentMonth: true,
                },
                {
                    id: '2022-9-18',
                    day: 18,
                    event: '学习2022-9-18',
                    isCurrentMonth: true,
                },
                {
                    id: '2022-9-19',
                    day: 19,
                    event: '学习2022-9-19',
                    isCurrentMonth: true,
                },
                {
                    id: '2022-9-20',
                    day: 20,
                    event: '学习2022-9-20',
                    isCurrentMonth: true,
                },
                {
                    id: '2022-9-21',
                    day: 21,
                    event: '学习2022-9-21',
                    isCurrentMonth: true,
                },
                {
                    id: '2022-9-22',
                    day: 22,
                    event: '学习2022-9-22',
                    isCurrentMonth: true,
                },
                {
                    id: '2022-9-23',
                    day: 23,
                    event: '学习2022-9-23',
                    isCurrentMonth: true,
                },

                {
                    id: '2022-9-25',
                    day: 25,
                    event: '学习2022-9-25',
                    isCurrentMonth: true,
                },
                {
                    id: '2022-9-26',
                    day: 26,
                    event: '学习2022-9-26',
                    isCurrentMonth: true,
                },
                {
                    id: '2022-9-27',
                    day: 27,
                    event: '学习2022-9-27',
                    isCurrentMonth: true,
                },

                {
                    id: '2022-9-30',
                    day: 30,
                    event: '学习2022-9-30',
                    isCurrentMonth: true,
                },
                {
                    id: '2022-10-1',
                    day: 1,
                    event: '睡觉',
                    isCurrentMonth: false,
                },
                {
                    id: '2022-10-2',
                    day: 2,
                    event: '睡觉2',
                    isCurrentMonth: false,
                },
            ]);
            setDate(new Date(2022, 8, 10));
        }, 1000);
    }, []);

    return (
        <div>
            <div className="calendar p-4">
                <Calendar
                    modalContent={<AdouInput label="测试" name="event"></AdouInput>}
                    date={date}
                    data={data}
                    wrapperHeight={'600px'}
                    renderEventUIFn={(dayInfo: any) => <div style={{ color: 'red' }}>{dayInfo.event}</div>}
                />
            </div>
        </div>
    );
};

export default App;
