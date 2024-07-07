import classNames from "classnames";
import React, { useEffect, useImperativeHandle, useState } from "react";
import "./index.scss";

interface RadioProps {
    name?: string;
    commonSuffixIcon?: string;
    readOnly?: boolean;
    defaultValue?: any;
    checked?: boolean;
    label?: string;
    inputGroup?: boolean;
    labelPosition?: "left-top" | "center" | "top" | "input-group";
    labelColor?: string;
    required?: boolean;
    id?: string;
    value?: string;
    externalClassName?: string;
    options?: any[];
    inline?: boolean;
    onChangeOK?: (item: any) => void;
    setFormItemValue?: (value: any) => void;
}

const Radio: React.ForwardRefRenderFunction<any, RadioProps> = (props, ref) => {
    const { commonSuffixIcon, readOnly, inputGroup = false, labelPosition = "center", labelColor, label, name, externalClassName, inline = true, options, defaultValue, onChangeOK, setFormItemValue } = props;

    const [optionsList, setOptionsList] = useState(options || []);

    useEffect(() => {
        if (options) {
            // Initialize optionsList with checked property
            setOptionsList(options.map(option => ({
                ...option,
                checked: defaultValue && option.value === defaultValue
            })));
        }
    }, [defaultValue, options]);

    const cls = classNames({
        "form-check-input": true,
        [externalClassName as string]: externalClassName
    });

    const handleChange = (item: any) => {
        setOptionsList(prevOptions => prevOptions.map(option => ({
            ...option,
            checked: option.value === item.value
        })));
        setFormItemValue && setFormItemValue(item);
        onChangeOK && onChangeOK(item);
    };

    const getValue = () => {
        return optionsList.filter((option: any) => option.checked)?.[0]?.value || "";
    };

    // 校验方法
    const validateInput = () => {
        // Example validation logic, replace with your actual validation needs
        console.log("Validating input...");
    };

    // 清除内容方法
    const clear = () => {
        setOptionsList(prevOptions => prevOptions.map(option => ({
            ...option,
            checked: false
        })));
    };
    const handleClickCommonSuffixIcon = () => {
        clear();
    }
    // Expose validateInput method via ref
    useImperativeHandle(ref, () => ({
        getValue,
        validateInput,
        clear
    }));

    const radioClasses = classNames({
        "radio-warpper": true,
        [externalClassName as string]: externalClassName,
    });

    return (
        <div className={radioClasses}>
            <div className={`content-box ${inputGroup ? "inputGroup" : `label-in-${labelPosition}`}`}>
                {label && <span className={`${inputGroup ? "input-group-text" : ""} label-box`}>{label}</span>}
                <div className="option-box" style={{ display: inline ? "flex" : "" }}>
                    {optionsList?.map(item => (
                        <div key={item.value} className="form-check" style={{ marginRight: "20px" }}>
                            <input
                                disabled={item.disabled}
                                className={cls}
                                type="radio"
                                name={name}
                                id={item.id}
                                checked={item.checked || false} // Ensure checked is boolean
                                onChange={() => handleChange(item)}
                                value={item.value}
                                readOnly={readOnly}
                            />
                            <label className="form-check-label" htmlFor={item.id}>
                                {item.label || "Default Radio"}
                            </label>
                        </div>
                    ))}
                </div>
                {commonSuffixIcon && <i onClick={handleClickCommonSuffixIcon} className={`${commonSuffixIcon} common-suffix-icon ms-2`}></i>}
            </div>

        </div>
    );
};

export default React.forwardRef(Radio);
