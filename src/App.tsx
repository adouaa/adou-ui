import { useRef, useState } from "react";
import React from "react";
import AdouNewForm from "./components/adou-new-form"
import AdouInput from "components/adou-Input";
import Button from "components/adou-button";
import AdouSelect from "components/adou-select";
import AdouTextarea from "components/adou-textarea";
import AdouCheckbox from "components/adou-checkbox";
import AdouRetrieveSelect from "components/RetrieveBackgroundSelect"
import AdouCodeTextarea from "./components/adou-codeTextArea";
import AdouTagInput from "components/adou-tag-input";
import AdouRadio from "components/adou-radio";

const App = () => {

  const adouNewFormRef = useRef<any>();

  const handleGetFormData = () => {

    if (adouNewFormRef?.current) {
      const data = adouNewFormRef.current.getFormData();
      console.log(data);

    }
  }

  const handleClearForm = () => {

    if (adouNewFormRef?.current) {
      adouNewFormRef.current.clearForm();
      const data = adouNewFormRef.current.getFormData()
    }
  }

  const handleValidateForm = () => {

    if (adouNewFormRef?.current) {
      adouNewFormRef.current.validateForm();
      const data = adouNewFormRef.current.getFormData()
    }
  }

  const [options, setOptions] = useState([
    { label: "张艺兴", value: "Zhāng Yìxīng" },
    { label: "张芝芝", value: "Zhāng zhizhi" },
    { label: "杨幂", value: "Yáng Mì" },
    { label: "王一博", value: "Wáng Yībó" },
    { label: "迪丽热巴", value: "Dílìrèbā" },
    { label: "吴亦凡", value: "Wú Yìfán" },
  ]);

  //  const [defaultCheckboxValue, setDefaultCheckboxValue] = useState<any[]>([

  //   {label: "Yáng Mì", value: "Dílìrèbā"}
  // ]);

  // const [defaultCheckboxValue, setDefaultCheckboxValue] = useState<any>("Wú Yìfán");

  const [defaultCheckboxValue, setDefaultCheckboxValue] = useState<any[]>([
    "Wú Yìfán",
    "Yáng Mì",
  ]);

  const retrieveSelectDefaultValue = [
    { value: "Wú Yìfán" },
    { value: "Zhāng zhizhi" }
  ]

  const handleInputChange = (value: string) => {
    setOptions((stars: any[]) => {
      return stars.filter(star => star.value.toLowerCase().includes(value));
    })
  }


  return (
    <div>
      <Button type="primary" onClickOK={handleGetFormData}>收集</Button>
      <Button type="danger" onClickOK={handleClearForm}>清除</Button>
      <Button type="warning" onClickOK={handleValidateForm}>校验</Button>
      <AdouNewForm ref={adouNewFormRef}>
        <AdouInput commonSuffixIcon="fa-solid fa-circle-xmark text-danger" externalClassName="mb-2" labelPosition="center" label="测试1" width={"500px"} required name="test-input02" defaultValue={"测试一下啊2"}>
          <i className="fa fa-plus"></i>
        </AdouInput>
        <AdouInput labelColor="blue" label="测试9" labelPosition="top" width={"500px"} required name="test-input1" defaultValue={"测试一下啊1"}>
          <i className="fa fa-plus"></i>
        </AdouInput>
        <AdouInput commonSuffixIcon="fa-solid fa-circle-xmark text-danger" prefixContent={"测试2"} inputGroup width={"500px"} required name="test-input2" defaultValue={"测试一下啊2"}>
          <i className="fa fa-plus"></i>
        </AdouInput>
        <AdouInput label="测试3" labelPosition="center" width={"500px"} required name="test-input3" defaultValue={"测试一下啊3"}>
          <i className="fa fa-plus"></i>
        </AdouInput>
        <AdouSelect commonSuffixIcon="fa-solid fa-circle-xmark text-danger" externalClassName="mb-2" labelPosition="left-top" width={"500px"} label="测试" required name="test-select" options={options} defaultValue={"Wáng Yībó"}></AdouSelect>
        <AdouTextarea commonSuffixIcon="fa-solid fa-circle-xmark text-danger" externalClassName="mb-2" width={"300px"} inputGroup labelPosition="top" label="测试" required name="test-textarea" defaultValue="55555你好"></AdouTextarea>
        <AdouCheckbox commonSuffixIcon="fa-solid fa-circle-xmark text-danger" externalClassName="mb-2" labelPosition="center" inline={false} label="测试" required name="test-checkbox" options={options} defaultValue={defaultCheckboxValue}></AdouCheckbox>
        <AdouRadio commonSuffixIcon="fa-solid fa-circle-xmark text-danger" externalClassName="mb-2" inline label="测试" labelPosition="center" name="test-radio" options={options} defaultValue={"Wú Yìfán"}></AdouRadio>

        <AdouRetrieveSelect commonSuffixIcon="fa-solid fa-circle-xmark text-danger" width={"500px"} inputGroup labelPosition="left-top" label="测试" single={false} onChangeOK={handleInputChange} defaultValue={retrieveSelectDefaultValue} name="test-retrieve-select" options={options}></AdouRetrieveSelect>
        <AdouCodeTextarea commonSuffixIcon="fa-solid fa-circle-xmark text-danger" width={"600px"} label="测试" labelPosition="left-top" name="test-code-textarea" defaultValue="999998"></AdouCodeTextarea>
        <AdouTagInput defaultValue={[666, "wwww"]} commonSuffixIcon="fa-solid fa-circle-xmark text-danger" width={"500px"} labelPosition="left-top" label="测试" name="test-tag-input"></AdouTagInput>

      </AdouNewForm>

    
    </div>
  );
};

export default App;
