// App.js
import React, { useContext, useState } from 'react';
import YourComponent from './YourComponent';

const App = () => {
    const fn = () => {
    };
    // 注意！！！，不能在 App下使用 useContext，因为App才是一个Provider。。。
    return <YourComponent />;
};
export default App;
