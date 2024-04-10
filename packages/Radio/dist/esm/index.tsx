import classNames from "classnames";
import React, { useContext, useEffect, useState } from "react";
import { withTranslation } from "react-i18next"

interface RadioProps {
    defaultValue?: any;
    checked?: boolean,
    label?: string,
    name?: string,
    id?: string,
    value?: string,
    className?: string,
    options?: any[],
    onChangeOK?: (item: any) => void,
}

const Radio: React.FC<RadioProps> = (props: RadioProps) => {

    const { className, options, defaultValue, onChangeOK } = props;
    

     // 确保value不会是undefined，如果defaultValue或formData中相应的值是undefined，则将其设为空字符串


    const [optionsList, setOptionsList] = useState(options || []);

    const cls = classNames({
        "form-check-input": true,
        [className as string]: className
    })

    const handleChange = (item: any) => {
        setOptionsList(preArr => {
            return preArr?.map(option => {
                return {...option, checked: option.value === item.value};
            })
        })
        onChangeOK && onChangeOK(item);
    }

    useEffect(() => {
        if (defaultValue?.value) {
            setOptionsList(preArr => {
                return preArr?.map(option => {
                    if (defaultValue.value === option.value) {
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
                <input disabled={item.disabled} className={cls} type="radio" name={item.name} id={item.id} checked={item.checked} onChange={() => handleChange(item)} value={item.value} />
                <label className="form-check-label" htmlFor={item.id}>
                    {item.label || "Default Radio"}
                </label></div>
        })}
    </>
}

export default withTranslation()(Radio);