import Button from 'components/adou-button';
import AdouModal from 'components/adou-modal';
import React, { useState } from 'react';
import { withTranslation } from 'react-i18next';
import "./App.css";
import AdouBadge from 'components/adou-badge';

interface AppProps {

}

const App = (props: AppProps) => {

    const [showModal, setShowModal] = useState<boolean>(false);

    const handleCloseModal = () => {
        console.log("准备关闭");
        setShowModal(false);
    }
    const handleConfirmModal = () => {
        console.log("准备确认");
        handleCloseModal();
    }

    const [loading, setLoading] = useState<boolean>(false);

    const handleOpen = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }

    return <div className="app-wrapper" style={{ paddingTop: "100px" }}>
        <div className='position-relative d-flex'>
            <Button loading={loading} size='sm' type="primary" onClickOK={handleOpen}>
            <AdouBadge></AdouBadge>

                打开
            </Button>
        </div>
        <Button size='sm' suffixIcon='fa-solid fa-plus' prefixIcon='fa-solid fa-trash' type="danger">
            删除
        </Button>
        <Button loading={loading} size='sm' type="primary" onClickOK={handleOpen}>
            <div className="loader"></div>
            打开
        </Button>
        <AdouModal type='tip' onClose={handleCloseModal} onCancel={handleCloseModal} onConfirm={handleConfirmModal} show={showModal}></AdouModal>
    </div>;
}

export default withTranslation()(App);