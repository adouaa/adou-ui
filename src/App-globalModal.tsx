import React, { useRef } from "react";
import { GlobalModalProvider } from './components/adou-globalModal/GlobalModalProvider';
import Test from "./components/Test";
import Form, { FormItem } from "components/adou-form";
import Button from "components/adou-button";
const App = () => {

    const re = useRef<any>();
    const hanldeSubmit = () => {
        re.current.submitForm((data: any) => {
            console.log(data);

        })
    }

    const options = [
        { value: "beijing", label: "北京" },
        { value: "shanghai", label: "上海市区" },
        { value: "guangzhou", label: "广州" },
        { value: "chengdu", label: "成都" },
        { value: "hangzhou", label: "杭州" },
        { value: "putian", label: "莆田" },
    ];

    return (
        <>
            <Form inline commonSuffixContent={"测试"}>
                <FormItem width="280px" label="选择" name="choose">
                    <FormItem.Select options={options}></FormItem.Select>
                </FormItem>
                <FormItem suffixContent={<Button type="primary">测试</Button>} label="测试" name="cs">
                    <FormItem.Input defaultValue={"555666"}></FormItem.Input>
                </FormItem>
                <FormItem suffixContent={<i className="fa fa-solid fa-trash"></i>} label="测试2" name="cs2">
                    <FormItem.Input></FormItem.Input>
                </FormItem>
            </Form>
            {<GlobalModalProvider>
                <div>
                    <Test></Test>
                    <Form ref={re}>
                        <FormItem validate rule={[{ required: true, message: "名称不能为空" }]} label="a" name="a">
                            <FormItem.Input defaultValue={0}></FormItem.Input>
                        </FormItem>
                    </Form>
                    <Button onClickOK={hanldeSubmit}>提交</Button>
                </div>
            </GlobalModalProvider>}</>
    )
}


export default App;