import React, { createContext, useState } from 'react';
import GlobalModal from "./Modal";

const GlobalModalContext = createContext({});

export interface GlobalModalContextProps {
    globalModalData?: any, 
    showGlobalModal?: any, 
    hideGlobalModal?: any
}

export interface GlobalModalDataProps {
    type?: string,
    maxHeight?: number,
    overflowY?: boolean,
    content?: any,
    title?: string,
    confirmButtonText?: string,
    callback?: any
  }

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
export { GlobalModal };
