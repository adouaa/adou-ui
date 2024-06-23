import React, { useContext } from 'react';
import { GlobalModalContext } from "./GlobalModalProvider";
import Modal from '../adou-modal';

function GlobalModal() {
  const { globalModalData, hideGlobalModal } = useContext(GlobalModalContext);

  const handleConfirm = () => {
    if (globalModalData.callback) {
      globalModalData.callback('confirmed');
    }
    hideGlobalModal();
  };

  if (!globalModalData.open) {
    return null;
  }

  return (
    <div>
      <Modal title={globalModalData.title} overflowY={globalModalData.overflowY} maxHeight={globalModalData.maxHeight} width={globalModalData.width} confirmText={globalModalData.confirmText} cancelText={globalModalData.cancelText} type={globalModalData.type} content={globalModalData.content} show={globalModalData.open} onCancel={hideGlobalModal} onClose={hideGlobalModal} onConfirm={handleConfirm}></Modal>
    </div>
  );
}

export default GlobalModal;
