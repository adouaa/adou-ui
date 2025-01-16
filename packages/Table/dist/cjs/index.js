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

/***/ 978:
/***/ ((module) => {

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

/***/ }),

/***/ 214:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
  if (true) module.exports = factory(__webpack_require__(442), __webpack_require__(3));else {}
})(this, (__WEBPACK_EXTERNAL_MODULE__442__, __WEBPACK_EXTERNAL_MODULE__3__) => {
  return /******/(() => {
    // webpackBootstrap
    /******/
    "use strict";

    /******/
    var __webpack_modules__ = {
      /***/191: ( /***/module => {
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
      /***/483: ( /***/(module, __nested_webpack_exports__, __nested_webpack_require_4367__) => {
        /* harmony export */__nested_webpack_require_4367__.d(__nested_webpack_exports__, {
          /* harmony export */A: () => __WEBPACK_DEFAULT_EXPORT__
          /* harmony export */
        });
        /* harmony import */
        var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_4367__(73);
        /* harmony import */
        var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_4367__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */
        var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_4367__(191);
        /* harmony import */
        var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_4367__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
        // Imports

        var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());
        // Module
        ___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n.adou-tooltip-wrapper {\n  position: relative;\n  width: fit-content;\n}\n.adou-tooltip-wrapper .adou-tooltip-content {\n  width: fit-content;\n}\n\n.adou-tooltip {\n  height: fit-content;\n  position: absolute;\n  color: #fff;\n  padding: 5px 10px;\n  border-radius: 4px;\n  font-size: 14px;\n  opacity: 0;\n  transform: scale(0);\n  /* \u521D\u59CB\u72B6\u6001\u4E3A\u7F29\u5C0F */\n  transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;\n  /* \u6DFB\u52A0 transform \u8FC7\u6E21\u6548\u679C */\n  /* \u9632\u6B62\u9F20\u6807\u4E8B\u4EF6\u7A7F\u900F\u5230 Tooltip \u540E\u9762\u7684\u5143\u7D20 */\n  z-index: 10000;\n}\n.adou-tooltip .adou-tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-style: solid;\n}\n\n.show-tool-tip {\n  opacity: 1;\n  /* \u663E\u793A\u65F6\u653E\u5927 */\n  pointer-events: auto;\n  /* \u542F\u7528\u9F20\u6807\u4E8B\u4EF6 */\n}\n\n.adou-tooltip-top,\n.adou-tooltip-top-left,\n.adou-tooltip-top-right {\n  bottom: 100%;\n  left: 50%;\n  transform: translate(-50%, -10px) scale(0);\n  /* \u521D\u59CB\u72B6\u6001\u4E3A\u7F29\u5C0F */\n}\n.adou-tooltip-top.show-tool-tip,\n.adou-tooltip-top-left.show-tool-tip,\n.adou-tooltip-top-right.show-tool-tip {\n  transform: translate(-50%, -10px) scale(1);\n  /* \u663E\u793A\u65F6\u653E\u5927 */\n}\n\n.adou-tooltip-bottom,\n.adou-tooltip-bottom-left,\n.adou-tooltip-bottom-right {\n  top: 100%;\n  left: 50%;\n  transform: translate(-50%, 10px) scale(0);\n  /* \u521D\u59CB\u72B6\u6001\u4E3A\u7F29\u5C0F */\n}\n.adou-tooltip-bottom.show-tool-tip,\n.adou-tooltip-bottom-left.show-tool-tip,\n.adou-tooltip-bottom-right.show-tool-tip {\n  transform: translate(-50%, 10px) scale(1);\n  /* \u663E\u793A\u65F6\u653E\u5927 */\n}\n\n.adou-tooltip-left,\n.adou-tooltip-left-top,\n.adou-tooltip-left-bottom {\n  right: 100%;\n  top: 50%;\n  transform: translate(-10px, -50%) scale(0);\n  width: fit-content;\n  /* \u521D\u59CB\u72B6\u6001\u4E3A\u7F29\u5C0F */\n}\n.adou-tooltip-left.show-tool-tip,\n.adou-tooltip-left-top.show-tool-tip,\n.adou-tooltip-left-bottom.show-tool-tip {\n  transform: translate(-10px, -50%) scale(1);\n  /* \u663E\u793A\u65F6\u653E\u5927 */\n}\n\n.adou-tooltip-right,\n.adou-tooltip-right-top,\n.adou-tooltip-right-bottom {\n  top: 50%;\n  transform: translate(10px, -50%) scale(0);\n  /* \u521D\u59CB\u72B6\u6001\u4E3A\u7F29\u5C0F */\n}\n.adou-tooltip-right.show-tool-tip,\n.adou-tooltip-right-top.show-tool-tip,\n.adou-tooltip-right-bottom.show-tool-tip {\n  transform: translate(10px, -50%) scale(1);\n  /* \u663E\u793A\u65F6\u653E\u5927 */\n}\n\n.adou-tooltip-arrow-top {\n  border-width: 9px 9px 0 9px;\n  border-color: green transparent transparent transparent;\n  bottom: -9px;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.adou-tooltip-arrow-top-left,\n.adou-tooltip-arrow-top-right {\n  border-width: 9px 9px 0 9px;\n  border-color: green transparent transparent transparent;\n  bottom: -9px;\n  transform: translateX(-50%);\n}\n\n.adou-tooltip-arrow-bottom {\n  border-width: 0 9px 9px 9px;\n  border-color: transparent transparent green transparent;\n  top: -9px;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.adou-tooltip-arrow-left,\n.adou-tooltip-arrow-left-bottom {\n  border-width: 9px 0 9px 9px;\n  border-color: transparent transparent transparent green;\n  right: -9px;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.adou-tooltip-arrow-right {\n  border-width: 9px 9px 9px 0;\n  border-color: transparent green transparent transparent;\n  left: -9px;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.adou-tooltip-arrow-right-top,\n.adou-tooltip-arrow-right-bottom {\n  border-width: 9px 9px 9px 0;\n  border-color: transparent green transparent transparent;\n  transform: translateY(-50%);\n}\n\n.adou-tooltip-arrow-bottom-left,\n.adou-tooltip-arrow-bottom-right {\n  border-width: 0 9px 9px 9px;\n  border-color: transparent transparent green transparent;\n  top: -9px;\n  transform: translateX(-50%);\n}\n\n.adou-tooltip-arrow-left-top {\n  border-width: 9px 0 9px 9px;\n  border-color: transparent transparent transparent green;\n  transform: translateY(-50%);\n}", "", {
          "version": 3,
          "sources": ["webpack://./src/index.scss"],
          "names": [],
          "mappings": "AAAA,gBAAgB;AAAhB;EACI,kBAAA;EACA,kBAAA;AAEJ;AAAI;EACI,kBAAA;AAER;;AAEA;EACI,mBAAA;EACA,kBAAA;EACA,WAAA;EACA,iBAAA;EACA,kBAAA;EACA,eAAA;EACA,UAAA;EACA,mBAAA;EACA,YAAA;EACA,gEACI;EAEJ,sBAAA;EAEA,4BAAA;EACA,cAAA;AAFJ;AAII;EACI,kBAAA;EACA,QAAA;EACA,SAAA;EACA,mBAAA;AAFR;;AAMA;EACI,UAAA;EACA,UAAA;EACA,oBAAA;EACA,WAAA;AAHJ;;AAMA;;;EAGI,YAAA;EACA,SAAA;EACA,0CAAA;EACA,YAAA;AAHJ;AAKI;;;EACI,0CAAA;EACA,UAAA;AADR;;AAKA;;;EAGI,SAAA;EACA,SAAA;EACA,yCAAA;EACA,YAAA;AAFJ;AAII;;;EACI,yCAAA;EACA,UAAA;AAAR;;AAIA;;;EAGI,WAAA;EACA,QAAA;EACA,0CAAA;EACA,kBAAA;EACA,YAAA;AADJ;AAGI;;;EACI,0CAAA;EACA,UAAA;AACR;;AAGA;;;EAGI,QAAA;EACA,yCAAA;EACA,YAAA;AAAJ;AAEI;;;EACI,yCAAA;EACA,UAAA;AAER;;AAGA;EACI,2BAAA;EACA,uDAAA;EACA,YAAA;EACA,SAAA;EACA,2BAAA;AAAJ;;AAGA;;EAEI,2BAAA;EACA,uDAAA;EACA,YAAA;EACA,2BAAA;AAAJ;;AAGA;EACI,2BAAA;EACA,uDAAA;EACA,SAAA;EACA,SAAA;EACA,2BAAA;AAAJ;;AAGA;;EAEI,2BAAA;EACA,uDAAA;EACA,WAAA;EACA,QAAA;EACA,2BAAA;AAAJ;;AAGA;EACI,2BAAA;EACA,uDAAA;EACA,UAAA;EACA,QAAA;EACA,2BAAA;AAAJ;;AAIA;;EAEI,2BAAA;EACA,uDAAA;EACA,2BAAA;AADJ;;AAIA;;EAEI,2BAAA;EACA,uDAAA;EACA,SAAA;EACA,2BAAA;AADJ;;AAIA;EACI,2BAAA;EACA,uDAAA;EACA,2BAAA;AADJ",
          "sourcesContent": [".adou-tooltip-wrapper {\r\n    position: relative;\r\n    width: fit-content;\r\n\r\n    .adou-tooltip-content {\r\n        width: fit-content;\r\n    }\r\n}\r\n\r\n.adou-tooltip {\r\n    height: fit-content;\r\n    position: absolute;\r\n    color: #fff;\r\n    padding: 5px 10px;\r\n    border-radius: 4px;\r\n    font-size: 14px;\r\n    opacity: 0;\r\n    transform: scale(0);\r\n    /* 初始状态为缩小 */\r\n    transition:\r\n        opacity 0.2s ease-in-out,\r\n        transform 0.2s ease-in-out;\r\n    /* 添加 transform 过渡效果 */\r\n    // pointer-events: none;\r\n    /* 防止鼠标事件穿透到 Tooltip 后面的元素 */\r\n    z-index: 10000;\r\n\r\n    .adou-tooltip-arrow {\r\n        position: absolute;\r\n        width: 0;\r\n        height: 0;\r\n        border-style: solid;\r\n    }\r\n}\r\n\r\n.show-tool-tip {\r\n    opacity: 1;\r\n    /* 显示时放大 */\r\n    pointer-events: auto;\r\n    /* 启用鼠标事件 */\r\n}\r\n\r\n.adou-tooltip-top,\r\n.adou-tooltip-top-left,\r\n.adou-tooltip-top-right {\r\n    bottom: 100%;\r\n    left: 50%;\r\n    transform: translate(-50%, -10px) scale(0);\r\n    /* 初始状态为缩小 */\r\n\r\n    &.show-tool-tip {\r\n        transform: translate(-50%, -10px) scale(1);\r\n        /* 显示时放大 */\r\n    }\r\n}\r\n\r\n.adou-tooltip-bottom,\r\n.adou-tooltip-bottom-left,\r\n.adou-tooltip-bottom-right {\r\n    top: 100%;\r\n    left: 50%;\r\n    transform: translate(-50%, 10px) scale(0);\r\n    /* 初始状态为缩小 */\r\n\r\n    &.show-tool-tip {\r\n        transform: translate(-50%, 10px) scale(1);\r\n        /* 显示时放大 */\r\n    }\r\n}\r\n\r\n.adou-tooltip-left,\r\n.adou-tooltip-left-top,\r\n.adou-tooltip-left-bottom {\r\n    right: 100%;\r\n    top: 50%;\r\n    transform: translate(-10px, -50%) scale(0);\r\n    width: fit-content;\r\n    /* 初始状态为缩小 */\r\n\r\n    &.show-tool-tip {\r\n        transform: translate(-10px, -50%) scale(1);\r\n        /* 显示时放大 */\r\n    }\r\n}\r\n\r\n.adou-tooltip-right,\r\n.adou-tooltip-right-top,\r\n.adou-tooltip-right-bottom {\r\n    top: 50%;\r\n    transform: translate(10px, -50%) scale(0);\r\n    /* 初始状态为缩小 */\r\n\r\n    &.show-tool-tip {\r\n        transform: translate(10px, -50%) scale(1);\r\n        /* 显示时放大 */\r\n    }\r\n}\r\n\r\n\r\n.adou-tooltip-arrow-top {\r\n    border-width: 9px 9px 0 9px;\r\n    border-color: green transparent transparent transparent;\r\n    bottom: -9px;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n}\r\n\r\n.adou-tooltip-arrow-top-left,\r\n.adou-tooltip-arrow-top-right {\r\n    border-width: 9px 9px 0 9px;\r\n    border-color: green transparent transparent transparent;\r\n    bottom: -9px;\r\n    transform: translateX(-50%);\r\n}\r\n\r\n.adou-tooltip-arrow-bottom {\r\n    border-width: 0 9px 9px 9px;\r\n    border-color: transparent transparent green transparent;\r\n    top: -9px;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n}\r\n\r\n.adou-tooltip-arrow-left,\r\n.adou-tooltip-arrow-left-bottom {\r\n    border-width: 9px 0 9px 9px;\r\n    border-color: transparent transparent transparent green;\r\n    right: -9px;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n}\r\n\r\n.adou-tooltip-arrow-right {\r\n    border-width: 9px 9px 9px 0;\r\n    border-color: transparent green transparent transparent;\r\n    left: -9px;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n}\r\n\r\n\r\n.adou-tooltip-arrow-right-top,\r\n.adou-tooltip-arrow-right-bottom {\r\n    border-width: 9px 9px 9px 0;\r\n    border-color: transparent green transparent transparent;\r\n    transform: translateY(-50%);\r\n}\r\n\r\n.adou-tooltip-arrow-bottom-left,\r\n.adou-tooltip-arrow-bottom-right {\r\n    border-width: 0 9px 9px 9px;\r\n    border-color: transparent transparent green transparent;\r\n    top: -9px;\r\n    transform: translateX(-50%);\r\n}\r\n\r\n.adou-tooltip-arrow-left-top {\r\n    border-width: 9px 0 9px 9px;\r\n    border-color: transparent transparent transparent green;\r\n    transform: translateY(-50%);\r\n}"],
          "sourceRoot": ""
        }]);
        // Exports
        /* harmony default export */
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;

        /***/
      }),
      /***/591: ( /***/module => {
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
      /***/855: ( /***/(module, __unused_webpack_exports, __nested_webpack_require_20125__) => {
        /* istanbul ignore next  */
        function setAttributesWithoutAttributes(styleElement) {
          var nonce =  true ? __nested_webpack_require_20125__.nc : 0;
          if (nonce) {
            styleElement.setAttribute("nonce", nonce);
          }
        }
        module.exports = setAttributesWithoutAttributes;

        /***/
      }),
      /***/740: ( /***/module => {
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
        module.exports = __WEBPACK_EXTERNAL_MODULE__442__;

        /***/
      }),
      /***/3: ( /***/module => {
        module.exports = __WEBPACK_EXTERNAL_MODULE__3__;

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
    function __nested_webpack_require_23535__(moduleId) {
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
      __webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_23535__);
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
      /******/__nested_webpack_require_23535__.n = module => {
        /******/var getter = module && module.__esModule ? /******/() => module['default'] : /******/() => module;
        /******/
        __nested_webpack_require_23535__.d(getter, {
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
      /******/__nested_webpack_require_23535__.d = (exports, definition) => {
        /******/for (var key in definition) {
          /******/if (__nested_webpack_require_23535__.o(definition, key) && !__nested_webpack_require_23535__.o(exports, key)) {
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
      /******/__nested_webpack_require_23535__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
      /******/
    })();
    /******/
    /******/ /* webpack/runtime/make namespace object */
    /******/
    (() => {
      /******/ // define __esModule on exports
      /******/__nested_webpack_require_23535__.r = exports => {
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
      /******/__nested_webpack_require_23535__.nc = undefined;
      /******/
    })();
    /******/
    /************************************************************************/
    var __nested_webpack_exports__ = {};
    // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
    (() => {
      // ESM COMPAT FLAG
      __nested_webpack_require_23535__.r(__nested_webpack_exports__);

      // EXPORTS
      __nested_webpack_require_23535__.d(__nested_webpack_exports__, {
        "default": () => ( /* binding */src_0)
      });

      // EXTERNAL MODULE: external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"}
      var external_root_React_commonjs2_react_commonjs_react_amd_react_ = __nested_webpack_require_23535__(442);
      var external_root_React_commonjs2_react_commonjs_react_amd_react_default = /*#__PURE__*/__nested_webpack_require_23535__.n(external_root_React_commonjs2_react_commonjs_react_amd_react_);
      // EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
      var injectStylesIntoStyleTag = __nested_webpack_require_23535__(591);
      var injectStylesIntoStyleTag_default = /*#__PURE__*/__nested_webpack_require_23535__.n(injectStylesIntoStyleTag);
      // EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/styleDomAPI.js
      var styleDomAPI = __nested_webpack_require_23535__(740);
      var styleDomAPI_default = /*#__PURE__*/__nested_webpack_require_23535__.n(styleDomAPI);
      // EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/insertBySelector.js
      var insertBySelector = __nested_webpack_require_23535__(128);
      var insertBySelector_default = /*#__PURE__*/__nested_webpack_require_23535__.n(insertBySelector);
      // EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
      var setAttributesWithoutAttributes = __nested_webpack_require_23535__(855);
      var setAttributesWithoutAttributes_default = /*#__PURE__*/__nested_webpack_require_23535__.n(setAttributesWithoutAttributes);
      // EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/insertStyleElement.js
      var insertStyleElement = __nested_webpack_require_23535__(51);
      var insertStyleElement_default = /*#__PURE__*/__nested_webpack_require_23535__.n(insertStyleElement);
      // EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/styleTagTransform.js
      var styleTagTransform = __nested_webpack_require_23535__(656);
      var styleTagTransform_default = /*#__PURE__*/__nested_webpack_require_23535__.n(styleTagTransform);
      // EXTERNAL MODULE: ../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/index.scss
      var cjs_ruleSet_1_rules_1_use_2_src = __nested_webpack_require_23535__(483);
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
      ; // CONCATENATED MODULE: ./src/utils/getAbsolutePosition.js
      function getAbsolutePosition(domElement) {
        let left = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        let top = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        if (!parseInt(left)) {
          left = 0;
        } else {
          left = parseInt(left);
        }
        if (!parseInt(top)) {
          top = 0;
        } else {
          top = parseInt(top);
        }
        const box = domElement.getBoundingClientRect();
        const body = document.body;
        const docElem = document.documentElement;
        const scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop;
        const scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft;
        const clientTop = docElem.clientTop || body.clientTop || 0;
        const clientLeft = docElem.clientLeft || body.clientLeft || 0;
        const attr = {};
        attr.y = box.top + scrollTop - clientTop + top;
        attr.x = box.left + scrollLeft - clientLeft + left;
        attr.width = box.width;
        attr.height = box.height;
        return attr;
      }
      /* harmony default export */
      const utils_getAbsolutePosition = getAbsolutePosition;
      // EXTERNAL MODULE: external {"root":"ReactDOM","commonjs2":"react-dom","commonjs":"react-dom","amd":"react-dom"}
      var external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_ = __nested_webpack_require_23535__(3);
      var external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_default = /*#__PURE__*/__nested_webpack_require_23535__.n(external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_);
      ; // CONCATENATED MODULE: ./src/index.tsx

      // 引入样式文件

      const Tooltip = _ref => {
        var _text$trim;
        let {
          left,
          right,
          top,
          bottom,
          wrap = false,
          width,
          arrowOffsetPercent,
          wrapperFlex,
          mustShow,
          show = true,
          text,
          position = "top",
          children,
          tooltipBgc = "#333",
          tooltipFontColor,
          arrowBorderColor = "#333",
          wrapperClassname
        } = _ref;
        const [isShow, setIsShow] = (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false);
        const [isVisible, setIsVisible] = (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false); // 用来实现当鼠标进入提示区域可以让提示存在的效果
        const tooltipRef = (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
        // ！！！用来记录鼠标是否进入提示区域
        //       当鼠标离开内容区域的时候，去判断是否进入了提示区域，如果进入，则不隐藏提示文字
        const isEnterTooltipRef = (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(false);
        const enterTimeoutRef = (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
        const [tooltipWidth, setTooltipWidth] = (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(0);
        const [tooltipHeight, setTooltipHeight] = (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(0);
        const contentRef = (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
        const [tooltipContentPosition, setTooltipContentPosition] = (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)({});
        const handleMouseEnter = () => {
          // 进入的时候，如果存在定时器，也清除掉
          if (enterTimeoutRef.current) {
            clearTimeout(enterTimeoutRef.current);
          }
          enterTimeoutRef.current = setTimeout(() => {
            setIsShow(true);
            setTimeout(() => {
              setIsVisible(true);
            }, 50);
          }, 150); // 延迟100毫秒
        };
        const handleMouseLeave = () => {
          if (mustShow) return;
          if (enterTimeoutRef.current) {
            clearTimeout(enterTimeoutRef.current);
          }
          setTimeout(() => {
            if (!isEnterTooltipRef.current) {
              setIsVisible(false);
            }
          }, 200);
          setTimeout(() => {
            if (!isEnterTooltipRef.current) {
              setIsShow(false);
            }
          }, 300);
        };
        const handleClick = e => {
          e.stopPropagation(); // 阻止事件的冒泡
        };

        /**
         * 用来实现当鼠标进入提示区域可以让提示存在的效果
         */
        const handleMouseEnterTooltip = () => {
          isEnterTooltipRef.current = true;
          // 如果当前是显示状态才能设置isVisible为true，不然鼠标移到提示区域也会展示
          setIsVisible(true);
          setTimeout(() => {
            setIsShow(true);
          }, 400);
        };
        const handleMouseLeaveTooltip = () => {
          if (mustShow) return;
          isEnterTooltipRef.current = false;
          setTimeout(() => {
            setIsVisible(false);
          }, 200);
          setTimeout(() => {
            setIsShow(false);
          }, 300);
        };

        // 注意：定位完 tooltipContentPosition 和 contentRef 之后，内容是向两边撑开的
        // 所以需要计算一下 tooltipRef 的位置(- 是left，+ 是 right)
        const calcTooltipContentTopAndLeft = () => {
          var _tooltipRef$current, _contentRef$current, _tooltipRef$current2, _contentRef$current2, _tooltipRef$current3, _contentRef$current3;
          const verticalTop = tooltipContentPosition.y - ((_tooltipRef$current = tooltipRef.current) === null || _tooltipRef$current === void 0 ? void 0 : _tooltipRef$current.clientHeight) - 8 + "px";
          const verticalBottom = tooltipContentPosition.y + ((_contentRef$current = contentRef.current) === null || _contentRef$current === void 0 ? void 0 : _contentRef$current.clientHeight) + 5 + "px";
          const horizontalLeft = tooltipContentPosition.x - ((_tooltipRef$current2 = tooltipRef.current) === null || _tooltipRef$current2 === void 0 ? void 0 : _tooltipRef$current2.clientWidth) + "px";
          const horizontalTop = tooltipContentPosition.y + ((_contentRef$current2 = contentRef.current) === null || _contentRef$current2 === void 0 ? void 0 : _contentRef$current2.clientHeight) / 2 - ((_tooltipRef$current3 = tooltipRef.current) === null || _tooltipRef$current3 === void 0 ? void 0 : _tooltipRef$current3.clientHeight) / 2 + "px";
          const content = tooltipContentPosition.x + ((_contentRef$current3 = contentRef.current) === null || _contentRef$current3 === void 0 ? void 0 : _contentRef$current3.clientWidth) / 2 + "px";
          if (position === "top") {
            return {
              top: verticalTop,
              left: content
            };
          } else if (position === "top-right") {
            var _contentRef$current4, _tooltipRef$current4;
            return {
              top: verticalTop,
              left: tooltipContentPosition.x + ((_contentRef$current4 = contentRef.current) === null || _contentRef$current4 === void 0 ? void 0 : _contentRef$current4.clientWidth) / 2 + ((_tooltipRef$current4 = tooltipRef.current) === null || _tooltipRef$current4 === void 0 ? void 0 : _tooltipRef$current4.clientWidth) / 2 + "px"
            };
          } else if (position === "top-left") {
            var _contentRef$current5, _tooltipRef$current5;
            return {
              top: verticalTop,
              left: tooltipContentPosition.x + ((_contentRef$current5 = contentRef.current) === null || _contentRef$current5 === void 0 ? void 0 : _contentRef$current5.clientWidth) / 2 - ((_tooltipRef$current5 = tooltipRef.current) === null || _tooltipRef$current5 === void 0 ? void 0 : _tooltipRef$current5.clientWidth) / 2 + "px"
            };
          } else if (position === "bottom") {
            return {
              top: verticalBottom,
              left: content
            };
          } else if (position === "bottom-right") {
            var _tooltipRef$current6, _contentRef$current6;
            return {
              top: verticalBottom,
              left: tooltipContentPosition.x + ((_tooltipRef$current6 = tooltipRef.current) === null || _tooltipRef$current6 === void 0 ? void 0 : _tooltipRef$current6.clientWidth) / 2 + ((_contentRef$current6 = contentRef.current) === null || _contentRef$current6 === void 0 ? void 0 : _contentRef$current6.clientWidth) / 2 + "px"
            };
          } else if (position === "bottom-left") {
            var _contentRef$current7, _tooltipRef$current7;
            return {
              top: verticalBottom,
              left: tooltipContentPosition.x + ((_contentRef$current7 = contentRef.current) === null || _contentRef$current7 === void 0 ? void 0 : _contentRef$current7.clientWidth) / 2 - ((_tooltipRef$current7 = tooltipRef.current) === null || _tooltipRef$current7 === void 0 ? void 0 : _tooltipRef$current7.clientWidth) / 2 + "px"
            };
          } else if (position === "left") {
            var _contentRef$current8;
            return {
              top: tooltipContentPosition.y + ((_contentRef$current8 = contentRef.current) === null || _contentRef$current8 === void 0 ? void 0 : _contentRef$current8.clientHeight) / 2 + "px",
              left: horizontalLeft
            };
          } else if (position === "left-top") {
            return {
              top: horizontalTop,
              left: horizontalLeft
            };
          } else if (position === "left-bottom") {
            var _contentRef$current9, _tooltipRef$current8;
            return {
              top: tooltipContentPosition.y + ((_contentRef$current9 = contentRef.current) === null || _contentRef$current9 === void 0 ? void 0 : _contentRef$current9.clientHeight) / 2 + ((_tooltipRef$current8 = tooltipRef.current) === null || _tooltipRef$current8 === void 0 ? void 0 : _tooltipRef$current8.clientHeight) / 2 + "px",
              left: horizontalLeft
            };
          } else if (position === "right") {
            var _contentRef$current10, _contentRef$current11;
            return {
              top: tooltipContentPosition.y + ((_contentRef$current10 = contentRef.current) === null || _contentRef$current10 === void 0 ? void 0 : _contentRef$current10.clientHeight) / 2 + "px",
              left: tooltipContentPosition.x + ((_contentRef$current11 = contentRef.current) === null || _contentRef$current11 === void 0 ? void 0 : _contentRef$current11.clientWidth) + "px"
            };
          } else if (position === "right-top") {
            var _contentRef$current12;
            return {
              top: horizontalTop,
              left: tooltipContentPosition.x + ((_contentRef$current12 = contentRef.current) === null || _contentRef$current12 === void 0 ? void 0 : _contentRef$current12.clientWidth) + "px"
            };
          } else if (position === "right-bottom") {
            var _contentRef$current13, _tooltipRef$current9, _contentRef$current14;
            return {
              top: tooltipContentPosition.y + ((_contentRef$current13 = contentRef.current) === null || _contentRef$current13 === void 0 ? void 0 : _contentRef$current13.clientHeight) / 2 + ((_tooltipRef$current9 = tooltipRef.current) === null || _tooltipRef$current9 === void 0 ? void 0 : _tooltipRef$current9.clientHeight) / 2 + "px",
              left: tooltipContentPosition.x + ((_contentRef$current14 = contentRef.current) === null || _contentRef$current14 === void 0 ? void 0 : _contentRef$current14.clientWidth) + "px"
            };
          }
        };
        const calcTooltipArrowTopAndLeft = () => {
          var _contentRef$current15, _contentRef$current16;
          // top 和 bottom 的属性
          const commonArrowOfsset = "-8px";
          const horizontal = tooltipWidth * (arrowOffsetPercent || 0.2);
          const minHorizontal = ((_contentRef$current15 = contentRef.current) === null || _contentRef$current15 === void 0 ? void 0 : _contentRef$current15.clientWidth) / 4;
          const finalHorizontal = horizontal > minHorizontal ? minHorizontal : horizontal + "px";

          // left 和 right 的属性
          const vertival = tooltipHeight * (arrowOffsetPercent || 0.2);
          const minVertival = ((_contentRef$current16 = contentRef.current) === null || _contentRef$current16 === void 0 ? void 0 : _contentRef$current16.clientHeight) / 4;
          const finalVertival = vertival > minVertival ? minVertival : vertival + "px";
          if (position === "top") {
            return {
              bottom: commonArrowOfsset,
              left: "50%",
              borderColor: "".concat(arrowBorderColor, " transparent transparent transparent")
            };
          } else if (position === "top-left") {
            return {
              bottom: commonArrowOfsset,
              right: right || finalHorizontal,
              borderColor: "".concat(arrowBorderColor, " transparent transparent transparent")
            };
          } else if (position === "top-right") {
            return {
              bottom: commonArrowOfsset,
              left: left || finalHorizontal,
              borderColor: "".concat(arrowBorderColor, " transparent transparent transparent")
            };
          } else if (position === "bottom") {
            return {
              top: commonArrowOfsset,
              left: "50%",
              borderColor: "transparent transparent ".concat(arrowBorderColor, " transparent")
            };
          } else if (position === "bottom-right") {
            return {
              top: commonArrowOfsset,
              left: left || finalHorizontal,
              borderColor: "transparent transparent ".concat(arrowBorderColor, " transparent")
            };
          } else if (position === "bottom-left") {
            return {
              top: commonArrowOfsset,
              right: right || finalHorizontal,
              borderColor: "transparent transparent ".concat(arrowBorderColor, " transparent")
            };
          } else if (position === "left") {
            return {
              top: "50%",
              right: commonArrowOfsset,
              borderColor: "transparent transparent transparent ".concat(arrowBorderColor)
            };
          } else if (position === "left-top") {
            return {
              bottom: bottom || finalVertival,
              right: commonArrowOfsset,
              borderColor: "transparent transparent transparent ".concat(arrowBorderColor)
            };
          } else if (position === "left-bottom") {
            return {
              top: top || finalVertival,
              right: "-9px",
              borderColor: "transparent transparent transparent ".concat(arrowBorderColor)
            };
          } else if (position === "right") {
            return {
              top: "50%",
              left: commonArrowOfsset,
              borderColor: "transparent ".concat(arrowBorderColor, " transparent transparent")
            };
          } else if (position === "right-top") {
            return {
              bottom: bottom || finalVertival,
              left: commonArrowOfsset,
              borderColor: "transparent ".concat(arrowBorderColor, " transparent transparent")
            };
          } else if (position === "right-bottom") {
            return {
              top: top || finalVertival,
              left: commonArrowOfsset,
              borderColor: "transparent ".concat(arrowBorderColor, " transparent transparent")
            };
          }
        };
        (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
          if (mustShow) {
            handleMouseEnter();
          } else {
            handleMouseLeave();
          }
        }, [mustShow]);
        (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
          if (tooltipRef.current) {
            const tooltipElement = tooltipRef.current;
            setTooltipWidth(tooltipElement.offsetWidth);
            setTooltipHeight(tooltipElement.offsetHeight);
          }
          if (isShow) {
            const position = utils_getAbsolutePosition(contentRef.current, 0, 0);
            setTooltipContentPosition(position);
          }
        }, [isShow, isVisible, children]); // 这边需要加上 children 的依赖，不然 外边内容变化或者位置更新的时候，tooltip 不会重新计算位置

        return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
          className: "adou-tooltip-wrapper ".concat(wrapperClassname || ""),
          style: {
            ...(wrapperFlex ? {
              flex: 1,
              display: "flex"
            } : {})
          }
        }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
          ref: contentRef,
          className: "adou-tooltip-content",
          onMouseEnter: handleMouseEnter,
          onMouseLeave: handleMouseLeave,
          style: {
            ...(wrapperFlex ? {
              flex: 1
            } : {})
          }
        }, children), (typeof text === "string" ? (text === null || text === void 0 || (_text$trim = text.trim) === null || _text$trim === void 0 || (_text$trim = _text$trim.call(text)) === null || _text$trim === void 0 ? void 0 : _text$trim.length) > 0 : text) && show && isShow && /*#__PURE__*/external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_default().createPortal( /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
          ref: tooltipRef,
          onClick: handleClick,
          onMouseEnter: handleMouseEnterTooltip,
          onMouseLeave: handleMouseLeaveTooltip,
          className: "adou-tooltip ".concat(isVisible ? "show-tool-tip" : "", " adou-tooltip-").concat(position),
          style: {
            backgroundColor: tooltipBgc,
            color: tooltipFontColor,
            width,
            whiteSpace: wrap || width ? "normal" : "nowrap",
            position: "absolute",
            ...calcTooltipContentTopAndLeft()
          }
        }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
          style: {
            ...calcTooltipArrowTopAndLeft()
          },
          className: "adou-tooltip-arrow adou-tooltip-arrow-".concat(position)
        }), text), document.body));
      };
      /* harmony default export */
      const src_0 = Tooltip;
    })();

    /******/
    return __nested_webpack_exports__;
    /******/
  })();
});

/***/ }),

/***/ 36:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
  if (true) module.exports = factory(__webpack_require__(442), __webpack_require__(3));else {}
})(this, (__WEBPACK_EXTERNAL_MODULE__442__, __WEBPACK_EXTERNAL_MODULE__3__) => {
  return /******/(() => {
    // webpackBootstrap
    /******/
    "use strict";

    /******/
    var __webpack_modules__ = {
      /***/191: ( /***/module => {
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
      /***/137: ( /***/(__unused_webpack_module, exports, __nested_webpack_require_4372__) => {
        var __webpack_unused_export__;
        var m = __nested_webpack_require_4372__(3);
        if (true) {
          exports.H = m.createRoot;
          __webpack_unused_export__ = m.hydrateRoot;
        } else { var i; }

        /***/
      }),
      /***/736: ( /***/(module, __nested_webpack_exports__, __nested_webpack_require_4708__) => {
        /* harmony export */__nested_webpack_require_4708__.d(__nested_webpack_exports__, {
          /* harmony export */A: () => __WEBPACK_DEFAULT_EXPORT__
          /* harmony export */
        });
        /* harmony import */
        var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_4708__(73);
        /* harmony import */
        var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_4708__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */
        var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_4708__(191);
        /* harmony import */
        var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_4708__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
        // Imports

        var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());
        // Module
        ___CSS_LOADER_EXPORT___.push([module.id, "/* Loading.css */\n.loading-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(255, 255, 255, 0.8);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 9999;\n}\n\n.loading-spinner {\n  border: 8px solid #f3f3f3;\n  /* Light grey */\n  border-top: 8px solid #3498db;\n  /* Blue */\n  border-radius: 50%;\n  width: 60px;\n  height: 60px;\n  animation: spin 2s linear infinite;\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}", "", {
          "version": 3,
          "sources": ["webpack://./src/hooks/loading.scss"],
          "names": [],
          "mappings": "AAAA,gBAAA;AACA;EACI,eAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,0CAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,aAAA;AACJ;;AAEA;EACI,yBAAA;EACA,eAAA;EACA,6BAAA;EACA,SAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,kCAAA;AACJ;;AAEA;EACI;IACI,uBAAA;EACN;EAEE;IACI,yBAAA;EAAN;AACF",
          "sourcesContent": ["/* Loading.css */\r\n.loading-overlay {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(255, 255, 255, 0.8);\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    z-index: 9999;\r\n}\r\n\r\n.loading-spinner {\r\n    border: 8px solid #f3f3f3;\r\n    /* Light grey */\r\n    border-top: 8px solid #3498db;\r\n    /* Blue */\r\n    border-radius: 50%;\r\n    width: 60px;\r\n    height: 60px;\r\n    animation: spin 2s linear infinite;\r\n}\r\n\r\n@keyframes spin {\r\n    0% {\r\n        transform: rotate(0deg);\r\n    }\r\n\r\n    100% {\r\n        transform: rotate(360deg);\r\n    }\r\n}"],
          "sourceRoot": ""
        }]);
        // Exports
        /* harmony default export */
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;

        /***/
      }),
      /***/151: ( /***/(module, __nested_webpack_exports__, __nested_webpack_require_7973__) => {
        /* harmony export */__nested_webpack_require_7973__.d(__nested_webpack_exports__, {
          /* harmony export */A: () => __WEBPACK_DEFAULT_EXPORT__
          /* harmony export */
        });
        /* harmony import */
        var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_7973__(73);
        /* harmony import */
        var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_7973__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */
        var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_7973__(191);
        /* harmony import */
        var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_7973__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
        // Imports

        var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());
        // Module
        ___CSS_LOADER_EXPORT___.push([module.id, ".adou-notification-container {\n  position: fixed;\n  top: 20px;\n  right: 0px;\n  z-index: 1000;\n}\n.adou-notification-container .adou-notification {\n  width: 320px;\n  position: relative;\n  padding: 15px;\n  margin-bottom: 15px;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  background-color: #fff;\n  transition: all 0.3s ease;\n  transform: translateX(100%);\n}\n.adou-notification-container .adou-notification-appearing {\n  transform: translateX(-20px);\n}\n.adou-notification-container .adou-notification-disappearing {\n  opacity: 0;\n  transform: translateX(100%) !important;\n}\n.adou-notification-container .adou-notification:hover {\n  cursor: pointer;\n  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);\n}\n.adou-notification-container .adou-notification-header {\n  display: flex;\n  align-items: start;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n.adou-notification-container .adou-notification-header-title {\n  font-size: 18px;\n  font-weight: 600;\n  color: #333;\n  display: flex;\n}\n.adou-notification-container .adou-notification-header-title-icon {\n  margin-right: 8px;\n}\n.adou-notification-container .adou-notification-header-close {\n  cursor: pointer;\n  font-size: 16px;\n  color: #999;\n  transition: all 0.3s ease;\n}\n.adou-notification-container .adou-notification-header-close:hover {\n  color: #ff4d4f;\n  transform: scale(1.2);\n}\n.adou-notification-container .adou-notification-content {\n  font-size: 14px;\n  color: #666;\n  line-height: 1.5;\n}", "", {
          "version": 3,
          "sources": ["webpack://./src/hooks/notification.scss"],
          "names": [],
          "mappings": "AAAA;EACI,eAAA;EACA,SAAA;EACA,UAAA;EACA,aAAA;AACJ;AACI;EACI,YAAA;EACA,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,kBAAA;EACA,yCAAA;EACA,sBAAA;EACA,yBAAA;EAEA,2BAAA;AAAR;AAEQ;EAEI,4BAAA;AADZ;AAIQ;EACI,UAAA;EACA,sCAAA;AAFZ;AAKQ;EACI,eAAA;EACA,0CAAA;AAHZ;AAOQ;EACI,aAAA;EACA,kBAAA;EACA,8BAAA;EACA,mBAAA;AALZ;AAOY;EACI,eAAA;EACA,gBAAA;EACA,WAAA;EACA,aAAA;AALhB;AAOgB;EACI,iBAAA;AALpB;AASY;EACI,eAAA;EACA,eAAA;EACA,WAAA;EACA,yBAAA;AAPhB;AASgB;EACI,cAAA;EACA,qBAAA;AAPpB;AAYQ;EACI,eAAA;EACA,WAAA;EACA,gBAAA;AAVZ",
          "sourcesContent": [".adou-notification-container {\r\n    position: fixed;\r\n    top: 20px;\r\n    right: 0px;\r\n    z-index: 1000;\r\n\r\n    .adou-notification {\r\n        width: 320px;\r\n        position: relative;\r\n        padding: 15px;\r\n        margin-bottom: 15px;\r\n        border-radius: 8px;\r\n        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\r\n        background-color: #fff;\r\n        transition: all 0.3s ease;\r\n        // opacity: 0;\r\n        transform: translateX(100%);\r\n\r\n        &-appearing {\r\n            // opacity: 1;\r\n            transform: translateX(-20px);\r\n        }\r\n\r\n        &-disappearing {\r\n            opacity: 0;\r\n            transform: translateX(100%) !important;\r\n        }\r\n\r\n        &:hover {\r\n            cursor: pointer;\r\n            box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);\r\n            // transform: translate(-20px, -2px);\r\n        }\r\n\r\n        &-header {\r\n            display: flex;\r\n            align-items: start;\r\n            justify-content: space-between;\r\n            margin-bottom: 10px;\r\n\r\n            &-title {\r\n                font-size: 18px;\r\n                font-weight: 600;\r\n                color: #333;\r\n                display: flex;\r\n\r\n                &-icon {\r\n                    margin-right: 8px;\r\n                }\r\n            }\r\n\r\n            &-close {\r\n                cursor: pointer;\r\n                font-size: 16px;\r\n                color: #999;\r\n                transition: all 0.3s ease;\r\n\r\n                &:hover {\r\n                    color: #ff4d4f;\r\n                    transform: scale(1.2);\r\n                }\r\n            }\r\n        }\r\n\r\n        &-content {\r\n            font-size: 14px;\r\n            color: #666;\r\n            line-height: 1.5;\r\n        }\r\n    }\r\n}"],
          "sourceRoot": ""
        }]);
        // Exports
        /* harmony default export */
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;

        /***/
      }),
      /***/323: ( /***/(module, __nested_webpack_exports__, __nested_webpack_require_13567__) => {
        /* harmony export */__nested_webpack_require_13567__.d(__nested_webpack_exports__, {
          /* harmony export */A: () => __WEBPACK_DEFAULT_EXPORT__
          /* harmony export */
        });
        /* harmony import */
        var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_13567__(73);
        /* harmony import */
        var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_13567__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */
        var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_13567__(191);
        /* harmony import */
        var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_13567__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
        // Imports

        var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());
        // Module
        ___CSS_LOADER_EXPORT___.push([module.id, ".adou-toast-container {\n  position: absolute;\n  top: 20px;\n  left: 50%;\n  transform: translate(-50%, 0%);\n  z-index: 1000;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.adou-toast-container .adou-toast {\n  width: 300px;\n  position: relative;\n  padding: 15px;\n  padding-right: 20px;\n  margin: 10px 0;\n  border-radius: 5px;\n  color: white;\n  opacity: 0;\n  transform: translateY(-20px);\n  transition: transform 0.5s ease, opacity 0.5s ease;\n}\n.adou-toast-container .adou-toast-success {\n  background-color: #4caf50;\n}\n.adou-toast-container .adou-toast-error {\n  background-color: #f44336;\n}\n.adou-toast-container .adou-toast-warning {\n  background-color: #ff9800;\n}\n.adou-toast-container .adou-toast.appearing {\n  opacity: 1;\n  transform: translateY(0);\n}\n.adou-toast-container .adou-toast.disappearing {\n  opacity: 0;\n  transform: translateY(-20px) scaleX(0.9);\n}\n.adou-toast-container .adou-toast-timer {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  height: 4px;\n  background-color: rgba(255, 255, 255, 0.7);\n  transition: width 0.1s linear;\n}\n.adou-toast-container .adou-toast-close {\n  position: absolute;\n  top: -5px;\n  right: 1px;\n  background: none;\n  border: none;\n  color: #fff;\n  font-size: 20px;\n  cursor: pointer;\n  margin-left: 10px;\n  transition: color 0.3s;\n}\n.adou-toast-container .adou-toast-close:hover {\n  color: #ccc;\n}", "", {
          "version": 3,
          "sources": ["webpack://./src/hooks/toast.scss"],
          "names": [],
          "mappings": "AAIA;EACI,kBAAA;EACA,SAAA;EACA,SAAA;EACA,8BAAA;EACA,aAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;AAHJ;AAKI;EACI,YAAA;EACA,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,cAAA;EACA,kBAAA;EACA,YAAA;EACA,UAAA;EAEA,4BAAA;EACA,kDAAA;AAJR;AAMQ;EACI,yBA7BU;AAyBtB;AAOQ;EACI,yBAhCQ;AA2BpB;AAQQ;EACI,yBAnCU;AA6BtB;AASQ;EACI,UAAA;EAEA,wBAAA;AARZ;AAWQ;EACI,UAAA;EACA,wCAAA;AATZ;AAYQ;EACI,kBAAA;EACA,SAAA;EACA,OAAA;EACA,WAAA;EACA,0CAAA;EACA,6BAAA;AAVZ;AAaQ;EACI,kBAAA;EACA,SAAA;EACA,UAAA;EACA,gBAAA;EACA,YAAA;EACA,WAAA;EACA,eAAA;EACA,eAAA;EACA,iBAAA;EACA,sBAAA;AAXZ;AAaY;EACI,WAAA;AAXhB",
          "sourcesContent": ["$toast-success-color: #4caf50;\r\n$toast-error-color: #f44336;\r\n$toast-warning-color: #ff9800;\r\n\r\n.adou-toast-container {\r\n    position: absolute;\r\n    top: 20px;\r\n    left: 50%; // 水平中心\r\n    transform: translate(-50%, 0%); // 将容器移动到中心\r\n    z-index: 1000;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n    .adou-toast {\r\n        width: 300px;\r\n        position: relative;\r\n        padding: 15px;\r\n        padding-right: 20px;\r\n        margin: 10px 0;\r\n        border-radius: 5px;\r\n        color: white;\r\n        opacity: 0;\r\n        // 仅向下移动，不缩小 -- 配合 &.appearing的transform: translateY(0);不能删除哦\r\n        transform: translateY(-20px);\r\n        transition: transform 0.5s ease, opacity 0.5s ease;\r\n\r\n        &-success {\r\n            background-color: $toast-success-color;\r\n        }\r\n\r\n        &-error {\r\n            background-color: $toast-error-color;\r\n        }\r\n\r\n        &-warning {\r\n            background-color: $toast-warning-color;\r\n        }\r\n\r\n        &.appearing {\r\n            opacity: 1;\r\n            // 仅向下移动，不缩小 -- 配合 .adou-toast的transform: translateY(-20px); 不能删除哦\r\n            transform: translateY(0);\r\n        }\r\n\r\n        &.disappearing {\r\n            opacity: 0;\r\n            transform: translateY(-20px) scaleX(0.9); // 向上移动并缩小宽度\r\n        }\r\n\r\n        &-timer {\r\n            position: absolute;\r\n            bottom: 0;\r\n            left: 0;\r\n            height: 4px;\r\n            background-color: rgba(255, 255, 255, 0.7);\r\n            transition: width 0.1s linear; // 平滑缩短动画\r\n        }\r\n\r\n        &-close {\r\n            position: absolute;\r\n            top: -5px;\r\n            right: 1px;\r\n            background: none;\r\n            border: none;\r\n            color: #fff;\r\n            font-size: 20px;\r\n            cursor: pointer;\r\n            margin-left: 10px;\r\n            transition: color 0.3s;\r\n\r\n            &:hover {\r\n                color: #ccc;\r\n            }\r\n        }\r\n    }\r\n}"],
          "sourceRoot": ""
        }]);
        // Exports
        /* harmony default export */
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;

        /***/
      }),
      /***/591: ( /***/module => {
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
      /***/855: ( /***/(module, __unused_webpack_exports, __nested_webpack_require_24279__) => {
        /* istanbul ignore next  */
        function setAttributesWithoutAttributes(styleElement) {
          var nonce =  true ? __nested_webpack_require_24279__.nc : 0;
          if (nonce) {
            styleElement.setAttribute("nonce", nonce);
          }
        }
        module.exports = setAttributesWithoutAttributes;

        /***/
      }),
      /***/740: ( /***/module => {
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
        module.exports = __WEBPACK_EXTERNAL_MODULE__442__;

        /***/
      }),
      /***/3: ( /***/module => {
        module.exports = __WEBPACK_EXTERNAL_MODULE__3__;

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
    function __nested_webpack_require_27689__(moduleId) {
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
      __webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_27689__);
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
      /******/__nested_webpack_require_27689__.n = module => {
        /******/var getter = module && module.__esModule ? /******/() => module['default'] : /******/() => module;
        /******/
        __nested_webpack_require_27689__.d(getter, {
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
      /******/__nested_webpack_require_27689__.d = (exports, definition) => {
        /******/for (var key in definition) {
          /******/if (__nested_webpack_require_27689__.o(definition, key) && !__nested_webpack_require_27689__.o(exports, key)) {
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
      /******/__nested_webpack_require_27689__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
      /******/
    })();
    /******/
    /******/ /* webpack/runtime/make namespace object */
    /******/
    (() => {
      /******/ // define __esModule on exports
      /******/__nested_webpack_require_27689__.r = exports => {
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
      /******/__nested_webpack_require_27689__.nc = undefined;
      /******/
    })();
    /******/
    /************************************************************************/
    var __nested_webpack_exports__ = {};
    // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
    (() => {
      // ESM COMPAT FLAG
      __nested_webpack_require_27689__.r(__nested_webpack_exports__);

      // EXPORTS
      __nested_webpack_require_27689__.d(__nested_webpack_exports__, {
        convertArrayKeysToCamelCase: () => ( /* reexport */libs_convertArrayKeysToCamelCase),
        convertArrayKeysToSnakeCase: () => ( /* reexport */libs_convertArrayKeysToSnakeCase),
        convertListToTree: () => ( /* reexport */libs_convertListToTree),
        convertToTag: () => ( /* reexport */libs_convertToTag),
        flattenDataWithoutNesting: () => ( /* reexport */libs_flattenDataWithoutNesting),
        getAbsolutePosition: () => ( /* reexport */libs_getAbsolutePositionOfStage),
        getContentWidth: () => ( /* reexport */libs_getContentWidth),
        isEmptyO: () => ( /* reexport */libs_isEmptyO),
        splitFilesIntoColumns: () => ( /* reexport */libs_splitFilesIntoColumns),
        timeFormatter: () => ( /* reexport */time_formatter_namespaceObject),
        useClickOutside: () => ( /* reexport */hooks_useClickOutside),
        useDrag: () => ( /* reexport */hooks_useDrag),
        useForm: () => ( /* reexport */hooks_useForm),
        useLoading: () => ( /* reexport */hooks_useLoading),
        useNavigateTo: () => ( /* reexport */hooks_useNavigateTo),
        useNotification: () => ( /* reexport */hooks_useNotification),
        useThrottle: () => ( /* reexport */hooks_useThrottle),
        useToast: () => ( /* reexport */hooks_useToast)
      });

      // NAMESPACE OBJECT: ./src/libs/time-formatter.js
      var time_formatter_namespaceObject = {};
      __nested_webpack_require_27689__.r(time_formatter_namespaceObject);
      __nested_webpack_require_27689__.d(time_formatter_namespaceObject, {
        "default": () => time_formatter
      });
      ; // CONCATENATED MODULE: ./src/libs/getAbsolutePositionOfStage.js
      function getAbsolutePositionOfStage(domElement) {
        let left = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        let top = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        if (!parseInt(left)) {
          left = 0;
        } else {
          left = parseInt(left);
        }
        if (!parseInt(top)) {
          top = 0;
        } else {
          top = parseInt(top);
        }
        if (!domElement) {
          return {
            x: 0,
            y: 0,
            width: 0,
            height: 0
          };
        }
        const box = domElement === null || domElement === void 0 ? void 0 : domElement.getBoundingClientRect();
        const body = document.body;
        const docElem = document.documentElement;
        const scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop;
        const scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft;
        const clientTop = docElem.clientTop || body.clientTop || 0;
        const clientLeft = docElem.clientLeft || body.clientLeft || 0;
        const attr = {};
        attr.y = box.top + scrollTop - clientTop + top;
        attr.x = box.left + scrollLeft - clientLeft + left;
        attr.width = box.width;
        attr.height = box.height;
        return attr;
      }
      /* harmony default export */
      const libs_getAbsolutePositionOfStage = getAbsolutePositionOfStage;
      ; // CONCATENATED MODULE: ./src/libs/convertToTag.js
      const convertToTag = str => {
        let tags = [];
        const regex = /\[(.*?)\]/g;
        const temp = str === null || str === void 0 ? void 0 : str.match(regex);
        temp && (tags = temp.map(match => match === null || match === void 0 ? void 0 : match.slice(1, -1)));
        return tags;
      };
      /* harmony default export */
      const libs_convertToTag = convertToTag;
      ; // CONCATENATED MODULE: ./src/libs/time-formatter.js
      function formatDateTime(dateString) {
        let format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "YYYY-MM-DD";
        const date = new Date(dateString);
        switch (format) {
          case "MM-DD HH:mm":
            const month = String(date.getMonth() + 1).padStart(2, "0");
            const day = String(date.getDate()).padStart(2, "0");
            const hours = String(date.getHours()).padStart(2, "0");
            const minutes = String(date.getMinutes()).padStart(2, "0");
            return "".concat(month, "-").concat(day, " ").concat(hours, ":").concat(minutes);
          case "YYYY-MM-DD HH:mm:ss":
            const year = date.getFullYear();
            const month2 = String(date.getMonth() + 1).padStart(2, "0");
            const day2 = String(date.getDate()).padStart(2, "0");
            const hours2 = String(date.getHours()).padStart(2, "0");
            const minutes2 = String(date.getMinutes()).padStart(2, "0");
            const seconds2 = String(date.getSeconds()).padStart(2, "0");
            return "".concat(year, "-").concat(month2, "-").concat(day2, " ").concat(hours2, ":").concat(minutes2, ":").concat(seconds2);
          case "YYYY-MM-DD":
            const year2 = date.getFullYear();
            const month3 = String(date.getMonth() + 1).padStart(2, "0");
            const day3 = String(date.getDate()).padStart(2, "0");
            return "".concat(year2, "-").concat(month3, "-").concat(day3);
          case "HH:mm:ss":
            const hours4 = String(date.getHours()).padStart(2, "0");
            const minutes4 = String(date.getMinutes()).padStart(2, "0");
            const seconds4 = String(date.getSeconds()).padStart(2, "0");
            console.log("`${hours4}:${minutes4}:${seconds4}`: ", "".concat(hours4, ":").concat(minutes4, ":").concat(seconds4));
            return "".concat(hours4, ":").concat(minutes4, ":").concat(seconds4);
          case "YYYY-MM-DD HH:mm":
            const year5 = date.getFullYear();
            const month5 = String(date.getMonth() + 1).padStart(2, "0");
            const day5 = String(date.getDate()).padStart(2, "0");
            const hours5 = String(date.getHours()).padStart(2, "0");
            const minutes5 = String(date.getMinutes()).padStart(2, "0");
            return "".concat(year5, "-").concat(month5, "-").concat(day5, " ").concat(hours5, ":").concat(minutes5);
          default:
            break;
        }
      }
      /* harmony default export */
      const time_formatter = formatDateTime;
      ; // CONCATENATED MODULE: ./src/libs/isEmptyO.js
      function isEmptyO(obj) {
        return Object.keys(obj !== null && obj !== void 0 ? obj : {}).length === 0;
      }
      /* harmony default export */
      const libs_isEmptyO = isEmptyO;
      ; // CONCATENATED MODULE: ./src/libs/convertArrayKeysToCamelCase.js
      function snakeToCamel(name) {
        return name.replace(/_([a-z])/g, (match, letter) => letter.toUpperCase());
      }
      function convertKeysToCamelCase(obj) {
        return Object.fromEntries(Object.entries(obj).map(_ref => {
          let [key, value] = _ref;
          return [snakeToCamel(key), value || ""];
        }));
      }
      function convertArrayKeysToCamelCase(arr) {
        return arr.map(item => convertKeysToCamelCase(item));
      }
      /* harmony default export */
      const libs_convertArrayKeysToCamelCase = convertArrayKeysToCamelCase;
      ; // CONCATENATED MODULE: ./src/libs/convertArrayKeysToSnakeCase.js
      function camelToSnake(name) {
        return name.replace(/([a-z])([A-Z])/g, "$1_$2").toLowerCase();
      }
      function convertKeysToSnakeCase(obj) {
        return Object.fromEntries(Object.entries(obj).map(_ref => {
          let [key, value] = _ref;
          return [camelToSnake(key), value];
        }));
      }
      function convertArrayKeysToSnakeCase(arr) {
        return arr.map(item => convertKeysToSnakeCase(item));
      }
      /* harmony default export */
      const libs_convertArrayKeysToSnakeCase = convertArrayKeysToSnakeCase;
      ; // CONCATENATED MODULE: ./src/libs/convertListToTree.ts
      const convertListToTree = (list, pid) => {
        let level = 0;
        // 递归辅助函数，用于处理每个节点及其子节点
        const buildTree = (items, parentId, currentLevel) => {
          const children = [];
          items.forEach(item => {
            if (item.pid === parentId) {
              item.level = currentLevel;
              children.push(item);
              // 递归调用自身处理子节点，层级加1
              item.children = buildTree(list, item.id, currentLevel + 1);
            }
          });
          return children;
        };
        const data = buildTree(list, pid, level);
        return data;
      };
      /* harmony default export */
      const libs_convertListToTree = convertListToTree;
      ; // CONCATENATED MODULE: ./src/libs/flattenDataWithoutNesting.ts
      function flattenDataWithoutNesting(data) {
        let flattened = [];
        function flattenRecursive(node, parentId) {
          const {
            id,
            name,
            isExpanded
          } = node;
          flattened.push({
            ...node,
            id,
            name,
            isExpanded,
            pid: parentId
          });
          if (node.children && node.children.length > 0) {
            node.children.forEach(child => {
              flattenRecursive(child, id);
            });
          }
        }
        data.forEach(rootNode => {
          flattenRecursive(rootNode, null);
        });
        return flattened;
      }
      /* harmony default export */
      const libs_flattenDataWithoutNesting = flattenDataWithoutNesting;
      ; // CONCATENATED MODULE: ./src/libs/splitFilesIntoColumns.ts
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
      /* harmony default export */
      const libs_splitFilesIntoColumns = splitFilesIntoColumns;
      ; // CONCATENATED MODULE: ./src/libs/getContentWidth.ts
      function getContentWidth(element) {
        const computedStyle = window.getComputedStyle(element);
        const offsetWidth = element.offsetWidth;
        const borderWidthLeftRight = parseInt(computedStyle.borderLeftWidth) + parseInt(computedStyle.borderRightWidth);
        const paddingWidthLeftRight = parseInt(computedStyle.paddingLeft) + parseInt(computedStyle.paddingRight);
        return offsetWidth - borderWidthLeftRight - paddingWidthLeftRight;
      }
      /* harmony default export */
      const libs_getContentWidth = getContentWidth;
      ; // CONCATENATED MODULE: ../../node_modules/@remix-run/router/dist/router.js
      /**
       * @remix-run/router v1.5.0
       *
       * Copyright (c) Remix Software Inc.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE.md file in the root directory of this source tree.
       *
       * @license MIT
       */
      function _extends() {
        _extends = Object.assign ? Object.assign.bind() : function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }
          return target;
        };
        return _extends.apply(this, arguments);
      }

      ////////////////////////////////////////////////////////////////////////////////
      //#region Types and Constants
      ////////////////////////////////////////////////////////////////////////////////

      /**
       * Actions represent the type of change to a location value.
       */
      var router_Action;
      (function (Action) {
        /**
         * A POP indicates a change to an arbitrary index in the history stack, such
         * as a back or forward navigation. It does not describe the direction of the
         * navigation, only that the current index changed.
         *
         * Note: This is the default action for newly created history objects.
         */
        Action["Pop"] = "POP";
        /**
         * A PUSH indicates a new entry being added to the history stack, such as when
         * a link is clicked and a new page loads. When this happens, all subsequent
         * entries in the stack are lost.
         */

        Action["Push"] = "PUSH";
        /**
         * A REPLACE indicates the entry at the current index in the history stack
         * being replaced by a new one.
         */

        Action["Replace"] = "REPLACE";
      })(router_Action || (router_Action = {}));
      const PopStateEventType = "popstate";
      /**
       * Memory history stores the current location in memory. It is designed for use
       * in stateful non-browser environments like tests and React Native.
       */

      function router_createMemoryHistory(options) {
        if (options === void 0) {
          options = {};
        }
        let {
          initialEntries = ["/"],
          initialIndex,
          v5Compat = false
        } = options;
        let entries; // Declare so we can access from createMemoryLocation

        entries = initialEntries.map((entry, index) => createMemoryLocation(entry, typeof entry === "string" ? null : entry.state, index === 0 ? "default" : undefined));
        let index = clampIndex(initialIndex == null ? entries.length - 1 : initialIndex);
        let action = router_Action.Pop;
        let listener = null;
        function clampIndex(n) {
          return Math.min(Math.max(n, 0), entries.length - 1);
        }
        function getCurrentLocation() {
          return entries[index];
        }
        function createMemoryLocation(to, state, key) {
          if (state === void 0) {
            state = null;
          }
          let location = createLocation(entries ? getCurrentLocation().pathname : "/", to, state, key);
          warning(location.pathname.charAt(0) === "/", "relative pathnames are not supported in memory history: " + JSON.stringify(to));
          return location;
        }
        function createHref(to) {
          return typeof to === "string" ? to : createPath(to);
        }
        let history = {
          get index() {
            return index;
          },
          get action() {
            return action;
          },
          get location() {
            return getCurrentLocation();
          },
          createHref,
          createURL(to) {
            return new URL(createHref(to), "http://localhost");
          },
          encodeLocation(to) {
            let path = typeof to === "string" ? router_parsePath(to) : to;
            return {
              pathname: path.pathname || "",
              search: path.search || "",
              hash: path.hash || ""
            };
          },
          push(to, state) {
            action = router_Action.Push;
            let nextLocation = createMemoryLocation(to, state);
            index += 1;
            entries.splice(index, entries.length, nextLocation);
            if (v5Compat && listener) {
              listener({
                action,
                location: nextLocation,
                delta: 1
              });
            }
          },
          replace(to, state) {
            action = router_Action.Replace;
            let nextLocation = createMemoryLocation(to, state);
            entries[index] = nextLocation;
            if (v5Compat && listener) {
              listener({
                action,
                location: nextLocation,
                delta: 0
              });
            }
          },
          go(delta) {
            action = router_Action.Pop;
            let nextIndex = clampIndex(index + delta);
            let nextLocation = entries[nextIndex];
            index = nextIndex;
            if (listener) {
              listener({
                action,
                location: nextLocation,
                delta
              });
            }
          },
          listen(fn) {
            listener = fn;
            return () => {
              listener = null;
            };
          }
        };
        return history;
      }
      /**
       * Browser history stores the location in regular URLs. This is the standard for
       * most web apps, but it requires some configuration on the server to ensure you
       * serve the same app at multiple URLs.
       *
       * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createbrowserhistory
       */

      function createBrowserHistory(options) {
        if (options === void 0) {
          options = {};
        }
        function createBrowserLocation(window, globalHistory) {
          let {
            pathname,
            search,
            hash
          } = window.location;
          return createLocation("", {
            pathname,
            search,
            hash
          },
          // state defaults to `null` because `window.history.state` does
          globalHistory.state && globalHistory.state.usr || null, globalHistory.state && globalHistory.state.key || "default");
        }
        function createBrowserHref(window, to) {
          return typeof to === "string" ? to : createPath(to);
        }
        return getUrlBasedHistory(createBrowserLocation, createBrowserHref, null, options);
      }
      /**
       * Hash history stores the location in window.location.hash. This makes it ideal
       * for situations where you don't want to send the location to the server for
       * some reason, either because you do cannot configure it or the URL space is
       * reserved for something else.
       *
       * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createhashhistory
       */

      function createHashHistory(options) {
        if (options === void 0) {
          options = {};
        }
        function createHashLocation(window, globalHistory) {
          let {
            pathname = "/",
            search = "",
            hash = ""
          } = router_parsePath(window.location.hash.substr(1));
          return createLocation("", {
            pathname,
            search,
            hash
          },
          // state defaults to `null` because `window.history.state` does
          globalHistory.state && globalHistory.state.usr || null, globalHistory.state && globalHistory.state.key || "default");
        }
        function createHashHref(window, to) {
          let base = window.document.querySelector("base");
          let href = "";
          if (base && base.getAttribute("href")) {
            let url = window.location.href;
            let hashIndex = url.indexOf("#");
            href = hashIndex === -1 ? url : url.slice(0, hashIndex);
          }
          return href + "#" + (typeof to === "string" ? to : createPath(to));
        }
        function validateHashLocation(location, to) {
          warning(location.pathname.charAt(0) === "/", "relative pathnames are not supported in hash history.push(" + JSON.stringify(to) + ")");
        }
        return getUrlBasedHistory(createHashLocation, createHashHref, validateHashLocation, options);
      }
      function invariant(value, message) {
        if (value === false || value === null || typeof value === "undefined") {
          throw new Error(message);
        }
      }
      function warning(cond, message) {
        if (!cond) {
          // eslint-disable-next-line no-console
          if (typeof console !== "undefined") console.warn(message);
          try {
            // Welcome to debugging history!
            //
            // This error is thrown as a convenience so you can more easily
            // find the source for a warning that appears in the console by
            // enabling "pause on exceptions" in your JavaScript debugger.
            throw new Error(message); // eslint-disable-next-line no-empty
          } catch (e) {}
        }
      }
      function createKey() {
        return Math.random().toString(36).substr(2, 8);
      }
      /**
       * For browser-based histories, we combine the state and key into an object
       */

      function getHistoryState(location, index) {
        return {
          usr: location.state,
          key: location.key,
          idx: index
        };
      }
      /**
       * Creates a Location object with a unique key from the given Path
       */

      function createLocation(current, to, state, key) {
        if (state === void 0) {
          state = null;
        }
        let location = _extends({
          pathname: typeof current === "string" ? current : current.pathname,
          search: "",
          hash: ""
        }, typeof to === "string" ? router_parsePath(to) : to, {
          state,
          // TODO: This could be cleaned up.  push/replace should probably just take
          // full Locations now and avoid the need to run through this flow at all
          // But that's a pretty big refactor to the current test suite so going to
          // keep as is for the time being and just let any incoming keys take precedence
          key: to && to.key || key || createKey()
        });
        return location;
      }
      /**
       * Creates a string URL path from the given pathname, search, and hash components.
       */

      function createPath(_ref) {
        let {
          pathname = "/",
          search = "",
          hash = ""
        } = _ref;
        if (search && search !== "?") pathname += search.charAt(0) === "?" ? search : "?" + search;
        if (hash && hash !== "#") pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
        return pathname;
      }
      /**
       * Parses a string URL path into its separate pathname, search, and hash components.
       */

      function router_parsePath(path) {
        let parsedPath = {};
        if (path) {
          let hashIndex = path.indexOf("#");
          if (hashIndex >= 0) {
            parsedPath.hash = path.substr(hashIndex);
            path = path.substr(0, hashIndex);
          }
          let searchIndex = path.indexOf("?");
          if (searchIndex >= 0) {
            parsedPath.search = path.substr(searchIndex);
            path = path.substr(0, searchIndex);
          }
          if (path) {
            parsedPath.pathname = path;
          }
        }
        return parsedPath;
      }
      function getUrlBasedHistory(getLocation, createHref, validateLocation, options) {
        if (options === void 0) {
          options = {};
        }
        let {
          window = document.defaultView,
          v5Compat = false
        } = options;
        let globalHistory = window.history;
        let action = router_Action.Pop;
        let listener = null;
        let index = getIndex(); // Index should only be null when we initialize. If not, it's because the
        // user called history.pushState or history.replaceState directly, in which
        // case we should log a warning as it will result in bugs.

        if (index == null) {
          index = 0;
          globalHistory.replaceState(_extends({}, globalHistory.state, {
            idx: index
          }), "");
        }
        function getIndex() {
          let state = globalHistory.state || {
            idx: null
          };
          return state.idx;
        }
        function handlePop() {
          action = router_Action.Pop;
          let nextIndex = getIndex();
          let delta = nextIndex == null ? null : nextIndex - index;
          index = nextIndex;
          if (listener) {
            listener({
              action,
              location: history.location,
              delta
            });
          }
        }
        function push(to, state) {
          action = router_Action.Push;
          let location = createLocation(history.location, to, state);
          if (validateLocation) validateLocation(location, to);
          index = getIndex() + 1;
          let historyState = getHistoryState(location, index);
          let url = history.createHref(location); // try...catch because iOS limits us to 100 pushState calls :/

          try {
            globalHistory.pushState(historyState, "", url);
          } catch (error) {
            // They are going to lose state here, but there is no real
            // way to warn them about it since the page will refresh...
            window.location.assign(url);
          }
          if (v5Compat && listener) {
            listener({
              action,
              location: history.location,
              delta: 1
            });
          }
        }
        function replace(to, state) {
          action = router_Action.Replace;
          let location = createLocation(history.location, to, state);
          if (validateLocation) validateLocation(location, to);
          index = getIndex();
          let historyState = getHistoryState(location, index);
          let url = history.createHref(location);
          globalHistory.replaceState(historyState, "", url);
          if (v5Compat && listener) {
            listener({
              action,
              location: history.location,
              delta: 0
            });
          }
        }
        function createURL(to) {
          // window.location.origin is "null" (the literal string value) in Firefox
          // under certain conditions, notably when serving from a local HTML file
          // See https://bugzilla.mozilla.org/show_bug.cgi?id=878297
          let base = window.location.origin !== "null" ? window.location.origin : window.location.href;
          let href = typeof to === "string" ? to : createPath(to);
          invariant(base, "No window.location.(origin|href) available to create URL for href: " + href);
          return new URL(href, base);
        }
        let history = {
          get action() {
            return action;
          },
          get location() {
            return getLocation(window, globalHistory);
          },
          listen(fn) {
            if (listener) {
              throw new Error("A history only accepts one active listener");
            }
            window.addEventListener(PopStateEventType, handlePop);
            listener = fn;
            return () => {
              window.removeEventListener(PopStateEventType, handlePop);
              listener = null;
            };
          },
          createHref(to) {
            return createHref(window, to);
          },
          createURL,
          encodeLocation(to) {
            // Encode a Location the same way window.location would
            let url = createURL(to);
            return {
              pathname: url.pathname,
              search: url.search,
              hash: url.hash
            };
          },
          push,
          replace,
          go(n) {
            return globalHistory.go(n);
          }
        };
        return history;
      } //#endregion

      var ResultType;
      (function (ResultType) {
        ResultType["data"] = "data";
        ResultType["deferred"] = "deferred";
        ResultType["redirect"] = "redirect";
        ResultType["error"] = "error";
      })(ResultType || (ResultType = {}));
      const immutableRouteKeys = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
      function isIndexRoute(route) {
        return route.index === true;
      } // Walk the route tree generating unique IDs where necessary so we are working
      // solely with AgnosticDataRouteObject's within the Router

      function convertRoutesToDataRoutes(routes, detectErrorBoundary, parentPath, manifest) {
        if (parentPath === void 0) {
          parentPath = [];
        }
        if (manifest === void 0) {
          manifest = {};
        }
        return routes.map((route, index) => {
          let treePath = [...parentPath, index];
          let id = typeof route.id === "string" ? route.id : treePath.join("-");
          invariant(route.index !== true || !route.children, "Cannot specify children on an index route");
          invariant(!manifest[id], "Found a route id collision on id \"" + id + "\".  Route " + "id's must be globally unique within Data Router usages");
          if (isIndexRoute(route)) {
            let indexRoute = _extends({}, route, {
              hasErrorBoundary: detectErrorBoundary(route),
              id
            });
            manifest[id] = indexRoute;
            return indexRoute;
          } else {
            let pathOrLayoutRoute = _extends({}, route, {
              id,
              hasErrorBoundary: detectErrorBoundary(route),
              children: undefined
            });
            manifest[id] = pathOrLayoutRoute;
            if (route.children) {
              pathOrLayoutRoute.children = convertRoutesToDataRoutes(route.children, detectErrorBoundary, treePath, manifest);
            }
            return pathOrLayoutRoute;
          }
        });
      }
      /**
       * Matches the given routes to a location and returns the match data.
       *
       * @see https://reactrouter.com/utils/match-routes
       */

      function router_matchRoutes(routes, locationArg, basename) {
        if (basename === void 0) {
          basename = "/";
        }
        let location = typeof locationArg === "string" ? router_parsePath(locationArg) : locationArg;
        let pathname = router_stripBasename(location.pathname || "/", basename);
        if (pathname == null) {
          return null;
        }
        let branches = flattenRoutes(routes);
        rankRouteBranches(branches);
        let matches = null;
        for (let i = 0; matches == null && i < branches.length; ++i) {
          matches = matchRouteBranch(branches[i],
          // Incoming pathnames are generally encoded from either window.location
          // or from router.navigate, but we want to match against the unencoded
          // paths in the route definitions.  Memory router locations won't be
          // encoded here but there also shouldn't be anything to decode so this
          // should be a safe operation.  This avoids needing matchRoutes to be
          // history-aware.
          safelyDecodeURI(pathname));
        }
        return matches;
      }
      function flattenRoutes(routes, branches, parentsMeta, parentPath) {
        if (branches === void 0) {
          branches = [];
        }
        if (parentsMeta === void 0) {
          parentsMeta = [];
        }
        if (parentPath === void 0) {
          parentPath = "";
        }
        let flattenRoute = (route, index, relativePath) => {
          let meta = {
            relativePath: relativePath === undefined ? route.path || "" : relativePath,
            caseSensitive: route.caseSensitive === true,
            childrenIndex: index,
            route
          };
          if (meta.relativePath.startsWith("/")) {
            invariant(meta.relativePath.startsWith(parentPath), "Absolute route path \"" + meta.relativePath + "\" nested under path " + ("\"" + parentPath + "\" is not valid. An absolute child route path ") + "must start with the combined path of all its parent routes.");
            meta.relativePath = meta.relativePath.slice(parentPath.length);
          }
          let path = router_joinPaths([parentPath, meta.relativePath]);
          let routesMeta = parentsMeta.concat(meta); // Add the children before adding this route to the array so we traverse the
          // route tree depth-first and child routes appear before their parents in
          // the "flattened" version.

          if (route.children && route.children.length > 0) {
            invariant(
            // Our types know better, but runtime JS may not!
            // @ts-expect-error
            route.index !== true, "Index routes must not have child routes. Please remove " + ("all child routes from route path \"" + path + "\"."));
            flattenRoutes(route.children, branches, routesMeta, path);
          } // Routes without a path shouldn't ever match by themselves unless they are
          // index routes, so don't add them to the list of possible branches.

          if (route.path == null && !route.index) {
            return;
          }
          branches.push({
            path,
            score: computeScore(path, route.index),
            routesMeta
          });
        };
        routes.forEach((route, index) => {
          var _route$path;

          // coarse-grain check for optional params
          if (route.path === "" || !((_route$path = route.path) != null && _route$path.includes("?"))) {
            flattenRoute(route, index);
          } else {
            for (let exploded of explodeOptionalSegments(route.path)) {
              flattenRoute(route, index, exploded);
            }
          }
        });
        return branches;
      }
      /**
       * Computes all combinations of optional path segments for a given path,
       * excluding combinations that are ambiguous and of lower priority.
       *
       * For example, `/one/:two?/three/:four?/:five?` explodes to:
       * - `/one/three`
       * - `/one/:two/three`
       * - `/one/three/:four`
       * - `/one/three/:five`
       * - `/one/:two/three/:four`
       * - `/one/:two/three/:five`
       * - `/one/three/:four/:five`
       * - `/one/:two/three/:four/:five`
       */

      function explodeOptionalSegments(path) {
        let segments = path.split("/");
        if (segments.length === 0) return [];
        let [first, ...rest] = segments; // Optional path segments are denoted by a trailing `?`

        let isOptional = first.endsWith("?"); // Compute the corresponding required segment: `foo?` -> `foo`

        let required = first.replace(/\?$/, "");
        if (rest.length === 0) {
          // Intepret empty string as omitting an optional segment
          // `["one", "", "three"]` corresponds to omitting `:two` from `/one/:two?/three` -> `/one/three`
          return isOptional ? [required, ""] : [required];
        }
        let restExploded = explodeOptionalSegments(rest.join("/"));
        let result = []; // All child paths with the prefix.  Do this for all children before the
        // optional version for all children so we get consistent ordering where the
        // parent optional aspect is preferred as required.  Otherwise, we can get
        // child sections interspersed where deeper optional segments are higher than
        // parent optional segments, where for example, /:two would explodes _earlier_
        // then /:one.  By always including the parent as required _for all children_
        // first, we avoid this issue

        result.push(...restExploded.map(subpath => subpath === "" ? required : [required, subpath].join("/"))); // Then if this is an optional value, add all child versions without

        if (isOptional) {
          result.push(...restExploded);
        } // for absolute paths, ensure `/` instead of empty segment

        return result.map(exploded => path.startsWith("/") && exploded === "" ? "/" : exploded);
      }
      function rankRouteBranches(branches) {
        branches.sort((a, b) => a.score !== b.score ? b.score - a.score // Higher score first
        : compareIndexes(a.routesMeta.map(meta => meta.childrenIndex), b.routesMeta.map(meta => meta.childrenIndex)));
      }
      const paramRe = /^:\w+$/;
      const dynamicSegmentValue = 3;
      const indexRouteValue = 2;
      const emptySegmentValue = 1;
      const staticSegmentValue = 10;
      const splatPenalty = /* unused pure expression or super */null && 0;
      const isSplat = s => s === "*";
      function computeScore(path, index) {
        let segments = path.split("/");
        let initialScore = segments.length;
        if (segments.some(isSplat)) {
          initialScore += splatPenalty;
        }
        if (index) {
          initialScore += indexRouteValue;
        }
        return segments.filter(s => !isSplat(s)).reduce((score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
      }
      function compareIndexes(a, b) {
        let siblings = a.length === b.length && a.slice(0, -1).every((n, i) => n === b[i]);
        return siblings ?
        // If two routes are siblings, we should try to match the earlier sibling
        // first. This allows people to have fine-grained control over the matching
        // behavior by simply putting routes with identical paths in the order they
        // want them tried.
        a[a.length - 1] - b[b.length - 1] :
        // Otherwise, it doesn't really make sense to rank non-siblings by index,
        // so they sort equally.
        0;
      }
      function matchRouteBranch(branch, pathname) {
        let {
          routesMeta
        } = branch;
        let matchedParams = {};
        let matchedPathname = "/";
        let matches = [];
        for (let i = 0; i < routesMeta.length; ++i) {
          let meta = routesMeta[i];
          let end = i === routesMeta.length - 1;
          let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
          let match = router_matchPath({
            path: meta.relativePath,
            caseSensitive: meta.caseSensitive,
            end
          }, remainingPathname);
          if (!match) return null;
          Object.assign(matchedParams, match.params);
          let route = meta.route;
          matches.push({
            // TODO: Can this as be avoided?
            params: matchedParams,
            pathname: router_joinPaths([matchedPathname, match.pathname]),
            pathnameBase: normalizePathname(router_joinPaths([matchedPathname, match.pathnameBase])),
            route
          });
          if (match.pathnameBase !== "/") {
            matchedPathname = router_joinPaths([matchedPathname, match.pathnameBase]);
          }
        }
        return matches;
      }
      /**
       * Returns a path with params interpolated.
       *
       * @see https://reactrouter.com/utils/generate-path
       */

      function generatePath(originalPath, params) {
        if (params === void 0) {
          params = {};
        }
        let path = originalPath;
        if (path.endsWith("*") && path !== "*" && !path.endsWith("/*")) {
          warning(false, "Route path \"" + path + "\" will be treated as if it were " + ("\"" + path.replace(/\*$/, "/*") + "\" because the `*` character must ") + "always follow a `/` in the pattern. To get rid of this warning, " + ("please change the route path to \"" + path.replace(/\*$/, "/*") + "\"."));
          path = path.replace(/\*$/, "/*");
        } // ensure `/` is added at the beginning if the path is absolute

        const prefix = path.startsWith("/") ? "/" : "";
        const segments = path.split(/\/+/).map((segment, index, array) => {
          const isLastSegment = index === array.length - 1; // only apply the splat if it's the last segment

          if (isLastSegment && segment === "*") {
            const star = "*";
            const starParam = params[star]; // Apply the splat

            return starParam;
          }
          const keyMatch = segment.match(/^:(\w+)(\??)$/);
          if (keyMatch) {
            const [, key, optional] = keyMatch;
            let param = params[key];
            if (optional === "?") {
              return param == null ? "" : param;
            }
            if (param == null) {
              invariant(false, "Missing \":" + key + "\" param");
            }
            return param;
          } // Remove any optional markers from optional static segments

          return segment.replace(/\?$/g, "");
        }) // Remove empty segments
        .filter(segment => !!segment);
        return prefix + segments.join("/");
      }
      /**
       * Performs pattern matching on a URL pathname and returns information about
       * the match.
       *
       * @see https://reactrouter.com/utils/match-path
       */

      function router_matchPath(pattern, pathname) {
        if (typeof pattern === "string") {
          pattern = {
            path: pattern,
            caseSensitive: false,
            end: true
          };
        }
        let [matcher, paramNames] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
        let match = pathname.match(matcher);
        if (!match) return null;
        let matchedPathname = match[0];
        let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
        let captureGroups = match.slice(1);
        let params = paramNames.reduce((memo, paramName, index) => {
          // We need to compute the pathnameBase here using the raw splat value
          // instead of using params["*"] later because it will be decoded then
          if (paramName === "*") {
            let splatValue = captureGroups[index] || "";
            pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
          }
          memo[paramName] = safelyDecodeURIComponent(captureGroups[index] || "", paramName);
          return memo;
        }, {});
        return {
          params,
          pathname: matchedPathname,
          pathnameBase,
          pattern
        };
      }
      function compilePath(path, caseSensitive, end) {
        if (caseSensitive === void 0) {
          caseSensitive = false;
        }
        if (end === void 0) {
          end = true;
        }
        warning(path === "*" || !path.endsWith("*") || path.endsWith("/*"), "Route path \"" + path + "\" will be treated as if it were " + ("\"" + path.replace(/\*$/, "/*") + "\" because the `*` character must ") + "always follow a `/` in the pattern. To get rid of this warning, " + ("please change the route path to \"" + path.replace(/\*$/, "/*") + "\"."));
        let paramNames = [];
        let regexpSource = "^" + path.replace(/\/*\*?$/, "") // Ignore trailing / and /*, we'll handle it below
        .replace(/^\/*/, "/") // Make sure it has a leading /
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&") // Escape special regex chars
        .replace(/\/:(\w+)/g, (_, paramName) => {
          paramNames.push(paramName);
          return "/([^\\/]+)";
        });
        if (path.endsWith("*")) {
          paramNames.push("*");
          regexpSource += path === "*" || path === "/*" ? "(.*)$" // Already matched the initial /, just match the rest
          : "(?:\\/(.+)|\\/*)$"; // Don't include the / in params["*"]
        } else if (end) {
          // When matching to the end, ignore trailing slashes
          regexpSource += "\\/*$";
        } else if (path !== "" && path !== "/") {
          // If our path is non-empty and contains anything beyond an initial slash,
          // then we have _some_ form of path in our regex so we should expect to
          // match only if we find the end of this path segment.  Look for an optional
          // non-captured trailing slash (to match a portion of the URL) or the end
          // of the path (if we've matched to the end).  We used to do this with a
          // word boundary but that gives false positives on routes like
          // /user-preferences since `-` counts as a word boundary.
          regexpSource += "(?:(?=\\/|$))";
        } else ;
        let matcher = new RegExp(regexpSource, caseSensitive ? undefined : "i");
        return [matcher, paramNames];
      }
      function safelyDecodeURI(value) {
        try {
          return decodeURI(value);
        } catch (error) {
          warning(false, "The URL path \"" + value + "\" could not be decoded because it is is a " + "malformed URL segment. This is probably due to a bad percent " + ("encoding (" + error + ")."));
          return value;
        }
      }
      function safelyDecodeURIComponent(value, paramName) {
        try {
          return decodeURIComponent(value);
        } catch (error) {
          warning(false, "The value for the URL param \"" + paramName + "\" will not be decoded because" + (" the string \"" + value + "\" is a malformed URL segment. This is probably") + (" due to a bad percent encoding (" + error + ")."));
          return value;
        }
      }
      /**
       * @private
       */

      function router_stripBasename(pathname, basename) {
        if (basename === "/") return pathname;
        if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
          return null;
        } // We want to leave trailing slash behavior in the user's control, so if they
        // specify a basename with a trailing slash, we should support it

        let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
        let nextChar = pathname.charAt(startIndex);
        if (nextChar && nextChar !== "/") {
          // pathname does not start with basename/
          return null;
        }
        return pathname.slice(startIndex) || "/";
      }
      /**
       * Returns a resolved path object relative to the given pathname.
       *
       * @see https://reactrouter.com/utils/resolve-path
       */

      function resolvePath(to, fromPathname) {
        if (fromPathname === void 0) {
          fromPathname = "/";
        }
        let {
          pathname: toPathname,
          search = "",
          hash = ""
        } = typeof to === "string" ? router_parsePath(to) : to;
        let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
        return {
          pathname,
          search: normalizeSearch(search),
          hash: normalizeHash(hash)
        };
      }
      function resolvePathname(relativePath, fromPathname) {
        let segments = fromPathname.replace(/\/+$/, "").split("/");
        let relativeSegments = relativePath.split("/");
        relativeSegments.forEach(segment => {
          if (segment === "..") {
            // Keep the root "" segment so the pathname starts at /
            if (segments.length > 1) segments.pop();
          } else if (segment !== ".") {
            segments.push(segment);
          }
        });
        return segments.length > 1 ? segments.join("/") : "/";
      }
      function getInvalidPathError(char, field, dest, path) {
        return "Cannot include a '" + char + "' character in a manually specified " + ("`to." + field + "` field [" + JSON.stringify(path) + "].  Please separate it out to the ") + ("`to." + dest + "` field. Alternatively you may provide the full path as ") + "a string in <Link to=\"...\"> and the router will parse it for you.";
      }
      /**
       * @private
       *
       * When processing relative navigation we want to ignore ancestor routes that
       * do not contribute to the path, such that index/pathless layout routes don't
       * interfere.
       *
       * For example, when moving a route element into an index route and/or a
       * pathless layout route, relative link behavior contained within should stay
       * the same.  Both of the following examples should link back to the root:
       *
       *   <Route path="/">
       *     <Route path="accounts" element={<Link to=".."}>
       *   </Route>
       *
       *   <Route path="/">
       *     <Route path="accounts">
       *       <Route element={<AccountsLayout />}>       // <-- Does not contribute
       *         <Route index element={<Link to=".."} />  // <-- Does not contribute
       *       </Route
       *     </Route>
       *   </Route>
       */

      function getPathContributingMatches(matches) {
        return matches.filter((match, index) => index === 0 || match.route.path && match.route.path.length > 0);
      }
      /**
       * @private
       */

      function router_resolveTo(toArg, routePathnames, locationPathname, isPathRelative) {
        if (isPathRelative === void 0) {
          isPathRelative = false;
        }
        let to;
        if (typeof toArg === "string") {
          to = router_parsePath(toArg);
        } else {
          to = _extends({}, toArg);
          invariant(!to.pathname || !to.pathname.includes("?"), getInvalidPathError("?", "pathname", "search", to));
          invariant(!to.pathname || !to.pathname.includes("#"), getInvalidPathError("#", "pathname", "hash", to));
          invariant(!to.search || !to.search.includes("#"), getInvalidPathError("#", "search", "hash", to));
        }
        let isEmptyPath = toArg === "" || to.pathname === "";
        let toPathname = isEmptyPath ? "/" : to.pathname;
        let from; // Routing is relative to the current pathname if explicitly requested.
        //
        // If a pathname is explicitly provided in `to`, it should be relative to the
        // route context. This is explained in `Note on `<Link to>` values` in our
        // migration guide from v5 as a means of disambiguation between `to` values
        // that begin with `/` and those that do not. However, this is problematic for
        // `to` values that do not provide a pathname. `to` can simply be a search or
        // hash string, in which case we should assume that the navigation is relative
        // to the current location's pathname and *not* the route pathname.

        if (isPathRelative || toPathname == null) {
          from = locationPathname;
        } else {
          let routePathnameIndex = routePathnames.length - 1;
          if (toPathname.startsWith("..")) {
            let toSegments = toPathname.split("/"); // Each leading .. segment means "go up one route" instead of "go up one
            // URL segment".  This is a key difference from how <a href> works and a
            // major reason we call this a "to" value instead of a "href".

            while (toSegments[0] === "..") {
              toSegments.shift();
              routePathnameIndex -= 1;
            }
            to.pathname = toSegments.join("/");
          } // If there are more ".." segments than parent routes, resolve relative to
          // the root / URL.

          from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
        }
        let path = resolvePath(to, from); // Ensure the pathname has a trailing slash if the original "to" had one

        let hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/"); // Or if this was a link to the current path which has a trailing slash

        let hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");
        if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) {
          path.pathname += "/";
        }
        return path;
      }
      /**
       * @private
       */

      function getToPathname(to) {
        // Empty strings should be treated the same as / paths
        return to === "" || to.pathname === "" ? "/" : typeof to === "string" ? router_parsePath(to).pathname : to.pathname;
      }
      /**
       * @private
       */

      const router_joinPaths = paths => paths.join("/").replace(/\/\/+/g, "/");
      /**
       * @private
       */

      const normalizePathname = pathname => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
      /**
       * @private
       */

      const normalizeSearch = search => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
      /**
       * @private
       */

      const normalizeHash = hash => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
      /**
       * This is a shortcut for creating `application/json` responses. Converts `data`
       * to JSON and sets the `Content-Type` header.
       */

      const json = function json(data, init) {
        if (init === void 0) {
          init = {};
        }
        let responseInit = typeof init === "number" ? {
          status: init
        } : init;
        let headers = new Headers(responseInit.headers);
        if (!headers.has("Content-Type")) {
          headers.set("Content-Type", "application/json; charset=utf-8");
        }
        return new Response(JSON.stringify(data), _extends({}, responseInit, {
          headers
        }));
      };
      class AbortedDeferredError extends Error {}
      class DeferredData {
        constructor(data, responseInit) {
          this.pendingKeysSet = new Set();
          this.subscribers = new Set();
          this.deferredKeys = [];
          invariant(data && typeof data === "object" && !Array.isArray(data), "defer() only accepts plain objects"); // Set up an AbortController + Promise we can race against to exit early
          // cancellation

          let reject;
          this.abortPromise = new Promise((_, r) => reject = r);
          this.controller = new AbortController();
          let onAbort = () => reject(new AbortedDeferredError("Deferred data aborted"));
          this.unlistenAbortSignal = () => this.controller.signal.removeEventListener("abort", onAbort);
          this.controller.signal.addEventListener("abort", onAbort);
          this.data = Object.entries(data).reduce((acc, _ref) => {
            let [key, value] = _ref;
            return Object.assign(acc, {
              [key]: this.trackPromise(key, value)
            });
          }, {});
          if (this.done) {
            // All incoming values were resolved
            this.unlistenAbortSignal();
          }
          this.init = responseInit;
        }
        trackPromise(key, value) {
          if (!(value instanceof Promise)) {
            return value;
          }
          this.deferredKeys.push(key);
          this.pendingKeysSet.add(key); // We store a little wrapper promise that will be extended with
          // _data/_error props upon resolve/reject

          let promise = Promise.race([value, this.abortPromise]).then(data => this.onSettle(promise, key, null, data), error => this.onSettle(promise, key, error)); // Register rejection listeners to avoid uncaught promise rejections on
          // errors or aborted deferred values

          promise.catch(() => {});
          Object.defineProperty(promise, "_tracked", {
            get: () => true
          });
          return promise;
        }
        onSettle(promise, key, error, data) {
          if (this.controller.signal.aborted && error instanceof AbortedDeferredError) {
            this.unlistenAbortSignal();
            Object.defineProperty(promise, "_error", {
              get: () => error
            });
            return Promise.reject(error);
          }
          this.pendingKeysSet.delete(key);
          if (this.done) {
            // Nothing left to abort!
            this.unlistenAbortSignal();
          }
          if (error) {
            Object.defineProperty(promise, "_error", {
              get: () => error
            });
            this.emit(false, key);
            return Promise.reject(error);
          }
          Object.defineProperty(promise, "_data", {
            get: () => data
          });
          this.emit(false, key);
          return data;
        }
        emit(aborted, settledKey) {
          this.subscribers.forEach(subscriber => subscriber(aborted, settledKey));
        }
        subscribe(fn) {
          this.subscribers.add(fn);
          return () => this.subscribers.delete(fn);
        }
        cancel() {
          this.controller.abort();
          this.pendingKeysSet.forEach((v, k) => this.pendingKeysSet.delete(k));
          this.emit(true);
        }
        async resolveData(signal) {
          let aborted = false;
          if (!this.done) {
            let onAbort = () => this.cancel();
            signal.addEventListener("abort", onAbort);
            aborted = await new Promise(resolve => {
              this.subscribe(aborted => {
                signal.removeEventListener("abort", onAbort);
                if (aborted || this.done) {
                  resolve(aborted);
                }
              });
            });
          }
          return aborted;
        }
        get done() {
          return this.pendingKeysSet.size === 0;
        }
        get unwrappedData() {
          invariant(this.data !== null && this.done, "Can only unwrap data on initialized and settled deferreds");
          return Object.entries(this.data).reduce((acc, _ref2) => {
            let [key, value] = _ref2;
            return Object.assign(acc, {
              [key]: unwrapTrackedPromise(value)
            });
          }, {});
        }
        get pendingKeys() {
          return Array.from(this.pendingKeysSet);
        }
      }
      function isTrackedPromise(value) {
        return value instanceof Promise && value._tracked === true;
      }
      function unwrapTrackedPromise(value) {
        if (!isTrackedPromise(value)) {
          return value;
        }
        if (value._error) {
          throw value._error;
        }
        return value._data;
      }
      const defer = function defer(data, init) {
        if (init === void 0) {
          init = {};
        }
        let responseInit = typeof init === "number" ? {
          status: init
        } : init;
        return new DeferredData(data, responseInit);
      };
      /**
       * A redirect response. Sets the status code and the `Location` header.
       * Defaults to "302 Found".
       */

      const redirect = function redirect(url, init) {
        if (init === void 0) {
          init = 302;
        }
        let responseInit = init;
        if (typeof responseInit === "number") {
          responseInit = {
            status: responseInit
          };
        } else if (typeof responseInit.status === "undefined") {
          responseInit.status = 302;
        }
        let headers = new Headers(responseInit.headers);
        headers.set("Location", url);
        return new Response(null, _extends({}, responseInit, {
          headers
        }));
      };
      /**
       * @private
       * Utility class we use to hold auto-unwrapped 4xx/5xx Response bodies
       */

      class ErrorResponse {
        constructor(status, statusText, data, internal) {
          if (internal === void 0) {
            internal = false;
          }
          this.status = status;
          this.statusText = statusText || "";
          this.internal = internal;
          if (data instanceof Error) {
            this.data = data.toString();
            this.error = data;
          } else {
            this.data = data;
          }
        }
      }
      /**
       * Check if the given error is an ErrorResponse generated from a 4xx/5xx
       * Response thrown from an action/loader
       */

      function router_isRouteErrorResponse(error) {
        return error != null && typeof error.status === "number" && typeof error.statusText === "string" && typeof error.internal === "boolean" && "data" in error;
      }
      const validMutationMethodsArr = ["post", "put", "patch", "delete"];
      const validMutationMethods = new Set(validMutationMethodsArr);
      const validRequestMethodsArr = ["get", ...validMutationMethodsArr];
      const validRequestMethods = new Set(validRequestMethodsArr);
      const redirectStatusCodes = new Set([301, 302, 303, 307, 308]);
      const redirectPreserveMethodStatusCodes = new Set([307, 308]);
      const IDLE_NAVIGATION = {
        state: "idle",
        location: undefined,
        formMethod: undefined,
        formAction: undefined,
        formEncType: undefined,
        formData: undefined
      };
      const IDLE_FETCHER = {
        state: "idle",
        data: undefined,
        formMethod: undefined,
        formAction: undefined,
        formEncType: undefined,
        formData: undefined
      };
      const IDLE_BLOCKER = {
        state: "unblocked",
        proceed: undefined,
        reset: undefined,
        location: undefined
      };
      const ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
      const isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
      const isServer = !isBrowser;
      const defaultDetectErrorBoundary = route => Boolean(route.hasErrorBoundary); //#endregion
      ////////////////////////////////////////////////////////////////////////////////
      //#region createRouter
      ////////////////////////////////////////////////////////////////////////////////

      /**
       * Create a router and listen to history POP navigations
       */

      function router_createRouter(init) {
        invariant(init.routes.length > 0, "You must provide a non-empty routes array to createRouter");
        let detectErrorBoundary = init.detectErrorBoundary || defaultDetectErrorBoundary; // Routes keyed by ID

        let manifest = {}; // Routes in tree format for matching

        let dataRoutes = convertRoutesToDataRoutes(init.routes, detectErrorBoundary, undefined, manifest);
        let inFlightDataRoutes; // Config driven behavior flags

        let future = _extends({
          v7_normalizeFormMethod: false
        }, init.future); // Cleanup function for history

        let unlistenHistory = null; // Externally-provided functions to call on all state changes

        let subscribers = new Set(); // Externally-provided object to hold scroll restoration locations during routing

        let savedScrollPositions = null; // Externally-provided function to get scroll restoration keys

        let getScrollRestorationKey = null; // Externally-provided function to get current scroll position

        let getScrollPosition = null; // One-time flag to control the initial hydration scroll restoration.  Because
        // we don't get the saved positions from <ScrollRestoration /> until _after_
        // the initial render, we need to manually trigger a separate updateState to
        // send along the restoreScrollPosition
        // Set to true if we have `hydrationData` since we assume we were SSR'd and that
        // SSR did the initial scroll restoration.

        let initialScrollRestored = init.hydrationData != null;
        let initialMatches = router_matchRoutes(dataRoutes, init.history.location, init.basename);
        let initialErrors = null;
        if (initialMatches == null) {
          // If we do not match a user-provided-route, fall back to the root
          // to allow the error boundary to take over
          let error = getInternalRouterError(404, {
            pathname: init.history.location.pathname
          });
          let {
            matches,
            route
          } = getShortCircuitMatches(dataRoutes);
          initialMatches = matches;
          initialErrors = {
            [route.id]: error
          };
        }
        let initialized =
        // All initialMatches need to be loaded before we're ready.  If we have lazy
        // functions around still then we'll need to run them in initialize()
        !initialMatches.some(m => m.route.lazy) && (
        // And we have to either have no loaders or have been provided hydrationData
        !initialMatches.some(m => m.route.loader) || init.hydrationData != null);
        let router;
        let state = {
          historyAction: init.history.action,
          location: init.history.location,
          matches: initialMatches,
          initialized,
          navigation: IDLE_NAVIGATION,
          // Don't restore on initial updateState() if we were SSR'd
          restoreScrollPosition: init.hydrationData != null ? false : null,
          preventScrollReset: false,
          revalidation: "idle",
          loaderData: init.hydrationData && init.hydrationData.loaderData || {},
          actionData: init.hydrationData && init.hydrationData.actionData || null,
          errors: init.hydrationData && init.hydrationData.errors || initialErrors,
          fetchers: new Map(),
          blockers: new Map()
        }; // -- Stateful internal variables to manage navigations --
        // Current navigation in progress (to be committed in completeNavigation)

        let pendingAction = router_Action.Pop; // Should the current navigation prevent the scroll reset if scroll cannot
        // be restored?

        let pendingPreventScrollReset = false; // AbortController for the active navigation

        let pendingNavigationController; // We use this to avoid touching history in completeNavigation if a
        // revalidation is entirely uninterrupted

        let isUninterruptedRevalidation = false; // Use this internal flag to force revalidation of all loaders:
        //  - submissions (completed or interrupted)
        //  - useRevalidate()
        //  - X-Remix-Revalidate (from redirect)

        let isRevalidationRequired = false; // Use this internal array to capture routes that require revalidation due
        // to a cancelled deferred on action submission

        let cancelledDeferredRoutes = []; // Use this internal array to capture fetcher loads that were cancelled by an
        // action navigation and require revalidation

        let cancelledFetcherLoads = []; // AbortControllers for any in-flight fetchers

        let fetchControllers = new Map(); // Track loads based on the order in which they started

        let incrementingLoadId = 0; // Track the outstanding pending navigation data load to be compared against
        // the globally incrementing load when a fetcher load lands after a completed
        // navigation

        let pendingNavigationLoadId = -1; // Fetchers that triggered data reloads as a result of their actions

        let fetchReloadIds = new Map(); // Fetchers that triggered redirect navigations from their actions

        let fetchRedirectIds = new Set(); // Most recent href/match for fetcher.load calls for fetchers

        let fetchLoadMatches = new Map(); // Store DeferredData instances for active route matches.  When a
        // route loader returns defer() we stick one in here.  Then, when a nested
        // promise resolves we update loaderData.  If a new navigation starts we
        // cancel active deferreds for eliminated routes.

        let activeDeferreds = new Map(); // Store blocker functions in a separate Map outside of router state since
        // we don't need to update UI state if they change

        let blockerFunctions = new Map(); // Flag to ignore the next history update, so we can revert the URL change on
        // a POP navigation that was blocked by the user without touching router state

        let ignoreNextHistoryUpdate = false; // Initialize the router, all side effects should be kicked off from here.
        // Implemented as a Fluent API for ease of:
        //   let router = createRouter(init).initialize();

        function initialize() {
          // If history informs us of a POP navigation, start the navigation but do not update
          // state.  We'll update our own state once the navigation completes
          unlistenHistory = init.history.listen(_ref => {
            let {
              action: historyAction,
              location,
              delta
            } = _ref;

            // Ignore this event if it was just us resetting the URL from a
            // blocked POP navigation
            if (ignoreNextHistoryUpdate) {
              ignoreNextHistoryUpdate = false;
              return;
            }
            warning(blockerFunctions.size === 0 || delta != null, "You are trying to use a blocker on a POP navigation to a location " + "that was not created by @remix-run/router. This will fail silently in " + "production. This can happen if you are navigating outside the router " + "via `window.history.pushState`/`window.location.hash` instead of using " + "router navigation APIs.  This can also happen if you are using " + "createHashRouter and the user manually changes the URL.");
            let blockerKey = shouldBlockNavigation({
              currentLocation: state.location,
              nextLocation: location,
              historyAction
            });
            if (blockerKey && delta != null) {
              // Restore the URL to match the current UI, but don't update router state
              ignoreNextHistoryUpdate = true;
              init.history.go(delta * -1); // Put the blocker into a blocked state

              updateBlocker(blockerKey, {
                state: "blocked",
                location,
                proceed() {
                  updateBlocker(blockerKey, {
                    state: "proceeding",
                    proceed: undefined,
                    reset: undefined,
                    location
                  }); // Re-do the same POP navigation we just blocked

                  init.history.go(delta);
                },
                reset() {
                  deleteBlocker(blockerKey);
                  updateState({
                    blockers: new Map(router.state.blockers)
                  });
                }
              });
              return;
            }
            return startNavigation(historyAction, location);
          }); // Kick off initial data load if needed.  Use Pop to avoid modifying history
          // Note we don't do any handling of lazy here.  For SPA's it'll get handled
          // in the normal navigation flow.  For SSR it's expected that lazy modules are
          // resolved prior to router creation since we can't go into a fallbackElement
          // UI for SSR'd apps

          if (!state.initialized) {
            startNavigation(router_Action.Pop, state.location);
          }
          return router;
        } // Clean up a router and it's side effects

        function dispose() {
          if (unlistenHistory) {
            unlistenHistory();
          }
          subscribers.clear();
          pendingNavigationController && pendingNavigationController.abort();
          state.fetchers.forEach((_, key) => deleteFetcher(key));
          state.blockers.forEach((_, key) => deleteBlocker(key));
        } // Subscribe to state updates for the router

        function subscribe(fn) {
          subscribers.add(fn);
          return () => subscribers.delete(fn);
        } // Update our state and notify the calling context of the change

        function updateState(newState) {
          state = _extends({}, state, newState);
          subscribers.forEach(subscriber => subscriber(state));
        } // Complete a navigation returning the state.navigation back to the IDLE_NAVIGATION
        // and setting state.[historyAction/location/matches] to the new route.
        // - Location is a required param
        // - Navigation will always be set to IDLE_NAVIGATION
        // - Can pass any other state in newState

        function completeNavigation(location, newState) {
          var _location$state, _location$state2;

          // Deduce if we're in a loading/actionReload state:
          // - We have committed actionData in the store
          // - The current navigation was a mutation submission
          // - We're past the submitting state and into the loading state
          // - The location being loaded is not the result of a redirect
          let isActionReload = state.actionData != null && state.navigation.formMethod != null && isMutationMethod(state.navigation.formMethod) && state.navigation.state === "loading" && ((_location$state = location.state) == null ? void 0 : _location$state._isRedirect) !== true;
          let actionData;
          if (newState.actionData) {
            if (Object.keys(newState.actionData).length > 0) {
              actionData = newState.actionData;
            } else {
              // Empty actionData -> clear prior actionData due to an action error
              actionData = null;
            }
          } else if (isActionReload) {
            // Keep the current data if we're wrapping up the action reload
            actionData = state.actionData;
          } else {
            // Clear actionData on any other completed navigations
            actionData = null;
          } // Always preserve any existing loaderData from re-used routes

          let loaderData = newState.loaderData ? mergeLoaderData(state.loaderData, newState.loaderData, newState.matches || [], newState.errors) : state.loaderData; // On a successful navigation we can assume we got through all blockers
          // so we can start fresh

          for (let [key] of blockerFunctions) {
            deleteBlocker(key);
          } // Always respect the user flag.  Otherwise don't reset on mutation
          // submission navigations unless they redirect

          let preventScrollReset = pendingPreventScrollReset === true || state.navigation.formMethod != null && isMutationMethod(state.navigation.formMethod) && ((_location$state2 = location.state) == null ? void 0 : _location$state2._isRedirect) !== true;
          if (inFlightDataRoutes) {
            dataRoutes = inFlightDataRoutes;
            inFlightDataRoutes = undefined;
          }
          updateState(_extends({}, newState, {
            actionData,
            loaderData,
            historyAction: pendingAction,
            location,
            initialized: true,
            navigation: IDLE_NAVIGATION,
            revalidation: "idle",
            restoreScrollPosition: getSavedScrollPosition(location, newState.matches || state.matches),
            preventScrollReset,
            blockers: new Map(state.blockers)
          }));
          if (isUninterruptedRevalidation) ;else if (pendingAction === router_Action.Pop) ;else if (pendingAction === router_Action.Push) {
            init.history.push(location, location.state);
          } else if (pendingAction === router_Action.Replace) {
            init.history.replace(location, location.state);
          } // Reset stateful navigation vars

          pendingAction = router_Action.Pop;
          pendingPreventScrollReset = false;
          isUninterruptedRevalidation = false;
          isRevalidationRequired = false;
          cancelledDeferredRoutes = [];
          cancelledFetcherLoads = [];
        } // Trigger a navigation event, which can either be a numerical POP or a PUSH
        // replace with an optional submission

        async function navigate(to, opts) {
          if (typeof to === "number") {
            init.history.go(to);
            return;
          }
          let {
            path,
            submission,
            error
          } = normalizeNavigateOptions(to, future, opts);
          let currentLocation = state.location;
          let nextLocation = createLocation(state.location, path, opts && opts.state); // When using navigate as a PUSH/REPLACE we aren't reading an already-encoded
          // URL from window.location, so we need to encode it here so the behavior
          // remains the same as POP and non-data-router usages.  new URL() does all
          // the same encoding we'd get from a history.pushState/window.location read
          // without having to touch history

          nextLocation = _extends({}, nextLocation, init.history.encodeLocation(nextLocation));
          let userReplace = opts && opts.replace != null ? opts.replace : undefined;
          let historyAction = router_Action.Push;
          if (userReplace === true) {
            historyAction = router_Action.Replace;
          } else if (userReplace === false) ;else if (submission != null && isMutationMethod(submission.formMethod) && submission.formAction === state.location.pathname + state.location.search) {
            // By default on submissions to the current location we REPLACE so that
            // users don't have to double-click the back button to get to the prior
            // location.  If the user redirects to a different location from the
            // action/loader this will be ignored and the redirect will be a PUSH
            historyAction = router_Action.Replace;
          }
          let preventScrollReset = opts && "preventScrollReset" in opts ? opts.preventScrollReset === true : undefined;
          let blockerKey = shouldBlockNavigation({
            currentLocation,
            nextLocation,
            historyAction
          });
          if (blockerKey) {
            // Put the blocker into a blocked state
            updateBlocker(blockerKey, {
              state: "blocked",
              location: nextLocation,
              proceed() {
                updateBlocker(blockerKey, {
                  state: "proceeding",
                  proceed: undefined,
                  reset: undefined,
                  location: nextLocation
                }); // Send the same navigation through

                navigate(to, opts);
              },
              reset() {
                deleteBlocker(blockerKey);
                updateState({
                  blockers: new Map(state.blockers)
                });
              }
            });
            return;
          }
          return await startNavigation(historyAction, nextLocation, {
            submission,
            // Send through the formData serialization error if we have one so we can
            // render at the right error boundary after we match routes
            pendingError: error,
            preventScrollReset,
            replace: opts && opts.replace
          });
        } // Revalidate all current loaders.  If a navigation is in progress or if this
        // is interrupted by a navigation, allow this to "succeed" by calling all
        // loaders during the next loader round

        function revalidate() {
          interruptActiveLoads();
          updateState({
            revalidation: "loading"
          }); // If we're currently submitting an action, we don't need to start a new
          // navigation, we'll just let the follow up loader execution call all loaders

          if (state.navigation.state === "submitting") {
            return;
          } // If we're currently in an idle state, start a new navigation for the current
          // action/location and mark it as uninterrupted, which will skip the history
          // update in completeNavigation

          if (state.navigation.state === "idle") {
            startNavigation(state.historyAction, state.location, {
              startUninterruptedRevalidation: true
            });
            return;
          } // Otherwise, if we're currently in a loading state, just start a new
          // navigation to the navigation.location but do not trigger an uninterrupted
          // revalidation so that history correctly updates once the navigation completes

          startNavigation(pendingAction || state.historyAction, state.navigation.location, {
            overrideNavigation: state.navigation
          });
        } // Start a navigation to the given action/location.  Can optionally provide a
        // overrideNavigation which will override the normalLoad in the case of a redirect
        // navigation

        async function startNavigation(historyAction, location, opts) {
          // Abort any in-progress navigations and start a new one. Unset any ongoing
          // uninterrupted revalidations unless told otherwise, since we want this
          // new navigation to update history normally
          pendingNavigationController && pendingNavigationController.abort();
          pendingNavigationController = null;
          pendingAction = historyAction;
          isUninterruptedRevalidation = (opts && opts.startUninterruptedRevalidation) === true; // Save the current scroll position every time we start a new navigation,
          // and track whether we should reset scroll on completion

          saveScrollPosition(state.location, state.matches);
          pendingPreventScrollReset = (opts && opts.preventScrollReset) === true;
          let routesToUse = inFlightDataRoutes || dataRoutes;
          let loadingNavigation = opts && opts.overrideNavigation;
          let matches = router_matchRoutes(routesToUse, location, init.basename); // Short circuit with a 404 on the root error boundary if we match nothing

          if (!matches) {
            let error = getInternalRouterError(404, {
              pathname: location.pathname
            });
            let {
              matches: notFoundMatches,
              route
            } = getShortCircuitMatches(routesToUse); // Cancel all pending deferred on 404s since we don't keep any routes

            cancelActiveDeferreds();
            completeNavigation(location, {
              matches: notFoundMatches,
              loaderData: {},
              errors: {
                [route.id]: error
              }
            });
            return;
          } // Short circuit if it's only a hash change and not a mutation submission
          // For example, on /page#hash and submit a <Form method="post"> which will
          // default to a navigation to /page

          if (isHashChangeOnly(state.location, location) && !(opts && opts.submission && isMutationMethod(opts.submission.formMethod))) {
            completeNavigation(location, {
              matches
            });
            return;
          } // Create a controller/Request for this navigation

          pendingNavigationController = new AbortController();
          let request = createClientSideRequest(init.history, location, pendingNavigationController.signal, opts && opts.submission);
          let pendingActionData;
          let pendingError;
          if (opts && opts.pendingError) {
            // If we have a pendingError, it means the user attempted a GET submission
            // with binary FormData so assign here and skip to handleLoaders.  That
            // way we handle calling loaders above the boundary etc.  It's not really
            // different from an actionError in that sense.
            pendingError = {
              [findNearestBoundary(matches).route.id]: opts.pendingError
            };
          } else if (opts && opts.submission && isMutationMethod(opts.submission.formMethod)) {
            // Call action if we received an action submission
            let actionOutput = await handleAction(request, location, opts.submission, matches, {
              replace: opts.replace
            });
            if (actionOutput.shortCircuited) {
              return;
            }
            pendingActionData = actionOutput.pendingActionData;
            pendingError = actionOutput.pendingActionError;
            let navigation = _extends({
              state: "loading",
              location
            }, opts.submission);
            loadingNavigation = navigation; // Create a GET request for the loaders

            request = new Request(request.url, {
              signal: request.signal
            });
          } // Call loaders

          let {
            shortCircuited,
            loaderData,
            errors
          } = await handleLoaders(request, location, matches, loadingNavigation, opts && opts.submission, opts && opts.fetcherSubmission, opts && opts.replace, pendingActionData, pendingError);
          if (shortCircuited) {
            return;
          } // Clean up now that the action/loaders have completed.  Don't clean up if
          // we short circuited because pendingNavigationController will have already
          // been assigned to a new controller for the next navigation

          pendingNavigationController = null;
          completeNavigation(location, _extends({
            matches
          }, pendingActionData ? {
            actionData: pendingActionData
          } : {}, {
            loaderData,
            errors
          }));
        } // Call the action matched by the leaf route for this navigation and handle
        // redirects/errors

        async function handleAction(request, location, submission, matches, opts) {
          interruptActiveLoads(); // Put us in a submitting state

          let navigation = _extends({
            state: "submitting",
            location
          }, submission);
          updateState({
            navigation
          }); // Call our action and get the result

          let result;
          let actionMatch = getTargetMatch(matches, location);
          if (!actionMatch.route.action && !actionMatch.route.lazy) {
            result = {
              type: ResultType.error,
              error: getInternalRouterError(405, {
                method: request.method,
                pathname: location.pathname,
                routeId: actionMatch.route.id
              })
            };
          } else {
            result = await callLoaderOrAction("action", request, actionMatch, matches, manifest, detectErrorBoundary, router.basename);
            if (request.signal.aborted) {
              return {
                shortCircuited: true
              };
            }
          }
          if (isRedirectResult(result)) {
            let replace;
            if (opts && opts.replace != null) {
              replace = opts.replace;
            } else {
              // If the user didn't explicity indicate replace behavior, replace if
              // we redirected to the exact same location we're currently at to avoid
              // double back-buttons
              replace = result.location === state.location.pathname + state.location.search;
            }
            await startRedirectNavigation(state, result, {
              submission,
              replace
            });
            return {
              shortCircuited: true
            };
          }
          if (isErrorResult(result)) {
            // Store off the pending error - we use it to determine which loaders
            // to call and will commit it when we complete the navigation
            let boundaryMatch = findNearestBoundary(matches, actionMatch.route.id); // By default, all submissions are REPLACE navigations, but if the
            // action threw an error that'll be rendered in an errorElement, we fall
            // back to PUSH so that the user can use the back button to get back to
            // the pre-submission form location to try again

            if ((opts && opts.replace) !== true) {
              pendingAction = router_Action.Push;
            }
            return {
              // Send back an empty object we can use to clear out any prior actionData
              pendingActionData: {},
              pendingActionError: {
                [boundaryMatch.route.id]: result.error
              }
            };
          }
          if (isDeferredResult(result)) {
            throw getInternalRouterError(400, {
              type: "defer-action"
            });
          }
          return {
            pendingActionData: {
              [actionMatch.route.id]: result.data
            }
          };
        } // Call all applicable loaders for the given matches, handling redirects,
        // errors, etc.

        async function handleLoaders(request, location, matches, overrideNavigation, submission, fetcherSubmission, replace, pendingActionData, pendingError) {
          // Figure out the right navigation we want to use for data loading
          let loadingNavigation = overrideNavigation;
          if (!loadingNavigation) {
            let navigation = _extends({
              state: "loading",
              location,
              formMethod: undefined,
              formAction: undefined,
              formEncType: undefined,
              formData: undefined
            }, submission);
            loadingNavigation = navigation;
          } // If this was a redirect from an action we don't have a "submission" but
          // we have it on the loading navigation so use that if available

          let activeSubmission = submission || fetcherSubmission ? submission || fetcherSubmission : loadingNavigation.formMethod && loadingNavigation.formAction && loadingNavigation.formData && loadingNavigation.formEncType ? {
            formMethod: loadingNavigation.formMethod,
            formAction: loadingNavigation.formAction,
            formData: loadingNavigation.formData,
            formEncType: loadingNavigation.formEncType
          } : undefined;
          let routesToUse = inFlightDataRoutes || dataRoutes;
          let [matchesToLoad, revalidatingFetchers] = getMatchesToLoad(init.history, state, matches, activeSubmission, location, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, fetchLoadMatches, routesToUse, init.basename, pendingActionData, pendingError); // Cancel pending deferreds for no-longer-matched routes or routes we're
          // about to reload.  Note that if this is an action reload we would have
          // already cancelled all pending deferreds so this would be a no-op

          cancelActiveDeferreds(routeId => !(matches && matches.some(m => m.route.id === routeId)) || matchesToLoad && matchesToLoad.some(m => m.route.id === routeId)); // Short circuit if we have no loaders to run

          if (matchesToLoad.length === 0 && revalidatingFetchers.length === 0) {
            completeNavigation(location, _extends({
              matches,
              loaderData: {},
              // Commit pending error if we're short circuiting
              errors: pendingError || null
            }, pendingActionData ? {
              actionData: pendingActionData
            } : {}));
            return {
              shortCircuited: true
            };
          } // If this is an uninterrupted revalidation, we remain in our current idle
          // state.  If not, we need to switch to our loading state and load data,
          // preserving any new action data or existing action data (in the case of
          // a revalidation interrupting an actionReload)

          if (!isUninterruptedRevalidation) {
            revalidatingFetchers.forEach(rf => {
              let fetcher = state.fetchers.get(rf.key);
              let revalidatingFetcher = {
                state: "loading",
                data: fetcher && fetcher.data,
                formMethod: undefined,
                formAction: undefined,
                formEncType: undefined,
                formData: undefined,
                " _hasFetcherDoneAnything ": true
              };
              state.fetchers.set(rf.key, revalidatingFetcher);
            });
            let actionData = pendingActionData || state.actionData;
            updateState(_extends({
              navigation: loadingNavigation
            }, actionData ? Object.keys(actionData).length === 0 ? {
              actionData: null
            } : {
              actionData
            } : {}, revalidatingFetchers.length > 0 ? {
              fetchers: new Map(state.fetchers)
            } : {}));
          }
          pendingNavigationLoadId = ++incrementingLoadId;
          revalidatingFetchers.forEach(rf => fetchControllers.set(rf.key, pendingNavigationController));
          let {
            results,
            loaderResults,
            fetcherResults
          } = await callLoadersAndMaybeResolveData(state.matches, matches, matchesToLoad, revalidatingFetchers, request);
          if (request.signal.aborted) {
            return {
              shortCircuited: true
            };
          } // Clean up _after_ loaders have completed.  Don't clean up if we short
          // circuited because fetchControllers would have been aborted and
          // reassigned to new controllers for the next navigation

          revalidatingFetchers.forEach(rf => fetchControllers.delete(rf.key)); // If any loaders returned a redirect Response, start a new REPLACE navigation

          let redirect = findRedirect(results);
          if (redirect) {
            await startRedirectNavigation(state, redirect, {
              replace
            });
            return {
              shortCircuited: true
            };
          } // Process and commit output from loaders

          let {
            loaderData,
            errors
          } = processLoaderData(state, matches, matchesToLoad, loaderResults, pendingError, revalidatingFetchers, fetcherResults, activeDeferreds); // Wire up subscribers to update loaderData as promises settle

          activeDeferreds.forEach((deferredData, routeId) => {
            deferredData.subscribe(aborted => {
              // Note: No need to updateState here since the TrackedPromise on
              // loaderData is stable across resolve/reject
              // Remove this instance if we were aborted or if promises have settled
              if (aborted || deferredData.done) {
                activeDeferreds.delete(routeId);
              }
            });
          });
          markFetchRedirectsDone();
          let didAbortFetchLoads = abortStaleFetchLoads(pendingNavigationLoadId);
          return _extends({
            loaderData,
            errors
          }, didAbortFetchLoads || revalidatingFetchers.length > 0 ? {
            fetchers: new Map(state.fetchers)
          } : {});
        }
        function getFetcher(key) {
          return state.fetchers.get(key) || IDLE_FETCHER;
        } // Trigger a fetcher load/submit for the given fetcher key

        function fetch(key, routeId, href, opts) {
          if (isServer) {
            throw new Error("router.fetch() was called during the server render, but it shouldn't be. " + "You are likely calling a useFetcher() method in the body of your component. " + "Try moving it to a useEffect or a callback.");
          }
          if (fetchControllers.has(key)) abortFetcher(key);
          let routesToUse = inFlightDataRoutes || dataRoutes;
          let matches = router_matchRoutes(routesToUse, href, init.basename);
          if (!matches) {
            setFetcherError(key, routeId, getInternalRouterError(404, {
              pathname: href
            }));
            return;
          }
          let {
            path,
            submission
          } = normalizeNavigateOptions(href, future, opts, true);
          let match = getTargetMatch(matches, path);
          pendingPreventScrollReset = (opts && opts.preventScrollReset) === true;
          if (submission && isMutationMethod(submission.formMethod)) {
            handleFetcherAction(key, routeId, path, match, matches, submission);
            return;
          } // Store off the match so we can call it's shouldRevalidate on subsequent
          // revalidations

          fetchLoadMatches.set(key, {
            routeId,
            path
          });
          handleFetcherLoader(key, routeId, path, match, matches, submission);
        } // Call the action for the matched fetcher.submit(), and then handle redirects,
        // errors, and revalidation

        async function handleFetcherAction(key, routeId, path, match, requestMatches, submission) {
          interruptActiveLoads();
          fetchLoadMatches.delete(key);
          if (!match.route.action && !match.route.lazy) {
            let error = getInternalRouterError(405, {
              method: submission.formMethod,
              pathname: path,
              routeId: routeId
            });
            setFetcherError(key, routeId, error);
            return;
          } // Put this fetcher into it's submitting state

          let existingFetcher = state.fetchers.get(key);
          let fetcher = _extends({
            state: "submitting"
          }, submission, {
            data: existingFetcher && existingFetcher.data,
            " _hasFetcherDoneAnything ": true
          });
          state.fetchers.set(key, fetcher);
          updateState({
            fetchers: new Map(state.fetchers)
          }); // Call the action for the fetcher

          let abortController = new AbortController();
          let fetchRequest = createClientSideRequest(init.history, path, abortController.signal, submission);
          fetchControllers.set(key, abortController);
          let actionResult = await callLoaderOrAction("action", fetchRequest, match, requestMatches, manifest, detectErrorBoundary, router.basename);
          if (fetchRequest.signal.aborted) {
            // We can delete this so long as we weren't aborted by ou our own fetcher
            // re-submit which would have put _new_ controller is in fetchControllers
            if (fetchControllers.get(key) === abortController) {
              fetchControllers.delete(key);
            }
            return;
          }
          if (isRedirectResult(actionResult)) {
            fetchControllers.delete(key);
            fetchRedirectIds.add(key);
            let loadingFetcher = _extends({
              state: "loading"
            }, submission, {
              data: undefined,
              " _hasFetcherDoneAnything ": true
            });
            state.fetchers.set(key, loadingFetcher);
            updateState({
              fetchers: new Map(state.fetchers)
            });
            return startRedirectNavigation(state, actionResult, {
              submission,
              isFetchActionRedirect: true
            });
          } // Process any non-redirect errors thrown

          if (isErrorResult(actionResult)) {
            setFetcherError(key, routeId, actionResult.error);
            return;
          }
          if (isDeferredResult(actionResult)) {
            throw getInternalRouterError(400, {
              type: "defer-action"
            });
          } // Start the data load for current matches, or the next location if we're
          // in the middle of a navigation

          let nextLocation = state.navigation.location || state.location;
          let revalidationRequest = createClientSideRequest(init.history, nextLocation, abortController.signal);
          let routesToUse = inFlightDataRoutes || dataRoutes;
          let matches = state.navigation.state !== "idle" ? router_matchRoutes(routesToUse, state.navigation.location, init.basename) : state.matches;
          invariant(matches, "Didn't find any matches after fetcher action");
          let loadId = ++incrementingLoadId;
          fetchReloadIds.set(key, loadId);
          let loadFetcher = _extends({
            state: "loading",
            data: actionResult.data
          }, submission, {
            " _hasFetcherDoneAnything ": true
          });
          state.fetchers.set(key, loadFetcher);
          let [matchesToLoad, revalidatingFetchers] = getMatchesToLoad(init.history, state, matches, submission, nextLocation, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, fetchLoadMatches, routesToUse, init.basename, {
            [match.route.id]: actionResult.data
          }, undefined // No need to send through errors since we short circuit above
          ); // Put all revalidating fetchers into the loading state, except for the
          // current fetcher which we want to keep in it's current loading state which
          // contains it's action submission info + action data

          revalidatingFetchers.filter(rf => rf.key !== key).forEach(rf => {
            let staleKey = rf.key;
            let existingFetcher = state.fetchers.get(staleKey);
            let revalidatingFetcher = {
              state: "loading",
              data: existingFetcher && existingFetcher.data,
              formMethod: undefined,
              formAction: undefined,
              formEncType: undefined,
              formData: undefined,
              " _hasFetcherDoneAnything ": true
            };
            state.fetchers.set(staleKey, revalidatingFetcher);
            fetchControllers.set(staleKey, abortController);
          });
          updateState({
            fetchers: new Map(state.fetchers)
          });
          let {
            results,
            loaderResults,
            fetcherResults
          } = await callLoadersAndMaybeResolveData(state.matches, matches, matchesToLoad, revalidatingFetchers, revalidationRequest);
          if (abortController.signal.aborted) {
            return;
          }
          fetchReloadIds.delete(key);
          fetchControllers.delete(key);
          revalidatingFetchers.forEach(r => fetchControllers.delete(r.key));
          let redirect = findRedirect(results);
          if (redirect) {
            return startRedirectNavigation(state, redirect);
          } // Process and commit output from loaders

          let {
            loaderData,
            errors
          } = processLoaderData(state, state.matches, matchesToLoad, loaderResults, undefined, revalidatingFetchers, fetcherResults, activeDeferreds);
          let doneFetcher = {
            state: "idle",
            data: actionResult.data,
            formMethod: undefined,
            formAction: undefined,
            formEncType: undefined,
            formData: undefined,
            " _hasFetcherDoneAnything ": true
          };
          state.fetchers.set(key, doneFetcher);
          let didAbortFetchLoads = abortStaleFetchLoads(loadId); // If we are currently in a navigation loading state and this fetcher is
          // more recent than the navigation, we want the newer data so abort the
          // navigation and complete it with the fetcher data

          if (state.navigation.state === "loading" && loadId > pendingNavigationLoadId) {
            invariant(pendingAction, "Expected pending action");
            pendingNavigationController && pendingNavigationController.abort();
            completeNavigation(state.navigation.location, {
              matches,
              loaderData,
              errors,
              fetchers: new Map(state.fetchers)
            });
          } else {
            // otherwise just update with the fetcher data, preserving any existing
            // loaderData for loaders that did not need to reload.  We have to
            // manually merge here since we aren't going through completeNavigation
            updateState(_extends({
              errors,
              loaderData: mergeLoaderData(state.loaderData, loaderData, matches, errors)
            }, didAbortFetchLoads ? {
              fetchers: new Map(state.fetchers)
            } : {}));
            isRevalidationRequired = false;
          }
        } // Call the matched loader for fetcher.load(), handling redirects, errors, etc.

        async function handleFetcherLoader(key, routeId, path, match, matches, submission) {
          let existingFetcher = state.fetchers.get(key); // Put this fetcher into it's loading state

          let loadingFetcher = _extends({
            state: "loading",
            formMethod: undefined,
            formAction: undefined,
            formEncType: undefined,
            formData: undefined
          }, submission, {
            data: existingFetcher && existingFetcher.data,
            " _hasFetcherDoneAnything ": true
          });
          state.fetchers.set(key, loadingFetcher);
          updateState({
            fetchers: new Map(state.fetchers)
          }); // Call the loader for this fetcher route match

          let abortController = new AbortController();
          let fetchRequest = createClientSideRequest(init.history, path, abortController.signal);
          fetchControllers.set(key, abortController);
          let result = await callLoaderOrAction("loader", fetchRequest, match, matches, manifest, detectErrorBoundary, router.basename); // Deferred isn't supported for fetcher loads, await everything and treat it
          // as a normal load.  resolveDeferredData will return undefined if this
          // fetcher gets aborted, so we just leave result untouched and short circuit
          // below if that happens

          if (isDeferredResult(result)) {
            result = (await resolveDeferredData(result, fetchRequest.signal, true)) || result;
          } // We can delete this so long as we weren't aborted by ou our own fetcher
          // re-load which would have put _new_ controller is in fetchControllers

          if (fetchControllers.get(key) === abortController) {
            fetchControllers.delete(key);
          }
          if (fetchRequest.signal.aborted) {
            return;
          } // If the loader threw a redirect Response, start a new REPLACE navigation

          if (isRedirectResult(result)) {
            await startRedirectNavigation(state, result);
            return;
          } // Process any non-redirect errors thrown

          if (isErrorResult(result)) {
            let boundaryMatch = findNearestBoundary(state.matches, routeId);
            state.fetchers.delete(key); // TODO: In remix, this would reset to IDLE_NAVIGATION if it was a catch -
            // do we need to behave any differently with our non-redirect errors?
            // What if it was a non-redirect Response?

            updateState({
              fetchers: new Map(state.fetchers),
              errors: {
                [boundaryMatch.route.id]: result.error
              }
            });
            return;
          }
          invariant(!isDeferredResult(result), "Unhandled fetcher deferred data"); // Put the fetcher back into an idle state

          let doneFetcher = {
            state: "idle",
            data: result.data,
            formMethod: undefined,
            formAction: undefined,
            formEncType: undefined,
            formData: undefined,
            " _hasFetcherDoneAnything ": true
          };
          state.fetchers.set(key, doneFetcher);
          updateState({
            fetchers: new Map(state.fetchers)
          });
        }
        /**
         * Utility function to handle redirects returned from an action or loader.
         * Normally, a redirect "replaces" the navigation that triggered it.  So, for
         * example:
         *
         *  - user is on /a
         *  - user clicks a link to /b
         *  - loader for /b redirects to /c
         *
         * In a non-JS app the browser would track the in-flight navigation to /b and
         * then replace it with /c when it encountered the redirect response.  In
         * the end it would only ever update the URL bar with /c.
         *
         * In client-side routing using pushState/replaceState, we aim to emulate
         * this behavior and we also do not update history until the end of the
         * navigation (including processed redirects).  This means that we never
         * actually touch history until we've processed redirects, so we just use
         * the history action from the original navigation (PUSH or REPLACE).
         */

        async function startRedirectNavigation(state, redirect, _temp) {
          var _window;
          let {
            submission,
            replace,
            isFetchActionRedirect
          } = _temp === void 0 ? {} : _temp;
          if (redirect.revalidate) {
            isRevalidationRequired = true;
          }
          let redirectLocation = createLocation(state.location, redirect.location,
          // TODO: This can be removed once we get rid of useTransition in Remix v2
          _extends({
            _isRedirect: true
          }, isFetchActionRedirect ? {
            _isFetchActionRedirect: true
          } : {}));
          invariant(redirectLocation, "Expected a location on the redirect navigation"); // Check if this an absolute external redirect that goes to a new origin

          if (ABSOLUTE_URL_REGEX.test(redirect.location) && isBrowser && typeof ((_window = window) == null ? void 0 : _window.location) !== "undefined") {
            let url = init.history.createURL(redirect.location);
            let isDifferentBasename = router_stripBasename(url.pathname, init.basename || "/") == null;
            if (window.location.origin !== url.origin || isDifferentBasename) {
              if (replace) {
                window.location.replace(redirect.location);
              } else {
                window.location.assign(redirect.location);
              }
              return;
            }
          } // There's no need to abort on redirects, since we don't detect the
          // redirect until the action/loaders have settled

          pendingNavigationController = null;
          let redirectHistoryAction = replace === true ? router_Action.Replace : router_Action.Push; // Use the incoming submission if provided, fallback on the active one in
          // state.navigation

          let {
            formMethod,
            formAction,
            formEncType,
            formData
          } = state.navigation;
          if (!submission && formMethod && formAction && formData && formEncType) {
            submission = {
              formMethod,
              formAction,
              formEncType,
              formData
            };
          } // If this was a 307/308 submission we want to preserve the HTTP method and
          // re-submit the GET/POST/PUT/PATCH/DELETE as a submission navigation to the
          // redirected location

          if (redirectPreserveMethodStatusCodes.has(redirect.status) && submission && isMutationMethod(submission.formMethod)) {
            await startNavigation(redirectHistoryAction, redirectLocation, {
              submission: _extends({}, submission, {
                formAction: redirect.location
              }),
              // Preserve this flag across redirects
              preventScrollReset: pendingPreventScrollReset
            });
          } else if (isFetchActionRedirect) {
            // For a fetch action redirect, we kick off a new loading navigation
            // without the fetcher submission, but we send it along for shouldRevalidate
            await startNavigation(redirectHistoryAction, redirectLocation, {
              overrideNavigation: {
                state: "loading",
                location: redirectLocation,
                formMethod: undefined,
                formAction: undefined,
                formEncType: undefined,
                formData: undefined
              },
              fetcherSubmission: submission,
              // Preserve this flag across redirects
              preventScrollReset: pendingPreventScrollReset
            });
          } else {
            // Otherwise, we kick off a new loading navigation, preserving the
            // submission info for the duration of this navigation
            await startNavigation(redirectHistoryAction, redirectLocation, {
              overrideNavigation: {
                state: "loading",
                location: redirectLocation,
                formMethod: submission ? submission.formMethod : undefined,
                formAction: submission ? submission.formAction : undefined,
                formEncType: submission ? submission.formEncType : undefined,
                formData: submission ? submission.formData : undefined
              },
              // Preserve this flag across redirects
              preventScrollReset: pendingPreventScrollReset
            });
          }
        }
        async function callLoadersAndMaybeResolveData(currentMatches, matches, matchesToLoad, fetchersToLoad, request) {
          // Call all navigation loaders and revalidating fetcher loaders in parallel,
          // then slice off the results into separate arrays so we can handle them
          // accordingly
          let results = await Promise.all([...matchesToLoad.map(match => callLoaderOrAction("loader", request, match, matches, manifest, detectErrorBoundary, router.basename)), ...fetchersToLoad.map(f => {
            if (f.matches && f.match) {
              return callLoaderOrAction("loader", createClientSideRequest(init.history, f.path, request.signal), f.match, f.matches, manifest, detectErrorBoundary, router.basename);
            } else {
              let error = {
                type: ResultType.error,
                error: getInternalRouterError(404, {
                  pathname: f.path
                })
              };
              return error;
            }
          })]);
          let loaderResults = results.slice(0, matchesToLoad.length);
          let fetcherResults = results.slice(matchesToLoad.length);
          await Promise.all([resolveDeferredResults(currentMatches, matchesToLoad, loaderResults, request.signal, false, state.loaderData), resolveDeferredResults(currentMatches, fetchersToLoad.map(f => f.match), fetcherResults, request.signal, true)]);
          return {
            results,
            loaderResults,
            fetcherResults
          };
        }
        function interruptActiveLoads() {
          // Every interruption triggers a revalidation
          isRevalidationRequired = true; // Cancel pending route-level deferreds and mark cancelled routes for
          // revalidation

          cancelledDeferredRoutes.push(...cancelActiveDeferreds()); // Abort in-flight fetcher loads

          fetchLoadMatches.forEach((_, key) => {
            if (fetchControllers.has(key)) {
              cancelledFetcherLoads.push(key);
              abortFetcher(key);
            }
          });
        }
        function setFetcherError(key, routeId, error) {
          let boundaryMatch = findNearestBoundary(state.matches, routeId);
          deleteFetcher(key);
          updateState({
            errors: {
              [boundaryMatch.route.id]: error
            },
            fetchers: new Map(state.fetchers)
          });
        }
        function deleteFetcher(key) {
          if (fetchControllers.has(key)) abortFetcher(key);
          fetchLoadMatches.delete(key);
          fetchReloadIds.delete(key);
          fetchRedirectIds.delete(key);
          state.fetchers.delete(key);
        }
        function abortFetcher(key) {
          let controller = fetchControllers.get(key);
          invariant(controller, "Expected fetch controller: " + key);
          controller.abort();
          fetchControllers.delete(key);
        }
        function markFetchersDone(keys) {
          for (let key of keys) {
            let fetcher = getFetcher(key);
            let doneFetcher = {
              state: "idle",
              data: fetcher.data,
              formMethod: undefined,
              formAction: undefined,
              formEncType: undefined,
              formData: undefined,
              " _hasFetcherDoneAnything ": true
            };
            state.fetchers.set(key, doneFetcher);
          }
        }
        function markFetchRedirectsDone() {
          let doneKeys = [];
          for (let key of fetchRedirectIds) {
            let fetcher = state.fetchers.get(key);
            invariant(fetcher, "Expected fetcher: " + key);
            if (fetcher.state === "loading") {
              fetchRedirectIds.delete(key);
              doneKeys.push(key);
            }
          }
          markFetchersDone(doneKeys);
        }
        function abortStaleFetchLoads(landedId) {
          let yeetedKeys = [];
          for (let [key, id] of fetchReloadIds) {
            if (id < landedId) {
              let fetcher = state.fetchers.get(key);
              invariant(fetcher, "Expected fetcher: " + key);
              if (fetcher.state === "loading") {
                abortFetcher(key);
                fetchReloadIds.delete(key);
                yeetedKeys.push(key);
              }
            }
          }
          markFetchersDone(yeetedKeys);
          return yeetedKeys.length > 0;
        }
        function getBlocker(key, fn) {
          let blocker = state.blockers.get(key) || IDLE_BLOCKER;
          if (blockerFunctions.get(key) !== fn) {
            blockerFunctions.set(key, fn);
          }
          return blocker;
        }
        function deleteBlocker(key) {
          state.blockers.delete(key);
          blockerFunctions.delete(key);
        } // Utility function to update blockers, ensuring valid state transitions

        function updateBlocker(key, newBlocker) {
          let blocker = state.blockers.get(key) || IDLE_BLOCKER; // Poor mans state machine :)
          // https://mermaid.live/edit#pako:eNqVkc9OwzAMxl8l8nnjAYrEtDIOHEBIgwvKJTReGy3_lDpIqO27k6awMG0XcrLlnz87nwdonESogKXXBuE79rq75XZO3-yHds0RJVuv70YrPlUrCEe2HfrORS3rubqZfuhtpg5C9wk5tZ4VKcRUq88q9Z8RS0-48cE1iHJkL0ugbHuFLus9L6spZy8nX9MP2CNdomVaposqu3fGayT8T8-jJQwhepo_UtpgBQaDEUom04dZhAN1aJBDlUKJBxE1ceB2Smj0Mln-IBW5AFU2dwUiktt_2Qaq2dBfaKdEup85UV7Yd-dKjlnkabl2Pvr0DTkTreM

          invariant(blocker.state === "unblocked" && newBlocker.state === "blocked" || blocker.state === "blocked" && newBlocker.state === "blocked" || blocker.state === "blocked" && newBlocker.state === "proceeding" || blocker.state === "blocked" && newBlocker.state === "unblocked" || blocker.state === "proceeding" && newBlocker.state === "unblocked", "Invalid blocker state transition: " + blocker.state + " -> " + newBlocker.state);
          state.blockers.set(key, newBlocker);
          updateState({
            blockers: new Map(state.blockers)
          });
        }
        function shouldBlockNavigation(_ref2) {
          let {
            currentLocation,
            nextLocation,
            historyAction
          } = _ref2;
          if (blockerFunctions.size === 0) {
            return;
          } // We ony support a single active blocker at the moment since we don't have
          // any compelling use cases for multi-blocker yet

          if (blockerFunctions.size > 1) {
            warning(false, "A router only supports one blocker at a time");
          }
          let entries = Array.from(blockerFunctions.entries());
          let [blockerKey, blockerFunction] = entries[entries.length - 1];
          let blocker = state.blockers.get(blockerKey);
          if (blocker && blocker.state === "proceeding") {
            // If the blocker is currently proceeding, we don't need to re-check
            // it and can let this navigation continue
            return;
          } // At this point, we know we're unblocked/blocked so we need to check the
          // user-provided blocker function

          if (blockerFunction({
            currentLocation,
            nextLocation,
            historyAction
          })) {
            return blockerKey;
          }
        }
        function cancelActiveDeferreds(predicate) {
          let cancelledRouteIds = [];
          activeDeferreds.forEach((dfd, routeId) => {
            if (!predicate || predicate(routeId)) {
              // Cancel the deferred - but do not remove from activeDeferreds here -
              // we rely on the subscribers to do that so our tests can assert proper
              // cleanup via _internalActiveDeferreds
              dfd.cancel();
              cancelledRouteIds.push(routeId);
              activeDeferreds.delete(routeId);
            }
          });
          return cancelledRouteIds;
        } // Opt in to capturing and reporting scroll positions during navigations,
        // used by the <ScrollRestoration> component

        function enableScrollRestoration(positions, getPosition, getKey) {
          savedScrollPositions = positions;
          getScrollPosition = getPosition;
          getScrollRestorationKey = getKey || (location => location.key); // Perform initial hydration scroll restoration, since we miss the boat on
          // the initial updateState() because we've not yet rendered <ScrollRestoration/>
          // and therefore have no savedScrollPositions available

          if (!initialScrollRestored && state.navigation === IDLE_NAVIGATION) {
            initialScrollRestored = true;
            let y = getSavedScrollPosition(state.location, state.matches);
            if (y != null) {
              updateState({
                restoreScrollPosition: y
              });
            }
          }
          return () => {
            savedScrollPositions = null;
            getScrollPosition = null;
            getScrollRestorationKey = null;
          };
        }
        function saveScrollPosition(location, matches) {
          if (savedScrollPositions && getScrollRestorationKey && getScrollPosition) {
            let userMatches = matches.map(m => createUseMatchesMatch(m, state.loaderData));
            let key = getScrollRestorationKey(location, userMatches) || location.key;
            savedScrollPositions[key] = getScrollPosition();
          }
        }
        function getSavedScrollPosition(location, matches) {
          if (savedScrollPositions && getScrollRestorationKey && getScrollPosition) {
            let userMatches = matches.map(m => createUseMatchesMatch(m, state.loaderData));
            let key = getScrollRestorationKey(location, userMatches) || location.key;
            let y = savedScrollPositions[key];
            if (typeof y === "number") {
              return y;
            }
          }
          return null;
        }
        function _internalSetRoutes(newRoutes) {
          inFlightDataRoutes = newRoutes;
        }
        router = {
          get basename() {
            return init.basename;
          },
          get state() {
            return state;
          },
          get routes() {
            return dataRoutes;
          },
          initialize,
          subscribe,
          enableScrollRestoration,
          navigate,
          fetch,
          revalidate,
          // Passthrough to history-aware createHref used by useHref so we get proper
          // hash-aware URLs in DOM paths
          createHref: to => init.history.createHref(to),
          encodeLocation: to => init.history.encodeLocation(to),
          getFetcher,
          deleteFetcher,
          dispose,
          getBlocker,
          deleteBlocker,
          _internalFetchControllers: fetchControllers,
          _internalActiveDeferreds: activeDeferreds,
          // TODO: Remove setRoutes, it's temporary to avoid dealing with
          // updating the tree while validating the update algorithm.
          _internalSetRoutes
        };
        return router;
      } //#endregion
      ////////////////////////////////////////////////////////////////////////////////
      //#region createStaticHandler
      ////////////////////////////////////////////////////////////////////////////////

      const UNSAFE_DEFERRED_SYMBOL = Symbol("deferred");
      function createStaticHandler(routes, opts) {
        invariant(routes.length > 0, "You must provide a non-empty routes array to createStaticHandler");
        let manifest = {};
        let detectErrorBoundary = (opts == null ? void 0 : opts.detectErrorBoundary) || defaultDetectErrorBoundary;
        let dataRoutes = convertRoutesToDataRoutes(routes, detectErrorBoundary, undefined, manifest);
        let basename = (opts ? opts.basename : null) || "/";
        /**
         * The query() method is intended for document requests, in which we want to
         * call an optional action and potentially multiple loaders for all nested
         * routes.  It returns a StaticHandlerContext object, which is very similar
         * to the router state (location, loaderData, actionData, errors, etc.) and
         * also adds SSR-specific information such as the statusCode and headers
         * from action/loaders Responses.
         *
         * It _should_ never throw and should report all errors through the
         * returned context.errors object, properly associating errors to their error
         * boundary.  Additionally, it tracks _deepestRenderedBoundaryId which can be
         * used to emulate React error boundaries during SSr by performing a second
         * pass only down to the boundaryId.
         *
         * The one exception where we do not return a StaticHandlerContext is when a
         * redirect response is returned or thrown from any action/loader.  We
         * propagate that out and return the raw Response so the HTTP server can
         * return it directly.
         */

        async function query(request, _temp2) {
          let {
            requestContext
          } = _temp2 === void 0 ? {} : _temp2;
          let url = new URL(request.url);
          let method = request.method;
          let location = createLocation("", createPath(url), null, "default");
          let matches = router_matchRoutes(dataRoutes, location, basename); // SSR supports HEAD requests while SPA doesn't

          if (!isValidMethod(method) && method !== "HEAD") {
            let error = getInternalRouterError(405, {
              method
            });
            let {
              matches: methodNotAllowedMatches,
              route
            } = getShortCircuitMatches(dataRoutes);
            return {
              basename,
              location,
              matches: methodNotAllowedMatches,
              loaderData: {},
              actionData: null,
              errors: {
                [route.id]: error
              },
              statusCode: error.status,
              loaderHeaders: {},
              actionHeaders: {},
              activeDeferreds: null
            };
          } else if (!matches) {
            let error = getInternalRouterError(404, {
              pathname: location.pathname
            });
            let {
              matches: notFoundMatches,
              route
            } = getShortCircuitMatches(dataRoutes);
            return {
              basename,
              location,
              matches: notFoundMatches,
              loaderData: {},
              actionData: null,
              errors: {
                [route.id]: error
              },
              statusCode: error.status,
              loaderHeaders: {},
              actionHeaders: {},
              activeDeferreds: null
            };
          }
          let result = await queryImpl(request, location, matches, requestContext);
          if (isResponse(result)) {
            return result;
          } // When returning StaticHandlerContext, we patch back in the location here
          // since we need it for React Context.  But this helps keep our submit and
          // loadRouteData operating on a Request instead of a Location

          return _extends({
            location,
            basename
          }, result);
        }
        /**
         * The queryRoute() method is intended for targeted route requests, either
         * for fetch ?_data requests or resource route requests.  In this case, we
         * are only ever calling a single action or loader, and we are returning the
         * returned value directly.  In most cases, this will be a Response returned
         * from the action/loader, but it may be a primitive or other value as well -
         * and in such cases the calling context should handle that accordingly.
         *
         * We do respect the throw/return differentiation, so if an action/loader
         * throws, then this method will throw the value.  This is important so we
         * can do proper boundary identification in Remix where a thrown Response
         * must go to the Catch Boundary but a returned Response is happy-path.
         *
         * One thing to note is that any Router-initiated Errors that make sense
         * to associate with a status code will be thrown as an ErrorResponse
         * instance which include the raw Error, such that the calling context can
         * serialize the error as they see fit while including the proper response
         * code.  Examples here are 404 and 405 errors that occur prior to reaching
         * any user-defined loaders.
         */

        async function queryRoute(request, _temp3) {
          let {
            routeId,
            requestContext
          } = _temp3 === void 0 ? {} : _temp3;
          let url = new URL(request.url);
          let method = request.method;
          let location = createLocation("", createPath(url), null, "default");
          let matches = router_matchRoutes(dataRoutes, location, basename); // SSR supports HEAD requests while SPA doesn't

          if (!isValidMethod(method) && method !== "HEAD" && method !== "OPTIONS") {
            throw getInternalRouterError(405, {
              method
            });
          } else if (!matches) {
            throw getInternalRouterError(404, {
              pathname: location.pathname
            });
          }
          let match = routeId ? matches.find(m => m.route.id === routeId) : getTargetMatch(matches, location);
          if (routeId && !match) {
            throw getInternalRouterError(403, {
              pathname: location.pathname,
              routeId
            });
          } else if (!match) {
            // This should never hit I don't think?
            throw getInternalRouterError(404, {
              pathname: location.pathname
            });
          }
          let result = await queryImpl(request, location, matches, requestContext, match);
          if (isResponse(result)) {
            return result;
          }
          let error = result.errors ? Object.values(result.errors)[0] : undefined;
          if (error !== undefined) {
            // If we got back result.errors, that means the loader/action threw
            // _something_ that wasn't a Response, but it's not guaranteed/required
            // to be an `instanceof Error` either, so we have to use throw here to
            // preserve the "error" state outside of queryImpl.
            throw error;
          } // Pick off the right state value to return

          if (result.actionData) {
            return Object.values(result.actionData)[0];
          }
          if (result.loaderData) {
            var _result$activeDeferre;
            let data = Object.values(result.loaderData)[0];
            if ((_result$activeDeferre = result.activeDeferreds) != null && _result$activeDeferre[match.route.id]) {
              data[UNSAFE_DEFERRED_SYMBOL] = result.activeDeferreds[match.route.id];
            }
            return data;
          }
          return undefined;
        }
        async function queryImpl(request, location, matches, requestContext, routeMatch) {
          invariant(request.signal, "query()/queryRoute() requests must contain an AbortController signal");
          try {
            if (isMutationMethod(request.method.toLowerCase())) {
              let result = await submit(request, matches, routeMatch || getTargetMatch(matches, location), requestContext, routeMatch != null);
              return result;
            }
            let result = await loadRouteData(request, matches, requestContext, routeMatch);
            return isResponse(result) ? result : _extends({}, result, {
              actionData: null,
              actionHeaders: {}
            });
          } catch (e) {
            // If the user threw/returned a Response in callLoaderOrAction, we throw
            // it to bail out and then return or throw here based on whether the user
            // returned or threw
            if (isQueryRouteResponse(e)) {
              if (e.type === ResultType.error && !isRedirectResponse(e.response)) {
                throw e.response;
              }
              return e.response;
            } // Redirects are always returned since they don't propagate to catch
            // boundaries

            if (isRedirectResponse(e)) {
              return e;
            }
            throw e;
          }
        }
        async function submit(request, matches, actionMatch, requestContext, isRouteRequest) {
          let result;
          if (!actionMatch.route.action && !actionMatch.route.lazy) {
            let error = getInternalRouterError(405, {
              method: request.method,
              pathname: new URL(request.url).pathname,
              routeId: actionMatch.route.id
            });
            if (isRouteRequest) {
              throw error;
            }
            result = {
              type: ResultType.error,
              error
            };
          } else {
            result = await callLoaderOrAction("action", request, actionMatch, matches, manifest, detectErrorBoundary, basename, true, isRouteRequest, requestContext);
            if (request.signal.aborted) {
              let method = isRouteRequest ? "queryRoute" : "query";
              throw new Error(method + "() call aborted");
            }
          }
          if (isRedirectResult(result)) {
            // Uhhhh - this should never happen, we should always throw these from
            // callLoaderOrAction, but the type narrowing here keeps TS happy and we
            // can get back on the "throw all redirect responses" train here should
            // this ever happen :/
            throw new Response(null, {
              status: result.status,
              headers: {
                Location: result.location
              }
            });
          }
          if (isDeferredResult(result)) {
            let error = getInternalRouterError(400, {
              type: "defer-action"
            });
            if (isRouteRequest) {
              throw error;
            }
            result = {
              type: ResultType.error,
              error
            };
          }
          if (isRouteRequest) {
            // Note: This should only be non-Response values if we get here, since
            // isRouteRequest should throw any Response received in callLoaderOrAction
            if (isErrorResult(result)) {
              throw result.error;
            }
            return {
              matches: [actionMatch],
              loaderData: {},
              actionData: {
                [actionMatch.route.id]: result.data
              },
              errors: null,
              // Note: statusCode + headers are unused here since queryRoute will
              // return the raw Response or value
              statusCode: 200,
              loaderHeaders: {},
              actionHeaders: {},
              activeDeferreds: null
            };
          }
          if (isErrorResult(result)) {
            // Store off the pending error - we use it to determine which loaders
            // to call and will commit it when we complete the navigation
            let boundaryMatch = findNearestBoundary(matches, actionMatch.route.id);
            let context = await loadRouteData(request, matches, requestContext, undefined, {
              [boundaryMatch.route.id]: result.error
            }); // action status codes take precedence over loader status codes

            return _extends({}, context, {
              statusCode: router_isRouteErrorResponse(result.error) ? result.error.status : 500,
              actionData: null,
              actionHeaders: _extends({}, result.headers ? {
                [actionMatch.route.id]: result.headers
              } : {})
            });
          } // Create a GET request for the loaders

          let loaderRequest = new Request(request.url, {
            headers: request.headers,
            redirect: request.redirect,
            signal: request.signal
          });
          let context = await loadRouteData(loaderRequest, matches, requestContext);
          return _extends({}, context, result.statusCode ? {
            statusCode: result.statusCode
          } : {}, {
            actionData: {
              [actionMatch.route.id]: result.data
            },
            actionHeaders: _extends({}, result.headers ? {
              [actionMatch.route.id]: result.headers
            } : {})
          });
        }
        async function loadRouteData(request, matches, requestContext, routeMatch, pendingActionError) {
          let isRouteRequest = routeMatch != null; // Short circuit if we have no loaders to run (queryRoute())

          if (isRouteRequest && !(routeMatch != null && routeMatch.route.loader) && !(routeMatch != null && routeMatch.route.lazy)) {
            throw getInternalRouterError(400, {
              method: request.method,
              pathname: new URL(request.url).pathname,
              routeId: routeMatch == null ? void 0 : routeMatch.route.id
            });
          }
          let requestMatches = routeMatch ? [routeMatch] : getLoaderMatchesUntilBoundary(matches, Object.keys(pendingActionError || {})[0]);
          let matchesToLoad = requestMatches.filter(m => m.route.loader || m.route.lazy); // Short circuit if we have no loaders to run (query())

          if (matchesToLoad.length === 0) {
            return {
              matches,
              // Add a null for all matched routes for proper revalidation on the client
              loaderData: matches.reduce((acc, m) => Object.assign(acc, {
                [m.route.id]: null
              }), {}),
              errors: pendingActionError || null,
              statusCode: 200,
              loaderHeaders: {},
              activeDeferreds: null
            };
          }
          let results = await Promise.all([...matchesToLoad.map(match => callLoaderOrAction("loader", request, match, matches, manifest, detectErrorBoundary, basename, true, isRouteRequest, requestContext))]);
          if (request.signal.aborted) {
            let method = isRouteRequest ? "queryRoute" : "query";
            throw new Error(method + "() call aborted");
          } // Process and commit output from loaders

          let activeDeferreds = new Map();
          let context = processRouteLoaderData(matches, matchesToLoad, results, pendingActionError, activeDeferreds); // Add a null for any non-loader matches for proper revalidation on the client

          let executedLoaders = new Set(matchesToLoad.map(match => match.route.id));
          matches.forEach(match => {
            if (!executedLoaders.has(match.route.id)) {
              context.loaderData[match.route.id] = null;
            }
          });
          return _extends({}, context, {
            matches,
            activeDeferreds: activeDeferreds.size > 0 ? Object.fromEntries(activeDeferreds.entries()) : null
          });
        }
        return {
          dataRoutes,
          query,
          queryRoute
        };
      } //#endregion
      ////////////////////////////////////////////////////////////////////////////////
      //#region Helpers
      ////////////////////////////////////////////////////////////////////////////////

      /**
       * Given an existing StaticHandlerContext and an error thrown at render time,
       * provide an updated StaticHandlerContext suitable for a second SSR render
       */

      function getStaticContextFromError(routes, context, error) {
        let newContext = _extends({}, context, {
          statusCode: 500,
          errors: {
            [context._deepestRenderedBoundaryId || routes[0].id]: error
          }
        });
        return newContext;
      }
      function isSubmissionNavigation(opts) {
        return opts != null && "formData" in opts;
      } // Normalize navigation options by converting formMethod=GET formData objects to
      // URLSearchParams so they behave identically to links with query params

      function normalizeNavigateOptions(to, future, opts, isFetcher) {
        if (isFetcher === void 0) {
          isFetcher = false;
        }
        let path = typeof to === "string" ? to : createPath(to); // Return location verbatim on non-submission navigations

        if (!opts || !isSubmissionNavigation(opts)) {
          return {
            path
          };
        }
        if (opts.formMethod && !isValidMethod(opts.formMethod)) {
          return {
            path,
            error: getInternalRouterError(405, {
              method: opts.formMethod
            })
          };
        } // Create a Submission on non-GET navigations

        let submission;
        if (opts.formData) {
          let formMethod = opts.formMethod || "get";
          submission = {
            formMethod: future.v7_normalizeFormMethod ? formMethod.toUpperCase() : formMethod.toLowerCase(),
            formAction: stripHashFromPath(path),
            formEncType: opts && opts.formEncType || "application/x-www-form-urlencoded",
            formData: opts.formData
          };
          if (isMutationMethod(submission.formMethod)) {
            return {
              path,
              submission
            };
          }
        } // Flatten submission onto URLSearchParams for GET submissions

        let parsedPath = router_parsePath(path);
        let searchParams = convertFormDataToSearchParams(opts.formData); // Since fetcher GET submissions only run a single loader (as opposed to
        // navigation GET submissions which run all loaders), we need to preserve
        // any incoming ?index params

        if (isFetcher && parsedPath.search && hasNakedIndexQuery(parsedPath.search)) {
          searchParams.append("index", "");
        }
        parsedPath.search = "?" + searchParams;
        return {
          path: createPath(parsedPath),
          submission
        };
      } // Filter out all routes below any caught error as they aren't going to
      // render so we don't need to load them

      function getLoaderMatchesUntilBoundary(matches, boundaryId) {
        let boundaryMatches = matches;
        if (boundaryId) {
          let index = matches.findIndex(m => m.route.id === boundaryId);
          if (index >= 0) {
            boundaryMatches = matches.slice(0, index);
          }
        }
        return boundaryMatches;
      }
      function getMatchesToLoad(history, state, matches, submission, location, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, fetchLoadMatches, routesToUse, basename, pendingActionData, pendingError) {
        let actionResult = pendingError ? Object.values(pendingError)[0] : pendingActionData ? Object.values(pendingActionData)[0] : undefined;
        let currentUrl = history.createURL(state.location);
        let nextUrl = history.createURL(location);
        let defaultShouldRevalidate =
        // Forced revalidation due to submission, useRevalidate, or X-Remix-Revalidate
        isRevalidationRequired ||
        // Clicked the same link, resubmitted a GET form
        currentUrl.toString() === nextUrl.toString() ||
        // Search params affect all loaders
        currentUrl.search !== nextUrl.search; // Pick navigation matches that are net-new or qualify for revalidation

        let boundaryId = pendingError ? Object.keys(pendingError)[0] : undefined;
        let boundaryMatches = getLoaderMatchesUntilBoundary(matches, boundaryId);
        let navigationMatches = boundaryMatches.filter((match, index) => {
          if (match.route.lazy) {
            // We haven't loaded this route yet so we don't know if it's got a loader!
            return true;
          }
          if (match.route.loader == null) {
            return false;
          } // Always call the loader on new route instances and pending defer cancellations

          if (isNewLoader(state.loaderData, state.matches[index], match) || cancelledDeferredRoutes.some(id => id === match.route.id)) {
            return true;
          } // This is the default implementation for when we revalidate.  If the route
          // provides it's own implementation, then we give them full control but
          // provide this value so they can leverage it if needed after they check
          // their own specific use cases

          let currentRouteMatch = state.matches[index];
          let nextRouteMatch = match;
          return shouldRevalidateLoader(match, _extends({
            currentUrl,
            currentParams: currentRouteMatch.params,
            nextUrl,
            nextParams: nextRouteMatch.params
          }, submission, {
            actionResult,
            defaultShouldRevalidate: defaultShouldRevalidate || isNewRouteInstance(currentRouteMatch, nextRouteMatch)
          }));
        }); // Pick fetcher.loads that need to be revalidated

        let revalidatingFetchers = [];
        fetchLoadMatches.forEach((f, key) => {
          // Don't revalidate if fetcher won't be present in the subsequent render
          if (!matches.some(m => m.route.id === f.routeId)) {
            return;
          }
          let fetcherMatches = router_matchRoutes(routesToUse, f.path, basename); // If the fetcher path no longer matches, push it in with null matches so
          // we can trigger a 404 in callLoadersAndMaybeResolveData

          if (!fetcherMatches) {
            revalidatingFetchers.push(_extends({
              key
            }, f, {
              matches: null,
              match: null
            }));
            return;
          }
          let fetcherMatch = getTargetMatch(fetcherMatches, f.path);
          if (cancelledFetcherLoads.includes(key)) {
            revalidatingFetchers.push(_extends({
              key,
              matches: fetcherMatches,
              match: fetcherMatch
            }, f));
            return;
          } // Revalidating fetchers are decoupled from the route matches since they
          // hit a static href, so they _always_ check shouldRevalidate and the
          // default is strictly if a revalidation is explicitly required (action
          // submissions, useRevalidator, X-Remix-Revalidate).

          let shouldRevalidate = shouldRevalidateLoader(fetcherMatch, _extends({
            currentUrl,
            currentParams: state.matches[state.matches.length - 1].params,
            nextUrl,
            nextParams: matches[matches.length - 1].params
          }, submission, {
            actionResult,
            defaultShouldRevalidate
          }));
          if (shouldRevalidate) {
            revalidatingFetchers.push(_extends({
              key,
              matches: fetcherMatches,
              match: fetcherMatch
            }, f));
          }
        });
        return [navigationMatches, revalidatingFetchers];
      }
      function isNewLoader(currentLoaderData, currentMatch, match) {
        let isNew =
        // [a] -> [a, b]
        !currentMatch ||
        // [a, b] -> [a, c]
        match.route.id !== currentMatch.route.id; // Handle the case that we don't have data for a re-used route, potentially
        // from a prior error or from a cancelled pending deferred

        let isMissingData = currentLoaderData[match.route.id] === undefined; // Always load if this is a net-new route or we don't yet have data

        return isNew || isMissingData;
      }
      function isNewRouteInstance(currentMatch, match) {
        let currentPath = currentMatch.route.path;
        return (
          // param change for this match, /users/123 -> /users/456
          currentMatch.pathname !== match.pathname ||
          // splat param changed, which is not present in match.path
          // e.g. /files/images/avatar.jpg -> files/finances.xls
          currentPath != null && currentPath.endsWith("*") && currentMatch.params["*"] !== match.params["*"]
        );
      }
      function shouldRevalidateLoader(loaderMatch, arg) {
        if (loaderMatch.route.shouldRevalidate) {
          let routeChoice = loaderMatch.route.shouldRevalidate(arg);
          if (typeof routeChoice === "boolean") {
            return routeChoice;
          }
        }
        return arg.defaultShouldRevalidate;
      }
      /**
       * Execute route.lazy() methods to lazily load route modules (loader, action,
       * shouldRevalidate) and update the routeManifest in place which shares objects
       * with dataRoutes so those get updated as well.
       */

      async function loadLazyRouteModule(route, detectErrorBoundary, manifest) {
        if (!route.lazy) {
          return;
        }
        let lazyRoute = await route.lazy(); // If the lazy route function was executed and removed by another parallel
        // call then we can return - first lazy() to finish wins because the return
        // value of lazy is expected to be static

        if (!route.lazy) {
          return;
        }
        let routeToUpdate = manifest[route.id];
        invariant(routeToUpdate, "No route found in manifest"); // Update the route in place.  This should be safe because there's no way
        // we could yet be sitting on this route as we can't get there without
        // resolving lazy() first.
        //
        // This is different than the HMR "update" use-case where we may actively be
        // on the route being updated.  The main concern boils down to "does this
        // mutation affect any ongoing navigations or any current state.matches
        // values?".  If not, it should be safe to update in place.

        let routeUpdates = {};
        for (let lazyRouteProperty in lazyRoute) {
          let staticRouteValue = routeToUpdate[lazyRouteProperty];
          let isPropertyStaticallyDefined = staticRouteValue !== undefined &&
          // This property isn't static since it should always be updated based
          // on the route updates
          lazyRouteProperty !== "hasErrorBoundary";
          warning(!isPropertyStaticallyDefined, "Route \"" + routeToUpdate.id + "\" has a static property \"" + lazyRouteProperty + "\" " + "defined but its lazy function is also returning a value for this property. " + ("The lazy route property \"" + lazyRouteProperty + "\" will be ignored."));
          if (!isPropertyStaticallyDefined && !immutableRouteKeys.has(lazyRouteProperty)) {
            routeUpdates[lazyRouteProperty] = lazyRoute[lazyRouteProperty];
          }
        } // Mutate the route with the provided updates.  Do this first so we pass
        // the updated version to detectErrorBoundary

        Object.assign(routeToUpdate, routeUpdates); // Mutate the `hasErrorBoundary` property on the route based on the route
        // updates and remove the `lazy` function so we don't resolve the lazy
        // route again.

        Object.assign(routeToUpdate, {
          // To keep things framework agnostic, we use the provided
          // `detectErrorBoundary` function to set the `hasErrorBoundary` route
          // property since the logic will differ between frameworks.
          hasErrorBoundary: detectErrorBoundary(_extends({}, routeToUpdate)),
          lazy: undefined
        });
      }
      async function callLoaderOrAction(type, request, match, matches, manifest, detectErrorBoundary, basename, isStaticRequest, isRouteRequest, requestContext) {
        if (basename === void 0) {
          basename = "/";
        }
        if (isStaticRequest === void 0) {
          isStaticRequest = false;
        }
        if (isRouteRequest === void 0) {
          isRouteRequest = false;
        }
        let resultType;
        let result;
        let onReject;
        let runHandler = handler => {
          // Setup a promise we can race against so that abort signals short circuit
          let reject;
          let abortPromise = new Promise((_, r) => reject = r);
          onReject = () => reject();
          request.signal.addEventListener("abort", onReject);
          return Promise.race([handler({
            request,
            params: match.params,
            context: requestContext
          }), abortPromise]);
        };
        try {
          let handler = match.route[type];
          if (match.route.lazy) {
            if (handler) {
              // Run statically defined handler in parallel with lazy()
              let values = await Promise.all([runHandler(handler), loadLazyRouteModule(match.route, detectErrorBoundary, manifest)]);
              result = values[0];
            } else {
              // Load lazy route module, then run any returned handler
              await loadLazyRouteModule(match.route, detectErrorBoundary, manifest);
              handler = match.route[type];
              if (handler) {
                // Handler still run even if we got interrupted to maintain consistency
                // with un-abortable behavior of handler execution on non-lazy or
                // previously-lazy-loaded routes
                result = await runHandler(handler);
              } else if (type === "action") {
                throw getInternalRouterError(405, {
                  method: request.method,
                  pathname: new URL(request.url).pathname,
                  routeId: match.route.id
                });
              } else {
                // lazy() route has no loader to run.  Short circuit here so we don't
                // hit the invariant below that errors on returning undefined.
                return {
                  type: ResultType.data,
                  data: undefined
                };
              }
            }
          } else {
            invariant(handler, "Could not find the " + type + " to run on the \"" + match.route.id + "\" route");
            result = await runHandler(handler);
          }
          invariant(result !== undefined, "You defined " + (type === "action" ? "an action" : "a loader") + " for route " + ("\"" + match.route.id + "\" but didn't return anything from your `" + type + "` ") + "function. Please return a value or `null`.");
        } catch (e) {
          resultType = ResultType.error;
          result = e;
        } finally {
          if (onReject) {
            request.signal.removeEventListener("abort", onReject);
          }
        }
        if (isResponse(result)) {
          let status = result.status; // Process redirects

          if (redirectStatusCodes.has(status)) {
            let location = result.headers.get("Location");
            invariant(location, "Redirects returned/thrown from loaders/actions must have a Location header"); // Support relative routing in internal redirects

            if (!ABSOLUTE_URL_REGEX.test(location)) {
              let activeMatches = matches.slice(0, matches.indexOf(match) + 1);
              let routePathnames = getPathContributingMatches(activeMatches).map(match => match.pathnameBase);
              let resolvedLocation = router_resolveTo(location, routePathnames, new URL(request.url).pathname);
              invariant(createPath(resolvedLocation), "Unable to resolve redirect location: " + location); // Prepend the basename to the redirect location if we have one

              if (basename) {
                let path = resolvedLocation.pathname;
                resolvedLocation.pathname = path === "/" ? basename : router_joinPaths([basename, path]);
              }
              location = createPath(resolvedLocation);
            } else if (!isStaticRequest) {
              // Strip off the protocol+origin for same-origin + same-basename absolute
              // redirects. If this is a static request, we can let it go back to the
              // browser as-is
              let currentUrl = new URL(request.url);
              let url = location.startsWith("//") ? new URL(currentUrl.protocol + location) : new URL(location);
              let isSameBasename = router_stripBasename(url.pathname, basename) != null;
              if (url.origin === currentUrl.origin && isSameBasename) {
                location = url.pathname + url.search + url.hash;
              }
            } // Don't process redirects in the router during static requests requests.
            // Instead, throw the Response and let the server handle it with an HTTP
            // redirect.  We also update the Location header in place in this flow so
            // basename and relative routing is taken into account

            if (isStaticRequest) {
              result.headers.set("Location", location);
              throw result;
            }
            return {
              type: ResultType.redirect,
              status,
              location,
              revalidate: result.headers.get("X-Remix-Revalidate") !== null
            };
          } // For SSR single-route requests, we want to hand Responses back directly
          // without unwrapping.  We do this with the QueryRouteResponse wrapper
          // interface so we can know whether it was returned or thrown

          if (isRouteRequest) {
            // eslint-disable-next-line no-throw-literal
            throw {
              type: resultType || ResultType.data,
              response: result
            };
          }
          let data;
          let contentType = result.headers.get("Content-Type"); // Check between word boundaries instead of startsWith() due to the last
          // paragraph of https://httpwg.org/specs/rfc9110.html#field.content-type

          if (contentType && /\bapplication\/json\b/.test(contentType)) {
            data = await result.json();
          } else {
            data = await result.text();
          }
          if (resultType === ResultType.error) {
            return {
              type: resultType,
              error: new ErrorResponse(status, result.statusText, data),
              headers: result.headers
            };
          }
          return {
            type: ResultType.data,
            data,
            statusCode: result.status,
            headers: result.headers
          };
        }
        if (resultType === ResultType.error) {
          return {
            type: resultType,
            error: result
          };
        }
        if (isDeferredData(result)) {
          var _result$init, _result$init2;
          return {
            type: ResultType.deferred,
            deferredData: result,
            statusCode: (_result$init = result.init) == null ? void 0 : _result$init.status,
            headers: ((_result$init2 = result.init) == null ? void 0 : _result$init2.headers) && new Headers(result.init.headers)
          };
        }
        return {
          type: ResultType.data,
          data: result
        };
      } // Utility method for creating the Request instances for loaders/actions during
      // client-side navigations and fetches.  During SSR we will always have a
      // Request instance from the static handler (query/queryRoute)

      function createClientSideRequest(history, location, signal, submission) {
        let url = history.createURL(stripHashFromPath(location)).toString();
        let init = {
          signal
        };
        if (submission && isMutationMethod(submission.formMethod)) {
          let {
            formMethod,
            formEncType,
            formData
          } = submission; // Didn't think we needed this but it turns out unlike other methods, patch
          // won't be properly normalized to uppercase and results in a 405 error.
          // See: https://fetch.spec.whatwg.org/#concept-method

          init.method = formMethod.toUpperCase();
          init.body = formEncType === "application/x-www-form-urlencoded" ? convertFormDataToSearchParams(formData) : formData;
        } // Content-Type is inferred (https://fetch.spec.whatwg.org/#dom-request)

        return new Request(url, init);
      }
      function convertFormDataToSearchParams(formData) {
        let searchParams = new URLSearchParams();
        for (let [key, value] of formData.entries()) {
          // https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#converting-an-entry-list-to-a-list-of-name-value-pairs
          searchParams.append(key, value instanceof File ? value.name : value);
        }
        return searchParams;
      }
      function processRouteLoaderData(matches, matchesToLoad, results, pendingError, activeDeferreds) {
        // Fill in loaderData/errors from our loaders
        let loaderData = {};
        let errors = null;
        let statusCode;
        let foundError = false;
        let loaderHeaders = {}; // Process loader results into state.loaderData/state.errors

        results.forEach((result, index) => {
          let id = matchesToLoad[index].route.id;
          invariant(!isRedirectResult(result), "Cannot handle redirect results in processLoaderData");
          if (isErrorResult(result)) {
            // Look upwards from the matched route for the closest ancestor
            // error boundary, defaulting to the root match
            let boundaryMatch = findNearestBoundary(matches, id);
            let error = result.error; // If we have a pending action error, we report it at the highest-route
            // that throws a loader error, and then clear it out to indicate that
            // it was consumed

            if (pendingError) {
              error = Object.values(pendingError)[0];
              pendingError = undefined;
            }
            errors = errors || {}; // Prefer higher error values if lower errors bubble to the same boundary

            if (errors[boundaryMatch.route.id] == null) {
              errors[boundaryMatch.route.id] = error;
            } // Clear our any prior loaderData for the throwing route

            loaderData[id] = undefined; // Once we find our first (highest) error, we set the status code and
            // prevent deeper status codes from overriding

            if (!foundError) {
              foundError = true;
              statusCode = router_isRouteErrorResponse(result.error) ? result.error.status : 500;
            }
            if (result.headers) {
              loaderHeaders[id] = result.headers;
            }
          } else {
            if (isDeferredResult(result)) {
              activeDeferreds.set(id, result.deferredData);
              loaderData[id] = result.deferredData.data;
            } else {
              loaderData[id] = result.data;
            } // Error status codes always override success status codes, but if all
            // loaders are successful we take the deepest status code.

            if (result.statusCode != null && result.statusCode !== 200 && !foundError) {
              statusCode = result.statusCode;
            }
            if (result.headers) {
              loaderHeaders[id] = result.headers;
            }
          }
        }); // If we didn't consume the pending action error (i.e., all loaders
        // resolved), then consume it here.  Also clear out any loaderData for the
        // throwing route

        if (pendingError) {
          errors = pendingError;
          loaderData[Object.keys(pendingError)[0]] = undefined;
        }
        return {
          loaderData,
          errors,
          statusCode: statusCode || 200,
          loaderHeaders
        };
      }
      function processLoaderData(state, matches, matchesToLoad, results, pendingError, revalidatingFetchers, fetcherResults, activeDeferreds) {
        let {
          loaderData,
          errors
        } = processRouteLoaderData(matches, matchesToLoad, results, pendingError, activeDeferreds); // Process results from our revalidating fetchers

        for (let index = 0; index < revalidatingFetchers.length; index++) {
          let {
            key,
            match
          } = revalidatingFetchers[index];
          invariant(fetcherResults !== undefined && fetcherResults[index] !== undefined, "Did not find corresponding fetcher result");
          let result = fetcherResults[index]; // Process fetcher non-redirect errors

          if (isErrorResult(result)) {
            let boundaryMatch = findNearestBoundary(state.matches, match == null ? void 0 : match.route.id);
            if (!(errors && errors[boundaryMatch.route.id])) {
              errors = _extends({}, errors, {
                [boundaryMatch.route.id]: result.error
              });
            }
            state.fetchers.delete(key);
          } else if (isRedirectResult(result)) {
            // Should never get here, redirects should get processed above, but we
            // keep this to type narrow to a success result in the else
            invariant(false, "Unhandled fetcher revalidation redirect");
          } else if (isDeferredResult(result)) {
            // Should never get here, deferred data should be awaited for fetchers
            // in resolveDeferredResults
            invariant(false, "Unhandled fetcher deferred data");
          } else {
            let doneFetcher = {
              state: "idle",
              data: result.data,
              formMethod: undefined,
              formAction: undefined,
              formEncType: undefined,
              formData: undefined,
              " _hasFetcherDoneAnything ": true
            };
            state.fetchers.set(key, doneFetcher);
          }
        }
        return {
          loaderData,
          errors
        };
      }
      function mergeLoaderData(loaderData, newLoaderData, matches, errors) {
        let mergedLoaderData = _extends({}, newLoaderData);
        for (let match of matches) {
          let id = match.route.id;
          if (newLoaderData.hasOwnProperty(id)) {
            if (newLoaderData[id] !== undefined) {
              mergedLoaderData[id] = newLoaderData[id];
            }
          } else if (loaderData[id] !== undefined && match.route.loader) {
            // Preserve existing keys not included in newLoaderData and where a loader
            // wasn't removed by HMR
            mergedLoaderData[id] = loaderData[id];
          }
          if (errors && errors.hasOwnProperty(id)) {
            // Don't keep any loader data below the boundary
            break;
          }
        }
        return mergedLoaderData;
      } // Find the nearest error boundary, looking upwards from the leaf route (or the
      // route specified by routeId) for the closest ancestor error boundary,
      // defaulting to the root match

      function findNearestBoundary(matches, routeId) {
        let eligibleMatches = routeId ? matches.slice(0, matches.findIndex(m => m.route.id === routeId) + 1) : [...matches];
        return eligibleMatches.reverse().find(m => m.route.hasErrorBoundary === true) || matches[0];
      }
      function getShortCircuitMatches(routes) {
        // Prefer a root layout route if present, otherwise shim in a route object
        let route = routes.find(r => r.index || !r.path || r.path === "/") || {
          id: "__shim-error-route__"
        };
        return {
          matches: [{
            params: {},
            pathname: "",
            pathnameBase: "",
            route
          }],
          route
        };
      }
      function getInternalRouterError(status, _temp4) {
        let {
          pathname,
          routeId,
          method,
          type
        } = _temp4 === void 0 ? {} : _temp4;
        let statusText = "Unknown Server Error";
        let errorMessage = "Unknown @remix-run/router error";
        if (status === 400) {
          statusText = "Bad Request";
          if (method && pathname && routeId) {
            errorMessage = "You made a " + method + " request to \"" + pathname + "\" but " + ("did not provide a `loader` for route \"" + routeId + "\", ") + "so there is no way to handle the request.";
          } else if (type === "defer-action") {
            errorMessage = "defer() is not supported in actions";
          }
        } else if (status === 403) {
          statusText = "Forbidden";
          errorMessage = "Route \"" + routeId + "\" does not match URL \"" + pathname + "\"";
        } else if (status === 404) {
          statusText = "Not Found";
          errorMessage = "No route matches URL \"" + pathname + "\"";
        } else if (status === 405) {
          statusText = "Method Not Allowed";
          if (method && pathname && routeId) {
            errorMessage = "You made a " + method.toUpperCase() + " request to \"" + pathname + "\" but " + ("did not provide an `action` for route \"" + routeId + "\", ") + "so there is no way to handle the request.";
          } else if (method) {
            errorMessage = "Invalid request method \"" + method.toUpperCase() + "\"";
          }
        }
        return new ErrorResponse(status || 500, statusText, new Error(errorMessage), true);
      } // Find any returned redirect errors, starting from the lowest match

      function findRedirect(results) {
        for (let i = results.length - 1; i >= 0; i--) {
          let result = results[i];
          if (isRedirectResult(result)) {
            return result;
          }
        }
      }
      function stripHashFromPath(path) {
        let parsedPath = typeof path === "string" ? router_parsePath(path) : path;
        return createPath(_extends({}, parsedPath, {
          hash: ""
        }));
      }
      function isHashChangeOnly(a, b) {
        return a.pathname === b.pathname && a.search === b.search && a.hash !== b.hash;
      }
      function isDeferredResult(result) {
        return result.type === ResultType.deferred;
      }
      function isErrorResult(result) {
        return result.type === ResultType.error;
      }
      function isRedirectResult(result) {
        return (result && result.type) === ResultType.redirect;
      }
      function isDeferredData(value) {
        let deferred = value;
        return deferred && typeof deferred === "object" && typeof deferred.data === "object" && typeof deferred.subscribe === "function" && typeof deferred.cancel === "function" && typeof deferred.resolveData === "function";
      }
      function isResponse(value) {
        return value != null && typeof value.status === "number" && typeof value.statusText === "string" && typeof value.headers === "object" && typeof value.body !== "undefined";
      }
      function isRedirectResponse(result) {
        if (!isResponse(result)) {
          return false;
        }
        let status = result.status;
        let location = result.headers.get("Location");
        return status >= 300 && status <= 399 && location != null;
      }
      function isQueryRouteResponse(obj) {
        return obj && isResponse(obj.response) && (obj.type === ResultType.data || ResultType.error);
      }
      function isValidMethod(method) {
        return validRequestMethods.has(method.toLowerCase());
      }
      function isMutationMethod(method) {
        return validMutationMethods.has(method.toLowerCase());
      }
      async function resolveDeferredResults(currentMatches, matchesToLoad, results, signal, isFetcher, currentLoaderData) {
        for (let index = 0; index < results.length; index++) {
          let result = results[index];
          let match = matchesToLoad[index]; // If we don't have a match, then we can have a deferred result to do
          // anything with.  This is for revalidating fetchers where the route was
          // removed during HMR

          if (!match) {
            continue;
          }
          let currentMatch = currentMatches.find(m => m.route.id === match.route.id);
          let isRevalidatingLoader = currentMatch != null && !isNewRouteInstance(currentMatch, match) && (currentLoaderData && currentLoaderData[match.route.id]) !== undefined;
          if (isDeferredResult(result) && (isFetcher || isRevalidatingLoader)) {
            // Note: we do not have to touch activeDeferreds here since we race them
            // against the signal in resolveDeferredData and they'll get aborted
            // there if needed
            await resolveDeferredData(result, signal, isFetcher).then(result => {
              if (result) {
                results[index] = result || results[index];
              }
            });
          }
        }
      }
      async function resolveDeferredData(result, signal, unwrap) {
        if (unwrap === void 0) {
          unwrap = false;
        }
        let aborted = await result.deferredData.resolveData(signal);
        if (aborted) {
          return;
        }
        if (unwrap) {
          try {
            return {
              type: ResultType.data,
              data: result.deferredData.unwrappedData
            };
          } catch (e) {
            // Handle any TrackedPromise._error values encountered while unwrapping
            return {
              type: ResultType.error,
              error: e
            };
          }
        }
        return {
          type: ResultType.data,
          data: result.deferredData.data
        };
      }
      function hasNakedIndexQuery(search) {
        return new URLSearchParams(search).getAll("index").some(v => v === "");
      } // Note: This should match the format exported by useMatches, so if you change
      // this please also change that :)  Eventually we'll DRY this up

      function createUseMatchesMatch(match, loaderData) {
        let {
          route,
          pathname,
          params
        } = match;
        return {
          id: route.id,
          pathname,
          params,
          data: loaderData[route.id],
          handle: route.handle
        };
      }
      function getTargetMatch(matches, location) {
        let search = typeof location === "string" ? router_parsePath(location).search : location.search;
        if (matches[matches.length - 1].route.index && hasNakedIndexQuery(search || "")) {
          // Return the leaf index route when index is present
          return matches[matches.length - 1];
        } // Otherwise grab the deepest "path contributing" match (ignoring index and
        // pathless layout routes)

        let pathMatches = getPathContributingMatches(matches);
        return pathMatches[pathMatches.length - 1];
      } //#endregion

      // EXTERNAL MODULE: external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"}
      var external_root_React_commonjs2_react_commonjs_react_amd_react_ = __nested_webpack_require_27689__(442);
      var external_root_React_commonjs2_react_commonjs_react_amd_react_default = /*#__PURE__*/__nested_webpack_require_27689__.n(external_root_React_commonjs2_react_commonjs_react_amd_react_);
      ; // CONCATENATED MODULE: ../../node_modules/react-router/dist/index.js
      /**
       * React Router v6.10.0
       *
       * Copyright (c) Remix Software Inc.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE.md file in the root directory of this source tree.
       *
       * @license MIT
       */

      /**
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */
      /**
       * inlined Object.is polyfill to avoid requiring consumers ship their own
       * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
       */

      function isPolyfill(x, y) {
        return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y // eslint-disable-line no-self-compare
        ;
      }
      const is = typeof Object.is === "function" ? Object.is : isPolyfill; // Intentionally not using named imports because Rollup uses dynamic
      // dispatch for CommonJS interop named imports.

      const {
        useState,
        useEffect,
        useLayoutEffect,
        useDebugValue
      } = external_root_React_commonjs2_react_commonjs_react_amd_react_;
      let didWarnOld18Alpha = false;
      let didWarnUncachedGetSnapshot = false; // Disclaimer: This shim breaks many of the rules of React, and only works
      // because of a very particular set of implementation details and assumptions
      // -- change any one of them and it will break. The most important assumption
      // is that updates are always synchronous, because concurrent rendering is
      // only available in versions of React that also have a built-in
      // useSyncExternalStore API. And we only use this shim when the built-in API
      // does not exist.
      //
      // Do not assume that the clever hacks used by this hook also work in general.
      // The point of this shim is to replace the need for hacks by other libraries.

      function useSyncExternalStore$2(subscribe, getSnapshot,
      // Note: The shim does not use getServerSnapshot, because pre-18 versions of
      // React do not expose a way to check if we're hydrating. So users of the shim
      // will need to track that themselves and return the correct value
      // from `getSnapshot`.
      getServerSnapshot) {
        if (false) {} // Read the current snapshot from the store on every render. Again, this
        // breaks the rules of React, and only works here because of specific
        // implementation details, most importantly that updates are
        // always synchronous.

        const value = getSnapshot();
        if (false) {} // Because updates are synchronous, we don't queue them. Instead we force a
        // re-render whenever the subscribed state changes by updating an some
        // arbitrary useState hook. Then, during render, we call getSnapshot to read
        // the current value.
        //
        // Because we don't actually use the state returned by the useState hook, we
        // can save a bit of memory by storing other stuff in that slot.
        //
        // To implement the early bailout, we need to track some things on a mutable
        // object. Usually, we would put that in a useRef hook, but we can stash it in
        // our useState hook instead.
        //
        // To force a re-render, we call forceUpdate({inst}). That works because the
        // new object always fails an equality check.

        const [{
          inst
        }, forceUpdate] = useState({
          inst: {
            value,
            getSnapshot
          }
        }); // Track the latest getSnapshot function with a ref. This needs to be updated
        // in the layout phase so we can access it during the tearing check that
        // happens on subscribe.

        useLayoutEffect(() => {
          inst.value = value;
          inst.getSnapshot = getSnapshot; // Whenever getSnapshot or subscribe changes, we need to check in the
          // commit phase if there was an interleaved mutation. In concurrent mode
          // this can happen all the time, but even in synchronous mode, an earlier
          // effect may have mutated the store.

          if (checkIfSnapshotChanged(inst)) {
            // Force a re-render.
            forceUpdate({
              inst
            });
          } // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [subscribe, value, getSnapshot]);
        useEffect(() => {
          // Check for changes right before subscribing. Subsequent changes will be
          // detected in the subscription handler.
          if (checkIfSnapshotChanged(inst)) {
            // Force a re-render.
            forceUpdate({
              inst
            });
          }
          const handleStoreChange = () => {
            // TODO: Because there is no cross-renderer API for batching updates, it's
            // up to the consumer of this library to wrap their subscription event
            // with unstable_batchedUpdates. Should we try to detect when this isn't
            // the case and print a warning in development?
            // The store changed. Check if the snapshot changed since the last time we
            // read from the store.
            if (checkIfSnapshotChanged(inst)) {
              // Force a re-render.
              forceUpdate({
                inst
              });
            }
          }; // Subscribe to the store and return a clean-up function.

          return subscribe(handleStoreChange); // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [subscribe]);
        useDebugValue(value);
        return value;
      }
      function checkIfSnapshotChanged(inst) {
        const latestGetSnapshot = inst.getSnapshot;
        const prevValue = inst.value;
        try {
          const nextValue = latestGetSnapshot();
          return !is(prevValue, nextValue);
        } catch (error) {
          return true;
        }
      }

      /**
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       *
       * @flow
       */
      function useSyncExternalStore$1(subscribe, getSnapshot, getServerSnapshot) {
        // Note: The shim does not use getServerSnapshot, because pre-18 versions of
        // React do not expose a way to check if we're hydrating. So users of the shim
        // will need to track that themselves and return the correct value
        // from `getSnapshot`.
        return getSnapshot();
      }

      /**
       * Inlined into the react-router repo since use-sync-external-store does not
       * provide a UMD-compatible package, so we need this to be able to distribute
       * UMD react-router bundles
       */
      const canUseDOM = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
      const isServerEnvironment = !canUseDOM;
      const shim = isServerEnvironment ? useSyncExternalStore$1 : useSyncExternalStore$2;
      const useSyncExternalStore = "useSyncExternalStore" in external_root_React_commonjs2_react_commonjs_react_amd_react_ ? (module => module.useSyncExternalStore)(external_root_React_commonjs2_react_commonjs_react_amd_react_) : shim;
      const DataRouterContext = /*#__PURE__*/ /* unused pure expression or super */null && 0;
      if (false) {}
      const DataRouterStateContext = /*#__PURE__*/ /* unused pure expression or super */null && 0;
      if (false) {}
      const AwaitContext = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.createContext(null);
      if (false) {}
      const NavigationContext = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.createContext(null);
      if (false) {}
      const LocationContext = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.createContext(null);
      if (false) {}
      const RouteContext = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.createContext({
        outlet: null,
        matches: []
      });
      if (false) {}
      const RouteErrorContext = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.createContext(null);
      if (false) {}
      function dist_extends() {
        dist_extends = Object.assign ? Object.assign.bind() : function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }
          return target;
        };
        return dist_extends.apply(this, arguments);
      }

      /**
       * Returns the full href for the given "to" value. This is useful for building
       * custom links that are also accessible and preserve right-click behavior.
       *
       * @see https://reactrouter.com/hooks/use-href
       */

      function useHref(to, _temp) {
        let {
          relative
        } = _temp === void 0 ? {} : _temp;
        !useInRouterContext() ?  false ? 0 : UNSAFE_invariant(false) : void 0;
        let {
          basename,
          navigator
        } = React.useContext(NavigationContext);
        let {
          hash,
          pathname,
          search
        } = useResolvedPath(to, {
          relative
        });
        let joinedPathname = pathname; // If we're operating within a basename, prepend it to the pathname prior
        // to creating the href.  If this is a root navigation, then just use the raw
        // basename which allows the basename to have full control over the presence
        // of a trailing slash on root links

        if (basename !== "/") {
          joinedPathname = pathname === "/" ? basename : joinPaths([basename, pathname]);
        }
        return navigator.createHref({
          pathname: joinedPathname,
          search,
          hash
        });
      }
      /**
       * Returns true if this component is a descendant of a <Router>.
       *
       * @see https://reactrouter.com/hooks/use-in-router-context
       */

      function useInRouterContext() {
        return external_root_React_commonjs2_react_commonjs_react_amd_react_.useContext(LocationContext) != null;
      }
      /**
       * Returns the current location object, which represents the current URL in web
       * browsers.
       *
       * Note: If you're using this it may mean you're doing some of your own
       * "routing" in your app, and we'd like to know what your use case is. We may
       * be able to provide something higher-level to better suit your needs.
       *
       * @see https://reactrouter.com/hooks/use-location
       */

      function useLocation() {
        !useInRouterContext() ?  false ? 0 : invariant(false) : void 0;
        return external_root_React_commonjs2_react_commonjs_react_amd_react_.useContext(LocationContext).location;
      }
      /**
       * Returns the current navigation action which describes how the router came to
       * the current location, either by a pop, push, or replace on the history stack.
       *
       * @see https://reactrouter.com/hooks/use-navigation-type
       */

      function useNavigationType() {
        return React.useContext(LocationContext).navigationType;
      }
      /**
       * Returns a PathMatch object if the given pattern matches the current URL.
       * This is useful for components that need to know "active" state, e.g.
       * <NavLink>.
       *
       * @see https://reactrouter.com/hooks/use-match
       */

      function useMatch(pattern) {
        !useInRouterContext() ?  false ? 0 : UNSAFE_invariant(false) : void 0;
        let {
          pathname
        } = useLocation();
        return React.useMemo(() => matchPath(pattern, pathname), [pathname, pattern]);
      }
      /**
       * The interface for the navigate() function returned from useNavigate().
       */

      /**
       * Returns an imperative method for changing the location. Used by <Link>s, but
       * may also be used by other elements to change the location.
       *
       * @see https://reactrouter.com/hooks/use-navigate
       */
      function useNavigate() {
        !useInRouterContext() ?  false ? 0 : invariant(false) : void 0;
        let {
          basename,
          navigator
        } = external_root_React_commonjs2_react_commonjs_react_amd_react_.useContext(NavigationContext);
        let {
          matches
        } = external_root_React_commonjs2_react_commonjs_react_amd_react_.useContext(RouteContext);
        let {
          pathname: locationPathname
        } = useLocation();
        let routePathnamesJson = JSON.stringify(getPathContributingMatches(matches).map(match => match.pathnameBase));
        let activeRef = external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef(false);
        external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect(() => {
          activeRef.current = true;
        });
        let navigate = external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback(function (to, options) {
          if (options === void 0) {
            options = {};
          }
           false ? 0 : void 0;
          if (!activeRef.current) return;
          if (typeof to === "number") {
            navigator.go(to);
            return;
          }
          let path = router_resolveTo(to, JSON.parse(routePathnamesJson), locationPathname, options.relative === "path"); // If we're operating within a basename, prepend it to the pathname prior
          // to handing off to history.  If this is a root navigation, then we
          // navigate to the raw basename which allows the basename to have full
          // control over the presence of a trailing slash on root links

          if (basename !== "/") {
            path.pathname = path.pathname === "/" ? basename : router_joinPaths([basename, path.pathname]);
          }
          (!!options.replace ? navigator.replace : navigator.push)(path, options.state, options);
        }, [basename, navigator, routePathnamesJson, locationPathname]);
        return navigate;
      }
      const OutletContext = /*#__PURE__*/ /* unused pure expression or super */null && 0;
      /**
       * Returns the context (if provided) for the child route at this level of the route
       * hierarchy.
       * @see https://reactrouter.com/hooks/use-outlet-context
       */

      function useOutletContext() {
        return React.useContext(OutletContext);
      }
      /**
       * Returns the element for the child route at this level of the route
       * hierarchy. Used internally by <Outlet> to render child routes.
       *
       * @see https://reactrouter.com/hooks/use-outlet
       */

      function useOutlet(context) {
        let outlet = React.useContext(RouteContext).outlet;
        if (outlet) {
          return /*#__PURE__*/React.createElement(OutletContext.Provider, {
            value: context
          }, outlet);
        }
        return outlet;
      }
      /**
       * Returns an object of key/value pairs of the dynamic params from the current
       * URL that were matched by the route path.
       *
       * @see https://reactrouter.com/hooks/use-params
       */

      function useParams() {
        let {
          matches
        } = React.useContext(RouteContext);
        let routeMatch = matches[matches.length - 1];
        return routeMatch ? routeMatch.params : {};
      }
      /**
       * Resolves the pathname of the given `to` value against the current location.
       *
       * @see https://reactrouter.com/hooks/use-resolved-path
       */

      function useResolvedPath(to, _temp2) {
        let {
          relative
        } = _temp2 === void 0 ? {} : _temp2;
        let {
          matches
        } = React.useContext(RouteContext);
        let {
          pathname: locationPathname
        } = useLocation();
        let routePathnamesJson = JSON.stringify(UNSAFE_getPathContributingMatches(matches).map(match => match.pathnameBase));
        return React.useMemo(() => resolveTo(to, JSON.parse(routePathnamesJson), locationPathname, relative === "path"), [to, routePathnamesJson, locationPathname, relative]);
      }
      /**
       * Returns the element of the route that matched the current location, prepared
       * with the correct context to render the remainder of the route tree. Route
       * elements in the tree must render an <Outlet> to render their child route's
       * element.
       *
       * @see https://reactrouter.com/hooks/use-routes
       */

      function useRoutes(routes, locationArg) {
        !useInRouterContext() ?  false ? 0 : UNSAFE_invariant(false) : void 0;
        let {
          navigator
        } = React.useContext(NavigationContext);
        let dataRouterStateContext = React.useContext(DataRouterStateContext);
        let {
          matches: parentMatches
        } = React.useContext(RouteContext);
        let routeMatch = parentMatches[parentMatches.length - 1];
        let parentParams = routeMatch ? routeMatch.params : {};
        let parentPathname = routeMatch ? routeMatch.pathname : "/";
        let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
        let parentRoute = routeMatch && routeMatch.route;
        if (false) {}
        let locationFromContext = useLocation();
        let location;
        if (locationArg) {
          var _parsedLocationArg$pa;
          let parsedLocationArg = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
          !(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) ?  false ? 0 : UNSAFE_invariant(false) : void 0;
          location = parsedLocationArg;
        } else {
          location = locationFromContext;
        }
        let pathname = location.pathname || "/";
        let remainingPathname = parentPathnameBase === "/" ? pathname : pathname.slice(parentPathnameBase.length) || "/";
        let matches = matchRoutes(routes, {
          pathname: remainingPathname
        });
        if (false) {}
        let renderedMatches = _renderMatches(matches && matches.map(match => Object.assign({}, match, {
          params: Object.assign({}, parentParams, match.params),
          pathname: joinPaths([parentPathnameBase,
          // Re-encode pathnames that were decoded inside matchRoutes
          navigator.encodeLocation ? navigator.encodeLocation(match.pathname).pathname : match.pathname]),
          pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : joinPaths([parentPathnameBase,
          // Re-encode pathnames that were decoded inside matchRoutes
          navigator.encodeLocation ? navigator.encodeLocation(match.pathnameBase).pathname : match.pathnameBase])
        })), parentMatches, dataRouterStateContext || undefined); // When a user passes in a `locationArg`, the associated routes need to
        // be wrapped in a new `LocationContext.Provider` in order for `useLocation`
        // to use the scoped location instead of the global location.

        if (locationArg && renderedMatches) {
          return /*#__PURE__*/React.createElement(LocationContext.Provider, {
            value: {
              location: dist_extends({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
              }, location),
              navigationType: Action.Pop
            }
          }, renderedMatches);
        }
        return renderedMatches;
      }
      function DefaultErrorComponent() {
        let error = useRouteError();
        let message = isRouteErrorResponse(error) ? error.status + " " + error.statusText : error instanceof Error ? error.message : JSON.stringify(error);
        let stack = error instanceof Error ? error.stack : null;
        let lightgrey = "rgba(200,200,200, 0.5)";
        let preStyles = {
          padding: "0.5rem",
          backgroundColor: lightgrey
        };
        let codeStyles = {
          padding: "2px 4px",
          backgroundColor: lightgrey
        };
        let devInfo = null;
        if (false) {}
        return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h2", null, "Unexpected Application Error!"), /*#__PURE__*/React.createElement("h3", {
          style: {
            fontStyle: "italic"
          }
        }, message), stack ? /*#__PURE__*/React.createElement("pre", {
          style: preStyles
        }, stack) : null, devInfo);
      }
      class RenderErrorBoundary extends external_root_React_commonjs2_react_commonjs_react_amd_react_.Component {
        constructor(props) {
          super(props);
          this.state = {
            location: props.location,
            error: props.error
          };
        }
        static getDerivedStateFromError(error) {
          return {
            error: error
          };
        }
        static getDerivedStateFromProps(props, state) {
          // When we get into an error state, the user will likely click "back" to the
          // previous page that didn't have an error. Because this wraps the entire
          // application, that will have no effect--the error page continues to display.
          // This gives us a mechanism to recover from the error when the location changes.
          //
          // Whether we're in an error state or not, we update the location in state
          // so that when we are in an error state, it gets reset when a new location
          // comes in and the user recovers from the error.
          if (state.location !== props.location) {
            return {
              error: props.error,
              location: props.location
            };
          } // If we're not changing locations, preserve the location but still surface
          // any new errors that may come through. We retain the existing error, we do
          // this because the error provided from the app state may be cleared without
          // the location changing.

          return {
            error: props.error || state.error,
            location: state.location
          };
        }
        componentDidCatch(error, errorInfo) {
          console.error("React Router caught the following error during render", error, errorInfo);
        }
        render() {
          return this.state.error ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.createElement(RouteContext.Provider, {
            value: this.props.routeContext
          }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.createElement(RouteErrorContext.Provider, {
            value: this.state.error,
            children: this.props.component
          })) : this.props.children;
        }
      }
      function RenderedRoute(_ref) {
        let {
          routeContext,
          match,
          children
        } = _ref;
        let dataRouterContext = React.useContext(DataRouterContext); // Track how deep we got in our render pass to emulate SSR componentDidCatch
        // in a DataStaticRouter

        if (dataRouterContext && dataRouterContext.static && dataRouterContext.staticContext && (match.route.errorElement || match.route.ErrorBoundary)) {
          dataRouterContext.staticContext._deepestRenderedBoundaryId = match.route.id;
        }
        return /*#__PURE__*/React.createElement(RouteContext.Provider, {
          value: routeContext
        }, children);
      }
      function _renderMatches(matches, parentMatches, dataRouterState) {
        if (parentMatches === void 0) {
          parentMatches = [];
        }
        if (matches == null) {
          if (dataRouterState != null && dataRouterState.errors) {
            // Don't bail if we have data router errors so we can render them in the
            // boundary.  Use the pre-matched (or shimmed) matches
            matches = dataRouterState.matches;
          } else {
            return null;
          }
        }
        let renderedMatches = matches; // If we have data errors, trim matches to the highest error boundary

        let errors = dataRouterState == null ? void 0 : dataRouterState.errors;
        if (errors != null) {
          let errorIndex = renderedMatches.findIndex(m => m.route.id && (errors == null ? void 0 : errors[m.route.id]));
          !(errorIndex >= 0) ?  false ? 0 : UNSAFE_invariant(false) : void 0;
          renderedMatches = renderedMatches.slice(0, Math.min(renderedMatches.length, errorIndex + 1));
        }
        return renderedMatches.reduceRight((outlet, match, index) => {
          let error = match.route.id ? errors == null ? void 0 : errors[match.route.id] : null; // Only data routers handle errors

          let errorElement = null;
          if (dataRouterState) {
            if (match.route.ErrorBoundary) {
              errorElement = /*#__PURE__*/React.createElement(match.route.ErrorBoundary, null);
            } else if (match.route.errorElement) {
              errorElement = match.route.errorElement;
            } else {
              errorElement = /*#__PURE__*/React.createElement(DefaultErrorComponent, null);
            }
          }
          let matches = parentMatches.concat(renderedMatches.slice(0, index + 1));
          let getChildren = () => {
            let children = outlet;
            if (error) {
              children = errorElement;
            } else if (match.route.Component) {
              children = /*#__PURE__*/React.createElement(match.route.Component, null);
            } else if (match.route.element) {
              children = match.route.element;
            }
            return /*#__PURE__*/React.createElement(RenderedRoute, {
              match: match,
              routeContext: {
                outlet,
                matches
              },
              children: children
            });
          }; // Only wrap in an error boundary within data router usages when we have an
          // ErrorBoundary/errorElement on this route.  Otherwise let it bubble up to
          // an ancestor ErrorBoundary/errorElement

          return dataRouterState && (match.route.ErrorBoundary || match.route.errorElement || index === 0) ? /*#__PURE__*/React.createElement(RenderErrorBoundary, {
            location: dataRouterState.location,
            component: errorElement,
            error: error,
            children: getChildren(),
            routeContext: {
              outlet: null,
              matches
            }
          }) : getChildren();
        }, null);
      }
      var DataRouterHook;
      (function (DataRouterHook) {
        DataRouterHook["UseBlocker"] = "useBlocker";
        DataRouterHook["UseRevalidator"] = "useRevalidator";
      })(DataRouterHook || (DataRouterHook = {}));
      var DataRouterStateHook;
      (function (DataRouterStateHook) {
        DataRouterStateHook["UseBlocker"] = "useBlocker";
        DataRouterStateHook["UseLoaderData"] = "useLoaderData";
        DataRouterStateHook["UseActionData"] = "useActionData";
        DataRouterStateHook["UseRouteError"] = "useRouteError";
        DataRouterStateHook["UseNavigation"] = "useNavigation";
        DataRouterStateHook["UseRouteLoaderData"] = "useRouteLoaderData";
        DataRouterStateHook["UseMatches"] = "useMatches";
        DataRouterStateHook["UseRevalidator"] = "useRevalidator";
      })(DataRouterStateHook || (DataRouterStateHook = {}));
      function getDataRouterConsoleError(hookName) {
        return hookName + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
      }
      function useDataRouterContext(hookName) {
        let ctx = React.useContext(DataRouterContext);
        !ctx ?  false ? 0 : UNSAFE_invariant(false) : void 0;
        return ctx;
      }
      function useDataRouterState(hookName) {
        let state = React.useContext(DataRouterStateContext);
        !state ?  false ? 0 : UNSAFE_invariant(false) : void 0;
        return state;
      }
      function useRouteContext(hookName) {
        let route = React.useContext(RouteContext);
        !route ?  false ? 0 : UNSAFE_invariant(false) : void 0;
        return route;
      }
      function useCurrentRouteId(hookName) {
        let route = useRouteContext(hookName);
        let thisRoute = route.matches[route.matches.length - 1];
        !thisRoute.route.id ?  false ? 0 : UNSAFE_invariant(false) : void 0;
        return thisRoute.route.id;
      }
      /**
       * Returns the current navigation, defaulting to an "idle" navigation when
       * no navigation is in progress
       */

      function useNavigation() {
        let state = useDataRouterState(DataRouterStateHook.UseNavigation);
        return state.navigation;
      }
      /**
       * Returns a revalidate function for manually triggering revalidation, as well
       * as the current state of any manual revalidations
       */

      function useRevalidator() {
        let dataRouterContext = useDataRouterContext(DataRouterHook.UseRevalidator);
        let state = useDataRouterState(DataRouterStateHook.UseRevalidator);
        return {
          revalidate: dataRouterContext.router.revalidate,
          state: state.revalidation
        };
      }
      /**
       * Returns the active route matches, useful for accessing loaderData for
       * parent/child routes or the route "handle" property
       */

      function useMatches() {
        let {
          matches,
          loaderData
        } = useDataRouterState(DataRouterStateHook.UseMatches);
        return React.useMemo(() => matches.map(match => {
          let {
            pathname,
            params
          } = match; // Note: This structure matches that created by createUseMatchesMatch
          // in the @remix-run/router , so if you change this please also change
          // that :)  Eventually we'll DRY this up

          return {
            id: match.route.id,
            pathname,
            params,
            data: loaderData[match.route.id],
            handle: match.route.handle
          };
        }), [matches, loaderData]);
      }
      /**
       * Returns the loader data for the nearest ancestor Route loader
       */

      function useLoaderData() {
        let state = useDataRouterState(DataRouterStateHook.UseLoaderData);
        let routeId = useCurrentRouteId(DataRouterStateHook.UseLoaderData);
        if (state.errors && state.errors[routeId] != null) {
          console.error("You cannot `useLoaderData` in an errorElement (routeId: " + routeId + ")");
          return undefined;
        }
        return state.loaderData[routeId];
      }
      /**
       * Returns the loaderData for the given routeId
       */

      function useRouteLoaderData(routeId) {
        let state = useDataRouterState(DataRouterStateHook.UseRouteLoaderData);
        return state.loaderData[routeId];
      }
      /**
       * Returns the action data for the nearest ancestor Route action
       */

      function useActionData() {
        let state = useDataRouterState(DataRouterStateHook.UseActionData);
        let route = React.useContext(RouteContext);
        !route ?  false ? 0 : UNSAFE_invariant(false) : void 0;
        return Object.values((state == null ? void 0 : state.actionData) || {})[0];
      }
      /**
       * Returns the nearest ancestor Route error, which could be a loader/action
       * error or a render error.  This is intended to be called from your
       * ErrorBoundary/errorElement to display a proper error message.
       */

      function useRouteError() {
        var _state$errors;
        let error = React.useContext(RouteErrorContext);
        let state = useDataRouterState(DataRouterStateHook.UseRouteError);
        let routeId = useCurrentRouteId(DataRouterStateHook.UseRouteError); // If this was a render error, we put it in a RouteError context inside
        // of RenderErrorBoundary

        if (error) {
          return error;
        } // Otherwise look for errors from our data router state

        return (_state$errors = state.errors) == null ? void 0 : _state$errors[routeId];
      }
      /**
       * Returns the happy-path data from the nearest ancestor <Await /> value
       */

      function useAsyncValue() {
        let value = React.useContext(AwaitContext);
        return value == null ? void 0 : value._data;
      }
      /**
       * Returns the error from the nearest ancestor <Await /> value
       */

      function useAsyncError() {
        let value = React.useContext(AwaitContext);
        return value == null ? void 0 : value._error;
      }
      let blockerId = 0;
      /**
       * Allow the application to block navigations within the SPA and present the
       * user a confirmation dialog to confirm the navigation.  Mostly used to avoid
       * using half-filled form data.  This does not handle hard-reloads or
       * cross-origin navigations.
       */

      function useBlocker(shouldBlock) {
        let {
          router
        } = useDataRouterContext(DataRouterHook.UseBlocker);
        let state = useDataRouterState(DataRouterStateHook.UseBlocker);
        let [blockerKey] = React.useState(() => String(++blockerId));
        let blockerFunction = React.useCallback(args => {
          return typeof shouldBlock === "function" ? !!shouldBlock(args) : !!shouldBlock;
        }, [shouldBlock]);
        let blocker = router.getBlocker(blockerKey, blockerFunction); // Cleanup on unmount

        React.useEffect(() => () => router.deleteBlocker(blockerKey), [router, blockerKey]); // Prefer the blocker from state since DataRouterContext is memoized so this
        // ensures we update on blocker state updates

        return state.blockers.get(blockerKey) || blocker;
      }
      const alreadyWarned = {};
      function warningOnce(key, cond, message) {
        if (!cond && !alreadyWarned[key]) {
          alreadyWarned[key] = true;
           false ? 0 : void 0;
        }
      }

      /**
       * Given a Remix Router instance, render the appropriate UI
       */
      function RouterProvider(_ref) {
        let {
          fallbackElement,
          router
        } = _ref;
        let getState = React.useCallback(() => router.state, [router]); // Sync router state to our component state to force re-renders

        let state = useSyncExternalStore(router.subscribe, getState,
        // We have to provide this so React@18 doesn't complain during hydration,
        // but we pass our serialized hydration data into the router so state here
        // is already synced with what the server saw
        getState);
        let navigator = React.useMemo(() => {
          return {
            createHref: router.createHref,
            encodeLocation: router.encodeLocation,
            go: n => router.navigate(n),
            push: (to, state, opts) => router.navigate(to, {
              state,
              preventScrollReset: opts == null ? void 0 : opts.preventScrollReset
            }),
            replace: (to, state, opts) => router.navigate(to, {
              replace: true,
              state,
              preventScrollReset: opts == null ? void 0 : opts.preventScrollReset
            })
          };
        }, [router]);
        let basename = router.basename || "/";
        let dataRouterContext = React.useMemo(() => ({
          router,
          navigator,
          static: false,
          basename
        }), [router, navigator, basename]); // The fragment and {null} here are important!  We need them to keep React 18's
        // useId happy when we are server-rendering since we may have a <script> here
        // containing the hydrated server-side staticContext (from StaticRouterProvider).
        // useId relies on the component tree structure to generate deterministic id's
        // so we need to ensure it remains the same on the client even though
        // we don't need the <script> tag

        return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DataRouterContext.Provider, {
          value: dataRouterContext
        }, /*#__PURE__*/React.createElement(DataRouterStateContext.Provider, {
          value: state
        }, /*#__PURE__*/React.createElement(Router, {
          basename: router.basename,
          location: router.state.location,
          navigationType: router.state.historyAction,
          navigator: navigator
        }, router.state.initialized ? /*#__PURE__*/React.createElement(Routes, null) : fallbackElement))), null);
      }

      /**
       * A <Router> that stores all entries in memory.
       *
       * @see https://reactrouter.com/router-components/memory-router
       */
      function MemoryRouter(_ref2) {
        let {
          basename,
          children,
          initialEntries,
          initialIndex
        } = _ref2;
        let historyRef = React.useRef();
        if (historyRef.current == null) {
          historyRef.current = createMemoryHistory({
            initialEntries,
            initialIndex,
            v5Compat: true
          });
        }
        let history = historyRef.current;
        let [state, setState] = React.useState({
          action: history.action,
          location: history.location
        });
        React.useLayoutEffect(() => history.listen(setState), [history]);
        return /*#__PURE__*/React.createElement(Router, {
          basename: basename,
          children: children,
          location: state.location,
          navigationType: state.action,
          navigator: history
        });
      }

      /**
       * Changes the current location.
       *
       * Note: This API is mostly useful in React.Component subclasses that are not
       * able to use hooks. In functional components, we recommend you use the
       * `useNavigate` hook instead.
       *
       * @see https://reactrouter.com/components/navigate
       */
      function Navigate(_ref3) {
        let {
          to,
          replace,
          state,
          relative
        } = _ref3;
        !useInRouterContext() ?  false ? 0 : UNSAFE_invariant(false) : void 0;
         false ? 0 : void 0;
        let dataRouterState = React.useContext(DataRouterStateContext);
        let navigate = useNavigate();
        React.useEffect(() => {
          // Avoid kicking off multiple navigations if we're in the middle of a
          // data-router navigation, since components get re-rendered when we enter
          // a submitting/loading state
          if (dataRouterState && dataRouterState.navigation.state !== "idle") {
            return;
          }
          navigate(to, {
            replace,
            state,
            relative
          });
        });
        return null;
      }

      /**
       * Renders the child route's element, if there is one.
       *
       * @see https://reactrouter.com/components/outlet
       */
      function Outlet(props) {
        return useOutlet(props.context);
      }

      /**
       * Declares an element that should be rendered at a certain URL path.
       *
       * @see https://reactrouter.com/components/route
       */
      function Route(_props) {
         false ? 0 : UNSAFE_invariant(false);
      }

      /**
       * Provides location context for the rest of the app.
       *
       * Note: You usually won't render a <Router> directly. Instead, you'll render a
       * router that is more specific to your environment such as a <BrowserRouter>
       * in web browsers or a <StaticRouter> for server rendering.
       *
       * @see https://reactrouter.com/router-components/router
       */
      function Router(_ref4) {
        let {
          basename: basenameProp = "/",
          children = null,
          location: locationProp,
          navigationType = Action.Pop,
          navigator,
          static: staticProp = false
        } = _ref4;
        !!useInRouterContext() ?  false ? 0 : UNSAFE_invariant(false) : void 0; // Preserve trailing slashes on basename, so we can let the user control
        // the enforcement of trailing slashes throughout the app

        let basename = basenameProp.replace(/^\/*/, "/");
        let navigationContext = React.useMemo(() => ({
          basename,
          navigator,
          static: staticProp
        }), [basename, navigator, staticProp]);
        if (typeof locationProp === "string") {
          locationProp = parsePath(locationProp);
        }
        let {
          pathname = "/",
          search = "",
          hash = "",
          state = null,
          key = "default"
        } = locationProp;
        let locationContext = React.useMemo(() => {
          let trailingPathname = stripBasename(pathname, basename);
          if (trailingPathname == null) {
            return null;
          }
          return {
            location: {
              pathname: trailingPathname,
              search,
              hash,
              state,
              key
            },
            navigationType
          };
        }, [basename, pathname, search, hash, state, key, navigationType]);
         false ? 0 : void 0;
        if (locationContext == null) {
          return null;
        }
        return /*#__PURE__*/React.createElement(NavigationContext.Provider, {
          value: navigationContext
        }, /*#__PURE__*/React.createElement(LocationContext.Provider, {
          children: children,
          value: locationContext
        }));
      }

      /**
       * A container for a nested tree of <Route> elements that renders the branch
       * that best matches the current location.
       *
       * @see https://reactrouter.com/components/routes
       */
      function Routes(_ref5) {
        let {
          children,
          location
        } = _ref5;
        let dataRouterContext = React.useContext(DataRouterContext); // When in a DataRouterContext _without_ children, we use the router routes
        // directly.  If we have children, then we're in a descendant tree and we
        // need to use child routes.

        let routes = dataRouterContext && !children ? dataRouterContext.router.routes : createRoutesFromChildren(children);
        return useRoutes(routes, location);
      }

      /**
       * Component to use for rendering lazily loaded data from returning defer()
       * in a loader function
       */
      function Await(_ref6) {
        let {
          children,
          errorElement,
          resolve
        } = _ref6;
        return /*#__PURE__*/React.createElement(AwaitErrorBoundary, {
          resolve: resolve,
          errorElement: errorElement
        }, /*#__PURE__*/React.createElement(ResolveAwait, null, children));
      }
      var AwaitRenderStatus;
      (function (AwaitRenderStatus) {
        AwaitRenderStatus[AwaitRenderStatus["pending"] = 0] = "pending";
        AwaitRenderStatus[AwaitRenderStatus["success"] = 1] = "success";
        AwaitRenderStatus[AwaitRenderStatus["error"] = 2] = "error";
      })(AwaitRenderStatus || (AwaitRenderStatus = {}));
      const neverSettledPromise = new Promise(() => {});
      class AwaitErrorBoundary extends external_root_React_commonjs2_react_commonjs_react_amd_react_.Component {
        constructor(props) {
          super(props);
          this.state = {
            error: null
          };
        }
        static getDerivedStateFromError(error) {
          return {
            error
          };
        }
        componentDidCatch(error, errorInfo) {
          console.error("<Await> caught the following error during render", error, errorInfo);
        }
        render() {
          let {
            children,
            errorElement,
            resolve
          } = this.props;
          let promise = null;
          let status = AwaitRenderStatus.pending;
          if (!(resolve instanceof Promise)) {
            // Didn't get a promise - provide as a resolved promise
            status = AwaitRenderStatus.success;
            promise = Promise.resolve();
            Object.defineProperty(promise, "_tracked", {
              get: () => true
            });
            Object.defineProperty(promise, "_data", {
              get: () => resolve
            });
          } else if (this.state.error) {
            // Caught a render error, provide it as a rejected promise
            status = AwaitRenderStatus.error;
            let renderError = this.state.error;
            promise = Promise.reject().catch(() => {}); // Avoid unhandled rejection warnings

            Object.defineProperty(promise, "_tracked", {
              get: () => true
            });
            Object.defineProperty(promise, "_error", {
              get: () => renderError
            });
          } else if (resolve._tracked) {
            // Already tracked promise - check contents
            promise = resolve;
            status = promise._error !== undefined ? AwaitRenderStatus.error : promise._data !== undefined ? AwaitRenderStatus.success : AwaitRenderStatus.pending;
          } else {
            // Raw (untracked) promise - track it
            status = AwaitRenderStatus.pending;
            Object.defineProperty(resolve, "_tracked", {
              get: () => true
            });
            promise = resolve.then(data => Object.defineProperty(resolve, "_data", {
              get: () => data
            }), error => Object.defineProperty(resolve, "_error", {
              get: () => error
            }));
          }
          if (status === AwaitRenderStatus.error && promise._error instanceof AbortedDeferredError) {
            // Freeze the UI by throwing a never resolved promise
            throw neverSettledPromise;
          }
          if (status === AwaitRenderStatus.error && !errorElement) {
            // No errorElement, throw to the nearest route-level error boundary
            throw promise._error;
          }
          if (status === AwaitRenderStatus.error) {
            // Render via our errorElement
            return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.createElement(AwaitContext.Provider, {
              value: promise,
              children: errorElement
            });
          }
          if (status === AwaitRenderStatus.success) {
            // Render children with resolved value
            return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_.createElement(AwaitContext.Provider, {
              value: promise,
              children: children
            });
          } // Throw to the suspense boundary

          throw promise;
        }
      }
      /**
       * @private
       * Indirection to leverage useAsyncValue for a render-prop API on <Await>
       */

      function ResolveAwait(_ref7) {
        let {
          children
        } = _ref7;
        let data = useAsyncValue();
        let toRender = typeof children === "function" ? children(data) : children;
        return /*#__PURE__*/React.createElement(React.Fragment, null, toRender);
      } ///////////////////////////////////////////////////////////////////////////////
      // UTILS
      ///////////////////////////////////////////////////////////////////////////////

      /**
       * Creates a route config from a React "children" object, which is usually
       * either a `<Route>` element or an array of them. Used internally by
       * `<Routes>` to create a route config from its children.
       *
       * @see https://reactrouter.com/utils/create-routes-from-children
       */

      function createRoutesFromChildren(children, parentPath) {
        if (parentPath === void 0) {
          parentPath = [];
        }
        let routes = [];
        React.Children.forEach(children, (element, index) => {
          if (! /*#__PURE__*/React.isValidElement(element)) {
            // Ignore non-elements. This allows people to more easily inline
            // conditionals in their route config.
            return;
          }
          let treePath = [...parentPath, index];
          if (element.type === React.Fragment) {
            // Transparently support React.Fragment and its children.
            routes.push.apply(routes, createRoutesFromChildren(element.props.children, treePath));
            return;
          }
          !(element.type === Route) ?  false ? 0 : UNSAFE_invariant(false) : void 0;
          !(!element.props.index || !element.props.children) ?  false ? 0 : UNSAFE_invariant(false) : void 0;
          let route = {
            id: element.props.id || treePath.join("-"),
            caseSensitive: element.props.caseSensitive,
            element: element.props.element,
            Component: element.props.Component,
            index: element.props.index,
            path: element.props.path,
            loader: element.props.loader,
            action: element.props.action,
            errorElement: element.props.errorElement,
            ErrorBoundary: element.props.ErrorBoundary,
            hasErrorBoundary: element.props.ErrorBoundary != null || element.props.errorElement != null,
            shouldRevalidate: element.props.shouldRevalidate,
            handle: element.props.handle,
            lazy: element.props.lazy
          };
          if (element.props.children) {
            route.children = createRoutesFromChildren(element.props.children, treePath);
          }
          routes.push(route);
        });
        return routes;
      }
      /**
       * Renders the result of `matchRoutes()` into a React element.
       */

      function renderMatches(matches) {
        return _renderMatches(matches);
      }
      function detectErrorBoundary(route) {
        if (false) {} // Note: this check also occurs in createRoutesFromChildren so update
        // there if you change this

        return Boolean(route.ErrorBoundary) || Boolean(route.errorElement);
      }
      function createMemoryRouter(routes, opts) {
        return createRouter({
          basename: opts == null ? void 0 : opts.basename,
          future: opts == null ? void 0 : opts.future,
          history: createMemoryHistory({
            initialEntries: opts == null ? void 0 : opts.initialEntries,
            initialIndex: opts == null ? void 0 : opts.initialIndex
          }),
          hydrationData: opts == null ? void 0 : opts.hydrationData,
          routes,
          detectErrorBoundary
        }).initialize();
      } ///////////////////////////////////////////////////////////////////////////////

      ; // CONCATENATED MODULE: ./src/hooks/useNavigateTo.js
      // useNavigateTo.js

      const useNavigateTo = () => {
        const navigate = useNavigate();
        const navigateTo = path => {
          navigate(path);
        };
        return navigateTo;
      };
      /* harmony default export */
      const hooks_useNavigateTo = useNavigateTo;
      ; // CONCATENATED MODULE: ./src/hooks/useClickOutside.js

      const useClickOutside = function (refs, callback) {
        let enabled = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
        (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
          const judge = event => {
            return refs.some(ref => {
              var _ref$current;
              return (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.contains(event.target);
            });
          };
          const handleClickOutside = event => {
            if (enabled && refs.length && !judge(event)) {
              callback && callback();
            }
          };
          document.addEventListener('mousedown', handleClickOutside);
          return () => {
            document.removeEventListener('mousedown', handleClickOutside);
          };
        }, [refs, callback, enabled]);
      };
      /* harmony default export */
      const hooks_useClickOutside = useClickOutside;
      ; // CONCATENATED MODULE: ./src/hooks/useDrag.js

      const useDrag = function (triggerRef, elementRef) {
        let isDialog = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        let autoStyle = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
        let initialPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {
          x: 0,
          y: 0
        };
        const [isDragging, setIsDragging] = (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false);
        const [dragOffset, setDragOffset] = (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)({
          x: 0,
          y: 0
        });
        const [position, setPosition] = (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(initialPosition);
        const elementFirstPositionRef = (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
        const handleMouseMove = e => {
          // 处于拖动状态
          if (isDragging) {
            if (!isDialog) {
              var _elementFirstPosition, _elementFirstPosition2, _elementFirstPosition3;
              console.log("e.clientX: ", e.clientX);
              console.log("dragOffset.x: ", dragOffset.x);
              console.log("window.scrollX: ", window.scrollX);
              console.log("elementFirstPositionRef.current?.left: ", (_elementFirstPosition = elementFirstPositionRef.current) === null || _elementFirstPosition === void 0 ? void 0 : _elementFirstPosition.left);
              // 如果不是弹窗，要减去元素一开始在浏览器中的位置(因为顶部和左部都会有别的元素占着)

              // 解读：拿当前的鼠标位置(e.clientX) 减去鼠标最开始点击下的位置 与 元素最左边到浏览器距离的差值(dragOffset.x，点击之后就不变了)，再减去元素一开始在浏览器中的位置(elementFirstPositionRef.current?.left，不变)，再加上浏览器滚动的距离(window.scrollX)，得到差值的就是元素拖拽移动的距离
              // Y轴也一样
              setPosition({
                x: e.clientX - dragOffset.x - ((_elementFirstPosition2 = elementFirstPositionRef.current) === null || _elementFirstPosition2 === void 0 ? void 0 : _elementFirstPosition2.left) + window.scrollX,
                // 还要 加上浏览器滚动的距离
                y: e.clientY - dragOffset.y - ((_elementFirstPosition3 = elementFirstPositionRef.current) === null || _elementFirstPosition3 === void 0 ? void 0 : _elementFirstPosition3.top) + window.scrollY
              });
            } else {
              // 如果是弹窗，则不用减
              setPosition({
                x: e.clientX - dragOffset.x,
                y: e.clientY - dragOffset.y
              });
            }
          }
        };
        const handleMouseUp = () => {
          setIsDragging(false);
        };

        // 绑定事件
        (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
          if (isDragging) {
            document.addEventListener("mousemove", handleMouseMove);
            document.addEventListener("mouseup", handleMouseUp);
          } else {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
          }
          return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
          };
        }, [isDragging]);

        // 如果需要自动设置样式的话，在这边处理，处理的是 triggerRef触发元素
        (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
          if (autoStyle && elementRef.current) {
            elementRef.current.style.position = "relative";
            elementRef.current.style.top = position.y + "px";
            elementRef.current.style.left = position.x + "px";
            elementRef.current.style.cursor = "move";
          }
        }, [position]);
        const handleMouseDown = e => {
          // 点击的时候获取当前元素距离浏览器的位置，获取的是 要拖拽的整体元素
          const dialogRect = elementRef.current.getBoundingClientRect();
          setIsDragging(true);
          // 因为弹窗一开始有 left和top，所以要减去 当前元素位置的left 和 top
          // 而其他元素在哪就是在哪，不需要减，所以要判断是弹窗还是普通元素哦 ---- 这两句注释没用了
          setDragOffset({
            // 减去当前元素距离浏览器的位置
            x: e.clientX - dialogRect.left,
            // 鼠标最开始点击下的位置 与 元素最左边到浏览器距离的差值，点击之后就不变了
            y: e.clientY - dialogRect.top
          });
        };
        (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
          // 如果元素的定位是 relative的话，需要再元素挂载完之后，去记录一开始距离浏览器的位置
          if (elementRef.current) {
            elementFirstPositionRef.current = elementRef.current.getBoundingClientRect();
          }
        }, [elementRef]);
        return {
          position,
          handleMouseDown
        };
      };
      /* harmony default export */
      const hooks_useDrag = useDrag;
      ; // CONCATENATED MODULE: ./src/hooks/useThrottle.ts

      const useThrottle = function (fn, delay) {
        let dependency = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
        const time = (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(0);
        // react中必须要用useCallback和useRef，不然状态改变就会一直变化
        return (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)(function () {
          const now = Date.now();
          if (!time.current || now - time.current >= delay) {
            fn(...arguments);
            time.current = now;
          }
        }, dependency);
      };
      /* harmony default export */
      const hooks_useThrottle = useThrottle;
      ; // CONCATENATED MODULE: ./src/hooks/useForm.ts

      const useForm = data => {
        const [formData, setFormData] = (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(data);

        // form.setFieldsValue({ note: 'Hello world!', gender: 'male' });

        const getData = () => {
          return formData;
        };
        const setFieldValue = data => {
          setFormData(preData => ({
            ...preData,
            ...data
          }));
        };
        const getFieldValue = key => {
          return formData[key];
        };
        let validate; // 也可以在这边实现，把 rules都传过来，然后返回的时候多传一个 errors，给 FormIten使用

        const reset = () => {
          setFormData(data);
          // 重置
        };
        const clear = () => {
          setFormData({});
        };
        (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
          setFormData(data);
        }, []);
        return {
          getData,
          validate,
          reset,
          clear,
          setFieldValue,
          getFieldValue,
          setFormData,
          formData
        };
      };
      /* harmony default export */
      const hooks_useForm = useForm;
      // EXTERNAL MODULE: ../../node_modules/react-dom/client.js
      var client = __nested_webpack_require_27689__(137);
      // EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
      var injectStylesIntoStyleTag = __nested_webpack_require_27689__(591);
      var injectStylesIntoStyleTag_default = /*#__PURE__*/__nested_webpack_require_27689__.n(injectStylesIntoStyleTag);
      // EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/styleDomAPI.js
      var styleDomAPI = __nested_webpack_require_27689__(740);
      var styleDomAPI_default = /*#__PURE__*/__nested_webpack_require_27689__.n(styleDomAPI);
      // EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/insertBySelector.js
      var insertBySelector = __nested_webpack_require_27689__(128);
      var insertBySelector_default = /*#__PURE__*/__nested_webpack_require_27689__.n(insertBySelector);
      // EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
      var setAttributesWithoutAttributes = __nested_webpack_require_27689__(855);
      var setAttributesWithoutAttributes_default = /*#__PURE__*/__nested_webpack_require_27689__.n(setAttributesWithoutAttributes);
      // EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/insertStyleElement.js
      var insertStyleElement = __nested_webpack_require_27689__(51);
      var insertStyleElement_default = /*#__PURE__*/__nested_webpack_require_27689__.n(insertStyleElement);
      // EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/styleTagTransform.js
      var styleTagTransform = __nested_webpack_require_27689__(656);
      var styleTagTransform_default = /*#__PURE__*/__nested_webpack_require_27689__.n(styleTagTransform);
      // EXTERNAL MODULE: ../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/hooks/notification.scss
      var notification = __nested_webpack_require_27689__(151);
      ; // CONCATENATED MODULE: ./src/hooks/notification.scss

      var options = {};
      options.styleTagTransform = styleTagTransform_default();
      options.setAttributes = setAttributesWithoutAttributes_default();
      options.insert = insertBySelector_default().bind(null, "head");
      options.domAPI = styleDomAPI_default();
      options.insertStyleElement = insertStyleElement_default();
      var update = injectStylesIntoStyleTag_default()(notification /* default */.A, options);

      /* harmony default export */
      const hooks_notification = notification /* default */.A && notification /* default */.A.locals ? notification /* default */.A.locals : undefined;
      ; // CONCATENATED MODULE: ./src/hooks/useNotification.tsx

      let notificationInstance = null;
      let root = null;
      let notificationIdRef = 0;
      let notifications = [];
      let timersMap = new Map();
      let intervalsMap = new Map();
      const NotificationContainer = () => {
        const [notificationList, setNotificationList] = (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)([]);
        (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
          setNotificationList(notifications);
        }, [notifications]); // useEffect 可以监听到 非state的变量 notifications 的变化

        const close = id => {
          notifications = notifications.map(item => {
            if (id !== undefined && item.id === id) {
              return {
                ...item,
                disappearing: true
              };
            }
            return item;
          });
          setNotificationList([...notifications]);
          setTimeout(() => {
            notifications = notifications.filter(item => item.id !== id);
            setNotificationList([...notifications]);

            // 清理定时器
            const timer = timersMap.get(id);
            const interval = intervalsMap.get(id);
            if (timer) {
              clearTimeout(timer);
              timersMap.delete(id);
            }
            if (interval) {
              clearInterval(interval);
              intervalsMap.delete(id);
            }
          }, 300);
        };
        const handleMouseEnter = item => {
          // 暂停定时器
          const timer = timersMap.get(item.id);
          const interval = intervalsMap.get(item.id);
          if (timer) {
            clearTimeout(timer);
          }
          if (interval) {
            clearInterval(interval);
          }
        };
        const handleMouseLeave = item => {
          // 重新设置定时器
          const timer = setTimeout(() => {
            close(item.id);
          }, item.remainTime);
          timersMap.set(item.id, timer);
          const interval = setInterval(() => {
            const notification = notifications.find(n => n.id === item.id);
            if (notification) {
              notification.remainTime -= 100;
              setNotificationList([...notifications]);
            }
          }, 100);
          intervalsMap.set(item.id, interval);
        };
        const generateTitleIcon = item => {
          switch (item.type) {
            case "success":
              return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("i", {
                className: "text-success fa-regular fa-circle-check"
              });
            case "warning":
              return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("i", {
                className: "text-warning fa-solid fa-circle-exclamation"
              });
            case "info":
              return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("i", {
                className: "text-info fa-solid fa-circle-info"
              });
            case "danger":
              return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("i", {
                className: "text-danger fa-solid fa-circle-exclamation"
              });
            default:
              break;
          }
        };
        return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
          className: "adou-notification-container"
        }, notificationList.map(item => /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
          onMouseEnter: () => handleMouseEnter(item),
          onMouseLeave: () => handleMouseLeave(item),
          key: item.id,
          className: "adou-notification ".concat(item.appearing ? "adou-notification-appearing" : "", " ").concat(item.disappearing ? "adou-notification-disappearing" : "")
        }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
          className: "adou-notification-header"
        }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
          className: "adou-notification-header-title"
        }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
          className: "adou-notification-header-title-icon"
        }, item.customTitleIcon ? item.customTitleIcon : generateTitleIcon(item)), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
          className: "text-".concat(item.title, " adou-notification-header-title-text")
        }, item.title)), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
          className: "adou-notification-header-close",
          onClick: () => close(item.id)
        }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("i", {
          className: "fa-solid fa-xmark"
        }))), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
          className: "adou-notification-content text-".concat(item.type)
        }, item.message))));
      };
      const createNotificationInstance = () => {
        // 创建容器
        const container = document.createElement("div");
        document.body.appendChild(container);

        // 创建 root
        root = (0, client /* createRoot */.H)(container);
        root.render( /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(NotificationContainer, null));
        return {
          open: message => {
            var _root;
            const id = ++notificationIdRef;
            const data = {
              id,
              duration: 3000,
              type: "info",
              ...message
            };
            data.remainTime = data.duration;
            notifications.push(data);
            (_root = root) === null || _root === void 0 || _root.render( /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(NotificationContainer, null));

            // 设置appearing状态
            setTimeout(() => {
              const notification = notifications.find(n => n.id === id);
              if (notification) {
                var _root2;
                notification.appearing = true;
                (_root2 = root) === null || _root2 === void 0 || _root2.render( /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(NotificationContainer, null));
              }
            }, 50);

            // 设置自动关闭定时器
            const timer = setTimeout(() => {
              const index = notifications.findIndex(n => n.id === id);
              if (index !== -1) {
                var _root3;
                notifications[index].disappearing = true;
                (_root3 = root) === null || _root3 === void 0 || _root3.render( /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(NotificationContainer, null));
                setTimeout(() => {
                  var _root4;
                  notifications = notifications.filter(n => n.id !== id);
                  (_root4 = root) === null || _root4 === void 0 || _root4.render( /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(NotificationContainer, null));
                }, 300);
              }
            }, message.duration || 3000);
            timersMap.set(id, timer);

            // 设置倒计时定时器
            const interval = setInterval(() => {
              const notification = notifications.find(n => n.id === id);
              if (notification) {
                var _root5;
                notification.remainTime -= 100;
                (_root5 = root) === null || _root5 === void 0 || _root5.render( /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(NotificationContainer, null));
              }
            }, 100);
            intervalsMap.set(id, interval);
          }
        };
      };
      const useNotification = () => {
        (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
          if (!notificationInstance) {
            notificationInstance = createNotificationInstance();
          }
        }, []);
        return {
          open: message => {
            var _notificationInstance;
            (_notificationInstance = notificationInstance) === null || _notificationInstance === void 0 || _notificationInstance.open(message);
          }
        };
      };
      /* harmony default export */
      const hooks_useNotification = useNotification;
      // EXTERNAL MODULE: ../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/hooks/loading.scss
      var loading = __nested_webpack_require_27689__(736);
      ; // CONCATENATED MODULE: ./src/hooks/loading.scss

      var loading_options = {};
      loading_options.styleTagTransform = styleTagTransform_default();
      loading_options.setAttributes = setAttributesWithoutAttributes_default();
      loading_options.insert = insertBySelector_default().bind(null, "head");
      loading_options.domAPI = styleDomAPI_default();
      loading_options.insertStyleElement = insertStyleElement_default();
      var loading_update = injectStylesIntoStyleTag_default()(loading /* default */.A, loading_options);

      /* harmony default export */
      const hooks_loading = loading /* default */.A && loading /* default */.A.locals ? loading /* default */.A.locals : undefined;
      ; // CONCATENATED MODULE: ./src/hooks/useLoading.tsx
      // useLoading.ts

      const Loading = () => {
        return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
          className: "loading-overlay"
        }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
          className: "loading-spinner me-2"
        }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", null, "Loading..."));
      };
      let loadingCount = 0;
      let loadingInstance = null;
      let useLoading_root = null;
      const createLoadingInstance = () => {
        // 创建容器
        const container = document.createElement("div");
        container.className = "loading-wrapper";
        document.body.appendChild(container);

        // 创建 root
        useLoading_root = (0, client /* createRoot */.H)(container);

        // 渲染组件
        const render = visible => {
          var _root;
          (_root = useLoading_root) === null || _root === void 0 || _root.render(visible ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(Loading, null) : null);
        };
        return {
          show: () => {
            render(true);
          },
          hide: () => {
            render(false);
          }
        };
      };
      const useLoading = () => {
        const [isLoading, setIsLoading] = (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false);
        (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
          // 确保只创建一个实例
          if (!loadingInstance) {
            loadingInstance = createLoadingInstance();
          }
        }, []);
        const showLoading = () => {
          var _loadingInstance;
          loadingCount++;
          setIsLoading(true);
          (_loadingInstance = loadingInstance) === null || _loadingInstance === void 0 || _loadingInstance.show();
        };
        const hideLoading = () => {
          loadingCount--;
          if (loadingCount <= 0) {
            var _loadingInstance2;
            loadingCount = 0;
            setIsLoading(false);
            (_loadingInstance2 = loadingInstance) === null || _loadingInstance2 === void 0 || _loadingInstance2.hide();
          }
        };
        return {
          loading: isLoading,
          showLoading,
          hideLoading
        };
      };
      /* harmony default export */
      const hooks_useLoading = useLoading;
      // EXTERNAL MODULE: ../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/hooks/toast.scss
      var toast = __nested_webpack_require_27689__(323);
      ; // CONCATENATED MODULE: ./src/hooks/toast.scss

      var toast_options = {};
      toast_options.styleTagTransform = styleTagTransform_default();
      toast_options.setAttributes = setAttributesWithoutAttributes_default();
      toast_options.insert = insertBySelector_default().bind(null, "head");
      toast_options.domAPI = styleDomAPI_default();
      toast_options.insertStyleElement = insertStyleElement_default();
      var toast_update = injectStylesIntoStyleTag_default()(toast /* default */.A, toast_options);

      /* harmony default export */
      const hooks_toast = toast /* default */.A && toast /* default */.A.locals ? toast /* default */.A.locals : undefined;
      ; // CONCATENATED MODULE: ./src/hooks/useToast.tsx
      // useToast.tsx

      let toastInstance = null;
      let useToast_root = null;
      let toastId = 0;
      let toasts = [];
      let useToast_timersMap = new Map();
      let useToast_intervalsMap = new Map();
      const ToastContainer = () => {
        const [toastList, setToastList] = (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)([]);
        (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
          setToastList(toasts);
        }, [toasts]);
        const handleMouseEnter = id => {
          const timer = useToast_timersMap.get(id);
          const interval = useToast_intervalsMap.get(id);
          if (timer) clearTimeout(timer);
          if (interval) clearInterval(interval);
        };
        const handleMouseLeave = id => {
          const toast = toasts.find(t => t.id === id);
          if (!toast) return;
          const remainingTime = toast.remainingTime;
          const timer = setTimeout(() => {
            toasts = toasts.map(t => t.id === id ? {
              ...t,
              disappearing: true
            } : t);
            setToastList([...toasts]);
            setTimeout(() => {
              toasts = toasts.filter(t => t.id !== id);
              setToastList([...toasts]);
            }, 500);
          }, remainingTime);
          useToast_timersMap.set(id, timer);
          const interval = setInterval(() => {
            const toastIndex = toasts.findIndex(t => t.id === id);
            if (toastIndex !== -1 && toasts[toastIndex].remainingTime) {
              toasts[toastIndex].remainingTime -= 100;
              setToastList([...toasts]);
            }
          }, 100);
          useToast_intervalsMap.set(id, interval);
        };
        const handleClose = toast => {
          const timer = useToast_timersMap.get(toast.id);
          const interval = useToast_intervalsMap.get(toast.id);
          if (timer) clearTimeout(timer);
          if (interval) clearInterval(interval);
          toasts = toasts.map(t => t.id === toast.id ? {
            ...t,
            disappearing: true
          } : t);
          setToastList([...toasts]);
          setTimeout(() => {
            toasts = toasts.filter(t => t.id !== toast.id);
            setToastList([...toasts]);
          }, 500);
        };
        return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
          className: "adou-toast-container"
        }, toastList.map(toast => /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
          style: {
            width: toast.width
          },
          key: toast.id,
          className: "adou-toast adou-toast-".concat(toast.type, " ").concat(toast.appearing ? "appearing" : "", " ").concat(toast.disappearing ? "disappearing" : ""),
          onMouseEnter: () => handleMouseEnter(toast.id),
          onMouseLeave: () => handleMouseLeave(toast.id)
        }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
          className: "adou-toast-content"
        }, toast.content, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("button", {
          className: "adou-toast-close",
          onClick: () => handleClose(toast)
        }, "\xD7")), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
          className: "adou-toast-timer",
          style: {
            width: "".concat((toast.remainingTime || 0) / (toast.duration / 100), "%")
          }
        }))));
      };
      const createToastInstance = () => {
        const container = document.createElement("div");
        document.body.appendChild(container);
        useToast_root = (0, client /* createRoot */.H)(container);
        useToast_root.render( /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(ToastContainer, null));
        return {
          open: message => {
            var _root;
            const id = toastId++;
            const newToast = {
              id,
              duration: 3000,
              remainingTime: 3000,
              ...message
            };
            newToast.remainingTime = newToast.duration;
            toasts.push(newToast);
            (_root = useToast_root) === null || _root === void 0 || _root.render( /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(ToastContainer, null));
            setTimeout(() => {
              const index = toasts.findIndex(t => t.id === id);
              if (index !== -1) {
                var _root2;
                toasts[index].appearing = true;
                (_root2 = useToast_root) === null || _root2 === void 0 || _root2.render( /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(ToastContainer, null));
              }
            }, 10);
            const timer = setTimeout(() => {
              var _root3;
              toasts = toasts.map(t => t.id === id ? {
                ...t,
                disappearing: true
              } : t);
              (_root3 = useToast_root) === null || _root3 === void 0 || _root3.render( /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(ToastContainer, null));
              setTimeout(() => {
                var _root4;
                toasts = toasts.filter(t => t.id !== id);
                (_root4 = useToast_root) === null || _root4 === void 0 || _root4.render( /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(ToastContainer, null));
              }, 500);
            }, newToast.remainingTime);
            useToast_timersMap.set(id, timer);
            const interval = setInterval(() => {
              const toastIndex = toasts.findIndex(t => t.id === id);
              if (toastIndex !== -1 && toasts[toastIndex].remainingTime) {
                var _root5;
                toasts[toastIndex].remainingTime -= 100;
                (_root5 = useToast_root) === null || _root5 === void 0 || _root5.render( /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(ToastContainer, null));
              }
            }, 100);
            useToast_intervalsMap.set(id, interval);
          }
        };
      };
      const useToast = () => {
        (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
          if (!toastInstance) {
            toastInstance = createToastInstance();
          }
        }, []);
        return {
          open: message => {
            var _toastInstance;
            (_toastInstance = toastInstance) === null || _toastInstance === void 0 || _toastInstance.open(message);
          }
        };
      };
      /* harmony default export */
      const hooks_useToast = useToast;
      ; // CONCATENATED MODULE: ./src/index.tsx
    })();

    /******/
    return __nested_webpack_exports__;
    /******/
  })();
});

/***/ }),

/***/ 648:
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
___CSS_LOADER_EXPORT___.push([module.id, `.table-cell-wrapper {
  box-sizing: border-box;
}
.table-cell-wrapper .collapse-icon {
  transition: transform 0.3s ease;
  cursor: pointer;
  z-index: 1;
}
.table-cell-wrapper .table-cell-folder-rotate-down {
  transform: rotate(90deg);
}
.table-cell-wrapper .text-in-one-line {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.table-cell-wrapper .table-cell-value-left {
  flex: 1;
  text-align-last: left;
}`, "",{"version":3,"sources":["webpack://./src/TableCell/index.scss"],"names":[],"mappings":"AAAA;EACI,sBAAA;AACJ;AACI;EACI,+BAAA;EACA,eAAA;EACA,UAAA;AACR;AAGI;EACI,wBAAA;AADR;AAMI;EACI,mBAAA;EACA,gBAAA;EACA,uBAAA;AAJR;AAOI;EACI,OAAA;EACA,qBAAA;AALR","sourcesContent":[".table-cell-wrapper {\r\n    box-sizing: border-box;\r\n\r\n    .collapse-icon {\r\n        transition: transform .3s ease; // 旋转动画\r\n        cursor: pointer;\r\n        z-index: 1;\r\n        // margin-bottom: 6px;\r\n    }\r\n\r\n    .table-cell-folder-rotate-down {\r\n        transform: rotate(90deg);\r\n    }\r\n\r\n    .collapse-icon:not(.rotate-down) {}\r\n\r\n    .text-in-one-line {\r\n        white-space: nowrap;\r\n        overflow: hidden;\r\n        text-overflow: ellipsis;\r\n    }\r\n\r\n    .table-cell-value-left {\r\n        flex: 1;\r\n        text-align-last: left;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 483:
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
.table-wrapper {
  scrollbar-width: thin;
  scrollbar-color: #ccc #f5f5f5;
  /* 默认情况下，表格行被隐藏 */
  /* 当表格行显示时 */
}
.table-wrapper .header-content {
  /* styles.css */
  /* styles.scss */
}
.table-wrapper .header-content .header-icon {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: auto;
  /* 宽度自适应 */
}
.table-wrapper .header-content .header-icon .icon {
  width: 0;
  /* 箭头的宽度 */
  height: 0;
  /* 箭头的高度 */
  margin: 1.6px 0;
  /* 调整上下间距 */
  border-left: 6px solid transparent;
  /* 箭头的左边 */
  border-right: 6px solid transparent;
  /* 箭头的右边 */
  cursor: pointer;
  transition: all 0.3s ease;
  /* 添加过渡效果 */
  border-radius: 3px;
}
.table-wrapper .header-content .header-icon .icon.sort-up:hover, .table-wrapper .header-content .header-icon .icon.sort-down:hover {
  transform: scale(1.2);
}
.table-wrapper::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
.table-wrapper::-webkit-scrollbar-track {
  background: #f5f5f5;
}
.table-wrapper::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 4px;
}
.table-wrapper::-webkit-scrollbar-thumb:hover {
  background: #aaa;
}
.table-wrapper tbody > tr {
  transition: max-height 0.3s ease-in-out;
}
.table-wrapper .collapse-tr {
  transition: opacity 0.5s ease, transform 0.5s ease;
  opacity: 0;
  transform: scaleY(0);
  /* 使用 scaleY 来隐藏 */
  transform-origin: top;
  /* 让缩放从顶部开始 */
  overflow: hidden;
}
.table-wrapper .collapse-tr.show {
  opacity: 1;
  transform: scaleY(1);
  /* 还原到原始高度 */
}
.table-wrapper .tr-checked {
  background-color: #e6f4ff !important;
}
.table-wrapper .tr-content {
  transition: background-color 0.3s ease;
}
.table-wrapper .tr-content:hover {
  background-color: #e7ebee;
}
.table-wrapper .pagination .prev-arrow,
.table-wrapper .pagination .next-arrow {
  padding: 8px 12px;
  transition: all 0.3s ease;
  cursor: pointer;
}
.table-wrapper .pagination .prev-arrow:hover,
.table-wrapper .pagination .next-arrow:hover {
  background-color: #f0f0f0 !important;
  color: #333;
}
.table-wrapper .pagination .prev-arrow.disabled,
.table-wrapper .pagination .next-arrow.disabled {
  color: #ccc !important;
}
.table-wrapper .pagination .prev-arrow.disabled:hover,
.table-wrapper .pagination .next-arrow.disabled:hover {
  background-color: transparent !important;
  cursor: not-allowed;
}
.table-wrapper .pagination .page-numbers .page-number-item:hover {
  background-color: #f0f0f0 !important;
  border: 1px solid #f0f0f0;
  color: #333;
}

.ellipsis-1 {
  white-space: nowrap;
  /* 不换行 */
  overflow: hidden;
  /* 隐藏超出部分 */
  text-overflow: ellipsis;
  /* 使用省略号表示超出部分 */
}`, "",{"version":3,"sources":["webpack://./src/index.scss"],"names":[],"mappings":"AAAA,gBAAgB;AAAhB;EAEI,qBAAA;EACA,6BAAA;EAkFA,iBAAA;EAWA,YAAA;AA1FJ;AADI;EAEI,eAAA;EACA,gBAAA;AAER;AADQ;EACI,oBAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,WAAA;EACA,UAAA;AAGZ;AADY;EACI,QAAA;EACA,UAAA;EACA,SAAA;EACA,UAAA;EACA,eAAA;EACA,WAAA;EACA,kCAAA;EACA,UAAA;EACA,mCAAA;EACA,UAAA;EACA,eAAA;EACA,yBAAA;EACA,WAAA;EACA,kBAAA;AAGhB;AAOgB;EAEI,qBAAA;AANpB;AAeI;EACI,UAAA;EACA,WAAA;AAbR;AAgBI;EACI,mBAAA;AAdR;AAiBI;EACI,gBAAA;EACA,kBAAA;AAfR;AAkBI;EACI,gBAAA;AAhBR;AA8BI;EACI,uCAAA;AA5BR;AAgCI;EACI,kDAAA;EACA,UAAA;EACA,oBAAA;EACA,kBAAA;EACA,qBAAA;EACA,aAAA;EACA,gBAAA;AA9BR;AAkCI;EACI,UAAA;EACA,oBAAA;EACA,YAAA;AAhCR;AAmCI;EACI,oCAAA;AAjCR;AAoCI;EACI,sCAAA;AAlCR;AAoCQ;EACI,yBAAA;AAlCZ;AAwCQ;;EAEI,iBAAA;EACA,yBAAA;EACA,eAAA;AAtCZ;AAwCY;;EACI,oCAAA;EACA,WAAA;AArChB;AAyCQ;;EAEI,sBAAA;AAvCZ;AAyCY;;EACI,wCAAA;EACA,mBAAA;AAtChB;AA2CY;EACI,oCAAA;EACA,yBAAA;EACA,WAAA;AAzChB;;AA+CA;EACI,mBAAA;EACA,QAAA;EACA,gBAAA;EACA,WAAA;EACA,uBAAA;EACA,gBAAA;AA5CJ","sourcesContent":[".table-wrapper {\r\n    // Firefox 滚动条样式\r\n    scrollbar-width: thin; // 设置滚动条宽度为 thin\r\n    scrollbar-color: #ccc #f5f5f5; // 设置滚动条颜色\r\n\r\n    .header-content {\r\n\r\n        /* styles.css */\r\n        /* styles.scss */\r\n        .header-icon {\r\n            display: inline-flex;\r\n            flex-direction: column;\r\n            align-items: center;\r\n            justify-content: center;\r\n            width: auto;\r\n            /* 宽度自适应 */\r\n\r\n            .icon {\r\n                width: 0;\r\n                /* 箭头的宽度 */\r\n                height: 0;\r\n                /* 箭头的高度 */\r\n                margin: 1.6px 0;\r\n                /* 调整上下间距 */\r\n                border-left: 6px solid transparent;\r\n                /* 箭头的左边 */\r\n                border-right: 6px solid transparent;\r\n                /* 箭头的右边 */\r\n                cursor: pointer;\r\n                transition: all 0.3s ease;\r\n                /* 添加过渡效果 */\r\n                border-radius: 3px;\r\n\r\n                &.sort-up {\r\n                    // border-bottom: 7px solid #000; /* 向上的箭头 */\r\n                }\r\n\r\n                &.sort-down {\r\n                    // border-top: 7px solid #000; /* 向下的箭头 */\r\n                }\r\n\r\n                &.sort-up:hover,\r\n                &.sort-down:hover {\r\n                    transform: scale(1.2);\r\n                }\r\n            }\r\n        }\r\n\r\n\r\n    }\r\n\r\n    // Webkit 滚动条样式\r\n    &::-webkit-scrollbar {\r\n        width: 8px; // 设置垂直滚动条宽度\r\n        height: 8px; // 设置水平滚动条宽度\r\n    }\r\n\r\n    &::-webkit-scrollbar-track {\r\n        background: #f5f5f5; // 设置滚动条轨道颜色\r\n    }\r\n\r\n    &::-webkit-scrollbar-thumb {\r\n        background: #ccc; // 设置滚动条滑块颜色\r\n        border-radius: 4px; // 设置滚动条滑块圆角\r\n    }\r\n\r\n    &::-webkit-scrollbar-thumb:hover {\r\n        background: #aaa; // 设置滚动条滑块悬停颜色\r\n    }\r\n\r\n\r\n\r\n    .collapse-table-td {\r\n        // display: inline-block; // 不控制，不然会影响上下居中\r\n        // display: flex;\r\n        // justify-content: center;\r\n        // align-items: center;\r\n        // line-height: 0.8;\r\n    }\r\n\r\n    // 添加展开的动画\r\n    tbody>tr {\r\n        transition: max-height 0.3s ease-in-out;\r\n    }\r\n\r\n    /* 默认情况下，表格行被隐藏 */\r\n    .collapse-tr {\r\n        transition: opacity 0.5s ease, transform 0.5s ease;\r\n        opacity: 0;\r\n        transform: scaleY(0);\r\n        /* 使用 scaleY 来隐藏 */\r\n        transform-origin: top;\r\n        /* 让缩放从顶部开始 */\r\n        overflow: hidden;\r\n    }\r\n\r\n    /* 当表格行显示时 */\r\n    .collapse-tr.show {\r\n        opacity: 1;\r\n        transform: scaleY(1);\r\n        /* 还原到原始高度 */\r\n    }\r\n\r\n    .tr-checked {\r\n        background-color: #e6f4ff !important;\r\n    }\r\n\r\n    .tr-content {\r\n        transition: background-color 0.3s ease;\r\n\r\n        &:hover {\r\n            background-color: #e7ebee;\r\n        }\r\n    }\r\n\r\n    .pagination {\r\n\r\n        .prev-arrow,\r\n        .next-arrow {\r\n            padding: 8px 12px;\r\n            transition: all 0.3s ease;\r\n            cursor: pointer;\r\n\r\n            &:hover {\r\n                background-color: #f0f0f0 !important;\r\n                color: #333;\r\n            }\r\n        }\r\n\r\n        .prev-arrow.disabled,\r\n        .next-arrow.disabled {\r\n            color: #ccc !important;\r\n\r\n            &:hover {\r\n                background-color: transparent !important;\r\n                cursor: not-allowed;\r\n            }\r\n        }\r\n\r\n        .page-numbers {\r\n            .page-number-item:hover {\r\n                background-color: #f0f0f0 !important;\r\n                border: 1px solid #f0f0f0;\r\n                color: #333;\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n.ellipsis-1 {\r\n    white-space: nowrap;\r\n    /* 不换行 */\r\n    overflow: hidden;\r\n    /* 隐藏超出部分 */\r\n    text-overflow: ellipsis;\r\n    /* 使用省略号表示超出部分 */\r\n}"],"sourceRoot":""}]);
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

/***/ }),

/***/ 3:
/***/ ((module) => {

"use strict";
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
  TableCell: () => (/* reexport */ src_TableCell_0),
  "default": () => (/* binding */ src_0),
  recursiveGenerateTableHeaderRows: () => (/* binding */ recursiveGenerateTableHeaderRows)
});

// EXTERNAL MODULE: external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"}
var external_root_React_commonjs2_react_commonjs_react_amd_react_ = __webpack_require__(442);
var external_root_React_commonjs2_react_commonjs_react_amd_react_default = /*#__PURE__*/__webpack_require__.n(external_root_React_commonjs2_react_commonjs_react_amd_react_);
// EXTERNAL MODULE: ../../node_modules/void-elements/index.js
var void_elements = __webpack_require__(978);
var void_elements_default = /*#__PURE__*/__webpack_require__.n(void_elements);
;// CONCATENATED MODULE: ../../node_modules/html-parse-stringify/dist/html-parse-stringify.module.js

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
  if (i && (r.name = i[1], ((void_elements_default())[i[1]] || "/" === n.charAt(n.length - 2)) && (r.voidElement = !0), r.name.startsWith("!--"))) {
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
/* harmony default export */ const html_parse_stringify_module = ((/* unused pure expression or super */ null && (c)));
;// CONCATENATED MODULE: ../../node_modules/react-i18next/dist/es/utils.js
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
;// CONCATENATED MODULE: ../../node_modules/@babel/runtime/helpers/esm/typeof.js
function typeof_typeof(o) {
  "@babel/helpers - typeof";

  return typeof_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, typeof_typeof(o);
}
;// CONCATENATED MODULE: ../../node_modules/@babel/runtime/helpers/esm/toPrimitive.js

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
;// CONCATENATED MODULE: ../../node_modules/@babel/runtime/helpers/esm/toPropertyKey.js


function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == typeof_typeof(i) ? i : i + "";
}
;// CONCATENATED MODULE: ../../node_modules/@babel/runtime/helpers/esm/defineProperty.js

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
;// CONCATENATED MODULE: ../../node_modules/react-i18next/dist/es/unescape.js
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
;// CONCATENATED MODULE: ../../node_modules/react-i18next/dist/es/defaults.js

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
;// CONCATENATED MODULE: ../../node_modules/react-i18next/dist/es/TransWithoutContext.js



var _excluded = (/* unused pure expression or super */ null && (["format"])),
  _excluded2 = (/* unused pure expression or super */ null && (["children", "count", "parent", "i18nKey", "context", "tOptions", "values", "defaults", "components", "ns", "i18n", "t", "shouldUnescape"]));
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
;// CONCATENATED MODULE: ../../node_modules/@babel/runtime/helpers/esm/classCallCheck.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
;// CONCATENATED MODULE: ../../node_modules/@babel/runtime/helpers/esm/createClass.js

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
;// CONCATENATED MODULE: ../../node_modules/react-i18next/dist/es/i18nInstance.js
var i18nInstance;
function setI18n(instance) {
  i18nInstance = instance;
}
function i18nInstance_getI18n() {
  return i18nInstance;
}
;// CONCATENATED MODULE: ../../node_modules/react-i18next/dist/es/initReactI18next.js


var initReactI18next = {
  type: '3rdParty',
  init: function init(instance) {
    setDefaults(instance.options.react);
    setI18n(instance);
  }
};
;// CONCATENATED MODULE: ../../node_modules/react-i18next/dist/es/context.js



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





var context_I18nContext = /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.createContext)();
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
;// CONCATENATED MODULE: ../../node_modules/react-i18next/dist/es/Trans.js


var Trans_excluded = (/* unused pure expression or super */ null && (["children", "count", "parent", "i18nKey", "context", "tOptions", "values", "defaults", "components", "ns", "i18n", "t", "shouldUnescape"]));
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
;// CONCATENATED MODULE: ../../node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
;// CONCATENATED MODULE: ../../node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
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
;// CONCATENATED MODULE: ../../node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
;// CONCATENATED MODULE: ../../node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
;// CONCATENATED MODULE: ../../node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
;// CONCATENATED MODULE: ../../node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function slicedToArray_slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
;// CONCATENATED MODULE: ../../node_modules/react-i18next/dist/es/useTranslation.js



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
  var ref = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)();
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
    ref.current = ignore ? ref.current : value;
  }, [value, ignore]);
  return ref.current;
};
function useTranslation_useTranslation(ns) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var i18nFromProps = props.i18n;
  var _ref = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useContext)(context_I18nContext) || {},
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
  var _useState = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(getT),
    _useState2 = slicedToArray_slicedToArray(_useState, 2),
    t = _useState2[0],
    setT = _useState2[1];
  var joinedNS = namespaces.join();
  var previousJoinedNS = usePrevious(joinedNS);
  var isMounted = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(true);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
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
  var isInitial = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(true);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function () {
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
;// CONCATENATED MODULE: ../../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
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
;// CONCATENATED MODULE: ../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js

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
;// CONCATENATED MODULE: ../../node_modules/react-i18next/dist/es/withTranslation.js



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
      return /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.createElement)(WrappedComponent, passDownProps);
    }
    I18nextWithTranslation.displayName = "withI18nextTranslation(".concat(utils_getDisplayName(WrappedComponent), ")");
    I18nextWithTranslation.WrappedComponent = WrappedComponent;
    var forwardRef = function forwardRef(props, ref) {
      return /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.createElement)(I18nextWithTranslation, Object.assign({}, props, {
        forwardedRef: ref
      }));
    };
    return options.withRef ? /*#__PURE__*/(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.forwardRef)(forwardRef) : I18nextWithTranslation;
  };
}
;// CONCATENATED MODULE: ../../node_modules/react-i18next/dist/es/Translation.js


var Translation_excluded = (/* unused pure expression or super */ null && (["ns", "children"]));

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
;// CONCATENATED MODULE: ../../node_modules/react-i18next/dist/es/I18nextProvider.js


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
;// CONCATENATED MODULE: ../../node_modules/react-i18next/dist/es/useSSR.js


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
;// CONCATENATED MODULE: ../../node_modules/react-i18next/dist/es/withSSR.js


var withSSR_excluded = (/* unused pure expression or super */ null && (["initialI18nStore", "initialLanguage"]));
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
;// CONCATENATED MODULE: ../../node_modules/react-i18next/dist/es/index.js









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
// EXTERNAL MODULE: ../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/TableCell/index.scss
var TableCell = __webpack_require__(648);
;// CONCATENATED MODULE: ./src/TableCell/index.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(TableCell/* default */.A, options);




       /* harmony default export */ const src_TableCell = (TableCell/* default */.A && TableCell/* default */.A.locals ? TableCell/* default */.A.locals : undefined);

;// CONCATENATED MODULE: ./src/TableCell/index.tsx


const TableCell_TableCell = props => {
  const {
    parentId,
    showTip,
    sortable,
    collapse,
    isParent,
    maxWidth,
    render,
    rowData,
    prop,
    label,
    rowIndex,
    colIndex,
    value,
    eidtable,
    align = "center",
    width,
    onChange,
    onEditCancel,
    onEditOK,
    onExpand
  } = props;
  const [isEditing, setIsEditing] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false);
  const [editedValue, setEditedValue] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(value || ""); // 最终展示的值
  const wrapperRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  const handleDoubleClick = () => {
    eidtable && setIsEditing(true);
  };
  const handleBlur = e => {
    const value = e.target.value;
    setIsEditing(false);
    if (true) {
      setEditedValue(value);
      onEditOK && onEditOK(value);
    }
  };
  const handleChange = e => {};
  const handleExpandIconClick = e => {
    e.stopPropagation();
    onExpand && onExpand();
  };

  // 判断每一列的 对齐方式
  const judgeTdAlign = () => {
    switch (align) {
      case "start":
        return "justify-content-start";
      case "end":
        return "justify-content-end";
      default:
        return "justify-content-center";
    }
  };

  // 这边必须要写一个监听传递过来的value的钩子函数，因为cell展示的值是 editValue
  // 当传递过来的value发生变化时，将它重新赋值给cell要展示的值
  // 如果cell要展示的值是 value，就可以不用写
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    setEditedValue(value);
  }, [value]);
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "table-cell d-flex ".concat(judgeTdAlign()),
    style: {
      width: "100%"
    }
  }, render ? render(editedValue, rowData, rowIndex, prop, colIndex) : /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "table-cell-wrapper",
    style: {
      display: "inline-block",
      width: "100%"
    },
    onDoubleClick: handleDoubleClick,
    ref: wrapperRef
  }, isEditing ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    style: {
      width: wrapperRef.current ? "".concat(wrapperRef.current.clientWidth, "px") : "100%",
      boxSizing: "border-box"
    }
  }) : /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "table-cell-content"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "value d-flex align-items-center ".concat(judgeTdAlign())
  }, isParent ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("i", {
    onClick: handleExpandIconClick,
    className: "fa-solid fa-chevron-right me-2 ".concat(collapse ? "table-cell-folder-rotate-down" : "", " collapse-icon")
  }) : parentId && colIndex === 0 ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
    className: "ps-3"
  }) : null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    style: {
      maxWidth: showTip && parseFloat(maxWidth) > parseFloat(width) - 20 ? parseFloat(width) - 20 + "px" : maxWidth
    },
    className: "ellipsis-1 "
  }, editedValue)))));
};
/* harmony default export */ const src_TableCell_0 = (TableCell_TableCell);
// EXTERNAL MODULE: ../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/index.scss
var cjs_ruleSet_1_rules_1_use_2_src = __webpack_require__(483);
;// CONCATENATED MODULE: ./src/index.scss

      
      
      
      
      
      
      
      
      

var src_options = {};

src_options.styleTagTransform = (styleTagTransform_default());
src_options.setAttributes = (setAttributesWithoutAttributes_default());

      src_options.insert = insertBySelector_default().bind(null, "head");
    
src_options.domAPI = (styleDomAPI_default());
src_options.insertStyleElement = (insertStyleElement_default());

var src_update = injectStylesIntoStyleTag_default()(cjs_ruleSet_1_rules_1_use_2_src/* default */.A, src_options);




       /* harmony default export */ const src = (cjs_ruleSet_1_rules_1_use_2_src/* default */.A && cjs_ruleSet_1_rules_1_use_2_src/* default */.A.locals ? cjs_ruleSet_1_rules_1_use_2_src/* default */.A.locals : undefined);

// EXTERNAL MODULE: ../components/Tooltip/index.js
var Tooltip = __webpack_require__(214);
var Tooltip_default = /*#__PURE__*/__webpack_require__.n(Tooltip);
// EXTERNAL MODULE: ../components/Utils/index.js
var Utils = __webpack_require__(36);
;// CONCATENATED MODULE: ./src/index.tsx







const recursiveGenerateTableHeaderRows = function (columns) {
  let newRows = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  columns.forEach(column => {
    if (column.children) {
      recursiveGenerateTableHeaderRows(column.children, newRows);
    } else {
      newRows.push(column);
    }
  });
  return newRows;
};
const Table = props => {
  const {
    headerPadding = "py-1",
    pageSizeOptions = [5, 10, 15, 20],
    pagination = false,
    pageSize = 10,
    currentPage = 1,
    showTotal = false,
    compact,
    showTip,
    checkAll,
    tdPadding = "px-2 py-3",
    clickChecked,
    showHeader = true,
    defaultCheckedList,
    headerFontWeight = "normal",
    tableWidth,
    // 控制 table的宽度，太宽的话 可以形成滚动条
    tableBGC,
    tableRef,
    activeId,
    maxWidth,
    showIndex = false,
    multiple = false,
    id = "id",
    trPointer = false,
    align,
    collection,
    collapse = true,
    expandAll = false,
    size = "lg",
    data,
    columns,
    propsData,
    tableHover = true,
    tableStriped = false,
    tableBorderd = false,
    tableBorderless = false,
    headColor = "null",
    captionContent,
    captionPosition = "top",
    tableResponsive = "xxl",
    eidtable = false,
    headSticky = true,
    headTextColor = "black",
    headBGC = "",
    divider,
    maxHeight,
    minHeight = "0px",
    onRowDoubleClick,
    onRowClick,
    onPageChange,
    onPageSizeChange
  } = props;
  const [tableData, setTableData] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)([]);
  const [originalTableData, setOriginalTableData] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)([]);
  const [tableHeaders, setTableHeaders] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)([]);
  const [updateKey, setUpdateKey] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(0);
  const [theadRows, setTheadRows] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)([]);
  const [maxDepth, setMaxDepth] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(1);

  // 分页相关状态
  const [currentPageState, setCurrentPageState] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(currentPage);
  const [pageSizeState, setPageSizeState] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(pageSize);
  const [totalPages, setTotalPages] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(0);
  const [paginatedData, setPaginatedData] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)([]);

  // 唯一 id 加上 uniqId 防止多个表格的相同复选框冲突
  const uniqId = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useId)();

  // 折叠的逻辑
  const handleCollapseClick = row => {
    const recursiveChangeCollapse = (data, id) => {
      return data.map((item, index) => {
        if (item[id] === row[id]) {
          item.collapse = !item.collapse;
        }
        if (item.children) {
          recursiveChangeCollapse(item.children, id);
        }
        return item;
      });
    };
    const newTableData = recursiveChangeCollapse(tableData, id);
    setTableData(newTableData);
  };
  const generateHeaderStyle = position => {
    switch (position) {
      case "start":
        return "flex-start";
      case "end":
        return "flex-end";
      default:
        return "center";
    }
  };
  const judgeSortIconBGC = (prop, isDown) => {
    const findItem = tableHeaders === null || tableHeaders === void 0 ? void 0 : tableHeaders.find(item => item.prop === prop);
    if (!findItem) return;
    if (isDown) {
      if (findItem.isDown) {
        return "7px solid red";
      }
    } else {
      if (findItem.isUp) {
        return "7px solid red";
      }
    }
  };

  // 判断每一列的 对齐方式
  const judgeTdAlign = data => {
    switch (data.align || align) {
      case "start":
        return "justify-content-start";
      case "end":
        return "justify-content-end";
      default:
        return "justify-content-center";
    }
  };

  /**
   *
   * @param data 父级的那一行数据
   * @param colProps 当前列的属性
   * @param colIndex 当前列的索引
   * @returns
   */
  const judgeChildCellAlign = (data, colProps, colIndex) => {
    var _data$children;
    return !colIndex && (_data$children = data.children) !== null && _data$children !== void 0 && _data$children.length ? "start" // 父级存在子级时，第一列左对齐
    : colProps.align || align;
  };

  // 排序的逻辑--坑：一定要使用 [...preArr].sort，不能直接preArr.sort，这样会影响原来的数据，有Bug！！！
  const handleSortable = (prop, isDown) => {
    const tempData = JSON.parse(JSON.stringify(data));
    setTableHeaders(preArr => preArr.map(item => {
      if (prop === item.prop) {
        if (isDown) {
          item.isDown = !item.isDown;
          item.isUp = false;
          // 需要降序排序
          if (item.isDown) {
            setTableData(preArr => {
              // 先对整个preArr进行深拷贝--不然会把原来的数据也改变掉，导致取消排序的时候无法正确的恢复数据到最初状态
              const newArr = JSON.parse(JSON.stringify(preArr));
              return newArr.map(item => {
                // 对item.children进行深拷贝（假设它是数组，如果可能不存在要做相应的判断处理）
                const childrenCopy = item.children ? JSON.parse(JSON.stringify(item.children)) : [];
                if (childrenCopy.length > 0) {
                  // 对拷贝后的childrenCopy进行排序
                  childrenCopy.sort((a, b) => a[prop] < b[prop] ? 1 : -1);
                  item.children = childrenCopy;
                }
                return item;
              }).sort((a, b) => a[prop] < b[prop] ? 1 : -1);
            });
          } else {
            setTableData(tempData);
          }
        } else {
          item.isUp = !item.isUp;
          item.isDown = false;
          // 需要升序排序
          if (item.isUp) {
            setTableData(preArr => {
              // 先对整个preArr进行深拷贝--不然会把原来的数据也改变掉，导致取消排序的时候无法正确的恢复数据到最初状态
              const newArr = JSON.parse(JSON.stringify(preArr));
              return newArr.map(item => {
                // 对item.children进行深拷贝（假设它是数组，如果可能不存在要做相应的判断处理）
                const childrenCopy = item.children ? JSON.parse(JSON.stringify(item.children)) : [];
                if (childrenCopy.length > 0) {
                  // 对拷贝后的childrenCopy进行排序
                  childrenCopy.sort((a, b) => a[prop] > b[prop] ? 1 : -1);
                  item.children = childrenCopy;
                }
                return item;
              }).sort((a, b) => a[prop] > b[prop] ? 1 : -1);
            });
          } else {
            setTableData(tempData);
          }
        }
      }
      return item;
    }));

    // setTableData((preArr: any) => preArr.sort((a: any, b: any) => (a[prop] > b[prop] ? 1 : -1)));
    /* if (isDown) {
    const findItem = tableHeaders.find((item: any) => item.prop === prop);
     } */
  };
  /**
   *
   * @param array 列数组
   * @param data 父级的那一行数据，巧妙化解了第一列左对齐的问题，可以通过父级是否有子数据来判断是否需要左对齐
   * @param rowIndex 行索引
   * @param verticalAlignObject 垂直对齐方式对象
   * @param widthObject 宽度对象
   * @param textPositionObject 文字位置对象
   * @param level 层级
   * @returns
   */

  const renderChildren = function (array, data, rowIndex, verticalAlignObject, widthObject, textPositionObject) {
    let level = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
    level++;
    return data.collapse &&
    // 可以折叠并且有子级才去展示子数据
    data.children && data.children.map((childData, index) => {
      var _childData$children;
      return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(external_root_React_commonjs2_react_commonjs_react_amd_react_.Fragment, {
        key: childData[id]
      }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("tr", {
        onClick: e => handleRowClick(childData, e),
        className: "tr-content tr-content ".concat(childData.checked === true ? "tr-checked" : "", " collapse-table-tr animate__animated animate__fadeIn"),
        style: {
          ...(clickChecked || trPointer ? {
            cursor: "pointer"
          } : ""),
          ...(!tableBorderd ? {
            borderBottom: "1px solid #f0f0f0"
          } : {})
        },
        key: childData[id]
        /* style={{
                ...(data.collapse ? { display: '' } : { display: 'none' }),
            }} */
      }, collection && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("td", {
        scope: "row",
        style: {
          minWidth: !compact ? "50px" : "30px",
          width: !compact ? "50px" : "30px",
          maxWidth: !compact ? "50px" : "30px",
          verticalAlign: "middle"
        },
        className: "text-center py-1 ".concat(compact ? "py-0 px-1" : tdPadding)
      }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("input", {
        className: tdPadding,
        name: childData[id] + uniqId // 加上 uniqId 防止多个表格的相同复选框冲突
        ,
        id: childData[id] + uniqId,
        checked: childData.checked === true,
        onChange: e => handleCheckboxChange(childData, e),
        type: !multiple ? "radio" : "checkbox"
      })), showIndex && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("th", {
        className: "text-center py-1 ".concat(compact ? "py-0 px-1" : tdPadding),
        style: {
          minWidth: !compact ? "50px" : "30px",
          width: !compact ? "50px" : "30px",
          maxWidth: !compact ? "50px" : "30px",
          padding: "0px",
          alignContent: "center",
          fontWeight: headerFontWeight
        }
      }, "".concat(rowIndex + 1, ".").concat(index + 1)), props.children ? external_root_React_commonjs2_react_commonjs_react_amd_react_default().Children.map(array, (col, colIndex) => {
        let colProps = col.props; // 有 children 就肯定有 props
        let prop = colProps.prop;
        if ( /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().isValidElement(col)) {
          const enhancedChild = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().cloneElement(col, {
            parentId: childData.parentId,
            // 父级id
            collapse: childData.collapse,
            onExpand: () => handleCollapseClick(childData),
            isParent: !colIndex && childData.children,
            // 是否是父级的条件：第一列且存在 children
            value: childData[prop],
            rowData: childData,
            eidtable,
            prop: prop,
            rowIndex: rowIndex,
            colIndex: colIndex,
            align: judgeChildCellAlign(data, colProps, colIndex),
            maxWidth: colProps.maxWidth || maxWidth,
            showTip: colProps.showTip || showTip
          });
          return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("td", {
            // 这边也不用在子级的第一列在最左侧了
            // colIndex === 0 ? 'text-start' :
            className: "text-".concat(colProps.align, " py-1 ").concat(compact ? "py-0 px-1" : tdPadding),
            style: {
              verticalAlign: verticalAlignObject[prop],
              width: widthObject[prop],
              overflowWrap: "break-word",
              wordWrap: "break-word",
              wordBreak: "break-word",
              maxWidth: colProps.maxWidth || maxWidth,
              ["".concat(!colIndex ? "paddingLeft" : "")]: "40px"
            },
            key: colIndex
          }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
            className: "collapse-table-td d-flex ".concat(judgeTdAlign(colProps)),
            style: {
              paddingLeft: !colIndex ? level * 15 + "px" : 0
            }
          }, colProps.showTip ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((Tooltip_default()), {
            position: "right",
            text: childData[prop]
          }, enhancedChild) : enhancedChild));
        }
      }) : recursiveGenerateTableHeaderRows(columns).map((col, colIndex) => {
        let colProps = col.props ? col.props : col; // 有 children 就肯定有 props，没有 children 就没有 props，直接取 col
        let prop = colProps.prop;
        const childTableCellProps = {
          parentId: childData.parentId,
          // 父级id
          collapse: childData.collapse,
          onExpand: () => handleCollapseClick(childData),
          isParent: !colIndex && childData.children,
          value: childData[prop],
          rowData: childData,
          eidtable,
          prop: prop,
          rowIndex: rowIndex,
          colIndex: colIndex,
          align: judgeChildCellAlign(data, colProps, colIndex),
          maxWidth: colProps.maxWidth || maxWidth,
          showTip: colProps.showTip || showTip
        };
        return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("td", {
          // 这边也不用在子级的第一列在最左侧了
          // colIndex === 0 ? 'text-start' :
          className: "text-".concat(colProps.align, " py-1 ").concat(compact ? "py-0 px-1" : tdPadding),
          style: {
            verticalAlign: verticalAlignObject[prop],
            width: widthObject[colProps.prop],
            overflowWrap: "break-word",
            wordWrap: "break-word",
            wordBreak: "break-word",
            maxWidth: colProps.maxWidth || maxWidth,
            ["".concat(!colIndex ? "paddingLeft" : "")]: "40px"
          },
          key: colIndex
        }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
          className: "collapse-table-td d-flex ".concat(judgeTdAlign(colProps)),
          style: {
            paddingLeft: !colIndex ? level * 15 + "px" : 0
          }
        }, colProps.showTip ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((Tooltip_default()), {
          position: "right",
          text: childData[prop]
        }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(src_TableCell_0, childTableCellProps)) : /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(src_TableCell_0, childTableCellProps)));
      })), ((_childData$children = childData.children) === null || _childData$children === void 0 ? void 0 : _childData$children.length) > 0 ? renderChildren(array, childData, rowIndex, verticalAlignObject, widthObject, textPositionObject, level) : null);
    });
  };

  // 计算每一列的宽度
  const calculateHeaderWidth = columns => {
    console.log("calculateHeaderWidth-------------: ");
    const titleLengthObj = {};
    const newHeaderLabels = columns.map(item => {
      return {
        title: item.props.title,
        prop: item.props.prop
      };
    });
    const totalLabelLength = newHeaderLabels.reduce((acc, curr) => {
      var _curr$title;
      return acc + ((_curr$title = curr.title) === null || _curr$title === void 0 ? void 0 : _curr$title.length);
    }, 0);
    newHeaderLabels.forEach(item => {
      var _item$title;
      titleLengthObj[item.prop] = Number((((_item$title = item.title) === null || _item$title === void 0 ? void 0 : _item$title.length) / totalLabelLength).toFixed(2)) * 100 + "%";
    });
    return titleLengthObj;
  };

  //   渲染表头宽度和对齐方式所需数据
  let array = [];
  if (props.children) {
    var _props$children;
    if (!((_props$children = props.children) !== null && _props$children !== void 0 && _props$children.length)) {
      array.push(props.children);
    } else {
      array = props.children;
    }
  } else {
    array = recursiveGenerateTableHeaderRows(columns).map(item => {
      item.props = item;
      return item;
    });
  }
  let widthObject = {};
  const textPositionObject = {}; // 优先使用 每一列的 align，table 的 align 次之，都没的话默认居中
  const verticalAlignObject = {};
  array.forEach(item => {
    if (item !== null && item !== void 0 && item.props) {
      widthObject[item.props.prop] = item.props.width;
      // 优先使用 每一列的 align，table 的 align 次之，都没的话默认居中(align默认等于 center)
      textPositionObject[item.props.prop] = item.props.align || align;
      verticalAlignObject[item.props.prop] = item.props.verticalAlign || "middle";
    }
  });
  if (!(0,Utils.isEmptyO)(widthObject) && Object.values(widthObject).every(item => !item)) {
    widthObject = calculateHeaderWidth(array);
  }
  /**
   * 表头渲染逻辑
   */
  const generateTheadRows = columns => {
    const maxDepth = findMaxDepth(columns);
    setMaxDepth(maxDepth);
    const rows = Array.from({
      length: maxDepth
    }, () => []);
    const processColumns = (cols, depth) => {
      cols.forEach(col => {
        var _col$children;
        const cell = {
          title: col.title,
          colSpan: getColSpan(col, depth),
          rowSpan: (_col$children = col.children) !== null && _col$children !== void 0 && _col$children.length ? 1 : maxDepth - depth,
          ...col
        };
        if (!rows[depth]) {
          rows[depth] = [];
        }
        rows[depth].push(cell);
        if (col.children) {
          processColumns(col.children, depth + 1);
        }
      });
    };
    processColumns(columns, 0);
    return rows;
  };
  const findMaxDepth = columns => {
    let maxDepth = 0;
    columns.forEach(column => {
      const depth = getColumnDepth(column);
      if (depth > maxDepth) {
        maxDepth = depth;
      }
    });
    return maxDepth;
  };
  const getColumnDepth = column => {
    if (!column.children) {
      return 1;
    }
    let maxChildDepth = 0;
    column.children.forEach(child => {
      const childDepth = getColumnDepth(child);
      if (childDepth > maxChildDepth) {
        maxChildDepth = childDepth;
      }
    });
    return maxChildDepth + 1;
  };
  const getColSpan = (column, depth) => {
    if (!column.children) {
      return 1;
    }
    let totalColSpan = 0;
    column.children.forEach(child => {
      totalColSpan += getColSpan(child, depth + 1);
    });
    return totalColSpan;
  };
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    const TheadRows = generateTheadRows(columns);
    setTheadRows(TheadRows);
  }, [columns]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {}, []);
  const renderTableHeader = () => {
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("thead", {
      style: {
        position: headSticky ? "sticky" : "unset",
        top: 0,
        backgroundColor: "".concat(headBGC),
        zIndex: 999
      },
      className: "text-".concat(headTextColor)
    }, theadRows.map((child, index) => {
      if (child !== null && child !== void 0 && child.length) {
        return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("tr", {
          key: index
        }, index === 0 && collection && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("th", {
          className: "".concat(compact ? "p-0" : ""),
          rowSpan: maxDepth,
          scope: "col th-collection",
          style: {
            minWidth: !compact ? "50px" : "30px",
            width: !compact ? "50px" : "30px",
            maxWidth: !compact ? "50px" : "30px",
            textAlign: "center"
          }
        }, multiple && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("input", {
          checked: checkedAll,
          onChange: handleCheckedAllChange,
          type: !multiple ? "radio" : "checkbox"
        })), index === 0 && showIndex && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("th", {
          className: "".concat(compact ? "p-0" : ""),
          rowSpan: maxDepth,
          scope: "col th-index",
          style: {
            minWidth: !compact ? "50px" : "30px",
            width: !compact ? "50px" : "30px",
            maxWidth: !compact ? "50px" : "30px"
          }
        }), child.map(item => {
          return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("th", {
            rowSpan: item.rowSpan,
            colSpan: item.colSpan,
            style: {
              whiteSpace: "nowrap",
              width: widthObject[item.prop],
              fontWeight: headerFontWeight
            },
            className: "".concat(textPositionObject[item.prop] ? "text-" + textPositionObject[item.prop] : "", " ").concat(compact ? "p-0" : "", " align-middle"),
            scope: "col",
            key: item.title
          }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
            className: "header-content ".concat(headerPadding),
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: item.headerAlign || generateHeaderStyle(textPositionObject[item.prop])
            }
          }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
            className: "header-text"
          }, item.title), item.sortable && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
            className: "header-icon ms-1"
          }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("i", {
            style: {
              borderBottom: judgeSortIconBGC(item.prop) || "7px solid #000"
            },
            onClick: () => handleSortable(item.prop),
            className: "icon sort-up"
          }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("i", {
            style: {
              borderTop: judgeSortIconBGC(item.prop, true) || "7px solid #000"
            },
            onClick: () => handleSortable(item.prop, true),
            className: "icon sort-down"
          }))));
        }));
      }
    }));
  };

  // 渲染折叠的子组件
  const renderTableBody = () => {
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("tbody", {
      className: "table-body ".concat(divider ? "table-group-divider" : "")
    }, tableData.length > 0 && paginatedData.map((data, rowIndex) => {
      return (
        /*#__PURE__*/
        // 加上 uniqId 防止多个表格的相同复选框冲突
        external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(external_root_React_commonjs2_react_commonjs_react_amd_react_.Fragment, {
          key: data[id] + uniqId
        }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("tr", {
          onClick: e => handleRowClick(data, e)
          // onDoubleClick={() => handleRowDoubleClick(data)}
          ,
          key: rowIndex,
          className: "tr-content ".concat(data.checked === true ? "tr-checked" : ""),
          style: {
            ...(clickChecked || trPointer ? {
              cursor: "pointer"
            } : ""),
            ...(!tableBorderd ? {
              borderBottom: "1px solid #f0f0f0"
            } : {})
          }
        }, collection &&
        /*#__PURE__*/
        // 复选框
        external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("td", {
          scope: "row",
          style: {
            minWidth: !compact ? "50px" : "30px",
            width: !compact ? "50px" : "30px",
            maxWidth: !compact ? "50px" : "30px",
            verticalAlign: "middle"
          },
          className: "text-center py-1 ".concat(compact ? "py-0 px-1" : tdPadding)
        }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("input", {
          className: tdPadding,
          name: data[id] + uniqId // 加上 uniqId 防止多个表格的相同复选框冲突
          ,
          id: data[id] + uniqId,
          checked: data.checked === true,
          onChange: e => handleCheckboxChange(data, e),
          type: !multiple ? "radio" : "checkbox"
        })), showIndex &&
        /*#__PURE__*/
        // 索引框
        external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("td", {
          className: "text-center py-1 ".concat(compact ? "py-0 px-1" : tdPadding),
          scope: "col",
          style: {
            alignContent: "center",
            padding: "0px",
            minWidth: !compact ? "50px" : "30px",
            width: !compact ? "50px" : "30px",
            maxWidth: !compact ? "50px" : "30px"
            /* ...(data.children ? { backgroundColor: '#fff', boxShadow: 'none' } : {}), */
          }
        }, rowIndex + 1), props.children ? external_root_React_commonjs2_react_commonjs_react_amd_react_default().Children.map(array, (col, colIndex) => {
          const colProps = col.props; // 有 children 就肯定有 props
          let prop = colProps.prop;
          if ( /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().isValidElement(col)) {
            const enhancedChild = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().cloneElement(col, {
              onExpand: () => handleCollapseClick(data),
              isParent: !colIndex && collapse && data.children,
              value: data["".concat(prop)],
              rowData: data,
              eidtable,
              prop: prop,
              rowIndex: rowIndex,
              colIndex: colIndex,
              canCollapse: data.children,
              collapse: data.collapse,
              // 防止 Table 的 align 不生效的bug
              align: !colIndex && collapse && data.children ? "start" : colProps.align || align,
              width: widthObject[colProps.prop],
              maxWidth: colProps.maxWidth || maxWidth,
              showTip: colProps.showTip || showTip
            });
            return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("td", {
              // 父级第一列不需要在 最左侧了
              // !colIndex && collapse && data.children ? 'text-start' : `text-${textPositionObject[prop]}`
              className: "text-".concat(colProps.align || align, " py-1 ").concat(compact ? "py-0 px-1" : tdPadding),
              style: {
                verticalAlign: verticalAlignObject[prop],
                width: widthObject[colProps.prop],
                maxWidth: colProps.maxWidth || maxWidth,
                overflowWrap: "break-word",
                wordWrap: "break-word",
                wordBreak: "break-word",
                // 如果要默认展示一行，并且x轴太长可以滚动的话，则设置为nowrap
                // 注意：此时，外部设置的 width就没作用了，表格会自己根据内容来设置宽度
                whiteSpace: "nowrap"
                /*  [`${!colIndex && data.children ? 'paddingLeft' : ''}`]: '35px', */
              },
              key: colIndex
            }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
              className: "collapse-table-td d-flex ".concat(judgeTdAlign(colProps))
            }, colProps.showTip ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((Tooltip_default()), {
              text: data[prop]
            }, enhancedChild) : enhancedChild));
          }
        }) : recursiveGenerateTableHeaderRows(columns).map((col, colIndex) => {
          const colProps = col.props ? col.props : col; // 有 children 就肯定有 props，没有 children 的话，props 就是 col 本身
          let prop = colProps.prop;
          const tableCellProps = {
            onExpand: () => handleCollapseClick(data),
            isParent: !colIndex && collapse && data.children,
            value: data["".concat(prop)],
            rowData: data,
            eidtable,
            prop: prop,
            rowIndex: rowIndex,
            colIndex: colIndex,
            canCollapse: data.children,
            collapse: data.collapse,
            // 防止 Table 的 align 不生效的bug
            align: !colIndex && collapse && data.children ? "start" : colProps.align || align,
            width: widthObject[colProps.prop],
            maxWidth: colProps.maxWidth || maxWidth,
            showTip: colProps.showTip || showTip
          };
          return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("td", {
            // 父级第一列不需要在 最左侧了
            // !colIndex && collapse && data.children ? 'text-start' : `text-${textPositionObject[prop]}`
            className: "text-".concat(colProps.align || align, " py-1 ").concat(compact ? "py-0 px-1" : tdPadding),
            style: {
              verticalAlign: verticalAlignObject[prop],
              width: widthObject[colProps.prop],
              maxWidth: colProps.maxWidth || maxWidth,
              overflowWrap: "break-word",
              wordWrap: "break-word",
              wordBreak: "break-word",
              // 如果要默认展示一行，并且x轴太长可以滚动的话，则设置为nowrap
              // 注意：此时，外部设置的 width就没作用了，表格会自己根据内容来设置宽度
              whiteSpace: "nowrap"
              /*  [`${!colIndex && data.children ? 'paddingLeft' : ''}`]: '35px', */
            },
            key: colIndex
          }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
            className: "collapse-table-td d-flex ".concat(judgeTdAlign(colProps))
          }, colProps.showTip ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((Tooltip_default()), {
            text: data[prop]
          }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(src_TableCell_0, tableCellProps)) : /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(src_TableCell_0, tableCellProps)));
        })), renderChildren(array, data, rowIndex, verticalAlignObject, widthObject, textPositionObject))
      );
    }));
  };

  // 选择逻辑
  const [checkedAll, setCheckedAll] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false);

  /**
   *
   * 双击选中这条tr
   */
  const handleRowDoubleClick = row => {
    const finalChecked = !row.checked;
    setTableData(preArr => {
      return preArr.map(item => {
        if (item[id] === row[id]) {
          item.checked = !item.checked;
        } else {
          if (!multiple) {
            item.checked = false;
          }
        }
        return item;
      });
    });
    if (finalChecked) {
      onRowDoubleClick && onRowDoubleClick(row);
    } else {
      onRowDoubleClick && onRowDoubleClick({});
    }
  };
  const recursiveUpdateParentChecked = (child, parentData, id) => {
    const parent = parentData.find(item => {
      if (item[id] === child.parentId) {
        return item;
      } else {
        var _item$children;
        if ((_item$children = item.children) !== null && _item$children !== void 0 && _item$children.length) {
          return recursiveUpdateParentChecked(child, item.children, id);
        }
      }
    });
    // 如果找到该节点的 父节点
    if (!(0,Utils.isEmptyO)(parent)) {
      const allChildrenChecked = parent.children.every(child => child.checked === true);
      const someChildrenChecked = parent.children.some(child => child.checked === true);
      if (allChildrenChecked) {
        parent.checked = true;
      } else if (someChildrenChecked) {
        parent.checked = "partial"; // 表示部分选中，你可以根据需求自定义状态
      } else {
        parent.checked = false;
      }
      if (parent.parentId) {
        // 如果父节点还有父节点，递归招它的父节点然后更新
        recursiveUpdateParentChecked(parent, tableData, id);
      }
    } else {}
  };

  /**
   *
   * 单击tr
   */
  const handleRowClick = (row, e) => {
    onRowClick && onRowClick(row);
    onRowDoubleClick && onRowDoubleClick(row);
    if (clickChecked) {
      // 新增标志位，用于判断是否是由复选框触发的点击
      const isCheckboxClick = e.target.type === "checkbox" || e.target.type === "radio";
      if (!isCheckboxClick) {
        handleCheckboxChange(row, e);
      }
    }
  };

  // 递归选中 默认选中的节点，子节点也要
  const recursiveCheckDefaultTableData = (data, defaultCheckedList) => {
    return data.map(item => {
      var _item$children2;
      if (defaultCheckedList.includes(item[id])) {
        item.checked = true;
        if (item.children) {
          // 父节点被选中，如果它有子节点，则递归选中子节点
          directlyUpdateChildrenCheckState(item.children, true);
        }
      }
      if ((_item$children2 = item.children) !== null && _item$children2 !== void 0 && _item$children2.length) {
        item.children = recursiveCheckDefaultTableData(item.children, defaultCheckedList);
      }
      return item;
    });
  };

  // 新增 默认选中 / 全选
  const recursiveCheckAll = data => {
    return data.map(item => {
      var _item$children3;
      item.checked = true;
      if ((_item$children3 = item.children) !== null && _item$children3 !== void 0 && _item$children3.length) {
        recursiveCheckAll(item.children);
      }
      return item;
    });
  };
  const handleDefaultChecked = tempData => {
    if (checkAll) {
      const newTableData = recursiveCheckAll(tempData);
      setTableData(newTableData);
      setCheckedAll(true); // 头部也要勾选上
    } else if (Array.isArray(defaultCheckedList) && defaultCheckedList.length > 0) {
      // 如果传入的是数组，则去 递归选中这些节点，子节点也要
      const newTableData = recursiveCheckDefaultTableData(JSON.parse(JSON.stringify(tempData)), defaultCheckedList);
      setTableData(newTableData);
    }
  };

  // 父节点直接更新它的子节点的 checked 状态
  const directlyUpdateChildrenCheckState = (data, checked) => {
    return data.map(item => {
      var _item$children4;
      item.checked = checked;
      if ((_item$children4 = item.children) !== null && _item$children4 !== void 0 && _item$children4.length) {
        directlyUpdateChildrenCheckState(item.children, checked);
      }
      return item;
    });
  };

  // 点击 单/复选框
  const handleCheckboxChange = (row, e) => {
    e.stopPropagation();
    setUpdateKey(updateKey + 1);

    // 更新 tableData 中的 checked 状态
    const recursiveUpdateTableDataCheckState = data => {
      return data.map(item => {
        var _item$children6;
        // 如果刚好点击的是第一级的节点，则进入到这个if，选中它的所有子节点
        if (item[id] === row[id]) {
          var _item$children5;
          item.checked = !(item.checked === true ? true : false); // 为了做 partial 判断
          if ((_item$children5 = item.children) !== null && _item$children5 !== void 0 && _item$children5.length) {
            item.children = directlyUpdateChildrenCheckState(item.children, item.checked === true ? true : false);
          }
          // 如果点击的不是第一级的节点，有可能是二级节点，也要递归执行
          // 如果去掉这个，只会在点击 一级节点 的时候会把它的子节点全部选中
        } else if ((_item$children6 = item.children) !== null && _item$children6 !== void 0 && _item$children6.length) {
          item.children = recursiveUpdateTableDataCheckState(item.children); // 这步要先执行，不然下面的 else if 判断不会进入 不符合的父节点的子级节点
        } /* else if (!multiple) {
                item.checked = false;
            } */
        return item;
      });
    };

    // 如果是单选，则在选择完一个节点后，要把其他节点的 check 状态都置为 false
    const recursiveUpdateOtherTableDataCheck = (data, row) => {
      return data.map(item => {
        if (item[id] !== row[id]) {
          var _item$children7;
          item.checked = false;
          if ((_item$children7 = item.children) !== null && _item$children7 !== void 0 && _item$children7.length) {
            item.children = recursiveUpdateOtherTableDataCheck(item.children, row);
          }
        }
        return item;
      });
    };
    if (clickChecked || collection) {
      // 1. 如果可以选中，则去更新选中状态
      recursiveUpdateTableDataCheckState(tableData);
      // 2. 如果是单选，则在选择完一个节点后，要把其他节点的 check 状态都置为 false
      if (!multiple) {
        recursiveUpdateOtherTableDataCheck(tableData, row);
      }
    }
    // 3. 如果有父节点，则去更新父节点的选中状态
    if (row.parentId) {
      recursiveUpdateParentChecked(row, tableData, id);
    }
    // 4. 判断是不是全选
    setCheckedAll(areAllChecked(tableData));
  };
  function areAllChecked(data) {
    // 遍历数组中的每个对象
    return data === null || data === void 0 ? void 0 : data.every(item => {
      // 检查当前对象的 `checked` 属性
      if (!item.checked) return false;

      // 如果对象有 `children` 属性，递归检查其子对象
      if (item.children) {
        return areAllChecked(item.children);
      }
      return true;
    });
  }

  // 点击 全选 / 全不选
  const handleCheckedAllChange = e => {
    const checkedAll = e.target.checked;
    setCheckedAll(checkedAll);
    const updateCheckedState = data => {
      return data.map(item => {
        // 更新当前项目的 `checked` 状态
        item.checked = checkedAll;

        // 如果当前项目有 `children` 属性，递归更新其 `children` 的 `checked` 状态
        if (item.children) {
          item.children = updateCheckedState(item.children);
        }
        return item;
      });
    };
    setTableData(updateCheckedState(tableData));
  };

  // 清空选中
  const handleClearChecked = () => {
    // 递归调用清空选中
    directlyUpdateChildrenCheckState(tableData, false);
  };

  // 递归获取所有选中项
  const recursiveGetCheckedList = function (data) {
    let checkedList = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    data.forEach(item => {
      if (item.checked === true) {
        checkedList.push(item);
      }
      if (item.children) {
        recursiveGetCheckedList(item.children, checkedList);
      }
    });
    return checkedList;
  };
  const handleGetCheckedList = () => {
    const checkedList = [];
    return recursiveGetCheckedList(JSON.parse(JSON.stringify(tableData)), checkedList);
  };
  const handleExpandAll = () => {
    const data = recursiveExpandTable(JSON.parse(JSON.stringify(tableData)), true);
    setTableData(data);
  };
  const handleFoldAll = () => {
    const data = recursiveExpandTable(JSON.parse(JSON.stringify(tableData)), false);
    setTableData(data);
  };

  // 滚到底部
  const handleScrollToEnd = () => {
    // 表格滚动到底部
    setTimeout(() => {
      const table = document.querySelector(".table-wrapper");
      const tableBody = document.querySelector(".table-body");
      if (tableBody && table) {
        table.scrollTo({
          top: tableBody.clientHeight,
          behavior: "smooth"
        });
      }
    }, 100);
  };

  // 滚到底部
  const handleScrollToTop = () => {
    // 表格滚动到底部
    const table = document.querySelector(".table-wrapper");
    if (table) {
      table.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  };

  // 递归设置 pid
  const recursiveSetParentId = (data, parentId) => {
    return data.map(item => {
      item.parentId = parentId;
      if (item.children) {
        recursiveSetParentId(item.children, item[id]);
      }
      return item;
    });
  };

  // 递归展开表格
  const recursiveExpandTable = function (tempData) {
    let state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : expandAll;
    return tempData.map(item => {
      item.collapse = state;
      if (item.children) {
        recursiveExpandTable(item.children, state); // 记得把 state 传到子级去去，不然子节点都会默认展开
      }
      return item;
    });
  };
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    // 这个 useEffect 这边操作 tableData的地方 都要用同一个数据 tempData，不然数据会不对
    if (!data.length) {
      setTableData([]);
      setCheckedAll(false); // 数据为空的时候，也要把 表头全选置空
      return;
    }
    let tempData = JSON.parse(JSON.stringify(data));
    tempData = recursiveSetParentId(tempData, 0);
    const checkedAll = areAllChecked(tempData);
    setCheckedAll(checkedAll);
    if (collapse) {
      setTimeout(() => {
        const tableData = recursiveExpandTable(tempData);
        setTableData(tableData);
        setOriginalTableData(tableData);
      }, 10);
    } else {
      setTableData(tempData);
      setOriginalTableData(tempData);
    }
    if (tempData.length) {
      // 必须给个 10ms 的延迟，不然默认选中会出现问题
      setTimeout(() => {
        handleDefaultChecked(tempData);
      }, 10);
    }
  }, [data]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    /* setTableData((preData: any) =>
          preData.map((item: any) => {
              const isChildrenAllChecked = areAllChecked(item.children);
              if (isChildrenAllChecked) {
                  item.checked = true;
              }
              return item;
          })
      ); */
  }, [tableData]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (activeId) {
      const tempData = JSON.parse(JSON.stringify(data));
      const newTableData = tempData.map(item => {
        // 判断 id 是否存在，如果 id 不存在，并且 activeId 也不存在，那也是相等的，得排除
        if (item[id] && item[id] === activeId) {
          item.checked = true;
        } else {
          item.checked = false;
        }
        return item;
      });
      setTimeout(() => {
        setTableData(newTableData); // 要给个 10ms 的定时器，因为上面其他的操作都给了 10ms 的定时器，不然数据会不对
      }, 10);
    }
  }, [activeId, data]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    setTableHeaders(columns);
  }, [columns]);

  /*     useEffect(() => {
    
  }, [tableHeaders]); */

  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useImperativeHandle)(tableRef, () => ({
    clearChecked: handleClearChecked,
    getCheckedList: handleGetCheckedList,
    expandAll: handleExpandAll,
    foldAll: handleFoldAll,
    scrollToEnd: handleScrollToEnd,
    scrollToTop: handleScrollToTop
  }));

  // 计算分页数据
  const calculatePaginatedData = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useCallback)(() => {
    if (!pagination) {
      setPaginatedData(tableData);
      return;
    }
    const startIndex = (currentPageState - 1) * pageSizeState;
    const endIndex = startIndex + pageSizeState;
    const newPaginatedData = tableData.slice(startIndex, endIndex);
    setPaginatedData(newPaginatedData);
    setTotalPages(Math.ceil(tableData.length / pageSizeState));
  }, [tableData, currentPageState, pageSizeState, pagination]);

  // 生成页码数组
  // 生成页码数组
  const generatePageNumbers = () => {
    const result = [];
    const maxPagesShow = 5; // 最多显示5个页码（不包括省略号和首尾页码）

    if (totalPages <= maxPagesShow + 2) {
      // 如果总页数较少，直接显示所有页码
      for (let i = 1; i <= totalPages; i++) {
        result.push({
          page: i,
          type: "page"
        });
      }
    } else {
      // 始终显示第一页
      result.push({
        page: 1,
        type: "page"
      });
      if (currentPageState <= maxPagesShow - 2) {
        // 当前页靠近开始
        for (let i = 2; i <= maxPagesShow; i++) {
          result.push({
            page: i,
            type: "page"
          });
        }
        result.push({
          page: 0,
          type: "ellipsis"
        });
        result.push({
          page: totalPages,
          type: "page"
        });
      } else if (currentPageState >= totalPages - (maxPagesShow - 3)) {
        // 当前页靠近结束
        result.push({
          page: 0,
          type: "ellipsis"
        });
        for (let i = totalPages - (maxPagesShow - 1); i <= totalPages; i++) {
          result.push({
            page: i,
            type: "page"
          });
        }
      } else {
        // 当前页在中间
        result.push({
          page: 0,
          type: "ellipsis"
        });
        for (let i = currentPageState - 1; i <= currentPageState + 1; i++) {
          result.push({
            page: i,
            type: "page"
          });
        }
        result.push({
          page: 0,
          type: "ellipsis"
        });
        result.push({
          page: totalPages,
          type: "page"
        });
      }
    }
    return result;
  };

  // 处理页码改变
  const handlePageChange = (page, type) => {
    if (type === "prev") {
      if (page <= 0) return;
    } else if (type === "next") {
      if (page >= totalPages + 1) return;
    }
    setCurrentPageState(page);
    onPageChange === null || onPageChange === void 0 || onPageChange(page);
  };

  // 处理每页条数改变
  const handlePageSizeChange = size => {
    setPageSizeState(size);
    setCurrentPageState(1); // 重置到第一页
    onPageSizeChange === null || onPageSizeChange === void 0 || onPageSizeChange(size);
  };
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    calculatePaginatedData();
  }, [calculatePaginatedData]);

  // 渲染分页组件
  const renderPagination = () => {
    if (!pagination) return null;
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
      className: "d-flex justify-content-between align-items-center p-2"
    }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
      className: "d-flex align-items-center"
    }, showTotal && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
      className: "me-3"
    }, "\u5171 ", tableData.length, " \u6761"), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("select", {
      className: "form-select form-select-sm me-2",
      style: {
        width: "100px"
      },
      value: pageSizeState,
      onChange: e => handlePageSizeChange(Number(e.target.value))
    }, pageSizeOptions.map(size => /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("option", {
      key: size,
      value: size
    }, size, " \u6761/\u9875")))), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
      className: "pagination d-flex align-items-center"
    }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("i", {
      onClick: () => handlePageChange(currentPageState - 1, "prev"),
      className: "prev-arrow rounded fa-solid fa-chevron-left ".concat(currentPageState === 1 ? "disabled" : "")
    }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
      className: "page-numbers d-flex align-items-center mx-2"
    }, generatePageNumbers().map((item, index) => /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, {
      key: index
    }, item.type === "page" ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("button", {
      className: "btn btn-sm page-number-item d-flex align-items-center justify-content-center mx-1 ".concat(item.page === currentPageState ? "btn-primary" : "btn-outline-secondary"),
      style: {
        minWidth: "24px",
        height: "26px"
      },
      onClick: () => handlePageChange(item.page)
    }, item.page) : /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
      className: "mx-1 d-flex align-items-center"
    }, "...")))), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("i", {
      className: "next-arrow rounded fa-solid fa-chevron-right ".concat(currentPageState === totalPages ? "disabled" : ""),
      onClick: () => handlePageChange(currentPageState + 1, "next")
    })));
  };
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    style: {
      minHeight: minHeight,
      maxHeight: maxHeight,
      overflow: "auto",
      width: tableWidth
    },
    className: "table-wrapper ".concat("table-responsive".concat("-" + tableResponsive))
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("table", {
    style: {
      background: tableBGC,
      width: tableWidth
    },
    className: "table ".concat(tableStriped ? "table-striped" : "", " ").concat(tableBorderd ? "table-bordered" : "table-borderless", " table-").concat(size, " ").concat(headColor ? "table-".concat(headColor) : "", " overflow-auto ").concat(paginatedData.length === 0 ? "mb-0" : "")
  }, showHeader && renderTableHeader(), renderTableBody()), paginatedData.length === 0 && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "text-center p-1"
  }, "\u6682\u65E0\u6570\u636E~"), renderPagination()));
};
Table.TableCell = src_TableCell_0;
/* harmony default export */ const src_0 = (withTranslation()(Table));
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});