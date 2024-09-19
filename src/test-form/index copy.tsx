import React, { useState, useEffect } from 'react';

const FormComponent = ({ data, onDataChange }) => {
    // 使用 useState 创建一个内部状态来存储表单数据
    const [formData, setFormData] = useState(data);

    // 当外部传入的 data 发生变化时，更新内部状态
    useEffect(() => {
        setFormData(data);
    }, [data]);

    // 处理表单输入变化
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // 在表单提交时，将更新后的数据传递回父组件
    const handleSubmit = (e) => {
        e.preventDefault();
        onDataChange(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={formData.name || ''} onChange={handleInputChange} />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={formData.email || ''} onChange={handleInputChange} />
            </div>
            <div>
                <label htmlFor="age">Age:</label>
                <input type="number" id="age" name="age" value={formData.age || ''} onChange={handleInputChange} />
            </div>
            <button>Submit</button>
        </form>
    );
};

export default FormComponent;
