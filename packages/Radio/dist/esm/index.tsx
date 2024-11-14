import classNames from "classnames";
import React, { useEffect, useId, useImperativeHandle, useState } from "react";
import "./index.scss";

interface RadioProps {
  valueKey?: string;
  labelKey?: string;
  returnType?: 'str' | 'obj';
  name?: string;
  key?: string;
  width?: any;
  isFormItem?: string;
  errMsg?: string;
  labelWidth?: any;
  commonSuffixIcon?: string;
  readOnly?: boolean;
  defaultValue?: any;
  checked?: boolean;
  label?: string;
  inputGroup?: boolean;
  labelPosition?: 'left-top' | 'center' | 'top' | 'input-group';
  labelColor?: string;
  required?: boolean;
  id?: string;
  value?: string;
  externalClassName?: string;
  options?: any[];
  inline?: boolean;
  onChangeOK?: (item: any) => void;
  onFormDataChange?: (key: string, value: any) => void;
}

const Radio: React.ForwardRefRenderFunction<any, RadioProps> = (props, ref) => {
  const {
      valueKey = 'value',
      labelKey = 'label',
      returnType,
      key,
      required,
      width,
      isFormItem,
      errMsg,
      labelWidth,
      commonSuffixIcon,
      readOnly,
      inputGroup = false,
      labelPosition = 'center',
      labelColor,
      label,
      name,
      externalClassName,
      inline = true,
      options,
      defaultValue,
      onChangeOK,
      onFormDataChange,
  } = props;

  const radioId = useId();

  const [optionsList, setOptionsList] = useState(options || []);

  useEffect(() => {
      if (options) {
          if (defaultValue && typeof defaultValue === 'object') {
              setOptionsList(
                  options.map((option) => ({
                      ...option,
                      checked: defaultValue && (option[valueKey] === defaultValue[valueKey] || option[labelKey] === defaultValue[labelKey]),
                  }))
              );
          } else {
              setOptionsList(
                  options.map((option) => ({
                      ...option,
                      checked: defaultValue && (option[valueKey] === defaultValue || option[labelKey] === defaultValue),
                  }))
              );
          }
      }
  }, [defaultValue, options]);

  const cls = classNames({
      'form-check-input': true,
      [externalClassName as string]: externalClassName,
  });

  const handleChange = (item: any) => {
      const data = optionsList.map((option) => {
          return {
              ...option,
              checked: option[valueKey] === item[valueKey],
          };
      });
      setOptionsList(data);
      onChangeOK && onChangeOK(item);
      if (returnType === 'obj') {
          onFormDataChange && onFormDataChange(name!, item);
      } else {
          onFormDataChange && onFormDataChange(name!, item[valueKey] || item[labelKey]);
      }
      setError(false);
  };

  const getValue = () => {
      const checkedItem = optionsList.filter((option: any) => option.checked);

      return checkedItem?.[0]?.[valueKey] || checkedItem?.[0]?.[labelKey] || '';
  };

  // 清除内容方法
  const clear = () => {
      setOptionsList((prevOptions) =>
          prevOptions.map((option) => ({
              ...option,
              checked: false,
          }))
      );
  };
  const handleClickCommonSuffixIcon = () => {
      clear();
      setError(true);
  };
  const [error, setError] = useState<boolean>(false);
  const validate = () => {
      if (!required) {
          setError(false);
          return true;
      }
      // Example validation logic, replace with your actual validation needs
      if (optionsList.some((item: any) => item.checked)) {
          setError(false);
          return true;
      } else {
          setError(true);
          return false;
      }
  };
  // Expose validateInput method via ref
  useImperativeHandle(ref, () => ({
      getValue,
      validate,
      clear,
  }));

  const radioClasses = classNames({
      'radio-warpper': true,
      'mb-3': !error && isFormItem,
      [externalClassName as string]: externalClassName,
  });

  return (
      <div
          className={radioClasses}
          style={{
              width,
              ...(inline && !width ? { flex: 1, marginRight: '15px' } : {}),
          }}
      >
          <div style={{ alignItems: 'unset' }} className={`content-box ${inputGroup ? 'inputGroup' : `label-in-${labelPosition}`}`}>
              {label && (
                  <span style={{ color: labelColor, width: labelWidth }} className={`${inputGroup ? 'input-group-text' : ''} label-box`}>
                      {label}
                  </span>
              )}
              <div className="option-box" style={{ display: inline ? 'flex' : '' }}>
                  {optionsList?.map((item, index) => (
                      <div key={item[valueKey] + index} className="form-check me-2">
                          <input
                              disabled={readOnly ?? item.disabled}
                              className={cls}
                              type="radio"
                              name={name}
                              id={radioId + index + ''}
                              checked={item.checked || false} // Ensure checked is boolean
                              onChange={() => handleChange(item)}
                              value={item[valueKey]}
                              readOnly={readOnly}
                          />
                          <label className="form-check-label" htmlFor={radioId + index + ''}>
                              {item[labelKey] || 'Default Radio'}
                          </label>
                      </div>
                  ))}
              </div>
              {commonSuffixIcon && <i onClick={handleClickCommonSuffixIcon} className={`${commonSuffixIcon} common-suffix-icon ms-2`}></i>}
          </div>
          {error && required && (
              <div
                  className="animate__animated animate__fadeIn"
                  style={{
                      color: 'red',
                      paddingLeft: parseInt(labelWidth) > 120 ? '120px' : labelWidth,
                  }}
              >{`${errMsg || `${name}不能为空`}`}</div>
          )}
      </div>
  );
};

export default React.forwardRef(Radio);
