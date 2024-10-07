import Button from 'components/adou-button';
import CollapseY from 'components/adou-collapseY';
import React, { useState } from 'react';

const App = () => {
    const accordionItems = [
        {
            header: 'Section 1',
            content: 'Content for section 1',
        },
        {
            header: 'Section 2',
            content: `Content for section 2qwContent for section 2qwContent for section 2qwContent for section 2qw`,
        },
        {
            header: 'Section 3',
            content: 'Content for section 3',
        },
    ];

    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleCollapseToggle = (index: number) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    const accordionItems1 = [
        {
            controlContent: 'Section 1',
            content: 'Content for section 1',
        },
        {
            controlContent: 'Section 2',
            content: 'Content for section 2',
        },
        {
            controlContent: 'Section 3',
            content: 'Content for section 3',
        },
    ];

    return (
        <div style={{ padding: '50px' }}>
            <div className="accordionY-container">
                {accordionItems1.map((item, index) => (
                    <CollapseY hover single={true} key={index} controlContent={item.controlContent} onClick={() => handleCollapseToggle(index)} showContent={activeIndex === index}>
                        {item.content}
                    </CollapseY>
                ))}
            </div>
        </div>
    );
};

export default App;
