import classNames from "classnames";
import React, { useImperativeHandle } from "react";
import "./index.scss";
import { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { getAbsolutePosition } from "adou-ui/Utils/index";
import { useClickOutside } from "adou-ui/Utils";

export interface SelectProps {
  type?: "text" | "number";
  maxHeight?: string;
  activeColor?: { font: string; bgc: string };
  returnType?: "str" | "obj";
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
  onInputChange?: (e?: any, ...args: any) => void;
  onFormDataChange?: (key: string, value: any) => void;
}

interface LiveSearchProps extends SelectProps {
  onLiveSearchChange?: (selectedOptions: any[]) => void;
  onDelete?: () => void;
}

const LiveSearch: React.FC<LiveSearchProps> = React.forwardRef(
  (props: LiveSearchProps, ref) => {
    const {
      type,
      maxHeight = "300px",
      activeColor = { font: "#fff", bgc: "#2783d8" },
      returnType = "str",
      showDefaultValue = true,
      placeholder = "请输入",
      isFormItem = true,
      labelKey = "label",
      valueKey = "value",
      inline,
      suffixContent,
      suffixContentType = "button",
      contentWidth,
      attribute = "value",
      required,
      errMsg,
      labelWidth,
      commonSuffixIcon,
      width,
      label,
      labelColor,
      labelPosition = "center",
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
    } = props;

    const [isOpen, setisOpen] = useState<boolean>(false);
    const [showOptions, setShowOptions] = useState(false);
    const [optionList, setOptionList] = useState(options);
    const [selectedOptions, setSelectedOptions] = useState<any[]>([]);
    const [isHighlighted, setIsHighlighted] = useState(false);
    const [focusedIndex, setFocusedIndex] = useState<number>(-1); // 新增状态，用于跟踪当前聚焦的选项
    const [inputValue, setInputValue] = useState<any>(""); // 用来存储输入框的值

    const retrieveInputRef = useRef<any>();
    const retrieveSelectWrapperFormControlRef = useRef<any>();
    const contentRef = useRef<any>();
    const [customSelectContentPosition, setCustomSelectContentPosition] =
      useState<any>({});
    const [originlOptions, setOriginOptions] = useState<any[]>([]); // 存放最初的值， 用来做过滤

    const liveSearchSelectRef = useRef<any>(null);

    // 由于第一次选择之后有几率出现 error 闪烁的情况，所以需要设置一个判断
    // 判断：如果是第一次选择，则不通过 validate进行校验，而是在 选择的逻辑那边直接进行校验
    const handleClose = (isSelect?: boolean) => {
      setisOpen(false);
      setShowOptions(false);
      setFocusedIndex(-1);
      if (isOpen && !isSelect) {
        validate();
      }
    };

    useClickOutside(
      [liveSearchSelectRef, contentRef],
      handleClose,
      isOpen && contentRef.current
    );
    // currentSelectList 这玩意很有问题？
    const handleSelect = (option: any) => {
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
        setInputValue("");
      } else {
        setError(false);
        if (single) {
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
      let hasSelected = selectedOptions?.some(
        (item) => item[labelKey] === option[labelKey]
      );
      if (single) {
        const data = hasSelected ? [] : [option];
        const returnData = returnType === "str" ? data[0]?.[valueKey] : data[0];
        setSelectedOptions(data);
        // 这边在 返回数据的时候，根据 returnType 返回不同的数据类型
        onLiveSearchChange && onLiveSearchChange(hasSelected ? {} : returnData);
        // 这边在 改变表单数据的时候，直接赋值给表单 valueKey的值，而不是一个 对象
        onFormDataChange && onFormDataChange(name!, data[0]?.[valueKey]);
        setInputValue(data[0]?.[valueKey] || ""); // 记住 这边要给个 "" 兜底，不然会无法取消选择
      } else {
        const currentSelectedOptions = [...selectedOptions, option];
        const data = hasSelected
          ? selectedOptions.filter(
              (item: any) => item[valueKey] !== option[valueKey]
            )
          : currentSelectedOptions;
        setSelectedOptions(data);
        onLiveSearchChange && onLiveSearchChange(data);
        onFormDataChange && onFormDataChange(name!, data);
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
      // 输入词修改时也需要展示选项
      // 【注意：关键是把最开始的列表值存到一个state中，然后再用这个state去过滤，然后再赋值给要展示的列表】
      const filterdOptions = originlOptions?.filter(
        (item: any) => String(item[labelKey]).includes(value) // 刚好如果输入是空的，就会展示所有的
      );
      setOptionList(filterdOptions);
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
      const position = getAbsolutePosition(
        retrieveSelectWrapperFormControlRef.current,
        0,
        0
      );
      setCustomSelectContentPosition(position);
      if (!isOpen) {
        setisOpen(true);
      }
      // 为了适配通过tab键来定位聚焦，把这些点击的逻辑去掉
      /* if (!isOpen) {
        handleClose();

        // e.stopPropagation(); 这里不能加，否则会导致Select展开的时候点击LiveSearch无法关闭Select的选项
        setTimeout(() => {
          setShowOptions(true);
        }, 10);
      } else {
        setShowOptions(false);
        handleClose();
      } */
    };

    const getValue = () => {
      return selectedOptions;
    };

    const [error, setError] = useState<boolean>(false);
    const validate = () => {
      console.log("6: ", 6);
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
      setOptionList(
        optionList.map((option: any) => {
          option.selected = false;
          return option;
        })
      );
    };

    const handleClickCommonSuffixIcon = () => {
      clear();
      if (required) setError(true);
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

    const liveSearchSelectClasses = classNames({
      "mb-3": !error && isFormItem,
      "live-search-select-wrapper": true,
      [externalClassName as string]: externalClassName,
    });

    const handleFocus = (event: any) => {
      setIsHighlighted(true);
      handleClose();
      const position = getAbsolutePosition(
        retrieveSelectWrapperFormControlRef.current,
        0,
        0
      );
      setCustomSelectContentPosition(position);
      setTimeout(() => {
        setShowOptions(true);
      }, 10);
    };

    // 全部都 通过 KeyDown来关闭下拉列表项
    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "Tab") {
        // 当下拉项展开的时候进入这个回调，来关闭下拉项
        if (isOpen) {
          handleClose();
        }
        return; // 让焦点移动到下一个表单元素
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        setFocusedIndex((prevIndex) =>
          prevIndex <= 0 ? optionList.length - 1 : prevIndex - 1
        );
      } else if (event.key === "ArrowDown") {
        event.preventDefault();
        setFocusedIndex((prevIndex) =>
          prevIndex >= optionList.length - 1 ? 0 : prevIndex + 1
        );
      } else if (event.key === "Enter") {
        handleClose();
        event.preventDefault();
        handleSelect(optionList?.[focusedIndex]);
      } else if (event.key === "Escape") {
        setShowOptions(false);
      }
    };

    useEffect(() => {
      if (defaultValue) {
        const convertedValue =
          typeof defaultValue === "object"
            ? defaultValue?.[valueKey]
            : defaultValue;
        let arr: any[] = [];
        // 这边不能省略，不然会造成 选择已经被选中的数据的时候无法正确清除掉
        originlOptions?.some((option: any) => {
          option[labelKey] === defaultValue && arr.push(option);
          return false;
        });
        setSelectedOptions(arr);
        setOptionList((preArr) => {
          return preArr?.map((item) => ({
            ...item,
            selected: convertedValue === item[valueKey],
          }));
        });
        setInputValue(convertedValue);
      } else {
        setSelectedOptions([]);
        if (!defaultValue) {
          setInputValue("");
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
        className={liveSearchSelectClasses}
        style={{
          width,
          ...(inline && !width ? { flex: 1, marginRight: "15px" } : {}),
        }}
      >
        <div
          className={`content-box ${
            inputGroup ? "inputGroup" : `label-in-${labelPosition}`
          } ${labelPosition === "top" && inline ? "me-2" : ""}`}
        >
          <span
            className={`label-box ${inputGroup ? "input-group-text" : ""}`}
            style={{ color: labelColor, width: labelWidth }}
          >
            {label}
          </span>
          <div className="live-search-form-content f-1">
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                ...(suffixContent && suffixContentType === "button"
                  ? {
                      borderTopRightRadius: 0,
                      borderBottomRightRadius: 0,
                      // borderRight: "none",
                    }
                  : {}),
              }}
              ref={retrieveSelectWrapperFormControlRef}
              tabIndex={0}
              onBlur={handleBlur}
              onClick={handleWrapperClick}
              className={`select-list-box form-control ${
                isHighlighted ? "focus" : ""
              }`}
            >
              <div className="input-control">
                <input
                  value={inputValue}
                  ref={retrieveInputRef}
                  placeholder={placeholder}
                  onChange={(e) => handleInputChange(e)}
                  onClick={handleInputClick}
                  readOnly={readOnly}
                  type="text"
                  className={`live-search-input ${
                    type === "number" ? "text-end" : ""
                  }`}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="icon-box">
                <i className="icon small text-secondary fa-solid fa-magnifying-glass"></i>
              </div>
            </div>
            {suffixContent && (
              <div
                className={`${
                  suffixContentType === "button"
                    ? "suffix-content-btn-wrapper"
                    : "ms-1"
                }`}
              >
                {suffixContent}
              </div>
            )}
          </div>
          {commonSuffixIcon && (
            <i
              onClick={handleClickCommonSuffixIcon}
              className={`${commonSuffixIcon} common-suffix-icon ms-2`}
            ></i>
          )}
        </div>
        {ReactDOM.createPortal(
          <div
            ref={contentRef}
            style={{
              width: contentWidth,
              position: "absolute",
              top:
                customSelectContentPosition.y +
                customSelectContentPosition.height +
                "px",
              left: customSelectContentPosition.x + "px",
              maxHeight,
            }}
            className={`live-search-select-content ${
              showOptions ? "live-search-select-content-open" : ""
            }`}
          >
            {!readOnly &&
              isOpen &&
              (optionList?.length > 0 ? (
                optionList?.map((option: any, index: number) => {
                  return (
                    <div
                      key={index}
                      style={{
                        color: option.selected ? activeColor.font : "#000",
                        backgroundColor: option.selected ? activeColor.bgc : "",
                      }}
                      onClick={() => handleSelect(option)}
                      className={`live-search-select-option ${
                        option.selected && "live-search-select-option-active"
                      } ${
                        focusedIndex === index &&
                        "live-search-select-option-focused"
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
        {error && required && (
          <div
            className="animate__animated animate__fadeIn mb-1"
            style={{
              color: "#DC3545",
              fontSize: "14px",
              paddingLeft:
                parseInt(labelWidth) > 120
                  ? "120px"
                  : parseFloat(labelWidth) + 20 + "px",
            }}
          >{`${errMsg || `${label}不能为空`}`}</div>
        )}
      </div>
    );
  }
);

export default LiveSearch;
