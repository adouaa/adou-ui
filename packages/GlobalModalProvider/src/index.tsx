import React, { createContext, useState } from 'react';

const GlobalModalContext = createContext({});

const GlobalModalProvider = ({ children }) => {

  const [globalModalData, setGlobalModalData] = useState({
    type: "",
    open: false,
    content: '',
    title: '',
    confirmText: '',
    cancelText: "",
    callback: null,
    overflowY: false,
    width: 0,
    maxHeight: 0
  });

 
  const showGlobalModal = ({ type, content, title, confirmText, cancelText, maxHeight, overflowY, width, callback }) => {
    setGlobalModalData({
      type,
      open: true,
      content,
      title,
      confirmText,
      cancelText,
      maxHeight,
      overflowY,
      width,
      callback,
    });
  };

  const hideGlobalModal = () => {
    setGlobalModalData({
      type: "",
      open: false,
      content: '',
      title: '',
      confirmText: '',
      cancelText: "",
      maxHeight: 0,
      overflowY: false,
      width: 0,
      callback: null,
    });
  };

  return (
    <GlobalModalContext.Provider value={{ globalModalData, showGlobalModal, hideGlobalModal }}>
      {children}
    </GlobalModalContext.Provider>
  );
};

export { GlobalModalProvider, GlobalModalContext };
