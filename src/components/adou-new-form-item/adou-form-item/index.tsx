import { useState, useEffect, useRef, ReactNode, useImperativeHandle } from 'react';
import React from 'react';
import getAbsolutePosition from 'utils/getAbsolutePosition';
import './index.scss';
import isEmptyO from '../isEmptyO';

interface FormItemProps {
    labelColor?: string;
    contentBackgroundColor?: string;
    wrapperMinWidth?: any;
    wrapperWidth?: any;
    wrapperMaxWidth?: any;
    contentWrapperWidth?: any;
    wrapperStyle?: React.CSSProperties;
    contentWrap?: boolean;
    oneLine?: boolean;
    labelWrap?: boolean;
    formItemRef?: any;
    rules?: any;
    setFieldValue?: any;
    data?: any;
    clearable?: boolean;
    addonAfter?: ReactNode | string | number;
    size?: 'lg' | 'default' | 'sm';
    labelWidth?: any;
    layout?: 'horizontal' | 'horizontal-top' | 'vertical' | 'inline';
    addonBefore?: ReactNode | string | number;
    label?: string;
    name?: string;
    children?: ReactNode;
}

const FormItem = ({
    labelColor,
    contentBackgroundColor,
    wrapperMinWidth = '120px',
    wrapperWidth = '100%',
    wrapperMaxWidth,
    contentWrapperWidth,
    wrapperStyle,
    contentWrap = false,
    oneLine,
    labelWrap = false,
    formItemRef,
    rules,
    setFieldValue,
    data,
    clearable = false,
    addonAfter,
    size = 'default',
    labelWidth,
    layout = 'horizontal',
    addonBefore,
    label,
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

    const handleFieldChange = (name: string, value: any) => {
        setFieldValue && setFieldValue({ [name!]: value });
    };

    // 由于使用 value = data[name]的话，会滞后一节拍，所以索性直接在调用 validateField 的时候，把 data 传入
    const validateField = (formName?: string, value?: any, isForm: boolean = false) => {
        if (!rules) return true;
        const validateValue = !isForm ? value : value || data[formName! || name!];
        for (const rule of rules) {
            if (
                rule.required &&
                (validateValue === undefined ||
                    validateValue === null ||
                    validateValue === '' ||
                    validateValue === 0 ||
                    (typeof validateValue === 'object' && isEmptyO(validateValue)))
            ) {
                setIsError(true);
                setErrorMessage(rule.message || 'This field is required');
                return false;
            } else {
                setIsError(false);
                setErrorMessage('');
            }
            if (rule.validator) {
                const error = rule.validator(validateValue);
                if (error) {
                    setIsError(true);
                    setErrorMessage(error.message || 'This field is invalid');
                    return false;
                } else {
                    setIsError(false);
                    setErrorMessage('');
                }
            }
        }
        return true;
    };

    const enhancedChildren = React.Children.map(children, (child: any, index: number) => {
        const props = child.props;
        const isChildrenArray = Array.isArray(children);
        const { formStyle: originalFormStyle } = props; // 获取原组件的 formStyle 属性
        const mergedFormStyle = {
            ...(processedAddonBefore && {
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
            }),
            ...(processedAddonAfter && {
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
            }),
            ...(index !== 0 && { borderLeft: 0 }),
            // 多个子组件时，并且没有 addon 的时候，要对样式做边框处理
            ...(isChildrenArray &&
                index !== children.length - 1 && {
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                }),
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
            wrapperWidth: contentWrapperWidth,
            backgroundColor: contentBackgroundColor, // 传递背景色
            labelColor,
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

    const generateWrapperCls = () => {
        if (layout === 'horizontal' && !isError) {
            return 'mb-3';
        } else if (layout === 'inline' && oneLine) {
            return 'mb-0';
        } else {
            return 'mb-3';
        }
    };

    useImperativeHandle(formItemRef, () => ({
        validateField,
    }));

    useEffect(() => {
        getAbsolutePositionFn();
    }, [isError, errorMessage]);

    return (
        <div
            className={`adou-form-item-wrapper ${generateWrapperCls()}`}
            style={{
                width: wrapperWidth,
                minWidth: wrapperMinWidth,
                maxWidth: wrapperMaxWidth,
                ...wrapperStyle,
                ...(layout === 'inline' && !wrapperWidth && !wrapperMaxWidth && { flex: 1 }),
            }}
        >
            {/*  ${
            layout === "vertical" ? "mb-1" : !isError ? "mb-3" : "mb-1"
          } */}
            <div
                className={`adou-form-item-content ${judgeFormItemContentCls()} ${isError ? 'border-danger' : ''} ${
                    isError && layout !== 'horizontal-top' ? ' align-items-baseline' : ''
                }`}
            >
                {label && (
                    <div
                        className={`adou-form-item-label-box text-end pe-3 position-relative ${
                            rules && rules.length && rules.some((item: any) => item.required) ? 'required' : ''
                        } ${layout === 'vertical' ? 'mb-1' : layout === 'horizontal' ? 'text-end pe-3' : ''}`}
                        style={{ width: labelWidth }}
                    >
                        <span
                            className="form-item-label-text"
                            style={{
                                fontSize: '14px',
                                whiteSpace: labelWrap ? 'wrap' : 'nowrap',
                            }}
                        >
                            {label}
                        </span>
                        {rules && rules.length && rules.some((item: any) => item.required) && <span className="form-item-label-text-required">*</span>}
                    </div>
                )}
                <div ref={adouFormRef} className="adou-form-box" style={{ flex: 1 }}>
                    <div className="adou-form-content">
                        {processedAddonBefore ? (
                            <div className="input-group" style={{ flexWrap: contentWrap ? 'wrap' : 'nowrap' }}>
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
