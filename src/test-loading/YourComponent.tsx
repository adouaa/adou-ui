// YourComponent.js
import React, { useEffect } from 'react';
import { useLoading } from '../context/LoadingContext/LoadingContext';
import './index.scss';

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
            hideLoading();
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            Your content here
            <h2 className="title">
                <div className=" underline-text">十年后，我真的选择对了路吗？..十年后，我真的选择对了路吗十年后，我真的选择对了路吗十年后，我真的选择对了路吗.</div>
            </h2>
        </div>
    );
};

export default YourComponent;
