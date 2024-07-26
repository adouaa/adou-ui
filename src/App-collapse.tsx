import Button from "components/adou-button";
import AdouCollapse from "components/adou-collapse";
import OffCanvas from "components/adou-offcanvas";
import React, { useState } from "react";
import { withTranslation } from "react-i18next"

const App = () => {
    return <>
        <AdouCollapse header={<Button type="primary">测试</Button>}>
            <h1>666</h1>
            <h1>666</h1>
            <h1>666</h1>
            <h1>666</h1>
            <h1>666</h1>
        </AdouCollapse>
        <OffCanvas></OffCanvas>
    </>
}

export default withTranslation()(App);