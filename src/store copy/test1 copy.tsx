import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { setBannerListAction, setRecommendsListAction } from './actionCreators';

interface TestProps {
    setBannerList?: any;
    setRecommendsList?: any;
}

const Test = ({ setBannerList, setRecommendsList }: TestProps) => {
    const getList = () => {
        axios.get('http://123.207.32.32:8000/home/multidata').then((res: any) => {
            console.log('启动');

            const banners = res.data.data.banner.list;
            setBannerList(banners);
            const recommedsList = res.data.data.recommend.list;
            setRecommendsList(recommedsList);
        });
        console.log('跳过启动');
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
    setBannerList: (banners: any) => dispatch(setBannerListAction(banners)),
    setRecommendsList: (recommendsList: any) => dispatch(setRecommendsListAction(recommendsList)),
});

export default connect(null, mapDispatchToProps)(Test);
