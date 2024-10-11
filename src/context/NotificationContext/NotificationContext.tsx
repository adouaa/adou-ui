import { useState, useEffect, useRef, createContext, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import React from 'react';
import './index.scss';

interface NoticationProps {
    id?: number;
    title?: string;
    message?: string;
    type?: 'success' | 'error' | 'warning';
    appearing?: boolean;
    disappearing?: boolean;
    duration?: number;
}

interface NoticationProvider {
    children: React.ReactNode;
}

export const NotificationContext = createContext<
    | {
          open: (message: Omit<NoticationProps, 'id' | 'appearing'>) => void;
      }
    | undefined
>(undefined);
const NoticationProvider = ({ children }: NoticationProvider) => {
    const [notifications, setNotifications] = useState<NoticationProps[]>([]);

    const notificationIdRef = useRef<number>(0);

    const timerRef = useRef<NodeJS.Timeout>(null);
    const countdownIntervalRef = useRef<NodeJS.Timeout>(null);
    const timersRef = useRef<NodeJS.Timeout[]>([]);
    const countdownIntervalsRef = useRef<NodeJS.Timeout[]>([]);

    const open = (message: Omit<NoticationProps, 'id' | 'appearing'>) => {
        const data = {
            ...message,
            id: ++notificationIdRef.current,
        };
        setNotifications([...notifications, data]);
        console.log('notificationIdRef: ', notificationIdRef.current);
        setTimeout(() => {
            setNotifications((preData: any) =>
                preData.map((item: NoticationProps) => {
                    if (item.id === notificationIdRef.current) {
                        item.appearing = true;
                    }
                    return item;
                })
            );
        }, 50);
    };

    const close = (id?: number) => {
        setNotifications((preData: any) =>
            preData.map((item: NoticationProps) => {
                if (id !== undefined && item.id === id) {
                    item.disappearing = true;
                }
                return item;
            })
        );

        setTimeout(() => {
            setNotifications((preData: any) => preData.filter((item: NoticationProps) => item.id !== id));
        }, 300);
    };

    return (
        <NotificationContext.Provider value={{ open }}>
            {children}
            <div className="adou-notification-container">
                {notifications.map((item: NoticationProps, index: number) => (
                    <div
                        key={item.id}
                        className={`adou-notification ${item.appearing ? 'adou-notification-appearing' : ''} ${item.disappearing ? 'adou-notification-disappearing' : ''}`}
                    >
                        <div className="adou-notification-header">
                            <div className="adou-notification-header-title">{item.title}</div>
                            <div className="adou-notification-header-close" onClick={() => close(item.id)}>
                                <i className="fa-solid fa-xmark"></i>
                            </div>
                        </div>
                        <div className="adou-notification-content text-primary">
                            {item.message} - {item.id}
                        </div>
                    </div>
                ))}
            </div>
        </NotificationContext.Provider>
    );
};

export default NoticationProvider;
