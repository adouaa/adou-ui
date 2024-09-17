import classNames from "classnames";
import React, { useImperativeHandle } from "react";
import "./index.scss";
import { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { getAbsolutePosition } from "adou-ui/Utils/index";
import useClickOutside from "./utils/useClickOutside";

export interface SelectProps {
  name?: string;
  labelKey?: string;
  valueKey?: string;
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
}

interface RetrieveSelectProps extends SelectProps {
  onRetrieveSelectChange?: (selectedOptions: any[]) => void;
  onDelete?: () => void;
}

const RetrievrSelect: React.FC<RetrieveSelectProps> = React.forwardRef(
  (props: RetrieveSelectProps, ref) => {
    const {
      isFormItem,
      labelKey = "label",
      valueKey = "value",
      inline,
      suffixContent,
      suffixContentType,
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
      onRetrieveSelectChange,
      onDelete,
    } = props;

    const searchValueRef = useRef<string>(defaultValue || "");
    const [tempOptions, setTempOptions] = useState<any>(options || []);
    const [showOptions, setShowOptions] = useState(false);
    const [optionList, setOptionList] = useState(options);
    const [selectedOptions, setSelectedOptions] = useState<any[]>([]);
    const [showSelectedOptions, setShowSelectedOptions] = useState(false);
    const [isHighlighted, setIsHighlighted] = useState(false);

    const retrieveInputRef = useRef<any>();
    const selectListRef = useRef<any>();
    const retrieveSelectWrapperFormControlRef = useRef<any>();
    const customretrieveSelectRef = useRef<any>();
    const contentRef = useRef<any>();
    const [customSelectContentPosition, setCustomSelectContentPosition] =
      useState<any>({});

    const { isOpen, dropdownRef, toggleDropdown } = useClickOutside(() =>
      setShowOptions(false)
    );

    const handleSelect = (option: any) => {
      const currentSelectList = optionList
        .filter((item: any) => item[valueKey] != option[valueKey])
        .filter((i: any) => i.selected);

      if (option.selected) {
        option.selected = false;
        if (currentSelectList.length) {
          setError(false);
        } else {
          if (!required) {
            setError(false);
          } else {
            setError(true);
          }
        }
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
      let hasSelected = selectedOptions.some(
        (item) => item[labelKey] === option[labelKey]
      );
      if (single) {
        setSelectedOptions(hasSelected ? [] : [option]);
        onRetrieveSelectChange && onRetrieveSelectChange(option);
      } else {
        const currentSelectedOptions = [...selectedOptions, option];
        setSelectedOptions(
          hasSelected
            ? selectedOptions.filter(
                (item: any) => item[valueKey] !== option[valueKey]
              )
            : currentSelectedOptions
        );
        onRetrieveSelectChange && onRetrieveSelectChange(option);
      }
      setShowSelectedOptions(true);

      setTimeout(() => {
        toggleDropdown();
      }, 10);
    };

    const handleInputClick = (e: any) => {
      setIsHighlighted(true);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      let value = e.target.value;
      searchValueRef.current = value;
      onInputChange && onInputChange(e.target.value);
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
      retrieveInputRef.current && retrieveInputRef.current.focus();
      setIsHighlighted(true);
      const position = getAbsolutePosition(
        retrieveSelectWrapperFormControlRef.current,
        0,
        0
      );
      setCustomSelectContentPosition(position);
      if (!isOpen) {
        toggleDropdown();

        // e.stopPropagation(); 这里不能加，否则会导致Select展开的时候点击RetrieveSelect无法关闭Select的选项
        setTimeout(() => {
          setShowOptions(true);
        }, 10);
      } else {
        setShowOptions(false);
        toggleDropdown();
      }
    };

    const getValue = () => {
      return selectedOptions;
    };

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
      arr.forEach((i: any) => {
        if (i[attribute] === item[attribute]) {
          i.selected = true;
        }
      });
      setOptionList(arr);
    };

    const retrieveSelectClasses = classNames({
      "mb-3": !error && isFormItem,
      "retrieve-select-wrapper": true,
      [externalClassName as string]: externalClassName,
    });

    useEffect(() => {
      let arr: any[] = [];
      let tempFilterdOptions: any[] = [];

      if (single) {
        if (defaultValue) {
          tempOptions.some((option: any) => {
            option[valueKey] === defaultValue && arr.push(option);
            return false;
          });
          if (arr?.length) {
            setSelectedOptions(arr);
            setShowSelectedOptions(true);
            setTimeout(() => {
              setOptionList((preArr) => {
                preArr?.forEach((item) => {
                  tempFilterdOptions.push({
                    ...item,
                    selected: arr.some((i) => i[valueKey] === item[valueKey]),
                  });
                });
                return tempFilterdOptions;
              });
            }, 0);
          } else {
            setSelectedOptions([]);
          }
        } else {
          setOptionList(
            options?.map((item) => {
              item.selected = false;
              return item;
            })
          );
          setSelectedOptions([]);
        }
      } else {
        if (defaultValue?.length) {
          defaultValue?.map((item: any) => {
            tempOptions.some((option: any) => {
              option[valueKey] === item[valueKey] && arr.push(option);
              return false;
            });
            return false;
          });

          if (arr?.length) {
            setSelectedOptions(arr);
            setShowSelectedOptions(true);
            setTimeout(() => {
              setOptionList((preArr) => {
                preArr?.forEach((item) => {
                  tempFilterdOptions.push({
                    ...item,
                    selected: arr.some((i) => i[valueKey] === item[valueKey]),
                  });
                });
                return tempFilterdOptions;
              });
            }, 0);
          }
        } else {
          setOptionList(
            options?.map((item) => {
              item.selected = false;
              return item;
            })
          );
        }
      }
    }, [defaultValue, tempOptions]);

    useEffect(() => {
      if (selectedOptions.length) {
        selectedOptions.forEach((item: any) => {
          judgeOptionsByAttribute(options, item);
        });
      } else {
        setOptionList(options);
      }
      setTempOptions(options);
    }, [options]);

    return (
      <div
        ref={dropdownRef}
        className={retrieveSelectClasses}
        style={{
          width,
          ...(inline && !width ? { flex: 1, marginRight: "15px" } : {}),
        }}
        onBlur={validate}
      >
        <div
          className={`content-box ${
            inputGroup ? "inputGroup" : `label-in-${labelPosition}`
          }`}
        >
          <span
            className={`label-box ${inputGroup ? "input-group-text" : ""}`}
            style={{ color: labelColor, width: labelWidth }}
          >
            {label}
          </span>
          <div
            style={{ display: "flex", flexWrap: "wrap" }}
            ref={retrieveSelectWrapperFormControlRef}
            tabIndex={0}
            onBlur={handleBlur}
            onClick={handleWrapperClick}
            className={`select-list-box form-control ${
              isHighlighted ? "focus" : ""
            }`}
          >
            <select style={{ display: "none" }} name={name}>
              {showSelected &&
                showSelectedOptions &&
                selectedOptions?.map((option, index) => {
                  return <option key={index} value={option[valueKey]}></option>;
                })}
            </select>
            <div ref={selectListRef} className="select-list">
              {showSelected &&
                showSelectedOptions &&
                selectedOptions?.map((option, index) => {
                  return (
                    <div
                      className="selected-option"
                      key={option[valueKey]}
                      style={{}}
                    >
                      {option[labelKey]}
                      <i
                        onClick={() => handleDeleteItem(option)}
                        className="option-icon fa-regular fa-circle-xmark"
                      ></i>
                    </div>
                  );
                })}
            </div>
            <div className="input-control">
              <input
                ref={retrieveInputRef}
                placeholder="输入关键词"
                onChange={(e) => handleInputChange(e)}
                onClick={handleInputClick}
                readOnly={readOnly}
                type="text"
                className="retrieve-input"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
          {commonSuffixIcon && (
            <i
              onClick={handleClickCommonSuffixIcon}
              className={`${commonSuffixIcon} common-suffix-icon ms-2`}
            ></i>
          )}
          {suffixContent && (
            <div
              className={`${
                suffixContentType === "button"
                  ? "suffix-content-btn-wrapper"
                  : ""
              }`}
            >
              {suffixContent}
            </div>
          )}
        </div>
        {ReactDOM.createPortal(
          !readOnly && isOpen && (
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
              }}
              className={`retrieve-select-content ${
                showOptions ? "retrieve-select-content-open" : ""
              }`}
            >
              {optionList?.length > 0 ? (
                optionList?.map((option: any, index: number) => {
                  return (
                    <div
                      key={index}
                      onClick={() => handleSelect(option)}
                      className={`option-item ${
                        option.selected && "retrieve-select-active"
                      }`}
                    >
                      {option[labelKey]}
                    </div>
                  );
                })
              ) : (
                <div className="none-match ps-2">无匹配记录~</div>
              )}
            </div>
          ),
          document.body
        )}
        {error && required && (
          <div
            className="animate__animated animate__fadeIn mb-1"
            style={{
              color: "#DC3545",
              fontSize: "14px",
              paddingLeft: parseInt(labelWidth) > 120 ? "120px" : labelWidth,
            }}
          >{`${errMsg || `${name}不能为空`}`}</div>
        )}
      </div>
    );
  }
);

export default RetrievrSelect;
