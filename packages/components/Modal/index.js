(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["RPB"] = factory(require("react"), require("react-dom"));
	else
		root["RPB"] = factory(root["React"], root["ReactDOM"]);
})(this, (__WEBPACK_EXTERNAL_MODULE__442__, __WEBPACK_EXTERNAL_MODULE__3__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 442:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__442__;

/***/ }),

/***/ 3:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__3__;

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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(442);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);


const Modal = _ref => {
  let {
    type,
    title,
    show,
    children,
    confirmText,
    confirmBtnClass = "primary",
    cancelText,
    cancelmBtnClass = "secondary",
    maxHeight,
    overflowY = true,
    width = "600px",
    showConfirm = true,
    showCancel = true,
    onCancel,
    onClose,
    onConfirm
  } = _ref;
  const [visible, setVisible] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [dragging, setDragging] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [offset, setOffset] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    x: 0,
    y: 0
  });
  const modalRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const contentRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setTimeout(() => {
      setVisible(show);
    }, 100);
  }, [show]);
  const handleOnClose = () => {
    setVisible(false);
    setTimeout(() => {
      onClose && onClose();
    }, 100);
  };
  const handleOnCancel = () => {
    setVisible(false);
    setTimeout(() => {
      onCancel && onCancel();
    }, 100);
  };
  const handleOnConfirm = () => {
    // setVisible(false);
    setTimeout(() => {
      onConfirm && onConfirm();
    }, 100);
  };

  // Drag related functions
  const handleMouseDown = e => {
    if (modalRef.current) {
      const rect = modalRef.current.getBoundingClientRect();
      setOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
      setDragging(true);
    }
  };

  // 当 x = e.clientX  并且  modalRef.current.style.left = `${x}px`的时候，鼠标会一直处于模态框头部的中间位置
  // 以下写法可以保证 鼠标在正确的位置，用上 offset 和 width 进行计算，比较合理
  const handleMouseMove = e => {
    if (dragging && modalRef.current) {
      const clientWidth = modalRef.current.clientWidth;
      const x = e.clientX - offset.x;
      const y = e.clientY - offset.y;
      modalRef.current.style.left = "".concat(x + clientWidth / 2, "px");
      modalRef.current.style.top = "".concat(y, "px");
    }
  };
  const handleMouseUp = () => {
    setDragging(false);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (dragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (modalRef.current && contentRef.current) {
      const contentHeight = contentRef.current.scrollHeight;
      const windowHeight = window.innerHeight;
      const modalHeight = modalRef.current.offsetHeight;
      /* const top =
        contentHeight > windowHeight ? 60 : (windowHeight - modalHeight) / 2; */
      const top = type === "tip" ? "25%" : "1%";
      modalRef.current.style.top = top;
    }
  }, [visible, children]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, show && /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_1___default().createPortal( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    ref: modalRef,
    className: "modal fade ".concat(visible ? "show " : ""),
    style: {
      display: show ? "block" : "none",
      width: "fit-content",
      height: "fit-content",
      position: "fixed",
      left: "50%",
      transform: "translate(-50%)"
    },
    id: "exampleModal",
    tabIndex: -1,
    "aria-labelledby": "exampleModalLabel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "modal-dialog ".concat(type === "tip" ? "modal-dialog-centered" : ""),
    style: {
      maxWidth: "fit-content"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "modal-content",
    style: {
      width: width,
      minWidth: "300px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    onMouseDown: handleMouseDown,
    style: {
      cursor: "move"
    },
    className: "modal-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", {
    className: "modal-title",
    id: "exampleModalLabel"
  }, title || "标题"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleOnClose,
    type: "button",
    className: "btn-close",
    "aria-label": "Close"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    ref: contentRef,
    className: "modal-body",
    style: overflowY ? {
      maxHeight: maxHeight,
      overflowY: "auto"
    } : {}
  }, children || "内容"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "modal-footer"
  }, showCancel && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    className: "btn btn-".concat(cancelmBtnClass),
    onClick: handleOnCancel
  }, cancelText || "取消"), showConfirm && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    className: "btn btn-".concat(confirmBtnClass),
    onClick: handleOnConfirm
  }, confirmText || "确定"))))), visible ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "modal-backdrop fade ".concat(visible && "show")
  }) : null), document.body));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});