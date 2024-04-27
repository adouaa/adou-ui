import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { withTranslation } from "react-i18next"

interface CheckboxProps {
    defaultValue?: any;
    className?: string,
    options?: any[],
    onChangeOK?: (item: any) => void,
}

const Checkbox: React.FC<CheckboxProps> = (props: CheckboxProps) => {

    const { className, options, defaultValue, onChangeOK } = props;

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
        setOptionsList(updatedChheckboxData!);
        onChangeOK && onChangeOK(updatedChheckboxData?.filter(v => v.checked));
    }


    useEffect(() => {
        if (defaultValue.length) {
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

    return <>
        {optionsList?.map(item => {
            return <div key={item.value} className="form-check" style={{ textAlign: "left" }}>
                <input className={cls} type="checkbox" name={item.name} id={item.id} checked={item.checked} onChange={() => handleChange(item)} value={item.value} />
                <label className="form-check-label" htmlFor={item.id}>
                    {item.label || "Default Checkbox"}
                </label></div>
        })}
    </>
}

export default withTranslation()(Checkbox);