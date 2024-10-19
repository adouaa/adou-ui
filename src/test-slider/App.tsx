import React, { useState } from 'react';
import Slider from '../components/slider';
import TagInput from 'components/adou-new-form/adou-tag-input';

const App = () => {
    const [singleValue, setSingleValue] = useState(50);
    const [rangeValues, setRangeValues] = useState([20, 80]);

    return (
        <div className="p-3">
            <TagInput></TagInput>
            <h1>Custom Slider Component</h1>
            <h2>Single Value Slider</h2>
            <Slider
                sliderWidth={'800px'}
                marks={[
                    { distance: '4%', label: '40°' },
                    {
                        distance: '50%',
                        label: '150°',
                        style: {
                            color: 'red',
                        },
                    },
                    { distance: '100%', label: '300°' },
                ]}
                range
                max={50}
                showInput
                value={singleValue}
            />
            <Slider sliderWidth={'800px'} max={100} showInput value={singleValue} />
            <h2>Range Slider</h2>
            <Slider min={0} max={100} showStops={true} step={10} value={rangeValues} range />
        </div>
    );
};

export default App;
