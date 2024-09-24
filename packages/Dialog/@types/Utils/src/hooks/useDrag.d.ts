export default useDrag;
declare function useDrag(elementRef: any, isDialog?: boolean, autoStyle?: boolean, initialPosition?: {
    x: number;
    y: number;
}): {
    position: {
        x: number;
        y: number;
    };
    handleMouseDown: (e: any) => void;
};
