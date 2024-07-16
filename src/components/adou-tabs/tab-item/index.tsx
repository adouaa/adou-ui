import React from "react";
import { withTranslation } from "react-i18next"

interface TabItemProps {
    label?: string,
    children?: any,
    active?: boolean,
    prefixIcon?: string,
    activeLabelColor?: string
}

const TabItem = (props: TabItemProps) => {

    const { label, children, active, activeLabelColor = "#409eff" } = props;
    return <>
        {active && <div className="tab-item-wrapper" style={{padding: "15px 10px"}}>{children}</div>}
    </>
}

export default withTranslation()(TabItem);