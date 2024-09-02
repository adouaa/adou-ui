import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';
import Test from './store/test';
import Profile from 'store/Profile';

interface AppProps {
    counter: number;
}

const App = ({ counter }: AppProps) => {
    return (
        <div className="app-wrapper">
            <h1>app {counter}</h1>
            <Test></Test>
            <Profile></Profile>
        </div>
    );
};

const mapStateToProps = (state: any) => ({
    counter: state.counter.counter,
});

export default connect(mapStateToProps)(App);
