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
/******/ 	var __webpack_modules__ = ({

/***/ 191:
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ 73:
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ 798:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
  if (true) module.exports = factory(__webpack_require__(442));else {}
})(this, __WEBPACK_EXTERNAL_MODULE__442__ => {
  return /******/(() => {
    // webpackBootstrap
    /******/
    var __webpack_modules__ = {
      /***/191: ( /***/module => {
        "use strict";

        /*
          MIT License http://www.opensource.org/licenses/mit-license.php
          Author Tobias Koppers @sokra
        */
        module.exports = function (cssWithMappingToString) {
          var list = [];

          // return the list of modules as css string
          list.toString = function toString() {
            return this.map(function (item) {
              var content = "";
              var needLayer = typeof item[5] !== "undefined";
              if (item[4]) {
                content += "@supports (".concat(item[4], ") {");
              }
              if (item[2]) {
                content += "@media ".concat(item[2], " {");
              }
              if (needLayer) {
                content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
              }
              content += cssWithMappingToString(item);
              if (needLayer) {
                content += "}";
              }
              if (item[2]) {
                content += "}";
              }
              if (item[4]) {
                content += "}";
              }
              return content;
            }).join("");
          };

          // import a list of modules into the list
          list.i = function i(modules, media, dedupe, supports, layer) {
            if (typeof modules === "string") {
              modules = [[null, modules, undefined]];
            }
            var alreadyImportedModules = {};
            if (dedupe) {
              for (var k = 0; k < this.length; k++) {
                var id = this[k][0];
                if (id != null) {
                  alreadyImportedModules[id] = true;
                }
              }
            }
            for (var _k = 0; _k < modules.length; _k++) {
              var item = [].concat(modules[_k]);
              if (dedupe && alreadyImportedModules[item[0]]) {
                continue;
              }
              if (typeof layer !== "undefined") {
                if (typeof item[5] === "undefined") {
                  item[5] = layer;
                } else {
                  item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
                  item[5] = layer;
                }
              }
              if (media) {
                if (!item[2]) {
                  item[2] = media;
                } else {
                  item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
                  item[2] = media;
                }
              }
              if (supports) {
                if (!item[4]) {
                  item[4] = "".concat(supports);
                } else {
                  item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
                  item[4] = supports;
                }
              }
              list.push(item);
            }
          };
          return list;
        };

        /***/
      }),
      /***/73: ( /***/module => {
        "use strict";

        module.exports = function (item) {
          var content = item[1];
          var cssMapping = item[3];
          if (!cssMapping) {
            return content;
          }
          if (typeof btoa === "function") {
            var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
            var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
            var sourceMapping = "/*# ".concat(data, " */");
            return [content].concat([sourceMapping]).join("\n");
          }
          return [content].join("\n");
        };

        /***/
      }),
      /***/483: ( /***/(module, __nested_webpack_exports__, __nested_webpack_require_4272__) => {
        "use strict";

        /* harmony export */
        __nested_webpack_require_4272__.d(__nested_webpack_exports__, {
          /* harmony export */A: () => __WEBPACK_DEFAULT_EXPORT__
          /* harmony export */
        });
        /* harmony import */
        var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_4272__(73);
        /* harmony import */
        var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_4272__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */
        var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_4272__(191);
        /* harmony import */
        var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_4272__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
        // Imports

        var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());
        // Module
        ___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n.suffix-icon {\n  /* margin-left: -40px !important;\n  margin-top: 6px;\n  z-index: 9; */\n  position: absolute;\n  right: 12px;\n  top: 30px;\n  /* \u5782\u76F4\u5C45\u4E2D */\n  cursor: pointer;\n  /* \u9F20\u6807\u60AC\u505C\u65F6\u663E\u793A\u6307\u9488\u6837\u5F0F */\n  transition: transform 0.3s;\n  /* \u6DFB\u52A0\u8FC7\u6E21\u6548\u679C */\n  color: #c6c6cd;\n}\n.suffix-icon:hover {\n  transform: scale(1.3);\n  /* \u6C34\u5E73\u548C\u5782\u76F4\u65B9\u5411\u90FD\u653E\u59271.5\u500D */\n  color: #51515b;\n}\n\n.common-suffix-icon {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n\n.common-suffix-icon {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n\n.label-box {\n  font-size: 14px;\n  min-width: 50px;\n  text-align: right;\n  justify-content: flex-end;\n  padding-right: 10px;\n  flex-wrap: wrap;\n}\n\n.icon-input {\n  position: relative;\n  /* \u8BA9\u4F2A\u5143\u7D20\u76F8\u5BF9\u4E8E\u8F93\u5165\u6846\u5B9A\u4F4D */\n}\n\n.input-wrapper input::placeholder {\n  color: #999;\n}\n.input-wrapper .content-box {\n  flex: 1;\n  align-items: stretch;\n}\n.input-wrapper .content-box .input-form-content {\n  flex: 1;\n  display: flex;\n}\n.input-wrapper .content-box .suffix-content-btn {\n  border-top-right-radius: 0 !important;\n  /* \u53BB\u6389\u53F3\u4E0A\u89D2\u7684\u5706\u89D2 */\n  border-bottom-right-radius: 0 !important;\n  border-right: none;\n  /* \u53BB\u6389\u53F3\u4E0B\u89D2\u7684\u5706\u89D2 */\n}\n.input-wrapper .content-box .suffix-content-btn-wrapper {\n  min-width: 37px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #eee;\n  border-top-right-radius: 6px;\n  border-bottom-right-radius: 6px;\n}\n.input-wrapper .content-box .suffix-content-btn-wrapper .btn {\n  border-top-left-radius: 0;\n  /* \u53BB\u6389\u5DE6\u4E0A\u89D2\u7684\u5706\u89D2 */\n  border-bottom-left-radius: 0;\n  /* \u53BB\u6389\u5DE6\u4E0B\u89D2\u7684\u5706\u89D2 */\n}\n.input-wrapper .content-box .suffix-content-text-wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.label-in-center {\n  display: flex;\n}\n.label-in-center .suffix-icon {\n  top: 7px;\n}\n\n.label-in-left-top {\n  display: flex;\n}\n.label-in-left-top .label-box {\n  display: flex;\n  align-items: start;\n}\n.label-in-left-top .suffix-icon {\n  top: 7px;\n}\n\n.input-group .suffix-icon {\n  top: 7px !important;\n}\n\n.input-group-text {\n  cursor: pointer;\n}", "", {
          "version": 3,
          "sources": ["webpack://./src/index.scss"],
          "names": [],
          "mappings": "AAAA,gBAAgB;AAAhB;EACI;;eAAA;EAGA,kBAAA;EACA,WAAA;EACA,SAAA;EACA,SAAA;EACA,eAAA;EACA,gBAAA;EACA,0BAAA;EACA,WAAA;EACA,cAAA;AAEJ;AAAI;EACI,qBAAA;EACA,mBAAA;EACA,cAAA;AAER;;AAEA;EACI,aAAA;EACA,mBAAA;EACA,eAAA;AACJ;;AAEA;EACI,aAAA;EACA,mBAAA;EACA,eAAA;AACJ;;AAEA;EACI,eAAA;EACA,eAAA;EACA,iBAAA;EACA,yBAAA;EACA,mBAAA;EACA,eAAA;AACJ;;AAEA;EACI,kBAAA;EACA,iBAAA;AACJ;;AAII;EACI,WAAA;AADR;AAII;EACI,OAAA;EACA,oBAAA;AAFR;AAMQ;EACI,OAAA;EACA,aAAA;AAJZ;AAOQ;EACI,qCAAA;EACA,aAAA;EACA,wCAAA;EACA,kBAAA;EACA,aAAA;AALZ;AAQQ;EACI,eAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,sBAAA;EACA,4BAAA;EACA,+BAAA;AANZ;AASQ;EACI,yBAAA;EACA,aAAA;EACA,4BAAA;EACA,aAAA;AAPZ;AAUQ;EACI,aAAA;EACA,mBAAA;EACA,uBAAA;AARZ;;AAeA;EACI,aAAA;AAZJ;AAcI;EACI,QAAA;AAZR;;AAgBA;EACI,aAAA;AAbJ;AAeI;EACI,aAAA;EACA,kBAAA;AAbR;AAgBI;EACI,QAAA;AAdR;;AAqBI;EACI,mBAAA;AAlBR;;AAsBA;EACI,eAAA;AAnBJ",
          "sourcesContent": [".suffix-icon {\r\n    /* margin-left: -40px !important;\r\n    margin-top: 6px;\r\n    z-index: 9; */\r\n    position: absolute;\r\n    right: 12px;\r\n    top: 30px;\r\n    /* 垂直居中 */\r\n    cursor: pointer;\r\n    /* 鼠标悬停时显示指针样式 */\r\n    transition: transform 0.3s;\r\n    /* 添加过渡效果 */\r\n    color: #c6c6cd;\r\n\r\n    &:hover {\r\n        transform: scale(1.3);\r\n        /* 水平和垂直方向都放大1.5倍 */\r\n        color: #51515b;\r\n    }\r\n}\r\n\r\n.common-suffix-icon {\r\n    display: flex;\r\n    align-items: center;\r\n    cursor: pointer;\r\n}\r\n\r\n.common-suffix-icon {\r\n    display: flex;\r\n    align-items: center;\r\n    cursor: pointer;\r\n}\r\n\r\n.label-box {\r\n    font-size: 14px;\r\n    min-width: 50px;\r\n    text-align: right;\r\n    justify-content: flex-end;\r\n    padding-right: 10px;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.icon-input {\r\n    position: relative;\r\n    /* 让伪元素相对于输入框定位 */\r\n\r\n}\r\n\r\n.input-wrapper {\r\n    input::placeholder {\r\n        color: #999; // 你可以根据需要修改颜色\r\n    }\r\n\r\n    .content-box {\r\n        flex: 1;\r\n        align-items: stretch;\r\n\r\n        .label-box {}\r\n\r\n        .input-form-content {\r\n            flex: 1;\r\n            display: flex;\r\n        }\r\n\r\n        .suffix-content-btn {\r\n            border-top-right-radius: 0 !important;\r\n            /* 去掉右上角的圆角 */\r\n            border-bottom-right-radius: 0 !important;\r\n            border-right: none;\r\n            /* 去掉右下角的圆角 */\r\n        }\r\n\r\n        .suffix-content-btn-wrapper {\r\n            min-width: 37px;\r\n            display: flex;\r\n            align-items: center;\r\n            justify-content: center;\r\n            background-color: #eee;\r\n            border-top-right-radius: 6px;\r\n            border-bottom-right-radius: 6px;\r\n        }\r\n\r\n        .suffix-content-btn-wrapper .btn {\r\n            border-top-left-radius: 0;\r\n            /* 去掉左上角的圆角 */\r\n            border-bottom-left-radius: 0;\r\n            /* 去掉左下角的圆角 */\r\n        }\r\n\r\n        .suffix-content-text-wrapper {\r\n            display: flex;\r\n            align-items: center;\r\n            justify-content: center;\r\n        }\r\n\r\n    }\r\n\r\n}\r\n\r\n.label-in-center {\r\n    display: flex;\r\n\r\n    .suffix-icon {\r\n        top: 7px;\r\n    }\r\n}\r\n\r\n.label-in-left-top {\r\n    display: flex;\r\n\r\n    .label-box {\r\n        display: flex;\r\n        align-items: start;\r\n    }\r\n\r\n    .suffix-icon {\r\n        top: 7px;\r\n    }\r\n}\r\n\r\n\r\n\r\n.input-group {\r\n    .suffix-icon {\r\n        top: 7px !important;\r\n    }\r\n}\r\n\r\n.input-group-text {\r\n    cursor: pointer;\r\n}\r\n\r\n.lable-in-control {}"],
          "sourceRoot": ""
        }]);
        // Exports
        /* harmony default export */
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;

        /***/
      }),
      /***/591: ( /***/module => {
        "use strict";

        var stylesInDOM = [];
        function getIndexByIdentifier(identifier) {
          var result = -1;
          for (var i = 0; i < stylesInDOM.length; i++) {
            if (stylesInDOM[i].identifier === identifier) {
              result = i;
              break;
            }
          }
          return result;
        }
        function modulesToDom(list, options) {
          var idCountMap = {};
          var identifiers = [];
          for (var i = 0; i < list.length; i++) {
            var item = list[i];
            var id = options.base ? item[0] + options.base : item[0];
            var count = idCountMap[id] || 0;
            var identifier = "".concat(id, " ").concat(count);
            idCountMap[id] = count + 1;
            var indexByIdentifier = getIndexByIdentifier(identifier);
            var obj = {
              css: item[1],
              media: item[2],
              sourceMap: item[3],
              supports: item[4],
              layer: item[5]
            };
            if (indexByIdentifier !== -1) {
              stylesInDOM[indexByIdentifier].references++;
              stylesInDOM[indexByIdentifier].updater(obj);
            } else {
              var updater = addElementStyle(obj, options);
              options.byIndex = i;
              stylesInDOM.splice(i, 0, {
                identifier: identifier,
                updater: updater,
                references: 1
              });
            }
            identifiers.push(identifier);
          }
          return identifiers;
        }
        function addElementStyle(obj, options) {
          var api = options.domAPI(options);
          api.update(obj);
          var updater = function updater(newObj) {
            if (newObj) {
              if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
                return;
              }
              api.update(obj = newObj);
            } else {
              api.remove();
            }
          };
          return updater;
        }
        module.exports = function (list, options) {
          options = options || {};
          list = list || [];
          var lastIdentifiers = modulesToDom(list, options);
          return function update(newList) {
            newList = newList || [];
            for (var i = 0; i < lastIdentifiers.length; i++) {
              var identifier = lastIdentifiers[i];
              var index = getIndexByIdentifier(identifier);
              stylesInDOM[index].references--;
            }
            var newLastIdentifiers = modulesToDom(newList, options);
            for (var _i = 0; _i < lastIdentifiers.length; _i++) {
              var _identifier = lastIdentifiers[_i];
              var _index = getIndexByIdentifier(_identifier);
              if (stylesInDOM[_index].references === 0) {
                stylesInDOM[_index].updater();
                stylesInDOM.splice(_index, 1);
              }
            }
            lastIdentifiers = newLastIdentifiers;
          };
        };

        /***/
      }),
      /***/128: ( /***/module => {
        "use strict";

        var memo = {};

        /* istanbul ignore next  */
        function getTarget(target) {
          if (typeof memo[target] === "undefined") {
            var styleTarget = document.querySelector(target);

            // Special case to return head of iframe instead of iframe itself
            if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
              try {
                // This will throw an exception if access to iframe is blocked
                // due to cross-origin restrictions
                styleTarget = styleTarget.contentDocument.head;
              } catch (e) {
                // istanbul ignore next
                styleTarget = null;
              }
            }
            memo[target] = styleTarget;
          }
          return memo[target];
        }

        /* istanbul ignore next  */
        function insertBySelector(insert, style) {
          var target = getTarget(insert);
          if (!target) {
            throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
          }
          target.appendChild(style);
        }
        module.exports = insertBySelector;

        /***/
      }),
      /***/51: ( /***/module => {
        "use strict";

        /* istanbul ignore next  */
        function insertStyleElement(options) {
          var element = document.createElement("style");
          options.setAttributes(element, options.attributes);
          options.insert(element, options.options);
          return element;
        }
        module.exports = insertStyleElement;

        /***/
      }),
      /***/855: ( /***/(module, __unused_webpack_exports, __nested_webpack_require_16978__) => {
        "use strict";

        /* istanbul ignore next  */
        function setAttributesWithoutAttributes(styleElement) {
          var nonce =  true ? __nested_webpack_require_16978__.nc : 0;
          if (nonce) {
            styleElement.setAttribute("nonce", nonce);
          }
        }
        module.exports = setAttributesWithoutAttributes;

        /***/
      }),
      /***/740: ( /***/module => {
        "use strict";

        /* istanbul ignore next  */
        function apply(styleElement, options, obj) {
          var css = "";
          if (obj.supports) {
            css += "@supports (".concat(obj.supports, ") {");
          }
          if (obj.media) {
            css += "@media ".concat(obj.media, " {");
          }
          var needLayer = typeof obj.layer !== "undefined";
          if (needLayer) {
            css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
          }
          css += obj.css;
          if (needLayer) {
            css += "}";
          }
          if (obj.media) {
            css += "}";
          }
          if (obj.supports) {
            css += "}";
          }
          var sourceMap = obj.sourceMap;
          if (sourceMap && typeof btoa !== "undefined") {
            css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
          }

          // For old IE
          /* istanbul ignore if  */
          options.styleTagTransform(css, styleElement, options.options);
        }
        function removeStyleElement(styleElement) {
          // istanbul ignore if
          if (styleElement.parentNode === null) {
            return false;
          }
          styleElement.parentNode.removeChild(styleElement);
        }

        /* istanbul ignore next  */
        function domAPI(options) {
          if (typeof document === "undefined") {
            return {
              update: function update() {},
              remove: function remove() {}
            };
          }
          var styleElement = options.insertStyleElement(options);
          return {
            update: function update(obj) {
              apply(styleElement, options, obj);
            },
            remove: function remove() {
              removeStyleElement(styleElement);
            }
          };
        }
        module.exports = domAPI;

        /***/
      }),
      /***/656: ( /***/module => {
        "use strict";

        /* istanbul ignore next  */
        function styleTagTransform(css, styleElement) {
          if (styleElement.styleSheet) {
            styleElement.styleSheet.cssText = css;
          } else {
            while (styleElement.firstChild) {
              styleElement.removeChild(styleElement.firstChild);
            }
            styleElement.appendChild(document.createTextNode(css));
          }
        }
        module.exports = styleTagTransform;

        /***/
      }),
      /***/442: ( /***/module => {
        "use strict";

        module.exports = __WEBPACK_EXTERNAL_MODULE__442__;

        /***/
      }),
      /***/650: ( /***/(module, exports) => {
        var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__; /*!
                                                                         Copyright (c) 2018 Jed Watson.
                                                                         Licensed under the MIT License (MIT), see
                                                                         http://jedwatson.github.io/classnames
                                                                         */
        /* global define */

        (function () {
          'use strict';

          var hasOwn = {}.hasOwnProperty;
          function classNames() {
            var classes = '';
            for (var i = 0; i < arguments.length; i++) {
              var arg = arguments[i];
              if (arg) {
                classes = appendClass(classes, parseValue(arg));
              }
            }
            return classes;
          }
          function parseValue(arg) {
            if (typeof arg === 'string' || typeof arg === 'number') {
              return arg;
            }
            if (typeof arg !== 'object') {
              return '';
            }
            if (Array.isArray(arg)) {
              return classNames.apply(null, arg);
            }
            if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
              return arg.toString();
            }
            var classes = '';
            for (var key in arg) {
              if (hasOwn.call(arg, key) && arg[key]) {
                classes = appendClass(classes, key);
              }
            }
            return classes;
          }
          function appendClass(value, newClass) {
            if (!newClass) {
              return value;
            }
            if (value) {
              return value + ' ' + newClass;
            }
            return value + newClass;
          }
          if ( true && module.exports) {
            classNames.default = classNames;
            module.exports = classNames;
          } else if (true) {
            // register as 'classnames', consistent with npm package name
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
              return classNames;
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
          } else {}
        })();

        /***/
      })

      /******/
    };
    /************************************************************************/
    /******/ // The module cache
    /******/
    var __webpack_module_cache__ = {};
    /******/
    /******/ // The require function
    /******/
    function __nested_webpack_require_22901__(moduleId) {
      /******/ // Check if module is in cache
      /******/var cachedModule = __webpack_module_cache__[moduleId];
      /******/
      if (cachedModule !== undefined) {
        /******/return cachedModule.exports;
        /******/
      }
      /******/ // Create a new module (and put it into the cache)
      /******/
      var module = __webpack_module_cache__[moduleId] = {
        /******/id: moduleId,
        /******/ // no module.loaded needed
        /******/exports: {}
        /******/
      };
      /******/
      /******/ // Execute the module function
      /******/
      __webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_22901__);
      /******/
      /******/ // Return the exports of the module
      /******/
      return module.exports;
      /******/
    }
    /******/
    /************************************************************************/
    /******/ /* webpack/runtime/compat get default export */
    /******/
    (() => {
      /******/ // getDefaultExport function for compatibility with non-harmony modules
      /******/__nested_webpack_require_22901__.n = module => {
        /******/var getter = module && module.__esModule ? /******/() => module['default'] : /******/() => module;
        /******/
        __nested_webpack_require_22901__.d(getter, {
          a: getter
        });
        /******/
        return getter;
        /******/
      };
      /******/
    })();
    /******/
    /******/ /* webpack/runtime/define property getters */
    /******/
    (() => {
      /******/ // define getter functions for harmony exports
      /******/__nested_webpack_require_22901__.d = (exports, definition) => {
        /******/for (var key in definition) {
          /******/if (__nested_webpack_require_22901__.o(definition, key) && !__nested_webpack_require_22901__.o(exports, key)) {
            /******/Object.defineProperty(exports, key, {
              enumerable: true,
              get: definition[key]
            });
            /******/
          }
          /******/
        }
        /******/
      };
      /******/
    })();
    /******/
    /******/ /* webpack/runtime/hasOwnProperty shorthand */
    /******/
    (() => {
      /******/__nested_webpack_require_22901__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
      /******/
    })();
    /******/
    /******/ /* webpack/runtime/make namespace object */
    /******/
    (() => {
      /******/ // define __esModule on exports
      /******/__nested_webpack_require_22901__.r = exports => {
        /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
          /******/Object.defineProperty(exports, Symbol.toStringTag, {
            value: 'Module'
          });
          /******/
        }
        /******/
        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        /******/
      };
      /******/
    })();
    /******/
    /******/ /* webpack/runtime/nonce */
    /******/
    (() => {
      /******/__nested_webpack_require_22901__.nc = undefined;
      /******/
    })();
    /******/
    /************************************************************************/
    var __nested_webpack_exports__ = {};
    // This entry need to be wrapped in an IIFE because it need to be in strict mode.
    (() => {
      "use strict";

      // ESM COMPAT FLAG
      __nested_webpack_require_22901__.r(__nested_webpack_exports__);

      // EXPORTS
      __nested_webpack_require_22901__.d(__nested_webpack_exports__, {
        "default": () => ( /* binding */src_0)
      });

      // EXTERNAL MODULE: external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"}
      var external_root_React_commonjs2_react_commonjs_react_amd_react_ = __nested_webpack_require_22901__(442);
      var external_root_React_commonjs2_react_commonjs_react_amd_react_default = /*#__PURE__*/__nested_webpack_require_22901__.n(external_root_React_commonjs2_react_commonjs_react_amd_react_);
      // EXTERNAL MODULE: ../../../node_modules/classnames/index.js
      var classnames = __nested_webpack_require_22901__(650);
      var classnames_default = /*#__PURE__*/__nested_webpack_require_22901__.n(classnames);
      // EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
      var injectStylesIntoStyleTag = __nested_webpack_require_22901__(591);
      var injectStylesIntoStyleTag_default = /*#__PURE__*/__nested_webpack_require_22901__.n(injectStylesIntoStyleTag);
      // EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/styleDomAPI.js
      var styleDomAPI = __nested_webpack_require_22901__(740);
      var styleDomAPI_default = /*#__PURE__*/__nested_webpack_require_22901__.n(styleDomAPI);
      // EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/insertBySelector.js
      var insertBySelector = __nested_webpack_require_22901__(128);
      var insertBySelector_default = /*#__PURE__*/__nested_webpack_require_22901__.n(insertBySelector);
      // EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
      var setAttributesWithoutAttributes = __nested_webpack_require_22901__(855);
      var setAttributesWithoutAttributes_default = /*#__PURE__*/__nested_webpack_require_22901__.n(setAttributesWithoutAttributes);
      // EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/insertStyleElement.js
      var insertStyleElement = __nested_webpack_require_22901__(51);
      var insertStyleElement_default = /*#__PURE__*/__nested_webpack_require_22901__.n(insertStyleElement);
      // EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/styleTagTransform.js
      var styleTagTransform = __nested_webpack_require_22901__(656);
      var styleTagTransform_default = /*#__PURE__*/__nested_webpack_require_22901__.n(styleTagTransform);
      // EXTERNAL MODULE: ../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/index.scss
      var cjs_ruleSet_1_rules_1_use_2_src = __nested_webpack_require_22901__(483);
      ; // CONCATENATED MODULE: ./src/index.scss

      var options = {};
      options.styleTagTransform = styleTagTransform_default();
      options.setAttributes = setAttributesWithoutAttributes_default();
      options.insert = insertBySelector_default().bind(null, "head");
      options.domAPI = styleDomAPI_default();
      options.insertStyleElement = insertStyleElement_default();
      var update = injectStylesIntoStyleTag_default()(cjs_ruleSet_1_rules_1_use_2_src /* default */.A, options);

      /* harmony default export */
      const src = cjs_ruleSet_1_rules_1_use_2_src /* default */.A && cjs_ruleSet_1_rules_1_use_2_src /* default */.A.locals ? cjs_ruleSet_1_rules_1_use_2_src /* default */.A.locals : undefined;
      ; // CONCATENATED MODULE: ./src/index.tsx

      const Input = (_ref, ref) => {
        let {
          suffixContentExternalClassName,
          inputExternalClassName,
          textEnd,
          name,
          inline,
          isFormItem,
          errMsg,
          labelWidth,
          commonSuffixIcon,
          inputGroup = false,
          width,
          label,
          labelPosition = "center",
          labelColor,
          required = false,
          type = "text",
          defaultValue,
          size,
          externalClassName,
          prefixContent,
          suffixContent,
          suffixContentType = "button",
          placeholder,
          style,
          readOnly,
          transparent,
          children,
          onClick,
          onFocus,
          onBlur,
          onChange,
          onIconClick,
          onFormDataChange
        } = _ref;
        const inputRef = (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
        const [value, setValue] = (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(defaultValue !== null && defaultValue !== void 0 ? defaultValue : "");
        const cls = classnames_default()({
          ["input-group-".concat(size)]: size,
          [externalClassName]: externalClassName
        });
        const handleClick = function (e) {
          e.stopPropagation();
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }
          onClick && onClick(e, ...args);
        };
        const handleFocus = function (e) {
          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }
          onFocus && onFocus(e, ...args);
        };
        const handleBlur = function (e) {
          for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
            args[_key3 - 1] = arguments[_key3];
          }
          onBlur && onBlur(e, ...args);
          validate();
        };
        const handleChange = function (e) {
          const value = e.target.value;
          const returnValue = type === "number" ? Number(value) : value;
          setValue(value);
          for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
            args[_key4 - 1] = arguments[_key4];
          }
          onChange && onChange(returnValue, ...args);
          onFormDataChange && onFormDataChange(name, returnValue);
        };
        const handleIconClick = () => {
          onIconClick && onIconClick(value);
        };
        const [error, setError] = (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false);
        const validate = () => {
          if (!required) return true;
          // Example validation logic, replace with your actual validation needs
          if (value) {
            setError(false);
            return true;
          } else {
            setError(true);
            return false;
          }
        };
        const clear = () => {
          setValue("");
        };
        const handleClickCommonSuffixIcon = () => {
          clear();
          if (required) setError(true);
        };

        // Expose validate method via ref
        (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useImperativeHandle)(ref, () => ({
          validate,
          clear
        }));
        (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
          if (defaultValue || defaultValue === 0) {
            setValue(defaultValue);
          } else {
            setValue("");
          }
          if (defaultValue) {
            setError(false);
          }
        }, [defaultValue]);

        /**
         * 获取组件的高度赋值给label
         */
        const wrapeerRef = (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)();
        (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {}, []);
        return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
          className: "".concat(cls, " input-wrapper ").concat(inputGroup ? "" : "lable-in-control", " ").concat(!error && isFormItem && "mb-3"),
          style: {
            width,
            ...(inline && !width ? {
              flex: 1,
              marginRight: "15px"
            } : {})
          }
        }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
          ref: wrapeerRef,
          className: "content-box icon-input ".concat(inputGroup ? "input-group" : "", " label-in-").concat(labelPosition, " ").concat(labelPosition === "top" && inline ? "me-2" : "")
        }, prefixContent && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
          className: "input-group-text"
        }, prefixContent), label && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
          className: "label-box",
          style: {
            color: labelColor,
            width: labelWidth,
            alignItems: labelPosition === "left-top" ? "start" : "center",
            ...(labelPosition !== "top" && {
              display: "flex"
            })
          }
        }, label), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
          className: "input-form-content"
        }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("input", {
          ref: inputRef,
          required: required,
          style: {
            borderRadius: "6px",
            borderTopLeftRadius: prefixContent ? 0 : "6px",
            borderBottomLeftRadius: prefixContent ? 0 : "6px",
            background: transparent ? "transparent" : "#fff",
            flex: 1,
            height: "38px"
          },
          step: 1,
          name: name,
          value: value,
          readOnly: readOnly,
          placeholder: placeholder,
          onChange: handleChange,
          onBlur: e => handleBlur(e),
          onFocus: e => handleFocus(e),
          onClick: e => handleClick(e),
          type: type,
          className: "form-control input pe-0 ".concat(textEnd || type === "number" ? "text-end" : "", " ").concat(suffixContent && suffixContentType === "button" ? "suffix-content-btn" : "", " ").concat(inputExternalClassName || "")
        }), suffixContent && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
          className: "".concat(suffixContentType === "button" ? "suffix-content-btn-wrapper" : "suffix-content-text-wrapper ms-1", " ").concat(suffixContentExternalClassName || "")
        }, suffixContent)), commonSuffixIcon && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("i", {
          onClick: handleClickCommonSuffixIcon,
          className: "".concat(commonSuffixIcon, " common-suffix-icon ms-2")
        }), children && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
          onClick: handleIconClick,
          className: "suffix-icon",
          style: {
            right: commonSuffixIcon && "32px"
          }
        }, children)), error && required && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
          className: "animate__animated animate__fadeIn mb-1",
          style: {
            color: "#DC3545",
            fontSize: "14px",
            paddingLeft: parseInt(labelWidth) > 120 ? "120px" : parseFloat(labelWidth) + 20 + "px"
          }
        }, "".concat(errMsg || "".concat(label, "\u4E0D\u80FD\u4E3A\u7A7A"))));
      };
      Input.displayName = "Input";
      /* harmony default export */
      const src_0 = /*#__PURE__*/(0, external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef)(Input);
    })();

    /******/
    return __nested_webpack_exports__;
    /******/
  })();
});

/***/ }),

/***/ 562:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(191);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@charset "UTF-8";
.list-node-wrapper {
  color: #606266;
  font-size: 14px;
}
.list-node-wrapper .node-item .left-content {
  display: flex;
  align-items: center;
  /* display: inline-block; // 这个加上就会把这个盒子的宽度变成跟内容的宽度一样，而不会是根据父容器的宽度 */
  padding: 3px 20px 3px 14px;
  position: relative; /* 添加相对定位--好像没用 */
  min-width: 120px;
  cursor: pointer;
}
.list-node-wrapper .node-item .left-content:hover {
  background-color: #f6f6f6;
}
.list-node-wrapper .node-item .left-content.active {
  color: #fff;
  background-color: #2783d8;
}
.list-node-wrapper .node-item .left-content .tag1 {
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 6px;
  background-color: #f0f9eb;
  color: #6dc442;
  white-space: nowrap;
}
.list-node-wrapper .node-item .left-content .tag2 {
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 6px;
  background-color: #fef0f0;
  color: #f67878;
  white-space: nowrap;
}
.list-node-wrapper .node-item .left-content .icon {
  width: 8px;
  margin: 0 6px;
}
.list-node-wrapper .node-item .left-content .item-name {
  word-break: break-all;
}
.list-node-wrapper .node-item .left-content .right-content {
  padding: 0 5px;
  position: absolute;
  border-radius: 4px;
  top: 2px;
  right: 10px;
  color: #606266;
  background-color: #fff;
  z-index: 999;
}
.list-node-wrapper .node-item .left-content .right-content i {
  margin: 0 6px;
}
.list-node-wrapper .node-item .no-children {
  padding-left: 16px;
}
.list-node-wrapper .children {
  padding-left: 10px;
  max-height: 0; /* 初始状态下高度为0 */
  overflow-y: hidden; /* 隐藏溢出内容 */
}
.list-node-wrapper .children.expanded {
  overflow-y: clip;
  transition: max-height 2s ease; /* 添加过渡效果 */
  max-height: 1000px; /* 展开时高度自动适应内容 */
}

/* 修改滚动条的样式 */
::-webkit-scrollbar {
  width: 8px; /* 设置滚动条宽度 */
}

/* 修改滚动条轨道的样式 */
::-webkit-scrollbar-track {
  background: #f1f1f1; /* 设置滚动条轨道背景色 */
}

/* 修改滚动条滑块的样式 */
::-webkit-scrollbar-thumb {
  background: #888; /* 设置滚动条滑块颜色 */
}

/* 鼠标悬停在滚动条上时的样式 */
::-webkit-scrollbar-thumb:hover {
  background: #555; /* 设置滚动条滑块在鼠标悬停时的颜色 */
}`, "",{"version":3,"sources":["webpack://./src/ListNode/index.scss"],"names":[],"mappings":"AAAA,gBAAgB;AAAhB;EACI,cAAA;EACA,eAAA;AAEJ;AAAQ;EAEI,aAAA;EACA,mBAAA;EACA,oEAAA;EACA,0BAAA;EAEA,kBAAA,EAAA,iBAAA;EACA,gBAAA;EACA,eAAA;AAAZ;AACY;EACI,yBAAA;AAChB;AACY;EACI,WAAA;EACA,yBAAA;AAChB;AACY;EACI,eAAA;EACA,gBAAA;EACA,kBAAA;EACA,yBAAA;EACA,cAAA;EACA,mBAAA;AAChB;AACY;EACI,eAAA;EACA,gBAAA;EACA,kBAAA;EACA,yBAAA;EACA,cAAA;EACA,mBAAA;AAChB;AACY;EACI,UAAA;EACA,aAAA;AAChB;AACY;EACI,qBAAA;AAChB;AACY;EACI,cAAA;EACA,kBAAA;EACA,kBAAA;EACA,QAAA;EACA,WAAA;EACA,cAAA;EACA,sBAAA;EACA,YAAA;AAChB;AAAgB;EACI,aAAA;AAEpB;AAKQ;EACI,kBAAA;AAHZ;AAMI;EACI,kBAAA;EACA,aAAA,EAAA,cAAA;EACA,kBAAA,EAAA,WAAA;AAJR;AAQQ;EACI,gBAAA;EACA,8BAAA,EAAA,WAAA;EACA,kBAAA,EAAA,gBAAA;AANZ;;AAWA,aAAA;AACA;EACI,UAAA,EAAA,YAAA;AARJ;;AAWA,eAAA;AACA;EACI,mBAAA,EAAA,eAAA;AARJ;;AAWA,eAAA;AACA;EACI,gBAAA,EAAA,cAAA;AARJ;;AAWA,kBAAA;AACA;EACI,gBAAA,EAAA,qBAAA;AARJ","sourcesContent":[".list-node-wrapper {\n    color: #606266;\n    font-size: 14px;\n    .node-item {\n        .left-content {\n            // 使用 display 会出现 hover背景色和 active高亮色宽度比较短，但是没事。。\n            display: flex;\n            align-items: center;\n            /* display: inline-block; // 这个加上就会把这个盒子的宽度变成跟内容的宽度一样，而不会是根据父容器的宽度 */\n            padding: 3px 20px 3px 14px;\n            // white-space: wrap;\n            position: relative; /* 添加相对定位--好像没用 */\n            min-width: 120px;\n            cursor: pointer;\n            &:hover {\n                background-color: #f6f6f6;\n            }\n            &.active {\n                color: #fff;\n                background-color: #2783d8;\n            }\n            .tag1 {\n                font-size: 12px;\n                padding: 2px 6px;\n                border-radius: 6px;\n                background-color: #f0f9eb;\n                color: #6dc442;\n                white-space: nowrap;\n            }\n            .tag2 {\n                font-size: 12px;\n                padding: 2px 6px;\n                border-radius: 6px;\n                background-color: #fef0f0;\n                color: #f67878;\n                white-space: nowrap;\n            }\n            .icon {\n                width: 8px;\n                margin: 0 6px;\n            }\n            .item-name {\n                word-break: break-all; // 树节点 的名字太长让它换行\n            }\n            .right-content {\n                padding: 0 5px;\n                position: absolute;\n                border-radius: 4px;\n                top: 2px;\n                right: 10px;\n                color: #606266;\n                background-color: #fff;\n                z-index: 999;\n                i {\n                    margin: 0 6px;\n                }\n            }\n        }\n\n        .has-children {\n        }\n        .no-children {\n            padding-left: 16px;\n        }\n    }\n    .children {\n        padding-left: 10px;\n        max-height: 0; /* 初始状态下高度为0 */\n        overflow-y: hidden; /* 隐藏溢出内容 */\n        &.not-expand {\n            // transition: max-height .2s ease; 这个加上过度效果会出现点击的节点的内部闪现x轴滚动条\n        }\n        &.expanded {\n            overflow-y: clip; // 这句话加上就不会出现很多歌滚动条。。。\n            transition: max-height 2s ease; /* 添加过渡效果 */\n            max-height: 1000px; /* 展开时高度自动适应内容 */\n        }\n    }\n}\n\n/* 修改滚动条的样式 */\n::-webkit-scrollbar {\n    width: 8px; /* 设置滚动条宽度 */\n}\n\n/* 修改滚动条轨道的样式 */\n::-webkit-scrollbar-track {\n    background: #f1f1f1; /* 设置滚动条轨道背景色 */\n}\n\n/* 修改滚动条滑块的样式 */\n::-webkit-scrollbar-thumb {\n    background: #888; /* 设置滚动条滑块颜色 */\n}\n\n/* 鼠标悬停在滚动条上时的样式 */\n::-webkit-scrollbar-thumb:hover {\n    background: #555; /* 设置滚动条滑块在鼠标悬停时的颜色 */\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 591:
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 128:
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ 51:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ 855:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 740:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ 656:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ 442:
/***/ ((module) => {

"use strict";
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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ src)
});

// EXTERNAL MODULE: external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"}
var external_root_React_commonjs2_react_commonjs_react_amd_react_ = __webpack_require__(442);
var external_root_React_commonjs2_react_commonjs_react_amd_react_default = /*#__PURE__*/__webpack_require__.n(external_root_React_commonjs2_react_commonjs_react_amd_react_);
// EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(591);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(740);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(128);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(855);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(51);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(656);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/ListNode/index.scss
var ListNode = __webpack_require__(562);
;// CONCATENATED MODULE: ./src/ListNode/index.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(ListNode/* default */.A, options);




       /* harmony default export */ const src_ListNode = (ListNode/* default */.A && ListNode/* default */.A.locals ? ListNode/* default */.A.locals : undefined);

;// CONCATENATED MODULE: ./src/ListNode/index.tsx


const ListNode_ListNode = _ref => {
  let {
    prefixTag,
    showTag = false,
    children,
    wrap = true,
    node,
    isTree,
    showOptIcons = true,
    showAddIcon = true,
    showEditIcon = true,
    activeId,
    onToggle,
    onIconClick,
    onItemClick,
    onOptIconClick
  } = _ref;
  const [isExpanded, setIsExpanded] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false);
  const [isShowIcons, setIsShowIcons] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false);
  const handleToggle = () => {
    setIsExpanded(prev => !prev);
    onToggle && onToggle(node);
  };
  const handleItemClick = node => {
    onItemClick && onItemClick(node);
  };
  const handleIconClick = (node, e) => {
    e.stopPropagation();
    handleToggle();
    onIconClick && onIconClick(node);
  };
  const handleChildrenIconClick = node => {
    onIconClick && onIconClick(node);
  };
  const handleOptIconClick = (e, type, node) => {
    e.stopPropagation(); // 阻止事件冒泡
    onOptIconClick && onOptIconClick(type, node);
  };
  const handleChildrenOptIconClick = (type, node) => {
    onOptIconClick && onOptIconClick(type, node);
  };
  const renderTag = () => {
    const childArr = (children === null || children === void 0 ? void 0 : children.length) > 0 ? children : [children];
    return childArr.map(item => {
      var _item$props;
      if ((item === null || item === void 0 || (_item$props = item.props) === null || _item$props === void 0 ? void 0 : _item$props.id) === node.showTag) {
        return item;
      }
    });
  };
  return (
    /*#__PURE__*/
    // style={{whiteSpace: `${wrap ? "wrap" : "nowrap"}`}} 
    external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
      className: "list-node-wrapper"
    }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
      className: "node-item"
    }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
      className: "left-content ".concat(Number(activeId) === Number(node.id) && "active"),
      onClick: () => handleItemClick(node),
      onMouseEnter: () => setIsShowIcons(true),
      onMouseLeave: () => setIsShowIcons(false)
    }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
      className: "prefix-tag"
    }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("i", {
      className: prefixTag
    })), showTag && renderTag(), isTree && node.children && node.children.length > 0 && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("i", {
      onClick: e => handleIconClick(node, e),
      className: "icon fa fa-caret-".concat(isExpanded ? 'down' : 'right')
    }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
      onClick: () => handleItemClick(node),
      className: "item-name ".concat(node.children && node.children.length > 0 ? 'has-children' : 'no-children')
    }, node.name), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
      className: "right-content",
      style: {
        display: showOptIcons && isShowIcons ? 'block' : 'none'
      }
    }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("i", {
      style: {
        display: showAddIcon ? 'inline-block' : 'none'
      },
      className: "icon fa fa-plus",
      onClick: e => handleOptIconClick(e, 'add', node)
    }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("i", {
      style: {
        display: showEditIcon ? 'inline-block' : 'none'
      },
      className: "icon fa fa-pencil",
      onClick: e => handleOptIconClick(e, 'edit', node)
    }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("i", {
      className: "icon fa fa-trash",
      onClick: e => handleOptIconClick(e, 'delete', node)
    })))), node.children && node.children.length > 0 && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
      className: "children ".concat(isExpanded ? 'expanded' : 'not-expand'),
      style: {
        marginLeft: '1rem'
      }
    }, node.children.map(child =>
    /*#__PURE__*/
    // 这里别忘记也要像List父组件一样把 回调传递给 ListNode子组件，因为是递归，所以要这么做，
    // 具体传递的回调的函数需要的参数有哪些，就得参考父组件原来是怎么写的，也可以直接不写好像。。。
    // 或许只是为了写个占位，代表需要触发父组件的这个回调函数？
    // 如果是传递的属性的话，是需要写的,像父组件那样子写，用的参数是父组件传递过来的，类似父组件那样再写一遍
    external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(ListNode_ListNode, {
      prefixTag: prefixTag,
      showTag: showTag,
      children: children,
      showAddIcon: showAddIcon,
      showEditIcon: showEditIcon,
      showOptIcons: showOptIcons,
      activeId: activeId,
      onOptIconClick: (type, child) => handleChildrenOptIconClick(type, child),
      onIconClick: handleChildrenIconClick,
      onItemClick: handleItemClick,
      key: child.id,
      node: child,
      isTree: isTree,
      onToggle: onToggle
    }))))
  );
};
/* harmony default export */ const src_ListNode_0 = (ListNode_ListNode);
// EXTERNAL MODULE: ../Input/dist/cjs/index.js
var cjs = __webpack_require__(798);
var cjs_default = /*#__PURE__*/__webpack_require__.n(cjs);
;// CONCATENATED MODULE: ./src/index.tsx
// List组件



const List = _ref => {
  let {
    prefixTag,
    showSearch = false,
    showTag = false,
    children,
    wrap = true,
    data,
    isTree = true,
    showOptIcons = true,
    showAddIcon = true,
    showEditIcon = true,
    activeId,
    maxWidth = 300,
    maxHeight = "500px",
    onToggle,
    onItemClick,
    onIconClick,
    onOptIconClick
  } = _ref;
  const [_activeId, set_ActiveId] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(activeId);
  const handleItemClick = node => {
    set_ActiveId(node.id);
    onItemClick && onItemClick(node);
  };
  const handleIconClick = node => {
    onIconClick && onIconClick(node);
  };
  const handleOptIconClick = (type, node) => {
    onOptIconClick && onOptIconClick(type, node);
  };
  const handleInputChange = value => {};
  const handleInputIconClick = value => {};
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    set_ActiveId(activeId);
  }, [activeId]);
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "list-wrapper"
  }, showSearch && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "showSearch mb-2"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((cjs_default()), {
    onIconClick: handleInputIconClick,
    onChange: value => handleInputChange(value)
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("i", {
    className: "fa-solid fa-magnifying-glass"
  }))), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "list-content"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    style: {
      maxWidth: maxWidth + "px",
      maxHeight: maxHeight,
      overflow: 'auto'
    }
  }, data && data.map(item => /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(src_ListNode_0, {
    prefixTag: prefixTag,
    showTag: showTag,
    wrap: wrap,
    showEditIcon: showEditIcon,
    showAddIcon: showAddIcon,
    activeId: _activeId,
    showOptIcons: showOptIcons,
    onOptIconClick: (type, node) => handleOptIconClick(type, node),
    onIconClick: handleIconClick,
    onItemClick: handleItemClick,
    key: item.id,
    node: item,
    isTree: isTree,
    onToggle: onToggle
  }, children)))));
};
/* harmony default export */ const src = (List);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});