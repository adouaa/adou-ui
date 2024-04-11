import React, { useContext } from 'react'
import { FormContext } from "../index";


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
  const context = useContext(FormContext)
  const { children, width, name, inline = true, labelPosition = "center", label, labelWidth = 24, validate, rule } = props
  const handleValidate = (value: any) => {
    if (validate) {
      console.log(rule);
      console.log(name);
      console.log(value);
    }
  }
  const renderContent = () => {
    // 子元素检查
    
    if (React.isValidElement(children)) {
      return (
        <>
          {<div style={{width: width}} className={`form-item mb-3 ${inline && `d-flex align-items-${labelPosition}`}` }>
            <div className="form-item-label" style={{minWidth: label.length * labelWidth + "px"}}>{label}：</div>
            {/* 这边的 div是展示子组件内容的父级div，这里先 flex: 1先保证父级的宽度是剩下的全部 */}
            <div style={{flex: 1}}>{children}</div> 
          </div>}
          <div className="form-item-error" style={{textAlign: "center", marginTop: "-10px"}}>{555}</div>
        </>
      )
    }
    return null
  }
  
  // 复写 FormContext.Provider，增加 name 参数的传递
  return <FormContext.Provider value={{ ...context, handleValidate, name }}>{renderContent()}</FormContext.Provider>
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
