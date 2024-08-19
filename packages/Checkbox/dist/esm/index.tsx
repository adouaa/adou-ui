import classNames from "classnames";
import React, {
  useEffect,
  useState,
  forwardRef,
  ForwardRefRenderFunction,
  useImperativeHandle,
} from "react";
import "./index.scss";

interface CheckboxProps {
  name?: string;
  errMsg?: string;
  labelWidth?: any;
  commonSuffixIcon?: string;
  readOnly?: boolean;
  inputGroup?: boolean;
  label?: string;
  labelPosition?: "left-top" | "center" | "top" | "input-group";
  labelColor?: string;
  required?: boolean;
  defaultValue?: string | string[] | { label: string; value: string }[];
  externalClassName?: string;
  options?: { label: string; value: string }[];
  inline?: boolean;
  wrap?: boolean;
  onChange?: (item: { label: string; value: string }[]) => void;
}

const Checkbox: ForwardRefRenderFunction<any, CheckboxProps> = (
  {
    name,
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
    defaultValue = [],
    wrap = true,
    onChange,
  },
  ref
) => {
  // Function to check if an option should be checked
  const isChecked = (
    value: string,
    defaultValue: string | string[] | { label: string; value: string }[] | any
  ) => {
    if (typeof defaultValue === "string") {
      return value === defaultValue;
    } else if (Array.isArray(defaultValue)) {
      if (Array.isArray(defaultValue) && typeof defaultValue[0] !== "string") {
        return defaultValue!.some((item) => item.value === value);
      } else {
        return defaultValue.includes(value as any);
      }
    }
    return false;
  };

  // Initialize optionsList based on defaultValue
  const initialOptions = options.map((option) => ({
    ...option,
    checked: isChecked(option.value, defaultValue),
  }));

  const [optionsList, setOptionsList] = useState(initialOptions);

  const cls = classNames({
    "form-check-input": true,
  });

  const handleChange = (item: { label: string; value: string }) => {
    const updatedOptions = optionsList.map((option) =>
      option.value === item.value
        ? { ...option, checked: !option.checked }
        : option
    );
    setOptionsList(updatedOptions);
    onChange && onChange(updatedOptions.filter((opt) => opt.checked));
    if (updatedOptions.some((option: any) => option.checked)) {
      setError(false);
    } else {
      setError(true);
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

  useEffect(() => {
    // Update optionsList when defaultValue changes
    const updatedOptions = options.map((option) => ({
      ...option,
      checked: isChecked(option.value, defaultValue),
    }));
    setOptionsList(updatedOptions);
  }, [defaultValue, options]);

  const checkboxClasses = classNames({
    "mb-3": error,
    "checkbox-wrapper": true,
    [externalClassName as string]: externalClassName,
  });

  return (
    <div className={checkboxClasses}>
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
        <div className="option-box" style={{ display: inline ? "flex" : "" }}>
          {optionsList.map((item) => (
            <div
              key={item.value}
              className="form-check"
              style={{
                textAlign: "left",
                marginRight: "20px",
                marginBottom: 0,
              }}
            >
              <input
                ref={ref} // 将 ref 绑定到 input 元素
                required={required}
                onBlur={handleBlur}
                className={cls}
                type="checkbox"
                name={name}
                id={item.value}
                checked={item.checked}
                onChange={() => handleChange(item)}
                value={item.value}
                readOnly={readOnly}
              />
              <label className="form-check-label" htmlFor={item.value}>
                {item.label || "Default Checkbox"}
              </label>
            </div>
          ))}
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