import { withTranslation } from "react-i18next";
import classNames from "classnames";
import React, { useContext } from "react";
import "./index.scss";
import { FormContext, FormContextProps } from "../../../adou-form";

import { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import getAbsolutePosition from "../../../../utils/getAbsolutePosition";

export interface SelectProps {
    defaultValue?: any;
    options: any[];
    placeholder?: string;
    size?: "sm" | "lg";
    className?: string;
    disabled?: any;
    showSelected?: boolean;
    onChangeOK?: (e?: any, ...args: any) => void
}

interface MultipleSelectProps extends SelectProps {
    onMultipleSelectChangeOK?: (selectedOptions: any[]) => void;
    setFormItemValue?: (value: any) => void;
}

const MultipleSelect: React.FC<MultipleSelectProps> = (props: MultipleSelectProps) => {



    const { defaultValue, showSelected = true, options, size, className, disabled = false, setFormItemValue, onChangeOK, onMultipleSelectChangeOK } = props;

    // 获取 `FormContext.Provider` 提供提供的 `value` 值
    const context: FormContextProps = useContext(FormContext);

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

    // 输入框的值
    const [inputValue, setInputValue] = useState<string>("");


    let selectedOptionRefs: any = []
    let optionItemRefs: any = []

    // 框高亮
    const [isHighlighted, setIsHighlighted] = useState(false);


    const cls = classNames({
        [`form-select form-select-${size} mb-3`]: true,
        [className as string]: className
    })

    const filterdOption = (option: any) => {
        optionList.forEach(item => {
            if (item.value === option.value) {
                item.selected = false;
            }
        })
        setOptionList(optionList); // 这句竟然加和不加都可以。。。
    }

    const handleSelect = (option: any) => {
        setInputValue("");
        if (option.selected) {
            option.selected = false;
        } else {
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
        }

        // option.selected = true;
        let hasSelected = selectedOptions.some(item => item.label === option.label);
        const nowSelectedList = selectedOptions.filter(item => item.label !== option.label);
        // 这句话写不写都可以，因为在下面的 useEffect中也为该变量赋值了
        setSelectedOptions(hasSelected ? [] : [option]); // 这句写上会闪烁。。
        // hasSelected && filterdOption(option); // 这句不能加
        setShowSelectedOptions(true);
        // 这里不能直接用 selectedOptions这个状态，会有延迟
        // 要用原来所有的状态，去过滤掉没选上的，再传递给父组件

        // 这句话写不写都可以，因为在下面的 useEffect中也为该变量赋值了
        // hasSelected && filterdOption(option);
        setShowSelectedOptions(true);
        // 这里不能直接用 selectedOptions这个状态，会有延迟
        // 要用原来所有的状态，去过滤掉没选上的，再传递给父组件
        const selectedList = (hasSelected ? [] : [option])
        onMultipleSelectChangeOK && onMultipleSelectChangeOK(option);
        context.handleChange && context.handleChange(context.name, selectedList)
        setFormItemValue && setFormItemValue(selectedList)
        const length = hasSelected ? nowSelectedList.length : 1;

        setTimeout(() => {
            context.checkValidate && context.checkValidate(length);
        }, 100); // 选择或者取消选择的时候也要进行校验

        // retrieve选择框中选择一次就把选项隐藏
        setShowOptions(false);
    }

    const handleInputClick = (e: any) => {
        setIsHighlighted(true);
        // 这个时候也要重新过滤数据
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value;
        setInputValue(value);
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
        // onChangeOK && onChangeOK(selectedList);
        context.checkValidate && context.checkValidate(selectedList.length);
        context.handleChange && context.handleChange(context.name, selectedList);
    }

    const handleBlur = () => {
        context.checkValidate && context.checkValidate(selectedOptions.length);
    }


    // 一些用来判断选项是否展示的的Ref
    const multipleInputRef = useRef<any>();
    const selectListRef = useRef<any>();
    // 巧妙

    const multipleSelectWrapperFormControlRef = useRef<any>();

    // 点击外边wrapper，展示选项
    const handleWrapperClick = (e: any) => {
        if (disabled) return;
        // 新增使用createPortal来定位下拉框
        const position = getAbsolutePosition(multipleSelectWrapperFormControlRef.current, 0, 0);
        setCustomSelectContentPosition(position);
        e.stopPropagation(); // 阻止事件冒泡
        setShowOptions(true);
    }

    const windowClick = (e: any) => {
        // 用类名方便
        let classNames = ["multiple-input", "option-icon", "option-item multiple-select-active", "select-list", "selected-option", "multiple-select-wrapper form-control ", "multiple-select-wrapper form-control focus"];
        if (!classNames.includes(e.target.className)) {
            // 进入if，代表着肯定要关闭选项
            setIsHighlighted(false);
            setShowOptions(false);
            // 使用点击的元素的类名 去判断是否includes 选项的类名
            /*  if (e.target.className.includes("option-item")) {
                 
             } else if (inputValue) {
                 setSelectedOptions([{value: inputValue, label: inputValue}]);
                 setInputValue("");
             } */
        }
    }

    useEffect(() => {
        window.addEventListener("click", windowClick)
    }, [])

    useEffect(() => {
        if (inputValue) {
            setShowSelectedOptions(true);
            let selectedOption = [{ value: inputValue, label: inputValue }]
            setSelectedOptions(selectedOption);

            // 如果输入的值跟选项有对应的，也要高亮显示
            setOptionList((preArr: any) => {
                return preArr.map((item: any) => {
                    if (item.label === inputValue) {
                        item.selected = true;
                    } else {
                        item.selected = false;
                    }
                    return item;
                })
            })
            if (context.formData) {
                // 将默认值赋值给Form -- 单个的话直接用下
                context.formData[context.name as string] = selectedOption;
            }
        }
    }, [inputValue])

    const newFilterOptions = (arr: any, item: any) => {
        arr.forEach((i: any) => {
            if (i.background_id === item.background_id) {
                i.selected = true;
            }
        })
        setOptionList(arr);
    }


    // 定位
    // 测试getAbsolutePosition
    const customMultipleSelectRef = useRef<any>();
    const contentRef = useRef<any>();
    const [customSelectContentPosition, setCustomSelectContentPosition] = useState<any>({});


    // 让多选框默认展示父组件传递过来的值
    useEffect(() => {
        let arr: any[] = [];
        let tempFilterdOptions: any[] = [] // 这个好像可有可无啦

        // 如果有默认值
        if (defaultValue?.length) {
            setFormItemValue && setFormItemValue(defaultValue);
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
                if (context.formData) {
                    // 将默认值赋值给Form -- 单个的话直接用下
                    context.formData[context.name as string] = arr;
                }

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
        // 把option后面打钩的选项置空（option后面都不打钩，即 selected置为false）
        if (!context?.formData?.[context?.name as string]) {
            setOptionList(preArr => {
                return preArr?.map(item => {
                    item.selected = false;
                    return item;
                })
            })
        }
        // 把展示在input的选项置空，即没有选中的选项，要判断下是否在 Form下
        if (context.formData) {
            setSelectedOptions(context?.formData?.[context?.name as string] || []);
        }
    }, [context?.formData?.[context?.name as string]])

    useEffect(() => {
        if (selectedOptions.length) {

            selectedOptions.forEach((item: any) => {
                newFilterOptions(options, item);
            })
        } else {
            // setTempOptions(options);
            setOptionList(options);
        }
        setTempOptions(options); // 这个临时变量一定要赋值，不然 selectedOptions会出现问题
    }, [options])

    return <>
        <div ref={multipleSelectWrapperFormControlRef} tabIndex={0} onBlur={handleBlur} onClick={handleWrapperClick} className={`multiple-select-wrapper form-control ${isHighlighted ? "focus" : ""}`}>
            <div ref={selectListRef} className="select-list">
                {showSelected && showSelectedOptions && selectedOptions?.map((option, index) => {
                    return <div ref={selectedOptionRefs[index]} className="selected-option" key={option.value} style={{
                        paddingRight: "13px"
                    }}>
                        {option.label}
                        {/* 打× */}
                        {/* <span onClick={() => handleDeleteItem(option)} className="option-icon">x</span> */}
                    </div>
                })}
            </div>
            <div className="input-control">
                <input value={inputValue} ref={multipleInputRef} onChange={(e) => handleInputChange(e)} onClick={handleInputClick} disabled={disabled} type="text" className="multiple-input" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
        </div>
        {
            ReactDOM.createPortal(!disabled && showOptions &&
                <div style={{ position: "absolute", top: (customSelectContentPosition.y + customSelectContentPosition.height) + "px", left: customSelectContentPosition.x + "px" }} className={` custom-select-content ${showOptions ? "custom-select-content-open" : ""}`}>
                    {optionList?.length > 0 ? optionList?.map((option: any, index: number) => {
                        // --巧妙
                        return <div ref={optionItemRefs[index]} key={index} onClick={() => handleSelect(option)} className={`option-item ${option.selected && "multiple-select-active"}`}>
                            {option.label}
                        </div>
                    }) : <div className="p-2 none-wrapper">暂无数据</div>}
                </div>, document.body)
        }
    </>

}

export default withTranslation()(MultipleSelect);