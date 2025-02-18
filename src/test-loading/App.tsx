// App.tsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home';
import Detail from './Detail';
import YourComponent from './YourComponent';
import Drawer from 'components/adou-drawer';

const App: React.FC = () => {
    return (
        <Drawer placement="start" title="左侧抽屉" trigger={<button className="btn btn-primary">从左侧打开</button>}>
            <p>从左侧滑出的抽屉</p>
        </Drawer>
    );
};

export default App;
