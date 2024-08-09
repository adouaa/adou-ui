import Button from 'components/adou-button';
import Collapse from 'components/adou-collapse';
import ResizableSidebar from 'components/adou-resizeable-sliderbar';
import TimeLine from 'components/adou-time-line';
import TimeLineItem from 'components/adou-time-line/adou-time-line-item';
import React, { useState } from 'react';
import { withTranslation } from 'react-i18next';

const App = () => {
    const [events, setEvents] = useState<any[]>([
        {
            id: 1,
            title: 'Event 1',
            description: 'Description for event 1',
            date: '2023-01-01',
            isFinish: true,
        },
        {
            id: 2,
            title: 'Event 2',
            description: 'Description for event 2',
            date: '2023-02-01',
        },
        {
            id: 3,
            title: 'Event 3',
            description: 'Description for event 3',
            date: '2023-03-01',
        },
    ]);
    const handleTest = () => {
        setEvents([
            {
                id: 1,
                title: 'Event 1111111111111',
                description: 'Description for event 1',
                date: '2023-01-01',
                isFinish: true,
            },
            {
                id: 2,
                title: 'Event 2',
                description: 'Description for event 2',
                date: '2023-02-01',
                isFinish: true,
            },
            {
                id: 3,
                title: 'Event 3',
                description: 'Description for event 3',
                date: '2023-03-01',
            },
        ]);
    };

    const render = (event: any, timeLineWidth: any, timeLineHeight, isLasted: any) => {
        return (
            <>
                <div className={`content`}>
                    <div className="icon">
                        <i className={`fs-5 fa-solid fa-circle-check ${event.isFinish ? 'finished' : 'un-finish'}`}></i>
                    </div>
                    <div className="timeline-date">{event.date}</div>
                    <div className="timeline-content">
                        <h4>{event.title}</h4>
                        <h4>{event.title}</h4>
                        <h4>{event.title}</h4>
                        <h4>{event.title}</h4>
                        <p>{event.description}</p>
                    </div>
                    {!isLasted && <div style={{ width: timeLineWidth, height: timeLineHeight }} className={`timeline-line ${event.isFinish ? 'finished' : 'un-finish'}`}></div>}{' '}
                    {/* 连接线 */}
                </div>
            </>
        );
    };
    return (
        <div>
            <ResizableSidebar>
                <Collapse firstShow={true} header={<Button type="primary">点击</Button>}>
                    <TimeLine vertical events={events}>
                        <TimeLineItem render={render}></TimeLineItem>

                        <TimeLineItem render={render}></TimeLineItem>
                        <TimeLineItem
                            render={(event: any, timeLineWidth: any, timeLineHeight: any, isLasted: any) => (
                                <>
                                    <div className={`content`}>
                                        <div className="icon">
                                            <i className={`fs-5 fa-solid fa-circle-check ${event.isFinish ? 'finished' : 'un-finish'}`}></i>
                                        </div>
                                        <div className="timeline-date">{event.date}</div>
                                        <div className="timeline-content">
                                            <h4>{event.title}</h4>
                                            <p>{event.description}</p>
                                        </div>
                                        {!isLasted && (
                                            <div
                                                style={{ width: timeLineWidth, height: timeLineHeight }}
                                                className={`timeline-line ${event.isFinish ? 'finished' : 'un-finish'}`}
                                            ></div>
                                        )}{' '}
                                        {/* 连接线 */}
                                    </div>
                                </>
                            )}
                        ></TimeLineItem>
                        <TimeLineItem render={render}></TimeLineItem>
                    </TimeLine>
                </Collapse>
            </ResizableSidebar>
        </div>
    );
};

export default withTranslation()(App);
