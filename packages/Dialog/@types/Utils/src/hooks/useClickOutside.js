"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useClickOutside = (refs, callback, enabled = true) => {
    (0, react_1.useEffect)(() => {
        const judge = (event) => {
            return refs.some((ref) => ref.current?.contains(event.target));
        };
        const handleClickOutside = (event) => {
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
exports.default = useClickOutside;
//# sourceMappingURL=useClickOutside.js.map