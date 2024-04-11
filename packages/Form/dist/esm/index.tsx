import React, { createContext, forwardRef, useImperativeHandle, useState } from 'react'

import FormItem from "./FormItem";

export { FormItem };

// 基于 FormContext 下发表单数据源以及修改方法
export const FormContext = createContext({})

export interface FormContextProps {
  handleChange?: any;
  name?: string;
  formData?: any;
  handleValidate?: any;
  checkValidate?: any;
  registerFormItem?: any
}

interface FormProps {
  children?: any,
  name?: string
}

const Form = forwardRef((props: FormProps, formRef) => {
  // 统一管理表单数据源
  const [formData, setFormData] = useState({})

  const [validation, setValidation] = useState(true);

  // 对外暴露的API
  useImperativeHandle(formRef, () => ({
    // 表单提交
    submitForm: (callback: any) => {
      callback && callback({ ...formData });
    },
    validate: (callback: any) => {
      let isValid = true;
      formItems.forEach(item => {
        const validationResult = item.handleValidate();
        console.log("validationResult = ", validationResult);
        
        if (!validationResult && item.validate) isValid = false; // 假设validate方法返回false表示验证失败
      });
      callback && callback(isValid);
    },
    // 表单重置
    resetForm: () => {
      let data: any = { ...formData }
      Object.keys(data).forEach((item) => {
        data[item] = "";
      })
      setFormData(data)
    },
  }))

  // Form表单内的表单项修改统一的赋值方法
  const handleChange = (name?: string, value?: string) => {
    setFormData({
      ...formData,
      [name as string]: value,
    })
  }

  // 提交表单判断是否通过验证
  const handleValidate = (validate: boolean) => {
    setValidation(validate)
  }


  // 添加一个状态来保存FormItem的引用或校验函数列表
  const [formItems, setFormItems] = useState<any[]>([]);
  const registerFormItem = (item: any) => {
    setFormItems((prevArr: any) => [...prevArr, item]);
  };

  const renderContent = () => {
    const renderChildren: any = []
    /* React.Children.map(props.children, (child) => {
      // child.type 子元素自身（FormItem），检查其静态属性 displayName 是否满足条件
      if (child.type.displayName === 'formItem') {
        renderChildren.push(child)
      }
      
    }) */
    props.children.forEach((item: any) => {

      if (item.type.displayName === "formItem") {
        renderChildren.push(item)
      }
    })
    return renderChildren
  }

  // 传入数据源以及数据源的修改方法，子孙后代都可读取 value 中的值
  return <FormContext.Provider value={{ formData, handleChange, handleValidate, registerFormItem }}>{renderContent()}</FormContext.Provider>
})

Form.displayName = 'form'

export default Form