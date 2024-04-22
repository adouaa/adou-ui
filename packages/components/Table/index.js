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

/***/ 798:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
  if (true) module.exports = factory(__webpack_require__(442));else {}
})(this, __WEBPACK_EXTERNAL_MODULE__442__ => {
  return /******/(() => {
    // webpackBootstrap
    /******/
    var __webpack_modules__ = {
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
    function __nested_webpack_require_4003__(moduleId) {
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
        /******/ // no module.id needed
        /******/ // no module.loaded needed
        /******/exports: {}
        /******/
      };
      /******/
      /******/ // Execute the module function
      /******/
      __webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_4003__);
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
      /******/__nested_webpack_require_4003__.n = module => {
        /******/var getter = module && module.__esModule ? /******/() => module['default'] : /******/() => module;
        /******/
        __nested_webpack_require_4003__.d(getter, {
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
      /******/__nested_webpack_require_4003__.d = (exports, definition) => {
        /******/for (var key in definition) {
          /******/if (__nested_webpack_require_4003__.o(definition, key) && !__nested_webpack_require_4003__.o(exports, key)) {
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
      /******/__nested_webpack_require_4003__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
      /******/
    })();
    /******/
    /******/ /* webpack/runtime/make namespace object */
    /******/
    (() => {
      /******/ // define __esModule on exports
      /******/__nested_webpack_require_4003__.r = exports => {
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
    /************************************************************************/
    var __nested_webpack_exports__ = {};
    // This entry need to be wrapped in an IIFE because it need to be in strict mode.
    (() => {
      "use strict";

      // ESM COMPAT FLAG
      __nested_webpack_require_4003__.r(__nested_webpack_exports__);

      // EXPORTS
      __nested_webpack_require_4003__.d(__nested_webpack_exports__, {
        "default": () => ( /* binding */src)
      });

      // EXTERNAL MODULE: external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"}
      var external_root_React_commonjs2_react_commonjs_react_amd_react_ = __nested_webpack_require_4003__(442);
      var external_root_React_commonjs2_react_commonjs_react_amd_react_default = /*#__PURE__*/__nested_webpack_require_4003__.n(external_root_React_commonjs2_react_commonjs_react_amd_react_);
      // EXTERNAL MODULE: ../../node_modules/void-elements/index.js
      var void_elements = __nested_webpack_require_4003__(978);
      var void_elements_default = /*#__PURE__*/__nested_webpack_require_4003__.n(void_elements);
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
      var classnames = __nested_webpack_require_4003__(650);
      var classnames_default = /*#__PURE__*/__nested_webpack_require_4003__.n(classnames);
      ; // CONCATENATED MODULE: ./src/index.tsx

      const Input = props => {
        const {
          name,
          size,
          className,
          prefixContent,
          suffixContent,
          placeholder,
          style,
          disabled,
          defaultValue,
          onClickOK,
          onFocusOK,
          onBlurOK,
          onChangeOK
        } = props;

        // 确保value不会是undefined，如果defaultValue或formData中相应的值是undefined，则将其设为空字符串
        const [value, setValue] = (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(defaultValue !== null && defaultValue !== void 0 ? defaultValue : '');
        const cls = classnames_default()({
          "input-group": true,
          ["input-group-".concat(size)]: size,
          [className]: className
        });
        const handleClick = function (e) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }
          onClickOK && onClickOK(e, ...args);
        };
        const handleFocus = function (e) {
          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }
          onFocusOK && onFocusOK(e, ...args);
        };
        const handleBlur = function (e) {
          for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
            args[_key3 - 1] = arguments[_key3];
          }
          onBlurOK && onBlurOK(e, ...args);
        };
        const handleChange = function (e) {
          setValue(e.target.value);
          // 根据 name 属性，更新 Form 中的数据源

          onChangeOK && onChangeOK(e);
        };
        (0, external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
          if (defaultValue) {
            setValue(defaultValue);
          } else {
            setValue("");
          }
        }, [defaultValue]);
        return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(external_root_React_commonjs2_react_commonjs_react_amd_react_default().Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
          className: cls
        }, prefixContent && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
          className: "input-group-text",
          id: "basic-addon1"
        }, prefixContent), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("input", {
          name: name,
          value: value,
          disabled: disabled,
          style: style,
          placeholder: placeholder,
          onChange: handleChange,
          onBlur: e => handleBlur(e, "hello1", 5561),
          onFocus: e => handleFocus(e, "hello1", 5561),
          onClick: e => handleClick(e, "hello", 556),
          type: "text",
          className: "form-control",
          "aria-label": "Username",
          "aria-describedby": "basic-addon1"
        }), suffixContent && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("span", {
          className: "input-group-text",
          id: "basic-addon2"
        }, suffixContent)));
      };
      /* harmony default export */
      const src = withTranslation()(Input);
    })();

    /******/
    return __nested_webpack_exports__;
    /******/
  })();
});

/***/ }),

/***/ 442:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__442__;

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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  EditableTableCell: () => (/* reexport */ adou_editableTableCell),
  "default": () => (/* binding */ src)
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
// EXTERNAL MODULE: ../Input/dist/cjs/index.js
var cjs = __webpack_require__(798);
var cjs_default = /*#__PURE__*/__webpack_require__.n(cjs);
;// CONCATENATED MODULE: ./src/adou-editableTableCell/index.tsx



const EditableTableCell = props => {
  const {
    render,
    rowData,
    prop,
    label,
    rowIndex,
    colIndex,
    value,
    eidtable,
    textPosition = "center",
    onChange,
    onEditCancel,
    onEditOK
  } = props;
  const [isEditing, setIsEditing] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false);
  const [editedValue, setEditedValue] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(value || "");
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

  // 这边必须要写一个监听传递过来的value的钩子函数，因为cell展示的值是 editValue
  // 当传递过来的value发生变化时，将它重新赋值给cell要展示的值
  // 如果cell要展示的值是 value，就可以不用写
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    setEditedValue(value);
  }, [value]);
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, render ? render(editedValue, rowData, rowIndex, prop, colIndex) : /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    className: "edit-able-table-cell-wrapper",
    style: {
      display: 'inline-block',
      overflow: 'hidden'
    },
    onDoubleClick: handleDoubleClick,
    ref: wrapperRef
  }, isEditing ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    style: {
      width: wrapperRef.current ? "".concat(wrapperRef.current.clientWidth, "px") : '100%',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((cjs_default()), {
    defaultValue: editedValue,
    onChangeOK: e => handleChange(e),
    onBlurOK: e => handleBlur(e)
  })) : /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    style: {
      minWidth: "100px"
    }
  }, editedValue)));
};
/* harmony default export */ const adou_editableTableCell = (withTranslation()(EditableTableCell));
;// CONCATENATED MODULE: ./src/index.tsx





const Table = props => {
  const {
    children,
    size = "lg",
    data,
    headLabels,
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
    headTextColor = "white",
    headBGC = "#2782d7",
    divider,
    maxHeight
  } = props;
  const cls = classnames_default()({
    "table": true,
    "table-striped": tableStriped,
    "table-hover": tableHover,
    "table-bordered": tableBorderd,
    "table-borderless": tableBorderless,
    ["table-".concat(size)]: true,
    // [`caption-${captionPosition}`]: true,
    ["table-".concat(headColor)]: true
  });
  const [tabelData, setTableData] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(data || []);

  // 控制渲染的子组件
  const renderChildren = () => {
    // 兼容，不知道为什么children只有一个的话会被当做是 对象来处理。。
    let array = [];
    if (!props.children.length) {
      array.push(props.children);
    } else {
      array = props.children;
    }
    // 收集子组件的宽度属性、text位置属性、vertical-align属性
    const widthObject = {};
    const textPositionObject = {};
    const verticalAlignObject = {};
    array.forEach(item => {
      widthObject[item.props.prop] = item.props.width;
      textPositionObject[item.props.prop] = item.props.textPosition;
      verticalAlignObject[item.props.prop] = item.props.verticalAlign;
    });
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("thead", {
      style: {
        position: headSticky ? "sticky" : "unset",
        top: 0,
        backgroundColor: "".concat(headBGC),
        zIndex: 999
      },
      className: "text-".concat(headTextColor)
    }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("tr", null, array && array.map((child, rowIndex) => {
      return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("th", {
        className: "".concat("text-" + textPositionObject[child.props.prop]),
        scope: "col",
        key: child.props.label
      }, child.props.label);
    }))), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("tbody", {
      className: "".concat(divider && "table-group-divider")
    }, tabelData.map((data, rowIndex) => {
      return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("tr", {
        key: rowIndex
      }, external_root_React_commonjs2_react_commonjs_react_amd_react_default().Children.map(array, (child, colIndex) => {
        let prop = child.props.prop;
        if ( /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().isValidElement(child)) {
          const enhancedChild = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().cloneElement(child, {
            value: data["".concat(prop)],
            rowData: data,
            eidtable,
            prop: prop,
            rowIndex: rowIndex,
            colIndex: colIndex
          });
          return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("td", {
            className: "".concat("text-" + textPositionObject[prop]),
            style: {
              verticalAlign: verticalAlignObject[prop],
              width: widthObject[child.props.prop],
              overflowWrap: "break-word",
              wordWrap: "break-word",
              wordBreak: "break-word"
            },
            key: colIndex
          }, enhancedChild);
        }
      }));
    })));
  };
  const handleTdClick = (content, prop) => {};
  const handleTdDoubleClick = (e, content, prop) => {};
  const handleEditOK = (rowIndex, prop, value) => {};
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    setTableData(data);
  }, [data]);
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement((external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("div", {
    style: {
      maxHeight,
      overflow: "auto"
    },
    className: "table-wrapper ".concat("table-responsive".concat("-" + tableResponsive))
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement("table", {
    className: cls
  }, renderChildren())));
};
Table.EditableTableCell = adou_editableTableCell;
/* harmony default export */ const src = (withTranslation()(Table));
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});