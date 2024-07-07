import React, { forwardRef, useEffect, useRef, useState, useImperativeHandle } from "react";
import classNames from "classnames";
import "./index.scss";

export interface InputProps {
    name?: string;
    commonSuffixIcon?: string;
    width?: any;
    label?: string;
    labelPosition?: "left-top" | "center" | "top";
    inputGroup?: boolean;
    labelColor?: string;
    required?: boolean;
    type?: "text" | "datetime-local" | "date" | "time";
    defaultValue?: any;
    size?: "large" | "middle" | "small" | undefined;
    externalClassName?: string;
    prefixContent?: any;
    suffixContent?: any;
    placeholder?: string;
    style?: React.CSSProperties;
    readOnly?: boolean;
    transparent?: boolean;
    children?: any;
    setFormItemValue?: (value: any) => void;
    onClick?: (e: React.MouseEvent<HTMLInputElement, MouseEvent>, ...args: any) => void;
    onFocus?: (e: React.FocusEvent<HTMLInputElement, Element>, ...args: any) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement, Element>, ...args: any) => void;
    onChange?: (value: any, ...args: any) => void;
    onIconClick?: (value: string) => void;
}

export interface InputRef {
    validateInput: () => void;
}

const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = (
    {
        name,
        commonSuffixIcon,
        inputGroup = false,
        width,
        label,
        labelPosition = "center",
        labelColor,
        required = false,
        type = "text",
        defaultValue,
        size,
        externalClassName,
        prefixContent,
        suffixContent,
        placeholder,
        style,
        readOnly,
        transparent,
        children,
        setFormItemValue,
        onClick,
        onFocus,
        onBlur,
        onChange,
        onIconClick,
    },
    ref
) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [value, setValue] = useState(defaultValue ?? '');

    const cls = classNames({
        "input-group": suffixContent || prefixContent,
        [`input-group-${size}`]: size,
        [externalClassName as string]: externalClassName,
    });

    const handleClick = (e: React.MouseEvent<HTMLInputElement, MouseEvent>, ...args: any) => {
        onClick && onClick(e, ...args);
    };

    const handleFocus = (e: React.FocusEvent<HTMLInputElement, Element>, ...args: any) => {
        onFocus && onFocus(e, ...args);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement, Element>, ...args: any) => {
        setFormItemValue && setFormItemValue(e.target.value);
        onBlur && onBlur(e, ...args);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, ...args: any) => {
        setValue(e.target.value);
        setFormItemValue && setFormItemValue(e.target.value);
        onChange && onChange(e.target.value, ...args);
    };

    const handleIconClick = () => {
        onIconClick && onIconClick(value);
    };

    const [error, setError] = useState<boolean>(false);
    const validateInput = () => {
        // Example validation logic, replace with your actual validation needs
        setError(true);
    };
    const clear = () => {
        setValue("");
    };

    const handleClickCommonSuffixIcon = () => {
        clear();
    }

    // Expose validateInput method via ref
    useImperativeHandle(ref, () => ({
        validateInput: validateInput,
        clear,
    }));

    useEffect(() => {
        if (defaultValue || defaultValue === 0) {
            setValue(defaultValue);
            setFormItemValue && setFormItemValue(defaultValue);
        } else {
            setValue("");
        }
    }, [defaultValue]);

    return (
        <div className={`${cls} input-wrapper ${inputGroup ? "" : "lable-in-control"}`} style={{ flex: 1, width }}>
            <div className={`content-box icon-input ${inputGroup ? "input-group" : ""} label-in-${labelPosition}`}>
                {prefixContent && <span className="input-group-text" id="basic-addon1">{prefixContent}</span>}
                {label && <span className="label-box" style={{color: labelColor}}>{label}</span>}
                <input
                    ref={inputRef}
                    required={required}
                    style={{
                        borderRadius: "6px",
                        borderTopLeftRadius: prefixContent ? 0 : '6px',
                        borderBottomLeftRadius: prefixContent ? 0 : '6px',
                        background: transparent ? "transparent" : "#fff",
                    }}
                    step={1}
                    name={name}
                    value={value}
                    readOnly={readOnly}
                    placeholder={placeholder}
                    onChange={handleChange}
                    onBlur={(e) => handleBlur(e, "hello1", 5561)}
                    onFocus={(e) => handleFocus(e, "hello1", 5561)}
                    onClick={(e) => handleClick(e, "hello", 556)}
                    type={type}
                    className="form-control input"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                />
                {commonSuffixIcon && <i onClick={handleClickCommonSuffixIcon} className={`${commonSuffixIcon} common-suffix-icon ms-2`}></i>}
                <div onClick={handleIconClick} className="suffix-icon" style={{right: commonSuffixIcon && "32px"}}>
                    {children}
                </div>
            </div>
            {suffixContent && <span className="input-group-text" id="basic-addon2">{suffixContent}</span>}
            {error && <div className="animate__animated animate__fadeIn" style={{color: "red"}}>{"错误**************"}</div>}
        </div>
    );
};

Input.displayName = "Input";

export default forwardRef(Input);
