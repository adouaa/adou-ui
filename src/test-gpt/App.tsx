import React from 'react';
import MultiSelectDropdown from './MultiSelectDropdown';
import AdouSelect from '../components/adou-new-form/adou-select';
import AdouRetrieveSelect from '../components/adou-new-form/adou-retrieve-select';

const options = [
    { id: 1, name: 'Option 1', description: 'This is option 1' },
    { id: 2, name: 'Option 2', description: 'This is option 2' },
    { id: 3, name: 'Option 3', description: 'This is option 3' },
    { id: 4, name: 'Option 4', description: 'This is option 4' },
    { id: 5, name: 'Option 5', description: 'This is option 5' },
];

const App = () => {
    return (
        <div>
            <h1>Multi Select Dropdown with Table</h1>
            <MultiSelectDropdown options={options} placeholder="Select options" />

            <AdouRetrieveSelect options={options}></AdouRetrieveSelect>
            <AdouSelect options={options}></AdouSelect>
        </div>
    );
};

export default App;
