import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import React from 'react';
import AdouTable, { EditableTableCell } from 'components/adou-table';
import Tooltip from 'components/adou-tooltip';
import Sortable from 'components/adou-sortable';
import Dialog from 'test-dialog';

interface AppProps {}

const App = ({}: AppProps) => {
    const [data, setData] = useState<any>([
        {
            id: 'team001',
            teamName: 'Software EngineeringEngineeringEngineeringEngineering',
            email: 'software@company.com',
            age: 38,
            count: 12,
            checked: true,
            /* children: [
                { id: 'member001', teamName: 'Alice', email: 'alice.software@company.com', age: 29, count: 6, checked: true },
                { id: 'member002', teamName: 'Bob', email: 'bob.software@company.com', age: 31, count: 5, checked: false },
                { id: 'member003', teamName: 'Charlie', email: 'charlie.software@company.com', age: 34, count: 8, checked: true },
            ], */
        },
        {
            id: 'team002',
            teamName: 'Product Management',
            email: 'product@company.com',
            age: 45,
            count: 8,
            checked: true,
            /*  children: [
                { id: 'member004', teamName: 'David', email: 'david.product@company.com', age: 40, count: 4, checked: true },
                { id: 'member005', teamName: 'Eve', email: 'eve.product@company.com', age: 38, count: 4, checked: true },
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
                { id: 'member006', teamName: 'Frank', email: 'frank.support@company.com', age: 36, count: 5, checked: false },
                { id: 'member007', teamName: 'Grace', email: 'grace.support@company.com', age: 35, count: 5, checked: true },
            ],
        },
        {
            id: 'team004',
            teamName: 'Finance',
            email: 'finance@company.com',
            age: 50,
            count: 6,
            checked: true,
        },
        {
            id: 'team005',
            teamName: 'Marketing',
            email: 'marketing@company.com',
            age: 48,
            count: 7,
            checked: true,
            children: [
                { id: 'member010', teamName: 'Jack', email: 'jack.marketing@company.com', age: 32, count: 4, checked: true },
                { id: 'member011', teamName: 'Liam', email: 'liam.marketing@company.com', age: 36, count: 3, checked: false },
            ],
        },
    ]);

    const headerLabels = [
        { label: 'Team', prop: 'teamName', width: '150px', maxWidth: '250px' }, // 团队名称
        { label: 'Mem', prop: 'id', width: '100px', tooltip: true }, // 成员ID
        { label: '人数', prop: 'count', width: '50px', sortable: true }, // 成员姓名
        { label: 'YourEmail', prop: 'email', width: '200px', sortable: true }, // 成员邮箱
        { label: 'Age', prop: 'age', width: '50px' }, // 成员年龄
    ];

    const [show, setShow] = useState<boolean>(false);

    const handleOpen = () => {
        setShow(true);
    };

    const handleClose = () => {};

    return (
        <div className="expandAll={false} app-wrapper">
            <AdouTable tableBorderd expandAll={false} textPosition="center" collapse headers={headerLabels} data={data}>
                {headerLabels.map((label) => (
                    <EditableTableCell tooltip={label.tooltip} maxWidth={label.maxWidth} sortable={label.sortable} key={label.prop} prop={label.prop} label={label.label} />
                ))}
            </AdouTable>

            <button onClick={handleOpen}>打开</button>
            <button onClick={handleClose}>关闭</button>
            <Tooltip position="right" text="555">
                <span>666</span>
            </Tooltip>
            <Sortable></Sortable>

            <Dialog
                show={show}
                setShow={setShow}
                onConfirm={() =>
                    setTimeout(() => {
                        setShow(false);
                    }, 1000)
                }
            >
                测试
            </Dialog>
        </div>
    );
};

export default App;
