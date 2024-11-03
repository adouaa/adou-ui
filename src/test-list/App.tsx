import List from 'components/adou-list';
import React, { useEffect, useState } from 'react';

const testData = [
    {
        id: '1',
        name: '根节点1',
        isExpanded: false,
        children: [
            {
                id: '1-1',
                name: '子节点1-1',
                isExpanded: false,
                children: [
                    {
                        id: '1-1-1',
                        name: '孙节点1-1-1',
                        isExpanded: false,
                        children: [
                            {
                                id: '1-1-1-1',
                                name: '曾孙节点1-1-1-1',
                                isExpanded: false,
                                children: [],
                            },
                            {
                                id: '1-1-1-2',
                                name: '曾孙节点1-1-1-2',
                                isExpanded: false,
                                children: [],
                            },
                        ],
                    },
                    {
                        id: '1-1-2',
                        name: '孙节点1-1-2',
                        isExpanded: false,
                        children: [],
                    },
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
        id: '2',
        name: '根节点2',
        isExpanded: false,
        children: [
            {
                id: '2-1',
                name: '子节点2-1',
                isExpanded: false,
                children: [
                    {
                        id: '2-1-1',
                        name: '孙节点2-1-1',
                        isExpanded: false,
                        children: [],
                    },
                    {
                        id: '2-1-2',
                        name: '孙节点2-1-2',
                        isExpanded: false,
                        children: [],
                    },
                ],
            },
            {
                id: '2-2',
                name: '子节点2-2',
                isExpanded: false,
                children: [
                    {
                        id: '2-2-1',
                        name: '孙节点2-2-1',
                        isExpanded: false,
                        children: [],
                    },
                    {
                        id: '2-2-2',
                        name: '孙节点2-2-2',
                        isExpanded: false,
                        children: [],
                    },
                ],
            },
        ],
    },
];

const App = () => {
    const [activeId, setActiveId] = useState<number>(0);
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
                    console.log('相同: ');
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
        setActiveId(node.id);
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

    useEffect(() => {
        const flattenedData = flattenDataWithoutNesting(testData);
        console.log('🚀 ~ App ~ flattenedData:', flattenedData);
        console.log('convertListToTree(flattenedData, 0): ', convertListToTree(flattenedData, null));
        const arr = convertListToTree(flattenedData, null);
        setMyData(arr);
    }, []);

    useEffect(() => {
        console.log('myData: ', myData);
    }, [myData]);
    // setMyData([]);

    return (
        <>
            <List
                activeId={activeId}
                data={myData}
                deleteIconClass="fa fa-trash"
                addIconClass="fa fa-plus"
                editIconClass="fa fa-pencil"
                isTree={true}
                showOptIcons={true}
                showAddIcon={true}
                showEditIcon={true}
                onToggle={(node) => console.log('节点展开/折叠:', node)}
                onItemClick={(node) => handleItemClick(node)}
                onIconClick={(node) => console.log('图标点击:', node)}
                onOptIconClick={(type, node) => console.log(`操作图标点击: 类型:${type}, 节点:${node}`)}
            />
            <h1>4测试</h1>
        </>
    );
};

export default App;
