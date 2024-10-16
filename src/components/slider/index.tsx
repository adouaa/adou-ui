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
    const [sliderButton1Left, setSliderButton1Left] = useState<any>(0);
    const [sliderButton2Left, setSliderButton2Left] = useState<any>(0);
    const [sliderBarWidth, setSliderBarWidth] = useState<any>();
    const [stops, setStops] = useState<any[]>([]);
    const [inputValue, setInputValue] = useState<number>(0);

    const sliderRunwayRef = useRef<any>(null);
    const [eachPercentValue, setEachPercentValue] = useState<number>(1);
    const isButton2MoveRef = useRef<boolean>(false); // 记录是否点击的是第二个按钮

    // 按钮点击后，按钮移动的逻辑
    const btnMoveHandler = (moveEvent: MouseEvent, sliderRect: any, isTwo?: boolean) => {
        console.log('move: ', isTwo);
        const offsetX = moveEvent.clientX - sliderRect.left;
        if (step && !showInput) {
            calculateByStep(offsetX, sliderRect);
        } else {
            const newValue = Math.max(0, Math.min(offsetX / sliderRect.width, 1)) * 100 + '%';
            isTwo ? setSliderButton2Left(newValue) : setSliderButton1Left(newValue);
            if (!range) {
                setSliderBarWidth(newValue);
                setInputValue(Math.round(parseFloat(newValue) / eachPercentValue));
            }
        }
    };
    const calculateByStep = (offsetX: number, sliderRect: any) => {
        const percent = (offsetX / sliderRect.width) * 100;
        const stepPercent = percent / parseFloat(step! + '%');
        const newValue = Math.round(stepPercent) * step! + '%';
        isButton2MoveRef.current ? setSliderButton2Left(newValue) : setSliderButton1Left(newValue);
        if (!range) {
            setSliderBarWidth(newValue);
        }
    };
    const handleRunwayClick = (e: any) => {
        console.log('runway', isButton2MoveRef.current);

        e.preventDefault();
        const sliderRect = sliderRunwayRef.current.getBoundingClientRect();
        const offsetX = e.clientX - sliderRect.left;

        if (step && !showInput) {
            // 通过计算求得当前点击的比值更靠近那个step
            // eg：24 / 10 = 2余数4，然后通过四舍五入可得更靠近2，然后用 2 * eachStepPercent求得值
            calculateByStep(offsetX, sliderRect);
        } else {
            const newValue = (offsetX / sliderRect.width) * 100 + '%';
            isButton2MoveRef.current ? setSliderButton2Left(newValue) : setSliderButton1Left(newValue);
            !range && setSliderBarWidth(newValue);
            setInputValue(Math.round(parseFloat(newValue) / eachPercentValue));
        }

        const bindMouseDownHandler = (mouseEvent: MouseEvent) => {
            btnMoveHandler(mouseEvent, sliderRect, false);
        };

        const btnUpHandler = () => {
            window.removeEventListener('mousemove', bindMouseDownHandler);
            window.removeEventListener('mouseup', btnUpHandler);
        };

        window.addEventListener('mousemove', bindMouseDownHandler);
        window.addEventListener('mouseup', btnUpHandler);
    };

    const handleBtnMouseDown = (e: React.MouseEvent, isTwo?: boolean) => {
        console.log('down: ', isTwo);
        // 确保事件不冒泡。如果冒泡到 runway的mousedown事件，会导致 isTwo一个为true，一个为false(runway)
        e.stopPropagation();
        isButton2MoveRef.current = isTwo!;
        const sliderRect = sliderRunwayRef.current.getBoundingClientRect();

        const bindMouseDownHandler = (mouseEvent: MouseEvent) => {
            btnMoveHandler(mouseEvent, sliderRect, isTwo);
        };

        const btnUpHandler = () => {
            // 在按钮抬起后，将 isButton2MoveRef设置为false
            // 防止本次点击的如果是第二个按钮，下一次点 runway的时候会触发第儿个按钮的移动
            isButton2MoveRef.current = false;
            window.removeEventListener('mousemove', bindMouseDownHandler);
            window.removeEventListener('mouseup', btnUpHandler);
        };

        window.addEventListener('mousemove', bindMouseDownHandler);
        window.addEventListener('mouseup', btnUpHandler);
    };

    const handleMouseUp = () => {};

    const calcEachPercentValue = () => {
        const diffrence = max! - min!;
        setEachPercentValue(100 / diffrence);
    };
    const generateStops = () => {
        let length: number = 0;
        length = 100 / step!;
        for (let i = 0; i < length; i++) {
            setStops((preData: any[]) => [...preData, { left: i * step! + '%', value: i * step! }]);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value: any = e.target.value;
        // 如果输入为空，则不能使用 parseFloat来转换，否则会变成 NaN
        if (value === '') {
            value = '';
        } else {
            value = parseFloat(value);
        }
        console.log('value: ', value);

        if (value > max!) {
            value = max!;
        } else if (value < min!) {
            value = min!;
        }
        setInputValue(value);
        setSliderButton1Left(value * eachPercentValue + '%');
        setSliderBarWidth(value * eachPercentValue + '%');
    };

    useEffect(() => {
        if (step) {
            generateStops();
        }
        calcEachPercentValue();
    }, []);

    // 巧妙：如果是 range的情况下，siderBarWidth和 inputValue都在这里操作即可，其他地方只在 非rang的时候操作
    useEffect(() => {
        console.log('变化: ');
        const diffAbs = Math.abs(parseFloat(sliderButton2Left) - parseFloat(sliderButton1Left));
        if (range) {
            setSliderBarWidth(diffAbs + '%');
            setInputValue(isNaN(Math.round(diffAbs / eachPercentValue)) ? 0 : Math.round(diffAbs / eachPercentValue));
            console.log('isNaN(Math.round(diffAbs / eachPercentValue)): ', isNaN(Math.round(diffAbs / eachPercentValue)));
        }
    }, [sliderButton1Left, sliderButton2Left]);

    return (
        <div className="slider">
            <div
                style={{ width: sliderWidth }}
                className="slider-runway me-3"
                ref={sliderRunwayRef}
                onMouseDown={handleRunwayClick}
                // onClick={handleRunwayClick} // 注意：不能用onClick，会触发两次mousemove事件绑定
                onMouseUp={handleMouseUp}
            >
                <div
                    className="slider-bar bg-primary"
                    style={{ width: sliderBarWidth, left: parseFloat(sliderButton2Left) > parseFloat(sliderButton1Left) ? sliderButton1Left : sliderButton2Left }}
                ></div>

                {/* 因为要展示 Tooltip，所以让一开始的 slider-button移动改成他的父组件 wrapper移动，
                    然后再把slider-button作为 Tooltip所挂载的内容
                    注意：Tooltip所挂载的元素不能有 transformY的属性，不然位置不对
                */}
                <div className="slider-button-wrapper1" style={{ left: sliderButton1Left }}>
                    <Tooltip text={String(Math.round(parseFloat(sliderButton1Left) / eachPercentValue))}>
                        <div onMouseDown={handleBtnMouseDown} className="slider-button"></div>
                    </Tooltip>
                </div>
                {range && (
                    <div className="slider-button-wrapper2" style={{ left: sliderButton2Left, backgroundColor: 'red' }}>
                        <Tooltip text={String(Math.round(parseFloat(sliderButton2Left) / eachPercentValue))}>
                            <div onMouseDown={(e: React.MouseEvent) => handleBtnMouseDown(e, true)} className="slider-button"></div>
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
            {showInput && !range && (
                <div className="slider-input-box">
                    <input type="number" value={inputValue} onChange={handleInputChange} className="form-control slider-input" placeholder="请输入" />
                </div>
            )}
            <div className="slider-values">123</div>
        </div>
    );
};

export default Slider;
