import React, { Component } from "react";
/**
 * 水印组件属性接口
 *
 * @property {React.CSSProperties} [style] - 容器自定义样式，可覆盖默认样式
 * @property {CanvasTextAlign} [textAlign='center'] - 文字水平对齐方式
 * @property {CanvasTextBaseline} [textBaseline='middle'] - 文字垂直基线对齐方式
 * @property {string} [font='22px Microsoft Yahei'] - 字体设置，格式同CSS font属性
 * @property {string} [fillStyle='#000'] - 文字填充颜色
 * @property {string} [content='内部文档，请勿外传'] - 水印文字内容
 * @property {number} [globalAlpha=0.1] - 透明度（0-1）
 * @property {number} [rotate=16] - 文字旋转角度（单位：度）
 * @property {number} [zIndex=1000] - 水印层z-index值
 */
interface WatermarkProps {
    style?: React.CSSProperties;
    textAlign?: CanvasTextAlign;
    textBaseline?: CanvasTextBaseline;
    font?: string;
    fillStyle?: string;
    content?: string;
    globalAlpha?: number;
    rotate?: number;
    zIndex?: number;
    children?: React.ReactNode;
}
/**
 * 水印组件，用于在指定容器背景生成重复文字水印
 *
 * @example
 * // 基础用法
 * <Watermark content="机密文件">
 *   <div>你的内容</div>
 * </Watermark>
 *
 * // 自定义样式
 * <Watermark
 *   rotate={-30}
 *   fillStyle="#f00"
 *   font="20px Arial"
 *   globalAlpha={0.3}
 * >
 *   <div>你的内容</div>
 * </Watermark>
 */
export declare class Watermark extends Component<WatermarkProps> {
    private container;
    componentDidMount(): void;
    /**
     * 创建水印核心方法
     * @param {Object} config 配置对象
     * @param {HTMLDivElement} config.container - 水印容器元素
     * @param {string} [config.content] - 水印文字内容
     * @param {number} [config.globalAlpha] - 透明度
     * @param {number} [config.rotate] - 旋转角度
     * @param {string} [config.font] - 字体设置
     * @param {string} [config.fillStyle] - 文字颜色
     * @param {number} [config.zIndex] - 层级
     */
    private createWatermark;
    /**
     * 渲染方法
     * @returns {JSX.Element} 包含子元素的容器div
     */
    render(): React.JSX.Element;
}
export {};
