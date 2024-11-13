import Table, { EditableTableCell } from 'components/adou-table';
import TabItem from 'components/adou-tabs/tab-item';
import { useState } from 'react';
import React from 'react';
import store from 'store';
import { connect } from 'react-redux';

interface AppProps {
    counter?: number;
}

const App = ({ counter }: AppProps) => {
    const handleAddNumbers = (num: number) => {};

    const handleSubNumbers = (num: number) => {};

    const testData = [
        {
            id: 'team001',
            teamName: 'Software Engineering',
            email: 'software@company.com',
            age: 38,
            count: 12,
            checked: true,
            children: [
                { id: 'member001', teamName: 'Alice', email: 'alice.software@company.com', age: 29, count: 6, checked: true },
                { id: 'member002', teamName: 'Bob', email: 'bob.software@company.com', age: 31, count: 6, checked: false },
                { id: 'member003', teamName: 'Charlie', email: 'charlie.software@company.com', age: 34, count: 6, checked: true },
            ],
        },
        {
            id: 'team002',
            teamName: 'Product Management',
            email: 'product@company.com',
            age: 45,
            count: 8,
            checked: true,
            children: [
                { id: 'member004', teamName: 'David', email: 'david.product@company.com', age: 40, count: 4, checked: true },
                { id: 'member005', teamName: 'Eve', email: 'eve.product@company.com', age: 38, count: 4, checked: true },
            ],
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
            children: [
                { id: 'member008', teamName: 'Helen', email: 'helen.finance@company.com', age: 45, count: 3, checked: true },
                { id: 'member009', teamName: 'Ian', email: 'ian.finance@company.com', age: 47, count: 3, checked: false },
            ],
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
    ];

    const headerLabels = [
        { label: 'Team', prop: 'teamName', width: '150px' }, // 团队名称
        { label: 'Mem', prop: 'id', width: '100px' }, // 成员ID
        { label: '人数', prop: 'count', width: '50px' }, // 成员姓名
        { label: 'YourEmail', prop: 'email', width: '200px' }, // 成员邮箱
        { label: 'Age', prop: 'age', width: '50px' }, // 成员年龄
    ];

    return (
        <>
            <h1>num: {counter}</h1>
            <button onClick={() => handleAddNumbers(1)}>+1</button>
            <button onClick={() => handleSubNumbers(5)}>-5</button>
            <hr />
            <hr />
            <Table textPosition="center" collection expandAll={false} collapse data={testData} tableStriped>
                {headerLabels.map((label) => (
                    <EditableTableCell key={label.prop} prop={label.prop} label={label.label} />
                ))}
            </Table>
        </>
    );
};

const mapFn = (state: any) => {
    return {
        counter: state.counter,
    };
};

export default connect(mapFn)(App);
