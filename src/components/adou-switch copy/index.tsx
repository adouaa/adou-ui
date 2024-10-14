import React, { useState } from 'react';
import './index.scss'; // 引入CSS样式

const Switch = ({ isChecked, onChange, disabled }) => {
    const [checked, setChecked] = useState(isChecked);

    const handleToggle = () => {
        if (!disabled) {
            setChecked(!checked);
            onChange && onChange(!checked);
        }
    };

    return (
        <div className={`switch ${checked ? 'checked' : ''} ${disabled ? 'disabled' : ''}`} onClick={handleToggle}>
            <div className="toggle"></div>
        </div>
    );
};

export default Switch;
