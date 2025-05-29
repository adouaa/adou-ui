// useLoading.ts
import { useState, useRef, forwardRef, useImperativeHandle } from "react";
import React from "react";
import { createRoot, Root } from "react-dom/client";
import "./loading.scss";

export interface LoadingProps {
  maskStyle?: React.CSSProperties;
  loadingStyle?: React.CSSProperties;
  textStyle?: React.CSSProperties;
}

export interface LoadingHandle {
  show: () => void;
  hide: () => void;
  setText: (newText: string) => void;
}

const LoadingContainer = forwardRef<LoadingHandle, LoadingProps>(
  ({ maskStyle, loadingStyle, textStyle }, ref) => {
    const [visible, setVisible] = useState(false);
    const [text, setText] = useState("Loading...");

    useImperativeHandle(ref, () => ({
      show: () => setVisible(true),
      hide: () => setVisible(false),
      setText,
    }));

    if (!visible) return null;

    return (
      <div className="loading-overlay" style={{ ...maskStyle }}>
        <div className="loading-spinner me-2" style={{ ...loadingStyle }}></div>
        <span style={{ ...textStyle }}>{text}</span>
      </div>
    );
  }
);

let loadingCount = 0;
let root: Root | null = null;
let loadingRef: React.RefObject<LoadingHandle> | null = null;
let initialized = false;

const createLoadingRoot = (props: {
  maskStyle?: React.CSSProperties;
  loadingStyle?: React.CSSProperties;
  textStyle?: React.CSSProperties;
}) => {
  const container = document.createElement("div");
  container.className = "loading-root-container";
  document.body.appendChild(container);

  root = createRoot(container);
  loadingRef = React.createRef<LoadingHandle>();

  root.render(
    <LoadingContainer
      ref={loadingRef}
      maskStyle={props.maskStyle}
      loadingStyle={props.loadingStyle}
      textStyle={props.textStyle}
    />
  );

  initialized = true;
};

export const useLoading = () => {
  const [isLoading, setIsLoading] = useState(false);

  const ensureInit = (
    text: string,
    maskStyle?: React.CSSProperties,
    loadingStyle?: React.CSSProperties,
    textStyle?: React.CSSProperties
  ) => {
    if (!initialized || !root || !loadingRef?.current) {
      createLoadingRoot({ maskStyle, loadingStyle, textStyle });
    }
  };

  const showLoading = (
    text: string = "Loading...",
    maskStyle: React.CSSProperties = { background: "transparent" },
    loadingStyle: React.CSSProperties = { width: "50px", height: "50px" },
    textStyle?: React.CSSProperties
  ) => {
    ensureInit(text, maskStyle, loadingStyle, textStyle);

    loadingCount++;
    setIsLoading(true);

    // 等待 DOM 渲染完成再执行 show 和 setText（确保 ref 不为空）
    requestAnimationFrame(() => {
      loadingRef?.current?.setText(text);
      loadingRef?.current?.show();
    });
  };

  const updateLoadingText = (newText: string) => {
    console.log("updateLoadingText:", newText);
    loadingRef?.current?.setText(newText);
  };

  const hideLoading = () => {
    loadingCount--;
    if (loadingCount <= 0) {
      loadingCount = 0;
      setIsLoading(false);
      loadingRef?.current?.hide();
    }
  };

  return {
    loading: isLoading,
    showLoading,
    hideLoading,
    updateLoadingText,
  };
};
