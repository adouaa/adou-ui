import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import React from 'react';
import FormItem from 'components/adou-new-form-item/adou-form-item';
import AdouInput from 'components/adou-new-form-item/adou-Input';
import Form from 'components/adou-new-form-item';
import Select from 'components/adou-new-form-item/adou-select';
import Button from 'components/adou-button';
import RetrievrSelect from 'components/adou-new-form-item/adou-retrieve-select';
import LiveSearch from 'components/adou-new-form-item/adou-live-search';
import Textarea from 'components/adou-new-form-item/adou-textarea';
import TagInput from 'components/adou-new-form-item/adou-tag-input';
import useForm from 'components/adou-new-form-item/useForm';
import AdouCheckbox from 'components/adou-new-form-item/adou-checkbox';
import AdouRadio from 'components/adou-new-form-item/adou-radio';
import CodeTextArea from 'components/adou-codeTextArea';

interface AppProps {}

const App = ({}: AppProps) => {
    const form = useForm({});

    const formRef = useRef<any>(null);

    const handleGetData = () => {
        console.log('form.getData();: ', form.getData());
    };

    const handleClear = () => {
        form.clear();
    };

    const handleValidate = () => {
        const valid = formRef.current.validateForm();
        // console.log('valid: ', valid);
        // console.log('form.validate: ', form.validate());
    };

    const [options, setOptions] = useState<any>([
        { label: '你好123你好123', value: '你好123你好123' },
        { label: '你好5555', value: '你好5555' },
        { label: '你好55rr', value: '你好55rr' },
        { label: '你好44', value: '你好44' },
        { label: '你好ee', value: '你好ee' },
    ]);

    const [foodList, setFoodList] = useState<any[]>([
        { label: '苹果', value: '苹果' },
        { label: '香蕉', value: '香蕉' },
        { label: '橙子', value: '橙子' },
        { label: '西瓜', value: '西瓜' },
        { label: '葡萄', value: '葡萄' },
    ]);

    const [liveOptions, setliveOptions] = useState<any>([
        { label: '小明', value: 'xm' },
        { label: '小红', value: 'xh' },
    ]);

    useEffect(() => {
        setTimeout(() => {
            form.setFormData({
                position1: 'xm',
                cs2: 'cs21',
                area: '你好123你好123',
                position2: '人民万岁',
                position3: ['你好呀', '同志们'],
                liveSearch2: '米粉',
                remote: '你好5555',
            });
        }, 300);
    }, []);

    const rules = [{ required: true, message: '请输入' }];

    return (
        <div className="app-wrapper p-3">
            {JSON.stringify(form.formData)}
            <FormItem rules={rules} addonBefore={'问候'} label="地点" name="area">
                <Select placeholder="请选择" commonSuffixContent="市区" options={options}></Select>
                <AdouInput commonSuffixContent="测" name="cccc"></AdouInput>
            </FormItem>
            <Button onClickOK={handleGetData} type="primary">
                获取
            </Button>
            <Button externalClassName="me-2" onClickOK={handleClear} type="danger">
                删除
            </Button>
            <Button onClickOK={handleValidate} type="warning">
                校验
            </Button>

            <Form commonFormItemWrapperWidth={'50%'} commonRules={rules} form={form} ref={formRef} clearable layout="inline">
                {/* Input */}
                <FormItem rules={rules} addonBefore={'问候'} /* addonBefore={'测试'} */ /* addonAfter={'测试'} */ name="cs1" label="你好">
                    <AdouInput></AdouInput>
                </FormItem>
                <FormItem addonBefore={'问候'} addonAfter={'问候'} rules={rules} label="频次" name="cs2">
                    <AdouInput commonSuffixContent="次"></AdouInput>
                </FormItem>
                <FormItem rules={rules} addonBefore={'问候'} label="地点" name="area">
                    <Select placeholder="请选择" commonSuffixContent="市区" options={options}></Select>
                    <AdouInput commonSuffixContent="测" name="cccc"></AdouInput>
                </FormItem>
                <FormItem label="搜索" /* addonBefore={'关键'} */ /* addonAfter={'结尾'} */ name="remote" /* layout="horizontal" */>
                    <RetrievrSelect single={false} returnType="obj" commonSuffixContent="地区32" options={options}></RetrievrSelect>
                </FormItem>
                <FormItem label="搜索" /* addonBefore={'关键'} */ /* addonAfter={'结尾'} */ name="position1" /* layout="horizontal" */>
                    <LiveSearch options={liveOptions}></LiveSearch>
                </FormItem>
                <FormItem label="搜索" /* addonBefore={'关键'}  */ /* addonAfter={'结尾'} */ name="position2" /* layout="horizontal" */>
                    <Textarea rows={1} commonSuffixContent="天"></Textarea>
                </FormItem>
                <FormItem label="搜索" /* addonBefore={'关键'}  */ /* addonAfter={'结尾'} */ name="position3" /* layout="horizontal" */>
                    <TagInput commonSuffixContent="天"></TagInput>
                </FormItem>
                <FormItem label="美食" /* addonBefore={'关键'}  */ /* addonAfter={'结尾'} */ name="food" /* layout="horizontal" */>
                    <AdouCheckbox inline={false} options={foodList}></AdouCheckbox>
                </FormItem>
                <FormItem label="爱好" /* addonBefore={'关键'}  */ /* addonAfter={'结尾'} */ name="hobby" /* layout="horizontal" */>
                    <AdouRadio inline={false} options={foodList}></AdouRadio>
                </FormItem>
            </Form>
            <CodeTextArea defaultValue="455555555555555"></CodeTextArea>
        </div>
    );
};

export default App;
