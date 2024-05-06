import Button from "components/adou-button";
import Select from "components/adou-select";
import React, { useEffect, useRef, useState } from "react";
import { withTranslation } from "react-i18next"
import Input from "../adou-Input";
import MultipleSelect from "components/adou-multipleSelect";
import Form, { FormItem } from "components/adou-form";

interface DynamicFieldsProps {
    defaultFieldList?: any,
    fieldDataObj?: any,
    tableTitle?: string,
}

const DynamicFields = (props: DynamicFieldsProps) => {

    const { defaultFieldList, fieldDataObj } = props;


    const [fieldList, setFieldList] = useState<any>(defaultFieldList || []); // 初始输入框数组
    const [dataArr, setDataArr] = useState<any>({});

    const [needData, setNeedData] = useState(false);
    const [dataList, setDataList] = useState(fieldDataObj || []);

    const formRef = useRef<any>();

    const options = [
        { value: 'Input', label: '输入框' },
        { value: 'Select', label: '下拉框' },
        { value: 'MultipleSelect', label: '多选框' },
    ]

    const handleFieldChange = (type: string, value: any, index: number) => {

        // 更新输入框数组中特定索引的值
        const newInputs = [...fieldList];
        const currentObj = newInputs[index]
        if (type === "Input") {
            currentObj.value = value;
        } else if (type === "Select") {
            currentObj.value = value
        } else if (type === "MultipleSelect") {
            currentObj.value = value
        }
        newInputs[index] = currentObj;
        setFieldList(newInputs);
    };

    const handleAddField = () => {
        formRef.current.validate((valid: boolean) => {
            if (valid) {
                formRef.current.submitForm((formData: any) => {
                    // 添加一个新的输入框
                    const newFieldObj = {
                        label: formData.label,
                        type: formData?.type?.value || "Input",
                        data: formData?.data?.value
                    }
                    setFieldList([...fieldList, newFieldObj]);
                    formRef.current.resetForm();
                })
            }
        })

    };

    const handleSubmit = () => {
        // 打印收集到的表单输入内容
        console.log(fieldList);

    };

    const judgeFieldType = (field: any, index: number) => {
        const type = field.type;
        const value = field.value;
        if (type === "Input") {
            return <Input defaultValue={value} onChange={(value) => handleFieldChange(type, value, index)}></Input>
        } else if (type === "Select") {
            return <Select defaultValue={field} onChangeOK={(value) => handleFieldChange(type, value, index)} options={Array.isArray(field.data) ? field.data : (dataArr?.[field.data] || [])}></Select>
        } else if (type === "MultipleSelect") {
            return <MultipleSelect defaultValue={value} onChangeOK={(value) => handleFieldChange(type, value, index)} options={Array.isArray(field.data) ? field.data : (dataArr?.[field.data] || [])}></MultipleSelect>
        }
    }

    const handleRemoveField = (index: number) => {
        setFieldList((preArr: any) => preArr.filter((item: any, i: number) => i !== index));
    }

    const renderFields = () => {
        return fieldList.map((field: any, index: number) => {
            return <tr key={index}>
                <td>
                    <div className="field-box d-flex align-items-center">
                        <div style={{ textAlign: "left", width: "80px", wordBreak: "break-all" }}>{field.label}</div>
                        <div className="ms-2" style={{ flex: 1 }}>
                            {judgeFieldType(field, index)}
                        </div>
                    </div>
                </td>
                <td style={{ verticalAlign: "middle", textAlign: "center", width: "80px" }}><i onClick={() => handleRemoveField(index)}  style={{color: "red", fontSize: "18px", cursor: "pointer"}} className="fa-solid fa-circle-minus"></i></td>
            </tr>
        })
    }

    const handleTyeSelectOK = (e: any) => {
        if (e.value !== "Input") {
            setNeedData(true);
        } else {
            setNeedData(false);
        }
    }

    const convertObjToArr = () => {
        const arr: any = [];
        for (const key in fieldDataObj) {
            arr.push({
                label: key,
                value: key
            })
        }
        arr.push({label: "空", value: "null"})
        setDataList(arr);
    }

    useEffect(() => {
        setDataArr(fieldDataObj);
        renderFields();
        convertObjToArr();
    }, [fieldDataObj])

    return (
        <div className="dynamic-wrapper p-2">
            <div className="content-box">
                <table className="table table-bordered mb-2">
                    <thead>
                        <tr>
                            <th>表单</th>
                            <th style={{ width: "80px" }}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderFields()}
                    </tbody>
                </table>
            </div >
            <div className="add-box d-flex align-items-center">
                <div className="add-btn me-2 mb-3">
                    <Button onClickOK={handleAddField} size="sm" outlineColor="success">
                        <div className="d-flex align-items-center">
                            <i className="fa-solid fa-circle-plus me-2"></i>
                            <div>
                                添加
                            </div>
                        </div>
                    </Button>
                </div>
                {/* <div className="type-select" style={{ flex: 1 }}><Select onChangeOK={(data) => handleFieldTypeSelect(data)} options={options}></Select></div>
                <div className="label-inpu" style={{ flex: 1 }}><Input placeholder="请输入标签" onChangeOK={(value) => handleLabelChange(value)}></Input></div> */}
                <Form ref={formRef}>
                    <FormItem width="260px" name="type" label="类型">
                        <Select onChangeOK={handleTyeSelectOK} options={options}></Select>
                    </FormItem>
                    <FormItem validate rule={[
                        { required: true, message: '标签不能为空' }
                    ]} name="label" label="标签">
                        <Input placeholder="请输入标签"></Input>
                    </FormItem>
                    <FormItem width="260px" validate rule={[
                        { required: true, message: "数据集不能为空" }
                    ]} name="data" label="数据">
                        <Select options={dataList}></Select>
                    </FormItem>
                </Form>
            </div>
            <div>
                <Button onClickOK={handleSubmit} type="primary"><div>保存</div></Button>
            </div>
        </div>
    );
}

export default withTranslation()(DynamicFields);