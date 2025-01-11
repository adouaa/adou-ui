import { useState, useEffect, useRef, Children } from 'react';
import { useParams } from 'react-router-dom';
import React from 'react';
import AdouTable, { TableCell } from 'components/adou-table';
import Tooltip from 'components/adou-tooltip';
import Sortable from 'components/adou-sortable';
import Dialog from 'test-dialog';
import Select from 'components/adou-new-form/adou-select';
import Form from 'components/adou-new-form';
import { data, columns } from './data';

interface AppProps {}

const App = ({}: AppProps) => {
    const tableRef = useRef<any>(null);

    const [show, setShow] = useState<boolean>(false);

    const [tableHeaderRows, setTableHeaderRows] = useState<any[]>([]);

    const tempTableHeaderRowRef = useRef<any[]>([]);

    const handleOpen = () => {
        const data = tableRef.current.getCheckedList();
        console.log('data: ', data);
        setShow(true);
    };

    const handleClose = () => {
        tableRef.current.clearChecked();
        tableRef.current.foldAll();
    };

    const testRef = useRef<any>(null);
    const handleTest = () => {
        console.log('testRef.current: ', testRef.current);
    };

    const recursiveGenerateTableHeaderRows = (columns: any[], newRows: any[] = []) => {
        columns.forEach((column) => {
            if (column.children) {
                recursiveGenerateTableHeaderRows(column.children, newRows);
            } else {
                newRows.push(column);
            }
        });
        return newRows;
    };

    useEffect(() => {
        const data = recursiveGenerateTableHeaderRows(JSON.parse(JSON.stringify(columns)), []);
        console.log('data: ', data);
        setTableHeaderRows(data);
    }, [columns]);

    useEffect(() => {
        console.log('tableHeaderRows: ', tableHeaderRows);
    }, [tableHeaderRows]);

    return (
        <div className="expandAll={false} app-wrapper p-3">
            {tableHeaderRows.length && (
                <AdouTable
                    align="center"
                    showIndex
                    tableBorderd
                    headBGC={'beige'}
                    clickChecked
                    trPointer
                    tableStriped
                    // tdPadding="p-2"
                    expandAll
                    multiple
                    // defaultCheckedList={['team001', 'member007', 'member010', 'member011', 'member003']}
                    tableRef={tableRef}
                    collection
                    columns={columns}
                    collapse
                    data={data}
                >
                    {/* {tableHeaderRows.map((title) => (
                        <EditableTableCell sortable={title.sortable} key={title.prop} {...title} />
                    ))} */}
                    {/* <EditableTableCell prop="teamName" sortable={false} key={'teamName'} title="TeamName" />
                <EditableTableCell prop="id" sortable={false} key={'id'} title="Mem" />
                <EditableTableCell prop="count" sortable={false} key={'count'} title="人数" />
                <EditableTableCell prop="email" sortable={true} key={'email'} title="YourEmail" />
                <EditableTableCell prop="age" sortable={true} key={'age'} title="Age" /> */}
                </AdouTable>
            )}

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
                <Select options={['member007', 'member010', 'member011', 'member003']}></Select>
            </Form>
            <button onClick={handleTest}>测试</button>
        </div>
    );
};

export default App;
