import React, { createContext, useContext, useState, ReactNode, useRef } from 'react';
import './index.scss'; // 引入你的 SCSS 样式

export interface Toast {
    type: 'success' | 'error' | 'warning';
    content: string;
    id: number;
    appearing?: boolean;
    disappearing?: boolean;
    duration?: number; // 添加持续时间属性
    remainingTime?: number; // 添加剩余时间属性
}

export const ToastContext = createContext<
    | {
          open: (message: Omit<Toast, 'id' | 'appearing' | 'duration' | 'remainingTime'>) => void;
      }
    | undefined
>(undefined);

interface ToastProviderProps {
    children: ReactNode;
}

let toastId = 0;

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const timersRef = useRef<any[]>([]);
    const timerRef = useRef<NodeJS.Timeout>();
    const countdownIntervalsRef = useRef<any[]>([]);
    const countdownIntervalRef = useRef<NodeJS.Timeout>();

    const open = (message: Omit<Toast, 'id' | 'appearing'>) => {
        const newToast: Toast = { ...message, id: toastId++, duration: 3000, remainingTime: 3000 }; // 添加剩余时间
        setToasts((prev) => [...prev, newToast]);

        // 添加出现的动画
        setTimeout(() => {
            setToasts((prev) => prev.map((toast) => (toast.id === newToast.id ? { ...toast, appearing: true } : toast)));
        }, 10);

        // 设置消失动画
        timerRef.current = setTimeout(() => {
            setToasts((prev) => prev.map((toast) => (toast.id === newToast.id ? { ...toast, disappearing: true } : toast)));
            setTimeout(() => {
                setToasts((prev) => prev.filter((toast) => toast.id !== newToast.id));
            }, 500);
        }, newToast.remainingTime);

        timersRef.current!.push({ id: newToast.id, current: timerRef.current });

        // 添加倒计时，来缩减时间条
        countdownIntervalRef.current = setInterval(() => {
            setToasts((prev) =>
                prev.map((toast) => {
                    if (toast.id === newToast.id && toast.remainingTime) {
                        const updatedTime = toast.remainingTime - 100; // 每100ms减少
                        return { ...toast, remainingTime: updatedTime, duration: updatedTime }; // 更新剩余时间和持续时间
                    }
                    return toast;
                })
            );
        }, 100);
        countdownIntervalsRef.current!.push({ id: newToast.id, current: countdownIntervalRef.current });

        return () => {
            clearTimeout(timerRef.current);
            clearInterval(countdownIntervalRef.current);
        };
    };

    const handleMouseEnter = (id: number) => {
        const timerRef = timersRef.current?.find((timer: any) => timer && timer.id === id);
        const countdownIntervalRef = countdownIntervalsRef.current?.find((interval: any) => interval && interval.id === id);
        console.log('id: ', id);
        clearTimeout(timerRef.current);
        clearInterval(countdownIntervalRef.current);
        setToasts((prev) =>
            prev.map((toast) => {
                if (toast.id === id) {
                    return { ...toast }; // 暂停倒计时
                }
                return toast;
            })
        );
    };

    const handleMouseLeave = (id: number) => {
        const toast = toasts.find((toast) => toast.id === id);
        if (toast) {
            const remainingTime = toast.remainingTime; // 获取当前剩余时间
            // 在此可重新开始倒计时逻辑（如果需要）
        }

        // 设置消失动画
        timerRef.current = setTimeout(() => {
            setToasts((prev) => prev.map((toast) => (toast.id === toast.id ? { ...toast, disappearing: true } : toast)));
            setTimeout(() => {
                setToasts((prev) => prev.filter((toast) => toast.id !== toast.id));
            }, 500);
        }, toast!.remainingTime);

        // 添加倒计时，来缩减时间条
        countdownIntervalRef.current = setInterval(() => {
            setToasts((prev) =>
                prev.map((toast) => {
                    if (toast.id === toast.id && toast.remainingTime) {
                        const updatedTime = toast.remainingTime - 100; // 每100ms减少
                        return { ...toast, remainingTime: updatedTime, duration: updatedTime }; // 更新剩余时间和持续时间
                    }
                    return toast;
                })
            );
        }, 100);
    };

    return (
        <ToastContext.Provider value={{ open }}>
            {children}
            <div className="adou-toast-container">
                {toasts.map((toast) => (
                    <div
                        key={toast.id}
                        className={`adou-toast adou-toast-${toast.type} ${toast.appearing ? 'appearing' : ''} ${toast.disappearing ? 'disappearing' : ''}`}
                        onMouseEnter={() => handleMouseEnter(toast.id)} // 鼠标进入时
                        onMouseLeave={() => handleMouseLeave(toast.id)} // 鼠标离开时
                    >
                        {toast.content}
                        <div className="adou-toast-timer" style={{ width: `${(toast.remainingTime || 0) / (3000 / 100)}%` }} /> {/* 设置宽度为百分比 */}
                    </div>
                ))}
            </div>
        </ToastContext.Provider>
    );
};
