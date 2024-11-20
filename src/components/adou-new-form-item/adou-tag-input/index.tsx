import React, { useContext, useEffect, useImperativeHandle, useRef, useState } from 'react';

import './index.scss';
import { withTranslation } from 'react-i18next';

interface TagInputProps {
    wrapperStyle?: React.CSSProperties;
    wrapperWidth?: any;
    commonSuffixContent?: string;
    clearable?: boolean;
    formStyle?: React.CSSProperties;
    size?: 'lg' | 'default';
    suffixContentType?: string;
    suffixContent?: any;
    name?: string;
    isFormItem?: boolean;
    required?: boolean;
    errMsg?: string;
    labelWidth?: any;
    commonSuffixIcon?: string;
    readOnly?: boolean;
    width?: any;
    label?: string;
    labelPosition?: 'left-top' | 'center' | 'top';
    inputGroup?: boolean;
    labelColor?: string;
    defaultValue?: any;
    onChange?: (value: any) => void;
    onFieldChange?: (name: string, value: any) => void;
    onValidateField?: (data?: any) => void;
}

const TagInput = React.forwardRef(
    (
        {
            wrapperWidth,
            wrapperStyle,
            size = 'default',
            clearable = true,
            commonSuffixContent,
            formStyle,
            suffixContentType = 'button',
            suffixContent,
            required,
            isFormItem,
            errMsg,
            labelWidth,
            commonSuffixIcon,
            readOnly,
            width,
            label,
            labelColor,
            inputGroup = false,
            labelPosition = 'center',
            name,
            defaultValue,
            onChange,
            onFieldChange,
            onValidateField,
        }: TagInputProps,
        ref
    ) => {
        const [inputList, setInputList] = useState<any>(defaultValue || []);

        const [inputValue, setInputValue] = useState('');

        const [isHighlighted, setIsHighlighted] = useState(false);

        const [isEnter, setIsEnter] = useState<boolean>(false);

        const handleFieldChange = (value: any) => {
            onFieldChange && onFieldChange(name!, value);
        };

        const handleValidateField = (value?: any) => {
            onValidateField && onValidateField(value);
        };

        const addInput = () => {
            // 因为state是异步的，所以要把数据先处理好再使用
            const data = [...inputList, inputValue];
            setInputList(data);
            setInputValue('');
            // 把数据传回给父组件
            onChange && onChange(data);
            handleFieldChange && handleFieldChange(data);
            setError(false);
            handleValidateField(data);
        };

        const handleInputChange = (e: any) => {
            setInputValue(e.target.value);
        };

        const handleKeyDown = (event: any) => {
            const value = event.target.value.trim(); // 会有一个空格存在，要去掉
            if (!value) return;
            let flag = false;
            if (event.keyCode === 32 || event.keyCode === 13) {
                event.preventDefault(); // 阻止默认行为，防止提交表单或失去焦点
                flag = inputList.length > 0 && inputList.some((item: any) => item === value);
                !flag && addInput();
            }
        };

        const handleDeleteItem = (item: any) => {
            const tagList = inputList.filter((value: any) => item !== value);
            if (!tagList.length) {
                setError(true);
            }
            setInputList(tagList);
            onChange && onChange(tagList);
            handleFieldChange?.(tagList);
            // 注意，这边不能直接用 inputList给 formData赋值，会出现不一致的情况
        };

        const handleBlur = () => {
            // 注意，这边要在 inpuut失焦的时候触发，不能在 input change的时候触发，不然会出现校验错误
            setIsHighlighted(false);
            // 失焦之后就直接让 input输入了但是为保存的值清空，防止用户出现误解，优化体验
            setInputValue('');
        };

        const handleFocus = () => {
            setIsHighlighted(true);
        };

        const inputRef = useRef<any>();
        const handleClickFormControl = () => {
            inputRef.current.focus();
        };

        const getValue = () => {
            return inputList || [];
        };
        // 校验方法
        const [error, setError] = useState<boolean>(false);
        const validate = () => {
            if (!required) return true;
            if (inputList.length) {
                setError(false);
                return true;
            } else {
                setError(true);
                return false;
            }
        };
        // 清除内容方法
        const clear = () => {
            setInputList('');
        };
        const handleClearIconClick = () => {
            clear();
            setError(true);
            handleFieldChange && handleFieldChange('');
            handleValidateField('');
        };
        const handleClickCommonSuffixIcon = () => {};

        const handleMouseEnter = () => {
            setIsEnter(true);
        };

        const handleMouseLeave = () => {
            setIsEnter(false);
        };

        // Expose validate method via ref
        useImperativeHandle(ref, () => ({
            getValue,
            validate,
            clear,
        }));

        useEffect(() => {
            if (defaultValue?.length) {
                setInputList(defaultValue);
            } else {
                setInputList([]);
            }
        }, [defaultValue]);

        return (
            <div className={`adou-tag-input-wrapper`} style={{ ...wrapperStyle, ...(wrapperWidth ? { width: wrapperWidth } : { flex: 1 }) }}>
                <div className="adou-tag-input-form-content">
                    <div
                        className={`adou-tag-input form-control d-flex align-items-center ${isHighlighted ? 'focus' : ''}`}
                        style={{
                            minHeight: size === 'lg' ? '48px' : '40px',
                            ...formStyle,
                        }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onClick={handleClickFormControl}
                    >
                        <ul className="adou-tag-input-list">
                            {Array.isArray(inputList) &&
                                inputList.map((item: any) => {
                                    return (
                                        <li className="list-item" key={item}>
                                            {item}
                                            <span onClick={() => handleDeleteItem(item)} className="item-icon">
                                                x
                                            </span>
                                        </li>
                                    );
                                })}

                            <div className="adou-tag-input-control d-flex" style={{ minWidth: '40px', flex: 1 }}>
                                <input
                                    readOnly={readOnly}
                                    ref={inputRef}
                                    name={name}
                                    value={inputValue}
                                    autoComplete="off"
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                    onChange={(e) => handleInputChange(e)}
                                    onKeyDown={handleKeyDown}
                                    placeholder="空格或回车分割"
                                    type="text"
                                    className="input"
                                ></input>
                            </div>
                        </ul>
                        {clearable && isEnter && inputList.length ? (
                            <div className="adou-input-clear-icon-box fade-enter">
                                <i
                                    className="adou-input-clear-icon fa-regular fa-circle-xmark text-secondary"
                                    style={{ fontSize: '12px', cursor: 'pointer' }}
                                    onClick={handleClearIconClick}
                                ></i>
                            </div>
                        ) : (
                            <div className="adou-input-common-sufiix-content text-secondary">{commonSuffixContent}</div>
                        )}
                    </div>
                    {suffixContent && <div className={`${suffixContentType === 'button' ? 'suffix-content-btn-wrapper px-2' : 'ms-2'}`}>{suffixContent}</div>}
                </div>
                {commonSuffixIcon && <i onClick={handleClickCommonSuffixIcon} className={`${commonSuffixIcon} common-suffix-icon ms-2`}></i>}

                {/* 实现点击后高亮，div必须加上 form-control，这个类名会空值高亮以动画效果出现。并且 focus类名必须动态添加 */}
                {error && required && (
                    <div
                        className="animate__animated animate__fadeIn"
                        style={{
                            color: '#DC3545',
                            paddingLeft: parseInt(labelWidth) > 120 ? '120px' : labelWidth,
                        }}
                    >{`${errMsg || `${label}不能为空`}`}</div>
                )}
            </div>
        );
    }
);

export default TagInput;
