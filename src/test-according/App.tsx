import Collapse from 'components/adou-collapseX';
import OffCanvas from 'components/adou-offcanvas';
import React from 'react';

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

    return (
        <div style={{ padding: '50px' }}>
            <OffCanvas clickOutside></OffCanvas>
            <div className="accordion-container">
                {accordionItems.map((item, index) => (
                    <Collapse key={index} header={item.header}>
                        {item.content}
                    </Collapse>
                ))}
            </div>
        </div>
    );
};

export default App;
