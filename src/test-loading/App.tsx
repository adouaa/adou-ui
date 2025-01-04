// App.js
import React, { useContext } from 'react';
import YourComponent from './YourComponent';

const App = () => {
    // 注意！！！，不能在 App下使用 useContext，因为App才是一个Provider。。。
    return (
            <YourComponent />
    );
};
export default App;
