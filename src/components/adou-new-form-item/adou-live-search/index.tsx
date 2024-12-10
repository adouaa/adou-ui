import React, { useImperativeHandle } from 'react';
import './index.scss';
import { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import getAbsolutePosition from 'utils/getAbsolutePosition';
import useClickOutside from 'hooks/useClickOutside';

export interface SelectProps {
    wrapperStyle?: React.CSSProperties;
    wrapperWidth?: any;
    commonSuffixContent?: string;
    clearable?: boolean;
    formStyle?: React.CSSProperties;
    type?: 'text' | 'number';
    maxHeight?: string;
    activeColor?: { font: string; bgc: string };
    returnType?: 'str' | 'obj';
    showDefaultValue?: boolean;
    labelKey?: string;
    valueKey?: string;
    name?: string;
    inline?: boolean;
    suffixContent?: any;
    suffixContentType?: string;
    contentWidth?: any;
    isFormItem?: boolean;
    attribute?: string;
    required?: boolean;
    errMsg?: string;
    labelWidth?: any;
    commonSuffixIcon?: string;
    width?: any;
    label?: string;
    labelPosition?: 'left-top' | 'center' | 'top';
    inputGroup?: boolean;
    labelColor?: string;
    defaultValue?: any;
    options: any[];
    placeholder?: string;
    size?: 'sm' | 'lg';
    externalClassName?: string;
    readOnly?: any;
    showSelected?: boolean;
    single?: boolean;
    onInputChange?: (e?: any, ...args: any) => void;
    onFormDataChange?: (key: string, value: any) => void;
    onFieldChange?: (name: string, value: any) => void;
    onValidateField?: (name: string, value: any) => void;
}

interface LiveSearchProps extends SelectProps {
    onLiveSearchChange?: (selectedOptions: any[]) => void;
    onDelete?: () => void;
}

// 传进来的 options 的每一项的 唯一标识 如果是数字的话，不能为 字符串，唯一标识最后是 数字的id

const LiveSearch: React.FC<LiveSearchProps> = React.forwardRef((props: LiveSearchProps, ref) => {
    const {
        wrapperWidth,
        wrapperStyle,
        clearable = true,
        commonSuffixContent,
        formStyle,
        type,
        maxHeight = '300px',
        activeColor = { font: '#fff', bgc: '#2783d8' },
        returnType = 'str',
        showDefaultValue = true,
        placeholder = '请输入',
        isFormItem = true,
        labelKey = 'label',
        valueKey = 'value',
        inline,
        suffixContent,
        suffixContentType = 'button',
        contentWidth,
        attribute = 'value',
        required,
        errMsg,
        labelWidth,
        commonSuffixIcon,
        width,
        label,
        labelColor,
        labelPosition = 'center',
        inputGroup = false,
        single = true,
        name,
        defaultValue,
        showSelected = true,
        options,
        size,
        externalClassName,
        readOnly = false,
        onInputChange,
        onLiveSearchChange,
        onDelete,
        onFormDataChange,
        onFieldChange,
        onValidateField,
    } = props;

    const [isOpen, setisOpen] = useState<boolean>(false);
    const [showOptions, setShowOptions] = useState(false);
    const [optionList, setOptionList] = useState(options);
    const [selectedOptions, setSelectedOptions] = useState<any[]>([]);
    const [isHighlighted, setIsHighlighted] = useState(false);
    const [focusedIndex, setFocusedIndex] = useState<number>(-1); // 新增状态，用于跟踪当前聚焦的选项
    const [inputValue, setInputValue] = useState<any>(''); // 用来存储输入框的值
    const [isEnter, setIsEnter] = useState<boolean>(false);

    // 其实类似是 isFirst，第一次进来的时候要做一些操作。后面有空改成 value 配合 defaultValue 来实现会合理点
    // const [isInput, setisInput] = useState<boolean>(false);

    const retrieveInputRef = useRef<any>();
    const retrieveSelectWrapperFormControlRef = useRef<any>();
    const contentRef = useRef<any>();
    const [customSelectContentPosition, setCustomSelectContentPosition] = useState<any>({});
    const [originlOptions, setOriginOptions] = useState<any[]>([]); // 存放最初的值， 用来做过滤

    const [closing, setClosing] = useState<boolean>(false);

    const liveSearchSelectRef = useRef<any>(null);

    // 由于第一次选择之后有几率出现 error 闪烁的情况，所以需要设置一个判断
    // 判断：如果是第一次选择，则不通过 validate进行校验，而是在 选择的逻辑那边直接进行校验
    const handleClose = (isSelect?: boolean) => {
        setShowOptions(false);
        setIsHighlighted(false);
        if (isOpen) {
            setClosing(true);
            setTimeout(() => {
                setClosing(false);
                setisOpen((prev: boolean) => !prev);
            }, 100);
        }
        setFocusedIndex(-1);
        if (isOpen && !isSelect) {
            validate();
        }
    };

    const handleFieldChange = (value: any) => {
        onFieldChange && onFieldChange(name!, value);
    };

    const handleValidate = (data?: any) => {
        onValidateField && onValidateField(name!, data);
    };

    useClickOutside([liveSearchSelectRef, contentRef], handleClose, isOpen && contentRef.current);
    // currentSelectList 这玩意很有问题？
    const handleSelect = (option: any, e?: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        console.log('option: ', option);
        e?.stopPropagation();
        if (!option) return;
        const currentSelectList = optionList
            ?.filter((item: any) => {
                return item?.[valueKey] != option?.[valueKey];
            })
            .filter((i: any) => {
                return i.selected;
            });
        if (option.selected) {
            option.selected = false;
            if (currentSelectList.length) {
                setError(false);
            } else {
                if (!required) {
                    setError(false);
                } else {
                    // 这里必须加上 定时器，不然无法正确 校验 validate 选择已经选中的数据(此时应该校验失败)
                    setTimeout(() => {
                        setError(true);
                    });
                }
            }
            setInputValue('');
        } else {
            setError(false);
            if (single) {
                console.log('进啦: ');
                setOptionList((preArr: any) => {
                    return preArr.map((item: any) => {
                        if (item[valueKey] === option[valueKey]) {
                            item.selected = true;
                        } else {
                            item.selected = false;
                        }
                        return item;
                    });
                });
            } else {
                setOptionList((preArr: any) => {
                    return preArr.map((item: any) => {
                        if (!item.selected) {
                            if (item[valueKey] === option[valueKey]) {
                                item.selected = true;
                            }
                        }
                        return item;
                    });
                });
            }
        }
        let hasSelected = selectedOptions?.some((item) => item[labelKey] === option[labelKey]);
        if (single) {
            const data = hasSelected ? [] : [option];
            const returnData = returnType === 'str' ? data[0]?.[valueKey] : data[0];
            setSelectedOptions(data);
            // 这边在 返回数据的时候，根据 returnType 返回不同的数据类型
            onLiveSearchChange && onLiveSearchChange(hasSelected ? {} : returnData);
            // 这边在 改变表单数据的时候，直接赋值给表单 valueKey的值，而不是一个 对象
            onFormDataChange && onFormDataChange(name!, data[0]?.[valueKey]);
            handleFieldChange && handleFieldChange(data[0]?.[valueKey]);
            handleValidate(data[0]?.[valueKey]);
            console.log('data: ', data);
            setInputValue(data[0]?.[labelKey] || ''); // 记住 这边要给个 "" 兜底，不然会无法取消选择
        } else {
            const currentSelectedOptions = [...selectedOptions, option];
            const data = hasSelected ? selectedOptions.filter((item: any) => item[valueKey] !== option[valueKey]) : currentSelectedOptions;
            setSelectedOptions(data);
            onLiveSearchChange && onLiveSearchChange(data);
            onFormDataChange && onFormDataChange(name!, data);
            handleFieldChange && handleFieldChange(data);
            handleValidate(data);
        }
        handleClose(true);
    };

    const handleInputClick = (e: any) => {
        setIsHighlighted(true);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target?.value;
        setInputValue(value);
        onInputChange && onInputChange(e.target?.value);
        onFormDataChange && onFormDataChange(name!, value);
        handleFieldChange && handleFieldChange(value);
        // 输入词修改时也需要展示选项
        // 【注意：关键是把最开始的列表值存到一个state中，然后再用这个state去过滤，然后再赋值给要展示的列表】
        const filterdOptions = originlOptions?.filter(
            (item: any) => String(item[labelKey]).includes(value) // 刚好如果输入是空的，就会展示所有的
        );
        setOptionList(filterdOptions);
        handleValidate(value);
    };

    const handleDeleteItem = (item: any) => {
        const selectedList = selectedOptions.filter((option) => option !== item);
        setSelectedOptions(selectedList);
        setOptionList(
            optionList.map((v: any) => {
                if (v[labelKey] === item[labelKey]) {
                    v.selected = false;
                }
                return v;
            })
        );
        validate();
        onDelete && onDelete();
    };

    const handleBlur = () => {};

    const handleWrapperClick = (e: any) => {
        if (readOnly) return;
        // retrieveInputRef.current && retrieveInputRef.current.focus();
        setIsHighlighted(true);
        const position = getAbsolutePosition(retrieveSelectWrapperFormControlRef.current, 0, 0);
        setCustomSelectContentPosition(position);
        if (!isOpen) {
            setisOpen(true);
        }
    };

    const getValue = () => {
        return selectedOptions;
    };

    const [error, setError] = useState<boolean>(false);
    const validate = () => {
        if (!required) return true;
        if (selectedOptions.length || inputValue) {
            setError(false);
            return true;
        } else {
            setError(true);
            return false;
        }
    };

    const clear = () => {
        setSelectedOptions([]);
        setInputValue('');
        setOptionList(
            optionList.map((option: any) => {
                option.selected = false;
                return option;
            })
        );
    };

    const handleClickCommonSuffixIcon = (e: React.MouseEvent<HTMLDivElement>) => {};

    const handleClearIconClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        clear();
        if (required) setError(true);
        handleFieldChange?.('');
        handleValidate('');
    };

    useImperativeHandle(ref, () => ({
        getValue,
        validate,
        clear,
    }));

    const judgeOptionsByAttribute = (arr: any, item: any) => {
        arr?.forEach((i: any) => {
            if (i[valueKey] === item[valueKey]) {
                i.selected = true;
            }
        });
        setOptionList(arr);
    };

    const handleFocus = (event: any) => {
        setIsHighlighted(true);
        handleClose();
        const position = getAbsolutePosition(retrieveSelectWrapperFormControlRef.current, 0, 0);
        setCustomSelectContentPosition(position);
        setTimeout(() => {
            setShowOptions(true);
        }, 10);
    };

    // 全部都 通过 KeyDown来关闭下拉列表项
    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'Tab') {
            // 当下拉项展开的时候进入这个回调，来关闭下拉项
            if (isOpen) {
                handleClose();
            }
            return; // 让焦点移动到下一个表单元素
        } else if (event.key === 'ArrowUp') {
            event.preventDefault();
            setFocusedIndex((prevIndex) => (prevIndex <= 0 ? optionList.length - 1 : prevIndex - 1));
        } else if (event.key === 'ArrowDown') {
            event.preventDefault();
            setFocusedIndex((prevIndex) => (prevIndex >= optionList.length - 1 ? 0 : prevIndex + 1));
        } else if (event.key === 'Enter') {
            handleClose();
            event.preventDefault();
            handleSelect(optionList?.[focusedIndex]);
        } else if (event.key === 'Escape') {
            setShowOptions(false);
        }
    };

    const handleMouseEnter = () => {
        setIsEnter(true);
    };

    const handleMouseLeave = () => {
        setIsEnter(false);
    };

    useEffect(() => {
        if (defaultValue) {
            const convertedValue = typeof defaultValue === 'object' ? defaultValue?.[valueKey] : defaultValue;
            let arr: any[] = [];
            // 这边不能省略，不然会造成 选择已经被选中的数据的时候无法正确清除掉
            originlOptions?.forEach((option: any) => {
                (option[valueKey] === defaultValue || option[labelKey] === defaultValue) && arr.push(option);
            });
            setSelectedOptions(arr);

            setOptionList((preArr) => {
                return preArr?.map((item) => ({
                    ...item,
                    selected: convertedValue === item[valueKey] || convertedValue === item[labelKey],
                }));
            });
            const value = arr?.[0]?.[labelKey];
            setInputValue(value ?? inputValue);
        } else {
            setSelectedOptions([]);
            if (!defaultValue) {
                setInputValue('');
            } // 默认值如果为undefined / null / 0的话，需要手动置为 ""，不能只判断为undefined的情况
        }

        if (defaultValue) {
            setError(false);
        }
    }, [defaultValue, originlOptions]);

    useEffect(() => {
        if (selectedOptions.length) {
            selectedOptions?.forEach((item: any) => {
                judgeOptionsByAttribute(options, item);
            });
        } else {
            setOptionList(options);
        }
        setOriginOptions(options);
        // 不应该有这个逻辑吧，不然会出现列表一变化就展示列表
        /* if (!isOpen) {
          handleClose();
        } */
    }, [options]);

    return (
        <div
            onFocus={handleFocus}
            onKeyDown={handleKeyDown}
            ref={liveSearchSelectRef}
            className={`adou-live-search-wrapper ${externalClassName}`}
            style={{ ...wrapperStyle, ...(wrapperWidth ? { width: wrapperWidth } : { flex: 1 }) }}
        >
            <div className="adou-live-search-form-content f-1">
                <div
                    className={`adou-live-search form-control ${isHighlighted ? 'focus' : ''}`}
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        /* ...(suffixContentType === 'button'
                            ? {
                                  borderTopRightRadius: 0,
                                  borderBottomRightRadius: 0,
                                  // borderRight: "none",
                              }
                            : {}), */
                        alignItems: 'center',
                        ...formStyle,
                    }}
                    ref={retrieveSelectWrapperFormControlRef}
                    tabIndex={0}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onBlur={handleBlur}
                    onClick={handleWrapperClick}
                >
                    <div className="adou-live-search-input-control">
                        <input
                            value={inputValue}
                            ref={retrieveInputRef}
                            placeholder={placeholder}
                            onChange={(e) => handleInputChange(e)}
                            onClick={handleInputClick}
                            readOnly={readOnly}
                            type="text"
                            className={`adou-live-search-input ${type === 'number' ? 'text-end' : ''}`}
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                        />
                    </div>
                    {clearable && isEnter && selectedOptions.length ? (
                        <div className="adou-live-search-clear-icon-box d-flex fade-enter">
                            <i
                                className="adou-live-search-clear-icon fa-regular fa-circle-xmark text-secondary"
                                style={{ fontSize: '12px', cursor: 'pointer' }}
                                onClick={handleClearIconClick}
                            ></i>
                        </div>
                    ) : (
                        <div className="adou-live-search-common-sufiix-content text-secondary">{commonSuffixContent}</div>
                    )}
                    <div className="adou-live-search-icon-box ms-2">
                        <i className="adou-live-search-icon small text-secondary fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>
                {suffixContent && <div className={`${suffixContentType === 'button' ? 'suffix-content-btn-wrapper' : 'ms-1'}`}>{suffixContent}</div>}
            </div>
            {commonSuffixIcon && <i onClick={handleClickCommonSuffixIcon} className={`${commonSuffixIcon} common-suffix-icon ms-2`}></i>}
            {ReactDOM.createPortal(
                <div
                    ref={contentRef}
                    style={{
                        width: contentWidth,
                        position: 'absolute',
                        top: customSelectContentPosition.y + customSelectContentPosition.height + 'px',
                        left: customSelectContentPosition.x + 'px',
                        maxHeight,
                        ...(closing ? { opacity: 0, transform: 'scaleY(0)' } : {}),
                    }}
                    className={`adou-live-search-content ${showOptions ? 'adou-live-search-content-open' : ''} ${closing ? 'aduo-live-search-option-content-closing' : ''}`}
                >
                    {!readOnly &&
                        isOpen &&
                        (optionList?.length > 0 ? (
                            optionList?.map((option: any, index: number) => {
                                return (
                                    <div
                                        key={index}
                                        style={{
                                            color: option.selected ? activeColor.font : '#000',
                                            backgroundColor: option.selected ? activeColor.bgc : '',
                                        }}
                                        onClick={(e: any) => handleSelect(option, e)}
                                        className={`adou-live-search-option ${option.selected && 'adou-live-search-option-active'} ${
                                            focusedIndex === index && 'adou-live-search-option-focused'
                                        }`}
                                    >
                                        {option[labelKey]}
                                    </div>
                                );
                            })
                        ) : (
                            <div className="none-match ps-2 font-italic">No content</div>
                        ))}
                </div>,
                document.body
            )}
        </div>
    );
});

LiveSearch.displayName = 'LiveSearch';

export default LiveSearch;
