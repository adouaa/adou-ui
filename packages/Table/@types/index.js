"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditableTableCell = void 0;
const classnames_1 = __importDefault(require("classnames"));
const react_1 = __importStar(require("react"));
const react_i18next_1 = require("react-i18next");
const adou_editableTableCell_1 = __importDefault(require("./adou-editableTableCell"));
exports.EditableTableCell = adou_editableTableCell_1.default;
const Table = (props) => {
    const { children, size = "lg", data, headLabels, propsData, tableHover = true, tableStriped = true, tableBorderd = false, tableBorderless = false, headColor = "null", captionContent, captionPosition = "top", tableResponsive = "xxl", eidtable = false, headSticky = true, headTextColor = "white", headBGC = "#2782d7", divider, maxHeight } = props;
    const cls = (0, classnames_1.default)({
        "table": true,
        "table-striped": tableStriped,
        "table-hover": tableHover,
        "table-bordered": tableBorderd,
        "table-borderless": tableBorderless,
        [`table-${size}`]: true,
        // [`caption-${captionPosition}`]: true,
        [`table-${headColor}`]: true,
    });
    const [tabelData, setTableData] = (0, react_1.useState)(data || []);
    // 控制渲染的子组件
    const renderChildren = () => {
        // 兼容，不知道为什么children只有一个的话会被当做是 对象来处理。。
        let array = [];
        if (!props.children.length) {
            array.push(props.children);
        }
        else {
            array = props.children;
        }
        // 收集子组件的宽度属性、text位置属性、vertical-align属性
        const widthObject = {};
        const textPositionObject = {};
        const verticalAlignObject = {};
        array.forEach((item) => {
            widthObject[item.props.prop] = item.props.width;
            textPositionObject[item.props.prop] = item.props.textPosition;
            verticalAlignObject[item.props.prop] = item.props.verticalAlign;
        });
        return react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("thead", { style: { position: headSticky ? "sticky" : "unset", top: 0, backgroundColor: `${headBGC}`, zIndex: 999 }, className: `text-${headTextColor}` },
                react_1.default.createElement("tr", null, array && array.map((child, rowIndex) => {
                    return react_1.default.createElement("th", { className: `${"text-" + textPositionObject[child.props.prop]}`, scope: "col", key: child.props.label }, child.props.label);
                }))),
            react_1.default.createElement("tbody", { className: `${divider && "table-group-divider"}` }, tabelData.map((data, rowIndex) => {
                return react_1.default.createElement("tr", { key: rowIndex }, react_1.default.Children.map(array, (child, colIndex) => {
                    let prop = child.props.prop;
                    if (react_1.default.isValidElement(child)) {
                        const enhancedChild = react_1.default.cloneElement(child, {
                            value: data[`${prop}`],
                            rowData: data,
                            eidtable,
                            prop: prop,
                            rowIndex: rowIndex,
                            colIndex: colIndex
                        });
                        return react_1.default.createElement("td", { className: `${"text-" + textPositionObject[prop]}`, style: { verticalAlign: verticalAlignObject[prop], width: widthObject[child.props.prop], overflowWrap: "break-word", wordWrap: "break-word", wordBreak: "break-word" }, key: colIndex }, enhancedChild);
                    }
                }));
            })));
    };
    const handleTdClick = (content, prop) => {
    };
    const handleTdDoubleClick = (e, content, prop) => {
    };
    const handleEditOK = (rowIndex, prop, value) => {
    };
    (0, react_1.useEffect)(() => {
        setTableData(data);
    }, [data]);
    return react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { style: { maxHeight, overflow: "auto" }, className: `table-wrapper ${`table-responsive${"-" + tableResponsive}`}` },
            react_1.default.createElement("table", { className: cls }, renderChildren())));
};
Table.EditableTableCell = adou_editableTableCell_1.default;
exports.default = (0, react_i18next_1.withTranslation)()(Table);
//# sourceMappingURL=index.js.map