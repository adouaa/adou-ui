import { useRef, useState } from "react";
import Form, { FormItem } from "./components/adou-form";
const App = () => {
  const [options, setOptions] = useState([
    { label: "Apple", value: "apple_value" },
    { label: "Banana", value: "banana_value" },
    { label: "Cherry", value: "cherry_value" },
    { label: "Date", value: "date_value" },
    { label: "Elderberry", value: "elderberry_value" },
    { label: "Fig", value: "fig_value" },
    { label: "Grape", value: "grape_value" },
    { label: "Honeydew", value: "honeydew_value" },
    { label: "Kiwi", value: "kiwi_value" },
    { label: "Lemon", value: "lemon_value" },
  ]);
  const handleChangeOK = (value) => {};

  const formRef = useRef();

  const handleBtnClick = () => {
    formRef.current.validate((valid) => {
      if (valid) {
        console.log("校验通过");
        formRef.current.submitForm((data) => {
          console.log(data);
        });
      } else {
        console.log("校验失败");
      }
    });
  };

  return (
    <>
      <div>
        <Form ref={formRef}>
          <FormItem label="测试" name="test">
            <FormItem.InputSelect
              // defaultValue={[{ value: "lemon_value" }]}
              onChangeOK={handleChangeOK}
              options={options}
            ></FormItem.InputSelect>
          </FormItem>
        </Form>
        <button onClick={handleBtnClick}>提交</button>
      </div>
    </>
  );
};

export default App;
