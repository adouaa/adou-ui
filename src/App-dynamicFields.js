import { useEffect, useState } from "react";
import DynamicFields from "./components/adou-dynamicFields";

const App = () => {
  const [fieldDataObj, setFieldDataObj] = useState();

  const options = [
    { label: "Option 1", value: "value-1", queryString: "option1" },
    { label: "Option 2", value: "value-2", queryString: "option2" },
    { label: "Option 3", value: "value-3", queryString: "option3" },
  ];

  const celebrities = [
    { label: "阿尔伯特·爱因斯坦", value: "新泽西州普林斯顿" },
    { label: "玛丽·居里", value: "法国巴黎" },
    { label: "纳尔逊·曼德拉", value: "南非约翰内斯堡" },
    { label: "简·古道尔", value: "英国伦敦" },
    { label: "列奥纳多·达·芬奇", value: "意大利佛罗伦萨" },
  ];
  const addresses = [
    { label: "纽约市", value: "美国纽约" },
    { label: "东京", value: "日本东京" },
    { label: "巴黎", value: "法国巴黎" },
    { label: "悉尼", value: "澳大利亚悉尼" },
    { label: "里约热内卢", value: "巴西里约热内卢" },
  ];

  const foods = [
    {
      label: "北京烤鸭",
      value:
        "北京烤鸭是中国传统名菜之一，以其酥脆的皮和肥嫩的肉闻名。它通常搭配薄饼、葱丝、黄瓜等配料一起食用。",
    },
    {
      label: "寿司",
      value:
        "寿司是日本的传统美食，它由醋味的米饭和新鲜的生鱼片或其他配料组成。寿司以其精美的外观和独特的口感而受到全球食客的喜爱。",
    },
    {
      label: "意大利比萨",
      value:
        "意大利比萨是一道来自意大利的经典美食，它由薄脆的面饼、番茄酱、奶酪和各种配料组成。比萨可以有许多不同的口味和变种，是全球流行的快餐之一。",
    },
    {
      label: "墨西哥玉米卷",
      value:
        "墨西哥玉米卷，也称为玉米饼或塔科，是墨西哥传统美食之一。它由玉米面制成的薄饼，通常搭配肉类、蔬菜、豆类和辣椒酱等多种配料一起食用。",
    },
    {
      label: "法国奶酥面包",
      value:
        "法国奶酥面包，也称为可颂面包，是法国的特色糕点之一。它有着松脆的外皮和层层叠叠的丰富奶香口感，是早餐或下午茶的经典选择。",
    },
  ];

  const defaultFieldList = [
    { type: "Input", label: "输入框1", value: "test1" },
    { type: "Select", label: "Option 2", value: "value-3", data: "options" },
    {
      type: "MultipleSelect",
      data: addresses,
      label: "地点",
      value: [
        { label: "纽约市", value: "美国纽约" },
        { label: "东京", value: "日本东京" },
      ],
    },
  ];

  const handleDataArr = () => {
    setFieldDataObj({options, addresses, celebrities, foods});
  };

  useEffect(() => {
    handleDataArr();
  }, []);

  return (
    <>
      <DynamicFields
        fieldDataObj={fieldDataObj}
        defaultFieldList={defaultFieldList}
      ></DynamicFields>
    </>
  );
};
export default App;
