import React, { useState, useEffect, useRef } from 'react';
import './index.scss';
import useDrag from '../hooks/useDrag';
import useClickOutside from '../hooks/useClickOutside';

const Dialog = ({ isOpen, onClose, title, children, type }) => {
    const dialogRef = useRef<any>(null);
    const [show, setShow] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [initialPosition, setInitialPosition] = useState({ x: 0, y: 0 });

    const { position, handleMouseDown } = useDrag({ x: initialPosition.x, y: initialPosition.y });

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => {
                setShow(isOpen);
            }, 100);
            setTimeout(() => {
                setIsAnimating(true);
            }, 200);
        } else {
            setTimeout(() => {
                setShow(isOpen);
            }, 100);
        }
    }, [isOpen, type]);

    useClickOutside(dialogRef, onClose);

    return (
        <>
            {(isOpen || isAnimating) && (
                <div className={`dialog-overlay ${show ? 'open' : ''}`}>
                    <div
                        ref={dialogRef}
                        className={`dialog ${show ? 'open' : ''}`}
                        style={{ transform: `translate(${position.x}px, ${position.y}px)`, top: type === 'tip' ? '25%' : '8%' }}
                    >
                        <div className="dialog-header" onMouseDown={handleMouseDown}>
                            <span>{title}</span>
                            <button className="dialog-close" onClick={onClose}>
                                &times;
                            </button>
                        </div>
                        <div className="dialog-content">{children}</div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Dialog;
