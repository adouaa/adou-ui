import { forwardRef, useImperativeHandle, useRef } from "react";
import React from "react";
import "./index.scss";

interface FormProps {
  commonErrorType?: "label" | "message";
  commonForItemClsssName?: string;
  commonDisabled?: boolean;
  showNotFormItem?: boolean;
  commonContentBackgroundColor?: any;
  commonFormItemWrapperWidth?: any;
  commonFormItemWrapperMinWidth?: any;
  commonFormItemWrapperMaxWidth?: any;
  wrpa?: boolean;
  externalWrapperClassName?: string;
  externalWrapperStyle?: React.CSSProperties;
  commonRules?: any;
  form: any;
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
      commonErrorType = "label",
      commonForItemClsssName,
      commonDisabled,
      showNotFormItem,
      commonContentBackgroundColor = "white",
      wrpa = true,
      externalWrapperClassName,
      externalWrapperStyle,
      commonRules,
      form,
      commonFormItemWrapperWidth,
      commonFormItemWrapperMinWidth,
      commonFormItemWrapperMaxWidth,
      clearable = false,
      size,
      labelWidth,
      layout,
      oneLine = false,
      labelPosition,
      labelColor = "rgb(63 109 184)",
      inline,
      required,
      children,
      eachWordWidth = 22,
      commonSuffixIcon = "",
      onSubmit,
    }: FormProps,
    AdouFormRef
  ) => {
    const formRef = useRef<any>(null);

    // 存放 FormItem 的 refs
    const formItemRefs = useRef<{ [key: string]: React.MutableRefObject<any> }>(
      {}
    );

    const validateForm = () => {
      let isValid = true;
      for (const key in formItemRefs.current) {
        const formItemRef = formItemRefs.current[key];
        if (formItemRef.current) {
          const result = formItemRef.current.validateField("", "", true);
          if (!result) {
            isValid = false;
          }
        }
      }
      return isValid;
    };

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
        if (!child) return;
        const props = child.props;
        if (!showNotFormItem && child.type.displayName !== "FormItem") return; // 过滤掉不是 FormItem
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
          wrapperWidth: commonFormItemWrapperWidth,
          wrapperMaxWidth: commonFormItemWrapperMaxWidth,
          wrapperMinWidth: commonFormItemWrapperMinWidth,
          wrapperClassName: commonForItemClsssName,
          contentBackgroundColor: commonContentBackgroundColor,
          rules: commonRules
            ? commonRules
            : required
            ? [{ required: true }]
            : [],
          oneLine,
          disabled: commonDisabled,
          errorType: commonErrorType,
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
        style={{ flex: 1, ...externalWrapperStyle }}
        className={`adou-new-form-wrapper ${
          externalWrapperClassName ? externalWrapperClassName : ""
        } ${wrpa ? "flex-wrap" : "flex-nowrap"} ${
          layout === "inline" ? "d-flex" : ""
        }`}
        ref={formRef}
        onKeyDown={handleKeyDown}
      >
        {renderChildren()}
      </div>
    );
  }
) as ExtendedForm;

export default Form;
