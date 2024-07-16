import { useState } from "react";
import React from "react";

interface OffCanvasProps {

}

const OffCanvas = ({ }: OffCanvasProps) => {

    const [isOffcanvasVisible, setOffcanvasVisible] = useState(false);
    const [show, setShow] = useState<boolean>(false);

    const toggleOffcanvas = () => {
        if (show) {
            setShow(false);
            setTimeout(() => {
                setOffcanvasVisible(false);
            }, 100);
        } else {
            setOffcanvasVisible(true);
            setTimeout(() => {
                setShow(true);
            }, 10);
        }
    };

    return (
        <div className="offcanvas-wrapper">
            <button onClick={toggleOffcanvas} className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button>
            <div className={`offcanvas offcanvas-end ${isOffcanvasVisible ? "hidding" : ""} ${show ? "show" : ""}`} tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
                    <button onClick={toggleOffcanvas} type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className={`offcanvas-body`}>
                    ...
                </div>
            </div>
            {isOffcanvasVisible && <div className={`offcanvas-backdrop fade ${show ? "show" : ""}`}></div>}
        </div>
    );
};

export default OffCanvas;