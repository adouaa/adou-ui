import { forwardRef, useContext, useEffect, useImperativeHandle, useState } from 'react';
import React from 'react';
import './index.scss';
import classNames from 'classnames';

interface TextAreaProps {
    name?: string;
    isFormItem?: boolean;
    errMsg?: string;
    labelWidth?: any;
    commonSuffixIcon?: string;
    readOnly?: boolean;
    externalClassName?: string;
    width?: any;
    inputGroup?: boolean;
    labelPosition?: 'left-top' | 'center' | 'top' | 'input-group';
    labelColor?: string;
    required?: boolean;
    ref?: any;
    defaultValue?: string;
    label?: string;
    placeholder?: string;
    disabled?: boolean;
    onChangeOK?: (value: any, ...args: any) => void;
}

const TextArea: React.FC<TextAreaProps> = React.forwardRef((props: TextAreaProps, ref) => {
    const {
        isFormItem,
        errMsg,
        labelWidth,
        labelColor,
        commonSuffixIcon,
        readOnly,
        externalClassName,
        width,
        inputGroup = false,
        labelPosition = 'center',
        required = false,
        name,
        label,
        placeholder,
        disabled,
        defaultValue,
        onChangeOK,
    } = props;

    // 获取 `FormContext.Provider` 提供提供的 `value` 值

    const [value, setValue] = useState(defaultValue ?? '');

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>, ...args: any) => {
        setValue(e.target.value); // 手动将表单的value值赋值
        // context.handleChange(context.name, e.target.value) // 这边不能直接用 handleChange来赋值，会出现赋值错误的情况
        onChangeOK && onChangeOK(e.target.value, ...args);
    };

    const handleBlur = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        validate();
    };

    const handleClickCommonSuffixIcon = () => {
        setValue('');
        setError(true);
    };

    const [error, setError] = useState<boolean>(false);
    const validate = () => {
        if (!required) return true;
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
    // Expose validateInput method via ref
    useImperativeHandle(ref, () => ({
        validate,
        clear,
    }));

    const textareaClasses = classNames({
        'mb-3': !error && isFormItem,
        'textarea-warpper': true,
        [externalClassName as string]: externalClassName,
    });

    useEffect(() => {
        if (defaultValue) {
            setValue(defaultValue);
        }
    }, [defaultValue]);

    return (
        <div className={textareaClasses} style={{ width }}>
            <div className={`label-in-${labelPosition} ${inputGroup ? 'input-group' : ''}`}>
                {label && (
                    <span style={{ color: labelColor, width: labelWidth }} className={`${inputGroup ? 'input-group-text' : ''} label-box`}>
                        {label}
                    </span>
                )}
                <textarea
                    readOnly={readOnly}
                    required={required}
                    name={name}
                    value={value}
                    disabled={disabled}
                    onBlur={(e) => handleBlur(e)}
                    onChange={(e) => handleChange(e)}
                    placeholder={placeholder}
                    className="form-control"
                    aria-label="With textarea"
                ></textarea>
                {commonSuffixIcon && <i onClick={handleClickCommonSuffixIcon} className={`${commonSuffixIcon} common-suffix-icon ms-2`}></i>}
            </div>
            {error && required && (
                <div
                    className="animate__animated animate__fadeIn"
                    style={{
                        color: '#DC3545',
                        paddingLeft: parseInt(labelWidth) > 120 ? '120px' : labelWidth,
                    }}
                >{`${errMsg || `${name}不能为空`}`}</div>
            )}
        </div>
    );
});

export default TextArea;
