import React, {
  forwardRef,
  useEffect,
  useRef,
  useState,
  useImperativeHandle,
  ReactNode,
  Fragment,
} from "react";
import "./index.scss";
import { withTranslation } from "react-i18next";

export interface InputProps {
  autoFocus?: boolean;
  actRef?: any;
  addonAfterStyle?: React.CSSProperties;
  title?: string;
  wrap?: boolean;
  wrapperClassName?: string;
  backgroundColor?: string;
  inputStyle?: React.CSSProperties;
  prefix?: any; // 前缀
  suffix?: any; // 后缀
  addonBefore?: ReactNode | string | number;
  addonAfter?: ReactNode | string | number;
  varient?: "outlined" | "filled" | "borderless";
  valueKey?: string;
  labelKey?: string;
  wrapperWidth?: any;
  wrapperStyle?: React.CSSProperties;
  commonSuffixContent?: string;
  clearable?: boolean;
  formStyle?: React.CSSProperties;
  suffixContentExternalClassName?: string;
  inputExternalClassName?: string;
  textEnd?: boolean;
  name?: string;
  inline?: boolean;
  isFormItem?: boolean;
  errMsg?: string;
  labelWidth?: any;
  commonSuffixIcon?: string;
  width?: any;
  label?: string;
  layout?: "horizontal" | "horizontal-top" | "vertical" | "inline";
  inputGroup?: boolean;
  labelColor?: string;
  required?: boolean;
  // 新增 'tag' 类型
  type?: "text" | "datetime-local" | "date" | "time" | "number" | "tag";
  defaultValue?: any;
  size?: "lg" | "default" | "sm";
  externalClassName?: string;
  prefixContent?: any;
  suffixContent?: any;
  suffixContentType?: string;
  placeholder?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
  transparent?: boolean;
  children?: any;
  onClick?: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement, Element>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement, Element>) => void;
  onChange?: (value: any) => void;
  onIconClick?: (value: string) => void;
  onFormDataChange?: (key: string, value: any) => void;
  onFieldChange?: (name: string, value: any) => void;
  onValidateField?: (name: string, value?: any) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export interface InputRef {
  validate: () => void;
  clear: () => void;
}

const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = (
  {
    autoFocus,
    actRef,
    isFormItem,
    addonAfterStyle,
    title,
    wrap,
    wrapperClassName,
    backgroundColor,
    inputStyle,
    prefix,
    suffix,
    addonBefore,
    addonAfter,
    varient = "outlined",
    valueKey,
    labelKey,
    wrapperWidth,
    wrapperStyle,
    clearable = false,
    commonSuffixContent,
    formStyle,
    suffixContentExternalClassName,
    inputExternalClassName,
    textEnd,
    name,
    errMsg,
    labelWidth,
    commonSuffixIcon,
    width = "100%",
    label,
    layout = "horizontal",
    labelColor,
    required = false,
    type = "text",
    defaultValue,
    size,
    externalClassName,
    prefixContent,
    suffixContent,
    suffixContentType = "button",
    placeholder = type === "tag" ? "空格或回车分割" : "",
    style,
    disabled,
    transparent,
    children,
    onClick,
    onFocus,
    onBlur,
    onChange,
    onIconClick,
    onFormDataChange,
    onFieldChange,
    onValidateField,
    onKeyDown,
  },
  ref
) => {
  // 统一状态管理（标签类型用数组，其他用原始值）
  const [value, setValue] = useState<any>(
    type === "tag"
      ? Array.isArray(defaultValue)
        ? defaultValue
        : []
      : defaultValue ?? ""
  );
  const [isEnter, setIsEnter] = useState<boolean>(false);
  const [isFocus, setIsFocus] = useState<boolean>(false);

  // 标签输入框特有状态
  const [inputValue, setInputValue] = useState(""); // 标签输入框的临时输入值
  const [isHighlighted, setIsHighlighted] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const inputFormContentRef = useRef<any>(null);

  // 初始化标签数据（仅处理tag类型）
  useEffect(() => {
    if (type === "tag") {
      // 确保标签初始值是数组
      const initialValue = Array.isArray(defaultValue) ? defaultValue : [];
      setValue(initialValue);
    } else {
      // 其他类型沿用原逻辑
      if (defaultValue || defaultValue === 0 || defaultValue === false) {
        setValue(defaultValue);
        handleValidate(defaultValue);
      } else {
        setValue("");
      }
    }
  }, [defaultValue, type]);

  // 处理普通输入框点击
  const handleClick = (
    e: React.MouseEvent<HTMLInputElement, MouseEvent>,
    ...args: any
  ) => {
    e.stopPropagation();
    onClick && onClick(e);
  };

  // 处理聚焦
  const handleFocus = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    e.stopPropagation();
    if (varient === "filled" && inputFormContentRef.current && !disabled) {
      inputFormContentRef.current.style.backgroundColor = "";
      setIsFocus(true);
    }
    // 标签类型的聚焦高亮
    if (type === "tag") {
      setIsHighlighted(true);
    }
    onFocus && onFocus(e);
  };

  // 处理失焦
  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement, Element>,
    ...args: any
  ) => {
    onBlur && onBlur(e);
    handleValidate(value); // 统一用value做校验
    if (varient === "filled" && inputFormContentRef.current) {
      inputFormContentRef.current.style.backgroundColor = "#f0f0f0";
    }
    setIsFocus(false);

    // 标签类型失焦时同步值
    if (type === "tag") {
      setIsHighlighted(false);
    }
  };

  // 处理普通输入框变化
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    ...args: any
  ) => {
    const inputValue = e.target.value;
    const returnValue = type === "number" ? Number(inputValue) : inputValue;
    setValue(inputValue);
    // 触发所有回调（沿用原Input逻辑）
    onChange && onChange(returnValue);
    onFormDataChange && onFormDataChange(name!, returnValue);
    onFieldChange && onFieldChange(name!, returnValue);
    handleValidate(inputValue);
  };

  // 标签输入框特有方法 - 添加标签
  const addInput = () => {
    if (!inputValue.trim() || disabled) return;

    // 检查重复标签
    const isDuplicate = value.some((item: any) => item === inputValue.trim());
    if (!isDuplicate) {
      const newList = [...value, inputValue.trim()];
      setValue(newList);
      // 同步到父组件（完全参照原Input的回调逻辑）
      onChange && onChange(newList);
      onFormDataChange && onFormDataChange(name!, newList);
      onFieldChange && onFieldChange(name!, newList);
      handleValidate(newList);
    }
    setInputValue("");
  };

  // 标签输入框 - 输入变化
  const handleTagInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // 标签输入框 - 按键处理
  const handleTagKeyDown = (event: any) => {
    const val = event.target.value.trim();
    if (!val) return;

    // 空格或回车添加标签（阻止默认行为避免表单提交）
    if ((event.keyCode === 32 || event.keyCode === 13) && !disabled) {
      event.preventDefault();
      addInput();
    }
  };

  // 标签输入框 - 删除标签
  const handleDeleteItem = (item: any) => {
    if (disabled) return;

    const newList = value.filter((value: any) => value !== item);
    setValue(newList);
    // 同步到父组件（参照原Input回调）
    onChange && onChange(newList);
    onFormDataChange && onFormDataChange(name!, newList);
    onFieldChange && onFieldChange(name!, newList);
    handleValidate(newList);
  };

  const handleIconClick = () => {
    onIconClick && onIconClick(value as string);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    onKeyDown && onKeyDown(e);
  };

  const handleValidate = (data: any) => {
    onValidateField && onValidateField(name!, data);
  };

  // 暴露的验证方法
  const validate = () => {
    // 可根据需要实现验证逻辑
  };

  // 清除输入值（统一方法，适配所有类型）
  const clear = () => {
    if (type === "tag") {
      const emptyList: any[] = [];
      setValue(emptyList);
      setInputValue("");
      onChange && onChange(emptyList);
      onFormDataChange && onFormDataChange(name!, emptyList);
      onFieldChange && onFieldChange(name!, emptyList);
      handleValidate(emptyList);
    } else {
      setValue("");
      onChange && onChange("");
      onFormDataChange && onFormDataChange(name!, "");
      onFieldChange && onFieldChange(name!, "");
      handleValidate("");
    }
  };

  const handleMouseEnter = () => {
    setIsEnter(true);
  };

  const handleMouseLeave = () => {
    setIsEnter(false);
  };

  const handleClearIconClick = () => {
    clear();
  };

  const generateClsWhenHasLabel = () => {
    switch (layout) {
      case "horizontal":
        return "adou-input-label-horizontal";
      case "horizontal-top":
        return "adou-input-label-horizontal-top";
      case "vertical":
        return "adou-input-label-vertical";
      default:
        return "";
    }
  };

  const judgeBgColor = () => {
    if (disabled) {
      return "#eee";
    } else if (varient === "filled") {
      return "#f0f0f0";
    } else if (backgroundColor) {
      return backgroundColor;
    } else {
      return "transparent";
    }
  };

  const judgeBorder = () => {
    if (varient === "borderless") {
      return "border-0";
    } else if (varient === "filled" && !addonAfter && !addonBefore) {
      return "border-0";
    } else {
      return "";
    }
  };

  // 渲染普通输入框内容
  const renderCommonInput = () => (
    <Fragment>
      <input
        autoFocus={autoFocus}
        onKeyDown={handleKeyDown}
        className={`input border-0 flex-fill form-control ${
          textEnd || type === "number" ? "text-end" : ""
        } ${
          suffixContent && suffixContentType === "button"
            ? "suffix-content-btn"
            : ""
        } ${inputExternalClassName || ""} `}
        ref={inputRef}
        required={required}
        style={{
          flex: 1,
          width,
          outline: "none",
          ...(varient === "filled" && { backgroundColor: "transparent" }),
          ...(addonBefore && {
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
          }),
          ...(addonAfter && {
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
          }),
          height: size === "lg" ? "48px" : size === "sm" ? "33.6px" : "38px",
          backgroundColor: judgeBgColor(),
          cursor: disabled ? "not-allowed" : "auto",
          borderRadius: "0.375rem",
          ...inputStyle,
        }}
        step={1}
        name={name}
        value={value}
        readOnly={disabled}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onClick={handleClick}
        type={type}
        disabled={disabled}
      />
      {suffix && <div className="suffix-box">{suffix}</div>}

      {clearable && !disabled && value ? (
        <span
          className="adou-input-clear-icon-box fade-enter me-1"
          style={{
            top: size === "sm" ? "2px" : size === "lg" ? " 10px" : "6px",
          }}
        >
          <i
            className="adou-input-clear-icon fa-regular fa-circle-xmark text-secondary flex-fill"
            style={{ fontSize: "12px", cursor: "pointer" }}
            onClick={handleClearIconClick}
          ></i>
        </span>
      ) : (
        <div
          className="adou-input-common-sufiix-content position-absolute text-secondary"
          style={{
            right: "14px",
            top: size === "sm" ? "14%" : size === "lg" ? " 26%" : "18%",
          }}
        >
          {commonSuffixContent}
        </div>
      )}
    </Fragment>
  );

  // 渲染标签输入框内容
  const renderTagInput = () => (
    <div
      className={`tag-input-wrapper form-control ${
        isHighlighted ? "focus" : ""
      }`}
      style={{
        minHeight: size === "lg" ? "48px" : size === "sm" ? "33.6px" : "38px",
        padding: "4px 8px",
        width: "100%",
        backgroundColor: judgeBgColor(),
        ...inputStyle,
      }}
    >
      <div className="tag-input-content">
        <ul className="tag-input-list">
          {value.map((item: any) => (
            <li className="list-item" key={item}>
              {item}
              <span
                onClick={() => handleDeleteItem(item)}
                className="item-icon"
                style={{ cursor: disabled ? "not-allowed" : "pointer" }}
              >
                x
              </span>
            </li>
          ))}
        </ul>
        {!disabled && (
          <div className="tag-input-control">
            <input
              value={inputValue}
              autoComplete="off"
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={handleTagInputChange}
              onKeyDown={handleTagKeyDown}
              placeholder={placeholder}
              type="text"
              className="input"
              style={{
                border: "none",
                outline: "none",
                flex: 1,
                minWidth: "60px",
                padding: "2px 0",
              }}
            />
          </div>
        )}
      </div>
    </div>
  );

  // 根据类型渲染不同的输入内容
  const renderInputContent = () => {
    return type === "tag" ? renderTagInput() : renderCommonInput();
  };

  // 暴露方法给ref
  useImperativeHandle(actRef, () => ({
    validate,
    clear,
    onFocus: () => {
      inputRef.current?.focus();
    },
  }));

  return (
    <div
      title={title || label}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`adou-input-wrapper position-relative ${
        wrapperClassName ? wrapperClassName : ""
      } ${disabled ? "disabled" : ""}`}
      style={{
        ...wrapperStyle,
        ...(wrapperWidth ? { width: wrapperWidth } : { flex: 1 }),
        cursor: disabled ? "not-allowed" : "auto",
      }}
    >
      {!label && (addonAfter || addonBefore) ? (
        <div className={`adou-input`}>
          <div
            className="input-group"
            style={{
              flexWrap: wrap ? "wrap" : "nowrap",
            }}
          >
            {addonBefore && (
              <span
                className="input-group-text py-0"
                style={{ fontSize: "14px", ...addonAfterStyle }}
              >
                {addonBefore}
              </span>
            )}
            <div
              style={{
                ...(varient === "filled" && {
                  border: addonBefore || addonAfter ? "" : "none",
                }),
                ...formStyle,
                border: varient === "outlined" ? "1px solid #ced4da" : "",
                backgroundColor: judgeBgColor(),
              }}
              ref={inputFormContentRef}
              tabIndex={1}
              className={`adou-input-form-content d-flex flex-fill align-items-center ${
                isFocus ? "adou-form-control-focus" : ""
              }`}
            >
              {prefix && <div className="prefix-box">{prefix}</div>}
              <div className={`input-box flex-fill d-flex  align-items-center`}>
                {renderInputContent()}
              </div>
            </div>
            {addonAfter && (
              <span
                className="input-group-text py-0"
                style={{ fontSize: "14px", ...addonAfterStyle }}
              >
                {addonAfter}
              </span>
            )}
          </div>
        </div>
      ) : (
        <div
          className={`adou-input flex-fill ${generateClsWhenHasLabel()}`}
          style={{ height: "100%" }}
        >
          {label && (
            <span
              className={`pe-3 ${layout === "vertical" ? "pb-1" : ""}`}
              style={{ width: labelWidth }}
            >
              {label}
            </span>
          )}
          <div
            tabIndex={1}
            style={{
              width: "100%",
              ...(varient === "filled" && {
                backgroundColor: "#f0f0f0",
              }),
              // 如果不是 FormItem 下的，并且没有 addonBefore 和 addonAfter，则需要手动给个边框
              border: !isFormItem ? "1px solid #ced4da" : "",
              backgroundColor: judgeBgColor(),
              ...formStyle,
            }}
            ref={inputFormContentRef}
            className={`adou-input-form-content flex-fill d-flex align-items-center ${
              isFocus ? "adou-form-control-focus" : ""
            } ${judgeBorder()}`}
          >
            {prefix && <div className="prefix-box">{prefix}</div>}
            <div className={`input-box flex-fill d-flex align-items-center`}>
              {renderInputContent()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// 对于使用 forwardRef 包装的组件，displayName 需要在 forwardRef 调用之后设置
// 上述代码中，Input 组件是通过 forwardRef 包装的，因此需要在 forwardRef 调用之后设置 displayName

const ForwardedInput = forwardRef(Input);
ForwardedInput.displayName = "Input";

export default withTranslation()(ForwardedInput);
