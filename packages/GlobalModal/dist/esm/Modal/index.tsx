import React, { useContext } from 'react';
import { GlobalModalContext, GlobalModalContextProps } from "../index";
import Modal from 'adou-ui/Modal';

function GlobalModal() {
  const { globalModalData, showGlobalModal, hideGlobalModal } = useContext<GlobalModalContextProps>(GlobalModalContext);

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
      <Modal overflowY={globalModalData.overflowY} maxHeight={globalModalData.maxHeight} width={globalModalData.width} confirmText={globalModalData.confirmButtonText} type={globalModalData.type} content={globalModalData.content} show={globalModalData.open} onCancel={hideGlobalModal} onClose={hideGlobalModal} onConfirm={handleConfirm}></Modal>
    </div>
  );
}

export default GlobalModal;
