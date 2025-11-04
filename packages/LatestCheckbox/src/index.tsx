import classNames from "classnames";
import React, {
  useEffect,
  useState,
  forwardRef,
  ForwardRefRenderFunction,
  useImperativeHandle,
  useId,
} from "react";
import "./index.scss";

interface CheckboxProps {
  contentClassName?: string;
  labelClassName?: string;
  uniqId?: string | number;
  height?: string;
  optionClassName?: string;
  width?: any;
  valueKey?: string;
  labelKey?: string;
  returnType?: "str" | "obj";
  suffixContentType?: string;
  suffixContent?: any;
  name?: string;
  isFormItem?: boolean;
  errMsg?: string;
  labelWidth?: any;
  commonSuffixIcon?: string;
  readOnly?: boolean;
  inputGroup?: boolean;
  label?: string;
  labelPosition?: "left-top" | "center" | "top" | "input-group";
  labelColor?: string;
  required?: boolean;
  defaultValue?: string | string[] | { label: string; value: string }[] | any[];
  externalClassName?: string;
  options?: { label: string; value: string }[] | any[];
  inline?: boolean;
  wrap?: boolean;
  onChange?: (item: { label: string; value: string }[] | any[]) => void;
  onFormDataChange?: (key: string, value: any) => void;
}

const Checkbox: ForwardRefRenderFunction<any, CheckboxProps> = (
  {
    contentClassName = "align-items-start",
    labelClassName,
    uniqId,
    height,
    optionClassName,
    width,
    valueKey = "value",
    labelKey = "label",
    returnType,
    suffixContentType = "button",
    suffixContent,
    name,
    isFormItem,
    errMsg,
    labelWidth,
    commonSuffixIcon,
    readOnly,
    label,
    labelPosition,
    labelColor,
    inputGroup = false,
    required = false,
    externalClassName,
    inline = true,
    options = [],
    // defaultValue = [], defaultValue不能给成数组默认值，不然会无限循环
    defaultValue,
    wrap = true,
    onChange,
    onFormDataChange,
  },
  ref
) => {
  const _uniqueId = useId();

  // Function to check if an option should be checked
  const isChecked = (
    value: string,
    defaultValue: string | string[] | { label: string; value: string }[] | any
  ) => {
    if (typeof defaultValue === "string") {
      return value === defaultValue;
    } else if (Array.isArray(defaultValue)) {
      if (typeof defaultValue[0] !== "string") {
        return defaultValue!.some((item) => item[valueKey] === value);
      } else {
        return defaultValue!.some((item) => item === value);
      }
    } else {
      return (
        defaultValue?.[valueKey] === value || defaultValue?.[labelKey] === value
      );
    }
    return false;
  };

  // Initialize optionsList based on defaultValue
  const initialOptions = options.map((option: any) => ({
    ...option,
    checked: isChecked(option[valueKey], defaultValue),
  }));

  const [optionsList, setOptionsList] = useState(initialOptions);

  const cls = classNames({
    "form-check-input": true,
  });

  const handleChange = (item: any) => {
    const updatedOptions = optionsList.map((option) => {
      if (option[valueKey] === item[valueKey]) {
        option.checked = !option.checked;
      }
      return option;
    });

    setOptionsList(updatedOptions);
    const data = updatedOptions.filter((opt) => opt.checked);
    onChange && onChange(data);
    if (returnType === "obj") {
      onFormDataChange && onFormDataChange(name!, data);
    } else {
      onFormDataChange &&
        onFormDataChange(
          name!,
          data.map((item: any) => item[valueKey || labelKey])
        );
    }
    if (updatedOptions.some((option: any) => option.checked)) {
      setError(false);
    } else {
      if (required) {
        setError(true);
      }
    }
  };

  const handleBlur = () => {
    const checkedList = optionsList.filter((item) => item.checked);
    // Optionally handle blur event
  };

  const [error, setError] = useState<boolean>(false);
  const validate = () => {
    if (!required) return true;
    if (optionsList.some((item: any) => item.checked)) {
      setError(false);
      return true;
    } else {
      setError(true);
      return false;
    }
  };
  const clear = () => {
    setOptionsList(
      optionsList.map((item: any) => {
        item.checked = false;
        return item;
      })
    );
  };
  const handleClickCommonSuffixIcon = () => {
    clear();
    setError(true);
  };
  // Expose validateInput method via ref
  useImperativeHandle(ref, () => ({
    validate,
    clear,
  }));

  const checkboxClasses = classNames({
    "mb-2": !error && isFormItem,
    "checkbox-wrapper": true,
    "d-flex": true,
    [externalClassName as string]: externalClassName,
  });

  useEffect(() => {
    // Update optionsList when defaultValue changes
    const updatedOptions = options.map((option: any) => ({
      ...option,
      checked: isChecked(option[valueKey], defaultValue),
    }));
    setOptionsList(updatedOptions);
  }, [defaultValue, options]);

  return (
    <div className={checkboxClasses} style={{ width, height }}>
      <div
        className={`content-box d-flex ${
          inputGroup ? "inputGroup" : `label-in-${labelPosition}`
        }`}
      >
        {label && (
          <span
            style={{ color: labelColor, width: labelWidth }}
            className={`${inputGroup ? "input-group-text" : ""} label-box`}
          >
            {label}
          </span>
        )}
        <div
          className={`checkbox-form-content option-box ${contentClassName}`}
          style={{ display: inline ? "flex" : "" }}
        >
          {optionsList.map((item: any, index: number) => (
            <div
              key={item[valueKey]}
              className={`form-check ${
                optionClassName ? optionClassName : ""
              } ${index !== optionsList.length - 1 ? "me-2" : ""}`}
              style={{
                textAlign: "left",
                marginBottom: 0,
              }}
            >
              <input
                disabled={item.disabled}
                ref={ref} // 将 ref 绑定到 input 元素
                required={required}
                onBlur={handleBlur}
                className={cls}
                type="checkbox"
                name={name}
                id={item[valueKey] + (uniqId || _uniqueId)}
                checked={item.checked}
                onChange={() => handleChange(item)}
                value={item[valueKey]}
                readOnly={readOnly}
              />
              <label
                className={`${labelClassName} form-check-label`}
                htmlFor={item[valueKey] + (uniqId || _uniqueId)}
              >
                {item[labelKey] || "Default Checkbox"}
              </label>
            </div>
          ))}
          {suffixContent && (
            <div
              className={`${
                suffixContentType === "button"
                  ? "suffix-content-btn-wrapper px-2"
                  : "ms-2"
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
};

export default forwardRef(Checkbox);
