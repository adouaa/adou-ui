import { withTranslation } from 'react-i18next';
import { ChangeEvent, useContext, useEffect, useImperativeHandle, useRef, useState } from 'react';
import './index.scss';
import React from 'react';
import getAbsolutePositionOfStage from '../../utils/getAbsolutePosition';
import ReactDOM from 'react-dom';
import useClickOutside from 'utils/hooks/useClickOutside';

export interface SelectProps {
    returnType?: 'str' | 'obj';
    showEmpty?: boolean;
    showDefaultValue?: boolean;
    labelKey?: string;
    valueKey?: string;
    showLabel?: boolean;
    suffixContent?: any;
    suffixContentType?: string;
    inline?: boolean;
    isFormItem?: boolean;
    name?: string;
    errMsg?: string;
    labelWidth?: any;
    commonSuffixIcon?: string;
    width?: any;
    label?: any;
    labelPosition?: 'left-top' | 'center' | 'top';
    inputGroup?: boolean;
    labelColor?: string;
    required?: boolean;
    defaultValue?: any;
    options: any[];
    placeholder?: string;
    size?: 'sm' | 'lg';
    externalClassName?: string;
    readOnly?: boolean;
    transparent?: boolean;
    maxHeight?: string;
    onChange?: (e?: any, ...args: any) => void;
    onFormDataChange?: (key: string, value: any) => void;
}

const Select = React.forwardRef((props: SelectProps, ref) => {
    const {
        returnType,
        showDefaultValue = false,
        labelKey = 'label',
        valueKey = 'value',
        suffixContent,
        showLabel = true,
        suffixContentType,
        inline,
        commonSuffixIcon,
        isFormItem,
        errMsg,
        labelWidth,
        label,
        labelPosition = 'center',
        inputGroup = false,
        labelColor,
        required = false,
        showEmpty = true,
        name,
        width,
        defaultValue,
        options,
        placeholder,
        size,
        externalClassName,
        readOnly,
        transparent,
        maxHeight = '200px',
        onChange,
        onFormDataChange,
    } = props;

    const { isOpen, dropdownRef, toggleDropdown } = useClickOutside();

    const [newOptions, setNewOptions] = useState(options || []);
    const [value, setValue] = useState(defaultValue || {});
    const [calcMaxHeight, setCalcMaxHeight] = useState<number>(0);
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
    const [focusedIndex, setFocusedIndex] = useState<number>(-1); // 新增状态，用于跟踪当前聚焦的选项

    const customSelectRef = useRef<any>();
    const contentRef = useRef<any>();
    const [customSelectContentPosition, setCustomSelectContentPosition] = useState<any>({});

    const handleDivClick = (e: any) => {
        const position = getAbsolutePositionOfStage(customSelectRef.current, 0, 0);
        setCustomSelectContentPosition(position);
        if (!isDropdownOpen) {
            toggleDropdown();
            setIsDropdownOpen(true);
        }
    };

    const handleSelect = (item: any) => {
        setValue(item);
        onChange && onChange(item);
        setError(false);
        toggleDropdown();
        setIsDropdownOpen(false);
        // 新增onFormDataChange来修改外部传入的数据
        if (returnType === 'obj') {
            onFormDataChange && onFormDataChange(name!, item);
        } else {
            onFormDataChange && onFormDataChange(name!, item[valueKey]);
        }
    };

    useEffect(() => {
        // 如果是必须展示默认值，不通过列表匹配的话，进入这个判断
        if (showDefaultValue) {
            if (typeof defaultValue !== 'object') {
                setValue({ [valueKey]: defaultValue, [labelKey]: defaultValue });
            }
        } else {
            if (typeof defaultValue === 'object') {
                const selectOption = options.find((option) => option[valueKey] === defaultValue[valueKey]);
                setValue(selectOption);
            } else {
                if (defaultValue || defaultValue === 0 || defaultValue === false) {
                    const selectOption = options.find((option) => option[valueKey] === defaultValue);
                    setValue(selectOption);
                } else {
                    setValue('');
                }
            }
        }
    }, [defaultValue, options]);

    useEffect(() => {
        if (showEmpty) {
            const enhancedOptions = [...options];
            setNewOptions(enhancedOptions);
        } else {
            setNewOptions(options);
        }
    }, [options]);

    useEffect(() => {
        setCalcMaxHeight(newOptions.length * 34 || 100);
    }, [newOptions]);

    const handleSelectChange = (e: any) => {
        setValue(e.target[valueKey]);
    };

    const getValue = () => {
        // 不能加这个逻辑，这样会导致手动选择另外的选项，返回的还是 defaultValue
        /* if (showDefaultValue) {
        return defaultValue;
      } */

        if (value?.[valueKey] || value?.[valueKey] === 0 || value?.[valueKey] === false) {
            // 感觉可有可无
            if (returnType === 'obj') {
                onFormDataChange && onFormDataChange(name!, value);
            } else {
                onFormDataChange && onFormDataChange(name!, value[valueKey] || value[labelKey]);
            }
            return value[valueKey] || value[labelKey];
        } else {
            return value;
        }
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

    const handleClickCommonSuffixIcon = () => {
        clear();
        setError(true);
    };

    useImperativeHandle(ref, () => ({
        validate,
        clear,
        getValue,
    }));

    const wrapperClassName = `select-wrapper ${!error && isFormItem && 'mb-3'} ${externalClassName || ''}`.trim();

    // 全部都 通过 KeyDown来关闭下拉列表项
    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'Tab') {
            // 当下拉项展开的时候进入这个回调，来关闭下拉项
            if (isOpen) {
                toggleDropdown();
                setIsDropdownOpen(false);
            }
            return; // 让焦点移动到下一个表单元素
        } else if (isOpen) {
            if (event.key === 'ArrowUp') {
                event.preventDefault();
                setFocusedIndex((prevIndex) => (prevIndex <= 0 ? newOptions.length - 1 : prevIndex - 1));
            } else if (event.key === 'ArrowDown') {
                event.preventDefault();
                setFocusedIndex((prevIndex) => (prevIndex >= newOptions.length - 1 ? 0 : prevIndex + 1));
            } else if (event.key === 'Enter' && focusedIndex !== -1) {
                event.preventDefault();
                handleSelect(newOptions[focusedIndex]);
            }
        }
    };

    // 全部都 通过 focus来展开下拉列表项
    const handleFocus = (event: any) => {
        const position = getAbsolutePositionOfStage(customSelectRef.current, 0, 0);
        setCustomSelectContentPosition(position);
        toggleDropdown();
        setIsDropdownOpen(true);
    };

    useEffect(() => {
        if (!isOpen) {
            setIsDropdownOpen(false);
            setFocusedIndex(-1); // 重置聚焦索引
        }
    }, [isOpen]);

    return (
        <div
            onFocus={handleFocus}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            ref={dropdownRef}
            className={wrapperClassName}
            style={{
                width,
                ...(inline && !width ? { flex: 1, marginRight: '15px' } : {}),
            }}
        >
            <select style={{ display: 'none' }} name={name}>
                <option value={value?.[valueKey]}>{value?.[labelKey]}</option>
            </select>
            {/* inputGroup风格 */}
            {inputGroup ? (
                <div className="input-group">
                    <label className="input-group-text" htmlFor="inputGroupSelect01">
                        {label}
                    </label>
                    <select onBlur={validate} onChange={handleSelectChange} value={value?.[valueKey]} disabled={readOnly} className="form-select" id="inputGroupSelect01">
                        {newOptions?.map((option: any) => (
                            <option key={option[valueKey]} value={option[valueKey]}>
                                {option[labelKey]}
                            </option>
                        ))}
                    </select>
                    {commonSuffixIcon && <i onClick={handleClickCommonSuffixIcon} className={`${commonSuffixIcon} common-suffix-icon ms-2`}></i>}
                </div>
            ) : (
                <div onBlur={validate} className={`content-box label-in-${labelPosition}`}>
                    {isFormItem && showLabel && (
                        <span
                            className="label-box"
                            style={{
                                color: labelColor,
                                width: labelWidth,
                                flexWrap: 'nowrap',
                                alignItems: labelPosition === 'left-top' ? 'start' : 'center',
                                ...(labelPosition !== 'top' && { display: 'flex' }),
                            }}
                        >
                            {label}
                        </span>
                    )}
                    <div
                        ref={customSelectRef}
                        onClick={(e: any) => handleDivClick(e)}
                        className="custom-select form-control"
                        style={{
                            textAlign: 'left',
                            background: transparent ? 'transparent' : '#fff',
                            flex: 1,
                        }}
                    >
                        {value?.[valueKey] || value?.[valueKey] === 0 || value?.[valueKey] === false ? (
                            <span className="select-value">{value[labelKey]}</span>
                        ) : (
                            <span className="select-placeholder">{placeholder}</span>
                        )}
                        {<i onClick={(e: any) => toggleDropdown()} className={`icon fa-solid fa-caret-right rotate-up ${isOpen ? 'rotate-up' : 'rotate-down'}`}></i>}
                    </div>
                    {commonSuffixIcon && <i onClick={handleClickCommonSuffixIcon} className={`${commonSuffixIcon} common-suffix-icon ms-2`}></i>}
                    {suffixContent && (
                        <div className={`${suffixContentType === 'button' ? 'suffix-content-btn-wrapper ms-2' : 'suffix-content-text-wrapper ms-2'}`}>{suffixContent}</div>
                    )}

                    {ReactDOM.createPortal(
                        <div
                            style={{
                                position: 'absolute',
                                top: customSelectContentPosition.y + customSelectContentPosition.height + 'px',
                                left: customSelectContentPosition.x + 'px',
                                ...(isOpen
                                    ? {
                                          maxHeight: calcMaxHeight > parseInt(maxHeight!) ? maxHeight : calcMaxHeight + 'px',
                                      }
                                    : {}),
                            }}
                            ref={contentRef}
                            className={`custom-select-content ${isOpen ? 'custom-select-content-open' : ''}`}
                        >
                            {isOpen && (
                                <div className={`option-box`}>
                                    {newOptions.length > 0 ? (
                                        newOptions.map((item, index) => (
                                            <div onClick={() => handleSelect(item)} className={`option ${focusedIndex === index ? 'focused' : ''}`} key={item[valueKey]}>
                                                {item[labelKey]}
                                            </div>
                                        ))
                                    ) : (
                                        <div className="none-match ps-2">No content</div>
                                    )}
                                </div>
                            )}
                        </div>,
                        document.body
                    )}
                </div>
            )}
            {error && required && (
                <div
                    className="animate__animated animate__fadeIn mb-1"
                    style={{
                        color: '#DC3545',
                        fontSize: '14px',
                        paddingLeft: parseInt(labelWidth) > 120 ? '120px' : parseInt(labelWidth) + 20 + 'px',
                    }}
                >{`${errMsg || `${label || name}不能为空`}`}</div>
            )}
        </div>
    );
});
export default Select;
