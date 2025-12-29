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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(442);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Button = props => {
  const {
    labelWrap,
    fontSize,
    spinerType = "border",
    spinerColor,
    loading,
    suffixIcon,
    prefixIcon,
    children,
    type = "",
    size = "md",
    externalClassName,
    round,
    textColor,
    disabled,
    outlineColor,
    onClickOK
  } = props;
  const handleOnClick = e => {
    onClickOK && onClickOK(e);
  };
  const renderPrefixIcon = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
      className: "".concat(prefixIcon)
    });
  };
  const rendersuffixIcon = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
      className: "".concat(suffixIcon)
    });
  };

  /* const renderLoading = () => {
        return React.Children.map(children, (child: any) => {
            if (!React.isValidElement(child)) {
                child = <span className="m-1">{child}</span>
                const enhancedChild = React.cloneElement(child!, {
                    style: {
                    }
                } as React.Attributes);
                return enhancedChild;
            }
        });
    }; */

  const renderLabel = () => {
    return react__WEBPACK_IMPORTED_MODULE_0___default().Children.map(children, child => {
      if (! /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().isValidElement(child)) {
        child = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, child);
        const enhancedChild = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().cloneElement(child, {
          style: {
            fontSize,
            whiteSpace: labelWrap ? "normal" : "nowrap"
          }
        });
        return enhancedChild;
      }
    });
  };
  const renderLoadingIcon = () => {
    let hasLoader = false;
    react__WEBPACK_IMPORTED_MODULE_0___default().Children.map(children, child => {
      var _child$props;
      if ((_child$props = child.props) !== null && _child$props !== void 0 && (_child$props = _child$props.className) !== null && _child$props !== void 0 && _child$props.includes("loader")) {
        hasLoader = true;
      }
    });
    if (hasLoader) {
      return react__WEBPACK_IMPORTED_MODULE_0___default().Children.map(children, child => {
        var _child$props2;
        if ((_child$props2 = child.props) !== null && _child$props2 !== void 0 && _child$props2.className.includes("loader")) {
          return child;
        }
      });
    } else {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "me-2 spinner-".concat(spinerType, " spinner-").concat(spinerType, "-sm text-").concat(spinerColor),
        role: "status"
      }));
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "button-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    style: {
      cursor: "pointer",
      height: "100%"
    },
    onClick: handleOnClick,
    className: "btn  btn-".concat(size, " ").concat(round ? "rounded-pill" : "", " ").concat(textColor ? "text-".concat(textColor) : "", " ").concat(outlineColor ? "btn-outline-".concat(outlineColor) : "btn-".concat(type), " ").concat(disabled ? "disabled" : "", " ").concat(externalClassName),
    disabled: loading
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "loading-btn text-nowrap"
  }, renderLoadingIcon(), renderLabel()) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, prefixIcon && renderPrefixIcon(), renderLabel(), suffixIcon && rendersuffixIcon())));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});