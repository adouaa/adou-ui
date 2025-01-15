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
___CSS_LOADER_EXPORT___.push([module.id, `.slider {
  display: flex;
  align-items: center;
  position: relative;
}
.slider .slider-runway {
  position: relative;
  width: 400px;
  height: 6px;
  background-color: #ddd;
  margin: 10px 0;
  border-radius: 2px;
  cursor: pointer;
  border-radius: 3px;
}
.slider-bar {
  width: 0;
  height: 6px;
  border-radius: 3px;
  position: relative;
  z-index: 1;
}
.slider-button-wrapper1, .slider-button-wrapper2 {
  display: flex;
  align-items: center;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: transform 0.3s ease;
  z-index: 1;
}
.slider-button-wrapper1:hover, .slider-button-wrapper2:hover {
  transform: translate(-50%, -50%) scale(1.2);
}
.slider-button-wrapper1 .slider-button, .slider-button-wrapper2 .slider-button {
  width: 20px;
  height: 20px;
  background-color: #fff;
  border: 2px solid #007bff;
  border-radius: 50%;
}
.slider-stop-item {
  position: absolute;
  width: 6px;
  height: 6px;
  top: 50%;
  background-color: #f5f7fa;
  border-radius: 50%;
  cursor: pointer;
  transform: translate(-50%, -50%);
}
.slider-mark-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.slider-mark-item-dot {
  width: 6px;
  height: 6px;
  position: absolute;
  top: 50%;
  background-color: #f5f7fa;
  border-radius: 50%;
  cursor: pointer;
  transform: translate(-50%, -50%);
  z-index: 1;
}
.slider-mark-item-label {
  position: absolute;
  transform: translate(-50%, 8px);
}
.slider-input-box .slider-input {
  width: 120px;
}
.slider .slider-values {
  font-size: 16px;
}`, "",{"version":3,"sources":["webpack://./src/index.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,mBAAA;EACA,kBAAA;AACJ;AACI;EACI,kBAAA;EACA,YAAA;EACA,WAAA;EACA,sBAAA;EACA,cAAA;EACA,kBAAA;EACA,eAAA;EACA,kBAAA;AACR;AAII;EACI,QAAA;EACA,WAAA;EACA,kBAAA;EACA,kBAAA;EACA,UAAA;AAFR;AAMI;EAEI,aAAA;EACA,mBAAA;EACA,kBAAA;EACA,QAAA;EACA,gCAAA;EACA,+BAAA;EACA,UAAA;AALR;AAOQ;EACI,2CAAA;AALZ;AAQQ;EAEI,WAAA;EACA,YAAA;EACA,sBAAA;EACA,yBAAA;EACA,kBAAA;AAPZ;AAgBQ;EACI,kBAAA;EACA,UAAA;EACA,WAAA;EACA,QAAA;EACA,yBAAA;EAEA,kBAAA;EACA,eAAA;EACA,gCAAA;AAfZ;AAqBQ;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;AAnBZ;AAqBY;EACI,UAAA;EACA,WAAA;EACA,kBAAA;EAEA,QAAA;EACA,yBAAA;EAEA,kBAAA;EACA,eAAA;EACA,gCAAA;EACA,UAAA;AArBhB;AAwBY;EACI,kBAAA;EACA,+BAAA;AAtBhB;AA4BQ;EACI,YAAA;AA1BZ;AA8BI;EACI,eAAA;AA5BR","sourcesContent":[".slider {\r\n    display: flex;\r\n    align-items: center;\r\n    position: relative;\r\n\r\n    .slider-runway {\r\n        position: relative;\r\n        width: 400px; // 根据需求调整\r\n        height: 6px;\r\n        background-color: #ddd;\r\n        margin: 10px 0;\r\n        border-radius: 2px;\r\n        cursor: pointer;\r\n        border-radius: 3px;\r\n\r\n\r\n    }\r\n\r\n    &-bar {\r\n        width: 0;\r\n        height: 6px;\r\n        border-radius: 3px;\r\n        position: relative;\r\n        z-index: 1;\r\n\r\n    }\r\n\r\n    &-button-wrapper1,\r\n    &-button-wrapper2 {\r\n        display: flex;\r\n        align-items: center;\r\n        position: absolute;\r\n        top: 50%;\r\n        transform: translate(-50%, -50%);\r\n        transition: transform 0.3s ease;\r\n        z-index: 1;\r\n\r\n        &:hover {\r\n            transform: translate(-50%, -50%) scale(1.2);\r\n        }\r\n\r\n        .slider-button {\r\n\r\n            width: 20px;\r\n            height: 20px;\r\n            background-color: #fff;\r\n            border: 2px solid #007bff;\r\n            border-radius: 50%;\r\n\r\n\r\n\r\n        }\r\n    }\r\n\r\n    &-stop {\r\n\r\n        &-item {\r\n            position: absolute;\r\n            width: 6px;\r\n            height: 6px;\r\n            top: 50%;\r\n            background-color: #f5f7fa;\r\n            // background-color: red;\r\n            border-radius: 50%;\r\n            cursor: pointer;\r\n            transform: translate(-50%, -50%);\r\n        }\r\n    }\r\n\r\n    &-mark {\r\n\r\n        &-item {\r\n            display: flex;\r\n            flex-direction: column;\r\n            align-items: center;\r\n\r\n            &-dot {\r\n                width: 6px;\r\n                height: 6px;\r\n                position: absolute;\r\n\r\n                top: 50%;\r\n                background-color: #f5f7fa;\r\n                // background-color: red;\r\n                border-radius: 50%;\r\n                cursor: pointer;\r\n                transform: translate(-50%, -50%);\r\n                z-index: 1;\r\n            }\r\n\r\n            &-label {\r\n                position: absolute;\r\n                transform: translate(-50%, 8px);\r\n            }\r\n        }\r\n    }\r\n\r\n    &-input-box {\r\n        .slider-input {\r\n            width: 120px;\r\n        }\r\n    }\r\n\r\n    .slider-values {\r\n        font-size: 16px;\r\n    }\r\n\r\n}"],"sourceRoot":""}]);
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
  "default": () => (/* binding */ src_0)
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



const Slider = _ref => {
  let {
    marks,
    range,
    sliderWidth,
    min = 0,
    max = 100,
    step,
    value,
    showStops = true,
    showInput,
    onChange
  } = _ref;
  const [sliderButton1Left, setSliderButton1Left] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(0);
  const [sliderButton2Left, setSliderButton2Left] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(0);
  const [sliderBarWidth, setSliderBarWidth] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)();
  const [stops, setStops] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)([]);
  const [inputValue, setInputValue] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(0);

  // 用来记录每个按钮
  const [eachPercentValue, setEachPercentValue] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(1);

  // 用来支持Slider的鼠标不在RunWay上面的时候也会展示提示
  const [isClickIngBtn1, setisClickIngBtn1] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false);
  const [isClickIngBtn2, setisClickIngBtn2] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false);
  const sliderRunwayRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  const isButton2MoveRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(false); // 记录是否点击的是第二个按钮

  // 按钮点击后，按钮移动的逻辑
  const btnMoveHandler = (moveEvent, sliderRect, isButton2) => {
    const offsetX = moveEvent.clientX - sliderRect.left;
    if (step && !showInput) {
      calculateByStep(offsetX, sliderRect);
    } else {
      const newValue = Math.max(0, Math.min(offsetX / sliderRect.width, 1)) * 100 + "%";
      isButton2 ? setSliderButton2Left(newValue) : setSliderButton1Left(newValue);
      if (!range) {
        setSliderBarWidth(newValue);
        setInputValue(Math.round(parseFloat(newValue) / eachPercentValue));
      }
    }
  };
  // 通过计算求得当前点击的比值更靠近那个step
  // eg：24 / 10 = 2余数4，然后通过四舍五入可得更靠近2，然后用 2 * eachStepPercent求得值
  const calculateByStep = (offsetX, sliderRect) => {
    const percent = offsetX / sliderRect.width * 100;
    const stepPercent = percent / parseFloat(step + "%");
    const newValue = Math.round(stepPercent) * step + "%";
    isButton2MoveRef.current ? setSliderButton2Left(newValue) : setSliderButton1Left(newValue);
    if (!range) {
      setSliderBarWidth(newValue);
    }
  };
  const handleRunwayClick = e => {
    // 以一个作为主要研究对象，所以isButton2为false
    // 因为之前的判断都是针对 sliderButton2，所以这边的变量是 isButton2
    e.preventDefault();
    const sliderRect = sliderRunwayRef.current.getBoundingClientRect();
    const offsetX = e.clientX - sliderRect.left;
    const newValue = offsetX / sliderRect.width * 100 + "%";
    if (range) {
      const sliderRunwayRect = sliderRunwayRef.current.getBoundingClientRect();
      const clickedPercent = offsetX / sliderRunwayRect.width;
      // 判断点击的距离在 sliderRunWay 中距离当前点击点最近的那个位置
      // 相减求绝对值(记得 除以 100！！！)
      if (Math.abs(clickedPercent - parseFloat(sliderButton1Left) / 100) > Math.abs(clickedPercent - parseFloat(sliderButton2Left) / 100)) {
        isButton2MoveRef.current = true;
        if (step && !showInput) {
          calculateByStep(offsetX, sliderRect);
        } else {
          setSliderButton2Left(newValue);
        }
      } else {
        isButton2MoveRef.current = false;
        if (step && !showInput) {
          calculateByStep(offsetX, sliderRect);
        } else {
          setSliderButton1Left(newValue);
        }
      }
    } else {
      if (step && !showInput) {
        calculateByStep(offsetX, sliderRect);
      } else {
        isButton2MoveRef.current ? setSliderButton2Left(newValue) : setSliderButton1Left(newValue);
        !range && setSliderBarWidth(newValue);
        setInputValue(Math.round(parseFloat(newValue) / eachPercentValue));
      }
    }
    if (isButton2MoveRef.current) {
      setisClickIngBtn2(true);
    } else {
      setisClickIngBtn1(true);
    }
    const bindMouseDownHandler = mouseEvent => {
      btnMoveHandler(mouseEvent, sliderRect, isButton2MoveRef.current);
    };
    const btnUpHandler = () => {
      if (isButton2MoveRef.current) {
        setisClickIngBtn2(false);
      } else {
        setisClickIngBtn1(false);
      }
      window.removeEventListener("mousemove", bindMouseDownHandler);
      window.removeEventListener("mouseup", btnUpHandler);
    };
    window.addEventListener("mousemove", bindMouseDownHandler);
    window.addEventListener("mouseup", btnUpHandler);
  };
  const handleBtnMouseDown = (e, isButton2) => {
    // 确保事件不冒泡。如果冒泡到 runway的mousedown事件，会导致 isTwo一个为true，一个为false(runway)
    e.stopPropagation();
    isButton2MoveRef.current = isButton2;
    if (isButton2MoveRef.current) {
      setisClickIngBtn2(true);
    } else {
      setisClickIngBtn1(true);
    }
    const sliderRect = sliderRunwayRef.current.getBoundingClientRect();
    const bindMouseDownHandler = mouseEvent => {
      btnMoveHandler(mouseEvent, sliderRect, isButton2);
    };
    const btnUpHandler = () => {
      if (isButton2MoveRef.current) {
        setisClickIngBtn2(false);
      } else {
        setisClickIngBtn1(false);
      }

      // 在按钮抬起后，将 isButton2MoveRef设置为false
      // 防止本次点击的如果是第二个按钮，下一次点 runway的时候会触发第儿个按钮的移动
      isButton2MoveRef.current = false;
      window.removeEventListener("mousemove", bindMouseDownHandler);
      window.removeEventListener("mouseup", btnUpHandler);
    };
    window.addEventListener("mousemove", bindMouseDownHandler);
    window.addEventListener("mouseup", btnUpHandler);
  };
  const handleMouseUp = () => {};
  const calcEachPercentValue = () => {
    const diffrence = max - min;
    setEachPercentValue(100 / diffrence);
  };
  const generateStops = () => {
    let length = 0;
    length = 100 / step;
    for (let i = 0; i < length; i++) {
      setStops(preData => [...preData, {
        left: i * step + "%",
        value: i * step
      }]);
    }
  };
  const handleInputChange = e => {
    let value = e.target.value;
    // 如果输入为空，则不能使用 parseFloat来转换，否则会变成 NaN
    if (value === "") {
      value = "";
    } else {
      value = parseFloat(value);
    }
    if (value > max) {
      value = max;
    } else if (value < min) {
      value = min;
    }
    setInputValue(value);
    setSliderButton1Left(value * eachPercentValue + "%");
    setSliderBarWidth(value * eachPercentValue + "%");
  };
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (step) {
      generateStops();
    }
    calcEachPercentValue();
  }, []);

  // 巧妙：如果是 range的情况下，siderBarWidth和 inputValue都在这里操作即可，其他地方只在 非rang的时候操作
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    const diffAbs = Math.abs(parseFloat(sliderButton2Left) - parseFloat(sliderButton1Left));
    if (range) {
      setSliderBarWidth(diffAbs + "%");
      setInputValue(isNaN(Math.round(diffAbs / eachPercentValue)) ? 0 : Math.round(diffAbs / eachPercentValue));

      // 计算值然后返回
    } else {
      // 计算值然后返回
    }
    const returnValue = Math.abs(parseFloat(sliderButton2Left) - parseFloat(sliderButton1Left)) / eachPercentValue;
    const returnPercent = Math.abs(parseFloat(sliderButton2Left) - parseFloat(sliderButton1Left));
    onChange && onChange(returnValue, returnPercent);
  }, [sliderButton1Left, sliderButton2Left]);
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "slider"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    style: {
      width: sliderWidth
    },
    className: "slider-runway me-3",
    ref: sliderRunwayRef,
    onMouseDown: handleRunwayClick
    // onClick={handleRunwayClick} // 注意：不能用onClick，会触发两次mousemove事件绑定
    ,
    onMouseUp: handleMouseUp
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "slider-bar bg-primary",
    style: {
      width: sliderBarWidth,
      left: parseFloat(sliderButton2Left) > parseFloat(sliderButton1Left) ? sliderButton1Left : sliderButton2Left
    }
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "slider-button-wrapper1",
    style: {
      left: sliderButton1Left
    }
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((Tooltip_default()), {
    mustShow: isClickIngBtn1,
    text: String(Math.round(parseFloat(sliderButton1Left) / eachPercentValue))
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    onMouseDown: handleBtnMouseDown,
    className: "slider-button"
  }))), range && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "slider-button-wrapper2",
    style: {
      left: sliderButton2Left,
      backgroundColor: "red"
    }
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((Tooltip_default()), {
    mustShow: isClickIngBtn2,
    text: String(Math.round(parseFloat(sliderButton2Left) / eachPercentValue))
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    onMouseDown: e => handleBtnMouseDown(e, true),
    className: "slider-button"
  }))), showStops && step && !showInput && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "slider-stop"
  }, stops.map((item, index) => /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "slider-stop-item",
    style: {
      left: item.left
    },
    key: index
  }))), (marks === null || marks === void 0 ? void 0 : marks.length) > 0 ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "slider-mark"
  }, marks === null || marks === void 0 ? void 0 : marks.map((item, index) => /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "slider-mark-item",
    key: index
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "slider-mark-item-dot",
    style: {
      left: item.distance
    }
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "slider-mark-item-label",
    style: {
      left: item.distance,
      ...item.style
    }
  }, item.label)))) : ""), showInput && !range && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "slider-input-box"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("input", {
    type: "number",
    value: inputValue,
    onChange: handleInputChange,
    className: "form-control slider-input",
    placeholder: "\u8BF7\u8F93\u5165"
  })), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "slider-values"
  }));
};
/* harmony default export */ const src_0 = (Slider);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});