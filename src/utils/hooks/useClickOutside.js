import { useState, useEffect, useRef } from 'react';

const useClickOutside = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);

    const toggleDropdown = () => setIsOpen(!isOpen);

    return {
        isOpen,
        dropdownRef,
        toggleDropdown,
    };
};

export default useClickOutside;
