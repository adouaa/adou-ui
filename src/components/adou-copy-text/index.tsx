import React, { useRef } from 'react';

const CopyText = ({ text }) => {
    const textRef = useRef<any>(null);

    const handleCopy = () => {
        // 选中文本
        const range = document.createRange();
        range.selectNodeContents(textRef.current);
        const selection = window.getSelection();
        selection!.removeAllRanges();
        selection!.addRange(range);

        // 复制文本
        document.execCommand('copy');

        // 清除选中状态
        selection!.removeAllRanges();

        // 提示用户复制成功
        alert('文本已复制到剪贴板！');
    };

    return (
        <span ref={textRef} style={{ cursor: 'copy' }} onClick={handleCopy}>
            {text}
        </span>
    );
};

export default CopyText;
