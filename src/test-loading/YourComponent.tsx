// YourComponent.js
import React, { useEffect } from 'react';
import './index.scss';
import { useLoading } from 'hooks/useLoading';

const YourComponent = () => {
    const { showLoading, hideLoading } = useLoading();
    const fetchData = async () => {
        showLoading();
        try {
            const response = await fetch('https://api.example.com/data');
            const data = await response.json();
            console.log(data); // 处理数据
        } catch (error) {
            console.error('Fetching error: ', error);
        } finally {
            setTimeout(() => {
                hideLoading();
            }, 1000);
        }
    };
    const handleClick = async () => {
        showLoading();
        try {
            await fetchData();
        } finally {
            hideLoading();
        }
    };

    return <button onClick={handleClick}>Click Me</button>;
};

export default YourComponent;
