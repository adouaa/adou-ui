import { useState, useEffect, useRef, Children } from 'react';
import { useParams } from 'react-router-dom';
import React from 'react';
import AdouTable, { EditableTableCell } from 'components/adou-table';
import Tooltip from 'components/adou-tooltip';
import Sortable from 'components/adou-sortable';
import Dialog from 'test-dialog';
import Select from 'components/adou-new-form/adou-select';
import Form from 'components/adou-new-form';

interface AppProps {}

const App = ({}: AppProps) => {
    const tableRef = useRef<any>(null);

    const [data, setData] = useState<any>([
        {
            id: 'team001',
            teamName: 'Software Engineer',
            email: 'software@company.com',
            age: 38,
            count: 12,
            checked: false,
            /* children: [
                { id: 'member001', teamName: 'Alice', email: 'alice.software@company.com', age: 29, count: 6, checked: false },
                { id: 'member002', teamName: 'Bob', email: 'bob.software@company.com', age: 31, count: 5, checked: false },
                { id: 'member003', teamName: 'Charlie', email: 'charlie.software@company.com', age: 34, count: 8, checked: false },
            ], */
        },
        {
            id: 'team002',
            teamName: 'Product Management',
            email: 'product@company.com',
            age: 45,
            count: 8,
            checked: false,
            /*  children: [
                { id: 'member004', teamName: 'David', email: 'david.product@company.com', age: 40, count: 4, checked: false },
                { id: 'member005', teamName: 'Eve', email: 'eve.product@company.com', age: 38, count: 4, checked: false },
            ], */
        },
        {
            id: 'team003',
            teamName: 'Customer Support',
            email: 'support@company.com',
            age: 42,
            count: 10,
            checked: false,
            children: [
                {
                    id: 'member006',
                    teamName: 'Frank',
                    email: 'frank.supp@company.com',
                    age: 36,
                    count: 51,
                    checked: false,
                    children: [
                        {
                            id: 'member008',
                            teamName: 'Frank111',
                            email: 'frank.sup@company.com',
                            age: 36,
                            count: 51,
                            checked: false,
                            children: [
                                {
                                    id: 'member009',
                                    teamName: 'Frank111',
                                    email: 'frank.sup@company.com',
                                    age: 36,
                                    count: 51,
                                    checked: false,
                                },
                                {
                                    id: 'member012',
                                    teamName: 'Frank111',
                                    email: 'frank.sup@company.com',
                                    age: 36,
                                    count: 51,
                                    checked: false,
                                },
                            ],
                        },
                    ],
                },
                { id: 'member007', teamName: 'Grace', email: 'grace.support@company.com', age: 35, count: 5, checked: false },
            ],
        },
        {
            id: 'team004',
            teamName: 'Finance',
            email: 'finance@company.com',
            age: 50,
            count: 6,
            checked: false,
        },
        {
            id: 'team005',
            teamName: 'Marketing',
            email: 'marketing@company.com',
            age: 48,
            count: 7,
            checked: false,
            children: [
                { id: 'member010', teamName: 'Jack', email: 'jack.marketing@company.com', age: 32, count: 4, checked: false },
                { id: 'member011', teamName: 'Liam', email: 'liam.marketing@company.com', age: 36, count: 3, checked: false },
            ],
        },
    ]);

    const headerLabels = [
        { label: 'Team', prop: 'teamName', width: '180px', tooltip: true, textPosition: 'start' }, // 团队名称
        { label: 'Mem', prop: 'id', width: '150px', tooltip: true }, // 成员ID
        { label: '人数', prop: 'count', width: '150px', sortable: true, textPosition: 'start' }, // 成员姓名
        { label: 'YourEmail', prop: 'email', width: '150px', sortable: true }, // 成员邮箱
        { label: 'Age', prop: 'age', width: '150px' }, // 成员年龄
    ];

    const [show, setShow] = useState<boolean>(false);

    const handleOpen = () => {
        const data = tableRef.current.getCheckedList();
        console.log('data: ', data);
        setShow(true);
    };

    const handleClose = () => {
        tableRef.current.clearChecked();
    };

    const testRef = useRef<any>(null);
    const handleTest = () => {
        console.log('testRef.current: ', testRef.current);
    };

    return (
        <div className="expandAll={false} app-wrapper p-3">
            <AdouTable tableRef={tableRef} multiple collection tableBorderd headers={headerLabels} expandAll textPosition="center" collapse data={data}>
                {headerLabels.map((label) => (
                    <EditableTableCell sortable={label.sortable} key={label.prop} {...label} />
                ))}
            </AdouTable>

            <button onClick={handleOpen}>打开</button>
            <button onClick={handleClose}>关闭</button>
            <Tooltip position="right" text="555">
                <span>666</span>
            </Tooltip>
            <Sortable></Sortable>

            {/* <Dialog
                show={show}
                setShow={setShow}
                onConfirm={() =>
                    setTimeout(() => {
                        setShow(false);
                    }, 1000)
                }
            >
                测试
            </Dialog> */}
            <Form data={{}}>
                <Select
                    ref={testRef}
                    options={[
                        { label: '小笼包', value: 'Xiǎolóngbāo' },
                        { label: '北京炸酱面', value: 'Běijīng zhájiàng miàn' },
                        { label: '杭州西湖醋鱼', value: 'Hángzhōu Xīhú cùyú' },
                        { label: '广东早茶', value: 'Guǎngdōng zǎochá' },
                    ]}
                    name="test"
                ></Select>
                <Select options={[]}></Select>
            </Form>
            <button onClick={handleTest}>测试</button>
        </div>
    );
};

export default App;
