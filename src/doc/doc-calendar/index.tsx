import EventCalendar from 'components/adou-event-calendar';
import AdouInput from 'components/adou-new-form/adou-Input';
import React, { useRef, useState } from 'react';
import Dialog from 'test-dialog';

const App = () => {
    /**
     * 双击展示弹窗逻辑
     */
    const [dayInfo, setDayInfo] = useState<any>({});
    const [modalShow, setModalShow] = useState<boolean>(false);
    const [eventName, setEventName] = useState<string>('');

    // 示例数据--注意：日期必须是 两位数 05  01  10  15
    const [eventDate, setEventDate] = useState<any[]>([
        { id: '2024-12-01', event: '会议项目截止项目截止' },
        { id: '2024-11-05', event: '项目截止' },
        { id: '2024-11-10', event: '生日派对555' },
    ]);

    const calendarRef = useRef<any>(null);
    const handleCloseModal = () => {
        setModalShow(false);
    };
    const handleCofirmModal = () => {
        const findDay = eventDate.find((item: any) => item.id === dayInfo.id);
        if (findDay?.id) {
            setEventDate((preData: any) =>
                preData.map((item: any) => {
                    if (item.id === findDay.id) {
                        item.event = eventName;
                    }
                    return item;
                })
            );
        } else {
            setEventDate((preData: any) => [...preData, { id: dayInfo.id, event: eventName }]);
        }

        handleCloseModal();
    };

    const handleDoubleClick = (dayInfo: any) => {
        setDayInfo(dayInfo);
        console.log('dayInfo: ', dayInfo);
        setModalShow(true);
    };

    const handleEventChange = (value: any) => {
        setEventName(value);
    };

    return (
        <div className="px-3" style={{ width: '600px' }}>
            <EventCalendar
                calendarRef={calendarRef}
                onDoubleClick={handleDoubleClick}
                data={eventDate} // 传入示例数据
                renderEventUIFn={(dayInfo) => (
                    <span className="text-primary" style={{ wordWrap: 'break-word' }}>
                        {dayInfo.event}
                    </span>
                )} // 自定义渲染事件内容，这里将事件文本设置为蓝色
            />

            {/* 事件弹窗 */}
            <Dialog show={modalShow} onCancel={handleCloseModal} onClose={handleCloseModal} onConfirm={handleCofirmModal}>
                {
                    <>
                        <AdouInput defaultValue={dayInfo.event} label="事件名称" name="event" onChange={handleEventChange}></AdouInput>
                    </>
                }
            </Dialog>
        </div>
    );
};

export default App;
