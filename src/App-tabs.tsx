import Tab1 from 'components/Tab1';
import Tab2 from 'components/Tab2';
import Tabs from 'components/adou-tabs';
import TabItem from 'components/adou-tabs/tab-item';
import React, { useState } from 'react';
import { withTranslation } from 'react-i18next';

const App = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleLabelClickFn = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <div style={{ padding: '20px' }}>
            <ul className="nav nav-tabs m-2">
                <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">
                        Active
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link  active" href="#" role="button" aria-expanded="false">
                        Dropdown
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        Link
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled">Disabled</a>
                </li>
            </ul>
            <Tabs tabStyle="bootstrap" onLabelClick={handleLabelClickFn} activeIndex={activeIndex}>
                <TabItem label="标签1">
                    <Tab1></Tab1>
                </TabItem>
                <TabItem label="标签2">
                    <Tab2></Tab2>
                </TabItem>
                <TabItem label="标签3">123</TabItem>
                <TabItem label="标签4">123</TabItem>
            </Tabs>
        </div>
    );
};

export default withTranslation()(App);
