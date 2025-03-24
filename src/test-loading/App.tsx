import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

// 页面组件
const PageA = () => <h1>Page A</h1>;
const PageB = () => <h1>Page B</h1>;
const PageC = () => <h1>Page C</h1>;

const HistoryTracker = ({ history }) => {
    return (
        <div>
            <h2>历史记录:</h2>
            <ul>
                {history.map((entry, index) => (
                    <li key={index}>{entry}</li>
                ))}
            </ul>
        </div>
    );
};

// 主应用组件
const App = () => {
    const location = useLocation();
    const [history, setHistory] = useState<any>([]);

    useEffect(() => {
        // 在每次路由变化时更新历史记录
        setHistory((prevHistory) => [...prevHistory, location.pathname]);
    }, [location]);

    return (
        <div>
            <h1>导航示例</h1>
            <nav>
                <Link to="/">首页</Link>
                <Link to="/page-b">页面 B</Link>
                <Link to="/page-c">页面 C</Link>
            </nav>
            <Routes>
                <Route path="/" element={<PageA />} />
                <Route path="/page-b" element={<PageB />} />
                <Route path="/page-c" element={<PageC />} />
            </Routes>
            <HistoryTracker history={history} />
        </div>
    );
};

// 包裹应用的 Router
const MainApp = () => (
    <Router>
        <App />
    </Router>
);

export default MainApp;
