import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import React from 'react';
import store from 'store';
import { connect } from 'react-redux';
import { addNumberAction, subNumberAction } from './actionCreators';

interface TestProps {
    counter?: number;
    bannerList?: any;
    recommendsList?: any;
    addNumber?: any;
    subNumber?: any;
}

const Test = ({ counter, bannerList, recommendsList, addNumber, subNumber }: TestProps) => {
    const handleCalcNumber = (num: number, isAdd: boolean) => {
        if (isAdd) {
            addNumber(num);
        } else {
            subNumber(num);
        }
    };

    return (
        <div className="test-wrapper">
            <h1>test num: {counter}</h1>
            <hr />
            <button onClick={() => handleCalcNumber(5, true)}>+5</button>
            <button onClick={() => handleCalcNumber(10, false)}>-10</button>

            <hr />
            <ul>
                {bannerList.map((item: any, index: number) => (
                    <li key={index}>{item.title}</li>
                ))}
            </ul>
            <ul>
                {recommendsList.map((item: any, index: number) => (
                    <li key={index}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
};

const mapStateToProps = (state: any) => ({
    counter: state.counter,
    bannerList: state.bannerList,
    recommendsList: state.recommendsList,
});

const mapDispatchToProps = (dipatch: any) => ({
    addNumber: (num: number) => dipatch(addNumberAction(num)),
    subNumber: (num: number) => dipatch(subNumberAction(num)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Test);
