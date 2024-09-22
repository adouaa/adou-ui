import React, { useRef, useState } from 'react';
import Dialog from './index';
import useDrag from 'hooks/useDrag';
import useClickOutside from 'hooks/useClickOutside';
import Modal from 'components/adou-modal';

const App = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isNewDialogOpen, setIsNewDialogOpen] = useState<boolean>(false);
    const testRef = useRef<any>(null);
    const tes2tRef = useRef<any>(null);
    const { position, handleMouseDown } = useDrag(testRef);
    const { position2, handleMouseDown: handleMouseDown2 } = useDrag(tes2tRef);
    const [show, setShow] = useState<boolean>(false);

    useClickOutside(tes2tRef, () => {
        console.log('测试点击外部: ');
    });

    const handleClickOutside = () => {
        console.log('Clicked outside the dialog');
    };

    const openDialog = () => {
        setIsDialogOpen(true);
    };

    const closeDialog = () => {
        setIsDialogOpen(false);
    };

    const handleOpenNewDialog = () => {
        setIsNewDialogOpen(true);
    };
    const handleCloseNewDialog = () => {
        setIsNewDialogOpen(false);
    };

    setTimeout(() => {
        setShow(true);
    }, 1000);

    return (
        <>
            <div>
                <button onClick={openDialog}>Open Dialog</button>
                <Dialog
                    onConfirm={() => {
                        console.log('8888: ', 8888);
                        closeDialog();
                    }}
                    show={isDialogOpen}
                    onClose={closeDialog}
                    title="确定删除？"
                >
                    <h1>This is the content of the dialog.</h1>
                    <h1>This is the content of the dialog.</h1>
                    <h1>This is the content of the dialog.</h1>
                    <button onClick={handleOpenNewDialog}>新对话框</button>
                    <h1>This is the content of the dialog.</h1>
                    <h1>This is the content of the dialog.</h1>
                    <h1>This is the content of the dialog.</h1>
                    <h1>This is the content of the dialog.</h1>
                    <h1>This is the content of the dialog.</h1>
                </Dialog>

                <Dialog onClose={handleCloseNewDialog} cancelBtnClass="danger" confirmText="提交" show={isNewDialogOpen} title="新对话框">
                    <h1>新对话框的内容</h1>
                </Dialog>
                {/* <Modal onClose={closeDialog} show={isDialogOpen}></Modal> */}

                <div className="d-flex">
                    <div className="d-flex-item" ref={testRef}>
                        <div style={{ width: '200px', height: '200px', background: 'red' }}>
                            <div style={{ width: '100px', height: '100px', background: 'blue' }}>
                                <div style={{ width: '50px', height: '50px', background: 'green' }}></div>
                            </div>
                        </div>
                    </div>
                    <div ref={testRef} onMouseDown={handleMouseDown} className="div" style={{ backgroundColor: 'red', width: '100px', height: '100px' }}>
                        试试拖动我
                    </div>

                    <div ref={tes2tRef} onMouseDown={handleMouseDown2} className="div" style={{ backgroundColor: 'red', width: '500px', height: '500px' }}>
                        试试拖动我
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;
