import React from 'react';
import { ToastProvider } from '../context/ToastContext/ToastContext'; // 确保路径正确
import SomeComponent from './some';

const App: React.FC = () => {
    return (
        <div>
            {/* 你的其他组件 */}
            <SomeComponent></SomeComponent>
        </div>
    );
};

export default App;
