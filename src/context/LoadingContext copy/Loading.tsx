// Loading.js
import React from 'react';
import './index.scss'; // 可以自定义样式

const Loading = () => {
    return (
        <div className="loading-overlay">
            <div className="loading-spinner me-2"></div>
            <span>Loading...</span>
        </div>
    );
};

export default Loading;
