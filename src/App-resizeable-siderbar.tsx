import React, { useState } from 'react';
import List from './components/adou-list';
import Modal from 'components/adou-modal';
import "./App.css";
import ResizableSidebar from 'components/adou-resizeable-sliderbar';
import Button from 'components/adou-button';
import "./index.scss";
import Collapse from 'components/adou-collapse';
const testData = [
  {
    id: 1,
    name: '1Node123456Node123456Node123456',
    isExpanded: false,
    showTag: "tag2",
    children: [
      {
        id: 2,
        name: 'Node123456 1.1Node123456',
        isExpanded: false,
        children: [
          {
            id: 3,
            name: 'Node123456 1.1.1',
          },
          {
            id: 4,
            name: 'Node123456 1.1.2',
          },
        ],
      },
      {
        id: 5,
        name: 'Node123456 1.2',
        showTag: "tag2",

      },
    ],
  },
  {
    id: 6,
    name: 'Node123456 2',
    isExpanded: false,
    showTag: "tag1",

    children: [
      {
        id: 7,
        name: 'Node123456 2.1',
      },
      {
        id: 8,
        name: 'Node123456 2.2',
        isExpanded: false,
        children: [
          {
            id: 9,
            name: 'Node123456 2.2.1',
            children: [
              {
                id: 71,
                name: 'Node123456 2.1',
              },
              {
                id: 81,
                name: 'Node123456 2.2',
                isExpanded: false,
                children: [
                  {
                    id: 91,
                    name: 'Node123456 2.2.11111111111',
                    children: [
                      {
                        id: 2,
                        name: 'Node123456 1.1Node123456',
                        isExpanded: false,
                        children: [
                          {
                            id: 3,
                            name: 'Node123456 1.1.1',
                          },
                          {
                            id: 4,
                            name: 'Node123456 1.1.2',
                          },
                        ],
                      },
                      {
                        id: 5,
                        name: 'Node123456 1.2',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];




const App = () => {
  const [treeData, setTreeData] = useState(testData);

  const handleToggle = (nodeId) => {
    // console.log("App nodeId = ", nodeId);

    setTreeData((prevData) =>
      prevData.map((node) =>
        node.id === nodeId ? { ...node, isExpanded: !node.isExpanded } : node
      )
    );
  };

  const handleIconClick = (node: any) => {
    // console.log("App handleIconClick = ", node);
  };

  const handleItemClick = (node: any) => {
    // console.log("App handleItemClick = ", node);
  };
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  }

  const handleConfirmModal = () => {
    handleCloseModal();
  }

  const handleOptIconClick = (type, node) => {
    console.log(type, node);

  }

  const [isShowCollapse, setIsShowCollapse] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleShowCollapse = () => {
    setIsVisible(!isVisible);
    setIsShowCollapse(!isShowCollapse);
  }

  return (
    <div>
      <ul className="nav nav-tabs m-2">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">Active</a>
        </li>
        <li className="nav-item">
          <a className="nav-link  active" href="#" role="button" aria-expanded="false">Dropdown</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
      {/* <Collapse></Collapse> */}
      <Button onClickOK={handleShowCollapse} className="btn btn-primary" type="warning">
        Toggle width collapse
      </Button>
      <div style={{ minHeight: "130px" }}>
        {isVisible &&
          <div className={`collapse collapse-horizontal ${isShowCollapse ? "show" : ""}`} id="collapseWidthExample">
            <div className="card card-body" style={{ width: "300px" }}>
              This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered.
            </div>
          </div>
        }
      </div>
      <div className="container-fluid">
        <div className="row">
          <ResizableSidebar>
            <Modal onCancel={handleCloseModal} onClose={handleCloseModal} onConfirm={handleConfirmModal} show={showModal}></Modal>
            <List prefixTag='fa fa-trash' showSearch showTag={true} maxWidth={300} activeId={"6"} showEditIcon={true} showAddIcon={true} showOptIcons={true} onOptIconClick={(type, node) => handleOptIconClick(type, node)} isTree={true} onIconClick={handleIconClick} onItemClick={handleItemClick} data={treeData} onToggle={(id) => handleToggle(id)}>
              {/*  <div id='tag1' className='tag1'>成功</div>
              <div id='tag2' className='tag2'>失败</div> */}
            </List>
          </ResizableSidebar>
          <main className="col">

          </main>
        </div>
      </div>

    </div>
  );
};

export default App;
