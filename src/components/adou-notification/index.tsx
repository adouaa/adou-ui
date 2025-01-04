import { useState } from 'react';
import React from 'react';
import './index.scss';

interface NotificationProps {
    title?: string;
    message?: string;
}

const Notification = ({ title, message }: NotificationProps) => {
    const [show, setShow] = useState(false);
    const handleOpen = () => {
        // 处理打开通知的逻辑
        setShow(true);
    };

    return (
        <div className="notification-wrapper">
            {show && (
                <div className="notification-content">
                    <div className="notification-title">{title}</div>
                    <div className="notification-message">{message}</div>
                </div>
            )}
            <button onClick={handleOpen}>打开</button>
        </div>
    );
};

export default Notification;
