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
export class Watermark extends Component<WatermarkProps> {
  private container: HTMLDivElement | null = null;

  // 组件挂载后创建水印
  componentDidMount() {
    if (this.container) {
      this.createWatermark({
        ...this.props,
        container: this.container,
      });
    }
  }

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
  private createWatermark = ({
    container,
    textAlign = "center",
    textBaseline = "middle",
    font = "22px Microsoft Yahei",
    fillStyle = "#000",
    content = "adou",
    globalAlpha = 0.1,
    rotate = 16,
    zIndex = 1e3,
  }: WatermarkProps & { container: HTMLDivElement }) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d")!;

    // 获取容器实际尺寸
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    // 测量文本尺寸
    ctx.font = font;
    const textWidth = ctx.measureText(content).width;

    // 计算水印分布密度
    let columns = Math.ceil(containerWidth / textWidth);
    // 控制最大列数以保持合适的水印密度
    if (columns > 3) {
      columns = 3.7;
    }
    const rows = 3; // 固定行数保证纵向覆盖

    // 计算单个水印区块尺寸
    const blockWidth = containerWidth / columns;
    const blockHeight = containerHeight / rows;

    // 设置Canvas尺寸（增加间距防止重叠）
    canvas.width = blockWidth * 1.5;
    canvas.height = blockHeight * 1.5;

    // 配置绘图上下文
    ctx.globalAlpha = globalAlpha;
    ctx.textAlign = textAlign;
    ctx.textBaseline = textBaseline;
    ctx.font = font;
    ctx.fillStyle = fillStyle;

    // 坐标变换（居中+旋转）
    ctx.translate(canvas.width / 2, canvas.height / 1.7);
    ctx.rotate((Math.PI * rotate) / 180);
    ctx.fillText(content, 0, 0);

    // 生成背景图
    const dataURL = canvas.toDataURL();
    let wmDiv: any = document.querySelector(".__wm");

    // 避免重复创建水印层
    if (!wmDiv) {
      wmDiv = document.createElement("div");
      wmDiv.style.cssText = `
        position:absolute;
        top:0px;
        left:0px;
        width:100%;
        height:100%;
        z-index:${zIndex};
        pointer-events:none;  /* 禁用交互事件 */
        background-repeat:repeat;
        background-image:url('${dataURL}');
        background-size: ${blockWidth}px ${blockHeight}px; /* 匹配区块尺寸 */
      `;
      wmDiv.classList.add("__wm");

      // 设置容器相对定位
      container.style.position = "relative";
      container.appendChild(wmDiv);
    }
  };

  /**
   * 渲染方法
   * @returns {JSX.Element} 包含子元素的容器div
   */
  render() {
    const { style, children } = this.props;
    return (
      <div
        ref={(ref) => (this.container = ref)}
        style={{
          position: "relative", // 确保水印定位正确
          ...style, // 合并自定义样式
        }}
      >
        {children}
      </div>
    );
  }
}
