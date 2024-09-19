import React, { useState } from 'react';
import FormComponent from './index';

const App = () => {
    // 初始数据
    const [data, setData] = useState({
        name: 'John Doe',
        email: 'john.doe@example.com',
        age: 30,
    });

    // 处理表单数据变化
    const handleDataChange = (updatedData) => {
        setData(updatedData);
        console.log('Updated Data:', updatedData);
    };

    return (
        <div>
            <h1>Form Example</h1>
            {/* <FormComponent /> */}
            <div>
                <h2>Current Data:</h2>
                <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
        </div>
    );
};

export default App;
