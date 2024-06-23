import Tab1 from "components/Tab1";
import Tab2 from "components/Tab2";
import Tabs from "components/adou-tabs";
import TabItem from "components/adou-tabs/tab-item";
import React, { useState } from "react";
import { withTranslation } from "react-i18next"

const App = () => {


    const [activeIndex, setActiveIndex] = useState(0);

    const handleLabelClickFn = (index: number) => {
        setActiveIndex(index);
    }

    return <div style={{padding: "20px"}}>
        <Tabs handleLabelClick={handleLabelClickFn} activeIndex={activeIndex}>
            <TabItem label="标签1"><Tab1></Tab1></TabItem>
            <TabItem label="标签2"><Tab2></Tab2></TabItem>
            <TabItem label="标签3">123</TabItem>
            <TabItem label="标签4">123</TabItem>
        </Tabs>
    </div>
}

export default withTranslation()(App);