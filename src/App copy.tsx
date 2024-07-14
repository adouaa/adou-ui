import { useState } from "react";
import Select from "./components/adou-select";
import NewFormTest from "./components/new-form-test";
import RetrieveSelect from "./components/adou-retrieve-select";
import React from "react";

const App = () => {
  const [options, setOptions] = useState([
    { label: "张艺兴", value: "Zhāng Yìxīng" },
    { label: "张芝芝", value: "Zhāng zhizhi" },
    { label: "杨幂", value: "Yáng Mì" },
    { label: "王一博", value: "Wáng Yībó" },
    { label: "迪丽热巴", value: "Dílìrèbā" },
    { label: "吴亦凡", value: "Wú Yìfán" },
  ]);

  const handleInputChange = (value: string) => {
      setOptions((stars: any[]) => {
        return stars.filter(star => star.value.toLowerCase().includes(value));
      })
  }

  return (
    <>
      <RetrieveSelect options={options} onChangeOK={handleInputChange}></RetrieveSelect>
    </>
  );
};

export default App;
