import Collapse from 'components/adou-collapse';
import Table, { EditableTableCell } from 'components/adou-table';
import TabItem from 'components/adou-tabs/tab-item';
import { useState } from 'react';
import React from 'react';

interface AppProps {}

const App = ({}: AppProps) => {
    const testData = [
        {
            teamId: 'daafgta',
            teamName: 'Developersfdsffsdfsdfdfdgfdfgfsdas',
            email: '111',
            age: 55,
            count: 255,
            children: [
                { teamId: 'daegggfgta', teamName: 'Alice', email: 'alice@example.com', age: 28, count: 3 },
                { teamId: 'daaqqwwefgta', teamName: 'Bob', email: 'bob@example.com', age: 34, count: 3 },
            ],
        },
        {
            teamId: 'daa3rfwefgta',
            teamName: 'Designers',
            email: '222',
            age: 66,
            count: 3,
            children: [{ teamId: 'awdaf', teamName: 'Charlie', email: 'charlie@example.com', age: 25, count: 3 }],
        },
        {
            teamId: 'datgtreafgta',
            teamName: 'Marketing',
            email: '333',
            age: 77,
            count: 5,
        },
    ];

    const headerLabels = [
        { label: 'Team', prop: 'teamName', width: '150px' }, // 团队名称
        { label: 'Mem', prop: 'teamId', width: '100px' }, // 成员ID
        { label: '人数', prop: 'count', width: '50px' }, // 成员姓名
        { label: 'YourEmail', prop: 'email', width: '200px' }, // 成员邮箱
        { label: 'Age', prop: 'age', width: '50px' }, // 成员年龄
    ];

    return (
        <Table collection expandAll={true} collapse data={testData} headLabels={headerLabels} tableStriped tableHover eidtable>
            {headerLabels.map((label) => (
                <EditableTableCell key={label.prop} prop={label.prop} label={label.label} />
            ))}
        </Table>
    );
};

export default App;
