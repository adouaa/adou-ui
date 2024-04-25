import React from "react";
import { withTranslation } from "react-i18next"

interface TabItemProps {
    label?: string,
    children?: any,
    active?: boolean
}

const TabItem = (props: TabItemProps) => {

    const { label, children, active } = props;
    return <>
        {active && <div style={{padding: "15px 10px"}}>{children}</div>}
    </>
}

export default withTranslation()(TabItem);