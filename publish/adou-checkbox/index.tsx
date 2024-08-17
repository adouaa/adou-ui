import classNames from "classnames";
import React, { useContext, useEffect, useState } from "react";
import { withTranslation } from "react-i18next"

import { FormContext, FormContextProps } from "../adou-form";

interface CheckboxProps {
    defaultValue?: any;
    className?: string,
    options?: any[],
    inline?: boolean,
    wrap?: boolean,
    onChangeOK?: (item: any) => void,
    setFormItemValue?: (value: any) => void;
}

const Checkbox: React.FC<CheckboxProps> = (props: CheckboxProps) => {

    // 获取 `FormContext.Provider` 提供提供的 `value` 值
    const context: FormContextProps = useContext(FormContext) || {};

    const { className, inline = true, options, defaultValue, wrap = true, onChangeOK, setFormItemValue } = props;

    const [optionsList, setOptionsList] = useState(options || []);

    const cls = classNames({
        "form-check-input": true,
        [className as string]: className
    })

    const handleChange = (item: any) => {
        const updatedChheckboxData = optionsList?.map((option) => {
            if (option.value === item.value) {
                return { ...option, checked: !option.checked };
                // 下面这样写也可以
                /* item.checked = !item.checked;
            return item; */
            } else {
                return option;
            }
        });
        if (context.formData) {
            context.formData[context.name as string] = updatedChheckboxData.filter(item => item.checked);
            const checkedList = updatedChheckboxData.filter(item => item.checked);
            context.handleChange && context.handleChange(context.name, checkedList);
            context.checkValidate && context.checkValidate(checkedList.length)
        }

        setOptionsList(updatedChheckboxData!);
        onChangeOK && onChangeOK(updatedChheckboxData?.filter(v => v.checked));
        setFormItemValue && setFormItemValue(updatedChheckboxData?.filter(v => v.checked))
    }

    const handleBlur = () => {
        const checkedList = optionsList.filter(item => item.checked);
        context.handleChange && context.handleChange(context.name, checkedList);
        context.checkValidate && context.checkValidate(checkedList.length)
    }

    useEffect(() => {
        
        if (defaultValue.length) {
            if (context.formData) {
                context.formData[context.name as string] = defaultValue;
            }
            setFormItemValue && setFormItemValue(defaultValue);
            setOptionsList(preArr => {
                return preArr.map(option => {
                    if (defaultValue.some((item: any) => item.value === option.value)) {
                        option.checked = true;
                    }
                    return option;
                })
            })
        } else {
            context.checkValidate && context.checkValidate(0);
        }
    }, [defaultValue])

    useEffect(() => {
        if (!context.formData?.[context.name as string]) {
            setOptionsList(preArr => {
                return preArr.map(option => {
                    option.checked = false;
                    return option;
                })
            })
        }
    }, [context.formData?.[context.name as string]])

    const divClasses = classNames({
        'checkbox-wrapper': true,
        'd-flex': inline,
        "flex-wrap": wrap
    })
    return <>
        <div className={divClasses}>
            {optionsList?.map(item => {
                return <div key={item.value} className="form-check" style={{ textAlign: "left", marginRight: "20px" }}>
                    <input onBlur={handleBlur} className={cls} type="checkbox" name={item.name} id={item.id} checked={item.checked} onChange={() => handleChange(item)} value={item.value} />
                    <label className="form-check-label" htmlFor={item.id}>
                        {item.label || "Default Checkbox"}
                    </label></div>
            })}
        </div>
    </>
}

export default withTranslation()(Checkbox);