import { useCallback, useRef } from 'react';

const useThrottle = (fn: any, delay: number, dependency = []) => {
    const time = useRef<number>(0);
    const timer = useRef<NodeJS.Timeout | null>(null);
    // react中必须要用useCallback和useRef，不然状态改变就会一直变化
    return useCallback((...args: any) => {
        console.log('1: ', 1);
        // 这个是肯定要写的，因为每次触发事件的时候，都要重新计算时间
        const now = Date.now();
        // 第一次触发事件的时候，time.current是 0，所以需要设置一个初始值，不能为0，不然第一次会秒执行--第一次要立马执行！
        /* if (!time.current) {
            time.current = now;
        } */
        // 定时器清除的逻辑与 防抖相似，都是在 有定时器的时候清除定时器
        // 特殊的点：
        // 节流是在 没有定时器的时候设置定时器
        // 防抖是 一直都会设置定时器
        if (timer.current) {
            clearTimeout(timer.current);
            timer.current = null;
        } else {
            timer.current = setTimeout(() => {
                fn(...args);
                // 更新 time的时间
                time.current = Date.now();
            }, delay);
        }
        if (now - time.current >= delay) {
            fn(...args);
            time.current = now;
            // 如果进入这里，说明执行了回调，这时候要把定时器清除掉，否则会造成二次执行
            if (timer.current) {
                clearTimeout(timer.current);
                timer.current = null;
            }
        }
    }, dependency);
};

export default useThrottle;
