import React, { useEffect, useRef, useState } from 'react';
import FormComponent from './index';
import AdouInput from 'components/adou-Input';
import Select from 'components/adou-select';
import RetrievrSelect from 'components/adou-retrieve-select';
import TextArea from 'components/adou-textarea';
import TagInput from 'components/adou-tag-input';
import AdouRadio from 'components/adou-radio';
import AdouCheckbox from 'components/adou-checkbox';

const App = () => {
    // 初始数据
    const [data, setData] = useState({});

    const [foods, setFoods] = useState<any[]>([
        { label: '煎饼', value: 'jianbing' },
        { label: '包子', value: 'baozi' },
        { label: '饺子', value: 'jiaozi' },
        { label: '鲁菜肉夹馍', value: 'roujiamo' },
        { label: '炸酱面', value: 'zhajiangmian' },
    ]);

    const formRef = useRef<any>(null);

    // 处理表单数据变化
    const handleFormDataChange = (key: string, value: any) => {
        setData((preData: any) => ({
            ...preData,
            ...{ [key]: value },
        }));
    };

    const handleSubmit = () => {
        console.log(formRef.current.getData());
    };
    const handleChange = () => {
        setData((preData: any) => ({
            ...preData,
            f1: { label: '包子', value: 'baozi' },
        }));
    };

    useEffect(() => {
        setTimeout(() => {
            setData({
                // f1: { label: '饺子', value: 'jiaozi' },
                name: 'John Doe',
                age: 30,
                foods: { label: '鲁菜肉夹馍', value: 'roujiamo' },
                f1: { label: '饺子', value: 'jiaozi' },
                text: '测试文本框',
                radio: 'roujiamo',
                checkbox: { label: '煎饼', value: 'jianbing' },
            });
        }, 1000);
    }, []);

    return (
        <div>
            <h1>Form Example</h1>
            <button onClick={handleChange}>Change</button>

            <FormComponent data={data} onFormDataChange={handleFormDataChange} ref={formRef}>
                <AdouInput label="Name" name="name"></AdouInput>
                <AdouInput label="Age" name="age"></AdouInput>
                <Select returnType="obj" options={foods} label="Food" name="foods"></Select>
                <RetrievrSelect single={false} returnType="obj" options={foods} label="F1" name="f1"></RetrievrSelect>
                <TextArea label="富文本" name="text"></TextArea>
                <TagInput label="标签" name="tags"></TagInput>
                <AdouRadio returnType="obj" options={foods} label="单选" name="radio"></AdouRadio>
                <AdouCheckbox returnType="obj" options={foods} label="复选" name="checkbox"></AdouCheckbox>
            </FormComponent>
            <div>
                <h2>Current Data:</h2>
                <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default App;
