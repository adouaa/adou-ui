import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import React from 'react';
import HorizonScrollView from 'components/adou-horizon-scroll-view';

interface AppProps {}

const App = ({}: AppProps) => {
    return (
        <div className="app-wrapper p-3" style={{ width: '300px' }}>
            <HorizonScrollView>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((item: number, index: number) => (
                    <div key={index}>
                        <div>
                            <div>
                                <div>123456</div>
                            </div>
                        </div>
                    </div>
                ))}
            </HorizonScrollView>
        </div>
    );
};

export default App;
