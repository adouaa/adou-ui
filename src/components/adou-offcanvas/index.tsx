import useClickOutside from 'hooks/useClickOutside';
import { useEffect, useRef, useState } from 'react';
import React from 'react';

interface OffCanvasProps {
    clickOutside?: boolean;
}

const OffCanvas = ({ clickOutside = true }: OffCanvasProps) => {
    const [hiding, setHiding] = useState(false);
    const [show, setShow] = useState<boolean>(false);
    const [showMask, setShowMask] = useState<boolean>(false);

    const offCanvasRef = useRef<any>(null);

    const toggleOffcanvas = () => {
        if (show) {
            handleClose();
        } else {
            handleOpen();
        }
    };

    const handleClose = () => {
        setHiding(true);

        setTimeout(() => {
            setHiding(false);
            setShow(false);
        }, 200);
        setTimeout(() => {
            setShowMask(false);
        }, 300);
    };

    const handleOpen = () => {
        setShowMask(true);

        setTimeout(() => {
            setShow(true);
        }, 100);
    };

    useClickOutside(offCanvasRef, handleClose, clickOutside && offCanvasRef.current && show);

    return (
        <div className="offcanvas-wrapper">
            <button onClick={toggleOffcanvas} className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                Toggle right offcanvas
            </button>
            <div
                ref={offCanvasRef}
                className={`offcanvas offcanvas-end ${show ? 'show' : ''} ${hiding ? 'hiding' : ''}`}
                tabIndex={-1}
                id="offcanvasRight"
                aria-labelledby="offcanvasRightLabel"
            >
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasRightLabel">
                        Offcanvas right
                    </h5>
                    <button onClick={toggleOffcanvas} type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className={`offcanvas-body`}>...</div>
            </div>
            {showMask && <div style={{ transition: 'all .3s ease' }} className={`offcanvas-backdrop fade ${show ? 'show' : ''}`}></div>}
        </div>
    );
};

export default OffCanvas;
