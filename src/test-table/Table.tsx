import React from 'react';

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        width: 100,
        fixed: 'left',
        filters: [
            {
                text: 'Joe',
                value: 'Joe',
            },
            {
                text: 'John',
                value: 'John',
            },
        ],
        onFilter: (value, record) => record.name.indexOf(value as string) === 0,
    },
    {
        title: 'Other',
        children: [
            {
                title: 'Age',
                dataIndex: 'age',
                key: 'age',
                width: 150,
                sorter: (a, b) => a.age - b.age,
            },
            {
                title: 'Address',
                children: [
                    {
                        title: 'Street',
                        dataIndex: 'street',
                        key: 'street',
                        width: 150,
                    },
                    {
                        title: 'Block',
                        children: [
                            {
                                title: 'Building',
                                dataIndex: 'building',
                                key: 'building',
                                width: 100,
                            },
                            {
                                title: 'Door No.',
                                dataIndex: 'number',
                                key: 'number',
                                width: 100,
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        title: 'Company',
        children: [
            {
                title: 'Company Address',
                dataIndex: 'companyAddress',
                key: 'companyAddress',
                width: 200,
            },
            {
                title: 'Company Name',
                dataIndex: 'companyName',
                key: 'companyName',
            },
        ],
    },
    {
        title: 'Gender',
        dataIndex: 'gender',
        key: 'gender',
        width: 80,
        fixed: 'right',
    },
];

const generateTheadRows = (columns) => {
    const maxDepth = findMaxDepth(columns);
    const rows: any = Array.from({ length: maxDepth }, () => []);

    const processColumns = (cols, depth) => {
        cols.forEach((col) => {
            const cell = {
                title: col.title,
                colSpan: getColSpan(col, depth),
                rowSpan: col.children?.length ? 1 : maxDepth - depth,
            };
            if (!rows[depth]) {
                rows[depth] = [];
            }
            rows[depth].push(cell);
            if (col.children) {
                processColumns(col.children, depth + 1);
            }
        });
    };

    processColumns(columns, 0);
    return rows;
};

const findMaxDepth = (columns) => {
    let maxDepth = 0;
    columns.forEach((column) => {
        const depth = getColumnDepth(column);
        if (depth > maxDepth) {
            maxDepth = depth;
        }
    });
    return maxDepth;
};

const getColumnDepth = (column) => {
    if (!column.children) {
        return 1;
    }
    let maxChildDepth = 0;
    column.children.forEach((child) => {
        const childDepth = getColumnDepth(child);
        if (childDepth > maxChildDepth) {
            maxChildDepth = childDepth;
        }
    });
    return maxChildDepth + 1;
};

const getColSpan = (column, depth) => {
    if (!column.children) {
        return 1;
    }
    let totalColSpan = 0;
    column.children.forEach((child) => {
        totalColSpan += getColSpan(child, depth + 1);
    });
    return totalColSpan;
};

const TheadRows = generateTheadRows(columns);
console.log('TheadRows: ', TheadRows);

const dataSource = [
    {
        key: '1',
        name: 'Joe',
        age: 30,
        street: '123 Main St',
        building: 'A',
        number: '101',
        companyAddress: '456 Company Ave',
        companyName: 'ABC Corp',
        gender: 'Male',
    },
    {
        key: '2',
        name: 'John',
        age: 25,
        street: '789 Elm St',
        building: 'B',
        number: '202',
        companyAddress: '789 Company Rd',
        companyName: 'XYZ Inc',
        gender: 'Male',
    },
    {
        key: '3',
        name: 'Jane',
        age: 28,
        street: '567 Oak St',
        building: 'C',
        number: '303',
        companyAddress: '123 Business Park',
        companyName: 'DEF Ltd',
        gender: 'Female',
    },
];

const App = () => {
    return (
        <table className="table table-striped table-bordered">
            <thead>
                {TheadRows.map((row, index) => (
                    <tr key={index}>
                        {row.map((cell, cellIndex) => (
                            <th key={cellIndex} colSpan={cell.colSpan} rowSpan={cell.rowSpan}>
                                {cell.title}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody>
                {dataSource.map((item) => (
                    <tr key={item.key}>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.street}</td>
                        <td>{item.building}</td>
                        <td>{item.number}</td>
                        <td>{item.companyAddress}</td>
                        <td>{item.companyName}</td>
                        <td>{item.gender}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default App;
