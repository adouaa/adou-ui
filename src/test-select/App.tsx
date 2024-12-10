import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import React from 'react';
import Select from 'components/adou-new-form-item/adou-select';
import Select1 from 'components/adou-new-form/adou-select';
import AdouInput from 'components/adou-new-form-item/adou-Input';
import LiveSearch from 'components/adou-new-form-item/adou-live-search';
import TestSelect from 'components/adou-new-form-item/adou-select/test-select';
import RetrievrSelect from 'components/adou-new-form-item/adou-retrieve-select';

interface AppProps {}

const App = ({}: AppProps) => {
    const [options, setOptions] = useState<any[]>([
        { label: '', value: '香蕉' },
        { label: '西瓜', value: '西瓜' },
        { label: '葡萄', value: '葡萄' },
        { label: '草莓', value: '草莓' },
        { label: '芒果', value: '芒果' },
    ]);

    const [names, setNames] = useState<any>([
        { label: 'Alice', value: 'alice' },
        { label: 'Bob', value: 'bob' },
        { label: 'Carol', value: 'carol' },
        { label: 'David', value: 'david' },
        { label: 'Emma', value: 'emma' },
        { label: 'Frank', value: 'frank' },
        { label: 'Grace', value: 'grace' },
        { label: 'Henry', value: 'henry' },
        { label: 'Ivy', value: 'ivy' },
        { label: 'Jack', value: 'jack' },
        { label: 'Kate', value: 'kate' },
        { label: 'Leo', value: 'leo' },
        { label: 'Mia', value: 'mia' },
        { label: 'Noah', value: 'noah' },
        { label: 'Olivia', value: 'olivia' },
        { label: 'Peter', value: 'peter' },
        { label: 'Queen', value: 'queen' },
        { label: 'Ryan', value: 'ryan' },
        { label: 'Sophia', value: 'sophia' },
        { label: 'Tom', value: 'tom' },
    ]);

    const handleSelectInputChange = (value: string) => {
        setTimeout(() => {
            setNames((preData: any) => [...preData, { label: value, value: value }]);
        }, 500);
    };

    return (
        <div className="app-wrapper p-3">
            <AdouInput varient="filled"></AdouInput>
            <LiveSearch options={options}></LiveSearch>
            <Select
                labelKey="label"
                valueKey="value"
                optionRender={(option: any, labelKey: string, valueKey: string) => <h1>{option[labelKey]}</h1>}
                varient="filled"
                size="lg"
                options={options}
            ></Select>
            <Select1 options={options}></Select1>
            <hr />
            <TestSelect
                filterOption={(input: string, option: any) => option.label.toLowerCase().includes('S'.toLowerCase())}
                defaultValue={'carol'}
                filter
                showSearch
                placeholder="测试一下"
                options={names}
            ></TestSelect>
            <hr />
            <RetrievrSelect options={options}></RetrievrSelect>
        </div>
    );
};

export default App;
