import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';
import { addNumber, subNumber } from './modules/counter';

interface TestProps {
    counter?: number;
    addNumber: any;
    subNumber: any;
}

const Test = ({ counter, addNumber, subNumber }: TestProps) => {
    const handleAddNumber = (num: number) => {
        addNumber(num);
    };
    return (
        <div className="test-wrapper">
            <h1>test {counter}</h1>
            <button onClick={() => handleAddNumber(5)}>+5</button>
        </div>
    );
};

const mapStateToProps = (state: any) => {
    console.log('state: ', state);
    return {
        counter: state.counter.counter,
    };
};

const mapActionToProps = (dispatch: any) => ({
    addNumber(num: number) {
        dispatch(addNumber(num));
    },
    subNumber(num: number) {
        dispatch(subNumber(num));
    },
});

export default connect(mapStateToProps, mapActionToProps)(Test);
