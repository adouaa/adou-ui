/* import Input from "./components/adou-Input/index.tsx";
import TextArea from "./components/adou-textarea/index.tsx";
import Select from "./components/adou-select/index.tsx";
import LiveSearchSelect from "./components/adou-liveSearchSelect/index.tsx";
import MultipleSelect from "./components/adou-multipleSelect/index.tsx";
import Radio from "./components/adou-radio/index.tsx";
import Checkbox from "./components/adou-checkbox/index.tsx";
import Modal from "./components/adou-modal/index.tsx";
import Button from "./components/adou-button/index.tsx";
import Form from "./components/adou-form/index.tsx";
import FormItem from "./components/adou-formItem/index.tsx";

export {
  LiveSearchSelect,
  MultipleSelect,
  Radio,
  Checkbox,
  Modal,
  Button,
  Form,
  FormItem,
} */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// 把 App根组件渲染到 id为 root的 dom节点上
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);