import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import React from 'react';
import ResizableSidebar from 'components/adou-resizeable-sliderbar';

interface AppProps {}

const App = ({}: AppProps) => {
    return (
        <div className="app-wrapper">
            <ResizableSidebar
                wrapperClsassName="ps-0"
                minWidth={30}
                toggleBtnStyle={{ right: '12px', top: '2px' }}
                initialWidth={'200px'}
                maxWidth={'400px'}
                initialHeight={'calc(100vh - 3.4rem)'}
                contentFlex={false}
            >
                <div className="p-3">
                    <h5>侧边栏内容</h5>
                    <p>这是一个可以调整大小的侧边栏</p>
                </div>
            </ResizableSidebar>
        </div>
    );
};

export default App;
