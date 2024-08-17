import { withTranslation } from "react-i18next";
import classNames from "classnames";
import {
  ChangeEvent,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import React from "react";
import "./index.scss";
import ReactDOM from "react-dom";
import { getAbsolutePosition } from "adou-ui/Utils/index";

export interface SelectProps {
  name?: string;
  rounded?: boolean;
  minWidth?: any;
  optionContentMaxHeight?: any;
  isFormItem?: boolean;
  validate?: boolean;
  errMsg?: string;
  labelWidth?: any;
  commonSuffixIcon?: string;
  width?: any;
  label?: string;
  labelPosition?: "left-top" | "center" | "top";
  inputGroup?: boolean;
  labelColor?: string;
  required?: boolean;
  defaultValue?: any;
  options: any[];
  placeholder?: string;
  size?: "sm" | "lg";
  externalClassName?: string;
  readOnly?: boolean;
  transparent?: boolean;
  maxHeight?: string;
  onChange?: (e?: any, ...args: any) => void;
  showEmpty?: boolean;
}

const Select = React.forwardRef((props: SelectProps, ref) => {
  const {
    rounded,
    minWidth = "205px",
    optionContentMaxHeight = "300px",
    commonSuffixIcon,
    isFormItem,
    errMsg,
    labelWidth,
    label,
    labelPosition = "center",
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
    maxHeight,
    onChange,
  } = props;

  const [newOptions, setNewOptions] = useState(options || []);
  const [value, setValue] = useState(defaultValue || {});
  const [showOptions, setShowOptions] = useState<boolean>(false);

  // 测试getAbsolutePosition
  const customSelectRef = useRef<any>();
  const contentRef = useRef<any>();
  const [customSelectContentPosition, setCustomSelectContentPosition] =
    useState<any>({});

  const handleDivClock = (e: any) => {
    // 新增使用createPortal来定位下拉框
    const position = getAbsolutePosition(customSelectRef.current, 0, 0);
    setCustomSelectContentPosition(position);
    e.stopPropagation(); // 阻止事件冒泡
    !readOnly && setShowOptions(!showOptions);
  };

  const handleSelect = (item: any) => {
    setValue(item);
    onChange && onChange(item);
    setShowOptions(false);
    setError(false);
  };

  useEffect(() => {
    if (defaultValue) {
      const selectOption = options.find(
        (option) => option.value === defaultValue
      );
      setValue(selectOption);
    } else {
      setValue(""); // 如果没有默认值，重置为初始状态
    }
  }, [defaultValue, options]);

  useEffect(() => {
    // setValue({}) // 不知道要不要加 -- 不能加，加完之后会出现默认值无法赋值。。。

    if (showEmpty) {
      // 创建一个新数组，将 "空" 选项添加在数组的开头
      const enhancedOptions = [...options];
      setNewOptions(enhancedOptions);
    } else {
      setNewOptions(options);
    }
  }, [options]);

  const handleClick = (e: any) => {
    let classNameList = ["custom-select form-control"];
    let value = e.target;
    if (!classNameList.includes(value.className)) {
      setShowOptions(false);
    }
  };

  const handleSelectChange = (e: any) => {
    setValue(e.target.value);
  };

  const getValue = () => {
    return value?.value || value;
  };
  // 校验方法
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
  // 清除内容方法
  const clear = () => {
    setValue("");
  };

  const handleClickCommonSuffixIcon = () => {
    clear();
    setError(true);
  };
  // Expose validateInput method via ref
  useImperativeHandle(ref, () => ({
    validate,
    clear,
    getValue,
  }));

  const wrapperClassName = `select-wrapper ${!error && isFormItem && "mb-3"} ${
    externalClassName || ""
  }`.trim();

  useEffect(() => {
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  });

  return (
    <div className={wrapperClassName} style={{ width }}>
      <select style={{ display: "none" }} name={name}>
        <option value={value?.value}>{value?.label}</option>
      </select>
      {inputGroup ? (
        <div className="input-group">
          <label className="input-group-text" htmlFor="inputGroupSelect01">
            {label}
          </label>
          <select
            onBlur={validate}
            onChange={handleSelectChange}
            value={value?.value}
            disabled={readOnly}
            className="form-select"
            id="inputGroupSelect01"
          >
            {newOptions?.map((option: any) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {commonSuffixIcon && (
            <i
              onClick={handleClickCommonSuffixIcon}
              className={`${commonSuffixIcon} common-suffix-icon ms-2`}
            ></i>
          )}
        </div>
      ) : (
        <div
          onBlur={validate}
          className={`content-box label-in-${labelPosition}`}
        >
          {isFormItem && (
            <span
              className="label-box"
              style={{
                color: labelColor,
                width: labelWidth,
                flexWrap: "nowrap",
              }}
            >
              {label}
            </span>
          )}
          <div
            ref={customSelectRef}
            onClick={(e: any) => handleDivClock(e)}
            tabIndex={1}
            className={`custom-select form-control`}
            style={{
              textAlign: "left",
              background: transparent ? "transparent" : "#fff",
              minWidth,
              ...(rounded ? { borderRadius: "20px" } : {}),
            }}
          >
            {value?.value ? (
              <span className="select-value">{value.label}</span>
            ) : (
              <span className="select-placeholder">{placeholder}</span>
            )}
            {
              <i
                onClick={(e: any) => handleDivClock(e)}
                className={`icon fa-solid fa-caret-right rotate-up ${
                  showOptions ? "rotate-up" : "rotate-down"
                }`}
              ></i>
            }
          </div>
          {commonSuffixIcon && (
            <i
              onClick={handleClickCommonSuffixIcon}
              className={`${commonSuffixIcon} common-suffix-icon ms-2`}
            ></i>
          )}

          {ReactDOM.createPortal(
            <div
              style={{
                position: "absolute",
                top:
                  customSelectContentPosition.y +
                  customSelectContentPosition.height +
                  "px",
                left: customSelectContentPosition.x + "px",
                ...(showOptions ? { maxHeight: optionContentMaxHeight } : {}),
              }}
              ref={contentRef}
              className={`custom-select-content ${
                showOptions ? "custom-select-content-open" : ""
              }`}
            >
              {showOptions &&
                newOptions.map((item) => (
                  <div
                    onClick={() => handleSelect(item)}
                    className="option"
                    key={item.value}
                  >
                    {item.label}
                  </div>
                ))}
            </div>,
            document.body
          )}
        </div>
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
});

export default withTranslation()(Select);
