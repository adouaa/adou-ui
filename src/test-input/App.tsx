import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import React from 'react';
import AdouInput from 'components/adou-new-form-item/adou-Input';
import Select from 'components/adou-new-form/adou-select';
import Button from 'components/adou-button';

interface AppProps {}

const App = ({}: AppProps) => {
    return (
        <div className="app-wrapper p-3">
            <AdouInput
                prefix={<i className="fa fa-user"></i>}
                suffix={<i className="fa fa-search"></i>}
                addonAfter={'发送'}
                placeholder="borderless"
                layout={'vertical'}
                varient="filled"
                addonBefore={'https://'}
            ></AdouInput>
        </div>
    );
};

export default App;
