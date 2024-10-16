import React, { useEffect, useRef, useState } from 'react';
import './index.scss';
import Tooltip from 'components/adou-tooltip';

interface SliderProps {
    sliderWidth?: any;
    min?: number;
    max?: number;
    step?: number;
    value?: number | number[];
    range?: boolean;
    showStops?: boolean;
    showInput?: boolean;
    onChange?: () => void;
}
const Slider = ({ range, sliderWidth, min = 0, max, step, value, showStops = true, showInput, onChange }: SliderProps) => {
    const [sliderButtonLeft, setSliderButtonLeft] = useState<any>(0);
    const [sliderBarWidth, setSliderBarWidth] = useState<any>();
    const [stops, setStops] = useState<any[]>([]);
    const [inputValue, setInputValue] = useState<number>(0);

    const sliderRunwayRef = useRef<any>(null);
    const [eachPercentValue, setEachPercentValue] = useState<number>(1);

    const calculateByStep = (offsetX: number, sliderRect: any) => {
        const percent = (offsetX / sliderRect.width) * 100;
        const stepPercent = percent / parseFloat(step! + '%');
        const newValue = Math.round(stepPercent) * step! + '%';
        setSliderButtonLeft(newValue);
        setSliderBarWidth(newValue);
    };
    const handleRunwayClick = (e: any) => {
        e.preventDefault();
        const sliderRect = sliderRunwayRef.current.getBoundingClientRect();
        const offsetX = e.clientX - sliderRect.left;

        if (step && !showInput) {
            // 通过计算求得当前点击的比值更靠近那个step
            // eg：24 / 10 = 2余数4，然后通过四舍五入可得更靠近2，然后用 2 * eachStepPercent求得值
            calculateByStep(offsetX, sliderRect);
        } else {
            const newValue = (offsetX / sliderRect.width) * 100 + '%';
            setSliderButtonLeft(newValue);
            setSliderBarWidth(newValue);
            setInputValue(Math.round(parseFloat(newValue) / eachPercentValue));
        }
    };

    const handleBtnMouseDown = (e: any) => {
        e.preventDefault();
        const sliderRect = sliderRunwayRef.current.getBoundingClientRect();

        // 按钮点击后，按钮移动的逻辑
        const btnMoveHandler = (moveEvent: MouseEvent) => {
            const offsetX = moveEvent.clientX - sliderRect.left;
            if (step && !showInput) {
                calculateByStep(offsetX, sliderRect);
            } else {
                const newValue = Math.max(0, Math.min(offsetX / sliderRect.width, 1)) * 100 + '%';
                setSliderButtonLeft(newValue);
                setSliderBarWidth(newValue);
                setInputValue(Math.round(parseFloat(newValue) / eachPercentValue));
            }
        };

        // 按钮点击后，鼠标抬起的逻辑(移出监听)
        const btnUpHandler = () => {
            window.removeEventListener('mousemove', btnMoveHandler);
            window.removeEventListener('mouseup', btnUpHandler);
        };

        window.addEventListener('mousemove', btnMoveHandler);
        window.addEventListener('mouseup', btnUpHandler);
    };

    const handleMouseUp = () => {};

    const calcEachPercentValue = () => {
        const diffrence = max! - min!;
        setEachPercentValue(100 / diffrence);
        console.log('100 / diffrence: ', 100 / diffrence);
    };
    const generateStops = () => {
        let length: number = 0;
        length = 100 / step!;
        for (let i = 0; i < length; i++) {
            setStops((preData: any[]) => [...preData, { left: i * step! + '%', value: i * step! }]);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = parseFloat(e.target.value);
        if (value > max!) {
            value = max!;
        } else if (value < min!) {
            value = min!;
        }
        setInputValue(value);
        setSliderButtonLeft(value * eachPercentValue + '%');
        setSliderBarWidth(value * eachPercentValue + '%');
    };

    useEffect(() => {
        if (step) {
            generateStops();
        }
        calcEachPercentValue();
    }, []);

    return (
        <div className="slider">
            <div style={{ width: sliderWidth }} className="slider-runway me-3" ref={sliderRunwayRef} onClick={handleRunwayClick} onMouseUp={handleMouseUp}>
                <div className="slider-bar bg-primary" style={{ width: sliderBarWidth }}></div>

                {/* 因为要展示 Tooltip，所以让一开始的 slider-button移动改成他的父组件 wrapper移动，
                    然后再把slider-button作为 Tooltip所挂载的内容
                    注意：Tooltip所挂载的元素不能有 transformY的属性，不然位置不对
                */}
                <div className="slider-button-wrapper1" style={{ left: sliderButtonLeft }}>
                    <Tooltip text={String(Math.round(parseFloat(sliderButtonLeft) / eachPercentValue))}>
                        <div onMouseDown={handleBtnMouseDown} className="slider-button"></div>
                    </Tooltip>
                </div>
                {range && (
                    <div className="slider-button-wrapper2" style={{ left: '80%' }}>
                        <Tooltip text={String(Math.round(parseFloat(sliderButtonLeft) / eachPercentValue))}>
                            <div onMouseDown={handleBtnMouseDown} className="slider-button"></div>
                        </Tooltip>
                    </div>
                )}
                {step && !showInput && (
                    <div className="slider-stop-box">
                        {stops.map((item: any, index: number) => (
                            <div className="slider-stop" style={{ left: item.left }} key={index}></div>
                        ))}
                    </div>
                )}
            </div>
            {showInput && (
                <div className="slider-input-box">
                    <input type="number" value={inputValue} onChange={handleInputChange} className="form-control slider-input" placeholder="请输入" />
                </div>
            )}
            <div className="slider-values">123</div>
        </div>
    );
};

export default Slider;
