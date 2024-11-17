import { useState, useEffect, useRef, ReactNode, useImperativeHandle } from 'react';
import { useParams } from 'react-router-dom';
import React from 'react';
import getAbsolutePosition from 'utils/getAbsolutePosition';
import './index.scss';

interface FormItemProps {
    wrap?: boolean;
    formItemRef?: any;
    rules?: any;
    setFieldValue?: any;
    formItemWrapperWidth?: any;
    wrapperWidth?: any;
    data?: any;
    clearable?: boolean;
    addonAfter?: ReactNode | string | number;
    size?: 'lg' | 'default' | 'sm';
    labelWidth?: any;
    layout?: 'horizontal' | 'horizontal-top' | 'vertical' | 'inline';
    addonBefore?: ReactNode | string | number;
    label?: string;
    width?: any;
    name?: string;
    children?: ReactNode;
}

const FormItem = ({
    wrap = false,
    formItemRef,
    rules,
    setFieldValue,
    formItemWrapperWidth,
    wrapperWidth,
    data,
    clearable = true,
    addonAfter,
    size = 'default',
    labelWidth,
    layout = 'horizontal',
    addonBefore,
    label,
    width,
    name,
    children,
}: FormItemProps) => {
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [isError, setIsError] = useState<boolean>(false);

    const adouFormRef = useRef<any>(null);
    const [customSelectContentPosition, setCustomSelectContentPosition] = useState<any>({});

    const judgeFormItemContentCls = () => {
        if (layout === 'horizontal') {
            return 'adou-form-item-content-horizontal d-flex align-items-center';
        } else if (layout === 'horizontal-top') {
            return 'adou-form-item-content-horizontal-top d-flex align-items-start';
        } else if (layout === 'vertical') {
            return 'adou-form-item-content-vertical flex-column';
        } else if (layout === 'inline') {
            return 'adou-form-item-content-inline d-flex align-items-center me-3';
        }
    };

    // 统一处理 addonBefore
    let processedAddonBefore = addonBefore;
    /* if (React.isValidElement(addonBefore)) {
        const props = addonBefore.props;
        // 如果是 ReactNode（通过 isValidElement 判断是否为有效的 React 元素），添加 isaddon 属性
        processedAddonBefore = React.cloneElement(addonBefore as any, { isaddon: 'true', formStyle: { background: 'transparent', border: 0 }, size, clearable, ...props });
    }
 */
    let processedAddonAfter = addonAfter;
    /* if (React.isValidElement(addonAfter)) {
        const props = addonAfter.props;
        // 如果是 ReactNode（通过 isValidElement 判断是否为有效的 React 元素），添加 isaddon 属性
        processedAddonAfter = React.cloneElement(addonAfter as any, { isaddon: 'true', formStyle: { background: 'transparent', border: 0 }, size, clearable, ...props });
    } */

    const handleFieldChange = (value: any) => {
        setFieldValue && setFieldValue({ [name!]: value });
    };

    // 由于使用 value = data[name]的话，会滞后一节拍，所以索性直接在调用 validateField 的时候，把 data 传入
    const validateField = (value?: any) => {
        if (!rules) return;
        for (const rule of rules) {
            if (rule.required && (value === undefined || value === null || value === '')) {
                setIsError(true);
                setErrorMessage(rule.message || 'This field is required');
                break;
            } else {
                setIsError(false);
                setErrorMessage('');
            }
            if (rule.validator) {
                const error = rule.validator(value);
                if (error) {
                    setIsError(true);
                    setErrorMessage(error.message || 'This field is invalid');
                    break;
                } else {
                    setIsError(false);
                    setErrorMessage('');
                }
            }
        }
    };

    const enhancedChildren = React.Children.map(children, (child: any, index: number) => {
        const props = child.props;
        const isChildrenArray = Array.isArray(children);
        const { formStyle: originalFormStyle } = props; // 获取原组件的 formStyle 属性
        const mergedFormStyle = {
            ...(processedAddonBefore && { borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }),
            ...(processedAddonAfter && { borderTopRightRadius: 0, borderBottomRightRadius: 0 }),
            ...(index !== 0 && { borderLeft: 0 }),
            // 多个子组件时，并且没有 addon 的时候，要对样式做边框处理
            ...(isChildrenArray && index !== children.length - 1 && { borderTopRightRadius: 0, borderBottomRightRadius: 0 }),
            ...(isChildrenArray && index !== 0 && { borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }),
            ...originalFormStyle, // 合并原组件的 formStyle 属性
        };
        // 将 rules 放到数组中，以供 validate使用
        return React.cloneElement(child, {
            name,
            size,
            clearable,
            formStyle: mergedFormStyle,
            defaultValue: data?.[props.name || name],
            wrapperWidth,
            onFieldChange: handleFieldChange,
            onValidateField: validateField,
            ...props,
        }); // 增强，并不会去除页面调用的子组件的其他属性，只会进行 覆盖（视情况而定）
    });

    const getAbsolutePositionFn = () => {
        if (!adouFormRef.current) return;
        const position = getAbsolutePosition(adouFormRef.current, 0, 0);
        setCustomSelectContentPosition(position);
    };

    useImperativeHandle(formItemRef, () => ({
        validateField,
    }));

    useEffect(() => {
        getAbsolutePositionFn();
    }, [isError, errorMessage]);

    return (
        <div className={`adou-form-item-wrapper ${layout === 'horizontal' && !isError ? 'mb-3' : ''}`} style={{ width: formItemWrapperWidth }}>
            <div className={`adou-form-item-content ${judgeFormItemContentCls()} ${layout === 'vertical' ? 'mb-1' : !isError ? 'mb-3' : 'mb-1'}`}>
                {label && (
                    <div className={`adou-form-item-label-box ${layout === 'vertical' ? 'mb-1' : layout === 'horizontal' ? 'text-end pe-3' : ''}`} style={{ width: labelWidth }}>
                        <span className="form-item-label-text" style={{ fontSize: '14px', whiteSpace: wrap ? 'wrap' : 'nowrap' }}>
                            {label}
                        </span>
                    </div>
                )}
                <div ref={adouFormRef} className="adou-form-box" style={{ flex: 1 }}>
                    <div className="adou-form-content">
                        {processedAddonBefore ? (
                            <div className="input-group">
                                <span className="input-group-text py-0" style={{ fontSize: '14px' }}>
                                    {processedAddonBefore}
                                </span>
                                <div className="adou-form d-flex" style={{ flex: 1 }}>
                                    {enhancedChildren}
                                </div>
                                {processedAddonAfter && (
                                    <span className="input-group-text py-0" style={{ fontSize: '14px' }}>
                                        {processedAddonAfter && processedAddonAfter}
                                    </span>
                                )}
                            </div>
                        ) : processedAddonAfter ? (
                            <div className="input-group">
                                <div className="adou-form d-flex" style={{ flex: 1 }}>
                                    {enhancedChildren}
                                </div>
                                <span className="input-group-text py-0" style={{ fontSize: '14px' }}>
                                    {processedAddonAfter && processedAddonAfter}
                                </span>
                            </div>
                        ) : (
                            <div className="adou-form d-flex" style={{ flex: 1 }}>
                                {enhancedChildren}
                            </div>
                        )}
                    </div>
                    <div className="suffix-content"></div>
                    {isError && (
                        <div
                            className="error-box fadeInDown "
                            style={{
                                color: 'red',
                                fontSize: '14px',
                                marginTop: '4px',
                            }}
                        >
                            {errorMessage}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

FormItem.displayName = 'FormItem';

export default FormItem;
