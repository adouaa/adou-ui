import { useEffect, useState } from 'react';

const useForm = (data: any) => {
    const [formData, setformData] = useState<any>(data);

    // form.setFieldsValue({ note: 'Hello world!', gender: 'male' });

    const getData = () => {
        return formData;
    };
    const setFieldValue = (data: any) => {
        setformData((preData: any) => ({
            ...preData,
            ...data,
        }));
    };
    const getFieldValue = (key: string) => {
        return formData[key];
    };
    const validate = async () => {}; // 也可以在这边实现，把 rules都传过来，然后返回的时候多传一个 errors，给 FormIten使用

    const reset = () => {
        setformData(data);
        // 重置
    };
    const clear = () => {
        setformData({});
    };

    useEffect(() => {
        setformData(data);
    }, [data]);

    return {
        getData,
        validate,
        reset,
        clear,
        setFieldValue,
        getFieldValue,
        formData,
    };
};

export default useForm;
