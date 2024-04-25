import React, { useState } from 'react';
import List from './components/adou-list';
import Modal from 'components/adou-modal';
const testData = [
  {
    id: 1,
    name: '1Node123456Node123456Node123456',
    isExpanded: false,
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
  {
    id: 6,
    name: 'Node123456 2',
    isExpanded: false,
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

  return (
    <div style={{ maxWidth: "300px" }}>
      <Modal onCancel={handleCloseModal} onClose={handleCloseModal} onConfirm={handleConfirmModal} show={showModal}></Modal>
      <List activeId={"6"} showEditIcon={true} showAddIcon={true} showOptIcons={true} onOptIconClick={(type, node) => handleOptIconClick(type, node)} isTree={true} onIconClick={handleIconClick} onItemClick={handleItemClick} data={treeData} onToggle={(id) => handleToggle(id)} />
    </div>
  );
};

export default App;
