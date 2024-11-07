import EventCalendar from 'components/adou-event-calendar';
import React from 'react';

// 示例数据--注意：日期必须是 两位数 05  01  10  15
const sampleData = [
    { id: '2024-12-01', event: '会议' },
    { id: '2024-11-05', event: '项目截止' },
    { id: '2024-11-10', event: '生日派对555' },
];

const App = () => {
    return (
        <div className="px-3" style={{ width: '600px' }}>
            <EventCalendar
                cellHeight={'50px'}
                date={new Date('2024-11-01')} // 设置初始日期为2024年11月1日
                data={sampleData} // 传入示例数据
                modalContent={<h3>自定义模态框内容</h3>} // 传入自定义的模态框内容
                renderEvent={(dayInfo) => <span style={{ color: 'blue' }}>{dayInfo.event}</span>} // 自定义渲染事件内容，这里将事件文本设置为蓝色
            />
        </div>
    );
};

export default App;
