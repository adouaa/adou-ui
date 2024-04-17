import { withTranslation } from "react-i18next";
import classNames from "classnames";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { FormContext, FormContextProps } from "../../../adou-form";

import React from "react";

export interface SelectProps {
    defaultValue?: any;
    options: any[];
    placeholder?: string;
    size?: "sm" | "lg";
    className?: string;
    disabled?: boolean;
    onChangeOK?: (e?: ChangeEvent<HTMLSelectElement>, ...args: any) => void
    setFormItemValue?: (value: any) => void;
}

const Select = (props: SelectProps) => {

    const { defaultValue, options, placeholder, size, className, disabled, onChangeOK, setFormItemValue } = props;

    // 获取 `FormContext.Provider` 提供提供的 `value` 值
    const context: FormContextProps = useContext(FormContext);

    const [newOptions, setNewOptions] = useState(options || []);

    const [value, setValue] = useState(defaultValue);

    const cls = classNames({
        [`form-select form-select-${size}`]: true,
        [className as string]: className
    })


    const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        const selectedIndex = e.target.selectedIndex - 1;
        const selectedOption = options[selectedIndex];
        setValue(selectedOption);
        onChangeOK && onChangeOK(selectedOption);
        context.handleChange(context.name, selectedOption);
        context.checkValidate(selectedOption); // 选中的时候，要让他做校验
        setFormItemValue && setFormItemValue(selectedOption);

    }

    const handleBlur = () => {
        setTimeout(() => {
            context.checkValidate(value.value); // 将value.label换成value.value，为了兼容默认值为空是 请选择的情况
        }, 150);
    }

    useEffect(() => {
        // 这边用判断来，如果表单的数据 context.formData[context.name as string]没有值（""）
        // 就直接给value设置为{ label: "", value: "" }，不能直接设置为""，这样子原生select选中的值会保持原来选中的
        if (!context.formData[context.name as string]) {
            setValue({ label: "", value: "" });
        }

    }, [context.formData[context.name as string]])

    useEffect(() => {
        if (defaultValue?.value) {
            setValue(defaultValue); // 直接在判断有默认值的地方就给表单赋值，就不会出现数据闪动的现象
            // 这边不能直接用 context.handleChange(context.name, defaultValue)来赋默认值，会被置为空，并且失去 提交和重置功能
            context.formData[context.name as string] = defaultValue; // 让 Form里面对应的数据项有值
            setFormItemValue && setFormItemValue(defaultValue);
        } else {
            // js默认的选择框好像只能这样写，不能写成 setValue=({})
            // 只能让它重置为选中第一个选项。。
            setValue({ label: "", value: "" });
        }
    }, [defaultValue])

    useEffect(() => {
        // 创建一个新数组，将 "请选择" 选项添加在数组的开头
        const enhancedOptions = [{ label: "请选择", value: "" }, ...options];
        setNewOptions(enhancedOptions);
        // 如果 defaultValue 未定义，则将选择设置为 "请选择" 选项
        if (!defaultValue) {
            setValue({ label: "请选择", value: "" });
        }
    }, [options])

    return <>
        {/* 这边不给 flex: 1的话，会把label标签的宽度给占走一点点 */}
        <select style={{ flex: 1 }} value={value?.value} onBlur={() => handleBlur()} onChange={(e) => handleSelect(e)} className={cls} aria-label=".form-select-lg example" disabled={disabled}>
            {newOptions.map(item => <option disabled={item.disabled || !item.value} key={item.value} value={item.value}>{item.label}</option>)}
        </select>
    </>;
};

export default withTranslation()(Select);