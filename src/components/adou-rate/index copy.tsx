import React, { useState } from 'react';
import './index.scss';

interface RateProps {
    value?: number;
    max?: number;
    allowHalf?: boolean;
    allowClear?: boolean;
    onChange?: (value: number) => void;
    onHoverChange?: (value: number | null) => void;
}
const Rate = ({ value = 0, max = 5, allowHalf = false, allowClear = true, onChange, onHoverChange }: RateProps) => {
    const [stars, setStars] = useState<any[]>([]);
    const [hoverValue, setHoverValue] = useState(null);
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
        }
        
    };

    const handleMouseLeave = () => {
        setHoverValue(null);
        onHoverChange && onHoverChange(null);
    };

    const renderStars = () => {
        const stars: any = [];
        for (let i = 0; i < max; i++) {
            const isFull = i + 1 <= (hoverValue || clickedValue);
            const isHalf = allowHalf && i + 0.5 < (hoverValue || clickedValue) && i + 1 > (hoverValue || clickedValue);
            stars.push(
                <div key={i} className="star-box" onClick={() => handleClick(i, false)} onMouseEnter={() => handleMouseEnter(i, false)} onMouseLeave={handleMouseLeave}>
                    <span className={`rate-star ${isFull ? 'full' : ''} ${isHalf ? 'half' : ''}`}>
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
            );
        }
        return stars;
    };

    return <div className="rate">{renderStars()}</div>;
};

export default Rate;
