import Cascader from 'components/adou-cascader';
import Form from 'components/adou-new-form';
import Select from 'components/adou-new-form/adou-select';
import React, { useState, useEffect, useRef } from 'react';
import useFormData from 'hooks/useFormData';

const App = () => {
    const [options, setOptions] = useState<any>([
        {
            value: 'guide',
            label: 'Guide',
            children: [
                {
                    value: 'disciplines',
                    label: 'Disciplines',
                    children: [
                        {
                            value: 'consistency',
                            label: 'Consistency',
                        },
                        {
                            value: 'feedback',
                            label: 'Feedback',
                        },
                        {
                            value: 'efficiency',
                            label: 'Efficiency',
                        },
                        {
                            value: 'controllability',
                            label: 'Controllability',
                        },
                    ],
                },
                {
                    value: 'navigation',
                    label: 'Navigation',
                    children: [
                        {
                            value: 'side nav',
                            label: 'Side Navigation',
                        },
                        {
                            value: 'top nav',
                            label: 'Top Navigation',
                        },
                    ],
                },
            ],
        },
        {
            value: 'component',
            label: 'Component',
            children: [
                {
                    value: 'basic',
                    label: 'Basic',
                    children: [
                        {
                            value: 'layout',
                            label: 'Layout',
                        },
                        {
                            value: 'color',
                            label: 'Color',
                        },
                        {
                            value: 'typography',
                            label: 'Typography',
                        },
                        {
                            value: 'icon',
                            label: 'Icon',
                        },
                        {
                            value: 'button',
                            label: 'Button',
                        },
                    ],
                },
                {
                    value: 'form',
                    label: 'Form',
                    children: [
                        {
                            value: 'radio',
                            label: 'Radio',
                        },
                        {
                            value: 'checkbox',
                            label: 'Checkbox',
                        },
                        {
                            value: 'input',
                            label: 'Input',
                        },
                        {
                            value: 'input-number',
                            label: 'InputNumber',
                        },
                        {
                            value: 'select',
                            label: 'Select',
                        },
                        {
                            value: 'cascader',
                            label: 'Cascader',
                        },
                        {
                            value: 'switch',
                            label: 'Switch',
                        },
                        {
                            value: 'slider',
                            label: 'Slider',
                        },
                        {
                            value: 'time-picker',
                            label: 'TimePicker',
                        },
                        {
                            value: 'date-picker',
                            label: 'DatePicker',
                        },
                        {
                            value: 'datetime-picker',
                            label: 'DateTimePicker',
                        },
                        {
                            value: 'upload',
                            label: 'Upload',
                        },
                        {
                            value: 'rate',
                            label: 'Rate',
                        },
                        {
                            value: 'form',
                            label: 'Form',
                        },
                    ],
                },
                {
                    value: 'data',
                    label: 'Data',
                    children: [
                        {
                            value: 'table',
                            label: 'Table',
                        },
                        {
                            value: 'tag',
                            label: 'Tag',
                        },
                        {
                            value: 'progress',
                            label: 'Progress',
                        },
                        {
                            value: 'tree',
                            label: 'Tree',
                        },
                        {
                            value: 'pagination',
                            label: 'Pagination',
                        },
                        {
                            value: 'badge',
                            label: 'Badge',
                        },
                    ],
                },
                {
                    value: 'notice',
                    label: 'Notice',
                    children: [
                        {
                            value: 'alert',
                            label: 'Alert',
                        },
                        {
                            value: 'loading',
                            label: 'Loading',
                        },
                        {
                            value: 'message',
                            label: 'Message',
                        },
                        {
                            value: 'message-box',
                            label: 'MessageBox',
                        },
                        {
                            value: 'notification',
                            label: 'Notification',
                        },
                    ],
                },
                {
                    value: 'navigation',
                    label: 'Navigation',
                    children: [
                        {
                            value: 'menu',
                            label: 'Menu',
                        },
                        {
                            value: 'tabs',
                            label: 'Tabs',
                        },
                        {
                            value: 'breadcrumb',
                            label: 'Breadcrumb',
                        },
                        {
                            value: 'dropdown',
                            label: 'Dropdown',
                        },
                        {
                            value: 'steps',
                            label: 'Steps',
                        },
                    ],
                },
                {
                    value: 'others',
                    label: 'Others',
                    children: [
                        {
                            value: 'dialog',
                            label: 'Dialog',
                        },
                        {
                            value: 'tooltip',
                            label: 'Tooltip',
                        },
                        {
                            value: 'popover',
                            label: 'Popover',
                        },
                        {
                            value: 'card',
                            label: 'Card',
                        },
                        {
                            value: 'carousel',
                            label: 'Carousel',
                        },
                        {
                            value: 'collapse',
                            label: 'Collapse',
                        },
                    ],
                },
            ],
        },
        {
            value: 'resource',
            label: 'Resource',
            children: [
                {
                    value: 'axure',
                    label: 'Axure Components',
                },
                {
                    value: 'sketch',
                    label: 'Sketch Templates',
                },
                {
                    value: 'docs',
                    label: 'Design Documentation',
                },
            ],
        },
        {
            value: 'test',
            label: 'TEST',
        },
    ]);

    const formRef = useRef<any>(null);

    useEffect(() => {
        // 模拟异步获取默认值
        setTimeout(() => {
            setFormData('', { test: ['component', 'basic', 'typography'], test2: 'test' }, true);
        }, 1000);
    }, []);

    const handleSubmit = () => {
        console.log('formData: ', formData);
    };

    const [formData, setFormData] = useFormData();

    return (
        <div className="p-3">
            <h1>Cascader Example</h1>
            <button onClick={handleSubmit}>收集</button>
            <Form labelPosition="left-top" onFormDataChange={setFormData} data={formData}>
                <Cascader width={'900px'} required returnType="obj" activeColor={{ font: '#409eff', bgc: 'transparent' }} options={options} name="test" label={'测试一下'} />
                <Select required options={options} label={'测试'} name="test2"></Select>
            </Form>
        </div>
    );
};

export default App;
