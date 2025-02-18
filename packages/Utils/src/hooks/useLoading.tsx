// useLoading.ts
import { useState, useEffect, useRef } from "react";
import React from "react";
import { createRoot, Root } from "react-dom/client";
import "./loading.scss";

interface LoadingProps {
  maskStyle?: any;
  loadingStyle?: any;
}

const Loading = ({ maskStyle, loadingStyle }: LoadingProps) => {
  console.log("Loading-maskStyle:", maskStyle);
  console.log("Loading-loadingStyle:", loadingStyle);
  const enhancedMaskStyle =
    Object.keys(maskStyle || {}).length > 0
      ? maskStyle
      : { backgroundColor: "rgba(255, 255, 255, 0.8)" };
  const enhancedLoadingStyle =
    Object.keys(loadingStyle || {}).length > 0
      ? loadingStyle
      : { width: "40px", height: "40px" };
  return (
    <div className="loading-overlay" style={{ ...enhancedMaskStyle }}>
      <div
        className="loading-spinner me-2"
        style={{ ...enhancedLoadingStyle }}
      ></div>
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
  maskStyle: any = {},
  loadingStyle: any = {}
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

export const useLoading = (
  maskStyle: any = {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
  },
  loadingStyle: any = { width: "40px", height: "40px" }
) => {
  const [isLoading, setIsLoading] = useState(false);
  const maskStypeRef = useRef<any>();
  const loadingStyleRef = useRef<any>();

  useEffect(() => {
    console.log("useLoading--maskStyle:", maskStyle);
    console.log("useLoading--loadingStyle:", loadingStyle);
    maskStypeRef.current = maskStyle;
    loadingStyleRef.current = loadingStyle;
  }, [maskStyle, loadingStyle]);

  const showLoading = () => {
    // 确保只创建一个实例
    if (!loadingInstance) {
      loadingInstance = createLoadingInstance(
        maskStypeRef.current || {},
        loadingStyleRef.current || {}
      );
    }
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
