import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import React from "react";
import "./index.scss";

interface FormProps {
  children?: any;
  labelColor?: string;
  eachWordWidth?: number;
  commonSuffixIcon?: any;
  required?: boolean;
  inline?: boolean;
  labelPosition?: "center" | "top" | "left-top";
}

const Form = forwardRef(
  (
    {
      labelPosition,
      labelColor = "rgb(63 109 184)",
      inline,
      required,
      children,
      eachWordWidth = 21,
      commonSuffixIcon = "",
    }: FormProps,
    AdouFormRef
  ) => {
    const formRef = useRef<any>(null);

    const getFormData = () => {
      const formWrapper = formRef.current; // 获取 search-wrapper 的 DOM 元素
      if (!formWrapper) return;

      const isValid = validateForm();
      if (!isValid) return false;

      // 遍历所有表单元素
      const formValues: any = {};
      const formElements = formWrapper.querySelectorAll(
        "input, select, textarea"
      );

      formElements.forEach((element: any) => {
        const { name, value, tagName, type } = element;
        if (!name) return;
        const child = childRefs.current[name]?.current;
        // 处理 input 元素
        if (tagName === "INPUT") {
          if (type === "checkbox") {
            child?.validate();

            // 如果是复选框，更新 formValues[name] 为选中的复选框的值的数组
            if (!formValues[name]) {
              formValues[name] = [];
            }
            if (element.checked) {
              // 如果是 checkbox的话，会造出多个 input type="checkbox"的表单
              formValues[name].push(value);
            }
          } else {
            child?.validate && child.validate();

            if (child.getValue) {
              formValues[name] = child.getValue();
            } else {
              formValues[name] = value;
            }
          }
        }
        // 处理 select 元素
        else if (tagName === "SELECT") {
          if (child?.getValue) {
            formValues[name] = child.getValue();
          } else {
            formValues[name] = element.value;
          }
        }
        // 处理 textarea 元素
        else if (tagName === "TEXTAREA") {
          formValues[name] = value;
        }
      });

      // 输出收集到的表单值

      // 这里可以根据需要，将 formValues 传递给其他处理函数或者组件
      return formValues;
    };

    const clearForm = () => {
      const formWrapper = formRef.current; // 获取 search-wrapper 的 DOM 元素
      if (!formWrapper) return;

      // 遍历所有child
      for (let key in childRefs.current) {
        let child = childRefs.current[key];
        child.current && child.current.clear && child.current.clear();
      }
    };

    const validateForm = () => {
      const formWrapper = formRef.current; // 获取 search-wrapper 的 DOM 元素
      if (!formWrapper) return false;

      let isValid = true; // 默认表单验证通过

      // 遍历所有child
      for (let key in childRefs.current) {
        let child = childRefs.current[key];
        const valid =
          child.current && child.current.validate && child.current.validate();

        if (!valid) {
          console.log("存在校验不通过的表单：", key);

          isValid = false;
        }
      }

      if (!isValid) {
        console.log("表单校验失败，请填写所有必填项！");
      }

      return isValid;
    };

    const childRefs = useRef<{ [key: string]: React.MutableRefObject<any> }>(
      {}
    );
    let maxLengthLabelWidth: number = 0;
    const calcMaxLabelWidth = () => {
      const labelWidthList: any = [];
      React.Children.map(children, (child) => {
        if (child.props?.label) {
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
        if (!child.props?.name) {
          renderChildren.push(child);
        } else {
          const childRef = React.createRef<any>(); // 创建一个 ref
          // child.type 子元素自身（FormItem），检查其静态属性 displayName 是否满足条件
          const enhancedChildren = React.cloneElement(child, {
            key: child.props.name,
            ref: childRef,
            labelWidth: maxLengthLabelWidth + "px",
            commonSuffixIcon,
            isFormItem: true,
            ...(labelPosition ? { labelPosition } : {}), // 动态添加 required 属性

            ...(inline ? { inline: true } : {}), // 动态添加 required 属性

            ...(required ? { required: true } : {}), // 动态添加 required 属性
            labelColor,

            // 注意：一个组件只能有一个 ref，要么外面提供ref手动处理，要么在 Form组件下统一提供ref
            // 可以自定义要不要在Form下给表单组件提供 ref
            // [`${child.props.name === "test-select" ? "" : "ref"}`]: childRef
          });
          renderChildren.push(enhancedChildren);
          // 将子组件的 ref 存储到 childRefs 中
          if (child.props.name) {
            childRefs.current[child.props.name] = childRef;
          }
        }
      });
      return renderChildren;
    };

    // 对外暴露的API
    useImperativeHandle(AdouFormRef, () => ({
      getFormData,
      clearForm,
      validateForm,
    }));

    return (
      <div
        className={`adou-new-form-wrapper flex-wrap ${inline ? "d-flex" : ""}`}
        ref={formRef}
      >
        {renderChildren()}
      </div>
    );
  }
);

export default Form;
