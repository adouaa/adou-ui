import classNames from "classnames";
import React, { useContext, useEffect, useState } from "react";
import { withTranslation } from "react-i18next"
import { FormContextProps } from "../../index";
import { FormContext } from "../../index";


interface RadioProps {
    defaultValue?: any;
    checked?: boolean,
    label?: string,
    name?: string,
    id?: string,
    value?: string,
    className?: string,
    options?: any[],
    inline?: boolean,
    onChangeOK?: (item: any) => void,
    setFormItemValue?: (value: any) => void;

}

const Radio: React.FC<RadioProps> = (props: RadioProps) => {

    const { className, inline = true, options, defaultValue, onChangeOK, setFormItemValue } = props;

    // 获取 `FormContext.Provider` 提供提供的 `value` 值
    const context: FormContextProps = useContext(FormContext);

    // 确保value不会是undefined，如果defaultValue或formData中相应的值是undefined，则将其设为空字符串


    const [optionsList, setOptionsList] = useState(options || []);

    const cls = classNames({
        "form-check-input": true,
        [className as string]: className
    })

    const handleChange = (item: any) => {
        context.formData[context.name as string] = item;
        setOptionsList(preArr => {
            return preArr.map(option => {
                return { ...option, checked: option.value === item.value };
            })
        })
        setFormItemValue && setFormItemValue(item);

        onChangeOK && onChangeOK(item);
    }

    useEffect(() => {
        if (defaultValue?.value) {
            context.formData[context.name as string] = defaultValue;
            setFormItemValue && setFormItemValue(defaultValue);

            setOptionsList(preArr => {
                return preArr.map(option => {
                    if (defaultValue.value === option.value) {
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
        <div className={`radio-wrapper ${inline && `d-flex`}`}>
            {optionsList?.map(item => {
                return <div key={item.value} className="form-check" style={{ marginRight: "20px" }}>
                    <input disabled={item.disabled} className={cls} type="radio" name={item.name} id={item.id} checked={item.checked} onChange={() => handleChange(item)} value={item.value} />
                    <label className="form-check-label" htmlFor={item.id}>
                        {item.label || "Default Radio"}
                    </label></div>
            })}
        </div>
    </>
}

export default withTranslation()(Radio);