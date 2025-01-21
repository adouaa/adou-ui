// useLoading.ts
import { useState, useEffect } from "react";
import React from "react";
import { createRoot, Root } from "react-dom/client";
import "./loading.scss";

interface LoadingProps {
  maskStyle?: React.CSSProperties;
  loadingStyle?: React.CSSProperties;
}

const Loading = ({ maskStyle, loadingStyle }: LoadingProps) => {
  return (
    <div className="loading-overlay" style={{ ...maskStyle }}>
      <div className="loading-spinner me-2" style={{ ...loadingStyle }}></div>
      <span>Loading...</span>
    </div>
  );
};

interface LoadingInstance {
  show: () => void;
  hide: () => void;
}

let loadingCount = 0;
let loadingInstance: LoadingInstance | null = null;
let root: Root | null = null;

const createLoadingInstance = (
  maskStyle: React.CSSProperties = {},
  loadingStyle: React.CSSProperties = {}
): LoadingInstance => {
  // 创建容器
  const container = document.createElement("div");
  container.className = "loading-wrapper";
  document.body.appendChild(container);

  // 创建 root
  root = createRoot(container);

  // 渲染组件
  const render = (visible: boolean) => {
    root?.render(
      visible ? (
        <Loading maskStyle={maskStyle} loadingStyle={loadingStyle} />
      ) : null
    );
  };

  return {
    show: () => {
      render(true);
    },
    hide: () => {
      render(false);
    },
  };
};

export const useLoading = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // 确保只创建一个实例
    if (!loadingInstance) {
      loadingInstance = createLoadingInstance(
        { backgroundColor: "rgba(255, 255, 255, 0.8)" },
        { width: "40px", height: "40px" }
      );
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

export default Loading;
