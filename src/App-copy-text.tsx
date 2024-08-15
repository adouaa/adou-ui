import CopyText from 'components/adou-copy-text';
import React from 'react';

const App = () => {
    return (
        <div>
            <h1>一键复制示例</h1>
            <CopyText
                text=" range.selectNodeContents(textRef.current);
        const selection = window.getSelection();
        selection!.removeAllRanges();
        selection!.addRange(range);

        // 复制文本
        document.execCommand('copy');

        // 清除选中状态
        selection!.removeAllRanges();

        // 提示用户复制成功
        alert('文本已复制到剪贴板！');"
            />
        </div>
    );
};

export default App;
