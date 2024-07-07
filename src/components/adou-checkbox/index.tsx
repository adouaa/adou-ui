import classNames from "classnames";
import React, { useEffect, useState, forwardRef, ForwardRefRenderFunction, useImperativeHandle } from "react";
import "./index.scss";

interface CheckboxProps {
    name?: string;
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
    onChangeOK?: (item: { label: string; value: string }[]) => void;
    setFormItemValue?: (value: { label: string; value: string }[]) => void;
}

const Checkbox: ForwardRefRenderFunction<any, CheckboxProps> = ({
    name,
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
    onChangeOK,
    setFormItemValue,
}, ref) => {

    // Function to check if an option should be checked
    const isChecked = (value: string, defaultValue: string | string[] | { label: string; value: string }[] | any) => {
        if (typeof defaultValue === 'string') {
            return value === defaultValue;
        } else if (Array.isArray(defaultValue)) {
            if (Array.isArray(defaultValue) && typeof defaultValue[0] !== 'string') {
                return defaultValue!.some(item => item.value === value);
            } else {
                return defaultValue.includes(value as any);
            }
        }
        return false;
    };

    // Initialize optionsList based on defaultValue
    const initialOptions = options.map(option => ({
        ...option,
        checked: isChecked(option.value, defaultValue)
    }));

    const [optionsList, setOptionsList] = useState(initialOptions);

    const cls = classNames({
        "form-check-input": true,
    });

    const handleChange = (item: { label: string; value: string }) => {
        const updatedOptions = optionsList.map((option) =>
            option.value === item.value ? { ...option, checked: !option.checked } : option
        );
        setOptionsList(updatedOptions);
        onChangeOK && onChangeOK(updatedOptions.filter((opt) => opt.checked));
        setFormItemValue && setFormItemValue(updatedOptions.filter((opt) => opt.checked));
    };

    const handleBlur = () => {
        const checkedList = optionsList.filter((item) => item.checked);
        // Optionally handle blur event
    };

    const [error, setError] = useState<boolean>(true);
    const validateCheckbox = () => {
        // Example validation logic, replace with your actual validation needs
        setError(true);
    };
    const clear = () => {
        setOptionsList(optionsList.map((item: any) => {
            item.checked = false;
            return item;
        }))
    };
    const handleClickCommonSuffixIcon = () => {
        clear();
    }
    // Expose validateInput method via ref
    useImperativeHandle(ref, () => ({
        validateCheckbox,
        clear
    }));

    useEffect(() => {
        // Update optionsList when defaultValue changes
        const updatedOptions = options.map(option => ({
            ...option,
            checked: isChecked(option.value, defaultValue)
        }));
        setOptionsList(updatedOptions);
        setFormItemValue && setFormItemValue(updatedOptions.filter((opt) => opt.checked));
    }, [defaultValue, options]);

    const checkboxClasses = classNames({
        "checkbox-wrapper": true,
        [externalClassName as string]: externalClassName,
    });

    return (
        <div className={checkboxClasses}>
            <div className={`content-box ${inputGroup ? "inputGroup" : `label-in-${labelPosition}`}`}>
                {label && <span className={`${inputGroup ? "input-group-text" : ""} label-box`}>{label}</span>}
                <div className="option-box" style={{ display: inline ? "flex" : "" }}>
                    {optionsList.map((item) => (
                        <div key={item.value} className="form-check" style={{ textAlign: "left", marginRight: "20px", marginBottom: 0}}>
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
                {commonSuffixIcon && <i onClick={handleClickCommonSuffixIcon} className={`${commonSuffixIcon} common-suffix-icon ms-2`}></i>}
            </div>
            {error && "错误----------checkbox"}
        </div>
    );
};

export default (forwardRef(Checkbox));
