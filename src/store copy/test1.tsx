import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { fetchHomeDataAction, setBannerListAction, setRecommendsListAction } from './actionCreators';

interface TestProps {
    fetchHomeData?: any;
}

const Test = ({ fetchHomeData }: TestProps) => {
    const getList = () => {
        fetchHomeData();
    };

    useEffect(() => {
        getList();
    }, []);

    return (
        <div className="test-wrapper">
            <h1>test1</h1>
        </div>
    );
};

const mapDispatchToProps = (dispatch: any) => ({
    fetchHomeData: () => dispatch(fetchHomeDataAction()),
});

export default connect(null, mapDispatchToProps)(Test);
