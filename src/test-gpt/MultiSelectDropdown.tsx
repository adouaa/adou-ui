import React, { useEffect, useState } from 'react';
import useClickOutside from '../utils/hooks/useClickOutside';
import './index.scss';

interface Option {
    id: number;
    name: string;
    description: string;
}

interface MultiSelectDropdownProps {
    options: Option[];
    placeholder: string;
}

const MultiSelectDropdown: React.FC<MultiSelectDropdownProps> = ({ options, placeholder }) => {
    const { isOpen, dropdownRef, toggleDropdown } = useClickOutside();
    const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredOptions, setFilteredOptions] = useState<Option[]>([]);

    const handleOptionClick = (option: Option) => {
        if (selectedOptions.some((item) => item.id === option.id)) {
            setSelectedOptions(selectedOptions.filter((item) => item.id !== option.id));
        } else {
            setSelectedOptions([...selectedOptions, option]);
        }
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    useEffect(() => {
        setFilteredOptions(options.filter((option) => option.name.toLowerCase().includes(searchTerm.toLowerCase())));
    }, [options, searchTerm]);

    useEffect(() => {
        console.log('filteredOptions: ', filteredOptions);
    }, [filteredOptions]);

    return (
        <div className="multi-select-dropdown" ref={dropdownRef}>
            <div className="dropdown-header" onClick={toggleDropdown}>
                {selectedOptions.length > 0 ? selectedOptions.map((opt) => opt.name).join(', ') : placeholder}
                <span className={`arrow ${isOpen ? 'open' : ''}`}></span>
            </div>
            {isOpen && (
                <div className="dropdown-options">
                    <input type="text" className="search-input" placeholder="Search..." value={searchTerm} onChange={handleSearchChange} />
                    <table className="options-table">
                        <thead>
                            <tr>
                                <th>Select</th>
                                <th>Name</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredOptions.map((option) => (
                                <tr
                                    key={option.id}
                                    className={`dropdown-option ${selectedOptions.some((item) => item.id === option.id) ? 'selected' : ''}`}
                                    onClick={() => handleOptionClick(option)}
                                >
                                    <td>
                                        <input type="checkbox" checked={selectedOptions.some((item) => item.id === option.id)} readOnly />
                                    </td>
                                    <td>{option.name}</td>
                                    <td>{option.description}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default MultiSelectDropdown;
