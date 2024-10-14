// App.js
import React, { useContext } from 'react';
import { LoadingContext, LoadingProvider } from '../context/LoadingContext/LoadingContext';
import YourComponent from './YourComponent';
import Loading from 'context/LoadingContext/Loading';

const App = () => {
    // 注意！！！，不能在 App下使用 useContext，因为App才是一个Provider。。。
    return (
        <LoadingProvider>
            <YourComponent />
        </LoadingProvider>
    );
};
export default App;
