import React, { useContext } from 'react'
import { FormContext } from "adou-form";

import Input from './Input';
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
  inline?: boolean
}

const FormItem = (props: FormItemProps) => {
  const context = useContext(FormContext)
  const { children, width, name, inline = true, labelPosition = "center", label, labelWidth = 24 } = props
  const renderContent = () => {
    // 子元素检查
    if (React.isValidElement(children)) {
      console.log((children.type as any).displayName);
      
      return (
        <>
          {<div style={{width: width}} className={`form-item mb-3 ${inline && `d-flex align-items-${labelPosition}`}` }>
            <div className="form-item-label" style={{width: label.length * labelWidth + "px"}}>{label}：</div>
            {children}
          </div>}
         
        </>
      )
    }
    return null
  }

  // 复写 FormContext.Provider，增加 name 参数的传递
  return <FormContext.Provider value={{ ...context, name }}>{renderContent()}</FormContext.Provider>
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
