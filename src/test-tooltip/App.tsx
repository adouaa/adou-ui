import Tooltip from 'components/adou-tooltip';
import React from 'react';

const App = () => {
    return (
        <div style={{ padding: '150px' }}>
            <div style={{ background: 'green', width: '15px', height: '15px', position: 'absolute', top: '150px', left: '227.5px', zIndex: '999999' }}></div>
            <Tooltip
                width={'120px'}
                tooltipBgc="red"
                tooltipFontColor="black"
                text="111111111111这是一个是一个一个示信息这是一个示信息这是一个这是一个是一个一个示信息这是一个示信息这是一个这是一个是一个一个示信息这是一个示信息这是一个这是一个是一个一个示信息这是一个示信息这是一个 left={'300px'} left={'300px'}"
                position="top"
                arrowBorderColor="orange"
            >
                <button style={{ padding: '30px' }}>悬停我悬停我悬停我悬停我</button>
            </Tooltip>
            <Tooltip
                tooltipBgc="red"
                tooltipFontColor="black"
                text="right这是一个示fsfsdfsdfsdfd悬停我悬停我悬停我悬停我悬停我悬停我悬停我悬停我悬停我悬停我悬停我悬停我信息"
                position="top-right"
                arrowBorderColor="blue"
                width={'200px'}
            >
                <button style={{ padding: '30px' }}>right悬停我悬停我悬停我悬停我</button>
            </Tooltip>
            <Tooltip
                width={'130px'}
                tooltipBgc="red"
                tooltipFontColor="black"
                text="这是一个示信息一个示信息这是一个示信息这是一个一个示信息这是一个示信息这是一个一个示信息这是一个示信息这是一个"
                position="top-left"
                arrowBorderColor="blue"
            >
                <button style={{ padding: '30px' }}>left悬停我悬停我悬停我悬停我</button>
            </Tooltip>
            {/* <Tooltip
                width={'80px'}
                tooltipBgc="red"
                tooltipFontColor="black"
                text="这是一个提示信息这是一个提示信息这是一个提示信息这是一个提示信息"
                position="bottom-right"
                arrowBorderColor="yellow"
            >
                <button style={{ padding: '20px' }}>bottom-right悬停我悬停我悬停我悬停我</button>
            </Tooltip>
            <Tooltip
                left={'15px'}
                tooltipBgc="red"
                tooltipFontColor="black"
                text="这是一个提示信息这是一个提示信息这是一个提示信息这是一个提示信息"
                position="bottom-right"
                arrowBorderColor="yellow"
            >
                <button style={{ padding: '30px' }}>bottom-left悬停我悬停我悬停我悬停我</button>
            </Tooltip>
            <Tooltip tooltipBgc="red" tooltipFontColor="black" text="这是一个提示信息这是一个提示信息这是一个提示信息这是一个提示信息" position="bottom" arrowBorderColor="black">
                <button style={{ padding: '30px' }}>bottom悬停我悬停我悬停我悬停我</button>
            </Tooltip>
            <Tooltip width={'120px'} text="这是一个提示信息.adou-tooltip-arrow-left {}" position="left-top" arrowBorderColor="green">
                <button style={{ padding: '80px' }}>left-top悬停我悬停我悬停我悬停我</button>
            </Tooltip>
            <Tooltip arrowBorderColor="red" width={'120px'} text="这是一个提示信息.adou-tooltip-arrow-left {}" position="left-bottom">
                <button style={{ padding: '80px' }}>left-bottom悬停我悬停我悬停我悬停我</button>
            </Tooltip>

            <Tooltip width={'120px'} text="这是一个提示信息这是一个" position="right-top">
                <button style={{ padding: '80px' }}>right-top悬停我悬停我悬停我悬停我</button>
            </Tooltip>
            <Tooltip width={'60px'} text="这是一个提示信息.adou-tooltip-arrow-left {}" position="right-bottom">
                <button style={{ padding: '80px' }}>right-bottom悬停我悬停我悬停我悬停我</button>
            </Tooltip>
            <Tooltip arrowBorderColor="red" width={'60px'} text="这是一个提示信息.adou-tooltip-arrow-left {}" position="right">
                <button style={{ padding: '80px' }}>right-bottom悬停我悬停我悬停我悬停我</button>
            </Tooltip>
            <Tooltip arrowBorderColor="red" text="这是一个提示信息" position="bottom">
                <span>12312悬停我</span>
            </Tooltip> */}
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
            <Tooltip tooltipFontColor="#fff" text="这是一个提示信息" position="right">
                <div>悬停我111</div>
            </Tooltip> */}
        </div>
    );
};

export default App;
