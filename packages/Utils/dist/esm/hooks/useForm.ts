import { useEffect, useState } from "react";

const useForm = (data: any) => {
  const [formData, setFormData] = useState<any>(data);

  // form.setFieldsValue({ note: 'Hello world!', gender: 'male' });

  const getData = () => {
    return formData;
  };
  const setFieldValue = (data: any) => {
    setFormData((preData: any) => ({
      ...preData,
      ...data,
    }));
  };
  const getFieldValue = (key: string) => {
    return formData[key];
  };
  let validate; // 也可以在这边实现，把 rules都传过来，然后返回的时候多传一个 errors，给 FormIten使用

  const reset = () => {
    setFormData(data);
    // 重置
  };
  const clear = () => {
    setFormData({});
  };

  useEffect(() => {
    setFormData(data);
  }, []);

  return {
    getData,
    validate,
    reset,
    clear,
    setFieldValue,
    getFieldValue,
    setFormData,
    formData,
  };
};

export default useForm;
