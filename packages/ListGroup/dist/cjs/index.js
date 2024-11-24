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
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ src)
});

// EXTERNAL MODULE: external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"}
var external_root_React_commonjs2_react_commonjs_react_amd_react_ = __webpack_require__(442);
var external_root_React_commonjs2_react_commonjs_react_amd_react_default = /*#__PURE__*/__webpack_require__.n(external_root_React_commonjs2_react_commonjs_react_amd_react_);
;// CONCATENATED MODULE: ./src/splitFilesIntoColumns.ts
// 根据列数和每列展示的文件数量来分割文件
const splitFilesIntoColumns = (files, filesPerColumn) => {
  const result = [];
  let currentColumn = [];
  files.forEach((file, index) => {
    currentColumn.push(file);
    if ((index + 1) % filesPerColumn === 0 || index === files.length - 1) {
      result.push(currentColumn);
      currentColumn = [];
    }
  });
  return result;
};
/* harmony default export */ const src_splitFilesIntoColumns = (splitFilesIntoColumns);
;// CONCATENATED MODULE: ./src/index.tsx



const ListGroup = _ref => {
  let {
    itemHeight = 40,
    columnMaxHeight,
    lineBreak,
    filesPerColumn,
    columns = 2,
    height,
    maxHeight,
    canActive = true,
    externalClassName,
    noWrap,
    defaultFirst = false,
    data,
    activeList: selectList,
    labelKey = "label",
    valueKey = "value",
    type = "primary",
    render,
    onItemClick,
    onItemDoubleClick
  } = _ref;
  const [list, setList] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)([]);
  const [activeList, setActiveList] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(selectList || {});
  const [parentMaxHeight, setParentMaxHeight] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(columnMaxHeight);
  const listGroupRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  const handleItemClick = item => {
    let data;
    if (Array.isArray(activeList)) {
      const hasSelected = activeList.some(selectedItem => selectedItem[valueKey] === item[valueKey]);
      data = hasSelected ? activeList.filter(selectedItem => selectedItem[valueKey] !== item[valueKey]) : [...activeList, item];
      setActiveList(data);
      onItemClick && onItemClick(item);
    } else {
      const hasSelected = activeList[valueKey] === item[valueKey];
      data = hasSelected ? {} : item;
      setActiveList(data);
      onItemClick && onItemClick(data);
    }
  };
  const handleItemDoubleClick = (e, item) => {
    e.preventDefault(); // 阻止可能触发的默认点击行为
    e.stopPropagation();
    onItemDoubleClick && onItemDoubleClick(item);
  };
  const judgeIsActive = item => {
    if (!canActive) return "";
    let flag = false;
    if (Array.isArray(activeList)) {
      if (activeList.map(item => item[valueKey]).includes(item[valueKey])) flag = true;
    } else {
      if ((activeList === null || activeList === void 0 ? void 0 : activeList[valueKey]) === item[valueKey]) flag = true;
    }
    if (flag) {
      return "active bg-".concat(type, " border-").concat(type);
    } else {
      return "";
    }
  };
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (selectList) {
      setActiveList(selectList || {});
    } else if (defaultFirst) {
      setActiveList(data === null || data === void 0 ? void 0 : data[0]);
    }
    if (columnMaxHeight) {
      setParentMaxHeight(columnMaxHeight);
    } else if (listGroupRef.current) {
      const parentElement = listGroupRef.current.parentElement;
      if (parentElement && parentElement.clientHeight > 0) {
        setParentMaxHeight(parentElement.clientHeight);
      }
    }
  }, [selectList, data, columnMaxHeight]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    // 如果需要换行，则根据 判断 filesPerColunm 是否有值，有值则直接分割，没有值则根据 parentMaxHeight 和 itemHeight 计算每列的文件数量
    if (lineBreak) {
      if (filesPerColumn) {
        setList(src_splitFilesIntoColumns(data || [], filesPerColumn));
      } else {
        // 存放列表的数据，二维数组：[["1", "2", "3"], ["4", "5", "6"]]
        const columnsData = [];
        let currentColumn = [];
        let currentHeight = 0;
        data === null || data === void 0 || data.forEach(item => {
          // 假设每个项的高度为 40px
          // 如果加上这个 item的高度 超过了最大高度，则把之前那一组的数据 放到 columnsData 中，然后清空数据，开始新的列
          if (currentHeight + itemHeight > parseFloat(parentMaxHeight)) {
            columnsData.push(currentColumn);
            currentColumn = [];
            currentHeight = 0;
          }
          currentColumn.push(item);
          currentHeight += itemHeight;
        });
        if (currentColumn.length > 0) {
          columnsData.push(currentColumn);
        }
        setList(columnsData);
      }
    } else {
      setList(data || []);
    }
  }, [data, lineBreak, parentMaxHeight]);
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "list-group-wrapper ".concat(externalClassName || ""),
    ref: listGroupRef
  }, lineBreak ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "row g-0"
  }, list.map((columnItems, columnIndex) => /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "".concat(filesPerColumn ? "col-".concat(columns) : "col"),
    key: columnIndex
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("ul", {
    className: "list-group me-2",
    style: {
      height,
      maxHeight: maxHeight || height || parentMaxHeight,
      overflowY: "auto",
      border: "1px solid #ccc",
      borderRadius: "5px",
      boxSizing: "border-box"
    }
  }, Array.isArray(columnItems) && (columnItems === null || columnItems === void 0 ? void 0 : columnItems.map((item, itemIndex) => /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("button", {
    onClick: () => handleItemClick(item),
    onDoubleClick: e => handleItemDoubleClick(e, item),
    key: itemIndex,
    type: "button",
    className: "list-group-item list-group-item-action border-0 ".concat(judgeIsActive(item))
  }, render ? render(item) : item[labelKey]))))))) : /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "list-group",
    style: {
      height,
      maxHeight: maxHeight || height || parentMaxHeight,
      overflowY: "auto",
      border: list.length ? "1px solid #ccc" : "none"
    }
  }, list === null || list === void 0 ? void 0 : list.map((item, index) => /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("button", {
    style: {
      whiteSpace: noWrap ? "nowrap" : "normal",
      border: "none"
    },
    onClick: () => handleItemClick(item),
    onDoubleClick: e => handleItemDoubleClick(e, item),
    key: item[valueKey],
    type: "button",
    className: "list-group-item list-group-item-action ".concat(judgeIsActive(item))
  }, render ? render(item) : item[labelKey]))));
};
/* harmony default export */ const src = (ListGroup);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});