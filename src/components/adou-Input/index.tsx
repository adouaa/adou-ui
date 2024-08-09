import React, { forwardRef, useEffect, useRef, useState, useImperativeHandle } from 'react';
import classNames from 'classnames';
import './index.scss';

export interface InputProps {
    name?: string;
    isFormItem?: boolean;
    errMsg?: string;
    labelWidth?: any;
    commonSuffixIcon?: string;
    width?: any;
    label?: string;
    labelPosition?: 'left-top' | 'center' | 'top';
    inputGroup?: boolean;
    labelColor?: string;
    required?: boolean;
    type?: 'text' | 'datetime-local' | 'date' | 'time' | 'number';
    defaultValue?: any;
    size?: 'large' | 'middle' | 'small' | undefined;
    externalClassName?: string;
    prefixContent?: any;
    suffixContent?: any;
    placeholder?: string;
    style?: React.CSSProperties;
    readOnly?: boolean;
    transparent?: boolean;
    children?: any;
    onClick?: (e: React.MouseEvent<HTMLInputElement, MouseEvent>, ...args: any) => void;
    onFocus?: (e: React.FocusEvent<HTMLInputElement, Element>, ...args: any) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement, Element>, ...args: any) => void;
    onChange?: (value: any, ...args: any) => void;
    onIconClick?: (value: string) => void;
}

export interface InputRef {
    validate: () => void;
}

const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = (
    {
        name,
        isFormItem,
        errMsg,
        labelWidth,
        commonSuffixIcon,
        inputGroup = false,
        width,
        label,
        labelPosition = 'center',
        labelColor,
        required = false,
        type = 'text',
        defaultValue,
        size,
        externalClassName,
        prefixContent,
        suffixContent,
        placeholder,
        style,
        readOnly,
        transparent,
        children,
        onClick,
        onFocus,
        onBlur,
        onChange,
        onIconClick,
    },
    ref
) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [value, setValue] = useState(defaultValue ?? '');

    const cls = classNames({
        'input-group': suffixContent || prefixContent,
        [`input-group-${size}`]: size,
        [externalClassName as string]: externalClassName,
    });

    const handleClick = (e: React.MouseEvent<HTMLInputElement, MouseEvent>, ...args: any) => {
        onClick && onClick(e, ...args);
    };

    const handleFocus = (e: React.FocusEvent<HTMLInputElement, Element>, ...args: any) => {
        onFocus && onFocus(e, ...args);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement, Element>, ...args: any) => {
        onBlur && onBlur(e, ...args);
        validate();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, ...args: any) => {
        setValue(e.target.value);
        onChange && onChange(e.target.value, ...args);
    };

    const handleIconClick = () => {
        onIconClick && onIconClick(value);
    };

    const [error, setError] = useState<boolean>(false);
    const validate = () => {
        if (!required) return true;
        // Example validation logic, replace with your actual validation needs
        if (value) {
            setError(false);
            return true;
        } else {
            setError(true);
            return false;
        }
    };
    const clear = () => {
        setValue('');
    };

    const handleClickCommonSuffixIcon = () => {
        clear();
        if (required) setError(true);
    };

    // Expose validate method via ref
    useImperativeHandle(ref, () => ({
        validate,
        clear,
    }));

    useEffect(() => {
        if (defaultValue || defaultValue === 0) {
            setValue(defaultValue);
        } else {
            setValue('');
        }
    }, [defaultValue]);

    return (
        <div className={`${cls} input-wrapper ${inputGroup ? '' : 'lable-in-control'} ${!error && isFormItem && 'mb-3'}`} style={{ width }}>
            <div className={`content-box icon-input ${inputGroup ? 'input-group' : ''} label-in-${labelPosition}`}>
                {prefixContent && (
                    <span className="input-group-text" id="basic-addon1">
                        {prefixContent}
                    </span>
                )}
                {label && (
                    <div className="label-box" style={{ color: labelColor, width: labelWidth }}>
                        {label}
                    </div>
                )}
                <input
                    ref={inputRef}
                    required={required}
                    style={{
                        borderRadius: '6px',
                        borderTopLeftRadius: prefixContent ? 0 : '6px',
                        borderBottomLeftRadius: prefixContent ? 0 : '6px',
                        background: transparent ? 'transparent' : '#fff',
                    }}
                    step={1}
                    name={name}
                    value={value}
                    readOnly={readOnly}
                    placeholder={placeholder}
                    onChange={handleChange}
                    onBlur={(e) => handleBlur(e)}
                    onFocus={(e) => handleFocus(e)}
                    onClick={(e) => handleClick(e)}
                    type={type}
                    className="form-control input"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                />
                {commonSuffixIcon && <i onClick={handleClickCommonSuffixIcon} className={`${commonSuffixIcon} common-suffix-icon ms-2`}></i>}
                <div onClick={handleIconClick} className="suffix-icon" style={{ right: commonSuffixIcon && '32px' }}>
                    {children}
                </div>
            </div>
            {suffixContent && (
                <span className="input-group-text" id="basic-addon2">
                    {suffixContent}
                </span>
            )}
            {error && required && (
                <div
                    className="animate__animated animate__fadeIn mb-1"
                    style={{
                        color: '#DC3545',
                        fontSize: '14px',
                        paddingLeft: parseInt(labelWidth) > 120 ? '120px' : labelWidth,
                    }}
                >{`${errMsg || `${label}不能为空`}`}</div>
            )}
        </div>
    );
};
Input.displayName = 'Input';

export default forwardRef(Input);
