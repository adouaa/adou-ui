import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import React from 'react';
import './index.scss';

interface SwitchProps {
    name?: string;
    errMsg?: string;
    labelWidth?: any;
    commonSuffixIcon?: string;
    readOnly?: boolean;
    label?: string;
    inputGroup?: boolean;
    labelPosition?: 'left-top' | 'center' | 'top' | 'input-group';
    labelColor?: string;
    required?: boolean;
    id?: string;
    wrapperClassName?: string;
    options?: any[];
    inline?: boolean;
    defaultValue?: boolean;
    type?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
    onChange?: (value: boolean) => void;
}

const Switch = ({
    labelWidth,
    readOnly,
    labelPosition = 'center',
    labelColor,
    label,
    name,
    wrapperClassName,
    inline = true,
    defaultValue = false,
    type = 'primary',
    size = 'md',
    disabled,
    onChange,
}: SwitchProps) => {
    const [isOn, setIsOn] = useState(defaultValue);

    const handleSwitch = () => {
        if (disabled) return;
        setIsOn((preVal: boolean) => !preVal);
    };

    const judgeTranslateDistance = () => {
        switch (size) {
            case 'sm':
                return '(20px, -50%)';
            case 'md':
                return '(27px, -50%)';
            case 'lg':
                return '(30px, -50%)';
            default:
                break;
        }
    };

    return (
        <div className="switch-wrapper">
            <div onClick={handleSwitch} className={`switch-content switch-content-${size} ${isOn ? 'bg-' + type : ''} ${disabled ? 'disabled' : ''}`}>
                <div className={`switch-dot switch-dot-${size}`} style={{ ...(isOn ? { transform: 'translate' + judgeTranslateDistance() } : { left: '2px' }) }}></div>
            </div>
        </div>
    );
};

export default Switch;
