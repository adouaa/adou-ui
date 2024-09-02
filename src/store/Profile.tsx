import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import React from 'react';
import { changeBanners, changeRecommends, getHomeMultiData } from './modules/home';
import { connect } from 'react-redux';

interface ProfileProps {
    banners?: any;
    recommends?: any;
    changeBanners?: any;
    changeRecommends?: any;
    getHomeMultiData?: any;
}

const Profile = ({ banners, recommends, changeBanners, changeRecommends, getHomeMultiData }: ProfileProps) => {
    useEffect(() => {
        getHomeMultiData();
    }, []);

    return (
        <div className="profile-wrapper">
            <h1>profile</h1>
            <ul>
                {banners.map((item: any) => (
                    <li key={item.title}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
};

const mapStateToProps = (state: any) => ({
    banners: state.home.banners,
    recommends: state.home.recommends,
});

const mapActionToProps = (dispatch: any) => ({
    getHomeMultiData() {
        dispatch(getHomeMultiData());
    },
    /*    changeBanners(banners: any[]) {
        dispatch(changeBanners(banners));
    },
    changeRecommends(recommends: any[]) {
        dispatch(changeRecommends(recommends));
    }, */
});

export default connect(mapStateToProps, mapActionToProps)(Profile);
