import React from 'react';
import './index.scss';
import MultiSelectDropdown from './MultiSelectDropdown';
const App = () => {
    const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

    return (
        <div className="App">
            <h1>Multi-Select Dropdown Example</h1>
            <MultiSelectDropdown options={options} placeholder="Select options" />
            <MultiSelectDropdown options={options} placeholder="Select options" />
        </div>
    );
};

export default App;
