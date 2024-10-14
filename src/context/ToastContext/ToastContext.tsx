import React, { createContext, useContext, useState, ReactNode, useRef } from 'react';
import './index.scss'; // 引入你的 SCSS 样式

export interface ToastProps {
    type: 'success' | 'error' | 'warning';
    content: string;
    id: number;
    appearing?: boolean;
    disappearing?: boolean;
    duration?: number; // 添加持续时间属性
    remainingTime?: number; // 添加剩余时间属性
    width?: any;
}

export const ToastContext = createContext<
    | {
          open: (message: Omit<ToastProps, 'id' | 'appearing'>) => void;
      }
    | undefined
>(undefined);

interface ToastProviderProps {
    children: ReactNode;
}

let toastId = 0;

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
    const [toasts, setToasts] = useState<ToastProps[]>([]);

    const timersRef = useRef<any[]>([]);
    const timerRef = useRef<NodeJS.Timeout>();
    const countdownIntervalsRef = useRef<any[]>([]);
    const countdownIntervalRef = useRef<NodeJS.Timeout>();

    const open = (message: Omit<ToastProps, 'id' | 'appearing'>) => {
        const newToast: ToastProps = { id: toastId++, duration: 3000, remainingTime: 3000, ...message }; // 添加剩余时间
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
                        return { ...toast, remainingTime: updatedTime }; // 更新剩余时间和持续时间
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
        clearTimeout(timerRef.current);
        clearInterval(countdownIntervalRef.current);
        /* setToasts((prev) =>
            prev.map((toast) => {
                if (toast.id === id) {
                    return { ...toast }; // 暂停倒计时
                }
                return toast;
            })
        ); */
    };

    // 注意：鼠标移出的时候要先找到鼠标移出的是定时器和计时器，然后清除掉对应的定时器和计时器，再恢复定时器和计时器
    const handleMouseLeave = (id: number) => {
        const toast = toasts.find((toast) => toast.id === id);
        if (!toast) return;

        // 1. 先找到鼠标移入的定时器和计时器
        const timerRef = timersRef.current?.find((timer: any) => timer && timer.id === id);
        const countdownIntervalRef = countdownIntervalsRef.current?.find((interval: any) => interval && interval.id === id);

        // 2. 再清除对应的定时器和计时器(如果dsq和计时器有值的话)
        if (timerRef) clearTimeout(timerRef.current);
        if (countdownIntervalRef) clearInterval(countdownIntervalRef.current);

        const remainingTime = toast.remainingTime;

        // 3. 重新启动消失动画和倒计时
        timerRef.current = setTimeout(() => {
            setToasts((prev) => prev.map((toast) => (toast.id === id ? { ...toast, disappearing: true } : toast)));
            setTimeout(() => {
                setToasts((prev) => prev.filter((toast) => toast.id !== id));
            }, 500);
        }, remainingTime);

        countdownIntervalRef.current = setInterval(() => {
            setToasts((prev) =>
                prev.map((toast) => {
                    if (toast.id === id && toast.remainingTime) {
                        const updatedTime = toast.remainingTime - 100;
                        return { ...toast, remainingTime: updatedTime };
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
                        style={{ width: toast.width }}
                        key={toast.id}
                        className={`adou-toast adou-toast-${toast.type} ${toast.appearing ? 'appearing' : ''} ${toast.disappearing ? 'disappearing' : ''}`}
                        onMouseEnter={() => handleMouseEnter(toast.id)}
                        onMouseLeave={() => handleMouseLeave(toast.id)}
                    >
                        <div className="adou-toast-content">
                            {toast.content}
                            <button
                                className="adou-toast-close"
                                onClick={() => {
                                    const timerRef = timersRef.current.find((timer) => timer.id === toast.id);
                                    const countdownIntervalRef = countdownIntervalsRef.current.find((interval) => interval.id === toast.id);

                                    clearTimeout(timerRef?.current);
                                    clearInterval(countdownIntervalRef?.current);

                                    setToasts((prev) =>
                                        prev.map((t) => {
                                            if (t.id === toast.id) {
                                                return { ...t, disappearing: true }; // 触发消失动画
                                            }
                                            return t;
                                        })
                                    );

                                    setTimeout(() => {
                                        setToasts((prev) => prev.filter((t) => t.id !== toast.id)); // 在动画后移除
                                    }, 500); // 等待动画持续时间
                                }}
                            >
                                &times;
                            </button>
                        </div>
                        <div className="adou-toast-timer" style={{ width: `${(toast.remainingTime || 0) / (toast.duration! / 100)}%` }} />
                    </div>
                ))}
            </div>
        </ToastContext.Provider>
    );
};
