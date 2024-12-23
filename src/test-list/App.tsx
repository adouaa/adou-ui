import Card from 'components/adou-card';
import List from 'components/adou-list';
import React, { useEffect, useState } from 'react';

const testData = [
    {
        id: '1',
        name: '根节点1',
        isExpanded: false,
        prefixTag: 'fa fa-home',
        children: [
            {
                id: '1-1',
                isExpanded: false,
                name: (
                    <>
                        <h3>
                            测试<i className="fa fa-plus"></i>
                        </h3>
                    </>
                ),
                children: [
                    {
                        id: '1-1-1',
                        name: '孙节点1-1-1',
                        isExpanded: false,
                        prefixTag: 'fa fa-trash text-danger',
                        children: [
                            {
                                id: '1-1-1-1',
                                name: '曾孙节点1-1-1-1',
                                isExpanded: false,
                                children: [],
                            },
                            {
                                id: '11-11-1-1',
                                name: '曾孙节点11-11-1-1',
                                isExpanded: false,
                                children: [],
                            },
                            {
                                id: '121-121-1-1',
                                name: '曾孙节点121-1-1-1',
                                isExpanded: false,
                                children: [],
                            },
                        ],
                    },
                    /*  {
                        id: '1-1-2',
                        name: '孙节点1-1-2',
                        isExpanded: false,
                        children: [],
                    }, */
                ],
            },
            {
                id: '1-2',
                name: '子节点1-2',
                isExpanded: false,
                children: [
                    {
                        id: '1-2-1',
                        name: '孙节点1-2-1',
                        isExpanded: false,
                        children: [],
                    },
                    {
                        id: '1-2-2',
                        name: '孙节点1-2-2',
                        isExpanded: false,
                        children: [],
                    },
                ],
            },
        ],
    },
    {
        id: '3-1-1-2',
        name: '曾孙节点3-1-1-2',
        isExpanded: false,
        children: [
            {
                id: '13-1-1-2',
                name: '曾孙节点13-1-1-2',
                isExpanded: false,
                children: [
                    {
                        id: '113-1-1-2',
                        name: '曾孙节点113-1-1-2',
                        isExpanded: false,
                        children: [
                            {
                                id: '1113-1-1-2',
                                name: '曾孙节点1113-1-1-2',
                                isExpanded: false,
                            },
                        ],
                    },
                    {
                        id: '213-1-1-2',
                        name: '曾孙节点213-1-1-2',
                        isExpanded: false,
                    },
                ],
            },
        ],
    },
    {
        id: '2',
        name: '根节点2',
        isExpanded: false,
        children: [
            {
                id: '2-1-1-2',
                name: '曾孙节点2-1-1-2',
                isExpanded: false,
                children: [
                    {
                        id: '2-2-1-2',
                        name: '曾孙节点2-2-1-2',
                        isExpanded: false,
                        children: [
                            {
                                id: '2-3-1-2',
                                name: '曾孙节点2-3-1-2',
                                isExpanded: false,
                                children: [],
                            },
                        ],
                    },
                ],
            },
            {
                id: '12-2-1-2',
                name: '曾孙节点2-2-1-2',
                isExpanded: false,
                children: [
                    {
                        id: '2-3-1-5',
                        name: '曾孙节点2-3-1-5',
                        isExpanded: false,
                        children: [],
                    },
                ],
            },
            /*  {
                id: '1-1-2',
                name: '孙节点1-1-2',
                isExpanded: false,
                children: [],
            }, */
        ],
    },
];

const App = () => {
    const [activeId, setActiveId] = useState<string>('1');
    const [myData, setMyData] = useState<any[]>([]);
    /* const convertListToTree = (list: any[], pid: any, level = 0) => {
        const arr: any = [];
        list.forEach((item: any) => {
            if (item.pid === pid) {
                item.level = level;
                arr.push(item);
                item.children = convertListToTree(list, item.id, level + 1);
            }
        });
        return arr;
    }; */

    const convertListToTree = (list: any[], pid: any) => {
        let level = 0;

        // 递归辅助函数，用于处理每个节点及其子节点
        const buildTree = (items: any[], parentId: any, currentLevel: any) => {
            const children: any = [];
            items.forEach((item: any) => {
                if (item.pid === parentId) {
                    item.level = currentLevel;
                    children.push(item);
                    // 递归调用自身处理子节点，层级加1
                    item.children = buildTree(list, item.id, currentLevel + 1);
                }
            });
            return children;
        };

        const data: any[] = buildTree(list, pid, level);

        return data;
    };

    const handleItemClick = (node: any) => {
        console.log('node: ', node);
    };
    function flattenDataWithoutNesting(data) {
        let flattened: any = [];

        function flattenRecursive(node, parentId) {
            const { id, name, isExpanded } = node;

            flattened.push({
                id,
                name,
                isExpanded,
                pid: parentId,
            });

            if (node.children && node.children.length > 0) {
                node.children.forEach((child) => {
                    flattenRecursive(child, id);
                });
            }
        }

        data.forEach((rootNode: any) => {
            flattenRecursive(rootNode, null);
        });

        return flattened;
    }

    useEffect(() => {}, []);

    useEffect(() => {}, [myData]);
    // setMyData([]);

    return (
        <div className="p-5">
            <List
                maxWidth={'600px'}
                prefixTag="fa fa-folder"
                defaltExpandNodes={['1', '1-1', '1-1-1', '3-1-1-2', 54149648565]}
                showLine
                activeId={activeId}
                data={testData}
                deleteIconClass="fa fa-trash"
                addIconClass="fa fa-plus"
                editIconClass="fa fa-pencil"
                isTree={true}
                showOptIcons={true}
                showAddIcon={true}
                showEditIcon={true}
                onToggle={(node) => console.log('节点展开/折叠:', node)}
                onItemClick={(node) => handleItemClick(node)}
                onToggleIconClick={(node) => console.log('图标点击:', node)}
                onOptIconClick={(type, node) => console.log(`操作图标点击: 类型:${type}, 节点:${node}`)}
            />
            <h1>4测试</h1>
        </div>
    );
};

export default App;
