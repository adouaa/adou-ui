import React, { useState, useEffect } from 'react';
import 'animate.css';

function Collapse() {
    const [isVisible, setIsVisible] = useState(false);
    const [animation, setAnimation] = useState('');

    const handleToggle = () => {
        if (isVisible) {
            // 开始播放退出动画
            setAnimation('animate__fadeOutLeft');
        } else {
            // 开始播放进入动画
            setIsVisible(true); // 先显示元素
            setAnimation('animate__fadeInLeft');
        }
    };

    // 监听动画结束事件，隐藏元素
    const onAnimationEnd = () => {
        if (animation === 'animate__fadeOutLeft') {
            setIsVisible(false);
        }
        setAnimation('');
    };

    return (
        <>
            <button onClick={handleToggle} className="btn btn-primary">
                Toggle width collapse
            </button>
            <div style={{ minHeight: "130px" }}>
                {isVisible && (
                    <div
                        className={`animate__animated ${animation}`}
                        onAnimationEnd={onAnimationEnd}
                        id="collapseExample"
                        style={{ width: "300px" }}
                    >
                        <div className="card card-body">
                            This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered.
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default Collapse;
