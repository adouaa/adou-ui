import React, { ReactNode } from 'react';
import './index.scss';
interface Toast {
    type: 'success' | 'error' | 'warning';
    content: string;
    id: number;
    appearing?: boolean;
    disappearing?: boolean;
}
interface ToastProviderProps {
    children: ReactNode;
}
export declare const ToastProvider: React.FC<ToastProviderProps>;
export declare const useToast: () => {
    open: (message: Omit<Toast, 'id' | 'appearing'>) => void;
};
export {};
