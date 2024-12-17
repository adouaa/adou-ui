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
        const [tooltipContentPosition, settooltipContentPosition] = (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)({});
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
          }, 200); // 延迟100毫秒
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
              "border-color": "".concat(arrowBorderColor, " transparent transparent transparent")
            };
          } else if (position === "top-left") {
            return {
              bottom: commonArrowOfsset,
              right: right || finalHorizontal,
              "border-color": "".concat(arrowBorderColor, " transparent transparent transparent")
            };
          } else if (position === "top-right") {
            return {
              bottom: commonArrowOfsset,
              left: left || finalHorizontal,
              "border-color": "".concat(arrowBorderColor, " transparent transparent transparent")
            };
          } else if (position === "bottom") {
            return {
              top: commonArrowOfsset,
              left: "50%",
              "border-color": "transparent transparent ".concat(arrowBorderColor, " transparent")
            };
          } else if (position === "bottom-right") {
            return {
              top: commonArrowOfsset,
              left: left || finalHorizontal,
              "border-color": "transparent transparent ".concat(arrowBorderColor, " transparent")
            };
          } else if (position === "bottom-left") {
            return {
              top: commonArrowOfsset,
              right: right || finalHorizontal,
              "border-color": "transparent transparent ".concat(arrowBorderColor, " transparent")
            };
          } else if (position === "left-top") {
            return {
              bottom: bottom || finalVertival,
              right: commonArrowOfsset,
              "border-color": "transparent transparent transparent ".concat(arrowBorderColor)
            };
          } else if (position === "left-bottom") {
            return {
              top: top || finalVertival,
              right: "-9px",
              "border-color": "transparent transparent transparent ".concat(arrowBorderColor)
            };
          } else if (position === "right") {
            return {
              top: "50%",
              left: commonArrowOfsset,
              "border-color": "transparent ".concat(arrowBorderColor, " transparent transparent")
            };
          } else if (position === "right-top") {
            return {
              bottom: bottom || finalVertival,
              left: commonArrowOfsset,
              "border-color": "transparent ".concat(arrowBorderColor, " transparent transparent")
            };
          } else if (position === "right-bottom") {
            return {
              top: top || finalVertival,
              left: commonArrowOfsset,
              "border-color": "transparent ".concat(arrowBorderColor, " transparent transparent")
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
            settooltipContentPosition(position);
          }
        }, [isShow, isVisible]);
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
.table-wrapper .collapse-table-td {
  display: inline-block;
  justify-content: center;
  align-items: center;
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
  background-color: #cce2fa !important;
}
.table-wrapper .tr-content {
  transition: background-color 0.3s ease;
}
.table-wrapper .tr-content:hover {
  background-color: #e7ebee;
}

.ellipsis-1 {
  white-space: nowrap;
  /* 不换行 */
  overflow: hidden;
  /* 隐藏超出部分 */
  text-overflow: ellipsis;
  /* 使用省略号表示超出部分 */
}`, "",{"version":3,"sources":["webpack://./src/index.scss"],"names":[],"mappings":"AAAA,gBAAgB;AAAhB;EAEI,qBAAA;EACA,6BAAA;EAkFA,iBAAA;EAWA,YAAA;AA1FJ;AADI;EAEI,eAAA;EACA,gBAAA;AAER;AADQ;EACI,oBAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,WAAA;EACA,UAAA;AAGZ;AADY;EACI,QAAA;EACA,UAAA;EACA,SAAA;EACA,UAAA;EACA,eAAA;EACA,WAAA;EACA,kCAAA;EACA,UAAA;EACA,mCAAA;EACA,UAAA;EACA,eAAA;EACA,yBAAA;EACA,WAAA;EACA,kBAAA;AAGhB;AAOgB;EAEI,qBAAA;AANpB;AAeI;EACI,UAAA;EACA,WAAA;AAbR;AAgBI;EACI,mBAAA;AAdR;AAiBI;EACI,gBAAA;EACA,kBAAA;AAfR;AAkBI;EACI,gBAAA;AAhBR;AAqBI;EACI,qBAAA;EAEA,uBAAA;EACA,mBAAA;AApBR;AAyBI;EACI,uCAAA;AAvBR;AA2BI;EACI,kDAAA;EACA,UAAA;EACA,oBAAA;EACA,kBAAA;EACA,qBAAA;EACA,aAAA;EACA,gBAAA;AAzBR;AA6BI;EACI,UAAA;EACA,oBAAA;EACA,YAAA;AA3BR;AA8BI;EACI,oCAAA;AA5BR;AA+BI;EACI,sCAAA;AA7BR;AA+BQ;EACI,yBAAA;AA7BZ;;AAkCA;EACI,mBAAA;EACA,QAAA;EACA,gBAAA;EACA,WAAA;EACA,uBAAA;EACA,gBAAA;AA/BJ","sourcesContent":[".table-wrapper {\r\n    // Firefox 滚动条样式\r\n    scrollbar-width: thin; // 设置滚动条宽度为 thin\r\n    scrollbar-color: #ccc #f5f5f5; // 设置滚动条颜色\r\n\r\n    .header-content {\r\n\r\n        /* styles.css */\r\n        /* styles.scss */\r\n        .header-icon {\r\n            display: inline-flex;\r\n            flex-direction: column;\r\n            align-items: center;\r\n            justify-content: center;\r\n            width: auto;\r\n            /* 宽度自适应 */\r\n\r\n            .icon {\r\n                width: 0;\r\n                /* 箭头的宽度 */\r\n                height: 0;\r\n                /* 箭头的高度 */\r\n                margin: 1.6px 0;\r\n                /* 调整上下间距 */\r\n                border-left: 6px solid transparent;\r\n                /* 箭头的左边 */\r\n                border-right: 6px solid transparent;\r\n                /* 箭头的右边 */\r\n                cursor: pointer;\r\n                transition: all 0.3s ease;\r\n                /* 添加过渡效果 */\r\n                border-radius: 3px;\r\n\r\n                &.sort-up {\r\n                    // border-bottom: 7px solid #000; /* 向上的箭头 */\r\n                }\r\n\r\n                &.sort-down {\r\n                    // border-top: 7px solid #000; /* 向下的箭头 */\r\n                }\r\n\r\n                &.sort-up:hover,\r\n                &.sort-down:hover {\r\n                    transform: scale(1.2);\r\n                }\r\n            }\r\n        }\r\n\r\n\r\n    }\r\n\r\n    // Webkit 滚动条样式\r\n    &::-webkit-scrollbar {\r\n        width: 8px; // 设置垂直滚动条宽度\r\n        height: 8px; // 设置水平滚动条宽度\r\n    }\r\n\r\n    &::-webkit-scrollbar-track {\r\n        background: #f5f5f5; // 设置滚动条轨道颜色\r\n    }\r\n\r\n    &::-webkit-scrollbar-thumb {\r\n        background: #ccc; // 设置滚动条滑块颜色\r\n        border-radius: 4px; // 设置滚动条滑块圆角\r\n    }\r\n\r\n    &::-webkit-scrollbar-thumb:hover {\r\n        background: #aaa; // 设置滚动条滑块悬停颜色\r\n    }\r\n\r\n\r\n\r\n    .collapse-table-td {\r\n        display: inline-block;\r\n        // display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        // line-height: 0.8;\r\n    }\r\n\r\n    // 添加展开的动画\r\n    tbody>tr {\r\n        transition: max-height 0.3s ease-in-out;\r\n    }\r\n\r\n    /* 默认情况下，表格行被隐藏 */\r\n    .collapse-tr {\r\n        transition: opacity 0.5s ease, transform 0.5s ease;\r\n        opacity: 0;\r\n        transform: scaleY(0);\r\n        /* 使用 scaleY 来隐藏 */\r\n        transform-origin: top;\r\n        /* 让缩放从顶部开始 */\r\n        overflow: hidden;\r\n    }\r\n\r\n    /* 当表格行显示时 */\r\n    .collapse-tr.show {\r\n        opacity: 1;\r\n        transform: scaleY(1);\r\n        /* 还原到原始高度 */\r\n    }\r\n\r\n    .tr-checked {\r\n        background-color: #cce2fa !important;\r\n    }\r\n\r\n    .tr-content {\r\n        transition: background-color 0.3s ease;\r\n\r\n        &:hover {\r\n            background-color: #e7ebee;\r\n        }\r\n    }\r\n}\r\n\r\n.ellipsis-1 {\r\n    white-space: nowrap;\r\n    /* 不换行 */\r\n    overflow: hidden;\r\n    /* 隐藏超出部分 */\r\n    text-overflow: ellipsis;\r\n    /* 使用省略号表示超出部分 */\r\n}"],"sourceRoot":""}]);
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

/***/ }),

/***/ 650:
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
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
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return classNames;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})();

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
  TableCell: () => (/* reexport */ src_TableCell),
  "default": () => (/* binding */ src_0)
});

// EXTERNAL MODULE: ../../../node_modules/classnames/index.js
var classnames = __webpack_require__(650);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
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
;// CONCATENATED MODULE: ./src/TableCell/index.tsx


const TableCell = props => {
  const {
    tooltip,
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
    textPosition = 'center',
    width,
    onChange,
    onEditCancel,
    onEditOK,
    onExpand
  } = props;
  const [isEditing, setIsEditing] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false);
  const [editedValue, setEditedValue] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(value || ''); // 最终展示的值
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
  const handleExpandIconClick = () => {
    console.log('999: ', 999);
    onExpand && onExpand();
  };

  // 这边必须要写一个监听传递过来的value的钩子函数，因为cell展示的值是 editValue
  // 当传递过来的value发生变化时，将它重新赋值给cell要展示的值
  // 如果cell要展示的值是 value，就可以不用写
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    setEditedValue(value);
  }, [value]);
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "table-cell d-flex",
    style: {
      width: '100%'
    }
  }, render ? render(editedValue, rowData, rowIndex, prop, colIndex) : /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "table-cell-wrapper",
    style: {
      display: 'inline-block',
      overflow: 'hidden',
      width: '100%'
    },
    onDoubleClick: handleDoubleClick,
    ref: wrapperRef
  }, isEditing ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    style: {
      width: wrapperRef.current ? "".concat(wrapperRef.current.clientWidth, "px") : '100%',
      boxSizing: 'border-box'
    }
  }) : /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "ps-1"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "value d-flex align-items-center"
  }, isParent && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("i", {
    onClick: handleExpandIconClick,
    className: "fa-solid fa-chevron-right me-2 ".concat(collapse ? 'table-cell-folder-rotate-down' : '', " collapse-icon")
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    style: {
      maxWidth
    },
    className: "ellipsis-1 "
  }, editedValue)))));
};
/* harmony default export */ const src_TableCell = (withTranslation()(TableCell));
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
// EXTERNAL MODULE: ../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/index.scss
var cjs_ruleSet_1_rules_1_use_2_src = __webpack_require__(483);
;// CONCATENATED MODULE: ./src/index.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(cjs_ruleSet_1_rules_1_use_2_src/* default */.A, options);




       /* harmony default export */ const src = (cjs_ruleSet_1_rules_1_use_2_src/* default */.A && cjs_ruleSet_1_rules_1_use_2_src/* default */.A.locals ? cjs_ruleSet_1_rules_1_use_2_src/* default */.A.locals : undefined);

// EXTERNAL MODULE: ../components/Tooltip/index.js
var Tooltip = __webpack_require__(214);
var Tooltip_default = /*#__PURE__*/__webpack_require__.n(Tooltip);
;// CONCATENATED MODULE: ./src/index.tsx







const Table = props => {
  const {
    clickChecked,
    showHeader = true,
    defaultChecked,
    headerFontWeight = "normal",
    width,
    // 控制 table的宽度，太宽的话 可以形成滚动条
    tableBgc,
    tableRef,
    activeId,
    maxWidth,
    showIndex = true,
    single = true,
    id = "id",
    trPointer = true,
    textPosition,
    collection,
    collapse,
    expandAll = true,
    size = "lg",
    data,
    headers,
    propsData,
    tableHover = true,
    tableStriped = true,
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
    maxHeight = "500px",
    minHeight = "300px",
    onRowDoubleClick,
    onRowClick
  } = props;
  const cls = classnames_default()({
    table: true,
    "table-striped": tableStriped,
    // "table-hover": tableHover, 加上这句话就没有动画效果了
    "table-bordered": tableBorderd,
    "table-borderless": tableBorderless,
    ["table-".concat(size)]: true,
    ["table-".concat(headColor)]: true,
    "overflow-auto": true
  });
  const [tableData, setTableData] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)([]);
  const [originalTableData, setOriginalTableData] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)([]);
  const [tableHeaders, setTableHeaders] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)([]);

  // 折叠的逻辑
  const handleCollapseClick = (row, rowIndex) => {
    setTableData(preArr => {
      return preArr.map((item, index) => {
        if (index === rowIndex) {
          item.collapse = !item.collapse;
        }
        return item;
      });
    });
  };
  const generateHeaderStyle = position => {
    switch (position) {
      case "left":
        return "flex-start";
      case "right":
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

  // 排序的逻辑--坑：一定要使用 [...preArr].sort，不能直接preArr.sort，这样会影响原来的数据，有Bug！！！
  const handleSortable = (prop, isDown) => {
    setTableHeaders(preArr => preArr.map(item => {
      if (prop === item.prop) {
        if (isDown) {
          item.isDown = !item.isDown;
          item.isUp = false;
          // 需要降序排序
          if (item.isDown) {
            console.log("down: ");
            setTableData(preArr => [...preArr].sort((a, b) => a[prop] < b[prop] ? 1 : -1));
          } else {
            setTableData(data);
          }
        } else {
          item.isUp = !item.isUp;
          item.isDown = false;
          // 需要升序排序
          if (item.isUp) {
            setTableData(preArr => [...preArr].sort((a, b) => a[prop] > b[prop] ? 1 : -1));
          } else {
            setTableData(data);
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

  // 渲染折叠的子组件
  const renderCollapseChildren = () => {
    var _props$children;
    let array = [];
    if (!((_props$children = props.children) !== null && _props$children !== void 0 && _props$children.length)) {
      array.push(props.children);
    } else {
      array = props.children;
    }
    let widthObject = {};
    const textPositionObject = {};
    const verticalAlignObject = {};
    array.forEach(item => {
      if (item !== null && item !== void 0 && item.props) {
        widthObject[item.props.prop] = item.props.width;
        textPositionObject[item.props.prop] = item.props.textPosition || "center";
        verticalAlignObject[item.props.prop] = item.props.verticalAlign || "middle";
      }
    });
    if (Object.values(widthObject).every(item => !item)) {
      widthObject = calculateHeaderWidth(array);
    } else {}
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, showHeader && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("thead", {
      style: {
        position: headSticky ? "sticky" : "unset",
        top: 0,
        backgroundColor: "".concat(headBGC),
        zIndex: 999
      },
      className: "text-".concat(headTextColor)
    }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("tr", null, collection && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("th", {
      scope: "col th-collection",
      style: {
        minWidth: "50px",
        width: "50px",
        maxWidth: "50px"
      }
    }, !single && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("input", {
      checked: checkedAll,
      onChange: handleCheckedAllChange,
      type: single ? "radio" : "checkbox"
    }))), showIndex && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("th", {
      scope: "col th-index",
      style: {
        minWidth: "50px",
        width: "50px",
        maxWidth: "50px"
      }
    })), array && array.map((child, rowIndex) => {
      if (child !== null && child !== void 0 && child.props) {
        return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("th", {
          style: {
            whiteSpace: "nowrap",
            width: widthObject[child.props.prop],
            fontWeight: headerFontWeight
          },
          className: "".concat("text-" + textPositionObject[child.props.prop]),
          scope: "col",
          key: child.props.label
        }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
          className: "header-content",
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: generateHeaderStyle(textPositionObject[child.props.prop])
          }
        }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
          className: "header-text me-2"
        }, child.props.label), child.props.sortable && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
          className: "header-icon"
        }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("i", {
          style: {
            borderBottom: judgeSortIconBGC(child.props.prop) || "7px solid #000"
          },
          onClick: () => handleSortable(child.props.prop),
          className: "icon sort-up"
        }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("i", {
          style: {
            borderTop: judgeSortIconBGC(child.props.prop, true) || "7px solid #000"
          },
          onClick: () => handleSortable(child.props.prop, true),
          className: "icon sort-down"
        }))));
      }
    }))), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("tbody", {
      className: "".concat(divider ? "table-group-divider" : "")
    }, tableData.length > 0 && tableData.map((data, rowIndex) => {
      return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(external_root_React_commonjs2_react_commonjs_react_amd_react_.Fragment, {
        key: data[id]
      }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("tr", {
        onClick: () => handleRowClick(data, rowIndex)
        // onDoubleClick={() => handleRowDoubleClick(data)}
        ,
        key: rowIndex,
        className: "tr-content ".concat(data.checked ? "tr-checked" : ""),
        style: {
          ...(trPointer ? {
            cursor: "pointer"
          } : "")
        }
      }, collection &&
      /*#__PURE__*/
      // 复选框
      external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("td", {
        scope: "row",
        style: {
          minWidth: "50px",
          width: "50px",
          maxWidth: "50px"
        },
        className: "text-center"
      }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("input", {
        name: data[id],
        id: data[id],
        checked: data.checked,
        onChange: e => handleCheckboxChange(e, data),
        type: single ? "radio" : "checkbox"
      })), showIndex &&
      /*#__PURE__*/
      // 索引框
      external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("td", {
        className: "text-center",
        scope: "col",
        style: {
          alignContent: "center",
          padding: "0px",
          minWidth: "50px",
          width: "50px",
          maxWidth: "50px"
          /* ...(data.children ? { backgroundColor: '#fff', boxShadow: 'none' } : {}), */
        }
      }, rowIndex + 1), external_root_React_commonjs2_react_commonjs_react_amd_react_default().Children.map(array, (child, colIndex) => {
        let prop = child.props.prop;
        const childProps = child.props;
        if ( /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().isValidElement(child)) {
          const enhancedChild = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().cloneElement(child, {
            onExpand: () => handleCollapseClick(data, rowIndex),
            isParent: !colIndex && collapse && data.children,
            value: data["".concat(prop)],
            rowData: data,
            eidtable,
            prop: prop,
            rowIndex: rowIndex,
            colIndex: colIndex,
            canCollapse: data.children,
            collapse: data.collapse,
            textPosition,
            width: widthObject[childProps.prop]
            // maxWidth: childProps.maxWidth,
          });
          return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("td", {
            className: "".concat(!colIndex && collapse && data.children ? "text-left" : "text-".concat(textPositionObject[prop]), " "),
            style: {
              verticalAlign: verticalAlignObject[prop],
              width: widthObject[childProps.prop],
              // maxWidth: maxWidth || childProps.maxWidth,
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
            className: "collapse-table-td"
          }, childProps.tooltip ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((Tooltip_default()), {
            text: data[prop]
          }, enhancedChild) : enhancedChild));
        }
      })), data.collapse && data.children && data.children.map((childData, index) => /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("tr", {
        className: "collapse-table-tr animate__animated animate__fadeIn",
        key: childData[id]
        /* style={{
                                ...(data.collapse ? { display: '' } : { display: 'none' }),
                            }} */
      }, collection && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("td", {
        scope: "row",
        style: {
          minWidth: "50px",
          width: "50px",
          maxWidth: "50px"
        },
        className: "text-center"
      }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("input", {
        name: childData[id],
        id: childData[id],
        checked: childData.checked,
        onChange: e => handleCheckboxChange(e, childData),
        type: single ? "radio" : "checkbox"
      })), showIndex && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("th", {
        className: "text-center",
        style: {
          minWidth: "50px",
          width: "50px",
          maxWidth: "50px",
          padding: "0px",
          alignContent: "center",
          fontWeight: headerFontWeight
        }
      }, "".concat(rowIndex + 1, ".").concat(index + 1)), external_root_React_commonjs2_react_commonjs_react_amd_react_default().Children.map(array, (child, colIndex) => {
        let prop = child.props.prop;
        if ( /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().isValidElement(child)) {
          const enhancedChild = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().cloneElement(child, {
            value: childData[prop],
            rowData: childData,
            eidtable,
            prop: prop,
            rowIndex: rowIndex,
            colIndex: colIndex,
            textPosition
          });
          return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("td", {
            className: "".concat(colIndex === 0 ? "text-left" : "text-center"),
            style: {
              verticalAlign: verticalAlignObject[prop],
              width: widthObject[child.props.prop],
              overflowWrap: "break-word",
              wordWrap: "break-word",
              wordBreak: "break-word",
              ["".concat(!colIndex ? "paddingLeft" : "")]: "40px"
            },
            key: colIndex
          }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
            className: "collapse-table-td"
          }, child.props.tooltip ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((Tooltip_default()), {
            position: "right",
            text: childData[prop]
          }, enhancedChild) : enhancedChild));
        }
      }))));
    })));
  };
  const calculateHeaderWidth = headerLabels => {
    const labelLengthObj = {};
    const newHeaderLabels = headerLabels.map(item => {
      return {
        label: item.props.label,
        prop: item.props.prop
      };
    });
    const totalLabelLength = newHeaderLabels.reduce((acc, curr) => acc + curr.label.length, 0);
    newHeaderLabels.forEach(item => {
      var _item$label;
      labelLengthObj[item.prop] = Number((((_item$label = item.label) === null || _item$label === void 0 ? void 0 : _item$label.length) / totalLabelLength).toFixed(2)) * 100 + "%";
    });
    return labelLengthObj;
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
          if (single) {
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

  /**
   *
   * 单击tr
   */
  const handleRowClick = (row, rowIndex) => {
    // handleCollapseClick(row, rowIndex!);
    if (clickChecked || collection) {
      const data = tableData.map(item => {
        if (item[id] === row[id]) {
          item.checked = !item.checked;
        } else {
          if (single) {
            item.checked = false;
          }
        }
        return item;
      });
      setTableData(data);
    }
    if (collection) {
      setCheckedAll(areAllChecked(data));
    }
    onRowClick && onRowClick(row);
    onRowDoubleClick && onRowDoubleClick(row);
  };

  // 新增 默认选中 / 全选
  const handleDefaultChecked = () => {
    if (defaultChecked === "all") {
      setTableData(preData => preData.map(item => {
        item.checked = true;
        return item;
      }));
      setCheckedAll(true); // 头部也要勾选上
    }
  };
  const handleCheckboxChange = (e, row) => {
    const checked = e.target.checked;
    row.checked = checked;
    setTableData(preArr => {
      return preArr.map(item => {
        if (item[id] === row[id]) {
          item.checked = checked;
        }
        return item;
      });
    });
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
  const handleClearChecked = () => {
    setTableData(preData => preData.map(item => {
      item.checked = false;
      return item;
    }));
  };
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    const checkedAll = areAllChecked(data);
    setCheckedAll(checkedAll);
    if (collapse) {
      const tempData = data.map(item => {
        item.collapse = expandAll;
        return item;
      });
      setTableData(tempData);
      setOriginalTableData(tempData);
    } else {
      setTableData(data);
      setOriginalTableData(data);
    }
    if (data.length) {
      // 必须给个 10ms 的延迟，不然默认选中会出现问题
      setTimeout(() => {
        handleDefaultChecked();
      }, 10);
    }
  }, [data]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    setTableData(preData => preData.map(item => {
      if (item[id] === activeId) {
        item.checked = true;
      } else {
        item.checked = false;
      }
      return item;
    }));
  }, [activeId]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    setTableHeaders(headers);
  }, [headers]);

  /*     useEffect(() => {
    
  }, [tableHeaders]); */

  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useImperativeHandle)(tableRef, () => ({
    clearChecked: handleClearChecked
  }));
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    style: {
      minHeight: minHeight,
      maxHeight: maxHeight,
      overflow: "auto",
      width
    },
    className: "table-wrapper ".concat("table-responsive".concat("-" + tableResponsive))
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("table", {
    style: {
      background: tableBgc,
      width
    },
    className: cls
  }, renderCollapseChildren())), JSON.stringify(data));
};
Table.TableCell = src_TableCell;
/* harmony default export */ const src_0 = (withTranslation()(Table));
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});