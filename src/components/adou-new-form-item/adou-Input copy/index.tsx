import React, { forwardRef, useEffect, useRef, useState, useImperativeHandle, ReactNode } from 'react';
import './index.scss';

export interface InputProps {
    addonBefore?: ReactNode | string | number;
    addonAfter?: ReactNode | string | number;
    varient?: 'outlined' | 'filled' | 'borderless';
    valueKey?: string;
    labelKey?: string;
    wrapperWidth?: any;
    wrapperStyle?: React.CSSProperties;
    commonSuffixContent?: string;
    clearable?: boolean;
    formStyle?: React.CSSProperties;
    suffixContentExternalClassName?: string;
    inputExternalClassName?: string;
    textEnd?: boolean;
    name?: string;
    inline?: boolean;
    isFormItem?: boolean;
    errMsg?: string;
    labelWidth?: any;
    commonSuffixIcon?: string;
    width?: any;
    label?: string;
    layout?: 'horizontal' | 'horizontal-top' | 'vertical' | 'inline';
    inputGroup?: boolean;
    labelColor?: string;
    required?: boolean;
    type?: 'text' | 'datetime-local' | 'date' | 'time' | 'number';
    defaultValue?: any;
    size?: 'lg' | 'default' | 'sm';
    externalClassName?: string;
    prefixContent?: any;
    suffixContent?: any;
    suffixContentType?: string;
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
    onFormDataChange?: (key: string, value: any) => void;
    onFieldChange?: (name: string, value: any) => void;
    onValidateField?: (name: string, value?: any) => void;
}

export interface InputRef {
    validate: () => void;
}

const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = (
    {
        addonBefore,
        addonAfter,
        varient = 'outlined',
        valueKey,
        labelKey,
        wrapperWidth,
        wrapperStyle,
        clearable = true,
        commonSuffixContent,
        formStyle,
        suffixContentExternalClassName,
        inputExternalClassName,
        textEnd,
        name,
        inline,
        isFormItem,
        errMsg,
        labelWidth,
        commonSuffixIcon,
        inputGroup = false,
        width,
        label,
        layout = 'center',
        labelColor,
        required = false,
        type = 'text',
        defaultValue,
        size,
        externalClassName,
        prefixContent,
        suffixContent,
        suffixContentType = 'button',
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
        onFormDataChange,
        onFieldChange,
        onValidateField,
    },
    ref
) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [value, setValue] = useState(defaultValue ?? '');
    const [isEnter, setIsEnter] = useState<boolean>(false);

    const handleClick = (e: React.MouseEvent<HTMLInputElement, MouseEvent>, ...args: any) => {
        e.stopPropagation();
        onClick && onClick(e, ...args);
    };

    const handleFocus = (e: React.FocusEvent<HTMLInputElement, Element>, ...args: any) => {
        e.stopPropagation();
        if (varient === 'filled' && inputRef.current) {
            inputRef.current.style.backgroundColor = '';
        }
        onFocus && onFocus(e, ...args);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement, Element>, ...args: any) => {
        onBlur && onBlur(e, ...args);
        handleValidate(value);
        if (varient === 'filled' && inputRef.current) {
            inputRef.current.style.backgroundColor = '#f0f0f0';
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, ...args: any) => {
        const value = e.target.value;
        const returnValue = type === 'number' ? Number(value) : value;
        setValue(value);
        onChange && onChange(returnValue, ...args);
        onFormDataChange && onFormDataChange(name!, returnValue);
        handleFieldChange && handleFieldChange(returnValue);
        handleValidate(value);
    };

    const handleIconClick = () => {
        onIconClick && onIconClick(value);
    };

    const [error, setError] = useState<boolean>(false);

    const handleFieldChange = (value: any) => {
        onFieldChange && onFieldChange(name!, value);
    };

    const handleValidate = (data: any) => {
        onValidateField && onValidateField(name!, data);
    };

    const validate = () => {};
    const clear = () => {
        setValue('');
    };

    const handleMouseEnter = () => {
        setIsEnter(true);
    };

    const handleMouseLeave = () => {
        setIsEnter(false);
    };

    const handleClearIconClick = () => {
        clear();
        handleFieldChange('');
        handleFieldChange('');
        console.log('5: ', 5);
        handleValidate('');
    };

    const generateClsWhenHasLabel = () => {
        switch (layout) {
            case 'horizontal':
                return 'adou-input-label-horizontal';

            case 'horizontal-top':
                return 'adou-input-label-horizontal-top';

            case 'vertical':
                return 'adou-input-label-vertical';

            default:
            case 'center':
                return 'adou-input-label-center';
        }
        return '';
    };

    const commonElement = (
        <>
            <input
                className={`form-control adou-input pe-2 ${textEnd || type === 'number' ? 'text-end' : ''} ${
                    suffixContent && suffixContentType === 'button' ? 'suffix-content-btn' : ''
                } ${inputExternalClassName || ''} ${varient === 'borderless' ? 'border-0' : varient === 'filled' && !addonAfter && !addonBefore ? 'border-0' : ''}`}
                ref={inputRef}
                required={required}
                style={{
                    flex: 1,
                    minHeight: size === 'lg' ? '48px' : size === 'sm' ? '31px' : '40px',
                    width,
                    ...(varient === 'filled' && { backgroundColor: '#f0f0f0' }),
                    ...(addonBefore && {
                        borderTopLeftRadius: 0,
                        borderBottomLeftRadius: 0,
                    }),
                    ...(addonAfter && {
                        borderTopRightRadius: 0,
                        borderBottomRightRadius: 0,
                    }),
                    ...formStyle,
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
            />
            {clearable && true && value ? (
                <span
                    className="adou-input-clear-icon-box fade-enter"
                    style={{
                        top: size === 'sm' ? '2px' : size === 'lg' ? ' 10px' : '6px',
                    }}
                >
                    <i
                        className="adou-input-clear-icon fa-regular fa-circle-xmark text-secondary"
                        style={{ fontSize: '12px', cursor: 'pointer' }}
                        onClick={handleClearIconClick}
                    ></i>
                </span>
            ) : (
                <div
                    className="adou-input-common-sufiix-content position-absolute text-secondary"
                    style={{
                        right: '14px',
                        top: size === 'sm' ? '14%' : size === 'lg' ? ' 26%' : '18%',
                    }}
                >
                    {commonSuffixContent}
                </div>
            )}
        </>
    );

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
        if (defaultValue) {
            setError(false);
        }
    }, [defaultValue]);

    /**
     * 获取组件的高度赋值给label
     */
    const wrapeerRef = useRef<any>();
    useEffect(() => {}, []);

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`adou-input-wrapper position-relative`}
            style={{
                ...wrapperStyle,
                ...(wrapperWidth ? { width: wrapperWidth } : { flex: 1 }),
            }}
        >
            {addonBefore || addonAfter ? (
                <div className="adou-input">
                    <div className="input-group">
                        <span className="input-group-text py-0" style={{ fontSize: '14px' }}>
                            {addonBefore && addonBefore}
                        </span>
                        <div className="adou-form d-flex" style={{ flex: 1 }}>
                            {commonElement}
                        </div>
                        {addonAfter && (
                            <span className="input-group-text py-0" style={{ fontSize: '14px' }}>
                                {addonAfter && addonAfter}
                            </span>
                        )}
                    </div>
                </div>
            ) : (
                <div className={`adou-input flex-fill  ${generateClsWhenHasLabel()}`}>
                    {label && <span className="pe-3">{label}</span>}
                    {commonElement}
                </div>
            )}
        </div>
    );
};

// 对于使用 forwardRef 包装的组件，displayName 需要在 forwardRef 调用之后设置
// 上述代码中，Input 组件是通过 forwardRef 包装的，因此需要在 forwardRef 调用之后设置 displayName

const ForwardedInput = forwardRef(Input);
ForwardedInput.displayName = 'Input';

export default ForwardedInput;
