import React from 'react';
import { ToastProvider, useToast } from 'components/adou-toast';

const App: React.FC = () => {
    const { open } = useToast();

    const success = () => open({ type: 'success', content: 'This is a success message' });
    const error = () => open({ type: 'error', content: 'This is an error message' });
    const warning = () => open({ type: 'warning', content: 'This is a warning message' });

    return (
        <div>
            <h1>测试Toast</h1>
            <button onClick={success}>Success</button>
            <button onClick={error}>Error</button>
            <button onClick={warning}>Warning</button>
        </div>
    );
};

// 最后在主入口文件中包裹你的应用
const MainApp: React.FC = () => (
    <ToastProvider>
        <App />
    </ToastProvider>
);

export default MainApp;
