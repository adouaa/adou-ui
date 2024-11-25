import { useState, useEffect, useRef, useContext } from 'react';
import { useParams } from 'react-router-dom';
import React from 'react';
import { NotificationContext } from 'context/NotificationContext/NotificationContext';

interface TestProps {}

const Test = ({}: TestProps) => {
    const context = useContext(NotificationContext);
    console.log("Test-context: ", context);

    const handleOpen1 = () => {
        context?.open({
            title: (
                <div>
                    <span>Hello</span>
                    <div>你好1</div>
                </div>
            ),
            message: 'World',
        });
    };
    const handleOpen2 = () => {
        context?.open({
            title: (
                <div>
                    <div>你好2</div>
                </div>
            ),
            message: 'World',
            type: 'warning',
            customTitleIcon: <i className="fa-solid fa-microphone"></i>,
        });
    };
    const handleOpen3 = () => {
        context?.open({
            title: (
                <div>
                    <span>Hello3</span>
                </div>
            ),
            message: 'World',
            type: 'info',
        });
    };
    const handleOpen4 = () => {
        context?.open({
            title: (
                <div>
                    <span>Hello4</span>
                </div>
            ),
            message: 'World',
            type: 'danger',
        });
    };

    return (
        <div className="test-wrapper">
            <h1>test</h1>
            <button onClick={handleOpen1}>打开</button>
            <button onClick={handleOpen2}>打开</button>
            <button onClick={handleOpen3}>打开</button>
            <button onClick={handleOpen4}>打开</button>
        </div>
    );
};

export default Test;