import Tab1 from "components/Tab1";
import Tab2 from "components/Tab2";
import OffCanvas from "components/adou-offcanvas";
import Tabs from "components/adou-tabs";
import TabItem from "components/adou-tabs/tab-item";
import React, { useState } from "react";
import { withTranslation } from "react-i18next"

const App = () => {


    const [activeIndex, setActiveIndex] = useState(0);

    const handleLabelClickFn = (index: number) => {
        setActiveIndex(index);
    }

    return <div style={{ padding: "20px" }}>
        <OffCanvas></OffCanvas>
    </div>
}

export default withTranslation()(App);