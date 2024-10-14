import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import React from 'react';
import './index.scss';
import a from './img/3d41f709296743ab1755c6070d941306.jpg';
import b from './img/R-C (1).jpg';
import c from './img/R-C (2).jpg';
import d from './img/R-C.jpg';
import e from './img/企业微信截图_17235379251859.png';
import f from './img/微信图片_20240814173431.jpg';

const PhotoWall = ({}) => {
    useEffect(() => {
        document.querySelectorAll('.box').forEach(function (wrapper) {
            // 当鼠标在box上移动时，计算偏移量，并更新图片位置
            wrapper.addEventListener('mousemove', function (e) {
                // 获取当前box的尺寸和位置
                const rect = wrapper.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                const img = wrapper.querySelector('img');
                // 根据鼠标位置，动态更新图片的平移和缩放效果
                img.style.transform = `rotate(0deg) translate3d(${x * -0.5}px, ${y * -0.5}px, 0) scale(1.8)`;
            });
            // 鼠标离开时，恢复图片原来的旋转位置
            wrapper.addEventListener('mouseleave', function () {
                const img = wrapper.querySelector('img');
                img.style.transform = 'rotate(-45deg) scale(1.5)';
            });
        });
    }, []);

    return (
        <div className="photo-shall-wrapper">
            <div className="shell">
                <div className="box">
                    <img src={a} />
                </div>
                <div className="box">
                    <img src={b} />
                </div>
                <div className="box">
                    <img src={c} />
                </div>
                <div className="box">
                    <img src={d} />
                </div>
                <div className="box">
                    <img src={e} />
                </div>
                <div className="box">
                    <img src={f} />
                </div>
                <div className="box">
                    <img src={a} />
                </div>
                <div className="box">
                    <img src={b} />
                </div>
                <div className="box">
                    <img src={c} />
                </div>
                <div className="box">
                    <img src={d} />
                </div>
                <div className="box">
                    <img src={e} />
                </div>
                <div className="box">
                    <img src={f} />
                </div>
                <div className="box">
                    <img src={a} />
                </div>
                <div className="box">
                    <img src={b} />
                </div>
                <div className="box">
                    <img src={c} />
                </div>
                <div className="box">
                    <img src={d} />
                </div>
                <div className="box">
                    <img src={e} />
                </div>
                <div className="box">
                    <img src={f} />
                </div>
                <div className="box">
                    <img src={a} />
                </div>
                <div className="box">
                    <img src={b} />
                </div>
                <div className="box">
                    <img src={c} />
                </div>
                <div className="box">
                    <img src={d} />
                </div>
                <div className="box">
                    <img src={e} />
                </div>
                <div className="box">
                    <img src={f} />
                </div>
                <div className="box">
                    <img src={a} />
                </div>
                <div className="box">
                    <img src={b} />
                </div>
                <div className="box">
                    <img src={c} />
                </div>
                <div className="box">
                    <img src={d} />
                </div>
                <div className="box">
                    <img src={e} />
                </div>
                <div className="box">
                    <img src={f} />
                </div>
                <div className="box">
                    <img src={a} />
                </div>
                <div className="box">
                    <img src={b} />
                </div>
                <div className="box">
                    <img src={c} />
                </div>
                <div className="box">
                    <img src={d} />
                </div>
                <div className="box">
                    <img src={e} />
                </div>
                <div className="box">
                    <img src={f} />
                </div>
            </div>
        </div>
    );
};

export default PhotoWall;
