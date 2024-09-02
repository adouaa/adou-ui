import { useState, useEffect, useRef } from 'react';
import { Navigate, Route, Routes, useParams } from 'react-router-dom';
import React from 'react';
import Home from './Home';
import Category from './Category';

interface AppProps {}

const App = ({}: AppProps) => {
    return (
        <div className="app-wrapper">
            <h1>app</h1>
            <Routes>
                <Route path="/" element={<Navigate to={'/home'} />} />
                <Route path="/home" element={<Home />}>
                    <Route path="/home" element={<Navigate to="/home/category" />}></Route>
                    <Route path="/home/category" element={<Category></Category>}></Route>
                </Route>
            </Routes>
        </div>
    );
};

export default App;
