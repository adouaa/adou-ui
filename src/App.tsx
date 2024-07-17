import Tab1 from "components/Tab1";
import Tab2 from "components/Tab2";
import Accordion from "components/adou-collapse";
import Collapse from "components/adou-collapse-animate";
import OffCanvas from "components/adou-offcanvas";
import Tabs from "components/adou-tabs";
import TabItem from "components/adou-tabs/tab-item";
import React, { useState } from "react";
import { withTranslation } from "react-i18next"

const App = () => {
    const panels = [
        { title: 'Panel 1', content: 'Content for panel 1' },
        { title: 'Panel 2', content: 'Content for panel 2' },
        // 添加更多面板...
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    const handleLabelClickFn = (index: number) => {
        setActiveIndex(index);
    }

    return <div style={{ padding: "20px" }}>
        <Accordion title="Panel 1">
            {/* <div className="card" style={{ padding: '1rem' }}>Content for panel 1</div> */}
            <h1>555</h1>
            <h1>555</h1>
            <h1>555</h1>
            <h1>555</h1>
        </Accordion>
        <Accordion title="Panel 2">
            <div style={{ padding: '1rem' }}>Content for panel 2</div>
        </Accordion>
        <Accordion title="Panel 3">
            <div style={{ padding: '1rem' }}>Content for panel 3</div>
        </Accordion>
        <Collapse></Collapse>
        <OffCanvas></OffCanvas>
    </div>
}

export default withTranslation()(App);