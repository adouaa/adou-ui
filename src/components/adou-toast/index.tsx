import React, { createContext, useContext, useState, ReactNode } from 'react';
import './index.scss'; // 引入你的 SCSS 样式

interface Toast {
    type: 'success' | 'error' | 'warning';
    content: string;
    id: number; // 添加一个唯一标识符
    appearing?: boolean; // 标记是否出现
    disappearing?: boolean;
}

const ToastContext = createContext<
    | {
          open: (message: Omit<Toast, 'id' | 'appearing'>) => void;
      }
    | undefined
>(undefined);

interface ToastProviderProps {
    children: ReactNode;
}

let toastId = 0; // 用于唯一标识每个 Toast

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const open = (message: Omit<Toast, 'id' | 'appearing'>) => {
        const newToast: Toast = { ...message, id: toastId++ };
        setToasts((prev) => [...prev, newToast]);

        // 添加出现的动画
        setTimeout(() => {
            setToasts((prev) => {
                return prev.map((toast) => {
                    if (toast.id === newToast.id) {
                        return { ...toast, appearing: true }; // 重新标记为非消失状态
                    }
                    return toast;
                });
            });
        }, 10); // 触发重新渲染以应用动画效果

        // 设置消失动画
        setTimeout(() => {
            setToasts((prev) => prev.map((toast) => (toast.id === newToast.id ? { ...toast, disappearing: true } : toast)));
            setTimeout(() => {
                setToasts((prev) => prev.filter((toast) => toast.id !== newToast.id));
            }, 500); // 匹配消失动画时长
        }, 3000);
    };

    return (
        <ToastContext.Provider value={{ open }}>
            {children}
            <div className="adou-toast-container">
                {toasts.map((toast) => (
                    <div key={toast.id} className={`adou-toast adou-toast-${toast.type} ${toast.appearing ? 'appearing' : ''} ${toast.disappearing ? 'disappearing' : ''}`}>
                        {toast.content}
                    </div>
                ))}
            </div>
        </ToastContext.Provider>
    );
};

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
};
