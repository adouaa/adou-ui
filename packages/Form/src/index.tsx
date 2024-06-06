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
  registerFormItem?: any;
}

interface FormProps {
  children?: any,
  name?: string,
  labelWidth?: number,
  labelAlignX?: "left" | "right",
  inline?: boolean,
  errorInline?: boolean,
  commonSuffixContent?: any,
  onSuffixIconClick?: any;
}

const Form = forwardRef((props: FormProps, formRef) => {

  const {
    commonSuffixContent,
    inline = false,
    errorInline = false,
    labelAlignX,
    name,
    labelWidth,
    onSuffixIconClick
  } = props;


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
        const validationResult = item.handleValidate(formData);
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
      formItems.forEach(item => {
        item.handleValidate(formData, true); // 在重置表单的时候将错误也清除掉--好像没用
      })
      setFormData(data);
    },

    // 表单重新验证
    reValidate: () => {
      formItems.forEach(item => {
        // 不知道为什么在 FormItem中无法通过 context.formData来获取数据，所以这边直接在父组件这里传递过去
        item.handleValidate(formData);
      });
    }
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

  // 计算出最长的label
  let maxLabelLength = 0;
  let array: any = [];
  if (!props.children.length) {
    array.push(props.children);
  } else {
    array = props.children;
  }

  array.forEach((item: any) => {
    if (maxLabelLength < item?.props?.label?.length) {
      maxLabelLength = item.props.label.length;
    }
  })


  const renderContent = () => {
    const renderChildren: any = []

    // 这个方法可行
    React.Children.map(props.children, (child) => {
      // child.type 子元素自身（FormItem），检查其静态属性 displayName 是否满足条件
      if (child?.type?.displayName === 'formItem') {
        const enhancedChildren = React.cloneElement(child, {
          maxLabelLength,
          labelAlignX,
          labelWidth,
          key: child.props.name, // 给每个组件一个 key
          errorInline,
          commonSuffixContent,
          onSuffixIconClick
        })
        renderChildren.push(enhancedChildren)
      }

    })

    // 这边不能直接用 props.children.forEach，会报错：props.children.forEach is not a function
    // 具体原因不清楚，但是可以用上面那个的方法
    // props.children?.forEach((item: any) => {
    //   if (item.type.displayName === "formItem") {
    //     renderChildren.push(item)
    //   }
    // })
    return renderChildren
  }

  // 传入数据源以及数据源的修改方法，子孙后代都可读取 value 中的值
  return <FormContext.Provider value={{ formData, handleChange, handleValidate, registerFormItem }}>
    <div className={`${inline ? "form-wrapper" : ""}`}>
      {renderContent()}
    </div>
  </FormContext.Provider>
})

Form.displayName = 'form'

export default Form