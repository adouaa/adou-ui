import React, { useContext, useState } from 'react';
import { GlobalModalContext } from './adou-globalModal/GlobalModalProvider';
import AlertModal from './adou-globalModal/AlertModal';
import Form, { FormItem } from './adou-form';
import AdouModal from './adou-modal';

function YourMainComponent() {
    const { showGlobalModal } = useContext(GlobalModalContext);
    const handleSelectCatalog = (value: any) => {
        setComponentTypeList([{ value: "CHART", label: "图表" },
        { value: "TABLE", label: "二维表" },
        { value: "PIVOT", label: "透视表" },
        { value: "METRIC", label: "指标" },
        { value: "FORM", label: "自由表单" },])
    }

    const [componentTagList, setComponentTagList] = useState<any[]>([
        { value: "[ECHARTS]", label: "ECHARTS" },
        { value: "[D3]", label: "D3" },
        { value: "[PYTHON]", label: "PYTHON" },
    ])
    const [componentTypeList, setComponentTypeList] = useState<any[]>([

    ])

    const [show, setShow] = useState<boolean>(false);

    const open1 = () => {
        showGlobalModal({
            content: <Form>
                <FormItem validate rule={[{ required: true, message: "类型不能为空" }]} label="目录" name="catalog_id">
                    <FormItem.Select onChangeOK={handleSelectCatalog} options={componentTagList}></FormItem.Select>
                </FormItem>
                {componentTypeList.length > 0 &&
                    <FormItem label="组件" name="component_id">
                        <FormItem.Select onChangeOK={handleSelectCatalog} options={componentTypeList}></FormItem.Select>
                    </FormItem>
                }
            </Form>,
            title: '标题名称111',
            confirmText: '确定111222',

            callback: (action: any) => {
                alert(`action: ${action}111`);
            }
        });
    };
    const renderContent = () => {
        return <>
            <h1>55555555</h1>
            <h1>55555555</h1>
            <h1>55555555</h1>
            <h1>55555555</h1>
            <h1>55555555</h1>
            <h1>55555555</h1>
            <h1>55555555</h1>
            <h1>55555555</h1>
            <h1>55555555</h1>
            <h1>55555555</h1>
            <h1>55555555</h1>
            <h1>55555555</h1>
            <h1>55555555</h1>
            <h1>55555555</h1>
            <h1>55555555</h1>
            <h1>55555555</h1>
        </>
    }

    const open2 = () => {
        /* showGlobalModal({
            type: "tip",
            maxHeight: 200,
            overflowY: true,
            content: renderContent(),
            title: '标题名称222',
            confirmButtonText: '确定222',
            callback: (action: any) => {
                alert(`action: ${action}22`);
            }
        }); */
        setShow(true);
    };

    return (
        <div>
            <button onClick={open1}>Open Alert1</button>
            <button onClick={open2}>Open Alert2</button>

            <AdouModal onCancel={() => setShow(false)} onClose={() => setShow(false)} onConfirm={() => setShow(false)} show={show} content={<Form>
                <FormItem validate rule={[{ required: true, message: "类型不能为空" }]} label="目录" name="catalog_id">
                    <FormItem.Select onChangeOK={handleSelectCatalog} options={componentTagList}></FormItem.Select>
                </FormItem>
                {componentTypeList.length > 0 &&
                    <FormItem label="组件" name="component_id">
                        <FormItem.Select onChangeOK={handleSelectCatalog} options={componentTypeList}></FormItem.Select>
                    </FormItem>
                }
            </Form>}></AdouModal>
            <AlertModal />
        </div>
    );
}

export default YourMainComponent;
