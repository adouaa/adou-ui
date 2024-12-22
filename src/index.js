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
}
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App-special-table';
// import App from './App-copy-text';
// import App from './App-calendar';
// import App from './App-redux.tsx';

// import App from './router-test/App.tsx';

// import App from './App-Modal.tsx';

// import App from './test-gpt/App.tsx';

// import App from "./test-form/App.tsx"

// import App from './test-dialog/App.tsx';

// import App from './test-tooltip/App.tsx';

// import App from './test-according/App.tsx';

// import App from "./test-collapse-y/App.tsx";

// import App from './test-cascader-select/App.tsx';

// import App from './test-toast/App.tsx';

// import App from './test-horizon-scroll-view/App.tsx';

// import App from './test-notification/App.tsx';

// import App from './test-loading/App.tsx';

// import App from './test-switch/App.tsx';

// import App from './test-slider/App.tsx';

// import App from './test-table/App.tsx';

// import App from './test-rate/App.tsx';

import App from './test-list/App.tsx';

// import App from './doc/test-button';

// import App from './doc/doc-calendar';

// import App from './test-form-item/App.tsx';

// import App from './test-collapse-y/App.tsx';

// import App from './test-line-break-list/App.tsx';

// import App from './test-input/App.tsx';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import './index.scss';
// 把 App根组件渲染到 id为 root的 dom节点上
import 'animate.css/animate.min.css';
import store from './store/index.ts';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </HashRouter>
);
