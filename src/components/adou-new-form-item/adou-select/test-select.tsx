import { useEffect, useImperativeHandle, useRef, useState } from 'react';
import './index.scss';
import React from 'react';
import getAbsolutePosition from 'utils/getAbsolutePosition';
import ReactDOM from 'react-dom';
import useClickOutside from 'hooks/useClickOutside';
import getContentWidth from 'utils/getContentWidth';
import isEmptyO from '../isEmptyO';
import useDebounce from 'hooks/useDebonce';
import useThrottle from 'hooks/useThrottle';

export interface SelectProps {
    filter?: boolean;
    showSearch?: boolean;
    prefix?: any;
    suffix?: any;
    varient?: 'outlined' | 'filled' | 'borderless';
    contentWrap?: boolean;
    ellipsis?: boolean;
    compact?: boolean; // 是否紧凑模式？太窄了
    wrapperStyle?: React.CSSProperties;
    wrapperWidth?: any;
    commonSuffixContent?: string;
    clearable?: boolean;
    isAddon?: boolean;
    formStyle?: React.CSSProperties;
    errorPaddingLeft?: any;
    suffixContentExternalCls?: string;
    selectContentExternalCls?: string;
    labelMinWidth?: any;
    noWrap?: boolean;
    shouldFocus?: boolean;
    activeColor?: { font: string; bgc: string };
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
    size?: 'sm' | 'lg' | 'default';
    externalClassName?: string;
    readOnly?: boolean;
    transparent?: boolean;
    optionContentMaxHeight?: string;
    onChange?: (e?: any, ...args: any) => void;
    onFormDataChange?: (key: string, value: any) => void;
    onFieldChange?: (name: string, value: any) => void;
    onValidateField?: (data?: any) => void;
    optionRender?: (option: any, labelKey?: any, valueKey?: any) => void; // 自定义渲染选项
    onInputChange?: (value: string) => void;
    filterOption?: (input: string, option: any, labelKey?: any, valueKey?: any) => any | boolean;
}

const Select = React.forwardRef((props: SelectProps, ref) => {
    const {
        filter,
        showSearch,
        prefix,
        suffix,
        varient = 'outlined',
        contentWrap = true,
        ellipsis = true,
        compact,
        wrapperWidth,
        commonSuffixContent,
        size,
        clearable = false,
        isAddon,
        wrapperStyle,
        formStyle,
        errorPaddingLeft,
        suffixContentExternalCls,
        selectContentExternalCls,
        labelMinWidth,
        noWrap = true,
        shouldFocus = false,
        activeColor = { font: '#fff', bgc: '#2783d8' },
        returnType = 'str',
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
        externalClassName,
        readOnly,
        transparent,
        optionContentMaxHeight = '200px',
        onChange,
        onFormDataChange,
        onFieldChange,
        onValidateField,
        optionRender,
        onInputChange,
        filterOption,
    } = props;

    const [isShow, setIsShow] = useState<boolean>(false);
    const [closing, setClosing] = useState<boolean>(false);
    const [isEnter, setIsEnter] = useState<boolean>(false);
    // 防止多次执行 defaultValue 逻辑
    const [hasUseDefaultValue, sethasUseDefaultValue] = useState<boolean>(false);

    // const { isShow, selectWrapperRef, handleClose } = useClickOutside();

    const [newOptions, setNewOptions] = useState(options || []);
    const [originalOptions, setoriginalOptions] = useState<any>(options || []);
    const [value, setValue] = useState(defaultValue || {});
    // 暂存上一次选中的数据，防止更换 options 的时候，无法展示上次的数据
    const [tempValue, settempValue] = useState<any>(defaultValue || null);
    const [calcMaxHeight, setCalcMaxHeight] = useState<number>(0);
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
    const [focusedIndex, setFocusedIndex] = useState<number>(-1); // 新增状态，用于跟踪当前聚焦的选项

    const [selectValueMaxWidth, setSelectValueMaxWidth] = useState<any>('');
    const [isFocus, setIsFocus] = useState<boolean>(false);

    const selectWrapperRef = useRef<any>(null);
    const selectRef = useRef<any>();
    const contentRef = useRef<any>();
    const [customSelectContentPosition, setCustomSelectContentPosition] = useState<any>({});

    const handleClose = () => {
        if (readOnly) return;
        // RetrieveSelect 新增逻辑
        setIsInputFocusing(false);
        if (inputRef.current) {
            inputRef.current.value = '';
        }
        if (isShow) {
            validate(); // 打开后的关闭再去校验有没有值
            setClosing(true);
            setTimeout(() => {
                setClosing(false);
                setIsShow((prev: boolean) => !prev);
            }, 100);
            setIsEnter(false);
        } else {
            setIsShow((prev: boolean) => !prev);
        }
    };

    const handleFieldChange = (value: any) => {
        onFieldChange && onFieldChange(name!, value);
    };

    const handleValidate = (data?: any) => {
        onValidateField && onValidateField(data);
    };

    const handleFormContentClick = (e: any) => {
        e.stopPropagation();
        if (readOnly) return;
        const position = getAbsolutePosition(selectRef.current, 0, 0);
        setCustomSelectContentPosition(position);
        if (isInputFocusing && value) {
        } else {
            setIsShow(true);
        }
    };

    const handleSelect = (item: any, e?: React.MouseEvent) => {
        e?.stopPropagation();
        setValue(item);
        settempValue(item);
        const returnValue = returnType === 'obj' || showDefaultValue ? item : item[valueKey];
        onChange && onChange(returnValue);
        setError(false);
        handleClose();
        setIsDropdownOpen(false);
        // 新增onFormDataChange来修改外部传入的数据
        onFormDataChange && onFormDataChange(name!, returnValue);
        handleFieldChange && handleFieldChange(returnValue);

        setError(false);
        handleValidate(item);
    };

    useEffect(() => {
        // 新增：如果使用过 defaultValue，就不再执行下面的逻辑
        if (hasUseDefaultValue) return;
        if (defaultValue) {
            sethasUseDefaultValue(true);
        }
        // 如果是必须展示默认值，不通过列表匹配的话，进入这个判断
        if (showDefaultValue) {
            if (typeof defaultValue !== 'object') {
                const selectOption = { [valueKey]: defaultValue, [labelKey]: defaultValue };
                setValue(selectOption);
                settempValue(selectOption);
            } else if (typeof defaultValue === 'object') {
                setValue(defaultValue);
                settempValue(defaultValue);
            }
        } else {
            if (typeof defaultValue === 'object') {
                const selectOption = options.find((option) => option?.[valueKey] === defaultValue?.[valueKey]);
                // 如果找到匹配项，则设置选中项
                if (selectOption) {
                    setValue(selectOption);
                    settempValue(selectOption);
                } else {
                    // 如果没有找到匹配项，则不设置选中项
                    setValue({});
                    // settempValue({});
                }
            } else {
                if (defaultValue || defaultValue === 0 || defaultValue === false) {
                    const selectOption = options.find((option) => option[valueKey] === defaultValue);
                    setValue(selectOption);
                } else {
                    setValue(tempValue);
                }
            }
        }
        // 如果有值，则自动做校验，防止一开始没值出现空提示，后面切换了有值还是出现空提示的错误
        if (defaultValue) {
            setError(false);
        }
    }, [defaultValue, options]);

    useEffect(() => {
        if (showEmpty) {
            const enhancedOptions = [...options];
            setNewOptions(enhancedOptions);
            setoriginalOptions(enhancedOptions);
        } else {
            setNewOptions(options);
            setoriginalOptions(options);
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
                handleFieldChange && handleFieldChange(value);
            } else {
                onFormDataChange && onFormDataChange(name!, value[valueKey] || value[labelKey]);
                handleFieldChange && handleFieldChange(value[valueKey] || value[labelKey]);
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
        settempValue('');
    };

    const handleClickCommonSuffixIcon = () => {};

    const handleClearIconClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        clear();
        setError(true);
        handleFieldChange?.(returnType === 'str' ? '' : {});
        handleValidate('');
    };

    useImperativeHandle(ref, () => ({
        validate,
        clear,
        getValue,
    }));

    const wrapperClassName = `adou-select-wrapper ${externalClassName || ''}`.trim();

    // 全部都 通过 KeyDown来关闭下拉列表项
    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'Tab') {
            // 当下拉项展开的时候进入这个回调，来关闭下拉项
            if (isShow) {
                handleClose();
                setIsDropdownOpen(false);
            }
            return; // 让焦点移动到下一个表单元素
        } else if (isShow) {
            if (event.key === 'ArrowUp') {
                event.preventDefault();
                setFocusedIndex((prevIndex) => (prevIndex <= 0 ? newOptions.length - 1 : prevIndex - 1));
            } else if (event.key === 'ArrowDown') {
                event.preventDefault();
                setFocusedIndex((prevIndex) => (prevIndex >= newOptions.length - 1 ? 0 : prevIndex + 1));
            } else if (event.key === 'Enter') {
                handleClose();
                if (focusedIndex == -1) return;
                event.preventDefault();
                handleSelect(newOptions[focusedIndex]);
            }
        }
    };

    // 全部都 通过 focus来展开下拉列表项
    const handleFocus = (e: any) => {
        e.stopPropagation();
        if (varient === 'filled' && selectRef.current && !readOnly) {
            selectRef.current.style.backgroundColor = '';
            setIsFocus(true);
        }
        if (!shouldFocus) return;
        const position = getAbsolutePosition(selectRef.current, 0, 0);
        setCustomSelectContentPosition(position);
        handleClose();
        setIsDropdownOpen(true);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement, Element>, ...args: any) => {
        handleValidate(value);
        if (varient === 'filled' && selectRef.current) {
            selectRef.current.style.backgroundColor = '#f0f0f0';
        }
        setIsFocus(false);

        // 失焦后，展示 select-value
        setIsInputFocusing(false);
        if (inputRef.current) {
            inputRef.current.value = '';
        }
    };

    const handleMouseEnter = () => {
        setIsEnter(true);
    };

    const handleMouseLeave = () => {
        setIsEnter(false);
    };

    // 计算所取到的值能展示的最大宽度
    const getMaxSelectValueWidth = () => {
        const selectWidth = getContentWidth(selectRef.current);
        if (!selectWidth) return;
        const cliearIconBoxWidth = document.querySelector('.adou-select-clear-icon-box')?.clientWidth;
        const adouSelectIconBoxWidth = document.querySelector('.adou-select-icon-box')?.clientWidth;

        setSelectValueMaxWidth(selectWidth - (cliearIconBoxWidth || 0) - (adouSelectIconBoxWidth || 0) + 'px');
    };

    // RetrieveSelect 逻辑
    const [isInputFocusing, setIsInputFocusing] = useState<boolean>(false);
    const inputRef = useRef<any>();

    const handleInputFocus = (e: any) => {
        e.stopPropagation();
        // 新增 RetrieveSelect 逻辑
        if (showSearch && inputRef.current) {
            setIsInputFocusing(true);
            inputRef.current?.focus();
            if (!isEmptyO(value)) {
                inputRef.current.value = value[labelKey];
                inputRef.current?.select();
            }
        }
    };

    const _onInputChange = useThrottle((value: string) => {
        onInputChange && onInputChange(value);
    }, 1000);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.stopPropagation();
        setIsShow(true);
        const value = e.target.value;
        if (!onInputChange) {
            // 如果不需要检索，则直接做过滤
            const filteredOptions = originalOptions.filter((item: any) => {
                return filterOption ? filterOption(value, item, labelKey, valueKey) : item[labelKey].toLowerCase().includes(value.toLowerCase());
            });
            setNewOptions(filteredOptions);
        } else {
            _onInputChange(value);
        }
    };

    useEffect(() => {
        if (!isShow) {
            setIsDropdownOpen(false);
            setFocusedIndex(-1); // 重置聚焦索引
        }
    }, [isShow]);

    useEffect(() => {
        setTimeout(() => {
            getMaxSelectValueWidth();
        }, 100);
    }, []);

    useClickOutside([selectRef, contentRef, inputRef], handleClose, contentRef.current && isShow);

    return (
        <div
            onFocus={handleFocus}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            ref={selectWrapperRef}
            className={`${wrapperClassName} `}
            style={{
                ...wrapperStyle,
                ...(wrapperWidth ? { width: wrapperWidth } : { flex: 1 }),
            }}
        >
            t = {tempValue?.[labelKey] ?? tempValue}v = {value?.[labelKey]}
            {/*   <select style={{ display: 'none' }} name={name}>
                  <option value={value?.[valueKey]}>{value?.[labelKey]}</option>
              </select> */}
            {/* inputGroup风格 */}
            <div className="adou-select-form-content">
                is = {String(isInputFocusing)}
                <div
                    ref={selectRef}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={(e: any) => handleFormContentClick(e)}
                    className={`adou-select d-flex align-items-center ${selectContentExternalCls || ''} ${isFocus ? 'adou-form-control-focus' : ''}`}
                    style={{
                        textAlign: 'left',
                        background: transparent ? 'transparent' : readOnly ? '#eee' : varient === 'filled' ? '#f0f0f0' : '',
                        flex: 1,
                        ...(suffixContentType === 'button'
                            ? {
                                  borderTopRightRadius: 0,
                                  borderBottomRightRadius: 0,
                                  // borderRight: "none",
                              }
                            : {}),
                        height: size === 'lg' ? '48px' : size === 'sm' ? '32px' : '40px',
                        border: varient === 'borderless' ? 'none' : '',
                        cursor: readOnly ? 'not-allowed' : 'pointer',
                        ...formStyle,
                    }}
                >
                    {prefix && <div className="prefix me-2">{prefix}</div>}
                    {value?.[valueKey] || value?.[valueKey] === 0 || value?.[valueKey] === false ? (
                        ellipsis ? (
                            !isInputFocusing ? (
                                <div
                                    title={value[labelKey]}
                                    className={`adou-select-value ${contentWrap ? 'ellipsis-1' : ''}`} // ellipsis-1 加上这个，选择框会自动变大或者变小
                                    style={{ ...(!showSearch ? { flex: 1 } : {}) }}
                                >
                                    {value[labelKey]}
                                </div>
                            ) : (
                                ''
                            )
                        ) : (
                            <div className={`adou-select-value  ${contentWrap ? 'ellipsis-1' : ''}`} style={{ ...(showSearch ? { flex: 1 } : {}) }}>
                                {value[labelKey]}
                            </div>
                        )
                    ) : (
                        ''
                    )}
                    {showSearch && (
                        <div className="adou-select-input-box flex-fill">
                            <input
                                placeholder={value?.[valueKey] ? '' : placeholder}
                                onFocus={handleInputFocus}
                                ref={inputRef}
                                // placeholder={isInputFocusing || !selectedOptions.length ? placeholder : ''}
                                // onFocus={handleInputFocus}
                                onChange={handleInputChange}
                                // onClick={handleInputClick}
                                readOnly={readOnly}
                                type="text"
                                className="adou-select-input"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                        </div>
                    )}
                    {suffix && <div className="suffix ms-2">{suffix}</div>}

                    {clearable && isEnter && value?.[valueKey || labelKey] ? (
                        <div className="adou-select-clear-icon-box fade-enter d-flex">
                            <i
                                className="adou-select-clear-icon fa-regular fa-circle-xmark text-secondary"
                                style={{ fontSize: '12px', cursor: 'pointer' }}
                                onClick={handleClearIconClick}
                            ></i>
                        </div>
                    ) : (
                        <div className="adou-select-common-sufiix-content text-secondary" style={{ textAlign: 'right' }}>
                            {commonSuffixContent}
                        </div>
                    )}
                    {commonSuffixIcon && <i onClick={handleClickCommonSuffixIcon} className={`${commonSuffixIcon} adou-select-common-suffix-icon`}></i>}
                    <div className={`adou-select-icon-box ms-2 ${!showSearch && !value?.[valueKey] ? 'flex-fill text-end' : ''}`}>
                        <i
                            style={{ color: labelColor, right: isAddon ? '0px' : '14px' }}
                            className={`adou-select-icon fa-solid fa-caret-right ${isShow ? 'rotate-up' : 'rotate-down'}`}
                        ></i>
                    </div>
                </div>
                {/* {suffixContent && (
                      <div className={`${suffixContentType === 'button' ? 'suffix-content-btn-wrapper px-2' : 'suffix-content-text-wrapper ms-2'} ${suffixContentExternalCls || ''}`}>
                          {suffixContent}
                      </div>
                  )} */}
            </div>
            {ReactDOM.createPortal(
                <div
                    style={{
                        position: 'absolute',
                        top: customSelectContentPosition.y + customSelectContentPosition.height + 'px',
                        left: customSelectContentPosition.x + 'px',
                        ...(isShow
                            ? {
                                  maxHeight: calcMaxHeight > parseInt(optionContentMaxHeight!) ? optionContentMaxHeight : calcMaxHeight + 'px',
                              }
                            : {}),
                        ...(closing ? { opacity: 0, transform: 'scaleY(0)' } : {}),
                    }}
                    ref={contentRef}
                    className={`adou-select-option-content ${isShow ? 'adou-select-option-content-open' : ''} ${closing ? 'aduo-select-option-content-closing' : ''}`}
                >
                    {isShow && (
                        <div className={`adou-select-option-box`}>
                            {newOptions.length > 0 ? (
                                newOptions.map((item, index) => (
                                    <div
                                        onClick={(e) => handleSelect(item, e)}
                                        style={{
                                            color: value?.[valueKey] === item[valueKey] ? activeColor.font : '#000',
                                            backgroundColor: value?.[valueKey] === item[valueKey] ? activeColor.bgc : '',
                                        }}
                                        className={`adou-select-option ${
                                            value?.[valueKey] === item[valueKey] ? 'adou-select-option-active' : ''
                                        } ${focusedIndex === index ? 'focused' : ''}`}
                                        key={item[valueKey]}
                                    >
                                        {optionRender ? optionRender(item, labelKey, valueKey) : item[labelKey]}
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
    );
});

Select.displayName = 'Select';

export default Select;
