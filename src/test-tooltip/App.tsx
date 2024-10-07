import Tooltip from 'components/adou-tooltip';
import React from 'react';

const App = () => {
    return (
        <div style={{ padding: '50px' }}>
            <Tooltip bgc="red" color="black" text="这是一个提示信息这是一个提示信息这是一个提示信息这是一个提示信息" position="bottom" borderColor="green">
                <button style={{ padding: '100px' }}>悬停我悬停我悬停我悬停我</button>
            </Tooltip>

            <Tooltip text="这是一个提示信息" position="bottom">
                <span>悬停我</span>
            </Tooltip>

            <Tooltip text="这是一个提示信息" position="left">
                <a href="#">悬停我</a>
            </Tooltip>

            <Tooltip text="这是一个提示信息" position="right">
                <div>悬停我</div>
            </Tooltip>
        </div>
    );
};

export default App;
