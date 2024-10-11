import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import React from 'react';
import NoticationProvider from 'context/NotificationContext/NotificationContext';
import Test from './test';

interface AppProps {}

const App = ({}: AppProps) => {
    return (
        <div className="app-wrapper">
            <h1>app</h1>
            <NoticationProvider>
                <Test></Test>
            </NoticationProvider>
        </div>
    );
};

export default App;
