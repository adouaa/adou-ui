// App.js
import React, { useContext } from 'react';
// import { LoadingContext, LoadingProvider } from '../context/LoadingContext/LoadingContext';
import Loading from 'context/LoadingContext/Loading';
import Switch from 'components/adou-switch';
import PhotoWall from 'components/adou-photo-wall';

const App = () => {
    return (
        <div className="">
            <Switch size="lg" type="warning" defaultValue={false}></Switch>
            {/* <PhotoWall></PhotoWall> */}
        </div>
    );
};
export default App;
