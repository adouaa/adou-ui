import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import React from 'react';
import ListGroup from 'components/adou-list-group';

interface AppProps {}

const App = ({}: AppProps) => {
    const data = [
        { label: 'Item 1', value: '1' },
        { label: 'Item 2', value: '2' },
        { label: 'Item 3', value: '3' },
        { label: 'Item 4', value: '4' },
        { label: 'Item 5', value: '5' },
    ];

    return (
        <div className="app-wrapper">
            <div className="basic-wrapper">
                <ListGroup lineBreak itemHeight={60} columnMaxHeight={120} data={data}></ListGroup>
            </div>
        </div>
    );
};

export default App;
