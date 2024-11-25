import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import React from 'react';
import FileExplorer from 'components/adou-line-break-list';
import ListGroup from 'components/adou-list-group';

interface AppProps {}

const App = ({}: AppProps) => {
    const files = [
        { label: 'file1.txt', value: 'file1.txt' },
        { label: 'file2.txt', value: 'file2.txt' },
        { label: 'file3.txt', value: 'file3.txt' },
        { label: 'file4.txt', value: 'file4.txt' },
        { label: 'file5.txt', value: 'file5.txt' },

        { label: 'file6.txt', value: 'file6.txt' },
        { label: 'file7.txt', value: 'file7.txt' },
        { label: 'file8.txt', value: 'file8.txt' },
        { label: 'file9.txt', value: 'file9.txt' },
        { label: 'file10.txt', value: 'file10.txt' },
        { label: 'file11.txt', value: 'file11.txt' },
        { label: 'file12.txt', value: 'file12.txt' },
        { label: 'file13.txt', value: 'file13.txt' },
        { label: 'file14.txt', value: 'file14.txt' },
        { label: 'file15.txt', value: 'file15.txt' },
    ];

    return (
        <div className="app-wrapper">
            <h1>文件资源管理器</h1>
            {/* <FileExplorer files={files} filesPerColumn={10} columns={2} /> */}
            <div className="test" style={{ height: '210px' }}>
                <ListGroup lineBreak columns={6} data={[...files, ...files, ...files]}></ListGroup>
            </div>
        </div>
    );
};

export default App;
