import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

interface TestProps {}

const Test = ({}: TestProps) => {
    // 示例 action
    const exampleAction = () => ({
        type: 'EXAMPLE_ACTION',
    });
    const state = useSelector((state: any) => state.example);
    console.log(state);
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(exampleAction());
    };

    return (
        <div className="test-wrapper">
            <h1>test</h1>

            <div>
                <p>State: {JSON.stringify(state)}</p>
                <button onClick={handleClick}>Dispatch Action</button>
            </div>
        </div>
    );
};

export default Test;
