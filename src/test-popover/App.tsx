import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import React from 'react';
import Popover from 'components/adou-popover';
import Button from 'components/adou-button';
import AdouTable, { TableCell } from 'components/adou-table';

interface AppProps {}

const App = ({}: AppProps) => {
    const [show, setShow] = useState<boolean>(false);

    return (
        <div className="app-wrapper" style={{ padding: '150px' }}>
            <Button type="warning">123</Button>
            <Popover
                onShowChange={(show: boolean) => setShow(show)}
                trigger="hover"
                show={show}
                title={'Title'}
                content={
                    <span className="text-primary small" onClick={() => setShow(false)}>
                        关闭
                    </span>
                }
            >
                <Button
                    onClickOK={() => {
                        console.log('2: ', 2);
                        setShow(true);
                    }}
                >
                    click me
                </Button>
            </Popover>

            <AdouTable columns={[]} data={[]}>
                <TableCell></TableCell>
            </AdouTable>
        </div>
    );
};

export default App;
