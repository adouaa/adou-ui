import Tooltip from 'components/adou-tooltip';
import React from 'react';

const App = () => {
    return (
        <div style={{ padding: '150px' }}>
            <Tooltip
                bgc="red"
                color="black"
                text="这是一个示信息一个示信息这是一个示信息这是一个一个示信息这是一个示信息这是一个一个示信息这是一个示信息这是一个 left={'300px'} left={'300px'}"
                position="top"
                borderColor="green"
            >
                <button style={{ padding: '30px' }}>悬停我悬停我悬停我悬停我</button>
            </Tooltip>
            <Tooltip
                bgc="red"
                color="black"
                text="right这是一个示fsfsdfsdfsdfd悬停我悬停我悬停我悬停我悬停我悬停我悬停我悬停我悬停我悬停我悬停我悬停我信息"
                position="top-right"
                borderColor="green"
            >
                <button style={{ padding: '30px' }}>right悬停我悬停我悬停我悬停我</button>
            </Tooltip>
            <Tooltip
                bgc="red"
                color="black"
                text="这是一个示信息一个示信息这是一个示信息这是一个一个示信息这是一个示信息这是一个一个示信息这是一个示信息这是一个"
                position="top-left"
                borderColor="green"
            >
                <button style={{ padding: '30px' }}>left悬停我悬停我悬停我悬停我</button>
            </Tooltip>
            <Tooltip width={'80px'} bgc="red" color="black" text="这是一个提示信息这是一个提示信息这是一个提示信息这是一个提示信息" position="bottom-right" borderColor="green">
                <button style={{ padding: '100px' }}>悬停我悬停我悬停我悬停我</button>
            </Tooltip>
            {/* 
            <Tooltip text="这是一个提示信息" position="bottom">
                <span>悬停我</span>
            </Tooltip>

            <Tooltip text="这是一个提示信息" position="left">
                <a href="#">悬停我</a>
            </Tooltip>

            <Tooltip width={'36px'} wrap text="这是一个提示信息" position="left">
                <a href="#">悬停我</a>
            </Tooltip>
            <Tooltip color="#fff" text="这是一个提示信息" position="right">
                <div>悬停我111</div>
            </Tooltip> */}
        </div>
    );
};

export default App;
