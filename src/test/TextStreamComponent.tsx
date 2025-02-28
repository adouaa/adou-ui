import React, { useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const TextStreamComponent: React.FC = () => {
    const [displayedText, setDisplayedText] = useState<string>(''); // 当前显示的文本
    const [isLoading, setIsLoading] = useState<boolean>(false); // 加载状态
    const prevRef = useRef<string>('');

    // 模拟异步获取文本的函数
    const fetchText = async () => {
        // 模拟延迟
        const simulatedApiCall = new Promise<string>((resolve) => {
            setTimeout(() => {
                resolve(`# 这是一个示例文档

欢迎使用 Markdown 格式的文本展示！以下是一些 Markdown 的基本用法示例。

## 1. 段落和换行

这是第一段文本。  
这是同一段中的第二行，通过在行尾添加两个空格实现换行。

## 2. 列表

### 无序列表
- 项目 A
- 项目 B
  - 子项目 B1
  - 子项目 B2
- 项目 C

### 有序列表
1. 第一项
2. 第二项
3. 第三项

## 3. 引用

> 这是一个引用文本示例。引用可以用来突出重要的信息。

## 4. 代码块

您可以使用反引号来高亮代码：

\`\`\`javascript
const greeting = "Hello, World!";
console.log(greeting);
\`\`\`

## 5. 链接和图片

[这是一个链接](https://www.example.com)

![这是图片](https://via.placeholder.com/150)

## 6. 表格

| 列 1 | 列 2 | 列 3 |
|------|------|------|
| 数据 A | 数据 B | 数据 C |
| 数据 D | 数据 E | 数据 F |

## 7. 强调文本

**这是加粗文本**  
*这是斜体文本*  
***这是加粗斜体文本***

## 8. 结尾

感谢您的阅读！希望这段文本对您有所帮助。`);
            }, 500); // 2秒后返回文本
        });

        setIsLoading(true); // 开始加载
        const responseText = await simulatedApiCall; // 等待获取文本
        setIsLoading(false); // 结束加载
        setDisplayedText(''); // 清空当前显示文本

        // 启动逐字显示效果
        displayText(responseText);
    };

    // 逐字显示文本的函数
    const displayText = (text: string) => {
        let index = 0;
        // 使用 setInterval 来逐字显示文本
        const intervalId = setInterval(() => {
            if (index < text.length) {
                prevRef.current += text[index];
                setDisplayedText(prevRef.current); // 更新显示的文本
                index++;
            } else {
                clearInterval(intervalId); // 清除定时器
            }
        }, 50); // 每50毫秒显示一个字符
    };

    return (
        <div style={{ padding: '20px' }}>
            <button onClick={fetchText} disabled={isLoading}>
                {isLoading ? '加载中...' : '获取文本'}
            </button>
            <div
                style={{
                    marginTop: '20px',
                    border: '1px solid #ccc',
                    padding: '10px',
                    minHeight: '50px',
                }}
            >
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{displayedText}</ReactMarkdown>
            </div>
        </div>
    );
};

export default TextStreamComponent;
