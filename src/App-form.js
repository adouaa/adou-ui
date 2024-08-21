import { useRef, useState } from "react";

import Input from "./components/adou-Input";
import Modal from "./components/adou-modal";
import Button from "./components/adou-button";
import Form, { FormItem } from "./components/adou-form";
import MultipleSelect from "./components/adou-multipleSelect";
import LiveSearchSelect from "./components/adou-liveSearchSelect";
import Select from "./components/adou-select";
import TextArea from "./components/adou-textarea";
import Radio from "./components/adou-radio";
import Checkbox from "./components/adou-checkbox";
import TagInput from "./components/adou-tag-input";
import AdouInput from "./components/adou-Input";

// 注意：组件里面用的value状态应该是自己定义的一个，而不是用父组件传递过来的defaultValue，这个只能当做一开始的默认值来使用！

function App() {
  const options = [
    { value: "beijing", label: "北京" },
    { value: "shanghai", label: "上海市区" },
    { value: "guangzhou", label: "广州" },
    { value: "chengdu", label: "成都" },
    { value: "hangzhou", label: "杭州" },
    { value: "putian", label: "莆田" },
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
  const [radioData1] = useState([
    {
      value: "beijing",
      label: "北京",
      name: "test1",
      id: "id11",
      checked: false,
    },
    {
      value: "shanghai",
      label: "上海",
      name: "test1",
      id: "id22",
      checked: false,
    },
    {
      value: "guangzhou",
      label: "广州",
      name: "test1",
      id: "id33",
      checked: false,
      disabled: true,
    },
    {
      value: "chengdu",
      label: "成都",
      name: "test1",
      id: "id44",
      checked: false,
    },
    {
      value: "hangzhou",
      label: "杭州",
      name: "test1",
      id: "id55",
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
    formRef.current.validate((valid) => {
      if (valid) {
        formRef.current.submitForm((formData) => {
          console.log(formData);
        });
        setModalVisible(false);
      } else {
        console.log("表单验证失败");
      }
    });
  };

  // 功能2：重置表单数据--选择框什么的要自己在这边再手动清除一遍
  const reset = () => {
    // setDefaultLiveSearchSelectData({});
    // setDefaultSelectData({});
    // setDefaultMultipleSelectData([]);
    formRef.current.resetForm();
  };

  // 功能3：重置表单校验
  const reValidate = () => {
    formRef.current.reValidate();
  };
  const resetForm = () => {
    formRef.current.resetForm();
  };

  const testSubmit = () => {
    formRef.current.validate((valid) => {
      if (valid) {
        formRef.current.submitForm((formData) => {
          console.log(formData);
        });
      }
    });
  };

  const testRef = useRef(null);
  const handleTestClear = () => {
    testRef.current && testRef.current.clear && testRef.current.clear();
  };

  const [aaa, setaaa] = useState({});
  const handle1 = (value) => {
    console.log(value);
  };

  const handleSuffixIconClick = (value) => {
    console.log(value);
  };

  // 测试高亮
 

  return (
    <div className="App p-3">
      <TextArea
            defaultValue={defaultTextAreaValye}
            onChangeOK={(value) => {
              console.log(value);
            }}></TextArea>
      <TagInput defaultValue={["aa", "bb"]}></TagInput>
      <div style={{ maxHeight: "100px", overflow: "auto" }}>
        <Select
          transparent
          defaultValue={{ value: "guangzhou" }}
          options={options}
        ></Select>

        <AdouInput
          type="password"
          transparent
          defaultValue="你好"
          onChange={(value) => handle1(value)}
        >
          123
        </AdouInput>
      </div>
      <button onClick={handleTestClear}>清除</button>
      <MultipleSelect
        ref={testRef}
        showSelected={true}
        defaultValue={defaultMultipleSelectData}
        options={options}
      ></MultipleSelect>
      <Radio
        inline={false}
        options={radioData1}
        onChangeOK={(item) => {
          console.log("父组件item = ", item);
        }}
      ></Radio>
      <TagInput
        onChange={(data) => {
          console.log(data);
        }}
      ></TagInput>
      <Button size="small" type="primary" onClickOK={reValidate}>
        <span>重置校验</span>
      </Button>
      <Button size="small" type="primary" onClickOK={resetForm}>
        <span>重置表单</span>
      </Button>
      <Button size="small" onClickOK={testSubmit}>
        <span>提交数据</span>
      </Button>
      <Form inline errorInline ref={formRef}>
        <FormItem
          rule={[
            {
              required: true,
              message: "请输入邮箱112",
            },
          ]}
          validate
          label="邮箱"
          name="email"
        >
          <Input></Input>
        </FormItem>
        <FormItem
          rule={[
            {
              required: true,
              message: "请选择城市",
            },
          ]}
          validate
          label="城市111"
          name="city"
        >
          <FormItem.Select
            maxHeight="500px"
            style={{ width: "200px" }}
            defaultValue={{ value: "guangzhou" }}
            onChangeOK={(item) => {
              // let a = item; 不会出bug
              setaaa({}); // 出bbug
            }}
            options={options}
            placeholder="请选择"
          ></FormItem.Select>
        </FormItem>
        <FormItem
          rule={[
            {
              required: true,
              message: "请输入富文本",
            },
          ]}
          validate
          label="富文本"
          name="fwb"
        >
          <TextArea
            defaultValue={defaultTextAreaValye}
            onChangeOK={(value) => {
              console.log(value);
            }}
          ></TextArea>
        </FormItem>
        <FormItem
          rule={[
            {
              required: true,
              message: "请选择城市",
            },
          ]}
          validate
          label="多选"
          name="multiple"
        >
          <MultipleSelect
            options={options}
            defaultValue={defaultMultipleSelectData}
          ></MultipleSelect>
        </FormItem>
        <FormItem
          rule={[
            {
              required: true,
              message: "请选择城市",
            },
          ]}
          validate
          label="单选"
          name="radio"
        >
          <Radio
            inline={false}
            options={radioData}
            defaultValue={{ value: "chengdu" }}
            onChangeOK={(item) => {
              console.log("父组件item = ", item);
            }}
          ></Radio>
        </FormItem>
        <FormItem
          label="复选框"
          name="check"
          rule={[
            {
              required: true,
              message: "请选择食物",
            },
          ]}
          validate
        >
          <Checkbox
            inline={false}
            options={checkboxOptions}
            defaultValue={defaultCheckboxData}
            onChangeOK={(data) => {
              console.log(data);
            }}
          ></Checkbox>
        </FormItem>
        <FormItem
          rule={[
            {
              required: true,
              message: "请输入标签",
            },
          ]}
          validate
          label="标签222"
          name="tag"
        >
          <FormItem.TagInput
            defaultValue={["aa", "bb"]}
            onChange={(data) => {
              console.log(data);
            }}
          ></FormItem.TagInput>
        </FormItem>
      </Form>
      {/*  <LiveSearchSelect
        options={options}
        defaultValue={defaultLiveSearchSelectData}
      ></LiveSearchSelect>
      <Input prefixContent={"豆"}></Input> */}
      {/* <div className="operate my-2">
        <Button onClickOK={submit} type="primary">
          提交
        </Button>
        <Button onClickOK={reset}>重置</Button>
      </div> */}
      <Button type="danger" round onClickOK={openModal}>
        <span>打开</span>
      </Button>

      <Input
        type="date"
        defaultValue="2024-04-25"
        prefixContent={"email:"}
        onChange={(e) => {
          console.log(e);
        }}
      ></Input>
      <Select
        defaultValue={{ value: "guangzhou" }}
        onChangeOK={(item) => {
          console.log(item);
        }}
        options={options}
        placeholder="请选择"
      ></Select>

      <TextArea
        defaultValue={defaultTextAreaValye}
        onChangeOK={(value) => {
          console.log(value);
        }}
      ></TextArea>

      <div className="mt-3">
        <Modal
          show={modalVisible}
          width="800px"
          overflowY
          title="标题111~"
          content={
            <>
              <Form
                onSuffixIconClick={handleSuffixIconClick}
                suffixIcon={
                  <Button size="sm" outlineColor="danger" className="ms-2">
                    <i className={"fa-solid fa-trash"}></i>
                  </Button>
                }
                ref={formRef}
                name="adouadoua"
                labelAlignX="right"
              >
                {
                  <FormItem
                    rule={[
                      {
                        required: true,
                        message: "请输入邮箱11",
                      },
                      {
                        type: "email",
                        message: "请输入正确的邮箱",
                      },
                    ]}
                    label="邮箱吗"
                    name="email"
                  >
                    <FormItem.Input
                      type="password"
                      defaultValue="2024-04-25"
                      prefixContent={"email22:"}
                    ></FormItem.Input>
                  </FormItem>
                }
                <FormItem
                  rule={[
                    {
                      required: true,
                      message: "请选择城市222",
                    },
                  ]}
                  validate
                  name="city"
                  label="城市"
                >
                  <FormItem.Select
                    transparent
                    defaultValue={{}}
                    onChangeOK={(item) => {}}
                    options={options}
                    placeholder="请选择"
                  ></FormItem.Select>
                </FormItem>
                <FormItem
                  rule={[
                    {
                      required: true,
                      message: "请输入富文",
                    },
                  ]}
                  validate
                  label="富文"
                  name="editor"
                >
                  <TextArea
                    defaultValue={defaultTextAreaValye}
                    onChangeOK={(value) => {}}
                  ></TextArea>
                </FormItem>
                <FormItem
                  label="实时"
                  name="live"
                  validate
                  rule={[
                    {
                      required: true,
                      message: "请选择城市",
                    },
                  ]}
                >
                  <LiveSearchSelect
                    onSelectOK={(item) => {
                      // setLiveSearchSelectData(item);
                    }}
                    options={options}
                  ></LiveSearchSelect>
                </FormItem>
                <FormItem
                  rule={[
                    {
                      required: true,
                      message: "请选择城市111",
                    },
                  ]}
                  validate
                  label="多选"
                  name="multiple"
                >
                  {/*   <MultipleSelect
                    options={options}
                    defaultValue={defaultMultipleSelectData}
                  ></MultipleSelect> */}
                </FormItem>
                <FormItem
                  width="200px"
                  rule={[
                    {
                      required: true,
                      message: "请选择城市333",
                    },
                  ]}
                  validate
                  labelPosition="center"
                  label="单选"
                  name="radio"
                >
                  <Radio
                    inline={false}
                    options={radioData}
                    onChangeOK={(item) => {
                      console.log("父组件item = ", item);
                    }}
                  ></Radio>
                </FormItem>
                <FormItem
                  rule={[
                    {
                      required: true,
                      message: "请选择城市111",
                    },
                  ]}
                  validate
                  label="多选1"
                  name="multiple1"
                >
                  {/*  <FormItem.MultipleSelect
                    options={options}
                    defaultValue={defaultMultipleSelectData}
                  ></FormItem.MultipleSelect> */}
                </FormItem>
                <FormItem
                  rule={[
                    {
                      required: true,
                      message: "请选择食品",
                    },
                  ]}
                  validate
                  labelPosition="top"
                  label="复选"
                  name="checkbox"
                >
                  <Checkbox
                    options={checkboxOptions}
                    defaultValue={defaultCheckboxData}
                    onChangeOK={(data) => {
                      console.log(data);
                    }}
                  ></Checkbox>
                </FormItem>
              </Form>
              <Button onClickOK={reset}>
                <span>重置</span>
              </Button>
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