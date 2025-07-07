(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["RPB"] = factory(require("react"));
	else
		root["RPB"] = factory(root["React"]);
})(this, (__WEBPACK_EXTERNAL_MODULE__442__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 442:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__442__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Watermark: () => (/* binding */ Watermark)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(442);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


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
class Watermark extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(...arguments);
    _defineProperty(this, "container", null);
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
    _defineProperty(this, "createWatermark", _ref => {
      let {
        container,
        textAlign = "center",
        textBaseline = "middle",
        font = "22px Microsoft Yahei",
        fillStyle = "#000",
        content = "adou",
        globalAlpha = 0.1,
        rotate = 16,
        zIndex = 1e3
      } = _ref;
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

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
      ctx.rotate(Math.PI * rotate / 180);
      ctx.fillText(content, 0, 0);

      // 生成背景图
      const dataURL = canvas.toDataURL();
      let wmDiv = document.querySelector(".__wm");

      // 避免重复创建水印层
      if (!wmDiv) {
        wmDiv = document.createElement("div");
        wmDiv.style.cssText = "\n        position:absolute;\n        top:0px;\n        left:0px;\n        width:100%;\n        height:100%;\n        z-index:".concat(zIndex, ";\n        pointer-events:none;  /* \u7981\u7528\u4EA4\u4E92\u4E8B\u4EF6 */\n        background-repeat:repeat;\n        background-image:url('").concat(dataURL, "');\n        background-size: ").concat(blockWidth, "px ").concat(blockHeight, "px; /* \u5339\u914D\u533A\u5757\u5C3A\u5BF8 */\n      ");
        wmDiv.classList.add("__wm");

        // 设置容器相对定位
        container.style.position = "relative";
        container.appendChild(wmDiv);
      }
    });
  }
  // 组件挂载后创建水印
  componentDidMount() {
    if (this.container) {
      this.createWatermark({
        ...this.props,
        container: this.container
      });
    }
  }
  /**
   * 渲染方法
   * @returns {JSX.Element} 包含子元素的容器div
   */
  render() {
    const {
      style,
      children
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      ref: ref => this.container = ref,
      style: {
        position: "relative",
        // 确保水印定位正确
        ...style // 合并自定义样式
      }
    }, children);
  }
}
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});