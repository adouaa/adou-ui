import React, { useRef } from "react";
import { useState } from "react";
import Form, { FormItem } from "./adou-form";
const NewFormTest = () => {
    const [options, setOptions] = useState([
        { label: "Apple", value: "apple_value" },
        { label: "Banana", value: "banana_value" },
        { label: "Cherry", value: "cherry_value" },
        { label: "Date", value: "date_value" },
        { label: "Elderberry", value: "elderberry_value" },
        { label: "Fig", value: "fig_value" },
        { label: "Grape", value: "grape_value" },
        { label: "Honeydew", value: "honeydew_value" },
        { label: "Kiwi", value: "kiwi_value" },
        { label: "Lemon", value: "lemon_value" },
    ]);


    const handleClick = () => {
        setKey(key + 1);
    }

    const [key, setKey] = useState(0);
    const [value, setValue] = useState({});

    setTimeout(() => {
        setValue("banana_value");
    }, 1000);

    const formRef = useRef<any>(null);

    const handleSubmit = () => {
        formRef.current.validate((valid: boolean) => {
            if (valid) {
                formRef.current.submitForm((formData: any) => {
                    console.log(formData);

                })
            }
        })
    }

    return (
        <>
            <Form ref={formRef}>
                <FormItem label="选择" name="select">
                    <FormItem.Select options={options} defaultValue={value}></FormItem.Select>
                </FormItem>
            </Form>
            <button onClick={handleClick}>测试</button>
            <button onClick={handleSubmit}>保存</button>
            key = {key}
        </>
    );
};

export default NewFormTest;
