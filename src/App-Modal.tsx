import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import React from 'react';
import AdouModal from 'components/adou-modal';
import Button from 'components/adou-button';

interface AppProps {}

const App = ({}: AppProps) => {
    const [show, setShow] = useState<boolean>(false);

    const handleShowModal = () => {
        setShow(true);
    };

    const handleCloseModal = () => {
        setShow(false);
    };

    return (
        <div className="app-wrapper">
            <Button type="primary" size="sm" onClickOK={handleShowModal}>
                打开
            </Button>
            <AdouModal show={show} onClose={handleCloseModal} onCancel={handleCloseModal} onConfirm={handleCloseModal}></AdouModal>
        </div>
    );
};

export default App;
