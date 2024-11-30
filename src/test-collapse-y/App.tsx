import Button from 'components/adou-button';
import CollapseY from 'components/adou-collapseY';
import CollapseItem from 'components/adou-collapseY/collapseItem';
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
        console.log('index: ', index);
    };

    const accordionItems1 = [
        {
            title: 'Section 1',
            content:
                'Content for section 1 Consistent with real life: in line with the process and logic of real          life, and comply with languages and habits that the users are used to;',
        },
        {
            title: 'Section 2',
            content: 'Content for section 2',
        },
        {
            title: 'Section 3',
            content: 'Content for section 3',
        },
    ];

    return (
        <div style={{ padding: '50px' }}>
            <div className="accordionY-container">
                <CollapseY according activeName="1">
                    {accordionItems1.map((item, index) => (
                        <CollapseItem name={index} key={index} title={item.title} onClick={() => handleCollapseToggle(index)}>
                            {item.content}
                        </CollapseItem>
                    ))}
                </CollapseY>
            </div>
        </div>
    );
};

export default App;
