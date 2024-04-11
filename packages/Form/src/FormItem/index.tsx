import React, { useContext, useEffect, useRef, useState } from 'react'
import { FormContext, FormContextProps } from "../index";


import Input from "./Input";
import Select from "./Select";
import TextArea from "./Textarea";
import LiveSearchSelect from "./LiveSearchSelect";
import MultipleSelect from "./MultipleSelect";
import Radio from "./Radio";
import Checkbox from "./Checkbox";


export interface FormItemProps {
  name: string;
  width?: string;
  label: string;
  children: React.ReactNode;
  labelPosition?: string
  labelWidth?: number
  inline?: boolean;
  validate?: boolean;
  rule?: any
}

const FormItem = (props: FormItemProps) => {
  // 获取 `FormContext.Provider` 提供提供的 `value` 值
  const context: FormContextProps = useContext(FormContext);

  const { children, width, name, inline = true, labelPosition = "center", label, labelWidth = 24, validate, rule } = props

  const [error, setError] = useState("");

  const checkValidate = (value: any) => {
    if (validate) {
      context.handleValidate(false); // 一开始进去先置为错误的，表单验证不通过
      if (rule[0].required && !value) {
        return setError(rule[0].message);
      }
      if (rule[1]?.type) {
        const type = rule[1].type;
        switch (type) {

          case "email":
            if (!/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value)) {
              return setError(rule[1].message);
            }
            break;
          case "number":
            if (!/^[0-9]*$/.test(value)) {
              return setError(rule[1].message);
            }
        }
      }
      context.handleValidate(true); // 最后可以执行到这步的时候，说明 表单验证通过
      setError("");
    }
  }

  const renderContent = () => {

    const enhancedChildren = React.Children.map(props.children, (child: any) => {
      return React.cloneElement(child, {
        setFormItemValue: handleSetFormItemValue, // 把子元素的值设置到表单中
      });
    })

    // 子元素检查
    if (React.isValidElement(children)) {
      return (
        <>
          {<div style={{ width: width }} className={`form-item mb-3 ${inline && `d-flex align-items-${labelPosition}`}`}>
            <div className="form-item-label" style={{ minWidth: label.length * labelWidth + "px" }}>{label}：</div>
            {/* 这边的 div是展示子组件内容的父级div，这里先 flex: 1先保证父级的宽度是剩下的全部 */}
            <div style={{ flex: 1 }}>{enhancedChildren}</div>
          </div>}
          {error && <div className="form-item-error text-danger small" style={{ textAlign: "left", margin: `-15px 0 5px ${label.length * labelWidth + "px"}` }}>{error}</div>}
        </>
      )
    }
    return null
  }

  // Form自动校验逻辑
  const newFormItemValue = useRef<any>();
  const handleSetFormItemValue = (value: string) => {
    newFormItemValue.current = value;
  }
  const handleValidate = (formItemValue: any) => {

    if (validate) {
    name === "multiple" && console.log("进来handleValidate = ", formItemValue);
      let valid = true;
      if (rule[0].required && !formItemValue) {
        setError(rule[0].message);
        valid = false;
        return valid;
      }
      if (rule[1]?.type) {
        const type = rule[1].type;
        switch (type) {
          case "email":
            if (!/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(formItemValue)) {
              setError(rule[1].message);
              valid = false;
            }
            break;
          case "number":
            if (!/^[0-9]*$/.test(formItemValue)) {
              setError(rule[1].message);
              valid = false;
            }
        }
      }
      if (valid) {
        setError("");
      }
      return valid;
    }
  }
  useEffect(() => {
    context.registerFormItem({
      name,
      validate,
      handleValidate: () => handleValidate(newFormItemValue.current)
    });
    // 组件卸载时可能需要一个注销逻辑
  }, []);

  // 复写 FormContext.Provider，增加 name 参数的传递
  return <FormContext.Provider value={{ ...context, checkValidate, name }}>{renderContent()}</FormContext.Provider>
}

FormItem.displayName = 'formItem'

FormItem.Input = Input;
FormItem.Select = Select;
FormItem.TextArea = TextArea;
FormItem.LiveSearchSelect = LiveSearchSelect;
FormItem.MultipleSelect = MultipleSelect;
FormItem.Radio = Radio;
FormItem.Checkbox = Checkbox;

export default FormItem
