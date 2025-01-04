// useLoading.ts
import { useState, useEffect } from 'react';
import React from 'react';
import { createRoot, Root } from 'react-dom/client';
import Loading from './Loading';

interface LoadingInstance {
    show: () => void;
    hide: () => void;
}

let loadingCount = 0;
let loadingInstance: LoadingInstance | null = null;
let root: Root | null = null;

const createLoadingInstance = (): LoadingInstance => {
    // 创建容器
    const container = document.createElement('div');
    container.className = 'loading-wrapper';
    document.body.appendChild(container);

    // 创建 root
    root = createRoot(container);

    // 渲染组件
    const render = (visible: boolean) => {
        root?.render(visible ? <Loading /> : null);
    };

    return {
        show: () => {
            render(true);
        },
        hide: () => {
            render(false);
            // 可选：在隐藏后移除DOM节点
            // setTimeout(() => {
            //   document.body.removeChild(container);
            // }, 300);
        },
    };
};

export const useLoading = () => {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        // 确保只创建一个实例
        if (!loadingInstance) {
            loadingInstance = createLoadingInstance();
        }
    }, []);

    const showLoading = () => {
        loadingCount++;
        setIsLoading(true);
        loadingInstance?.show();
    };

    const hideLoading = () => {
        loadingCount--;
        if (loadingCount <= 0) {
            loadingCount = 0;
            setIsLoading(false);
            loadingInstance?.hide();
        }
    };

    return {
        loading: isLoading,
        showLoading,
        hideLoading,
    };
};
