import React, { useEffect, useState } from 'react';
import { RateWrapper } from './style';

interface RateProps {
    activeBgc?: string;
    value?: number;
    max?: number;
    allowHalf?: boolean;
    allowClear?: boolean;
    onChange?: (value: number) => void;
    onHoverChange?: (value: number | null) => void;
}
const Rate = ({ activeBgc, value = 0, max = 5, allowHalf = false, allowClear = true, onChange, onHoverChange }: RateProps) => {
    const [stars, setStars] = useState<any[]>([]);
    const [hoverValue, setHoverValue] = useState(null);
    const [hoverIndex, setHoverIndex] = useState<number>(-1);
    const [clickedValue, setClickedValue] = useState(value);

    const handleClick = (index: number, isHalf: boolean) => {
        let newValue = index + 1;
        if (allowHalf && isHalf) {
            newValue -= 0.5;
        }
        if (allowClear && newValue === clickedValue) {
            newValue = 0;
        }
        setClickedValue(newValue);
        onChange && onChange(newValue);
    };

    const handleMouseEnter = (index: any, isHalf: boolean) => {
        if (hoverValue !== index + (isHalf ? 0.5 : 1)) {
            setHoverValue(index + (isHalf ? 0.5 : 1));
            onHoverChange && onHoverChange(index + (isHalf ? 0.5 : 1));
            setHoverIndex(index);
        }
    };

    const handleMouseLeave = () => {
        setHoverValue(null);
        onHoverChange && onHoverChange(null);
        setHoverIndex(-1);
    };

    const renderStars = (index: number) => {
        const stars: any = [];
        for (let i = 0; i < max; i++) {
            const isFull = i + 1 <= (hoverValue || clickedValue);
            const isHalf = allowHalf && i + 0.5 < (hoverValue || clickedValue) && i + 1 > (hoverValue || clickedValue);
            let isEnter = false;
            if (i === index) {
                isEnter = true;
            } else {
                isEnter = false;
            }
            stars.push({ isFull, isHalf, isEnter });
        }
        setStars(stars);
    };

    useEffect(() => {
        renderStars(hoverIndex);
    }, [hoverValue, clickedValue, hoverIndex]);

    return (
        <RateWrapper $activeBgc={activeBgc} className="rate">
            {stars.map((item: any, index: number) => (
                <div key={index} className="star-box" onClick={() => handleClick(index, false)} onMouseEnter={() => handleMouseEnter(index, false)} onMouseLeave={handleMouseLeave}>
                    <span className={`rate-star ${item.isEnter ? 'enter' : ''} ${item.isFull ? 'full' : ''} ${item.isHalf ? 'half' : ''}`}>
                        {/*  {allowHalf && (
                        <span
                            className="rate-half"
                            onClick={(e) => {
                                e.stopPropagation();
                                handleClick(i, true);
                            }}
                            onMouseEnter={(e) => {
                                e.stopPropagation();
                                handleMouseEnter(i, true);
                            }}
                        />
                    )} */}
                    </span>
                </div>
            ))}
        </RateWrapper>
    );
};

export default Rate;
