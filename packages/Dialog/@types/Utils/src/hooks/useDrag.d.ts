export default useDrag;
declare function useDrag(triggerRef: any, elementRef: any, isDialog?: boolean, autoStyle?: boolean, initialPosition?: {
    x: number;
    y: number;
}): {
    position: {
        x: number;
        y: number;
    };
    handleMouseDown: (e: any) => void;
};
