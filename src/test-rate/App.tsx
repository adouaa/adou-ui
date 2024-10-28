import React, { useState } from 'react';
import Rate from '../components/adou-rate';

const App = () => {
    const [rateValue, setRateValue] = useState<number>(3);

    const handleRateChange = (value: number) => {
        setRateValue(value);
        console.log('Selected rate:', value);
    };

    return (
        <div>
            <h1>Rating Component</h1>
            <Rate value={rateValue} onChange={handleRateChange} allowHalf={true} max={5} />
        </div>
    );
};

export default App;
