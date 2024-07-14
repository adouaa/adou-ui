import { useRef, useState } from "react";
import React from "react";
import AdouNewForm from "./components/adou-new-form"
import AdouInput from "components/adou-Input";
import Button from "components/adou-button";
import AdouSelect from "components/adou-select";
import AdouTextarea from "components/adou-textarea";
import AdouCheckbox from "components/adou-checkbox";
import AdouRetrieveSelect from "components/adou-retrieve-select"
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
    }
  }

  const handleValidateForm = () => {

    if (adouNewFormRef?.current) {
      adouNewFormRef.current.validateForm();
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

  const [foodOptions, setFoodOptions] = useState([
    { label: "烤鸭", value: "Kǎo yā" },
    { label: "麻辣火锅", value: "Málà huǒguō" },
    { label: "小笼包", value: "Xiǎolóngbāo" },
    { label: "北京炸酱面", value: "Běijīng zhájiàng miàn" },
    { label: "杭州西湖醋鱼", value: "Hángzhōu Xīhú cùyú" },
    { label: "广东早茶", value: "Guǎngdōng zǎochá" },
  ]);
  
  const [travelOptions, setTravelOptions] = useState([
    { label: "长城", value: "Chángchéng" },
    { label: "故宫", value: "Gùgōng" },
    { label: "西湖", value: "Xīhú" },
    { label: "张家界", value: "Zhāngjiājiè" },
    { label: "九寨沟", value: "Jiǔzhàigōu" },
    { label: "黄山", value: "Huángshān" },
  ]);

  const [textbookSubjects, setTextbookSubjects] = useState([
    { label: "数学", value: "Shùxué" },
    { label: "科学", value: "Kēxué" },
    { label: "语文", value: "Yǔwén" },
    { label: "英语", value: "Yīngyǔ" },
    { label: "物理", value: "Wùlǐ" },
    { label: "化学", value: "Huàxué" },
    { label: "生物", value: "Shēngwù" },
  ]);

  //  const [defaultCheckboxValue, setDefaultCheckboxValue] = useState<any[]>([

  //   {label: "Yáng Mì", value: "Dílìrèbā"}
  // ]);

  // const [defaultCheckboxValue, setDefaultCheckboxValue] = useState<any>("Wú Yìfán");

  const [defaultCheckboxValue, setDefaultCheckboxValue] = useState<any[]>([
    "Shùxué",
    "Shēngwù",
  ]);

  const [retrieveSelectDefaultValue, setretrieveSelectDefaultValue] = useState<any[]>([
    { value: "Wú Yìfán" },
    { value: "Zhāng zhizhi" }
  ])

  const handleInputChange = (value: string) => {
    setOptions((stars: any[]) => {
      return stars.filter(star => star.value.toLowerCase().includes(value));
    })
  }

  const testRef = useRef<any>();
  const [testValue, setTestValue] = useState<string>("");
  const handleTest = () => {
  }
  
  
  const [tagInputDefaultValue, settagInputDefaultValue] = useState<any[]>([55, 66, "ss"]);

  return (
    <div>
      <Button type="primary" onClickOK={handleGetFormData}>收集</Button>
      <Button type="danger" onClickOK={handleClearForm}>清除</Button>
      <Button type="warning" onClickOK={handleValidateForm}>校验</Button>
      <Button type="warning" onClickOK={handleTest}>测试</Button>
      <AdouNewForm ref={adouNewFormRef}>
        <AdouInput ref={testRef} commonSuffixIcon="fa-solid fa-circle-xmark text-danger" externalClassName="mb-2" labelPosition="center" label="测试1" required name="test-input02" defaultValue={"测试一下啊2"}>
          <i className="fa fa-plus"></i>
        </AdouInput>
        <AdouInput defaultValue={"测试"} labelColor="blue" label="测试9" required name="test-input1">
          <i className="fa fa-plus"></i>
        </AdouInput>
        <AdouInput label="测试2" commonSuffixIcon="fa-solid fa-circle-xmark text-danger" inputGroup required name="test-input2" defaultValue={"测试一下啊2"}>
          <i className="fa fa-plus"></i>
        </AdouInput>
        <AdouInput label="最大阈值啊啊啊你好啊" labelPosition="center" required name="test-input3" defaultValue={"测试一下啊3"}>
          <i className="fa fa-plus"></i>
        </AdouInput>

        <AdouSelect defaultValue={"Běijīng zhájiàng miàn"} commonSuffixIcon="fa-solid fa-circle-xmark text-danger" externalClassName="mb-2" labelPosition="center" label="测试" required name="test-select" options={foodOptions}></AdouSelect>
        <AdouTextarea commonSuffixIcon="fa-solid fa-circle-xmark text-danger" externalClassName="mb-2" inputGroup labelPosition="top" label="测试" required name="test-textarea" defaultValue="55555你好"></AdouTextarea>
        <AdouCheckbox commonSuffixIcon="fa-solid fa-circle-xmark text-danger" externalClassName="mb-2" labelPosition="center" inline={true} label="测试" required name="test-checkbox" options={textbookSubjects} defaultValue={defaultCheckboxValue}></AdouCheckbox>
        <AdouRadio commonSuffixIcon="fa-solid fa-circle-xmark text-danger" externalClassName="mb-2" inline label="测试" labelPosition="center" name="test-radio" options={travelOptions} defaultValue={"Gùgōng"}></AdouRadio>
        <AdouRetrieveSelect commonSuffixIcon="fa-solid fa-circle-xmark text-danger" inputGroup labelPosition="left-top" label="测试" single={true} onChangeOK={handleInputChange} defaultValue={retrieveSelectDefaultValue} name="test-retrieve-select" options={options}></AdouRetrieveSelect>
        <AdouTagInput defaultValue={tagInputDefaultValue} commonSuffixIcon="fa-solid fa-circle-xmark text-danger" labelPosition="left-top" label="测试" name="test-tag-input"></AdouTagInput>
        <AdouCodeTextarea width={"500px"} commonSuffixIcon="fa-solid fa-circle-xmark text-danger" label="测试" labelPosition="left-top" name="test-code-textarea" defaultValue="999998"></AdouCodeTextarea>
      </AdouNewForm>
    </div>
  );
};

export default App;
