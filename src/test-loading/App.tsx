// App.tsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home';
import Detail from './Detail';
import YourComponent from './YourComponent';
import Drawer from 'components/adou-drawer';
import TextStreamComponent from 'test/TextStreamComponent';

const App: React.FC = () => {
    return (
        <Drawer placement="start" title="左侧抽屉" trigger={<button className="btn btn-primary">从左侧打开</button>}>
            <TextStreamComponent></TextStreamComponent>
        </Drawer>
    );
};

export default App;
