import React, { useContext } from 'react'
import { FormContext } from "../adou-form"

import Input from "./adou-formItem-input";
import Select from "./adou-formItem-select";
import TextArea from "./adou-formItem-textarea";
import LiveSearchSelect from "./adou-formItem-liveSearchSelect";
import MultipleSelect from "./adou-formItem-multipleSelect";
import Radio from "./adou-formItem-radio";
import Checkbox from "./adou-formItem-checkbox";


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
