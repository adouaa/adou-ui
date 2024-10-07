import React from 'react';
import { useToast } from '../hooks/useToast'; // 确保路径正确

const SomeComponent: React.FC = () => {
    const { open } = useToast();

    const handleClick1 = () => {
        open({ type: 'success', content: '操作成功工商局放火烧山供货商操作成功工商局放火烧山供货商！' });
    };
    const handleClick2 = () => {
        open({ type: 'warning', content: '警告警告警告！！', duration: 20000, remainingTime: 20000 });
    };
    const handleClick3 = () => {
        open({ type: 'error', content: '出错了，请联系管路员！' });
    };

    return (
        <>
            <button onClick={handleClick1}>显示 success Toast</button>
            <button onClick={handleClick2}>显示 warning Toast</button>
            <button onClick={handleClick3}>显示 error Toast</button>
        </>
    );
};

export default SomeComponent;
