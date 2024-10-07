import React from 'react';
import { ToastProvider } from '../context/ToastContext'; // 确保路径正确
import SomeComponent from './some';

const App: React.FC = () => {
    return (
        <ToastProvider>
            {/* 你的其他组件 */}
            <SomeComponent></SomeComponent>
        </ToastProvider>
    );
};

export default App;
