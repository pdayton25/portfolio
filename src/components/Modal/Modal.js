import React from "react";

import './Modal.css';

const Modal = ({show, setShow, children, modalName}) => {
    const handleOffClick = (e) => {
        if(e.target !== e.currentTarget) {
            return
        } else {
            setShow(false);
        }
    }

    if(!show) {
        return null;
    } 

    return (
        <div className="modal-container" onClick={(e) => {handleOffClick(e)}}>
            <div className="modal">
                <div className="modal-header-container">
                    <h2 className="modal-header-title">{modalName}</h2>
                    <button className="modal-button" onClick={() => setShow(false)}>X</button>
                </div>
                {children}
                <footer className="modal-footer">
                    <button className="bottom-modal-button" onClick={() => setShow(false)}>X</button>
                </footer>
            </div>
        </div>
    )
}
export default Modal;