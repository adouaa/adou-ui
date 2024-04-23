import Table, { EditableTableCell } from "./components/adou-table";
import Button from "./components/adou-button";
import { useRef, useState } from "react";
import Modal from "./components/adou-modal";
import Form, { FormItem } from "./components/adou-form";
import Input from "./components/adou-Input";

const App = () => {
  const headLabels = ["日期", "姓名", "地址"];

  const propsData = ["date", "name", "address"];

  const [tableData, setTableData] = useState([
    {
      date: "2016-05-03",
      name: "Tom111",
      address: "No. 189, Grove St, Los Angeles",
      id: 1,
    },
    {
      date: "2016-05-02",
      name: "Tom222",
      address: "No. 189, Grove St, Los Angeles",
      id: 2,
    },
    {
      date: "2016-05-04",
      name: "Tom3",
      address: "No. 189, Grove St, Los Angeles",
      id: 3,
    },

    {
      date: "2016-05-01",
      name: "Tom4",
      address:
        "A very long description that needs to be wrapped in the table cellA very long description that needs to be wrapped in the table cellA very long description that needs to be wrapped in the table cell",
      id: 4,
    },
    {
      date: "2016-05-01",
      name: "Tom4",
      address:
        "A very long description that needs to be wrapped in the table cellA very long description that needs to be wrapped in the table cellA very long description that needs to be wrapped in the table cell",
      id: 4,
    },
    {
      date: "2016-05-01",
      name: "Tom4",
      address:
        "A very long description that needs to be wrapped in the table cellA very long description that needs to be wrapped in the table cellA very long description that needs to be wrapped in the table cell",
      id: 4,
    },
    {
      date: "2016-05-01",
      name: "Tom4",
      address:
        "A very long description that needs to be wrapped in the table cellA very long description that needs to be wrapped in the table cellA very long description that needs to be wrapped in the table cell",
      id: 4,
    },
    {
      date: "2016-05-01",
      name: "Tom4",
      address:
        "A very long description that needs to be wrapped in the table cellA very long description that needs to be wrapped in the table cellA very long description that needs to be wrapped in the table cell",
      id: 4,
    },
    {
      date: "2016-05-01",
      name: "Tom4",
      address:
        "A very long description that needs to be wrapped in the table cellA very long description that needs to be wrapped in the table cellA very long description that needs to be wrapped in the table cell",
      id: 4,
    },
    {
      date: "2016-05-01",
      name: "Tom4",
      address:
        "A very long description that needs to be wrapped in the table cellA very long description that needs to be wrapped in the table cellA very long description that needs to be wrapped in the table cell",
      id: 4,
    },
    {
      date: "2016-05-01",
      name: "Tom4",
      address:
        "A very long description that needs to be wrapped in the table cellA very long description that needs to be wrapped in the table cellA very long description that needs to be wrapped in the table cell",
      id: 4,
    },
    {
      date: "2016-05-01",
      name: "Tom4",
      address:
        "A very long description that needs to be wrapped in the table cellA very long description that needs to be wrapped in the table cellA very long description that needs to be wrapped in the table cell",
      id: 4,
    },
    {
      date: "2016-05-01",
      name: "Tom4",
      address:
        "A very long description that needs to be wrapped in the table cellA very long description that needs to be wrapped in the table cellA very long description that needs to be wrapped in the table cell",
      id: 4,
    },
  ]);

  // 编辑逻辑
  const formRef = useRef();
  const [isShowEditModal, setIsShowEditModal] = useState(false);

  const [editModalValue, setEditModalValue] = useState({});

  const handleShowEditModal = (rowData, rowIndex, prop) => {
    setIsShowEditModal(true);
    setEditModalValue(rowData);
  };

  // 删除逻辑
  const handleDeleteRow = (rowIndex) => {};

  const handleCloseEditModal = () => {
    setIsShowEditModal(false);
  };

  const handleConfirmEditModal = () => {
    handleCloseEditModal();
  };

  const handleChange = (e) => {
    console.log(6666669999, e.target.value);
    setTestValue(e.target.value);
  };

  const [testValue, setTestValue] = useState("12");
  const handleReset = () => {
    setTestValue("");
  };

  return (
    <>
      <div>
        <div className="mt-2">
          <Table
            headBGC="green"
            divider
            eidtable
            tableHover
            data={tableData}
            headLabels={headLabels}
            propsData={propsData}
            maxHeight={"98vh"}
          >
            <EditableTableCell label="日期" prop="date"></EditableTableCell>
            <EditableTableCell
              textPosition="center"
              label="姓名"
              prop="name"
            ></EditableTableCell>
            <EditableTableCell label="地址" prop="address"></EditableTableCell>
            <EditableTableCell
              verticalAlign="middle"
              prop="opt"
              label="操作"
              render={(data, rowData, rowIndex, prop, colIndex) => (
                <>
                  <div className="d-flex">
                    <div className="me-2">
                      <Button
                        onClickOK={() => handleShowEditModal(rowData)}
                        type="primary"
                        size="sm"
                      >
                        <i className="fa-regular fa-pen-to-square"></i>
                      </Button>
                    </div>
                    <Button
                      onClickOK={() => handleDeleteRow(rowIndex)}
                      type="danger"
                      size="sm"
                    >
                      <i className="fa-regular fa-trash-can"></i>
                    </Button>
                  </div>
                </>
              )}
            ></EditableTableCell>
          </Table>
        </div>
      </div>
      <Modal
        width="600px"
        onConfirm={handleConfirmEditModal}
        onCancel={handleCloseEditModal}
        onClose={handleCloseEditModal}
        show={isShowEditModal}
        content={
          <Form ref={formRef}>
            <FormItem label="日期" name="date">
              <FormItem.Input
                defaultValue={editModalValue.date}
              ></FormItem.Input>
            </FormItem>
            <FormItem label="姓名" name="name">
              <FormItem.Input
                defaultValue={editModalValue.name}
              ></FormItem.Input>
            </FormItem>
            <FormItem label="地址" name="address">
              <FormItem.Input
                defaultValue={editModalValue.address}
              ></FormItem.Input>
            </FormItem>
          </Form>
        }
      ></Modal>
    </>
  );
};

export default App;
