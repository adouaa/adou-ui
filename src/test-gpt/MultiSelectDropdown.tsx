import React, { useState } from 'react';
import useClickOutside from '../utils/hooks/useClickOutside';
import './index.scss';

const MultiSelectDropdown = ({ options, placeholder }) => {
    const { isOpen, dropdownRef, toggleDropdown } = useClickOutside();
    const [selectedOptions, setSelectedOptions] = useState<any>([]);
    const [searchTerm, setSearchTerm] = useState('');

    const handleOptionClick = (option: any) => {
        if (selectedOptions.includes(option)) {
            setSelectedOptions(selectedOptions.filter((item) => item !== option));
        } else {
            setSelectedOptions([...selectedOptions, option]);
        }
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredOptions = options.filter((option) => option.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div className="multi-select-dropdown" ref={dropdownRef}>
            <div className="dropdown-header" onClick={toggleDropdown}>
                {selectedOptions.length > 0 ? selectedOptions.join(', ') : placeholder}
                <span className={`arrow ${isOpen ? 'open' : ''}`}></span>
            </div>
            {isOpen && (
                <div className="dropdown-options">
                    <input type="text" className="search-input" placeholder="Search..." value={searchTerm} onChange={handleSearchChange} />
                    {filteredOptions.map((option, index) => (
                        <div key={index} className={`dropdown-option ${selectedOptions.includes(option) ? 'selected' : ''}`} onClick={() => handleOptionClick(option)}>
                            <input type="checkbox" checked={selectedOptions.includes(option)} readOnly />
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MultiSelectDropdown;
