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
      /***/978: ( /***/module => {
        /**
         * This file automatically generated from `pre-publish.js`.
         * Do not manually edit.
         */

        module.exports = {
          "area": true,
          "base": true,
          "br": true,
          "col": true,
          "embed": true,
          "hr": true,
          "img": true,
          "input": true,
          "link": true,
          "meta": true,
          "param": true,
          "source": true,
          "track": true,
          "wbr": true
        };

        /***/
      }),
      /***/483: ( /***/(module, __nested_webpack_exports__, __nested_webpack_require_4830__) => {
        "use strict";

        /* harmony export */
        __nested_webpack_require_4830__.d(__nested_webpack_exports__, {
          /* harmony export */A: () => __WEBPACK_DEFAULT_EXPORT__
          /* harmony export */
        });
        /* harmony import */
        var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_4830__(73);
        /* harmony import */
        var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_4830__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */
        var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_4830__(191);
        /* harmony import */
        var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_4830__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
        // Imports

        var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());
        // Module
        ___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n.icon-input {\n  position: relative; /* \u8BA9\u4F2A\u5143\u7D20\u76F8\u5BF9\u4E8E\u8F93\u5165\u6846\u5B9A\u4F4D */\n}\n.icon-input .icon {\n  position: absolute;\n  right: 20px;\n  top: 20%; /* \u5782\u76F4\u5C45\u4E2D */\n  cursor: pointer; /* \u9F20\u6807\u60AC\u505C\u65F6\u663E\u793A\u6307\u9488\u6837\u5F0F */\n  transition: transform 0.3s; /* \u6DFB\u52A0\u8FC7\u6E21\u6548\u679C */\n  color: #c6c6cd;\n}\n.icon-input .icon:hover {\n  transform: scale(1.3); /* \u6C34\u5E73\u548C\u5782\u76F4\u65B9\u5411\u90FD\u653E\u59271.5\u500D */\n  color: #51515b;\n}", "", {
          "version": 3,
          "sources": ["webpack://./src/index.scss"],
          "names": [],
          "mappings": "AAAA,gBAAgB;AAAhB;EACI,kBAAA,EAAA,iBAAA;AAEJ;AAAI;EACI,kBAAA;EACA,WAAA;EACA,QAAA,EAAA,SAAA;EACA,eAAA,EAAA,gBAAA;EACA,0BAAA,EAAA,WAAA;EACA,cAAA;AAER;AADQ;EACI,qBAAA,EAAA,mBAAA;EACA,cAAA;AAGZ",
          "sourcesContent": [".icon-input {\r\n    position: relative; /* 让伪元素相对于输入框定位 */\r\n\r\n    .icon {\r\n        position: absolute;\r\n        right: 20px;\r\n        top: 20%;  /* 垂直居中 */\r\n        cursor: pointer;  /* 鼠标悬停时显示指针样式 */\r\n        transition: transform 0.3s; /* 添加过渡效果 */\r\n        color: #c6c6cd;\r\n        &:hover {\r\n            transform: scale(1.3); /* 水平和垂直方向都放大1.5倍 */\r\n            color: #51515b;\r\n        }\r\n    }\r\n}\r\n\r\n"],
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
      /***/855: ( /***/(module, __unused_webpack_exports, __nested_webpack_require_12703__) => {
        "use strict";

        /* istanbul ignore next  */
        function setAttributesWithoutAttributes(styleElement) {
          var nonce =  true ? __nested_webpack_require_12703__.nc : 0;
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
    function __nested_webpack_require_18626__(moduleId) {
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
      __webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_18626__);
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
      /******/__nested_webpack_require_18626__.n = module => {
        /******/var getter = module && module.__esModule ? /******/() => module['default'] : /******/() => module;
        /******/
        __nested_webpack_require_18626__.d(getter, {
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
      /******/__nested_webpack_require_18626__.d = (exports, definition) => {
        /******/for (var key in definition) {
          /******/if (__nested_webpack_require_18626__.o(definition, key) && !__nested_webpack_require_18626__.o(exports, key)) {
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
      /******/__nested_webpack_require_18626__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
      /******/
    })();
    /******/
    /******/ /* webpack/runtime/make namespace object */
    /******/
    (() => {
      /******/ // define __esModule on exports
      /******/__nested_webpack_require_18626__.r = exports => {
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
      /******/__nested_webpack_require_18626__.nc = undefined;
      /******/
    })();
    /******/
    /************************************************************************/
    var __nested_webpack_exports__ = {};
    // This entry need to be wrapped in an IIFE because it need to be in strict mode.
    (() => {
      "use strict";

      // ESM COMPAT FLAG
      __nested_webpack_require_18626__.r(__nested_webpack_exports__);

      // EXPORTS
      __nested_webpack_require_18626__.d(__nested_webpack_exports__, {
        "default": () => ( /* binding */src_0)
      });

      // EXTERNAL MODULE: external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"}
      var external_root_React_commonjs2_react_commonjs_react_amd_react_ = __nested_webpack_require_18626__(442);
      var external_root_React_commonjs2_react_commonjs_react_amd_react_default = /*#__PURE__*/__nested_webpack_require_18626__.n(external_root_React_commonjs2_react_commonjs_react_amd_react_);
      // EXTERNAL MODULE: ../../node_modules/void-elements/index.js
      var void_elements = __nested_webpack_require_18626__(978);
      var void_elements_default = /*#__PURE__*/__nested_webpack_require_18626__.n(void_elements);
      ; // CONCATENATED MODULE: ../../node_modules/html-parse-stringify/dist/html-parse-stringify.module.js

      var t = /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;
      function n(n) {
        var r = {
            type: "tag",
            name: "",
            voidElement: !1,
            attrs: {},
            children: []
          },
          i = n.match(/<\/?([^\s]+?)[/\s>]/);
        if (i && (r.name = i[1], (void_elements_default()[i[1]] || "/" === n.charAt(n.length - 2)) && (r.voidElement = !0), r.name.startsWith("!--"))) {
          var s = n.indexOf("--\x3e");
          return {
            type: "comment",
            comment: -1 !== s ? n.slice(4, s) : ""
          };
        }
        for (var a = new RegExp(t), c = null; null !== (c = a.exec(n));) if (c[0].trim()) if (c[1]) {
          var o = c[1].trim(),
            l = [o, ""];
          o.indexOf("=") > -1 && (l = o.split("=")), r.attrs[l[0]] = l[1], a.lastIndex--;
        } else c[2] && (r.attrs[c[2]] = c[3].trim().substring(1, c[3].length - 1));
        return r;
      }
      var r = /<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,
        i = /^\s*$/,
        s = Object.create(null);
      function a(e, t) {
        switch (t.type) {
          case "text":
            return e + t.content;
          case "tag":
            return e += "<" + t.name + (t.attrs ? function (e) {
              var t = [];
              for (var n in e) t.push(n + '="' + e[n] + '"');
              return t.length ? " " + t.join(" ") : "";
            }(t.attrs) : "") + (t.voidElement ? "/>" : ">"), t.voidElement ? e : e + t.children.reduce(a, "") + "</" + t.name + ">";
          case "comment":
            return e + "\x3c!--" + t.comment + "--\x3e";
        }
      }
      var c = {
        parse: function (e, t) {
          t || (t = {}), t.components || (t.components = s);
          var a,
            c = [],
            o = [],
            l = -1,
            m = !1;
          if (0 !== e.indexOf("<")) {
            var u = e.indexOf("<");
            c.push({
              type: "text",
              content: -1 === u ? e : e.substring(0, u)
            });
          }
          return e.replace(r, function (r, s) {
            if (m) {
              if (r !== "</" + a.name + ">") return;
              m = !1;
            }
            var u,
              f = "/" !== r.charAt(1),
              h = r.startsWith("\x3c!--"),
              p = s + r.length,
              d = e.charAt(p);
            if (h) {
              var v = n(r);
              return l < 0 ? (c.push(v), c) : ((u = o[l]).children.push(v), c);
            }
            if (f && (l++, "tag" === (a = n(r)).type && t.components[a.name] && (a.type = "component", m = !0), a.voidElement || m || !d || "<" === d || a.children.push({
              type: "text",
              content: e.slice(p, e.indexOf("<", p))
            }), 0 === l && c.push(a), (u = o[l - 1]) && u.children.push(a), o[l] = a), (!f || a.voidElement) && (l > -1 && (a.voidElement || a.name === r.slice(2, -1)) && (l--, a = -1 === l ? c : o[l]), !m && "<" !== d && d)) {
              u = -1 === l ? c : o[l].children;
              var x = e.indexOf("<", p),
                g = e.slice(p, -1 === x ? void 0 : x);
              i.test(g) && (g = " "), (x > -1 && l + u.length >= 0 || " " !== g) && u.push({
                type: "text",
                content: g
              });
            }
          }), c;
        },
        stringify: function (e) {
          return e.reduce(function (e, t) {
            return e + a("", t);
          }, "");
        }
      };
      /* harmony default export */
      const html_parse_stringify_module = /* unused pure expression or super */null && 0;
      ; // CONCATENATED MODULE: ../../node_modules/react-i18next/dist/es/utils.js
      function utils_warn() {
        if (console && console.warn) {
          var _console;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          if (typeof args[0] === 'string') args[0] = "react-i18next:: ".concat(args[0]);
          (_console = console).warn.apply(_console, args);
        }
      }
      var alreadyWarned = {};
      function utils_warnOnce() {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }
        if (typeof args[0] === 'string' && alreadyWarned[args[0]]) return;
        if (typeof args[0] === 'string') alreadyWarned[args[0]] = new Date();
        utils_warn.apply(void 0, args);
      }
      function loadNamespaces(i18n, ns, cb) {
        i18n.loadNamespaces(ns, function () {
          if (i18n.isInitialized) {
            cb();
          } else {
            var initialized = function initialized() {
              setTimeout(function () {
                i18n.off('initialized', initialized);
              }, 0);
              cb();
            };
            i18n.on('initialized', initialized);
          }
        });
      }
      function oldI18nextHasLoadedNamespace(ns, i18n) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var lng = i18n.languages[0];
        var fallbackLng = i18n.options ? i18n.options.fallbackLng : false;
        var lastLng = i18n.languages[i18n.languages.length - 1];
        if (lng.toLowerCase() === 'cimode') return true;
        var loadNotPending = function loadNotPending(l, n) {
          var loadState = i18n.services.backendConnector.state["".concat(l, "|").concat(n)];
          return loadState === -1 || loadState === 2;
        };
        if (options.bindI18n && options.bindI18n.indexOf('languageChanging') > -1 && i18n.services.backendConnector.backend && i18n.isLanguageChangingTo && !loadNotPending(i18n.isLanguageChangingTo, ns)) return false;
        if (i18n.hasResourceBundle(lng, ns)) return true;
        if (!i18n.services.backendConnector.backend || i18n.options.resources && !i18n.options.partialBundledLanguages) return true;
        if (loadNotPending(lng, ns) && (!fallbackLng || loadNotPending(lastLng, ns))) return true;
        return false;
      }
      function hasLoadedNamespace(ns, i18n) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        if (!i18n.languages || !i18n.languages.length) {
          utils_warnOnce('i18n.languages were undefined or empty', i18n.languages);
          return true;
        }
        var isNewerI18next = i18n.options.ignoreJSONStructure !== undefined;
        if (!isNewerI18next) {
          return oldI18nextHasLoadedNamespace(ns, i18n, options);
        }
        return i18n.hasLoadedNamespace(ns, {
          precheck: function precheck(i18nInstance, loadNotPending) {
            if (options.bindI18n && options.bindI18n.indexOf('languageChanging') > -1 && i18nInstance.services.backendConnector.backend && i18nInstance.isLanguageChangingTo && !loadNotPending(i18nInstance.isLanguageChangingTo, ns)) return false;
          }
        });
      }
      function utils_getDisplayName(Component) {
        return Component.displayName || Component.name || (typeof Component === 'string' && Component.length > 0 ? Component : 'Unknown');
      }
      ; // CONCATENATED MODULE: ../../node_modules/@babel/runtime/helpers/esm/typeof.js
      function typeof_typeof(o) {
        "@babel/helpers - typeof";

        return typeof_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
          return typeof o;
        } : function (o) {
          return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
        }, typeof_typeof(o);
      }
      ; // CONCATENATED MODULE: ../../node_modules/@babel/runtime/helpers/esm/toPrimitive.js

      function toPrimitive(t, r) {
        if ("object" != typeof_typeof(t) || !t) return t;
        var e = t[Symbol.toPrimitive];
        if (void 0 !== e) {
          var i = e.call(t, r || "default");
          if ("object" != typeof_typeof(i)) return i;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === r ? String : Number)(t);
      }
      ; // CONCATENATED MODULE: ../../node_modules/@babel/runtime/helpers/esm/toPropertyKey.js

      function toPropertyKey(t) {
        var i = toPrimitive(t, "string");
        return "symbol" == typeof_typeof(i) ? i : i + "";
      }
      ; // CONCATENATED MODULE: ../../node_modules/@babel/runtime/helpers/esm/defineProperty.js

      function defineProperty_defineProperty(obj, key, value) {
        key = toPropertyKey(key);
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }
      ; // CONCATENATED MODULE: ../../node_modules/react-i18next/dist/es/unescape.js
      var matchHtmlEntity = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g;
      var htmlEntities = {
        '&amp;': '&',
        '&#38;': '&',
        '&lt;': '<',
        '&#60;': '<',
        '&gt;': '>',
        '&#62;': '>',
        '&apos;': "'",
        '&#39;': "'",
        '&quot;': '"',
        '&#34;': '"',
        '&nbsp;': ' ',
        '&#160;': ' ',
        '&copy;': '©',
        '&#169;': '©',
        '&reg;': '®',
        '&#174;': '®',
        '&hellip;': '…',
        '&#8230;': '…',
        '&#x2F;': '/',
        '&#47;': '/'
      };
      var unescapeHtmlEntity = function unescapeHtmlEntity(m) {
        return htmlEntities[m];
      };
      var unescape_unescape = function unescape(text) {
        return text.replace(matchHtmlEntity, unescapeHtmlEntity);
      };
      ; // CONCATENATED MODULE: ../../node_modules/react-i18next/dist/es/defaults.js

      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          if (enumerableOnly) {
            symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
          }
          keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};
          if (i % 2) {
            ownKeys(Object(source), true).forEach(function (key) {
              defineProperty_defineProperty(target, key, source[key]);
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
          } else {
            ownKeys(Object(source)).forEach(function (key) {
              Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
          }
        }
        return target;
      }
      var defaultOptions = {
        bindI18n: 'languageChanged',
        bindI18nStore: '',
        transEmptyNodeValue: '',
        transSupportBasicHtmlNodes: true,
        transWrapTextNodes: '',
        transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],
        useSuspense: true,
        unescape: unescape_unescape
      };
      function setDefaults() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        defaultOptions = _objectSpread(_objectSpread({}, defaultOptions), options);
      }
      function defaults_getDefaults() {
        return defaultOptions;
      }
      ; // CONCATENATED MODULE: ../../node_modules/react-i18next/dist/es/TransWithoutContext.js

      var _excluded = /* unused pure expression or super */null && 0,
        _excluded2 = /* unused pure expression or super */null && 0;
      function TransWithoutContext_ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          if (enumerableOnly) {
            symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
          }
          keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function TransWithoutContext_objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};
          if (i % 2) {
            TransWithoutContext_ownKeys(Object(source), true).forEach(function (key) {
              _defineProperty(target, key, source[key]);
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
          } else {
            TransWithoutContext_ownKeys(Object(source)).forEach(function (key) {
              Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
          }
        }
        return target;
      }
      function hasChildren(node, checkLength) {
        if (!node) return false;
        var base = node.props ? node.props.children : node.children;
        if (checkLength) return base.length > 0;
        return !!base;
      }
      function getChildren(node) {
        if (!node) return [];
        return node.props ? node.props.children : node.children;
      }
      function hasValidReactChildren(children) {
        if (Object.prototype.toString.call(children) !== '[object Array]') return false;
        return children.every(function (child) {
          return /*#__PURE__*/isValidElement(child);
        });
      }
      function getAsArray(data) {
        return Array.isArray(data) ? data : [data];
      }
      function mergeProps(source, target) {
        var newTarget = TransWithoutContext_objectSpread({}, target);
        newTarget.props = Object.assign(source.props, target.props);
        return newTarget;
      }
      function nodesToString(children, i18nOptions) {
        if (!children) return '';
        var stringNode = '';
        var childrenArray = getAsArray(children);
        var keepArray = i18nOptions.transSupportBasicHtmlNodes && i18nOptions.transKeepBasicHtmlNodesFor ? i18nOptions.transKeepBasicHtmlNodesFor : [];
        childrenArray.forEach(function (child, childIndex) {
          if (typeof child === 'string') {
            stringNode += "".concat(child);
          } else if ( /*#__PURE__*/isValidElement(child)) {
            var childPropsCount = Object.keys(child.props).length;
            var shouldKeepChild = keepArray.indexOf(child.type) > -1;
            var childChildren = child.props.children;
            if (!childChildren && shouldKeepChild && childPropsCount === 0) {
              stringNode += "<".concat(child.type, "/>");
            } else if (!childChildren && (!shouldKeepChild || childPropsCount !== 0)) {
              stringNode += "<".concat(childIndex, "></").concat(childIndex, ">");
            } else if (child.props.i18nIsDynamicList) {
              stringNode += "<".concat(childIndex, "></").concat(childIndex, ">");
            } else if (shouldKeepChild && childPropsCount === 1 && typeof childChildren === 'string') {
              stringNode += "<".concat(child.type, ">").concat(childChildren, "</").concat(child.type, ">");
            } else {
              var content = nodesToString(childChildren, i18nOptions);
              stringNode += "<".concat(childIndex, ">").concat(content, "</").concat(childIndex, ">");
            }
          } else if (child === null) {
            warn("Trans: the passed in value is invalid - seems you passed in a null child.");
          } else if (_typeof(child) === 'object') {
            var format = child.format,
              clone = _objectWithoutProperties(child, _excluded);
            var keys = Object.keys(clone);
            if (keys.length === 1) {
              var value = format ? "".concat(keys[0], ", ").concat(format) : keys[0];
              stringNode += "{{".concat(value, "}}");
            } else {
              warn("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.", child);
            }
          } else {
            warn("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.", child);
          }
        });
        return stringNode;
      }
      function renderNodes(children, targetString, i18n, i18nOptions, combinedTOpts, shouldUnescape) {
        if (targetString === '') return [];
        var keepArray = i18nOptions.transKeepBasicHtmlNodesFor || [];
        var emptyChildrenButNeedsHandling = targetString && new RegExp(keepArray.join('|')).test(targetString);
        if (!children && !emptyChildrenButNeedsHandling) return [targetString];
        var data = {};
        function getData(childs) {
          var childrenArray = getAsArray(childs);
          childrenArray.forEach(function (child) {
            if (typeof child === 'string') return;
            if (hasChildren(child)) getData(getChildren(child));else if (_typeof(child) === 'object' && ! /*#__PURE__*/isValidElement(child)) Object.assign(data, child);
          });
        }
        getData(children);
        var ast = HTML.parse("<0>".concat(targetString, "</0>"));
        var opts = TransWithoutContext_objectSpread(TransWithoutContext_objectSpread({}, data), combinedTOpts);
        function renderInner(child, node, rootReactNode) {
          var childs = getChildren(child);
          var mappedChildren = mapAST(childs, node.children, rootReactNode);
          return hasValidReactChildren(childs) && mappedChildren.length === 0 ? childs : mappedChildren;
        }
        function pushTranslatedJSX(child, inner, mem, i, isVoid) {
          if (child.dummy) child.children = inner;
          mem.push( /*#__PURE__*/cloneElement(child, TransWithoutContext_objectSpread(TransWithoutContext_objectSpread({}, child.props), {}, {
            key: i
          }), isVoid ? undefined : inner));
        }
        function mapAST(reactNode, astNode, rootReactNode) {
          var reactNodes = getAsArray(reactNode);
          var astNodes = getAsArray(astNode);
          return astNodes.reduce(function (mem, node, i) {
            var translationContent = node.children && node.children[0] && node.children[0].content && i18n.services.interpolator.interpolate(node.children[0].content, opts, i18n.language);
            if (node.type === 'tag') {
              var tmp = reactNodes[parseInt(node.name, 10)];
              if (!tmp && rootReactNode.length === 1 && rootReactNode[0][node.name]) tmp = rootReactNode[0][node.name];
              if (!tmp) tmp = {};
              var child = Object.keys(node.attrs).length !== 0 ? mergeProps({
                props: node.attrs
              }, tmp) : tmp;
              var isElement = /*#__PURE__*/isValidElement(child);
              var isValidTranslationWithChildren = isElement && hasChildren(node, true) && !node.voidElement;
              var isEmptyTransWithHTML = emptyChildrenButNeedsHandling && _typeof(child) === 'object' && child.dummy && !isElement;
              var isKnownComponent = _typeof(children) === 'object' && children !== null && Object.hasOwnProperty.call(children, node.name);
              if (typeof child === 'string') {
                var value = i18n.services.interpolator.interpolate(child, opts, i18n.language);
                mem.push(value);
              } else if (hasChildren(child) || isValidTranslationWithChildren) {
                var inner = renderInner(child, node, rootReactNode);
                pushTranslatedJSX(child, inner, mem, i);
              } else if (isEmptyTransWithHTML) {
                var _inner = mapAST(reactNodes, node.children, rootReactNode);
                mem.push( /*#__PURE__*/cloneElement(child, TransWithoutContext_objectSpread(TransWithoutContext_objectSpread({}, child.props), {}, {
                  key: i
                }), _inner));
              } else if (Number.isNaN(parseFloat(node.name))) {
                if (isKnownComponent) {
                  var _inner2 = renderInner(child, node, rootReactNode);
                  pushTranslatedJSX(child, _inner2, mem, i, node.voidElement);
                } else if (i18nOptions.transSupportBasicHtmlNodes && keepArray.indexOf(node.name) > -1) {
                  if (node.voidElement) {
                    mem.push( /*#__PURE__*/createElement(node.name, {
                      key: "".concat(node.name, "-").concat(i)
                    }));
                  } else {
                    var _inner3 = mapAST(reactNodes, node.children, rootReactNode);
                    mem.push( /*#__PURE__*/createElement(node.name, {
                      key: "".concat(node.name, "-").concat(i)
                    }, _inner3));
                  }
                } else if (node.voidElement) {
                  mem.push("<".concat(node.name, " />"));
                } else {
                  var _inner4 = mapAST(reactNodes, node.children, rootReactNode);
                  mem.push("<".concat(node.name, ">").concat(_inner4, "</").concat(node.name, ">"));
                }
              } else if (_typeof(child) === 'object' && !isElement) {
                var content = node.children[0] ? translationContent : null;
                if (content) mem.push(content);
              } else if (node.children.length === 1 && translationContent) {
                mem.push( /*#__PURE__*/cloneElement(child, TransWithoutContext_objectSpread(TransWithoutContext_objectSpread({}, child.props), {}, {
                  key: i
                }), translationContent));
              } else {
                mem.push( /*#__PURE__*/cloneElement(child, TransWithoutContext_objectSpread(TransWithoutContext_objectSpread({}, child.props), {}, {
                  key: i
                })));
              }
            } else if (node.type === 'text') {
              var wrapTextNodes = i18nOptions.transWrapTextNodes;
              var _content = shouldUnescape ? i18nOptions.unescape(i18n.services.interpolator.interpolate(node.content, opts, i18n.language)) : i18n.services.interpolator.interpolate(node.content, opts, i18n.language);
              if (wrapTextNodes) {
                mem.push( /*#__PURE__*/createElement(wrapTextNodes, {
                  key: "".concat(node.name, "-").concat(i)
                }, _content));
              } else {
                mem.push(_content);
              }
            }
            return mem;
          }, []);
        }
        var result = mapAST([{
          dummy: true,
          children: children || []
        }], ast, getAsArray(children || []));
        return getChildren(result[0]);
      }
      function Trans(_ref) {
        var children = _ref.children,
          count = _ref.count,
          parent = _ref.parent,
          i18nKey = _ref.i18nKey,
          context = _ref.context,
          _ref$tOptions = _ref.tOptions,
          tOptions = _ref$tOptions === void 0 ? {} : _ref$tOptions,
          values = _ref.values,
          defaults = _ref.defaults,
          components = _ref.components,
          ns = _ref.ns,
          i18nFromProps = _ref.i18n,
          tFromProps = _ref.t,
          shouldUnescape = _ref.shouldUnescape,
          additionalProps = _objectWithoutProperties(_ref, _excluded2);
        var i18n = i18nFromProps || getI18n();
        if (!i18n) {
          warnOnce('You will need to pass in an i18next instance by using i18nextReactModule');
          return children;
        }
        var t = tFromProps || i18n.t.bind(i18n) || function (k) {
          return k;
        };
        if (context) tOptions.context = context;
        var reactI18nextOptions = TransWithoutContext_objectSpread(TransWithoutContext_objectSpread({}, getDefaults()), i18n.options && i18n.options.react);
        var namespaces = ns || t.ns || i18n.options && i18n.options.defaultNS;
        namespaces = typeof namespaces === 'string' ? [namespaces] : namespaces || ['translation'];
        var defaultValue = defaults || nodesToString(children, reactI18nextOptions) || reactI18nextOptions.transEmptyNodeValue || i18nKey;
        var hashTransKey = reactI18nextOptions.hashTransKey;
        var key = i18nKey || (hashTransKey ? hashTransKey(defaultValue) : defaultValue);
        var interpolationOverride = values ? tOptions.interpolation : {
          interpolation: TransWithoutContext_objectSpread(TransWithoutContext_objectSpread({}, tOptions.interpolation), {}, {
            prefix: '#$?',
            suffix: '?$#'
          })
        };
        var combinedTOpts = TransWithoutContext_objectSpread(TransWithoutContext_objectSpread(TransWithoutContext_objectSpread(TransWithoutContext_objectSpread({}, tOptions), {}, {
          count: count
        }, values), interpolationOverride), {}, {
          defaultValue: defaultValue,
          ns: namespaces
        });
        var translation = key ? t(key, combinedTOpts) : defaultValue;
        var content = renderNodes(components || children, translation, i18n, reactI18nextOptions, combinedTOpts, shouldUnescape);
        var useAsParent = parent !== undefined ? parent : reactI18nextOptions.defaultTransParent;
        return useAsParent ? /*#__PURE__*/createElement(useAsParent, additionalProps, content) : content;
      }
      ; // CONCATENATED MODULE: ../../node_modules/@babel/runtime/helpers/esm/classCallCheck.js
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      ; // CONCATENATED MODULE: ../../node_modules/@babel/runtime/helpers/esm/createClass.js

      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", {
          writable: false
        });
        return Constructor;
      }
      ; // CONCATENATED MODULE: ../../node_modules/react-i18next/dist/es/i18nInstance.js
      var i18nInstance;
      function setI18n(instance) {
        i18nInstance = instance;
      }
      function i18nInstance_getI18n() {
        return i18nInstance;
      }
      ; // CONCATENATED MODULE: ../../node_modules/react-i18next/dist/es/initReactI18next.js

      var initReactI18next = {
        type: '3rdParty',
        init: function init(instance) {
          setDefaults(instance.options.react);
          setI18n(instance);
        }
      };
      ; // CONCATENATED MODULE: ../../node_modules/react-i18next/dist/es/context.js

      function context_ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          if (enumerableOnly) {
            symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
          }
          keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function context_objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};
          if (i % 2) {
            context_ownKeys(Object(source), true).forEach(function (key) {
              _defineProperty(target, key, source[key]);
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
          } else {
            context_ownKeys(Object(source)).forEach(function (key) {
              Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
          }
        }
        return target;
      }
      var context_I18nContext = /*#__PURE__*/(0, external_root_React_commonjs2_react_commonjs_react_amd_react_.createContext)();
      var ReportNamespaces = function () {
        function ReportNamespaces() {
          _classCallCheck(this, ReportNamespaces);
          this.usedNamespaces = {};
        }
        _createClass(ReportNamespaces, [{
          key: "addUsedNamespaces",
          value: function addUsedNamespaces(namespaces) {
            var _this = this;
            namespaces.forEach(function (ns) {
              if (!_this.usedNamespaces[ns]) _this.usedNamespaces[ns] = true;
            });
          }
        }, {
          key: "getUsedNamespaces",
          value: function getUsedNamespaces() {
            return Object.keys(this.usedNamespaces);
          }
        }]);
        return ReportNamespaces;
      }();
      function context_composeInitialProps(ForComponent) {
        return function (ctx) {
          return new Promise(function (resolve) {
            var i18nInitialProps = getInitialProps();
            if (ForComponent.getInitialProps) {
              ForComponent.getInitialProps(ctx).then(function (componentsInitialProps) {
                resolve(context_objectSpread(context_objectSpread({}, componentsInitialProps), i18nInitialProps));
              });
            } else {
              resolve(i18nInitialProps);
            }
          });
        };
      }
      function getInitialProps() {
        var i18n = getI18n();
        var namespaces = i18n.reportNamespaces ? i18n.reportNamespaces.getUsedNamespaces() : [];
        var ret = {};
        var initialI18nStore = {};
        i18n.languages.forEach(function (l) {
          initialI18nStore[l] = {};
          namespaces.forEach(function (ns) {
            initialI18nStore[l][ns] = i18n.getResourceBundle(l, ns) || {};
          });
        });
        ret.initialI18nStore = initialI18nStore;
        ret.initialLanguage = i18n.language;
        return ret;
      }
      ; // CONCATENATED MODULE: ../../node_modules/react-i18next/dist/es/Trans.js

      var Trans_excluded = /* unused pure expression or super */null && 0;
      function Trans_ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          if (enumerableOnly) {
            symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
          }
          keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function Trans_objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};
          if (i % 2) {
            Trans_ownKeys(Object(source), true).forEach(function (key) {
              _defineProperty(target, key, source[key]);
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
          } else {
            Trans_ownKeys(Object(source)).forEach(function (key) {
              Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
          }
        }
        return target;
      }
      function Trans_Trans(_ref) {
        var children = _ref.children,
          count = _ref.count,
          parent = _ref.parent,
          i18nKey = _ref.i18nKey,
          context = _ref.context,
          _ref$tOptions = _ref.tOptions,
          tOptions = _ref$tOptions === void 0 ? {} : _ref$tOptions,
          values = _ref.values,
          defaults = _ref.defaults,
          components = _ref.components,
          ns = _ref.ns,
          i18nFromProps = _ref.i18n,
          tFromProps = _ref.t,
          shouldUnescape = _ref.shouldUnescape,
          additionalProps = _objectWithoutProperties(_ref, Trans_excluded);
        var _ref2 = useContext(I18nContext) || {},
          i18nFromContext = _ref2.i18n,
          defaultNSFromContext = _ref2.defaultNS;
        var i18n = i18nFromProps || i18nFromContext || getI18n();
        var t = tFromProps || i18n && i18n.t.bind(i18n);
        return TransWithoutContext(Trans_objectSpread({
          children: children,
          count: count,
          parent: parent,
          i18nKey: i18nKey,
          context: context,
          tOptions: tOptions,
          values: values,
          defaults: defaults,
          components: components,
          ns: ns || t && t.ns || defaultNSFromContext || i18n && i18n.options && i18n.options.defaultNS,
          i18n: i18n,
          t: tFromProps,
          shouldUnescape: shouldUnescape
        }, additionalProps));
      }
      ; // CONCATENATED MODULE: ../../node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
      function _arrayWithHoles(arr) {
        if (Array.isArray(arr)) return arr;
      }
      ; // CONCATENATED MODULE: ../../node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
      function _iterableToArrayLimit(r, l) {
        var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
        if (null != t) {
          var e,
            n,
            i,
            u,
            a = [],
            f = !0,
            o = !1;
          try {
            if (i = (t = t.call(r)).next, 0 === l) {
              if (Object(t) !== t) return;
              f = !1;
            } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
          } catch (r) {
            o = !0, n = r;
          } finally {
            try {
              if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
            } finally {
              if (o) throw n;
            }
          }
          return a;
        }
      }
      ; // CONCATENATED MODULE: ../../node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      ; // CONCATENATED MODULE: ../../node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js

      function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
      }
      ; // CONCATENATED MODULE: ../../node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
      function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      ; // CONCATENATED MODULE: ../../node_modules/@babel/runtime/helpers/esm/slicedToArray.js

      function slicedToArray_slicedToArray(arr, i) {
        return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
      }
      ; // CONCATENATED MODULE: ../../node_modules/react-i18next/dist/es/useTranslation.js

      function useTranslation_ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          if (enumerableOnly) {
            symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
          }
          keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function useTranslation_objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};
          if (i % 2) {
            useTranslation_ownKeys(Object(source), true).forEach(function (key) {
              defineProperty_defineProperty(target, key, source[key]);
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
          } else {
            useTranslation_ownKeys(Object(source)).forEach(function (key) {
              Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
          }
        }
        return target;
      }
      var usePrevious = function usePrevious(value, ignore) {
        var ref = (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)();
        (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
          ref.current = ignore ? ref.current : value;
        }, [value, ignore]);
        return ref.current;
      };
      function useTranslation_useTranslation(ns) {
        var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var i18nFromProps = props.i18n;
        var _ref = (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useContext)(context_I18nContext) || {},
          i18nFromContext = _ref.i18n,
          defaultNSFromContext = _ref.defaultNS;
        var i18n = i18nFromProps || i18nFromContext || i18nInstance_getI18n();
        if (i18n && !i18n.reportNamespaces) i18n.reportNamespaces = new ReportNamespaces();
        if (!i18n) {
          utils_warnOnce('You will need to pass in an i18next instance by using initReactI18next');
          var notReadyT = function notReadyT(k, optsOrDefaultValue) {
            if (typeof optsOrDefaultValue === 'string') return optsOrDefaultValue;
            if (optsOrDefaultValue && typeof_typeof(optsOrDefaultValue) === 'object' && typeof optsOrDefaultValue.defaultValue === 'string') return optsOrDefaultValue.defaultValue;
            return Array.isArray(k) ? k[k.length - 1] : k;
          };
          var retNotReady = [notReadyT, {}, false];
          retNotReady.t = notReadyT;
          retNotReady.i18n = {};
          retNotReady.ready = false;
          return retNotReady;
        }
        if (i18n.options.react && i18n.options.react.wait !== undefined) utils_warnOnce('It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.');
        var i18nOptions = useTranslation_objectSpread(useTranslation_objectSpread(useTranslation_objectSpread({}, defaults_getDefaults()), i18n.options.react), props);
        var useSuspense = i18nOptions.useSuspense,
          keyPrefix = i18nOptions.keyPrefix;
        var namespaces = ns || defaultNSFromContext || i18n.options && i18n.options.defaultNS;
        namespaces = typeof namespaces === 'string' ? [namespaces] : namespaces || ['translation'];
        if (i18n.reportNamespaces.addUsedNamespaces) i18n.reportNamespaces.addUsedNamespaces(namespaces);
        var ready = (i18n.isInitialized || i18n.initializedStoreOnce) && namespaces.every(function (n) {
          return hasLoadedNamespace(n, i18n, i18nOptions);
        });
        function getT() {
          return i18n.getFixedT(null, i18nOptions.nsMode === 'fallback' ? namespaces : namespaces[0], keyPrefix);
        }
        var _useState = (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(getT),
          _useState2 = slicedToArray_slicedToArray(_useState, 2),
          t = _useState2[0],
          setT = _useState2[1];
        var joinedNS = namespaces.join();
        var previousJoinedNS = usePrevious(joinedNS);
        var isMounted = (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(true);
        (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
          var bindI18n = i18nOptions.bindI18n,
            bindI18nStore = i18nOptions.bindI18nStore;
          isMounted.current = true;
          if (!ready && !useSuspense) {
            loadNamespaces(i18n, namespaces, function () {
              if (isMounted.current) setT(getT);
            });
          }
          if (ready && previousJoinedNS && previousJoinedNS !== joinedNS && isMounted.current) {
            setT(getT);
          }
          function boundReset() {
            if (isMounted.current) setT(getT);
          }
          if (bindI18n && i18n) i18n.on(bindI18n, boundReset);
          if (bindI18nStore && i18n) i18n.store.on(bindI18nStore, boundReset);
          return function () {
            isMounted.current = false;
            if (bindI18n && i18n) bindI18n.split(' ').forEach(function (e) {
              return i18n.off(e, boundReset);
            });
            if (bindI18nStore && i18n) bindI18nStore.split(' ').forEach(function (e) {
              return i18n.store.off(e, boundReset);
            });
          };
        }, [i18n, joinedNS]);
        var isInitial = (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(true);
        (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
          if (isMounted.current && !isInitial.current) {
            setT(getT);
          }
          isInitial.current = false;
        }, [i18n, keyPrefix]);
        var ret = [t, i18n, ready];
        ret.t = t;
        ret.i18n = i18n;
        ret.ready = ready;
        if (ready) return ret;
        if (!ready && !useSuspense) return ret;
        throw new Promise(function (resolve) {
          loadNamespaces(i18n, namespaces, function () {
            resolve();
          });
        });
      }
      ; // CONCATENATED MODULE: ../../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
      function _objectWithoutPropertiesLoose(source, excluded) {
        if (source == null) return {};
        var target = {};
        var sourceKeys = Object.keys(source);
        var key, i;
        for (i = 0; i < sourceKeys.length; i++) {
          key = sourceKeys[i];
          if (excluded.indexOf(key) >= 0) continue;
          target[key] = source[key];
        }
        return target;
      }
      ; // CONCATENATED MODULE: ../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js

      function objectWithoutProperties_objectWithoutProperties(source, excluded) {
        if (source == null) return {};
        var target = _objectWithoutPropertiesLoose(source, excluded);
        var key, i;
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++) {
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
          }
        }
        return target;
      }
      ; // CONCATENATED MODULE: ../../node_modules/react-i18next/dist/es/withTranslation.js

      var withTranslation_excluded = ["forwardedRef"];
      function withTranslation_ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          if (enumerableOnly) {
            symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
          }
          keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function withTranslation_objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};
          if (i % 2) {
            withTranslation_ownKeys(Object(source), true).forEach(function (key) {
              defineProperty_defineProperty(target, key, source[key]);
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
          } else {
            withTranslation_ownKeys(Object(source)).forEach(function (key) {
              Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
          }
        }
        return target;
      }
      function withTranslation(ns) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return function Extend(WrappedComponent) {
          function I18nextWithTranslation(_ref) {
            var forwardedRef = _ref.forwardedRef,
              rest = objectWithoutProperties_objectWithoutProperties(_ref, withTranslation_excluded);
            var _useTranslation = useTranslation_useTranslation(ns, withTranslation_objectSpread(withTranslation_objectSpread({}, rest), {}, {
                keyPrefix: options.keyPrefix
              })),
              _useTranslation2 = slicedToArray_slicedToArray(_useTranslation, 3),
              t = _useTranslation2[0],
              i18n = _useTranslation2[1],
              ready = _useTranslation2[2];
            var passDownProps = withTranslation_objectSpread(withTranslation_objectSpread({}, rest), {}, {
              t: t,
              i18n: i18n,
              tReady: ready
            });
            if (options.withRef && forwardedRef) {
              passDownProps.ref = forwardedRef;
            } else if (!options.withRef && forwardedRef) {
              passDownProps.forwardedRef = forwardedRef;
            }
            return /*#__PURE__*/(0, external_root_React_commonjs2_react_commonjs_react_amd_react_.createElement)(WrappedComponent, passDownProps);
          }
          I18nextWithTranslation.displayName = "withI18nextTranslation(".concat(utils_getDisplayName(WrappedComponent), ")");
          I18nextWithTranslation.WrappedComponent = WrappedComponent;
          var forwardRef = function forwardRef(props, ref) {
            return /*#__PURE__*/(0, external_root_React_commonjs2_react_commonjs_react_amd_react_.createElement)(I18nextWithTranslation, Object.assign({}, props, {
              forwardedRef: ref
            }));
          };
          return options.withRef ? /*#__PURE__*/(0, external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef)(forwardRef) : I18nextWithTranslation;
        };
      }
      ; // CONCATENATED MODULE: ../../node_modules/react-i18next/dist/es/Translation.js

      var Translation_excluded = /* unused pure expression or super */null && 0;
      function Translation(props) {
        var ns = props.ns,
          children = props.children,
          options = _objectWithoutProperties(props, Translation_excluded);
        var _useTranslation = useTranslation(ns, options),
          _useTranslation2 = _slicedToArray(_useTranslation, 3),
          t = _useTranslation2[0],
          i18n = _useTranslation2[1],
          ready = _useTranslation2[2];
        return children(t, {
          i18n: i18n,
          lng: i18n.language
        }, ready);
      }
      ; // CONCATENATED MODULE: ../../node_modules/react-i18next/dist/es/I18nextProvider.js

      function I18nextProvider(_ref) {
        var i18n = _ref.i18n,
          defaultNS = _ref.defaultNS,
          children = _ref.children;
        var value = useMemo(function () {
          return {
            i18n: i18n,
            defaultNS: defaultNS
          };
        }, [i18n, defaultNS]);
        return /*#__PURE__*/createElement(I18nContext.Provider, {
          value: value
        }, children);
      }
      ; // CONCATENATED MODULE: ../../node_modules/react-i18next/dist/es/useSSR.js

      function useSSR_useSSR(initialI18nStore, initialLanguage) {
        var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var i18nFromProps = props.i18n;
        var _ref = useContext(I18nContext) || {},
          i18nFromContext = _ref.i18n;
        var i18n = i18nFromProps || i18nFromContext || getI18n();
        if (i18n.options && i18n.options.isClone) return;
        if (initialI18nStore && !i18n.initializedStoreOnce) {
          i18n.services.resourceStore.data = initialI18nStore;
          i18n.options.ns = Object.values(initialI18nStore).reduce(function (mem, lngResources) {
            Object.keys(lngResources).forEach(function (ns) {
              if (mem.indexOf(ns) < 0) mem.push(ns);
            });
            return mem;
          }, i18n.options.ns);
          i18n.initializedStoreOnce = true;
          i18n.isInitialized = true;
        }
        if (initialLanguage && !i18n.initializedLanguageOnce) {
          i18n.changeLanguage(initialLanguage);
          i18n.initializedLanguageOnce = true;
        }
      }
      ; // CONCATENATED MODULE: ../../node_modules/react-i18next/dist/es/withSSR.js

      var withSSR_excluded = /* unused pure expression or super */null && 0;
      function withSSR_ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          if (enumerableOnly) {
            symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
          }
          keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function withSSR_objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};
          if (i % 2) {
            withSSR_ownKeys(Object(source), true).forEach(function (key) {
              _defineProperty(target, key, source[key]);
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
          } else {
            withSSR_ownKeys(Object(source)).forEach(function (key) {
              Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
          }
        }
        return target;
      }
      function withSSR() {
        return function Extend(WrappedComponent) {
          function I18nextWithSSR(_ref) {
            var initialI18nStore = _ref.initialI18nStore,
              initialLanguage = _ref.initialLanguage,
              rest = _objectWithoutProperties(_ref, withSSR_excluded);
            useSSR(initialI18nStore, initialLanguage);
            return /*#__PURE__*/createElement(WrappedComponent, withSSR_objectSpread({}, rest));
          }
          I18nextWithSSR.getInitialProps = composeInitialProps(WrappedComponent);
          I18nextWithSSR.displayName = "withI18nextSSR(".concat(getDisplayName(WrappedComponent), ")");
          I18nextWithSSR.WrappedComponent = WrappedComponent;
          return I18nextWithSSR;
        };
      }
      ; // CONCATENATED MODULE: ../../node_modules/react-i18next/dist/es/index.js

      var date = function date() {
        return '';
      };
      var time = function time() {
        return '';
      };
      var number = function number() {
        return '';
      };
      var es_select = function select() {
        return '';
      };
      var plural = function plural() {
        return '';
      };
      var selectOrdinal = function selectOrdinal() {
        return '';
      };
      // EXTERNAL MODULE: ../../../node_modules/classnames/index.js
      var classnames = __nested_webpack_require_18626__(650);
      var classnames_default = /*#__PURE__*/__nested_webpack_require_18626__.n(classnames);
      // EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
      var injectStylesIntoStyleTag = __nested_webpack_require_18626__(591);
      var injectStylesIntoStyleTag_default = /*#__PURE__*/__nested_webpack_require_18626__.n(injectStylesIntoStyleTag);
      // EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/styleDomAPI.js
      var styleDomAPI = __nested_webpack_require_18626__(740);
      var styleDomAPI_default = /*#__PURE__*/__nested_webpack_require_18626__.n(styleDomAPI);
      // EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/insertBySelector.js
      var insertBySelector = __nested_webpack_require_18626__(128);
      var insertBySelector_default = /*#__PURE__*/__nested_webpack_require_18626__.n(insertBySelector);
      // EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
      var setAttributesWithoutAttributes = __nested_webpack_require_18626__(855);
      var setAttributesWithoutAttributes_default = /*#__PURE__*/__nested_webpack_require_18626__.n(setAttributesWithoutAttributes);
      // EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/insertStyleElement.js
      var insertStyleElement = __nested_webpack_require_18626__(51);
      var insertStyleElement_default = /*#__PURE__*/__nested_webpack_require_18626__.n(insertStyleElement);
      // EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/styleTagTransform.js
      var styleTagTransform = __nested_webpack_require_18626__(656);
      var styleTagTransform_default = /*#__PURE__*/__nested_webpack_require_18626__.n(styleTagTransform);
      // EXTERNAL MODULE: ../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/index.scss
      var cjs_ruleSet_1_rules_1_use_2_src = __nested_webpack_require_18626__(483);
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

      const Input = props => {
        // 获取 `FormContext.Provider` 提供提供的 `value` 值

        const {
          transparent,
          children,
          type = "text",
          name,
          size,
          className,
          prefixContent,
          suffixContent,
          placeholder,
          style,
          disabled,
          defaultValue,
          onChange,
          onClick,
          onFocus,
          onBlur,
          setFormItemValue,
          onIconClick
        } = props;

        // 确保value不会是undefined，如果defaultValue或formData中相应的值是undefined，则将其设为空字符串
        const [value, setValue] = (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(defaultValue !== null && defaultValue !== void 0 ? defaultValue : '');
        const cls = classnames_default()({
          "input-group": suffixContent || prefixContent,
          ["input-group-".concat(size)]: size,
          [className]: className
        });
        const handleClick = function (e) {
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
          // 为了让父组件能拿到值，在点击确定按钮的时候，让Form调用每个表单项的检验方法
          setFormItemValue && setFormItemValue(e.target.value);
          for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
            args[_key3 - 1] = arguments[_key3];
          }
          onBlur && onBlur(e, ...args);
        };
        const handleChange = function (e) {
          setValue(e.target.value);
          setFormItemValue && setFormItemValue(e.target.value);
          // 根据 name 属性，更新 Form 中的数据源
          for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
            args[_key4 - 1] = arguments[_key4];
          }
          onChange && onChange(e.target.value, ...args);
        };
        const handleIconClick = () => {
          onIconClick && onIconClick(value);
        };
        (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
          if (defaultValue) {
            // 为了一上来就提交表单，这边有默认值也要给 父组件设置
            setValue(defaultValue);
            setFormItemValue && setFormItemValue(defaultValue);
          } else {
            // 不能直接写 setValue(defaultValue)
            // 不知道为什么如果 defaultValue是空的话不会value赋值为 ""
            // 所以只能写死为 ""
            setValue("");
          }
        }, [defaultValue]);
        return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(external_root_React_commonjs2_react_commonjs_react_amd_react_default().Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
          className: cls + "input-wrapper",
          style: {
            flex: 1
          }
        }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
          style: style,
          className: "icon-input input-group"
        }, prefixContent && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
          className: "input-group-text",
          id: "basic-addon1"
        }, prefixContent), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("input", {
          style: {
            borderRadius: "6px",
            borderTopLeftRadius: prefixContent ? 0 : '6px',
            borderBottomLeftRadius: prefixContent ? 0 : '6px',
            background: transparent ? "transparent" : "#fff"
          },
          step: 1,
          name: name,
          value: value,
          disabled: disabled,
          placeholder: placeholder,
          onChange: handleChange,
          onBlur: e => handleBlur(e, "hello1", 5561),
          onFocus: e => handleFocus(e, "hello1", 5561),
          onClick: e => handleClick(e, "hello", 556),
          type: type,
          className: "form-control",
          "aria-label": "Username",
          "aria-describedby": "basic-addon1"
        }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
          onClick: handleIconClick,
          className: "icon"
        }, children)), suffixContent && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
          className: "input-group-text",
          id: "basic-addon2"
        }, suffixContent)));
      };
      /* harmony default export */
      const src_0 = withTranslation()(Input);
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
}`, "",{"version":3,"sources":["webpack://./src/ListNode/index.scss"],"names":[],"mappings":"AAAA,gBAAgB;AAAhB;EACI,cAAA;EACA,eAAA;AAEJ;AAAQ;EAEI,aAAA;EACA,mBAAA;EACA,oEAAA;EACA,0BAAA;EAEA,kBAAA,EAAA,iBAAA;EACA,gBAAA;EACA,eAAA;AAAZ;AACY;EACI,yBAAA;AAChB;AACY;EACI,WAAA;EACA,yBAAA;AAChB;AACY;EACI,eAAA;EACA,gBAAA;EACA,kBAAA;EACA,yBAAA;EACA,cAAA;EACA,mBAAA;AAChB;AACY;EACI,eAAA;EACA,gBAAA;EACA,kBAAA;EACA,yBAAA;EACA,cAAA;EACA,mBAAA;AAChB;AAEY;EACI,UAAA;EACA,aAAA;AAAhB;AAEY;EACI,qBAAA;AAAhB;AAEY;EACI,cAAA;EACA,kBAAA;EACA,kBAAA;EACA,QAAA;EACA,WAAA;EACA,cAAA;EACA,sBAAA;EACA,YAAA;AAAhB;AACgB;EACI,aAAA;AACpB;AAMQ;EACI,kBAAA;AAJZ;AAOI;EACI,kBAAA;EACA,aAAA,EAAA,cAAA;EACA,kBAAA,EAAA,WAAA;AALR;AASQ;EACI,gBAAA;EACA,8BAAA,EAAA,WAAA;EACA,kBAAA,EAAA,gBAAA;AAPZ;;AAYA,aAAA;AACA;EACI,UAAA,EAAA,YAAA;AATJ;;AAYE,eAAA;AACA;EACE,mBAAA,EAAA,eAAA;AATJ;;AAYE,eAAA;AACA;EACE,gBAAA,EAAA,cAAA;AATJ;;AAYE,kBAAA;AACA;EACE,gBAAA,EAAA,qBAAA;AATJ","sourcesContent":[".list-node-wrapper {\n    color: #606266;\n    font-size: 14px;\n    .node-item {\n        .left-content {\n            // 使用 display 会出现 hover背景色和 active高亮色宽度比较短，但是没事。。\n            display: flex;\n            align-items: center;\n            /* display: inline-block; // 这个加上就会把这个盒子的宽度变成跟内容的宽度一样，而不会是根据父容器的宽度 */\n            padding: 3px 20px 3px 14px;\n            // white-space: wrap;\n            position: relative; /* 添加相对定位--好像没用 */\n            min-width: 120px;\n            cursor: pointer;\n            &:hover {\n                background-color: #f6f6f6;\n            }\n            &.active {\n                color: #fff;\n                background-color: #2783d8;\n            }\n            .tag1 {\n                font-size: 12px;\n                padding: 2px 6px;\n                border-radius: 6px;\n                background-color: #f0f9eb;\n                color: #6dc442;\n                white-space: nowrap;\n            }\n            .tag2 {\n                font-size: 12px;\n                padding: 2px 6px;\n                border-radius: 6px;\n                background-color: #fef0f0;\n                color: #f67878;\n                white-space: nowrap;\n\n            }\n            .icon {\n                width: 8px;\n                margin: 0 6px;\n            }\n            .item-name {\n                word-break: break-all; // 树节点 的名字太长让它换行\n            }\n            .right-content {\n                padding: 0 5px;\n                position: absolute;\n                border-radius: 4px;\n                top: 2px;\n                right: 10px;\n                color: #606266;\n                background-color: #fff;\n                z-index: 999;\n                i {\n                    margin: 0 6px;\n                }\n            }\n        }\n        \n        .has-children {\n        }\n        .no-children {\n            padding-left: 16px;\n        }\n    }\n    .children {\n        padding-left: 10px;\n        max-height: 0; /* 初始状态下高度为0 */\n        overflow-y: hidden; /* 隐藏溢出内容 */\n        &.not-expand {\n            // transition: max-height .2s ease; 这个加上过度效果会出现点击的节点的内部闪现x轴滚动条\n        }\n        &.expanded {\n            overflow-y: clip; // 这句话加上就不会出现很多歌滚动条。。。\n            transition: max-height 2s ease; /* 添加过渡效果 */\n            max-height: 1000px; /* 展开时高度自动适应内容 */\n        }\n    }\n}\n\n/* 修改滚动条的样式 */\n::-webkit-scrollbar {\n    width: 8px; /* 设置滚动条宽度 */\n  }\n  \n  /* 修改滚动条轨道的样式 */\n  ::-webkit-scrollbar-track {\n    background: #f1f1f1; /* 设置滚动条轨道背景色 */\n  }\n  \n  /* 修改滚动条滑块的样式 */\n  ::-webkit-scrollbar-thumb {\n    background: #888; /* 设置滚动条滑块颜色 */\n  }\n  \n  /* 鼠标悬停在滚动条上时的样式 */\n  ::-webkit-scrollbar-thumb:hover {\n    background: #555; /* 设置滚动条滑块在鼠标悬停时的颜色 */\n  }"],"sourceRoot":""}]);
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
    maxHeight = 200,
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
      maxHeight: maxHeight + "px",
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