import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import React from 'react';
import Test from './test';

interface AppProps {}

const App = ({}: AppProps) => {
    return (
        <div className="app-wrapper">
            <Test></Test>
        </div>
    );
};

export default App;
