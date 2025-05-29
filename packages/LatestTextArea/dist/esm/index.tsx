import { useEffect, useImperativeHandle, useState } from "react";
import React from "react";
import "./index.scss";

interface TextreaProps {
  wrapperStyle?: React.CSSProperties;
  wrapperWidth?: any;
  commonSuffixContent?: string;
  clearable?: boolean;
  formStyle?: React.CSSProperties;
  rows?: number;
  suffixContentType?: string;
  suffixContent?: any;
  name?: string;
  inline?: boolean;
  isFormItem?: boolean;
  errMsg?: string;
  labelWidth?: any;
  commonSuffixIcon?: string;
  readOnly?: boolean;
  externalClassName?: string;
  width?: any;
  inputGroup?: boolean;
  labelPosition?: "left-top" | "center" | "top" | "input-group";
  labelColor?: string;
  required?: boolean;
  ref?: any;
  defaultValue?: string;
  label?: any;
  placeholder?: string;
  disabled?: boolean;
  onChangeOK?: (value: any, ...args: any) => void;
  onFormDataChange?: (key: string, value: any) => void;
  onFieldChange?: (name: string, value: any) => void;
  onValidateField?: (name: string, value: any) => void;
}

const Textarea: React.FC<TextreaProps> = React.forwardRef(
  (props: TextreaProps, ref) => {
    const {
      wrapperWidth,
      wrapperStyle,
      clearable = false,
      commonSuffixContent,
      formStyle,
      rows = 1,
      suffixContentType = "button",
      suffixContent,
      errMsg,
      inline,
      isFormItem,
      labelWidth,
      labelColor,
      commonSuffixIcon,
      readOnly,
      externalClassName,
      width,
      inputGroup = false,
      labelPosition = "center",
      required = false,
      name,
      label,
      placeholder,
      disabled,
      defaultValue,
      onChangeOK,
      onFormDataChange,
      onFieldChange,
      onValidateField,
    } = props;

    // 获取 `FormContext.Provider` 提供提供的 `value` 值

    const [value, setValue] = useState(defaultValue ?? "");
    const [isEnter, setIsEnter] = useState<boolean>(false);

    const handleFieldChange = (value: any) => {
      onFieldChange && onFieldChange(name!, value);
    };

    const handleValidate = (value?: string) => {
      onValidateField && onValidateField(name!, value);
    };

    const handleMouseEnter = () => {
      setIsEnter(true);
    };

    const handleMouseLeave = () => {
      setIsEnter(false);
    };

    const handleChange = (
      e: React.ChangeEvent<HTMLTextAreaElement>,
      ...args: any
    ) => {
      const value = e.target.value;
      setValue(value); // 手动将表单的value值赋值
      // context.handleChange(context.name, value) // 这边不能直接用 handleChange来赋值，会出现赋值错误的情况
      onChangeOK && onChangeOK(value, ...args);
      onFormDataChange && onFormDataChange(name!, value);
      handleFieldChange && handleFieldChange(value);
      handleValidate(value);
    };

    const handleBlur = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      handleValidate(value);
    };

    const handleClickCommonSuffixIcon = () => {};

    const handleClearIconClick = () => {
      setValue("");
      setError(true);
      handleFieldChange && handleFieldChange("");
      handleValidate("");
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
      setValue("");
    };
    // Expose validateInput method via ref
    useImperativeHandle(ref, () => ({
      validate,
      clear,
    }));

    useEffect(() => {
      if (defaultValue) {
        setValue(defaultValue);
      } else {
        setValue("");
      }
    }, [defaultValue]);

    return (
      <div
        className={`adou-textarea-warpper ${externalClassName} ${
          !error && isFormItem && "mb-3"
        }`}
        style={{
          ...wrapperStyle,
          ...(wrapperWidth ? { width: wrapperWidth } : { flex: 1 }),
        }}
      >
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`adou-textarea-form-content ${
            labelPosition === "top" && inline ? "me-2" : ""
          }`}
        >
          <textarea
            className="adou-textarea form-control pe-3"
            style={{
              ...(inline && !width ? { flex: 1, marginRight: "15px" } : {}),
              ...(suffixContent && suffixContentType === "button"
                ? {
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                    // borderRight: "none",
                  }
                : {}),
              border: "0px",
              ...formStyle,
            }}
            rows={rows}
            readOnly={readOnly}
            required={required}
            name={name}
            value={value}
            disabled={disabled}
            onBlur={(e) => handleBlur(e)}
            onChange={(e) => handleChange(e)}
            placeholder={placeholder}
            aria-label="With textarea"
          ></textarea>

          {clearable && isEnter && value && (
            <div className="adou-textarea-clear-icon-box d-flex fade-enter">
              <i
                onClick={handleClearIconClick}
                className="adou-textarea-clear-icon fa-regular fa-circle-xmark text-secondary"
                style={{ fontSize: "12px", cursor: "pointer" }}
              ></i>
            </div>
          )}

          <div className="adou-textarea-common-sufiix-content text-secondary">
            {commonSuffixContent}
          </div>
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
        {/* {error && required && (
          <div
            className="animate__animated animate__fadeIn"
            style={{
              color: "#DC3545",
              paddingLeft:
                parseInt(labelWidth) > 120
                  ? "120px"
                  : parseFloat(labelWidth) + 20 + "px",
            }}
          >{`${errMsg || `${label || name}不能为空`}`}</div>
        )} */}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export default Textarea;
