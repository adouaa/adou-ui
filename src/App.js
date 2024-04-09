import { useRef, useState } from "react";
import MultipleSelect from "./components/adou-multipleSelect";
import Modal from "./components/adou-modal";
import Button from "./components/adou-button";
import Form from "./components/adou-form";
import FormItem from "./components/adou-formItem";

// 注意：组件里面用的value状态应该是自己定义的一个，而不是用父组件传递过来的defaultValue，这个只能当做一开始的默认值来使用！

function App() {
  const options = [
    { value: "beijing", label: "北京" },
    { value: "shanghai", label: "上海市区" },
    { value: "guangzhou", label: "广州" },
    { value: "chengdu", label: "成都" },
    { value: "hangzhou", label: "杭州" },
  ];

  // 注意，如果一个页面的多个 radio表单用到同一个数据，必须让 每项数据的name树形不一样，不然 两个radio表单会起冲突
  const [radioData] = useState([
    {
      value: "beijing",
      label: "北京",
      name: "test",
      id: "id1",
      checked: false,
    },
    {
      value: "shanghai",
      label: "上海",
      name: "test",
      id: "id2",
      checked: false,
    },
    {
      value: "guangzhou",
      label: "广州",
      name: "test",
      id: "id3",
      checked: false,
      disabled: true,
    },
    {
      value: "chengdu",
      label: "成都",
      name: "test",
      id: "id4",
      checked: false,
    },
    {
      value: "hangzhou",
      label: "杭州",
      name: "test",
      id: "id5",
      checked: false,
    },
  ]);

  const [checkboxOptions] = useState([
    { id: 1, name: "pizza", label: "披萨", value: "pizza", checked: false },
    { id: 2, name: "burger", label: "汉堡包", value: "burger", checked: false },
    { id: 3, name: "sushi", label: "寿司", value: "sushi", checked: false },
    { id: 4, name: "taco", label: "塔可", value: "taco", checked: false },
    { id: 5, name: "pasta", label: "意大利面", value: "pasta", checked: false },
  ]);

  const [defaultCheckboxData] = useState([
    { id: 1, name: "pizza", label: "披萨", value: "pizza" },
    { id: 5, name: "pasta", label: "意大利面", value: "pasta" },
  ]);

  // input逻辑
  const [inputData] = useState("阿豆");

  const [textAreaData] = useState("");
  const [defaultSelectData] = useState({
    value: "chengdu",
    label: "成都",
  });
  const [selectData, setSelectData] = useState("");
  const [defaultLiveSearchSelectData] = useState({
    value: "guangzhou",
    label: "广州",
    name: "test",
  });
  const [liveSearchSelectData] = useState("");
  const [multipleSelectData, setMultipleSelectData] = useState([]);
  const [defaultMultipleSelectData] = useState([
    { value: "beijing", label: "北京" },
    { value: "shanghai", label: "上海市区" },
  ]);
  const [checkboxData, setCheckboxData] = useState([]);

  // modal逻辑
  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    setDefaultTextArea("厕所一下啊");
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };
  const cancelModal = () => {
    setModalVisible(false);
  };

  // 测试form
  const formRef = useRef(null);

  const [defaultTextAreaValye, setDefaultTextArea] = useState("你好，阿豆");

  // 功能1：提交时获取所有表单数据
  const submit = () => {
    formRef.current.submitForm((formData) => {
      console.log(formData);
    });
    setModalVisible(false);
  };

  // 功能2：重置表单数据--选择框什么的要自己在这边再手动清除一遍
  const reset = () => {
    // setDefaultLiveSearchSelectData({});
    // setDefaultSelectData({});
    // setDefaultMultipleSelectData([]);
    formRef.current.resetForm();
  };

  return (
    <div className="App p-3">
      <MultipleSelect defaultValue={defaultMultipleSelectData} options={options}></MultipleSelect>
      <div className="operate my-2">
        <Button onClickOK={submit} type="primary">
          提交
        </Button>
        <Button onClickOK={reset}>重置</Button>
      </div>
      <Button type="danger" round onClickOK={openModal}>
        打开
      </Button>

      <div className="mt-3">
        <Modal
          show={modalVisible}
          overflowY
          title="标题~"
          content={
            <>
              <Form ref={formRef}>
                <FormItem label="邮箱" name="email">
                  <FormItem.Input prefixContent={"email:"}></FormItem.Input>
                </FormItem>
                <FormItem name="city" label="城市">
                  <FormItem.Select
                    defaultValue={defaultSelectData} // 必须传一个对象--包含 label和value属性，value属性一定要有
                    onChangeOK={(item) => {
                      console.log("App item = ", item);
                      setSelectData(item);
                    }}
                    options={options}
                    placeholder="请选择"
                  ></FormItem.Select>
                </FormItem>
                <FormItem label="富文" name="editor">
                  <FormItem.TextArea
                    defaultValue={defaultTextAreaValye}
                    onChangeOK={(value) => {}}
                  ></FormItem.TextArea>
                </FormItem>
                <FormItem label="实时" name="live">
                  <FormItem.LiveSearchSelect
                    defaultValue={defaultLiveSearchSelectData}
                    onSelectOK={(item) => {
                      // setLiveSearchSelectData(item);
                    }}
                    options={options}
                  ></FormItem.LiveSearchSelect>
                </FormItem>
                <FormItem label="多选" name="multiple">
                  <FormItem.MultipleSelect
                    options={options}
                    defaultValue={defaultMultipleSelectData}
                    onMultipleSelectChangeOK={(arr) => {
                      setMultipleSelectData(arr);
                      console.log(arr);
                    }}
                  ></FormItem.MultipleSelect>
                </FormItem>
                <FormItem labelPosition="center" label="单选" name="radio">
                  <FormItem.Radio
                    inline={false}
                    defaultValue={{ value: "chengdu", label: "成都" }}
                    options={radioData}
                    onChangeOK={(item) => {
                      console.log("父组件item = ", item);
                    }}
                  ></FormItem.Radio>
                </FormItem>
                <FormItem labelPosition="top" label="复选" name="checkbox">
                  <FormItem.Checkbox
                    inline={false}
                    options={checkboxOptions}
                    defaultValue={defaultCheckboxData}
                    onChangeOK={(data) => {
                      setCheckboxData(data);
                    }}
                  ></FormItem.Checkbox>
                </FormItem>
              </Form>
              <Button onClickOK={reset}>重置</Button>
            </>
          }
          onClose={closeModal}
          onCancel={cancelModal}
          onConfirm={submit}
        ></Modal>
      </div>

      {/* 数据展示 */}
      {
        <>
          <div>
            input框内容：
            <h4>{inputData}</h4>
            <br />
          </div>
          <div>
            textArea框内容：
            <h4>{textAreaData}</h4>
            <br />
          </div>
          <div>
            select框内容：
            <h4>{selectData.label}</h4>
            <br />
          </div>
          <div>
            实时搜索框内容：
            <h4>{liveSearchSelectData.label}</h4>
            <br />
          </div>
          <div>
            多选框内容：
            {multipleSelectData.map((item) => (
              <h6 key={item.value}>{item.label}</h6>
            ))}
            <br />
          </div>
          <div>
            checkbox框内容：
            {checkboxData.map((item) => (
              <h6 key={item.value}>{item.label}</h6>
            ))}
            <br />
          </div>
        </>
        /* <div>
        {defaultCheckboxData && defaultCheckboxData.map(item => {
          return item.checked && <h1 key={item.value}>{item.label}</h1>
        })}
      </div> */
      }
    </div>
  );
}

export default App;
