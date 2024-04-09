import { withTranslation } from "react-i18next";
import classNames from "classnames";
import { ChangeEvent, useEffect, useState } from "react";

export interface SelectProps {
    defaultValue?: any;
    options: any[];
    placeholder?: string;
    size?: "sm" | "lg";
    className?: string;
    disabled?: boolean;
    onChangeOK?: (e?: ChangeEvent<HTMLSelectElement>, ...args: any) => void
}

const Select = (props: SelectProps) => {

    const { defaultValue, options, placeholder, size, className, disabled, onChangeOK } = props;

    // 获取 `FormContext.Provider` 提供提供的 `value` 值

    const [value, setValue] = useState(defaultValue);

    const cls = classNames({
        [`form-select form-select-${size} mb-3`]: true,
        [className as string]: className
    })


    const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        const selectedIndex = e.target.selectedIndex;
        const selectedOption = options[selectedIndex];
        setValue(selectedOption);
        onChangeOK && onChangeOK(selectedOption);
    }


    useEffect(() => {
        if (defaultValue?.value) {
            setValue(defaultValue); // 直接在判断有默认值的地方就给表单赋值，就不会出现数据闪动的现象
            // 这边不能直接用 context.handleChange(context.name, defaultValue)来赋默认值，会被置为空，并且失去 提交和重置功能
        } else {
            // js默认的选择框好像只能这样写，不能写成 setValue=({})
            // 只能让它重置为选中第一个选项。。
            setValue({ label: "", value: "" });
        }
    }, [defaultValue])

    return <>
        <select value={value?.value} onChange={(e) => handleSelect(e)} className={cls} aria-label=".form-select-lg example" disabled={disabled}>
            {options?.map(item => <option disabled={item.disabled} key={item.value} value={item.value}>{item.label}</option>)}
        </select>
    </>;
};

export default withTranslation()(Select);