import classNames from "classnames";
import React, { useContext, useEffect, useState } from "react";
import { withTranslation } from "react-i18next"
import { FormContextProps } from "../Input";
import { FormContext } from "../../index";

interface CheckboxProps {
    defaultValue?: any;
    className?: string,
    options?: any[],
    inline?: boolean,
    onChangeOK?: (item: any) => void,
}

const Checkbox: React.FC<CheckboxProps> = (props: CheckboxProps) => {

    // 获取 `FormContext.Provider` 提供提供的 `value` 值
    const context: FormContextProps = useContext(FormContext);

    const { className, inline = true, options, defaultValue, onChangeOK } = props;

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
        context.formData[context.name as string] = updatedChheckboxData.filter(item => item.checked);
        console.log("updatedChheckboxData = ", updatedChheckboxData);
        setOptionsList(updatedChheckboxData!);
        onChangeOK && onChangeOK(updatedChheckboxData?.filter(v => v.checked));
    }

    useEffect(() => {
        if (defaultValue.length) {
            context.formData[context.name as string] = defaultValue;
            setOptionsList(preArr => {
                return preArr.map(option => {
                    if (defaultValue.some((item: any) => item.value === option.value)) {
                        option.checked = true;
                    }
                    return option;
                })
            })
        }
    }, [])

    useEffect(() => {
        if (!context.formData[context.name as string]) {
            setOptionsList(preArr => {
                return preArr.map(option => {
                    option.checked = false;
                    return option;
                })
            })
        }
    }, [context.formData[context.name as string]])


    return <>
        <div className={`checkbox-wrapper ${inline && `d-flex`}`}>
            {optionsList?.map(item => {
                return <div key={item.value} className="form-check" style={{ textAlign: "left", marginRight: "20px" }}>
                    <input className={cls} type="checkbox" name={item.name} id={item.id} checked={item.checked} onChange={() => handleChange(item)} value={item.value} />
                    <label className="form-check-label" htmlFor={item.id}>
                        {item.label || "Default Checkbox"}
                    </label></div>
            })}
        </div>
    </>
}

export default withTranslation()(Checkbox);