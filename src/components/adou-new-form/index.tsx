import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import React from "react";

interface AdouNewFormProps {
    children?: any;
}

const AdouNewForm = forwardRef(({ children }: AdouNewFormProps, AdouFormRef) => {

    const formRef = useRef<any>(null);

    const getFormData = () => {
        console.log(childRefs.current);

        const formWrapper = formRef.current; // 获取 search-wrapper 的 DOM 元素
        if (!formWrapper) return;

        // 遍历所有表单元素
        const formValues: any = {};
        const formElements = formWrapper.querySelectorAll('input, select, textarea');
        console.log(formElements);

        formElements.forEach((element: any) => {
            const { name, value, tagName, type } = element;
            if (!name) return;
            const child = childRefs.current[name]?.current;
            // 处理 input 元素
            if (tagName === 'INPUT') {
                if (type === 'checkbox') {
                    child?.validateCheckbox()

                    // 如果是复选框，更新 formValues[name] 为选中的复选框的值的数组
                    if (!formValues[name]) {
                        formValues[name] = [];
                    }
                    if (element.checked) { // 如果是 checkbox的话，会造出多个 input type="checkbox"的表单
                        formValues[name].push(value);
                    }
                } else {
                    child?.validateInput()

                    if (child.getValue) {
                        formValues[name] = child.getValue();
                    } else {
                        formValues[name] = value;
                    }
                }
            }
            // 处理 select 元素
            else if (tagName === 'SELECT') {

                child?.validateSelect()
                if (child?.getValue) {
                    formValues[name] = child.getValue();
                } else {
                    formValues[name] = element.value;
                }

            }
            // 处理 textarea 元素
            else if (tagName === 'TEXTAREA') {
                formValues[name] = value;
                child?.validateTextarea()
            }
        });

        // 输出收集到的表单值

        // 这里可以根据需要，将 formValues 传递给其他处理函数或者组件
        return formValues;
    };

    const clearForm = () => {
        const formWrapper = formRef.current; // 获取 search-wrapper 的 DOM 元素
        if (!formWrapper) return;

        // 遍历所有表单元素
        const formElements = formWrapper.querySelectorAll('input, select, textarea');
        formElements.forEach((element: any) => {
            const { name, tagName, type } = element;
            const child = childRefs.current[name]?.current;

            // 处理 input 元素
            if (tagName === 'INPUT') {
                if (type === 'checkbox') {
                    // 如果是复选框，取消选中状态
                    child?.clear();
                } else { // 其他类型的 input 元素，清空值
                    if (child?.clear) {
                        child.clear()
                    } else {
                        element.value = '';
                    }

                }
            }
            // 处理 select 元素
            else if (tagName === 'SELECT') {
                child?.clear();
            }
            // 处理 textarea 元素
            else if (tagName === 'TEXTAREA') {
                // 清空值
                element.value = '';
            }
        });

    };

    const validateForm = () => {
        const formWrapper = formRef.current; // 获取 search-wrapper 的 DOM 元素
        if (!formWrapper) return false;

        let isValid = true; // 默认表单验证通过

        // 遍历所有表单元素
        const formElements = formWrapper.querySelectorAll('input, select, textarea');
        formElements.forEach((element: any) => {
            const { name, value, tagName, type, required } = element;

            // 处理 input 元素
            if (tagName === 'INPUT') {
                if (type === 'checkbox') {
                    // 如果是复选框，检查是否至少有一个复选框被选中
                    if (required && !isValidCheckboxGroup(name)) {
                        isValid = false;
                    }
                } else if (required && value.trim() === '') { // 检查是否必填项为空
                    isValid = false;
                }
            }
            // 处理 select 元素
            else if (tagName === 'SELECT') {
                if (required && value.trim() === '') { // 检查是否必选项为空
                    isValid = false;
                }
            }
            // 处理 textarea 元素
            else if (tagName === 'TEXTAREA') {
                if (required && value.trim() === '') { // 检查是否必填项为空
                    isValid = false;
                }
            }
        });

        if (!isValid) {
            console.log('表单校验失败，请填写所有必填项！');
        }

        return isValid;
    };

    // 辅助函数，检查复选框组是否至少有一个复选框被选中
    const isValidCheckboxGroup = (name: string) => {
        const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
        return checkboxes.length > 0;
    };




    const childRefs = useRef<{ [key: string]: React.MutableRefObject<any> }>({});

    const renderChildren = () => {
        const renderChildren: any = []

        // 这个方法可行
        React.Children.map(children, (child) => {
            const childRef = React.createRef<any>(); // 创建一个 ref
            // child.type 子元素自身（FormItem），检查其静态属性 displayName 是否满足条件
            const enhancedChildren = React.cloneElement(child, {
                key: child.props.name,
                ref: childRef,
                
                // 注意：一个组件只能有一个 ref，要么外面提供ref手动处理，要么在 Form组件下统一提供ref
                // 可以自定义要不要在Form下给表单组件提供 ref
                // [`${child.props.name === "test-select" ? "" : "ref"}`]: childRef 
            })
            renderChildren.push(enhancedChildren);
            // 将子组件的 ref 存储到 childRefs 中
            if (child.props.name) {

                childRefs.current[child.props.name] = childRef;
            }

        })
        return renderChildren
    };


    // 对外暴露的API
    useImperativeHandle(AdouFormRef, () => ({
        getFormData,
        clearForm,
        validateForm
    }))


    return (
        <div className="adou-new-form-wrapper" ref={formRef}>
            <h1>adou-new-form</h1>
            {renderChildren()}
        </div>
    );
})

export default AdouNewForm;