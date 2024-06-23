import React, { useContext, useEffect, useRef, useState } from 'react'

import "./index.css";
import { FormContext, FormContextProps } from "../../adou-form"
import Input from "./adou-formItem-input";
import Select from "./adou-formItem-select";
import TextArea from "./adou-formItem-textarea";
import LiveSearchSelect from "./adou-formItem-liveSearchSelect";
import MultipleSelect from "./adou-formItem-multipleSelect";
import Radio from "./adou-formItem-radio";
import Checkbox from "./adou-formItem-checkbox";
import TagInput from './adou-formItem-tagInput';
import CodeTextArea from './adou-formItem-codeTextArea/CodeTextArea';



export interface FormItemProps {
  name: string;
  width?: string;
  label: string;
  children: React.ReactNode;
  labelAlignX?: "left" | "right";
  labelWidth?: number
  inline?: boolean;
  validate?: boolean;
  rule?: any;
  maxLabelLength?: number;
  labelAlignY?: any;
  errorInline?: boolean;
  suffixContent?: any;
  commonSuffixContent?: any;
  onSuffixIconClick?: (name: string, value: any) => void;
}

const FormItem = (props: FormItemProps) => {
  // 获取 `FormContext.Provider` 提供提供的 `value` 值
  const context: FormContextProps = useContext(FormContext);

  const {
    suffixContent,
    commonSuffixContent,
    errorInline = false,
    children,
    width,
    name,
    inline = true,
    labelAlignY = "center",
    label, labelWidth = 100,
    validate,
    rule,
    maxLabelLength = 0,
    labelAlignX = "right",
    onSuffixIconClick
  } = props

  const [error, setError] = useState("");

  // 每个字体的width
  const eachWordWidth = 24;


  // 用于失焦的时候来验证表单
  const checkValidate = (value: any) => {
    if (validate) {
      context.handleValidate(false); // 一开始进去先置为错误的，表单验证不通过
      // 做0的判断
      if (rule[0].required && value !== 0 && !value) {
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
    } else { // 为了兼容动态判断是否需要检验表单的情况
      setError("");
      context.handleValidate(false);
    }
  }

  const handleSuffixIconClick = () => {
    onSuffixIconClick && onSuffixIconClick(name, context.formData[name]);
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
        <div className={`form-item-wrapper ${errorInline ? "error-inline" : ""}`}>
          {<div style={{ width: width }} className={`form-item mb-3 ${inline && `d-flex align-items-${labelAlignY}`}`}>
            {/* 常哥指点了一下，要是某个label太长，就不能让再让它按最长label的长度来计算，而是应该固定一个最长值，让它自己挤到下边 */}
            {/* <div className="form-item-label" style={{ minWidth: ((maxLabelLength * eachWordWidth > labelWidth) ? labelWidth : maxLabelLength * eachWordWidth) + "px", textAlign: labelAlignX }}>{label}：</div> */}
            {/* <div className="form-item-label" style={{ minWidth: ((maxLabelLength * eachWordWidth > labelWidth) ? labelWidth : maxLabelLength * eachWordWidth) + "px", maxWidth: ((maxLabelLength * labelWidth > labelWidth) ? labelWidth : maxLabelLength * labelWidth) + "px", textAlign: labelAlignX }}>{label}:</div> */}
            <div className="form-item-label" style={{ width: ((maxLabelLength * eachWordWidth > labelWidth) ? labelWidth : maxLabelLength * eachWordWidth) + "px", textAlign: labelAlignX }}>{label}:</div>

            {/* 这边的 div是展示子组件内容的父级div，这里先 flex: 1先保证父级的宽度是剩下的全部 */}
            <div style={{ flex: 1, marginLeft: "15px" }}>{enhancedChildren}</div>
            {/* {suffixContent && <Button size='sm' outlineColor='danger' className='ms-2'><i className={suffixContent} onClick={handleSuffixIconClick}></i></Button>} */}
            {suffixContent && <div className="suffix-content-container ms-2" onClick={handleSuffixIconClick}>
              {suffixContent}
              
            </div>}
            {commonSuffixContent && <div className="common-suffix-content-container ms-2" onClick={handleSuffixIconClick}>
              {commonSuffixContent}
              
            </div>}
          </div>}
          {/* 乘 0.8是为了更好地调整位置，大概0.8个字体的宽度 */}
          {error && <div className={`form-item-error text-danger small ${error ? 'fadeIn' : 'fadeOut'}`} style={{ textAlign: "left", margin: `-15px 0 5px ${((maxLabelLength * eachWordWidth > labelWidth) ? labelWidth + (0.8 * eachWordWidth) : (maxLabelLength + 0.8) * eachWordWidth) + "px"}`, marginLeft: `${errorInline && "10px"}` }}>{error}</div>}
        </div>
      )
    }
    return null
  }

  // Form自动校验逻辑
  const newFormItemValue = useRef<any>();
  const handleSetFormItemValue = (value: string) => {
    newFormItemValue.current = value;
  }
  const handleValidate = (formData: any, forceTrue?: boolean) => {
    if (forceTrue) {
      setError("");
      return true;
    } else {
      if (validate) {
        let valid = true;
        if (Array.isArray(formData[name])) {
          if (rule[0].required && !formData[name].length) {
            setError(rule[0].message);
            valid = false;
            return valid;
          }
        } else {
          if (rule[0].required && !formData[name]) {
            setError(rule[0].message);
            valid = false;
            return valid;
          }
        }
        if (rule[1]?.type) {
          const type = rule[1].type;
          switch (type) {
            case "email":
              if (!/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(formData[name])) {
                setError(rule[1].message);
                valid = false;
              }
              break;
            case "number":
              if (!/^[0-9]*$/.test(formData[name])) {
                setError(rule[1].message);
                valid = false;
              }
          }
        }
        if (valid) {
          setError("");
        }
        return valid;
      } else { // 为了兼容动态校验表单的情况
        setError("");
        return true;
      }
    }
  }

  useEffect(() => {
    context?.registerFormItem({
      name,
      validate,
      handleValidate: handleValidate // 无法做动态校验哈哈
    });
    // 组件卸载时可能需要一个注销逻辑
  }, []);

  // 复写 FormContext.Provider，增加 name 参数的传递
  return <>
    <FormContext.Provider value={{ ...context, checkValidate, name }}>{renderContent()}</FormContext.Provider>
  </>
}

FormItem.displayName = 'formItem'

FormItem.Input = Input;
FormItem.Select = Select;
FormItem.TextArea = TextArea;
FormItem.LiveSearchSelect = LiveSearchSelect;
FormItem.MultipleSelect = MultipleSelect;
FormItem.Radio = Radio;
FormItem.Checkbox = Checkbox;
FormItem.TagInput = TagInput;
FormItem.CodeTextArea = CodeTextArea;


export default FormItem
