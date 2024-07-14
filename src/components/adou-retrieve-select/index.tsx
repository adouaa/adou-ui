import { withTranslation } from "react-i18next";
import classNames from "classnames";
import React, { useContext, useImperativeHandle } from "react";
import "./index.scss";
import { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import getAbsolutePosition from "../../utils/getAbsolutePosition";

export interface SelectProps {
    name?: string;
    attribute?: string;
    required?: boolean;
    errMsg?: string;
    labelWidth?: any;
    commonSuffixIcon?: string;
    width?: any;
    label?: string;
    labelPosition?: "left-top" | "center" | "top";
    inputGroup?: boolean;
    labelColor?: string;
    defaultValue?: any;
    options: any[];
    placeholder?: string;
    size?: "sm" | "lg";
    externalClassName?: string;
    readOnly?: any;
    showSelected?: boolean;
    single?: boolean;
    onChangeOK?: (e?: any, ...args: any) => void
}

interface RetrieveSelectProps extends SelectProps {
    onRetrieveSelectChange?: (selectedOptions: any[]) => void;
    setFormItemValue?: (value: any) => void;
}

const RetrievrSelect: React.FC<RetrieveSelectProps> = React.forwardRef((props: RetrieveSelectProps, ref) => {



    const { attribute = "value", required, errMsg, labelWidth, commonSuffixIcon, width, label, labelColor, labelPosition = "center", inputGroup = false, single = true, name, defaultValue, showSelected = true, options, size, externalClassName, readOnly = false, setFormItemValue, onChangeOK, onRetrieveSelectChange } = props;

    // 获取 `FormContext.Provider` 提供提供的 `value` 值

    // const [value, setValue] = useState(defaultValue || ""); // 给个 || ""就会让 input为受苦状态
    // 注意！！！如果发现状态没有按预知的方向变化的话，就考虑用 xxxRef来替代。。。
    // const prevSelectedValueRef = useRef<string>(defaultValue || "");
    const searchValueRef = useRef<string>(defaultValue || "");
    const [tempOptions, setTempOptions] = useState<any>(options || []);
    const [showOptions, setShowOptions] = useState(false);
    const [optionList, setOptionList] = useState(options); // 多选主要是靠这个来展示哪个选项被打钩
    // 是否展示选中的选项
    const [selectedOptions, setSelectedOptions] = useState<any[]>([]); // 选中的选项展示在 框中
    const [showSelectedOptions, setShowSelectedOptions] = useState(false);


    let selectedOptionRefs: any = []
    let optionItemRefs: any = []

    // 框高亮
    const [isHighlighted, setIsHighlighted] = useState(false);


    const filterdOption = (option: any) => {
        optionList.forEach(item => {
            if (item.value === option.value) {
                item.selected = false;
            }
        })
        setOptionList(optionList); // 这句竟然加和不加都可以。。。
    }

    const handleSelect = (option: any) => {
        const currentSelectList = optionList.filter((item: any) => item.value != option.value).filter((i: any) => i.selected);
        
        // 如果是点击已经选择的项
        if (option.selected) {
            option.selected = false;
            if (currentSelectList.length) {
                setError(false);
            } else {
                setError(true);
            }
        } else { // 点击未选择的项
            setError(false);
            if (single) { // 如果是单选
                setOptionList((preArr: any) => {
                    return preArr.map((item: any) => {
                        if (item.value === option.value) {
                            item.selected = true;
                        } else {
                            item.selected = false;
                        }
                        return item;
                    })
                })
            } else { // 多选
                setOptionList((preArr: any) => {
                    return preArr.map((item: any) => {
                        if (!item.selected) { // 如果是未选择，这时候再去做判断即可
                            if (item.value === option.value) {
                                item.selected = true;
                            }
                        }
                        return item;
                    })
                })
            }
        }
        let hasSelected = selectedOptions.some(item => item.label === option.label);
        if (single) {
            setSelectedOptions(hasSelected ? [] : [option]);
            onRetrieveSelectChange && onRetrieveSelectChange(option);
        } else {
            const currentSelectedOptions = [...selectedOptions, option];
            setSelectedOptions(hasSelected ? selectedOptions.filter((item: any) => item.value !== option.value) : currentSelectedOptions);
            onRetrieveSelectChange && onRetrieveSelectChange(option);
        }
        setShowSelectedOptions(true);
        setShowOptions(false);
    }

    const handleInputClick = (e: any) => {
        setIsHighlighted(true);
        // 这个时候也要重新过滤数据
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value;
        searchValueRef.current = value;
        onChangeOK && onChangeOK(e.target.value);
        // 输入改变的时候重新过滤
    }

    // 选项的ref数组--巧妙


    const handleDeleteItem = (item: any) => {
        const selectedList = selectedOptions.filter(option => option !== item);
        setSelectedOptions(selectedList);
        setOptionList(optionList.map((v: any) => {
            if (v.label === item.label) {
                v.selected = false;
            }
            return v;
        }))
        validate();
    }

    const handleBlur = () => {
    }


    // 一些用来判断选项是否展示的的Ref
    const retrieveInputRef = useRef<any>();
    const selectListRef = useRef<any>();
    // 巧妙

    const retrieveSelectWrapperFormControlRef = useRef<any>();

    // 点击外边wrapper，展示选项
    const handleWrapperClick = (e: any) => {
        if (readOnly) return;
        retrieveInputRef.current && retrieveInputRef.current.focus();
        setIsHighlighted(true); // 重新让框高亮
        // 新增使用createPortal来定位下拉框
        const position = getAbsolutePosition(retrieveSelectWrapperFormControlRef.current, 0, 0);
        setCustomSelectContentPosition(position);
        e.stopPropagation(); // 阻止事件冒泡
        setShowOptions(true);
    }



    // select类型的收集做特殊处理
    const getValue = () => {
        return selectedOptions;
    }

    // 校验方法
    const [error, setError] = useState<boolean>(false);
    const validate = () => {
        if (!required) return true;
        if (selectedOptions.length) {
            setError(false);
            return true;
        } else {
            setError(true);
            return false;
        }
    };
    // 清除内容方法
    const clear = () => {
        setSelectedOptions([]);
        setOptionList(optionList.map((option: any) => {
            option.selected = false;
            return option;
        }))
    }
    const handleClickCommonSuffixIcon = () => {
        clear();
        setError(true);
    }
    // Expose validateInput method via ref
    useImperativeHandle(ref, () => ({
        getValue,
        validate,
        clear
    }));


    useEffect(() => {
        window.addEventListener("click", (e: any) => {
            // 用类名方便
            let classNames = ["retrieve-input", "option-icon", "option-item retrieve-select-active", "select-list", "selected-option", "retrieve-select-wrapper form-control ", "retrieve-select-wrapper form-control focus"];

            if (!classNames.includes(e.target.className)) {
                setIsHighlighted(false);
                setShowOptions(false);
            }

            else {

            }
        })
    }, [])

    const judgeOptionsByAttribute = (arr: any, item: any) => {
        arr.forEach((i: any) => {
            if (i[attribute] === item[attribute]) {
                i.selected = true;
            }
        })
        setOptionList(arr);
    }

    const retrieveSelectClasses = classNames({
        "mb-3": error,
        "retrieve-select-warpper": true,
        [externalClassName as string]: externalClassName,
    });


    // 定位
    // 测试getAbsolutePosition
    const customretrieveSelectRef = useRef<any>();
    const contentRef = useRef<any>();
    const [customSelectContentPosition, setCustomSelectContentPosition] = useState<any>({});


    // 让多选框默认展示父组件传递过来的值
    useEffect(() => {
        console.log("defaul", defaultValue);
        
        let arr: any[] = [];
        let tempFilterdOptions: any[] = [] // 这个好像可有可无啦

        // 如果有默认值
        if (defaultValue?.length) {
            // setFormItemValue && setFormItemValue(defaultValue);
            defaultValue?.map((item: any) => {


                // 使用默认值去查找option中匹配到的值
                tempOptions.some((option: any) => {
                    // 讲匹配到的值添加到arr(下边的selectedOptions)中
                    option.value === item.value && arr.push(option)
                    return false;
                });
                return false;
            })

            if (arr?.length) {
                setSelectedOptions(arr);
                setShowSelectedOptions(true);
                setTimeout(() => {
                    setOptionList(preArr => {
                        preArr?.forEach(item => {
                            tempFilterdOptions.push({ ...item, selected: arr.some(i => i.value === item.value) })
                        })
                        return tempFilterdOptions;
                    })
                }, 0);
            }
        } else {
            // setSelectedOptions([]); // 把这里注释了
            setOptionList(options?.map(item => {
                item.selected = false;
                return item;
            }))
        }
    }, [defaultValue])

    useEffect(() => {
        console.log("optio", options);

        if (selectedOptions.length) {

            selectedOptions.forEach((item: any) => {
                judgeOptionsByAttribute(options, item);
            })
        } else {
            // setTempOptions(options);
            setOptionList(options);
        }
        setTempOptions(options); // 这个临时变量一定要赋值，不然 selectedOptions会出现问题

    }, [options])

    return <div className={retrieveSelectClasses} style={{ width }} onBlur={validate}>
        <div className={`content-box ${inputGroup ? "inputGroup" : `label-in-${labelPosition}`}`}>
            <span className={`label-box ${inputGroup ? "input-group-text" : ""}`} style={{ color: labelColor, width: labelWidth }}>{label}</span>
            <div style={{display: "flex", flexWrap: "wrap"}} ref={retrieveSelectWrapperFormControlRef} tabIndex={0} onBlur={handleBlur} onClick={handleWrapperClick} className={`select-list-box form-control ${isHighlighted ? "focus" : ""}`}>
                <select style={{ display: "none" }} name={name}>
                    {showSelected && showSelectedOptions && selectedOptions?.map((option, index) => {
                        return <option key={index} value={option.value}></option>
                    })}
                </select>
                <div ref={selectListRef} className="select-list">
                    {showSelected && showSelectedOptions && selectedOptions?.map((option, index) => {
                        return <div ref={selectedOptionRefs[index]} className="selected-option" key={option.value} style={{
                        }}>
                            {option.label}
                            <span onClick={() => handleDeleteItem(option)} className="option-icon">x</span>
                        </div>
                    })}
                </div>
                <div className="input-control">
                    <input ref={retrieveInputRef} placeholder="输入关键词" onChange={(e) => handleInputChange(e)} onClick={handleInputClick} readOnly={readOnly} type="text" className="retrieve-input" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
            </div>
            {commonSuffixIcon && <i onClick={handleClickCommonSuffixIcon} className={`${commonSuffixIcon} common-suffix-icon ms-2`}></i>}
        </div>
        {
            ReactDOM.createPortal(!readOnly && showOptions &&
                <div style={{ position: "absolute", top: (customSelectContentPosition.y + customSelectContentPosition.height) + "px", left: customSelectContentPosition.x + "px" }} className={` custom-select-content ${showOptions ? "custom-select-content-open" : ""}`}>
                    {optionList?.map((option: any, index: number) => {
                        // --巧妙
                        return <div ref={optionItemRefs[index]} key={index} onClick={() => handleSelect(option)} className={`option-item ${option.selected && "retrieve-select-active"}`}>
                            {option.label}
                        </div>
                    })}
                </div>, document.body)
        }
            {error && required && <div className="animate__animated animate__fadeIn mb-1" style={{ color: "#DC3545", fontSize: "14px", paddingLeft: parseInt(labelWidth) > 120 ? "120px" : labelWidth}}>{`${errMsg || `${name}不能为空`}`}</div>}
    </div>

})

export default (RetrievrSelect);