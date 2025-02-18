import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import React from 'react';

interface HomeProps {}

const Home = ({}: HomeProps) => {
    return (
        <div className="home-wrapper">
            <h1>home</h1>
        </div>
    );
};

export default Home;
