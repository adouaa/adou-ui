import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import React from 'react';
import FormItem from './adou-form-item';

interface FormProps {
    commonFormItemWrapperMinWidth?: any;
    commonFormItemWrapperMaxWidth?: any;
    wrpa?: boolean;
    externalWrapperClassName?: string;
    externalWrapperStyle?: React.CSSProperties;
    commonRules?: any;
    form: any;
    commonFormItemWrapperWidth?: any;
    commonWrapperWidth?: any;
    clearable?: boolean;
    size?: "lg" | "default" | "sm";
    labelWidth?: any;
    layout?: "horizontal" | "horizontal-top" | "vertical" | "inline";
    // 以上是新增的属性
    oneLine?: boolean;
    data?: any;
    children?: any;
    labelColor?: string;
    eachWordWidth?: number;
    commonSuffixIcon?: any;
    required?: boolean;
    inline?: boolean;
    labelPosition?: "center" | "top" | "left-top";
    onFormDataChange?: (key: string, value: any) => void;
    onSubmit?: () => void;
  }
  
  // 新增一个接口来扩展 Form 组件类型，使其包含 Item 属性
  interface ExtendedForm
    extends React.ForwardRefExoticComponent<
      FormProps & React.RefAttributes<unknown>
    > {
    Item: React.ComponentType<any>;
  }
  
  const Form = forwardRef(
    (
      {
        wrpa = true,
        externalWrapperClassName,
        externalWrapperStyle,
        commonRules,
        form,
        commonFormItemWrapperWidth,
        commonFormItemWrapperMinWidth,
        commonFormItemWrapperMaxWidth,
        commonWrapperWidth,
        clearable = true,
        size,
        labelWidth,
        layout,
        oneLine = false,
        data,
        labelPosition,
        labelColor = "rgb(63 109 184)",
        inline,
        required,
        children,
        eachWordWidth = 22,
        commonSuffixIcon = "",
        onFormDataChange,
        onSubmit,
      }: FormProps,
      AdouFormRef
    ) => {
      const [formData, setFormData] = useState<any>(data || {});
  
      const formRef = useRef<any>(null);
  
      // 存放 FormItem 的 refs
      const formItemRefs = useRef<{ [key: string]: React.MutableRefObject<any> }>(
        {}
      );
  
      /* const handleChangeData = (key: string, value: any) => {
              setFormData((prevData: any) => ({
                  ...prevData,
                  [key]: value,
              }));
              onFormDataChange && onFormDataChange(key, value);
          }; */
  
      const validate = () => {
        for (const key in formItemRefs.current) {
          const formItemRef = formItemRefs.current[key];
          if (formItemRef.current) {
            formItemRef.current.validateField();
          }
        }
      };
  
      const validateForm = () => {
        let isValid = true;
        for (const key in formItemRefs.current) {
          const formItemRef = formItemRefs.current[key];
          if (formItemRef.current) {
            const result = formItemRef.current.validateField("", true);
            if (!result) {
              isValid = false;
            }
          }
        }
        return isValid;
      };
  
      const getFormData = (needCheck: boolean = true) => {
        if (needCheck) {
          const isValid = validateForm();
          if (!isValid) return false;
        }
  
        return formData;
      };
      const clearFormData = () => {
        setFormData({});
      };
  
      /* const getFormData = (needCheck: boolean = true) => {
              const formWrapper = formRef.current; // 获取 search-wrapper 的 DOM 元素
              if (!formWrapper) return;
  
              if (needCheck) {
                  const isValid = validateForm();
                  if (!isValid) return false;
              }
  
              // 遍历所有表单元素
              const formValues: any = {};
              const formElements = formWrapper.querySelectorAll('input, select, textarea');
  
              formElements.forEach((element: any) => {
                  const { name, value, tagName, type } = element;
                  if (!name) return;
                  const child = childRefs.current[name]?.current;
                  // 处理 input 元素
                  if (tagName === 'INPUT') {
                      if (type === 'checkbox') {
                          // 如果是复选框，更新 formValues[name] 为选中的复选框的值的数组
                          if (!formValues[name]) {
                              formValues[name] = [];
                          }
                          if (element.checked) {
                              // 如果是 checkbox的话，会造出多个 input type="checkbox"的表单
                              formValues[name].push(value);
                          }
                      } else {
                          if (child?.getValue) {
                              formValues[name] = child.getValue();
                          } else {
                              formValues[name] = type === 'number' ? Number(value) : value;
                          }
                      }
                  }
                  // 处理 select 元素
                  else if (tagName === 'SELECT') {
                      if (child?.getValue) {
                          formValues[name] = child.getValue();
                      } else {
                          formValues[name] = element.value;
                      }
                  }
                  // 处理 textarea 元素
                  else if (tagName === 'TEXTAREA') {
                      formValues[name] = value;
                  }
              });
  
              // 输出收集到的表单值
  
              // 这里可以根据需要，将 formValues 传递给其他处理函数或者组件
              return formValues;
          }; */
  
      const clearForm = () => {
        const formWrapper = formRef.current; // 获取 search-wrapper 的 DOM 元素
        if (!formWrapper) return;
  
        // 遍历所有child
        for (let key in childRefs.current) {
          let child = childRefs.current[key];
          child.current && child.current.clear && child.current.clear();
        }
      };
  
      /* const validateForm = () => {
              const formWrapper = formRef.current; // 获取 search-wrapper 的 DOM 元素
              if (!formWrapper) return false;
  
              let isValid = true; // 默认表单验证通过
  
              // 遍历所有child
              for (let key in childRefs.current) {
                  let child = childRefs.current[key];
                  // 如果该表单组件没有validate方法，代表不做校验
                  if (child.current?.validate) {
                      const valid = child.current && child.current.validate && child.current.validate();
  
                      if (!valid) {
                          console.log('存在校验不通过的表单：', key);
  
                          isValid = false;
                      }
                  }
              }
  
              if (!isValid) {
                  console.log('表单校验失败，请填写所有必填项！');
              }
  
              return isValid;
          }; */
  
      const childRefs = useRef<{ [key: string]: React.MutableRefObject<any> }>(
        {}
      );
      let maxLengthLabelWidth: number = 0;
      const calcMaxLabelWidth = () => {
        const labelWidthList: any = [];
        React.Children.map(children, (child) => {
          if (child?.props?.label) {
            labelWidthList.push(child.props?.label);
          }
        });
        const sortedLabelWidthList = labelWidthList.sort(
          (a: string, b: string) => a.length - b.length
        );
        maxLengthLabelWidth =
          sortedLabelWidthList[sortedLabelWidthList.length - 1]?.length *
          eachWordWidth;
      };
  
      const renderChildren = () => {
        const renderChildren: any = [];
        calcMaxLabelWidth();
        // 这个方法可行
        React.Children.map(children, (child) => {
          const props = child.props;
          if (child.type.displayName !== "FormItem") return; // 过滤掉不是 FormItem
          const formItemRef = React.createRef<any>(); // 创建一个 ref
          // child.type 子元素自身（FormItem），检查其静态属性 displayName 是否满足条件
          const enhancedChildren = React.cloneElement(child, {
            labelWidth: labelWidth || maxLengthLabelWidth + "px",
            key: props.name,
            // ref 稍后哦再做，可能子组件要用 React.ForwdRef() 来包裹
            ...(child.formItemRef
              ? { formItemRef: child.formItemRef }
              : { formItemRef }),
            4: maxLengthLabelWidth + "px",
            commonSuffixIcon,
            isFormItem: !oneLine,
            ...(labelPosition ? { labelPosition } : {}), // 动态添加 required 属性
  
            ...(inline ? { inline: true } : {}), // 动态添加 required 属性
  
            ...(required ? { required: true } : {}), // 动态添加 required 属性
            labelColor,
            setFieldValue: form?.setFieldValue, // 设置表单数据
            // onFormDataChange: handleChangeData,
            data: form?.formData,
            // 注意：一个组件只能有一个 ref，要么外面提供ref手动处理，要么在 Form组件下统一提供ref
            // 可以自定义要不要在Form下给表单组件提供 ref
            // [`${props.name === "test-select" ? "" : "ref"}`]: childRef
            size,
            clearable,
  
            layout,
            wrapperWidth: commonWrapperWidth,
            formItemWrapperWidth: commonFormItemWrapperWidth,
            formItemWrapperMaxWidth: commonFormItemWrapperMaxWidth,
            formItemWrapperMinWidth: commonFormItemWrapperMinWidth,
            rules: commonRules,
            oneLine,
            ...props, // 为了不覆盖 FormItem 本来的 属性
          });
          renderChildren.push(enhancedChildren);
          // 将子组件的 ref 存储到 childRefs 中
          // 如果子组件内部没有用 useImperativeHandle来暴露东西的话，chidRef.current就是null
          if (props.name) {
            // childRefs.current[props.name] = child.ref ? child.ref : childRef;
            formItemRefs.current[props.name] = child.formItemRef
              ? child.formItemRef
              : formItemRef;
          }
        });
        return renderChildren;
      };
  
      // 对外暴露的API
      useImperativeHandle(AdouFormRef, () => ({
        // getFormData,
        // clearForm,
        validateForm,
        // clearFormData,
        // validate,
      }));
  
      useEffect(() => {
        setFormData(data);
      }, [data]);
  
      const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        // 检查是否按下了 Ctrl + Enter
        if (event.ctrlKey && event.key === "q") {
          console.log("// 检查是否按下了 Ctrl + Enter: ");
          event.preventDefault(); // 阻止默认行为
          onSubmit && onSubmit(); // 触发提交事件
        }
      };
  
      return (
        <div
          style={{ flex: 1 }}
          className={`adou-new-form-wrapper ${externalWrapperClassName} ${
            wrpa ? "flex-wrap" : "flex-nowrap"
          } ${layout === "inline" ? "d-flex" : ""}`}
          ref={formRef}
          onKeyDown={handleKeyDown}
        >
          {renderChildren()}
        </div>
      );
    }
  ) as ExtendedForm;
  
Form.Item = FormItem;

export default Form;
