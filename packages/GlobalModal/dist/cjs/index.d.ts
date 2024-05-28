import React from 'react';
import GlobalModal from "./Modal";
declare const GlobalModalContext: React.Context<{}>;
export interface GlobalModalContextProps {
    globalModalData?: any;
    showGlobalModal?: any;
    hideGlobalModal?: any;
}
export interface GlobalModalDataProps {
    type?: string;
    maxHeight?: number;
    overflowY?: boolean;
    content?: any;
    title?: string;
    confirmButtonText?: string;
    callback?: any;
}
declare const GlobalModalProvider: ({ children }: {
    children: any;
}) => React.JSX.Element;
export { GlobalModalProvider, GlobalModalContext };
export { GlobalModal };
