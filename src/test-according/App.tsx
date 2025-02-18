import Collapse from 'components/adou-collapseX';
import OffCanvas from 'components/adou-drawer';
import React, { useRef } from 'react';

const App = () => {
    const offCanvasRef = useRef<any>(null);

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
            <OffCanvas trigger="123" clickOutside></OffCanvas>
            <div className="accordion-container">
                {accordionItems.map((item, index) => (
                    <Collapse key={index} header={item.header}>
                        {item.content}
                    </Collapse>
                ))}
            </div>
            {/* <OffCanvas
                actRef={offCanvasRef}
                width="500px"
                title="自定义标题"
                trigger={<button>打开抽屉</button>}
                onClose={() => console.log('关闭')}
                onOpen={() => console.log('打开')}
            >
                <div>抽屉内容</div>
            </OffCanvas> */}
        </div>
    );
};

export default App;
