import { useState, useEffect, useRef, useContext } from 'react';
import { useParams } from 'react-router-dom';
import React from 'react';
import { NotificationContext } from 'context/NotificationContext/NotificationContext';

interface TestProps {}

const Test = ({}: TestProps) => {
    const context = useContext(NotificationContext);

    const handleOpen = () => {
        context?.open({ title: 'Hello', message: 'World' });
    };

    return (
        <div className="test-wrapper">
            <h1>test</h1>
            <button onClick={handleOpen}>打开</button>
        </div>
    );
};

export default Test;
