import React, { useState } from 'react';
import Rate from '../components/adou-rate';
import Form from 'components/adou-new-form';
import AdouInput from 'components/adou-new-form/adou-Input';
import AdouCheckbox from 'components/adou-new-form/adou-checkbox';
import LiveSearch from 'components/adou-new-form/adou-live-search';
import AdouRadio from 'components/adou-new-form/adou-radio';
import RetrievrSelect from 'components/adou-new-form/adou-retrieve-select';
import Select from 'components/adou-new-form/adou-select';
import TagInput from 'components/adou-new-form/adou-tag-input';
import TextArea from 'components/adou-new-form/adou-textarea';

const App = () => {
    const [rateValue, setRateValue] = useState<number>(3);

    const handleRateChange = (value: number) => {
        setRateValue(value);
        console.log('Selected rate:', value);
    };

    return (
        <div>
            <h1>Rating Component</h1>
            <Rate activeBgc="green" value={3.5} onChange={handleRateChange} allowHalf={true} max={5} />
            <Form labelPosition="top" data={{}}>
                <AdouInput labelPosition="left-top" label="测试" name="event" suffixContent={<i className="fa fa-solid fa-trash text-danger"></i>}></AdouInput>
                <AdouCheckbox
                    suffixContent={<i className="fa fa-solid fa-trash"></i>}
                    label="复选框"
                    options={[
                        { label: '测试', value: 'test' },
                        { label: '测试', value: 'test' },
                        { label: '测试', value: 'test' },
                    ]}
                    name="checkbox"
                ></AdouCheckbox>
                <LiveSearch label="搜索框" name="search" options={[]} suffixContent={<i className="fa fa-solid fa-trash"></i>}></LiveSearch>
                <AdouRadio suffixContent={<i className="fa fa-solid fa-trash"></i>} options={[{ label: '测试', value: 'test' }]} label="单选" name="radio"></AdouRadio>
                <RetrievrSelect single={false} returnType="obj" options={[]} label="下拉框" name="select" suffixContent={<i className="fa fa-solid fa-trash"></i>}></RetrievrSelect>
                <Select options={[]} label="下拉框2" name="select2" suffixContent={<i className="fa fa-solid fa-trash"></i>}></Select>
                <TagInput name="aa" label="标签" suffixContent={<i className="fa fa-solid fa-trash"></i>}></TagInput>
                <TextArea label="富文本" name="text" suffixContent={<i className="fa fa-solid fa-trash"></i>}></TextArea>
            </Form>
        </div>
    );
};

export default App;
