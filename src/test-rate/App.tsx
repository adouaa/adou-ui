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
    const [options, setOptions] = useState<any>([
        {
            label: '遵医嘱未使用',
            value: '遵医嘱未使用',
        },
    ]);

    const handleRateChange = (value: number) => {
        setRateValue(value);
        console.log('Selected rate:', value);
    };

    return (
        <div>
            <h1>Rating Component</h1>
            <Rate activeBgc="green" value={3.5} onChange={handleRateChange} allowHalf={true} max={5} />
            <Form labelPosition="top" data={{}}>
                <AdouInput width={'50%'} labelPosition="left-top" label="测试123" name="event" suffixContent={<i className="fa fa-solid fa-trash text-danger"></i>}></AdouInput>
                <AdouCheckbox
                    // width={'50%'}
                    suffixContent={<i className="fa fa-solid fa-trash"></i>}
                    label="复选框"
                    options={[
                        { label: '测试', value: 'test1' },
                        { label: '测试', value: 'test2' },
                        { label: '测试', value: 'test3' },
                    ]}
                    name="checkbox"
                ></AdouCheckbox>
                <LiveSearch width={'50%'} label="搜索框" name="search" options={options} suffixContent={<i className="fa fa-solid fa-trash"></i>}></LiveSearch>
                <AdouRadio
                    // width={'50%'}
                    suffixContent={<i className="fa fa-solid fa-trash"></i>}
                    options={[{ label: '测试', value: 'test4' }]}
                    label="单选"
                    name="radio"
                ></AdouRadio>
                <RetrievrSelect
                    width={'50%'}
                    single={false}
                    returnType="obj"
                    options={[]}
                    label="下拉框"
                    name="select"
                    suffixContent={<i className="fa fa-solid fa-trash"></i>}
                ></RetrievrSelect>
                <Select width={'50%'} suffixContentType="button" options={[]} label="下拉框2" name="select2" suffixContent={<i className="fa fa-solid fa-trash"></i>}></Select>
                <TagInput width={'50%'} name="aa" label="标签" suffixContent={<i className="fa fa-solid fa-trash"></i>}></TagInput>
                <TextArea width={'50%'} label="富文本" name="text" suffixContent={<i className="fa fa-solid fa-trash"></i>}></TextArea>
            </Form>
        </div>
    );
};

export default App;
