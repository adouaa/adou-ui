import Form, { FormItem } from "./components/adou-form";
import { useRef } from "react";
import MultipleSelect from "./components/adou-multipleSelect";
import Button from "./components/adou-button";

const App = () => {
  const options = [
    { value: "beijing", label: "北京" },
    { value: "shanghai", label: "上海市区" },
    { value: "guangzhou", label: "广州" },
    { value: "chengdu", label: "成都" },
    { value: "hangzhou", label: "杭州" },
  ];

  const formRef = useRef();

  const submit = () => {
    formRef.current.validate((valid) => {
      if (valid) {
        formRef.current.submitForm((formData) => {
          console.log(formData);
        });
      }
    });
  };

  const reset = () => {
    formRef.current.resetForm();
  };

  return (
    <>
      <div style={{ width: "400px" }}>
        <MultipleSelect options={options} defaultValue={[{label: "广州", value: "guangzhou"}]}></MultipleSelect>
        <Form ref={formRef}>
          <FormItem
            validate
            rule={[{ required: true, message: "请输入标签" }]}
            name="cs"
            label="测试"
          >
            <FormItem.TagInput defaultVa1lue={"[测试一下][ aa][A]"}></FormItem.TagInput>
          </FormItem>
          <FormItem validate rule={[{required: true, message: "请选择城市"}]} name="city" label="城市">
            <FormItem.MultipleSelect options={options}></FormItem.MultipleSelect>
          </FormItem>
          <FormItem
            rule={[
              {
                required: true,
                message: "请输入用户名",
              },
            ]}
            validate
            label="用户名"
            name="source_user"
          >
            <FormItem.Select options={options} ></FormItem.Select>
          </FormItem>
        </Form>
      </div>
      <Button className="me-2" size="sm" outlineColor="danger" onClickOK={submit}><i className="fa-brands fa-twitter me-1"></i><span>删除当前页面</span></Button>
      <Button size="sm" type="success" textColor="white" onClickOK={reset}><span>重置</span></Button>
    </>
  );
};

export default App;